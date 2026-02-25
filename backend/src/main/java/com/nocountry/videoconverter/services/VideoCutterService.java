package com.nocountry.videoconverter.services;

import com.nocountry.videoconverter.entities.ConversionJob;
import com.nocountry.videoconverter.entities.JobStatus;
import com.nocountry.videoconverter.repositories.ConversionJobRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.CompletableFuture;

@Service
@RequiredArgsConstructor
public class VideoCutterService {

    private static final Logger logger = LoggerFactory.getLogger(VideoCutterService.class);

    private final ConversionJobRepository conversionJobRepository;

    @Async("asyncCutterExecutor")
    public CompletableFuture<ConversionJob> cut(ConversionJob conversionJob) {

        logger.info("Iniciando conversión para job ID: {}", conversionJob.getId());

        conversionJob.setStatus(JobStatus.PROCESSING);
        conversionJobRepository.save(conversionJob);

        try {

            String inputPath = conversionJob.getInputUrl();
            File inputFile = new File(inputPath);

            String outputDir = "videos_procesados/";
            new File(outputDir).mkdirs();

            String outputName = inputFile.getName().replace(".mp4", "_vertical.mp4");
            String outputPath = outputDir + outputName;

            ProcessBuilder pb = new ProcessBuilder(
                    "ffmpeg", "-i", inputPath,
                    "-vf", "crop=ih*9/16:ih",
                    "-y",
                    outputPath
            );

            logger.debug("Ejecutando comando FFmpeg para job {}: {}",
                    conversionJob.getId(), pb.command());

            pb.inheritIO();

            Process process = pb.start();
            int exitCode = process.waitFor();

            logger.debug("FFmpeg terminó con código {} para job {}",
                    exitCode, conversionJob.getId());

            if (exitCode == 0) {

                conversionJob.setOutputUrl("/out/" + outputName);
                conversionJob.setStatus(JobStatus.COMPLETED);

                logger.info("Conversión completada exitosamente para job {}. Output: {}",
                        conversionJob.getId(), outputPath);

            } else {

                conversionJob.setStatus(JobStatus.FAILED);

                logger.error("FFmpeg falló para job {} con código {}",
                        conversionJob.getId(), exitCode);
            }

        } catch (IOException | InterruptedException e) {

            conversionJob.setStatus(JobStatus.FAILED);

            logger.error("Error procesando el video para job {}",
                    conversionJob.getId(), e);

            Thread.currentThread().interrupt();

        } finally {

            conversionJobRepository.save(conversionJob);

            logger.debug("Estado final del job {} guardado como {}",
                    conversionJob.getId(), conversionJob.getStatus());
        }

        return CompletableFuture.completedFuture(conversionJob);
    }
}