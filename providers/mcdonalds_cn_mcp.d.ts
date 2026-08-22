import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current McDonald's China MCP tool with JSON arguments. Discover the tool first and confirm the user's intent before actions that create an address, claim coupons, redeem points, or create an order. */
    "mcdonalds_cn_mcp.call_tool": {
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
    /** Discover the current McDonald's China ordering, coupon, campaign, and points-mall MCP tools with their live input schemas and behavior annotations. */
    "mcdonalds_cn_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected McDonald's China account. */
        tools: Array<{
          /**
           * The exact McDonald's China MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by McDonald's China MCP. */
          description?: string;
          /** MCP behavior hints supplied by McDonald's China. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify McDonald's China data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform a destructive operation. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to have no additional effect. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside McDonald's China. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by McDonald's China MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
  }
}
