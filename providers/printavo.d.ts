import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Printavo account for the current API token. */
    "printavo.get_account": {
      input: Record<string, never>;
      output: {
        /** A Printavo account selected by the connector. */
        account: {
          /** The Printavo account ID. */
          id: string;
          /** The account company name. */
          companyName: string | null;
          /** The account company email address. */
          companyEmail: string | null;
          /** The account phone number. */
          phone: string | null;
          /** The account website. */
          website: string | null;
          /** The account locale. */
          locale: string | null;
          /** The account logo URL. */
          logoUrl: string | null;
          /** The raw Printavo object selected by the connector query. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Identify the current Printavo API token, user, and account. */
    "printavo.identify": {
      input: Record<string, never>;
      output: {
        /** A Printavo user selected by the connector. */
        user: {
          /** The Printavo user ID. */
          id: string;
          /** The user's display name. */
          name: string | null;
          /** The user's email address. */
          email: string | null;
          /** The user's phone number. */
          phone: string | null;
          /** The user's timezone. */
          timeZone: string | null;
          /** The raw Printavo object selected by the connector query. */
          raw: Record<string, unknown>;
        };
        /** A Printavo account selected by the connector. */
        account: {
          /** The Printavo account ID. */
          id: string;
          /** The account company name. */
          companyName: string | null;
          /** The account company email address. */
          companyEmail: string | null;
          /** The account phone number. */
          phone: string | null;
          /** The account website. */
          website: string | null;
          /** The account locale. */
          locale: string | null;
          /** The account logo URL. */
          logoUrl: string | null;
          /** The raw Printavo object selected by the connector query. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Printavo contacts with optional search and cursor pagination. */
    "printavo.list_contacts": {
      input: {
        /**
         * Return the first n records from the connection.
         * @minimum 1
         */
        first?: number;
        /**
         * Return the last n records from the connection.
         * @minimum 1
         */
        last?: number;
        /**
         * Return records after this cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Return records before this cursor.
         * @minLength 1
         */
        before?: string;
        /**
         * Search contacts by Printavo query string.
         * @minLength 1
         */
        query?: string;
        /** Whether to return only primary contacts. */
        primaryOnly?: boolean;
      };
      output: {
        /** Printavo cursor pagination metadata. */
        pageInfo: {
          /** Whether another page exists after the returned page. */
          hasNextPage: boolean;
          /** Whether another page exists before the returned page. */
          hasPreviousPage: boolean;
          /** The cursor for the first returned edge. */
          startCursor: string | null;
          /** The cursor for the last returned edge. */
          endCursor: string | null;
        };
        /** The total number of nodes when Printavo returns it. */
        totalNodes: number | null;
        /** The total dollar amount when Printavo returns it. */
        totalAmount: number | null;
        /** Printavo contacts returned by the query. */
        contacts: Array<{
          /** The Printavo contact ID. */
          id: string;
          /** The contact first name. */
          firstName: string | null;
          /** The contact last name. */
          lastName: string | null;
          /** The contact full name. */
          fullName: string | null;
          /** The contact email address. */
          email: string | null;
          /** The contact phone number. */
          phone: string | null;
          /** The contact fax number. */
          fax: string | null;
          /** The number of orders associated with the contact. */
          orderCount: number | null;
          /** The customer associated with this contact. */
          customer: {
            /** The Printavo customer ID. */
            id: string;
            /** The customer company name. */
            companyName: string | null;
            /** The customer public URL. */
            publicUrl: string | null;
          } | null;
          /** The raw Printavo object selected by the connector query. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Printavo customers with cursor pagination. */
    "printavo.list_customers": {
      input: {
        /**
         * Return the first n records from the connection.
         * @minimum 1
         */
        first?: number;
        /**
         * Return the last n records from the connection.
         * @minimum 1
         */
        last?: number;
        /**
         * Return records after this cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Return records before this cursor.
         * @minLength 1
         */
        before?: string;
      };
      output: {
        /** Printavo cursor pagination metadata. */
        pageInfo: {
          /** Whether another page exists after the returned page. */
          hasNextPage: boolean;
          /** Whether another page exists before the returned page. */
          hasPreviousPage: boolean;
          /** The cursor for the first returned edge. */
          startCursor: string | null;
          /** The cursor for the last returned edge. */
          endCursor: string | null;
        };
        /** The total number of nodes when Printavo returns it. */
        totalNodes: number | null;
        /** The total dollar amount when Printavo returns it. */
        totalAmount: number | null;
        /** Printavo customers returned by the query. */
        customers: Array<{
          /** The Printavo customer ID. */
          id: string;
          /** The customer company name. */
          companyName: string | null;
          /** The customer public URL. */
          publicUrl: string | null;
          /** The number of orders associated with the customer. */
          orderCount: number | null;
          /** Whether the customer is tax exempt. */
          taxExempt: boolean | null;
          /** The customer sales tax value. */
          salesTax: number | null;
          /** The customer's primary contact. */
          primaryContact: {
            /** The Printavo contact ID. */
            id: string;
            /** The primary contact full name. */
            fullName: string | null;
            /** The primary contact email address. */
            email: string | null;
          } | null;
          /** The raw Printavo object selected by the connector query. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Printavo quotes and invoices with optional search, status, tag, production date, and pagination filters. */
    "printavo.list_orders": {
      input: {
        /**
         * Return the first n records from the connection.
         * @minimum 1
         */
        first?: number;
        /**
         * Return the last n records from the connection.
         * @minimum 1
         */
        last?: number;
        /**
         * Return records after this cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Return records before this cursor.
         * @minLength 1
         */
        before?: string;
        /**
         * Search orders by Printavo query string.
         * @minLength 1
         */
        query?: string;
        /**
         * Only include orders in these Printavo status IDs.
         * @minItems 1
         */
        statusIds?: Array<string>;
        /**
         * Exclude orders in these Printavo status IDs.
         * @minItems 1
         */
        excludeStatusIds?: Array<string>;
        /**
         * Only include orders with one of these tags.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * Only return orders in production after this datetime.
         * @format date-time
         */
        inProductionAfter?: string;
        /**
         * Only return orders in production before this datetime.
         * @format date-time
         */
        inProductionBefore?: string;
      };
      output: {
        /** Printavo cursor pagination metadata. */
        pageInfo: {
          /** Whether another page exists after the returned page. */
          hasNextPage: boolean;
          /** Whether another page exists before the returned page. */
          hasPreviousPage: boolean;
          /** The cursor for the first returned edge. */
          startCursor: string | null;
          /** The cursor for the last returned edge. */
          endCursor: string | null;
        };
        /** Printavo quotes and invoices returned by the query. */
        orders: Array<{
          /** The Printavo order ID. */
          id: string;
          /** The GraphQL type name, such as Invoice or Quote. */
          type: string;
          /** The visible quote or invoice number. */
          visualId: string | null;
          /** The order nickname. */
          nickname: string | null;
          /** The order total. */
          total: number | null;
          /** The order subtotal. */
          subtotal: number | null;
          /** The amount paid on the order. */
          amountPaid: number | null;
          /** The outstanding amount on the order. */
          amountOutstanding: number | null;
          /** Whether the order is paid in full. */
          paidInFull: boolean | null;
          /** The customer due date. */
          customerDueAt: string | null;
          /** The production due datetime. */
          dueAt: string | null;
          /** The production start datetime. */
          startAt: string | null;
          /** The public order URL. */
          publicUrl: string | null;
          /** The internal order URL. */
          url: string | null;
          /** Tags attached to the order. */
          tags: Array<string>;
          /** The contact associated with this order. */
          contact: {
            /** The Printavo contact ID. */
            id: string;
            /** The contact full name. */
            fullName: string | null;
            /** The contact email address. */
            email: string | null;
          } | null;
          /** A Printavo order status selected by the connector. */
          status: {
            /** The Printavo status ID. */
            id: string;
            /** The status name. */
            name: string | null;
            /** The status type. */
            type: string | null;
            /** The status color. */
            color: string | null;
          } | null;
          /** The raw Printavo object selected by the connector query. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Printavo tasks with optional assignment, completion, due date, and pagination filters. */
    "printavo.list_tasks": {
      input: {
        /**
         * Return the first n records from the connection.
         * @minimum 1
         */
        first?: number;
        /**
         * Return the last n records from the connection.
         * @minimum 1
         */
        last?: number;
        /**
         * Return records after this cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Return records before this cursor.
         * @minLength 1
         */
        before?: string;
        /**
         * Only return tasks assigned to this Printavo user ID.
         * @minLength 1
         */
        assigneeId?: string;
        /** Whether to return completed or incomplete tasks. */
        completed?: boolean;
        /**
         * Only return tasks due after this ISO 8601 datetime.
         * @format date-time
         */
        dueAfter?: string;
        /**
         * Only return tasks due before this ISO 8601 datetime.
         * @format date-time
         */
        dueBefore?: string;
      };
      output: {
        /** Printavo cursor pagination metadata. */
        pageInfo: {
          /** Whether another page exists after the returned page. */
          hasNextPage: boolean;
          /** Whether another page exists before the returned page. */
          hasPreviousPage: boolean;
          /** The cursor for the first returned edge. */
          startCursor: string | null;
          /** The cursor for the last returned edge. */
          endCursor: string | null;
        };
        /** The total number of nodes when Printavo returns it. */
        totalNodes: number | null;
        /** The total dollar amount when Printavo returns it. */
        totalAmount: number | null;
        /** Printavo tasks returned by the query. */
        tasks: Array<{
          /** The Printavo task ID. */
          id: string;
          /** The task name. */
          name: string;
          /** Whether the task is complete. */
          completed: boolean;
          /** The task due datetime. */
          dueAt: string | null;
          /** The task completion datetime. */
          completedAt: string | null;
          /** The title of the preset task group that created the task. */
          sourcePresetTaskGroupTitle: string | null;
          /** A Printavo user selected by the connector. */
          assignedTo: {
            /** The Printavo user ID. */
            id: string;
            /** The user's display name. */
            name: string | null;
            /** The user's email address. */
            email: string | null;
            /** The user's phone number. */
            phone: string | null;
            /** The user's timezone. */
            timeZone: string | null;
            /** The raw Printavo object selected by the connector query. */
            raw: Record<string, unknown>;
          } | null;
          /** The raw Printavo object selected by the connector query. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
