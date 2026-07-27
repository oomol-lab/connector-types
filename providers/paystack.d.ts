import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a customer in Paystack. */
    "paystack.create_customer": {
      input: {
        /**
         * Customer email address.
         * @format email
         */
        email: string;
        /** Customer first name. */
        first_name?: string;
        /** Customer last name. */
        last_name?: string;
        /** Customer phone number. */
        phone?: string;
        /** Customer metadata object sent to Paystack. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Customer returned by Paystack. */
        customer: {
          /** Unique Paystack customer ID. */
          id: number;
          /**
           * Customer email address.
           * @format email
           */
          email: string;
          /** Paystack customer code. */
          customer_code: string;
          /** Customer first name. */
          first_name?: string;
          /** Customer last name. */
          last_name?: string;
          /** Customer phone number. */
          phone?: string;
          /** Customer metadata object. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a customer in Paystack by email address or customer code. */
    "paystack.get_customer": {
      input: {
        /**
         * Customer email address or customer code accepted by Paystack.
         * @minLength 1
         */
        email_or_code: string;
      };
      output: {
        /** Customer returned by Paystack. */
        customer: {
          /** Unique Paystack customer ID. */
          id: number;
          /**
           * Customer email address.
           * @format email
           */
          email: string;
          /** Paystack customer code. */
          customer_code: string;
          /** Customer first name. */
          first_name?: string;
          /** Customer last name. */
          last_name?: string;
          /** Customer phone number. */
          phone?: string;
          /** Customer metadata object. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a Paystack transaction by transaction ID. */
    "paystack.get_transaction": {
      input: {
        /**
         * Paystack transaction ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Transaction returned by Paystack. */
        transaction: {
          /** Unique Paystack transaction ID. */
          id: number;
          /** Transaction status returned by Paystack. */
          status: string;
          /** Paystack transaction reference. */
          reference: string;
          /** Transaction amount in the smallest currency unit. */
          amount: number;
          /** Transaction currency code. */
          currency: string;
          /** Gateway response message returned by Paystack. */
          gateway_response?: string;
          /** Payment channel used for the transaction. */
          channel?: string;
          /** Timestamp when the transaction was paid. */
          paid_at?: string | null;
          /** Timestamp when the transaction was created. */
          created_at?: string;
          /** Transaction metadata object. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Initialize a Paystack transaction and return checkout details. */
    "paystack.initialize_transaction": {
      input: {
        /**
         * Customer email address used for the transaction.
         * @format email
         */
        email: string;
        /**
         * Transaction amount in the smallest currency unit.
         * @exclusiveMinimum 0
         */
        amount: number;
        /** Transaction currency code. */
        currency?: string;
        /** Custom transaction reference. */
        reference?: string;
        /** Callback URL used after checkout completes. */
        callback_url?: string;
        /** Transaction metadata object. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Checkout authorization URL returned by Paystack. */
        authorization_url: string;
        /** Access code returned by Paystack. */
        access_code: string;
        /** Transaction reference returned by Paystack. */
        reference: string;
      };
    };
    /** List customers available in Paystack. */
    "paystack.list_customers": {
      input: {
        /**
         * Page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of customers to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Inclusive ISO 8601 start timestamp used to filter customer creation time. */
        from?: string;
        /** Inclusive ISO 8601 end timestamp used to filter customer creation time. */
        to?: string;
      };
      output: {
        /** Customers returned by Paystack. */
        customers: Array<{
          /** Unique Paystack customer ID. */
          id: number;
          /**
           * Customer email address.
           * @format email
           */
          email: string;
          /** Paystack customer code. */
          customer_code: string;
          /** Customer first name. */
          first_name?: string;
          /** Customer last name. */
          last_name?: string;
          /** Customer phone number. */
          phone?: string;
          /** Customer metadata object. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Paystack. */
        meta?: {
          /** Total records available. */
          total?: number;
          /** Records returned per page. */
          perPage?: number;
          /** Current page number. */
          page?: number;
          /** Total page count. */
          pageCount?: number;
          /** Next page cursor or URL when provided. */
          next?: string | null;
          /** Previous page cursor or URL when provided. */
          previous?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List transactions available in Paystack. */
    "paystack.list_transactions": {
      input: {
        /**
         * Page number to fetch.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of transactions to return per page.
         * @maximum 100
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /** Transaction status filter. */
        status?: string;
        /** Customer code filter. */
        customer?: string;
        /** Inclusive ISO 8601 start timestamp used to filter transaction creation time. */
        from?: string;
        /** Inclusive ISO 8601 end timestamp used to filter transaction creation time. */
        to?: string;
      };
      output: {
        /** Transactions returned by Paystack. */
        transactions: Array<{
          /** Unique Paystack transaction ID. */
          id: number;
          /** Transaction status returned by Paystack. */
          status: string;
          /** Paystack transaction reference. */
          reference: string;
          /** Transaction amount in the smallest currency unit. */
          amount: number;
          /** Transaction currency code. */
          currency: string;
          /** Gateway response message returned by Paystack. */
          gateway_response?: string;
          /** Payment channel used for the transaction. */
          channel?: string;
          /** Timestamp when the transaction was paid. */
          paid_at?: string | null;
          /** Timestamp when the transaction was created. */
          created_at?: string;
          /** Transaction metadata object. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Paystack. */
        meta?: {
          /** Total records available. */
          total?: number;
          /** Records returned per page. */
          perPage?: number;
          /** Current page number. */
          page?: number;
          /** Total page count. */
          pageCount?: number;
          /** Next page cursor or URL when provided. */
          next?: string | null;
          /** Previous page cursor or URL when provided. */
          previous?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Paystack customer by customer code. */
    "paystack.update_customer": {
      input: {
        /**
         * Customer code used in the Paystack update path.
         * @minLength 1
         */
        code: string;
        /** Updated customer first name. */
        first_name?: string;
        /** Updated customer last name. */
        last_name?: string;
        /** Updated customer phone number. */
        phone?: string;
        /** Updated customer metadata object. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Customer returned by Paystack. */
        customer: {
          /** Unique Paystack customer ID. */
          id: number;
          /**
           * Customer email address.
           * @format email
           */
          email: string;
          /** Paystack customer code. */
          customer_code: string;
          /** Customer first name. */
          first_name?: string;
          /** Customer last name. */
          last_name?: string;
          /** Customer phone number. */
          phone?: string;
          /** Customer metadata object. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Verify a Paystack transaction by reference. */
    "paystack.verify_transaction": {
      input: {
        /**
         * Transaction reference used by Paystack verify.
         * @minLength 1
         */
        reference: string;
      };
      output: {
        /** Transaction returned by Paystack. */
        transaction: {
          /** Unique Paystack transaction ID. */
          id: number;
          /** Transaction status returned by Paystack. */
          status: string;
          /** Paystack transaction reference. */
          reference: string;
          /** Transaction amount in the smallest currency unit. */
          amount: number;
          /** Transaction currency code. */
          currency: string;
          /** Gateway response message returned by Paystack. */
          gateway_response?: string;
          /** Payment channel used for the transaction. */
          channel?: string;
          /** Timestamp when the transaction was paid. */
          paid_at?: string | null;
          /** Timestamp when the transaction was created. */
          created_at?: string;
          /** Transaction metadata object. */
          metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
