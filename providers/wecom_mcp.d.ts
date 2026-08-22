import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current WeCom MCP tool with JSON arguments. Discover the tool first and confirm the user's intent because the endpoint may expose actions that send, overwrite, cancel, or delete WeCom data. */
    "wecom_mcp.call_tool": {
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
    /** Discover the current tools, behavior annotations, and live input schemas exposed by this WeCom MCP connection. */
    "wecom_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed by this WeCom MCP connection. */
        tools: Array<{
          /**
           * The exact WeCom MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by WeCom MCP. */
          description?: string;
          /** MCP behavior hints supplied by the connected WeCom server. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify WeCom data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform a destructive WeCom operation. */
            destructiveHint?: boolean;
            /** Whether repeating the same call is expected to have no additional effect. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside WeCom. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by WeCom MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
  }
}
