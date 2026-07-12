import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Close an Intercom conversation. */
    "intercom.close_conversation": {
      input: {
        /**
         * Intercom conversation identifier.
         * @minLength 1
         */
        conversationId: string;
        /**
         * Intercom admin identifier performing the close.
         * @minLength 1
         */
        adminId: string;
        /**
         * Optional closing message to append to the conversation.
         * @minLength 1
         */
        body?: string;
      };
      output: {
        /** Updated Intercom conversation. */
        conversation: Record<string, unknown>;
      };
    };
    /** Create a new Intercom contact. */
    "intercom.create_contact": {
      input: {
        /** Intercom contact role. */
        role?: "user" | "lead";
        /**
         * External identifier stored on the Intercom contact.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Primary email address for the Intercom contact.
         * @format email
         */
        email?: string;
        /**
         * Phone number for the Intercom contact.
         * @minLength 1
         */
        phone?: string | null;
        /**
         * Display name for the Intercom contact.
         * @minLength 1
         */
        name?: string | null;
        /**
         * Avatar image URL for the Intercom contact.
         * @format uri
         */
        avatar?: string | null;
        /**
         * UNIX timestamp when the contact signed up.
         * @minimum 0
         */
        signedUpAt?: number | null;
        /**
         * UNIX timestamp when the contact was last seen.
         * @minimum 0
         */
        lastSeenAt?: number | null;
        /** Intercom admin identifier. */
        ownerId?: string | number | null;
        /** Whether the contact is unsubscribed from emails. */
        unsubscribedFromEmails?: boolean | null;
        /** Intercom key-value object. */
        customAttributes?: Record<string, unknown> | null;
      };
      output: {
        /** Created or updated Intercom contact. */
        contact: Record<string, unknown>;
      };
    };
    /** Get a single Intercom admin by identifier. */
    "intercom.get_admin": {
      input: {
        /** Intercom admin identifier. */
        adminId: string | number;
      };
      output: {
        /** Requested Intercom admin. */
        admin: Record<string, unknown>;
      };
    };
    /** Get a single Intercom help center article by identifier. */
    "intercom.get_article": {
      input: {
        /** Intercom resource identifier. */
        articleId: string | number;
      };
      output: {
        /** Requested Intercom article. */
        article: Record<string, unknown>;
      };
    };
    /** Get a single Intercom company by company ID or name. */
    "intercom.get_company": {
      input: {
        /**
         * Company identifier defined by you in Intercom.
         * @minLength 1
         */
        companyId?: string;
        /**
         * Company name to look up in Intercom.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** Requested Intercom company. */
        company: Record<string, unknown>;
      };
    };
    /** Get a single Intercom contact by identifier. */
    "intercom.get_contact": {
      input: {
        /**
         * Intercom contact identifier.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** Requested Intercom contact. */
        contact: Record<string, unknown>;
      };
    };
    /** Get a single Intercom contact by external ID. */
    "intercom.get_contact_by_external_id": {
      input: {
        /**
         * External identifier stored on the Intercom contact.
         * @minLength 1
         */
        externalId: string;
      };
      output: {
        /** Requested Intercom contact. */
        contact: Record<string, unknown>;
      };
    };
    /** Get a single Intercom conversation with its conversation parts. */
    "intercom.get_conversation": {
      input: {
        /**
         * Intercom conversation identifier.
         * @minLength 1
         */
        conversationId: string;
        /** How Intercom should render conversation message bodies. */
        displayAs?: "plaintext" | "html";
      };
      output: {
        /** Requested Intercom conversation. */
        conversation: Record<string, unknown>;
      };
    };
    /** Read Intercom workspace, conversation, or grouped counts. */
    "intercom.get_counts": {
      input: {
        /**
         * Intercom count type to request, such as conversation.
         * @minLength 1
         */
        type?: string;
        /**
         * Intercom count grouping to request, such as tag or segment.
         * @minLength 1
         */
        count?: string;
      };
      output: {
        /** Raw Intercom counts payload. */
        counts: Record<string, unknown>;
      };
    };
    /** Get the currently authorized Intercom admin and workspace metadata. */
    "intercom.get_current_admin": {
      input: Record<string, never>;
      output: {
        /** Currently authorized Intercom admin. */
        admin: Record<string, unknown>;
      };
    };
    /** Get the status of an Intercom asynchronous job. */
    "intercom.get_job_status": {
      input: {
        /**
         * Intercom job identifier.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /** Intercom job status payload. */
        job: Record<string, unknown>;
      };
    };
    /** Get a single Intercom ticket by internal ticket identifier. */
    "intercom.get_ticket": {
      input: {
        /**
         * Internal Intercom ticket identifier.
         * @minLength 1
         */
        ticketId: string;
      };
      output: {
        /** Requested Intercom ticket. */
        ticket: Record<string, unknown>;
      };
    };
    /** List Intercom admins for the current workspace. */
    "intercom.list_admins": {
      input: {
        /** Whether Intercom should include admin avatar objects in the response. */
        displayAvatar?: boolean;
      };
      output: {
        /** Intercom admins returned for the current workspace. */
        admins: Array<Record<string, unknown>>;
      };
    };
    /** List Intercom help center articles. */
    "intercom.list_articles": {
      input: {
        /**
         * Maximum number of Intercom records to return.
         * @minimum 1
         * @maximum 150
         */
        perPage?: number;
        /**
         * Opaque Intercom cursor returned from a previous paginated response.
         * @minLength 1
         */
        startingAfter?: string;
      };
      output: {
        /** Intercom articles returned for the current page. */
        articles: Array<Record<string, unknown>>;
        /** Normalized Intercom cursor pagination metadata. */
        pagination: {
          /** Whether Intercom reported another page of results. */
          hasMore: boolean;
          /** Cursor for the next Intercom page, or null when there is no next page. */
          nextStartingAfter: string | null;
          /** Current page number reported by Intercom, or null when omitted. */
          page: number | null;
          /** Current page size reported by Intercom, or null when omitted. */
          perPage: number | null;
          /** Total Intercom pages reported by the endpoint, or null when omitted. */
          totalPages: number | null;
          /** Total Intercom record count reported by the endpoint, or null when omitted. */
          totalCount: number | null;
        };
      };
    };
    /** List Intercom companies with pagination. */
    "intercom.list_companies": {
      input: {
        /**
         * One-based Intercom page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of Intercom records to return.
         * @minimum 1
         * @maximum 150
         */
        perPage?: number;
        /** Order in which Intercom should return companies. */
        order?: "asc" | "desc";
        /**
         * Opaque Intercom cursor returned from a previous paginated response.
         * @minLength 1
         */
        startingAfter?: string;
      };
      output: {
        /** Intercom companies returned for the current page. */
        companies: Array<Record<string, unknown>>;
        /** Normalized Intercom cursor pagination metadata. */
        pagination: {
          /** Whether Intercom reported another page of results. */
          hasMore: boolean;
          /** Cursor for the next Intercom page, or null when there is no next page. */
          nextStartingAfter: string | null;
          /** Current page number reported by Intercom, or null when omitted. */
          page: number | null;
          /** Current page size reported by Intercom, or null when omitted. */
          perPage: number | null;
          /** Total Intercom pages reported by the endpoint, or null when omitted. */
          totalPages: number | null;
          /** Total Intercom record count reported by the endpoint, or null when omitted. */
          totalCount: number | null;
        };
      };
    };
    /** List Intercom contacts with cursor-based pagination. */
    "intercom.list_contacts": {
      input: {
        /**
         * Maximum number of Intercom records to return.
         * @minimum 1
         * @maximum 150
         */
        perPage?: number;
        /**
         * Opaque Intercom cursor returned from a previous paginated response.
         * @minLength 1
         */
        startingAfter?: string;
      };
      output: {
        /** Intercom contacts returned for the current page. */
        contacts: Array<Record<string, unknown>>;
        /** Normalized Intercom cursor pagination metadata. */
        pagination: {
          /** Whether Intercom reported another page of results. */
          hasMore: boolean;
          /** Cursor for the next Intercom page, or null when there is no next page. */
          nextStartingAfter: string | null;
          /** Current page number reported by Intercom, or null when omitted. */
          page: number | null;
          /** Current page size reported by Intercom, or null when omitted. */
          perPage: number | null;
          /** Total Intercom pages reported by the endpoint, or null when omitted. */
          totalPages: number | null;
          /** Total Intercom record count reported by the endpoint, or null when omitted. */
          totalCount: number | null;
        };
      };
    };
    /** List Intercom conversations with cursor-based pagination. */
    "intercom.list_conversations": {
      input: {
        /**
         * Maximum number of Intercom records to return.
         * @minimum 1
         * @maximum 150
         */
        perPage?: number;
        /**
         * Opaque Intercom cursor returned from a previous paginated response.
         * @minLength 1
         */
        startingAfter?: string;
      };
      output: {
        /** Intercom conversations returned for the current page. */
        conversations: Array<Record<string, unknown>>;
        /** Normalized Intercom cursor pagination metadata. */
        pagination: {
          /** Whether Intercom reported another page of results. */
          hasMore: boolean;
          /** Cursor for the next Intercom page, or null when there is no next page. */
          nextStartingAfter: string | null;
          /** Current page number reported by Intercom, or null when omitted. */
          page: number | null;
          /** Current page size reported by Intercom, or null when omitted. */
          perPage: number | null;
          /** Total Intercom pages reported by the endpoint, or null when omitted. */
          totalPages: number | null;
          /** Total Intercom record count reported by the endpoint, or null when omitted. */
          totalCount: number | null;
        };
      };
    };
    /** List recent Intercom data events for one user or lead. */
    "intercom.list_events": {
      input: {
        /**
         * User ID used to identify the Intercom user.
         * @minLength 1
         */
        userId?: string;
        /**
         * Email address used to identify the Intercom user.
         * @format email
         */
        email?: string;
        /**
         * Intercom user or lead identifier.
         * @minLength 1
         */
        intercomUserId?: string;
        /** Whether Intercom should return event summary data. */
        summary?: boolean;
        /**
         * Maximum number of Intercom records to return.
         * @minimum 1
         * @maximum 150
         */
        perPage?: number;
      };
      output: {
        /** Intercom events returned by the endpoint. */
        events: Array<Record<string, unknown>>;
        /** Raw Intercom event summary payload. */
        eventSummary: Record<string, unknown>;
      };
    };
    /** List all Intercom tags for the current workspace. */
    "intercom.list_tags": {
      input: Record<string, never>;
      output: {
        /** Intercom tags returned for the workspace. */
        tags: Array<Record<string, unknown>>;
      };
    };
    /** Reopen an Intercom conversation. */
    "intercom.reopen_conversation": {
      input: {
        /**
         * Intercom conversation identifier.
         * @minLength 1
         */
        conversationId: string;
        /**
         * Intercom admin identifier performing the reopen.
         * @minLength 1
         */
        adminId: string;
      };
      output: {
        /** Updated Intercom conversation. */
        conversation: Record<string, unknown>;
      };
    };
    /** Reply to an Intercom conversation as an admin. */
    "intercom.reply_to_conversation": {
      input: {
        /**
         * Intercom conversation identifier, or `last` to target the most recent part.
         * @minLength 1
         */
        conversationId: string;
        /**
         * Intercom admin identifier sending the reply.
         * @minLength 1
         */
        adminId: string;
        /**
         * Reply body to send to the conversation.
         * @minLength 1
         */
        body: string;
        /** Intercom reply type to create. Defaults to `comment`. */
        messageType?: "comment" | "note";
        /**
         * Attachment URLs to include with the reply.
         * @maxItems 10
         */
        attachmentUrls?: Array<string>;
      };
      output: {
        /** Updated Intercom conversation. */
        conversation: Record<string, unknown>;
      };
    };
    /** Search Intercom contacts with the official search DSL. */
    "intercom.search_contacts": {
      input: {
        /** Intercom key-value object. */
        query: Record<string, unknown>;
        /**
         * Maximum number of Intercom records to return.
         * @minimum 1
         * @maximum 150
         */
        perPage?: number;
        /**
         * Opaque Intercom cursor returned from a previous paginated response.
         * @minLength 1
         */
        startingAfter?: string;
      };
      output: {
        /** Intercom contacts returned by the search query. */
        contacts: Array<Record<string, unknown>>;
        /** Normalized Intercom cursor pagination metadata. */
        pagination: {
          /** Whether Intercom reported another page of results. */
          hasMore: boolean;
          /** Cursor for the next Intercom page, or null when there is no next page. */
          nextStartingAfter: string | null;
          /** Current page number reported by Intercom, or null when omitted. */
          page: number | null;
          /** Current page size reported by Intercom, or null when omitted. */
          perPage: number | null;
          /** Total Intercom pages reported by the endpoint, or null when omitted. */
          totalPages: number | null;
          /** Total Intercom record count reported by the endpoint, or null when omitted. */
          totalCount: number | null;
        };
      };
    };
    /** Search Intercom tickets with the official search DSL. */
    "intercom.search_tickets": {
      input: {
        /** Intercom key-value object. */
        query: Record<string, unknown>;
        /**
         * Maximum number of Intercom records to return.
         * @minimum 1
         * @maximum 150
         */
        perPage?: number;
        /**
         * Opaque Intercom cursor returned from a previous paginated response.
         * @minLength 1
         */
        startingAfter?: string;
      };
      output: {
        /** Intercom tickets returned by the search query. */
        tickets: Array<Record<string, unknown>>;
        /** Normalized Intercom cursor pagination metadata. */
        pagination: {
          /** Whether Intercom reported another page of results. */
          hasMore: boolean;
          /** Cursor for the next Intercom page, or null when there is no next page. */
          nextStartingAfter: string | null;
          /** Current page number reported by Intercom, or null when omitted. */
          page: number | null;
          /** Current page size reported by Intercom, or null when omitted. */
          perPage: number | null;
          /** Total Intercom pages reported by the endpoint, or null when omitted. */
          totalPages: number | null;
          /** Total Intercom record count reported by the endpoint, or null when omitted. */
          totalCount: number | null;
        };
      };
    };
    /** Update an existing Intercom contact. */
    "intercom.update_contact": {
      input: {
        /**
         * Intercom contact identifier.
         * @minLength 1
         */
        contactId: string;
        /** Intercom contact role. */
        role?: "user" | "lead";
        /**
         * External identifier stored on the Intercom contact.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Primary email address for the Intercom contact.
         * @format email
         */
        email?: string;
        /**
         * Phone number for the Intercom contact.
         * @minLength 1
         */
        phone?: string | null;
        /**
         * Display name for the Intercom contact.
         * @minLength 1
         */
        name?: string | null;
        /**
         * Avatar image URL for the Intercom contact.
         * @format uri
         */
        avatar?: string | null;
        /**
         * UNIX timestamp when the contact signed up.
         * @minimum 0
         */
        signedUpAt?: number | null;
        /**
         * UNIX timestamp when the contact was last seen.
         * @minimum 0
         */
        lastSeenAt?: number | null;
        /** Intercom admin identifier. */
        ownerId?: string | number | null;
        /** Whether the contact is unsubscribed from emails. */
        unsubscribedFromEmails?: boolean | null;
        /** Intercom key-value object. */
        customAttributes?: Record<string, unknown> | null;
      };
      output: {
        /** Created or updated Intercom contact. */
        contact: Record<string, unknown>;
      };
    };
  }
}
