import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Crowdin project branch. */
    "crowdin.create_branch": {
      input: {
        /**
         * The project ID to create the branch in.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The name of the new branch.
         * @minLength 1
         */
        name: string;
        /** The title of the new branch. */
        title?: string;
        /** The export pattern for the branch. */
        exportPattern?: string;
        /** The priority of the branch. */
        priority?: number;
      };
      output: {
        /**
         * The unique identifier of the branch.
         * @exclusiveMinimum 0
         */
        branchId: number;
        /**
         * The project ID this branch belongs to.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /** The name of the branch. */
        name: string;
        /** The title of the branch. */
        title: string | null;
        /** The export pattern for the branch. */
        exportPattern: string | null;
        /** The priority of the branch. */
        priority: number | null;
        /** The timestamp when the branch was created. */
        createdAt: string;
        /** The timestamp when the branch was last updated. */
        updatedAt: string;
      };
    };
    /** Create a Crowdin directory. */
    "crowdin.create_directory": {
      input: {
        /**
         * The project ID to create the directory in.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The name of the new directory.
         * @minLength 1
         */
        name: string;
        /**
         * The branch ID to create the directory in.
         * @exclusiveMinimum 0
         */
        branchId?: number;
        /**
         * The parent directory ID.
         * @exclusiveMinimum 0
         */
        directoryId?: number;
        /** The title of the new directory. */
        title?: string;
        /** The export pattern for the directory. */
        exportPattern?: string;
        /** The priority of the directory. */
        priority?: number;
      };
      output: {
        /**
         * The unique identifier of the directory.
         * @exclusiveMinimum 0
         */
        directoryId: number;
        /**
         * The project ID this directory belongs to.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The branch ID this directory belongs to.
         * @exclusiveMinimum 0
         */
        branchId: number | null;
        /**
         * The parent directory ID.
         * @exclusiveMinimum 0
         */
        parentId: number | null;
        /** The name of the directory. */
        name: string;
        /** The title of the directory. */
        title: string | null;
        /** The export pattern for the directory. */
        exportPattern: string | null;
        /** The priority of the directory. */
        priority: number | null;
        /** The timestamp when the directory was created. */
        createdAt: string;
        /** The timestamp when the directory was last updated. */
        updatedAt: string;
      };
    };
    /** List Crowdin project branches. */
    "crowdin.list_branches": {
      input: {
        /**
         * The project ID to list branches for.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The maximum number of branches to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The offset for paginating through results.
         * @minimum 0
         */
        offset?: number;
        /** The branch name to filter by. */
        name?: string;
      };
      output: {
        /** The list of branches in the project. */
        branches: Array<{
          /**
           * The unique identifier of the branch.
           * @exclusiveMinimum 0
           */
          branchId: number;
          /**
           * The project ID this branch belongs to.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /** The name of the branch. */
          name: string;
          /** The title of the branch. */
          title: string | null;
          /** The export pattern for the branch. */
          exportPattern: string | null;
          /** The priority of the branch. */
          priority: number | null;
          /** The timestamp when the branch was created. */
          createdAt: string;
          /** The timestamp when the branch was last updated. */
          updatedAt: string;
        }>;
        /** The pagination metadata for a Crowdin list response. */
        pagination: {
          /**
           * The current offset in the result set.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of items returned per page.
           * @exclusiveMinimum 0
           */
          limit: number;
        };
      };
    };
    /** List Crowdin directories. */
    "crowdin.list_directories": {
      input: {
        /**
         * The project ID to list directories for.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The branch ID to filter directories by.
         * @exclusiveMinimum 0
         */
        branchId?: number;
        /**
         * The parent directory ID to filter by.
         * @exclusiveMinimum 0
         */
        directoryId?: number;
        /** The filter string to match directory names. */
        filter?: string;
        /** Whether to list directories recursively. */
        recursion?: boolean;
        /**
         * The maximum number of directories to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The offset for paginating through results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The list of directories in the project. */
        directories: Array<{
          /**
           * The unique identifier of the directory.
           * @exclusiveMinimum 0
           */
          directoryId: number;
          /**
           * The project ID this directory belongs to.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /**
           * The branch ID this directory belongs to.
           * @exclusiveMinimum 0
           */
          branchId: number | null;
          /**
           * The parent directory ID.
           * @exclusiveMinimum 0
           */
          parentId: number | null;
          /** The name of the directory. */
          name: string;
          /** The title of the directory. */
          title: string | null;
          /** The export pattern for the directory. */
          exportPattern: string | null;
          /** The priority of the directory. */
          priority: number | null;
          /** The timestamp when the directory was created. */
          createdAt: string;
          /** The timestamp when the directory was last updated. */
          updatedAt: string;
        }>;
        /** The pagination metadata for a Crowdin list response. */
        pagination: {
          /**
           * The current offset in the result set.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of items returned per page.
           * @exclusiveMinimum 0
           */
          limit: number;
        };
      };
    };
    /** List Crowdin source files. */
    "crowdin.list_files": {
      input: {
        /**
         * The project ID to list files for.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The branch ID to filter files by.
         * @exclusiveMinimum 0
         */
        branchId?: number;
        /**
         * The directory ID to filter files by.
         * @exclusiveMinimum 0
         */
        directoryId?: number;
        /** The filter string to match file names. */
        filter?: string;
        /** Whether to list files recursively. */
        recursion?: boolean;
        /**
         * The maximum number of files to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The offset for paginating through results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The list of source files in the project. */
        files: Array<{
          /**
           * The unique identifier of the source file.
           * @exclusiveMinimum 0
           */
          fileId: number;
          /**
           * The project ID this file belongs to.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /**
           * The branch ID this file belongs to.
           * @exclusiveMinimum 0
           */
          branchId: number | null;
          /**
           * The directory ID this file belongs to.
           * @exclusiveMinimum 0
           */
          directoryId: number | null;
          /** The name of the source file. */
          name: string;
          /** The title of the source file. */
          title: string | null;
          /** The context information for the source file. */
          context: string | null;
          /** The file type. */
          type: string;
          /** The path of the file within the project. */
          path: string;
          /** The current status of the file. */
          status: string;
          /** The timestamp when the file was created. */
          createdAt: string;
          /** The timestamp when the file was last updated. */
          updatedAt: string;
        }>;
        /** The pagination metadata for a Crowdin list response. */
        pagination: {
          /**
           * The current offset in the result set.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of items returned per page.
           * @exclusiveMinimum 0
           */
          limit: number;
        };
      };
    };
    /** List Crowdin projects. */
    "crowdin.list_projects": {
      input: {
        /**
         * The maximum number of projects to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The offset for paginating through results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The list of Crowdin projects. */
        projects: Array<{
          /**
           * The unique identifier of the project.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /** The name of the project. */
          name: string;
          /** The string identifier of the project. */
          identifier: string;
          /** The source language ID of the project. */
          sourceLanguageId: string;
          /** The list of target language IDs for translation. */
          targetLanguageIds: Array<string>;
          /** The timestamp when the project was created. */
          createdAt: string;
          /** The timestamp when the project was last updated. */
          updatedAt: string;
        }>;
        /** The pagination metadata for a Crowdin list response. */
        pagination: {
          /**
           * The current offset in the result set.
           * @minimum 0
           */
          offset: number;
          /**
           * The maximum number of items returned per page.
           * @exclusiveMinimum 0
           */
          limit: number;
        };
      };
    };
    /** Upload a source file to Crowdin. */
    "crowdin.upload_file": {
      input: {
        /**
         * The project ID to upload the file to.
         * @exclusiveMinimum 0
         */
        projectId: number;
        /**
         * The name of the file to upload.
         * @minLength 1
         */
        name: string;
        /**
         * The base64-encoded content of the file.
         * @minLength 1
         */
        contentBase64: string;
        /** The MIME type of the file content. */
        contentType?: string;
        /**
         * The branch ID to upload the file to.
         * @exclusiveMinimum 0
         */
        branchId?: number;
        /**
         * The directory ID to upload the file to.
         * @exclusiveMinimum 0
         */
        directoryId?: number;
        /** The title of the source file. */
        title?: string;
        /** The context information for the source file. */
        context?: string;
        /** The file type identifier. */
        type?: string;
        /** The parser version to use for the file. */
        parserVersion?: string;
        /** The import options for the file. */
        importOptions?: Record<string, unknown>;
        /** The export options for the file. */
        exportOptions?: Record<string, unknown>;
      };
      output: {
        /**
         * The storage ID of the uploaded file.
         * @exclusiveMinimum 0
         */
        storageId: number;
        /** A Crowdin source file summary. */
        file: {
          /**
           * The unique identifier of the source file.
           * @exclusiveMinimum 0
           */
          fileId: number;
          /**
           * The project ID this file belongs to.
           * @exclusiveMinimum 0
           */
          projectId: number;
          /**
           * The branch ID this file belongs to.
           * @exclusiveMinimum 0
           */
          branchId: number | null;
          /**
           * The directory ID this file belongs to.
           * @exclusiveMinimum 0
           */
          directoryId: number | null;
          /** The name of the source file. */
          name: string;
          /** The title of the source file. */
          title: string | null;
          /** The context information for the source file. */
          context: string | null;
          /** The file type. */
          type: string;
          /** The path of the file within the project. */
          path: string;
          /** The current status of the file. */
          status: string;
          /** The timestamp when the file was created. */
          createdAt: string;
          /** The timestamp when the file was last updated. */
          updatedAt: string;
        };
      };
    };
  }
}
