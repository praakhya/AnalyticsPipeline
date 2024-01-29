package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.DatabaseEntity;
import com.avasthi.analytics_pipeline_backend.entities.UserEntity;
import com.avasthi.analytics_pipeline_backend.entities.WorkspaceEntity;
import com.avasthi.analytics_pipeline_backend.repositories.DatabaseRepository;
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
public class UserEndpoint {
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private WorkspaceRepository workspaceRepository;

  @RequestMapping(value = "/user", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<UserEntity> findAllUsers() {
    return userRepository.findAll();
  }
  @RequestMapping(value = "/user", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public ResponseEntity<UserEntity> postUser(@RequestBody UserEntity userEntity) {
    return ResponseEntity.ok(userRepository.insert(userEntity));
  }
  @RequestMapping(value = "/user/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public  Optional<UserEntity> findUserByID(@PathVariable("id") UUID id) {
    return userRepository.findById(id);
  }
  @RequestMapping(value="/user/workspace/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<WorkspaceEntity> findAllWorkspacesByUserID(@PathVariable("id") UUID id) {
    return workspaceRepository.findAllWorkspacesFromUserID(id);
  }
}
