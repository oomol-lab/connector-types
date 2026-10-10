import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Picky Assist account balance using the connected project API token. */
    "picky_assist.get_balance": {
      input: Record<string, never>;
      output: {
        /** Provider business status; 100 indicates success. */
        status?: number;
        /** Provider status message. */
        message?: string;
        /** Available account balance reported by Picky Assist. */
        balance?: number;
        [key: string]: unknown;
      };
    };
    /** Submit text or public-URL media messages to one or more Picky Assist recipients. Success means accepted for processing, not delivered. WhatsApp session and channel restrictions still apply. */
    "picky_assist.send_messages": {
      input: {
        /** Channel ID from https://app.pickyassist.com/settings/channels; use 5 for Facebook Messenger. */
        application: number;
        /** Shared text or image/video caption, used when a recipient message is empty. */
        globalmessage?: string;
        /**
         * Public media URL fetched by Picky Assist, not by Connector. Media limits depend on the channel and file type.
         * @format uri
         */
        globalmedia?: string;
        /**
         * Display filename for PDFs and documents; unsupported by Phone Automation.
         * @maxLength 20
         */
        media_name?: string;
        /**
         * Queue priority: 0 for low (default), 1 for high.
         * @minimum 0
         * @maximum 1
         */
        priority?: number;
        /** Set to 1 to create contacts against the channel. */
        createcontact?: 1;
        /** Set to 1 to send audio as a voice note on WhatsApp Web Automation. */
        voice?: 1;
        /**
         * Recipients with optional personalized content. Each needs text or media, either shared or individual.
         * @minItems 1
         */
        data: Array<{
          /**
           * Phone number with country code, without a leading zero, plus sign, or spaces.
           * @pattern ^[1-9][0-9]{4,}$
           */
          number?: string;
          /**
           * Facebook Messenger recipient ID; use with application 5 instead of number.
           * @minLength 1
           */
          messenger_id?: string;
          /** Personalized text or image/video caption; falls back to globalmessage when empty. */
          message?: string;
          /**
           * Public media URL for this recipient; supported by WhatsApp Official and Shared Numbers.
           * @format uri
           */
          media?: string;
          /** Your reference returned in delivery webhooks; not an idempotency key. */
          reference_number?: string;
          /** Message ID to quote in a reply on WhatsApp Web Automation. */
          quoted?: string;
        }>;
      };
      output: {
        /** Provider business status; 100 indicates acceptance. */
        status?: number;
        /** Provider status message. */
        message?: string;
        /** Batch submission ID. */
        push_id?: string;
        /** Per-recipient submission results. */
        data?: Array<{
          /** Message ID allocated by Picky Assist. */
          msg_id?: string;
          /** Recipient phone number. */
          number?: string;
          /** Credit charged as reported by the provider. */
          credit?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
