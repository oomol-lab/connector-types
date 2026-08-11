import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one TimelinesAI chat by its numeric chat ID. */
    "timelinesai.get_chat": {
      input: {
        /**
         * The TimelinesAI chat ID.
         * @minimum 1
         */
        chatId: number;
      };
      output: {
        /** A normalized TimelinesAI chat with its stable routing and state fields. */
        chat: {
          /** The TimelinesAI chat ID. */
          id: number;
          /** The display name of the chat or group. */
          name: string;
          /** The contact phone number, or null when this is a group chat. */
          phone: string | null;
          /** The WhatsApp-native contact or group identifier. */
          jid: string;
          /** Whether this is a WhatsApp group chat. */
          isGroup: boolean;
          /** Whether the chat is closed. */
          closed: boolean;
          /** Whether the chat is marked as read. */
          read: boolean;
          /** The labels assigned to the chat. */
          labels: Array<string>;
          /** Whether the TimelinesAI AI Agent autoresponse is enabled for the chat. */
          chatgptAutoresponseEnabled: boolean;
          /** The assigned teammate email, or null when the chat is unassigned. */
          responsibleEmail: string | null;
          /** The assigned teammate name, or null when the chat is unassigned. */
          responsibleName: string | null;
          /** The WID of the WhatsApp account that owns the chat. */
          whatsappAccountId: string;
          /** The TimelinesAI application URL for the chat. */
          chatUrl: string;
          /** The chat creation timestamp in the workspace timezone. */
          createdTimestamp: string;
          /** The UID of the latest message, or null when unavailable. */
          lastMessageUid: string | null;
          /** The latest message timestamp, or null when unavailable. */
          lastMessageTimestamp: string | null;
          /** Whether the chat is flagged as an unattended customer chat. */
          unattended: boolean;
          /** The contact or group photo URL, or null when unavailable. */
          photo: string | null;
          /** Whether TimelinesAI currently allows API messages to this chat. */
          isAllowedToMessage: boolean | null;
          /** The raw TimelinesAI chat payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one TimelinesAI message by its workspace-unique UID. */
    "timelinesai.get_message": {
      input: {
        /**
         * The TimelinesAI message UID.
         * @minLength 1
         */
        messageUid: string;
      };
      output: {
        /** A normalized TimelinesAI message. */
        message: {
          /** The message UID within the TimelinesAI workspace. */
          uid: string;
          /** The TimelinesAI chat ID containing the message. */
          chatId: number;
          /** The WhatsApp message creation timestamp. */
          timestamp: string;
          /** The timestamp when TimelinesAI received the message. */
          receivedTimestamp: string;
          /** The sender phone number. */
          senderPhone: string;
          /** The sender display name. */
          senderName: string;
          /** The recipient phone number. */
          recipientPhone: string;
          /** The recipient display name. */
          recipientName: string;
          /** Whether the message was sent from a connected WhatsApp account. */
          fromMe: boolean;
          /** The message text, or null for messages without text. */
          text: string | null;
          /** The attachment URL, or null when the message has no attachment. */
          attachmentUrl: string | null;
          /** The attachment filename, or null when the message has no attachment. */
          attachmentFilename: string | null;
          /** The delivery or call status reported by TimelinesAI. */
          status: string;
          /** The open-ended display name for the message origin. */
          origin: string;
          /** Whether the message has an attachment. */
          hasAttachment: boolean;
          /** The TimelinesAI message type. */
          messageType: string;
          /** Free-form metadata whose shape depends on the message type. */
          metadata: Record<string, unknown>;
          /** The teammate who created the message, or an empty string. */
          createdBy: string;
          /** The raw TimelinesAI message payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the documented delivery status history for one TimelinesAI message. */
    "timelinesai.get_message_status": {
      input: {
        /**
         * The TimelinesAI message UID.
         * @minLength 1
         */
        messageUid: string;
      };
      output: {
        /** The status records returned by TimelinesAI. */
        history: Array<{
          /** The message delivery status. */
          status: string;
          /** The timestamp when the message entered this status. */
          timestamp: string;
        }>;
      };
    };
    /** Get the connected TimelinesAI workspace identity, plan, and quota usage. */
    "timelinesai.get_workspace": {
      input: Record<string, never>;
      output: {
        /** A normalized TimelinesAI workspace. */
        workspace: {
          /** The unique TimelinesAI workspace slug. */
          workspaceId: string;
          /** The human-readable TimelinesAI workspace name. */
          displayName: string;
          /** The current TimelinesAI subscription plan. */
          plan: string;
          /** The workspace seat quota, when reported. */
          seats: {
            /** The total allocation for the current quota period. */
            total: number;
            /** The amount consumed in the current quota period. */
            used: number;
            /** The start timestamp of the quota period, when available. */
            periodStart: string | null;
            /** The end timestamp of the quota period, when available. */
            periodEnd: string | null;
          } | null;
          /** The current workspace messaging quota. */
          messagingQuota: {
            /** The total allocation for the current quota period. */
            total: number;
            /** The amount consumed in the current quota period. */
            used: number;
            /** The start timestamp of the quota period, when available. */
            periodStart: string | null;
            /** The end timestamp of the quota period, when available. */
            periodEnd: string | null;
          };
          /** The current workspace API call quota. */
          apiCallsQuota: {
            /** The total allocation for the current quota period. */
            total: number;
            /** The amount consumed in the current quota period. */
            used: number;
            /** The start timestamp of the quota period, when available. */
            periodStart: string | null;
            /** The end timestamp of the quota period, when available. */
            periodEnd: string | null;
          };
          /** The optional one-off messaging quota balance. */
          nonRecurringQuota: {
            /** The remaining one-off quota balance, or null when TimelinesAI omits it. */
            remainingBalance: number | null;
            /** The timestamp when the one-off quota balance was last updated. */
            lastUpdatedAt: string | null;
          } | null;
          /** The raw TimelinesAI workspace payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List and filter messages in one TimelinesAI chat, 50 records per page. */
    "timelinesai.list_chat_messages": {
      input: {
        /**
         * The TimelinesAI chat ID.
         * @minimum 1
         */
        chatId: number;
        /** Filter outbound messages when true or inbound messages when false. */
        fromMe?: boolean;
        /**
         * Return messages created on or after this ISO date or timestamp.
         * @minLength 1
         */
        after?: string;
        /**
         * Return messages created on or before this ISO date or timestamp.
         * @minLength 1
         */
        before?: string;
        /**
         * The TimelinesAI message UID.
         * @minLength 1
         */
        afterMessage?: string;
        /**
         * The TimelinesAI message UID.
         * @minLength 1
         */
        beforeMessage?: string;
        /** The message timestamp sort direction. */
        sortingOrder?: "asc" | "desc";
      };
      output: {
        /** Whether another message page is available. */
        hasMorePages: boolean;
        /** The messages returned for the chat. */
        messages: Array<{
          /** The message UID within the TimelinesAI workspace. */
          uid: string;
          /** The TimelinesAI chat ID containing the message. */
          chatId: number;
          /** The WhatsApp message creation timestamp. */
          timestamp: string;
          /** The timestamp when TimelinesAI received the message. */
          receivedTimestamp: string;
          /** The sender phone number. */
          senderPhone: string;
          /** The sender display name. */
          senderName: string;
          /** The recipient phone number. */
          recipientPhone: string;
          /** The recipient display name. */
          recipientName: string;
          /** Whether the message was sent from a connected WhatsApp account. */
          fromMe: boolean;
          /** The message text, or null for messages without text. */
          text: string | null;
          /** The attachment URL, or null when the message has no attachment. */
          attachmentUrl: string | null;
          /** The attachment filename, or null when the message has no attachment. */
          attachmentFilename: string | null;
          /** The delivery or call status reported by TimelinesAI. */
          status: string;
          /** The open-ended display name for the message origin. */
          origin: string;
          /** Whether the message has an attachment. */
          hasAttachment: boolean;
          /** The TimelinesAI message type. */
          messageType: string;
          /** Free-form metadata whose shape depends on the message type. */
          metadata: Record<string, unknown>;
          /** The teammate who created the message, or an empty string. */
          createdBy: string;
          /** The raw TimelinesAI message payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List and filter chats in the TimelinesAI workspace, 50 records per page. */
    "timelinesai.list_chats": {
      input: {
        /**
         * Match chats having at least one of these labels.
         * @minItems 1
         */
        labels?: Array<string>;
        /**
         * Match chats belonging to any of these WhatsApp account WIDs.
         * @minItems 1
         */
        whatsappAccountIds?: Array<string>;
        /** Filter group chats when true or direct chats when false. */
        group?: boolean;
        /**
         * Match chats assigned to any of these teammate emails.
         * @minItems 1
         */
        responsibleEmails?: Array<string>;
        /**
         * Match chats containing any of these case-insensitive name fragments.
         * @minItems 1
         */
        names?: Array<string>;
        /**
         * Filter direct chats by one phone number.
         * @minLength 1
         */
        phone?: string;
        /** Filter chats by read state. */
        read?: boolean;
        /** Filter chats by closed state. */
        closed?: boolean;
        /** Filter chats by TimelinesAI AI Agent autoresponse state. */
        chatgptAutoresponseEnabled?: boolean;
        /**
         * The one-based results page, with up to 50 chats per page.
         * @minimum 1
         */
        page?: number;
        /**
         * Return chats created after this timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Return chats created before this timestamp.
         * @format date-time
         */
        createdBefore?: string;
      };
      output: {
        /** Whether another page of chats is available. */
        hasMorePages: boolean;
        /** The chats returned on this page. */
        chats: Array<{
          /** The TimelinesAI chat ID. */
          id: number;
          /** The display name of the chat or group. */
          name: string;
          /** The contact phone number, or null when this is a group chat. */
          phone: string | null;
          /** The WhatsApp-native contact or group identifier. */
          jid: string;
          /** Whether this is a WhatsApp group chat. */
          isGroup: boolean;
          /** Whether the chat is closed. */
          closed: boolean;
          /** Whether the chat is marked as read. */
          read: boolean;
          /** The labels assigned to the chat. */
          labels: Array<string>;
          /** Whether the TimelinesAI AI Agent autoresponse is enabled for the chat. */
          chatgptAutoresponseEnabled: boolean;
          /** The assigned teammate email, or null when the chat is unassigned. */
          responsibleEmail: string | null;
          /** The assigned teammate name, or null when the chat is unassigned. */
          responsibleName: string | null;
          /** The WID of the WhatsApp account that owns the chat. */
          whatsappAccountId: string;
          /** The TimelinesAI application URL for the chat. */
          chatUrl: string;
          /** The chat creation timestamp in the workspace timezone. */
          createdTimestamp: string;
          /** The UID of the latest message, or null when unavailable. */
          lastMessageUid: string | null;
          /** The latest message timestamp, or null when unavailable. */
          lastMessageTimestamp: string | null;
          /** Whether the chat is flagged as an unattended customer chat. */
          unattended: boolean;
          /** The contact or group photo URL, or null when unavailable. */
          photo: string | null;
          /** Whether TimelinesAI currently allows API messages to this chat. */
          isAllowedToMessage: boolean | null;
          /** The raw TimelinesAI chat payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List WhatsApp accounts connected to the TimelinesAI workspace. */
    "timelinesai.list_whatsapp_accounts": {
      input: Record<string, never>;
      output: {
        /** The connected WhatsApp accounts. */
        accounts: Array<{
          /** The WhatsApp account identifier in WID format. */
          id: string;
          /** The connected WhatsApp phone number in international format. */
          phone: string;
          /** The timestamp when the WhatsApp account was connected. */
          connectedOn: string;
          /** The current TimelinesAI connection status. */
          status: string;
          /** The name of the TimelinesAI teammate who owns the account. */
          ownerName: string;
          /** The email of the TimelinesAI teammate who owns the account. */
          ownerEmail: string;
          /** The WhatsApp profile name, or an empty string when unset. */
          accountName: string;
          /** The raw TimelinesAI WhatsApp account payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Send a plain-text WhatsApp message to an existing TimelinesAI chat or group. */
    "timelinesai.send_message_to_chat": {
      input: {
        /**
         * The TimelinesAI chat ID.
         * @minimum 1
         */
        chatId: number;
        /**
         * The plain-text WhatsApp message, up to 2000 characters.
         * @minLength 1
         * @maxLength 2000
         */
        text: string;
        /**
         * The UID of a message in the same WhatsApp account to reply to.
         * @minLength 1
         */
        replyTo?: string;
      };
      output: {
        /** The UID assigned to the accepted outbound message. */
        messageUid: string;
      };
    };
    /** Send a plain-text WhatsApp message directly to an international phone number. */
    "timelinesai.send_message_to_phone": {
      input: {
        /**
         * The recipient phone number in international format, including country code.
         * @minLength 1
         */
        phone: string;
        /**
         * The plain-text WhatsApp message, up to 2000 characters.
         * @minLength 1
         * @maxLength 2000
         */
        text: string;
        /**
         * The connected WhatsApp account phone to send from; omit to use the most recently connected account.
         * @minLength 1
         */
        whatsappAccountPhone?: string;
      };
      output: {
        /** The UID assigned to the accepted outbound message. */
        messageUid: string;
      };
    };
  }
}
