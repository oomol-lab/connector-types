import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Teamtailor departments with optional include and cursor pagination. */
    "teamtailor.list_departments": {
      input: {
        /** The Teamtailor stack that stores the account data. */
        stack?: "eu" | "na";
        /**
         * The number of resources to return. Teamtailor allows at most 30.
         * @minimum 1
         * @maximum 30
         */
        pageSize?: number;
        /**
         * The cursor for the next page returned by Teamtailor links.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * The cursor for the previous page returned by Teamtailor links.
         * @minLength 1
         */
        pageBefore?: string;
        /** JSON:API relationship names to include in the Teamtailor response. */
        include?: Array<string>;
        /**
         * Teamtailor sort expression, such as id or name.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Teamtailor department resource objects. */
        data: Array<Record<string, unknown>>;
        /** Included JSON:API resources returned by Teamtailor. */
        included: Array<Record<string, unknown>>;
        /** Teamtailor JSON:API pagination links. */
        links: Record<string, unknown> | null;
        /** Teamtailor JSON:API response metadata. */
        meta: Record<string, unknown> | null;
        /** The raw Teamtailor JSON:API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Teamtailor jobs with optional department, location, status, include, and cursor pagination parameters. */
    "teamtailor.list_jobs": {
      input: {
        /** The Teamtailor stack that stores the account data. */
        stack?: "eu" | "na";
        /**
         * The number of resources to return. Teamtailor allows at most 30.
         * @minimum 1
         * @maximum 30
         */
        pageSize?: number;
        /**
         * The cursor for the next page returned by Teamtailor links.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * The cursor for the previous page returned by Teamtailor links.
         * @minLength 1
         */
        pageBefore?: string;
        /** JSON:API relationship names to include in the Teamtailor response. */
        include?: Array<string>;
        /**
         * Only return jobs for this Teamtailor department ID.
         * @minLength 1
         */
        departmentId?: string;
        /**
         * Only return jobs for this Teamtailor location ID.
         * @minLength 1
         */
        locationId?: string;
        /**
         * Only return jobs matching this Teamtailor status.
         * @minLength 1
         */
        status?: string;
        /**
         * Teamtailor sort expression, such as id or -created-at.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Teamtailor job resource objects. */
        data: Array<Record<string, unknown>>;
        /** Included JSON:API resources returned by Teamtailor. */
        included: Array<Record<string, unknown>>;
        /** Teamtailor JSON:API pagination links. */
        links: Record<string, unknown> | null;
        /** Teamtailor JSON:API response metadata. */
        meta: Record<string, unknown> | null;
        /** The raw Teamtailor JSON:API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Teamtailor locations with optional include and cursor pagination. */
    "teamtailor.list_locations": {
      input: {
        /** The Teamtailor stack that stores the account data. */
        stack?: "eu" | "na";
        /**
         * The number of resources to return. Teamtailor allows at most 30.
         * @minimum 1
         * @maximum 30
         */
        pageSize?: number;
        /**
         * The cursor for the next page returned by Teamtailor links.
         * @minLength 1
         */
        pageAfter?: string;
        /**
         * The cursor for the previous page returned by Teamtailor links.
         * @minLength 1
         */
        pageBefore?: string;
        /** JSON:API relationship names to include in the Teamtailor response. */
        include?: Array<string>;
        /**
         * Teamtailor sort expression, such as id or name.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Teamtailor location resource objects. */
        data: Array<Record<string, unknown>>;
        /** Included JSON:API resources returned by Teamtailor. */
        included: Array<Record<string, unknown>>;
        /** Teamtailor JSON:API pagination links. */
        links: Record<string, unknown> | null;
        /** Teamtailor JSON:API response metadata. */
        meta: Record<string, unknown> | null;
        /** The raw Teamtailor JSON:API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Teamtailor job by ID with optional included relationships. */
    "teamtailor.retrieve_job": {
      input: {
        /** The Teamtailor stack that stores the account data. */
        stack?: "eu" | "na";
        /**
         * The Teamtailor job ID to retrieve.
         * @minLength 1
         */
        jobId: string;
        /** JSON:API relationship names to include in the Teamtailor response. */
        include?: Array<string>;
      };
      output: {
        /** A Teamtailor JSON:API resource object. */
        data: Record<string, unknown>;
        /** Included JSON:API resources returned by Teamtailor. */
        included: Array<Record<string, unknown>>;
        /** Teamtailor JSON:API pagination links. */
        links: Record<string, unknown> | null;
        /** Teamtailor JSON:API response metadata. */
        meta: Record<string, unknown> | null;
        /** The raw Teamtailor JSON:API response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
