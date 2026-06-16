import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve DataForSEO Backlinks anchor text metrics for a domain, subdomain, or page. */
    "dataforseo.backlinks_anchors_live": {
      input: {
        /**
         * Domain, subdomain, or absolute page URL sent to DataForSEO Backlinks.
         * @minLength 1
         */
        target: string;
        /** Backlink status type used for metrics. */
        backlinksStatusType?: "all" | "live" | "lost";
        /** Whether subdomains of the target are included. */
        includeSubdomains?: boolean;
        /** Whether indirect links are included. */
        includeIndirectLinks?: boolean;
        /** Whether internal backlinks from subdomains are excluded. */
        excludeInternalBacklinks?: boolean;
        /** Scale used for backlink rank metrics. */
        rankScale?: "one_hundred" | "one_thousand";
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
        /**
         * Maximum number of returned items.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Offset in the returned results array.
         * @minimum 0
         */
        offset?: number;
        /**
         * DataForSEO Backlinks filter expression.
         * @minItems 1
         */
        filters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
        /**
         * DataForSEO Backlinks sorting rules.
         * @minItems 1
         */
        orderBy?: Array<string>;
        /**
         * Maximum number of elements in internal aggregate arrays.
         * @minimum 1
         * @maximum 1000
         */
        internalListLimit?: number;
        /**
         * Initial backlinks dataset filter expression.
         * @minItems 1
         */
        backlinksFilters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve DataForSEO Backlinks records for a domain, subdomain, or page. */
    "dataforseo.backlinks_list_live": {
      input: {
        /**
         * Domain, subdomain, or absolute page URL sent to DataForSEO Backlinks.
         * @minLength 1
         */
        target: string;
        /** Backlink status type used for metrics. */
        backlinksStatusType?: "all" | "live" | "lost";
        /** Whether subdomains of the target are included. */
        includeSubdomains?: boolean;
        /** Whether indirect links are included. */
        includeIndirectLinks?: boolean;
        /** Whether internal backlinks from subdomains are excluded. */
        excludeInternalBacklinks?: boolean;
        /** Scale used for backlink rank metrics. */
        rankScale?: "one_hundred" | "one_thousand";
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
        /**
         * Maximum number of returned items.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Offset in the returned results array.
         * @minimum 0
         */
        offset?: number;
        /**
         * DataForSEO Backlinks filter expression.
         * @minItems 1
         */
        filters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
        /**
         * DataForSEO Backlinks sorting rules.
         * @minItems 1
         */
        orderBy?: Array<string>;
        /** Backlink grouping mode. */
        mode?: "as_is" | "one_per_domain" | "one_per_anchor";
        /** Detailed backlink grouping object accepted by DataForSEO. */
        customMode?: Record<string, unknown>;
        /**
         * Token for subsequent backlinks list requests.
         * @minLength 1
         */
        searchAfterToken?: string;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve DataForSEO Backlinks referring domains for a domain, subdomain, or page. */
    "dataforseo.backlinks_referring_domains_live": {
      input: {
        /**
         * Domain, subdomain, or absolute page URL sent to DataForSEO Backlinks.
         * @minLength 1
         */
        target: string;
        /** Backlink status type used for metrics. */
        backlinksStatusType?: "all" | "live" | "lost";
        /** Whether subdomains of the target are included. */
        includeSubdomains?: boolean;
        /** Whether indirect links are included. */
        includeIndirectLinks?: boolean;
        /** Whether internal backlinks from subdomains are excluded. */
        excludeInternalBacklinks?: boolean;
        /** Scale used for backlink rank metrics. */
        rankScale?: "one_hundred" | "one_thousand";
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
        /**
         * Maximum number of returned items.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Offset in the returned results array.
         * @minimum 0
         */
        offset?: number;
        /**
         * DataForSEO Backlinks filter expression.
         * @minItems 1
         */
        filters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
        /**
         * DataForSEO Backlinks sorting rules.
         * @minItems 1
         */
        orderBy?: Array<string>;
        /**
         * Maximum number of elements in internal aggregate arrays.
         * @minimum 1
         * @maximum 1000
         */
        internalListLimit?: number;
        /**
         * Initial backlinks dataset filter expression.
         * @minItems 1
         */
        backlinksFilters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve DataForSEO Backlinks summary metrics for a domain, subdomain, or page. */
    "dataforseo.backlinks_summary_live": {
      input: {
        /**
         * Domain, subdomain, or absolute page URL sent to DataForSEO Backlinks.
         * @minLength 1
         */
        target: string;
        /** Backlink status type used for metrics. */
        backlinksStatusType?: "all" | "live" | "lost";
        /** Whether subdomains of the target are included. */
        includeSubdomains?: boolean;
        /** Whether indirect links are included. */
        includeIndirectLinks?: boolean;
        /** Whether internal backlinks from subdomains are excluded. */
        excludeInternalBacklinks?: boolean;
        /** Scale used for backlink rank metrics. */
        rankScale?: "one_hundred" | "one_thousand";
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
        /**
         * Maximum number of elements in internal aggregate arrays.
         * @minimum 1
         * @maximum 1000
         */
        internalListLimit?: number;
        /**
         * Initial backlinks dataset filter expression.
         * @minItems 1
         */
        backlinksFilters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve DataForSEO account details, balance, rates, limits, and usage data. */
    "dataforseo.get_user_data": {
      input: Record<string, never>;
      output: {
        /** DataForSEO API login for the account. */
        login?: string;
        /** Timezone configured in the DataForSEO profile. */
        timezone?: string;
        /** Account spending and balance details returned by DataForSEO. */
        money?: Record<string, unknown> | null;
        /** API rate information returned by DataForSEO. */
        rates?: Record<string, unknown> | null;
        /** API limit information returned by DataForSEO. */
        limits?: Record<string, unknown> | null;
        /** API usage statistics returned by DataForSEO. */
        statistics?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve Google Ads search volume metrics from DataForSEO for one batch of keywords. */
    "dataforseo.google_ads_search_volume_live": {
      input: {
        /**
         * Keywords to request search volume for.
         * @minItems 1
         * @maxItems 1000
         */
        keywords: Array<string>;
        /**
         * Full name of the location to target in DataForSEO.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO location code to target. */
        locationCode?: number;
        /**
         * Full name of the language to target in DataForSEO.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve DataForSEO Labs Google ranking and traffic overview for a domain. */
    "dataforseo.google_domain_rank_overview_live": {
      input: {
        /**
         * Target domain sent to DataForSEO without protocol or www.
         * @minLength 1
         */
        target: string;
        /**
         * Full name of the location to target in DataForSEO.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO location code to target. */
        locationCode?: number;
        /**
         * Full name of the language to target in DataForSEO.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /** Whether to exclude highly similar keywords. */
        ignoreSynonyms?: boolean;
        /**
         * Maximum number of returned domain rank overview items.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Offset in the returned results array.
         * @minimum 0
         */
        offset?: number;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve DataForSEO Labs Google keyword ideas for seed keywords. */
    "dataforseo.google_keyword_ideas_live": {
      input: {
        /**
         * Seed keywords sent to DataForSEO Labs.
         * @minItems 1
         * @maxItems 200
         */
        keywords: Array<string>;
        /**
         * Full name of the location to target in DataForSEO.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO location code to target. */
        locationCode?: number;
        /**
         * Full name of the language to target in DataForSEO.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /** Whether phrase-match search mode is used. */
        closelyVariants?: boolean;
        /** Whether to exclude highly similar keywords. */
        ignoreSynonyms?: boolean;
        /** Whether to include SERP information for each keyword. */
        includeSerpInfo?: boolean;
        /** Whether to include clickstream-based metrics. */
        includeClickstreamData?: boolean;
        /**
         * Maximum number of returned items.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Offset in the returned results array.
         * @minimum 0
         */
        offset?: number;
        /**
         * DataForSEO filter expression.
         * @minItems 1
         */
        filters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
        /**
         * DataForSEO sorting rules.
         * @minItems 1
         */
        orderBy?: Array<string>;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
        /**
         * Offset token for subsequent keyword idea requests.
         * @minLength 1
         */
        offsetToken?: string;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve DataForSEO Labs Google keyword overview metrics for a batch of keywords. */
    "dataforseo.google_keyword_overview_live": {
      input: {
        /**
         * Keywords sent to DataForSEO Labs.
         * @minItems 1
         * @maxItems 700
         */
        keywords: Array<string>;
        /**
         * Full name of the location to target in DataForSEO.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO location code to target. */
        locationCode?: number;
        /**
         * Full name of the language to target in DataForSEO.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /** Whether to include SERP information for each keyword. */
        includeSerpInfo?: boolean;
        /** Whether to include clickstream-based metrics. */
        includeClickstreamData?: boolean;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve DataForSEO Labs Google keyword suggestions for one seed keyword. */
    "dataforseo.google_keyword_suggestions_live": {
      input: {
        /**
         * Seed keyword used to generate keyword suggestions.
         * @minLength 1
         */
        keyword: string;
        /**
         * Full name of the location to target in DataForSEO.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO location code to target. */
        locationCode?: number;
        /**
         * Full name of the language to target in DataForSEO.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * Maximum number of keyword suggestions to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Whether to include the seed keyword in the response. */
        includeSeedKeyword?: boolean;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve DataForSEO Labs Google keyword ideas relevant to a target domain. */
    "dataforseo.google_keywords_for_site_live": {
      input: {
        /**
         * Target domain sent to DataForSEO without protocol or www.
         * @minLength 1
         */
        target: string;
        /**
         * Full name of the location to target in DataForSEO.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO location code to target. */
        locationCode?: number;
        /**
         * Full name of the language to target in DataForSEO.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /** Whether to include SERP information for each keyword. */
        includeSerpInfo?: boolean;
        /** Whether subdomains are included in the keyword search. */
        includeSubdomains?: boolean;
        /** Whether to include clickstream-based metrics. */
        includeClickstreamData?: boolean;
        /**
         * Maximum number of returned items.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Offset in the returned results array.
         * @minimum 0
         */
        offset?: number;
        /**
         * DataForSEO filter expression.
         * @minItems 1
         */
        filters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
        /**
         * DataForSEO sorting rules.
         * @minItems 1
         */
        orderBy?: Array<string>;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
        /**
         * Offset token for subsequent keyword requests.
         * @minLength 1
         */
        offsetToken?: string;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Run a DataForSEO Google Organic SERP Live Advanced request for one search keyword. */
    "dataforseo.google_organic_live_advanced": {
      input: {
        /**
         * Search keyword sent to DataForSEO.
         * @minLength 1
         */
        keyword: string;
        /**
         * Full name of the location to target in DataForSEO.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO location code to target. */
        locationCode?: number;
        /**
         * Full name of the language to target in DataForSEO.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /** Device type used for the SERP request. */
        device?: "desktop" | "mobile";
        /**
         * Operating system name sent to DataForSEO for mobile or desktop requests.
         * @minLength 1
         */
        os?: string;
        /**
         * Maximum SERP depth to retrieve.
         * @minimum 1
         * @maximum 700
         */
        depth?: number;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve ranking and traffic metrics for the most relevant pages of a domain. */
    "dataforseo.google_relevant_pages_live": {
      input: {
        /**
         * Target domain sent to DataForSEO without protocol or www.
         * @minLength 1
         */
        target: string;
        /** Whether to exclude highly similar keywords. */
        ignoreSynonyms?: boolean;
        /** Whether to include clickstream-based metrics. */
        includeClickstreamData?: boolean;
        /**
         * Maximum number of returned items.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Offset in the returned results array.
         * @minimum 0
         */
        offset?: number;
        /**
         * DataForSEO filter expression.
         * @minItems 1
         */
        filters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
        /**
         * DataForSEO sorting rules.
         * @minItems 1
         */
        orderBy?: Array<string>;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
        /**
         * Search result item types included in DataForSEO Labs calculations.
         * @minItems 1
         */
        itemTypes?: Array<string>;
        /** Historical SERP mode used for relevant pages. */
        historicalSerpMode?: "live" | "lost" | "all";
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
    /** Retrieve domains competing in Google SERPs for the specified keywords. */
    "dataforseo.google_serp_competitors_live": {
      input: {
        /**
         * Keywords used to find SERP competitors.
         * @minItems 1
         * @maxItems 200
         */
        keywords: Array<string>;
        /**
         * Full name of the location to target in DataForSEO.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO location code to target. */
        locationCode?: number;
        /** Whether subdomains are included in the competitor search. */
        includeSubdomains?: boolean;
        /**
         * Search result item types included in DataForSEO Labs calculations.
         * @minItems 1
         */
        itemTypes?: Array<string>;
        /**
         * Maximum number of returned items.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Offset in the returned results array.
         * @minimum 0
         */
        offset?: number;
        /**
         * DataForSEO filter expression.
         * @minItems 1
         */
        filters?: Array<string | number | boolean | Array<unknown> | Record<string, unknown>>;
        /**
         * DataForSEO sorting rules.
         * @minItems 1
         */
        orderBy?: Array<string>;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         */
        tag?: string;
      };
      output: {
        /** Metadata for the first DataForSEO task returned by the endpoint. */
        task?: {
          /** DataForSEO task identifier. */
          id?: string;
          /** DataForSEO task status code. */
          status_code: number;
          /** DataForSEO task status message. */
          status_message: string;
          /** Task execution time reported by DataForSEO. */
          time?: string;
          /** Task cost in USD reported by DataForSEO. */
          cost?: number;
          /** Number of result objects returned by the task. */
          result_count?: number;
          [key: string]: unknown;
        };
        /** Result objects returned by DataForSEO for the first task. */
        results?: Array<Record<string, unknown>> | null;
      };
    };
  }
}
