package com.nocountry.videoconverter.controllers;

import com.nocountry.videoconverter.entities.ConversionJob;
import com.nocountry.videoconverter.exceptions.EmptyFileException;
import com.nocountry.videoconverter.exceptions.ResourceNotFoundException;
import com.nocountry.videoconverter.services.ConversionJobService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/conversions")
public class ConversionJobController {

    private final ConversionJobService conversionJobService;

    @PostMapping(value = "/upload", consumes = "multipart/form-data")
    public ResponseEntity<?> uploadVideo(@RequestParam("file") MultipartFile file) throws Exception {

        if (file == null || file.isEmpty()) {
            throw new EmptyFileException("No se recibió ningún archivo.");
        }

        ConversionJob video = conversionJobService.createJob(file);

        return ResponseEntity.ok(video);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ConversionJob> getStatus(@PathVariable String id) {
        ConversionJob job = conversionJobService.getJob(id);
        if (job == null){
            throw new ResourceNotFoundException("No se encontró un archivo con el id: " + id + " .");
        }
        return ResponseEntity.ok(job);
    }

}
