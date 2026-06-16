import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert an amount between two currencies using CurrencyBeacon exchange rates. */
    "currencyscoop.convert_currency": {
      input: {
        /**
         * Source currency code for the conversion.
         * @minLength 1
         */
        from: string;
        /**
         * Target currency code for the conversion.
         * @minLength 1
         */
        to: string;
        /**
         * Positive amount to convert.
         * @exclusiveMinimum 0
         */
        amount: number;
        /** Optional historical date in YYYY-MM-DD format for historical conversion. */
        date?: string;
      };
      output: {
        /** Metadata returned by CurrencyBeacon. */
        meta: {
          /** HTTP-like status code reported by CurrencyBeacon. */
          code: number;
          /** Optional disclaimer text returned by CurrencyBeacon. */
          disclaimer?: string;
        };
        /** Unix timestamp reported by CurrencyBeacon for the conversion. */
        timestamp: number;
        /**
         * Date associated with the conversion result.
         * @minLength 1
         */
        date: string;
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
        /** Amount used for the conversion. */
        amount: number;
        /** Converted value returned by CurrencyBeacon. */
        value: number;
      };
    };
    /** Retrieve the supported currencies exposed by CurrencyBeacon. */
    "currencyscoop.get_currencies": {
      input: Record<string, never>;
      output: {
        /** Metadata returned by CurrencyBeacon. */
        meta: {
          /** HTTP-like status code reported by CurrencyBeacon. */
          code: number;
          /** Optional disclaimer text returned by CurrencyBeacon. */
          disclaimer?: string;
        };
        /** Supported currencies returned by CurrencyBeacon. */
        currencies: Array<{
          /** Internal numeric identifier for the currency. */
          id: number;
          /** Numeric or upstream currency code field returned by CurrencyBeacon. */
          code: string;
          /** Short currency code such as USD or BTC. */
          shortCode: string;
          /** Display name of the currency. */
          name: string;
          /** Number of decimal places used by the currency. */
          precision?: number;
          /** Number of subunits in one main unit. */
          subunit?: number;
          /** Primary currency symbol. */
          symbol?: string;
          /** Whether the symbol is rendered before the amount. */
          symbolFirst?: boolean;
          /** Character used as the decimal separator. */
          decimalMark?: string;
          /** Character used as the thousands separator. */
          thousandsSeparator?: string;
          /** Countries associated with the currency. */
          countries?: Array<string>;
        }>;
      };
    };
    /** Retrieve historical exchange rates for a specific date from CurrencyBeacon. */
    "currencyscoop.get_historical_rates": {
      input: {
        /**
         * Base currency code for the historical exchange rates.
         * @minLength 1
         */
        base?: string;
        /** Historical date in YYYY-MM-DD format. */
        date: string;
        /**
         * List of target currency codes to include in the response.
         * @minItems 1
         */
        symbols?: Array<string>;
      };
      output: {
        /** Metadata returned by CurrencyBeacon. */
        meta: {
          /** HTTP-like status code reported by CurrencyBeacon. */
          code: number;
          /** Optional disclaimer text returned by CurrencyBeacon. */
          disclaimer?: string;
        };
        /**
         * Base currency used for the returned rates.
         * @minLength 1
         */
        base: string;
        /**
         * Upstream date or datetime string associated with the returned rates.
         * @minLength 1
         */
        date: string;
        /** Mapping of currency codes to exchange rates. */
        rates: Record<string, number>;
      };
    };
    /** Retrieve the latest exchange rates for a base currency from CurrencyBeacon. */
    "currencyscoop.get_latest_rates": {
      input: {
        /**
         * Base currency code for the requested exchange rates.
         * @minLength 1
         */
        base?: string;
        /**
         * List of target currency codes to include in the response.
         * @minItems 1
         */
        symbols?: Array<string>;
      };
      output: {
        /** Metadata returned by CurrencyBeacon. */
        meta: {
          /** HTTP-like status code reported by CurrencyBeacon. */
          code: number;
          /** Optional disclaimer text returned by CurrencyBeacon. */
          disclaimer?: string;
        };
        /**
         * Base currency used for the returned rates.
         * @minLength 1
         */
        base: string;
        /**
         * Upstream date or datetime string associated with the returned rates.
         * @minLength 1
         */
        date: string;
        /** Mapping of currency codes to exchange rates. */
        rates: Record<string, number>;
      };
    };
    /** Retrieve exchange rates across a date range from CurrencyBeacon. */
    "currencyscoop.get_timeseries_rates": {
      input: {
        /**
         * Base currency code for the timeseries exchange rates.
         * @minLength 1
         */
        base?: string;
        /** Start date of the timeseries range in YYYY-MM-DD format. */
        startDate: string;
        /** End date of the timeseries range in YYYY-MM-DD format. */
        endDate: string;
        /**
         * List of target currency codes to include in the response.
         * @minItems 1
         */
        symbols?: Array<string>;
      };
      output: {
        /** Metadata returned by CurrencyBeacon. */
        meta: {
          /** HTTP-like status code reported by CurrencyBeacon. */
          code: number;
          /** Optional disclaimer text returned by CurrencyBeacon. */
          disclaimer?: string;
        };
        /**
         * Base currency used for the returned timeseries rates.
         * @minLength 1
         */
        base: string;
        /**
         * Start date of the returned timeseries range.
         * @minLength 1
         */
        startDate: string;
        /**
         * End date of the returned timeseries range.
         * @minLength 1
         */
        endDate: string;
        /** Mapping of YYYY-MM-DD dates to per-currency exchange rates. */
        ratesByDate: Record<string, Record<string, number>>;
      };
    };
  }
}
