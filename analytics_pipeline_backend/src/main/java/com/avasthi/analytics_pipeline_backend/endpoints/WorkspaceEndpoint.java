package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.WorkspaceEntity;
import com.avasthi.analytics_pipeline_backend.services.WorkspaceService;
import com.avasthi.analytics_pipeline_backend.utils.Paths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(Paths.V1.Workspaces.fullPath)
public class WorkspaceEndpoint {
  @Autowired
  private WorkspaceService workpsaceService;

  @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<WorkspaceEntity> findAllWorkspaces() {
    return workpsaceService.findAll();
  }
  @RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
  public Optional<WorkspaceEntity> postWorkspace(@RequestBody WorkspaceEntity workspaceEntity) {
    return workpsaceService.save(workspaceEntity);
  }
  @RequestMapping(value = Paths.V1.Workspaces.GetOne, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public  Optional<WorkspaceEntity> findWorkspaceByName(@PathVariable(Paths.V1.Workspaces.GetOnePathVariable) String name) {
    return workpsaceService.findOne(name);
  }
}
