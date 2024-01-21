package com.avasthi.analytics_pipeline_backend.entities;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document("databaseSchema")
@Data
public class DatabaseSchemaEntity {
  private String id;
  private Map<String, String> databaseSchemaSpecification;

}
