import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a BTCPay Server invoice and return its checkout link and invoice data. */
    "btcpay_server.create_invoice": {
      input: {
        /**
         * The BTCPay Server store ID.
         * @minLength 1
         */
        storeId: string;
        /**
         * Invoice amount as a decimal string. Omit this for a top-up invoice.
         * @minLength 1
         */
        amount?: string;
        /**
         * Invoice currency code. If omitted, BTCPay Server uses the store default currency.
         * @minLength 1
         */
        currency?: string;
        /** Additional invoice metadata accepted by BTCPay Server, such as orderId, buyerEmail, itemDesc, or custom JSON fields. */
        metadata?: Record<string, unknown>;
        /** Additional search terms used to find the invoice through text search. */
        additionalSearchTerms?: Array<string>;
      };
      output: {
        /** BTCPay Server invoice data. */
        invoice: {
          /**
           * The BTCPay Server invoice ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The BTCPay Server store ID.
           * @minLength 1
           */
          storeId?: string;
          /** The invoice amount as a decimal string. */
          amount?: string;
          /** The paid amount as a decimal string. */
          paidAmount?: string;
          /** The invoice currency code. */
          currency?: string;
          /** The BTCPay Server invoice type. */
          type?: string;
          /** Checkout URL where the buyer can pay the invoice. */
          checkoutLink?: string;
          /** Unix timestamp in seconds. */
          createdTime?: number;
          /** Unix timestamp in seconds. */
          expirationTime?: number;
          /** Unix timestamp in seconds. */
          monitoringExpiration?: number;
          /** The BTCPay Server invoice status. */
          status?: "Expired" | "Invalid" | "New" | "Processing" | "Settled";
          /** Additional BTCPay Server invoice status detail when present. */
          additionalStatus?: string;
          /** Statuses this invoice can be manually marked as. */
          availableStatusesForManualMarking?: Array<"Expired" | "Invalid" | "New" | "Processing" | "Settled">;
          /** Whether the invoice is archived. */
          archived?: boolean;
          /** Additional invoice metadata accepted by BTCPay Server, such as orderId, buyerEmail, itemDesc, or custom JSON fields. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get details for a single BTCPay Server invoice. */
    "btcpay_server.get_invoice": {
      input: {
        /**
         * The BTCPay Server store ID.
         * @minLength 1
         */
        storeId: string;
        /**
         * The BTCPay Server invoice ID.
         * @minLength 1
         */
        invoiceId: string;
      };
      output: {
        /** BTCPay Server invoice data. */
        invoice: {
          /**
           * The BTCPay Server invoice ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The BTCPay Server store ID.
           * @minLength 1
           */
          storeId?: string;
          /** The invoice amount as a decimal string. */
          amount?: string;
          /** The paid amount as a decimal string. */
          paidAmount?: string;
          /** The invoice currency code. */
          currency?: string;
          /** The BTCPay Server invoice type. */
          type?: string;
          /** Checkout URL where the buyer can pay the invoice. */
          checkoutLink?: string;
          /** Unix timestamp in seconds. */
          createdTime?: number;
          /** Unix timestamp in seconds. */
          expirationTime?: number;
          /** Unix timestamp in seconds. */
          monitoringExpiration?: number;
          /** The BTCPay Server invoice status. */
          status?: "Expired" | "Invalid" | "New" | "Processing" | "Settled";
          /** Additional BTCPay Server invoice status detail when present. */
          additionalStatus?: string;
          /** Statuses this invoice can be manually marked as. */
          availableStatusesForManualMarking?: Array<"Expired" | "Invalid" | "New" | "Processing" | "Settled">;
          /** Whether the invoice is archived. */
          archived?: boolean;
          /** Additional invoice metadata accepted by BTCPay Server, such as orderId, buyerEmail, itemDesc, or custom JSON fields. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get details for a single BTCPay Server store. */
    "btcpay_server.get_store": {
      input: {
        /**
         * The BTCPay Server store ID.
         * @minLength 1
         */
        storeId: string;
      };
      output: {
        /** BTCPay Server store data. */
        store: {
          /**
           * The BTCPay Server store ID.
           * @minLength 1
           */
          id?: string;
          /** The store name. */
          name?: string;
          /** The store website URL. */
          website?: string;
          /** The store support URI. */
          supportUrl?: string;
          /** The store logo URL or BTCPay file reference. */
          logoUrl?: string;
          /** The default currency configured for the store. */
          defaultCurrency?: string;
          /** Whether the store is archived. */
          archived?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List invoices for a BTCPay Server store with optional filters. */
    "btcpay_server.list_invoices": {
      input: {
        /**
         * The BTCPay Server store ID.
         * @minLength 1
         */
        storeId: string;
        /** Order IDs to fetch invoices for. BTCPay Server receives each value as an orderId query parameter. */
        orderIds?: Array<string>;
        /**
         * Search term that helps locate specific invoices.
         * @minLength 1
         */
        textSearch?: string;
        /** The BTCPay Server invoice status. */
        status?: "Expired" | "Invalid" | "New" | "Processing" | "Settled";
        /** Unix timestamp in seconds. */
        startDate?: number;
        /** Unix timestamp in seconds. */
        endDate?: number;
        /** Whether payment methods should be included in the invoice response. */
        includePaymentMethods?: boolean;
        /** Number of records returned in the response. */
        take?: number;
        /** Number of records to skip. */
        skip?: number;
      };
      output: {
        /** Invoices returned by BTCPay Server. */
        invoices: Array<{
          /**
           * The BTCPay Server invoice ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The BTCPay Server store ID.
           * @minLength 1
           */
          storeId?: string;
          /** The invoice amount as a decimal string. */
          amount?: string;
          /** The paid amount as a decimal string. */
          paidAmount?: string;
          /** The invoice currency code. */
          currency?: string;
          /** The BTCPay Server invoice type. */
          type?: string;
          /** Checkout URL where the buyer can pay the invoice. */
          checkoutLink?: string;
          /** Unix timestamp in seconds. */
          createdTime?: number;
          /** Unix timestamp in seconds. */
          expirationTime?: number;
          /** Unix timestamp in seconds. */
          monitoringExpiration?: number;
          /** The BTCPay Server invoice status. */
          status?: "Expired" | "Invalid" | "New" | "Processing" | "Settled";
          /** Additional BTCPay Server invoice status detail when present. */
          additionalStatus?: string;
          /** Statuses this invoice can be manually marked as. */
          availableStatusesForManualMarking?: Array<"Expired" | "Invalid" | "New" | "Processing" | "Settled">;
          /** Whether the invoice is archived. */
          archived?: boolean;
          /** Additional invoice metadata accepted by BTCPay Server, such as orderId, buyerEmail, itemDesc, or custom JSON fields. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List BTCPay Server stores available to the API key. */
    "btcpay_server.list_stores": {
      input: Record<string, never>;
      output: {
        /** Stores returned by BTCPay Server. */
        stores: Array<{
          /**
           * The BTCPay Server store ID.
           * @minLength 1
           */
          id?: string;
          /** The store name. */
          name?: string;
          /** The store website URL. */
          website?: string;
          /** The store support URI. */
          supportUrl?: string;
          /** The store logo URL or BTCPay file reference. */
          logoUrl?: string;
          /** The default currency configured for the store. */
          defaultCurrency?: string;
          /** Whether the store is archived. */
          archived?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Manually mark a BTCPay Server invoice as invalid or settled. */
    "btcpay_server.mark_invoice_status": {
      input: {
        /**
         * The BTCPay Server store ID.
         * @minLength 1
         */
        storeId: string;
        /**
         * The BTCPay Server invoice ID.
         * @minLength 1
         */
        invoiceId: string;
        /** Status to manually assign to the invoice. */
        status: "Invalid" | "Settled";
      };
      output: {
        /** BTCPay Server invoice data. */
        invoice: {
          /**
           * The BTCPay Server invoice ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The BTCPay Server store ID.
           * @minLength 1
           */
          storeId?: string;
          /** The invoice amount as a decimal string. */
          amount?: string;
          /** The paid amount as a decimal string. */
          paidAmount?: string;
          /** The invoice currency code. */
          currency?: string;
          /** The BTCPay Server invoice type. */
          type?: string;
          /** Checkout URL where the buyer can pay the invoice. */
          checkoutLink?: string;
          /** Unix timestamp in seconds. */
          createdTime?: number;
          /** Unix timestamp in seconds. */
          expirationTime?: number;
          /** Unix timestamp in seconds. */
          monitoringExpiration?: number;
          /** The BTCPay Server invoice status. */
          status?: "Expired" | "Invalid" | "New" | "Processing" | "Settled";
          /** Additional BTCPay Server invoice status detail when present. */
          additionalStatus?: string;
          /** Statuses this invoice can be manually marked as. */
          availableStatusesForManualMarking?: Array<"Expired" | "Invalid" | "New" | "Processing" | "Settled">;
          /** Whether the invoice is archived. */
          archived?: boolean;
          /** Additional invoice metadata accepted by BTCPay Server, such as orderId, buyerEmail, itemDesc, or custom JSON fields. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Update metadata for an existing BTCPay Server invoice. */
    "btcpay_server.update_invoice_metadata": {
      input: {
        /**
         * The BTCPay Server store ID.
         * @minLength 1
         */
        storeId: string;
        /**
         * The BTCPay Server invoice ID.
         * @minLength 1
         */
        invoiceId: string;
        /** Additional invoice metadata accepted by BTCPay Server, such as orderId, buyerEmail, itemDesc, or custom JSON fields. */
        metadata: Record<string, unknown>;
      };
      output: {
        /** BTCPay Server invoice data. */
        invoice: {
          /**
           * The BTCPay Server invoice ID.
           * @minLength 1
           */
          id?: string;
          /**
           * The BTCPay Server store ID.
           * @minLength 1
           */
          storeId?: string;
          /** The invoice amount as a decimal string. */
          amount?: string;
          /** The paid amount as a decimal string. */
          paidAmount?: string;
          /** The invoice currency code. */
          currency?: string;
          /** The BTCPay Server invoice type. */
          type?: string;
          /** Checkout URL where the buyer can pay the invoice. */
          checkoutLink?: string;
          /** Unix timestamp in seconds. */
          createdTime?: number;
          /** Unix timestamp in seconds. */
          expirationTime?: number;
          /** Unix timestamp in seconds. */
          monitoringExpiration?: number;
          /** The BTCPay Server invoice status. */
          status?: "Expired" | "Invalid" | "New" | "Processing" | "Settled";
          /** Additional BTCPay Server invoice status detail when present. */
          additionalStatus?: string;
          /** Statuses this invoice can be manually marked as. */
          availableStatusesForManualMarking?: Array<"Expired" | "Invalid" | "New" | "Processing" | "Settled">;
          /** Whether the invoice is archived. */
          archived?: boolean;
          /** Additional invoice metadata accepted by BTCPay Server, such as orderId, buyerEmail, itemDesc, or custom JSON fields. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
