import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a citation-backed answer from Exa search results. */
    "exa.answer": {
      input: {
        /**
         * The question or prompt Exa should answer.
         * @minLength 1
         */
        query: string;
        /** Whether citations should include the full source text. */
        text?: boolean;
      };
      output: {
        /** The answer content returned by Exa. */
        answer?: string | Record<string, unknown>;
        /** The citations supporting the Exa answer. */
        citations: Array<{
          /** The temporary document ID for the citation. */
          id: string;
          /** The citation source URL. */
          url: string;
          /** The citation source title. */
          title?: string;
          /** The citation source author. */
          author?: string | null;
          /** The citation source publication timestamp. */
          publishedDate?: string | null;
          /** The citation source text content. */
          text?: string;
          /** The citation source image URL. */
          image?: string;
          /** The citation source favicon URL. */
          favicon?: string;
        }>;
        /** The Exa cost metadata for this request. */
        costDollars?: {
          /** The total request cost in US dollars. */
          total: number;
          /** The list of per-operation cost breakdown items. */
          breakDown?: Array<{
            /** The dollar cost attributed to search operations. */
            search?: number;
            /** The dollar cost attributed to content operations. */
            contents?: number;
            /** A more detailed cost breakdown returned by Exa. */
            breakdown?: Record<string, unknown>;
          }>;
          /** The standard Exa per-request pricing metadata. */
          perRequestPrices?: Record<string, unknown>;
          /** The standard Exa per-page pricing metadata. */
          perPagePrices?: Record<string, unknown>;
        };
      };
    };
    /** Find pages similar to a given URL and optionally enrich them with contents. */
    "exa.find_similar": {
      input: {
        /**
         * The URL used to find similar pages.
         * @format uri
         */
        url: string;
        /** Whether to exclude results from the same domain as the input URL. */
        excludeSourceDomain?: boolean;
        /**
         * The number of similar results to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        numResults?: number;
        /**
         * Only return results from these domains.
         * @minItems 1
         */
        includeDomains?: Array<string>;
        /**
         * Exclude results from these domains.
         * @minItems 1
         */
        excludeDomains?: Array<string>;
        /**
         * Only return results crawled after this timestamp.
         * @format date-time
         */
        startCrawlDate?: string;
        /**
         * Only return results crawled before this timestamp.
         * @format date-time
         */
        endCrawlDate?: string;
        /**
         * Only return results published after this timestamp.
         * @format date-time
         */
        startPublishedDate?: string;
        /**
         * Only return results published before this timestamp.
         * @format date-time
         */
        endPublishedDate?: string;
        /**
         * Phrases that must appear in the result text.
         * @minItems 1
         */
        includeText?: Array<string>;
        /**
         * Phrases that must not appear in the result text.
         * @minItems 1
         */
        excludeText?: Array<string>;
        /** Whether Exa should filter unsafe content from results. */
        moderation?: boolean;
        /** The Exa contents request object. */
        contents?: {
          /** The text value. */
          text?: boolean | {
            /**
             * The maximum number of characters to return for extracted text.
             * @minimum 1
             */
            maxCharacters?: number;
            /** Whether Exa should preserve HTML tags in extracted text. */
            includeHtmlTags?: boolean;
            /** The verbosity level for extracted page text. */
            verbosity?: "compact" | "standard" | "full";
            /**
             * Only include content from these semantic page sections.
             * @minItems 1
             */
            includeSections?: Array<"header" | "navigation" | "banner" | "body" | "sidebar" | "footer" | "metadata">;
            /**
             * Exclude content from these semantic page sections.
             * @minItems 1
             */
            excludeSections?: Array<"header" | "navigation" | "banner" | "body" | "sidebar" | "footer" | "metadata">;
          };
          /** The highlights value. */
          highlights?: boolean | {
            /**
             * The maximum number of characters to return across highlights.
             * @minimum 1
             */
            maxCharacters?: number;
            /**
             * Deprecated by Exa. The number of sentences to include in each highlight snippet.
             * @minimum 1
             */
            numSentences?: number;
            /**
             * Deprecated by Exa. The number of highlight snippets to return per URL.
             * @minimum 1
             */
            highlightsPerUrl?: number;
            /**
             * A custom query that guides Exa highlight selection.
             * @minLength 1
             */
            query?: string;
          };
          /** Configuration for an Exa summary response. */
          summary?: {
            /**
             * A custom query that guides Exa summary generation.
             * @minLength 1
             */
            query?: string;
            /** A JSON Schema object used for structured Exa summaries. */
            schema?: Record<string, unknown>;
          };
          /**
           * The livecrawl timeout in milliseconds.
           * @minimum 0
           */
          livecrawlTimeout?: number;
          /** Maximum age of cached content in hours. Use -1 to always use cache, 0 to always livecrawl, or a positive integer to require fresher content. */
          maxAgeHours?: -1 | number;
          /**
           * The maximum number of subpages Exa should crawl per result.
           * @minimum 0
           */
          subpages?: number;
          /** Keywords Exa should use when selecting subpages. */
          subpageTarget?: string | Array<string>;
          /** Additional Exa extraction options. */
          extras?: {
            /**
             * The maximum number of webpage links to return for each result.
             * @minimum 0
             */
            links?: number;
            /**
             * The maximum number of image links to return for each result.
             * @minimum 0
             */
            imageLinks?: number;
          };
        };
      };
      output: {
        /** The unique identifier for this Exa request. */
        requestId: string;
        /** The Exa similar-page results. */
        results: Array<{
          /** The temporary Exa document identifier. */
          id: string;
          /** The result URL. */
          url?: string;
          /** The result title. */
          title?: string;
          /** The estimated publication timestamp for the result. */
          publishedDate?: string | null;
          /** The result author. */
          author?: string | null;
          /** The result relevance score. */
          score?: number | null;
          /** The image URL associated with the result. */
          image?: string;
          /** The favicon URL associated with the result domain. */
          favicon?: string;
          /** The extracted result text. */
          text?: string;
          /** The extracted highlight snippets. */
          highlights?: Array<string>;
          /** The relevance score for each highlight snippet. */
          highlightScores?: Array<number>;
          /** The generated result summary. */
          summary?: string;
          /** The subpages returned for this result. */
          subpages?: Array<unknown>;
          /** Additional Exa extras data returned for this result. */
          extras?: Record<string, unknown>;
          /** Structured Exa entities returned for this result. */
          entities?: Array<Record<string, unknown>>;
        }>;
        /** The Exa cost metadata for this request. */
        costDollars?: {
          /** The total request cost in US dollars. */
          total: number;
          /** The list of per-operation cost breakdown items. */
          breakDown?: Array<{
            /** The dollar cost attributed to search operations. */
            search?: number;
            /** The dollar cost attributed to content operations. */
            contents?: number;
            /** A more detailed cost breakdown returned by Exa. */
            breakdown?: Record<string, unknown>;
          }>;
          /** The standard Exa per-request pricing metadata. */
          perRequestPrices?: Record<string, unknown>;
          /** The standard Exa per-page pricing metadata. */
          perPagePrices?: Record<string, unknown>;
        };
      };
    };
    /** Fetch text, highlights, or summaries from Exa for URLs or document IDs. */
    "exa.get_contents": {
      input: {
        /**
         * The list of URLs to retrieve content for.
         * @minItems 1
         */
        urls: Array<string>;
        /**
         * Deprecated. A backward-compatibility list of Exa document IDs.
         * @minItems 1
         */
        ids?: Array<string>;
        /** The text value. */
        text?: boolean | {
          /**
           * The maximum number of characters to return for extracted text.
           * @minimum 1
           */
          maxCharacters?: number;
          /** Whether Exa should preserve HTML tags in extracted text. */
          includeHtmlTags?: boolean;
          /** The verbosity level for extracted page text. */
          verbosity?: "compact" | "standard" | "full";
          /**
           * Only include content from these semantic page sections.
           * @minItems 1
           */
          includeSections?: Array<"header" | "navigation" | "banner" | "body" | "sidebar" | "footer" | "metadata">;
          /**
           * Exclude content from these semantic page sections.
           * @minItems 1
           */
          excludeSections?: Array<"header" | "navigation" | "banner" | "body" | "sidebar" | "footer" | "metadata">;
        };
        /** The highlights value. */
        highlights?: boolean | {
          /**
           * The maximum number of characters to return across highlights.
           * @minimum 1
           */
          maxCharacters?: number;
          /**
           * Deprecated by Exa. The number of sentences to include in each highlight snippet.
           * @minimum 1
           */
          numSentences?: number;
          /**
           * Deprecated by Exa. The number of highlight snippets to return per URL.
           * @minimum 1
           */
          highlightsPerUrl?: number;
          /**
           * A custom query that guides Exa highlight selection.
           * @minLength 1
           */
          query?: string;
        };
        /** Configuration for an Exa summary response. */
        summary?: {
          /**
           * A custom query that guides Exa summary generation.
           * @minLength 1
           */
          query?: string;
          /** A JSON Schema object used for structured Exa summaries. */
          schema?: Record<string, unknown>;
        };
        /**
         * The livecrawl timeout in milliseconds.
         * @minimum 0
         */
        livecrawlTimeout?: number;
        /** Maximum age of cached content in hours. Use -1 to always use cache, 0 to always livecrawl, or a positive integer to require fresher content. */
        maxAgeHours?: -1 | number;
        /**
         * The maximum number of subpages Exa should crawl per result.
         * @minimum 0
         */
        subpages?: number;
        /** Keywords Exa should use when selecting subpages. */
        subpageTarget?: string | Array<string>;
        /** Additional Exa extraction options. */
        extras?: {
          /**
           * The maximum number of webpage links to return for each result.
           * @minimum 0
           */
          links?: number;
          /**
           * The maximum number of image links to return for each result.
           * @minimum 0
           */
          imageLinks?: number;
        };
      };
      output: {
        /** The unique identifier for this Exa request. */
        requestId: string;
        /** The Exa content results returned successfully. */
        results: Array<{
          /** The temporary Exa document identifier. */
          id: string;
          /** The result URL. */
          url?: string;
          /** The result title. */
          title?: string;
          /** The estimated publication timestamp for the result. */
          publishedDate?: string | null;
          /** The result author. */
          author?: string | null;
          /** The result relevance score. */
          score?: number | null;
          /** The image URL associated with the result. */
          image?: string;
          /** The favicon URL associated with the result domain. */
          favicon?: string;
          /** The extracted result text. */
          text?: string;
          /** The extracted highlight snippets. */
          highlights?: Array<string>;
          /** The relevance score for each highlight snippet. */
          highlightScores?: Array<number>;
          /** The generated result summary. */
          summary?: string;
          /** The subpages returned for this result. */
          subpages?: Array<unknown>;
          /** Additional Exa extras data returned for this result. */
          extras?: Record<string, unknown>;
          /** Structured Exa entities returned for this result. */
          entities?: Array<Record<string, unknown>>;
        }>;
        /** The fetch status for each requested input item. */
        statuses?: Array<{
          /** The URL or document ID associated with this contents status. */
          id: string;
          /** The fetch status for this contents item. */
          status: "success" | "error";
          /** The error details when the contents item failed. */
          error?: {
            /** The error tag for a failed Exa contents item. */
            tag: string;
            /** The HTTP status code associated with the failed item. */
            httpStatusCode?: number | null;
          } | null;
        }>;
        /** The Exa cost metadata for this request. */
        costDollars?: {
          /** The total request cost in US dollars. */
          total: number;
          /** The list of per-operation cost breakdown items. */
          breakDown?: Array<{
            /** The dollar cost attributed to search operations. */
            search?: number;
            /** The dollar cost attributed to content operations. */
            contents?: number;
            /** A more detailed cost breakdown returned by Exa. */
            breakdown?: Record<string, unknown>;
          }>;
          /** The standard Exa per-request pricing metadata. */
          perRequestPrices?: Record<string, unknown>;
          /** The standard Exa per-page pricing metadata. */
          perPagePrices?: Record<string, unknown>;
        };
      };
    };
    /** Search the web with Exa and optionally enrich each result with contents. */
    "exa.search": {
      input: {
        /**
         * The search query to send to Exa.
         * @minLength 1
         */
        query: string;
        /**
         * Additional query variations to use with deep or deep-reasoning search.
         * @minItems 1
         */
        additionalQueries?: Array<string>;
        /** The Exa search mode to execute. */
        type?: "neural" | "fast" | "auto" | "deep" | "deep-reasoning" | "instant";
        /** The Exa category used to narrow search results. */
        category?: "company" | "research paper" | "news" | "pdf" | "github" | "personal site" | "people" | "financial report";
        /**
         * The number of search results to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        numResults?: number;
        /**
         * Only return results from these domains.
         * @minItems 1
         */
        includeDomains?: Array<string>;
        /**
         * Exclude results from these domains.
         * @minItems 1
         */
        excludeDomains?: Array<string>;
        /**
         * Only return results crawled after this timestamp.
         * @format date-time
         */
        startCrawlDate?: string;
        /**
         * Only return results crawled before this timestamp.
         * @format date-time
         */
        endCrawlDate?: string;
        /**
         * Only return results published after this timestamp.
         * @format date-time
         */
        startPublishedDate?: string;
        /**
         * Only return results published before this timestamp.
         * @format date-time
         */
        endPublishedDate?: string;
        /**
         * Phrases that must appear in the result text.
         * @minItems 1
         */
        includeText?: Array<string>;
        /**
         * Phrases that must not appear in the result text.
         * @minItems 1
         */
        excludeText?: Array<string>;
        /**
         * A two-letter ISO country code used to localize search results.
         * @minLength 2
         * @maxLength 2
         */
        userLocation?: string;
        /** Whether Exa should filter unsafe content from results. */
        moderation?: boolean;
        /** The Exa contents request object. */
        contents?: {
          /** The text value. */
          text?: boolean | {
            /**
             * The maximum number of characters to return for extracted text.
             * @minimum 1
             */
            maxCharacters?: number;
            /** Whether Exa should preserve HTML tags in extracted text. */
            includeHtmlTags?: boolean;
            /** The verbosity level for extracted page text. */
            verbosity?: "compact" | "standard" | "full";
            /**
             * Only include content from these semantic page sections.
             * @minItems 1
             */
            includeSections?: Array<"header" | "navigation" | "banner" | "body" | "sidebar" | "footer" | "metadata">;
            /**
             * Exclude content from these semantic page sections.
             * @minItems 1
             */
            excludeSections?: Array<"header" | "navigation" | "banner" | "body" | "sidebar" | "footer" | "metadata">;
          };
          /** The highlights value. */
          highlights?: boolean | {
            /**
             * The maximum number of characters to return across highlights.
             * @minimum 1
             */
            maxCharacters?: number;
            /**
             * Deprecated by Exa. The number of sentences to include in each highlight snippet.
             * @minimum 1
             */
            numSentences?: number;
            /**
             * Deprecated by Exa. The number of highlight snippets to return per URL.
             * @minimum 1
             */
            highlightsPerUrl?: number;
            /**
             * A custom query that guides Exa highlight selection.
             * @minLength 1
             */
            query?: string;
          };
          /** Configuration for an Exa summary response. */
          summary?: {
            /**
             * A custom query that guides Exa summary generation.
             * @minLength 1
             */
            query?: string;
            /** A JSON Schema object used for structured Exa summaries. */
            schema?: Record<string, unknown>;
          };
          /**
           * The livecrawl timeout in milliseconds.
           * @minimum 0
           */
          livecrawlTimeout?: number;
          /** Maximum age of cached content in hours. Use -1 to always use cache, 0 to always livecrawl, or a positive integer to require fresher content. */
          maxAgeHours?: -1 | number;
          /**
           * The maximum number of subpages Exa should crawl per result.
           * @minimum 0
           */
          subpages?: number;
          /** Keywords Exa should use when selecting subpages. */
          subpageTarget?: string | Array<string>;
          /** Additional Exa extraction options. */
          extras?: {
            /**
             * The maximum number of webpage links to return for each result.
             * @minimum 0
             */
            links?: number;
            /**
             * The maximum number of image links to return for each result.
             * @minimum 0
             */
            imageLinks?: number;
          };
        };
      };
      output: {
        /** The unique identifier for this Exa request. */
        requestId: string;
        /** The Exa search results. */
        results: Array<{
          /** The temporary Exa document identifier. */
          id: string;
          /** The result URL. */
          url?: string;
          /** The result title. */
          title?: string;
          /** The estimated publication timestamp for the result. */
          publishedDate?: string | null;
          /** The result author. */
          author?: string | null;
          /** The result relevance score. */
          score?: number | null;
          /** The image URL associated with the result. */
          image?: string;
          /** The favicon URL associated with the result domain. */
          favicon?: string;
          /** The extracted result text. */
          text?: string;
          /** The extracted highlight snippets. */
          highlights?: Array<string>;
          /** The relevance score for each highlight snippet. */
          highlightScores?: Array<number>;
          /** The generated result summary. */
          summary?: string;
          /** The subpages returned for this result. */
          subpages?: Array<unknown>;
          /** Additional Exa extras data returned for this result. */
          extras?: Record<string, unknown>;
          /** Structured Exa entities returned for this result. */
          entities?: Array<Record<string, unknown>>;
        }>;
        /** The search type Exa selected for the request. */
        searchType?: string;
        /** The Exa deep search output object. */
        output?: {
          /** The synthesized content returned by Exa deep search. */
          content: string | Record<string, unknown>;
          /** Field-level grounding metadata for the synthesized output. */
          grounding: Array<{
            /** The output field path being grounded. */
            field: string;
            /** The source citations for this grounded field. */
            citations: Array<{
              /** The source URL that supports a structured output field. */
              url: string;
              /** The source title that supports a structured output field. */
              title: string;
            }>;
            /** Exa's confidence level for the grounded field. */
            confidence: "low" | "medium" | "high";
          }>;
        };
        /** The Exa cost metadata for this request. */
        costDollars?: {
          /** The total request cost in US dollars. */
          total: number;
          /** The list of per-operation cost breakdown items. */
          breakDown?: Array<{
            /** The dollar cost attributed to search operations. */
            search?: number;
            /** The dollar cost attributed to content operations. */
            contents?: number;
            /** A more detailed cost breakdown returned by Exa. */
            breakdown?: Record<string, unknown>;
          }>;
          /** The standard Exa per-request pricing metadata. */
          perRequestPrices?: Record<string, unknown>;
          /** The standard Exa per-page pricing metadata. */
          perPagePrices?: Record<string, unknown>;
        };
      };
    };
  }
}
