import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Discover current Scrape Creators GET and POST endpoints from the official OpenAPI document. */
    "scrape_creators.discover_endpoints": {
      input: {
        /**
         * Text to match against the category, title, description, or path.
         * @maxLength 200
         */
        query?: string;
        /**
         * An exact OpenAPI category tag to include.
         * @maxLength 100
         */
        category?: string;
        /**
         * The zero-based offset into matching endpoints.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The maximum number of endpoints to return.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** The SHA-256 digest of the current OpenAPI document. */
        catalogVersion: string;
        /** The discovered endpoints in this page. */
        endpoints: Array<{
          /** The HTTP method accepted by this endpoint. */
          method: "GET" | "POST";
          /** The absolute Scrape Creators API path. */
          path: string;
          /** The endpoint category from the first OpenAPI tag. */
          category: string;
          /** The endpoint summary from the OpenAPI document. */
          title: string;
          /** The endpoint description from the OpenAPI document. */
          description: string;
          /**
           * The official documentation URL for this endpoint.
           * @format uri
           */
          documentationUrl: string;
          /** The current query and JSON body request contract. */
          requestSchema: Record<string, unknown>;
        }>;
        /** The total number of endpoints matching the filters. */
        total: number;
        /** The next offset when more endpoints match. */
        nextOffset: number | null;
        /** Whether a recent cached catalog was used after a refresh failure. */
        stale: boolean;
      };
    };
    /** Get the remaining credit balance for the current Scrape Creators API key. */
    "scrape_creators.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /** The remaining API credit balance when returned. */
        balance: number | null;
        /** The complete response returned by Scrape Creators. */
        raw: Record<string, unknown>;
      };
    };
    /** Invoke a currently documented Scrape Creators GET or POST endpoint at the fixed official API origin. */
    "scrape_creators.invoke_endpoint": {
      input: {
        /** The documented endpoint HTTP method. */
        method: "GET" | "POST";
        /**
         * The exact absolute path returned by discover_endpoints.
         * @minLength 1
         */
        path: string;
        /** The query parameters and optional JSON body for the endpoint. */
        request: {
          /** Query values keyed by exact upstream parameter name. */
          query?: Record<string, unknown>;
          /** The JSON body for a documented POST endpoint. */
          body?: unknown;
        };
      };
      output: {
        /** The HTTP method used for the request. */
        method: "GET" | "POST";
        /** The documented API path used for the request. */
        path: string;
        /**
         * The successful upstream HTTP status.
         * @minimum 100
         * @maximum 599
         */
        status: number;
        /** The complete successful response body. */
        response: unknown;
      };
    };
  }
}
