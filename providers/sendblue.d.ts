import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create multiple Sendblue contacts and return successful contacts and any per-contact failures. */
    "sendblue.bulk_create_contacts": {
      input: {
        /**
         * Contacts to create.
         * @minItems 1
         */
        contacts: Array<{
          /**
           * Contact phone number in E.164 format.
           * @pattern ^\+[1-9][0-9]{1,14}$
           */
          phone: string;
          /** Contact first name. */
          firstName?: string;
          /** Contact last name. */
          lastName?: string;
          /** Contact company name. */
          company?: string;
          /** Complete set of contact tags; replaces existing tags on update. */
          tags?: Array<string>;
          /** Custom variables keyed by human-readable label; new labels are created and updates merge existing values. */
          customVariables?: Record<string, string>;
        }>;
      };
      output: {
        /** Upstream operation status. */
        status?: string;
        /** Successfully created contacts. */
        contacts?: Array<{
          /** Contact phone number. */
          phone?: string;
          /** Immutable contact identifier when returned. */
          contact_id?: string;
          [key: string]: unknown;
        }>;
        /** Number of contacts created. */
        numberOfContactsCreated?: number;
        /** Per-contact creation failures when present. */
        failures?: Array<{
          /** Submitted contact that failed. */
          contact?: Record<string, unknown>;
          /** Reason the contact failed. */
          error?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Delete multiple Sendblue contacts by phone number and return deletion counts. */
    "sendblue.bulk_delete_contacts": {
      input: {
        /**
         * Phone numbers of contacts to delete, not internal IDs.
         * @minItems 1
         */
        contact_ids: Array<string>;
      };
      output: {
        /** Upstream operation status. */
        status?: string;
        /** Upstream amount count. */
        amount?: number;
        /** Total contacts processed. */
        total?: number;
        /** Successful deletions. */
        successes?: number;
        /** Failed deletions. */
        failures?: number;
        [key: string]: unknown;
      };
    };
    /** Count Sendblue contacts, optionally filtered by phone number. */
    "sendblue.count_contacts": {
      input: {
        /**
         * Contact phone number in E.164 format.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        phone_number?: string;
      };
      output: {
        /** Number of matching contacts. */
        count?: number;
        [key: string]: unknown;
      };
    };
    /** Create a Sendblue contact, optionally updating an existing contact with the same number. */
    "sendblue.create_contact": {
      input: {
        /**
         * Contact phone number in E.164 format.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        number: string;
        /** Contact first name. */
        first_name?: string;
        /** Contact last name. */
        last_name?: string;
        /**
         * Associated Sendblue phone number in E.164 format.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        sendblue_number?: string;
        /** Email of the user assigned to the contact. */
        assigned_to_email?: string;
        /** Complete set of contact tags; replaces existing tags on update. */
        tags?: Array<string>;
        /** Custom variables keyed by human-readable label; new labels are created and updates merge existing values. */
        custom_variables?: Record<string, string>;
        /** Update the contact when it already exists; defaults to false. */
        update_if_exists?: boolean;
      };
      output: {
        /** Upstream operation status. */
        status?: string;
        /** Contact returned by Sendblue; upstream snake_case or camelCase fields are preserved. */
        contact?: {
          /** Contact phone number. */
          phone?: string;
          /** Immutable contact identifier when returned. */
          contact_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete a Sendblue contact by phone number. */
    "sendblue.delete_contact": {
      input: {
        /**
         * Contact phone number in E.164 format.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        number: string;
      };
      output: {
        /** Upstream operation status. */
        status?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Sendblue contact by phone number. */
    "sendblue.get_contact": {
      input: {
        /**
         * Contact phone number in E.164 format.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        number: string;
      };
      output: {
        /** Upstream operation status. */
        status?: string;
        /** Contact returned by Sendblue; upstream snake_case or camelCase fields are preserved. */
        contact?: {
          /** Contact phone number. */
          phone?: string;
          /** Immutable contact identifier when returned. */
          contact_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List Sendblue contacts with offset pagination, phone or identity filters, and sorting. */
    "sendblue.list_contacts": {
      input: {
        /**
         * Maximum contacts per page; defaults to 100, capped at 1000.
         * @minimum 1
         * @maximum 1000
         * @default 100
         */
        limit?: number;
        /**
         * Contacts to skip; capped at 10000.
         * @minimum 0
         * @maximum 10000
         * @default 0
         */
        offset?: number;
        /** Contact sort field. */
        order_by?: "created_at" | "firstName" | "lastName" | "phone";
        /** Sort direction. */
        order_direction?: "asc" | "desc";
        /**
         * Contact phone number in E.164 format.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        phone_number?: string;
        /**
         * Filter by contact ID.
         * @minLength 1
         */
        cid?: string;
        /**
         * Include contacts created at or after this ISO 8601 timestamp.
         * @format date-time
         */
        created_at_gte?: string;
      };
      output: {
        /** Contacts in this page. */
        contacts: Array<{
          /** Contact phone number. */
          phone?: string;
          /** Immutable contact identifier when returned. */
          contact_id?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Set a Sendblue contact's messaging opt-out preference, or opt the contact back in. */
    "sendblue.set_contact_opt_out": {
      input: {
        /**
         * Contact phone number in E.164 format.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        number: string;
        /**
         * True blocks outbound messages; false opts back in. Defaults to true.
         * @default true
         */
        opted_out?: boolean;
      };
      output: {
        /** Upstream operation status. */
        status?: string;
        /** Normalized contact phone number. */
        number?: string;
        /** Current opt-out preference. */
        opted_out?: boolean;
        [key: string]: unknown;
      };
    };
    /** Update a Sendblue contact. Tags replace the full set; custom variables merge with existing values. */
    "sendblue.update_contact": {
      input: {
        /**
         * Contact phone number in E.164 format.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        number: string;
        /** Contact first name. */
        first_name?: string;
        /** Contact last name. */
        last_name?: string;
        /**
         * Associated Sendblue phone number in E.164 format.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        sendblue_number?: string;
        /** Email of the user assigned to the contact. */
        assigned_to_email?: string;
        /** Complete set of contact tags; replaces existing tags on update. */
        tags?: Array<string>;
        /** Custom variables keyed by human-readable label; new labels are created and updates merge existing values. */
        custom_variables?: Record<string, string>;
        /**
         * New phone number in E.164 format; number selects the existing contact.
         * @pattern ^\+[1-9][0-9]{1,14}$
         */
        phone_number?: string;
        /** Contact company name. */
        company_name?: string;
        /** Whether the contact is opted out of SMS. */
        opt_out?: boolean;
      };
      output: {
        /** Upstream operation status. */
        status?: string;
        /** Contact returned by Sendblue; upstream snake_case or camelCase fields are preserved. */
        contact?: {
          /** Contact phone number. */
          phone?: string;
          /** Immutable contact identifier when returned. */
          contact_id?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
