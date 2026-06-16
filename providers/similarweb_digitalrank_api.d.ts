import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Similarweb rank-tracker campaigns and their scraping configurations for follow-up reporting APIs. */
    "similarweb_digitalrank_api.get_rank_tracker_describe": {
      input: Record<string, never>;
      output: {
        /** The rank-tracker campaigns returned by Similarweb. */
        campaigns: Array<{
          /** The unique identifier of the rank-tracker campaign. */
          campaignId: string;
          /** The campaign display name. */
          campaignName?: string;
          /** The primary tracked domain for the campaign. */
          mainDomain?: string;
          /** The campaign creator returned by Similarweb. */
          user?: string;
          /** The campaign creation timestamp. */
          createdTime?: string;
          /** The campaign tags returned by Similarweb. */
          tags: Array<string>;
          /** The campaign competitor domains. */
          competitors: Array<string>;
          /** The scraping configurations available for the campaign. */
          scrapingConfigurations: Array<{
            /** The unique identifier of the scraping configuration. */
            id: string;
            /** The device type used by the scraping configuration. */
            device?: string;
            /** The language configured for the scraping configuration. */
            language?: string;
            /** The location configured for the scraping configuration. */
            location?: string;
            /** The search engine configured for the scraping configuration. */
            searchEngine?: string;
          }>;
        }>;
      };
    };
    /** List Similarweb top-ranked websites for a country and category, defaulting to the global $All ranking when filters are omitted. */
    "similarweb_digitalrank_api.get_similar_rank_top_sites": {
      input: {
        /**
         * The maximum number of ranked sites to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based offset into the ranked results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The country code to query. Defaults to world for a worldwide ranking.
         * @minLength 1
         */
        country?: string;
        /**
         * The Similarweb category path segment. Defaults to $All when omitted.
         * @minLength 1
         */
        category?: string;
        /** The start month for the ranking window in YYYY-MM format. */
        startDate?: string;
        /** The end month for the ranking window in YYYY-MM format. */
        endDate?: string;
        /**
         * The field used to sort the ranked results.
         * @minLength 1
         */
        sort?: string;
        /** Whether to sort the ranked results in ascending order. */
        ascending?: boolean;
        /** Whether to include only verified domains in the ranked results. */
        showVerified?: boolean;
        /** Whether to include only main domains in the ranked results. */
        mainDomainOnly?: boolean;
      };
      output: {
        /** The ranked top sites returned by Similarweb. */
        topSites: Array<{
          /** The traffic rank position of the website. */
          rank: number;
          /** The ranked website domain. */
          domain: string;
        }>;
        /** The response metadata returned by Similarweb. */
        meta?: {
          /** The upstream response status string. */
          status?: string;
          /** The upstream query metadata. */
          query?: {
            /** Whether the upstream response used ascending order. */
            asc?: boolean;
            /** The sort field used by the upstream request. */
            sort?: string;
            /** The result limit used by the upstream request. */
            limit?: number;
            /** The result offset used by the upstream request. */
            offset?: number;
          };
          /** The upstream request metadata. */
          request?: {
            /** The state filter returned by Similarweb. */
            state?: string;
            /** The domain filter returned by Similarweb. */
            domain?: string;
            /** The response format returned by Similarweb. */
            format?: string;
            /** The country scope returned by Similarweb. */
            country?: string;
            /** The end month returned by Similarweb in YYYY-MM format. */
            endDate?: string;
            /** The start month returned by Similarweb in YYYY-MM format. */
            startDate?: string;
            /** Whether the upstream request asked for verified domains only. */
            showVerified?: boolean;
            /** Whether the upstream request was limited to main domains only. */
            mainDomainOnly?: boolean;
          };
          /** The date when Similarweb last updated the returned ranking data. */
          lastUpdated?: string;
        };
      };
    };
    /** Get the remaining Similarweb usage allowance for the connected API key. */
    "similarweb_digitalrank_api.get_subscription_status": {
      input: Record<string, never>;
      output: {
        /** The total data credits allocated to the API key. */
        allowance: number;
        /** The remaining Similarweb data credits for the API key. */
        userRemaining: number;
      };
    };
  }
}
