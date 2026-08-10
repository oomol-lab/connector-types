import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List goods and SKU records from Wangdian ERP Enterprise Edition. */
    "wangdian.list_goods": {
      input: {
        /**
         * The merchant SKU code to retrieve.
         * @minLength 1
         * @pattern \S
         */
        specNo?: string;
        /**
         * The product or SPU code to retrieve.
         * @minLength 1
         * @pattern \S
         */
        goodsNo?: string;
        /**
         * The brand code used to filter goods.
         * @minLength 1
         * @pattern \S
         */
        brandNo?: string;
        /**
         * The goods category name used to filter results.
         * @minLength 1
         * @pattern \S
         */
        className?: string;
        /**
         * The barcode used to filter goods.
         * @minLength 1
         * @pattern \S
         */
        barcode?: string;
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
        /** Whether to include deleted goods records. */
        includeDeleted?: boolean;
        /**
         * The zero-based page number. Defaults to 0.
         * @minimum 0
         */
        pageNo?: number;
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** One goods record returned by Wangdian, including its nested SKU list when available. */
        goods: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when Wangdian omits it after page 0.
         * @minimum 0
         */
        totalCount: number | null;
      };
    };
    /** List physical stock and inventory allocation records from Wangdian ERP. */
    "wangdian.list_inventory": {
      input: {
        /**
         * The warehouse code used to filter inventory.
         * @minLength 1
         * @pattern \S
         */
        warehouseNo?: string;
        /**
         * The merchant SKU code used to retrieve inventory.
         * @minLength 1
         * @pattern \S
         */
        specNo?: string;
        /**
         * The barcode used to retrieve inventory.
         * @minLength 1
         * @pattern \S
         */
        barcode?: string;
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
        /** Whether to return only inventory records that are not deleted in inventory management. */
        onlyExistingInventory?: boolean;
        /** Whether to include inventory for deleted goods records. */
        includeDeletedGoods?: boolean;
        /**
         * The zero-based page number. Defaults to 0.
         * @minimum 0
         */
        pageNo?: number;
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** One warehouse and SKU inventory record returned by Wangdian. */
        inventory: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when Wangdian omits it after page 0.
         * @minimum 0
         */
        totalCount: number | null;
      };
    };
    /** List sales orders from Wangdian ERP Enterprise Edition. */
    "wangdian.list_orders": {
      input: {
        /**
         * The Wangdian ERP sales order number to retrieve.
         * @minLength 1
         * @pattern \S
         */
        tradeNo?: string;
        /**
         * The original platform order number to retrieve.
         * @minLength 1
         * @pattern \S
         */
        sourceTradeNo?: string;
        /**
         * The outbound logistics number to retrieve.
         * @minLength 1
         * @pattern \S
         */
        logisticsNo?: string;
        /** The Wangdian sales order status code used to filter results. */
        status?: 5 | 10 | 12 | 13 | 15 | 16 | 19 | 20 | 21 | 22 | 25 | 27 | 30 | 35 | 40 | 45 | 50 | 53 | 55 | 95 | 105 | 110 | 113;
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
         * The shop code used to filter sales orders.
         * @minLength 1
         * @pattern \S
         */
        shopNo?: string;
        /**
         * The shop codes used to filter records, with at most 20 shops per request.
         * @minItems 1
         * @maxItems 20
         */
        shopNos?: Array<string>;
        /**
         * The warehouse code used to filter sales orders.
         * @minLength 1
         * @pattern \S
         */
        warehouseNo?: string;
        /** The logistics-number filter: 0 for any, 1 for present, or 2 for absent. */
        logisticsState?: 0 | 1 | 2;
        /** Whether to use a fuzzy match when querying by sourceTradeNo. */
        fuzzySourceTradeNo?: boolean;
        /** Whether to include payment transaction details in returned orders. */
        includePaymentDetails?: boolean;
        /** Whether Wangdian should calculate tax by individual SKU. */
        calculateTaxBySku?: boolean;
        /**
         * The zero-based page number. Defaults to 0.
         * @minimum 0
         */
        pageNo?: number;
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** One sales order record returned by Wangdian. */
        orders: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when Wangdian omits it after page 0.
         * @minimum 0
         */
        totalCount: number | null;
      };
    };
    /** List refund and exchange records from Wangdian ERP Enterprise Edition. */
    "wangdian.list_refunds": {
      input: {
        /**
         * The Wangdian ERP refund number to retrieve.
         * @minLength 1
         * @pattern \S
         */
        refundNo?: string;
        /**
         * The original platform refund number to retrieve.
         * @minLength 1
         * @pattern \S
         */
        sourceRefundNo?: string;
        /**
         * The Wangdian ERP sales order number to retrieve refunds for.
         * @minLength 1
         * @pattern \S
         */
        tradeNo?: string;
        /**
         * The original platform order number to retrieve refunds for.
         * @minLength 1
         * @pattern \S
         */
        sourceTradeNo?: string;
        /** The Wangdian refund processing status code used to filter results. */
        processStatus?: 5 | 10 | 20 | 30 | 40 | 50 | 60 | 63 | 64 | 65 | 69 | 70 | 71 | 80 | 90;
        /** The time field to query: 0 for modified, 1 for settlement, or 2 for creation time. */
        timeType?: 0 | 1 | 2;
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
         * The shop code used to filter refunds.
         * @minLength 1
         * @pattern \S
         */
        shopNo?: string;
        /**
         * The shop codes used to filter records, with at most 20 shops per request.
         * @minItems 1
         * @maxItems 20
         */
        shopNos?: Array<string>;
        /**
         * The return logistics number used to filter refunds.
         * @minLength 1
         * @pattern \S
         */
        returnLogisticsNo?: string;
        /**
         * The zero-based page number. Defaults to 0.
         * @minimum 0
         */
        pageNo?: number;
        /**
         * The number of refund records to return, from 1 to 40.
         * @minimum 1
         * @maximum 40
         */
        pageSize?: number;
      };
      output: {
        /** One refund or exchange record returned by Wangdian. */
        refunds: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when Wangdian omits it after page 0.
         * @minimum 0
         */
        totalCount: number | null;
      };
    };
    /** List sales stockout records from Wangdian ERP Enterprise Edition. */
    "wangdian.list_sales_stockouts": {
      input: {
        /**
         * The Wangdian sales stockout number to retrieve.
         * @minLength 1
         * @pattern \S
         */
        stockoutNo?: string;
        /**
         * The Wangdian ERP sales order number to retrieve.
         * @minLength 1
         * @pattern \S
         */
        tradeNo?: string;
        /**
         * The original platform order number to retrieve.
         * @minLength 1
         * @pattern \S
         */
        sourceTradeNo?: string;
        /** The Wangdian sales stockout status code used to filter results. */
        status?: 5 | 55 | 95 | 105 | 110 | 113;
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
         * The shop code used to filter sales stockouts.
         * @minLength 1
         * @pattern \S
         */
        shopNo?: string;
        /**
         * The shop codes used to filter records, with at most 20 shops per request.
         * @minItems 1
         * @maxItems 20
         */
        shopNos?: Array<string>;
        /**
         * The warehouse code used to filter sales stockouts.
         * @minLength 1
         * @pattern \S
         */
        warehouseNo?: string;
        /** Whether the time range should use last-modified time instead of consign time. */
        queryByModified?: boolean;
        /** Whether to include warehouse position details in returned stockout records. */
        includePositionDetails?: boolean;
        /** Whether to return only stock-related data. */
        stockOnly?: boolean;
        /**
         * The zero-based page number. Defaults to 0.
         * @minimum 0
         */
        pageNo?: number;
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** One sales stockout record returned by Wangdian. */
        stockouts: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when Wangdian omits it after page 0.
         * @minimum 0
         */
        totalCount: number | null;
      };
    };
    /** List shop records configured in Wangdian ERP Enterprise Edition. */
    "wangdian.list_shops": {
      input: {
        /**
         * The shop code to retrieve.
         * @minLength 1
         * @pattern \S
         */
        shopNo?: string;
        /**
         * The Wangdian platform ID used to filter shops.
         * @minimum 0
         */
        platformId?: number;
        /**
         * The Wangdian platform IDs used to filter shops.
         * @minItems 1
         */
        platformIds?: Array<number>;
        /** Whether to return disabled shops. Omit this field to return enabled shops. */
        disabled?: boolean;
        /**
         * The zero-based page number. Defaults to 0.
         * @minimum 0
         */
        pageNo?: number;
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** One shop record returned by Wangdian. */
        shops: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when Wangdian omits it after page 0.
         * @minimum 0
         */
        totalCount: number | null;
      };
    };
    /** List warehouse records configured in Wangdian ERP Enterprise Edition. */
    "wangdian.list_warehouses": {
      input: {
        /**
         * The warehouse code to retrieve.
         * @minLength 1
         * @pattern \S
         */
        warehouseNo?: string;
        /** The Wangdian warehouse type code used to filter results. */
        warehouseType?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 20 | 22 | 126 | 127;
        /**
         * The subtype used for warehouses whose type is Other.
         * @minimum 1
         * @maximum 2
         */
        subType?: number;
        /** Whether to return disabled warehouses. Omit this field to return enabled warehouses. */
        disabled?: boolean;
        /**
         * The zero-based page number. Defaults to 0.
         * @minimum 0
         */
        pageNo?: number;
        /**
         * The number of records to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** One warehouse record returned by Wangdian. */
        warehouses: Array<Record<string, unknown>>;
        /**
         * The total number of matching records, or null when Wangdian omits it after page 0.
         * @minimum 0
         */
        totalCount: number | null;
      };
    };
  }
}
