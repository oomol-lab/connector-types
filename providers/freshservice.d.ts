import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Freshservice service request for one service catalog item. */
    "freshservice.create_service_request": {
      input: {
        /**
         * Display ID of the Freshservice service catalog item to request.
         * @exclusiveMinimum 0
         */
        itemDisplayId: number;
        /**
         * Requester email address used for the Freshservice service request.
         * @format email
         */
        email?: string;
        /**
         * Quantity of the requested catalog item.
         * @exclusiveMinimum 0
         */
        quantity?: number;
        /**
         * Parent Freshservice ticket display ID used when creating a child service request.
         * @exclusiveMinimum 0
         */
        parentTicketId?: number;
        /**
         * Workspace identifier used for MSP or multi-workspace Freshservice accounts.
         * @minimum 1
         */
        workspaceId?: number;
        /** Freshservice service item custom field values keyed by upstream field name. */
        customFields?: Record<string, string | number | boolean>;
      };
      output: {
        /** A Freshservice service request object. */
        serviceRequest: Record<string, unknown>;
      };
    };
    /** Create a Freshservice ticket for an incident or service request workflow. */
    "freshservice.create_ticket": {
      input: {
        /**
         * Subject of the Freshservice ticket.
         * @minLength 1
         */
        subject: string;
        /**
         * HTML description of the Freshservice ticket.
         * @minLength 1
         */
        description: string;
        /**
         * Freshservice ticket status value. Common defaults are 2=open, 3=pending, 4=resolved, and 5=closed.
         * @minimum 1
         */
        status: number;
        /**
         * Freshservice ticket priority value. Common defaults are 1=low, 2=medium, 3=high, and 4=urgent.
         * @minimum 1
         * @maximum 4
         */
        priority: number;
        /**
         * Requester email address used to create the Freshservice ticket.
         * @format email
         */
        email?: string;
        /**
         * Requester identifier used when the requester already exists in Freshservice.
         * @exclusiveMinimum 0
         */
        requesterId?: number;
        /**
         * Requester name used when creating a new contact from the ticket.
         * @minLength 1
         */
        name?: string;
        /** Freshservice ticket type. */
        type?: "Incident" | "Service Request";
        /**
         * Freshservice ticket source value. Common values include 1=email, 2=portal, 3=phone, 7=chat, 8=feedback widget, and 9=outbound email.
         * @minimum 1
         */
        source?: number;
        /**
         * Freshservice ticket impact value. Common defaults are 1=low, 2=medium, and 3=high.
         * @minimum 1
         * @maximum 3
         */
        impact?: number;
        /**
         * Freshservice ticket urgency value. Common defaults are 1=low, 2=medium, 3=high, and 4=critical.
         * @minimum 1
         * @maximum 4
         */
        urgency?: number;
        /**
         * Freshservice email configuration identifier used for outbound email ticket creation.
         * @exclusiveMinimum 0
         */
        emailConfigId?: number;
        /**
         * Support group identifier assigned to the ticket.
         * @exclusiveMinimum 0
         */
        groupId?: number;
        /**
         * Agent identifier assigned to the ticket.
         * @exclusiveMinimum 0
         */
        responderId?: number;
        /**
         * Identifier of the user on whose behalf the request is raised.
         * @exclusiveMinimum 0
         */
        requestedForId?: number;
        /**
         * Department identifier assigned to the ticket.
         * @exclusiveMinimum 0
         */
        departmentId?: number;
        /**
         * Category value assigned to the ticket.
         * @minLength 1
         */
        category?: string;
        /**
         * Sub-category value assigned to the ticket.
         * @minLength 1
         */
        subCategory?: string;
        /**
         * Item category value assigned to the ticket.
         * @minLength 1
         */
        itemCategory?: string;
        /**
         * SLA due-by timestamp in ISO 8601 format.
         * @format date-time
         */
        dueBy?: string;
        /**
         * First-response due-by timestamp in ISO 8601 format.
         * @format date-time
         */
        frDueBy?: string;
        /**
         * Tags to attach to the Freshservice ticket.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * CC email addresses added to an outbound email ticket.
         * @minItems 1
         */
        ccEmails?: Array<string>;
        /** Freshservice custom field values keyed by upstream field name. */
        customFields?: Record<string, unknown>;
        /**
         * Workspace identifier used for MSP or multi-workspace Freshservice accounts.
         * @minimum 1
         */
        workspaceId?: number;
      };
      output: {
        /** A Freshservice ticket object. */
        ticket: Record<string, unknown>;
      };
    };
    /** Get one Freshservice ticket by identifier with optional include expansions. */
    "freshservice.get_ticket": {
      input: {
        /**
         * Freshservice ticket identifier or display identifier.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /**
         * Freshservice include tokens to expand related records in ticket responses.
         * @minItems 1
         */
        include?: Array<"conversations" | "requester" | "requested_for" | "stats" | "problem" | "assets" | "changes" | "related_tickets" | "onboarding_context" | "offboarding_context" | "journey_requests" | "journey_data">;
        /**
         * Workspace identifier used for MSP or multi-workspace Freshservice accounts.
         * @minimum 1
         */
        workspaceId?: number;
      };
      output: {
        /** A Freshservice ticket object. */
        ticket: Record<string, unknown>;
      };
    };
    /** List Freshservice locations to help callers resolve account-level location metadata. */
    "freshservice.list_locations": {
      input: {
        /**
         * Page number for the Freshservice list request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of records to return per Freshservice page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Workspace identifier used for MSP or multi-workspace Freshservice accounts.
         * @minimum 1
         */
        workspaceId?: number;
      };
      output: {
        /** Freshservice locations returned for the current page. */
        locations: Array<Record<string, unknown>>;
        /** Whether another Freshservice locations page is likely available. */
        hasMore: boolean;
        /**
         * The next Freshservice locations page number when available.
         * @exclusiveMinimum 0
         */
        nextPage: number | null;
      };
    };
    /** List Freshservice service catalog items so callers can discover item display IDs before placing requests. */
    "freshservice.list_service_catalog_items": {
      input: {
        /**
         * Page number for the Freshservice list request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of records to return per Freshservice page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Optional search term used to search Freshservice service catalog items.
         * @minLength 1
         */
        searchTerm?: string;
        /**
         * Workspace identifier used for MSP or multi-workspace Freshservice accounts.
         * @minimum 1
         */
        workspaceId?: number;
      };
      output: {
        /** Freshservice service catalog items returned for the current page. */
        items: Array<Record<string, unknown>>;
        /** Whether another Freshservice service catalog page is likely available. */
        hasMore: boolean;
        /**
         * The next Freshservice service catalog page number when available.
         * @exclusiveMinimum 0
         */
        nextPage: number | null;
      };
    };
    /** List Freshservice tickets with optional filters, pagination, and include expansions. */
    "freshservice.list_tickets": {
      input: {
        /**
         * Page number for the Freshservice list request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of records to return per Freshservice page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Freshservice predefined ticket filter to apply. */
        filter?: "new_and_my_open" | "watching" | "spam" | "deleted";
        /**
         * Freshservice include tokens to expand related records in ticket responses.
         * @minItems 1
         */
        include?: Array<"conversations" | "requester" | "requested_for" | "stats" | "problem" | "assets" | "changes" | "related_tickets" | "onboarding_context" | "offboarding_context" | "journey_requests" | "journey_data">;
        /**
         * Freshservice ticket field used for ordering results.
         * @minLength 1
         */
        orderBy?: string;
        /** Freshservice ticket list ordering direction. */
        orderType?: "asc" | "desc";
        /**
         * ISO 8601 timestamp used as the updated_since Freshservice filter.
         * @format date-time
         */
        updatedSince?: string;
        /**
         * Workspace identifier used for MSP or multi-workspace Freshservice accounts.
         * @minimum 1
         */
        workspaceId?: number;
      };
      output: {
        /** Freshservice tickets returned for the current page. */
        tickets: Array<Record<string, unknown>>;
        /** Whether another Freshservice page is likely available. */
        hasMore: boolean;
        /**
         * The next Freshservice page number when another page is available.
         * @exclusiveMinimum 0
         */
        nextPage: number | null;
      };
    };
  }
}
