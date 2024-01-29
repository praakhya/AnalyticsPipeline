package com.avasthi.analytics_pipeline_backend.repositories;

import com.avasthi.analytics_pipeline_backend.entities.DatabaseEntity;
import com.avasthi.analytics_pipeline_backend.entities.UserEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<UserEntity, String> {
}
