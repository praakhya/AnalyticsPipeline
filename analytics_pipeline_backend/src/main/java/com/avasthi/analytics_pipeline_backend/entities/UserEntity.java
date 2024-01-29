package com.avasthi.analytics_pipeline_backend.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.List;
import java.util.UUID;
@Document("user")
@Data
public class UserEntity {
  public UserEntity() {
    this.id = UUID.randomUUID();
  }
  private String profilePictureURL;
  private String username;
  private String password;
  @Id
  private UUID id;
  private List<WorkspaceEntity> workspaces;

}
