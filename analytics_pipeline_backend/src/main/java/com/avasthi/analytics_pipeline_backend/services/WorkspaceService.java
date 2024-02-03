package com.avasthi.analytics_pipeline_backend.services;

import com.avasthi.analytics_pipeline_backend.entities.WorkspaceEntity;
import com.avasthi.analytics_pipeline_backend.exceptions.EntityAlreadyExistsException;
import com.avasthi.analytics_pipeline_backend.exceptions.ExceptionMessage;
import com.avasthi.analytics_pipeline_backend.repositories.WorkspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class WorkspaceService {
  @Autowired
  private WorkspaceRepository workspaceRepository;

  public Optional<WorkspaceEntity> findOne(String name) {
    return workspaceRepository.findWorkspaceByName(name);
  }
  public Optional<WorkspaceEntity> findOneByID(UUID id) {
    return workspaceRepository.findById(id);
  }

  public List<WorkspaceEntity> findAll() {
    return workspaceRepository.findAll();
  }

  public Optional<WorkspaceEntity> save(WorkspaceEntity workspaceEntity) {
    if (workspaceRepository.findWorkspaceByName(workspaceEntity.getWorkspaceName()).isPresent()) {

      throw new EntityAlreadyExistsException(String.format(ExceptionMessage.USER_ALREADY_EXISTS.getReason(), workspaceEntity.getWorkspaceName()),
        String.format(ExceptionMessage.USER_ALREADY_EXISTS.getError(), workspaceEntity.getWorkspaceName()));
    }
    return Optional.of(workspaceRepository.save(workspaceEntity));
  }

}
