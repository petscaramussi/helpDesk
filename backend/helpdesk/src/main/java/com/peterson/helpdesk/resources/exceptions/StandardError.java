package com.peterson.helpdesk.resources.exceptions;

public class StandardError {
    private Long timestamp;
    private Integer status;
    private String error;
    private String message;
    private String path;

    public StandardError(){
        super();
    }

    public StandardError(Long timestanp, Integer status, String error, String message, String path) {
        this.timestamp = timestanp;
        this.status = status;
        this.error = error;
        this.message = message;
        this.path = path;
    }

    public Long getTimestanp() {
        return timestamp;
    }

    public void setTimestanp(Long timestanp) {
        this.timestamp = timestanp;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }
}
