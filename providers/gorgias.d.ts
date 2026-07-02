import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current Gorgias helpdesk account. */
    "gorgias.get_account": {
      input: Record<string, never>;
      output: {
        /** A normalized Gorgias account summary. */
        account: {
          /** Gorgias account domain. */
          domain: string | null;
          /** Gorgias account status when returned. */
          status: string | null;
          /** The raw Gorgias object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Gorgias ticket by identifier. */
    "gorgias.get_ticket": {
      input: {
        /**
         * Gorgias ticket identifier.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /**
         * Gorgias ticket relations to include in the returned ticket.
         * @minItems 1
         */
        relationships?: Array<"custom_fields">;
      };
      output: {
        /** A normalized Gorgias ticket summary. */
        ticket: {
          /** Gorgias ticket identifier. */
          id: number | null;
          /** Ticket subject. */
          subject: string | null;
          /** Ticket status returned by Gorgias. */
          status: string | null;
          /** Ticket channel returned by Gorgias. */
          channel: string | null;
          /** A normalized Gorgias customer summary. */
          customer: {
            /** Gorgias customer identifier. */
            id: number | null;
            /** Primary email address of the customer. */
            email: string | null;
            /** Customer display name. */
            name: string | null;
            /** Customer identifier in a foreign system. */
            externalId: string | null;
            /** The raw Gorgias object. */
            raw: Record<string, unknown>;
          } | null;
          /** Ticket creation timestamp returned by Gorgias. */
          createdDatetime: string | null;
          /** Ticket update timestamp returned by Gorgias. */
          updatedDatetime: string | null;
          /** The raw Gorgias object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Gorgias customers with cursor pagination and lookup filters. */
    "gorgias.list_customers": {
      input: {
        /**
         * A Gorgias cursor returned by a previous paginated response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Primary customer email address to filter by.
         * @format email
         */
        email?: string;
        /**
         * ID of the customer in a foreign system to filter by.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Maximum number of Gorgias records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Gorgias customers returned for the current page. */
        customers: Array<{
          /** Gorgias customer identifier. */
          id: number | null;
          /** Primary email address of the customer. */
          email: string | null;
          /** Customer display name. */
          name: string | null;
          /** Customer identifier in a foreign system. */
          externalId: string | null;
          /** The raw Gorgias object. */
          raw: Record<string, unknown>;
        }>;
        /** Cursor pagination metadata returned by Gorgias. */
        pagination: {
          /** Cursor for the previous page when Gorgias returns one. */
          previousCursor: string | null;
          /** Cursor for the next page when Gorgias returns one. */
          nextCursor: string | null;
          /** Total number of matching resources when returned. */
          totalResources: number | null;
        };
        /** The raw Gorgias object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Gorgias tags with cursor pagination, search, and ordering. */
    "gorgias.list_tags": {
      input: {
        /**
         * A Gorgias cursor returned by a previous paginated response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Text used to search tag names.
         * @minLength 1
         */
        search?: string;
        /**
         * Maximum number of Gorgias records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Attribute and direction used to order Gorgias tags. */
        orderBy?: "created_datetime" | "name" | "usage" | "created_datetime:asc" | "created_datetime:desc" | "name:asc" | "name:desc" | "usage:asc,name:asc" | "usage:desc,name:desc";
      };
      output: {
        /** Gorgias tags returned for the current page. */
        tags: Array<{
          /** Gorgias tag identifier. */
          id: number | null;
          /** Gorgias tag name. */
          name: string | null;
          /** Hex color code returned for the tag decoration. */
          color: string | null;
          /** How often Gorgias reports this tag is used. */
          usage: number | null;
          /** The raw Gorgias object. */
          raw: Record<string, unknown>;
        }>;
        /** Cursor pagination metadata returned by Gorgias. */
        pagination: {
          /** Cursor for the previous page when Gorgias returns one. */
          previousCursor: string | null;
          /** Cursor for the next page when Gorgias returns one. */
          nextCursor: string | null;
          /** Total number of matching resources when returned. */
          totalResources: number | null;
        };
        /** The raw Gorgias object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Gorgias tickets with cursor pagination and common filters. */
    "gorgias.list_tickets": {
      input: {
        /**
         * A Gorgias cursor returned by a previous paginated response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * Gorgias customer identifier used to filter tickets.
         * @exclusiveMinimum 0
         */
        customerId?: number;
        /** Whether to include trashed tickets in the response. */
        trashed?: boolean;
        /**
         * ID of the ticket in a foreign system to filter by.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Maximum number of Gorgias records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Gorgias view identifier used to select tickets.
         * @exclusiveMinimum 0
         */
        viewId?: number;
        /**
         * Gorgias rule identifier used to select tickets.
         * @exclusiveMinimum 0
         */
        ruleId?: number;
        /**
         * Specific Gorgias ticket identifiers to select.
         * @minItems 1
         * @maxItems 100
         */
        ticketIds?: Array<number>;
        /** Attribute and direction used to order Gorgias tickets. */
        orderBy?: "created_datetime:asc" | "created_datetime:desc" | "updated_datetime:asc" | "updated_datetime:desc";
      };
      output: {
        /** Gorgias tickets returned for the current page. */
        tickets: Array<{
          /** Gorgias ticket identifier. */
          id: number | null;
          /** Ticket subject. */
          subject: string | null;
          /** Ticket status returned by Gorgias. */
          status: string | null;
          /** Ticket channel returned by Gorgias. */
          channel: string | null;
          /** A normalized Gorgias customer summary. */
          customer: {
            /** Gorgias customer identifier. */
            id: number | null;
            /** Primary email address of the customer. */
            email: string | null;
            /** Customer display name. */
            name: string | null;
            /** Customer identifier in a foreign system. */
            externalId: string | null;
            /** The raw Gorgias object. */
            raw: Record<string, unknown>;
          } | null;
          /** Ticket creation timestamp returned by Gorgias. */
          createdDatetime: string | null;
          /** Ticket update timestamp returned by Gorgias. */
          updatedDatetime: string | null;
          /** The raw Gorgias object. */
          raw: Record<string, unknown>;
        }>;
        /** Cursor pagination metadata returned by Gorgias. */
        pagination: {
          /** Cursor for the previous page when Gorgias returns one. */
          previousCursor: string | null;
          /** Cursor for the next page when Gorgias returns one. */
          nextCursor: string | null;
          /** Total number of matching resources when returned. */
          totalResources: number | null;
        };
        /** The raw Gorgias object. */
        raw: Record<string, unknown>;
      };
    };
    /** List Gorgias users with documented filters and ordering. */
    "gorgias.list_users": {
      input: {
        /**
         * A Gorgias cursor returned by a previous paginated response.
         * @minLength 1
         */
        cursor?: string;
        /**
         * ID of the user in a foreign system to filter by.
         * @minLength 1
         */
        externalId?: string;
        /**
         * Email address of the user to filter by.
         * @format email
         */
        email?: string;
        /**
         * Maximum number of Gorgias records to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Attribute and direction used to order Gorgias users. */
        orderBy?: "created_datetime:asc" | "created_datetime:desc" | "name:asc" | "name:desc" | "email:asc" | "email:desc" | "role.name:asc" | "role.name:desc";
        /**
         * Gorgias roles used to filter users.
         * @minItems 1
         */
        roles?: Array<"admin" | "agent" | "basic-agent" | "bot" | "internal-agent" | "lite-agent" | "observer-agent">;
        /**
         * Text used to search user names or email addresses.
         * @minLength 1
         */
        search?: string;
        /** Whether available users should be returned before non-available users. */
        availableFirst?: boolean;
      };
      output: {
        /** Gorgias users returned by the request. */
        users: Array<{
          /** Gorgias user identifier. */
          id: number | null;
          /** User email address. */
          email: string | null;
          /** User display name. */
          name: string | null;
          /** Whether the user can log in. */
          active: boolean | null;
          /** The user's Gorgias role name. */
          roleName: string | null;
          /** The raw Gorgias object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
