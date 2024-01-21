package com.avasthi.analytics_pipeline_backend.entities;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Map;

@Document("fieldSchema")
@Data
public class FieldSchemaEntity {
  private String id;
  private Map<String, String> fieldSchemaSpecification;

}
