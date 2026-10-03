import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a domain to a Vercel project. */
    "vercel.add_project_domain": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
        /**
         * Domain name to add to the project.
         * @minLength 1
         */
        name: string;
        /**
         * Redirect target for the domain.
         * @minLength 1
         */
        redirect?: string;
        /**
         * Git branch name.
         * @minLength 1
         */
        gitBranch?: string;
        /**
         * Vercel custom environment ID.
         * @minLength 1
         */
        customEnvironmentId?: string;
      };
      output: {
        /** Vercel project domain. */
        domain: {
          /** Domain name. */
          name: string;
          /** Apex domain name. */
          apexName?: string;
          /** Whether the domain is verified in Vercel. */
          verified?: boolean;
          /** Raw domain verification records returned by Vercel. */
          verification?: Array<Record<string, unknown>>;
          /** Redirect target configured for the domain, or null when no redirect is set. */
          redirect?: string | null;
          /** Git branch associated with the domain, when present. */
          gitBranch?: string;
          /** Custom environment ID associated with the domain, when present. */
          customEnvironmentId?: string;
        };
      };
    };
    /** Assign an alias to a Vercel deployment, moving it from any deployment that currently owns it. */
    "vercel.assign_deployment_alias": {
      input: {
        /**
         * Stable Vercel deployment ID that should receive the alias.
         * @minLength 1
         */
        deploymentId: string;
        /**
         * Alias hostname to assign to the deployment.
         * @minLength 1
         */
        alias: string;
        /**
         * Hostname that the alias should redirect to with status code 307.
         * @minLength 1
         */
        redirect?: string | null;
      };
      output: {
        /** A Vercel deployment alias. */
        alias: {
          /** Unique Vercel alias ID. */
          uid: string;
          /** Assigned alias hostname. */
          alias: string;
          /** Alias creation timestamp. */
          created: string;
          /** Redirect destination, or null when this alias serves the deployment. */
          redirect?: string | null;
          /** Previous deployment ID that owned the alias, when reassigned. */
          oldDeploymentId?: string | null;
          /** Protection bypass configuration attached to the alias. */
          protectionBypass?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Cancel a Vercel deployment that is still in progress. */
    "vercel.cancel_deployment": {
      input: {
        /**
         * Vercel deployment ID to cancel.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** Vercel deployment summary. */
        deployment: {
          /** Vercel deployment ID. */
          id: string;
          /** Deployment name. */
          name?: string;
          /** Deployment URL. */
          url?: string;
          /** Deployment state reported by Vercel. */
          state?: string;
          /** Deployment readiness state reported by Vercel. */
          readyState?: string;
          /** Deployment target such as production or preview. */
          target?: string;
          /** Deployment creation timestamp in milliseconds. */
          createdAt?: number;
          /** Deployment ready timestamp in milliseconds. */
          ready?: number;
          /** Vercel project ID for the deployment. */
          projectId?: string;
          /** Raw creator payload returned by Vercel for the deployment. */
          creator?: Record<string, unknown>;
          /** Raw metadata payload returned by Vercel for the deployment. */
          meta?: Record<string, unknown>;
          /** Aliases currently assigned to the deployment. */
          alias?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create an asynchronous Vercel deployment from file references returned by upload_deployment_file_from_url. */
    "vercel.create_file_deployment": {
      input: {
        /**
         * Project name used in the deployment URL.
         * @minLength 1
         */
        name: string;
        /**
         * Existing Vercel project ID or name that should receive the deployment.
         * @minLength 1
         */
        project?: string;
        /** Deployment target. Omit for a preview deployment. */
        target?: "production" | "staging";
        /**
         * Custom environment slug or ID that should receive the deployment.
         * @minLength 1
         */
        customEnvironmentSlugOrId?: string;
        /** Whether to force a fresh build instead of reusing a similar deployment. */
        forceNew?: boolean;
        /** Whether to continue without confirming a framework auto-detection change. */
        skipAutoDetectionConfirmation?: boolean;
        /** Custom build machine to use for this deployment. */
        buildMachine?: "turbo";
        /**
         * Monorepo manager to use for this deployment.
         * @minLength 1
         */
        monorepoManager?: string;
        /** String metadata to attach to the deployment. */
        meta?: Record<string, string>;
        /** Project settings to apply to this deployment. */
        projectSettings?: Record<string, unknown>;
        /**
         * Uploaded files to include in the deployment.
         * @minItems 1
         * @maxItems 15000
         */
        files: Array<{
          /**
           * File path relative to the deployment root.
           * @minLength 1
           */
          path: string;
          /**
           * SHA-1 digest returned by upload_deployment_file_from_url.
           * @minLength 40
           * @maxLength 40
           */
          sha: string;
          /**
           * File size in bytes.
           * @minimum 0
           */
          size: number;
        }>;
      };
      output: {
        /** Vercel deployment summary. */
        deployment: {
          /** Vercel deployment ID. */
          id: string;
          /** Deployment name. */
          name?: string;
          /** Deployment URL. */
          url?: string;
          /** Deployment state reported by Vercel. */
          state?: string;
          /** Deployment readiness state reported by Vercel. */
          readyState?: string;
          /** Deployment target such as production or preview. */
          target?: string;
          /** Deployment creation timestamp in milliseconds. */
          createdAt?: number;
          /** Deployment ready timestamp in milliseconds. */
          ready?: number;
          /** Vercel project ID for the deployment. */
          projectId?: string;
          /** Raw creator payload returned by Vercel for the deployment. */
          creator?: Record<string, unknown>;
          /** Raw metadata payload returned by Vercel for the deployment. */
          meta?: Record<string, unknown>;
          /** Aliases currently assigned to the deployment. */
          alias?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create an asynchronous Vercel deployment from a Git repository connected to the account. */
    "vercel.create_git_deployment": {
      input: {
        /**
         * Project name used in the deployment URL.
         * @minLength 1
         */
        name: string;
        /**
         * Existing Vercel project ID or name that should receive the deployment.
         * @minLength 1
         */
        project?: string;
        /** Deployment target. Omit for a preview deployment. */
        target?: "production" | "staging";
        /**
         * Custom environment slug or ID that should receive the deployment.
         * @minLength 1
         */
        customEnvironmentSlugOrId?: string;
        /** Whether to force a fresh build instead of reusing a similar deployment. */
        forceNew?: boolean;
        /** Whether to continue without confirming a framework auto-detection change. */
        skipAutoDetectionConfirmation?: boolean;
        /** Custom build machine to use for this deployment. */
        buildMachine?: "turbo";
        /**
         * Monorepo manager to use for this deployment.
         * @minLength 1
         */
        monorepoManager?: string;
        /** String metadata to attach to the deployment. */
        meta?: Record<string, string>;
        /** Project settings to apply to this deployment. */
        projectSettings?: Record<string, unknown>;
        /** Git provider source type documented by Vercel. */
        gitProvider: "vercel" | "github" | "github-limited" | "gitlab" | "bitbucket" | "cursor-origin";
        /**
         * Stable repository ID from the linked Vercel project's metadata.
         * @minLength 1
         */
        repositoryId?: string;
        /**
         * GitHub organization or Bitbucket repository owner.
         * @minLength 1
         */
        repositoryOwner?: string;
        /**
         * GitHub repository name or Bitbucket repository slug.
         * @minLength 1
         */
        repositoryName?: string;
        /**
         * Git branch, tag, or reference to deploy.
         * @minLength 1
         */
        ref?: string;
        /**
         * Specific Git commit SHA to deploy.
         * @minLength 1
         */
        sha?: string;
        /**
         * Bitbucket workspace UUID associated with repositoryId.
         * @minLength 1
         */
        workspaceUuid?: string;
        /**
         * Short-lived read-only GitHub token for Vercel platform accounts.
         * @minLength 1
         * @maxLength 1024
         */
        gitAccessToken?: string;
        /** Git commit and CI metadata to attach to the deployment. */
        gitMetadata?: Record<string, unknown>;
      };
      output: {
        /** Vercel deployment summary. */
        deployment: {
          /** Vercel deployment ID. */
          id: string;
          /** Deployment name. */
          name?: string;
          /** Deployment URL. */
          url?: string;
          /** Deployment state reported by Vercel. */
          state?: string;
          /** Deployment readiness state reported by Vercel. */
          readyState?: string;
          /** Deployment target such as production or preview. */
          target?: string;
          /** Deployment creation timestamp in milliseconds. */
          createdAt?: number;
          /** Deployment ready timestamp in milliseconds. */
          ready?: number;
          /** Vercel project ID for the deployment. */
          projectId?: string;
          /** Raw creator payload returned by Vercel for the deployment. */
          creator?: Record<string, unknown>;
          /** Raw metadata payload returned by Vercel for the deployment. */
          meta?: Record<string, unknown>;
          /** Aliases currently assigned to the deployment. */
          alias?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Vercel project. */
    "vercel.create_project": {
      input: {
        /**
         * Vercel project name.
         * @minLength 1
         */
        name: string;
        /**
         * Framework to set on the project.
         * @minLength 1
         */
        framework?: string;
        /**
         * Root directory for the project.
         * @minLength 1
         */
        rootDirectory?: string;
        /**
         * Node.js version to use for the project.
         * @minLength 1
         */
        nodeVersion?: string;
        /**
         * Build command for the project.
         * @minLength 1
         */
        buildCommand?: string;
        /**
         * Development command for the project.
         * @minLength 1
         */
        devCommand?: string;
        /**
         * Install command for the project.
         * @minLength 1
         */
        installCommand?: string;
        /**
         * Output directory for the project build.
         * @minLength 1
         */
        outputDirectory?: string;
        /** Whether directory listing is enabled for the project. */
        directoryListing?: boolean;
        /** Whether the project source is public. */
        publicSource?: boolean;
        /** Whether Git fork protection is enabled for the project. */
        gitForkProtection?: boolean;
      };
      output: {
        /** Vercel project. */
        project: {
          /** Vercel project ID. */
          id: string;
          /** Vercel project name. */
          name: string;
          /** Owning account ID for the project. */
          accountId?: string;
          /** Detected framework for the project. */
          framework?: string;
          /** Configured Node.js version for the project. */
          nodeVersion?: string;
          /** Project creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last project update timestamp in milliseconds. */
          updatedAt?: number;
          /** Raw project link payload returned by Vercel. */
          link?: Record<string, unknown>;
          /** Most recent deployments attached to the project. */
          latestDeployments?: Array<{
            /** Vercel deployment ID. */
            id: string;
            /** Deployment name. */
            name?: string;
            /** Deployment URL. */
            url?: string;
            /** Deployment state reported by Vercel. */
            state?: string;
            /** Deployment readiness state reported by Vercel. */
            readyState?: string;
            /** Deployment target such as production or preview. */
            target?: string;
            /** Deployment creation timestamp in milliseconds. */
            createdAt?: number;
            /** Deployment ready timestamp in milliseconds. */
            ready?: number;
            /** Vercel project ID for the deployment. */
            projectId?: string;
            /** Raw creator payload returned by Vercel for the deployment. */
            creator?: Record<string, unknown>;
            /** Raw metadata payload returned by Vercel for the deployment. */
            meta?: Record<string, unknown>;
            /** Aliases currently assigned to the deployment. */
            alias?: Array<string>;
            [key: string]: unknown;
          }>;
        };
      };
    };
    /** Create a Vercel project environment variable. */
    "vercel.create_project_env": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
        /**
         * Environment variable name.
         * @minLength 1
         */
        key: string;
        /**
         * Environment variable value.
         * @minLength 1
         */
        value: string;
        /** Environment variable type. */
        type: "plain" | "secret" | "system" | "encrypted" | "sensitive";
        /**
         * Deployment targets that should receive this environment variable.
         * @minItems 1
         */
        target: Array<"production" | "preview" | "development">;
        /**
         * Git branch name.
         * @minLength 1
         */
        gitBranch?: string;
        /**
         * Optional comment for the environment variable.
         * @minLength 1
         */
        comment?: string;
        /** Custom environment IDs that should receive this environment variable. */
        customEnvironmentIds?: Array<string>;
      };
      output: {
        /** Environment variables returned by Vercel after creation. */
        envs: Array<{
          /** Vercel environment variable ID. */
          id: string;
          /** Environment variable name. */
          key: string;
          /** Environment variable type. */
          type: string;
          /** Deployment targets that receive this environment variable. */
          target?: Array<string>;
          /** Git branch name scoped to this environment variable, when present. */
          gitBranch?: string;
          /** Environment variable creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last environment variable update timestamp in milliseconds. */
          updatedAt?: number;
          /** Comment attached to the environment variable, when present. */
          comment?: string;
        }>;
      };
    };
    /** Create a Vercel webhook. */
    "vercel.create_webhook": {
      input: {
        /**
         * Webhook destination URL.
         * @format uri
         */
        url: string;
        /**
         * Webhook events that should trigger notifications.
         * @minItems 1
         */
        events: Array<string>;
        /** Project IDs that should trigger the webhook. Omit to receive events for all projects. */
        projectIds?: Array<string>;
      };
      output: {
        /** Vercel webhook. */
        webhook: {
          /** Vercel webhook ID. */
          id: string;
          /** Webhook destination URL. */
          url: string;
          /** Webhook events configured on the webhook. */
          events?: Array<string>;
          /** Project IDs associated with the webhook, when scoped to specific projects. */
          projectIds?: Array<string>;
          /** Vercel team ID that owns the webhook, when present. */
          teamId?: string;
          /** Webhook creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last webhook update timestamp in milliseconds. */
          updatedAt?: number;
        };
      };
    };
    /** Permanently delete a Vercel deployment. */
    "vercel.delete_deployment": {
      input: Record<string, unknown>;
      output: {
        /** Deleted Vercel deployment ID. */
        deploymentId: string;
        /** Final deletion state reported by Vercel. */
        state: "DELETED";
      };
    };
    /** Delete a Vercel project environment variable. */
    "vercel.delete_project_env": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
        /**
         * Vercel environment variable ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Environment variables returned by Vercel after deletion. */
        envs: Array<{
          /** Vercel environment variable ID. */
          id: string;
          /** Environment variable name. */
          key: string;
          /** Environment variable type. */
          type: string;
          /** Deployment targets that receive this environment variable. */
          target?: Array<string>;
          /** Git branch name scoped to this environment variable, when present. */
          gitBranch?: string;
          /** Environment variable creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last environment variable update timestamp in milliseconds. */
          updatedAt?: number;
          /** Comment attached to the environment variable, when present. */
          comment?: string;
        }>;
      };
    };
    /** Delete a Vercel webhook. */
    "vercel.delete_webhook": {
      input: {
        /**
         * Vercel webhook ID.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** Whether the Vercel webhook was deleted. */
        success: boolean;
      };
    };
    /** Get the authenticated Vercel user. */
    "vercel.get_auth_user": {
      input: Record<string, never>;
      output: {
        /** Vercel user. */
        user: {
          /** Vercel user ID. */
          id: string;
          /** Vercel username. */
          username?: string;
          /** Vercel account email address. */
          email?: string;
          /** Vercel display name. */
          name?: string;
        };
      };
    };
    /** Get a Vercel deployment. */
    "vercel.get_deployment": {
      input: {
        /**
         * Vercel deployment ID or deployment URL.
         * @minLength 1
         */
        idOrUrl: string;
        /** When true, include Git repository metadata in the deployment response. */
        withGitRepoInfo?: boolean;
      };
      output: {
        /** Vercel deployment summary. */
        deployment: {
          /** Vercel deployment ID. */
          id: string;
          /** Deployment name. */
          name?: string;
          /** Deployment URL. */
          url?: string;
          /** Deployment state reported by Vercel. */
          state?: string;
          /** Deployment readiness state reported by Vercel. */
          readyState?: string;
          /** Deployment target such as production or preview. */
          target?: string;
          /** Deployment creation timestamp in milliseconds. */
          createdAt?: number;
          /** Deployment ready timestamp in milliseconds. */
          ready?: number;
          /** Vercel project ID for the deployment. */
          projectId?: string;
          /** Raw creator payload returned by Vercel for the deployment. */
          creator?: Record<string, unknown>;
          /** Raw metadata payload returned by Vercel for the deployment. */
          meta?: Record<string, unknown>;
          /** Aliases currently assigned to the deployment. */
          alias?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Get Vercel deployment events. */
    "vercel.get_deployment_events": {
      input: {
        /**
         * Vercel deployment ID or deployment URL.
         * @minLength 1
         */
        idOrUrl: string;
        /**
         * Maximum number of events to return, or -1 for all available events.
         * @minimum -1
         */
        limit?: number;
        /** Pagination cursor for results created after this timestamp. */
        since?: number;
        /** Pagination cursor for results created before this timestamp. */
        until?: number;
        /** Order in which to return deployment events. */
        direction?: "forward" | "backward";
        /** When true, include build events in the response. */
        builds?: boolean;
        /** When true, include delimiter events between logical log sections. */
        delimiter?: boolean;
        /**
         * Deployment build ID to filter events by.
         * @minLength 1
         */
        buildId?: string;
        /**
         * HTTP status code or status class such as 5xx to filter events by.
         * @minLength 1
         */
        statusCode?: string;
      };
      output: {
        /** Deployment events returned by Vercel. */
        events: Array<{
          /** Deployment event timestamp in milliseconds. */
          created: number;
          /** Deployment event type. */
          type: string;
          /** Raw deployment event payload returned by Vercel. */
          payload: Record<string, unknown>;
        }>;
      };
    };
    /** Get one Vercel deployment file as base64-encoded content. */
    "vercel.get_deployment_file_contents": {
      input: {
        /**
         * Vercel deployment ID.
         * @minLength 1
         */
        deploymentId: string;
        /**
         * Unique Vercel deployment file ID.
         * @minLength 1
         */
        fileId: string;
        /**
         * File path required by Vercel for some Git deployments.
         * @minLength 1
         */
        path?: string;
      };
      output: {
        /** Base64-encoded deployment file content when the upstream response is at most 16 MiB. */
        contentBase64: string;
      };
    };
    /** Get domain configuration guidance from Vercel. */
    "vercel.get_domain_config": {
      input: {
        /**
         * Domain name.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Party that configured the domain. */
        configuredBy?: string;
        /** Domain verification challenge types accepted by Vercel. */
        acceptedChallenges?: Array<string>;
        /** Whether Vercel considers the domain misconfigured. */
        misconfigured?: boolean;
        /** Name servers recommended by Vercel for the domain. */
        recommendedNameServers?: Array<string>;
      };
    };
    /** Get alias mapping statuses for the latest production promotion of a project; results are project-global and are not correlated to a specific promote_deployment call. */
    "vercel.get_latest_deployment_promotion_aliases": {
      input: {
        /**
         * Vercel project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Maximum number of results to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Pagination cursor for results created after this timestamp. */
        since?: number;
        /** Pagination cursor for results created before this timestamp. */
        until?: number;
        /** Whether to return only aliases that failed to map. */
        failedOnly?: boolean;
      };
      output: {
        /** Promotion alias mapping statuses. */
        aliases: Array<{
          /** Vercel alias ID. */
          id: string;
          /** Alias hostname being mapped. */
          alias: string;
          /** Current alias mapping status. */
          status: string;
        }>;
        /** Pagination cursors returned by Vercel. */
        pagination?: {
          /** Number of items returned in this page. */
          count?: number;
          /** Pagination cursor for the next page, or null when there is no next page. */
          next?: number | null;
          /** Pagination cursor for the previous page, or null when there is no previous page. */
          prev?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Vercel project. */
    "vercel.get_project": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
      };
      output: {
        /** Vercel project. */
        project: {
          /** Vercel project ID. */
          id: string;
          /** Vercel project name. */
          name: string;
          /** Owning account ID for the project. */
          accountId?: string;
          /** Detected framework for the project. */
          framework?: string;
          /** Configured Node.js version for the project. */
          nodeVersion?: string;
          /** Project creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last project update timestamp in milliseconds. */
          updatedAt?: number;
          /** Raw project link payload returned by Vercel. */
          link?: Record<string, unknown>;
          /** Most recent deployments attached to the project. */
          latestDeployments?: Array<{
            /** Vercel deployment ID. */
            id: string;
            /** Deployment name. */
            name?: string;
            /** Deployment URL. */
            url?: string;
            /** Deployment state reported by Vercel. */
            state?: string;
            /** Deployment readiness state reported by Vercel. */
            readyState?: string;
            /** Deployment target such as production or preview. */
            target?: string;
            /** Deployment creation timestamp in milliseconds. */
            createdAt?: number;
            /** Deployment ready timestamp in milliseconds. */
            ready?: number;
            /** Vercel project ID for the deployment. */
            projectId?: string;
            /** Raw creator payload returned by Vercel for the deployment. */
            creator?: Record<string, unknown>;
            /** Raw metadata payload returned by Vercel for the deployment. */
            meta?: Record<string, unknown>;
            /** Aliases currently assigned to the deployment. */
            alias?: Array<string>;
            [key: string]: unknown;
          }>;
        };
      };
    };
    /** Get a Vercel project domain. */
    "vercel.get_project_domain": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
        /**
         * Domain name.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Vercel project domain. */
        domain: {
          /** Domain name. */
          name: string;
          /** Apex domain name. */
          apexName?: string;
          /** Whether the domain is verified in Vercel. */
          verified?: boolean;
          /** Raw domain verification records returned by Vercel. */
          verification?: Array<Record<string, unknown>>;
          /** Redirect target configured for the domain, or null when no redirect is set. */
          redirect?: string | null;
          /** Git branch associated with the domain, when present. */
          gitBranch?: string;
          /** Custom environment ID associated with the domain, when present. */
          customEnvironmentId?: string;
        };
      };
    };
    /** Get runtime logs for a Vercel deployment. */
    "vercel.get_runtime_logs": {
      input: {
        /**
         * Vercel project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Vercel deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** Runtime log entries returned by Vercel. */
        logs: Array<{
          /** Runtime log timestamp in milliseconds. */
          timestampInMs: number;
          /** Runtime log level. */
          level: string;
          /** Runtime log message. */
          message: string;
          /** Runtime log source. */
          source: string;
          /** HTTP method for the runtime log entry, when present. */
          requestMethod?: string;
          /** HTTP request path for the runtime log entry, when present. */
          requestPath?: string;
          /** HTTP response status code for the runtime log entry, when present. */
          responseStatusCode?: number;
        }>;
      };
    };
    /** Get a Vercel team by id or slug. */
    "vercel.get_team": {
      input: {
        /**
         * Vercel team ID or team slug.
         * @minLength 1
         */
        teamId: string;
      };
      output: {
        /** Vercel team. */
        team: {
          /** Vercel team ID. */
          id: string;
          /** Vercel team slug. */
          slug?: string;
          /** Vercel team display name. */
          name?: string;
          /** Team creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last team update timestamp in milliseconds. */
          updatedAt?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Vercel webhook. */
    "vercel.get_webhook": {
      input: {
        /**
         * Vercel webhook ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Vercel webhook. */
        webhook: {
          /** Vercel webhook ID. */
          id: string;
          /** Webhook destination URL. */
          url: string;
          /** Webhook events configured on the webhook. */
          events?: Array<string>;
          /** Project IDs associated with the webhook, when scoped to specific projects. */
          projectIds?: Array<string>;
          /** Vercel team ID that owns the webhook, when present. */
          teamId?: string;
          /** Webhook creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last webhook update timestamp in milliseconds. */
          updatedAt?: number;
        };
      };
    };
    /** List aliases currently assigned to a Vercel deployment. */
    "vercel.list_deployment_aliases": {
      input: {
        /**
         * Vercel deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** Vercel deployment aliases. */
        aliases: Array<{
          /** Unique Vercel alias ID. */
          uid: string;
          /** Assigned alias hostname. */
          alias: string;
          /** Alias creation timestamp. */
          created: string;
          /** Redirect destination, or null when this alias serves the deployment. */
          redirect?: string | null;
          /** Previous deployment ID that owned the alias, when reassigned. */
          oldDeploymentId?: string | null;
          /** Protection bypass configuration attached to the alias. */
          protectionBypass?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the source file tree stored for a Vercel deployment. */
    "vercel.list_deployment_files": {
      input: {
        /**
         * Vercel deployment ID.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** Top-level deployment file tree entries. */
        files: Array<{
          /** File or directory name. */
          name: string;
          /** Deployment file tree entry type. */
          type: "directory" | "file" | "invalid" | "lambda" | "middleware" | "symlink";
          /** File mode indicating the entry type and permissions. */
          mode: number;
          /** Unique Vercel file identifier for file entries. */
          uid?: string;
          /** Content type reported for file entries. */
          contentType?: string;
          /** Nested file tree entries for a directory. */
          children?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Vercel deployments. */
    "vercel.list_deployments": {
      input: {
        /**
         * Deployment name to filter by.
         * @minLength 1
         */
        app?: string;
        /**
         * Vercel project ID or name to filter by.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Vercel project IDs to filter by when projectId is omitted.
         * @minItems 1
         * @maxItems 20
         */
        projectIds?: Array<string>;
        /**
         * Maximum number of results to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Pagination cursor for results created after this timestamp. */
        since?: number;
        /** Pagination cursor for results created before this timestamp. */
        until?: number;
        /**
         * Deployment environment to filter by.
         * @minLength 1
         */
        target?: string;
        /**
         * Deployment states to filter by.
         * @minItems 1
         */
        states?: Array<"BUILDING" | "ERROR" | "INITIALIZING" | "QUEUED" | "READY" | "CANCELED" | "BLOCKED">;
        /**
         * Vercel user IDs whose deployments should be returned.
         * @minItems 1
         */
        userIds?: Array<string>;
        /** Whether to return only deployments matching rollback candidacy. */
        rollbackCandidate?: boolean;
        /**
         * Git branch name to filter by.
         * @minLength 1
         */
        branch?: string;
        /**
         * Git commit SHA to filter by.
         * @minLength 1
         */
        sha?: string;
      };
      output: {
        /** Vercel deployments. */
        deployments: Array<{
          /** Vercel deployment ID. */
          id: string;
          /** Deployment name. */
          name?: string;
          /** Deployment URL. */
          url?: string;
          /** Deployment state reported by Vercel. */
          state?: string;
          /** Deployment readiness state reported by Vercel. */
          readyState?: string;
          /** Deployment target such as production or preview. */
          target?: string;
          /** Deployment creation timestamp in milliseconds. */
          createdAt?: number;
          /** Deployment ready timestamp in milliseconds. */
          ready?: number;
          /** Vercel project ID for the deployment. */
          projectId?: string;
          /** Raw creator payload returned by Vercel for the deployment. */
          creator?: Record<string, unknown>;
          /** Raw metadata payload returned by Vercel for the deployment. */
          meta?: Record<string, unknown>;
          /** Aliases currently assigned to the deployment. */
          alias?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Pagination cursors returned by Vercel. */
        pagination?: {
          /** Number of items returned in this page. */
          count?: number;
          /** Pagination cursor for the next page, or null when there is no next page. */
          next?: number | null;
          /** Pagination cursor for the previous page, or null when there is no previous page. */
          prev?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List domains for a Vercel project. */
    "vercel.list_project_domains": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
        /**
         * Maximum number of results to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Pagination cursor for results created after this timestamp. */
        since?: number;
        /** Pagination cursor for results created before this timestamp. */
        until?: number;
        /**
         * Git branch name.
         * @minLength 1
         */
        gitBranch?: string;
        /**
         * Vercel custom environment ID.
         * @minLength 1
         */
        customEnvironmentId?: string;
      };
      output: {
        /** Domains attached to the project. */
        domains: Array<{
          /** Domain name. */
          name: string;
          /** Apex domain name. */
          apexName?: string;
          /** Whether the domain is verified in Vercel. */
          verified?: boolean;
          /** Raw domain verification records returned by Vercel. */
          verification?: Array<Record<string, unknown>>;
          /** Redirect target configured for the domain, or null when no redirect is set. */
          redirect?: string | null;
          /** Git branch associated with the domain, when present. */
          gitBranch?: string;
          /** Custom environment ID associated with the domain, when present. */
          customEnvironmentId?: string;
        }>;
        /** Pagination cursors returned by Vercel. */
        pagination?: {
          /** Number of items returned in this page. */
          count?: number;
          /** Pagination cursor for the next page, or null when there is no next page. */
          next?: number | null;
          /** Pagination cursor for the previous page, or null when there is no previous page. */
          prev?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List environment variables for a Vercel project. */
    "vercel.list_project_envs": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
        /**
         * Git branch name.
         * @minLength 1
         */
        gitBranch?: string;
        /**
         * Vercel custom environment ID.
         * @minLength 1
         */
        customEnvironmentId?: string;
      };
      output: {
        /** Environment variables configured on the project. */
        envs: Array<{
          /** Vercel environment variable ID. */
          id: string;
          /** Environment variable name. */
          key: string;
          /** Environment variable type. */
          type: string;
          /** Deployment targets that receive this environment variable. */
          target?: Array<string>;
          /** Git branch name scoped to this environment variable, when present. */
          gitBranch?: string;
          /** Environment variable creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last environment variable update timestamp in milliseconds. */
          updatedAt?: number;
          /** Comment attached to the environment variable, when present. */
          comment?: string;
        }>;
      };
    };
    /** List Vercel projects. */
    "vercel.list_projects": {
      input: {
        /**
         * Maximum number of results to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Pagination cursor for results created after this timestamp. */
        since?: number;
        /** Pagination cursor for results created before this timestamp. */
        until?: number;
        /**
         * Repository URL used to filter projects.
         * @format uri
         */
        repoUrl?: string;
      };
      output: {
        /** Vercel projects. */
        projects: Array<{
          /** Vercel project ID. */
          id: string;
          /** Vercel project name. */
          name: string;
          /** Owning account ID for the project. */
          accountId?: string;
          /** Detected framework for the project. */
          framework?: string;
          /** Configured Node.js version for the project. */
          nodeVersion?: string;
          /** Project creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last project update timestamp in milliseconds. */
          updatedAt?: number;
          /** Raw project link payload returned by Vercel. */
          link?: Record<string, unknown>;
          /** Most recent deployments attached to the project. */
          latestDeployments?: Array<{
            /** Vercel deployment ID. */
            id: string;
            /** Deployment name. */
            name?: string;
            /** Deployment URL. */
            url?: string;
            /** Deployment state reported by Vercel. */
            state?: string;
            /** Deployment readiness state reported by Vercel. */
            readyState?: string;
            /** Deployment target such as production or preview. */
            target?: string;
            /** Deployment creation timestamp in milliseconds. */
            createdAt?: number;
            /** Deployment ready timestamp in milliseconds. */
            ready?: number;
            /** Vercel project ID for the deployment. */
            projectId?: string;
            /** Raw creator payload returned by Vercel for the deployment. */
            creator?: Record<string, unknown>;
            /** Raw metadata payload returned by Vercel for the deployment. */
            meta?: Record<string, unknown>;
            /** Aliases currently assigned to the deployment. */
            alias?: Array<string>;
            [key: string]: unknown;
          }>;
        }>;
        /** Pagination cursors returned by Vercel. */
        pagination?: {
          /** Number of items returned in this page. */
          count?: number;
          /** Pagination cursor for the next page, or null when there is no next page. */
          next?: number | null;
          /** Pagination cursor for the previous page, or null when there is no previous page. */
          prev?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Vercel teams available to the authenticated user. */
    "vercel.list_teams": {
      input: {
        /**
         * Maximum number of results to return.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Pagination cursor for results created after this timestamp. */
        since?: number;
      };
      output: {
        /** Vercel teams available to the authenticated user. */
        teams: Array<{
          /** Vercel team ID. */
          id: string;
          /** Vercel team slug. */
          slug?: string;
          /** Vercel team display name. */
          name?: string;
          /** Team creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last team update timestamp in milliseconds. */
          updatedAt?: number;
          [key: string]: unknown;
        }>;
        /** Pagination cursors returned by Vercel. */
        pagination?: {
          /** Number of items returned in this page. */
          count?: number;
          /** Pagination cursor for the next page, or null when there is no next page. */
          next?: number | null;
          /** Pagination cursor for the previous page, or null when there is no previous page. */
          prev?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Vercel webhooks. */
    "vercel.list_webhooks": {
      input: Record<string, never>;
      output: {
        /** Vercel webhooks. */
        webhooks: Array<{
          /** Vercel webhook ID. */
          id: string;
          /** Webhook destination URL. */
          url: string;
          /** Webhook events configured on the webhook. */
          events?: Array<string>;
          /** Project IDs associated with the webhook, when scoped to specific projects. */
          projectIds?: Array<string>;
          /** Vercel team ID that owns the webhook, when present. */
          teamId?: string;
          /** Webhook creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last webhook update timestamp in milliseconds. */
          updatedAt?: number;
        }>;
      };
    };
    /** Request Vercel to point a project's production traffic to an existing deployment. */
    "vercel.promote_deployment": {
      input: {
        /**
         * Vercel project ID whose production traffic should change.
         * @minLength 1
         */
        projectId: string;
        /**
         * Vercel deployment ID to promote to production.
         * @minLength 1
         */
        deploymentId: string;
      };
      output: {
        /** Whether Vercel accepted the production promotion request. */
        accepted: boolean;
        /** HTTP status code returned for the promotion request. */
        statusCode: number;
        /** Vercel project ID from the accepted promotion request. */
        projectId: string;
        /** Vercel deployment ID from the accepted promotion request. */
        deploymentId: string;
      };
    };
    /** Create an asynchronous Vercel deployment from an existing deployment's source and settings. */
    "vercel.redeploy_deployment": {
      input: {
        /**
         * Project name used in the deployment URL.
         * @minLength 1
         */
        name: string;
        /**
         * Existing Vercel project ID or name that should receive the deployment.
         * @minLength 1
         */
        project?: string;
        /** Deployment target. Omit for a preview deployment. */
        target?: "production" | "staging";
        /**
         * Custom environment slug or ID that should receive the deployment.
         * @minLength 1
         */
        customEnvironmentSlugOrId?: string;
        /** Whether to force a fresh build instead of reusing a similar deployment. */
        forceNew?: boolean;
        /** Whether to continue without confirming a framework auto-detection change. */
        skipAutoDetectionConfirmation?: boolean;
        /** Custom build machine to use for this deployment. */
        buildMachine?: "turbo";
        /**
         * Monorepo manager to use for this deployment.
         * @minLength 1
         */
        monorepoManager?: string;
        /** String metadata to attach to the deployment. */
        meta?: Record<string, string>;
        /** Project settings to apply to this deployment. */
        projectSettings?: Record<string, unknown>;
        /**
         * Existing Vercel deployment ID to rebuild.
         * @minLength 1
         */
        deploymentId: string;
        /** Whether to rebuild from the latest commit instead of the original commit. */
        withLatestCommit?: boolean;
      };
      output: {
        /** Vercel deployment summary. */
        deployment: {
          /** Vercel deployment ID. */
          id: string;
          /** Deployment name. */
          name?: string;
          /** Deployment URL. */
          url?: string;
          /** Deployment state reported by Vercel. */
          state?: string;
          /** Deployment readiness state reported by Vercel. */
          readyState?: string;
          /** Deployment target such as production or preview. */
          target?: string;
          /** Deployment creation timestamp in milliseconds. */
          createdAt?: number;
          /** Deployment ready timestamp in milliseconds. */
          ready?: number;
          /** Vercel project ID for the deployment. */
          projectId?: string;
          /** Raw creator payload returned by Vercel for the deployment. */
          creator?: Record<string, unknown>;
          /** Raw metadata payload returned by Vercel for the deployment. */
          meta?: Record<string, unknown>;
          /** Aliases currently assigned to the deployment. */
          alias?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Roll back a Vercel project's production traffic to a previous deployment. */
    "vercel.rollback_deployment": {
      input: {
        /**
         * Vercel project ID whose production traffic should change.
         * @minLength 1
         */
        projectId: string;
        /**
         * Previous Vercel deployment ID to restore.
         * @minLength 1
         */
        deploymentId: string;
        /**
         * Reason recorded for the rollback.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** Whether Vercel accepted the production rollback. */
        success: boolean;
        /** Vercel project ID whose production traffic changed. */
        projectId: string;
        /** Previous Vercel deployment ID restored to production. */
        deploymentId: string;
      };
    };
    /** Update the status and optional outcomes of a Vercel Marketplace integration action attached to a deployment. */
    "vercel.update_deployment_integration_action": {
      input: Record<string, unknown>;
      output: {
        /** Whether Vercel accepted the integration action update. */
        success: boolean;
        /** Vercel deployment ID. */
        deploymentId: string;
        /** Updated integration deployment action identifier. */
        action: string;
      };
    };
    /** Update the recorded reason for a Vercel production rollback. */
    "vercel.update_deployment_rollback_description": {
      input: {
        /**
         * Vercel project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * Deployment ID used as the rollback target.
         * @minLength 1
         */
        deploymentId: string;
        /** Updated reason for the rollback. */
        description: string;
      };
      output: {
        /** Whether Vercel accepted the rollback description update. */
        success: boolean;
        /** Vercel project ID. */
        projectId: string;
        /** Deployment ID used as the rollback target. */
        deploymentId: string;
      };
    };
    /** Update a Vercel project. */
    "vercel.update_project": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
        /**
         * Vercel project name.
         * @minLength 1
         */
        name?: string;
        /**
         * Framework to set on the project.
         * @minLength 1
         */
        framework?: string;
        /**
         * Root directory for the project.
         * @minLength 1
         */
        rootDirectory?: string;
        /**
         * Node.js version to use for the project.
         * @minLength 1
         */
        nodeVersion?: string;
        /**
         * Build command for the project.
         * @minLength 1
         */
        buildCommand?: string;
        /**
         * Development command for the project.
         * @minLength 1
         */
        devCommand?: string;
        /**
         * Install command for the project.
         * @minLength 1
         */
        installCommand?: string;
        /**
         * Output directory for the project build.
         * @minLength 1
         */
        outputDirectory?: string;
        /** Whether directory listing is enabled for the project. */
        directoryListing?: boolean;
        /** Whether the project source is public. */
        publicSource?: boolean;
        /** Whether Git fork protection is enabled for the project. */
        gitForkProtection?: boolean;
      };
      output: {
        /** Vercel project. */
        project: {
          /** Vercel project ID. */
          id: string;
          /** Vercel project name. */
          name: string;
          /** Owning account ID for the project. */
          accountId?: string;
          /** Detected framework for the project. */
          framework?: string;
          /** Configured Node.js version for the project. */
          nodeVersion?: string;
          /** Project creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last project update timestamp in milliseconds. */
          updatedAt?: number;
          /** Raw project link payload returned by Vercel. */
          link?: Record<string, unknown>;
          /** Most recent deployments attached to the project. */
          latestDeployments?: Array<{
            /** Vercel deployment ID. */
            id: string;
            /** Deployment name. */
            name?: string;
            /** Deployment URL. */
            url?: string;
            /** Deployment state reported by Vercel. */
            state?: string;
            /** Deployment readiness state reported by Vercel. */
            readyState?: string;
            /** Deployment target such as production or preview. */
            target?: string;
            /** Deployment creation timestamp in milliseconds. */
            createdAt?: number;
            /** Deployment ready timestamp in milliseconds. */
            ready?: number;
            /** Vercel project ID for the deployment. */
            projectId?: string;
            /** Raw creator payload returned by Vercel for the deployment. */
            creator?: Record<string, unknown>;
            /** Raw metadata payload returned by Vercel for the deployment. */
            meta?: Record<string, unknown>;
            /** Aliases currently assigned to the deployment. */
            alias?: Array<string>;
            [key: string]: unknown;
          }>;
        };
      };
    };
    /** Update a Vercel project environment variable. */
    "vercel.update_project_env": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
        /**
         * Vercel environment variable ID.
         * @minLength 1
         */
        id: string;
        /**
         * Environment variable name.
         * @minLength 1
         */
        key: string;
        /**
         * Environment variable value.
         * @minLength 1
         */
        value: string;
        /** Environment variable type. */
        type: "plain" | "secret" | "system" | "encrypted" | "sensitive";
        /**
         * Deployment targets that should receive this environment variable.
         * @minItems 1
         */
        target: Array<"production" | "preview" | "development">;
        /**
         * Git branch name.
         * @minLength 1
         */
        gitBranch?: string;
        /**
         * Optional comment for the environment variable.
         * @minLength 1
         */
        comment?: string;
        /** Custom environment IDs that should receive this environment variable. */
        customEnvironmentIds?: Array<string>;
      };
      output: {
        /** Vercel environment variable. */
        env: {
          /** Vercel environment variable ID. */
          id: string;
          /** Environment variable name. */
          key: string;
          /** Environment variable type. */
          type: string;
          /** Deployment targets that receive this environment variable. */
          target?: Array<string>;
          /** Git branch name scoped to this environment variable, when present. */
          gitBranch?: string;
          /** Environment variable creation timestamp in milliseconds. */
          createdAt?: number;
          /** Last environment variable update timestamp in milliseconds. */
          updatedAt?: number;
          /** Comment attached to the environment variable, when present. */
          comment?: string;
        };
      };
    };
    /** Download one public file through the Connector SSRF guard, calculate its SHA-1 digest when needed, and upload up to 1 GiB through the Connector to Vercel for a file-based deployment. */
    "vercel.upload_deployment_file_from_url": {
      input: {
        /**
         * Public URL of the file to download and upload to Vercel.
         * @format uri
         */
        fileUrl: string;
        /**
         * Known SHA-1 digest of the source file, if already available.
         * @minLength 40
         * @maxLength 40
         */
        sha?: string;
        /**
         * Known source file size in bytes.
         * @minimum 0
         */
        size?: number;
      };
      output: {
        /** SHA-1 digest used to identify the uploaded file. */
        sha: string;
        /**
         * Uploaded file size in bytes.
         * @minimum 0
         */
        size: number;
      };
    };
    /** Verify a Vercel project domain. */
    "vercel.verify_project_domain": {
      input: {
        /**
         * Vercel project ID or project name.
         * @minLength 1
         */
        idOrName: string;
        /**
         * Domain name.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Vercel project domain. */
        domain: {
          /** Domain name. */
          name: string;
          /** Apex domain name. */
          apexName?: string;
          /** Whether the domain is verified in Vercel. */
          verified?: boolean;
          /** Raw domain verification records returned by Vercel. */
          verification?: Array<Record<string, unknown>>;
          /** Redirect target configured for the domain, or null when no redirect is set. */
          redirect?: string | null;
          /** Git branch associated with the domain, when present. */
          gitBranch?: string;
          /** Custom environment ID associated with the domain, when present. */
          customEnvironmentId?: string;
        };
      };
    };
  }
}
