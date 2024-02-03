package com.avasthi.analytics_pipeline_backend.pojos;

import java.util.List;
import java.util.UUID;

public record Workspace(
  String workspaceName,
  String coverPictureURL,
  String ownerName,
  String description
) {

}
