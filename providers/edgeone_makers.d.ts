import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete environment variables from an EdgeOne Makers project. */
    "edgeone_makers.delete_environment_variables": {
      input: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Environment variable names to delete.
         * @minItems 1
         */
        keys: Array<string>;
      };
      output: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
      };
    };
    /** Delete an EdgeOne Makers project and its deployment history. */
    "edgeone_makers.delete_project": {
      input: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
      };
    };
    /** Get an EdgeOne Makers deployment and its current status. */
    "edgeone_makers.get_deployment": {
      input: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The EdgeOne Makers deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** An EdgeOne Makers deployment. */
        deployment: {
          /**
           * The EdgeOne Makers deployment ID.
           * @minLength 1
           */
          deploymentId: string;
          /**
           * The EdgeOne Makers project ID.
           * @minLength 1
           */
          projectId: string;
          /** The deployment environment. */
          env: "Production" | "Preview";
          /** The deployment status reported by EdgeOne Makers. */
          status?: string;
          /** The deployment preview address when available. List results can contain an unsigned address, while a successful deployment detail contains an accessible URL. */
          previewUrl?: string;
          /** The provider error code when the deployment failed. */
          code?: string;
          /** The deployment creation time in ISO 8601 format. */
          createdOn?: string;
          /** The deployment modification time in ISO 8601 format. */
          modifiedOn?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the build log URL for an EdgeOne Makers deployment. */
    "edgeone_makers.get_deployment_log": {
      input: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The EdgeOne Makers deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /**
         * The temporary build log URL returned by EdgeOne Makers.
         * @format uri
         */
        logUrl: string;
      };
    };
    /** Get an EdgeOne Makers project by ID. */
    "edgeone_makers.get_project": {
      input: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** An EdgeOne Makers project. */
        project: {
          /**
           * The EdgeOne Makers project ID.
           * @minLength 1
           */
          projectId: string;
          /**
           * The unique project name in the connected account.
           * @minLength 1
           */
          name: string;
          /** The project status reported by EdgeOne Makers. */
          status: string;
          /** The acceleration area for the project. */
          area?: "mainland" | "overseas" | "global";
          /** The default domain assigned to the project. */
          presetDomain?: string;
          /** The project creation time in ISO 8601 format. */
          createdOn: string;
          /** The project modification time in ISO 8601 format. */
          modifiedOn: string;
          [key: string]: unknown;
        };
      };
    };
    /** List deployments for an EdgeOne Makers project. */
    "edgeone_makers.list_deployments": {
      input: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Deployment statuses used to filter the result.
         * @minItems 1
         */
        status?: Array<string>;
        /** The inclusive ISO 8601 start time for filtering. */
        startTime?: string;
        /** The inclusive ISO 8601 end time for filtering. */
        endTime?: string;
        /**
         * Repository branches used to filter the result.
         * @minItems 1
         */
        repoBranches?: Array<string>;
        /**
         * The zero-based page number. Defaults to 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of records returned per page. Defaults to 20.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The result ordering configuration. */
        order?: {
          /** The timestamp field used for ordering. */
          field: "createdOn" | "modifiedOn";
          /** The ordering direction. */
          direction: "asc" | "desc";
        };
      };
      output: {
        /** The deployments in this page. */
        deployments: Array<{
          /**
           * The EdgeOne Makers deployment ID.
           * @minLength 1
           */
          deploymentId: string;
          /**
           * The EdgeOne Makers project ID.
           * @minLength 1
           */
          projectId: string;
          /** The deployment environment. */
          env: "Production" | "Preview";
          /** The deployment status reported by EdgeOne Makers. */
          status?: string;
          /** The deployment preview address when available. List results can contain an unsigned address, while a successful deployment detail contains an accessible URL. */
          previewUrl?: string;
          /** The provider error code when the deployment failed. */
          code?: string;
          /** The deployment creation time in ISO 8601 format. */
          createdOn?: string;
          /** The deployment modification time in ISO 8601 format. */
          modifiedOn?: string;
          [key: string]: unknown;
        }>;
        /**
         * The zero-based page number.
         * @minimum 0
         */
        page: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The total number of matching records.
         * @minimum 0
         */
        total: number;
        /** Whether another result page is available. */
        hasNext: boolean;
      };
    };
    /** List environment variables configured for an EdgeOne Makers project. */
    "edgeone_makers.list_environment_variables": {
      input: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** The configured environment variables. */
        envVars: Array<{
          /**
           * The environment variable name.
           * @minLength 1
           */
          key: string;
          /** The environment variable value. */
          value: string;
          /** An optional note describing the variable. */
          comment?: string;
        }>;
      };
    };
    /** List EdgeOne Makers projects available to the connected account. */
    "edgeone_makers.list_projects": {
      input: {
        /**
         * Project IDs used to filter the result.
         * @minItems 1
         */
        projectIds?: Array<string>;
        /**
         * A project name used to filter the result.
         * @minLength 1
         */
        name?: string;
        /**
         * A project status used to filter the result.
         * @minLength 1
         */
        status?: string;
        /**
         * A project source provider used to filter the result.
         * @minLength 1
         */
        provider?: string;
        /**
         * The zero-based page number. Defaults to 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of records returned per page. Defaults to 20.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The result ordering configuration. */
        order?: {
          /** The timestamp field used for ordering. */
          field: "createdOn" | "modifiedOn";
          /** The ordering direction. */
          direction: "asc" | "desc";
        };
      };
      output: {
        /** The projects in this page. */
        projects: Array<{
          /**
           * The EdgeOne Makers project ID.
           * @minLength 1
           */
          projectId: string;
          /**
           * The unique project name in the connected account.
           * @minLength 1
           */
          name: string;
          /** The project status reported by EdgeOne Makers. */
          status: string;
          /** The acceleration area for the project. */
          area?: "mainland" | "overseas" | "global";
          /** The default domain assigned to the project. */
          presetDomain?: string;
          /** The project creation time in ISO 8601 format. */
          createdOn: string;
          /** The project modification time in ISO 8601 format. */
          modifiedOn: string;
          [key: string]: unknown;
        }>;
        /**
         * The zero-based page number.
         * @minimum 0
         */
        page: number;
        /**
         * The requested page size.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The total number of matching records.
         * @minimum 0
         */
        total: number;
        /** Whether another result page is available. */
        hasNext: boolean;
      };
    };
    /** Add or overwrite environment variables for an EdgeOne Makers project while preserving unmentioned variables. */
    "edgeone_makers.set_environment_variables": {
      input: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Environment variables to add or overwrite by key.
         * @minItems 1
         */
        envVars: Array<{
          /**
           * The environment variable name.
           * @minLength 1
           */
          key: string;
          /** The environment variable value. */
          value: string;
          /** An optional note describing the variable. */
          comment?: string;
        }>;
      };
      output: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
      };
    };
    /** Trigger a deployment through an EdgeOne Makers project deployment webhook. */
    "edgeone_makers.trigger_deployment_webhook": {
      input: {
        /**
         * The unique deployment webhook URL created in the EdgeOne Makers project settings.
         * @format uri
         */
        webhookUrl: string;
      };
      output: {
        /** Whether EdgeOne Makers accepted the webhook request. */
        triggered: true;
        /**
         * The successful HTTP status returned by the deployment webhook.
         * @minimum 200
         * @maximum 299
         */
        status: number;
      };
    };
    /** Update an EdgeOne Makers project's name or build configuration. */
    "edgeone_makers.update_project": {
      input: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * A new unique project name.
         * @minLength 1
         */
        name?: string;
        /** The project root directory used during builds. */
        rootDir?: string;
        /** The directory containing deployable build output. */
        outputDir?: string;
        /** The command used to build the project. */
        buildCmd?: string;
        /** The command used to install project dependencies. */
        installCmd?: string;
        /** The EdgeOne Makers framework preset. */
        framework?: string;
        /** The Node.js version used for builds. */
        nodejsVersion?: string;
      };
      output: {
        /**
         * The EdgeOne Makers project ID.
         * @minLength 1
         */
        projectId: string;
      };
    };
  }
}
