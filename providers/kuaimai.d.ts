import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Kuaimai ERP product by system ID or merchant product code. */
    "kuaimai.get_product": {
      input: {
        /**
         * The Kuaimai ERP system product ID.
         * @minimum 1
         */
        systemProductId?: number;
        /**
         * The merchant product code.
         * @minLength 1
         * @pattern \S
         */
        merchantProductCode?: string;
        /** Whether Kuaimai should include product purchase-link information. */
        includePurchaseLinks?: boolean;
      };
      output: {
        /** The product record returned by Kuaimai. */
        product: Record<string, unknown>;
      };
    };
    /** List warehouse inventory for a Kuaimai merchant product or SKU code. */
    "kuaimai.list_inventory": {
      input: {
        /**
         * The merchant product code to retrieve.
         * @minLength 1
         * @pattern \S
         */
        merchantProductCode?: string;
        /**
         * The merchant SKU code to retrieve.
         * @minLength 1
         * @pattern \S
         */
        merchantSkuCode?: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records to return, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /** One product and warehouse inventory record returned by Kuaimai. */
        inventory: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when omitted.
         * @minimum 0
         */
        total: number | null;
        /** Whether another result page is available, or null when omitted. */
        hasNext: boolean | null;
        /** The cursor for the next request, or null when cursor mode is unused. */
        cursor: string | null;
      };
    };
    /** List Kuaimai ERP orders, excluding Taobao/Tmall and Pinduoduo orders that require separate platform credentials. */
    "kuaimai.list_orders": {
      input: {
        /**
         * Kuaimai ERP system order numbers to retrieve.
         * @minItems 1
         */
        systemOrderIds?: Array<string>;
        /**
         * Platform order numbers to retrieve.
         * @minItems 1
         */
        platformOrderIds?: Array<string>;
        /** The order time field used with startTime and endTime. */
        timeType?: "created" | "pay_time" | "consign_time" | "audit_time" | "upd_time";
        /**
         * A China Standard Time timestamp in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        startTime?: string;
        /**
         * A China Standard Time timestamp in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        endTime?: string;
        /**
         * Shop IDs used to filter records.
         * @minItems 1
         */
        shopIds?: Array<string>;
        /**
         * Kuaimai ERP system statuses used to filter records.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * Order tag IDs used to filter records, with at most ten IDs.
         * @minItems 1
         * @maxItems 10
         */
        tagIds?: Array<string>;
        /**
         * Custom exception tag IDs used to filter records, with at most ten IDs.
         * @minItems 1
         * @maxItems 10
         */
        exceptionIds?: Array<string>;
        /**
         * System exception statuses used to filter records, with at most ten values.
         * @minItems 1
         * @maxItems 10
         */
        exceptionStatuses?: Array<string>;
        /** How exception filters are applied: 1 only matching, 2 exclude matching, or 3 include both. */
        exceptionMatch?: 1 | 2 | 3;
        /**
         * Kuaimai order type codes used to filter records.
         * @minItems 1
         */
        orderTypes?: Array<string>;
        /**
         * The platform buyer ID or nickname to retrieve.
         * @minLength 1
         * @pattern \S
         */
        buyerNick?: string;
        /** Whether to query orders older than three months instead of the recent-order store. */
        archived?: boolean;
        /**
         * Logistics tracking numbers to retrieve.
         * @minItems 1
         */
        trackingNumbers?: Array<string>;
        /** Whether to use cursor pagination for recent orders. */
        useCursor?: boolean;
        /**
         * The cursor returned by the preceding cursor-mode request.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records to return, from 20 to 200.
         * @minimum 20
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /** One order record returned by Kuaimai. */
        orders: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when omitted.
         * @minimum 0
         */
        total: number | null;
        /** Whether another result page is available, or null when omitted. */
        hasNext: boolean | null;
        /** The cursor for the next request, or null when cursor mode is unused. */
        cursor: string | null;
      };
    };
    /** List products and their SKU records from Kuaimai ERP. */
    "kuaimai.list_products": {
      input: {
        /** The availability status: 0 disabled or 1 enabled. */
        activeStatus?: 0 | 1;
        /**
         * A China Standard Time timestamp in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        modifiedAfter?: string;
        /**
         * A China Standard Time timestamp in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        modifiedBefore?: string;
        /** The documented Kuaimai product type filter. */
        productType?: 0 | 1 | 3 | 6 | 7 | 8 | 9 | 10;
        /** The product sort order. */
        orderBy?: "modified:desc" | "created:desc";
        /** Whether Kuaimai should include product purchase-link information. */
        includePurchaseLinks?: boolean;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records to return, from 1 to 200.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /** One product record returned by Kuaimai, including nested SKUs when available. */
        products: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when omitted.
         * @minimum 0
         */
        total: number | null;
        /** Whether another result page is available, or null when omitted. */
        hasNext: boolean | null;
        /** The cursor for the next request, or null when cursor mode is unused. */
        cursor: string | null;
      };
    };
    /** List Kuaimai ERP sales stockout records and their order details. */
    "kuaimai.list_sales_stockouts": {
      input: {
        /**
         * Kuaimai ERP system order numbers to retrieve.
         * @minItems 1
         */
        systemOrderIds?: Array<string>;
        /**
         * Platform order numbers to retrieve.
         * @minItems 1
         */
        platformOrderIds?: Array<string>;
        /** The order time field used with startTime and endTime. */
        timeType?: "created" | "pay_time" | "consign_time" | "audit_time" | "upd_time";
        /**
         * A China Standard Time timestamp in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        startTime?: string;
        /**
         * A China Standard Time timestamp in YYYY-MM-DD HH:mm:ss format.
         * @minLength 1
         * @pattern \S
         */
        endTime?: string;
        /**
         * Shop IDs used to filter records.
         * @minItems 1
         */
        shopIds?: Array<string>;
        /**
         * Kuaimai ERP system statuses used to filter records.
         * @minItems 1
         */
        statuses?: Array<string>;
        /**
         * Order tag IDs used to filter records, with at most ten IDs.
         * @minItems 1
         * @maxItems 10
         */
        tagIds?: Array<string>;
        /**
         * Custom exception tag IDs used to filter records, with at most ten IDs.
         * @minItems 1
         * @maxItems 10
         */
        exceptionIds?: Array<string>;
        /**
         * System exception statuses used to filter records, with at most ten values.
         * @minItems 1
         * @maxItems 10
         */
        exceptionStatuses?: Array<string>;
        /** How exception filters are applied: 1 only matching, 2 exclude matching, or 3 include both. */
        exceptionMatch?: 1 | 2 | 3;
        /**
         * Kuaimai order type codes used to filter records.
         * @minItems 1
         */
        orderTypes?: Array<string>;
        /**
         * The platform buyer ID or nickname to retrieve.
         * @minLength 1
         * @pattern \S
         */
        buyerNick?: string;
        /** Whether to query orders older than three months instead of the recent-order store. */
        archived?: boolean;
        /**
         * Logistics tracking numbers to retrieve.
         * @minItems 1
         */
        trackingNumbers?: Array<string>;
        /** Whether to use cursor pagination for recent orders. */
        useCursor?: boolean;
        /**
         * The cursor returned by the preceding cursor-mode request.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records to return, from 20 to 200.
         * @minimum 20
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /** One sales stockout record returned by Kuaimai. */
        stockouts: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when omitted.
         * @minimum 0
         */
        total: number | null;
        /** Whether another result page is available, or null when omitted. */
        hasNext: boolean | null;
        /** The cursor for the next request, or null when cursor mode is unused. */
        cursor: string | null;
      };
    };
    /** List shops configured for the connected Kuaimai ERP company. */
    "kuaimai.list_shops": {
      input: {
        /**
         * The shop name to filter by.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * The shop ID to retrieve.
         * @minimum 1
         */
        id?: number;
        /**
         * The shop short name to filter by.
         * @minLength 1
         * @pattern \S
         */
        shortName?: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        pageNo?: number;
        /**
         * The number of records to return.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The matching shop records. */
        shops: Array<Record<string, unknown>>;
      };
    };
    /** List warehouses configured for the connected Kuaimai ERP company. */
    "kuaimai.list_warehouses": {
      input: {
        /**
         * The exact warehouse code to retrieve.
         * @minLength 1
         * @pattern \S
         */
        code?: string;
        /**
         * The warehouse name to filter by.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /**
         * The warehouse ID to retrieve.
         * @minimum 1
         */
        id?: number;
      };
      output: {
        /** The matching warehouse records. */
        warehouses: Array<Record<string, unknown>>;
      };
    };
    /** Extend the Kuaimai Open Platform session validity by another 30 days. */
    "kuaimai.refresh_session": {
      input: Record<string, never>;
      output: {
        /** The session metadata returned by Kuaimai. */
        session: Record<string, unknown>;
      };
    };
  }
}
