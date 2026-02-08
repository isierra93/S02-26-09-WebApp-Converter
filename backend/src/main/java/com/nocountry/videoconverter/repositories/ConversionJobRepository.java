package com.nocountry.videoconverter.repositories;

import com.nocountry.videoconverter.entities.ConversionJob;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConversionJobRepository extends JpaRepository<ConversionJob, String> {
}