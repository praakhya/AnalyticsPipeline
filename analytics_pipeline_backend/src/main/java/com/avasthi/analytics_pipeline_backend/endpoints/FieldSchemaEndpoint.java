package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.FieldSchemaEntity;
import com.avasthi.analytics_pipeline_backend.repositories.FieldSchemaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class FieldSchemaEndpoint {
  @Autowired
  private FieldSchemaRepository fieldSchemaRepository;

  @RequestMapping(value = "/fieldschema", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<FieldSchemaEntity> findAllFieldSchemas() {
    return fieldSchemaRepository.findAll();
  }
  @RequestMapping(value = "/fieldschema", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<FieldSchemaEntity> postDatabaseSchema(@RequestBody FieldSchemaEntity fieldSchemaEntity) {
    return ResponseEntity.ok(fieldSchemaRepository.insert(fieldSchemaEntity));
  }
  @RequestMapping(value = "/fieldschema/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public  Optional<FieldSchemaEntity> findFieldSchemaById(@PathVariable("id") String id) {
    return fieldSchemaRepository.findById(id);
  }
}
