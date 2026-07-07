import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read one Statsig dynamic config by ID. */
    "statsig.get_dynamic_config": {
      input: {
        /**
         * The Statsig dynamic config ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The message returned by Statsig. */
        message: string;
        /** The Statsig dynamic config returned by the Console API. */
        data: Record<string, unknown>;
        /** The raw Statsig API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Read one Statsig feature gate by ID. */
    "statsig.get_gate": {
      input: {
        /**
         * The Statsig gate ID.
         * @minLength 1
         */
        id: string;
        /** Whether to include archive metadata for an archived gate. */
        includeArchiveMetadata?: boolean;
      };
      output: {
        /** The message returned by Statsig. */
        message: string;
        /** The Statsig gate returned by the Console API. */
        data: Record<string, unknown>;
        /** The raw Statsig API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the Statsig project information visible to the Console API key. */
    "statsig.get_project": {
      input: Record<string, never>;
      output: {
        /** The message returned by Statsig. */
        message: string;
        /** The Statsig project information. */
        data: Record<string, unknown>;
        /** The raw Statsig API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Read one Statsig segment by ID. */
    "statsig.get_segment": {
      input: {
        /**
         * The Statsig segment ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The message returned by Statsig. */
        message: string;
        /** The Statsig segment returned by the Console API. */
        data: Record<string, unknown>;
        /** The raw Statsig API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Statsig dynamic configs with optional lifecycle, ownership, and paging filters. */
    "statsig.list_dynamic_configs": {
      input: {
        /** The Statsig lifecycle type to filter by. */
        type?: "TEMPORARY" | "PERMANENT" | "STALE";
        /** The Statsig stale classification reason to filter by. */
        typeReason?: "NONE" | "STALE_PROBABLY_LAUNCHED" | "STALE_PROBABLY_UNLAUNCHED" | "STALE_PROBABLY_FORGOTTEN" | "STALE_NO_RULES" | "STALE_PROBABLY_DEAD_CHECK";
        /**
         * Filter by the associated Statsig release pipeline ID.
         * @minLength 1
         */
        releasePipelineID?: string;
        /**
         * Filter by the Statsig team ID.
         * @minLength 1
         */
        teamID?: string;
        /**
         * Filter by the Statsig target app ID.
         * @minLength 1
         */
        targetAppID?: string;
        /**
         * Filter by the creator name.
         * @minLength 1
         */
        creatorName?: string;
        /**
         * Filter by the creator ID.
         * @minLength 1
         */
        creatorID?: string;
        /**
         * Filter by Statsig tags.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         */
        limit?: number;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The message returned by Statsig. */
        message: string;
        /** The Statsig dynamic configs returned by the Console API. */
        data: Array<Record<string, unknown>>;
        /** Statsig pagination metadata. */
        pagination: {
          /** The number of items returned per page. */
          itemsPerPage?: number;
          /** The current page number. */
          pageNumber?: number;
          /** The next page URL or token when Statsig returns one. */
          nextPage?: string | null;
          /** The previous page URL or token when Statsig returns one. */
          previousPage?: string | null;
          /** The total number of matching items when Statsig returns it. */
          totalItems?: number;
          /** The URL for all results when Statsig returns it. */
          all?: string;
          [key: string]: unknown;
        };
        /** The raw Statsig API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Statsig feature gates with optional lifecycle, ownership, and paging filters. */
    "statsig.list_gates": {
      input: {
        /**
         * Filter by Statsig ID types.
         * @minItems 1
         */
        idTypes?: Array<string>;
        /** The Statsig gate lifecycle type to filter by. */
        type?: "TEMPORARY" | "PERMANENT" | "STALE" | "TEMPLATE";
        /** The Statsig gate stale classification reason to filter by. */
        typeReason?: "NONE" | "STALE_PROBABLY_LAUNCHED" | "STALE_PROBABLY_UNLAUNCHED" | "STALE_PROBABLY_FORGOTTEN" | "STALE_NO_RULES" | "STALE_PROBABLY_DEAD_CHECK" | "STALE_EMPTY_CHECKS" | "STALE_ALL_TRUE" | "STALE_ALL_FALSE";
        /**
         * Filter by sampled pass-rate buckets.
         * @minItems 1
         */
        passRates?: Array<"0" | "100" | "INBETWEEN">;
        /**
         * Filter by rollout-rate buckets.
         * @minItems 1
         */
        rolloutRates?: Array<"0" | "100" | "INBETWEEN">;
        /** Whether to include archived gates. */
        includeArchived?: boolean;
        /** Whether to include archive metadata for archived gates. */
        includeArchiveMetadata?: boolean;
        /** Filter by whether Store 0/100 Exposures is enabled. */
        store0100Exposures?: boolean;
        /**
         * Filter by the associated Statsig release pipeline ID.
         * @minLength 1
         */
        releasePipelineID?: string;
        /**
         * Filter by the Statsig team ID.
         * @minLength 1
         */
        teamID?: string;
        /**
         * Filter by the Statsig target app ID.
         * @minLength 1
         */
        targetAppID?: string;
        /**
         * Filter by the creator name.
         * @minLength 1
         */
        creatorName?: string;
        /**
         * Filter by the creator ID.
         * @minLength 1
         */
        creatorID?: string;
        /**
         * Filter by Statsig tags.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         */
        limit?: number;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The message returned by Statsig. */
        message: string;
        /** The Statsig gates returned by the Console API. */
        data: Array<Record<string, unknown>>;
        /** Statsig pagination metadata. */
        pagination: {
          /** The number of items returned per page. */
          itemsPerPage?: number;
          /** The current page number. */
          pageNumber?: number;
          /** The next page URL or token when Statsig returns one. */
          nextPage?: string | null;
          /** The previous page URL or token when Statsig returns one. */
          previousPage?: string | null;
          /** The total number of matching items when Statsig returns it. */
          totalItems?: number;
          /** The URL for all results when Statsig returns it. */
          all?: string;
          [key: string]: unknown;
        };
        /** The raw Statsig API response object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Statsig segments using page-based pagination. */
    "statsig.list_segments": {
      input: {
        /**
         * The maximum number of results to return per page.
         * @minimum 1
         */
        limit?: number;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The message returned by Statsig. */
        message: string;
        /** The Statsig segments returned by the Console API. */
        data: Array<Record<string, unknown>>;
        /** Statsig pagination metadata. */
        pagination: {
          /** The number of items returned per page. */
          itemsPerPage?: number;
          /** The current page number. */
          pageNumber?: number;
          /** The next page URL or token when Statsig returns one. */
          nextPage?: string | null;
          /** The previous page URL or token when Statsig returns one. */
          previousPage?: string | null;
          /** The total number of matching items when Statsig returns it. */
          totalItems?: number;
          /** The URL for all results when Statsig returns it. */
          all?: string;
          [key: string]: unknown;
        };
        /** The raw Statsig API response object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
