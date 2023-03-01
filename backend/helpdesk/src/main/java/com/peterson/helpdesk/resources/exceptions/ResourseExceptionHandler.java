package com.peterson.helpdesk.resources.exceptions;

import com.peterson.helpdesk.services.exceptions.ObjectnotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
public class ResourseExceptionHandler {

    @ExceptionHandler(ObjectnotFoundException.class)
    public ResponseEntity<StandardError> ObjectnotFoundException(ObjectnotFoundException ex, HttpServletRequest request) {
        StandardError error = new StandardError(System.currentTimeMillis(), HttpStatus.NOT_FOUND.value(), "Object Not Found", ex.getMessage(), request.getRequestURI());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }

}