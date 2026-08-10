import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search the official Cloudflare developer documentation for relevant guidance and examples. */
    "cloudflare_mcp.docs": {
      input: {
        /**
         * The Cloudflare documentation search query.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** Matching documentation excerpts. */
        results?: Array<{
          /** The semantic similarity score. */
          similarity?: number;
          /** The source document identifier. */
          id?: string;
          /**
           * The Cloudflare developer documentation URL.
           * @format uri
           */
          url?: string;
          /** The documentation page title. */
          title?: string;
          /** The matching documentation text. */
          text?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Run sandboxed JavaScript on Cloudflare's official MCP server to call API endpoints discovered with search. */
    "cloudflare_mcp.execute": {
      input: {
        /**
         * A JavaScript async arrow function. Use search before execute to discover the exact Cloudflare API path and parameters.
         * @minLength 1
         */
        code: string;
        /**
         * An optional Cloudflare account ID. Supply it for account-scoped operations when a user token cannot be auto-detected.
         * @minLength 1
         */
        account_id?: string;
      };
      output: unknown;
    };
    /** Run sandboxed JavaScript against Cloudflare's OpenAPI specification to discover API endpoints and parameters. */
    "cloudflare_mcp.search": {
      input: {
        /**
         * A JavaScript async arrow function. Use search before execute to discover the exact Cloudflare API path and parameters.
         * @minLength 1
         */
        code: string;
      };
      output: unknown;
    };
  }
}
