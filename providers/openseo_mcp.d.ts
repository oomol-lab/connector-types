import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call an OpenSEO MCP tool discovered with list_tools. Use list_projects to obtain projectId when required. Research tools may consume credits; inspect the live description and cost tools before starting work. Site audits and tracking runs may require later status queries. This generic action can create, modify, publish, or delete data. Report sharing must be explicitly requested. */
    "openseo_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the selected tool schema. Use the project ID returned by OpenSEO and preserve explicit market, date, and pagination choices. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** Structured content when supplied; otherwise the complete MCP content envelope. Preserve warnings, partial results, credit information, and task status. A submitted task is not a completed result. */
        result: unknown;
      };
    };
    /** Discover OpenSEO MCP tools and their current input/output schemas and behavior annotations. Tools cover projects, keywords, SERP, backlinks, local SEO, rank tracking, AI visibility, Google Search Console, Google Analytics, site audits, and reports. Discover tools before calling them. */
    "openseo_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools available to the connected workspace. */
        tools: Array<{
          /**
           * The exact tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current official tool description. */
          description?: string;
          /** Official hints about side effects and tool behavior. */
          annotations?: Record<string, unknown>;
          /** The live JSON Schema for the tool arguments. */
          inputSchema: Record<string, unknown>;
          /** The live JSON Schema for the tool result, when supplied. */
          outputSchema?: Record<string, unknown>;
        }>;
      };
    };
  }
}
