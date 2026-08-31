import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Clear updates previously applied to one sourced Indeed job posting. */
    "indeed.clear_sourced_job_posting_updates": {
      input: {
        /**
         * Sourced posting UUID or EmployerJob IRI.
         * @minLength 1
         */
        sourcedPostingId: string;
      };
      output: {
        /** Indeed GraphQL response data. */
        data?: Record<string, unknown> | null;
        /** Indeed GraphQL errors. */
        errors?: Array<{
          /**
           * Indeed GraphQL error message.
           * @minLength 1
           */
          message: string;
          /** The GraphQL response path. */
          path?: Array<unknown>;
          /** Indeed GraphQL error extensions. */
          extensions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List jobs for the employer represented by the OAuth token, with filters and cursor pagination. */
    "indeed.find_employer_jobs": {
      input: {
        /**
         * Sponsored Jobs API source ID filter.
         * @minLength 1
         */
        legacySourceId?: string;
        /**
         * Indeed job feed types to include.
         * @maxItems 2
         */
        jobFeedTypes?: Array<string>;
        /** Whether to include multi-location jobs. */
        includeMultiLocationJobs?: boolean;
        /** ATS requisition IDs to include. */
        jobRequisitionIds?: Array<string>;
        /**
         * Maximum jobs to return.
         * @minimum 1
         * @maximum 1000
         * @default 10
         */
        first?: number;
        /**
         * Cursor for backward pagination.
         * @minLength 1
         */
        before?: string;
        /**
         * Cursor for forward pagination.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** Indeed employer jobs in this page. */
        employerJobs: Array<{
          /**
           * Indeed EmployerJob IRI.
           * @minLength 1
           */
          id: string;
          /** Indeed job data. */
          jobData?: Record<string, unknown> | null;
          /** Indeed role data. */
          roleData?: Record<string, unknown> | null;
          /** Indeed job management URLs. */
          managementUrls?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /**
         * Estimated total number of matching jobs.
         * @minimum 0
         */
        estimatedTotalResultsCount: number;
        /** Cursor pagination information. */
        pageInfo: {
          /** Cursor for the next page. */
          endCursor: string | null;
          /** Whether a next page exists. */
          hasNextPage: boolean;
          /** Whether a previous page exists. */
          hasPreviousPage: boolean;
          /** Cursor for the previous page. */
          startCursor: string | null;
        };
      };
    };
    /** Get the Indeed user and associated employers represented by the OAuth access token. */
    "indeed.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * Indeed user account ID.
         * @minLength 1
         */
        sub: string;
        /**
         * Email address when the email scope was granted.
         * @format email
         */
        email?: string;
        /** Whether Indeed verified the email address. */
        email_verified?: boolean;
        /** Employers associated with the current Indeed user. */
        employers?: Array<{
          /**
           * Indeed employer ID.
           * @minLength 1
           */
          id: string;
          /**
           * Indeed employer name.
           * @minLength 1
           */
          name: string;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get one Indeed employer job by its EmployerJob IRI. */
    "indeed.get_job": {
      input: {
        /**
         * EmployerJob IRI returned by Indeed.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** An Indeed employer job. */
        job: {
          /**
           * Indeed EmployerJob IRI.
           * @minLength 1
           */
          id: string;
          /** Indeed job data. */
          jobData?: Record<string, unknown> | null;
          /** Indeed role data. */
          roleData?: Record<string, unknown> | null;
          /** Indeed job management URLs. */
          managementUrls?: Record<string, unknown> | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get multiple Indeed employer jobs by their EmployerJob IRIs. */
    "indeed.get_jobs": {
      input: {
        /**
         * Indeed EmployerJob IRIs to retrieve.
         * @minItems 1
         */
        ids: Array<string>;
      };
      output: {
        /** Indeed employer jobs in request order. */
        jobs: Array<{
          /**
           * Indeed EmployerJob IRI.
           * @minLength 1
           */
          id: string;
          /** Indeed job data. */
          jobData?: Record<string, unknown> | null;
          /** Indeed role data. */
          roleData?: Record<string, unknown> | null;
          /** Indeed job management URLs. */
          managementUrls?: Record<string, unknown> | null;
          [key: string]: unknown;
        } | null>;
      };
    };
    /** Update supported fields on one sourced Indeed job posting. */
    "indeed.update_sourced_job_postings": {
      input: {
        /** Fields to update on the sourced job posting. */
        update: {
          /**
           * Sourced posting UUID or EmployerJob IRI.
           * @minLength 1
           */
          sourcedPostingId: string;
          /** Metadata updates for the sourced job posting. */
          metadata?: Record<string, unknown>;
          /** Body updates for the sourced job posting. */
          body?: Record<string, unknown>;
        };
      };
      output: {
        /** Indeed GraphQL response data. */
        data?: Record<string, unknown> | null;
        /** Indeed GraphQL errors. */
        errors?: Array<{
          /**
           * Indeed GraphQL error message.
           * @minLength 1
           */
          message: string;
          /** The GraphQL response path. */
          path?: Array<unknown>;
          /** Indeed GraphQL error extensions. */
          extensions?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
