import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call an explicitly approved SellerSpace MCP read tool with JSON arguments after discovering its live schema. Write, export, and browser-task tools are unavailable through this action. */
    "sellerspace.call_tool": {
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
        /** The SellerSpace result payload. Its nested fields vary with the selected entity, dataset, and field selection. */
        result: unknown;
      };
    };
    /** Discover current SellerSpace fields for advanced selection, filtering, sorting, or output interpretation in a supported data domain. */
    "sellerspace.discover_fields": {
      input: {
        /** The SellerSpace field domain. */
        domain?: "ads" | "product" | "website" | "stores";
        /** An optional entity context such as campaign, product, market, or store. */
        entity?: string;
        /** A field name, keyword, or business meaning to search for. */
        query?: string;
        /** The intended field usage. */
        usage?: "select" | "include" | "sort" | "filter" | "output";
      };
      output: {
        /** The SellerSpace result payload. Its nested fields vary with the selected entity, dataset, and field selection. */
        result: unknown;
      };
    };
    /** Get time-series or placement-level metrics for one SellerSpace advertising campaign, ad group, promoted product, keyword, target, or search term. */
    "sellerspace.get_ad_metric_history": {
      input: {
        /** The SellerSpace seller ID returned by list_stores. */
        sellerId: number;
        /**
         * The marketplace code returned by list_stores.
         * @minLength 1
         */
        marketplace: string;
        /** The advertising entity type. */
        adDataType: "campaign" | "adGroup" | "productAd" | "keyword" | "target" | "searchTerm";
        /** The entity ID returned by query_ads; use a string for large IDs. */
        id: string | number;
        /**
         * The query start date.
         * @format date
         */
        fromDateStr: string;
        /**
         * The query end date.
         * @format date
         */
        toDateStr: string;
        /**
         * Whether to split metrics by time or advertising placement.
         * @default "time"
         */
        dimension?: "time" | "placement";
        /**
         * The time aggregation used when dimension is time.
         * @default "DAILY"
         */
        timeType?: "DAILY" | "WEEKLY" | "WEEK" | "MONTHLY" | "HOURLY";
        /**
         * Whether placement results should use Amazon Business placements.
         * @default "N"
         */
        placementBusiness?: "Y" | "N";
        /** The SellerSpace date preset: TD today, YD yesterday, WD this week, LW last week, MO this month, LM last month, SD trailing 7 days, HD trailing 15 days, NM trailing 30 days, or CU custom dates. */
        dateType?: "TD" | "YD" | "WD" | "LW" | "MO" | "LM" | "SD" | "HD" | "NM" | "CU";
        /** Additional history fields to include. */
        includeFields?: Array<string>;
        /** The exact history fields to return. */
        selectFields?: Array<string>;
        /** Whether to retain the summary when selectFields requests a narrow field set. */
        includeSummary?: boolean;
      };
      output: {
        /** The SellerSpace result payload. Its nested fields vary with the selected entity, dataset, and field selection. */
        result: unknown;
      };
    };
    /** List SellerSpace FBA inbound shipments with status, warehouse, quantities, and SKU-level receiving differences for one Amazon store and marketplace. */
    "sellerspace.list_fba_shipments": {
      input: {
        /** The SellerSpace seller ID returned by list_stores. */
        sellerId: number;
        /**
         * The marketplace code returned by list_stores.
         * @minLength 1
         */
        marketplace: string;
        /** The optional Amazon merchant ID. */
        merchantId?: string;
        /** An exact FBA shipment ID. */
        shipmentId?: string;
        /** The FBA shipment status. */
        shipmentStatus?: "WORKING" | "SHIPPED" | "RECEIVING" | "CANCELLED" | "DELETED" | "CLOSED" | "ERROR" | "IN_TRANSIT" | "DELIVERED" | "CHECKED_IN";
        /** An Amazon shipment reference ID. */
        amazonReferenceId?: string;
        /** A seller SKU contained in the shipment. */
        sellerSku?: string;
        /** An Amazon fulfillment network SKU contained in the shipment. */
        fnSku?: string;
        /**
         * The shipment creation date range start.
         * @format date
         */
        fromDateStr?: string;
        /**
         * The shipment creation date range end.
         * @format date
         */
        toDateStr?: string;
        /**
         * The one-based page number.
         * @default 1
         */
        page?: number;
        /**
         * The number of shipments requested per page.
         * @default 30
         */
        pageSize?: number;
        /** Additional shipment fields to include. */
        includeFields?: Array<string>;
        /** The exact shipment fields to return. */
        selectFields?: Array<string>;
      };
      output: {
        /** The SellerSpace result payload. Its nested fields vary with the selected entity, dataset, and field selection. */
        result: unknown;
      };
    };
    /** List Amazon stores and marketplaces authorized in SellerSpace so their seller IDs and marketplace codes can be used in subsequent queries. */
    "sellerspace.list_stores": {
      input: {
        /**
         * Whether to bypass the SellerSpace store cache.
         * @default false
         */
        refresh?: boolean;
        /** A store name or seller ID search term. */
        keywords?: string;
        /** An Amazon selling region such as NA, EU, or FE. */
        sellingRegion?: string;
        /** The SP-API authorization availability filter. */
        authAvailable?: string;
        /** The MWS authorization availability filter. */
        mwsAvailable?: string;
        /** Additional store fields to include. */
        includeFields?: Array<string>;
        /** Additional marketplace fields to include. */
        includeMarketFields?: Array<string>;
        /** The exact store fields to return. */
        selectFields?: Array<string>;
        /** The exact marketplace fields to return. */
        selectMarketFields?: Array<string>;
        /** Whether to include store and marketplace field metadata. */
        includeFieldMeta?: boolean;
      };
      output: {
        /** The SellerSpace result payload. Its nested fields vary with the selected entity, dataset, and field selection. */
        result: unknown;
      };
    };
    /** Discover SellerSpace tools approved by Connector for read-only dynamic calls, including their live input schemas and behavior annotations. */
    "sellerspace.list_tools": {
      input: Record<string, never>;
      output: {
        /** Approved read-only tools currently exposed to the connected SellerSpace account. */
        tools: Array<{
          /**
           * The exact SellerSpace MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by SellerSpace MCP. */
          description?: string;
          /** MCP hints supplied by SellerSpace about the tool's behavior. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify SellerSpace data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive updates. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to have no additional effect. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with external entities. */
            openWorldHint?: boolean;
          };
          /** The current JSON Schema for the tool arguments, supplied by SellerSpace MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Query SellerSpace Amazon advertising campaigns, ad groups, promoted products, keywords, targets, search terms, or negative targeting with filters and pagination. */
    "sellerspace.query_ads": {
      input: {
        /** The advertising entity to query. */
        entity: "campaign" | "adGroup" | "productAds" | "keywords" | "targets" | "searchQuery" | "searchTermFrequency" | "negativeKeywords" | "negativeTargets";
        /** One SellerSpace store and Amazon marketplace to query. */
        scope: {
          /** The SellerSpace seller ID returned by list_stores. */
          sellerId: number;
          /**
           * The marketplace code returned by list_stores, such as US.
           * @minLength 1
           */
          marketplace: string;
        };
        /** The reporting period for the query. */
        period?: {
          /**
           * The SellerSpace date preset: TD today, YD yesterday, WD this week, LW last week, MO this month, LM last month, SD trailing 7 days, HD trailing 15 days, NM trailing 30 days, or CU custom dates.
           * @default "SD"
           */
          preset?: "TD" | "YD" | "WD" | "LW" | "MO" | "LM" | "SD" | "HD" | "NM" | "CU";
          /** The user's original time expression, such as `last month` or `trailing 30 days`, for SellerSpace to normalize. */
          text?: string;
          /**
           * The custom start date when preset is CU.
           * @format date
           */
          from?: string;
          /**
           * The custom end date when preset is CU.
           * @format date
           */
          to?: string;
        };
        /** A name or text search applied to the selected advertising entity. */
        name?: string;
        /** The SellerSpace advertising entity status. */
        status?: "archived" | "enabled" | "paused" | "notArchived";
        /** The SellerSpace advertising entity status. */
        campaignStatus?: "archived" | "enabled" | "paused" | "notArchived";
        /** The SellerSpace advertising entity status. */
        adGroupStatus?: "archived" | "enabled" | "paused" | "notArchived";
        /** Entity-specific SellerSpace advertising criteria. */
        criteria?: Record<string, unknown>;
        /** Metric filters applied to the advertising query. */
        filters?: Array<{
          /**
           * The SellerSpace metric field to filter.
           * @minLength 1
           */
          field: string;
          /** The comparison operator. */
          op: "gt" | "gte" | "eq" | "lt" | "lte";
          /** The value to compare against the selected field. */
          value: string | number | boolean;
        }>;
        /** Additional SellerSpace result fields to include. */
        fields?: Array<string>;
        /** The exact SellerSpace result fields to return. */
        selectFields?: Array<string>;
        /** Whether to retain summary data when selectFields requests a narrow field set. */
        includeSummary?: boolean;
        /** Whether to include contextual metadata for returned fields. */
        includeFieldMeta?: boolean;
        /** The result ordering requested from SellerSpace. */
        sort?: {
          /**
           * The SellerSpace field to sort by.
           * @minLength 1
           */
          field: string;
          /**
           * The sort direction.
           * @default "desc"
           */
          direction?: "asc" | "desc";
        };
        /** Pagination as a one-based page number or a page configuration object. */
        page?: {
          /**
           * The one-based page number.
           * @default 1
           */
          number?: number;
          /**
           * The number of records requested per page.
           * @default 20
           */
          size?: number;
        } | number;
      };
      output: {
        /** The SellerSpace result payload. Its nested fields vary with the selected entity, dataset, and field selection. */
        result: unknown;
      };
    };
    /** Query SellerSpace product performance or long-term storage fee data across one or more Amazon store-marketplace stations. */
    "sellerspace.query_products": {
      input: {
        /** One or more SellerSpace store-marketplace stations. */
        scope: {
          /**
           * Store-marketplace identifiers in `sellerId-marketplace` form.
           * @minItems 1
           */
          stations: Array<string>;
        };
        /** The reporting period and optional comparison for the query. */
        period?: {
          /**
           * The SellerSpace date preset: TD today, YD yesterday, WD this week, LW last week, MO this month, LM last month, SD trailing 7 days, HD trailing 15 days, NM trailing 30 days, or CU custom dates.
           * @default "SD"
           */
          preset?: "TD" | "YD" | "WD" | "LW" | "MO" | "LM" | "SD" | "HD" | "NM" | "CU";
          /** The user's original time expression, such as `last month` or `trailing 30 days`, for SellerSpace to normalize. */
          text?: string;
          /**
           * The custom start date when preset is CU.
           * @format date
           */
          from?: string;
          /**
           * The custom end date when preset is CU.
           * @format date
           */
          to?: string;
          /** Optional comparison period for the requested business data. */
          compare?: {
            /**
             * Whether to include comparison data.
             * @default false
             */
            enabled?: boolean;
            /**
             * The comparison start date.
             * @format date
             */
            from?: string;
            /**
             * The comparison end date.
             * @format date
             */
            to?: string;
            /** Whether to compare with the same period last year. */
            lastYear?: boolean;
          };
        };
        /** Dataset-specific SellerSpace product criteria. */
        criteria?: Record<string, unknown>;
        /** The product dataset and grouping to return. */
        view?: {
          /**
           * The SellerSpace product dataset.
           * @default "performance"
           */
          dataset?: "performance" | "longTermStorageFees";
          /**
           * The product grouping dimension.
           * @default "SKU"
           */
          groupBy?: "ASIN" | "SKU" | "PARENT_ASIN" | "SELLER" | "NO_MARKET_ASIN" | "NO_MARKET_SKU" | "NO_MARKET_PARENT_ASIN";
          /**
           * The product summary granularity.
           * @default "SUMMARY"
           */
          summary?: "SUMMARY" | "MONTHLY" | "WEEKLY" | "WEEK" | "DAILY" | "HOURLY" | "ASIN_DAILY" | "SKU_DAILY" | "ASIN";
        };
        /** Additional SellerSpace result fields to include. */
        fields?: Array<string>;
        /** The exact SellerSpace result fields to return. */
        selectFields?: Array<string>;
        /** Whether to retain summary data when selectFields requests a narrow field set. */
        includeSummary?: boolean;
        /** Whether to include contextual metadata for returned fields. */
        includeFieldMeta?: boolean;
        /** The result ordering requested from SellerSpace. */
        sort?: {
          /**
           * The SellerSpace field to sort by.
           * @minLength 1
           */
          field: string;
          /**
           * The sort direction.
           * @default "desc"
           */
          direction?: "asc" | "desc";
        };
        /** Pagination as a one-based page number or a page configuration object. */
        page?: {
          /**
           * The one-based page number.
           * @default 1
           */
          number?: number;
          /**
           * The number of records requested per page.
           * @default 20
           */
          size?: number;
        } | number;
      };
      output: {
        /** The SellerSpace result payload. Its nested fields vary with the selected entity, dataset, and field selection. */
        result: unknown;
      };
    };
    /** Query SellerSpace store or marketplace performance, including orders, revenue, profit, refunds, advertising spend, FBA fees, ROI, and ACoS. */
    "sellerspace.query_store_performance": {
      input: {
        /** One or more SellerSpace store-marketplace stations. */
        scope: {
          /**
           * Store-marketplace identifiers in `sellerId-marketplace` form.
           * @minItems 1
           */
          stations: Array<string>;
        };
        /** The reporting period and optional comparison for the query. */
        period?: {
          /**
           * The SellerSpace date preset: TD today, YD yesterday, WD this week, LW last week, MO this month, LM last month, SD trailing 7 days, HD trailing 15 days, NM trailing 30 days, or CU custom dates.
           * @default "SD"
           */
          preset?: "TD" | "YD" | "WD" | "LW" | "MO" | "LM" | "SD" | "HD" | "NM" | "CU";
          /** The user's original time expression, such as `last month` or `trailing 30 days`, for SellerSpace to normalize. */
          text?: string;
          /**
           * The custom start date when preset is CU.
           * @format date
           */
          from?: string;
          /**
           * The custom end date when preset is CU.
           * @format date
           */
          to?: string;
          /** Optional comparison period for the requested business data. */
          compare?: {
            /**
             * Whether to include comparison data.
             * @default false
             */
            enabled?: boolean;
            /**
             * The comparison start date.
             * @format date
             */
            from?: string;
            /**
             * The comparison end date.
             * @format date
             */
            to?: string;
            /** Whether to compare with the same period last year. */
            lastYear?: boolean;
          };
        };
        /** SellerSpace store query controls passed to the upstream API. */
        criteria?: Record<string, unknown>;
        /** The aggregation dimension and comparison granularity. */
        view?: {
          /**
           * Whether to aggregate by marketplace or store.
           * @default "market"
           */
          dimension?: "market" | "store";
          /**
           * The period-over-period granularity.
           * @default "HOURLY"
           */
          chainType?: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY";
        };
        /** Additional SellerSpace result fields to include. */
        fields?: Array<string>;
        /** The exact SellerSpace result fields to return. */
        selectFields?: Array<string>;
        /** Whether to retain summary data when selectFields requests a narrow field set. */
        includeSummary?: boolean;
        /** Whether to include contextual metadata for returned fields. */
        includeFieldMeta?: boolean;
      };
      output: {
        /** The SellerSpace result payload. Its nested fields vary with the selected entity, dataset, and field selection. */
        result: unknown;
      };
    };
  }
}
