import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current RepairShopr API user and account details. */
    "repairshopr.get_current_user": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Retrieve a RepairShopr customer by ID. */
    "repairshopr.get_customer": {
      input: {
        /**
         * RepairShopr numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Raw RepairShopr object returned by the API. */
        customer: Record<string, unknown>;
      };
    };
    /** Retrieve a RepairShopr ticket by ID. */
    "repairshopr.get_ticket": {
      input: {
        /**
         * RepairShopr numeric record identifier.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Raw RepairShopr object returned by the API. */
        ticket: Record<string, unknown>;
      };
    };
    /** Return a paginated list of RepairShopr customers. */
    "repairshopr.list_customers": {
      input: {
        /**
         * A customer field to order by, such as "firstname ASC" or "city DESC".
         * @minLength 1
         */
        sort?: string;
        /**
         * Search query for matching customers.
         * @minLength 1
         */
        query?: string;
        /**
         * Filter customers with a first name like this value.
         * @minLength 1
         */
        firstname?: string;
        /**
         * Filter customers with a last name like this value.
         * @minLength 1
         */
        lastname?: string;
        /**
         * Filter customers with a business name like this value.
         * @minLength 1
         */
        business_name?: string;
        /**
         * Filter customers by email address.
         * @minLength 1
         */
        email?: string;
        /**
         * Returns the provided page of results; each page contains 25 results.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Customers returned by RepairShopr. */
        customers: Array<Record<string, unknown>>;
        /** RepairShopr pagination metadata returned by list endpoints. */
        meta?: {
          /** Total number of pages available. */
          total_pages?: number;
          /** Total number of entries available. */
          total_entries?: number;
          /** Number of entries returned per page. */
          per_page?: number;
          /** Current page number. */
          page?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Return a paginated list of RepairShopr tickets. */
    "repairshopr.list_tickets": {
      input: {
        /**
         * Filter tickets by customer ID.
         * @exclusiveMinimum 0
         */
        customer_id?: number;
        /**
         * Filter tickets by contact ID.
         * @exclusiveMinimum 0
         */
        contact_id?: number;
        /**
         * Filter tickets by ticket number.
         * @minLength 1
         */
        number?: string;
        /**
         * Return tickets resolved after this date, such as "2019-01-23".
         * @minLength 1
         */
        resolved_after?: string;
        /**
         * Return tickets created after this date, such as "2019-02-25".
         * @minLength 1
         */
        created_after?: string;
        /**
         * Return tickets updated after this date, such as "2019-02-25".
         * @minLength 1
         */
        since_updated_at?: string;
        /**
         * Filter tickets by status, such as "New", "In Progress", "Resolved", or "Not Closed".
         * @minLength 1
         */
        status?: string;
        /**
         * Search query for matching tickets.
         * @minLength 1
         */
        query?: string;
        /**
         * Filter tickets assigned to a RepairShopr user ID.
         * @exclusiveMinimum 0
         */
        user_id?: number;
        /** Filter tickets assigned to the current user. */
        mine?: boolean;
        /**
         * Return results from a saved RepairShopr ticket search.
         * @exclusiveMinimum 0
         */
        ticket_search_id?: number;
        /**
         * Filter tickets linked to assets whose name matches this value.
         * @minLength 1
         */
        asset_name?: string;
        /**
         * Filter tickets linked to assets whose serial number matches this value.
         * @minLength 1
         */
        asset_serial?: string;
        /**
         * Returns the provided page of results; each page contains 25 results.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Format to use for ticket comments in the response. */
        comment_format?: "plaintext" | "richtext" | "original";
        /** Include all ticket comments when supported by RepairShopr. */
        all_comments?: boolean;
      };
      output: {
        /** Tickets returned by RepairShopr. */
        tickets: Array<Record<string, unknown>>;
        /** RepairShopr pagination metadata returned by list endpoints. */
        meta?: {
          /** Total number of pages available. */
          total_pages?: number;
          /** Total number of entries available. */
          total_entries?: number;
          /** Number of entries returned per page. */
          per_page?: number;
          /** Current page number. */
          page?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
