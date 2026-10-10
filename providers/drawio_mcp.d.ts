import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Build a draw.io diagram from Mermaid or draw.io XML and return a link that opens it in the draw.io editor. Nothing is saved on the draw.io side; share the link with the user to view or edit the diagram. */
    "drawio_mcp.create_diagram": {
      input: Record<string, unknown>;
      output: {
        /**
         * A link that opens the diagram in the draw.io web editor. The diagram source is compressed into the URL fragment.
         * @format uri
         */
        editorUrl: string;
        /** Problems draw.io expects to break rendering, such as XML comments. Fix them and create the diagram again. Items quote attribute values from the diagram source verbatim and may contain line breaks. draw.io only checks XML; Mermaid is converted when the link is opened, so an empty list does not mean the Mermaid source is valid. */
        errors: Array<string>;
        /** Problems draw.io expects may affect rendering of XML, such as edges that reference missing cells. Items quote attribute values from the diagram source verbatim and may contain line breaks. Always empty for Mermaid. */
        warnings: Array<string>;
      };
    };
    /** Search the draw.io shape library for vendor, industry, and icon shapes, such as cloud services, network devices, P&ID symbols, and product logos, and return the style strings to use in draw.io XML. Basic shapes such as rectangles, diamonds, and cylinders do not need a search. */
    "drawio_mcp.search_shapes": {
      input: {
        /**
         * Space-separated keywords, such as `aws lambda`, `cisco router`, `kubernetes pod`, or `pid globe valve`.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * Maximum number of shapes to return.
         * @maximum 50
         * @exclusiveMinimum 0
         * @default 10
         */
        limit?: number;
      };
      output: {
        /** Matching shapes, best match first. Empty when nothing matched. */
        shapes: Array<{
          /** The shape name. */
          title: string;
          /** The draw.io style string to use as the style attribute of an mxCell. */
          style: string;
          /** The default shape width in pixels. */
          width: number;
          /** The default shape height in pixels. */
          height: number;
        }>;
      };
    };
  }
}
