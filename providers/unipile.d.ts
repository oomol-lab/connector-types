import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a Unipile account by ID. */
    "unipile.get_account": {
      input: {
        /**
         * The Unipile account ID to retrieve.
         * @minLength 1
         * @pattern \S
         */
        accountId: string;
      };
      output: {
        /** A normalized Unipile account. */
        account: {
          /** The Unipile account identifier. */
          id: string;
          /** The Unipile account type when returned. */
          type: string | null;
          /** The account display name when returned. */
          name: string | null;
          /** The account status when returned. */
          status: string | null;
          /** The account creation timestamp when returned. */
          createdAt: string | null;
          /** The raw object returned by Unipile. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a Unipile chat by ID. */
    "unipile.get_chat": {
      input: {
        /**
         * The Unipile or provider chat ID to retrieve.
         * @minLength 1
         * @pattern \S
         */
        chatId: string;
        /**
         * The Unipile account ID, required when chatId is a provider ID.
         * @minLength 1
         * @pattern \S
         */
        accountId?: string;
      };
      output: {
        /** A normalized Unipile chat. */
        chat: {
          /** The Unipile chat identifier. */
          id: string;
          /** The Unipile account identifier associated with the chat. */
          accountId: string | null;
          /** The messaging provider type associated with the chat. */
          accountType: string | null;
          /** The upstream provider chat identifier when returned. */
          providerId: string | null;
          /** The chat display name when returned. */
          name: string | null;
          /** The unread message count when returned. */
          unreadCount: number | null;
          /** The latest chat timestamp when returned. */
          timestamp: string | null;
          /** The raw object returned by Unipile. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve a Unipile message by ID. */
    "unipile.get_message": {
      input: {
        /**
         * The Unipile message ID to retrieve.
         * @minLength 1
         * @pattern \S
         */
        messageId: string;
      };
      output: {
        /** A normalized Unipile message. */
        message: {
          /** The Unipile message identifier. */
          id: string;
          /** The upstream provider message identifier when returned. */
          providerId: string | null;
          /** The chat identifier associated with the message when returned. */
          chatId: string | null;
          /** The sender identifier when returned. */
          senderId: string | null;
          /** The message text when returned. */
          text: string | null;
          /** The message timestamp when returned. */
          timestamp: string | null;
          /** The message attachment metadata returned by Unipile. */
          attachments: Array<Record<string, unknown>>;
          /** The raw object returned by Unipile. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List accounts connected to Unipile. */
    "unipile.list_accounts": {
      input: {
        /**
         * A Unipile pagination cursor from a previous list response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The maximum number of items to return, from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
      };
      output: {
        /** Unipile pagination metadata. */
        pageInfo: {
          /** The Unipile list object type when returned. */
          object: string | null;
          /** The cursor for the next page when available. */
          cursor: string | null;
        };
        /** The accounts returned by Unipile. */
        accounts: Array<{
          /** The Unipile account identifier. */
          id: string;
          /** The Unipile account type when returned. */
          type: string | null;
          /** The account display name when returned. */
          name: string | null;
          /** The account status when returned. */
          status: string | null;
          /** The account creation timestamp when returned. */
          createdAt: string | null;
          /** The raw object returned by Unipile. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Unipile. */
        raw: Record<string, unknown>;
      };
    };
    /** List messages from a Unipile chat. */
    "unipile.list_chat_messages": {
      input: {
        /**
         * The Unipile chat ID whose messages should be listed.
         * @minLength 1
         * @pattern \S
         */
        chatId: string;
        /**
         * A Unipile pagination cursor from a previous list response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * An ISO 8601 UTC datetime filter such as 2025-12-31T23:59:59.999Z.
         * @minLength 1
         * @pattern \S
         */
        before?: string;
        /**
         * An ISO 8601 UTC datetime filter such as 2025-12-31T23:59:59.999Z.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
        /**
         * The maximum number of items to return, from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Only return messages from this sender ID.
         * @minLength 1
         * @pattern \S
         */
        senderId?: string;
      };
      output: {
        /** Unipile pagination metadata. */
        pageInfo: {
          /** The Unipile list object type when returned. */
          object: string | null;
          /** The cursor for the next page when available. */
          cursor: string | null;
        };
        /** The messages returned by Unipile. */
        messages: Array<{
          /** The Unipile message identifier. */
          id: string;
          /** The upstream provider message identifier when returned. */
          providerId: string | null;
          /** The chat identifier associated with the message when returned. */
          chatId: string | null;
          /** The sender identifier when returned. */
          senderId: string | null;
          /** The message text when returned. */
          text: string | null;
          /** The message timestamp when returned. */
          timestamp: string | null;
          /** The message attachment metadata returned by Unipile. */
          attachments: Array<Record<string, unknown>>;
          /** The raw object returned by Unipile. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Unipile. */
        raw: Record<string, unknown>;
      };
    };
    /** List Unipile messaging chats with optional filters. */
    "unipile.list_chats": {
      input: {
        /** Whether to return only unread or only read chats. */
        unread?: boolean;
        /**
         * A Unipile pagination cursor from a previous list response.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * An ISO 8601 UTC datetime filter such as 2025-12-31T23:59:59.999Z.
         * @minLength 1
         * @pattern \S
         */
        before?: string;
        /**
         * An ISO 8601 UTC datetime filter such as 2025-12-31T23:59:59.999Z.
         * @minLength 1
         * @pattern \S
         */
        after?: string;
        /**
         * The maximum number of items to return, from 1 to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /** The connected messaging provider type to filter by. */
        accountType?: "WHATSAPP" | "LINKEDIN" | "SLACK" | "TWITTER" | "MESSENGER" | "INSTAGRAM" | "TELEGRAM";
        /**
         * A Unipile account ID or comma-separated account IDs.
         * @minLength 1
         * @pattern \S
         */
        accountId?: string;
      };
      output: {
        /** Unipile pagination metadata. */
        pageInfo: {
          /** The Unipile list object type when returned. */
          object: string | null;
          /** The cursor for the next page when available. */
          cursor: string | null;
        };
        /** The chats returned by Unipile. */
        chats: Array<{
          /** The Unipile chat identifier. */
          id: string;
          /** The Unipile account identifier associated with the chat. */
          accountId: string | null;
          /** The messaging provider type associated with the chat. */
          accountType: string | null;
          /** The upstream provider chat identifier when returned. */
          providerId: string | null;
          /** The chat display name when returned. */
          name: string | null;
          /** The unread message count when returned. */
          unreadCount: number | null;
          /** The latest chat timestamp when returned. */
          timestamp: string | null;
          /** The raw object returned by Unipile. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Unipile. */
        raw: Record<string, unknown>;
      };
    };
  }
}
