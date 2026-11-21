import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Record a shipment for an eBay order's line items. Supply the carrier and tracking number together when available. This records fulfillment; it does not purchase a shipping label. */
    "ebay.create_shipping_fulfillment": {
      input: {
        /**
         * The eBay order ID returned by list_orders.
         * @minLength 1
         */
        orderId: string;
        /**
         * The line items shipped together in this package.
         * @minItems 1
         */
        lineItems: Array<{
          /**
           * The order line item ID returned by get_order.
           * @minLength 1
           */
          lineItemId: string;
          /**
           * The shipped quantity. Defaults to 1.
           * @minimum 1
           */
          quantity?: number;
        }>;
        /**
         * The actual shipment time in ISO 8601 UTC format. Defaults to the current time in eBay.
         * @format date-time
         */
        shippedDate?: string;
        /**
         * The eBay shipping carrier code, such as USPS.
         * @minLength 1
         */
        shippingCarrierCode?: string;
        /**
         * The carrier tracking number using only letters and digits, without spaces or hyphens.
         * @minLength 1
         * @pattern ^[A-Za-z0-9]+$
         */
        trackingNumber?: string;
      };
      output: {
        /**
         * The shipping fulfillment ID returned by eBay.
         * @minLength 1
         */
        fulfillmentId: string;
        /** The shipping fulfillment resource URL returned by eBay. */
        location: string;
      };
    };
    /** Get an eBay order's line items, payment details, and shipping instructions. */
    "ebay.get_order": {
      input: {
        /**
         * The eBay order ID returned by list_orders.
         * @minLength 1
         */
        orderId: string;
        /** Include a breakdown of taxes and fees. */
        fieldGroups?: "TAX_BREAKDOWN";
      };
      output: {
        /**
         * The eBay order ID returned by list_orders.
         * @minLength 1
         */
        orderId?: string;
        /** The order creation date and time. */
        creationDate?: string;
        /** The order last modification date and time. */
        lastModifiedDate?: string;
        /** The order fulfillment status. */
        orderFulfillmentStatus?: string;
        /** The order payment status. */
        orderPaymentStatus?: string;
        /** The purchased line items. */
        lineItems?: Array<Record<string, unknown>>;
        /** The buyer information returned by eBay. */
        buyer?: Record<string, unknown>;
        /** Shipping and collection instructions. */
        fulfillmentStartInstructions?: Array<Record<string, unknown>>;
        /** The order price breakdown. */
        pricingSummary?: Record<string, unknown>;
        /** The order payment summary. */
        paymentSummary?: Record<string, unknown>;
        /** Warnings returned by eBay. */
        warnings?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get a shipping fulfillment's line items, carrier, and tracking information. */
    "ebay.get_shipping_fulfillment": {
      input: {
        /**
         * The eBay order ID returned by list_orders.
         * @minLength 1
         */
        orderId: string;
        /**
         * The shipping fulfillment ID returned by eBay.
         * @minLength 1
         */
        fulfillmentId: string;
      };
      output: {
        /**
         * The shipping fulfillment ID returned by eBay.
         * @minLength 1
         */
        fulfillmentId?: string;
        /** The line items in this shipment. */
        lineItems?: Array<{
          /** The eBay order line item ID. */
          lineItemId?: string;
          /** The quantity in this package. */
          quantity?: number;
          [key: string]: unknown;
        }>;
        /** The shipment tracking number. */
        shipmentTrackingNumber?: string;
        /** The shipping carrier code. */
        shippingCarrierCode?: string;
        /** The shipment date and time in ISO 8601 format. */
        shippedDate?: string;
        [key: string]: unknown;
      };
    };
    /** Get the connected eBay account's public identity and account information. */
    "ebay.get_user": {
      input: Record<string, never>;
      output: {
        /** The immutable eBay user ID. */
        userId?: string;
        /** The eBay username. */
        username?: string;
        /** The account type. */
        accountType?: string;
        /** The marketplace where the account was registered. */
        registrationMarketplaceId?: string;
        /** The account status. */
        status?: string;
        /** Public business account information. */
        businessAccount?: Record<string, unknown>;
        /** Individual account information allowed by the granted scopes. */
        individualAccount?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List completed-checkout eBay orders. Without filters, eBay returns orders created in the last 90 days; orders older than two years are unavailable. */
    "ebay.list_orders": {
      input: {
        /** Include a breakdown of taxes and fees. */
        fieldGroups?: "TAX_BREAKDOWN";
        /**
         * Comma-separated eBay filters, such as creationdate:[2026-01-01T00:00:00.000Z..] or orderfulfillmentstatus:{NOT_STARTED|IN_PROGRESS}. If creationdate and lastmodifieddate are both present, eBay uses creationdate.
         * @minLength 1
         */
        filter?: string;
        /**
         * Orders per page. Defaults to 50.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Number of orders to skip. Defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * Up to 50 order IDs. When provided, eBay ignores all other query parameters.
         * @minItems 1
         * @maxItems 50
         */
        orderIds?: Array<string>;
      };
      output: {
        /** The orders on this page. */
        orders?: Array<{
          /**
           * The eBay order ID returned by list_orders.
           * @minLength 1
           */
          orderId?: string;
          /** The order creation date and time. */
          creationDate?: string;
          /** The order last modification date and time. */
          lastModifiedDate?: string;
          /** The order fulfillment status. */
          orderFulfillmentStatus?: string;
          /** The order payment status. */
          orderPaymentStatus?: string;
          /** The purchased line items. */
          lineItems?: Array<Record<string, unknown>>;
          /** The buyer information returned by eBay. */
          buyer?: Record<string, unknown>;
          /** Shipping and collection instructions. */
          fulfillmentStartInstructions?: Array<Record<string, unknown>>;
          /** The order price breakdown. */
          pricingSummary?: Record<string, unknown>;
          /** The order payment summary. */
          paymentSummary?: Record<string, unknown>;
          /** Warnings returned by eBay. */
          warnings?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The total number of matching orders. */
        total?: number;
        /** The returned page size. */
        limit?: number;
        /** The returned page offset. */
        offset?: number;
        /** The URL for this page. */
        href?: string;
        /** The next page URL, when available. */
        next?: string;
        /** The previous page URL, when available. */
        prev?: string;
        /** Warnings returned by eBay. */
        warnings?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List all shipping fulfillments recorded for an eBay order. */
    "ebay.list_shipping_fulfillments": {
      input: {
        /**
         * The eBay order ID returned by list_orders.
         * @minLength 1
         */
        orderId: string;
      };
      output: {
        /** The recorded shipping fulfillments. */
        fulfillments?: Array<{
          /**
           * The shipping fulfillment ID returned by eBay.
           * @minLength 1
           */
          fulfillmentId?: string;
          /** The line items in this shipment. */
          lineItems?: Array<{
            /** The eBay order line item ID. */
            lineItemId?: string;
            /** The quantity in this package. */
            quantity?: number;
            [key: string]: unknown;
          }>;
          /** The shipment tracking number. */
          shipmentTrackingNumber?: string;
          /** The shipping carrier code. */
          shippingCarrierCode?: string;
          /** The shipment date and time in ISO 8601 format. */
          shippedDate?: string;
          [key: string]: unknown;
        }>;
        /** The total number of shipping fulfillments. */
        total?: number;
        /** Warnings returned by eBay. */
        warnings?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
