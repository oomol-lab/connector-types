import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Recharge charge by ID. */
    "recharge.get_charge": {
      input: {
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        id: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
      };
      output: {
        /** The Recharge charge. */
        charge: Record<string, unknown>;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Recharge customer by ID. */
    "recharge.get_customer": {
      input: {
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        id: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
      };
      output: {
        /** The Recharge customer. */
        customer: Record<string, unknown>;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Recharge order by ID. */
    "recharge.get_order": {
      input: {
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        id: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
      };
      output: {
        /** The Recharge order. */
        order: Record<string, unknown>;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Recharge product by ID. */
    "recharge.get_product": {
      input: {
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        id: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
      };
      output: {
        /** The Recharge product. */
        product: Record<string, unknown>;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one Recharge subscription by ID. */
    "recharge.get_subscription": {
      input: {
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        id: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
      };
      output: {
        /** The Recharge subscription. */
        subscription: Record<string, unknown>;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Recharge charges with cursor pagination and common filters. */
    "recharge.list_charges": {
      input: {
        /**
         * The number of records to request. Recharge allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The Recharge cursor returned as next_cursor or previous_cursor.
         * @minLength 1
         */
        cursor?: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
        /** Recharge resource IDs to request as a comma-separated ids query parameter. */
        ids?: Array<string>;
        /**
         * The Recharge sort_by expression, such as id-desc.
         * @minLength 1
         */
        sortBy?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMin?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMax?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMin?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMax?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        addressId?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        customerId?: string;
        /**
         * Discount code to filter charges by.
         * @minLength 1
         */
        discountCode?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        discountId?: string;
        /**
         * External ecommerce order ID to filter charges by.
         * @minLength 1
         */
        externalOrderId?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        purchaseItemId?: string;
        /** A Recharge date or datetime filter value. */
        scheduledAt?: string;
        /** A Recharge date or datetime filter value. */
        scheduledAtMin?: string;
        /** A Recharge date or datetime filter value. */
        scheduledAtMax?: string;
        /** A Recharge date or datetime filter value. */
        processedAtMin?: string;
        /** A Recharge date or datetime filter value. */
        processedAtMax?: string;
        /**
         * The Recharge status filter value or comma-separated status list.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /** Charges returned by Recharge. */
        charges: Array<Record<string, unknown>>;
        /** The cursor for the next page, when Recharge returns one. */
        nextCursor: string | null;
        /** The cursor for the previous page, when Recharge returns one. */
        previousCursor: string | null;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Recharge customers with cursor pagination and common filters. */
    "recharge.list_customers": {
      input: {
        /**
         * The number of records to request. Recharge allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The Recharge cursor returned as next_cursor or previous_cursor.
         * @minLength 1
         */
        cursor?: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
        /** Recharge resource IDs to request as a comma-separated ids query parameter. */
        ids?: Array<string>;
        /**
         * The Recharge sort_by expression, such as id-desc.
         * @minLength 1
         */
        sortBy?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMin?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMax?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMin?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMax?: string;
        /**
         * Customer email address to filter by.
         * @format email
         */
        email?: string;
      };
      output: {
        /** Customers returned by Recharge. */
        customers: Array<Record<string, unknown>>;
        /** The cursor for the next page, when Recharge returns one. */
        nextCursor: string | null;
        /** The cursor for the previous page, when Recharge returns one. */
        previousCursor: string | null;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Recharge orders with cursor pagination and common filters. */
    "recharge.list_orders": {
      input: {
        /**
         * The number of records to request. Recharge allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The Recharge cursor returned as next_cursor or previous_cursor.
         * @minLength 1
         */
        cursor?: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
        /** Recharge resource IDs to request as a comma-separated ids query parameter. */
        ids?: Array<string>;
        /**
         * The Recharge sort_by expression, such as id-desc.
         * @minLength 1
         */
        sortBy?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMin?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMax?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMin?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMax?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        addressId?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        chargeId?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        customerId?: string;
        /**
         * External ecommerce order ID to filter by.
         * @minLength 1
         */
        externalOrderId?: string;
        /** A Recharge date or datetime filter value. */
        processedAtMin?: string;
        /** A Recharge date or datetime filter value. */
        processedAtMax?: string;
        /**
         * The Recharge status filter value or comma-separated status list.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /** Orders returned by Recharge. */
        orders: Array<Record<string, unknown>>;
        /** The cursor for the next page, when Recharge returns one. */
        nextCursor: string | null;
        /** The cursor for the previous page, when Recharge returns one. */
        previousCursor: string | null;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Recharge products with cursor pagination and common filters. */
    "recharge.list_products": {
      input: {
        /**
         * The number of records to request. Recharge allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The Recharge cursor returned as next_cursor or previous_cursor.
         * @minLength 1
         */
        cursor?: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
        /** Recharge resource IDs to request as a comma-separated ids query parameter. */
        ids?: Array<string>;
        /**
         * The Recharge sort_by expression, such as id-desc.
         * @minLength 1
         */
        sortBy?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMin?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMax?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMin?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMax?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        collectionId?: string;
        /**
         * External catalog product ID to filter by.
         * @minLength 1
         */
        externalProductId?: string;
        /**
         * Product title to filter by.
         * @minLength 1
         */
        title?: string;
      };
      output: {
        /** Products returned by Recharge. */
        products: Array<Record<string, unknown>>;
        /** The cursor for the next page, when Recharge returns one. */
        nextCursor: string | null;
        /** The cursor for the previous page, when Recharge returns one. */
        previousCursor: string | null;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
    /** List Recharge subscriptions with cursor pagination and common filters. */
    "recharge.list_subscriptions": {
      input: {
        /**
         * The number of records to request. Recharge allows up to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The Recharge cursor returned as next_cursor or previous_cursor.
         * @minLength 1
         */
        cursor?: string;
        /** Related Recharge resources to include, joined as a comma-separated include query parameter. */
        include?: Array<string>;
        /** Recharge resource IDs to request as a comma-separated ids query parameter. */
        ids?: Array<string>;
        /**
         * The Recharge sort_by expression, such as id-desc.
         * @minLength 1
         */
        sortBy?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMin?: string;
        /** A Recharge date or datetime filter value. */
        createdAtMax?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMin?: string;
        /** A Recharge date or datetime filter value. */
        updatedAtMax?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        addressId?: string;
        /**
         * The Recharge resource ID.
         * @minLength 1
         */
        customerId?: string;
        /**
         * Subscription product title to filter by.
         * @minLength 1
         */
        productTitle?: string;
        /**
         * The Recharge status filter value or comma-separated status list.
         * @minLength 1
         */
        status?: string;
      };
      output: {
        /** Subscriptions returned by Recharge. */
        subscriptions: Array<Record<string, unknown>>;
        /** The cursor for the next page, when Recharge returns one. */
        nextCursor: string | null;
        /** The cursor for the previous page, when Recharge returns one. */
        previousCursor: string | null;
        /** The raw Recharge API response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
