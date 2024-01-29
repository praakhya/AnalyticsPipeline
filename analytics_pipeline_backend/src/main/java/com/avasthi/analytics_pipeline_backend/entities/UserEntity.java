package com.avasthi.analytics_pipeline_backend.entities;

import java.util.List;
import java.util.UUID;

public class UserEntity {
  private String profilePictureURL;
  private String username;
  private String password;
  private UUID userID;
  private List<WorkspaceEntity> workspaces;

}
