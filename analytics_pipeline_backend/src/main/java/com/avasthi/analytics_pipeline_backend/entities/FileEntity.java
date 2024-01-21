package com.avasthi.analytics_pipeline_backend.entities;


import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("file")
@Data
public class FileEntity {
  private String fileName;
  private String fileType;
  private Byte fileData;
}
