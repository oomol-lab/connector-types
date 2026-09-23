import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve sales details for up to 10 Ozon brands through Menglar. */
    "menglar_ozon.get_brand_details": {
      input: {
        /**
         * Up to 10 brand names separated by English commas.
         * @minLength 1
         */
        brandNames: string;
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The commercial metric used for sorting. */
        sortField?: "SALES" | "GMV" | "PRICE";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records returned by Menglar. */
        data?: Array<{
          /** The brand name. */
          brandName?: string;
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The brand monthly sales volume. */
          monthSales?: number;
          /** The brand monthly GMV as a decimal string. */
          monthGmv?: string;
          /** The number of brand products with sales. */
          brandSalableProductCount?: number;
          /** The share of brand products with sales. */
          brandSalableProductRate?: string;
          [key: string]: unknown;
        }>;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve market and sales details for one level-three Ozon category through Menglar. */
    "menglar_ozon.get_category_detail": {
      input: {
        /** The Menglar Ozon category identifier. */
        categoryId: number;
        /** The category type identifier required to disambiguate some level-three categories. */
        typeId: number;
        /** The language used for Ozon category names. */
        language?: "CH" | "RU" | "EN";
        /** The Menglar Ozon reporting period. */
        period?: "SEVEN_DAY" | "TWENTY_EIGHT_DAY" | "MONTH" | "QUARTER" | "YEAR";
        /**
         * The reporting period to query.
         * @minLength 1
         */
        updatePeriod: string;
        /** The commercial metric used for sorting. */
        sortField?: "SALES" | "GMV" | "PRICE";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** One ranked Ozon category. */
        data?: {
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The total number of products in the category. */
          totalProductCount?: number;
          /** The number of products with sales. */
          salableProductCount?: number;
          /** The share of products with sales. */
          salesRate?: string;
          /** The category GMV. */
          gmv?: string;
          /** The category GMV growth rate. */
          gmvGrowthRate?: string;
          /** The average product sales volume. */
          averageSales?: number;
          /** The average product GMV. */
          averageGmv?: string;
          [key: string]: unknown;
        };
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve demand, conversion, exposure, order, and competition details for up to 10 Ozon keywords through Menglar. */
    "menglar_ozon.get_keyword_details": {
      input: {
        /**
         * Up to 10 Menglar keyword identifiers separated by English commas.
         * @minLength 1
         */
        keywordIds: string;
        /** The Menglar Ozon keyword reporting period. */
        period: "WEEK" | "MONTH" | "QUARTER" | "YEAR";
        /**
         * The reporting period to query.
         * @minLength 1
         */
        updatePeriod: string;
        /** The keyword metric used for sorting. */
        sortField: "SEARCH_INDEX" | "SUPPLY_DEMAND_RATIO" | "ORDERED_AMOUNT";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records returned by Menglar. */
        data?: Array<{
          /** The Menglar keyword identifier. */
          keywordId?: number;
          /** The Russian keyword. */
          keyword?: string;
          /** The Chinese keyword. */
          keywordCn?: string;
          /** The associated Ozon category identifier. */
          categoryId?: number;
          /** The associated Ozon category name. */
          categoryName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The keyword search index. */
          searchIndex?: number;
          /** The keyword supply-demand ratio. */
          supplyDemandRatio?: string;
          /** The number of ordered products. */
          orderedProductCount?: number;
          /** The ordered amount as a decimal string. */
          orderedAmount?: string;
          [key: string]: unknown;
        }>;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve sales and market details for up to 10 Ozon products through Menglar. */
    "menglar_ozon.get_product_details": {
      input: {
        /**
         * Up to 10 Ozon product identifiers separated by English commas.
         * @minLength 1
         */
        itemIds: string;
        /** The Menglar Ozon reporting period. */
        period?: "SEVEN_DAY" | "TWENTY_EIGHT_DAY" | "MONTH" | "QUARTER" | "YEAR";
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The commercial metric used for sorting. */
        sortField?: "SALES" | "GMV" | "PRICE";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records returned by Menglar. */
        data?: Array<{
          /** The Ozon product identifier. */
          itemId?: number;
          /** The product title. */
          itemTitle?: string;
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The product brand. */
          brand?: string;
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The product sales volume. */
          sales?: number;
          /** The product GMV as a decimal string. */
          gmv?: string;
          /** The average product price as a decimal string. */
          averagePrice?: string;
          /** The product image URL. */
          itemImage?: string;
          [key: string]: unknown;
        }>;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve sales and market details for up to 10 Ozon shops through Menglar. */
    "menglar_ozon.get_shop_details": {
      input: {
        /**
         * Up to 10 Ozon shop identifiers separated by English commas.
         * @minLength 1
         */
        shopIds: string;
        /** The shop reporting period. */
        period?: "TWENTY_EIGHT_DAY";
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The commercial metric used for sorting. */
        sortField?: "SALES" | "GMV" | "PRICE";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records returned by Menglar. */
        data?: Array<{
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The localized shop level label. */
          shopLevel?: string;
          /** The localized shop type label. */
          shopArea?: string;
          /** The shop rating as a decimal string. */
          shopRating?: string;
          /** The shop sales volume. */
          sales?: number;
          /** The shop GMV as a decimal string. */
          gmv?: string;
          /** The number of products in the shop. */
          productCount?: number;
          /** The number of products with sales. */
          salableProductCount?: number;
          /** The shop sell-through rate. */
          salesRate?: string;
          [key: string]: unknown;
        }>;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve historical sales trend snapshots for one or more Ozon categories through Menglar. */
    "menglar_ozon.list_category_trends": {
      input: {
        /**
         * Up to 10 category and category-type identifier pairs.
         * @maxItems 10
         */
        categories?: Array<{
          /** The Menglar Ozon category identifier. */
          categoryId: number;
          /** The category type identifier required to disambiguate some level-three categories. */
          typeId: number;
        }>;
        /** The Menglar Ozon category identifier. */
        categoryId?: number;
        /** The category type identifier required to disambiguate some level-three categories. */
        typeId?: number;
        /** The language used for Ozon category names. */
        language?: "CH" | "RU" | "EN";
        /** The Menglar Ozon reporting period. */
        period?: "SEVEN_DAY" | "TWENTY_EIGHT_DAY" | "MONTH" | "QUARTER" | "YEAR";
        /** The first period to return: YYYY-MM-DD, YYYY-MM, YYYYQn, or YYYY according to period. */
        startPeriod?: string;
        /** The last period to return: YYYY-MM-DD, YYYY-MM, YYYYQn, or YYYY according to period. */
        endPeriod?: string;
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records returned by Menglar. */
        data?: Array<{
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The reporting period represented by this snapshot. */
          updatePeriod?: string;
          /** The category sales volume as a decimal string. */
          sales?: string;
          /** The category sales growth rate. */
          salesGrowthRate?: string;
          /** The category GMV. */
          gmv?: string;
          /** The category GMV growth rate. */
          gmvGrowthRate?: string;
          [key: string]: unknown;
        }>;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Search products in the Ozon China zone with category, sales, GMV, price, creation-date, and sales-tier filters through Menglar. */
    "menglar_ozon.list_cn_zone_products": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /** The level-one Ozon category identifier. */
        level1CategoryId?: number;
        /** The level-two Ozon category identifier. */
        level2CategoryId?: number;
        /** The level-three Ozon category identifier. */
        level3CategoryId?: number;
        /** The category type identifier required to disambiguate some level-three categories. */
        typeId?: number;
        /** The Menglar Ozon reporting period. */
        period?: "SEVEN_DAY" | "TWENTY_EIGHT_DAY" | "MONTH" | "QUARTER" | "YEAR";
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The minimum sales volume. */
        minSales?: number;
        /** The maximum sales volume. */
        maxSales?: number;
        /** The minimum GMV in Russian rubles. */
        minGmv?: number;
        /** The maximum GMV in Russian rubles. */
        maxGmv?: number;
        /** The minimum average product price. */
        minPrice?: number;
        /** The maximum average product price. */
        maxPrice?: number;
        /**
         * The earliest product-card creation date.
         * @format date
         */
        minCreateDate?: string;
        /**
         * The latest product-card creation date.
         * @format date
         */
        maxCreateDate?: string;
        /**
         * Sales tier: 1 head products, 2 top 1%, 3 top 10%, or 4 top 50%.
         * @minimum 1
         * @maximum 4
         */
        salesLevel?: number;
        /** The commercial metric used for sorting. */
        sortField?: "SALES" | "GMV" | "PRICE";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Ozon product identifier. */
          itemId?: number;
          /** The product title. */
          itemTitle?: string;
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The product brand. */
          brand?: string;
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The product sales volume. */
          sales?: number;
          /** The product GMV as a decimal string. */
          gmv?: string;
          /** The average product price as a decimal string. */
          averagePrice?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List the hottest Ozon categories by sales, GMV, or price through Menglar. */
    "menglar_ozon.list_hot_categories": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /** The Menglar Ozon category identifier. */
        categoryId: number;
        /** The category type identifier required to disambiguate some level-three categories. */
        typeId?: number;
        /** The language used for Ozon category names. */
        language?: "CH" | "RU" | "EN";
        /** The Menglar Ozon reporting period. */
        period?: "SEVEN_DAY" | "TWENTY_EIGHT_DAY" | "MONTH" | "QUARTER" | "YEAR";
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The commercial metric used for sorting. */
        sortField?: "SALES" | "GMV" | "PRICE";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The total number of products in the category. */
          totalProductCount?: number;
          /** The number of products with sales. */
          salableProductCount?: number;
          /** The share of products with sales. */
          salesRate?: string;
          /** The category GMV. */
          gmv?: string;
          /** The category GMV growth rate. */
          gmvGrowthRate?: string;
          /** The average product sales volume. */
          averageSales?: number;
          /** The average product GMV. */
          averageGmv?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Search Ozon keyword rankings with category, demand, conversion, order, and competition filters through Menglar. */
    "menglar_ozon.list_hot_keywords": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /** The level-one Ozon category identifier. */
        level1CategoryId?: number;
        /** The level-two Ozon category identifier. */
        level2CategoryId?: number;
        /** The level-three Ozon category identifier. */
        level3CategoryId?: number;
        /** The category type identifier required to disambiguate some level-three categories. */
        typeId?: number;
        /** A Chinese, Russian, or English keyword. */
        keyword?: string;
        /** Whether the keyword match is fuzzy or exact. */
        searchType?: "FUZZY" | "EXACT";
        /** The minimum search index. */
        minSearchIndex?: number;
        /** The maximum search index. */
        maxSearchIndex?: number;
        /** The minimum search-volume growth rate. */
        minSearchVolumeGrowthRate?: number;
        /** The maximum search-volume growth rate. */
        maxSearchVolumeGrowthRate?: number;
        /** The minimum order conversion rate. */
        minOrderConversionRate?: number;
        /** The maximum order conversion rate. */
        maxOrderConversionRate?: number;
        /** The minimum ordered amount. */
        minOrderedAmount?: number;
        /** The maximum ordered amount. */
        maxOrderedAmount?: number;
        /** The minimum number of ordered products. */
        minOrderedProductCount?: number;
        /** The maximum number of ordered products. */
        maxOrderedProductCount?: number;
        /** The minimum add-to-cart count. */
        minCartCount?: number;
        /** The maximum add-to-cart count. */
        maxCartCount?: number;
        /** The minimum average cart price. */
        minCartAveragePrice?: number;
        /** The maximum average cart price. */
        maxCartAveragePrice?: number;
        /** The minimum supply-demand ratio. */
        minSupplyDemandRatio?: number;
        /** The maximum supply-demand ratio. */
        maxSupplyDemandRatio?: number;
        /** The Menglar Ozon keyword reporting period. */
        period: "WEEK" | "MONTH" | "QUARTER" | "YEAR";
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The keyword metric used for sorting. */
        sortField?: "SEARCH_INDEX" | "ORDERED_AMOUNT" | "ORDERED_PRODUCT_COUNT";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Menglar keyword identifier. */
          keywordId?: number;
          /** The Russian keyword. */
          keyword?: string;
          /** The Chinese keyword. */
          keywordCn?: string;
          /** The associated Ozon category identifier. */
          categoryId?: number;
          /** The associated Ozon category name. */
          categoryName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The keyword search index. */
          searchIndex?: number;
          /** The keyword supply-demand ratio. */
          supplyDemandRatio?: string;
          /** The number of ordered products. */
          orderedProductCount?: number;
          /** The ordered amount as a decimal string. */
          orderedAmount?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Search hot-selling Ozon products with category, sales, GMV, price, fulfillment, and product filters through Menglar. */
    "menglar_ozon.list_hot_products": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /** The level-one Ozon category identifier. */
        level1CategoryId?: number;
        /** The level-two Ozon category identifier. */
        level2CategoryId?: number;
        /** The level-three Ozon category identifier. */
        level3CategoryId?: number;
        /** The category type identifier required to disambiguate some level-three categories. */
        typeId?: number;
        /** The Menglar Ozon reporting period. */
        period?: "SEVEN_DAY" | "TWENTY_EIGHT_DAY" | "MONTH" | "QUARTER" | "YEAR";
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The minimum sales volume. */
        minSales?: number;
        /** The maximum sales volume. */
        maxSales?: number;
        /** The minimum GMV in Russian rubles. */
        minGmv?: number;
        /** The maximum GMV in Russian rubles. */
        maxGmv?: number;
        /** The minimum average product price. */
        minPrice?: number;
        /** The maximum average product price. */
        maxPrice?: number;
        /**
         * The earliest product-card creation date.
         * @format date
         */
        minCreateDate?: string;
        /**
         * The latest product-card creation date.
         * @format date
         */
        maxCreateDate?: string;
        /** Accepted Ozon fulfillment modes. */
        deliveryModes?: Array<"FBS" | "FBO" | "rFBS" | "OZON">;
        /**
         * Cross-border permission: 1 means prohibited and 2 means allowed.
         * @minimum 1
         * @maximum 2
         */
        crossBorderSalePermission?: number;
        /**
         * Product origin: 1 local, 2 cross-border, or 3 unknown.
         * @minimum 1
         * @maximum 3
         */
        productType?: number;
        /**
         * Sales tier: 1 head products, 2 top 1%, 3 top 10%, or 4 top 50%.
         * @minimum 1
         * @maximum 4
         */
        salesLevel?: number;
        /** The commercial metric used for sorting. */
        sortField?: "SALES" | "GMV" | "PRICE";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Ozon product identifier. */
          itemId?: number;
          /** The product title. */
          itemTitle?: string;
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The product brand. */
          brand?: string;
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The product sales volume. */
          sales?: number;
          /** The product GMV as a decimal string. */
          gmv?: string;
          /** The average product price as a decimal string. */
          averagePrice?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Search hot-selling Ozon shops with category, rating, sales, GMV, age, and shop-type filters through Menglar. */
    "menglar_ozon.list_hot_shops": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The Menglar Ozon category identifier. */
        categoryId?: number;
        /**
         * The category level: 1, 2, or 3.
         * @minimum 1
         * @maximum 3
         */
        categoryLevel?: number;
        /** The category type identifier required to disambiguate some level-three categories. */
        typeId?: number;
        /** A shop identifier, name, or Ozon shop URL. */
        shopKeyword?: string;
        /** The minimum number of products in the shop. */
        minProductCount?: number;
        /** The maximum number of products in the shop. */
        maxProductCount?: number;
        /** The minimum number of products with sales. */
        minSalableProductCount?: number;
        /** The maximum number of products with sales. */
        maxSalableProductCount?: number;
        /** The minimum shop rating. */
        minShopRating?: number;
        /** The maximum shop rating. */
        maxShopRating?: number;
        /** The minimum shop sell-through rate. */
        minSalesRate?: number;
        /** The maximum shop sell-through rate. */
        maxSalesRate?: number;
        /** The minimum monthly sales volume. */
        minSales?: number;
        /** The maximum monthly sales volume. */
        maxSales?: number;
        /** The minimum monthly GMV. */
        minGmv?: number;
        /** The maximum monthly GMV. */
        maxGmv?: number;
        /**
         * The shop level: -1 all shops, 0 standard seller, 1 premium seller, or 2 Ozon-operated.
         * @minimum -1
         * @maximum 2
         */
        shopLevel?: number;
        /**
         * The documented shop-age bucket from 1 to 7.
         * @minimum 1
         * @maximum 7
         */
        openTimeRange?: number;
        /**
         * The shop type: 1 cross-border, 2 local, or 3 unknown.
         * @minimum 1
         * @maximum 3
         */
        shopArea?: number;
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The localized shop level label. */
          shopLevel?: string;
          /** The localized shop type label. */
          shopArea?: string;
          /** The shop rating as a decimal string. */
          shopRating?: string;
          /** The shop sales volume. */
          sales?: number;
          /** The shop GMV as a decimal string. */
          gmv?: string;
          /** The number of products in the shop. */
          productCount?: number;
          /** The number of products with sales. */
          salableProductCount?: number;
          /** The shop sell-through rate. */
          salesRate?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List Ozon products associated with up to 10 Menglar keyword identifiers. */
    "menglar_ozon.list_keyword_products": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /** The fixed result page size of 15. */
        pageSize?: 15;
        /**
         * Up to 10 Menglar keyword identifiers separated by English commas.
         * @minLength 1
         */
        keywordIds: string;
        /** The keyword relationship used to select products. */
        productType?: "SEARCH_PRODUCT" | "THEME_TAG_PRODUCT";
        /** The minimum product price. */
        minPrice?: number;
        /** The maximum product price. */
        maxPrice?: number;
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Ozon product identifier. */
          itemId?: number;
          /** The product title. */
          itemTitle?: string;
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The product brand. */
          brand?: string;
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The product sales volume. */
          sales?: number;
          /** The product GMV as a decimal string. */
          gmv?: string;
          /** The average product price as a decimal string. */
          averagePrice?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve historical demand and conversion trend snapshots for one Ozon keyword through Menglar. */
    "menglar_ozon.list_keyword_trends": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /** The fixed result page size of 15. */
        pageSize?: 15;
        /** The Menglar keyword identifier. */
        keywordId: number;
        /** The Menglar Ozon keyword reporting period. */
        period?: "WEEK" | "MONTH" | "QUARTER" | "YEAR";
        /** The first reporting period to return, formatted for the selected period type. */
        startUpdatePeriod?: string;
        /** The last reporting period to return, formatted for the selected period type. */
        endUpdatePeriod?: string;
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Menglar keyword identifier. */
          keywordId?: number;
          /** The Russian keyword. */
          keyword?: string;
          /** The Chinese keyword. */
          keywordCn?: string;
          /** The associated Ozon category identifier. */
          categoryId?: number;
          /** The associated Ozon category name. */
          categoryName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The keyword search index. */
          searchIndex?: number;
          /** The keyword supply-demand ratio. */
          supplyDemandRatio?: string;
          /** The number of ordered products. */
          orderedProductCount?: number;
          /** The ordered amount as a decimal string. */
          orderedAmount?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List public level-one Ozon categories in a selected language through Menglar. */
    "menglar_ozon.list_level1_categories": {
      input: {
        /** A category-name keyword matched fuzzily. */
        categoryName?: string;
        /** The language used for Ozon category names. */
        language: "CH" | "RU" | "EN";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records returned by Menglar. */
        data?: Array<{
          /** The category identifier. */
          categoryId?: number;
          /** The category type identifier. */
          typeId?: number;
          /** The category name in the requested language. */
          categoryName?: string;
          /** The language used for Ozon category names. */
          language?: "CH" | "RU" | "EN";
          /** The category level. */
          categoryLevel?: number;
          /** The parent category identifier. */
          parentId?: number;
          [key: string]: unknown;
        }>;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List public level-two Ozon categories below a selected level-one category through Menglar. */
    "menglar_ozon.list_level2_categories": {
      input: {
        /** The parent level-one Ozon category identifier. */
        level1CategoryId: number;
        /** A category-name keyword matched fuzzily. */
        categoryName?: string;
        /** The language used for Ozon category names. */
        language: "CH" | "RU" | "EN";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records returned by Menglar. */
        data?: Array<{
          /** The category identifier. */
          categoryId?: number;
          /** The category type identifier. */
          typeId?: number;
          /** The category name in the requested language. */
          categoryName?: string;
          /** The language used for Ozon category names. */
          language?: "CH" | "RU" | "EN";
          /** The category level. */
          categoryLevel?: number;
          /** The parent category identifier. */
          parentId?: number;
          [key: string]: unknown;
        }>;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List public level-three Ozon categories and their category type identifiers through Menglar. */
    "menglar_ozon.list_level3_categories": {
      input: {
        /** The parent level-two Ozon category identifier. */
        level2CategoryId: number;
        /** A category-name keyword matched fuzzily. */
        categoryName?: string;
        /** The language used for Ozon category names. */
        language: "CH" | "RU" | "EN";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records returned by Menglar. */
        data?: Array<{
          /** The category identifier. */
          categoryId?: number;
          /** The category type identifier. */
          typeId?: number;
          /** The category name in the requested language. */
          categoryName?: string;
          /** The language used for Ozon category names. */
          language?: "CH" | "RU" | "EN";
          /** The category level. */
          categoryLevel?: number;
          /** The parent category identifier. */
          parentId?: number;
          [key: string]: unknown;
        }>;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve Ozon-wide historical market trend snapshots by day or calendar month through Menglar. */
    "menglar_ozon.list_market_trends": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /** The fixed result page size of 15. */
        pageSize?: 15;
        /** The market trend period: daily or calendar month. */
        period?: "DAY" | "MONTH";
        /** The first reporting period to return, formatted for the selected period type. */
        startUpdatePeriod?: string;
        /** The last reporting period to return, formatted for the selected period type. */
        endUpdatePeriod?: string;
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The all-market category identifier. */
          categoryId?: number;
          /** The all-market category label. */
          categoryName?: string;
          /** The reporting period represented by this snapshot. */
          updatePeriod?: string;
          /** The number of products with sales. */
          salableProductCount?: number;
          /** The share of products with sales. */
          salesRate?: string;
          /** The market sales volume. */
          sales?: number;
          /** The market sales growth rate. */
          salesGrowthRate?: string;
          /** The market GMV. */
          gmv?: string;
          /** The market GMV growth rate. */
          gmvGrowthRate?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Track price, review count, rating, competing offers, and variants for one Ozon product over up to 90 days through Menglar. */
    "menglar_ozon.list_product_info_tracks": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /** The fixed result page size of 15. */
        pageSize?: 15;
        /** The Ozon product identifier. */
        itemId: number;
        /**
         * The first tracking date; omit it to start 29 days before the latest period.
         * @format date
         */
        startUpdatePeriod?: string;
        /**
         * The last tracking date; omit it for the latest period.
         * @format date
         */
        endUpdatePeriod?: string;
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Ozon product identifier. */
          itemId?: number;
          /** The product title. */
          itemTitle?: string;
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The product brand. */
          brand?: string;
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The date represented by this snapshot. */
          updatePeriod?: string;
          /** The current product price as a decimal string. */
          price?: string;
          /** The product review count. */
          reviewCount?: number;
          /** The product rating as a decimal string. */
          rating?: string;
          /** The number of competing offers. */
          competitiveCount?: number;
          /** The number of product variants. */
          variantProductCount?: number;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List natural, theme-tag, and advertising traffic keywords for Ozon products through Menglar. */
    "menglar_ozon.list_product_traffic_keywords": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /**
         * Up to 10 Ozon product identifiers separated by English commas.
         * @minLength 1
         */
        itemIds: string;
        /** The traffic keyword source to include. */
        keywordType?: "ALL" | "THEME_TAG" | "NATURAL" | "AD_CPC" | "AD_ORDER" | "AD_SPECIAL";
        /** A Russian or Chinese keyword matched fuzzily. */
        keyword?: string;
        /** The traffic-keyword metric used for sorting. */
        sortField?: "SEARCH_INDEX" | "SEARCH_INDEX_GROWTH_RATE" | "CONVERSION_INDEX" | "CART_CONVERSION_RATE" | "EXPOSURE_INDEX" | "PRODUCT_COUNT" | "SUPPLY_DEMAND_RATIO" | "ORDERED_PRODUCT_COUNT" | "ORDER_CONVERSION_RATE" | "ORDERED_AMOUNT" | "AVERAGE_BROWSE_PRODUCT_COUNT" | "CART_AVERAGE_PRICE" | "COMPETITOR_COUNT" | "SEARCH_VOLUME_GROWTH_RATE" | "NO_ACTION_QUERY_COUNT" | "NO_ACTION_QUERY_SHARE" | "SIMILAR_RESULT_QUERY_COUNT" | "SIMILAR_RESULT_QUERY_RATIO" | "NO_RESULT_QUERY_COUNT" | "NO_RESULT_QUERY_RATIO";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Ozon product identifier. */
          itemId?: number;
          /** The Russian keyword. */
          keyword?: string;
          /** The Chinese keyword. */
          keywordCn?: string;
          /** The traffic keyword source. */
          keywordType?: string;
          /** The keyword search index. */
          searchIndex?: number;
          /** The keyword supply-demand ratio. */
          supplyDemandRatio?: string;
          /** The number of ordered products. */
          orderedProductCount?: number;
          /** The ordered amount as a decimal string. */
          orderedAmount?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve historical sales trend snapshots for one Ozon product through Menglar. */
    "menglar_ozon.list_product_trends": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /** The Ozon product identifier. */
        itemId: number;
        /** The Menglar Ozon reporting period. */
        period?: "SEVEN_DAY" | "TWENTY_EIGHT_DAY" | "MONTH" | "QUARTER" | "YEAR";
        /** The first reporting period to return, formatted for the selected period type. */
        startUpdatePeriod?: string;
        /** The last reporting period to return, formatted for the selected period type. */
        endUpdatePeriod?: string;
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Ozon product identifier. */
          itemId?: number;
          /** The product title. */
          itemTitle?: string;
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The product brand. */
          brand?: string;
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The product sales volume. */
          sales?: number;
          /** The product GMV as a decimal string. */
          gmv?: string;
          /** The average product price as a decimal string. */
          averagePrice?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** List hot-selling products for one Ozon shop with optional category, period, and commercial sorting through Menglar. */
    "menglar_ozon.list_shop_products": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /**
         * The name or identifier of one Ozon shop.
         * @minLength 1
         */
        shopKeyword: string;
        /** The Menglar Ozon category identifier. */
        categoryId?: number;
        /**
         * The category level: 1, 2, or 3.
         * @minimum 1
         * @maximum 3
         */
        categoryLevel?: number;
        /** The category type identifier required to disambiguate some level-three categories. */
        typeId?: number;
        /** The Menglar Ozon reporting period. */
        period?: "SEVEN_DAY" | "TWENTY_EIGHT_DAY" | "MONTH" | "QUARTER" | "YEAR";
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The commercial metric used for sorting. */
        sortField?: "SALES" | "GMV" | "PRICE";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Ozon product identifier. */
          itemId?: number;
          /** The product title. */
          itemTitle?: string;
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The product brand. */
          brand?: string;
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The product sales volume. */
          sales?: number;
          /** The product GMV as a decimal string. */
          gmv?: string;
          /** The average product price as a decimal string. */
          averagePrice?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve up to 90 days of historical trend snapshots for one Ozon shop through Menglar. */
    "menglar_ozon.list_shop_trends": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /**
         * The name or identifier of one Ozon shop.
         * @minLength 1
         */
        shopKeyword: string;
        /** The shop reporting period. */
        period?: "TWENTY_EIGHT_DAY";
        /** The first reporting period to return, formatted for the selected period type. */
        startUpdatePeriod?: string;
        /** The last reporting period to return, formatted for the selected period type. */
        endUpdatePeriod?: string;
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The Ozon shop identifier. */
          shopId?: number;
          /** The Ozon shop name. */
          shopName?: string;
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The localized shop level label. */
          shopLevel?: string;
          /** The localized shop type label. */
          shopArea?: string;
          /** The shop rating as a decimal string. */
          shopRating?: string;
          /** The shop sales volume. */
          sales?: number;
          /** The shop GMV as a decimal string. */
          gmv?: string;
          /** The number of products in the shop. */
          productCount?: number;
          /** The number of products with sales. */
          salableProductCount?: number;
          /** The shop sell-through rate. */
          salesRate?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
    /** Search top Ozon brands by category, brand name, sales, GMV, or price through Menglar. */
    "menglar_ozon.list_top_brands": {
      input: {
        /**
         * The one-based result page number.
         * @minimum 1
         * @maximum 10000
         */
        pageNo?: number;
        /**
         * The number of results per page, up to 15.
         * @minimum 1
         * @maximum 15
         */
        pageSize?: number;
        /** The level-one Ozon category identifier. */
        level1CategoryId?: number;
        /** The level-two Ozon category identifier. */
        level2CategoryId?: number;
        /** The level-three Ozon category identifier. */
        level3CategoryId?: number;
        /** The category type identifier required to disambiguate some level-three categories. */
        typeId?: number;
        /** A brand-name search term. */
        brandName?: string;
        /** Whether the brand-name match is fuzzy or exact. */
        brandSearchType?: "FUZZY" | "EXACT";
        /** The reporting period to query; omit it for the latest period. */
        updatePeriod?: string;
        /** The commercial metric used for sorting. */
        sortField?: "SALES" | "GMV" | "PRICE";
        /** The result sort direction. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Whether Menglar completed the query successfully. */
        success: boolean;
        /** The records on the current result page. */
        data?: Array<{
          /** The brand name. */
          brandName?: string;
          /** An Ozon category path returned by Menglar. */
          category?: {
            /** The category identifier. */
            categoryId?: number;
            /** The level-one category identifier. */
            level1CategoryId?: number;
            /** The level-two category identifier. */
            level2CategoryId?: number;
            /** The level-three category identifier. */
            level3CategoryId?: number;
            /** The category type identifier. */
            typeId?: number;
            /** The Chinese category path. */
            categoryNameCn?: string;
            /** The Russian category path. */
            categoryNameRu?: string;
            [key: string]: unknown;
          };
          /** The reporting period represented by this record. */
          updatePeriod?: string;
          /** The brand monthly sales volume. */
          monthSales?: number;
          /** The brand monthly GMV as a decimal string. */
          monthGmv?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching records. */
        total?: number;
        /** The current result page number. */
        pageNo?: number;
        /** The number of results requested per page. */
        pageSize?: number;
        /** The Menglar error code when the query failed. */
        errorCode?: string;
        /** The Menglar error message when the query failed. */
        errorMessage?: string;
        [key: string]: unknown;
      };
    };
  }
}
