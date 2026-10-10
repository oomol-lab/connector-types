import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an existing SimpleTexting contact to a contact list. */
    "simpletexting.add_contact_to_list": {
      input: {
        /**
         * Contact list ID or exact list name.
         * @minLength 1
         * @pattern \S
         */
        listIdOrName: string;
        /**
         * Contact phone number (preferred) or hexadecimal contact ID.
         * @minLength 1
         * @pattern \S
         */
        contactPhoneOrId: string;
      };
      output: {
        /** Whether the empty-response operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Create a SimpleTexting contact, or update an existing contact when upsert is enabled. */
    "simpletexting.create_contact": {
      input: {
        /** Contact phone number. */
        contactPhone: string;
        /** Contact first name. */
        firstName?: string;
        /** Contact last name. */
        lastName?: string;
        /** Contact email address. */
        email?: string;
        /** Contact birthday in YYYY-MM-DD format. */
        birthday?: string;
        /** Custom field values keyed by field name or merge tag without percent signs. */
        customFields?: Record<string, string>;
        /** Notes about the contact. */
        comment?: string;
        /** List IDs or names to add or replace, controlled by listsReplacement. */
        listIds?: Array<string>;
        /** Update an existing contact with the body phone number. Upstream defaults to true. */
        upsert?: boolean;
        /** Replace existing list memberships when true; add memberships when false. Upstream defaults to true. */
        listsReplacement?: boolean;
      };
      output: {
        /** Resource ID. */
        id?: string;
        [key: string]: unknown;
      };
    };
    /** Create a SimpleTexting contact list. */
    "simpletexting.create_contact_list": {
      input: {
        /**
         * List name containing fewer than 42 characters.
         * @minLength 1
         * @maxLength 41
         * @pattern \S
         */
        name: string;
      };
      output: {
        /** Resource ID. */
        id?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a SimpleTexting contact by phone number or ID. */
    "simpletexting.delete_contact": {
      input: {
        /**
         * Contact phone number (preferred) or hexadecimal contact ID.
         * @minLength 1
         * @pattern \S
         */
        contactIdOrNumber: string;
      };
      output: {
        /** Whether the empty-response operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Delete a SimpleTexting contact list by ID or name. */
    "simpletexting.delete_contact_list": {
      input: {
        /**
         * Contact list ID or exact list name.
         * @minLength 1
         * @pattern \S
         */
        listIdOrName: string;
      };
      output: {
        /** Whether the empty-response operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the SimpleTexting account email associated with the connected API token. */
    "simpletexting.get_account": {
      input: Record<string, never>;
      output: {
        /** Account email address. */
        email?: string;
        [key: string]: unknown;
      };
    };
    /** Get a SimpleTexting contact by phone number or ID. */
    "simpletexting.get_contact": {
      input: {
        /**
         * Contact phone number (preferred) or hexadecimal contact ID.
         * @minLength 1
         * @pattern \S
         */
        contactIdOrNumber: string;
      };
      output: {
        /** Contact phone number. */
        contactPhone?: string;
        /** Contact first name. */
        firstName?: string;
        /** Contact last name. */
        lastName?: string;
        /** Contact email address. */
        email?: string;
        /** Contact birthday in YYYY-MM-DD format. */
        birthday?: string;
        /** Custom field values keyed by field name or merge tag without percent signs. */
        customFields?: Record<string, string>;
        /** Notes about the contact. */
        comment?: string;
        /** Contact ID. */
        contactId?: string;
        /** Lists containing the contact. */
        lists?: Array<{
          /** List ID. */
          id?: string;
          /** List name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Contact subscription status. */
        subscriptionStatus?: string;
        /** Creation timestamp in ISO 8601 format. */
        created?: string;
        /** Last update timestamp in ISO 8601 format. */
        updated?: string;
        /** Source of the most recent update. */
        updateSource?: string;
        [key: string]: unknown;
      };
    };
    /** Get a SimpleTexting contact list by ID or name. */
    "simpletexting.get_contact_list": {
      input: {
        /**
         * Contact list ID or exact list name.
         * @minLength 1
         * @pattern \S
         */
        listIdOrName: string;
      };
      output: {
        /** Contact list ID. */
        listId?: string;
        /** Contact list name. */
        name?: string;
        /** Creation timestamp. */
        created?: string;
        /** Last update timestamp. */
        updated?: string;
        /** Description assigned to automatically created lists. */
        description?: string | null;
        /** Total number of contacts. */
        totalContactsCount?: number;
        /** Number of active contacts. */
        activeContactsCount?: number;
        /** Number of invalid contacts. */
        invalidContactsCount?: number;
        /** Number of unsubscribed contacts. */
        unsubscribedContactsCount?: number;
        /** Associated keywords. */
        keywords?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List one page of SimpleTexting contact lists. */
    "simpletexting.list_contact_lists": {
      input: {
        /**
         * Zero-based page number. Defaults to 0.
         * @minimum 0
         */
        page?: number;
        /**
         * Results per page. Defaults to 50; maximum 500.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
      };
      output: {
        /** Items on this page. */
        content?: Array<{
          /** Contact list ID. */
          listId?: string;
          /** Contact list name. */
          name?: string;
          /** Creation timestamp. */
          created?: string;
          /** Last update timestamp. */
          updated?: string;
          /** Description assigned to automatically created lists. */
          description?: string | null;
          /** Total number of contacts. */
          totalContactsCount?: number;
          /** Number of active contacts. */
          activeContactsCount?: number;
          /** Number of invalid contacts. */
          invalidContactsCount?: number;
          /** Number of unsubscribed contacts. */
          unsubscribedContactsCount?: number;
          /** Associated keywords. */
          keywords?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Total number of pages. */
        totalPages?: number;
        /** Total number of matching items. */
        totalElements?: number;
        [key: string]: unknown;
      };
    };
    /** List one page of SimpleTexting contacts, optionally updated since a timestamp. */
    "simpletexting.list_contacts": {
      input: {
        /**
         * Zero-based page number. Defaults to 0.
         * @minimum 0
         */
        page?: number;
        /**
         * Results per page. Defaults to 50; maximum 500.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
        /**
         * Only contacts updated since this ISO 8601 timestamp.
         * @format date-time
         */
        since?: string;
        /** Sort direction for the updated field. Defaults to desc. */
        direction?: "asc" | "desc";
      };
      output: {
        /** Items on this page. */
        content?: Array<{
          /** Contact phone number. */
          contactPhone?: string;
          /** Contact first name. */
          firstName?: string;
          /** Contact last name. */
          lastName?: string;
          /** Contact email address. */
          email?: string;
          /** Contact birthday in YYYY-MM-DD format. */
          birthday?: string;
          /** Custom field values keyed by field name or merge tag without percent signs. */
          customFields?: Record<string, string>;
          /** Notes about the contact. */
          comment?: string;
          /** Contact ID. */
          contactId?: string;
          /** Lists containing the contact. */
          lists?: Array<{
            /** List ID. */
            id?: string;
            /** List name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Contact subscription status. */
          subscriptionStatus?: string;
          /** Creation timestamp in ISO 8601 format. */
          created?: string;
          /** Last update timestamp in ISO 8601 format. */
          updated?: string;
          /** Source of the most recent update. */
          updateSource?: string;
          [key: string]: unknown;
        }>;
        /** Total number of pages. */
        totalPages?: number;
        /** Total number of matching items. */
        totalElements?: number;
        [key: string]: unknown;
      };
    };
    /** List one page of SimpleTexting custom fields and their merge tags. */
    "simpletexting.list_custom_fields": {
      input: {
        /**
         * Zero-based page number. Defaults to 0.
         * @minimum 0
         */
        page?: number;
        /**
         * Results per page. Defaults to 50; maximum 500.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
      };
      output: {
        /** Items on this page. */
        content?: Array<{
          /** Custom field name. */
          label?: string;
          /** Custom field type. */
          type?: string;
          /** Merge tag used to supply custom field values. */
          mergeTag?: string;
          /** Default maximum field length. */
          defaultMaxLength?: number;
          [key: string]: unknown;
        }>;
        /** Total number of pages. */
        totalPages?: number;
        /** Total number of matching items. */
        totalElements?: number;
        [key: string]: unknown;
      };
    };
    /** List one page of SimpleTexting contact segments. */
    "simpletexting.list_segments": {
      input: {
        /**
         * Zero-based page number. Defaults to 0.
         * @minimum 0
         */
        page?: number;
        /**
         * Results per page. Defaults to 50; maximum 500.
         * @minimum 1
         * @maximum 500
         */
        size?: number;
      };
      output: {
        /** Items on this page. */
        content?: Array<{
          /** Segment ID. */
          segmentId?: string;
          /** Segment name. */
          name?: string;
          /** Creation timestamp. */
          created?: string;
          /** Last update timestamp. */
          updated?: string;
          [key: string]: unknown;
        }>;
        /** Total number of pages. */
        totalPages?: number;
        /** Total number of matching items. */
        totalElements?: number;
        [key: string]: unknown;
      };
    };
    /** Remove a contact from a SimpleTexting list without deleting the contact. */
    "simpletexting.remove_contact_from_list": {
      input: {
        /**
         * Contact list ID or exact list name.
         * @minLength 1
         * @pattern \S
         */
        listIdOrName: string;
        /**
         * Contact phone number (preferred) or hexadecimal contact ID.
         * @minLength 1
         * @pattern \S
         */
        contactPhoneOrId: string;
      };
      output: {
        /** Whether the empty-response operation succeeded. */
        success?: boolean;
        [key: string]: unknown;
      };
    };
    /** Update a SimpleTexting contact and optionally replace or add list memberships. */
    "simpletexting.update_contact": {
      input: {
        /**
         * Contact phone number (preferred) or hexadecimal contact ID.
         * @minLength 1
         * @pattern \S
         */
        contactIdOrNumber: string;
        /** Contact phone number. */
        contactPhone?: string;
        /** Contact first name. */
        firstName?: string;
        /** Contact last name. */
        lastName?: string;
        /** Contact email address. */
        email?: string;
        /** Contact birthday in YYYY-MM-DD format. */
        birthday?: string;
        /** Custom field values keyed by field name or merge tag without percent signs. */
        customFields?: Record<string, string>;
        /** Notes about the contact. */
        comment?: string;
        /** List IDs or names to add or replace, controlled by listsReplacement. */
        listIds?: Array<string>;
        /** Update an existing contact with the body phone number. Upstream defaults to true. */
        upsert?: boolean;
        /** Replace existing list memberships when true; add memberships when false. Upstream defaults to true. */
        listsReplacement?: boolean;
      };
      output: {
        /** Resource ID. */
        id?: string;
        [key: string]: unknown;
      };
    };
    /** Rename a SimpleTexting contact list by ID or existing name. */
    "simpletexting.update_contact_list": {
      input: {
        /**
         * Contact list ID or exact list name.
         * @minLength 1
         * @pattern \S
         */
        listIdOrName: string;
        /**
         * List name containing fewer than 42 characters.
         * @minLength 1
         * @maxLength 41
         * @pattern \S
         */
        name: string;
      };
      output: {
        /** Resource ID. */
        id?: string;
        [key: string]: unknown;
      };
    };
  }
}
