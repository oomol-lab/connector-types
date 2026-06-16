import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the current Waboxapp account status for the connected WhatsApp number. */
    "waboxapp.get_account_status": {
      input: Record<string, never>;
      output: {
        /** Normalized Waboxapp account status fields. */
        account: {
          /** The connected WhatsApp account phone number with international code. */
          uid: string;
          /** The webhook callback URL configured for the connected account. */
          hookUrl: string | null;
          /** The display name configured for the connected account. */
          alias: string | null;
          /** The smartphone platform reported by Waboxapp. */
          platform: string | null;
          /** The smartphone battery percentage reported by Waboxapp. */
          batteryPercent: number | null;
          /** Whether the connected smartphone is plugged in and charging. */
          plugged: boolean | null;
          /** The waboxapp web session locale. */
          locale: string | null;
          /** The raw Waboxapp status payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Send a plain text WhatsApp chat message through Waboxapp. */
    "waboxapp.send_chat": {
      input: {
        /**
         * The recipient phone number with international code.
         * @minLength 1
         */
        to: string;
        /**
         * Your custom unique ID for this outbound message. Waboxapp echoes it back on success and ACK events.
         * @minLength 1
         */
        customUid: string;
        /**
         * The text message body to send.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** Whether Waboxapp accepted the message submission. */
        success: boolean;
        /** The custom unique ID echoed back by Waboxapp for this message. */
        customUid: string;
        /** The raw Waboxapp response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Send an image by public URL through Waboxapp. */
    "waboxapp.send_image": {
      input: {
        /**
         * The recipient phone number with international code.
         * @minLength 1
         */
        to: string;
        /**
         * Your custom unique ID for this outbound message. Waboxapp echoes it back on success and ACK events.
         * @minLength 1
         */
        customUid: string;
        /**
         * The public image URL to send.
         * @minLength 1
         * @format uri
         */
        imageUrl: string;
        /**
         * The title shown on the image preview.
         * @minLength 1
         */
        caption?: string;
        /**
         * The extended description shown on the image preview.
         * @minLength 1
         */
        description?: string;
      };
      output: {
        /** Whether Waboxapp accepted the message submission. */
        success: boolean;
        /** The custom unique ID echoed back by Waboxapp for this message. */
        customUid: string;
        /** The raw Waboxapp response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a link with preview metadata through Waboxapp. */
    "waboxapp.send_link": {
      input: {
        /**
         * The recipient phone number with international code.
         * @minLength 1
         */
        to: string;
        /**
         * Your custom unique ID for this outbound message. Waboxapp echoes it back on success and ACK events.
         * @minLength 1
         */
        customUid: string;
        /**
         * The public link URL to send.
         * @minLength 1
         * @format uri
         */
        linkUrl: string;
        /**
         * The title shown on the link preview.
         * @minLength 1
         */
        caption?: string;
        /**
         * The extended description shown on the link preview.
         * @minLength 1
         */
        description?: string;
        /**
         * The thumbnail image URL shown on the link preview.
         * @minLength 1
         * @format uri
         */
        urlThumb?: string;
      };
      output: {
        /** Whether Waboxapp accepted the message submission. */
        success: boolean;
        /** The custom unique ID echoed back by Waboxapp for this message. */
        customUid: string;
        /** The raw Waboxapp response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a file attachment by public URL through Waboxapp. */
    "waboxapp.send_media": {
      input: {
        /**
         * The recipient phone number with international code.
         * @minLength 1
         */
        to: string;
        /**
         * Your custom unique ID for this outbound message. Waboxapp echoes it back on success and ACK events.
         * @minLength 1
         */
        customUid: string;
        /**
         * The public file URL to send.
         * @minLength 1
         * @format uri
         */
        mediaUrl: string;
        /**
         * The title shown on the file preview.
         * @minLength 1
         */
        caption?: string;
        /**
         * The extended description shown on the file preview.
         * @minLength 1
         */
        description?: string;
        /**
         * The thumbnail image URL shown on the file preview.
         * @minLength 1
         * @format uri
         */
        urlThumb?: string;
      };
      output: {
        /** Whether Waboxapp accepted the message submission. */
        success: boolean;
        /** The custom unique ID echoed back by Waboxapp for this message. */
        customUid: string;
        /** The raw Waboxapp response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
