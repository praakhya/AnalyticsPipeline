package com.avasthi.analytics_pipeline_backend.repositories;

import com.avasthi.analytics_pipeline_backend.entities.DatabaseEntity;
import com.avasthi.analytics_pipeline_backend.entities.UserEntity;
import com.avasthi.analytics_pipeline_backend.entities.WorkspaceEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


public interface WorkspaceRepository extends MongoRepository<WorkspaceEntity, UUID> {
  @Query("{$or:[{'ownerID':?0},{'partnerIDs':?0}]}")
  List<WorkspaceEntity> findAllWorkspacesFromUserID(UUID id);
  @Query("{$or:[{'ownerName':?0},{'partnerNames':?0}]}")
  List<WorkspaceEntity> findAllWorkspacesFromUsername(String username);

  @Query("{'name':?0}")
  Optional<WorkspaceEntity> findWorkspaceByName(String name);
}
