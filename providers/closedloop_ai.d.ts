import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read the stored source behind an insight using its exact conversation ID and source. Keep source-completeness warnings alongside any quotation. */
    "closedloop_ai.get_conversation": {
      input: {
        /**
         * Full ClosedLoop AI conversation ID from the insight pointer; not the upstream product URL or ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /** Exact source value supplied by the conversation pointer. */
        source: "gong" | "fireflies" | "granola" | "plaud" | "readai" | "google_meet" | "noota" | "intercom" | "freshdesk" | "ada" | "typeform" | "slack" | "mcp" | "canny" | "uservoice" | "email" | "hubspot_email";
      };
      output: {
        /** All original MCP content blocks, including evidence and completeness warnings. */
        content: Array<{
          /** MCP content block type. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Original structured tool data, when the upstream tool supplies it. */
        structuredContent?: Record<string, unknown>;
        /** Whether the upstream tool reported an error. */
        isError?: boolean;
        /** Original MCP result metadata, when present. */
        _meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Open one complete product insight and its actual conversation pointer; do not substitute a shortened ID. */
    "closedloop_ai.get_insight": {
      input: {
        /**
         * Full insight ID returned by search_insights.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** All original MCP content blocks, including evidence and completeness warnings. */
        content: Array<{
          /** MCP content block type. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Original structured tool data, when the upstream tool supplies it. */
        structuredContent?: Record<string, unknown>;
        /** Whether the upstream tool reported an error. */
        isError?: boolean;
        /** Original MCP result metadata, when present. */
        _meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read aggregate product-insight counts and risk categories for a selected time window. */
    "closedloop_ai.get_overview": {
      input: {
        /** Time window; the upstream default is 30d. */
        time_range?: "7d" | "30d" | "90d" | "all";
      };
      output: {
        /** All original MCP content blocks, including evidence and completeness warnings. */
        content: Array<{
          /** MCP content block type. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Original structured tool data, when the upstream tool supplies it. */
        structuredContent?: Record<string, unknown>;
        /** Whether the upstream tool reported an error. */
        isError?: boolean;
        /** Original MCP result metadata, when present. */
        _meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find product insights for a topic and inspect result previews before opening exact evidence. This provider exposes the topic, paging, sort and date subset of the upstream search filters. */
    "closedloop_ai.search_insights": {
      input: {
        /** Topic or keywords; omit to use the upstream unfiltered search. */
        query?: string;
        /**
         * Results per page; upstream default 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of ranked matches to skip; upstream default 0.
         * @minimum 0
         */
        offset?: number;
        /** Upstream ranking; default relevance. */
        sort?: "relevance" | "severity" | "frustration" | "recency";
        /**
         * Earliest insight date, YYYY-MM-DD.
         * @format date
         */
        date_from?: string;
        /**
         * Latest insight date, YYYY-MM-DD.
         * @format date
         */
        date_to?: string;
      };
      output: {
        /** All original MCP content blocks, including evidence and completeness warnings. */
        content: Array<{
          /** MCP content block type. */
          type: string;
          [key: string]: unknown;
        }>;
        /** Original structured tool data, when the upstream tool supplies it. */
        structuredContent?: Record<string, unknown>;
        /** Whether the upstream tool reported an error. */
        isError?: boolean;
        /** Original MCP result metadata, when present. */
        _meta?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
