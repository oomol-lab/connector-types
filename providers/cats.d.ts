import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch one CATS candidate by candidate ID. */
    "cats.get_candidate": {
      input: {
        /**
         * The CATS candidate ID.
         * @minimum 1
         */
        candidateId: number;
      };
      output: {
        /** CATS candidate record. */
        candidate: Record<string, unknown>;
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
    /** Fetch one CATS company by company ID. */
    "cats.get_company": {
      input: {
        /**
         * The CATS company ID.
         * @minimum 1
         */
        companyId: number;
      };
      output: {
        /** CATS company record. */
        company: Record<string, unknown>;
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
    /** Fetch one CATS job by job ID. */
    "cats.get_job": {
      input: {
        /**
         * The CATS job ID.
         * @minimum 1
         */
        jobId: number;
      };
      output: {
        /** CATS job record. */
        job: Record<string, unknown>;
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
    /** Get information about the CATS site associated with the API key. */
    "cats.get_site": {
      input: Record<string, never>;
      output: {
        /** CATS site record. */
        site: Record<string, unknown>;
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
    /** List CATS candidates with optional pagination. */
    "cats.list_candidates": {
      input: {
        /**
         * The page number to request. CATS defaults to page 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** CATS candidate record. */
        candidates: Array<Record<string, unknown>>;
        /** CATS pagination metadata parsed from response body or headers. */
        pagination: {
          /**
           * The current result page.
           * @minimum 1
           */
          page?: number;
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          perPage?: number;
          /**
           * The total number of records available.
           * @minimum 0
           */
          total?: number;
          /**
           * The total number of pages available.
           * @minimum 0
           */
          totalPages?: number;
        };
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
    /** List CATS companies with optional pagination. */
    "cats.list_companies": {
      input: {
        /**
         * The page number to request. CATS defaults to page 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** CATS company record. */
        companies: Array<Record<string, unknown>>;
        /** CATS pagination metadata parsed from response body or headers. */
        pagination: {
          /**
           * The current result page.
           * @minimum 1
           */
          page?: number;
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          perPage?: number;
          /**
           * The total number of records available.
           * @minimum 0
           */
          total?: number;
          /**
           * The total number of pages available.
           * @minimum 0
           */
          totalPages?: number;
        };
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
    /** List CATS jobs with optional pagination. */
    "cats.list_jobs": {
      input: {
        /**
         * The page number to request. CATS defaults to page 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** CATS job record. */
        jobs: Array<Record<string, unknown>>;
        /** CATS pagination metadata parsed from response body or headers. */
        pagination: {
          /**
           * The current result page.
           * @minimum 1
           */
          page?: number;
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          perPage?: number;
          /**
           * The total number of records available.
           * @minimum 0
           */
          total?: number;
          /**
           * The total number of pages available.
           * @minimum 0
           */
          totalPages?: number;
        };
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
    /** Search CATS candidates by free-text query with optional pagination. */
    "cats.search_candidates": {
      input: {
        /**
         * The search string to match against CATS records.
         * @minLength 1
         */
        query: string;
        /**
         * The page number to request. CATS defaults to page 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** CATS candidate record. */
        candidates: Array<Record<string, unknown>>;
        /** CATS pagination metadata parsed from response body or headers. */
        pagination: {
          /**
           * The current result page.
           * @minimum 1
           */
          page?: number;
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          perPage?: number;
          /**
           * The total number of records available.
           * @minimum 0
           */
          total?: number;
          /**
           * The total number of pages available.
           * @minimum 0
           */
          totalPages?: number;
        };
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
    /** Search CATS companies by free-text query with optional pagination. */
    "cats.search_companies": {
      input: {
        /**
         * The search string to match against CATS records.
         * @minLength 1
         */
        query: string;
        /**
         * The page number to request. CATS defaults to page 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** CATS company record. */
        companies: Array<Record<string, unknown>>;
        /** CATS pagination metadata parsed from response body or headers. */
        pagination: {
          /**
           * The current result page.
           * @minimum 1
           */
          page?: number;
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          perPage?: number;
          /**
           * The total number of records available.
           * @minimum 0
           */
          total?: number;
          /**
           * The total number of pages available.
           * @minimum 0
           */
          totalPages?: number;
        };
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
    /** Search CATS jobs by free-text query with optional pagination. */
    "cats.search_jobs": {
      input: {
        /**
         * The search string to match against CATS records.
         * @minLength 1
         */
        query: string;
        /**
         * The page number to request. CATS defaults to page 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to request per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** CATS job record. */
        jobs: Array<Record<string, unknown>>;
        /** CATS pagination metadata parsed from response body or headers. */
        pagination: {
          /**
           * The current result page.
           * @minimum 1
           */
          page?: number;
          /**
           * The number of records returned per page.
           * @minimum 1
           */
          perPage?: number;
          /**
           * The total number of records available.
           * @minimum 0
           */
          total?: number;
          /**
           * The total number of pages available.
           * @minimum 0
           */
          totalPages?: number;
        };
        /** The raw CATS response payload. */
        raw: unknown;
      };
    };
  }
}
