import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Loyverse category by ID. */
    "loyverse.get_category": {
      input: {
        /**
         * The Loyverse category ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A Loyverse API object returned without reshaping. */
        category: Record<string, unknown>;
      };
    };
    /** Get one Loyverse customer by ID. */
    "loyverse.get_customer": {
      input: {
        /**
         * The Loyverse customer ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A Loyverse API object returned without reshaping. */
        customer: Record<string, unknown>;
      };
    };
    /** Get one Loyverse item by ID. */
    "loyverse.get_item": {
      input: {
        /**
         * The Loyverse item ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A Loyverse API object returned without reshaping. */
        item: Record<string, unknown>;
      };
    };
    /** Get merchant profile information for the connected Loyverse account. */
    "loyverse.get_merchant": {
      input: Record<string, never>;
      output: {
        /** A Loyverse API object returned without reshaping. */
        merchant: Record<string, unknown>;
      };
    };
    /** Get one Loyverse receipt by receipt number. */
    "loyverse.get_receipt": {
      input: {
        /**
         * The Loyverse receipt number.
         * @minLength 1
         * @pattern \S
         */
        receiptNumber: string;
      };
      output: {
        /** A Loyverse API object returned without reshaping. */
        receipt: Record<string, unknown>;
      };
    };
    /** Get one Loyverse store by ID. */
    "loyverse.get_store": {
      input: {
        /**
         * The Loyverse store ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** A Loyverse API object returned without reshaping. */
        store: Record<string, unknown>;
      };
    };
    /** List item categories in the connected Loyverse account. */
    "loyverse.list_categories": {
      input: {
        /**
         * Limit results to these Loyverse category IDs.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Only include resources created at or after this timestamp.
         * @format date-time
         */
        createdAtMin?: string;
        /**
         * Only include resources created at or before this timestamp.
         * @format date-time
         */
        createdAtMax?: string;
        /**
         * Only include resources updated at or after this timestamp.
         * @format date-time
         */
        updatedAtMin?: string;
        /**
         * Only include resources updated at or before this timestamp.
         * @format date-time
         */
        updatedAtMax?: string;
        /**
         * The maximum number of records to return. Loyverse allows up to 250.
         * @maximum 250
         * @exclusiveMinimum 0
         * @default 50
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous Loyverse list call.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /** Whether to include soft-deleted Loyverse records. */
        showDeleted?: boolean;
      };
      output: {
        /** The Loyverse categories returned by the API. */
        categories: Array<Record<string, unknown>>;
        /** The cursor to pass to the next list request, or null when there is no next page. */
        cursor: string | null;
        /** The raw Loyverse response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List customers in the connected Loyverse account. */
    "loyverse.list_customers": {
      input: {
        /**
         * Limit results to these Loyverse customer IDs.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Filter customers by email address.
         * @format email
         */
        email?: string;
        /**
         * Only include resources created at or after this timestamp.
         * @format date-time
         */
        createdAtMin?: string;
        /**
         * Only include resources created at or before this timestamp.
         * @format date-time
         */
        createdAtMax?: string;
        /**
         * Only include resources updated at or after this timestamp.
         * @format date-time
         */
        updatedAtMin?: string;
        /**
         * Only include resources updated at or before this timestamp.
         * @format date-time
         */
        updatedAtMax?: string;
        /**
         * The maximum number of records to return. Loyverse allows up to 250.
         * @maximum 250
         * @exclusiveMinimum 0
         * @default 50
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous Loyverse list call.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** The Loyverse customers returned by the API. */
        customers: Array<Record<string, unknown>>;
        /** The cursor to pass to the next list request, or null when there is no next page. */
        cursor: string | null;
        /** The raw Loyverse response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List items in the connected Loyverse account. */
    "loyverse.list_items": {
      input: {
        /**
         * Limit results to these Loyverse item IDs.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Only include resources created at or after this timestamp.
         * @format date-time
         */
        createdAtMin?: string;
        /**
         * Only include resources created at or before this timestamp.
         * @format date-time
         */
        createdAtMax?: string;
        /**
         * Only include resources updated at or after this timestamp.
         * @format date-time
         */
        updatedAtMin?: string;
        /**
         * Only include resources updated at or before this timestamp.
         * @format date-time
         */
        updatedAtMax?: string;
        /**
         * The maximum number of records to return. Loyverse allows up to 250.
         * @maximum 250
         * @exclusiveMinimum 0
         * @default 50
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous Loyverse list call.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /** Whether to include soft-deleted Loyverse records. */
        showDeleted?: boolean;
      };
      output: {
        /** The Loyverse items returned by the API. */
        items: Array<Record<string, unknown>>;
        /** The cursor to pass to the next list request, or null when there is no next page. */
        cursor: string | null;
        /** The raw Loyverse response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List receipts in the connected Loyverse account. */
    "loyverse.list_receipts": {
      input: {
        /**
         * Receipt numbers used to filter Loyverse receipt results.
         * @minItems 1
         */
        receiptNumbers?: Array<string>;
        /**
         * Show receipts after the receipt with this number.
         * @minLength 1
         * @pattern \S
         */
        sinceReceiptNumber?: string;
        /**
         * Show receipts before the receipt with this number.
         * @minLength 1
         * @pattern \S
         */
        beforeReceiptNumber?: string;
        /**
         * Filter receipts to one Loyverse store ID.
         * @minLength 1
         * @pattern \S
         */
        storeId?: string;
        /**
         * Filter receipts by Loyverse order value.
         * @minLength 1
         */
        order?: string;
        /**
         * Filter receipts by source name.
         * @minLength 1
         */
        source?: string;
        /**
         * Only include resources created at or after this timestamp.
         * @format date-time
         */
        createdAtMin?: string;
        /**
         * Only include resources created at or before this timestamp.
         * @format date-time
         */
        createdAtMax?: string;
        /**
         * Only include resources updated at or after this timestamp.
         * @format date-time
         */
        updatedAtMin?: string;
        /**
         * Only include resources updated at or before this timestamp.
         * @format date-time
         */
        updatedAtMax?: string;
        /**
         * The maximum number of records to return. Loyverse allows up to 250.
         * @maximum 250
         * @exclusiveMinimum 0
         * @default 50
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous Loyverse list call.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
      };
      output: {
        /** The Loyverse receipts returned by the API. */
        receipts: Array<Record<string, unknown>>;
        /** The cursor to pass to the next list request, or null when there is no next page. */
        cursor: string | null;
        /** The raw Loyverse response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List stores in the connected Loyverse account. */
    "loyverse.list_stores": {
      input: {
        /**
         * Limit results to these Loyverse store IDs.
         * @minItems 1
         */
        ids?: Array<string>;
        /**
         * Only include resources created at or after this timestamp.
         * @format date-time
         */
        createdAtMin?: string;
        /**
         * Only include resources created at or before this timestamp.
         * @format date-time
         */
        createdAtMax?: string;
        /**
         * Only include resources updated at or after this timestamp.
         * @format date-time
         */
        updatedAtMin?: string;
        /**
         * Only include resources updated at or before this timestamp.
         * @format date-time
         */
        updatedAtMax?: string;
        /**
         * The maximum number of records to return. Loyverse allows up to 250.
         * @maximum 250
         * @exclusiveMinimum 0
         * @default 50
         */
        limit?: number;
        /**
         * The pagination cursor returned by a previous Loyverse list call.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /** Whether to include soft-deleted Loyverse records. */
        showDeleted?: boolean;
      };
      output: {
        /** The Loyverse stores returned by the API. */
        stores: Array<Record<string, unknown>>;
        /** The cursor to pass to the next list request, or null when there is no next page. */
        cursor: string | null;
        /** The raw Loyverse response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
