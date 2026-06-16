import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Calendarific holidays for a given country and year with optional filters. */
    "calendarific.get_holidays": {
      input: {
        /**
         * The ISO 3166-1 alpha-2 country code used by Calendarific.
         * @pattern ^\s*[A-Za-z]{2}\s*$
         */
        country: string;
        /**
         * The holiday year to query. Calendarific supports years up to 2049.
         * @minimum 1900
         * @maximum 2049
         */
        year: number;
        /**
         * The month number used to limit holiday results.
         * @minimum 1
         * @maximum 12
         */
        month?: number;
        /**
         * The day of month used to limit holiday results.
         * @minimum 1
         * @maximum 31
         */
        day?: number;
        /**
         * The state, county, or region code used to narrow holiday results.
         * @minLength 1
         * @pattern \S
         */
        location?: string;
        /**
         * The holiday types used to filter Calendarific holiday results.
         * @minItems 1
         */
        type?: Array<string>;
        /**
         * The ISO 639 language code used to localize holiday names.
         * @minLength 1
         * @pattern \S
         */
        language?: string;
        /** Whether Calendarific should include UUID values in each holiday record. */
        uuid?: boolean;
      };
      output: {
        /** The top-level metadata returned by Calendarific. */
        meta: {
          /** The HTTP-like status code reported by Calendarific. */
          code: number;
        };
        /** The holidays returned by Calendarific. */
        holidays: Array<{
          /** The holiday name. */
          name: string;
          /** The holiday description when provided. */
          description: string | null;
          /** The ISO date string extracted from the holiday date object. */
          dateIso: string | null;
          /** The holiday date object returned by Calendarific. */
          date: {
            /** The ISO date string returned by Calendarific. */
            iso: string | null;
            /** The split date fields returned by Calendarific. */
            datetime: {
              /** The holiday year. */
              year: number | null;
              /** The holiday month. */
              month: number | null;
              /** The holiday day. */
              day: number | null;
            };
          };
          /** The holiday type list returned by Calendarific. */
          type: Array<string>;
          /** The first holiday type when available. */
          primaryType: string | null;
          /** The locations string returned by Calendarific. */
          locations: string | null;
          /** The states string returned by Calendarific. */
          states: string | null;
          /** The holiday UUID when requested and available. */
          uuid: string | null;
          /** The raw holiday object returned by Calendarific. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List countries currently supported by Calendarific. */
    "calendarific.list_supported_countries": {
      input: Record<string, never>;
      output: {
        /** The top-level metadata returned by Calendarific. */
        meta: {
          /** The HTTP-like status code reported by Calendarific. */
          code: number;
        };
        /** The countries returned by Calendarific. */
        countries: Array<{
          /** The country name returned by Calendarific. */
          name: string;
          /** The ISO 3166-1 alpha-2 country code. */
          isoCode: string;
          /** The number of holidays Calendarific reports for the country when present. */
          totalHolidays: number | null;
          /** The number of languages Calendarific reports for the country when present. */
          supportedLanguages: number | null;
          /** The raw country object returned by Calendarific. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List languages currently supported by Calendarific. */
    "calendarific.list_supported_languages": {
      input: Record<string, never>;
      output: {
        /** The top-level metadata returned by Calendarific. */
        meta: {
          /** The HTTP-like status code reported by Calendarific. */
          code: number;
        };
        /** The languages returned by Calendarific. */
        languages: Array<{
          /** The language code returned by Calendarific. */
          code: string;
          /** The display name of the language. */
          name: string;
          /** The raw language object returned by Calendarific. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
