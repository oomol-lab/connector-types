import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an existing Mailsoftly contact to a contact list. */
    "mailsoftly.add_contact_to_contact_list": {
      input: {
        /** The Mailsoftly contact list ID. */
        contact_list_id: number;
        /** The Mailsoftly contact ID. */
        contact_id: number;
      };
      output: {
        /** The operation status. */
        status?: string;
        /** Information about the membership operation. */
        info?: string;
        [key: string]: unknown;
      };
    };
    /** Add contacts to a Mailsoftly list by email, creating contacts that do not already exist. */
    "mailsoftly.add_contacts_to_contact_list": {
      input: {
        /** The Mailsoftly contact list ID. */
        contact_list_id: number;
        /**
         * Contacts to match or create by email.
         * @minItems 1
         */
        contacts: Array<{
          /**
           * The contact email address.
           * @format email
           */
          email: string;
          /** The contact first name. */
          first_name?: string;
          /** The contact last name. */
          last_name?: string;
        }>;
      };
      output: {
        /** The operation status. */
        status?: string;
        /** The number of contacts added to the list. */
        added_count?: number;
        /** Contacts that could not be added. */
        errors?: Array<{
          /** The contact payload that failed. */
          contact?: Record<string, unknown>;
          /** The error reported for the contact. */
          error?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a Mailsoftly contact with a unique email address. */
    "mailsoftly.create_contact": {
      input: {
        /**
         * The contact email address.
         * @format email
         */
        email: string;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
        /** The contact job title. */
        job_title?: string;
        /** The contact mobile phone number. */
        mobile_phone?: string;
        /** The contact work phone number. */
        work_phone?: string;
        /** The contact website. */
        website?: string;
        /** The contact address. */
        address?: string;
        /** The first contact address line. */
        address_line_1?: string;
        /** The second contact address line. */
        address_line_2?: string;
        /** A note to store on the contact. */
        note?: string;
        /**
         * The contact date of birth.
         * @format date
         */
        date_of_birth?: string;
        /** The contact gender value. */
        gender?: string;
        /** The contact country. */
        country?: string;
        /** The contact city. */
        city?: string;
        /** The contact state or region. */
        state?: string;
        /** The contact postal code. */
        zip_code?: string;
        /** The contact email subscription status. */
        email_sending_status?: "nonesubscribed" | "subscribed" | "unsubscribed" | "bounced" | "complaint";
        /** The contact industry. */
        industry?: string;
        /** The contact company. */
        company?: string;
        /** The source to record for the contact. */
        source?: string;
        /**
         * The contact opt-in timestamp.
         * @format date-time
         */
        opt_in_date?: string;
      };
      output: {
        /** The Mailsoftly contact ID. */
        id?: number;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact job title. */
        job_title?: string | null;
        /** The contact mobile phone number. */
        mobile_phone?: string | null;
        /** The contact work phone number. */
        work_phone?: string | null;
        /** The contact website. */
        website?: string | null;
        /** The contact address. */
        address?: string | null;
        /** The first contact address line. */
        address_line_1?: string | null;
        /** The second contact address line. */
        address_line_2?: string | null;
        /** A note stored on the contact. */
        note?: string | null;
        /**
         * The contact date of birth.
         * @format date
         */
        date_of_birth?: string | null;
        /** The contact gender value. */
        gender?: string | null;
        /** The contact country. */
        country?: string | null;
        /** The contact city. */
        city?: string | null;
        /** The contact state or region. */
        state?: string | null;
        /** The contact postal code. */
        zip_code?: string | null;
        /** The contact industry. */
        industry?: string | null;
        /** The contact company. */
        company?: string | null;
        /** The source recorded for the contact. */
        source?: string | null;
        /**
         * The contact opt-in timestamp.
         * @format date-time
         */
        opt_in_date?: string | null;
        /** Custom field values stored on the contact. */
        new_custom_fields?: Record<string, unknown> | null;
        /**
         * The contact creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The contact update timestamp.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Create an empty Mailsoftly contact list. */
    "mailsoftly.create_contact_list": {
      input: {
        /**
         * The contact list name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** The Mailsoftly contact list ID. */
        id?: number;
        /** The contact list name. */
        name?: string;
        /**
         * The contact list creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The contact list update timestamp.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Mailsoftly contact by ID, optionally with detailed fields. */
    "mailsoftly.get_contact": {
      input: {
        /** The Mailsoftly contact ID. */
        contact_id: number;
        /** Set to detailed to include all available contact fields. */
        type?: "detailed";
      };
      output: {
        /** The Mailsoftly contact ID. */
        id?: number;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact job title. */
        job_title?: string | null;
        /** The contact mobile phone number. */
        mobile_phone?: string | null;
        /** The contact work phone number. */
        work_phone?: string | null;
        /** The contact website. */
        website?: string | null;
        /** The contact address. */
        address?: string | null;
        /** The first contact address line. */
        address_line_1?: string | null;
        /** The second contact address line. */
        address_line_2?: string | null;
        /** A note stored on the contact. */
        note?: string | null;
        /**
         * The contact date of birth.
         * @format date
         */
        date_of_birth?: string | null;
        /** The contact gender value. */
        gender?: string | null;
        /** The contact country. */
        country?: string | null;
        /** The contact city. */
        city?: string | null;
        /** The contact state or region. */
        state?: string | null;
        /** The contact postal code. */
        zip_code?: string | null;
        /** The contact industry. */
        industry?: string | null;
        /** The contact company. */
        company?: string | null;
        /** The source recorded for the contact. */
        source?: string | null;
        /**
         * The contact opt-in timestamp.
         * @format date-time
         */
        opt_in_date?: string | null;
        /** Custom field values stored on the contact. */
        new_custom_fields?: Record<string, unknown> | null;
        /**
         * The contact creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The contact update timestamp.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Mailsoftly contact list by ID. */
    "mailsoftly.get_contact_list": {
      input: {
        /** The Mailsoftly contact list ID. */
        contact_list_id: number;
      };
      output: {
        /** The Mailsoftly contact list ID. */
        id?: number;
        /** The contact list name. */
        name?: string;
        /** The number of contacts in the list. */
        contacts_count?: number;
        /**
         * The contact list creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The contact list update timestamp.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** List contacts belonging to a Mailsoftly contact list. */
    "mailsoftly.get_contact_list_contacts": {
      input: {
        /** The Mailsoftly contact list ID. */
        contact_list_id: number;
      };
      output: Array<{
        /** The Mailsoftly contact ID. */
        id?: number;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        [key: string]: unknown;
      }>;
    };
    /** List general Mailsoftly contact lists and their contact counts. */
    "mailsoftly.get_contact_lists": {
      input: Record<string, never>;
      output: Array<{
        /** The Mailsoftly contact list ID. */
        id?: number;
        /** The contact list name. */
        name?: string;
        /** The number of contacts in the list. */
        contact_count?: number;
        [key: string]: unknown;
      }>;
    };
    /** List all contacts in the authenticated Mailsoftly account. */
    "mailsoftly.get_contacts": {
      input: Record<string, never>;
      output: Array<{
        /** The Mailsoftly contact ID. */
        id?: number;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        [key: string]: unknown;
      }>;
    };
    /** Search Mailsoftly contacts by exact email, first name, or last name. */
    "mailsoftly.search_contacts": {
      input: {
        /** The exact email value to match. */
        email?: string;
        /** The exact first name to match. */
        first_name?: string;
        /** The exact last name to match. */
        last_name?: string;
      };
      output: {
        /** The search operation status. */
        status?: string;
        /** A message describing the search result. */
        message?: string;
        /** Contacts matching the exact search criteria. */
        contacts?: Array<{
          /** The Mailsoftly contact ID. */
          id?: number;
          /** The contact first name. */
          first_name?: string;
          /** The contact last name. */
          last_name?: string;
          /** The contact email address. */
          email?: string;
          /** The source recorded for the contact. */
          source?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update selected fields on an existing Mailsoftly contact. */
    "mailsoftly.update_contact": {
      input: {
        /** The Mailsoftly contact ID. */
        contact_id: number;
        /** The updated contact first name. */
        first_name?: string;
        /** The updated contact last name. */
        last_name?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The updated contact job title. */
        job_title?: string;
        /** The updated contact company. */
        company?: string;
        /** The updated contact country. */
        country?: string;
        /** The updated contact city. */
        city?: string;
      };
      output: {
        /** The Mailsoftly contact ID. */
        id?: number;
        /** The contact first name. */
        first_name?: string;
        /** The contact last name. */
        last_name?: string;
        /**
         * The contact email address.
         * @format email
         */
        email?: string;
        /** The contact job title. */
        job_title?: string | null;
        /** The contact mobile phone number. */
        mobile_phone?: string | null;
        /** The contact work phone number. */
        work_phone?: string | null;
        /** The contact website. */
        website?: string | null;
        /** The contact address. */
        address?: string | null;
        /** The first contact address line. */
        address_line_1?: string | null;
        /** The second contact address line. */
        address_line_2?: string | null;
        /** A note stored on the contact. */
        note?: string | null;
        /**
         * The contact date of birth.
         * @format date
         */
        date_of_birth?: string | null;
        /** The contact gender value. */
        gender?: string | null;
        /** The contact country. */
        country?: string | null;
        /** The contact city. */
        city?: string | null;
        /** The contact state or region. */
        state?: string | null;
        /** The contact postal code. */
        zip_code?: string | null;
        /** The contact industry. */
        industry?: string | null;
        /** The contact company. */
        company?: string | null;
        /** The source recorded for the contact. */
        source?: string | null;
        /**
         * The contact opt-in timestamp.
         * @format date-time
         */
        opt_in_date?: string | null;
        /** Custom field values stored on the contact. */
        new_custom_fields?: Record<string, unknown> | null;
        /**
         * The contact creation timestamp.
         * @format date-time
         */
        created_at?: string;
        /**
         * The contact update timestamp.
         * @format date-time
         */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
  }
}
