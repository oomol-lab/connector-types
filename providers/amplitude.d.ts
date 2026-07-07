import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Amplitude event segmentation metrics for one or two event queries. */
    "amplitude.get_event_segmentation": {
      input: {
        /** An Amplitude event query object. */
        event: {
          /**
           * The Amplitude event type to query.
           * @minLength 1
           */
          event_type: string;
          /** Optional event or user property filters. */
          filters?: Array<Record<string, unknown>>;
          /** Optional event or user properties to group by. */
          group_by?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** An Amplitude event query object. */
        secondEvent?: {
          /**
           * The Amplitude event type to query.
           * @minLength 1
           */
          event_type: string;
          /** Optional event or user property filters. */
          filters?: Array<Record<string, unknown>>;
          /** Optional event or user properties to group by. */
          group_by?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * A date formatted as YYYYMMDD.
         * @minLength 8
         * @maxLength 8
         */
        start: string;
        /**
         * A date formatted as YYYYMMDD.
         * @minLength 8
         * @maxLength 8
         */
        end: string;
        /** The Amplitude segmentation metric. */
        metric?: "uniques" | "totals" | "pct_dau" | "average" | "histogram" | "sums" | "value_avg" | "formula";
        /** The Amplitude user type filter. */
        userType?: "any" | "active";
        /** The Amplitude interval value, such as 1, 7, or 30. */
        interval?: number;
        /** Amplitude segment definitions. */
        segments?: Array<{
          /** The Amplitude user property or cohort property name. */
          prop?: string;
          /** The segment comparison operator. */
          op?: string;
          /** The segment values to match. */
          values?: Array<string>;
          /** The optional segment type, such as event. */
          type?: string;
          /** The event type used by a who-performed segment. */
          event_type?: string;
          [key: string]: unknown;
        }>;
        /**
         * The Amplitude property name to group by.
         * @minLength 1
         */
        groupBy?: string;
        /**
         * The second Amplitude property name to group by.
         * @minLength 1
         */
        secondGroupBy?: string;
        /**
         * The maximum number of group-by values to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Amplitude custom formula expression.
         * @minLength 1
         */
        formula?: string;
        /**
         * The rolling window size.
         * @exclusiveMinimum 0
         */
        rollingWindow?: number;
        /**
         * The rolling average size.
         * @exclusiveMinimum 0
         */
        rollingAverage?: number;
        /** The Amplitude data residency region. */
        dataResidency?: "default" | "eu";
      };
      output: {
        /** Amplitude event segmentation result data. */
        result: {
          /** Metric series returned by Amplitude. */
          series?: Array<Array<number>>;
          /** Labels for each metric series. */
          seriesLabels?: Array<string>;
          /** Collapsed metric values returned by Amplitude. */
          seriesCollapsed?: Array<unknown>;
          /** Dates included in the result. */
          xValues?: Array<string>;
          [key: string]: unknown;
        };
        /** The raw Amplitude API response. */
        raw: unknown;
      };
    };
    /** Get an Amplitude user summary and recent or earliest activity events. */
    "amplitude.get_user_activity": {
      input: {
        /**
         * The Amplitude ID of the user.
         * @minLength 1
         */
        user: string;
        /**
         * The zero-indexed offset from the most recent event.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of events to return.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The event direction to return. */
        direction?: "earliest" | "latest";
        /** The Amplitude data residency region. */
        dataResidency?: "default" | "eu";
      };
      output: {
        /** Amplitude user summary fields. */
        userData: {
          /** The Amplitude user ID. */
          user_id?: string;
          /** The canonical Amplitude ID. */
          canonical_amplitude_id?: number;
          /** The total number of events for the user. */
          num_events?: number;
          /** The total number of sessions for the user. */
          num_sessions?: number;
          /** The first date the user was seen. */
          first_used?: string;
          /** The latest date the user was seen. */
          last_used?: string;
          [key: string]: unknown;
        };
        /** Amplitude user activity events. */
        events: Array<{
          /** The Amplitude event type. */
          event_type?: string;
          /** The event timestamp. */
          event_time?: string;
          /** The Amplitude event ID. */
          event_id?: number;
          /** The Amplitude user ID. */
          user_id?: string;
          /** The Amplitude ID. */
          amplitude_id?: number;
          [key: string]: unknown;
        }>;
        /** The raw Amplitude API response. */
        raw: unknown;
      };
    };
    /** List visible Amplitude events with current-week totals and display metadata. */
    "amplitude.list_events": {
      input: {
        /** The Amplitude data residency region. */
        dataResidency?: "default" | "eu";
      };
      output: {
        /** Amplitude events returned by the Dashboard REST API. */
        events: Array<{
          /** The raw Amplitude event name. */
          value?: string;
          /** The Amplitude display name for the event. */
          display?: string;
          /** The total event count for the current week. */
          totals?: number;
          /** Whether the event is hidden. */
          hidden?: boolean;
          /** Whether the event is deleted. */
          deleted?: boolean;
          /** Whether the event is marked inactive. */
          non_active?: boolean;
          /** Whether the event is hidden from Pathfinder surfaces. */
          flow_hidden?: boolean;
          [key: string]: unknown;
        }>;
        /** The raw Amplitude API response. */
        raw: unknown;
      };
    };
    /** Search for an Amplitude user by Amplitude ID, device ID, user ID, or prefix. */
    "amplitude.search_user": {
      input: {
        /**
         * The Amplitude ID, device ID, user ID, or user ID prefix to search.
         * @minLength 1
         */
        user: string;
        /** The Amplitude data residency region. */
        dataResidency?: "default" | "eu";
      };
      output: {
        /** Amplitude user matches. */
        matches: Array<{
          /** The Amplitude ID for the matched user. */
          amplitude_id?: number;
          /** The user ID for the matched user. */
          user_id?: string;
          [key: string]: unknown;
        }>;
        /** The match type returned by Amplitude. */
        type?: string;
        /** The raw Amplitude API response. */
        raw: unknown;
      };
    };
  }
}
