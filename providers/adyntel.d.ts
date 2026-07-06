import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Adyntel paid and organic keyword metrics for a company domain. */
    "adyntel.get_domain_keywords": {
      input: {
        /**
         * The company domain without protocol or www prefix, for example clay.com.
         * @minLength 1
         */
        company_domain: string;
        /**
         * The language for keyword results.
         * @minLength 1
         */
        language?: string;
        /**
         * The number of keyword results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Whether Adyntel returned HTTP 204 with no result payload. */
        no_results: boolean;
        /** The raw object returned by Adyntel. */
        organic: Record<string, unknown> | null;
        /** The raw object returned by Adyntel. */
        organic_percentages: Record<string, unknown> | null;
        /** The raw object returned by Adyntel. */
        paid: Record<string, unknown> | null;
        /** The raw object returned by Adyntel. */
        paid_percentages: Record<string, unknown> | null;
        /** The raw object returned by Adyntel. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Get details for one TikTok ad by ID using Adyntel. */
    "adyntel.get_tiktok_ad_details": {
      input: {
        /**
         * The TikTok ad ID to fetch.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Adyntel returned HTTP 204 with no result payload. */
        no_results: boolean;
        /** The raw object returned by Adyntel. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Search Google ads for a company domain using Adyntel's Google ad library endpoint. */
    "adyntel.search_google_ads": {
      input: {
        /**
         * The company domain without protocol or www prefix, for example clay.com.
         * @minLength 1
         */
        company_domain: string;
        /** Filter Google ads by media type. */
        media_type?: "text" | "image" | "video";
        /**
         * The continuation token returned by a previous Adyntel response.
         * @minLength 1
         */
        continuation_token?: string;
        /** Whether Adyntel should extract text from ad creatives. */
        extract_text?: boolean;
        /** The Adyntel data provider to use for this request. */
        data_provider?: "rapidapi" | "apify";
      };
      output: {
        /** Whether Adyntel returned HTTP 204 with no result payload. */
        no_results: boolean;
        /** The ads extracted from the Adyntel response when available. */
        ads: Array<Record<string, unknown>>;
        /** The continuation token for the next Adyntel page when returned. */
        continuation_token: string | null;
        /** The upstream page identifier when Adyntel returns one. */
        page_id: string | null;
        /** Whether the current page is the last page when Adyntel returns this flag. */
        is_last_page: boolean | null;
        /** The number of ads reported by Adyntel when returned. */
        number_of_ads: number | null;
        /** The total number of ads reported by Adyntel when returned. */
        total_ads: number | null;
        /** The total ad count reported by Adyntel when returned. */
        total_ad_count: number | null;
        /** The raw object returned by Adyntel. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Search LinkedIn ads for a company domain or LinkedIn page ID using Adyntel. */
    "adyntel.search_linkedin_ads": {
      input: {
        /**
         * The company domain without protocol or www prefix, for example clay.com.
         * @minLength 1
         */
        company_domain?: string;
        /**
         * The LinkedIn Page ID to search for.
         * @minLength 1
         */
        linkedin_page_id?: string;
        /**
         * The continuation token returned by a previous Adyntel response.
         * @minLength 1
         */
        continuation_token?: string;
        /** Return a derived LinkedIn value instead of full ads. */
        extract?: "number_of_ads";
        /** Whether to return only currently active LinkedIn ads. */
        live_ads?: boolean;
        /** The Adyntel data provider to use for this request. */
        data_provider?: "rapidapi" | "apify";
      };
      output: {
        /** Whether Adyntel returned HTTP 204 with no result payload. */
        no_results: boolean;
        /** The ads extracted from the Adyntel response when available. */
        ads: Array<Record<string, unknown>>;
        /** The continuation token for the next Adyntel page when returned. */
        continuation_token: string | null;
        /** The upstream page identifier when Adyntel returns one. */
        page_id: string | null;
        /** Whether the current page is the last page when Adyntel returns this flag. */
        is_last_page: boolean | null;
        /** The number of ads reported by Adyntel when returned. */
        number_of_ads: number | null;
        /** The total number of ads reported by Adyntel when returned. */
        total_ads: number | null;
        /** The total ad count reported by Adyntel when returned. */
        total_ad_count: number | null;
        /** The raw object returned by Adyntel. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Search Facebook and Instagram ads for a company using Adyntel's Meta ad library endpoint. */
    "adyntel.search_meta_ads": {
      input: {
        /**
         * The company domain without protocol or www prefix, for example clay.com.
         * @minLength 1
         */
        company_domain?: string;
        /**
         * The Facebook page URL starting with https://, used instead of company_domain.
         * @minLength 1
         */
        facebook_url?: string;
        /**
         * The country code filter supported by Adyntel.
         * @minLength 1
         */
        country_code?: string;
        /**
         * The continuation token returned by a previous Adyntel response.
         * @minLength 1
         */
        continuation_token?: string;
        /** Filter Meta ads by creative media type. */
        media_type?: "image" | "meme" | "image_and_meme" | "video";
        /** Filter Meta ads by active status. */
        active_status?: "inactive" | "all";
      };
      output: {
        /** Whether Adyntel returned HTTP 204 with no result payload. */
        no_results: boolean;
        /** The ads extracted from the Adyntel response when available. */
        ads: Array<Record<string, unknown>>;
        /** The continuation token for the next Adyntel page when returned. */
        continuation_token: string | null;
        /** The upstream page identifier when Adyntel returns one. */
        page_id: string | null;
        /** Whether the current page is the last page when Adyntel returns this flag. */
        is_last_page: boolean | null;
        /** The number of ads reported by Adyntel when returned. */
        number_of_ads: number | null;
        /** The total number of ads reported by Adyntel when returned. */
        total_ads: number | null;
        /** The total ad count reported by Adyntel when returned. */
        total_ad_count: number | null;
        /** The raw object returned by Adyntel. */
        raw: Record<string, unknown> | null;
      };
    };
    /** Search TikTok ads by keyword using Adyntel's TikTok ad library endpoint. */
    "adyntel.search_tiktok_ads": {
      input: {
        /**
         * The keyword to search for in the ad library.
         * @minLength 1
         */
        keyword: string;
        /**
         * The country code filter supported by Adyntel.
         * @minLength 1
         */
        country_code?: string;
      };
      output: {
        /** Whether Adyntel returned HTTP 204 with no result payload. */
        no_results: boolean;
        /** The ads extracted from the Adyntel response when available. */
        ads: Array<Record<string, unknown>>;
        /** The continuation token for the next Adyntel page when returned. */
        continuation_token: string | null;
        /** The upstream page identifier when Adyntel returns one. */
        page_id: string | null;
        /** Whether the current page is the last page when Adyntel returns this flag. */
        is_last_page: boolean | null;
        /** The number of ads reported by Adyntel when returned. */
        number_of_ads: number | null;
        /** The total number of ads reported by Adyntel when returned. */
        total_ads: number | null;
        /** The total ad count reported by Adyntel when returned. */
        total_ad_count: number | null;
        /** The raw object returned by Adyntel. */
        raw: Record<string, unknown> | null;
      };
    };
  }
}
