import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a public comment to a Mojo Helpdesk ticket. */
    "mojo_helpdesk.create_comment": {
      input: {
        /**
         * The Mojo Helpdesk ticket ID.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /**
         * The comment body.
         * @minLength 1
         */
        body: string;
        /**
         * The time spent on the comment in minutes.
         * @minimum 0
         */
        timeSpent?: number;
        /** A comma-separated list of email addresses copied on the comment. */
        cc?: string;
        /**
         * The account user ID to attribute the comment to.
         * @exclusiveMinimum 0
         */
        userId?: number;
      };
      output: {
        /** A Mojo Helpdesk ticket comment. */
        comment: Record<string, unknown>;
      };
    };
    /** Create a Mojo Helpdesk ticket without file attachments. */
    "mojo_helpdesk.create_ticket": {
      input: {
        /**
         * The ticket title.
         * @minLength 1
         */
        title: string;
        /** The ticket description or body. */
        description?: string;
        /**
         * The ID of the ticket queue.
         * @exclusiveMinimum 0
         */
        ticketQueueId: number;
        /** The ticket priority ID: 10 emergency, 20 urgent, 30 normal, or 40 low. */
        priorityId?: 10 | 20 | 30 | 40;
        /** The ticket status ID: 10 new, 20 in progress, 30 on hold, 40 information requested, 50 solved, or 60 closed. */
        statusId?: 10 | 20 | 30 | 40 | 50 | 60;
        /**
         * The ID of the ticket type.
         * @exclusiveMinimum 0
         */
        ticketTypeId?: number;
        /**
         * The ID of the assigned user.
         * @exclusiveMinimum 0
         */
        assignedToId?: number;
        /**
         * The ID of the ticket form.
         * @exclusiveMinimum 0
         */
        ticketFormId?: number;
        /**
         * The ID of the user who created the ticket.
         * @exclusiveMinimum 0
         */
        userId?: number;
        /**
         * The email address of a new ticket requester.
         * @format email
         */
        userEmail?: string;
        /** A comma-separated list of email addresses copied on ticket notifications. */
        cc?: string;
        /** The asset tag associated with the ticket. */
        assetTag?: string;
        /**
         * The ID of the asset associated with the ticket.
         * @exclusiveMinimum 0
         */
        assetId?: number;
        /**
         * The ticket due date and time.
         * @format date-time
         */
        dueOn?: string;
        /**
         * The ticket scheduled date and time.
         * @format date-time
         */
        scheduledOn?: string;
        /**
         * The ID of the ticket resolution.
         * @exclusiveMinimum 0
         */
        resolutionId?: number;
        /** Custom field values keyed by their system key without the custom_field_ prefix. */
        customFields?: Record<string, string>;
      };
      output: {
        /** A Mojo Helpdesk ticket, including provider-defined related data. */
        ticket: Record<string, unknown>;
      };
    };
    /** Get one Mojo Helpdesk ticket and its related data. */
    "mojo_helpdesk.get_ticket": {
      input: {
        /**
         * The Mojo Helpdesk ticket ID.
         * @exclusiveMinimum 0
         */
        ticketId: number;
      };
      output: {
        /** A Mojo Helpdesk ticket, including provider-defined related data. */
        ticket: Record<string, unknown>;
      };
    };
    /** List public comments on a Mojo Helpdesk ticket. */
    "mojo_helpdesk.list_comments": {
      input: {
        /**
         * The Mojo Helpdesk ticket ID.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The returned ticket comments. */
        comments: Array<Record<string, unknown>>;
      };
    };
    /** List Mojo Helpdesk ticket tags with optional sorting. */
    "mojo_helpdesk.list_tags": {
      input: {
        /** The tag column used to sort results. */
        sortBy?: string;
        /** The result sort direction. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** The returned ticket tags. */
        tags: Array<Record<string, unknown>>;
      };
    };
    /** List Mojo Helpdesk ticket queues available to the connected agent. */
    "mojo_helpdesk.list_ticket_queues": {
      input: {
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The returned ticket queues. */
        ticketQueues: Array<Record<string, unknown>>;
      };
    };
    /** List Mojo Helpdesk tickets with pagination and sorting. */
    "mojo_helpdesk.list_tickets": {
      input: {
        /** The ticket field used to sort the results. */
        sortBy?: "id" | "title" | "description" | "user_id" | "assigned_to_id" | "status_id" | "ticket_form_id" | "priority_id" | "ticket_queue_id" | "company_id" | "rating" | "rated_on" | "created_on" | "updated_on" | "status_changed_on" | "solved_on" | "assigned_on" | "ticket_type_id" | "due_on" | "scheduled_on";
        /** The result sort direction. */
        sortOrder?: "asc" | "desc";
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The returned tickets. */
        tickets: Array<Record<string, unknown>>;
      };
    };
    /** Search Mojo Helpdesk tickets with the advanced-search query syntax. */
    "mojo_helpdesk.search_tickets": {
      input: {
        /** The advanced-search query; omit it to return all tickets. */
        query?: string;
        /** The date field used to sort search results. */
        sortField?: "created_on" | "due_on" | "rated_on" | "scheduled_on" | "solved_on" | "updated_on";
        /** Whether to sort in descending order. */
        reverse?: boolean;
        /**
         * The one-based page number.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 10
         */
        perPage?: number;
      };
      output: {
        /** The returned tickets. */
        tickets: Array<Record<string, unknown>>;
      };
    };
    /** Partially update a Mojo Helpdesk ticket without replacing omitted fields. */
    "mojo_helpdesk.update_ticket": {
      input: {
        /**
         * The Mojo Helpdesk ticket ID.
         * @exclusiveMinimum 0
         */
        ticketId: number;
        /**
         * The ticket title.
         * @minLength 1
         */
        title?: string;
        /** The ticket description or body. */
        description?: string;
        /**
         * The ID of the ticket queue.
         * @exclusiveMinimum 0
         */
        ticketQueueId?: number;
        /** The ticket priority ID: 10 emergency, 20 urgent, 30 normal, or 40 low. */
        priorityId?: 10 | 20 | 30 | 40;
        /** The ticket status ID: 10 new, 20 in progress, 30 on hold, 40 information requested, 50 solved, or 60 closed. */
        statusId?: 10 | 20 | 30 | 40 | 50 | 60;
        /**
         * The ID of the ticket type.
         * @exclusiveMinimum 0
         */
        ticketTypeId?: number;
        /**
         * The ID of the assigned user.
         * @exclusiveMinimum 0
         */
        assignedToId?: number;
        /**
         * The ID of the ticket form.
         * @exclusiveMinimum 0
         */
        ticketFormId?: number;
        /**
         * The ID of the user who created the ticket.
         * @exclusiveMinimum 0
         */
        userId?: number;
        /**
         * The email address of a new ticket requester.
         * @format email
         */
        userEmail?: string;
        /** A comma-separated list of email addresses copied on ticket notifications. */
        cc?: string;
        /** The asset tag associated with the ticket. */
        assetTag?: string;
        /**
         * The ID of the asset associated with the ticket.
         * @exclusiveMinimum 0
         */
        assetId?: number;
        /**
         * The ticket due date and time.
         * @format date-time
         */
        dueOn?: string;
        /**
         * The ticket scheduled date and time.
         * @format date-time
         */
        scheduledOn?: string;
        /**
         * The ID of the ticket resolution.
         * @exclusiveMinimum 0
         */
        resolutionId?: number;
        /** Custom field values keyed by their system key without the custom_field_ prefix. */
        customFields?: Record<string, string>;
      };
      output: {
        /** A Mojo Helpdesk ticket, including provider-defined related data. */
        ticket: Record<string, unknown>;
      };
    };
  }
}
