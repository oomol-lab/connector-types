import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Finage OHLCV aggregate bars for a U.S. stock over a date range. */
    "finage.get_aggregates": {
      input: {
        /**
         * U.S. stock symbol to aggregate.
         * @minLength 1
         */
        symbol: string;
        /**
         * Positive bar multiplier used by the Finage aggregate endpoint.
         * @minimum 1
         */
        multiplier: number;
        /** Aggregation interval unit supported by Finage. */
        timespan: "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year";
        /**
         * Inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        dateFrom: string;
        /**
         * Inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        dateTo: string;
        /**
         * Maximum number of aggregate bars to return, up to 50000.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /** Sort direction for aggregate bars ordered by timestamp. */
        sort?: "asc" | "desc";
      };
      output: {
        /**
         * Stock symbol returned by Finage.
         * @minLength 1
         */
        symbol: string;
        /** Total number of aggregate bars returned. */
        totalResults: number;
        /** Aggregate bars returned by Finage. */
        results: Array<{
          /** Opening price for the aggregate bar. */
          open: number;
          /** Highest price for the aggregate bar. */
          high: number;
          /** Lowest price for the aggregate bar. */
          low: number;
          /** Closing price for the aggregate bar. */
          close: number;
          /** Traded volume for the aggregate bar. */
          volume: number;
          /** Timestamp of the aggregate bar in milliseconds. */
          timestamp: number;
        }>;
      };
    };
    /** Get the latest Finage quote for a single U.S. stock symbol. */
    "finage.get_last_quote": {
      input: {
        /**
         * U.S. stock symbol to request from Finage.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /**
         * Stock symbol returned by Finage.
         * @minLength 1
         */
        symbol: string;
        /** Latest ask price. */
        ask: number;
        /** Latest bid price. */
        bid: number;
        /** Latest ask size. */
        askSize: number;
        /** Latest bid size. */
        bidSize: number;
        /** Timestamp of the latest quote update in milliseconds. */
        timestamp: number;
      };
    };
    /** Get the latest Finage trade for a single U.S. stock symbol. */
    "finage.get_last_trade": {
      input: {
        /**
         * U.S. stock symbol to request from Finage.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /**
         * Stock symbol returned by Finage.
         * @minLength 1
         */
        symbol: string;
        /** Latest trade price. */
        price: number;
        /** Latest trade size. */
        tradeSize: number;
        /** Timestamp of the latest trade update in milliseconds. */
        timestamp: number;
      };
    };
    /** Get the previous close aggregate bar for a single Finage U.S. stock symbol. */
    "finage.get_previous_close": {
      input: {
        /**
         * U.S. stock symbol to request from Finage.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /**
         * Stock symbol returned by Finage.
         * @minLength 1
         */
        symbol: string;
        /** Total number of aggregate bars returned. */
        totalResults: number;
        /** Aggregate bars returned by Finage. */
        results: Array<{
          /** Opening price for the aggregate bar. */
          open: number;
          /** Highest price for the aggregate bar. */
          high: number;
          /** Lowest price for the aggregate bar. */
          low: number;
          /** Closing price for the aggregate bar. */
          close: number;
          /** Traded volume for the aggregate bar. */
          volume: number;
          /** Timestamp of the aggregate bar in milliseconds. */
          timestamp: number;
        }>;
      };
    };
    /** Get a Finage stock snapshot for a bounded list of U.S. stock symbols, including quotes, trades, or both. */
    "finage.get_snapshot": {
      input: {
        /**
         * Bounded list of U.S. stock symbols to request from Finage.
         * @minItems 1
         */
        symbols: Array<string>;
        /** Whether to include quote rows in the snapshot response. Defaults to true. */
        includeQuotes?: boolean;
        /** Whether to include trade rows in the snapshot response. Defaults to false. */
        includeTrades?: boolean;
      };
      output: {
        /** Total number of symbols included in the snapshot. */
        totalResults: number;
        /** Quote rows returned in the snapshot. */
        lastQuotes: Array<{
          /**
           * Stock symbol returned by Finage.
           * @minLength 1
           */
          symbol: string;
          /** Latest ask price in the snapshot. */
          ask: number;
          /** Latest bid price in the snapshot. */
          bid: number;
          /** Latest ask size in the snapshot. */
          askSize: number;
          /** Latest bid size in the snapshot. */
          bidSize: number;
          /** Timestamp returned by Finage for the snapshot quote entry. */
          timestamp: number;
        }>;
        /** Trade rows returned in the snapshot. */
        lastTrades: Array<{
          /**
           * Stock symbol returned by Finage.
           * @minLength 1
           */
          symbol: string;
          /** Latest trade price in the snapshot. */
          price: number;
          /** Latest trade size in the snapshot. */
          tradeSize: number;
          /** Timestamp returned by Finage for the snapshot trade entry. */
          timestamp: number;
        }>;
      };
    };
    /** List Finage U.S. stock symbols with optional page and search filters. */
    "finage.list_stock_symbols": {
      input: {
        /**
         * Result page number for the Finage symbol list.
         * @minimum 1
         */
        page?: number;
        /**
         * Search text used to filter symbols by ticker or name.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** Current result page returned by Finage. */
        page: number;
        /** U.S. stock symbols on the current page. */
        symbols: Array<{
          /**
           * Market symbol returned by Finage.
           * @minLength 1
           */
          symbol: string;
          /**
           * Display name associated with the market symbol.
           * @minLength 1
           */
          name: string;
        }>;
      };
    };
  }
}
