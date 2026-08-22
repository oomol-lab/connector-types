import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current balance of the connected Vonage API account. */
    "vonage.get_balance": {
      input: Record<string, never>;
      output: {
        /** The account balance in euros. */
        value: number;
        /** Whether automatic balance reload is enabled. */
        autoReload: boolean;
      };
    };
    /** Retrieve a Vonage SMS delivery record by message ID. */
    "vonage.get_sms_record": {
      input: {
        /**
         * The Vonage message ID to retrieve.
         * @minLength 1
         */
        messageId: string;
        /** The communication direction. */
        direction: "inbound" | "outbound";
        /** Include the SMS body in the returned record. */
        includeMessage?: boolean;
        /** Include whether the outbound SMS was split into multiple parts. */
        showConcatenated?: boolean;
      };
      output: {
        /** The normalized SMS report records. */
        records: Array<{
          /** The Vonage message identifier. */
          messageId: string | null;
          /** The Vonage account identifier. */
          accountId: string | null;
          /** The communication direction. */
          direction: string | null;
          /** The sender number or sender ID. */
          from: string | null;
          /** The destination phone number. */
          to: string | null;
          /** The final delivery status. */
          status: string | null;
          /** When Vonage received the SMS request. */
          dateReceived: string | null;
          /** When the SMS reached its final state. */
          dateFinalized: string | null;
          /** The total price charged for the SMS request. */
          totalPrice: string | null;
          /** The currency for the SMS price. */
          currency: string | null;
          /** The caller-supplied client reference. */
          clientRef: string | null;
          /** The destination mobile network code. */
          network: string | null;
          /** The destination mobile network name. */
          networkName: string | null;
          /** The destination country code. */
          country: string | null;
          /** The destination country name. */
          countryName: string | null;
          /** The message body when requested with includeMessage. */
          messageBody: string | null;
          /** The Vonage delivery or handoff error code. */
          errorCode: string | null;
          /** The description of the delivery or handoff error. */
          errorCodeDescription: string | null;
          /** Whether an outbound SMS was split into multiple parts when requested. */
          concatenated: string | null;
        }>;
        /** The synchronous Reports API request identifier. */
        requestId: string | null;
        /** The synchronous Reports API request status. */
        requestStatus: string | null;
        /** The number of records returned in this response. */
        itemsCount: number | null;
        /** Comma-separated message IDs that were not found, if any. */
        idsNotFound: string | null;
        /** The cursor for the next date-based result page, if any. */
        nextCursor: string | null;
        /** The initialization vector required with the next cursor, if any. */
        iv: string | null;
      };
    };
    /** List Vonage SMS delivery records for a date range and optional delivery filters. */
    "vonage.list_sms_records": {
      input: {
        /** The communication direction. */
        direction: "inbound" | "outbound";
        /**
         * The inclusive start of the report range.
         * @format date-time
         */
        dateStart?: string;
        /**
         * The exclusive end of the report range.
         * @format date-time
         */
        dateEnd?: string;
        /**
         * The cursor returned by a previous report response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The initialization vector returned with a previous cursor.
         * @minLength 1
         */
        iv?: string;
        /** Filter records by final delivery status. */
        status?: "delivered" | "expired" | "failed" | "rejected" | "accepted" | "buffered" | "unknown" | "deleted";
        /**
         * Filter records by sender number or sender ID.
         * @minLength 1
         */
        from?: string;
        /**
         * Filter records by destination phone number.
         * @minLength 1
         */
        to?: string;
        /**
         * Filter records by destination country code.
         * @minLength 1
         */
        country?: string;
        /**
         * Filter records by destination mobile network code.
         * @minLength 1
         */
        network?: string;
        /**
         * Filter records by the caller-supplied account reference.
         * @minLength 1
         */
        accountRef?: string;
        /** Include the SMS body in returned records. */
        includeMessage?: boolean;
        /** Include whether outbound SMS messages were split into parts. */
        showConcatenated?: boolean;
      };
      output: {
        /** The normalized SMS report records. */
        records: Array<{
          /** The Vonage message identifier. */
          messageId: string | null;
          /** The Vonage account identifier. */
          accountId: string | null;
          /** The communication direction. */
          direction: string | null;
          /** The sender number or sender ID. */
          from: string | null;
          /** The destination phone number. */
          to: string | null;
          /** The final delivery status. */
          status: string | null;
          /** When Vonage received the SMS request. */
          dateReceived: string | null;
          /** When the SMS reached its final state. */
          dateFinalized: string | null;
          /** The total price charged for the SMS request. */
          totalPrice: string | null;
          /** The currency for the SMS price. */
          currency: string | null;
          /** The caller-supplied client reference. */
          clientRef: string | null;
          /** The destination mobile network code. */
          network: string | null;
          /** The destination mobile network name. */
          networkName: string | null;
          /** The destination country code. */
          country: string | null;
          /** The destination country name. */
          countryName: string | null;
          /** The message body when requested with includeMessage. */
          messageBody: string | null;
          /** The Vonage delivery or handoff error code. */
          errorCode: string | null;
          /** The description of the delivery or handoff error. */
          errorCodeDescription: string | null;
          /** Whether an outbound SMS was split into multiple parts when requested. */
          concatenated: string | null;
        }>;
        /** The synchronous Reports API request identifier. */
        requestId: string | null;
        /** The synchronous Reports API request status. */
        requestStatus: string | null;
        /** The number of records returned in this response. */
        itemsCount: number | null;
        /** Comma-separated message IDs that were not found, if any. */
        idsNotFound: string | null;
        /** The cursor for the next date-based result page, if any. */
        nextCursor: string | null;
        /** The initialization vector required with the next cursor, if any. */
        iv: string | null;
      };
    };
    /** Send a text or Unicode SMS through the Vonage SMS API. */
    "vonage.send_sms": {
      input: {
        /**
         * The sender name or number. Number senders use E.164 format; sender ID rules vary by country.
         * @minLength 1
         */
        from: string;
        /**
         * The destination number in E.164 format without a leading plus sign.
         * @minLength 7
         * @maxLength 15
         * @pattern ^[0-9]{7,15}$
         */
        to: string;
        /**
         * The text body of the outbound SMS.
         * @minLength 1
         */
        text: string;
        /** The SMS text encoding. */
        type?: "text" | "unicode";
        /**
         * How long Vonage should attempt delivery, in milliseconds.
         * @minimum 20000
         * @maximum 604800000
         */
        ttl?: number;
        /** Whether Vonage should request a delivery receipt. */
        statusReportRequired?: boolean;
        /**
         * The delivery receipt callback URL for this message.
         * @maxLength 100
         * @format uri
         */
        callback?: string;
        /**
         * A caller-defined reference included in the submission result.
         * @maxLength 100
         */
        clientRef?: string;
      };
      output: {
        /** The number of SMS submission results returned by Vonage. */
        messageCount: number;
        /** The submitted SMS results. */
        messages: Array<{
          /** The destination number in E.164 format. */
          to: string;
          /** The Vonage message identifier. */
          messageId: string;
          /** The Vonage SMS status code. */
          status: string;
          /** The estimated remaining account balance. */
          remainingBalance: string | null;
          /** The estimated price of the message. */
          messagePrice: string | null;
          /** The destination network identifier. */
          network: string | null;
          /** The caller-supplied client reference. */
          clientRef: string | null;
        }>;
      };
    };
  }
}
