import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Telnyx messaging profiles with optional name filters and pagination. */
    "telnyx.list_messaging_profiles": {
      input: {
        /**
         * The profile name filter passed as filter[name].
         * @minLength 1
         * @pattern \S
         */
        filterName?: string;
        /**
         * The exact profile name filter.
         * @minLength 1
         * @pattern \S
         */
        filterNameEq?: string;
        /**
         * The partial profile name filter.
         * @minLength 1
         * @pattern \S
         */
        filterNameContains?: string;
        /**
         * The Telnyx page number to load.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of Telnyx profiles to load per page.
         * @minimum 1
         * @maximum 250
         */
        pageSize?: number;
      };
      output: {
        /** The Telnyx messaging profiles returned by the API. */
        data: Array<{
          /**
           * The Telnyx resource ID.
           * @format uuid
           */
          id: string;
          /** The Telnyx resource type. */
          record_type: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by Telnyx. */
        meta: {
          /** The current Telnyx page number. */
          page_number?: number;
          /** The current Telnyx page size. */
          page_size?: number;
          /** The total number of pages available from Telnyx. */
          total_pages?: number;
          /** The total number of matching Telnyx resources. */
          total_results?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Telnyx message by ID. */
    "telnyx.retrieve_message": {
      input: {
        /**
         * The Telnyx message ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The Telnyx resource object returned by the API. */
        data: {
          /**
           * The Telnyx resource ID.
           * @format uuid
           */
          id: string;
          /** The Telnyx resource type. */
          record_type: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a Telnyx messaging profile by ID. */
    "telnyx.retrieve_messaging_profile": {
      input: {
        /**
         * The Telnyx messaging profile ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The Telnyx resource object returned by the API. */
        data: {
          /**
           * The Telnyx resource ID.
           * @format uuid
           */
          id: string;
          /** The Telnyx resource type. */
          record_type: string;
          [key: string]: unknown;
        };
      };
    };
    /** Send an SMS or MMS message through Telnyx Messaging. */
    "telnyx.send_message": {
      input: {
        /**
         * The sending or receiving address, such as an E.164 phone number, alphanumeric sender ID, short code, or number pool.
         * @minLength 1
         * @pattern \S
         */
        to: string;
        /**
         * The sending or receiving address, such as an E.164 phone number, alphanumeric sender ID, short code, or number pool.
         * @minLength 1
         * @pattern \S
         */
        from?: string;
        /**
         * The Telnyx messaging profile ID.
         * @format uuid
         */
        messagingProfileId?: string;
        /**
         * The SMS message body.
         * @minLength 1
         * @pattern \S
         */
        text?: string;
        /**
         * The MMS message subject.
         * @minLength 1
         * @pattern \S
         */
        subject?: string;
        /**
         * The media URLs Telnyx should attach to an MMS message.
         * @minItems 1
         */
        mediaUrls?: Array<string>;
        /**
         * The URL where Telnyx should send message webhooks.
         * @format uri
         */
        webhookUrl?: string;
        /**
         * The failover URL Telnyx should use if the primary message webhook URL fails.
         * @format uri
         */
        webhookFailoverUrl?: string;
        /** Whether Telnyx should use webhooks configured on the messaging profile. */
        useProfileWebhooks?: boolean;
        /** The protocol Telnyx should use for the message. */
        type?: "SMS" | "MMS";
        /** Whether Telnyx should detect SMS messages that exceed a recommended part limit. */
        autoDetect?: boolean;
        /**
         * The ISO 8601 timestamp when Telnyx should send the message.
         * @format date-time
         */
        sendAt?: string | null;
        /** The encoding Telnyx should use for the message. */
        encoding?: "auto" | "gsm7" | "ucs2";
      };
      output: {
        /** The Telnyx resource object returned by the API. */
        data: {
          /**
           * The Telnyx resource ID.
           * @format uuid
           */
          id: string;
          /** The Telnyx resource type. */
          record_type: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
