import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a saved Dune query and return an execution ID for status polling and result retrieval. */
    "dune.execute_query": {
      input: {
        /**
         * Unique numeric ID of a Dune query.
         * @exclusiveMinimum 0
         */
        queryId: number;
        /** Values keyed by the parameter names defined on the saved query. */
        queryParameters?: Record<string, unknown>;
        /** Dune execution performance tier. */
        performance?: "small" | "medium" | "large";
      };
      output: {
        /**
         * Unique ID of a Dune query execution.
         * @minLength 1
         */
        execution_id: string;
        /** Dune execution state. */
        state: "QUERY_STATE_PENDING" | "QUERY_STATE_EXECUTING" | "QUERY_STATE_FAILED" | "QUERY_STATE_COMPLETED" | "QUERY_STATE_CANCELED" | "QUERY_STATE_EXPIRED" | "QUERY_STATE_COMPLETED_PARTIAL";
        [key: string]: unknown;
      };
    };
    /** Get the JSON result and metadata for a Dune execution. */
    "dune.get_execution_result": {
      input: {
        /**
         * Unique ID of a Dune query execution.
         * @minLength 1
         */
        executionId: string;
        /**
         * Maximum number of result rows to return. Cannot be combined with sampleCount.
         * @minimum 1
         */
        limit?: number;
        /**
         * Zero-based row offset used for pagination. Cannot be combined with sampleCount.
         * @minimum 0
         */
        offset?: number;
        /**
         * Comma-separated column names to return.
         * @minLength 1
         */
        columns?: string;
        /**
         * Dune result filter expression. Cannot be combined with sampleCount.
         * @minLength 1
         */
        filters?: string;
        /**
         * Dune result ordering expression, such as `volume desc` or `project asc, volume desc`.
         * @minLength 1
         */
        sortBy?: string;
        /**
         * Number of rows to sample uniformly. Cannot be combined with limit, offset, or filters.
         * @minimum 1
         */
        sampleCount?: number;
        /** Return a stored partial result when the full result was truncated. */
        allowPartialResults?: boolean;
        /** Bypass Dune's configured maximum credits per request. This may increase cost. */
        ignoreMaxCreditsPerRequest?: boolean;
      };
      output: {
        /**
         * Unique ID of a Dune query execution.
         * @minLength 1
         */
        execution_id: string;
        /**
         * Unique numeric ID of a Dune query.
         * @exclusiveMinimum 0
         */
        query_id?: number;
        /** Dune execution state. */
        state?: "QUERY_STATE_PENDING" | "QUERY_STATE_EXECUTING" | "QUERY_STATE_FAILED" | "QUERY_STATE_COMPLETED" | "QUERY_STATE_CANCELED" | "QUERY_STATE_EXPIRED" | "QUERY_STATE_COMPLETED_PARTIAL";
        /** Whether the execution is in a terminal state. */
        is_execution_finished?: boolean;
        /**
         * Time when Dune submitted the execution.
         * @format date-time
         */
        submitted_at?: string;
        /**
         * Time when Dune started the execution.
         * @format date-time
         */
        execution_started_at?: string;
        /**
         * Time when Dune ended the execution.
         * @format date-time
         */
        execution_ended_at?: string;
        /**
         * Time when the execution was canceled.
         * @format date-time
         */
        cancelled_at?: string;
        /**
         * Time when the stored execution result expires.
         * @format date-time
         */
        expires_at?: string;
        /**
         * Credits consumed by the execution.
         * @minimum 0
         */
        execution_cost_credits?: number;
        /** Dune execution error details. */
        error?: {
          /** Error type returned by Dune. */
          type?: string;
          /** Human-readable execution error message. */
          message?: string;
          /** Provider-specific error metadata, such as a SQL line and column. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Dune execution result metadata. */
        result_metadata?: {
          /** Result column names. */
          column_names?: Array<string>;
          /** Dune types for result columns. */
          column_types?: Array<string>;
          /**
           * Number of result cells used for billing.
           * @minimum 0
           */
          datapoint_count?: number;
          /**
           * Execution duration in milliseconds.
           * @minimum 0
           */
          execution_time_millis?: number;
          /**
           * Time spent pending in milliseconds.
           * @minimum 0
           */
          pending_time_millis?: number;
          /**
           * Size of the current result page in bytes.
           * @minimum 0
           */
          result_set_bytes?: number;
          /**
           * Number of rows in the current result page.
           * @minimum 0
           */
          row_count?: number;
          /**
           * Total result size in bytes.
           * @minimum 0
           */
          total_result_set_bytes?: number;
          /**
           * Total rows in the complete result.
           * @minimum 0
           */
          total_row_count?: number;
          [key: string]: unknown;
        };
        /** Result metadata and rows returned by Dune. */
        result?: Record<string, unknown>;
        /**
         * Offset for the next page of rows.
         * @minimum 0
         */
        next_offset?: number;
        /**
         * Dune URL for the next page of rows.
         * @format uri
         */
        next_uri?: string;
        [key: string]: unknown;
      };
    };
    /** Get the current state and metadata for a Dune query execution. */
    "dune.get_execution_status": {
      input: {
        /**
         * Unique ID of a Dune query execution.
         * @minLength 1
         */
        executionId: string;
      };
      output: {
        /**
         * Unique ID of a Dune query execution.
         * @minLength 1
         */
        execution_id: string;
        /**
         * Unique numeric ID of a Dune query.
         * @exclusiveMinimum 0
         */
        query_id?: number;
        /** Dune execution state. */
        state: "QUERY_STATE_PENDING" | "QUERY_STATE_EXECUTING" | "QUERY_STATE_FAILED" | "QUERY_STATE_COMPLETED" | "QUERY_STATE_CANCELED" | "QUERY_STATE_EXPIRED" | "QUERY_STATE_COMPLETED_PARTIAL";
        /** Whether the execution is in a terminal state. */
        is_execution_finished?: boolean;
        /**
         * Time when Dune submitted the execution.
         * @format date-time
         */
        submitted_at?: string;
        /**
         * Time when Dune started the execution.
         * @format date-time
         */
        execution_started_at?: string;
        /**
         * Time when Dune ended the execution.
         * @format date-time
         */
        execution_ended_at?: string;
        /**
         * Time when the execution was canceled.
         * @format date-time
         */
        cancelled_at?: string;
        /**
         * Time when the stored execution result expires.
         * @format date-time
         */
        expires_at?: string;
        /**
         * Credits consumed by the execution.
         * @minimum 0
         */
        execution_cost_credits?: number;
        /** Dune execution error details. */
        error?: {
          /** Error type returned by Dune. */
          type?: string;
          /** Human-readable execution error message. */
          message?: string;
          /** Provider-specific error metadata, such as a SQL line and column. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Dune execution result metadata. */
        result_metadata?: {
          /** Result column names. */
          column_names?: Array<string>;
          /** Dune types for result columns. */
          column_types?: Array<string>;
          /**
           * Number of result cells used for billing.
           * @minimum 0
           */
          datapoint_count?: number;
          /**
           * Execution duration in milliseconds.
           * @minimum 0
           */
          execution_time_millis?: number;
          /**
           * Time spent pending in milliseconds.
           * @minimum 0
           */
          pending_time_millis?: number;
          /**
           * Size of the current result page in bytes.
           * @minimum 0
           */
          result_set_bytes?: number;
          /**
           * Number of rows in the current result page.
           * @minimum 0
           */
          row_count?: number;
          /**
           * Total result size in bytes.
           * @minimum 0
           */
          total_result_set_bytes?: number;
          /**
           * Total rows in the complete result.
           * @minimum 0
           */
          total_row_count?: number;
          [key: string]: unknown;
        };
        /**
         * Maximum number of interactive executions allowed concurrently.
         * @minimum 0
         */
        max_inflight_interactive_executions?: number;
        /**
         * Number of interactive executions still in progress when the account concurrency limit is reached.
         * @minimum 0
         */
        max_inflight_interactive_reached?: number;
        /**
         * Current execution queue position.
         * @minimum 0
         */
        queue_position?: number;
        [key: string]: unknown;
      };
    };
    /** Get the latest stored JSON result for a Dune query without starting a new execution. */
    "dune.get_latest_query_result": {
      input: {
        /**
         * Unique numeric ID of a Dune query.
         * @exclusiveMinimum 0
         */
        queryId: number;
        /**
         * Maximum number of result rows to return. Cannot be combined with sampleCount.
         * @minimum 1
         */
        limit?: number;
        /**
         * Zero-based row offset used for pagination. Cannot be combined with sampleCount.
         * @minimum 0
         */
        offset?: number;
        /**
         * Comma-separated column names to return.
         * @minLength 1
         */
        columns?: string;
        /**
         * Dune result filter expression. Cannot be combined with sampleCount.
         * @minLength 1
         */
        filters?: string;
        /**
         * Dune result ordering expression, such as `volume desc` or `project asc, volume desc`.
         * @minLength 1
         */
        sortBy?: string;
        /**
         * Number of rows to sample uniformly. Cannot be combined with limit, offset, or filters.
         * @minimum 1
         */
        sampleCount?: number;
        /** Return a stored partial result when the full result was truncated. */
        allowPartialResults?: boolean;
        /** Bypass Dune's configured maximum credits per request. This may increase cost. */
        ignoreMaxCreditsPerRequest?: boolean;
      };
      output: {
        /**
         * Unique ID of a Dune query execution.
         * @minLength 1
         */
        execution_id: string;
        /**
         * Unique numeric ID of a Dune query.
         * @exclusiveMinimum 0
         */
        query_id?: number;
        /** Dune execution state. */
        state?: "QUERY_STATE_PENDING" | "QUERY_STATE_EXECUTING" | "QUERY_STATE_FAILED" | "QUERY_STATE_COMPLETED" | "QUERY_STATE_CANCELED" | "QUERY_STATE_EXPIRED" | "QUERY_STATE_COMPLETED_PARTIAL";
        /** Whether the execution is in a terminal state. */
        is_execution_finished?: boolean;
        /**
         * Time when Dune submitted the execution.
         * @format date-time
         */
        submitted_at?: string;
        /**
         * Time when Dune started the execution.
         * @format date-time
         */
        execution_started_at?: string;
        /**
         * Time when Dune ended the execution.
         * @format date-time
         */
        execution_ended_at?: string;
        /**
         * Time when the execution was canceled.
         * @format date-time
         */
        cancelled_at?: string;
        /**
         * Time when the stored execution result expires.
         * @format date-time
         */
        expires_at?: string;
        /**
         * Credits consumed by the execution.
         * @minimum 0
         */
        execution_cost_credits?: number;
        /** Dune execution error details. */
        error?: {
          /** Error type returned by Dune. */
          type?: string;
          /** Human-readable execution error message. */
          message?: string;
          /** Provider-specific error metadata, such as a SQL line and column. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Dune execution result metadata. */
        result_metadata?: {
          /** Result column names. */
          column_names?: Array<string>;
          /** Dune types for result columns. */
          column_types?: Array<string>;
          /**
           * Number of result cells used for billing.
           * @minimum 0
           */
          datapoint_count?: number;
          /**
           * Execution duration in milliseconds.
           * @minimum 0
           */
          execution_time_millis?: number;
          /**
           * Time spent pending in milliseconds.
           * @minimum 0
           */
          pending_time_millis?: number;
          /**
           * Size of the current result page in bytes.
           * @minimum 0
           */
          result_set_bytes?: number;
          /**
           * Number of rows in the current result page.
           * @minimum 0
           */
          row_count?: number;
          /**
           * Total result size in bytes.
           * @minimum 0
           */
          total_result_set_bytes?: number;
          /**
           * Total rows in the complete result.
           * @minimum 0
           */
          total_row_count?: number;
          [key: string]: unknown;
        };
        /** Result metadata and rows returned by Dune. */
        result?: Record<string, unknown>;
        /**
         * Offset for the next page of rows.
         * @minimum 0
         */
        next_offset?: number;
        /**
         * Dune URL for the next page of rows.
         * @format uri
         */
        next_uri?: string;
        [key: string]: unknown;
      };
    };
    /** Get SQL, parameters, ownership, and state for a Dune query. */
    "dune.get_query": {
      input: {
        /**
         * Unique numeric ID of a Dune query.
         * @exclusiveMinimum 0
         */
        queryId: number;
      };
      output: {
        /**
         * Unique numeric ID of a Dune query.
         * @exclusiveMinimum 0
         */
        query_id: number;
        /** Query name. */
        name: string;
        /** Query description. */
        description: string;
        /** Owner username or team handle. */
        owner: string;
        /** SQL text of the query. */
        query_sql: string;
        /** Parameters defined by the query. */
        parameters: Array<Record<string, unknown>>;
        /** Query tags. */
        tags: Array<string>;
        /** Whether the query is private. */
        is_private: boolean;
        /** Whether the query is archived. */
        is_archived: boolean;
        [key: string]: unknown;
      };
    };
    /** List queries owned by the Dune account associated with the API key. */
    "dune.list_queries": {
      input: {
        /**
         * Number of queries to return. Dune defaults to 20.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of queries to skip. Dune defaults to 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Queries owned by the account. */
        queries: Array<{
          /**
           * Unique numeric ID of a Dune query.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Query name. */
          name: string;
          /** Query description. */
          description: string;
          /** Owner username or team handle. */
          owner: string;
          /** Query tags. */
          tags: Array<string>;
          /**
           * Creation time.
           * @format date-time
           */
          created_at: string;
          /**
           * Last update time.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /**
         * Total number of queries available.
         * @minimum 0
         */
        total: number;
      };
    };
  }
}
