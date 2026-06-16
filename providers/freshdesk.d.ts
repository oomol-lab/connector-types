import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Freshdesk account details for the current API key. */
    "freshdesk.get_account": {
      input: Record<string, never>;
      output: {
        /** Freshdesk account details. */
        account: Record<string, unknown>;
      };
    };
    /** Get a single Freshdesk ticket by identifier. */
    "freshdesk.get_ticket": {
      input: {
        /**
         * Freshdesk ticket identifier.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /**
         * Freshdesk include tokens to expand related records in ticket responses.
         * @minItems 1
         */
        include?: Array<"requester" | "company" | "stats" | "description">;
      };
      output: {
        /** Freshdesk ticket details. */
        ticket: Record<string, unknown>;
      };
    };
    /** List conversations attached to a Freshdesk ticket. */
    "freshdesk.list_ticket_conversations": {
      input: {
        /**
         * Freshdesk ticket identifier.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /**
         * Page number for the Freshdesk list request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of records to return per Freshdesk page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** Freshdesk conversations associated with the requested ticket. */
        conversations: Array<Record<string, unknown>>;
      };
    };
    /** List Freshdesk tickets with optional filters and include expansions. */
    "freshdesk.list_tickets": {
      input: {
        /**
         * Freshdesk predefined ticket filter to apply.
         * @minLength 1
         */
        filter?: string;
        /**
         * Freshdesk requester identifier to filter tickets by.
         * @exclusiveMinimum 0
         */
        requesterId?: number;
        /**
         * Requester email address used to filter Freshdesk tickets.
         * @format email
         */
        email?: string;
        /**
         * Freshdesk company identifier used to filter tickets by.
         * @exclusiveMinimum 0
         */
        companyId?: number;
        /**
         * ISO 8601 timestamp used as the updated_since Freshdesk filter.
         * @format date-time
         */
        updatedSince?: string;
        /**
         * Freshdesk ticket field used for ordering results.
         * @minLength 1
         */
        orderBy?: string;
        /** Freshdesk ticket list ordering direction. */
        orderType?: "asc" | "desc";
        /**
         * Page number for the Freshdesk list request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Maximum number of records to return per Freshdesk page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /**
         * Freshdesk include tokens to expand related records in ticket responses.
         * @minItems 1
         */
        include?: Array<"requester" | "company" | "stats" | "description">;
      };
      output: {
        /** Freshdesk tickets returned for the current page. */
        tickets: Array<Record<string, unknown>>;
        /** Whether another Freshdesk page is likely available. */
        hasMore: boolean;
        /**
         * Next Freshdesk page number when another page is available.
         * @exclusiveMinimum 0
         */
        nextPage: number | null;
      };
    };
  }
}
