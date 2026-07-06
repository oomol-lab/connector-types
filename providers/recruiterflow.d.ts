import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Recruiterflow candidate by prospect ID. */
    "recruiterflow.get_candidate": {
      input: {
        /**
         * The Recruiterflow candidate or prospect identifier.
         * @exclusiveMinimum 0
         */
        candidateId: number;
      };
      output: {
        /** One raw Recruiterflow record returned by the API. */
        candidate: Record<string, unknown>;
        /** The raw Recruiterflow response payload. */
        raw: unknown;
      };
    };
    /** Get one Recruiterflow job by its job ID. */
    "recruiterflow.get_job": {
      input: {
        /**
         * The Recruiterflow job identifier.
         * @exclusiveMinimum 0
         */
        jobId: number;
        /** Whether Recruiterflow should include job pipeline stages. */
        includeStages?: boolean;
      };
      output: {
        /** One raw Recruiterflow record returned by the API. */
        job: Record<string, unknown>;
        /** The raw Recruiterflow response payload. */
        raw: unknown;
      };
    };
    /** Get one Recruiterflow user by user ID or email address. */
    "recruiterflow.get_user": {
      input: {
        /**
         * The Recruiterflow user identifier.
         * @exclusiveMinimum 0
         */
        userId?: number;
        /**
         * The Recruiterflow user email address.
         * @minLength 1
         */
        email?: string;
      };
      output: {
        /** One raw Recruiterflow record returned by the API. */
        user: Record<string, unknown>;
        /** The raw Recruiterflow response payload. */
        raw: unknown;
      };
    };
    /** List Recruiterflow candidates with optional pagination and inclusion flags. */
    "recruiterflow.list_candidates": {
      input: {
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        currentPage?: number;
        /** Whether Recruiterflow should include total item counts. */
        includeCount?: boolean;
        /** Whether Recruiterflow should include candidate file metadata. */
        includeFiles?: boolean;
        /** Whether Recruiterflow should include candidate notes. */
        includeNotes?: boolean;
      };
      output: {
        /** The Recruiterflow candidates returned by the API. */
        candidates: Array<Record<string, unknown>>;
        /** The total number of matching records when Recruiterflow returns it. */
        totalItems: number | null;
        /** Recruiterflow candidate rank metadata when returned. */
        rank: Record<string, unknown> | null;
        /** The raw Recruiterflow response payload. */
        raw: unknown;
      };
    };
    /** List Recruiterflow jobs with optional pagination and inclusion flags. */
    "recruiterflow.list_jobs": {
      input: {
        /**
         * The number of records to return per page.
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        currentPage?: number;
        /** Whether Recruiterflow should include total item counts. */
        includeCount?: boolean;
        /** Whether Recruiterflow should include job notes in each record. */
        includeNotes?: boolean;
        /** Whether Recruiterflow should include job descriptions in each record. */
        includeDescription?: boolean;
        /** Whether to return only open jobs. */
        onlyOpen?: boolean;
      };
      output: {
        /** The Recruiterflow jobs returned by the API. */
        jobs: Array<Record<string, unknown>>;
        /** The total number of matching records when Recruiterflow returns it. */
        totalItems: number | null;
        /** The total number of current openings when Recruiterflow returns it. */
        totalCurrentOpenings: number | null;
        /** The raw Recruiterflow response payload. */
        raw: unknown;
      };
    };
    /** List Recruiterflow users in the connected workspace. */
    "recruiterflow.list_users": {
      input: {
        /** Whether Recruiterflow should include total user counts. */
        includeCount?: boolean;
      };
      output: {
        /** The Recruiterflow users returned by the API. */
        users: Array<Record<string, unknown>>;
        /** The total number of matching records when Recruiterflow returns it. */
        totalItems: number | null;
        /** The raw Recruiterflow response payload. */
        raw: unknown;
      };
    };
  }
}
