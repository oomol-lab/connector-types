import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a PromptLayer prompt template by name or ID. */
    "promptlayer.get_prompt_template": {
      input: {
        /**
         * The prompt name or prompt ID to retrieve.
         * @minLength 1
         */
        identifier: string;
        /**
         * The prompt template version to retrieve.
         * @exclusiveMinimum 0
         */
        version?: number;
        /**
         * The release label to retrieve, such as prod or dev.
         * @minLength 1
         */
        label?: string;
        /** The provider used when PromptLayer returns provider-specific LLM kwargs. */
        provider?: "openai" | "anthropic";
        /** String values keyed by PromptLayer field name. */
        inputVariables?: Record<string, string>;
        /** String values keyed by PromptLayer field name. */
        metadataFilters?: Record<string, string>;
        /**
         * The model name used for provider-specific defaults.
         * @minLength 1
         */
        model?: string;
        /** Model parameter overrides passed to PromptLayer. */
        modelParameterOverrides?: Record<string, unknown>;
      };
      output: {
        /** A normalized PromptLayer prompt template detail. */
        promptTemplate: {
          /** The PromptLayer prompt template ID. */
          id?: number;
          /** The prompt template name. */
          promptName?: string;
          /** The prompt template version when returned. */
          version?: number | null;
          /** Provider-defined JSON object returned by PromptLayer. */
          promptTemplate?: Record<string, unknown>;
          /** Provider-defined JSON object returned by PromptLayer. */
          metadata?: Record<string, unknown> | null;
          /** The commit message associated with the version. */
          commitMessage?: string | null;
          /** Provider-defined JSON object returned by PromptLayer. */
          llmKwargs?: Record<string, unknown> | null;
          /** The raw JSON object returned by PromptLayer. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a logged PromptLayer request by request ID. */
    "promptlayer.get_request": {
      input: {
        /**
         * The PromptLayer request ID to retrieve.
         * @exclusiveMinimum 0
         */
        requestId: number;
      };
      output: {
        /** A normalized PromptLayer request log detail. */
        request: {
          /** Whether PromptLayer returned the request successfully. */
          success?: boolean;
          /** The PromptLayer request ID. */
          requestId?: number;
          /** The LLM provider recorded for the request. */
          provider?: string | null;
          /** The LLM model recorded for the request. */
          model?: string | null;
          /** The input token count when returned. */
          inputTokens?: number | null;
          /** The output token count when returned. */
          outputTokens?: number | null;
          /** The total token count when returned. */
          tokens?: number | null;
          /** The request price in USD when returned. */
          price?: number | null;
          /**
           * The request start timestamp when returned.
           * @format date-time
           */
          requestStartTime?: string | null;
          /**
           * The request end timestamp when returned.
           * @format date-time
           */
          requestEndTime?: string | null;
          /** The request latency in milliseconds when returned. */
          latencyMs?: number | null;
          /** The associated trace ID when returned. */
          traceId?: string | null;
          /** Provider-defined JSON object returned by PromptLayer. */
          promptBlueprint?: Record<string, unknown>;
          /** The raw JSON object returned by PromptLayer. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List PromptLayer prompt templates in the authenticated workspace. */
    "promptlayer.list_prompt_templates": {
      input: {
        /**
         * The page number to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of prompt templates per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Filter prompt templates by release label.
         * @minLength 1
         */
        label?: string;
        /**
         * Filter prompt templates by case-insensitive partial name.
         * @minLength 1
         */
        name?: string;
        /**
         * Tags that returned prompt templates must contain.
         * @minItems 1
         */
        tags?: Array<string>;
        /** The prompt template status filter. */
        status?: "active" | "deleted" | "all";
        /**
         * External ID source to filter by.
         * @minLength 1
         */
        externalSource?: string;
        /**
         * External ID value to filter by.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Filter prompt templates by creator email address.
         * @format email
         */
        createdByEmail?: string;
        /**
         * Filter resources created at or after this timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Filter resources created at or before this timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * Filter resources updated at or after this timestamp.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * Filter resources updated at or before this timestamp.
         * @format date-time
         */
        updatedBefore?: string;
        /** The prompt template sort field. */
        sortBy?: "created_at" | "updated_at" | "name" | "id";
        /** The sort direction used by PromptLayer. */
        sortOrder?: "asc" | "desc";
        /** When true, return snippets only. When false, exclude snippets. */
        isSnippet?: boolean;
      };
      output: {
        /** The prompt templates returned by PromptLayer. */
        items: Array<{
          /** The PromptLayer prompt template ID. */
          id?: number;
          /** The prompt template name. */
          promptName?: string;
          /** The prompt template version when returned. */
          version?: number | null;
          /** Whether this prompt template is a snippet. */
          isSnippet?: boolean | null;
          /** Provider-defined JSON object returned by PromptLayer. */
          promptTemplate?: Record<string, unknown>;
          /** Provider-defined JSON object returned by PromptLayer. */
          metadata?: Record<string, unknown> | null;
          /** The commit message associated with the version. */
          commitMessage?: string | null;
          /** Provider-defined JSON object returned by PromptLayer. */
          llmKwargs?: Record<string, unknown> | null;
          /** The external ID mappings attached to the prompt template. */
          externalIds?: Array<Record<string, unknown>>;
          /** The raw JSON object returned by PromptLayer. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The current page number. */
        page: number | null;
        /** The total number of pages. */
        pages: number | null;
        /** The total number of matching prompt templates. */
        total: number | null;
        /** Whether a next page exists. */
        hasNext: boolean | null;
        /** Whether a previous page exists. */
        hasPrev: boolean | null;
        /** The next page number when returned. */
        nextNum: number | null;
        /** The previous page number when returned. */
        prevNum: number | null;
        /** The raw JSON object returned by PromptLayer. */
        raw: Record<string, unknown>;
      };
    };
    /** List rows for a PromptLayer Table sheet. */
    "promptlayer.list_table_sheet_rows": {
      input: {
        /**
         * The PromptLayer Table UUID.
         * @format uuid
         */
        tableId: string;
        /**
         * The PromptLayer sheet UUID.
         * @format uuid
         */
        sheetId: string;
        /** Whether to include system-managed metadata columns. */
        includeSystemColumns?: boolean;
        /** Whether to include sheet-level and per-column execution metric aggregates. */
        includeExecutionMetadataAggregates?: boolean;
        /**
         * The pagination cursor returned by PromptLayer.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The sort direction used by PromptLayer. */
        order?: "asc" | "desc";
        /** Whether to include column metadata in the response. */
        includeColumns?: boolean;
        /** Whether to include the row count in the response. */
        includeRowCount?: boolean;
      };
      output: {
        /** The rows returned by PromptLayer. */
        rows: Array<{
          /** The row index in the sheet. */
          rowIndex?: number;
          /** Cells keyed by column UUID. */
          cells?: Record<string, unknown>;
          /** The raw JSON object returned by PromptLayer. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The columns returned by PromptLayer when requested. */
        columns: Array<{
          /**
           * The column UUID.
           * @format uuid
           */
          id?: string;
          /** The column display title. */
          title?: string | null;
          /** The PromptLayer column type. */
          type?: string | null;
          /** Provider-defined JSON object returned by PromptLayer. */
          config?: Record<string, unknown> | null;
          /** The raw JSON object returned by PromptLayer. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page. */
        nextCursor: string | null;
        /** Whether more results are available. */
        hasMore: boolean;
        /** The sheet row count when returned. */
        rowCount: number | null;
        /** The sheet version count for this response. */
        version: number | null;
        /** Execution metric aggregates returned by PromptLayer. */
        executionMetadataAggregates: Record<string, unknown> | null;
        /** The raw JSON object returned by PromptLayer. */
        raw: Record<string, unknown>;
      };
    };
    /** List sheets for a PromptLayer Table. */
    "promptlayer.list_table_sheets": {
      input: {
        /**
         * The PromptLayer Table UUID.
         * @format uuid
         */
        tableId: string;
        /**
         * The pagination cursor returned by PromptLayer.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The sort direction used by PromptLayer. */
        order?: "asc" | "desc";
        /**
         * Filter sheets containing a column for this prompt ID.
         * @exclusiveMinimum 0
         */
        promptId?: number;
        /**
         * Filter sheets by prompt version ID.
         * @exclusiveMinimum 0
         */
        promptVersionId?: number;
        /**
         * Filter sheets by prompt label ID.
         * @exclusiveMinimum 0
         */
        promptLabelId?: number;
      };
      output: {
        /** The sheets returned by PromptLayer. */
        sheets: Array<{
          /**
           * The PromptLayer sheet UUID.
           * @format uuid
           */
          id?: string;
          /**
           * The PromptLayer Table UUID that owns the sheet.
           * @format uuid
           */
          tableId?: string;
          /** The workspace ID that owns the sheet. */
          workspaceId?: number | null;
          /** The sheet title. */
          title?: string | null;
          /** The zero-based display order of the sheet. */
          index?: number | null;
          /** The number of rows in the sheet. */
          rowCount?: number | null;
          /** The current sheet version count. */
          versionCount?: number | null;
          /**
           * The sheet creation timestamp.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The sheet update timestamp.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw JSON object returned by PromptLayer. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page. */
        nextCursor: string | null;
        /** Whether more results are available. */
        hasMore: boolean;
        /** The raw JSON object returned by PromptLayer. */
        raw: Record<string, unknown>;
      };
    };
    /** List PromptLayer Tables in the authenticated workspace. */
    "promptlayer.list_tables": {
      input: {
        /**
         * Filter tables by folder ID.
         * @exclusiveMinimum 0
         */
        folderId?: number;
        /**
         * Filter tables by title using a case-insensitive contains match.
         * @minLength 1
         */
        name?: string;
        /**
         * The pagination cursor returned by PromptLayer.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The sort direction used by PromptLayer. */
        order?: "asc" | "desc";
        /**
         * Filter tables containing a column for this prompt ID.
         * @exclusiveMinimum 0
         */
        promptId?: number;
        /**
         * Filter tables by prompt version ID.
         * @exclusiveMinimum 0
         */
        promptVersionId?: number;
        /**
         * Filter tables by prompt label ID.
         * @exclusiveMinimum 0
         */
        promptLabelId?: number;
      };
      output: {
        /** The Tables returned by PromptLayer. */
        tables: Array<{
          /**
           * The PromptLayer Table UUID.
           * @format uuid
           */
          id?: string;
          /** The workspace ID that owns the table. */
          workspaceId?: number | null;
          /** The table title. */
          title?: string | null;
          /** The folder ID that contains the table. */
          folderId?: number | null;
          /** The number of active sheets in the table. */
          sheetCount?: number | null;
          /**
           * The table creation timestamp.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * The table update timestamp.
           * @format date-time
           */
          updatedAt?: string | null;
          /** The raw JSON object returned by PromptLayer. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page. */
        nextCursor: string | null;
        /** Whether more results are available. */
        hasMore: boolean;
        /** The raw JSON object returned by PromptLayer. */
        raw: Record<string, unknown>;
      };
    };
  }
}
