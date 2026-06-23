import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a specific Laravel Cloud application. */
    "laravel_cloud.get_application": {
      input: {
        /**
         * The Laravel Cloud application identifier.
         * @minLength 1
         */
        applicationId: string;
        /**
         * Related application resources to include.
         * @minItems 1
         */
        include?: Array<"organization" | "environments" | "defaultEnvironment">;
      };
      output: {
        /** A Laravel Cloud application. */
        application: {
          /** The application identifier. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The application name. */
          name: string | null;
          /** The application slug. */
          slug: string | null;
          /** The application region identifier. */
          region: string | null;
          /** The Slack channel configured for the application. */
          slackChannel: string | null;
          /** The application avatar URL. */
          avatarUrl: string | null;
          /** The timestamp when the application was created. */
          createdAt: string | null;
          /** The repository summary embedded in the application attributes. */
          repository: Record<string, unknown> | null;
          /** The relationships object returned by Laravel Cloud. */
          relationships: Record<string, unknown> | null;
          /** The raw application resource returned by Laravel Cloud. */
          raw: Record<string, unknown>;
        };
        /** The included JSON:API resources returned by Laravel Cloud. */
        included: Array<Record<string, unknown>> | null;
      };
    };
    /** Get a specific Laravel Cloud deployment. */
    "laravel_cloud.get_deployment": {
      input: {
        /**
         * The Laravel Cloud deployment identifier.
         * @minLength 1
         */
        deploymentId: string;
        /**
         * Related deployment resources to include.
         * @minItems 1
         */
        include?: Array<"environment" | "initiator">;
      };
      output: {
        /** A Laravel Cloud deployment. */
        deployment: {
          /** The deployment identifier. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The deployment status. */
          status: string | null;
          /** The deployed branch name. */
          branchName: string | null;
          /** The deployed commit hash. */
          commitHash: string | null;
          /** The deployed commit message. */
          commitMessage: string | null;
          /** The deployed commit author. */
          commitAuthor: string | null;
          /** The deployment failure reason when available. */
          failureReason: string | null;
          /** The PHP major version used for the deployment. */
          phpMajorVersion: string | null;
          /** The build command used for the deployment. */
          buildCommand: string | null;
          /** The Node.js version used for the deployment. */
          nodeVersion: string | null;
          /** Whether the deployment uses Laravel Octane. */
          usesOctane: boolean | null;
          /** The timestamp when the deployment started. */
          startedAt: string | null;
          /** The timestamp when the deployment finished. */
          finishedAt: string | null;
          /** The relationships object returned by Laravel Cloud. */
          relationships: Record<string, unknown> | null;
          /** The links object returned by Laravel Cloud. */
          links: Record<string, unknown> | null;
          /** The raw deployment resource returned by Laravel Cloud. */
          raw: Record<string, unknown>;
        };
        /** The included JSON:API resources returned by Laravel Cloud. */
        included: Array<Record<string, unknown>> | null;
      };
    };
    /** Get a specific Laravel Cloud environment. */
    "laravel_cloud.get_environment": {
      input: {
        /**
         * The Laravel Cloud environment identifier.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Related environment resources to include.
         * @minItems 1
         */
        include?: Array<"application" | "branch" | "deployments" | "currentDeployment" | "primaryDomain" | "instances" | "database" | "cache" | "buckets" | "websocketApplication">;
      };
      output: {
        /** A Laravel Cloud environment. */
        environment: {
          /** The environment identifier. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The environment name. */
          name: string | null;
          /** The environment slug. */
          slug: string | null;
          /** The environment status. */
          status: string | null;
          /** The environment vanity domain. */
          vanityDomain: string | null;
          /** The configured PHP major version. */
          phpMajorVersion: string | null;
          /** The configured Node.js version. */
          nodeVersion: string | null;
          /** The build command when configured. */
          buildCommand: string | null;
          /** The deploy command when configured. */
          deployCommand: string | null;
          /** Whether the environment uses Laravel Octane. */
          usesOctane: boolean | null;
          /** Whether push-to-deploy is enabled for the environment. */
          usesPushToDeploy: boolean | null;
          /** Whether deploy hooks are enabled for the environment. */
          usesDeployHook: boolean | null;
          /** The timestamp when the environment was created. */
          createdAt: string | null;
          /** The relationships object returned by Laravel Cloud. */
          relationships: Record<string, unknown> | null;
          /** The links object returned by Laravel Cloud. */
          links: Record<string, unknown> | null;
          /** The raw environment resource returned by Laravel Cloud. */
          raw: Record<string, unknown>;
        };
        /** The included JSON:API resources returned by Laravel Cloud. */
        included: Array<Record<string, unknown>> | null;
      };
    };
    /** Get the Laravel Cloud organization associated with the API token. */
    "laravel_cloud.get_organization": {
      input: Record<string, never>;
      output: {
        /** A Laravel Cloud organization. */
        organization: {
          /** The organization identifier. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The organization name. */
          name: string | null;
          /** The organization slug. */
          slug: string | null;
          /** The raw organization resource returned by Laravel Cloud. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Laravel Cloud applications for the authenticated organization. */
    "laravel_cloud.list_applications": {
      input: {
        /**
         * Filter applications by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter applications by region identifier.
         * @minLength 1
         */
        region?: string;
        /**
         * Filter applications by slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * Related application resources to include.
         * @minItems 1
         */
        include?: Array<"organization" | "environments" | "defaultEnvironment">;
      };
      output: {
        /** The applications returned by Laravel Cloud. */
        applications: Array<{
          /** The application identifier. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The application name. */
          name: string | null;
          /** The application slug. */
          slug: string | null;
          /** The application region identifier. */
          region: string | null;
          /** The Slack channel configured for the application. */
          slackChannel: string | null;
          /** The application avatar URL. */
          avatarUrl: string | null;
          /** The timestamp when the application was created. */
          createdAt: string | null;
          /** The repository summary embedded in the application attributes. */
          repository: Record<string, unknown> | null;
          /** The relationships object returned by Laravel Cloud. */
          relationships: Record<string, unknown> | null;
          /** The raw application resource returned by Laravel Cloud. */
          raw: Record<string, unknown>;
        }>;
        /** The links object returned by Laravel Cloud. */
        links: Record<string, unknown> | null;
        /** The pagination metadata returned by Laravel Cloud for list endpoints. */
        meta: Record<string, unknown> | null;
        /** The included JSON:API resources returned by Laravel Cloud. */
        included: Array<Record<string, unknown>> | null;
      };
    };
    /** List Laravel Cloud deployments for an environment. */
    "laravel_cloud.list_deployments": {
      input: {
        /**
         * The Laravel Cloud environment identifier.
         * @minLength 1
         */
        environmentId: string;
        /**
         * Filter deployments by status.
         * @minLength 1
         */
        status?: string;
        /**
         * Filter deployments by branch name.
         * @minLength 1
         */
        branchName?: string;
        /**
         * Filter deployments by commit hash.
         * @minLength 1
         */
        commitHash?: string;
        /**
         * Related deployment resources to include.
         * @minItems 1
         */
        include?: Array<"environment" | "initiator">;
      };
      output: {
        /** The deployments returned by Laravel Cloud. */
        deployments: Array<{
          /** The deployment identifier. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The deployment status. */
          status: string | null;
          /** The deployed branch name. */
          branchName: string | null;
          /** The deployed commit hash. */
          commitHash: string | null;
          /** The deployed commit message. */
          commitMessage: string | null;
          /** The deployed commit author. */
          commitAuthor: string | null;
          /** The deployment failure reason when available. */
          failureReason: string | null;
          /** The PHP major version used for the deployment. */
          phpMajorVersion: string | null;
          /** The build command used for the deployment. */
          buildCommand: string | null;
          /** The Node.js version used for the deployment. */
          nodeVersion: string | null;
          /** Whether the deployment uses Laravel Octane. */
          usesOctane: boolean | null;
          /** The timestamp when the deployment started. */
          startedAt: string | null;
          /** The timestamp when the deployment finished. */
          finishedAt: string | null;
          /** The relationships object returned by Laravel Cloud. */
          relationships: Record<string, unknown> | null;
          /** The links object returned by Laravel Cloud. */
          links: Record<string, unknown> | null;
          /** The raw deployment resource returned by Laravel Cloud. */
          raw: Record<string, unknown>;
        }>;
        /** The links object returned by Laravel Cloud. */
        links: Record<string, unknown> | null;
        /** The pagination metadata returned by Laravel Cloud for list endpoints. */
        meta: Record<string, unknown> | null;
        /** The included JSON:API resources returned by Laravel Cloud. */
        included: Array<Record<string, unknown>> | null;
      };
    };
    /** List Laravel Cloud environments for an application. */
    "laravel_cloud.list_environments": {
      input: {
        /**
         * The Laravel Cloud application identifier.
         * @minLength 1
         */
        applicationId: string;
        /**
         * Filter environments by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter environments by status.
         * @minLength 1
         */
        status?: string;
        /**
         * Filter environments by slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * Related environment resources to include.
         * @minItems 1
         */
        include?: Array<"application" | "branch" | "deployments" | "currentDeployment" | "primaryDomain" | "instances" | "database" | "cache" | "buckets" | "websocketApplication">;
      };
      output: {
        /** The environments returned by Laravel Cloud. */
        environments: Array<{
          /** The environment identifier. */
          id: string;
          /** The JSON:API resource type. */
          type: string;
          /** The environment name. */
          name: string | null;
          /** The environment slug. */
          slug: string | null;
          /** The environment status. */
          status: string | null;
          /** The environment vanity domain. */
          vanityDomain: string | null;
          /** The configured PHP major version. */
          phpMajorVersion: string | null;
          /** The configured Node.js version. */
          nodeVersion: string | null;
          /** The build command when configured. */
          buildCommand: string | null;
          /** The deploy command when configured. */
          deployCommand: string | null;
          /** Whether the environment uses Laravel Octane. */
          usesOctane: boolean | null;
          /** Whether push-to-deploy is enabled for the environment. */
          usesPushToDeploy: boolean | null;
          /** Whether deploy hooks are enabled for the environment. */
          usesDeployHook: boolean | null;
          /** The timestamp when the environment was created. */
          createdAt: string | null;
          /** The relationships object returned by Laravel Cloud. */
          relationships: Record<string, unknown> | null;
          /** The links object returned by Laravel Cloud. */
          links: Record<string, unknown> | null;
          /** The raw environment resource returned by Laravel Cloud. */
          raw: Record<string, unknown>;
        }>;
        /** The links object returned by Laravel Cloud. */
        links: Record<string, unknown> | null;
        /** The pagination metadata returned by Laravel Cloud for list endpoints. */
        meta: Record<string, unknown> | null;
        /** The included JSON:API resources returned by Laravel Cloud. */
        included: Array<Record<string, unknown>> | null;
      };
    };
    /** List cloud regions currently available in Laravel Cloud. */
    "laravel_cloud.list_regions": {
      input: Record<string, never>;
      output: {
        /** The regions returned by Laravel Cloud. */
        regions: Array<{
          /** The region identifier. */
          region: string;
          /** The human-readable region label. */
          label: string;
          /** The region flag returned by Laravel Cloud. */
          flag: string;
          /** The raw region object returned by Laravel Cloud. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
