package com.avasthi.analytics_pipeline_backend.exceptions;

import org.springframework.http.HttpStatus;

public class InvalidPasswordException extends AnalyticsPipelineBaseException {

  public InvalidPasswordException(String error, String reason) {
    super(HttpStatus.FAILED_DEPENDENCY, error, reason);
  }

  public InvalidPasswordException(String error, String reason, Throwable cause) {
    super(HttpStatus.FAILED_DEPENDENCY, error, reason, cause);
  }
}
