import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve current or historical Wise exchange rates. */
    "wise.get_rates": {
      input: {
        /**
         * Source currency code.
         * @minLength 1
         */
        source?: string;
        /**
         * Target currency code.
         * @minLength 1
         */
        target?: string;
        /**
         * Timestamp for a specific historical exchange rate.
         * @minLength 1
         */
        time?: string;
        /**
         * Period start date or timestamp for exchange rate history.
         * @minLength 1
         */
        from?: string;
        /**
         * Period end date or timestamp for exchange rate history.
         * @minLength 1
         */
        to?: string;
        /** Interval for grouped exchange rate history. */
        group?: "day" | "hour" | "minute";
      };
      output: {
        /** Rate entries returned by the API. */
        rates: Array<Record<string, unknown>>;
      };
    };
    /** List currencies supported by Wise for transfers, including codes and names. */
    "wise.list_currencies": {
      input: Record<string, never>;
      output: {
        /** Currencies returned by the API. */
        currencies: Array<Record<string, unknown>>;
      };
    };
    /** List Wise personal and business profiles available to the authenticated personal API token. */
    "wise.list_profiles": {
      input: Record<string, never>;
      output: {
        /** Wise profiles returned by the API. */
        profiles: Array<Record<string, unknown>>;
      };
    };
  }
}
