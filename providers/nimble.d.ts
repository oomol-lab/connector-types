import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a person or company contact in Nimble using native contact fields. */
    "nimble.create_contact": {
      input: {
        /** Contact fields keyed by their Nimble field names, such as first name, last name, email, or company name. */
        fields: Record<string, Array<{
            /** The contact field value accepted by Nimble. */
            value: unknown;
            /** The Nimble modifier for the field value, such as work, home, or mobile. */
            modifier?: string;
            [key: string]: unknown;
          }>>;
        /** The Nimble user ID that should own the contact, or null to leave it unassigned. */
        ownerId?: string | null;
        /**
         * The avatar URL stored on the contact.
         * @format uri
         */
        avatarUrl?: string;
      };
      output: {
        /** A contact resource returned by Nimble. */
        contact: {
          /** The unique Nimble contact ID. */
          id?: string;
          /** The contact fields keyed by their Nimble field names. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve one Nimble contact by its contact ID. */
    "nimble.get_contact": {
      input: {
        /**
         * The unique Nimble contact ID.
         * @minLength 1
         */
        contactId: string;
        /**
         * The Nimble contact field names to include.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether Nimble should include tags in the contact. */
        includeTags?: boolean;
      };
      output: {
        /** A contact resource returned by Nimble. */
        contact: {
          /** The unique Nimble contact ID. */
          id?: string;
          /** The contact fields keyed by their Nimble field names. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List or search Nimble contacts with pagination and optional field selection. */
    "nimble.list_contacts": {
      input: {
        /**
         * A keyword to search across indexed contact fields.
         * @minLength 1
         */
        keyword?: string;
        /**
         * The Nimble contact field names to include in each result.
         * @minItems 1
         */
        fields?: Array<string>;
        /** The contact record type to return. */
        recordType?: "person" | "company" | "all";
        /**
         * The one-based result page.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of contacts to return per page.
         * @minimum 1
         */
        perPage?: number;
        /** Whether Nimble should include tags in each contact. */
        includeTags?: boolean;
      };
      output: {
        /** The contacts returned by Nimble. */
        contacts: Array<{
          /** The unique Nimble contact ID. */
          id?: string;
          /** The contact fields keyed by their Nimble field names. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Nimble. */
        pagination: {
          /** The current result page. */
          page: number;
          /** The total number of result pages. */
          pages: number;
          /** The number of contacts requested per page. */
          per_page: number;
          /** The total number of matching contacts. */
          total: number;
        };
      };
    };
    /** Update fields, importance, or avatar information on a Nimble contact. */
    "nimble.update_contact": {
      input: {
        /**
         * The unique Nimble contact ID.
         * @minLength 1
         */
        contactId: string;
        /** Contact fields keyed by their Nimble field names, such as first name, last name, email, or company name. */
        fields?: Record<string, Array<{
            /** The contact field value accepted by Nimble. */
            value: unknown;
            /** The Nimble modifier for the field value, such as work, home, or mobile. */
            modifier?: string;
            [key: string]: unknown;
          }>>;
        /**
         * The replacement avatar URL stored on the contact.
         * @format uri
         */
        avatarUrl?: string;
        /** Whether the contact should be marked as important. */
        isImportant?: boolean;
        /** Whether supplied fields should replace existing values instead of extending them. */
        replaceFields?: boolean;
      };
      output: {
        /** A contact resource returned by Nimble. */
        contact: {
          /** The unique Nimble contact ID. */
          id?: string;
          /** The contact fields keyed by their Nimble field names. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
