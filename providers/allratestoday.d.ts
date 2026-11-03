import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert an amount between two of the 30 ECB reference currencies using the latest daily rate. Free and needs no API key. */
    "allratestoday.convert": {
      input: {
        /**
         * Three-letter currency code from the ECB reference set, such as USD, EUR, GBP, or JPY.
         * @minLength 1
         */
        from: string;
        /**
         * Three-letter currency code from the ECB reference set, such as USD, EUR, GBP, or JPY.
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
        /** The source currency code. */
        from: string;
        /** The target currency code. */
        to: string;
        /** The original amount. */
        amount: number;
        /** Units of the target currency per one unit of the source currency. */
        rate: number;
        /** The converted amount. */
        result: number;
        /** Date of the ECB reference rates, in YYYY-MM-DD format. */
        date: string;
        /** Credit line AllRatesToday asks to show wherever these rates are displayed. */
        attribution?: string;
        [key: string]: unknown;
      };
    };
    /** Get the latest daily ECB reference exchange rates against a base currency. Covers the 30 currencies the European Central Bank publishes; rates update once per working day around 16:00 CET. Free and needs no API key. */
    "allratestoday.get_latest_rates": {
      input: {
        /**
         * Three-letter currency code from the ECB reference set, such as USD, EUR, GBP, or JPY.
         * @minLength 1
         * @default "USD"
         */
        base?: string;
        /**
         * Currency codes to return; omit for every available currency.
         * @minItems 1
         */
        symbols?: Array<string>;
      };
      output: {
        /** The base currency code. */
        base: string;
        /** Date of the ECB reference rates, in YYYY-MM-DD format. */
        date: string;
        /** When the rates were last updated, as an HTTP date in UTC. */
        last_updated?: string;
        /** When the next update is expected, as an HTTP date in UTC. */
        next_update?: string;
        /** Units of each currency per one unit of the base currency. */
        rates: Record<string, number>;
        /** Where the rates come from. */
        source?: string;
        /** Credit line AllRatesToday asks to show wherever these rates are displayed. */
        attribution?: string;
        [key: string]: unknown;
      };
    };
  }
}
