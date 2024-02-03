package com.avasthi.analytics_pipeline_backend.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;
@Document("workspace")
@Data
public class WorkspaceEntity {
  public WorkspaceEntity() {
    this.id = UUID.randomUUID();
  }
  @Id
  private UUID id;
  private String workspaceName;
  private String coverPictureURL;
  private String ownerName;
  private List<String> partnerNames;
  private String description;
  private List<UUID> dataIDs;
}
