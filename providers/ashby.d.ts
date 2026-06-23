import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve information about the Ashby API key used for this connection. */
    "ashby.api_key_info": {
      input: Record<string, never>;
      output: {
        /** Information about the Ashby API key. */
        apiKey: {
          /** The name of the API key. */
          title: string | null;
          /** The API key creation timestamp returned by Ashby. */
          createdAt: string | null;
          /** Permission scopes authorized for the API key. */
          scopes: Array<string>;
          /** The raw object returned by Ashby. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Ashby candidates with optional pagination and incremental sync filters. */
    "ashby.list_candidates": {
      input: {
        /** A timestamp in milliseconds since the Unix epoch. */
        createdAfter?: number;
        /**
         * Opaque cursor indicating which page of Ashby results to fetch.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Opaque token representing the last successful Ashby incremental sync.
         * @minLength 1
         */
        syncToken?: string;
        /**
         * The maximum number of items to return. The maximum is 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Pagination and sync metadata returned by Ashby. */
        page: {
          /** Whether another page of data is available. */
          moreDataAvailable: boolean;
          /** The cursor to use for the next page when available. */
          nextCursor: string | null;
          /** The sync token returned after a completed sync when available. */
          syncToken: string | null;
        };
        /** Candidates returned by Ashby. */
        candidates: Array<Record<string, unknown>>;
      };
    };
    /** List Ashby jobs with optional status, timestamp, expansion, pagination, and sync filters. */
    "ashby.list_jobs": {
      input: {
        /** A timestamp in milliseconds since the Unix epoch. */
        createdAfter?: number;
        /**
         * Opaque cursor indicating which page of Ashby results to fetch.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Opaque token representing the last successful Ashby incremental sync.
         * @minLength 1
         */
        syncToken?: string;
        /**
         * The maximum number of items to return. The maximum is 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * When supplied, only jobs with the provided status values are returned.
         * @minItems 1
         */
        status?: Array<"Draft" | "Open" | "Closed" | "Archived">;
        /** A timestamp in milliseconds since the Unix epoch. */
        openedAfter?: number;
        /** A timestamp in milliseconds since the Unix epoch. */
        openedBefore?: number;
        /** A timestamp in milliseconds since the Unix epoch. */
        closedAfter?: number;
        /** A timestamp in milliseconds since the Unix epoch. */
        closedBefore?: number;
        /** Whether to include unpublished job posting IDs. */
        includeUnpublishedJobPostingsIds?: boolean;
        /**
         * Related job objects to expand in Ashby's response.
         * @minItems 1
         */
        expand?: Array<"location" | "openings">;
      };
      output: {
        /** Pagination and sync metadata returned by Ashby. */
        page: {
          /** Whether another page of data is available. */
          moreDataAvailable: boolean;
          /** The cursor to use for the next page when available. */
          nextCursor: string | null;
          /** The sync token returned after a completed sync when available. */
          syncToken: string | null;
        };
        /** Jobs returned by Ashby. */
        jobs: Array<Record<string, unknown>>;
      };
    };
    /** Search Ashby candidates by email and/or name for small result sets such as autocomplete. */
    "ashby.search_candidates": {
      input: {
        /**
         * The candidate email address to search for.
         * @minLength 1
         * @format email
         */
        email?: string;
        /**
         * The candidate name to search for.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** Candidates matching the search parameters. */
        candidates: Array<Record<string, unknown>>;
      };
    };
  }
}
