import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Aggregate LLM mention metrics by dimension. */
    "unifapi.aggregate_geo_mentions": {
      input: {
        /**
         * Up to 10 target entities, each a domain or a keyword.
         * @minItems 1
         * @maxItems 10
         */
        target: Array<{
          /**
           * Target domain (no protocol/www). Provide domain or keyword.
           * @minLength 1
           * @maxLength 63
           */
          domain?: string;
          /**
           * Target keyword. Provide domain or keyword.
           * @minLength 1
           * @maxLength 2000
           */
          keyword?: string;
          /** Whether to include or exclude matches for this entity. Defaults to include. */
          filter?: "include" | "exclude";
          /** Where to look. Domain scopes: any, sources, search_results. Keyword scopes: any, question, answer, brand_entities, fan_out_queries. */
          scope?: Array<string>;
          /** Keyword match type. word = full-term match; partial = substring. Defaults to word. */
          match?: "word" | "partial";
          /** Include subdomains of the target domain. Defaults to false. */
          include_subdomains?: boolean;
          [key: string]: unknown;
        }>;
        /** The engine value. */
        engine?: ("chatgpt" | "google") & (unknown);
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** Filter the raw mentions dataset before it is aggregated. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: ai_search_volume (monthly AI search volume); mentions (number of mentions); platform (LLM engine, e.g. chat_gpt, google); location (location name); language (language name); sources_domain (cited source domain); search_results_domain (domain in the engine's search results); brand_entities_title (brand entity title); brand_entities_category (brand entity category). Example: {"field":"ai_search_volume","op":">","value":1000} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Max elements per internal grouped array (source/search-result domains). Default 10.
         * @minimum 1
         * @maximum 20
         */
        internal_list_limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Batch-fetch TikTok videos by ID. */
    "unifapi.batch_get_tiktok_videos": {
      input: {
        /**
         * Up to 20 numeric TikTok video ids
         * @minItems 1
         * @maxItems 20
         */
        ids: Array<string>;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Browse Instagram's Explore feed. */
    "unifapi.browse_instagram_explore": {
      input: {
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Browse Instagram's recommended Reels feed. */
    "unifapi.browse_instagram_recommended_reels": {
      input: {
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Browse Reddit's anonymous home feed. */
    "unifapi.browse_reddit_feed_home": {
      input: {
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Browse Reddit's news feed. */
    "unifapi.browse_reddit_feed_news": {
      input: {
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Browse Reddit's popular feed. */
    "unifapi.browse_reddit_feed_popular": {
      input: {
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Browse YouTube's trending videos. */
    "unifapi.browse_youtube_trending": {
      input: {
        /**
         * Optional ISO 3166 country code, e.g. `US` (default), `GB`.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /** Optional trending section (default `now`). */
        type?: "now" | "music" | "gaming" | "movies";
        /** Optional language code, e.g. `en`. */
        language_code?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Capture a page screenshot. */
    "unifapi.capture_screenshot": {
      input: {
        /**
         * Absolute http(s) URL of the page to render.
         * @minLength 1
         */
        url: string;
        /** When navigation is considered complete. `networkidle0` waits for the network to go idle (best for JavaScript-heavy pages); `load` is fastest. */
        wait_until?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
        /**
         * Navigation timeout in milliseconds (1000-60000).
         * @minimum 1000
         * @maximum 60000
         */
        timeout_ms?: number;
        /** Browser viewport. Defaults to a standard desktop size. */
        viewport?: {
          /**
           * Viewport width in CSS pixels.
           * @minimum 1
           * @maximum 3840
           */
          width: number;
          /**
           * Viewport height in CSS pixels.
           * @minimum 1
           * @maximum 3840
           */
          height: number;
          [key: string]: unknown;
        };
        /** Capture the full scrollable page instead of just the viewport. */
        full_page?: boolean;
        /**
         * Output image format.
         * @default "png"
         */
        format?: "png" | "jpeg" | "webp";
        /**
         * Compression quality (0-100). Only valid for `jpeg` and `webp`.
         * @minimum 0
         * @maximum 100
         */
        quality?: number;
        /** Capture only the first element matching this CSS selector. */
        selector?: string;
        /** Render a transparent background (ignored for `jpeg`). */
        omit_background?: boolean;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Check whether one X user follows another. */
    "unifapi.check_x_friendship": {
      input: {
        /** The source_id value. */
        source_id?: string;
        /** The target_id value. */
        target_id?: string;
        /** The source_screen_name value. */
        source_screen_name?: string;
        /** The target_screen_name value. */
        target_screen_name?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Classify keyword search intent. */
    "unifapi.classify_seo_keyword_intent": {
      input: {
        /**
         * Keywords to classify (1-1000). Returns the search intent for each.
         * @minItems 1
         * @maxItems 1000
         */
        keywords: Array<string>;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Collect autocomplete keyword suggestions. */
    "unifapi.collect_seo_keyword_autocomplete": {
      input: {
        /**
         * Seed query typed into Google search. Returns the autocomplete suggestions Google offers.
         * @minLength 1
         * @maxLength 700
         */
        keyword: string;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Cursor position within the keyword. Defaults to the end of the keyword, matching how Google expands suggestions as you type.
         * @minimum 0
         * @maximum 700
         */
        cursor_pointer?: number;
        /**
         * Autocomplete client to emulate, such as chrome or gws-wiz. Different clients can return different suggestion sets.
         * @minLength 1
         * @maxLength 80
         */
        client?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Collect organic SERP SEO evidence. */
    "unifapi.collect_seo_serp": {
      input: {
        /**
         * Search query to inspect.
         * @minLength 1
         * @maxLength 700
         */
        query: string;
        /**
         * Optional domain or URL to mark in the results, such as example.com or https://example.com/page.
         * @minLength 1
         */
        target?: string;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** SERP device type. Defaults to desktop. */
        device?: "desktop" | "mobile";
        /** The os value. */
        os?: ("windows" | "macos" | "android" | "ios") & (unknown);
        /**
         * 1-based Google result page to start from. Defaults to 1. Implemented with Google's start parameter and ranks are adjusted to global SERP positions.
         * @minimum 1
         * @maximum 20
         */
        page?: number;
        /**
         * Organic result depth to crawl from the requested page. Defaults to 10. DataForSEO bills source in 10-result pages; UnifAPI bills returned billable organic records.
         * @minimum 1
         * @maximum 200
         */
        depth?: number;
        /**
         * Number of organic results to return, matching the limit parameter used across other UnifAPI endpoints. Maps to DataForSEO depth and is used only when depth is omitted; defaults to 10.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
        /** When true, ask DataForSEO to load asynchronous Google AI Overview blocks in the organic SERP when available. This can add source cost. */
        include_ai_overview?: boolean;
        /**
         * Optional click depth for People Also Ask expansion. Useful for SEO content-gap research and can add source cost.
         * @minimum 1
         * @maximum 4
         */
        people_also_ask_depth?: number;
        /** When true, request pixel rectangle data for above-the-fold and visual rank analysis. This can add source cost. */
        include_pixel_rankings?: boolean;
        /** Viewport settings used only with include_pixel_rankings. */
        viewport?: {
          /**
           * Browser viewport width for pixel ranking calculations.
           * @minimum 240
           * @maximum 9999
           */
          width?: number;
          /**
           * Browser viewport height for pixel ranking calculations.
           * @minimum 240
           * @maximum 9999
           */
          height?: number;
          /**
           * Browser device pixel ratio for pixel ranking calculations.
           * @minimum 0.5
           * @maximum 3
           */
          pixel_ratio?: number;
          [key: string]: unknown;
        };
        /**
         * Optional Google domain override such as google.co.uk or google.de.
         * @minLength 4
         * @maxLength 80
         */
        google_domain?: string;
        /**
         * Advanced Google search URL parameters such as nfpr=1. Prefer typed fields like page and include_omitted_results when available.
         * @minLength 1
         * @maxLength 500
         */
        google_search_params?: string;
        /** When true, adds filter=0 to inspect Google results that may otherwise be omitted. Useful for deep rank checks. */
        include_omitted_results?: boolean;
        /**
         * URL query parameters to remove from result URLs before matching, such as srsltid.
         * @maxItems 10
         */
        remove_url_params?: Array<string>;
        /** When true, return related/sitelink-style organic results as separate organic elements instead of nesting them. */
        expand_related_results?: boolean;
        /** When true and target is provided, stop crawling once the target is found. Useful for cheaper deep-rank checks, but later competitors may be omitted. */
        stop_at_target?: boolean;
        /** How stop_at_target should match the target. Defaults to with_subdomains. */
        target_match?: "domain" | "with_subdomains" | "wildcard";
        /** When stop_at_target is true and multiple targets are used source, controls whether any or all targets stop the crawl. Defaults to any. */
        target_search_mode?: "any" | "all";
        /**
         * SERP element types to inspect for stop_at_target matches. Defaults to all first-level URL/domain elements.
         * @maxItems 8
         */
        target_element_types?: Array<"organic" | "paid" | "local_pack" | "featured_snippet" | "events" | "google_flights" | "images" | "jobs" | "knowledge_graph" | "local_service" | "map" | "scholarly_articles" | "third_party_reviews" | "twitter">;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Compare LLM mentions across labeled groups. */
    "unifapi.compare_geo_mention_groups": {
      input: {
        /**
         * Labeled target groups to compare against each other.
         * @minItems 1
         * @maxItems 10
         */
        groups: Array<{
          /**
           * Aggregation label that groups and identifies this target set in the response.
           * @minLength 1
           * @maxLength 250
           */
          label: string;
          /**
           * Up to 10 target entities, each a domain or a keyword.
           * @minItems 1
           * @maxItems 10
           */
          target: Array<{
            /**
             * Target domain (no protocol/www). Provide domain or keyword.
             * @minLength 1
             * @maxLength 63
             */
            domain?: string;
            /**
             * Target keyword. Provide domain or keyword.
             * @minLength 1
             * @maxLength 2000
             */
            keyword?: string;
            /** Whether to include or exclude matches for this entity. Defaults to include. */
            filter?: "include" | "exclude";
            /** Where to look. Domain scopes: any, sources, search_results. Keyword scopes: any, question, answer, brand_entities, fan_out_queries. */
            scope?: Array<string>;
            /** Keyword match type. word = full-term match; partial = substring. Defaults to word. */
            match?: "word" | "partial";
            /** Include subdomains of the target domain. Defaults to false. */
            include_subdomains?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The engine value. */
        engine?: ("chatgpt" | "google") & (unknown);
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** Filter the raw mentions dataset before it is aggregated. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: ai_search_volume (monthly AI search volume); mentions (number of mentions); platform (LLM engine, e.g. chat_gpt, google); location (location name); language (language name); sources_domain (cited source domain); search_results_domain (domain in the engine's search results); brand_entities_title (brand entity title); brand_entities_category (brand entity category). Example: {"field":"ai_search_volume","op":">","value":1000} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Max elements per internal grouped array. Default 5.
         * @minimum 1
         * @maximum 10
         */
        internal_list_limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Convert an Instagram post shortcode into its numeric media_id. */
    "unifapi.convert_instagram_media_id": {
      input: {
        /**
         * The shortcode value.
         * @minLength 1
         */
        shortcode: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Convert an Instagram numeric media_id into its shortcode. */
    "unifapi.convert_instagram_shortcode_from_media": {
      input: {
        /**
         * The media_id value.
         * @minLength 1
         */
        media_id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Convert an Instagram username into its numeric user_id (pk). */
    "unifapi.convert_instagram_user_id": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Count backlinks for many targets. */
    "unifapi.count_seo_bulk_backlinks": {
      input: {
        /**
         * Domains, subdomains, or pages to analyze (up to 1000). Domains/subdomains without https:// and www.; pages as absolute URLs.
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Count new and lost backlinks for many targets. */
    "unifapi.count_seo_bulk_new_lost_backlinks": {
      input: {
        /**
         * Domains, subdomains, or pages to analyze (up to 1000). Domains/subdomains without https:// and www.; pages as absolute URLs.
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
        /** Start date (yyyy-mm-dd) for counting new and lost backlinks. Minimum 2019-01-30; defaults to one month ago. */
        date_from?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Count new and lost referring domains for many targets. */
    "unifapi.count_seo_bulk_new_lost_referring_domains": {
      input: {
        /**
         * Domains, subdomains, or pages to analyze (up to 1000). Domains/subdomains without https:// and www.; pages as absolute URLs.
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
        /** Start date (yyyy-mm-dd) for counting new and lost referring domains. Minimum 2019-01-30; defaults to one month ago. */
        date_from?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Count referring domains for many targets. */
    "unifapi.count_seo_bulk_referring_domains": {
      input: {
        /**
         * Domains, subdomains, or pages to analyze (up to 1000). Domains/subdomains without https:// and www.; pages as absolute URLs.
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Discover keyword ideas. */
    "unifapi.discover_seo_keyword_ideas": {
      input: {
        /**
         * Seed keywords (1-200). Returns search terms relevant to the product or service categories of these keywords.
         * @minItems 1
         * @maxItems 200
         */
        keywords: Array<string>;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Maximum number of keyword ideas to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of keyword ideas to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Pagination token from a previous response. When set, all other params except limit are ignored.
         * @minLength 1
         * @maxLength 2000
         */
        offset_token?: string;
        /** When true, use phrase-match search; when false (default), use broad-match search for wider ideas. */
        closely_variants?: boolean;
        /** When true, exclude highly similar keywords and return only core keywords. */
        ignore_synonyms?: boolean;
        /** When true, include SERP data (result count and SERP feature types) for each keyword. Can add source cost. */
        include_serp_info?: boolean;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Estimate organic traffic for domains. */
    "unifapi.estimate_seo_bulk_traffic": {
      input: {
        /**
         * Domains to estimate traffic for (1-1000).
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Estimate historical traffic for domains. */
    "unifapi.estimate_seo_historical_bulk_traffic": {
      input: {
        /**
         * Domains to estimate historical traffic for (1-1000).
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Start of the history window. Date in yyyy-mm-dd format. Minimum date: 2019-01-01.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        date_from?: string;
        /**
         * End of the history window. Date in yyyy-mm-dd format. Minimum date: 2019-01-01.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        date_to?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Extract a post shortcode from an Instagram URL. */
    "unifapi.extract_instagram_shortcode": {
      input: {
        /**
         * The url value.
         * @format uri
         */
        url: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Extract links from a page. */
    "unifapi.extract_links": {
      input: {
        /**
         * Absolute http(s) URL of the page to render.
         * @minLength 1
         */
        url: string;
        /** When navigation is considered complete. `networkidle0` waits for the network to go idle (best for JavaScript-heavy pages); `load` is fastest. */
        wait_until?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
        /**
         * Navigation timeout in milliseconds (1000-60000).
         * @minimum 1000
         * @maximum 60000
         */
        timeout_ms?: number;
        /** Only return links visible in the rendered viewport. */
        visible_links_only?: boolean;
        /** Drop links that point to a different domain than the page. */
        exclude_external_links?: boolean;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find competitors by shared referring domains. */
    "unifapi.find_seo_backlink_competitors": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Treat the target and competitors as root domains rather than exact subdomains. */
        main_domain?: boolean;
        /** Exclude very large generic domains (e.g. youtube.com, facebook.com) from results. */
        exclude_large_domains?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** Filter the returned competitors. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: rank (backlink rank of the competing domain, 0-1000); intersections (referring domains shared with the target). Example: {"field":"intersections","op":">","value":20} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the returned competitors. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: rank, intersections.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of records to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find domains linking to multiple targets. */
    "unifapi.find_seo_backlink_domain_intersection": {
      input: {
        /**
         * Domains, subdomains, or pages to find common referring domains for (1-20). Order is preserved as the 1-based index in the response.
         * @minItems 1
         * @maxItems 20
         */
        targets: Array<string>;
        /**
         * Domains, subdomains, or pages to exclude (up to 10). Domains linking to these are dropped.
         * @maxItems 10
         */
        exclude_targets?: Array<string>;
        /** all (default) returns domains linking to any target; partial returns only domains linking to every target. */
        intersection_mode?: "all" | "partial";
        /** Which backlinks to count: live (found on the last check, default), all, or lost. */
        backlinks_status_type?: "live" | "all" | "lost";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Include indirect links (via redirects or canonicals) to the target. Defaults to true. */
        include_indirect_links?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /**
         * Maximum number of entries kept in each referring_links_* breakdown map. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        internal_list_limit?: number;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** Filter the intersecting domains. Prefix each metric field with the 1-based target index, e.g. 1.rank, 2.referring_domains. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: rank (backlink rank, 0-1000); backlinks (number of backlinks); backlinks_spam_score (average spam score, 0-100); referring_domains (referring domains count); referring_main_domains (referring root domains count); referring_pages (referring pages count); referring_ips (referring IPs count); referring_subnets (referring subnets count); broken_backlinks (backlinks to broken pages); broken_pages (broken pages still receiving backlinks); first_seen (ISO date the first backlink was found); lost_date (ISO date the last backlink was lost). Example: {"and":[{"field":"1.rank","op":">","value":300},{"field":"2.rank","op":">","value":300}]} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /** Filter the underlying individual backlinks before the aggregate metrics are computed. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: dofollow (boolean, link is dofollow); is_new (boolean, appeared since the last check); is_lost (boolean, lost since the last check); is_broken (boolean, points to a broken page); rank (referring page rank, 0-1000); page_from_rank (referring page rank, 0-1000); domain_from_rank (referring domain rank, 0-1000); backlink_spam_score (spam score of the referring page, 0-100); item_type (anchor, image, link, redirect, or canonical); anchor (anchor text); tld_from (top-level domain of the referring page); semantic_location (link location, e.g. article, footer); first_seen (ISO date the backlink was first seen); last_seen (ISO date the backlink was last seen). Example: {"and":[{"field":"dofollow","op":"=","value":true},{"field":"backlink_spam_score","op":"<","value":10}]} */
        backlinks_filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the intersecting domains. Prefix each field with the 1-based target index, e.g. 1.rank. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: rank, backlinks, backlinks_spam_score, referring_domains, referring_main_domains, referring_pages, referring_ips, referring_subnets, broken_backlinks, broken_pages, first_seen, lost_date.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of records to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find pages linking to multiple targets. */
    "unifapi.find_seo_backlink_page_intersection": {
      input: {
        /**
         * Domains, subdomains, or pages to find common referring pages for (1-20). Order is preserved as the 1-based index in the response.
         * @minItems 1
         * @maxItems 20
         */
        targets: Array<string>;
        /**
         * Domains, subdomains, or pages to exclude (up to 10). Pages linking to these are dropped.
         * @maxItems 10
         */
        exclude_targets?: Array<string>;
        /** all (default) returns pages linking to any target; partial returns only pages linking to every target. */
        intersection_mode?: "all" | "partial";
        /** Which backlinks to count: live (found on the last check, default), all, or lost. */
        backlinks_status_type?: "live" | "all" | "lost";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Include indirect links (via redirects or canonicals) to the target. Defaults to true. */
        include_indirect_links?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /**
         * Maximum number of entries kept in each referring_links_* breakdown map. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        internal_list_limit?: number;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** Filter the intersecting referring pages. Prefix each backlink field with the 1-based target index, e.g. 1.dofollow, 2.rank. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: dofollow (boolean, link is dofollow); is_new (boolean, appeared since the last check); is_lost (boolean, lost since the last check); is_broken (boolean, points to a broken page); rank (referring page rank, 0-1000); page_from_rank (referring page rank, 0-1000); domain_from_rank (referring domain rank, 0-1000); backlink_spam_score (spam score of the referring page, 0-100); item_type (anchor, image, link, redirect, or canonical); anchor (anchor text); tld_from (top-level domain of the referring page); semantic_location (link location, e.g. article, footer); first_seen (ISO date the backlink was first seen); last_seen (ISO date the backlink was last seen). Example: {"field":"1.dofollow","op":"=","value":true} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the intersecting referring pages. Prefix each field with the 1-based target index, e.g. 1.rank. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: dofollow, is_new, is_lost, is_broken, rank, page_from_rank, domain_from_rank, backlink_spam_score, item_type, anchor, tld_from, semantic_location, first_seen, last_seen.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of records to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find a domain's organic competitors. */
    "unifapi.find_seo_domain_competitors": {
      input: {
        /**
         * Target domain, such as example.com or https://example.com. Specified without www.
         * @minLength 1
         * @maxLength 253
         */
        target: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** When true, exclude the largest global domains (e.g. wikipedia, amazon) from results. */
        exclude_top_domains?: boolean;
        /**
         * Restrict results to competitors that also share keywords with these domains.
         * @maxItems 20
         */
        intersecting_domains?: Array<string>;
        /**
         * Maximum number of competing domains to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of domains to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find keywords two domains both rank for. */
    "unifapi.find_seo_domain_keyword_intersection": {
      input: {
        /**
         * First domain, such as example.com.
         * @minLength 1
         * @maxLength 253
         */
        target1: string;
        /**
         * Second domain to compare against.
         * @minLength 1
         * @maxLength 253
         */
        target2: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** When true (default), return keywords both domains rank for. When false, return keywords the first domain ranks for but the second does not. */
        intersections?: boolean;
        /**
         * Maximum number of keywords to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of keywords to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find keyword suggestions. */
    "unifapi.find_seo_keyword_suggestions": {
      input: {
        /**
         * Seed keyword. Returns long-tail search queries that include this keyword.
         * @minLength 1
         * @maxLength 80
         */
        keyword: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Maximum number of keyword suggestions to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of keyword suggestions to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Pagination token from a previous response. When set, all other params except limit are ignored.
         * @minLength 1
         * @maxLength 2000
         */
        offset_token?: string;
        /** When true, return only suggestions that contain the exact seed keyword in the same word order. */
        exact_match?: boolean;
        /** When true, exclude highly similar keywords and return only core keywords. */
        ignore_synonyms?: boolean;
        /** When true, include SERP data (result count and SERP feature types) for each keyword. Can add source cost. */
        include_serp_info?: boolean;
        /** When true, include metrics for the seed keyword in the response. */
        include_seed_keyword?: boolean;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find keywords specific pages rank for. */
    "unifapi.find_seo_page_keyword_intersection": {
      input: {
        /**
         * Absolute page URLs to compare (1-20). A trailing /* wildcard matches a page and its sub-paths.
         * @minItems 1
         * @maxItems 20
         */
        pages: Array<string>;
        /**
         * Page URLs to exclude (up to 10). Keywords where these rank are dropped.
         * @maxItems 10
         */
        exclude_pages?: Array<string>;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** union (default) returns keywords any page ranks for; intersect returns only keywords all pages rank for in the same SERP. */
        intersection_mode?: "union" | "intersect";
        /**
         * Maximum number of keywords to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of keywords to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find the keywords a domain ranks for. */
    "unifapi.find_seo_ranked_keywords": {
      input: {
        /**
         * Target domain, such as example.com or https://example.com. Specified without www. A page URL can also be passed to get only that page's rankings.
         * @minLength 1
         * @maxLength 253
         */
        target: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Maximum number of ranked keywords to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of keywords to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** When true, exclude highly similar keyword variations from the results. */
        ignore_synonyms?: boolean;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find related keywords. */
    "unifapi.find_seo_related_keywords": {
      input: {
        /**
         * Seed keyword. Returns keywords from Google's 'searches related to' element.
         * @minLength 1
         * @maxLength 80
         */
        keyword: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Keyword search depth, 0-4. Higher depth returns more keywords (1about 8, 2about 72, 3about 584, 4about 4680). Defaults to 1.
         * @minimum 0
         * @maximum 4
         */
        depth?: number;
        /**
         * Maximum number of related keywords to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of related keywords to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** When true, exclude highly similar keywords and return only core keywords. */
        ignore_synonyms?: boolean;
        /** When true, include SERP data (result count and SERP feature types) for each keyword. Can add source cost. */
        include_serp_info?: boolean;
        /** When true, include metrics for the seed keyword in the response. */
        include_seed_keyword?: boolean;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find domains competing for keywords. */
    "unifapi.find_seo_serp_competitors": {
      input: {
        /**
         * Seed keywords (1-200). Returns the domains that rank for them.
         * @minItems 1
         * @maxItems 200
         */
        keywords: Array<string>;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** When true (default), count subdomain rankings toward each domain. */
        include_subdomains?: boolean;
        /**
         * Maximum number of competing domains to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of domains to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find keywords a domain ranks for. */
    "unifapi.find_seo_site_keywords": {
      input: {
        /**
         * Target domain, such as example.com or https://example.com. Returns keywords the domain is relevant for.
         * @minLength 1
         * @maxLength 253
         */
        target: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Maximum number of keywords to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of keywords to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Pagination token from a previous response. When set, all other params except limit are ignored.
         * @minLength 1
         * @maxLength 2000
         */
        offset_token?: string;
        /** When true (default), include keywords from subdomains of the target. */
        include_subdomains?: boolean;
        /** When true, include SERP data (result count and SERP feature types) for each keyword. Can add source cost. */
        include_serp_info?: boolean;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get AI search volume for keywords. */
    "unifapi.get_geo_keyword_search_volume": {
      input: {
        /**
         * Keywords to look up AI search volume for. Up to 1000 keywords, 250 chars each.
         * @minItems 1
         * @maxItems 1000
         */
        keywords: Array<string>;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Hacker News item by ID. */
    "unifapi.get_hacker_news_item": {
      input: {
        /**
         * Hacker News item id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get largest Hacker News item ID. */
    "unifapi.get_hacker_news_max_item": {
      input: Record<string, never>;
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get changed Hacker News items and profiles. */
    "unifapi.get_hacker_news_updates": {
      input: Record<string, never>;
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Hacker News user by ID. */
    "unifapi.get_hacker_news_user": {
      input: {
        /**
         * Case-sensitive Hacker News username.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Hotels detail. */
    "unifapi.get_hotel_info": {
      input: {
        /**
         * Unique hotel id returned by /hotels/search.
         * @minLength 1
         * @maxLength 400
         */
        hotel_identifier: string;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Check-in date. Date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        check_in?: string;
        /**
         * Check-out date. Date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        check_out?: string;
        /**
         * ISO 4217 currency code for prices, such as USD.
         * @minLength 3
         * @maxLength 3
         */
        currency?: string;
        /**
         * Number of adult guests.
         * @minimum 1
         * @maximum 30
         */
        adults?: number;
        /**
         * Ages of children staying, used to refine availability and pricing.
         * @maxItems 10
         */
        children?: Array<number>;
        /** When true, return a daily price calendar across the requested date range instead of a single stay price. */
        load_prices_by_dates?: boolean;
        /**
         * Start date for the daily price calendar. Date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        prices_start_date?: string;
        /**
         * End date for the daily price calendar. Date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        prices_end_date?: string;
        /**
         * Predefined period for the daily price calendar, such as next_30_days.
         * @minLength 1
         * @maxLength 40
         */
        prices_date_range?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get an Instagram location by id. */
    "unifapi.get_instagram_location": {
      input: {
        /**
         * Numeric Instagram location id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get an Instagram post (photo / video / carousel / reel) by shortcode. */
    "unifapi.get_instagram_post": {
      input: {
        /**
         * The shortcode value.
         * @minLength 1
         */
        shortcode: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get an Instagram user profile by username. */
    "unifapi.get_instagram_user": {
      input: {
        /**
         * Instagram URL slug, e.g. `instagram`
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn Ad Library entry by ID. */
    "unifapi.get_linkedin_ad": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn company profile by URL slug. */
    "unifapi.get_linkedin_company": {
      input: {
        /**
         * LinkedIn URL slug (universal_name), e.g. `microsoft`
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the number of active jobs at a LinkedIn company. */
    "unifapi.get_linkedin_company_job_count": {
      input: {
        /**
         * The slug value.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn company's aggregated member insights. */
    "unifapi.get_linkedin_company_member_insights": {
      input: {
        /**
         * The slug value.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn group by ID. */
    "unifapi.get_linkedin_group": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn job posting by ID. */
    "unifapi.get_linkedin_job": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
        /** The include_skills value. */
        include_skills?: "true" | "false";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn post by ID. */
    "unifapi.get_linkedin_post": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn user profile by URL slug. */
    "unifapi.get_linkedin_user": {
      input: {
        /**
         * LinkedIn URL slug, e.g. `williamhgates`
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn profile's 'about' metadata. */
    "unifapi.get_linkedin_user_about": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn user's public contact info. */
    "unifapi.get_linkedin_user_contact": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a LinkedIn user's follower & connection counts. */
    "unifapi.get_linkedin_user_follower_count": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a Reddit post by id. */
    "unifapi.get_reddit_post": {
      input: {
        /**
         * Reddit post fullname, e.g. `t3_1thjm1o`.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a Reddit subreddit by name. */
    "unifapi.get_reddit_subreddit": {
      input: {
        /**
         * Subreddit slug without `r/`, e.g. `pics`.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a Reddit user profile by username. */
    "unifapi.get_reddit_user": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get historical backlink metrics for a target. */
    "unifapi.get_seo_backlink_history": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Start date (yyyy-mm-dd) for the history. Minimum 2019-01-30; defaults to one year ago. */
        date_from?: string;
        /** End date (yyyy-mm-dd). Defaults to today. */
        date_to?: string;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the backlink profile summary for a target. */
    "unifapi.get_seo_backlink_summary": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Which backlinks to count: live (found on the last check, default), all, or lost. */
        backlinks_status_type?: "live" | "all" | "lost";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Include indirect links (via redirects or canonicals) to the target. Defaults to true. */
        include_indirect_links?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /**
         * Maximum number of entries kept in each referring_links_* breakdown map. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        internal_list_limit?: number;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get backlink metrics over time. */
    "unifapi.get_seo_backlink_timeseries": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Start date (yyyy-mm-dd) for the series. Minimum 2019-01-30; defaults to one month ago. */
        date_from?: string;
        /** End date (yyyy-mm-dd). Defaults to today. */
        date_to?: string;
        /** Granularity used to group the series. Defaults to month. */
        group_range?: "day" | "week" | "month" | "year";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get backlink ranks for many targets. */
    "unifapi.get_seo_bulk_backlink_ranks": {
      input: {
        /**
         * Domains, subdomains, or pages to analyze (up to 1000). Domains/subdomains without https:// and www.; pages as absolute URLs.
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get spam scores for many targets. */
    "unifapi.get_seo_bulk_spam_scores": {
      input: {
        /**
         * Domains, subdomains, or pages to analyze (up to 1000). Domains/subdomains without https:// and www.; pages as absolute URLs.
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a domain's ranking and traffic overview. */
    "unifapi.get_seo_domain_rank_overview": {
      input: {
        /**
         * Target domain, such as example.com or https://example.com. Specified without www.
         * @minLength 1
         * @maxLength 253
         */
        target: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a domain's historical ranking overview. */
    "unifapi.get_seo_historical_rank_overview": {
      input: {
        /**
         * Target domain, such as example.com or https://example.com. Specified without www.
         * @minLength 1
         * @maxLength 253
         */
        target: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Start of the history window. Date in yyyy-mm-dd format. Minimum date: 2019-01-01.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        date_from?: string;
        /**
         * End of the history window. Date in yyyy-mm-dd format. Minimum date: 2019-01-01.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        date_to?: string;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get historical SERP snapshots for a keyword. */
    "unifapi.get_seo_historical_serps": {
      input: {
        /**
         * Keyword to retrieve historical SERP snapshots for.
         * @minLength 1
         * @maxLength 700
         */
        keyword: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Start of the history window. Date in yyyy-mm-dd format. Minimum date: 2019-01-01.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        date_from?: string;
        /**
         * End of the history window. Date in yyyy-mm-dd format. Minimum date: 2019-01-01.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        date_to?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get historical keyword data. */
    "unifapi.get_seo_keyword_history": {
      input: {
        /**
         * Keywords to look up (1-700). Returns historical metrics since 2019 for each.
         * @minItems 1
         * @maxItems 700
         */
        keywords: Array<string>;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Look up keyword metrics. */
    "unifapi.get_seo_keyword_overview": {
      input: {
        /**
         * Keywords to look up (1-700). Returns current metrics for each keyword.
         * @minItems 1
         * @maxItems 700
         */
        keywords: Array<string>;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** When true, include SERP data (result count and SERP feature types) for each keyword. Can add source cost. */
        include_serp_info?: boolean;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get new and lost backlinks over time. */
    "unifapi.get_seo_new_lost_backlinks_timeseries": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Start date (yyyy-mm-dd) for the series. Minimum 2019-01-30; defaults to one month ago. */
        date_from?: string;
        /** End date (yyyy-mm-dd). Defaults to today. */
        date_to?: string;
        /** Granularity used to group the series. Defaults to month. */
        group_range?: "day" | "week" | "month" | "year";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a Threads user profile by username. */
    "unifapi.get_threads_user": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a TikTok hashtag by ID. */
    "unifapi.get_tiktok_hashtag": {
      input: {
        /**
         * The id value.
         * @pattern ^\d+$
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a TikTok music track by ID. */
    "unifapi.get_tiktok_music": {
      input: {
        /**
         * The id value.
         * @pattern ^\d+$
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get TikTok recommendation videos. */
    "unifapi.get_tiktok_recommended_feed": {
      input: {
        /** The cookie value. */
        cookie?: string;
        /**
         * The region value.
         * @minLength 2
         * @maxLength 2
         * @default "US"
         */
        region?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a TikTok user profile. */
    "unifapi.get_tiktok_user": {
      input: {
        /**
         * TikTok sec_uid, numeric user id, or public handle.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a TikTok video by ID. */
    "unifapi.get_tiktok_video": {
      input: {
        /**
         * The id value.
         * @pattern ^\d+$
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Autocomplete X users, topics, hashtags, and cashtags. */
    "unifapi.get_x_autocomplete": {
      input: {
        /**
         * The query value.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get X Community by ID. */
    "unifapi.get_x_community": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The community.fields value. */
        "community.fields"?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get an X Community about timeline. */
    "unifapi.get_x_community_about": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get X trends by WOEID. */
    "unifapi.get_x_trends_by_woeid": {
      input: {
        /**
         * The woeid value.
         * @pattern ^\d+$
         */
        woeid: string;
        /**
         * The max_trends value.
         * @minimum 1
         * @maximum 50
         */
        max_trends?: number;
        /** The trend.fields value. */
        "trend.fields"?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get X Post by ID. */
    "unifapi.get_x_tweet": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the article-style payload for an X Post. */
    "unifapi.get_x_tweet_article": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get X Posts by IDs. */
    "unifapi.get_x_tweets": {
      input: {
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /**
         * Comma-separated resource ids.
         * @minLength 1
         */
        ids: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get X user by ID. */
    "unifapi.get_x_user": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get X user by username. */
    "unifapi.get_x_user_by_username": {
      input: {
        /**
         * X handle without the leading `@`.
         * @minLength 1
         */
        username: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get X users by IDs. */
    "unifapi.get_x_users": {
      input: {
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /**
         * Comma-separated resource ids.
         * @minLength 1
         */
        ids: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get X users by usernames. */
    "unifapi.get_x_users_by_usernames": {
      input: {
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /**
         * Comma-separated usernames.
         * @minLength 1
         */
        usernames: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a YouTube channel by id. */
    "unifapi.get_youtube_channel": {
      input: {
        /**
         * YouTube channel id (`UCxxx...`).
         * @minLength 1
         */
        channel_id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a YouTube playlist by id. */
    "unifapi.get_youtube_playlist": {
      input: {
        /**
         * YouTube playlist id (`PL...`).
         * @minLength 1
         */
        playlist_id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a YouTube video by id. */
    "unifapi.get_youtube_video": {
      input: {
        /**
         * YouTube video id, e.g. `oaSNBz4qMQY`.
         * @minLength 1
         */
        video_id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a YouTube video's transcript. */
    "unifapi.get_youtube_video_transcript": {
      input: {
        /**
         * The video_id value.
         * @minLength 1
         */
        video_id: string;
        /**
         * Caption language code to transcribe, e.g. `en` or `es`. Defaults to English.
         * @minLength 2
         * @maxLength 35
         */
        lang?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List domains most cited in LLM answers. */
    "unifapi.list_geo_top_mentioned_domains": {
      input: {
        /**
         * Up to 10 target entities, each a domain or a keyword.
         * @minItems 1
         * @maxItems 10
         */
        target: Array<{
          /**
           * Target domain (no protocol/www). Provide domain or keyword.
           * @minLength 1
           * @maxLength 63
           */
          domain?: string;
          /**
           * Target keyword. Provide domain or keyword.
           * @minLength 1
           * @maxLength 2000
           */
          keyword?: string;
          /** Whether to include or exclude matches for this entity. Defaults to include. */
          filter?: "include" | "exclude";
          /** Where to look. Domain scopes: any, sources, search_results. Keyword scopes: any, question, answer, brand_entities, fan_out_queries. */
          scope?: Array<string>;
          /** Keyword match type. word = full-term match; partial = substring. Defaults to word. */
          match?: "word" | "partial";
          /** Include subdomains of the target domain. Defaults to false. */
          include_subdomains?: boolean;
          [key: string]: unknown;
        }>;
        /** The engine value. */
        engine?: ("chatgpt" | "google") & (unknown);
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** Which links to extract domains from. Defaults to sources. */
        links_scope?: "sources" | "search_results";
        /** Filter the raw mentions dataset before it is aggregated. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: ai_search_volume (monthly AI search volume); mentions (number of mentions); platform (LLM engine, e.g. chat_gpt, google); location (location name); language (language name); sources_domain (cited source domain); search_results_domain (domain in the engine's search results); brand_entities_title (brand entity title); brand_entities_category (brand entity category). Example: {"field":"ai_search_volume","op":">","value":1000} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Max number of top domains to return. Default 5.
         * @minimum 1
         * @maximum 10
         */
        items_list_limit?: number;
        /**
         * Max elements per internal grouped array. Default 5.
         * @minimum 1
         * @maximum 10
         */
        internal_list_limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List pages most cited in LLM answers. */
    "unifapi.list_geo_top_mentioned_pages": {
      input: {
        /**
         * Up to 10 target entities, each a domain or a keyword.
         * @minItems 1
         * @maxItems 10
         */
        target: Array<{
          /**
           * Target domain (no protocol/www). Provide domain or keyword.
           * @minLength 1
           * @maxLength 63
           */
          domain?: string;
          /**
           * Target keyword. Provide domain or keyword.
           * @minLength 1
           * @maxLength 2000
           */
          keyword?: string;
          /** Whether to include or exclude matches for this entity. Defaults to include. */
          filter?: "include" | "exclude";
          /** Where to look. Domain scopes: any, sources, search_results. Keyword scopes: any, question, answer, brand_entities, fan_out_queries. */
          scope?: Array<string>;
          /** Keyword match type. word = full-term match; partial = substring. Defaults to word. */
          match?: "word" | "partial";
          /** Include subdomains of the target domain. Defaults to false. */
          include_subdomains?: boolean;
          [key: string]: unknown;
        }>;
        /** The engine value. */
        engine?: ("chatgpt" | "google") & (unknown);
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** Which links to extract pages from. Defaults to sources. */
        links_scope?: "sources" | "search_results";
        /** Filter the raw mentions dataset before it is aggregated. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: ai_search_volume (monthly AI search volume); mentions (number of mentions); platform (LLM engine, e.g. chat_gpt, google); location (location name); language (language name); sources_domain (cited source domain); search_results_domain (domain in the engine's search results); brand_entities_title (brand entity title); brand_entities_category (brand entity category). Example: {"field":"ai_search_volume","op":">","value":1000} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Max number of top pages to return. Default 5.
         * @minimum 1
         * @maximum 10
         */
        items_list_limit?: number;
        /**
         * Max elements per internal grouped array. Default 5.
         * @minimum 1
         * @maximum 10
         */
        internal_list_limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Hacker News story IDs. */
    "unifapi.list_hacker_news_story_ids": {
      input: {
        /** Story feed: top, new, best, ask, show, or jobs. */
        feed: "top" | "new" | "best" | "ask" | "show" | "jobs";
        /** Zero-based offset cursor returned as `next_cursor`. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 500
         * @default 100
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Hacker News story items. */
    "unifapi.list_hacker_news_story_items": {
      input: {
        /** Story feed: top, new, best, ask, show, or jobs. */
        feed: "top" | "new" | "best" | "ask" | "show" | "jobs";
        /** Zero-based offset cursor returned as `next_cursor`. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List posts tagged with an Instagram location. */
    "unifapi.list_instagram_location_posts": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
        /** Which tab to fetch - `ranked` (top) or `recent` (latest). */
        tab?: "ranked" | "recent";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Instagram locations geographically near a given location. */
    "unifapi.list_instagram_nearby_locations": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List replies to an Instagram comment. */
    "unifapi.list_instagram_post_comment_replies": {
      input: {
        /**
         * The shortcode value.
         * @minLength 1
         */
        shortcode: string;
        /**
         * The commentId value.
         * @minLength 1
         */
        commentId: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List comments on an Instagram post. */
    "unifapi.list_instagram_post_comments": {
      input: {
        /**
         * The shortcode value.
         * @minLength 1
         */
        shortcode: string;
        /** The cursor value. */
        cursor?: string;
        /** The sort value. */
        sort?: "popular" | "newest";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List followers of an Instagram user. */
    "unifapi.list_instagram_user_followers": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List accounts an Instagram user follows. */
    "unifapi.list_instagram_user_following": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List former usernames for an Instagram user. */
    "unifapi.list_instagram_user_former_usernames": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Instagram highlight reels for a user (metadata only). */
    "unifapi.list_instagram_user_highlights": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List feed posts authored by an Instagram user. */
    "unifapi.list_instagram_user_posts": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List reels authored by an Instagram user. */
    "unifapi.list_instagram_user_reels": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List active Instagram stories for a user. */
    "unifapi.list_instagram_user_stories": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List posts an Instagram user is tagged in. */
    "unifapi.list_instagram_user_tagged_posts": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a LinkedIn company's affiliated pages. */
    "unifapi.list_linkedin_company_affiliated": {
      input: {
        /**
         * The slug value.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List active job postings at a LinkedIn company. */
    "unifapi.list_linkedin_company_jobs": {
      input: {
        /**
         * The slug value.
         * @minLength 1
         */
        slug: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List employees of a LinkedIn company. */
    "unifapi.list_linkedin_company_people": {
      input: {
        /**
         * The slug value.
         * @minLength 1
         */
        slug: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List posts published by a LinkedIn company page. */
    "unifapi.list_linkedin_company_posts": {
      input: {
        /**
         * The slug value.
         * @minLength 1
         */
        slug: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List posts in a LinkedIn group. */
    "unifapi.list_linkedin_group_posts": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List replies to a LinkedIn comment. */
    "unifapi.list_linkedin_post_comment_replies": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
        /**
         * The comment_id value.
         * @minLength 1
         */
        comment_id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List top-level comments on a LinkedIn post. */
    "unifapi.list_linkedin_post_comments": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List users who reacted to a LinkedIn post. */
    "unifapi.list_linkedin_post_reactions": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * Filter by reaction type. `all` returns every reaction (default).
         * @default "all"
         */
        type?: "all" | "like" | "praise" | "empathy" | "interest" | "appreciation" | "entertainment";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List reposts of a LinkedIn post. */
    "unifapi.list_linkedin_post_reposts": {
      input: {
        /**
         * The id value.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a LinkedIn user's certifications. */
    "unifapi.list_linkedin_user_certifications": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List comments authored by a LinkedIn user. */
    "unifapi.list_linkedin_user_comments": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a LinkedIn user's education. */
    "unifapi.list_linkedin_user_educations": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a LinkedIn user's work experience. */
    "unifapi.list_linkedin_user_experience": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a LinkedIn user's honors and awards. */
    "unifapi.list_linkedin_user_honors": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List image posts authored by a LinkedIn user. */
    "unifapi.list_linkedin_user_images": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List companies a LinkedIn user follows. */
    "unifapi.list_linkedin_user_interest_companies": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List LinkedIn groups a user follows. */
    "unifapi.list_linkedin_user_interest_groups": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List posts authored by a LinkedIn user. */
    "unifapi.list_linkedin_user_posts": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a LinkedIn user's publications. */
    "unifapi.list_linkedin_user_publications": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List reactions a LinkedIn user has placed on posts. */
    "unifapi.list_linkedin_user_reactions": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List recommendations written for a LinkedIn user. */
    "unifapi.list_linkedin_user_recommendations": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a LinkedIn user's skills. */
    "unifapi.list_linkedin_user_skills": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List video posts authored by a LinkedIn user. */
    "unifapi.list_linkedin_user_videos": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a LinkedIn user's volunteer experience. */
    "unifapi.list_linkedin_user_volunteers": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Reddit comments on a post. */
    "unifapi.list_reddit_post_comments": {
      input: {
        /**
         * Reddit post fullname, e.g. `t3_1thjm1o`.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Reddit's current trending search queries. */
    "unifapi.list_reddit_trending_searches": {
      input: Record<string, never>;
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Reddit comments authored by a user. */
    "unifapi.list_reddit_user_comments": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Reddit posts authored by a user. */
    "unifapi.list_reddit_user_posts": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get anchor texts used in backlinks to a target. */
    "unifapi.list_seo_backlink_anchors": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Which backlinks to count: live (found on the last check, default), all, or lost. */
        backlinks_status_type?: "live" | "all" | "lost";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Include indirect links (via redirects or canonicals) to the target. Defaults to true. */
        include_indirect_links?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /**
         * Maximum number of entries kept in each referring_links_* breakdown map. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        internal_list_limit?: number;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** Filter the returned anchor rows. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: anchor (anchor text); rank (backlink rank, 0-1000); backlinks (number of backlinks); backlinks_spam_score (average spam score, 0-100); referring_domains (referring domains count); referring_main_domains (referring root domains count); referring_pages (referring pages count); referring_ips (referring IPs count); referring_subnets (referring subnets count); broken_backlinks (backlinks to broken pages); broken_pages (broken pages still receiving backlinks); first_seen (ISO date the first backlink was found); lost_date (ISO date the last backlink was lost). Example: {"and":[{"field":"backlinks","op":">","value":50},{"field":"rank","op":">","value":100}]} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /** Filter the underlying individual backlinks before the aggregate metrics are computed. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: dofollow (boolean, link is dofollow); is_new (boolean, appeared since the last check); is_lost (boolean, lost since the last check); is_broken (boolean, points to a broken page); rank (referring page rank, 0-1000); page_from_rank (referring page rank, 0-1000); domain_from_rank (referring domain rank, 0-1000); backlink_spam_score (spam score of the referring page, 0-100); item_type (anchor, image, link, redirect, or canonical); anchor (anchor text); tld_from (top-level domain of the referring page); semantic_location (link location, e.g. article, footer); first_seen (ISO date the backlink was first seen); last_seen (ISO date the backlink was last seen). Example: {"and":[{"field":"dofollow","op":"=","value":true},{"field":"backlink_spam_score","op":"<","value":10}]} */
        backlinks_filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the returned anchors. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: anchor, rank, backlinks, backlinks_spam_score, referring_domains, referring_main_domains, referring_pages, referring_ips, referring_subnets, broken_backlinks, broken_pages, first_seen, lost_date.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of records to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List target pages ranked by backlinks. */
    "unifapi.list_seo_backlink_domain_pages": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Which backlinks to count: live (found on the last check, default), all, or lost. */
        backlinks_status_type?: "live" | "all" | "lost";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /**
         * Maximum number of entries kept in each referring_links_* breakdown map. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        internal_list_limit?: number;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** Filter the returned target pages. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: url (page URL on the target); status_code (last HTTP status code of the page); size (page size in bytes); media_type (media type, e.g. text/html); first_visited (ISO date first crawled); fetch_time (ISO date last crawled); rank (backlink rank, 0-1000); backlinks (number of backlinks); backlinks_spam_score (average spam score, 0-100); referring_domains (referring domains count); referring_main_domains (referring root domains count); referring_pages (referring pages count); referring_ips (referring IPs count); referring_subnets (referring subnets count); broken_backlinks (backlinks to broken pages); broken_pages (broken pages still receiving backlinks); first_seen (ISO date the first backlink was found); lost_date (ISO date the last backlink was lost). Example: {"and":[{"field":"referring_domains","op":">","value":5},{"field":"status_code","op":"=","value":200}]} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /** Filter the underlying individual backlinks before the aggregate metrics are computed. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: dofollow (boolean, link is dofollow); is_new (boolean, appeared since the last check); is_lost (boolean, lost since the last check); is_broken (boolean, points to a broken page); rank (referring page rank, 0-1000); page_from_rank (referring page rank, 0-1000); domain_from_rank (referring domain rank, 0-1000); backlink_spam_score (spam score of the referring page, 0-100); item_type (anchor, image, link, redirect, or canonical); anchor (anchor text); tld_from (top-level domain of the referring page); semantic_location (link location, e.g. article, footer); first_seen (ISO date the backlink was first seen); last_seen (ISO date the backlink was last seen). Example: {"and":[{"field":"dofollow","op":"=","value":true},{"field":"backlink_spam_score","op":"<","value":10}]} */
        backlinks_filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the returned target pages. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: url, status_code, size, media_type, first_visited, fetch_time, rank, backlinks, backlinks_spam_score, referring_domains, referring_main_domains, referring_pages, referring_ips, referring_subnets, broken_backlinks, broken_pages, first_seen, lost_date.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of records to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List individual backlinks pointing to a target. */
    "unifapi.list_seo_backlinks": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Result grouping: as_is returns every backlink (default), one_per_domain returns one per referring domain, one_per_anchor returns one per anchor. */
        mode?: "as_is" | "one_per_domain" | "one_per_anchor";
        /** Which backlinks to count: live (found on the last check, default), all, or lost. */
        backlinks_status_type?: "live" | "all" | "lost";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Include indirect links (via redirects or canonicals) to the target. Defaults to true. */
        include_indirect_links?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** Filter the returned individual backlinks. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: domain_from (domain of the referring page); url_from (URL of the referring page); url_to (target URL the backlink points to); domain_to (target domain the backlink points to); dofollow (boolean, link is dofollow); is_new (boolean, appeared since the last check); is_lost (boolean, lost since the last check); is_broken (boolean, points to a broken page); rank (referring page rank, 0-1000); page_from_rank (referring page rank, 0-1000); domain_from_rank (referring domain rank, 0-1000); backlink_spam_score (spam score of the referring page, 0-100); item_type (anchor, image, link, redirect, or canonical); anchor (anchor text); tld_from (top-level domain of the referring page); semantic_location (link location, e.g. article, footer); first_seen (ISO date the backlink was first seen); last_seen (ISO date the backlink was last seen). Example: {"and":[{"field":"dofollow","op":"=","value":true},{"field":"is_broken","op":"=","value":false}]} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the returned backlinks. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: domain_from, url_from, url_to, domain_to, dofollow, is_new, is_lost, is_broken, rank, page_from_rank, domain_from_rank, backlink_spam_score, item_type, anchor, tld_from, semantic_location, first_seen, last_seen.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of records to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** Continuation token from a previous response, used to page past the 20,000-result offset limit. Keep all other parameters identical when paging. */
        search_after_token?: string;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List referring domains pointing to a target. */
    "unifapi.list_seo_referring_domains": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Which backlinks to count: live (found on the last check, default), all, or lost. */
        backlinks_status_type?: "live" | "all" | "lost";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Include indirect links (via redirects or canonicals) to the target. Defaults to true. */
        include_indirect_links?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /**
         * Maximum number of entries kept in each referring_links_* breakdown map. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        internal_list_limit?: number;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** Filter the returned referring domains. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: domain (referring domain); rank (backlink rank, 0-1000); backlinks (number of backlinks); backlinks_spam_score (average spam score, 0-100); referring_domains (referring domains count); referring_main_domains (referring root domains count); referring_pages (referring pages count); referring_ips (referring IPs count); referring_subnets (referring subnets count); broken_backlinks (backlinks to broken pages); broken_pages (broken pages still receiving backlinks); first_seen (ISO date the first backlink was found); lost_date (ISO date the last backlink was lost). Example: {"and":[{"field":"rank","op":">","value":200},{"field":"backlinks","op":">","value":10}]} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the returned referring domains. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: domain, rank, backlinks, backlinks_spam_score, referring_domains, referring_main_domains, referring_pages, referring_ips, referring_subnets, broken_backlinks, broken_pages, first_seen, lost_date.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of records to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List referring IP networks pointing to a target. */
    "unifapi.list_seo_referring_networks": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Group referring networks by individual IP (ip, default) or by subnet (subnet). */
        network_address_type?: "ip" | "subnet";
        /** Which backlinks to count: live (found on the last check, default), all, or lost. */
        backlinks_status_type?: "live" | "all" | "lost";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Include indirect links (via redirects or canonicals) to the target. Defaults to true. */
        include_indirect_links?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /**
         * Maximum number of entries kept in each referring_links_* breakdown map. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        internal_list_limit?: number;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** Filter the returned referring networks. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: rank (backlink rank, 0-1000); backlinks (number of backlinks); backlinks_spam_score (average spam score, 0-100); referring_domains (referring domains count); referring_main_domains (referring root domains count); referring_pages (referring pages count); referring_ips (referring IPs count); referring_subnets (referring subnets count); broken_backlinks (backlinks to broken pages); broken_pages (broken pages still receiving backlinks); first_seen (ISO date the first backlink was found); lost_date (ISO date the last backlink was lost). Example: {"field":"referring_domains","op":">","value":5} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /** Filter the underlying individual backlinks before the aggregate metrics are computed. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: dofollow (boolean, link is dofollow); is_new (boolean, appeared since the last check); is_lost (boolean, lost since the last check); is_broken (boolean, points to a broken page); rank (referring page rank, 0-1000); page_from_rank (referring page rank, 0-1000); domain_from_rank (referring domain rank, 0-1000); backlink_spam_score (spam score of the referring page, 0-100); item_type (anchor, image, link, redirect, or canonical); anchor (anchor text); tld_from (top-level domain of the referring page); semantic_location (link location, e.g. article, footer); first_seen (ISO date the backlink was first seen); last_seen (ISO date the backlink was last seen). Example: {"and":[{"field":"dofollow","op":"=","value":true},{"field":"backlink_spam_score","op":"<","value":10}]} */
        backlinks_filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the returned referring networks. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: rank, backlinks, backlinks_spam_score, referring_domains, referring_main_domains, referring_pages, referring_ips, referring_subnets, broken_backlinks, broken_pages, first_seen, lost_date.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of records to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a domain's top ranking pages. */
    "unifapi.list_seo_relevant_pages": {
      input: {
        /**
         * Target domain, such as example.com or https://example.com. Specified without www.
         * @minLength 1
         * @maxLength 253
         */
        target: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Maximum number of pages to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of pages to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a domain's subdomains with traffic. */
    "unifapi.list_seo_subdomains": {
      input: {
        /**
         * Target domain, such as example.com or https://example.com. Specified without www.
         * @minLength 1
         * @maxLength 253
         */
        target: string;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Maximum number of subdomains to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of subdomains to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Threads posts authored by a user. */
    "unifapi.list_threads_user_posts": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Threads replies authored by a user. */
    "unifapi.list_threads_user_replies": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Threads reposts by a user. */
    "unifapi.list_threads_user_reposts": {
      input: {
        /**
         * The username value.
         * @minLength 1
         */
        username: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List videos tagged with a TikTok hashtag. */
    "unifapi.list_tiktok_hashtag_videos": {
      input: {
        /**
         * The id value.
         * @pattern ^\d+$
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List videos using a TikTok music track. */
    "unifapi.list_tiktok_music_videos": {
      input: {
        /**
         * The id value.
         * @pattern ^\d+$
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a TikTok user's followers. */
    "unifapi.list_tiktok_user_followers": {
      input: {
        /**
         * TikTok sec_uid, numeric user id, or public handle.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List users a TikTok user is following. */
    "unifapi.list_tiktok_user_following": {
      input: {
        /**
         * TikTok sec_uid, numeric user id, or public handle.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List videos liked by a TikTok user. */
    "unifapi.list_tiktok_user_likes": {
      input: {
        /**
         * TikTok sec_uid, numeric user id, or public handle.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List videos posted by a TikTok user. */
    "unifapi.list_tiktok_user_videos": {
      input: {
        /**
         * TikTok sec_uid, numeric user id, or public handle.
         * @minLength 1
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List replies to a TikTok comment. */
    "unifapi.list_tiktok_video_comment_replies": {
      input: {
        /**
         * The id value.
         * @pattern ^\d+$
         */
        id: string;
        /**
         * The comment_id value.
         * @pattern ^\d+$
         */
        comment_id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List top-level comments on a TikTok video. */
    "unifapi.list_tiktok_video_comments": {
      input: {
        /**
         * The id value.
         * @pattern ^\d+$
         */
        id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get media Posts from an X Community. */
    "unifapi.list_x_community_media": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get members of an X Community. */
    "unifapi.list_x_community_members": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get moderators of an X Community. */
    "unifapi.list_x_community_moderators": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Posts from an X Community. */
    "unifapi.list_x_community_tweets": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get followers/subscribers of an X List. */
    "unifapi.list_x_list_followers": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get members of an X List. */
    "unifapi.list_x_list_members": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Posts from an X List. */
    "unifapi.list_x_list_tweets": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get users who liked an X Post. */
    "unifapi.list_x_tweet_liking_users": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get quote Posts for an X Post. */
    "unifapi.list_x_tweet_quotes": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get users who reposted an X Post. */
    "unifapi.list_x_tweet_repost_users": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get follower IDs for an X user. */
    "unifapi.list_x_user_follower_ids": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get an X user's followers. */
    "unifapi.list_x_user_followers": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get users followed by an X user. */
    "unifapi.list_x_user_following": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get following IDs for an X user. */
    "unifapi.list_x_user_following_ids": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Posts liked by an X user. */
    "unifapi.list_x_user_liked_tweets": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Posts authored by an X user. */
    "unifapi.list_x_user_tweets": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
        /** Comma-separated X timeline exclusions, e.g. `replies`. */
        exclude?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get verified followers for an X user. */
    "unifapi.list_x_user_verified_followers": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a YouTube channel's community posts. */
    "unifapi.list_youtube_channel_community_posts": {
      input: {
        /**
         * The channel_id value.
         * @minLength 1
         */
        channel_id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List playlists created by a YouTube channel. */
    "unifapi.list_youtube_channel_playlists": {
      input: {
        /**
         * The channel_id value.
         * @minLength 1
         */
        channel_id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Shorts uploaded by a YouTube channel. */
    "unifapi.list_youtube_channel_shorts": {
      input: {
        /**
         * The channel_id value.
         * @minLength 1
         */
        channel_id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List videos uploaded by a YouTube channel. */
    "unifapi.list_youtube_channel_videos": {
      input: {
        /**
         * The channel_id value.
         * @minLength 1
         */
        channel_id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List videos for a YouTube hashtag. */
    "unifapi.list_youtube_hashtag_videos": {
      input: {
        /**
         * Hashtag, with or without a leading `#`, e.g. `lofi`.
         * @minLength 1
         */
        tag: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List videos in a YouTube playlist. */
    "unifapi.list_youtube_playlist_videos": {
      input: {
        /**
         * The playlist_id value.
         * @minLength 1
         */
        playlist_id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List YouTube videos related to a given video. */
    "unifapi.list_youtube_related_videos": {
      input: {
        /**
         * The video_id value.
         * @minLength 1
         */
        video_id: string;
        /** The cursor value. */
        cursor?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List a YouTube video's caption tracks. */
    "unifapi.list_youtube_video_captions": {
      input: {
        /**
         * The video_id value.
         * @minLength 1
         */
        video_id: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List comments on a YouTube video. */
    "unifapi.list_youtube_video_comments": {
      input: {
        /**
         * The video_id value.
         * @minLength 1
         */
        video_id: string;
        /** The cursor value. */
        cursor?: string;
        /** Comment ordering: `top` (default) or `newest`. */
        sort_by?: "top" | "newest";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Render a page to HTML. */
    "unifapi.render_html": {
      input: {
        /**
         * Absolute http(s) URL of the page to render.
         * @minLength 1
         */
        url: string;
        /** When navigation is considered complete. `networkidle0` waits for the network to go idle (best for JavaScript-heavy pages); `load` is fastest. */
        wait_until?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
        /**
         * Navigation timeout in milliseconds (1000-60000).
         * @minimum 1000
         * @maximum 60000
         */
        timeout_ms?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Render a page to Markdown. */
    "unifapi.render_markdown": {
      input: {
        /**
         * Absolute http(s) URL of the page to render.
         * @minLength 1
         */
        url: string;
        /** When navigation is considered complete. `networkidle0` waits for the network to go idle (best for JavaScript-heavy pages); `load` is fastest. */
        wait_until?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2";
        /**
         * Navigation timeout in milliseconds (1000-60000).
         * @minimum 1000
         * @maximum 60000
         */
        timeout_ms?: number;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Resolve a free-text industry name to LinkedIn industry IDs. */
    "unifapi.resolve_linkedin_industries": {
      input: {
        /**
         * The keyword value.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Resolve a free-text location into LinkedIn geocode tokens. */
    "unifapi.resolve_linkedin_locations": {
      input: {
        /**
         * The keyword value.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Resolve a TikTok username to a user id. */
    "unifapi.resolve_tiktok_user": {
      input: {
        /**
         * Public TikTok handle, e.g. 'jennmelon'
         * @minLength 1
         */
        username: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Resolve a TikTok share URL to a video. */
    "unifapi.resolve_tiktok_video": {
      input: {
        /**
         * TikTok share URL (long or short form)
         * @format uri
         */
        url: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Resolve a YouTube channel URL to its UC... channel id. */
    "unifapi.resolve_youtube_channel_id": {
      input: {
        /**
         * Full channel URL - supports `youtube.com/@handle`, `/channel/UC...`, `/c/name`.
         * @format uri
         */
        url: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Score keyword difficulty. */
    "unifapi.score_seo_keyword_difficulty": {
      input: {
        /**
         * Keywords to score (1-1000). Returns the keyword difficulty for each.
         * @minItems 1
         * @maxItems 1000
         */
        keywords: Array<string>;
        /** Search location as a country code/name, DataForSEO location code, or full location name. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Events. */
    "unifapi.search_events": {
      input: {
        /**
         * Search query to inspect.
         * @minLength 1
         * @maxLength 700
         */
        query: string;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Number of results to return, matching the limit parameter used across other UnifAPI endpoints. Maps to result depth.
         * @minimum 1
         * @maximum 700
         */
        limit?: number;
        /** Controls response size. summary keeps lean rank evidence, standard adds descriptive fields, full includes raw extras and nested items. Defaults to standard. */
        view?: "summary" | "standard" | "full";
        /** Optional device operating system. */
        os?: "windows" | "macos" | "android" | "ios";
        /** Restrict events to a relative date range. Defaults to all upcoming events. */
        date_range?: "today" | "tomorrow" | "this_week" | "this_weekend" | "next_week" | "this_month" | "next_month";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search AI Mode generative results. */
    "unifapi.search_geo_ai_mode": {
      input: {
        /**
         * Search query to inspect in AI Mode.
         * @minLength 1
         * @maxLength 700
         */
        query: string;
        /**
         * Optional domain or URL to mark when it appears in AI Mode answers, links, or cited references.
         * @minLength 1
         */
        target?: string;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** AI SERP device type. Defaults to desktop. */
        device?: "desktop" | "mobile";
        /** When true, request pixel rectangle data for visual AI SERP analysis. */
        include_pixel_rankings?: boolean;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search LLM mentions of a domain or keyword. */
    "unifapi.search_geo_mentions": {
      input: {
        /**
         * Up to 10 target entities, each a domain or a keyword.
         * @minItems 1
         * @maxItems 10
         */
        target: Array<{
          /**
           * Target domain (no protocol/www). Provide domain or keyword.
           * @minLength 1
           * @maxLength 63
           */
          domain?: string;
          /**
           * Target keyword. Provide domain or keyword.
           * @minLength 1
           * @maxLength 2000
           */
          keyword?: string;
          /** Whether to include or exclude matches for this entity. Defaults to include. */
          filter?: "include" | "exclude";
          /** Where to look. Domain scopes: any, sources, search_results. Keyword scopes: any, question, answer, brand_entities, fan_out_queries. */
          scope?: Array<string>;
          /** Keyword match type. word = full-term match; partial = substring. Defaults to word. */
          match?: "word" | "partial";
          /** Include subdomains of the target domain. Defaults to false. */
          include_subdomains?: boolean;
          [key: string]: unknown;
        }>;
        /** The engine value. */
        engine?: ("chatgpt" | "google") & (unknown);
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /** Filter the matched mentions. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: ai_search_volume (monthly AI search volume); platform (LLM engine, e.g. chat_gpt, google, perplexity); model (model name that produced the answer). Example: {"and":[{"field":"ai_search_volume","op":">","value":1000},{"field":"platform","op":"=","value":"chat_gpt"}]} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the matched mentions. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: ai_search_volume, platform, model.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Max mentions to return. Default 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Mentions to skip. Use cursor beyond 9000.
         * @minimum 0
         * @maximum 9000
         */
        offset?: number;
        /** search_after_token from a previous response, for deep pagination. */
        cursor?: string;
        /** Response size. full keeps answers, sources, and raw search results; standard drops raw search results; summary keeps only the question, volume, and cited sources. Defaults to standard. */
        view?: "summary" | "standard" | "full";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Hotels. */
    "unifapi.search_hotels": {
      input: {
        /**
         * Optional hotel name or search query. Combine with location to scope the search.
         * @minLength 1
         * @maxLength 700
         */
        query?: string;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Number of hotels to return. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Check-in date. Date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        check_in?: string;
        /**
         * Check-out date. Date in YYYY-MM-DD format.
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        check_out?: string;
        /**
         * ISO 4217 currency code for prices, such as USD.
         * @minLength 3
         * @maxLength 3
         */
        currency?: string;
        /**
         * Number of adult guests.
         * @minimum 1
         * @maximum 30
         */
        adults?: number;
        /**
         * Ages of children staying, used to refine availability and pricing.
         * @maxItems 10
         */
        children?: Array<number>;
        /**
         * Filter to hotels with these class ratings, such as [4, 5].
         * @maxItems 5
         */
        stars?: Array<number>;
        /**
         * Filter to hotels with at least this guest rating.
         * @minimum 0
         * @maximum 5
         */
        min_rating?: number;
        /** Sort order for results. Defaults to relevance. */
        sort_by?: "relevance" | "lowest_price" | "highest_rating" | "most_reviewed";
        /**
         * Minimum price per night.
         * @minimum 0
         */
        min_price?: number;
        /**
         * Maximum price per night.
         * @minimum 0
         */
        max_price?: number;
        /** When true, only return hotels offering free cancellation. */
        free_cancellation?: boolean;
        /** When true, search vacation rentals instead of hotels. */
        is_vacation_rentals?: boolean;
        /**
         * Filter to hotels offering these amenities, such as pool or free_wifi.
         * @maxItems 30
         */
        amenities?: Array<string>;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Cross-type Instagram search (posts/reels). */
    "unifapi.search_instagram": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search the LinkedIn Ad Library. */
    "unifapi.search_linkedin_ads": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /** The keyword value. */
        keyword?: string;
        /** The advertiser_name value. */
        advertiser_name?: string;
        /** ISO-3166-1 alpha-2 code, e.g. `US` */
        country?: string;
        /** The date value. */
        date?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search LinkedIn jobs by keyword and filters. */
    "unifapi.search_linkedin_jobs": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * Free-text search query
         * @minLength 1
         */
        keyword: string;
        /** The sort_by value. */
        sort_by?: string;
        /** The date_posted value. */
        date_posted?: string;
        /** The geocode value. */
        geocode?: string;
        /** The company value. */
        company?: string;
        /** The experience_level value. */
        experience_level?: string;
        /** The remote value. */
        remote?: string;
        /** The job_type value. */
        job_type?: string;
        /** The easy_apply value. */
        easy_apply?: "true" | "false";
        /** The has_verifications value. */
        has_verifications?: "true" | "false";
        /** The under_10_applicants value. */
        under_10_applicants?: "true" | "false";
        /** The fair_chance_employer value. */
        fair_chance_employer?: "true" | "false";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search LinkedIn people by name, title, company, etc. */
    "unifapi.search_linkedin_people": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /** The name value. */
        name?: string;
        /** The first_name value. */
        first_name?: string;
        /** The last_name value. */
        last_name?: string;
        /** The title value. */
        title?: string;
        /** The company value. */
        company?: string;
        /** The school value. */
        school?: string;
        /** The geocode_location value. */
        geocode_location?: string;
        /** The current_company value. */
        current_company?: string;
        /** The profile_language value. */
        profile_language?: string;
        /** The industry value. */
        industry?: string;
        /** The service_category value. */
        service_category?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search LinkedIn posts by keyword. */
    "unifapi.search_linkedin_posts": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * The keyword value.
         * @minLength 1
         */
        keyword: string;
        /** The date_posted value. */
        date_posted?: string;
        /** The sort_by value. */
        sort_by?: string;
        /** The from_member value. */
        from_member?: string;
        /** The from_company value. */
        from_company?: string;
        /** The content_type value. */
        content_type?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search LinkedIn schools by keyword. */
    "unifapi.search_linkedin_schools": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * The keyword value.
         * @minLength 1
         */
        keyword: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Local Finder. */
    "unifapi.search_local": {
      input: {
        /**
         * Search query to inspect.
         * @minLength 1
         * @maxLength 700
         */
        query: string;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Number of results to return, matching the limit parameter used across other UnifAPI endpoints. Maps to result depth.
         * @minimum 1
         * @maximum 700
         */
        limit?: number;
        /** Controls response size. summary keeps lean rank evidence, standard adds descriptive fields, full includes raw extras and nested items. Defaults to standard. */
        view?: "summary" | "standard" | "full";
        /** SERP device type. Defaults to desktop. */
        device?: "desktop" | "mobile";
        /** Optional device operating system. */
        os?: "windows" | "macos" | "android" | "ios";
        /**
         * Filter results to places with at least this average rating.
         * @minimum 0
         * @maximum 5
         */
        min_rating?: number;
        /** Filter results by open hours. open_now keeps only places open at request time. */
        time_filter?: "any" | "open_now";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Maps. */
    "unifapi.search_maps": {
      input: {
        /**
         * Search query to inspect.
         * @minLength 1
         * @maxLength 700
         */
        query: string;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Number of results to return, matching the limit parameter used across other UnifAPI endpoints. Maps to result depth.
         * @minimum 1
         * @maximum 700
         */
        limit?: number;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
        /** SERP device type. Defaults to desktop. */
        device?: "desktop" | "mobile";
        /** Optional device operating system. */
        os?: "windows" | "macos" | "android" | "ios";
        /** When true, return results from the displayed map area rather than the broader location. */
        search_this_area?: boolean;
        /** When true, use search-places mode to return listings the way the mobile app surfaces them. */
        search_places?: boolean;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search News. */
    "unifapi.search_news": {
      input: {
        /**
         * Search query to inspect.
         * @minLength 1
         * @maxLength 700
         */
        query: string;
        /** Search location as a country code/name, DataForSEO location code, full location name, or latitude,longitude,radius coordinate string. Defaults to us. */
        location?: string | number;
        /**
         * Search language as an ISO code or full language name. Defaults to en.
         * @minLength 2
         * @maxLength 80
         */
        language?: string;
        /**
         * Number of results to return, matching the limit parameter used across other UnifAPI endpoints. Maps to result depth.
         * @minimum 1
         * @maximum 700
         */
        limit?: number;
        /** The view value. */
        view?: ("summary" | "standard" | "full") & (unknown);
        /** Optional device operating system. */
        os?: "windows" | "macos" | "android" | "ios";
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Threads users by keyword. */
    "unifapi.search_threads_profiles": {
      input: {
        /**
         * Search keyword.
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search recent Threads posts. */
    "unifapi.search_threads_recent": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search top Threads posts. */
    "unifapi.search_threads_top": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** General TikTok search (returns videos). */
    "unifapi.search_tiktok": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
        /**
         * Search keyword
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search TikTok hashtags by keyword. */
    "unifapi.search_tiktok_hashtags": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
        /**
         * Search keyword
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search TikTok users by keyword. */
    "unifapi.search_tiktok_users": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
        /**
         * Search keyword
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search TikTok videos by keyword. */
    "unifapi.search_tiktok_videos": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * The limit value.
         * @minimum 1
         * @maximum 50
         * @default 20
         */
        limit?: number;
        /**
         * Search keyword
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search X Communities. */
    "unifapi.search_x_communities": {
      input: {
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
        /**
         * The query value.
         * @minLength 1
         */
        query: string;
        /** The community.fields value. */
        "community.fields"?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search members in an X Community. */
    "unifapi.search_x_community_member": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
        /**
         * The query value.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search X Lists. */
    "unifapi.search_x_lists": {
      input: {
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
        /**
         * The query value.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search recent X Posts. */
    "unifapi.search_x_recent_tweets": {
      input: {
        /** The expansions value. */
        expansions?: string;
        /** The tweet.fields value. */
        "tweet.fields"?: string;
        /** The user.fields value. */
        "user.fields"?: string;
        /** The media.fields value. */
        "media.fields"?: string;
        /** The place.fields value. */
        "place.fields"?: string;
        /** The poll.fields value. */
        "poll.fields"?: string;
        /** The pagination_token value. */
        pagination_token?: string;
        /** The next_token value. */
        next_token?: string;
        /**
         * The max_results value.
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
        /**
         * Recent search query.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search within a YouTube channel. */
    "unifapi.search_youtube_channel": {
      input: {
        /**
         * The channel_id value.
         * @minLength 1
         */
        channel_id: string;
        /** The cursor value. */
        cursor?: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search YouTube channels by keyword. */
    "unifapi.search_youtube_channels": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search YouTube playlists by keyword. */
    "unifapi.search_youtube_playlists": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        q: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search YouTube videos by keyword. */
    "unifapi.search_youtube_videos": {
      input: {
        /** The cursor value. */
        cursor?: string;
        /**
         * Search keyword.
         * @minLength 1
         */
        q: string;
        /** Result ordering (default `relevance`). */
        sort_by?: "relevance" | "date" | "views" | "rating";
        /** Restrict to videos uploaded within this window. */
        upload_date?: "hour" | "today" | "week" | "month" | "year";
        /** Restrict by video length bucket. */
        duration?: "short" | "medium" | "long";
        /**
         * ISO 3166 country code, e.g. `US`.
         * @minLength 2
         * @maxLength 2
         */
        region?: string;
        /** Language code, e.g. `en`. */
        language?: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI pagination details when the endpoint is paginated. */
        pagination?: {
          /** Cursor to request the next page. */
          next_cursor?: string;
          [key: string]: unknown;
        };
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Summarize backlinks for each page of a target. */
    "unifapi.summarize_seo_backlink_domain_pages": {
      input: {
        /**
         * Domain, subdomain, or page to analyze. A domain or subdomain is specified without https:// and www. (example.com); a page is specified as an absolute URL (https://example.com/blog/).
         * @minLength 1
         * @maxLength 2048
         */
        target: string;
        /** Which backlinks to count: live (found on the last check, default), all, or lost. */
        backlinks_status_type?: "live" | "all" | "lost";
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Include indirect links (via redirects or canonicals) to the target. Defaults to true. */
        include_indirect_links?: boolean;
        /** Exclude internal backlinks from the target's own subdomains. Defaults to true. */
        exclude_internal_backlinks?: boolean;
        /**
         * Maximum number of entries kept in each referring_links_* breakdown map. Defaults to 10.
         * @minimum 1
         * @maximum 1000
         */
        internal_list_limit?: number;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** Filter the returned page summaries. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: url (page URL on the target); rank (backlink rank, 0-1000); backlinks (number of backlinks); backlinks_spam_score (average spam score, 0-100); referring_domains (referring domains count); referring_main_domains (referring root domains count); referring_pages (referring pages count); referring_ips (referring IPs count); referring_subnets (referring subnets count); broken_backlinks (backlinks to broken pages); broken_pages (broken pages still receiving backlinks); first_seen (ISO date the first backlink was found); lost_date (ISO date the last backlink was lost). Example: {"field":"referring_domains","op":">","value":5} */
        filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /** Filter the underlying individual backlinks before the aggregate metrics are computed. Provide a single condition {"field","op","value"} or an {"and":[...]} / {"or":[...]} group of conditions (nest groups for mixed logic), up to 8 conditions. Operators: =, <>, <, <=, >, >=, in, not_in, like, not_like, ilike, not_ilike, match, not_match (use an array value with in / not_in). Filterable fields: dofollow (boolean, link is dofollow); is_new (boolean, appeared since the last check); is_lost (boolean, lost since the last check); is_broken (boolean, points to a broken page); rank (referring page rank, 0-1000); page_from_rank (referring page rank, 0-1000); domain_from_rank (referring domain rank, 0-1000); backlink_spam_score (spam score of the referring page, 0-100); item_type (anchor, image, link, redirect, or canonical); anchor (anchor text); tld_from (top-level domain of the referring page); semantic_location (link location, e.g. article, footer); first_seen (ISO date the backlink was first seen); last_seen (ISO date the backlink was last seen). Example: {"and":[{"field":"dofollow","op":"=","value":true},{"field":"backlink_spam_score","op":"<","value":10}]} */
        backlinks_filters?: {
          /**
           * Field to filter on. See the endpoint's list of filterable fields.
           * @minLength 1
           */
          field: string;
          /** Comparison operator. */
          op: "=" | "<>" | "<" | "<=" | ">" | ">=" | "in" | "not_in" | "like" | "not_like" | "ilike" | "not_ilike" | "match" | "not_match";
          value: string | number | boolean | Array<string | number | boolean>;
        } | {
          /**
           * Sub-expressions that must all match.
           * @minItems 2
           */
          and: Array<unknown>;
        } | {
          /**
           * Sub-expressions where at least one must match.
           * @minItems 2
           */
          or: Array<unknown>;
        };
        /**
         * Sort the returned page summaries. Each rule is {"field","dir"} with dir asc or desc; up to 3 rules, applied in order. Sortable fields: url, rank, backlinks, backlinks_spam_score, referring_domains, referring_main_domains, referring_pages, referring_ips, referring_subnets, broken_backlinks, broken_pages, first_seen, lost_date.
         * @minItems 1
         * @maxItems 3
         */
        order_by?: Array<{
          /**
           * Field to sort by. See the endpoint's list of sortable fields.
           * @minLength 1
           */
          field: string;
          /**
           * Sort direction: asc or desc. Defaults to desc.
           * @default "desc"
           */
          dir?: "asc" | "desc";
        }>;
        /**
         * Maximum number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of records to skip from the start of the results.
         * @minimum 0
         */
        offset?: number;
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Summarize backlinks for many pages at once. */
    "unifapi.summarize_seo_bulk_pages": {
      input: {
        /**
         * Domains, subdomains, or pages to analyze (up to 1000). Domains/subdomains without https:// and www.; pages as absolute URLs.
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
        /** Include backlinks pointing to the target's subdomains. Defaults to true. */
        include_subdomains?: boolean;
        /** Scale for rank values: one_thousand (0-1000, default) or one_hundred (0-100). */
        rank_scale?: "one_hundred" | "one_thousand";
        /** The view value. */
        view?: ("summary" | "full") & (unknown);
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Translate an X Post. */
    "unifapi.translate_x_tweet": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /**
         * The language value.
         * @minLength 1
         */
        language: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Translate an X user profile. */
    "unifapi.translate_x_user_profile": {
      input: {
        /**
         * X resource id.
         * @minLength 1
         */
        id: string;
        /**
         * The language value.
         * @minLength 1
         */
        language: string;
      };
      output: {
        /** UnifAPI request id for support and ledger correlation. */
        request_id?: string;
        /** The data payload returned by UnifAPI for this operation. */
        data?: unknown;
        /** UnifAPI billing details for the request. */
        billing?: {
          /**
           * Credits charged for the request.
           * @minimum 0
           */
          credits_charged?: number;
          /**
           * Records charged for the request.
           * @minimum 0
           */
          records_charged?: number;
          /**
           * Credits remaining after the request.
           * @minimum 0
           */
          balance_remaining?: number;
          /** Whether results were truncated because of credit balance. */
          truncated_due_to_balance?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
