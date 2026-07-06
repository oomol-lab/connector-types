import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one Recruit CRM candidate by slug or path identifier. */
    "recruitcrm.get_candidate": {
      input: {
        /**
         * The Recruit CRM candidate slug or path identifier to retrieve.
         * @minLength 1
         */
        candidate: string;
      };
      output: {
        /** A Recruit CRM candidate object. */
        candidate: Record<string, unknown>;
        /** The raw Recruit CRM API response. */
        raw: unknown;
      };
    };
    /** Fetch one Recruit CRM company by slug or path identifier. */
    "recruitcrm.get_company": {
      input: {
        /**
         * The Recruit CRM company slug or path identifier to retrieve.
         * @minLength 1
         */
        company: string;
      };
      output: {
        /** A Recruit CRM company object. */
        company: Record<string, unknown>;
        /** The raw Recruit CRM API response. */
        raw: unknown;
      };
    };
    /** Fetch one Recruit CRM contact by slug or path identifier. */
    "recruitcrm.get_contact": {
      input: {
        /**
         * The Recruit CRM contact slug or path identifier to retrieve.
         * @minLength 1
         */
        contact: string;
      };
      output: {
        /** A Recruit CRM contact object. */
        contact: Record<string, unknown>;
        /** The raw Recruit CRM API response. */
        raw: unknown;
      };
    };
    /** Fetch one Recruit CRM job by slug or path identifier. */
    "recruitcrm.get_job": {
      input: {
        /**
         * The Recruit CRM job slug or path identifier to retrieve.
         * @minLength 1
         */
        job: string;
      };
      output: {
        /** A Recruit CRM job object. */
        job: Record<string, unknown>;
        /** The raw Recruit CRM API response. */
        raw: unknown;
      };
    };
    /** List candidates from Recruit CRM using the official Recruit CRM API with optional pagination. */
    "recruitcrm.list_candidates": {
      input: {
        /**
         * One-based page number to request from Recruit CRM.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of records to return from Recruit CRM.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Candidate records returned by Recruit CRM. */
        candidates: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Recruit CRM, or null. */
        pagination: unknown;
        /** The raw Recruit CRM API response. */
        raw: unknown;
      };
    };
    /** List companies from Recruit CRM using the official Recruit CRM API with optional pagination. */
    "recruitcrm.list_companies": {
      input: {
        /**
         * One-based page number to request from Recruit CRM.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of records to return from Recruit CRM.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Company records returned by Recruit CRM. */
        companies: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Recruit CRM, or null. */
        pagination: unknown;
        /** The raw Recruit CRM API response. */
        raw: unknown;
      };
    };
    /** List contacts from Recruit CRM using the official Recruit CRM API with optional pagination. */
    "recruitcrm.list_contacts": {
      input: {
        /**
         * One-based page number to request from Recruit CRM.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of records to return from Recruit CRM.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Contact records returned by Recruit CRM. */
        contacts: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Recruit CRM, or null. */
        pagination: unknown;
        /** The raw Recruit CRM API response. */
        raw: unknown;
      };
    };
    /** List jobs from Recruit CRM using the official Recruit CRM API with optional pagination. */
    "recruitcrm.list_jobs": {
      input: {
        /**
         * One-based page number to request from Recruit CRM.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of records to return from Recruit CRM.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** Job records returned by Recruit CRM. */
        jobs: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Recruit CRM, or null. */
        pagination: unknown;
        /** The raw Recruit CRM API response. */
        raw: unknown;
      };
    };
  }
}
