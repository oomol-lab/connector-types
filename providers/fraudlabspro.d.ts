import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send approve or reject feedback for a FraudLabs Pro order transaction. */
    "fraudlabspro.feedback_order": {
      input: {
        /**
         * The FraudLabs Pro transaction id returned by the Screen Order API.
         * @minLength 1
         */
        id: string;
        /** The feedback action to apply to the transaction. */
        action: "APPROVE" | "REJECT" | "REJECT_BLACKLIST";
        /**
         * Optional merchant note explaining the feedback decision.
         * @minLength 1
         */
        note?: string;
      };
      output: {
        /** The feedback status returned by FraudLabs Pro. */
        status?: string;
        /** The feedback message returned by FraudLabs Pro. */
        message?: string;
        /** The error message returned by FraudLabs Pro when present. */
        error?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a FraudLabs Pro order screening result by transaction id. */
    "fraudlabspro.get_order_result": {
      input: {
        /**
         * The FraudLabs Pro transaction id returned by the Screen Order API.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The FraudLabs Pro transaction id. */
        fraudlabspro_id: string | null;
        /** The fraud score returned by FraudLabs Pro. */
        fraudlabspro_score: number | null;
        /** The final action returned by FraudLabs Pro. */
        fraudlabspro_status: "APPROVE" | "REJECT" | "REVIEW" | null;
        /** The FraudLabs Pro rules triggered by the system. */
        fraudlabspro_rules: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** Screen an order transaction for fraud risk with FraudLabs Pro. */
    "fraudlabspro.screen_order": {
      input: {
        /**
         * The customer IP address for the transaction.
         * @minLength 1
         */
        ip: string;
        /**
         * The merchant order id for the transaction.
         * @minLength 1
         */
        userOrderId?: string;
        /**
         * The customer email address.
         * @minLength 1
         */
        email?: string;
        /** The transaction amount. */
        amount?: number;
        /**
         * The ISO 4217 currency code for the transaction.
         * @minLength 1
         */
        currency?: string;
        /**
         * The payment method or mode used by the customer.
         * @minLength 1
         */
        paymentMode?: string;
        /**
         * The customer first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * The customer last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * The customer phone number.
         * @minLength 1
         */
        userPhone?: string;
        /**
         * The hashed customer email value accepted by FraudLabs Pro.
         * @minLength 1
         */
        emailHash?: string;
        /**
         * The customer email domain.
         * @minLength 1
         */
        emailDomain?: string;
        /**
         * The payment card BIN or IIN value.
         * @minLength 1
         */
        binNo?: string;
        /**
         * The number of items in the order.
         * @exclusiveMinimum 0
         */
        quantity?: number;
        /**
         * The coupon code used for the order.
         * @minLength 1
         */
        couponCode?: string;
        /**
         * The FraudLabs Pro checksum value for the transaction.
         * @minLength 1
         */
        flpChecksum?: string;
      };
      output: {
        /** The FraudLabs Pro transaction id generated for the screened order. */
        fraudlabspro_id: string | null;
        /** The fraud score returned by FraudLabs Pro. */
        fraudlabspro_score: number | null;
        /** The final action returned by FraudLabs Pro. */
        fraudlabspro_status: "APPROVE" | "REJECT" | "REVIEW" | null;
        /** The merchant order id returned by FraudLabs Pro. */
        user_order_id: string | null;
        [key: string]: unknown;
      };
    };
  }
}
