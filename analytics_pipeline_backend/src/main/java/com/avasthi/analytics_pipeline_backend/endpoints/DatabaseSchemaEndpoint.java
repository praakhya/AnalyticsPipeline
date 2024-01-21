package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.DatabaseSchemaEntity;
import com.avasthi.analytics_pipeline_backend.repositories.DatabaseSchemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class DatabaseSchemaEndpoint {
  @Autowired
  private DatabaseSchemaRepository databaseSchemaRepository;

  @RequestMapping(value = "/databaseschema", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<DatabaseSchemaEntity> findAllDatabaseSchemas() {
    return databaseSchemaRepository.findAll();
  }
  @RequestMapping(value = "/databaseschema", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<DatabaseSchemaEntity> postDatabaseSchema(@RequestBody DatabaseSchemaEntity databaseSchemaEntity) {
    return ResponseEntity.ok(databaseSchemaRepository.insert(databaseSchemaEntity));
  }
  @RequestMapping(value = "/databaseschema/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public  Optional<DatabaseSchemaEntity> findDatabaseSchemaById(@PathVariable("id") String id) {
    return databaseSchemaRepository.findById(id);
  }
}
