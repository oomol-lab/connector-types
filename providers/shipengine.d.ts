import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate shipping rates for a shipment request using connected ShipEngine carriers. */
    "shipengine.calculate_rates": {
      input: {
        /** The rate_options object passed to ShipEngine. */
        rateOptions: Record<string, unknown>;
        /** The shipment object passed to ShipEngine. */
        shipment: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** The raw object returned by ShipEngine. */
        rateResponse: Record<string, unknown>;
      };
    };
    /** Estimate shipping rates with basic address and package information. */
    "shipengine.estimate_rates": {
      input: {
        /**
         * The ShipEngine carrier IDs to use for the estimate.
         * @minItems 1
         */
        carrierIds: Array<string>;
        /**
         * The ISO 3166-1 alpha-2 country code for the address.
         * @minLength 2
         * @maxLength 2
         */
        fromCountryCode: string;
        /**
         * The origin postal code for the estimate.
         * @minLength 1
         */
        fromPostalCode: string;
        /**
         * The ISO 3166-1 alpha-2 country code for the address.
         * @minLength 2
         * @maxLength 2
         */
        toCountryCode: string;
        /**
         * The destination postal code for the estimate.
         * @minLength 1
         */
        toPostalCode: string;
        /** The package weight object passed to ShipEngine. */
        weight: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** The estimated rates returned by ShipEngine. */
        rates: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve a previously queried ShipEngine rate by ID. */
    "shipengine.get_rate": {
      input: {
        /**
         * The ShipEngine resource identifier.
         * @minLength 1
         * @pattern \S
         */
        rateId: string;
      };
      output: {
        /** The raw object returned by ShipEngine. */
        rate: Record<string, unknown>;
      };
    };
    /** List carrier accounts connected to the ShipEngine account. */
    "shipengine.list_carriers": {
      input: Record<string, never>;
      output: {
        /** The carrier accounts returned by ShipEngine. */
        carriers: Array<Record<string, unknown>>;
        /** Partial-success errors returned by ShipEngine when present. */
        errors: Array<Record<string, unknown>>;
      };
    };
    /** Parse unstructured text into a structured ShipEngine address. */
    "shipengine.parse_address": {
      input: {
        /**
         * The unstructured text that contains address information.
         * @minLength 1
         */
        text: string;
        /** Optional known ShipEngine address fields to help parse unstructured text. */
        address?: {
          /**
           * The known recipient or contact name for the address.
           * @minLength 1
           */
          name?: string;
          /**
           * The known phone number associated with the address.
           * @minLength 1
           */
          phone?: string;
          /**
           * The known company name associated with the address.
           * @minLength 1
           */
          companyName?: string;
          /**
           * The known first address line.
           * @minLength 1
           */
          addressLine1?: string;
          /**
           * The known second address line.
           * @minLength 1
           */
          addressLine2?: string;
          /**
           * The known third address line.
           * @minLength 1
           */
          addressLine3?: string;
          /**
           * The known city or locality for the address.
           * @minLength 1
           */
          cityLocality?: string;
          /**
           * The known state, province, or region for the address.
           * @minLength 1
           */
          stateProvince?: string;
          /**
           * The known postal or ZIP code for the address.
           * @minLength 1
           */
          postalCode?: string;
          /**
           * The ISO 3166-1 alpha-2 country code for the address.
           * @minLength 2
           * @maxLength 2
           */
          countryCode?: string;
          /** Whether ShipEngine should treat the address as residential. */
          addressResidentialIndicator?: "unknown" | "yes" | "no";
        };
      };
      output: {
        /** The raw object returned by ShipEngine. */
        parsedAddress: Record<string, unknown>;
      };
    };
    /** Validate one or more mailing addresses with ShipEngine and return deliverability details. */
    "shipengine.validate_addresses": {
      input: {
        /**
         * The addresses to validate.
         * @minItems 1
         */
        addresses: Array<{
          /**
           * The recipient or contact name for the address.
           * @minLength 1
           */
          name?: string;
          /**
           * The phone number associated with the address.
           * @minLength 1
           */
          phone?: string;
          /**
           * The company name associated with the address.
           * @minLength 1
           */
          companyName?: string;
          /**
           * The first address line.
           * @minLength 1
           */
          addressLine1: string;
          /**
           * The second address line.
           * @minLength 1
           */
          addressLine2?: string;
          /**
           * The third address line.
           * @minLength 1
           */
          addressLine3?: string;
          /**
           * The city or locality for the address.
           * @minLength 1
           */
          cityLocality: string;
          /**
           * The state, province, or region for the address.
           * @minLength 1
           */
          stateProvince: string;
          /**
           * The postal or ZIP code for the address.
           * @minLength 1
           */
          postalCode: string;
          /**
           * The ISO 3166-1 alpha-2 country code for the address.
           * @minLength 2
           * @maxLength 2
           */
          countryCode: string;
          /** Whether ShipEngine should treat the address as residential. */
          addressResidentialIndicator?: "unknown" | "yes" | "no";
        }>;
      };
      output: {
        /** The validated address results returned by ShipEngine. */
        addresses: Array<Record<string, unknown>>;
      };
    };
  }
}
