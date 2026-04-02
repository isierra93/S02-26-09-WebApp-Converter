package com.nocountry.videoconverter.exceptions;

import com.nocountry.videoconverter.dto.ErrorDto;
import com.nocountry.videoconverter.exceptions.business.EmptyFileException;
import com.nocountry.videoconverter.exceptions.business.ResourceNotFoundException;
import com.nocountry.videoconverter.exceptions.technical.StorageException;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalHandlerException {

    private static final Logger logger = LoggerFactory.getLogger(GlobalHandlerException.class);

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorDto> handleGenericException(Exception e, HttpServletRequest request) {
        logger.error("Error inesperado en {} {}: {}", request.getMethod(), request.getRequestURI(), e.getMessage(), e);

        ErrorDto errorDto = new ErrorDto(
                LocalDateTime.now(),
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                request.getRequestURI(),
                "Ocurrió un error inesperado en el servidor."
        );

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorDto);
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<ErrorDto> handleNoResourceFoundException(NoResourceFoundException e, HttpServletRequest request) {
        logger.warn("Ruta o recurso no encontrado en {} {}: {}", request.getMethod(), request.getRequestURI(), e.getMessage() );

        ErrorDto errorDto = new ErrorDto(
                LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),
                request.getRequestURI(),
                "El endpoint o recurso solicitado no existe"
        );

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorDto);
    }

    @ExceptionHandler(EmptyFileException.class)
    public ResponseEntity<ErrorDto> handleEmptyFileException(EmptyFileException e, HttpServletRequest request) {
        logger.warn("Archivo vacío en {} {}: {}", request.getMethod(), request.getRequestURI(), e.getMessage());

        ErrorDto errorDto = new ErrorDto(
                LocalDateTime.now(),
                HttpStatus.BAD_REQUEST.value(),
                request.getRequestURI(),
                e.getMessage()
        );

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorDto);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorDto> handleResourceNotFoundException(
            ResourceNotFoundException e,
            HttpServletRequest request) {
        logger.warn("Recurso no encontrado en {} {}: {}", request.getMethod(), request.getRequestURI(), e.getMessage());

        ErrorDto errorDto = new ErrorDto(
                LocalDateTime.now(),
                HttpStatus.NOT_FOUND.value(),
                request.getRequestURI(),
                e.getMessage()
        );

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorDto);
    }

    @ExceptionHandler(StorageException.class)
    public ResponseEntity<ErrorDto> handleStorageException(
            StorageException e,
            HttpServletRequest request) {
        logger.error("Error de almacenamiento en {} {}: {}", request.getMethod(), request.getRequestURI(), e.getMessage(), e);

        ErrorDto errorDto = new ErrorDto(
                LocalDateTime.now(),
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                request.getRequestURI(),
                e.getMessage()
        );

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorDto);
    }

}
