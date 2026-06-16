import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Return Lob US address autocomplete suggestions for a partial address. */
    "lob.autocomplete_us_addresses": {
      input: {
        /**
         * The beginning of the US address to autocomplete.
         * @minLength 1
         */
        address_prefix: string;
        /**
         * The city name for the address.
         * @minLength 1
         */
        city?: string;
        /**
         * The US state or region for the address.
         * @minLength 1
         */
        state?: string;
        /**
         * The US ZIP or ZIP+4 code for the address.
         * @minLength 1
         */
        zip_code?: string;
        /** Whether Lob should sort suggestions based on the request origin's IP geolocation. */
        geo_ip_sort?: boolean;
      };
      output: {
        /** The Lob US address autocomplete suggestions. */
        suggestions: Array<Record<string, unknown>>;
        /** The raw Lob autocomplete response metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Verify and standardize multiple international addresses with Lob Address Verification. */
    "lob.bulk_verify_international_addresses": {
      input: {
        /**
         * The international addresses to verify.
         * @minItems 1
         * @maxItems 100
         */
        addresses: Array<{
          /**
           * The primary street address line.
           * @minLength 1
           */
          primary_line: string;
          /**
           * The secondary address line, such as an apartment, suite, or unit.
           * @minLength 1
           */
          secondary_line?: string;
          /**
           * The city name for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * The US state or region for the address.
           * @minLength 1
           */
          state?: string;
          /**
           * The postal code for an international address.
           * @minLength 1
           */
          postal_code?: string;
          /**
           * The destination country code or country name.
           * @minLength 1
           */
          country: string;
          /**
           * The recipient name associated with the address.
           * @minLength 1
           */
          recipient?: string;
        }>;
      };
      output: {
        /** The Lob international address verification objects. */
        verifications: Array<Record<string, unknown>>;
        /** The raw Lob bulk international verification response metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Verify and standardize multiple US addresses with Lob Address Verification. */
    "lob.bulk_verify_us_addresses": {
      input: {
        /**
         * The US addresses to verify.
         * @minItems 1
         * @maxItems 100
         */
        addresses: Array<{
          /**
           * The primary street address line.
           * @minLength 1
           */
          primary_line: string;
          /**
           * The secondary address line, such as an apartment, suite, or unit.
           * @minLength 1
           */
          secondary_line?: string;
          /**
           * The city name for the address.
           * @minLength 1
           */
          city?: string;
          /**
           * The US state or region for the address.
           * @minLength 1
           */
          state?: string;
          /**
           * The US ZIP or ZIP+4 code for the address.
           * @minLength 1
           */
          zip_code?: string;
          /**
           * The recipient name associated with the address.
           * @minLength 1
           */
          recipient?: string;
        }>;
      };
      output: {
        /** The Lob US address verification objects. */
        verifications: Array<Record<string, unknown>>;
        /** The raw Lob bulk verification response metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** Verify and standardize one international address with Lob Address Verification. */
    "lob.verify_international_address": {
      input: {
        /**
         * The primary street address line.
         * @minLength 1
         */
        primary_line: string;
        /**
         * The secondary address line, such as an apartment, suite, or unit.
         * @minLength 1
         */
        secondary_line?: string;
        /**
         * The city name for the address.
         * @minLength 1
         */
        city?: string;
        /**
         * The US state or region for the address.
         * @minLength 1
         */
        state?: string;
        /**
         * The postal code for an international address.
         * @minLength 1
         */
        postal_code?: string;
        /**
         * The destination country code or country name.
         * @minLength 1
         */
        country: string;
        /**
         * The recipient name associated with the address.
         * @minLength 1
         */
        recipient?: string;
      };
      output: {
        /** A Lob address verification object. */
        verification: Record<string, unknown>;
      };
    };
    /** Verify and standardize one US address with Lob Address Verification. */
    "lob.verify_us_address": {
      input: {
        /**
         * The primary street address line.
         * @minLength 1
         */
        primary_line: string;
        /**
         * The secondary address line, such as an apartment, suite, or unit.
         * @minLength 1
         */
        secondary_line?: string;
        /**
         * The city name for the address.
         * @minLength 1
         */
        city?: string;
        /**
         * The US state or region for the address.
         * @minLength 1
         */
        state?: string;
        /**
         * The US ZIP or ZIP+4 code for the address.
         * @minLength 1
         */
        zip_code?: string;
        /**
         * The recipient name associated with the address.
         * @minLength 1
         */
        recipient?: string;
      };
      output: {
        /** A Lob address verification object. */
        verification: Record<string, unknown>;
      };
    };
  }
}
