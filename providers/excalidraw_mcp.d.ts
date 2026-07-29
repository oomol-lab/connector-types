import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Render a hand-drawn Excalidraw diagram from a JSON array string of elements. */
    "excalidraw_mcp.create_view": {
      input: {
        /**
         * A compact JSON array string of Excalidraw elements. Call read_me first for the element format and ordering rules.
         * @minLength 2
         */
        elements: string;
      };
      output: {
        /**
         * The Excalidraw checkpoint ID returned by the tool.
         * @minLength 1
         */
        checkpointId: string;
        /**
         * The confirmation message returned by the tool.
         * @minLength 1
         */
        content: string;
      };
    };
    /** Fetch the Excalidraw element format guide and drawing tips from the MCP server. */
    "excalidraw_mcp.read_me": {
      input: Record<string, never>;
      output: {
        /**
         * The Excalidraw MCP reference text returned by read_me.
         * @minLength 1
         */
        content: string;
      };
    };
  }
}
