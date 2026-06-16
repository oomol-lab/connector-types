import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Export raw datapoints from the Simple Analytics Export API. */
    "simple_analytics.export_data_points": {
      input: {
        /**
         * The website hostname tracked in Simple Analytics.
         * @minLength 1
         */
        hostname: string;
        /**
         * Start date or hour for the export.
         * @minLength 1
         */
        start: string;
        /**
         * End date or hour for the export.
         * @minLength 1
         */
        end: string;
        /**
         * IANA timezone used to interpret the selected date range.
         * @minLength 1
         */
        timezone?: string;
        /** Export response format. */
        format?: "csv" | "json";
        /**
         * Specific export fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Datapoint type filter used by the export. */
        type?: "pageviews" | "events" | "all";
      };
      output: {
        /** Export response format returned by the provider. */
        format: "csv" | "json";
        /** CSV payload when the export format is csv. */
        csv?: string;
        /** Datapoints returned by the Export API when the format is json. */
        datapoints?: Array<{
          /** ISO 8601 timestamp when the datapoint was recorded. */
          added_iso?: string;
          /** Hostname associated with the datapoint. */
          hostname?: string;
          /** Page path associated with the datapoint. */
          path?: string;
          /** Session identifier associated with the datapoint. */
          session_id?: string;
          /** Whether the datapoint is marked as unique. */
          is_unique?: boolean;
          [key: string]: unknown;
        }>;
        /** Export metadata returned by Simple Analytics. */
        meta?: {
          /** Number of datapoints returned by the export. */
          amount?: number;
          /** Time spent generating the export in milliseconds. */
          finishedInMs?: number;
          [key: string]: unknown;
        };
        /** The raw export payload returned by Simple Analytics. */
        raw?: Record<string, unknown> | Array<{
          /** ISO 8601 timestamp when the datapoint was recorded. */
          added_iso?: string;
          /** Hostname associated with the datapoint. */
          hostname?: string;
          /** Page path associated with the datapoint. */
          path?: string;
          /** Session identifier associated with the datapoint. */
          session_id?: string;
          /** Whether the datapoint is marked as unique. */
          is_unique?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get aggregated website statistics from the Simple Analytics Stats API. */
    "simple_analytics.get_aggregated_stats": {
      input: {
        /**
         * The website hostname tracked in Simple Analytics.
         * @minLength 1
         */
        hostname: string;
        /**
         * Start date for the selected range.
         * @minLength 1
         */
        start?: string;
        /**
         * End date for the selected range.
         * @minLength 1
         */
        end?: string;
        /**
         * IANA timezone used to interpret the selected date range.
         * @minLength 1
         */
        timezone?: string;
        /** Filter the response to a specific page path. */
        page?: string;
        /** Filter the response to a specific referrer. */
        referrer?: string;
        /** Whether to include the histogram field in the response. */
        includeHistogram?: boolean;
        /**
         * Specific event names to aggregate in the response.
         * @minItems 1
         */
        eventNames?: Array<string>;
      };
      output: {
        /** Whether the Stats API request succeeded. */
        ok: boolean;
        /** Documentation URL returned by the Stats API. */
        docs?: string;
        /** Hostname used for the stats request. */
        hostname?: string;
        /** Website URL associated with the hostname. */
        url?: string;
        /** Path scope applied to the stats request. */
        path?: string;
        /** Resolved start timestamp for the stats response. */
        start?: string;
        /** Resolved end timestamp for the stats response. */
        end?: string;
        /** Stats API version used for the response. */
        version?: number;
        /** Timezone used to generate the stats response. */
        timezone?: string;
        /** Total pageviews in the selected range. */
        pageviews?: number;
        /** Total visitors in the selected range. */
        visitors?: number;
        /** Median seconds on page in the selected range. */
        seconds_on_page?: number;
        /** Page buckets returned by the Stats API. */
        pages?: Array<{
          /** Bucket label returned by Simple Analytics. */
          value: string;
          /** Total pageviews counted for the bucket. */
          pageviews: number;
          /** Total unique visitors counted for the bucket. */
          visitors: number;
          /** Median seconds on page for the bucket when Simple Analytics includes it. */
          seconds_on_page?: number;
        }>;
        /** Country buckets returned by the Stats API. */
        countries?: Array<{
          /** Bucket label returned by Simple Analytics. */
          value: string;
          /** Total pageviews counted for the bucket. */
          pageviews: number;
          /** Total unique visitors counted for the bucket. */
          visitors: number;
          /** Median seconds on page for the bucket when Simple Analytics includes it. */
          seconds_on_page?: number;
        }>;
        /** Referrer buckets returned by the Stats API. */
        referrers?: Array<{
          /** Bucket label returned by Simple Analytics. */
          value: string;
          /** Total pageviews counted for the bucket. */
          pageviews: number;
          /** Total unique visitors counted for the bucket. */
          visitors: number;
          /** Median seconds on page for the bucket when Simple Analytics includes it. */
          seconds_on_page?: number;
        }>;
        /** Browser buckets returned by the Stats API. */
        browser_names?: Array<{
          /** Bucket label returned by Simple Analytics. */
          value: string;
          /** Total pageviews counted for the bucket. */
          pageviews: number;
          /** Total unique visitors counted for the bucket. */
          visitors: number;
          /** Median seconds on page for the bucket when Simple Analytics includes it. */
          seconds_on_page?: number;
        }>;
        /** OS buckets returned by the Stats API. */
        os_names?: Array<{
          /** Bucket label returned by Simple Analytics. */
          value: string;
          /** Total pageviews counted for the bucket. */
          pageviews: number;
          /** Total unique visitors counted for the bucket. */
          visitors: number;
          /** Median seconds on page for the bucket when Simple Analytics includes it. */
          seconds_on_page?: number;
        }>;
        /** Device type buckets returned by the Stats API. */
        device_types?: Array<{
          /** Bucket label returned by Simple Analytics. */
          value: string;
          /** Total pageviews counted for the bucket. */
          pageviews: number;
          /** Total unique visitors counted for the bucket. */
          visitors: number;
          /** Median seconds on page for the bucket when Simple Analytics includes it. */
          seconds_on_page?: number;
        }>;
        /** Histogram buckets returned by the Stats API. */
        histogram?: Array<{
          /** Date label for the histogram bucket in YYYY-MM-DD format. */
          date: string;
          /** Total pageviews in the histogram bucket. */
          pageviews: number;
          /** Total visitors in the histogram bucket. */
          visitors: number;
        }>;
        /** Event totals returned by the Stats API. */
        events?: Array<{
          /** Event name returned by Simple Analytics. */
          name: string;
          /** Total event count for the selected range. */
          total: number;
        }>;
        /** Server-side generation time reported by Simple Analytics. */
        generated_in_ms?: number;
        /** The raw Stats API payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** List websites available to the authenticated Simple Analytics account. */
    "simple_analytics.list_websites": {
      input: Record<string, never>;
      output: {
        /** Whether the Admin API request succeeded. */
        success: boolean;
        /** Tracked websites returned by the Admin API. */
        websites: Array<{
          /** Tracked website hostname. */
          hostname: string;
          /** Whether the website is publicly accessible. */
          is_public: boolean;
          /** Timezone configured for the website. */
          timezone: string;
          /** Whether the website serves traffic over HTTPS. */
          has_ssl: boolean;
          /** Whether the tracking script was detected on the website. */
          has_script: boolean;
          /** Total pageviews recorded for the website. */
          pageviews: number;
          /** Total custom events recorded for the website. */
          events: number;
          /** Custom analytics hostname configured for the website when present. */
          own_hostname?: string;
        }>;
      };
    };
    /** Send a server-side event or pageview to Simple Analytics. */
    "simple_analytics.send_event": {
      input: {
        /** Type of server-side submission to send. */
        type: "event" | "pageview";
        /**
         * The website hostname tracked in Simple Analytics.
         * @minLength 1
         */
        hostname: string;
        /**
         * Event name recorded by Simple Analytics.
         * @minLength 1
         */
        event: string;
        /**
         * User agent string sent to the server-side events endpoint.
         * @minLength 1
         */
        ua: string;
        /** Page path associated with the event. */
        path?: string;
        /** Referrer URL associated with the event. */
        referrer?: string;
        /** UTM source associated with the event. */
        source?: string;
        /** UTM campaign associated with the event. */
        campaign?: string;
        /** Flat metadata values attached to the server-side event. */
        metadata?: Record<string, string | number | boolean>;
      };
      output: {
        /** Whether the event submission was accepted. */
        success: boolean;
        /** Optional message returned by the events endpoint. */
        message?: string;
      };
    };
  }
}
