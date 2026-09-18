import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a FinChina query_* or screen_* navigation tool with no arguments to obtain subTools and their parameter schemas. This returns definitions, not business records. Use execute_tool to query a discovered subtool. */
    "finchina.discover_tools": {
      input: {
        /**
         * An exact query_* or screen_* tool name from list_tools.
         * @minLength 1
         */
        toolName: string;
      };
      output: {
        /** Decoded FinChina JSON, or the original MCP content when no JSON object is returned. */
        result: unknown;
      };
    };
    /** Query a FinChina data subtool discovered with discover_tools. Pass its exact name and arguments. Queries consume account credits; this action executes one request without automatic pagination or business retries. */
    "finchina.execute_tool": {
      input: {
        /**
         * The exact subTools name returned by a navigation tool; not a top-level query_* or screen_* name.
         * @minLength 1
         */
        toolName: string;
        /** Arguments matching the current schema discovered from FinChina. Preserve upstream field names and pagination parameters. */
        arguments: Record<string, unknown>;
      };
      output: {
        /** Query summary and records. records.headInfo describes the columns; records.data contains positional row arrays. Nested array columns retain their property metadata. */
        data?: unknown;
        /** Business status and diagnostics. Codes below 100 indicate success. */
        status?: {
          /** FinChina business status code, including success with parameter adjustments. */
          code?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Query company basic information and selected indicators through FinChina, such as registered capital. Consumes account credits and executes one query. Discover query_enterprise_profile for the current additional parameters. */
    "finchina.get_company_basic_info": {
      input: {
        /**
         * Company names or unified social credit codes, up to 100 companies.
         * @minItems 1
         * @maxItems 100
         */
        companies: Array<string>;
        /**
         * Financial or company indicators in Chinese or English; FinChina supports fuzzy matching.
         * @minItems 1
         */
        indicators: Array<string>;
        /** Sort the query results by one or more fields. */
        sort?: Array<{
          /**
           * The indicator or field to sort by, such as 注册资本 or 营业总收入.
           * @minLength 1
           */
          field: string;
          /** Sort direction. */
          order: "asc" | "desc";
        }>;
        /** Additional parameters from the discovered subtool schema. Must not repeat fields supplied through companies, indicators, date, or sort. */
        additionalArguments?: Record<string, unknown>;
      };
      output: {
        /** Query summary and records. records.headInfo describes the columns; records.data contains positional row arrays. Nested array columns retain their property metadata. */
        data?: unknown;
        /** Business status and diagnostics. Codes below 100 indicate success. */
        status?: {
          /** FinChina business status code, including success with parameter adjustments. */
          code?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Query company financial indicators through FinChina, such as revenue over the last three years. Consumes account credits and executes one query. Discover query_enterprise_financial_data for the current additional parameters. */
    "finchina.get_company_financial_metrics": {
      input: {
        /**
         * Company names or unified social credit codes, up to 100 companies.
         * @minItems 1
         * @maxItems 100
         */
        companies: Array<string>;
        /**
         * Financial or company indicators in Chinese or English; FinChina supports fuzzy matching.
         * @minItems 1
         */
        indicators: Array<string>;
        /** Sort the query results by one or more fields. */
        sort?: Array<{
          /**
           * The indicator or field to sort by, such as 注册资本 or 营业总收入.
           * @minLength 1
           */
          field: string;
          /** Sort direction. */
          order: "asc" | "desc";
        }>;
        /** Additional parameters from the discovered subtool schema. Must not repeat fields supplied through companies, indicators, date, or sort. */
        additionalArguments?: Record<string, unknown>;
        /** A reporting date or natural-language period, such as 近三年 or 2023年报. */
        date?: string;
      };
      output: {
        /** Query summary and records. records.headInfo describes the columns; records.data contains positional row arrays. Nested array columns retain their property metadata. */
        data?: unknown;
        /** Business status and diagnostics. Codes below 100 indicate success. */
        status?: {
          /** FinChina business status code, including success with parameter adjustments. */
          code?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Query FinChina indicator definitions, enumerations, or parameter metadata through caihui_mcp_metadata. Inspect its current schema using list_tools before supplying arguments. */
    "finchina.get_metadata": {
      input: {
        /** Arguments matching the current schema discovered from FinChina. Preserve upstream field names and pagination parameters. */
        arguments: Record<string, unknown>;
      };
      output: {
        /** Decoded FinChina JSON, or the original MCP content when no JSON object is returned. */
        result: unknown;
      };
    };
    /** Discover FinChina financial and enterprise-risk navigation tools, the execution entry point, and metadata tools with their current input schemas. */
    "finchina.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools exposed by the connected FinChina account. */
        tools: Array<{
          /** The exact MCP tool name. */
          name?: string;
          /** The current upstream tool description. */
          description?: string;
          /** The current JSON Schema for this tool's arguments. */
          inputSchema?: Record<string, unknown>;
          /** Optional upstream behavior hints. */
          annotations?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
