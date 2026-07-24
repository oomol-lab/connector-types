import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve details and current connection usage for one Fivetran hybrid deployment agent. */
    "fivetran.get_hybrid_deployment_agent": {
      input: {
        /**
         * Unique Fivetran hybrid deployment agent identifier.
         * @minLength 1
         */
        agentId: string;
      };
      output: {
        /** A Fivetran hybrid deployment agent and its current usage. */
        agent: {
          /** Unique Fivetran hybrid deployment agent identifier. */
          id: string;
          /** Installed hybrid deployment agent version. */
          version: string;
          /** Whether the hybrid deployment agent is enabled. */
          enabled: boolean;
          /** Whether the hybrid deployment agent is online. */
          online: boolean;
          /** Display name of the hybrid deployment agent. */
          display_name: string;
          /** Fivetran group associated with the agent. */
          group_id: string;
          /**
           * Time when the agent was registered.
           * @format date-time
           */
          registered_at: string;
          /** Actor that created the agent. */
          created_by: string;
          /** Agent runtime environment. */
          deployment_type: "DOCKER" | "PODMAN" | "KUBERNETES" | "SNOWPARK";
          /**
           * Time when the agent was last updated.
           * @format date-time
           */
          updated_at: string;
          /**
           * Time when the agent was last used.
           * @format date-time
           */
          last_used_at: string;
          /** Connections currently using the hybrid deployment agent. */
          usage?: Array<{
            /** Connection name and source schema name within the Fivetran group. */
            schema: string;
            /** Fivetran connector type name. */
            service: string;
            /** Unique Fivetran connection identifier. */
            connection_id: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve detailed information for one group-level Fivetran external log service. */
    "fivetran.get_log_service": {
      input: {
        /**
         * Unique Fivetran log service identifier.
         * @minLength 1
         */
        logId: string;
      };
      output: {
        /** A Fivetran external log service. */
        logService: {
          /** Unique Fivetran log service identifier. */
          id: string;
          /** Fivetran log service type, such as cloudwatch, datadog_log, grafana_loki, splunkLog, or stackdriver. */
          service: string;
          /** Whether the log service is enabled. */
          enabled: boolean;
          /** Current Fivetran log service setup status. */
          status?: {
            /** Current log service setup state. */
            setup_state?: "connected" | "broken" | "incomplete";
            /** Alerts describing log service configuration issues. */
            tasks?: Array<{
              /** Provider-defined alert code. */
              code?: string;
              /** Human-readable description of the issue. */
              message?: string;
              /** Additional context for the alert. */
              details?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Results from the most recent setup test run. */
          setup_tests?: Array<{
            /** Human-readable name of the setup test step. */
            title: string;
            /** Result of the setup test step. */
            status: "PASSED" | "SKIPPED" | "WARNING" | "FAILED" | "JOB_FAILED";
            /** Human-readable result message for the setup test step. */
            message?: string;
            /** Additional diagnostic information supplied by Fivetran. */
            details?: unknown;
            [key: string]: unknown;
          }>;
          /** Service-specific logging configuration returned by Fivetran. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve detailed information for one Fivetran transformation project. */
    "fivetran.get_transformation_project": {
      input: {
        /**
         * Unique Fivetran transformation project identifier.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Detailed Fivetran transformation project information. */
        project: {
          /** Unique Fivetran transformation project identifier. */
          id?: string;
          /** Transformation project type. */
          type?: "DBT_CORE";
          /**
           * Time when the transformation project was created.
           * @format date-time
           */
          created_at?: string;
          /** Identifier of the user or system key that created the project. */
          created_by_id?: string;
          /** Identifier of the Fivetran group targeted by the project. */
          group_id?: string;
          /** Current transformation project status. */
          status?: "NOT_READY" | "READY" | "ERROR";
          /** Errors reported while processing or setting up the project. */
          errors?: Array<string>;
          /** Results from the latest project setup tests. */
          setup_tests?: Array<{
            /** Human-readable name of the setup test step. */
            title: string;
            /** Result of the setup test step. */
            status: "PASSED" | "SKIPPED" | "WARNING" | "FAILED" | "JOB_FAILED";
            /** Human-readable result message for the setup test step. */
            message?: string;
            /** Additional diagnostic information supplied by Fivetran. */
            details?: unknown;
            [key: string]: unknown;
          }>;
          /** dbt Core project configuration returned by Fivetran. */
          project_config?: {
            /** dbt version configured for the project. */
            dbt_version?: string;
            /** Default destination schema. */
            default_schema?: string;
            /** Git remote URL containing the dbt project. */
            git_remote_url?: string;
            /** Path to the dbt project within the repository. */
            folder_path?: string;
            /** Git branch used by the dbt project. */
            git_branch?: string;
            /** Number of dbt execution threads. */
            threads?: number;
            /** Default dbt target name. */
            target_name?: string;
            /** Environment variables configured for the dbt project. */
            environment_vars?: Array<string>;
            /** Public key used to grant Fivetran SSH access to the Git repository. */
            public_key?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Fivetran hybrid deployment agents with their connection usage, optionally filtered by group. */
    "fivetran.list_hybrid_deployment_agents": {
      input: {
        /**
         * Opaque cursor returned as nextCursor by a previous Fivetran list action.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Number of records to return. Fivetran accepts values from 1 through 1000 and defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Return agents associated with this Fivetran group only.
         * @minLength 1
         */
        groupId?: string;
      };
      output: {
        /** Hybrid deployment agents returned for this page. */
        agents: Array<{
          /** Unique Fivetran hybrid deployment agent identifier. */
          id: string;
          /** Installed hybrid deployment agent version. */
          version: string;
          /** Whether the hybrid deployment agent is enabled. */
          enabled: boolean;
          /** Whether the hybrid deployment agent is online. */
          online: boolean;
          /** Display name of the hybrid deployment agent. */
          display_name: string;
          /** Fivetran group associated with the agent. */
          group_id: string;
          /**
           * Time when the agent was registered.
           * @format date-time
           */
          registered_at: string;
          /** Actor that created the agent. */
          created_by: string;
          /** Agent runtime environment. */
          deployment_type: "DOCKER" | "PODMAN" | "KUBERNETES" | "SNOWPARK";
          /**
           * Time when the agent was last updated.
           * @format date-time
           */
          updated_at: string;
          /**
           * Time when the agent was last used.
           * @format date-time
           */
          last_used_at: string;
          /** Connections currently using the hybrid deployment agent. */
          usage?: Array<{
            /** Connection name and source schema name within the Fivetran group. */
            schema: string;
            /** Fivetran connector type name. */
            service: string;
            /** Unique Fivetran connection identifier. */
            connection_id: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when available. */
        nextCursor: string | null;
      };
    };
    /** List external log services accessible within the configured Fivetran account. */
    "fivetran.list_log_services": {
      input: {
        /**
         * Opaque cursor returned as nextCursor by a previous Fivetran list action.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Number of records to return. Fivetran accepts values from 1 through 1000 and defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** External log services returned for this page. */
        logServices: Array<{
          /** Unique Fivetran log service identifier. */
          id: string;
          /** Fivetran log service type, such as cloudwatch, datadog_log, grafana_loki, splunkLog, or stackdriver. */
          service: string;
          /** Whether the log service is enabled. */
          enabled: boolean;
          /** Current Fivetran log service setup status. */
          status?: {
            /** Current log service setup state. */
            setup_state?: "connected" | "broken" | "incomplete";
            /** Alerts describing log service configuration issues. */
            tasks?: Array<{
              /** Provider-defined alert code. */
              code?: string;
              /** Human-readable description of the issue. */
              message?: string;
              /** Additional context for the alert. */
              details?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Results from the most recent setup test run. */
          setup_tests?: Array<{
            /** Human-readable name of the setup test step. */
            title: string;
            /** Result of the setup test step. */
            status: "PASSED" | "SKIPPED" | "WARNING" | "FAILED" | "JOB_FAILED";
            /** Human-readable result message for the setup test step. */
            message?: string;
            /** Additional diagnostic information supplied by Fivetran. */
            details?: unknown;
            [key: string]: unknown;
          }>;
          /** Service-specific logging configuration returned by Fivetran. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when available. */
        nextCursor: string | null;
      };
    };
    /** List transformation projects accessible to the configured Fivetran API key. */
    "fivetran.list_transformation_projects": {
      input: {
        /**
         * Opaque cursor returned as nextCursor by a previous Fivetran list action.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Number of records to return. Fivetran accepts values from 1 through 1000 and defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** Transformation projects returned for this page. */
        projects: Array<{
          /** Unique Fivetran transformation project identifier. */
          id?: string;
          /** Transformation project type. */
          type?: "DBT_CORE";
          /**
           * Time when the transformation project was created.
           * @format date-time
           */
          created_at?: string;
          /** Identifier of the user or system key that created the project. */
          created_by_id?: string;
          /** Identifier of the Fivetran group targeted by the project. */
          group_id?: string;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when available. */
        nextCursor: string | null;
      };
    };
  }
}
