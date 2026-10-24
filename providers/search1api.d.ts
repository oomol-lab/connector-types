import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Select search engines and rank relevant sources from a natural-language query. Returns sources, not a generated answer; partial engine failures are preserved. */
    "search1api.ask": {
      input: {
        /**
         * What you are looking for, in natural language. Platform hints ("on Reddit", "papers") and time hints ("this week") steer engine and time-range selection.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
      };
      output: {
        /** Search query. */
        query: string;
        /** Task intent or interpreted search intent. */
        intent: {
          /** Query sent to the selected engine. */
          search_query: string;
          /** Selected engines. */
          sources: Array<string>;
          /** Publication time window. */
          time_range: "day" | "week" | "month" | "year" | null;
          [key: string]: unknown;
        };
        /** Returned results, including partial batch outcomes where applicable. */
        results: Array<{
          /** Result title. */
          title: string;
          /**
           * Result source URL.
           * @format uri
           */
          link: string;
          /** Relevant source excerpt. */
          snippet: string;
          /** Source publication date or UTC timestamp; omitted when unknown. */
          published_date?: string;
          /** Source engine. */
          source: string;
          /**
           * Relevance score between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          relevance: number;
          [key: string]: unknown;
        }>;
        /** Partial engine failures; successful results remain available. */
        errors: Array<{
          /** Source engine. */
          source: string;
          /** Human-readable message. */
          message: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read a public webpage as clean content, with optional fallback retrieval. */
    "search1api.crawl": {
      input: {
        /**
         * Public source URL for Search1API to retrieve.
         * @minLength 1
         * @format uri
         */
        url: string;
        /** Enable fallback retrieval when the initial crawl fails; defaults to true. */
        enableFallback?: boolean;
      };
      output: {
        /** Effective page retrieval parameters. */
        crawlParameters: {
          /**
           * Public source URL for Search1API to retrieve.
           * @format uri
           */
          url: string;
          [key: string]: unknown;
        };
        /** Returned results, including partial batch outcomes where applicable. */
        results: {
          /** Result title. */
          title: string;
          /**
           * Result source URL.
           * @format uri
           */
          link: string;
          /** Retrieved page content. */
          content: string;
          /** Source-specific metadata; additional fields are preserved. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read multiple public webpages in one batch, preserving individual results and failures. */
    "search1api.crawl_batch": {
      input: {
        /**
         * Requests processed as one upstream batch; individual failures are preserved.
         * @minItems 1
         */
        requests: Array<{
          /**
           * Public source URL for Search1API to retrieve.
           * @minLength 1
           * @format uri
           */
          url: string;
          /** Enable fallback retrieval when the initial crawl fails; defaults to true. */
          enableFallback?: boolean;
        }>;
      };
      output: {
        /** Returned results, including partial batch outcomes where applicable. */
        results: Array<{
          /** Effective page retrieval parameters. */
          crawlParameters: {
            /**
             * Public source URL for Search1API to retrieve.
             * @format uri
             */
            url: string;
            [key: string]: unknown;
          };
          /** Returned results, including partial batch outcomes where applicable. */
          results: {
            /** Result title. */
            title: string;
            /**
             * Result source URL.
             * @format uri
             */
            link: string;
            /** Retrieved page content. */
            content: string;
            /** Source-specific metadata; additional fields are preserved. */
            metadata?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Start an asynchronous whole-site crawl. Use get_deepcrawl to wait for the archive download URL. This upstream API is in beta. */
    "search1api.deepcrawl": {
      input: {
        /**
         * Public source URL for Search1API to retrieve.
         * @format uri
         */
        url: string;
        /** Use sitemap discovery or discover all links. */
        type?: "sitemap" | "all";
      };
      output: {
        /** Deepcrawl task identifier. */
        taskId: string;
        /** Current operation status. */
        status: "queued";
        [key: string]: unknown;
      };
    };
    /** Extract structured data from a webpage using a prompt and response schema. This upstream API is in beta. */
    "search1api.extract": {
      input: {
        /**
         * Public source URL for Search1API to retrieve.
         * @format uri
         */
        url: string;
        /** Instructions describing which fields to extract. */
        prompt?: string;
        /** JSON schema or response format defining the extracted data. */
        response_format?: Record<string, unknown>;
      };
      output: {
        /** Whether this operation succeeded. */
        success: true;
        /** Effective extraction parameters. */
        extractParameters: {
          /**
           * Public source URL for Search1API to retrieve.
           * @format uri
           */
          url: string;
          [key: string]: unknown;
        };
        /** Returned results, including partial batch outcomes where applicable. */
        results: unknown;
        [key: string]: unknown;
      };
    };
    /** Submit product feedback. Do not include credentials, personal data or private content; do not automatically repeat the same report. */
    "search1api.feedback": {
      input: {
        /**
         * Human-readable message.
         * @minLength 1
         * @maxLength 4000
         */
        message: string;
        /**
         * Task intent or interpreted search intent.
         * @maxLength 2000
         */
        intent?: string;
        /** Feedback category. */
        category?: "bug" | "feature_request" | "docs" | "other";
        /**
         * Original request identifier.
         * @maxLength 256
         */
        request_id?: string;
        /** Agent name and model; do not include credentials or private content. */
        agent?: {
          /**
           * Agent name.
           * @maxLength 128
           */
          name?: string;
          /**
           * Agent model.
           * @maxLength 128
           */
          model?: string;
        };
      };
      output: {
        /**
         * Feedback identifier.
         * @maxLength 80
         * @pattern ^fb_[a-zA-Z0-9_-]+$
         */
        id: string;
        /** Current operation status. */
        status: "new";
        [key: string]: unknown;
      };
    };
    /** Read the state and archive download URL of a deepcrawl task. */
    "search1api.get_deepcrawl": {
      input: {
        /**
         * Deepcrawl task identifier.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Deepcrawl task identifier. */
        taskId: string;
        /** Current operation status. */
        status?: "queued" | "waiting" | "processing" | "completed" | "failed" | "not_found";
        /** Whether this operation succeeded. */
        success?: boolean;
        /** Human-readable message. */
        message?: string;
        /** Upstream error or failure details. */
        error?: string | null;
        /** Upstream archive storage key. */
        r2Key?: string;
        /**
         * Download URL for the completed crawl archive.
         * @format uri
         */
        zipUrl?: string | null;
        [key: string]: unknown;
      };
    };
    /** Check public API health. This does not validate credentials. */
    "search1api.health": {
      input: Record<string, never>;
      output: {
        /** Current operation status. */
        status: string;
        /**
         * Server timestamp.
         * @format date-time
         */
        timestamp?: string;
        /** Server version. */
        version?: string;
        [key: string]: unknown;
      };
    };
    /** Search recent news with source, site, language, time, image and full-content options. */
    "search1api.news": {
      input: {
        /**
         * Search query.
         * @minLength 1
         */
        query: string;
        /** Search engine or trending source. */
        search_service?: "google" | "bing" | "duckduckgo" | "yahoo" | "hackernews" | "" | "reuters";
        /**
         * Maximum number of results.
         * @minimum 1
         * @maximum 50
         */
        max_results?: number;
        /**
         * Number of result pages to read; each page may consume additional credits.
         * @minimum 0
         * @maximum 50
         */
        crawl_results?: number;
        /** Include image results. */
        image?: boolean;
        /** Restrict results to these sites. */
        include_sites?: Array<string>;
        /** Exclude these sites. */
        exclude_sites?: Array<string>;
        /** Preferred result language. */
        language?: string;
        /** Publication time window. */
        time_range?: "day" | "week" | "month" | "year" | "";
      };
      output: {
        /** Effective search parameters. */
        searchParameters: {
          /**
           * Search query.
           * @minLength 1
           */
          query: string;
          /** Search engine or trending source. */
          search_service?: "google" | "bing" | "duckduckgo" | "yahoo" | "hackernews" | "" | "reuters";
          /**
           * Maximum number of results.
           * @minimum 1
           * @maximum 50
           */
          max_results?: number;
          /**
           * Number of result pages to read; each page may consume additional credits.
           * @minimum 0
           * @maximum 50
           */
          crawl_results?: number;
          /** Include image results. */
          image?: boolean;
          /** Restrict results to these sites. */
          include_sites?: Array<string>;
          /** Exclude these sites. */
          exclude_sites?: Array<string>;
          /** Preferred result language. */
          language?: string;
          /** Publication time window. */
          time_range?: "day" | "week" | "month" | "year" | "";
          [key: string]: unknown;
        };
        /** Returned results, including partial batch outcomes where applicable. */
        results: Array<{
          /** Result title. */
          title: string;
          /**
           * Result source URL.
           * @format uri
           */
          link: string;
          /** Relevant source excerpt. */
          snippet: string;
          /** Retrieved page content. */
          content?: string;
          /** Source publication date or UTC timestamp; omitted when unknown. */
          published_date?: string;
          /** Source-specific metadata; additional fields are preserved. */
          metadata?: {
            /** GitHub result kind. */
            kind?: "repo" | "issue" | "pr" | "discussion";
            /** Repository star count. */
            stars?: number;
            /** Preferred result language. */
            language?: string;
            /** Source comment count. */
            num_comments?: number;
            /**
             * Original article URL for a Hacker News discussion.
             * @format uri
             */
            story_url?: string;
            /** Hacker News vote count. */
            points?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Image URLs. */
        images?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Run multiple news searches in one batch, preserving each success, failure and credit cost. */
    "search1api.news_batch": {
      input: {
        /**
         * Requests processed as one upstream batch; individual failures are preserved.
         * @minItems 1
         */
        requests: Array<{
          /**
           * Search query.
           * @minLength 1
           */
          query: string;
          /** Search engine or trending source. */
          search_service?: "google" | "bing" | "duckduckgo" | "yahoo" | "hackernews" | "" | "reuters";
          /**
           * Maximum number of results.
           * @minimum 1
           * @maximum 50
           */
          max_results?: number;
          /**
           * Number of result pages to read; each page may consume additional credits.
           * @minimum 0
           * @maximum 50
           */
          crawl_results?: number;
          /** Include image results. */
          image?: boolean;
          /** Restrict results to these sites. */
          include_sites?: Array<string>;
          /** Exclude these sites. */
          exclude_sites?: Array<string>;
          /** Preferred result language. */
          language?: string;
          /** Publication time window. */
          time_range?: "day" | "week" | "month" | "year" | "";
        }>;
      };
      output: {
        /** Returned results, including partial batch outcomes where applicable. */
        results: Array<{
          /** Whether this operation succeeded. */
          success: boolean;
          /** Successful item response. */
          data?: {
            /** Effective search parameters. */
            searchParameters: {
              /**
               * Search query.
               * @minLength 1
               */
              query: string;
              /** Search engine or trending source. */
              search_service?: "google" | "bing" | "duckduckgo" | "yahoo" | "hackernews" | "" | "reuters";
              /**
               * Maximum number of results.
               * @minimum 1
               * @maximum 50
               */
              max_results?: number;
              /**
               * Number of result pages to read; each page may consume additional credits.
               * @minimum 0
               * @maximum 50
               */
              crawl_results?: number;
              /** Include image results. */
              image?: boolean;
              /** Restrict results to these sites. */
              include_sites?: Array<string>;
              /** Exclude these sites. */
              exclude_sites?: Array<string>;
              /** Preferred result language. */
              language?: string;
              /** Publication time window. */
              time_range?: "day" | "week" | "month" | "year" | "";
              [key: string]: unknown;
            };
            /** Returned results, including partial batch outcomes where applicable. */
            results: Array<{
              /** Result title. */
              title: string;
              /**
               * Result source URL.
               * @format uri
               */
              link: string;
              /** Relevant source excerpt. */
              snippet: string;
              /** Retrieved page content. */
              content?: string;
              /** Source publication date or UTC timestamp; omitted when unknown. */
              published_date?: string;
              /** Source-specific metadata; additional fields are preserved. */
              metadata?: {
                /** GitHub result kind. */
                kind?: "repo" | "issue" | "pr" | "discussion";
                /** Repository star count. */
                stars?: number;
                /** Preferred result language. */
                language?: string;
                /** Source comment count. */
                num_comments?: number;
                /**
                 * Original article URL for a Hacker News discussion.
                 * @format uri
                 */
                story_url?: string;
                /** Hacker News vote count. */
                points?: number;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            }>;
            /** Image URLs. */
            images?: Array<string>;
            [key: string]: unknown;
          };
          /** Upstream error or failure details. */
          error?: {
            /** Human-readable message. */
            message?: string;
            /** Upstream HTTP status code. */
            statusCode?: number;
            [key: string]: unknown;
          };
          /**
           * Credits charged for this item.
           * @minimum 0
           */
          cost: number;
          [key: string]: unknown;
        }>;
        /** Batch totals, successful and failed counts, and credits. */
        summary: {
          /**
           * Total batch items.
           * @minimum 0
           */
          total: number;
          /**
           * Number of successful items.
           * @minimum 0
           */
          successful: number;
          /**
           * Number of failed items.
           * @minimum 0
           */
          failed: number;
          /**
           * Total credits charged.
           * @minimum 0
           */
          totalCost: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Capture a public webpage or element as PNG, JPEG or WebP and return a temporary file URL. */
    "search1api.screenshot": {
      input: {
        /**
         * Public source URL for Search1API to retrieve.
         * @maxLength 4096
         * @format uri
         */
        url: string;
        /** Screenshot image format. */
        format?: "png" | "jpeg" | "webp";
        /** Capture the full page; cannot be combined with selector. */
        full_page?: boolean;
        /** Browser viewport settings. */
        viewport?: {
          /**
           * Viewport width in CSS pixels.
           * @minimum 320
           * @maximum 2560
           */
          width?: number;
          /**
           * Viewport height in CSS pixels.
           * @minimum 200
           * @maximum 1440
           */
          height?: number;
          /**
           * Device pixel ratio.
           * @minimum 1
           * @maximum 2
           */
          device_scale_factor?: number;
        };
        /** Browser lifecycle event to wait for. */
        wait_until?: "domcontentloaded" | "load" | "networkidle";
        /**
         * Wait until this CSS selector is visible.
         * @minLength 1
         * @maxLength 500
         */
        wait_for_selector?: string;
        /**
         * Capture the element matching this CSS selector.
         * @minLength 1
         * @maxLength 500
         */
        selector?: string;
        /**
         * Additional delay before capture, in milliseconds.
         * @minimum 0
         * @maximum 5000
         */
        delay_ms?: number;
        /**
         * Upstream screenshot deadline, in milliseconds.
         * @minimum 1000
         * @maximum 30000
         */
        timeout_ms?: number;
        /**
         * JPEG or WebP quality.
         * @minimum 1
         * @maximum 100
         */
        quality?: number;
        /** Omit the page background where supported. */
        omit_background?: boolean;
        /** Preferred page color scheme. */
        color_scheme?: "light" | "dark";
        /** Animation handling during capture. */
        animations?: "disabled" | "allow";
      };
      output: {
        /** Temporary download URL for the screenshot. */
        url: string;
        /** Screenshot MIME type. */
        mimeType: string;
        /** Upstream request identifier, when available. */
        requestId: string | null;
      };
    };
    /** Search the web with engine, site, language, time, pagination, image and full-content options. */
    "search1api.search": {
      input: {
        /**
         * Search query.
         * @minLength 1
         */
        query: string;
        /** Search engine or trending source. */
        search_service?: "google" | "bing" | "bingcn" | "duckduckgo" | "yahoo" | "yandex" | "youtube" | "x" | "reddit" | "github" | "arxiv" | "wechat" | "bilibili" | "imdb" | "wikipedia" | "grokipedia" | "" | "baidu" | "360" | "quark";
        /**
         * Maximum number of results.
         * @minimum 1
         * @maximum 50
         */
        max_results?: number;
        /**
         * Native search result page, starting at 1.
         * @minimum 1
         * @maximum 100
         */
        page?: number;
        /**
         * Number of result pages to read; each page may consume additional credits.
         * @minimum 0
         * @maximum 50
         */
        crawl_results?: number;
        /** Include image results. */
        image?: boolean;
        /** Restrict results to these sites. */
        include_sites?: Array<string>;
        /** Exclude these sites. */
        exclude_sites?: Array<string>;
        /** Preferred result language. */
        language?: string;
        /** Publication time window. */
        time_range?: "day" | "week" | "month" | "year" | "";
      };
      output: {
        /** Effective search parameters. */
        searchParameters: {
          /**
           * Search query.
           * @minLength 1
           */
          query: string;
          /** Search engine or trending source. */
          search_service?: "google" | "bing" | "bingcn" | "duckduckgo" | "yahoo" | "yandex" | "youtube" | "x" | "reddit" | "github" | "arxiv" | "wechat" | "bilibili" | "imdb" | "wikipedia" | "grokipedia" | "" | "baidu" | "360" | "quark";
          /**
           * Maximum number of results.
           * @minimum 1
           * @maximum 50
           */
          max_results?: number;
          /**
           * Native search result page, starting at 1.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Number of result pages to read; each page may consume additional credits.
           * @minimum 0
           * @maximum 50
           */
          crawl_results?: number;
          /** Include image results. */
          image?: boolean;
          /** Restrict results to these sites. */
          include_sites?: Array<string>;
          /** Exclude these sites. */
          exclude_sites?: Array<string>;
          /** Preferred result language. */
          language?: string;
          /** Publication time window. */
          time_range?: "day" | "week" | "month" | "year" | "";
          [key: string]: unknown;
        };
        /** Returned results, including partial batch outcomes where applicable. */
        results: Array<{
          /** Result title. */
          title: string;
          /**
           * Result source URL.
           * @format uri
           */
          link: string;
          /** Relevant source excerpt. */
          snippet: string;
          /** Retrieved page content. */
          content?: string;
          /** Source publication date or UTC timestamp; omitted when unknown. */
          published_date?: string;
          /** Source-specific metadata; additional fields are preserved. */
          metadata?: {
            /** GitHub result kind. */
            kind?: "repo" | "issue" | "pr" | "discussion";
            /** Repository star count. */
            stars?: number;
            /** Preferred result language. */
            language?: string;
            /** Source comment count. */
            num_comments?: number;
            /**
             * Original article URL for a Hacker News discussion.
             * @format uri
             */
            story_url?: string;
            /** Hacker News vote count. */
            points?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Image URLs. */
        images?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Run multiple web searches in one batch, preserving each success, failure and credit cost. */
    "search1api.search_batch": {
      input: {
        /**
         * Requests processed as one upstream batch; individual failures are preserved.
         * @minItems 1
         */
        requests: Array<{
          /**
           * Search query.
           * @minLength 1
           */
          query: string;
          /** Search engine or trending source. */
          search_service?: "google" | "bing" | "bingcn" | "duckduckgo" | "yahoo" | "yandex" | "youtube" | "x" | "reddit" | "github" | "arxiv" | "wechat" | "bilibili" | "imdb" | "wikipedia" | "grokipedia" | "" | "baidu" | "360" | "quark";
          /**
           * Maximum number of results.
           * @minimum 1
           * @maximum 50
           */
          max_results?: number;
          /**
           * Native search result page, starting at 1.
           * @minimum 1
           * @maximum 100
           */
          page?: number;
          /**
           * Number of result pages to read; each page may consume additional credits.
           * @minimum 0
           * @maximum 50
           */
          crawl_results?: number;
          /** Include image results. */
          image?: boolean;
          /** Restrict results to these sites. */
          include_sites?: Array<string>;
          /** Exclude these sites. */
          exclude_sites?: Array<string>;
          /** Preferred result language. */
          language?: string;
          /** Publication time window. */
          time_range?: "day" | "week" | "month" | "year" | "";
        }>;
      };
      output: {
        /** Returned results, including partial batch outcomes where applicable. */
        results: Array<{
          /** Whether this operation succeeded. */
          success: boolean;
          /** Successful item response. */
          data?: {
            /** Effective search parameters. */
            searchParameters: {
              /**
               * Search query.
               * @minLength 1
               */
              query: string;
              /** Search engine or trending source. */
              search_service?: "google" | "bing" | "bingcn" | "duckduckgo" | "yahoo" | "yandex" | "youtube" | "x" | "reddit" | "github" | "arxiv" | "wechat" | "bilibili" | "imdb" | "wikipedia" | "grokipedia" | "" | "baidu" | "360" | "quark";
              /**
               * Maximum number of results.
               * @minimum 1
               * @maximum 50
               */
              max_results?: number;
              /**
               * Native search result page, starting at 1.
               * @minimum 1
               * @maximum 100
               */
              page?: number;
              /**
               * Number of result pages to read; each page may consume additional credits.
               * @minimum 0
               * @maximum 50
               */
              crawl_results?: number;
              /** Include image results. */
              image?: boolean;
              /** Restrict results to these sites. */
              include_sites?: Array<string>;
              /** Exclude these sites. */
              exclude_sites?: Array<string>;
              /** Preferred result language. */
              language?: string;
              /** Publication time window. */
              time_range?: "day" | "week" | "month" | "year" | "";
              [key: string]: unknown;
            };
            /** Returned results, including partial batch outcomes where applicable. */
            results: Array<{
              /** Result title. */
              title: string;
              /**
               * Result source URL.
               * @format uri
               */
              link: string;
              /** Relevant source excerpt. */
              snippet: string;
              /** Retrieved page content. */
              content?: string;
              /** Source publication date or UTC timestamp; omitted when unknown. */
              published_date?: string;
              /** Source-specific metadata; additional fields are preserved. */
              metadata?: {
                /** GitHub result kind. */
                kind?: "repo" | "issue" | "pr" | "discussion";
                /** Repository star count. */
                stars?: number;
                /** Preferred result language. */
                language?: string;
                /** Source comment count. */
                num_comments?: number;
                /**
                 * Original article URL for a Hacker News discussion.
                 * @format uri
                 */
                story_url?: string;
                /** Hacker News vote count. */
                points?: number;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            }>;
            /** Image URLs. */
            images?: Array<string>;
            [key: string]: unknown;
          };
          /** Upstream error or failure details. */
          error?: {
            /** Human-readable message. */
            message?: string;
            /** Upstream HTTP status code. */
            statusCode?: number;
            [key: string]: unknown;
          };
          /**
           * Credits charged for this item.
           * @minimum 0
           */
          cost: number;
          [key: string]: unknown;
        }>;
        /** Batch totals, successful and failed counts, and credits. */
        summary: {
          /**
           * Total batch items.
           * @minimum 0
           */
          total: number;
          /**
           * Number of successful items.
           * @minimum 0
           */
          successful: number;
          /**
           * Number of failed items.
           * @minimum 0
           */
          failed: number;
          /**
           * Total credits charged.
           * @minimum 0
           */
          totalCost: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Discover page URLs from a site's sitemap or all available links. */
    "search1api.sitemap": {
      input: {
        /**
         * Public source URL for Search1API to retrieve.
         * @format uri
         */
        url: string;
        /** Use sitemap discovery or discover all links. */
        type?: "sitemap" | "all";
      };
      output: {
        /** Discovered page URLs. */
        links: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Retrieve trending topics from the requested source. */
    "search1api.trending": {
      input: {
        /**
         * Search engine or trending source.
         * @minLength 1
         */
        search_service: string;
        /**
         * Maximum number of results.
         * @minimum 1
         */
        max_results?: number;
      };
      output: {
        /** Effective trending parameters. */
        trendingParameters: {
          /**
           * Search engine or trending source.
           * @minLength 1
           */
          search_service: string;
          /**
           * Maximum number of results.
           * @minimum 1
           */
          max_results?: number;
          [key: string]: unknown;
        };
        /** Returned results, including partial batch outcomes where applicable. */
        results: Array<{
          /** Result title. */
          title: string;
          /**
           * Public source URL for Search1API to retrieve.
           * @format uri
           */
          url: string;
          /** Result description. */
          description?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read the authenticated account's remaining credits without consuming credits. */
    "search1api.usage": {
      input: {
        /** Usage reporting period. */
        period?: "day" | "week" | "month" | "year";
      };
      output: {
        /**
         * Remaining account credits.
         * @minimum 0
         */
        usage: number;
        /** Account user identifier, when available. */
        user_id?: string | null;
        /** Credential mode recognized by Search1API. */
        credential_type: "api_key" | "oauth";
        /** OAuth client identifier, when available. */
        client_id?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
