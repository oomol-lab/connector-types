import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call one supported read-only Tongdaxin financial data MCP tool with arguments matching its live input schema. */
    "tongdaxin.call_tool": {
      input: {
        /** The supported Tongdaxin MCP tool to invoke. */
        toolName: "tdx_lookup_stock" | "tdx_quotes" | "tdx_kline" | "tdx_indicator_select" | "tdx_screener" | "tdx_api_data" | "wenda_news_query" | "wenda_notice_query" | "wenda_report_query";
        /** JSON arguments matching the live inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Discover the supported Tongdaxin market data, screening, news, announcement, and research MCP tools with their live input schemas. */
    "tongdaxin.list_tools": {
      input: Record<string, never>;
      output: {
        /** Supported read-only tools currently exposed to the connected Tongdaxin API Key. */
        tools: Array<{
          /** The exact supported Tongdaxin MCP tool name to pass to call_tool. */
          name: "tdx_lookup_stock" | "tdx_quotes" | "tdx_kline" | "tdx_indicator_select" | "tdx_screener" | "tdx_api_data" | "wenda_news_query" | "wenda_notice_query" | "wenda_report_query";
          /** The current tool description supplied by Tongdaxin MCP. */
          description?: string;
          /** MCP behavior hints supplied by Tongdaxin for a financial data tool. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside Tongdaxin. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by Tongdaxin MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
  }
}
