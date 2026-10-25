import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Answer a research task. */
    "contextdev.answer_research": {
      input: {
        /** `fast` prioritizes speed, with extra verification for people and companies; `ultra` supports deeper research (default). */
        mode?: "fast" | "ultra";
        /**
         * Research task. The agent selects company/profile lookups, web searches, or page reads. Include domains or URLs to focus the research.
         * @minLength 1
         * @maxLength 2000
         */
        task: string;
        /** Example answer object, not JSON Schema. Up to 8 levels, 500 values, and 16000 characters; unknowns may be null. */
        json_format?: Record<string, unknown>;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
      };
      output: {
        /** True when the request deadline ended research and the answer uses the evidence collected so far. */
        partial?: boolean;
        /** The answer, in the shape requested by json_format. */
        json_content?: Record<string, unknown>;
        /** URLs of the pages and company/profile records read for the answer, followed by URLs cited in json_content. */
        sources?: Array<string>;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Cancel a batch. */
    "contextdev.cancel_batch": {
      input: {
        /** Batch ID. */
        batch_id: string;
      };
      output: {
        /** Batch ID. */
        id?: string;
        /** Always `cancelling`. Work already in flight finishes; the batch reaches `cancelled` shortly after. */
        status?: string;
        /** How pages were selected. */
        mode?: string;
        /** Tags stored on the batch at submission. */
        tags?: Array<string>;
        /** How the crawl was configured. Null for scrape batches. */
        crawl?: {
          /** Where the crawl started. */
          source?: Record<string, unknown>;
          /** The `maxUrls` submitted with the crawl. A sitemap crawl scrapes only the URLs its sitemap actually lists, up to this many, so `input.reserved` is often lower. */
          max_pages?: number;
          /** Link depth limit. Always 0 for a sitemap crawl, which never follows links off its URLs; null when a `start_url` crawl set no limit. */
          max_depth?: number | null;
          /** Whether links to subdomains were followed. Always false for a sitemap crawl. */
          follow_subdomains?: boolean;
          /** Regex pattern URLs had to match to be crawled. Null when the crawl set none. */
          url_pattern?: string | null;
          /** Regex pattern URLs must not match to be crawled. Null when the crawl set none. */
          exclude_url_pattern?: string | null;
          /** Languages whose pages were followed; null when all languages were. */
          languages?: string | Array<string> | null;
          [key: string]: unknown;
        } | null;
        /** What the submission accepted. */
        input?: {
          /** Pages accepted; progress counts toward this total. */
          reserved?: number;
          /** True when `reserved` is a crawl ceiling; false when it is an exact URL count. */
          reserved_is_ceiling?: boolean;
          /** URLs in the list you sent, before validation and de-duplication. Null for a crawl, which is given a source rather than a list. */
          submitted?: number | null;
          /** URLs dropped before reserving because another entry resolved to the same page. Non-zero for sitemap crawls too, whose sitemaps routinely list a page more than once. */
          duplicates?: number;
          /** Rejected input URLs; `null` for a crawl. */
          invalid?: number | null;
          [key: string]: unknown;
        };
        /** How far the batch got before cancellation. */
        progress?: {
          /** Pages scraped successfully before the request landed. */
          succeeded?: number;
          /** Pages that could not be scraped before the request landed. */
          failed?: number;
          /** Pages that will be skipped. */
          pending?: number;
          [key: string]: unknown;
        };
        /** What this batch cost so far. */
        credits?: {
          /** Credits held at submission; unused credits are refunded when the batch settles. */
          reserved?: number;
          [key: string]: unknown;
        };
        /** Batch timestamps. */
        timing?: {
          /** When the batch was created. */
          created_at?: string;
          /** When processing started. Null if it was cancelled while still queued. */
          started_at?: string | null;
          [key: string]: unknown;
        };
        /** Page failures so far, grouped by error code and sorted by count. */
        page_errors?: Array<{
          /** Error code for these failures. */
          code?: string;
          /** Pages that failed with this code. */
          count?: number;
          [key: string]: unknown;
        }>;
        /** Outputs requested for each page. Matches input.data.formats on submission. */
        formats?: {
          /** Rendered HTML. */
          html?: boolean;
          /** Page content as Markdown. */
          markdown?: boolean;
          /** A screenshot of the page. */
          screenshot?: boolean;
          /** Images found on the page. */
          images?: boolean;
          /** The original HTTP response body. */
          bytes?: boolean;
          /** Fields extracted with custom rules or a prebuilt parser, returned as `parsed`. */
          parse?: boolean;
          /** Markdown excerpts relevant to `highlightsParams.query`. */
          highlights?: boolean;
          /** An object matching `jsonParams.schema`, extracted from the page. */
          json?: boolean;
          /** Product details such as name, price, and availability. */
          product?: boolean;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Classify NAICS codes. */
    "contextdev.classify_naics": {
      input: {
        /**
         * Brand domain or title to retrieve NAICS code for. If a valid domain is provided, it will be used for classification, otherwise, we will search for the brand using the provided title.
         * @minLength 4
         */
        input: string;
        /**
         * Minimum number of NAICS codes to return. Must be at least 1. Defaults to 1.
         * @minimum 1
         * @maximum 10
         */
        minResults?: number;
        /**
         * Maximum number of NAICS codes to return. Must be between 1 and 10. Defaults to 5.
         * @minimum 1
         * @maximum 10
         */
        maxResults?: number;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
        /**
         * Comma-separated labels for filtering usage, e.g. `production,team-alpha`.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** True when the timeout ended processing and this response contains only usable results completed so far. Unfinished results are omitted. */
        partial?: boolean;
        /** Always `ok` on success. */
        status?: string;
        /** Domain found for the brand */
        domain?: string;
        /** Industry classification type, for naics api it will be `naics` */
        type?: string;
        /** Array of NAICS codes and titles. */
        codes?: Array<{
          /** NAICS code */
          code?: string;
          /** NAICS title */
          name?: string;
          /** Confidence level for how well this NAICS code matches the company description */
          confidence?: string;
          [key: string]: unknown;
        }>;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Classify SIC codes. */
    "contextdev.classify_sic": {
      input: {
        /**
         * Brand domain or title to retrieve SIC code for. If a valid domain is provided, it will be used for classification, otherwise, we will search for the brand using the provided title.
         * @minLength 4
         */
        input: string;
        /** SIC dataset: `original_sic` (1987) or `latest_sec` (current SEC list). */
        type?: "original_sic" | "latest_sec";
        /**
         * Minimum number of SIC codes to return. Must be at least 1. Defaults to 1.
         * @minimum 1
         * @maximum 10
         */
        minResults?: number;
        /**
         * Maximum number of SIC codes to return. Must be between 1 and 10. Defaults to 5.
         * @minimum 1
         * @maximum 10
         */
        maxResults?: number;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
        /**
         * Comma-separated labels for filtering usage, e.g. `production,team-alpha`.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** True when the timeout ended processing and this response contains only usable results completed so far. Unfinished results are omitted. */
        partial?: boolean;
        /** Always `ok` on success. */
        status?: string;
        /** Domain found for the brand */
        domain?: string;
        /** Industry classification type, for sic api it will be `sic` */
        type?: string;
        /** Echoes back which SIC dataset was used to classify the brand. */
        classification?: string;
        /** Array of SIC codes with confidence scores. Extra fields depend on the requested classification: `original_sic` results include `majorGroup` and `majorGroupName`; `latest_sec` results include `office`. */
        codes?: Array<{
          /** SIC code (4-digit). */
          code?: string;
          /** SIC industry title. */
          name?: string;
          /** Confidence level for how well this SIC code matches the company description. */
          confidence?: string;
          /** 2-digit major group identifier (the leading two digits of the code). Only present when `classification` is `original_sic`. */
          majorGroup?: string;
          /** Description of the 2-digit major group. Only present when `classification` is `original_sic`. */
          majorGroupName?: string;
          /** SEC review office responsible for filings under this code. Only present when `classification` is `latest_sec`. */
          office?: string;
          [key: string]: unknown;
        }>;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Crawl a website. */
    "contextdev.crawl_website": {
      input: {
        /**
         * Start URL, including `http://` or `https://`.
         * @minLength 1
         * @format uri
         */
        url: string;
        /**
         * Maximum pages to crawl.
         * @minimum 1
         * @maximum 500
         */
        maxPages?: number;
        /**
         * Maximum link depth from the starting URL (0 = only the starting page)
         * @minimum 0
         */
        maxDepth?: number;
        /**
         * Regex pattern. Only URLs matching this pattern will be followed and scraped. An automatic prefix scope in the form ^<starting URL> follows a redirect of the starting page.
         * @maxLength 256
         */
        urlRegex?: string;
        /**
         * Regex pattern. URLs matching this pattern are never followed or scraped, even when they match urlRegex. The starting URL is always scraped.
         * @maxLength 256
         */
        excludeUrlRegex?: string;
        /** Preserve hyperlinks in the Markdown output (`html-conversion` only). */
        includeLinks?: boolean;
        /** Include image references in the Markdown output (`html-conversion` only). */
        includeImages?: boolean;
        /** Truncate base64-encoded image data in the Markdown output (`html-conversion` only). */
        shortenBase64Images?: boolean;
        /** Extract only the main content, stripping headers, footers, sidebars, and navigation */
        useMainContentOnly?: boolean;
        /**
         * Markdown sources in order of preference: `html-conversion` converts the page HTML, `markdown-direct` uses Markdown the site publishes.
         * @minItems 1
         */
        sourcePreference?: Array<"html-conversion" | "markdown-direct">;
        /** When true, follow links on subdomains of the starting URL's domain (e.g. docs.example.com when starting from example.com). www and apex are always treated as equivalent. */
        followSubdomains?: boolean;
        /** PDF handling. `start`/`end` limit parsing to an inclusive, 1-based page range. */
        pdf?: {
          /** When true, PDF pages are fetched and parsed. When false, PDF pages are skipped entirely (not included in results and not counted as failures). */
          shouldParse?: boolean;
          /**
           * First 1-based PDF page to parse.
           * @minimum 1
           */
          start?: number;
          /**
           * Last PDF page to parse (1-based, inclusive). Defaults to the final page. Must be >= start.
           * @minimum 1
           */
          end?: number;
          /** Read scanned PDF pages with OCR; preserve pages that already have text. */
          ocr?: boolean;
        };
        /** When true, the contents of iframes are rendered to Markdown for each crawled page. */
        includeFrames?: boolean;
        /**
         * Keep matching HTML subtrees before converting each page to Markdown.
         * @maxItems 50
         */
        includeSelectors?: Array<string> | null;
        /**
         * Remove matching elements after inclusions. Exclusions take precedence.
         * @maxItems 50
         */
        excludeSelectors?: Array<string> | null;
        /**
         * Maximum cache age in milliseconds. Defaults to 1 day; `0` fetches fresh.
         * @minimum 0
         * @maximum 2592000000
         */
        maxAgeMs?: number | null;
        /**
         * Browser wait time in milliseconds after initial page load for each crawled page. Defaults to 3500 (3.5 seconds). Min: 0. Max: 30000 (30 seconds).
         * @minimum 0
         * @maximum 30000
         */
        waitForMs?: number | null;
        /** Wait briefly for CSS animations and transitions to settle before reading each page. */
        settleAnimations?: boolean;
        /**
         * Soft crawl deadline in milliseconds. Returns pages collected before the next deadline check.
         * @minimum 10000
         * @maximum 110000
         */
        stopAfterMs?: number;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** Fetch from this country (ISO 3166-1 alpha-2). */
        country?: "ad" | "ae" | "af" | "ag" | "ai" | "al" | "am" | "ao" | "ar" | "at" | "au" | "aw" | "az" | "ba" | "bb" | "bd" | "be" | "bf" | "bg" | "bh" | "bi" | "bj" | "bm" | "bn" | "bo" | "bq" | "br" | "bs" | "bw" | "by" | "bz" | "ca" | "cd" | "cf" | "cg" | "ch" | "ci" | "cl" | "cm" | "cn" | "co" | "cr" | "cv" | "cw" | "cy" | "cz" | "de" | "dj" | "dk" | "dm" | "do" | "dz" | "ec" | "ee" | "eg" | "es" | "et" | "fi" | "fj" | "fr" | "ga" | "gb" | "gd" | "ge" | "gf" | "gg" | "gh" | "gm" | "gn" | "gp" | "gq" | "gr" | "gt" | "gu" | "gw" | "gy" | "hk" | "hn" | "hr" | "ht" | "hu" | "id" | "ie" | "il" | "im" | "in" | "iq" | "ir" | "is" | "it" | "je" | "jm" | "jo" | "jp" | "ke" | "kg" | "kh" | "kn" | "kr" | "kw" | "ky" | "kz" | "la" | "lb" | "lc" | "lk" | "lr" | "ls" | "lt" | "lu" | "lv" | "ly" | "ma" | "mc" | "md" | "me" | "mf" | "mg" | "mk" | "ml" | "mm" | "mn" | "mo" | "mq" | "mr" | "mt" | "mu" | "mv" | "mw" | "mx" | "my" | "mz" | "na" | "nc" | "ne" | "ng" | "ni" | "nl" | "no" | "np" | "nz" | "om" | "pa" | "pe" | "pf" | "pg" | "ph" | "pk" | "pl" | "pr" | "ps" | "pt" | "py" | "qa" | "re" | "ro" | "rs" | "ru" | "rw" | "sa" | "sc" | "sd" | "se" | "sg" | "si" | "sk" | "sl" | "sm" | "sn" | "so" | "sr" | "ss" | "st" | "sv" | "sx" | "sy" | "sz" | "tc" | "td" | "tg" | "th" | "tj" | "tl" | "tm" | "tn" | "tr" | "tt" | "tw" | "tz" | "ua" | "ug" | "us" | "uy" | "uz" | "vc" | "ve" | "vg" | "vi" | "vn" | "ye" | "yt" | "za" | "zm" | "zw";
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** True when timeoutOpts.behavior=return-partial returned the usable results collected before the deadline. Partial collections are not cached as complete results. */
        partial?: boolean;
        /** results value. */
        results?: Array<{
          /** Extracted page content as Markdown (empty string on failure) */
          markdown?: string;
          /** metadata value. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** metadata value. */
        metadata?: {
          /** Total number of URLs crawled */
          numUrls?: number;
          /** Maximum crawl depth reached during the crawl */
          maxCrawlDepth?: number;
          /** Number of pages successfully crawled */
          numSucceeded?: number;
          /** Number of pages that failed to crawl */
          numFailed?: number;
          /** Number of URLs skipped (PDFs when pdf.shouldParse=false, URLs not matching urlRegex, or URLs matching excludeUrlRegex) */
          numSkipped?: number;
          [key: string]: unknown;
        };
        /** Whether this response came from cache. */
        cache_metadata?: {
          /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
          status?: string;
          /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
          age_ms?: number;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Create a monitor. */
    "contextdev.create_monitor": {
      input: {
        /** Always `web`. Optional. */
        mode?: "web";
        /**
         * Display name for the monitor.
         * @minLength 1
         * @maxLength 200
         */
        name: string;
        /**
         * Labels for filtering monitors, their changes, and their usage.
         * @maxItems 20
         */
        tags?: Array<string>;
        /** What to watch: a page, a sitemap, or data extracted from a site. */
        target: {
          /** Use `page` to watch one web page. */
          type: "page";
          /**
           * Public HTTP(S) page URL to monitor.
           * @format uri
           */
          url: string;
          /**
           * Plain-language goal describing which page changes matter. When provided without change_detection, semantic detection is inferred.
           * @minLength 1
           * @maxLength 2000
           */
          instructions?: string;
          /** Normalize whitespace before comparing or analyzing text. */
          normalize_whitespace?: boolean;
          /**
           * Monitor these CSS-selected regions. Empty or omitted uses main content. Changes create a new baseline.
           * @maxItems 50
           */
          include_selectors?: Array<string>;
          /**
           * Remove matching regions after inclusions. Changes create a new baseline.
           * @maxItems 50
           */
          exclude_selectors?: Array<string>;
          /**
           * Optional browser actions executed in array order after the page loads, before content is captured, on every run. Requires a paid plan. Maximum: 5 actions. Changes create a new baseline.
           * @maxItems 5
           */
          actions?: Array<{
            /** Use `wait` to pause for a fixed duration. */
            do: "wait";
            /**
             * Time to pause in milliseconds before the next action.
             * @minimum 0
             * @maximum 30000
             */
            timeMs: number;
          } | {
            /** Use `perform` for a plain-language browser instruction. */
            do: "perform";
            /**
             * One browser instruction, such as clicking a button or entering text.
             * @minLength 1
             * @maxLength 500
             */
            action: string;
          } | {
            /** Use `scroll` to move through the page or a container. */
            do: "scroll";
            /** Direction to scroll. Defaults to down. */
            direction?: "up" | "down" | "left" | "right";
            /** Pixels per scroll, one visible viewport, or the current scroll boundary. Defaults to viewport. */
            amount?: number | "viewport" | "max";
            /**
             * CSS selector for the first matching scroll container. Defaults to the page.
             * @minLength 1
             * @maxLength 2000
             */
            container?: string;
            /**
             * Maximum scroll iterations. Stops early when scrolling and scrollable extent stop changing. Defaults to 1.
             * @minimum 1
             * @maximum 50
             */
            maxScrolls?: number;
          }> | null;
        } | {
          /** Use `sitemap` to watch a site for added or removed URLs. */
          type: "sitemap";
          /**
           * Sitemap URL to monitor.
           * @format uri
           */
          url: string;
          /**
           * URL path patterns to include (max 50).
           * @maxItems 50
           */
          include?: Array<string>;
          /**
           * URL path patterns to exclude (max 50).
           * @maxItems 50
           */
          exclude?: Array<string>;
          /**
           * Maximum number of sitemap URLs to track (capped at 10,000).
           * @minimum 1
           * @maximum 10000
           */
          max_urls?: number;
        } | ({
          /** Use `extract` to watch structured data across selected pages. */
          type: "extract";
          /**
           * Root URL to extract structured data from.
           * @format uri
           */
          url: string;
          /** JSON Schema for page selection and the baseline snapshot. Changes return diffs and evidence. */
          schema?: Record<string, unknown>;
          /**
           * Natural-language instructions guiding which pages and facts to track and which changes to report.
           * @minLength 1
           * @maxLength 2000
           */
          instructions: string;
          /**
           * Maximum number of pages to track.
           * @minimum 1
           * @maximum 50
           */
          max_pages?: number;
          /**
           * Optional maximum link depth from the starting URL (0 = only the starting page).
           * @minimum 0
           * @maximum 10
           */
          max_depth?: number;
          /** Allow page discovery on subdomains of the target site. */
          follow_subdomains?: boolean;
        }) & (unknown);
        /** How changes are judged. Defaults to `semantic` for extract targets and page targets with `instructions`, otherwise `exact`. */
        change_detection?: {
          /** Use `exact` to compare visible text or sitemap URLs. */
          type: "exact";
        } | {
          /** Use `semantic` to judge changes against the target instructions. */
          type: "semantic";
          /**
           * Minimum confidence required to report a meaningful change, from 0 to 1.
           * @minimum 0
           * @maximum 1
           */
          confidence_threshold?: number;
        };
        /** How often the monitor runs. Defaults to once a day. */
        schedule?: {
          /** Use `interval` to run on a repeating schedule. */
          type: "interval";
          /**
           * Number of units between runs. The resulting interval (frequency × unit) must be at least 10 minutes and at most 1 year (e.g. minimum 10 when unit is minutes; maximum 365 when unit is days).
           * @minimum 1
           * @maximum 525600
           */
          frequency: number;
          /** Time unit used with `frequency` to set the run interval. */
          unit: "minutes" | "hours" | "days";
        };
        /** Webhook destination and delivery settings. Null means no webhook is configured. */
        webhook?: ({
          /**
           * Public HTTP(S) URL that receives events. Slack and GovSlack URLs get formatted messages.
           * @format uri
           */
          url: string;
          /**
           * Events to deliver. Defaults to `change.detected`; `run.completed` also includes unchanged runs.
           * @minItems 1
           * @maxItems 2
           */
          events?: Array<"change.detected" | "run.completed">;
          /** Webhook retry settings. Use {} for the default schedule. */
          retry?: {
            /**
             * Retry delays in seconds, totaling at most 72 hours. Use [] to disable automatic retries.
             * @maxItems 10
             */
            delays_seconds?: Array<number>;
          };
        }) | null;
      };
      output: {
        /** Always `web`. Optional. */
        mode?: string;
        /** id value. */
        id?: string;
        /** name value. */
        name?: string;
        /** What to watch: a page, a sitemap, or data extracted from a site. */
        target?: {
          /** Use `page` to watch one web page. */
          type?: string;
          /** Public HTTP(S) page URL to monitor. */
          url?: string;
          /** Plain-language goal describing which page changes matter. When provided without change_detection, semantic detection is inferred. */
          instructions?: string;
          /** Normalize whitespace before comparing or analyzing text. */
          normalize_whitespace?: boolean;
          /** Monitor these CSS-selected regions. Empty or omitted uses main content. Changes create a new baseline. */
          include_selectors?: Array<string>;
          /** Remove matching regions after inclusions. Changes create a new baseline. */
          exclude_selectors?: Array<string>;
          /** Optional browser actions executed in array order after the page loads, before content is captured, on every run. Requires a paid plan. Maximum: 5 actions. Changes create a new baseline. */
          actions?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        } | {
          /** Use `sitemap` to watch a site for added or removed URLs. */
          type?: string;
          /** Sitemap URL to monitor. */
          url?: string;
          /** URL path patterns to include (max 50). */
          include?: Array<string>;
          /** URL path patterns to exclude (max 50). */
          exclude?: Array<string>;
          /** Maximum number of sitemap URLs to track (capped at 10,000). */
          max_urls?: number;
          [key: string]: unknown;
        } | {
          /** Use `extract` to watch structured data across selected pages. */
          type?: string;
          /** Root URL to extract structured data from. */
          url?: string;
          /** JSON Schema for page selection and the baseline snapshot. Changes return diffs and evidence. */
          schema?: Record<string, unknown>;
          /** Natural-language instructions guiding which pages and facts to track and which changes to report. */
          instructions?: string;
          /** Maximum number of pages to track. */
          max_pages?: number;
          /** Optional maximum link depth from the starting URL (0 = only the starting page). */
          max_depth?: number;
          /** Allow page discovery on subdomains of the target site. */
          follow_subdomains?: boolean;
          [key: string]: unknown;
        };
        /** How changes are judged. Defaults to `semantic` for extract targets and page targets with `instructions`, otherwise `exact`. */
        change_detection?: {
          /** Use `exact` to compare visible text or sitemap URLs. */
          type?: string;
          [key: string]: unknown;
        } | {
          /** Use `semantic` to judge changes against the target instructions. */
          type?: string;
          /** Minimum confidence required to report a meaningful change, from 0 to 1. */
          confidence_threshold?: number;
          [key: string]: unknown;
        };
        /** How often the monitor runs. Defaults to once a day. */
        schedule?: {
          /** Use `interval` to run on a repeating schedule. */
          type?: string;
          /** Number of units between runs. The resulting interval (frequency × unit) must be at least 10 minutes and at most 1 year (e.g. minimum 10 when unit is minutes; maximum 365 when unit is days). */
          frequency?: number;
          /** Time unit used with `frequency` to set the run interval. */
          unit?: string;
          [key: string]: unknown;
        };
        /** Webhook destination and delivery settings. Null means no webhook is configured. */
        webhook?: {
          /** Public HTTP(S) URL that receives events. Slack and GovSlack URLs get formatted messages. */
          url?: string;
          /** Events to deliver. Defaults to `change.detected`; `run.completed` also includes unchanged runs. */
          events?: Array<string>;
          /** Webhook retry settings. Use {} for the default schedule. */
          retry?: Record<string, unknown>;
          /** API-generated signing secret. Visible only with full access or `monitors:write` permission. */
          secret?: string;
          [key: string]: unknown;
        } | null;
        /** Current state. Failed monitors keep running; paused monitors must be resumed with `status: "active"`. */
        status?: string;
        /** last run at value. */
        last_run_at?: string | null;
        /** last change at value. */
        last_change_at?: string | null;
        /** When the next scheduled run is due; null while paused. */
        next_run_at?: string | null;
        /** Error from the most recent failed run; null when the last run succeeded. */
        last_error?: {
          /** code value. */
          code?: string;
          /** message value. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** Present while webhook deliveries are failing consecutively; null when deliveries are healthy or no webhook is configured. Cleared on the next successful delivery and when the webhook URL changes. */
        webhook_failure?: {
          /** Number of consecutive delivery attempts that did not succeed. */
          consecutive_failures?: number;
          /** Outcome of the most recent failed delivery. rejected means a non-2xx response; failed means no HTTP response was received; skipped_unsafe_url means the URL failed the public-endpoint safety check. */
          last_status?: string;
          /** Human-readable description of the most recent failure. */
          last_message?: string;
          /** last failed at value. */
          last_failed_at?: string;
          [key: string]: unknown;
        } | null;
        /** created at value. */
        created_at?: string;
        /** updated at value. */
        updated_at?: string;
        /** Labels for filtering monitors, their changes, and their usage. */
        tags?: Array<string>;
        /** Comparison baseline, included on Retrieve. Null until capture completes or after target changes. */
        baseline?: {
          /** The page's visible text as last observed. */
          text?: string;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | {
          /** The sitemap URLs as last observed (sorted, normalized). */
          urls?: Array<string>;
          /** Number of URLs in the baseline. */
          url_count?: number;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | {
          /** Latest structured snapshot matching the extraction schema, refreshed at most daily; `null` before capture. */
          data?: unknown;
          /** The page URLs the monitor tracks and analyzes for changes. */
          urls_analyzed?: Array<string>;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | null;
        /** ID of the baseline run queued at creation; null if it will start on the next scheduled tick. */
        initial_run_id?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a batch. */
    "contextdev.delete_batch": {
      input: {
        /** Batch ID. */
        batch_id: string;
      };
      output: {
        /** ID of the deleted batch. */
        id?: string;
        /** Always true on success. */
        deleted?: boolean;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a monitor. */
    "contextdev.delete_monitor": {
      input: {
        /** ID of the monitor. */
        monitor_id: string;
      };
      output: {
        /** id value. */
        id?: string;
        /** deleted value. */
        deleted?: boolean;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Enrich a person. */
    "contextdev.enrich_person": {
      input: {
        /**
         * Public profile URLs for the person. A person-profile URL can identify the person without a name.
         * @minItems 1
         * @maxItems 20
         */
        social_urls?: Array<string>;
        /** Person name. Without an email or person-profile URL, provide both first and last name plus company, education, or location. */
        name?: {
          /**
           * First or given name.
           * @minLength 1
           * @maxLength 100
           */
          first?: string;
          /**
           * Last or family name.
           * @minLength 1
           * @maxLength 100
           */
          last?: string;
        };
        /**
         * Email address of the person to find.
         * @maxLength 320
         * @format email
         */
        email?: string;
        /** Company context to help identify the person. Provide a name or domain. */
        company?: {
          /**
           * Name of a company associated with the person.
           * @minLength 1
           * @maxLength 200
           */
          name?: string;
          /**
           * Website domain of a company associated with the person.
           * @minLength 1
           * @maxLength 253
           */
          domain?: string;
        };
        /**
         * Education history to help distinguish people with similar names.
         * @minItems 1
         * @maxItems 10
         */
        education?: Array<{
          /** School or university, identified by name or domain. */
          institution?: {
            /**
             * Name of the school or university.
             * @minLength 1
             * @maxLength 200
             */
            name?: string;
            /**
             * Website domain of the school or university.
             * @minLength 1
             * @maxLength 253
             */
            domain?: string;
          };
          /**
           * Degree or qualification earned.
           * @minLength 1
           * @maxLength 200
           */
          degree?: string;
          /**
           * Subject or major studied.
           * @minLength 1
           * @maxLength 200
           */
          field_of_study?: string;
          /**
           * Four-digit graduation year.
           * @minimum 1900
           * @maximum 2200
           */
          graduation_year?: number;
        }>;
        /** Location context to help identify the person. Provide a city, region, or country. */
        location?: {
          /**
           * City associated with the person.
           * @minLength 1
           * @maxLength 200
           */
          city?: string;
          /**
           * State, province, or region associated with the person.
           * @minLength 1
           * @maxLength 200
           */
          region?: string;
          /**
           * Country associated with the person.
           * @minLength 1
           * @maxLength 200
           */
          country?: string;
        };
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** True when the timeout ended processing and this response contains the usable data completed so far. Unfinished fields are omitted. */
        partial?: boolean;
        /** match value. */
        match?: {
          /** status value. */
          status?: string;
          /** score value. */
          score?: number;
          /** person value. */
          person?: Record<string, unknown>;
          [key: string]: unknown;
        } | {
          /** status value. */
          status?: string;
          /** score value. */
          score?: null;
          /** person value. */
          person?: null;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Extract structured data. */
    "contextdev.extract_data": {
      input: {
        /**
         * The starting website URL to crawl and extract from. Must include http:// or https://.
         * @minLength 1
         * @format uri
         */
        url: string;
        /** JSON Schema (not an example object) for the returned object. Image fields include relevant page image references. */
        schema: Record<string, unknown>;
        /**
         * Optional extraction guidance, such as which facts to prioritize or how to interpret fields in the schema.
         * @maxLength 2000
         */
        instructions?: string;
        /** Require facts stated on the page. Unsupported fields become null or empty. */
        factCheck?: boolean;
        /** When true, follow links on subdomains of the starting URL's domain. */
        followSubdomains?: boolean;
        /**
         * Maximum number of pages to analyze for extraction. Hard cap: 50. Defaults to 5.
         * @minimum 1
         * @maximum 50
         */
        maxPages?: number;
        /**
         * Optional maximum link depth from the starting URL (0 = only the starting page). If omitted, there is no crawl depth limit.
         * @minimum 0
         */
        maxDepth?: number;
        /** PDF handling. `start`/`end` limit parsing to an inclusive, 1-based page range. */
        pdf?: {
          /** When true, PDF pages are fetched and parsed. When false, PDF pages are skipped. */
          shouldParse?: boolean;
          /**
           * First 1-based PDF page to parse.
           * @minimum 1
           */
          start?: number;
          /**
           * Last PDF page to parse (1-based, inclusive). Defaults to the final page. Must be >= start.
           * @minimum 1
           */
          end?: number;
        };
        /** When true, iframe contents are included in Markdown before extraction. */
        includeFrames?: boolean;
        /**
         * Return cached scrape results if a prior scrape for the same parameters is younger than this many milliseconds. Defaults to 7 days (604800000 ms).
         * @minimum 0
         * @maximum 2592000000
         */
        maxAgeMs?: number | null;
        /**
         * Optional browser wait time in milliseconds after initial page load for each crawled page.
         * @minimum 0
         * @maximum 30000
         */
        waitForMs?: number | null;
        /** Wait briefly for CSS animations and transitions to settle before reading each page. */
        settleAnimations?: boolean;
        /**
         * Browser steps before page discovery. Requires a paid plan; defaults the crawl budget to 110000 ms.
         * @maxItems 5
         */
        actions?: Array<{
          /** Use `wait` to pause for a fixed duration. */
          do: "wait";
          /**
           * Time to pause in milliseconds before the next action.
           * @minimum 0
           * @maximum 30000
           */
          timeMs: number;
        } | {
          /** Use `perform` for a plain-language browser instruction. */
          do: "perform";
          /**
           * One browser instruction, such as clicking a button or entering text.
           * @minLength 1
           * @maxLength 500
           */
          action: string;
        } | {
          /** Use `scroll` to move through the page or a container. */
          do: "scroll";
          /** Direction to scroll. Defaults to down. */
          direction?: "up" | "down" | "left" | "right";
          /** Pixels per scroll, one visible viewport, or the current scroll boundary. Defaults to viewport. */
          amount?: number | "viewport" | "max";
          /**
           * CSS selector for the first matching scroll container. Defaults to the page.
           * @minLength 1
           * @maxLength 2000
           */
          container?: string;
          /**
           * Maximum scroll iterations. Stops early when scrolling and scrollable extent stop changing. Defaults to 1.
           * @minimum 1
           * @maximum 50
           */
          maxScrolls?: number;
        }> | null;
        /**
         * Soft time budget for the crawl in milliseconds. Min: 10000 (10s). Max: 110000 (110s). Defaults to 80000 (80s), or 110000 (110s) when browser actions are provided.
         * @minimum 10000
         * @maximum 110000
         */
        stopAfterMs?: number;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** True when the timeout ended processing and this response contains only usable results completed so far. Unfinished results are omitted. */
        partial?: boolean;
        /** Always `ok` on success. */
        status?: string;
        /** The starting URL that was analyzed */
        url?: string;
        /** List of URLs whose Markdown was used for extraction */
        urls_analyzed?: Array<string>;
        /** Extracted data matching the request schema */
        data?: Record<string, unknown>;
        /** metadata value. */
        metadata?: {
          /** numUrls value. */
          numUrls?: number;
          /** maxCrawlDepth value. */
          maxCrawlDepth?: number;
          /** numSucceeded value. */
          numSucceeded?: number;
          /** numFailed value. */
          numFailed?: number;
          /** numSkipped value. */
          numSkipped?: number;
          /** Number of crawled pages excluded because they were anti-bot challenges, error pages, or parked-domain placeholders. */
          numBlocked?: number;
          /** One verified outcome per requested browser action, in request order. */
          actionsApplied?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Whether this response came from cache. */
        cache_metadata?: {
          /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
          status?: string;
          /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
          age_ms?: number;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Extract fonts. */
    "contextdev.extract_fonts": {
      input: {
        /**
         * Exact page to inspect. Provide either `domain` or `directUrl`.
         * @format uri
         */
        directUrl?: string;
        /**
         * Domain name to extract fonts from (e.g., 'example.com', 'google.com'). The domain will be automatically normalized and validated. You must provide either 'domain' or 'directUrl', but not both.
         * @minLength 3
         */
        domain?: string;
        /** Maximum age of cached brand data in ms. Defaults to 3 months; clamped to 0–1 year. `0` refreshes. */
        maxAgeMs?: number | null;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. "return-partial" requires at least 5000 ms. */
          behavior?: "fail" | "return-partial";
        };
        /**
         * Comma-separated labels for filtering usage, e.g. `production,team-alpha`.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** `loaded`, or `still-loading` when capture ended before the page finished loading. */
        finalDOMState?: string;
        /** Always `ok` on success. */
        status?: string;
        /** The normalized domain that was processed */
        domain?: string;
        /** Array of font usage information */
        fonts?: Array<{
          /** Font family name */
          font?: string;
          /** Array of CSS selectors or element types where this font is used */
          uses?: Array<string>;
          /** Array of fallback font families */
          fallbacks?: Array<string>;
          /** Number of elements using this font */
          num_elements?: number;
          /** Number of words using this font */
          num_words?: number;
          /** Percentage of words using this font */
          percent_words?: number;
          /** Percentage of elements using this font */
          percent_elements?: number;
          [key: string]: unknown;
        }>;
        /** Available font files keyed by family name. Omitted when no downloadable fonts are found. */
        fontLinks?: Record<string, unknown>;
        /** HTTP status code, e.g., 200 */
        code?: number;
        /** Whether this response came from cache. */
        cache_metadata?: {
          /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
          status?: string;
          /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
          age_ms?: number;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Extract a styleguide. */
    "contextdev.extract_styleguide": {
      input: {
        /**
         * Domain name to extract styleguide from (e.g., 'example.com', 'google.com'). The domain will be automatically normalized and validated. You must provide either 'domain' or 'directUrl', but not both.
         * @minLength 3
         */
        domain?: string;
        /**
         * Exact URL to inspect. Provide either `domain` or `directUrl`, not both.
         * @format uri
         */
        directUrl?: string;
        /** Maximum age of cached brand data in ms. Defaults to 3 months; clamped to 0–1 year. `0` refreshes. */
        maxAgeMs?: number | null;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. "return-partial" requires at least 5000 ms. */
          behavior?: "fail" | "return-partial";
        };
        /** Optional browser color scheme to emulate for websites that respond to prefers-color-scheme. This value is part of the styleguide cache key. */
        colorScheme?: "light" | "dark";
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
        /**
         * Comma-separated labels for filtering usage, e.g. `production,team-alpha`.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** `loaded`, or `still-loading` when capture ended before the page finished loading. */
        finalDOMState?: string;
        /** Always `ok` on success. */
        status?: string;
        /** The normalized domain that was processed */
        domain?: string;
        /** Comprehensive styleguide data extracted from the website */
        styleguide?: {
          /** The primary color mode of the website design */
          mode?: string;
          /** Primary colors used on the website */
          colors?: Record<string, unknown>;
          /** Typography styles used on the website */
          typography?: Record<string, unknown>;
          /** Spacing system used on the website */
          elementSpacing?: Record<string, unknown>;
          /** Shadow styles used on the website */
          shadows?: Record<string, unknown>;
          /** Font assets keyed by family name as it appears in fontFamily/fontFallbacks (non-generic names only). Clients match typography.fontFamily / fontWeight or button styles to pick a file URL from files. */
          fontLinks?: Record<string, unknown>;
          /** UI component styles */
          components?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** HTTP status code */
        code?: number;
        /** Whether this response came from cache. */
        cache_metadata?: {
          /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
          status?: string;
          /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
          age_ms?: number;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a batch. */
    "contextdev.get_batch": {
      input: {
        /** Batch ID. */
        batch_id: string;
      };
      output: {
        /** Batch ID. */
        id?: string;
        /** Current state. `completed`, `cancelled`, and `failed` are final. */
        status?: string;
        /** `scrape` (URL list) or `crawl`. */
        mode?: string;
        /** Tags stored on the batch at submission. */
        tags?: Array<string>;
        /** How the crawl was configured. Null for scrape batches. */
        crawl?: {
          /** Where the crawl started. */
          source?: Record<string, unknown>;
          /** The `maxUrls` submitted with the crawl. A sitemap crawl scrapes only the URLs its sitemap actually lists, up to this many, so `input.reserved` is often lower. */
          max_pages?: number;
          /** Link depth limit. Always 0 for a sitemap crawl, which never follows links off its URLs; null when a `start_url` crawl set no limit. */
          max_depth?: number | null;
          /** Whether links to subdomains were followed. Always false for a sitemap crawl. */
          follow_subdomains?: boolean;
          /** Regex pattern URLs had to match to be crawled. Null when the crawl set none. */
          url_pattern?: string | null;
          /** Regex pattern URLs must not match to be crawled. Null when the crawl set none. */
          exclude_url_pattern?: string | null;
          /** Languages whose pages were followed; null when all languages were. */
          languages?: string | Array<string> | null;
          [key: string]: unknown;
        } | null;
        /** What the submission accepted. */
        input?: {
          /** Pages accepted; progress counts toward this total. */
          reserved?: number;
          /** True when `reserved` is a crawl ceiling; false when it is an exact URL count. */
          reserved_is_ceiling?: boolean;
          /** URLs in the list you sent, before validation and de-duplication. Null for a crawl, which is given a source rather than a list. */
          submitted?: number | null;
          /** URLs dropped before reserving because another entry resolved to the same page. Non-zero for sitemap crawls too, whose sitemaps routinely list a page more than once. */
          duplicates?: number;
          /** Rejected input URLs; `null` for a crawl. */
          invalid?: number | null;
          [key: string]: unknown;
        };
        /** Pages attempted so far. Use `status` to check completion. */
        progress?: {
          /** Pages scraped successfully. */
          succeeded?: number;
          /** Pages that could not be scraped. */
          failed?: number;
          /** Accepted pages not yet attempted. Unused crawl capacity is excluded after completion. */
          pending?: number;
          [key: string]: unknown;
        };
        /** Batch credit usage and settlement. */
        credits?: {
          /** Credits held when the batch was accepted. */
          reserved?: number;
          /** Credits returned for unsuccessful pages when the batch settles. */
          refunded?: number;
          /** OCR usage charged when the batch settles. */
          ocr_charged?: number;
          /** `reserved` minus `refunded` plus `ocr_charged`. */
          net?: number;
          [key: string]: unknown;
        };
        /** timing value. */
        timing?: {
          /** When the batch was created. */
          created_at?: string;
          /** When processing started. Null while queued. */
          started_at?: string | null;
          /** When processing finished. Null while active. */
          completed_at?: string | null;
          [key: string]: unknown;
        };
        /** Individual page failures grouped by error code, sorted by count. Unrelated to `failure`, which is the batch itself failing. */
        page_errors?: Array<{
          /** Error code for these failures. */
          code?: string;
          /** Pages that failed with this code. */
          count?: number;
          [key: string]: unknown;
        }>;
        /** Why the batch as a whole stopped. Null unless `status` is `failed`. Individual pages that failed are counted in `page_errors` instead. */
        failure?: {
          /** Why the batch itself stopped. */
          code?: string;
          /** Human-readable explanation. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** Result download links; null until the batch finishes. Files are deleted 180 days after the batch finishes. */
        results?: {
          /** When these links expire (24 hours after this response). */
          expires_at?: string;
          /** Result files. Order is not guaranteed. */
          files?: Array<{
            /** Temporary URL for a gzipped NDJSON file. */
            url?: string;
            /** Results in this file. */
            items?: number;
            /** Compressed file size in bytes. */
            bytes?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        /** Outputs requested for each page. Matches input.data.formats on submission. */
        formats?: {
          /** Rendered HTML. */
          html?: boolean;
          /** Page content as Markdown. */
          markdown?: boolean;
          /** A screenshot of the page. */
          screenshot?: boolean;
          /** Images found on the page. */
          images?: boolean;
          /** The original HTTP response body. */
          bytes?: boolean;
          /** Fields extracted with custom rules or a prebuilt parser, returned as `parsed`. */
          parse?: boolean;
          /** Markdown excerpts relevant to `highlightsParams.query`. */
          highlights?: boolean;
          /** An object matching `jsonParams.schema`, extracted from the page. */
          json?: boolean;
          /** Product details such as name, price, and availability. */
          product?: boolean;
          [key: string]: unknown;
        };
        /** Rejected URLs (first 100). */
        invalid_urls?: Array<{
          /** Rejected URL. */
          url?: string;
          /** Why it was rejected. */
          reason?: string;
          [key: string]: unknown;
        }>;
        /** Batch completion delivery ID, when available. */
        webhook_delivery_id?: string;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List batch results. */
    "contextdev.get_batch_results": {
      input: {
        /** Batch ID. */
        batch_id: string;
        /**
         * Records per page. Defaults to 25. A page can close early so its payload stays under ~8 MB; rely on next_cursor rather than counting records.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * next_cursor from the previous page.
         * @pattern ^\d+:\d+$
         */
        cursor?: string;
      };
      output: {
        /** Result records on this page. */
        data?: Array<{
          /** URL as submitted, or as discovered by the crawl. */
          url?: string;
          /** Your `itemId` from submission. */
          itemId?: string;
          /** Caller-supplied metadata echoed from submission. */
          meta?: Record<string, unknown>;
          /** status value. */
          status?: string;
          /** The same response as POST /web/scrape, including per-format success, failure, and partial results. */
          result?: {
            /** Final URL after redirects and browser actions. */
            url?: string;
            /** Rendered HTML after content filters. */
            html?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Rendered HTML content. */
              data?: string | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Markdown after content filters. */
            markdown?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Page content as Markdown. */
              data?: string | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Screenshot transferred to a downloadable file. */
            screenshot?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Downloadable file stored by Connector. */
              data?: {
                /**
                 * Download URL for the transferred file.
                 * @format uri
                 */
                url?: string;
                /** MIME type of the transferred file. */
                mimeType?: string;
                [key: string]: unknown;
              } | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Images after content filters. `[]` when none are found. */
            images?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Images discovered on the page. */
              data?: Array<{
                /** Image URL or an inline image data URI. */
                url?: string;
                /** Alternative image text, when present. */
                alt?: string | null;
                /** Image width in pixels. */
                width?: number;
                /** Image height in pixels. */
                height?: number;
                /** Image classification returned by the provider. */
                classification?: string;
                /** Hosted image URL, valid for 24 hours after capture when file enrichment is enabled. */
                fileUrl?: string;
                [key: string]: unknown;
              }> | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Original response body transferred to a downloadable file. */
            bytes?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Downloaded original response body. */
              data?: {
                /**
                 * Download URL for the transferred file.
                 * @format uri
                 */
                url?: string;
                /** MIME type of the transferred file. */
                mimeType?: string;
                /** Original response Content-Type, including any charset. */
                contentType?: string;
                [key: string]: unknown;
              } | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Custom or prebuilt parser output. */
            parsed?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Extracted fields; structure depends on the requested parser or custom rules. */
              data?: Record<string, unknown> | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              /** Parser used for this output, including custom for CSS extraction rules. */
              type?: string;
              [key: string]: unknown;
            };
            /** Relevant Markdown excerpts in page order. `[Heading]` adds context; `…` marks omitted text. */
            highlights?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Relevant excerpts in page order. */
              data?: Array<string> | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Object matching `jsonParams.schema`. */
            json?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Extracted object following the supplied JSON Schema. */
              data?: Record<string, unknown> | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Product details found on the page. */
            product?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Product-page detection and extracted product. */
              data?: {
                /** Whether the page is a product detail page. */
                isProductPage?: boolean;
                /** Extracted product details, or null for a non-product page. */
                product?: Record<string, unknown> | null;
                [key: string]: unknown;
              } | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Authenticated browser profile used for this scrape, or null when no profile was requested. New and existing profile requests both return the profile ID. */
            profile?: {
              /** Save this ID after creating a profile, then reuse it as sharedParams.profile.profileId with type "existing". */
              id?: string;
              [key: string]: unknown;
            } | null;
            /** True when at least one requested output succeeds but the response has failed or incomplete outputs. Absent when all requested outputs fail. */
            isPartial?: boolean;
            /** Page metadata. Fields are omitted when not found. */
            metadata?: {
              /** Best title extracted from the page. */
              title?: string;
              /** Best description extracted from standard, Open Graph, or Twitter metadata. */
              description?: string;
              /** Language extracted from html lang or language meta tags. */
              language?: string;
              /** Keywords extracted from the page's keywords meta tag. */
              keywords?: Array<string>;
              /** Resolved canonical URL, when present. */
              canonicalUrl?: string;
              /** Author metadata, when present. */
              author?: string;
              /** Site or application name from page metadata. */
              siteName?: string;
              /** Primary resolved preview image from Open Graph, Twitter, or image metadata. */
              image?: string;
              /** Resolved favicon URL, when present. */
              favicon?: string;
              /** Published timestamp/date from page metadata, when present. */
              publishedTime?: string;
              /** Modified timestamp/date from page metadata, when present. */
              modifiedTime?: string;
              /** Robots meta directive, when present. */
              robots?: string;
              /** Open Graph metadata with the og: prefix removed and keys camel-cased. */
              openGraph?: Record<string, unknown>;
              /** Twitter card metadata with the twitter: prefix removed and keys camel-cased. */
              twitter?: Record<string, unknown>;
              /** Resolved alternate links from link rel=alternate tags. */
              alternates?: Array<Record<string, unknown>>;
              /** Up to 500 h1–h6 headings in document order, before content filtering. */
              headings?: Array<Record<string, unknown>>;
              /** JSON-LD structured data blocks parsed from the page. */
              jsonLd?: Array<Record<string, unknown>>;
              /** Additional non-social meta tags not promoted to top-level metadata fields. */
              additionalMeta?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** Whether this response came from cache. */
            cache_metadata?: {
              /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
              status?: string;
              /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
              age_ms?: number;
              [key: string]: unknown;
            };
            /** Credits this request used and your remaining balance. */
            key_metadata?: {
              /** Credits charged for this request. */
              credits_consumed?: number;
              /** Credits remaining for your organization. */
              credits_remaining?: number;
              [key: string]: unknown;
            };
            /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
            request_id?: string;
            [key: string]: unknown;
          };
          /** Credits charged for this page, including OCR. Cached outputs use the same pricing as POST /web/scrape. */
          credits_used?: number;
          /** PDF pages recovered by OCR. Omitted when OCR did not run. */
          ocr_pages?: number;
          [key: string]: unknown;
        } | {
          /** URL as submitted, or as discovered by the crawl. */
          url?: string;
          /** Your `itemId` from submission. */
          itemId?: string;
          /** Caller-supplied metadata echoed from submission. */
          meta?: Record<string, unknown>;
          /** The page could not be scraped. */
          status?: string;
          /** Why the page failed. */
          error_code?: string;
          /** Human-readable failure detail. */
          message?: string;
          /** Per-format failures when scraping returned a structured response. Omitted for errors that prevent scraping. */
          result?: {
            /** Final URL after redirects and browser actions. */
            url?: string;
            /** Rendered HTML after content filters. */
            html?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Rendered HTML content. */
              data?: string | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Markdown after content filters. */
            markdown?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Page content as Markdown. */
              data?: string | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Screenshot transferred to a downloadable file. */
            screenshot?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Downloadable file stored by Connector. */
              data?: {
                /**
                 * Download URL for the transferred file.
                 * @format uri
                 */
                url?: string;
                /** MIME type of the transferred file. */
                mimeType?: string;
                [key: string]: unknown;
              } | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Images after content filters. `[]` when none are found. */
            images?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Images discovered on the page. */
              data?: Array<{
                /** Image URL or an inline image data URI. */
                url?: string;
                /** Alternative image text, when present. */
                alt?: string | null;
                /** Image width in pixels. */
                width?: number;
                /** Image height in pixels. */
                height?: number;
                /** Image classification returned by the provider. */
                classification?: string;
                /** Hosted image URL, valid for 24 hours after capture when file enrichment is enabled. */
                fileUrl?: string;
                [key: string]: unknown;
              }> | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Original response body transferred to a downloadable file. */
            bytes?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Downloaded original response body. */
              data?: {
                /**
                 * Download URL for the transferred file.
                 * @format uri
                 */
                url?: string;
                /** MIME type of the transferred file. */
                mimeType?: string;
                /** Original response Content-Type, including any charset. */
                contentType?: string;
                [key: string]: unknown;
              } | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Custom or prebuilt parser output. */
            parsed?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Extracted fields; structure depends on the requested parser or custom rules. */
              data?: Record<string, unknown> | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              /** Parser used for this output, including custom for CSS extraction rules. */
              type?: string;
              [key: string]: unknown;
            };
            /** Relevant Markdown excerpts in page order. `[Heading]` adds context; `…` marks omitted text. */
            highlights?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Relevant excerpts in page order. */
              data?: Array<string> | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Object matching `jsonParams.schema`. */
            json?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Extracted object following the supplied JSON Schema. */
              data?: Record<string, unknown> | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Product details found on the page. */
            product?: {
              /** Whether this output was requested. */
              requested?: boolean;
              /** True when this output succeeded, false when it failed, or null when not requested. */
              success?: boolean | null;
              /** Product-page detection and extracted product. */
              data?: {
                /** Whether the page is a product detail page. */
                isProductPage?: boolean;
                /** Extracted product details, or null for a non-product page. */
                product?: Record<string, unknown> | null;
                [key: string]: unknown;
              } | null;
              /** Machine-readable failure code when this output failed. */
              error_code?: string;
              /** Failure explanation and possible next steps. */
              message?: string;
              [key: string]: unknown;
            };
            /** Authenticated browser profile used for this scrape, or null when no profile was requested. New and existing profile requests both return the profile ID. */
            profile?: {
              /** Save this ID after creating a profile, then reuse it as sharedParams.profile.profileId with type "existing". */
              id?: string;
              [key: string]: unknown;
            } | null;
            /** True when at least one requested output succeeds but the response has failed or incomplete outputs. Absent when all requested outputs fail. */
            isPartial?: boolean;
            /** Page metadata. Fields are omitted when not found. */
            metadata?: {
              /** Best title extracted from the page. */
              title?: string;
              /** Best description extracted from standard, Open Graph, or Twitter metadata. */
              description?: string;
              /** Language extracted from html lang or language meta tags. */
              language?: string;
              /** Keywords extracted from the page's keywords meta tag. */
              keywords?: Array<string>;
              /** Resolved canonical URL, when present. */
              canonicalUrl?: string;
              /** Author metadata, when present. */
              author?: string;
              /** Site or application name from page metadata. */
              siteName?: string;
              /** Primary resolved preview image from Open Graph, Twitter, or image metadata. */
              image?: string;
              /** Resolved favicon URL, when present. */
              favicon?: string;
              /** Published timestamp/date from page metadata, when present. */
              publishedTime?: string;
              /** Modified timestamp/date from page metadata, when present. */
              modifiedTime?: string;
              /** Robots meta directive, when present. */
              robots?: string;
              /** Open Graph metadata with the og: prefix removed and keys camel-cased. */
              openGraph?: Record<string, unknown>;
              /** Twitter card metadata with the twitter: prefix removed and keys camel-cased. */
              twitter?: Record<string, unknown>;
              /** Resolved alternate links from link rel=alternate tags. */
              alternates?: Array<Record<string, unknown>>;
              /** Up to 500 h1–h6 headings in document order, before content filtering. */
              headings?: Array<Record<string, unknown>>;
              /** JSON-LD structured data blocks parsed from the page. */
              jsonLd?: Array<Record<string, unknown>>;
              /** Additional non-social meta tags not promoted to top-level metadata fields. */
              additionalMeta?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** Whether this response came from cache. */
            cache_metadata?: {
              /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
              status?: string;
              /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
              age_ms?: number;
              [key: string]: unknown;
            };
            /** Credits this request used and your remaining balance. */
            key_metadata?: {
              /** Credits charged for this request. */
              credits_consumed?: number;
              /** Credits remaining for your organization. */
              credits_remaining?: number;
              [key: string]: unknown;
            };
            /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
            request_id?: string;
            [key: string]: unknown;
          };
          /** Credits charged for this page, including OCR. Cached outputs use the same pricing as POST /web/scrape. */
          credits_used?: number;
          /** PDF pages recovered by OCR. Omitted when OCR did not run. */
          ocr_pages?: number;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_more?: boolean;
        /** Cursor for the next page. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a monitor change. */
    "contextdev.get_change": {
      input: {
        /** ID of the detected change. */
        change_id: string;
      };
      output: {
        /** Always `web`. Optional. */
        mode?: string;
        /** id value. */
        id?: string;
        /** monitor id value. */
        monitor_id?: string;
        /** The run that detected this change. */
        run_id?: string;
        /** target type value. */
        target_type?: string;
        /** change detection type value. */
        change_detection_type?: string;
        /** title value. */
        title?: string;
        /** summary value. */
        summary?: string;
        /** detected at value. */
        detected_at?: string;
        /** url value. */
        url?: string;
        /** importance value. */
        importance?: string;
        /** confidence value. */
        confidence?: number;
        /** Text diff between the previous and current page baseline (page targets). */
        diff?: string;
        /** before text excerpt value. */
        before_text_excerpt?: string;
        /** after text excerpt value. */
        after_text_excerpt?: string;
        /** At most 500 URLs are included; the corresponding count field is always exact. */
        added_urls?: Array<string>;
        /** At most 500 URLs are included; the corresponding count field is always exact. */
        removed_urls?: Array<string>;
        /** added url count value. */
        added_url_count?: number;
        /** removed url count value. */
        removed_url_count?: number;
        /** At most 500 URLs are included; the corresponding count field is always exact. */
        matched_urls?: Array<string>;
        /** matched url count value. */
        matched_url_count?: number;
        /** evidence value. */
        evidence?: Array<{
          /** Optional URL the evidence relates to. Absent for whole-target diffs. */
          url?: string;
          /** Snapshot of the content before the change. */
          before?: string;
          /** Snapshot of the content after the change. */
          after?: string;
          [key: string]: unknown;
        }>;
        /** Labels for filtering monitors, their changes, and their usage. */
        tags?: Array<string>;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a request log. */
    "contextdev.get_log": {
      input: {
        /**
         * The request ID of the logged API call.
         * @format uuid
         */
        request_id: string;
      };
      output: {
        /** data value. */
        data?: {
          /** Request ID of the logged API call. */
          request_id?: string;
          /** When the request completed. */
          timestamp?: string;
          /** HTTP method, or `MONITOR` / `BATCH` for monitor-run and batch-settlement entries. */
          method?: string;
          /** Endpoint path as called. */
          path?: string;
          /** HTTP status code returned. */
          status_code?: number;
          /** The `error_code` from the response, or null on success. */
          error_code?: string | null;
          /** Server-side processing time in milliseconds. */
          latency_ms?: number;
          /** Credits charged for this request. */
          credits_used?: number;
          /** ID of the API key that made the request. */
          key_id?: string | null;
          /** Request tags supplied by the caller. */
          tags?: Array<string>;
          /** Whether the request was made under zero data retention. */
          zdr?: boolean;
          /** What was sent with the request. */
          input?: Record<string, unknown>;
          /** The retained JSON response with credentials redacted, or null when unavailable. */
          response?: unknown;
          /** User-Agent header of the request. */
          user_agent?: string | null;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a monitor. */
    "contextdev.get_monitor": {
      input: {
        /** ID of the monitor. */
        monitor_id: string;
      };
      output: {
        /** Always `web`. Optional. */
        mode?: string;
        /** id value. */
        id?: string;
        /** name value. */
        name?: string;
        /** What to watch: a page, a sitemap, or data extracted from a site. */
        target?: {
          /** Use `page` to watch one web page. */
          type?: string;
          /** Public HTTP(S) page URL to monitor. */
          url?: string;
          /** Plain-language goal describing which page changes matter. When provided without change_detection, semantic detection is inferred. */
          instructions?: string;
          /** Normalize whitespace before comparing or analyzing text. */
          normalize_whitespace?: boolean;
          /** Monitor these CSS-selected regions. Empty or omitted uses main content. Changes create a new baseline. */
          include_selectors?: Array<string>;
          /** Remove matching regions after inclusions. Changes create a new baseline. */
          exclude_selectors?: Array<string>;
          /** Optional browser actions executed in array order after the page loads, before content is captured, on every run. Requires a paid plan. Maximum: 5 actions. Changes create a new baseline. */
          actions?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        } | {
          /** Use `sitemap` to watch a site for added or removed URLs. */
          type?: string;
          /** Sitemap URL to monitor. */
          url?: string;
          /** URL path patterns to include (max 50). */
          include?: Array<string>;
          /** URL path patterns to exclude (max 50). */
          exclude?: Array<string>;
          /** Maximum number of sitemap URLs to track (capped at 10,000). */
          max_urls?: number;
          [key: string]: unknown;
        } | {
          /** Use `extract` to watch structured data across selected pages. */
          type?: string;
          /** Root URL to extract structured data from. */
          url?: string;
          /** JSON Schema for page selection and the baseline snapshot. Changes return diffs and evidence. */
          schema?: Record<string, unknown>;
          /** Natural-language instructions guiding which pages and facts to track and which changes to report. */
          instructions?: string;
          /** Maximum number of pages to track. */
          max_pages?: number;
          /** Optional maximum link depth from the starting URL (0 = only the starting page). */
          max_depth?: number;
          /** Allow page discovery on subdomains of the target site. */
          follow_subdomains?: boolean;
          [key: string]: unknown;
        };
        /** How changes are judged. Defaults to `semantic` for extract targets and page targets with `instructions`, otherwise `exact`. */
        change_detection?: {
          /** Use `exact` to compare visible text or sitemap URLs. */
          type?: string;
          [key: string]: unknown;
        } | {
          /** Use `semantic` to judge changes against the target instructions. */
          type?: string;
          /** Minimum confidence required to report a meaningful change, from 0 to 1. */
          confidence_threshold?: number;
          [key: string]: unknown;
        };
        /** How often the monitor runs. Defaults to once a day. */
        schedule?: {
          /** Use `interval` to run on a repeating schedule. */
          type?: string;
          /** Number of units between runs. The resulting interval (frequency × unit) must be at least 10 minutes and at most 1 year (e.g. minimum 10 when unit is minutes; maximum 365 when unit is days). */
          frequency?: number;
          /** Time unit used with `frequency` to set the run interval. */
          unit?: string;
          [key: string]: unknown;
        };
        /** Webhook destination and delivery settings. Null means no webhook is configured. */
        webhook?: {
          /** Public HTTP(S) URL that receives events. Slack and GovSlack URLs get formatted messages. */
          url?: string;
          /** Events to deliver. Defaults to `change.detected`; `run.completed` also includes unchanged runs. */
          events?: Array<string>;
          /** Webhook retry settings. Use {} for the default schedule. */
          retry?: Record<string, unknown>;
          /** API-generated signing secret. Visible only with full access or `monitors:write` permission. */
          secret?: string;
          [key: string]: unknown;
        } | null;
        /** Current state. Failed monitors keep running; paused monitors must be resumed with `status: "active"`. */
        status?: string;
        /** last run at value. */
        last_run_at?: string | null;
        /** last change at value. */
        last_change_at?: string | null;
        /** When the next scheduled run is due; null while paused. */
        next_run_at?: string | null;
        /** Error from the most recent failed run; null when the last run succeeded. */
        last_error?: {
          /** code value. */
          code?: string;
          /** message value. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** Present while webhook deliveries are failing consecutively; null when deliveries are healthy or no webhook is configured. Cleared on the next successful delivery and when the webhook URL changes. */
        webhook_failure?: {
          /** Number of consecutive delivery attempts that did not succeed. */
          consecutive_failures?: number;
          /** Outcome of the most recent failed delivery. rejected means a non-2xx response; failed means no HTTP response was received; skipped_unsafe_url means the URL failed the public-endpoint safety check. */
          last_status?: string;
          /** Human-readable description of the most recent failure. */
          last_message?: string;
          /** last failed at value. */
          last_failed_at?: string;
          [key: string]: unknown;
        } | null;
        /** created at value. */
        created_at?: string;
        /** updated at value. */
        updated_at?: string;
        /** Labels for filtering monitors, their changes, and their usage. */
        tags?: Array<string>;
        /** Comparison baseline, included on Retrieve. Null until capture completes or after target changes. */
        baseline?: {
          /** The page's visible text as last observed. */
          text?: string;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | {
          /** The sitemap URLs as last observed (sorted, normalized). */
          urls?: Array<string>;
          /** Number of URLs in the baseline. */
          url_count?: number;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | {
          /** Latest structured snapshot matching the extraction schema, refreshed at most daily; `null` before capture. */
          data?: unknown;
          /** The page URLs the monitor tracks and analyzes for changes. */
          urls_analyzed?: Array<string>;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve monitor limits. */
    "contextdev.get_monitor_limits": {
      input: Record<string, unknown>;
      output: {
        /** Number of monitors the account currently has. */
        monitors_used?: number;
        /** Most monitors you can have: your plan's allowance or a custom limit. */
        monitors_limit?: number;
        /** `starter` means Developer; `pro` means Pro or Growth; `scale` means Scale or Enterprise. */
        plan?: string;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a monitor run. */
    "contextdev.get_monitor_run": {
      input: {
        /** ID of the monitor. */
        monitor_id: string;
        /** ID of the monitor run. */
        run_id: string;
      };
      output: {
        /** Webhook delivery IDs for this run. */
        webhook_delivery_ids?: Array<string>;
        /** id value. */
        id?: string;
        /** monitor id value. */
        monitor_id?: string;
        /** Lifecycle status of a run. `skipped` runs never executed — see `skip_reason` (insufficient credits, monitor paused, or superseded by a concurrent run). */
        status?: string;
        /** A baseline run follows creation or a target or detection change. */
        run_type?: string;
        /** target type value. */
        target_type?: string;
        /** change detection type value. */
        change_detection_type?: string;
        /** started at value. */
        started_at?: string | null;
        /** completed at value. */
        completed_at?: string | null;
        /** change detected value. */
        change_detected?: boolean;
        /** change id value. */
        change_id?: string | null;
        /** True when this run established the monitor's initial baseline; baseline runs perform no change detection. */
        baseline_created?: boolean;
        /** Credits charged for this run (0 for skipped/failed runs). */
        credits_charged?: number;
        /** Why a skipped run never executed; null unless status is `skipped`. */
        skip_reason?: string | null;
        /** error value. */
        error?: {
          /** code value. */
          code?: string;
          /** message value. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** Deprecated. Use `webhook_deliveries` for all attempts. */
        webhook_delivery?: {
          /** Delivery ID for status checks and retries, when available. */
          delivery_id?: string;
          /** Identifier sent in the X-Context-Id header. */
          event_id?: string;
          /** The event this delivery carried. Deliveries recorded before event selection existed report change.detected. */
          event?: string;
          /** Outcome of the delivery attempt. Any 2xx response counts as delivered. */
          status?: string;
          /** The endpoint's final HTTP response status, or null when no response was received. */
          http_status?: number | null;
          /** attempted at value. */
          attempted_at?: string;
          /** error value. */
          error?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** All webhook deliveries attempted by this run — one per subscribed event that fired. Omitted when no webhook was attempted, including runs created before event selection was added. */
        webhook_deliveries?: Array<{
          /** Delivery ID for status checks and retries, when available. */
          delivery_id?: string;
          /** Identifier sent in the X-Context-Id header. */
          event_id?: string;
          /** The event this delivery carried. Deliveries recorded before event selection existed report change.detected. */
          event?: string;
          /** Outcome of the delivery attempt. Any 2xx response counts as delivered. */
          status?: string;
          /** The endpoint's final HTTP response status, or null when no response was received. */
          http_status?: number | null;
          /** attempted at value. */
          attempted_at?: string;
          /** error value. */
          error?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve credit usage. */
    "contextdev.get_usage": {
      input: Record<string, unknown>;
      output: {
        /** Credits available to your organization right now. */
        credits_remaining?: number;
        /** The current monthly credit period, or null when your organization has no monthly credits or billing is paused. */
        period?: {
          /** When the current credit period started. */
          start?: string;
          /** Credits charged since `start`. */
          credits_used?: number;
          [key: string]: unknown;
        } | null;
        /** The next monthly refill, or null when no refill is scheduled. While billing is paused, this is when billing resumes. */
        next_refill?: {
          /** When your credits next refill. */
          at?: string;
          /** Your balance is reset to this amount at the refill. Unused credits do not carry over. */
          credits?: number;
          [key: string]: unknown;
        } | null;
        /** Auto-Topup settings and spend. */
        auto_topup?: {
          /** Whether credits are added automatically when your balance runs out. */
          enabled?: boolean;
          /** Credits added by Auto-Topup in the current period. */
          credits_used_this_period?: number;
          /** Monthly Auto-Topup budget you are alerted against, or null when none is set. */
          monthly_budget_credits?: number | null;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve usage history. */
    "contextdev.get_usage_history": {
      input: {
        /**
         * Start of the range, as an ISO 8601 timestamp. Defaults to 24 hours before `to` for `hour`, 30 days for `day`, and 366 days for `month`.
         * @format date-time
         */
        from?: string;
        /**
         * End of the range, as an ISO 8601 timestamp. Defaults to now.
         * @format date-time
         */
        to?: string;
        /** Bucket size. `hour` covers up to 7 days; `day` and `month` cover up to 366 days. Buckets start on UTC boundaries. */
        interval?: "hour" | "day" | "month";
        /** Split each bucket by endpoint path, API key, or HTTP status code. */
        group_by?: "path" | "key_id" | "status_code";
      };
      output: {
        /** One bucket per interval, oldest first. Intervals without usage are included with zero totals. */
        data?: Array<{
          /** Start of the bucket, in UTC. */
          start?: string;
          /** Credits charged. */
          credits_used?: number;
          /** Requests made. */
          request_count?: number;
          /** Per-group totals, highest credits first. Present only when `group_by` is set. */
          groups?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Credits charged across the range. */
        total_credits_used?: number;
        /** Requests made across the range. */
        total_request_count?: number;
        /** Bucket size used. */
        interval?: string;
        /** Start of the range. */
        from?: string;
        /** End of the range. */
        to?: string;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a webhook delivery. */
    "contextdev.get_webhook_delivery": {
      input: {
        /**
         * Delivery ID.
         * @pattern ^whd_[a-f0-9]{32}$
         */
        delivery_id: string;
        /**
         * Comma-separated labels for filtering usage, e.g. `production,team-alpha`.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** Delivery ID. */
        id?: string;
        /** Webhook event type. */
        event?: string;
        /** Batch or monitor run that produced the event. */
        source?: {
          /** Which deliveries to list: `batch` or `monitor`. */
          type?: string;
          /** Batch ID. */
          batch_id?: string;
          [key: string]: unknown;
        } | {
          /** Which deliveries to list: `batch` or `monitor`. */
          type?: string;
          /** Monitor ID. */
          monitor_id?: string;
          /** Monitor run ID. */
          run_id?: string;
          [key: string]: unknown;
        };
        /** Webhook destination URL. */
        url?: string;
        /** `pending`, `delivering`, `retrying`, `delivered`, `failed`, or `cancelled` (source or its webhook was removed). */
        status?: string;
        /** Event creation time. */
        created_at?: string;
        /** Last time you can retry manually (7 days after the event). */
        retry_expires_at?: string;
        /** Last successful delivery time, or null if never delivered. */
        delivered_at?: string | null;
        /** Next scheduled attempt, or null if none. */
        next_attempt_at?: string | null;
        /** Latest delivery error, or null if none. */
        last_error?: {
          /** Error code. */
          code?: string;
          /** Error details. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** Stable event ID for deduplicating received webhooks. */
        event_id?: string;
        /** retry value. */
        retry?: {
          /** Retry delays in seconds, totaling at most 72 hours. Use [] to disable automatic retries. */
          delays_seconds?: Array<number>;
          [key: string]: unknown;
        };
        /** Latest attempt, or null if none. */
        last_attempt?: {
          /** Attempt number, starting at 1. */
          attempt?: number;
          /** `initial`, `automatic` (scheduled retry), or `manual` (Retry endpoint). */
          trigger?: string;
          /** URL used for this attempt. */
          url?: string;
          /** Attempt start time. */
          started_at?: string;
          /** Completion time, or null while in progress. */
          completed_at?: string | null;
          /** HTTP response status, or null if no response was received. */
          http_status?: number | null;
          /** Attempt error, or null if none. */
          error?: Record<string, unknown> | null;
          [key: string]: unknown;
        } | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List runs for all monitors. */
    "contextdev.list_account_runs": {
      input: {
        /** Filter runs by lifecycle status. */
        status?: ("queued" | "running" | "completed" | "failed" | "skipped") & (unknown);
        /**
         * Maximum number of items to return per page (1-100). Defaults to 25.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Opaque pagination cursor from a previous response. */
        cursor?: string;
      };
      output: {
        /** data value. */
        data?: Array<{
          /** Webhook delivery IDs for this run. */
          webhook_delivery_ids?: Array<string>;
          /** id value. */
          id?: string;
          /** monitor id value. */
          monitor_id?: string;
          /** Lifecycle status of a run. `skipped` runs never executed — see `skip_reason` (insufficient credits, monitor paused, or superseded by a concurrent run). */
          status?: string;
          /** A baseline run follows creation or a target or detection change. */
          run_type?: string;
          /** target type value. */
          target_type?: string;
          /** change detection type value. */
          change_detection_type?: string;
          /** started at value. */
          started_at?: string | null;
          /** completed at value. */
          completed_at?: string | null;
          /** change detected value. */
          change_detected?: boolean;
          /** change id value. */
          change_id?: string | null;
          /** True when this run established the monitor's initial baseline; baseline runs perform no change detection. */
          baseline_created?: boolean;
          /** Credits charged for this run (0 for skipped/failed runs). */
          credits_charged?: number;
          /** Why a skipped run never executed; null unless status is `skipped`. */
          skip_reason?: string | null;
          /** error value. */
          error?: Record<string, unknown> | null;
          /** Deprecated. Use `webhook_deliveries` for all attempts. */
          webhook_delivery?: Record<string, unknown>;
          /** All webhook deliveries attempted by this run — one per subscribed event that fired. Omitted when no webhook was attempted, including runs created before event selection was added. */
          webhook_deliveries?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** has more value. */
        has_more?: boolean;
        /** next cursor value. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List batches. */
    "contextdev.list_batches": {
      input: {
        /** Include batches submitted with Scrape Anything formats. Defaults to false. */
        shouldIncludeUnified?: boolean;
        /**
         * Batches per page. Defaults to 25.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Cursor from the previous page. */
        cursor?: string;
        /** Filter by status. */
        status?: "queued" | "running" | "cancelling" | "completed" | "cancelled" | "failed";
        /**
         * Free-text search term, matched against the batch id, crawl source (start URL or sitemap domain), and tags.
         * @maxLength 200
         */
        q?: string;
        /** `prefix` for as-you-type prefix matching (default), `exact` for full-token matching. */
        search_type?: "exact" | "prefix";
        /** Tags to filter by (matches batches having any of them). Pass repeated `tags` params or one comma-separated list, e.g. `tags=docs,competitor`. */
        tags?: string | Array<string>;
      };
      output: {
        /** Batches on this page. */
        data?: Array<{
          /** Batch ID. */
          id?: string;
          /** Current state. `completed`, `cancelled`, and `failed` are final. */
          status?: string;
          /** `scrape` (URL list) or `crawl`. */
          mode?: string;
          /** Tags stored on the batch at submission. */
          tags?: Array<string>;
          /** How the crawl was configured. Null for scrape batches. */
          crawl?: Record<string, unknown> | null;
          /** What the submission accepted. */
          input?: Record<string, unknown>;
          /** Pages attempted so far. Use `status` to check completion. */
          progress?: {
            /** Pages scraped successfully. */
            succeeded?: number;
            /** Pages that could not be scraped. */
            failed?: number;
            /** Accepted pages not yet attempted. Unused crawl capacity is excluded after completion. */
            pending?: number;
            [key: string]: unknown;
          };
          /** Batch credit usage and settlement. */
          credits?: {
            /** Credits held when the batch was accepted. */
            reserved?: number;
            /** Credits returned for unsuccessful pages when the batch settles. */
            refunded?: number;
            /** OCR usage charged when the batch settles. */
            ocr_charged?: number;
            /** `reserved` minus `refunded` plus `ocr_charged`. */
            net?: number;
            [key: string]: unknown;
          };
          /** timing value. */
          timing?: {
            /** When the batch was created. */
            created_at?: string;
            /** When processing started. Null while queued. */
            started_at?: string | null;
            /** When processing finished. Null while active. */
            completed_at?: string | null;
            [key: string]: unknown;
          };
          /** Individual page failures grouped by error code, sorted by count. Unrelated to `failure`, which is the batch itself failing. */
          page_errors?: Array<Record<string, unknown>>;
          /** Why the batch as a whole stopped. Null unless `status` is `failed`. Individual pages that failed are counted in `page_errors` instead. */
          failure?: Record<string, unknown> | null;
          /** Result download links; null until the batch finishes. Files are deleted 180 days after the batch finishes. */
          results?: {
            /** When these links expire (24 hours after this response). */
            expires_at?: string;
            /** Result files. Order is not guaranteed. */
            files?: Array<{
              /** Temporary URL for a gzipped NDJSON file. */
              url?: string;
              /** Results in this file. */
              items?: number;
              /** Compressed file size in bytes. */
              bytes?: number;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          } | null;
          /** Outputs requested for each page. Matches input.data.formats on submission. */
          formats?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_more?: boolean;
        /** Cursor for the next page. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List changes for all monitors. */
    "contextdev.list_changes": {
      input: {
        /** Filter changes to a single monitor. */
        monitor_id?: string;
        /** Filter by target type. */
        target_type?: "page" | "sitemap" | "extract";
        /** Filter by change detection type. */
        change_detection_type?: "exact" | "semantic";
        /** Filter to items that have this tag. */
        tag?: string;
        /**
         * Only include items at or after this ISO 8601 timestamp.
         * @format date-time
         */
        since?: string;
        /**
         * Only include items before this ISO 8601 timestamp.
         * @format date-time
         */
        until?: string;
        /**
         * Maximum number of items to return per page (1-100). Defaults to 25.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Opaque pagination cursor from a previous response. */
        cursor?: string;
      };
      output: {
        /** data value. */
        data?: Array<{
          /** Always `web`. Optional. */
          mode?: string;
          /** id value. */
          id?: string;
          /** monitor id value. */
          monitor_id?: string;
          /** The run that detected this change. */
          run_id?: string;
          /** target type value. */
          target_type?: string;
          /** change detection type value. */
          change_detection_type?: string;
          /** title value. */
          title?: string;
          /** summary value. */
          summary?: string;
          /** detected at value. */
          detected_at?: string;
          /** url value. */
          url?: string;
          /** importance value. */
          importance?: string;
          /** confidence value. */
          confidence?: number;
          /** Text diff between the previous and current page baseline (page targets). */
          diff?: string;
          /** before text excerpt value. */
          before_text_excerpt?: string;
          /** after text excerpt value. */
          after_text_excerpt?: string;
          /** At most 500 URLs are included; the corresponding count field is always exact. */
          added_urls?: Array<string>;
          /** At most 500 URLs are included; the corresponding count field is always exact. */
          removed_urls?: Array<string>;
          /** added url count value. */
          added_url_count?: number;
          /** removed url count value. */
          removed_url_count?: number;
          /** At most 500 URLs are included; the corresponding count field is always exact. */
          matched_urls?: Array<string>;
          /** matched url count value. */
          matched_url_count?: number;
          /** evidence value. */
          evidence?: Array<Record<string, unknown>>;
          /** Labels for filtering monitors, their changes, and their usage. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** has more value. */
        has_more?: boolean;
        /** next cursor value. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List request logs. */
    "contextdev.list_logs": {
      input: {
        /**
         * Only include requests at or after this ISO 8601 timestamp. Defaults to 24 hours before `to`.
         * @format date-time
         */
        from?: string;
        /**
         * Only include requests at or before this ISO 8601 timestamp. Defaults to now.
         * @format date-time
         */
        to?: string;
        /**
         * Filter by endpoint path, with or without the /v1 prefix.
         * @minLength 1
         * @maxLength 200
         * @pattern ^\/
         */
        path?: string;
        /**
         * Filter by the API key that made the request.
         * @minLength 1
         * @maxLength 200
         */
        key_id?: string;
        /**
         * Filter by exact HTTP status code.
         * @minimum 100
         * @maximum 599
         */
        status_code?: number;
        /**
         * Filter by the `error_code` returned in the response.
         * @pattern ^[A-Z][A-Z0-9_]{1,63}$
         */
        error_code?: string;
        /** Only include requests that returned a 4xx or 5xx status. */
        errors_only?: boolean;
        /** Comma-separated request tags. Matches requests carrying any of them. Up to 20 tags, each 1-50 characters. */
        tags?: string;
        /**
         * Case-insensitive substring match against the request query and body, e.g. a domain.
         * @minLength 1
         * @maxLength 200
         */
        search?: string;
        /**
         * Page number, starting at 1.
         * @minimum 1
         * @maximum 1000
         */
        page?: number;
        /**
         * Number of log entries per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Log entries, newest first. */
        data?: Array<{
          /** Request ID of the logged API call. */
          request_id?: string;
          /** When the request completed. */
          timestamp?: string;
          /** HTTP method, or `MONITOR` / `BATCH` for monitor-run and batch-settlement entries. */
          method?: string;
          /** Endpoint path as called. */
          path?: string;
          /** HTTP status code returned. */
          status_code?: number;
          /** The `error_code` from the response, or null on success. */
          error_code?: string | null;
          /** Server-side processing time in milliseconds. */
          latency_ms?: number;
          /** Credits charged for this request. */
          credits_used?: number;
          /** ID of the API key that made the request. */
          key_id?: string | null;
          /** Request tags supplied by the caller. */
          tags?: Array<string>;
          /** Whether the request was made under zero data retention. */
          zdr?: boolean;
          [key: string]: unknown;
        }>;
        /** Current page number. */
        page?: number;
        /** Entries per page. */
        limit?: number;
        /** Whether a next page exists. */
        has_more?: boolean;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List monitor changes. */
    "contextdev.list_monitor_changes": {
      input: {
        /** ID of the monitor. */
        monitor_id: string;
        /** Filter to items that have this tag. */
        tag?: string;
        /**
         * Only include items at or after this ISO 8601 timestamp.
         * @format date-time
         */
        since?: string;
        /**
         * Only include items before this ISO 8601 timestamp.
         * @format date-time
         */
        until?: string;
        /**
         * Maximum number of items to return per page (1-100). Defaults to 25.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Opaque pagination cursor from a previous response. */
        cursor?: string;
      };
      output: {
        /** data value. */
        data?: Array<{
          /** Always `web`. Optional. */
          mode?: string;
          /** id value. */
          id?: string;
          /** monitor id value. */
          monitor_id?: string;
          /** The run that detected this change. */
          run_id?: string;
          /** target type value. */
          target_type?: string;
          /** change detection type value. */
          change_detection_type?: string;
          /** title value. */
          title?: string;
          /** summary value. */
          summary?: string;
          /** detected at value. */
          detected_at?: string;
          /** url value. */
          url?: string;
          /** importance value. */
          importance?: string;
          /** confidence value. */
          confidence?: number;
          /** Text diff between the previous and current page baseline (page targets). */
          diff?: string;
          /** before text excerpt value. */
          before_text_excerpt?: string;
          /** after text excerpt value. */
          after_text_excerpt?: string;
          /** At most 500 URLs are included; the corresponding count field is always exact. */
          added_urls?: Array<string>;
          /** At most 500 URLs are included; the corresponding count field is always exact. */
          removed_urls?: Array<string>;
          /** added url count value. */
          added_url_count?: number;
          /** removed url count value. */
          removed_url_count?: number;
          /** At most 500 URLs are included; the corresponding count field is always exact. */
          matched_urls?: Array<string>;
          /** matched url count value. */
          matched_url_count?: number;
          /** evidence value. */
          evidence?: Array<Record<string, unknown>>;
          /** Labels for filtering monitors, their changes, and their usage. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /** has more value. */
        has_more?: boolean;
        /** next cursor value. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve monitor credit usage. */
    "contextdev.list_monitor_credit_usage": {
      input: {
        /**
         * Only include items at or after this ISO 8601 timestamp.
         * @format date-time
         */
        since?: string;
        /**
         * Only include items before this ISO 8601 timestamp.
         * @format date-time
         */
        until?: string;
      };
      output: {
        /** data value. */
        data?: Array<{
          /** monitor id value. */
          monitor_id?: string;
          /** Monitor name (falls back to the id when the monitor was deleted). */
          name?: string;
          /** Credits charged to this monitor over the window. */
          credits?: number;
          /** Number of billed runs over the window. */
          runs?: number;
          [key: string]: unknown;
        }>;
        /** Sum of credits across all monitors in the window. */
        total_credits?: number;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List monitor runs. */
    "contextdev.list_monitor_runs": {
      input: {
        /** ID of the monitor. */
        monitor_id: string;
        /** Filter runs by lifecycle status. */
        status?: ("queued" | "running" | "completed" | "failed" | "skipped") & (unknown);
        /**
         * Maximum number of items to return per page (1-100). Defaults to 25.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Opaque pagination cursor from a previous response. */
        cursor?: string;
      };
      output: {
        /** data value. */
        data?: Array<{
          /** Webhook delivery IDs for this run. */
          webhook_delivery_ids?: Array<string>;
          /** id value. */
          id?: string;
          /** monitor id value. */
          monitor_id?: string;
          /** Lifecycle status of a run. `skipped` runs never executed — see `skip_reason` (insufficient credits, monitor paused, or superseded by a concurrent run). */
          status?: string;
          /** A baseline run follows creation or a target or detection change. */
          run_type?: string;
          /** target type value. */
          target_type?: string;
          /** change detection type value. */
          change_detection_type?: string;
          /** started at value. */
          started_at?: string | null;
          /** completed at value. */
          completed_at?: string | null;
          /** change detected value. */
          change_detected?: boolean;
          /** change id value. */
          change_id?: string | null;
          /** True when this run established the monitor's initial baseline; baseline runs perform no change detection. */
          baseline_created?: boolean;
          /** Credits charged for this run (0 for skipped/failed runs). */
          credits_charged?: number;
          /** Why a skipped run never executed; null unless status is `skipped`. */
          skip_reason?: string | null;
          /** error value. */
          error?: Record<string, unknown> | null;
          /** Deprecated. Use `webhook_deliveries` for all attempts. */
          webhook_delivery?: Record<string, unknown>;
          /** All webhook deliveries attempted by this run — one per subscribed event that fired. Omitted when no webhook was attempted, including runs created before event selection was added. */
          webhook_deliveries?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** has more value. */
        has_more?: boolean;
        /** next cursor value. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List monitors. */
    "contextdev.list_monitors": {
      input: {
        /**
         * Free-text search term, matched against the fields named in `search_by`.
         * @maxLength 200
         */
        q?: string;
        /** Fields to search with `q`. Defaults to all fields; page and extract targets can have instructions. */
        search_by?: Array<"name" | "url" | "instructions" | "tags"> | null;
        /** `prefix` for as-you-type prefix matching (default), `exact` for full-token matching. */
        search_type?: "exact" | "prefix";
        /** Filter monitors by lifecycle status. */
        status?: "active" | "paused" | "failed";
        /** Filter by target type. */
        target_type?: "page" | "sitemap" | "extract";
        /** Filter by change detection type. */
        change_detection_type?: "exact" | "semantic";
        /**
         * Comma-separated list of tags to filter by (matches monitors having any of them).
         * @maxItems 20
         */
        tags?: Array<string> | null;
        /** Filter to items that have this tag. */
        tag?: string;
        /**
         * Maximum number of items to return per page (1-100). Defaults to 25.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Opaque pagination cursor from a previous response. */
        cursor?: string;
      };
      output: {
        /** data value. */
        data?: Array<{
          /** Always `web`. Optional. */
          mode?: string;
          /** id value. */
          id?: string;
          /** name value. */
          name?: string;
          /** What to watch: a page, a sitemap, or data extracted from a site. */
          target?: Record<string, unknown>;
          /** How changes are judged. Defaults to `semantic` for extract targets and page targets with `instructions`, otherwise `exact`. */
          change_detection?: Record<string, unknown>;
          /** How often the monitor runs. Defaults to once a day. */
          schedule?: Record<string, unknown>;
          /** Webhook destination and delivery settings. Null means no webhook is configured. */
          webhook?: Record<string, unknown> | null;
          /** Current state. Failed monitors keep running; paused monitors must be resumed with `status: "active"`. */
          status?: string;
          /** last run at value. */
          last_run_at?: string | null;
          /** last change at value. */
          last_change_at?: string | null;
          /** When the next scheduled run is due; null while paused. */
          next_run_at?: string | null;
          /** Error from the most recent failed run; null when the last run succeeded. */
          last_error?: Record<string, unknown> | null;
          /** Present while webhook deliveries are failing consecutively; null when deliveries are healthy or no webhook is configured. Cleared on the next successful delivery and when the webhook URL changes. */
          webhook_failure?: Record<string, unknown> | null;
          /** created at value. */
          created_at?: string;
          /** updated at value. */
          updated_at?: string;
          /** Labels for filtering monitors, their changes, and their usage. */
          tags?: Array<string>;
          /** Comparison baseline, included on Retrieve. Null until capture completes or after target changes. */
          baseline?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** has more value. */
        has_more?: boolean;
        /** next cursor value. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List browser profiles. */
    "contextdev.list_profiles": {
      input: {
        /**
         * Number of profiles per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The `next_cursor` from the previous page.
         * @pattern ^prof_[a-f0-9]{32}$
         */
        cursor?: string;
      };
      output: {
        /** Browser profiles, newest first. */
        data?: Array<{
          /** Profile ID to pass as `sharedParams.profile.profileId` on `/web/scrape`. */
          id?: string;
          /** The description supplied when the profile was created, or null. */
          description?: string | null;
          /** When the profile was created. */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** Whether a next page exists. */
        has_more?: boolean;
        /** Pass as `cursor` to fetch the next page. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List webhook deliveries. */
    "contextdev.list_webhook_deliveries": {
      input: {
        /** Delivery source. */
        type: "batch";
        /**
         * Filter by batch ID.
         * @minLength 1
         * @maxLength 200
         * @pattern ^[\w-]+$
         */
        batch_id?: string;
        /** Filter by delivery status. */
        status?: "pending" | "delivering" | "retrying" | "delivered" | "failed" | "cancelled";
        /**
         * Only include events created after this ISO 8601 timestamp.
         * @format date-time
         */
        created_after?: string;
        /**
         * Number of deliveries to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The next_cursor from the previous response.
         * @pattern ^whd_[a-f0-9]{32}$
         */
        cursor?: string;
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      } | {
        /** Delivery source. */
        type: "monitor";
        /**
         * Filter by monitor ID.
         * @minLength 1
         * @maxLength 200
         * @pattern ^[\w-]+$
         */
        monitor_id?: string;
        /**
         * Filter by monitor run ID.
         * @minLength 1
         * @maxLength 200
         * @pattern ^[\w-]+$
         */
        run_id?: string;
        /** Filter by delivery status. */
        status?: "pending" | "delivering" | "retrying" | "delivered" | "failed" | "cancelled";
        /**
         * Only include events created after this ISO 8601 timestamp.
         * @format date-time
         */
        created_after?: string;
        /**
         * Number of deliveries to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The next_cursor from the previous response.
         * @pattern ^whd_[a-f0-9]{32}$
         */
        cursor?: string;
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** Webhook deliveries. */
        data?: Array<{
          /** Delivery ID. */
          id?: string;
          /** Webhook event type. */
          event?: string;
          /** Batch or monitor run that produced the event. */
          source?: Record<string, unknown>;
          /** Webhook destination URL. */
          url?: string;
          /** `pending`, `delivering`, `retrying`, `delivered`, `failed`, or `cancelled` (source or its webhook was removed). */
          status?: string;
          /** Event creation time. */
          created_at?: string;
          /** Last time you can retry manually (7 days after the event). */
          retry_expires_at?: string;
          /** Last successful delivery time, or null if never delivered. */
          delivered_at?: string | null;
          /** Next scheduled attempt, or null if none. */
          next_attempt_at?: string | null;
          /** Latest delivery error, or null if none. */
          last_error?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether more deliveries are available. */
        has_more?: boolean;
        /** Next page cursor, or null on the last page. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** List webhook delivery attempts. */
    "contextdev.list_webhook_delivery_attempts": {
      input: {
        /**
         * Delivery ID.
         * @pattern ^whd_[a-f0-9]{32}$
         */
        delivery_id: string;
        /**
         * Number of attempts to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The next_cursor from the previous response.
         * @pattern ^wha_[a-f0-9]{32}$
         */
        cursor?: string;
        /**
         * Comma-separated labels for filtering usage, e.g. `production,team-alpha`.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** Delivery attempts. */
        data?: Array<{
          /** Attempt number, starting at 1. */
          attempt?: number;
          /** `initial`, `automatic` (scheduled retry), or `manual` (Retry endpoint). */
          trigger?: string;
          /** URL used for this attempt. */
          url?: string;
          /** Attempt start time. */
          started_at?: string;
          /** Completion time, or null while in progress. */
          completed_at?: string | null;
          /** HTTP response status, or null if no response was received. */
          http_status?: number | null;
          /** Attempt error, or null if none. */
          error?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether more attempts are available. */
        has_more?: boolean;
        /** Next page cursor, or null on the last page. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Map URLs. */
    "contextdev.map_urls": {
      input: {
        /**
         * Domain to map, e.g. `stripe.com`.
         * @minLength 3
         */
        domain: string;
        /** Include URLs on subdomains. */
        includeSubdomains?: boolean;
        /**
         * Maximum number of URLs to return.
         * @minimum 1
         * @maximum 100000
         */
        maxLinks?: number;
        /**
         * Fetch this sitemap instead of discovering sitemaps. Must belong to the domain or a subdomain.
         * @format uri
         */
        sitemapUrl?: string;
        /**
         * Regex pattern. Only URLs matching this pattern are returned and counted against maxLinks.
         * @maxLength 256
         */
        urlRegex?: string;
        /**
         * Regex pattern. URLs matching this pattern are not returned, even when they match urlRegex.
         * @maxLength 256
         */
        excludeUrlRegex?: string;
        /**
         * Filter URLs by a topic or phrase, most relevant first.
         * @minLength 2
         * @maxLength 200
         */
        search?: string;
        /** HTTP headers for the target origin. Non-empty headers bypass caching. */
        headers?: Record<string, string>;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
        /**
         * Comma-separated labels for filtering usage, e.g. `production,team-alpha`.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** success value. */
        success?: boolean;
        /** domain value. */
        domain?: string;
        /** urls value. */
        urls?: Array<{
          /** url value. */
          url?: string;
          /** title value. */
          title?: string;
          /** description value. */
          description?: string;
          /** keywords value. */
          keywords?: Array<string>;
          /** language value. */
          language?: string;
          [key: string]: unknown;
        }>;
        /** partial value. */
        partial?: boolean;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Parse a file. */
    "contextdev.parse_file": {
      input: {
        /** Optional file extension hint, such as pdf, docx, xlsx, pptx, html, json, csv, md, py, rtf, jpg, png, or txt. */
        extension?: "txt" | "text" | "md" | "markdown" | "html" | "htm" | "xhtml" | "xml" | "rss" | "atom" | "csv" | "tsv" | "yaml" | "yml" | "py" | "java" | "js" | "jsx" | "mjs" | "cjs" | "json" | "jsonl" | "ndjson" | "php" | "sh" | "bash" | "zsh" | "fish" | "rb" | "ts" | "tsx" | "rtf" | "srt" | "css" | "scss" | "less" | "styl" | "sass" | "svg" | "pdf" | "docx" | "doc" | "xlsx" | "xlsm" | "xlsb" | "xltx" | "xltm" | "xls" | "pptx" | "pptm" | "ppsx" | "ppsm" | "potx" | "potm" | "ppt" | "pps" | "pot" | "jpg" | "jpeg" | "jpe" | "png" | "gif" | "bmp" | "tiff" | "tif" | "webp" | "ppm" | "pbm" | "pgm" | "pnm";
        /** Preserve hyperlinks in Markdown output */
        includeLinks?: boolean;
        /** Include image references in Markdown output */
        includeImages?: boolean;
        /** Shorten base64-encoded image data in the Markdown output */
        shortenBase64Images?: boolean;
        /** Extract only the main content from HTML-like inputs */
        useMainContentOnly?: boolean;
        /** Read text from images and scanned PDF pages. PDF page ranges still apply. */
        ocr?: boolean;
        /** PDF page-range options as a JSON object, e.g. {"start": 2, "end": 5}. */
        pdf?: {
          /**
           * First 1-based PDF page to parse.
           * @minimum 1
           */
          start?: number;
          /**
           * Last PDF page to parse (1-based, inclusive). Defaults to the final page. Must be >= start.
           * @minimum 1
           */
          end?: number;
        };
        /**
         * Optional client identifier used for usage attribution.
         * @minLength 1
         * @maxLength 100
         */
        client?: string;
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
        /**
         * Comma-separated labels for filtering usage, e.g. `production,team-alpha`.
         * @maxItems 20
         */
        tags?: Array<string>;
        /**
         * Public HTTP(S) URL of the file to download and parse, up to 50 MiB.
         * @format uri
         */
        fileUrl: string;
      };
      output: {
        /** Indicates success */
        success?: boolean;
        /** Input bytes converted to GitHub Flavored Markdown */
        markdown?: string;
        /** Detected content type used for parsing */
        type?: string;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Prefetch brand data. */
    "contextdev.prefetch_brand": {
      input: {
        /** Data to prefetch. */
        type: "brand" | "styleguide";
        /** Identifier of the target to prefetch. Provide exactly one of domain or email. */
        identifier: {
          /**
           * Domain, e.g. `stripe.com`.
           * @minLength 3
           */
          domain: string;
        } | {
          /**
           * Email address to prefetch data for. The domain will be extracted from the email. Free email providers (gmail.com, yahoo.com, etc.) and disposable email addresses are not allowed.
           * @minLength 1
           * @format email
           */
          email: string;
        };
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** Only "fail" is supported: return 408 at the deadline. */
          behavior?: "fail";
        };
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** Always `ok` on success. */
        status?: string;
        /** Success message */
        message?: string;
        /** The type of prefetch that was queued, echoed from the request */
        type?: string;
        /** The domain that was queued for prefetching */
        domain?: string;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a brand. */
    "contextdev.retrieve_brand": {
      input: {
        /** force language value. */
        force_language?: ("afrikaans" | "albanian" | "amharic" | "arabic" | "armenian" | "assamese" | "aymara" | "azeri" | "basque" | "belarusian" | "bengali" | "bosnian" | "bulgarian" | "burmese" | "cantonese" | "catalan" | "cebuano" | "chinese" | "corsican" | "croatian" | "czech" | "danish" | "dutch" | "english" | "esperanto" | "estonian" | "farsi" | "fijian" | "finnish" | "french" | "galician" | "georgian" | "german" | "greek" | "guarani" | "gujarati" | "haitian-creole" | "hausa" | "hawaiian" | "hebrew" | "hindi" | "hmong" | "hungarian" | "icelandic" | "igbo" | "indonesian" | "irish" | "italian" | "japanese" | "javanese" | "kannada" | "kazakh" | "khmer" | "kinyarwanda" | "korean" | "kurdish" | "kyrgyz" | "lao" | "latin" | "latvian" | "lingala" | "lithuanian" | "luxembourgish" | "macedonian" | "malagasy" | "malay" | "malayalam" | "maltese" | "maori" | "marathi" | "mongolian" | "nepali" | "norwegian" | "odia" | "oromo" | "pashto" | "pidgin" | "polish" | "portuguese" | "punjabi" | "quechua" | "romanian" | "russian" | "samoan" | "scottish-gaelic" | "serbian" | "sesotho" | "shona" | "sindhi" | "sinhala" | "slovak" | "slovene" | "somali" | "spanish" | "sundanese" | "swahili" | "swedish" | "tagalog" | "tajik" | "tamil" | "tatar" | "telugu" | "thai" | "tibetan" | "tigrinya" | "tongan" | "tswana" | "turkish" | "turkmen" | "ukrainian" | "urdu" | "uyghur" | "uzbek" | "vietnamese" | "welsh" | "wolof" | "xhosa" | "yiddish" | "yoruba" | "zulu") & (string | null);
        /** Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data. */
        maxSpeed?: boolean;
        /** Maximum age of cached brand data in ms. Defaults to 3 months; clamped to 0–1 year. `0` refreshes. */
        maxAgeMs?: number;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** Discriminator for domain-based brand retrieval. */
        type: "by_domain";
        /**
         * Domain name to retrieve brand data for (e.g., 'stripe.com').
         * @minLength 3
         */
        domain: string;
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      } | {
        /** force language value. */
        force_language?: ("afrikaans" | "albanian" | "amharic" | "arabic" | "armenian" | "assamese" | "aymara" | "azeri" | "basque" | "belarusian" | "bengali" | "bosnian" | "bulgarian" | "burmese" | "cantonese" | "catalan" | "cebuano" | "chinese" | "corsican" | "croatian" | "czech" | "danish" | "dutch" | "english" | "esperanto" | "estonian" | "farsi" | "fijian" | "finnish" | "french" | "galician" | "georgian" | "german" | "greek" | "guarani" | "gujarati" | "haitian-creole" | "hausa" | "hawaiian" | "hebrew" | "hindi" | "hmong" | "hungarian" | "icelandic" | "igbo" | "indonesian" | "irish" | "italian" | "japanese" | "javanese" | "kannada" | "kazakh" | "khmer" | "kinyarwanda" | "korean" | "kurdish" | "kyrgyz" | "lao" | "latin" | "latvian" | "lingala" | "lithuanian" | "luxembourgish" | "macedonian" | "malagasy" | "malay" | "malayalam" | "maltese" | "maori" | "marathi" | "mongolian" | "nepali" | "norwegian" | "odia" | "oromo" | "pashto" | "pidgin" | "polish" | "portuguese" | "punjabi" | "quechua" | "romanian" | "russian" | "samoan" | "scottish-gaelic" | "serbian" | "sesotho" | "shona" | "sindhi" | "sinhala" | "slovak" | "slovene" | "somali" | "spanish" | "sundanese" | "swahili" | "swedish" | "tagalog" | "tajik" | "tamil" | "tatar" | "telugu" | "thai" | "tibetan" | "tigrinya" | "tongan" | "tswana" | "turkish" | "turkmen" | "ukrainian" | "urdu" | "uyghur" | "uzbek" | "vietnamese" | "welsh" | "wolof" | "xhosa" | "yiddish" | "yoruba" | "zulu") & (string | null);
        /** Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data. */
        maxSpeed?: boolean;
        /** Maximum age of cached brand data in ms. Defaults to 3 months; clamped to 0–1 year. `0` refreshes. */
        maxAgeMs?: number;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** Discriminator for name-based brand retrieval. */
        type: "by_name";
        /**
         * Company name to retrieve brand data for (e.g., 'Apple Inc').
         * @minLength 3
         * @maxLength 30
         */
        name: string;
        /** country gl value. */
        country_gl?: ("af" | "al" | "dz" | "as" | "ad" | "ao" | "ai" | "aq" | "ag" | "ar" | "am" | "aw" | "au" | "at" | "az" | "bs" | "bh" | "bd" | "bb" | "by" | "be" | "bz" | "bj" | "bm" | "bt" | "bo" | "ba" | "bw" | "bv" | "br" | "io" | "bn" | "bg" | "bf" | "bi" | "kh" | "cm" | "ca" | "cv" | "ky" | "cf" | "td" | "cl" | "cn" | "cx" | "cc" | "co" | "km" | "cg" | "cd" | "ck" | "cr" | "ci" | "hr" | "cu" | "cy" | "cz" | "dk" | "dj" | "dm" | "do" | "ec" | "eg" | "sv" | "gq" | "er" | "ee" | "et" | "fk" | "fo" | "fj" | "fi" | "fr" | "gf" | "pf" | "tf" | "ga" | "gm" | "ge" | "de" | "gh" | "gi" | "gr" | "gl" | "gd" | "gp" | "gu" | "gt" | "gn" | "gw" | "gy" | "ht" | "hm" | "va" | "hn" | "hk" | "hu" | "is" | "in" | "id" | "ir" | "iq" | "ie" | "il" | "it" | "jm" | "jp" | "jo" | "kz" | "ke" | "ki" | "kp" | "kr" | "kw" | "kg" | "la" | "lv" | "lb" | "ls" | "lr" | "ly" | "li" | "lt" | "lu" | "mo" | "mk" | "mg" | "mw" | "my" | "mv" | "ml" | "mt" | "mh" | "mq" | "mr" | "mu" | "yt" | "mx" | "fm" | "md" | "mc" | "mn" | "ms" | "ma" | "mz" | "mm" | "na" | "nr" | "np" | "nl" | "an" | "nc" | "nz" | "ni" | "ne" | "ng" | "nu" | "nf" | "mp" | "no" | "om" | "pk" | "pw" | "ps" | "pa" | "pg" | "py" | "pe" | "ph" | "pn" | "pl" | "pt" | "pr" | "qa" | "re" | "ro" | "ru" | "rw" | "sh" | "kn" | "lc" | "pm" | "vc" | "ws" | "sm" | "st" | "sa" | "sn" | "rs" | "sc" | "sl" | "sg" | "sk" | "si" | "sb" | "so" | "za" | "gs" | "es" | "lk" | "sd" | "sr" | "sj" | "sz" | "se" | "ch" | "sy" | "tw" | "tj" | "tz" | "th" | "tl" | "tg" | "tk" | "to" | "tt" | "tn" | "tr" | "tm" | "tc" | "tv" | "ug" | "ua" | "ae" | "gb" | "us" | "um" | "uy" | "uz" | "vu" | "ve" | "vn" | "vg" | "vi" | "wf" | "eh" | "ye" | "zm" | "zw") & (unknown);
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      } | {
        /** force language value. */
        force_language?: ("afrikaans" | "albanian" | "amharic" | "arabic" | "armenian" | "assamese" | "aymara" | "azeri" | "basque" | "belarusian" | "bengali" | "bosnian" | "bulgarian" | "burmese" | "cantonese" | "catalan" | "cebuano" | "chinese" | "corsican" | "croatian" | "czech" | "danish" | "dutch" | "english" | "esperanto" | "estonian" | "farsi" | "fijian" | "finnish" | "french" | "galician" | "georgian" | "german" | "greek" | "guarani" | "gujarati" | "haitian-creole" | "hausa" | "hawaiian" | "hebrew" | "hindi" | "hmong" | "hungarian" | "icelandic" | "igbo" | "indonesian" | "irish" | "italian" | "japanese" | "javanese" | "kannada" | "kazakh" | "khmer" | "kinyarwanda" | "korean" | "kurdish" | "kyrgyz" | "lao" | "latin" | "latvian" | "lingala" | "lithuanian" | "luxembourgish" | "macedonian" | "malagasy" | "malay" | "malayalam" | "maltese" | "maori" | "marathi" | "mongolian" | "nepali" | "norwegian" | "odia" | "oromo" | "pashto" | "pidgin" | "polish" | "portuguese" | "punjabi" | "quechua" | "romanian" | "russian" | "samoan" | "scottish-gaelic" | "serbian" | "sesotho" | "shona" | "sindhi" | "sinhala" | "slovak" | "slovene" | "somali" | "spanish" | "sundanese" | "swahili" | "swedish" | "tagalog" | "tajik" | "tamil" | "tatar" | "telugu" | "thai" | "tibetan" | "tigrinya" | "tongan" | "tswana" | "turkish" | "turkmen" | "ukrainian" | "urdu" | "uyghur" | "uzbek" | "vietnamese" | "welsh" | "wolof" | "xhosa" | "yiddish" | "yoruba" | "zulu") & (string | null);
        /** Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data. */
        maxSpeed?: boolean;
        /** Maximum age of cached brand data in ms. Defaults to 3 months; clamped to 0–1 year. `0` refreshes. */
        maxAgeMs?: number;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** Discriminator for email-based brand retrieval. */
        type: "by_email";
        /**
         * Email address to retrieve brand data for (e.g., 'jane@stripe.com').
         * @minLength 1
         * @format email
         */
        email: string;
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      } | {
        /** force language value. */
        force_language?: ("afrikaans" | "albanian" | "amharic" | "arabic" | "armenian" | "assamese" | "aymara" | "azeri" | "basque" | "belarusian" | "bengali" | "bosnian" | "bulgarian" | "burmese" | "cantonese" | "catalan" | "cebuano" | "chinese" | "corsican" | "croatian" | "czech" | "danish" | "dutch" | "english" | "esperanto" | "estonian" | "farsi" | "fijian" | "finnish" | "french" | "galician" | "georgian" | "german" | "greek" | "guarani" | "gujarati" | "haitian-creole" | "hausa" | "hawaiian" | "hebrew" | "hindi" | "hmong" | "hungarian" | "icelandic" | "igbo" | "indonesian" | "irish" | "italian" | "japanese" | "javanese" | "kannada" | "kazakh" | "khmer" | "kinyarwanda" | "korean" | "kurdish" | "kyrgyz" | "lao" | "latin" | "latvian" | "lingala" | "lithuanian" | "luxembourgish" | "macedonian" | "malagasy" | "malay" | "malayalam" | "maltese" | "maori" | "marathi" | "mongolian" | "nepali" | "norwegian" | "odia" | "oromo" | "pashto" | "pidgin" | "polish" | "portuguese" | "punjabi" | "quechua" | "romanian" | "russian" | "samoan" | "scottish-gaelic" | "serbian" | "sesotho" | "shona" | "sindhi" | "sinhala" | "slovak" | "slovene" | "somali" | "spanish" | "sundanese" | "swahili" | "swedish" | "tagalog" | "tajik" | "tamil" | "tatar" | "telugu" | "thai" | "tibetan" | "tigrinya" | "tongan" | "tswana" | "turkish" | "turkmen" | "ukrainian" | "urdu" | "uyghur" | "uzbek" | "vietnamese" | "welsh" | "wolof" | "xhosa" | "yiddish" | "yoruba" | "zulu") & (string | null);
        /** Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data. */
        maxSpeed?: boolean;
        /** Maximum age of cached brand data in ms. Defaults to 3 months; clamped to 0–1 year. `0` refreshes. */
        maxAgeMs?: number;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** Discriminator for ticker-based brand retrieval. */
        type: "by_ticker";
        /**
         * Stock ticker symbol to retrieve brand data for (e.g., 'AAPL').
         * @minLength 1
         * @maxLength 15
         * @pattern ^[A-Za-z0-9.]+$
         */
        ticker: string;
        /** ticker exchange value. */
        ticker_exchange?: ("AMEX" | "AMS" | "AQS" | "ASX" | "ATH" | "BER" | "BME" | "BRU" | "BSE" | "BUD" | "BUE" | "BVC" | "CBOE" | "CNQ" | "CPH" | "DFM" | "DOH" | "DUB" | "DUS" | "DXE" | "EGX" | "FSX" | "HAM" | "HEL" | "HKSE" | "HOSE" | "ICE" | "IOB" | "IST" | "JKT" | "JNB" | "JPX" | "KLS" | "KOE" | "KSC" | "KUW" | "LIS" | "LSE" | "MCX" | "MEX" | "MIL" | "MUN" | "NASDAQ" | "NEO" | "NSE" | "NYSE" | "NZE" | "OSL" | "OTC" | "PAR" | "PNK" | "PRA" | "RIS" | "SAO" | "SAU" | "SES" | "SET" | "SGO" | "SHH" | "SHZ" | "SIX" | "STO" | "STU" | "TAI" | "TAL" | "TLV" | "TSX" | "TSXV" | "TWO" | "VIE" | "WSE" | "XETRA") & (unknown);
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      } | {
        /** Discriminator for direct-URL-based brand retrieval. */
        type: "by_direct_url";
        /**
         * Full http(s) URL to fetch brand data from (e.g., 'https://stripe.com/enterprise'). Only this URL is fetched — not the entire internet.
         * @format uri
         */
        direct_url: string;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      } | {
        /** Discriminator for transaction-based brand retrieval. */
        type: "by_transaction";
        /**
         * Transaction information to identify the brand.
         * @minLength 3
         * @maxLength 500
         */
        transaction_info: string;
        /** force language value. */
        force_language?: ("afrikaans" | "albanian" | "amharic" | "arabic" | "armenian" | "assamese" | "aymara" | "azeri" | "basque" | "belarusian" | "bengali" | "bosnian" | "bulgarian" | "burmese" | "cantonese" | "catalan" | "cebuano" | "chinese" | "corsican" | "croatian" | "czech" | "danish" | "dutch" | "english" | "esperanto" | "estonian" | "farsi" | "fijian" | "finnish" | "french" | "galician" | "georgian" | "german" | "greek" | "guarani" | "gujarati" | "haitian-creole" | "hausa" | "hawaiian" | "hebrew" | "hindi" | "hmong" | "hungarian" | "icelandic" | "igbo" | "indonesian" | "irish" | "italian" | "japanese" | "javanese" | "kannada" | "kazakh" | "khmer" | "kinyarwanda" | "korean" | "kurdish" | "kyrgyz" | "lao" | "latin" | "latvian" | "lingala" | "lithuanian" | "luxembourgish" | "macedonian" | "malagasy" | "malay" | "malayalam" | "maltese" | "maori" | "marathi" | "mongolian" | "nepali" | "norwegian" | "odia" | "oromo" | "pashto" | "pidgin" | "polish" | "portuguese" | "punjabi" | "quechua" | "romanian" | "russian" | "samoan" | "scottish-gaelic" | "serbian" | "sesotho" | "shona" | "sindhi" | "sinhala" | "slovak" | "slovene" | "somali" | "spanish" | "sundanese" | "swahili" | "swedish" | "tagalog" | "tajik" | "tamil" | "tatar" | "telugu" | "thai" | "tibetan" | "tigrinya" | "tongan" | "tswana" | "turkish" | "turkmen" | "ukrainian" | "urdu" | "uyghur" | "uzbek" | "vietnamese" | "welsh" | "wolof" | "xhosa" | "yiddish" | "yoruba" | "zulu") & (string | null);
        /** Optional parameter to optimize the API call for maximum speed. When set to true, the API will skip time-consuming operations for faster response at the cost of less comprehensive data. */
        maxSpeed?: boolean;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** country gl value. */
        country_gl?: ("af" | "al" | "dz" | "as" | "ad" | "ao" | "ai" | "aq" | "ag" | "ar" | "am" | "aw" | "au" | "at" | "az" | "bs" | "bh" | "bd" | "bb" | "by" | "be" | "bz" | "bj" | "bm" | "bt" | "bo" | "ba" | "bw" | "bv" | "br" | "io" | "bn" | "bg" | "bf" | "bi" | "kh" | "cm" | "ca" | "cv" | "ky" | "cf" | "td" | "cl" | "cn" | "cx" | "cc" | "co" | "km" | "cg" | "cd" | "ck" | "cr" | "ci" | "hr" | "cu" | "cy" | "cz" | "dk" | "dj" | "dm" | "do" | "ec" | "eg" | "sv" | "gq" | "er" | "ee" | "et" | "fk" | "fo" | "fj" | "fi" | "fr" | "gf" | "pf" | "tf" | "ga" | "gm" | "ge" | "de" | "gh" | "gi" | "gr" | "gl" | "gd" | "gp" | "gu" | "gt" | "gn" | "gw" | "gy" | "ht" | "hm" | "va" | "hn" | "hk" | "hu" | "is" | "in" | "id" | "ir" | "iq" | "ie" | "il" | "it" | "jm" | "jp" | "jo" | "kz" | "ke" | "ki" | "kp" | "kr" | "kw" | "kg" | "la" | "lv" | "lb" | "ls" | "lr" | "ly" | "li" | "lt" | "lu" | "mo" | "mk" | "mg" | "mw" | "my" | "mv" | "ml" | "mt" | "mh" | "mq" | "mr" | "mu" | "yt" | "mx" | "fm" | "md" | "mc" | "mn" | "ms" | "ma" | "mz" | "mm" | "na" | "nr" | "np" | "nl" | "an" | "nc" | "nz" | "ni" | "ne" | "ng" | "nu" | "nf" | "mp" | "no" | "om" | "pk" | "pw" | "ps" | "pa" | "pg" | "py" | "pe" | "ph" | "pn" | "pl" | "pt" | "pr" | "qa" | "re" | "ro" | "ru" | "rw" | "sh" | "kn" | "lc" | "pm" | "vc" | "ws" | "sm" | "st" | "sa" | "sn" | "rs" | "sc" | "sl" | "sg" | "sk" | "si" | "sb" | "so" | "za" | "gs" | "es" | "lk" | "sd" | "sr" | "sj" | "sz" | "se" | "ch" | "sy" | "tw" | "tj" | "tz" | "th" | "tl" | "tg" | "tk" | "to" | "tt" | "tn" | "tr" | "tm" | "tc" | "tv" | "ug" | "ua" | "ae" | "gb" | "us" | "um" | "uy" | "uz" | "vu" | "ve" | "vn" | "vg" | "vi" | "wf" | "eh" | "ye" | "zm" | "zw") & (unknown);
        /** Optional city name to prioritize when searching for the brand. */
        city?: string;
        /** Optional Merchant Category Code (MCC) to help identify the business category or industry. */
        mcc?: string | number;
        /** Optional phone number from the transaction to help verify brand match. */
        phone?: string | number;
        /** When set to true, the API performs additional verification to ensure the identified brand matches the transaction with high confidence. */
        high_confidence_only?: boolean;
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** True when the timeout ended processing and this response contains the usable data completed so far. Unfinished fields are omitted. */
        partial?: boolean;
        /** Always `ok` on success. */
        status?: string;
        /** Detailed brand information */
        brand?: {
          /** The domain name of the brand */
          domain?: string;
          /** The title or name of the brand */
          title?: string;
          /** A brief description of the brand */
          description?: string;
          /** The brand's slogan */
          slogan?: string;
          /** An array of brand colors */
          colors?: Array<Record<string, unknown>>;
          /** An array of logos associated with the brand. When a similarly shaped SVG variant exists, it is returned ahead of its raster equivalent; otherwise relevance order is preserved */
          logos?: Array<Record<string, unknown>>;
          /** An array of backdrop images for the brand */
          backdrops?: Array<Record<string, unknown>>;
          /** An array of social media links for the brand */
          socials?: Array<Record<string, unknown>>;
          /** Physical address of the brand */
          address?: Record<string, unknown>;
          /** Stock market information for this brand (will be null if not a publicly traded company) */
          stock?: Record<string, unknown>;
          /** Employee headcount information for the brand (will be null if unknown) */
          employees?: Record<string, unknown>;
          /** Indicates whether the brand content is not safe for work (NSFW) */
          is_nsfw?: boolean;
          /** Company email address */
          email?: string;
          /** Company phone number */
          phone?: string;
          /** Industry classification information for the brand */
          industries?: Record<string, unknown>;
          /** Important website links for the brand */
          links?: Record<string, unknown>;
          /** The primary language of the brand's website content. Detected from the HTML lang tag, page content analysis, or social media descriptions. */
          primary_language?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** HTTP status code */
        code?: number;
        /** Whether this response came from cache. */
        cache_metadata?: {
          /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
          status?: string;
          /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
          age_ms?: number;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Retry a webhook delivery. */
    "contextdev.retry_webhook_delivery": {
      input: {
        /** Resend even if the delivery already succeeded. Defaults to false. */
        force?: boolean;
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
        /**
         * Delivery ID.
         * @pattern ^whd_[a-f0-9]{32}$
         */
        delivery_id: string;
        /**
         * Unique key to prevent duplicate retry requests.
         * @maxLength 200
         */
        idempotencyKey?: string;
      };
      output: {
        /** Delivery ID. */
        id?: string;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Rotate a monitor webhook secret. */
    "contextdev.rotate_monitor_webhook_secret": {
      input: {
        /** ID of the monitor. */
        monitor_id: string;
      };
      output: {
        /** Always `web`. Optional. */
        mode?: string;
        /** id value. */
        id?: string;
        /** name value. */
        name?: string;
        /** What to watch: a page, a sitemap, or data extracted from a site. */
        target?: {
          /** Use `page` to watch one web page. */
          type?: string;
          /** Public HTTP(S) page URL to monitor. */
          url?: string;
          /** Plain-language goal describing which page changes matter. When provided without change_detection, semantic detection is inferred. */
          instructions?: string;
          /** Normalize whitespace before comparing or analyzing text. */
          normalize_whitespace?: boolean;
          /** Monitor these CSS-selected regions. Empty or omitted uses main content. Changes create a new baseline. */
          include_selectors?: Array<string>;
          /** Remove matching regions after inclusions. Changes create a new baseline. */
          exclude_selectors?: Array<string>;
          /** Optional browser actions executed in array order after the page loads, before content is captured, on every run. Requires a paid plan. Maximum: 5 actions. Changes create a new baseline. */
          actions?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        } | {
          /** Use `sitemap` to watch a site for added or removed URLs. */
          type?: string;
          /** Sitemap URL to monitor. */
          url?: string;
          /** URL path patterns to include (max 50). */
          include?: Array<string>;
          /** URL path patterns to exclude (max 50). */
          exclude?: Array<string>;
          /** Maximum number of sitemap URLs to track (capped at 10,000). */
          max_urls?: number;
          [key: string]: unknown;
        } | {
          /** Use `extract` to watch structured data across selected pages. */
          type?: string;
          /** Root URL to extract structured data from. */
          url?: string;
          /** JSON Schema for page selection and the baseline snapshot. Changes return diffs and evidence. */
          schema?: Record<string, unknown>;
          /** Natural-language instructions guiding which pages and facts to track and which changes to report. */
          instructions?: string;
          /** Maximum number of pages to track. */
          max_pages?: number;
          /** Optional maximum link depth from the starting URL (0 = only the starting page). */
          max_depth?: number;
          /** Allow page discovery on subdomains of the target site. */
          follow_subdomains?: boolean;
          [key: string]: unknown;
        };
        /** How changes are judged. Defaults to `semantic` for extract targets and page targets with `instructions`, otherwise `exact`. */
        change_detection?: {
          /** Use `exact` to compare visible text or sitemap URLs. */
          type?: string;
          [key: string]: unknown;
        } | {
          /** Use `semantic` to judge changes against the target instructions. */
          type?: string;
          /** Minimum confidence required to report a meaningful change, from 0 to 1. */
          confidence_threshold?: number;
          [key: string]: unknown;
        };
        /** How often the monitor runs. Defaults to once a day. */
        schedule?: {
          /** Use `interval` to run on a repeating schedule. */
          type?: string;
          /** Number of units between runs. The resulting interval (frequency × unit) must be at least 10 minutes and at most 1 year (e.g. minimum 10 when unit is minutes; maximum 365 when unit is days). */
          frequency?: number;
          /** Time unit used with `frequency` to set the run interval. */
          unit?: string;
          [key: string]: unknown;
        };
        /** Webhook destination and delivery settings. Null means no webhook is configured. */
        webhook?: {
          /** Public HTTP(S) URL that receives events. Slack and GovSlack URLs get formatted messages. */
          url?: string;
          /** Events to deliver. Defaults to `change.detected`; `run.completed` also includes unchanged runs. */
          events?: Array<string>;
          /** Webhook retry settings. Use {} for the default schedule. */
          retry?: Record<string, unknown>;
          /** API-generated signing secret. Visible only with full access or `monitors:write` permission. */
          secret?: string;
          [key: string]: unknown;
        } | null;
        /** Current state. Failed monitors keep running; paused monitors must be resumed with `status: "active"`. */
        status?: string;
        /** last run at value. */
        last_run_at?: string | null;
        /** last change at value. */
        last_change_at?: string | null;
        /** When the next scheduled run is due; null while paused. */
        next_run_at?: string | null;
        /** Error from the most recent failed run; null when the last run succeeded. */
        last_error?: {
          /** code value. */
          code?: string;
          /** message value. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** Present while webhook deliveries are failing consecutively; null when deliveries are healthy or no webhook is configured. Cleared on the next successful delivery and when the webhook URL changes. */
        webhook_failure?: {
          /** Number of consecutive delivery attempts that did not succeed. */
          consecutive_failures?: number;
          /** Outcome of the most recent failed delivery. rejected means a non-2xx response; failed means no HTTP response was received; skipped_unsafe_url means the URL failed the public-endpoint safety check. */
          last_status?: string;
          /** Human-readable description of the most recent failure. */
          last_message?: string;
          /** last failed at value. */
          last_failed_at?: string;
          [key: string]: unknown;
        } | null;
        /** created at value. */
        created_at?: string;
        /** updated at value. */
        updated_at?: string;
        /** Labels for filtering monitors, their changes, and their usage. */
        tags?: Array<string>;
        /** Comparison baseline, included on Retrieve. Null until capture completes or after target changes. */
        baseline?: {
          /** The page's visible text as last observed. */
          text?: string;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | {
          /** The sitemap URLs as last observed (sorted, normalized). */
          urls?: Array<string>;
          /** Number of URLs in the baseline. */
          url_count?: number;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | {
          /** Latest structured snapshot matching the extraction schema, refreshed at most daily; `null` before capture. */
          data?: unknown;
          /** The page URLs the monitor tracks and analyzes for changes. */
          urls_analyzed?: Array<string>;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Run a monitor now. */
    "contextdev.run_monitor_now": {
      input: {
        /** ID of the monitor. */
        monitor_id: string;
      };
      output: {
        /** monitor id value. */
        monitor_id?: string;
        /** ID of the queued run; pass it to Retrieve a monitor run. */
        run_id?: string;
        /** queued value. */
        queued?: boolean;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Scrape Anything. */
    "contextdev.scrape_web": {
      input: (unknown) & (unknown) & (unknown) & (unknown) & (unknown) & (unknown) & (unknown) & (unknown) & (unknown) & (unknown);
      output: {
        /** Final URL after redirects and browser actions. */
        url?: string;
        /** Rendered HTML after content filters. */
        html?: {
          /** Whether this output was requested. */
          requested?: boolean;
          /** True when this output succeeded, false when it failed, or null when not requested. */
          success?: boolean | null;
          /** Rendered HTML content. */
          data?: string | null;
          /** Machine-readable failure code when this output failed. */
          error_code?: string;
          /** Failure explanation and possible next steps. */
          message?: string;
          [key: string]: unknown;
        };
        /** Markdown after content filters. */
        markdown?: {
          /** Whether this output was requested. */
          requested?: boolean;
          /** True when this output succeeded, false when it failed, or null when not requested. */
          success?: boolean | null;
          /** Page content as Markdown. */
          data?: string | null;
          /** Machine-readable failure code when this output failed. */
          error_code?: string;
          /** Failure explanation and possible next steps. */
          message?: string;
          [key: string]: unknown;
        };
        /** Screenshot transferred to a downloadable file. */
        screenshot?: {
          /** Whether this output was requested. */
          requested?: boolean;
          /** True when this output succeeded, false when it failed, or null when not requested. */
          success?: boolean | null;
          /** Downloadable file stored by Connector. */
          data?: {
            /**
             * Download URL for the transferred file.
             * @format uri
             */
            url?: string;
            /** MIME type of the transferred file. */
            mimeType?: string;
            [key: string]: unknown;
          } | null;
          /** Machine-readable failure code when this output failed. */
          error_code?: string;
          /** Failure explanation and possible next steps. */
          message?: string;
          [key: string]: unknown;
        };
        /** Images after content filters. `[]` when none are found. */
        images?: {
          /** Whether this output was requested. */
          requested?: boolean;
          /** True when this output succeeded, false when it failed, or null when not requested. */
          success?: boolean | null;
          /** Images discovered on the page. */
          data?: Array<{
            /** Image URL or an inline image data URI. */
            url?: string;
            /** Alternative image text, when present. */
            alt?: string | null;
            /** Image width in pixels. */
            width?: number;
            /** Image height in pixels. */
            height?: number;
            /** Image classification returned by the provider. */
            classification?: string;
            /** Hosted image URL, valid for 24 hours after capture when file enrichment is enabled. */
            fileUrl?: string;
            [key: string]: unknown;
          }> | null;
          /** Machine-readable failure code when this output failed. */
          error_code?: string;
          /** Failure explanation and possible next steps. */
          message?: string;
          [key: string]: unknown;
        };
        /** Original response body transferred to a downloadable file. */
        bytes?: {
          /** Whether this output was requested. */
          requested?: boolean;
          /** True when this output succeeded, false when it failed, or null when not requested. */
          success?: boolean | null;
          /** Downloaded original response body. */
          data?: {
            /**
             * Download URL for the transferred file.
             * @format uri
             */
            url?: string;
            /** MIME type of the transferred file. */
            mimeType?: string;
            /** Original response Content-Type, including any charset. */
            contentType?: string;
            [key: string]: unknown;
          } | null;
          /** Machine-readable failure code when this output failed. */
          error_code?: string;
          /** Failure explanation and possible next steps. */
          message?: string;
          [key: string]: unknown;
        };
        /** Custom or prebuilt parser output. */
        parsed?: {
          /** Whether this output was requested. */
          requested?: boolean;
          /** True when this output succeeded, false when it failed, or null when not requested. */
          success?: boolean | null;
          /** Extracted fields; structure depends on the requested parser or custom rules. */
          data?: Record<string, unknown> | null;
          /** Machine-readable failure code when this output failed. */
          error_code?: string;
          /** Failure explanation and possible next steps. */
          message?: string;
          /** Parser used for this output, including custom for CSS extraction rules. */
          type?: string;
          [key: string]: unknown;
        };
        /** Relevant Markdown excerpts in page order. `[Heading]` adds context; `…` marks omitted text. */
        highlights?: {
          /** Whether this output was requested. */
          requested?: boolean;
          /** True when this output succeeded, false when it failed, or null when not requested. */
          success?: boolean | null;
          /** Relevant excerpts in page order. */
          data?: Array<string> | null;
          /** Machine-readable failure code when this output failed. */
          error_code?: string;
          /** Failure explanation and possible next steps. */
          message?: string;
          [key: string]: unknown;
        };
        /** Object matching `jsonParams.schema`. */
        json?: {
          /** Whether this output was requested. */
          requested?: boolean;
          /** True when this output succeeded, false when it failed, or null when not requested. */
          success?: boolean | null;
          /** Extracted object following the supplied JSON Schema. */
          data?: Record<string, unknown> | null;
          /** Machine-readable failure code when this output failed. */
          error_code?: string;
          /** Failure explanation and possible next steps. */
          message?: string;
          [key: string]: unknown;
        };
        /** Product details found on the page. */
        product?: {
          /** Whether this output was requested. */
          requested?: boolean;
          /** True when this output succeeded, false when it failed, or null when not requested. */
          success?: boolean | null;
          /** Product-page detection and extracted product. */
          data?: {
            /** Whether the page is a product detail page. */
            isProductPage?: boolean;
            /** Extracted product details, or null for a non-product page. */
            product?: Record<string, unknown> | null;
            [key: string]: unknown;
          } | null;
          /** Machine-readable failure code when this output failed. */
          error_code?: string;
          /** Failure explanation and possible next steps. */
          message?: string;
          [key: string]: unknown;
        };
        /** Authenticated browser profile used for this scrape, or null when no profile was requested. New and existing profile requests both return the profile ID. */
        profile?: {
          /** Save this ID after creating a profile, then reuse it as sharedParams.profile.profileId with type "existing". */
          id?: string;
          [key: string]: unknown;
        } | null;
        /** True when at least one requested output succeeds but the response has failed or incomplete outputs. Absent when all requested outputs fail. */
        isPartial?: boolean;
        /** Page metadata. Fields are omitted when not found. */
        metadata?: {
          /** Best title extracted from the page. */
          title?: string;
          /** Best description extracted from standard, Open Graph, or Twitter metadata. */
          description?: string;
          /** Language extracted from html lang or language meta tags. */
          language?: string;
          /** Keywords extracted from the page's keywords meta tag. */
          keywords?: Array<string>;
          /** Resolved canonical URL, when present. */
          canonicalUrl?: string;
          /** Author metadata, when present. */
          author?: string;
          /** Site or application name from page metadata. */
          siteName?: string;
          /** Primary resolved preview image from Open Graph, Twitter, or image metadata. */
          image?: string;
          /** Resolved favicon URL, when present. */
          favicon?: string;
          /** Published timestamp/date from page metadata, when present. */
          publishedTime?: string;
          /** Modified timestamp/date from page metadata, when present. */
          modifiedTime?: string;
          /** Robots meta directive, when present. */
          robots?: string;
          /** Open Graph metadata with the og: prefix removed and keys camel-cased. */
          openGraph?: Record<string, unknown>;
          /** Twitter card metadata with the twitter: prefix removed and keys camel-cased. */
          twitter?: Record<string, unknown>;
          /** Resolved alternate links from link rel=alternate tags. */
          alternates?: Array<Record<string, unknown>>;
          /** Up to 500 h1–h6 headings in document order, before content filtering. */
          headings?: Array<Record<string, unknown>>;
          /** JSON-LD structured data blocks parsed from the page. */
          jsonLd?: Array<Record<string, unknown>>;
          /** Additional non-social meta tags not promoted to top-level metadata fields. */
          additionalMeta?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Whether this response came from cache. */
        cache_metadata?: {
          /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
          status?: string;
          /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
          age_ms?: number;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Auto-complete Brand. */
    "contextdev.search_brands": {
      input: {
        /**
         * Search term, matched against the fields selected by queryBy (e.g. 'stripe', 'stripe.com', 'stri').
         * @minLength 1
         * @maxLength 100
         */
        query: string;
        /** Only return brands in this country, as an uppercase ISO 3166-1 alpha-2 code such as US or GB. */
        country?: "AD" | "AE" | "AF" | "AG" | "AI" | "AL" | "AM" | "AO" | "AQ" | "AR" | "AS" | "AT" | "AU" | "AW" | "AX" | "AZ" | "BA" | "BB" | "BD" | "BE" | "BF" | "BG" | "BH" | "BI" | "BJ" | "BL" | "BM" | "BN" | "BO" | "BQ" | "BR" | "BS" | "BT" | "BV" | "BW" | "BY" | "BZ" | "CA" | "CC" | "CD" | "CF" | "CG" | "CH" | "CI" | "CK" | "CL" | "CM" | "CN" | "CO" | "CR" | "CU" | "CV" | "CW" | "CX" | "CY" | "CZ" | "DE" | "DJ" | "DK" | "DM" | "DO" | "DZ" | "EC" | "EE" | "EG" | "EH" | "ER" | "ES" | "ET" | "FI" | "FJ" | "FK" | "FM" | "FO" | "FR" | "GA" | "GB" | "GD" | "GE" | "GF" | "GG" | "GH" | "GI" | "GL" | "GM" | "GN" | "GP" | "GQ" | "GR" | "GS" | "GT" | "GU" | "GW" | "GY" | "HK" | "HM" | "HN" | "HR" | "HT" | "HU" | "ID" | "IE" | "IL" | "IM" | "IN" | "IO" | "IQ" | "IR" | "IS" | "IT" | "JE" | "JM" | "JO" | "JP" | "KE" | "KG" | "KH" | "KI" | "KM" | "KN" | "KP" | "KR" | "KW" | "KY" | "KZ" | "LA" | "LB" | "LC" | "LI" | "LK" | "LR" | "LS" | "LT" | "LU" | "LV" | "LY" | "MA" | "MC" | "MD" | "ME" | "MF" | "MG" | "MH" | "MK" | "ML" | "MM" | "MN" | "MO" | "MP" | "MQ" | "MR" | "MS" | "MT" | "MU" | "MV" | "MW" | "MX" | "MY" | "MZ" | "NA" | "NC" | "NE" | "NF" | "NG" | "NI" | "NL" | "NO" | "NP" | "NR" | "NU" | "NZ" | "OM" | "PA" | "PE" | "PF" | "PG" | "PH" | "PK" | "PL" | "PM" | "PN" | "PR" | "PS" | "PT" | "PW" | "PY" | "QA" | "RE" | "RO" | "RS" | "RU" | "RW" | "SA" | "SB" | "SC" | "SD" | "SE" | "SG" | "SH" | "SI" | "SJ" | "SK" | "SL" | "SM" | "SN" | "SO" | "SR" | "SS" | "ST" | "SV" | "SX" | "SY" | "SZ" | "TC" | "TD" | "TF" | "TG" | "TH" | "TJ" | "TK" | "TL" | "TM" | "TN" | "TO" | "TR" | "TT" | "TV" | "TW" | "TZ" | "UA" | "UG" | "UM" | "US" | "UY" | "UZ" | "VA" | "VC" | "VE" | "VG" | "VI" | "VN" | "VU" | "WF" | "WS" | "YE" | "YT" | "ZA" | "ZM" | "ZW";
        /** Only return brands with this primary language, such as english or french. */
        language?: "afrikaans" | "albanian" | "amharic" | "arabic" | "armenian" | "assamese" | "aymara" | "azeri" | "basque" | "belarusian" | "bengali" | "bosnian" | "bulgarian" | "burmese" | "cantonese" | "catalan" | "cebuano" | "chinese" | "corsican" | "croatian" | "czech" | "danish" | "dutch" | "english" | "esperanto" | "estonian" | "farsi" | "fijian" | "finnish" | "french" | "galician" | "georgian" | "german" | "greek" | "guarani" | "gujarati" | "haitian-creole" | "hausa" | "hawaiian" | "hebrew" | "hindi" | "hmong" | "hungarian" | "icelandic" | "igbo" | "indonesian" | "irish" | "italian" | "japanese" | "javanese" | "kannada" | "kazakh" | "khmer" | "kinyarwanda" | "korean" | "kurdish" | "kyrgyz" | "lao" | "latin" | "latvian" | "lingala" | "lithuanian" | "luxembourgish" | "macedonian" | "malagasy" | "malay" | "malayalam" | "maltese" | "maori" | "marathi" | "mongolian" | "nepali" | "norwegian" | "odia" | "oromo" | "pashto" | "pidgin" | "polish" | "portuguese" | "punjabi" | "quechua" | "romanian" | "russian" | "samoan" | "scottish-gaelic" | "serbian" | "sesotho" | "shona" | "sindhi" | "sinhala" | "slovak" | "slovene" | "somali" | "spanish" | "sundanese" | "swahili" | "swedish" | "tagalog" | "tajik" | "tamil" | "tatar" | "telugu" | "thai" | "tibetan" | "tigrinya" | "tongan" | "tswana" | "turkish" | "turkmen" | "ukrainian" | "urdu" | "uyghur" | "uzbek" | "vietnamese" | "welsh" | "wolof" | "xhosa" | "yiddish" | "yoruba" | "zulu";
        /** Whether the search term matches by prefix, so partial words match as they are typed (e.g. 'stri' matches Stripe). Set to false to match whole words only. */
        autocomplete?: boolean;
        /**
         * Fields to match the search term against, as a comma-separated list or repeated parameter: 'name', 'domain', or both. Defaults to both.
         * @minItems 1
         */
        queryBy?: Array<"name" | "domain">;
        /**
         * Maximum number of typos tolerated when matching, from 0 to 2. Defaults to 0 (no typo tolerance).
         * @minimum 0
         * @maximum 2
         */
        typoTolerance?: number;
        /**
         * Comma-separated labels for filtering usage, e.g. `production,team-alpha`.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** Up to 10 matching brands, name matches first, then domain matches, most popular first within each group. Empty when nothing matches. */
        results?: Array<{
          /** The brand's domain. */
          domain?: string;
          /** The brand's name. Empty string when unknown. */
          name?: string;
          /** The brand's description, when available. */
          description?: string;
          /** The brand's country, when available, as an uppercase ISO 3166-1 alpha-2 code. */
          country?: string;
          /** The brand's primary language, when available. */
          language?: string;
          /** Logo link URL that serves the brand's logo, generated per request for the calling organization. */
          logo?: string;
          [key: string]: unknown;
        }>;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Search companies. */
    "contextdev.search_companies": {
      input: {
        /**
         * Describe the companies to find.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /** Additional constraints every result must match. */
        filters?: {
          /** Headquarters countries as two-letter codes, such as US or GB. */
          countries?: Array<string>;
          /**
           * Minimum headcount; includes overlapping employee ranges.
           * @minimum 0
           */
          employees_min?: number;
          /**
           * Maximum headcount; includes overlapping employee ranges.
           * @minimum 0
           */
          employees_max?: number;
        };
        /**
         * Maximum number of results to return (1-100).
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Use next_cursor to fetch the next page.
         * @maxLength 64
         */
        cursor?: string;
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** Matching companies, most relevant first by default. */
        results?: Array<{
          /** Company name. */
          name?: string;
          /** The company's website domain. */
          domain?: string;
          /** What the company does. */
          description?: string | null;
          /** Industries the company operates in. */
          industries?: Array<string>;
          /** Year the company was founded. */
          founded_year?: number | null;
          /** Where the company is headquartered. */
          headquarters?: Record<string, unknown>;
          /** How many people the company employs. */
          employees?: Record<string, unknown>;
          /** Known funding history. */
          funding?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page; null when there are no more results. */
        next_cursor?: string | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Search news. */
    "contextdev.search_news": {
      input: {
        /** What to search for: a specific company, or a natural-language query across all news. */
        searchBy: {
          /** Use `natural_language` to search all news with a plain-language query. */
          type: "natural_language";
          /**
           * What to search for, in plain language, such as "chip export restrictions to China".
           * @minLength 2
           * @maxLength 1000
           */
          query: string;
        } | {
          /** Use `entity` to find news about a specific company. */
          type: "entity";
          /** The company to search news for, identified by name, domain, ticker, or ISIN. */
          entity: {
            /** Use `name` to identify the company by name. */
            type: "name";
            /**
             * Company name.
             * @minLength 2
             * @maxLength 200
             */
            name: string;
          } | {
            /** Use `domain` to identify the company by website domain. */
            type: "domain";
            /**
             * Company website domain, such as apple.com.
             * @minLength 1
             * @maxLength 253
             */
            domain: string;
          } | {
            /** Use `ticker` to identify a publicly traded company. */
            type: "ticker";
            /**
             * Public-company ticker.
             * @minLength 1
             * @maxLength 20
             * @pattern ^[A-Za-z0-9.-]+$
             */
            ticker: string;
            /** Stock exchange the ticker trades on, used to disambiguate tickers listed on multiple exchanges. */
            exchange?: "AMEX" | "AMS" | "AQS" | "ASX" | "ATH" | "BER" | "BME" | "BRU" | "BSE" | "BUD" | "BUE" | "BVC" | "CBOE" | "CNQ" | "CPH" | "DFM" | "DOH" | "DUB" | "DUS" | "DXE" | "EGX" | "FSX" | "HAM" | "HEL" | "HKSE" | "HOSE" | "ICE" | "IOB" | "IST" | "JKT" | "JNB" | "JPX" | "KLS" | "KOE" | "KSC" | "KUW" | "LIS" | "LSE" | "MCX" | "MEX" | "MIL" | "MUN" | "NASDAQ" | "NEO" | "NSE" | "NYSE" | "NZE" | "OSL" | "OTC" | "PAR" | "PNK" | "PRA" | "RIS" | "SAO" | "SAU" | "SES" | "SET" | "SGO" | "SHH" | "SHZ" | "SIX" | "STO" | "STU" | "TAI" | "TAL" | "TLV" | "TSX" | "TSXV" | "TWO" | "VIE" | "WSE" | "XETRA";
          } | {
            /** Use `isin` to identify the company by its securities identifier. */
            type: "isin";
            /**
             * International Securities Identification Number.
             * @pattern ^[A-Za-z]{2}[A-Za-z0-9]{9}[0-9]$
             */
            isin: string;
          };
        };
        /** Optional result filters. Use at most one of sourceDomain, sourceCountry, articleLanguage, or articleType. A date range may accompany that category; date.from must not exceed date.to. */
        filterBy?: (unknown) & (unknown) & (unknown) & (unknown) & (unknown) & (unknown);
        /** Result ordering. Defaults to newest for entity searches. Natural-language searches are always ordered by relevance. */
        sortBy?: {
          /** Result ordering. */
          type: "relevance" | "newest";
        };
        /**
         * Maximum results to return. Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque next_cursor from the previous response, or null for the first page.
         * @maxLength 300
         */
        cursor?: string | null;
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** Articles matching the search, in the requested order. */
        data?: Array<{
          /** Stable unique identifier for this article. Use it to deduplicate or reference an article across requests. */
          id?: string;
          /** Shared by articles covering the same story on the same day. Use it to group or collapse syndicated copies of one announcement across outlets. */
          story_id?: string;
          /** Link to the article on the publisher site. */
          url?: string;
          /** Article headline. */
          title?: string;
          /** Article summary or excerpt. Natural-language search descriptions include matching passages and are capped at 2,000 characters. */
          description?: string | null;
          /** Language the article is written in, as a lowercase ISO 639-1 code such as en. Null when unknown. */
          language?: string | null;
          /** Bylined authors. Empty when no byline is available. */
          authors?: Array<string>;
          /** Lead image for the article, when one is available. */
          image_url?: string | null;
          /** When the article was published, as an ISO 8601 timestamp. Null when the publisher does not state a reliable date. */
          published_at?: string | null;
          /** Kind of coverage. Use it to separate independent reporting (editorial) from company-issued content (press_release, regulatory_filing, advisory). */
          type?: string;
          /** The publication that published the article. */
          source?: Record<string, unknown>;
          /** How the article relates to the company you searched for. Null for natural-language searches. */
          match?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** True when more results are available beyond this page. */
        has_more?: boolean;
        /** Pass as cursor in the next request to fetch the following page. Null when there are no more results. */
        next_cursor?: string | null;
        /** Summary information about this response. */
        meta?: {
          /** Number of articles in this page. */
          count?: number;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Search the web. */
    "contextdev.search_web": {
      input: {
        /**
         * Search query. Accepts natural language as well as Google-style search operators such as `site:`, `-site:`, `inurl:`, `intitle:`, quoted phrases, and `OR`.
         * @minLength 1
         * @maxLength 500
         */
        query: string;
        /**
         * Number of results to request and return (1–100). Defaults to 10.
         * @minimum 1
         * @maximum 100
         */
        numResults?: number;
        /**
         * Allowlist — only return results from these domains. Up to 100 domains. Example: ["arxiv.org", "github.com"].
         * @maxItems 100
         */
        includeDomains?: Array<string>;
        /**
         * Blocklist — drop results from these domains. Up to 100 domains. Example: ["pinterest.com", "reddit.com"].
         * @maxItems 100
         */
        excludeDomains?: Array<string>;
        /** Restrict results to content published within this window. */
        freshness?: "last_24_hours" | "last_week" | "last_month" | "last_year";
        /** Two-letter ISO 3166-1 alpha-2 country code to localize results to a specific country (maps to Google's `gl` parameter). Example: "us", "gb", "de". */
        country?: "af" | "al" | "dz" | "as" | "ad" | "ao" | "ai" | "aq" | "ag" | "ar" | "am" | "aw" | "au" | "at" | "az" | "bs" | "bh" | "bd" | "bb" | "by" | "be" | "bz" | "bj" | "bm" | "bt" | "bo" | "ba" | "bw" | "bv" | "br" | "io" | "bn" | "bg" | "bf" | "bi" | "kh" | "cm" | "ca" | "cv" | "ky" | "cf" | "td" | "cl" | "cn" | "cx" | "cc" | "co" | "km" | "cg" | "cd" | "ck" | "cr" | "ci" | "hr" | "cu" | "cy" | "cz" | "dk" | "dj" | "dm" | "do" | "ec" | "eg" | "sv" | "gq" | "er" | "ee" | "et" | "fk" | "fo" | "fj" | "fi" | "fr" | "gf" | "pf" | "tf" | "ga" | "gm" | "ge" | "de" | "gh" | "gi" | "gr" | "gl" | "gd" | "gp" | "gu" | "gt" | "gn" | "gw" | "gy" | "ht" | "hm" | "va" | "hn" | "hk" | "hu" | "is" | "in" | "id" | "ir" | "iq" | "ie" | "il" | "it" | "jm" | "jp" | "jo" | "kz" | "ke" | "ki" | "kp" | "kr" | "kw" | "kg" | "la" | "lv" | "lb" | "ls" | "lr" | "ly" | "li" | "lt" | "lu" | "mo" | "mk" | "mg" | "mw" | "my" | "mv" | "ml" | "mt" | "mh" | "mq" | "mr" | "mu" | "yt" | "mx" | "fm" | "md" | "mc" | "mn" | "ms" | "ma" | "mz" | "mm" | "na" | "nr" | "np" | "nl" | "an" | "nc" | "nz" | "ni" | "ne" | "ng" | "nu" | "nf" | "mp" | "no" | "om" | "pk" | "pw" | "ps" | "pa" | "pg" | "py" | "pe" | "ph" | "pn" | "pl" | "pt" | "pr" | "qa" | "re" | "ro" | "ru" | "rw" | "sh" | "kn" | "lc" | "pm" | "vc" | "ws" | "sm" | "st" | "sa" | "sn" | "rs" | "sc" | "sl" | "sg" | "sk" | "si" | "sb" | "so" | "za" | "gs" | "es" | "lk" | "sd" | "sr" | "sj" | "sz" | "se" | "ch" | "sy" | "tw" | "tj" | "tz" | "th" | "tl" | "tg" | "tk" | "to" | "tt" | "tn" | "tr" | "tm" | "tc" | "tv" | "ug" | "ua" | "ae" | "gb" | "us" | "um" | "uy" | "uz" | "vu" | "ve" | "vn" | "vg" | "vi" | "wf" | "eh" | "ye" | "zm" | "zw";
        /** Languages to return results in, as BCP 47 language codes such as `en` or `de`, or "all" for any language. Defaults to "all". Example: ["en", "de"]. */
        languages?: "all" | Array<"am" | "ar" | "az" | "be" | "bg" | "bn" | "ca" | "ceb" | "cs" | "cy" | "da" | "de" | "el" | "en" | "es" | "et" | "eu" | "fa" | "fi" | "fr" | "gu" | "ha" | "haw" | "he" | "hi" | "hr" | "hu" | "hy" | "id" | "is" | "it" | "ja" | "ka" | "kk" | "kn" | "ko" | "ku" | "ky" | "lo" | "lt" | "lv" | "mk" | "ml" | "mn" | "mr" | "ms" | "ne" | "nl" | "no" | "or" | "pa" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "so" | "sq" | "sr" | "sv" | "sw" | "ta" | "te" | "th" | "tl" | "tr" | "uk" | "ur" | "uz" | "vi" | "yo" | "zh">;
        /** Currently has no effect. */
        queryFanout?: boolean;
        /** Inline Markdown scraping for each result. Set `enabled: true` to activate. */
        markdownOptions?: {
          /** Scrape each result to Markdown. Adds 1 credit per result with Markdown. */
          enabled?: boolean;
          /** Keep hyperlinks in the Markdown. */
          includeLinks?: boolean;
          /** Emit image references in the Markdown. */
          includeImages?: boolean;
          /** Truncate inline base64 image payloads to keep responses small. */
          shortenBase64Images?: boolean;
          /** Strip nav, header, footer, and sidebar — keep only the primary article content. */
          useMainContentOnly?: boolean;
          /** PDF handling. `start`/`end` limit parsing to an inclusive, 1-based page range. */
          pdf?: {
            /** Parse PDF URLs. When false, PDF results are skipped with WEBSITE_ACCESS_ERROR. */
            shouldParse?: boolean;
            /**
             * First 1-based PDF page to parse.
             * @minimum 1
             */
            start?: number;
            /**
             * Last PDF page to parse (1-based, inclusive). Defaults to the final page. Must be >= start.
             * @minimum 1
             */
            end?: number;
          };
          /** Render iframe contents into the Markdown. */
          includeFrames?: boolean;
          /**
           * Maximum cache age in milliseconds for result page content. Defaults to 180 days (15552000000 ms) when Markdown is requested, or 365 days (31536000000 ms) when only highlights are requested. Explicit values override either default. Maximum: 365 days. Set to 0 to force a fresh scrape.
           * @minimum 0
           * @maximum 31536000000
           */
          maxAgeMs?: number | null;
          /**
           * Extra wait after page load before rendering, in ms (0–30000). Useful for JS-heavy pages.
           * @minimum 0
           * @maximum 30000
           */
          waitForMs?: number | null;
          /** Request deadline and what to return when it passes. */
          timeoutOpts?: {
            /**
             * Deadline in milliseconds.
             * @minimum 1
             * @maximum 300000
             */
            milliseconds: number;
            /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. "return-partial" requires at least 5000 ms. */
            behavior?: "fail" | "return-partial";
          };
        } | null;
        /** Passages from each result page that are relevant to the query. Pages are read with the `markdownOptions` settings. */
        highlightsOptions?: {
          /** Return relevant passages for each result. Adds 1 credit per 10 results. */
          enabled?: boolean;
          /**
           * Maximum combined length of passages per result.
           * @minimum 100
           * @maximum 20000
           */
          maxCharacters?: number;
        } | null;
        /**
         * Maximum length of each result's `description`, in characters.
         * @minimum 0
         */
        descriptionMaxCharacters?: number | null;
        /** Request deadline and what to return when it passes. */
        timeoutOpts?: {
          /**
           * Deadline in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          milliseconds: number;
          /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. */
          behavior?: "fail" | "return-partial";
        };
        /** `enabled` turns on zero data retention. Returns 403 `ZDR_NOT_ENABLED` unless your organization has ZDR. */
        zdr?: "enabled" | "disabled";
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** True when timeoutOpts.behavior=return-partial returned the usable results collected before the deadline. Partial collections are not cached as complete results. */
        partial?: boolean;
        /** results value. */
        results?: Array<{
          /** Canonical result URL. */
          url?: string;
          /** Page title. */
          title?: string;
          /** Snippet excerpt from the page. Empty string when the search provider does not supply a snippet. */
          description?: string;
          /** Relevance to the original query. */
          relevance?: string;
          /** Markdown scrape status and content for this result. */
          markdown?: Record<string, unknown>;
          /** Highlights status and passages for this result. */
          highlights?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Echo of the original query (useful when fanout was enabled). */
        query?: string;
        /** Whether this response came from cache. */
        cache_metadata?: {
          /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
          status?: string;
          /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
          age_ms?: number;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Submit a batch. */
    "contextdev.submit_batch": {
      input: {
        /** Choose a URL list or a site crawl. */
        input: {
          /** Scrape the pages in `data.urls`. */
          mode: "scrape";
          /** Use the same formats and parameters as POST /web/scrape, replacing url with urls. Options apply to every page. */
          data: {
            /**
             * Pages to scrape. Maximum 100000.
             * @minItems 1
             * @maxItems 100000
             */
            urls: Array<{
              /**
               * Page URL to scrape.
               * @minLength 1
               */
              url: string;
              /**
               * Your ID for this page, returned with its result. The same URL can use different IDs.
               * @minLength 1
               * @maxLength 200
               */
              itemId?: string;
              /** Custom JSON returned unchanged with this page result. */
              meta?: Record<string, unknown>;
            }>;
            /** Outputs to return. Set at least one to `true`. */
            formats: {
              /** Rendered HTML. */
              html?: boolean;
              /** Page content as Markdown. */
              markdown?: boolean;
              /** A screenshot of the page. */
              screenshot?: boolean;
              /** Images found on the page. */
              images?: boolean;
              /** The original HTTP response body. */
              bytes?: boolean;
              /** Fields extracted with custom rules or a prebuilt parser, returned as `parsed`. */
              parse?: boolean;
              /** Markdown excerpts relevant to `highlightsParams.query`. */
              highlights?: boolean;
              /** An object matching `jsonParams.schema`, extracted from the page. */
              json?: boolean;
              /** Product details such as name, price, and availability. */
              product?: boolean;
            };
            /** Markdown options. Requires `formats.markdown`. */
            markdownParams?: (unknown) & (unknown);
            /** Screenshot options. Requires formats.screenshot: true. */
            screenshotParams?: {
              /** What to capture: `viewport`, `fullPage`, one element, or a rectangle. Max 40 megapixels. */
              area?: "viewport" | "fullPage" | {
                /**
                 * CSS selector matching exactly one visible element.
                 * @maxLength 2048
                 * @pattern \S
                 */
                selector: string;
              } | {
                /**
                 * Left edge of the capture, in pixels from the document origin.
                 * @minimum 0
                 * @maximum 100000
                 */
                x: number;
                /**
                 * Top edge of the capture, in pixels from the document origin.
                 * @minimum 0
                 * @maximum 100000
                 */
                y: number;
                /**
                 * Width of the capture in pixels.
                 * @minimum 1
                 * @maximum 7680
                 */
                width: number;
                /**
                 * Height of the capture in pixels.
                 * @minimum 1
                 * @maximum 100000
                 */
                height: number;
              };
              /** Image format for the screenshot. */
              format?: "png" | "jpeg" | "webp";
            };
            /** Image options. Requires formats.images: true. */
            imageParams?: {
              /**
               * Extra data per image: `dimensions`, `classification`, or a hosted `file` URL.
               * @minItems 1
               * @maxItems 3
               */
              enrich?: Array<"dimensions" | "classification" | "file">;
              /** Set `visual` to drop visual duplicates, keeping the largest copy. */
              dedupe?: "none" | "visual";
            };
            /** Requires `formats.parse: true`; required when it is set. */
            parseParams?: {
              /** Extract fields using custom CSS rules. This is the default when type is omitted. */
              type?: "custom";
              /** Named CSS extraction rules, including nested rules. */
              rules: Record<string, string | {
                  /**
                   * CSS selector to match within the current page or parent rule.
                   * @minLength 1
                   * @maxLength 2048
                   */
                  selector: string;
                  /** Return the first match with `item` or all matches with `list`. */
                  type?: "item" | "list";
                  /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                  output?: "text" | "html" | string | Record<string, string | {
                      /**
                       * CSS selector to match within the current page or parent rule.
                       * @minLength 1
                       * @maxLength 2048
                       */
                      selector: string;
                      /** Return the first match with `item` or all matches with `list`. */
                      type?: "item" | "list";
                      /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                      output?: "text" | "html" | string | Record<string, string | {
                          /**
                           * CSS selector to match within the current page or parent rule.
                           * @minLength 1
                           * @maxLength 2048
                           */
                          selector: string;
                          /** Return the first match with `item` or all matches with `list`. */
                          type?: "item" | "list";
                          /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                          output?: "text" | "html" | string | Record<string, string | {
                              /**
                               * CSS selector to match within the current page or parent rule.
                               * @minLength 1
                               * @maxLength 2048
                               */
                              selector: string;
                              /** Return the first match with `item` or all matches with `list`. */
                              type?: "item" | "list";
                              /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                              output?: "text" | "html" | string | Record<string, string | {
                                  /**
                                   * CSS selector to match within the current page or parent rule.
                                   * @minLength 1
                                   * @maxLength 2048
                                   */
                                  selector: string;
                                  /** Return the first match with `item` or all matches with `list`. */
                                  type?: "item" | "list";
                                  /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                                  output?: "text" | "html" | string;
                                }>;
                            }>;
                        }>;
                    }>;
                }>;
            } | {
              /** Use a prebuilt parser instead of custom rules. */
              type: "prebuilt";
              /** The prebuilt parser to use. See https://docs.context.dev/scrape/prebuilt-parsers for supported sources, request options, and output schemas. */
              parser: "google-maps" | "google-maps-reviews" | "google-play" | "google-play-reviews" | "app-store" | "app-store-reviews" | "g2-reviews" | "instagram-profile" | "instagram-post" | "instagram-feed" | "tiktok-profile" | "tiktok-video" | "tiktok-feed" | "tiktok-comments" | "tiktok-followers" | "tiktok-following" | "tiktok-user-search" | "emails" | "phone-numbers" | "links";
              /** google-maps-reviews only. Order of data.reviews. newest, relevant, highest, and lowest follow Google; oldest returns the earliest reviews first, which Google itself does not offer. */
              sort?: "newest" | "oldest" | "relevant" | "highest" | "lowest";
              /**
               * google-maps-reviews only. Maximum number of reviews to return. Defaults to 100; maximum 1000.
               * @minimum 1
               * @maximum 1000
               */
              limit?: number;
            };
            /** Requires `formats.highlights: true`; required when it is set. */
            highlightsParams?: {
              /**
               * The question or topic to find passages for.
               * @minLength 1
               * @maxLength 2000
               */
              query: string;
              /**
               * Maximum combined length of returned passages.
               * @minimum 100
               * @maximum 20000
               */
              maxCharacters?: number;
            };
            /** Requires `formats.json: true`; required when it is set. */
            jsonParams?: {
              /** JSON Schema (not an example object) for a top-level object, up to 50 KB. Use optional or nullable fields for missing facts. */
              schema: Record<string, unknown>;
              /**
               * Extra guidance, such as which facts to prefer or how to read a field.
               * @maxLength 2000
               */
              instructions?: string;
            };
            /** Product options. Requires formats.product: true. */
            productParams?: {
              /** Drop visually duplicate product images, keeping the largest copy. */
              dedupeImages?: boolean;
            };
            /** Browser and content settings shared by all outputs. */
            sharedParams?: {
              /** Create or reuse an authenticated browser profile. Requires a paid plan and an HTTPS target. Profiles persist session state, bypass shared caches, and cannot be combined with ZDR, custom headers, raw bytes, Google Maps, app store, Instagram, or G2 parsers. The emails, phone-numbers, and links parsers support profiles. */
              profile?: {
                /** Reuse a saved browser profile. */
                type: "existing";
                /**
                 * The ID returned in profile.id by an earlier scrape.
                 * @pattern ^prof_[a-f0-9]{32}$
                 */
                profileId: string;
              } | {
                /** Sign in and create a browser profile. */
                type: "new";
                /**
                 * Username or email for the target website.
                 * @minLength 1
                 * @maxLength 1024
                 */
                identifier: string;
                /**
                 * Password used to sign in. It is never stored in the profile.
                 * @minLength 1
                 * @maxLength 4096
                 */
                password: string;
                /**
                 * Optional label shown when listing profiles with `GET /org/browser/profiles`.
                 * @minLength 1
                 * @maxLength 500
                 */
                description?: string;
              };
              /**
               * Proxy country as a two-letter code, such as `US`. Case-insensitive.
               * @pattern ^[A-Za-z]{2}$
               */
              country?: string;
              /** HTTP headers to send to the target site. Requests with headers skip the cache. */
              headers?: Record<string, string>;
              /** Browser size in pixels. Omit for 1920 × 1080. When provided, missing dimensions default to 1440 × 900. */
              viewport?: {
                /**
                 * Browser viewport width in pixels.
                 * @minimum 240
                 * @maximum 7680
                 */
                width?: number;
                /**
                 * Browser viewport height in pixels.
                 * @minimum 240
                 * @maximum 4320
                 */
                height?: number;
              };
              /** Emulate a light or dark color scheme. */
              theme?: "light" | "dark";
              /** Accept cookie banners before actions and capture. */
              dismissCookies?: boolean;
              /** Close other popups before actions and capture. */
              dismissPopups?: boolean;
              /**
               * Browser steps run in order before capture. Requires a paid plan. Skips the cache.
               * @minItems 1
               * @maxItems 5
               */
              actions?: Array<{
                /** Use `perform` for a plain-language browser instruction. */
                type: "perform";
                /**
                 * One browser instruction, such as clicking a button or entering text.
                 * @minLength 1
                 * @maxLength 500
                 */
                action: string;
              } | {
                /** Use `scroll` to move through the page or a container. */
                type: "scroll";
                /** Direction to scroll. */
                direction?: "down" | "up" | "left" | "right";
                /** Distance per scroll: pixels, one `viewport`, or `max` to reach the end. */
                amount?: number | "viewport" | "max";
                /**
                 * Scroll this container. Omit to scroll the page.
                 * @maxLength 2000
                 * @pattern \S
                 */
                selector?: string;
                /**
                 * Maximum number of scroll steps for this action.
                 * @minimum 1
                 * @maximum 50
                 */
                maxScrolls?: number;
              } | {
                /** Use `wait` to pause for a fixed duration. */
                type: "wait";
                /**
                 * Time to pause in milliseconds before the next action.
                 * @minimum 0
                 * @maximum 30000
                 */
                milliseconds: number;
              } | {
                /** Use `waitFor` to wait for a matching element. */
                type: "waitFor";
                /**
                 * CSS selector to wait for before continuing.
                 * @maxLength 2048
                 * @pattern \S
                 */
                selector: string;
              }>;
              /** Milliseconds, or a CSS selector to wait for, after actions. Defaults to 500 (2000 with frames or XML). */
              waitFor?: number | string;
              /** Wait for CSS animations to finish before capture. Defaults to `true` when `screenshot` is requested. */
              settleAnimations?: boolean;
              /** Keep only the main content. Doesn't affect `screenshot`, `bytes`, or `product`. */
              mainContentOnly?: boolean;
              /**
               * Keep only elements matching these CSS selectors.
               * @minItems 1
               * @maxItems 50
               */
              includeSelectors?: Array<string>;
              /**
               * Remove elements matching these CSS selectors. Overrides `includeSelectors`.
               * @minItems 1
               * @maxItems 50
               */
              excludeSelectors?: Array<string>;
              /** Include iframe content in HTML and text outputs. Screenshots always show visible frames. */
              includeFrames?: boolean;
              /** Document parsing options. */
              parsers?: {
                /** PDF page range and OCR. */
                pdf?: {
                  /**
                   * First page to parse, starting at 1.
                   * @minimum 1
                   */
                  startPage?: number;
                  /**
                   * Last page to parse. Must be at least `startPage`.
                   * @minimum 1
                   */
                  endPage?: number;
                  /** Set `auto` to read scanned pages with OCR. */
                  ocr?: "off" | "auto";
                };
              };
            };
            /**
             * Maximum age of a cached output, in milliseconds. `0` fetches fresh. Defaults to 3 days (259200000 ms). Maximum: 1 year (31536000000 ms).
             * @minimum 0
             * @maximum 31536000000
             */
            maxAgeMs?: number;
            /** Batches persist their results. Only disabled is supported; enabled returns ZDR_NOT_SUPPORTED. */
            zdr?: "disabled";
            /** Deadline for each page, using the same behavior and defaults as POST /web/scrape. */
            timeoutOpts?: {
              /**
               * Deadline in milliseconds.
               * @minimum 1
               * @maximum 300000
               */
              milliseconds: number;
              /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. "return-partial" requires at least 5000 ms. */
              behavior?: "fail" | "return-partial";
            };
            /**
             * Labels for tracking request usage. Not retained when zdr is enabled.
             * @maxItems 20
             */
            tags?: Array<string>;
          };
        } | {
          /** Discover and scrape pages from `data.source`. */
          mode: "crawl";
          /** Use the same formats and parameters as POST /web/scrape, replacing url with source. Options apply to every page. */
          data: {
            /** How to find pages to crawl. */
            source: {
              /** Start from one page. */
              type: "start_url";
              /**
               * Page where crawling begins. A URL without a scheme is read as https://.
               * @minLength 1
               */
              url: string;
              /** Limits and filters for page discovery. */
              controls?: {
                /**
                 * Maximum pages to fetch. Unused reserved credits are refunded. Maximum 100000.
                 * @minimum 1
                 * @maximum 100000
                 */
                maxUrls?: number;
                /**
                 * Maximum link depth. Source pages are depth 0. No limit when omitted.
                 * @minimum 0
                 * @maximum 50
                 */
                maxDepth?: number;
                /** Follow links to subdomains. */
                followSubdomains?: boolean;
                /**
                 * Regex pattern for URLs to include. The `start_url` itself is always included.
                 * @maxLength 256
                 */
                regex?: string;
                /**
                 * Regex pattern for URLs to exclude, even when they match `regex`. The `start_url` itself is always included.
                 * @maxLength 256
                 */
                excludeRegex?: string;
                /** Only follow pages in these languages, or `same_as_start_url`; all languages when omitted. */
                languages?: "same_as_start_url" | Array<"am" | "ar" | "az" | "be" | "bg" | "bn" | "ca" | "ceb" | "cs" | "cy" | "da" | "de" | "el" | "en" | "es" | "et" | "eu" | "fa" | "fi" | "fr" | "gu" | "ha" | "haw" | "he" | "hi" | "hr" | "hu" | "hy" | "id" | "is" | "it" | "ja" | "ka" | "kk" | "kn" | "ko" | "ku" | "ky" | "lo" | "lt" | "lv" | "mk" | "ml" | "mn" | "mr" | "ms" | "ne" | "nl" | "no" | "or" | "pa" | "pl" | "ps" | "pt" | "ro" | "ru" | "sk" | "sl" | "so" | "sq" | "sr" | "sv" | "sw" | "ta" | "te" | "th" | "tl" | "tr" | "uk" | "ur" | "uz" | "vi" | "yo" | "zh">;
              };
            } | {
              /** Scrape the URLs in the domain's sitemap. */
              type: "sitemap";
              /**
               * Domain whose sitemap lists the pages to scrape. A full URL is reduced to its domain.
               * @minLength 3
               */
              domain: string;
              /** Limits and filters for the sitemap URLs. A sitemap batch scrapes exactly those URLs and never follows links off them, so there is no crawl depth here. */
              controls?: {
                /**
                 * Maximum pages to fetch. Unused reserved credits are refunded. Maximum 100000.
                 * @minimum 1
                 * @maximum 100000
                 */
                maxUrls?: number;
                /**
                 * Regex pattern; only sitemap URLs matching it are scraped.
                 * @maxLength 256
                 */
                regex?: string;
                /**
                 * Regex pattern; sitemap URLs matching it are not scraped, even when they match `regex`.
                 * @maxLength 256
                 */
                excludeRegex?: string;
              };
            };
            /** Outputs to return. Set at least one to `true`. */
            formats: {
              /** Rendered HTML. */
              html?: boolean;
              /** Page content as Markdown. */
              markdown?: boolean;
              /** A screenshot of the page. */
              screenshot?: boolean;
              /** Images found on the page. */
              images?: boolean;
              /** The original HTTP response body. */
              bytes?: boolean;
              /** Fields extracted with custom rules or a prebuilt parser, returned as `parsed`. */
              parse?: boolean;
              /** Markdown excerpts relevant to `highlightsParams.query`. */
              highlights?: boolean;
              /** An object matching `jsonParams.schema`, extracted from the page. */
              json?: boolean;
              /** Product details such as name, price, and availability. */
              product?: boolean;
            };
            /** Markdown options. Requires `formats.markdown`. */
            markdownParams?: (unknown) & (unknown);
            /** Screenshot options. Requires formats.screenshot: true. */
            screenshotParams?: {
              /** What to capture: `viewport`, `fullPage`, one element, or a rectangle. Max 40 megapixels. */
              area?: "viewport" | "fullPage" | {
                /**
                 * CSS selector matching exactly one visible element.
                 * @maxLength 2048
                 * @pattern \S
                 */
                selector: string;
              } | {
                /**
                 * Left edge of the capture, in pixels from the document origin.
                 * @minimum 0
                 * @maximum 100000
                 */
                x: number;
                /**
                 * Top edge of the capture, in pixels from the document origin.
                 * @minimum 0
                 * @maximum 100000
                 */
                y: number;
                /**
                 * Width of the capture in pixels.
                 * @minimum 1
                 * @maximum 7680
                 */
                width: number;
                /**
                 * Height of the capture in pixels.
                 * @minimum 1
                 * @maximum 100000
                 */
                height: number;
              };
              /** Image format for the screenshot. */
              format?: "png" | "jpeg" | "webp";
            };
            /** Image options. Requires formats.images: true. */
            imageParams?: {
              /**
               * Extra data per image: `dimensions`, `classification`, or a hosted `file` URL.
               * @minItems 1
               * @maxItems 3
               */
              enrich?: Array<"dimensions" | "classification" | "file">;
              /** Set `visual` to drop visual duplicates, keeping the largest copy. */
              dedupe?: "none" | "visual";
            };
            /** Requires `formats.parse: true`; required when it is set. */
            parseParams?: {
              /** Extract fields using custom CSS rules. This is the default when type is omitted. */
              type?: "custom";
              /** Named CSS extraction rules, including nested rules. */
              rules: Record<string, string | {
                  /**
                   * CSS selector to match within the current page or parent rule.
                   * @minLength 1
                   * @maxLength 2048
                   */
                  selector: string;
                  /** Return the first match with `item` or all matches with `list`. */
                  type?: "item" | "list";
                  /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                  output?: "text" | "html" | string | Record<string, string | {
                      /**
                       * CSS selector to match within the current page or parent rule.
                       * @minLength 1
                       * @maxLength 2048
                       */
                      selector: string;
                      /** Return the first match with `item` or all matches with `list`. */
                      type?: "item" | "list";
                      /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                      output?: "text" | "html" | string | Record<string, string | {
                          /**
                           * CSS selector to match within the current page or parent rule.
                           * @minLength 1
                           * @maxLength 2048
                           */
                          selector: string;
                          /** Return the first match with `item` or all matches with `list`. */
                          type?: "item" | "list";
                          /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                          output?: "text" | "html" | string | Record<string, string | {
                              /**
                               * CSS selector to match within the current page or parent rule.
                               * @minLength 1
                               * @maxLength 2048
                               */
                              selector: string;
                              /** Return the first match with `item` or all matches with `list`. */
                              type?: "item" | "list";
                              /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                              output?: "text" | "html" | string | Record<string, string | {
                                  /**
                                   * CSS selector to match within the current page or parent rule.
                                   * @minLength 1
                                   * @maxLength 2048
                                   */
                                  selector: string;
                                  /** Return the first match with `item` or all matches with `list`. */
                                  type?: "item" | "list";
                                  /** Return text, HTML, an attribute such as `@href`, or nested field rules. Defaults to text. */
                                  output?: "text" | "html" | string;
                                }>;
                            }>;
                        }>;
                    }>;
                }>;
            } | {
              /** Use a prebuilt parser instead of custom rules. */
              type: "prebuilt";
              /** The prebuilt parser to use. See https://docs.context.dev/scrape/prebuilt-parsers for supported sources, request options, and output schemas. */
              parser: "google-maps" | "google-maps-reviews" | "google-play" | "google-play-reviews" | "app-store" | "app-store-reviews" | "g2-reviews" | "instagram-profile" | "instagram-post" | "instagram-feed" | "tiktok-profile" | "tiktok-video" | "tiktok-feed" | "tiktok-comments" | "tiktok-followers" | "tiktok-following" | "tiktok-user-search" | "emails" | "phone-numbers" | "links";
              /** google-maps-reviews only. Order of data.reviews. newest, relevant, highest, and lowest follow Google; oldest returns the earliest reviews first, which Google itself does not offer. */
              sort?: "newest" | "oldest" | "relevant" | "highest" | "lowest";
              /**
               * google-maps-reviews only. Maximum number of reviews to return. Defaults to 100; maximum 1000.
               * @minimum 1
               * @maximum 1000
               */
              limit?: number;
            };
            /** Requires `formats.highlights: true`; required when it is set. */
            highlightsParams?: {
              /**
               * The question or topic to find passages for.
               * @minLength 1
               * @maxLength 2000
               */
              query: string;
              /**
               * Maximum combined length of returned passages.
               * @minimum 100
               * @maximum 20000
               */
              maxCharacters?: number;
            };
            /** Requires `formats.json: true`; required when it is set. */
            jsonParams?: {
              /** JSON Schema (not an example object) for a top-level object, up to 50 KB. Use optional or nullable fields for missing facts. */
              schema: Record<string, unknown>;
              /**
               * Extra guidance, such as which facts to prefer or how to read a field.
               * @maxLength 2000
               */
              instructions?: string;
            };
            /** Product options. Requires formats.product: true. */
            productParams?: {
              /** Drop visually duplicate product images, keeping the largest copy. */
              dedupeImages?: boolean;
            };
            /** Browser and content settings shared by all outputs. */
            sharedParams?: {
              /** Create or reuse an authenticated browser profile. Requires a paid plan and an HTTPS target. Profiles persist session state, bypass shared caches, and cannot be combined with ZDR, custom headers, raw bytes, Google Maps, app store, Instagram, or G2 parsers. The emails, phone-numbers, and links parsers support profiles. */
              profile?: {
                /** Reuse a saved browser profile. */
                type: "existing";
                /**
                 * The ID returned in profile.id by an earlier scrape.
                 * @pattern ^prof_[a-f0-9]{32}$
                 */
                profileId: string;
              } | {
                /** Sign in and create a browser profile. */
                type: "new";
                /**
                 * Username or email for the target website.
                 * @minLength 1
                 * @maxLength 1024
                 */
                identifier: string;
                /**
                 * Password used to sign in. It is never stored in the profile.
                 * @minLength 1
                 * @maxLength 4096
                 */
                password: string;
                /**
                 * Optional label shown when listing profiles with `GET /org/browser/profiles`.
                 * @minLength 1
                 * @maxLength 500
                 */
                description?: string;
              };
              /**
               * Proxy country as a two-letter code, such as `US`. Case-insensitive.
               * @pattern ^[A-Za-z]{2}$
               */
              country?: string;
              /** HTTP headers to send to the target site. Requests with headers skip the cache. */
              headers?: Record<string, string>;
              /** Browser size in pixels. Omit for 1920 × 1080. When provided, missing dimensions default to 1440 × 900. */
              viewport?: {
                /**
                 * Browser viewport width in pixels.
                 * @minimum 240
                 * @maximum 7680
                 */
                width?: number;
                /**
                 * Browser viewport height in pixels.
                 * @minimum 240
                 * @maximum 4320
                 */
                height?: number;
              };
              /** Emulate a light or dark color scheme. */
              theme?: "light" | "dark";
              /** Accept cookie banners before actions and capture. */
              dismissCookies?: boolean;
              /** Close other popups before actions and capture. */
              dismissPopups?: boolean;
              /**
               * Browser steps run in order before capture. Requires a paid plan. Skips the cache.
               * @minItems 1
               * @maxItems 5
               */
              actions?: Array<{
                /** Use `perform` for a plain-language browser instruction. */
                type: "perform";
                /**
                 * One browser instruction, such as clicking a button or entering text.
                 * @minLength 1
                 * @maxLength 500
                 */
                action: string;
              } | {
                /** Use `scroll` to move through the page or a container. */
                type: "scroll";
                /** Direction to scroll. */
                direction?: "down" | "up" | "left" | "right";
                /** Distance per scroll: pixels, one `viewport`, or `max` to reach the end. */
                amount?: number | "viewport" | "max";
                /**
                 * Scroll this container. Omit to scroll the page.
                 * @maxLength 2000
                 * @pattern \S
                 */
                selector?: string;
                /**
                 * Maximum number of scroll steps for this action.
                 * @minimum 1
                 * @maximum 50
                 */
                maxScrolls?: number;
              } | {
                /** Use `wait` to pause for a fixed duration. */
                type: "wait";
                /**
                 * Time to pause in milliseconds before the next action.
                 * @minimum 0
                 * @maximum 30000
                 */
                milliseconds: number;
              } | {
                /** Use `waitFor` to wait for a matching element. */
                type: "waitFor";
                /**
                 * CSS selector to wait for before continuing.
                 * @maxLength 2048
                 * @pattern \S
                 */
                selector: string;
              }>;
              /** Milliseconds, or a CSS selector to wait for, after actions. Defaults to 500 (2000 with frames or XML). */
              waitFor?: number | string;
              /** Wait for CSS animations to finish before capture. Defaults to `true` when `screenshot` is requested. */
              settleAnimations?: boolean;
              /** Keep only the main content. Doesn't affect `screenshot`, `bytes`, or `product`. */
              mainContentOnly?: boolean;
              /**
               * Keep only elements matching these CSS selectors.
               * @minItems 1
               * @maxItems 50
               */
              includeSelectors?: Array<string>;
              /**
               * Remove elements matching these CSS selectors. Overrides `includeSelectors`.
               * @minItems 1
               * @maxItems 50
               */
              excludeSelectors?: Array<string>;
              /** Include iframe content in HTML and text outputs. Screenshots always show visible frames. */
              includeFrames?: boolean;
              /** Document parsing options. */
              parsers?: {
                /** PDF page range and OCR. */
                pdf?: {
                  /**
                   * First page to parse, starting at 1.
                   * @minimum 1
                   */
                  startPage?: number;
                  /**
                   * Last page to parse. Must be at least `startPage`.
                   * @minimum 1
                   */
                  endPage?: number;
                  /** Set `auto` to read scanned pages with OCR. */
                  ocr?: "off" | "auto";
                };
              };
            };
            /**
             * Maximum age of a cached output, in milliseconds. `0` fetches fresh. Defaults to 3 days (259200000 ms). Maximum: 1 year (31536000000 ms).
             * @minimum 0
             * @maximum 31536000000
             */
            maxAgeMs?: number;
            /** Batches persist their results. Only disabled is supported; enabled returns ZDR_NOT_SUPPORTED. */
            zdr?: "disabled";
            /** Deadline for each page, using the same behavior and defaults as POST /web/scrape. */
            timeoutOpts?: {
              /**
               * Deadline in milliseconds.
               * @minimum 1
               * @maximum 300000
               */
              milliseconds: number;
              /** "fail" returns 408 at the deadline. "return-partial" returns available results; inspect the response’s partial flag. "return-partial" requires at least 5000 ms. */
              behavior?: "fail" | "return-partial";
            };
            /**
             * Labels for tracking request usage. Not retained when zdr is enabled.
             * @maxItems 20
             */
            tags?: Array<string>;
          };
        };
        /**
         * Legacy URL notified when the batch finishes. Preserves one best-effort attempt. Cannot be combined with webhook.
         * @format uri
         */
        webhookUrl?: string;
        /** Where to send the batch's final-status event. Omit `retry` for one attempt; `{}` uses the default retry schedule. */
        webhook?: {
          /**
           * Public HTTP(S) URL that receives batch completion, failure, or cancellation events.
           * @format uri
           */
          url: string;
          /** Webhook retry settings. Use {} for the default schedule. */
          retry?: {
            /**
             * Retry delays in seconds, totaling at most 72 hours. Use [] to disable automatic retries.
             * @maxItems 10
             */
            delays_seconds?: Array<number>;
          };
        };
        /**
         * Tags stored on the batch. Filter the batch list by them later.
         * @maxItems 20
         */
        tags?: Array<string>;
        /**
         * Unique key per submission. Retrying with the same key and body returns the original batch; a different body returns `409`.
         * @maxLength 200
         */
        idempotencyKey?: string;
      };
      output: {
        /** Batch ID. Poll GET /batch/{batch_id} with it. */
        id?: string;
        /** Always `queued`. An accepted batch has not started yet. */
        status?: string;
        /** How pages will be selected. */
        mode?: string;
        /** Tags stored on the batch. */
        tags?: Array<string>;
        /** How the crawl was configured. Null for scrape batches. */
        crawl?: {
          /** Where the crawl started. */
          source?: Record<string, unknown>;
          /** The `maxUrls` submitted with the crawl. A sitemap crawl scrapes only the URLs its sitemap actually lists, up to this many, so `input.reserved` is often lower. */
          max_pages?: number;
          /** Link depth limit. Always 0 for a sitemap crawl, which never follows links off its URLs; null when a `start_url` crawl set no limit. */
          max_depth?: number | null;
          /** Whether links to subdomains were followed. Always false for a sitemap crawl. */
          follow_subdomains?: boolean;
          /** Regex pattern URLs had to match to be crawled. Null when the crawl set none. */
          url_pattern?: string | null;
          /** Regex pattern URLs must not match to be crawled. Null when the crawl set none. */
          exclude_url_pattern?: string | null;
          /** Languages whose pages were followed; null when all languages were. */
          languages?: string | Array<string> | null;
          [key: string]: unknown;
        } | null;
        /** What the submission accepted. */
        input?: {
          /** Pages accepted; progress counts toward this total. */
          reserved?: number;
          /** True when `reserved` is a crawl ceiling; false when it is an exact URL count. */
          reserved_is_ceiling?: boolean;
          /** URLs in the list you sent, before validation and de-duplication. Null for a crawl, which is given a source rather than a list. */
          submitted?: number | null;
          /** URLs dropped before reserving because another entry resolved to the same page. Non-zero for sitemap crawls too, whose sitemaps routinely list a page more than once. */
          duplicates?: number;
          /** Rejected input URLs; `null` for a crawl. */
          invalid?: number | null;
          [key: string]: unknown;
        };
        /** What accepting this batch cost. */
        credits?: {
          /** Credits held at submission. */
          reserved?: number;
          [key: string]: unknown;
        };
        /** When the batch was created. */
        created_at?: string;
        /** Rejected URLs (first 100). */
        invalid_urls?: Array<{
          /** Rejected URL. */
          url?: string;
          /** Why it was rejected. */
          reason?: string;
          [key: string]: unknown;
        }>;
        /** Whether this response came from cache. */
        cache_metadata?: {
          /** Whether the response was served from cache, required fresh work, or honored zero-data-retention cache bypass. */
          status?: string;
          /** Age of the cached data in milliseconds. Zero for miss and zdr responses. */
          age_ms?: number;
          [key: string]: unknown;
        };
        /** Secret for verifying `X-Context-Signature`. Only submit returns it, so store it. */
        webhook_secret?: string;
        /** Outputs requested for each page. Matches input.data.formats on submission. */
        formats?: {
          /** Rendered HTML. */
          html?: boolean;
          /** Page content as Markdown. */
          markdown?: boolean;
          /** A screenshot of the page. */
          screenshot?: boolean;
          /** Images found on the page. */
          images?: boolean;
          /** The original HTTP response body. */
          bytes?: boolean;
          /** Fields extracted with custom rules or a prebuilt parser, returned as `parsed`. */
          parse?: boolean;
          /** Markdown excerpts relevant to `highlightsParams.query`. */
          highlights?: boolean;
          /** An object matching `jsonParams.schema`, extracted from the page. */
          json?: boolean;
          /** Product details such as name, price, and availability. */
          product?: boolean;
          [key: string]: unknown;
        };
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Submit agent feedback. */
    "contextdev.submit_feedback": {
      input: {
        /**
         * The request_id of the API call the feedback is about, from its response body or X-Request-Id header.
         * @format uuid
         */
        request_id?: string;
        /** Kind of issue. */
        category: "bug" | "docs_mismatch" | "friction" | "feature_gap" | "quality_degradation" | "other";
        /**
         * What went wrong and what you expected instead.
         * @minLength 1
         * @maxLength 4000
         */
        note: string;
        /**
         * The page the feedback is about, such as one page of a crawl or a docs page.
         * @maxLength 2048
         * @format uri
         */
        url?: string;
        /**
         * Labels for filtering usage in the dashboard.
         * @maxItems 20
         */
        tags?: Array<string>;
      };
      output: {
        /** ID of the stored feedback. */
        feedback_id?: string;
        /** True when feedback for this request_id was already recorded; the original feedback_id is returned. */
        already_submitted?: boolean;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Update a monitor. */
    "contextdev.update_monitor": {
      input: {
        /**
         * Display name for the monitor.
         * @minLength 1
         * @maxLength 200
         */
        name?: string;
        /**
         * Labels for filtering monitors, their changes, and their usage.
         * @maxItems 20
         */
        tags?: Array<string>;
        /** Set `paused` to stop scheduled runs or `active` to resume them. */
        status?: "active" | "paused";
        /** What to watch: a page, a sitemap, or data extracted from a site. */
        target?: {
          /** Use `page` to watch one web page. */
          type: "page";
          /**
           * Public HTTP(S) page URL to monitor.
           * @format uri
           */
          url: string;
          /**
           * Plain-language goal describing which page changes matter. When provided without change_detection, semantic detection is inferred.
           * @minLength 1
           * @maxLength 2000
           */
          instructions?: string;
          /** Normalize whitespace before comparing or analyzing text. */
          normalize_whitespace?: boolean;
          /**
           * Monitor these CSS-selected regions. Empty or omitted uses main content. Changes create a new baseline.
           * @maxItems 50
           */
          include_selectors?: Array<string>;
          /**
           * Remove matching regions after inclusions. Changes create a new baseline.
           * @maxItems 50
           */
          exclude_selectors?: Array<string>;
          /**
           * Optional browser actions executed in array order after the page loads, before content is captured, on every run. Requires a paid plan. Maximum: 5 actions. Changes create a new baseline.
           * @maxItems 5
           */
          actions?: Array<{
            /** Use `wait` to pause for a fixed duration. */
            do: "wait";
            /**
             * Time to pause in milliseconds before the next action.
             * @minimum 0
             * @maximum 30000
             */
            timeMs: number;
          } | {
            /** Use `perform` for a plain-language browser instruction. */
            do: "perform";
            /**
             * One browser instruction, such as clicking a button or entering text.
             * @minLength 1
             * @maxLength 500
             */
            action: string;
          } | {
            /** Use `scroll` to move through the page or a container. */
            do: "scroll";
            /** Direction to scroll. Defaults to down. */
            direction?: "up" | "down" | "left" | "right";
            /** Pixels per scroll, one visible viewport, or the current scroll boundary. Defaults to viewport. */
            amount?: number | "viewport" | "max";
            /**
             * CSS selector for the first matching scroll container. Defaults to the page.
             * @minLength 1
             * @maxLength 2000
             */
            container?: string;
            /**
             * Maximum scroll iterations. Stops early when scrolling and scrollable extent stop changing. Defaults to 1.
             * @minimum 1
             * @maximum 50
             */
            maxScrolls?: number;
          }> | null;
        } | {
          /** Use `sitemap` to watch a site for added or removed URLs. */
          type: "sitemap";
          /**
           * Sitemap URL to monitor.
           * @format uri
           */
          url: string;
          /**
           * URL path patterns to include (max 50).
           * @maxItems 50
           */
          include?: Array<string>;
          /**
           * URL path patterns to exclude (max 50).
           * @maxItems 50
           */
          exclude?: Array<string>;
          /**
           * Maximum number of sitemap URLs to track (capped at 10,000).
           * @minimum 1
           * @maximum 10000
           */
          max_urls?: number;
        } | ({
          /** Use `extract` to watch structured data across selected pages. */
          type: "extract";
          /**
           * Root URL to extract structured data from.
           * @format uri
           */
          url: string;
          /** JSON Schema for page selection and the baseline snapshot. Changes return diffs and evidence. */
          schema?: Record<string, unknown>;
          /**
           * Natural-language instructions guiding which pages and facts to track and which changes to report.
           * @minLength 1
           * @maxLength 2000
           */
          instructions: string;
          /**
           * Maximum number of pages to track.
           * @minimum 1
           * @maximum 50
           */
          max_pages?: number;
          /**
           * Optional maximum link depth from the starting URL (0 = only the starting page).
           * @minimum 0
           * @maximum 10
           */
          max_depth?: number;
          /** Allow page discovery on subdomains of the target site. */
          follow_subdomains?: boolean;
        }) & (unknown);
        /** How changes are judged. Defaults to `semantic` for extract targets and page targets with `instructions`, otherwise `exact`. */
        change_detection?: {
          /** Use `exact` to compare visible text or sitemap URLs. */
          type: "exact";
        } | {
          /** Use `semantic` to judge changes against the target instructions. */
          type: "semantic";
          /**
           * Minimum confidence required to report a meaningful change, from 0 to 1.
           * @minimum 0
           * @maximum 1
           */
          confidence_threshold?: number;
        };
        /** How often the monitor runs. Defaults to once a day. */
        schedule?: {
          /** Use `interval` to run on a repeating schedule. */
          type: "interval";
          /**
           * Number of units between runs. The resulting interval (frequency × unit) must be at least 10 minutes and at most 1 year (e.g. minimum 10 when unit is minutes; maximum 365 when unit is days).
           * @minimum 1
           * @maximum 525600
           */
          frequency: number;
          /** Time unit used with `frequency` to set the run interval. */
          unit: "minutes" | "hours" | "days";
        };
        /** Set to null to remove the webhook. Changing `url` issues a new secret. */
        webhook?: ({
          /**
           * Public HTTP(S) URL that receives events. Slack and GovSlack URLs get formatted messages.
           * @format uri
           */
          url: string;
          /**
           * Events to deliver. Defaults to `change.detected`; `run.completed` also includes unchanged runs.
           * @minItems 1
           * @maxItems 2
           */
          events?: Array<"change.detected" | "run.completed">;
          /** Webhook retry settings. Use {} for the default schedule. */
          retry?: {
            /**
             * Retry delays in seconds, totaling at most 72 hours. Use [] to disable automatic retries.
             * @maxItems 10
             */
            delays_seconds?: Array<number>;
          };
        }) | null;
        /** ID of the monitor. */
        monitor_id: string;
      };
      output: {
        /** Always `web`. Optional. */
        mode?: string;
        /** id value. */
        id?: string;
        /** name value. */
        name?: string;
        /** What to watch: a page, a sitemap, or data extracted from a site. */
        target?: {
          /** Use `page` to watch one web page. */
          type?: string;
          /** Public HTTP(S) page URL to monitor. */
          url?: string;
          /** Plain-language goal describing which page changes matter. When provided without change_detection, semantic detection is inferred. */
          instructions?: string;
          /** Normalize whitespace before comparing or analyzing text. */
          normalize_whitespace?: boolean;
          /** Monitor these CSS-selected regions. Empty or omitted uses main content. Changes create a new baseline. */
          include_selectors?: Array<string>;
          /** Remove matching regions after inclusions. Changes create a new baseline. */
          exclude_selectors?: Array<string>;
          /** Optional browser actions executed in array order after the page loads, before content is captured, on every run. Requires a paid plan. Maximum: 5 actions. Changes create a new baseline. */
          actions?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        } | {
          /** Use `sitemap` to watch a site for added or removed URLs. */
          type?: string;
          /** Sitemap URL to monitor. */
          url?: string;
          /** URL path patterns to include (max 50). */
          include?: Array<string>;
          /** URL path patterns to exclude (max 50). */
          exclude?: Array<string>;
          /** Maximum number of sitemap URLs to track (capped at 10,000). */
          max_urls?: number;
          [key: string]: unknown;
        } | {
          /** Use `extract` to watch structured data across selected pages. */
          type?: string;
          /** Root URL to extract structured data from. */
          url?: string;
          /** JSON Schema for page selection and the baseline snapshot. Changes return diffs and evidence. */
          schema?: Record<string, unknown>;
          /** Natural-language instructions guiding which pages and facts to track and which changes to report. */
          instructions?: string;
          /** Maximum number of pages to track. */
          max_pages?: number;
          /** Optional maximum link depth from the starting URL (0 = only the starting page). */
          max_depth?: number;
          /** Allow page discovery on subdomains of the target site. */
          follow_subdomains?: boolean;
          [key: string]: unknown;
        };
        /** How changes are judged. Defaults to `semantic` for extract targets and page targets with `instructions`, otherwise `exact`. */
        change_detection?: {
          /** Use `exact` to compare visible text or sitemap URLs. */
          type?: string;
          [key: string]: unknown;
        } | {
          /** Use `semantic` to judge changes against the target instructions. */
          type?: string;
          /** Minimum confidence required to report a meaningful change, from 0 to 1. */
          confidence_threshold?: number;
          [key: string]: unknown;
        };
        /** How often the monitor runs. Defaults to once a day. */
        schedule?: {
          /** Use `interval` to run on a repeating schedule. */
          type?: string;
          /** Number of units between runs. The resulting interval (frequency × unit) must be at least 10 minutes and at most 1 year (e.g. minimum 10 when unit is minutes; maximum 365 when unit is days). */
          frequency?: number;
          /** Time unit used with `frequency` to set the run interval. */
          unit?: string;
          [key: string]: unknown;
        };
        /** Webhook destination and delivery settings. Null means no webhook is configured. */
        webhook?: {
          /** Public HTTP(S) URL that receives events. Slack and GovSlack URLs get formatted messages. */
          url?: string;
          /** Events to deliver. Defaults to `change.detected`; `run.completed` also includes unchanged runs. */
          events?: Array<string>;
          /** Webhook retry settings. Use {} for the default schedule. */
          retry?: Record<string, unknown>;
          /** API-generated signing secret. Visible only with full access or `monitors:write` permission. */
          secret?: string;
          [key: string]: unknown;
        } | null;
        /** Current state. Failed monitors keep running; paused monitors must be resumed with `status: "active"`. */
        status?: string;
        /** last run at value. */
        last_run_at?: string | null;
        /** last change at value. */
        last_change_at?: string | null;
        /** When the next scheduled run is due; null while paused. */
        next_run_at?: string | null;
        /** Error from the most recent failed run; null when the last run succeeded. */
        last_error?: {
          /** code value. */
          code?: string;
          /** message value. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** Present while webhook deliveries are failing consecutively; null when deliveries are healthy or no webhook is configured. Cleared on the next successful delivery and when the webhook URL changes. */
        webhook_failure?: {
          /** Number of consecutive delivery attempts that did not succeed. */
          consecutive_failures?: number;
          /** Outcome of the most recent failed delivery. rejected means a non-2xx response; failed means no HTTP response was received; skipped_unsafe_url means the URL failed the public-endpoint safety check. */
          last_status?: string;
          /** Human-readable description of the most recent failure. */
          last_message?: string;
          /** last failed at value. */
          last_failed_at?: string;
          [key: string]: unknown;
        } | null;
        /** created at value. */
        created_at?: string;
        /** updated at value. */
        updated_at?: string;
        /** Labels for filtering monitors, their changes, and their usage. */
        tags?: Array<string>;
        /** Comparison baseline, included on Retrieve. Null until capture completes or after target changes. */
        baseline?: {
          /** The page's visible text as last observed. */
          text?: string;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | {
          /** The sitemap URLs as last observed (sorted, normalized). */
          urls?: Array<string>;
          /** Number of URLs in the baseline. */
          url_count?: number;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | {
          /** Latest structured snapshot matching the extraction schema, refreshed at most daily; `null` before capture. */
          data?: unknown;
          /** The page URLs the monitor tracks and analyzes for changes. */
          urls_analyzed?: Array<string>;
          /** When this baseline was last captured or replaced. */
          captured_at?: string;
          [key: string]: unknown;
        } | null;
        /** Credits this request used and your remaining balance. */
        key_metadata?: {
          /** Credits charged for this request. */
          credits_consumed?: number;
          /** Credits remaining for your organization. */
          credits_remaining?: number;
          [key: string]: unknown;
        };
        /** Unique ID of this request, also in `X-Request-Id`. Include it when contacting support. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
  }
}
