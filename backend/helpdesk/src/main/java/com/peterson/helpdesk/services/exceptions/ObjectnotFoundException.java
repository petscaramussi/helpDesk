package com.peterson.helpdesk.services.exceptions;

import java.io.Serial;

public class ObjectnotFoundException extends RuntimeException{
    @Serial
    private static final long serialVersionUID = 1L;

    public ObjectnotFoundException(String message) {
        super(message);
    }

    public ObjectnotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
