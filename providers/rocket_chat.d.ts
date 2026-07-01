import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete an existing Rocket.Chat message. */
    "rocket_chat.delete_message": {
      input: {
        /**
         * The room ID where the message is located.
         * @minLength 1
         */
        roomId: string;
        /**
         * The message ID to delete.
         * @minLength 1
         */
        msgId: string;
        /** Whether to delete as the user who sent the message. */
        asUser?: boolean;
      };
      output: {
        /**
         * The deleted message ID.
         * @minLength 1
         */
        _id?: string;
        /** Rocket.Chat object returned by the API. */
        message?: Record<string, unknown>;
        /** Whether Rocket.Chat reported success. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the authenticated Rocket.Chat profile. */
    "rocket_chat.get_me": {
      input: Record<string, never>;
      output: {
        /** Rocket.Chat object returned by the API. */
        profile: Record<string, unknown>;
      };
    };
    /** Get one Rocket.Chat message by ID. */
    "rocket_chat.get_message": {
      input: {
        /**
         * The message ID.
         * @minLength 1
         */
        msgId: string;
      };
      output: {
        /** Rocket.Chat message object returned by the API. */
        message: {
          /**
           * The Rocket.Chat message ID.
           * @minLength 1
           */
          _id?: string;
          /**
           * The room ID that owns the message.
           * @minLength 1
           */
          rid?: string;
          /** The message text. */
          msg?: string;
          [key: string]: unknown;
        };
        /** Whether Rocket.Chat reported success. */
        success: boolean;
      };
    };
    /** Get metadata for one Rocket.Chat room by ID or name. */
    "rocket_chat.get_room": {
      input: {
        /**
         * The room ID. Required if roomName is omitted.
         * @minLength 1
         */
        roomId?: string;
        /**
         * The room name. Required if roomId is omitted.
         * @minLength 1
         */
        roomName?: string;
        /** Rocket.Chat fields projection object. Use 1 to include and 0 to exclude each property. */
        fields?: Record<string, number>;
      };
      output: {
        /** Rocket.Chat object returned by the API. */
        room: Record<string, unknown>;
        /** Rocket.Chat object returned by the API. */
        team?: Record<string, unknown>;
        /** Rocket.Chat object returned by the API. */
        parent?: Record<string, unknown>;
        /** Whether Rocket.Chat reported success. */
        success: boolean;
      };
    };
    /** List messages in a Rocket.Chat public channel. */
    "rocket_chat.list_channel_messages": {
      input: {
        /**
         * The public channel room ID.
         * @minLength 1
         */
        roomId: string;
        /**
         * The number of messages to return.
         * @exclusiveMinimum 0
         */
        count?: number;
        /**
         * The number of messages to skip.
         * @minimum 0
         */
        offset?: number;
        /** Rocket.Chat sort object. Use 1 for ascending and -1 for descending. */
        sort?: Record<string, -1 | 1>;
        /** User IDs that must be mentioned by returned messages. */
        mentionIds?: Array<string>;
        /** User IDs that must have starred returned messages. */
        starredIds?: Array<string>;
        /** Whether to return only pinned messages. */
        pinned?: boolean;
      };
      output: {
        /** Rocket.Chat messages. */
        messages: Array<{
          /**
           * The Rocket.Chat message ID.
           * @minLength 1
           */
          _id?: string;
          /**
           * The room ID that owns the message.
           * @minLength 1
           */
          rid?: string;
          /** The message text. */
          msg?: string;
          [key: string]: unknown;
        }>;
        /** The number of returned messages. */
        count: number;
        /** The response offset. */
        offset: number;
        /** The total number of matching messages. */
        total: number;
        /** Whether Rocket.Chat reported success. */
        success: boolean;
      };
    };
    /** List Rocket.Chat rooms opened for the authenticated user. */
    "rocket_chat.list_rooms": {
      input: {
        /**
         * Only return room updates and removals since this ISO date-time.
         * @format date-time
         */
        updatedSince?: string;
      };
      output: {
        /** Rocket.Chat objects returned by the API. */
        update: Array<Record<string, unknown>>;
        /** Rocket.Chat objects returned by the API. */
        remove: Array<Record<string, unknown>>;
        /** Whether Rocket.Chat reported success. */
        success: boolean;
      };
    };
    /** Post a message to a Rocket.Chat room, channel, or user target. */
    "rocket_chat.post_message": {
      input: {
        /**
         * The room ID, channel name, or username target. Channel names must include the # prefix and usernames can use @.
         * @minLength 1
         */
        roomId: string;
        /** The message text to send. */
        text?: string;
        /** Whether Rocket.Chat should generate URL previews. */
        parseUrls?: boolean;
        /** Display alias for the message when the user has impersonation permission. */
        alias?: string;
        /**
         * Avatar URL for the message when the user has impersonation permission.
         * @format uri
         */
        avatar?: string;
        /** Emoji avatar for the message when the user has impersonation permission. */
        emoji?: string;
        /** Message attachments. */
        attachments?: Array<{
          /**
           * Audio URL for the attachment.
           * @format uri
           */
          audio_url?: string;
          /**
           * Icon URL displayed next to the author name.
           * @format uri
           */
          author_icon?: string;
          /**
           * URL linked from the author name.
           * @format uri
           */
          author_link?: string;
          /** Attachment author name. */
          author_name?: string;
          /** Whether the attachment should render collapsed. */
          collapsed?: boolean;
          /** Attachment accent color. */
          color?: string;
          /** Attachment fields. */
          fields?: Array<{
            /**
             * The attachment field title.
             * @minLength 1
             */
            title: string;
            /** The attachment field value. */
            value: string;
            /** Whether this field should be displayed as a short field. */
            short?: boolean;
          }>;
          /**
           * Image URL for the attachment.
           * @format uri
           */
          image_url?: string;
          /**
           * URL linked from the attachment timestamp.
           * @format uri
           */
          message_link?: string;
          /** Attachment text. */
          text?: string;
          /**
           * Thumbnail URL for the attachment.
           * @format uri
           */
          thumb_url?: string;
          /** Attachment title. */
          title?: string;
          /**
           * URL linked from the attachment title.
           * @format uri
           */
          title_link?: string;
          /** Whether title_link should download when clicked. */
          title_link_download?: boolean;
          /** Attachment timestamp string. */
          ts?: string;
          /**
           * Video URL for the attachment.
           * @format uri
           */
          video_url?: string;
          [key: string]: unknown;
        }>;
        /**
         * The original message ID for a thread reply.
         * @minLength 1
         */
        tmid?: string;
        /** Custom message fields configured by the workspace. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Rocket.Chat message object returned by the API. */
        message: {
          /**
           * The Rocket.Chat message ID.
           * @minLength 1
           */
          _id?: string;
          /**
           * The room ID that owns the message.
           * @minLength 1
           */
          rid?: string;
          /** The message text. */
          msg?: string;
          [key: string]: unknown;
        };
        /** Whether Rocket.Chat reported success. */
        success: boolean;
      };
    };
    /** Update an existing Rocket.Chat message. */
    "rocket_chat.update_message": {
      input: {
        /**
         * The room ID where the message is located.
         * @minLength 1
         */
        roomId: string;
        /**
         * The message ID to update.
         * @minLength 1
         */
        msgId: string;
        /** The updated message text. */
        text: string;
        /** URLs whose previews should be generated. */
        previewUrls?: Array<string>;
        /** Custom message fields configured by the workspace. */
        customFields?: Record<string, unknown>;
      };
      output: {
        /** Rocket.Chat message object returned by the API. */
        message: {
          /**
           * The Rocket.Chat message ID.
           * @minLength 1
           */
          _id?: string;
          /**
           * The room ID that owns the message.
           * @minLength 1
           */
          rid?: string;
          /** The message text. */
          msg?: string;
          [key: string]: unknown;
        };
        /** Whether Rocket.Chat reported success. */
        success: boolean;
      };
    };
  }
}
