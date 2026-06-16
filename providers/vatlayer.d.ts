import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate VAT-compliant inclusive and exclusive prices with vatlayer. */
    "vatlayer.calculate_price": {
      input: {
        /**
         * Monetary amount to convert.
         * @exclusiveMinimum 0
         */
        amount: number;
        /**
         * Reduced VAT type to apply, such as medical or books.
         * @minLength 1
         */
        type?: string;
        /** Whether the amount already includes VAT and should be reverse-calculated. */
        incl?: boolean;
        /**
         * Two-letter ISO country code to select country VAT rates.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * Custom IP address to use to geolocate a country for VAT rate lookup.
         * @minLength 1
         */
        ipAddress?: string;
        /** Whether vatlayer should use the requester's IP address to determine the country. */
        useClientIp?: boolean;
      };
      output: {
        /** Whether the VAT price calculation succeeded. */
        success: boolean;
        /** Country code used for the calculation. */
        country_code: string;
        /** Country name used for the calculation. */
        country_name: string;
        /** Price excluding VAT. */
        price_excl_vat: number;
        /** Price including VAT. */
        price_incl_vat: number;
        /** VAT rate in percent applied during the calculation. */
        vat_rate: number;
        /** Reduced VAT type used for the calculation. */
        type: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve VAT rates for one country selected by country code, IP address, or client IP. */
    "vatlayer.get_rate": {
      input: {
        /**
         * Two-letter ISO country code to select country VAT rates.
         * @minLength 2
         * @maxLength 2
         */
        countryCode?: string;
        /**
         * Custom IP address to use to geolocate a country for VAT rate lookup.
         * @minLength 1
         */
        ipAddress?: string;
        /** Whether vatlayer should use the requester's IP address to determine the country. */
        useClientIp?: boolean;
      };
      output: {
        /** Whether the VAT rate lookup succeeded. */
        success: boolean;
        /** Two-letter country code for which rates are returned. */
        country_code: string;
        /** Full country name. */
        country_name: string;
        /** Standard VAT rate in percent. */
        standard_rate: number;
        /** Mapping of reduced VAT rate type names to VAT percentages. */
        reduced_rates: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** Retrieve VAT rates for all EU member states from vatlayer. */
    "vatlayer.list_rates": {
      input: Record<string, never>;
      output: {
        /** Whether the VAT rate list lookup succeeded. */
        success: boolean;
        /** Mapping of two-letter country codes to VAT rate details. */
        rates: Record<string, {
            /** Full country name. */
            country_name?: string;
            /** Standard VAT rate in percent. */
            standard_rate?: number;
            /** Mapping of reduced VAT rate type names to VAT percentages. */
            reduced_rates?: Record<string, number>;
            [key: string]: unknown;
          }>;
        [key: string]: unknown;
      };
    };
    /** List vatlayer reduced VAT rate type identifiers for price calculations. */
    "vatlayer.list_types": {
      input: Record<string, never>;
      output: {
        /** Whether the reduced VAT type list lookup succeeded. */
        success: boolean;
        /** Available reduced VAT rate type identifiers. */
        types: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Validate a VAT number and return company information when vatlayer finds it. */
    "vatlayer.validate_vat_number": {
      input: {
        /**
         * VAT number to validate, including the country prefix when available.
         * @minLength 1
         */
        vatNumber: string;
      };
      output: {
        /** Whether the VAT number is valid and active according to official member state records. */
        valid: boolean;
        /** Whether the member state's VAT database was reachable. */
        database: string;
        /** Whether the supplied VAT number has a syntactically valid format. */
        format_valid: boolean;
        /** The original VAT number string passed to vatlayer. */
        query: string;
        /** Two-letter country code parsed from the VAT number. */
        country_code: string;
        /** VAT number without the two-letter country prefix. */
        vat_number: string;
        /** Company name associated with the VAT number. */
        company_name: string | null;
        /** Company address associated with the VAT number. */
        company_address: string | null;
        [key: string]: unknown;
      };
    };
  }
}
