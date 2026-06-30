import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate distance from one postal code to one or more comparison postal codes. */
    "zipcodebase.calculate_distance": {
      input: {
        /**
         * The postal code to query.
         * @minLength 1
         */
        code: string;
        /**
         * The postal codes to query.
         * @minItems 1
         */
        compare: Array<string>;
        /**
         * The ISO 3166-1 alpha-2 country code, such as us or nl.
         * @minLength 2
         * @maxLength 2
         */
        country: string;
        /** Optional distance unit returned by Zipcodebase. */
        unit?: "km" | "mile";
      };
      output: {
        /** The distance results returned by Zipcodebase. */
        results?: Array<{
          /** The compared postal code. */
          code?: string;
          /** The distance from the origin postal code. */
          distance?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Return Zipcodebase account status and remaining request credits. */
    "zipcodebase.get_status": {
      input: Record<string, never>;
      output: {
        /** The number of remaining requests reported by Zipcodebase. */
        requests_remaining?: number;
        [key: string]: unknown;
      };
    };
    /** List postal codes associated with a city and optional state or province. */
    "zipcodebase.list_postal_codes_by_city": {
      input: {
        /**
         * The city name to search for.
         * @minLength 1
         */
        city: string;
        /**
         * The ISO 3166-1 alpha-2 country code, such as us or nl.
         * @minLength 2
         * @maxLength 2
         */
        country: string;
        /**
         * The state or province name to search for.
         * @minLength 1
         */
        state_name?: string;
      };
      output: {
        /** The postal codes returned for the city. */
        results?: Array<{
          /** The postal code. */
          code?: string;
          /** The city name associated with the postal code. */
          city?: string | null;
          /** The state or region associated with the postal code. */
          state?: string | null;
          /** The country code associated with the postal code. */
          country?: string;
          /** The latitude coordinate. */
          latitude?: number;
          /** The longitude coordinate. */
          longitude?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List postal codes associated with a state or province. */
    "zipcodebase.list_postal_codes_by_state": {
      input: {
        /**
         * The state or province name to search for.
         * @minLength 1
         */
        state_name: string;
        /**
         * The ISO 3166-1 alpha-2 country code, such as us or nl.
         * @minLength 2
         * @maxLength 2
         */
        country: string;
      };
      output: {
        /** The postal codes returned for the state. */
        results?: Array<{
          /** The postal code. */
          code?: string;
          /** The city name associated with the postal code. */
          city?: string | null;
          /** The state or region associated with the postal code. */
          state?: string | null;
          /** The country code associated with the postal code. */
          country?: string;
          /** The latitude coordinate. */
          latitude?: number;
          /** The longitude coordinate. */
          longitude?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List postal codes located within a radius of a postal code. */
    "zipcodebase.list_postal_codes_within_radius": {
      input: {
        /**
         * The postal code to query.
         * @minLength 1
         */
        code: string;
        /**
         * The positive distance or radius value.
         * @exclusiveMinimum 0
         */
        radius: number;
        /**
         * The ISO 3166-1 alpha-2 country code, such as us or nl.
         * @minLength 2
         * @maxLength 2
         */
        country: string;
        /** Optional distance unit returned by Zipcodebase. */
        unit?: "km" | "mile";
      };
      output: {
        /** The postal codes found within the requested radius. */
        results?: Array<{
          /** The postal code. */
          code?: string;
          /** The city name associated with the postal code. */
          city?: string | null;
          /** The state or region associated with the postal code. */
          state?: string | null;
          /** The country code associated with the postal code. */
          country?: string;
          /** The latitude coordinate. */
          latitude?: number;
          /** The longitude coordinate. */
          longitude?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Find submitted postal code pairs that are within a given distance. */
    "zipcodebase.match_postal_codes_by_distance": {
      input: {
        /**
         * The postal codes to query.
         * @minItems 1
         */
        codes: Array<string>;
        /**
         * The positive distance or radius value.
         * @exclusiveMinimum 0
         */
        distance: number;
        /**
         * The ISO 3166-1 alpha-2 country code, such as us or nl.
         * @minLength 2
         * @maxLength 2
         */
        country: string;
        /** Optional distance unit returned by Zipcodebase. */
        unit?: "km" | "mile";
      };
      output: {
        /** The postal code pairs within the requested distance. */
        results?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Look up location information for one or more postal codes. */
    "zipcodebase.search_postal_codes": {
      input: {
        /**
         * The postal codes to query.
         * @minItems 1
         */
        codes: Array<string>;
        /**
         * Optional ISO 3166-1 alpha-2 country code used to narrow the request.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
      };
      output: {
        /** Postal code records keyed by submitted code. */
        results?: Record<string, {
            /** The postal code. */
            code?: string;
            /** The city name associated with the postal code. */
            city?: string | null;
            /** The state or region associated with the postal code. */
            state?: string | null;
            /** The country code associated with the postal code. */
            country?: string;
            /** The latitude coordinate. */
            latitude?: number;
            /** The longitude coordinate. */
            longitude?: number;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
  }
}
