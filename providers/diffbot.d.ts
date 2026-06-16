import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Extract one public article URL with Diffbot and return a normalized article. */
    "diffbot.extract_article": {
      input: {
        /**
         * The public article URL to extract with Diffbot.
         * @format uri
         */
        url: string;
        /**
         * Optional Diffbot article fields to include in the response.
         * @minItems 1
         */
        fields?: Array<"links" | "extlinks" | "meta" | "querystring" | "breadcrumb" | "quotes">;
        /**
         * The upstream page retrieval timeout in milliseconds.
         * @minimum 1
         */
        timeout?: number;
        /**
         * The extra delay in milliseconds that Diffbot should wait before extracting the page.
         * @minimum 0
         */
        renderDelay?: number;
        /** The scrolling mode Diffbot should use to trigger lazy-loaded content. */
        scroll?: "fast" | "slow";
        /**
         * The custom proxy IP address Diffbot should use to fetch the target page.
         * @minLength 1
         */
        proxy?: string;
        /**
         * The proxy authentication string sent with the custom proxy.
         * @minLength 1
         */
        proxyAuth?: string;
        /** Whether Diffbot should force its default proxy or disable proxy usage. */
        useProxy?: "default" | "none";
        /** Whether Diffbot should automatically concatenate multi-page articles. */
        paging?: boolean;
        /**
         * The maximum number of auto-generated tags to return.
         * @minimum 0
         */
        maxTags?: number;
        /**
         * The minimum relevance score required for returned tags.
         * @minimum 0
         * @maximum 1
         */
        tagConfidence?: number;
        /**
         * The minimum relevance score required for returned categories.
         * @minimum 0
         * @maximum 1
         */
        categoryConfidence?: number;
        /** Whether Diffbot should extract article comments and discussions. */
        discussion?: boolean;
        /**
         * The Diffbot Natural Language features to enable for the article.
         * @minItems 1
         */
        naturalLanguage?: Array<"entities" | "sentiment" | "summary" | "facts" | "openFacts" | "records" | "categories" | "sentences" | "language">;
        /**
         * The maximum number of summary sentences when summary analysis is enabled.
         * @minimum 1
         */
        summaryNumSentences?: number;
      };
      output: {
        /** The request metadata returned by Diffbot for this extraction. */
        request: {
          /** The target page URL echoed by Diffbot. */
          pageUrl?: string;
          /** The Diffbot API family that handled the request. */
          api?: string;
          /** The Diffbot API version used for the request. */
          version?: number;
          [key: string]: unknown;
        } | null;
        /** The normalized primary article extracted from the response. */
        article: {
          /** The Diffbot object type for the extracted page. */
          type?: string;
          /** The extracted article title. */
          title?: string;
          /** The canonical page URL extracted from the article. */
          pageUrl?: string;
          /** The extracted plain text content of the article. */
          text?: string;
          /** The extracted article HTML content. */
          html?: string;
          /** The article publication date returned by Diffbot. */
          date?: string;
          /** The estimated article publication date returned by Diffbot. */
          estimatedDate?: string;
          /** The article sentiment score returned by Diffbot. */
          sentiment?: number;
          /** The primary author name returned by Diffbot. */
          author?: string;
          /** The primary author URL returned by Diffbot. */
          authorUrl?: string;
          /** The author objects returned by Diffbot. */
          authors?: Array<{
            /** The author name returned by Diffbot. */
            name?: string;
            /** The author profile link returned by Diffbot. */
            link?: string;
            [key: string]: unknown;
          }>;
          /** The site name returned by Diffbot. */
          siteName?: string;
          /** The publisher country returned by Diffbot. */
          publisherCountry?: string;
          /** The publisher region returned by Diffbot. */
          publisherRegion?: string;
          /** The language code returned by Diffbot. */
          humanLanguage?: string;
          /** The site icon URL returned by Diffbot. */
          icon?: string;
          /** The Diffbot object identifier for the article. */
          diffbotUri?: string;
          /** The images returned by Diffbot for the article. */
          images?: Array<{
            /** The image URL returned by Diffbot. */
            url?: string;
            /** The Diffbot image identifier. */
            diffbotUri?: string;
            /** The intrinsic image width in pixels. */
            naturalWidth?: number;
            /** The intrinsic image height in pixels. */
            naturalHeight?: number;
            /** The rendered image width in pixels. */
            width?: number;
            /** The rendered image height in pixels. */
            height?: number;
            [key: string]: unknown;
          }>;
          /** The topic tags returned by Diffbot. */
          tags?: Array<{
            /** The tag label returned by Diffbot. */
            label?: string;
            /** The relevance score returned for the tag. */
            score?: number;
            /** The sentiment score attached to the tag. */
            sentiment?: number;
            /** The number of mentions counted for the tag. */
            count?: number;
            /** The Diffbot entity URI for the tag when available. */
            uri?: string;
            /** The RDF types attached to the tag. */
            rdfTypes?: Array<string>;
            [key: string]: unknown;
          }>;
          /** The content categories returned by Diffbot. */
          categories?: Array<{
            /** The category identifier returned by Diffbot. */
            id?: string;
            /** The category label returned by Diffbot. */
            name?: string;
            /** The relevance score returned for the category. */
            score?: number;
            [key: string]: unknown;
          }>;
          /** The page metadata returned when the meta optional field is requested. */
          meta?: Record<string, unknown>;
          /** The parsed query string returned when the querystring optional field is requested. */
          querystring?: Record<string, unknown>;
          /** The breadcrumb items returned when the breadcrumb optional field is requested. */
          breadcrumb?: Array<unknown>;
          /** The page links returned when the links optional field is requested. */
          links?: Array<unknown>;
          /** The external links returned when the extlinks optional field is requested. */
          extlinks?: Array<unknown>;
          /** The extracted quotes returned when the quotes optional field is requested. */
          quotes?: Array<unknown>;
          /** The natural language analysis payload returned by Diffbot. */
          naturalLanguage?: Record<string, unknown>;
          /** The extracted discussion payload returned by Diffbot. */
          discussion?: Record<string, unknown>;
          [key: string]: unknown;
        } | null;
        /** The top-level language code returned by Diffbot. */
        humanLanguage?: string;
        /** The top-level Diffbot response type. */
        type?: string;
        /** The top-level page title returned by Diffbot. */
        title?: string;
      };
    };
  }
}
