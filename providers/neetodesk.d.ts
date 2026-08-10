import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a reply or private note on a NeetoDesk ticket. */
    "neetodesk.create_comment": {
      input: {
        /** The ticket UUID or sequential ticket number. */
        ticket_id: string;
        /**
         * The email address attributed as the comment author.
         * @format email
         */
        author_email: string;
        /** The comment content. */
        content: string;
        /** The kind of author represented by author_email. */
        author_type?: "agent" | "customer";
        /** Whether to create a public reply or private note. */
        comment_type?: "reply" | "note";
        /** A caller-supplied idempotency identifier unique per ticket. */
        message_id?: string;
      };
      output: {
        /** A NeetoDesk ticket comment and any additional upstream fields. */
        comment: {
          /** The comment's unique identifier. */
          id?: string;
          /**
           * The ISO 8601 comment creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The comment type, such as reply or note. */
          comment_type?: string;
          /** The comment content. */
          content?: string;
          /** A NeetoDesk person summary. */
          author?: {
            /** The person's unique identifier. */
            id?: string;
            /** The person's display name. */
            name?: string;
            /** The person's email address. */
            email?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a ticket in a NeetoDesk workspace. */
    "neetodesk.create_ticket": {
      input: {
        /**
         * The customer email address.
         * @format email
         */
        email: string;
        /** The ticket subject. */
        subject: string;
        /** The ticket description. */
        description: string;
        /** A default or custom workspace ticket status. */
        status?: string;
        /** The ticket priority. */
        priority?: "low" | "medium" | "high" | "urgent";
        /** The name of an existing NeetoDesk group. */
        group?: string;
        /**
         * The email address of an existing team member.
         * @format email
         */
        assignee_email?: string;
        /** The ticket category. */
        category?: string;
        /** The ticket's first-level sub-category. */
        sub_category_one?: string;
        /** The ticket's second-level sub-category. */
        sub_category_two?: string;
        /** Tags to assign to the ticket. */
        tags?: Array<string>;
        /** Custom ticket fields keyed by field name. */
        ticket_fields?: Record<string, string>;
      };
      output: {
        /** A newly created NeetoDesk ticket reference. */
        ticket: {
          /** The created ticket's unique identifier. */
          id: string;
          /** The created ticket's sequential workspace number. */
          number: number;
          /**
           * The NeetoDesk admin URL for the created ticket.
           * @format uri
           */
          url: string;
        };
      };
    };
    /** Retrieve one NeetoDesk ticket by UUID or sequential ticket number. */
    "neetodesk.get_ticket": {
      input: {
        /** The ticket UUID or sequential ticket number. */
        ticket_id: string;
      };
      output: {
        /** A NeetoDesk ticket and any additional upstream fields. */
        ticket: {
          /** The ticket's unique identifier. */
          id?: string;
          /** The ticket's sequential workspace number. */
          number?: number;
          /** The ticket subject. */
          subject?: string;
          /** The ticket description as HTML content. */
          description?: string;
          /** The ticket priority. */
          priority?: string;
          /** The ticket status. */
          status?: string;
          /**
           * The ISO 8601 ticket creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The ISO 8601 ticket update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** A NeetoDesk person summary. */
          assignee?: {
            /** The person's unique identifier. */
            id?: string;
            /** The person's display name. */
            name?: string;
            /** The person's email address. */
            email?: string;
            [key: string]: unknown;
          } | null;
          /** A NeetoDesk person summary. */
          customer?: {
            /** The person's unique identifier. */
            id?: string;
            /** The person's display name. */
            name?: string;
            /** The person's email address. */
            email?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
      };
    };
    /** List comments for a NeetoDesk ticket. */
    "neetodesk.list_comments": {
      input: {
        /** The ticket UUID or sequential ticket number. */
        ticket_id: string;
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        page_size?: number;
      };
      output: {
        /** The returned comments. */
        comments: Array<{
          /** The comment's unique identifier. */
          id?: string;
          /**
           * The ISO 8601 comment creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /** The comment type, such as reply or note. */
          comment_type?: string;
          /** The comment content. */
          content?: string;
          /** A NeetoDesk person summary. */
          author?: {
            /** The person's unique identifier. */
            id?: string;
            /** The person's display name. */
            name?: string;
            /** The person's email address. */
            email?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by NeetoDesk. */
        pagination: {
          /** The total number of matching records. */
          total_records: number;
          /** The total number of result pages. */
          total_pages: number;
          /** The current one-based page number. */
          current_page_number: number;
          /** The number of records in one page. */
          page_size: number;
        };
      };
    };
    /** List team members in a NeetoDesk workspace. */
    "neetodesk.list_team_members": {
      input: {
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        page_size?: number;
        /**
         * The exact team member email address to match.
         * @format email
         */
        email?: string;
      };
      output: {
        /** The returned team members. */
        team_members: Array<{
          /** The team member's unique identifier. */
          id?: string;
          /** The team member's email address. */
          email?: string;
          /** The team member's first name. */
          first_name?: string;
          /** The team member's last name. */
          last_name?: string;
          /** Whether the team member is active. */
          active?: boolean;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by NeetoDesk. */
        pagination: {
          /** The total number of matching records. */
          total_records: number;
          /** The total number of result pages. */
          total_pages: number;
          /** The current one-based page number. */
          current_page_number: number;
          /** The number of records in one page. */
          page_size: number;
        };
      };
    };
    /** List tickets in a NeetoDesk workspace with pagination and optional filters. */
    "neetodesk.list_tickets": {
      input: {
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page_number?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         */
        page_size?: number;
        /** Comma-separated default or custom ticket statuses. */
        status?: string;
        /** The external source identifier to match. */
        external_id?: string;
        /** The ticket field used for sorting. */
        sort?: "created_at" | "updated_at";
        /** The sort direction. */
        order?: "asc" | "desc";
      };
      output: {
        /** The returned tickets. */
        tickets: Array<{
          /** The ticket's unique identifier. */
          id?: string;
          /** The ticket's sequential workspace number. */
          number?: number;
          /** The ticket subject. */
          subject?: string;
          /** The ticket description as HTML content. */
          description?: string;
          /** The ticket priority. */
          priority?: string;
          /** The ticket status. */
          status?: string;
          /**
           * The ISO 8601 ticket creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The ISO 8601 ticket update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** A NeetoDesk person summary. */
          assignee?: {
            /** The person's unique identifier. */
            id?: string;
            /** The person's display name. */
            name?: string;
            /** The person's email address. */
            email?: string;
            [key: string]: unknown;
          } | null;
          /** A NeetoDesk person summary. */
          customer?: {
            /** The person's unique identifier. */
            id?: string;
            /** The person's display name. */
            name?: string;
            /** The person's email address. */
            email?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by NeetoDesk. */
        pagination: {
          /** The total number of matching records. */
          total_records: number;
          /** The total number of result pages. */
          total_pages: number;
          /** The current one-based page number. */
          current_page_number: number;
          /** The number of records in one page. */
          page_size: number;
        };
      };
    };
    /** Update selected fields on an existing NeetoDesk ticket. */
    "neetodesk.update_ticket": {
      input: {
        /** The ticket UUID or sequential ticket number. */
        ticket_id: string;
        /**
         * The customer email address.
         * @format email
         */
        email?: string;
        /** The ticket subject. */
        subject?: string;
        /** The ticket description. */
        description?: string;
        /** A default or custom workspace ticket status. */
        status?: string;
        /** The ticket priority. */
        priority?: "low" | "medium" | "high" | "urgent";
        /** The name of an existing NeetoDesk group. */
        group?: string;
        /**
         * The email address of an existing team member.
         * @format email
         */
        assignee_email?: string;
        /** The ticket category. */
        category?: string;
        /** The ticket's first-level sub-category. */
        sub_category_one?: string;
        /** The ticket's second-level sub-category. */
        sub_category_two?: string;
        /** Tags to assign to the ticket. */
        tags?: Array<string>;
        /** Custom ticket fields keyed by field name. */
        ticket_fields?: Record<string, string>;
      };
      output: {
        /** A NeetoDesk ticket and any additional upstream fields. */
        ticket: {
          /** The ticket's unique identifier. */
          id?: string;
          /** The ticket's sequential workspace number. */
          number?: number;
          /** The ticket subject. */
          subject?: string;
          /** The ticket description as HTML content. */
          description?: string;
          /** The ticket priority. */
          priority?: string;
          /** The ticket status. */
          status?: string;
          /**
           * The ISO 8601 ticket creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * The ISO 8601 ticket update timestamp.
           * @format date-time
           */
          updated_at?: string;
          /** A NeetoDesk person summary. */
          assignee?: {
            /** The person's unique identifier. */
            id?: string;
            /** The person's display name. */
            name?: string;
            /** The person's email address. */
            email?: string;
            [key: string]: unknown;
          } | null;
          /** A NeetoDesk person summary. */
          customer?: {
            /** The person's unique identifier. */
            id?: string;
            /** The person's display name. */
            name?: string;
            /** The person's email address. */
            email?: string;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
