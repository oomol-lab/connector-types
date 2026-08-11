import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current Yingmi MCP tool with JSON arguments after checking its live schema and behavior annotations. */
    "yingmi_mcp.call_tool": {
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
    /** Discover the current Yingmi financial data, research, and advisory MCP tools with their live input schemas. */
    "yingmi_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected Yingmi MCP account. */
        tools: Array<{
          /**
           * The exact Yingmi MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by Yingmi MCP. */
          description?: string;
          /** MCP hints supplied by Yingmi about a tool's behavior. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside Yingmi. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by Yingmi MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
  }
}
