import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new OpenStatus HTTP monitor. */
    "openstatus.create_http_monitor": {
      input: {
        /**
         * Monitor name.
         * @minLength 1
         * @maxLength 256
         */
        name: string;
        /**
         * URL that OpenStatus should monitor.
         * @maxLength 2048
         * @format uri
         */
        url: string;
        /** How often OpenStatus should run the monitor. */
        periodicity: "PERIODICITY_30S" | "PERIODICITY_1M" | "PERIODICITY_5M" | "PERIODICITY_10M" | "PERIODICITY_30M" | "PERIODICITY_1H";
        /** HTTP method used by the monitor. */
        method?: "HTTP_METHOD_GET" | "HTTP_METHOD_POST" | "HTTP_METHOD_HEAD" | "HTTP_METHOD_PUT" | "HTTP_METHOD_PATCH" | "HTTP_METHOD_DELETE" | "HTTP_METHOD_TRACE" | "HTTP_METHOD_CONNECT" | "HTTP_METHOD_OPTIONS";
        /** Request body to send with the monitor check. */
        body?: string;
        /**
         * Timeout in milliseconds.
         * @minimum 0
         * @maximum 120000
         */
        timeout?: number;
        /**
         * Latency threshold in milliseconds before the monitor is marked degraded.
         * @minimum 0
         * @maximum 120000
         */
        degradedAt?: number | null;
        /**
         * Number of retry attempts.
         * @minimum 0
         * @maximum 10
         */
        retry?: number;
        /** Whether the monitor should follow HTTP redirects. */
        followRedirects?: boolean | null;
        /**
         * Custom request headers.
         * @maxItems 20
         */
        headers?: Array<{
          /**
           * Header name.
           * @minLength 1
           */
          key: string;
          /** Header value. */
          value: string;
        }>;
        /**
         * HTTP status code assertions.
         * @maxItems 10
         */
        statusCodeAssertions?: Array<{
          /**
           * Target HTTP status code.
           * @minimum 100
           * @maximum 599
           */
          target: number;
          /** Numeric assertion comparator. */
          comparator: "NUMBER_COMPARATOR_EQUAL" | "NUMBER_COMPARATOR_NOT_EQUAL" | "NUMBER_COMPARATOR_GREATER_THAN" | "NUMBER_COMPARATOR_GREATER_THAN_OR_EQUAL" | "NUMBER_COMPARATOR_LESS_THAN" | "NUMBER_COMPARATOR_LESS_THAN_OR_EQUAL";
        }>;
        /**
         * HTTP response body assertions.
         * @maxItems 10
         */
        bodyAssertions?: Array<{
          /** Target body value to compare against. */
          target: string;
          /** String assertion comparator. */
          comparator: "STRING_COMPARATOR_CONTAINS" | "STRING_COMPARATOR_NOT_CONTAINS" | "STRING_COMPARATOR_EQUAL" | "STRING_COMPARATOR_NOT_EQUAL" | "STRING_COMPARATOR_EMPTY" | "STRING_COMPARATOR_NOT_EMPTY" | "STRING_COMPARATOR_GREATER_THAN" | "STRING_COMPARATOR_GREATER_THAN_OR_EQUAL" | "STRING_COMPARATOR_LESS_THAN" | "STRING_COMPARATOR_LESS_THAN_OR_EQUAL";
        }>;
        /**
         * HTTP response header assertions.
         * @maxItems 10
         */
        headerAssertions?: Array<{
          /**
           * Header name to check.
           * @minLength 1
           */
          key: string;
          /** Target header value to compare against. */
          target: string;
          /** String assertion comparator. */
          comparator: "STRING_COMPARATOR_CONTAINS" | "STRING_COMPARATOR_NOT_CONTAINS" | "STRING_COMPARATOR_EQUAL" | "STRING_COMPARATOR_NOT_EQUAL" | "STRING_COMPARATOR_EMPTY" | "STRING_COMPARATOR_NOT_EMPTY" | "STRING_COMPARATOR_GREATER_THAN" | "STRING_COMPARATOR_GREATER_THAN_OR_EQUAL" | "STRING_COMPARATOR_LESS_THAN" | "STRING_COMPARATOR_LESS_THAN_OR_EQUAL";
        }>;
        /**
         * Monitor description.
         * @maxLength 1024
         */
        description?: string;
        /** Whether the monitor is active. */
        active?: boolean;
        /** Whether the monitor is publicly visible. */
        public?: boolean;
        /**
         * Regions used to run or filter monitor checks.
         * @minItems 1
         * @maxItems 28
         */
        regions?: Array<"REGION_FLY_AMS" | "REGION_FLY_ARN" | "REGION_FLY_BOM" | "REGION_FLY_CDG" | "REGION_FLY_DFW" | "REGION_FLY_EWR" | "REGION_FLY_FRA" | "REGION_FLY_GRU" | "REGION_FLY_IAD" | "REGION_FLY_JNB" | "REGION_FLY_LAX" | "REGION_FLY_LHR" | "REGION_FLY_NRT" | "REGION_FLY_ORD" | "REGION_FLY_SJC" | "REGION_FLY_SIN" | "REGION_FLY_SYD" | "REGION_FLY_YYZ" | "REGION_KOYEB_FRA" | "REGION_KOYEB_PAR" | "REGION_KOYEB_SFO" | "REGION_KOYEB_SIN" | "REGION_KOYEB_TYO" | "REGION_KOYEB_WAS" | "REGION_RAILWAY_US_WEST2" | "REGION_RAILWAY_US_EAST4" | "REGION_RAILWAY_EUROPE_WEST4" | "REGION_RAILWAY_ASIA_SOUTHEAST1">;
        /** OpenTelemetry export configuration for monitor metrics. */
        openTelemetry?: {
          /**
           * OpenTelemetry endpoint URL.
           * @maxLength 2048
           * @format uri
           */
          endpoint: string;
          /**
           * Headers sent to the OpenTelemetry endpoint.
           * @maxItems 20
           */
          headers?: Array<{
            /**
             * Header name.
             * @minLength 1
             */
            key: string;
            /** Header value. */
            value: string;
          }>;
        };
      };
      output: {
        /** OpenStatus monitor returned by the API. */
        monitor: {
          /** Monitor ID. */
          id?: string;
          /** Monitor name. */
          name?: string;
          /** HTTP monitor URL. */
          url?: string;
          /** TCP or DNS monitor URI. */
          uri?: string;
          /** Monitor check periodicity. */
          periodicity?: string;
          /** HTTP method for HTTP monitors. */
          method?: string;
          /** Whether the monitor is active. */
          active?: boolean;
          /** Whether the monitor is public. */
          public?: boolean;
          /** Current monitor status. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete an OpenStatus monitor by ID. */
    "openstatus.delete_monitor": {
      input: {
        /**
         * OpenStatus monitor ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether OpenStatus completed the operation successfully. */
        success: boolean;
      };
    };
    /** Retrieve one OpenStatus monitor configuration by ID. */
    "openstatus.get_monitor": {
      input: {
        /**
         * OpenStatus monitor ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Type-specific OpenStatus monitor configuration. */
        monitor: {
          /** OpenStatus monitor returned by the API. */
          http?: {
            /** Monitor ID. */
            id?: string;
            /** Monitor name. */
            name?: string;
            /** HTTP monitor URL. */
            url?: string;
            /** TCP or DNS monitor URI. */
            uri?: string;
            /** Monitor check periodicity. */
            periodicity?: string;
            /** HTTP method for HTTP monitors. */
            method?: string;
            /** Whether the monitor is active. */
            active?: boolean;
            /** Whether the monitor is public. */
            public?: boolean;
            /** Current monitor status. */
            status?: string;
            [key: string]: unknown;
          };
          /** OpenStatus monitor returned by the API. */
          tcp?: {
            /** Monitor ID. */
            id?: string;
            /** Monitor name. */
            name?: string;
            /** HTTP monitor URL. */
            url?: string;
            /** TCP or DNS monitor URI. */
            uri?: string;
            /** Monitor check periodicity. */
            periodicity?: string;
            /** HTTP method for HTTP monitors. */
            method?: string;
            /** Whether the monitor is active. */
            active?: boolean;
            /** Whether the monitor is public. */
            public?: boolean;
            /** Current monitor status. */
            status?: string;
            [key: string]: unknown;
          };
          /** OpenStatus monitor returned by the API. */
          dns?: {
            /** Monitor ID. */
            id?: string;
            /** Monitor name. */
            name?: string;
            /** HTTP monitor URL. */
            url?: string;
            /** TCP or DNS monitor URI. */
            uri?: string;
            /** Monitor check periodicity. */
            periodicity?: string;
            /** HTTP method for HTTP monitors. */
            method?: string;
            /** Whether the monitor is active. */
            active?: boolean;
            /** Whether the monitor is public. */
            public?: boolean;
            /** Current monitor status. */
            status?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the current OpenStatus monitor status for each configured region. */
    "openstatus.get_monitor_status": {
      input: {
        /**
         * OpenStatus monitor ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Monitor ID. */
        id: string;
        /** Status entries by region. */
        regions: Array<{
          /** OpenStatus region identifier. */
          region?: string;
          /** Current monitor status in this region. */
          status?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve aggregated OpenStatus monitor metrics for a time range and regions. */
    "openstatus.get_monitor_summary": {
      input: {
        /**
         * OpenStatus monitor ID.
         * @minLength 1
         */
        id: string;
        /** Metrics aggregation window. */
        timeRange?: "TIME_RANGE_1D" | "TIME_RANGE_7D" | "TIME_RANGE_14D";
        /**
         * Regions used to run or filter monitor checks.
         * @minItems 1
         * @maxItems 28
         */
        regions?: Array<"REGION_FLY_AMS" | "REGION_FLY_ARN" | "REGION_FLY_BOM" | "REGION_FLY_CDG" | "REGION_FLY_DFW" | "REGION_FLY_EWR" | "REGION_FLY_FRA" | "REGION_FLY_GRU" | "REGION_FLY_IAD" | "REGION_FLY_JNB" | "REGION_FLY_LAX" | "REGION_FLY_LHR" | "REGION_FLY_NRT" | "REGION_FLY_ORD" | "REGION_FLY_SJC" | "REGION_FLY_SIN" | "REGION_FLY_SYD" | "REGION_FLY_YYZ" | "REGION_KOYEB_FRA" | "REGION_KOYEB_PAR" | "REGION_KOYEB_SFO" | "REGION_KOYEB_SIN" | "REGION_KOYEB_TYO" | "REGION_KOYEB_WAS" | "REGION_RAILWAY_US_WEST2" | "REGION_RAILWAY_US_EAST4" | "REGION_RAILWAY_EUROPE_WEST4" | "REGION_RAILWAY_ASIA_SOUTHEAST1">;
      };
      output: {
        /** Aggregated monitor metrics returned by OpenStatus. */
        summary: {
          /** Monitor ID. */
          id?: string;
          /** Timestamp of the latest check. */
          lastPingAt?: string;
          /** Integer value returned by OpenStatus. */
          totalSuccessful?: number | string;
          /** Integer value returned by OpenStatus. */
          totalDegraded?: number | string;
          /** Integer value returned by OpenStatus. */
          totalFailed?: number | string;
          /** Integer value returned by OpenStatus. */
          p50?: number | string;
          /** Integer value returned by OpenStatus. */
          p75?: number | string;
          /** Integer value returned by OpenStatus. */
          p90?: number | string;
          /** Integer value returned by OpenStatus. */
          p95?: number | string;
          /** Integer value returned by OpenStatus. */
          p99?: number | string;
          /** Metrics aggregation window. */
          timeRange?: string;
          /** Regions included in the metrics. */
          regions?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List recent OpenStatus HTTP response logs for a monitor. */
    "openstatus.list_http_response_logs": {
      input: {
        /**
         * OpenStatus monitor ID.
         * @minLength 1
         */
        id: string;
        /** Integer value returned by OpenStatus. */
        fromTimestamp?: number | string | null;
        /** Integer value returned by OpenStatus. */
        toTimestamp?: number | string | null;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of records to skip for pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** HTTP response logs returned by OpenStatus. */
        logs: Array<{
          /** Response log ID. */
          id?: string | null;
          /** Monitor ID. */
          monitorId?: string;
          /** Measured latency in milliseconds. */
          latency?: number;
          /** HTTP status code. */
          statusCode?: number | null;
          /** Request status classification. */
          requestStatus?: string;
          /** Region where the check ran. */
          region?: string;
          /** Integer value returned by OpenStatus. */
          timestamp?: number | string;
          [key: string]: unknown;
        }>;
        /** OpenStatus pagination metadata. */
        pagination: {
          /** Requested page size. */
          limit?: number;
          /** Requested page offset. */
          offset?: number;
          /** Whether more records are available. */
          hasMore?: boolean;
          /** Next offset when more records are available. */
          nextOffset?: number | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List OpenStatus HTTP, TCP, and DNS monitors in the authenticated workspace. */
    "openstatus.list_monitors": {
      input: {
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of records to skip for pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** HTTP monitors returned by OpenStatus. */
        httpMonitors: Array<{
          /** Monitor ID. */
          id?: string;
          /** Monitor name. */
          name?: string;
          /** HTTP monitor URL. */
          url?: string;
          /** TCP or DNS monitor URI. */
          uri?: string;
          /** Monitor check periodicity. */
          periodicity?: string;
          /** HTTP method for HTTP monitors. */
          method?: string;
          /** Whether the monitor is active. */
          active?: boolean;
          /** Whether the monitor is public. */
          public?: boolean;
          /** Current monitor status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** TCP monitors returned by OpenStatus. */
        tcpMonitors: Array<{
          /** Monitor ID. */
          id?: string;
          /** Monitor name. */
          name?: string;
          /** HTTP monitor URL. */
          url?: string;
          /** TCP or DNS monitor URI. */
          uri?: string;
          /** Monitor check periodicity. */
          periodicity?: string;
          /** HTTP method for HTTP monitors. */
          method?: string;
          /** Whether the monitor is active. */
          active?: boolean;
          /** Whether the monitor is public. */
          public?: boolean;
          /** Current monitor status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** DNS monitors returned by OpenStatus. */
        dnsMonitors: Array<{
          /** Monitor ID. */
          id?: string;
          /** Monitor name. */
          name?: string;
          /** HTTP monitor URL. */
          url?: string;
          /** TCP or DNS monitor URI. */
          uri?: string;
          /** Monitor check periodicity. */
          periodicity?: string;
          /** HTTP method for HTTP monitors. */
          method?: string;
          /** Whether the monitor is active. */
          active?: boolean;
          /** Whether the monitor is public. */
          public?: boolean;
          /** Current monitor status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** Total number of monitors across all types. */
        totalSize: number;
      };
    };
    /** Trigger an immediate OpenStatus monitor check across configured regions. */
    "openstatus.trigger_monitor": {
      input: {
        /**
         * OpenStatus monitor ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether OpenStatus completed the operation successfully. */
        success: boolean;
      };
    };
    /** Partially update an existing OpenStatus HTTP monitor. */
    "openstatus.update_http_monitor": {
      input: {
        /**
         * OpenStatus monitor ID.
         * @minLength 1
         */
        id: string;
        /**
         * Monitor name.
         * @minLength 1
         * @maxLength 256
         */
        name?: string;
        /**
         * URL that OpenStatus should monitor.
         * @maxLength 2048
         * @format uri
         */
        url?: string;
        /** How often OpenStatus should run the monitor. */
        periodicity?: "PERIODICITY_30S" | "PERIODICITY_1M" | "PERIODICITY_5M" | "PERIODICITY_10M" | "PERIODICITY_30M" | "PERIODICITY_1H";
        /** HTTP method used by the monitor. */
        method?: "HTTP_METHOD_GET" | "HTTP_METHOD_POST" | "HTTP_METHOD_HEAD" | "HTTP_METHOD_PUT" | "HTTP_METHOD_PATCH" | "HTTP_METHOD_DELETE" | "HTTP_METHOD_TRACE" | "HTTP_METHOD_CONNECT" | "HTTP_METHOD_OPTIONS";
        /** Request body to send with the monitor check. */
        body?: string;
        /**
         * Timeout in milliseconds.
         * @minimum 0
         * @maximum 120000
         */
        timeout?: number;
        /**
         * Latency threshold in milliseconds before the monitor is marked degraded.
         * @minimum 0
         * @maximum 120000
         */
        degradedAt?: number | null;
        /**
         * Number of retry attempts.
         * @minimum 0
         * @maximum 10
         */
        retry?: number;
        /** Whether the monitor should follow HTTP redirects. */
        followRedirects?: boolean | null;
        /**
         * Custom request headers.
         * @maxItems 20
         */
        headers?: Array<{
          /**
           * Header name.
           * @minLength 1
           */
          key: string;
          /** Header value. */
          value: string;
        }>;
        /**
         * HTTP status code assertions.
         * @maxItems 10
         */
        statusCodeAssertions?: Array<{
          /**
           * Target HTTP status code.
           * @minimum 100
           * @maximum 599
           */
          target: number;
          /** Numeric assertion comparator. */
          comparator: "NUMBER_COMPARATOR_EQUAL" | "NUMBER_COMPARATOR_NOT_EQUAL" | "NUMBER_COMPARATOR_GREATER_THAN" | "NUMBER_COMPARATOR_GREATER_THAN_OR_EQUAL" | "NUMBER_COMPARATOR_LESS_THAN" | "NUMBER_COMPARATOR_LESS_THAN_OR_EQUAL";
        }>;
        /**
         * HTTP response body assertions.
         * @maxItems 10
         */
        bodyAssertions?: Array<{
          /** Target body value to compare against. */
          target: string;
          /** String assertion comparator. */
          comparator: "STRING_COMPARATOR_CONTAINS" | "STRING_COMPARATOR_NOT_CONTAINS" | "STRING_COMPARATOR_EQUAL" | "STRING_COMPARATOR_NOT_EQUAL" | "STRING_COMPARATOR_EMPTY" | "STRING_COMPARATOR_NOT_EMPTY" | "STRING_COMPARATOR_GREATER_THAN" | "STRING_COMPARATOR_GREATER_THAN_OR_EQUAL" | "STRING_COMPARATOR_LESS_THAN" | "STRING_COMPARATOR_LESS_THAN_OR_EQUAL";
        }>;
        /**
         * HTTP response header assertions.
         * @maxItems 10
         */
        headerAssertions?: Array<{
          /**
           * Header name to check.
           * @minLength 1
           */
          key: string;
          /** Target header value to compare against. */
          target: string;
          /** String assertion comparator. */
          comparator: "STRING_COMPARATOR_CONTAINS" | "STRING_COMPARATOR_NOT_CONTAINS" | "STRING_COMPARATOR_EQUAL" | "STRING_COMPARATOR_NOT_EQUAL" | "STRING_COMPARATOR_EMPTY" | "STRING_COMPARATOR_NOT_EMPTY" | "STRING_COMPARATOR_GREATER_THAN" | "STRING_COMPARATOR_GREATER_THAN_OR_EQUAL" | "STRING_COMPARATOR_LESS_THAN" | "STRING_COMPARATOR_LESS_THAN_OR_EQUAL";
        }>;
        /**
         * Monitor description.
         * @maxLength 1024
         */
        description?: string;
        /** Whether the monitor is active. */
        active?: boolean;
        /** Whether the monitor is publicly visible. */
        public?: boolean;
        /**
         * Regions used to run or filter monitor checks.
         * @minItems 1
         * @maxItems 28
         */
        regions?: Array<"REGION_FLY_AMS" | "REGION_FLY_ARN" | "REGION_FLY_BOM" | "REGION_FLY_CDG" | "REGION_FLY_DFW" | "REGION_FLY_EWR" | "REGION_FLY_FRA" | "REGION_FLY_GRU" | "REGION_FLY_IAD" | "REGION_FLY_JNB" | "REGION_FLY_LAX" | "REGION_FLY_LHR" | "REGION_FLY_NRT" | "REGION_FLY_ORD" | "REGION_FLY_SJC" | "REGION_FLY_SIN" | "REGION_FLY_SYD" | "REGION_FLY_YYZ" | "REGION_KOYEB_FRA" | "REGION_KOYEB_PAR" | "REGION_KOYEB_SFO" | "REGION_KOYEB_SIN" | "REGION_KOYEB_TYO" | "REGION_KOYEB_WAS" | "REGION_RAILWAY_US_WEST2" | "REGION_RAILWAY_US_EAST4" | "REGION_RAILWAY_EUROPE_WEST4" | "REGION_RAILWAY_ASIA_SOUTHEAST1">;
        /** OpenTelemetry export configuration for monitor metrics. */
        openTelemetry?: {
          /**
           * OpenTelemetry endpoint URL.
           * @maxLength 2048
           * @format uri
           */
          endpoint: string;
          /**
           * Headers sent to the OpenTelemetry endpoint.
           * @maxItems 20
           */
          headers?: Array<{
            /**
             * Header name.
             * @minLength 1
             */
            key: string;
            /** Header value. */
            value: string;
          }>;
        };
      };
      output: {
        /** OpenStatus monitor returned by the API. */
        monitor: {
          /** Monitor ID. */
          id?: string;
          /** Monitor name. */
          name?: string;
          /** HTTP monitor URL. */
          url?: string;
          /** TCP or DNS monitor URI. */
          uri?: string;
          /** Monitor check periodicity. */
          periodicity?: string;
          /** HTTP method for HTTP monitors. */
          method?: string;
          /** Whether the monitor is active. */
          active?: boolean;
          /** Whether the monitor is public. */
          public?: boolean;
          /** Current monitor status. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
