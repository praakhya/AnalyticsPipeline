package com.avasthi.analytics_pipeline_backend.endpoints;
import com.avasthi.analytics_pipeline_backend.annotations.RefreshRolePermission;
import com.avasthi.analytics_pipeline_backend.entities.UserEntity;
import com.avasthi.analytics_pipeline_backend.pojos.AuthToken;
import com.avasthi.analytics_pipeline_backend.pojos.Login;
import com.avasthi.analytics_pipeline_backend.pojos.User;
import com.avasthi.analytics_pipeline_backend.services.AuthenticationService;
import com.avasthi.analytics_pipeline_backend.utils.Paths;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(Paths.V1.Auth.fullPath)
@RequiredArgsConstructor
public class AuthEndpoint {
  private final AuthenticationService authenticateService;
  @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public Optional<User> login(@RequestBody Login login) {
    return authenticateService.auth(login);
  }
  @RefreshRolePermission
  @RequestMapping(path = Paths.V1.Auth.Refresh, method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public Optional<AuthToken> refresh(@AuthenticationPrincipal UserEntity user) {
    return authenticateService.refresh(user);
  }
}
