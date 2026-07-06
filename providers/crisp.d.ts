import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Crisp conversation by session ID. */
    "crisp.get_conversation": {
      input: {
        /**
         * The Crisp conversation session identifier.
         * @minLength 1
         */
        sessionId: string;
      };
      output: {
        /** A Crisp conversation with stable top-level fields and the raw upstream object. */
        conversation: {
          /** The Crisp conversation session identifier. */
          sessionId: string;
          /** The Crisp website identifier. */
          websiteId: string;
          /** The Crisp conversation state. */
          state?: string;
          /** The Crisp conversation status code. */
          status?: number;
          /** A string value returned by Crisp. */
          lastMessage?: string | null;
          /** A Crisp timestamp in milliseconds. */
          createdAt?: number;
          /** A Crisp timestamp in milliseconds. */
          updatedAt?: number;
          /** Unread message counters returned by Crisp. */
          unread?: {
            /** Unread messages visible to operators. */
            operator?: number;
            /** Unread messages visible to the visitor. */
            visitor?: number;
          };
          /** Visitor metadata normalized from a Crisp conversation. */
          visitor?: {
            /** A string value returned by Crisp. */
            nickname?: string | null;
            /** A string value returned by Crisp. */
            email?: string | null;
          };
          /** The raw Crisp conversation object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the Crisp website connected to the configured token. */
    "crisp.get_website": {
      input: Record<string, never>;
      output: {
        /** A Crisp website returned by the REST API. */
        website: {
          /** The Crisp website identifier. */
          websiteId: string;
          /** The Crisp website name. */
          name?: string;
          /** The Crisp website domain. */
          domain?: string;
          /** A string value returned by Crisp. */
          logo?: string | null;
          /** Whether the Crisp website is verified. */
          verified?: boolean;
          /** Whether the Crisp website is institutional. */
          institutional?: boolean;
          /** The raw Crisp website object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List messages in a Crisp conversation. */
    "crisp.list_conversation_messages": {
      input: {
        /**
         * The Crisp conversation session identifier.
         * @minLength 1
         */
        sessionId: string;
        /** A Crisp timestamp in milliseconds. */
        timestampBefore?: number;
        /** A Crisp timestamp in milliseconds. */
        timestampAfter?: number;
        /** A Crisp timestamp in milliseconds. */
        timestampAround?: number;
      };
      output: {
        /** The messages returned by Crisp. */
        messages: Array<{
          /** The Crisp conversation session identifier. */
          sessionId: string;
          /** The Crisp website identifier. */
          websiteId: string;
          /** The Crisp message type. */
          type?: string;
          /** The Crisp message sender side. */
          from?: string;
          /** The Crisp message origin. */
          origin?: string;
          /** The Crisp message content. */
          content?: unknown;
          /** The Crisp message fingerprint. */
          fingerprint?: number;
          /** A Crisp timestamp in milliseconds. */
          timestamp?: number;
          /** User metadata normalized from a Crisp message. */
          user?: {
            /** The Crisp user identifier attached to the message. */
            userId?: string;
            /** The user nickname attached to the message. */
            nickname?: string;
          };
          /** The raw Crisp message object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List conversations for the connected Crisp website. */
    "crisp.list_conversations": {
      input: {
        /**
         * The 1-based conversation page number to request from Crisp.
         * @exclusiveMinimum 0
         * @default 1
         */
        pageNumber?: number;
        /**
         * The number of conversations to request per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
        /**
         * Search text used by Crisp conversation search.
         * @minLength 1
         */
        searchQuery?: string;
        /** Whether Crisp should include empty conversations. */
        includeEmpty?: boolean;
        /** Whether Crisp should return only unread conversations. */
        filterUnread?: boolean;
        /** Whether Crisp should return only resolved conversations. */
        filterResolved?: boolean;
        /** Whether Crisp should return only unresolved conversations. */
        filterNotResolved?: boolean;
        /** Whether Crisp should return only assigned conversations. */
        filterAssigned?: boolean;
        /** Whether Crisp should return only unassigned conversations. */
        filterUnassigned?: boolean;
      };
      output: {
        /** The conversations returned by Crisp. */
        conversations: Array<{
          /** The Crisp conversation session identifier. */
          sessionId: string;
          /** The Crisp website identifier. */
          websiteId: string;
          /** The Crisp conversation state. */
          state?: string;
          /** The Crisp conversation status code. */
          status?: number;
          /** A string value returned by Crisp. */
          lastMessage?: string | null;
          /** A Crisp timestamp in milliseconds. */
          createdAt?: number;
          /** A Crisp timestamp in milliseconds. */
          updatedAt?: number;
          /** Unread message counters returned by Crisp. */
          unread?: {
            /** Unread messages visible to operators. */
            operator?: number;
            /** Unread messages visible to the visitor. */
            visitor?: number;
          };
          /** Visitor metadata normalized from a Crisp conversation. */
          visitor?: {
            /** A string value returned by Crisp. */
            nickname?: string | null;
            /** A string value returned by Crisp. */
            email?: string | null;
          };
          /** The raw Crisp conversation object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Send an operator text message to a Crisp conversation. */
    "crisp.send_text_message": {
      input: {
        /**
         * The Crisp conversation session identifier.
         * @minLength 1
         */
        sessionId: string;
        /**
         * The text content to send to the Crisp conversation.
         * @minLength 1
         */
        content: string;
        /**
         * The Crisp message origin to use for the text message.
         * @default "chat"
         */
        origin?: "chat" | "email";
      };
      output: {
        /** The Crisp response reason. */
        reason: string;
        /** The dispatched Crisp message fingerprint. */
        fingerprint?: number;
      };
    };
  }
}
