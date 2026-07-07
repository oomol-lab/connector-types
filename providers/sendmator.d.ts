import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Sendmator contact with optional external ID, tags, custom fields, and metadata. */
    "sendmator.create_contact": {
      input: {
        /**
         * External contact ID used to map the contact to another system.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The contact email address.
         * @format email
         */
        email: string;
        /**
         * The contact first name.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The contact last name.
         * @minLength 1
         */
        last_name?: string;
        /** Tags attached to the Sendmator contact. */
        tags?: Array<string>;
        /** Custom contact fields keyed by field name. */
        custom_fields?: Record<string, unknown>;
        /** Additional contact metadata returned by Sendmator or provided by the caller. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The Sendmator contact ID. */
        id?: string;
        /** External contact ID used to map the contact to another system. */
        external_id?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact first name, or null when unavailable. */
        first_name?: string | null;
        /** The contact last name, or null when unavailable. */
        last_name?: string | null;
        /** Tags attached to the Sendmator contact. */
        tags?: Array<string>;
        /** Whether the contact is active. */
        is_active?: boolean;
        /** Whether the contact has unsubscribed. */
        is_unsubscribed?: boolean;
        /**
         * The timestamp when the contact unsubscribed, or null when still subscribed.
         * @format date-time
         */
        unsubscribed_at?: string | null;
        /** Custom contact fields keyed by field name. */
        custom_fields?: Record<string, unknown>;
        /** Additional contact metadata returned by Sendmator or provided by the caller. */
        metadata?: Record<string, unknown>;
        /**
         * The timestamp when the contact was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * The timestamp when the contact was last updated.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a Sendmator contact by ID. */
    "sendmator.delete_contact": {
      input: {
        /**
         * Sendmator contact ID.
         * @minLength 1
         */
        contact_id: string;
      };
      output: {
        /** Whether the contact was deleted. */
        deleted: boolean;
        /** The deleted Sendmator contact ID. */
        id: string;
      };
    };
    /** Get a Sendmator contact by ID. */
    "sendmator.get_contact": {
      input: {
        /**
         * Sendmator contact ID.
         * @minLength 1
         */
        contact_id: string;
      };
      output: {
        /** The Sendmator contact ID. */
        id?: string;
        /** External contact ID used to map the contact to another system. */
        external_id?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact first name, or null when unavailable. */
        first_name?: string | null;
        /** The contact last name, or null when unavailable. */
        last_name?: string | null;
        /** Tags attached to the Sendmator contact. */
        tags?: Array<string>;
        /** Whether the contact is active. */
        is_active?: boolean;
        /** Whether the contact has unsubscribed. */
        is_unsubscribed?: boolean;
        /**
         * The timestamp when the contact unsubscribed, or null when still subscribed.
         * @format date-time
         */
        unsubscribed_at?: string | null;
        /** Custom contact fields keyed by field name. */
        custom_fields?: Record<string, unknown>;
        /** Additional contact metadata returned by Sendmator or provided by the caller. */
        metadata?: Record<string, unknown>;
        /**
         * The timestamp when the contact was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * The timestamp when the contact was last updated.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** List Sendmator contacts with cursor pagination and optional filters. */
    "sendmator.list_contacts": {
      input: {
        /** Number of contacts to return, up to 100. */
        limit?: number;
        /**
         * Cursor for pagination.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * Filter contacts by tag.
         * @minLength 1
         */
        tag?: string;
        /** Filter contacts by active status. */
        is_active?: boolean;
        /**
         * Search across contact name, email, and external_id.
         * @minLength 1
         */
        search?: string;
        /**
         * Return contacts created after this timestamp.
         * @format date-time
         */
        created_after?: string;
        /**
         * Return contacts created before this timestamp.
         * @format date-time
         */
        created_before?: string;
      };
      output: {
        /** Contacts returned for the current page. */
        contacts: Array<{
          /** The Sendmator contact ID. */
          id?: string;
          /** External contact ID used to map the contact to another system. */
          external_id?: string;
          /**
           * The contact email address.
           * @format email
           */
          email?: string;
          /** The contact first name, or null when unavailable. */
          first_name?: string | null;
          /** The contact last name, or null when unavailable. */
          last_name?: string | null;
          /** Tags attached to the Sendmator contact. */
          tags?: Array<string>;
          /** Whether the contact is active. */
          is_active?: boolean;
          /** Whether the contact has unsubscribed. */
          is_unsubscribed?: boolean;
          /**
           * The timestamp when the contact unsubscribed, or null when still subscribed.
           * @format date-time
           */
          unsubscribed_at?: string | null;
          /** Custom contact fields keyed by field name. */
          custom_fields?: Record<string, unknown>;
          /** Additional contact metadata returned by Sendmator or provided by the caller. */
          metadata?: Record<string, unknown>;
          /**
           * The timestamp when the contact was created.
           * @format date-time
           */
          created_at?: string;
          /**
           * The timestamp when the contact was last updated.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Whether more contacts are available after this page. */
        has_more: boolean;
        /** Cursor for the next page, or null when unavailable. */
        next_cursor: string | null;
      };
    };
    /** Update a Sendmator contact's profile fields, active status, tags, custom fields, or metadata. */
    "sendmator.update_contact": {
      input: {
        /**
         * Sendmator contact ID.
         * @minLength 1
         */
        contact_id: string;
        /**
         * Updated external contact ID.
         * @minLength 1
         */
        external_id?: string;
        /**
         * Updated contact email address.
         * @format email
         */
        email?: string;
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
        /** Tags attached to the Sendmator contact. */
        tags?: Array<string>;
        /** Updated active status for the contact. */
        is_active?: boolean;
        /** Custom contact fields keyed by field name. */
        custom_fields?: Record<string, unknown>;
        /** Additional contact metadata returned by Sendmator or provided by the caller. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The Sendmator contact ID. */
        id?: string;
        /** External contact ID used to map the contact to another system. */
        external_id?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact first name, or null when unavailable. */
        first_name?: string | null;
        /** The contact last name, or null when unavailable. */
        last_name?: string | null;
        /** Tags attached to the Sendmator contact. */
        tags?: Array<string>;
        /** Whether the contact is active. */
        is_active?: boolean;
        /** Whether the contact has unsubscribed. */
        is_unsubscribed?: boolean;
        /**
         * The timestamp when the contact unsubscribed, or null when still subscribed.
         * @format date-time
         */
        unsubscribed_at?: string | null;
        /** Custom contact fields keyed by field name. */
        custom_fields?: Record<string, unknown>;
        /** Additional contact metadata returned by Sendmator or provided by the caller. */
        metadata?: Record<string, unknown>;
        /**
         * The timestamp when the contact was created.
         * @format date-time
         */
        created_at?: string;
        /**
         * The timestamp when the contact was last updated.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
  }
}
