import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a New Relic alert policy using the REST alerts API. */
    "new_relic.create_alert_policy": {
      input: {
        /** The alert policy name. */
        name: string;
        /** The incident preference for the new policy. */
        incidentPreference?: "PER_POLICY" | "PER_CONDITION" | "PER_CONDITION_AND_TARGET";
      };
      output: {
        /** The created alert policy. */
        policy: {
          /** The alert policy identifier. */
          id: string | number;
          /** The alert policy name. */
          name: string;
          /** The incident preference for the policy. */
          incidentPreference?: string;
          /** The snake_case incident preference returned by the REST API. */
          incident_preference?: string;
          /** The policy creation timestamp. */
          createdAt?: string | number;
          /** The snake_case policy creation timestamp. */
          created_at?: string | number;
          /** The policy update timestamp. */
          updatedAt?: string | number;
          /** The snake_case policy update timestamp. */
          updated_at?: string | number;
          [key: string]: unknown;
        };
      };
    };
    /** Create a New Relic dashboard with pages and widgets using NerdGraph. */
    "new_relic.create_dashboard": {
      input: {
        /**
         * The account ID that will own the dashboard.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The dashboard name. */
        name: string;
        /** The optional dashboard description. */
        description?: string;
        /** The dashboard permission setting. */
        permissions: "PRIVATE" | "PUBLIC_READ_ONLY" | "PUBLIC_READ_WRITE";
        /**
         * The dashboard pages to create.
         * @minItems 1
         */
        pages: Array<{
          /** The existing dashboard page GUID to preserve during updates. */
          guid?: string;
          /** The dashboard page name. */
          name: string;
          /** The optional dashboard page description. */
          description?: string;
          /**
           * The dashboard page widgets.
           * @minItems 1
           */
          widgets: Array<{
            /** The existing widget ID to preserve during updates. */
            id?: string;
            /** The dashboard widget title. */
            title: string;
            /** The widget visualization identifier. */
            visualization: string;
            /** The widget layout. */
            layout?: {
              /** The widget layout column. */
              column: number;
              /** The widget layout row. */
              row: number;
              /** The widget width in dashboard columns. */
              width: number;
              /** The widget height in dashboard rows. */
              height: number;
            };
            /** The widget raw configuration object. */
            rawConfiguration: Record<string, unknown>;
            /**
             * Optional linked entity GUIDs for facet linking.
             * @maxItems 1
             */
            linkedEntityGuids?: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The created dashboard entity. */
        dashboard: {
          /** The dashboard entity GUID. */
          guid: string;
          /** The dashboard name. */
          name: string;
          /** The dashboard permission setting. */
          permissions?: string;
          /** The dashboard description. */
          description?: string;
          /** The dashboard creation timestamp. */
          createdAt?: string;
          /** The dashboard update timestamp. */
          updatedAt?: string;
          /** The dashboard owner metadata. */
          owner?: {
            /** The dashboard owner email address. */
            email?: string;
            /** The dashboard owner user ID. */
            userId?: string | number;
          };
          /** The pages on the dashboard. */
          pages: Array<{
            /** The dashboard page GUID. */
            guid: string;
            /** The dashboard page name. */
            name: string;
            /** The dashboard page description. */
            description?: string;
            /** The dashboard page creation timestamp. */
            createdAt?: string;
            /** The dashboard page update timestamp. */
            updatedAt?: string;
            /** The widgets on the dashboard page. */
            widgets: Array<{
              /** The widget identifier. */
              id: string;
              /** The widget title. */
              title: string;
              /** The widget raw configuration. */
              rawConfiguration: Record<string, unknown>;
              /** The widget visualization metadata. */
              visualization: {
                /** The visualization identifier. */
                id: string;
                [key: string]: unknown;
              };
              /** The widget layout. */
              layout?: {
                /** The widget layout column. */
                column: number;
                /** The widget layout row. */
                row: number;
                /** The widget width in dashboard columns. */
                width: number;
                /** The widget height in dashboard rows. */
                height: number;
              };
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The mutation errors, when present. */
        errors: Array<{
          /** The error classification returned by New Relic. */
          type?: string;
          /** The human-readable error description. */
          description?: string;
          /** The human-readable error message. */
          message?: string;
          [key: string]: unknown;
        }> | null;
      };
    };
    /** Generate a snapshot URL for a New Relic dashboard page GUID. */
    "new_relic.create_dashboard_snapshot_url": {
      input: {
        /** The dashboard page GUID. */
        guid: string;
      };
      output: {
        /** The generated dashboard snapshot URL. */
        url: string;
      };
    };
    /** Create a New Relic change-tracking deployment marker for an entity GUID using NerdGraph. */
    "new_relic.create_deployment_marker": {
      input: {
        /** The target entity GUID. */
        entityGuid: string;
        /** The deployment version identifier. */
        version: string;
        /** The deployment user or service principal. */
        user?: string;
        /** The deployment commit SHA or revision. */
        commit?: string;
        /** The logical deployment group identifier. */
        groupId?: string;
        /**
         * A URL to the deployment details.
         * @format uri
         */
        deepLink?: string;
        /** The deployment changelog text or URL. */
        changelog?: string;
        /** The deployment description. */
        description?: string;
        /** The deployment timestamp in Unix milliseconds. */
        timestamp?: number;
        /** The deployment strategy type. */
        deploymentType?: "BASIC" | "BLUE_GREEN" | "CANARY" | "ROLLING" | "SHADOW" | "OTHER";
      };
      output: {
        /** The created deployment marker payload. */
        deployment: {
          /** The created deployment identifier. */
          deploymentId: string;
          /** The target entity GUID. */
          entityGuid: string;
          /** The deployment version identifier. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a static or baseline NRQL alert condition for a policy using the REST alerts API. */
    "new_relic.create_nrql_condition": {
      input: {
        /**
         * The alert policy ID.
         * @exclusiveMinimum 0
         */
        policyId: number;
        /** The NRQL condition fields to create. */
        nrqlCondition: {
          /** The NRQL condition type. Defaults to static. */
          type?: "static" | "baseline";
          /** The NRQL condition name. */
          name: string;
          /** Whether the condition is enabled. */
          enabled: boolean;
          /** The runbook URL for the condition. */
          runbookUrl?: string;
          /** The NRQL query definition for the alert condition. */
          nrql: {
            /** The NRQL query string. */
            query: string;
            /** The deprecated since value in minutes. */
            sinceValue?: string | number;
            [key: string]: unknown;
          };
          /**
           * The NRQL threshold terms.
           * @minItems 1
           */
          terms: Array<{
            /** The duration value used for threshold evaluation. */
            duration: string | number;
            /** The threshold comparison operator. */
            operator: string;
            /** The threshold priority level. */
            priority: string;
            /** The threshold value to compare against. */
            threshold: string | number;
            /** The threshold evaluation time function. */
            timeFunction?: string;
            [key: string]: unknown;
          }>;
          /** The value function for the condition. */
          valueFunction?: string;
          /** The advanced signal configuration. */
          signal?: Record<string, unknown>;
          /** The loss-of-signal configuration. */
          expiration?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The created NRQL condition. */
        nrqlCondition: {
          /** The NRQL condition identifier. */
          id: string | number;
          /** The NRQL condition name. */
          name: string;
          /** Whether the condition is enabled. */
          enabled?: boolean;
          /** The NRQL condition type. */
          type?: string;
          /** The NRQL query configuration. */
          nrql?: {
            /** The NRQL query string. */
            query: string;
            /** The deprecated since value returned by the REST API. */
            sinceValue?: string | number;
            /** The deprecated snake_case since value returned by the REST API. */
            since_value?: string | number;
            [key: string]: unknown;
          };
          /** The configured threshold terms. */
          terms?: Array<{
            /** The duration value used for threshold evaluation. */
            duration: string | number;
            /** The threshold comparison operator. */
            operator: string;
            /** The threshold priority level. */
            priority: string;
            /** The threshold value to compare against. */
            threshold: string | number;
            /** The threshold evaluation time function. */
            timeFunction?: string;
            /** The snake_case threshold evaluation time function. */
            time_function?: string;
            [key: string]: unknown;
          }>;
          /** The runbook URL for the condition. */
          runbookUrl?: string;
          /** The snake_case runbook URL for the condition. */
          runbook_url?: string;
          /** The value function used by the condition. */
          valueFunction?: string;
          /** The snake_case value function used by the condition. */
          value_function?: string;
          /** The advanced signal configuration returned by the API. */
          signal?: Record<string, unknown>;
          /** The loss-of-signal configuration returned by the API. */
          expiration?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a New Relic synthetic secure credential using NerdGraph. */
    "new_relic.create_secure_credential": {
      input: {
        /**
         * The account ID that will own the secure credential.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The secure credential key.
         * @minLength 1
         * @maxLength 64
         */
        key: string;
        /**
         * The secure credential value.
         * @minLength 1
         * @maxLength 10000
         */
        value: string;
        /** The optional secure credential description. */
        description?: string;
      };
      output: {
        /** The secure credential key. */
        key: string;
        /** The mutation errors, when present. */
        errors: Array<{
          /** The error classification returned by New Relic. */
          type?: string;
          /** The human-readable error description. */
          description?: string;
          /** The human-readable error message. */
          message?: string;
          [key: string]: unknown;
        }> | null;
      };
    };
    /** Create a New Relic ping monitor by using the syntheticsCreateSimpleMonitor mutation. */
    "new_relic.create_synthetics_simple_monitor": {
      input: {
        /**
         * The account ID that will own the monitor.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The monitor display name. */
        name: string;
        /**
         * The URL or endpoint to monitor.
         * @format uri
         */
        uri: string;
        /** The monitor execution period. */
        period: "EVERY_MINUTE" | "EVERY_5_MINUTES" | "EVERY_10_MINUTES" | "EVERY_15_MINUTES" | "EVERY_30_MINUTES" | "EVERY_HOUR" | "EVERY_6_HOURS" | "EVERY_12_HOURS" | "EVERY_DAY";
        /** The monitor status. */
        status: "ENABLED" | "DISABLED";
        /** The monitor location configuration. */
        locations: {
          /**
           * The public location identifiers.
           * @minItems 1
           */
          public: Array<string>;
          [key: string]: unknown;
        };
        /** The advanced ping monitor options. */
        advancedOptions?: {
          /** The custom HTTP headers. */
          customHeaders?: Array<{
            /** The HTTP header name. */
            name: string;
            /** The HTTP header value. */
            value: string;
          }>;
          /** Whether to validate the TLS certificate. */
          useTlsValidation?: boolean;
          /** Text that must appear in the response body. */
          responseValidationText?: string;
          /** Whether to bypass the HEAD request step. */
          shouldBypassHeadRequest?: boolean;
          /** Whether redirects should fail the monitor. */
          redirectIsFailure?: boolean;
          [key: string]: unknown;
        };
        /** The ping monitor Apdex target in seconds. */
        apdexTarget?: number;
      };
      output: {
        /** The mutation errors, when present. */
        errors: Array<{
          /** The error classification returned by New Relic. */
          type?: string;
          /** The human-readable error description. */
          description?: string;
          /** The human-readable error message. */
          message?: string;
          [key: string]: unknown;
        }> | null;
        /** The created ping monitor summary. */
        monitor: {
          /** The created monitor ID. */
          id?: string;
          /** The created monitor name. */
          name?: string;
          /** The created monitor URI. */
          uri?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Delete a New Relic alert policy using the REST alerts API. */
    "new_relic.delete_alert_policy": {
      input: {
        /** The alert policy ID to delete. */
        policyId: string | number;
      };
      output: {
        /** The deleted alert policy ID. */
        deletedPolicyId: string | number;
        /** Whether the policy delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete a New Relic dashboard by its entity GUID. */
    "new_relic.delete_dashboard": {
      input: {
        /** The dashboard entity GUID. */
        guid: string;
      };
      output: {
        /** The dashboard deletion status. */
        status: string;
        /** The deletion errors, when present. */
        errors: Array<{
          /** The error classification returned by New Relic. */
          type?: string;
          /** The human-readable error description. */
          description?: string;
          /** The human-readable error message. */
          message?: string;
          [key: string]: unknown;
        }> | null;
      };
    };
    /** Delete a New Relic NRQL alert condition using the REST alerts API. */
    "new_relic.delete_nrql_condition": {
      input: {
        /** The NRQL condition ID to delete. */
        conditionId: string | number;
      };
      output: {
        /** The deleted NRQL condition ID. */
        deletedConditionId: string | number;
        /** Whether the NRQL condition delete request succeeded. */
        deleted: boolean;
      };
    };
    /** Delete a New Relic synthetic secure credential using NerdGraph. */
    "new_relic.delete_secure_credential": {
      input: {
        /**
         * The account ID that owns the secure credential.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The secure credential key.
         * @minLength 1
         * @maxLength 64
         */
        key: string;
      };
      output: {
        /** The deleted secure credential key. */
        key: string;
        /** Whether the secure credential delete request succeeded. */
        deleted: boolean;
        /** The mutation errors, when present. */
        errors: Array<{
          /** The error classification returned by New Relic. */
          type?: string;
          /** The human-readable error description. */
          description?: string;
          /** The human-readable error message. */
          message?: string;
          [key: string]: unknown;
        }> | null;
      };
    };
    /** Delete a synthetic monitor by GUID using the syntheticsDeleteMonitor mutation. */
    "new_relic.delete_synthetics_monitor": {
      input: {
        /** The synthetic monitor GUID. */
        guid: string;
      };
      output: {
        /** The GUID of the deleted synthetic monitor. */
        deletedGuid: string;
      };
    };
    /** Execute an NRQL query against a specific New Relic account and return the query results and metadata. */
    "new_relic.execute_nrql_query": {
      input: {
        /**
         * The account ID to query.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /** The NRQL query string. */
        query: string;
        /**
         * The query timeout in seconds.
         * @minimum 1
         * @maximum 600
         */
        timeout?: number;
        /** Whether to request asynchronous execution. */
        asyncExecution?: boolean;
      };
      output: {
        /** The NRQL query result rows. */
        results: Array<Record<string, unknown>>;
        /** The NRQL query metadata. */
        metadata?: Record<string, unknown>;
        /** The otherResult payload for faceted queries. */
        otherResult?: Record<string, unknown>;
        /** The snake_case otherResult payload returned by some responses. */
        other_result?: Record<string, unknown>;
        /** The totalResult payload for faceted queries. */
        totalResult?: Record<string, unknown>;
        /** The snake_case totalResult payload returned by some responses. */
        total_result?: Record<string, unknown>;
        /** The async query progress payload when the query has not completed yet. */
        queryProgress?: Record<string, unknown>;
        /** The snake_case async query progress payload. */
        query_progress?: Record<string, unknown>;
      };
    };
    /** List New Relic alert policies with optional name, incident preference, and pagination filters using the REST alerts API. */
    "new_relic.get_alert_policies": {
      input: {
        /** The optional partial policy name filter. */
        name?: string;
        /**
         * The 1-based result page to fetch.
         * @minimum 1
         */
        page?: number;
        /** The incident preference filter. */
        incidentPreference?: "PER_POLICY" | "PER_CONDITION" | "PER_CONDITION_AND_TARGET";
      };
      output: {
        /** The matching alert policies. */
        policies: Array<{
          /** The alert policy identifier. */
          id: string | number;
          /** The alert policy name. */
          name: string;
          /** The incident preference for the policy. */
          incidentPreference?: string;
          /** The snake_case incident preference returned by the REST API. */
          incident_preference?: string;
          /** The policy creation timestamp. */
          createdAt?: string | number;
          /** The snake_case policy creation timestamp. */
          created_at?: string | number;
          /** The policy update timestamp. */
          updatedAt?: string | number;
          /** The snake_case policy update timestamp. */
          updated_at?: string | number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Validate the connected New Relic user key and return the current user profile from NerdGraph. */
    "new_relic.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current New Relic user profile. */
        user: {
          /** The New Relic user identifier. */
          id: string | number;
          /** The New Relic user email address. */
          email?: string;
          /** The New Relic user display name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Read a New Relic dashboard entity, including its pages and widgets, by GUID. */
    "new_relic.get_dashboard_entity": {
      input: {
        /** The dashboard entity GUID. */
        guid: string;
      };
      output: {
        /** The requested dashboard entity. */
        dashboard: {
          /** The dashboard entity GUID. */
          guid: string;
          /** The dashboard name. */
          name: string;
          /** The dashboard permission setting. */
          permissions?: string;
          /** The dashboard description. */
          description?: string;
          /** The dashboard creation timestamp. */
          createdAt?: string;
          /** The dashboard update timestamp. */
          updatedAt?: string;
          /** The dashboard owner metadata. */
          owner?: {
            /** The dashboard owner email address. */
            email?: string;
            /** The dashboard owner user ID. */
            userId?: string | number;
          };
          /** The pages on the dashboard. */
          pages: Array<{
            /** The dashboard page GUID. */
            guid: string;
            /** The dashboard page name. */
            name: string;
            /** The dashboard page description. */
            description?: string;
            /** The dashboard page creation timestamp. */
            createdAt?: string;
            /** The dashboard page update timestamp. */
            updatedAt?: string;
            /** The widgets on the dashboard page. */
            widgets: Array<{
              /** The widget identifier. */
              id: string;
              /** The widget title. */
              title: string;
              /** The widget raw configuration. */
              rawConfiguration: Record<string, unknown>;
              /** The widget visualization metadata. */
              visualization: {
                /** The visualization identifier. */
                id: string;
                [key: string]: unknown;
              };
              /** The widget layout. */
              layout?: {
                /** The widget layout column. */
                column: number;
                /** The widget layout row. */
                row: number;
                /** The widget width in dashboard columns. */
                width: number;
                /** The widget height in dashboard rows. */
                height: number;
              };
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a synthetic secure credential by key using NerdGraph entity search metadata only. */
    "new_relic.get_secure_credential": {
      input: {
        /** The secure credential key. */
        key: string;
      };
      output: {
        /** The matching secure credential, if found. */
        credential: {
          /** The secure credential entity GUID. */
          guid: string;
          /** The secure credential key. */
          key: string;
          /**
           * The account ID that owns the secure credential.
           * @exclusiveMinimum 0
           */
          accountId: number;
          /** The secure credential tags returned by entity search. */
          tags: Array<{
            /** The entity tag key. */
            key: string;
            /** The entity tag values. */
            values: Array<string>;
          }>;
          /** The timestamp when the secure credential was last updated. */
          updatedAt: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get a synthetic monitor by its legacy monitor ID or entity GUID using NerdGraph entity search. */
    "new_relic.get_synth_monitor": {
      input: {
        /** The legacy synthetic monitor ID. */
        monitorId?: string;
        /** The synthetic monitor entity GUID. */
        guid?: string;
      };
      output: {
        /** The matching synthetic monitor, if found. */
        monitor: {
          /** The synthetic monitor entity GUID. */
          guid: string;
          /** The synthetic monitor name. */
          name: string;
          /**
           * The account ID that owns the monitor.
           * @exclusiveMinimum 0
           */
          accountId: number;
          /** The legacy synthetic monitor identifier. */
          monitorId?: string;
          /** The synthetic monitor type. */
          monitorType?: string;
          /** The monitor tags returned by entity search. */
          tags: Array<{
            /** The entity tag key. */
            key: string;
            /** The entity tag values. */
            values: Array<string>;
          }>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List deployment markers for a legacy APM application by using the REST v2 deployments API. */
    "new_relic.list_deployments": {
      input: {
        /**
         * The APM application ID.
         * @exclusiveMinimum 0
         */
        applicationId: number;
        /**
         * The 1-based result page to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The returned deployments. */
        deployments: Array<{
          /** The deployment identifier. */
          id: string | number;
          /** The deployment revision identifier. */
          revision: string;
          /** The deployment changelog text. */
          changelog?: string | null;
          /** The deployment description. */
          description?: string | null;
          /** The user associated with the deployment. */
          user?: string;
          /** The deployment timestamp. */
          timestamp?: string;
          /** The related deployment links. */
          links?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The deployment API links block. */
        links?: Record<string, unknown>;
      };
    };
    /** List synthetic monitors by using NerdGraph entity search over the SYNTH MONITOR entity type. */
    "new_relic.list_monitors": {
      input: {
        /** The entity search cursor for the next page. */
        cursor?: string;
        /** An optional raw entity search query to further narrow the monitor set. */
        query?: string;
      };
      output: {
        /** The effective entity search query. */
        query: string;
        /** The cursor for the next monitor page, when available. */
        nextCursor: string | null;
        /** The matching synthetic monitors. */
        monitors: Array<{
          /** The synthetic monitor entity GUID. */
          guid: string;
          /** The synthetic monitor name. */
          name: string;
          /**
           * The account ID that owns the monitor.
           * @exclusiveMinimum 0
           */
          accountId: number;
          /** The legacy synthetic monitor identifier. */
          monitorId?: string;
          /** The synthetic monitor type. */
          monitorType?: string;
          /** The monitor tags returned by entity search. */
          tags: Array<{
            /** The entity tag key. */
            key: string;
            /** The entity tag values. */
            values: Array<string>;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List NRQL alert conditions for a specific alert policy using the REST alerts API. */
    "new_relic.list_nrql_conditions": {
      input: {
        /**
         * The alert policy ID.
         * @exclusiveMinimum 0
         */
        policyId: number;
        /**
         * The 1-based result page to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The NRQL conditions for the policy. */
        nrqlConditions: Array<{
          /** The NRQL condition identifier. */
          id: string | number;
          /** The NRQL condition name. */
          name: string;
          /** Whether the condition is enabled. */
          enabled?: boolean;
          /** The NRQL condition type. */
          type?: string;
          /** The NRQL query configuration. */
          nrql?: {
            /** The NRQL query string. */
            query: string;
            /** The deprecated since value returned by the REST API. */
            sinceValue?: string | number;
            /** The deprecated snake_case since value returned by the REST API. */
            since_value?: string | number;
            [key: string]: unknown;
          };
          /** The configured threshold terms. */
          terms?: Array<{
            /** The duration value used for threshold evaluation. */
            duration: string | number;
            /** The threshold comparison operator. */
            operator: string;
            /** The threshold priority level. */
            priority: string;
            /** The threshold value to compare against. */
            threshold: string | number;
            /** The threshold evaluation time function. */
            timeFunction?: string;
            /** The snake_case threshold evaluation time function. */
            time_function?: string;
            [key: string]: unknown;
          }>;
          /** The runbook URL for the condition. */
          runbookUrl?: string;
          /** The snake_case runbook URL for the condition. */
          runbook_url?: string;
          /** The value function used by the condition. */
          valueFunction?: string;
          /** The snake_case value function used by the condition. */
          value_function?: string;
          /** The advanced signal configuration returned by the API. */
          signal?: Record<string, unknown>;
          /** The loss-of-signal configuration returned by the API. */
          expiration?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List synthetic secure credentials by using NerdGraph entity search over the SYNTH SECURE_CRED entity type. */
    "new_relic.list_secure_credentials": {
      input: {
        /** The entity search cursor for the next page. */
        cursor?: string;
        /** An optional raw entity search query to further narrow the credential set. */
        query?: string;
      };
      output: {
        /** The effective entity search query. */
        query: string;
        /** The cursor for the next credentials page, when available. */
        nextCursor: string | null;
        /** The matching secure credentials. */
        credentials: Array<{
          /** The secure credential entity GUID. */
          guid: string;
          /** The secure credential key. */
          key: string;
          /**
           * The account ID that owns the secure credential.
           * @exclusiveMinimum 0
           */
          accountId: number;
          /** The secure credential tags returned by entity search. */
          tags: Array<{
            /** The entity tag key. */
            key: string;
            /** The entity tag values. */
            values: Array<string>;
          }>;
          /** The timestamp when the secure credential was last updated. */
          updatedAt: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search New Relic entities with either the raw entity search language or a structured query builder. */
    "new_relic.search_entities": {
      input: {
        /** The raw entity search query string. Cannot be combined with queryBuilder. */
        query?: string;
        /** The pagination cursor returned by a previous search. */
        cursor?: string;
        /** The structured query builder for entity search. */
        queryBuilder?: {
          /** The entity domain to search, such as APM, SYNTH, or BROWSER. */
          domain?: string;
          /** The entity type to search, such as APPLICATION, MONITOR, or HOST. */
          type?: string;
          /** The infrastructure integration type to search for. */
          infrastructureIntegrationType?: string;
          [key: string]: unknown;
        };
      };
      output: {
        /** The effective search query sent to NerdGraph. */
        query: string;
        /** The cursor for the next search page, when available. */
        nextCursor: string | null;
        /** The matching entities. */
        entities: Array<{
          /** The entity GUID. */
          guid: string;
          /** The entity display name. */
          name: string;
          /**
           * The account ID that owns the entity.
           * @exclusiveMinimum 0
           */
          accountId?: number;
          /** The entity domain. */
          domain?: string;
          /** The entity type. */
          type?: string;
          /** The alert severity shown for the entity. */
          alertSeverity?: string;
          /** The tags attached to the entity. */
          tags?: Array<{
            /** The entity tag key. */
            key: string;
            /** The entity tag values. */
            values: Array<string>;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update a New Relic alert policy name or incident preference using the REST alerts API. */
    "new_relic.update_alert_policy": {
      input: {
        /** The alert policy ID to update. */
        policyId: string | number;
        /** The policy fields to update. */
        policy: {
          /** The alert policy name. */
          name?: string;
          /** The alert incident preference. */
          incidentPreference?: "PER_POLICY" | "PER_CONDITION" | "PER_CONDITION_AND_TARGET";
        };
      };
      output: {
        /** The updated alert policy. */
        policy: {
          /** The alert policy identifier. */
          id: string | number;
          /** The alert policy name. */
          name: string;
          /** The incident preference for the policy. */
          incidentPreference?: string;
          /** The snake_case incident preference returned by the REST API. */
          incident_preference?: string;
          /** The policy creation timestamp. */
          createdAt?: string | number;
          /** The snake_case policy creation timestamp. */
          created_at?: string | number;
          /** The policy update timestamp. */
          updatedAt?: string | number;
          /** The snake_case policy update timestamp. */
          updated_at?: string | number;
          [key: string]: unknown;
        };
      };
    };
    /** Update a New Relic dashboard by GUID, replacing the dashboard configuration with the supplied pages and widgets. */
    "new_relic.update_dashboard": {
      input: {
        /** The dashboard entity GUID. */
        guid: string;
        /** The updated dashboard name. */
        name: string;
        /** The updated dashboard description. */
        description?: string;
        /** The updated dashboard permission setting. */
        permissions: "PRIVATE" | "PUBLIC_READ_ONLY" | "PUBLIC_READ_WRITE";
        /**
         * The full updated dashboard page set.
         * @minItems 1
         */
        pages: Array<{
          /** The existing dashboard page GUID to preserve during updates. */
          guid?: string;
          /** The dashboard page name. */
          name: string;
          /** The optional dashboard page description. */
          description?: string;
          /**
           * The dashboard page widgets.
           * @minItems 1
           */
          widgets: Array<{
            /** The existing widget ID to preserve during updates. */
            id?: string;
            /** The dashboard widget title. */
            title: string;
            /** The widget visualization identifier. */
            visualization: string;
            /** The widget layout. */
            layout?: {
              /** The widget layout column. */
              column: number;
              /** The widget layout row. */
              row: number;
              /** The widget width in dashboard columns. */
              width: number;
              /** The widget height in dashboard rows. */
              height: number;
            };
            /** The widget raw configuration object. */
            rawConfiguration: Record<string, unknown>;
            /**
             * Optional linked entity GUIDs for facet linking.
             * @maxItems 1
             */
            linkedEntityGuids?: Array<string>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The updated dashboard entity. */
        dashboard: {
          /** The dashboard entity GUID. */
          guid: string;
          /** The dashboard name. */
          name: string;
          /** The dashboard permission setting. */
          permissions?: string;
          /** The dashboard description. */
          description?: string;
          /** The dashboard creation timestamp. */
          createdAt?: string;
          /** The dashboard update timestamp. */
          updatedAt?: string;
          /** The dashboard owner metadata. */
          owner?: {
            /** The dashboard owner email address. */
            email?: string;
            /** The dashboard owner user ID. */
            userId?: string | number;
          };
          /** The pages on the dashboard. */
          pages: Array<{
            /** The dashboard page GUID. */
            guid: string;
            /** The dashboard page name. */
            name: string;
            /** The dashboard page description. */
            description?: string;
            /** The dashboard page creation timestamp. */
            createdAt?: string;
            /** The dashboard page update timestamp. */
            updatedAt?: string;
            /** The widgets on the dashboard page. */
            widgets: Array<{
              /** The widget identifier. */
              id: string;
              /** The widget title. */
              title: string;
              /** The widget raw configuration. */
              rawConfiguration: Record<string, unknown>;
              /** The widget visualization metadata. */
              visualization: {
                /** The visualization identifier. */
                id: string;
                [key: string]: unknown;
              };
              /** The widget layout. */
              layout?: {
                /** The widget layout column. */
                column: number;
                /** The widget layout row. */
                row: number;
                /** The widget width in dashboard columns. */
                width: number;
                /** The widget height in dashboard rows. */
                height: number;
              };
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The mutation errors, when present. */
        errors: Array<{
          /** The error classification returned by New Relic. */
          type?: string;
          /** The human-readable error description. */
          description?: string;
          /** The human-readable error message. */
          message?: string;
          [key: string]: unknown;
        }> | null;
      };
    };
    /** Update a static or baseline NRQL alert condition using the REST alerts API. */
    "new_relic.update_nrql_condition": {
      input: {
        /** The NRQL condition ID. */
        conditionId: string | number;
        /** The NRQL condition fields to update. */
        nrqlCondition: {
          /** The NRQL condition type. Defaults to static. */
          type?: "static" | "baseline";
          /** The NRQL condition name. */
          name?: string;
          /** Whether the condition is enabled. */
          enabled?: boolean;
          /** The runbook URL for the condition. */
          runbookUrl?: string;
          /** The NRQL query definition for the alert condition. */
          nrql?: {
            /** The NRQL query string. */
            query: string;
            /** The deprecated since value in minutes. */
            sinceValue?: string | number;
            [key: string]: unknown;
          };
          /** The NRQL threshold terms. */
          terms?: Array<{
            /** The duration value used for threshold evaluation. */
            duration: string | number;
            /** The threshold comparison operator. */
            operator: string;
            /** The threshold priority level. */
            priority: string;
            /** The threshold value to compare against. */
            threshold: string | number;
            /** The threshold evaluation time function. */
            timeFunction?: string;
            [key: string]: unknown;
          }>;
          /** The value function for the condition. */
          valueFunction?: string;
          /** The advanced signal configuration. */
          signal?: Record<string, unknown>;
          /** The loss-of-signal configuration. */
          expiration?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The updated NRQL condition. */
        nrqlCondition: {
          /** The NRQL condition identifier. */
          id: string | number;
          /** The NRQL condition name. */
          name: string;
          /** Whether the condition is enabled. */
          enabled?: boolean;
          /** The NRQL condition type. */
          type?: string;
          /** The NRQL query configuration. */
          nrql?: {
            /** The NRQL query string. */
            query: string;
            /** The deprecated since value returned by the REST API. */
            sinceValue?: string | number;
            /** The deprecated snake_case since value returned by the REST API. */
            since_value?: string | number;
            [key: string]: unknown;
          };
          /** The configured threshold terms. */
          terms?: Array<{
            /** The duration value used for threshold evaluation. */
            duration: string | number;
            /** The threshold comparison operator. */
            operator: string;
            /** The threshold priority level. */
            priority: string;
            /** The threshold value to compare against. */
            threshold: string | number;
            /** The threshold evaluation time function. */
            timeFunction?: string;
            /** The snake_case threshold evaluation time function. */
            time_function?: string;
            [key: string]: unknown;
          }>;
          /** The runbook URL for the condition. */
          runbookUrl?: string;
          /** The snake_case runbook URL for the condition. */
          runbook_url?: string;
          /** The value function used by the condition. */
          valueFunction?: string;
          /** The snake_case value function used by the condition. */
          value_function?: string;
          /** The advanced signal configuration returned by the API. */
          signal?: Record<string, unknown>;
          /** The loss-of-signal configuration returned by the API. */
          expiration?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update a New Relic synthetic secure credential value or description using NerdGraph. */
    "new_relic.update_secure_credential": {
      input: {
        /**
         * The account ID that owns the secure credential.
         * @exclusiveMinimum 0
         */
        accountId: number;
        /**
         * The secure credential key.
         * @minLength 1
         * @maxLength 64
         */
        key: string;
        /**
         * The updated secure credential value.
         * @minLength 1
         * @maxLength 10000
         */
        value: string;
        /** The updated secure credential description. */
        description?: string;
      };
      output: {
        /** The secure credential key. */
        key: string;
        /** The secure credential creation timestamp. */
        createdAt?: string;
        /** The secure credential update timestamp. */
        lastUpdated?: string;
        /** The mutation errors, when present. */
        errors: Array<{
          /** The error classification returned by New Relic. */
          type?: string;
          /** The human-readable error description. */
          description?: string;
          /** The human-readable error message. */
          message?: string;
          [key: string]: unknown;
        }> | null;
      };
    };
    /** Update a New Relic ping monitor by GUID using the syntheticsUpdateSimpleMonitor mutation. */
    "new_relic.update_synthetics_simple_monitor": {
      input: {
        /** The synthetic monitor GUID. */
        guid: string;
        /** The ping monitor fields to update. */
        monitor: {
          /** The updated monitor name. */
          name?: string;
          /**
           * The updated monitor URI.
           * @format uri
           */
          uri?: string;
          /** The updated monitor period. */
          period?: "EVERY_MINUTE" | "EVERY_5_MINUTES" | "EVERY_10_MINUTES" | "EVERY_15_MINUTES" | "EVERY_30_MINUTES" | "EVERY_HOUR" | "EVERY_6_HOURS" | "EVERY_12_HOURS" | "EVERY_DAY";
          /** The updated monitor status. */
          status?: "ENABLED" | "DISABLED";
          /** The updated monitor location configuration. */
          locations?: {
            /**
             * The updated public location identifiers.
             * @minItems 1
             */
            public: Array<string>;
            [key: string]: unknown;
          };
          /** The updated Apdex target. */
          apdexTarget?: number;
          /** The updated advanced options. */
          advancedOptions?: {
            /** The custom HTTP headers. */
            customHeaders?: Array<{
              /** The HTTP header name. */
              name: string;
              /** The HTTP header value. */
              value: string;
            }>;
            /** Whether to validate the TLS certificate. */
            useTlsValidation?: boolean;
            /** Text that must appear in the response body. */
            responseValidationText?: string;
            /** Whether to bypass the HEAD request step. */
            shouldBypassHeadRequest?: boolean;
            /** Whether redirects should fail the monitor. */
            redirectIsFailure?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
      output: {
        /** The mutation errors, when present. */
        errors: Array<{
          /** The error classification returned by New Relic. */
          type?: string;
          /** The human-readable error description. */
          description?: string;
          /** The human-readable error message. */
          message?: string;
          [key: string]: unknown;
        }> | null;
      };
    };
  }
}
