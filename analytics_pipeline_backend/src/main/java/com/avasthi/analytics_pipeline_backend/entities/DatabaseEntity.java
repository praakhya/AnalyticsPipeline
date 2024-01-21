package com.avasthi.analytics_pipeline_backend.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document("database")
@Data
public class DatabaseEntity {
  @Id
  private String id;
  private Map<String, String> databaseSpecification;

}
