import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a customer by its SamCart ID. */
    "samcart.get_customer": {
      input: {
        /**
         * The SamCart ID of the customer.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The SamCart ID of the customer. */
        id?: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve an order by its SamCart ID. */
    "samcart.get_order": {
      input: {
        /**
         * The SamCart ID of the order.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The SamCart ID of the order. */
        id?: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve a product by its SamCart ID. */
    "samcart.get_product": {
      input: {
        /**
         * The SamCart ID of the product.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The SamCart ID of the product. */
        id?: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve a subscription by its SamCart ID. */
    "samcart.get_subscription": {
      input: {
        /**
         * The SamCart ID of the subscription.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** The SamCart ID of the subscription. */
        id?: number;
        [key: string]: unknown;
      };
    };
    /** List customers in the connected SamCart marketplace. */
    "samcart.list_customers": {
      input: {
        /** Return records created at or after this ISO 8601 date or timestamp. */
        created_at_min?: string;
        /** Return records created at or before this ISO 8601 date or timestamp. */
        created_at_max?: string;
        /**
         * The record ID used as the pagination cursor.
         * @minimum 1
         */
        offset?: number;
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The direction in which to move from the pagination cursor. */
        dir?: "next" | "prev";
        /** One email address or up to 25 comma-separated email addresses to match exactly. */
        email?: string;
      };
      output: {
        /** The customers returned on this page. */
        data: Array<{
          /** The SamCart ID of the customers. */
          id?: number;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by SamCart for this page. */
        pagination: {
          /** The URL for the next page, when one is available. */
          next?: string | null;
          /** The URL for the previous page, when one is available. */
          prev?: string | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List orders in the connected SamCart marketplace. */
    "samcart.list_orders": {
      input: {
        /** Return records created at or after this ISO 8601 date or timestamp. */
        created_at_min?: string;
        /** Return records created at or before this ISO 8601 date or timestamp. */
        created_at_max?: string;
        /**
         * The record ID used as the pagination cursor.
         * @minimum 1
         */
        offset?: number;
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The direction in which to move from the pagination cursor. */
        dir?: "next" | "prev";
        /** Whether to return only test-mode records. */
        test_mode?: boolean;
      };
      output: {
        /** The orders returned on this page. */
        data: Array<{
          /** The SamCart ID of the orders. */
          id?: number;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by SamCart for this page. */
        pagination: {
          /** The URL for the next page, when one is available. */
          next?: string | null;
          /** The URL for the previous page, when one is available. */
          prev?: string | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List products in the connected SamCart marketplace. */
    "samcart.list_products": {
      input: {
        /** Return records created at or after this ISO 8601 date or timestamp. */
        created_at_min?: string;
        /** Return records created at or before this ISO 8601 date or timestamp. */
        created_at_max?: string;
        /**
         * The record ID used as the pagination cursor.
         * @minimum 1
         */
        offset?: number;
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The direction in which to move from the pagination cursor. */
        dir?: "next" | "prev";
        /** The product status to return. */
        status?: "live" | "test" | "archived";
        /** The product category to return. */
        product_category?: "physical" | "digital";
        /** The product pricing type to return. */
        pricing_type?: "one_time" | "limited_subscription" | "recurring_subscription" | "pwyw_one_time" | "pwyw_recurring_subscription" | "pwyw_limited_subscription";
      };
      output: {
        /** The products returned on this page. */
        data: Array<{
          /** The SamCart ID of the products. */
          id?: number;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by SamCart for this page. */
        pagination: {
          /** The URL for the next page, when one is available. */
          next?: string | null;
          /** The URL for the previous page, when one is available. */
          prev?: string | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List subscriptions in the connected SamCart marketplace. */
    "samcart.list_subscriptions": {
      input: {
        /** Return records created at or after this ISO 8601 date or timestamp. */
        created_at_min?: string;
        /** Return records created at or before this ISO 8601 date or timestamp. */
        created_at_max?: string;
        /**
         * The record ID used as the pagination cursor.
         * @minimum 1
         */
        offset?: number;
        /**
         * The maximum number of records to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The direction in which to move from the pagination cursor. */
        dir?: "next" | "prev";
        /** Return subscriptions rebilling at or after this ISO 8601 date or timestamp. */
        rebilling_at_min?: string;
        /** Return subscriptions rebilling at or before this ISO 8601 date or timestamp. */
        rebilling_at_max?: string;
        /** Return subscriptions canceled at or after this ISO 8601 date or timestamp. */
        canceled_at_min?: string;
        /** Return subscriptions canceled at or before this ISO 8601 date or timestamp. */
        canceled_at_max?: string;
        /** The subscription status to return. */
        status?: "active" | "canceled" | "delinquent" | "completed" | "paused" | "invalid_processor" | "sca_required" | "deleted";
        /** The subscription type to return. */
        type?: "limited_subscription" | "recurring_subscription";
        /** Whether to return only test-mode records. */
        test_mode?: boolean;
      };
      output: {
        /** The subscriptions returned on this page. */
        data: Array<{
          /** The SamCart ID of the subscriptions. */
          id?: number;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by SamCart for this page. */
        pagination: {
          /** The URL for the next page, when one is available. */
          next?: string | null;
          /** The URL for the previous page, when one is available. */
          prev?: string | null;
          [key: string]: unknown;
        } | null;
      };
    };
  }
}
