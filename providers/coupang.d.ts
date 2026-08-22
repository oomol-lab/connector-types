import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the stock quantity, sale price, and sale status of one Coupang item. */
    "coupang.get_item_inventory": {
      input: {
        /**
         * The Coupang vendor item ID.
         * @exclusiveMinimum 0
         */
        vendorItemId: number;
      };
      output: {
        /** The result code returned by Coupang. */
        code: string | number;
        /** The result message returned by Coupang. */
        message: string;
        /** The Coupang record returned by the endpoint. */
        data: Record<string, unknown>;
      };
    };
    /** Get current purchase-order and receiver details for one Coupang order. */
    "coupang.get_order": {
      input: {
        /**
         * The numeric Coupang order ID.
         * @exclusiveMinimum 0
         */
        orderId: number;
      };
      output: {
        /** The result code returned by Coupang. */
        code: string | number;
        /** The result message returned by Coupang. */
        message: string;
        /** The token for the next page when another page exists. */
        nextToken: string | null;
        /** Purchase-order records. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Get the registered details of one Coupang seller product. */
    "coupang.get_product": {
      input: {
        /**
         * The registered Coupang seller product ID.
         * @exclusiveMinimum 0
         */
        sellerProductId: number;
      };
      output: {
        /** The result code returned by Coupang. */
        code: string | number;
        /** The result message returned by Coupang. */
        message: string;
        /** The Coupang record returned by the endpoint. */
        data: Record<string, unknown>;
      };
    };
    /** List Coupang purchase orders for a date range and fulfillment status. */
    "coupang.list_orders": {
      input: {
        /** The query start in Coupang ISO-8601 form, such as 2026-08-01+09:00. */
        createdAtFrom: string;
        /** The query end in Coupang ISO-8601 form, up to 31 days after the start. */
        createdAtTo: string;
        /** The purchase-order fulfillment status. */
        status: "ACCEPT" | "INSTRUCT" | "DEPARTURE" | "DELIVERING" | "FINAL_DELIVERY" | "NONE_TRACKING";
        /** The next-page token returned by a previous order query. */
        nextToken?: string;
        /**
         * The maximum number of orders to return, up to 50.
         * @minimum 1
         * @maximum 50
         */
        maxPerPage?: number;
      };
      output: {
        /** The result code returned by Coupang. */
        code: string | number;
        /** The result message returned by Coupang. */
        message: string;
        /** The token for the next page when another page exists. */
        nextToken: string | null;
        /** Coupang purchase orders. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List seller products in Coupang with optional filters and cursor pagination. */
    "coupang.list_products": {
      input: {
        /** The next-page token returned by a previous product query. */
        nextToken?: string;
        /**
         * The maximum number of products to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        maxPerPage?: number;
        /**
         * A Coupang seller product ID to match.
         * @exclusiveMinimum 0
         */
        sellerProductId?: number;
        /**
         * A seller product name to search for, up to 20 characters.
         * @maxLength 20
         */
        sellerProductName?: string;
        /** The seller product approval status to match. */
        status?: "IN_REVIEW" | "SAVED" | "APPROVING" | "APPROVED" | "PARTIAL_APPROVED" | "DENIED" | "DELETED";
        /** The product manufacturer to match. */
        manufacture?: string;
        /** The product creation date in YYYY-MM-DD format. */
        createdAt?: string;
      };
      output: {
        /** The result code returned by Coupang. */
        code: string | number;
        /** The result message returned by Coupang. */
        message: string;
        /** The token for the next page when another page exists. */
        nextToken: string | null;
        /** Coupang seller products. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List Coupang return or cancellation requests submitted in a time range. */
    "coupang.list_return_requests": {
      input: {
        /** The start date or minute in YYYY-MM-DD or YYYY-MM-DDTHH:mm form. */
        createdAtFrom: string;
        /** The end date or minute in YYYY-MM-DD or YYYY-MM-DDTHH:mm form. */
        createdAtTo: string;
        /** Set this to timeFrame for a minute-level query; omit it for a daily paginated query. */
        searchType?: "timeFrame";
        /** The Coupang return request status to match. */
        status?: "RU" | "UC" | "CC" | "PR";
        /** Whether to list returns or payment-stage cancellations. */
        cancelType?: "RETURN" | "CANCEL";
        /** The next-page token returned by a previous daily query. */
        nextToken?: string;
        /**
         * The maximum number of daily results to return.
         * @minimum 1
         */
        maxPerPage?: number;
        /**
         * A specific Coupang order ID to match.
         * @exclusiveMinimum 0
         */
        orderId?: number;
      };
      output: {
        /** The result code returned by Coupang. */
        code: string | number;
        /** The result message returned by Coupang. */
        message: string;
        /** The token for the next page when another page exists. */
        nextToken: string | null;
        /** Coupang return or cancellation requests. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Replace the selling price and optional auto-pricing settings of one Coupang item. */
    "coupang.update_item_price": {
      input: {
        /**
         * The Coupang vendor item ID.
         * @exclusiveMinimum 0
         */
        vendorItemId: number;
        /**
         * The replacement selling price in whole currency units.
         * @exclusiveMinimum 0
         */
        price: number;
        /** Whether to bypass Coupang's normal price-change range. */
        forceSalePriceUpdate?: boolean;
        /**
         * The minimum sale price used by automatic pricing.
         * @exclusiveMinimum 0
         */
        apMinSalePrice?: number;
        /** Whether automatic pricing is enabled. */
        apActive?: boolean;
      };
      output: {
        /** The result code returned by Coupang. */
        code: string | number;
        /** The result message returned by Coupang. */
        message: string;
      };
    };
    /** Replace the available inventory quantity of one Coupang item. */
    "coupang.update_item_quantity": {
      input: {
        /**
         * The Coupang vendor item ID.
         * @exclusiveMinimum 0
         */
        vendorItemId: number;
        /**
         * The replacement inventory quantity.
         * @minimum 0
         */
        quantity: number;
      };
      output: {
        /** The result code returned by Coupang. */
        code: string | number;
        /** The result message returned by Coupang. */
        message: string;
      };
    };
  }
}
