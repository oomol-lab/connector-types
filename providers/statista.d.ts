import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve chart data and metadata for a Statista statistic identifier. */
    "statista.get_statistic": {
      input: {
        /**
         * The Statista statistic identifier to retrieve.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A normalized Statista statistic data response. */
        statistic: {
          /** The Statista statistic identifier. */
          identifier: number;
          /** The statistic title returned by Statista. */
          title: string;
          /** The statistic subject summary. */
          subject: string;
          /** Whether Statista marks the statistic as premium content. */
          isPremium: boolean;
          /** The optional statistic description. */
          description: string | null;
          /** The Statista web URL for the statistic. */
          link: string;
          /** The statistic publication date when returned. */
          date: string | null;
          /** The Statista platform or locale value returned for the statistic. */
          platform: string;
          /** The statistic teaser image URLs. */
          teaserImageUrls: Array<{
            /** The image width in pixels. */
            width: number;
            /**
             * The image URL returned by Statista.
             * @minLength 1
             */
            src: string;
          }>;
          /** The Statista chart object including graph type and data points. */
          chart: Record<string, unknown>;
          /** The raw statistic data response returned by Statista. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Statista Consumer Insights survey questions and answer options. */
    "statista.search_consumer_insights": {
      input: {
        /**
         * The natural language or keyword query sent to Statista.
         * @minLength 1
         * @maxLength 1000
         */
        q: string;
        /**
         * The maximum number of search results returned by Statista.
         * @minimum 1
         * @maximum 25
         */
        size?: number;
      };
      output: {
        /** The Consumer Insights question results. */
        results: Array<{
          /** The Statista question identifier. */
          questionId: string;
          /** The short question indicator. */
          indicator: string;
          /** The question text shown to survey respondents. */
          label: string;
          /** The Statista question type. */
          questionType: string;
          /** The Statista metadata object for the question. */
          metadata: Record<string, unknown>;
          /** The answer options returned in the search result. */
          answersSubset: Array<{
            /** The Statista answer identifier. */
            answerId: string;
            /** The answer label. */
            label: string;
            /** The answer order returned by Statista. */
            order: number;
            /** The numeric answer code returned by Statista. */
            code: number;
            /** The raw answer object returned by Statista. */
            raw: Record<string, unknown>;
          }>;
          /** The number of available answer options. */
          totalAnswers: number;
          /** The raw Consumer Insights result returned by Statista. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Statista search response. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Statista Market Insights indicators using natural language or keywords. */
    "statista.search_market_insights_indicators": {
      input: {
        /**
         * The natural language or keyword query sent to Statista.
         * @minLength 1
         * @maxLength 1000
         */
        q: string;
        /**
         * The maximum number of search results returned by Statista.
         * @minimum 1
         * @maximum 25
         */
        size?: number;
      };
      output: {
        /** The Market Insights indicator results. */
        items: Array<{
          /** The Market Insights indicator identifier. */
          identifier: string;
          /** The indicator title returned by Statista. */
          title: string;
          /** The indicator subject summary. */
          subject: string;
          /** The indicator description when returned. */
          description: string | null;
          /** The Statista web URL for the indicator. */
          link: string;
          /** The indicator update date when returned. */
          updatedAt: string | null;
          /** The industries covered by this indicator. */
          industries: Array<Record<string, unknown>>;
          /** The timeframe covered by this indicator when returned. */
          coveredTimeframe: Record<string, unknown> | null;
          /** The geographic coverage map keyed by Statista geo code. */
          coveredGeos: Record<string, string> | null;
          /** The indicator market type when returned. */
          marketType: string | null;
          /** The indicator market type description when returned. */
          marketTypeDescription: string | null;
          /** The raw Market Insights indicator returned by Statista. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of matching indicators. */
        totalCount: number;
        /** The raw Statista search response. */
        raw: Record<string, unknown>;
      };
    };
    /** Search Statista statistics using natural language or keywords. */
    "statista.search_statistics": {
      input: {
        /**
         * The natural language or keyword query sent to Statista.
         * @minLength 1
         * @maxLength 1000
         */
        q?: string;
        /**
         * The number of results to skip before returning items.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of statistic search results returned by Statista.
         * @minimum 0
         */
        size?: number;
        /**
         * A Statista-supported date filter such as YYYY-MM-DD or an ISO 8601 datetime.
         * @minLength 1
         */
        date_from?: string;
        /**
         * A Statista-supported date filter such as YYYY-MM-DD or an ISO 8601 datetime.
         * @minLength 1
         */
        date_to?: string;
        /** Whether to restrict statistic results to premium or free content. */
        premium?: boolean;
      };
      output: {
        /** The statistic search results. */
        items: Array<{
          /** The Statista statistic identifier. */
          identifier: number;
          /** The statistic title returned by Statista. */
          title: string;
          /** The statistic subject summary. */
          subject: string;
          /** Whether Statista marks the statistic as premium content. */
          isPremium: boolean;
          /** The optional statistic description. */
          description: string | null;
          /** The Statista web URL for the statistic. */
          link: string;
          /** The statistic publication date when returned. */
          date: string | null;
          /** The Statista platform or locale value returned for the statistic. */
          platform: string;
          /** The statistic teaser image URLs. */
          teaserImageUrls: Array<{
            /** The image width in pixels. */
            width: number;
            /**
             * The image URL returned by Statista.
             * @minLength 1
             */
            src: string;
          }>;
          /** The optional ranking score returned by Statista. */
          rankingScore: number | null;
          /** The raw statistic search result returned by Statista. */
          raw: Record<string, unknown>;
        }>;
        /** The total number of matching statistic results. */
        totalCount: number;
        /** The optional Statista timing breakdown. */
        took: Record<string, unknown> | null;
        /** The raw Statista search response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
