import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve account-level Stay AI settings for the current API key. */
    "stay_ai.get_account_settings": {
      input: {
        /**
         * The Stay AI account ID whose settings should be retrieved.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** Stay AI account settings. */
        settings: {
          /** Email sender name configured for the account. */
          emailSenderName?: string;
          /** Email sender address configured for the account. */
          emailSenderAddress?: string;
          /** Email reply-to name configured for the account. */
          emailReplyName?: string;
          /** Email reply-to address configured for the account. */
          emailReplyAddress?: string;
          /** Notification delay setting returned by Stay AI. */
          notificationDelay?: number;
          /** Whether the account allows multiple discounts. */
          enableMultipleDiscounts?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Stay AI subscription by Shopify or internal subscription ID. */
    "stay_ai.get_subscription": {
      input: {
        /**
         * Shopify or internal subscription ID.
         * @minLength 1
         */
        subscriptionId: string;
      };
      output: {
        /** Stay AI subscription object. */
        subscription: {
          /** Stay AI internal subscription record ID. */
          id?: string;
          /** Shopify subscription contract global ID. */
          subscriptionId?: string;
          /** Shopify customer ID. */
          customerId?: string;
          /** Customer email address. */
          emailAddress?: string;
          /** Timestamp when the subscription was created. */
          createdAt?: string;
          /** Timestamp when the subscription was last updated. */
          updatedAt?: string;
          /** Timestamp for the next billing date. */
          nextBillingDate?: string;
          /** Subscription status returned by Stay AI. */
          status?: string;
          /** Currency code for the subscription. */
          currency?: string;
          /** Subscription price returned by Stay AI. */
          price?: number;
          /** Subscription line items returned by Stay AI. */
          lineItems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Query Stay AI orders with documented filters, sorting, and pagination. */
    "stay_ai.list_orders": {
      input: {
        /** Minimum created timestamp in milliseconds. */
        createdAtMin?: number;
        /** Maximum created timestamp in milliseconds. */
        createdAtMax?: number;
        /** Minimum updated timestamp in milliseconds. */
        updatedAtMin?: number;
        /** Maximum updated timestamp in milliseconds. */
        updatedAtMax?: number;
        /**
         * Page number to request. Stay AI pages start from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records per page. Stay AI documents 5 to 100.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
        /** Field used to sort Stay AI records. */
        sortBy?: "createdAt" | "updatedAt";
        /** Sort direction accepted by Stay AI. */
        sortDirection?: "asc" | "desc";
      };
      output: {
        /** Total number of matching orders. */
        total: number;
        /** Orders returned by Stay AI. */
        orders: Array<{
          /** Shopify order global ID. */
          orderId?: string;
          /** Shopify order display name. */
          orderName?: string;
          /** Shopify customer ID. */
          customerId?: string;
          /** Shopify subscription contract global ID. */
          subscriptionId?: string;
          /** Timestamp when the order was created. */
          createdAt?: string;
          /** Timestamp when the order was last updated. */
          updatedAt?: string;
          /** Order fulfillment status. */
          fulfillmentStatus?: string;
          /** Currency code for the order. */
          currency?: string;
          /** Total order price returned by Stay AI. */
          totalPrice?: number;
          /** Order line items returned by Stay AI. */
          lineItems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Query Stay AI subscriptions with documented filters, sorting, and pagination. */
    "stay_ai.list_subscriptions": {
      input: {
        /**
         * Customer email address to filter subscriptions.
         * @format email
         */
        email?: string;
        /** Subscription status to filter by. */
        status?: "ACTIVE" | "PAUSED" | "CANCELLED";
        /** Minimum created timestamp in milliseconds. */
        createdAtMin?: number;
        /** Maximum created timestamp in milliseconds. */
        createdAtMax?: number;
        /** Minimum updated timestamp in milliseconds. */
        updatedAtMin?: number;
        /** Maximum updated timestamp in milliseconds. */
        updatedAtMax?: number;
        /** Minimum next billing timestamp in milliseconds. */
        nextBillingDateMin?: number;
        /** Maximum next billing timestamp in milliseconds. */
        nextBillingDateMax?: number;
        /** Minimum prepaid subscription next delivery timestamp in milliseconds. */
        prepaidNextDeliveryDateMin?: number;
        /** Maximum prepaid subscription next delivery timestamp in milliseconds. */
        prepaidNextDeliveryDateMax?: number;
        /**
         * Page number to request. Stay AI pages start from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of records per page. Stay AI documents 5 to 100.
         * @minimum 5
         * @maximum 100
         */
        pageSize?: number;
        /** Field used to sort Stay AI records. */
        sortBy?: "createdAt" | "updatedAt";
        /** Sort direction accepted by Stay AI. */
        sortDirection?: "asc" | "desc";
      };
      output: {
        /** Total number of matching subscriptions. */
        total: number;
        /** Subscriptions returned by Stay AI. */
        subscriptions: Array<{
          /** Stay AI internal subscription record ID. */
          id?: string;
          /** Shopify subscription contract global ID. */
          subscriptionId?: string;
          /** Shopify customer ID. */
          customerId?: string;
          /** Customer email address. */
          emailAddress?: string;
          /** Timestamp when the subscription was created. */
          createdAt?: string;
          /** Timestamp when the subscription was last updated. */
          updatedAt?: string;
          /** Timestamp for the next billing date. */
          nextBillingDate?: string;
          /** Subscription status returned by Stay AI. */
          status?: string;
          /** Currency code for the subscription. */
          currency?: string;
          /** Subscription price returned by Stay AI. */
          price?: number;
          /** Subscription line items returned by Stay AI. */
          lineItems?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
