import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get full details for a Workable candidate by candidate ID. */
    "workable.get_candidate": {
      input: {
        /**
         * The Workable candidate identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Workable candidate object. */
        candidate: {
          /** The Workable candidate identifier. */
          id?: string;
          /** The candidate full name. */
          name?: string;
          /** The candidate first name. */
          firstname?: string;
          /** The candidate last name. */
          lastname?: string;
          /** The candidate headline. */
          headline?: string;
          /** The candidate email address. */
          email?: string;
          /** The candidate stage name or slug. */
          stage?: string;
          /** The URL for the candidate profile in Workable. */
          profile_url?: string;
          /** The raw candidate object returned by Workable. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get full details for a Workable job by shortcode. */
    "workable.get_job": {
      input: {
        /**
         * The Workable system-generated job shortcode.
         * @minLength 1
         */
        shortcode: string;
      };
      output: {
        /** A Workable job object. */
        job: {
          /** The Workable job identifier. */
          id?: string;
          /** The short title of the job. */
          title?: string;
          /** The system-generated job code. */
          shortcode?: string;
          /** The current job state, such as draft, published, closed, or archived. */
          state?: string;
          /** The raw job object returned by Workable. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List candidates from a Workable account with optional job, stage, and timestamp filters. */
    "workable.list_candidates": {
      input: {
        /**
         * The candidate email address to filter by.
         * @minLength 1
         */
        email?: string;
        /**
         * The Workable system-generated job shortcode to filter by.
         * @minLength 1
         */
        shortcode?: string;
        /**
         * The Workable stage slug to filter by.
         * @minLength 1
         */
        stage?: string;
        /**
         * The number of records to retrieve per page. Workable allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Return candidates with an ID greater than or equal to this value.
         * @minLength 1
         */
        since_id?: string;
        /**
         * Return candidates with an ID less than or equal to this value.
         * @minLength 1
         */
        max_id?: string;
        /**
         * Return candidates created after this ISO 8601 or Unix timestamp.
         * @minLength 1
         */
        created_after?: string;
        /**
         * Return candidates updated after this ISO 8601 or Unix timestamp.
         * @minLength 1
         */
        updated_after?: string;
      };
      output: {
        /** The candidates returned by Workable. */
        candidates: Array<{
          /** The Workable candidate identifier. */
          id?: string;
          /** The candidate full name. */
          name?: string;
          /** The candidate first name. */
          firstname?: string;
          /** The candidate last name. */
          lastname?: string;
          /** The candidate headline. */
          headline?: string;
          /** The candidate email address. */
          email?: string;
          /** The candidate stage name or slug. */
          stage?: string;
          /** The URL for the candidate profile in Workable. */
          profile_url?: string;
          /** The raw candidate object returned by Workable. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The pagination object returned by Workable. */
        paging: {
          /** The URL for the next page when Workable returns one. */
          next?: string | null;
        };
      };
    };
    /** List jobs from a Workable account with optional state and timestamp filters. */
    "workable.list_jobs": {
      input: {
        /** The current job state to filter by. */
        state?: "draft" | "published" | "closed" | "archived";
        /**
         * The number of records to retrieve per page. Workable allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Return jobs with an ID greater than or equal to this value.
         * @minLength 1
         */
        since_id?: string;
        /**
         * Return jobs with an ID less than or equal to this value.
         * @minLength 1
         */
        max_id?: string;
        /**
         * Return jobs created after this ISO 8601 or Unix timestamp.
         * @minLength 1
         */
        created_after?: string;
        /**
         * Return jobs updated after this ISO 8601 or Unix timestamp.
         * @minLength 1
         */
        updated_after?: string;
        /**
         * Additional job fields to include in each result.
         * @minItems 1
         */
        include_fields?: Array<"description" | "full_description" | "requirements" | "benefits">;
      };
      output: {
        /** The jobs returned by Workable. */
        jobs: Array<{
          /** The Workable job identifier. */
          id?: string;
          /** The short title of the job. */
          title?: string;
          /** The system-generated job code. */
          shortcode?: string;
          /** The current job state, such as draft, published, closed, or archived. */
          state?: string;
          /** The raw job object returned by Workable. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The pagination object returned by Workable. */
        paging: {
          /** The URL for the next page when Workable returns one. */
          next?: string | null;
        };
      };
    };
  }
}
