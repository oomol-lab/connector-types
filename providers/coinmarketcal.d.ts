import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List available CoinMarketCal coins. */
    "coinmarketcal.list_coins": {
      input: Record<string, never>;
      output: {
        /** The status metadata returned by CoinMarketCal. */
        status: {
          /** CoinMarketCal error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCal when present. */
          error_message?: string | null;
          /** API credits used by the request. */
          credit_count?: number;
          /** Time spent by CoinMarketCal processing the request. */
          elapsed?: number;
          [key: string]: unknown;
        };
        /** The coins returned by CoinMarketCal. */
        coins: Array<{
          /** The unique identifier of the coin. */
          id: string;
          /** The short name of the coin. */
          name: string;
          /** The ticker symbol of the coin. */
          symbol: string;
          /** The full name of the coin. */
          fullname: string;
          /** The rank of the coin when present. */
          rank?: number;
          /** The number of popular events for the coin. */
          popular?: number;
          /** The number of trending events for the coin. */
          trending?: number;
          /** The number of upcoming events for the coin. */
          upcoming?: number;
          /** The hot index of the coin. */
          hot_index?: number;
          /** The number of catalyst events for the coin. */
          catalyst?: number;
          /** The number of influential events for the coin. */
          influential?: number;
        }>;
      };
    };
    /** List CoinMarketCal events confirmed by project representatives. */
    "coinmarketcal.list_confirmed_events": {
      input: {
        /**
         * The page number of the event list.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of events to return per page.
         * @minimum 1
         * @maximum 75
         */
        max?: number;
        /**
         * A comma-separated list of coin identifiers or slugs used to filter events.
         * @minLength 1
         */
        coins?: string;
        /**
         * A comma-separated list of category identifiers used to filter events.
         * @minLength 1
         */
        categories?: string;
        /**
         * The start date of the event filter in YYYY-MM-DD format.
         * @format date
         */
        dateRangeStart?: string;
        /**
         * The end date of the event filter in YYYY-MM-DD format.
         * @format date
         */
        dateRangeEnd?: string;
        /** Whether to include view counts in the event response. */
        showViews?: boolean;
        /** Whether to include vote data in the event response. */
        showVotes?: boolean;
        /** The translation language code used by the CoinMarketCal request. */
        translations?: "en" | "ko" | "ru" | "tr" | "ja" | "es" | "pl" | "pt" | "id";
      };
      output: {
        /** The status metadata returned by CoinMarketCal. */
        status: {
          /** CoinMarketCal error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCal when present. */
          error_message?: string | null;
          /** API credits used by the request. */
          credit_count?: number;
          /** Time spent by CoinMarketCal processing the request. */
          elapsed?: number;
          [key: string]: unknown;
        };
        /** The events returned by CoinMarketCal. */
        events: Array<{
          /** The unique identifier of the event. */
          id: number;
          /** The localized title object of the event. */
          title: {
            /** The English title of the event. */
            en?: string;
            [key: string]: unknown;
          };
          /** The coins associated with the event. */
          coins?: Array<{
            /** The unique identifier of the coin. */
            id: string;
            /** The short name of the coin. */
            name: string;
            /** The ticker symbol of the coin. */
            symbol: string;
            /** The full name of the coin. */
            fullname: string;
            /** The rank of the coin when present. */
            rank?: number;
            /** The number of popular events for the coin. */
            popular?: number;
            /** The number of trending events for the coin. */
            trending?: number;
            /** The number of upcoming events for the coin. */
            upcoming?: number;
            /** The hot index of the coin. */
            hot_index?: number;
            /** The number of catalyst events for the coin. */
            catalyst?: number;
            /** The number of influential events for the coin. */
            influential?: number;
          }>;
          /** The categories associated with the event. */
          categories?: Array<{
            /** The unique identifier of the event category. */
            id: number;
            /** The slug identifier of the event category. */
            slug: string;
            /** The display name of the event category. */
            name: string;
            /** The description of the event category. */
            description: string;
            /** The icon URL of the event category. */
            icon: string;
            /** Whether the category is a base category. */
            isBase: boolean;
            /** The parent category identifier when present. */
            parentId?: number;
            /** The sub-category identifiers of the category. */
            subCategories?: Array<number>;
          }>;
          /** The proof URL or source link of the event. */
          proof?: string;
          /** The source of the event. */
          source?: string;
          /** Whether the event is marked as hot. */
          is_hot?: boolean;
          /** Whether the event may occur before its announced date. */
          can_occur_before?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List available CoinMarketCal event categories. */
    "coinmarketcal.list_event_categories": {
      input: Record<string, never>;
      output: {
        /** The status metadata returned by CoinMarketCal. */
        status: {
          /** CoinMarketCal error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCal when present. */
          error_message?: string | null;
          /** API credits used by the request. */
          credit_count?: number;
          /** Time spent by CoinMarketCal processing the request. */
          elapsed?: number;
          [key: string]: unknown;
        };
        /** The event categories returned by CoinMarketCal. */
        categories: Array<{
          /** The unique identifier of the event category. */
          id: number;
          /** The slug identifier of the event category. */
          slug: string;
          /** The display name of the event category. */
          name: string;
          /** The description of the event category. */
          description: string;
          /** The icon URL of the event category. */
          icon: string;
          /** Whether the category is a base category. */
          isBase: boolean;
          /** The parent category identifier when present. */
          parentId?: number;
          /** The sub-category identifiers of the category. */
          subCategories?: Array<number>;
        }>;
      };
    };
    /** List CoinMarketCal events with optional filters. */
    "coinmarketcal.list_events": {
      input: {
        /**
         * The page number of the event list.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of events to return per page.
         * @minimum 1
         * @maximum 75
         */
        max?: number;
        /**
         * A comma-separated list of coin identifiers or slugs used to filter events.
         * @minLength 1
         */
        coins?: string;
        /**
         * A comma-separated list of category identifiers used to filter events.
         * @minLength 1
         */
        categories?: string;
        /**
         * The start date of the event filter in YYYY-MM-DD format.
         * @format date
         */
        dateRangeStart?: string;
        /**
         * The end date of the event filter in YYYY-MM-DD format.
         * @format date
         */
        dateRangeEnd?: string;
        /** Whether to include view counts in the event response. */
        showViews?: boolean;
        /** Whether to include vote data in the event response. */
        showVotes?: boolean;
        /** The translation language code used by the CoinMarketCal request. */
        translations?: "en" | "ko" | "ru" | "tr" | "ja" | "es" | "pl" | "pt" | "id";
        /** The sort order applied to the event list. */
        sortBy?: "created_desc" | "updated_desc" | "created_desc_and_updated_desc" | "trending_events" | "popular_events" | "influential_events" | "catalyst_events";
        /** The filter applied to keep only one event subset. */
        showOnly?: "trending_events" | "popular_events" | "firmed_date" | "confirmed_by_representatives";
      };
      output: {
        /** The status metadata returned by CoinMarketCal. */
        status: {
          /** CoinMarketCal error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCal when present. */
          error_message?: string | null;
          /** API credits used by the request. */
          credit_count?: number;
          /** Time spent by CoinMarketCal processing the request. */
          elapsed?: number;
          [key: string]: unknown;
        };
        /** The events returned by CoinMarketCal. */
        events: Array<{
          /** The unique identifier of the event. */
          id: number;
          /** The localized title object of the event. */
          title: {
            /** The English title of the event. */
            en?: string;
            [key: string]: unknown;
          };
          /** The coins associated with the event. */
          coins?: Array<{
            /** The unique identifier of the coin. */
            id: string;
            /** The short name of the coin. */
            name: string;
            /** The ticker symbol of the coin. */
            symbol: string;
            /** The full name of the coin. */
            fullname: string;
            /** The rank of the coin when present. */
            rank?: number;
            /** The number of popular events for the coin. */
            popular?: number;
            /** The number of trending events for the coin. */
            trending?: number;
            /** The number of upcoming events for the coin. */
            upcoming?: number;
            /** The hot index of the coin. */
            hot_index?: number;
            /** The number of catalyst events for the coin. */
            catalyst?: number;
            /** The number of influential events for the coin. */
            influential?: number;
          }>;
          /** The categories associated with the event. */
          categories?: Array<{
            /** The unique identifier of the event category. */
            id: number;
            /** The slug identifier of the event category. */
            slug: string;
            /** The display name of the event category. */
            name: string;
            /** The description of the event category. */
            description: string;
            /** The icon URL of the event category. */
            icon: string;
            /** Whether the category is a base category. */
            isBase: boolean;
            /** The parent category identifier when present. */
            parentId?: number;
            /** The sub-category identifiers of the category. */
            subCategories?: Array<number>;
          }>;
          /** The proof URL or source link of the event. */
          proof?: string;
          /** The source of the event. */
          source?: string;
          /** Whether the event is marked as hot. */
          is_hot?: boolean;
          /** Whether the event may occur before its announced date. */
          can_occur_before?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List CoinMarketCal events ranked by market attention or impact. */
    "coinmarketcal.list_ranked_events": {
      input: {
        /**
         * The page number of the event list.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of events to return per page.
         * @minimum 1
         * @maximum 75
         */
        max?: number;
        /**
         * A comma-separated list of coin identifiers or slugs used to filter events.
         * @minLength 1
         */
        coins?: string;
        /**
         * A comma-separated list of category identifiers used to filter events.
         * @minLength 1
         */
        categories?: string;
        /**
         * The start date of the event filter in YYYY-MM-DD format.
         * @format date
         */
        dateRangeStart?: string;
        /**
         * The end date of the event filter in YYYY-MM-DD format.
         * @format date
         */
        dateRangeEnd?: string;
        /** Whether to include view counts in the event response. */
        showViews?: boolean;
        /** Whether to include vote data in the event response. */
        showVotes?: boolean;
        /** The translation language code used by the CoinMarketCal request. */
        translations?: "en" | "ko" | "ru" | "tr" | "ja" | "es" | "pl" | "pt" | "id";
        /** The ranking mode mapped to the corresponding CoinMarketCal event feed. */
        ranking: "trending" | "popular" | "influential" | "catalyst";
      };
      output: {
        /** The status metadata returned by CoinMarketCal. */
        status: {
          /** CoinMarketCal error code where 0 indicates success. */
          error_code: number;
          /** Error message returned by CoinMarketCal when present. */
          error_message?: string | null;
          /** API credits used by the request. */
          credit_count?: number;
          /** Time spent by CoinMarketCal processing the request. */
          elapsed?: number;
          [key: string]: unknown;
        };
        /** The events returned by CoinMarketCal. */
        events: Array<{
          /** The unique identifier of the event. */
          id: number;
          /** The localized title object of the event. */
          title: {
            /** The English title of the event. */
            en?: string;
            [key: string]: unknown;
          };
          /** The coins associated with the event. */
          coins?: Array<{
            /** The unique identifier of the coin. */
            id: string;
            /** The short name of the coin. */
            name: string;
            /** The ticker symbol of the coin. */
            symbol: string;
            /** The full name of the coin. */
            fullname: string;
            /** The rank of the coin when present. */
            rank?: number;
            /** The number of popular events for the coin. */
            popular?: number;
            /** The number of trending events for the coin. */
            trending?: number;
            /** The number of upcoming events for the coin. */
            upcoming?: number;
            /** The hot index of the coin. */
            hot_index?: number;
            /** The number of catalyst events for the coin. */
            catalyst?: number;
            /** The number of influential events for the coin. */
            influential?: number;
          }>;
          /** The categories associated with the event. */
          categories?: Array<{
            /** The unique identifier of the event category. */
            id: number;
            /** The slug identifier of the event category. */
            slug: string;
            /** The display name of the event category. */
            name: string;
            /** The description of the event category. */
            description: string;
            /** The icon URL of the event category. */
            icon: string;
            /** Whether the category is a base category. */
            isBase: boolean;
            /** The parent category identifier when present. */
            parentId?: number;
            /** The sub-category identifiers of the category. */
            subCategories?: Array<number>;
          }>;
          /** The proof URL or source link of the event. */
          proof?: string;
          /** The source of the event. */
          source?: string;
          /** Whether the event is marked as hot. */
          is_hot?: boolean;
          /** Whether the event may occur before its announced date. */
          can_occur_before?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
