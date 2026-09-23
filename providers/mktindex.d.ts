import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one provider item URL to Moojing price monitoring. */
    "mktindex.add_monitored_item": {
      input: {
        /**
         * The provider item page URL passed to Moojing.
         * @format uri
         */
        url: string;
        /**
         * The monitored lower price threshold.
         * @minimum 0
         */
        priceLimit: number;
        /**
         * The monitoring interval in hours.
         * @exclusiveMinimum 0
         */
        intervalHours: number;
        /**
         * The Moojing monitoring group identifier.
         * @minLength 1
         * @pattern \S
         */
        groupId?: string;
      };
      output: {
        /** The provider-defined item creation result. */
        data: Record<string, unknown>;
      };
    };
    /** Add multiple provider item URLs to Moojing price monitoring asynchronously. */
    "mktindex.add_monitored_items": {
      input: {
        /**
         * The items to add to Moojing monitoring.
         * @minItems 1
         */
        items: Array<{
          /**
           * The provider item page URL passed to Moojing.
           * @format uri
           */
          url: string;
          /**
           * The monitored lower price threshold.
           * @minimum 0
           */
          priceLimit: number;
          /**
           * The monitoring interval in hours.
           * @exclusiveMinimum 0
           */
          intervalHours: number;
          /**
           * The optional monitoring group name.
           * @minLength 1
           * @pattern \S
           */
          groupName?: string;
        }>;
        /** How to handle items beyond the account limit. delete_oldest can remove existing monitored items. */
        overLimitPolicy?: "reject" | "delete_oldest";
        /** Whether Moojing may reuse stored item data instead of fetching immediately. */
        useDatabaseCache?: boolean;
        /** Whether to replace monitoring settings for items that already exist. */
        overrideExisting?: boolean;
      };
      output: {
        /**
         * The Moojing asynchronous task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
        /** The raw object returned by Moojing price control. */
        data: Record<string, unknown>;
      };
    };
    /** Add provider shops to Moojing monitoring asynchronously. */
    "mktindex.add_monitored_shops": {
      input: {
        /**
         * The shop names to inspect or monitor.
         * @minItems 1
         */
        shopNames?: Array<string>;
        /**
         * The shop IDs to inspect or monitor.
         * @minItems 1
         */
        shopIds?: Array<string>;
        /**
         * The shop URLs to inspect or monitor.
         * @minItems 1
         */
        shopUrls?: Array<string>;
        /**
         * The monitoring interval in hours.
         * @exclusiveMinimum 0
         */
        intervalHours?: number;
        /** The monitored shop platform. */
        platform?: "taobao" | "douyin";
        /** Whether to fetch shop lists only or complete details. */
        fetchMode?: "list_only" | "details";
      };
      output: {
        /**
         * The Moojing asynchronous task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
        /** The raw object returned by Moojing price control. */
        data: Record<string, unknown>;
      };
    };
    /** Assign selected monitored SKUs to a Moojing monitoring group. */
    "mktindex.assign_monitored_items_to_group": {
      input: {
        /** A map from item IDs to the SKU IDs selected under each item. */
        skus: Record<string, Array<string>>;
        /**
         * The Moojing monitoring group identifier.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
      };
      output: {
        /** The provider-defined assignment result. */
        data: Record<string, unknown>;
      };
    };
    /** Compare sales and volume for two date ranges in a Moojing market. */
    "mktindex.compare_market_periods": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * Exactly two date ranges to compare.
         * @minItems 2
         * @maxItems 2
         */
        ranges: Array<{
          /**
           * The data month in YYYY-MM format.
           * @minLength 1
           */
          startMonth: string;
          /**
           * The data month in YYYY-MM format.
           * @minLength 1
           */
          endMonth: string;
        }>;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The comparison metrics keyed by the requested ranges. */
        data: Record<string, unknown>;
      };
    };
    /** Compare sales and volume for two date ranges in a regional Moojing market. */
    "mktindex.compare_region_market_periods": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The province name used to limit the regional market.
         * @minLength 1
         * @pattern \S
         */
        province: string;
        /**
         * The city name, or all to include every city in the province.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        /**
         * Exactly two date ranges to compare.
         * @minItems 2
         * @maxItems 2
         */
        ranges: Array<{
          /**
           * The data month in YYYY-MM format.
           * @minLength 1
           */
          startMonth: string;
          /**
           * The data month in YYYY-MM format.
           * @minLength 1
           */
          endMonth: string;
        }>;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The regional comparison metrics keyed by the requested ranges. */
        data: Record<string, unknown>;
      };
    };
    /** Create a Moojing price-monitoring group. */
    "mktindex.create_monitor_group": {
      input: {
        /**
         * The new monitoring group name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
      };
      output: {
        /** The provider-defined created group data. */
        data: Record<string, unknown>;
      };
    };
    /** Delete a Moojing price-monitoring group. */
    "mktindex.delete_monitor_group": {
      input: {
        /**
         * The Moojing monitoring group identifier.
         * @minLength 1
         * @pattern \S
         */
        groupId: string;
      };
      output: {
        /** The provider-defined deletion result. */
        data: Record<string, unknown>;
      };
    };
    /** Get sales metrics and top items for one or two selected Moojing attributes. */
    "mktindex.get_attribute_summary": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /** One or two attribute group-to-value selections. */
        attributes: Record<string, string>;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined attribute metrics, breadcrumbs, and top items. */
        data: Record<string, unknown>;
      };
    };
    /** Get review-count and sentiment-rate trends for a Moojing market. */
    "mktindex.get_comment_trend": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /** The aggregation period used for the trend. */
        period: "month" | "quarter" | "year";
      };
      output: {
        /** The good, neutral, bad, and comment-count series available for the platform. */
        data: Record<string, unknown>;
      };
    };
    /** Get the earliest and latest available Moojing data months for a market. */
    "mktindex.get_data_range": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId?: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId?: string;
      };
      output: {
        /** The earliest available data month. */
        startMonth: string | null;
        /** The latest available data month. */
        endMonth: string | null;
        /** The raw object returned by Moojing. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the status and row results for one monitored-item batch task. */
    "mktindex.get_item_monitor_task": {
      input: {
        /**
         * The Moojing asynchronous task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
      };
      output: {
        /**
         * The Moojing asynchronous task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
        /** The normalized task state. */
        state: "running" | "completed" | "partial" | "failed";
        /** The raw object returned by Moojing price control. */
        data: Record<string, unknown>;
      };
    };
    /** Get price, sales, volume, and comment trends for one Moojing item. */
    "mktindex.get_item_sales_trend": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The provider item identifier.
         * @minLength 1
         * @pattern \S
         */
        itemId: string;
        /**
         * The data month in the YYYY_MM format required by this Moojing endpoint.
         * @minLength 1
         */
        startMonth: string;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined item trend data. */
        data: Record<string, unknown>;
      };
    };
    /** List data-model versions available for a JD-related Moojing platform. */
    "mktindex.get_jd_data_versions": {
      input: {
        /** The JD-related Moojing platform ID. */
        platform: "jd" | "jd_exclude_self" | "jd_only_self" | "jd_hk";
      };
      output: {
        /** The available version identifiers. */
        versions: Array<string>;
      };
    };
    /** Get monthly sales, volume, price, shop, item, and market-share metrics for a Moojing market. */
    "mktindex.get_market_summary": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /** The response language. */
        language: "zh" | "en";
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The market sales amount. */
        sales: number | null;
        /** The market sales volume. */
        sold: number | null;
        /** The average item price. */
        averagePrice: number | null;
        /** The market share within the parent market. */
        marketShare: number | null;
        /** The number of shops. */
        shopCount: number | null;
        /** The number of items. */
        itemCount: number | null;
        /** The raw object returned by Moojing. */
        names: Record<string, unknown>;
        /** The raw object returned by Moojing. */
        raw: Record<string, unknown>;
      };
    };
    /** Get sales, volume, price, item, shop, and market-share trends for a Moojing market. */
    "mktindex.get_market_trend": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /** The aggregation period used for the trend. */
        period: "month" | "quarter" | "year";
        /** Whether to request the additional year-over-year and period-over-period series. */
        includeYearOverYear?: boolean;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The raw object returned by Moojing. */
        series: Record<string, unknown>;
      };
    };
    /** Get success and failure count trends for Moojing price-monitoring tasks. */
    "mktindex.get_monitor_task_trend": {
      input: Record<string, never>;
      output: {
        /** The provider-defined success and failure count series. */
        data: Record<string, unknown>;
      };
    };
    /** Get list-price, page-price, and discounted-price trends for one monitored SKU. */
    "mktindex.get_monitored_item_price_trend": {
      input: {
        /**
         * The monitored provider item ID.
         * @minLength 1
         * @pattern \S
         */
        itemId: string;
        /**
         * The monitored provider SKU ID.
         * @minLength 1
         * @pattern \S
         */
        skuId: string;
        /** The monitored item platform. */
        platform: "taobao" | "jd";
      };
      output: {
        /** The provider-defined item information and price series. */
        data: Record<string, unknown>;
      };
    };
    /** Get total sales trend series for each Moojing e-commerce platform. */
    "mktindex.get_platform_sales_trends": {
      input: {
        /** The aggregation period used for the trend. */
        period: "month" | "quarter" | "year";
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        startMonth: string;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined map from platform IDs to sales series. */
        data: Record<string, unknown>;
      };
    };
    /** Get item share, volume, and sales across price ranges in a Moojing market. */
    "mktindex.get_price_distribution": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /**
         * Custom price breakpoints used to build ranges.
         * @minItems 1
         */
        priceBreakpoints?: Array<number>;
        /**
         * The fixed size of each generated price interval.
         * @exclusiveMinimum 0
         */
        intervalSize?: number;
        /**
         * The minimum price included in generated intervals.
         * @minimum 0
         */
        minPrice?: number;
        /**
         * The maximum price included in generated intervals.
         * @exclusiveMinimum 0
         */
        maxPrice?: number;
        /**
         * The number of generated price intervals.
         * @exclusiveMinimum 0
         */
        rangeCount?: number;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The returned price ranges. */
        ranges: Array<{
          /** The provider-defined price range label. */
          label: string;
          /** The share of items in the range. */
          itemShare: number | null;
          /** The sales volume in the range. */
          sold: number | null;
          /** The sales amount in the range. */
          sales: number | null;
          /** The raw tuple returned for the range. */
          raw: Array<unknown>;
        }>;
      };
    };
    /** Get monthly summary metrics for a province or city within a Moojing market. */
    "mktindex.get_region_market_summary": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The province name used to limit the regional market.
         * @minLength 1
         * @pattern \S
         */
        province: string;
        /**
         * The city name, or all to include every city in the province.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /** The response language. */
        language: "zh" | "en";
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined regional summary metrics. */
        data: Record<string, unknown>;
      };
    };
    /** Get trend series for a province or city within a Moojing market. */
    "mktindex.get_region_market_trend": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The province name used to limit the regional market.
         * @minLength 1
         * @pattern \S
         */
        province: string;
        /**
         * The city name, or all to include every city in the province.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        /** The aggregation period used for the trend. */
        period: "month" | "quarter" | "year";
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined regional trend series. */
        data: Record<string, unknown>;
      };
    };
    /** Get category, brand, location, and service details for one or more Moojing shops. */
    "mktindex.get_shop_details": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        startMonth: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        endMonth?: string;
        /**
         * The shop names to query.
         * @minItems 1
         */
        shopNames?: Array<string>;
        /**
         * The shop IDs to query.
         * @minItems 1
         */
        shopIds?: Array<string>;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The shop detail records returned by Moojing. */
        shops: Array<Record<string, unknown>>;
        /** Shop lookup errors reported by Moojing. */
        errors: Array<string>;
      };
    };
    /** Get the status and results for a shop inspection or monitoring task. */
    "mktindex.get_shop_monitor_task": {
      input: {
        /**
         * The Moojing asynchronous task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
      };
      output: {
        /**
         * The Moojing asynchronous task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
        /** The normalized task state. */
        state: "running" | "completed" | "partial" | "failed";
        /** The raw object returned by Moojing price control. */
        data: Record<string, unknown>;
      };
    };
    /** Get sales trends for one Moojing shop within a category and brand. */
    "mktindex.get_shop_sales_trend": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing shop identifier.
         * @minLength 1
         * @pattern \S
         */
        shopId: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The data month in the YYYY_MM format required by this Moojing endpoint.
         * @minLength 1
         */
        startMonth: string;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined shop identity and trend data. */
        data: Record<string, unknown>;
      };
    };
    /** Get one Tmall product model or SPU with its items and shops. */
    "mktindex.get_spu": {
      input: {
        /** The Tmall platform supported by the official SPU endpoint. */
        platform: "tmall";
        /**
         * The Moojing SPU identifier.
         * @minLength 1
         * @pattern \S
         */
        spuId: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined SPU detail, item, shop, and breadcrumb fields. */
        data: Record<string, unknown>;
      };
    };
    /** Start an asynchronous Moojing lookup for provider shops without adding monitoring. */
    "mktindex.inspect_shops": {
      input: {
        /**
         * The shop names to inspect or monitor.
         * @minItems 1
         */
        shopNames?: Array<string>;
        /**
         * The shop IDs to inspect or monitor.
         * @minItems 1
         */
        shopIds?: Array<string>;
        /**
         * The shop URLs to inspect or monitor.
         * @minItems 1
         */
        shopUrls?: Array<string>;
      };
      output: {
        /**
         * The Moojing asynchronous task identifier.
         * @minLength 1
         * @pattern \S
         */
        taskId: string;
        /** The raw object returned by Moojing price control. */
        data: Record<string, unknown>;
      };
    };
    /** List sales performance for attribute values or combinations in a Moojing category. */
    "mktindex.list_attribute_performance": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /** Whether to rank combinations or values in one attribute group. */
        mode: "combinations" | "single_attribute";
        /**
         * The attribute group used when mode is single_attribute.
         * @minLength 1
         * @pattern \S
         */
        attributeName?: string;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined attribute performance count and rows. */
        data: Record<string, unknown>;
      };
    };
    /** List categories and sales associated with a Moojing brand on a platform. */
    "mktindex.list_brand_categories": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined brand category rows. */
        categories: Array<Record<string, unknown>>;
      };
    };
    /** List Moojing categories for an e-commerce platform. */
    "mktindex.list_categories": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * An optional category ID used to limit the response to that branch plus top-level categories.
         * @minLength 1
         */
        rootCategoryId?: string;
        /** The response language. */
        language?: "zh" | "en";
        /**
         * An optional category update timestamp in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         */
        lastUpdatedAt?: string;
      };
      output: {
        /** The top-level category IDs returned by Moojing. */
        rootCategoryIds: Array<string>;
        /** The maximum category tree depth when reported. */
        maxDepth: number | null;
        /** The categories returned by Moojing. */
        categories: Array<{
          /** The category ID. */
          id: string;
          /** The Chinese category name when available. */
          name: string | null;
          /** The English category name when available. */
          englishName: string | null;
          /** The parent category ID when available. */
          parentId: string | null;
          /** The category tree level when available. */
          level: number | null;
          /** The IDs of direct child categories. */
          childIds: Array<string>;
          /** Whether the category has brand data when reported. */
          hasBrand: boolean | null;
          /** The raw object returned by Moojing. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List attribute groups and values available for a Moojing category in one month. */
    "mktindex.list_category_attributes": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
      };
      output: {
        /** The provider-defined map from attribute group names to values. */
        data: Record<string, unknown>;
      };
    };
    /** List top-selling items within a Moojing market for one month. */
    "mktindex.list_hot_items": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of rows requested per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The total number of available items. */
        count: number;
        /** The item rows returned by Moojing. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List top-selling shops within a Moojing market for one month. */
    "mktindex.list_hot_shops": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of rows requested per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The total number of available shops. */
        count: number;
        /** The shop rows returned by Moojing. */
        shops: Array<Record<string, unknown>>;
      };
    };
    /** List asynchronous batch tasks that added monitored items. */
    "mktindex.list_item_monitor_tasks": {
      input: {
        /** Whether to sort tasks in descending order. */
        descending?: boolean;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records requested per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** The provider-defined task counts and rows. */
        data: Record<string, unknown>;
      };
    };
    /** List category, brand, or province rows within a Moojing market for one month. */
    "mktindex.list_market_breakdown": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of rows requested per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
        /** The dimension used to break down the market. */
        dimension: "category" | "brand" | "province";
      };
      output: {
        /** The total number of available rows. */
        count: number;
        /** The market breakdown rows returned by Moojing. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** List monitoring groups in the connected Moojing account. */
    "mktindex.list_monitor_groups": {
      input: Record<string, never>;
      output: {
        /** The monitoring groups returned by Moojing. */
        groups: Array<Record<string, unknown>>;
      };
    };
    /** List execution logs for Moojing price-monitoring tasks. */
    "mktindex.list_monitor_task_logs": {
      input: {
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records requested per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
      };
      output: {
        /** The provider-defined task log count and rows. */
        data: Record<string, unknown>;
      };
    };
    /** List items and SKUs configured in Moojing price monitoring. */
    "mktindex.list_monitored_items": {
      input: {
        /**
         * The provider field used to order monitored items.
         * @minLength 1
         * @pattern \S
         */
        orderBy?: string;
        /** Whether to sort in descending order. */
        descending?: boolean;
        /**
         * The Moojing monitoring group identifier.
         * @minLength 1
         * @pattern \S
         */
        groupId?: string;
        /**
         * The item-name search query.
         * @minLength 1
         * @pattern \S
         */
        query?: string;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records requested per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
        /**
         * Up to ten item IDs used to limit results.
         * @minItems 1
         * @maxItems 10
         */
        itemIds?: Array<string>;
        /**
         * Up to ten SKU IDs used to limit results.
         * @minItems 1
         * @maxItems 10
         */
        skuIds?: Array<string>;
        /**
         * The shop or seller ID used to limit results.
         * @minLength 1
         * @pattern \S
         */
        shopId?: string;
      };
      output: {
        /** The provider-defined monitored item counts and rows. */
        data: Record<string, unknown>;
      };
    };
    /** List top-selling items within a regional Moojing market. */
    "mktindex.list_region_hot_items": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The province name used to limit the regional market.
         * @minLength 1
         * @pattern \S
         */
        province: string;
        /**
         * The city name, or all to include every city in the province.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of rows requested per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined paginated regional item rows. */
        data: Record<string, unknown>;
      };
    };
    /** List top-selling shops within a regional Moojing market. */
    "mktindex.list_region_hot_shops": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The province name used to limit the regional market.
         * @minLength 1
         * @pattern \S
         */
        province: string;
        /**
         * The city name, or all to include every city in the province.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of rows requested per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined paginated regional shop rows. */
        data: Record<string, unknown>;
      };
    };
    /** List category, brand, or city rows within a regional Moojing market. */
    "mktindex.list_region_market_breakdown": {
      input: {
        /**
         * The Moojing platform ID, such as all, tmall, jd, pdd, or meituan. Supported platforms vary by endpoint and subscription.
         * @minLength 1
         */
        platform: string;
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The province name used to limit the regional market.
         * @minLength 1
         * @pattern \S
         */
        province: string;
        /**
         * The city name, or all to include every city in the province.
         * @minLength 1
         * @pattern \S
         */
        city: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /** The dimension used to break down the regional market. */
        dimension: "category" | "brand" | "city";
        /**
         * The one-based result page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of rows requested per page.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 10
         */
        pageSize?: number;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined paginated regional rows. */
        data: Record<string, unknown>;
      };
    };
    /** List product models or SPUs for a Tmall category and brand in one month. */
    "mktindex.list_spus": {
      input: {
        /** The Tmall platform supported by the official SPU endpoint. */
        platform: "tmall";
        /**
         * The Moojing category ID. Use 0 only when the selected endpoint supports all categories.
         * @minLength 1
         */
        categoryId: string;
        /**
         * The Moojing brand ID. Use all to include every brand when supported.
         * @minLength 1
         */
        brandId: string;
        /**
         * The data month in YYYY-MM format.
         * @minLength 1
         */
        month: string;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The provider-defined SPU count and rows. */
        data: Record<string, unknown>;
      };
    };
    /** List markets subscribed to or followed by the connected Moojing account. */
    "mktindex.list_subscriptions": {
      input: {
        /** Whether to return subscribed or followed markets. */
        mode: "subscribed" | "followed";
        /** The response language. */
        language?: "zh" | "en";
      };
      output: {
        /** The subscribed or followed market records. */
        subscriptions: Array<Record<string, unknown>>;
      };
    };
    /** Remove items or selected SKUs from Moojing price monitoring. */
    "mktindex.remove_monitored_items": {
      input: {
        /**
         * The monitored item IDs to remove.
         * @minItems 1
         */
        itemIds?: Array<string>;
        /** A map from item IDs to the SKU IDs selected under each item. */
        skus?: Record<string, Array<string>>;
      };
      output: {
        /** The provider-defined removal result. */
        data: Record<string, unknown>;
      };
    };
    /** Search Moojing brands by keyword or stock code. */
    "mktindex.search_brands": {
      input: {
        /**
         * The brand keyword or stock code to search for.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** The currency used for monetary values. */
        currency?: "CNY" | "JPY" | "GBP" | "EUR" | "USD";
      };
      output: {
        /** The brand search result groups returned by Moojing. */
        results: Array<Record<string, unknown>>;
      };
    };
  }
}
