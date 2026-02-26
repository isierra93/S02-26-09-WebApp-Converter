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

        // 🔹 Estado: PROCESSING
        conversionJob.setStatus(JobStatus.PROCESSING);
        conversionJob.setDetailStatus("Procesando conversión con FFmpeg");
        conversionJobRepository.save(conversionJob);

        try {

            String inputPath = conversionJob.getInputUrl();
            File inputFile = new File(inputPath);

            // Carpeta donde se almacenan los videos convertidos
            String outputDir = "videos_procesados/";
            new File(outputDir).mkdirs();

            String outputName = inputFile.getName().replace(".mp4", "_vertical.mp4");
            String outputPath = outputDir + outputName;

            /*
             * ProcessBuilder permite ejecutar comandos del sistema operativo.
             * En este caso se invoca FFmpeg para:
             *  - Tomar el archivo de entrada (-i)
             *  - Aplicar un filtro de recorte (crop=ih*9/16:ih)
             *  - Forzar sobreescritura (-y)
             *  - Guardar el resultado en la ruta indicada
             */

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

            // 🔹 Código 0 indica ejecución exitosa
            if (exitCode == 0) {

                conversionJob.setOutputUrl("/out/" + outputName);
                conversionJob.setStatus(JobStatus.COMPLETED);
                conversionJob.setDetailStatus("Conversión exitosa");

                logger.info("Conversión completada exitosamente para job {}. Output: {}",
                        conversionJob.getId(), outputPath);

            } else {

                conversionJob.setStatus(JobStatus.FAILED);
                conversionJob.setDetailStatus(
                        "Error durante el recorte con FFmpeg. Código: " + exitCode
                );

                logger.error("FFmpeg falló para job {} con código {}",
                        conversionJob.getId(), exitCode);
            }

        } catch (IOException | InterruptedException e) {
            // 🔹 Manejo de errores técnicos (ej: FFmpeg no instalado)
            conversionJob.setStatus(JobStatus.FAILED);
            conversionJob.setDetailStatus(
                    "Error interno durante la conversión: " + e.getMessage()
            );

            logger.error("Error procesando el video para job {}",
                    conversionJob.getId(), e);

            Thread.currentThread().interrupt();

        } finally {
            // 🔹 Siempre persistimos el estado final en la base de datos
            conversionJobRepository.save(conversionJob);

            logger.debug("Estado final del job {} guardado como {}",
                    conversionJob.getId(), conversionJob.getStatus());
        }

        return CompletableFuture.completedFuture(conversionJob);
    }
}