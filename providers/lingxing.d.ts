import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current Lingxing ERP MCP tool with JSON arguments. Discover the tool first and confirm the user's intent because some Lingxing tools create or update ERP data. */
    "lingxing.call_tool": {
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
    /** Discover the current Lingxing ERP MCP tools and their live input schemas before choosing a tool to call. */
    "lingxing.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected Lingxing account. */
        tools: Array<{
          /**
           * The exact MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by Lingxing MCP. */
          description?: string;
          /** The current JSON Schema for the tool arguments, supplied by Lingxing MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
  }
}
