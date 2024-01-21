package com.avasthi.analytics_pipeline_backend.repositories;

import com.avasthi.analytics_pipeline_backend.entities.DatabaseSchemaEntity;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface DatabaseSchemaRepository extends MongoRepository<DatabaseSchemaEntity, String> {

}
