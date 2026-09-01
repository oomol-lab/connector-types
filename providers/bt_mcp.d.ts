import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current BT Panel MCP tool with JSON arguments. Discover the tool first and obtain explicit confirmation because the server may expose command execution, firewall changes, file writes, or irreversible deletion operations. */
    "bt_mcp.call_tool": {
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
        /** The BT Panel result object with the documented common status and message fields plus tool-specific fields. */
        result: {
          /** Whether the BT Panel tool completed successfully. */
          status: boolean;
          /** The result or error message returned by BT Panel. */
          msg: string;
          [key: string]: unknown;
        };
      };
    };
    /** Discover the current server-management tools, behavior annotations, and live input schemas exposed by this BT Panel MCP connection. */
    "bt_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed by the connected BT Panel MCP server. */
        tools: Array<{
          /**
           * The exact BT Panel MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by BT Panel MCP. */
          description?: string;
          /** MCP behavior hints supplied by the connected BT Panel server. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify the managed server. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform a destructive server operation. */
            destructiveHint?: boolean;
            /** Whether repeating the same call is expected to have no additional effect. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with systems outside BT Panel. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by BT Panel MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
  }
}
