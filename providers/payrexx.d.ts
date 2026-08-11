import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Payrexx payment gateway and return its hosted checkout link. */
    "payrexx.create_gateway": {
      input: {
        /**
         * The payment amount in the smallest currency unit, such as cents.
         * @exclusiveMinimum 0
         */
        amount: number;
        /**
         * The ISO 4217 currency code.
         * @minLength 3
         * @maxLength 3
         */
        currency: string;
        /** The purpose shown for the payment. */
        purpose?: string;
        /** An internal reference identifier from your system. */
        referenceId?: string;
        /** The product stock keeping unit. */
        sku?: string;
        /** The VAT rate percentage. */
        vatRate?: number;
        /**
         * The URL where the shopper is redirected after a successful payment.
         * @format uri
         */
        successRedirectUrl?: string;
        /**
         * The URL where the shopper is redirected after a failed payment.
         * @format uri
         */
        failedRedirectUrl?: string;
        /**
         * The URL where the shopper is redirected after cancelling the payment.
         * @format uri
         */
        cancelRedirectUrl?: string;
        /** Whether the payment should be authorized for later capture. */
        preAuthorization?: boolean;
        /** Whether the payment amount should be reserved for later capture. */
        reservation?: boolean;
      };
      output: {
        /** The created gateway and its hosted checkout details. */
        gateway: {
          /**
           * The hosted Payrexx checkout URL.
           * @format uri
           */
          link?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Payrexx payment gateway by its numeric identifier. */
    "payrexx.get_gateway": {
      input: {
        /**
         * The numeric Payrexx resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Payrexx resource returned by the API. */
        gateway: Record<string, unknown>;
      };
    };
    /** Retrieve one Payrexx transaction by its numeric identifier. */
    "payrexx.get_transaction": {
      input: {
        /**
         * The numeric Payrexx resource identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Payrexx resource returned by the API. */
        transaction: Record<string, unknown>;
      };
    };
    /** List payment providers configured for the connected Payrexx instance. */
    "payrexx.list_payment_providers": {
      input: Record<string, never>;
      output: {
        /** Configured payment providers. */
        paymentProviders: Array<Record<string, unknown>>;
      };
    };
    /** List transactions for the connected Payrexx instance. */
    "payrexx.list_transactions": {
      input: {
        /** Return transactions after this UTC timestamp in YYYY-MM-DD HH:MM:SS format. */
        filterDatetimeUtcGreaterThan?: string;
        /** Return transactions before this UTC timestamp in YYYY-MM-DD HH:MM:SS format. */
        filterDatetimeUtcLessThan?: string;
        /** Whether to return only transactions associated with the current API key. */
        filterMyTransactionsOnly?: boolean;
        /** Sort direction for the transaction timestamp. */
        orderByTime?: "ASC" | "DESC";
        /**
         * The number of transaction rows to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of transactions to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Matching transactions. */
        transactions: Array<Record<string, unknown>>;
      };
    };
  }
}
