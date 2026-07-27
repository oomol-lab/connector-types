import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a saved Seq SQL query while preserving server-provided template defaults. */
    "datalust.create_saved_query": {
      input: {
        /**
         * The human-readable saved query title.
         * @minLength 1
         */
        title: string;
        /** The saved query description, or null to clear it. */
        description?: string | null;
        /** The Seq SQL query text, which may be empty for a placeholder query. */
        sql: string;
        /** Whether modifying the saved query requires Project permission. */
        isProtected?: boolean;
        /**
         * The owning Seq user identifier, or null to make the saved query shared.
         * @minLength 1
         */
        ownerId?: string | null;
      };
      output: {
        /** A normalized Seq saved query. */
        savedQuery: {
          /** The Seq saved query identifier. */
          id: string;
          /** The human-readable saved query title. */
          title: string;
          /** The saved query description when present. */
          description: string | null;
          /** The Seq SQL query text. */
          sql: string;
          /** Whether modifying the saved query requires Project permission. */
          isProtected: boolean;
          /** The owning Seq user identifier, or null for a shared query. */
          ownerId: string | null;
          /** The raw Seq saved query payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Seq signal while preserving server-provided template defaults. */
    "datalust.create_signal": {
      input: {
        /**
         * The human-readable signal title.
         * @minLength 1
         */
        title: string;
        /** The signal description, or null to clear it. */
        description?: string | null;
        /** The filters combined by the signal. */
        filters?: Array<{
          /**
           * The strict Seq filter expression.
           * @minLength 1
           */
          filter: string;
          /** The human-readable filter description, or null to clear it. */
          description?: string | null;
          /** Whether the description represents events excluded by the filter. */
          descriptionIsExcluded?: boolean;
          /** The original non-strict filter text shown for editing, or null to clear it. */
          filterNonStrict?: string | null;
        }>;
        /** The columns displayed for the signal. */
        columns?: Array<{
          /**
           * The Seq expression displayed in the column.
           * @minLength 1
           */
          expression: string;
        }>;
        /** Whether modifying the signal requires Project permission. */
        isProtected?: boolean;
        /** Whether the signal should have no backing index. */
        isIndexSuppressed?: boolean;
        /** How the signal is grouped in the Seq user interface. */
        grouping?: "Inferred" | "Explicit" | "None";
        /** The explicit signal group name, or null when explicit grouping is not used. */
        explicitGroupName?: string | null;
        /**
         * The owning Seq user identifier, or null to make the signal shared.
         * @minLength 1
         */
        ownerId?: string | null;
      };
      output: {
        /** A normalized Seq signal. */
        signal: {
          /** The Seq signal identifier. */
          id: string;
          /** The human-readable signal title. */
          title: string;
          /** The signal description when present. */
          description: string | null;
          /** The filters combined by the signal. */
          filters: Array<Record<string, unknown>>;
          /** The columns displayed for the signal. */
          columns: Array<Record<string, unknown>>;
          /** Whether modifying the signal requires Project permission. */
          isProtected: boolean;
          /** Whether the signal has no backing index. */
          isIndexSuppressed: boolean;
          /** The grouping mode returned by Seq. */
          grouping: unknown;
          /** The explicit signal group name when present. */
          explicitGroupName: string | null;
          /** The owning Seq user identifier, or null for a shared signal. */
          ownerId: string | null;
          /** The raw Seq signal payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a saved Seq SQL query by its identifier. */
    "datalust.delete_saved_query": {
      input: {
        /**
         * The Seq saved query identifier.
         * @minLength 1
         */
        queryId: string;
      };
      output: {
        /** Whether Seq accepted the saved query deletion request. */
        deleted: boolean;
        /** The HTTP status returned by Seq. */
        status: number;
      };
    };
    /** Delete a Seq signal by its identifier. */
    "datalust.delete_signal": {
      input: {
        /**
         * The Seq signal identifier.
         * @minLength 1
         */
        signalId: string;
      };
      output: {
        /** Whether Seq accepted the signal deletion request. */
        deleted: boolean;
        /** The HTTP status returned by Seq. */
        status: number;
      };
    };
    /** Execute a Seq SQL-style query and return its structured JSON result. */
    "datalust.execute_query": {
      input: {
        /**
         * The Seq SQL-style query to execute.
         * @minLength 1
         */
        query: string;
        /**
         * The earliest inclusive timestamp for the query.
         * @format date-time
         */
        rangeStartUtc?: string;
        /**
         * The latest exclusive timestamp for the query.
         * @format date-time
         */
        rangeEndUtc?: string;
        /**
         * A Seq signal identifier or signal expression.
         * @minLength 1
         */
        signal?: string;
        /**
         * The server-side query timeout in milliseconds.
         * @minimum 1
         */
        timeoutMs?: number;
        /** Values for free variables used by the query. */
        variables?: Record<string, unknown>;
      };
      output: {
        /** The result column names. */
        columns: Array<string>;
        /** The flat result rows when returned by Seq. */
        rows: Array<Array<unknown>>;
        /** The hierarchical time slices when returned by Seq. */
        slices: Array<unknown>;
        /** The time series when returned by Seq. */
        series: Array<unknown>;
        /** Variables returned with the query result. */
        variables: Record<string, unknown>;
        /** The query error when Seq returns a non-throwing query failure. */
        error: string | null;
        /** Detailed query error reasons. */
        reasons: Array<string>;
        /** A corrected query suggested by Seq when available. */
        suggestion: string | null;
        /** Seq query execution statistics. */
        statistics: Record<string, unknown>;
        /** The raw Seq query payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Read one Seq event by its event identifier. */
    "datalust.get_event": {
      input: {
        /**
         * The Seq event identifier.
         * @minLength 1
         */
        eventId: string;
        /** Whether Seq should include the rendered event message. */
        render?: boolean;
      };
      output: {
        /** A normalized Seq event. */
        event: {
          /** The Seq event identifier. */
          id: string;
          /** The ISO 8601 timestamp at which the event occurred. */
          timestamp: string;
          /** The ISO 8601 span start timestamp when the event is a span. */
          start: string | null;
          /** The properties attached to the event. */
          properties: Array<{
            /** The event property name. */
            name: string;
            /** The event property value. */
            value: unknown;
          }>;
          /** The Seq event type identifier when present. */
          eventType: string | null;
          /** The event level when present. */
          level: string | null;
          /** The exception or stack trace when present. */
          exception: string | null;
          /** The rendered event message when requested and available. */
          renderedMessage: string | null;
          /** The trace identifier when present. */
          traceId: string | null;
          /** The span identifier when present. */
          spanId: string | null;
          /** The parent span identifier when present. */
          parentId: string | null;
          /** The span kind when present. */
          spanKind: string | null;
          /** The raw Seq event payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Read one saved Seq SQL query by its identifier. */
    "datalust.get_saved_query": {
      input: {
        /**
         * The Seq saved query identifier.
         * @minLength 1
         */
        queryId: string;
      };
      output: {
        /** A normalized Seq saved query. */
        savedQuery: {
          /** The Seq saved query identifier. */
          id: string;
          /** The human-readable saved query title. */
          title: string;
          /** The saved query description when present. */
          description: string | null;
          /** The Seq SQL query text. */
          sql: string;
          /** Whether modifying the saved query requires Project permission. */
          isProtected: boolean;
          /** The owning Seq user identifier, or null for a shared query. */
          ownerId: string | null;
          /** The raw Seq saved query payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Read one saved Seq signal by its identifier. */
    "datalust.get_signal": {
      input: {
        /**
         * The Seq signal identifier.
         * @minLength 1
         */
        signalId: string;
        /** Whether Seq should return partial signal details. */
        partial?: boolean;
      };
      output: {
        /** A normalized Seq signal. */
        signal: {
          /** The Seq signal identifier. */
          id: string;
          /** The human-readable signal title. */
          title: string;
          /** The signal description when present. */
          description: string | null;
          /** The filters combined by the signal. */
          filters: Array<Record<string, unknown>>;
          /** The columns displayed for the signal. */
          columns: Array<Record<string, unknown>>;
          /** Whether modifying the signal requires Project permission. */
          isProtected: boolean;
          /** Whether the signal has no backing index. */
          isIndexSuppressed: boolean;
          /** The grouping mode returned by Seq. */
          grouping: unknown;
          /** The explicit signal group name when present. */
          explicitGroupName: string | null;
          /** The owning Seq user identifier, or null for a shared signal. */
          ownerId: string | null;
          /** The raw Seq signal payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Ingest one structured log event into Seq using compact log event format. */
    "datalust.ingest_event": {
      input: {
        /**
         * The ISO 8601 timestamp at which the event occurred.
         * @format date-time
         */
        timestamp: string;
        /** A fully rendered event message. */
        message?: string;
        /** A message template rendered with event properties. */
        messageTemplate?: string;
        /** The event level, such as Information, Warning, or Error. */
        level?: string;
        /** An exception or stack trace attached to the event. */
        exception?: string;
        /** An implementation-specific CLEF event type. */
        eventType?: string | number;
        /** Additional top-level CLEF event properties; double an initial @ to escape it. */
        properties?: Record<string, unknown>;
      };
      output: {
        /** Whether Seq accepted the event request. */
        accepted: boolean;
        /** The HTTP status returned by Seq. */
        status: number;
      };
    };
    /** Ingest a JSON array of structured log events as one newline-delimited CLEF batch. */
    "datalust.ingest_events": {
      input: {
        /**
         * The events to ingest as one newline-delimited CLEF batch.
         * @minItems 1
         */
        events: Array<{
          /**
           * The ISO 8601 timestamp at which the event occurred.
           * @format date-time
           */
          timestamp: string;
          /** A fully rendered event message. */
          message?: string;
          /** A message template rendered with event properties. */
          messageTemplate?: string;
          /** The event level, such as Information, Warning, or Error. */
          level?: string;
          /** An exception or stack trace attached to the event. */
          exception?: string;
          /** An implementation-specific CLEF event type. */
          eventType?: string | number;
          /** Additional top-level CLEF event properties; double an initial @ to escape it. */
          properties?: Record<string, unknown>;
        }>;
      };
      output: {
        /** Whether Seq accepted the event batch request. */
        accepted: boolean;
        /** The HTTP status returned by Seq. */
        status: number;
        /** The number of events submitted in the accepted batch. */
        eventCount: number;
      };
    };
    /** List saved Seq SQL queries visible to the API key. */
    "datalust.list_saved_queries": {
      input: {
        /**
         * Only return saved queries owned by this Seq user identifier.
         * @minLength 1
         */
        ownerId?: string;
        /** Whether to include shared saved queries. */
        shared?: boolean;
      };
      output: {
        /** The matching Seq saved queries. */
        savedQueries: Array<{
          /** The Seq saved query identifier. */
          id: string;
          /** The human-readable saved query title. */
          title: string;
          /** The saved query description when present. */
          description: string | null;
          /** The Seq SQL query text. */
          sql: string;
          /** Whether modifying the saved query requires Project permission. */
          isProtected: boolean;
          /** The owning Seq user identifier, or null for a shared query. */
          ownerId: string | null;
          /** The raw Seq saved query payload. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Seq saved query list payload. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List saved Seq signals visible to the API key. */
    "datalust.list_signals": {
      input: {
        /**
         * Only return signals owned by this Seq user identifier.
         * @minLength 1
         */
        ownerId?: string;
        /** Whether to include shared signals. */
        shared?: boolean;
        /** Whether Seq should return partial signal details. */
        partial?: boolean;
      };
      output: {
        /** The matching Seq signals. */
        signals: Array<{
          /** The Seq signal identifier. */
          id: string;
          /** The human-readable signal title. */
          title: string;
          /** The signal description when present. */
          description: string | null;
          /** The filters combined by the signal. */
          filters: Array<Record<string, unknown>>;
          /** The columns displayed for the signal. */
          columns: Array<Record<string, unknown>>;
          /** Whether modifying the signal requires Project permission. */
          isProtected: boolean;
          /** Whether the signal has no backing index. */
          isIndexSuppressed: boolean;
          /** The grouping mode returned by Seq. */
          grouping: unknown;
          /** The explicit signal group name when present. */
          explicitGroupName: string | null;
          /** The owning Seq user identifier, or null for a shared signal. */
          ownerId: string | null;
          /** The raw Seq signal payload. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Seq signal list payload. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Search a page of Seq events using a filter, signal, time range, or cursor. */
    "datalust.search_events": {
      input: {
        /**
         * A strict Seq filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * A Seq signal identifier or signal expression.
         * @minLength 1
         */
        signal?: string;
        /**
         * The maximum number of events to return.
         * @minimum 1
         */
        count?: number;
        /**
         * An event identifier at which to start searching inclusively.
         * @minLength 1
         */
        startAtId?: string;
        /**
         * An event identifier after which to continue searching exclusively.
         * @minLength 1
         */
        afterId?: string;
        /** Whether Seq should include rendered event messages. */
        render?: boolean;
        /**
         * The earliest inclusive event timestamp.
         * @format date-time
         */
        fromDateUtc?: string;
        /**
         * The latest exclusive event timestamp.
         * @format date-time
         */
        toDateUtc?: string;
        /** Values for free variables used by the filter. */
        variables?: Record<string, unknown>;
      };
      output: {
        /** The matching Seq events. */
        events: Array<{
          /** The Seq event identifier. */
          id: string;
          /** The ISO 8601 timestamp at which the event occurred. */
          timestamp: string;
          /** The ISO 8601 span start timestamp when the event is a span. */
          start: string | null;
          /** The properties attached to the event. */
          properties: Array<{
            /** The event property name. */
            name: string;
            /** The event property value. */
            value: unknown;
          }>;
          /** The Seq event type identifier when present. */
          eventType: string | null;
          /** The event level when present. */
          level: string | null;
          /** The exception or stack trace when present. */
          exception: string | null;
          /** The rendered event message when requested and available. */
          renderedMessage: string | null;
          /** The trace identifier when present. */
          traceId: string | null;
          /** The span identifier when present. */
          spanId: string | null;
          /** The parent span identifier when present. */
          parentId: string | null;
          /** The span kind when present. */
          spanKind: string | null;
          /** The raw Seq event payload. */
          raw: Record<string, unknown>;
        }>;
        /** Seq statistics for the event search. */
        statistics: Record<string, unknown>;
        /** The raw Seq event search payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update selected fields on a saved Seq SQL query while preserving unspecified fields. */
    "datalust.update_saved_query": {
      input: {
        /**
         * The Seq saved query identifier.
         * @minLength 1
         */
        queryId: string;
        /**
         * The human-readable saved query title.
         * @minLength 1
         */
        title?: string;
        /** The saved query description, or null to clear it. */
        description?: string | null;
        /** The Seq SQL query text, which may be empty for a placeholder query. */
        sql?: string;
        /** Whether modifying the saved query requires Project permission. */
        isProtected?: boolean;
        /**
         * The owning Seq user identifier, or null to make the saved query shared.
         * @minLength 1
         */
        ownerId?: string | null;
      };
      output: {
        /** Whether Seq accepted the saved query update request. */
        updated: boolean;
        /** The HTTP status returned by Seq. */
        status: number;
      };
    };
    /** Update selected fields on a Seq signal while preserving unspecified fields. */
    "datalust.update_signal": {
      input: {
        /**
         * The Seq signal identifier.
         * @minLength 1
         */
        signalId: string;
        /**
         * The human-readable signal title.
         * @minLength 1
         */
        title?: string;
        /** The signal description, or null to clear it. */
        description?: string | null;
        /** The filters combined by the signal. */
        filters?: Array<{
          /**
           * The strict Seq filter expression.
           * @minLength 1
           */
          filter: string;
          /** The human-readable filter description, or null to clear it. */
          description?: string | null;
          /** Whether the description represents events excluded by the filter. */
          descriptionIsExcluded?: boolean;
          /** The original non-strict filter text shown for editing, or null to clear it. */
          filterNonStrict?: string | null;
        }>;
        /** The columns displayed for the signal. */
        columns?: Array<{
          /**
           * The Seq expression displayed in the column.
           * @minLength 1
           */
          expression: string;
        }>;
        /** Whether modifying the signal requires Project permission. */
        isProtected?: boolean;
        /** Whether the signal should have no backing index. */
        isIndexSuppressed?: boolean;
        /** How the signal is grouped in the Seq user interface. */
        grouping?: "Inferred" | "Explicit" | "None";
        /** The explicit signal group name, or null when explicit grouping is not used. */
        explicitGroupName?: string | null;
        /**
         * The owning Seq user identifier, or null to make the signal shared.
         * @minLength 1
         */
        ownerId?: string | null;
      };
      output: {
        /** Whether Seq accepted the signal update request. */
        updated: boolean;
        /** The HTTP status returned by Seq. */
        status: number;
      };
    };
  }
}
