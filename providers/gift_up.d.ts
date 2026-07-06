import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Gift Up company associated with the API key. */
    "gift_up.get_company": {
      input: Record<string, never>;
      output: {
        /** A Gift Up company. */
        company: {
          /** The company ID. */
          id: string | null;
          /** The company name. */
          name: string | null;
          /** The company currency code. */
          currency: string | null;
          /** Whether all onboarding steps are complete. */
          onboardingCompleted: boolean | null;
          /** Whether the checkout can render. */
          canShowCheckout: boolean | null;
          /** Whether the checkout has been seen live. */
          isCheckoutLive: boolean | null;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Gift Up gift card by code. */
    "gift_up.get_gift_card": {
      input: {
        /**
         * The Gift Up gift card code.
         * @minLength 1
         */
        code: string;
      };
      output: {
        /** A Gift Up gift card. */
        giftCard: {
          /** The gift card code. */
          code: string | null;
          /** The gift card title. */
          title: string | null;
          /** The gift card subtitle. */
          subTitle: string | null;
          /** The message included with the gift card. */
          message: string | null;
          /** The gift card recipient name. */
          recipientName: string | null;
          /** The gift card recipient email address. */
          recipientEmail: string | null;
          /** The gift card balance backing type. */
          backingType: string | null;
          /** The remaining currency balance. */
          remainingValue: number | null;
          /** The remaining unit balance. */
          remainingUnits: number | null;
          /** The initial currency balance. */
          initialValue: number | null;
          /** The initial unit balance. */
          initialUnits: number | null;
          /** The equivalent value per unit. */
          equivalentValuePerUnit: number | null;
          /** Whether the gift card can be redeemed. */
          canBeRedeemed: boolean | null;
          /** Whether the gift card has expired. */
          hasExpired: boolean | null;
          /** Whether the gift card is not yet valid. */
          notYetValid: boolean | null;
          /** Whether the gift card is voided. */
          isVoided: boolean | null;
          /** The datetime when the gift card was fulfilled. */
          fulfilledOn: string | null;
          /** The datetime when the gift card expires. */
          expiresOn: string | null;
          /** The datetime when the gift card becomes valid. */
          validFrom: string | null;
          /** The datetime when the gift card was voided. */
          voidedOn: string | null;
          /** The fulfillment method. */
          fulfilledBy: string | null;
          /** The terms captured when the gift card was created. */
          terms: string | null;
          /** The private SKU associated with the gift card item. */
          sku: string | null;
          /** The nested Gift Up object. */
          order: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          postalFulfilment: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          emailFulfilment: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          downloadLinks: Record<string, unknown> | null;
          /** The ledger events for the gift card. */
          ledger: Array<Record<string, unknown>>;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Gift Up item by ID. */
    "gift_up.get_item": {
      input: {
        /**
         * The Gift Up object ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Gift Up item. */
        item: {
          /** The item ID. */
          id: string | null;
          /** The item name. */
          name: string | null;
          /** The item description. */
          description: string | null;
          /** The item balance backing type. */
          backingType: string | null;
          /** The item price type. */
          priceType: string | null;
          /** The item purchaser price. */
          price: number | null;
          /** The currency balance issued by this item. */
          value: number | null;
          /** The unit balance issued by this item. */
          units: number | null;
          /** The equivalent value per unit. */
          equivalentValuePerUnit: number | null;
          /** The minimum custom price. */
          minimumPrice: number | null;
          /** The maximum custom price. */
          maximumPrice: number | null;
          /** The datetime when the item becomes available. */
          availableFrom: string | null;
          /** The datetime when the item stops being available. */
          availableUntil: string | null;
          /** The item group name. */
          group: string | null;
          /** The item group ID. */
          groupId: string | null;
          /** The item details URL. */
          detailsURL: string | null;
          /** The item artwork URL. */
          artworkURL: string | null;
          /** The item stock level. */
          stockLevel: number | null;
          /** The pre-generated item codes. */
          codes: Array<string>;
          /** The per-order item limit. */
          perOrderLimit: number | null;
          /** Additional terms for this item. */
          additionalTerms: string | null;
          /** The item SKU. */
          sku: string | null;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Gift Up order by ID or order number. */
    "gift_up.get_order": {
      input: {
        /**
         * The Gift Up order ID or order number.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Gift Up order. */
        order: {
          /** The order ID. */
          id: string | null;
          /** The presentable order reference number. */
          orderNumber: string | null;
          /** The datetime when the order was created. */
          createdOn: string | null;
          /** The selected recipient mode. */
          selectedRecipient: string | null;
          /** The purchaser email address. */
          purchaserEmail: string | null;
          /** The purchaser name. */
          purchaserName: string | null;
          /** The order currency code. */
          currency: string | null;
          /** The order revenue. */
          revenue: number | null;
          /** The order tip. */
          tip: number | null;
          /** The order service fee. */
          serviceFee: number | null;
          /** The order discount. */
          discount: number | null;
          /** The order shipping fee. */
          shippingFee: number | null;
          /** The order referrer. */
          referrer: string | null;
          /** The order source. */
          source: string | null;
          /** The promotions applied to the order. */
          promotions: Array<Record<string, unknown>>;
          /** The custom fields collected for the order. */
          customFields: Array<Record<string, unknown>>;
          /** The sales taxes for the order. */
          salesTaxes: Array<Record<string, unknown>>;
          /** The notes added to the order. */
          notes: Array<Record<string, unknown>>;
          /** The nested Gift Up object. */
          metadata: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          downloadLinks: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          payment: Record<string, unknown> | null;
          /** The fulfillment results for created gift cards. */
          fulfilments: Array<Record<string, unknown>>;
          /** The gift cards created by the order. */
          giftCards: Array<Record<string, unknown>>;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Gift Up report transaction by ID. */
    "gift_up.get_report_transaction": {
      input: {
        /**
         * The Gift Up object ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A Gift Up report transaction. */
        transaction: {
          /** The transaction ID. */
          id: string | null;
          /** The datetime when the transaction event occurred. */
          eventOccurredOn: string | null;
          /** The location ID where the transaction event occurred. */
          eventOccurredAtLocationId: string | null;
          /** The transaction event type. */
          eventType: string | null;
          /** The reason recorded for the transaction. */
          reason: string | null;
          /** The transaction referrer. */
          referrer: string | null;
          /** The nested Gift Up object. */
          metadata: Record<string, unknown> | null;
          /** The order ID associated with the transaction. */
          orderId: string | null;
          /** The transaction currency code. */
          currency: string | null;
          /** The Gift Up fee for the transaction. */
          giftUpFee: number | null;
          /** The name of the user who triggered the event. */
          whoName: string | null;
          /** The email of the user who triggered the event. */
          whoEmail: string | null;
          /** The nested Gift Up object. */
          orderDetails: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          giftCard: Record<string, unknown> | null;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Gift Up gift cards with optional filters. */
    "gift_up.list_gift_cards": {
      input: {
        /** Only include gift cards in this state. */
        status?: "active" | "expired" | "redeemed" | "voided";
        /**
         * Only include gift cards created on or after this datetime. Gift Up accepts date or datetime strings.
         * @minLength 1
         */
        createdOnOrAfter?: string;
        /**
         * Only include gift cards updated on or after this datetime. Gift Up accepts date or datetime strings.
         * @minLength 1
         */
        updatedOnOrAfter?: string;
        /**
         * The Gift Up object ID.
         * @format uuid
         */
        orderId?: string;
        /**
         * Only include gift cards with this SKU.
         * @minLength 1
         */
        sku?: string;
        /**
         * Only include gift cards for this recipient email address.
         * @format email
         */
        recipientEmail?: string;
        /**
         * Only include gift cards for this purchaser email address.
         * @format email
         */
        purchaserEmail?: string;
        /**
         * Only include gift cards with this payment provider transaction ID.
         * @minLength 1
         */
        paymentTransactionId?: string;
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of objects to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Gift Up offset pagination metadata. */
        page: {
          /** The total number of matching objects. */
          total: number | null;
          /** Whether Gift Up has more objects after this page. */
          hasMore: boolean | null;
          /** The offset used for the request. */
          offset: number | null;
          /** The limit used for the request. */
          limit: number | null;
        };
        /** The Gift Up gift cards in this page. */
        giftCards: Array<{
          /** The gift card code. */
          code: string | null;
          /** The gift card title. */
          title: string | null;
          /** The gift card subtitle. */
          subTitle: string | null;
          /** The message included with the gift card. */
          message: string | null;
          /** The gift card recipient name. */
          recipientName: string | null;
          /** The gift card recipient email address. */
          recipientEmail: string | null;
          /** The gift card balance backing type. */
          backingType: string | null;
          /** The remaining currency balance. */
          remainingValue: number | null;
          /** The remaining unit balance. */
          remainingUnits: number | null;
          /** The initial currency balance. */
          initialValue: number | null;
          /** The initial unit balance. */
          initialUnits: number | null;
          /** The equivalent value per unit. */
          equivalentValuePerUnit: number | null;
          /** Whether the gift card can be redeemed. */
          canBeRedeemed: boolean | null;
          /** Whether the gift card has expired. */
          hasExpired: boolean | null;
          /** Whether the gift card is not yet valid. */
          notYetValid: boolean | null;
          /** Whether the gift card is voided. */
          isVoided: boolean | null;
          /** The datetime when the gift card was fulfilled. */
          fulfilledOn: string | null;
          /** The datetime when the gift card expires. */
          expiresOn: string | null;
          /** The datetime when the gift card becomes valid. */
          validFrom: string | null;
          /** The datetime when the gift card was voided. */
          voidedOn: string | null;
          /** The fulfillment method. */
          fulfilledBy: string | null;
          /** The terms captured when the gift card was created. */
          terms: string | null;
          /** The private SKU associated with the gift card item. */
          sku: string | null;
          /** The nested Gift Up object. */
          order: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          postalFulfilment: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          emailFulfilment: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          downloadLinks: Record<string, unknown> | null;
          /** The ledger events for the gift card. */
          ledger: Array<Record<string, unknown>>;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Gift Up list response. */
        raw: unknown;
      };
    };
    /** List Gift Up items, optionally filtered by item group. */
    "gift_up.list_items": {
      input: {
        /**
         * The Gift Up object ID.
         * @format uuid
         */
        groupId?: string;
      };
      output: {
        /** The Gift Up items. */
        items: Array<{
          /** The item ID. */
          id: string | null;
          /** The item name. */
          name: string | null;
          /** The item description. */
          description: string | null;
          /** The item balance backing type. */
          backingType: string | null;
          /** The item price type. */
          priceType: string | null;
          /** The item purchaser price. */
          price: number | null;
          /** The currency balance issued by this item. */
          value: number | null;
          /** The unit balance issued by this item. */
          units: number | null;
          /** The equivalent value per unit. */
          equivalentValuePerUnit: number | null;
          /** The minimum custom price. */
          minimumPrice: number | null;
          /** The maximum custom price. */
          maximumPrice: number | null;
          /** The datetime when the item becomes available. */
          availableFrom: string | null;
          /** The datetime when the item stops being available. */
          availableUntil: string | null;
          /** The item group name. */
          group: string | null;
          /** The item group ID. */
          groupId: string | null;
          /** The item details URL. */
          detailsURL: string | null;
          /** The item artwork URL. */
          artworkURL: string | null;
          /** The item stock level. */
          stockLevel: number | null;
          /** The pre-generated item codes. */
          codes: Array<string>;
          /** The per-order item limit. */
          perOrderLimit: number | null;
          /** Additional terms for this item. */
          additionalTerms: string | null;
          /** The item SKU. */
          sku: string | null;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Gift Up list response. */
        raw: unknown;
      };
    };
    /** List Gift Up account locations. */
    "gift_up.list_locations": {
      input: Record<string, never>;
      output: {
        /** The Gift Up locations. */
        locations: Array<{
          /** The location ID. */
          id: string | null;
          /** The location name. */
          name: string | null;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Gift Up list response. */
        raw: unknown;
      };
    };
    /** List Gift Up orders with optional filters. */
    "gift_up.list_orders": {
      input: {
        /**
         * Only include orders created on or after this datetime. Gift Up accepts date or datetime strings.
         * @minLength 1
         */
        createdOnOrAfter?: string;
        /**
         * Only include orders for this purchaser email address.
         * @format email
         */
        purchaserEmail?: string;
        /** Only include orders from this source. */
        source?: "API" | "Checkout" | "Dashboard" | "Import" | "Square" | "Vend" | "External";
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of objects to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Gift Up offset pagination metadata. */
        page: {
          /** The total number of matching objects. */
          total: number | null;
          /** Whether Gift Up has more objects after this page. */
          hasMore: boolean | null;
          /** The offset used for the request. */
          offset: number | null;
          /** The limit used for the request. */
          limit: number | null;
        };
        /** The Gift Up orders in this page. */
        orders: Array<{
          /** The order ID. */
          id: string | null;
          /** The presentable order reference number. */
          orderNumber: string | null;
          /** The datetime when the order was created. */
          createdOn: string | null;
          /** The selected recipient mode. */
          selectedRecipient: string | null;
          /** The purchaser email address. */
          purchaserEmail: string | null;
          /** The purchaser name. */
          purchaserName: string | null;
          /** The order currency code. */
          currency: string | null;
          /** The order revenue. */
          revenue: number | null;
          /** The order tip. */
          tip: number | null;
          /** The order service fee. */
          serviceFee: number | null;
          /** The order discount. */
          discount: number | null;
          /** The order shipping fee. */
          shippingFee: number | null;
          /** The order referrer. */
          referrer: string | null;
          /** The order source. */
          source: string | null;
          /** The promotions applied to the order. */
          promotions: Array<Record<string, unknown>>;
          /** The custom fields collected for the order. */
          customFields: Array<Record<string, unknown>>;
          /** The sales taxes for the order. */
          salesTaxes: Array<Record<string, unknown>>;
          /** The notes added to the order. */
          notes: Array<Record<string, unknown>>;
          /** The nested Gift Up object. */
          metadata: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          downloadLinks: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          payment: Record<string, unknown> | null;
          /** The fulfillment results for created gift cards. */
          fulfilments: Array<Record<string, unknown>>;
          /** The gift cards created by the order. */
          giftCards: Array<Record<string, unknown>>;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Gift Up list response. */
        raw: unknown;
      };
    };
    /** List Gift Up promotions. */
    "gift_up.list_promotions": {
      input: Record<string, never>;
      output: {
        /** The Gift Up promotions. */
        promotions: Array<{
          /** The promotion ID. */
          id: string | null;
          /** The promotion name. */
          name: string | null;
          /** Whether the promotion is used for tracking only. */
          noBenefit: boolean | null;
          /** The datetime when the promotion was published. */
          publishedOn: string | null;
          /** The datetime when the promotion was stopped. */
          stoppedOn: string | null;
          /** The nested Gift Up object. */
          benefits: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          usage: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          limitations: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          triggers: Record<string, unknown> | null;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Gift Up list response. */
        raw: unknown;
      };
    };
    /** List Gift Up report transactions with optional filters. */
    "gift_up.list_report_transactions": {
      input: {
        /**
         * Only include transactions that occurred on or after this datetime. Gift Up accepts date or datetime strings.
         * @minLength 1
         */
        eventOccurredOnOrAfter?: string;
        /**
         * Only include transactions that occurred on or before this datetime. Gift Up accepts date or datetime strings.
         * @minLength 1
         */
        eventOccurredOnOrBefore?: string;
        /**
         * Only include transactions for these Gift Up event types.
         * @minItems 1
         */
        events?: Array<string>;
        /**
         * Only include transactions generated by these user email addresses.
         * @minItems 1
         */
        users?: Array<string>;
        /**
         * Only include transactions generated at these location IDs.
         * @minItems 1
         */
        locations?: Array<string>;
        /**
         * The Gift Up gift card code.
         * @minLength 1
         */
        code?: string;
        /**
         * The maximum number of objects to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The number of objects to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Gift Up offset pagination metadata. */
        page: {
          /** The total number of matching objects. */
          total: number | null;
          /** Whether Gift Up has more objects after this page. */
          hasMore: boolean | null;
          /** The offset used for the request. */
          offset: number | null;
          /** The limit used for the request. */
          limit: number | null;
        };
        /** The Gift Up report transactions in this page. */
        transactions: Array<{
          /** The transaction ID. */
          id: string | null;
          /** The datetime when the transaction event occurred. */
          eventOccurredOn: string | null;
          /** The location ID where the transaction event occurred. */
          eventOccurredAtLocationId: string | null;
          /** The transaction event type. */
          eventType: string | null;
          /** The reason recorded for the transaction. */
          reason: string | null;
          /** The transaction referrer. */
          referrer: string | null;
          /** The nested Gift Up object. */
          metadata: Record<string, unknown> | null;
          /** The order ID associated with the transaction. */
          orderId: string | null;
          /** The transaction currency code. */
          currency: string | null;
          /** The Gift Up fee for the transaction. */
          giftUpFee: number | null;
          /** The name of the user who triggered the event. */
          whoName: string | null;
          /** The email of the user who triggered the event. */
          whoEmail: string | null;
          /** The nested Gift Up object. */
          orderDetails: Record<string, unknown> | null;
          /** The nested Gift Up object. */
          giftCard: Record<string, unknown> | null;
          /** The raw Gift Up object. */
          raw: Record<string, unknown>;
        }>;
        /** The raw Gift Up list response. */
        raw: unknown;
      };
    };
    /** Reactivate a voided Gift Up gift card. */
    "gift_up.reactivate_gift_card": {
      input: {
        /**
         * The Gift Up gift card code.
         * @minLength 1
         */
        code: string;
        /** The reason to record in the Gift Up history log. */
        reason?: string;
        /**
         * The Gift Up location ID where the event occurred.
         * @format uuid
         */
        locationId?: string;
        /** Metadata key-value pairs to attach to the Gift Up event. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Whether Gift Up accepted the operation. */
        success: boolean;
        /** The raw Gift Up object. */
        raw: Record<string, unknown>;
      };
    };
    /** Redeem a currency amount or units from a Gift Up gift card. */
    "gift_up.redeem_gift_card": {
      input: {
        /**
         * The Gift Up gift card code.
         * @minLength 1
         */
        code: string;
        /**
         * The currency amount for a currency-backed gift card.
         * @exclusiveMinimum 0
         */
        amount?: number;
        /**
         * The unit quantity for a units-backed gift card.
         * @exclusiveMinimum 0
         */
        units?: number;
        /** The reason to record in the Gift Up history log. */
        reason?: string;
        /**
         * The Gift Up location ID where the event occurred.
         * @format uuid
         */
        locationId?: string;
        /** Metadata key-value pairs to attach to the Gift Up event. */
        metadata?: Record<string, unknown>;
        /**
         * The datetime when the redemption occurred. Gift Up accepts date or datetime strings.
         * @minLength 1
         */
        redeemedOn?: string;
      };
      output: {
        /** The Gift Up transaction ID. */
        transactionId: string | null;
        /** The remaining currency balance. */
        remainingCredit: number | null;
        /** The remaining unit balance. */
        remainingUnits: number | null;
        /** The redeemed currency amount. */
        redeemedAmount: number | null;
        /** The redeemed units. */
        redeemedUnits: number | null;
        /** The reversed currency amount. */
        amountReversed: number | null;
        /** The reversed units. */
        unitsReversed: number | null;
        /** Whether the transaction was already reversed. */
        alreadyReversed: boolean | null;
        /** The raw Gift Up object. */
        raw: Record<string, unknown>;
      };
    };
    /** Redeem all remaining balance from a Gift Up gift card. */
    "gift_up.redeem_gift_card_in_full": {
      input: {
        /**
         * The Gift Up gift card code.
         * @minLength 1
         */
        code: string;
        /** The reason to record in the Gift Up history log. */
        reason?: string;
        /**
         * The Gift Up location ID where the event occurred.
         * @format uuid
         */
        locationId?: string;
        /** Metadata key-value pairs to attach to the Gift Up event. */
        metadata?: Record<string, unknown>;
        /**
         * The datetime when the redemption occurred. Gift Up accepts date or datetime strings.
         * @minLength 1
         */
        redeemedOn?: string;
      };
      output: {
        /** The Gift Up transaction ID. */
        transactionId: string | null;
        /** The remaining currency balance. */
        remainingCredit: number | null;
        /** The remaining unit balance. */
        remainingUnits: number | null;
        /** The redeemed currency amount. */
        redeemedAmount: number | null;
        /** The redeemed units. */
        redeemedUnits: number | null;
        /** The reversed currency amount. */
        amountReversed: number | null;
        /** The reversed units. */
        unitsReversed: number | null;
        /** Whether the transaction was already reversed. */
        alreadyReversed: boolean | null;
        /** The raw Gift Up object. */
        raw: Record<string, unknown>;
      };
    };
    /** Add currency amount or units to a Gift Up gift card. */
    "gift_up.top_up_gift_card": {
      input: {
        /**
         * The Gift Up gift card code.
         * @minLength 1
         */
        code: string;
        /**
         * The currency amount for a currency-backed gift card.
         * @exclusiveMinimum 0
         */
        amount?: number;
        /**
         * The unit quantity for a units-backed gift card.
         * @exclusiveMinimum 0
         */
        units?: number;
        /** The reason to record in the Gift Up history log. */
        reason?: string;
        /**
         * The Gift Up location ID where the event occurred.
         * @format uuid
         */
        locationId?: string;
        /** Metadata key-value pairs to attach to the Gift Up event. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The Gift Up transaction ID. */
        transactionId: string | null;
        /** The remaining currency balance. */
        remainingCredit: number | null;
        /** The remaining unit balance. */
        remainingUnits: number | null;
        /** The redeemed currency amount. */
        redeemedAmount: number | null;
        /** The redeemed units. */
        redeemedUnits: number | null;
        /** The reversed currency amount. */
        amountReversed: number | null;
        /** The reversed units. */
        unitsReversed: number | null;
        /** Whether the transaction was already reversed. */
        alreadyReversed: boolean | null;
        /** The raw Gift Up object. */
        raw: Record<string, unknown>;
      };
    };
    /** Undo a previous Gift Up gift card redemption transaction. */
    "gift_up.undo_gift_card_redemption": {
      input: {
        /**
         * The Gift Up gift card code.
         * @minLength 1
         */
        code: string;
        /**
         * The Gift Up object ID.
         * @format uuid
         */
        transactionId: string;
        /** The reason to record in the Gift Up history log. */
        reason?: string;
        /** Metadata key-value pairs to attach to the Gift Up event. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The Gift Up transaction ID. */
        transactionId: string | null;
        /** The remaining currency balance. */
        remainingCredit: number | null;
        /** The remaining unit balance. */
        remainingUnits: number | null;
        /** The redeemed currency amount. */
        redeemedAmount: number | null;
        /** The redeemed units. */
        redeemedUnits: number | null;
        /** The reversed currency amount. */
        amountReversed: number | null;
        /** The reversed units. */
        unitsReversed: number | null;
        /** Whether the transaction was already reversed. */
        alreadyReversed: boolean | null;
        /** The raw Gift Up object. */
        raw: Record<string, unknown>;
      };
    };
    /** Void a Gift Up gift card so it can no longer be redeemed. */
    "gift_up.void_gift_card": {
      input: {
        /**
         * The Gift Up gift card code.
         * @minLength 1
         */
        code: string;
        /** The reason to record in the Gift Up history log. */
        reason?: string;
        /**
         * The Gift Up location ID where the event occurred.
         * @format uuid
         */
        locationId?: string;
        /** Metadata key-value pairs to attach to the Gift Up event. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Whether Gift Up accepted the operation. */
        success: boolean;
        /** The raw Gift Up object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
