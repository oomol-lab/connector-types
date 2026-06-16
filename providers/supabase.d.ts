import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a publishable or secret API key for a Supabase project. */
    "supabase.create_project_api_key": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * The API key name. Use lowercase letters, numbers, and underscores; it must start with a lowercase letter or underscore.
         * @minLength 4
         * @maxLength 64
         * @pattern ^[a-z_][a-z0-9_]+$
         */
        name: string;
        /** The type of API key to create. */
        type: "publishable" | "secret";
        /**
         * The optional description for the API key.
         * @minLength 1
         */
        description?: string;
        /** Whether to reveal the full API key value in the response. */
        reveal?: boolean;
        /** The JWT template for secret API keys. */
        secretJwtTemplate?: Record<string, unknown>;
      };
      output: {
        /** A Supabase API key record. */
        apiKey: {
          /** The unique identifier of the API key. */
          id: string;
          /** The name of the API key. */
          name: string;
          /** The type of the API key. */
          type: "legacy" | "publishable" | "secret" | "unknown";
          /** The prefix portion of the API key. */
          prefix: string;
          /** The hash of the API key. */
          hash: string;
          /** The description of the API key. */
          description?: string | null;
          /** The full API key value when reveal is true and Supabase returns it. */
          apiKey?: string;
          /** The timestamp when the API key was created. */
          insertedAt?: string;
          /** The timestamp when the API key was last updated. */
          updatedAt?: string;
          /** The JWT template for secret API keys. */
          secretJwtTemplate?: Record<string, unknown> | null;
        };
      };
    };
    /** Delete a Supabase project API key. */
    "supabase.delete_project_api_key": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * The unique identifier of the project API key.
         * @minLength 1
         */
        apiKeyId: string;
        /** Whether Supabase should reveal key data in the delete response. */
        reveal?: boolean;
        /** Whether the key is being deleted because it was compromised. */
        wasCompromised?: boolean;
        /**
         * Optional deletion reason sent to Supabase.
         * @minLength 1
         */
        reason?: string;
      };
      output: {
        /** A Supabase API key record. */
        apiKey: {
          /** The unique identifier of the API key. */
          id: string;
          /** The name of the API key. */
          name: string;
          /** The type of the API key. */
          type: "legacy" | "publishable" | "secret" | "unknown";
          /** The prefix portion of the API key. */
          prefix: string;
          /** The hash of the API key. */
          hash: string;
          /** The description of the API key. */
          description?: string | null;
          /** The full API key value when reveal is true and Supabase returns it. */
          apiKey?: string;
          /** The timestamp when the API key was created. */
          insertedAt?: string;
          /** The timestamp when the API key was last updated. */
          updatedAt?: string;
          /** The JWT template for secret API keys. */
          secretJwtTemplate?: Record<string, unknown> | null;
        };
      };
    };
    /** Bulk delete secrets from a Supabase project. */
    "supabase.delete_project_secrets": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * The names of secrets to delete.
         * @minItems 1
         */
        names: Array<string>;
      };
      output: {
        /** Whether Supabase accepted the secret delete request. */
        success: boolean;
      };
    };
    /** Generate TypeScript database types for a Supabase project. */
    "supabase.generate_typescript_types": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * Database schemas to include, such as public or auth.
         * @minItems 1
         */
        includedSchemas?: Array<string>;
      };
      output: {
        /** The generated TypeScript type definitions. */
        typescript: string;
      };
    };
    /** Get metadata for one Supabase Edge Function by slug. */
    "supabase.get_edge_function": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * The Edge Function slug.
         * @minLength 1
         */
        functionSlug: string;
      };
      output: {
        /** A Supabase Edge Function record. */
        function: Record<string, unknown>;
      };
    };
    /** Get details for a Supabase organization by slug. */
    "supabase.get_organization": {
      input: {
        /**
         * The Supabase organization slug.
         * @minLength 1
         */
        organizationSlug: string;
      };
      output: {
        /** The Supabase organization detail payload. */
        organization: {
          /** The unique identifier of the organization. */
          id?: string;
          /** The name of the organization. */
          name?: string;
          /** The subscription plan of the organization. */
          plan?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get detailed metadata for a Supabase project by project ref. */
    "supabase.get_project": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
      };
      output: {
        /** A Supabase project detail record. */
        project: {
          /** The unique identifier of the project. */
          id: string;
          /** The project reference identifier. */
          ref: string;
          /** The organization ID this project belongs to. */
          organizationId: string;
          /** The organization slug. */
          organizationSlug: string;
          /** The name of the project. */
          name: string;
          /** The cloud region of the project. */
          region: string;
          /** The current status of the Supabase project. */
          status: "ACTIVE_HEALTHY" | "ACTIVE_UNHEALTHY" | "COMING_UP" | "GOING_DOWN" | "INACTIVE" | "INIT_FAILED" | "REMOVED" | "RESTARTING" | "UNKNOWN" | "UPGRADING" | "PAUSING" | "RESTORING" | "RESTORE_FAILED" | "PAUSE_FAILED" | "RESIZING";
          /** The timestamp when the project was created. */
          createdAt: string;
          /** A Supabase project database configuration. */
          database: {
            /** The database host address. */
            host: string;
            /** The database version. */
            version: string;
            /** The Postgres engine identifier. */
            postgresEngine?: string | null;
            /** The release channel of the database. */
            releaseChannel?: string | null;
          };
        };
      };
    };
    /** Get one API key record from a Supabase project. */
    "supabase.get_project_api_key": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * The unique identifier of the project API key.
         * @minLength 1
         */
        apiKeyId: string;
        /** Whether to reveal the full API key value. */
        reveal?: boolean;
      };
      output: {
        /** A Supabase API key record. */
        apiKey: {
          /** The unique identifier of the API key. */
          id: string;
          /** The name of the API key. */
          name: string;
          /** The type of the API key. */
          type: "legacy" | "publishable" | "secret" | "unknown";
          /** The prefix portion of the API key. */
          prefix: string;
          /** The hash of the API key. */
          hash: string;
          /** The description of the API key. */
          description?: string | null;
          /** The full API key value when reveal is true and Supabase returns it. */
          apiKey?: string;
          /** The timestamp when the API key was created. */
          insertedAt?: string;
          /** The timestamp when the API key was last updated. */
          updatedAt?: string;
          /** The JWT template for secret API keys. */
          secretJwtTemplate?: Record<string, unknown> | null;
        };
      };
    };
    /** Check health for selected services in a Supabase project. */
    "supabase.get_project_health": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * The services to check.
         * @minItems 1
         */
        services: Array<"auth" | "db" | "db_postgres_user" | "pooler" | "realtime" | "rest" | "storage" | "pg_bouncer">;
        /**
         * Optional timeout in milliseconds, up to 10000.
         * @minimum 0
         * @maximum 10000
         */
        timeoutMs?: number;
      };
      output: {
        /** The health results returned by Supabase. */
        services: Array<{
          /** A Supabase service name to check health for. */
          name?: "auth" | "db" | "db_postgres_user" | "pooler" | "realtime" | "rest" | "storage" | "pg_bouncer";
          /** Deprecated upstream health flag. Prefer status when present. */
          healthy?: boolean;
          /** The service health status. */
          status?: string;
          /** The service health error message when present. */
          error?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Supabase regions available for creating projects in an organization. */
    "supabase.list_available_regions": {
      input: {
        /**
         * The Supabase organization slug.
         * @minLength 1
         */
        organizationSlug: string;
        /** Optional continent code for regional recommendations. */
        continent?: "NA" | "SA" | "EU" | "AF" | "AS" | "OC" | "AN";
        /**
         * Optional desired instance size for availability.
         * @minLength 1
         */
        desiredInstanceSize?: string;
      };
      output: {
        /** Supabase available region information. */
        regions: Record<string, unknown>;
      };
    };
    /** List Edge Functions in a Supabase project. */
    "supabase.list_edge_functions": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
      };
      output: {
        /** The Edge Functions returned by Supabase. */
        functions: Array<Record<string, unknown>>;
      };
    };
    /** List members of a Supabase organization. */
    "supabase.list_organization_members": {
      input: {
        /**
         * The Supabase organization slug.
         * @minLength 1
         */
        organizationSlug: string;
      };
      output: {
        /** The organization members. */
        members: Array<{
          /** The unique identifier of the member. */
          userId?: string;
          /** The display name of the member. */
          userName?: string;
          /** The email address of the member. */
          email?: string;
          /** The organization role name of the member. */
          roleName?: string;
          /** Whether the member has MFA enabled. */
          mfaEnabled?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List projects in a Supabase organization with optional search and pagination. */
    "supabase.list_organization_projects": {
      input: {
        /**
         * The Supabase organization slug.
         * @minLength 1
         */
        organizationSlug: string;
        /**
         * The number of projects to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of projects to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Search projects by name.
         * @minLength 1
         */
        search?: string;
        /** The sort order for projects. */
        sort?: "name_asc" | "name_desc" | "created_asc" | "created_desc";
        /**
         * Project statuses to include.
         * @minItems 1
         */
        statuses?: Array<"ACTIVE_HEALTHY" | "ACTIVE_UNHEALTHY" | "COMING_UP" | "GOING_DOWN" | "INACTIVE" | "INIT_FAILED" | "REMOVED" | "RESTARTING" | "UNKNOWN" | "UPGRADING" | "PAUSING" | "RESTORING" | "RESTORE_FAILED" | "PAUSE_FAILED" | "RESIZING">;
      };
      output: {
        /** The projects in the organization. */
        projects: Array<{
          /** The project reference identifier. */
          ref?: string;
          /** The project name. */
          name?: string;
          /** The project region. */
          region?: string;
          /** The current status of the Supabase project. */
          status?: "ACTIVE_HEALTHY" | "ACTIVE_UNHEALTHY" | "COMING_UP" | "GOING_DOWN" | "INACTIVE" | "INIT_FAILED" | "REMOVED" | "RESTARTING" | "UNKNOWN" | "UPGRADING" | "PAUSING" | "RESTORING" | "RESTORE_FAILED" | "PAUSE_FAILED" | "RESIZING";
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Supabase. */
        pagination: {
          /** The total number of matching records. */
          count: number;
          /** The maximum number of records returned. */
          limit: number;
          /** The number of records skipped. */
          offset: number;
        };
      };
    };
    /** List the organizations available to the authenticated Supabase account. */
    "supabase.list_organizations": {
      input: Record<string, never>;
      output: {
        /** The list of organizations. */
        organizations: Array<{
          /** The unique identifier of the organization. */
          id: string;
          /** The name of the organization. */
          name: string;
          /** The URL slug of the organization. */
          slug: string | null;
        }>;
      };
    };
    /** List API keys for a Supabase project. */
    "supabase.list_project_api_keys": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /** Whether to reveal the full API key values. */
        reveal?: boolean;
      };
      output: {
        /** The list of API keys. */
        apiKeys: Array<{
          /** The unique identifier of the API key. */
          id: string;
          /** The name of the API key. */
          name: string;
          /** The type of the API key. */
          type: "legacy" | "publishable" | "secret" | "unknown";
          /** The prefix portion of the API key. */
          prefix: string;
          /** The hash of the API key. */
          hash: string;
          /** The description of the API key. */
          description?: string | null;
          /** The full API key value when reveal is true and Supabase returns it. */
          apiKey?: string;
          /** The timestamp when the API key was created. */
          insertedAt?: string;
          /** The timestamp when the API key was last updated. */
          updatedAt?: string;
          /** The JWT template for secret API keys. */
          secretJwtTemplate?: Record<string, unknown> | null;
        }>;
      };
    };
    /** List secrets configured for a Supabase project. */
    "supabase.list_project_secrets": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
      };
      output: {
        /** The project secrets returned by Supabase. */
        secrets: Array<{
          /** The secret name. */
          name: string;
          /** The secret value when Supabase returns it. */
          value?: string;
          /** The timestamp when the secret was last updated. */
          updatedAt?: string;
        }>;
      };
    };
    /** List Supabase projects visible to the authenticated account. */
    "supabase.list_projects": {
      input: Record<string, never>;
      output: {
        /** The list of projects. */
        projects: Array<{
          /** The unique identifier of the project. */
          id: string;
          /** The organization ID this project belongs to. */
          organizationId: string;
          /** The name of the project. */
          name: string;
          /** The cloud region of the project. */
          region: string;
          /** The current status of the Supabase project. */
          status?: "ACTIVE_HEALTHY" | "ACTIVE_UNHEALTHY" | "COMING_UP" | "GOING_DOWN" | "INACTIVE" | "INIT_FAILED" | "REMOVED" | "RESTARTING" | "UNKNOWN" | "UPGRADING" | "PAUSING" | "RESTORING" | "RESTORE_FAILED" | "PAUSE_FAILED" | "RESIZING";
          /** The timestamp when the project was created. */
          createdAt: string;
          /** A Supabase project database configuration. */
          database?: {
            /** The database host address. */
            host: string;
            /** The database version. */
            version: string;
            /** The Postgres engine identifier. */
            postgresEngine?: string | null;
            /** The release channel of the database. */
            releaseChannel?: string | null;
          };
        }>;
      };
    };
    /** List Storage buckets for a Supabase project. */
    "supabase.list_storage_buckets": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
      };
      output: {
        /** The Storage buckets returned by Supabase. */
        buckets: Array<Record<string, unknown>>;
      };
    };
    /** Run a SQL query through Supabase as the read-only database user. */
    "supabase.run_read_only_query": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * The SQL query to run with read-only permissions.
         * @minLength 1
         */
        query: string;
        /** Optional positional query parameters. */
        parameters?: Array<unknown>;
      };
      output: {
        /** The raw read-only query response returned by Supabase, or null when Supabase returns no response body. */
        result: unknown;
      };
    };
    /** Update the name, description, or JWT template for a Supabase project API key. */
    "supabase.update_project_api_key": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * The unique identifier of the project API key.
         * @minLength 1
         */
        apiKeyId: string;
        /**
         * The API key name. Use lowercase letters, numbers, and underscores; it must start with a lowercase letter or underscore.
         * @minLength 4
         * @maxLength 64
         * @pattern ^[a-z_][a-z0-9_]+$
         */
        name?: string;
        /** The updated API key description. */
        description?: string | null;
        /** Whether to reveal the full API key value in the response. */
        reveal?: boolean;
        /** The updated JWT template for secret API keys. */
        secretJwtTemplate?: Record<string, unknown> | null;
      };
      output: {
        /** A Supabase API key record. */
        apiKey: {
          /** The unique identifier of the API key. */
          id: string;
          /** The name of the API key. */
          name: string;
          /** The type of the API key. */
          type: "legacy" | "publishable" | "secret" | "unknown";
          /** The prefix portion of the API key. */
          prefix: string;
          /** The hash of the API key. */
          hash: string;
          /** The description of the API key. */
          description?: string | null;
          /** The full API key value when reveal is true and Supabase returns it. */
          apiKey?: string;
          /** The timestamp when the API key was created. */
          insertedAt?: string;
          /** The timestamp when the API key was last updated. */
          updatedAt?: string;
          /** The JWT template for secret API keys. */
          secretJwtTemplate?: Record<string, unknown> | null;
        };
      };
    };
    /** Bulk create or update secrets for a Supabase project. */
    "supabase.upsert_project_secrets": {
      input: {
        /**
         * The 20-character Supabase project reference, for example 'abcdefghijklmnopqrst'.
         * @minLength 1
         * @maxLength 64
         */
        projectRef: string;
        /**
         * The secrets to create or update.
         * @minItems 1
         */
        secrets: Array<{
          /**
           * The secret name. It must not start with the reserved SUPABASE_ prefix.
           * @minLength 1
           * @maxLength 256
           */
          name: string;
          /**
           * The secret value.
           * @maxLength 24576
           */
          value: string;
        }>;
      };
      output: {
        /** Whether Supabase accepted the secret upsert request. */
        success: boolean;
      };
    };
  }
}
