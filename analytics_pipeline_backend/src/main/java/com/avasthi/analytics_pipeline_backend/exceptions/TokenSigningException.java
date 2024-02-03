package com.avasthi.analytics_pipeline_backend.exceptions;

import org.springframework.http.HttpStatus;

public class TokenSigningException extends AnalyticsPipelineBaseException {

  public TokenSigningException(String error, String reason) {
    super(HttpStatus.FAILED_DEPENDENCY, error, reason);
  }

  public TokenSigningException(String error, String reason, Throwable cause) {
    super(HttpStatus.FAILED_DEPENDENCY, error, reason, cause);
  }
}
