import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add shipment tracking information to a completed capture in a PayPal order. */
    "paypal.add_tracking": {
      input: {
        /**
         * The PayPal-generated order ID.
         * @minLength 1
         * @maxLength 36
         */
        orderId: string;
        /**
         * The PayPal-generated captured payment ID.
         * @minLength 1
         */
        captureId: string;
        /**
         * The carrier tracking number for the shipment.
         * @minLength 1
         * @maxLength 64
         */
        trackingNumber: string;
        /**
         * The PayPal carrier code, or OTHER for an unlisted carrier.
         * @minLength 1
         * @maxLength 64
         */
        carrier: string;
        /**
         * The carrier name when carrier is OTHER.
         * @minLength 1
         * @maxLength 64
         */
        carrierNameOther?: string;
        /** Whether PayPal should email the tracking information to the payer. */
        notifyPayer?: boolean;
        /** The order items included in this shipment. */
        items?: Array<{
          /**
           * The item name or title.
           * @minLength 1
           * @maxLength 127
           */
          name?: string;
          /**
           * The whole-number quantity included in this shipment.
           * @minimum 1
           * @maximum 9999999999
           */
          quantity?: number;
          /**
           * The merchant stock keeping unit for the item.
           * @minLength 1
           * @maxLength 127
           */
          sku?: string;
          /**
           * The public product page URL shown to the payer.
           * @maxLength 2048
           * @format uri
           */
          url?: string;
          /**
           * The public item image URL shown to the payer.
           * @maxLength 2048
           * @format uri
           */
          imageUrl?: string;
          /** The universal product code for the item. */
          upc?: {
            /** The UPC code format. */
            type: "UPC-A" | "UPC-B" | "UPC-C" | "UPC-D" | "UPC-E" | "UPC-2" | "UPC-5";
            /**
             * The numeric UPC code.
             * @minLength 6
             * @maxLength 17
             */
            code: string;
          };
        }>;
      };
      output: {
        /** The complete PayPal order resource returned by the API. */
        order: Record<string, unknown>;
      };
    };
    /** Authorize an approved PayPal order so its funds can be captured later. */
    "paypal.authorize_order": {
      input: {
        /**
         * The PayPal-generated order ID.
         * @minLength 1
         * @maxLength 36
         */
        orderId: string;
        /**
         * An optional PayPal idempotency key. Reuse it when retrying the same operation.
         * @minLength 1
         * @maxLength 108
         */
        requestId?: string;
      };
      output: {
        /** The complete PayPal order resource returned by the API. */
        order: Record<string, unknown>;
      };
    };
    /** Capture all or part of an authorized PayPal payment. */
    "paypal.capture_authorization": {
      input: {
        /**
         * The PayPal-generated authorization ID.
         * @minLength 1
         */
        authorizationId: string;
        /** The partial amount to capture, or omit it to capture the remaining authorized amount. */
        amount?: {
          /**
           * The three-character ISO 4217 currency code, such as USD or EUR.
           * @minLength 3
           * @maxLength 3
           */
          currencyCode: string;
          /**
           * The positive decimal amount represented as a string.
           * @minLength 1
           * @maxLength 32
           */
          value: string;
        };
        /**
         * The invoice identifier associated with this capture.
         * @maxLength 127
         */
        invoiceId?: string;
        /** Whether this is the final capture against the authorization. */
        finalCapture?: boolean;
        /**
         * A note about the capture shown to the payer.
         * @maxLength 255
         */
        noteToPayer?: string;
        /**
         * The text shown on the payer's card statement.
         * @maxLength 22
         */
        softDescriptor?: string;
        /**
         * Required when amount is provided; reuse the same PayPal idempotency key when retrying the operation.
         * @minLength 1
         * @maxLength 108
         */
        requestId?: string;
      };
      output: {
        /** The complete PayPal captured payment resource returned by the API. */
        capture: Record<string, unknown>;
      };
    };
    /** Capture payment for an approved PayPal order with CAPTURE intent. */
    "paypal.capture_order": {
      input: {
        /**
         * The PayPal-generated order ID.
         * @minLength 1
         * @maxLength 36
         */
        orderId: string;
        /**
         * An optional PayPal idempotency key. Reuse it when retrying the same operation.
         * @minLength 1
         * @maxLength 108
         */
        requestId?: string;
      };
      output: {
        /** The complete PayPal order resource returned by the API. */
        order: Record<string, unknown>;
      };
    };
    /** Create a PayPal order and return the approval links needed to continue checkout. */
    "paypal.create_order": {
      input: {
        /** Whether the order will be captured or authorized after approval. */
        intent: "CAPTURE" | "AUTHORIZE";
        /**
         * The purchase units included in the order.
         * @minItems 1
         * @maxItems 10
         */
        purchaseUnits: Array<{
          /**
           * The caller-defined purchase unit identifier.
           * @minLength 1
           * @maxLength 256
           */
          referenceId?: string;
          /** The total amount for a PayPal purchase unit. */
          amount: {
            /**
             * The three-character ISO 4217 currency code, such as USD or EUR.
             * @minLength 3
             * @maxLength 3
             */
            currencyCode: string;
            /**
             * The positive decimal amount represented as a string.
             * @minLength 1
             * @maxLength 32
             */
            value: string;
            /** Optional components that must add up to the purchase unit total. */
            breakdown?: {
              /** The total amount for all items. */
              itemTotal?: {
                /**
                 * The three-character ISO 4217 currency code, such as USD or EUR.
                 * @minLength 3
                 * @maxLength 3
                 */
                currencyCode: string;
                /**
                 * The non-negative decimal amount represented as a string.
                 * @minLength 1
                 * @maxLength 32
                 */
                value: string;
              };
              /** The shipping amount. */
              shipping?: {
                /**
                 * The three-character ISO 4217 currency code, such as USD or EUR.
                 * @minLength 3
                 * @maxLength 3
                 */
                currencyCode: string;
                /**
                 * The non-negative decimal amount represented as a string.
                 * @minLength 1
                 * @maxLength 32
                 */
                value: string;
              };
              /** The handling amount. */
              handling?: {
                /**
                 * The three-character ISO 4217 currency code, such as USD or EUR.
                 * @minLength 3
                 * @maxLength 3
                 */
                currencyCode: string;
                /**
                 * The non-negative decimal amount represented as a string.
                 * @minLength 1
                 * @maxLength 32
                 */
                value: string;
              };
              /** The total tax amount. */
              taxTotal?: {
                /**
                 * The three-character ISO 4217 currency code, such as USD or EUR.
                 * @minLength 3
                 * @maxLength 3
                 */
                currencyCode: string;
                /**
                 * The non-negative decimal amount represented as a string.
                 * @minLength 1
                 * @maxLength 32
                 */
                value: string;
              };
              /** The insurance amount. */
              insurance?: {
                /**
                 * The three-character ISO 4217 currency code, such as USD or EUR.
                 * @minLength 3
                 * @maxLength 3
                 */
                currencyCode: string;
                /**
                 * The non-negative decimal amount represented as a string.
                 * @minLength 1
                 * @maxLength 32
                 */
                value: string;
              };
              /** The shipping discount amount. */
              shippingDiscount?: {
                /**
                 * The three-character ISO 4217 currency code, such as USD or EUR.
                 * @minLength 3
                 * @maxLength 3
                 */
                currencyCode: string;
                /**
                 * The non-negative decimal amount represented as a string.
                 * @minLength 1
                 * @maxLength 32
                 */
                value: string;
              };
              /** The order discount amount. */
              discount?: {
                /**
                 * The three-character ISO 4217 currency code, such as USD or EUR.
                 * @minLength 3
                 * @maxLength 3
                 */
                currencyCode: string;
                /**
                 * The non-negative decimal amount represented as a string.
                 * @minLength 1
                 * @maxLength 32
                 */
                value: string;
              };
            };
          };
          /**
           * The purchase description.
           * @minLength 1
           * @maxLength 3000
           */
          description?: string;
          /**
           * The external reconciliation identifier.
           * @minLength 1
           * @maxLength 255
           */
          customId?: string;
          /**
           * The merchant invoice identifier, which should be unique.
           * @minLength 1
           * @maxLength 127
           */
          invoiceId?: string;
          /**
           * The statement descriptor input; PayPal reflects only the first 22 characters in responses and card statements.
           * @minLength 1
           * @maxLength 1000
           */
          softDescriptor?: string;
          /**
           * The items purchased in this purchase unit.
           * @minItems 1
           */
          items?: Array<{
            /**
             * The item name or title.
             * @minLength 1
             * @maxLength 127
             */
            name: string;
            /** The price for one unit of the item. */
            unitAmount: {
              /**
               * The three-character ISO 4217 currency code, such as USD or EUR.
               * @minLength 3
               * @maxLength 3
               */
              currencyCode: string;
              /**
               * The non-negative decimal amount represented as a string.
               * @minLength 1
               * @maxLength 32
               */
              value: string;
            };
            /**
             * The whole-number quantity purchased.
             * @minimum 1
             * @maximum 9999999999
             */
            quantity: number;
            /** The tax charged for one unit of the item. */
            tax?: {
              /**
               * The three-character ISO 4217 currency code, such as USD or EUR.
               * @minLength 3
               * @maxLength 3
               */
              currencyCode: string;
              /**
               * The non-negative decimal amount represented as a string.
               * @minLength 1
               * @maxLength 32
               */
              value: string;
            };
            /**
             * A detailed item description.
             * @maxLength 2048
             */
            description?: string;
            /**
             * The stock keeping unit for the item.
             * @maxLength 127
             */
            sku?: string;
            /** The PayPal item category. */
            category?: "DIGITAL_GOODS" | "PHYSICAL_GOODS" | "DONATION";
            /**
             * The public product page URL shown to the payer.
             * @maxLength 2048
             * @format uri
             */
            url?: string;
            /**
             * The public image URL shown for the item.
             * @maxLength 2048
             * @format uri
             */
            imageUrl?: string;
          }>;
          /** A shipping name and address supplied to PayPal for this purchase unit. */
          shipping?: {
            /**
             * The full name of the shipment recipient.
             * @minLength 1
             * @maxLength 300
             */
            fullName: string;
            /**
             * The first line of the shipping address.
             * @minLength 1
             * @maxLength 300
             */
            addressLine1: string;
            /**
             * The second line of the shipping address.
             * @maxLength 300
             */
            addressLine2?: string;
            /**
             * The city, town, or locality for the shipping address.
             * @maxLength 120
             */
            city?: string;
            /**
             * The state, province, or region for the shipping address.
             * @maxLength 300
             */
            state?: string;
            /**
             * The postal or ZIP code for the shipping address.
             * @maxLength 60
             */
            postalCode?: string;
            /**
             * The two-character ISO 3166-1 country code, such as US or GB; use C2 for PayPal's supported China cross-border cases.
             * @minLength 2
             * @maxLength 2
             */
            countryCode: string;
          };
        }>;
        /** Optional settings for the payer's PayPal approval experience. */
        paypalExperience?: {
          /**
           * The business name shown during PayPal checkout.
           * @minLength 1
           * @maxLength 127
           */
          brandName?: string;
          /**
           * The BCP 47 locale for PayPal checkout pages, such as en-US.
           * @minLength 2
           * @maxLength 10
           */
          locale?: string;
          /** How PayPal obtains the shipping address. */
          shippingPreference?: "GET_FROM_FILE" | "NO_SHIPPING" | "SET_PROVIDED_ADDRESS";
          /**
           * The URL where PayPal redirects the payer after approval.
           * @format uri
           */
          returnUrl?: string;
          /**
           * The URL where PayPal redirects the payer after cancellation.
           * @format uri
           */
          cancelUrl?: string;
          /** The PayPal checkout landing page preference. */
          landingPage?: "LOGIN" | "GUEST_CHECKOUT" | "NO_PREFERENCE" | "BILLING";
          /** Whether checkout shows Continue or Pay Now. */
          userAction?: "CONTINUE" | "PAY_NOW";
          /** The merchant payment method preference. */
          paymentMethodPreference?: "UNRESTRICTED" | "IMMEDIATE_PAYMENT_REQUIRED";
        };
        /**
         * An optional PayPal idempotency key. Reuse it when retrying the same operation.
         * @minLength 1
         * @maxLength 108
         */
        requestId?: string;
      };
      output: {
        /** The complete PayPal order resource returned by the API. */
        order: Record<string, unknown>;
      };
    };
    /** Retrieve details for a PayPal authorized payment. */
    "paypal.get_authorization": {
      input: {
        /**
         * The PayPal-generated authorization ID.
         * @minLength 1
         */
        authorizationId: string;
      };
      output: {
        /** The complete PayPal authorization resource returned by the API. */
        authorization: Record<string, unknown>;
      };
    };
    /** Retrieve PayPal account balances, including available and withheld amounts by currency. */
    "paypal.get_balances": {
      input: {
        /**
         * An optional historical date and time, or omit it for the latest refreshed balances.
         * @format date-time
         */
        asOfTime?: string;
        /**
         * A three-character ISO 4217 currency code, or ALL for every currency.
         * @minLength 3
         * @maxLength 3
         */
        currencyCode?: string;
      };
      output: {
        /** The PayPal balances grouped by currency. */
        balances: Array<Record<string, unknown>>;
        /** The PayPal account ID associated with the balances. */
        accountId?: string;
        /**
         * The date and time represented by the balances.
         * @format date-time
         */
        asOfTime?: string;
        /**
         * The date and time when PayPal last refreshed the balances.
         * @format date-time
         */
        lastRefreshedAt?: string;
      };
    };
    /** Retrieve details for a captured PayPal payment. */
    "paypal.get_capture": {
      input: {
        /**
         * The PayPal-generated captured payment ID.
         * @minLength 1
         */
        captureId: string;
      };
      output: {
        /** The complete PayPal captured payment resource returned by the API. */
        capture: Record<string, unknown>;
      };
    };
    /** Retrieve the current details and status of a PayPal order. */
    "paypal.get_order": {
      input: {
        /**
         * The PayPal-generated order ID.
         * @minLength 1
         * @maxLength 36
         */
        orderId: string;
        /** Whether PayPal should include the payment_source field in the response. */
        includePaymentSource?: boolean;
      };
      output: {
        /** The complete PayPal order resource returned by the API. */
        order: Record<string, unknown>;
      };
    };
    /** Retrieve the current details and status of a PayPal refund. */
    "paypal.get_refund": {
      input: {
        /**
         * The PayPal-generated refund ID.
         * @minLength 1
         */
        refundId: string;
      };
      output: {
        /** The complete PayPal refund resource returned by the API. */
        refund: Record<string, unknown>;
      };
    };
    /** List PayPal account transactions for reconciliation, support, and financial reporting. */
    "paypal.list_transactions": {
      input: {
        /**
         * The inclusive start date and time for the transaction search.
         * @format date-time
         */
        startDate: string;
        /**
         * The inclusive end date and time, no more than 31 days after startDate.
         * @format date-time
         */
        endDate: string;
        /**
         * A PayPal transaction or order ID to match.
         * @minLength 17
         * @maxLength 19
         */
        transactionId?: string;
        /**
         * A PayPal transaction event code, such as T0006 for an Express Checkout payment.
         * @minLength 1
         */
        transactionType?: string;
        /** The transaction status to match. */
        transactionStatus?: "D" | "P" | "S" | "V";
        /**
         * A PayPal amount range in lower denominations, such as [500 TO 1005].
         * @minLength 1
         */
        transactionAmountRange?: string;
        /**
         * The three-character ISO 4217 currency code, such as USD or EUR.
         * @minLength 3
         * @maxLength 3
         */
        currencyCode?: string;
        /** The payment instrument type to match. */
        paymentInstrumentType?: "CREDITCARD" | "DEBITCARD";
        /**
         * The merchant store ID to match.
         * @minLength 1
         * @maxLength 100
         */
        storeId?: string;
        /**
         * The merchant terminal ID to match.
         * @minLength 1
         * @maxLength 60
         */
        terminalId?: string;
        /**
         * The transaction detail groups to include, or all for every available group.
         * @minItems 1
         * @maxItems 8
         */
        fields?: Array<"transaction_info" | "payer_info" | "shipping_info" | "auction_info" | "cart_info" | "incentive_info" | "store_info" | "all">;
        /** Whether to return only transactions that affect the PayPal account balance. */
        balanceAffectingRecordsOnly?: boolean;
        /**
         * The maximum number of transactions to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /**
         * The one-based page number to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The matching PayPal transaction details. */
        transactions: Array<Record<string, unknown>>;
        /** The merchant account number returned by PayPal. */
        accountNumber?: string;
        /**
         * The start date and time represented by this result.
         * @format date-time
         */
        startDate?: string;
        /**
         * The end date and time represented by this result.
         * @format date-time
         */
        endDate?: string;
        /**
         * The date and time when PayPal last refreshed this report.
         * @format date-time
         */
        lastRefreshedAt?: string;
        /** The returned page number. */
        page?: number;
        /** The total number of matching transactions. */
        totalItems?: number;
        /** The total number of result pages. */
        totalPages?: number;
      };
    };
    /** Refund all or part of a captured PayPal payment. */
    "paypal.refund_capture": {
      input: {
        /**
         * The PayPal-generated captured payment ID.
         * @minLength 1
         */
        captureId: string;
        /** The partial amount to refund, or omit it to refund the remaining captured amount. */
        amount?: {
          /**
           * The three-character ISO 4217 currency code, such as USD or EUR.
           * @minLength 3
           * @maxLength 3
           */
          currencyCode: string;
          /**
           * The positive decimal amount represented as a string.
           * @minLength 1
           * @maxLength 32
           */
          value: string;
        };
        /**
         * The merchant reconciliation identifier for this refund.
         * @minLength 1
         * @maxLength 127
         */
        customId?: string;
        /**
         * The merchant invoice identifier for this refund.
         * @minLength 1
         * @maxLength 127
         */
        invoiceId?: string;
        /**
         * The refund reason shown to the payer.
         * @minLength 1
         * @maxLength 255
         */
        noteToPayer?: string;
        /**
         * Required when amount is provided; reuse the same PayPal idempotency key when retrying the operation.
         * @minLength 1
         * @maxLength 108
         */
        requestId?: string;
      };
      output: {
        /** The complete PayPal refund resource returned by the API. */
        refund: Record<string, unknown>;
      };
    };
    /** Update an order shipment tracker, replace its items, notify the payer, or cancel it. */
    "paypal.update_tracking": {
      input: {
        /**
         * The PayPal-generated order ID.
         * @minLength 1
         * @maxLength 36
         */
        orderId: string;
        /**
         * The tracker ID returned in the PayPal order resource.
         * @minLength 1
         * @maxLength 100
         */
        trackerId: string;
        /** Set to true to cancel this shipment tracker. */
        cancel?: true;
        /** Whether PayPal should notify the payer about this shipment. */
        notifyPayer?: boolean;
        /** The complete replacement set of order items included in this shipment. */
        items?: Array<{
          /**
           * The item name or title.
           * @minLength 1
           * @maxLength 127
           */
          name?: string;
          /**
           * The whole-number quantity included in this shipment.
           * @minimum 1
           * @maximum 9999999999
           */
          quantity?: number;
          /**
           * The merchant stock keeping unit for the item.
           * @minLength 1
           * @maxLength 127
           */
          sku?: string;
          /**
           * The public product page URL shown to the payer.
           * @maxLength 2048
           * @format uri
           */
          url?: string;
          /**
           * The public item image URL shown to the payer.
           * @maxLength 2048
           * @format uri
           */
          imageUrl?: string;
          /** The universal product code for the item. */
          upc?: {
            /** The UPC code format. */
            type: "UPC-A" | "UPC-B" | "UPC-C" | "UPC-D" | "UPC-E" | "UPC-2" | "UPC-5";
            /**
             * The numeric UPC code.
             * @minLength 6
             * @maxLength 17
             */
            code: string;
          };
        }>;
      };
      output: {
        /**
         * The PayPal-generated order ID.
         * @minLength 1
         * @maxLength 36
         */
        orderId: string;
        /**
         * The PayPal tracker ID that was updated.
         * @minLength 1
         * @maxLength 100
         */
        trackerId: string;
        /** Whether PayPal accepted the tracking update. */
        updated: boolean;
      };
    };
    /** Void a PayPal authorization that has not been fully captured. */
    "paypal.void_authorization": {
      input: {
        /**
         * The PayPal-generated authorization ID.
         * @minLength 1
         */
        authorizationId: string;
        /**
         * An optional PayPal idempotency key. Reuse it when retrying the same operation.
         * @minLength 1
         * @maxLength 108
         */
        requestId?: string;
      };
      output: {
        /**
         * The PayPal-generated authorization ID.
         * @minLength 1
         */
        authorizationId: string;
        /** Whether PayPal accepted the void operation. */
        voided: boolean;
      };
    };
  }
}
