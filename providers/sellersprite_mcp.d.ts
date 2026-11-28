import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up SP advertising campaigns, ad groups and activity for an ASIN. */
    "sellersprite_mcp.ads.insights.lookup": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** A parent or child ASIN; the server expands its variants. */
        asin: string;
        /** Aggregation interval, default MONTH. DAY is not supported. */
        interval?: "WEEK" | "MONTH";
        /**
         * Months to look back, default 3; used only without startDate/endDate.
         * @minimum 1
         * @maximum 12
         */
        months?: number;
        /** Advertising campaign ID filter. */
        campaignId?: string;
        /** Advertising group ID filter. */
        adId?: string;
        /** Advertisement type filter. */
        type?: string;
        /** Variant filter. */
        variation?: string;
        /** Start date (yyyy-MM-dd). With endDate, overrides months. Use the supplied dates when the response cannot echo the effective window. */
        startDate?: string;
        /** End date (yyyy-MM-dd). */
        endDate?: string;
        /** Group results by campaignId, default false. */
        combination?: boolean;
        /** Enable upstream ad-group sorting; the provider chooses the sort key. Default false. */
        desc?: boolean;
        /** Ad-group page window. Request additional pages only when the requested result count or explicit export requires them. */
        page?: {
          /**
           * Offset cursor, default 0.
           * @minimum 0
           * @maximum 3000
           */
          cursor?: number;
          /**
           * Page size, default 100.
           * @minimum 1
           * @maximum 100
           */
          size?: number;
        };
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read product bullet points and main images. */
    "sellersprite_mcp.asin.content.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /**
         * ASIN.
         * @pattern ^B[0-9A-Z]{9}$
         */
        asin: string;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read monthly search-volume trends for an ASIN’s leading traffic keywords. */
    "sellersprite_mcp.asin.coreKeyword.trend": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /**
         * ASIN.
         * @pattern ^B[0-9A-Z]{9}$
         */
        asin: string;
        /**
         * Number of top keywords, default 5, from 1 to 10.
         * @minimum 1
         * @maximum 10
         */
        topN?: number;
        /** Historical window. Supply only when a specific window is requested; otherwise use server defaults. */
        dateRange?: {
          /** Start date (yyyy-MM-dd). Supply only for an explicitly requested historical window; maximum five years and no earlier than 2022-01. */
          startDate?: string;
          /** End date (yyyy-MM-dd). Supply only for an explicitly requested historical window; do not supply future dates. */
          endDate?: string;
        };
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read product details for up to 20 ASINs. */
    "sellersprite_mcp.asin.detail": {
      input: {
        /**
         * ASINs to query, from 1 to 20 unique values.
         * @minItems 1
         * @maxItems 20
         */
        asins: Array<string>;
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /**
         * Select response fields without changing supplier cost. Omit or pass an empty list for the default fields.
         * @maxItems 20
         */
        includeFields?: Array<"asin" | "marketplace" | "title" | "brand" | "categoryId" | "categoryPath" | "price" | "currency" | "rating" | "reviewCount" | "totalReview" | "bsr" | "seller" | "fulfillment" | "parentAsin" | "dimensions" | "weight" | "availableDate" | "recordUpdatedAt" | "variationList">;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Find Amazon products by keyword, category, brand, sales and price. */
    "sellersprite_mcp.asin.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Product title keyword. */
        keyword?: string;
        /**
         * Filter to up to 40 ASINs.
         * @maxItems 40
         */
        asins?: Array<string>;
        /** Category node ID. */
        categoryId?: string;
        /** True searches only this category; otherwise includes subcategories. */
        categoryIdExact?: boolean;
        /**
         * Archived month (yyyyMM). Omit for the last 30 days. An explicit unavailable or future archive fails without falling back. The response dataMode/dataMonth identifies the effective period.
         * @pattern ^\d{6}$
         */
        dataMonth?: string;
        /**
         * Brands to include.
         * @maxItems 20
         */
        brandInclude?: Array<string>;
        /**
         * Brands to exclude.
         * @maxItems 20
         */
        brandExclude?: Array<string>;
        /**
         * Sellers to include.
         * @maxItems 20
         */
        sellerInclude?: Array<string>;
        /**
         * Sellers to exclude.
         * @maxItems 20
         */
        sellerExclude?: Array<string>;
        /**
         * Exclude matching product title keywords.
         * @maxItems 20
         */
        excludeKeywords?: Array<string>;
        /**
         * ASINs to exclude.
         * @maxItems 20
         */
        excludeAsins?: Array<string>;
        /** Keyword matching field, default TITLE. */
        searchType?: "ASIN" | "TITLE" | "BRAND" | "SELLER";
        /** Price range. */
        price?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Parent monthly sales range, not Amazon child sales. Filters the monthlySales output. */
        sales?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Monthly revenue range. Filters the monthlyRevenue output. */
        revenue?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Rating range. */
        rating?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Monthly synchronized review count range. Filters monthlyReviewCount, not childReviewCount. */
        monthlyReviewCount?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** BSR rank range. */
        bsr?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Competing seller count filter. */
        sellers?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Review growth count filter. */
        reviewGrowth?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Amazon-reported child sales in the last 30 days. */
        amazonSales?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Rated product share filter. */
        ratingShare?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** BSR change filter. */
        rankingChange?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Conversion rate filter. */
        conversionRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Click conversion rate filter. */
        crt?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Month-over-month revenue growth filter. */
        revenueGrowth?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Month-over-month sales growth filter. */
        salesGrowth?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Year-over-year sales growth filter. */
        salesGrowthYoy?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Three consecutive months of year-over-year sales growth. */
        salesGrowthYoy3?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Six consecutive months of year-over-year sales growth. */
        salesGrowthYoy6?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Product question count range. */
        questions?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Weight filter. */
        weight?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** FBA fee filter. */
        fbaFee?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Variant count range. */
        variations?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Estimated profit range. */
        profit?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Listing quality score range. */
        lqs?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Delivery fee filter. */
        deliveryPrice?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Listing date lower bound (yyyy-MM-dd). */
        launchDateFrom?: string;
        /** Listing date upper bound (yyyy-MM-dd). */
        launchDateTo?: string;
        /** First review date lower bound (yyyy-MM-dd). */
        firstReviewDateFrom?: string;
        /** First review date upper bound (yyyy-MM-dd). */
        firstReviewDateTo?: string;
        /** Product tag filter. */
        productTags?: Array<string>;
        /** Main image/video flag filter. */
        mainImage?: boolean;
        /** True selects each parent's best-selling variant; false excludes it. Omit for all rows. Ignored when asins is supplied so every requested ASIN can be returned. */
        bestSellingVariant?: boolean;
        /** Fulfillment method filter. */
        fulfillment?: Array<"FBA" | "FBM">;
        /** Seller country or region codes. */
        sellerNation?: Array<string>;
        /** Seller type filter. */
        sellerType?: Array<"AMAZON" | "THIRD_PARTY">;
        /** Page window. Request additional pages only when the requested result count or explicit export requires them. */
        page?: {
          /**
           * Offset cursor, default 0, maximum 2000. Reaching the upstream offset limit means truncation, not exhaustion of all results.
           * @minimum 0
           * @maximum 2000
           */
          cursor?: number;
          /**
           * Page size, default 100.
           * @minimum 1
           * @maximum 100
           */
          size?: number;
        };
        /** Sort field: total_amount for revenue, total_units for sales, impression or conversion_rate. Default total_amount descending. */
        orderField?: "total_amount" | "total_units" | "impression" | "conversion_rate";
        /** Sort descending, default true. */
        desc?: boolean;
        /**
         * Output fields only; asin is always returned. Default fields include title, brand, price, currency, BSR, rating, monthlyReviewCount, monthlySales, monthlyRevenue, fulfillment, sellerName, sellerNation, badges, parent, bestSellingVariant and availableDate. Request childReviewCount, amzUnit, variations, lqs, profit, fba, questions or coupon explicitly.
         * @maxItems 30
         */
        includeFields?: Array<"asin" | "title" | "brand" | "price" | "currency" | "bsr" | "rating" | "monthlyReviewCount" | "childReviewCount" | "monthlySales" | "monthlySalesScope" | "monthlyRevenue" | "fulfillment" | "sellerName" | "sellerNation" | "badges" | "amzUnit" | "variations" | "lqs" | "profit" | "fba" | "questions" | "coupon" | "parent" | "bestSellingVariant" | "availableDate" | "pkgDimensions" | "pkgDimensionType" | "pkgWeight" | "pkgVolumeWeights">;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read recent daily sales and BSR estimates for an ASIN. */
    "sellersprite_mcp.asin.prediction.sales": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /**
         * ASIN.
         * @pattern ^B[0-9A-Z]{9}$
         */
        asin: string;
        /**
         * Number of recent estimated days, default 27, from 1 to 65. Ends on the latest estimated day.
         * @minimum 1
         * @maximum 65
         */
        days?: number;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Find products linked through purchases, browsing and advertising. */
    "sellersprite_mcp.asin.related.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /**
         * One target ASIN.
         * @pattern ^B[0-9A-Z]{9}$
         */
        asin: string;
        /**
         * Relation codes. FBT means frequently bought together and can include unrelated categories; behavioral association does not imply semantic similarity. Omit or pass an empty list for all supported relations.
         * @maxItems 14
         */
        relations?: Array<"MIB" | "FBT" | "CSI" | "COB" | "MIE" | "BAB" | "VAV" | "AVP" | "BAV" | "ASF" | "CPF" | "BCA" | "FSA" | "SP">;
        /** Page window. Request additional pages only when the requested result count or explicit export requires them. */
        page?: {
          /**
           * Offset cursor, default 0.
           * @minimum 0
           * @maximum 3000
           */
          cursor?: number;
          /**
           * Page size, default 100. cursor + size must not exceed 3000.
           * @minimum 1
           * @maximum 100
           */
          size?: number;
        };
        /** Sort field: createdTime (default) or relationCount. */
        orderField?: "createdTime" | "relationCount";
        /** Sort descending, default true. */
        desc?: boolean;
        /**
         * Select response fields without changing supplier cost. Omit or pass an empty list for the default fields.
         * @maxItems 13
         */
        includeFields?: Array<"asin" | "title" | "brand" | "price" | "currency" | "rating" | "reviewCount" | "monthlySales" | "relations" | "pkgDimensions" | "pkgDimensionType" | "pkgWeight" | "pkgVolumeWeights">;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read up to 100 product reviews with rating, media and SKU filters. */
    "sellersprite_mcp.asin.review.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Parent or child ASIN. Reviews are normalized to the parent, not isolated to the requested child. */
        asin: string;
        /**
         * Exact star ratings to include; omit for all ratings.
         * @minItems 1
         * @maxItems 5
         */
        star?: Array<1 | 2 | 3 | 4 | 5>;
        /** True selects reviews with images or video; false selects reviews without either. Omit for both. */
        hasMedia?: boolean;
        /** Sort order, default DATE_DESC. */
        sort?: "DATE_DESC" | "DATE_ASC" | "STAR_DESC" | "STAR_ASC" | "HELPFUL_DESC" | "HELPFUL_ASC";
        /** Case-insensitive substring filter on review SKU values, for example Silver or Color: Silver. Omit for all SKUs. */
        sku?: string;
        /**
         * Number of reviews to return, default and maximum 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read up to 500 product reviews. Extended retrieval may take about two minutes. */
    "sellersprite_mcp.asin.review.list.extended": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Parent or child ASIN. Reviews are normalized to the parent, not isolated to the requested child. */
        asin: string;
        /**
         * Exact star ratings to include; omit for all ratings.
         * @minItems 1
         * @maxItems 5
         */
        star?: Array<1 | 2 | 3 | 4 | 5>;
        /** True selects reviews with images or video; false selects reviews without either. Omit for both. */
        hasMedia?: boolean;
        /** Sort order, default DATE_DESC. */
        sort?: "DATE_DESC" | "DATE_ASC" | "STAR_DESC" | "STAR_ASC" | "HELPFUL_DESC" | "HELPFUL_ASC";
        /** Case-insensitive substring filter on review SKU values, for example Silver or Color: Silver. Omit for all SKUs. */
        sku?: string;
        /**
         * Number of reviews to return, default and maximum 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Compare monthly parent and child ASIN sales, revenue and rank trends. */
    "sellersprite_mcp.asin.sales.trend": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /**
         * ASIN or parent ASIN; queried as supplied without parent/child conversion.
         * @pattern ^B[0-9A-Z]{9}$
         */
        asin: string;
        /**
         * Distinct monthly metrics. Parent sales include all sellers; child sales are Amazon search-page snapshots. SalesAmount metrics are monthly revenue. Price, BSR, rating and reviews are last-valid-day snapshots, not monthly averages. For average price, average Keepa daily prices over the month and disclose coverage.
         * @minItems 1
         * @maxItems 8
         */
        metrics: Array<"parentSales" | "childSales" | "parentSalesAmount" | "childSalesAmount" | "price" | "bsr" | "rating" | "reviews">;
        /** Inclusive month window. */
        monthRange?: {
          /** Start month (yyyy-MM). When both bounds are omitted, uses the latest available month and the preceding 12 calendar months. */
          startDate?: string;
          /** End month (yyyy-MM), capped at the latest available month. Maximum window is 60 months. */
          endDate?: string;
        };
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Estimate daily and monthly sales from a category and BSR rank. */
    "sellersprite_mcp.bsr.prediction.sales": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Top-level category node ID from category search. */
        categoryId: string;
        /**
         * Top-level category BSR rank, from 1 to 10000000.
         * @minimum 1
         * @maximum 10000000
         */
        bsr: number;
        /**
         * Select response fields at the same cost. Defaults to marketplace/categoryId/bsr/estDailySales/estMonSales. Request rankSales, curveSales or linerParams explicitly.
         * @maxItems 8
         */
        includeFields?: Array<"marketplace" | "categoryId" | "bsr" | "estDailySales" | "estMonSales" | "rankSales" | "curveSales" | "linerParams">;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
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
    /** Explore AI-extracted product attributes for a category. */
    "sellersprite_mcp.category.ai.feature.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Colon-separated category node path, for example 123:456:789. */
        categoryId: string;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read category demand, search and purchase trends from Amazon Product Opportunity Explorer. */
    "sellersprite_mcp.category.demand.report": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Full colon-separated category path. Resolve deeper paths with category.search; short leaf IDs can silently return empty data. */
        categoryId: string;
        /** Statistics window in days: 7/30/90/365, default 365. */
        days?: 7 | 30 | 90 | 365;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Explore category keyword demand and 24-month search trends. */
    "sellersprite_mcp.category.demand.trend": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Full colon-separated category path. Resolve deeper paths with category.search; short leaf IDs can silently return empty data. */
        categoryId: string;
        /**
         * Sample size: 100/200/300/400/500, default 100.
         * @minimum 100
         * @maximum 500
         */
        sampleCount?: number;
        /**
         * Keyword page number, default 1. Later pages have an empty trendList. page * size must not exceed 3000. Fetch more pages only for explicitly requested pagination, exports or larger result counts.
         * @minimum 1
         * @maximum 3000
         */
        page?: number;
        /**
         * Page size, default 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Market period code: N/I/D/S1..S12. Optional keyword filter. */
        marketPeriod?: string;
        /** Keywords to include as a comma-separated string, not an array. Uses fuzzy OR matching. */
        includeKeywords?: string;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read a category’s market report for the last 30 days or 24 months. */
    "sellersprite_mcp.category.report.detail": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Full colon-separated category path. Resolve deeper paths with category.search; short leaf IDs can silently return empty data. */
        categoryId: string;
        /** Report window: LAST_30_DAYS (default) or the complete LAST_24_MONTHS report. */
        dataRange?: "LAST_30_DAYS" | "LAST_24_MONTHS";
        /**
         * Sample size: 100/200/300/400/500, default 100. Controls monthly top-product sampling and deduplication.
         * @minimum 100
         * @maximum 500
         */
        sampleCount?: number;
        /** Leading product count: 3/5/10/20, default 10. Controls competition and brand/seller concentration. LAST_30_DAYS only. */
        topN?: 3 | 5 | 10 | 20;
        /**
         * New-product age threshold in months, default 3. LAST_30_DAYS only.
         * @minimum 1
         * @maximum 12
         */
        newReleaseNum?: number;
        /** Archived month (yyyyMM), only when explicitly requested. Omit for last 30 days. LAST_30_DAYS only. */
        currentMonth?: number;
        /**
         * Optional ASIN set to aggregate a report for those products. LAST_30_DAYS only.
         * @maxItems 100
         */
        asins?: Array<string>;
        /** Category name language: EN for original English, CN for Chinese translation (default). */
        language?: "EN" | "CN";
        /** Variant merging mode. LAST_30_DAYS only. */
        familyMerge?: boolean;
        /**
         * Select base-report fields for LAST_30_DAYS. Omit or pass an empty list for all supported fields. Unsupported for LAST_24_MONTHS.
         * @maxItems 54
         */
        includeFields?: Array<"categoryId" | "name" | "nodePath" | "productCount" | "totalRevenue" | "avgRevenue" | "competition" | "newProductFeasibility" | "avgPrice" | "avgRating" | "currency" | "sampleProducts" | "brands" | "sellers" | "avgBsr" | "avgSales" | "avgProfit" | "avgSellers" | "avgVolume" | "avgWeight" | "avgReviews" | "avgReviewsIncr" | "sellerNationRatios" | "shelfDateProducts" | "firstShelfDate" | "lastShelfDate" | "headProducts" | "headAvgBsr" | "headAvgSales" | "headAvgRevenue" | "headAvgPrice" | "headAvgReviews" | "headAvgReviewsIncr" | "headAvgRating" | "brandConcentration" | "sellerConcentration" | "peerAvgProductConcentration" | "peerAvgBrandConcentration" | "peerAvgSellerConcentration" | "peerMarkets" | "newCount" | "newAvgPrice" | "newAvgReviews" | "minNewReviews" | "maxNewReviews" | "newAvgRating" | "newAvgSales" | "newAvgBsr" | "newAvgRevenue" | "newSalesRatio" | "totalSales" | "availableMonths" | "latestMonth" | "collectFlag">;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Find Amazon categories and their node paths. */
    "sellersprite_mcp.category.search": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Category name or product keyword. Omit for no keyword filter. Name search is recommended for finding complete categoryId paths. */
        keyword?: string;
        /** Full category path whose children are requested. Short leaf IDs cannot be resolved; other category tools may silently return empty data for them. */
        categoryId?: string;
        /** Include subcategories, default true. */
        includeSubcategories?: boolean;
        /** Page window. Request additional pages only when the requested result count or explicit export requires them. */
        page?: {
          /**
           * Page size, default 100.
           * @minimum 1
           * @maximum 100
           */
          size?: number;
          /**
           * Offset cursor, default 0.
           * @minimum 0
           * @maximum 3000
           */
          cursor?: number;
        };
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Filter and compare categories by market size, growth and competition. */
    "sellersprite_mcp.category.stats.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Full colon-separated category path. Resolve deeper paths with category.search; short leaf IDs can silently return empty data. */
        categoryId: string;
        /** Data window: LAST_30_DAYS (default) or LAST_24_MONTHS. */
        dataRange?: "LAST_30_DAYS" | "LAST_24_MONTHS";
        /** Category name keyword. */
        departmentKeyword?: string;
        /** Category name language: EN for original English, CN for Chinese translation (default). */
        language?: "EN" | "CN";
        /**
         * Sample size: 100/200/300/400/500, default 100. Controls monthly top-product sampling and deduplication for either data window.
         * @minimum 100
         * @maximum 500
         */
        sampleCount?: number;
        /** Seller country filter. */
        sellerNation?: string;
        /** Upstream snake_case sort column, default total_sales. LAST_30_DAYS supports total_products/brands/sellers/total_sales/total_revenue/avg_sales/avg_revenue/avg_price/avg_reviews/avg_rating/avg_bsr/avg_volume/avg_weight/avg_profit/yoy_growth_rate/ranking/top_products/top3_avg_*\/top5_avg_*\/top10_avg_*\/l1|l3|l6|l12_new_avg_rating. LAST_24_MONTHS supports total_products/brands/sellers/total_sales/total_revenue/avg_sales/annual_growth_rate/yoy_growth_rate/avg_revenue/avg_price/weighted_avg_price/avg_bsr/avg_ratings/avg_rating/avg_volume/avg_weight/avg_profit/avg_sellers/ebc_ratio/amz_ratio/fba_ratio/fbm_ratio. */
        orderField?: "total_products" | "brands" | "sellers" | "total_sales" | "total_revenue" | "avg_sales" | "avg_revenue" | "avg_price" | "avg_reviews" | "avg_rating" | "avg_bsr" | "avg_volume" | "avg_weight" | "avg_profit" | "yoy_growth_rate" | "ranking" | "top_products" | "top3_avg_bsr" | "top3_avg_sales" | "top3_avg_revenue" | "top5_avg_bsr" | "top5_avg_sales" | "top5_avg_revenue" | "top10_avg_bsr" | "top10_avg_sales" | "top10_avg_revenue" | "l1_new_avg_rating" | "l3_new_avg_rating" | "l6_new_avg_rating" | "l12_new_avg_rating" | "annual_growth_rate" | "weighted_avg_price" | "avg_ratings" | "avg_sellers" | "ebc_ratio" | "amz_ratio" | "fba_ratio" | "fbm_ratio";
        /** Sort descending, default true. */
        desc?: boolean;
        /** Page window. Request additional pages only when the requested result count or explicit export requires them. */
        page?: {
          /**
           * Offset cursor, default 0.
           * @minimum 0
           * @maximum 3000
           */
          cursor?: number;
          /**
           * Page size, default 100.
           * @minimum 1
           * @maximum 100
           */
          size?: number;
        };
        /** Total product count range; supported in either data window. */
        totalProducts?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average sales range; LAST_30_DAYS only. */
        avgSales?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average revenue range; LAST_30_DAYS only. */
        avgRevenue?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average price range; supported in either data window. */
        avgPrice?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average star rating range; LAST_30_DAYS only. */
        avgRating?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average BSR range; LAST_30_DAYS only. */
        avgBsr?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average weight range; supported in either data window. */
        avgWeight?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average profit range; LAST_30_DAYS only. */
        avgProfit?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Brand count range; supported in either data window. */
        brands?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Seller count range; supported in either data window. */
        sellers?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average seller count range; supported in either data window. */
        avgSellers?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Share of sellers from sellerNation; supported in either data window. */
        sellerRatio?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Amazon-operated product share range; supported in either data window. */
        amzRatio?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** A+ page share range; supported in either data window. */
        ebcRatio?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** FBA share range; supported in either data window. */
        fbaProportion?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** FBM share range; supported in either data window. */
        fbmRatio?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** New-product share range; supported in either data window. */
        newProportion?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Leading brand sales concentration, top three or top five in some archives; supported in either window. */
        brandConcentration?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Leading product concentration, top three or top five in some archives; supported in either window. */
        productConcentration?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Leading seller concentration, top three or top five in some archives; supported in either window. */
        sellerConcentration?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Leading product average sales range; supported in either data window. */
        headListingAvgSales?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Leading product average revenue range; supported in either data window. */
        headListingAvgRevenue?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Leading product average BSR range; LAST_30_DAYS only. */
        headListingAvgBsr?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** New-product sales range: average sales for LAST_30_DAYS, total sales for LAST_24_MONTHS. */
        newAvgSales?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** New-product revenue range: average revenue for LAST_30_DAYS, total revenue for LAST_24_MONTHS. */
        newAvgRevenue?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** New-product price range: average price for LAST_30_DAYS, weighted average for LAST_24_MONTHS. */
        newAvgPrice?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** New-product average star rating range; supported in either data window. */
        newAvgRating?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** New-product average review count range; LAST_30_DAYS only. */
        newAvgReviews?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** New-product sales share range; supported in either data window. */
        newSalesRatio?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Return rate range; LAST_24_MONTHS only. */
        returnRatio?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Category total sales range; supported in either data window. */
        totalSales?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Category total revenue range; supported in either data window. */
        totalRevenue?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Year-over-year growth range as a fraction (0.15 is 15%); supported in either data window. */
        yoyGrowthRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Annual growth range; LAST_24_MONTHS only. */
        annualGrowthRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average volume range; supported in either data window. */
        avgVolume?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Average review count across all products; LAST_30_DAYS only. */
        avgReviews?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** New-product count range; LAST_30_DAYS only. */
        newCount?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Seller countries, for example CN and US. */
        sellerNations?: Array<string>;
        /** Category tag filter; LAST_24_MONTHS only. */
        tags?: Array<string>;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Rank leading products, brands or sellers within a category. */
    "sellersprite_mcp.category.top.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Full colon-separated category path. Top-level nodes use one segment. Resolve deeper paths with category.search; short leaf IDs can silently return empty data. */
        categoryId: string;
        /** Ranking dimension. */
        dimension: "product" | "brand" | "seller";
        /**
         * Archived month (yyyyMM), only when explicitly requested. Omitted or unavailable months use the latest data; the response dataMonth is authoritative.
         * @pattern ^\d{6}$
         */
        dataMonth?: string;
        /**
         * Number of leading results, default 10.
         * @minimum 1
         * @maximum 100
         */
        topN?: number;
        /** New-product age threshold in months; omit to avoid distinguishing new products. */
        newProductMonths?: number;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Compare category distributions by sales, price, ratings, listing age and sellers. */
    "sellersprite_mcp.category.trend": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Full colon-separated category path, for example 1055398:284507:289668:289719:3736921. Top-level nodes use one segment. Resolve deeper paths with category.search; short leaf IDs can silently return empty data. */
        categoryId: string;
        /**
         * Distinct distribution metrics. Use ratingsCount or ratingValue for rating distributions; rating is unsupported.
         * @minItems 1
         * @maxItems 9
         */
        metrics: Array<"industrySales" | "shelfTime" | "shelfTrend" | "ratingsCount" | "ratingValue" | "price" | "sellerType" | "sellerNation" | "apVideo">;
        /**
         * Archived month (yyyyMM), only when explicitly requested. Omit for latest available. Unavailable archives fail. industrySales only supports the latest window; use category.report.detail monthlyList for historical sales/revenue within 24 months.
         * @pattern ^\d{6}$
         */
        dataMonth?: string;
        /**
         * Number of leading products sampled for distributions, default 100.
         * @minimum 1
         */
        topN?: number;
        /**
         * Months of industry sales history, default 5.
         * @minimum 1
         */
        months?: number;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read historical prices, rankings, ratings and coupon data. */
    "sellersprite_mcp.keepa.trend": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /**
         * ASIN or parent ASIN.
         * @pattern ^B[0-9A-Z]{9}$
         */
        asin: string;
        /**
         * History metrics; defaults to price/bsr/rating/reviews/sellers. Request additional enum values explicitly. monthlySoldHistory is a child snapshot, not parent monthly sales. Daily closing price can be averaged across a full month with coverage disclosed.
         * @maxItems 16
         */
        metrics?: Array<"price" | "dealPrice" | "buybox" | "priceList" | "priceFBA" | "priceFBM" | "pricePrime" | "buyBoxSellerIdHistory" | "bsr" | "subSalesRank" | "reviews" | "rating" | "sellers" | "monthlySoldHistory" | "couponHistory" | "oneTimeCouponHistory">;
        /** Date window; default three months, maximum twelve months. */
        dateRange?: {
          /** Start date (yyyy-MM-dd), default three months before today. */
          startDate?: string;
          /** End date (yyyy-MM-dd), default today. Windows over twelve months fail. */
          endDate?: string;
        };
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Search ABA keyword rankings or look up rankings by ASIN. */
    "sellersprite_mcp.keyword.aba.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace?: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Forward-query keyword filter. */
        keyword?: string;
        /**
         * Reverse-query ASINs, up to 10.
         * @maxItems 10
         */
        asins?: Array<string>;
        /** Optional ranking filter: 1 popular, 2 unusual movement, 3 continuous growth, 4 rapid rise, 5 potential, 6 long tail. Omit for all matches ordered by search-frequency rank. */
        searchModel?: 1 | 2 | 3 | 4 | 5 | 6;
        /** Forward-query category filter. */
        departments?: Array<string>;
        /** Period: WEEK or MONTH (default). MONTH accepts archived yyyyMM dates. */
        dateType?: "WEEK" | "MONTH";
        /**
         * WEEK uses the week's Saturday (yyyyMMdd); MONTH uses yyyyMM. Omit for latest available. Do not infer future periods. Unarchived MONTH values fall back to the default month table and may return empty results.
         * @pattern ^(\d{6}|\d{8})$
         */
        date?: string;
        /** Search volume range. */
        searches?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Search rank range. */
        searchRank?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Rank growth fraction; positive for improvement, negative for decline. */
        rankGrowthRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Click concentration range. */
        monopolyClickRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Click count range. */
        clicks?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Impression count range. */
        impressions?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Conversion rate range. */
        conversionRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Word count range. */
        wordCount?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** SPR range. */
        spr?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Title density range. */
        titleDensity?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /**
         * Keywords to exclude.
         * @maxItems 20
         */
        excludeKeywords?: Array<string>;
        /** Bid match type filter. */
        keywordBidMatchType?: string;
        /** Use exact matching. */
        exactFlag?: boolean;
        /** Filter unusual market movement. */
        movementMarket?: boolean;
        /**
         * Forward anchor or included keywords, combined with OR. A nonempty list overrides keyword and cannot be combined with asins. Maximum 20 values.
         * @minItems 1
         * @maxItems 20
         */
        includeKeywords?: Array<string>;
        /** Search rank change since the previous period; positive for improvement and negative for decline. */
        rankGrowthValue?: number;
        /** Page window. Request additional pages only when the requested result count or explicit export requires them. */
        page?: {
          /**
           * Offset cursor, default 0.
           * @minimum 0
           * @maximum 3000
           */
          cursor?: number;
          /**
           * Page size, default 100.
           * @minimum 1
           * @maximum 100
           */
          size?: number;
        };
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read ABA rank, search volume and top-three click and conversion share trends. */
    "sellersprite_mcp.keyword.aba.trend": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Keyword. */
        keyword: string;
        /** Metrics to include; omit for all metrics. */
        metrics?: Array<"abaRank" | "abaSearchVolume" | "top3ClickShare" | "top3ConversionShare">;
        /** WEEK or MONTH (default). Weekly dates use yyyy-MM-dd; monthly dates use the first day of the month. */
        granularity?: "WEEK" | "MONTH";
        /** Historical date window, only when explicitly requested. Defaults to one year before the latest available data point. Response dateRange is authoritative. */
        dateRange?: {
          /** Start date (yyyy-MM-dd), only for an explicitly requested window. Defaults to one year before the latest available data point. */
          startDate?: string;
          /** End date (yyyy-MM-dd), only for an explicitly requested window. Omitted or later values are capped at the latest available data point. */
          endDate?: string;
        };
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Find traffic keywords for up to 10 ASINs and compare their traffic shares. */
    "sellersprite_mcp.keyword.asin.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /**
         * ASIN set, from 1 to 10; deduplicated by the server.
         * @minItems 1
         * @maxItems 10
         */
        asins: Array<string>;
        /**
         * LAST_30_DAYS (default) is rolling and forbids month. MONTH uses an archived calendar month; omit month for the latest archive.
         * @default "LAST_30_DAYS"
         */
        dataRange?: "LAST_30_DAYS" | "MONTH";
        /**
         * Archived month (yyyyMM), only with dataRange=MONTH. Omit for latest archive. Do not infer the month from today's date.
         * @pattern ^\d{6}$
         */
        month?: string;
        /**
         * Traffic types as a string array, for example ORGANIC and ADS, combined with OR. Omit for no filter. Affects items, not summary.typeStats.
         * @minItems 1
         * @maxItems 16
         */
        trafficWordType?: Array<"ORGANIC" | "ADS" | "AMAZON_CHOICE" | "EDITORIAL_RECOMMENDATION" | "FOUR_STAR" | "HIGHLY_RATED" | "SPONSOR_BRAND" | "SPONSOR_VIDEO" | "PRIMARY" | "PRECISE" | "PRECISE_LONG_TAIL" | "EFFECTIVE" | "CONVERSION_EXCELLENT" | "CONVERSION_STABLE" | "CONVERSION_LOST" | "INVALID">;
        /** Item sort field: searches for monthly estimated search volume or trafficShare for group traffic share (default descending). */
        orderField?: "searches" | "trafficShare";
        /** Sort descending, default true. */
        orderDesc?: boolean;
        /** Page window. Request additional pages only when the requested result count or explicit export requires them. */
        page?: {
          /**
           * Offset cursor, default 0; cursor + size must not exceed 3000.
           * @minimum 0
           * @maximum 3000
           */
          cursor?: number;
          /**
           * Page size, default 100.
           * @minimum 1
           * @maximum 100
           */
          size?: number;
        };
        /**
         * Select item output fields. Omit for defaults. Does not affect summary or page.
         * @minItems 1
         * @maxItems 26
         */
        includeFields?: Array<"keyword" | "searchVolume" | "searchesRank" | "trafficShare" | "trafficWordTypes" | "purchases" | "purchaseRate" | "clicks" | "impressions" | "products" | "supplyDemandRatio" | "bid" | "ppc" | "avgPrice" | "avgRating" | "avgReviews" | "titleDensity" | "spr" | "monopolyClickRate" | "adProducts" | "updatedTime" | "bestRank" | "bestAdRank" | "matchedAsins" | "clickShareRate" | "conversionShareRate">;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Compare search and purchase metrics for up to 20 keywords. */
    "sellersprite_mcp.keyword.batch.info": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /**
         * Keywords, from 1 to 20.
         * @minItems 1
         * @maxItems 20
         */
        keywords: Array<string>;
        /**
         * Archived month (yyyyMM), only when explicitly requested. Omit for server defaults. Unavailable archives are normalized to the latest available month; response month is authoritative.
         * @pattern ^\d{6}$
         */
        month?: string;
        /** Upstream KeywordMinerOrderColumns.orderField, default searches. relevancy maps to upstream code 21. */
        orderField?: "searches" | "purchases" | "purchase_rate" | "products" | "supply_demand_ratio" | "latest1daysAds" | "bid" | "titleDensityExact" | "cprExact" | "avg_price" | "monopoly_click_rate" | "avg_rating" | "avg_reviews" | "relevancy" | "adProducts7" | "rank" | "clicks" | "impressions" | "goods_value" | "cvsShareRate" | "searches_growth" | "yearly_growth_rate";
        /** Sort descending, default true. */
        desc?: boolean;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Analyze keyword advertising clicks, conversions, ACOS and CPA. */
    "sellersprite_mcp.keyword.conversion.analysis": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Keyword. */
        keyword: string;
        /** Analysis time period. */
        timeType: "WEEK" | "90D";
        /** Keyword matching mode, default PHRASE. */
        matchType?: "PHRASE" | "BROAD";
        /** Bid match type filter. */
        bidMatchType?: string;
        /** Custom average product price. */
        customAvgProductPrice?: number;
        /**
         * Niche market filter.
         * @maxItems 20
         */
        nicheMarkets?: Array<string>;
        /**
         * Included-word filter, not a batch query.
         * @maxItems 20
         */
        includeKeywords?: Array<string>;
        /**
         * Excluded-word filter.
         * @maxItems 20
         */
        excludeKeywords?: Array<string>;
        /** Search volume range. */
        searches?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Click count range. */
        clicks?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Purchase volume range. */
        purchases?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Search conversion rate range. */
        searchConvRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Click conversion rate range. */
        clickConvRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** PPC bid range. */
        ppc?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** CPA range. */
        cpa?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Product price range. */
        productPrice?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** ACOS range. */
        acos?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Click-through rate range. */
        clickingRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Conversion rate range. */
        conversionRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Phrase count range. */
        phraseCount?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Suggested budget range. */
        budget?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Sort by searches/clicks/purchases/searchConvRate/clickConvRate/clickingRate/avgProductPrice. Sorting by ppc/cpa/acos/budget also requires bidMatchType; otherwise the provider falls back to searches. */
        orderField?: "searches" | "clicks" | "purchases" | "searchConvRate" | "clickConvRate" | "clickingRate" | "avgProductPrice" | "ppc" | "cpa" | "acos" | "budget";
        /** Sort descending, default true. */
        desc?: boolean;
        /** Page window. Request additional pages only when the requested result count or explicit export requires them. */
        page?: {
          /**
           * Offset cursor, default 0.
           * @minimum 0
           * @maximum 3000
           */
          cursor?: number;
          /**
           * Page size, default 100.
           * @minimum 1
           * @maximum 100
           */
          size?: number;
        };
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read Google Trends interest for a keyword on Web or Shopping. */
    "sellersprite_mcp.keyword.google.trend": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Keyword. */
        keyword: string;
        /** Google search source, default WEB. */
        gprop?: "WEB" | "SHOPPING";
        /** Date window, maximum five years. */
        dateRange?: {
          /** Start date (yyyy-MM-dd), default five years before today. */
          startDate?: string;
          /** End date (yyyy-MM-dd), default today. */
          endDate?: string;
        };
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Expand a seed keyword and compare demand, competition and PPC bids. */
    "sellersprite_mcp.keyword.related.list": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Seed keyword. */
        seedKeyword: string;
        /** Search volume range. */
        searchVolume?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Purchase volume range. */
        purchaseVolume?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Purchase rate range. */
        purchaseRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Word count range. */
        wordCount?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Competition range measured by product count. */
        competition?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** PPC bid range. */
        ppcBid?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Relevance range. */
        relevancy?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** SPR range. */
        spr?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Title density filter. */
        titleDensity?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Supply-demand ratio filter. */
        supplyDemandRatio?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Advertising product count filter. */
        adProducts?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Search rank filter. */
        searchRank?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Matching product average price filter. */
        avgPrice?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Matching product average rating filter. */
        avgRating?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Matching product average review count filter. */
        avgReviewCount?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Click count filter. */
        clicks?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Impression count filter. */
        impressions?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Click concentration filter. */
        monopolyClickRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Search volume growth filter. */
        searchesGrowth?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /** Annual growth filter. */
        yearlyGrowthRate?: {
          /** Minimum value. */
          min?: number;
          /** Maximum value. */
          max?: number;
        };
        /**
         * Keywords to include.
         * @maxItems 20
         */
        includeKeywords?: Array<string>;
        /**
         * Keywords to exclude.
         * @maxItems 20
         */
        excludeKeywords?: Array<string>;
        /** Bid match type filter. */
        keywordBidMatchType?: string;
        /**
         * Category node paths, mapped to upstream departmentList.
         * @maxItems 20
         */
        departments?: Array<string>;
        /** Amazon's Choice filter. */
        amazonChoice?: boolean;
        /** Broad matching filter. */
        extensiveMatch?: boolean;
        /** Page window. Request additional pages only when the requested result count or explicit export requires them. */
        page?: {
          /**
           * Offset cursor, default 0.
           * @minimum 0
           * @maximum 3000
           */
          cursor?: number;
          /**
           * Page size, default 100.
           * @minimum 1
           * @maximum 100
           */
          size?: number;
        };
        /** Upstream KeywordMinerOrderColumns.orderField, default searches. relevancy maps to upstream code 21. */
        orderField?: "searches" | "purchases" | "purchase_rate" | "products" | "supply_demand_ratio" | "latest1daysAds" | "bid" | "titleDensityExact" | "cprExact" | "avg_price" | "monopoly_click_rate" | "avg_rating" | "avg_reviews" | "relevancy" | "adProducts7" | "rank" | "clicks" | "impressions" | "goods_value" | "cvsShareRate" | "searches_growth" | "yearly_growth_rate";
        /** Sort descending, default true. */
        desc?: boolean;
        /**
         * Output field selection. Omit or pass an empty list for defaults. Allowed fields are listed in items.enum.
         * @maxItems 9
         */
        includeFields?: Array<"keyword" | "searchVolume" | "purchaseVolume" | "purchaseRate" | "competition" | "ppcBid" | "wordCount" | "spr" | "relevancy">;
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
        result: unknown;
      };
    };
    /** Read keyword search volume, purchase volume and conversion trends. */
    "sellersprite_mcp.keyword.trend": {
      input: {
        /** Amazon marketplace code. */
        marketplace: "AE" | "AU" | "BR" | "CA" | "DE" | "ES" | "FR" | "IN" | "IT" | "JP" | "MX" | "UK" | "US";
        /** Keyword. */
        keyword: string;
        /**
         * Distinct trend metrics. Leading months before coverage have null searchVolume; zero inside coverage is a real zero. Uncovered keywords fail instead of returning an all-zero series.
         * @minItems 1
         * @maxItems 6
         */
        metrics: Array<"searchVolume" | "purchaseVolume" | "purchaseRate" | "yearlyGrowth" | "chainGrowth" | "threeMonthGrowth">;
        /** Date window rounded to calendar months. With both bounds omitted, uses the latest available month and preceding 36 calendar months. Response dateRange is authoritative. */
        dateRange?: {
          /** Start date (yyyy-MM-dd), only for an explicitly requested window. Defaults to 36 calendar months before the latest available month. */
          startDate?: string;
          /** End date (yyyy-MM-dd), only for an explicitly requested window. Omitted or later dates are capped at the latest available month. */
          endDate?: string;
        };
        /** Aggregation granularity, default MONTH. */
        granularity?: "MONTH";
      };
      output: {
        /** Structured upstream research data. Fields vary by tool; new fields are preserved. */
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
  }
}
