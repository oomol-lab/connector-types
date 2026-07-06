import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current Mocean account balance. */
    "mocean.get_balance": {
      input: Record<string, never>;
      output: {
        /** Mocean response status code. Zero indicates a successful request. */
        status: number;
        /** Current Mocean account balance value returned by Mocean. */
        value: number;
      };
    };
    /** Retrieve the delivery status for a Mocean SMS message. */
    "mocean.get_message_status": {
      input: {
        /**
         * Mocean message ID returned by send_sms.
         * @minLength 1
         */
        messageId: string;
      };
      output: {
        /** Mocean response status code. Zero indicates a successful request. */
        status: number;
        /** Mocean delivery status code for the message. Documented values include delivered, failed, expired, pending, and not found. */
        messageStatus: number;
        /**
         * Mocean message identifier.
         * @minLength 1
         */
        messageId: string;
        /**
         * Credits deducted for the message.
         * @minLength 1
         */
        creditDeducted: string;
      };
    };
    /** Retrieve Mocean account pricing for SMS, number lookup, or verify services. */
    "mocean.list_pricing": {
      input: {
        /** Mocean service type to retrieve pricing for. */
        type?: "sms" | "number-lookup" | "verify";
        /**
         * Mobile Country Code to filter pricing by destination.
         * @minLength 1
         */
        mcc?: string;
        /**
         * Mobile Network Code to filter pricing by operator.
         * @minLength 1
         */
        mnc?: string;
      };
      output: {
        /** Mocean response status code. Zero indicates a successful request. */
        status: number;
        /** Pricing entries returned by Mocean for the requested destination filters. */
        destinations: Array<{
          /**
           * Destination country name returned by Mocean.
           * @minLength 1
           */
          country?: string;
          /**
           * Destination operator name returned by Mocean.
           * @minLength 1
           */
          operator?: string;
          /**
           * Mobile Country Code returned by Mocean.
           * @minLength 1
           */
          mcc?: string;
          /**
           * Mobile Network Code returned by Mocean.
           * @minLength 1
           */
          mnc?: string;
          /**
           * Price returned by Mocean for this destination.
           * @minLength 1
           */
          price?: string;
          /**
           * Currency code returned by Mocean for the price.
           * @minLength 1
           */
          currency?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Look up carrier information for a phone number through Mocean. */
    "mocean.lookup_number": {
      input: {
        /**
         * Phone number to look up, including country code.
         * @minLength 1
         */
        to: string;
      };
      output: {
        /** Mocean response status code. Zero indicates a successful request. */
        status: number;
        /**
         * Mocean message identifier for the lookup.
         * @minLength 1
         */
        messageId?: string;
        /**
         * Phone number returned by Mocean for the lookup.
         * @minLength 1
         */
        to?: string;
        /** Carrier information returned by Mocean. */
        currentCarrier?: {
          /**
           * Carrier country returned by Mocean.
           * @minLength 1
           */
          country: string;
          /**
           * Carrier name returned by Mocean.
           * @minLength 1
           */
          name: string;
          /**
           * Carrier network code returned by Mocean.
           * @minLength 1
           */
          networkCode: string;
          /**
           * Carrier Mobile Country Code returned by Mocean.
           * @minLength 1
           */
          mcc: string;
          /**
           * Carrier Mobile Network Code returned by Mocean.
           * @minLength 1
           */
          mnc: string;
          [key: string]: unknown;
        };
        /** Carrier information returned by Mocean. */
        originalCarrier?: {
          /**
           * Carrier country returned by Mocean.
           * @minLength 1
           */
          country: string;
          /**
           * Carrier name returned by Mocean.
           * @minLength 1
           */
          name: string;
          /**
           * Carrier network code returned by Mocean.
           * @minLength 1
           */
          networkCode: string;
          /**
           * Carrier Mobile Country Code returned by Mocean.
           * @minLength 1
           */
          mcc: string;
          /**
           * Carrier Mobile Network Code returned by Mocean.
           * @minLength 1
           */
          mnc: string;
          [key: string]: unknown;
        };
        /** Mocean porting status for the phone number. */
        ported?: "ported" | "not_ported" | "unknown";
      };
    };
    /** Send an SMS message through Mocean. */
    "mocean.send_sms": {
      input: {
        /**
         * SMS sender ID shown to the recipient.
         * @minLength 1
         */
        from: string;
        /**
         * Recipient phone number including country code.
         * @minLength 1
         */
        to: string;
        /**
         * SMS message text to send to the recipient.
         * @minLength 1
         */
        text: string;
        /**
         * Callback URL that Mocean should call with delivery report updates.
         * @format uri
         */
        deliveryReportUrl?: string;
      };
      output: {
        /** Per-recipient SMS submission results returned by Mocean. */
        messages: Array<{
          /** Mocean response status code. Zero indicates a successful request. */
          status: number;
          /**
           * Phone number that Mocean accepted for this message.
           * @minLength 1
           */
          receiver?: string;
          /**
           * Mocean message identifier returned for status queries.
           * @minLength 1
           */
          messageId?: string;
          /**
           * Mocean error message when the recipient submission failed.
           * @minLength 1
           */
          errorMessage?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
