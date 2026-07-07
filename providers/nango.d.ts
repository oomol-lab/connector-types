import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete a Nango connection. */
    "nango.delete_connection": {
      input: {
        /**
         * Connection ID used when the connection was created.
         * @minLength 1
         */
        connection_id: string;
        /**
         * Integration ID used to create the connection, also called the unique key.
         * @minLength 1
         */
        provider_config_key: string;
      };
      output: {
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Nango connection and its credentials when permitted. */
    "nango.get_connection": {
      input: {
        /**
         * Connection ID used when the connection was created.
         * @minLength 1
         */
        connection_id: string;
        /**
         * Integration ID used to create the connection, also called the unique key.
         * @minLength 1
         */
        provider_config_key: string;
        /** Whether Nango should refresh the access token even if not expired. */
        force_refresh?: boolean;
        /** Whether to include the refresh token in the response. */
        refresh_token?: boolean;
        /** Whether to refresh the JWT token for GitHub App connections. */
        refresh_github_app_jwt_token?: boolean;
      };
      output: {
        /** Internal Nango connection ID. */
        id: number;
        /**
         * Connection ID used when the connection was created.
         * @minLength 1
         */
        connection_id: string;
        /**
         * Integration ID used to create the connection, also called the unique key.
         * @minLength 1
         */
        provider_config_key: string;
        /**
         * Nango provider configuration slug.
         * @minLength 1
         */
        provider: string;
        /** Connection errors returned by Nango. */
        errors: Array<{
          /**
           * Connection error type, such as auth or sync.
           * @minLength 1
           */
          type: string;
          /**
           * Nango log identifier for this connection error.
           * @minLength 1
           */
          log_id: string;
        }>;
        /** Custom metadata attached to the connection. */
        metadata: Record<string, unknown>;
        /** Provider-specific connection configuration. */
        connection_config: Record<string, unknown>;
        /** Connection tags keyed by tag name. Nango normalizes keys to lowercase. */
        tags: Record<string, string>;
        /**
         * Timestamp when the connection was created.
         * @minLength 1
         */
        created_at: string;
        /**
         * Timestamp when the connection was last updated.
         * @minLength 1
         */
        updated_at: string;
        /**
         * Timestamp when the connection credentials were last fetched.
         * @minLength 1
         */
        last_fetched_at: string;
        /** Connection credentials returned by Nango when the API key is permitted to read them. */
        credentials?: Record<string, unknown>;
        /** Deprecated end-user details returned by Nango. */
        end_user?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Nango integration by unique key. */
    "nango.get_integration": {
      input: {
        /**
         * Integration ID, also called the unique_key, to retrieve.
         * @minLength 1
         */
        uniqueKey: string;
        /**
         * Additional sensitive data to include in the response.
         * @minItems 1
         */
        include?: Array<"webhook" | "credentials">;
      };
      output: {
        /** Detailed Nango integration returned by the API. */
        data: {
          /**
           * The integration ID created in Nango.
           * @minLength 1
           */
          unique_key: string;
          /**
           * Provider display name for this integration.
           * @minLength 1
           */
          display_name: string;
          /**
           * Nango provider configuration slug.
           * @minLength 1
           */
          provider: string;
          /**
           * Absolute URL to the integration logo.
           * @format uri
           */
          logo?: string;
          /**
           * Timestamp when the integration was created.
           * @format date-time
           */
          created_at: string;
          /**
           * Timestamp when the integration was last updated.
           * @format date-time
           */
          updated_at: string;
          /** Whether provider webhooks are forwarded to your backend. */
          forward_webhooks?: boolean;
          /**
           * Webhook URL to configure in the upstream provider.
           * @format uri
           */
          webhook_url?: string | null;
          /** Sensitive integration credentials returned when requested and permitted. */
          credentials?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a provider configuration from Nango. */
    "nango.get_provider": {
      input: {
        /**
         * Nango provider name to retrieve.
         * @minLength 1
         */
        provider: string;
      };
      output: {
        /** Nango provider configuration returned by the API. */
        data: {
          /**
           * Nango provider name.
           * @minLength 1
           */
          name?: string;
          /**
           * Human-readable provider display name.
           * @minLength 1
           */
          display_name?: string;
          /**
           * Authentication mode used by this provider.
           * @minLength 1
           */
          auth_mode?: string;
          /** Provider categories assigned by Nango. */
          categories?: Array<string>;
          /**
           * Nango documentation URL for this provider.
           * @format uri
           */
          docs?: string;
          /** Nango proxy configuration for this provider. */
          proxy?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List Nango connections without credentials. */
    "nango.list_connections": {
      input: {
        /**
         * Exact connection ID to match.
         * @minLength 1
         */
        connectionId?: string;
        /**
         * Search text to partially match connection IDs or end-user profiles.
         * @minLength 1
         */
        search?: string;
        /** Connection tags keyed by tag name. Nango normalizes keys to lowercase. */
        tags?: Record<string, string>;
        /**
         * Maximum number of connections to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Nango connection summaries. */
        connections: Array<{
          /** Internal Nango connection ID. */
          id: number;
          /**
           * Connection ID used when the connection was created.
           * @minLength 1
           */
          connection_id: string;
          /**
           * Nango provider configuration slug.
           * @minLength 1
           */
          provider: string;
          /**
           * Integration ID used to create the connection, also called the unique key.
           * @minLength 1
           */
          provider_config_key: string;
          /**
           * Connection creation timestamp returned by Nango.
           * @minLength 1
           */
          created: string;
          /** Custom metadata attached to the connection. */
          metadata: Record<string, unknown> | null;
          /** Connection tags keyed by tag name. Nango normalizes keys to lowercase. */
          tags: Record<string, string>;
          /** Connection errors returned by Nango. */
          errors: Array<{
            /**
             * Connection error type, such as auth or sync.
             * @minLength 1
             */
            type: string;
            /**
             * Nango log identifier for this connection error.
             * @minLength 1
             */
            log_id: string;
          }>;
          /** Deprecated end-user details returned by Nango. */
          end_user?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List integrations configured in the Nango environment. */
    "nango.list_integrations": {
      input: Record<string, never>;
      output: {
        /** Nango integrations. */
        data: Array<{
          /**
           * The integration ID created in Nango.
           * @minLength 1
           */
          unique_key: string;
          /**
           * Provider display name for this integration.
           * @minLength 1
           */
          display_name: string;
          /**
           * Nango provider configuration slug.
           * @minLength 1
           */
          provider: string;
          /**
           * Absolute URL to the integration logo.
           * @format uri
           */
          logo?: string;
          /**
           * Timestamp when the integration was created.
           * @format date-time
           */
          created_at: string;
          /**
           * Timestamp when the integration was last updated.
           * @format date-time
           */
          updated_at: string;
          /** Whether provider webhooks are forwarded to your backend. */
          forward_webhooks?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List provider configurations available in Nango. */
    "nango.list_providers": {
      input: Record<string, never>;
      output: {
        /** Available Nango providers. */
        data: Array<{
          /**
           * Nango provider name.
           * @minLength 1
           */
          name?: string;
          /**
           * Human-readable provider display name.
           * @minLength 1
           */
          display_name?: string;
          /**
           * Authentication mode used by this provider.
           * @minLength 1
           */
          auth_mode?: string;
          /** Provider categories assigned by Nango. */
          categories?: Array<string>;
          /**
           * Nango documentation URL for this provider.
           * @format uri
           */
          docs?: string;
          /** Nango proxy configuration for this provider. */
          proxy?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Edit tags for a Nango connection. */
    "nango.patch_connection_tags": {
      input: {
        /**
         * Connection ID used when the connection was created.
         * @minLength 1
         */
        connection_id: string;
        /**
         * Integration ID used to create the connection, also called the unique key.
         * @minLength 1
         */
        provider_config_key: string;
        /** Connection tags keyed by tag name. Nango normalizes keys to lowercase. */
        tags: Record<string, string>;
      };
      output: {
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Replace metadata for one or more Nango connections. */
    "nango.set_connection_metadata": {
      input: {
        /** One or more Nango connection IDs. */
        connection_id: string | Array<string>;
        /**
         * Integration ID used to create the connection, also called the unique key.
         * @minLength 1
         */
        provider_config_key: string;
        /** Metadata object that replaces the current connection metadata. */
        metadata: Record<string, unknown>;
      };
      output: {
        /** One or more Nango connection IDs. */
        connection_id: string | Array<string>;
        /**
         * Integration ID used to create the connection, also called the unique key.
         * @minLength 1
         */
        provider_config_key: string;
        /** Metadata now attached to the connection. */
        metadata: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
