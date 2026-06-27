import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Mailosaur inbox server. */
    "mailosaur.create_server": {
      input: {
        /**
         * The name of the server.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Mailosaur server. */
        server: {
          /** The unique server identifier. */
          id?: string;
          /** The server display name. */
          name?: string;
          /** Users with access to the server. */
          users?: Array<Record<string, unknown>>;
          /**
           * The number of messages currently stored in the server.
           * @minimum 0
           */
          messages?: number;
          /** The raw object returned by Mailosaur. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete all Mailosaur messages stored in one server. */
    "mailosaur.delete_all_messages": {
      input: {
        /**
         * The identifier of the Mailosaur server.
         * @minLength 1
         */
        server: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /**
         * The identifier of the Mailosaur server.
         * @minLength 1
         */
        server: string;
      };
    };
    /** Delete one Mailosaur message and its attachments. */
    "mailosaur.delete_message": {
      input: {
        /**
         * The identifier of the Mailosaur message.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /**
         * The identifier of the Mailosaur message.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Delete one Mailosaur inbox server and its stored messages. */
    "mailosaur.delete_server": {
      input: {
        /**
         * The identifier of the Mailosaur server.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /**
         * The identifier of the Mailosaur server.
         * @minLength 1
         */
        id: string;
      };
    };
    /** Retrieve one Mailosaur message by ID, including parsed body content. */
    "mailosaur.get_message": {
      input: {
        /**
         * The identifier of the Mailosaur message.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Mailosaur message with parsed body content. */
        message: {
          /** The unique message identifier. */
          id?: string;
          /** The timestamp when Mailosaur received the message. */
          received?: string | null;
          /** The Mailosaur message type. */
          type?: string | null;
          /** The message subject line. */
          subject?: string | null;
          /** The message senders. */
          from?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The message recipients. */
          to?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The message CC recipients. */
          cc?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The message BCC recipients. */
          bcc?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** A parsed Mailosaur message body section. */
          html?: {
            /** The message body content. */
            body?: string | null;
            /** Links extracted from this body section. */
            links?: Array<{
              /** The link URL. */
              href?: string;
              /** The link text when Mailosaur returns one. */
              text?: string | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          } | null;
          /** A parsed Mailosaur message body section. */
          text?: {
            /** The message body content. */
            body?: string | null;
            /** Links extracted from this body section. */
            links?: Array<{
              /** The link URL. */
              href?: string;
              /** The link text when Mailosaur returns one. */
              text?: string | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          } | null;
          /** The message attachments. */
          attachments?: Array<{
            /** The attachment identifier. */
            id?: string;
            /** The attachment file name. */
            fileName?: string | null;
            /** The attachment content type. */
            contentType?: string | null;
            /** The attachment size in bytes when returned. */
            length?: number | null;
            [key: string]: unknown;
          }>;
          /** The server identifier that stores the message. */
          server?: string | null;
          /** The raw object returned by Mailosaur. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Mailosaur inbox server by ID. */
    "mailosaur.get_server": {
      input: {
        /**
         * The identifier of the Mailosaur server.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Mailosaur server. */
        server: {
          /** The unique server identifier. */
          id?: string;
          /** The server display name. */
          name?: string;
          /** Users with access to the server. */
          users?: Array<Record<string, unknown>>;
          /**
           * The number of messages currently stored in the server.
           * @minimum 0
           */
          messages?: number;
          /** The raw object returned by Mailosaur. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Mailosaur account usage limits. */
    "mailosaur.get_usage_limits": {
      input: Record<string, never>;
      output: {
        /** The account usage limits returned by Mailosaur. */
        limits: {
          /** A Mailosaur usage limit entry. */
          servers?: {
            /**
             * The current usage count.
             * @minimum 0
             */
            current?: number;
            /**
             * The account limit.
             * @minimum 0
             */
            limit?: number;
            [key: string]: unknown;
          };
          /** A Mailosaur usage limit entry. */
          users?: {
            /**
             * The current usage count.
             * @minimum 0
             */
            current?: number;
            /**
             * The account limit.
             * @minimum 0
             */
            limit?: number;
            [key: string]: unknown;
          };
          /** A Mailosaur usage limit entry. */
          email?: {
            /**
             * The current usage count.
             * @minimum 0
             */
            current?: number;
            /**
             * The account limit.
             * @minimum 0
             */
            limit?: number;
            [key: string]: unknown;
          };
          /** A Mailosaur usage limit entry. */
          sms?: {
            /**
             * The current usage count.
             * @minimum 0
             */
            current?: number;
            /**
             * The account limit.
             * @minimum 0
             */
            limit?: number;
            [key: string]: unknown;
          };
          /** A Mailosaur usage limit entry. */
          previews?: {
            /**
             * The current usage count.
             * @minimum 0
             */
            current?: number;
            /**
             * The account limit.
             * @minimum 0
             */
            limit?: number;
            [key: string]: unknown;
          };
          /** A Mailosaur usage limit entry. */
          numbers?: {
            /**
             * The current usage count.
             * @minimum 0
             */
            current?: number;
            /**
             * The account limit.
             * @minimum 0
             */
            limit?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List Mailosaur message summaries from one server. */
    "mailosaur.list_messages": {
      input: {
        /**
         * The identifier of the Mailosaur server.
         * @minLength 1
         */
        server: string;
        /**
         * Only return messages received after this timestamp.
         * @format date-time
         */
        receivedAfter?: string;
        /**
         * The page number used with itemsPerPage.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results per page, from 1 to 1000.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
        /** The message direction to return. */
        dir?: "Received" | "Sent";
      };
      output: {
        /** The messages returned by Mailosaur. */
        messages: Array<{
          /** The unique message identifier. */
          id?: string;
          /** The timestamp when Mailosaur received the message. */
          received?: string | null;
          /** The Mailosaur message type. */
          type?: string | null;
          /** The message subject line. */
          subject?: string | null;
          /** The message senders. */
          from?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The message recipients. */
          to?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The message CC recipients. */
          cc?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The message BCC recipients. */
          bcc?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The raw object returned by Mailosaur. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Mailosaur inbox servers in the current account. */
    "mailosaur.list_servers": {
      input: Record<string, never>;
      output: {
        /** The servers returned by Mailosaur. */
        servers: Array<{
          /** The unique server identifier. */
          id?: string;
          /** The server display name. */
          name?: string;
          /** Users with access to the server. */
          users?: Array<Record<string, unknown>>;
          /**
           * The number of messages currently stored in the server.
           * @minimum 0
           */
          messages?: number;
          /** The raw object returned by Mailosaur. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the last 31 days of Mailosaur usage transactions. */
    "mailosaur.list_usage_transactions": {
      input: Record<string, never>;
      output: {
        /** The usage transactions returned by Mailosaur. */
        transactions: Array<{
          /** The transaction timestamp. */
          timestamp?: string;
          /**
           * The email usage count for this transaction.
           * @minimum 0
           */
          email?: number;
          /**
           * The SMS usage count for this transaction.
           * @minimum 0
           */
          sms?: number;
          /**
           * The preview usage count for this transaction.
           * @minimum 0
           */
          previews?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Mailosaur message summaries in one server. */
    "mailosaur.search_messages": {
      input: {
        /**
         * The identifier of the Mailosaur server.
         * @minLength 1
         */
        server: string;
        /**
         * Only return messages received after this timestamp.
         * @format date-time
         */
        receivedAfter?: string;
        /**
         * The page number used with itemsPerPage.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results per page, from 1 to 1000.
         * @maximum 1000
         * @exclusiveMinimum 0
         */
        itemsPerPage?: number;
        /** The message direction to return. */
        dir?: "Received" | "Sent";
        /**
         * The full email address or phone number the message was sent from.
         * @minLength 1
         */
        sentFrom?: string;
        /**
         * The full email address or phone number the message was sent to.
         * @minLength 1
         */
        sentTo?: string;
        /**
         * Text to match against the message subject.
         * @minLength 1
         */
        subject?: string;
        /**
         * Text to match against the HTML or text body.
         * @minLength 1
         */
        body?: string;
        /** How Mailosaur should combine search criteria. */
        match?: "ALL" | "ANY";
      };
      output: {
        /** The messages returned by Mailosaur. */
        messages: Array<{
          /** The unique message identifier. */
          id?: string;
          /** The timestamp when Mailosaur received the message. */
          received?: string | null;
          /** The Mailosaur message type. */
          type?: string | null;
          /** The message subject line. */
          subject?: string | null;
          /** The message senders. */
          from?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The message recipients. */
          to?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The message CC recipients. */
          cc?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The message BCC recipients. */
          bcc?: Array<{
            /** The contact display name when Mailosaur returns one. */
            name?: string | null;
            /** The contact email address or phone number. */
            email?: string;
            [key: string]: unknown;
          }>;
          /** The raw object returned by Mailosaur. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the name of one Mailosaur inbox server. */
    "mailosaur.update_server": {
      input: {
        /**
         * The identifier of the Mailosaur server.
         * @minLength 1
         */
        id: string;
        /**
         * The updated server name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Mailosaur server. */
        server: {
          /** The unique server identifier. */
          id?: string;
          /** The server display name. */
          name?: string;
          /** Users with access to the server. */
          users?: Array<Record<string, unknown>>;
          /**
           * The number of messages currently stored in the server.
           * @minimum 0
           */
          messages?: number;
          /** The raw object returned by Mailosaur. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
