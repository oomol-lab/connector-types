import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
        people: Array<{
          /** The person's first name, used with lastName. */
          firstName?: string;
          /** The person's last name, used with firstName. */
          lastName?: string;
          /** The person's full name. */
          name?: string;
          /**
           * The person's known email address.
           * @format email
           */
          email?: string;
          /** An MD5 or SHA-256 hash of the person's email address. */
          hashedEmail?: string;
          /** The name of the person's employer. */
          organizationName?: string;
          /** The employer's domain without www. */
          domain?: string;
          /** A known Apollo person ID. */
          personId?: string;
          /**
           * The person's LinkedIn profile URL.
           * @format uri
           */
          linkedinUrl?: string;
        }>;
      };
      output: Record<string, unknown>;
    };
    /** Enrich one person from known identifiers using Apollo's global database. */
    "aisa.enrich_apollo_person": {
      input: {
        /** The person's first name, used with lastName. */
        firstName?: string;
        /** The person's last name, used with firstName. */
        lastName?: string;
        /** The person's full name. */
        name?: string;
        /**
         * The person's known email address.
         * @format email
         */
        email?: string;
        /** An MD5 or SHA-256 hash of the person's email address. */
        hashedEmail?: string;
        /** The name of the person's employer. */
        organizationName?: string;
        /** The employer's domain without www. */
        domain?: string;
        /** A known Apollo person ID. */
        personId?: string;
        /**
         * The person's LinkedIn profile URL.
         * @format uri
         */
        linkedinUrl?: string;
      };
      output: Record<string, unknown>;
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
      input: {
        /** The public-market ticker symbol to query. */
        ticker?: string;
        /** The SEC Central Index Key used to identify the company. */
        cik?: string;
        /** The reporting period to return. */
        period: "annual" | "quarterly" | "ttm";
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Get standardized cash-flow statements for a company. */
    "aisa.get_cash_flow_statements": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker?: string;
        /** The SEC Central Index Key used to identify the company. */
        cik?: string;
        /** The reporting period to return. */
        period: "annual" | "quarterly" | "ttm";
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Get standardized SEC company facts by ticker or CIK. */
    "aisa.get_company_facts": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker?: string;
        /** The SEC Central Index Key used to identify the company. */
        cik?: string;
      };
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
    /** Get AI-search volume estimates for up to 1,000 keywords. */
    "aisa.get_dataforseo_ai_keyword_volume": {
      input: {
        /**
         * The keywords to measure.
         * @minItems 1
         * @maxItems 1000
         */
        keywords: Array<string>;
        /** The full location name; omit when using locationCode. */
        locationName?: string;
        /** The DataForSEO location code; omit when using locationName. */
        locationCode?: number;
        /** The full language name; omit when using languageCode. */
        languageName?: string;
        /** The language code; omit when using languageName. */
        languageCode?: string;
        /**
         * A caller-defined identifier returned with the result.
         * @maxLength 255
         */
        tag?: string;
      };
      output: Record<string, unknown>;
    };
    /** Aggregate LLM mention metrics for domains and keyword entities. */
    "aisa.get_dataforseo_llm_mention_metrics": {
      input: {
        /**
         * The one to ten domain or keyword entities to analyze.
         * @minItems 1
         * @maxItems 10
         */
        targets: Array<{
          /** The target domain without a scheme or www prefix. */
          domain?: string;
          /** The target keyword or brand phrase. */
          keyword?: string;
          /** Whether to include or exclude this entity. */
          searchFilter?: "include" | "exclude";
          /** The LLM response sections in which to search for the entity. */
          searchScope?: Array<string>;
          /** Whether a domain target includes its subdomains. */
          includeSubdomains?: boolean;
          /** How a keyword target is matched. */
          matchType?: "word_match" | "partial_match";
        }>;
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
        targets: Array<{
          /** The target domain without a scheme or www prefix. */
          domain?: string;
          /** The target keyword or brand phrase. */
          keyword?: string;
          /** Whether to include or exclude this entity. */
          searchFilter?: "include" | "exclude";
          /** The LLM response sections in which to search for the entity. */
          searchScope?: Array<string>;
          /** Whether a domain target includes its subdomains. */
          includeSubdomains?: boolean;
          /** How a keyword target is matched. */
          matchType?: "word_match" | "partial_match";
        }>;
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
      input: {
        /** The public-market ticker symbol to query. */
        ticker?: string;
        /** The SEC Central Index Key used to identify the company. */
        cik?: string;
        /** The reporting period to return. */
        period: "annual" | "quarterly" | "ttm";
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: Record<string, unknown>;
    };
    /** Get the latest available financial metrics for a company. */
    "aisa.get_financial_metrics_snapshot": {
      input: {
        /** The public-market ticker symbol to query. */
        ticker?: string;
        /** The SEC Central Index Key used to identify the company. */
        cik?: string;
      };
      output: Record<string, unknown>;
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
      input: {
        /** The public-market ticker symbol to query. */
        ticker?: string;
        /** The SEC Central Index Key used to identify the company. */
        cik?: string;
        /** The reporting period to return. */
        period: "annual" | "quarterly" | "ttm";
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
      };
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
      input: {
        /** The Twitter user ID; omit when using username. */
        userId?: string;
        /** The Twitter username; omit when using userId. */
        username?: string;
        /** Whether to include replies. */
        includeReplies?: boolean;
        /** The cursor returned by the previous page. */
        cursor?: string;
      };
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
        targets: Array<{
          /** The target domain without a scheme or www prefix. */
          domain?: string;
          /** The target keyword or brand phrase. */
          keyword?: string;
          /** Whether to include or exclude this entity. */
          searchFilter?: "include" | "exclude";
          /** The LLM response sections in which to search for the entity. */
          searchScope?: Array<string>;
          /** Whether a domain target includes its subdomains. */
          includeSubdomains?: boolean;
          /** How a keyword target is matched. */
          matchType?: "word_match" | "partial_match";
        }>;
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
  }
}
