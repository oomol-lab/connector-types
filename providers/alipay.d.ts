import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a signed Alipay mobile website checkout URL locally. The buyer must open the URL and complete payment; use query_payment to verify the transaction status. */
    "alipay.create_mobile_payment": {
      input: {
        /**
         * Unique merchant order number containing only letters, digits, or underscores. Reuse it for the same order.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_]+$
         */
        out_trade_no: string;
        /**
         * Order total in CNY, from 0.01 to 100000000, with at most two decimal places.
         * @pattern ^(?:0\.(?:0[1-9]|[1-9][0-9]?)|[1-9][0-9]{0,7}(?:\.[0-9]{1,2})?|100000000(?:\.0{1,2})?)$
         */
        total_amount: string;
        /**
         * Order title, up to 256 characters. Do not include /, =, or &.
         * @minLength 1
         * @maxLength 256
         * @pattern ^[^/=&]+$
         */
        subject: string;
        /**
         * HTTP or HTTPS URL to redirect the buyer after payment. A redirect does not prove payment success.
         * @maxLength 256
         * @pattern ^https?://
         * @format uri
         */
        return_url?: string;
        /**
         * HTTP or HTTPS URL where Alipay sends payment notifications. Your receiving service must verify signatures and order details.
         * @maxLength 256
         * @pattern ^https?://
         * @format uri
         */
        notify_url?: string;
        /** Additional documented business parameters, such as goods_detail or query_options. Do not include credentials, public protocol parameters, or fields declared separately by this action. */
        extra_biz_content?: Record<string, unknown>;
      };
      output: {
        /** Open this signed URL to pay. If appAuthToken is configured, the URL includes it; share only with the buyer. */
        payment_url: string;
        /** Merchant order number included in the payment URL. */
        out_trade_no: string;
      };
    };
    /** Generate a signed Alipay desktop checkout URL locally. The buyer must open the URL and complete payment; use query_payment to verify the transaction status. */
    "alipay.create_web_payment": {
      input: {
        /**
         * Unique merchant order number containing only letters, digits, or underscores. Reuse it for the same order.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_]+$
         */
        out_trade_no: string;
        /**
         * Order total in CNY, from 0.01 to 100000000, with at most two decimal places.
         * @pattern ^(?:0\.(?:0[1-9]|[1-9][0-9]?)|[1-9][0-9]{0,7}(?:\.[0-9]{1,2})?|100000000(?:\.0{1,2})?)$
         */
        total_amount: string;
        /**
         * Order title, up to 256 characters. Do not include /, =, or &.
         * @minLength 1
         * @maxLength 256
         * @pattern ^[^/=&]+$
         */
        subject: string;
        /**
         * HTTP or HTTPS URL to redirect the buyer after payment. A redirect does not prove payment success.
         * @maxLength 256
         * @pattern ^https?://
         * @format uri
         */
        return_url?: string;
        /**
         * HTTP or HTTPS URL where Alipay sends payment notifications. Your receiving service must verify signatures and order details.
         * @maxLength 256
         * @pattern ^https?://
         * @format uri
         */
        notify_url?: string;
        /** Additional documented business parameters, such as goods_detail or query_options. Do not include credentials, public protocol parameters, or fields declared separately by this action. */
        extra_biz_content?: Record<string, unknown>;
      };
      output: {
        /** Open this signed URL to pay. If appAuthToken is configured, the URL includes it; share only with the buyer. */
        payment_url: string;
        /** Merchant order number included in the payment URL. */
        out_trade_no: string;
      };
    };
    /** Query an Alipay transaction and return its verified business response. Check trade_status and the order amount before treating a payment as complete. */
    "alipay.query_payment": {
      input: Record<string, unknown>;
      output: {
        /** Alipay API result code. 10000 indicates a successful API request, not necessarily a completed payment or refund. */
        code: string;
        /** Alipay API result message. */
        msg: string;
        /** Alipay transaction number. */
        trade_no?: string;
        /** Merchant order number. */
        out_trade_no?: string;
        /** Transaction state: WAIT_BUYER_PAY, TRADE_CLOSED, TRADE_SUCCESS, or TRADE_FINISHED. TRADE_SUCCESS and TRADE_FINISHED indicate successful payment. */
        trade_status?: string;
        /** Original order total in CNY. */
        total_amount?: string;
        /** Amount paid by the buyer in CNY, when returned. */
        buyer_pay_amount?: string;
        /** Amount received by the merchant in CNY, when returned. */
        receipt_amount?: string;
        [key: string]: unknown;
      };
    };
    /** Query an Alipay refund request. Only refund_status=REFUND_SUCCESS confirms a successful refund. Allow at least 10 seconds after requesting the refund before querying. */
    "alipay.query_refund": {
      input: Record<string, unknown>;
      output: {
        /** Alipay API result code. 10000 indicates a successful API request, not necessarily a completed payment or refund. */
        code: string;
        /** Alipay API result message. */
        msg: string;
        /** Alipay transaction number. */
        trade_no?: string;
        /** Merchant order number. */
        out_trade_no?: string;
        /** Merchant refund request number. */
        out_request_no?: string;
        /** REFUND_SUCCESS confirms refund completion. This field can be absent when the request was not received, failed, or has not finished processing. */
        refund_status?: string;
        /** Queried refund amount in CNY. */
        refund_amount?: string;
        /** Original order total in CNY. */
        total_amount?: string;
        [key: string]: unknown;
      };
    };
    /** Request a full or partial Alipay refund. Reuse out_request_no and refund_amount on retries. fund_change=Y confirms success; otherwise use query_refund to check the outcome. */
    "alipay.refund_payment": {
      input: Record<string, unknown>;
      output: {
        /** Alipay API result code. 10000 indicates a successful API request, not necessarily a completed payment or refund. */
        code: string;
        /** Alipay API result message. */
        msg: string;
        /** Alipay transaction number. */
        trade_no?: string;
        /** Merchant order number. */
        out_trade_no?: string;
        /** Y confirms a successful refund. N or an absent value requires query_refund to confirm the result. */
        fund_change?: string;
        /** Refund amount returned by Alipay in CNY. */
        refund_fee?: string;
        [key: string]: unknown;
      };
    };
  }
}
