import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Research monthly Amazon Brand Analytics keywords using rank, search, click, conversion, and market-pattern filters. */
    "sellersprite_mcp.aba_research_monthly": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The SellerSprite reporting period documented for this tool.
         * @minLength 1
         */
        date?: string;
        /**
         * The departments value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        departments?: Array<string>;
        /**
         * Keywords that results must exclude.
         * @minLength 1
         */
        excludeKeywords?: string;
        /**
         * Keywords that results must include.
         * @minLength 1
         */
        includeKeywords?: string;
        /** The exact flag value documented by SellerSprite for this MCP tool. */
        exactFlag?: boolean;
        /** The min rank growth rate value documented by SellerSprite for this MCP tool. */
        minRankGrowthRate?: number;
        /** The max rank growth rate value documented by SellerSprite for this MCP tool. */
        maxRankGrowthRate?: number;
        /** The min search rank value documented by SellerSprite for this MCP tool. */
        minSearchRank?: number;
        /** The max search rank value documented by SellerSprite for this MCP tool. */
        maxSearchRank?: number;
        /** The min searches value documented by SellerSprite for this MCP tool. */
        minSearches?: number;
        /** The max searches value documented by SellerSprite for this MCP tool. */
        maxSearches?: number;
        /** The min monopoly click rate value documented by SellerSprite for this MCP tool. */
        minMonopolyClickRate?: number;
        /** The max monopoly click rate value documented by SellerSprite for this MCP tool. */
        maxMonopolyClickRate?: number;
        /** The min conversion rate value documented by SellerSprite for this MCP tool. */
        minConversionRate?: number;
        /** The max conversion rate value documented by SellerSprite for this MCP tool. */
        maxConversionRate?: number;
        /** The min word count value documented by SellerSprite for this MCP tool. */
        minWordCount?: number;
        /** The max word count value documented by SellerSprite for this MCP tool. */
        maxWordCount?: number;
        /** The min s p r value documented by SellerSprite for this MCP tool. */
        minSPR?: number;
        /** The max s p r value documented by SellerSprite for this MCP tool. */
        maxSPR?: number;
        /** The min title density value documented by SellerSprite for this MCP tool. */
        minTitleDensity?: number;
        /** The max title density value documented by SellerSprite for this MCP tool. */
        maxTitleDensity?: number;
        /** The min clicks value documented by SellerSprite for this MCP tool. */
        minClicks?: number;
        /** The max clicks value documented by SellerSprite for this MCP tool. */
        maxClicks?: number;
        /** The min impressions value documented by SellerSprite for this MCP tool. */
        minImpressions?: number;
        /** The max impressions value documented by SellerSprite for this MCP tool. */
        maxImpressions?: number;
        /** Search model from 1 through 6: popular, changing, sustained growth, rapid growth, potential, or long-tail market. */
        searchModel?: 1 | 2 | 3 | 4 | 5 | 6;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 15
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve weekly or monthly Amazon Brand Analytics trend data for one keyword. */
    "sellersprite_mcp.aba_research_trend": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The Amazon search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * The time granularity value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        timeGranularity?: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Research weekly Amazon Brand Analytics keywords using rank, search, click, conversion, and market-pattern filters. */
    "sellersprite_mcp.aba_research_weekly": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The SellerSprite reporting period documented for this tool.
         * @minLength 1
         */
        date?: string;
        /**
         * The departments value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        departments?: Array<string>;
        /**
         * Keywords that results must exclude.
         * @minLength 1
         */
        excludeKeywords?: string;
        /**
         * Keywords that results must include.
         * @minLength 1
         */
        includeKeywords?: string;
        /** The exact flag value documented by SellerSprite for this MCP tool. */
        exactFlag?: boolean;
        /** The rank growth value value documented by SellerSprite for this MCP tool. */
        rankGrowthValue?: number;
        /** The rank growth rate value documented by SellerSprite for this MCP tool. */
        rankGrowthRate?: number;
        /** The min rank growth rate value documented by SellerSprite for this MCP tool. */
        minRankGrowthRate?: number;
        /** The max rank growth rate value documented by SellerSprite for this MCP tool. */
        maxRankGrowthRate?: number;
        /** The min search rank value documented by SellerSprite for this MCP tool. */
        minSearchRank?: number;
        /** The max search rank value documented by SellerSprite for this MCP tool. */
        maxSearchRank?: number;
        /** The min searches value documented by SellerSprite for this MCP tool. */
        minSearches?: number;
        /** The max searches value documented by SellerSprite for this MCP tool. */
        maxSearches?: number;
        /** The min monopoly click rate value documented by SellerSprite for this MCP tool. */
        minMonopolyClickRate?: number;
        /** The max monopoly click rate value documented by SellerSprite for this MCP tool. */
        maxMonopolyClickRate?: number;
        /** The min conversion rate value documented by SellerSprite for this MCP tool. */
        minConversionRate?: number;
        /** The max conversion rate value documented by SellerSprite for this MCP tool. */
        maxConversionRate?: number;
        /** The min word count value documented by SellerSprite for this MCP tool. */
        minWordCount?: number;
        /** The max word count value documented by SellerSprite for this MCP tool. */
        maxWordCount?: number;
        /** The min s p r value documented by SellerSprite for this MCP tool. */
        minSPR?: number;
        /** The max s p r value documented by SellerSprite for this MCP tool. */
        maxSPR?: number;
        /** The min title density value documented by SellerSprite for this MCP tool. */
        minTitleDensity?: number;
        /** The max title density value documented by SellerSprite for this MCP tool. */
        maxTitleDensity?: number;
        /** The min clicks value documented by SellerSprite for this MCP tool. */
        minClicks?: number;
        /** The max clicks value documented by SellerSprite for this MCP tool. */
        maxClicks?: number;
        /** The min impressions value documented by SellerSprite for this MCP tool. */
        minImpressions?: number;
        /** The max impressions value documented by SellerSprite for this MCP tool. */
        maxImpressions?: number;
        /** Search model from 1 through 6: popular, changing, sustained growth, rapid growth, potential, or long-tail market. */
        searchModel?: 1 | 2 | 3 | 4 | 5 | 6;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 40
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve competing products identified for one Amazon ASIN. */
    "sellersprite_mcp.asin_competitor": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * The number of results requested per page.
         * @minimum 1
         */
        size?: number;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the historical coupon trend for one Amazon ASIN. */
    "sellersprite_mcp.asin_coupon_trend": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve SellerSprite product, sales, ranking, price, review, and seller data for one Amazon ASIN. */
    "sellersprite_mcp.asin_detail": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve ASIN details together with the product's historical coupon trend. */
    "sellersprite_mcp.asin_detail_with_coupon_trend": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve SellerSprite sales predictions for one Amazon ASIN. */
    "sellersprite_mcp.asin_prediction": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the historical sales trend for one Amazon ASIN. */
    "sellersprite_mcp.asin_sales_trend": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Estimate Amazon product sales from a Best Sellers Rank and top-level category. */
    "sellersprite_mcp.bsr_prediction": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The bsr value documented by SellerSprite for this MCP tool.
         * @minimum 1
         */
        bsr: number;
        /**
         * The top-level Amazon category node identifier.
         * @minLength 1
         */
        categoryId: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Call a current SellerSprite MCP tool with JSON arguments after inspecting its live schema and behavior annotations with list_tools. */
    "sellersprite_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Find competing Amazon products by marketplace, category, brand, seller, ASIN, keyword, and product filters. */
    "sellersprite_mcp.competitor_lookup": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /**
         * The brand value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        brand?: string;
        /**
         * The seller name value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        sellerName?: string;
        /**
         * Amazon ASINs to query, with at most 40 values.
         * @minItems 1
         * @maxItems 40
         */
        asins?: Array<string>;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath?: string;
        /** The node id path equal value documented by SellerSprite for this MCP tool. */
        nodeIdPathEqual?: boolean;
        /**
         * The Amazon search keyword.
         * @minLength 1
         */
        keyword?: string;
        /** Keyword match type: 1 for phrase, 2 for broad, or 3 for exact. */
        matchType?: 1 | 2 | 3;
        /** Variation handling: N includes variation ASINs and Y excludes them. */
        variation?: "N" | "Y";
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve Google Trends interest data for an Amazon marketplace keyword. */
    "sellersprite_mcp.google_trend": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The Amazon search keyword.
         * @minLength 1
         */
        keyword?: string;
        /**
         * The google prop value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        googleProp?: string;
        /** The monthly value documented by SellerSprite for this MCP tool. */
        monthly?: boolean;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve SellerSprite's Keepa-style historical product trend data for one Amazon ASIN. */
    "sellersprite_mcp.keepa_info": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /** The start timestamp value documented by SellerSprite for this MCP tool. */
        startTimestamp?: number;
        /** The end timestamp value documented by SellerSprite for this MCP tool. */
        endTimestamp?: number;
        /** The daily latest value documented by SellerSprite for this MCP tool. */
        dailyLatest?: boolean;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Analyze Amazon keyword search, click, purchase, conversion, advertising, price, and budget performance. */
    "sellersprite_mcp.keyword_conversion": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The Amazon search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * The time type value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        timeType?: string;
        /** The min searches value documented by SellerSprite for this MCP tool. */
        minSearches?: number;
        /** The max searches value documented by SellerSprite for this MCP tool. */
        maxSearches?: number;
        /** The min clicks value documented by SellerSprite for this MCP tool. */
        minClicks?: number;
        /** The max clicks value documented by SellerSprite for this MCP tool. */
        maxClicks?: number;
        /** The min purchases value documented by SellerSprite for this MCP tool. */
        minPurchases?: number;
        /** The max purchases value documented by SellerSprite for this MCP tool. */
        maxPurchases?: number;
        /** The min search conv rate value documented by SellerSprite for this MCP tool. */
        minSearchConvRate?: number;
        /** The max search conv rate value documented by SellerSprite for this MCP tool. */
        maxSearchConvRate?: number;
        /** The min click conv rate value documented by SellerSprite for this MCP tool. */
        minClickConvRate?: number;
        /** The max click conv rate value documented by SellerSprite for this MCP tool. */
        maxClickConvRate?: number;
        /** The min ppc value documented by SellerSprite for this MCP tool. */
        minPpc?: number;
        /** The max ppc value documented by SellerSprite for this MCP tool. */
        maxPpc?: number;
        /** The min cpa value documented by SellerSprite for this MCP tool. */
        minCpa?: number;
        /** The max cpa value documented by SellerSprite for this MCP tool. */
        maxCpa?: number;
        /** The min product price value documented by SellerSprite for this MCP tool. */
        minProductPrice?: number;
        /** The max product price value documented by SellerSprite for this MCP tool. */
        maxProductPrice?: number;
        /** The min acos value documented by SellerSprite for this MCP tool. */
        minAcos?: number;
        /** The max acos value documented by SellerSprite for this MCP tool. */
        maxAcos?: number;
        /** The min clicking rate value documented by SellerSprite for this MCP tool. */
        minClickingRate?: number;
        /** The max clicking rate value documented by SellerSprite for this MCP tool. */
        maxClickingRate?: number;
        /** The min conversion rate value documented by SellerSprite for this MCP tool. */
        minConversionRate?: number;
        /** The max conversion rate value documented by SellerSprite for this MCP tool. */
        maxConversionRate?: number;
        /** The min phrase count value documented by SellerSprite for this MCP tool. */
        minPhraseCount?: number;
        /** The max phrase count value documented by SellerSprite for this MCP tool. */
        maxPhraseCount?: number;
        /** The min budget value documented by SellerSprite for this MCP tool. */
        minBudget?: number;
        /** The max budget value documented by SellerSprite for this MCP tool. */
        maxBudget?: number;
        /** The match type value documented by SellerSprite for this MCP tool. */
        matchType?: number;
        /**
         * Keywords that results must include.
         * @minItems 1
         */
        includeKeywords?: Array<string>;
        /**
         * Keywords that results must exclude.
         * @minItems 1
         */
        excludeKeywords?: Array<string>;
        /** The custom avg product price value documented by SellerSprite for this MCP tool. */
        customAvgProductPrice?: number;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Discover related Amazon keywords using search volume, purchase, competition, relevancy, PPC, price, and review filters. */
    "sellersprite_mcp.keyword_miner": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /** The historical month in YYYYMM format; omit for the latest period. */
        historyDate?: string;
        /**
         * The Amazon search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Amazon search keywords used by the query.
         * @minItems 1
         */
        keywordList?: Array<string>;
        /** The min search value documented by SellerSprite for this MCP tool. */
        minSearch?: number;
        /** The max search value documented by SellerSprite for this MCP tool. */
        maxSearch?: number;
        /** The min purchases value documented by SellerSprite for this MCP tool. */
        minPurchases?: number;
        /** The max purchases value documented by SellerSprite for this MCP tool. */
        maxPurchases?: number;
        /** The min purchases rate value documented by SellerSprite for this MCP tool. */
        minPurchasesRate?: number;
        /** The max purchases rate value documented by SellerSprite for this MCP tool. */
        maxPurchasesRate?: number;
        /** The min s p r value documented by SellerSprite for this MCP tool. */
        minSPR?: number;
        /** The max s p r value documented by SellerSprite for this MCP tool. */
        maxSPR?: number;
        /** The min title density value documented by SellerSprite for this MCP tool. */
        minTitleDensity?: number;
        /** The max title density value documented by SellerSprite for this MCP tool. */
        maxTitleDensity?: number;
        /** The min relevancy value documented by SellerSprite for this MCP tool. */
        minRelevancy?: number;
        /** The max relevancy value documented by SellerSprite for this MCP tool. */
        maxRelevancy?: number;
        /** The min search rank value documented by SellerSprite for this MCP tool. */
        minSearchRank?: number;
        /** The max search rank value documented by SellerSprite for this MCP tool. */
        maxSearchRank?: number;
        /** The min products value documented by SellerSprite for this MCP tool. */
        minProducts?: number;
        /** The max products value documented by SellerSprite for this MCP tool. */
        maxProducts?: number;
        /** The min supply demand ratio value documented by SellerSprite for this MCP tool. */
        minSupplyDemandRatio?: number;
        /** The max supply demand ratio value documented by SellerSprite for this MCP tool. */
        maxSupplyDemandRatio?: number;
        /** The min ad products value documented by SellerSprite for this MCP tool. */
        minAdProducts?: number;
        /** The max ad products value documented by SellerSprite for this MCP tool. */
        maxAdProducts?: number;
        /** The min word count value documented by SellerSprite for this MCP tool. */
        minWordCount?: number;
        /** The max word count value documented by SellerSprite for this MCP tool. */
        maxWordCount?: number;
        /** The min monopoly click rate value documented by SellerSprite for this MCP tool. */
        minMonopolyClickRate?: number;
        /** The max monopoly click rate value documented by SellerSprite for this MCP tool. */
        maxMonopolyClickRate?: number;
        /** The min bid value documented by SellerSprite for this MCP tool. */
        minBid?: number;
        /** The max bid value documented by SellerSprite for this MCP tool. */
        maxBid?: number;
        /** The min price value documented by SellerSprite for this MCP tool. */
        minPrice?: number;
        /** The max price value documented by SellerSprite for this MCP tool. */
        maxPrice?: number;
        /** The min ratings value documented by SellerSprite for this MCP tool. */
        minRatings?: number;
        /** The max ratings value documented by SellerSprite for this MCP tool. */
        maxRatings?: number;
        /** The min rating value documented by SellerSprite for this MCP tool. */
        minRating?: number;
        /** The max rating value documented by SellerSprite for this MCP tool. */
        maxRating?: number;
        /** The amazon choice value documented by SellerSprite for this MCP tool. */
        amazonChoice?: boolean;
        /** Root-word filter: 0 includes all keywords and 1 includes only root-word matches. */
        filterRootWord?: 0 | 1;
        /** Keyword match type: 2 for broad or 3 for phrase. */
        matchType?: 2 | 3;
        /**
         * Keywords that results must include.
         * @minItems 1
         */
        includeKeywords?: Array<string>;
        /**
         * Keywords that results must exclude.
         * @minItems 1
         */
        excludeKeywords?: Array<string>;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Reverse-search the weekly or monthly Amazon keywords that generated orders for selected ASINs. */
    "sellersprite_mcp.keyword_order": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * Amazon ASINs to query, with at most 20 values.
         * @minItems 1
         * @maxItems 20
         */
        asins: Array<string>;
        /** Reverse-search period: W for weekly or M for monthly. */
        reverseType: "W" | "M";
        /**
         * The SellerSprite reporting period documented for this tool.
         * @minLength 1
         */
        date?: string;
        /**
         * Conversion categories: E for high quality, S for stable, L for lost, and I for ineffective impressions.
         * @minItems 1
         */
        conversionType?: Array<"E" | "S" | "L" | "I">;
        /**
         * Variation handling values: Y excludes variations and N includes them.
         * @minItems 1
         */
        variation?: Array<"Y" | "N">;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /** The fixed SellerSprite page size of 50 results. */
        size?: 50;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Research Amazon keywords using search, purchase, competition, price, review, growth, PPC, and demand filters. */
    "sellersprite_mcp.keyword_research": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /**
         * The departments value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        departments?: Array<string>;
        /**
         * The keywords value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        keywords?: string;
        /**
         * Keywords that results must exclude.
         * @minLength 1
         */
        excludeKeywords?: string;
        /** The min searches value documented by SellerSprite for this MCP tool. */
        minSearches?: number;
        /** The max searches value documented by SellerSprite for this MCP tool. */
        maxSearches?: number;
        /** The min searches cr value documented by SellerSprite for this MCP tool. */
        minSearchesCr?: number;
        /** The max searches cr value documented by SellerSprite for this MCP tool. */
        maxSearchesCr?: number;
        /** The min products value documented by SellerSprite for this MCP tool. */
        minProducts?: number;
        /** The max products value documented by SellerSprite for this MCP tool. */
        maxProducts?: number;
        /** The min purchases value documented by SellerSprite for this MCP tool. */
        minPurchases?: number;
        /** The max purchases value documented by SellerSprite for this MCP tool. */
        maxPurchases?: number;
        /** The min purchase rate value documented by SellerSprite for this MCP tool. */
        minPurchaseRate?: number;
        /** The max purchase rate value documented by SellerSprite for this MCP tool. */
        maxPurchaseRate?: number;
        /** The with yearly growth value documented by SellerSprite for this MCP tool. */
        withYearlyGrowth?: boolean;
        /** The min search month cv value documented by SellerSprite for this MCP tool. */
        minSearchMonthCv?: number;
        /** The max search month cv value documented by SellerSprite for this MCP tool. */
        maxSearchMonthCv?: number;
        /** The min search month cr value documented by SellerSprite for this MCP tool. */
        minSearchMonthCr?: number;
        /** The max search month cr value documented by SellerSprite for this MCP tool. */
        maxSearchMonthCr?: number;
        /** The min search nearly cv value documented by SellerSprite for this MCP tool. */
        minSearchNearlyCv?: number;
        /** The max search nearly cv value documented by SellerSprite for this MCP tool. */
        maxSearchNearlyCv?: number;
        /** The min search nearly cr value documented by SellerSprite for this MCP tool. */
        minSearchNearlyCr?: number;
        /** The max search nearly cr value documented by SellerSprite for this MCP tool. */
        maxSearchNearlyCr?: number;
        /**
         * The market period value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        marketPeriod?: string;
        /** The min avg price value documented by SellerSprite for this MCP tool. */
        minAvgPrice?: number;
        /** The max avg price value documented by SellerSprite for this MCP tool. */
        maxAvgPrice?: number;
        /** The min ratings value documented by SellerSprite for this MCP tool. */
        minRatings?: number;
        /** The max ratings value documented by SellerSprite for this MCP tool. */
        maxRatings?: number;
        /** The min rating value documented by SellerSprite for this MCP tool. */
        minRating?: number;
        /** The max rating value documented by SellerSprite for this MCP tool. */
        maxRating?: number;
        /** The min bid value documented by SellerSprite for this MCP tool. */
        minBid?: number;
        /** The max bid value documented by SellerSprite for this MCP tool. */
        maxBid?: number;
        /** The min ara click rate value documented by SellerSprite for this MCP tool. */
        minAraClickRate?: number;
        /** The max ara click rate value documented by SellerSprite for this MCP tool. */
        maxAraClickRate?: number;
        /** The min goods value value documented by SellerSprite for this MCP tool. */
        minGoodsValue?: number;
        /** The max goods value value documented by SellerSprite for this MCP tool. */
        maxGoodsValue?: number;
        /** The min supply demand ratio value documented by SellerSprite for this MCP tool. */
        minSupplyDemandRatio?: number;
        /** The max supply demand ratio value documented by SellerSprite for this MCP tool. */
        maxSupplyDemandRatio?: number;
        /** The min word count value documented by SellerSprite for this MCP tool. */
        minWordCount?: number;
        /** The max word count value documented by SellerSprite for this MCP tool. */
        maxWordCount?: number;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 15
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the historical SellerSprite trend for one Amazon keyword. */
    "sellersprite_mcp.keyword_research_trends": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The Amazon search keyword.
         * @minLength 1
         */
        keyword: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Discover the current SellerSprite Amazon research and market-data MCP tools with their live input schemas and behavior annotations. */
    "sellersprite_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected SellerSprite MCP account. */
        tools: Array<{
          /**
           * The exact SellerSprite MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by SellerSprite MCP. */
          description?: string;
          /** MCP behavior hints supplied by SellerSprite. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify SellerSprite data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to have no additional effect. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside SellerSprite. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by SellerSprite MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Retrieve brand concentration for one Amazon category market. */
    "sellersprite_mcp.market_brand_concentration": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the A+ content and video distribution for one Amazon category market. */
    "sellersprite_mcp.market_ebc_distribution": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the listing-age distribution for one Amazon category market. */
    "sellersprite_mcp.market_listing_date_distribution": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve Amazon market listing-trend distribution data using the supplied optional market filters. */
    "sellersprite_mcp.market_listing_trend_distribution": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace?: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath?: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the price distribution for one Amazon category market. */
    "sellersprite_mcp.market_price_distribution": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve product concentration for one Amazon category market. */
    "sellersprite_mcp.market_product_concentration": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Amazon ASINs used by the query.
         * @minItems 1
         */
        asins?: Array<string>;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the product-demand trend for one Amazon category market. */
    "sellersprite_mcp.market_product_demand_trend": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the star-rating distribution for one Amazon category market. */
    "sellersprite_mcp.market_rating_distribution": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the review-count distribution for one Amazon category market. */
    "sellersprite_mcp.market_ratings_count_distribution": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Research Amazon categories and market segments using demand, competition, concentration, fulfillment, seller, and new-product filters. */
    "sellersprite_mcp.market_research": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top num value documented by SellerSprite for this MCP tool. */
        topNum?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath?: string;
        /**
         * The department keyword value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        departmentKeyword?: string;
        /** The min avg units value documented by SellerSprite for this MCP tool. */
        minAvgUnits?: number;
        /** The max avg units value documented by SellerSprite for this MCP tool. */
        maxAvgUnits?: number;
        /** The min avg revenue value documented by SellerSprite for this MCP tool. */
        minAvgRevenue?: number;
        /** The max avg revenue value documented by SellerSprite for this MCP tool. */
        maxAvgRevenue?: number;
        /** The min avg ratings value documented by SellerSprite for this MCP tool. */
        minAvgRatings?: number;
        /** The max avg ratings value documented by SellerSprite for this MCP tool. */
        maxAvgRatings?: number;
        /** The min avg rating value documented by SellerSprite for this MCP tool. */
        minAvgRating?: number;
        /** The max avg rating value documented by SellerSprite for this MCP tool. */
        maxAvgRating?: number;
        /** The min avg bsr value documented by SellerSprite for this MCP tool. */
        minAvgBsr?: number;
        /** The max avg bsr value documented by SellerSprite for this MCP tool. */
        maxAvgBsr?: number;
        /** The min avg price value documented by SellerSprite for this MCP tool. */
        minAvgPrice?: number;
        /** The max avg price value documented by SellerSprite for this MCP tool. */
        maxAvgPrice?: number;
        /** The min weight value documented by SellerSprite for this MCP tool. */
        minWeight?: number;
        /** The max weight value documented by SellerSprite for this MCP tool. */
        maxWeight?: number;
        /** The min volume value documented by SellerSprite for this MCP tool. */
        minVolume?: number;
        /** The max volume value documented by SellerSprite for this MCP tool. */
        maxVolume?: number;
        /** The min avg profit value documented by SellerSprite for this MCP tool. */
        minAvgProfit?: number;
        /** The max avg profit value documented by SellerSprite for this MCP tool. */
        maxAvgProfit?: number;
        /** The min top avg units value documented by SellerSprite for this MCP tool. */
        minTopAvgUnits?: number;
        /** The max top avg units value documented by SellerSprite for this MCP tool. */
        maxTopAvgUnits?: number;
        /** The min top avg revenue value documented by SellerSprite for this MCP tool. */
        minTopAvgRevenue?: number;
        /** The max top avg revenue value documented by SellerSprite for this MCP tool. */
        maxTopAvgRevenue?: number;
        /** The min top avg bsr value documented by SellerSprite for this MCP tool. */
        minTopAvgBsr?: number;
        /** The max top avg bsr value documented by SellerSprite for this MCP tool. */
        maxTopAvgBsr?: number;
        /** The min goods count value documented by SellerSprite for this MCP tool. */
        minGoodsCount?: number;
        /** The max goods count value documented by SellerSprite for this MCP tool. */
        maxGoodsCount?: number;
        /** The min brands value documented by SellerSprite for this MCP tool. */
        minBrands?: number;
        /** The max brands value documented by SellerSprite for this MCP tool. */
        maxBrands?: number;
        /** The min sellers value documented by SellerSprite for this MCP tool. */
        minSellers?: number;
        /** The max sellers value documented by SellerSprite for this MCP tool. */
        maxSellers?: number;
        /** The min avg sellers value documented by SellerSprite for this MCP tool. */
        minAvgSellers?: number;
        /** The max avg sellers value documented by SellerSprite for this MCP tool. */
        maxAvgSellers?: number;
        /** The min goods crn value documented by SellerSprite for this MCP tool. */
        minGoodsCrn?: number;
        /** The max goods crn value documented by SellerSprite for this MCP tool. */
        maxGoodsCrn?: number;
        /** The min brand crn value documented by SellerSprite for this MCP tool. */
        minBrandCrn?: number;
        /** The max brand crn value documented by SellerSprite for this MCP tool. */
        maxBrandCrn?: number;
        /** The max seller crn value documented by SellerSprite for this MCP tool. */
        maxSellerCrn?: number;
        /** The min seller crn value documented by SellerSprite for this MCP tool. */
        minSellerCrn?: number;
        /** The min ebc proportion value documented by SellerSprite for this MCP tool. */
        minEbcProportion?: number;
        /** The max ebc proportion value documented by SellerSprite for this MCP tool. */
        maxEbcProportion?: number;
        /** The min fba proportion value documented by SellerSprite for this MCP tool. */
        minFbaProportion?: number;
        /** The max fba proportion value documented by SellerSprite for this MCP tool. */
        maxFbaProportion?: number;
        /** The min fbm proportion value documented by SellerSprite for this MCP tool. */
        minFbmProportion?: number;
        /** The max fbm proportion value documented by SellerSprite for this MCP tool. */
        maxFbmProportion?: number;
        /** The min amazon self proportion value documented by SellerSprite for this MCP tool. */
        minAmazonSelfProportion?: number;
        /** The max amazon self proportion value documented by SellerSprite for this MCP tool. */
        maxAmazonSelfProportion?: number;
        /**
         * The seller location value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        sellerLocation?: string;
        /** The min new proportion value documented by SellerSprite for this MCP tool. */
        minNewProportion?: number;
        /** The max new proportion value documented by SellerSprite for this MCP tool. */
        maxNewProportion?: number;
        /** The min new count value documented by SellerSprite for this MCP tool. */
        minNewCount?: number;
        /** The max new count value documented by SellerSprite for this MCP tool. */
        maxNewCount?: number;
        /** The min new avg ratings value documented by SellerSprite for this MCP tool. */
        minNewAvgRatings?: number;
        /** The max new avg ratings value documented by SellerSprite for this MCP tool. */
        maxNewAvgRatings?: number;
        /** The min new avg price value documented by SellerSprite for this MCP tool. */
        minNewAvgPrice?: number;
        /** The max new avg price value documented by SellerSprite for this MCP tool. */
        maxNewAvgPrice?: number;
        /** The min new avg rating value documented by SellerSprite for this MCP tool. */
        minNewAvgRating?: number;
        /** The max new avg rating value documented by SellerSprite for this MCP tool. */
        maxNewAvgRating?: number;
        /** The min new avg units value documented by SellerSprite for this MCP tool. */
        minNewAvgUnits?: number;
        /** The max new avg units value documented by SellerSprite for this MCP tool. */
        maxNewAvgUnits?: number;
        /** The min new avg revenue value documented by SellerSprite for this MCP tool. */
        minNewAvgRevenue?: number;
        /** The max new avg revenue value documented by SellerSprite for this MCP tool. */
        maxNewAvgRevenue?: number;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 200
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve summary statistics for one Amazon category market. */
    "sellersprite_mcp.market_research_statistics": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve seller concentration for one Amazon category market. */
    "sellersprite_mcp.market_seller_concentration": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the seller-country distribution for one Amazon category market. */
    "sellersprite_mcp.market_seller_country_distribution": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the fulfillment and seller-type distribution for one Amazon category market. */
    "sellersprite_mcp.market_seller_type_concentration": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /** The top n value documented by SellerSprite for this MCP tool. */
        topN?: number;
        /** The new product value documented by SellerSprite for this MCP tool. */
        newProduct?: number;
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Find Amazon category nodes by marketplace, category path, keyword, or historical month. */
    "sellersprite_mcp.product_node": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The colon-separated Amazon category node path.
         * @minLength 1
         */
        nodeIdPath?: string;
        /**
         * The Amazon search keyword.
         * @minLength 1
         */
        keyword?: string;
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Research Amazon products using sales, revenue, price, ranking, review, fulfillment, brand, seller, and category filters. */
    "sellersprite_mcp.product_research": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /**
         * The Amazon search keyword.
         * @minLength 1
         */
        keyword?: string;
        /**
         * The include sellers value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        includeSellers?: string;
        /**
         * The exclude sellers value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        excludeSellers?: string;
        /** Keyword match type: 1 for phrase, 2 for broad, or 3 for exact. */
        matchType?: 1 | 2 | 3;
        /**
         * Keywords that results must exclude.
         * @minLength 1
         */
        excludeKeywords?: string;
        /** The min price value documented by SellerSprite for this MCP tool. */
        minPrice?: number;
        /** The max price value documented by SellerSprite for this MCP tool. */
        maxPrice?: number;
        /** The min rating value documented by SellerSprite for this MCP tool. */
        minRating?: number;
        /** The max rating value documented by SellerSprite for this MCP tool. */
        maxRating?: number;
        /** The min ratings value documented by SellerSprite for this MCP tool. */
        minRatings?: number;
        /** The max ratings value documented by SellerSprite for this MCP tool. */
        maxRatings?: number;
        /** The min ratings cv value documented by SellerSprite for this MCP tool. */
        minRatingsCv?: number;
        /** The max ratings cv value documented by SellerSprite for this MCP tool. */
        maxRatingsCv?: number;
        /** The min sellers value documented by SellerSprite for this MCP tool. */
        minSellers?: number;
        /** The max sellers value documented by SellerSprite for this MCP tool. */
        maxSellers?: number;
        /** The min profit value documented by SellerSprite for this MCP tool. */
        minProfit?: number;
        /** The max profit value documented by SellerSprite for this MCP tool. */
        maxProfit?: number;
        /** The min bsr value documented by SellerSprite for this MCP tool. */
        minBsr?: number;
        /** The max bsr value documented by SellerSprite for this MCP tool. */
        maxBsr?: number;
        /** The min bsr cv value documented by SellerSprite for this MCP tool. */
        minBsrCv?: number;
        /** The max bsr cv value documented by SellerSprite for this MCP tool. */
        maxBsrCv?: number;
        /** The min bsr cr value documented by SellerSprite for this MCP tool. */
        minBsrCr?: number;
        /** The max bsr cr value documented by SellerSprite for this MCP tool. */
        maxBsrCr?: number;
        /** The min units value documented by SellerSprite for this MCP tool. */
        minUnits?: number;
        /** The max units value documented by SellerSprite for this MCP tool. */
        maxUnits?: number;
        /** The min amz unit value documented by SellerSprite for this MCP tool. */
        minAmzUnit?: number;
        /** The max amz unit value documented by SellerSprite for this MCP tool. */
        maxAmzUnit?: number;
        /** The min revenue value documented by SellerSprite for this MCP tool. */
        minRevenue?: number;
        /** The max revenue value documented by SellerSprite for this MCP tool. */
        maxRevenue?: number;
        /** The min revenue cr value documented by SellerSprite for this MCP tool. */
        minRevenueCr?: number;
        /** The max revenue cr value documented by SellerSprite for this MCP tool. */
        maxRevenueCr?: number;
        /** The min units cr value documented by SellerSprite for this MCP tool. */
        minUnitsCr?: number;
        /** The max units cr value documented by SellerSprite for this MCP tool. */
        maxUnitsCr?: number;
        /**
         * The weight unit value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        weightUnit?: string;
        /** The min weights value documented by SellerSprite for this MCP tool. */
        minWeights?: number;
        /** The max weights value documented by SellerSprite for this MCP tool. */
        maxWeights?: number;
        /** The min variations value documented by SellerSprite for this MCP tool. */
        minVariations?: number;
        /** The max variations value documented by SellerSprite for this MCP tool. */
        maxVariations?: number;
        /**
         * The filter sub value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        filterSub?: string;
        /** The min sub bsr rank value documented by SellerSprite for this MCP tool. */
        minSubBsrRank?: number;
        /** The max sub bsr rank value documented by SellerSprite for this MCP tool. */
        maxSubBsrRank?: number;
        /**
         * The include brands value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        includeBrands?: string;
        /**
         * The exclude brands value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        excludeBrands?: string;
        /**
         * Amazon category node paths used by the query.
         * @minItems 1
         */
        nodeIdPaths?: Array<string>;
        /** The node id path equal value documented by SellerSprite for this MCP tool. */
        nodeIdPathEqual?: boolean;
        /** The available month value documented by SellerSprite for this MCP tool. */
        availableMonth?: number;
        /**
         * The dimension type value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        dimensionType?: string;
        /** The min fba value documented by SellerSprite for this MCP tool. */
        minFba?: number;
        /** The max fba value documented by SellerSprite for this MCP tool. */
        maxFba?: number;
        /** The min lqs value documented by SellerSprite for this MCP tool. */
        minLqs?: number;
        /** The max lqs value documented by SellerSprite for this MCP tool. */
        maxLqs?: number;
        /**
         * The seller nation value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        sellerNation?: string;
        /**
         * The badge b s value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        badgeBS?: string;
        /**
         * The badge a c value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        badgeAC?: string;
        /**
         * The badge n r value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        badgeNR?: string;
        /**
         * The fulfillment value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        fulfillment?: string;
        /** Variation handling: N includes variation ASINs and Y excludes them. */
        variation?: "N" | "Y";
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve Amazon reviews for one ASIN with optional star-rating and review-type filters. */
    "sellersprite_mcp.review": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * Review star ratings to include, from 1 through 5.
         * @minItems 1
         */
        starList?: Array<1 | 2 | 3 | 4 | 5>;
        /**
         * Review types: 1 for image, 2 for video, 3 for verified purchase, or 4 for Vine.
         * @minItems 1
         */
        typeList?: Array<1 | 2 | 3 | 4>;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 10
         */
        size?: number;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the countries and trademark offices covered by SellerSprite's global trademark database. */
    "sellersprite_mcp.trademark_country_list": {
      input: {
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve one global trademark record by trademark office and SellerSprite brand ID. */
    "sellersprite_mcp.trademark_detail": {
      input: {
        /**
         * Trademark registry office or country codes.
         * @minLength 1
         */
        office: string;
        /**
         * The SellerSprite global trademark identifier.
         * @minLength 1
         */
        brandId: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Search SellerSprite's global trademark records by text, office, brand, status, applicant, class, and year filters. */
    "sellersprite_mcp.trademark_list": {
      input: {
        /**
         * Trademark registry office or country codes.
         * @minItems 1
         */
        office?: Array<string>;
        /**
         * Text used to search the global trademark database.
         * @minLength 1
         */
        text: string;
        /**
         * The brand name value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        brandName?: Array<string>;
        /**
         * The status value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        status?: Array<string>;
        /**
         * The applicant value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        applicant?: Array<string>;
        /**
         * The nice class value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        niceClass?: Array<number>;
        /**
         * The application year value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        applicationYear?: Array<string>;
        /**
         * The expiry year value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        expiryYear?: Array<string>;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve aggregate global trademark statistics for search text and selected trademark offices. */
    "sellersprite_mcp.trademark_stats": {
      input: {
        /**
         * Trademark registry office or country codes.
         * @minItems 1
         */
        office: Array<string>;
        /**
         * Text used to search the global trademark database.
         * @minLength 1
         */
        text: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Expand the traffic keywords shared by a set of Amazon ASINs using search, purchase, competition, and conversion filters. */
    "sellersprite_mcp.traffic_extend": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /** The historical month in YYYYMM format; omit for the latest period. */
        historyDate?: string;
        /**
         * Amazon ASINs to query, with at most 20 values.
         * @minItems 1
         * @maxItems 20
         */
        asinList: Array<string>;
        /** Variation query mode: 0 for all variations, 1 for the best-selling variation, or 2 for the current variation. */
        queryType?: 0 | 1 | 2;
        /** The min searches value documented by SellerSprite for this MCP tool. */
        minSearches?: number;
        /** The max searches value documented by SellerSprite for this MCP tool. */
        maxSearches?: number;
        /** The min search rank value documented by SellerSprite for this MCP tool. */
        minSearchRank?: number;
        /** The max search rank value documented by SellerSprite for this MCP tool. */
        maxSearchRank?: number;
        /** The min purchases value documented by SellerSprite for this MCP tool. */
        minPurchases?: number;
        /** The max purchases value documented by SellerSprite for this MCP tool. */
        maxPurchases?: number;
        /** The min purchase rate value documented by SellerSprite for this MCP tool. */
        minPurchaseRate?: number;
        /** The max purchase rate value documented by SellerSprite for this MCP tool. */
        maxPurchaseRate?: number;
        /** The min products value documented by SellerSprite for this MCP tool. */
        minProducts?: number;
        /** The max products value documented by SellerSprite for this MCP tool. */
        maxProducts?: number;
        /** The min supply demand ratio value documented by SellerSprite for this MCP tool. */
        minSupplyDemandRatio?: number;
        /** The max supply demand ratio value documented by SellerSprite for this MCP tool. */
        maxSupplyDemandRatio?: number;
        /** The min bid value documented by SellerSprite for this MCP tool. */
        minBid?: number;
        /** The max bid value documented by SellerSprite for this MCP tool. */
        maxBid?: number;
        /** The min ad products value documented by SellerSprite for this MCP tool. */
        minAdProducts?: number;
        /** The max ad products value documented by SellerSprite for this MCP tool. */
        maxAdProducts?: number;
        /** The min avg price value documented by SellerSprite for this MCP tool. */
        minAvgPrice?: number;
        /** The max avg price value documented by SellerSprite for this MCP tool. */
        maxAvgPrice?: number;
        /** The min word count value documented by SellerSprite for this MCP tool. */
        minWordCount?: number;
        /** The max word count value documented by SellerSprite for this MCP tool. */
        maxWordCount?: number;
        /**
         * Keywords that results must include.
         * @minItems 1
         */
        includeKeywords?: Array<string>;
        /**
         * Keywords that results must exclude.
         * @minItems 1
         */
        excludeKeywords?: Array<string>;
        /** The min s p r value documented by SellerSprite for this MCP tool. */
        minSPR?: number;
        /** The max s p r value documented by SellerSprite for this MCP tool. */
        maxSPR?: number;
        /** The min title density value documented by SellerSprite for this MCP tool. */
        minTitleDensity?: number;
        /** The max title density value documented by SellerSprite for this MCP tool. */
        maxTitleDensity?: number;
        /** The min monopoly click rate value documented by SellerSprite for this MCP tool. */
        minMonopolyClickRate?: number;
        /** The max monopoly click rate value documented by SellerSprite for this MCP tool. */
        maxMonopolyClickRate?: number;
        /** The min traffic percentage value documented by SellerSprite for this MCP tool. */
        minTrafficPercentage?: number;
        /** The max traffic percentage value documented by SellerSprite for this MCP tool. */
        maxTrafficPercentage?: number;
        /** The min conversion rate value documented by SellerSprite for this MCP tool. */
        minConversionRate?: number;
        /** The max conversion rate value documented by SellerSprite for this MCP tool. */
        maxConversionRate?: number;
        /** The min competitors value documented by SellerSprite for this MCP tool. */
        minCompetitors?: number;
        /** The max competitors value documented by SellerSprite for this MCP tool. */
        maxCompetitors?: number;
        /** The amazon choice value documented by SellerSprite for this MCP tool. */
        amazonChoice?: boolean;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve the search and conversion keywords that drive traffic to one Amazon ASIN. */
    "sellersprite_mcp.traffic_keyword": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * The Amazon search keyword.
         * @minLength 1
         */
        keyword?: string;
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /**
         * The badges value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        badges?: Array<string>;
        /**
         * The traffic keyword types value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        trafficKeywordTypes?: Array<string>;
        /**
         * The conversion keyword types value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        conversionKeywordTypes?: Array<string>;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve aggregate traffic-keyword statistics for one Amazon ASIN. */
    "sellersprite_mcp.traffic_keyword_stat": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The ten-character Amazon ASIN.
         * @minLength 10
         * @maxLength 10
         */
        asin: string;
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month?: string;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve Amazon listings related to selected ASINs by the requested traffic relationship types. */
    "sellersprite_mcp.traffic_listing": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * Amazon ASINs used by the query.
         * @minItems 1
         */
        asinList: Array<string>;
        /**
         * The relations value documented by SellerSprite for this MCP tool.
         * @minItems 1
         */
        relations: Array<string>;
        /** The variations value documented by SellerSprite for this MCP tool. */
        variations?: boolean;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Retrieve aggregate related-listing traffic statistics for selected Amazon ASINs. */
    "sellersprite_mcp.traffic_listing_stat": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * Amazon ASINs used by the query.
         * @minItems 1
         */
        asinList?: Array<string>;
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
    /** Trace Amazon keyword traffic from a query to the listings receiving that traffic. */
    "sellersprite_mcp.traffic_source": {
      input: {
        /** The Amazon marketplace code supported by SellerSprite. */
        marketplace: "US" | "JP" | "UK" | "DE" | "FR" | "IT" | "ES" | "CA" | "IN";
        /**
         * The q value documented by SellerSprite for this MCP tool.
         * @minLength 1
         */
        q: string;
        /**
         * The historical month in YYYYMM format; omit when the tool supports latest data.
         * @minLength 6
         * @maxLength 6
         */
        month: string;
        /**
         * The one-based result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results requested per page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** SellerSprite result sorting settings. */
        order?: {
          /**
           * The SellerSprite field used to sort the results.
           * @minLength 1
           */
          field?: string;
          /** Whether to sort the results in descending order. */
          desc?: boolean;
          [key: string]: unknown;
        };
        /**
         * Comma-separated response field names to reduce SellerSprite MCP result size and token usage.
         * @minLength 1
         */
        returnFields?: string;
      };
      output: {
        /** The SellerSprite MCP result, preserving the provider-defined structured response. */
        result: unknown;
      };
    };
  }
}
