import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Autocomplete addresses from a partial query and return the official AddressZen suggestions. */
    "addresszen.find_address": {
      input: {
        /**
         * The partial address string to autocomplete.
         * @minLength 1
         * @maxLength 150
         */
        query: string;
        /**
         * The optional AddressZen context used to narrow the search.
         * @minLength 1
         */
        context?: string;
        /**
         * The optional country name used to filter results.
         * @minLength 1
         */
        country?: string;
        /**
         * The maximum number of suggestions to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The AddressZen response code. */
        code: number;
        /** The AddressZen response message. */
        message: string;
        /** The AddressZen autocomplete payload. */
        result: {
          /** The ordered list of suggestions returned by AddressZen. */
          hits: Array<{
            /** The opaque suggestion identifier returned by AddressZen. */
            id: string;
            /** The suggestion string that should be shown to the user. */
            suggestion: string;
            /** Any related URLs that AddressZen returns for the suggestion. */
            urls: Record<string, string> | null;
            /** The optional UK delivery point reference number. */
            udprn?: number;
            [key: string]: unknown;
          }>;
        };
      };
    };
    /** Retrieve the current AddressZen key availability and context list. */
    "addresszen.get_key_availability": {
      input: Record<string, never>;
      output: {
        /** The AddressZen response code. */
        code: number;
        /** The AddressZen response message. */
        message: string;
        /** The AddressZen key availability payload. */
        result: {
          /** Whether the connected key is currently usable. */
          available: boolean;
          /** The current context returned by AddressZen, or an empty string. */
          context: string;
          /** The list of contexts available to the key. */
          contexts: Array<{
            /** The 3-letter ISO country code. */
            iso_3: string;
            /** The 2-letter ISO country code. */
            iso_2: string;
            /** The human-readable context description. */
            description: string;
            /** The emoji associated with the context. */
            emoji: string;
            /** Whether reverse geolocation is available in this context. */
            rgeo: boolean;
          }>;
        };
      };
    };
    /** Retrieve a USA-formatted address from an AddressZen suggestion identifier and return the official response wrapper. */
    "addresszen.retrieve_address_usa": {
      input: {
        /**
         * The suggestion identifier returned by the AddressZen autocomplete API.
         * @minLength 1
         */
        address: string;
      };
      output: {
        /** The AddressZen response code. */
        code: number;
        /** The AddressZen response message. */
        message: string;
        /** The USA-formatted address object returned by AddressZen. */
        result: {
          /** The unique address identifier. */
          id: string;
          /** The AddressZen dataset that produced the address. */
          dataset: string;
          /** The full country name. */
          country: string;
          /** The 3-letter ISO country code. */
          country_iso: string;
          /** The 2-letter ISO country code. */
          country_iso_2: string;
          /** The language code for the address. */
          language: string;
          /** The primary building or house number. */
          primary_number: string;
          /** The secondary unit or apartment number. */
          secondary_number: string;
          /** The USPS plus-4 component. */
          plus_4_code: string;
          /** The first line of the address. */
          line_1: string;
          /** The second line of the address. */
          line_2: string;
          /** The combined city, state, and postal code line. */
          last_line: string;
          /** The 5-digit ZIP code. */
          zip_code: string;
          /** The full ZIP+4 code. */
          zip_plus_4_code: string;
          /** The update key number returned by AddressZen. */
          update_key_number: string;
          /** The USPS record type code. */
          record_type_code: string;
          /** The USPS carrier route identifier. */
          carrier_route_id: string;
          /** The street pre-directional abbreviation. */
          street_pre_directional_abbreviation: string;
          /** The street name. */
          street_name: string;
          /** The street suffix abbreviation. */
          street_suffix_abbreviation: string;
          /** The street post-directional abbreviation. */
          street_post_directional_abbreviation: string;
          /** The building or firm name. */
          building_or_firm_name: string;
          /** The secondary address abbreviation. */
          address_secondary_abbreviation: string;
          /** The base alternate code. */
          base_alternate_code: string;
          /** The LACS status indicator. */
          lacs_status_indicator: string;
          /** The government building indicator. */
          government_building_indicator: string;
          /** The state abbreviation. */
          state_abbreviation: string;
          /** The full state name. */
          state: string;
          /** The municipality city state key. */
          municipality_city_state_key: string;
          /** The urbanization city state key. */
          urbanization_city_state_key: string;
          /** The preferred last line city state key. */
          preferred_last_line_city_state_key: string;
          /** The county name. */
          county: string;
          /** The city name. */
          city: string;
          /** The city abbreviation. */
          city_abbreviation: string;
          /** The preferred city name. */
          preferred_city: string;
          /** The city state name facility code. */
          city_state_name_facility_code: string;
          /** The ZIP classification code. */
          zip_classification_code: string;
          /** The city state mailing name indicator. */
          city_state_mailing_name_indicator: string;
          /** The carrier route rate sortation code. */
          carrier_route_rate_sortation: string;
          /** The AddressZen value, which may be numeric or an empty string when unavailable. */
          finance_number: number | string;
          /** The AddressZen value, which may be numeric or an empty string when unavailable. */
          congressional_district_number: number | string;
          /** The AddressZen value, which may be numeric or an empty string when unavailable. */
          county_number: number | string;
          /** The native nested address payload, when present. */
          native?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
