import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Search Australian addresses with Addressfinder autocomplete and return matching address completions. */
    "addressfinder.find_au_addresses": {
      input: {
        /**
         * The partial Australian address being searched.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        max?: number;
        /** The Australian address dataset source to query. */
        source?: "GNAF,PAF" | "GNAF" | "PAF";
        /** Set this filter to 0 or 1. */
        postBox?: "0" | "1";
        /** Set this flag to 1 when the option should be enabled. */
        canonical?: "1";
        /**
         * Australian state or territory codes used to filter results.
         * @minItems 1
         */
        stateCodes?: Array<"ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "OT">;
        /**
         * Optional registered Addressfinder domain used for portal activity monitoring.
         * @minLength 1
         */
        domain?: string;
        /** Set this flag to 1 when the option should be enabled. */
        highlight?: "1";
        /** Set this flag to 1 when the option should be enabled. */
        ascii?: "1";
      };
      output: {
        /** Whether Addressfinder reported the request as successful. */
        success: boolean;
        /** The autocomplete completions returned by Addressfinder. */
        completions: Array<{
          /** The full Australian address string. */
          full_address: string;
          /** The unique Addressfinder address identifier. */
          id: string;
          /** The canonical address identifier for this result. */
          canonical_address_id?: string;
          /** The highlighted full address when the highlight option is enabled. */
          highlighted_full_address?: string;
          [key: string]: unknown;
        }>;
        /** Connector metadata for the Addressfinder API request. */
        meta: {
          /** The Addressfinder API endpoint path used for the request. */
          endpoint: string;
          /** The country-specific Addressfinder API family. */
          country: "au" | "nz";
        };
        /** The raw Addressfinder object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Search New Zealand addresses with Addressfinder autocomplete and return matching address completions. */
    "addressfinder.find_nz_addresses": {
      input: {
        /**
         * The partial New Zealand address being searched.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        max?: number;
        /** Set this filter to 0 or 1. */
        delivered?: "0" | "1";
        /** Set this filter to 0 or 1. */
        postBox?: "0" | "1";
        /** Set this filter to 0 or 1. */
        rural?: "0" | "1";
        /** How closely Addressfinder should match the query. */
        strict?: "0" | "1" | "2";
        /** The New Zealand regional authority code used to filter results. */
        regionCode?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
        /**
         * Optional registered Addressfinder domain used for portal activity monitoring.
         * @minLength 1
         */
        domain?: string;
        /** Set this flag to 1 when the option should be enabled. */
        highlight?: "1";
        /** Set this flag to 1 when the option should be enabled. */
        ascii?: "1";
      };
      output: {
        /** Whether Addressfinder reported the request as successful. */
        success: boolean;
        /** The autocomplete completions returned by Addressfinder. */
        completions: Array<{
          /** The canonical New Zealand address string. */
          a: string;
          /** The unique Addressfinder address identifier. */
          pxid: string;
          /** Whether the result is postal or physical according to Addressfinder. */
          v: number;
          /** The highlighted address when the highlight option is enabled. */
          highlighted_a?: string;
          [key: string]: unknown;
        }>;
        /** Connector metadata for the Addressfinder API request. */
        meta: {
          /** The Addressfinder API endpoint path used for the request. */
          endpoint: string;
          /** The country-specific Addressfinder API family. */
          country: "au" | "nz";
        };
        /** The raw Addressfinder object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve full metadata for an Australian address selected from Addressfinder autocomplete. */
    "addressfinder.get_au_address_metadata": {
      input: {
        /**
         * The Addressfinder address identifier returned by autocomplete.
         * @minLength 1
         */
        id?: string;
        /**
         * The unique G-NAF address identifier.
         * @minLength 1
         */
        gnafId?: string;
        /**
         * The Australia Post delivery point identifier.
         * @minLength 1
         */
        dpid?: string;
        /** The Australian address dataset source to query. */
        source?: "GNAF,PAF" | "GNAF" | "PAF";
        /** Set this flag to 1 when the option should be enabled. */
        gps?: "1";
        /**
         * The Australian census year for statistical identifiers.
         * @minimum 2016
         * @maximum 2021
         */
        census?: number;
        /**
         * Optional registered Addressfinder domain used for portal activity monitoring.
         * @minLength 1
         */
        domain?: string;
        /** Set this flag to 1 when the option should be enabled. */
        ascii?: "1";
      };
      output: {
        /** Whether Addressfinder reported the request as successful. */
        success: boolean;
        /** The raw Addressfinder object returned by the API. */
        address: Record<string, unknown>;
        /** Connector metadata for the Addressfinder API request. */
        meta: {
          /** The Addressfinder API endpoint path used for the request. */
          endpoint: string;
          /** The country-specific Addressfinder API family. */
          country: "au" | "nz";
        };
      };
    };
    /** Retrieve full metadata for a New Zealand address selected from Addressfinder autocomplete. */
    "addressfinder.get_nz_address_metadata": {
      input: {
        /**
         * The Addressfinder PXID returned by autocomplete.
         * @minLength 1
         */
        pxid?: string;
        /**
         * The NZ Post delivery point identifier.
         * @minLength 1
         */
        dpid?: string;
        /**
         * The New Zealand census year for Statistics NZ metadata.
         * @minimum 2018
         * @maximum 2023
         */
        census?: number;
        /**
         * Optional registered Addressfinder domain used for portal activity monitoring.
         * @minLength 1
         */
        domain?: string;
        /** Set this flag to 1 when the option should be enabled. */
        ascii?: "1";
      };
      output: {
        /** Whether Addressfinder reported the request as successful. */
        success: boolean;
        /** The raw Addressfinder object returned by the API. */
        address: Record<string, unknown>;
        /** Connector metadata for the Addressfinder API request. */
        meta: {
          /** The Addressfinder API endpoint path used for the request. */
          endpoint: string;
          /** The country-specific Addressfinder API family. */
          country: "au" | "nz";
        };
      };
    };
    /** Verify and enrich an Australian address with Addressfinder address verification. */
    "addressfinder.verify_au_address": {
      input: {
        /**
         * The Australian address to verify.
         * @minLength 1
         */
        query: string;
        /** Set this flag to 1 when the option should be enabled. */
        gnaf?: "1";
        /** Set this flag to 1 when the option should be enabled. */
        paf?: "1";
        /** Exclude box type addresses from the verification results. */
        postBox?: "0";
        /** Set this flag to 1 when the option should be enabled. */
        gps?: "1";
        /** Set this flag to 1 when the option should be enabled. */
        extended?: "1";
        /**
         * The Australian census year for statistical identifiers.
         * @minimum 2016
         * @maximum 2021
         */
        census?: number;
        /**
         * Australian state or territory codes used to filter results.
         * @minItems 1
         */
        stateCodes?: Array<"ACT" | "NSW" | "NT" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "OT">;
        /**
         * Optional registered Addressfinder domain used for portal activity monitoring.
         * @minLength 1
         */
        domain?: string;
        /** Set this flag to 1 when the option should be enabled. */
        ascii?: "1";
      };
      output: {
        /** Whether Addressfinder reported the request as successful. */
        success: boolean;
        /** Whether Addressfinder matched the submitted address. */
        matched: boolean | null;
        /** The raw Addressfinder object returned by the API. */
        address: Record<string, unknown> | null;
        /** Connector metadata for the Addressfinder API request. */
        meta: {
          /** The Addressfinder API endpoint path used for the request. */
          endpoint: string;
          /** The country-specific Addressfinder API family. */
          country: "au" | "nz";
        };
        /** The raw Addressfinder object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Verify and enrich a New Zealand address with Addressfinder address verification. */
    "addressfinder.verify_nz_address": {
      input: {
        /**
         * The New Zealand address to verify.
         * @minLength 1
         */
        query: string;
        /** Set this filter to 0 or 1. */
        postBox?: "0" | "1";
        /** The New Zealand regional authority code used to filter results. */
        regionCode?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
        /**
         * The New Zealand census year for Statistics NZ metadata.
         * @minimum 2018
         * @maximum 2023
         */
        census?: number;
        /**
         * Optional registered Addressfinder domain used for portal activity monitoring.
         * @minLength 1
         */
        domain?: string;
        /** Set this flag to 1 when the option should be enabled. */
        ascii?: "1";
      };
      output: {
        /** Whether Addressfinder reported the request as successful. */
        success: boolean;
        /** Whether Addressfinder matched the submitted address. */
        matched: boolean | null;
        /** The raw Addressfinder object returned by the API. */
        address: Record<string, unknown> | null;
        /** Connector metadata for the Addressfinder API request. */
        meta: {
          /** The Addressfinder API endpoint path used for the request. */
          endpoint: string;
          /** The country-specific Addressfinder API family. */
          country: "au" | "nz";
        };
        /** The raw Addressfinder object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
  }
}
