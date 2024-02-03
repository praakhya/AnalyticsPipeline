package com.avasthi.analytics_pipeline_backend.exceptions;

import org.springframework.http.HttpStatus;

public class EntityAlreadyExistsException extends AnalyticsPipelineBaseException {
  public EntityAlreadyExistsException(String error, String reason) {
    super(HttpStatus.FAILED_DEPENDENCY, error, reason);
  }
}
