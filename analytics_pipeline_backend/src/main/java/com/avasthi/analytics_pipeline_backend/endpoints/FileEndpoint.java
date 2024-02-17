package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.FileEntity;
import com.avasthi.analytics_pipeline_backend.services.FileService;
import com.avasthi.analytics_pipeline_backend.utils.Paths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.security.Principal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(Paths.V1.Files.fullPath)
public class FileEndpoint {
  @Autowired
  private FileService fileService;

  @RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<FileEntity> findAllData() {
    return fileService.findAll();
  }

  @RequestMapping(value = Paths.V1.Files.GetOne, method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public Optional<FileEntity> findDataById(@PathVariable(Paths.V1.Files.GetOneFilePathVariable) UUID id) {
    return fileService.findOneByID(id);
  }

  @RequestMapping(method = RequestMethod.POST)
  public Optional<FileEntity> save(@RequestBody MultipartFile file, Principal principal) {
    String username = principal.getName();
    return fileService.save(file, username);
  }




}
