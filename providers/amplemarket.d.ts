import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Mark an Amplemarket task as completed. */
    "amplemarket.complete_task": {
      input: {
        /**
         * Amplemarket task ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Amplemarket task record. */
        task: {
          /** Amplemarket task ID. */
          id?: string;
          /** Task type. */
          type?: string;
          /** Task status. */
          status?: string;
          /** Task due timestamp in ISO 8601 format. */
          due_at?: string | null;
          /** Task completion timestamp when available. */
          completed_at?: string | null;
          /** Task skipped timestamp when available. */
          skipped_at?: string | null;
          /** Amplemarket contact record. */
          contact?: {
            /** Amplemarket contact ID. */
            id?: string;
            /** Full name of the contact. */
            name?: string | null;
            /** First name of the contact. */
            first_name?: string | null;
            /** Last name of the contact. */
            last_name?: string | null;
            /** Email address of the contact. */
            email?: string | null;
            /**
             * LinkedIn profile URL of the contact.
             * @format uri
             */
            linkedin_url?: string | null;
            /** Job title of the contact. */
            title?: string | null;
            /** Location of the contact. */
            location?: string | null;
            /** Time zone of the contact. */
            time_zone?: string | null;
            /** Company name of the contact. */
            company_name?: string | null;
            /** Company domain of the contact. */
            company_domain?: string | null;
            /** Owner email or identifier for the contact. */
            owner?: string | null;
            /** Last contacted timestamp in ISO 8601 format. */
            last_contacted_at?: string | null;
            /** Phone numbers attached to the contact. */
            phone_numbers?: Array<{
              /** Object type returned by Amplemarket. */
              object?: string;
              /** Phone number ID. */
              id?: string;
              /** Phone number value. */
              number?: string;
              /** Phone number type. */
              type?: string;
              /** Source of the phone number. */
              source?: string;
              /** Whether the number is marked as wrong. */
              is_wrong_number?: boolean;
              /** Whether the number is on a DNC list when available. */
              is_dnc_listed?: boolean;
              [key: string]: unknown;
            }>;
            /** Recent activity for the contact. */
            recent_activity?: Array<{
              /** Activity timestamp in ISO 8601 format. */
              event_at?: string;
              /** Activity event type. */
              event_type?: string;
              /** Related sequence ID when available. */
              sequence_id?: string | null;
              /** Related sequence name when available. */
              sequence_name?: string | null;
              /** Related sequence type when available. */
              sequence_type?: string | null;
              /** Activity description when available. */
              description?: string | null;
              /** Activity notes when available. */
              notes?: string | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Lead or prospect object attached to the task. */
          lead?: Record<string, unknown>;
          /** Sequence object attached to the task. */
          sequence?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get account details for the authenticated Amplemarket API key. */
    "amplemarket.get_account_details": {
      input: Record<string, never>;
      output: {
        /** Amplemarket account details. */
        account: {
          /** Amplemarket account ID. */
          id: string;
          /** Amplemarket account name. */
          name: string;
        };
      };
    };
    /** Retrieve an Amplemarket contact by contact ID. */
    "amplemarket.get_contact": {
      input: {
        /**
         * Amplemarket contact ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Amplemarket contact record. */
        contact: {
          /** Amplemarket contact ID. */
          id?: string;
          /** Full name of the contact. */
          name?: string | null;
          /** First name of the contact. */
          first_name?: string | null;
          /** Last name of the contact. */
          last_name?: string | null;
          /** Email address of the contact. */
          email?: string | null;
          /**
           * LinkedIn profile URL of the contact.
           * @format uri
           */
          linkedin_url?: string | null;
          /** Job title of the contact. */
          title?: string | null;
          /** Location of the contact. */
          location?: string | null;
          /** Time zone of the contact. */
          time_zone?: string | null;
          /** Company name of the contact. */
          company_name?: string | null;
          /** Company domain of the contact. */
          company_domain?: string | null;
          /** Owner email or identifier for the contact. */
          owner?: string | null;
          /** Last contacted timestamp in ISO 8601 format. */
          last_contacted_at?: string | null;
          /** Phone numbers attached to the contact. */
          phone_numbers?: Array<{
            /** Object type returned by Amplemarket. */
            object?: string;
            /** Phone number ID. */
            id?: string;
            /** Phone number value. */
            number?: string;
            /** Phone number type. */
            type?: string;
            /** Source of the phone number. */
            source?: string;
            /** Whether the number is marked as wrong. */
            is_wrong_number?: boolean;
            /** Whether the number is on a DNC list when available. */
            is_dnc_listed?: boolean;
            [key: string]: unknown;
          }>;
          /** Recent activity for the contact. */
          recent_activity?: Array<{
            /** Activity timestamp in ISO 8601 format. */
            event_at?: string;
            /** Activity event type. */
            event_type?: string;
            /** Related sequence ID when available. */
            sequence_id?: string | null;
            /** Related sequence name when available. */
            sequence_name?: string | null;
            /** Related sequence type when available. */
            sequence_type?: string | null;
            /** Activity description when available. */
            description?: string | null;
            /** Activity notes when available. */
            notes?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve an Amplemarket contact by email address. */
    "amplemarket.get_contact_by_email": {
      input: {
        /**
         * Email address of the Amplemarket contact.
         * @format email
         */
        email: string;
      };
      output: {
        /** Amplemarket contact record. */
        contact: {
          /** Amplemarket contact ID. */
          id?: string;
          /** Full name of the contact. */
          name?: string | null;
          /** First name of the contact. */
          first_name?: string | null;
          /** Last name of the contact. */
          last_name?: string | null;
          /** Email address of the contact. */
          email?: string | null;
          /**
           * LinkedIn profile URL of the contact.
           * @format uri
           */
          linkedin_url?: string | null;
          /** Job title of the contact. */
          title?: string | null;
          /** Location of the contact. */
          location?: string | null;
          /** Time zone of the contact. */
          time_zone?: string | null;
          /** Company name of the contact. */
          company_name?: string | null;
          /** Company domain of the contact. */
          company_domain?: string | null;
          /** Owner email or identifier for the contact. */
          owner?: string | null;
          /** Last contacted timestamp in ISO 8601 format. */
          last_contacted_at?: string | null;
          /** Phone numbers attached to the contact. */
          phone_numbers?: Array<{
            /** Object type returned by Amplemarket. */
            object?: string;
            /** Phone number ID. */
            id?: string;
            /** Phone number value. */
            number?: string;
            /** Phone number type. */
            type?: string;
            /** Source of the phone number. */
            source?: string;
            /** Whether the number is marked as wrong. */
            is_wrong_number?: boolean;
            /** Whether the number is on a DNC list when available. */
            is_dnc_listed?: boolean;
            [key: string]: unknown;
          }>;
          /** Recent activity for the contact. */
          recent_activity?: Array<{
            /** Activity timestamp in ISO 8601 format. */
            event_at?: string;
            /** Activity event type. */
            event_type?: string;
            /** Related sequence ID when available. */
            sequence_id?: string | null;
            /** Related sequence name when available. */
            sequence_name?: string | null;
            /** Related sequence type when available. */
            sequence_type?: string | null;
            /** Activity description when available. */
            description?: string | null;
            /** Activity notes when available. */
            notes?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve an Amplemarket lead list by ID. */
    "amplemarket.get_lead_list": {
      input: {
        /**
         * Amplemarket lead list ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Amplemarket lead list record. */
        lead_list: {
          /** Amplemarket lead list ID. */
          id?: string;
          /** Lead list name. */
          name?: string;
          /** Lead list status. */
          status?: string;
          /** Dashboard URL for the lead list. */
          url?: string;
          /** Whether the lead list is shared. */
          shared?: boolean;
          /** Whether the lead list is visible. */
          visible?: boolean;
          /** Lead list owner email. */
          owner?: string;
          /** Lead list type. */
          type?: string;
          /** Lead list creation timestamp in ISO 8601 format. */
          created_at?: string;
          /** Lead list update timestamp in ISO 8601 format. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Amplemarket contacts by one or more contact IDs. */
    "amplemarket.list_contacts": {
      input: {
        /**
         * Amplemarket contact IDs to retrieve.
         * @minItems 1
         */
        ids: Array<string>;
      };
      output: {
        /** Contacts returned by Amplemarket. */
        contacts: Array<{
          /** Amplemarket contact ID. */
          id?: string;
          /** Full name of the contact. */
          name?: string | null;
          /** First name of the contact. */
          first_name?: string | null;
          /** Last name of the contact. */
          last_name?: string | null;
          /** Email address of the contact. */
          email?: string | null;
          /**
           * LinkedIn profile URL of the contact.
           * @format uri
           */
          linkedin_url?: string | null;
          /** Job title of the contact. */
          title?: string | null;
          /** Location of the contact. */
          location?: string | null;
          /** Time zone of the contact. */
          time_zone?: string | null;
          /** Company name of the contact. */
          company_name?: string | null;
          /** Company domain of the contact. */
          company_domain?: string | null;
          /** Owner email or identifier for the contact. */
          owner?: string | null;
          /** Last contacted timestamp in ISO 8601 format. */
          last_contacted_at?: string | null;
          /** Phone numbers attached to the contact. */
          phone_numbers?: Array<{
            /** Object type returned by Amplemarket. */
            object?: string;
            /** Phone number ID. */
            id?: string;
            /** Phone number value. */
            number?: string;
            /** Phone number type. */
            type?: string;
            /** Source of the phone number. */
            source?: string;
            /** Whether the number is marked as wrong. */
            is_wrong_number?: boolean;
            /** Whether the number is on a DNC list when available. */
            is_dnc_listed?: boolean;
            [key: string]: unknown;
          }>;
          /** Recent activity for the contact. */
          recent_activity?: Array<{
            /** Activity timestamp in ISO 8601 format. */
            event_at?: string;
            /** Activity event type. */
            event_type?: string;
            /** Related sequence ID when available. */
            sequence_id?: string | null;
            /** Related sequence name when available. */
            sequence_name?: string | null;
            /** Related sequence type when available. */
            sequence_type?: string | null;
            /** Activity description when available. */
            description?: string | null;
            /** Activity notes when available. */
            notes?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Amplemarket lead lists with cursor pagination and owner filters. */
    "amplemarket.list_lead_lists": {
      input: {
        /**
         * Number of records to return in the page.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /**
         * Cursor value from an Amplemarket pagination link.
         * @minLength 1
         */
        page_after?: string;
        /**
         * Cursor value from an Amplemarket pagination link.
         * @minLength 1
         */
        page_before?: string;
        /**
         * Lead list status to filter by.
         * @minLength 1
         */
        status?: string;
        /**
         * Lead list owner ID to filter by.
         * @minLength 1
         */
        owner_id?: string;
        /**
         * Lead list owner email to filter by.
         * @format email
         */
        owner_email?: string;
      };
      output: {
        /** Lead lists returned by Amplemarket. */
        lead_lists: Array<{
          /** Amplemarket lead list ID. */
          id?: string;
          /** Lead list name. */
          name?: string;
          /** Lead list status. */
          status?: string;
          /** Dashboard URL for the lead list. */
          url?: string;
          /** Whether the lead list is shared. */
          shared?: boolean;
          /** Whether the lead list is visible. */
          visible?: boolean;
          /** Lead list owner email. */
          owner?: string;
          /** Lead list type. */
          type?: string;
          /** Lead list creation timestamp in ISO 8601 format. */
          created_at?: string;
          /** Lead list update timestamp in ISO 8601 format. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** HAL-style links returned by Amplemarket. */
        _links: {
          /** Amplemarket pagination or resource link. */
          self?: {
            /** Relative URL for the related resource or page. */
            href: string;
          };
          /** Amplemarket pagination or resource link. */
          prev?: {
            /** Relative URL for the related resource or page. */
            href: string;
          };
          /** Amplemarket pagination or resource link. */
          next?: {
            /** Relative URL for the related resource or page. */
            href: string;
          };
          [key: string]: unknown;
        };
        /** Cursor to pass as page_after for the next page. */
        nextCursor: string | null;
        /** Cursor to pass as page_before for the previous page. */
        previousCursor: string | null;
      };
    };
    /** List task statuses supported by Amplemarket. */
    "amplemarket.list_task_statuses": {
      input: Record<string, never>;
      output: {
        /** Task statuses returned by Amplemarket. */
        statuses: Array<string>;
      };
    };
    /** List task types supported by Amplemarket. */
    "amplemarket.list_task_types": {
      input: Record<string, never>;
      output: {
        /** Task types returned by Amplemarket. */
        types: Array<string>;
      };
    };
    /** List Amplemarket tasks with cursor pagination and status, type, or user filters. */
    "amplemarket.list_tasks": {
      input: {
        /**
         * Number of records to return in the page.
         * @minimum 1
         * @maximum 100
         */
        page_size?: number;
        /**
         * Cursor value from an Amplemarket pagination link.
         * @minLength 1
         */
        page_after?: string;
        /**
         * Cursor value from an Amplemarket pagination link.
         * @minLength 1
         */
        page_before?: string;
        /**
         * Task status to filter by.
         * @minLength 1
         */
        status?: string;
        /**
         * Task type to filter by.
         * @minLength 1
         */
        type?: string;
        /**
         * User ID to filter tasks by.
         * @minLength 1
         */
        user_id?: string;
        /**
         * User email to filter tasks by.
         * @format email
         */
        user_email?: string;
      };
      output: {
        /** Tasks returned by Amplemarket. */
        tasks: Array<{
          /** Amplemarket task ID. */
          id?: string;
          /** Task type. */
          type?: string;
          /** Task status. */
          status?: string;
          /** Task due timestamp in ISO 8601 format. */
          due_at?: string | null;
          /** Task completion timestamp when available. */
          completed_at?: string | null;
          /** Task skipped timestamp when available. */
          skipped_at?: string | null;
          /** Amplemarket contact record. */
          contact?: {
            /** Amplemarket contact ID. */
            id?: string;
            /** Full name of the contact. */
            name?: string | null;
            /** First name of the contact. */
            first_name?: string | null;
            /** Last name of the contact. */
            last_name?: string | null;
            /** Email address of the contact. */
            email?: string | null;
            /**
             * LinkedIn profile URL of the contact.
             * @format uri
             */
            linkedin_url?: string | null;
            /** Job title of the contact. */
            title?: string | null;
            /** Location of the contact. */
            location?: string | null;
            /** Time zone of the contact. */
            time_zone?: string | null;
            /** Company name of the contact. */
            company_name?: string | null;
            /** Company domain of the contact. */
            company_domain?: string | null;
            /** Owner email or identifier for the contact. */
            owner?: string | null;
            /** Last contacted timestamp in ISO 8601 format. */
            last_contacted_at?: string | null;
            /** Phone numbers attached to the contact. */
            phone_numbers?: Array<{
              /** Object type returned by Amplemarket. */
              object?: string;
              /** Phone number ID. */
              id?: string;
              /** Phone number value. */
              number?: string;
              /** Phone number type. */
              type?: string;
              /** Source of the phone number. */
              source?: string;
              /** Whether the number is marked as wrong. */
              is_wrong_number?: boolean;
              /** Whether the number is on a DNC list when available. */
              is_dnc_listed?: boolean;
              [key: string]: unknown;
            }>;
            /** Recent activity for the contact. */
            recent_activity?: Array<{
              /** Activity timestamp in ISO 8601 format. */
              event_at?: string;
              /** Activity event type. */
              event_type?: string;
              /** Related sequence ID when available. */
              sequence_id?: string | null;
              /** Related sequence name when available. */
              sequence_name?: string | null;
              /** Related sequence type when available. */
              sequence_type?: string | null;
              /** Activity description when available. */
              description?: string | null;
              /** Activity notes when available. */
              notes?: string | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Lead or prospect object attached to the task. */
          lead?: Record<string, unknown>;
          /** Sequence object attached to the task. */
          sequence?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** HAL-style links returned by Amplemarket. */
        _links: {
          /** Amplemarket pagination or resource link. */
          self?: {
            /** Relative URL for the related resource or page. */
            href: string;
          };
          /** Amplemarket pagination or resource link. */
          prev?: {
            /** Relative URL for the related resource or page. */
            href: string;
          };
          /** Amplemarket pagination or resource link. */
          next?: {
            /** Relative URL for the related resource or page. */
            href: string;
          };
          [key: string]: unknown;
        };
        /** Cursor to pass as page_after for the next page. */
        nextCursor: string | null;
        /** Cursor to pass as page_before for the previous page. */
        previousCursor: string | null;
      };
    };
    /** Skip an Amplemarket task. */
    "amplemarket.skip_task": {
      input: {
        /**
         * Amplemarket task ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Amplemarket task record. */
        task: {
          /** Amplemarket task ID. */
          id?: string;
          /** Task type. */
          type?: string;
          /** Task status. */
          status?: string;
          /** Task due timestamp in ISO 8601 format. */
          due_at?: string | null;
          /** Task completion timestamp when available. */
          completed_at?: string | null;
          /** Task skipped timestamp when available. */
          skipped_at?: string | null;
          /** Amplemarket contact record. */
          contact?: {
            /** Amplemarket contact ID. */
            id?: string;
            /** Full name of the contact. */
            name?: string | null;
            /** First name of the contact. */
            first_name?: string | null;
            /** Last name of the contact. */
            last_name?: string | null;
            /** Email address of the contact. */
            email?: string | null;
            /**
             * LinkedIn profile URL of the contact.
             * @format uri
             */
            linkedin_url?: string | null;
            /** Job title of the contact. */
            title?: string | null;
            /** Location of the contact. */
            location?: string | null;
            /** Time zone of the contact. */
            time_zone?: string | null;
            /** Company name of the contact. */
            company_name?: string | null;
            /** Company domain of the contact. */
            company_domain?: string | null;
            /** Owner email or identifier for the contact. */
            owner?: string | null;
            /** Last contacted timestamp in ISO 8601 format. */
            last_contacted_at?: string | null;
            /** Phone numbers attached to the contact. */
            phone_numbers?: Array<{
              /** Object type returned by Amplemarket. */
              object?: string;
              /** Phone number ID. */
              id?: string;
              /** Phone number value. */
              number?: string;
              /** Phone number type. */
              type?: string;
              /** Source of the phone number. */
              source?: string;
              /** Whether the number is marked as wrong. */
              is_wrong_number?: boolean;
              /** Whether the number is on a DNC list when available. */
              is_dnc_listed?: boolean;
              [key: string]: unknown;
            }>;
            /** Recent activity for the contact. */
            recent_activity?: Array<{
              /** Activity timestamp in ISO 8601 format. */
              event_at?: string;
              /** Activity event type. */
              event_type?: string;
              /** Related sequence ID when available. */
              sequence_id?: string | null;
              /** Related sequence name when available. */
              sequence_name?: string | null;
              /** Related sequence type when available. */
              sequence_type?: string | null;
              /** Activity description when available. */
              description?: string | null;
              /** Activity notes when available. */
              notes?: string | null;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Lead or prospect object attached to the task. */
          lead?: Record<string, unknown>;
          /** Sequence object attached to the task. */
          sequence?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
