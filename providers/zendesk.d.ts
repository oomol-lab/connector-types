import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Zendesk ticket with an initial comment. */
    "zendesk.create_ticket": {
      input: {
        /** Ticket subject line. */
        subject: string;
        /** Plain-text body for the initial ticket comment. */
        description?: string;
        /** HTML body for the initial ticket comment. */
        htmlDescription?: string;
        /** Whether the generated comment is public when a comment is included. */
        commentPublic?: boolean;
        /** Zendesk ticket status accepted by update operations. */
        status?: "new" | "open" | "pending" | "hold" | "solved";
        /** Zendesk ticket priority. */
        priority?: "urgent" | "high" | "normal" | "low";
        /** Zendesk ticket type. */
        ticketType?: "problem" | "incident" | "question" | "task";
        /**
         * Agent identifier assigned to the ticket.
         * @exclusiveMinimum 0
         */
        assigneeId?: number;
        /**
         * Group identifier assigned to the ticket.
         * @exclusiveMinimum 0
         */
        groupId?: number;
        /**
         * Organization identifier for the ticket.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Existing requester identifier.
         * @exclusiveMinimum 0
         */
        requesterId?: number;
        /** External identifier linked to the ticket. */
        externalId?: string;
        /**
         * Task due timestamp in ISO 8601 format.
         * @format date-time
         */
        dueAt?: string;
        /** Tags that should be set on the ticket. */
        tags?: Array<string>;
        /** Custom field values applied to the ticket. */
        customFields?: Array<{
          /**
           * Zendesk custom field identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Value assigned to the custom field. */
          value: unknown;
        }>;
        /** Requester object used when creating a ticket. */
        requester?: {
          /** Requester display name. */
          name?: string;
          /**
           * Requester email address.
           * @format email
           */
          email: string;
        };
      };
      output: {
        /** Zendesk ticket returned after the mutation. */
        ticket: {
          /**
           * Zendesk ticket identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the ticket, or null when Zendesk omits it. */
          url: string | null;
          /** Ticket subject, or null when Zendesk omits it. */
          subject: string | null;
          /** Ticket description, or null when Zendesk omits it. */
          description: string | null;
          /** Ticket status, or null when Zendesk omits it. */
          status?: string | null;
          /** Ticket priority, or null when Zendesk omits it. */
          priority?: string | null;
          /** Ticket type, or null when Zendesk omits it. */
          type?: string | null;
          /** Requester identifier, or null when Zendesk omits it. */
          requesterId: number | null;
          /** Assignee identifier, or null when Zendesk omits it. */
          assigneeId: number | null;
          /** Group identifier, or null when Zendesk omits it. */
          groupId: number | null;
          /** Organization identifier, or null when Zendesk omits it. */
          organizationId: number | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Task due timestamp, or null when Zendesk omits it. */
          dueAt: string | null;
          /** Ticket creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** Ticket update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** Ticket tags. */
          tags: Array<string>;
          /** Raw Zendesk ticket payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the current authenticated Zendesk user. */
    "zendesk.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Current Zendesk user. */
        user: {
          /**
           * Zendesk user identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the user, or null when Zendesk omits it. */
          url: string | null;
          /** User display name, or null when Zendesk omits it. */
          name: string | null;
          /** User primary email, or null when Zendesk omits it. */
          email: string | null;
          /** Zendesk role string, or null when Zendesk omits it. */
          role: string | null;
          /** Whether the user is active, or null when Zendesk omits it. */
          active: boolean | null;
          /** Organization identifier, or null when Zendesk omits it. */
          organizationId: number | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Phone number, or null when Zendesk omits it. */
          phone: string | null;
          /** Time zone, or null when Zendesk omits it. */
          timeZone: string | null;
          /** User creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** User update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** User tags. */
          tags: Array<string>;
          /** Raw Zendesk user payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a Zendesk organization by identifier. */
    "zendesk.get_organization": {
      input: {
        /**
         * Zendesk organization identifier.
         * @exclusiveMinimum 0
         */
        organizationId: number;
      };
      output: {
        /** Zendesk organization details. */
        organization: {
          /**
           * Zendesk organization identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the organization, or null when Zendesk omits it. */
          url: string | null;
          /** Organization name, or null when Zendesk omits it. */
          name: string | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Organization details, or null when Zendesk omits it. */
          details: string | null;
          /** Organization notes, or null when Zendesk omits it. */
          notes: string | null;
          /** Organization creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** Organization update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** Default group identifier, or null when Zendesk omits it. */
          groupId: number | null;
          /** Whether end users can view each other's tickets, or null when omitted. */
          sharedTickets: boolean | null;
          /** Whether end users can comment on shared tickets, or null when omitted. */
          sharedComments: boolean | null;
          /** Organization domain names. */
          domainNames: Array<string>;
          /** Organization tags. */
          tags: Array<string>;
          /** Raw Zendesk organization payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a Zendesk ticket and its comments by identifier. */
    "zendesk.get_ticket": {
      input: {
        /**
         * Zendesk ticket identifier.
         * @exclusiveMinimum 0
         */
        ticketId: number;
      };
      output: {
        /** Zendesk ticket details. */
        ticket: {
          /**
           * Zendesk ticket identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the ticket, or null when Zendesk omits it. */
          url: string | null;
          /** Ticket subject, or null when Zendesk omits it. */
          subject: string | null;
          /** Ticket description, or null when Zendesk omits it. */
          description: string | null;
          /** Ticket status, or null when Zendesk omits it. */
          status?: string | null;
          /** Ticket priority, or null when Zendesk omits it. */
          priority?: string | null;
          /** Ticket type, or null when Zendesk omits it. */
          type?: string | null;
          /** Requester identifier, or null when Zendesk omits it. */
          requesterId: number | null;
          /** Assignee identifier, or null when Zendesk omits it. */
          assigneeId: number | null;
          /** Group identifier, or null when Zendesk omits it. */
          groupId: number | null;
          /** Organization identifier, or null when Zendesk omits it. */
          organizationId: number | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Task due timestamp, or null when Zendesk omits it. */
          dueAt: string | null;
          /** Ticket creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** Ticket update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** Ticket tags. */
          tags: Array<string>;
          /** Raw Zendesk ticket payload. */
          raw: Record<string, unknown>;
        };
        /** Comments attached to the ticket. */
        comments: Array<{
          /**
           * Zendesk ticket comment identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Zendesk comment type, or null when Zendesk omits it. */
          type: string | null;
          /** Identifier of the comment author, or null when Zendesk omits it. */
          authorId: number | null;
          /** Plain-text comment body, or null when Zendesk omits it. */
          body: string | null;
          /** HTML comment body, or null when Zendesk omits it. */
          htmlBody: string | null;
          /** Zendesk normalized plain-text body, or null when omitted. */
          plainBody: string | null;
          /** Whether the comment is public, or null when Zendesk omits it. */
          public: boolean | null;
          /** Comment creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** Attachments returned with the comment. */
          attachments: Array<{
            /**
             * Zendesk attachment identifier.
             * @exclusiveMinimum 0
             */
            id: number;
            /** Attachment file name, or null when Zendesk omits it. */
            fileName: string | null;
            /** Attachment MIME type, or null when Zendesk omits it. */
            contentType: string | null;
            /** Attachment size in bytes, or null when Zendesk omits it. */
            size: number | null;
            /** Attachment URL, or null when Zendesk omits it. */
            url: string | null;
          }>;
          /** Raw Zendesk comment payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Get a Zendesk user by identifier. */
    "zendesk.get_user": {
      input: {
        /**
         * Zendesk user identifier.
         * @exclusiveMinimum 0
         */
        userId: number;
      };
      output: {
        /** Zendesk user details. */
        user: {
          /**
           * Zendesk user identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the user, or null when Zendesk omits it. */
          url: string | null;
          /** User display name, or null when Zendesk omits it. */
          name: string | null;
          /** User primary email, or null when Zendesk omits it. */
          email: string | null;
          /** Zendesk role string, or null when Zendesk omits it. */
          role: string | null;
          /** Whether the user is active, or null when Zendesk omits it. */
          active: boolean | null;
          /** Organization identifier, or null when Zendesk omits it. */
          organizationId: number | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Phone number, or null when Zendesk omits it. */
          phone: string | null;
          /** Time zone, or null when Zendesk omits it. */
          timeZone: string | null;
          /** User creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** User update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** User tags. */
          tags: Array<string>;
          /** Raw Zendesk user payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Zendesk organizations with pagination. */
    "zendesk.list_organizations": {
      input: {
        /**
         * Offset pagination page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of records to return for offset pagination.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Organizations returned by Zendesk. */
        organizations: Array<{
          /**
           * Zendesk organization identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the organization, or null when Zendesk omits it. */
          url: string | null;
          /** Organization name, or null when Zendesk omits it. */
          name: string | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Organization details, or null when Zendesk omits it. */
          details: string | null;
          /** Organization notes, or null when Zendesk omits it. */
          notes: string | null;
          /** Organization creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** Organization update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** Default group identifier, or null when Zendesk omits it. */
          groupId: number | null;
          /** Whether end users can view each other's tickets, or null when omitted. */
          sharedTickets: boolean | null;
          /** Whether end users can comment on shared tickets, or null when omitted. */
          sharedComments: boolean | null;
          /** Organization domain names. */
          domainNames: Array<string>;
          /** Organization tags. */
          tags: Array<string>;
          /** Raw Zendesk organization payload. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata for the organization list. */
        pagination: {
          /** Total count reported by Zendesk, or null when the endpoint does not provide it. */
          count: number | null;
          /** Whether Zendesk indicates that more records are available. */
          hasMore: boolean;
          /** URL for the next Zendesk page, or null when there is no next page. */
          nextPage: string | null;
          /** URL for the previous Zendesk page, or null when there is no previous page. */
          previousPage: string | null;
          /** Cursor for the next page, or null when cursor pagination is not in use. */
          afterCursor: string | null;
          /** Cursor for the previous page, or null when cursor pagination is not in use. */
          beforeCursor: string | null;
        };
      };
    };
    /** List Zendesk tickets with offset or cursor pagination. */
    "zendesk.list_tickets": {
      input: {
        /**
         * Offset pagination page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of records to return for offset pagination.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Maximum number of records to return for cursor pagination.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** Opaque cursor returned by the previous Zendesk page. */
        pageAfter?: string;
        /** Opaque cursor for retrieving the previous Zendesk page. */
        pageBefore?: string;
        /** External identifier used to filter tickets. */
        externalId?: string;
        /** Zendesk field used to sort tickets. */
        sortBy?: string;
        /** Zendesk sort direction. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** Tickets returned by Zendesk. */
        tickets: Array<{
          /**
           * Zendesk ticket identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the ticket, or null when Zendesk omits it. */
          url: string | null;
          /** Ticket subject, or null when Zendesk omits it. */
          subject: string | null;
          /** Ticket description, or null when Zendesk omits it. */
          description: string | null;
          /** Ticket status, or null when Zendesk omits it. */
          status?: string | null;
          /** Ticket priority, or null when Zendesk omits it. */
          priority?: string | null;
          /** Ticket type, or null when Zendesk omits it. */
          type?: string | null;
          /** Requester identifier, or null when Zendesk omits it. */
          requesterId: number | null;
          /** Assignee identifier, or null when Zendesk omits it. */
          assigneeId: number | null;
          /** Group identifier, or null when Zendesk omits it. */
          groupId: number | null;
          /** Organization identifier, or null when Zendesk omits it. */
          organizationId: number | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Task due timestamp, or null when Zendesk omits it. */
          dueAt: string | null;
          /** Ticket creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** Ticket update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** Ticket tags. */
          tags: Array<string>;
          /** Raw Zendesk ticket payload. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata for the ticket list. */
        pagination: {
          /** Total count reported by Zendesk, or null when the endpoint does not provide it. */
          count: number | null;
          /** Whether Zendesk indicates that more records are available. */
          hasMore: boolean;
          /** URL for the next Zendesk page, or null when there is no next page. */
          nextPage: string | null;
          /** URL for the previous Zendesk page, or null when there is no previous page. */
          previousPage: string | null;
          /** Cursor for the next page, or null when cursor pagination is not in use. */
          afterCursor: string | null;
          /** Cursor for the previous page, or null when cursor pagination is not in use. */
          beforeCursor: string | null;
        };
      };
    };
    /** List Zendesk users with optional role and pagination filters. */
    "zendesk.list_users": {
      input: {
        /**
         * Offset pagination page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of records to return for offset pagination.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Maximum number of records to return for cursor pagination.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** Opaque cursor returned by the previous Zendesk page. */
        pageAfter?: string;
        /** Zendesk user role. */
        role?: "end-user" | "agent" | "admin";
        /** Roles included in the user filter. */
        roleList?: Array<"end-user" | "agent" | "admin">;
        /** External identifier used to filter users. */
        externalId?: string;
        /**
         * Zendesk custom role identifier.
         * @exclusiveMinimum 0
         */
        permissionSet?: number;
      };
      output: {
        /** Users returned by Zendesk. */
        users: Array<{
          /**
           * Zendesk user identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the user, or null when Zendesk omits it. */
          url: string | null;
          /** User display name, or null when Zendesk omits it. */
          name: string | null;
          /** User primary email, or null when Zendesk omits it. */
          email: string | null;
          /** Zendesk role string, or null when Zendesk omits it. */
          role: string | null;
          /** Whether the user is active, or null when Zendesk omits it. */
          active: boolean | null;
          /** Organization identifier, or null when Zendesk omits it. */
          organizationId: number | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Phone number, or null when Zendesk omits it. */
          phone: string | null;
          /** Time zone, or null when Zendesk omits it. */
          timeZone: string | null;
          /** User creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** User update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** User tags. */
          tags: Array<string>;
          /** Raw Zendesk user payload. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata for the user list. */
        pagination: {
          /** Total count reported by Zendesk, or null when the endpoint does not provide it. */
          count: number | null;
          /** Whether Zendesk indicates that more records are available. */
          hasMore: boolean;
          /** URL for the next Zendesk page, or null when there is no next page. */
          nextPage: string | null;
          /** URL for the previous Zendesk page, or null when there is no previous page. */
          previousPage: string | null;
          /** Cursor for the next page, or null when cursor pagination is not in use. */
          afterCursor: string | null;
          /** Cursor for the previous page, or null when cursor pagination is not in use. */
          beforeCursor: string | null;
        };
      };
    };
    /** Append a public reply or internal note to a Zendesk ticket. */
    "zendesk.reply_to_ticket": {
      input: {
        /**
         * Zendesk ticket identifier.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /** Comment body to append to the ticket. */
        body: string;
        /** Whether the appended comment is public. Defaults to true. */
        public?: boolean;
        /**
         * Agent identifier assigned together with the reply.
         * @exclusiveMinimum 0
         */
        assigneeId?: number;
      };
      output: {
        /** Zendesk ticket returned after the mutation. */
        ticket: {
          /**
           * Zendesk ticket identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the ticket, or null when Zendesk omits it. */
          url: string | null;
          /** Ticket subject, or null when Zendesk omits it. */
          subject: string | null;
          /** Ticket description, or null when Zendesk omits it. */
          description: string | null;
          /** Ticket status, or null when Zendesk omits it. */
          status?: string | null;
          /** Ticket priority, or null when Zendesk omits it. */
          priority?: string | null;
          /** Ticket type, or null when Zendesk omits it. */
          type?: string | null;
          /** Requester identifier, or null when Zendesk omits it. */
          requesterId: number | null;
          /** Assignee identifier, or null when Zendesk omits it. */
          assigneeId: number | null;
          /** Group identifier, or null when Zendesk omits it. */
          groupId: number | null;
          /** Organization identifier, or null when Zendesk omits it. */
          organizationId: number | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Task due timestamp, or null when Zendesk omits it. */
          dueAt: string | null;
          /** Ticket creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** Ticket update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** Ticket tags. */
          tags: Array<string>;
          /** Raw Zendesk ticket payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search Zendesk users by email address or name. */
    "zendesk.search_users": {
      input: {
        /**
         * User email used for the Zendesk search.
         * @format email
         */
        email?: string;
        /** User name fragment used for the Zendesk search. */
        name?: string;
        /**
         * Offset pagination page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Maximum number of records to return for offset pagination.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Users returned by the search. */
        users: Array<{
          /**
           * Zendesk user identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the user, or null when Zendesk omits it. */
          url: string | null;
          /** User display name, or null when Zendesk omits it. */
          name: string | null;
          /** User primary email, or null when Zendesk omits it. */
          email: string | null;
          /** Zendesk role string, or null when Zendesk omits it. */
          role: string | null;
          /** Whether the user is active, or null when Zendesk omits it. */
          active: boolean | null;
          /** Organization identifier, or null when Zendesk omits it. */
          organizationId: number | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Phone number, or null when Zendesk omits it. */
          phone: string | null;
          /** Time zone, or null when Zendesk omits it. */
          timeZone: string | null;
          /** User creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** User update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** User tags. */
          tags: Array<string>;
          /** Raw Zendesk user payload. */
          raw: Record<string, unknown>;
        }>;
        /** Total number of matching users. */
        count: number;
        /** URL for the next Zendesk page, or null when there is no next page. */
        nextPage: string | null;
        /** URL for the previous Zendesk page, or null when there is no previous page. */
        previousPage: string | null;
      };
    };
    /** Update fields on an existing Zendesk ticket. */
    "zendesk.update_ticket": {
      input: {
        /** Ticket subject line. */
        subject?: string;
        /** Plain-text body used for the initial or appended ticket comment. */
        description?: string;
        /** HTML body used for the initial or appended ticket comment. */
        htmlDescription?: string;
        /** Whether the generated comment is public when a comment is included. */
        commentPublic?: boolean;
        /** Zendesk ticket status accepted by update operations. */
        status?: "new" | "open" | "pending" | "hold" | "solved";
        /** Zendesk ticket priority. */
        priority?: "urgent" | "high" | "normal" | "low";
        /** Zendesk ticket type. */
        ticketType?: "problem" | "incident" | "question" | "task";
        /**
         * Agent identifier assigned to the ticket.
         * @exclusiveMinimum 0
         */
        assigneeId?: number;
        /**
         * Group identifier assigned to the ticket.
         * @exclusiveMinimum 0
         */
        groupId?: number;
        /**
         * Organization identifier for the ticket.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
        /**
         * Existing requester identifier.
         * @exclusiveMinimum 0
         */
        requesterId?: number;
        /** External identifier linked to the ticket. */
        externalId?: string;
        /**
         * Task due timestamp in ISO 8601 format.
         * @format date-time
         */
        dueAt?: string;
        /** Tags that should be set on the ticket. */
        tags?: Array<string>;
        /** Custom field values applied to the ticket. */
        customFields?: Array<{
          /**
           * Zendesk custom field identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** Value assigned to the custom field. */
          value: unknown;
        }>;
        /**
         * Zendesk ticket identifier.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /** Whether to enable optimistic locking for ticket updates. */
        safeUpdate?: boolean;
        /**
         * Last known ticket updated_at timestamp used with safeUpdate.
         * @format date-time
         */
        updatedStamp?: string;
        /** Custom audit metadata attached to the update. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** Zendesk ticket returned after the mutation. */
        ticket: {
          /**
           * Zendesk ticket identifier.
           * @exclusiveMinimum 0
           */
          id: number;
          /** API URL of the ticket, or null when Zendesk omits it. */
          url: string | null;
          /** Ticket subject, or null when Zendesk omits it. */
          subject: string | null;
          /** Ticket description, or null when Zendesk omits it. */
          description: string | null;
          /** Ticket status, or null when Zendesk omits it. */
          status?: string | null;
          /** Ticket priority, or null when Zendesk omits it. */
          priority?: string | null;
          /** Ticket type, or null when Zendesk omits it. */
          type?: string | null;
          /** Requester identifier, or null when Zendesk omits it. */
          requesterId: number | null;
          /** Assignee identifier, or null when Zendesk omits it. */
          assigneeId: number | null;
          /** Group identifier, or null when Zendesk omits it. */
          groupId: number | null;
          /** Organization identifier, or null when Zendesk omits it. */
          organizationId: number | null;
          /** External identifier, or null when Zendesk omits it. */
          externalId: string | null;
          /** Task due timestamp, or null when Zendesk omits it. */
          dueAt: string | null;
          /** Ticket creation timestamp, or null when Zendesk omits it. */
          createdAt: string | null;
          /** Ticket update timestamp, or null when Zendesk omits it. */
          updatedAt: string | null;
          /** Ticket tags. */
          tags: Array<string>;
          /** Raw Zendesk ticket payload. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
