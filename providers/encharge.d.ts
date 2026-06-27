import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send a transactional email through the current Encharge account. */
    "encharge.send_email": {
      input: {
        /** Which Encharge email content field to send. */
        contentType: "text" | "html" | "template";
        /**
         * Plain-text body, HTML body, or template name based on contentType.
         * @minLength 1
         */
        content: string;
        /** Recipient email address string or an existing Encharge person reference. */
        to: string | {
          /**
           * User ID of an existing Encharge person.
           * @minLength 1
           */
          userId: string;
        };
        /** Email address string or object with email and name. */
        from: string | {
          /**
           * Email address.
           * @format email
           */
          email: string;
          /**
           * Display name to use with the email address.
           * @minLength 1
           */
          name?: string;
        };
        /**
         * Email subject. Required for text and HTML email content.
         * @minLength 1
         */
        subject?: string;
        /** Dictionary of template values that Encharge replaces in the email subject or body. */
        templateProperties?: Record<string, unknown>;
        /** Whether Encharge should skip sending to people who unsubscribed from emails. */
        unsubscribeCheck?: boolean;
        /** Whether Encharge should apply account-level automatic UTM tagging to links. */
        UTMTags?: boolean;
        /**
         * Comma-separated email address list accepted by Encharge.
         * @minLength 1
         */
        cc?: string;
        /**
         * Comma-separated email address list accepted by Encharge.
         * @minLength 1
         */
        bcc?: string;
        /** Email address string or object with email and name. */
        reply?: string | {
          /**
           * Email address.
           * @format email
           */
          email: string;
          /**
           * Display name to use with the email address.
           * @minLength 1
           */
          name?: string;
        };
      };
      output: {
        /** Whether Encharge accepted the send request. */
        ok: boolean;
        /** JSON response returned by Encharge, when present. */
        response?: Record<string, unknown>;
      };
    };
  }
}
