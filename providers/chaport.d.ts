import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a specific chat for a visitor. */
    "chaport.get_chat": {
      input: {
        /**
         * Visitor ID.
         * @minLength 1
         */
        visitorId: string;
        /** Chat ID. */
        chatId: number;
        /** Return message events as a transcript. */
        transcript?: boolean;
        /** Filter returned events by type. Ignored when transcript is true. */
        eventTypes?: Array<string>;
      };
      output: {
        /** The requested record, including provider-defined fields. */
        result?: Record<string, unknown>;
        /** Related API links, including pagination or older chats. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a specific event in a visitor's chat. */
    "chaport.get_chat_event": {
      input: {
        /**
         * Visitor ID.
         * @minLength 1
         */
        visitorId: string;
        /** Chat ID. */
        chatId: number;
        /**
         * Chat event ID.
         * @minLength 1
         */
        eventId: string;
      };
      output: {
        /** The requested record, including provider-defined fields. */
        result?: Record<string, unknown>;
        /** Related API links, including pagination or older chats. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a visitor's current or most recent chat and links to older chats. */
    "chaport.get_latest_chat": {
      input: {
        /**
         * Visitor ID.
         * @minLength 1
         */
        visitorId: string;
        /** Return message events as a transcript. */
        transcript?: boolean;
        /** Filter returned events by type. Ignored when transcript is true. */
        eventTypes?: Array<string>;
      };
      output: {
        /** The requested record, including provider-defined fields. */
        result?: Record<string, unknown>;
        /** Related API links, including pagination or older chats. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve a visitor by ID. */
    "chaport.get_visitor": {
      input: {
        /**
         * Visitor ID.
         * @minLength 1
         */
        visitorId: string;
      };
      output: {
        /** The requested record, including provider-defined fields. */
        result?: Record<string, unknown>;
        /** Related API links, including pagination or older chats. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Retrieve all events for a visitor's chat. */
    "chaport.list_chat_events": {
      input: {
        /**
         * Visitor ID.
         * @minLength 1
         */
        visitorId: string;
        /** Chat ID. */
        chatId: number;
      };
      output: {
        /** The requested records. */
        result?: Array<Record<string, unknown>>;
        /** Related API links, including pagination or older chats. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List visitors ordered by their most recent chat, one page at a time. */
    "chaport.list_visitors": {
      input: {
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** The requested records. */
        result?: Array<Record<string, unknown>>;
        /** Related API links, including pagination or older chats. */
        links?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
