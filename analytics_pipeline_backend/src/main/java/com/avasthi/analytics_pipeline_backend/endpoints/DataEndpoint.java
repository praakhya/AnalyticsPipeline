package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.DataEntity;
import com.avasthi.analytics_pipeline_backend.repositories.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DataEndpoint {
  @Autowired
  private DataRepository dataRepository;

  @RequestMapping(value = "/data", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<DataEntity> findAllData() {
    return dataRepository.findAll();
  }

  @RequestMapping(value = "/data", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<DataEntity> postData(@RequestBody DataEntity dataEntity) {
    return ResponseEntity.ok(dataRepository.insert(dataEntity));
  }
}
