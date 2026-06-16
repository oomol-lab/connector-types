import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List artifacts produced by one AppVeyor build job. */
    "appveyor.get_build_artifacts": {
      input: {
        /**
         * The AppVeyor account name used to scope requests for user-level API keys.
         * @minLength 1
         */
        accountName?: string;
        /**
         * The AppVeyor build job ID whose artifacts should be listed.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /** The AppVeyor build artifacts returned by the request. */
        artifacts: Array<{
          /** The artifact file name. */
          fileName?: string;
          /** The artifact display name when AppVeyor returns one. */
          name?: string;
          /** The AppVeyor artifact type. */
          type?: string;
          /** The artifact size in bytes when AppVeyor returns it. */
          size?: number;
          /** The timestamp when the artifact was created. */
          created?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of AppVeyor artifacts returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List AppVeyor deployment environments accessible to the connected API token. */
    "appveyor.get_environments": {
      input: {
        /**
         * The AppVeyor account name used to scope requests for user-level API keys.
         * @minLength 1
         */
        accountName?: string;
      };
      output: {
        /** The AppVeyor deployment environments returned by the request. */
        environments: Array<{
          /** The numeric AppVeyor deployment environment ID. */
          deploymentEnvironmentId?: number;
          /** The AppVeyor deployment environment name. */
          name?: string;
          /** The AppVeyor deployment provider type. */
          provider?: string;
          /** The timestamp when the environment was created. */
          created?: string;
          /** The timestamp when the environment was last updated. */
          updated?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of AppVeyor environments returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List AppVeyor projects accessible to the connected API token. */
    "appveyor.get_projects": {
      input: {
        /**
         * The AppVeyor account name used to scope requests for user-level API keys.
         * @minLength 1
         */
        accountName?: string;
      };
      output: {
        /** The AppVeyor projects returned by the request. */
        projects: Array<{
          /** The numeric AppVeyor project ID. */
          projectId?: number;
          /** The numeric AppVeyor account ID that owns the project. */
          accountId?: number;
          /** The AppVeyor account name that owns the project. */
          accountName?: string;
          /** The AppVeyor project display name. */
          name?: string;
          /** The AppVeyor project slug. */
          slug?: string;
          /** The source repository provider type configured for the project. */
          repositoryType?: string;
          /** The source control management type configured for the project. */
          repositoryScm?: string;
          /** The repository name connected to the project. */
          repositoryName?: string;
          /** Whether the connected repository is private. */
          isPrivate?: boolean;
          /** The timestamp when the project was created. */
          created?: string;
          /** The timestamp when the project was last updated. */
          updated?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of AppVeyor projects returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Retrieve one AppVeyor team role by ID. */
    "appveyor.get_role": {
      input: {
        /**
         * The AppVeyor account name used to scope requests for user-level API keys.
         * @minLength 1
         */
        accountName?: string;
        /**
         * The AppVeyor role ID to retrieve.
         * @exclusiveMinimum 0
         */
        roleId: number;
      };
      output: {
        /** An AppVeyor role returned by the team API. */
        role: {
          /**
           * The AppVeyor role ID to retrieve.
           * @exclusiveMinimum 0
           */
          roleId?: number;
          /** The AppVeyor role name. */
          name?: string;
          /** Whether the role is an AppVeyor system role. */
          isSystem?: boolean;
          /** The timestamp when the role was created. */
          created?: string;
          /** The timestamp when the role was last updated. */
          updated?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List AppVeyor team roles accessible to the connected API token. */
    "appveyor.get_roles": {
      input: {
        /**
         * The AppVeyor account name used to scope requests for user-level API keys.
         * @minLength 1
         */
        accountName?: string;
      };
      output: {
        /** The AppVeyor roles returned by the request. */
        roles: Array<{
          /**
           * The AppVeyor role ID to retrieve.
           * @exclusiveMinimum 0
           */
          roleId?: number;
          /** The AppVeyor role name. */
          name?: string;
          /** Whether the role is an AppVeyor system role. */
          isSystem?: boolean;
          /** The timestamp when the role was created. */
          created?: string;
          /** The timestamp when the role was last updated. */
          updated?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of AppVeyor roles returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** List AppVeyor team users accessible to the connected API token. */
    "appveyor.get_users": {
      input: {
        /**
         * The AppVeyor account name used to scope requests for user-level API keys.
         * @minLength 1
         */
        accountName?: string;
      };
      output: {
        /** The AppVeyor users returned by the request. */
        users: Array<{
          /** The numeric AppVeyor account ID associated with the user. */
          accountId?: number;
          /** The AppVeyor account name associated with the user. */
          accountName?: string;
          /** Whether the user owns the AppVeyor account. */
          isOwner?: boolean;
          /** Whether the user is an AppVeyor collaborator. */
          isCollaborator?: boolean;
          /** The numeric AppVeyor user ID. */
          userId?: number;
          /** The AppVeyor user's full name. */
          fullName?: string;
          /** The AppVeyor user's email address. */
          email?: string;
          /** The numeric AppVeyor role ID assigned to the user. */
          roleId?: number;
          /** The AppVeyor role name assigned to the user. */
          roleName?: string;
          /** The timestamp when the user was added. */
          created?: string;
          /** The timestamp when the user was last updated. */
          updated?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of AppVeyor users returned by the request.
         * @minimum 0
         */
        count: number;
      };
    };
  }
}
