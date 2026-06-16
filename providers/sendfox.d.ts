import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an existing SendFox contact to a contact list. */
    "sendfox.add_contact_to_list": {
      input: {
        /**
         * SendFox list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /**
         * SendFox contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
      };
      output: {
        /** SendFox contact ID. */
        id: number;
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /** Contact first name. */
        first_name: string | null;
        /** Contact last name. */
        last_name: string | null;
        /** IP address associated with the contact. */
        ip_address: string | null;
        /**
         * Timestamp when the contact unsubscribed.
         * @format date-time
         */
        unsubscribed_at: string | null;
        /**
         * Timestamp when the contact was created.
         * @format date-time
         */
        created_at: string;
        /**
         * Timestamp when the contact was last updated.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Create a SendFox contact and optionally attach it to lists with custom contact fields. */
    "sendfox.create_contact": {
      input: {
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /**
         * Contact first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * Contact last name.
         * @minLength 1
         */
        last_name?: string;
        /**
         * IP address associated with the contact.
         * @minLength 1
         */
        ip_address?: string;
        /** SendFox list IDs to add the contact to. */
        lists?: Array<number>;
        /** Custom contact field values to store on the contact. */
        contact_fields?: Array<{
          /**
           * Machine-readable SendFox contact field name.
           * @minLength 1
           */
          name: string;
          /** Custom field value to store on the contact. */
          value: string | null;
        }>;
      };
      output: {
        /** SendFox contact ID. */
        id: number;
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /** Contact first name. */
        first_name: string | null;
        /** Contact last name. */
        last_name: string | null;
        /** IP address associated with the contact. */
        ip_address: string | null;
        /**
         * Timestamp when the contact unsubscribed.
         * @format date-time
         */
        unsubscribed_at: string | null;
        /**
         * Timestamp when the contact was created.
         * @format date-time
         */
        created_at: string;
        /**
         * Timestamp when the contact was last updated.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Create a SendFox contact list. */
    "sendfox.create_contact_list": {
      input: {
        /**
         * Contact list name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** SendFox contact list ID. */
        id: number;
        /** Contact list name. */
        name: string;
        /** SendFox user ID that owns the list. */
        user_id: number;
        /** Average email open percentage for this list. */
        average_email_open_percent: number;
        /** Average email click percentage for this list. */
        average_email_click_percent: number;
        /**
         * Timestamp when the list was created.
         * @format date-time
         */
        created_at: string;
        /**
         * Timestamp when the list was last updated.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Soft-delete a SendFox contact and cancel any scheduled deliverables. */
    "sendfox.delete_contact": {
      input: {
        /**
         * SendFox contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
      };
      output: {
        /** Human-readable SendFox response message. */
        message: string;
      };
    };
    /** Soft-delete a SendFox contact list when it is not used by dependent resources. */
    "sendfox.delete_contact_list": {
      input: {
        /**
         * SendFox list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
      };
      output: {
        /** Human-readable SendFox response message. */
        message: string;
      };
    };
    /** Get a SendFox contact by ID. */
    "sendfox.get_contact": {
      input: {
        /**
         * SendFox contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
      };
      output: {
        /** SendFox contact ID. */
        id: number;
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /** Contact first name. */
        first_name: string | null;
        /** Contact last name. */
        last_name: string | null;
        /** IP address associated with the contact. */
        ip_address: string | null;
        /**
         * Timestamp when the contact unsubscribed.
         * @format date-time
         */
        unsubscribed_at: string | null;
        /**
         * Timestamp when the contact was created.
         * @format date-time
         */
        created_at: string;
        /**
         * Timestamp when the contact was last updated.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Get a SendFox contact list by ID. */
    "sendfox.get_contact_list": {
      input: {
        /**
         * SendFox list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
      };
      output: {
        /** SendFox contact list ID. */
        id: number;
        /** Contact list name. */
        name: string;
        /** SendFox user ID that owns the list. */
        user_id: number;
        /** Average email open percentage for this list. */
        average_email_open_percent: number;
        /** Average email click percentage for this list. */
        average_email_click_percent: number;
        /**
         * Timestamp when the list was created.
         * @format date-time
         */
        created_at: string;
        /**
         * Timestamp when the list was last updated.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** List SendFox contact lists with optional search filtering. */
    "sendfox.list_contact_lists": {
      input: {
        /**
         * Search query for filtering contact lists.
         * @minLength 1
         */
        query?: string;
        /**
         * Page number to request from SendFox.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Contact lists returned for the current page. */
        lists: Array<{
          /** SendFox contact list ID. */
          id: number;
          /** Contact list name. */
          name: string;
          /** SendFox user ID that owns the list. */
          user_id: number;
          /** Average email open percentage for this list. */
          average_email_open_percent: number;
          /** Average email click percentage for this list. */
          average_email_click_percent: number;
          /**
           * Timestamp when the list was created.
           * @format date-time
           */
          created_at: string;
          /**
           * Timestamp when the list was last updated.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by SendFox list endpoints. */
        meta: {
          /** Current result page returned by SendFox. */
          current_page: number;
          /** Total number of records available for the current query. */
          total: number;
          /** Maximum number of records returned on each page. */
          per_page: number;
        };
      };
    };
    /** List SendFox contacts with optional search, email, and unsubscribe filters. */
    "sendfox.list_contacts": {
      input: {
        /**
         * Search query for filtering contacts.
         * @minLength 1
         */
        query?: string;
        /**
         * Page number to request from SendFox.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Whether to filter for unsubscribed contacts. */
        unsubscribed?: boolean;
        /**
         * Specific contact email address to filter by.
         * @format email
         */
        email?: string;
      };
      output: {
        /** Contacts returned for the current page. */
        contacts: Array<{
          /** SendFox contact ID. */
          id: number;
          /**
           * Contact email address.
           * @format email
           */
          email: string;
          /** Contact first name. */
          first_name: string | null;
          /** Contact last name. */
          last_name: string | null;
          /** IP address associated with the contact. */
          ip_address: string | null;
          /**
           * Timestamp when the contact unsubscribed.
           * @format date-time
           */
          unsubscribed_at: string | null;
          /**
           * Timestamp when the contact was created.
           * @format date-time
           */
          created_at: string;
          /**
           * Timestamp when the contact was last updated.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by SendFox list endpoints. */
        meta: {
          /** Current result page returned by SendFox. */
          current_page: number;
          /** Total number of records available for the current query. */
          total: number;
          /** Maximum number of records returned on each page. */
          per_page: number;
        };
      };
    };
    /** List contacts in a SendFox contact list with optional search filtering. */
    "sendfox.list_contacts_in_list": {
      input: {
        /**
         * SendFox list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /**
         * Search query for filtering contacts in the list.
         * @minLength 1
         */
        query?: string;
        /**
         * Page number to request from SendFox.
         * @exclusiveMinimum 0
         */
        page?: number;
      };
      output: {
        /** Contacts returned for the current page. */
        contacts: Array<{
          /** SendFox contact ID. */
          id: number;
          /**
           * Contact email address.
           * @format email
           */
          email: string;
          /** Contact first name. */
          first_name: string | null;
          /** Contact last name. */
          last_name: string | null;
          /** IP address associated with the contact. */
          ip_address: string | null;
          /**
           * Timestamp when the contact unsubscribed.
           * @format date-time
           */
          unsubscribed_at: string | null;
          /**
           * Timestamp when the contact was created.
           * @format date-time
           */
          created_at: string;
          /**
           * Timestamp when the contact was last updated.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by SendFox list endpoints. */
        meta: {
          /** Current result page returned by SendFox. */
          current_page: number;
          /** Total number of records available for the current query. */
          total: number;
          /** Maximum number of records returned on each page. */
          per_page: number;
        };
      };
    };
    /** Remove a SendFox contact from a contact list. */
    "sendfox.remove_contact_from_list": {
      input: {
        /**
         * SendFox list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /**
         * SendFox contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
      };
      output: {
        /** SendFox contact ID. */
        id: number;
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /** Contact first name. */
        first_name: string | null;
        /** Contact last name. */
        last_name: string | null;
        /** IP address associated with the contact. */
        ip_address: string | null;
        /**
         * Timestamp when the contact unsubscribed.
         * @format date-time
         */
        unsubscribed_at: string | null;
        /**
         * Timestamp when the contact was created.
         * @format date-time
         */
        created_at: string;
        /**
         * Timestamp when the contact was last updated.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Unsubscribe a SendFox contact by email address. */
    "sendfox.unsubscribe_contact": {
      input: {
        /**
         * Contact email address to unsubscribe.
         * @format email
         */
        email: string;
      };
      output: {
        /** SendFox contact ID. */
        id: number;
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /** Contact first name. */
        first_name: string | null;
        /** Contact last name. */
        last_name: string | null;
        /** IP address associated with the contact. */
        ip_address: string | null;
        /**
         * Timestamp when the contact unsubscribed.
         * @format date-time
         */
        unsubscribed_at: string | null;
        /**
         * Timestamp when the contact was created.
         * @format date-time
         */
        created_at: string;
        /**
         * Timestamp when the contact was last updated.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Update a SendFox contact's name, list memberships, or custom field values. */
    "sendfox.update_contact": {
      input: {
        /**
         * SendFox contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
        /**
         * Updated contact first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * Updated contact last name.
         * @minLength 1
         */
        last_name?: string;
        /** SendFox list IDs that replace the contact's current memberships. */
        lists?: Array<number>;
        /** Custom contact field values to update on the contact. */
        contact_fields?: Array<{
          /**
           * Machine-readable SendFox contact field name.
           * @minLength 1
           */
          name: string;
          /** Custom field value to store on the contact. */
          value: string | null;
        }>;
      };
      output: {
        /** SendFox contact ID. */
        id: number;
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /** Contact first name. */
        first_name: string | null;
        /** Contact last name. */
        last_name: string | null;
        /** IP address associated with the contact. */
        ip_address: string | null;
        /**
         * Timestamp when the contact unsubscribed.
         * @format date-time
         */
        unsubscribed_at: string | null;
        /**
         * Timestamp when the contact was created.
         * @format date-time
         */
        created_at: string;
        /**
         * Timestamp when the contact was last updated.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Update a SendFox contact list name. */
    "sendfox.update_contact_list": {
      input: {
        /**
         * SendFox list ID.
         * @exclusiveMinimum 0
         */
        list_id: number;
        /**
         * Updated contact list name.
         * @minLength 1
         * @maxLength 191
         */
        name: string;
      };
      output: {
        /** SendFox contact list ID. */
        id: number;
        /** Contact list name. */
        name: string;
        /** SendFox user ID that owns the list. */
        user_id: number;
        /** Average email open percentage for this list. */
        average_email_open_percent: number;
        /** Average email click percentage for this list. */
        average_email_click_percent: number;
        /**
         * Timestamp when the list was created.
         * @format date-time
         */
        created_at: string;
        /**
         * Timestamp when the list was last updated.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
  }
}
