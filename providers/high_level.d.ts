import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a HighLevel contact in a location. */
    "high_level.create_contact": {
      input: {
        /** HighLevel contact fields to create or update. Additional HighLevel custom fields are allowed. */
        fields: {
          /**
           * The HighLevel sub-account or location identifier.
           * @minLength 1
           */
          locationId?: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact full name. */
          name?: string;
          /** The contact email address. */
          email?: string;
          /** The contact phone number. */
          phone?: string;
          /** The first address line. */
          address1?: string;
          /** The city name. */
          city?: string;
          /** The state, region, or province. */
          state?: string;
          /** The postal or ZIP code. */
          postalCode?: string;
          /** The contact website URL. */
          website?: string;
          /** The contact timezone. */
          timezone?: string;
          /** The source label for the contact. */
          source?: string;
          /** The contact country. */
          country?: string;
          /** The company name associated with the contact. */
          companyName?: string;
          /** Tags to attach to the contact. */
          tags?: Array<string>;
          /** HighLevel custom field values. */
          customFields?: Array<{
            /**
             * The custom field identifier.
             * @minLength 1
             */
            id: string;
            /** The custom field value. */
            value: unknown;
          }>;
          [key: string]: unknown;
        };
      };
      output: {
        /** A HighLevel contact record. */
        contact: {
          /** The HighLevel contact identifier. */
          id?: string;
          /** The HighLevel location identifier. */
          locationId?: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact full name. */
          name?: string;
          /** The contact email address. */
          email?: string;
          /** The contact phone number. */
          phone?: string;
          /** Tags attached to the contact. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
        /** The raw HighLevel response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a HighLevel contact by contact ID. */
    "high_level.delete_contact": {
      input: {
        /**
         * The HighLevel contact identifier.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** Whether HighLevel accepted the contact deletion request. */
        success: boolean;
        /** The HighLevel deletion message. */
        message: string;
        /** The raw HighLevel response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a HighLevel contact by contact ID. */
    "high_level.get_contact": {
      input: {
        /**
         * The HighLevel contact identifier.
         * @minLength 1
         */
        contactId: string;
      };
      output: {
        /** A HighLevel contact record. */
        contact: {
          /** The HighLevel contact identifier. */
          id?: string;
          /** The HighLevel location identifier. */
          locationId?: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact full name. */
          name?: string;
          /** The contact email address. */
          email?: string;
          /** The contact phone number. */
          phone?: string;
          /** Tags attached to the contact. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
        /** The raw HighLevel response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search HighLevel contacts in a location. */
    "high_level.search_contacts": {
      input: {
        /**
         * The HighLevel sub-account or location identifier.
         * @minLength 1
         */
        locationId?: string;
        /** A text query for matching contacts. */
        query?: string;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The maximum number of contacts to return.
         * @minimum 1
         * @maximum 100
         */
        pageLimit?: number;
        /** Advanced HighLevel contact search filters. */
        filters?: Array<Record<string, unknown>>;
        /** HighLevel contact search sort options. */
        sort?: Array<Record<string, unknown>>;
      };
      output: {
        /** The matching HighLevel contacts. */
        contacts: Array<{
          /** The HighLevel contact identifier. */
          id?: string;
          /** The HighLevel location identifier. */
          locationId?: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact full name. */
          name?: string;
          /** The contact email address. */
          email?: string;
          /** The contact phone number. */
          phone?: string;
          /** Tags attached to the contact. */
          tags?: Array<string>;
          [key: string]: unknown;
        }>;
        /**
         * The total number of matching contacts.
         * @minimum 0
         */
        total: number;
        /** The raw HighLevel response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update a HighLevel contact by contact ID. */
    "high_level.update_contact": {
      input: {
        /**
         * The HighLevel contact identifier.
         * @minLength 1
         */
        contactId: string;
        /** HighLevel contact fields to create or update. Additional HighLevel custom fields are allowed. */
        fields: {
          /**
           * The HighLevel sub-account or location identifier.
           * @minLength 1
           */
          locationId?: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact full name. */
          name?: string;
          /** The contact email address. */
          email?: string;
          /** The contact phone number. */
          phone?: string;
          /** The first address line. */
          address1?: string;
          /** The city name. */
          city?: string;
          /** The state, region, or province. */
          state?: string;
          /** The postal or ZIP code. */
          postalCode?: string;
          /** The contact website URL. */
          website?: string;
          /** The contact timezone. */
          timezone?: string;
          /** The source label for the contact. */
          source?: string;
          /** The contact country. */
          country?: string;
          /** The company name associated with the contact. */
          companyName?: string;
          /** Tags to attach to the contact. */
          tags?: Array<string>;
          /** HighLevel custom field values. */
          customFields?: Array<{
            /**
             * The custom field identifier.
             * @minLength 1
             */
            id: string;
            /** The custom field value. */
            value: unknown;
          }>;
          [key: string]: unknown;
        };
      };
      output: {
        /** A HighLevel contact record. */
        contact: {
          /** The HighLevel contact identifier. */
          id?: string;
          /** The HighLevel location identifier. */
          locationId?: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact full name. */
          name?: string;
          /** The contact email address. */
          email?: string;
          /** The contact phone number. */
          phone?: string;
          /** Tags attached to the contact. */
          tags?: Array<string>;
          [key: string]: unknown;
        };
        /** The raw HighLevel response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
