import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Crawl a website and extract content from discovered pages with Tavily. */
    "tavily.crawl": {
      input: {
        /**
         * The root URL that Tavily should crawl.
         * @format uri
         */
        url: string;
        /** Natural-language instructions that guide the crawl. */
        instructions?: string;
        /**
         * The maximum crawl depth.
         * @minimum 1
         * @maximum 5
         */
        max_depth?: number;
        /**
         * The maximum number of links to follow per crawl level.
         * @minimum 1
         * @maximum 500
         */
        max_breadth?: number;
        /**
         * The maximum number of links Tavily should process.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Regex patterns used to include only matching URL paths.
         * @minItems 1
         */
        select_paths?: Array<string>;
        /**
         * Regex patterns used to include only matching domains.
         * @minItems 1
         */
        select_domains?: Array<string>;
        /**
         * Regex patterns used to exclude matching URL paths.
         * @minItems 1
         */
        exclude_paths?: Array<string>;
        /**
         * Regex patterns used to exclude matching domains.
         * @minItems 1
         */
        exclude_domains?: Array<string>;
        /** Whether external domain links can appear in the results. */
        allow_external?: boolean;
        /** Whether to include images in crawled results. */
        include_images?: boolean;
        /** Controls whether Tavily uses basic or advanced extraction. */
        extract_depth?: "basic" | "advanced";
        /** The format of the extracted page content. */
        format?: "markdown" | "text";
        /** Whether to include a favicon URL for each crawled result. */
        include_favicon?: boolean;
        /**
         * The crawl timeout in seconds.
         * @minimum 10
         * @maximum 150
         */
        timeout?: number;
        /** Whether to include credit usage details in the response. */
        include_usage?: boolean;
      };
      output: {
        /** The base URL that Tavily crawled. */
        base_url: string;
        /** The extracted results returned by Tavily Crawl. */
        results: Array<{
          /** The crawled source URL. */
          url: string;
          /** The extracted page content in the selected format. */
          raw_content?: string;
          /** Images extracted from the crawled page. */
          images?: Array<{
            /** The image URL. */
            url: string;
            /** A short description for the image. */
            description?: string;
            [key: string]: unknown;
          }>;
          /** The favicon URL for the crawled page when include_favicon is enabled. */
          favicon?: string;
          [key: string]: unknown;
        }>;
        /** The total response time reported by Tavily. */
        response_time: number;
        /** Credit usage details returned by Tavily. */
        usage?: {
          /** The number of API credits consumed by the request. */
          credits?: number;
          [key: string]: unknown;
        };
        /** A unique request identifier for Tavily support and debugging. */
        request_id: string;
      };
    };
    /** Start an asynchronous Tavily Research task and return a request ID for polling. */
    "tavily.create_research": {
      input: {
        /**
         * The research task or question to investigate.
         * @minLength 1
         */
        input: string;
        /** Research model to use: mini for narrow targeted tasks, pro for broad multi-angle research, or auto to let Tavily choose. */
        model?: "mini" | "pro" | "auto";
        /** Must be false or omitted. Tavily SSE streaming is not supported by this connector action. */
        stream?: false;
        /** JSON Schema for structured research output. Must include a properties object; required may list property names Tavily should include. */
        output_schema?: {
          /** Property definitions keyed by output property name. */
          properties: Record<string, Record<string, unknown>>;
          /**
           * Required output property names.
           * @minItems 1
           */
          required?: Array<string>;
        };
        /** The format for citations in the research report. */
        citation_format?: "numbered" | "mla" | "apa" | "chicago";
        /**
         * Soft source preference. Tavily prioritizes these host domains and subdomains, but other domains may still appear.
         * @maxItems 20
         */
        include_domains?: Array<string>;
        /**
         * Hard source blocklist. Tavily excludes these host domains and their subdomains from final sources.
         * @maxItems 20
         */
        exclude_domains?: Array<string>;
        /** The target research response length. */
        output_length?: "short" | "standard" | "long";
        /**
         * Up to 5 .txt, .md, or .json files to use as additional research sources; each file must be base64 encoded.
         * @minItems 1
         * @maxItems 5
         */
        files?: Array<{
          /**
           * The file name, including a .txt, .md, or .json extension.
           * @minLength 1
           */
          name: string;
          /**
           * The base64-encoded file contents.
           * @minLength 1
           */
          data: string;
          /** The encoded file content type. */
          type: "base64";
        }>;
      };
      output: {
        /**
         * A unique identifier for the research task.
         * @minLength 1
         */
        request_id?: string;
        /** The timestamp when Tavily created the research task. */
        created_at?: string;
        /** The current research task status. */
        status?: "pending" | "in_progress" | "completed" | "failed";
        /** The research task or question investigated. */
        input?: string;
        /** The model used by the research agent. */
        model?: "mini" | "pro" | "auto";
        /** The final research report content. */
        content?: string | Record<string, unknown>;
        /** Sources used in the research. */
        sources?: Array<{
          /** The source title or name. */
          title?: string;
          /**
           * The source URL.
           * @format uri
           */
          url?: string;
          /**
           * The source favicon URL.
           * @format uri
           */
          favicon?: string;
          [key: string]: unknown;
        }>;
        /** The response time reported by Tavily. */
        response_time?: number;
        [key: string]: unknown;
      };
    };
    /** Extract structured page content from one or more URLs with Tavily. */
    "tavily.extract": {
      input: {
        /**
         * The URLs that Tavily should extract content from.
         * @minItems 1
         */
        urls: Array<string>;
        /** An optional query used to rerank extracted chunks. */
        query?: string;
        /**
         * The maximum number of chunks to return per source when query is provided.
         * @minimum 1
         * @maximum 5
         */
        chunks_per_source?: number;
        /** Controls whether Tavily uses basic or advanced extraction. */
        extract_depth?: "basic" | "advanced";
        /** Whether to include images found on each page. */
        include_images?: boolean;
        /** Whether to include the favicon URL for each page. */
        include_favicon?: boolean;
        /** The format of the extracted page content. */
        format?: "markdown" | "text";
        /**
         * The extraction timeout in seconds.
         * @minimum 1
         * @maximum 60
         */
        timeout?: number;
        /** Whether to include credit usage details in the response. */
        include_usage?: boolean;
      };
      output: {
        /** The successful extraction results returned by Tavily. */
        results: Array<{
          /** The processed source URL. */
          url: string;
          /** The extracted page content in the selected format. */
          raw_content?: string;
          /** Images extracted from the source. */
          images?: Array<{
            /** The image URL. */
            url: string;
            /** A short description for the image. */
            description?: string;
            [key: string]: unknown;
          }>;
          /** The favicon URL for the source when include_favicon is enabled. */
          favicon?: string;
          [key: string]: unknown;
        }>;
        /** URLs that Tavily could not extract successfully. */
        failed_results: Array<{
          /** The source URL that failed. */
          url: string;
          /** The failure reason returned by Tavily. */
          error?: string;
          [key: string]: unknown;
        }>;
        /** The total response time reported by Tavily. */
        response_time: number;
        /** Credit usage details returned by Tavily. */
        usage?: {
          /** The number of API credits consumed by the request. */
          credits?: number;
          [key: string]: unknown;
        };
        /** A unique request identifier for Tavily support and debugging. */
        request_id: string;
      };
    };
    /** Get the current status and result for a Tavily Research task. */
    "tavily.get_research": {
      input: {
        /**
         * The unique identifier of the research task.
         * @minLength 1
         */
        request_id: string;
      };
      output: {
        /**
         * A unique identifier for the research task.
         * @minLength 1
         */
        request_id?: string;
        /** The timestamp when Tavily created the research task. */
        created_at?: string;
        /** The current research task status. */
        status?: "pending" | "in_progress" | "completed" | "failed";
        /** The research task or question investigated. */
        input?: string;
        /** The model used by the research agent. */
        model?: "mini" | "pro" | "auto";
        /** The final research report content. */
        content?: string | Record<string, unknown>;
        /** Sources used in the research. */
        sources?: Array<{
          /** The source title or name. */
          title?: string;
          /**
           * The source URL.
           * @format uri
           */
          url?: string;
          /**
           * The source favicon URL.
           * @format uri
           */
          favicon?: string;
          [key: string]: unknown;
        }>;
        /** The response time reported by Tavily. */
        response_time?: number;
        [key: string]: unknown;
      };
    };
    /** Get API key and account usage details from Tavily. */
    "tavily.get_usage": {
      input: Record<string, never>;
      output: {
        /** Usage details for the current API key. */
        key: {
          /** The total usage for the API key. */
          usage?: number;
          /** The usage limit for the API key. */
          limit?: number;
          /** Search credits consumed by the API key. */
          search_usage?: number;
          /** Extract credits consumed by the API key. */
          extract_usage?: number;
          /** Crawl credits consumed by the API key. */
          crawl_usage?: number;
          /** Map credits consumed by the API key. */
          map_usage?: number;
          /** Research credits consumed by the API key. */
          research_usage?: number;
          [key: string]: unknown;
        };
        /** Plan and usage details for the account. */
        account: {
          /** The current account plan name. */
          current_plan?: string;
          /** The total plan usage for the account. */
          plan_usage?: number;
          /** The plan limit for the account. */
          plan_limit?: number;
          /** The pay-as-you-go usage for the account. */
          paygo_usage?: number;
          /** The pay-as-you-go limit for the account. */
          paygo_limit?: number;
          /** Search credits consumed at the account level. */
          search_usage?: number;
          /** Extract credits consumed at the account level. */
          extract_usage?: number;
          /** Crawl credits consumed at the account level. */
          crawl_usage?: number;
          /** Map credits consumed at the account level. */
          map_usage?: number;
          /** Research credits consumed at the account level. */
          research_usage?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Discover URLs from a website with Tavily Map. */
    "tavily.map": {
      input: {
        /**
         * The root URL that Tavily should map.
         * @format uri
         */
        url: string;
        /** Natural-language instructions that guide the mapping. */
        instructions?: string;
        /**
         * The maximum mapping depth.
         * @minimum 1
         * @maximum 5
         */
        max_depth?: number;
        /**
         * The maximum number of links to follow per level.
         * @minimum 1
         * @maximum 500
         */
        max_breadth?: number;
        /**
         * The maximum number of links Tavily should process.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Regex patterns used to include only matching URL paths.
         * @minItems 1
         */
        select_paths?: Array<string>;
        /**
         * Regex patterns used to include only matching domains.
         * @minItems 1
         */
        select_domains?: Array<string>;
        /**
         * Regex patterns used to exclude matching URL paths.
         * @minItems 1
         */
        exclude_paths?: Array<string>;
        /**
         * Regex patterns used to exclude matching domains.
         * @minItems 1
         */
        exclude_domains?: Array<string>;
        /** Whether external domain links can appear in the results. */
        allow_external?: boolean;
        /**
         * The mapping timeout in seconds.
         * @minimum 10
         * @maximum 150
         */
        timeout?: number;
        /** Whether to include credit usage details in the response. */
        include_usage?: boolean;
      };
      output: {
        /** The base URL that Tavily mapped. */
        base_url: string;
        /** The URLs discovered during the mapping operation. */
        results: Array<string>;
        /** The total response time reported by Tavily. */
        response_time: number;
        /** Credit usage details returned by Tavily. */
        usage?: {
          /** The number of API credits consumed by the request. */
          credits?: number;
          [key: string]: unknown;
        };
        /** A unique request identifier for Tavily support and debugging. */
        request_id: string;
      };
    };
    /** Execute a Tavily Search query and return ranked source results. */
    "tavily.search": {
      input: {
        /**
         * The search query to execute with Tavily.
         * @minLength 1
         */
        query: string;
        /** Controls the latency-versus-relevance tradeoff for Tavily Search. */
        search_depth?: "advanced" | "basic" | "fast" | "ultra-fast";
        /**
         * The maximum number of chunks to return per source.
         * @minimum 1
         * @maximum 3
         */
        chunks_per_source?: number;
        /**
         * The maximum number of search results to return.
         * @minimum 0
         * @maximum 20
         */
        max_results?: number;
        /** The search category used by Tavily. */
        topic?: "general" | "news" | "finance";
        /** The date range shortcut used to filter results. */
        time_range?: "day" | "week" | "month" | "year" | "d" | "w" | "m" | "y";
        /**
         * Only return results after this YYYY-MM-DD date.
         * @format date
         */
        start_date?: string;
        /**
         * Only return results before this YYYY-MM-DD date.
         * @format date
         */
        end_date?: string;
        /** Whether to include a Tavily-generated answer. */
        include_answer?: boolean | "basic" | "advanced";
        /** Whether to include raw content from each result. */
        include_raw_content?: boolean | "markdown" | "text";
        /** Whether to include top-level and per-result images. */
        include_images?: boolean;
        /** Whether to include descriptions for returned images. */
        include_image_descriptions?: boolean;
        /** Whether to include favicons for returned results. */
        include_favicon?: boolean;
        /**
         * Domains that Tavily should include in the search results.
         * @minItems 1
         */
        include_domains?: Array<string>;
        /**
         * Domains that Tavily should exclude from the search results.
         * @minItems 1
         */
        exclude_domains?: Array<string>;
        /** A country name used to boost results for general searches. */
        country?: string;
        /** Whether Tavily should auto-configure search parameters. */
        auto_parameters?: boolean;
        /** Whether Tavily should require quoted exact phrases to match exactly. */
        exact_match?: boolean;
        /** Whether to include credit usage details in the response. */
        include_usage?: boolean;
      };
      output: {
        /** The search query that was executed. */
        query: string;
        /** A Tavily-generated answer for the query. */
        answer?: string;
        /** Query-related images returned by Tavily. */
        images?: Array<{
          /** The image URL. */
          url: string;
          /** A short description for the image. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The ranked search results returned by Tavily. */
        results: Array<{
          /** The source title. */
          title: string;
          /** The source URL. */
          url: string;
          /** The extracted snippet or summary for the source. */
          content: string;
          /** The relevance score of the source. */
          score: number;
          /** The cleaned page content when include_raw_content is enabled. */
          raw_content?: string | null;
          /** The favicon URL for the result when include_favicon is enabled. */
          favicon?: string | null;
          /** Images extracted from this result. */
          images?: Array<{
            /** The image URL. */
            url: string;
            /** A short description for the image. */
            description?: string;
            [key: string]: unknown;
          }>;
          /** The published date for the result when Tavily can determine it. */
          published_date?: string;
          [key: string]: unknown;
        }>;
        /** The total response time reported by Tavily. */
        response_time: number | string;
        /** Auto-selected parameters returned by Tavily when enabled. */
        auto_parameters?: Record<string, unknown>;
        /** Credit usage details returned by Tavily. */
        usage?: {
          /** The number of API credits consumed by the request. */
          credits?: number;
          [key: string]: unknown;
        };
        /** A unique request identifier for Tavily support and debugging. */
        request_id: string;
      };
    };
  }
}
