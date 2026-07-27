import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Change non-destructive subscription or delivery status for contacts in an Ongage list. */
    "ongage.change_contact_status": {
      input: {
        /**
         * The numeric Ongage list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /** The contact status transition to apply. */
        changeTo: "resubscribe" | "unsubscribe" | "bounce" | "complaint" | "soft_bounce";
        /**
         * Contact email addresses whose status should change.
         * @minItems 1
         * @maxItems 500
         */
        emails: Array<string>;
        /**
         * Optional campaign child ID used to attribute unsubscribe statistics.
         * @exclusiveMinimum 0
         */
        ocxChildId?: number;
        /**
         * Optional ESP connection ID used to attribute transactional unsubscribe statistics.
         * @exclusiveMinimum 0
         */
        ocxConnectionId?: number;
      };
      output: {
        /**
         * The number of contact rows submitted.
         * @minimum 0
         */
        rows?: number;
        /**
         * The number of successful contact rows.
         * @minimum 0
         */
        success?: number;
        /**
         * The number of failed contact rows.
         * @minimum 0
         */
        failed?: number;
        /**
         * The number of contacts created.
         * @minimum 0
         */
        created?: number;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        created_emails?: Record<string, unknown> | Array<unknown>;
        /**
         * The number of contacts updated.
         * @minimum 0
         */
        updated?: number;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        updated_emails?: Record<string, unknown> | Array<unknown>;
        /**
         * The number of contacts revived.
         * @minimum 0
         */
        revived?: number;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        revived_emails?: Record<string, unknown> | Array<unknown>;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        success_emails?: Record<string, unknown> | Array<unknown>;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        failed_emails?: Record<string, unknown> | Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Get one contact from an Ongage list by email address. */
    "ongage.get_contact_by_email": {
      input: {
        /**
         * The numeric Ongage list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The contact email address.
         * @format email
         */
        email: string;
      };
      output: {
        /** An Ongage contact resource. */
        contact: {
          /** The Ongage contact ID. */
          id?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /** The contact status returned by Ongage. */
          ocx_status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one contact from an Ongage list by contact ID. */
    "ongage.get_contact_by_id": {
      input: {
        /**
         * The numeric Ongage list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * The Ongage contact ID.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** An Ongage contact resource. */
        contact: {
          /** The Ongage contact ID. */
          id?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /** The contact status returned by Ongage. */
          ocx_status?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Ongage list by its numeric ID. */
    "ongage.get_list": {
      input: {
        /**
         * The numeric Ongage list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
      };
      output: {
        /** An Ongage list resource. */
        list: {
          /** The numeric list ID. */
          id?: number;
          /** The numeric Ongage account ID. */
          account_id?: number;
          /** The list name. */
          name?: string;
          /** The Ongage list type. */
          type?: "sending" | "suppression";
          [key: string]: unknown;
        };
      };
    };
    /** List Ongage sending or suppression lists with offset pagination. */
    "ongage.list_lists": {
      input: {
        /**
         * Filter by list name.
         * @minLength 1
         */
        name?: string;
        /** The Ongage list type. */
        type?: "sending" | "suppression";
        /**
         * List column name used for sorting.
         * @minLength 1
         */
        sort?: string;
        /** The list sort direction. */
        order?: "ASC" | "DESC";
        /**
         * Number of matching lists to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of lists to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Lists returned by Ongage. */
        lists: Array<{
          /** The numeric list ID. */
          id?: number;
          /** The numeric Ongage account ID. */
          account_id?: number;
          /** The list name. */
          name?: string;
          /** The Ongage list type. */
          type?: "sending" | "suppression";
          [key: string]: unknown;
        }>;
        /**
         * Total number of matching lists.
         * @minimum 0
         */
        total: number;
      };
    };
    /** Update existing contacts in an Ongage list by email address or contact ID. */
    "ongage.update_contacts": {
      input: {
        /**
         * The numeric Ongage list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * Existing contacts and fields to update.
         * @minItems 1
         * @maxItems 500
         */
        contacts: Array<{
          /**
           * The existing contact email address.
           * @format email
           */
          email: string;
          /** Account-defined Ongage contact fields keyed by the list field name. */
          fields: Record<string, unknown>;
        } | {
          /**
           * The existing Ongage contact ID.
           * @minLength 1
           */
          id: string;
          /** Account-defined Ongage contact fields keyed by the list field name. */
          fields: Record<string, unknown>;
        }>;
      };
      output: {
        /**
         * The number of contact rows submitted.
         * @minimum 0
         */
        rows?: number;
        /**
         * The number of successful contact rows.
         * @minimum 0
         */
        success?: number;
        /**
         * The number of failed contact rows.
         * @minimum 0
         */
        failed?: number;
        /**
         * The number of contacts created.
         * @minimum 0
         */
        created?: number;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        created_emails?: Record<string, unknown> | Array<unknown>;
        /**
         * The number of contacts updated.
         * @minimum 0
         */
        updated?: number;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        updated_emails?: Record<string, unknown> | Array<unknown>;
        /**
         * The number of contacts revived.
         * @minimum 0
         */
        revived?: number;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        revived_emails?: Record<string, unknown> | Array<unknown>;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        success_emails?: Record<string, unknown> | Array<unknown>;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        failed_emails?: Record<string, unknown> | Array<unknown>;
        [key: string]: unknown;
      };
    };
    /** Create contacts in an Ongage list and optionally overwrite existing fields. */
    "ongage.upsert_contacts": {
      input: {
        /**
         * The numeric Ongage list ID.
         * @exclusiveMinimum 0
         */
        listId: number;
        /**
         * Contacts to create or overwrite.
         * @minItems 1
         * @maxItems 500
         */
        contacts: Array<{
          /**
           * The contact email address.
           * @format email
           */
          email: string;
          /** Whether Ongage should overwrite fields for an existing contact. */
          overwrite?: boolean;
          /** Account-defined Ongage contact fields keyed by the list field name. */
          fields?: Record<string, unknown>;
        }>;
      };
      output: {
        /**
         * The number of contact rows submitted.
         * @minimum 0
         */
        rows?: number;
        /**
         * The number of successful contact rows.
         * @minimum 0
         */
        success?: number;
        /**
         * The number of failed contact rows.
         * @minimum 0
         */
        failed?: number;
        /**
         * The number of contacts created.
         * @minimum 0
         */
        created?: number;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        created_emails?: Record<string, unknown> | Array<unknown>;
        /**
         * The number of contacts updated.
         * @minimum 0
         */
        updated?: number;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        updated_emails?: Record<string, unknown> | Array<unknown>;
        /**
         * The number of contacts revived.
         * @minimum 0
         */
        revived?: number;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        revived_emails?: Record<string, unknown> | Array<unknown>;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        success_emails?: Record<string, unknown> | Array<unknown>;
        /** Results keyed by contact email address, or an empty array when Ongage has no results. */
        failed_emails?: Record<string, unknown> | Array<unknown>;
        [key: string]: unknown;
      };
    };
  }
}
