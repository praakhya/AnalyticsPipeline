package com.avasthi.analytics_pipeline_backend.entities;


import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

import java.util.UUID;

@Document("file")
@Data
@Builder()
public class FileEntity {
  private String mimetype;
  private String originalFilename;
  private String storagePathname;
  private long size;
  private UUID id;
  private String name;
  private String url;
  public void setUrl(String u) {
    this.url = u;
  }
}
