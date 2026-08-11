import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get profile and chat settings for the connected LINE Official Account. */
    "line.get_bot_info": {
      input: Record<string, never>;
      output: {
        /** The LINE user ID of the bot. */
        userId: string;
        /** The basic ID of the LINE Official Account. */
        basicId: string;
        /** The premium ID when one is configured. */
        premiumId?: string;
        /** The display name of the LINE Official Account. */
        displayName: string;
        /**
         * The HTTPS profile image URL when one is configured.
         * @format uri
         */
        pictureUrl?: string;
        /** The configured LINE Official Account chat mode. */
        chatMode: "chat" | "bot";
        /** The automatic read setting for received messages. */
        markAsReadMode: "auto" | "manual";
      };
    };
    /** Get the LINE profile of a user who can interact with the connected bot. */
    "line.get_profile": {
      input: {
        /**
         * The LINE user ID obtained from a Messaging API webhook.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** The user's LINE display name. */
        displayName: string;
        /** The LINE user ID. */
        userId: string;
        /** The user's BCP 47 language tag when consent permits it. */
        language?: string;
        /**
         * The user's HTTPS profile image URL when one is configured.
         * @format uri
         */
        pictureUrl?: string;
        /** The user's status message when one is configured. */
        statusMessage?: string;
      };
    };
    /** Send up to five text messages to all friends of the LINE Official Account. */
    "line.send_broadcast_text": {
      input: {
        /**
         * The text messages to send in order.
         * @minItems 1
         * @maxItems 5
         */
        texts: Array<string>;
        /** Whether LINE should suppress push notifications for the sent messages. */
        notificationDisabled?: boolean;
        /**
         * An optional caller-generated UUID used by LINE to deduplicate a retried request.
         * @format uuid
         */
        retryKey?: string;
      };
      output: Record<string, never>;
    };
    /** Send up to five text messages to as many as 500 LINE users. */
    "line.send_multicast_text": {
      input: {
        /**
         * The target LINE user IDs.
         * @minItems 1
         * @maxItems 500
         */
        to: Array<string>;
        /**
         * The text messages to send in order.
         * @minItems 1
         * @maxItems 5
         */
        texts: Array<string>;
        /** Whether LINE should suppress push notifications for the sent messages. */
        notificationDisabled?: boolean;
        /**
         * An optional caller-generated UUID used by LINE to deduplicate a retried request.
         * @format uuid
         */
        retryKey?: string;
      };
      output: Record<string, never>;
    };
    /** Send up to five text messages to one LINE user, group, or multi-person chat. */
    "line.send_push_text": {
      input: {
        /**
         * The target LINE user, group, or room ID.
         * @minLength 1
         */
        to: string;
        /**
         * The text messages to send in order.
         * @minItems 1
         * @maxItems 5
         */
        texts: Array<string>;
        /** Whether LINE should suppress push notifications for the sent messages. */
        notificationDisabled?: boolean;
        /**
         * An optional caller-generated UUID used by LINE to deduplicate a retried request.
         * @format uuid
         */
        retryKey?: string;
      };
      output: {
        /** The accepted LINE messages. */
        sentMessages: Array<{
          /** The message identifier assigned by LINE. */
          id: string;
          /** The token that can be used to quote this message. */
          quoteToken?: string;
        }>;
      };
    };
  }
}
