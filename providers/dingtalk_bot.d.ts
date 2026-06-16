import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send an actionCard message through the DingTalk custom bot webhook. */
    "dingtalk_bot.send_action_card_message": {
      input: {
        /** Use one overall action button. */
        cardMode: "single";
        /**
         * Optional idempotency key used to deduplicate retries.
         * @minLength 1
         */
        msgUuid?: string;
        /**
         * The actionCard title.
         * @minLength 1
         */
        title: string;
        /**
         * The markdown actionCard body. Include `@userId` inline if you need a mention in this message.
         * @minLength 1
         */
        text: string;
        /**
         * The single action button title.
         * @minLength 1
         */
        singleTitle: string;
        /**
         * The URL opened after clicking the single action.
         * @minLength 1
         */
        singleUrl: string;
        /** How to arrange actionCard buttons. `vertical` maps to DingTalk `0`, `horizontal` maps to `1`. */
        buttonOrientation?: "vertical" | "horizontal";
        [key: string]: unknown;
      } | {
        /** Use multiple independent action buttons. */
        cardMode: "buttons";
        /**
         * Optional idempotency key used to deduplicate retries.
         * @minLength 1
         */
        msgUuid?: string;
        /**
         * The actionCard title.
         * @minLength 1
         */
        title: string;
        /**
         * The markdown actionCard body. Include `@userId` inline if you need a mention in this message.
         * @minLength 1
         */
        text: string;
        /**
         * The action buttons shown on the card.
         * @minItems 1
         */
        buttons: Array<{
          /**
           * The button title.
           * @minLength 1
           */
          title: string;
          /**
           * The URL opened after clicking the button.
           * @minLength 1
           */
          actionUrl: string;
        }>;
        /** How to arrange actionCard buttons. `vertical` maps to DingTalk `0`, `horizontal` maps to `1`. */
        buttonOrientation?: "vertical" | "horizontal";
        [key: string]: unknown;
      };
      output: {
        /** The DingTalk response code. `0` means success. */
        errcode: number;
        /** The DingTalk response message. */
        errmsg: string;
      };
    };
    /** Send a feedCard message through the DingTalk custom bot webhook. */
    "dingtalk_bot.send_feed_card_message": {
      input: {
        /**
         * Optional idempotency key used to deduplicate retries.
         * @minLength 1
         */
        msgUuid?: string;
        /**
         * The links included in the feedCard.
         * @minItems 1
         */
        links: Array<{
          /**
           * The link title.
           * @minLength 1
           */
          title: string;
          /**
           * The URL opened after clicking the link.
           * @minLength 1
           */
          messageUrl: string;
          /**
           * The image URL shown for the link.
           * @minLength 1
           */
          picUrl: string;
        }>;
      };
      output: {
        /** The DingTalk response code. `0` means success. */
        errcode: number;
        /** The DingTalk response message. */
        errmsg: string;
      };
    };
    /** Send a link message through the DingTalk custom bot webhook. */
    "dingtalk_bot.send_link_message": {
      input: {
        /**
         * Optional idempotency key used to deduplicate retries.
         * @minLength 1
         */
        msgUuid?: string;
        /**
         * The message title.
         * @minLength 1
         */
        title: string;
        /**
         * The message text shown in the card.
         * @minLength 1
         */
        text: string;
        /**
         * The URL opened after clicking the message.
         * @minLength 1
         */
        messageUrl: string;
        /**
         * The optional image URL shown in the message.
         * @minLength 1
         */
        picUrl?: string;
      };
      output: {
        /** The DingTalk response code. `0` means success. */
        errcode: number;
        /** The DingTalk response message. */
        errmsg: string;
      };
    };
    /** Send a markdown message through the DingTalk custom bot webhook. */
    "dingtalk_bot.send_markdown_message": {
      input: {
        /**
         * Optional idempotency key used to deduplicate retries.
         * @minLength 1
         */
        msgUuid?: string;
        /**
         * The title shown in the conversation preview.
         * @minLength 1
         */
        title: string;
        /**
         * The markdown message body.
         * @minLength 1
         */
        text: string;
        /**
         * Optional mobile numbers to mention in the group.
         * @minItems 1
         */
        atMobiles?: Array<string>;
        /**
         * Optional DingTalk user IDs to mention in the group.
         * @minItems 1
         */
        atUserIds?: Array<string>;
        /** Whether to mention everyone in the group. */
        isAtAll?: boolean;
      };
      output: {
        /** The DingTalk response code. `0` means success. */
        errcode: number;
        /** The DingTalk response message. */
        errmsg: string;
      };
    };
    /** Send a text message through the DingTalk custom bot webhook. */
    "dingtalk_bot.send_text_message": {
      input: {
        /**
         * Optional idempotency key used to deduplicate retries.
         * @minLength 1
         */
        msgUuid?: string;
        /**
         * The text message content.
         * @minLength 1
         */
        content: string;
        /**
         * Optional mobile numbers to mention in the group.
         * @minItems 1
         */
        atMobiles?: Array<string>;
        /**
         * Optional DingTalk user IDs to mention in the group.
         * @minItems 1
         */
        atUserIds?: Array<string>;
        /** Whether to mention everyone in the group. */
        isAtAll?: boolean;
      };
      output: {
        /** The DingTalk response code. `0` means success. */
        errcode: number;
        /** The DingTalk response message. */
        errmsg: string;
      };
    };
  }
}
