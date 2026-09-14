import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List inbound SMS and MMS messages from the Wire2Air inbox. */
    "wire2air.list_inbound_messages": {
      input: {
        /** Start date in M/D/YYYY format; the date range cannot exceed 31 days. */
        dateFrom?: string;
        /** End date in M/D/YYYY format; the date range cannot exceed 31 days. */
        dateTo?: string;
        /** Assigned shortcode or text number to filter by. */
        textNumber?: string;
        /**
         * Result page to retrieve; defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of messages to return; defaults to 10.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** Current page number returned by Wire2Air. */
        PageNo: number;
        /** Page size returned by Wire2Air. */
        PageSize: number;
        /** Total number of result pages. */
        TotalPages: number;
        /** Total number of matching messages. */
        TotalRecords: number;
        /** One-based index of the first row on this page. */
        RowStart: number;
        /** One-based index of the last row on this page. */
        RowEnd: number;
        /** Inbound SMS or MMS messages on this page. */
        ListItems: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Queue an SMS message or comma-separated bulk SMS messages with Wire2Air. */
    "wire2air.send_message": {
      input: {
        /**
         * Destination number in international format, or comma-separated destination numbers for bulk sending.
         * @minLength 1
         * @pattern \S
         */
        to: string;
        /**
         * Wire2Air shortcode or sender number.
         * @minLength 1
         * @pattern \S
         */
        from: string;
        /**
         * SMS message text.
         * @minLength 1
         */
        text: string;
        /** Optional UTC delivery time in MM/DD/YYYY HH:MM:SS format. */
        deliveryDateTime?: string;
        /**
         * Callback URL that Wire2Air should use for message replies.
         * @format uri
         */
        replyPath?: string;
        /** Internal reporting name used for a bulk message batch. */
        batchName?: string;
      };
      output: {
        /** Human-readable submission status returned by Wire2Air. */
        Response: string;
        /** Relative URI for the queued message or batch. */
        URI: string;
        /** Identifier for the queued message or batch. */
        ID: string;
        /** Result type, such as Out or Batch. */
        Type: string;
        [key: string]: unknown;
      };
    };
  }
}
