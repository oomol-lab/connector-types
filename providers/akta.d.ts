import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit a missing company for addition, or return the existing company. Use the returned handle with get_addition_result to wait for completion. */
    "akta.add_company": {
      input: {
        /** Name of the company to add. Example: solios */
        company_name: string;
        /** Primary website URL of the company. Used to disambiguate and resolve the company. Example: https://www.soleosenergy.com/ */
        website: string;
      };
      output: {
        /** Whether the company already exists. */
        already_exists?: boolean;
        /** Existing company identity and upstream fields. */
        company?: {
          /** Company UUID for downstream actions. */
          uuid?: string;
          /** Company name. */
          name?: string;
          /** Company website. */
          website?: string;
          [key: string]: unknown;
        } | null;
        /** Request ID, or null when the company already exists. */
        request_id?: string | null;
        /** Submission status, or null when the company already exists. */
        status?: string | null;
        /** Resolved company domain. */
        domain?: string;
        /** API credits consumed. */
        credits_consumed?: number;
        /** Addition handle: a pending request ID or an already existing company. */
        handle: {
          /**
           * Request ID.
           * @minLength 1
           */
          request_id: string;
        } | {
          /** Existing company identity and upstream fields. */
          company: {
            /** Company UUID for downstream actions. */
            uuid?: string;
            /** Company name. */
            name?: string;
            /** Company website. */
            website?: string;
            [key: string]: unknown;
          };
        };
        [key: string]: unknown;
      };
    };
    /** Convert a natural language company description into structured list filters. */
    "akta.build_filters": {
      input: {
        /** Natural language description of target companies (e.g. 'series a companies in mumbai working in climate tech'). */
        query: string;
      };
      output: {
        /** Returned records or company data. */
        data?: {
          /** Structured filters to pass to generate_company_list. */
          filters?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Enrich a company with any of the 16 data sections; funding and M&A sections require a subscription or Enterprise plan. */
    "akta.enrich_company": {
      input: {
        /** Company website (e.g. 'https://canva.com') or a company UUID (e.g. '00031n-tesla'). The UUID can be obtained from the Company Search API. */
        company: string;
        /** Comma-separated list of sections to return. Copy-paste example: `firmographic,business_model,company_assessment,trust_signal,company_hierarchy,digital_presence,financial_estimate,location,management_profile,product_offering,strategic_signal,customer_profile,industry,technology,funding_detail,mna_and_investment`. Note: `funding_detail` and `mna_and_investment` are available on the subscription and Enterprise tier only. */
        sections?: string;
      };
      output: {
        /** Upstream response status. */
        status?: string;
        /** Enriched company data keyed by section name. */
        data?: Record<string, unknown>;
        /** Number of sections returned. */
        count?: number;
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Generate a company list using a natural language query or structured filters, with optional enrichment. */
    "akta.generate_company_list": {
      input: {
        /** Natural language search query (e.g. 'SaaS companies in the US with Series A funding'). Cannot be used with filters. */
        query?: string;
        /** Structured filter conditions. Use the Filter Builder API to generate valid filters. Cannot be used with query. See filter options at /api-reference/listgen-api. */
        filters?: Record<string, unknown>;
        /** Data enrichment sections to include. Values: firmographic, business_model, company_assessment, trust_signal, company_hierarchy, digital_presence, financial_estimate, location, management_profile, product_offering, strategic_signal, customer_profile, industry, technology, funding_detail (Subscription, Enterprise), mna_and_investment (Subscription, Enterprise) */
        sections?: Array<string>;
        /** Field to sort results by. Default: relevance */
        sort_by?: "relevance" | "revenue_estimate" | "valuation_estimate" | "employee_range" | "total_funding" | "founded_year";
        /** Sort direction. Default: desc */
        sort_order?: "asc" | "desc";
        /**
         * Maximum companies to return. Default: 50, Max: 500
         * @maximum 500
         */
        limit?: number;
        /** Number of results to skip for pagination. Default: 0 */
        offset?: number;
      };
      output: {
        /** Returned records or company data. */
        data?: Array<Record<string, unknown>>;
        /** Number of companies returned. */
        count?: number;
        /** Total matching companies. Capped at 500. */
        total_count?: number;
        /** Credits consumed. Returns 0 when no enrichment sections requested. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Wait for company addition using the submission handle; existing companies complete immediately. */
    "akta.get_addition_result": {
      input: {
        /** Addition handle: a pending request ID or an already existing company. */
        handle: {
          /**
           * Request ID.
           * @minLength 1
           */
          request_id: string;
        } | {
          /** Existing company identity and upstream fields. */
          company: {
            /** Company UUID for downstream actions. */
            uuid?: string;
            /** Company name. */
            name?: string;
            /** Company website. */
            website?: string;
            [key: string]: unknown;
          };
        };
      };
      output: {
        /** Request state: pending, in_progress, completed or failed. */
        status: string;
        /** Existing company identity and upstream fields. */
        company?: {
          /** Company UUID for downstream actions. */
          uuid?: string;
          /** Company name. */
          name?: string;
          /** Company website. */
          website?: string;
          [key: string]: unknown;
        };
        /** Addition details, including company_uuid on completion or reason on failure. */
        detail?: Record<string, unknown>;
        /** Request ID when a task was created. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Read employee ratings and paginated reviews for a company. */
    "akta.get_employee_reviews": {
      input: {
        /** Company website (e.g. 'canva.com') or a company UUID. The UUID can be obtained from the Company Search API. */
        company: string;
        /**
         * Maximum number of reviews to return.
         * @maximum 100
         */
        limit?: number;
        /** Number of reviews to skip before returning records. Use with limit for pagination. */
        offset?: number;
      };
      output: {
        /** Returned records or company data. */
        data?: Record<string, unknown>;
        /** Applied page size. */
        limit?: number;
        /** Applied pagination offset. */
        offset?: number;
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Read company employee counts, growth history and functional breakdowns. */
    "akta.get_headcount_trends": {
      input: {
        /** Company website (e.g. 'canva.com') or a company UUID. The UUID can be obtained from the Company Search API. */
        company: string;
      };
      output: {
        /** Returned records or company data. */
        data?: Record<string, unknown>;
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Read paginated live company job listings. */
    "akta.get_job_posts": {
      input: {
        /** Company website (e.g. 'canva.com') or a company UUID. The UUID can be obtained from the Company Search API. */
        company: string;
        /** Maximum number of job listings to return. */
        limit?: number;
        /** Number of listings to skip before returning records. */
        offset?: number;
      };
      output: {
        /** Upstream response status. */
        status?: string;
        /** Returned records or company data. */
        data?: Array<Record<string, unknown>>;
        /** Number of returned records. */
        count?: number;
        /** Applied page size. */
        limit?: number;
        /** Applied pagination offset. */
        offset?: number;
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** List company products and retrieve reviews for selected product IDs. */
    "akta.get_product_reviews": {
      input: {
        /** Company website (e.g. 'canva.com') or a company UUID. The UUID can be obtained from the Company Search API. */
        company: string;
        /** List of product_id values to fetch reviews for. Pass the parameter multiple times to request more than one product. If omitted, the response returns the product list only. */
        products?: Array<string>;
        /**
         * Maximum number of reviews to return per product. Only applies when products is provided.
         * @maximum 50
         */
        limit?: number;
        /** Number of reviews to skip before returning records. Use with limit for pagination. */
        offset?: number;
      };
      output: {
        /** Returned records or company data. */
        data?: Record<string, unknown>;
        /** Applied page size. */
        limit?: number;
        /** Applied pagination offset. */
        offset?: number;
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Read an asynchronous request by its request ID. */
    "akta.get_request_status": {
      input: {
        /**
         * The unique identifier of the request to check, returned when the original request was submitted. Example: 2db01b38-5c81-4b3f-b76d-8b36aeed603b
         * @minLength 1
         */
        request_id: string;
      };
      output: {
        /** Request ID. */
        request_id?: string;
        /** Request type. */
        request_type?: string;
        /** Request state: pending, in_progress, completed or failed. */
        status: string;
        /** Company addition details, including reason and company_uuid when available. */
        detail?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Read paginated company social posts and engagement data. */
    "akta.get_social_posts": {
      input: {
        /** Company website (e.g. 'canva.com') or a company UUID. The UUID can be obtained from the Company Search API. */
        company: string;
        /** Maximum number of posts to return. */
        limit?: number;
        /** Number of posts to skip before returning records. */
        offset?: number;
      };
      output: {
        /** Returned records or company data. */
        data?: Record<string, unknown>;
        /** Number of returned records. */
        count?: number;
        /** Applied page size. */
        limit?: number;
        /** Applied pagination offset. */
        offset?: number;
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Read company website engagement, traffic history and acquisition channels. */
    "akta.get_website_traffic": {
      input: {
        /** Company website (e.g. 'canva.com') or a company UUID. The UUID can be obtained from the Company Search API. */
        company: string;
      };
      output: {
        /** Returned records or company data. */
        data?: Record<string, unknown>;
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Resolve a company name, website or UUID into matching companies. */
    "akta.search_companies": {
      input: {
        /** A company name, website. The backend automatically resolves the input type. Examples: https://canva.com, canva */
        query: string;
      };
      output: {
        /** Returned records or company data. */
        data?: Array<{
          /** Company UUID for downstream actions. */
          uuid?: string;
          /** Company name. */
          name?: string;
          /** Company website. */
          website?: string;
          [key: string]: unknown;
        }>;
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Resolve an industry topic into ranked taxonomy codes. */
    "akta.search_industries": {
      input: {
        /** Free-text industry name or topic to search for. Example: 'warehouse automation' */
        query: string;
        /** Restrict results to one or more levels of the industry taxonomy hierarchy. Accepts a single level or a comma-separated list of multiple levels. Available values: l1, l2, l3, l4, all. Default is l4. */
        level?: string;
      };
      output: {
        /** Returned records or company data. */
        data?: Array<Record<string, unknown>>;
        /** Number of industry objects returned in the data array. */
        count?: number;
        /** API credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Search company, industry and topic news with entity, date, taxonomy and sentiment filters. */
    "akta.search_news": {
      input: (unknown) & (unknown) & (unknown);
      output: {
        /** Upstream response status. */
        status?: string;
        /** Total matching articles available. */
        total?: number;
        /** Number of articles returned in the data array. */
        count?: number;
        /** Applied page size. */
        limit?: number;
        /** Applied pagination offset. */
        offset?: number;
        /** API credits consumed. */
        credits_consumed?: number;
        /** Returned records or company data. */
        data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
