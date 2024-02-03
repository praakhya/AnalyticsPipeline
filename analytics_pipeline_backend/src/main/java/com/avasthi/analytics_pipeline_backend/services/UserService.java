package com.avasthi.analytics_pipeline_backend.services;

import com.avasthi.analytics_pipeline_backend.entities.Role;
import com.avasthi.analytics_pipeline_backend.entities.UserEntity;
import com.avasthi.analytics_pipeline_backend.exceptions.EntityAlreadyExistsException;
import com.avasthi.analytics_pipeline_backend.exceptions.ExceptionMessage;
import com.avasthi.analytics_pipeline_backend.mappers.WorkspaceMapper;
import com.avasthi.analytics_pipeline_backend.pojos.Workspace;
import com.avasthi.analytics_pipeline_backend.repositories.UserRepository;
import com.avasthi.analytics_pipeline_backend.repositories.WorkspaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private WorkspaceRepository workspaceRepository;
  @Autowired
  private WorkspaceMapper workspaceMapper;
  @Autowired
  private PasswordEncoder passwordEncoder;

  public Optional<UserEntity> findOne(String username) {
    return userRepository.findUsersByUsername(username);
  }
  public Optional<UserEntity> findOneByID(UUID id) {
    return userRepository.findById(id);
  }

  public List<Workspace> findWorkspacesByUsername(String username) {return workspaceMapper.mapEntitiesToPojos(workspaceRepository.findAllWorkspacesFromUsername(username));}
  public List<UserEntity> findAll() {
    List<UserEntity> users = userRepository.findAll();
    users.forEach(u -> u.setPassword(null));
    return users;
  }

  public Optional<UserEntity> save(UserEntity user) {
    if (userRepository.findUsersByUsername(user.getUsername()).isPresent()) {

      throw new EntityAlreadyExistsException(String.format(ExceptionMessage.USER_ALREADY_EXISTS.getReason(), user.getUsername()),
        String.format(ExceptionMessage.USER_ALREADY_EXISTS.getError(), user.getUsername()));
    }
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    user.setGrantedAuthorities(Set.of(Role.USER));
    user.setCreatedAt(new Date());
    user.setCreatedBy(user.getUsername());
    user.setUpdatedBy(user.getUsername());
    return Optional.of(userRepository.save(user));
  }

}
