import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get CaptainBI product traffic, order, conversion, and sales metrics. */
    "captainbi.get_business_report": {
      input: {
        /**
         * The CaptainBI OpenChannelId returned by list_stores for the target store.
         * @minLength 1
         */
        openChannelId: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        startCreateTime: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        endCreateTime: number;
      };
      output: {
        /** The metrics returned for this page. */
        metrics: Array<{
          /** The CaptainBI business report record identifier. */
          id?: number;
          /** The parent Amazon ASIN. */
          parentAsin?: string;
          /** The Amazon ASIN. */
          asin?: string;
          /** The seller SKU. */
          sku?: string;
          /** The product title. */
          title?: string;
          /** The number of product visits returned by CaptainBI. */
          visits?: string;
          /** The percentage of visits attributed to buyers. */
          buyerVisitPercentage?: number;
          /** The product browse percentage. */
          browsePercentage?: number;
          /** The buy box winning rate returned by CaptainBI. */
          buyBoxWinRate?: string;
          /** The quantity of goods ordered. */
          unitsOrdered?: number;
          /** The B2B quantity of goods ordered. */
          b2bUnitsOrdered?: number;
          /** The order conversion rate. */
          conversionRate?: number;
          /** The B2B order conversion rate. */
          b2bConversionRate?: number;
          /** The sales amount for ordered goods. */
          sales?: number;
          /** The B2B sales amount for ordered goods. */
          b2bSales?: number;
          [key: string]: unknown;
        }>;
        /** The one-based page number used for this request. */
        page: number;
        /** The requested page size. */
        pageSize: number;
        /**
         * The total number of records when CaptainBI reports max_result.
         * @minimum 0
         */
        total: number | null;
        /** Whether more records exist when CaptainBI reports a total, otherwise null. */
        hasMore: boolean | null;
        /** The message returned by CaptainBI, or null when absent. */
        message: string | null;
      };
    };
    /** Get a CaptainBI product profit report by day or month and by order or financial accounting basis. */
    "captainbi.get_product_profit_report": {
      input: {
        /**
         * The CaptainBI OpenChannelId returned by list_stores for the target store.
         * @minLength 1
         */
        openChannelId: string;
        /** Whether to return a daily or monthly profit report. */
        period: "day" | "month";
        /** Whether CaptainBI should group the report by order date or financial settlement date. */
        accountingBasis: "order" | "finance";
        /**
         * The report date in YYYYMMDD for day or YYYYMM for month.
         * @pattern ^[0-9]{6}([0-9]{2})?$
         */
        reportDate: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
      };
      output: {
        /** The profits returned for this page. */
        profits: Array<{
          /** The seller SKU when the report includes a product dimension. */
          sku?: string;
          /** The CaptainBI store identifier. */
          channelId?: number;
          /** The CaptainBI site identifier. */
          siteId?: number;
          /** The report period returned by CaptainBI. */
          reportTime?: string;
          /** The total income reported by CaptainBI. */
          totalIncome?: number;
          /** The total expenses reported by CaptainBI. */
          totalExpenses?: number;
          /** The gross profit reported by CaptainBI. */
          profit?: number;
          /** The gross profit rate reported by CaptainBI. */
          profitRate?: number;
          /** The product sales amount reported by CaptainBI. */
          sales?: number;
          /** The sales refund amount reported by CaptainBI. */
          refundAmount?: number;
          /** The sales quantity reported by CaptainBI. */
          unitsSold?: number;
          /** The returned quantity reported by CaptainBI. */
          unitsReturned?: number;
          /** The advertising cost reported by CaptainBI. */
          advertisingCost?: number;
          /** The purchase or product cost reported by CaptainBI. */
          productCost?: number;
          /** The logistics cost reported by CaptainBI. */
          logisticsCost?: number;
          /** The total platform expenses reported by CaptainBI. */
          platformExpenses?: number;
          [key: string]: unknown;
        }>;
        /** The one-based page number used for this request. */
        page: number;
        /** The requested page size. */
        pageSize: number;
        /**
         * The total number of records when CaptainBI reports max_result.
         * @minimum 0
         */
        total: number | null;
        /** Whether more records exist when CaptainBI reports a total, otherwise null. */
        hasMore: boolean | null;
        /** The message returned by CaptainBI, or null when absent. */
        message: string | null;
      };
    };
    /** Get a CaptainBI store profit report by day or month and by order or financial accounting basis. */
    "captainbi.get_store_profit_report": {
      input: {
        /**
         * The CaptainBI OpenChannelId returned by list_stores for the target store.
         * @minLength 1
         */
        openChannelId: string;
        /** Whether to return a daily or monthly profit report. */
        period: "day" | "month";
        /** Whether CaptainBI should group the report by order date or financial settlement date. */
        accountingBasis: "order" | "finance";
        /**
         * The report date in YYYYMMDD for day or YYYYMM for month.
         * @pattern ^[0-9]{6}([0-9]{2})?$
         */
        reportDate: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
      };
      output: {
        /** The profits returned for this page. */
        profits: Array<{
          /** The seller SKU when the report includes a product dimension. */
          sku?: string;
          /** The CaptainBI store identifier. */
          channelId?: number;
          /** The CaptainBI site identifier. */
          siteId?: number;
          /** The report period returned by CaptainBI. */
          reportTime?: string;
          /** The total income reported by CaptainBI. */
          totalIncome?: number;
          /** The total expenses reported by CaptainBI. */
          totalExpenses?: number;
          /** The gross profit reported by CaptainBI. */
          profit?: number;
          /** The gross profit rate reported by CaptainBI. */
          profitRate?: number;
          /** The product sales amount reported by CaptainBI. */
          sales?: number;
          /** The sales refund amount reported by CaptainBI. */
          refundAmount?: number;
          /** The sales quantity reported by CaptainBI. */
          unitsSold?: number;
          /** The returned quantity reported by CaptainBI. */
          unitsReturned?: number;
          /** The advertising cost reported by CaptainBI. */
          advertisingCost?: number;
          /** The purchase or product cost reported by CaptainBI. */
          productCost?: number;
          /** The logistics cost reported by CaptainBI. */
          logisticsCost?: number;
          /** The total platform expenses reported by CaptainBI. */
          platformExpenses?: number;
          [key: string]: unknown;
        }>;
        /** The one-based page number used for this request. */
        page: number;
        /** The requested page size. */
        pageSize: number;
        /**
         * The total number of records when CaptainBI reports max_result.
         * @minimum 0
         */
        total: number | null;
        /** Whether more records exist when CaptainBI reports a total, otherwise null. */
        hasMore: boolean | null;
        /** The message returned by CaptainBI, or null when absent. */
        message: string | null;
      };
    };
    /** List CaptainBI FBA inventory, recent sales, and replenishment indicators. */
    "captainbi.list_inventory": {
      input: {
        /**
         * The CaptainBI OpenChannelId returned by list_stores for the target store.
         * @minLength 1
         */
        openChannelId: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        startModifiedTime: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        endModifiedTime: number;
        /**
         * An exact or partial SKU filter accepted by CaptainBI.
         * @minLength 1
         */
        sku?: string;
        /**
         * An exact or partial ASIN filter accepted by CaptainBI.
         * @minLength 1
         */
        asin?: string;
      };
      output: {
        /** The inventory returned for this page. */
        inventory: Array<{
          /** The CaptainBI inventory record identifier. */
          id?: number;
          /** The product title. */
          title?: string;
          /** The Amazon ASIN. */
          asin?: string;
          /** The seller SKU. */
          sku?: string;
          /** The quantity currently available for sale. */
          fulfillableQuantity?: number;
          /** The inbound quantity already shipped. */
          inboundShippedQuantity?: number;
          /** The inbound quantity currently being received. */
          inboundReceivingQuantity?: number;
          /** The inbound quantity currently being prepared. */
          inboundWorkingQuantity?: number;
          /** The reserved inventory quantity. */
          reservedQuantity?: number;
          /** The unsellable inventory quantity. */
          unsellableQuantity?: number;
          /** The quantity sold yesterday. */
          sales1Day?: number;
          /** The quantity sold during the last seven days. */
          sales7Days?: number;
          /** The quantity sold during the last thirty days. */
          sales30Days?: number;
          /** The average daily sales quantity reported by CaptainBI. */
          averageDailySales?: number;
          /** The estimated number of days the available inventory will last. */
          availableDays?: string;
          /** The replenishment quantity suggested by CaptainBI. */
          replenishmentQuantity?: string;
          /** The replenishment time suggested by CaptainBI. */
          suggestedReplenishmentTime?: string;
          [key: string]: unknown;
        }>;
        /** The one-based page number used for this request. */
        page: number;
        /** The requested page size. */
        pageSize: number;
        /**
         * The total number of records when CaptainBI reports max_result.
         * @minimum 0
         */
        total: number | null;
        /** Whether more records exist when CaptainBI reports a total, otherwise null. */
        hasMore: boolean | null;
        /** The message returned by CaptainBI, or null when absent. */
        message: string | null;
      };
    };
    /** List extended CaptainBI product cost, price, operator, group, and tag data. */
    "captainbi.list_product_details": {
      input: {
        /**
         * The CaptainBI OpenChannelId returned by list_stores for the target store.
         * @minLength 1
         */
        openChannelId: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        startModifiedTime: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        endModifiedTime: number;
      };
      output: {
        /** The productDetails returned for this page. */
        productDetails: Array<{
          /** The related CaptainBI product identifier. */
          productId?: number;
          /** The Amazon FNSKU. */
          fnsku?: string;
          /** The purchase cost currency code. */
          purchaseCostCurrency?: string;
          /** The purchase cost in its source currency. */
          purchaseCost?: number;
          /** The purchase cost converted to CNY. */
          purchaseCostCny?: number;
          /** The FBA cost currency code. */
          fbaCostCurrency?: string;
          /** The FBA cost in its source currency. */
          fbaCost?: number;
          /** The FBA cost converted to CNY. */
          fbaCostCny?: number;
          /** The FBM cost currency code. */
          fbmCostCurrency?: string;
          /** The FBM cost in its source currency. */
          fbmCost?: number;
          /** The FBM cost converted to CNY. */
          fbmCostCny?: number;
          /** The current product price. */
          price?: number;
          /** The current product sale price. */
          salePrice?: number;
          /** The CaptainBI product group identifier. */
          groupId?: number;
          /** The CaptainBI product operator identifier. */
          operatorId?: number;
          /** The CaptainBI product tag identifier list. */
          tagIds?: string;
          /** The extended product record creation timestamp. */
          createdAt?: number;
          /** The extended product record modification timestamp. */
          modifiedAt?: number;
          [key: string]: unknown;
        }>;
        /** The one-based page number used for this request. */
        page: number;
        /** The requested page size. */
        pageSize: number;
        /**
         * The total number of records when CaptainBI reports max_result.
         * @minimum 0
         */
        total: number | null;
        /** Whether more records exist when CaptainBI reports a total, otherwise null. */
        hasMore: boolean | null;
        /** The message returned by CaptainBI, or null when absent. */
        message: string | null;
      };
    };
    /** List CaptainBI product records modified during a controlled time window. */
    "captainbi.list_products": {
      input: {
        /**
         * The CaptainBI OpenChannelId returned by list_stores for the target store.
         * @minLength 1
         */
        openChannelId: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        startModifiedTime: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        endModifiedTime: number;
      };
      output: {
        /** The products returned for this page. */
        products: Array<{
          /** The CaptainBI product identifier. */
          id?: number;
          /** The CaptainBI site identifier. */
          siteId?: number;
          /** The seller SKU. */
          sku?: string;
          /** The Amazon ASIN. */
          asin?: string;
          /** The parent Amazon ASIN. */
          parentAsin?: string;
          /** The CaptainBI transport mode code, where 1 is FBM and 2 is FBA. */
          transportMode?: number;
          /** The product title. */
          title?: string;
          /** The product description. */
          description?: string;
          /** The product image URL. */
          imageUrl?: string;
          /** The product price. */
          price?: number;
          /** The CaptainBI product publication status code. */
          status?: number;
          /** The CaptainBI listing status code. */
          listingStatus?: number;
          /** Whether CaptainBI marks the product as deleted. */
          deleted?: boolean;
          /** The product creation timestamp. */
          createdAt?: number;
          /** The product modification timestamp. */
          modifiedAt?: number;
          [key: string]: unknown;
        }>;
        /** The one-based page number used for this request. */
        page: number;
        /** The requested page size. */
        pageSize: number;
        /**
         * The total number of records when CaptainBI reports max_result.
         * @minimum 0
         */
        total: number | null;
        /** Whether more records exist when CaptainBI reports a total, otherwise null. */
        hasMore: boolean | null;
        /** The message returned by CaptainBI, or null when absent. */
        message: string | null;
      };
    };
    /** List CaptainBI refund status, quantity, reason, and fee records without buyer PII. */
    "captainbi.list_refunds": {
      input: {
        /**
         * The CaptainBI OpenChannelId returned by list_stores for the target store.
         * @minLength 1
         */
        openChannelId: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        startModifiedTime: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        endModifiedTime: number;
        /**
         * A report date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        reportDate?: string;
      };
      output: {
        /** The refunds returned for this page. */
        refunds: Array<{
          /** The CaptainBI refund record identifier. */
          id?: number;
          /** The related Amazon order identifier. */
          orderId?: string;
          /** The CaptainBI store identifier. */
          channelId?: number;
          /** The Amazon ASIN. */
          asin?: string;
          /** The seller SKU. */
          sku?: string;
          /** The order timestamp. */
          orderTime?: number;
          /** The refund timestamp. */
          refundTime?: number;
          /** The returned-goods timestamp when present. */
          returnedDate?: number;
          /** The refunded quantity. */
          quantity?: number;
          /** The refund amount. */
          refundAmount?: number;
          /** The returned commission amount. */
          returnCommission?: number;
          /** The refunded distribution fee. */
          distributionFee?: number;
          /** The FBA refund treatment fee. */
          fbaRefundTreatmentFee?: number;
          /** The FBA refund fee. */
          fbaRefundFee?: number;
          /** The refund management fee. */
          refundManagementFee?: number;
          /** The refund reason. */
          reason?: string;
          /** The returned inventory disposition. */
          disposition?: string;
          /** The refund status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** The one-based page number used for this request. */
        page: number;
        /** The requested page size. */
        pageSize: number;
        /**
         * The total number of records when CaptainBI reports max_result.
         * @minimum 0
         */
        total: number | null;
        /** Whether more records exist when CaptainBI reports a total, otherwise null. */
        hasMore: boolean | null;
        /** The message returned by CaptainBI, or null when absent. */
        message: string | null;
      };
    };
    /** List CaptainBI return records without exposing customer comments or buyer contacts. */
    "captainbi.list_returns": {
      input: {
        /**
         * The CaptainBI OpenChannelId returned by list_stores for the target store.
         * @minLength 1
         */
        openChannelId: string;
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        startModifiedTime: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        endModifiedTime: number;
        /**
         * A report date in YYYYMMDD format.
         * @pattern ^[0-9]{8}$
         */
        reportDate?: string;
      };
      output: {
        /** The returns returned for this page. */
        returns: Array<{
          /** The CaptainBI return record identifier. */
          id?: number;
          /** The related Amazon order identifier. */
          orderId?: string;
          /** The CaptainBI store identifier. */
          channelId?: number;
          /** The Amazon ASIN. */
          asin?: string;
          /** The seller SKU. */
          sku?: string;
          /** The order timestamp. */
          orderTime?: number;
          /** The return date returned by CaptainBI. */
          returnDate?: number;
          /** The returned quantity. */
          quantity?: number;
          /** The return reason. */
          reason?: string;
          /** The return status. */
          status?: string;
          /** The Amazon fulfillment center identifier. */
          fulfillmentCenterId?: string;
          /** The detailed inventory disposition. */
          disposition?: string;
          [key: string]: unknown;
        }>;
        /** The one-based page number used for this request. */
        page: number;
        /** The requested page size. */
        pageSize: number;
        /**
         * The total number of records when CaptainBI reports max_result.
         * @minimum 0
         */
        total: number | null;
        /** Whether more records exist when CaptainBI reports a total, otherwise null. */
        hasMore: boolean | null;
        /** The message returned by CaptainBI, or null when absent. */
        message: string | null;
      };
    };
    /** List Amazon stores authorized for the connected CaptainBI API credential. */
    "captainbi.list_stores": {
      input: {
        /**
         * The one-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Defaults to 100.
         * @minimum 1
         * @maximum 100
         */
        rows?: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        startModifiedTime?: number;
        /**
         * A CaptainBI Unix timestamp in seconds or milliseconds. The start and end timestamps must use the same unit.
         * @minimum 0
         */
        endModifiedTime?: number;
      };
      output: {
        /** The stores returned for this page. */
        stores: Array<{
          /** The CaptainBI store identifier. */
          id?: number;
          /** The CaptainBI site identifier. */
          siteId?: number;
          /** The store name. */
          name?: string;
          /** The Amazon merchant identifier. */
          merchantId?: string;
          /** The OpenChannelId required by store-scoped CaptainBI actions. */
          openChannelId?: string;
          /** The CaptainBI store status code. */
          status?: number;
          /** The CaptainBI goods operation mode code. */
          operationMode?: number;
          /** The store authorization timestamp. */
          createdAt?: number;
          /** The store modification timestamp. */
          modifiedAt?: number;
          [key: string]: unknown;
        }>;
        /** The one-based page number used for this request. */
        page: number;
        /** The requested page size. */
        pageSize: number;
        /**
         * The total number of records when CaptainBI reports max_result.
         * @minimum 0
         */
        total: number | null;
        /** Whether more records exist when CaptainBI reports a total, otherwise null. */
        hasMore: boolean | null;
        /** The message returned by CaptainBI, or null when absent. */
        message: string | null;
      };
    };
  }
}
