import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Databar table with optional columns and empty rows. */
    "databar_ai.create_table": {
      input: {
        /**
         * The table name.
         * @minLength 1
         */
        name?: string;
        /**
         * The initial human-readable column names.
         * @minItems 1
         */
        columns?: Array<string>;
        /**
         * The number of empty rows Databar should create.
         * @minimum 0
         */
        rows?: number;
      };
      output: {
        /** A Databar table. */
        table: {
          /** The table identifier returned by Databar. */
          identifier: string;
          /** The table name. */
          name: string;
          /** The table creation timestamp. */
          created_at: string;
          /** The table update timestamp. */
          updated_at: string;
          /** The workspace identifier associated with the table when present. */
          workspace_identifier: string | null;
          /** The Databar web URL for the table. */
          table_url: string;
          /** The raw table object returned by Databar. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get detailed Databar enrichment metadata by ID. */
    "databar_ai.get_enrichment": {
      input: {
        /**
         * The numeric Databar enrichment ID.
         * @exclusiveMinimum 0
         */
        enrichment_id: number;
      };
      output: {
        /** The object returned by Databar. */
        enrichment: Record<string, unknown>;
      };
    };
    /** List columns for a Databar table. */
    "databar_ai.get_table_columns": {
      input: {
        /**
         * The UUID of the Databar table.
         * @format uuid
         */
        table_uuid: string;
      };
      output: {
        /** The Databar table columns. */
        columns: Array<{
          /** The column identifier returned by Databar. */
          identifier: string;
          /** The internal column name returned by Databar. */
          internal_name: string;
          /** The additional internal column name returned by Databar when present. */
          additional_intenal_name: string | null;
          /** The human-readable column name. */
          name: string;
          /** The Databar column value type. */
          type_of_value: string;
          /** The Databar data processor ID associated with the column when present. */
          data_processor_id: number | null;
          /** The raw column object returned by Databar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Get Databar table rows with pagination and optional column filters. */
    "databar_ai.get_table_rows": {
      input: {
        /**
         * The UUID of the Databar table.
         * @format uuid
         */
        table_uuid: string;
        /**
         * The number of rows per page.
         * @maximum 500
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Column filters keyed by human-readable column name. */
        filter?: Record<string, {
            /** The exact value to match. */
            equals?: unknown;
            /** The case-insensitive substring to match. */
            contains?: string;
            /** The exact value to exclude. */
            not_equals?: unknown;
            /** Whether the column value must be empty. */
            is_empty?: boolean;
            /** Whether the column value must not be empty. */
            is_not_empty?: boolean;
          }>;
      };
      output: {
        /** The paginated table rows returned by Databar. */
        rows: {
          /** Whether Databar reports another page of rows. */
          has_next_page: boolean | null;
          /** The total row count when Databar returns it. */
          total_count: number | null;
          /** The returned page number when Databar returns it. */
          page: number | null;
          /** The rows returned by Databar. */
          data: Array<Record<string, unknown>>;
          /** The raw row response returned by Databar. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the status and result data for a Databar enrichment or waterfall task. */
    "databar_ai.get_task_status": {
      input: {
        /**
         * The Databar task identifier.
         * @minLength 1
         * @pattern \S
         */
        task_id: string;
      };
      output: {
        /** A Databar task status response. */
        task: {
          /** The Databar task identifier. */
          task_id: string;
          /** The deprecated request identifier when present. */
          request_id: string | null;
          /** The current Databar task status. */
          status: string;
          /** The data returned by Databar. */
          data: Array<unknown> | Record<string, unknown> | null;
          /** The task error returned by Databar when present. */
          error: string | Array<string> | null;
          /** The credits spent on the task when Databar returns it. */
          credits_spent: number | null;
          /** The raw task object returned by Databar. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the current Databar account information for the API key. */
    "databar_ai.get_user_info": {
      input: Record<string, never>;
      output: {
        /** The current Databar user account. */
        user: {
          /** The user's first name when Databar returns it. */
          first_name: string | null;
          /** The user's email address. */
          email: string;
          /** The user's credit balance. */
          balance: number;
          /** The user's Databar plan. */
          plan: string;
          /** The current workspace identifier when present. */
          workspace: string | null;
          /** The raw user object returned by Databar. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Insert up to 50 rows into a Databar table using human-readable column names. */
    "databar_ai.insert_rows": {
      input: {
        /**
         * The UUID of the Databar table.
         * @format uuid
         */
        table_uuid: string;
        /**
         * The rows to insert into Databar.
         * @minItems 1
         * @maxItems 50
         */
        rows: Array<{
          /** The row fields keyed by human-readable Databar column name. */
          fields: Record<string, unknown>;
        }>;
        /** Databar insert options. */
        options?: {
          /** Whether Databar should create missing text columns. */
          allow_new_columns?: boolean;
          /** Databar deduplication options. */
          dedupe?: {
            /** Whether Databar should skip duplicate rows. */
            enabled: boolean;
            /**
             * Column names used to detect duplicates.
             * @minItems 1
             */
            keys?: Array<string>;
          };
        };
        /** Whether Databar should return full row_data for each inserted row. */
        return_rows?: boolean;
      };
      output: {
        /** The Databar batch insert results. */
        results: Array<{
          /** The action Databar performed for this input row. */
          action: string | null;
          /** The row ID returned by Databar when present. */
          id: string | null;
          /** The zero-based input index returned by Databar when present. */
          index: number | null;
          /** The object returned by Databar. */
          row_data: Record<string, unknown> | null;
          /** The raw batch result item returned by Databar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Databar enrichments with optional search and pagination. */
    "databar_ai.list_enrichments": {
      input: {
        /**
         * The search query for Databar enrichments.
         * @minLength 3
         */
        q?: string;
        /**
         * The page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of items to return.
         * @maximum 500
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** Whether to hide BYOK enrichments that are not connected. */
        authorized_only?: boolean;
        /**
         * The enrichment category name to filter by.
         * @minLength 1
         */
        category?: string;
      };
      output: {
        /** The data returned by Databar. */
        result: Array<unknown> | Record<string, unknown>;
      };
    };
    /** List Databar tables in the current workspace. */
    "databar_ai.list_tables": {
      input: Record<string, never>;
      output: {
        /** The Databar tables. */
        tables: Array<{
          /** The table identifier returned by Databar. */
          identifier: string;
          /** The table name. */
          name: string;
          /** The table creation timestamp. */
          created_at: string;
          /** The table update timestamp. */
          updated_at: string;
          /** The workspace identifier associated with the table when present. */
          workspace_identifier: string | null;
          /** The Databar web URL for the table. */
          table_url: string;
          /** The raw table object returned by Databar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Submit a Databar enrichment task and return the task ID for later status polling. */
    "databar_ai.run_enrichment": {
      input: {
        /**
         * The numeric Databar enrichment ID.
         * @exclusiveMinimum 0
         */
        enrichment_id: number;
        /** The enrichment parameters keyed by Databar parameter name. */
        params: Record<string, unknown>;
        /** Databar enrichment pagination options. */
        pagination?: {
          /**
           * The number of pages to fetch.
           * @maximum 100
           * @exclusiveMinimum 0
           */
          pages?: number;
        };
      };
      output: {
        /** A Databar task status response. */
        task: {
          /** The Databar task identifier. */
          task_id: string;
          /** The deprecated request identifier when present. */
          request_id: string | null;
          /** The current Databar task status. */
          status: string;
          /** The data returned by Databar. */
          data: Array<unknown> | Record<string, unknown> | null;
          /** The task error returned by Databar when present. */
          error: string | Array<string> | null;
          /** The credits spent on the task when Databar returns it. */
          credits_spent: number | null;
          /** The raw task object returned by Databar. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Submit a Databar waterfall task and return the task ID for later status polling. */
    "databar_ai.run_waterfall": {
      input: {
        /**
         * The Databar waterfall identifier.
         * @minLength 1
         * @pattern \S
         */
        waterfall_identifier: string;
        /** The waterfall parameters keyed by Databar parameter name. */
        params: Record<string, unknown>;
        /**
         * The enrichment IDs Databar should use in the waterfall.
         * @minItems 1
         */
        enrichments: Array<number>;
        /**
         * The numeric Databar enrichment ID.
         * @exclusiveMinimum 0
         */
        email_verifier?: number;
      };
      output: {
        /** A Databar task status response. */
        task: {
          /** The Databar task identifier. */
          task_id: string;
          /** The deprecated request identifier when present. */
          request_id: string | null;
          /** The current Databar task status. */
          status: string;
          /** The data returned by Databar. */
          data: Array<unknown> | Record<string, unknown> | null;
          /** The task error returned by Databar when present. */
          error: string | Array<string> | null;
          /** The credits spent on the task when Databar returns it. */
          credits_spent: number | null;
          /** The raw task object returned by Databar. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
