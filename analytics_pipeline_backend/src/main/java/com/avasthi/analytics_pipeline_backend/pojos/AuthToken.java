package com.avasthi.analytics_pipeline_backend.pojos;

import com.avasthi.analytics_pipeline_backend.entities.Role;

import java.util.Collection;

public record AuthToken(String username, String profilePictureURL, String authToken, String refreshToken, Collection<Role> authTokenRoles) {
}
