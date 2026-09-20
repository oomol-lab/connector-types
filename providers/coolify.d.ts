import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a queued or running Coolify deployment by UUID. */
    "coolify.cancel_deployment": {
      input: {
        /**
         * The Coolify deployment UUID.
         * @minLength 1
         */
        deploymentUuid: string;
      };
      output: {
        /** The cancellation confirmation returned by Coolify. */
        message: string;
        /** The cancelled deployment UUID. */
        deploymentUuid: string;
        /** The final cancellation status. */
        status: string;
      };
    };
    /** Deploy one Coolify application by UUID. */
    "coolify.deploy": {
      input: {
        /**
         * The application UUID to deploy.
         * @minLength 1
         */
        resourceUuid: string;
        /** Whether to rebuild without cache. */
        force?: boolean;
        /**
         * The pull request preview deployment ID.
         * @minimum 1
         */
        pullRequestId?: number;
        /**
         * The Docker image tag for a Docker Image preview deployment.
         * @minLength 1
         */
        dockerTag?: string;
      };
      output: {
        /** The deployment operation message. */
        message: string;
        /** Whether Coolify reported a new application deployment queue entry. Treat this as provisional when deploymentVerified is false. */
        queued: boolean;
        /** Whether the connector confirmed the returned deployment handle or confirmed that no handle exists. */
        deploymentVerified: boolean;
        /** The deployed resource UUID. */
        resourceUuid: string;
        /** The application deployment handle returned by Coolify, or null when none was returned or the handle was confirmed absent. Treat it as provisional when deploymentVerified is false. */
        deploymentUuid: string | null;
      };
    };
    /** Get one Coolify application by UUID. */
    "coolify.get_application": {
      input: {
        /**
         * The Coolify application UUID.
         * @minLength 1
         */
        applicationUuid: string;
      };
      output: {
        /** A Coolify application. */
        application: {
          /** The internal application ID. */
          id?: number;
          /** The application UUID. */
          uuid?: string;
          /** The application name. */
          name?: string;
          /** The application description, or null when it is unset. */
          description?: string | null;
          /** The current application status. */
          status?: string;
          /** The configured application domains, or null when none are set. */
          fqdn?: string | null;
          /** The Git repository URL. */
          git_repository?: string;
          /** The Git branch. */
          git_branch?: string;
          /** The build pack used by the application. */
          build_pack?: string;
          /** The timestamp when the application was created. */
          created_at?: string;
          /** The timestamp when the application was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Coolify deployment and its current status by UUID. */
    "coolify.get_deployment": {
      input: {
        /**
         * The Coolify deployment UUID.
         * @minLength 1
         */
        deploymentUuid: string;
      };
      output: {
        /** A Coolify application deployment. */
        deployment: {
          /** The internal deployment ID. */
          id?: number;
          /** The deployment UUID. */
          deployment_uuid?: string;
          /** The application ID associated with the deployment. */
          application_id?: string;
          /** The application name. */
          application_name?: string;
          /** The current deployment status. */
          status?: string;
          /** The deployed source commit. */
          commit?: string;
          /** The deployed commit message. */
          commit_message?: string;
          /** Whether the deployment bypasses the build cache. */
          force_rebuild?: boolean;
          /** The timestamp when the deployment was created. */
          created_at?: string;
          /** The timestamp when the deployment was last updated. */
          updated_at?: string;
          /** The Coolify deployment detail URL. */
          deployment_url?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Coolify project by UUID. */
    "coolify.get_project": {
      input: {
        /**
         * The Coolify project UUID.
         * @minLength 1
         */
        projectUuid: string;
      };
      output: {
        /** A Coolify project. */
        project: {
          /** The internal project ID. */
          id?: number;
          /** The project UUID. */
          uuid?: string;
          /** The project name. */
          name?: string;
          /** The project description. */
          description?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Coolify applications, optionally filtered by tag. */
    "coolify.list_applications": {
      input: {
        /**
         * An optional Coolify tag name used to filter applications.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** Applications returned by Coolify. */
        applications: Array<{
          /** The internal application ID. */
          id?: number;
          /** The application UUID. */
          uuid?: string;
          /** The application name. */
          name?: string;
          /** The application description, or null when it is unset. */
          description?: string | null;
          /** The current application status. */
          status?: string;
          /** The configured application domains, or null when none are set. */
          fqdn?: string | null;
          /** The Git repository URL. */
          git_repository?: string;
          /** The Git branch. */
          git_branch?: string;
          /** The build pack used by the application. */
          build_pack?: string;
          /** The timestamp when the application was created. */
          created_at?: string;
          /** The timestamp when the application was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List currently running Coolify deployments. */
    "coolify.list_deployments": {
      input: Record<string, never>;
      output: {
        /** Deployments returned by Coolify. */
        deployments: Array<{
          /** The internal deployment ID. */
          id?: number;
          /** The deployment UUID. */
          deployment_uuid?: string;
          /** The application ID associated with the deployment. */
          application_id?: string;
          /** The application name. */
          application_name?: string;
          /** The current deployment status. */
          status?: string;
          /** The deployed source commit. */
          commit?: string;
          /** The deployed commit message. */
          commit_message?: string;
          /** Whether the deployment bypasses the build cache. */
          force_rebuild?: boolean;
          /** The timestamp when the deployment was created. */
          created_at?: string;
          /** The timestamp when the deployment was last updated. */
          updated_at?: string;
          /** The Coolify deployment detail URL. */
          deployment_url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Coolify projects accessible to the connected API token. */
    "coolify.list_projects": {
      input: Record<string, never>;
      output: {
        /** Projects returned by Coolify. */
        projects: Array<{
          /** The internal project ID. */
          id?: number;
          /** The project UUID. */
          uuid?: string;
          /** The project name. */
          name?: string;
          /** The project description. */
          description?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Restart a Coolify application through the deployment queue. */
    "coolify.restart_application": {
      input: {
        /**
         * The Coolify application UUID.
         * @minLength 1
         */
        applicationUuid: string;
      };
      output: {
        /** The deployment request message returned by Coolify. */
        message: string;
        /** Whether Coolify reported a new deployment queue entry. Treat this as provisional when deploymentVerified is false. */
        queued: boolean;
        /** Whether the connector confirmed the returned deployment handle or confirmed that no handle exists. */
        deploymentVerified: boolean;
        /** The deployment handle returned by Coolify, or null when none was returned or the handle was confirmed absent. Treat it as provisional when deploymentVerified is false. */
        deploymentUuid: string | null;
      };
    };
    /** Start a Coolify application and queue its deployment. */
    "coolify.start_application": {
      input: {
        /**
         * The Coolify application UUID.
         * @minLength 1
         */
        applicationUuid: string;
        /** Whether to rebuild without cache. */
        force?: boolean;
        /** Whether Coolify should skip its normal deployment queue. */
        instantDeploy?: boolean;
      };
      output: {
        /** The deployment request message returned by Coolify. */
        message: string;
        /** Whether Coolify reported a new deployment queue entry. Treat this as provisional when deploymentVerified is false. */
        queued: boolean;
        /** Whether the connector confirmed the returned deployment handle or confirmed that no handle exists. */
        deploymentVerified: boolean;
        /** The deployment handle returned by Coolify, or null when none was returned or the handle was confirmed absent. Treat it as provisional when deploymentVerified is false. */
        deploymentUuid: string | null;
      };
    };
    /** Stop a Coolify application, optionally pruning unused Docker resources. */
    "coolify.stop_application": {
      input: {
        /**
         * The Coolify application UUID.
         * @minLength 1
         */
        applicationUuid: string;
        /** Whether Coolify should prune unused Docker networks and volumes after stopping. */
        dockerCleanup?: boolean;
      };
      output: {
        /** The stop request confirmation returned by Coolify. */
        message: string;
      };
    };
  }
}
