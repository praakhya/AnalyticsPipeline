package com.avasthi.analytics_pipeline_backend.services;

import com.avasthi.analytics_pipeline_backend.entities.FileEntity;
import com.avasthi.analytics_pipeline_backend.exceptions.ExceptionMessage;
import com.avasthi.analytics_pipeline_backend.exceptions.FileWritingFailedException;
import com.avasthi.analytics_pipeline_backend.mappers.WorkspaceMapper;
import com.avasthi.analytics_pipeline_backend.repositories.FileRepository;
import com.avasthi.analytics_pipeline_backend.repositories.WorkspaceRepository;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.InputStream;
import java.net.URLEncoder;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class FileService {

  private String basePath;
  @Autowired
  private FileRepository fileRepository;
  @Autowired
  private WorkspaceRepository workspaceRepository;
  @Autowired
  private WorkspaceMapper workspaceMapper;
  @Autowired
  private PasswordEncoder passwordEncoder;
  @Autowired
  private HttpServletRequest servletRequest;
  public Optional<FileEntity> findOne(String name) {
    return fileRepository.findFilesByName(name);
  }
  public Optional<FileEntity> findOneByID(UUID id) {
    return fileRepository.findById(id);
  }

  public List<FileEntity> findAll() {
    return fileRepository.findAll();
  }

  public Optional<FileEntity> save(FileEntity fileEntity) {
    return Optional.of(fileRepository.save(fileEntity));
  }

  public Optional<FileEntity> save(MultipartFile file, String username) {
    String uploadedFilename = file.getOriginalFilename();
    String mimeType = file.getContentType();
    long size = file.getSize();
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    File destinationDirectory = new File(basePath, sdf.format(new Date()));
    destinationDirectory.mkdirs();
    File destinationFile = new File(destinationDirectory, uploadedFilename);
    try {

      InputStream is = file.getInputStream();
      Files.copy(is, destinationFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
      is.close();
      UUID id = UUID.randomUUID();
      FileEntity content = FileEntity.builder()
        .id(id)
        .mimetype(mimeType)
        .originalFilename(uploadedFilename)
        .size(size)
        .storagePathname(destinationFile.toString())
        .ownerName(username)
        .build();
      content.setUrl(String.format("%s/%s/%s",
        servletRequest.getRequestURI(),
        content.getId().toString(),
        URLEncoder.encode(uploadedFilename, Charset.forName("UTF-8"))));
      fileRepository.save(content);
      return Optional.of(content);
    }
    catch(java.io.IOException ex) {
      throw new FileWritingFailedException(String.format(ExceptionMessage.CONTENT_WRITING_FAILED_ERROR.getReason(), destinationFile.toString()),
        String.format(ExceptionMessage.CONTENT_WRITING_FAILED_ERROR.getError(), destinationFile.toString()));
    }
  }

}
