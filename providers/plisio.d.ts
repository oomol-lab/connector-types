import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a hosted Plisio invoice for one merchant order using either a crypto amount or a fiat amount that Plisio converts. */
    "plisio.create_invoice": {
      input: {
        /**
         * Optional Plisio cryptocurrency identifier chosen from the supported cryptocurrencies appendix.
         * @minLength 1
         */
        currency?: string;
        /**
         * Merchant internal order name shown on the invoice.
         * @minLength 1
         */
        order_name: string;
        /** A merchant-supplied identifier that Plisio accepts as either a string or an integer. */
        order_number: string | number;
        /** Invoice amount in cryptocurrency when no fiat conversion is needed. */
        amount?: number;
        /**
         * Source fiat currency code used when Plisio should convert a fiat amount.
         * @minLength 1
         */
        source_currency?: string;
        /** Source fiat amount used when Plisio should convert an invoice. */
        source_amount?: number;
        /**
         * Comma-separated list of cryptocurrency identifiers allowed for payment.
         * @minLength 1
         */
        allowed_psys_cids?: string;
        /**
         * Merchant invoice description shown by Plisio.
         * @minLength 1
         */
        description?: string;
        /**
         * Merchant callback URL that receives invoice updates from Plisio.
         * @format uri
         */
        callback_url?: string;
        /**
         * Merchant callback URL that receives successful invoice redirects or JSON callbacks.
         * @format uri
         */
        success_callback_url?: string;
        /**
         * Merchant callback URL that receives failed invoice redirects or JSON callbacks.
         * @format uri
         */
        fail_callback_url?: string;
        /**
         * Button URL shown to the buyer after the invoice succeeds.
         * @format uri
         */
        success_invoice_url?: string;
        /**
         * Button URL shown to the buyer after the invoice fails.
         * @format uri
         */
        fail_invoice_url?: string;
        /**
         * Buyer email address that Plisio can reuse instead of prompting again.
         * @format email
         */
        email?: string;
        /** Language locale supported by the Plisio invoice page for this endpoint. */
        language?: "en_US";
        /**
         * Invoice expiration interval in minutes.
         * @exclusiveMinimum 0
         */
        expire_min?: number;
        /** Whether Plisio should return an existing invoice instead of raising a duplicate error. */
        return_existing?: boolean;
      };
      output: {
        /** The normalized invoice object returned by Plisio. */
        invoice: {
          /** Plisio internal invoice transaction identifier. */
          txn_id: string | null;
          /**
           * Hosted invoice URL returned by Plisio.
           * @format uri
           */
          invoice_url: string | null;
          /** Total amount due on the invoice, including commission when applicable. */
          invoice_total_sum: string | null;
          /** Invoice amount in the selected cryptocurrency. */
          amount: string | null;
          /** Remaining unpaid amount in the selected cryptocurrency when returned. */
          pending_amount: string | null;
          /** Selected cryptocurrency code for the invoice. */
          currency: string | null;
          /** Original fiat or source currency used to price the invoice. */
          source_currency: string | null;
          /** Original fiat or source amount used to price the invoice. */
          source_amount: string | null;
          /** Invoice subtotal after Plisio commission rules are applied. */
          invoice_sum: string | null;
          /** Plisio commission charged for the invoice. */
          invoice_commission: string | null;
          /** Additional invoice parameters returned by Plisio for white-label invoice responses. */
          params: Record<string, unknown> | null;
          /** Invoice QR code image in base64 format when returned. */
          qr_code: string | null;
          /** Verification hash returned by Plisio when white-label invoice data is enabled. */
          verify_hash: string | null;
        };
      };
    };
    /** Fetch the current Plisio balance for one supported cryptocurrency identifier. */
    "plisio.get_balance": {
      input: {
        /**
         * Plisio cryptocurrency identifier chosen from the supported cryptocurrencies appendix.
         * @minLength 1
         */
        psys_cid: string;
      };
      output: {
        /** A Plisio cryptocurrency balance snapshot. */
        balance: {
          /** Cryptocurrency identifier used to query the balance. */
          currency: string;
          /** Available cryptocurrency balance returned by Plisio. */
          balance: string;
        };
      };
    };
    /** Fetch one Plisio operation or invoice by its official operation identifier. */
    "plisio.get_operation": {
      input: {
        /**
         * Plisio operation identifier returned by list_operations or another flow.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Plisio operation record. */
        operation: {
          /** Profile identifier that owns the operation. */
          user_id: number | null;
          /** Shop identifier associated with the operation. */
          shop_id: string | null;
          /** Operation type returned by Plisio. */
          type: string | null;
          /** Operation status returned by Plisio. */
          status: string | null;
          /** Unconfirmed incoming amount when returned. */
          pending_sum: string | null;
          /** Plisio cryptocurrency identifier for the operation. */
          psys_cid: string | null;
          /** Cryptocurrency code for the operation. */
          currency: string | null;
          /** Source fiat currency for invoice-style operations. */
          source_currency: string | null;
          /** Exchange rate from the cryptocurrency to the source currency. */
          source_rate: string | null;
          /** Network fee configured on the transfer when returned. */
          fee: string | null;
          /** Destination hash or invoice hash returned by Plisio. */
          wallet_hash: string | null;
          /** Mass payout recipient pairs when returned. */
          sendmany: unknown;
          /** Expiration timestamp in UTC when returned. */
          expire_at_utc: number | null;
          /** Creation timestamp in UTC. */
          created_at_utc: number | null;
          /** Amount received or transferred by the operation. */
          amount: string | null;
          /** Operation total including commission rules when returned. */
          sum: number | null;
          /** Plisio commission amount when returned. */
          commission: string | null;
          /** Actual incoming amount received by the invoice. */
          actual_sum: string | null;
          /** Actual Plisio commission charged on the completed invoice. */
          actual_commission: string | null;
          /** Actual network fee charged to move invoice funds. */
          actual_fee: string | null;
          /** Actual net amount credited to the invoice after fees and commission. */
          actual_invoice_sum: string | null;
          /** A Plisio field that may return one string or an array of strings depending on the endpoint. */
          tx_id: string | Array<string> | null;
          /** A Plisio field that may return one string or an array of strings depending on the endpoint. */
          tx_url: string | Array<string> | null;
          /** Blockchain confirmations counted by Plisio. */
          confirmations: number | null;
          /** Numeric Plisio status code. */
          status_code: number | null;
          /** Original invoice identifier for duplicate invoice flows. */
          parent_id: string | null;
          /** Duplicate child invoice identifiers returned for the original invoice. */
          child_ids: Array<string> | null;
          /** Additional invoice or transfer parameters attached to one Plisio operation. */
          params: Record<string, unknown> | null;
          /** Plisio operation identifier. */
          id: string | null;
        };
      };
    };
    /** List Plisio operations and invoices with official pagination, type, status, currency, and search filters. */
    "plisio.list_operations": {
      input: {
        /**
         * Page number to request from Plisio.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of operations to return on one page.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Optional Plisio shop identifier used to filter operations.
         * @minLength 1
         */
        shop_id?: string;
        /** Operation type filter supported by Plisio. */
        type?: "cash_in" | "cash_out" | "mass_cash_out" | "invoice" | "pay_in";
        /** Operation status filter supported by Plisio. */
        status?: "new" | "pending" | "pending internal" | "expired" | "completed" | "mismatch" | "error" | "cancelled";
        /**
         * Cryptocurrency identifier used to filter operations.
         * @minLength 1
         */
        currency?: string;
        /**
         * Full-text search over transaction id, invoice order number, or invoice customer email.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Operations returned by Plisio for the requested page. */
        operations: Array<{
          /** Profile identifier that owns the operation. */
          user_id: number | null;
          /** Shop identifier associated with the operation. */
          shop_id: string | null;
          /** Operation type returned by Plisio. */
          type: string | null;
          /** Operation status returned by Plisio. */
          status: string | null;
          /** Unconfirmed incoming amount when returned. */
          pending_sum: string | null;
          /** Plisio cryptocurrency identifier for the operation. */
          psys_cid: string | null;
          /** Cryptocurrency code for the operation. */
          currency: string | null;
          /** Source fiat currency for invoice-style operations. */
          source_currency: string | null;
          /** Exchange rate from the cryptocurrency to the source currency. */
          source_rate: string | null;
          /** Network fee configured on the transfer when returned. */
          fee: string | null;
          /** Destination hash or invoice hash returned by Plisio. */
          wallet_hash: string | null;
          /** Mass payout recipient pairs when returned. */
          sendmany: unknown;
          /** Expiration timestamp in UTC when returned. */
          expire_at_utc: number | null;
          /** Creation timestamp in UTC. */
          created_at_utc: number | null;
          /** Amount received or transferred by the operation. */
          amount: string | null;
          /** Operation total including commission rules when returned. */
          sum: number | null;
          /** Plisio commission amount when returned. */
          commission: string | null;
          /** Actual incoming amount received by the invoice. */
          actual_sum: string | null;
          /** Actual Plisio commission charged on the completed invoice. */
          actual_commission: string | null;
          /** Actual network fee charged to move invoice funds. */
          actual_fee: string | null;
          /** Actual net amount credited to the invoice after fees and commission. */
          actual_invoice_sum: string | null;
          /** A Plisio field that may return one string or an array of strings depending on the endpoint. */
          tx_id: string | Array<string> | null;
          /** A Plisio field that may return one string or an array of strings depending on the endpoint. */
          tx_url: string | Array<string> | null;
          /** Blockchain confirmations counted by Plisio. */
          confirmations: number | null;
          /** Numeric Plisio status code. */
          status_code: number | null;
          /** Original invoice identifier for duplicate invoice flows. */
          parent_id: string | null;
          /** Duplicate child invoice identifiers returned for the original invoice. */
          child_ids: Array<string> | null;
          /** Additional invoice or transfer parameters attached to one Plisio operation. */
          params: Record<string, unknown> | null;
          /** Plisio operation identifier. */
          id: string | null;
        }>;
        /** Pagination metadata returned by the operations list endpoint. */
        pagination: {
          /** Total number of operations matching the query. */
          totalCount: number | null;
          /** Total number of available pages. */
          pageCount: number | null;
          /** Current page number returned by Plisio. */
          currentPage: number | null;
          /** Number of operations returned per page. */
          perPage: number | null;
        };
        /** Pagination links returned by the operations list endpoint. */
        links: {
          /**
           * Current page URL returned by Plisio.
           * @format uri
           */
          self: string | null;
          /**
           * Next page URL returned by Plisio when another page exists.
           * @format uri
           */
          next: string | null;
          /**
           * Previous page URL returned by Plisio when one exists.
           * @format uri
           */
          prev: string | null;
        };
      };
    };
  }
}
