import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one or more Avochato contacts by their identifiers. */
    "avochato.get_contacts": {
      input: {
        /**
         * One or more Avochato contact identifiers.
         * @minItems 1
         */
        ids: Array<string>;
        /**
         * Page number to request.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Matching contacts. */
        contacts: Array<{
          /** Unique Avochato contact identifier. */
          id?: string;
          /** Contact name. */
          name?: string | null;
          /** Contact phone number. */
          phone?: string;
          /** Contact email address. */
          email?: string | null;
          /** Contact company name. */
          company?: string | null;
          /** Unix timestamp when the contact was created. */
          created_at?: number;
          /** Tags assigned to the contact. */
          tags?: Array<string>;
          /** Whether the contact opted out of messaging. */
          opted_out?: boolean;
          [key: string]: unknown;
        }>;
        /** Current page number when returned by Avochato. */
        page: number | null;
      };
    };
    /** Retrieve the account and user associated with the configured Avochato API tokens. */
    "avochato.get_current_identity": {
      input: Record<string, never>;
      output: {
        /** The inbox account associated with the credentials. */
        account: Record<string, unknown>;
        /** The user associated with the credentials. */
        user: Record<string, unknown>;
        /** Credential origin reported by Avochato. */
        origin: string | null;
        /** Credential creation time reported by Avochato. */
        createdAt: string | null;
      };
    };
    /** Retrieve one Avochato message by its Event ID. */
    "avochato.get_message": {
      input: {
        /**
         * Message Event ID returned as event_id by Avochato.
         * @minLength 1
         */
        eventId: string;
      };
      output: {
        /** An Avochato message. */
        message: {
          /** Message UUID. */
          uuid?: string;
          /** Event identifier used by the get-message endpoint. */
          event_id?: string;
          /** Related contact identifier. */
          contact_id?: string | null;
          /** Message recipient. */
          to?: string;
          /** Message sender. */
          from?: string;
          /** Message direction. */
          direction?: string;
          /** Message text. */
          message?: string;
          /** Current delivery status. */
          status?: string;
          /** Unix timestamp when the message was created. */
          created_at?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List contacts in the Avochato inbox with cursor-style pagination. */
    "avochato.list_contacts": {
      input: {
        /**
         * Opaque nextPage value returned by a previous list_contacts call.
         * @minLength 1
         */
        afterPage?: string;
        /**
         * Number of contacts to return, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Contacts returned for this page. */
        contacts: Array<{
          /** Unique Avochato contact identifier. */
          id?: string;
          /** Contact name. */
          name?: string | null;
          /** Contact phone number. */
          phone?: string;
          /** Contact email address. */
          email?: string | null;
          /** Contact company name. */
          company?: string | null;
          /** Unix timestamp when the contact was created. */
          created_at?: number;
          /** Tags assigned to the contact. */
          tags?: Array<string>;
          /** Whether the contact opted out of messaging. */
          opted_out?: boolean;
          [key: string]: unknown;
        }>;
        /** Cursor for the next page when available. */
        nextPage: string | null;
        /** Number of contacts returned by Avochato. */
        size: number | null;
      };
    };
    /** List or search messages in the Avochato inbox. */
    "avochato.list_messages": {
      input: {
        /** Free-text message search query. */
        query?: string;
        /**
         * Page number to request.
         * @minimum 1
         */
        page?: number;
        /** Message direction to return. */
        direction?: "in" | "out";
        /** Delivery status to return. */
        status?: string;
        /** Sender phone number filter. */
        from?: string;
        /** Recipient phone number filter. */
        to?: string;
        /** Minimum message creation Unix timestamp. */
        createdFrom?: number;
        /** Maximum message creation Unix timestamp. */
        createdTo?: number;
      };
      output: {
        /** Messages returned for this page. */
        messages: Array<{
          /** Message UUID. */
          uuid?: string;
          /** Event identifier used by the get-message endpoint. */
          event_id?: string;
          /** Related contact identifier. */
          contact_id?: string | null;
          /** Message recipient. */
          to?: string;
          /** Message sender. */
          from?: string;
          /** Message direction. */
          direction?: string;
          /** Message text. */
          message?: string;
          /** Current delivery status. */
          status?: string;
          /** Unix timestamp when the message was created. */
          created_at?: number;
          [key: string]: unknown;
        }>;
        /** Current page number when returned by Avochato. */
        page: number | null;
      };
    };
    /** Send a text message to an Avochato contact phone number. */
    "avochato.send_message": {
      input: {
        /**
         * Recipient phone number.
         * @minLength 1
         */
        phone: string;
        /**
         * Text to send to the recipient.
         * @minLength 1
         */
        message: string;
        /** Avochato E.164 number to send from. */
        from?: string;
        /** Whether to mark the conversation as addressed. */
        markAddressed?: boolean;
        /** Comma-separated tags to apply to the contact. */
        tags?: string;
        /**
         * URL that receives delivery status updates.
         * @format uri
         */
        statusCallback?: string;
        /** Avochato user ID to send on behalf of. */
        sendAsUserId?: string;
        /** Avochato user email to send on behalf of. */
        sendAsUserEmail?: string;
      };
      output: {
        /** An Avochato message. */
        message: {
          /** Message UUID. */
          uuid?: string;
          /** Event identifier used by the get-message endpoint. */
          event_id?: string;
          /** Related contact identifier. */
          contact_id?: string | null;
          /** Message recipient. */
          to?: string;
          /** Message sender. */
          from?: string;
          /** Message direction. */
          direction?: string;
          /** Message text. */
          message?: string;
          /** Current delivery status. */
          status?: string;
          /** Unix timestamp when the message was created. */
          created_at?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Create or update an Avochato contact, matched by phone number. */
    "avochato.upsert_contact": {
      input: {
        /**
         * Contact phone number, preferably in E.164 format.
         * @minLength 1
         */
        phone: string;
        /** Contact name. */
        name?: string;
        /** Contact email address. */
        email?: string;
        /** Additional contact phone number. */
        otherPhone?: string;
        /** Contact company name. */
        company?: string;
        /** Contact street address. */
        street?: string;
        /** Contact city. */
        city?: string;
        /** Contact state or region. */
        state?: string;
        /** Contact postal code. */
        zip?: string;
        /** Contact country. */
        country?: string;
        /** Whether the contact has opted out of messaging. */
        optedOut?: boolean;
        /** Whether the contact has double opted in. */
        doubleOptedIn?: boolean;
        /** Whether calls and notifications from the contact are muted. */
        muted?: boolean;
        /** Whether calls and texts to and from the contact are blocked. */
        blocked?: boolean;
        /**
         * Contact priority from 0 through 5.
         * @minimum 0
         * @maximum 5
         */
        priority?: number;
        /** Whether the contact remains visible. */
        visible?: boolean;
        /** Whether the contact number is a landline. */
        landline?: boolean;
        /** Comma-separated tags to apply to the contact. */
        tags?: string;
        /** Responsible Avochato user ID or email address. */
        userId?: string;
        /** Avochato E.164 number to use for future outbound messages. */
        stuckNumber?: string;
        /** Whether empty or null custom fields may overwrite values. */
        allowEmptyFields?: boolean;
      };
      output: {
        /** An Avochato contact. */
        contact: {
          /** Unique Avochato contact identifier. */
          id?: string;
          /** Contact name. */
          name?: string | null;
          /** Contact phone number. */
          phone?: string;
          /** Contact email address. */
          email?: string | null;
          /** Contact company name. */
          company?: string | null;
          /** Unix timestamp when the contact was created. */
          created_at?: number;
          /** Tags assigned to the contact. */
          tags?: Array<string>;
          /** Whether the contact opted out of messaging. */
          opted_out?: boolean;
          [key: string]: unknown;
        };
      };
    };
  }
}
