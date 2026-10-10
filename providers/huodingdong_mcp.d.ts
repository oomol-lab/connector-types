import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current Huodingdong ERP MCP tool after discovering its schema with list_tools. Product import creates an asynchronous task; query its task status and distinguish collection success from shop claim success. Pricing simulation requires an explicit region even if the live schema omits that requirement. Inventory is an ERP snapshot, not live platform sellable stock. Inspect tool behavior before calling: this generic entry point also permits future tools that may change or delete business data. */
    "huodingdong_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the selected tool's live schema. Use platform shop IDs, preserve explicit shop and date filters, and supply region for pricing simulation. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** Structured content when supplied; otherwise the complete MCP content envelope. Preserve warnings and missing-data indicators. An accepted import task or successful collection does not guarantee shop claim or publication success. */
        result: unknown;
      };
    };
    /** Discover the connected Huodingdong ERP account's current MCP tools, live argument and result schemas, and behavior annotations for Shopee and TikTok Shop products, inventory, orders, fulfillment, marketing, advertising, profit, business reporting, and product import tasks. */
    "huodingdong_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools available within the connected account's permissions. */
        tools: Array<{
          /**
           * The exact tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current official tool description. */
          description?: string;
          /** Official MCP hints about the tool's behavior. */
          annotations?: Record<string, unknown>;
          /** The live JSON Schema for the tool's arguments. */
          inputSchema: Record<string, unknown>;
          /** The live JSON Schema for the tool's result, if supplied. */
          outputSchema?: Record<string, unknown>;
        }>;
      };
    };
  }
}
