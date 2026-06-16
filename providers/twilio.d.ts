import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the current Twilio account profile for the connected credential. */
    "twilio.get_account": {
      input: Record<string, never>;
      output: {
        /** The Twilio account SID. */
        accountSid: string;
        /** The friendly name of the Twilio account. */
        friendlyName: string | null;
        /** The current status of the Twilio account. */
        status: string | null;
        /** The Twilio account type. */
        type: string | null;
      };
    };
    /** Fetch one Twilio message by message SID. */
    "twilio.get_message": {
      input: {
        /** The Twilio message SID to fetch. */
        messageSid: string;
      };
      output: {
        /** The Twilio message SID. */
        messageSid: string;
        /** The Twilio account SID that owns the message. */
        accountSid: string | null;
        /** The delivery status of the message. */
        status: string | null;
        /** The destination phone number. */
        to: string | null;
        /** The sender phone number. */
        from: string | null;
        /** The text body of the message. */
        body: string | null;
      };
    };
    /** List SMS or MMS messages for the connected Twilio account. */
    "twilio.list_messages": {
      input: {
        /** Only include messages sent to this phone number. */
        to?: string;
        /** Only include messages sent from this phone number. */
        from?: string;
        /**
         * The maximum number of messages to return in one page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The Twilio page token used to continue a previous listing. */
        pageToken?: string;
      };
      output: {
        /** The normalized Twilio messages. */
        messages: Array<{
          /** The Twilio message SID. */
          messageSid: string;
          /** The Twilio account SID that owns the message. */
          accountSid: string | null;
          /** The delivery status of the message. */
          status: string | null;
          /** The destination phone number. */
          to: string | null;
          /** The sender phone number. */
          from: string | null;
          /** The text body of the message. */
          body: string | null;
        }>;
        /** The next page URI returned by Twilio, if any. */
        nextPageUri: string | null;
      };
    };
    /** List Twilio usage records for the connected account. */
    "twilio.list_usage_records": {
      input: {
        /** The Twilio usage category to filter by. */
        category?: string;
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /**
         * The maximum number of usage records to return in one page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The normalized usage records returned by Twilio. */
        usageRecords: Array<{
          /** The Twilio account SID that owns the usage. */
          accountSid: string | null;
          /** The Twilio usage category. */
          category: string | null;
          /** The number of units consumed in the record. */
          count: string | null;
          /** The unit for the usage count. */
          countUnit: string | null;
          /** The aggregated usage amount. */
          usage: string | null;
          /** The unit for the aggregated usage amount. */
          usageUnit: string | null;
          /** The billed price for the usage record. */
          price: string | null;
          /** The currency unit for the billed price. */
          priceUnit: string | null;
          /** The inclusive start date of the usage record. */
          startDate: string | null;
          /** The inclusive end date of the usage record. */
          endDate: string | null;
        }>;
        /** The current Twilio result page. */
        page: number | null;
        /** The Twilio page size for this result. */
        pageSize: number | null;
        /** The next page URI returned by Twilio, if any. */
        nextPageUri: string | null;
      };
    };
    /** Send an outbound SMS or MMS message with Twilio. */
    "twilio.send_message": {
      input: {
        /** The destination phone number in E.164 format. */
        to: string;
        /** The Twilio phone number sending the message. */
        from: string;
        /** The text body of the outbound message. */
        body: string;
      };
      output: {
        /** The Twilio message SID. */
        messageSid: string;
        /** The Twilio account SID that owns the message. */
        accountSid: string | null;
        /** The delivery status of the message. */
        status: string | null;
        /** The destination phone number. */
        to: string | null;
        /** The sender phone number. */
        from: string | null;
        /** The text body of the message. */
        body: string | null;
      };
    };
  }
}
