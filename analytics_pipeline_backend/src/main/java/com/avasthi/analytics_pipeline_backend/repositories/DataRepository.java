package com.avasthi.analytics_pipeline_backend.repositories;

import com.avasthi.analytics_pipeline_backend.entities.DataEntity;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface DataRepository extends MongoRepository<DataEntity, String> {

}
