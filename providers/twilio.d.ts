import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an outbound Twilio voice call using a TwiML URL or inline TwiML. */
    "twilio.create_call": {
      input: {
        /**
         * The phone number, SIP address, or client identifier to call.
         * @minLength 1
         */
        to: string;
        /**
         * The Twilio phone number or client identifier to use as caller ID.
         * @minLength 1
         */
        from: string;
        /**
         * The absolute URL that returns TwiML instructions for the call.
         * @format uri
         */
        url?: string;
        /**
         * Inline TwiML instructions for the call.
         * @minLength 1
         * @pattern \S
         */
        twiml?: string;
        /** The HTTP method Twilio should use. */
        method?: "GET" | "POST";
        /**
         * The fallback URL to request when the primary TwiML URL fails.
         * @format uri
         */
        fallbackUrl?: string;
        /** The fallback HTTP method Twilio should use. */
        fallbackMethod?: "GET" | "POST";
        /**
         * The URL that receives asynchronous call status callbacks.
         * @format uri
         */
        statusCallback?: string;
        /** Call progress events to send to the status callback. */
        statusCallbackEvent?: Array<"initiated" | "ringing" | "answered" | "completed">;
        /** The callback HTTP method Twilio should use. */
        statusCallbackMethod?: "GET" | "POST";
      };
      output: {
        /** The Twilio call SID. */
        callSid: string;
        /** The Twilio account SID that owns the call. */
        accountSid: string | null;
        /** The current or final call status. */
        status: string | null;
        /** The direction of the call. */
        direction: string | null;
        /** The called phone number, SIP address, or client identifier. */
        to: string | null;
        /** The caller phone number or client identifier. */
        from: string | null;
        /** The call duration in seconds. */
        duration: string | null;
        /** The price charged for the call. */
        price: string | null;
        /** The currency used for the call price. */
        priceUnit: string | null;
        /** The time when the call started. */
        startTime: string | null;
        /** The time when the call ended. */
        endTime: string | null;
        /** The time when the call resource was created. */
        dateCreated: string | null;
        /** The time when the call resource was last updated. */
        dateUpdated: string | null;
        /** The SID of the Twilio phone number used for the call. */
        phoneNumberSid: string | null;
        /** The parent call SID when this is a child call. */
        parentCallSid: string | null;
        /** The estimated queue time in milliseconds. */
        queueTime: string | null;
        /** The relative URI of the Twilio call resource. */
        uri: string | null;
      };
    };
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
    /** Fetch one Twilio voice call by call SID. */
    "twilio.get_call": {
      input: {
        /**
         * The Twilio call SID to fetch.
         * @minLength 1
         */
        callSid: string;
      };
      output: {
        /** The Twilio call SID. */
        callSid: string;
        /** The Twilio account SID that owns the call. */
        accountSid: string | null;
        /** The current or final call status. */
        status: string | null;
        /** The direction of the call. */
        direction: string | null;
        /** The called phone number, SIP address, or client identifier. */
        to: string | null;
        /** The caller phone number or client identifier. */
        from: string | null;
        /** The call duration in seconds. */
        duration: string | null;
        /** The price charged for the call. */
        price: string | null;
        /** The currency used for the call price. */
        priceUnit: string | null;
        /** The time when the call started. */
        startTime: string | null;
        /** The time when the call ended. */
        endTime: string | null;
        /** The time when the call resource was created. */
        dateCreated: string | null;
        /** The time when the call resource was last updated. */
        dateUpdated: string | null;
        /** The SID of the Twilio phone number used for the call. */
        phoneNumberSid: string | null;
        /** The parent call SID when this is a child call. */
        parentCallSid: string | null;
        /** The estimated queue time in milliseconds. */
        queueTime: string | null;
        /** The relative URI of the Twilio call resource. */
        uri: string | null;
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
    /** List Twilio voice calls with optional recipient, status, date, and pagination filters. */
    "twilio.list_calls": {
      input: {
        /** Only include calls made to this phone number, SIP address, or client identifier. */
        to?: string;
        /** Only include calls made from this phone number, SIP address, or client identifier. */
        from?: string;
        /** The Twilio call status to filter by. */
        status?: "queued" | "ringing" | "in-progress" | "canceled" | "completed" | "busy" | "no-answer" | "failed";
        /**
         * Only include calls that started on or after this date.
         * @format date
         */
        startTime?: string;
        /**
         * Only include calls that started before this date.
         * @format date
         */
        endTime?: string;
        /** Only include child calls of this parent call SID. */
        parentCallSid?: string;
        /**
         * The maximum number of records to return in one page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** The Twilio page token used to continue a previous listing. */
        pageToken?: string;
      };
      output: {
        /** The normalized Twilio calls. */
        calls: Array<{
          /** The Twilio call SID. */
          callSid: string;
          /** The Twilio account SID that owns the call. */
          accountSid: string | null;
          /** The current or final call status. */
          status: string | null;
          /** The direction of the call. */
          direction: string | null;
          /** The called phone number, SIP address, or client identifier. */
          to: string | null;
          /** The caller phone number or client identifier. */
          from: string | null;
          /** The call duration in seconds. */
          duration: string | null;
          /** The price charged for the call. */
          price: string | null;
          /** The currency used for the call price. */
          priceUnit: string | null;
          /** The time when the call started. */
          startTime: string | null;
          /** The time when the call ended. */
          endTime: string | null;
          /** The time when the call resource was created. */
          dateCreated: string | null;
          /** The time when the call resource was last updated. */
          dateUpdated: string | null;
          /** The SID of the Twilio phone number used for the call. */
          phoneNumberSid: string | null;
          /** The parent call SID when this is a child call. */
          parentCallSid: string | null;
          /** The estimated queue time in milliseconds. */
          queueTime: string | null;
          /** The relative URI of the Twilio call resource. */
          uri: string | null;
        }>;
        /** The current Twilio result page. */
        page: number | null;
        /** The Twilio page size for this result. */
        pageSize: number | null;
        /** The next page URI returned by Twilio, if any. */
        nextPageUri: string | null;
        /** The previous page URI returned by Twilio, if any. */
        previousPageUri: string | null;
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
