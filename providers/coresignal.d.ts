import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Collect a Coresignal Base Company record by company ID, profile URL, or shorthand name, optionally selecting specific fields. */
    "coresignal.collect_base_company": {
      input: {
        /** Company ID, profile URL, or shorthand name to collect. */
        companyIdentifier: number | string;
        /**
         * Optional list of fields to return from the Base Company record.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The raw Base Company record returned by Coresignal. */
        company: Record<string, unknown>;
      };
    };
    /** Preview top Coresignal Base Company matches with compact company profile fields using documented search filters. */
    "coresignal.preview_base_companies": {
      input: {
        /**
         * Company name or name expression to search for using Coresignal search filters.
         * @minLength 1
         */
        name?: string;
        /**
         * Company website value to search for, such as example.com or https://www.example.com.
         * @minLength 1
         */
        website?: string;
        /**
         * Exact company website value to search for.
         * @minLength 1
         */
        exact_website?: string;
        /**
         * Company size category based on headcount.
         * @minLength 1
         */
        size?: string;
        /**
         * Industry value or expression to search for.
         * @minLength 1
         */
        industry?: string;
        /**
         * Country value or expression to search for.
         * @minLength 1
         */
        country?: string;
        /**
         * Location value or expression to search for.
         * @minLength 1
         */
        location?: string;
        /**
         * Record creation timestamp lower bound using the Coresignal YYYY-MM-DD hh:mm:ss format.
         * @minLength 1
         */
        created_at_gte?: string;
        /**
         * Record creation timestamp upper bound using the Coresignal YYYY-MM-DD hh:mm:ss format.
         * @minLength 1
         */
        created_at_lte?: string;
        /**
         * Record last-updated timestamp lower bound using the Coresignal YYYY-MM-DD hh:mm:ss format.
         * @minLength 1
         */
        last_updated_gte?: string;
        /**
         * Record last-updated timestamp upper bound using the Coresignal YYYY-MM-DD hh:mm:ss format.
         * @minLength 1
         */
        last_updated_lte?: string;
        /** Whether to include deleted or private company records. */
        deleted?: boolean;
        /**
         * Minimum visible employee count.
         * @minimum 0
         */
        employees_count_gte?: number;
        /**
         * Maximum visible employee count.
         * @minimum 0
         */
        employees_count_lte?: number;
        /**
         * Company identifier assigned by the source.
         * @minimum 0
         */
        source_id?: number;
        /**
         * Minimum company founding year.
         * @minimum 0
         */
        founded_year_gte?: number;
        /**
         * Maximum company founding year.
         * @minimum 0
         */
        founded_year_lte?: number;
        /**
         * Minimum total funding round count.
         * @minimum 0
         */
        funding_total_rounds_count_gte?: number;
        /**
         * Maximum total funding round count.
         * @minimum 0
         */
        funding_total_rounds_count_lte?: number;
        /**
         * Last funding round type.
         * @minLength 1
         */
        funding_last_round_type?: string;
        /**
         * Last funding round date lower bound using the yyyy-mm-dd format.
         * @minLength 1
         */
        funding_last_round_date_gte?: string;
        /**
         * Last funding round date upper bound using the yyyy-mm-dd format.
         * @minLength 1
         */
        funding_last_round_date_lte?: string;
        /**
         * Preview result page number.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Preview records matching the search filters. */
        records: Array<{
          /**
           * Coresignal company ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** Company name. */
          name?: string;
          /** Most recent company profile URL. */
          canonical_url?: string;
          /** Company website. */
          website?: string;
          /** Company size category. */
          size?: string;
          /** Company industry. */
          industry?: string;
          /** Parsed headquarters country. */
          headquarters_country_parsed?: string;
          /** Search relevance score. */
          _score?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Coresignal Base Company records with documented search filters and return matching company IDs for follow-up collection. */
    "coresignal.search_base_companies": {
      input: {
        /**
         * Company name or name expression to search for using Coresignal search filters.
         * @minLength 1
         */
        name?: string;
        /**
         * Company website value to search for, such as example.com or https://www.example.com.
         * @minLength 1
         */
        website?: string;
        /**
         * Exact company website value to search for.
         * @minLength 1
         */
        exact_website?: string;
        /**
         * Company size category based on headcount.
         * @minLength 1
         */
        size?: string;
        /**
         * Industry value or expression to search for.
         * @minLength 1
         */
        industry?: string;
        /**
         * Country value or expression to search for.
         * @minLength 1
         */
        country?: string;
        /**
         * Location value or expression to search for.
         * @minLength 1
         */
        location?: string;
        /**
         * Record creation timestamp lower bound using the Coresignal YYYY-MM-DD hh:mm:ss format.
         * @minLength 1
         */
        created_at_gte?: string;
        /**
         * Record creation timestamp upper bound using the Coresignal YYYY-MM-DD hh:mm:ss format.
         * @minLength 1
         */
        created_at_lte?: string;
        /**
         * Record last-updated timestamp lower bound using the Coresignal YYYY-MM-DD hh:mm:ss format.
         * @minLength 1
         */
        last_updated_gte?: string;
        /**
         * Record last-updated timestamp upper bound using the Coresignal YYYY-MM-DD hh:mm:ss format.
         * @minLength 1
         */
        last_updated_lte?: string;
        /** Whether to include deleted or private company records. */
        deleted?: boolean;
        /**
         * Minimum visible employee count.
         * @minimum 0
         */
        employees_count_gte?: number;
        /**
         * Maximum visible employee count.
         * @minimum 0
         */
        employees_count_lte?: number;
        /**
         * Company identifier assigned by the source.
         * @minimum 0
         */
        source_id?: number;
        /**
         * Minimum company founding year.
         * @minimum 0
         */
        founded_year_gte?: number;
        /**
         * Maximum company founding year.
         * @minimum 0
         */
        founded_year_lte?: number;
        /**
         * Minimum total funding round count.
         * @minimum 0
         */
        funding_total_rounds_count_gte?: number;
        /**
         * Maximum total funding round count.
         * @minimum 0
         */
        funding_total_rounds_count_lte?: number;
        /**
         * Last funding round type.
         * @minLength 1
         */
        funding_last_round_type?: string;
        /**
         * Last funding round date lower bound using the yyyy-mm-dd format.
         * @minLength 1
         */
        funding_last_round_date_gte?: string;
        /**
         * Last funding round date upper bound using the yyyy-mm-dd format.
         * @minLength 1
         */
        funding_last_round_date_lte?: string;
      };
      output: {
        /** Company IDs matching the search filters. */
        ids: Array<number>;
      };
    };
  }
}
