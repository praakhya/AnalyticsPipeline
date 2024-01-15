package com.avasthi.analytics_pipeline_backend.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("data")
@Data
public class DataEntity {
  @Id
  private String id;
  private String title;
  private String data;
}
