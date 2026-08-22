import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Assign a Help Scout conversation to a user or leave it unassigned. */
    "helpscout.assign_conversation": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /**
         * The Help Scout user ID, or null to leave the conversation unassigned.
         * @exclusiveMinimum 0
         */
        assignedUserId: number | null;
      };
      output: {
        /** Whether Help Scout accepted the assignment update. */
        updated: boolean;
        /**
         * The updated Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /**
         * The assigned Help Scout user ID, or null when unassigned.
         * @exclusiveMinimum 0
         */
        assignedUserId: number | null;
      };
    };
    /** Create a Help Scout conversation with one initial text thread. */
    "helpscout.create_conversation": {
      input: {
        /**
         * The conversation subject.
         * @minLength 1
         */
        subject: string;
        /**
         * The Help Scout inbox where the conversation is created.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /**
         * The existing Help Scout customer ID.
         * @exclusiveMinimum 0
         */
        customerId?: number;
        /**
         * The customer email address used to find or create the customer.
         * @format email
         */
        customerEmail?: string;
        /**
         * The first name used when a new customer is created.
         * @minLength 1
         * @maxLength 40
         */
        customerFirstName?: string;
        /**
         * The last name used when a new customer is created.
         * @minLength 1
         * @maxLength 40
         */
        customerLastName?: string;
        /**
         * The conversation channel type.
         * @default "email"
         */
        type?: "chat" | "email" | "phone";
        /**
         * The initial Help Scout conversation status.
         * @default "active"
         */
        status?: "active" | "closed" | "pending";
        /**
         * The type of the initial conversation thread.
         * @default "customer"
         */
        threadType?: "customer" | "note" | "reply";
        /**
         * The HTML-supported text of the initial thread.
         * @minLength 1
         */
        text: string;
        /**
         * The Help Scout user creating the conversation and thread.
         * @exclusiveMinimum 0
         */
        userId?: number;
        /**
         * The Help Scout user assigned to the new conversation; Help Scout requires an ID greater than 1.
         * @exclusiveMinimum 1
         */
        assignedUserId?: number;
        /** Whether Help Scout should send the configured automatic reply. */
        autoReply?: boolean;
        /** The tags applied to the new conversation. */
        tagNames?: Array<string>;
        /** The complete set of custom fields to apply; omitted existing fields are removed. */
        customFields?: Array<{
          /**
           * The Help Scout custom field ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The field value; use an option ID for dropdown fields and YYYY-MM-DD for date fields.
           * @maxLength 15000
           */
          value: string;
        }>;
      };
      output: {
        /** Whether Help Scout accepted the conversation creation. */
        created: boolean;
        /** The created Help Scout conversation ID, or null. */
        conversationId: string | null;
        /** The API location of the created conversation, or null. */
        location: string | null;
        /** The Help Scout web URL of the conversation, or null. */
        webLocation: string | null;
      };
    };
    /** Create a Help Scout customer with a primary email address. */
    "helpscout.create_customer": {
      input: {
        /**
         * The customer's primary email address.
         * @format email
         */
        email: string;
        /**
         * The category assigned to the customer email address.
         * @default "work"
         */
        emailType?: "home" | "other" | "work";
        /**
         * The customer's first name.
         * @minLength 1
         * @maxLength 40
         */
        firstName?: string;
        /**
         * The customer's last name.
         * @minLength 1
         * @maxLength 40
         */
        lastName?: string;
        /** The customer's phone number. */
        phone?: string;
        /**
         * The customer's job title.
         * @maxLength 60
         */
        jobTitle?: string;
        /**
         * The customer's location.
         * @maxLength 60
         */
        location?: string;
        /**
         * Internal background information about the customer.
         * @maxLength 200
         */
        background?: string;
        /**
         * The Help Scout organization ID linked to the customer.
         * @exclusiveMinimum 0
         */
        organizationId?: number;
      };
      output: {
        /** Whether Help Scout accepted the customer creation. */
        created: boolean;
        /** The created Help Scout customer ID, or null. */
        customerId: string | null;
        /** The API location of the created customer, or null. */
        location: string | null;
      };
    };
    /** Add an internal note to a Help Scout conversation. */
    "helpscout.create_note": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /**
         * The HTML-supported internal note text.
         * @minLength 1
         */
        text: string;
        /**
         * The Help Scout user adding the note.
         * @exclusiveMinimum 0
         */
        userId?: number;
      };
      output: {
        /** Whether Help Scout accepted the note creation. */
        created: boolean;
        /** The created Help Scout thread ID, or null. */
        threadId: string | null;
      };
    };
    /** Add a published reply or draft reply to a Help Scout conversation. */
    "helpscout.create_reply": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /**
         * The Help Scout customer receiving the reply.
         * @exclusiveMinimum 0
         */
        customerId: number;
        /**
         * The HTML-supported reply text.
         * @minLength 1
         */
        text: string;
        /** Whether to save the reply as a draft instead of publishing it. */
        draft?: boolean;
        /**
         * The Help Scout user adding the reply.
         * @exclusiveMinimum 0
         */
        userId?: number;
        /** The email addresses copied on the reply. */
        cc?: Array<string>;
        /** The email addresses blind-copied on the reply. */
        bcc?: Array<string>;
      };
      output: {
        /** Whether Help Scout accepted the reply creation. */
        created: boolean;
        /** The created Help Scout thread ID, or null. */
        threadId: string | null;
      };
    };
    /** Get one Help Scout conversation by ID. */
    "helpscout.get_conversation": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /** Whether to embed thread previews in the conversation. */
        embedThreads?: boolean;
      };
      output: {
        /** The Help Scout conversation object. */
        conversation: Record<string, unknown>;
      };
    };
    /** Get one Help Scout customer by ID. */
    "helpscout.get_customer": {
      input: {
        /**
         * The Help Scout customer ID.
         * @exclusiveMinimum 0
         */
        customerId: number;
      };
      output: {
        /** The Help Scout customer object. */
        customer: Record<string, unknown>;
      };
    };
    /** Get the complete email and chat content of a Help Scout saved reply. */
    "helpscout.get_saved_reply": {
      input: {
        /**
         * The Help Scout inbox ID containing the saved reply.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /**
         * The Help Scout saved reply ID.
         * @exclusiveMinimum 0
         */
        savedReplyId: number;
      };
      output: {
        /** The Help Scout saved reply object. */
        savedReply: Record<string, unknown>;
      };
    };
    /** List and filter conversations in the connected Help Scout account. */
    "helpscout.list_conversations": {
      input: {
        /**
         * The 1-based result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The Help Scout inbox IDs whose conversations should be returned.
         * @minItems 1
         */
        inboxIds?: Array<number>;
        /**
         * The Help Scout folder ID used to filter conversations.
         * @exclusiveMinimum 0
         */
        folderId?: number;
        /** The Help Scout conversation status filter. */
        status?: "active" | "all" | "closed" | "open" | "pending" | "spam";
        /**
         * The tag names used to filter conversations.
         * @minItems 1
         */
        tagNames?: Array<string>;
        /**
         * The Help Scout user ID assigned to the conversations.
         * @exclusiveMinimum 0
         */
        assignedUserId?: number;
        /**
         * The human-facing Help Scout conversation number.
         * @exclusiveMinimum 0
         */
        conversationNumber?: number;
        /**
         * Return conversations modified after this ISO 8601 timestamp.
         * @format date-time
         */
        modifiedSince?: string;
        /**
         * A Help Scout conversation search query.
         * @minLength 1
         */
        query?: string;
        /** The field used to sort conversations. */
        sortField?: "createdAt" | "customerEmail" | "customerName" | "mailboxid" | "modifiedAt" | "number" | "score" | "status" | "subject" | "waitingSince";
        /** The conversation sort direction. */
        sortOrder?: "asc" | "desc";
        /** Whether to embed thread previews in each returned conversation. */
        embedThreads?: boolean;
      };
      output: {
        /** The Help Scout conversations returned on this page. */
        conversations: Array<Record<string, unknown>>;
        /** Help Scout pagination metadata, or null. */
        page: Record<string, unknown> | null;
      };
    };
    /** List and filter customers in the connected Help Scout account. */
    "helpscout.list_customers": {
      input: {
        /**
         * The 1-based result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Return customers associated with this Help Scout inbox.
         * @exclusiveMinimum 0
         */
        inboxId?: number;
        /**
         * Return customers with this first name.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Return customers with this last name.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Return customers matching this email address.
         * @format email
         */
        email?: string;
        /**
         * Return customers modified after this ISO 8601 timestamp.
         * @format date-time
         */
        modifiedSince?: string;
        /** The field used to sort customers. */
        sortField?: "createdAt" | "firstName" | "lastName" | "modifiedAt";
        /** The customer sort direction. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** The Help Scout customers returned on this page. */
        customers: Array<Record<string, unknown>>;
        /** Help Scout pagination metadata, or null. */
        page: Record<string, unknown> | null;
      };
    };
    /** List the custom field definitions and dropdown options for a Help Scout inbox. */
    "helpscout.list_inbox_custom_fields": {
      input: {
        /**
         * The Help Scout inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
      };
      output: {
        /** The Help Scout custom fields returned on this page. */
        fields: Array<Record<string, unknown>>;
        /** Help Scout pagination metadata, or null. */
        page: Record<string, unknown> | null;
      };
    };
    /** List the folders and conversation counts in a Help Scout inbox. */
    "helpscout.list_inbox_folders": {
      input: {
        /**
         * The Help Scout inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
      };
      output: {
        /** The Help Scout folders returned on this page. */
        folders: Array<Record<string, unknown>>;
        /** Help Scout pagination metadata, or null. */
        page: Record<string, unknown> | null;
      };
    };
    /** List the Help Scout inboxes available to the connected user. */
    "helpscout.list_inboxes": {
      input: {
        /**
         * The 1-based result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The Help Scout inboxes returned on this page. */
        inboxes: Array<Record<string, unknown>>;
        /** Help Scout pagination metadata, or null. */
        page: Record<string, unknown> | null;
      };
    };
    /** List the approved saved reply templates available in a Help Scout inbox. */
    "helpscout.list_saved_replies": {
      input: {
        /**
         * The Help Scout inbox ID.
         * @exclusiveMinimum 0
         */
        inboxId: number;
        /** Whether chat-only saved replies should also be returned. */
        includeChatReplies?: boolean;
      };
      output: {
        /** The saved reply summaries returned by Help Scout. */
        savedReplies: Array<Record<string, unknown>>;
      };
    };
    /** List tags used across the connected Help Scout account. */
    "helpscout.list_tags": {
      input: {
        /**
         * The 1-based result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The Help Scout tags returned on this page. */
        tags: Array<Record<string, unknown>>;
        /** Help Scout pagination metadata, or null. */
        page: Record<string, unknown> | null;
      };
    };
    /** List the complete threads belonging to a Help Scout conversation. */
    "helpscout.list_threads": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /**
         * The 1-based result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The Help Scout threads returned on this page. */
        threads: Array<Record<string, unknown>>;
        /** Help Scout pagination metadata, or null. */
        page: Record<string, unknown> | null;
      };
    };
    /** List Help Scout users, optionally filtered by email or inbox. */
    "helpscout.list_users": {
      input: {
        /**
         * Return the Help Scout user with this exact email address.
         * @format email
         */
        email?: string;
        /**
         * Return users who have access to this Help Scout inbox.
         * @exclusiveMinimum 0
         */
        inboxId?: number;
        /**
         * The 1-based result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The Help Scout users returned on this page. */
        users: Array<Record<string, unknown>>;
        /** Help Scout pagination metadata, or null. */
        page: Record<string, unknown> | null;
      };
    };
    /** List Help Scout workflows, including the manual automations that can be run. */
    "helpscout.list_workflows": {
      input: {
        /**
         * Return workflows associated with this Help Scout inbox.
         * @exclusiveMinimum 0
         */
        inboxId?: number;
        /** The Help Scout workflow type. */
        type?: "automatic" | "manual";
        /**
         * The 1-based result page to request.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** The Help Scout workflows returned on this page. */
        workflows: Array<Record<string, unknown>>;
        /** Help Scout pagination metadata, or null. */
        page: Record<string, unknown> | null;
      };
    };
    /** Replace the complete custom field state of a Help Scout conversation. */
    "helpscout.replace_conversation_custom_fields": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /** The complete set of custom fields to apply; omitted existing fields are removed. */
        customFields: Array<{
          /**
           * The Help Scout custom field ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The field value; use an option ID for dropdown fields and YYYY-MM-DD for date fields.
           * @maxLength 15000
           */
          value: string;
        }>;
      };
      output: {
        /** Whether Help Scout accepted the custom field replacement. */
        updated: boolean;
        /**
         * The updated Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /** The complete set of custom fields to apply; omitted existing fields are removed. */
        customFields: Array<{
          /**
           * The Help Scout custom field ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * The field value; use an option ID for dropdown fields and YYYY-MM-DD for date fields.
           * @maxLength 15000
           */
          value: string;
        }>;
      };
    };
    /** Replace the complete tag list on a Help Scout conversation. */
    "helpscout.replace_conversation_tags": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /** The complete tag list to keep on the conversation; use an empty list to remove all tags. */
        tagNames: Array<string>;
      };
      output: {
        /** Whether Help Scout accepted the tag replacement. */
        updated: boolean;
        /**
         * The updated Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /** The complete tag list sent to Help Scout. */
        tagNames: Array<string>;
      };
    };
    /** Run a configured Help Scout manual workflow on up to 50 conversations. */
    "helpscout.run_manual_workflow": {
      input: {
        /**
         * The Help Scout manual workflow ID.
         * @exclusiveMinimum 0
         */
        workflowId: number;
        /**
         * The conversations to which the workflow should be applied; all must be in its inbox.
         * @minItems 1
         * @maxItems 50
         */
        conversationIds: Array<number>;
      };
      output: {
        /** Whether Help Scout accepted the workflow execution. */
        executed: boolean;
        /**
         * The executed Help Scout workflow ID.
         * @exclusiveMinimum 0
         */
        workflowId: number;
        /** The Help Scout conversations sent to the workflow. */
        conversationIds: Array<number>;
      };
    };
    /** Replace the status of a Help Scout conversation. */
    "helpscout.set_conversation_status": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /** The Help Scout conversation status. */
        status: "active" | "closed" | "open" | "pending" | "spam";
      };
      output: {
        /** Whether Help Scout accepted the status update. */
        updated: boolean;
        /**
         * The updated Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /** The Help Scout conversation status. */
        status: "active" | "closed" | "open" | "pending" | "spam";
      };
    };
    /** Snooze a Help Scout conversation until a specific future time. */
    "helpscout.snooze_conversation": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /**
         * The future ISO 8601 time when the conversation should return.
         * @format date-time
         */
        snoozedUntil: string;
        /** Whether a new customer reply should immediately unsnooze the conversation. */
        unsnoozeOnCustomerReply: boolean;
      };
      output: {
        /** Whether Help Scout accepted the snooze setting. */
        updated: boolean;
        /**
         * The snoozed Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
        /**
         * The requested ISO 8601 time for the conversation to return.
         * @format date-time
         */
        snoozedUntil: string;
        /** Whether a new customer reply will immediately unsnooze the conversation. */
        unsnoozeOnCustomerReply: boolean;
      };
    };
    /** Remove the snooze from a Help Scout conversation and return it to its queue. */
    "helpscout.unsnooze_conversation": {
      input: {
        /**
         * The Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
      };
      output: {
        /** Whether Help Scout accepted the snooze removal. */
        updated: boolean;
        /**
         * The unsnoozed Help Scout conversation ID.
         * @exclusiveMinimum 0
         */
        conversationId: number;
      };
    };
  }
}
