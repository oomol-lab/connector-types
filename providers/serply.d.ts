import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search Google News through Serply and return feed-style article results. */
    "serply.google_news_search": {
      input: {
        /**
         * A URL-encoded query string such as q=openai or q=stock+market&num=10.
         * @minLength 1
         */
        query: string;
        /** The Serply proxy location used for the request. */
        proxyLocation?: "EU" | "CA" | "US" | "IE" | "GB" | "FR" | "DE" | "SE" | "IN" | "JP" | "KR" | "SG" | "AU" | "BR";
        /** The Serply X-User-Agent device mode used for the request. */
        userAgent?: "desktop" | "mobile";
      };
      output: {
        /** The Google News feed object returned by Serply. */
        feed: {
          /** The feed title returned by Serply. */
          title?: string;
          /** The feed generator returned by Serply. */
          generator?: string;
          /** The feed URL returned by Serply. */
          link?: string;
          /** The feed language returned by Serply. */
          language?: string;
          /** The feed publisher returned by Serply. */
          publisher?: string;
          /** The feed updated timestamp returned by Serply. */
          updated?: string;
          /** The news entries returned by Serply. */
          entries?: Array<{
            /** The article title returned by Serply. */
            title?: string;
            /** The article URL returned by Serply. */
            link?: string;
            /** The article summary returned by Serply. */
            summary?: string;
            /** The article published timestamp returned by Serply. */
            published?: string;
            /** The article source returned by Serply. */
            source?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        /** The entity objects returned by Serply. */
        entities?: Array<Record<string, unknown>>;
      };
    };
    /** Search Google Scholar through Serply and return academic result entries. */
    "serply.google_scholar_search": {
      input: {
        /**
         * A URL-encoded query string such as q=openai or q=stock+market&num=10.
         * @minLength 1
         */
        query: string;
        /** The Serply proxy location used for the request. */
        proxyLocation?: "EU" | "CA" | "US" | "IE" | "GB" | "FR" | "DE" | "SE" | "IN" | "JP" | "KR" | "SG" | "AU" | "BR";
        /** The Serply X-User-Agent device mode used for the request. */
        userAgent?: "desktop" | "mobile";
      };
      output: {
        /** The search results returned by Serply. */
        results: Array<{
          /** The result title returned by Serply. */
          title?: string;
          /** The result URL returned by Serply. */
          link?: string;
          /** The result description returned by Serply. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The total number of results returned by Serply. */
        total: number;
        /** The answer box strings returned by Serply. */
        answer?: Array<string> | null;
        /** The request timestamp returned by Serply. */
        ts?: number;
        /** The device region returned by Serply. */
        device_region?: string;
        /** The device type returned by Serply. */
        device_type?: string;
      };
    };
    /** Search Google through Serply and return web search results in JSON format. */
    "serply.google_search": {
      input: {
        /**
         * A URL-encoded query string such as q=openai or q=stock+market&num=10.
         * @minLength 1
         */
        query: string;
        /** The Serply proxy location used for the request. */
        proxyLocation?: "EU" | "CA" | "US" | "IE" | "GB" | "FR" | "DE" | "SE" | "IN" | "JP" | "KR" | "SG" | "AU" | "BR";
        /** The Serply X-User-Agent device mode used for the request. */
        userAgent?: "desktop" | "mobile";
      };
      output: {
        /** The search results returned by Serply. */
        results: Array<{
          /** The result title returned by Serply. */
          title?: string;
          /** The result URL returned by Serply. */
          link?: string;
          /** The result description returned by Serply. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The total number of results returned by Serply. */
        total: number;
        /** The answer box strings returned by Serply. */
        answer?: Array<string> | null;
        /** The request timestamp returned by Serply. */
        ts?: number;
        /** The device region returned by Serply. */
        device_region?: string;
        /** The device type returned by Serply. */
        device_type?: string;
      };
    };
    /** Search Google Video through Serply and return video search results. */
    "serply.google_video_search": {
      input: {
        /**
         * A URL-encoded query string such as q=openai or q=stock+market&num=10.
         * @minLength 1
         */
        query: string;
        /** The Serply proxy location used for the request. */
        proxyLocation?: "EU" | "CA" | "US" | "IE" | "GB" | "FR" | "DE" | "SE" | "IN" | "JP" | "KR" | "SG" | "AU" | "BR";
        /** The Serply X-User-Agent device mode used for the request. */
        userAgent?: "desktop" | "mobile";
      };
      output: {
        /** The search results returned by Serply. */
        results: Array<{
          /** The result title returned by Serply. */
          title?: string;
          /** The result URL returned by Serply. */
          link?: string;
          /** The result description returned by Serply. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The total number of results returned by Serply. */
        total: number;
        /** The answer box strings returned by Serply. */
        answer?: Array<string> | null;
        /** The request timestamp returned by Serply. */
        ts?: number;
        /** The device region returned by Serply. */
        device_region?: string;
        /** The device type returned by Serply. */
        device_type?: string;
      };
    };
  }
}
