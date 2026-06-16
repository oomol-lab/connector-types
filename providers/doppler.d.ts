import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Clone a Doppler branch config and its secrets. */
    "doppler.clone_config": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The new branch config name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The cloned config. */
        config: {
          /** The config name. */
          name?: string;
          /** The config slug. */
          slug?: string;
          /** The owning project identifier. */
          project?: string;
          /** The owning environment identifier. */
          environment?: string;
          /** Whether this config is the root config. */
          root?: boolean;
          /** Whether this config is locked. */
          locked?: boolean;
          /** The list of config slugs inherited by the current config. */
          inherits?: Array<string>;
          /** The list of config slugs that inherit from the current config. */
          inheritedBy?: Array<string>;
          /** Whether the current config inherits from other configs. */
          inheriting?: boolean;
          /** Whether the current config can be inherited by other configs. */
          inheritable?: boolean;
          /** The creation time. */
          createdAt?: string;
          initialFetchAt?: string | null;
          lastFetchAt?: string | null;
        };
      };
    };
    /** Create a Doppler change request with one or more units. */
    "doppler.create_change_request": {
      input: {
        /**
         * The change request title.
         * @minLength 1
         */
        title: string;
        /** The change request description. */
        description?: string;
        /** The reviewers assigned to this change request. */
        assigned: Array<{
          /** The assignee principal type. */
          type: "WorkplaceUser" | "ServiceAccount";
          /**
           * The assignee slug.
           * @minLength 1
           */
          slug: string;
        }>;
        /** The change request units. */
        units: Array<{
          /** The unit action, such as create or update. */
          action?: string;
          /** The existing unit ID when updating a unit. */
          id?: string;
          /** The target project and config for this unit. */
          target?: Record<string, unknown>;
          /** The desired unit status. */
          status?: string;
          /** Secret updates included in this unit. */
          updates?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The created change request. */
        changeRequest: {
          /** The change request ID. */
          id?: string;
          /** The change request title. */
          title?: string;
          /** The change request description. */
          description?: string;
          /** The change request status. */
          status?: string;
          /** The change request creation time. */
          createdAt?: string;
          /** The creator principal. */
          createdBy?: Record<string, unknown>;
          /** Users or service accounts assigned to review this change request. */
          assigned?: Array<Record<string, unknown>>;
          /** Change request units. */
          units?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a branch config under a Doppler project and environment. */
    "doppler.create_config": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler environment slug.
         * @minLength 1
         */
        environment: string;
        /**
         * The new branch config name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The created config. */
        config: {
          /** The config name. */
          name?: string;
          /** The config slug. */
          slug?: string;
          /** The owning project identifier. */
          project?: string;
          /** The owning environment identifier. */
          environment?: string;
          /** Whether this config is the root config. */
          root?: boolean;
          /** Whether this config is locked. */
          locked?: boolean;
          /** The list of config slugs inherited by the current config. */
          inherits?: Array<string>;
          /** The list of config slugs that inherit from the current config. */
          inheritedBy?: Array<string>;
          /** Whether the current config inherits from other configs. */
          inheriting?: boolean;
          /** Whether the current config can be inherited by other configs. */
          inheritable?: boolean;
          /** The creation time. */
          createdAt?: string;
          initialFetchAt?: string | null;
          lastFetchAt?: string | null;
        };
      };
    };
    /** Create an environment under a Doppler project. */
    "doppler.create_environment": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The environment display name.
         * @minLength 1
         */
        name: string;
        /**
         * The environment slug.
         * @minLength 1
         */
        slug: string;
        /** Whether to enable personal configs for the environment. */
        personalConfigs?: boolean;
      };
      output: {
        /** The created environment. */
        environment: {
          /** The environment ID or slug. */
          id?: string;
          /** The environment name. */
          name?: string;
          /** The owning project identifier. */
          project?: string;
          initialFetchAt?: string | null;
          /** The environment creation time. */
          createdAt?: string;
        };
      };
    };
    /** Create a Doppler project in the current workplace. */
    "doppler.create_project": {
      input: {
        /**
         * The project name.
         * @minLength 1
         */
        name: string;
        /** The project description. */
        description?: string;
      };
      output: {
        /** The created project. */
        project: {
          /** The project ID. */
          id?: string;
          /** The project name. */
          name?: string;
          /** The project slug. */
          slug?: string;
          description?: string | null;
          /** The project creation time. */
          createdAt?: string;
        };
      };
    };
    /** Create a new service token for a specific project and config. */
    "doppler.create_service_token": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The name of the new service token.
         * @minLength 1
         */
        name: string;
        /** The access level of the new service token. */
        access?: "read" | "read/write";
        /** The Unix timestamp string representing the expiration time. */
        expireAt?: string;
      };
      output: {
        /** The created service token. */
        token: {
          /** The stable identifier of the service token. */
          slug?: string;
          /** The service token name. */
          name?: string;
          /** The plaintext service token value. */
          key?: string;
          /** The service token access level. */
          access?: string;
          /** The related project. */
          project?: string;
          /** The related config. */
          config?: string;
          /** The related environment. */
          environment?: string;
          /** The creation time. */
          createdAt?: string;
          expiresAt?: string | null;
        };
      };
    };
    /** Create a Doppler secrets sync for a project config. */
    "doppler.create_sync": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The integration slug to use.
         * @minLength 1
         */
        integration: string;
        /** Integration-specific sync configuration data. */
        data: Record<string, unknown>;
        /** How Doppler should import existing destination secrets. */
        importOption?: "none" | "prefer_doppler" | "prefer_integration";
        /** Whether Doppler should wait for the initial sync before returning. */
        awaitInitialSync?: boolean;
      };
      output: {
        /** The created sync. */
        sync: {
          /** The sync slug. */
          slug?: string;
          /** The integration slug used by the sync. */
          integration?: string;
          /** The related project. */
          project?: string;
          /** The related config. */
          config?: string;
          /** Whether the sync is enabled. */
          enabled?: boolean;
          lastSyncedAt?: string | null;
        };
      };
    };
    /** Delete a Doppler config. */
    "doppler.delete_config": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
      };
      output: {
        /** Whether the deletion succeeded. */
        success: boolean;
      };
    };
    /** Delete an environment from a Doppler project. */
    "doppler.delete_environment": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler environment slug.
         * @minLength 1
         */
        environment: string;
      };
      output: {
        /** Whether the deletion succeeded. */
        success: boolean;
      };
    };
    /** Delete a Doppler project from the current workplace. */
    "doppler.delete_project": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** Whether the deletion succeeded. */
        success: boolean;
      };
    };
    /** Delete a single secret for a specific project and config. */
    "doppler.delete_secret": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The secret name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether the deletion succeeded. */
        success: boolean;
      };
    };
    /** Delete a service token for a specific project and config. */
    "doppler.delete_service_token": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The service token slug to delete.
         * @minLength 1
         */
        slug?: string;
        /**
         * The plaintext service token value to delete.
         * @minLength 1
         */
        token?: string;
      };
      output: {
        /** Whether the deletion succeeded. */
        success: boolean;
      };
    };
    /** Delete a Doppler secrets sync. */
    "doppler.delete_sync": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The sync slug.
         * @minLength 1
         */
        sync: string;
        /** Whether Doppler should delete synced data from the target integration. */
        deleteFromTarget: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Export secrets from a Doppler config in a specific format. */
    "doppler.download_secrets": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project?: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config?: string;
        /** The output format used when exporting secrets. */
        format?: "json" | "dotnet-json" | "env" | "yaml" | "docker" | "env-no-quotes";
        /** A comma-separated list of secret names. */
        secrets?: string;
        /** The name transformation rule used when exporting secret names. */
        nameTransformer?: "camel" | "upper-camel" | "lower-snake" | "tf-var" | "dotnet" | "dotnet-env" | "lower-kebab";
        /** Whether to include dynamic secrets. */
        includeDynamicSecrets?: boolean;
        /** The lease duration for dynamic secrets, in seconds. */
        dynamicSecretsTtlSec?: number;
      };
      output: {
        /** The format of the returned content. */
        format: "json" | "dotnet-json" | "env" | "yaml" | "docker" | "env-no-quotes";
        /** The structured exported secrets. */
        secrets?: Record<string, string>;
        /** The raw content for text-based export formats. */
        content?: string;
      };
    };
    /** Get identity, principal, and workplace summary information for the current Doppler token. */
    "doppler.get_auth_me": {
      input: Record<string, never>;
      output: {
        /** The stable identifier of the current token. */
        slug?: string;
        name?: string | null;
        /** The type of the current token. */
        type: string;
        /** The creation time of the current token. */
        createdAt?: string;
        lastSeenAt?: string | null;
        /** The preview string of the current token. */
        tokenPreview?: string;
        /** The principal information bound to the current token. */
        principal?: Record<string, unknown>;
        /** The workplace information for the current token. */
        workplace?: Record<string, unknown>;
      };
    };
    /** Get the details of a Doppler change request. */
    "doppler.get_change_request": {
      input: {
        /**
         * The change request ID.
         * @minLength 1
         */
        changeRequestId: string;
      };
      output: {
        /** The change request details. */
        changeRequest: {
          /** The change request ID. */
          id?: string;
          /** The change request title. */
          title?: string;
          /** The change request description. */
          description?: string;
          /** The change request status. */
          status?: string;
          /** The change request creation time. */
          createdAt?: string;
          /** The creator principal. */
          createdBy?: Record<string, unknown>;
          /** Users or service accounts assigned to review this change request. */
          assigned?: Array<Record<string, unknown>>;
          /** Change request units. */
          units?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the details of a single Doppler config. */
    "doppler.get_config": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
      };
      output: {
        /** The config details. */
        config: {
          /** The config name. */
          name?: string;
          /** The config slug. */
          slug?: string;
          /** The owning project identifier. */
          project?: string;
          /** The owning environment identifier. */
          environment?: string;
          /** Whether this config is the root config. */
          root?: boolean;
          /** Whether this config is locked. */
          locked?: boolean;
          /** The list of config slugs inherited by the current config. */
          inherits?: Array<string>;
          /** The list of config slugs that inherit from the current config. */
          inheritedBy?: Array<string>;
          /** Whether the current config inherits from other configs. */
          inheriting?: boolean;
          /** Whether the current config can be inherited by other configs. */
          inheritable?: boolean;
          /** The creation time. */
          createdAt?: string;
          initialFetchAt?: string | null;
          lastFetchAt?: string | null;
        };
      };
    };
    /** Get the details of a specific config change log entry. */
    "doppler.get_config_log": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The log ID to query.
         * @minLength 1
         */
        log: string;
      };
      output: {
        /** A single config change log entry. */
        log: {
          /** The log ID. */
          id?: string;
          /** The plain-text log content. */
          text?: string;
          /** The HTML log content. */
          html?: string;
          /** The related config. */
          config?: string;
          /** The related project. */
          project?: string;
          /** The related environment. */
          environment?: string;
          /** Whether this is a rollback log entry. */
          rollback?: boolean;
          /** The log creation time. */
          createdAt?: string;
          /** The user information associated with the log entry. */
          user?: Record<string, unknown>;
        };
      };
    };
    /** Get the details of a single Doppler environment. */
    "doppler.get_environment": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The environment slug.
         * @minLength 1
         */
        environment: string;
      };
      output: {
        /** The environment details. */
        environment: {
          /** The environment ID or slug. */
          id?: string;
          /** The environment name. */
          name?: string;
          /** The owning project identifier. */
          project?: string;
          initialFetchAt?: string | null;
          /** The environment creation time. */
          createdAt?: string;
        };
      };
    };
    /** Get the details of a Doppler integration. */
    "doppler.get_integration": {
      input: {
        /**
         * The integration slug.
         * @minLength 1
         */
        integration: string;
      };
      output: {
        /** The integration details. */
        integration: {
          /** The integration slug. */
          slug?: string;
          /** The integration name. */
          name?: string;
          /** The integration type. */
          type?: string;
          /** The integration kind. */
          kind?: string;
          /** Whether the integration is enabled. */
          enabled?: boolean;
          /** Syncs attached to this integration. */
          syncs?: Array<{
            /** The sync slug. */
            slug?: string;
            /** The integration slug used by the sync. */
            integration?: string;
            /** The related project. */
            project?: string;
            /** The related config. */
            config?: string;
            /** Whether the sync is enabled. */
            enabled?: boolean;
            lastSyncedAt?: string | null;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the details of a single Doppler project. */
    "doppler.get_project": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** The project details. */
        project: {
          /** The project ID. */
          id?: string;
          /** The project name. */
          name?: string;
          /** The project slug. */
          slug?: string;
          description?: string | null;
          /** The project creation time. */
          createdAt?: string;
        };
      };
    };
    /** Get the value and metadata of a single secret for a specific project and config. */
    "doppler.get_secret": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The secret name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The secret name. */
        name: string;
        /** The secret value object. */
        value: {
          /** The raw secret value. */
          raw?: string;
          /** The computed secret value. */
          computed?: string;
          note?: string | null;
          rawVisibility?: string | null;
          computedVisibility?: string | null;
          rawValueType?: Record<string, unknown> | null;
          computedValueType?: Record<string, unknown> | null;
        };
      };
    };
    /** Get the details of a Doppler secrets sync. */
    "doppler.get_sync": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The sync slug.
         * @minLength 1
         */
        sync: string;
      };
      output: {
        /** The sync details. */
        sync: {
          /** The sync slug. */
          slug?: string;
          /** The integration slug used by the sync. */
          integration?: string;
          /** The related project. */
          project?: string;
          /** The related config. */
          config?: string;
          /** Whether the sync is enabled. */
          enabled?: boolean;
          lastSyncedAt?: string | null;
        };
      };
    };
    /** Issue a short-lived lease for a Doppler dynamic secret. */
    "doppler.issue_dynamic_secret_lease": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The dynamic secret name.
         * @minLength 1
         */
        dynamicSecret: string;
        /**
         * The lease duration in seconds.
         * @minimum 1
         */
        ttlSec: number;
      };
      output: {
        /** Whether Doppler issued the lease. */
        success?: boolean;
        /** The issued lease ID. */
        id?: string;
        /** When the lease expires. */
        expiresAt?: string;
        /** The dynamic secret value object. */
        value?: Record<string, unknown>;
      };
    };
    /** List Doppler workplace change requests. */
    "doppler.list_change_requests": {
      input: {
        /**
         * The page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        perPage?: number;
        /** Statuses to filter by. */
        status?: Array<string>;
        /** A title filter. */
        title?: string;
      };
      output: {
        /** The change requests list. */
        changeRequests: Array<{
          /** The change request ID. */
          id?: string;
          /** The change request title. */
          title?: string;
          /** The change request description. */
          description?: string;
          /** The change request status. */
          status?: string;
          /** The change request creation time. */
          createdAt?: string;
          /** The creator principal. */
          createdBy?: Record<string, unknown>;
          /** Users or service accounts assigned to review this change request. */
          assigned?: Array<Record<string, unknown>>;
          /** Change request units. */
          units?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List config change logs for a specific project and config. */
    "doppler.list_config_logs": {
      input: {
        /**
         * The page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        perPage?: number;
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
      };
      output: {
        /** The current page number. */
        page?: number;
        /** The list of config change logs. */
        logs: Array<{
          /** The log ID. */
          id?: string;
          /** The plain-text log content. */
          text?: string;
          /** The HTML log content. */
          html?: string;
          /** The related config. */
          config?: string;
          /** The related project. */
          project?: string;
          /** The related environment. */
          environment?: string;
          /** Whether this is a rollback log entry. */
          rollback?: boolean;
          /** The log creation time. */
          createdAt?: string;
          /** The user information associated with the log entry. */
          user?: Record<string, unknown>;
        }>;
      };
    };
    /** List configs under a specific Doppler project. */
    "doppler.list_configs": {
      input: {
        /**
         * The page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        perPage?: number;
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /** Filter configs by environment. */
        environment?: string;
      };
      output: {
        /** The current page number. */
        page?: number;
        /** The config list. */
        configs: Array<{
          /** The config name. */
          name?: string;
          /** The config slug. */
          slug?: string;
          /** The owning project identifier. */
          project?: string;
          /** The owning environment identifier. */
          environment?: string;
          /** Whether this config is the root config. */
          root?: boolean;
          /** Whether this config is locked. */
          locked?: boolean;
          /** The list of config slugs inherited by the current config. */
          inherits?: Array<string>;
          /** The list of config slugs that inherit from the current config. */
          inheritedBy?: Array<string>;
          /** Whether the current config inherits from other configs. */
          inheriting?: boolean;
          /** Whether the current config can be inherited by other configs. */
          inheritable?: boolean;
          /** The creation time. */
          createdAt?: string;
          initialFetchAt?: string | null;
          lastFetchAt?: string | null;
        }>;
      };
    };
    /** List environments under a Doppler project. */
    "doppler.list_environments": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
      };
      output: {
        /** The current page number. */
        page?: number;
        /** The environment list. */
        environments: Array<{
          /** The environment ID or slug. */
          id?: string;
          /** The environment name. */
          name?: string;
          /** The owning project identifier. */
          project?: string;
          initialFetchAt?: string | null;
          /** The environment creation time. */
          createdAt?: string;
        }>;
      };
    };
    /** List Doppler integrations available in the workplace. */
    "doppler.list_integrations": {
      input: Record<string, never>;
      output: {
        /** Whether Doppler returned the integrations. */
        success?: boolean;
        /** The integrations list. */
        integrations: Array<{
          /** The integration slug. */
          slug?: string;
          /** The integration name. */
          name?: string;
          /** The integration type. */
          type?: string;
          /** The integration kind. */
          kind?: string;
          /** Whether the integration is enabled. */
          enabled?: boolean;
          /** Syncs attached to this integration. */
          syncs?: Array<{
            /** The sync slug. */
            slug?: string;
            /** The integration slug used by the sync. */
            integration?: string;
            /** The related project. */
            project?: string;
            /** The related config. */
            config?: string;
            /** Whether the sync is enabled. */
            enabled?: boolean;
            lastSyncedAt?: string | null;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the projects visible in the current Doppler workspace. */
    "doppler.list_projects": {
      input: {
        /**
         * The page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to return per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: {
        /** The current page number. */
        page?: number;
        /** The project list. */
        projects: Array<{
          /** The project ID. */
          id?: string;
          /** The project name. */
          name?: string;
          /** The project slug. */
          slug?: string;
          description?: string | null;
          /** The project creation time. */
          createdAt?: string;
        }>;
      };
    };
    /** List only the secret names for a Doppler project and config. */
    "doppler.list_secret_names": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /** Whether to include managed secrets. */
        includeManagedSecrets?: boolean;
        /** Whether to include dynamic secrets. */
        includeDynamicSecrets?: boolean;
      };
      output: {
        /** The secret names. */
        names: Array<string>;
      };
    };
    /** List all secrets and their metadata for a specific project and config. */
    "doppler.list_secrets": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /** Whether to include managed secrets. */
        includeManagedSecrets?: boolean;
        /** Whether to include dynamic secrets. */
        includeDynamicSecrets?: boolean;
        /** The lease duration for dynamic secrets, in seconds. */
        dynamicSecretsTtlSec?: number;
      };
      output: {
        /** A secrets map keyed by secret name. */
        secrets: Record<string, {
            /** The raw secret value. */
            raw?: string;
            /** The computed secret value. */
            computed?: string;
            note?: string | null;
            rawVisibility?: string | null;
            computedVisibility?: string | null;
            rawValueType?: Record<string, unknown> | null;
            computedValueType?: Record<string, unknown> | null;
          }>;
      };
    };
    /** List service tokens for a specific project and config. */
    "doppler.list_service_tokens": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
      };
      output: {
        /** The service token list. */
        tokens: Array<{
          /** The stable identifier of the service token. */
          slug?: string;
          /** The service token name. */
          name?: string;
          /** The plaintext service token value. */
          key?: string;
          /** The service token access level. */
          access?: string;
          /** The related project. */
          project?: string;
          /** The related config. */
          config?: string;
          /** The related environment. */
          environment?: string;
          /** The creation time. */
          createdAt?: string;
          expiresAt?: string | null;
        }>;
      };
    };
    /** Submit an approving review for one Doppler change request unit. */
    "doppler.review_change_request_unit": {
      input: {
        /**
         * The change request ID.
         * @minLength 1
         */
        changeRequestId: string;
        /**
         * The change request unit ID.
         * @minLength 1
         */
        unitId: string;
      };
      output: {
        /** The reviewed change request unit. */
        unit: Record<string, unknown>;
      };
    };
    /** Revoke a lease issued for a Doppler dynamic secret. */
    "doppler.revoke_dynamic_secret_lease": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The dynamic secret name.
         * @minLength 1
         */
        dynamicSecret: string;
        /**
         * The lease slug to revoke.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** Whether the lease was revoked. */
        success: boolean;
      };
    };
    /** Update whether a Doppler config can be inherited by other configs. */
    "doppler.set_config_inheritable": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /** Whether the config should be inheritable. */
        inheritable: boolean;
      };
      output: {
        /** Whether Doppler updated the inheritability setting. */
        success: boolean;
        /** The updated config. */
        config: {
          /** The config name. */
          name?: string;
          /** The config slug. */
          slug?: string;
          /** The owning project identifier. */
          project?: string;
          /** The owning environment identifier. */
          environment?: string;
          /** Whether this config is the root config. */
          root?: boolean;
          /** Whether this config is locked. */
          locked?: boolean;
          /** The list of config slugs inherited by the current config. */
          inherits?: Array<string>;
          /** The list of config slugs that inherit from the current config. */
          inheritedBy?: Array<string>;
          /** Whether the current config inherits from other configs. */
          inheriting?: boolean;
          /** Whether the current config can be inherited by other configs. */
          inheritable?: boolean;
          /** The creation time. */
          createdAt?: string;
          initialFetchAt?: string | null;
          lastFetchAt?: string | null;
        };
      };
    };
    /** Update a Doppler change request's metadata or units. */
    "doppler.update_change_request": {
      input: {
        /**
         * The change request ID.
         * @minLength 1
         */
        changeRequestId: string;
        /** The change request title. */
        title?: string;
        /** The change request description. */
        description?: string;
        /** The reviewers assigned to this change request. */
        assigned?: Array<{
          /** The assignee principal type. */
          type: "WorkplaceUser" | "ServiceAccount";
          /**
           * The assignee slug.
           * @minLength 1
           */
          slug: string;
        }>;
        /** The change request units. */
        units?: Array<{
          /** The unit action, such as create or update. */
          action?: string;
          /** The existing unit ID when updating a unit. */
          id?: string;
          /** The target project and config for this unit. */
          target?: Record<string, unknown>;
          /** The desired unit status. */
          status?: string;
          /** Secret updates included in this unit. */
          updates?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The updated change request. */
        changeRequest: {
          /** The change request ID. */
          id?: string;
          /** The change request title. */
          title?: string;
          /** The change request description. */
          description?: string;
          /** The change request status. */
          status?: string;
          /** The change request creation time. */
          createdAt?: string;
          /** The creator principal. */
          createdBy?: Record<string, unknown>;
          /** Users or service accounts assigned to review this change request. */
          assigned?: Array<Record<string, unknown>>;
          /** Change request units. */
          units?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Replace the reviewers assigned to a Doppler change request. */
    "doppler.update_change_request_assignees": {
      input: {
        /**
         * The change request ID.
         * @minLength 1
         */
        changeRequestId: string;
        /** The reviewers assigned to this change request. */
        assigned: Array<{
          /** The assignee principal type. */
          type: "WorkplaceUser" | "ServiceAccount";
          /**
           * The assignee slug.
           * @minLength 1
           */
          slug: string;
        }>;
      };
      output: {
        /** The updated assignee list. */
        assigned: Array<Record<string, unknown>>;
      };
    };
    /** Update the status of one Doppler change request unit. */
    "doppler.update_change_request_unit_status": {
      input: {
        /**
         * The change request ID.
         * @minLength 1
         */
        changeRequestId: string;
        /**
         * The change request unit ID.
         * @minLength 1
         */
        unitId: string;
        /** The new unit status. */
        status: "draft" | "open" | "canceled";
      };
      output: {
        /** The updated change request unit. */
        unit: Record<string, unknown>;
      };
    };
    /** Rename a Doppler config. */
    "doppler.update_config": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The new config name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The updated config. */
        config: {
          /** The config name. */
          name?: string;
          /** The config slug. */
          slug?: string;
          /** The owning project identifier. */
          project?: string;
          /** The owning environment identifier. */
          environment?: string;
          /** Whether this config is the root config. */
          root?: boolean;
          /** Whether this config is locked. */
          locked?: boolean;
          /** The list of config slugs inherited by the current config. */
          inherits?: Array<string>;
          /** The list of config slugs that inherit from the current config. */
          inheritedBy?: Array<string>;
          /** Whether the current config inherits from other configs. */
          inheriting?: boolean;
          /** Whether the current config can be inherited by other configs. */
          inheritable?: boolean;
          /** The creation time. */
          createdAt?: string;
          initialFetchAt?: string | null;
          lastFetchAt?: string | null;
        };
      };
    };
    /** Rename a Doppler environment or update personal config settings. */
    "doppler.update_environment": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler environment slug.
         * @minLength 1
         */
        environment: string;
        /**
         * The desired environment display name.
         * @minLength 1
         */
        name?: string;
        /**
         * The desired environment slug.
         * @minLength 1
         */
        slug?: string;
        /** Whether to enable personal configs for the environment. */
        personalConfigs?: boolean;
      };
      output: {
        /** The updated environment. */
        environment: {
          /** The environment ID or slug. */
          id?: string;
          /** The environment name. */
          name?: string;
          /** The owning project identifier. */
          project?: string;
          initialFetchAt?: string | null;
          /** The environment creation time. */
          createdAt?: string;
        };
      };
    };
    /** Update a Doppler project's name or description. */
    "doppler.update_project": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The new project name.
         * @minLength 1
         */
        name: string;
        /** The new project description. */
        description?: string;
      };
      output: {
        /** The updated project. */
        project: {
          /** The project ID. */
          id?: string;
          /** The project name. */
          name?: string;
          /** The project slug. */
          slug?: string;
          description?: string | null;
          /** The project creation time. */
          createdAt?: string;
        };
      };
    };
    /** Update the note for a specific secret. */
    "doppler.update_secret_note": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /**
         * The secret name whose note should be updated.
         * @minLength 1
         */
        secret: string;
        /** The note content to write. */
        note: string;
      };
      output: {
        /** The secret name whose note was updated. */
        secret: string;
        /** The updated note content. */
        note: string;
      };
    };
    /** Create or update secrets in bulk for a specific project and config. */
    "doppler.update_secrets": {
      input: {
        /**
         * The Doppler project identifier.
         * @minLength 1
         */
        project: string;
        /**
         * The Doppler config name.
         * @minLength 1
         */
        config: string;
        /** An object keyed by secret name with string values. */
        secrets: Record<string, string>;
      };
      output: {
        /** The updated secrets map. */
        secrets: Record<string, {
            /** The raw secret value. */
            raw?: string;
            /** The computed secret value. */
            computed?: string;
            note?: string | null;
            rawVisibility?: string | null;
            computedVisibility?: string | null;
            rawValueType?: Record<string, unknown> | null;
            computedValueType?: Record<string, unknown> | null;
          }>;
      };
    };
  }
}
