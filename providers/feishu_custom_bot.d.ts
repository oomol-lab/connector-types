import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send an image message through the Feishu/Lark custom bot webhook. */
    "feishu_custom_bot.send_image_message": {
      input: {
        /**
         * The Feishu `image_key` obtained from the image upload API.
         * @minLength 1
         */
        imageKey: string;
      };
      output: {
        /** The Feishu response code. `0` means success. */
        code: number;
        /** The Feishu response message. */
        msg: string;
        /** The Feishu response data payload. */
        data: Record<string, unknown>;
        /** The legacy response code returned for backward compatibility. */
        statusCode?: number;
        /** The legacy response message returned for backward compatibility. */
        statusMessage?: string;
      };
    };
    /** Send an interactive card message through the Feishu/Lark custom bot webhook. */
    "feishu_custom_bot.send_interactive_message": {
      input: {
        /** The Feishu interactive card payload sent as the top-level `card` object. */
        card: Record<string, unknown>;
      };
      output: {
        /** The Feishu response code. `0` means success. */
        code: number;
        /** The Feishu response message. */
        msg: string;
        /** The Feishu response data payload. */
        data: Record<string, unknown>;
        /** The legacy response code returned for backward compatibility. */
        statusCode?: number;
        /** The legacy response message returned for backward compatibility. */
        statusMessage?: string;
      };
    };
    /** Send a post rich-text message through the Feishu/Lark custom bot webhook. */
    "feishu_custom_bot.send_post_message": {
      input: {
        /** The Feishu post payload sent as content.post. */
        post: {
          /** One language block inside the Feishu post payload. */
          zh_cn?: {
            /** The rich-text title. */
            title?: string;
            /**
             * The rich-text paragraphs grouped by line.
             * @minItems 1
             */
            content: Array<Array<Record<string, unknown>>>;
            [key: string]: unknown;
          };
          /** One language block inside the Feishu post payload. */
          en_us?: {
            /** The rich-text title. */
            title?: string;
            /**
             * The rich-text paragraphs grouped by line.
             * @minItems 1
             */
            content: Array<Array<Record<string, unknown>>>;
            [key: string]: unknown;
          };
        };
      };
      output: {
        /** The Feishu response code. `0` means success. */
        code: number;
        /** The Feishu response message. */
        msg: string;
        /** The Feishu response data payload. */
        data: Record<string, unknown>;
        /** The legacy response code returned for backward compatibility. */
        statusCode?: number;
        /** The legacy response message returned for backward compatibility. */
        statusMessage?: string;
      };
    };
    /** Send a shared-chat card through the Feishu/Lark custom bot webhook. */
    "feishu_custom_bot.send_share_chat_message": {
      input: {
        /**
         * The Feishu chat ID used in the `share_chat` message payload.
         * @minLength 1
         */
        shareChatId: string;
      };
      output: {
        /** The Feishu response code. `0` means success. */
        code: number;
        /** The Feishu response message. */
        msg: string;
        /** The Feishu response data payload. */
        data: Record<string, unknown>;
        /** The legacy response code returned for backward compatibility. */
        statusCode?: number;
        /** The legacy response message returned for backward compatibility. */
        statusMessage?: string;
      };
    };
    /** Send a text message through the Feishu/Lark custom bot webhook. */
    "feishu_custom_bot.send_text_message": {
      input: {
        /**
         * The text message content. You can include Feishu `<at ...>` tags inline.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** The Feishu response code. `0` means success. */
        code: number;
        /** The Feishu response message. */
        msg: string;
        /** The Feishu response data payload. */
        data: Record<string, unknown>;
        /** The legacy response code returned for backward compatibility. */
        statusCode?: number;
        /** The legacy response message returned for backward compatibility. */
        statusMessage?: string;
      };
    };
  }
}
