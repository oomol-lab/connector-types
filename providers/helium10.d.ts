import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a Helium 10 MCP tool after verifying it against the official V1 read-only catalog and the connected account's live tool list. */
    "helium10.call_tool": {
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
    /** Discover Helium 10 MCP tools that are both in the official V1 read-only catalog and currently available to the connected account. */
    "helium10.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected Helium 10 account. */
        tools: Array<{
          /**
           * The exact MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by Helium 10 MCP. */
          description?: string;
          /** The current JSON Schema for the tool arguments, supplied by Helium 10 MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
  }
}
