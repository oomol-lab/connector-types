import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve historical Fixer exchange rates for a specific date. */
    "fixer.get_historical_rates": {
      input: {
        /** Historical date to request from Fixer in YYYY-MM-DD format. */
        date: string;
        /**
         * Three-letter base currency code for the returned rates.
         * @minLength 3
         * @maxLength 3
         */
        base?: string;
        /**
         * List of target currency codes to include in the Fixer response.
         * @minItems 1
         */
        symbols?: Array<string>;
      };
      output: {
        /** Whether the Fixer request completed successfully. */
        success: boolean;
        /** Whether the returned rates represent a historical snapshot. */
        historical: boolean;
        /** Unix timestamp when the rates snapshot was generated. */
        timestamp: number;
        /**
         * Base currency used for the returned rates.
         * @minLength 1
         */
        base: string;
        /**
         * Date of the returned exchange rates in YYYY-MM-DD format.
         * @minLength 1
         */
        date: string;
        /** Mapping of currency codes to exchange rates for the selected base currency. */
        rates: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest Fixer exchange rates for all or selected currencies. */
    "fixer.get_latest_rates": {
      input: {
        /**
         * Three-letter base currency code for the returned rates.
         * @minLength 3
         * @maxLength 3
         */
        base?: string;
        /**
         * List of target currency codes to include in the Fixer response.
         * @minItems 1
         */
        symbols?: Array<string>;
      };
      output: {
        /** Whether the Fixer request completed successfully. */
        success: boolean;
        /** Unix timestamp when the rates snapshot was generated. */
        timestamp: number;
        /**
         * Base currency used for the returned rates.
         * @minLength 1
         */
        base: string;
        /**
         * Date of the returned exchange rates in YYYY-MM-DD format.
         * @minLength 1
         */
        date: string;
        /** Mapping of currency codes to exchange rates for the selected base currency. */
        rates: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** Retrieve all supported Fixer currency symbols and their full names. */
    "fixer.get_supported_symbols": {
      input: Record<string, never>;
      output: {
        /** Whether the Fixer request completed successfully. */
        success: boolean;
        /** Mapping of ISO currency codes to full currency names. */
        symbols: Record<string, string>;
        [key: string]: unknown;
      };
    };
  }
}
