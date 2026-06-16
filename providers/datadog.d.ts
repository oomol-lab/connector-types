import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Datadog metadata for one metric. */
    "datadog.get_metric_metadata": {
      input: {
        /**
         * The Datadog metric name.
         * @minLength 1
         */
        metricName: string;
      };
      output: {
        /** Datadog metric metadata. */
        metric: {
          /** The Datadog metric name. */
          metric: string | null;
          /** The Datadog metric type. */
          type: string | null;
          /** The metric description when available. */
          description: string | null;
          /** The integration that owns the metric when available. */
          integration: string | null;
          /** The metric unit when available. */
          unit: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Datadog monitor by ID. */
    "datadog.get_monitor": {
      input: {
        /** The Datadog monitor ID. */
        monitorId: number;
        /**
         * Monitor group states to include.
         * @minItems 1
         */
        groupStates?: Array<"all" | "alert" | "warn" | "no data" | "ok">;
        /** Whether to include monitor downtimes in the response. */
        withDowntimes?: boolean;
      };
      output: {
        /** A normalized Datadog monitor. */
        monitor: {
          /** The Datadog monitor ID. */
          id: number | null;
          /** The monitor name. */
          name: string | null;
          /** The monitor type. */
          type: string | null;
          /** The monitor query. */
          query: string | null;
          /** The monitor notification message. */
          message: string | null;
          /** The monitor tags returned by Datadog. */
          tags: Array<string>;
          /** The monitor overall_state value returned by Datadog. */
          overallState: string | null;
          /** The raw Datadog API object. */
          creator: Record<string, unknown> | null;
          /** The raw Datadog API object. */
          options: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Datadog metric names active since a given Unix timestamp. */
    "datadog.list_metrics": {
      input: {
        /** Unix timestamp in seconds for the earliest active metric time. */
        from: number;
        /**
         * Filter metrics by host.
         * @minLength 1
         */
        host?: string;
        /**
         * Filter metrics by Datadog tag expression.
         * @minLength 1
         */
        tagFilter?: string;
      };
      output: {
        /** Metric names returned by Datadog. */
        metrics: Array<string>;
        /** The raw Datadog API object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Datadog monitors with optional group state and tag filters. */
    "datadog.list_monitors": {
      input: {
        /**
         * Monitor group states to include.
         * @minItems 1
         */
        groupStates?: Array<"all" | "alert" | "warn" | "no data" | "ok">;
        /**
         * Filter monitors by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter monitors by tags.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Filter monitors by monitor tags.
         * @minItems 1
         */
        monitorTags?: Array<string>;
        /** Whether to include monitor downtimes in the response. */
        withDowntimes?: boolean;
      };
      output: {
        /** Monitors returned by Datadog. */
        monitors: Array<{
          /** The Datadog monitor ID. */
          id: number | null;
          /** The monitor name. */
          name: string | null;
          /** The monitor type. */
          type: string | null;
          /** The monitor query. */
          query: string | null;
          /** The monitor notification message. */
          message: string | null;
          /** The monitor tags returned by Datadog. */
          tags: Array<string>;
          /** The monitor overall_state value returned by Datadog. */
          overallState: string | null;
          /** The raw Datadog API object. */
          creator: Record<string, unknown> | null;
          /** The raw Datadog API object. */
          options: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Raw Datadog monitor objects. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Query Datadog timeseries points for a metric expression and time window. */
    "datadog.query_timeseries_points": {
      input: {
        /** Unix timestamp in seconds for the query start. */
        from: number;
        /** Unix timestamp in seconds for the query end. */
        to: number;
        /**
         * Datadog metric query expression.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The Datadog query status. */
        status: string | null;
        /** The Datadog response type. */
        resType: string | null;
        /** Timeseries returned by Datadog. */
        series: Array<{
          /** The metric name for the timeseries. */
          metric: string | null;
          /** The metric scope returned by Datadog. */
          scope: string | null;
          /** The query expression that produced the timeseries. */
          expression: string | null;
          /** The display name returned by Datadog. */
          displayName: string | null;
          /** The unit metadata returned by Datadog. */
          unit: Array<Record<string, unknown>>;
          /** The points returned by Datadog as timestamp-value pairs. */
          pointlist: Array<Array<number | null>>;
          [key: string]: unknown;
        }>;
        /** The raw Datadog API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Datadog monitors by query, page, and sort options. */
    "datadog.search_monitors": {
      input: {
        /**
         * Search query for monitors.
         * @minLength 1
         */
        query?: string;
        /**
         * Search results page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of monitors per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * Datadog monitor search sort field.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Monitor search results returned by Datadog. */
        monitors: Array<{
          /** The Datadog monitor ID. */
          id: number | null;
          /** The monitor name. */
          name: string | null;
          /** The monitor type. */
          type: string | null;
          /** The monitor query. */
          query: string | null;
          /** The monitor tags returned by Datadog. */
          tags: Array<string>;
          /** The monitor overall_state value returned by Datadog. */
          overallState: string | null;
          [key: string]: unknown;
        }>;
        /** The raw Datadog API object. */
        counts: Record<string, unknown> | null;
        /** The raw Datadog API object. */
        metadata: Record<string, unknown> | null;
        /** The raw Datadog API object. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate the configured Datadog API key. */
    "datadog.validate_api_key": {
      input: Record<string, never>;
      output: {
        /** Whether Datadog accepted the API key. */
        valid: boolean;
        /** The raw Datadog API object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
