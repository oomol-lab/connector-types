import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert an amount into a target currency using current exchange rates. */
    "unirateapi.convert": {
      input: {
        /**
         * Base currency code. Defaults to USD.
         * @minLength 1
         * @default "USD"
         */
        from?: string;
        /**
         * Currency code, such as USD, EUR, or BTC.
         * @minLength 1
         */
        to: string;
        /**
         * Amount to convert. Defaults to 1.
         * @default 1
         */
        amount?: number;
      };
      output: {
        /** The original amount. */
        amount?: number;
        /** The source currency. */
        from?: string;
        /** The target currency. */
        to?: string;
        /** The converted amount. */
        result?: number;
        [key: string]: unknown;
      };
    };
    /** Discover the available historical date range for each currency. */
    "unirateapi.get_historical_limits": {
      input: Record<string, never>;
      output: {
        /** Availability indexed by currency code. */
        currencies?: Record<string, {
            /** The earliest available date. */
            earliest_date?: string;
            /** The latest available date. */
            latest_date?: string;
            /** Available day count. */
            total_days?: number;
            /** Upstream availability explanation. */
            description?: string;
            [key: string]: unknown;
          }>;
        /** Number of currencies with historical data. */
        total_currencies?: number;
        /** The historical data source. */
        data_source?: string;
        [key: string]: unknown;
      };
    };
    /** Get exchange rates and converted amounts for a historical date. */
    "unirateapi.get_historical_rates": {
      input: {
        /**
         * Date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /**
         * Base currency code. Defaults to USD.
         * @minLength 1
         * @default "USD"
         */
        from?: string;
        /**
         * Currency code, such as USD, EUR, or BTC.
         * @minLength 1
         */
        to?: string;
        /**
         * Amount to convert. Defaults to 1.
         * @default 1
         */
        amount?: number;
      };
      output: {
        /**
         * Date in YYYY-MM-DD format.
         * @format date
         */
        date: string;
        /** The amount requested. */
        amount: number;
        /** The base currency code. */
        base: string;
        /** The target currency when requested. */
        to?: string;
        /** The exchange rate for a single target currency. */
        rate?: number;
        /** The converted amount for a single target currency. */
        result?: number;
        /** Values indexed by currency code. */
        rates?: Record<string, number>;
        /** Values indexed by currency code. */
        results?: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** Get current exchange rates and converted amounts for one or all currencies. */
    "unirateapi.get_rates": {
      input: {
        /**
         * Base currency code. Defaults to USD.
         * @minLength 1
         * @default "USD"
         */
        from?: string;
        /**
         * Currency code, such as USD, EUR, or BTC.
         * @minLength 1
         */
        to?: string;
        /**
         * Amount to convert. Defaults to 1.
         * @default 1
         */
        amount?: number;
      };
      output: {
        /** The amount requested. */
        amount: number;
        /** The base currency code. */
        base: string;
        /** The target currency when requested. */
        to?: string;
        /** The exchange rate for a single target currency. */
        rate?: number;
        /** The converted amount for a single target currency. */
        result?: number;
        /** Values indexed by currency code. */
        rates?: Record<string, number>;
        /** Values indexed by currency code. */
        results?: Record<string, number>;
        [key: string]: unknown;
      };
    };
    /** Get daily historical currency values over a date range of at most five years. Values include the requested amount multiplier. */
    "unirateapi.get_timeseries": {
      input: {
        /**
         * Date in YYYY-MM-DD format.
         * @format date
         */
        start_date: string;
        /**
         * Date in YYYY-MM-DD format.
         * @format date
         */
        end_date: string;
        /**
         * Base currency code. Defaults to USD.
         * @minLength 1
         * @default "USD"
         */
        base?: string;
        /**
         * Amount to convert. Defaults to 1.
         * @default 1
         */
        amount?: number;
        /**
         * Currency codes to retrieve; omit for all currencies.
         * @minItems 1
         */
        currencies?: Array<string>;
      };
      output: {
        /**
         * Date in YYYY-MM-DD format.
         * @format date
         */
        start_date?: string;
        /**
         * Date in YYYY-MM-DD format.
         * @format date
         */
        end_date?: string;
        /** The base currency. */
        base?: string;
        /** The amount multiplier. */
        amount?: number;
        /** Returned currencies. */
        currencies?: Array<string>;
        /** Daily values indexed by date. */
        data?: Record<string, Record<string, number>>;
        /** The number of returned days. */
        total_days?: number;
        [key: string]: unknown;
      };
    };
    /** List the currency codes available from UniRateAPI. */
    "unirateapi.list_currencies": {
      input: Record<string, never>;
      output: {
        /** Supported currency codes. */
        currencies?: Array<string>;
        /** The number of currencies. */
        count?: number;
        [key: string]: unknown;
      };
    };
  }
}
