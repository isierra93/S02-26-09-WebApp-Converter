package com.nocountry.videoconverter.services;

import com.nocountry.videoconverter.entities.ConversionJob;
import com.nocountry.videoconverter.entities.JobStatus;
import com.nocountry.videoconverter.repositories.ConversionJobRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class VideoCleanupScheduler {

    private static final Logger logger = LoggerFactory.getLogger(VideoCleanupScheduler.class);

    private final ConversionJobRepository conversionJobRepository;
    private final VideoStorageService videoStorageService;

    // Corre cada 60s
    @Scheduled(fixedDelay = 60_000)
    public void deleteOldVideos() {

        logger.debug("Ejecutando tarea programada de limpieza de videos");

        LocalDateTime cutoff = LocalDateTime.now().minusMinutes(30);

        // Evitamos borrar jobs PENDING, PROCESSING y EXPIRED
        List<JobStatus> excludedStatus = new ArrayList<>(Arrays.asList(
                JobStatus.PENDING,
                JobStatus.PROCESSING,
                JobStatus.EXPIRED
        ));

        List<ConversionJob> oldJobs =
                conversionJobRepository.findByCreatedAtBeforeAndStatusNotIn(cutoff, excludedStatus);

        if (oldJobs.isEmpty()) {
            logger.debug("No se encontraron jobs para limpieza");
            return;
        }

        logger.info("Se encontraron {} jobs para limpieza", oldJobs.size());

        for (ConversionJob job : oldJobs) {

            logger.debug("Procesando limpieza para job ID: {}", job.getId());

            // Cada delete se maneja de forma independiente para evitar dejar archivos huérfanos
            boolean inputDeleted = deleteFile(job.getId(), "input", job.getInputUrl());
            boolean outputDeleted = deleteFile(job.getId(), "output", job.getOutputUrl());

            try {
                job.setStatus(JobStatus.EXPIRED);
                conversionJobRepository.save(job);

                logger.info("Job {} marcado como EXPIRED. Archivos eliminados: input={}, output={}",
                        job.getId(), inputDeleted, outputDeleted);

            } catch (Exception e) {
                logger.error("Job {} - archivos borrados de disco (input={}, output={}) pero falló la actualización en BD. Estado inconsistente.",
                        job.getId(), inputDeleted, outputDeleted, e);
            }
        }

        logger.debug("Finalizó ejecución del scheduler de limpieza");
    }

    /**
     * Intenta eliminar un archivo individual. Retorna true si se eliminó (o no existía), false si falló.
     */
    private boolean deleteFile(String jobId, String fileType, String filePath) {
        if (filePath == null || filePath.isBlank()) {
            return true;
        }
        try {
            videoStorageService.delete(filePath);
            return true;
        } catch (IOException e) {
            logger.error("Error eliminando archivo {} ({}) del job {}", fileType, filePath, jobId, e);
            return false;
        }
    }
}