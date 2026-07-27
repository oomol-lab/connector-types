import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Quriiri SMS delivery status by delivery report ID. */
    "quriiri.get_sms_status": {
      input: {
        /**
         * The Quriiri delivery report ID.
         * @minLength 1
         */
        deliveryReportId: string;
      };
      output: {
        /** A Quriiri SMS status record. */
        status: {
          /**
           * The Quriiri delivery report ID.
           * @minLength 1
           */
          drid?: string;
          /**
           * The number of SMS body parts.
           * @minimum 0
           */
          bodyparts?: number;
          /** The message direction. */
          direction?: "MT" | "MO";
          /** The optional batch ID. */
          batchid?: string;
          /** The optional billing reference. */
          billingref?: string;
          /**
           * The message creation timestamp.
           * @format date-time
           */
          created?: string;
          /**
           * The status timestamp.
           * @format date-time
           */
          statustime?: string;
          /** The failure reason, if any. */
          reason?: string;
          /** The current message status. */
          status?: string;
          /** The destination country code. */
          countrycode?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List authorized and registered sender IDs for the Quriiri customer. */
    "quriiri.list_sender_ids": {
      input: Record<string, never>;
      output: {
        /** The sender IDs authorized in the Quriiri service. */
        authorized_sender_ids: Array<string>;
        /** The sender IDs registered with Traficom. */
        registered_sender_ids: Array<string>;
      };
    };
    /** List Quriiri SMS delivery statuses within an optional time range. */
    "quriiri.list_sms_statuses": {
      input: {
        /**
         * The inclusive start timestamp for the status search.
         * @format date-time
         */
        start?: string;
        /**
         * The exclusive end timestamp for the status search.
         * @format date-time
         */
        end?: string;
        /** The optional message status filter. */
        status?: "CREATED" | "SENT" | "ACKED" | "FAILED" | "DELIVERED" | "READ" | "UNKNOWN" | "RETRY";
      };
      output: {
        /**
         * The number of matching status records.
         * @minimum 0
         */
        count: number;
        /** The matching SMS status records. */
        messages: Array<{
          /**
           * The Quriiri delivery report ID.
           * @minLength 1
           */
          drid?: string;
          /**
           * The number of SMS body parts.
           * @minimum 0
           */
          bodyparts?: number;
          /** The message direction. */
          direction?: "MT" | "MO";
          /** The optional batch ID. */
          batchid?: string;
          /** The optional billing reference. */
          billingref?: string;
          /**
           * The message creation timestamp.
           * @format date-time
           */
          created?: string;
          /**
           * The status timestamp.
           * @format date-time
           */
          statustime?: string;
          /** The failure reason, if any. */
          reason?: string;
          /** The current message status. */
          status?: string;
          /** The destination country code. */
          countrycode?: string;
          [key: string]: unknown;
        }>;
        /**
         * The response start timestamp.
         * @format date-time
         */
        start: string;
        /**
         * The response end timestamp.
         * @format date-time
         */
        end: string;
      };
    };
    /** Send an SMS message with Quriiri using the HTTP JSON API. */
    "quriiri.send_sms": {
      input: {
        /**
         * The SMS sender ID or phone number.
         * @minLength 1
         */
        sender: string;
        /**
         * The recipient phone numbers in international, national, or shortcode format.
         * @minItems 1
         */
        destination: Array<string>;
        /**
         * The SMS message text.
         * @minLength 1
         */
        text: string;
        /** The sender type. Quriiri can also infer this when omitted. */
        senderType?: "MSISDN" | "NATIONAL" | "ALNUM";
        /**
         * The optional batch ID used to group related messages.
         * @maxLength 255
         */
        batchId?: string;
        /**
         * The optional billing reference stored for reporting.
         * @maxLength 255
         */
        billingRef?: string;
        /**
         * The optional URL where Quriiri sends delivery reports.
         * @format uri
         */
        deliveryReportUrl?: string;
        /** The delivery report format. */
        deliveryReportType?: "JSON" | "POST" | "GET";
        /** Whether to send the message as a flash SMS. */
        flash?: boolean;
        /**
         * The message validity period in minutes.
         * @exclusiveMinimum 0
         */
        validityMinutes?: number;
        /**
         * The optional scheduled send time in ISO 8601 format.
         * @format date-time
         */
        scheduleTime?: string;
      };
      output: {
        /** The per-recipient send results keyed by recipient phone number. */
        messages: Record<string, {
            /** The normalized destination phone number. */
            converted?: string;
            /** The message creation status. */
            status?: string;
            /** The failure reason, if the recipient failed. */
            reason?: string;
            /** The Quriiri message ID. */
            messageid?: string;
            [key: string]: unknown;
          }>;
        /** The warnings returned by Quriiri. */
        warnings: Array<{
          /** The error or warning message. */
          message?: string;
          [key: string]: unknown;
        }>;
        /** The errors returned by Quriiri. */
        errors: Array<{
          /** The error or warning message. */
          message?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
