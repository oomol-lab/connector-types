import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve details for a Northflank project. */
    "northflank.get_project": {
      input: {
        /**
         * ID of the project.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Northflank project details. */
        project: {
          /**
           * Identifier for the project.
           * @minLength 1
           */
          id: string;
          /**
           * Project name.
           * @minLength 1
           */
          name: string;
          /** Short project description. */
          description?: string;
          /** Project deployment information returned by Northflank. */
          deployment?: {
            /**
             * Region where the project's resources are deployed.
             * @minLength 1
             */
            region?: string;
            [key: string]: unknown;
          };
          /**
           * Timestamp when the project was created.
           * @format date-time
           */
          createdAt: string;
          /** Services belonging to the project. */
          services?: Array<{
            /**
             * Identifier for the service.
             * @minLength 1
             */
            id: string;
            /**
             * Full identifier used for service deployment.
             * @minLength 1
             */
            appId: string;
            /**
             * Service name.
             * @minLength 1
             */
            name: string;
            /** Short service description. */
            description?: string;
            /** Type of service. */
            serviceType: "combined" | "build" | "deployment";
          }>;
          /** Jobs belonging to the project. */
          jobs?: Array<{
            /**
             * Identifier for the job.
             * @minLength 1
             */
            id?: string;
            /**
             * Full identifier used for deployment.
             * @minLength 1
             */
            appId?: string;
            /**
             * Job name.
             * @minLength 1
             */
            name?: string;
            /** Short job description. */
            description?: string;
            /**
             * Type of the job.
             * @minLength 1
             */
            jobType?: string;
            [key: string]: unknown;
          }>;
          /** Addons belonging to the project. */
          addons?: Array<{
            /**
             * Identifier for the addon.
             * @minLength 1
             */
            id?: string;
            /**
             * Full identifier used for deployment.
             * @minLength 1
             */
            appId?: string;
            /**
             * Addon name.
             * @minLength 1
             */
            name?: string;
            /** Short addon description. */
            description?: string;
            /** Addon specification returned by Northflank. */
            spec?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** Custom registry information returned by Northflank. */
          customRegistry?: Record<string, unknown>;
          /** Cluster information returned by Northflank. */
          cluster?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve details for a Northflank service. */
    "northflank.get_service": {
      input: {
        /**
         * ID of the project.
         * @minLength 1
         */
        projectId: string;
        /**
         * ID of the service.
         * @minLength 1
         */
        serviceId: string;
      };
      output: {
        /** Northflank service details. */
        service: {
          /**
           * Identifier for the service.
           * @minLength 1
           */
          id: string;
          /**
           * Full identifier used for service deployment.
           * @minLength 1
           */
          appId: string;
          /**
           * Service name.
           * @minLength 1
           */
          name: string;
          /**
           * Identifier for the project that owns the service.
           * @minLength 1
           */
          projectId: string;
          /** Type of service. */
          serviceType: "combined" | "build" | "deployment";
          /**
           * Timestamp when the service was created.
           * @format date-time
           */
          createdAt: string;
          /** Short service description. */
          description?: string;
          /** Tags attached to the service. */
          tags?: Array<string>;
          /** Whether Continuous Integration is disabled. */
          disabledCI: boolean;
          /** Whether Continuous Deployment is disabled. */
          disabledCD: boolean;
          /** Whether the service is paused. */
          servicePaused?: boolean;
          /**
           * Build source for the service.
           * @minLength 1
           */
          buildSource?: string;
          /** Current service status returned by Northflank. */
          status?: {
            /** Build status information returned by Northflank. */
            build?: {
              /**
               * Current build status.
               * @minLength 1
               */
              status?: string;
              /**
               * Timestamp when the build reached this status.
               * @format date-time
               */
              lastTransitionTime?: string;
              [key: string]: unknown;
            };
            /** Deployment status information returned by Northflank. */
            deployment?: {
              /**
               * Current deployment status.
               * @minLength 1
               */
              status?: string;
              /**
               * Reason the current deployment was started.
               * @minLength 1
               */
              reason?: string;
              /**
               * Timestamp when the deployment reached this status.
               * @format date-time
               */
              lastTransitionTime?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Billing configuration returned by Northflank. */
          billing?: Record<string, unknown>;
          /** Deployment configuration returned by Northflank. */
          deployment?: Record<string, unknown>;
          /** Service ports returned by Northflank. */
          ports?: Array<Record<string, unknown>>;
          /** Build configuration returned by Northflank. */
          buildConfiguration?: Record<string, unknown>;
          /** Build engine configuration returned by Northflank. */
          buildEngineConfiguration?: Record<string, unknown>;
          /** Autoscaling configuration returned by Northflank. */
          autoscaling?: Record<string, unknown>;
          /** Load balancing configuration returned by Northflank. */
          loadBalancing?: Record<string, unknown>;
          /** Cluster information returned by Northflank. */
          cluster?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Northflank projects available to the authenticated token. */
    "northflank.list_projects": {
      input: {
        /**
         * The number of results to display per request. Maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * The page number to access.
         * @minimum 1
         */
        page?: number;
        /**
         * The cursor returned from the previous page of results.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Projects returned by Northflank. */
        projects: Array<{
          /**
           * Identifier for the project.
           * @minLength 1
           */
          id: string;
          /**
           * Project name.
           * @minLength 1
           */
          name: string;
          /** Short project description. */
          description?: string;
        }>;
        /** Pagination metadata returned by Northflank. */
        pagination: {
          /** Whether another page of results is available. */
          hasNextPage: boolean;
          /**
           * Cursor to use for the next page of results.
           * @minLength 1
           */
          cursor?: string;
          /** Number of results returned by this request. */
          count: number;
        };
      };
    };
    /** List Northflank services in a project. */
    "northflank.list_services": {
      input: {
        /**
         * ID of the project.
         * @minLength 1
         */
        projectId: string;
        /**
         * The number of results to display per request. Maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * The page number to access.
         * @minimum 1
         */
        page?: number;
        /**
         * The cursor returned from the previous page of results.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Services returned by Northflank. */
        services: Array<{
          /**
           * Identifier for the service.
           * @minLength 1
           */
          id: string;
          /**
           * Full identifier used for service deployment.
           * @minLength 1
           */
          appId: string;
          /**
           * Identifier for the project that owns the service.
           * @minLength 1
           */
          projectId: string;
          /**
           * Service name.
           * @minLength 1
           */
          name: string;
          /** Short service description. */
          description?: string;
          /** Type of service. */
          serviceType: "combined" | "build" | "deployment";
          /** Tags attached to the service. */
          tags?: Array<string>;
          /** Whether Continuous Integration is disabled. */
          disabledCI: boolean;
          /** Whether Continuous Deployment is disabled. */
          disabledCD: boolean;
          /** Current service status returned by Northflank. */
          status?: {
            /** Build status information returned by Northflank. */
            build?: {
              /**
               * Current build status.
               * @minLength 1
               */
              status?: string;
              /**
               * Timestamp when the build reached this status.
               * @format date-time
               */
              lastTransitionTime?: string;
              [key: string]: unknown;
            };
            /** Deployment status information returned by Northflank. */
            deployment?: {
              /**
               * Current deployment status.
               * @minLength 1
               */
              status?: string;
              /**
               * Reason the current deployment was started.
               * @minLength 1
               */
              reason?: string;
              /**
               * Timestamp when the deployment reached this status.
               * @format date-time
               */
              lastTransitionTime?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
        }>;
        /** Pagination metadata returned by Northflank. */
        pagination: {
          /** Whether another page of results is available. */
          hasNextPage: boolean;
          /**
           * Cursor to use for the next page of results.
           * @minLength 1
           */
          cursor?: string;
          /** Number of results returned by this request. */
          count: number;
        };
      };
    };
  }
}
