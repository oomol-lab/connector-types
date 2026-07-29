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
    /** Retrieve the status and Advanced results of one DataForSEO Amazon ASIN task. */
    "dataforseo.get_amazon_asins_task": {
      input: {
        /**
         * Task identifier returned by the matching Amazon Merchant submit action.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Normalized metadata and lifecycle state for one DataForSEO asynchronous task. */
        task: {
          /** DataForSEO task identifier when the task was accepted. */
          id: string | null;
          /** Connector lifecycle state derived from the DataForSEO task status. */
          state: "running" | "succeeded" | "failed";
          /** DataForSEO task status code. */
          status_code: number | null;
          /** DataForSEO task status message. */
          status_message: string | null;
          /** Task execution time reported by DataForSEO. */
          time: string | null;
          /** Task cost in USD reported by DataForSEO. */
          cost: number | null;
          /** Number of result objects returned by the task. */
          result_count: number | null;
          /** Request path components returned for the task. */
          path: Array<string>;
          /** Original task input metadata returned by DataForSEO. */
          data: Record<string, unknown>;
          /** Complete task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        };
        /** Result objects returned by DataForSEO for the task. */
        results: Array<Record<string, unknown>>;
        /** Task errors returned by DataForSEO without discarding task status or cost. */
        errors: Array<{
          /** DataForSEO task error status code. */
          status_code: number | null;
          /** DataForSEO task error status message. */
          status_message: string | null;
          /** Complete failed task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        }>;
        /** Total response cost in USD reported by DataForSEO. */
        cost: number | null;
        /** Complete DataForSEO response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the status and Advanced results of one DataForSEO Amazon Products task. */
    "dataforseo.get_amazon_products_task": {
      input: {
        /**
         * Task identifier returned by the matching Amazon Merchant submit action.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Normalized metadata and lifecycle state for one DataForSEO asynchronous task. */
        task: {
          /** DataForSEO task identifier when the task was accepted. */
          id: string | null;
          /** Connector lifecycle state derived from the DataForSEO task status. */
          state: "running" | "succeeded" | "failed";
          /** DataForSEO task status code. */
          status_code: number | null;
          /** DataForSEO task status message. */
          status_message: string | null;
          /** Task execution time reported by DataForSEO. */
          time: string | null;
          /** Task cost in USD reported by DataForSEO. */
          cost: number | null;
          /** Number of result objects returned by the task. */
          result_count: number | null;
          /** Request path components returned for the task. */
          path: Array<string>;
          /** Original task input metadata returned by DataForSEO. */
          data: Record<string, unknown>;
          /** Complete task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        };
        /** Result objects returned by DataForSEO for the task. */
        results: Array<Record<string, unknown>>;
        /** Task errors returned by DataForSEO without discarding task status or cost. */
        errors: Array<{
          /** DataForSEO task error status code. */
          status_code: number | null;
          /** DataForSEO task error status message. */
          status_message: string | null;
          /** Complete failed task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        }>;
        /** Total response cost in USD reported by DataForSEO. */
        cost: number | null;
        /** Complete DataForSEO response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the status and Advanced results of one DataForSEO Amazon Sellers task. */
    "dataforseo.get_amazon_sellers_task": {
      input: {
        /**
         * Task identifier returned by the matching Amazon Merchant submit action.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Normalized metadata and lifecycle state for one DataForSEO asynchronous task. */
        task: {
          /** DataForSEO task identifier when the task was accepted. */
          id: string | null;
          /** Connector lifecycle state derived from the DataForSEO task status. */
          state: "running" | "succeeded" | "failed";
          /** DataForSEO task status code. */
          status_code: number | null;
          /** DataForSEO task status message. */
          status_message: string | null;
          /** Task execution time reported by DataForSEO. */
          time: string | null;
          /** Task cost in USD reported by DataForSEO. */
          cost: number | null;
          /** Number of result objects returned by the task. */
          result_count: number | null;
          /** Request path components returned for the task. */
          path: Array<string>;
          /** Original task input metadata returned by DataForSEO. */
          data: Record<string, unknown>;
          /** Complete task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        };
        /** Result objects returned by DataForSEO for the task. */
        results: Array<Record<string, unknown>>;
        /** Task errors returned by DataForSEO without discarding task status or cost. */
        errors: Array<{
          /** DataForSEO task error status code. */
          status_code: number | null;
          /** DataForSEO task error status message. */
          status_message: string | null;
          /** Complete failed task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        }>;
        /** Total response cost in USD reported by DataForSEO. */
        cost: number | null;
        /** Complete DataForSEO response envelope. */
        raw: Record<string, unknown>;
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
    /** List uncollected completed Amazon Products, ASIN, and Sellers tasks from DataForSEO Merchant API. */
    "dataforseo.list_amazon_tasks_ready": {
      input: Record<string, never>;
      output: {
        /** Normalized metadata and lifecycle state for one DataForSEO asynchronous task. */
        task: {
          /** DataForSEO task identifier when the task was accepted. */
          id: string | null;
          /** Connector lifecycle state derived from the DataForSEO task status. */
          state: "running" | "succeeded" | "failed";
          /** DataForSEO task status code. */
          status_code: number | null;
          /** DataForSEO task status message. */
          status_message: string | null;
          /** Task execution time reported by DataForSEO. */
          time: string | null;
          /** Task cost in USD reported by DataForSEO. */
          cost: number | null;
          /** Number of result objects returned by the task. */
          result_count: number | null;
          /** Request path components returned for the task. */
          path: Array<string>;
          /** Original task input metadata returned by DataForSEO. */
          data: Record<string, unknown>;
          /** Complete task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        };
        /** Result objects returned by DataForSEO for the task. */
        results: Array<Record<string, unknown>>;
        /** Task errors returned by DataForSEO without discarding task status or cost. */
        errors: Array<{
          /** DataForSEO task error status code. */
          status_code: number | null;
          /** DataForSEO task error status message. */
          status_message: string | null;
          /** Complete failed task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        }>;
        /** Total response cost in USD reported by DataForSEO. */
        cost: number | null;
        /** Complete DataForSEO response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit one Standard DataForSEO Amazon ASIN task for asynchronous product variant research. */
    "dataforseo.submit_amazon_asins_task": {
      input: {
        /**
         * Amazon Standard Identification Number for the product.
         * @minLength 1
         */
        asin: string;
        /** Task priority: 1 for normal execution or 2 for faster execution at an additional cost. */
        priority?: 1 | 2;
        /**
         * Full name of the Amazon location to target.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO Amazon location code to target. */
        locationCode?: number;
        /**
         * GPS coordinates and radius in the `latitude,longitude,radius` format.
         * @minLength 1
         */
        locationCoordinate?: string;
        /**
         * Full name of the Amazon language to target.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO Amazon language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * Amazon search engine domain, such as `amazon.com`.
         * @minLength 1
         */
        seDomain?: string;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         * @maxLength 255
         */
        tag?: string;
      };
      output: {
        /** Normalized metadata and lifecycle state for one DataForSEO asynchronous task. */
        task: {
          /** DataForSEO task identifier when the task was accepted. */
          id: string | null;
          /** Connector lifecycle state derived from the DataForSEO task status. */
          state: "running" | "succeeded" | "failed";
          /** DataForSEO task status code. */
          status_code: number | null;
          /** DataForSEO task status message. */
          status_message: string | null;
          /** Task execution time reported by DataForSEO. */
          time: string | null;
          /** Task cost in USD reported by DataForSEO. */
          cost: number | null;
          /** Number of result objects returned by the task. */
          result_count: number | null;
          /** Request path components returned for the task. */
          path: Array<string>;
          /** Original task input metadata returned by DataForSEO. */
          data: Record<string, unknown>;
          /** Complete task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        };
        /** Result objects returned by DataForSEO for the task. */
        results: Array<Record<string, unknown>>;
        /** Task errors returned by DataForSEO without discarding task status or cost. */
        errors: Array<{
          /** DataForSEO task error status code. */
          status_code: number | null;
          /** DataForSEO task error status message. */
          status_message: string | null;
          /** Complete failed task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        }>;
        /** Total response cost in USD reported by DataForSEO. */
        cost: number | null;
        /** Complete DataForSEO response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit one Standard DataForSEO Amazon Products task for asynchronous product listing research. */
    "dataforseo.submit_amazon_products_task": {
      input: {
        /**
         * Product keyword to search on Amazon.
         * @minLength 1
         * @maxLength 700
         */
        keyword: string;
        /**
         * Direct Amazon search URL to parse in addition to the required keyword.
         * @format uri
         */
        url?: string;
        /** Task priority: 1 for normal execution or 2 for faster execution at an additional cost. */
        priority?: 1 | 2;
        /**
         * Full name of the Amazon location to target.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO Amazon location code to target. */
        locationCode?: number;
        /**
         * GPS coordinates and radius in the `latitude,longitude,radius` format.
         * @minLength 1
         */
        locationCoordinate?: string;
        /**
         * Full name of the Amazon language to target.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO Amazon language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * Amazon search engine domain, such as `amazon.com`.
         * @minLength 1
         */
        seDomain?: string;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         * @maxLength 255
         */
        tag?: string;
        /**
         * Maximum number of Amazon product results to retrieve.
         * @minimum 1
         * @maximum 700
         */
        depth?: number;
        /**
         * Maximum number of Amazon search result pages to crawl.
         * @minimum 1
         * @maximum 7
         */
        maxCrawlPages?: number;
        /** Amazon product department used to narrow the search. */
        department?: "Arts & Crafts" | "Automotive" | "Baby" | "Beauty & Personal Care" | "Books" | "Computers" | "Digital Music" | "Electronics" | "Kindle Store" | "Prime Video" | "Women's Fashion" | "Men's Fashion" | "Girls' Fashion" | "Boys' Fashion" | "Deals" | "Health & Household" | "Home & Kitchen" | "Industrial & Scientific" | "Luggage" | "Movies & TV" | "Music, CDs & Vinyl" | "Pet Supplies" | "Software" | "Sports & Outdoors" | "Tools & Home Improvement" | "Toys & Games" | "Video Games";
        /**
         * Additional Amazon search URL parameters.
         * @minLength 1
         */
        searchParam?: string;
        /** Minimum product price used to filter Amazon results. */
        priceMin?: number;
        /** Maximum product price used to filter Amazon results. */
        priceMax?: number;
        /** Amazon product result sorting rule. */
        sortBy?: "relevance" | "price_low_to_high" | "price_high_to_low" | "featured" | "avg_customer_review" | "newest_arrival";
      };
      output: {
        /** Normalized metadata and lifecycle state for one DataForSEO asynchronous task. */
        task: {
          /** DataForSEO task identifier when the task was accepted. */
          id: string | null;
          /** Connector lifecycle state derived from the DataForSEO task status. */
          state: "running" | "succeeded" | "failed";
          /** DataForSEO task status code. */
          status_code: number | null;
          /** DataForSEO task status message. */
          status_message: string | null;
          /** Task execution time reported by DataForSEO. */
          time: string | null;
          /** Task cost in USD reported by DataForSEO. */
          cost: number | null;
          /** Number of result objects returned by the task. */
          result_count: number | null;
          /** Request path components returned for the task. */
          path: Array<string>;
          /** Original task input metadata returned by DataForSEO. */
          data: Record<string, unknown>;
          /** Complete task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        };
        /** Result objects returned by DataForSEO for the task. */
        results: Array<Record<string, unknown>>;
        /** Task errors returned by DataForSEO without discarding task status or cost. */
        errors: Array<{
          /** DataForSEO task error status code. */
          status_code: number | null;
          /** DataForSEO task error status message. */
          status_message: string | null;
          /** Complete failed task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        }>;
        /** Total response cost in USD reported by DataForSEO. */
        cost: number | null;
        /** Complete DataForSEO response envelope. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit one Standard DataForSEO Amazon Sellers task for asynchronous offer and seller research. */
    "dataforseo.submit_amazon_sellers_task": {
      input: {
        /**
         * Amazon Standard Identification Number for the product.
         * @minLength 1
         */
        asin: string;
        /** Task priority: 1 for normal execution or 2 for faster execution at an additional cost. */
        priority?: 1 | 2;
        /**
         * Full name of the Amazon location to target.
         * @minLength 1
         */
        locationName?: string;
        /** Numeric DataForSEO Amazon location code to target. */
        locationCode?: number;
        /**
         * GPS coordinates and radius in the `latitude,longitude,radius` format.
         * @minLength 1
         */
        locationCoordinate?: string;
        /**
         * Full name of the Amazon language to target.
         * @minLength 1
         */
        languageName?: string;
        /**
         * DataForSEO Amazon language code to target.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * Amazon search engine domain, such as `amazon.com`.
         * @minLength 1
         */
        seDomain?: string;
        /**
         * User-defined task tag passed through to DataForSEO.
         * @minLength 1
         * @maxLength 255
         */
        tag?: string;
      };
      output: {
        /** Normalized metadata and lifecycle state for one DataForSEO asynchronous task. */
        task: {
          /** DataForSEO task identifier when the task was accepted. */
          id: string | null;
          /** Connector lifecycle state derived from the DataForSEO task status. */
          state: "running" | "succeeded" | "failed";
          /** DataForSEO task status code. */
          status_code: number | null;
          /** DataForSEO task status message. */
          status_message: string | null;
          /** Task execution time reported by DataForSEO. */
          time: string | null;
          /** Task cost in USD reported by DataForSEO. */
          cost: number | null;
          /** Number of result objects returned by the task. */
          result_count: number | null;
          /** Request path components returned for the task. */
          path: Array<string>;
          /** Original task input metadata returned by DataForSEO. */
          data: Record<string, unknown>;
          /** Complete task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        };
        /** Result objects returned by DataForSEO for the task. */
        results: Array<Record<string, unknown>>;
        /** Task errors returned by DataForSEO without discarding task status or cost. */
        errors: Array<{
          /** DataForSEO task error status code. */
          status_code: number | null;
          /** DataForSEO task error status message. */
          status_message: string | null;
          /** Complete failed task object returned by DataForSEO. */
          raw: Record<string, unknown>;
        }>;
        /** Total response cost in USD reported by DataForSEO. */
        cost: number | null;
        /** Complete DataForSEO response envelope. */
        raw: Record<string, unknown>;
      };
    };
  }
}
