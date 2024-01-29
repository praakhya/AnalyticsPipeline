package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.UserEntity;
import com.avasthi.analytics_pipeline_backend.entities.WorkspaceEntity;
import com.avasthi.analytics_pipeline_backend.repositories.UserRepository;
import com.avasthi.analytics_pipeline_backend.repositories.WorkspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api")
public class WorkspaceEndpoint {
  @Autowired
  private WorkspaceRepository workspaceRepository;

  @RequestMapping(value = "/workspace", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<WorkspaceEntity> findAllWorkspaces() {
    return workspaceRepository.findAll();
  }
  @RequestMapping(value = "/workspace", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<WorkspaceEntity> postWorkspace(@RequestBody WorkspaceEntity workspaceEntity) {
    return ResponseEntity.ok(workspaceRepository.insert(workspaceEntity));
  }
  @RequestMapping(value = "/workspace/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public  Optional<WorkspaceEntity> findWorkspaceByID(@PathVariable("id") UUID id) {
    return workspaceRepository.findById(id);
  }
}
