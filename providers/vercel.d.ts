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
         * Maximum number of results to return.
         * @maximum 100
         * @exclusiveMinimum 0
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
    /** List Vercel deployments. */
    "vercel.list_deployments": {
      input: {
        /**
         * Vercel project ID.
         * @minLength 1
         */
        projectId?: string;
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
         * Deployment target such as production or preview.
         * @minLength 1
         */
        target?: string;
        /**
         * Deployment state to filter by.
         * @minLength 1
         */
        state?: string;
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
