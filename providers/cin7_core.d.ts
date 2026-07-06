import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the Cin7 Core company and account settings for the connected account. */
    "cin7_core.get_current_account": {
      input: Record<string, never>;
      output: {
        /** A Cin7 Core API record. */
        account: Record<string, unknown>;
      };
    };
    /** Retrieve one Cin7 Core customer by customer ID. */
    "cin7_core.get_customer": {
      input: {
        /**
         * The Cin7 Core customer ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Cin7 Core API record. */
        customer: Record<string, unknown>;
        /** The raw Cin7 Core API response wrapper. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Cin7 Core product by product ID. */
    "cin7_core.get_product": {
      input: {
        /**
         * The Cin7 Core product ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Cin7 Core API record. */
        product: Record<string, unknown>;
        /** The raw Cin7 Core API response wrapper. */
        raw: Record<string, unknown>;
      };
    };
    /** List Cin7 Core customers with optional official filters and page pagination. */
    "cin7_core.list_customers": {
      input: {
        /**
         * The one-indexed Cin7 Core page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Cin7 Core allows 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Only return the customer with this Cin7 Core customer ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Only return customers whose name starts with this value.
         * @minLength 1
         */
        name?: string;
        /**
         * Only return customers with contacts matching this Cin7 Core contact filter.
         * @minLength 1
         */
        contactFilter?: string;
        /**
         * Only return customers modified after this ISO 8601 timestamp.
         * @format date-time
         */
        modifiedSince?: string;
        /** Whether deprecated Cin7 Core customers should be included. */
        includeDeprecated?: boolean;
        /** Whether customer product prices should be included in each returned customer. */
        includeProductPrices?: boolean;
      };
      output: {
        /** The customers returned by Cin7 Core. */
        customers: Array<Record<string, unknown>>;
        /** The total number of matching Cin7 Core customers. */
        total: number | null;
        /** The Cin7 Core page number returned. */
        page: number | null;
        /** The raw Cin7 Core API response wrapper. */
        raw: Record<string, unknown>;
      };
    };
    /** List Cin7 Core products with optional official filters and page pagination. */
    "cin7_core.list_products": {
      input: {
        /**
         * The one-indexed Cin7 Core page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return. Cin7 Core allows 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Only return the product with this Cin7 Core product ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Only return products whose name contains this value.
         * @minLength 1
         */
        name?: string;
        /**
         * Only return products whose SKU contains this value.
         * @minLength 1
         */
        sku?: string;
        /**
         * Only return products modified after this ISO 8601 timestamp.
         * @format date-time
         */
        modifiedSince?: string;
        /** Whether deprecated Cin7 Core products should be included. */
        includeDeprecated?: boolean;
        /** Whether bill of materials details should be included. */
        includeBOM?: boolean;
        /** Whether supplier details should be included. */
        includeSuppliers?: boolean;
        /** Whether product movement details should be included. */
        includeMovements?: boolean;
        /** Whether product attachment metadata should be included. */
        includeAttachments?: boolean;
        /** Whether reorder level details should be included. */
        includeReorderLevels?: boolean;
        /** Whether custom product prices should be included. */
        includeCustomPrices?: boolean;
      };
      output: {
        /** The products returned by Cin7 Core. */
        products: Array<Record<string, unknown>>;
        /** The total number of matching Cin7 Core products. */
        total: number | null;
        /** The Cin7 Core page number returned. */
        page: number | null;
        /** The raw Cin7 Core API response wrapper. */
        raw: Record<string, unknown>;
      };
    };
  }
}
