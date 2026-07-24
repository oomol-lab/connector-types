import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Trigger a Railway deployment for a service, optionally at a specific connected-repository commit. */
    "railway.deploy_service": {
      input: {
        /**
         * Railway service ID.
         * @minLength 1
         */
        serviceId: string;
        /**
         * Railway environment ID.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Commit SHA from the repository connected to the Railway service.
         * @minLength 1
         */
        commitSha?: string;
      };
      output: {
        /**
         * Railway deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
    };
    /** Get one Railway deployment and its redeploy and rollback capabilities. */
    "railway.get_deployment": {
      input: {
        /**
         * Railway deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** Detailed Railway deployment information. */
        deployment: {
          /**
           * Railway deployment ID.
           * @minLength 1
           */
          id: string;
          /**
           * Current Railway deployment status.
           * @minLength 1
           */
          status: string;
          /**
           * When the deployment was created.
           * @format date-time
           */
          createdAt?: string;
          /** Deployment URL. */
          url?: string | null;
          /** Static deployment URL. */
          staticUrl?: string | null;
          /** Whether Railway allows this deployment to be redeployed. */
          canRedeploy?: boolean;
          /** Whether Railway allows a rollback to this deployment. */
          canRollback?: boolean;
          /** Provider-defined deployment metadata. */
          meta?: Record<string, unknown> | null;
        };
      };
    };
    /** Read runtime logs for a Railway deployment with optional text and time filters. */
    "railway.get_deployment_logs": {
      input: {
        /**
         * Railway deployment ID.
         * @minLength 1
         */
        deploymentId: string;
        /**
         * Maximum number of log entries to return.
         * @minimum 1
         * @maximum 5000
         * @default 500
         */
        limit?: number;
        /**
         * Railway log filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * Start of the log time range.
         * @format date-time
         */
        startDate?: string;
        /**
         * End of the log time range.
         * @format date-time
         */
        endDate?: string;
      };
      output: {
        /** Railway runtime log entries. */
        logs: Array<{
          /**
           * Provider timestamp for the log entry.
           * @minLength 1
           */
          timestamp: string;
          /** Log message. */
          message: string;
          /** Log severity. */
          severity?: string | null;
        }>;
      };
    };
    /** Get a Railway project together with its services and environments. */
    "railway.get_project": {
      input: {
        /**
         * Railway project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Railway project details. */
        project: {
          /**
           * Railway project ID.
           * @minLength 1
           */
          id: string;
          /**
           * Project name.
           * @minLength 1
           */
          name: string;
          /** Project description. */
          description?: string | null;
          /**
           * When the project was created.
           * @format date-time
           */
          createdAt?: string;
          /** Services in the project. */
          services: Array<{
            /**
             * Railway service ID.
             * @minLength 1
             */
            id: string;
            /**
             * Service name.
             * @minLength 1
             */
            name: string;
            /** Service icon URL or identifier. */
            icon?: string | null;
          }>;
          /** Environments in the project. */
          environments: Array<{
            /**
             * Railway environment ID.
             * @minLength 1
             */
            id: string;
            /**
             * Environment name.
             * @minLength 1
             */
            name: string;
          }>;
        };
      };
    };
    /** Get Railway service configuration and its latest deployment in one environment. */
    "railway.get_service_instance": {
      input: {
        /**
         * Railway service ID.
         * @minLength 1
         */
        serviceId: string;
        /**
         * Railway environment ID.
         * @minLength 1
         */
        environmentId: string;
      };
      output: {
        /** A Railway service instance. */
        serviceInstance: {
          /**
           * Railway service instance ID.
           * @minLength 1
           */
          id: string;
          /**
           * Service name.
           * @minLength 1
           */
          serviceName: string;
          /** Configured start command. */
          startCommand?: string | null;
          /** Configured build command. */
          buildCommand?: string | null;
          /** Configured repository root directory. */
          rootDirectory?: string | null;
          /** Configured health check path. */
          healthcheckPath?: string | null;
          /** Deployment region. */
          region?: string | null;
          /** Configured replica count. */
          numReplicas?: number | null;
          /** Restart policy type. */
          restartPolicyType?: string | null;
          /** Maximum restart attempts. */
          restartPolicyMaxRetries?: number | null;
          /** A Railway deployment. */
          latestDeployment?: {
            /**
             * Railway deployment ID.
             * @minLength 1
             */
            id: string;
            /**
             * Current Railway deployment status.
             * @minLength 1
             */
            status: string;
            /**
             * When the deployment was created.
             * @format date-time
             */
            createdAt?: string;
            /** Deployment URL. */
            url?: string | null;
            /** Static deployment URL. */
            staticUrl?: string | null;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** List recent Railway deployments for a service and environment. */
    "railway.list_deployments": {
      input: {
        /**
         * Railway project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Railway service ID.
         * @minLength 1
         */
        serviceId: string;
        /**
         * Railway environment ID.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Maximum number of deployments to return.
         * @minimum 1
         * @maximum 100
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** Railway deployments ordered by the provider. */
        deployments: Array<{
          /**
           * Railway deployment ID.
           * @minLength 1
           */
          id: string;
          /**
           * Current Railway deployment status.
           * @minLength 1
           */
          status: string;
          /**
           * When the deployment was created.
           * @format date-time
           */
          createdAt?: string;
          /** Deployment URL. */
          url?: string | null;
          /** Static deployment URL. */
          staticUrl?: string | null;
        }>;
      };
    };
    /** List Railway projects available to the configured account or workspace token. */
    "railway.list_projects": {
      input: Record<string, never>;
      output: {
        /** Railway projects. */
        projects: Array<{
          /**
           * Railway project ID.
           * @minLength 1
           */
          id: string;
          /**
           * Project name.
           * @minLength 1
           */
          name: string;
          /** Project description. */
          description?: string | null;
          /**
           * When the project was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * When the project was last updated.
           * @format date-time
           */
          updatedAt?: string;
        }>;
      };
    };
    /** Roll a Railway service back to a deployment that Railway marks as rollback-capable. */
    "railway.rollback_deployment": {
      input: {
        /**
         * Rollback-capable Railway deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** A Railway deployment. */
        deployment: {
          /**
           * Railway deployment ID.
           * @minLength 1
           */
          id: string;
          /**
           * Current Railway deployment status.
           * @minLength 1
           */
          status: string;
          /**
           * When the deployment was created.
           * @format date-time
           */
          createdAt?: string;
          /** Deployment URL. */
          url?: string | null;
          /** Static deployment URL. */
          staticUrl?: string | null;
        };
      };
    };
    /** Create or update one Railway variable for an environment or service. */
    "railway.upsert_variable": {
      input: {
        /**
         * Railway project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Railway service ID.
         * @minLength 1
         */
        serviceId?: string;
        /**
         * Railway environment ID.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Variable name.
         * @minLength 1
         * @maxLength 255
         * @pattern ^[A-Za-z_][A-Za-z0-9_]*$
         */
        name: string;
        /** Variable value. This may contain a Railway variable reference. */
        value: string;
        /** Do not automatically redeploy after updating the variable. */
        skipDeploys?: boolean;
      };
      output: {
        /** Whether Railway accepted the variable update. */
        updated: boolean;
      };
    };
  }
}
