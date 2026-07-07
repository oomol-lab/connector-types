import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a PostGrid Print & Mail contact using either a person name, company name, or both. */
    "postgrid.create_contact": {
      input: {
        /**
         * The first line of the contact's address.
         * @minLength 1
         * @pattern \S
         */
        addressLine1: string;
        /**
         * The second line of the contact's address.
         * @minLength 1
         * @pattern \S
         */
        addressLine2?: string;
        /**
         * The city of the contact's address.
         * @minLength 1
         * @pattern \S
         */
        city?: string;
        /**
         * The state or province of the contact's address.
         * @minLength 1
         * @pattern \S
         */
        provinceOrState?: string;
        /**
         * The postal or ZIP code of the contact's address.
         * @minLength 1
         * @pattern \S
         */
        postalOrZip?: string;
        /**
         * The ISO 3166-1 alpha-2 country code of the contact's address.
         * @pattern ^\s*[A-Za-z]{2}\s*$
         */
        countryCode: string;
        /**
         * The contact company name. Required when firstName is omitted.
         * @minLength 1
         * @pattern \S
         */
        companyName?: string;
        /**
         * The contact first name. Required when companyName is omitted.
         * @minLength 1
         * @pattern \S
         */
        firstName?: string;
        /**
         * The contact last name.
         * @minLength 1
         * @pattern \S
         */
        lastName?: string;
        /**
         * The contact email address.
         * @minLength 1
         * @pattern \S
         */
        email?: string;
        /**
         * The contact phone number.
         * @minLength 1
         * @pattern \S
         */
        phoneNumber?: string;
        /**
         * The contact job title.
         * @minLength 1
         * @pattern \S
         */
        jobTitle?: string;
        /**
         * An optional description visible in PostGrid and the dashboard.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
        /** Metadata key-value pairs stored with the PostGrid resource. */
        metadata?: Record<string, unknown>;
        /** Whether PostGrid should skip address verification. */
        skipVerification?: boolean;
        /** Whether PostGrid should force this contact to verified status. */
        forceVerifiedStatus?: boolean;
      };
      output: {
        /** The unique PostGrid contact ID. */
        id?: string;
        /** The PostGrid object type. */
        object?: "contact";
        /** Whether the contact belongs to live mode. */
        live?: boolean;
        /** The first line of the contact's address. */
        addressLine1?: string;
        /** The second line of the contact's address when present. */
        addressLine2?: string;
        /** The city of the contact's address. */
        city?: string;
        /** The state or province of the contact's address. */
        provinceOrState?: string;
        /** The postal or ZIP code of the contact's address. */
        postalOrZip?: string;
        /** The ISO 3166-1 country code of the contact's address. */
        countryCode?: string;
        /** The address verification status returned by PostGrid. */
        addressStatus?: string;
        /** Address verification warnings or errors returned by PostGrid. */
        addressErrors?: string;
        /** The contact company name. */
        companyName?: string;
        /** The contact first name. */
        firstName?: string;
        /** The contact last name. */
        lastName?: string;
        /** The contact email address. */
        email?: string;
        /** The contact phone number. */
        phoneNumber?: string;
        /** The contact job title. */
        jobTitle?: string;
        /** The optional contact description stored in PostGrid. */
        description?: string;
        /** Metadata key-value pairs stored with the PostGrid resource. */
        metadata?: Record<string, unknown>;
        /** Whether PostGrid skipped address verification for this contact. */
        skipVerification?: boolean;
        /** Whether PostGrid forced this contact to verified status. */
        forceVerifiedStatus?: boolean;
        /**
         * The time when PostGrid created the contact.
         * @format date-time
         */
        createdAt?: string;
        /**
         * The time when PostGrid last updated the contact.
         * @format date-time
         */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
    /** Create a PostGrid Print & Mail template with optional HTML, description, and metadata. */
    "postgrid.create_template": {
      input: {
        /**
         * The HTML content of the template.
         * @minLength 1
         * @pattern \S
         */
        html?: string;
        /**
         * An optional description visible in PostGrid and the dashboard.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
        /** Metadata key-value pairs stored with the PostGrid resource. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The unique PostGrid template ID. */
        id?: string;
        /** The PostGrid object type. */
        object?: "template";
        /** Whether the template belongs to live mode. */
        live?: boolean;
        /** The HTML content of the template. */
        html?: string;
        /** The optional template description stored in PostGrid. */
        description?: string;
        /** Metadata key-value pairs stored with the PostGrid resource. */
        metadata?: Record<string, unknown>;
        /**
         * The time when PostGrid created the template.
         * @format date-time
         */
        createdAt?: string;
        /**
         * The time when PostGrid last updated the template.
         * @format date-time
         */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
    /** Delete one PostGrid Print & Mail contact by ID. */
    "postgrid.delete_contact": {
      input: {
        /**
         * The PostGrid contact ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The PostGrid object type. */
        object: "contact";
        /** The deleted PostGrid contact ID. */
        id: string;
        /** Whether PostGrid deleted the contact. */
        deleted: true;
      };
    };
    /** Delete one PostGrid Print & Mail template by ID. */
    "postgrid.delete_template": {
      input: {
        /**
         * The PostGrid template ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The PostGrid object type. */
        object: "template";
        /** The deleted PostGrid template ID. */
        id: string;
        /** Whether PostGrid deleted the template. */
        deleted: true;
      };
    };
    /** Retrieve one PostGrid Print & Mail contact by ID. */
    "postgrid.get_contact": {
      input: {
        /**
         * The PostGrid contact ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The unique PostGrid contact ID. */
        id?: string;
        /** The PostGrid object type. */
        object?: "contact";
        /** Whether the contact belongs to live mode. */
        live?: boolean;
        /** The first line of the contact's address. */
        addressLine1?: string;
        /** The second line of the contact's address when present. */
        addressLine2?: string;
        /** The city of the contact's address. */
        city?: string;
        /** The state or province of the contact's address. */
        provinceOrState?: string;
        /** The postal or ZIP code of the contact's address. */
        postalOrZip?: string;
        /** The ISO 3166-1 country code of the contact's address. */
        countryCode?: string;
        /** The address verification status returned by PostGrid. */
        addressStatus?: string;
        /** Address verification warnings or errors returned by PostGrid. */
        addressErrors?: string;
        /** The contact company name. */
        companyName?: string;
        /** The contact first name. */
        firstName?: string;
        /** The contact last name. */
        lastName?: string;
        /** The contact email address. */
        email?: string;
        /** The contact phone number. */
        phoneNumber?: string;
        /** The contact job title. */
        jobTitle?: string;
        /** The optional contact description stored in PostGrid. */
        description?: string;
        /** Metadata key-value pairs stored with the PostGrid resource. */
        metadata?: Record<string, unknown>;
        /** Whether PostGrid skipped address verification for this contact. */
        skipVerification?: boolean;
        /** Whether PostGrid forced this contact to verified status. */
        forceVerifiedStatus?: boolean;
        /**
         * The time when PostGrid created the contact.
         * @format date-time
         */
        createdAt?: string;
        /**
         * The time when PostGrid last updated the contact.
         * @format date-time
         */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve one PostGrid Print & Mail template by ID. */
    "postgrid.get_template": {
      input: {
        /**
         * The PostGrid template ID.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The unique PostGrid template ID. */
        id?: string;
        /** The PostGrid object type. */
        object?: "template";
        /** Whether the template belongs to live mode. */
        live?: boolean;
        /** The HTML content of the template. */
        html?: string;
        /** The optional template description stored in PostGrid. */
        description?: string;
        /** Metadata key-value pairs stored with the PostGrid resource. */
        metadata?: Record<string, unknown>;
        /**
         * The time when PostGrid created the template.
         * @format date-time
         */
        createdAt?: string;
        /**
         * The time when PostGrid last updated the template.
         * @format date-time
         */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
    /** List PostGrid Print & Mail contacts with optional pagination and search. */
    "postgrid.list_contacts": {
      input: {
        /**
         * The number of resources to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of resources to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * An unstructured search string or a JSON string representing a PostGrid structured search query.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
      };
      output: {
        /** The PostGrid list object type. */
        object: "list";
        /** The total number of contacts matching the query. */
        totalCount: number;
        /** The number of contacts skipped by PostGrid. */
        skip: number;
        /** The maximum number of contacts PostGrid returned. */
        limit: number;
        /** The contacts returned by PostGrid. */
        data: Array<{
          /** The unique PostGrid contact ID. */
          id?: string;
          /** The PostGrid object type. */
          object?: "contact";
          /** Whether the contact belongs to live mode. */
          live?: boolean;
          /** The first line of the contact's address. */
          addressLine1?: string;
          /** The second line of the contact's address when present. */
          addressLine2?: string;
          /** The city of the contact's address. */
          city?: string;
          /** The state or province of the contact's address. */
          provinceOrState?: string;
          /** The postal or ZIP code of the contact's address. */
          postalOrZip?: string;
          /** The ISO 3166-1 country code of the contact's address. */
          countryCode?: string;
          /** The address verification status returned by PostGrid. */
          addressStatus?: string;
          /** Address verification warnings or errors returned by PostGrid. */
          addressErrors?: string;
          /** The contact company name. */
          companyName?: string;
          /** The contact first name. */
          firstName?: string;
          /** The contact last name. */
          lastName?: string;
          /** The contact email address. */
          email?: string;
          /** The contact phone number. */
          phoneNumber?: string;
          /** The contact job title. */
          jobTitle?: string;
          /** The optional contact description stored in PostGrid. */
          description?: string;
          /** Metadata key-value pairs stored with the PostGrid resource. */
          metadata?: Record<string, unknown>;
          /** Whether PostGrid skipped address verification for this contact. */
          skipVerification?: boolean;
          /** Whether PostGrid forced this contact to verified status. */
          forceVerifiedStatus?: boolean;
          /**
           * The time when PostGrid created the contact.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The time when PostGrid last updated the contact.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List PostGrid Print & Mail templates with optional pagination and search. */
    "postgrid.list_templates": {
      input: {
        /**
         * The number of resources to skip before returning results.
         * @minimum 0
         */
        skip?: number;
        /**
         * The maximum number of resources to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * An unstructured search string or a JSON string representing a PostGrid structured search query.
         * @minLength 1
         * @pattern \S
         */
        search?: string;
      };
      output: {
        /** The PostGrid list object type. */
        object: "list";
        /** The total number of templates matching the query. */
        totalCount: number;
        /** The number of templates skipped by PostGrid. */
        skip: number;
        /** The maximum number of templates PostGrid returned. */
        limit: number;
        /** The templates returned by PostGrid. */
        data: Array<{
          /** The unique PostGrid template ID. */
          id?: string;
          /** The PostGrid object type. */
          object?: "template";
          /** Whether the template belongs to live mode. */
          live?: boolean;
          /** The HTML content of the template. */
          html?: string;
          /** The optional template description stored in PostGrid. */
          description?: string;
          /** Metadata key-value pairs stored with the PostGrid resource. */
          metadata?: Record<string, unknown>;
          /**
           * The time when PostGrid created the template.
           * @format date-time
           */
          createdAt?: string;
          /**
           * The time when PostGrid last updated the template.
           * @format date-time
           */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the HTML, description, or metadata of one PostGrid Print & Mail template. */
    "postgrid.update_template": {
      input: {
        /**
         * The PostGrid template ID to update.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * The replacement HTML content for the template.
         * @minLength 1
         * @pattern \S
         */
        html?: string;
        /**
         * The replacement description for the template.
         * @minLength 1
         * @pattern \S
         */
        description?: string;
        /** Metadata key-value pairs stored with the PostGrid resource. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The unique PostGrid template ID. */
        id?: string;
        /** The PostGrid object type. */
        object?: "template";
        /** Whether the template belongs to live mode. */
        live?: boolean;
        /** The HTML content of the template. */
        html?: string;
        /** The optional template description stored in PostGrid. */
        description?: string;
        /** Metadata key-value pairs stored with the PostGrid resource. */
        metadata?: Record<string, unknown>;
        /**
         * The time when PostGrid created the template.
         * @format date-time
         */
        createdAt?: string;
        /**
         * The time when PostGrid last updated the template.
         * @format date-time
         */
        updatedAt?: string;
        [key: string]: unknown;
      };
    };
  }
}
