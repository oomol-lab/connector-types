import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current Gildata Data Map financial MCP tool with JSON arguments after checking its live schema with list_tools. */
    "gildata.call_tool": {
      input: {
        /** The Gildata Data Map MCP service family that owns the requested tool. */
        serverType: "tool" | "api";
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         * @maxLength 512
         * @pattern \S
         */
        toolName: string;
        /** JSON arguments matching the inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The financial data result returned by Gildata. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Compare two or more stocks across business fundamentals, growth, profitability, cash flow, valuation, industry position, and market performance. */
    "gildata.compare_stocks": {
      input: {
        /**
         * Stock names or exchange-qualified security codes to compare.
         * @minItems 2
         * @maxItems 10
         */
        securities: Array<string>;
        /**
         * Optional aspects that should receive extra attention in the result.
         * @minLength 1
         * @maxLength 2000
         * @pattern \S
         */
        focus?: string;
      };
      output: {
        /** The financial data result returned by Gildata. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Find recent company news, exchange announcements, and earnings guidance with source and publication timestamps. */
    "gildata.get_company_news_and_announcements": {
      input: {
        /**
         * The company or security name, or an exchange-qualified security code.
         * @minLength 1
         * @maxLength 256
         * @pattern \S
         */
        security: string;
        /**
         * The inclusive first publication date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive last publication date in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /**
         * Optional aspects that should receive extra attention in the result.
         * @minLength 1
         * @maxLength 2000
         * @pattern \S
         */
        focus?: string;
      };
      output: {
        /** The financial data result returned by Gildata. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Find macroeconomic or industry indicators for China, local regions, or global economies and return the relevant time-series data. */
    "gildata.get_macro_data": {
      input: {
        /**
         * The financial question to answer with Gildata Data Map.
         * @minLength 1
         * @maxLength 4000
         * @pattern \S
         */
        query: string;
      };
      output: {
        /** The financial data result returned by Gildata. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Get a user-oriented stock overview covering the company, core business, recent market data, financial performance, valuation, peers, and consensus expectations. */
    "gildata.get_stock_overview": {
      input: {
        /**
         * The stock name or exchange-qualified security code, such as 贵州茅台 or 600519.SH.
         * @minLength 1
         * @maxLength 256
         * @pattern \S
         */
        security: string;
        /**
         * Optional aspects that should receive extra attention in the result.
         * @minLength 1
         * @maxLength 2000
         * @pattern \S
         */
        focus?: string;
      };
      output: {
        /** The financial data result returned by Gildata. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Discover the current Gildata Data Map financial tools and live input schemas from the high-level tool service or the detailed API service. */
    "gildata.list_tools": {
      input: {
        /** The Gildata Data Map MCP service family that owns the requested tool. */
        serverType: "tool" | "api";
      };
      output: {
        /** The Gildata Data Map MCP service family that owns the requested tool. */
        serverType: "tool" | "api";
        /** Tools currently exposed by the selected Gildata MCP service. */
        tools: Array<{
          /**
           * The exact Gildata MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by Gildata MCP. */
          description?: string;
          /** MCP behavior hints supplied by Gildata Data Map. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside Gildata. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by Gildata MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Answer a natural-language financial data question across securities, funds, bonds, indices, market data, and company information. */
    "gildata.query_financial_data": {
      input: {
        /**
         * The financial question to answer with Gildata Data Map.
         * @minLength 1
         * @maxLength 4000
         * @pattern \S
         */
        query: string;
      };
      output: {
        /** The financial data result returned by Gildata. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Screen funds or ETFs with natural-language conditions covering returns, risk, holdings, fund managers, categories, or overall evaluation. */
    "gildata.screen_funds": {
      input: {
        /**
         * Natural-language screening conditions for the requested funds, including any market, category, metric, or ranking constraints.
         * @minLength 1
         * @maxLength 4000
         * @pattern \S
         */
        criteria: string;
      };
      output: {
        /** The financial data result returned by Gildata. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Screen stocks or listed companies with natural-language conditions covering industries, trading metrics, financials, valuation, or technical patterns. */
    "gildata.screen_stocks": {
      input: {
        /**
         * Natural-language screening conditions for the requested stocks, including any market, category, metric, or ranking constraints.
         * @minLength 1
         * @maxLength 4000
         * @pattern \S
         */
        criteria: string;
      };
      output: {
        /** The financial data result returned by Gildata. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Search brokerage research about macroeconomics, industries, listed companies, funds, or market trends. */
    "gildata.search_research_reports": {
      input: {
        /**
         * The financial question to answer with Gildata Data Map.
         * @minLength 1
         * @maxLength 4000
         * @pattern \S
         */
        query: string;
      };
      output: {
        /** The financial data result returned by Gildata. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
  }
}
