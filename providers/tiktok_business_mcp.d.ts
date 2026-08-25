import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current TikTok for Business MCP tool with JSON arguments. Discover the live schema first and confirm the user's intent because tools may create ads, change budgets or delivery, revoke access, or delete advertising assets. */
    "tiktok_business_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by TikTok MCP discovery.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the current inputSchema for the selected TikTok MCP tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The current TikTok MCP result after standard MCP content normalization. */
        result: unknown;
      };
    };
    /** List the complete current tool catalog and live input schemas exposed by the connected TikTok for Business MCP account. */
    "tiktok_business_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed by the full MCP connection. */
        tools: Array<{
          /**
           * The exact TikTok MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by TikTok. */
          description?: string;
          /** MCP behavior hints supplied by TikTok for a tool. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether TikTok expects the tool not to modify advertising data. */
            readOnlyHint?: boolean;
            /** Whether TikTok indicates that the tool may perform a destructive operation. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside TikTok Ads. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by TikTok MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
  }
}
