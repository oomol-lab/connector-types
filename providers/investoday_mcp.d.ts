import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current Investoday MCP tool with JSON arguments after checking its live schema and behavior annotations. */
    "investoday_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Get current market breadth, including rising, falling and limit-up or limit-down stock counts. */
    "investoday_mcp.get_market_change_ratio_status": {
      input: Record<string, never>;
      output: {
        /** Structured financial data or the original MCP content envelope, including any upstream pagination metadata. */
        result: unknown;
      };
    };
    /** Get basic information for one or multiple Shanghai, Shenzhen or Beijing stocks. */
    "investoday_mcp.get_stock_basic_info": {
      input: Record<string, unknown>;
      output: {
        /** Structured financial data or the original MCP content envelope, including any upstream pagination metadata. */
        result: unknown;
      };
    };
    /** Get the latest realtime quote for one Shanghai, Shenzhen or Beijing stock. */
    "investoday_mcp.get_stock_quote_realtime": {
      input: {
        /**
         * Stock code, for example 002594.
         * @minLength 1
         */
        stockCode: string;
      };
      output: {
        /** Structured financial data or the original MCP content envelope, including any upstream pagination metadata. */
        result: unknown;
      };
    };
    /** Get stock valuation indicators including market capitalization, PE, PB and PS over a date range. */
    "investoday_mcp.get_stock_val_indicators": {
      input: Record<string, unknown>;
      output: {
        /** Structured financial data or the original MCP content envelope, including any upstream pagination metadata. */
        result: unknown;
      };
    };
    /** Find research reports by stock, industry, institution or category, with optional keywords and publication dates. */
    "investoday_mcp.list_report_research": {
      input: Record<string, unknown>;
      output: {
        /** Structured financial data or the original MCP content envelope, including any upstream pagination metadata. */
        result: unknown;
      };
    };
    /** Get forward-adjusted daily stock prices over a date range, including batch queries and pagination. */
    "investoday_mcp.list_stock_adjusted_quotes": {
      input: Record<string, unknown>;
      output: {
        /** Structured financial data or the original MCP content envelope, including any upstream pagination metadata. */
        result: unknown;
      };
    };
    /** Discover the current Investoday financial market data and research MCP tools with their live input schemas. */
    "investoday_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected Investoday MCP account. */
        tools: Array<{
          /**
           * The exact Investoday MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by Investoday MCP. */
          description?: string;
          /** MCP hints supplied by Investoday about a tool's behavior. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside Investoday. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by Investoday MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Search securities, funds, indices, industries and concepts by name or code. */
    "investoday_mcp.search": {
      input: {
        /** Search keyword, such as a company name or security code. */
        key?: string;
        /**
         * Comma-separated search types: 11 A-shares, 12 indices, 13 ETF benchmarks, 21 funds, 22 ETFs, 23 LOFs, 27 fund managers, 28 fund companies, 29 fund themes, 31 Hong Kong stocks, 71/72 Shenwan level 1/2 industries, 81/82 Juyuan/Cailian concepts.
         * @minLength 1
         */
        type: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        pageNum?: number;
        /**
         * Records per page, from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** Structured financial data or the original MCP content envelope, including any upstream pagination metadata. */
        result: unknown;
      };
    };
    /** Search announcement passages by meaning, optionally filtering by stock, announcement ID and publication dates. */
    "investoday_mcp.search_announcements": {
      input: {
        /**
         * Natural-language text describing the announcement information to find.
         * @minLength 1
         */
        query: string;
        /** Optional stock code. */
        stockCode?: string;
        /** Optional announcement ID. */
        announcementId?: number;
        /** Publication start date or timestamp, as accepted by Investoday. */
        beginDate?: string;
        /** Publication end date or timestamp, as accepted by Investoday. */
        endDate?: string;
        /** Number of matching passages to return. */
        topK?: number;
      };
      output: {
        /** Structured financial data or the original MCP content envelope, including any upstream pagination metadata. */
        result: unknown;
      };
    };
  }
}
