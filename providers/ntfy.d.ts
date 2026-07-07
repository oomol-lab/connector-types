import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve ntfy account profile, limits, and usage for the access token. */
    "ntfy.get_account": {
      input: Record<string, never>;
      output: {
        /** The authenticated ntfy username. */
        username?: string;
        /** The ntfy account role. */
        role?: string;
        /** The account sync topic. */
        sync_topic?: string;
        /** Whether the account is provisioned by server configuration. */
        provisioned?: boolean;
        /** The preferred account language. */
        language?: string;
        /** The preferred date format. */
        date_format?: string;
        /** The preferred time format. */
        time_format?: string;
        /** The ntfy account tier. */
        tier?: {
          /** The ntfy tier code. */
          code?: string;
          /** The ntfy tier name. */
          name?: string;
          [key: string]: unknown;
        };
        /** ntfy account limits. */
        limits?: {
          /** The limit basis, such as ip or tier. */
          basis?: string;
          /** The message limit. */
          messages?: number;
          /** The message expiry duration in seconds. */
          messages_expiry_duration?: number;
          /** The email publishing limit. */
          emails?: number;
          /** The phone call publishing limit. */
          calls?: number;
          /** The topic reservation limit. */
          reservations?: number;
          /** The total attachment size limit. */
          attachment_total_size?: number;
          /** The per-file attachment size limit. */
          attachment_file_size?: number;
          /** The attachment expiry duration in seconds. */
          attachment_expiry_duration?: number;
          /** The attachment bandwidth limit. */
          attachment_bandwidth?: number;
          [key: string]: unknown;
        };
        /** ntfy account usage statistics. */
        stats?: {
          /** The number of messages used. */
          messages?: number;
          /** The number of remaining messages. */
          messages_remaining?: number;
          /** The number of emails used. */
          emails?: number;
          /** The number of remaining emails. */
          emails_remaining?: number;
          /** The number of calls used. */
          calls?: number;
          /** The number of remaining calls. */
          calls_remaining?: number;
          /** The number of topic reservations used. */
          reservations?: number;
          /** The number of remaining topic reservations. */
          reservations_remaining?: number;
          /** The attachment storage used. */
          attachment_total_size?: number;
          /** The remaining attachment storage. */
          attachment_total_size_remaining?: number;
          [key: string]: unknown;
        };
        /** The raw ntfy account response. */
        raw: Record<string, unknown>;
      };
    };
    /** Publish a notification message to a ntfy topic. */
    "ntfy.publish_message": {
      input: {
        /**
         * The ntfy topic name. Use 1 to 64 ASCII letters, numbers, underscores, or dashes.
         * @minLength 1
         * @maxLength 64
         */
        topic: string;
        /** The notification body text. If omitted or empty, ntfy publishes an empty body. */
        message?: string;
        /** The notification title. */
        title?: string;
        /**
         * The notification priority from 1 to 5.
         * @minimum 1
         * @maximum 5
         */
        priority?: number;
        /** Comma-separated ntfy tags represented as an array. */
        tags?: Array<string>;
        /**
         * The URL opened when the notification is clicked.
         * @format uri
         */
        click?: string;
        /**
         * A file URL that ntfy should attach to the notification.
         * @format uri
         */
        attach?: string;
        /**
         * A JPEG or PNG icon URL that ntfy clients should show.
         * @format uri
         */
        icon?: string;
        /** The attachment filename shown by ntfy clients. */
        filename?: string;
        /** Whether ntfy should render the notification body as Markdown. */
        markdown?: boolean;
        /** An email address or yes to forward the notification by email. */
        email?: string;
        /** A phone number or yes to trigger a phone call notification. */
        call?: string;
        /** A ntfy scheduled delivery timestamp or duration. */
        delay?: string;
        /** Whether ntfy should enable this publish option. */
        cache?: "yes" | "no";
        /** Whether ntfy should enable this publish option. */
        firebase?: "yes" | "no";
        /**
         * The ntfy sequence ID. Use 1 to 64 ASCII letters, numbers, underscores, or dashes.
         * @minLength 1
         * @maxLength 64
         */
        sequence_id?: string;
      };
      output: {
        /** The ntfy message ID. */
        id: string;
        /** The ntfy sequence ID when it differs from the message ID. */
        sequence_id?: string;
        /** The Unix timestamp when ntfy accepted the message. */
        time: number;
        /** The Unix timestamp when the message expires. */
        expires?: number;
        /** The ntfy event type. */
        event: string;
        /** The ntfy topic. */
        topic: string;
        /** The notification title. */
        title?: string;
        /** The notification body text. */
        message?: string;
        /** The notification priority. */
        priority?: number;
        /** The ntfy tags returned for the message. */
        tags?: Array<string>;
        /**
         * The click URL returned by ntfy.
         * @format uri
         */
        click?: string;
        /**
         * The icon URL returned by ntfy.
         * @format uri
         */
        icon?: string;
        /** Attachment metadata returned by ntfy. */
        attachment?: {
          /** The attachment file name. */
          name?: string;
          /** The attachment MIME type. */
          type?: string;
          /** The attachment size in bytes. */
          size?: number;
          /** The Unix timestamp when the attachment expires. */
          expires?: number;
          /**
           * The attachment URL.
           * @format uri
           */
          url?: string;
          [key: string]: unknown;
        };
        /** The message content type returned by ntfy. */
        content_type?: string;
        /** The raw ntfy message response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
