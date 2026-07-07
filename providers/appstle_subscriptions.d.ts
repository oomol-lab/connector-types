import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Appstle customer details including subscription contract information. */
    "appstle_subscriptions.get_customer_with_subscriptions": {
      input: {
        /**
         * Numeric Shopify customer ID, without a gid:// prefix.
         * @exclusiveMinimum 0
         */
        customerId: number;
        /**
         * Pagination cursor returned by Appstle for subscription contracts.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Appstle customer detail object. */
        customer: Record<string, unknown> | null;
      };
    };
    /** Return valid Appstle subscription contract IDs for a Shopify customer. */
    "appstle_subscriptions.get_valid_subscription_contract_ids": {
      input: {
        /**
         * Numeric Shopify customer ID, without a gid:// prefix.
         * @exclusiveMinimum 0
         */
        customerId: number;
      };
      output: {
        /** Numeric Shopify subscription contract IDs returned by Appstle. */
        contractIds: Array<number>;
      };
    };
    /** List detailed Appstle subscription contract records for a Shopify customer. */
    "appstle_subscriptions.list_customer_subscription_details": {
      input: {
        /**
         * Numeric Shopify customer ID, without a gid:// prefix.
         * @exclusiveMinimum 0
         */
        customerId: number;
      };
      output: {
        /** Detailed Appstle subscription contract objects. */
        subscriptions: Array<Record<string, unknown>>;
      };
    };
    /** List customers who have Appstle subscription contracts with optional filters and pagination. */
    "appstle_subscriptions.list_customers_with_subscriptions": {
      input: {
        /**
         * Filter customers by name. Partial matches are supported.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter customers by exact email address.
         * @format email
         */
        email?: string;
        /** Whether to return only customers with more than one active subscription. */
        activeMoreThanOneSubscription?: boolean;
        /**
         * Zero-based page number to request from Appstle.
         * @minimum 0
         */
        page?: number;
        /**
         * Page size for the customer list.
         * @exclusiveMinimum 0
         */
        size?: number;
        /** Spring pageable sort directives such as id,desc. */
        sort?: Array<string>;
      };
      output: {
        /** Customers returned by Appstle. */
        customers: Array<{
          /** Numeric Shopify customer ID. */
          customerId?: number;
          /** Customer name returned by Appstle. */
          name?: string;
          /** Customer email address returned by Appstle. */
          email?: string;
          /** Number of active subscriptions for the customer. */
          activeSubscriptions?: number;
          /** Number of inactive subscriptions for the customer. */
          inActiveSubscriptions?: number;
          /** Customer lifetime value returned by Appstle. */
          lifetimeValue?: number;
          /**
           * Next subscription order timestamp, when present.
           * @format date-time
           */
          nextOrderDate?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
