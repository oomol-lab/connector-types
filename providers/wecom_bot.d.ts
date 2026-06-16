import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send an image message through the WeCom bot webhook. */
    "wecom_bot.send_image_message": {
      input: {
        /**
         * The base64-encoded image bytes. The raw image must be a JPG or PNG no larger than 2 MB.
         * @minLength 1
         */
        base64: string;
        /** The MD5 digest of the raw image bytes before base64 encoding. */
        md5: string;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
    /** Send a markdown message through the WeCom bot webhook. */
    "wecom_bot.send_markdown_message": {
      input: {
        /**
         * The markdown content encoded as UTF-8.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
    /** Send a markdown_v2 message through the WeCom bot webhook. */
    "wecom_bot.send_markdown_v2_message": {
      input: {
        /**
         * The markdown_v2 content encoded as UTF-8. WeCom markdown_v2 does not support `@` mentions.
         * @minLength 1
         */
        content: string;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
    /** Send a news message through the WeCom bot webhook. */
    "wecom_bot.send_news_message": {
      input: {
        /**
         * The news articles to send. WeCom supports 1 to 8 articles per message.
         * @minItems 1
         * @maxItems 8
         */
        articles: Array<{
          /**
           * The article title. Titles longer than 128 bytes are truncated by WeCom.
           * @minLength 1
           */
          title: string;
          /** The optional article description. Descriptions longer than 512 bytes are truncated by WeCom. */
          description?: string;
          /**
           * The URL opened after the user clicks the article.
           * @minLength 1
           */
          url: string;
          /**
           * The optional JPG or PNG image URL shown for the article.
           * @minLength 1
           */
          picurl?: string;
        }>;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
    /** Send a text message through the WeCom bot webhook. */
    "wecom_bot.send_text_message": {
      input: {
        /**
         * The text content. The value can include WeCom `<@userid>` mention syntax.
         * @minLength 1
         */
        content: string;
        /**
         * Optional user IDs to mention explicitly.
         * @minItems 1
         */
        mentionedList?: Array<string>;
        /**
         * Optional mobile numbers to mention explicitly.
         * @minItems 1
         */
        mentionedMobileList?: Array<string>;
      };
      output: {
        /** The WeCom response code. `0` means success. */
        errcode: number;
        /** The WeCom response message. */
        errmsg: string;
      };
    };
  }
}
