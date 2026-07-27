import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one ActiveCampaign contact by identifier. */
    "activecampaign.get_contact": {
      input: {
        /**
         * ActiveCampaign contact identifier.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** The requested ActiveCampaign contact. */
        contact: {
          /** ActiveCampaign contact identifier. */
          id: string;
          /** Contact email address, or null when ActiveCampaign omits it. */
          email?: string | null;
          /** Contact first name, or null when ActiveCampaign omits it. */
          firstName?: string | null;
          /** Contact last name, or null when ActiveCampaign omits it. */
          lastName?: string | null;
          /** Contact phone number, or null when ActiveCampaign omits it. */
          phone?: string | null;
          /** Primary organization identifier, or null when ActiveCampaign omits it. */
          organizationId?: string | null;
          /** Contact creation timestamp, or null when omitted. */
          createdAt?: string | null;
          /** Contact update timestamp, or null when omitted. */
          updatedAt?: string | null;
          /** Whether the contact is deleted, or null when ActiveCampaign omits it. */
          deleted?: boolean | null;
          /** Custom field values returned with the contact when present. */
          fieldValues?: Array<{
            /** Custom field identifier. */
            field: string;
            /** Custom field value. */
            value: string;
            /** Raw ActiveCampaign contact field value payload. */
            raw: Record<string, unknown>;
          }>;
          /** Raw ActiveCampaign contact payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the current ActiveCampaign user associated with the API token. */
    "activecampaign.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current ActiveCampaign user. */
        user: {
          /** ActiveCampaign user identifier. */
          id: string;
          /** User email address, or null when ActiveCampaign omits it. */
          email?: string | null;
          /** User first name, or null when ActiveCampaign omits it. */
          firstName?: string | null;
          /** User last name, or null when ActiveCampaign omits it. */
          lastName?: string | null;
          /** Username, or null when ActiveCampaign omits it. */
          username?: string | null;
          /** Phone number, or null when ActiveCampaign omits it. */
          phone?: string | null;
          /** Email signature, or null when ActiveCampaign omits it. */
          signature?: string | null;
          /** Raw ActiveCampaign user payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List ActiveCampaign contacts with pagination, search, and filtering support. */
    "activecampaign.list_contacts": {
      input: {
        /**
         * Maximum number of contacts to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Offset for retrieving the next ActiveCampaign page.
         * @minimum 0
         */
        offset?: number;
        /**
         * Free-text search applied to contact names, email, phone, or organization.
         * @minLength 1
         */
        search?: string;
        /**
         * Substring filter applied to the contact email address.
         * @minLength 1
         */
        emailLike?: string;
        /**
         * Only return contacts associated with this list identifier.
         * @minLength 1
         */
        listId?: string;
        /**
         * Only return contacts associated with this tag identifier.
         * @exclusiveMinimum 0
         */
        tagId?: number;
        /**
         * Only return contacts that match this ActiveCampaign segment.
         * @exclusiveMinimum 0
         */
        segmentId?: number;
        /**
         * Only return contacts with an ID greater than this value.
         * @exclusiveMinimum 0
         */
        idGreater?: number;
        /**
         * Only return contacts with an ID less than this value.
         * @exclusiveMinimum 0
         */
        idLess?: number;
        /**
         * Only return contacts created after this date.
         * @format date
         */
        createdAfter?: string;
        /**
         * Only return contacts created before this date.
         * @format date
         */
        createdBefore?: string;
        /**
         * Only return contacts updated after this date.
         * @format date
         */
        updatedAfter?: string;
        /**
         * Only return contacts updated before this date.
         * @format date
         */
        updatedBefore?: string;
        /** Contact field used for sorting. */
        sortBy?: "id" | "name" | "email" | "score" | "first_name" | "last_name";
        /** Sort direction accepted by the connector. */
        sortDirection?: "asc" | "desc";
      };
      output: {
        /** Contacts returned by ActiveCampaign. */
        contacts: Array<{
          /** ActiveCampaign contact identifier. */
          id: string;
          /** Contact email address, or null when ActiveCampaign omits it. */
          email?: string | null;
          /** Contact first name, or null when ActiveCampaign omits it. */
          firstName?: string | null;
          /** Contact last name, or null when ActiveCampaign omits it. */
          lastName?: string | null;
          /** Contact phone number, or null when ActiveCampaign omits it. */
          phone?: string | null;
          /** Primary organization identifier, or null when ActiveCampaign omits it. */
          organizationId?: string | null;
          /** Contact creation timestamp, or null when omitted. */
          createdAt?: string | null;
          /** Contact update timestamp, or null when omitted. */
          updatedAt?: string | null;
          /** Whether the contact is deleted, or null when ActiveCampaign omits it. */
          deleted?: boolean | null;
          /** Custom field values returned with the contact when present. */
          fieldValues?: Array<{
            /** Custom field identifier. */
            field: string;
            /** Custom field value. */
            value: string;
            /** Raw ActiveCampaign contact field value payload. */
            raw: Record<string, unknown>;
          }>;
          /** Raw ActiveCampaign contact payload. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata for the current contact page. */
        pagination: {
          /** Total number of records reported by ActiveCampaign, or null when unavailable. */
          total: number | null;
          /** Page size echoed by ActiveCampaign, or null when unavailable. */
          limit: number | null;
          /** Page offset echoed by ActiveCampaign, or null when unavailable. */
          offset: number | null;
        };
      };
    };
    /** List ActiveCampaign custom contact fields. */
    "activecampaign.list_fields": {
      input: {
        /**
         * Maximum number of custom fields to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Offset for retrieving the next ActiveCampaign custom fields page.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Custom fields returned by ActiveCampaign. */
        fields: Array<{
          /** ActiveCampaign custom field identifier. */
          id: string;
          /** Field title, or null when ActiveCampaign omits it. */
          title?: string | null;
          /** Field type, or null when ActiveCampaign omits it. */
          type?: string | null;
          /** Field description, or null when ActiveCampaign omits it. */
          description?: string | null;
          /** Personalization tag for the field, or null when omitted. */
          personalizationTag?: string | null;
          /** Field creation timestamp, or null when omitted. */
          createdAt?: string | null;
          /** Field update timestamp, or null when omitted. */
          updatedAt?: string | null;
          /** Whether the field is visible, or null when ActiveCampaign omits it. */
          visible?: boolean | null;
          /** Whether the field is required, or null when ActiveCampaign omits it. */
          required?: boolean | null;
          /** Whether the field is shown in lists, or null when omitted. */
          showInList?: boolean | null;
          /** Options returned for dropdown-like fields. */
          options: Array<Record<string, unknown>>;
          /** Raw ActiveCampaign field payload. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ActiveCampaign mailing lists with pagination and optional name filtering. */
    "activecampaign.list_lists": {
      input: {
        /**
         * Maximum number of lists to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Offset for retrieving the next ActiveCampaign page.
         * @minimum 0
         */
        offset?: number;
        /**
         * Substring filter applied to the ActiveCampaign list name.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** Mailing lists returned by ActiveCampaign. */
        lists: Array<{
          /** ActiveCampaign list identifier. */
          id: string;
          /** List name, or null when ActiveCampaign omits it. */
          name?: string | null;
          /** Owner user identifier, or null when ActiveCampaign omits it. */
          userId?: string | null;
          /** URL-safe list identifier, or null when omitted. */
          stringId?: string | null;
          /** List creation timestamp, or null when omitted. */
          createdAt?: string | null;
          /** List update timestamp, or null when omitted. */
          updatedAt?: string | null;
          /** Whether the list is private, or null when ActiveCampaign omits it. */
          private?: boolean | null;
          /** Sender name, or null when ActiveCampaign omits it. */
          senderName?: string | null;
          /** Sender website URL, or null when omitted. */
          senderUrl?: string | null;
          /** Sender reminder text, or null when ActiveCampaign omits it. */
          senderReminder?: string | null;
          /** Sender address block, or null when omitted. */
          fullAddress?: string | null;
          /** Raw ActiveCampaign list payload. */
          raw: Record<string, unknown>;
        }>;
        /** Pagination metadata for the current list page. */
        pagination: {
          /** Total number of records reported by ActiveCampaign, or null when unavailable. */
          total: number | null;
          /** Page size echoed by ActiveCampaign, or null when unavailable. */
          limit: number | null;
          /** Page offset echoed by ActiveCampaign, or null when unavailable. */
          offset: number | null;
        };
      };
    };
    /** Create or update an ActiveCampaign contact using the official contact sync endpoint. */
    "activecampaign.upsert_contact": {
      input: {
        /**
         * Contact email address used as the sync key.
         * @format email
         */
        email: string;
        /**
         * Contact first name to create or update.
         * @minLength 1
         */
        firstName?: string;
        /**
         * Contact last name to create or update.
         * @minLength 1
         */
        lastName?: string;
        /**
         * Contact phone number to create or update.
         * @minLength 1
         */
        phone?: string;
        /**
         * Custom field values to write during the contact sync.
         * @minItems 1
         */
        fieldValues?: Array<{
          /**
           * Custom field identifier.
           * @minLength 1
           */
          field: string;
          /** Custom field value. */
          value: string;
        }>;
      };
      output: {
        /** The created or updated ActiveCampaign contact. */
        contact: {
          /** ActiveCampaign contact identifier. */
          id: string;
          /** Contact email address, or null when ActiveCampaign omits it. */
          email?: string | null;
          /** Contact first name, or null when ActiveCampaign omits it. */
          firstName?: string | null;
          /** Contact last name, or null when ActiveCampaign omits it. */
          lastName?: string | null;
          /** Contact phone number, or null when ActiveCampaign omits it. */
          phone?: string | null;
          /** Primary organization identifier, or null when ActiveCampaign omits it. */
          organizationId?: string | null;
          /** Contact creation timestamp, or null when omitted. */
          createdAt?: string | null;
          /** Contact update timestamp, or null when omitted. */
          updatedAt?: string | null;
          /** Whether the contact is deleted, or null when ActiveCampaign omits it. */
          deleted?: boolean | null;
          /** Custom field values returned with the contact when present. */
          fieldValues?: Array<{
            /** Custom field identifier. */
            field: string;
            /** Custom field value. */
            value: string;
            /** Raw ActiveCampaign contact field value payload. */
            raw: Record<string, unknown>;
          }>;
          /** Raw ActiveCampaign contact payload. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
