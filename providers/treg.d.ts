import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a Treg catalog endpoint or registered team tool with JSON parameters. Read catalog_get first and use its method, inputs and price. Calls can modify or delete upstream resources and spend team credits. Only synchronous JSON responses are supported; use URL inputs for remote files where the tool supports them. After a timeout, verify the outcome before retrying. */
    "treg.call_tool": {
      input: {
        /**
         * Catalog endpoint ID or registered team tool name.
         * @minLength 1
         * @pattern \S
         */
        tool: string;
        /** Relative upstream path for a registered team tool; omit for catalog endpoints. */
        path?: string;
        /** HTTP method from the tool documentation; defaults to GET. */
        method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
        /** Query parameters; arrays produce repeated parameters. */
        query?: Record<string, string | number | boolean | Array<string | number | boolean>>;
        /** Upstream and Treg routing headers. Token, team, host and transport headers cannot be overridden. */
        headers?: Record<string, string>;
        /** JSON request body matching the tool contract; not allowed for GET or HEAD. */
        body?: unknown;
      };
      output: {
        /** Upstream JSON response, or null for an empty response. */
        result: unknown;
        /** Successful upstream HTTP status. */
        status: number;
        /** Charged amount from X-Treg-Cost-Micro, when provided. */
        cost_micro: number | null;
        /** Provider named by X-Treg-Served-By, when provided. */
        served_by: string | null;
      };
    };
    /** Read a Treg catalog tool's parameters, method, price and examples before calling it. */
    "treg.catalog_get": {
      input: {
        /**
         * Exact endpoint ID returned by catalog_search.
         * @minLength 1
         * @pattern \S
         */
        endpoint_id: string;
      };
      output: {
        /** Catalog endpoint ID. */
        id?: string;
        /** Upstream provider identifier. */
        provider?: string;
        /** HTTP method used to call the endpoint. */
        method?: string;
        /** Upstream endpoint path. */
        path?: string;
        /** Provider-defined input parameters and body requirements. */
        input?: Record<string, unknown>;
        /** Pricing details and billing conditions. */
        cost?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search Treg's catalog by task and compare available tools and prices before calling one. */
    "treg.catalog_search": {
      input: {
        /** Task or keywords to search for; omit to browse. */
        q?: string;
        /**
         * Maximum results to return, default 25.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Only tools added within this many days.
         * @minimum 1
         */
        added_within_days?: number;
        /** Sort by relevance or newest additions. */
        sort?: "" | "best" | "newest";
        /** Use agent search or omit for keyword search. */
        engine?: "" | "agent";
      };
      output: {
        /** The search query. */
        query?: string;
        /** Number of returned results. */
        count?: number;
        /** Total matching tools. */
        total?: number;
        /** Matching tools. */
        results?: Array<Record<string, unknown>>;
        /** Suggested next steps. */
        hints?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Read the connected team's current prepaid Treg balance in integer micro-USD. */
    "treg.get_balance": {
      input: Record<string, never>;
      output: {
        /** Team slug. */
        team: string;
        /** Prepaid balance in micro-USD; one USD equals 1000000 micro-USD. */
        balance_micro: number;
      };
    };
    /** List the connected team's registered tools that this token is allowed to use. */
    "treg.list_tools": {
      input: Record<string, never>;
      output: {
        /** Registered tools available to the caller. */
        tools: Array<Record<string, unknown>>;
      };
    };
  }
}
