import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List supported countries and their international dialing codes. */
    "numverify.list_countries": {
      input: Record<string, never>;
      output: {
        /** Supported countries keyed by country code. */
        countries: Record<string, {
            /** Full country name. */
            country_name?: string;
            /** International dialing code. */
            dialling_code?: string;
            [key: string]: unknown;
          }>;
      };
    };
    /** Validate a phone number and look up its country, carrier and line type. */
    "numverify.validate_phone_number": {
      input: {
        /**
         * Phone number in international or national format.
         * @minLength 1
         */
        number: string;
        /**
         * Two-letter country code required for national numbers; omit for international numbers.
         * @minLength 2
         * @maxLength 2
         */
        country_code?: string;
      };
      output: {
        /** Whether the phone number is valid. */
        valid: boolean;
        /** Phone number returned by Numverify. */
        number?: string;
        /** National representation of the phone number. */
        local_format?: string;
        /** International representation of the phone number. */
        international_format?: string;
        /** International country dialing prefix. */
        country_prefix?: string;
        /** Two-letter country code. */
        country_code?: string;
        /** Full country name. */
        country_name?: string;
        /** City, state or county, when available. */
        location?: string | null;
        /** Carrier name, when available. */
        carrier?: string | null;
        /** Phone line type, such as mobile or landline. */
        line_type?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
