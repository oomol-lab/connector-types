import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Salesflare account. */
    "salesflare.create_account": {
      input: {
        /**
         * The ID of the user who owns the account.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * The account name.
         * @minLength 1
         */
        name?: string;
        /**
         * The account domain.
         * @minLength 1
         */
        domain?: string;
        /**
         * The account logo URL.
         * @format uri
         */
        picture?: string;
        /** The account employee count. */
        size?: number;
        /**
         * The account website URL.
         * @format uri
         */
        website?: string;
        /** The account description. */
        description?: string | null;
        /** The primary address of the account. */
        address?: Record<string, unknown>;
        /** Addresses associated with the account. */
        addresses?: Array<Record<string, unknown>>;
        /** Social profiles associated with the account. */
        social_profiles?: Array<Record<string, unknown>>;
        /** The account phone number. */
        phone_number?: string | null;
        /**
         * The account email address.
         * @format email
         */
        email?: string;
        /** Salesflare tag IDs or tag objects for the account. */
        tags?: Array<unknown>;
        /** Salesflare custom field values keyed by API field name. */
        custom?: Record<string, unknown>;
        /** Additional official Salesflare fields to merge into the request body. */
        raw?: Record<string, unknown>;
      };
      output: {
        /** A Salesflare API object. */
        account: Record<string, unknown>;
      };
    };
    /** Create a Salesflare contact. */
    "salesflare.create_contact": {
      input: {
        /**
         * The ID of the user who owns the contact.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * The contact domain.
         * @minLength 1
         */
        domain?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The contact name prefix.
         * @minLength 1
         */
        prefix?: string;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstname?: string;
        /**
         * The contact middle name.
         * @minLength 1
         */
        middle?: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastname?: string;
        /**
         * The contact name suffix.
         * @minLength 1
         */
        suffix?: string;
        /**
         * The full name of the contact.
         * @minLength 1
         */
        name?: string;
        /**
         * The contact profile picture URL.
         * @format uri
         */
        picture?: string;
        /**
         * The contact birth date.
         * @format date
         */
        birth_date?: string;
        /** The contact phone number. */
        phone_number?: string | null;
        /** The contact home phone number. */
        home_phone_number?: string | null;
        /** The contact work phone number. */
        work_phone_number?: string | null;
        /** The contact mobile phone number. */
        mobile_phone_number?: string | null;
        /** The contact description. */
        description?: string | null;
        /**
         * The ID of the Salesflare account linked to the contact.
         * @exclusiveMinimum 0
         */
        account?: number;
        /** The primary address of the contact. */
        address?: Record<string, unknown>;
        /** Social profiles associated with the contact. */
        social_profiles?: Array<Record<string, unknown>>;
        /** The contact position details. */
        position?: Record<string, unknown>;
        /** Salesflare tag IDs or tag objects for the contact. */
        tags?: Array<unknown>;
        /** Salesflare custom field values keyed by API field name. */
        custom?: Record<string, unknown>;
        /** Additional official Salesflare fields to merge into the request body. */
        raw?: Record<string, unknown>;
      };
      output: {
        /** A Salesflare API object. */
        contact: Record<string, unknown>;
      };
    };
    /** Create a Salesflare opportunity. */
    "salesflare.create_opportunity": {
      input: {
        /**
         * The ID of the user who owns the opportunity.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * The ID of the Salesflare account linked to the opportunity.
         * @exclusiveMinimum 0
         */
        account?: number;
        /**
         * The Salesflare stage ID.
         * @exclusiveMinimum 0
         */
        stage?: number;
        /**
         * The opportunity name.
         * @minLength 1
         */
        name?: string;
        /** The opportunity value. */
        value?: number;
        /**
         * The expected opportunity close date.
         * @format date
         */
        close_date?: string;
        /** The opportunity probability. */
        probability?: number;
        /** The opportunity description. */
        description?: string | null;
        /**
         * The Salesflare opportunity status.
         * @minLength 1
         */
        status?: string;
        /** Salesflare tag IDs or tag objects for the opportunity. */
        tags?: Array<unknown>;
        /** Salesflare custom field values keyed by API field name. */
        custom?: Record<string, unknown>;
        /** Additional official Salesflare fields to merge into the request body. */
        raw?: Record<string, unknown>;
      };
      output: {
        /** A Salesflare API object. */
        opportunity: Record<string, unknown>;
      };
    };
    /** Create a Salesflare task. */
    "salesflare.create_task": {
      input: {
        /**
         * The ID of the account linked to the task.
         * @exclusiveMinimum 0
         */
        account?: number;
        /**
         * The task description.
         * @minLength 1
         */
        description?: string;
        /**
         * The task due date.
         * @format date
         */
        reminder_date?: string;
        /**
         * User IDs assigned to the task.
         * @minItems 1
         */
        assignees?: Array<number>;
        /** Whether the task is completed. */
        completed?: boolean;
        /** Additional official Salesflare fields to merge into the request body. */
        raw?: Record<string, unknown>;
      };
      output: {
        /** Whether the Salesflare operation succeeded. */
        success: boolean;
      };
    };
    /** Retrieve one Salesflare account by ID. */
    "salesflare.get_account": {
      input: {
        /**
         * The Salesflare account ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Salesflare API object. */
        account: Record<string, unknown>;
      };
    };
    /** Retrieve one Salesflare contact by ID. */
    "salesflare.get_contact": {
      input: {
        /**
         * The Salesflare contact ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Salesflare API object. */
        contact: Record<string, unknown>;
      };
    };
    /** Retrieve the current Salesflare API user. */
    "salesflare.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Salesflare API object. */
        user: Record<string, unknown>;
      };
    };
    /** Retrieve one Salesflare opportunity by ID. */
    "salesflare.get_opportunity": {
      input: {
        /**
         * The Salesflare opportunity ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Salesflare API object. */
        opportunity: Record<string, unknown>;
      };
    };
    /** List Salesflare accounts with optional search, pagination, and filters. */
    "salesflare.list_accounts": {
      input: {
        /**
         * Search text forwarded to Salesflare.
         * @minLength 1
         */
        search?: string;
        /**
         * The number of Salesflare records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based Salesflare result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Salesflare sort instructions, such as name or creation_date desc.
         * @minItems 1
         */
        order_by?: Array<string>;
        /** Salesflare custom filter expression. */
        custom?: string;
        /** Whether Salesflare should include detailed account data. */
        details?: boolean;
        /**
         * Filter accounts by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Account domains to filter by.
         * @minItems 1
         */
        domain?: Array<string>;
        /**
         * Salesflare hotness level: 1 room temp, 2 hot, or 3 on fire.
         * @minimum 1
         * @maximum 3
         */
        hotness?: number;
      };
      output: {
        /** Salesflare accounts returned by the API. */
        accounts: Array<Record<string, unknown>>;
      };
    };
    /** List Salesflare contacts with optional search, pagination, and filters. */
    "salesflare.list_contacts": {
      input: {
        /**
         * Search text forwarded to Salesflare.
         * @minLength 1
         */
        search?: string;
        /**
         * The number of Salesflare records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based Salesflare result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Salesflare sort instructions, such as name or creation_date desc.
         * @minItems 1
         */
        order_by?: Array<string>;
        /** Salesflare custom filter expression. */
        custom?: string;
        /**
         * Filter contacts by Salesflare contact ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * Filter contacts by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter contacts by email address.
         * @format email
         */
        email?: string;
        /**
         * Filter contacts by phone number.
         * @minLength 1
         */
        phone_number?: string;
        /**
         * Filter contacts by domain.
         * @minLength 1
         */
        domain?: string;
        /**
         * Filter contacts by Salesflare account ID.
         * @exclusiveMinimum 0
         */
        account?: number;
        /** Whether archived contacts should be included. */
        includeArchived?: boolean;
        /**
         * Filter contacts by Salesflare contact type.
         * @minLength 1
         */
        type?: string;
      };
      output: {
        /** Salesflare contacts returned by the API. */
        contacts: Array<Record<string, unknown>>;
      };
    };
    /** List Salesflare opportunities with optional search, pagination, and filters. */
    "salesflare.list_opportunities": {
      input: {
        /**
         * Search text forwarded to Salesflare.
         * @minLength 1
         */
        search?: string;
        /**
         * The number of Salesflare records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based Salesflare result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Salesflare sort instructions, such as name or creation_date desc.
         * @minItems 1
         */
        order_by?: Array<string>;
        /** Salesflare custom filter expression. */
        custom?: string;
        /**
         * Filter opportunities by Salesflare opportunity ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * Filter opportunities by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter opportunities by Salesflare status.
         * @minLength 1
         */
        status?: string;
        /**
         * Filter opportunities by Salesflare stage ID.
         * @exclusiveMinimum 0
         */
        stage?: number;
        /**
         * Filter opportunities by owner user ID.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * Filter opportunities by account ID.
         * @exclusiveMinimum 0
         */
        account?: number;
        /** Minimum opportunity value. */
        min_value?: number;
        /** Maximum opportunity value. */
        max_value?: number;
        /** Whether to return closed opportunities. */
        closed?: boolean;
        /** Whether to return done opportunities. */
        done?: boolean;
        /**
         * Salesflare hotness level: 1 room temp, 2 hot, or 3 on fire.
         * @minimum 1
         * @maximum 3
         */
        hotness?: number;
        /** Whether Salesflare should include detailed opportunity data. */
        details?: boolean;
      };
      output: {
        /** Salesflare opportunities returned by the API. */
        opportunities: Array<Record<string, unknown>>;
      };
    };
    /** List Salesflare tasks with optional search, pagination, and filters. */
    "salesflare.list_tasks": {
      input: {
        /**
         * Search text forwarded to Salesflare.
         * @minLength 1
         */
        search?: string;
        /**
         * The number of Salesflare records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based Salesflare result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Salesflare sort instructions, such as name or creation_date desc.
         * @minItems 1
         */
        order_by?: Array<string>;
        /** Salesflare custom filter expression. */
        custom?: string;
        /**
         * Filter tasks by Salesflare task ID.
         * @exclusiveMinimum 0
         */
        id?: number;
        /**
         * User IDs assigned to the task.
         * @minItems 1
         */
        assignees?: Array<number>;
        /**
         * Filter tasks by Salesflare task type.
         * @minLength 1
         */
        type?: string;
        /**
         * Filter tasks by account ID.
         * @exclusiveMinimum 0
         */
        account?: number;
      };
      output: {
        /** Salesflare tasks returned by the API. */
        tasks: Array<Record<string, unknown>>;
      };
    };
    /** Update a Salesflare account by ID. */
    "salesflare.update_account": {
      input: {
        /**
         * The Salesflare account ID.
         * @exclusiveMinimum 0
         */
        account_id: number;
        /**
         * The ID of the user who owns the account.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * The account name.
         * @minLength 1
         */
        name?: string;
        /**
         * The account domain.
         * @minLength 1
         */
        domain?: string;
        /**
         * The account logo URL.
         * @format uri
         */
        picture?: string;
        /** The account employee count. */
        size?: number;
        /**
         * The account website URL.
         * @format uri
         */
        website?: string;
        /** The account description. */
        description?: string | null;
        /** The primary address of the account. */
        address?: Record<string, unknown>;
        /** Addresses associated with the account. */
        addresses?: Array<Record<string, unknown>>;
        /** Social profiles associated with the account. */
        social_profiles?: Array<Record<string, unknown>>;
        /** The account phone number. */
        phone_number?: string | null;
        /**
         * The account email address.
         * @format email
         */
        email?: string;
        /** Salesflare tag IDs or tag objects for the account. */
        tags?: Array<unknown>;
        /** Salesflare custom field values keyed by API field name. */
        custom?: Record<string, unknown>;
        /** Additional official Salesflare fields to merge into the request body. */
        raw?: Record<string, unknown>;
      };
      output: {
        /** A Salesflare API object. */
        account: Record<string, unknown>;
      };
    };
    /** Update a Salesflare contact by ID. */
    "salesflare.update_contact": {
      input: {
        /**
         * The Salesflare contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
        /**
         * The ID of the user who owns the contact.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * The contact domain.
         * @minLength 1
         */
        domain?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /**
         * The contact name prefix.
         * @minLength 1
         */
        prefix?: string;
        /**
         * The contact first name.
         * @minLength 1
         */
        firstname?: string;
        /**
         * The contact middle name.
         * @minLength 1
         */
        middle?: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        lastname?: string;
        /**
         * The contact name suffix.
         * @minLength 1
         */
        suffix?: string;
        /**
         * The full name of the contact.
         * @minLength 1
         */
        name?: string;
        /**
         * The contact profile picture URL.
         * @format uri
         */
        picture?: string;
        /**
         * The contact birth date.
         * @format date
         */
        birth_date?: string;
        /** The contact phone number. */
        phone_number?: string | null;
        /** The contact home phone number. */
        home_phone_number?: string | null;
        /** The contact work phone number. */
        work_phone_number?: string | null;
        /** The contact mobile phone number. */
        mobile_phone_number?: string | null;
        /** The contact description. */
        description?: string | null;
        /**
         * The ID of the Salesflare account linked to the contact.
         * @exclusiveMinimum 0
         */
        account?: number;
        /** The primary address of the contact. */
        address?: Record<string, unknown>;
        /** Social profiles associated with the contact. */
        social_profiles?: Array<Record<string, unknown>>;
        /** The contact position details. */
        position?: Record<string, unknown>;
        /** Salesflare tag IDs or tag objects for the contact. */
        tags?: Array<unknown>;
        /** Salesflare custom field values keyed by API field name. */
        custom?: Record<string, unknown>;
        /** Additional official Salesflare fields to merge into the request body. */
        raw?: Record<string, unknown>;
      };
      output: {
        /** A Salesflare API object. */
        contact: Record<string, unknown>;
      };
    };
    /** Update a Salesflare opportunity by ID. */
    "salesflare.update_opportunity": {
      input: {
        /**
         * The Salesflare opportunity ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The ID of the user who owns the opportunity.
         * @exclusiveMinimum 0
         */
        owner?: number;
        /**
         * The ID of the Salesflare account linked to the opportunity.
         * @exclusiveMinimum 0
         */
        account?: number;
        /**
         * The Salesflare stage ID.
         * @exclusiveMinimum 0
         */
        stage?: number;
        /**
         * The opportunity name.
         * @minLength 1
         */
        name?: string;
        /** The opportunity value. */
        value?: number;
        /**
         * The expected opportunity close date.
         * @format date
         */
        close_date?: string;
        /** The opportunity probability. */
        probability?: number;
        /** The opportunity description. */
        description?: string | null;
        /**
         * The Salesflare opportunity status.
         * @minLength 1
         */
        status?: string;
        /** Salesflare tag IDs or tag objects for the opportunity. */
        tags?: Array<unknown>;
        /** Salesflare custom field values keyed by API field name. */
        custom?: Record<string, unknown>;
        /** Additional official Salesflare fields to merge into the request body. */
        raw?: Record<string, unknown>;
      };
      output: {
        /** A Salesflare API object. */
        opportunity: Record<string, unknown>;
      };
    };
    /** Update a Salesflare task by ID. */
    "salesflare.update_task": {
      input: {
        /**
         * The Salesflare task ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The ID of the account linked to the task.
         * @exclusiveMinimum 0
         */
        account?: number;
        /**
         * The task description.
         * @minLength 1
         */
        description?: string;
        /**
         * The task due date.
         * @format date
         */
        reminder_date?: string;
        /**
         * User IDs assigned to the task.
         * @minItems 1
         */
        assignees?: Array<number>;
        /** Whether the task is completed. */
        completed?: boolean;
        /** Additional official Salesflare fields to merge into the request body. */
        raw?: Record<string, unknown>;
      };
      output: {
        /** Whether the Salesflare operation succeeded. */
        success: boolean;
      };
    };
  }
}
