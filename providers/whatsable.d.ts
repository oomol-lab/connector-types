import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send one WhatsApp text message with an optional attachment URL through WhatsAble. */
    "whatsable.send_message": {
      input: {
        /**
         * The recipient phone number in E.164 format, including the leading plus sign.
         * @minLength 1
         */
        to: string;
        /**
         * The text content of the WhatsApp message.
         * @minLength 1
         */
        text: string;
        /**
         * A public HTTP or HTTPS URL that WhatsAble can fetch as an attachment.
         * @pattern ^https?://
         * @format uri
         */
        attachment?: string;
        /**
         * The filename shown for a document attachment.
         * @minLength 1
         */
        filename?: string;
      };
      output: {
        /** Whether WhatsAble accepted the message request. */
        success?: boolean;
        /** A human-readable summary of the submission result. */
        message?: string;
        /** Additional message delivery details returned by WhatsAble. */
        details?: {
          /** WhatsApp messages accepted by the upstream service. */
          messages?: Array<{
            /** The WhatsApp message ID. */
            id?: string;
            /** The acceptance status of the WhatsApp message. */
            message_status?: string;
          }>;
          [key: string]: unknown;
        };
      };
    };
  }
}
