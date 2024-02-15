package com.avasthi.analytics_pipeline_backend.endpoints;

import com.avasthi.analytics_pipeline_backend.entities.DataEntity;
import com.avasthi.analytics_pipeline_backend.entities.FileEntity;
import com.avasthi.analytics_pipeline_backend.repositories.DataRepository;
import com.avasthi.analytics_pipeline_backend.repositories.FileRepository;
import com.avasthi.analytics_pipeline_backend.services.FileService;
import com.avasthi.analytics_pipeline_backend.utils.Paths;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(Paths.V1.Users.fullPath)
public class FileEndpoint {
  @Autowired
  private FileService fileService;

  @RequestMapping(value = "/file", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public List<FileEntity> findAllData() {
    return fileService.findAll();
  }

  @RequestMapping(value = "/file/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
  public Optional<FileEntity> findDataById(@PathVariable("id") UUID id) {
    return fileService.findOneByID(id);
  }

  @RequestMapping(value = "/file", method = RequestMethod.POST)
  public Optional<FileEntity> save(@RequestParam("file") MultipartFile file) {
    return fileService.save(file);
  }


}
