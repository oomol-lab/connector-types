import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert an amount between two currencies using Open Exchange Rates. */
    "open_exchange_rates.convert_currency": {
      input: {
        /**
         * Amount to convert.
         * @exclusiveMinimum 0
         */
        amount: number;
        /**
         * Source currency code for the conversion.
         * @minLength 3
         * @maxLength 3
         */
        from: string;
        /**
         * Target currency code for the conversion.
         * @minLength 3
         * @maxLength 3
         */
        to: string;
      };
      output: {
        /**
         * Disclaimer text returned by Open Exchange Rates.
         * @minLength 1
         */
        disclaimer: string;
        /**
         * License URL returned by Open Exchange Rates.
         * @minLength 1
         */
        license: string;
        /** Conversion request echoed by Open Exchange Rates. */
        request: {
          /**
           * Original conversion query.
           * @minLength 1
           */
          query: string;
          /** Amount used for the conversion. */
          amount: number;
          /**
           * Source currency code used for the conversion.
           * @minLength 1
           */
          from: string;
          /**
           * Target currency code used for the conversion.
           * @minLength 1
           */
          to: string;
          [key: string]: unknown;
        };
        /** Conversion metadata returned by Open Exchange Rates. */
        meta: {
          /** Unix timestamp used for the conversion rate. */
          timestamp: number;
          /** Exchange rate used for the conversion. */
          rate: number;
          [key: string]: unknown;
        };
        /** Converted amount returned by Open Exchange Rates. */
        response: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve all currencies supported by Open Exchange Rates. */
    "open_exchange_rates.get_currencies": {
      input: Record<string, never>;
      output: Record<string, string>;
    };
    /** Retrieve historical Open Exchange Rates exchange rates for a specific date. */
    "open_exchange_rates.get_historical_rates": {
      input: {
        /**
         * Historical date to request from Open Exchange Rates in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * Three-letter base currency code for the returned rates.
         * @minLength 3
         * @maxLength 3
         */
        base?: string;
        /**
         * List of target currency codes to include in the response.
         * @minItems 1
         */
        symbols?: Array<string>;
        /** Whether to include alternative, black-market, and digital currency rates. */
        showAlternative?: boolean;
      };
      output: {
        /**
         * Disclaimer text returned by Open Exchange Rates.
         * @minLength 1
         */
        disclaimer: string;
        /**
         * License URL returned by Open Exchange Rates.
         * @minLength 1
         */
        license: string;
        /** Unix timestamp when the rates snapshot was generated. */
        timestamp: number;
        /** Whether the returned rates represent a historical snapshot. */
        historical: boolean;
        /**
         * Base currency used for the returned rates.
         * @minLength 1
         */
        base: string;
        /** Mapping of currency codes to exchange rates for the selected base currency. */
        rates: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** Retrieve the latest Open Exchange Rates exchange rates. */
    "open_exchange_rates.get_latest_rates": {
      input: {
        /**
         * Three-letter base currency code for the returned rates.
         * @minLength 3
         * @maxLength 3
         */
        base?: string;
        /**
         * List of target currency codes to include in the response.
         * @minItems 1
         */
        symbols?: Array<string>;
        /** Whether to include alternative, black-market, and digital currency rates. */
        showAlternative?: boolean;
      };
      output: {
        /**
         * Disclaimer text returned by Open Exchange Rates.
         * @minLength 1
         */
        disclaimer: string;
        /**
         * License URL returned by Open Exchange Rates.
         * @minLength 1
         */
        license: string;
        /** Unix timestamp when the rates snapshot was generated. */
        timestamp: number;
        /**
         * Base currency used for the returned rates.
         * @minLength 1
         */
        base: string;
        /** Mapping of currency codes to exchange rates for the selected base currency. */
        rates: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** Retrieve Open Exchange Rates exchange rates across a date range. */
    "open_exchange_rates.get_timeseries_rates": {
      input: {
        /**
         * Start date of the time-series range in YYYY-MM-DD format.
         * @format date
         */
        startDate: string;
        /**
         * End date of the time-series range in YYYY-MM-DD format.
         * @format date
         */
        endDate: string;
        /**
         * Three-letter base currency code for the returned rates.
         * @minLength 3
         * @maxLength 3
         */
        base?: string;
        /**
         * List of target currency codes to include in the response.
         * @minItems 1
         */
        symbols?: Array<string>;
        /** Whether to include alternative, black-market, and digital currency rates. */
        showAlternative?: boolean;
      };
      output: {
        /**
         * Disclaimer text returned by Open Exchange Rates.
         * @minLength 1
         */
        disclaimer: string;
        /**
         * License URL returned by Open Exchange Rates.
         * @minLength 1
         */
        license: string;
        /**
         * Start date of the returned time-series range.
         * @minLength 1
         */
        start_date: string;
        /**
         * End date of the returned time-series range.
         * @minLength 1
         */
        end_date: string;
        /**
         * Base currency used for the returned rates.
         * @minLength 1
         */
        base: string;
        /** Mapping of YYYY-MM-DD dates to per-currency exchange rates. */
        rates: Record<string, Record<string, number>>;
        [key: string]: unknown;
      };
    };
  }
}
