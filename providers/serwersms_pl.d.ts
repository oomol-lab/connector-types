import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit a sender name for authorization. Wait until list_senders reports authorized before using it to send SMS. */
    "serwersms_pl.add_sender": {
      input: {
        /**
         * The alphanumeric sender name, at most 11 characters.
         * @minLength 1
         * @maxLength 11
         */
        name: string;
      };
      output: {
        /** Whether the operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Cancel scheduled SMS messages by provider or caller-assigned IDs before dispatch. */
    "serwersms_pl.cancel_scheduled_sms": {
      input: Record<string, unknown>;
      output: {
        /** Whether the operation was processed. */
        success?: boolean;
        /** Number of successfully cancelled messages. */
        correct?: number;
        /** Number of messages that could not be cancelled. */
        failed?: number;
        [key: string]: unknown;
      };
    };
    /** Get available message quotas and optionally the account type. */
    "serwersms_pl.get_account_limits": {
      input: {
        /**
         * Include the account type; defaults to true.
         * @default true
         */
        show_type?: boolean;
      };
      output: {
        /** Account information, including prepaid or postpaid type. */
        account?: Record<string, unknown>;
        /** Available quotas by message or lookup type. */
        items: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Query SMS delivery reports by message IDs or filters. Reports are available for about 14 days and updated for up to 72 hours; prefer batches of 50–200 IDs. */
    "serwersms_pl.get_delivery_reports": {
      input: {
        /** Provider message IDs; at most 500 per request. */
        id?: string | Array<string>;
        /** Caller-assigned message IDs. */
        unique_id?: string | Array<string>;
        /** Recipient phone numbers in international format. */
        phone?: string | Array<string>;
        /**
         * Start of the queuing-time interval, for example 2026-12-01 00:00:00.
         * @minLength 1
         */
        date_from?: string;
        /**
         * End of the queuing-time interval, for example 2026-12-01 23:59:59.
         * @minLength 1
         */
        date_to?: string;
        /** Filter by dispatch status. */
        status?: "delivered" | "undelivered" | "pending" | "sent" | "unsent" | "in_progress" | "saved";
        /** Include contact details when the recipient exists in the contact database. */
        show_contact?: boolean;
      };
      output: {
        /** Message records, including per-recipient status and errors. */
        items?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List sender names and their authorization status, optionally including predefined senders. */
    "serwersms_pl.list_senders": {
      input: {
        /** Include predefined sender names ready to use. */
        predefined?: boolean;
        /** Filter by sender type. */
        type?: "ndi" | "mms";
        /** Sort by sender name. */
        sort?: "name";
        /** Sort direction. */
        order?: "asc" | "desc";
      };
      output: {
        /** Sender names and approval states. */
        items?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Send or schedule SMS messages with the same content. Omit sender for ECO+ or use an approved sender for FULL SMS. A queued result does not mean delivery. */
    "serwersms_pl.send_sms": {
      input: Record<string, unknown>;
      output: {
        /** Whether the submission was processed. */
        success: boolean;
        /** Number of queued messages. */
        queued: number;
        /** Number of messages not sent. */
        unsent: number;
        /** Message records, including per-recipient status and errors. */
        items?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
