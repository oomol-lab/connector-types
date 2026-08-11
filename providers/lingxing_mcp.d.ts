import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current Lingxing ERP MCP tool with JSON arguments. Discover the tool first and confirm the user's intent because some Lingxing tools create or update ERP data. */
    "lingxing_mcp.call_tool": {
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
    /** Discover the current Lingxing ERP MCP tools, behavior annotations, and live input schemas before choosing a tool to call. */
    "lingxing_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected Lingxing account. */
        tools: Array<{
          /**
           * The exact Lingxing MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by Lingxing MCP. */
          description?: string;
          /** MCP hints supplied by Lingxing about the tool's behavior. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify Lingxing data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive updates. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to have no additional effect. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with external entities. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by Lingxing MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
  }
}
