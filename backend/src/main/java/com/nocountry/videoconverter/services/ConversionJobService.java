package com.nocountry.videoconverter.services;

import com.nocountry.videoconverter.entities.ConversionJob;
import com.nocountry.videoconverter.repositories.ConversionJobRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
public class ConversionJobService {

    private final VideoStorageService storageService;
    private final ConversionJobRepository repository;

    public ConversionJob createJob(MultipartFile file) throws Exception {

        String path = storageService.save(file);

        ConversionJob job = new ConversionJob();
        job.setInputUrl(path);

        return repository.save(job);
    }
}
