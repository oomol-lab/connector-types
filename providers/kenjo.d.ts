import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Kenjo office linked to an existing company and calendar. */
    "kenjo.create_office": {
      input: {
        /**
         * The office name.
         * @minLength 1
         */
        name: string;
        /**
         * The Kenjo company ID.
         * @minLength 1
         */
        companyId: string;
        /**
         * The Kenjo calendar ID.
         * @minLength 1
         */
        calendarId: string;
        /** The office street address. */
        street?: string;
        /** The office postal code. */
        postalCode?: string;
        /** The office city. */
        city?: string;
        /**
         * The ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
      };
      output: {
        /** A Kenjo office, including additional upstream fields. */
        office: {
          /** The Kenjo office ID. */
          _id?: string;
          /**
           * The office name.
           * @minLength 1
           */
          name?: string;
          /**
           * The Kenjo company ID.
           * @minLength 1
           */
          companyId?: string;
          /**
           * The Kenjo calendar ID.
           * @minLength 1
           */
          calendarId?: string;
          /** The office street address. */
          street?: string;
          /** The office postal code, returned as a string or number. */
          postalCode?: string | number;
          /** The office city. */
          city?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          country?: string;
          /** Whether the office is enabled as a shift plan location. */
          activeForShiftplan?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Kenjo office by ID. */
    "kenjo.delete_office": {
      input: {
        /**
         * The Kenjo office ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether Kenjo confirmed deletion. */
        deleted: boolean;
      };
    };
    /** Get a Kenjo office by ID. */
    "kenjo.get_office": {
      input: {
        /**
         * The Kenjo office ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Kenjo office, including additional upstream fields. */
        office: {
          /** The Kenjo office ID. */
          _id?: string;
          /**
           * The office name.
           * @minLength 1
           */
          name?: string;
          /**
           * The Kenjo company ID.
           * @minLength 1
           */
          companyId?: string;
          /**
           * The Kenjo calendar ID.
           * @minLength 1
           */
          calendarId?: string;
          /** The office street address. */
          street?: string;
          /** The office postal code, returned as a string or number. */
          postalCode?: string | number;
          /** The office city. */
          city?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          country?: string;
          /** Whether the office is enabled as a shift plan location. */
          activeForShiftplan?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List Kenjo calendars for use when creating offices. */
    "kenjo.list_calendars": {
      input: {
        /** The name to filter by. */
        name?: string;
      };
      output: {
        /** The calendars. */
        items: Array<{
          /** The Kenjo entry ID. */
          _id?: string;
          /** The entry name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Kenjo companies, optionally filtered by name, city, or country. */
    "kenjo.list_companies": {
      input: {
        /** The name to filter by. */
        name?: string;
        /** The company city. */
        city?: string;
        /**
         * The ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
      };
      output: {
        /** The companies. */
        items: Array<{
          /** The company ID. */
          _id?: string;
          /** The name to filter by. */
          name?: string;
          /** The company city. */
          city?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          country?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Kenjo departments, optionally filtered by name. */
    "kenjo.list_departments": {
      input: {
        /** The name to filter by. */
        name?: string;
      };
      output: {
        /** The departments. */
        items: Array<{
          /** The Kenjo entry ID. */
          _id?: string;
          /** The entry name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Kenjo offices using company, calendar, address, or shift plan filters. */
    "kenjo.list_offices": {
      input: {
        /**
         * The office name.
         * @minLength 1
         */
        name?: string;
        /**
         * The Kenjo company ID.
         * @minLength 1
         */
        companyId?: string;
        /**
         * The Kenjo calendar ID.
         * @minLength 1
         */
        calendarId?: string;
        /** The office street address. */
        street?: string;
        /** The office postal code. */
        postalCode?: string;
        /** The office city. */
        city?: string;
        /**
         * The ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /** Filter by whether the office is enabled for the shift plan. */
        activeForShiftplan?: boolean;
      };
      output: {
        /** The offices. */
        items: Array<{
          /** The Kenjo office ID. */
          _id?: string;
          /**
           * The office name.
           * @minLength 1
           */
          name?: string;
          /**
           * The Kenjo company ID.
           * @minLength 1
           */
          companyId?: string;
          /**
           * The Kenjo calendar ID.
           * @minLength 1
           */
          calendarId?: string;
          /** The office street address. */
          street?: string;
          /** The office postal code, returned as a string or number. */
          postalCode?: string | number;
          /** The office city. */
          city?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          country?: string;
          /** Whether the office is enabled as a shift plan location. */
          activeForShiftplan?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the name of an existing Kenjo office. */
    "kenjo.update_office": {
      input: {
        /**
         * The Kenjo office ID.
         * @minLength 1
         */
        id: string;
        /**
         * The office name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Kenjo office, including additional upstream fields. */
        office: {
          /** The Kenjo office ID. */
          _id?: string;
          /**
           * The office name.
           * @minLength 1
           */
          name?: string;
          /**
           * The Kenjo company ID.
           * @minLength 1
           */
          companyId?: string;
          /**
           * The Kenjo calendar ID.
           * @minLength 1
           */
          calendarId?: string;
          /** The office street address. */
          street?: string;
          /** The office postal code, returned as a string or number. */
          postalCode?: string | number;
          /** The office city. */
          city?: string;
          /**
           * The ISO 3166-1 alpha-2 country code.
           * @minLength 2
           * @maxLength 2
           */
          country?: string;
          /** Whether the office is enabled as a shift plan location. */
          activeForShiftplan?: boolean;
          [key: string]: unknown;
        };
      };
    };
  }
}
