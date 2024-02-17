package com.avasthi.analytics_pipeline_backend.utils;

public class Paths {

  public static final String basePath = "/api";
  public class V1 {
    public static final String Base = basePath + "/v1";
    public static final String fullPath = Base;
    public class Users {
      public static final String Base = "/users";
      public static final String fullPath = Paths.V1.fullPath + Base;
      public static final String GetOnePathVariable = "username";
      private static final String workspaces = "/workspaces";
      public static final String WorkspaceVariable = "workspaceName";
      public static final String GetUserWorkspaces = workspaces+"/{"+WorkspaceVariable+"}";

      public static final String GetOne = "{" + GetOnePathVariable + "}";
    }
    public class Files {
      public static final String Base = "/files";
      public static final String fullPath = Paths.V1.fullPath + Base;
      public static final String GetOneFilePathVariable = "fileId";
      public static final String GetOne = "{" + GetOneFilePathVariable + "}";

    }
    public class Workspaces {
      public static final String Base = "/workspaces";
      public static final String fullPath = Paths.V1.fullPath + Base;
      public static final String GetOnePathVariable = "name";
      public static final String GetOne = "{" + GetOnePathVariable + "}";
    }
    public class Auth {

      public static final String Base = "/auth";
      public static final String fullPath = Paths.V1.fullPath + Base;
      public static final String Refresh = "refresh";
    }
  }
}
