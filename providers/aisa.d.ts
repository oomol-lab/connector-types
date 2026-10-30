import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Answer a question using Exa web retrieval with source citations and optional structured output. */
    "aisa.answer_exa": {
      input: {
        /**
         * The question to answer.
         * @minLength 1
         */
        query: string;
        /** Retrieval mode; deep modes may take longer to complete. */
        type?: "auto" | "fast" | "instant" | "deep-lite" | "deep" | "deep-reasoning";
        /** Streaming is not supported by this JSON action; must be false. */
        stream?: false;
        /** Return the full page text; defaults to true for get_exa_contents. */
        text?: boolean;
        /** JSON Schema for a structured output. */
        outputSchema?: Record<string, unknown>;
      };
      output: {
        /** The Exa request identifier. */
        requestId?: string;
        /** Informational Exa cost; not the AIsa customer charge. */
        costDollars?: unknown;
        /** The answer as text or structured output. */
        answer?: unknown;
        /** Sources supporting the answer. */
        citations?: Array<{
          /** The Exa result identifier, normally the page URL. */
          id?: string;
          /** The page URL. */
          url?: string;
          /** The page title. */
          title?: string;
          /** The page author. */
          author?: string;
          /** The publication date reported by the source. */
          publishedDate?: string;
          /** The retrieved page text. */
          text?: string;
          /** Relevant snippets from the page. */
          highlights?: Array<string>;
          /** The generated page summary. */
          summary?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Request cancellation of a Firecrawl task. Work already performed may still be charged; poll the task for final state and pricing. */
    "aisa.cancel_firecrawl_batch_scrape": {
      input: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId?: string;
        /** Job state: queued, running, completed, failed or cancelled. */
        status?: string;
        /** Upstream crawl or batch scrape output; may be unavailable before completion or after expiry. */
        output?: unknown;
        /** Whether the upstream output has expired. */
        outputExpired?: boolean | null;
        /** Upstream job error details. */
        error?: Record<string, unknown> | null;
        /** AIsa pricing information, in micro-USD. */
        pricing?: {
          /** Initially authorized amount; not the final charge. */
          authorizedMicrosUSD?: number | null;
          /** Final customer charge; null means unknown, zero means no charge. */
          finalMicrosUSD?: number | null;
          /** Pricing currency. */
          currency?: string | null;
          /** AIsa billing mode. */
          billingMode?: string | null;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Request cancellation of a Firecrawl task. Work already performed may still be charged; poll the task for final state and pricing. */
    "aisa.cancel_firecrawl_crawl": {
      input: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId?: string;
        /** Job state: queued, running, completed, failed or cancelled. */
        status?: string;
        /** Upstream crawl or batch scrape output; may be unavailable before completion or after expiry. */
        output?: unknown;
        /** Whether the upstream output has expired. */
        outputExpired?: boolean | null;
        /** Upstream job error details. */
        error?: Record<string, unknown> | null;
        /** AIsa pricing information, in micro-USD. */
        pricing?: {
          /** Initially authorized amount; not the final charge. */
          authorizedMicrosUSD?: number | null;
          /** Final customer charge; null means unknown, zero means no charge. */
          finalMicrosUSD?: number | null;
          /** Pricing currency. */
          currency?: string | null;
          /** AIsa billing mode. */
          billingMode?: string | null;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Compare organic or paid keyword portfolios across domains. */
    "aisa.compare_semrush_domains": {
      input: {
        /** Semrush sign|type|domain groups joined by |, such as +|or|a.com|+|or|b.com. */
        comparison: string;
        /** The Semrush regional database code, such as us. */
        database: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Synchronously crawl a website through Tavily and return page content. Set limit, depth and breadth to bound the crawl; this does not create a background job. */
    "aisa.crawl_tavily": {
      input: {
        /**
         * The root website URL or domain.
         * @minLength 1
         */
        url: string;
        /**
         * Maximum pages to retrieve.
         * @minimum 1
         */
        limit: number;
        /**
         * Maximum crawl depth.
         * @minimum 1
         * @maximum 5
         */
        maxDepth?: number;
        /**
         * Maximum links to follow at each level.
         * @minimum 1
         * @maximum 500
         */
        maxBreadth?: number;
        /** Natural-language instructions guiding the crawl. */
        instructions?: string;
        /** Path patterns to include. */
        selectPaths?: Array<string>;
        /** Path patterns to exclude. */
        excludePaths?: Array<string>;
        /** Domain patterns to include. */
        selectDomains?: Array<string>;
        /** Domain patterns to exclude. */
        excludeDomains?: Array<string>;
        /** Include external-domain links in the results. */
        allowExternal?: boolean;
        /**
         * Maximum relevant chunks per source when an intent is provided.
         * @minimum 1
         * @maximum 5
         */
        chunksPerSource?: number;
        /** Extraction depth; advanced may take longer and cost more. */
        extractDepth?: "basic" | "advanced";
        /** The extracted content format. */
        format?: "markdown" | "text";
        /** Include the page favicon URL. */
        includeFavicon?: boolean;
        /** Include extracted image URLs. */
        includeImages?: boolean;
        /** Include upstream credit usage; this is not the AIsa customer charge. */
        includeUsage?: boolean;
        /**
         * Maximum upstream wait in seconds; defaults to 150.
         * @minimum 10
         * @maximum 150
         */
        timeout?: number;
      };
      output: {
        /** The Tavily request identifier. */
        request_id?: string;
        /** The upstream execution time in seconds. */
        response_time?: number;
        /** Successfully retrieved pages. */
        results?: Array<{
          /** The page URL. */
          url?: string;
          /** The page title. */
          title?: string;
          /** The extracted page content. */
          raw_content?: string;
          /** Extracted image URLs. */
          images?: Array<string>;
          /** The page favicon URL. */
          favicon?: string | null;
          [key: string]: unknown;
        }>;
        /** Upstream credit usage; not the AIsa customer charge. */
        usage?: {
          /** Upstream credits consumed. */
          credits?: number;
          [key: string]: unknown;
        };
        /** The crawled website base URL. */
        base_url?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Akta company profile sections, including firmographics, management, products, and financial estimates. */
    "aisa.enrich_akta_company": {
      input: {
        /** The company identifier accepted by Akta. */
        company?: string;
        /** The Akta enrichment section selection, passed unchanged to the upstream query parameter. */
        sections?: string;
      };
      output: {
        /** The upstream result status. */
        status?: string;
        /** The number of returned sections. */
        count?: number;
        /** The Akta credits consumed. */
        credits_consumed?: number;
        /** Company data keyed by enrichment section. */
        data?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Enrich one organization from its domain using Apollo's global database. */
    "aisa.enrich_apollo_organization": {
      input: {
        /** The company domain without www. */
        domain: string;
      };
      output: Record<string, unknown>;
    };
    /** Enrich multiple organizations from their domains in one Apollo request. */
    "aisa.enrich_apollo_organizations": {
      input: {
        /**
         * The company domains to enrich.
         * @minItems 1
         * @maxItems 10
         */
        domains: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Enrich up to ten people from known identifiers in one Apollo request. */
    "aisa.enrich_apollo_people": {
      input: {
        /**
         * The people to enrich.
         * @minItems 1
         * @maxItems 10
         */
        people: Array<Record<string, unknown>>;
      };
      output: Record<string, unknown>;
    };
    /** Enrich one person from known identifiers using Apollo's global database. */
    "aisa.enrich_apollo_person": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Extract content from known URLs through Tavily. Inspect failed_results for per-URL failures; use crawl_tavily to discover and retrieve pages from a website. */
    "aisa.extract_tavily": {
      input: {
        /**
         * The URLs to retrieve.
         * @minItems 1
         * @maxItems 20
         */
        urls: Array<string>;
        /** User intent used to rank extracted content chunks. */
        query?: string;
        /**
         * Maximum relevant chunks per source when an intent is provided.
         * @minimum 1
         * @maximum 5
         */
        chunksPerSource?: number;
        /** Extraction depth; advanced may take longer and cost more. */
        extractDepth?: "basic" | "advanced";
        /** The extracted content format. */
        format?: "markdown" | "text";
        /** Include the page favicon URL. */
        includeFavicon?: boolean;
        /** Include extracted image URLs. */
        includeImages?: boolean;
        /** Include upstream credit usage; this is not the AIsa customer charge. */
        includeUsage?: boolean;
        /**
         * Maximum upstream wait in seconds; default depends on extraction depth.
         * @minimum 1
         * @maximum 60
         */
        timeout?: number;
      };
      output: {
        /** The Tavily request identifier. */
        request_id?: string;
        /** The upstream execution time in seconds. */
        response_time?: number;
        /** Successfully retrieved pages. */
        results?: Array<{
          /** The page URL. */
          url?: string;
          /** The page title. */
          title?: string;
          /** The extracted page content. */
          raw_content?: string;
          /** Extracted image URLs. */
          images?: Array<string>;
          /** The page favicon URL. */
          favicon?: string | null;
          [key: string]: unknown;
        }>;
        /** Upstream credit usage; not the AIsa customer charge. */
        usage?: {
          /** Upstream credits consumed. */
          credits?: number;
          [key: string]: unknown;
        };
        /** URLs that could not be processed, with upstream error details when available. */
        failed_results?: Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Find candidate advertising brands associated with a domain. */
    "aisa.find_foreplay_brands": {
      input: {
        /** The domain or full website URL used to find candidate brands. */
        domain: string;
        /**
         * The maximum number of billed brand candidates to return.
         * @minimum 1
         * @maximum 10
         */
        limit?: number;
        /** How to order candidate brands by relevance rank. */
        order?: "most_ranked" | "least_ranked";
      };
      output: {
        /** The records returned by Foreplay. */
        data?: Array<Record<string, unknown>>;
        /** Pagination and request metadata returned by Foreplay. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find creators similar to a seed account with optional audience filters. */
    "aisa.find_similar_creators": {
      input: {
        /** The social platform to search. */
        platform: "instagram" | "tiktok" | "youtube";
        /** A creator handle or profile URL used as the similarity seed. */
        targetAccount: string;
        /**
         * The maximum number of billed creators to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Optional filters applied before WaveInflu matches creators. */
        filters?: {
          /** The ISO country codes to include. */
          regions?: Array<string>;
          /** The creator languages to include. */
          languages?: Array<string>;
          /**
           * The minimum follower or subscriber count.
           * @minimum 0
           */
          minFollowers?: number;
          /**
           * The maximum follower or subscriber count.
           * @minimum 0
           */
          maxFollowers?: number;
          /**
           * The minimum median or average play count.
           * @minimum 0
           */
          minPlayCount?: number;
          /**
           * The maximum median or average play count.
           * @minimum 0
           */
          maxPlayCount?: number;
          /** The play-count statistic used by the range filters. */
          playCountMetric?: "median" | "average";
          /** The inferred creator genders to include. */
          genders?: Array<string>;
          /** The inferred creator ethnicities to include. */
          ethnicities?: Array<string>;
          /** The creator account types to include. */
          creatorTypes?: Array<string>;
          /** The face-visibility classifications to include. */
          faceVisibilities?: Array<string>;
          /** Whether to exclude creators already saved in the WaveInflu workspace. */
          workspaceDeduplicationEnabled?: boolean;
        };
      };
      output: {
        /** The creator matches or contact result returned by WaveInflu. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get Ahrefs Domain Rating and Ahrefs Rank for a domain on a specified date. */
    "aisa.get_ahrefs_domain_rating": {
      input: {
        /**
         * The target domain, for example ahrefs.com.
         * @minLength 1
         */
        target: string;
        /**
         * The snapshot date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
      };
      output: {
        /** The domain authority measurements. */
        domain_rating?: {
          /** The global Ahrefs Rank. */
          ahrefs_rank?: number;
          /** The Ahrefs Domain Rating from 0 to 100. */
          domain_rating?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Ahrefs organic and paid keyword counts, traffic, and traffic value for a domain. */
    "aisa.get_ahrefs_site_metrics": {
      input: {
        /**
         * The target domain, for example ahrefs.com.
         * @minLength 1
         */
        target: string;
        /**
         * The snapshot date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
      };
      output: {
        /** The site's keyword and traffic metrics. */
        metrics?: {
          /** The estimated organic traffic value. */
          org_cost?: number;
          /** The organic keyword count. */
          org_keywords?: number;
          /** The number of organic keywords ranking in the top three. */
          org_keywords_1_3?: number;
          /** The estimated monthly organic traffic. */
          org_traffic?: number;
          /** The paid keyword count. */
          paid_keywords?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get analyst estimates for a ticker and reporting period. */
    "aisa.get_analyst_estimates": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker: string;
        /** The reporting period to return. */
        period?: "annual" | "quarterly" | "ttm";
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** List live job postings for an Apollo organization. */
    "aisa.get_apollo_job_postings": {
      input: {
        /** The Apollo organization ID whose jobs should be returned. */
        organizationId: string;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum job postings per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: Record<string, unknown>;
    };
    /** Get one complete organization record from Apollo's global database. */
    "aisa.get_apollo_organization": {
      input: {
        /** The Apollo organization ID to retrieve. */
        organizationId: string;
      };
      output: Record<string, unknown>;
    };
    /** Get standardized balance sheets for a company. */
    "aisa.get_balance_sheets": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Get standardized cash-flow statements for a company. */
    "aisa.get_cash_flow_statements": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Get standardized SEC company facts by ticker or CIK. */
    "aisa.get_company_facts": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Get recent financial news, optionally filtered by ticker. */
    "aisa.get_company_news": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Get the current AIsa account, key, and go-to-market credit balances. */
    "aisa.get_credits_balance": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get metadata, market data, and community signals for one coin. */
    "aisa.get_crypto_coin": {
      input: {
        /** The CoinGecko coin ID, such as bitcoin. */
        coinId: string;
        /** Whether to include localized descriptions. */
        localization?: boolean;
        /** Whether to include exchange tickers. */
        tickers?: boolean;
        /** Whether to include market data. */
        marketData?: boolean;
        /** Whether to include community data. */
        communityData?: boolean;
        /** Whether to include developer data. */
        developerData?: boolean;
        /** Whether to include seven-day sparkline values. */
        sparkline?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Get price, market-cap, and volume history for a coin over a Unix-time range. */
    "aisa.get_crypto_market_chart": {
      input: {
        /** The CoinGecko coin ID, such as bitcoin. */
        coinId: string;
        /** A CoinGecko quote-currency code, such as usd. */
        currency: string;
        /** The inclusive range start as a Unix timestamp. */
        fromTimestamp: number;
        /** The inclusive range end as a Unix timestamp. */
        toTimestamp: number;
        /** The decimal precision accepted by CoinGecko. */
        precision?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get recent cryptocurrency news with optional coin and language filters. */
    "aisa.get_crypto_news": {
      input: {
        /** The CoinGecko coin ID, such as bitcoin. */
        coinId?: string;
        /** The news language code. */
        language?: string;
        /** The CoinGecko news content type. */
        articleType?: "news" | "guides";
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum articles per page.
         * @minimum 1
         */
        perPage?: number;
      };
      output: Record<string, unknown>;
    };
    /** Get open, high, low, and close price candles for one coin. */
    "aisa.get_crypto_ohlc": {
      input: {
        /** The CoinGecko coin ID, such as bitcoin. */
        coinId: string;
        /** A CoinGecko quote-currency code, such as usd. */
        currency: string;
        /** The CoinGecko lookback window in days. */
        days: string;
        /** The decimal precision accepted by CoinGecko. */
        precision?: string;
      };
      output: Array<Array<number>>;
    };
    /** Get current prices and optional market metrics for multiple coins. */
    "aisa.get_crypto_prices": {
      input: {
        /**
         * The CoinGecko coin IDs to price.
         * @minItems 1
         */
        coinIds: Array<string>;
        /**
         * The quote currencies to return.
         * @minItems 1
         */
        currencies: Array<string>;
        /** Whether to include market capitalization. */
        includeMarketCap?: boolean;
        /** Whether to include 24-hour volume. */
        include24HourVolume?: boolean;
        /** Whether to include 24-hour price change. */
        include24HourChange?: boolean;
        /** Whether to include the last update timestamp. */
        includeLastUpdatedAt?: boolean;
        /** The decimal precision accepted by CoinGecko. */
        precision?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get Gemini search answers through DataForSEO. */
    "aisa.get_dataforseo_ai_gemini_search": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get AI-search volume estimates for up to 1,000 keywords. */
    "aisa.get_dataforseo_ai_keyword_volume": {
      input: (Record<string, unknown>) & (Record<string, unknown>);
      output: Record<string, unknown>;
    };
    /** Get AI mentioned brands through DataForSEO. */
    "aisa.get_dataforseo_ai_mentions_top_brands": {
      input: {
        /**
         * array of brands to exclude from the response
         * optional field
         * if specified, the listed brands will be omitted from the items array
         * example:
         * "exclude_brands": ["Audi"]
         */
        excludeBrands?: Array<string> | null;
        /**
         * array of results filtering parameters
         * optional field
         * you can add several filters at once (8 filters maximum)
         * you should set a logical operator and, or between the conditions
         * the following operators are supported:
         * =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
         * you can use the % operator with like and not_like to match any string of zero or more characters
         * example:
         * ["ai_search_volume",">",1000]
         * The full list of possible filters is available here.
         */
        filters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * array of brands to include in the response
         * optional field
         * if specified, only the listed brands will be returned in the items array
         * example:
         * "include_brands": ["Audi"]
         */
        includeBrands?: Array<string> | null;
        /**
         * array of filter expressions applied before aggregation
         * optional field
         * you can use this array to filter expressions applied to the raw mentions database before aggregation to limit the rows contributing to the result;
         * you can add several filters at once (8 filters maximum)
         * you should set a logical operator and, or between the conditions
         * the following operators are supported:
         * =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
         * you can use the % operator with like and not_like to match any string of zero or more characters
         * example:
         * ["ai_search_volume",">",1000]
         * the full list of possible filters is available here.
         * learn more about the initial dataset filters in this help center article.
         */
        initialDatasetFilters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * maximum number of elements within internal arrays
         * optional field
         * you can use this field to limit the number of elements within the following arrays:
         * sources_domain, search_results_domain, brand_entities_title, brand_entities_category
         * minimum value: 1
         * maximum value: 10
         * default value: 5
         */
        internalListLimit?: number | null;
        /**
         * search language code
         * optional field
         * if you use this field, you don't need to specify language_name;
         * you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
         * default value: en
         * Note: chat_gpt data is available for en only
         */
        languageCode?: string | null;
        /**
         * full name of search language
         * optional field
         * if you use this field, you don't need to specify language_code;
         * if you don't specify this field, the language_code with en value will be used by default;
         * you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
         * Note: chat_gpt data is available for English only
         */
        languageName?: string | null;
        /**
         * maximum number of results in the items array
         * optional field
         * you can use this parameter to limit the number of data objects you receive in the items array
         * minimum value: 1
         * maximum value: 1000
         * default value: 100
         */
        limit?: number | null;
        /**
         * search location code
         * optional field
         * if you use this field, you don't need to specify location_name
         * you can receive the list of available locations of the search engine with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
         * default value: 2840
         * Note: chat_gpt data is available for 2840 only
         */
        locationCode?: number | null;
        /**
         * full name of search location
         * optional field
         * if you use this field, you don't need to specify location_code
         * if you don't specify this field, the location_code with 2840 value will be used by default;
         * you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages
         * Note: chat_gpt data is available for United States only
         */
        locationName?: string | null;
        /**
         * offset in the results array of the returned mentions data
         * optional field
         * default value: 0
         * example: if you specify the 10 value, the first ten mentions objects in the results array will be omitted and the data will be provided for the successive objects;
         * Note: the maximum value is 1000000
         */
        offset?: number | null;
        /**
         * results sorting rules
         * optional field
         * you can use the same values as in the filters array to sort the results
         * possible sorting types:
         * asc - results will be sorted in the ascending order
         * desc - results will be sorted in the descending order
         * you should use a comma to set up a sorting type
         * example:
         * ["ai_search_volume,desc"]
         * Note: you can set no more than three sorting rules in a single request
         * you should use a comma to separate several sorting rules
         */
        orderBy?: Array<string> | null;
        /**
         * target platform
         * optional field
         * possible values:
         * chat_gpt, google
         * Note: data specific to brand entities is available for chat_gpt only;
         * Note #2:chat_gpt data is available for the United States and English only
         */
        platform?: string | null;
        /**
         * user-defined task identifier
         * optional field
         * the character limit is 255
         * you can use this parameter to identify the task and match it with the result
         * you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string | null;
        /**
         * array of objects containing target entities
         * required field
         * you can specify up to 10 entities (objects) in the target field
         * one target entity can contain either one domain or one keyword and related parameters
         * examples:
         * target array with a domain entity
         * @minItems 1
         * @maxItems 10
         */
        target: Array<{
          /**
           * target domain search filter
           * optional field
           * possible values:
           * include, exclude
           * default value: include
           */
          search_filter?: string | null;
          /**
           * target domain search scope
           * optional field
           * possible values:
           * any, sources, search_results
           * default value: any
           */
          search_scope?: Array<string | null> | null;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get AI cited pages through DataForSEO. */
    "aisa.get_dataforseo_ai_mentions_top_pages": {
      input: {
        /** array of filter expressions applied before aggregation optional field you can use this array to filter expressions applied to the raw mentions database before aggregation to limit the rows contributing to the result;you can add several filters at once (8 filters maximum) you should set a logical operator and, or between the conditions the following operators are supported: =, , in, not_in, like, not_like, ilike, not_ilike, match, not_match you can use the % operator with like and not_like to match any string of zero or more characters example: ["ai_search_volume",">","1000"]the full list of possible filters is available here. learn more about the initial dataset filters in this help center article. */
        initialDatasetFilters?: Array<unknown>;
        /** maximum number of elements within internal arrays optional field you can use this field to limit the number of elements within the following arrays: sources_domain search_results_domain minimum value: 1 maximum value: 10 default value: 5 */
        internalListLimit?: number;
        /** maximum number of results in the items array optional field you can use this parameter to limit the number of data objects you receive in the items array minimum value: 1 maximum value: 10 default value: 5 */
        itemsListLimit?: number;
        /** search language code optional field if you use this field, you don't need to specify language_name; you can receive the list of available languages of the search engine with their language_code_by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages default value: en Note: chat_gpt data is available for en onlyn */
        languageCode?: string;
        /** full name of search language optional field if you use this field, you don't need to specify language_code; if you don't specify this field, the language_code with en value will be used by default; you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages Note: chat_gpt data is available for English only */
        languageName?: string;
        /** links source scope optional field this parameter specifies which links will be used to extract pages and aggregation data possible values: sources, search_results default value: sources */
        linksScope?: string;
        /** search location code optional field if you use this field, you don't need to specify location_name you can receive the list of available locations of the search engine with their location_code by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages default value: 2840 Note: chat_gpt data is available for 2840 only */
        locationCode?: number;
        /** full name of search location optional field if you use this field, you don't need to specify location_code if you don't specify this field, the location_code with 2840 value will be used by default; you can receive the list of available locations of the search engine with their location_name by making a separate request to the https://api.dataforseo.com/v3/ai_optimization/llm_mentions/locations_and_languages Note: chat_gpt data is available for United States only */
        locationName?: string;
        /** target platform optional field possible values: chat_gpt, google default value: google Note: the data returned depends on the selected platform Note #2:chat_gpt data is available for the United States and English only */
        platform?: string;
        /**
         * user-defined task identifier optional field the character limit is 255 you can use this parameter to identify the task and match it with the result you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string;
        /**
         * array of objects containing target entities required field you can specify up to 10 entities (objects) in the target field one target entity can contain either one domain or one keyword and related parametersexamples: target array with a domain entity [{"domain": "en.wikipedia.org", "search_filter": "exclude"}] target array with a keyword entity [{"keyword": "bmw", "search_scope": ["question"], "match_type ": "partial_match"}] target array with multiple entities [{"domain": "en.wikipedia.org", "search_filter": "exclude"}, {"keyword": "bmw", "match_type ": "partial_match", "search_scope": ["answer"]}]
         * @minItems 1
         * @maxItems 10
         */
        target: Array<Record<string, unknown>>;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Amazon product details through DataForSEO. */
    "aisa.get_dataforseo_amazon_asin": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Amazon product search results through DataForSEO. */
    "aisa.get_dataforseo_amazon_products": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      }) & (Record<string, unknown> | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Amazon product sellers through DataForSEO. */
    "aisa.get_dataforseo_amazon_sellers": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get App Store listings through DataForSEO. */
    "aisa.get_dataforseo_app_store_listings": {
      input: {
        /**
         * app categories
         * optional field
         * the categories you specify are used to search for app listings;
         * you can get the full list of available app listing categories by this link
         * you can specify up to 10 categories
         */
        categories?: Array<string> | null;
        /**
         * keyword in the app's description
         * optional field
         * keywords that occur in the description of the app;
         * can contain up to 200 characters
         */
        description?: string | null;
        /**
         * array of results filtering parameters
         * optional field
         * you can add several filters at once (8 filters maximum)
         * you should set a logical operator and, or between the conditions
         * the following operators are supported:
         * regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like, not_like
         * you can use the % operator with like and not_like to match any string of zero or more characters
         * example:
         * ["rating.value",">",3]
         * you can receive the list of available filters_by making a separate request to https://api.dataforseo.com/v3/app_data/apple/app_listings/available_filtersn
         */
        filters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * the maximum number of returned apps
         * optional field
         * default value: 100
         * maximum value: 1000
         */
        limit?: number | null;
        /**
         * offset in the results array of returned apps
         * optional field
         * default value: 0
         * if you specify the 10 value, the first ten entities in the results array will be omitted and the data will be provided for the successive entities
         * Note: we recommend using this parameter only when retrieving up to 10,000 results
         * for retrieving over 10,000 results, use the offset_token instead.
         */
        offset?: number | null;
        /**
         * token for subsequent requests
         * optional field
         * provided in the identical filed of the response to each request;
         * use this parameter to avoid timeouts while trying to obtain over 100,000 results in a single request;
         * by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
         * offset_token values are unique for each subsequent task
         * Note: if the offset_token is specified in the request, all other parameters should be identical to the previous request
         * learn more about this parameter on our Help Center
         */
        offsetToken?: string | null;
        /**
         * results sorting rules
         * optional field
         * you can use the same values as in the filters array to sort the results
         * possible sorting types:
         * asc - results will be sorted in the ascending order
         * desc - results will be sorted in the descending order
         * you should use a comma to set up a sorting parameter
         * example:
         * ["item.rating.value,desc"]
         * note that you can set no more than three sorting rules in a single request
         * you should use a comma to separate several sorting rules
         * example:
         * ["item.rating.value,desc","item.rating.value,desc"]
         */
        orderBy?: Array<string> | null;
        /**
         * user-defined task identifier
         * optional field
         * the character limit is 255
         * you can use this parameter to identify the task and match it with the result
         * you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string | null;
        /**
         * keyword in the app's title
         * optional field
         * keywords that occur in the title of the app;
         * can contain up to 200 characters
         */
        title?: string | null;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get bulk backlink spam scores through DataForSEO. */
    "aisa.get_dataforseo_backlinks_bulk_spam_score": {
      input: {
        /**
         * user-defined task identifier
         * optional field
         * the character limit is 255
         * you can use this parameter to identify the task and match it with the result
         * you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string | null;
        /**
         * domains, subdomains or webpages to get rank for
         * required field
         * you can set up to 1000 domains, subdomains or webpages
         * the domain or subdomain should be specified without https:// and www.
         * the page should be specified with absolute URL (including http:// or https://)
         * example:
         * `"targets": [
         *   "forbes.com",
         *   "cnn.com",
         *   "bbc.com",
         *   "yelp.com",
         *   "https://www.apple.com/iphone/",
         *   "https://ahrefs.com/blog/",
         *   "ibm.com",
         *   "https://variety.com/",
         *   "https://stackoverflow.com/",
         *   "www.trustpilot.com"
         * ]`
         * @minItems 1
         * @maxItems 1000
         */
        targets: Array<string>;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get page backlink summaries through DataForSEO. */
    "aisa.get_dataforseo_backlinks_domain_pages_summary": {
      input: {
        /**
         * filter the backlinks of your target
         * optional field
         * you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
         * you can filter the backlinks by all fields available in the response of this endpoint
         * using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
         * example:
         * "backlinks_filters": [["dofollow", "=", true]]
         */
        backlinksFilters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * set what backlinks to return and count
         * optional field
         * you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
         * possible values:
         * all - all backlinks will be returned and counted;
         * live - backlinks found during the last check will be returned and counted;
         * lost - lost backlinks will be returned and counted;
         * default value: live
         */
        backlinksStatusType?: string | null;
        /**
         * indicates whether the backlinks from subdomains of the target are excluded
         * optional field
         * if set to false, backlinks from the subdomains of the target domain will be ommited and you won't receive the same domain in the response;
         * default value: true
         */
        excludeInternalBacklinks?: boolean | null;
        /**
         * array of results filtering parameters
         * optional field
         * you can add several filters at once (8 filters maximum)
         * you should set a logical operator and, or between the conditions
         * the following operators are supported:
         * regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
         * you can use the % operator with like and not_like to match any string of zero or more characters
         * example:
         * ["referring_links_types.anchors",">","1"]
         * [["broken_pages",">","2"],
         * "and",
         * ["backlinks",">","10"]]
         * [["first_seen",">","2017-10-23 11:31:45 +00:00"],
         * "and",
         * [["anchor","like","%seo%"],"or",["referring_domains",">","10"]]]
         * The full list of possible filters is available here.
         */
        filters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * indicates if indirect links to the target will be included in the results
         * optional field
         * if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
         * if set to false, indirect links will be ignored
         * default value: true
         */
        includeIndirectLinks?: boolean | null;
        /**
         * indicates if the subdomains of the target domain will be included in the search
         * optional field
         * if set to false, the subdomains will be ignored
         * default value: true
         */
        includeSubdomains?: boolean | null;
        /**
         * maximum number of elements within internal arrays
         * optional field
         * you can use this field to limit the number of elements within the following arrays:
         * referring_links_tld
         * referring_links_types
         * referring_links_attributes
         * referring_links_platform_types
         * referring_links_semantic_locations
         * default value: 10
         * maximum value: 1000
         */
        internalListLimit?: number | null;
        /**
         * the maximum number of returned anchors
         * optional field
         * default value: 100
         * maximum value: 1000
         */
        limit?: number | null;
        /**
         * offset in the results array of returned anchors
         * optional field
         * default value: 0
         * if you specify the 10 value, the first ten anchors in the results array will be omitted and the data will be provided for the successive anchors
         */
        offset?: number | null;
        /**
         * results sorting rules
         * optional field
         * you can use the same values as in the filters array to sort the results
         * possible sorting types:
         * asc - results will be sorted in the ascending order
         * desc - results will be sorted in the descending order
         * you should use a comma to set up a sorting type
         * example:
         * ["backlinks,desc"]
         * note that you can set no more than three sorting rules in a single request
         * you should use a comma to separate several sorting rules
         * example:
         * ["backlinks,desc","rank,asc"]
         */
        orderBy?: Array<string> | null;
        /**
         * defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
         * optional field
         * you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
         * possible values:
         * one_hundred — rank values are displayed on a 0–100 scale
         * one_thousand — rank values are displayed on a 0–1000 scale
         * default value: one_thousand
         * learn more about how this parameter works and how ranking metrics are calculated in this Help Center article
         */
        rankScale?: string | null;
        /**
         * user-defined task identifier
         * optional field
         * the character limit is 255
         * you can use this parameter to identify the task and match it with the result
         * you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string | null;
        /**
         * domain, subdomain or webpage to get summary data for
         * required field
         * a domain or a subdomain should be specified without https:// and www.
         * a page should be specified with absolute URL (including http:// or https://)
         * @minLength 1
         */
        target: string;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get referring page intersections through DataForSEO. */
    "aisa.get_dataforseo_backlinks_page_intersection": {
      input: {
        /**
         * set what backlinks to return and count
         * optional field
         * you can use this field to choose what backlinks will be returned and used for aggregated metrics for your targets;
         * possible values:
         * all - all backlinks will be returned and counted;
         * live - backlinks found during the last check will be returned and counted;
         * lost - lost backlinks will be returned and counted;
         * default value: live
         */
        backlinksStatusType?: string | null;
        /**
         * indicates if internal backlinks from subdomains to the target will be excluded from the results
         * optional field
         * if set to true, the results will not include data on internal backlinks from subdomains of the same domain as target
         * if set to false, internal links will be included in the result
         * default value: true
         */
        excludeInternalBacklinks?: boolean | null;
        /**
         * domains, subdomains or webpages you want to exclude
         * optional field
         * you can set up to 10 domains, subdomains or webpages
         * if you use this array, results will contain the referring pages that link to targets but don't link to exclude_targets
         * example:
         * `"exclude_targets": [
         * "bbc.com",
         * "https://www.apple.com/iphone/*",
         * "https://dataforseo.com/apis/*"]`
         */
        excludeTargets?: Array<string> | null;
        /**
         * array of results filtering parameters
         * optional field
         * you can add several filters at once (8 filters maximum)
         * you should set a logical operator and, or between the conditions
         * the following operators are supported:
         * regex, not_regex, =, <>, in, not_in, like, not_like, ilike, not_ilike, match, not_match
         * you can use the % operator with like and not_like to match any string of zero or more characters
         * example:
         * ["1.rank",">","80"]
         * [["2.page_from_rank",">","55"],
         * "and",
         * ["1.original","=","true"]]
         * [["1.first_seen",">","2017-10-23 11:31:45 +00:00"],
         * "and",
         * [["1.acnhor","like","%seo%"],"or",["1.text_pre","not_like","%seo%"]]]
         * The full list of possible filters is available here.
         */
        filters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * indicates if indirect links to the targets will be included in the results
         * optional field
         * if set to true, the results will include data on indirect links pointing to a page that either redirects to a target, or points to a canonical page
         * if set to false, indirect links will be ignored
         * default value: true
         */
        includeIndirectLinks?: boolean | null;
        /**
         * indicates if the subdomains of the targets will be included in the search
         * optional field
         * if set to false, the subdomains will be ignored
         * default value: true
         */
        includeSubdomains?: boolean | null;
        /**
         * maximum number of elements within internal arrays
         * optional field
         * you can use this field to limit the number of elements within the following arrays:
         * attributes
         * domain_from_platform_type
         * default value: 10
         * maximum value: 1000
         */
        internalListLimit?: number | null;
        /**
         * indicates whether to intersect backlinks
         * optional field
         * use this field to intersect or merge results for the specified URLs
         * possible values: all, partial
         * all - results are based on all backlinks;
         * partial - results are based on the intersecting backlinks only;
         * default value: all
         */
        intersectionMode?: string | null;
        /**
         * the maximum number of returned backlinks
         * optional field
         * default value: 100
         * maximum value: 1000
         */
        limit?: number | null;
        /**
         * offset in the results array of the returned backlinks
         * optional field
         * default value: 0
         * if you specify the 10 value, the first ten backlinks in the results array will be omitted and the data will be provided for the successive backlinks
         */
        offset?: number | null;
        /**
         * results sorting rules
         * optional field
         * you can use the same values as in the filters array to sort the results
         * possible sorting types:
         * asc - results will be sorted in the ascending order
         * desc - results will be sorted in the descending order
         * you should use a comma to set up a sorting type
         * example:
         * ["rank,desc"]
         * note that you can set no more than three sorting rules in a single request
         * you should use a comma to separate several sorting rules
         * example:
         * ["domain_from_rank,desc","page_from_rank,asc"]
         */
        orderBy?: Array<string> | null;
        /**
         * defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
         * optional field
         * you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
         * possible values:
         * one_hundred — rank values are displayed on a 0–100 scale
         * one_thousand — rank values are displayed on a 0–1000 scale
         * default value: one_thousand
         * learn more about how this parameter works and how ranking metrics are calculated in this Help Center article
         */
        rankScale?: string | null;
        /**
         * user-defined task identifier
         * optional field
         * the character limit is 255
         * you can use this parameter to identify the task and match it with the result
         * you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string | null;
        /**
         * domains, subdomains or webpages to get links for
         * required field
         * you can set up to 20 domains, subdomains or webpages
         * a domain or a subdomain should be specified without https:// and www.
         * a page should be specified with absolute URL (including http:// or https://)
         * example:
         * `"targets": {
         * "1": "http://planet.postgresql.org/",
         * "2": "http://gborg.postgresql.org/"
         * }`
         */
        targets: Record<string, string | null>;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get referring domains through DataForSEO. */
    "aisa.get_dataforseo_backlinks_referring_domains": {
      input: {
        /**
         * filter the backlinks of your target
         * optional field
         * you can use this field to filter the initial backlinks that will be included in the dataset for aggregated metrics for your target
         * you can filter the backlinks by all fields available in the response of this endpoint
         * using this parameter, you can include only dofollow backlinks in the response and create a flexible backlinks dataset to calculate the metrics for
         * example:
         * "backlinks_filters": ["dofollow", "=", true]
         */
        backlinksFilters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * set what backlinks to return and count
         * optional field
         * you can use this field to choose what backlinks will be returned and used for aggregated metrics for your target;
         * possible values:
         * all - all backlinks will be returned and counted;
         * live - backlinks found during the last check will be returned and counted;
         * lost - lost backlinks will be returned and counted;
         * default value: live
         */
        backlinksStatusType?: string | null;
        /**
         * indicates whether the backlinks from subdomains of the target are excluded
         * optional field
         * if set to false, the backlinks from subdomains of the target will be ommited and you won't receive the same domain in the response;
         * default value: true
         */
        excludeInternalBacklinks?: boolean | null;
        /**
         * array of results filtering parameters
         * optional field
         * you can add several filters at once (8 filters maximum)
         * you should set a logical operator and, or between the conditions
         * the following operators are supported:
         * regex, not_regex, =, <>, in, not_in, like, not_like, match, not_match
         * you can use the % operator with like and not_like to match any string of zero or more characters
         * example:
         * ["referring_pages",">","1"]
         * [["referring_pages",">","2"],
         * "and",
         * ["backlinks",">","10"]]
         * [["first_seen",">","2017-10-23 11:31:45 +00:00"],
         * "and",
         * [["domain","like","%dataforseo.com%"],"or",["referring_domains",">","10"]]]
         * The full list of possible filters is available here.
         */
        filters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * indicates if indirect links to the target will be included in the results
         * optional field
         * if set to true, the results will include data on indirect links pointing to a page that either redirects to the target, or points to a canonical page
         * if set to false, indirect links will be ignored
         * default value: true
         */
        includeIndirectLinks?: boolean | null;
        /**
         * indicates if the subdomains of the target will be included in the search
         * optional field
         * if set to false, the subdomains will be ignored
         * default value: true
         */
        includeSubdomains?: boolean | null;
        /**
         * maximum number of elements within internal arrays
         * optional field
         * you can use this field to limit the number of elements within the following arrays:
         * referring_links_tld
         * referring_links_types
         * referring_links_attributes
         * referring_links_platform_types
         * referring_links_semantic_locations
         * default value: 10
         * maximum value: 1000
         */
        internalListLimit?: number | null;
        /**
         * the maximum number of returned domains
         * optional field
         * default value: 100
         * maximum value: 1000
         */
        limit?: number | null;
        /**
         * offset in the results array of returned domains
         * optional field
         * default value: 0
         * if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive pages
         */
        offset?: number | null;
        /**
         * results sorting rules
         * optional field
         * you can use the same values as in the filters array to sort the results
         * possible sorting types:
         * asc - results will be sorted in the ascending order
         * desc - results will be sorted in the descending order
         * you should use a comma to set up a sorting type
         * example:
         * ["backlinks,desc"]
         * note that you can set no more than three sorting rules in a single request
         * you should use a comma to separate several sorting rules
         * example:
         * ["backlinks,desc","rank,asc"]
         */
        orderBy?: Array<string> | null;
        /**
         * defines the scale used for calculating and displaying the rank, domain_from_rank, and page_from_rank values
         * optional field
         * you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
         * possible values:
         * one_hundred — rank values are displayed on a 0–100 scale
         * one_thousand — rank values are displayed on a 0–1000 scale
         * default value: one_thousand
         * learn more about how this parameter works and how ranking metrics are calculated in this Help Center article
         */
        rankScale?: string | null;
        /**
         * user-defined task identifier
         * optional field
         * the character limit is 255
         * you can use this parameter to identify the task and match it with the result
         * you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string | null;
        /**
         * domain, subdomain or webpage to get referring domains for
         * required field
         * a domain or a subdomain should be specified without https:// and www.
         * a page should be specified with absolute URL (including http:// or https://)
         * @minLength 1
         */
        target: string;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get content category trends through DataForSEO. */
    "aisa.get_dataforseo_content_category_trends": {
      input: {
        /**
         * target category code
         * required field
         * to obtain a full list of available categories, refer to the Categories endpoint
         */
        categoryCode: number;
        /**
         * starting date of the time range
         * required field
         * minimum value: 2022-10-31
         * date format: "yyyy-mm-dd"
         * example:
         * "2019-01-15"
         * @minLength 1
         * @format date
         */
        dateFrom: string;
        /**
         * time range which will be used to group the results
         * optional field
         * default value: month
         * possible values: day, week, month
         */
        dateGroup?: string | null;
        /**
         * ending date of the time range
         * optional field
         * if you don't specify this field, today's date will be used by default
         * date format: "yyyy-mm-dd"
         * example:
         * "2019-01-15"
         * @format date
         */
        dateTo?: string | null;
        /**
         * initial dataset filtering parameters
         * optional field
         * initial filtering parameters that apply to fields in the Search endpoint;
         * you can add several filters at once (8 filters maximum)
         * you should set a logical operator and, or between the conditions
         * the following operators are supported:
         * regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, has, has_not, match, not_match
         * you can use the % operator with like and not_like to match any string of zero or more characters
         * example:
         * ["domain","<>", "logitech.com"]
         * [["domain","<>","logitech.com"],"and",["content_info.connotation_types.negative",">",1000]]
         * [["domain","<&gt","logitech.com"]],
         * "and",
         * [["content_info.connotation_types.negative",">",1000],
         * "or",
         * ["content_info.text_category","has",10994]]]
         * for more information about filters, please refer to Content Analysis API - Filters
         * learn more about the initial dataset filters in this help center article.
         */
        initialDatasetFilters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * maximum number of elements within internal arrays
         * optional field
         * you can use this field to limit the number of elements within the following arrays:
         * top_domains
         * text_categories
         * page_categories
         * countries
         * languages
         * default value: 1
         * maximum value: 20
         */
        internalListLimit?: number | null;
        /**
         * target page types
         * optional field
         * use this parameter to filter the dataset by page types
         * possible values:
         * "ecommerce", "news", "blogs", "message-boards", "organization"
         */
        pageType?: Array<string> | null;
        /**
         * defines the scale used for calculating and displaying the rank values
         * optional field
         * you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
         * possible values:
         * one_hundred — rank values are displayed on a 0–100 scale
         * one_thousand — rank values are displayed on a 0–1000 scale
         * default value: one_thousand
         * learn more about how this parameter works in this Help Center article
         */
        rankScale?: string | null;
        /**
         * results grouping type
         * optional field
         * possible grouping types:
         * as_is - returns data on all citations for the target category_code
         * one_per_domain - returns data on one citation of the category_code per domain
         * default value: as_is
         */
        searchMode?: string | null;
        /**
         * user-defined task identifier
         * optional field
         * the character limit is 255
         * you can use this parameter to identify the task and match it with the result
         * you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string | null;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get content mention trends through DataForSEO. */
    "aisa.get_dataforseo_content_phrase_trends": {
      input: {
        /**
         * starting date of the time range
         * required field
         * date format: "yyyy-mm-dd"
         * example:
         * "2019-01-15"
         * @minLength 1
         * @format date
         */
        dateFrom: string;
        /**
         * time range which will be used to group the results
         * optional field
         * default value: month
         * possible values: day, week, month
         */
        dateGroup?: string | null;
        /**
         * ending date of the time range
         * optional field
         * if you don't specify this field, today's date will be used by default
         * date format: "yyyy-mm-dd"
         * example:
         * "2019-01-15"
         * @format date
         */
        dateTo?: string | null;
        /**
         * initial dataset filtering parameters
         * optional field
         * initial filtering parameters that apply to fields in the Search endpoint;
         * you can add several filters at once (8 filters maximum);
         * you should set a logical operator and, or between the conditions;
         * the following operators are supported:
         * regex, not_regex, <, <=, >, >=, =, <>, in, not_in, like,not_like, has, has_not, match, not_match
         * you can use the % operator with like and not_like to match any string of zero or more characters;
         * example:
         * ["domain","<>", "logitech.com"]
         * [["domain","<>","logitech.com"],"and",["content_info.connotation_types.negative",">",1000]]
         * [["domain","<&gt","logitech.com"]],
         * "and",
         * [["content_info.connotation_types.negative",">",1000],
         * "or",
         * ["content_info.text_category","has",10994]]]
         * for more information about filters, please refer to Content Analysis API - Filters
         * learn more about the initial dataset filters in this help center article.
         */
        initialDatasetFilters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * maximum number of elements within internal arrays
         * optional field
         * you can use this field to limit the number of elements within the following arrays:
         * top_domains
         * text_categories
         * page_categories
         * countries
         * languages
         * default value: 1
         * maximum value: 20
         */
        internalListLimit?: number | null;
        /**
         * target keyword
         * required field
         * UTF-8 encoding
         * the keywords will be converted to a lowercase format;
         * Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
         * example:
         * "keyword": "\"tesla palo alto\""
         * learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article
         * @minLength 1
         */
        keyword: string;
        /**
         * target keyword fields and target keywords
         * optional field
         * use this parameter to filter the dataset by keywords that certain fields should contain;
         * fields you can specify: title, main_title, previous_title, snippet
         * you can indicate several fields;
         * Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
         * example:
         * `"keyword_fields": {
         * "snippet": "\"logitech mouse\"",
         * "main_title": "sale"
         * }`
         */
        keywordFields?: Record<string, string | null> | null;
        /**
         * target page types
         * optional field
         * use this parameter to filter the dataset by page types
         * possible values:
         * "ecommerce", "news", "blogs", "message-boards", "organization"
         */
        pageType?: Array<string> | null;
        /**
         * defines the scale used for calculating and displaying the rank values
         * optional field
         * you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
         * possible values:
         * one_hundred — rank values are displayed on a 0–100 scale
         * one_thousand — rank values are displayed on a 0–1000 scale
         * default value: one_thousand
         * learn more about how this parameter works in this Help Center article
         */
        rankScale?: string | null;
        /**
         * results grouping type
         * optional field
         * possible grouping types:
         * as_is - returns data on all citations for the target keyword
         * one_per_domain - returns data on one citation of the keyword per domain
         * default value: as_is
         */
        searchMode?: string | null;
        /**
         * user-defined task identifier
         * optional field
         * the character limit is 255
         * you can use this parameter to identify the task and match it with the result
         * you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string | null;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get content sentiment through DataForSEO. */
    "aisa.get_dataforseo_content_sentiment": {
      input: {
        /**
         * initial dataset filtering parameters
         * optional field
         * initial filtering parameters that apply to fields in the Search endpoint
         * you can add several filters at once (8 filters maximum)
         * you should set a logical operator and, or between the conditions
         * the following operators are supported:
         * regex, not_regex, , >=, =, , in, not_in, like,not_like, has, has_not, match, not_match
         * you can use the % operator with like and not_like to match any string of zero or more characters
         * example:
         * ["domain","", "logitech.com"]
         * [["domain","","logitech.com"],"and",["content_info.connotation_types.negative",">",1000]]
         * [["domain","","logitech.com"]],
         * "and",
         * [["content_info.connotation_types.negative",">",1000],
         * "or",
         * ["content_info.text_category","has",10994]]]
         * for more information about filters, please refer to Content Analysis API – Filters
         * learn more about the initial dataset filters in this help center article.
         */
        initialDatasetFilters?: Array<string | number | boolean | Record<string, unknown> | null | Array<unknown>> | null;
        /**
         * maximum number of elements within internal arrays
         * optional field
         * you can use this field to limit the number of elements within the following arrays:
         * top_domains
         * text_categories
         * page_categories
         * countries
         * languages
         * default value: 1
         * maximum value: 20
         */
        internalListLimit?: number | null;
        /**
         * target keyword
         * required field
         * UTF-8 encoding
         * the keywords will be converted to a lowercase format;
         * Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
         * example:
         * "keyword": "\"tesla palo alto\""
         * learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article
         * @minLength 1
         */
        keyword: string;
        /**
         * target keyword fields and target keywords
         * optional field
         * use this parameter to filter the dataset by keywords that certain fields should contain;
         * fields you can specify: title, main_title, previous_title, snippet
         * you can indicate several fields;
         * Note: to match an exact phrase instead of a stand-alone keyword, use double quotes and backslashes;
         * example:
         * "keyword_fields": {
         *     "snippet": "\"logitech mouse\"",
         *     "main_title": "sale"
         * }
         */
        keywordFields?: Record<string, string | null> | null;
        /**
         * target page types
         * optional field
         * use this parameter to filter the dataset by page types
         * possible values:
         * "ecommerce", "news", "blogs", "message-boards", "organization"
         */
        pageType?: Array<string> | null;
        /**
         * positive connotation threshold
         * optional field
         * specified as the probability index threshold for positive sentiment related to the citation content
         * if you specify this field, connotation_types object in the response will only contain data on citations with positive sentiment probability more than or equal to the specified value
         * possible values: from 0 to 1
         * default value: 0.4
         */
        positiveConnotationThreshold?: number | null;
        /**
         * defines the scale used for calculating and displaying the rank values
         * optional field
         * you can use this parameter to choose whether rank values are presented on a 0–100 or 0–1000 scale
         * possible values:
         * one_hundred — rank values are displayed on a 0–100 scale
         * one_thousand — rank values are displayed on a 0–1000 scale
         * default value: one_thousand
         * learn more about how this parameter works in this Help Center article
         */
        rankScale?: string | null;
        /**
         * sentiment connotation threshold
         * optional field
         * specified as the probability index threshold for sentiment connotations related to the citation content
         * if you specify this field, sentiment_connotations object in the response will only contain data on citations where the probability per each sentiment is more than or equal to the specified value
         * possible values: from 0 to 1
         * default value: 0.4
         */
        sentimentsConnotationThreshold?: number | null;
        /**
         * user-defined task identifier
         * optional field
         * the character limit is 255
         * you can use this parameter to identify the task and match it with the result
         * you will find the specified tag value in the data object of the response
         * @maxLength 255
         */
        tag?: string | null;
      };
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google Business profiles through DataForSEO. */
    "aisa.get_dataforseo_google_business_info": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google Business questions and answers through DataForSEO. */
    "aisa.get_dataforseo_google_business_questions": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Compare popularity over time for up to five keywords using DataForSEO Trends for Google Search, News, or Shopping. These are DataForSEO estimates, not original Google Trends data or absolute search volumes. */
    "aisa.get_dataforseo_keyword_trends": {
      input: {
        /**
         * One to five keywords to compare.
         * @minItems 1
         * @maxItems 5
         */
        keywords: Array<string>;
        /** Full location name, such as United States. Use instead of locationCode; omit both for worldwide results. */
        locationName?: string;
        /** DataForSEO location code, such as 2840 for the United States. Results cover the country containing this location. */
        locationCode?: number;
        /** Search type: web for Google Search (default), news for Google News, or ecommerce for Google Shopping. */
        type?: "web" | "news" | "ecommerce";
        /**
         * Start date in YYYY-MM-DD format. Earliest is 2004-01-01 for web or 2008-01-01 for other types. Without a time window, upstream defaults to one year ago.
         * @format date
         */
        dateFrom?: string;
        /**
         * End date in YYYY-MM-DD format; upstream defaults to today.
         * @format date
         */
        dateTo?: string;
        /** Preset time window. Upstream ignores this when dateFrom or dateTo is supplied. */
        timeRange?: "past_4_hours" | "past_day" | "past_7_days" | "past_30_days" | "past_90_days" | "past_12_months" | "past_5_years";
        /**
         * A caller-defined identifier returned with the result.
         * @maxLength 255
         */
        tag?: string;
      };
      output: {
        /** Overall upstream status code. */
        status_code?: number;
        /** Overall upstream status message. */
        status_message?: string;
        /** Upstream reported cost in USD. */
        cost?: number;
        /** Number of tasks that failed. */
        tasks_error?: number;
        /** Live task responses, including business errors. */
        tasks?: Array<{
          /** Upstream task identifier. */
          id?: string;
          /** Task status code; 20000 indicates success. */
          status_code?: number;
          /** Task status message. */
          status_message?: string;
          /** Trend results, or null when unavailable. */
          result?: Array<{
            /** Keywords in result order. */
            keywords?: Array<string>;
            /** Trend graphs returned by the upstream service. */
            items?: Array<{
              /** Keywords corresponding to the values and averages arrays. */
              keywords?: Array<string>;
              /** Average relative popularity for each keyword over the time window. */
              averages?: Array<number>;
              /** Time buckets; retain both dates because a bucket may span multiple days. */
              data?: Array<{
                /** First date in this bucket. */
                date_from?: string;
                /** Last date in this bucket. */
                date_to?: string;
                /** Bucket Unix timestamp in seconds. */
                timestamp?: number;
                /** Relative popularity in keyword order: 100 is the peak, and 0 indicates insufficient data. These are not search volumes. */
                values?: Array<number>;
                [key: string]: unknown;
              }>;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get Bing keywords for a website through DataForSEO. */
    "aisa.get_dataforseo_keywords_bing_keywords_for_site": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Amazon search volumes through DataForSEO. */
    "aisa.get_dataforseo_labs_amazon_bulk_search_volume": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Amazon product competitors through DataForSEO. */
    "aisa.get_dataforseo_labs_amazon_product_competitors": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Amazon keyword intersections through DataForSEO. */
    "aisa.get_dataforseo_labs_amazon_product_keyword_intersections": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Amazon product rank overview through DataForSEO. */
    "aisa.get_dataforseo_labs_amazon_product_rank_overview": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Amazon ranked keywords through DataForSEO. */
    "aisa.get_dataforseo_labs_amazon_ranked_keywords": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Amazon related keywords through DataForSEO. */
    "aisa.get_dataforseo_labs_amazon_related_keywords": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get App Store competitors through DataForSEO. */
    "aisa.get_dataforseo_labs_app_store_app_competitors": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get App Store app metrics through DataForSEO. */
    "aisa.get_dataforseo_labs_app_store_bulk_app_metrics": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get App Store app keywords through DataForSEO. */
    "aisa.get_dataforseo_labs_app_store_keywords_for_app": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google keyword difficulty through DataForSEO. */
    "aisa.get_dataforseo_labs_bulk_keyword_difficulty": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google domain competitors through DataForSEO. */
    "aisa.get_dataforseo_labs_competitors_domain": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google domain metrics by category through DataForSEO. */
    "aisa.get_dataforseo_labs_domain_metrics_by_categories": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google Play competitors through DataForSEO. */
    "aisa.get_dataforseo_labs_google_play_app_competitors": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google Play keyword intersections through DataForSEO. */
    "aisa.get_dataforseo_labs_google_play_app_intersection": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google keyword ideas through DataForSEO. */
    "aisa.get_dataforseo_labs_keyword_ideas": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google keyword overview through DataForSEO. */
    "aisa.get_dataforseo_labs_keyword_overview": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google category keywords through DataForSEO. */
    "aisa.get_dataforseo_labs_keywords_for_categories": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Aggregate LLM mention metrics for domains and keyword entities. */
    "aisa.get_dataforseo_llm_mention_metrics": {
      input: {
        /**
         * The one to ten domain or keyword entities to analyze.
         * @minItems 1
         * @maxItems 10
         */
        targets: Array<Record<string, unknown>>;
        /** The search location name. */
        locationName?: string;
        /** The DataForSEO search location code. */
        locationCode?: number;
        /** The search language name. */
        languageName?: string;
        /** The search language code. */
        languageCode?: string;
        /** The AI-answer platform whose mentions should be analyzed. */
        platform?: "chat_gpt" | "google";
        /** Which cited links should contribute to aggregation. */
        linksScope?: "sources" | "search_results";
        /**
         * The maximum number of mention records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * A caller-defined identifier returned with the result.
         * @maxLength 255
         */
        tag?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get domains cited most often in LLM responses matching target entities. */
    "aisa.get_dataforseo_llm_mention_top_domains": {
      input: {
        /**
         * The one to ten domain or keyword entities to analyze.
         * @minItems 1
         * @maxItems 10
         */
        targets: Array<Record<string, unknown>>;
        /** The search location name. */
        locationName?: string;
        /** The DataForSEO search location code. */
        locationCode?: number;
        /** The search language name. */
        languageName?: string;
        /** The search language code. */
        languageCode?: string;
        /** The AI-answer platform whose mentions should be analyzed. */
        platform?: "chat_gpt" | "google";
        /** Which cited links should contribute to aggregation. */
        linksScope?: "sources" | "search_results";
        /**
         * The maximum number of mention records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * A caller-defined identifier returned with the result.
         * @maxLength 255
         */
        tag?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get Lighthouse audits through DataForSEO. */
    "aisa.get_dataforseo_onpage_lighthouse": {
      input: (unknown);
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Look up DataForSEO model names, location codes, categories, or supported filter fields before a research query. */
    "aisa.get_dataforseo_reference_data": {
      input: {
        /** The model, location, category, or filter catalog to retrieve. */
        resource: "chatgptModels" | "geminiModels" | "perplexityModels" | "mentionFilters" | "mentionLocationsAndLanguages" | "aiKeywordLocationsAndLanguages" | "amazonLocations" | "googlePlayCategories" | "googlePlayListingCategories" | "appStoreListingCategories" | "googleShoppingLocations" | "clickstreamLocationsAndLanguages" | "whoisFilters" | "labsFilters" | "contentCategories" | "contentFilters" | "baiduLocations" | "bingLocations" | "googleLocations" | "seznamLocations" | "youtubeLocations";
      };
      output: Record<string, unknown>;
    };
    /** Get Google AI Mode answers through DataForSEO. */
    "aisa.get_dataforseo_serp_google_ai_mode": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google Finance markets through DataForSEO. */
    "aisa.get_dataforseo_serp_google_finance_markets": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google Finance quotes through DataForSEO. */
    "aisa.get_dataforseo_serp_google_finance_quote": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google image search results through DataForSEO. */
    "aisa.get_dataforseo_serp_google_images": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      }) & (Record<string, unknown> | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google local search results through DataForSEO. */
    "aisa.get_dataforseo_serp_google_local_finder": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get Google news results through DataForSEO. */
    "aisa.get_dataforseo_serp_google_news": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      } | {
        locationCoordinate: unknown;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      } | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      }) & (Record<string, unknown> | {
        /** @minLength 1 */
        url: string;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get YouTube comments through DataForSEO. */
    "aisa.get_dataforseo_serp_youtube_comments": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get YouTube search results through DataForSEO. */
    "aisa.get_dataforseo_serp_youtube_organic": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get YouTube subtitles through DataForSEO. */
    "aisa.get_dataforseo_serp_youtube_subtitles": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Get YouTube video details through DataForSEO. */
    "aisa.get_dataforseo_serp_youtube_video_info": {
      input: ({
        locationCode: unknown;
        [key: string]: unknown;
      } | {
        locationName: unknown;
        [key: string]: unknown;
      }) & ({
        languageCode: unknown;
        [key: string]: unknown;
      } | {
        languageName: unknown;
        [key: string]: unknown;
      });
      output: {
        /** The overall response status code. */
        status_code?: number;
        /** The overall response status message. */
        status_message?: string;
        /** The supplier-reported cost; not the source of Marketplace customer billing. */
        cost?: number;
        /** The number of failed tasks. */
        tasks_error?: number;
        /** Task results; HTTP success does not imply that every task succeeded. */
        tasks?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve text and metadata for known URLs through Exa. Inspect statuses for per-URL failures, including when other URLs succeed. */
    "aisa.get_exa_contents": {
      input: {
        /**
         * The URLs to retrieve.
         * @minItems 1
         */
        urls: Array<string>;
        /** Streaming is not supported by this JSON action; must be false. */
        stream?: false;
        /** Return the full page text; defaults to true for get_exa_contents. */
        text?: boolean;
        /** Return highlighted relevant snippets. */
        highlights?: boolean;
        /** Return an AI-generated summary of the page. */
        summary?: boolean;
        /** Freshness policy for fetching page content. */
        livecrawl?: "always" | "fallback" | "never";
        /** Number of linked subpages to also retrieve. */
        subpages?: number;
      };
      output: {
        /** The Exa request identifier. */
        requestId?: string;
        /** Informational Exa cost; not the AIsa customer charge. */
        costDollars?: unknown;
        /** Retrieved page contents. */
        results?: Array<{
          /** The Exa result identifier, normally the page URL. */
          id?: string;
          /** The page URL. */
          url?: string;
          /** The page title. */
          title?: string;
          /** The page author. */
          author?: string;
          /** The publication date reported by the source. */
          publishedDate?: string;
          /** The retrieved page text. */
          text?: string;
          /** Relevant snippets from the page. */
          highlights?: Array<string>;
          /** The generated page summary. */
          summary?: string;
          [key: string]: unknown;
        }>;
        /** Per-URL retrieval statuses, including failures. */
        statuses?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get selected sections and exhibits from a company filing. */
    "aisa.get_filing_items": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker: string;
        /** The SEC filing type to retrieve. */
        filingType: "10-K" | "10-Q" | "8-K";
        /** The filing year. */
        year: number;
        /**
         * The filing quarter.
         * @minimum 1
         * @maximum 4
         */
        quarter?: number;
        /** The numbered filing item or section to return. */
        item?: "Item-1" | "Item-1A" | "Item-1B" | "Item-2" | "Item-3" | "Item-4" | "Item-5" | "Item-6" | "Item-7" | "Item-7A" | "Item-8" | "Item-9" | "Item-9A" | "Item-9B" | "Item-10" | "Item-11" | "Item-12" | "Item-13" | "Item-14" | "Item-15" | "Item-16" | "Item-1.01" | "Item-1.02" | "Item-1.03" | "Item-1.04" | "Item-2.01" | "Item-2.02" | "Item-2.03" | "Item-2.04" | "Item-2.05" | "Item-2.06" | "Item-3.01" | "Item-3.02" | "Item-3.03" | "Item-4.01" | "Item-4.02" | "Item-5.01" | "Item-5.02" | "Item-5.03" | "Item-5.04" | "Item-5.05" | "Item-5.06" | "Item-5.07" | "Item-5.08" | "Item-6.01" | "Item-6.02" | "Item-6.03" | "Item-6.04" | "Item-6.05" | "Item-7.01" | "Item-8.01" | "Item-9.01";
        /** The SEC accession number of a specific filing. */
        accessionNumber?: string;
        /** Whether to include filing exhibits in the response. */
        includeExhibits?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Get historical valuation, profitability, growth, and leverage metrics. */
    "aisa.get_financial_metrics": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Get the latest available financial metrics for a company. */
    "aisa.get_financial_metrics_snapshot": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Get a Firecrawl task state and results. Check outputExpired and job errors even when the task has finished. */
    "aisa.get_firecrawl_batch_scrape": {
      input: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId?: string;
        /** Job state: queued, running, completed, failed or cancelled. */
        status?: string;
        /** Upstream crawl or batch scrape output; may be unavailable before completion or after expiry. */
        output?: unknown;
        /** Whether the upstream output has expired. */
        outputExpired?: boolean | null;
        /** Upstream job error details. */
        error?: Record<string, unknown> | null;
        /** AIsa pricing information, in micro-USD. */
        pricing?: {
          /** Initially authorized amount; not the final charge. */
          authorizedMicrosUSD?: number | null;
          /** Final customer charge; null means unknown, zero means no charge. */
          finalMicrosUSD?: number | null;
          /** Pricing currency. */
          currency?: string | null;
          /** AIsa billing mode. */
          billingMode?: string | null;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Get a Firecrawl task state and results. Check outputExpired and job errors even when the task has finished. */
    "aisa.get_firecrawl_crawl": {
      input: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId?: string;
        /** Job state: queued, running, completed, failed or cancelled. */
        status?: string;
        /** Upstream crawl or batch scrape output; may be unavailable before completion or after expiry. */
        output?: unknown;
        /** Whether the upstream output has expired. */
        outputExpired?: boolean | null;
        /** Upstream job error details. */
        error?: Record<string, unknown> | null;
        /** AIsa pricing information, in micro-USD. */
        pricing?: {
          /** Initially authorized amount; not the final charge. */
          authorizedMicrosUSD?: number | null;
          /** Final customer charge; null means unknown, zero means no charge. */
          finalMicrosUSD?: number | null;
          /** Pricing currency. */
          currency?: string | null;
          /** AIsa billing mode. */
          billingMode?: string | null;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** List ads for one or more known Foreplay brand IDs. */
    "aisa.get_foreplay_brand_ads": {
      input: {
        /**
         * The Foreplay brand IDs whose ads should be returned.
         * @minItems 1
         */
        brandIds: Array<string>;
        /** Whether to return only currently active or inactive ads. */
        live?: boolean;
        /** The ad display formats to include. */
        displayFormats?: Array<"carousel" | "dco" | "dpa" | "event" | "image" | "multi_images" | "multi_medias" | "multi_videos" | "page_like" | "text" | "video">;
        /** The publisher platforms to include. */
        publisherPlatforms?: Array<"facebook" | "instagram" | "audience_network" | "messenger" | "tiktok" | "youtube" | "linkedin" | "threads" | "whatsapp">;
        /** The advertising niches to include. */
        niches?: Array<string>;
        /** The intended market type for the ads. */
        marketTarget?: "b2b" | "b2c";
        /** The ad languages to include. */
        languages?: Array<string>;
        /**
         * The minimum video duration in seconds.
         * @minimum 0
         */
        minVideoDurationSeconds?: number;
        /**
         * The maximum video duration in seconds.
         * @minimum 0
         */
        maxVideoDurationSeconds?: number;
        /**
         * The minimum number of days the ad has run.
         * @minimum 1
         */
        minRunningDays?: number;
        /**
         * The maximum number of days the ad has run.
         * @minimum 1
         */
        maxRunningDays?: number;
        /**
         * Return ads first observed on or after this date.
         * @format date
         */
        startDate?: string;
        /**
         * Return ads first observed on or before this date.
         * @format date
         */
        endDate?: string;
        /** The cursor returned by the previous Foreplay response. */
        cursor?: string;
        /**
         * The maximum number of billed ads to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /** How to order the returned ads. */
        order?: "newest" | "oldest" | "longest_running" | "most_relevant";
        /** Whether to try a slower live collection when cached results are empty; use only as a fallback. */
        collect?: boolean;
      };
      output: {
        /** The records returned by Foreplay. */
        data?: Array<Record<string, unknown>>;
        /** Pagination and request metadata returned by Foreplay. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get daily running-ad distribution and creative velocity for a brand page. */
    "aisa.get_foreplay_brand_analytics": {
      input: {
        /** The numeric page_id or ad_library_id returned by find_foreplay_brands; a Foreplay brand_id is not accepted. */
        adLibraryId: string;
        /**
         * The first analytics date; the complete window must not exceed 30 days.
         * @format date
         */
        startDate?: string;
        /**
         * The last analytics date; the complete window must not exceed 30 days.
         * @format date
         */
        endDate?: string;
        /** How to order the returned ads. */
        order?: "newest" | "oldest" | "longest_running" | "most_relevant";
      };
      output: {
        /** The records returned by Foreplay. */
        data?: Array<Record<string, unknown>>;
        /** Pagination and request metadata returned by Foreplay. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get standardized income statements for a company. */
    "aisa.get_income_statements": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** List reported insider transactions for a ticker. */
    "aisa.get_insider_trades": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /** Text to match against the reporting insider's name. */
        insiderName?: string;
        /** The transaction type to return. */
        transactionType?: string;
        /**
         * The exact filing date in YYYY-MM-DD format.
         * @format date
         */
        filingDate?: string;
        /**
         * Return filings on or after this date.
         * @format date
         */
        filingDateFrom?: string;
        /**
         * Return filings on or before this date.
         * @format date
         */
        filingDateTo?: string;
      };
      output: Record<string, unknown>;
    };
    /** List Kalshi prediction markets with live quotes, settlement rules, and pagination. */
    "aisa.get_kalshi_markets": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 0
         * @maximum 1000
         */
        limit?: number;
        /** The pagination cursor returned by the previous response. */
        cursor?: string;
        /** Comma-separated Kalshi market tickers to retrieve. */
        tickers?: string;
        /** A Kalshi event ticker used to filter markets. */
        eventTicker?: string;
        /** A Kalshi series ticker used to filter markets. */
        seriesTicker?: string;
        /** Keywords to find in market titles and descriptions. */
        search?: string;
        /** The Kalshi market status to return. */
        status?: "unopened" | "open" | "paused" | "closed" | "settled";
        /** Return markets created after this Unix timestamp. */
        minCreatedTimestamp?: number;
        /** Return markets created before this Unix timestamp. */
        maxCreatedTimestamp?: number;
        /** Return markets updated after this Unix timestamp. */
        minUpdatedTimestamp?: number;
        /** Return markets closing after this Unix timestamp. */
        minCloseTimestamp?: number;
        /** Return markets closing before this Unix timestamp. */
        maxCloseTimestamp?: number;
        /** Return markets settled after this Unix timestamp. */
        minSettledTimestamp?: number;
        /** Return markets settled before this Unix timestamp. */
        maxSettledTimestamp?: number;
        /** How to filter multivariate-event markets. */
        multivariateEventFilter?: "only" | "exclude";
      };
      output: {
        /** The cursor for the next page when more markets are available. */
        cursor?: string;
        /** The Kalshi markets matching the filters. */
        markets: Array<Record<string, unknown>>;
      };
    };
    /** List executed Kalshi trades with prices, size, side, and pagination. */
    "aisa.get_kalshi_trades": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 0
         * @maximum 1000
         */
        limit?: number;
        /** The pagination cursor returned by the previous response. */
        cursor?: string;
        /** The Kalshi market ticker to filter by. */
        ticker?: string;
        /** Return trades executed after this Unix timestamp. */
        minTimestamp?: number;
        /** Return trades executed before this Unix timestamp. */
        maxTimestamp?: number;
        /** Whether to return only block trades or only non-block trades. */
        isBlockTrade?: boolean;
      };
      output: {
        /** The cursor for the next page when more trades are available. */
        cursor?: string;
        /** The executed Kalshi trades matching the filters. */
        trades: Array<Record<string, unknown>>;
      };
    };
    /** Get one wallet's Polymarket split, merge, and redemption activity. */
    "aisa.get_polymarket_activity": {
      input: {
        /**
         * The wallet address whose Polymarket activity should be returned.
         * @pattern ^0x[0-9a-fA-F]{40}$
         */
        user: string;
        /** Return activity at or after this Unix timestamp. */
        startTimestamp?: number;
        /** Return activity at or before this Unix timestamp. */
        endTimestamp?: number;
        /** The Polymarket market slug to filter by. */
        marketSlug?: string;
        /** The Polymarket condition ID to filter by. */
        conditionId?: string;
        /**
         * The maximum number of activity records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The pagination key returned by the previous response. */
        paginationKey?: string;
      };
      output: {
        /** The wallet activity records matching the filters. */
        activities: Array<Record<string, unknown>>;
        /** Pagination metadata, including the next pagination key when available. */
        pagination: Record<string, unknown>;
      };
    };
    /** List Polymarket events and their related prediction markets. */
    "aisa.get_polymarket_events": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 0
         */
        limit?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /** A comma-separated list of fields used to order the results. */
        order?: string;
        /** Whether to sort the results in ascending order. */
        ascending?: boolean;
        /** The Polymarket event IDs to return. */
        ids?: Array<number>;
        /** The Polymarket event slugs to return. */
        slugs?: Array<string>;
        /** The Polymarket tag ID to filter by. */
        tagId?: number;
        /** The Polymarket tag slug to filter by. */
        tagSlug?: string;
        /** Whether to return active or inactive events. */
        active?: boolean;
        /** Whether to return archived or unarchived events. */
        archived?: boolean;
        /** Whether to return featured or non-featured events. */
        featured?: boolean;
        /** Whether to return closed or open events. */
        closed?: boolean;
        /** The minimum event liquidity. */
        minLiquidity?: number;
        /** The maximum event liquidity. */
        maxLiquidity?: number;
        /** The minimum event volume. */
        minVolume?: number;
        /** The maximum event volume. */
        maxVolume?: number;
        /**
         * Return events starting after this ISO timestamp.
         * @format date-time
         */
        minStartDate?: string;
        /**
         * Return events starting before this ISO timestamp.
         * @format date-time
         */
        maxStartDate?: string;
        /**
         * Return events ending after this ISO timestamp.
         * @format date-time
         */
        minEndDate?: string;
        /**
         * Return events ending before this ISO timestamp.
         * @format date-time
         */
        maxEndDate?: string;
      };
      output: Array<Record<string, unknown>>;
    };
    /** List Polymarket questions with outcome prices, liquidity, volume, and date filters. */
    "aisa.get_polymarket_markets": {
      input: {
        /**
         * The maximum number of records to return.
         * @minimum 0
         */
        limit?: number;
        /**
         * The number of records to skip.
         * @minimum 0
         */
        offset?: number;
        /** A comma-separated list of fields used to order the results. */
        order?: string;
        /** Whether to sort the results in ascending order. */
        ascending?: boolean;
        /** The Polymarket market IDs to return. */
        ids?: Array<number>;
        /** The Polymarket market slugs to return. */
        slugs?: Array<string>;
        /** The CLOB token IDs to filter by. */
        clobTokenIds?: Array<string>;
        /** The condition IDs to filter by. */
        conditionIds?: Array<string>;
        /** The minimum total market volume. */
        minVolume?: number;
        /** The maximum total market volume. */
        maxVolume?: number;
        /**
         * Return markets starting after this ISO timestamp.
         * @format date-time
         */
        minStartDate?: string;
        /**
         * Return markets starting before this ISO timestamp.
         * @format date-time
         */
        maxStartDate?: string;
        /**
         * Return markets ending after this ISO timestamp.
         * @format date-time
         */
        minEndDate?: string;
        /**
         * Return markets ending before this ISO timestamp.
         * @format date-time
         */
        maxEndDate?: string;
        /** The Polymarket tag ID to filter by. */
        tagId?: number;
        /** Whether to return closed or open markets. */
        closed?: boolean;
        /** Whether to include tag metadata in each market. */
        includeTag?: boolean;
      };
      output: Array<Record<string, unknown>>;
    };
    /** Get backlink anchor text and backlink counts for a domain or URL. */
    "aisa.get_semrush_backlink_anchors": {
      input: {
        /** The domain or URL whose backlink anchors should be returned. */
        target: string;
        /** How Semrush should interpret the backlink target. */
        targetType: "root_domain" | "domain" | "url";
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Find domains competing with a target for backlinks. */
    "aisa.get_semrush_backlink_competitors": {
      input: {
        /** The domain or URL used to find backlink competitors. */
        target: string;
        /** How Semrush should interpret the backlink target. */
        targetType: "root_domain" | "domain" | "url";
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** List backlinks pointing to a domain or URL. */
    "aisa.get_semrush_backlinks": {
      input: {
        /** The domain or URL whose backlinks should be returned. */
        target: string;
        /** How Semrush should interpret the backlink target. */
        targetType: "root_domain" | "domain" | "url";
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Get authority, backlink, referring-domain, URL, and IP totals for a root domain. */
    "aisa.get_semrush_backlinks_overview": {
      input: {
        /** The root domain to analyze. */
        target: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Find broad-match keyword ideas for a seed phrase. */
    "aisa.get_semrush_broad_match_keywords": {
      input: {
        /** The seed keyword phrase. */
        phrase: string;
        /** The Semrush regional database code, such as us. */
        database: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** List a domain's Google organic keywords with positions, search volume, CPC, and ranking URLs. */
    "aisa.get_semrush_domain_organic_keywords": {
      input: {
        /** The domain to analyze without a path. */
        domain: string;
        /** The Semrush regional database code, such as us. */
        database: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Get current Semrush rank, organic keyword, traffic, cost, and paid keyword totals for a domain. */
    "aisa.get_semrush_domain_overview": {
      input: {
        /** The domain to analyze without a path. */
        domain: string;
        /** The Semrush regional database code, such as us. Defaults to us when omitted. */
        database?: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Get historical Semrush rank and search-visibility metrics for a domain. */
    "aisa.get_semrush_domain_rank_history": {
      input: {
        /** The domain to analyze without a path. */
        domain: string;
        /** The Semrush regional database code, such as us. */
        database: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** List pages with backlinks and their backlink counts; this report does not verify Google indexation or live HTTP status. */
    "aisa.get_semrush_indexed_pages": {
      input: {
        /** The domain or URL whose linked pages should be returned. */
        target: string;
        /** How Semrush should interpret the backlink target. */
        targetType: "root_domain" | "domain" | "url";
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Get keyword-difficulty scores for up to 20 keywords. */
    "aisa.get_semrush_keyword_difficulty": {
      input: {
        /**
         * The one to twenty keywords to analyze.
         * @minItems 1
         * @maxItems 20
         */
        phrases: Array<string>;
        /** The Semrush regional database code, such as us. */
        database: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Get volume, CPC, competition, and result counts for a keyword. */
    "aisa.get_semrush_keyword_overview": {
      input: {
        /** The keyword phrase to analyze. */
        phrase: string;
        /** The Semrush regional database code, such as us. */
        database?: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Find Google organic search competitors with relevance and shared keyword counts. */
    "aisa.get_semrush_organic_competitors": {
      input: {
        /** The domain to analyze without a path. */
        domain: string;
        /** The Semrush regional database code, such as us. */
        database: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** List domains, URLs, and raw SERP feature codes for a keyword in Google organic search. */
    "aisa.get_semrush_organic_results": {
      input: {
        /** The keyword phrase to analyze. */
        phrase: string;
        /** The Semrush regional database code, such as us. Defaults to us when omitted. */
        database?: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** Find question-form keyword ideas for a seed phrase. */
    "aisa.get_semrush_question_keywords": {
      input: {
        /** The seed keyword phrase. */
        phrase: string;
        /** The Semrush regional database code, such as us. */
        database: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** List domains linking to a target domain or URL. */
    "aisa.get_semrush_referring_domains": {
      input: {
        /** The domain or URL whose referring domains should be returned. */
        target: string;
        /** How Semrush should interpret the backlink target. */
        targetType: "root_domain" | "domain" | "url";
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** List a landing page's Google organic keywords with positions, search volume, and CPC. */
    "aisa.get_semrush_url_organic_keywords": {
      input: {
        /** The complete landing page URL to analyze. */
        url: string;
        /** The Semrush regional database code, such as us. */
        database: string;
      };
      output: {
        /** The original semicolon-delimited response returned by AIsa. */
        rawText: string;
        /** The report columns in response order. */
        columns: Array<string>;
        /** The report rows in response order. */
        rows: Array<Array<string>>;
      };
    };
    /** List display-ad networks associated with a website. */
    "aisa.get_similarweb_ad_networks": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The traffic-source segment used to filter the results. */
        trafficSource?: string;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List topics and categories that interest a website's audience. */
    "aisa.get_similarweb_audience_interests": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The traffic-source segment used to filter the results. */
        trafficSource?: string;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Compare duplicated and exclusive audiences across two to five websites. */
    "aisa.get_similarweb_audience_overlap": {
      input: {
        /**
         * The two to five domains to compare.
         * @minItems 2
         * @maxItems 5
         */
        domains: Array<string>;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get deduplicated desktop and mobile-web audience measurements. */
    "aisa.get_similarweb_deduplicated_audience": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get age and gender distributions for a website's audience in one month. */
    "aisa.get_similarweb_demographics": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        month: string;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List domains competing with a website for organic and paid search clicks. */
    "aisa.get_similarweb_keyword_competitors": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
        /** The traffic-source segment used to filter the results. */
        trafficSource?: string;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List pages receiving organic or paid search traffic for a website. */
    "aisa.get_similarweb_landing_pages": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The traffic-source segment used to filter the results. */
        trafficSource?: string;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get direct, search, social, referral, mail, and display traffic shares. */
    "aisa.get_similarweb_marketing_channels": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List the pages that receive the most traffic on a website. */
    "aisa.get_similarweb_popular_pages": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The traffic-source segment used to filter the results. */
        trafficSource?: string;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get estimated monthly paid-search spending for a website. */
    "aisa.get_similarweb_ppc_spend": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get monthly global, country, and category rankings for a website. */
    "aisa.get_similarweb_ranking": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List websites that send referral traffic to the target domain. */
    "aisa.get_similarweb_referrals": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The traffic-source segment used to filter the results. */
        trafficSource?: string;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Compare domains capturing the most search clicks for a keyword. */
    "aisa.get_similarweb_serp_players_aggregated": {
      input: {
        /** The search keyword to analyze. */
        keyword: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Track how search clicks shift among domains competing for a keyword over time. */
    "aisa.get_similarweb_serp_players_timeseries": {
      input: {
        /** The search keyword to analyze. */
        keyword: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List websites whose audience and traffic profile resemble a target website. */
    "aisa.get_similarweb_similar_sites": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The traffic-source segment used to filter the results. */
        trafficSource?: string;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List the subdomains that receive traffic for a website. */
    "aisa.get_similarweb_subdomains": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** The traffic-source segment used to filter the results. */
        trafficSource?: string;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List technologies detected on a website for the latest available month. */
    "aisa.get_similarweb_technologies": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The latest available complete month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        month: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the top countries by share of a website's traffic for the latest month. */
    "aisa.get_similarweb_top_geographies": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List the highest-ranked websites in an industry category. */
    "aisa.get_similarweb_top_sites": {
      input: {
        /** The industry category to rank, such as Finance. */
        category: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get monthly visits and engagement metrics for a website from Similarweb. */
    "aisa.get_similarweb_traffic_engagement": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /** Comma-separated metrics, such as visits,pages_per_visit. */
        metrics: string;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** The device segment used to measure web traffic. */
        webSource?: "desktop" | "mobile_web" | "total";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
        /** Whether to request month-to-date measurements. */
        monthToDate?: boolean;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the latest visits and engagement snapshot for a website. */
    "aisa.get_similarweb_traffic_snapshot": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the recent monthly traffic trend for a website. */
    "aisa.get_similarweb_traffic_trend": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** List organic and paid keywords that send search traffic to a website. */
    "aisa.get_similarweb_website_keywords": {
      input: {
        /** The target domain without a path, such as example.com. */
        domain: string;
        /**
         * The first complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        startMonth: string;
        /**
         * The last complete data month in YYYY-MM format.
         * @pattern ^[0-9]{4}-(0[1-9]|1[0-2])$
         */
        endMonth: string;
        /**
         * The maximum number of billed rows to return.
         * @minimum 1
         * @maximum 20
         */
        limit: number;
        /** The geography available on the current AIsa plan. */
        country?: "us" | "ww";
        /** Whether to exclude subdomains from the measurement. */
        mainDomainOnly?: boolean;
      };
      output: {
        /** The request, billing, and data-period metadata returned by AIsa. */
        meta?: Record<string, unknown>;
        /** The Similarweb measurements returned for this request. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Get the most recent earnings snapshot for a ticker. */
    "aisa.get_stock_earnings": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker: string;
      };
      output: Record<string, unknown>;
    };
    /** Get the latest available market-price snapshot for a ticker. */
    "aisa.get_stock_price_snapshot": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker: string;
      };
      output: Record<string, unknown>;
    };
    /** Get historical market prices for a ticker and date range. */
    "aisa.get_stock_prices": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker: string;
        /** The requested price-bar interval. */
        interval: "day" | "week" | "month" | "year";
        /**
         * The first market date in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * The last market date in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
      };
      output: Record<string, unknown>;
    };
    /** Get CoinGecko metadata and market data for a token contract. */
    "aisa.get_token_data": {
      input: {
        /** The CoinGecko asset-platform ID, such as ethereum. */
        platformId: string;
        /** The token contract address. */
        contractAddress: string;
      };
      output: Record<string, unknown>;
    };
    /** Get current prices for token contracts on one asset platform. */
    "aisa.get_token_prices": {
      input: {
        /** The CoinGecko asset-platform ID, such as ethereum. */
        platformId: string;
        /**
         * The token contract addresses to price.
         * @minItems 1
         */
        contractAddresses: Array<string>;
        /**
         * The quote currencies to return.
         * @minItems 1
         */
        currencies: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Get coins, NFTs, and categories currently trending on CoinGecko. */
    "aisa.get_trending_crypto": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get public posts mentioning a Twitter username in an optional time window. */
    "aisa.get_twitter_mentions": {
      input: {
        /** The mentioned Twitter username without the @ prefix. */
        username: string;
        /** Return mentions at or after this Unix timestamp. */
        sinceTimestamp?: number;
        /** Return mentions before this Unix timestamp. */
        untilTimestamp?: number;
        /** The cursor returned by the previous page. */
        cursor?: string;
      };
      output: Record<string, unknown>;
    };
    /** List public replies to a Twitter post. */
    "aisa.get_twitter_post_replies": {
      input: {
        /** The Twitter post ID whose replies should be returned. */
        postId: string;
        /** The cursor returned by the previous page. */
        cursor?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get public Twitter posts by their IDs. */
    "aisa.get_twitter_posts": {
      input: {
        /**
         * The Twitter post IDs to retrieve.
         * @minItems 1
         */
        postIds: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Get the public conversation context surrounding a Twitter post. */
    "aisa.get_twitter_thread": {
      input: {
        /** The Twitter post ID whose thread context should be returned. */
        postId: string;
        /** The cursor returned by the previous page. */
        cursor?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get public Twitter trends for a Where On Earth location. */
    "aisa.get_twitter_trends": {
      input: {
        /** The Where On Earth ID for the target location. */
        woeid: number;
        /**
         * The maximum number of trends to return.
         * @minimum 30
         */
        count?: number;
      };
      output: Record<string, unknown>;
    };
    /** Get a public Twitter profile by username through AIsa. */
    "aisa.get_twitter_user": {
      input: {
        /** The Twitter username without the @ prefix. */
        username: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a public Twitter user's most recent posts by ID or username. */
    "aisa.get_twitter_user_recent_posts": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Get a public Twitter user's post timeline. */
    "aisa.get_twitter_user_timeline": {
      input: {
        /** The Twitter user ID whose timeline should be returned. */
        userId: string;
        /** Whether to include replies. */
        includeReplies?: boolean;
        /** Whether to include parent posts for replies. */
        includeParentPost?: boolean;
        /** The cursor returned by the previous page. */
        cursor?: string;
      };
      output: Record<string, unknown>;
    };
    /** Get public Twitter profiles for multiple user IDs. */
    "aisa.get_twitter_users": {
      input: {
        /**
         * The Twitter user IDs to retrieve.
         * @minItems 1
         */
        userIds: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Get AIsa request, token, value, and charged usage in daily buckets. */
    "aisa.get_usage": {
      input: {
        /**
         * The usage window start as a positive Unix timestamp.
         * @minimum 1
         */
        startTimestamp: number;
        /**
         * The usage window end as a Unix timestamp; defaults to the current time.
         * @minimum 1
         */
        endTimestamp?: number;
      };
      output: Record<string, unknown>;
    };
    /** List SEC filings by ticker, CIK, and filing type. */
    "aisa.list_company_filings": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker?: string;
        /** The SEC Central Index Key used to identify the company. */
        cik?: string;
        /** The SEC filing type, such as 10-K or 10-Q. */
        filingType?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** List cryptocurrency categories and their aggregate market performance. */
    "aisa.list_crypto_categories": {
      input: {
        /** The CoinGecko category ordering expression. */
        order?: string;
      };
      output: Array<Record<string, unknown>>;
    };
    /** List exchanges ranked by trust score and trading volume. */
    "aisa.list_crypto_exchanges": {
      input: {
        /**
         * The maximum exchanges per page.
         * @minimum 1
         * @maximum 250
         */
        perPage?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
      };
      output: Array<Record<string, unknown>>;
    };
    /** List coin markets with price, capitalization, volume, and change metrics. */
    "aisa.list_crypto_markets": {
      input: {
        /** A CoinGecko quote-currency code, such as usd. */
        currency: string;
        /** The CoinGecko coin IDs to include. */
        coinIds?: Array<string>;
        /** The CoinGecko category ID used to filter markets. */
        category?: string;
        /** The CoinGecko market ordering expression. */
        order?: string;
        /**
         * The maximum number of markets per page.
         * @minimum 1
         * @maximum 250
         */
        perPage?: number;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /** Whether to include seven-day sparkline values. */
        sparkline?: boolean;
        /** The price-change windows to include. */
        priceChangePercentages?: Array<string>;
      };
      output: Array<Record<string, unknown>>;
    };
    /** Look up the public contact email for one creator profile; not-found results are billed. */
    "aisa.lookup_creator_email": {
      input: {
        /**
         * An Instagram, TikTok, or YouTube creator profile URL.
         * @format uri
         */
        profileUrl: string;
      };
      output: {
        /** The creator matches or contact result returned by WaveInflu. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Discover website links through Firecrawl. Set limit to bound discovery and usage before retrieving individual pages. */
    "aisa.map_firecrawl": {
      input: {
        /**
         * The HTTPS website URL.
         * @format uri
         */
        url: string;
        /**
         * Maximum links to discover.
         * @minimum 1
         * @maximum 100000
         */
        limit: number;
      };
      output: {
        /** Whether upstream link discovery succeeded. */
        success?: boolean;
        /** Upstream credits consumed. */
        creditsUsed?: number;
        /** Discovered website links. */
        links?: Array<{
          /** The page URL. */
          url?: string;
          /** The page title. */
          title?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Run a live ChatGPT response query for GEO research through DataForSEO. */
    "aisa.query_dataforseo_chatgpt": {
      input: {
        /**
         * The question or task to send to the model.
         * @maxLength 500
         */
        prompt: string;
        /** The model name or version exposed by DataForSEO. */
        model: string;
        /**
         * The maximum number of output tokens to request.
         * @minimum 1
         * @maximum 4096
         */
        maxOutputTokens?: number;
        /**
         * The sampling temperature supported by the selected model.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * The nucleus-sampling probability supported by the selected model.
         * @minimum 0
         * @maximum 1
         */
        topP?: number;
        /** Whether the model may search the web for current information. */
        webSearch?: boolean;
        /** Whether to require web search when the model supports it. */
        forceWebSearch?: boolean;
        /** The ISO country code used to localize web search. */
        webSearchCountryCode?: string;
        /** The city used to localize web search. */
        webSearchCity?: string;
        /**
         * Instructions controlling the model's role or behavior.
         * @maxLength 500
         */
        systemMessage?: string;
        /**
         * Up to ten preceding conversation messages.
         * @maxItems 10
         */
        messageChain?: Array<{
          /** The author of the preceding message. */
          role: "user" | "ai";
          /**
           * The preceding message content.
           * @maxLength 500
           */
          message: string;
        }>;
        /**
         * A caller-defined identifier returned with the result.
         * @maxLength 255
         */
        tag?: string;
      };
      output: Record<string, unknown>;
    };
    /** Run a live Claude response query for GEO research through DataForSEO. */
    "aisa.query_dataforseo_claude": {
      input: {
        /**
         * The question or task to send to the model.
         * @maxLength 500
         */
        prompt: string;
        /** The model name or version exposed by DataForSEO. */
        model: string;
        /**
         * The maximum number of output tokens to request.
         * @minimum 1
         * @maximum 4096
         */
        maxOutputTokens?: number;
        /**
         * The sampling temperature supported by the selected model.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * The nucleus-sampling probability supported by the selected model.
         * @minimum 0
         * @maximum 1
         */
        topP?: number;
        /** Whether the model may search the web for current information. */
        webSearch?: boolean;
        /** Whether to require web search when the model supports it. */
        forceWebSearch?: boolean;
        /** The ISO country code used to localize web search. */
        webSearchCountryCode?: string;
        /** The city used to localize web search. */
        webSearchCity?: string;
        /**
         * Instructions controlling the model's role or behavior.
         * @maxLength 500
         */
        systemMessage?: string;
        /**
         * Up to ten preceding conversation messages.
         * @maxItems 10
         */
        messageChain?: Array<{
          /** The author of the preceding message. */
          role: "user" | "ai";
          /**
           * The preceding message content.
           * @maxLength 500
           */
          message: string;
        }>;
        /** Whether to enable model reasoning when supported. */
        useReasoning?: boolean;
        /**
         * A caller-defined identifier returned with the result.
         * @maxLength 255
         */
        tag?: string;
      };
      output: Record<string, unknown>;
    };
    /** Run a live Gemini response query for GEO research through DataForSEO. */
    "aisa.query_dataforseo_gemini": {
      input: {
        /**
         * The question or task to send to the model.
         * @maxLength 500
         */
        prompt: string;
        /** The model name or version exposed by DataForSEO. */
        model: string;
        /**
         * The maximum number of output tokens to request.
         * @minimum 1
         * @maximum 4096
         */
        maxOutputTokens?: number;
        /**
         * The sampling temperature supported by the selected model.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * The nucleus-sampling probability supported by the selected model.
         * @minimum 0
         * @maximum 1
         */
        topP?: number;
        /** Whether the model may search the web for current information. */
        webSearch?: boolean;
        /**
         * Instructions controlling the model's role or behavior.
         * @maxLength 500
         */
        systemMessage?: string;
        /**
         * Up to ten preceding conversation messages.
         * @maxItems 10
         */
        messageChain?: Array<{
          /** The author of the preceding message. */
          role: "user" | "ai";
          /**
           * The preceding message content.
           * @maxLength 500
           */
          message: string;
        }>;
        /** Whether to enable model reasoning when supported. */
        useReasoning?: boolean;
        /**
         * A caller-defined identifier returned with the result.
         * @maxLength 255
         */
        tag?: string;
      };
      output: Record<string, unknown>;
    };
    /** Run a live Perplexity response query for GEO research through DataForSEO. */
    "aisa.query_dataforseo_perplexity": {
      input: {
        /**
         * The question or task to send to the model.
         * @maxLength 500
         */
        prompt: string;
        /** The model name or version exposed by DataForSEO. */
        model: string;
        /**
         * The maximum number of output tokens to request.
         * @minimum 1
         * @maximum 4096
         */
        maxOutputTokens?: number;
        /**
         * The sampling temperature supported by the selected model.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * The nucleus-sampling probability supported by the selected model.
         * @minimum 0
         * @maximum 1
         */
        topP?: number;
        /** The ISO country code used to localize web search. */
        webSearchCountryCode?: string;
        /**
         * Instructions controlling the model's role or behavior.
         * @maxLength 500
         */
        systemMessage?: string;
        /**
         * Up to ten preceding conversation messages.
         * @maxItems 10
         */
        messageChain?: Array<{
          /** The author of the preceding message. */
          role: "user" | "ai";
          /**
           * The preceding message content.
           * @maxLength 500
           */
          message: string;
        }>;
        /**
         * A caller-defined identifier returned with the result.
         * @maxLength 255
         */
        tag?: string;
      };
      output: Record<string, unknown>;
    };
    /** Retrieve one HTTPS web page as Markdown through Firecrawl. The AIsa route supports basic proxy mode and excludes PDF URLs. */
    "aisa.scrape_firecrawl": {
      input: {
        /**
         * The HTTPS page URL; PDF URLs are not supported.
         * @format uri
         */
        url: string;
      };
      output: {
        /** Whether the upstream scrape succeeded. */
        success?: boolean;
        /** Upstream credits consumed. */
        creditsUsed?: number;
        /** The scraped page and its metadata. */
        data?: {
          /** The page content in Markdown. */
          markdown?: string;
          /** Page metadata, including title, source URL and HTTP status. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Find Akta companies by name, website, or UUID. */
    "aisa.search_akta_companies": {
      input: {
        /** A company name, website, or UUID. */
        query?: string;
      };
      output: {
        /** The matching company records. */
        data?: Array<Record<string, unknown>>;
        /** The number of returned companies. */
        count?: number;
        /** The total matching companies, capped at 500 by Akta. */
        total_count?: number;
        /** The Akta credits consumed; Marketplace billing uses AIsa customer-cost headers. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Search an Akta company list using natural language or structured filters, with optional enrichment and pagination. */
    "aisa.search_akta_company_list": {
      input: {
        /** A natural-language company search; cannot be combined with filters. */
        query?: string;
        /** Akta structured filters; cannot be combined with query. Use upstream filter field names. */
        filters?: Record<string, unknown>;
        /** Enrichment sections: firmographic, business_model, company_assessment, trust_signal, company_hierarchy, digital_presence, financial_estimate, location, management_profile, product_offering, strategic_signal, customer_profile, industry, technology, funding_detail, mna_and_investment. Funding and M&A may require a supplier subscription. */
        sections?: Array<string>;
        /**
         * The maximum number of companies; upstream default 50, maximum 500.
         * @maximum 500
         */
        limit?: number;
        /** The number of results to skip; upstream default zero. */
        offset?: number;
        /** The result ordering field; upstream default relevance. */
        sortBy?: "relevance" | "revenue_estimate" | "valuation_estimate" | "employee_range" | "total_funding" | "founded_year";
        /** The sort direction; upstream default desc. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** The matching company records. */
        data?: Array<Record<string, unknown>>;
        /** The number of returned companies. */
        count?: number;
        /** The total matching companies, capped at 500 by Akta. */
        total_count?: number;
        /** The Akta credits consumed; Marketplace billing uses AIsa customer-cost headers. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Resolve industry terms to ranked Akta industry codes. */
    "aisa.search_akta_industries": {
      input: {
        /** The industry search text. */
        query?: string;
        /** The taxonomy level accepted by Akta. */
        level?: string;
      };
      output: {
        /** The ranked industry records. */
        data?: Array<Record<string, unknown>>;
        /** The number of returned industries. */
        count?: number;
        /** The Akta credits consumed. */
        credits_consumed?: number;
        [key: string]: unknown;
      };
    };
    /** Search Apollo news articles for known organizations and event categories. */
    "aisa.search_apollo_company_news": {
      input: {
        /**
         * The Apollo organization IDs whose news should be searched.
         * @minItems 1
         */
        organizationIds: Array<string>;
        /** The Apollo news categories to include. */
        categories?: Array<string>;
        /**
         * Return articles published on or after this date.
         * @format date
         */
        publishedFrom?: string;
        /**
         * Return articles published on or before this date.
         * @format date
         */
        publishedTo?: string;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum articles per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: Record<string, unknown>;
    };
    /** Search Apollo's global organization database by domain, location, size, and name. */
    "aisa.search_apollo_organizations": {
      input: {
        /** The company domains to include. */
        domains?: Array<string>;
        /** The company headcount ranges to include. */
        employeeRanges?: Array<string>;
        /** The company locations to include. */
        locations?: Array<string>;
        /** The company locations to exclude. */
        excludedLocations?: Array<string>;
        /** Text to match against company names. */
        name?: string;
        /** The Apollo organization IDs to include. */
        organizationIds?: Array<string>;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: Record<string, unknown>;
    };
    /** Search Apollo's global people database by role, location, employer, and seniority. */
    "aisa.search_apollo_people": {
      input: {
        /** The current job titles to include. */
        titles?: Array<string>;
        /** Whether Apollo may include similar job titles. */
        includeSimilarTitles?: boolean;
        /** Free-text keywords used to filter people. */
        keywords?: string;
        /** The person locations to include. */
        personLocations?: Array<string>;
        /** The seniority levels to include. */
        seniorities?: Array<string>;
        /** The employer locations to include. */
        organizationLocations?: Array<string>;
        /** The employer domains to include. */
        organizationDomains?: Array<string>;
        /** The Apollo organization IDs to include. */
        organizationIds?: Array<string>;
        /** The employer headcount ranges to include. */
        employeeRanges?: Array<string>;
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum results per page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: Record<string, unknown>;
    };
    /** Find creators from a natural-language brief and optional audience filters. */
    "aisa.search_creators": {
      input: {
        /** The social platform to search. */
        platform: "instagram" | "tiktok" | "youtube";
        /** A natural-language description of the creators to find. */
        query: string;
        /**
         * The maximum number of billed creators to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Optional filters applied before WaveInflu matches creators. */
        filters?: {
          /** The ISO country codes to include. */
          regions?: Array<string>;
          /** The creator languages to include. */
          languages?: Array<string>;
          /**
           * The minimum follower or subscriber count.
           * @minimum 0
           */
          minFollowers?: number;
          /**
           * The maximum follower or subscriber count.
           * @minimum 0
           */
          maxFollowers?: number;
          /**
           * The minimum median or average play count.
           * @minimum 0
           */
          minPlayCount?: number;
          /**
           * The maximum median or average play count.
           * @minimum 0
           */
          maxPlayCount?: number;
          /** The play-count statistic used by the range filters. */
          playCountMetric?: "median" | "average";
          /** The inferred creator genders to include. */
          genders?: Array<string>;
          /** The inferred creator ethnicities to include. */
          ethnicities?: Array<string>;
          /** The creator account types to include. */
          creatorTypes?: Array<string>;
          /** The face-visibility classifications to include. */
          faceVisibilities?: Array<string>;
          /** Whether to exclude creators already saved in the WaveInflu workspace. */
          workspaceDeduplicationEnabled?: boolean;
        };
      };
      output: {
        /** The creator matches or contact result returned by WaveInflu. */
        data?: unknown;
        [key: string]: unknown;
      };
    };
    /** Search individual LLM mention records for domains and keywords. */
    "aisa.search_dataforseo_llm_mentions": {
      input: {
        /**
         * The one to ten domain or keyword entities to analyze.
         * @minItems 1
         * @maxItems 10
         */
        targets: Array<Record<string, unknown>>;
        /** The search location name. */
        locationName?: string;
        /** The DataForSEO search location code. */
        locationCode?: number;
        /** The search language name. */
        languageName?: string;
        /** The search language code. */
        languageCode?: string;
        /** The AI-answer platform whose mentions should be analyzed. */
        platform?: "chat_gpt" | "google";
        /** Which cited links should contribute to aggregation. */
        linksScope?: "sources" | "search_results";
        /**
         * The maximum number of mention records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * A caller-defined identifier returned with the result.
         * @maxLength 255
         */
        tag?: string;
      };
      output: Record<string, unknown>;
    };
    /** Search the web semantically through Exa. Request contents to include page text, or retrieve selected URLs with get_exa_contents. */
    "aisa.search_exa": {
      input: {
        /**
         * The natural-language search query.
         * @minLength 1
         */
        query: string;
        /** Retrieval mode; deep modes may take longer to complete. */
        type?: "auto" | "fast" | "instant" | "deep-lite" | "deep" | "deep-reasoning";
        /** Streaming is not supported by this JSON action; must be false. */
        stream?: false;
        /**
         * Maximum search results to return.
         * @minimum 1
         * @maximum 100
         */
        numResults?: number;
        /** The kind of pages to prioritize. */
        category?: "company" | "research paper" | "news" | "personal site" | "financial report" | "people";
        /** Only return results from these domains. */
        includeDomains?: Array<string>;
        /** Exclude results from these domains. */
        excludeDomains?: Array<string>;
        /**
         * Return pages published on or after this ISO 8601 timestamp.
         * @format date-time
         */
        startPublishedDate?: string;
        /**
         * Return pages published on or before this ISO 8601 timestamp.
         * @format date-time
         */
        endPublishedDate?: string;
        /** Content to include alongside each search result. */
        contents?: {
          /** Return the full page text; defaults to true for get_exa_contents. */
          text?: boolean;
          /** Return highlighted relevant snippets. */
          highlights?: boolean;
          /** Return an AI-generated summary of the page. */
          summary?: boolean;
        };
        /** JSON Schema for a structured output. */
        outputSchema?: Record<string, unknown>;
        /** Instructions for generating the structured output. */
        systemPrompt?: string;
      };
      output: {
        /** The Exa request identifier. */
        requestId?: string;
        /** Informational Exa cost; not the AIsa customer charge. */
        costDollars?: unknown;
        /** Ranked search results. */
        results?: Array<{
          /** The Exa result identifier, normally the page URL. */
          id?: string;
          /** The page URL. */
          url?: string;
          /** The page title. */
          title?: string;
          /** The page author. */
          author?: string;
          /** The publication date reported by the source. */
          publishedDate?: string;
          /** The retrieved page text. */
          text?: string;
          /** Relevant snippets from the page. */
          highlights?: Array<string>;
          /** The generated page summary. */
          summary?: string;
          [key: string]: unknown;
        }>;
        /** Structured output generated when outputSchema is supplied. */
        output?: unknown;
        [key: string]: unknown;
      };
    };
    /** Search the web through Firecrawl and return ranked URLs, titles, and snippets. */
    "aisa.search_firecrawl": {
      input: {
        /**
         * The web search query.
         * @minLength 1
         * @maxLength 2000
         */
        query: string;
        /**
         * The maximum number of results; upstream default 10.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Whether the search succeeded. */
        success?: boolean;
        /** Supplier credits consumed; customer billing uses AIsa cost headers. */
        creditsUsed?: number;
        /** The search result groups. */
        data?: {
          /** Ranked web search results. */
          web?: Array<{
            /** The result title. */
            title?: string;
            /** The result URL. */
            url?: string;
            /** The result snippet. */
            description?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search the Foreplay ad index by text, platform, format, niche, and activity. */
    "aisa.search_foreplay_ads": {
      input: {
        /** Text to find in ad names or descriptions. */
        query?: string;
        /** Whether to return only currently active or inactive ads. */
        live?: boolean;
        /** The ad display formats to include. */
        displayFormats?: Array<"carousel" | "dco" | "dpa" | "event" | "image" | "multi_images" | "multi_medias" | "multi_videos" | "page_like" | "text" | "video">;
        /** The publisher platforms to include. */
        publisherPlatforms?: Array<"facebook" | "instagram" | "audience_network" | "messenger" | "tiktok" | "youtube" | "linkedin" | "threads" | "whatsapp">;
        /** The advertising niches to include. */
        niches?: Array<string>;
        /** The intended market type for the ads. */
        marketTarget?: "b2b" | "b2c";
        /** The ad languages to include. */
        languages?: Array<string>;
        /**
         * The minimum video duration in seconds.
         * @minimum 0
         */
        minVideoDurationSeconds?: number;
        /**
         * The maximum video duration in seconds.
         * @minimum 0
         */
        maxVideoDurationSeconds?: number;
        /**
         * The minimum number of days the ad has run.
         * @minimum 1
         */
        minRunningDays?: number;
        /**
         * The maximum number of days the ad has run.
         * @minimum 1
         */
        maxRunningDays?: number;
        /**
         * Return ads first observed on or after this date.
         * @format date
         */
        startDate?: string;
        /**
         * Return ads first observed on or before this date.
         * @format date
         */
        endDate?: string;
        /** The cursor returned by the previous Foreplay response. */
        cursor?: string;
        /**
         * The maximum number of billed ads to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /** How to order the returned ads. */
        order?: "newest" | "oldest" | "longest_running" | "most_relevant";
      };
      output: {
        /** The records returned by Foreplay. */
        data?: Array<Record<string, unknown>>;
        /** Pagination and request metadata returned by Foreplay. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search public Twitter posts using X query syntax and cursor pagination. */
    "aisa.search_twitter_posts": {
      input: {
        /** The search expression using supported X query operators. */
        query: string;
        /** Whether to return recent or top results. */
        resultType: "Latest" | "Top";
        /** The cursor returned by the previous page. */
        cursor?: string;
      };
      output: Record<string, unknown>;
    };
    /** Start a background batch scrape of known URLs through AIsa Firecrawl. Poll the returned task ID for results. */
    "aisa.submit_firecrawl_batch_scrape": {
      input: {
        /**
         * Optional AIsa admission authorization in USD; not a guarantee of the final charge.
         * @minLength 1
         */
        maxPriceUsd?: string;
        /**
         * Only include matching HTML tags.
         * @maxItems 50
         */
        includeTags?: Array<string> | null;
        /**
         * Exclude matching HTML tags.
         * @maxItems 50
         */
        excludeTags?: Array<string> | null;
        /** Extract only the main page content. */
        onlyMainContent?: boolean | null;
        /**
         * Maximum cached content age in milliseconds.
         * @minimum 0
         * @maximum 31536000000
         */
        maxAge?: number | null;
        /**
         * Minimum cached content age in milliseconds.
         * @minimum 0
         * @maximum 31536000000
         */
        minAge?: number | null;
        /**
         * Per-page scrape timeout in milliseconds.
         * @minimum 1000
         * @maximum 300000
         */
        timeout?: number | null;
        /**
         * Maximum concurrent page requests.
         * @minimum 1
         * @maximum 20
         */
        maxConcurrency?: number | null;
        /**
         * Distinct page URLs; duplicates after trimming trailing slashes are not allowed.
         * @minItems 1
         * @maxItems 1000
         */
        urls: Array<string>;
      };
      output: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId: string;
      };
    };
    /** Start a background website crawl through AIsa Firecrawl. Poll the returned task ID for results. */
    "aisa.submit_firecrawl_crawl": {
      input: {
        /**
         * Optional AIsa admission authorization in USD; not a guarantee of the final charge.
         * @minLength 1
         */
        maxPriceUsd?: string;
        /**
         * HTTPS URL without credentials, fragment or PDF suffix.
         * @format uri
         */
        url: string;
        /**
         * Maximum pages to crawl.
         * @minimum 1
         * @maximum 1000
         */
        limit: number;
        /** Allow links to external websites. */
        allowExternalLinks?: boolean | null;
        /** Allow crawling subdomains. */
        allowSubdomains?: boolean | null;
        /** Crawl across the entire domain. */
        crawlEntireDomain?: boolean | null;
        /**
         * Delay between requests in seconds.
         * @minimum 0
         * @maximum 30
         */
        delay?: number | null;
        /**
         * Path patterns to exclude from crawling.
         * @maxItems 20
         */
        excludePaths?: Array<string> | null;
        /**
         * Path patterns to include in crawling.
         * @maxItems 20
         */
        includePaths?: Array<string> | null;
        /** Ignore query parameters when identifying pages. */
        ignoreQueryParameters?: boolean | null;
        /**
         * Maximum concurrent page requests.
         * @minimum 1
         * @maximum 20
         */
        maxConcurrency?: number | null;
        /**
         * Maximum link discovery depth.
         * @minimum 0
         * @maximum 10
         */
        maxDiscoveryDepth?: number | null;
        /** Options applied to each crawled page. */
        scrapeOptions?: {
          /**
           * Only include matching HTML tags.
           * @maxItems 50
           */
          includeTags?: Array<string> | null;
          /**
           * Exclude matching HTML tags.
           * @maxItems 50
           */
          excludeTags?: Array<string> | null;
          /** Extract only the main page content. */
          onlyMainContent?: boolean | null;
          /**
           * Maximum cached content age in milliseconds.
           * @minimum 0
           * @maximum 31536000000
           */
          maxAge?: number | null;
          /**
           * Minimum cached content age in milliseconds.
           * @minimum 0
           * @maximum 31536000000
           */
          minAge?: number | null;
          /**
           * Per-page scrape timeout in milliseconds.
           * @minimum 1000
           * @maximum 300000
           */
          timeout?: number | null;
        } | null;
        /** How to use the website sitemap. */
        sitemap?: "skip" | "include" | "only" | null;
      };
      output: {
        /**
         * Task ID returned by submission; use it with the same connection or Marketplace account.
         * @minLength 1
         */
        taskId: string;
      };
    };
  }
}
