import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get SmartRecruiters candidate details by candidate ID. */
    "smartrecruiters.get_candidate": {
      input: {
        /**
         * The SmartRecruiters resource identifier.
         * @minLength 1
         */
        candidateId: string;
      };
      output: {
        /** A SmartRecruiters candidate returned by the Candidates API. */
        candidate: {
          /**
           * The SmartRecruiters resource identifier.
           * @minLength 1
           */
          id?: string;
          /** The candidate first name returned by SmartRecruiters. */
          firstName?: string;
          /** The candidate last name returned by SmartRecruiters. */
          lastName?: string;
          /** The candidate email address returned by SmartRecruiters. */
          email?: string;
          /** The candidate phone number returned by SmartRecruiters. */
          phoneNumber?: string;
          /** The SmartRecruiters candidate creation timestamp. */
          createdOn?: string;
          /** The SmartRecruiters candidate update timestamp. */
          updatedOn?: string;
          /** The SmartRecruiters location object. */
          location?: {
            /** The location country returned by SmartRecruiters. */
            country?: string;
            /** The location country code returned by SmartRecruiters. */
            countryCode?: string;
            /** The location region returned by SmartRecruiters. */
            region?: string;
            /** The location region code returned by SmartRecruiters. */
            regionCode?: string;
            /** The location city returned by SmartRecruiters. */
            city?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get SmartRecruiters job details by job ID. */
    "smartrecruiters.get_job": {
      input: {
        /**
         * The SmartRecruiters resource identifier.
         * @minLength 1
         */
        jobId: string;
        /**
         * The language code for localized SmartRecruiters job content.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** A SmartRecruiters job returned by the Jobs API. */
        job: {
          /**
           * The SmartRecruiters resource identifier.
           * @minLength 1
           */
          id?: string;
          /** The SmartRecruiters job name. */
          name?: string;
          /** The SmartRecruiters job reference number. */
          refNumber?: string;
          /** The SmartRecruiters job status. */
          status?: string;
          /** The SmartRecruiters job creation timestamp. */
          createdOn?: string;
          /** The SmartRecruiters job update timestamp. */
          updatedOn?: string;
          /** The SmartRecruiters location object. */
          location?: {
            /** The location country returned by SmartRecruiters. */
            country?: string;
            /** The location country code returned by SmartRecruiters. */
            countryCode?: string;
            /** The location region returned by SmartRecruiters. */
            region?: string;
            /** The location region code returned by SmartRecruiters. */
            regionCode?: string;
            /** The location city returned by SmartRecruiters. */
            city?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Search SmartRecruiters jobs with optional filters and cursor pagination. */
    "smartrecruiters.list_jobs": {
      input: {
        /**
         * The SmartRecruiters full-text search query.
         * @minLength 1
         */
        q?: string;
        /**
         * The maximum number of items to return. SmartRecruiters allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The SmartRecruiters pageId cursor returned by a previous page.
         * @minLength 1
         */
        pageId?: string;
        /**
         * The language code for localized SmartRecruiters job content.
         * @minLength 1
         */
        language?: string;
        /**
         * The city filters to apply to SmartRecruiters jobs.
         * @minItems 1
         */
        city?: Array<string>;
        /**
         * The department label filters to apply to SmartRecruiters jobs.
         * @minItems 1
         */
        department?: Array<string>;
        /**
         * An ISO8601-formatted SmartRecruiters date-time boundary.
         * @minLength 1
         */
        updatedAfter?: string;
        /**
         * An ISO8601-formatted SmartRecruiters date-time boundary.
         * @minLength 1
         */
        lastActivityAfter?: string;
      };
      output: {
        /** The SmartRecruiters jobs returned for this page. */
        jobs: Array<{
          /**
           * The SmartRecruiters resource identifier.
           * @minLength 1
           */
          id?: string;
          /** The SmartRecruiters job name. */
          name?: string;
          /** The SmartRecruiters job reference number. */
          refNumber?: string;
          /** The SmartRecruiters job status. */
          status?: string;
          /** The SmartRecruiters job creation timestamp. */
          createdOn?: string;
          /** The SmartRecruiters job update timestamp. */
          updatedOn?: string;
          /** The SmartRecruiters location object. */
          location?: {
            /** The location country returned by SmartRecruiters. */
            country?: string;
            /** The location country code returned by SmartRecruiters. */
            countryCode?: string;
            /** The location region returned by SmartRecruiters. */
            region?: string;
            /** The location region code returned by SmartRecruiters. */
            regionCode?: string;
            /** The location city returned by SmartRecruiters. */
            city?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The page size returned by SmartRecruiters. */
        limit: number | null;
        /** The cursor to pass as pageId to retrieve the next page of jobs. */
        nextPageId: string | null;
        /** The raw SmartRecruiters list response. */
        raw: Record<string, unknown>;
      };
    };
    /** Search SmartRecruiters candidates with optional filters and cursor pagination. */
    "smartrecruiters.search_candidates": {
      input: {
        /**
         * The SmartRecruiters full-text search query.
         * @minLength 1
         */
        q?: string;
        /**
         * The maximum number of items to return. SmartRecruiters allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The SmartRecruiters pageId cursor returned by a previous page.
         * @minLength 1
         */
        pageId?: string;
        /**
         * The SmartRecruiters job IDs used to filter candidate applications.
         * @minItems 1
         */
        jobId?: Array<string>;
        /**
         * The location keywords used to filter candidates.
         * @minItems 1
         */
        location?: Array<string>;
        /**
         * The candidate status filters in the context of a job.
         * @minItems 1
         */
        status?: Array<string>;
        /**
         * The candidate tag filters to apply.
         * @minItems 1
         */
        tag?: Array<string>;
        /**
         * An ISO8601-formatted SmartRecruiters date-time boundary.
         * @minLength 1
         */
        updatedAfter?: string;
        /**
         * The candidate sub-status filter used with a status filter.
         * @minLength 1
         */
        subStatus?: string;
      };
      output: {
        /** The SmartRecruiters candidates returned for this page. */
        candidates: Array<{
          /**
           * The SmartRecruiters resource identifier.
           * @minLength 1
           */
          id?: string;
          /** The candidate first name returned by SmartRecruiters. */
          firstName?: string;
          /** The candidate last name returned by SmartRecruiters. */
          lastName?: string;
          /** The candidate email address returned by SmartRecruiters. */
          email?: string;
          /** The candidate phone number returned by SmartRecruiters. */
          phoneNumber?: string;
          /** The SmartRecruiters candidate creation timestamp. */
          createdOn?: string;
          /** The SmartRecruiters candidate update timestamp. */
          updatedOn?: string;
          /** The SmartRecruiters location object. */
          location?: {
            /** The location country returned by SmartRecruiters. */
            country?: string;
            /** The location country code returned by SmartRecruiters. */
            countryCode?: string;
            /** The location region returned by SmartRecruiters. */
            region?: string;
            /** The location region code returned by SmartRecruiters. */
            regionCode?: string;
            /** The location city returned by SmartRecruiters. */
            city?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The page size returned by SmartRecruiters. */
        limit: number | null;
        /** The cursor to pass as pageId to retrieve the next page of candidates. */
        nextPageId: string | null;
        /** The raw SmartRecruiters search response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
