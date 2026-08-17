import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search Dealroom companies with documented keyword, boolean filter, projection, sorting, and pagination options. */
    "dealroom.search_companies": {
      input: {
        /** A keyword or list of keywords to search for. */
        keyword?: string | Array<string>;
        /** The documented Dealroom keyword field strategy. */
        keywordType?: "default" | "default_next" | "name" | "website_domain";
        /** The documented Dealroom keyword matching strategy. */
        keywordMatchType?: "fuzzy" | "exact" | "all" | "any";
        /** Boolean filter clauses using fields advertised by the corresponding Dealroom filters endpoint. */
        formData?: {
          /** Dealroom filter names mapped to values from the corresponding filters endpoint. */
          must?: Record<string, string | number | Array<string>>;
          /** Dealroom filter names mapped to values from the corresponding filters endpoint. */
          should?: Record<string, string | number | Array<string>>;
          /** Dealroom filter names mapped to values from the corresponding filters endpoint. */
          mustNot?: Record<string, string | number | Array<string>>;
        };
        /**
         * Comma-separated response fields, including documented bracket notation for nested fields.
         * @minLength 1
         */
        fields?: string;
        /** A documented sort field. Prefix the value with a minus sign for descending order. */
        sort?: "name" | "industries" | "growth_stage" | "locations" | "total_funding" | "tags" | "traffic_summary" | "last_funding_date" | "last_updated" | "last_updated_utc" | "created_utc" | "website_traffic_3_months_growth_rank" | "website_traffic_6_months_growth_rank" | "website_traffic_12_months_growth_rank" | "website_traffic_3_months_growth_relative" | "website_traffic_6_months_growth_relative" | "website_traffic_12_months_growth_relative" | "app_3_months_growth_rank" | "app_6_months_growth_rank" | "app_12_months_growth_rank" | "app_3_months_growth_relative" | "app_6_months_growth_relative" | "app_12_months_growth_relative" | "employee_3_months_growth_rank" | "employee_6_months_growth_rank" | "employee_12_months_growth_rank" | "employee_3_months_growth_relative" | "employee_6_months_growth_relative" | "employee_12_months_growth_relative" | "dealroom_signal" | "growth_rate" | "-name" | "-industries" | "-growth_stage" | "-locations" | "-total_funding" | "-tags" | "-traffic_summary" | "-last_funding_date" | "-last_updated" | "-last_updated_utc" | "-created_utc" | "-website_traffic_3_months_growth_rank" | "-website_traffic_6_months_growth_rank" | "-website_traffic_12_months_growth_rank" | "-website_traffic_3_months_growth_relative" | "-website_traffic_6_months_growth_relative" | "-website_traffic_12_months_growth_relative" | "-app_3_months_growth_rank" | "-app_6_months_growth_rank" | "-app_12_months_growth_rank" | "-app_3_months_growth_relative" | "-app_6_months_growth_relative" | "-app_12_months_growth_relative" | "-employee_3_months_growth_rank" | "-employee_6_months_growth_rank" | "-employee_12_months_growth_rank" | "-employee_3_months_growth_relative" | "-employee_6_months_growth_relative" | "-employee_12_months_growth_relative" | "-dealroom_signal" | "-growth_rate";
        /**
         * Number of results to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Zero-based result offset.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
      };
      output: {
        /** The total number of matching Dealroom records. */
        total: number;
        /** The Dealroom records returned for this page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Search Dealroom investment institutions with documented keyword, boolean filter, projection, sorting, and pagination options. */
    "dealroom.search_investors": {
      input: {
        /** A keyword or list of keywords to search for. */
        keyword?: string | Array<string>;
        /** The documented Dealroom keyword field strategy. */
        keywordType?: "default" | "default_next" | "name" | "website_domain";
        /** The documented Dealroom keyword matching strategy. */
        keywordMatchType?: "fuzzy" | "exact" | "all" | "any";
        /** Boolean filter clauses using fields advertised by the corresponding Dealroom filters endpoint. */
        formData?: {
          /** Dealroom filter names mapped to values from the corresponding filters endpoint. */
          must?: Record<string, string | number | Array<string>>;
          /** Dealroom filter names mapped to values from the corresponding filters endpoint. */
          should?: Record<string, string | number | Array<string>>;
          /** Dealroom filter names mapped to values from the corresponding filters endpoint. */
          mustNot?: Record<string, string | number | Array<string>>;
        };
        /**
         * Comma-separated response fields, including documented bracket notation for nested fields.
         * @minLength 1
         */
        fields?: string;
        /** A documented sort field. Prefix the value with a minus sign for descending order. */
        sort?: "name" | "investment_stages" | "locations" | "industry_experience" | "client_focus" | "tags" | "total_funding" | "recent_funding" | "last_updated" | "last_updated_utc" | "created_utc" | "-name" | "-investment_stages" | "-locations" | "-industry_experience" | "-client_focus" | "-tags" | "-total_funding" | "-recent_funding" | "-last_updated" | "-last_updated_utc" | "-created_utc";
        /**
         * Number of results to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Zero-based result offset.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
      };
      output: {
        /** The total number of matching Dealroom records. */
        total: number;
        /** The Dealroom records returned for this page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Search Dealroom transactions and return their documented funding and round data without inferring seller or exit-party roles. */
    "dealroom.search_transactions": {
      input: {
        /** A keyword or list of keywords to search for. */
        keyword?: string | Array<string>;
        /** The documented Dealroom keyword field strategy. */
        keywordType?: "default" | "default_next" | "name" | "website_domain";
        /** The documented Dealroom keyword matching strategy. */
        keywordMatchType?: "fuzzy" | "exact" | "all" | "any";
        /** Boolean filter clauses using fields advertised by the corresponding Dealroom filters endpoint. */
        formData?: {
          /** Dealroom filter names mapped to values from the corresponding filters endpoint. */
          must?: Record<string, string | number | Array<string>>;
          /** Dealroom filter names mapped to values from the corresponding filters endpoint. */
          should?: Record<string, string | number | Array<string>>;
          /** Dealroom filter names mapped to values from the corresponding filters endpoint. */
          mustNot?: Record<string, string | number | Array<string>>;
        };
        /**
         * Comma-separated response fields, including documented bracket notation for nested fields.
         * @minLength 1
         */
        fields?: string;
        /** A documented sort field. Prefix the value with a minus sign for descending order. */
        sort?: "name" | "date" | "industries" | "hq_locations" | "growth_stages" | "total_funding" | "last_funding" | "amount" | "last_updated" | "last_updated_utc" | "created_utc" | "-name" | "-date" | "-industries" | "-hq_locations" | "-growth_stages" | "-total_funding" | "-last_funding" | "-amount" | "-last_updated" | "-last_updated_utc" | "-created_utc";
        /**
         * Number of results to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Zero-based result offset.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
      };
      output: {
        /** The total number of matching Dealroom records. */
        total: number;
        /** The Dealroom records returned for this page. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
