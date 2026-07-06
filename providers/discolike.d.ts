import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Estimate how many DiscoLike company domains match the provided filters. */
    "discolike.count_matching_domains": {
      input: {
        /**
         * ISO 3166-1 alpha-2 country codes used to filter companies.
         * @minItems 1
         * @maxItems 20
         */
        countries?: Array<string>;
        /**
         * DiscoLike industry category values used to filter companies.
         * @minItems 1
         * @maxItems 20
         */
        categories?: Array<string>;
        /**
         * Business model labels used to filter companies.
         * @minItems 1
         * @maxItems 8
         */
        businessModels?: Array<"B2B" | "B2C" | "B2G" | "G2B" | "G2C" | "D2C" | "C2C" | "C2B">;
        /**
         * Employee count range in DiscoLike min,max format, for example 51,200.
         * @minLength 1
         */
        employeeRange?: string;
        /**
         * Revenue range in DiscoLike min,max format using raw numbers, for example 1000000,10000000.
         * @minLength 1
         */
        revenueRange?: string;
        /**
         * Digital footprint score from 0 to 800.
         * @minimum 0
         * @maximum 800
         */
        minDigitalFootprint?: number;
        /**
         * Digital footprint score from 0 to 800.
         * @minimum 0
         * @maximum 800
         */
        maxDigitalFootprint?: number;
        /** Whether to exclude suspected lead generation sites. */
        excludeLeadgen?: boolean;
      };
      output: {
        /** Number of company domains matching the query. */
        count: number;
      };
    };
    /** Discover companies in DiscoLike from a natural-language ICP prompt, seed domains, or company filters. */
    "discolike.discover_companies": {
      input: {
        /**
         * Natural language ICP description that DiscoLike converts into discovery filters.
         * @minLength 1
         * @maxLength 4000
         */
        icpPrompt?: string;
        /**
         * Seed company domains used for DiscoLike lookalike discovery.
         * @minItems 1
         * @maxItems 10
         */
        domains?: Array<string>;
        /**
         * Maximum number of discovery results to return.
         * @minimum 5
         * @maximum 10000
         */
        maxRecords?: number;
        /**
         * Number of discovery results to skip for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * ISO 3166-1 alpha-2 country codes used to filter companies.
         * @minItems 1
         * @maxItems 20
         */
        countries?: Array<string>;
        /**
         * DiscoLike industry category values used to filter companies.
         * @minItems 1
         * @maxItems 20
         */
        categories?: Array<string>;
        /**
         * Business model labels used to filter companies.
         * @minItems 1
         * @maxItems 8
         */
        businessModels?: Array<"B2B" | "B2C" | "B2G" | "G2B" | "G2C" | "D2C" | "C2C" | "C2B">;
        /**
         * Employee count range in DiscoLike min,max format, for example 51,200.
         * @minLength 1
         */
        employeeRange?: string;
        /**
         * Revenue range in DiscoLike min,max format using raw numbers, for example 1000000,10000000.
         * @minLength 1
         */
        revenueRange?: string;
        /**
         * Digital footprint score from 0 to 800.
         * @minimum 0
         * @maximum 800
         */
        minDigitalFootprint?: number;
        /**
         * Digital footprint score from 0 to 800.
         * @minimum 0
         * @maximum 800
         */
        maxDigitalFootprint?: number;
        /** Whether to exclude suspected lead generation sites. */
        excludeLeadgen?: boolean;
      };
      output: {
        /** The company profiles returned by DiscoLike. */
        results: Array<{
          /** Company domain and unique record identifier. */
          domain?: string;
          /** Latest and most accurate company name. */
          name?: string | null;
          /** Company size and buying power score. */
          score?: number | null;
          /** Industry group confidence values keyed by DiscoLike industry label. */
          industry_groups?: Record<string, number>;
          /** Business model confidence values keyed by DiscoLike business model label. */
          business_model?: Record<string, number>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get DiscoLike firmographic data for a single company domain. */
    "discolike.get_business_profile": {
      input: {
        /**
         * The company domain to query, without protocol.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** A DiscoLike company profile. */
        company: {
          /** Company domain and unique record identifier. */
          domain?: string;
          /** Latest and most accurate company name. */
          name?: string | null;
          /** Company size and buying power score. */
          score?: number | null;
          /** Industry group confidence values keyed by DiscoLike industry label. */
          industry_groups?: Record<string, number>;
          /** Business model confidence values keyed by DiscoLike business model label. */
          business_model?: Record<string, number>;
          [key: string]: unknown;
        };
      };
    };
    /** Get DiscoLike SSL certificate registration metrics for a company domain. */
    "discolike.get_certificate_metrics": {
      input: {
        /**
         * The company domain to query, without protocol.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** A DiscoLike certificate metrics response. */
        metrics: {
          /** Normalized domain name returned by DiscoLike. */
          domain?: string;
          /** Total registration events from the earliest known date. */
          lookback_all?: number;
          /** Total registration events in the last 360 days. */
          lookback_360?: number;
          /** Total registration events in the last 720 days. */
          lookback_720?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get DiscoLike digital footprint score details for a company domain. */
    "discolike.get_digital_footprint_score": {
      input: {
        /**
         * The company domain to query, without protocol.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** A DiscoLike digital footprint score response. */
        score: {
          /** Normalized domain name returned by DiscoLike. */
          domain?: string;
          /** Final digital footprint score. */
          score?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get DiscoLike quarterly growth metrics for a company domain. */
    "discolike.get_growth_metrics": {
      input: {
        /**
         * The company domain to query, without protocol.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** A DiscoLike growth metrics response. */
        growth: {
          /** Normalized domain name returned by DiscoLike. */
          domain?: string;
          /** Three-month score growth rate. */
          score_growth_3m?: number | null;
          /** Three-month subdomain growth rate. */
          subdomain_growth_3m?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get DiscoLike API usage and billing counters for the current key. */
    "discolike.get_usage": {
      input: Record<string, never>;
      output: {
        /** A DiscoLike API usage response. */
        usage: {
          /** DiscoLike account status. */
          account_status?: string;
          /** Total requests for the current month. */
          month_to_date_requests?: number;
          /** Total records returned for the current month. */
          month_to_date_records?: number;
          /** Total spend for the current month. */
          month_to_date_spend?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
