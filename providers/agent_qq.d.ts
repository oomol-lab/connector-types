import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Move an AgentMail message to trash and automatically complete the provider confirmation flow. */
    "agent_qq.delete_message": {
      input: {
        /**
         * The alias identifier that owns the message.
         * @minLength 1
         */
        alias_id: string;
        /**
         * The message identifier.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /** Whether the request succeeded. */
        ok: boolean;
        /** Whether the message was moved to trash. */
        deleted: true;
        [key: string]: unknown;
      };
    };
    /** List the current AgentMail (QQ) user's aliases and account limits. */
    "agent_qq.list_aliases": {
      input: Record<string, never>;
      output: {
        /** Whether the request succeeded. */
        ok: boolean;
        /** The alias list and account information. */
        data: {
          /** The aliases available to the current account. */
          aliases: Array<{
            /**
             * The alias identifier.
             * @minLength 1
             */
            alias_id: string;
            /**
             * The alias email address.
             * @format email
             */
            email: string;
            /** Whether this is the primary alias. */
            is_primary?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List or search messages in an AgentMail alias mailbox. */
    "agent_qq.list_messages": {
      input: {
        /**
         * The alias identifier to use as the mailbox.
         * @minLength 1
         */
        alias_id: string;
        /** A full-text query. When provided, the search endpoint is used. */
        q?: string;
        /** The mailbox folder. */
        dir?: "inbox" | "sent" | "trash" | "spam";
        /**
         * The maximum number of messages to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /** A pagination cursor from a previous response. */
        cursor?: string;
        /**
         * Only return messages created before this time.
         * @format date-time
         */
        before?: string;
        /**
         * Only return messages created after this time.
         * @format date-time
         */
        after?: string;
        /** Only return messages with this read state. */
        is_read?: boolean;
        /** Only return unread messages. This is translated to is_read=false. */
        is_unread?: boolean;
        /** Only return messages that have attachments when true. */
        has_attachments?: boolean;
      };
      output: {
        /** Whether the request succeeded. */
        ok: boolean;
        /** The message list result. */
        data: {
          /** The messages returned for this page. */
          data: Array<{
            /**
             * The message identifier.
             * @minLength 1
             */
            message_id: string;
            /** The message subject. */
            subject: string;
            /** A short preview of the message body. */
            snippet: string;
            /** Whether the message has been read. */
            is_read: boolean;
            /**
             * The message creation time.
             * @format date-time
             */
            created_at: string;
            /** An email recipient. */
            from: {
              /**
               * The recipient email address.
               * @format email
               */
              email: string;
              /** The recipient display name. */
              name?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Pagination information for a message list. */
          pagination?: {
            /** Whether more results exist. */
            has_more: boolean;
            /** The cursor for the next page. */
            next_cursor?: string;
            /** The cursor for the previous page. */
            previous_cursor?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read one AgentMail message including its body and attachment metadata. */
    "agent_qq.read_message": {
      input: {
        /**
         * The alias identifier that owns the message.
         * @minLength 1
         */
        alias_id: string;
        /**
         * The message identifier.
         * @minLength 1
         */
        message_id: string;
      };
      output: {
        /** Whether the request succeeded. */
        ok: boolean;
        /** The full message returned by AgentMail. */
        data: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Send an AgentMail message and automatically complete the provider confirmation flow when required. */
    "agent_qq.send_message": {
      input: {
        /**
         * The alias identifier to send from.
         * @minLength 1
         */
        alias_id: string;
        /**
         * The primary recipient email addresses.
         * @minItems 1
         */
        to: Array<string>;
        /** The CC recipient email addresses. */
        cc?: Array<string>;
        /** The BCC recipient email addresses. */
        bcc?: Array<string>;
        /**
         * The message subject.
         * @minLength 1
         */
        subject: string;
        /**
         * The message body.
         * @minLength 1
         */
        body: string;
        /** The message body format. */
        body_format?: "auto" | "plain" | "html";
        /** A confirmation token obtained from an earlier send request. */
        confirmation_token?: string;
      };
      output: {
        /** Whether the request succeeded. */
        ok: boolean;
        [key: string]: unknown;
      };
    };
  }
}
