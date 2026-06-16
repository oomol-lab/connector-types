import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Match a single company in People Data Labs and return the top matched company record. */
    "peopledatalabs.enrich_company": {
      input: {
        /**
         * People Data Labs company identifier to enrich.
         * @minLength 1
         */
        pdl_id?: string | null;
        /**
         * Company name.
         * @minLength 1
         */
        name?: string | null;
        /**
         * Company social profile URL.
         * @minLength 1
         */
        profile?: string | null;
        /**
         * Company stock ticker.
         * @minLength 1
         */
        ticker?: string | null;
        /**
         * Company website or domain.
         * @minLength 1
         */
        website?: string | null;
        /**
         * Full or partial company location.
         * @minLength 1
         */
        location?: string | null;
        /**
         * Company locality.
         * @minLength 1
         */
        locality?: string | null;
        /**
         * Company state or region.
         * @minLength 1
         */
        region?: string | null;
        /**
         * Company country.
         * @minLength 1
         */
        country?: string | null;
        /**
         * Company street address.
         * @minLength 1
         */
        street_address?: string | null;
        /**
         * Company postal code.
         * @minLength 1
         */
        postal_code?: string | null;
        /** Whether to return human-readable JSON indentation. */
        pretty?: boolean;
        /** Whether text fields in successful responses should be title-cased. */
        titlecase?: boolean;
        /** Whether to include top-level matched field metadata in the response. */
        include_if_matched?: boolean;
        /**
         * Minimum likelihood score required for People Data Labs to return a 200 response.
         * @minimum 0
         * @maximum 10
         */
        min_likelihood?: number;
        /**
         * Boolean expression describing fields that must exist for the response to count as a match.
         * @minLength 1
         */
        required?: string | null;
        /**
         * Comma-separated fields to include, or prefixed with - to exclude fields.
         * @minLength 1
         */
        data_include?: string | null;
      };
      output: {
        /** People Data Labs status code returned for the enrichment request. */
        status: number;
        /**
         * Likelihood score returned by People Data Labs.
         * @minimum 0
         * @maximum 10
         */
        likelihood?: number;
        /** Company record returned by People Data Labs using the official Company Schema field names. */
        data: Record<string, unknown>;
        /** Field match metadata returned by People Data Labs when include_if_matched is enabled. */
        matched?: Record<string, unknown>;
      };
    };
    /** Match a single person in People Data Labs and return the top matched person record. */
    "peopledatalabs.enrich_person": {
      input: {
        /**
         * People Data Labs person identifier to enrich.
         * @minLength 1
         */
        pdl_id?: string | null;
        /**
         * Person full name, including at least the first and last name when provided.
         * @minLength 1
         */
        name?: string | null;
        /**
         * Person first name.
         * @minLength 1
         */
        first_name?: string | null;
        /**
         * Person last name.
         * @minLength 1
         */
        last_name?: string | null;
        /**
         * Person middle name.
         * @minLength 1
         */
        middle_name?: string | null;
        /**
         * Location where the person lives.
         * @minLength 1
         */
        location?: string | null;
        /**
         * Street address where the person lives.
         * @minLength 1
         */
        street_address?: string | null;
        /**
         * Locality where the person lives.
         * @minLength 1
         */
        locality?: string | null;
        /**
         * State or region where the person lives.
         * @minLength 1
         */
        region?: string | null;
        /**
         * Country where the person lives.
         * @minLength 1
         */
        country?: string | null;
        /**
         * Postal code where the person lives.
         * @minLength 1
         */
        postal_code?: string | null;
        /**
         * Company name, website, or social URL where the person has worked.
         * @minLength 1
         */
        company?: string | null;
        /**
         * School name, website, or social URL the person attended.
         * @minLength 1
         */
        school?: string | null;
        /**
         * Phone number the person has used, including the country code prefix.
         * @minLength 1
         */
        phone?: string | null;
        /**
         * Email address the person has used.
         * @minLength 1
         */
        email?: string | null;
        /**
         * SHA-256 or MD5 hash of the person's email.
         * @minLength 1
         */
        email_hash?: string | null;
        /**
         * Social profile URL the person has used.
         * @minLength 1
         */
        profile?: string | null;
        /**
         * LinkedIn ID of the person.
         * @minLength 1
         */
        lid?: string | null;
        /**
         * Birth year or full birth date in YYYY-MM-DD format.
         * @minLength 1
         */
        birth_date?: string | null;
        /**
         * Comma-separated fields to include, or prefixed with - to exclude fields.
         * @minLength 1
         */
        data_include?: string | null;
        /** Whether to return human-readable JSON indentation. */
        pretty?: boolean;
        /**
         * Minimum likelihood score required for People Data Labs to return a 200 response.
         * @minimum 0
         * @maximum 10
         */
        min_likelihood?: number;
        /** Whether to include top-level matched field metadata in the response. */
        include_if_matched?: boolean;
        /**
         * Boolean expression describing fields that must exist for the response to count as a match.
         * @minLength 1
         */
        required?: string | null;
        /** Whether text fields in successful responses should be title-cased. */
        titlecase?: boolean;
      };
      output: {
        /** People Data Labs status code returned for the enrichment request. */
        status: number;
        /**
         * Likelihood score returned by People Data Labs.
         * @minimum 0
         * @maximum 10
         */
        likelihood?: number;
        /** Person record returned by People Data Labs using the official Person Schema field names. */
        data: Record<string, unknown>;
        /** Field match metadata returned by People Data Labs when include_if_matched is enabled. */
        matched?: Record<string, unknown>;
      };
    };
    /** Search the People Data Labs company dataset with either an Elasticsearch query or SQL query. */
    "peopledatalabs.search_companies": {
      input: {
        /**
         * Elasticsearch v7.7 query string encoded as JSON text.
         * @minLength 1
         */
        query?: string | null;
        /**
         * SQL query of the form SELECT * FROM company WHERE ...
         * @minLength 1
         */
        sql?: string | null;
        /**
         * Maximum number of matched records to return.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Legacy offset for paginating between batches.
         * @minimum 0
         * @maximum 9999
         */
        from?: number;
        /**
         * Offset token returned by a previous People Data Labs search response.
         * @minLength 1
         */
        scroll_token?: string | null;
        /** Whether returned records should be title-cased. */
        titlecase?: boolean;
        /** Whether to return human-readable JSON indentation. */
        pretty?: boolean;
      };
      output: {
        /** People Data Labs status code returned for the search request. */
        status: number;
        /** Number of records matching the People Data Labs search. */
        total: number;
        /** Matched company records returned by People Data Labs. */
        data: Array<Record<string, unknown>>;
        /** Scroll token for fetching the next page of matched companies. */
        scroll_token?: string | null;
      };
    };
    /** Search the People Data Labs person dataset with either an Elasticsearch query or SQL query. */
    "peopledatalabs.search_people": {
      input: {
        /**
         * Elasticsearch v7.7 query string encoded as JSON text.
         * @minLength 1
         */
        query?: string | null;
        /**
         * SQL query of the form SELECT * FROM person WHERE ...
         * @minLength 1
         */
        sql?: string | null;
        /**
         * Maximum number of matched records to return.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Legacy offset for paginating between batches.
         * @minimum 0
         * @maximum 9999
         */
        from?: number;
        /**
         * Offset token returned by a previous People Data Labs search response.
         * @minLength 1
         */
        scroll_token?: string | null;
        /**
         * Comma-separated dataset categories to search, such as resume or all.
         * @minLength 1
         */
        dataset?: string | null;
        /** Whether returned records should be title-cased. */
        titlecase?: boolean;
        /**
         * Comma-separated fields to include, or prefixed with - to exclude fields.
         * @minLength 1
         */
        data_include?: string | null;
        /** Whether to return human-readable JSON indentation. */
        pretty?: boolean;
      };
      output: {
        /** People Data Labs status code returned for the search request. */
        status: number;
        /** Number of records matching the People Data Labs search. */
        total: number;
        /** Matched person records returned by People Data Labs. */
        data: Array<Record<string, unknown>>;
        /** Scroll token for fetching the next page of matched people. */
        scroll_token?: string | null;
      };
    };
  }
}
