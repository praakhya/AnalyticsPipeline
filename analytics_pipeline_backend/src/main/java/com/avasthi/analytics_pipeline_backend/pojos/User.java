package com.avasthi.analytics_pipeline_backend.pojos;

import com.avasthi.analytics_pipeline_backend.entities.Role;
import org.springframework.data.annotation.Id;

import java.util.Set;
import java.util.UUID;

public record User(
  String username,
  String profilePictureURL,
  UUID id,
  Set<Role> grantedAuthorities,
  AuthToken authToken
) {
}
