import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Benzinga consensus analyst ratings and price target data for a ticker. */
    "benzinga.get_consensus_ratings": {
      input: {
        /**
         * The stock ticker symbol to query.
         * @minLength 1
         * @pattern \S
         */
        symbol: string;
      };
      output: {
        /** The consensus rating records returned by Benzinga. */
        consensusRatings: Array<Record<string, unknown>>;
      };
    };
    /** List Benzinga analyst rating calendar events with optional date and symbol filters. */
    "benzinga.list_analyst_ratings": {
      input: {
        /**
         * The stock ticker symbol used to filter results.
         * @minLength 1
         * @pattern \S
         */
        symbol?: string;
        /**
         * The date in YYYY-MM-DD format.
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         */
        dateFrom?: string;
        /**
         * The date in YYYY-MM-DD format.
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         */
        dateTo?: string;
        /**
         * The 0-based page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of records to request.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The analyst rating records returned by Benzinga. */
        ratings: Array<Record<string, unknown>>;
      };
    };
    /** List Benzinga earnings calendar events with optional date and symbol filters. */
    "benzinga.list_earnings": {
      input: {
        /**
         * The stock ticker symbol used to filter results.
         * @minLength 1
         * @pattern \S
         */
        symbol?: string;
        /**
         * The date in YYYY-MM-DD format.
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         */
        dateFrom?: string;
        /**
         * The date in YYYY-MM-DD format.
         * @pattern ^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$
         */
        dateTo?: string;
        /**
         * The 0-based page number to request.
         * @minimum 0
         */
        page?: number;
        /**
         * The maximum number of records to request.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The earnings calendar records returned by Benzinga. */
        earnings: Array<Record<string, unknown>>;
      };
    };
    /** List Benzinga news channels that can be used to filter news feeds. */
    "benzinga.list_news_channels": {
      input: Record<string, never>;
      output: {
        /** The news channels returned by Benzinga. */
        channels: Array<Record<string, unknown>>;
      };
    };
  }
}
