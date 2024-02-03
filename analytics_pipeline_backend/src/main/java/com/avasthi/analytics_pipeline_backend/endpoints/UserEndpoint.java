package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.DatabaseEntity;
import com.avasthi.analytics_pipeline_backend.entities.UserEntity;
import com.avasthi.analytics_pipeline_backend.entities.WorkspaceEntity;
import com.avasthi.analytics_pipeline_backend.pojos.Workspace;
import com.avasthi.analytics_pipeline_backend.repositories.DatabaseRepository;
import com.avasthi.analytics_pipeline_backend.repositories.UserRepository;
import com.avasthi.analytics_pipeline_backend.repositories.WorkspaceRepository;
import com.avasthi.analytics_pipeline_backend.services.UserService;
import com.avasthi.analytics_pipeline_backend.utils.Paths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(Paths.V1.Users.fullPath)
public class UserEndpoint {
  @Autowired
  private UserService userService;
  @Autowired
  private WorkspaceRepository workspaceRepository;

  @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<UserEntity> findAllUsers() {
    return userService.findAll();
  }
  @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public Optional<UserEntity> postUser(@RequestBody UserEntity userEntity) {
    return userService.save(userEntity);
  }
  @RequestMapping(value = Paths.V1.Users.GetOne, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public  Optional<UserEntity> findUserByUsername(@PathVariable(Paths.V1.Users.GetOnePathVariable) String username) {
    return userService.findOne(username);
  }
  @RequestMapping(value=Paths.V1.Users.GetUserWorkspaces, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<Workspace> findAllWorkspacesByUsername(@PathVariable(Paths.V1.Users.WorkspaceVariable) String name) {
    return userService.findWorkspacesByUsername(name);
  }
}
