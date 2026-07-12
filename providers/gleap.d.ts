import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Gleap contact session in the connected project. */
    "gleap.create_contact": {
      input: {
        /**
         * External user ID for the contact.
         * @minLength 1
         */
        userId?: string;
        /**
         * Contact email address.
         * @format email
         */
        email?: string;
        /**
         * Contact display name.
         * @minLength 1
         */
        name?: string;
        /**
         * Contact phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * Contact avatar URL.
         * @format uri
         */
        avatar?: string;
        /**
         * Company ID associated with the contact.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Company name associated with the contact.
         * @minLength 1
         */
        companyName?: string;
        /**
         * Plan name associated with the contact.
         * @minLength 1
         */
        plan?: string;
        /** Numeric customer value associated with the contact. */
        value?: number;
        /**
         * Tags associated with the Gleap resource.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Whether the contact is blocked. */
        blocked?: boolean;
        /** Whether the contact is unsubscribed. */
        unsubscribed?: boolean;
        /** Custom data object accepted by Gleap. */
        customData?: Record<string, unknown>;
        /** Custom data object accepted by Gleap. */
        eventData?: Record<string, unknown>;
      };
      output: {
        /** Gleap contact session returned by the API. */
        contact: {
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap session ID. */
          id?: string;
          /** External user ID associated with the contact. */
          userId?: string;
          /** Contact email address. */
          email?: string;
          /** Contact display name. */
          name?: string;
          /** Contact phone number. */
          phone?: string;
          /** Contact avatar URL. */
          avatar?: string;
          /** Company ID associated with the contact. */
          companyId?: string;
          /** Company name associated with the contact. */
          companyName?: string;
          /** Custom data object accepted by Gleap. */
          customData?: Record<string, unknown>;
          /** Tags associated with the Gleap resource. */
          tags?: Array<string>;
          /** Whether the contact is blocked. */
          blocked?: boolean;
          /** Whether the contact is unsubscribed. */
          unsubscribed?: boolean;
          /** Timestamp when the contact was created. */
          createdAt?: string;
          /** Timestamp when the contact was last updated. */
          updatedAt?: string;
          /** Timestamp of the contact's latest activity. */
          lastActivity?: string;
          [key: string]: unknown;
        };
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** Create a Gleap ticket with native ticket fields. */
    "gleap.create_ticket": {
      input: {
        /**
         * Ticket title.
         * @minLength 1
         */
        title: string;
        /**
         * Ticket type accepted by Gleap.
         * @minLength 1
         */
        type?: string;
        /**
         * Ticket status accepted by Gleap.
         * @minLength 1
         */
        status?: string;
        /** Ticket priority accepted by Gleap. */
        priority?: "LOW" | "MEDIUM" | "HIGH";
        /**
         * Ticket description.
         * @minLength 1
         */
        description?: string;
        /**
         * Plain text ticket content.
         * @minLength 1
         */
        plainContent?: string;
        /**
         * Gleap session ID linked to the ticket.
         * @minLength 1
         */
        session?: string;
        /**
         * Gleap user ID assigned to the ticket.
         * @minLength 1
         */
        processingUser?: string;
        /**
         * Gleap team ID assigned to the ticket.
         * @minLength 1
         */
        processingTeam?: string;
        /**
         * Tags associated with the Gleap resource.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Form data object accepted by Gleap. */
        formData?: Record<string, unknown>;
        /** Custom data object accepted by Gleap. */
        customData?: Record<string, unknown>;
        /** Ticket attributes object accepted by Gleap. */
        attributes?: Record<string, unknown>;
        /**
         * Ticket attachments accepted by Gleap.
         * @minItems 1
         */
        attachments?: Array<{
          /**
           * Attachment display name.
           * @minLength 1
           */
          name: string;
          /**
           * Publicly reachable attachment URL for Gleap to reference.
           * @format uri
           */
          url: string;
          /**
           * Attachment MIME type or type label.
           * @minLength 1
           */
          type?: string;
        }>;
        /** Whether the ticket is archived. */
        archived?: boolean;
        /** Whether the ticket is marked as spam. */
        isSpam?: boolean;
        /** Whether Gleap should prevent automatic replies. */
        preventAutoReply?: boolean;
      };
      output: {
        /** Gleap ticket returned by the API. */
        ticket: {
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap ticket ID. */
          id?: string;
          /** Ticket title. */
          title?: string;
          /** Ticket type. */
          type?: string;
          /** Ticket status. */
          status?: string;
          /** Ticket priority. */
          priority?: string;
          /** Ticket description. */
          description?: string;
          /** Form data object accepted by Gleap. */
          formData?: Record<string, unknown>;
          /** Custom data object accepted by Gleap. */
          customData?: Record<string, unknown>;
          /** Contact session linked to the ticket. */
          session?: unknown;
          /** Gleap user assigned to the ticket. */
          processingUser?: unknown;
          /** Gleap team assigned to the ticket. */
          processingTeam?: unknown;
          /** Tags associated with the Gleap resource. */
          tags?: Array<string>;
          /** Whether the ticket is archived. */
          archived?: boolean;
          /** Whether the ticket is marked as spam. */
          isSpam?: boolean;
          /** Timestamp when the ticket was created. */
          createdAt?: string;
          /** Timestamp when the ticket was last updated. */
          updatedAt?: string;
          /** Latest ticket comment payload returned by Gleap. */
          latestComment?: unknown;
          [key: string]: unknown;
        };
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** Create a Gleap ticket with an optional initial message. */
    "gleap.create_ticket_with_message": {
      input: {
        /**
         * Ticket type accepted by Gleap.
         * @minLength 1
         */
        type: string;
        /**
         * Ticket title.
         * @minLength 1
         */
        title: string;
        /**
         * Initial ticket message.
         * @minLength 1
         */
        message?: string;
        /**
         * Ticket priority accepted by Gleap.
         * @minLength 1
         */
        priority?: string;
        /**
         * Ticket status accepted by Gleap.
         * @minLength 1
         */
        status?: string;
        /**
         * Gleap user ID assigned to the ticket.
         * @minLength 1
         */
        processingUser?: string;
        /**
         * Gleap team ID assigned to the ticket.
         * @minLength 1
         */
        processingTeam?: string;
        /**
         * Tags associated with the Gleap resource.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Gleap session ID linked to the ticket.
         * @minLength 1
         */
        session?: string;
        /**
         * Email address used when composing the ticket.
         * @format email
         */
        email?: string;
        /** Form data object accepted by Gleap. */
        formData?: Record<string, unknown>;
        /** Whether Gleap should prevent automatic replies. */
        preventAutoReply?: boolean;
      };
      output: {
        /** Gleap ticket returned by the API. */
        ticket: {
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap ticket ID. */
          id?: string;
          /** Ticket title. */
          title?: string;
          /** Ticket type. */
          type?: string;
          /** Ticket status. */
          status?: string;
          /** Ticket priority. */
          priority?: string;
          /** Ticket description. */
          description?: string;
          /** Form data object accepted by Gleap. */
          formData?: Record<string, unknown>;
          /** Custom data object accepted by Gleap. */
          customData?: Record<string, unknown>;
          /** Contact session linked to the ticket. */
          session?: unknown;
          /** Gleap user assigned to the ticket. */
          processingUser?: unknown;
          /** Gleap team assigned to the ticket. */
          processingTeam?: unknown;
          /** Tags associated with the Gleap resource. */
          tags?: Array<string>;
          /** Whether the ticket is archived. */
          archived?: boolean;
          /** Whether the ticket is marked as spam. */
          isSpam?: boolean;
          /** Timestamp when the ticket was created. */
          createdAt?: string;
          /** Timestamp when the ticket was last updated. */
          updatedAt?: string;
          /** Latest ticket comment payload returned by Gleap. */
          latestComment?: unknown;
          [key: string]: unknown;
        };
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** Delete a Gleap ticket by ID. */
    "gleap.delete_ticket": {
      input: {
        /**
         * Gleap ticket ID.
         * @minLength 1
         */
        ticketId: string;
      };
      output: {
        /** Whether the ticket deletion request completed successfully. */
        deleted: boolean;
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** Get a Gleap contact session by external user ID. */
    "gleap.get_contact_by_user_id": {
      input: {
        /**
         * External user ID associated with the contact.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Gleap contact session returned by the API. */
        contact: {
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap session ID. */
          id?: string;
          /** External user ID associated with the contact. */
          userId?: string;
          /** Contact email address. */
          email?: string;
          /** Contact display name. */
          name?: string;
          /** Contact phone number. */
          phone?: string;
          /** Contact avatar URL. */
          avatar?: string;
          /** Company ID associated with the contact. */
          companyId?: string;
          /** Company name associated with the contact. */
          companyName?: string;
          /** Custom data object accepted by Gleap. */
          customData?: Record<string, unknown>;
          /** Tags associated with the Gleap resource. */
          tags?: Array<string>;
          /** Whether the contact is blocked. */
          blocked?: boolean;
          /** Whether the contact is unsubscribed. */
          unsubscribed?: boolean;
          /** Timestamp when the contact was created. */
          createdAt?: string;
          /** Timestamp when the contact was last updated. */
          updatedAt?: string;
          /** Timestamp of the contact's latest activity. */
          lastActivity?: string;
          [key: string]: unknown;
        };
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** Get the current Gleap user for the connected API key. */
    "gleap.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Current Gleap user returned by the API. */
        user: {
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap user ID. */
          id?: string;
          /** Gleap user email address. */
          email?: string;
          /** Gleap user first name. */
          firstName?: string;
          /** Gleap user last name. */
          lastName?: string;
          /** Gleap user type. */
          userType?: string;
          /** Gleap user profile image URL. */
          profileImageUrl?: string;
          /** Timestamp when the user was created. */
          createdAt?: string;
          /** Timestamp when the user was last updated. */
          updatedAt?: string;
          [key: string]: unknown;
        };
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** Get a Gleap ticket by ID. */
    "gleap.get_ticket": {
      input: {
        /**
         * Gleap ticket ID.
         * @minLength 1
         */
        ticketId: string;
      };
      output: {
        /** Gleap ticket returned by the API. */
        ticket: {
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap ticket ID. */
          id?: string;
          /** Ticket title. */
          title?: string;
          /** Ticket type. */
          type?: string;
          /** Ticket status. */
          status?: string;
          /** Ticket priority. */
          priority?: string;
          /** Ticket description. */
          description?: string;
          /** Form data object accepted by Gleap. */
          formData?: Record<string, unknown>;
          /** Custom data object accepted by Gleap. */
          customData?: Record<string, unknown>;
          /** Contact session linked to the ticket. */
          session?: unknown;
          /** Gleap user assigned to the ticket. */
          processingUser?: unknown;
          /** Gleap team assigned to the ticket. */
          processingTeam?: unknown;
          /** Tags associated with the Gleap resource. */
          tags?: Array<string>;
          /** Whether the ticket is archived. */
          archived?: boolean;
          /** Whether the ticket is marked as spam. */
          isSpam?: boolean;
          /** Timestamp when the ticket was created. */
          createdAt?: string;
          /** Timestamp when the ticket was last updated. */
          updatedAt?: string;
          /** Latest ticket comment payload returned by Gleap. */
          latestComment?: unknown;
          [key: string]: unknown;
        };
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** List Gleap contact sessions for the connected project. */
    "gleap.list_contacts": {
      input: Record<string, never>;
      output: {
        /** Contact sessions returned by Gleap. */
        contacts: Array<{
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap session ID. */
          id?: string;
          /** External user ID associated with the contact. */
          userId?: string;
          /** Contact email address. */
          email?: string;
          /** Contact display name. */
          name?: string;
          /** Contact phone number. */
          phone?: string;
          /** Contact avatar URL. */
          avatar?: string;
          /** Company ID associated with the contact. */
          companyId?: string;
          /** Company name associated with the contact. */
          companyName?: string;
          /** Custom data object accepted by Gleap. */
          customData?: Record<string, unknown>;
          /** Tags associated with the Gleap resource. */
          tags?: Array<string>;
          /** Whether the contact is blocked. */
          blocked?: boolean;
          /** Whether the contact is unsubscribed. */
          unsubscribed?: boolean;
          /** Timestamp when the contact was created. */
          createdAt?: string;
          /** Timestamp when the contact was last updated. */
          updatedAt?: string;
          /** Timestamp of the contact's latest activity. */
          lastActivity?: string;
          [key: string]: unknown;
        }>;
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** List Gleap tickets with documented filters, sorting, and pagination. */
    "gleap.list_tickets": {
      input: {
        /**
         * Ticket type filter, such as BUG or comma-separated types.
         * @minLength 1
         */
        type?: string;
        /**
         * Ticket status filter, such as OPEN.
         * @minLength 1
         */
        status?: string;
        /**
         * Ticket priority filter, such as HIGH or comma-separated priorities.
         * @minLength 1
         */
        priority?: string;
        /** Whether to include only archived or non-archived tickets. */
        archived?: boolean;
        /** Whether Gleap should ignore archived tickets. */
        ignoreArchived?: boolean;
        /** Whether to include only spam or non-spam tickets. */
        isSpam?: boolean;
        /** Sort order accepted by Gleap. */
        sort?: "createdAt" | "-createdAt" | "priority" | "-priority" | "-updatedAt";
        /**
         * Maximum number of tickets to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of tickets to skip for offset pagination.
         * @minimum 0
         */
        skip?: number;
        /** Additional Gleap document filters forwarded as query parameters. */
        filters?: Record<string, string | number | boolean>;
      };
      output: {
        /** Tickets returned by Gleap. */
        tickets: Array<{
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap ticket ID. */
          id?: string;
          /** Ticket title. */
          title?: string;
          /** Ticket type. */
          type?: string;
          /** Ticket status. */
          status?: string;
          /** Ticket priority. */
          priority?: string;
          /** Ticket description. */
          description?: string;
          /** Form data object accepted by Gleap. */
          formData?: Record<string, unknown>;
          /** Custom data object accepted by Gleap. */
          customData?: Record<string, unknown>;
          /** Contact session linked to the ticket. */
          session?: unknown;
          /** Gleap user assigned to the ticket. */
          processingUser?: unknown;
          /** Gleap team assigned to the ticket. */
          processingTeam?: unknown;
          /** Tags associated with the Gleap resource. */
          tags?: Array<string>;
          /** Whether the ticket is archived. */
          archived?: boolean;
          /** Whether the ticket is marked as spam. */
          isSpam?: boolean;
          /** Timestamp when the ticket was created. */
          createdAt?: string;
          /** Timestamp when the ticket was last updated. */
          updatedAt?: string;
          /** Latest ticket comment payload returned by Gleap. */
          latestComment?: unknown;
          [key: string]: unknown;
        }>;
        /** Number of tickets returned in this response. */
        count: number | null;
        /** Total matching ticket count returned by Gleap. */
        totalCount: number | null;
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** Update a Gleap contact session by session ID. */
    "gleap.update_contact": {
      input: {
        /**
         * Gleap session ID to update.
         * @minLength 1
         */
        sessionId: string;
        /**
         * Updated external user ID.
         * @minLength 1
         */
        userId?: string;
        /**
         * Updated contact email address.
         * @format email
         */
        email?: string;
        /**
         * Updated contact display name.
         * @minLength 1
         */
        name?: string;
        /**
         * Updated contact phone number.
         * @minLength 1
         */
        phone?: string;
        /**
         * Updated contact avatar URL.
         * @format uri
         */
        avatar?: string;
        /**
         * Updated company ID.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Updated company name.
         * @minLength 1
         */
        companyName?: string;
        /**
         * Updated plan name.
         * @minLength 1
         */
        plan?: string;
        /** Updated numeric customer value. */
        value?: number;
        /**
         * Tags associated with the Gleap resource.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Updated blocked state. */
        blocked?: boolean;
        /** Updated unsubscribe state. */
        unsubscribed?: boolean;
        /** Custom data object accepted by Gleap. */
        customData?: Record<string, unknown>;
        /** Custom data object accepted by Gleap. */
        eventData?: Record<string, unknown>;
      };
      output: {
        /** Gleap contact session returned by the API. */
        contact: {
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap session ID. */
          id?: string;
          /** External user ID associated with the contact. */
          userId?: string;
          /** Contact email address. */
          email?: string;
          /** Contact display name. */
          name?: string;
          /** Contact phone number. */
          phone?: string;
          /** Contact avatar URL. */
          avatar?: string;
          /** Company ID associated with the contact. */
          companyId?: string;
          /** Company name associated with the contact. */
          companyName?: string;
          /** Custom data object accepted by Gleap. */
          customData?: Record<string, unknown>;
          /** Tags associated with the Gleap resource. */
          tags?: Array<string>;
          /** Whether the contact is blocked. */
          blocked?: boolean;
          /** Whether the contact is unsubscribed. */
          unsubscribed?: boolean;
          /** Timestamp when the contact was created. */
          createdAt?: string;
          /** Timestamp when the contact was last updated. */
          updatedAt?: string;
          /** Timestamp of the contact's latest activity. */
          lastActivity?: string;
          [key: string]: unknown;
        };
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
    /** Update a Gleap ticket by ID. */
    "gleap.update_ticket": {
      input: {
        /**
         * Gleap ticket ID to update.
         * @minLength 1
         */
        ticketId: string;
        /**
         * Ticket title.
         * @minLength 1
         */
        title?: string;
        /**
         * Ticket type accepted by Gleap.
         * @minLength 1
         */
        type?: string;
        /**
         * Ticket status accepted by Gleap.
         * @minLength 1
         */
        status?: string;
        /** Ticket priority accepted by Gleap. */
        priority?: "LOW" | "MEDIUM" | "HIGH";
        /**
         * Ticket description.
         * @minLength 1
         */
        description?: string;
        /**
         * Plain text ticket content.
         * @minLength 1
         */
        plainContent?: string;
        /**
         * Gleap session ID linked to the ticket.
         * @minLength 1
         */
        session?: string;
        /**
         * Gleap user ID assigned to the ticket.
         * @minLength 1
         */
        processingUser?: string;
        /**
         * Gleap team ID assigned to the ticket.
         * @minLength 1
         */
        processingTeam?: string;
        /**
         * Tags associated with the Gleap resource.
         * @minItems 1
         */
        tags?: Array<string>;
        /** Form data object accepted by Gleap. */
        formData?: Record<string, unknown>;
        /** Custom data object accepted by Gleap. */
        customData?: Record<string, unknown>;
        /** Ticket attributes object accepted by Gleap. */
        attributes?: Record<string, unknown>;
        /**
         * Ticket attachments accepted by Gleap.
         * @minItems 1
         */
        attachments?: Array<{
          /**
           * Attachment display name.
           * @minLength 1
           */
          name: string;
          /**
           * Publicly reachable attachment URL for Gleap to reference.
           * @format uri
           */
          url: string;
          /**
           * Attachment MIME type or type label.
           * @minLength 1
           */
          type?: string;
        }>;
        /** Whether the ticket is archived. */
        archived?: boolean;
        /** Whether the ticket is marked as spam. */
        isSpam?: boolean;
        /** Whether Gleap should prevent automatic replies. */
        preventAutoReply?: boolean;
        /** Whether Gleap should force close behavior overrides. */
        forceCloseOverride?: boolean;
      };
      output: {
        /** Gleap ticket returned by the API. */
        ticket: {
          /** Gleap document ID as a string or ObjectId-like object. */
          _id?: string | Record<string, unknown>;
          /** Gleap ticket ID. */
          id?: string;
          /** Ticket title. */
          title?: string;
          /** Ticket type. */
          type?: string;
          /** Ticket status. */
          status?: string;
          /** Ticket priority. */
          priority?: string;
          /** Ticket description. */
          description?: string;
          /** Form data object accepted by Gleap. */
          formData?: Record<string, unknown>;
          /** Custom data object accepted by Gleap. */
          customData?: Record<string, unknown>;
          /** Contact session linked to the ticket. */
          session?: unknown;
          /** Gleap user assigned to the ticket. */
          processingUser?: unknown;
          /** Gleap team assigned to the ticket. */
          processingTeam?: unknown;
          /** Tags associated with the Gleap resource. */
          tags?: Array<string>;
          /** Whether the ticket is archived. */
          archived?: boolean;
          /** Whether the ticket is marked as spam. */
          isSpam?: boolean;
          /** Timestamp when the ticket was created. */
          createdAt?: string;
          /** Timestamp when the ticket was last updated. */
          updatedAt?: string;
          /** Latest ticket comment payload returned by Gleap. */
          latestComment?: unknown;
          [key: string]: unknown;
        };
        /** Raw payload returned by the official Gleap API. */
        raw: unknown;
      };
    };
  }
}
