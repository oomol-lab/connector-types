import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert a monetary amount into one or more currencies with currencyapi. */
    "currencyapi.convert_currency": {
      input: {
        /**
         * Numeric amount to convert from the base currency.
         * @exclusiveMinimum 0
         */
        value: number;
        /** Optional historical date to use for conversion in YYYY-MM-DD format. */
        date?: string;
        /**
         * Base currency code used as the source currency for the conversion.
         * @minLength 3
         * @maxLength 10
         */
        base_currency?: string;
        /**
         * List of target currency codes to include in the response.
         * @minItems 1
         */
        currencies?: Array<string>;
        /** Currency type filter. Supported values are fiat, metal, or crypto. */
        type?: "fiat" | "metal" | "crypto";
      };
      output: {
        /** Response metadata returned by currencyapi. */
        meta: {
          /**
           * Timestamp indicating when the dataset was last updated.
           * @minLength 1
           */
          last_updated_at: string;
        };
        /** Mapping of currency codes to exchange rate entries. */
        data: Record<string, {
            /**
             * Currency code for the returned rate.
             * @minLength 3
             * @maxLength 10
             */
            code: string;
            /** Exchange rate or converted value returned by currencyapi. */
            value: number;
          }>;
      };
    };
    /** Retrieve current currencyapi account quota usage. */
    "currencyapi.get_api_status": {
      input: Record<string, never>;
      output: {
        /** currencyapi account identifier. */
        account_id: number;
        /** Quota usage information returned by currencyapi. */
        quotas: {
          /** Usage quota bucket. */
          month: {
            /** Total quota available in the current bucket. */
            total: number;
            /** Quota already consumed in the current bucket. */
            used: number;
            /** Quota still available in the current bucket. */
            remaining: number;
          };
          /** Usage quota bucket. */
          grace: {
            /** Total quota available in the current bucket. */
            total: number;
            /** Quota already consumed in the current bucket. */
            used: number;
            /** Quota still available in the current bucket. */
            remaining: number;
          };
        };
      };
    };
    /** Retrieve historical exchange rates for a specific date from currencyapi. */
    "currencyapi.get_historical_rates": {
      input: {
        /** Date to retrieve historical rates from in YYYY-MM-DD format. */
        date: string;
        /**
         * Base currency code used as the reference for returned rates.
         * @minLength 3
         * @maxLength 10
         */
        base_currency?: string;
        /**
         * List of currency codes to include in the response.
         * @minItems 1
         */
        currencies?: Array<string>;
        /** Currency type filter. Supported values are fiat, metal, or crypto. */
        type?: "fiat" | "metal" | "crypto";
      };
      output: {
        /** Response metadata returned by currencyapi. */
        meta: {
          /**
           * Timestamp indicating when the dataset was last updated.
           * @minLength 1
           */
          last_updated_at: string;
        };
        /** Mapping of currency codes to exchange rate entries. */
        data: Record<string, {
            /**
             * Currency code for the returned rate.
             * @minLength 3
             * @maxLength 10
             */
            code: string;
            /** Exchange rate or converted value returned by currencyapi. */
            value: number;
          }>;
      };
    };
    /** Retrieve the latest exchange rates from currencyapi. */
    "currencyapi.get_latest_rates": {
      input: {
        /**
         * Base currency code used as the reference for returned rates.
         * @minLength 3
         * @maxLength 10
         */
        base_currency?: string;
        /**
         * List of currency codes to include in the response.
         * @minItems 1
         */
        currencies?: Array<string>;
        /** Currency type filter. Supported values are fiat, metal, or crypto. */
        type?: "fiat" | "metal" | "crypto";
      };
      output: {
        /** Response metadata returned by currencyapi. */
        meta: {
          /**
           * Timestamp indicating when the dataset was last updated.
           * @minLength 1
           */
          last_updated_at: string;
        };
        /** Mapping of currency codes to exchange rate entries. */
        data: Record<string, {
            /**
             * Currency code for the returned rate.
             * @minLength 3
             * @maxLength 10
             */
            code: string;
            /** Exchange rate or converted value returned by currencyapi. */
            value: number;
          }>;
      };
    };
    /** Retrieve supported currency metadata from currencyapi. */
    "currencyapi.get_supported_currencies": {
      input: {
        /**
         * List of currency codes to include in the response.
         * @minItems 1
         */
        currencies?: Array<string>;
        /** Currency type filter. Supported values are fiat, metal, or crypto. */
        type?: "fiat" | "metal" | "crypto";
      };
      output: {
        /** Mapping of currency codes to currency metadata. */
        data: Record<string, {
            /**
             * Currency symbol returned by currencyapi.
             * @minLength 1
             */
            symbol: string;
            /**
             * Currency display name.
             * @minLength 1
             */
            name: string;
            /**
             * Native currency symbol.
             * @minLength 1
             */
            symbol_native: string;
            /** Number of decimal digits used by the currency. */
            decimal_digits: number;
            /** Currency rounding precision value. */
            rounding: number;
            /**
             * Currency code.
             * @minLength 3
             * @maxLength 10
             */
            code: string;
            /**
             * Plural display name for the currency.
             * @minLength 1
             */
            name_plural: string;
            /** Currency type filter. Supported values are fiat, metal, or crypto. */
            type: "fiat" | "metal" | "crypto";
            /** List of ISO country codes associated with the currency. */
            countries: Array<string>;
          }>;
      };
    };
  }
}
