import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Resolve a location string to latitude and longitude with World News API. */
    "world_news_api.get_geo_coordinates": {
      input: {
        /**
         * The location text to geocode.
         * @minLength 1
         */
        location: string;
        /**
         * The language code used to localize the geocoding response.
         * @minLength 2
         * @maxLength 8
         */
        language?: string;
      };
      output: {
        /** The latitude coordinate resolved for the requested location. */
        latitude: number;
        /** The longitude coordinate resolved for the requested location. */
        longitude: number;
        /** The city name resolved for the requested location. */
        city?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve top-news clusters for one source country and optional language or date filters. */
    "world_news_api.get_top_news": {
      input: {
        /**
         * The source country code used to retrieve top news.
         * @minLength 2
         * @maxLength 2
         */
        sourceCountry: string;
        /**
         * The language code used to retrieve top news.
         * @minLength 2
         * @maxLength 8
         */
        language?: string;
        /**
         * The calendar date used to retrieve top news in YYYY-MM-DD format.
         * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))$
         * @format date
         */
        date?: string;
      };
      output: {
        /** The clustered top-news results. */
        top_news: Array<{
          /** The news items grouped into one top-news cluster. */
          news: Array<{
            /** The unique article identifier returned by World News API. */
            id: number;
            /** The article headline. */
            title: string;
            /** The full article text returned by World News API. */
            text?: string | null;
            /** The short article summary returned by World News API. */
            summary?: string | null;
            /** The canonical article URL. */
            url: string;
            /** The preview image URL returned by World News API. */
            image?: string | null;
            /** The preview video URL returned by World News API. */
            video?: string | null;
            /** The article publish timestamp. */
            publish_date: string;
            /** The primary author returned by World News API. */
            author?: string | null;
            /** The author names returned by World News API. */
            authors?: Array<string>;
            /** The language code associated with the article. */
            language?: string;
            /** The source country code associated with the article. */
            source_country?: string;
            /** The sentiment score returned by World News API. */
            sentiment?: number;
            /** The article category returned by World News API. */
            category?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The language used for the top-news response. */
        language: string;
        /** The country used for the top-news response. */
        country: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one or more articles by identifier from World News API. */
    "world_news_api.retrieve_news": {
      input: {
        /**
         * The article identifiers to retrieve.
         * @minItems 1
         */
        ids: Array<number>;
      };
      output: {
        /** The articles retrieved by identifier. */
        news: Array<{
          /** The unique article identifier returned by World News API. */
          id: number;
          /** The article headline. */
          title: string;
          /** The full article text returned by World News API. */
          text?: string | null;
          /** The short article summary returned by World News API. */
          summary?: string | null;
          /** The canonical article URL. */
          url: string;
          /** The preview image URL returned by World News API. */
          image?: string | null;
          /** The preview video URL returned by World News API. */
          video?: string | null;
          /** The article publish timestamp. */
          publish_date: string;
          /** The primary author returned by World News API. */
          author?: string | null;
          /** The author names returned by World News API. */
          authors?: Array<string>;
          /** The language code associated with the article. */
          language?: string;
          /** The source country code associated with the article. */
          source_country?: string;
          /** The sentiment score returned by World News API. */
          sentiment?: number;
          /** The article category returned by World News API. */
          category?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search news articles with World News API using the first-pass filtering subset. */
    "world_news_api.search_news": {
      input: {
        /**
         * Keywords or phrases used to search matching articles.
         * @minLength 1
         */
        text?: string;
        /**
         * The language code used to filter matching articles.
         * @minLength 2
         * @maxLength 8
         */
        language?: string;
        /**
         * A comma-separated list of source country codes used to filter matching articles.
         * @minLength 1
         */
        sourceCountries?: string;
        /**
         * A comma-separated list of categories used to filter matching articles.
         * @minLength 1
         */
        categories?: string;
        /**
         * The earliest publish date or timestamp accepted by World News API.
         * @minLength 1
         */
        earliestPublishDate?: string;
        /**
         * The latest publish date or timestamp accepted by World News API.
         * @minLength 1
         */
        latestPublishDate?: string;
        /**
         * A comma-separated list of source URLs used to filter matching articles.
         * @minLength 1
         */
        newsSources?: string;
        /**
         * A comma-separated list of author names used to filter matching articles.
         * @minLength 1
         */
        authors?: string;
        /**
         * A latitude,longitude,radius filter used to constrain matching articles by location.
         * @minLength 1
         */
        locationFilter?: string;
        /**
         * A comma-separated list of entity filters accepted by World News API.
         * @minLength 1
         */
        entities?: string;
        /** The sorting mode used for the article search request. */
        sort?: "publish-time" | "relevance";
        /** The sort direction used for the article search request. */
        sortDirection?: "asc" | "desc";
        /**
         * The minimum sentiment score accepted for matching articles.
         * @minimum -1
         * @maximum 1
         */
        minSentiment?: number;
        /**
         * The maximum sentiment score accepted for matching articles.
         * @minimum -1
         * @maximum 1
         */
        maxSentiment?: number;
        /**
         * The zero-based result offset for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of articles to return.
         * @minimum 1
         * @maximum 100
         */
        number?: number;
      };
      output: {
        /** The zero-based offset used for the current page. */
        offset: number;
        /** The number of items requested for the current page. */
        number: number;
        /** The total number of available articles matching the request. */
        available: number;
        /** The news articles returned by the request. */
        news: Array<{
          /** The unique article identifier returned by World News API. */
          id: number;
          /** The article headline. */
          title: string;
          /** The full article text returned by World News API. */
          text?: string | null;
          /** The short article summary returned by World News API. */
          summary?: string | null;
          /** The canonical article URL. */
          url: string;
          /** The preview image URL returned by World News API. */
          image?: string | null;
          /** The preview video URL returned by World News API. */
          video?: string | null;
          /** The article publish timestamp. */
          publish_date: string;
          /** The primary author returned by World News API. */
          author?: string | null;
          /** The author names returned by World News API. */
          authors?: Array<string>;
          /** The language code associated with the article. */
          language?: string;
          /** The source country code associated with the article. */
          source_country?: string;
          /** The sentiment score returned by World News API. */
          sentiment?: number;
          /** The article category returned by World News API. */
          category?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search World News API sources by name, language, or source country. */
    "world_news_api.search_news_sources": {
      input: {
        /**
         * The source name used to search matching news sources.
         * @minLength 1
         */
        name?: string;
        /**
         * The language code used to filter matching news sources.
         * @minLength 2
         * @maxLength 8
         */
        language?: string;
        /**
         * The source country code used to filter matching news sources.
         * @minLength 2
         * @maxLength 2
         */
        sourceCountry?: string;
      };
      output: {
        /** The total number of news sources matching the request. */
        available: number;
        /** The news sources returned by the request. */
        sources: Array<{
          /** The homepage URL of the news source. */
          url: string;
          /** The display name of the news source. */
          name: string;
          /** The language code of the news source. */
          language?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
