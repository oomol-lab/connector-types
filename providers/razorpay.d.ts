import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Razorpay order for an amount, currency, and optional receipt metadata. */
    "razorpay.create_order": {
      input: {
        /**
         * The order amount in the smallest currency subunit.
         * @minimum 1
         */
        amount: number;
        /**
         * The three-letter ISO currency code for the order.
         * @minLength 1
         * @maxLength 3
         * @pattern \S
         */
        currency: string;
        /**
         * Your internal receipt reference. Razorpay allows up to 40 characters.
         * @minLength 1
         * @maxLength 40
         * @pattern \S
         */
        receipt?: string;
        /** Key-value pairs forwarded to Razorpay notes. Razorpay accepts up to 15 pairs. */
        notes?: Record<string, string>;
      };
      output: {
        /** A normalized Razorpay order. */
        order: {
          /**
           * The unique identifier of the Razorpay order.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The entity type returned by Razorpay.
           * @minLength 1
           * @pattern \S
           */
          entity: string;
          /**
           * The order amount in the smallest currency subunit.
           * @minimum 1
           */
          amount: number;
          /** The amount paid against the order. */
          amountPaid: number | null;
          /** The amount still due for the order. */
          amountDue: number | null;
          /**
           * The ISO currency code used for the order.
           * @minLength 1
           * @pattern \S
           */
          currency: string;
          /** Your internal receipt reference when present. */
          receipt: string | null;
          /** The Razorpay offer identifier when present. */
          offerId: string | null;
          /** The order status returned by Razorpay. */
          status: string | null;
          /** The number of payment attempts recorded for the order. */
          attempts: number | null;
          /** The notes payload returned by Razorpay. */
          notes: unknown;
          /** The Unix timestamp when the order was created. */
          createdAt: number | null;
          /** The raw Razorpay order payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a Razorpay refund for a payment, with optional amount, speed, and notes. */
    "razorpay.create_refund": {
      input: {
        /**
         * The Razorpay payment identifier to refund.
         * @minLength 1
         * @pattern \S
         */
        paymentId: string;
        /**
         * The refund amount in the smallest currency subunit.
         * @minimum 1
         */
        amount?: number;
        /** The refund processing speed requested from Razorpay. */
        speed?: "normal" | "optimum";
        /**
         * Your internal refund receipt reference.
         * @minLength 1
         * @maxLength 40
         * @pattern \S
         */
        receipt?: string;
        /** Key-value pairs forwarded to Razorpay notes. Razorpay accepts up to 15 pairs. */
        notes?: Record<string, string>;
      };
      output: {
        /** A normalized Razorpay refund. */
        refund: {
          /**
           * The unique identifier of the Razorpay refund.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The entity type returned by Razorpay.
           * @minLength 1
           * @pattern \S
           */
          entity: string;
          /**
           * The refund amount in the smallest currency subunit.
           * @minimum 1
           */
          amount: number;
          /**
           * The ISO currency code used for the refund.
           * @minLength 1
           * @pattern \S
           */
          currency: string;
          /**
           * The Razorpay payment identifier linked to the refund.
           * @minLength 1
           * @pattern \S
           */
          paymentId: string;
          /** Your internal refund receipt reference when present. */
          receipt: string | null;
          /** The notes payload returned by Razorpay. */
          notes: unknown;
          /** The dynamic acquirer data returned by Razorpay. */
          acquirerData: unknown;
          /** The Unix timestamp when the refund was created. */
          createdAt: number | null;
          /** The Razorpay batch identifier when present. */
          batchId: string | null;
          /** The refund status returned by Razorpay. */
          status: string | null;
          /** The refund speed requested in the original call. */
          speedRequested: string | null;
          /** The refund speed actually processed by Razorpay. */
          speedProcessed: string | null;
          /** The raw Razorpay refund payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch one Razorpay order by its order identifier. */
    "razorpay.get_order": {
      input: {
        /**
         * The Razorpay order identifier, such as order_9A33XWu170gUtm.
         * @minLength 1
         * @pattern \S
         */
        orderId: string;
      };
      output: {
        /** A normalized Razorpay order. */
        order: {
          /**
           * The unique identifier of the Razorpay order.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The entity type returned by Razorpay.
           * @minLength 1
           * @pattern \S
           */
          entity: string;
          /**
           * The order amount in the smallest currency subunit.
           * @minimum 1
           */
          amount: number;
          /** The amount paid against the order. */
          amountPaid: number | null;
          /** The amount still due for the order. */
          amountDue: number | null;
          /**
           * The ISO currency code used for the order.
           * @minLength 1
           * @pattern \S
           */
          currency: string;
          /** Your internal receipt reference when present. */
          receipt: string | null;
          /** The Razorpay offer identifier when present. */
          offerId: string | null;
          /** The order status returned by Razorpay. */
          status: string | null;
          /** The number of payment attempts recorded for the order. */
          attempts: number | null;
          /** The notes payload returned by Razorpay. */
          notes: unknown;
          /** The Unix timestamp when the order was created. */
          createdAt: number | null;
          /** The raw Razorpay order payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Fetch one Razorpay payment by its payment identifier. */
    "razorpay.get_payment": {
      input: {
        /**
         * The Razorpay payment identifier, such as pay_29QQoUBi66xm2f.
         * @minLength 1
         * @pattern \S
         */
        paymentId: string;
      };
      output: {
        /** A normalized Razorpay payment. */
        payment: {
          /**
           * The unique identifier of the Razorpay payment.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The entity type returned by Razorpay.
           * @minLength 1
           * @pattern \S
           */
          entity: string;
          /**
           * The payment amount in the smallest currency subunit.
           * @minimum 1
           */
          amount: number;
          /**
           * The ISO currency code used for the payment.
           * @minLength 1
           * @pattern \S
           */
          currency: string;
          /** The payment status returned by Razorpay. */
          status: string | null;
          /** The associated Razorpay order identifier when present. */
          orderId: string | null;
          /** The associated Razorpay invoice identifier when present. */
          invoiceId: string | null;
          /** Whether Razorpay marks this payment as international. */
          international: boolean | null;
          /** The payment method used for the transaction. */
          method: string | null;
          /** The refunded amount in smallest currency subunits. */
          amountRefunded: number | null;
          /** The refund status returned by Razorpay when present. */
          refundStatus: string | null;
          /** Whether the payment has been captured. */
          captured: boolean | null;
          /** The payment description when present. */
          description: string | null;
          /** The Razorpay card identifier when present. */
          cardId: string | null;
          /** The issuing bank when present. */
          bank: string | null;
          /** The wallet provider when present. */
          wallet: string | null;
          /** The UPI virtual payment address when present. */
          vpa: string | null;
          /** The customer email when present. */
          email: string | null;
          /** The customer contact number when present. */
          contact: string | null;
          /** The notes payload returned by Razorpay. */
          notes: unknown;
          /** The fee charged by Razorpay when present. */
          fee: number | null;
          /** The tax charged on the fee when present. */
          tax: number | null;
          /** The payment error code when present. */
          errorCode: string | null;
          /** The payment error description when present. */
          errorDescription: string | null;
          /** The payment error source when present. */
          errorSource: string | null;
          /** The payment error step when present. */
          errorStep: string | null;
          /** The payment error reason when present. */
          errorReason: string | null;
          /** The dynamic acquirer data object returned by Razorpay. */
          acquirerData: unknown;
          /** The Unix timestamp when the payment was created. */
          createdAt: number | null;
          /** The raw Razorpay payment payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Razorpay orders with optional receipt, status-window, and expansion filters. */
    "razorpay.list_orders": {
      input: {
        /**
         * Filter orders by authorized payment state. Use 1 or 0.
         * @minimum 0
         * @maximum 1
         */
        authorized?: number;
        /**
         * Filter orders by an exact receipt value.
         * @minLength 1
         * @maxLength 40
         * @pattern \S
         */
        receipt?: string;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        from?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        to?: number;
        /**
         * The number of orders to return. Razorpay allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The number of orders to skip for pagination.
         * @minimum 0
         */
        skip?: number;
        /**
         * Additional order sub-entities to expand in the response.
         * @minItems 1
         */
        expand?: Array<"payments" | "payments.card" | "transfers" | "virtual_account">;
      };
      output: {
        /**
         * The number of orders returned in this response.
         * @minimum 0
         */
        count: number;
        /** The normalized Razorpay orders returned by the API. */
        orders: Array<{
          /**
           * The unique identifier of the Razorpay order.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The entity type returned by Razorpay.
           * @minLength 1
           * @pattern \S
           */
          entity: string;
          /**
           * The order amount in the smallest currency subunit.
           * @minimum 1
           */
          amount: number;
          /** The amount paid against the order. */
          amountPaid: number | null;
          /** The amount still due for the order. */
          amountDue: number | null;
          /**
           * The ISO currency code used for the order.
           * @minLength 1
           * @pattern \S
           */
          currency: string;
          /** Your internal receipt reference when present. */
          receipt: string | null;
          /** The Razorpay offer identifier when present. */
          offerId: string | null;
          /** The order status returned by Razorpay. */
          status: string | null;
          /** The number of payment attempts recorded for the order. */
          attempts: number | null;
          /** The notes payload returned by Razorpay. */
          notes: unknown;
          /** The Unix timestamp when the order was created. */
          createdAt: number | null;
          /** The raw Razorpay order payload. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Razorpay collection payload. */
        raw: Record<string, unknown>;
      };
    };
    /** List Razorpay payments within an optional time window and pagination range. */
    "razorpay.list_payments": {
      input: {
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        from?: number;
        /**
         * A Unix timestamp in seconds.
         * @minimum 0
         */
        to?: number;
        /**
         * The number of payments to return. Razorpay allows up to 100.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The number of payments to skip for pagination.
         * @minimum 0
         */
        skip?: number;
      };
      output: {
        /**
         * The number of payments returned in this response.
         * @minimum 0
         */
        count: number;
        /** The normalized Razorpay payments returned by the API. */
        payments: Array<{
          /**
           * The unique identifier of the Razorpay payment.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /**
           * The entity type returned by Razorpay.
           * @minLength 1
           * @pattern \S
           */
          entity: string;
          /**
           * The payment amount in the smallest currency subunit.
           * @minimum 1
           */
          amount: number;
          /**
           * The ISO currency code used for the payment.
           * @minLength 1
           * @pattern \S
           */
          currency: string;
          /** The payment status returned by Razorpay. */
          status: string | null;
          /** The associated Razorpay order identifier when present. */
          orderId: string | null;
          /** The associated Razorpay invoice identifier when present. */
          invoiceId: string | null;
          /** Whether Razorpay marks this payment as international. */
          international: boolean | null;
          /** The payment method used for the transaction. */
          method: string | null;
          /** The refunded amount in smallest currency subunits. */
          amountRefunded: number | null;
          /** The refund status returned by Razorpay when present. */
          refundStatus: string | null;
          /** Whether the payment has been captured. */
          captured: boolean | null;
          /** The payment description when present. */
          description: string | null;
          /** The Razorpay card identifier when present. */
          cardId: string | null;
          /** The issuing bank when present. */
          bank: string | null;
          /** The wallet provider when present. */
          wallet: string | null;
          /** The UPI virtual payment address when present. */
          vpa: string | null;
          /** The customer email when present. */
          email: string | null;
          /** The customer contact number when present. */
          contact: string | null;
          /** The notes payload returned by Razorpay. */
          notes: unknown;
          /** The fee charged by Razorpay when present. */
          fee: number | null;
          /** The tax charged on the fee when present. */
          tax: number | null;
          /** The payment error code when present. */
          errorCode: string | null;
          /** The payment error description when present. */
          errorDescription: string | null;
          /** The payment error source when present. */
          errorSource: string | null;
          /** The payment error step when present. */
          errorStep: string | null;
          /** The payment error reason when present. */
          errorReason: string | null;
          /** The dynamic acquirer data object returned by Razorpay. */
          acquirerData: unknown;
          /** The Unix timestamp when the payment was created. */
          createdAt: number | null;
          /** The raw Razorpay payment payload. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Razorpay collection payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
