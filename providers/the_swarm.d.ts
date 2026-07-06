import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch The Swarm company records by company IDs or LinkedIn company identifiers. */
    "the_swarm.fetch_companies": {
      input: {
        /**
         * The Swarm company IDs to fetch.
         * @minItems 1
         * @maxItems 1000
         */
        ids?: Array<string>;
        /**
         * LinkedIn company slugs to fetch.
         * @minItems 1
         * @maxItems 1000
         */
        linkedinNames?: Array<string>;
        /**
         * LinkedIn numeric identifiers accepted by The Swarm.
         * @minItems 1
         * @maxItems 1000
         */
        linkedinIds?: Array<number>;
        /**
         * Company sections to include in the response.
         * @minItems 1
         */
        fields?: Array<"company_info" | "tags">;
      };
      output: {
        /** The company records returned by The Swarm. */
        companies: Array<Record<string, unknown>>;
        /** The company identifiers The Swarm did not find. */
        notFound: Array<string>;
        /** The raw fetch companies response returned by The Swarm. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch The Swarm profile records by profile IDs or LinkedIn identifiers. */
    "the_swarm.fetch_profiles": {
      input: {
        /**
         * The Swarm profile IDs to fetch.
         * @minItems 1
         * @maxItems 1000
         */
        ids?: Array<string>;
        /**
         * LinkedIn profile URL slugs to fetch.
         * @minItems 1
         * @maxItems 1000
         */
        linkedinNames?: Array<string>;
        /**
         * LinkedIn numeric identifiers accepted by The Swarm.
         * @minItems 1
         * @maxItems 1000
         */
        linkedinIds?: Array<number>;
        /**
         * LinkedIn alphanumeric entity IDs to fetch.
         * @minItems 1
         * @maxItems 1000
         */
        linkedinEntityIds?: Array<string>;
        /**
         * Profile sections to include in the response.
         * @minItems 1
         */
        fields?: Array<"profile_info" | "tags" | "lists">;
      };
      output: {
        /** The profile records returned by The Swarm. */
        profiles: Array<Record<string, unknown>>;
        /** The profile identifiers The Swarm did not find. */
        notFound: Array<string>;
        /** The raw fetch profiles response returned by The Swarm. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current The Swarm API credit usage for the authenticated team. */
    "the_swarm.get_credit_usage": {
      input: Record<string, never>;
      output: {
        /**
         * The number of credits consumed in the current billing period.
         * @minimum 0
         */
        usage: number;
        /** The raw credit usage response returned by The Swarm. */
        raw: Record<string, unknown>;
      };
    };
    /** Search The Swarm companies with an Elasticsearch Query DSL query and return company IDs. */
    "the_swarm.search_companies": {
      input: {
        /** The Elasticsearch Query DSL query object sent to The Swarm. */
        query: Record<string, unknown>;
        /**
         * The maximum number of results to return. Use exactly 1000 when stablePagination is true.
         * @minimum 0
         * @maximum 1000
         */
        limit?: number;
        /**
         * The pagination token returned by a previous The Swarm search response.
         * @minLength 1
         * @pattern \S
         */
        paginationToken?: string;
        /** Whether The Swarm should keep pagination stable while retrieving large result sets. When true, limit must be 1000. */
        stablePagination?: boolean;
      };
      output: {
        /** The matching The Swarm identifiers. */
        ids: Array<string>;
        /**
         * The total number of records matching the query.
         * @minimum 0
         */
        totalCount: number;
        /** The pagination token for the next request when more results are available. */
        paginationToken: string | null;
        /** The raw search response returned by The Swarm. */
        raw: Record<string, unknown>;
      };
    };
    /** Search The Swarm profiles with an Elasticsearch Query DSL query and return profile IDs. */
    "the_swarm.search_profiles": {
      input: {
        /** The Elasticsearch Query DSL query object sent to The Swarm. */
        query: Record<string, unknown>;
        /**
         * The maximum number of results to return. Use exactly 1000 when stablePagination is true.
         * @minimum 0
         * @maximum 1000
         */
        limit?: number;
        /**
         * The pagination token returned by a previous The Swarm search response.
         * @minLength 1
         * @pattern \S
         */
        paginationToken?: string;
        /** Whether The Swarm should keep pagination stable while retrieving large result sets. When true, limit must be 1000. */
        stablePagination?: boolean;
        /** Whether to restrict results to profiles connected to your team's network. */
        inNetworkOnly?: boolean;
      };
      output: {
        /** The matching The Swarm identifiers. */
        ids: Array<string>;
        /**
         * The total number of records matching the query.
         * @minimum 0
         */
        totalCount: number;
        /** The pagination token for the next request when more results are available. */
        paginationToken: string | null;
        /** The raw search response returned by The Swarm. */
        raw: Record<string, unknown>;
      };
    };
  }
}
