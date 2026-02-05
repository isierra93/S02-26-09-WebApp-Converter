package com.nocountry.videoconverter.entities;

import jakarta.persistence.Entity;

import java.time.LocalDateTime;

@Entity
public class ConversionJob {


    private String id;
    private String urlInput;
    private String urlOutput;
    private LocalDateTime createdAt;
    private JobStatus status;



}
