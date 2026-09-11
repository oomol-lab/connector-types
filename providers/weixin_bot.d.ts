import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Download and decrypt one image, voice, video, or file item returned by get_updates, then upload it to file transit. */
    "weixin_bot.download_media": {
      input: {
        /** The complete Weixin media item. */
        item: Record<string, unknown>;
        /**
         * Optional output file name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** The uploaded media file. */
        file: {
          /**
           * The temporary file transit URL.
           * @format uri
           */
          transitUrl: string;
          /**
           * The decrypted file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The stored file name.
           * @minLength 1
           */
          name: string;
          /**
           * The media MIME type.
           * @minLength 1
           */
          mimeType: string;
        };
      };
    };
    /** Long-poll for inbound Weixin bot messages. Pass the returned cursor to the next call to avoid receiving the same updates again. */
    "weixin_bot.get_updates": {
      input: {
        /**
         * The cursor returned by the previous get_updates call.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Messages received during this poll. */
        messages: Array<{
          /** The message identifier returned by Weixin. */
          message_id: string;
          /** The Weixin user that sent the message. */
          from_user_id: string;
          /** The message recipient. */
          to_user_id: string;
          /** The message creation time in milliseconds. */
          create_time_ms: number;
          /** The message sender type reported by Weixin. */
          message_type: number;
          /** The message lifecycle state reported by Weixin. */
          message_state: number;
          /** The conversation token to pass back when replying. */
          context_token: string;
          /** The text or media items carried by the message. */
          item_list: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The cursor to pass to the next get_updates call. */
        nextCursor: string | null;
        /** The next long-poll duration suggested by Weixin. */
        longPollingTimeoutMs: number | null;
      };
    };
    /** Download, encrypt, upload, and send an image, video, or file from a public URL. */
    "weixin_bot.send_media": {
      input: {
        /**
         * The target user ID from an inbound Weixin message.
         * @minLength 1
         */
        toUserId: string;
        /**
         * The context_token from the inbound message being answered.
         * @minLength 1
         */
        contextToken: string;
        /** How Weixin should present the file. */
        mediaType: "image" | "video" | "file";
        /**
         * The public HTTP or HTTPS URL of the media to send.
         * @format uri
         */
        fileUrl: string;
        /**
         * The file name shown for file media.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Optional text sent as a separate message before the media.
         * @minLength 1
         */
        caption?: string;
      };
      output: {
        /** The server-assigned message identifier when returned. */
        messageId: string | null;
      };
    };
    /** Send a text reply from the connected Weixin bot to a user or conversation. */
    "weixin_bot.send_message": {
      input: {
        /**
         * The target user ID from an inbound Weixin message.
         * @minLength 1
         */
        toUserId: string;
        /**
         * The text to send.
         * @minLength 1
         */
        text: string;
        /**
         * The context_token from the inbound message being answered.
         * @minLength 1
         */
        contextToken: string;
      };
      output: {
        /** The server-assigned message identifier when returned. */
        messageId: string | null;
      };
    };
    /** Start or stop the typing indicator for a Weixin conversation. */
    "weixin_bot.send_typing": {
      input: {
        /**
         * The Weixin user ID from an inbound message.
         * @minLength 1
         */
        userId: string;
        /**
         * The context_token from the inbound message.
         * @minLength 1
         */
        contextToken: string;
        /** Whether to start or stop the typing indicator. */
        status: "typing" | "cancel";
      };
      output: {
        /** The typing state sent to Weixin. */
        status: "typing" | "cancel";
      };
    };
  }
}
