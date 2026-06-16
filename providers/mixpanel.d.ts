import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Export raw Mixpanel events for a project and date range. */
    "mixpanel.export_events": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /**
         * Start date for the raw event export.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_date: string;
        /**
         * End date for the raw event export.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_date: string;
        /**
         * Optional event names to include in the raw event export.
         * @minItems 1
         */
        event?: Array<string>;
        /**
         * Optional Mixpanel where expression used to filter exported events.
         * @minLength 1
         */
        where?: string;
      };
      output: {
        /** Raw JSONL response body returned by the Mixpanel export API. */
        jsonl: string;
        /** Number of JSON event lines parsed from the export response. */
        event_count: number;
        /** Parsed raw events returned by the export. */
        events: Array<{
          /** Event name returned by the raw export. */
          event?: string;
          /** Event properties returned by the raw export line. */
          properties?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List saved funnels available in a Mixpanel project. */
    "mixpanel.list_funnels": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
      };
      output: {
        /** Saved funnels returned by Mixpanel. */
        funnels: Array<{
          /** Saved funnel identifier. */
          funnel_id: string | number;
          /** Saved funnel name. */
          name: string;
          [key: string]: unknown;
        }>;
        /** Raw saved funnel objects returned by Mixpanel. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List saved cohorts available in a Mixpanel project. */
    "mixpanel.list_saved_cohorts": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
      };
      output: {
        /** Saved cohorts returned by Mixpanel. */
        cohorts: Array<{
          /** Saved cohort identifier. */
          id: string | number;
          /** Saved cohort name. */
          name: string;
          /** Current cohort member count. */
          count?: number;
          /** Saved cohort description when Mixpanel returns one. */
          description?: string | null;
          /** Whether the saved cohort is visible in the Mixpanel UI. */
          is_visible?: boolean;
          /** Creation timestamp returned by Mixpanel when available. */
          created?: string | null;
          [key: string]: unknown;
        }>;
        /** Raw saved cohort objects returned by Mixpanel. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Get event activity for one or more Mixpanel profiles over a date range. */
    "mixpanel.profile_event_activity": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
        /**
         * Distinct IDs to fetch activity for.
         * @minItems 1
         */
        distinct_ids: Array<string>;
        /**
         * Start date for the activity query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_date: string;
        /**
         * End date for the activity query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_date: string;
      };
      output: {
        /** Status returned by Mixpanel. */
        status?: string;
        /** Activity-feed events returned by Mixpanel. */
        events: Array<{
          /** Event name returned in the profile activity feed. */
          event: string;
          /** Event properties attached to a profile-activity event. */
          properties: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Raw profile activity payload returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
    /** Query how frequently users perform an event in Mixpanel. */
    "mixpanel.query_frequency_report": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
        /**
         * Start date for the frequency query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_date: string;
        /**
         * End date for the frequency query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_date: string;
        /** Overall time period to return event frequency for. */
        unit: "day" | "week" | "month";
        /** Granularity used inside each frequency bucket. */
        addiction_unit: "hour" | "day";
        /**
         * Optional event name to measure frequency for.
         * @minLength 1
         */
        event?: string;
        /**
         * Optional Mixpanel expression used to filter the event.
         * @minLength 1
         */
        where?: string;
        /**
         * Optional Mixpanel expression used to segment the frequency report.
         * @minLength 1
         */
        on?: string;
        /**
         * Maximum number of segmented property values to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Raw frequency payload returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
    /** Query a saved Mixpanel funnel report over a date range. */
    "mixpanel.query_funnel": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
        /** Saved funnel identifier. */
        funnel_id: string | number;
        /**
         * Start date for the funnel query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_date: string;
        /**
         * End date for the funnel query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_date: string;
        /**
         * Maximum number of units each user has to complete the funnel.
         * @maximum 90
         * @exclusiveMinimum 0
         */
        length?: number;
        /** Unit used by the length parameter. */
        length_unit?: "second" | "minute" | "hour" | "day";
        /**
         * Number of days to include in each bucket.
         * @exclusiveMinimum 0
         */
        interval?: number;
        /** Alternate time unit for bucketing the funnel report. */
        unit?: "day" | "week" | "month";
        /**
         * Optional Mixpanel expression used to segment the funnel report.
         * @minLength 1
         */
        on?: string;
        /**
         * Optional Mixpanel expression used to filter funnel events.
         * @minLength 1
         */
        where?: string;
        /**
         * Maximum number of segmented property values to return.
         * @maximum 10000
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Raw saved funnel payload returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
    /** Average a numeric expression for a Mixpanel event over time. */
    "mixpanel.query_numeric_average": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
        /**
         * Event name to aggregate.
         * @minLength 1
         */
        event: string;
        /**
         * Start date for the numeric average query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_date: string;
        /**
         * End date for the numeric average query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_date: string;
        /**
         * Numeric Mixpanel expression to average per unit time.
         * @minLength 1
         */
        on: string;
        /** Time unit used for bucketing the numeric average query. */
        unit?: "hour" | "day";
        /**
         * Optional Mixpanel expression used to filter events before averaging.
         * @minLength 1
         */
        where?: string;
      };
      output: {
        /** Status returned by Mixpanel. */
        status?: string;
        /** Timestamp when Mixpanel computed the numeric average report. */
        computed_at?: string;
        /** Numeric average results keyed by date. */
        results: Record<string, number | null>;
        /** Raw numeric average payload returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
    /** Sum a numeric expression for a Mixpanel event over time. */
    "mixpanel.query_numeric_sum": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
        /**
         * Event name to aggregate.
         * @minLength 1
         */
        event: string;
        /**
         * Start date for the numeric sum query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_date: string;
        /**
         * End date for the numeric sum query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_date: string;
        /**
         * Numeric Mixpanel expression to sum per unit time.
         * @minLength 1
         */
        on: string;
        /** Time unit used for bucketing the numeric sum query. */
        unit?: "hour" | "day";
        /**
         * Optional Mixpanel expression used to filter events before summing.
         * @minLength 1
         */
        where?: string;
      };
      output: {
        /** Status returned by Mixpanel. */
        status?: string;
        /** Timestamp when Mixpanel computed the numeric sum report. */
        computed_at?: string;
        /** Numeric sum results keyed by date. */
        results: Record<string, number | null>;
        /** Raw numeric sum payload returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
    /** Query Mixpanel profiles with optional filters, paging, and selected properties. */
    "mixpanel.query_profiles": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
        /**
         * Optional distinct IDs to filter the profile query.
         * @minItems 1
         */
        distinct_ids?: Array<string>;
        /**
         * Optional Mixpanel where expression used to filter profiles.
         * @minLength 1
         */
        where?: string;
        /**
         * Optional profile properties to include in the response.
         * @minItems 1
         */
        output_properties?: Array<string>;
        /**
         * Pagination session ID returned by a previous Mixpanel profile query.
         * @minLength 1
         */
        session_id?: string;
        /**
         * Zero-based page number used together with session_id when paginating.
         * @minimum 0
         */
        page?: number;
      };
      output: {
        /** Current page number returned by Mixpanel. */
        page?: number;
        /** Number of profiles returned in the current page. */
        page_size?: number;
        /** Pagination session ID returned by Mixpanel for subsequent pages. */
        session_id?: string;
        /** Total number of matching profiles. */
        total?: number;
        /** Profiles returned by the Mixpanel query. */
        results: Array<{
          /** Distinct ID for the profile. */
          $distinct_id?: string;
          /** Last seen timestamp for the profile. */
          $last_seen?: string;
          /** Email property returned for the profile when available. */
          $email?: string;
          [key: string]: unknown;
        }>;
        /** Raw profile query payload returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
    /** Query a Mixpanel retention report over a date range. */
    "mixpanel.query_retention_report": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
        /**
         * Start date for the retention query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_date: string;
        /**
         * End date for the retention query.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_date: string;
        /** Type of retention analysis to run. */
        retention_type?: "birth" | "compounded";
        /**
         * Initial event that defines the entry cohort for birth retention.
         * @minLength 1
         */
        born_event?: string;
        /**
         * Target event to measure retention against.
         * @minLength 1
         */
        event?: string;
        /**
         * Optional Mixpanel expression used to filter born_event.
         * @minLength 1
         */
        born_where?: string;
        /**
         * Optional Mixpanel expression used to filter retained events.
         * @minLength 1
         */
        where?: string;
        /**
         * Number of units per returned interval bucket.
         * @exclusiveMinimum 0
         */
        interval?: number;
        /**
         * Number of interval buckets to return.
         * @exclusiveMinimum 0
         */
        interval_count?: number;
        /** Interval unit used for the retention query. */
        unit?: "day" | "week" | "month";
        /** Whether retention counts should accumulate from right to left. */
        unbounded_retention?: boolean;
        /**
         * Optional Mixpanel expression used to segment the retention report.
         * @minLength 1
         */
        on?: string;
        /**
         * Maximum number of segmented property values to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Raw retention payload returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
    /** Query a saved Mixpanel report by bookmark ID. */
    "mixpanel.query_saved_report": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
        /** Saved report bookmark ID. */
        bookmark_id: string | number;
      };
      output: {
        /** Raw saved report payload returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
    /** Query a Mixpanel segmentation report for one event over a date range. */
    "mixpanel.query_segmentation_report": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /**
         * Event name to query in the segmentation report.
         * @minLength 1
         */
        event: string;
        /**
         * Start date for the segmentation report.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        from_date: string;
        /**
         * End date for the segmentation report.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        to_date: string;
        /**
         * Optional Mixpanel expression used to group or break down the report.
         * @minLength 1
         */
        on?: string;
        /**
         * Optional interval unit accepted by Mixpanel, such as day, hour, or month.
         * @minLength 1
         */
        unit?: string;
        /**
         * Optional measurement type accepted by Mixpanel, such as general or unique.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** Raw segmentation response returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
    /** Get today's top Mixpanel events with counts and percent change from yesterday. */
    "mixpanel.query_top_events": {
      input: {
        /** Project ID to query. When omitted, the provider falls back to the default project configured on the connection. */
        project_id?: string | number;
        /** Optional workspace ID accepted by Mixpanel query endpoints that support workspace scoping. */
        workspace_id?: string | number;
        /** Analysis type used by the top-events query. */
        type: "general" | "unique" | "average";
        /**
         * Maximum number of top events to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Analysis type returned by Mixpanel. */
        type: "general" | "unique" | "average";
        /** Top events returned by Mixpanel. */
        events: Array<{
          /** Event name returned by Mixpanel. */
          event: string;
          /** Event count or computed value returned by Mixpanel. */
          amount: number;
          /** Percent change from the previous comparison window. */
          percent_change: number;
        }>;
        /** Raw top-events payload returned by Mixpanel. */
        raw: Record<string, unknown>;
      };
    };
  }
}
