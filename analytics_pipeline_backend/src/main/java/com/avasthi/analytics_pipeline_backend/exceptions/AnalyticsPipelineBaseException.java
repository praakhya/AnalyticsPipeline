package com.avasthi.analytics_pipeline_backend.exceptions;

import org.springframework.http.HttpStatus;

import java.util.Date;

public class AnalyticsPipelineBaseException extends RuntimeException{
  private final Date timestamp = new Date();
  private String error;
  private HttpStatus status;

  public Date getTimestamp() {
    return timestamp;
  }

  public String getError() {
    return error;
  }


  public HttpStatus getStatus() {
    return status;
  }


  public AnalyticsPipelineBaseException(HttpStatus status,
                                        String error) {
    this.status = status;
    this.error = error;
  }

  public AnalyticsPipelineBaseException(HttpStatus status, String error, String reason) {
    super(reason);
    this.error = error;
    this.status = status;
  }

  public AnalyticsPipelineBaseException(HttpStatus status, String error, String reason, Throwable cause) {
    super(reason, cause);
    this.error = error;
    this.status = status;

  }
}
