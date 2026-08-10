import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a pending Waffo subscription immediately or schedule an active subscription to end after its current period. */
    "waffo.cancel_subscription": {
      input: {
        /**
         * The subscription order ID in `ORD_...` format.
         * @minLength 1
         */
        orderId: string;
      };
      output: {
        /** The Waffo subscription order ID. */
        orderId: string;
        /** The resulting subscription status. */
        status: "canceling" | "canceled";
      };
    };
    /** Create a Waffo hosted checkout session for a one-time or subscription product. */
    "waffo.create_checkout_session": {
      input: {
        /**
         * The Waffo product ID in `PROD_...` format.
         * @minLength 1
         */
        productId: string;
        /**
         * The uppercase ISO 4217 checkout currency code.
         * @minLength 3
         * @maxLength 3
         */
        currency: string;
        /** An optional merchant-controlled checkout price override. */
        priceSnapshot?: {
          /**
           * The positive price in major currency units.
           * @minLength 1
           */
          amount: string;
          /** Whether the price already includes tax. */
          taxIncluded?: boolean;
          /** The tax category applied to the checkout price. */
          taxCategory: "digital_goods" | "saas" | "software" | "ebook" | "online_course" | "consulting" | "professional_service";
        };
        /** Whether to enable the subscription product trial. */
        withTrial?: boolean;
        /** The customer email to prefill on the checkout page. */
        buyerEmail?: string;
        /** Billing details to prefill and lock for the checkout session. */
        billingDetail?: {
          /**
           * The ISO 3166-1 alpha-2 billing country code.
           * @minLength 2
           * @maxLength 2
           */
          country: string;
          /** Whether this is a business purchase. */
          isBusiness: boolean;
          /** The postal or ZIP code. */
          postcode?: string;
          /** The state or province code. */
          state?: string;
          /** The legal business name. */
          businessName?: string;
          /** The buyer tax registration number. */
          taxId?: string;
        };
        /** The HTTP(S) redirect URL used after successful checkout. */
        successUrl?: string;
        /**
         * The checkout session lifetime in seconds.
         * @minimum 1
         * @maximum 604800
         */
        expiresInSeconds?: number;
        /** Whether the hosted checkout should initially use dark mode. */
        darkMode?: boolean;
        /** Custom JSON metadata attached to the Waffo resource. */
        metadata?: Record<string, unknown>;
        /**
         * The merchant-side order reference.
         * @minLength 1
         * @maxLength 128
         */
        orderMerchantExternalId?: string;
        /** The IETF BCP 47 checkout language supported by Waffo. */
        language?: "en" | "pt-BR" | "es-MX" | "id-ID" | "vi-VN" | "ru-RU" | "en-KE" | "es-PE" | "es-CO" | "es-CL" | "zh-Hant-TW" | "zh-Hant-HK" | "th-TH" | "ja-JP" | "en-NG" | "ko-KR" | "en-HK" | "zh-Hans-HK" | "pl-PL" | "tr-TR" | "zh-Hans" | "ms-MY";
        /** The payment methods to allow for this checkout session. */
        includePaymentMethods?: Array<"card" | "applepay" | "googlepay" | "wechat">;
        /** The payment methods to hide for this checkout session. */
        excludePaymentMethods?: Array<"card" | "applepay" | "googlepay" | "wechat">;
      };
      output: {
        /** The Waffo checkout session ID. */
        sessionId: string;
        /** The hosted checkout URL to open for the customer. */
        checkoutUrl: string;
        /** The ISO 8601 checkout session expiration timestamp. */
        expiresAt: string;
      };
    };
    /** Create a one-time purchase product with multi-currency pricing in Waffo. */
    "waffo.create_one_time_product": {
      input: {
        /**
         * The Waffo store ID in `STO_...` format.
         * @minLength 1
         */
        storeId: string;
        /**
         * The product name.
         * @minLength 1
         * @maxLength 64
         */
        name: string;
        /** Prices keyed by uppercase ISO 4217 currency code. */
        prices: Record<string, {
            /**
             * The positive price in major currency units, such as `29.00`.
             * @minLength 1
             */
            amount: string;
            /** Whether the price already includes tax. */
            taxIncluded?: boolean;
            /** The tax category applied to this price. */
            taxCategory: "digital_goods" | "saas" | "software" | "ebook" | "online_course" | "consulting" | "professional_service";
          }>;
        /** The Markdown product description. */
        description?: string | null;
        /** Product images or videos displayed by Waffo. */
        media?: Array<{
          /** The media type. */
          type: "image" | "video";
          /**
           * The publicly accessible media URL.
           * @minLength 1
           */
          url: string;
          /** Alternative text for the media item. */
          alt?: string;
          /** The optional thumbnail URL, recommended for videos. */
          thumbnail?: string;
        }>;
        /**
         * The HTTP(S) redirect URL used after successful payment, or null to clear it.
         * @maxLength 512
         */
        successUrl?: string | null;
        /** Custom JSON metadata attached to the Waffo resource. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The Waffo product. */
        product: {
          /** The Waffo product ID. */
          id?: string;
          /** The owning Waffo store ID. */
          storeId?: string;
          /** The product name. */
          name?: string;
          /** The product status in the API key environment. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Request a full or partial Waffo refund for a succeeded payment. */
    "waffo.create_refund_ticket": {
      input: {
        /**
         * The succeeded payment ID in `PAY_...` format.
         * @minLength 1
         */
        paymentId: string;
        /**
         * The refund reason shown to the customer and merchant.
         * @minLength 1
         */
        reason: string;
        /** The requested refund amount. */
        requestedAmount: {
          /**
           * The positive refund amount in major currency units.
           * @minLength 1
           */
          amount: string;
          /**
           * The uppercase ISO 4217 payment currency code.
           * @minLength 3
           * @maxLength 3
           */
          currency: string;
        };
        /**
         * The merchant-side refund reference.
         * @maxLength 128
         */
        refundTicketMerchantExternalId?: string;
      };
      output: {
        /** The created Waffo refund ticket. */
        ticket: {
          /** The Waffo refund ticket ID. */
          id?: string;
          /** The refund ticket status. */
          status?: string;
          /** The refunded Waffo payment ID. */
          subjectId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Waffo store for the connected merchant account. */
    "waffo.create_store": {
      input: {
        /**
         * The store name.
         * @minLength 1
         * @maxLength 48
         */
        name: string;
      };
      output: {
        /** The created Waffo store. */
        store: {
          /** The Waffo store ID. */
          id?: string;
          /** The store name. */
          name?: string;
          /** The hosted store slug. */
          slug?: string | null;
          /** The store status. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a recurring subscription product with multi-currency pricing in Waffo. */
    "waffo.create_subscription_product": {
      input: {
        /**
         * The Waffo store ID in `STO_...` format.
         * @minLength 1
         */
        storeId: string;
        /**
         * The product name.
         * @minLength 1
         * @maxLength 64
         */
        name: string;
        /** Prices keyed by uppercase ISO 4217 currency code. */
        prices: Record<string, {
            /**
             * The positive price in major currency units, such as `29.00`.
             * @minLength 1
             */
            amount: string;
            /** Whether the price already includes tax. */
            taxIncluded?: boolean;
            /** The tax category applied to this price. */
            taxCategory: "digital_goods" | "saas" | "software" | "ebook" | "online_course" | "consulting" | "professional_service";
          }>;
        /** The Markdown product description. */
        description?: string | null;
        /** Product images or videos displayed by Waffo. */
        media?: Array<{
          /** The media type. */
          type: "image" | "video";
          /**
           * The publicly accessible media URL.
           * @minLength 1
           */
          url: string;
          /** Alternative text for the media item. */
          alt?: string;
          /** The optional thumbnail URL, recommended for videos. */
          thumbnail?: string;
        }>;
        /**
         * The HTTP(S) redirect URL used after successful payment, or null to clear it.
         * @maxLength 512
         */
        successUrl?: string | null;
        /** Custom JSON metadata attached to the Waffo resource. */
        metadata?: Record<string, unknown>;
        /** The recurring billing interval. */
        billingPeriod: "weekly" | "monthly" | "quarterly" | "yearly";
      };
      output: {
        /** The Waffo product. */
        product: {
          /** The Waffo product ID. */
          id?: string;
          /** The owning Waffo store ID. */
          storeId?: string;
          /** The product name. */
          name?: string;
          /** The product status in the API key environment. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List one-time or subscription products in the connected Waffo API key environment. */
    "waffo.list_products": {
      input: {
        /**
         * The Waffo store ID in `STO_...` format.
         * @minLength 1
         */
        storeId: string;
        /** The Waffo product billing model. */
        productType: "one_time" | "subscription";
        /** The product status to match. */
        status?: "active" | "inactive";
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of matching records to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The matching Waffo products. */
        products: Array<{
          /** The Waffo product ID. */
          id?: string;
          /** The Waffo product billing model. */
          productType?: "one_time" | "subscription";
          /** The product name. */
          name?: string;
          /** The product status in the connected API key environment. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching products. */
        total: number;
        /** The requested page size. */
        limit: number;
        /** The requested page offset. */
        offset: number;
      };
    };
    /** List stores available to the connected Waffo merchant account. */
    "waffo.list_stores": {
      input: Record<string, never>;
      output: {
        /** The Waffo stores. */
        stores: Array<{
          /** The Waffo store ID. */
          id?: string;
          /** The store name. */
          name?: string;
          /** The store status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** The number of returned stores. */
        count: number;
      };
    };
    /** Publish the active test version of a one-time or subscription product to production for the first time. */
    "waffo.publish_product": {
      input: {
        /** The Waffo product billing model. */
        productType: "one_time" | "subscription";
        /**
         * The Waffo product ID in `PROD_...` format.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The Waffo product. */
        product: {
          /** The Waffo product ID. */
          id?: string;
          /** The owning Waffo store ID. */
          storeId?: string;
          /** The product name. */
          name?: string;
          /** The product status in the API key environment. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Revise and resubmit a rejected or failed Waffo refund ticket. */
    "waffo.resubmit_refund_ticket": {
      input: {
        /**
         * The refund ticket ID in `TKT_...` format.
         * @minLength 1
         */
        ticketId: string;
        /**
         * The revised refund reason.
         * @minLength 1
         */
        reason: string;
        /** The revised refund amount. */
        requestedAmount: {
          /**
           * The positive refund amount in major currency units.
           * @minLength 1
           */
          amount: string;
          /**
           * The uppercase ISO 4217 payment currency code.
           * @minLength 3
           * @maxLength 3
           */
          currency: string;
        };
      };
      output: {
        /** The revised Waffo refund ticket. */
        ticket: {
          /** The Waffo refund ticket ID. */
          id?: string;
          /** The refund ticket status. */
          status?: string;
          /** The refunded Waffo payment ID. */
          subjectId?: string;
          /** The new refund ticket version number. */
          versionNumber?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Run a read-only query against the Waffo GraphQL API for stores, products, orders, payments, refunds, customers, or analytics. */
    "waffo.run_query": {
      input: {
        /**
         * The GraphQL query document to execute.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** GraphQL variables keyed by variable name. */
        variables?: Record<string, unknown>;
        /**
         * The operation name when the document defines multiple queries.
         * @minLength 1
         * @pattern \S
         */
        operationName?: string;
      };
      output: {
        /** The GraphQL data returned by Waffo. */
        data?: unknown;
        /** GraphQL errors returned by Waffo. */
        errors?: Array<{
          /** The GraphQL error message. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search one-time or subscription orders by store, status, merchant reference, or creation time. */
    "waffo.search_orders": {
      input: {
        /**
         * The Waffo store ID in `STO_...` format.
         * @minLength 1
         */
        storeId: string;
        /** The order billing model. */
        orderType: "one_time" | "subscription";
        /**
         * The exact Waffo order status to match.
         * @minLength 1
         */
        status?: string;
        /**
         * The merchant-side order reference to match.
         * @minLength 1
         */
        orderMerchantExternalId?: string;
        /**
         * Return records created at or after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Return records created at or before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of matching records to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The matching Waffo orders. */
        orders: Array<{
          /** The Waffo order ID. */
          id?: string;
          /** The order billing model. */
          orderType?: "one_time" | "subscription";
          /** The order status. */
          status?: string;
          /** The ISO 8601 order creation timestamp. */
          createdAt?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching orders. */
        total: number;
        /** The requested page size. */
        limit: number;
        /** The requested page offset. */
        offset: number;
      };
    };
    /** Find a Waffo payment by ID or search payments by status, merchant order reference, or creation time. */
    "waffo.search_payments": {
      input: {
        /**
         * A specific Waffo payment ID in `PAY_...` format.
         * @minLength 1
         */
        paymentId?: string;
        /**
         * The exact Waffo payment status to match.
         * @minLength 1
         */
        status?: string;
        /**
         * The merchant-side order reference to match.
         * @minLength 1
         */
        orderMerchantExternalId?: string;
        /**
         * Return records created at or after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Return records created at or before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of matching records to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The matching Waffo payments. */
        payments: Array<{
          /** The Waffo payment ID. */
          id?: string;
          /** The related Waffo order ID. */
          orderId?: string;
          /** The payment status. */
          status?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching payments. */
        total: number;
        /** The requested page size. */
        limit: number;
        /** The requested page offset. */
        offset: number;
      };
    };
    /** Search Waffo refund tickets by status, payment, merchant reference, or creation time. */
    "waffo.search_refund_tickets": {
      input: {
        /**
         * The exact Waffo refund ticket status to match.
         * @minLength 1
         */
        status?: string;
        /**
         * The Waffo payment ID associated with the ticket.
         * @minLength 1
         */
        paymentId?: string;
        /**
         * The merchant-side refund reference to match.
         * @minLength 1
         */
        refundTicketMerchantExternalId?: string;
        /**
         * Return records created at or after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Return records created at or before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of matching records to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The matching Waffo refund tickets. */
        refundTickets: Array<{
          /** The Waffo refund ticket ID. */
          id?: string;
          /** The refund ticket status. */
          status?: string;
          /** The ISO 8601 refund ticket creation timestamp. */
          createdAt?: string;
          [key: string]: unknown;
        }>;
        /** The total number of matching refund tickets. */
        total: number;
        /** The requested page size. */
        limit: number;
        /** The requested page offset. */
        offset: number;
      };
    };
    /** Activate or deactivate a one-time or subscription product in the connected Waffo API key environment. */
    "waffo.set_product_status": {
      input: {
        /** The Waffo product billing model. */
        productType: "one_time" | "subscription";
        /**
         * The Waffo product ID in `PROD_...` format.
         * @minLength 1
         */
        id: string;
        /** The new product status. */
        status: "active" | "inactive";
      };
      output: {
        /** The Waffo product. */
        product: {
          /** The Waffo product ID. */
          id?: string;
          /** The owning Waffo store ID. */
          storeId?: string;
          /** The product name. */
          name?: string;
          /** The product status in the API key environment. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a one-time or subscription product in the connected Waffo API key environment, creating an immutable version when content changes. */
    "waffo.update_product": {
      input: {
        /** The Waffo product billing model. */
        productType: "one_time" | "subscription";
        /**
         * The Waffo product ID in `PROD_...` format.
         * @minLength 1
         */
        id: string;
        /**
         * The updated product name.
         * @minLength 1
         * @maxLength 64
         */
        name?: string;
        /** The updated Markdown description, or null to clear it. */
        description?: string | null;
        /** Prices keyed by uppercase ISO 4217 currency code. */
        prices?: Record<string, {
            /**
             * The positive price in major currency units, such as `29.00`.
             * @minLength 1
             */
            amount: string;
            /** Whether the price already includes tax. */
            taxIncluded?: boolean;
            /** The tax category applied to this price. */
            taxCategory: "digital_goods" | "saas" | "software" | "ebook" | "online_course" | "consulting" | "professional_service";
          }>;
        /** Product images or videos displayed by Waffo. */
        media?: Array<{
          /** The media type. */
          type: "image" | "video";
          /**
           * The publicly accessible media URL.
           * @minLength 1
           */
          url: string;
          /** Alternative text for the media item. */
          alt?: string;
          /** The optional thumbnail URL, recommended for videos. */
          thumbnail?: string;
        }>;
        /**
         * The HTTP(S) redirect URL used after successful payment, or null to clear it.
         * @maxLength 512
         */
        successUrl?: string | null;
        /** Custom JSON metadata attached to the Waffo resource. */
        metadata?: Record<string, unknown>;
        /** The updated subscription billing interval. */
        billingPeriod?: "weekly" | "monthly" | "quarterly" | "yearly";
      };
      output: {
        /** The Waffo product. */
        product: {
          /** The Waffo product ID. */
          id?: string;
          /** The owning Waffo store ID. */
          storeId?: string;
          /** The product name. */
          name?: string;
          /** The product status in the API key environment. */
          status?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
