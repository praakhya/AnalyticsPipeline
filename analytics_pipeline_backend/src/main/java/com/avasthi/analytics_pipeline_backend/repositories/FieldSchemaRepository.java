package com.avasthi.analytics_pipeline_backend.repositories;

import com.avasthi.analytics_pipeline_backend.entities.FieldSchemaEntity;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface FieldSchemaRepository extends MongoRepository<FieldSchemaEntity, String> {

}
