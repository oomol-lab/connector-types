import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Autocomplete a partially specified US or Canadian address with optional location filters. */
    "postgrid_verify.autocomplete_address": {
      input: {
        /**
         * The partially written street address to autocomplete.
         * @minLength 1
         * @pattern \S
         */
        partialStreet: string;
        /**
         * The optional completion result index to retrieve.
         * @minLength 1
         * @pattern \S
         */
        index?: string;
        /**
         * Only return addresses within this postal or ZIP code.
         * @minLength 1
         * @pattern \S
         */
        pcFilter?: string;
        /**
         * Only return addresses from this city.
         * @minLength 1
         * @pattern \S
         */
        cityFilter?: string;
        /**
         * Only return addresses within this state or province.
         * @minLength 1
         * @pattern \S
         */
        stateFilter?: string;
        /**
         * Only return addresses within this country.
         * @minLength 1
         * @pattern \S
         */
        countryFilter?: string;
      };
      output: {
        /** The status returned by PostGrid Verify. */
        status: string;
        /** The message returned by PostGrid Verify. */
        message: string;
        /** The address completion results. */
        data: Array<{
          /** The completed address details returned by PostGrid. */
          address?: {
            /** The completed street address line. */
            address?: string;
            /** The city name. */
            city?: string;
            /** The province or state abbreviation. */
            prov?: string;
            /** The postal or ZIP code. */
            pc?: string;
            /** The country code. */
            country?: string;
            [key: string]: unknown;
          };
          /** Field-level validation errors returned by PostGrid Verify. */
          errors?: Record<string, Array<string>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Look up city and state or province matches for a postal or ZIP code with PostGrid Verify. */
    "postgrid_verify.lookup_city_state_from_postal": {
      input: {
        /**
         * The postal or ZIP code used for the lookup.
         * @minLength 1
         * @pattern \S
         */
        postalOrZip: string;
      };
      output: {
        /** The status returned by PostGrid Verify. */
        status: string;
        /** The message returned by PostGrid Verify. */
        message: string;
        /** The matching city and state or province records. */
        data: Array<{
          /** The city name corresponding to the postal or ZIP code. */
          city?: string;
          /** The state or province corresponding to the postal or ZIP code. */
          provinceOrState?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Parse a single-line address into component fields with PostGrid Verify. */
    "postgrid_verify.parse_address": {
      input: {
        /**
         * The address to parse on a single line.
         * @minLength 1
         * @pattern \S
         */
        address: string;
      };
      output: {
        /** The status returned by PostGrid Verify. */
        status: string;
        /** The message returned by PostGrid Verify. */
        message: string;
        /** The parsed address components returned by PostGrid. */
        data: {
          /** The house or street number. */
          houseNumber?: string;
          /** The street name. */
          road?: string;
          /** The apartment, suite, or secondary unit designator. */
          unit?: string;
          /** The floor number. */
          level?: string;
          /** The building or location name. */
          house?: string;
          /** The postal office box. */
          poBox?: string;
          /** The city name. */
          city?: string;
          /** The borough or city district. */
          cityDistrict?: string;
          /** The state or province. */
          state?: string;
          /** The county or state district. */
          stateDistrict?: string;
          /** The postal or ZIP code. */
          postcode?: string;
          /** The country name. */
          country?: string;
          /** The neighborhood or suburb. */
          suburb?: string;
          /** The island name. */
          island?: string;
          /** The location category. */
          category?: string;
          /** The nearby location reference from the input query. */
          near?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Verify and standardize a US or Canadian address with PostGrid Verify using either freeform or structured address input. */
    "postgrid_verify.verify_address": {
      input: {
        /**
         * The freeform address written on a single line.
         * @minLength 1
         * @pattern \S
         */
        address?: string;
        /**
         * The first line of a structured address.
         * @minLength 1
         * @pattern \S
         */
        line1?: string;
        /**
         * The optional second line of a structured address.
         * @minLength 1
         * @pattern \S
         */
        line2?: string;
        /**
         * The city name for a structured address.
         * @minLength 1
         * @pattern \S
         */
        city?: string;
        /**
         * The state or province code for a structured address.
         * @minLength 1
         * @pattern \S
         */
        provinceOrState?: string;
        /**
         * The ZIP or postal code for a structured address.
         * @minLength 1
         * @pattern \S
         */
        postalOrZip?: string;
        /**
         * The ISO 2-letter country code for a structured address.
         * @minLength 1
         * @pattern \S
         */
        country?: string;
        /** Whether to include additional address details in the response. */
        includeDetails?: boolean;
        /** Whether to include latitude and longitude data in the response. */
        geocode?: boolean;
        /** Whether to return address fields in proper case. */
        properCase?: boolean;
      };
      output: {
        /** The status returned by PostGrid Verify. */
        status: string;
        /** The message returned by PostGrid Verify. */
        message: string;
        /** The verified address details returned by PostGrid. */
        data: {
          /** The first address line. */
          line1?: string;
          /** The second address line when present. */
          line2?: string;
          /** The city of the verified address. */
          city?: string;
          /** The state or province of the verified address. */
          provinceOrState?: string;
          /** The postal or ZIP code of the verified address. */
          postalOrZip?: string;
          /** The country code of the verified address. */
          country?: string;
          /** The address verification status. */
          status?: string;
          /** Field-level validation errors returned by PostGrid Verify. */
          errors?: Record<string, Array<string>>;
          [key: string]: unknown;
        };
      };
    };
  }
}
