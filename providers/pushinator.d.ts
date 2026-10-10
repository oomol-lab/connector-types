import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Pushinator channel for notification subscribers. */
    "pushinator.create_channel": {
      input: {
        /**
         * The name of the channel.
         * @minLength 1
         */
        name: string;
        /** The description of the channel. */
        description?: string;
      };
      output: {
        /** The channel properties returned by Pushinator, preserved without renaming. */
        channel: Record<string, unknown>;
      };
    };
    /** Send a push notification to the subscribers of a Pushinator channel. */
    "pushinator.send_notification": {
      input: {
        /**
         * The UUID of the channel to send the notification to.
         * @format uuid
         */
        channel_id: string;
        /**
         * The message content of the notification.
         * @minLength 1
         */
        content: string;
        /** Whether subscriber acknowledgment is required. Defaults to false; treated as false on the Free plan. Unacknowledged notifications retry up to five times with exponential backoff. */
        acknowledgment_required?: boolean;
      };
      output: {
        /** Whether Pushinator accepted the notification. */
        success: boolean;
        /** The human-readable response message. */
        message: string;
        [key: string]: unknown;
      };
    };
  }
}
