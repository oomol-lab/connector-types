import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Manually add a Mautic contact to a segment. */
    "mautic.add_contact_to_segment": {
      input: {
        /**
         * The numeric Mautic segment ID.
         * @exclusiveMinimum 0
         */
        segmentId: number;
        /**
         * The numeric Mautic contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** Whether Mautic completed the segment membership operation. */
        success: boolean;
        /**
         * The numeric Mautic segment ID.
         * @exclusiveMinimum 0
         */
        segmentId: number;
        /**
         * The numeric Mautic contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
    };
    /** Create a Mautic contact using standard or instance-specific custom contact field aliases. */
    "mautic.create_contact": {
      input: {
        /** Contact field values keyed by Mautic field alias, such as email, firstname, lastname, company, or a custom field alias. */
        fields: Record<string, unknown>;
      };
      output: {
        /** Mautic contact data. */
        contact: {
          /**
           * The numeric Mautic contact ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** Whether the contact is published. */
          isPublished?: boolean;
          /** The contact's current points total. */
          points?: number;
          /** The date and time when the contact was created. */
          dateAdded?: string;
          /** The date and time when the contact was last modified. */
          dateModified?: string | null;
          /** Contact fields grouped and returned by Mautic. */
          fields?: Record<string, unknown>;
          /** Tags associated with the contact. */
          tags?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Mautic contact by numeric contact ID. */
    "mautic.delete_contact": {
      input: {
        /**
         * The numeric Mautic contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** Mautic contact data. */
        contact: {
          /**
           * The numeric Mautic contact ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** Whether the contact is published. */
          isPublished?: boolean;
          /** The contact's current points total. */
          points?: number;
          /** The date and time when the contact was created. */
          dateAdded?: string;
          /** The date and time when the contact was last modified. */
          dateModified?: string | null;
          /** Contact fields grouped and returned by Mautic. */
          fields?: Record<string, unknown>;
          /** Tags associated with the contact. */
          tags?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Mautic contact by numeric contact ID. */
    "mautic.get_contact": {
      input: {
        /**
         * The numeric Mautic contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** Mautic contact data. */
        contact: {
          /**
           * The numeric Mautic contact ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** Whether the contact is published. */
          isPublished?: boolean;
          /** The contact's current points total. */
          points?: number;
          /** The date and time when the contact was created. */
          dateAdded?: string;
          /** The date and time when the contact was last modified. */
          dateModified?: string | null;
          /** Contact fields grouped and returned by Mautic. */
          fields?: Record<string, unknown>;
          /** Tags associated with the contact. */
          tags?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List Mautic contacts with optional search, pagination, and ordering controls. */
    "mautic.list_contacts": {
      input: {
        /**
         * A Mautic search expression or text filter applied to the collection.
         * @minLength 1
         */
        search?: string;
        /**
         * The zero-based starting row for the returned collection.
         * @minimum 0
         */
        start?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Mautic field used to order results, such as date_added or lastname.
         * @minLength 1
         */
        orderBy?: string;
        /** The result ordering direction. */
        orderByDir?: "asc" | "desc";
        /** Whether to return only published records. */
        publishedOnly?: boolean;
      };
      output: {
        /** Contacts returned by Mautic. */
        contacts: Array<{
          /**
           * The numeric Mautic contact ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** Whether the contact is published. */
          isPublished?: boolean;
          /** The contact's current points total. */
          points?: number;
          /** The date and time when the contact was created. */
          dateAdded?: string;
          /** The date and time when the contact was last modified. */
          dateModified?: string | null;
          /** Contact fields grouped and returned by Mautic. */
          fields?: Record<string, unknown>;
          /** Tags associated with the contact. */
          tags?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching contacts reported by Mautic.
         * @minimum 0
         */
        total: number;
      };
    };
    /** List Mautic segments with optional search, pagination, and ordering controls. */
    "mautic.list_segments": {
      input: {
        /**
         * A Mautic search expression or text filter applied to the collection.
         * @minLength 1
         */
        search?: string;
        /**
         * The zero-based starting row for the returned collection.
         * @minimum 0
         */
        start?: number;
        /**
         * The maximum number of records to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Mautic field used to order results, such as date_added or lastname.
         * @minLength 1
         */
        orderBy?: string;
        /** The result ordering direction. */
        orderByDir?: "asc" | "desc";
        /** Whether to return only published records. */
        publishedOnly?: boolean;
      };
      output: {
        /** Segments returned by Mautic. */
        segments: Array<{
          /**
           * The numeric Mautic segment ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The segment name. */
          name?: string;
          /** The segment name displayed to contacts. */
          publicName?: string;
          /** The segment alias or slug. */
          alias?: string;
          /** The segment description. */
          description?: string | null;
          /** Whether the segment is published. */
          isPublished?: boolean;
          /** Whether the segment is available to all Mautic users. */
          isGlobal?: boolean;
          /** Whether the segment is shown in preference centers. */
          isPreferenceCenter?: boolean;
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching segments reported by Mautic.
         * @minimum 0
         */
        total: number;
      };
    };
    /** Manually remove a Mautic contact from a segment. */
    "mautic.remove_contact_from_segment": {
      input: {
        /**
         * The numeric Mautic segment ID.
         * @exclusiveMinimum 0
         */
        segmentId: number;
        /**
         * The numeric Mautic contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** Whether Mautic completed the segment membership operation. */
        success: boolean;
        /**
         * The numeric Mautic segment ID.
         * @exclusiveMinimum 0
         */
        segmentId: number;
        /**
         * The numeric Mautic contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
    };
    /** Update selected fields on an existing Mautic contact without creating a missing contact. */
    "mautic.update_contact": {
      input: {
        /**
         * The numeric Mautic contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /** Contact field values keyed by Mautic field alias, such as email, firstname, lastname, company, or a custom field alias. */
        fields: Record<string, unknown>;
      };
      output: {
        /** Mautic contact data. */
        contact: {
          /**
           * The numeric Mautic contact ID.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** Whether the contact is published. */
          isPublished?: boolean;
          /** The contact's current points total. */
          points?: number;
          /** The date and time when the contact was created. */
          dateAdded?: string;
          /** The date and time when the contact was last modified. */
          dateModified?: string | null;
          /** Contact fields grouped and returned by Mautic. */
          fields?: Record<string, unknown>;
          /** Tags associated with the contact. */
          tags?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
  }
}
