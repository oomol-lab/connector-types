import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new Mailjet contact in the global contact list. */
    "mailjet.create_contact": {
      input: {
        /**
         * Contact email address. It must be unique in the global contact list.
         * @format email
         */
        email: string;
        /**
         * User-selected name for this contact.
         * @minLength 1
         */
        name?: string;
        /** Whether the contact should be excluded from marketing campaigns. */
        isExcludedFromCampaigns?: boolean;
      };
      output: {
        /** A normalized Mailjet contact. */
        contact: {
          /** Unique numeric ID of this contact. */
          id: number;
          /**
           * Contact email address.
           * @format email
           */
          email: string;
          /** User-selected name for this contact. */
          name?: string | null;
          /** Whether the contact is excluded from marketing campaigns. */
          isExcludedFromCampaigns?: boolean | null;
          /** Timestamp when the contact was added to Mailjet. */
          createdAt?: string | null;
          /** Timestamp of the last registered contact activity. */
          lastActivityAt?: string | null;
          /** Timestamp of the last contact name or exclusion update. */
          lastUpdateAt?: string | null;
          /** Raw Mailjet contact object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Mailjet contact by contact ID. */
    "mailjet.get_contact": {
      input: {
        /**
         * The Mailjet contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
      };
      output: {
        /** A normalized Mailjet contact. */
        contact: {
          /** Unique numeric ID of this contact. */
          id: number;
          /**
           * Contact email address.
           * @format email
           */
          email: string;
          /** User-selected name for this contact. */
          name?: string | null;
          /** Whether the contact is excluded from marketing campaigns. */
          isExcludedFromCampaigns?: boolean | null;
          /** Timestamp when the contact was added to Mailjet. */
          createdAt?: string | null;
          /** Timestamp of the last registered contact activity. */
          lastActivityAt?: string | null;
          /** Timestamp of the last contact name or exclusion update. */
          lastUpdateAt?: string | null;
          /** Raw Mailjet contact object. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Mailjet contacts with pagination and selected public contact filters from the Email API. */
    "mailjet.list_contacts": {
      input: {
        /**
         * Limit the number of returned contacts. Mailjet allows at most 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Define a starting point from which to return contacts.
         * @minimum 0
         */
        offset?: number;
        /**
         * Return only contacts targeted by this campaign ID.
         * @exclusiveMinimum 0
         */
        campaign?: number;
        /**
         * Return only contacts that are part of this contact list ID.
         * @exclusiveMinimum 0
         */
        contactsList?: number;
        /** When true, return only contacts excluded from marketing campaigns. */
        isExcludedFromCampaigns?: boolean;
        /**
         * Mailjet sort directive, such as Email ASC.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Number of contacts returned in this response. */
        count: number;
        /** Total number of contacts Mailjet reports for this query. */
        total: number;
        /** Contacts returned by Mailjet. */
        contacts: Array<{
          /** Unique numeric ID of this contact. */
          id: number;
          /**
           * Contact email address.
           * @format email
           */
          email: string;
          /** User-selected name for this contact. */
          name?: string | null;
          /** Whether the contact is excluded from marketing campaigns. */
          isExcludedFromCampaigns?: boolean | null;
          /** Timestamp when the contact was added to Mailjet. */
          createdAt?: string | null;
          /** Timestamp of the last registered contact activity. */
          lastActivityAt?: string | null;
          /** Timestamp of the last contact name or exclusion update. */
          lastUpdateAt?: string | null;
          /** Raw Mailjet contact object. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Update a Mailjet contact name or campaign exclusion state. */
    "mailjet.update_contact": {
      input: {
        /**
         * The Mailjet contact ID.
         * @exclusiveMinimum 0
         */
        contactId: number;
        /**
         * User-selected name for this contact.
         * @minLength 1
         */
        name?: string;
        /** Whether the contact should be excluded from marketing campaigns. */
        isExcludedFromCampaigns?: boolean;
      };
      output: {
        /** A normalized Mailjet contact. */
        contact: {
          /** Unique numeric ID of this contact. */
          id: number;
          /**
           * Contact email address.
           * @format email
           */
          email: string;
          /** User-selected name for this contact. */
          name?: string | null;
          /** Whether the contact is excluded from marketing campaigns. */
          isExcludedFromCampaigns?: boolean | null;
          /** Timestamp when the contact was added to Mailjet. */
          createdAt?: string | null;
          /** Timestamp of the last registered contact activity. */
          lastActivityAt?: string | null;
          /** Timestamp of the last contact name or exclusion update. */
          lastUpdateAt?: string | null;
          /** Raw Mailjet contact object. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
