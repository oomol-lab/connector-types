import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List message templates for the connected Gupshup app. */
    "gupshup.list_templates": {
      input: {
        /**
         * The zero-based page number to retrieve.
         * @minimum 0
         */
        pageNo?: number;
        /**
         * The number of templates to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The template status to filter by, such as APPROVED. */
        templateStatus?: string;
        /** The template category to filter by, such as MARKETING, UTILITY, or AUTHENTICATION. */
        templateCategory?: string;
        /** The template type to filter by, such as TEXT. */
        templateType?: string;
        /** The template quality rating to filter by, such as GREEN. */
        quality?: string;
        /** The template language code to filter by, such as en. */
        languageCode?: string;
      };
      output: {
        /** The current Gupshup template-list response payload. */
        data: unknown;
      };
    };
    /** Send an approved text template message through Gupshup. */
    "gupshup.send_template_message": {
      input: {
        /**
         * The registered WhatsApp Business sender number in international format without a plus sign.
         * @minLength 1
         */
        source: string;
        /**
         * The recipient WhatsApp number in international format without a plus sign.
         * @minLength 1
         */
        destination: string;
        /**
         * The Gupshup app name associated with the sender number.
         * @minLength 1
         */
        appName: string;
        /**
         * The unique ID of the approved Gupshup template.
         * @minLength 1
         */
        templateId: string;
        /** The template parameter values in their order of occurrence. */
        parameters?: Array<string>;
      };
      output: {
        /** The submission status returned by Gupshup. */
        status: string;
        /**
         * The unique Gupshup message identifier.
         * @minLength 1
         */
        messageId: string;
      };
    };
    /** Send a text message in an active WhatsApp conversation through Gupshup. */
    "gupshup.send_text_message": {
      input: {
        /**
         * The registered WhatsApp Business sender number in international format without a plus sign.
         * @minLength 1
         */
        source: string;
        /**
         * The recipient WhatsApp number in international format without a plus sign.
         * @minLength 1
         */
        destination: string;
        /**
         * The Gupshup app name associated with the sender number.
         * @minLength 1
         */
        appName: string;
        /**
         * The text content to send to the recipient.
         * @minLength 1
         */
        text: string;
        /** Whether to disable link previews in the text message. */
        disablePreview?: boolean;
      };
      output: {
        /** The submission status returned by Gupshup. */
        status: string;
        /**
         * The unique Gupshup message identifier.
         * @minLength 1
         */
        messageId: string;
      };
    };
  }
}
