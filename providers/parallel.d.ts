import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Parallel task run for web research or structured data enrichment. */
    "parallel.create_task_run": {
      input: {
        /**
         * The Parallel processor to use for the task.
         * @minLength 1
         */
        processor: string;
        /** The task input as text or a JSON object. */
        input: string | Record<string, unknown>;
        /** User-provided metadata stored with the run. */
        metadata?: Record<string, string | number | boolean>;
        /** Source policy for Parallel web results. */
        source_policy?: {
          /**
           * Domains that Parallel should restrict results to.
           * @maxItems 200
           */
          include_domains?: Array<string>;
          /**
           * Domains that Parallel should exclude from results.
           * @maxItems 200
           */
          exclude_domains?: Array<string>;
          /**
           * Only include content published on or after this YYYY-MM-DD date.
           * @format date
           */
          after_date?: string;
        };
        /** Advanced Parallel request settings. */
        advanced_settings?: Record<string, unknown>;
        /** Parallel task specification with input and output schemas. */
        task_spec?: Record<string, unknown>;
        /**
         * Interaction ID to use as context for this request.
         * @minLength 1
         */
        previous_interaction_id?: string;
        /** Whether Parallel should record progress events for the run. */
        enable_events?: boolean;
        /** The raw object returned by Parallel. */
        webhook?: Record<string, unknown>;
        /**
         * Optional Parallel beta header value to enable beta features.
         * @minLength 1
         */
        parallel_beta?: string;
      };
      output: {
        /** A Parallel task run. */
        run: {
          /**
           * The Parallel task run ID.
           * @minLength 1
           */
          run_id?: string;
          /**
           * The interaction ID to reuse context in a future task run.
           * @minLength 1
           */
          interaction_id?: string;
          /** The current task run status. */
          status?: "queued" | "action_required" | "running" | "completed" | "failed" | "cancelling" | "cancelled";
          /** Whether the run is currently active. */
          is_active?: boolean;
          /** Warnings for the task run. */
          warnings?: Array<{
            /** The warning type. */
            type?: string;
            /** The human-readable warning message. */
            message?: string;
            /** Optional detail supporting the warning. */
            detail?: unknown;
            [key: string]: unknown;
          }> | null;
          /** A Parallel error object. */
          error?: {
            /** The Parallel error reference ID. */
            ref_id?: string;
            /** The human-readable error message. */
            message?: string;
            /** Optional detail supporting the error. */
            detail?: unknown;
            [key: string]: unknown;
          } | null;
          /** The processor used by the task run. */
          processor?: string;
          /** User-provided metadata stored with the run. */
          metadata?: Record<string, string | number | boolean> | null;
          /** The task group ID, if the run belongs to a group. */
          taskgroup_id?: string | null;
          /** The task run creation timestamp as an RFC 3339 string. */
          created_at?: string | null;
          /** The task run modification timestamp as an RFC 3339 string. */
          modified_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Extract relevant markdown excerpts or full content from public URLs with Parallel. */
    "parallel.extract": {
      input: {
        /**
         * URLs to extract content from. Parallel supports up to 20 URLs.
         * @minItems 1
         * @maxItems 20
         */
        urls: Array<string>;
        /**
         * Natural-language description of the extraction goal used to focus excerpts.
         * @minLength 1
         */
        objective?: string;
        /**
         * Optional keyword search queries used with objective to focus excerpts.
         * @minItems 1
         */
        search_queries?: Array<string>;
        /** Upper bound on total characters across excerpts from all extracted results. */
        max_chars_total?: number;
        /**
         * Session identifier shared across related Search and Extract calls.
         * @minLength 1
         * @maxLength 1000
         */
        session_id?: string;
        /**
         * The model generating this request and consuming the results.
         * @minLength 1
         */
        client_model?: string;
        /** Advanced Parallel request settings. */
        advanced_settings?: Record<string, unknown>;
      };
      output: {
        /** The Parallel extract request ID. */
        extract_id: string;
        /** Successful extract results. */
        results: Array<{
          /**
           * The extracted URL.
           * @format uri
           */
          url?: string;
          /** The webpage title, if available. */
          title?: string | null;
          /** The webpage publish date in YYYY-MM-DD format. */
          publish_date?: string | null;
          /** Relevant excerpts from the extracted URL, formatted as markdown. */
          excerpts?: Array<string>;
          /** Full content from the URL formatted as markdown, if requested. */
          full_content?: string | null;
          [key: string]: unknown;
        }>;
        /** Extract errors for requested URLs not in the results. */
        errors: Array<{
          /**
           * The URL that failed extraction.
           * @format uri
           */
          url: string;
          /** The Parallel extract error type. */
          error_type: string;
          /** The upstream HTTP status code, if available. */
          http_status_code: number | null;
          /** The error content returned by Parallel, if available. */
          content: string | null;
        }>;
        /** Warnings for the extract request. */
        warnings: Array<{
          /** The warning type. */
          type?: string;
          /** The human-readable warning message. */
          message?: string;
          /** Optional detail supporting the warning. */
          detail?: unknown;
          [key: string]: unknown;
        }> | null;
        /** Usage metrics for the extract request. */
        usage: Array<{
          /** The SKU name reported by Parallel. */
          name: string;
          /** The usage count for the SKU. */
          count: number;
        }> | null;
        /** Session identifier for related Search and Extract calls. */
        session_id: string;
        /** The raw object returned by Parallel. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the current status of a Parallel task run. */
    "parallel.retrieve_task_run": {
      input: {
        /**
         * The Parallel task run ID.
         * @minLength 1
         */
        run_id: string;
      };
      output: {
        /** A Parallel task run. */
        run: {
          /**
           * The Parallel task run ID.
           * @minLength 1
           */
          run_id?: string;
          /**
           * The interaction ID to reuse context in a future task run.
           * @minLength 1
           */
          interaction_id?: string;
          /** The current task run status. */
          status?: "queued" | "action_required" | "running" | "completed" | "failed" | "cancelling" | "cancelled";
          /** Whether the run is currently active. */
          is_active?: boolean;
          /** Warnings for the task run. */
          warnings?: Array<{
            /** The warning type. */
            type?: string;
            /** The human-readable warning message. */
            message?: string;
            /** Optional detail supporting the warning. */
            detail?: unknown;
            [key: string]: unknown;
          }> | null;
          /** A Parallel error object. */
          error?: {
            /** The Parallel error reference ID. */
            ref_id?: string;
            /** The human-readable error message. */
            message?: string;
            /** Optional detail supporting the error. */
            detail?: unknown;
            [key: string]: unknown;
          } | null;
          /** The processor used by the task run. */
          processor?: string;
          /** User-provided metadata stored with the run. */
          metadata?: Record<string, string | number | boolean> | null;
          /** The task group ID, if the run belongs to a group. */
          taskgroup_id?: string | null;
          /** The task run creation timestamp as an RFC 3339 string. */
          created_at?: string | null;
          /** The task run modification timestamp as an RFC 3339 string. */
          modified_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the result of a Parallel task run, blocking until completion or timeout. */
    "parallel.retrieve_task_run_result": {
      input: {
        /**
         * The Parallel task run ID.
         * @minLength 1
         */
        run_id: string;
        /** Maximum seconds Parallel should wait for the result. */
        timeout?: number;
        /**
         * Optional Parallel beta header value to enable beta features.
         * @minLength 1
         */
        parallel_beta?: string;
      };
      output: {
        /** A Parallel task run. */
        run: {
          /**
           * The Parallel task run ID.
           * @minLength 1
           */
          run_id?: string;
          /**
           * The interaction ID to reuse context in a future task run.
           * @minLength 1
           */
          interaction_id?: string;
          /** The current task run status. */
          status?: "queued" | "action_required" | "running" | "completed" | "failed" | "cancelling" | "cancelled";
          /** Whether the run is currently active. */
          is_active?: boolean;
          /** Warnings for the task run. */
          warnings?: Array<{
            /** The warning type. */
            type?: string;
            /** The human-readable warning message. */
            message?: string;
            /** Optional detail supporting the warning. */
            detail?: unknown;
            [key: string]: unknown;
          }> | null;
          /** A Parallel error object. */
          error?: {
            /** The Parallel error reference ID. */
            ref_id?: string;
            /** The human-readable error message. */
            message?: string;
            /** Optional detail supporting the error. */
            detail?: unknown;
            [key: string]: unknown;
          } | null;
          /** The processor used by the task run. */
          processor?: string;
          /** User-provided metadata stored with the run. */
          metadata?: Record<string, string | number | boolean> | null;
          /** The task group ID, if the run belongs to a group. */
          taskgroup_id?: string | null;
          /** The task run creation timestamp as an RFC 3339 string. */
          created_at?: string | null;
          /** The task run modification timestamp as an RFC 3339 string. */
          modified_at?: string | null;
          [key: string]: unknown;
        };
        /** Output from a completed Parallel task run. */
        output: {
          /** The output type. */
          type?: "json" | "text";
          /** The output content returned by Parallel. */
          content?: unknown;
          /** Basis entries supporting the output. */
          basis?: Array<Record<string, unknown>>;
          /** The raw object returned by Parallel. */
          output_schema?: Record<string, unknown> | null;
          /** MCP tool calls made by the task. */
          mcp_tool_calls?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        };
        /** The raw object returned by Parallel. */
        raw: Record<string, unknown>;
      };
    };
    /** Search the web with Parallel and return ranked source excerpts. */
    "parallel.search": {
      input: {
        /**
         * Concise keyword search queries. Parallel recommends at least one query and 2-3 for best results.
         * @minItems 1
         */
        search_queries: Array<string>;
        /**
         * Natural-language description of the search goal used with search_queries to focus results.
         * @minLength 1
         */
        objective?: string;
        /** The Parallel search mode preset. */
        mode?: "turbo" | "basic" | "advanced";
        /** Upper bound on total characters across excerpts from all results. */
        max_chars_total?: number;
        /**
         * Session identifier shared across related Search and Extract calls.
         * @minLength 1
         * @maxLength 1000
         */
        session_id?: string;
        /**
         * The model generating this request and consuming the results.
         * @minLength 1
         */
        client_model?: string;
        /** Advanced Parallel request settings. */
        advanced_settings?: Record<string, unknown>;
      };
      output: {
        /** The Parallel search request ID. */
        search_id: string;
        /** Search results ordered by decreasing relevance. */
        results: Array<{
          /**
           * The result URL.
           * @format uri
           */
          url?: string;
          /** The webpage title, if available. */
          title?: string | null;
          /** The webpage publish date in YYYY-MM-DD format. */
          publish_date?: string | null;
          /** Relevant excerpts from the result URL, formatted as markdown. */
          excerpts?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Warnings for the search request. */
        warnings: Array<{
          /** The warning type. */
          type?: string;
          /** The human-readable warning message. */
          message?: string;
          /** Optional detail supporting the warning. */
          detail?: unknown;
          [key: string]: unknown;
        }> | null;
        /** Usage metrics for the search request. */
        usage: Array<{
          /** The SKU name reported by Parallel. */
          name: string;
          /** The usage count for the SKU. */
          count: number;
        }> | null;
        /** Session identifier for related Search and Extract calls. */
        session_id: string;
        /** The raw object returned by Parallel. */
        raw: Record<string, unknown>;
      };
    };
  }
}
