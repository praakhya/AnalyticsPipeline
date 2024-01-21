package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.DatabaseEntity;
import com.avasthi.analytics_pipeline_backend.repositories.DatabaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class DatabaseEndpoint {
  @Autowired
  private DatabaseRepository databaseRepository;

  @RequestMapping(value = "/database", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<DatabaseEntity> findAllDatabases() {
    return databaseRepository.findAll();
  }
  @RequestMapping(value = "/database", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<DatabaseEntity> postDatabase(@RequestBody DatabaseEntity databaseEntity) {
    return ResponseEntity.ok(databaseRepository.insert(databaseEntity));
  }
  @RequestMapping(value = "/database/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public  Optional<DatabaseEntity> findDatabaseById(@PathVariable("id") String id) {
    return databaseRepository.findById(id);
  }
}
