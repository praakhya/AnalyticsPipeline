package com.avasthi.analytics_pipeline_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Created by vavasthi on 27/1/16.
 */
@ResponseStatus(HttpStatus.FAILED_DEPENDENCY)
public class FileWritingFailedException extends AnalyticsPipelineBaseException {

  public FileWritingFailedException(String error, String reason) {
    super(HttpStatus.FAILED_DEPENDENCY, error, reason);
  }

  public FileWritingFailedException(String error, String reason, Throwable cause) {
    super(HttpStatus.FAILED_DEPENDENCY, error, reason, cause);
  }
}
