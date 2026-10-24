import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete an agent message and return the deleted message. */
    "chatra.delete_message": {
      input: {
        /**
         * Resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Message ID. */
        id: string;
        /** Message author type: agent or client. */
        type?: string;
        /** Message text or attachment filename. */
        text?: string;
        /** Secret visitor ID. */
        clientId?: string;
        /** Agent ID. */
        agentId?: string;
        /** Creation timestamp in milliseconds. */
        createdAt?: number;
        /** Integration marker used to avoid webhook loops. */
        receivedFrom?: string;
        /** Whether this is an automated pushed message. */
        isPushed?: boolean;
        /** Attachment metadata returned by Chatra. */
        file?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete an automated pushed message and return the deleted message. */
    "chatra.delete_pushed_message": {
      input: {
        /**
         * Resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Message ID. */
        id: string;
        /** Message author type: agent or client. */
        type?: string;
        /** Message text or attachment filename. */
        text?: string;
        /** Secret visitor ID. */
        clientId?: string;
        /** Agent ID. */
        agentId?: string;
        /** Creation timestamp in milliseconds. */
        createdAt?: number;
        /** Integration marker used to avoid webhook loops. */
        receivedFrom?: string;
        /** Whether this is an automated pushed message. */
        isPushed?: boolean;
        /** Attachment metadata returned by Chatra. */
        file?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get visitor information by the secret visitor ID. */
    "chatra.get_client": {
      input: {
        /**
         * Secret visitor ID from a webhook or your bound user account.
         * @minLength 1
         */
        clientId: string;
      };
      output: {
        /** Secret visitor ID. */
        id: string;
        /** Chat ID. */
        chatId?: string;
        /** Chat URL in the Chatra dashboard. */
        chatLink?: string;
        /** Visitor display name. */
        displayedName?: string;
        /** Visitor information supplied by visitors or agents. */
        basicInfo?: Record<string, unknown>;
        /** Custom form field values. */
        customFormData?: Record<string, unknown>;
        /** Information supplied through the widget integration. */
        integrationData?: Record<string, unknown>;
        /** Combined visitor information, with visitor and agent edits taking precedence. */
        info?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get an existing message by ID. */
    "chatra.get_message": {
      input: {
        /**
         * Resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Message ID. */
        id: string;
        /** Message author type: agent or client. */
        type?: string;
        /** Message text or attachment filename. */
        text?: string;
        /** Secret visitor ID. */
        clientId?: string;
        /** Agent ID. */
        agentId?: string;
        /** Creation timestamp in milliseconds. */
        createdAt?: number;
        /** Integration marker used to avoid webhook loops. */
        receivedFrom?: string;
        /** Whether this is an automated pushed message. */
        isPushed?: boolean;
        /** Attachment metadata returned by Chatra. */
        file?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get an existing automated pushed message by ID. */
    "chatra.get_pushed_message": {
      input: {
        /**
         * Resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Message ID. */
        id: string;
        /** Message author type: agent or client. */
        type?: string;
        /** Message text or attachment filename. */
        text?: string;
        /** Secret visitor ID. */
        clientId?: string;
        /** Agent ID. */
        agentId?: string;
        /** Creation timestamp in milliseconds. */
        createdAt?: number;
        /** Integration marker used to avoid webhook loops. */
        receivedFrom?: string;
        /** Whether this is an automated pushed message. */
        isPushed?: boolean;
        /** Attachment metadata returned by Chatra. */
        file?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Send a message as an agent using an agent ID or an email identity. An unknown agent email creates a dummy agent. */
    "chatra.send_message": {
      input: Record<string, unknown>;
      output: {
        /** Message ID. */
        id: string;
        /** Message author type: agent or client. */
        type?: string;
        /** Message text or attachment filename. */
        text?: string;
        /** Secret visitor ID. */
        clientId?: string;
        /** Agent ID. */
        agentId?: string;
        /** Creation timestamp in milliseconds. */
        createdAt?: number;
        /** Integration marker used to avoid webhook loops. */
        receivedFrom?: string;
        /** Whether this is an automated pushed message. */
        isPushed?: boolean;
        /** Attachment metadata returned by Chatra. */
        file?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Send an automated message to a visitor as a random agent, a specific agent, or a random agent from a group. */
    "chatra.send_pushed_message": {
      input: {
        /**
         * Secret visitor ID from a webhook or your bound user account.
         * @minLength 1
         */
        clientId: string;
        /**
         * Message text.
         * @minLength 1
         */
        text: string;
        /**
         * Agent ID; omit to select a random agent.
         * @minLength 1
         */
        agentId?: string;
        /**
         * Group from which to select a random agent.
         * @minLength 1
         */
        groupId?: string;
      };
      output: {
        /** Message ID. */
        id: string;
        /** Message author type: agent or client. */
        type?: string;
        /** Message text or attachment filename. */
        text?: string;
        /** Secret visitor ID. */
        clientId?: string;
        /** Agent ID. */
        agentId?: string;
        /** Creation timestamp in milliseconds. */
        createdAt?: number;
        /** Integration marker used to avoid webhook loops. */
        receivedFrom?: string;
        /** Whether this is an automated pushed message. */
        isPushed?: boolean;
        /** Attachment metadata returned by Chatra. */
        file?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update basic visitor information. Omitted fields stay unchanged; null removes a field. */
    "chatra.update_client": {
      input: {
        /**
         * Secret visitor ID from a webhook or your bound user account.
         * @minLength 1
         */
        clientId: string;
        /** Visitor name; null removes it. */
        name?: string | null;
        /** Visitor email; null removes it. */
        email?: string | null;
        /** Visitor phone; null removes it. */
        phone?: string | null;
        /** Visitor notes; null removes them. */
        notes?: string | null;
      };
      output: {
        /** Secret visitor ID. */
        id: string;
        /** Chat ID. */
        chatId?: string;
        /** Chat URL in the Chatra dashboard. */
        chatLink?: string;
        /** Visitor display name. */
        displayedName?: string;
        /** Visitor information supplied by visitors or agents. */
        basicInfo?: Record<string, unknown>;
        /** Custom form field values. */
        customFormData?: Record<string, unknown>;
        /** Information supplied through the widget integration. */
        integrationData?: Record<string, unknown>;
        /** Combined visitor information, with visitor and agent edits taking precedence. */
        info?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Edit the text of an agent message. */
    "chatra.update_message": {
      input: {
        /**
         * Resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * Message text.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** Message ID. */
        id: string;
        /** Message author type: agent or client. */
        type?: string;
        /** Message text or attachment filename. */
        text?: string;
        /** Secret visitor ID. */
        clientId?: string;
        /** Agent ID. */
        agentId?: string;
        /** Creation timestamp in milliseconds. */
        createdAt?: number;
        /** Integration marker used to avoid webhook loops. */
        receivedFrom?: string;
        /** Whether this is an automated pushed message. */
        isPushed?: boolean;
        /** Attachment metadata returned by Chatra. */
        file?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Edit the text of an automated pushed message. */
    "chatra.update_pushed_message": {
      input: {
        /**
         * Resource ID.
         * @minLength 1
         */
        id: string;
        /**
         * Message text.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** Message ID. */
        id: string;
        /** Message author type: agent or client. */
        type?: string;
        /** Message text or attachment filename. */
        text?: string;
        /** Secret visitor ID. */
        clientId?: string;
        /** Agent ID. */
        agentId?: string;
        /** Creation timestamp in milliseconds. */
        createdAt?: number;
        /** Integration marker used to avoid webhook loops. */
        receivedFrom?: string;
        /** Whether this is an automated pushed message. */
        isPushed?: boolean;
        /** Attachment metadata returned by Chatra. */
        file?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
