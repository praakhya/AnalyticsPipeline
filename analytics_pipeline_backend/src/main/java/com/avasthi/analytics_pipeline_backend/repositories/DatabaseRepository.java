package com.avasthi.analytics_pipeline_backend.repositories;

import com.avasthi.analytics_pipeline_backend.entities.DataEntity;
import com.avasthi.analytics_pipeline_backend.entities.DatabaseEntity;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface DatabaseRepository extends MongoRepository<DatabaseEntity, String> {

}
