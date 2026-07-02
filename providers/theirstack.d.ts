import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the authenticated TheirStack team's current credit balance. */
    "theirstack.get_credit_balance": {
      input: Record<string, never>;
      output: {
        /**
         * Number of UI credits available to the team.
         * @minimum 0
         */
        ui_credits: number;
        /**
         * Number of UI credits used in the current billing cycle.
         * @minimum 0
         */
        used_ui_credits: number;
        /**
         * Number of API credits available to the team.
         * @minimum 0
         */
        api_credits: number;
        /**
         * Number of API credits used in the current billing cycle.
         * @minimum 0
         */
        used_api_credits: number;
        /**
         * Earliest expiration timestamp among invoices with remaining credits.
         * @format date-time
         */
        earliest_expiration?: string | null;
      };
    };
    /** List technologies and buying-intent keywords detected by TheirStack for a company. */
    "theirstack.list_technographics": {
      input: {
        /**
         * Company domain, URL, or email domain to identify the company.
         * @minLength 1
         */
        company_domain?: string;
        /**
         * Exact case-sensitive company name to identify the company.
         * @minLength 1
         */
        company_name?: string;
        /**
         * LinkedIn company URL to identify the company.
         * @minLength 1
         */
        company_linkedin_url?: string;
        /** Only return technologies or buying-intent topics matching any of these keyword slugs. */
        keyword_slug_or?: Array<string>;
        /** Only return keywords from any of these keyword category slugs. */
        keyword_category_slug_or?: Array<string>;
        /** Only return technologies with any of these confidence levels. */
        confidence_or?: Array<"low" | "medium" | "high">;
        /**
         * Minimum number of jobs found for each technology or keyword.
         * @minimum 0
         */
        min_jobs?: number;
        /**
         * Maximum number of jobs found for each technology or keyword.
         * @minimum 0
         */
        max_jobs?: number;
        /**
         * Only return technologies first found on or after this YYYY-MM-DD date.
         * @format date
         */
        first_date_found_gte?: string;
        /**
         * Only return technologies first found on or before this YYYY-MM-DD date.
         * @format date
         */
        first_date_found_lte?: string;
        /**
         * Only return technologies last found on or after this YYYY-MM-DD date.
         * @format date
         */
        last_date_found_gte?: string;
        /**
         * Only return technologies last found on or before this YYYY-MM-DD date.
         * @format date
         */
        last_date_found_lte?: string;
        /**
         * Number of results per page.
         * @minimum 1
         */
        limit?: number;
        /**
         * Page number for page-based pagination. TheirStack pages start at 0.
         * @minimum 0
         */
        page?: number;
        /**
         * Number of results to skip for offset-based pagination.
         * @minimum 0
         */
        offset?: number;
        /** When true, TheirStack calculates total result counts. This can slow down large searches. */
        include_total_results?: boolean;
        /** Sort options for technographic results. */
        order_by?: Array<{
          /** Field to sort technographic results by. */
          field: "jobs" | "jobs_last_7_days" | "jobs_last_30_days" | "jobs_last_180_days" | "last_date_found" | "first_date_found" | "relative_occurrence_within_category" | "theirstack_score" | "confidence";
          /** Whether to sort the field in descending order. */
          desc?: boolean;
        }>;
      };
      output: {
        /** Technology and buying-intent records returned by TheirStack. */
        technologies: Array<Record<string, unknown>>;
        /** Pagination and count metadata returned by TheirStack. */
        metadata: {
          /** Total number of results when requested. */
          total_results?: number | null;
          /** Total number of companies when requested. */
          total_companies?: number | null;
          /** Number of results omitted because the account lacked enough credits. */
          truncated_results?: number | null;
          /** Number of companies omitted because the account lacked enough credits. */
          truncated_companies?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search TheirStack companies by firmographic, hiring, and technographic filters. */
    "theirstack.search_companies": {
      input: {
        /** Only return companies matching any of these domains, URLs, or email domains. */
        company_domain_or?: Array<string>;
        /** Only return companies whose LinkedIn URL matches any of these values. */
        company_linkedin_url_or?: Array<string>;
        /** Only return companies whose name exactly matches any of these case-sensitive values. */
        company_name_or?: Array<string>;
        /** Return companies whose name contains any of these substrings, case-insensitively. */
        company_name_partial_match_or?: Array<string>;
        /** Only return companies headquartered in any of these ISO2 country codes. */
        company_country_code_or?: Array<string>;
        /** Industry names to match case-insensitively. */
        industry_or?: Array<string>;
        /** Keyword or buying-intent slugs mentioned by matching companies in their jobs. */
        company_keyword_slug_or?: Array<string>;
        /** Technology slugs mentioned by matching companies in their jobs. */
        company_technology_slug_or?: Array<string>;
        /**
         * Number of results per page.
         * @minimum 1
         */
        limit?: number;
        /**
         * Page number for page-based pagination. TheirStack pages start at 0.
         * @minimum 0
         */
        page?: number;
        /**
         * Number of results to skip for offset-based pagination.
         * @minimum 0
         */
        offset?: number;
        /** When true, TheirStack calculates total result counts. This can slow down large searches. */
        include_total_results?: boolean;
        /** Sort options for company search results. */
        order_by?: Array<{
          /** Field to sort company search results by. */
          field: "relevance" | "name" | "num_jobs" | "num_jobs_last_30_days" | "num_jobs_found" | "employee_count" | "alexa_ranking" | "founded_year" | "annual_revenue_usd" | "total_funding_usd" | "last_funding_round_date" | "confidence" | "jobs" | "first_date_found";
          /** Whether to sort the field in descending order. */
          desc?: boolean;
        }>;
      };
      output: {
        /** Company records returned by TheirStack. */
        companies: Array<Record<string, unknown>>;
        /** Pagination and count metadata returned by TheirStack. */
        metadata: {
          /** Total number of results when requested. */
          total_results?: number | null;
          /** Total number of companies when requested. */
          total_companies?: number | null;
          /** Number of results omitted because the account lacked enough credits. */
          truncated_results?: number | null;
          /** Number of companies omitted because the account lacked enough credits. */
          truncated_companies?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Search TheirStack job postings with company, title, keyword, location, and posting date filters. */
    "theirstack.search_jobs": {
      input: {
        /** Only return jobs from companies matching any of these domains, URLs, or email domains. */
        company_domain_or?: Array<string>;
        /** Only return jobs from companies whose LinkedIn URL matches any of these values. */
        company_linkedin_url_or?: Array<string>;
        /** Only return jobs from companies whose name exactly matches any of these case-sensitive values. */
        company_name_or?: Array<string>;
        /** Keyword-based patterns to match job titles, case-insensitively. */
        job_title_or?: Array<string>;
        /** Whole words to search for in job descriptions. Matching is case-insensitive unless the word is uppercase. */
        job_description_contains_or?: Array<string>;
        /** Two-letter ISO country codes for job locations. */
        job_country_code_or?: Array<string>;
        /**
         * Maximum age in days for job posting dates. Use 0 for jobs posted today.
         * @minimum 0
         */
        posted_at_max_age_days?: number;
        /**
         * Only return jobs published on or after this YYYY-MM-DD date.
         * @format date
         */
        posted_at_gte?: string;
        /**
         * Only return jobs published on or before this YYYY-MM-DD date.
         * @format date
         */
        posted_at_lte?: string;
        /** When true, only show remote jobs. When false, only show non-remote jobs. */
        remote?: boolean;
        /**
         * Number of results per page.
         * @minimum 1
         */
        limit?: number;
        /**
         * Page number for page-based pagination. TheirStack pages start at 0.
         * @minimum 0
         */
        page?: number;
        /**
         * Number of results to skip for offset-based pagination.
         * @minimum 0
         */
        offset?: number;
        /** When true, TheirStack calculates total result counts. This can slow down large searches. */
        include_total_results?: boolean;
        /** Sort options for job search results. */
        order_by?: Array<{
          /** Field to sort job search results by. */
          field: "date_posted" | "discovered_at" | "salary" | "job_title" | "company" | "num_jobs";
          /** Whether to sort the field in descending order. */
          desc?: boolean;
        }>;
      };
      output: {
        /** Job records returned by TheirStack. */
        jobs: Array<Record<string, unknown>>;
        /** Pagination and count metadata returned by TheirStack. */
        metadata: {
          /** Total number of results when requested. */
          total_results?: number | null;
          /** Total number of companies when requested. */
          total_companies?: number | null;
          /** Number of results omitted because the account lacked enough credits. */
          truncated_results?: number | null;
          /** Number of companies omitted because the account lacked enough credits. */
          truncated_companies?: number | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
