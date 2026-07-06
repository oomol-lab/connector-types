import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Loop Returns destination by ID. */
    "loop_returns.get_destination": {
      input: {
        /**
         * The Loop Returns destination ID.
         * @exclusiveMinimum 0
         */
        destinationId: number;
      };
      output: {
        /** A normalized Loop Returns destination. */
        destination: {
          /** The Loop Returns destination identifier. */
          id: number;
          /** The destination type returned by Loop Returns. */
          type: string | null;
          /** The destination name. */
          name: string | null;
          /** Whether the destination is enabled. */
          enabled: boolean | null;
          /** The commerce-platform location identifier linked to this destination. */
          providerLocationId: number | null;
          /** A Loop Returns destination address. */
          address: {
            /** The street address of the destination. */
            address1: string | null;
            /** The secondary address details of the destination. */
            address2: string | null;
            /** The destination city. */
            city: string | null;
            /** The destination state or region. */
            state: string | null;
            /** The destination postal code. */
            zip: string | null;
            /** The destination country name. */
            country: string | null;
            /** The destination ISO country code. */
            countryCode: string | null;
          } | null;
          /** The raw object returned by Loop Returns. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Loop Returns return details by return ID, order ID, or order name. */
    "loop_returns.get_return_details": {
      input: {
        /**
         * The Loop Returns return ID.
         * @exclusiveMinimum 0
         */
        returnId?: number;
        /**
         * The Loop Returns order ID.
         * @exclusiveMinimum 0
         */
        orderId?: number;
        /**
         * The order name.
         * @minLength 1
         */
        orderName?: string;
        /** The currency type Loop Returns should use for currency fields. */
        currencyType?: "shop" | "presentment";
      };
      output: {
        /** A normalized Loop Returns return detail record. */
        return: {
          /** The Loop Returns return identifier. */
          id: string | null;
          /** The current return state. */
          state: string | null;
          /** The date and time when the return was created. */
          createdAt: string | null;
          /** The date and time when the return was last updated. */
          updatedAt: string | null;
          /** The Loop Returns order identifier. */
          orderId: string | null;
          /** The order name. */
          orderName: string | null;
          /** The provider order identifier, such as a Shopify order ID. */
          providerOrderId: string | null;
          /** The customer email address returned by Loop Returns. */
          customerEmail: string | null;
          /** The return currency code. */
          currency: string | null;
          /** The total cost of the return. */
          total: string | null;
          /** The refund amount returned by Loop Returns. */
          refund: string | null;
          /** The return outcome selected by the customer. */
          outcome: string | null;
          /** The carrier associated with the return. */
          carrier: string | null;
          /** The return tracking number. */
          trackingNumber: string | null;
          /** The destination identifier associated with the return. */
          destinationId: string | null;
          /** The Loop Returns status page URL for the return. */
          statusPageUrl: string | null;
          /** The return line item objects returned by Loop Returns. */
          lineItems: Array<Record<string, unknown>>;
          /** The raw object returned by Loop Returns. */
          raw: Record<string, unknown>;
        } | null;
        /** The Loop Returns message when no matching return was found. */
        message: string | null;
        /** The full raw Loop Returns response payload. */
        raw: unknown;
      };
    };
    /** List Loop Returns destinations configured for return shipments. */
    "loop_returns.list_destinations": {
      input: Record<string, never>;
      output: {
        /** The Loop Returns destinations. */
        destinations: Array<{
          /** The Loop Returns destination identifier. */
          id: number;
          /** The destination type returned by Loop Returns. */
          type: string | null;
          /** The destination name. */
          name: string | null;
          /** Whether the destination is enabled. */
          enabled: boolean | null;
          /** The commerce-platform location identifier linked to this destination. */
          providerLocationId: number | null;
          /** A Loop Returns destination address. */
          address: {
            /** The street address of the destination. */
            address1: string | null;
            /** The secondary address details of the destination. */
            address2: string | null;
            /** The destination city. */
            city: string | null;
            /** The destination state or region. */
            state: string | null;
            /** The destination postal code. */
            zip: string | null;
            /** The destination country name. */
            country: string | null;
            /** The destination ISO country code. */
            countryCode: string | null;
          } | null;
          /** The raw object returned by Loop Returns. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Loop Returns returns created or updated within an optional timeframe. */
    "loop_returns.list_returns": {
      input: {
        /**
         * The start date and time for the returns list.
         * @minLength 1
         */
        from?: string;
        /**
         * The end date and time for the returns list.
         * @minLength 1
         */
        to?: string;
        /** The date field Loop Returns should use to filter results. */
        filter?: "created_at" | "updated_at";
        /** The return state to filter by. */
        state?: "open" | "closed" | "cancelled" | "expired" | "review";
        /**
         * The number of returns to return per page.
         * @minimum 1
         * @maximum 750
         */
        pageSize?: number;
        /**
         * The Loop Returns cursor identifying the page to return.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** The URL Loop Returns returned for the next page, or null when none is available. */
        nextPageUrl: string | null;
        /** The URL Loop Returns returned for the previous page, or null when none is available. */
        previousPageUrl: string | null;
        /** The Loop Returns return summaries. */
        returns: Array<{
          /** The Loop Returns return identifier. */
          id: string;
          /** The current return state. */
          state: string | null;
          /** The date and time when the return was created. */
          createdAt: string | null;
          /** The date and time when the return was last updated. */
          updatedAt: string | null;
          /** The Loop Returns order identifier. */
          orderId: string | null;
          /** The order name. */
          orderName: string | null;
          /** The provider order identifier, such as a Shopify order ID. */
          providerOrderId: string | null;
          /** The customer email address returned by Loop Returns. */
          customer: string | null;
          /** The return currency code. */
          currency: string | null;
          /** The total cost of the return. */
          total: string | null;
          /** The return outcome selected by the customer. */
          outcome: string | null;
          /** The destination identifier associated with the return. */
          destinationId: string | null;
          /** The Loop Returns status page URL for the return. */
          statusPageUrl: string | null;
          /** The raw object returned by Loop Returns. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
