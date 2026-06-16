import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Query Plausible analytics grouped by a single dimension such as source, page, country, or browser. */
    "plausible_analytics.get_breakdown_stats": {
      input: {
        /**
         * Site identifier in Plausible. When omitted, the provider falls back to the default site configured on the connection.
         * @minLength 1
         */
        site_id?: string;
        /** Date range to query, such as '7d', '30d', 'month', or a custom [from, to] ISO date tuple. */
        date_range: string | [string, string];
        /**
         * Metrics to calculate for the query.
         * @minItems 1
         */
        metrics: Array<string>;
        /**
         * Dimension identifier accepted by the Plausible Stats API.
         * @minLength 1
         */
        dimension: string;
        /** Plausible filter expression array passed through to the Stats API. */
        filters?: Array<unknown>;
        /** Plausible order_by expression array passed through to the Stats API. */
        order_by?: Array<unknown>;
        /** Optional include flags supported by the Plausible Stats API. */
        include?: {
          /** Whether imported stats should be included when supported. */
          imports?: boolean;
          /** Whether the response should include rendered time_labels. */
          time_labels?: boolean;
          /** Whether the response should include total_rows metadata. */
          total_rows?: boolean;
          [key: string]: unknown;
        };
        /** Pagination options passed through to the Plausible Stats API. */
        pagination?: {
          /**
           * Maximum number of rows to return.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /**
           * Zero-based offset for paginated queries.
           * @minimum 0
           */
          offset?: number;
          [key: string]: unknown;
        };
      };
      output: {
        /** Ordered result rows returned by the query. */
        results: Array<{
          /** Dimension values returned for this row, in the same order as the query dimensions. */
          dimensions?: Array<string | number | null>;
          /** Metric values returned for this row, in the same order as the query metrics. */
          metrics: Array<string | number | null>;
          [key: string]: unknown;
        }>;
        /** Query metadata returned by Plausible. */
        meta?: {
          /** Warnings returned by the Plausible Stats API. */
          warnings?: Array<string>;
          /** Whether imported data was included in the query response. */
          imports_included?: boolean;
          /** Reason why imported data was skipped, when applicable. */
          imports_skip_reason?: string;
          /** Human-readable warning for skipped imported data, when applicable. */
          imports_warning?: string;
          /** Metric-specific warnings returned by Plausible. */
          metric_warnings?: Record<string, unknown>;
          /** Rendered time labels returned when include.time_labels is enabled. */
          time_labels?: Array<string>;
          /** Total number of rows available for the query when include.total_rows is enabled. */
          total_rows?: number;
          [key: string]: unknown;
        };
        /** Resolved query echoed by Plausible. */
        query?: {
          /** Resolved site identifier used for the query. */
          site_id?: string;
          /** Resolved date range used for the query. */
          date_range?: string | [string, string];
          /**
           * Resolved metrics used for the query.
           * @minItems 1
           */
          metrics?: Array<string>;
          /** Resolved dimensions used for the query. */
          dimensions?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Query Plausible analytics as a timeseries grouped by a time dimension such as day or hour. */
    "plausible_analytics.get_timeseries_stats": {
      input: {
        /**
         * Site identifier in Plausible. When omitted, the provider falls back to the default site configured on the connection.
         * @minLength 1
         */
        site_id?: string;
        /** Date range to query, such as '7d', '30d', 'month', or a custom [from, to] ISO date tuple. */
        date_range: string | [string, string];
        /**
         * Metrics to calculate for the query.
         * @minItems 1
         */
        metrics: Array<string>;
        /** Time dimension used to build a timeseries query. */
        interval: "time:hour" | "time:day" | "time:week" | "time:month";
        /** Plausible filter expression array passed through to the Stats API. */
        filters?: Array<unknown>;
        /** Plausible order_by expression array passed through to the Stats API. */
        order_by?: Array<unknown>;
        /** Optional include flags supported by the Plausible Stats API. */
        include?: {
          /** Whether imported stats should be included when supported. */
          imports?: boolean;
          /** Whether the response should include rendered time_labels. */
          time_labels?: boolean;
          /** Whether the response should include total_rows metadata. */
          total_rows?: boolean;
          [key: string]: unknown;
        };
        /** Pagination options passed through to the Plausible Stats API. */
        pagination?: {
          /**
           * Maximum number of rows to return.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /**
           * Zero-based offset for paginated queries.
           * @minimum 0
           */
          offset?: number;
          [key: string]: unknown;
        };
      };
      output: {
        /** Ordered result rows returned by the query. */
        results: Array<{
          /** Dimension values returned for this row, in the same order as the query dimensions. */
          dimensions?: Array<string | number | null>;
          /** Metric values returned for this row, in the same order as the query metrics. */
          metrics: Array<string | number | null>;
          [key: string]: unknown;
        }>;
        /** Query metadata returned by Plausible. */
        meta?: {
          /** Warnings returned by the Plausible Stats API. */
          warnings?: Array<string>;
          /** Whether imported data was included in the query response. */
          imports_included?: boolean;
          /** Reason why imported data was skipped, when applicable. */
          imports_skip_reason?: string;
          /** Human-readable warning for skipped imported data, when applicable. */
          imports_warning?: string;
          /** Metric-specific warnings returned by Plausible. */
          metric_warnings?: Record<string, unknown>;
          /** Rendered time labels returned when include.time_labels is enabled. */
          time_labels?: Array<string>;
          /** Total number of rows available for the query when include.total_rows is enabled. */
          total_rows?: number;
          [key: string]: unknown;
        };
        /** Resolved query echoed by Plausible. */
        query?: {
          /** Resolved site identifier used for the query. */
          site_id?: string;
          /** Resolved date range used for the query. */
          date_range?: string | [string, string];
          /**
           * Resolved metrics used for the query.
           * @minItems 1
           */
          metrics?: Array<string>;
          /** Resolved dimensions used for the query. */
          dimensions?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Query historical or real-time analytics for a Plausible site using the Stats API v2. */
    "plausible_analytics.query_stats": {
      input: {
        /**
         * Site identifier in Plausible. When omitted, the provider falls back to the default site configured on the connection.
         * @minLength 1
         */
        site_id?: string;
        /** Date range to query, such as '7d', '30d', 'month', or a custom [from, to] ISO date tuple. */
        date_range: string | [string, string];
        /**
         * Metrics to calculate for the query.
         * @minItems 1
         */
        metrics: Array<string>;
        /** Dimensions to group the query results by. */
        dimensions?: Array<string>;
        /** Plausible filter expression array passed through to the Stats API. */
        filters?: Array<unknown>;
        /** Plausible order_by expression array passed through to the Stats API. */
        order_by?: Array<unknown>;
        /** Optional include flags supported by the Plausible Stats API. */
        include?: {
          /** Whether imported stats should be included when supported. */
          imports?: boolean;
          /** Whether the response should include rendered time_labels. */
          time_labels?: boolean;
          /** Whether the response should include total_rows metadata. */
          total_rows?: boolean;
          [key: string]: unknown;
        };
        /** Pagination options passed through to the Plausible Stats API. */
        pagination?: {
          /**
           * Maximum number of rows to return.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /**
           * Zero-based offset for paginated queries.
           * @minimum 0
           */
          offset?: number;
          [key: string]: unknown;
        };
      };
      output: {
        /** Ordered result rows returned by the query. */
        results: Array<{
          /** Dimension values returned for this row, in the same order as the query dimensions. */
          dimensions?: Array<string | number | null>;
          /** Metric values returned for this row, in the same order as the query metrics. */
          metrics: Array<string | number | null>;
          [key: string]: unknown;
        }>;
        /** Query metadata returned by Plausible. */
        meta?: {
          /** Warnings returned by the Plausible Stats API. */
          warnings?: Array<string>;
          /** Whether imported data was included in the query response. */
          imports_included?: boolean;
          /** Reason why imported data was skipped, when applicable. */
          imports_skip_reason?: string;
          /** Human-readable warning for skipped imported data, when applicable. */
          imports_warning?: string;
          /** Metric-specific warnings returned by Plausible. */
          metric_warnings?: Record<string, unknown>;
          /** Rendered time labels returned when include.time_labels is enabled. */
          time_labels?: Array<string>;
          /** Total number of rows available for the query when include.total_rows is enabled. */
          total_rows?: number;
          [key: string]: unknown;
        };
        /** Resolved query echoed by Plausible. */
        query?: {
          /** Resolved site identifier used for the query. */
          site_id?: string;
          /** Resolved date range used for the query. */
          date_range?: string | [string, string];
          /**
           * Resolved metrics used for the query.
           * @minItems 1
           */
          metrics?: Array<string>;
          /** Resolved dimensions used for the query. */
          dimensions?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Record a pageview or custom event through the Plausible Events API for server-side or app tracking. */
    "plausible_analytics.record_event": {
      input: {
        /**
         * Site identifier used by Plausible for the event. When omitted, the provider falls back to the default site configured on the connection.
         * @minLength 1
         */
        domain?: string;
        /**
         * Event name. Use 'pageview' for a pageview event or any custom event name.
         * @minLength 1
         */
        name: string;
        /**
         * Absolute URL of the page or screen where the event happened.
         * @minLength 1
         */
        url: string;
        /**
         * Referrer URL to associate with the event.
         * @minLength 1
         */
        referrer?: string;
        /** Custom event properties to attach to the recorded event. */
        props?: Record<string, string | number | boolean | null>;
        /** Revenue object accepted by the Plausible Events API. */
        revenue?: {
          /**
           * ISO 4217 currency code, such as USD or EUR.
           * @minLength 3
           */
          currency: string;
          /** Revenue amount as a number or numeric string. */
          amount: number | string;
        };
        /** Whether the event should count as interactive for bounce calculations. */
        interactive?: boolean;
        /**
         * Custom User-Agent header to send with the event request.
         * @minLength 1
         */
        userAgent?: string;
        /**
         * IP address or X-Forwarded-For chain to send with the event request.
         * @minLength 1
         */
        forwardedFor?: string;
        /** Whether to enable Plausible debug mode with the X-Debug-Request header. */
        debugRequest?: boolean;
      };
      output: Record<string, unknown>;
    };
  }
}
