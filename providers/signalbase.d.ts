import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch Signalbase acquisition signals with date, company, acquirer, amount, and sorting filters. */
    "signalbase.list_acquisition_signals": {
      input: {
        /**
         * Page number for pagination. Signalbase defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page. Signalbase documents a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter signals from this date in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * Filter signals up to this date in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** Relative date shorthand. Signalbase applies it before dateFrom and dateTo when provided. */
        date_preset?: "today" | "yesterday" | "last_7d" | "last_14d" | "last_30d" | "last_60d" | "last_90d" | "last_6m" | "last_1y" | "last_2y" | "this_week" | "this_month" | "this_quarter" | "this_year" | "last_week" | "last_month" | "last_quarter" | "last_year";
        /**
         * Comma-separated country codes to filter by, such as US,GB,DE.
         * @minLength 1
         */
        countries?: string;
        /**
         * Pipe-separated company categories or industries to filter by.
         * @minLength 1
         */
        categories?: string;
        /**
         * Comma-separated Signalbase subcategory IDs to filter by.
         * @minLength 1
         */
        subcategories?: string;
        /**
         * Free-text search across documented fields for this endpoint.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated exact industry names to filter by.
         * @minLength 1
         */
        industry?: string;
        /**
         * Partial company-name search string.
         * @minLength 1
         */
        company_name?: string;
        /**
         * Partial acquiring-company search string.
         * @minLength 1
         */
        acquiring_company?: string;
        /** Minimum transaction amount in USD cents. */
        amount_min?: number;
        /** Maximum transaction amount in USD cents. */
        amount_max?: number;
        /**
         * Currency symbol filter, such as $, EUR, or GBP.
         * @minLength 1
         */
        currency?: string;
        /** Verification status to filter by. */
        verification_status?: "verified" | "unverified" | "pending";
        /** Minimum company employee count. */
        employee_count_min?: number;
        /** Maximum company employee count. */
        employee_count_max?: number;
        /** Minimum company founded year. */
        founded_year_min?: number;
        /** Maximum company founded year. */
        founded_year_max?: number;
        /** Field used to sort acquisition signal results. */
        sort_by?: "occurred_at" | "discovered_at" | "amount" | "employee_count";
        /** Sort direction for acquisition signal results. */
        sort_order?: "asc" | "desc";
        /** Set to "true" to return only pagination metadata with an empty data array. Signalbase documents this mode as zero-credit. */
        count?: "true";
      };
      output: {
        /** Whether Signalbase reported the request as successful. */
        success: boolean;
        /** Acquisition signal records returned by Signalbase. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Signalbase. */
        pagination: {
          /**
           * Current page number.
           * @minimum 1
           */
          currentPage: number;
          /**
           * Total number of available pages.
           * @minimum 0
           */
          totalPages: number;
          /**
           * Total number of records matching the query.
           * @minimum 0
           */
          totalCount: number;
          /** Whether a next page is available. */
          hasNextPage: boolean;
          /** Whether a previous page is available. */
          hasPreviousPage: boolean;
        };
        /** Usage metadata returned by Signalbase. */
        meta: {
          /** Signalbase endpoint identifier. */
          endpoint: string;
          /**
           * Number of Signalbase API credits consumed by this request.
           * @minimum 0
           */
          creditsUsed: number;
          /**
           * Number of Signalbase API credits remaining after this request.
           * @minimum 0
           */
          creditsRemaining?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Browse and search Signalbase company profiles with pagination, filters, and sorting. */
    "signalbase.list_companies": {
      input: {
        /**
         * Page number for pagination. Signalbase defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page. Signalbase documents a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Free-text search across documented fields for this endpoint.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated country codes to filter by, such as US,GB,DE.
         * @minLength 1
         */
        countries?: string;
        /**
         * Comma-separated exact industry names to filter by.
         * @minLength 1
         */
        industry?: string;
        /** Minimum company employee count. */
        employee_count_min?: number;
        /** Maximum company employee count. */
        employee_count_max?: number;
        /** Minimum company founded year. */
        founded_year_min?: number;
        /** Maximum company founded year. */
        founded_year_max?: number;
        /** Field used to sort company results. */
        sort_by?: "name" | "employee_count" | "founded_year" | "created_at";
        /** Sort direction for company results. */
        sort_order?: "asc" | "desc";
        /** Set to "true" to return only pagination metadata with an empty data array. Signalbase documents this mode as zero-credit. */
        count?: "true";
      };
      output: {
        /** Whether Signalbase reported the request as successful. */
        success: boolean;
        /** Company records returned by Signalbase. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Signalbase. */
        pagination: {
          /**
           * Current page number.
           * @minimum 1
           */
          currentPage: number;
          /**
           * Total number of available pages.
           * @minimum 0
           */
          totalPages: number;
          /**
           * Total number of records matching the query.
           * @minimum 0
           */
          totalCount: number;
          /** Whether a next page is available. */
          hasNextPage: boolean;
          /** Whether a previous page is available. */
          hasPreviousPage: boolean;
        };
        /** Usage metadata returned by Signalbase. */
        meta: {
          /** Signalbase endpoint identifier. */
          endpoint: string;
          /**
           * Number of Signalbase API credits consumed by this request.
           * @minimum 0
           */
          creditsUsed: number;
          /**
           * Number of Signalbase API credits remaining after this request.
           * @minimum 0
           */
          creditsRemaining?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Fetch Signalbase funding signals with date, company, investor, amount, and sorting filters. */
    "signalbase.list_funding_signals": {
      input: {
        /**
         * Page number for pagination. Signalbase defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page. Signalbase documents a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter signals from this date in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * Filter signals up to this date in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** Relative date shorthand. Signalbase applies it before dateFrom and dateTo when provided. */
        date_preset?: "today" | "yesterday" | "last_7d" | "last_14d" | "last_30d" | "last_60d" | "last_90d" | "last_6m" | "last_1y" | "last_2y" | "this_week" | "this_month" | "this_quarter" | "this_year" | "last_week" | "last_month" | "last_quarter" | "last_year";
        /**
         * Comma-separated country codes to filter by, such as US,GB,DE.
         * @minLength 1
         */
        countries?: string;
        /**
         * Pipe-separated company categories or industries to filter by.
         * @minLength 1
         */
        categories?: string;
        /**
         * Comma-separated Signalbase subcategory IDs to filter by.
         * @minLength 1
         */
        subcategories?: string;
        /**
         * Free-text search across documented fields for this endpoint.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated exact industry names to filter by.
         * @minLength 1
         */
        industry?: string;
        /**
         * Partial company-name search string.
         * @minLength 1
         */
        company_name?: string;
        /**
         * Comma-separated funding round types to filter by.
         * @minLength 1
         */
        round?: string;
        /** Funding round flavor to filter by. */
        round_flavor?: "bridge" | "extension" | "secondary";
        /** Minimum transaction amount in USD cents. */
        amount_min?: number;
        /** Maximum transaction amount in USD cents. */
        amount_max?: number;
        /**
         * Currency symbol filter, such as $, EUR, or GBP.
         * @minLength 1
         */
        currency?: string;
        /** Verification status to filter by. */
        verification_status?: "verified" | "unverified" | "pending";
        /**
         * Partial investor-name search string.
         * @minLength 1
         */
        investor_name?: string;
        /** Minimum company employee count. */
        employee_count_min?: number;
        /** Maximum company employee count. */
        employee_count_max?: number;
        /** Minimum company founded year. */
        founded_year_min?: number;
        /** Maximum company founded year. */
        founded_year_max?: number;
        /** Field used to sort funding signal results. */
        sort_by?: "occurred_at" | "discovered_at" | "amount" | "employee_count" | "founded_year";
        /** Sort direction for funding signal results. */
        sort_order?: "asc" | "desc";
        /** Set to "true" to return only pagination metadata with an empty data array. Signalbase documents this mode as zero-credit. */
        count?: "true";
      };
      output: {
        /** Whether Signalbase reported the request as successful. */
        success: boolean;
        /** Funding signal records returned by Signalbase. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Signalbase. */
        pagination: {
          /**
           * Current page number.
           * @minimum 1
           */
          currentPage: number;
          /**
           * Total number of available pages.
           * @minimum 0
           */
          totalPages: number;
          /**
           * Total number of records matching the query.
           * @minimum 0
           */
          totalCount: number;
          /** Whether a next page is available. */
          hasNextPage: boolean;
          /** Whether a previous page is available. */
          hasPreviousPage: boolean;
        };
        /** Usage metadata returned by Signalbase. */
        meta: {
          /** Signalbase endpoint identifier. */
          endpoint: string;
          /**
           * Number of Signalbase API credits consumed by this request.
           * @minimum 0
           */
          creditsUsed: number;
          /**
           * Number of Signalbase API credits remaining after this request.
           * @minimum 0
           */
          creditsRemaining?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Fetch Signalbase hiring signals with role, department, seniority, location, and sorting filters. */
    "signalbase.list_hiring_signals": {
      input: {
        /**
         * Page number for pagination. Signalbase defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page. Signalbase documents a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter signals from this date in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * Filter signals up to this date in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** Relative date shorthand. Signalbase applies it before dateFrom and dateTo when provided. */
        date_preset?: "today" | "yesterday" | "last_7d" | "last_14d" | "last_30d" | "last_60d" | "last_90d" | "last_6m" | "last_1y" | "last_2y" | "this_week" | "this_month" | "this_quarter" | "this_year" | "last_week" | "last_month" | "last_quarter" | "last_year";
        /**
         * Free-text search across documented fields for this endpoint.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated country codes to filter by, such as US,GB,DE.
         * @minLength 1
         */
        countries?: string;
        /**
         * Comma-separated US state codes to filter by.
         * @minLength 1
         */
        states?: string;
        /**
         * Free-text search on hiring signal city, location, and region.
         * @minLength 1
         */
        city?: string;
        /**
         * Pipe-separated company categories or industries to filter by.
         * @minLength 1
         */
        categories?: string;
        /**
         * Comma-separated Signalbase subcategory IDs to filter by.
         * @minLength 1
         */
        subcategories?: string;
        /**
         * Comma-separated role or position filters.
         * @minLength 1
         */
        positions?: string;
        /**
         * Comma-separated department filters.
         * @minLength 1
         */
        departments?: string;
        /**
         * Comma-separated seniority filters.
         * @minLength 1
         */
        seniorities?: string;
        /**
         * Comma-separated team size ranges to filter by.
         * @minLength 1
         */
        team_size?: string;
        /**
         * Comma-separated applicant count ranges to filter by.
         * @minLength 1
         */
        applicants?: string;
        /** Field used to sort hiring signal results. */
        sort_by?: "date_posted" | "created_at" | "title" | "company_name" | "location";
        /** Sort direction for hiring signal results. */
        sort_order?: "asc" | "desc";
        /** Set to "true" to return only pagination metadata with an empty data array. Signalbase documents this mode as zero-credit. */
        count?: "true";
      };
      output: {
        /** Whether Signalbase reported the request as successful. */
        success: boolean;
        /** Hiring signal records returned by Signalbase. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Signalbase. */
        pagination: {
          /**
           * Current page number.
           * @minimum 1
           */
          currentPage: number;
          /**
           * Total number of available pages.
           * @minimum 0
           */
          totalPages: number;
          /**
           * Total number of records matching the query.
           * @minimum 0
           */
          totalCount: number;
          /** Whether a next page is available. */
          hasNextPage: boolean;
          /** Whether a previous page is available. */
          hasPreviousPage: boolean;
        };
        /** Usage metadata returned by Signalbase. */
        meta: {
          /** Signalbase endpoint identifier. */
          endpoint: string;
          /**
           * Number of Signalbase API credits consumed by this request.
           * @minimum 0
           */
          creditsUsed: number;
          /**
           * Number of Signalbase API credits remaining after this request.
           * @minimum 0
           */
          creditsRemaining?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Fetch Signalbase investor data with type, location, ticket-size, and sorting filters. */
    "signalbase.list_investors": {
      input: {
        /**
         * Page number for pagination. Signalbase defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page. Signalbase documents a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter signals from this date in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * Filter signals up to this date in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** Relative date shorthand. Signalbase applies it before dateFrom and dateTo when provided. */
        date_preset?: "today" | "yesterday" | "last_7d" | "last_14d" | "last_30d" | "last_60d" | "last_90d" | "last_6m" | "last_1y" | "last_2y" | "this_week" | "this_month" | "this_quarter" | "this_year" | "last_week" | "last_month" | "last_quarter" | "last_year";
        /**
         * Free-text search across investor name and type.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated country codes to filter by, such as US,GB,DE.
         * @minLength 1
         */
        countries?: string;
        /** Investor type to filter by. */
        type?: "vc" | "angel" | "pe" | "corporate" | "government" | "accelerator" | "family_office" | "hedge_fund" | "crowdfunding";
        /**
         * Legacy pipe-separated investor type filter.
         * @minLength 1
         */
        categories?: string;
        /**
         * Partial headquarters location search string.
         * @minLength 1
         */
        headquarters?: string;
        /** Minimum ticket size in USD. */
        ticket_size_min?: number;
        /** Maximum ticket size in USD. */
        ticket_size_max?: number;
        /** Field used to sort investor results. */
        sort_by?: "name" | "created_at" | "ticket_size_min" | "ticket_size_max";
        /** Sort direction for investor results. */
        sort_order?: "asc" | "desc";
        /** Set to "true" to return only pagination metadata with an empty data array. Signalbase documents this mode as zero-credit. */
        count?: "true";
      };
      output: {
        /** Whether Signalbase reported the request as successful. */
        success: boolean;
        /** Investor records returned by Signalbase. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Signalbase. */
        pagination: {
          /**
           * Current page number.
           * @minimum 1
           */
          currentPage: number;
          /**
           * Total number of available pages.
           * @minimum 0
           */
          totalPages: number;
          /**
           * Total number of records matching the query.
           * @minimum 0
           */
          totalCount: number;
          /** Whether a next page is available. */
          hasNextPage: boolean;
          /** Whether a previous page is available. */
          hasPreviousPage: boolean;
        };
        /** Usage metadata returned by Signalbase. */
        meta: {
          /** Signalbase endpoint identifier. */
          endpoint: string;
          /**
           * Number of Signalbase API credits consumed by this request.
           * @minimum 0
           */
          creditsUsed: number;
          /**
           * Number of Signalbase API credits remaining after this request.
           * @minimum 0
           */
          creditsRemaining?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Fetch Signalbase job-change signals with person, role, company, LinkedIn, and sorting filters. */
    "signalbase.list_job_change_signals": {
      input: {
        /**
         * Page number for pagination. Signalbase defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page. Signalbase documents a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter signals from this date in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * Filter signals up to this date in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** Relative date shorthand. Signalbase applies it before dateFrom and dateTo when provided. */
        date_preset?: "today" | "yesterday" | "last_7d" | "last_14d" | "last_30d" | "last_60d" | "last_90d" | "last_6m" | "last_1y" | "last_2y" | "this_week" | "this_month" | "this_quarter" | "this_year" | "last_week" | "last_month" | "last_quarter" | "last_year";
        /**
         * Free-text search across documented fields for this endpoint.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated country codes to filter by, such as US,GB,DE.
         * @minLength 1
         */
        countries?: string;
        /**
         * Free-text search on person city and person location.
         * @minLength 1
         */
        city?: string;
        /**
         * Exact LinkedIn profile URL of the person.
         * @format uri
         */
        personLinkedinUrl?: string;
        /**
         * Exact LinkedIn company page URL.
         * @format uri
         */
        companyLinkedinUrl?: string;
        /**
         * Partial person-name search string.
         * @minLength 1
         */
        person_name?: string;
        /**
         * Partial company-name search string.
         * @minLength 1
         */
        company_name?: string;
        /**
         * Partial new-role or job-title search string.
         * @minLength 1
         */
        new_role?: string;
        /** Exact job-change signal source. */
        source?: "linkedin" | "press_release" | "other";
        /**
         * Partial keyword tag search string.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Comma-separated role or position filters.
         * @minLength 1
         */
        positions?: string;
        /**
         * Comma-separated department filters.
         * @minLength 1
         */
        departments?: string;
        /**
         * Comma-separated seniority filters.
         * @minLength 1
         */
        seniorities?: string;
        /** Field used to sort job-change signal results. */
        sort_by?: "occurred_at" | "discovered_at" | "person_name" | "company_name";
        /** Sort direction for job-change signal results. */
        sort_order?: "asc" | "desc";
        /** Set to "true" to return only pagination metadata with an empty data array. Signalbase documents this mode as zero-credit. */
        count?: "true";
      };
      output: {
        /** Whether Signalbase reported the request as successful. */
        success: boolean;
        /** Job-change signal records returned by Signalbase. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Signalbase. */
        pagination: {
          /**
           * Current page number.
           * @minimum 1
           */
          currentPage: number;
          /**
           * Total number of available pages.
           * @minimum 0
           */
          totalPages: number;
          /**
           * Total number of records matching the query.
           * @minimum 0
           */
          totalCount: number;
          /** Whether a next page is available. */
          hasNextPage: boolean;
          /** Whether a previous page is available. */
          hasPreviousPage: boolean;
        };
        /** Usage metadata returned by Signalbase. */
        meta: {
          /** Signalbase endpoint identifier. */
          endpoint: string;
          /**
           * Number of Signalbase API credits consumed by this request.
           * @minimum 0
           */
          creditsUsed: number;
          /**
           * Number of Signalbase API credits remaining after this request.
           * @minimum 0
           */
          creditsRemaining?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
