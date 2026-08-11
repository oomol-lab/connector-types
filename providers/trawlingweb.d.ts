import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search indexed news and blog publications through the TrawlingWeb News API. */
    "trawlingweb.search_news": {
      input: {
        /**
         * A Lucene-compatible search expression, including optional field filters and Boolean operators.
         * @minLength 1
         */
        query: string;
        /**
         * The ISO 3166-1 alpha-2 country preference required for safe Pay-per-Use billing.
         * @minLength 2
         * @maxLength 2
         */
        countryPreference: string;
        /**
         * The inclusive start timestamp in Unix milliseconds.
         * @minimum 0
         */
        fromTimestamp?: number;
        /**
         * The inclusive end timestamp in Unix milliseconds.
         * @minimum 0
         */
        toTimestamp?: number;
        /**
         * The maximum number of publications to return in this page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** The publication timestamp used to sort results. */
        sortBy?: "crawled" | "published";
        /** The result sort direction. */
        order?: "asc" | "desc";
      };
      output: {
        /** The publications returned for this page. */
        data: Array<{
          /** The publication identifier assigned by TrawlingWeb. */
          id: string;
          /** The publication title. */
          title: string;
          /** The publication body text. */
          text: string;
          /** The publication timestamp in ISO 8601 UTC format. */
          published: string;
          /** The crawl timestamp in Unix milliseconds. */
          crawled: number;
          /** The original publication URL. */
          url: string;
          /** The publication author when available. */
          author?: string;
          /** The publication language code. */
          language?: string;
          /** The domain where the publication was found. */
          domain?: string;
          /** The site where the publication was found. */
          site?: string;
          /** The content type assigned to the source site. */
          site_type?: string;
          /** The source site language code. */
          site_language?: string;
          /** The source site country code. */
          site_country?: string;
          /** The source site region code. */
          site_region?: string;
          /** The source site section containing the publication. */
          site_section?: string;
          /** The indexed publication section. */
          section?: string;
          /** The estimated economic value of the publication. */
          value?: number;
          /** The source domain rank. */
          rank?: number;
          /** The estimated unique visitor count. */
          unique_visitors?: number;
          /** The featured image URL when the add-on is enabled. */
          url_image?: string;
          [key: string]: unknown;
        }>;
        /** The number of subscription requests remaining after this call. */
        requestLeft?: number;
        /** The total number of publications matching the query. */
        totalResults?: number;
        /** The number of matching publications not yet delivered. */
        restResults?: number;
        /** Safe timestamp cursor values parsed from the upstream next URL. */
        nextCursor?: {
          /**
           * The start timestamp for the next page.
           * @minimum 0
           */
          fromTimestamp?: number;
          /**
           * The end timestamp for the next page.
           * @minimum 0
           */
          toTimestamp?: number;
        };
      };
    };
  }
}
