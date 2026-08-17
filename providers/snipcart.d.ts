import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Snipcart customer by ID. */
    "snipcart.get_customer": {
      input: {
        /**
         * The Snipcart customer identifier.
         * @minLength 1
         */
        customerId: string;
      };
      output: {
        /** The complete customer object returned by Snipcart. */
        customer: Record<string, unknown>;
      };
    };
    /** Retrieve one Snipcart order by token. */
    "snipcart.get_order": {
      input: {
        /**
         * The Snipcart order token.
         * @minLength 1
         */
        token: string;
        /** Whether a Live-mode key should also search for a Test-mode order. */
        includeTestOrders?: boolean;
      };
      output: {
        /** The complete order object returned by Snipcart. */
        order: Record<string, unknown>;
      };
    };
    /** List Snipcart customers with pagination and optional filters. */
    "snipcart.list_customers": {
      input: {
        /**
         * The number of matching records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records Snipcart should return.
         * @minimum 1
         */
        limit?: number;
        /** The customer account status to match. */
        status?: "confirmed" | "unconfirmed";
        /**
         * The customer email address to match.
         * @format email
         */
        email?: string;
        /**
         * The customer name to match.
         * @minLength 1
         */
        name?: string;
        /**
         * An ISO 8601 date and time used to filter records.
         * @format date-time
         */
        from?: string;
        /**
         * An ISO 8601 date and time used to filter records.
         * @format date-time
         */
        to?: string;
      };
      output: {
        /** The total number of matching records. */
        totalItems: number;
        /** The number of records skipped for this page. */
        offset: number;
        /** The maximum number of records requested for this page. */
        limit: number;
        /** The records returned for this page. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** List completed Snipcart orders with pagination and optional filters. */
    "snipcart.list_orders": {
      input: {
        /**
         * The number of matching records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of records Snipcart should return.
         * @minimum 1
         */
        limit?: number;
        /** The order status to match. */
        status?: "InProgress" | "Processed" | "Disputed" | "Shipped" | "Delivered" | "Pending" | "Cancelled";
        /**
         * The exact invoice number to match.
         * @minLength 1
         */
        invoiceNumber?: string;
        /**
         * The user-defined product identifier to match.
         * @minLength 1
         */
        productId?: string;
        /**
         * The purchaser name or email address to match.
         * @minLength 1
         */
        placedBy?: string;
        /**
         * An ISO 8601 date and time used to filter records.
         * @format date-time
         */
        from?: string;
        /**
         * An ISO 8601 date and time used to filter records.
         * @format date-time
         */
        to?: string;
        /** Whether a Live-mode key should also return Test-mode orders. */
        includeTestOrders?: boolean;
      };
      output: {
        /** The total number of matching records. */
        totalItems: number;
        /** The number of records skipped for this page. */
        offset: number;
        /** The maximum number of records requested for this page. */
        limit: number;
        /** The records returned for this page. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
