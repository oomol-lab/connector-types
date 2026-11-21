import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search Bing and get organic results with their position, title, link and snippet. */
    "autom.bing_search": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Bing market code (e.g., "en-US").
         * @minLength 1
         */
        market?: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page (e.g., 10).
         * @minimum 1
         */
        numResults?: number;
      };
      output: {
        /** Organic results. */
        organic_results?: Array<{
          /** Position of the result on the page. */
          position?: number | null;
          /** Title of the result. */
          title?: string | null;
          /** URL of the result. */
          link?: string | null;
          /** Domain of the result. */
          domain?: string | null;
          /** Link as the search engine displays it. */
          displayed_link?: string | null;
          /** Source or site name. */
          source?: string | null;
          /** Snippet shown under the title. */
          snippet?: string | null;
          /** Date shown with the result, when there is one. */
          date?: string | null;
          [key: string]: unknown;
        }>;
        /** Search information returned by Autom. */
        search_information?: {
          /** Estimated total number of results. */
          total_results?: number | null;
          [key: string]: unknown;
        };
        /** Pagination returned by Autom. */
        pagination?: {
          /** Whether another page of results exists. */
          has_next_page?: boolean | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Brave's web index and get organic results with their position, title, link and snippet. */
    "autom.brave_search": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Two-letter country code to search from (e.g., "us").
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter language code of the results (e.g., "en").
         * @minLength 1
         */
        language?: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Organic results. */
        organic_results?: Array<{
          /** Position of the result on the page. */
          position?: number | null;
          /** Title of the result. */
          title?: string | null;
          /** URL of the result. */
          link?: string | null;
          /** Domain of the result. */
          domain?: string | null;
          /** Link as the search engine displays it. */
          displayed_link?: string | null;
          /** Source or site name. */
          source?: string | null;
          /** Snippet shown under the title. */
          snippet?: string | null;
          /** Date shown with the result, when there is one. */
          date?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search DuckDuckGo and get organic results with their position, title, link and snippet. */
    "autom.duckduckgo_search": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Two-letter country code to search from (e.g., "us").
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter language code of the results (e.g., "en").
         * @minLength 1
         */
        language?: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Organic results. */
        organic_results?: Array<{
          /** Position of the result on the page. */
          position?: number | null;
          /** Title of the result. */
          title?: string | null;
          /** URL of the result. */
          link?: string | null;
          /** Domain of the result. */
          domain?: string | null;
          /** Link as the search engine displays it. */
          displayed_link?: string | null;
          /** Source or site name. */
          source?: string | null;
          /** Snippet shown under the title. */
          snippet?: string | null;
          /** Date shown with the result, when there is one. */
          date?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search supported Google countries in Autom and return matching country codes. */
    "autom.find_google_countries": {
      input: {
        /**
         * Search text used to filter Autom finder results.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The matching Google countries. */
        countries: Array<{
          /** The Google country code. */
          country_code: string;
          /** The Google country name. */
          country_name: string;
        }>;
      };
    };
    /** Search supported Google languages in Autom and return matching language codes. */
    "autom.find_google_languages": {
      input: {
        /**
         * Search text used to filter Autom finder results.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The matching Google languages. */
        languages: Array<{
          /** The Google language code. */
          language_code: string;
          /** The Google language name. */
          language_name: string;
        }>;
      };
    };
    /** Search supported Google locations in Autom and return matching location IDs. */
    "autom.find_google_locations": {
      input: {
        /**
         * Search text used to filter Autom finder results.
         * @minLength 1
         */
        query: string;
      };
      output: {
        /** The matching Google locations. */
        locations: Array<{
          /** The Autom location identifier. */
          id: string;
          /** The location GPS coordinates as latitude and longitude. */
          gps: Array<number>;
          /** The location name. */
          name: string;
          /** The estimated Google reach for the location. */
          reach: number;
          /** The Google location identifier. */
          google_id: number;
          /** The Google target type. */
          target_type: string;
          /** The Google country code for the location. */
          country_code: string;
          /** The canonical Google location name. */
          canonical_name: string;
        }>;
      };
    };
    /** Get current Autom credit usage, subscription quota, rate limits, account metadata, and API key metadata. */
    "autom.get_usage": {
      input: Record<string, never>;
      output: {
        /** Credits available right now. */
        remaining: number;
        /** Credits consumed in the current billing period. */
        total_used: number;
        /** The ISO 8601 date when the subscription renews. */
        renewal_date: string;
        /** The current Autom billing period. */
        period: {
          /** The start date of the current billing period. */
          start: string;
          /** The end date of the current billing period. */
          end: string;
        };
        /** Autom subscription quota usage. */
        subscription: {
          /** The number of subscription calls used in the current billing period. */
          used: number;
          /** The subscription call quota for the current billing period. */
          total: number;
          /** The number of subscription calls remaining. */
          remaining: number;
          /** The percentage of subscription quota consumed. */
          percent_used: number;
        };
        /** Autom extra credit usage. */
        credits: {
          /** The number of extra credits added to the account. */
          given: number;
          /** The number of extra credits consumed. */
          consumed: number;
          /** The number of extra credits remaining. */
          remaining: number;
          /** The percentage of extra credits consumed when returned. */
          percent_used?: number;
          [key: string]: unknown;
        };
        /** Autom account rate limits. */
        rate_limit: {
          /** The requests-per-minute limit, or null when unlimited. */
          per_minute: number | null;
          /** The requests-per-second limit, or null when unlimited. */
          per_second: number | null;
        };
        /** Autom account metadata. */
        account: {
          /** The Autom account name. */
          name: string;
          /** The Autom account slug. */
          slug: string;
        };
        /** Autom API key metadata. */
        api_key: {
          /** The friendly API key alias. */
          alias: string;
          /** Whether the API key is active. */
          active: boolean;
          /** The API key category. */
          category: string;
          /** The API key expiry date, or null when it never expires. */
          expires: string | null;
          /** Custom per-key quotas. */
          quotas: {
            /** The configured per-key quota, or null when unlimited. */
            total?: number | null;
            /** The configured per-key quota, or null when unlimited. */
            daily?: number | null;
            /** The configured per-key quota, or null when unlimited. */
            weekly?: number | null;
            /** The configured per-key quota, or null when unlimited. */
            monthly?: number | null;
            [key: string]: unknown;
          };
        };
      };
    };
    /** Get the Google Search autocomplete suggestions for a partial query. */
    "autom.google_autocomplete": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Two-letter country code to search from (e.g., "us").
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter language code of the results (e.g., "en").
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Autocomplete suggestions. */
        suggestions?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Search Google Maps and get places with address, website, phone number and coordinates. */
    "autom.google_maps": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Two-letter country code to search from (e.g., "us").
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter language code of the results (e.g., "en").
         * @minLength 1
         */
        language?: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Places found on Google Maps */
        places: Array<{
          /** Name of the place. */
          title?: string | null;
          /** Address of the place. */
          address?: string | null;
          /** Website of the place. */
          website?: string | null;
          /** Phone number of the place. */
          phone_number?: string | null;
          /** Latitude. */
          lat?: number | null;
          /** Longitude. */
          long?: number | null;
          /** Google Maps feature ID of the place. */
          fid?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Google News and get articles with title, source, date, link and snippet. */
    "autom.google_news": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Two-letter country code to search from (e.g., "us").
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter language code of the results (e.g., "en").
         * @minLength 1
         */
        language?: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page (e.g., 10).
         * @minimum 1
         */
        numResults?: number;
      };
      output: {
        /** News articles. */
        organic_results?: Array<{
          /** Position of the result on the page. */
          position?: number | null;
          /** Title of the result. */
          title?: string | null;
          /** URL of the result. */
          link?: string | null;
          /** Domain of the result. */
          domain?: string | null;
          /** Link as the search engine displays it. */
          displayed_link?: string | null;
          /** Source or site name. */
          source?: string | null;
          /** Snippet shown under the title. */
          snippet?: string | null;
          /** Date shown with the result, when there is one. */
          date?: string | null;
          [key: string]: unknown;
        }>;
        /** Pagination returned by Autom. */
        pagination?: {
          /** Whether another page of results exists. */
          has_next_page?: boolean | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Google and get organic results with their position, title, link and snippet, the knowledge graph and the estimated total. */
    "autom.google_search": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Two-letter country code to search from (e.g., "us").
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter language code of the results (e.g., "en").
         * @minLength 1
         */
        language?: string;
        /**
         * Google advanced filters, such as "qdr:d" for the past day.
         * @minLength 1
         */
        tbs?: string;
        /** Google SafeSearch setting. Omit to use Google's default. */
        safe?: "active" | "off";
        /**
         * Google location name to search from, as Find Google Locations returns it (e.g., "Paris,Paris,Ile-de-France,France").
         * @minLength 1
         */
        location?: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page (e.g., 10).
         * @minimum 1
         */
        numResults?: number;
      };
      output: {
        /** Organic results. */
        organic_results?: Array<{
          /** Position of the result on the page. */
          position?: number | null;
          /** Title of the result. */
          title?: string | null;
          /** URL of the result. */
          link?: string | null;
          /** Domain of the result. */
          domain?: string | null;
          /** Link as the search engine displays it. */
          displayed_link?: string | null;
          /** Source or site name. */
          source?: string | null;
          /** Snippet shown under the title. */
          snippet?: string | null;
          /** Date shown with the result, when there is one. */
          date?: string | null;
          [key: string]: unknown;
        }>;
        /** Knowledge graph panel, when Google shows one. */
        knowledge_graph?: {
          /** Title of the entity. */
          title?: string | null;
          /** Type of the entity. */
          type?: string | null;
          /** Website of the entity. */
          website?: string | null;
          [key: string]: unknown;
        };
        /** Search information returned by Autom. */
        search_information?: {
          /** Estimated total number of results. */
          total_results?: number | null;
          [key: string]: unknown;
        };
        /** Pagination returned by Autom. */
        pagination?: {
          /** Whether another page of results exists. */
          has_next_page?: boolean | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search Google and get only the organic results, the fastest and cheapest Google search. */
    "autom.google_search_light": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Two-letter country code to search from (e.g., "us").
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter language code of the results (e.g., "en").
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Organic results. */
        organic_results?: Array<{
          /** Position of the result on the page. */
          position?: number | null;
          /** Title of the result. */
          title?: string | null;
          /** URL of the result. */
          link?: string | null;
          /** Domain of the result. */
          domain?: string | null;
          /** Link as the search engine displays it. */
          displayed_link?: string | null;
          /** Source or site name. */
          source?: string | null;
          /** Snippet shown under the title. */
          snippet?: string | null;
          /** Date shown with the result, when there is one. */
          date?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search Yahoo and get organic results with their position, title, link and snippet. */
    "autom.yahoo_search": {
      input: {
        /**
         * Search query (e.g., "best electric cars").
         * @minLength 1
         */
        query: string;
        /**
         * Two-letter country code to search from (e.g., "us").
         * @minLength 1
         */
        country?: string;
        /**
         * Two-letter language code of the results (e.g., "en").
         * @minLength 1
         */
        language?: string;
        /**
         * Page of results, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Organic results. */
        organic_results?: Array<{
          /** Position of the result on the page. */
          position?: number | null;
          /** Title of the result. */
          title?: string | null;
          /** URL of the result. */
          link?: string | null;
          /** Domain of the result. */
          domain?: string | null;
          /** Link as the search engine displays it. */
          displayed_link?: string | null;
          /** Source or site name. */
          source?: string | null;
          /** Snippet shown under the title. */
          snippet?: string | null;
          /** Date shown with the result, when there is one. */
          date?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
