import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a stateful company or people search from a Clay query. Count-mode and jobs queries are unsupported. */
    "clay.create_search": {
      input: {
        /**
         * Clay advanced search query; obtain grammar with get_search_query_reference.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** Search ID to pass to get_search_results. */
        search_id: string;
        /** Detected source type, people or companies. */
        source_type: string;
        [key: string]: unknown;
      };
    };
    /** Get workspace credit balances without consuming credits. */
    "clay.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** Remaining spendable data credits, including rollover. */
        balance: number;
        /** Remaining actions; absent on some billing plans. */
        action_execution_balance?: number;
        [key: string]: unknown;
      };
    };
    /** Get the Clay user and workspace associated with the API key. */
    "clay.get_me": {
      input: Record<string, never>;
      output: {
        /** Clay user. */
        user: {
          /** User ID. */
          id: string;
          /** User name. */
          name: string | null;
          /** User email. */
          email?: string | null;
          /** Whether CLI onboarding is complete. */
          cli_onboarded?: boolean;
          [key: string]: unknown;
        };
        /** Clay workspace. */
        workspace: {
          /** Workspace ID. */
          id: string;
          /** Workspace name. */
          name?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get batch progress, a result download URL, or validation/processing failure details. Download result_url separately after completion and inspect individual item outcomes; results are not loaded into the action response. */
    "clay.get_routine_batch_results": {
      input: {
        /**
         * Batch routine run ID.
         * @minLength 1
         * @maxLength 64
         */
        routine_run_id: string;
      };
      output: {
        /**
         * Batch routine run ID.
         * @minLength 1
         * @maxLength 64
         */
        routine_run_id: string;
        /** Batch status: in_progress, complete, validation_failed, or processing_failed; unknown statuses are preserved. */
        status: string;
        /** Total input items, when available. */
        total?: number;
        /** Finished items, including failures, when available. */
        finished?: number;
        /**
         * Result file download URL returned on completion; may contain a signed access token.
         * @format uri
         */
        result_url?: string;
        /** Batch validation or processing error. */
        error?: {
          /** Failure message. */
          message: string;
          /** Total invalid JSONL rows for validation failures. */
          total_invalid_rows?: number;
          /** Validation errors reported by Clay, up to 100 entries. */
          details?: Array<{
            /** Invalid field. */
            field: string;
            /** JSONL line number. */
            line_number: number;
            /** Validation error message. */
            message: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get routine progress or one page of completed results. Follow cursor until absent and check each item's status. */
    "clay.get_routine_results": {
      input: {
        /**
         * Routine run ID.
         * @minLength 1
         * @maxLength 64
         */
        routine_run_id: string;
        /** Opaque cursor returned by the previous page. */
        cursor?: string;
        /**
         * Maximum results per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /**
         * Routine run ID.
         * @minLength 1
         * @maxLength 64
         */
        routine_run_id: string;
        /** Run status; in_progress or complete. Preserve unknown terminal statuses. */
        status: string;
        /** Total input items in the run. */
        total?: number;
        /** Finished items, including failures. */
        finished?: number;
        /** Results on this page; absent while running. */
        data?: Array<{
          /** Caller-supplied item ID. */
          id: string;
          /** Item status, complete or failed. */
          status: string;
          /** Function-defined output fields. */
          result?: Record<string, unknown>;
          /** Item failure details. */
          error?: {
            /** Failure message. */
            message?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Opaque cursor returned by the previous page. */
        cursor?: string;
        [key: string]: unknown;
      };
    };
    /** Get the current Clay search query grammar and fields before creating a search. */
    "clay.get_search_query_reference": {
      input: Record<string, never>;
      output: {
        /** Query grammar and field catalog in Markdown. */
        reference: string;
        [key: string]: unknown;
      };
    };
    /** Fetch the next page and advance a Clay search iterator. Do not retry blindly: each call advances the iterator. */
    "clay.get_search_results": {
      input: {
        /**
         * Search ID returned by create_search.
         * @minLength 1
         */
        search_id: string;
        /**
         * Page size, 1–500; default 20. Free and trial plans allow at most 50.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** Company or people records. */
        data: Array<Record<string, unknown>>;
        /** Whether more results can be fetched. */
        has_more: boolean;
        /** Source type, people or companies. */
        source_type: string;
        /** Why results ended: query_limit or no_more_results. */
        exhaustion_reason?: string;
        /** Search quota for the current period. */
        period_quota?: {
          /** Period quota limit. */
          limit?: number;
          /** Results used in this period. */
          used?: number;
          /** Remaining results in this period. */
          remaining?: number;
          /** Quota reset time. */
          resets_at?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the workflow-run query grammar and supported fields (beta). */
    "clay.get_workflow_run_query_reference": {
      input: Record<string, never>;
      output: {
        /** Query grammar and field catalog in Markdown. */
        reference: string;
        [key: string]: unknown;
      };
    };
    /** Query known Clay tables on Enterprise plans. Concurrent updates can repeat rows; deduplicate by ID. Custom ordering and aggregation do not support cursor pagination. */
    "clay.query_tables": {
      input: {
        /** Structured query over known tables. */
        query: {
          /**
           * Tables to query, up to 5.
           * @minItems 1
           * @maxItems 5
           */
          tables: Array<{
            /**
             * Table ID from the Clay table URL after /tables/.
             * @minLength 1
             */
            id: string;
            /** Optional table alias. */
            alias?: string;
          }>;
          /** Whether fields use names or IDs. */
          field_mode?: "names" | "ids";
          /**
           * Selected fields or aggregates, up to 20.
           * @maxItems 20
           */
          select?: Array<{
            /** Aggregate function. */
            fn: "count" | "sum" | "avg" | "max" | "min";
            /**
             * Field name or ID according to field_mode.
             * @minLength 1
             */
            field: string;
            /**
             * Output alias for the aggregate.
             * @minLength 1
             */
            as: string;
            /**
             * Nested property path, up to 5 segments.
             * @minItems 1
             * @maxItems 5
             */
            path?: Array<string>;
          } | {
            /**
             * Field name or ID according to field_mode.
             * @minLength 1
             */
            field: string;
            /**
             * Nested property path, up to 5 segments.
             * @minItems 1
             * @maxItems 5
             */
            path?: Array<string>;
            /** Output column alias. */
            as?: string;
            /** Table reference for the field. */
            table?: string;
          }>;
          /** Recursive filter expression. */
          filter?: {
            /**
             * Field name or ID according to field_mode.
             * @minLength 1
             */
            field: string;
            /** Comparison operator. */
            op: "=" | "!=" | ">" | ">=" | "<" | "<=" | "contains" | "not_contains" | "starts_with" | "ends_with" | "in" | "not_in" | "is_empty" | "is_not_empty";
            /**
             * Nested property path, up to 5 segments.
             * @minItems 1
             * @maxItems 5
             */
            path?: Array<string>;
            /** Comparison value; omit for empty checks. */
            value?: string | number | boolean | Array<string | number>;
          } | {
            /**
             * Conjoined conditions.
             * @minItems 1
             * @maxItems 10
             */
            and: Array<unknown>;
          } | {
            /**
             * Alternative conditions.
             * @minItems 1
             * @maxItems 10
             */
            or: Array<unknown>;
          } | {
            /** Recursive filter expression. */
            not: unknown;
          };
          /**
           * Grouping fields, up to 5.
           * @maxItems 5
           */
          group_by?: Array<string>;
          /**
           * Table joins, up to 4.
           * @maxItems 4
           */
          join?: Array<{
            /**
             * Table reference to join.
             * @minLength 1
             */
            table: string;
            /** Join type; defaults to inner. */
            type?: "inner" | "left";
            /** Join condition. */
            on: {
              /**
               * Left join field.
               * @minLength 1
               */
              left: string;
              /**
               * Right join field.
               * @minLength 1
               */
              right: string;
            };
          }>;
          /**
           * Custom ordering disables cursor pagination; up to 3 fields.
           * @maxItems 3
           */
          order_by?: Array<{
            /**
             * Field name or ID according to field_mode.
             * @minLength 1
             */
            field: string;
            /** Sort direction; defaults to asc. */
            direction?: "asc" | "desc";
          }>;
        };
        /** Opaque cursor; concurrent updates can repeat rows, so deduplicate by ID. */
        cursor?: string;
        /**
         * Page size, 1–100; defaults to 50.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Rows keyed by selected field; cells include status and value. */
        data: Array<Record<string, unknown>>;
        /** Field metadata keyed by output column. */
        fields?: Record<string, unknown>;
        /** Opaque cursor returned by the previous page. */
        cursor?: string;
        /** More rows matched but this query cannot issue a cursor; narrow the query or increase the limit. */
        truncated?: boolean;
        [key: string]: unknown;
      };
    };
    /** Search or count workflow runs (beta). Results are eventually consistent; recently changed runs may be stale or absent. */
    "clay.query_workflow_runs": {
      input: {
        /**
         * Clay workflow-run select or count query.
         * @minLength 1
         * @maxLength 2000
         */
        query: string;
        /** Opaque cursor returned by the previous page. */
        cursor?: string;
        /**
         * Maximum results per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Query mode, select or count. */
        mode: string;
        /**
         * Number of matching runs for count mode.
         * @minimum 0
         */
        count?: number;
        /** Matching runs in newest-first order for select mode. */
        data?: Array<Record<string, unknown>>;
        /** Opaque cursor returned by the previous page. */
        cursor?: string;
        [key: string]: unknown;
      };
    };
    /** Run a configured Clay routine on 1–100 items asynchronously. The routine may perform arbitrary downstream mutations; inspect its definition before running. */
    "clay.run_routine": {
      input: {
        /**
         * Routine ID, such as function:t_abc123.
         * @minLength 1
         * @maxLength 64
         */
        routine_id: string;
        /**
         * Items to process.
         * @minItems 1
         * @maxItems 100
         */
        items: Array<{
          /**
           * Caller-supplied item ID for matching results.
           * @minLength 1
           * @maxLength 64
           */
          id: string;
          /** Function-defined input fields. */
          inputs: Record<string, unknown>;
        }>;
        /**
         * ID of an existing Clay webhook to notify on completion.
         * @minLength 1
         * @maxLength 64
         */
        webhook_id?: string;
      };
      output: {
        /**
         * Routine run ID.
         * @minLength 1
         * @maxLength 64
         */
        routine_run_id: string;
        /** Initial run status, in_progress. */
        status: string;
        [key: string]: unknown;
      };
    };
    /** Download a JSONL file, upload it to Clay, and start an asynchronous batch routine. Each line must contain id and inputs. The routine may perform arbitrary downstream mutations. Connector transfer limit: 2 GiB, five minutes each for download and upload; JSONL validation is performed by Clay. */
    "clay.run_routine_batch": {
      input: {
        /**
         * Routine ID, such as function:t_abc123.
         * @minLength 1
         * @maxLength 64
         */
        routine_id: string;
        /**
         * Public HTTP(S) URL of a UTF-8 JSONL file; signed URLs are supported. The connector downloads it without Clay credentials.
         * @minLength 1
         * @format uri
         */
        fileUrl: string;
        /**
         * ID of an existing Clay webhook to notify on completion.
         * @minLength 1
         * @maxLength 64
         */
        webhook_id?: string;
      };
      output: {
        /**
         * Batch routine run ID.
         * @minLength 1
         * @maxLength 64
         */
        routine_run_id: string;
        /** Initial run status, in_progress. */
        status: string;
        [key: string]: unknown;
      };
    };
  }
}
