import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current IXSPY CDN URL for the complete AliExpress category tree resource. */
    "ixspy.get_category_resource": {
      input: Record<string, never>;
      output: {
        /**
         * The CDN URL for downloading the complete category tree JSON resource.
         * @format uri
         */
        url: string;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get an IXSPY AliExpress keyword ranking with search popularity, click, conversion, competition, supply, and growth metrics. */
    "ixspy.get_keyword_rank": {
      input: {
        /**
         * The available IXSPY keyword ranking date.
         * @format date
         */
        rankDate: string;
        /** The ranking period. */
        dateType: "week" | "month";
        /**
         * The category ID represented by the keyword ranking.
         * @exclusiveMinimum 0
         */
        categoryId: number;
        /** The supported IXSPY keyword region. */
        regionCode: "ALL" | "US" | "RU";
        /**
         * A fuzzy keyword filter.
         * @minLength 1
         * @pattern \S
         */
        keyword?: string;
        /** The keyword metric used for sorting. */
        orderBy?: "searchPopularity" | "searchGrowth" | "clickRate" | "conversionRate";
        /** The result sort direction. */
        orderKind?: "asc" | "desc";
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         * @default 50
         */
        size?: number;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Compare immediate child categories in IXSPY using product, sales, revenue, review, market-share, and Choice-product metrics. */
    "ixspy.get_market_insights": {
      input: {
        /**
         * The parent category ID. Use 0 for top-level categories.
         * @minimum 0
         */
        parentCategoryId: number;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         * @default 50
         */
        size?: number;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get IXSPY details for up to 10 AliExpress product IDs. */
    "ixspy.get_product_details": {
      input: {
        /**
         * The product IDs to retrieve.
         * @minItems 1
         * @maxItems 10
         */
        productIds: Array<number>;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get an IXSPY AliExpress total, hot, growth, new-product, or holiday product ranking. */
    "ixspy.get_product_rank": {
      input: {
        /** The product ranking type. */
        rankType: "total" | "normalHot" | "normalGrowth" | "newHot" | "newGrowth" | "holidayNormal" | "holidayNew";
        /** The ranking period. */
        dateType: "day" | "week" | "month" | "holiday";
        /**
         * The category ID represented by the ranking.
         * @exclusiveMinimum 0
         */
        categoryId: number;
        /**
         * The available IXSPY ranking date.
         * @format date
         */
        rankDate: string;
        /**
         * Words that must occur in the product title.
         * @minLength 1
         * @pattern \S
         */
        searchWords?: string;
        /**
         * The AliExpress fulfillment type: 0 for POP, 1 for semi-managed, or 2 for fully managed.
         * @minimum 0
         * @maximum 2
         */
        choiceType?: number;
        /**
         * The minimum product price in USD.
         * @minimum 0
         */
        priceMin?: number;
        /**
         * The maximum product price in USD.
         * @minimum 0
         */
        priceMax?: number;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         * @default 50
         */
        size?: number;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get estimated AliExpress product order counts grouped by buyer country or region. */
    "ixspy.get_product_region_sales": {
      input: {
        /**
         * The AliExpress product ID.
         * @exclusiveMinimum 0
         */
        productId: number;
      };
      output: {
        /** The product identifier returned by IXSPY. */
        entityId: number | string;
        /** The product statistic rows returned by IXSPY. */
        statistics: Array<Record<string, unknown>>;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get estimated AliExpress order counts grouped by shipping method for a product. */
    "ixspy.get_product_shipping_stats": {
      input: {
        /**
         * The AliExpress product ID.
         * @exclusiveMinimum 0
         */
        productId: number;
      };
      output: {
        /** The product identifier returned by IXSPY. */
        entityId: number | string;
        /** The product statistic rows returned by IXSPY. */
        statistics: Array<Record<string, unknown>>;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get the estimated order distribution across SKU variants for an AliExpress product. */
    "ixspy.get_product_sku_sales": {
      input: {
        /**
         * The AliExpress product ID.
         * @exclusiveMinimum 0
         */
        productId: number;
      };
      output: {
        /** The product identifier returned by IXSPY. */
        entityId: number | string;
        /** The product statistic rows returned by IXSPY. */
        statistics: Array<Record<string, unknown>>;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get up to 90 days of IXSPY price, sales, and review trend data for a product. */
    "ixspy.get_product_trends": {
      input: {
        /**
         * The AliExpress product ID.
         * @exclusiveMinimum 0
         */
        productId: number;
        /**
         * The first trend date. IXSPY defaults to 30 days before today.
         * @format date
         */
        startDate?: string;
        /**
         * The last trend date, no more than 90 days after the start date.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The product identifier returned by IXSPY. */
        entityId: number | string;
        /**
         * The first date represented in the trend series.
         * @format date
         */
        startDate: string | null;
        /**
         * The last date represented in the trend series.
         * @format date
         */
        endDate: string | null;
        /** The daily product trend points returned by IXSPY. */
        points: Array<Record<string, unknown>>;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get an IXSPY weekly or monthly AliExpress product ranking for one buyer region. */
    "ixspy.get_region_product_rank": {
      input: {
        /** The ranking period. */
        dateType: "week" | "month";
        /**
         * The category ID represented by the ranking.
         * @exclusiveMinimum 0
         */
        categoryId: number;
        /**
         * The available IXSPY ranking date.
         * @format date
         */
        rankDate: string;
        /** The documented IXSPY buyer-region code. */
        regionCode: "RU" | "ES" | "FR" | "US" | "CL" | "UA" | "NL" | "PL" | "BR" | "IT" | "DE" | "KR" | "SA" | "IL" | "RO" | "KH" | "PE" | "JP" | "TR" | "UK" | "CA" | "BY" | "MX" | "AE" | "FI" | "LT" | "NO" | "SE" | "PT" | "BG" | "HU" | "ZA" | "AU";
        /**
         * Words that must occur in the product title.
         * @minLength 1
         * @pattern \S
         */
        searchWords?: string;
        /**
         * The AliExpress fulfillment type: 0 for POP, 1 for semi-managed, or 2 for fully managed.
         * @minimum 0
         * @maximum 2
         */
        choiceType?: number;
        /**
         * The minimum product price in USD.
         * @minimum 0
         */
        priceMin?: number;
        /**
         * The maximum product price in USD.
         * @minimum 0
         */
        priceMax?: number;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         * @default 50
         */
        size?: number;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get IXSPY product and sales distribution by category for an AliExpress store. */
    "ixspy.get_store_category_distribution": {
      input: {
        /**
         * The AliExpress merchant ID.
         * @exclusiveMinimum 0
         */
        storeMerchantId: number;
      };
      output: {
        /** The store identifier returned by IXSPY. */
        entityId: number | string;
        /** The store statistic rows returned by IXSPY. */
        statistics: Array<Record<string, unknown>>;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get IXSPY details for up to 10 AliExpress stores by merchant IDs or link IDs. */
    "ixspy.get_store_details": {
      input: Record<string, unknown>;
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get an IXSPY AliExpress total, hot, growth, new-store, or rising-store ranking. */
    "ixspy.get_store_rank": {
      input: {
        /** The store ranking type. */
        rankType: "total" | "normalHot" | "normalGrowth" | "newHot" | "newGrowth";
        /** The ranking period. */
        dateType: "day" | "week" | "month";
        /**
         * The available IXSPY ranking date.
         * @format date
         */
        rankDate: string;
        /**
         * The top-level category ID represented by the ranking.
         * @exclusiveMinimum 0
         */
        categoryId: number;
        /**
         * Words that must occur in the store name.
         * @minLength 1
         * @pattern \S
         */
        searchWords?: string;
        /**
         * The AliExpress fulfillment type: 0 for POP, 1 for semi-managed, or 2 for fully managed.
         * @minimum 0
         * @maximum 2
         */
        choiceType?: number;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         * @default 50
         */
        size?: number;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get estimated AliExpress store order counts grouped by buyer country or region. */
    "ixspy.get_store_region_sales": {
      input: {
        /**
         * The AliExpress merchant ID.
         * @exclusiveMinimum 0
         */
        storeMerchantId: number;
      };
      output: {
        /** The store identifier returned by IXSPY. */
        entityId: number | string;
        /** The store statistic rows returned by IXSPY. */
        statistics: Array<Record<string, unknown>>;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Get up to 90 days of IXSPY follower, sales, and review trend data for a store. */
    "ixspy.get_store_trends": {
      input: {
        /**
         * The AliExpress merchant ID.
         * @exclusiveMinimum 0
         */
        storeMerchantId: number;
        /**
         * The first trend date.
         * @format date
         */
        startDate: string;
        /**
         * The last trend date, no more than 90 days after the start date.
         * @format date
         */
        endDate: string;
      };
      output: {
        /** The store identifier returned by IXSPY. */
        entityId: number | string;
        /**
         * The first date represented in the trend series.
         * @format date
         */
        startDate: string | null;
        /**
         * The last date represented in the trend series.
         * @format date
         */
        endDate: string | null;
        /** The daily store trend points returned by IXSPY. */
        points: Array<Record<string, unknown>>;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** List the immediate AliExpress child categories under an IXSPY category, including root categories. */
    "ixspy.list_category_children": {
      input: {
        /**
         * The parent category ID. Use 0 for root categories.
         * @minimum 0
         */
        parentId: number;
      };
      output: {
        /** The parent category identifier returned by IXSPY. */
        parentId: number | string;
        /** The number of immediate child categories returned. */
        count: number;
        /** The immediate child categories. */
        categories: Array<Record<string, unknown>>;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** List the IXSPY dates currently available for normal, holiday, or keyword AliExpress rankings. */
    "ixspy.list_rank_dates": {
      input: {
        /** The ranking date family. */
        rankType: "normalRank" | "holidayRank" | "keywordRank";
      };
      output: {
        /** The ranking family returned by IXSPY. */
        rankType: string;
        /** The available date groups. */
        dateTypes: Array<Record<string, unknown>>;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Compare immediate child categories in IXSPY using products, stores, sales, reviews, supply-demand, regional, and top-100 opportunity metrics. */
    "ixspy.research_categories": {
      input: {
        /**
         * The parent category ID. Use 0 for top-level categories.
         * @minimum 0
         */
        parentCategoryId: number;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         * @default 50
         */
        size?: number;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Search AliExpress categories in IXSPY by Chinese or English name, path, or fuzzy keyword. */
    "ixspy.search_categories": {
      input: {
        /**
         * The Chinese or English category keyword or path to search.
         * @minLength 1
         * @pattern \S
         */
        keyword: string;
        /**
         * The exact category depth to return when supplied.
         * @minimum 1
         */
        level?: number;
        /** Whether to return only leaf categories. */
        isLeaf?: boolean;
        /**
         * The maximum number of matching categories to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Search IXSPY AliExpress products with keyword, category, price, sales, review, rating, fulfillment, discovery, and update filters. */
    "ixspy.search_products": {
      input: {
        /**
         * The category ID whose descendants should also be searched.
         * @exclusiveMinimum 0
         */
        categoryId?: number;
        /**
         * An English product-title keyword.
         * @minLength 1
         * @pattern \S
         */
        nameKeyword?: string;
        /**
         * The AliExpress fulfillment types to include.
         * @minItems 1
         * @maxItems 3
         */
        choiceTypes?: Array<number>;
        /** The documented IXSPY product origin code. */
        shipsFrom?: "US" | "FR" | "RU" | "ES" | "AU" | "PL" | "IT" | "CZ" | "GB" | "BE" | "DE" | "IL" | "TR" | "UA" | "BR" | "KR" | "HU" | "SA" | "ID" | "AE" | "CL" | "ZA" | "MX" | "China";
        /**
         * The earliest IXSPY discovery time as a Unix timestamp in seconds.
         * @minimum 0
         */
        discoveredAfter?: number;
        /**
         * The latest IXSPY discovery time as a Unix timestamp in seconds.
         * @minimum 0
         */
        discoveredBefore?: number;
        /**
         * The minimum product price in USD.
         * @minimum 0
         */
        priceMin?: number;
        /**
         * The maximum product price in USD.
         * @minimum 0
         */
        priceMax?: number;
        /**
         * The minimum one-year total sales count.
         * @minimum 0
         */
        totalSalesMin?: number;
        /**
         * The maximum one-year total sales count.
         * @minimum 0
         */
        totalSalesMax?: number;
        /**
         * The minimum seven-day sales count.
         * @minimum 0
         */
        sales7dMin?: number;
        /**
         * The maximum seven-day sales count.
         * @minimum 0
         */
        sales7dMax?: number;
        /**
         * The minimum one-year review count.
         * @minimum 0
         */
        totalReviewsMin?: number;
        /**
         * The maximum one-year review count.
         * @minimum 0
         */
        totalReviewsMax?: number;
        /**
         * The minimum sales-to-review ratio.
         * @minimum 0
         */
        salesReviewRatioMin?: number;
        /**
         * The maximum sales-to-review ratio.
         * @minimum 0
         */
        salesReviewRatioMax?: number;
        /**
         * The minimum product rating.
         * @minimum 0
         * @maximum 5
         */
        ratingMin?: number;
        /**
         * The maximum product rating.
         * @minimum 0
         * @maximum 5
         */
        ratingMax?: number;
        /** Whether products must contain a video. */
        hasVideo?: boolean;
        /**
         * The merchant ID used to restrict results to one store.
         * @exclusiveMinimum 0
         */
        storeMerchantId?: number;
        /**
         * The earliest data update time as a Unix timestamp in seconds.
         * @minimum 0
         */
        updatedAfter?: number;
        /**
         * The latest data update time as a Unix timestamp in seconds.
         * @minimum 0
         */
        updatedBefore?: number;
        /** The product field used for sorting. */
        orderBy?: "totalSales" | "totalReviews" | "sales7d" | "discoveredTime";
        /** The result sort direction. */
        orderKind?: "asc" | "desc";
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         * @default 50
         */
        size?: number;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
    /** Search IXSPY AliExpress stores with name, category, sales, followers, reviews, rating, price, product count, origin, age, tags, and fulfillment filters. */
    "ixspy.search_stores": {
      input: {
        /**
         * A store-name keyword for fuzzy matching.
         * @minLength 1
         * @pattern \S
         */
        nameKeyword?: string;
        /**
         * A top-level category ID.
         * @exclusiveMinimum 0
         */
        categoryId?: number;
        /**
         * The minimum total store sales count.
         * @minimum 0
         */
        totalSalesMin?: number;
        /**
         * The maximum total store sales count.
         * @minimum 0
         */
        totalSalesMax?: number;
        /**
         * The minimum store follower count.
         * @minimum 0
         */
        totalFollowersMin?: number;
        /**
         * The maximum store follower count.
         * @minimum 0
         */
        totalFollowersMax?: number;
        /**
         * The minimum store review count.
         * @minimum 0
         */
        totalReviewsMin?: number;
        /**
         * The maximum store review count.
         * @minimum 0
         */
        totalReviewsMax?: number;
        /**
         * The minimum store rating.
         * @minimum 0
         * @maximum 5
         */
        ratingMin?: number;
        /**
         * The maximum store rating.
         * @minimum 0
         * @maximum 5
         */
        ratingMax?: number;
        /**
         * The minimum average product price in USD.
         * @minimum 0
         */
        averagePriceMin?: number;
        /**
         * The maximum average product price in USD.
         * @minimum 0
         */
        averagePriceMax?: number;
        /**
         * The minimum store product count.
         * @minimum 0
         */
        totalProductsMin?: number;
        /**
         * The maximum store product count.
         * @minimum 0
         */
        totalProductsMax?: number;
        /**
         * The earliest store creation time as a Unix timestamp in seconds.
         * @minimum 0
         */
        createdAfter?: number;
        /**
         * The latest store creation time as a Unix timestamp in seconds.
         * @minimum 0
         */
        createdBefore?: number;
        /**
         * The store tier: 0 for none, 1 for Brand, 2 for Silver, 3 for Gold, or 4 for Plus.
         * @minimum 0
         * @maximum 4
         */
        topBrandTag?: number;
        /**
         * The origin country name used by IXSPY.
         * @minLength 1
         * @pattern \S
         */
        shipsFrom?: string;
        /** Whether the store must be in the AliExpress Style Zone. */
        styleZone?: boolean;
        /**
         * The AliExpress fulfillment types to include.
         * @minItems 1
         * @maxItems 3
         */
        choiceTypes?: Array<number>;
        /** The store field used for sorting. */
        orderBy?: "totalSales" | "totalReviews" | "totalFollowers" | "createdTime";
        /** The result sort direction. */
        orderKind?: "asc" | "desc";
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         * @default 50
         */
        size?: number;
      };
      output: {
        /** The records returned by IXSPY. */
        items: Array<Record<string, unknown>>;
        /** The current one-based page number when IXSPY supplies pagination. */
        page: number | null;
        /** The total number of pages when IXSPY supplies pagination. */
        pages: number | null;
        /** The total matching record count when IXSPY supplies it. */
        total: number | null;
        /** The IXSPY credit delta reported for the request. A negative value means credits were deducted. */
        credits: number | null;
      };
    };
  }
}
