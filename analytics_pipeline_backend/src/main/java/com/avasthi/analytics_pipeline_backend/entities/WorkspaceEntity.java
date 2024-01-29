package com.avasthi.analytics_pipeline_backend.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;
@Document("workspace")
@Data
public class WorkspaceEntity {
  @Id
  private UUID id;
  private String name;
  private String coverPictureURL;
  private UUID ownerID;
  private List<UUID> partnerIDs;
  private String description;
  private List<UUID> dataIDs;
}
