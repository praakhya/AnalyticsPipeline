package com.avasthi.analytics_pipeline_backend.repositories;

import com.avasthi.analytics_pipeline_backend.entities.DataEntity;
import com.avasthi.analytics_pipeline_backend.entities.FileEntity;
import com.avasthi.analytics_pipeline_backend.entities.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;
import java.util.UUID;


public interface FileRepository extends MongoRepository<FileEntity, UUID> {
  @Query("{name:?0}")
  Optional<FileEntity> findFilesByName(String name);
}
