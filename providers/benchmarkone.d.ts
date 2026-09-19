import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a contact in BenchmarkONE. */
    "benchmarkone.create_contact": {
      input: {
        /** The BenchmarkONE contact fields to create or update. */
        contact: {
          /** The encrypted contact ID. Required when updating a contact. */
          contactId?: string;
          /** The contact's first name. */
          firstName?: string;
          /** The contact's last name. */
          lastName?: string;
          /** The contact's job title. */
          title?: string;
          /** The contact's company name. */
          company?: string;
          /** The contact's email addresses. */
          emails?: Array<{
            /** The encrypted email record ID when updating an existing email. */
            id?: string;
            /**
             * The email address.
             * @minLength 1
             * @format email
             */
            address: string;
            /** The configured email type name, such as work, home, or other. */
            type?: string;
            /** The configured email type ID. */
            typeId?: string;
          }>;
          /** The contact's phone numbers. */
          phones?: Array<{
            /** The encrypted phone record ID when updating an existing phone. */
            id?: string;
            /**
             * The phone number.
             * @minLength 1
             */
            number: string;
            /** The configured phone type name, such as work, home, or other. */
            type?: string;
            /** The configured phone type ID. */
            typeId?: string;
          }>;
          /** A BenchmarkONE configured value referenced by name or encrypted ID. */
          status?: Record<string, unknown>;
          /** A BenchmarkONE configured value referenced by name or encrypted ID. */
          temperature?: Record<string, unknown>;
          /** A BenchmarkONE sales representative referenced by username or encrypted ID. */
          salesRep?: Record<string, unknown>;
          /** The contact's street addresses. */
          addresses?: Array<{
            /** The encrypted address record ID when updating an existing address. */
            id?: string;
            /** The street address. */
            street?: string;
            /** The city. */
            city?: string;
            /** The state or region. */
            state?: string;
            /** The postal code. */
            zip?: string;
            /** The country name from the BenchmarkONE country list. */
            country?: string;
            /** The configured address type name, such as work or home. */
            type?: string;
            /** The configured address type ID. */
            typeId?: string;
          }>;
          /** Whether the contact opted in to email marketing. */
          subscribed?: boolean;
          /** The contact's timezone. */
          timezone?: string;
          /** A BenchmarkONE configured value referenced by name or encrypted ID. */
          source?: Record<string, unknown>;
          /** The optional name of the contact who made the referral. */
          referredBy?: string;
          /** The contact's custom field values. */
          customFields?: Array<{
            /**
             * The unique custom field name.
             * @minLength 1
             */
            name: string;
            /**
             * The custom field type, such as Text, Dropdown, MText, Number, or Date.
             * @minLength 1
             */
            type: string;
            /** The custom field value serialized as a string. */
            value: string;
          }>;
        };
      };
      output: {
        /** The contact object returned by BenchmarkONE. Stable top-level fields follow the official contact schema while additional upstream fields are preserved. */
        contact: {
          /** The encrypted contact ID. */
          contactId?: string;
          /** The contact's first name. */
          firstName?: string;
          /** The contact's last name. */
          lastName?: string;
          /** The contact's job title. */
          title?: string;
          /** The contact's company name. */
          company?: string;
          /** The contact's email records. */
          emails?: Array<Record<string, unknown>>;
          /** The contact's phone records. */
          phones?: Array<Record<string, unknown>>;
          /** Whether the contact opted in to email marketing. */
          subscribed?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List contact sources configured in the BenchmarkONE account. */
    "benchmarkone.list_contact_sources": {
      input: Record<string, never>;
      output: {
        /** The configured values returned by BenchmarkONE. */
        values: Array<{
          /** The encrypted configured value ID. */
          id?: string;
          /** The configured value name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List contact statuses configured in the BenchmarkONE account. */
    "benchmarkone.list_contact_statuses": {
      input: Record<string, never>;
      output: {
        /** The configured values returned by BenchmarkONE. */
        values: Array<{
          /** The encrypted configured value ID. */
          id?: string;
          /** The configured value name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List contact temperatures configured in the BenchmarkONE account. */
    "benchmarkone.list_contact_temperatures": {
      input: Record<string, never>;
      output: {
        /** The configured values returned by BenchmarkONE. */
        values: Array<{
          /** The encrypted configured value ID. */
          id?: string;
          /** The configured value name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search BenchmarkONE contacts by encrypted contact ID, name, or email address. */
    "benchmarkone.search_contacts": {
      input: {
        /** The encrypted contact ID to search for. */
        contactId?: string;
        /** The contact first name to search for. */
        firstName?: string;
        /** The contact last name to search for. */
        lastName?: string;
        /**
         * The email addresses to search for.
         * @minItems 1
         */
        emailAddresses?: Array<string>;
      };
      output: {
        /** The matching contacts. */
        contacts: Array<{
          /** The encrypted contact ID. */
          contactId?: string;
          /** The contact's first name. */
          firstName?: string;
          /** The contact's last name. */
          lastName?: string;
          /** The contact's job title. */
          title?: string;
          /** The contact's company name. */
          company?: string;
          /** The contact's email records. */
          emails?: Array<Record<string, unknown>>;
          /** The contact's phone records. */
          phones?: Array<Record<string, unknown>>;
          /** Whether the contact opted in to email marketing. */
          subscribed?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update a BenchmarkONE contact by encrypted contact ID. */
    "benchmarkone.update_contact": {
      input: {
        /**
         * The encrypted ID of the contact to update.
         * @minLength 1
         */
        contactId: string;
        /** The BenchmarkONE contact fields to create or update. */
        contact: {
          /** The encrypted contact ID. Required when updating a contact. */
          contactId?: string;
          /** The contact's first name. */
          firstName?: string;
          /** The contact's last name. */
          lastName?: string;
          /** The contact's job title. */
          title?: string;
          /** The contact's company name. */
          company?: string;
          /** The contact's email addresses. */
          emails?: Array<{
            /** The encrypted email record ID when updating an existing email. */
            id?: string;
            /**
             * The email address.
             * @minLength 1
             * @format email
             */
            address: string;
            /** The configured email type name, such as work, home, or other. */
            type?: string;
            /** The configured email type ID. */
            typeId?: string;
          }>;
          /** The contact's phone numbers. */
          phones?: Array<{
            /** The encrypted phone record ID when updating an existing phone. */
            id?: string;
            /**
             * The phone number.
             * @minLength 1
             */
            number: string;
            /** The configured phone type name, such as work, home, or other. */
            type?: string;
            /** The configured phone type ID. */
            typeId?: string;
          }>;
          /** A BenchmarkONE configured value referenced by name or encrypted ID. */
          status?: Record<string, unknown>;
          /** A BenchmarkONE configured value referenced by name or encrypted ID. */
          temperature?: Record<string, unknown>;
          /** A BenchmarkONE sales representative referenced by username or encrypted ID. */
          salesRep?: Record<string, unknown>;
          /** The contact's street addresses. */
          addresses?: Array<{
            /** The encrypted address record ID when updating an existing address. */
            id?: string;
            /** The street address. */
            street?: string;
            /** The city. */
            city?: string;
            /** The state or region. */
            state?: string;
            /** The postal code. */
            zip?: string;
            /** The country name from the BenchmarkONE country list. */
            country?: string;
            /** The configured address type name, such as work or home. */
            type?: string;
            /** The configured address type ID. */
            typeId?: string;
          }>;
          /** Whether the contact opted in to email marketing. */
          subscribed?: boolean;
          /** The contact's timezone. */
          timezone?: string;
          /** A BenchmarkONE configured value referenced by name or encrypted ID. */
          source?: Record<string, unknown>;
          /** The optional name of the contact who made the referral. */
          referredBy?: string;
          /** The contact's custom field values. */
          customFields?: Array<{
            /**
             * The unique custom field name.
             * @minLength 1
             */
            name: string;
            /**
             * The custom field type, such as Text, Dropdown, MText, Number, or Date.
             * @minLength 1
             */
            type: string;
            /** The custom field value serialized as a string. */
            value: string;
          }>;
        };
      };
      output: {
        /** The contact object returned by BenchmarkONE. Stable top-level fields follow the official contact schema while additional upstream fields are preserved. */
        contact: {
          /** The encrypted contact ID. */
          contactId?: string;
          /** The contact's first name. */
          firstName?: string;
          /** The contact's last name. */
          lastName?: string;
          /** The contact's job title. */
          title?: string;
          /** The contact's company name. */
          company?: string;
          /** The contact's email records. */
          emails?: Array<Record<string, unknown>>;
          /** The contact's phone records. */
          phones?: Array<Record<string, unknown>>;
          /** Whether the contact opted in to email marketing. */
          subscribed?: boolean;
          [key: string]: unknown;
        };
      };
    };
  }
}
