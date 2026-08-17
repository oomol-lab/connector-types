import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether the Z-API instance and its connected smartphone are online. */
    "z_api.get_instance_status": {
      input: Record<string, never>;
      output: {
        /** Whether the WhatsApp account is connected to Z-API. */
        connected: boolean;
        /** The current connection status detail returned by Z-API. */
        error: string;
        /** Whether the connected smartphone is online. */
        smartphoneConnected: boolean;
      };
    };
    /** Send an image from a public URL to a WhatsApp contact or group through Z-API. */
    "z_api.send_image": {
      input: {
        /**
         * The recipient phone number with country and area codes, or a Z-API group ID.
         * @minLength 1
         */
        phone: string;
        /**
         * The public HTTP or HTTPS image URL that Z-API should fetch and send.
         * @format uri
         */
        imageUrl: string;
        /** The caption to send with the image. */
        caption?: string;
        /**
         * The message ID to reply to.
         * @minLength 1
         */
        messageId?: string;
        /**
         * The delay before sending the message, in seconds.
         * @minimum 1
         * @maximum 15
         */
        delayMessage?: number;
        /** Whether the image can be viewed only once. */
        viewOnce?: boolean;
        /**
         * The ID of a previously sent image message whose caption should be edited.
         * @minLength 1
         */
        editImageMessageId?: string;
      };
      output: {
        /** The Z-API message ID. */
        zaapId: string;
        /** The WhatsApp message ID. */
        messageId: string;
        /** The Zapier-compatible alias of the WhatsApp message ID. */
        id: string;
      };
    };
    /** Send a fixed location to a WhatsApp contact or group through Z-API. */
    "z_api.send_location": {
      input: {
        /**
         * The recipient phone number with country and area codes, or a Z-API group ID.
         * @minLength 1
         */
        phone: string;
        /**
         * The location title.
         * @minLength 1
         */
        title: string;
        /**
         * The full street address for the location.
         * @minLength 1
         */
        address: string;
        /**
         * The location latitude as a decimal string.
         * @minLength 1
         */
        latitude: string;
        /**
         * The location longitude as a decimal string.
         * @minLength 1
         */
        longitude: string;
        /**
         * The message ID to reply to.
         * @minLength 1
         */
        messageId?: string;
        /**
         * The delay before sending the message, in seconds.
         * @minimum 1
         * @maximum 15
         */
        delayMessage?: number;
      };
      output: {
        /** The Z-API message ID. */
        zaapId: string;
        /** The WhatsApp message ID. */
        messageId: string;
        /** The Zapier-compatible alias of the WhatsApp message ID. */
        id: string;
      };
    };
    /** Send a plain-text message to a WhatsApp contact or group through Z-API. */
    "z_api.send_text": {
      input: {
        /**
         * The recipient phone number with country and area codes, or a Z-API group ID.
         * @minLength 1
         */
        phone: string;
        /**
         * The message text to send.
         * @minLength 1
         */
        message: string;
        /**
         * The delay before sending the message, in seconds.
         * @minimum 1
         * @maximum 15
         */
        delayMessage?: number;
        /**
         * How long to show the typing status before sending, in seconds.
         * @minimum 1
         * @maximum 15
         */
        delayTyping?: number;
        /**
         * The ID of a previously sent text message to edit.
         * @minLength 1
         */
        editMessageId?: string;
      };
      output: {
        /** The Z-API message ID. */
        zaapId: string;
        /** The WhatsApp message ID. */
        messageId: string;
        /** The Zapier-compatible alias of the WhatsApp message ID. */
        id: string;
      };
    };
  }
}
