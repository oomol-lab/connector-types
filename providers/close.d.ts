import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Close contact under a specific lead. */
    "close.create_contact": {
      input: {
        /**
         * The Close lead ID that owns the contact.
         * @minLength 1
         */
        leadId: string;
        /**
         * The Close contact name.
         * @minLength 1
         */
        name: string;
        /** The Close contact title. */
        title?: string;
        /**
         * Contact emails.
         * @minItems 1
         */
        emails?: Array<{
          /**
           * The email address to send to Close.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email: string;
          /** The Close email label. */
          type?: string;
        }>;
        /**
         * Contact phones.
         * @minItems 1
         */
        phones?: Array<{
          /**
           * The phone number to send to Close.
           * @minLength 1
           */
          phone: string;
          /** The Close phone label. */
          type?: string;
        }>;
        /**
         * Contact URLs.
         * @minItems 1
         */
        urls?: Array<{
          /**
           * The URL to send to Close.
           * @minLength 1
           */
          url: string;
          /** The Close URL label. */
          type?: string;
        }>;
      };
      output: {
        /** The Close contact returned by the action. */
        contact: {
          /**
           * The Close contact ID.
           * @minLength 1
           */
          id: string;
          /** The lead ID linked to the contact. */
          lead_id?: string;
          /**
           * The Close contact name.
           * @minLength 1
           */
          name: string;
          /** The display name returned by Close. */
          display_name?: string;
          /** The contact title returned by Close. */
          title?: string | null;
          /** The organization ID linked to the contact. */
          organization_id?: string;
          /** The contact creation timestamp. */
          date_created?: string;
          /** The contact update timestamp. */
          date_updated?: string;
          /** The contact emails returned by Close. */
          emails?: Array<{
            /**
             * The email address returned by Close.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** The Close email label. */
            type?: string;
            /** Whether the email address is unsubscribed. */
            is_unsubscribed?: boolean | null;
            [key: string]: unknown;
          }>;
          /** The contact phones returned by Close. */
          phones?: Array<{
            /**
             * The phone number returned by Close.
             * @minLength 1
             */
            phone: string;
            /** The formatted phone number returned by Close. */
            phone_formatted?: string;
            /** The Close phone label. */
            type?: string;
            /** The phone country code returned by Close. */
            country?: string;
            /** Whether the phone number is unsubscribed. */
            is_unsubscribed?: boolean | null;
            [key: string]: unknown;
          }>;
          /** The contact URLs returned by Close. */
          urls?: Array<{
            /**
             * The URL returned by Close.
             * @minLength 1
             */
            url: string;
            /** The Close URL label. */
            type?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Close lead with optional nested contacts and addresses. */
    "close.create_lead": {
      input: {
        /**
         * The Close lead name.
         * @minLength 1
         */
        name: string;
        /** The Close lead description. */
        description?: string;
        /** The Close lead status ID. */
        statusId?: string;
        /** The lead website URL. */
        url?: string;
        /**
         * Lead addresses.
         * @minItems 1
         */
        addresses?: Array<{
          /** The address label to send to Close. */
          label?: string;
          /** The first address line to send to Close. */
          address1?: string;
          /** The second address line to send to Close. */
          address2?: string;
          /** The city to send to Close. */
          city?: string;
          /** The state or region to send to Close. */
          state?: string;
          /** The postal code to send to Close. */
          zipcode?: string;
          /** The country code to send to Close. */
          country?: string;
        }>;
        /**
         * Nested contacts created together with the lead.
         * @minItems 1
         */
        contacts?: Array<{
          /**
           * The nested contact name to send to Close.
           * @minLength 1
           */
          name: string;
          /** The nested contact title to send to Close. */
          title?: string;
          /**
           * Nested contact emails.
           * @minItems 1
           */
          emails?: Array<{
            /**
             * The email address to send to Close.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** The Close email label. */
            type?: string;
          }>;
          /**
           * Nested contact phones.
           * @minItems 1
           */
          phones?: Array<{
            /**
             * The phone number to send to Close.
             * @minLength 1
             */
            phone: string;
            /** The Close phone label. */
            type?: string;
          }>;
        }>;
      };
      output: {
        /** The Close lead returned by the action. */
        lead: {
          /** The Close lead ID. */
          id: string;
          /** The Close lead name. */
          name: string;
          /** The display name returned by Close. */
          display_name?: string;
          /** The lead status ID returned by Close. */
          status_id?: string;
          /** The lead status label returned by Close. */
          status_label?: string;
          /** The lead description. */
          description?: string;
          /** The lead website URL. */
          url?: string | null;
          /** The organization ID that owns the lead. */
          organization_id?: string;
          /** The lead creation timestamp. */
          date_created?: string;
          /** The lead update timestamp. */
          date_updated?: string;
          /** The contact IDs linked to the lead. */
          contact_ids?: Array<string>;
          /** The nested contacts returned with the lead when requested. */
          contacts?: Array<{
            /**
             * The nested contact name returned by Close.
             * @minLength 1
             */
            name: string;
            /** The nested contact title returned by Close. */
            title?: string | null;
            /** Nested contact emails returned by Close. */
            emails?: Array<{
              /**
               * The email address returned by Close.
               * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
               * @format email
               */
              email: string;
              /** The Close email label. */
              type?: string;
              /** Whether the email address is unsubscribed. */
              is_unsubscribed?: boolean | null;
              [key: string]: unknown;
            }>;
            /** Nested contact phones returned by Close. */
            phones?: Array<{
              /**
               * The phone number returned by Close.
               * @minLength 1
               */
              phone: string;
              /** The formatted phone number returned by Close. */
              phone_formatted?: string;
              /** The Close phone label. */
              type?: string;
              /** The phone country code returned by Close. */
              country?: string;
              /** Whether the phone number is unsubscribed. */
              is_unsubscribed?: boolean | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The addresses returned with the lead when requested. */
          addresses?: Array<{
            /** The address label returned by Close. */
            label?: string;
            /** The first address line returned by Close. */
            address_1?: string;
            /** The second address line returned by Close. */
            address_2?: string;
            /** The city returned by Close. */
            city?: string;
            /** The state or region returned by Close. */
            state?: string;
            /** The postal code returned by Close. */
            zipcode?: string;
            /** The country code returned by Close. */
            country?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Close opportunity for an existing lead. */
    "close.create_opportunity": {
      input: {
        /**
         * The Close lead ID that owns the opportunity.
         * @minLength 1
         */
        leadId: string;
        /** The Close contact ID linked to the opportunity. */
        contactId?: string;
        /** The Close user ID that owns the opportunity. */
        userId?: string;
        /** The Close opportunity status ID. */
        statusId?: string;
        /**
         * The Close opportunity confidence percentage.
         * @minimum 0
         * @maximum 100
         */
        confidence?: number;
        /** The Close opportunity note. */
        note?: string;
        /** The Close opportunity value. */
        value?: number;
        /** The Close opportunity value period. */
        valuePeriod?: "one_time" | "monthly" | "annual";
        /** The won date to send to Close. */
        dateWon?: string;
      };
      output: {
        /** The Close opportunity returned by the action. */
        opportunity: {
          /**
           * The Close opportunity ID.
           * @minLength 1
           */
          id: string;
          /**
           * The lead ID linked to the opportunity.
           * @minLength 1
           */
          lead_id: string;
          /** The lead name returned by Close. */
          lead_name?: string | null;
          /** The contact ID linked to the opportunity. */
          contact_id?: string | null;
          /** The contact name returned by Close. */
          contact_name?: string | null;
          /** The Close user ID that owns the opportunity. */
          user_id?: string;
          /** The Close opportunity owner name. */
          user_name?: string | null;
          /**
           * The Close opportunity status ID.
           * @minLength 1
           */
          status_id: string;
          /** The Close opportunity status label. */
          status_label?: string;
          /** The Close opportunity status display name. */
          status_display_name?: string;
          /** The Close opportunity status type. */
          status_type?: "won" | "lost" | "active";
          /** The Close opportunity value. */
          value?: number | null;
          /** The expected opportunity value returned by Close. */
          expected_value?: number | null;
          /** The annualized opportunity value returned by Close. */
          annualized_value?: number | null;
          /** The annualized expected opportunity value returned by Close. */
          annualized_expected_value?: number | null;
          /** The Close opportunity value period. */
          value_period?: "one_time" | "monthly" | "annual";
          /** The currency code returned by Close. */
          value_currency?: string | null;
          /** The formatted opportunity value returned by Close. */
          value_formatted?: string | null;
          /** The Close opportunity confidence percentage. */
          confidence?: number;
          /** The Close opportunity note. */
          note?: string | null;
          /** Whether the opportunity is stalled. */
          is_stalled?: boolean;
          /** The Close pipeline ID linked to the opportunity. */
          pipeline_id?: string | null;
          /** The Close pipeline name. */
          pipeline_name?: string | null;
          /** The organization ID linked to the opportunity. */
          organization_id?: string;
          /** The user ID that created the opportunity. */
          created_by?: string | null;
          /** The creator name returned by Close. */
          created_by_name?: string | null;
          /** The user ID that last updated the opportunity. */
          updated_by?: string | null;
          /** The updater name returned by Close. */
          updated_by_name?: string | null;
          /** The opportunity creation timestamp. */
          date_created?: string;
          /** The opportunity update timestamp. */
          date_updated?: string;
          /** The opportunity won date returned by Close. */
          date_won?: string | null;
          /** The opportunity lost timestamp returned by Close. */
          date_lost?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Create a lead-scoped Close task. */
    "close.create_task": {
      input: {
        /**
         * The Close lead ID that owns the task.
         * @minLength 1
         */
        leadId: string;
        /**
         * The Close task text.
         * @minLength 1
         */
        text: string;
        /** The Close user ID to assign the task to. */
        assignedTo?: string;
        /** The task date to send to Close. */
        date?: string;
        /** The task due date to send to Close. */
        dueDate?: string;
        /** Whether the task should start completed. */
        isComplete?: boolean;
        /** Whether the task should be dateless. */
        isDateless?: boolean;
      };
      output: {
        /** The Close task returned by the action. */
        task: {
          /**
           * The Close task ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Close task type.
           * @minLength 1
           */
          _type: string;
          /**
           * The Close task text.
           * @minLength 1
           */
          text: string;
          /** The lead ID linked to the task. */
          lead_id?: string;
          /** The contact ID linked to the task. */
          contact_id?: string | null;
          /** The user ID assigned to the task. */
          assigned_to?: string | null;
          /** The assignee name returned by Close. */
          assigned_to_name?: string | null;
          /** Whether the task is complete. */
          is_complete?: boolean;
          /** Whether the task has no scheduled date. */
          is_dateless?: boolean;
          /** The task date returned by Close. */
          date?: string | null;
          /** The task due date returned by Close. */
          due_date?: string | null;
          /** The task creation timestamp. */
          date_created?: string;
          /** The task update timestamp. */
          date_updated?: string;
          /** The user ID that created the task. */
          created_by?: string | null;
          /** The creator name returned by Close. */
          created_by_name?: string | null;
          /** The task priority returned by Close. */
          priority?: string | null;
          /** The task resolution returned by Close. */
          resolution?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a single Close contact by ID. */
    "close.get_contact": {
      input: {
        /**
         * The Close contact ID.
         * @minLength 1
         */
        contactId: string;
        /**
         * Additional Close contact fields to request through the _fields query parameter.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Close contact returned by the action. */
        contact: {
          /**
           * The Close contact ID.
           * @minLength 1
           */
          id: string;
          /** The lead ID linked to the contact. */
          lead_id?: string;
          /**
           * The Close contact name.
           * @minLength 1
           */
          name: string;
          /** The display name returned by Close. */
          display_name?: string;
          /** The contact title returned by Close. */
          title?: string | null;
          /** The organization ID linked to the contact. */
          organization_id?: string;
          /** The contact creation timestamp. */
          date_created?: string;
          /** The contact update timestamp. */
          date_updated?: string;
          /** The contact emails returned by Close. */
          emails?: Array<{
            /**
             * The email address returned by Close.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** The Close email label. */
            type?: string;
            /** Whether the email address is unsubscribed. */
            is_unsubscribed?: boolean | null;
            [key: string]: unknown;
          }>;
          /** The contact phones returned by Close. */
          phones?: Array<{
            /**
             * The phone number returned by Close.
             * @minLength 1
             */
            phone: string;
            /** The formatted phone number returned by Close. */
            phone_formatted?: string;
            /** The Close phone label. */
            type?: string;
            /** The phone country code returned by Close. */
            country?: string;
            /** Whether the phone number is unsubscribed. */
            is_unsubscribed?: boolean | null;
            [key: string]: unknown;
          }>;
          /** The contact URLs returned by Close. */
          urls?: Array<{
            /**
             * The URL returned by Close.
             * @minLength 1
             */
            url: string;
            /** The Close URL label. */
            type?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a single Close lead by ID. */
    "close.get_lead": {
      input: {
        /**
         * The Close lead ID.
         * @minLength 1
         */
        leadId: string;
        /**
         * Additional Close lead fields to request through the _fields query parameter.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Close lead returned by the action. */
        lead: {
          /** The Close lead ID. */
          id: string;
          /** The Close lead name. */
          name: string;
          /** The display name returned by Close. */
          display_name?: string;
          /** The lead status ID returned by Close. */
          status_id?: string;
          /** The lead status label returned by Close. */
          status_label?: string;
          /** The lead description. */
          description?: string;
          /** The lead website URL. */
          url?: string | null;
          /** The organization ID that owns the lead. */
          organization_id?: string;
          /** The lead creation timestamp. */
          date_created?: string;
          /** The lead update timestamp. */
          date_updated?: string;
          /** The contact IDs linked to the lead. */
          contact_ids?: Array<string>;
          /** The nested contacts returned with the lead when requested. */
          contacts?: Array<{
            /**
             * The nested contact name returned by Close.
             * @minLength 1
             */
            name: string;
            /** The nested contact title returned by Close. */
            title?: string | null;
            /** Nested contact emails returned by Close. */
            emails?: Array<{
              /**
               * The email address returned by Close.
               * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
               * @format email
               */
              email: string;
              /** The Close email label. */
              type?: string;
              /** Whether the email address is unsubscribed. */
              is_unsubscribed?: boolean | null;
              [key: string]: unknown;
            }>;
            /** Nested contact phones returned by Close. */
            phones?: Array<{
              /**
               * The phone number returned by Close.
               * @minLength 1
               */
              phone: string;
              /** The formatted phone number returned by Close. */
              phone_formatted?: string;
              /** The Close phone label. */
              type?: string;
              /** The phone country code returned by Close. */
              country?: string;
              /** Whether the phone number is unsubscribed. */
              is_unsubscribed?: boolean | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The addresses returned with the lead when requested. */
          addresses?: Array<{
            /** The address label returned by Close. */
            label?: string;
            /** The first address line returned by Close. */
            address_1?: string;
            /** The second address line returned by Close. */
            address_2?: string;
            /** The city returned by Close. */
            city?: string;
            /** The state or region returned by Close. */
            state?: string;
            /** The postal code returned by Close. */
            zipcode?: string;
            /** The country code returned by Close. */
            country?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a single Close opportunity by ID. */
    "close.get_opportunity": {
      input: {
        /**
         * The Close opportunity ID.
         * @minLength 1
         */
        opportunityId: string;
        /**
         * Additional Close opportunity fields to request through the _fields query parameter.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Close opportunity returned by the action. */
        opportunity: {
          /**
           * The Close opportunity ID.
           * @minLength 1
           */
          id: string;
          /**
           * The lead ID linked to the opportunity.
           * @minLength 1
           */
          lead_id: string;
          /** The lead name returned by Close. */
          lead_name?: string | null;
          /** The contact ID linked to the opportunity. */
          contact_id?: string | null;
          /** The contact name returned by Close. */
          contact_name?: string | null;
          /** The Close user ID that owns the opportunity. */
          user_id?: string;
          /** The Close opportunity owner name. */
          user_name?: string | null;
          /**
           * The Close opportunity status ID.
           * @minLength 1
           */
          status_id: string;
          /** The Close opportunity status label. */
          status_label?: string;
          /** The Close opportunity status display name. */
          status_display_name?: string;
          /** The Close opportunity status type. */
          status_type?: "won" | "lost" | "active";
          /** The Close opportunity value. */
          value?: number | null;
          /** The expected opportunity value returned by Close. */
          expected_value?: number | null;
          /** The annualized opportunity value returned by Close. */
          annualized_value?: number | null;
          /** The annualized expected opportunity value returned by Close. */
          annualized_expected_value?: number | null;
          /** The Close opportunity value period. */
          value_period?: "one_time" | "monthly" | "annual";
          /** The currency code returned by Close. */
          value_currency?: string | null;
          /** The formatted opportunity value returned by Close. */
          value_formatted?: string | null;
          /** The Close opportunity confidence percentage. */
          confidence?: number;
          /** The Close opportunity note. */
          note?: string | null;
          /** Whether the opportunity is stalled. */
          is_stalled?: boolean;
          /** The Close pipeline ID linked to the opportunity. */
          pipeline_id?: string | null;
          /** The Close pipeline name. */
          pipeline_name?: string | null;
          /** The organization ID linked to the opportunity. */
          organization_id?: string;
          /** The user ID that created the opportunity. */
          created_by?: string | null;
          /** The creator name returned by Close. */
          created_by_name?: string | null;
          /** The user ID that last updated the opportunity. */
          updated_by?: string | null;
          /** The updater name returned by Close. */
          updated_by_name?: string | null;
          /** The opportunity creation timestamp. */
          date_created?: string;
          /** The opportunity update timestamp. */
          date_updated?: string;
          /** The opportunity won date returned by Close. */
          date_won?: string | null;
          /** The opportunity lost timestamp returned by Close. */
          date_lost?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Fetch a single Close task by ID. */
    "close.get_task": {
      input: {
        /**
         * The Close task ID.
         * @minLength 1
         */
        taskId: string;
        /**
         * Additional Close task fields to request through the _fields query parameter.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Close task returned by the action. */
        task: {
          /**
           * The Close task ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Close task type.
           * @minLength 1
           */
          _type: string;
          /**
           * The Close task text.
           * @minLength 1
           */
          text: string;
          /** The lead ID linked to the task. */
          lead_id?: string;
          /** The contact ID linked to the task. */
          contact_id?: string | null;
          /** The user ID assigned to the task. */
          assigned_to?: string | null;
          /** The assignee name returned by Close. */
          assigned_to_name?: string | null;
          /** Whether the task is complete. */
          is_complete?: boolean;
          /** Whether the task has no scheduled date. */
          is_dateless?: boolean;
          /** The task date returned by Close. */
          date?: string | null;
          /** The task due date returned by Close. */
          due_date?: string | null;
          /** The task creation timestamp. */
          date_created?: string;
          /** The task update timestamp. */
          date_updated?: string;
          /** The user ID that created the task. */
          created_by?: string | null;
          /** The creator name returned by Close. */
          created_by_name?: string | null;
          /** The task priority returned by Close. */
          priority?: string | null;
          /** The task resolution returned by Close. */
          resolution?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Close contacts with optional lead filtering and pagination. */
    "close.list_contacts": {
      input: {
        /**
         * Maximum number of Close contacts to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of Close contacts to skip before this page.
         * @minimum 0
         */
        skip?: number;
        /** Only return contacts linked to this Close lead ID. */
        leadId?: string;
        /**
         * Additional Close contact fields to request through the _fields query parameter.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Close contacts returned for the current page. */
        contacts: Array<{
          /**
           * The Close contact ID.
           * @minLength 1
           */
          id: string;
          /** The lead ID linked to the contact. */
          lead_id?: string;
          /**
           * The Close contact name.
           * @minLength 1
           */
          name: string;
          /** The display name returned by Close. */
          display_name?: string;
          /** The contact title returned by Close. */
          title?: string | null;
          /** The organization ID linked to the contact. */
          organization_id?: string;
          /** The contact creation timestamp. */
          date_created?: string;
          /** The contact update timestamp. */
          date_updated?: string;
          /** The contact emails returned by Close. */
          emails?: Array<{
            /**
             * The email address returned by Close.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** The Close email label. */
            type?: string;
            /** Whether the email address is unsubscribed. */
            is_unsubscribed?: boolean | null;
            [key: string]: unknown;
          }>;
          /** The contact phones returned by Close. */
          phones?: Array<{
            /**
             * The phone number returned by Close.
             * @minLength 1
             */
            phone: string;
            /** The formatted phone number returned by Close. */
            phone_formatted?: string;
            /** The Close phone label. */
            type?: string;
            /** The phone country code returned by Close. */
            country?: string;
            /** Whether the phone number is unsubscribed. */
            is_unsubscribed?: boolean | null;
            [key: string]: unknown;
          }>;
          /** The contact URLs returned by Close. */
          urls?: Array<{
            /**
             * The URL returned by Close.
             * @minLength 1
             */
            url: string;
            /** The Close URL label. */
            type?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /**
         * Whether Close has another page available.
         * @default false
         */
        hasMore: boolean;
      };
    };
    /** List Close leads with optional pagination and field selection. */
    "close.list_leads": {
      input: {
        /**
         * Maximum number of Close leads to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of Close leads to skip before this page.
         * @minimum 0
         */
        skip?: number;
        /**
         * Additional Close lead fields to request through the _fields query parameter.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Close leads returned for the current page. */
        leads: Array<{
          /** The Close lead ID. */
          id: string;
          /** The Close lead name. */
          name: string;
          /** The display name returned by Close. */
          display_name?: string;
          /** The lead status ID returned by Close. */
          status_id?: string;
          /** The lead status label returned by Close. */
          status_label?: string;
          /** The lead description. */
          description?: string;
          /** The lead website URL. */
          url?: string | null;
          /** The organization ID that owns the lead. */
          organization_id?: string;
          /** The lead creation timestamp. */
          date_created?: string;
          /** The lead update timestamp. */
          date_updated?: string;
          /** The contact IDs linked to the lead. */
          contact_ids?: Array<string>;
          /** The nested contacts returned with the lead when requested. */
          contacts?: Array<{
            /**
             * The nested contact name returned by Close.
             * @minLength 1
             */
            name: string;
            /** The nested contact title returned by Close. */
            title?: string | null;
            /** Nested contact emails returned by Close. */
            emails?: Array<{
              /**
               * The email address returned by Close.
               * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
               * @format email
               */
              email: string;
              /** The Close email label. */
              type?: string;
              /** Whether the email address is unsubscribed. */
              is_unsubscribed?: boolean | null;
              [key: string]: unknown;
            }>;
            /** Nested contact phones returned by Close. */
            phones?: Array<{
              /**
               * The phone number returned by Close.
               * @minLength 1
               */
              phone: string;
              /** The formatted phone number returned by Close. */
              phone_formatted?: string;
              /** The Close phone label. */
              type?: string;
              /** The phone country code returned by Close. */
              country?: string;
              /** Whether the phone number is unsubscribed. */
              is_unsubscribed?: boolean | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The addresses returned with the lead when requested. */
          addresses?: Array<{
            /** The address label returned by Close. */
            label?: string;
            /** The first address line returned by Close. */
            address_1?: string;
            /** The second address line returned by Close. */
            address_2?: string;
            /** The city returned by Close. */
            city?: string;
            /** The state or region returned by Close. */
            state?: string;
            /** The postal code returned by Close. */
            zipcode?: string;
            /** The country code returned by Close. */
            country?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /**
         * Whether Close has another page available.
         * @default false
         */
        hasMore: boolean;
      };
    };
    /** List Close opportunities with stable workflow filters and pagination. */
    "close.list_opportunities": {
      input: {
        /**
         * Maximum number of Close opportunities to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of Close opportunities to skip before this page.
         * @minimum 0
         */
        skip?: number;
        /** Only return opportunities linked to this Close lead ID. */
        leadId?: string;
        /** Only return opportunities owned by this Close user ID. */
        userId?: string;
        /** Only return opportunities in this Close status ID. */
        statusId?: string;
        /** Only return opportunities with this Close status type. */
        statusType?: "won" | "lost" | "active";
        /** Only return opportunities with this Close value period. */
        valuePeriod?: "one_time" | "monthly" | "annual";
        /** Only return opportunities with this stalled flag. */
        isStalled?: boolean;
        /** The Close search query applied to opportunities. */
        query?: string;
        /** The Close lead search query applied before opportunity filtering. */
        leadQuery?: string;
        /** The Close _order_by value for sorting opportunities. */
        orderBy?: string;
        /**
         * Additional Close opportunity fields to request through the _fields query parameter.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Close opportunities returned for the current page. */
        opportunities: Array<{
          /**
           * The Close opportunity ID.
           * @minLength 1
           */
          id: string;
          /**
           * The lead ID linked to the opportunity.
           * @minLength 1
           */
          lead_id: string;
          /** The lead name returned by Close. */
          lead_name?: string | null;
          /** The contact ID linked to the opportunity. */
          contact_id?: string | null;
          /** The contact name returned by Close. */
          contact_name?: string | null;
          /** The Close user ID that owns the opportunity. */
          user_id?: string;
          /** The Close opportunity owner name. */
          user_name?: string | null;
          /**
           * The Close opportunity status ID.
           * @minLength 1
           */
          status_id: string;
          /** The Close opportunity status label. */
          status_label?: string;
          /** The Close opportunity status display name. */
          status_display_name?: string;
          /** The Close opportunity status type. */
          status_type?: "won" | "lost" | "active";
          /** The Close opportunity value. */
          value?: number | null;
          /** The expected opportunity value returned by Close. */
          expected_value?: number | null;
          /** The annualized opportunity value returned by Close. */
          annualized_value?: number | null;
          /** The annualized expected opportunity value returned by Close. */
          annualized_expected_value?: number | null;
          /** The Close opportunity value period. */
          value_period?: "one_time" | "monthly" | "annual";
          /** The currency code returned by Close. */
          value_currency?: string | null;
          /** The formatted opportunity value returned by Close. */
          value_formatted?: string | null;
          /** The Close opportunity confidence percentage. */
          confidence?: number;
          /** The Close opportunity note. */
          note?: string | null;
          /** Whether the opportunity is stalled. */
          is_stalled?: boolean;
          /** The Close pipeline ID linked to the opportunity. */
          pipeline_id?: string | null;
          /** The Close pipeline name. */
          pipeline_name?: string | null;
          /** The organization ID linked to the opportunity. */
          organization_id?: string;
          /** The user ID that created the opportunity. */
          created_by?: string | null;
          /** The creator name returned by Close. */
          created_by_name?: string | null;
          /** The user ID that last updated the opportunity. */
          updated_by?: string | null;
          /** The updater name returned by Close. */
          updated_by_name?: string | null;
          /** The opportunity creation timestamp. */
          date_created?: string;
          /** The opportunity update timestamp. */
          date_updated?: string;
          /** The opportunity won date returned by Close. */
          date_won?: string | null;
          /** The opportunity lost timestamp returned by Close. */
          date_lost?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * Whether Close has another page available.
         * @default false
         */
        hasMore: boolean;
      };
    };
    /** List Close tasks with lead, assignee, completion, and view filters. */
    "close.list_tasks": {
      input: {
        /**
         * Maximum number of Close tasks to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of Close tasks to skip before this page.
         * @minimum 0
         */
        skip?: number;
        /** Only return tasks linked to this Close lead ID. */
        leadId?: string;
        /** Only return tasks assigned to this Close user ID. */
        assignedTo?: string;
        /** Only return tasks with this completion state. */
        isComplete?: boolean;
        /** The Close task view filter such as inbox or archive. */
        view?: string;
        /**
         * Additional Close task fields to request through the _fields query parameter.
         * @minItems 1
         */
        includeFields?: Array<string>;
      };
      output: {
        /** The Close tasks returned for the current page. */
        tasks: Array<{
          /**
           * The Close task ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Close task type.
           * @minLength 1
           */
          _type: string;
          /**
           * The Close task text.
           * @minLength 1
           */
          text: string;
          /** The lead ID linked to the task. */
          lead_id?: string;
          /** The contact ID linked to the task. */
          contact_id?: string | null;
          /** The user ID assigned to the task. */
          assigned_to?: string | null;
          /** The assignee name returned by Close. */
          assigned_to_name?: string | null;
          /** Whether the task is complete. */
          is_complete?: boolean;
          /** Whether the task has no scheduled date. */
          is_dateless?: boolean;
          /** The task date returned by Close. */
          date?: string | null;
          /** The task due date returned by Close. */
          due_date?: string | null;
          /** The task creation timestamp. */
          date_created?: string;
          /** The task update timestamp. */
          date_updated?: string;
          /** The user ID that created the task. */
          created_by?: string | null;
          /** The creator name returned by Close. */
          created_by_name?: string | null;
          /** The task priority returned by Close. */
          priority?: string | null;
          /** The task resolution returned by Close. */
          resolution?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * Whether Close has another page available.
         * @default false
         */
        hasMore: boolean;
      };
    };
    /** Update writable fields on an existing Close contact. */
    "close.update_contact": {
      input: {
        /**
         * The Close contact ID.
         * @minLength 1
         */
        contactId: string;
        /** The Close contact name. */
        name?: string;
        /** The Close contact title. */
        title?: string;
        /**
         * Contact emails.
         * @minItems 1
         */
        emails?: Array<{
          /**
           * The email address to send to Close.
           * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
           * @format email
           */
          email: string;
          /** The Close email label. */
          type?: string;
        }>;
        /**
         * Contact phones.
         * @minItems 1
         */
        phones?: Array<{
          /**
           * The phone number to send to Close.
           * @minLength 1
           */
          phone: string;
          /** The Close phone label. */
          type?: string;
        }>;
        /**
         * Contact URLs.
         * @minItems 1
         */
        urls?: Array<{
          /**
           * The URL to send to Close.
           * @minLength 1
           */
          url: string;
          /** The Close URL label. */
          type?: string;
        }>;
      };
      output: {
        /** The Close contact returned by the action. */
        contact: {
          /**
           * The Close contact ID.
           * @minLength 1
           */
          id: string;
          /** The lead ID linked to the contact. */
          lead_id?: string;
          /**
           * The Close contact name.
           * @minLength 1
           */
          name: string;
          /** The display name returned by Close. */
          display_name?: string;
          /** The contact title returned by Close. */
          title?: string | null;
          /** The organization ID linked to the contact. */
          organization_id?: string;
          /** The contact creation timestamp. */
          date_created?: string;
          /** The contact update timestamp. */
          date_updated?: string;
          /** The contact emails returned by Close. */
          emails?: Array<{
            /**
             * The email address returned by Close.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** The Close email label. */
            type?: string;
            /** Whether the email address is unsubscribed. */
            is_unsubscribed?: boolean | null;
            [key: string]: unknown;
          }>;
          /** The contact phones returned by Close. */
          phones?: Array<{
            /**
             * The phone number returned by Close.
             * @minLength 1
             */
            phone: string;
            /** The formatted phone number returned by Close. */
            phone_formatted?: string;
            /** The Close phone label. */
            type?: string;
            /** The phone country code returned by Close. */
            country?: string;
            /** Whether the phone number is unsubscribed. */
            is_unsubscribed?: boolean | null;
            [key: string]: unknown;
          }>;
          /** The contact URLs returned by Close. */
          urls?: Array<{
            /**
             * The URL returned by Close.
             * @minLength 1
             */
            url: string;
            /** The Close URL label. */
            type?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Update writable fields on an existing Close lead. */
    "close.update_lead": {
      input: {
        /**
         * The Close lead ID.
         * @minLength 1
         */
        leadId: string;
        /** The Close lead name. */
        name?: string;
        /** The Close lead description. */
        description?: string;
        /** The Close lead status ID. */
        statusId?: string;
        /** The lead website URL. */
        url?: string;
      };
      output: {
        /** The Close lead returned by the action. */
        lead: {
          /** The Close lead ID. */
          id: string;
          /** The Close lead name. */
          name: string;
          /** The display name returned by Close. */
          display_name?: string;
          /** The lead status ID returned by Close. */
          status_id?: string;
          /** The lead status label returned by Close. */
          status_label?: string;
          /** The lead description. */
          description?: string;
          /** The lead website URL. */
          url?: string | null;
          /** The organization ID that owns the lead. */
          organization_id?: string;
          /** The lead creation timestamp. */
          date_created?: string;
          /** The lead update timestamp. */
          date_updated?: string;
          /** The contact IDs linked to the lead. */
          contact_ids?: Array<string>;
          /** The nested contacts returned with the lead when requested. */
          contacts?: Array<{
            /**
             * The nested contact name returned by Close.
             * @minLength 1
             */
            name: string;
            /** The nested contact title returned by Close. */
            title?: string | null;
            /** Nested contact emails returned by Close. */
            emails?: Array<{
              /**
               * The email address returned by Close.
               * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
               * @format email
               */
              email: string;
              /** The Close email label. */
              type?: string;
              /** Whether the email address is unsubscribed. */
              is_unsubscribed?: boolean | null;
              [key: string]: unknown;
            }>;
            /** Nested contact phones returned by Close. */
            phones?: Array<{
              /**
               * The phone number returned by Close.
               * @minLength 1
               */
              phone: string;
              /** The formatted phone number returned by Close. */
              phone_formatted?: string;
              /** The Close phone label. */
              type?: string;
              /** The phone country code returned by Close. */
              country?: string;
              /** Whether the phone number is unsubscribed. */
              is_unsubscribed?: boolean | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          /** The addresses returned with the lead when requested. */
          addresses?: Array<{
            /** The address label returned by Close. */
            label?: string;
            /** The first address line returned by Close. */
            address_1?: string;
            /** The second address line returned by Close. */
            address_2?: string;
            /** The city returned by Close. */
            city?: string;
            /** The state or region returned by Close. */
            state?: string;
            /** The postal code returned by Close. */
            zipcode?: string;
            /** The country code returned by Close. */
            country?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Update writable fields on an existing Close opportunity. */
    "close.update_opportunity": {
      input: {
        /**
         * The Close opportunity ID.
         * @minLength 1
         */
        opportunityId: string;
        /** The Close contact ID linked to the opportunity. */
        contactId?: string;
        /** The Close user ID that owns the opportunity. */
        userId?: string;
        /** The Close opportunity status ID. */
        statusId?: string;
        /**
         * The Close opportunity confidence percentage.
         * @minimum 0
         * @maximum 100
         */
        confidence?: number;
        /** The Close opportunity note. */
        note?: string;
        /** The Close opportunity value. */
        value?: number;
        /** The Close opportunity value period. */
        valuePeriod?: "one_time" | "monthly" | "annual";
        /** The won date to send to Close. */
        dateWon?: string;
      };
      output: {
        /** The Close opportunity returned by the action. */
        opportunity: {
          /**
           * The Close opportunity ID.
           * @minLength 1
           */
          id: string;
          /**
           * The lead ID linked to the opportunity.
           * @minLength 1
           */
          lead_id: string;
          /** The lead name returned by Close. */
          lead_name?: string | null;
          /** The contact ID linked to the opportunity. */
          contact_id?: string | null;
          /** The contact name returned by Close. */
          contact_name?: string | null;
          /** The Close user ID that owns the opportunity. */
          user_id?: string;
          /** The Close opportunity owner name. */
          user_name?: string | null;
          /**
           * The Close opportunity status ID.
           * @minLength 1
           */
          status_id: string;
          /** The Close opportunity status label. */
          status_label?: string;
          /** The Close opportunity status display name. */
          status_display_name?: string;
          /** The Close opportunity status type. */
          status_type?: "won" | "lost" | "active";
          /** The Close opportunity value. */
          value?: number | null;
          /** The expected opportunity value returned by Close. */
          expected_value?: number | null;
          /** The annualized opportunity value returned by Close. */
          annualized_value?: number | null;
          /** The annualized expected opportunity value returned by Close. */
          annualized_expected_value?: number | null;
          /** The Close opportunity value period. */
          value_period?: "one_time" | "monthly" | "annual";
          /** The currency code returned by Close. */
          value_currency?: string | null;
          /** The formatted opportunity value returned by Close. */
          value_formatted?: string | null;
          /** The Close opportunity confidence percentage. */
          confidence?: number;
          /** The Close opportunity note. */
          note?: string | null;
          /** Whether the opportunity is stalled. */
          is_stalled?: boolean;
          /** The Close pipeline ID linked to the opportunity. */
          pipeline_id?: string | null;
          /** The Close pipeline name. */
          pipeline_name?: string | null;
          /** The organization ID linked to the opportunity. */
          organization_id?: string;
          /** The user ID that created the opportunity. */
          created_by?: string | null;
          /** The creator name returned by Close. */
          created_by_name?: string | null;
          /** The user ID that last updated the opportunity. */
          updated_by?: string | null;
          /** The updater name returned by Close. */
          updated_by_name?: string | null;
          /** The opportunity creation timestamp. */
          date_created?: string;
          /** The opportunity update timestamp. */
          date_updated?: string;
          /** The opportunity won date returned by Close. */
          date_won?: string | null;
          /** The opportunity lost timestamp returned by Close. */
          date_lost?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Update writable fields on an existing Close task. */
    "close.update_task": {
      input: {
        /**
         * The Close task ID.
         * @minLength 1
         */
        taskId: string;
        /** The Close task text. */
        text?: string;
        /** The Close user ID to assign the task to. */
        assignedTo?: string;
        /** The task date to send to Close. */
        date?: string;
        /** The task due date to send to Close. */
        dueDate?: string;
        /** Whether the task is complete. */
        isComplete?: boolean;
        /** Whether the task is dateless. */
        isDateless?: boolean;
      };
      output: {
        /** The Close task returned by the action. */
        task: {
          /**
           * The Close task ID.
           * @minLength 1
           */
          id: string;
          /**
           * The Close task type.
           * @minLength 1
           */
          _type: string;
          /**
           * The Close task text.
           * @minLength 1
           */
          text: string;
          /** The lead ID linked to the task. */
          lead_id?: string;
          /** The contact ID linked to the task. */
          contact_id?: string | null;
          /** The user ID assigned to the task. */
          assigned_to?: string | null;
          /** The assignee name returned by Close. */
          assigned_to_name?: string | null;
          /** Whether the task is complete. */
          is_complete?: boolean;
          /** Whether the task has no scheduled date. */
          is_dateless?: boolean;
          /** The task date returned by Close. */
          date?: string | null;
          /** The task due date returned by Close. */
          due_date?: string | null;
          /** The task creation timestamp. */
          date_created?: string;
          /** The task update timestamp. */
          date_updated?: string;
          /** The user ID that created the task. */
          created_by?: string | null;
          /** The creator name returned by Close. */
          created_by_name?: string | null;
          /** The task priority returned by Close. */
          priority?: string | null;
          /** The task resolution returned by Close. */
          resolution?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
