import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Quentn contact with optional duplicate handling. */
    "quentn.create_contact": {
      input: {
        /** Quentn contact fields, including custom fields. */
        contact: {
          /** Contact first name. */
          first_name?: string;
          /** Contact family name. */
          family_name?: string;
          /**
           * Contact email address.
           * @format email
           */
          mail?: string;
          /** IPv4 address associated with this contact submission. */
          request_ip?: string;
          /** Billing address street, required when mail is omitted. */
          ba_street?: string;
          /** Billing address city, required when mail is omitted. */
          ba_city?: string;
          /** Billing address postal code, required when mail is omitted. */
          ba_postal_code?: string;
          [key: string]: unknown;
        };
        /** Method Quentn uses to search for duplicate contacts. */
        duplicate_check_method?: "auto" | "email" | "none";
        /** Method Quentn uses to merge a contact when a duplicate is found. */
        duplicate_merge_method?: "update_add" | "update" | "add";
        /** Additional contact fields Quentn should return. */
        return_fields?: Array<string>;
        /**
         * Maximum contacts allowed from the same request_ip within an hour; 0 disables the check.
         * @minimum 0
         */
        flood_limit?: number;
        /** Whether Quentn should check request_ip for spam protection. */
        spam_protection?: boolean;
      };
      output: {
        /** A Quentn contact response. */
        contact: {
          /** Quentn contact ID. */
          id: number | null;
          /** Contact first name. */
          first_name: string | null;
          /** Contact family name. */
          family_name: string | null;
          /** Contact email address. */
          mail: string | null;
          /** Quentn contact mail status. */
          mail_status: number | null;
          /** Raw Quentn contact payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create one Quentn term. */
    "quentn.create_term": {
      input: {
        /**
         * Term name.
         * @minLength 1
         * @pattern \S
         */
        name: string;
        /** Term description. */
        description?: string;
      };
      output: {
        /** ID returned by Quentn. */
        id: number | null;
        /** Raw Quentn response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one Quentn contact by contact ID. */
    "quentn.delete_contact": {
      input: {
        /**
         * Quentn contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
      };
      output: {
        /** Whether Quentn reported the operation as successful. */
        success: boolean;
        /** Raw Quentn response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one Quentn term by ID. */
    "quentn.delete_term": {
      input: {
        /**
         * Quentn term ID.
         * @exclusiveMinimum 0
         */
        term_id: number;
      };
      output: {
        /** Whether Quentn reported the operation as successful. */
        success: boolean;
        /** Raw Quentn response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Find Quentn contacts by email address. */
    "quentn.find_contacts_by_email": {
      input: {
        /**
         * Contact email address.
         * @format email
         */
        email: string;
        /** Optional contact field names to return. */
        fields?: Array<string>;
      };
      output: {
        /** Contacts returned by Quentn. */
        contacts: Array<{
          /** Quentn contact ID. */
          id: number | null;
          /** Contact first name. */
          first_name: string | null;
          /** Contact family name. */
          family_name: string | null;
          /** Contact email address. */
          mail: string | null;
          /** Quentn contact mail status. */
          mail_status: number | null;
          /** Raw Quentn contact payload. */
          raw: Record<string, unknown>;
        }>;
        /** Raw Quentn contact payloads. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** Get one Quentn contact by contact ID. */
    "quentn.get_contact_by_id": {
      input: {
        /**
         * Quentn contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
        /** Optional contact field names to return. */
        fields?: Array<string>;
      };
      output: {
        /** A Quentn contact response. */
        contact: {
          /** Quentn contact ID. */
          id: number | null;
          /** Contact first name. */
          first_name: string | null;
          /** Contact family name. */
          family_name: string | null;
          /** Contact email address. */
          mail: string | null;
          /** Quentn contact mail status. */
          mail_status: number | null;
          /** Raw Quentn contact payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Quentn term by ID. */
    "quentn.get_term": {
      input: {
        /**
         * Quentn term ID.
         * @exclusiveMinimum 0
         */
        term_id: number;
      };
      output: {
        /** A Quentn term. */
        term: {
          /** Quentn term ID. */
          id: number | null;
          /** Quentn term name. */
          name: string | null;
          /** Quentn term description. */
          description: string | null;
          /** Whether Quentn blocks deletion for this term. */
          deletion_blocked: boolean | null;
          /** Raw Quentn term payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get one Quentn user by ID. */
    "quentn.get_user": {
      input: {
        /**
         * Quentn user ID.
         * @exclusiveMinimum 0
         */
        user_id: number;
      };
      output: {
        /** A Quentn user. */
        user: {
          /** Quentn user ID. */
          uid: number | null;
          /** User email address. */
          mail: string | null;
          /** User first name. */
          first_name: string | null;
          /** User last name. */
          last_name: string | null;
          /** User timezone. */
          timezone: string | null;
          /** User language code. */
          language: string | null;
          /** UNIX timestamp when the user was created. */
          created: number | null;
          /** UNIX timestamp when the user was changed. */
          changed: number | null;
          /** Roles assigned to the user. */
          roles: Array<{
            /** Quentn role ID. */
            rid: number | null;
            /** Quentn role name. */
            name: string | null;
            /** Raw Quentn role payload. */
            raw: Record<string, unknown>;
          }>;
          /** Raw Quentn user payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List all Quentn terms assigned to one contact. */
    "quentn.list_contact_terms": {
      input: {
        /**
         * Quentn contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
      };
      output: {
        /** Terms assigned to the contact. */
        terms: Array<{
          /** Quentn term ID. */
          id: number | null;
          /** Quentn term name. */
          name: string | null;
          /** Quentn term description. */
          description: string | null;
          /** Whether Quentn blocks deletion for this term. */
          deletion_blocked: boolean | null;
          /** Raw Quentn term payload. */
          raw: Record<string, unknown>;
        }>;
        /** Raw Quentn contact term payloads. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Quentn terms. */
    "quentn.list_terms": {
      input: {
        /**
         * Number of terms to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Maximum number of terms to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Terms returned by Quentn. */
        terms: Array<{
          /** Quentn term ID. */
          id: number | null;
          /** Quentn term name. */
          name: string | null;
          /** Quentn term description. */
          description: string | null;
          /** Whether Quentn blocks deletion for this term. */
          deletion_blocked: boolean | null;
          /** Raw Quentn term payload. */
          raw: Record<string, unknown>;
        }>;
        /** Raw Quentn term payloads. */
        raw: Array<Record<string, unknown>>;
      };
    };
    /** List Quentn users visible to the current API key. */
    "quentn.list_users": {
      input: {
        /**
         * Result range index, starting from 0.
         * @minimum 0
         */
        range?: number;
        /**
         * Maximum number of users to return, between 1 and 20.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /** The order of Quentn list results. */
        sort?: "asc" | "desc";
      };
      output: {
        /** Total number of users. */
        number_users: number | null;
        /** Returned result range. */
        range: number | null;
        /** Returned result limit. */
        limit: number | null;
        /** Returned sort order. */
        sort: string | null;
        /** Total number of result ranges. */
        number_ranges: number | null;
        /** Users returned by Quentn. */
        users: Array<{
          /** Quentn user ID. */
          uid: number | null;
          /** User email address. */
          mail: string | null;
          /** User first name. */
          first_name: string | null;
          /** User last name. */
          last_name: string | null;
          /** User timezone. */
          timezone: string | null;
          /** User language code. */
          language: string | null;
          /** UNIX timestamp when the user was created. */
          created: number | null;
          /** UNIX timestamp when the user was changed. */
          changed: number | null;
          /** Roles assigned to the user. */
          roles: Array<{
            /** Quentn role ID. */
            rid: number | null;
            /** Quentn role name. */
            name: string | null;
            /** Raw Quentn role payload. */
            raw: Record<string, unknown>;
          }>;
          /** Raw Quentn user payload. */
          raw: Record<string, unknown>;
        }>;
        /** Raw Quentn response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove selected Quentn terms from one contact. */
    "quentn.remove_contact_terms": {
      input: {
        /**
         * Quentn contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
        /**
         * Quentn term IDs to remove from the contact.
         * @minItems 1
         */
        term_ids: Array<number>;
      };
      output: {
        /** Whether Quentn reported the operation as successful. */
        success: boolean;
        /** Raw Quentn response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Set the complete Quentn term ID list assigned to one contact. */
    "quentn.set_contact_terms": {
      input: {
        /**
         * Quentn contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
        /**
         * Quentn term IDs to assign to the contact.
         * @minItems 1
         */
        term_ids: Array<number>;
      };
      output: {
        /** Whether Quentn reported the operation as successful. */
        success: boolean;
        /** Raw Quentn response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update one Quentn contact by contact ID. */
    "quentn.update_contact": {
      input: {
        /**
         * Quentn contact ID.
         * @exclusiveMinimum 0
         */
        contact_id: number;
        /** Quentn contact fields, including custom fields. */
        updates: {
          /** Contact first name. */
          first_name?: string;
          /** Contact family name. */
          family_name?: string;
          /**
           * Contact email address.
           * @format email
           */
          mail?: string;
          /** IPv4 address associated with this contact submission. */
          request_ip?: string;
          /** Billing address street, required when mail is omitted. */
          ba_street?: string;
          /** Billing address city, required when mail is omitted. */
          ba_city?: string;
          /** Billing address postal code, required when mail is omitted. */
          ba_postal_code?: string;
          [key: string]: unknown;
        };
        /** Additional contact fields Quentn should return. */
        return_fields?: Array<string>;
      };
      output: {
        /** Whether Quentn reported a successful update. */
        success: boolean;
        /** A Quentn contact response. */
        contact: {
          /** Quentn contact ID. */
          id: number | null;
          /** Contact first name. */
          first_name: string | null;
          /** Contact family name. */
          family_name: string | null;
          /** Contact email address. */
          mail: string | null;
          /** Quentn contact mail status. */
          mail_status: number | null;
          /** Raw Quentn contact payload. */
          raw: Record<string, unknown>;
        } | null;
        /** Raw Quentn response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update one Quentn term by ID. */
    "quentn.update_term": {
      input: {
        /**
         * Quentn term ID.
         * @exclusiveMinimum 0
         */
        term_id: number;
        /**
         * Updated term name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Updated term description. */
        description?: string;
      };
      output: {
        /** Whether Quentn reported the operation as successful. */
        success: boolean;
        /** Raw Quentn response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
