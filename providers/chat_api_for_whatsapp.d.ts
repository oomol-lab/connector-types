import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current webhook, notification, video upload, and proxy settings. */
    "chat_api_for_whatsapp.get_settings": {
      input: Record<string, never>;
      output: {
        /** Configured webhook URL, or null when none is configured. */
        webhookUrl: string | null;
        /** Whether message acknowledgement webhooks are enabled. */
        ackNotificationsOn: boolean | null;
        /** Whether chat update webhooks are enabled. */
        chatUpdateOn: boolean | null;
        /** Whether incoming video upload handling is enabled. */
        videoUploadOn: boolean | null;
        /** Configured SOCKS5 proxy, or null when none is configured. */
        proxy: string | null;
        /** Raw Chat API settings response. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current Chat API WhatsApp instance status and QR code payload when authorization is pending. */
    "chat_api_for_whatsapp.get_status": {
      input: Record<string, never>;
      output: {
        /** Current Chat API instance status. */
        accountStatus: "got qr code" | "authenticated" | "loading" | "init" | "not_paid";
        /** Base64-encoded QR code image contents, when Chat API returns one. */
        qrCode?: string;
        /** Raw Chat API status response. */
        raw: Record<string, unknown>;
      };
    };
    /** List chats known to the connected Chat API WhatsApp instance. */
    "chat_api_for_whatsapp.list_chats": {
      input: Record<string, never>;
      output: {
        /** Chats returned by Chat API. */
        chats: Array<{
          /** Chat API chat ID. */
          id: string;
          /** Chat name returned by Chat API. */
          name: string;
          /** Avatar or group image URL returned by Chat API. */
          image?: string;
          /** Raw Chat API chat object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List incoming and outgoing messages, optionally filtered by chat ID or paged from a previous response. */
    "chat_api_for_whatsapp.list_messages": {
      input: {
        /**
         * The lastMessageNumber value from a previous list_messages response.
         * @minimum 0
         */
        lastMessageNumber?: number;
        /** Whether to request the last 100 messages and ignore lastMessageNumber. */
        last?: boolean;
        /**
         * Optional Chat API chat ID to filter messages by.
         * @minLength 1
         */
        chatId?: string;
      };
      output: {
        /** Messages returned by Chat API. */
        messages: Array<{
          /** Unique Chat API message ID. */
          id: string;
          /** Message body or media URL returned by Chat API. */
          body: string;
          /** Message type returned by Chat API. */
          type: string;
          /** Sender name returned by Chat API. */
          senderName?: string;
          /** Whether this message was sent by the connected account. */
          fromMe: boolean;
          /** Author ID for group messages. */
          author?: string;
          /** Unix timestamp when the message was sent. */
          time: number;
          /** Chat API chat ID containing the message. */
          chatId: string;
          /** Sequence number of the message in Chat API storage. */
          messageNumber: number;
          /** Raw Chat API message object. */
          raw: Record<string, unknown>;
        }>;
        /** The value to pass as lastMessageNumber on the next request. */
        lastMessageNumber?: number;
      };
    };
    /** List outbound messages currently waiting in the Chat API send queue. */
    "chat_api_for_whatsapp.list_messages_queue": {
      input: Record<string, never>;
      output: {
        /**
         * Total number of outbound messages in the queue.
         * @minimum 0
         */
        totalMessages: number;
        /** The first 100 queued outbound messages returned by Chat API. */
        first100: Array<{
          /** Chat API queue item ID. */
          id: number;
          /** Queued message body. */
          body: string;
          /** Queued message type. */
          type: string;
          /** Unix timestamp in milliseconds of the last send attempt. */
          lastTry?: number;
          /** Additional queued message metadata returned by Chat API. */
          metadata: Record<string, unknown>;
          /** Raw Chat API queued message object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Send a file using a public URL to an existing Chat API chat ID or to a phone number. */
    "chat_api_for_whatsapp.send_file_by_url": {
      input: {
        /**
         * Chat API chat ID, such as 17633123456@c.us for a private chat or 17680561234-1479621234@g.us for a group.
         * @minLength 1
         */
        chatId?: string;
        /**
         * Recipient phone number starting with the country code, without plus sign or separators.
         * @minLength 1
         */
        phone?: string;
        /**
         * Public HTTP or HTTPS URL of the file Chat API should send.
         * @format uri
         */
        fileUrl: string;
        /**
         * File name to show in WhatsApp, such as invoice.pdf.
         * @minLength 1
         */
        filename: string;
        /**
         * Optional text caption to show under the file.
         * @minLength 1
         */
        caption?: string;
      };
      output: {
        /** Whether Chat API accepted the message for sending. */
        sent: boolean;
        /** Unique Chat API message ID when one is returned. */
        id?: string;
        /** Posting status message returned by Chat API. */
        message?: string;
        /** Raw Chat API send response. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a text message to an existing Chat API chat ID or to a phone number. */
    "chat_api_for_whatsapp.send_text_message": {
      input: {
        /**
         * Chat API chat ID, such as 17633123456@c.us for a private chat or 17680561234-1479621234@g.us for a group.
         * @minLength 1
         */
        chatId?: string;
        /**
         * Recipient phone number starting with the country code, without plus sign or separators.
         * @minLength 1
         */
        phone?: string;
        /**
         * Message text to send.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** Whether Chat API accepted the message for sending. */
        sent: boolean;
        /** Unique Chat API message ID when one is returned. */
        id?: string;
        /** Posting status message returned by Chat API. */
        message?: string;
        /** Raw Chat API send response. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate the connected Chat API token and instance ID, returning the current instance status. */
    "chat_api_for_whatsapp.test_api_key": {
      input: Record<string, never>;
      output: {
        /** Current Chat API instance status. */
        accountStatus: "got qr code" | "authenticated" | "loading" | "init" | "not_paid";
        /** Base64-encoded QR code image contents, when Chat API returns one. */
        qrCode?: string;
        /** Raw Chat API status response. */
        raw: Record<string, unknown>;
      };
    };
  }
}
