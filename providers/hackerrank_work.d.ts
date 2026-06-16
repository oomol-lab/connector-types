import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one HackerRank test by id. */
    "hackerrank_work.get_test": {
      input: {
        /**
         * The HackerRank test identifier.
         * @minLength 1
         */
        id: string;
        /**
         * Additional HackerRank fields to request as the additional_fields query parameter.
         * @minItems 1
         */
        additional_fields?: Array<string>;
      };
      output: {
        /** A HackerRank test object. */
        test: {
          /**
           * The HackerRank test identifier.
           * @minLength 1
           */
          id: string;
          /** The public candidate-facing unique identifier for the test. */
          unique_id?: string;
          /** The display name of the test. */
          name?: string;
          /** The current state of the test. */
          state?: string;
          /** The test duration in minutes. */
          duration?: number;
          /** The earliest time when candidates may log in to the test. */
          starttime?: string;
          /** The latest time when new candidate logins are accepted. */
          endtime?: string;
          /** When the test was created. */
          created_at?: string;
          /** The languages enabled for the test, when HackerRank returns them. */
          languages?: Array<string>;
          /** The candidate detail fields configured for the test. */
          candidate_details?: Array<unknown>;
          /** The tags associated with the test. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one HackerRank candidate from a specific test. */
    "hackerrank_work.get_test_candidate": {
      input: {
        /**
         * The HackerRank test identifier.
         * @minLength 1
         */
        test_id: string;
        /**
         * The HackerRank candidate identifier.
         * @minLength 1
         */
        candidate_id: string;
        /**
         * Additional HackerRank fields to request as the additional_fields query parameter.
         * @minItems 1
         */
        additional_fields?: Array<string>;
      };
      output: {
        /** A HackerRank test candidate object. */
        candidate: {
          /**
           * The HackerRank candidate identifier.
           * @minLength 1
           */
          id: string;
          /** The full name of the candidate. */
          full_name?: string;
          /** The email address of the candidate. */
          email?: string;
          /** The raw score of the candidate, when available. */
          score?: number;
          /** The percentage score of the candidate, when available. */
          percentage_score?: number;
          /** The HackerRank candidate status code. */
          status?: number;
          /** The integrity status summary for the candidate attempt. */
          integrity_status?: string | null;
          /** The integrity summary text returned by HackerRank. */
          integrity_summary?: string | null;
          /** The report URL for the candidate. */
          report_url?: string;
          /** The authenticated report URL for the candidate. */
          authenticated_report_url?: string;
          /** The PDF report URL for the candidate. */
          pdf_url?: string;
          /** The custom candidate details returned for the candidate. */
          candidate_details?: Array<unknown>;
          /** The expanded questions payload, when requested. */
          questions?: unknown;
          /** The tags associated with the candidate. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List the candidates invited to or associated with a HackerRank test. */
    "hackerrank_work.list_test_candidates": {
      input: {
        /**
         * The HackerRank test identifier.
         * @minLength 1
         */
        test_id: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based offset used for pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The candidates returned by HackerRank. */
        candidates: Array<{
          /**
           * The HackerRank candidate identifier.
           * @minLength 1
           */
          id: string;
          /** The full name of the candidate. */
          full_name?: string;
          /** The email address of the candidate. */
          email?: string;
          /** The raw score of the candidate, when available. */
          score?: number;
          /** The percentage score of the candidate, when available. */
          percentage_score?: number;
          /** The HackerRank candidate status code. */
          status?: number;
          /** The integrity status summary for the candidate attempt. */
          integrity_status?: string | null;
          /** The integrity summary text returned by HackerRank. */
          integrity_summary?: string | null;
          /** The report URL for the candidate. */
          report_url?: string;
          /** The authenticated report URL for the candidate. */
          authenticated_report_url?: string;
          /** The PDF report URL for the candidate. */
          pdf_url?: string;
          /** The custom candidate details returned for the candidate. */
          candidate_details?: Array<unknown>;
          /** The expanded questions payload, when requested. */
          questions?: unknown;
          /** The tags associated with the candidate. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by HackerRank list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          page_total: number;
          /** The zero-based offset for the current page. */
          offset: number;
          /** The previous page URL returned by HackerRank. */
          previous: string;
          /** The next page URL returned by HackerRank. */
          next: string;
          /** The first page URL returned by HackerRank. */
          first: string;
          /** The last page URL returned by HackerRank. */
          last: string;
          /** The total item count returned by HackerRank for the query. */
          total: string;
        };
      };
    };
    /** List the HackerRank tests available to the authenticated account. */
    "hackerrank_work.list_tests": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based offset used for pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The tests returned by HackerRank. */
        tests: Array<{
          /**
           * The HackerRank test identifier.
           * @minLength 1
           */
          id: string;
          /** The public candidate-facing unique identifier for the test. */
          unique_id?: string;
          /** The display name of the test. */
          name?: string;
          /** The current state of the test. */
          state?: string;
          /** The test duration in minutes. */
          duration?: number;
          /** The earliest time when candidates may log in to the test. */
          starttime?: string;
          /** The latest time when new candidate logins are accepted. */
          endtime?: string;
          /** When the test was created. */
          created_at?: string;
          /** The languages enabled for the test, when HackerRank returns them. */
          languages?: Array<string>;
          /** The candidate detail fields configured for the test. */
          candidate_details?: Array<unknown>;
          /** The tags associated with the test. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by HackerRank list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          page_total: number;
          /** The zero-based offset for the current page. */
          offset: number;
          /** The previous page URL returned by HackerRank. */
          previous: string;
          /** The next page URL returned by HackerRank. */
          next: string;
          /** The first page URL returned by HackerRank. */
          first: string;
          /** The last page URL returned by HackerRank. */
          last: string;
          /** The total item count returned by HackerRank for the query. */
          total: string;
        };
      };
    };
    /** Search HackerRank test candidates by name or email. */
    "hackerrank_work.search_test_candidates": {
      input: {
        /**
         * The HackerRank test identifier.
         * @minLength 1
         */
        test_id: string;
        /**
         * The name or email text used to search candidates.
         * @minLength 1
         */
        search: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based offset used for pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The candidates returned by the search. */
        candidates: Array<{
          /**
           * The HackerRank candidate identifier.
           * @minLength 1
           */
          id: string;
          /** The full name of the candidate. */
          full_name?: string;
          /** The email address of the candidate. */
          email?: string;
          /** The raw score of the candidate, when available. */
          score?: number;
          /** The percentage score of the candidate, when available. */
          percentage_score?: number;
          /** The HackerRank candidate status code. */
          status?: number;
          /** The integrity status summary for the candidate attempt. */
          integrity_status?: string | null;
          /** The integrity summary text returned by HackerRank. */
          integrity_summary?: string | null;
          /** The report URL for the candidate. */
          report_url?: string;
          /** The authenticated report URL for the candidate. */
          authenticated_report_url?: string;
          /** The PDF report URL for the candidate. */
          pdf_url?: string;
          /** The custom candidate details returned for the candidate. */
          candidate_details?: Array<unknown>;
          /** The expanded questions payload, when requested. */
          questions?: unknown;
          /** The tags associated with the candidate. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by HackerRank list endpoints. */
        pagination: {
          /** The number of items returned in the current page. */
          page_total: number;
          /** The zero-based offset for the current page. */
          offset: number;
          /** The previous page URL returned by HackerRank. */
          previous: string;
          /** The next page URL returned by HackerRank. */
          next: string;
          /** The first page URL returned by HackerRank. */
          first: string;
          /** The last page URL returned by HackerRank. */
          last: string;
          /** The total item count returned by HackerRank for the query. */
          total: string;
        };
      };
    };
  }
}
