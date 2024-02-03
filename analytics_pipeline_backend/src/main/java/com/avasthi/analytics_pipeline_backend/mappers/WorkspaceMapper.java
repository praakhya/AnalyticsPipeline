package com.avasthi.analytics_pipeline_backend.mappers;

import com.avasthi.analytics_pipeline_backend.entities.WorkspaceEntity;
import com.avasthi.analytics_pipeline_backend.pojos.Workspace;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkspaceMapper {
  public static Workspace mapEntityToPojo(WorkspaceEntity workspaceEntity) {
    Workspace workspace = new Workspace(
      workspaceEntity.getWorkspaceName(),
      workspaceEntity.getCoverPictureURL(),
      workspaceEntity.getOwnerName(),
      workspaceEntity.getDescription()
    );
    return workspace;
  }
  public List<Workspace> mapEntitiesToPojos(List<WorkspaceEntity> workspaceEntityList) {
    List<Workspace> workspaceList = workspaceEntityList.stream().map(WorkspaceMapper::mapEntityToPojo).toList();
    return workspaceList;
  }
}
