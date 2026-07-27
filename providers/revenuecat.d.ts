import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a RevenueCat customer and optionally expand the customer's attributes. */
    "revenuecat.get_customer": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /**
         * RevenueCat customer or app user ID.
         * @minLength 1
         * @maxLength 1500
         */
        customerId: string;
        /**
         * Optional customer fields to expand in the response.
         * @maxItems 1
         */
        expand?: Array<"attributes">;
      };
      output: {
        /** A RevenueCat customer. */
        customer: Record<string, unknown>;
      };
    };
    /** Retrieve overview metrics for a RevenueCat project. */
    "revenuecat.get_overview_metrics": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /** Currency used for the returned RevenueCat metrics. */
        currency?: "USD" | "EUR" | "GBP" | "AUD" | "CAD" | "JPY" | "BRL" | "KRW" | "CNY" | "MXN" | "SEK" | "PLN" | "NZD" | "CHF";
      };
      output: {
        /** RevenueCat project overview metrics. */
        metrics: Record<string, unknown>;
      };
    };
    /** Retrieve total RevenueCat project revenue for an inclusive date range. */
    "revenuecat.get_revenue_metric": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /**
         * Inclusive start date in ISO 8601 format.
         * @format date
         */
        startDate: string;
        /**
         * Inclusive end date in ISO 8601 format.
         * @format date
         */
        endDate: string;
        /** Currency used for the returned RevenueCat metrics. */
        currency?: "USD" | "EUR" | "GBP" | "AUD" | "CAD" | "JPY" | "BRL" | "KRW" | "CNY" | "MXN" | "SEK" | "PLN" | "NZD" | "CHF";
        /** Revenue definition returned as the metric value. */
        revenueType?: "revenue" | "revenue_net_of_taxes" | "proceeds";
      };
      output: {
        /** RevenueCat revenue metric data. */
        metric: Record<string, unknown>;
      };
    };
    /** Retrieve a RevenueCat subscription by its subscription ID. */
    "revenuecat.get_subscription": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /**
         * RevenueCat subscription ID.
         * @minLength 1
         * @maxLength 1500
         */
        subscriptionId: string;
      };
      output: {
        /** A RevenueCat subscription. */
        subscription: Record<string, unknown>;
      };
    };
    /** List the entitlements currently active for a RevenueCat customer. */
    "revenuecat.list_customer_active_entitlements": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /**
         * RevenueCat customer or app user ID.
         * @minLength 1
         * @maxLength 1500
         */
        customerId: string;
        /** Return records after this RevenueCat cursor. */
        startingAfter?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RevenueCat list response marker. */
        object: string;
        /** Records returned by RevenueCat. */
        items: Array<Record<string, unknown>>;
        /** URL for the next page, or null when there are no more records. */
        nextPage: string | null;
        /** URL of the current RevenueCat list response. */
        url: string;
      };
    };
    /** List subscriptions belonging to a RevenueCat customer. */
    "revenuecat.list_customer_subscriptions": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /**
         * RevenueCat customer or app user ID.
         * @minLength 1
         * @maxLength 1500
         */
        customerId: string;
        /** Return records after this RevenueCat cursor. */
        startingAfter?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RevenueCat list response marker. */
        object: string;
        /** Records returned by RevenueCat. */
        items: Array<Record<string, unknown>>;
        /** URL for the next page, or null when there are no more records. */
        nextPage: string | null;
        /** URL of the current RevenueCat list response. */
        url: string;
      };
    };
    /** List customers in a RevenueCat project, optionally searching by email or customer identifier. */
    "revenuecat.list_customers": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /** Return records after this RevenueCat cursor. */
        startingAfter?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Search by customer email, app user ID, store transaction identifier, or Apple order ID.
         * @minLength 1
         * @maxLength 255
         */
        search?: string;
      };
      output: {
        /** RevenueCat list response marker. */
        object: string;
        /** Records returned by RevenueCat. */
        items: Array<Record<string, unknown>>;
        /** URL for the next page, or null when there are no more records. */
        nextPage: string | null;
        /** URL of the current RevenueCat list response. */
        url: string;
      };
    };
    /** List entitlement definitions configured in a RevenueCat project. */
    "revenuecat.list_entitlements": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /** Return records after this RevenueCat cursor. */
        startingAfter?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RevenueCat list response marker. */
        object: string;
        /** Records returned by RevenueCat. */
        items: Array<Record<string, unknown>>;
        /** URL for the next page, or null when there are no more records. */
        nextPage: string | null;
        /** URL of the current RevenueCat list response. */
        url: string;
      };
    };
    /** List offerings configured in a RevenueCat project, optionally expanding packages and products. */
    "revenuecat.list_offerings": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /** Return records after this RevenueCat cursor. */
        startingAfter?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Optional Offering fields to expand in the response.
         * @maxItems 2
         */
        expand?: Array<"items.package" | "items.package.product">;
      };
      output: {
        /** RevenueCat list response marker. */
        object: string;
        /** Records returned by RevenueCat. */
        items: Array<Record<string, unknown>>;
        /** URL for the next page, or null when there are no more records. */
        nextPage: string | null;
        /** URL of the current RevenueCat list response. */
        url: string;
      };
    };
    /** List products configured in a RevenueCat project. */
    "revenuecat.list_products": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /** Return records after this RevenueCat cursor. */
        startingAfter?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RevenueCat list response marker. */
        object: string;
        /** Records returned by RevenueCat. */
        items: Array<Record<string, unknown>>;
        /** URL for the next page, or null when there are no more records. */
        nextPage: string | null;
        /** URL of the current RevenueCat list response. */
        url: string;
      };
    };
    /** List RevenueCat projects accessible to the configured secret API key. */
    "revenuecat.list_projects": {
      input: {
        /** Return records after this RevenueCat cursor. */
        startingAfter?: string;
        /**
         * Maximum number of records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** RevenueCat list response marker. */
        object: string;
        /** Records returned by RevenueCat. */
        items: Array<Record<string, unknown>>;
        /** URL for the next page, or null when there are no more records. */
        nextPage: string | null;
        /** URL of the current RevenueCat list response. */
        url: string;
      };
    };
    /** Find subscriptions by a store subscription identifier such as an Apple transaction ID or Google order ID. */
    "revenuecat.search_subscriptions": {
      input: {
        /**
         * RevenueCat project ID.
         * @minLength 1
         * @maxLength 1500
         */
        projectId: string;
        /**
         * Store subscription identifier to search for.
         * @minLength 1
         * @maxLength 1500
         */
        storeSubscriptionIdentifier: string;
        /** Whether to include subscriptions scheduled to start in the future. */
        includeScheduled?: boolean;
      };
      output: {
        /** RevenueCat list response marker. */
        object: string;
        /** Records returned by RevenueCat. */
        items: Array<Record<string, unknown>>;
        /** URL for the next page, or null when there are no more records. */
        nextPage: string | null;
        /** URL of the current RevenueCat list response. */
        url: string;
      };
    };
  }
}
