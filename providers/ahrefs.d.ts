import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Keywords Explorer overview rows for keywords, a target, or a keyword list. */
    "ahrefs.get_keywords_overview": {
      input: {
        /**
         * Two-letter country code in ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        country: string;
        /**
         * Comma-separated list of columns to return.
         * @minLength 1
         */
        select: string;
        /**
         * Comma-separated list of keywords to show metrics for.
         * @minLength 1
         */
        keywords?: string;
        /**
         * Domain or URL used to filter keyword data.
         * @minLength 1
         */
        target?: string;
        /** Scope of the Ahrefs target search. */
        targetMode?: "exact" | "prefix" | "domain" | "subdomains";
        /** Ranking position filter for the specified target. */
        targetPosition?: "in_top10" | "in_top100";
        /**
         * Identifier of an existing Ahrefs keyword list.
         * @exclusiveMinimum 0
         */
        keywordListId?: number;
        /**
         * Start date in YYYY-MM-DD format for retrieving historical monthly search volumes.
         * @format date
         */
        volumeMonthlyDateFrom?: string;
        /**
         * End date in YYYY-MM-DD format for retrieving historical monthly search volumes.
         * @format date
         */
        volumeMonthlyDateTo?: string;
        /**
         * Ahrefs filter expression.
         * @minLength 1
         */
        where?: string;
        /**
         * Column ordering expression accepted by Ahrefs.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * Maximum number of keyword rows to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Manual timeout duration in seconds.
         * @exclusiveMinimum 0
         */
        timeout?: number;
      };
      output: {
        /** JSON data returned by Ahrefs. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
    /** Retrieve Ahrefs API subscription limits and current usage. */
    "ahrefs.get_limits_and_usage": {
      input: Record<string, never>;
      output: {
        /** JSON data returned by Ahrefs. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
    /** Retrieve Site Explorer metrics for a domain or URL. */
    "ahrefs.get_site_explorer_metrics": {
      input: {
        /**
         * Domain or URL to analyze with Ahrefs.
         * @minLength 1
         */
        target: string;
        /**
         * Date to report metrics on in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /** Scope of the Ahrefs target search. */
        mode?: "exact" | "prefix" | "domain" | "subdomains";
        /**
         * Two-letter country code in ISO 3166-1 alpha-2 format.
         * @minLength 1
         */
        country?: string;
        /** Protocol filter for the target. */
        protocol?: "both" | "http" | "https";
        /** Search volume calculation mode used by Ahrefs for volume, traffic, and traffic value. */
        volumeMode?: "monthly" | "average";
      };
      output: {
        /** JSON data returned by Ahrefs. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
    /** Retrieve Site Explorer metrics grouped by country for a domain or URL. */
    "ahrefs.get_site_explorer_metrics_by_country": {
      input: {
        /**
         * Domain or URL to analyze with Ahrefs.
         * @minLength 1
         */
        target: string;
        /**
         * Date to report metrics on in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /** Scope of the Ahrefs target search. */
        mode?: "exact" | "prefix" | "domain" | "subdomains";
        /**
         * Comma-separated list of columns to return.
         * @minLength 1
         */
        select?: string;
        /** Protocol filter for the target. */
        protocol?: "both" | "http" | "https";
        /** Search volume calculation mode used by Ahrefs for volume, traffic, and traffic value. */
        volumeMode?: "monthly" | "average";
      };
      output: {
        /** JSON data returned by Ahrefs. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
      };
    };
  }
}
