import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get time-bucketed off-exchange notional value, share count, trade count, and stock price. */
    "quant_data.get_dark_flow": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /** An inclusive-start, exclusive-end UTC time range. */
        timeRange?: {
          /**
           * The inclusive start instant in ISO 8601 format.
           * @format date-time
           */
          startTime: string;
          /**
           * The exclusive end instant in ISO 8601 format.
           * @format date-time
           */
          endTime: string;
        };
        /**
         * The documented Quant Data aggregation period, such as 1m, 5m, 15m, 1h, or 1d.
         * @minLength 1
         * @pattern \S
         */
        aggregationPeriod?: string;
        /** Dark-flow filters. */
        filter: {
          /**
           * The US equity or option-underlying ticker symbol, for example AAPL or SPY.
           * @minLength 1
           * @pattern \S
           */
          ticker: string;
        };
      };
      output: {
        /** Dark-flow metrics keyed by epoch-millisecond bucket start time. */
        data: Record<string, unknown>;
      };
    };
    /** Get off-exchange print activity aggregated by price level for one ticker. */
    "quant_data.get_dark_pool_levels": {
      input: {
        /** Dark-pool-level filters. */
        filter: {
          /**
           * The US equity or option-underlying ticker symbol, for example AAPL or SPY.
           * @minLength 1
           * @pattern \S
           */
          ticker: string;
        };
        /** The trading-session date range to aggregate. */
        sessionDateRange: {
          /**
           * The inclusive first trading-session date.
           * @format date
           */
          startDate: string;
          /**
           * The inclusive last trading-session date.
           * @format date
           */
          endDate?: string;
        };
      };
      output: {
        /** Per-ticker latest stock price and off-exchange activity keyed by price level. */
        data: Record<string, unknown>;
      };
    };
    /** List individual lit and dark US equity prints with cursor pagination. */
    "quant_data.get_equity_prints": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /** An inclusive-start, exclusive-end UTC time range. */
        timeRange?: {
          /**
           * The inclusive start instant in ISO 8601 format.
           * @format date-time
           */
          startTime: string;
          /**
           * The exclusive end instant in ISO 8601 format.
           * @format date-time
           */
          endTime: string;
        };
        /** Documented Quant Data equity-print convenience filters. */
        filter?: {
          /**
           * Ticker symbols to include.
           * @minItems 1
           */
          tickers?: Array<string>;
          /**
           * Equity-print types to include.
           * @minItems 1
           */
          printTypes?: Array<string>;
          /**
           * Trade-side values to include.
           * @minItems 1
           */
          tradeSides?: Array<string>;
          [key: string]: unknown;
        };
        /** A Quant Data boolean filter-expression node. Use a terminal with field, operation, and value or values, or a compound node with conjunction and filters. */
        filterExpression?: {
          /**
           * The documented canonical or aliased Quant Data field name.
           * @minLength 1
           * @pattern \S
           */
          field?: string;
          /**
           * A documented comparison operation such as =, !=, >, >=, <, or <=.
           * @minLength 1
           * @pattern \S
           */
          operation?: string;
          /** The single comparison value for a terminal filter. */
          value?: unknown;
          /** The comparison values for a terminal filter, combined with OR semantics. */
          values?: Array<unknown>;
          /** The boolean conjunction for a compound filter node. */
          conjunction?: "AND" | "OR";
          /**
           * The nested terminal or compound filter nodes.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * The maximum number of rows to return on this page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Cursor-page sort settings. */
        sort?: {
          /**
           * The documented filterable field used for sorting.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** The sort direction. */
          direction: "ASCENDING" | "DESCENDING";
        };
        /**
         * The opaque cursor returned as nextSearchAfter by the previous page.
         * @minItems 1
         */
        searchAfter?: Array<unknown>;
        /**
         * Documented response fields to project.
         * @minItems 1
         */
        includes?: Array<string>;
        /**
         * Documented response fields to project.
         * @minItems 1
         */
        excludes?: Array<string>;
      };
      output: {
        /** The rows returned by Quant Data. */
        data: Array<Record<string, unknown>>;
        /** The opaque cursor for the next page, omitted when the result walk is complete. */
        nextSearchAfter?: Array<unknown>;
      };
    };
    /** Get dealer Greek exposure aggregated by strike and expiration for one ticker. */
    "quant_data.get_exposure_by_expiration": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /**
         * The exact market snapshot instant in ISO 8601 format.
         * @format date-time
         */
        snapshotTime?: string;
        /** The Greek used to calculate exposure. */
        greekMode: "CHARM" | "DELTA" | "GAMMA" | "VANNA";
        /** The scale used for exposure values. */
        representationMode: "PER_ONE_DOLLAR_MOVE" | "PER_ONE_PERCENT_MOVE" | "RAW";
        /** Exposure-by-expiration filters. */
        filter: {
          /**
           * The US equity or option-underlying ticker symbol, for example AAPL or SPY.
           * @minLength 1
           * @pattern \S
           */
          ticker: string;
          [key: string]: unknown;
        };
        /** A Quant Data boolean filter-expression node. Use a terminal with field, operation, and value or values, or a compound node with conjunction and filters. */
        filterExpression?: {
          /**
           * The documented canonical or aliased Quant Data field name.
           * @minLength 1
           * @pattern \S
           */
          field?: string;
          /**
           * A documented comparison operation such as =, !=, >, >=, <, or <=.
           * @minLength 1
           * @pattern \S
           */
          operation?: string;
          /** The single comparison value for a terminal filter. */
          value?: unknown;
          /** The comparison values for a terminal filter, combined with OR semantics. */
          values?: Array<unknown>;
          /** The boolean conjunction for a compound filter node. */
          conjunction?: "AND" | "OR";
          /**
           * The nested terminal or compound filter nodes.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Per-ticker stock price and exposure map keyed by expiration date and strike. */
        data: Record<string, unknown>;
      };
    };
    /** Get dealer Greek exposure aggregated by expiration and strike for one ticker. */
    "quant_data.get_exposure_by_strike": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /**
         * The exact market snapshot instant in ISO 8601 format.
         * @format date-time
         */
        snapshotTime?: string;
        /** The Greek used to calculate exposure. */
        greekMode: "CHARM" | "DELTA" | "GAMMA" | "VANNA";
        /** The scale used for exposure values. */
        representationMode: "PER_ONE_DOLLAR_MOVE" | "PER_ONE_PERCENT_MOVE" | "RAW";
        /** Exposure-by-strike filters. */
        filter: {
          /**
           * The US equity or option-underlying ticker symbol, for example AAPL or SPY.
           * @minLength 1
           * @pattern \S
           */
          ticker: string;
          /**
           * The option expiration date to include.
           * @format date
           */
          expirationDate?: string;
          /**
           * The option expiration dates to include.
           * @minItems 1
           */
          expirationDates?: Array<string>;
          /**
           * Moneyness categories to include.
           * @minItems 1
           */
          moneyTypes?: Array<string>;
          [key: string]: unknown;
        };
        /** A Quant Data boolean filter-expression node. Use a terminal with field, operation, and value or values, or a compound node with conjunction and filters. */
        filterExpression?: {
          /**
           * The documented canonical or aliased Quant Data field name.
           * @minLength 1
           * @pattern \S
           */
          field?: string;
          /**
           * A documented comparison operation such as =, !=, >, >=, <, or <=.
           * @minLength 1
           * @pattern \S
           */
          operation?: string;
          /** The single comparison value for a terminal filter. */
          value?: unknown;
          /** The comparison values for a terminal filter, combined with OR semantics. */
          values?: Array<unknown>;
          /** The boolean conjunction for a compound filter node. */
          conjunction?: "AND" | "OR";
          /**
           * The nested terminal or compound filter nodes.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Per-ticker stock price and exposure map keyed by expiration date and strike. */
        data: Record<string, unknown>;
      };
    };
    /** Rank optionable tickers by bullish and bearish premium, volume, and trade activity. */
    "quant_data.get_gainers_losers": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /** An inclusive-start, exclusive-end UTC time range. */
        timeRange?: {
          /**
           * The inclusive start instant in ISO 8601 format.
           * @format date-time
           */
          startTime: string;
          /**
           * The exclusive end instant in ISO 8601 format.
           * @format date-time
           */
          endTime: string;
        };
        /** Documented Quant Data option-trade convenience filters. Additional documented upstream filters may also be supplied. */
        filter?: {
          /**
           * Ticker symbols to include.
           * @minItems 1
           */
          tickers?: Array<string>;
          /**
           * GICS sectors to include.
           * @minItems 1
           */
          sectors?: Array<string>;
          /**
           * GICS industries to include.
           * @minItems 1
           */
          industries?: Array<string>;
          /**
           * Option contract types to include.
           * @minItems 1
           */
          contractTypes?: Array<"CALL" | "PUT">;
          /**
           * Option expiration dates to include.
           * @minItems 1
           */
          expirationDates?: Array<string>;
          /**
           * Moneyness categories to include.
           * @minItems 1
           */
          moneyTypes?: Array<string>;
          /**
           * Trade-side values to include.
           * @minItems 1
           */
          tradeSideCodes?: Array<string>;
          /**
           * Trade-sentiment values to include.
           * @minItems 1
           */
          sentimentTypes?: Array<string>;
          /** Whether to include only trades flagged as unusual. */
          isUnusual?: boolean;
          /** Whether to include only trades flagged as golden sweeps. */
          isGoldenSweep?: boolean;
          [key: string]: unknown;
        };
        /** A Quant Data boolean filter-expression node. Use a terminal with field, operation, and value or values, or a compound node with conjunction and filters. */
        filterExpression?: {
          /**
           * The documented canonical or aliased Quant Data field name.
           * @minLength 1
           * @pattern \S
           */
          field?: string;
          /**
           * A documented comparison operation such as =, !=, >, >=, <, or <=.
           * @minLength 1
           * @pattern \S
           */
          operation?: string;
          /** The single comparison value for a terminal filter. */
          value?: unknown;
          /** The comparison values for a terminal filter, combined with OR semantics. */
          values?: Array<unknown>;
          /** The boolean conjunction for a compound filter node. */
          conjunction?: "AND" | "OR";
          /**
           * The nested terminal or compound filter nodes.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Per-ticker bullish and bearish premium, volume, trade-count, and premium-ratio metrics. */
        data: Record<string, unknown>;
      };
    };
    /** Get historical implied-volatility rank for one ticker and maturity window. */
    "quant_data.get_iv_rank": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /**
         * The historical IV lookback in days.
         * @minimum 1
         * @maximum 365
         */
        lookBackPeriod: number;
        /**
         * The option maturity in days.
         * @minimum 1
         * @maximum 365
         */
        maturity: number;
        /** Implied-volatility-rank filters. */
        filter: {
          /**
           * The US equity or option-underlying ticker symbol, for example AAPL or SPY.
           * @minLength 1
           * @pattern \S
           */
          ticker: string;
          /**
           * Option contract types to include.
           * @minItems 1
           */
          contractTypes?: Array<"CALL" | "PUT">;
          [key: string]: unknown;
        };
      };
      output: {
        /** Per-session and per-contract-type implied-volatility rank metrics. */
        data: Record<string, unknown>;
      };
    };
    /** Get time-bucketed net call and put premium and volume with the underlying stock price. */
    "quant_data.get_net_drift": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /** An inclusive-start, exclusive-end UTC time range. */
        timeRange?: {
          /**
           * The inclusive start instant in ISO 8601 format.
           * @format date-time
           */
          startTime: string;
          /**
           * The exclusive end instant in ISO 8601 format.
           * @format date-time
           */
          endTime: string;
        };
        /**
         * The documented Quant Data aggregation period, such as 1m, 5m, 15m, 1h, or 1d.
         * @minLength 1
         * @pattern \S
         */
        aggregationPeriod?: string;
        /** Documented Quant Data option-trade convenience filters. Additional documented upstream filters may also be supplied. */
        filter?: {
          /**
           * Ticker symbols to include.
           * @minItems 1
           */
          tickers?: Array<string>;
          /**
           * GICS sectors to include.
           * @minItems 1
           */
          sectors?: Array<string>;
          /**
           * GICS industries to include.
           * @minItems 1
           */
          industries?: Array<string>;
          /**
           * Option contract types to include.
           * @minItems 1
           */
          contractTypes?: Array<"CALL" | "PUT">;
          /**
           * Option expiration dates to include.
           * @minItems 1
           */
          expirationDates?: Array<string>;
          /**
           * Moneyness categories to include.
           * @minItems 1
           */
          moneyTypes?: Array<string>;
          /**
           * Trade-side values to include.
           * @minItems 1
           */
          tradeSideCodes?: Array<string>;
          /**
           * Trade-sentiment values to include.
           * @minItems 1
           */
          sentimentTypes?: Array<string>;
          /** Whether to include only trades flagged as unusual. */
          isUnusual?: boolean;
          /** Whether to include only trades flagged as golden sweeps. */
          isGoldenSweep?: boolean;
          [key: string]: unknown;
        };
        /** A Quant Data boolean filter-expression node. Use a terminal with field, operation, and value or values, or a compound node with conjunction and filters. */
        filterExpression?: {
          /**
           * The documented canonical or aliased Quant Data field name.
           * @minLength 1
           * @pattern \S
           */
          field?: string;
          /**
           * A documented comparison operation such as =, !=, >, >=, <, or <=.
           * @minLength 1
           * @pattern \S
           */
          operation?: string;
          /** The single comparison value for a terminal filter. */
          value?: unknown;
          /** The comparison values for a terminal filter, combined with OR semantics. */
          values?: Array<unknown>;
          /** The boolean conjunction for a compound filter node. */
          conjunction?: "AND" | "OR";
          /**
           * The nested terminal or compound filter nodes.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Net call and put premium and volume buckets keyed by epoch-millisecond start time. */
        data: Record<string, unknown>;
      };
    };
    /** Get total call and put premium or volume over time. */
    "quant_data.get_net_flow": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /** An inclusive-start, exclusive-end UTC time range. */
        timeRange?: {
          /**
           * The inclusive start instant in ISO 8601 format.
           * @format date-time
           */
          startTime: string;
          /**
           * The exclusive end instant in ISO 8601 format.
           * @format date-time
           */
          endTime: string;
        };
        /**
         * The documented Quant Data aggregation period, such as 1m, 5m, 15m, 1h, or 1d.
         * @minLength 1
         * @pattern \S
         */
        aggregationPeriod?: string;
        /** The metric aggregated by net flow. */
        dataMode: "NET_PREMIUM" | "NET_VOLUME";
        /** Documented Quant Data option-trade convenience filters. Additional documented upstream filters may also be supplied. */
        filter?: {
          /**
           * Ticker symbols to include.
           * @minItems 1
           */
          tickers?: Array<string>;
          /**
           * GICS sectors to include.
           * @minItems 1
           */
          sectors?: Array<string>;
          /**
           * GICS industries to include.
           * @minItems 1
           */
          industries?: Array<string>;
          /**
           * Option contract types to include.
           * @minItems 1
           */
          contractTypes?: Array<"CALL" | "PUT">;
          /**
           * Option expiration dates to include.
           * @minItems 1
           */
          expirationDates?: Array<string>;
          /**
           * Moneyness categories to include.
           * @minItems 1
           */
          moneyTypes?: Array<string>;
          /**
           * Trade-side values to include.
           * @minItems 1
           */
          tradeSideCodes?: Array<string>;
          /**
           * Trade-sentiment values to include.
           * @minItems 1
           */
          sentimentTypes?: Array<string>;
          /** Whether to include only trades flagged as unusual. */
          isUnusual?: boolean;
          /** Whether to include only trades flagged as golden sweeps. */
          isGoldenSweep?: boolean;
          [key: string]: unknown;
        };
        /** A Quant Data boolean filter-expression node. Use a terminal with field, operation, and value or values, or a compound node with conjunction and filters. */
        filterExpression?: {
          /**
           * The documented canonical or aliased Quant Data field name.
           * @minLength 1
           * @pattern \S
           */
          field?: string;
          /**
           * A documented comparison operation such as =, !=, >, >=, <, or <=.
           * @minLength 1
           * @pattern \S
           */
          operation?: string;
          /** The single comparison value for a terminal filter. */
          value?: unknown;
          /** The comparison values for a terminal filter, combined with OR semantics. */
          values?: Array<unknown>;
          /** The boolean conjunction for a compound filter node. */
          conjunction?: "AND" | "OR";
          /**
           * The nested terminal or compound filter nodes.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Call and put flow buckets keyed by epoch-millisecond start time. */
        data: Record<string, unknown>;
      };
    };
    /** List ticker-tagged market news with topics and per-ticker sentiment using cursor pagination. */
    "quant_data.get_news_articles": {
      input: {
        /** An inclusive-start, exclusive-end UTC time range. */
        timeRange?: {
          /**
           * The inclusive start instant in ISO 8601 format.
           * @format date-time
           */
          startTime: string;
          /**
           * The exclusive end instant in ISO 8601 format.
           * @format date-time
           */
          endTime: string;
        };
        /** Market-news filters. */
        filter?: {
          /**
           * Ticker symbols to include.
           * @minItems 1
           */
          tickers?: Array<string>;
          /**
           * News topic tags to include.
           * @minItems 1
           */
          topics?: Array<string>;
          /**
           * Per-ticker sentiment values to include.
           * @minItems 1
           */
          sentiments?: Array<string>;
          [key: string]: unknown;
        };
        /** A Quant Data boolean filter-expression node. Use a terminal with field, operation, and value or values, or a compound node with conjunction and filters. */
        filterExpression?: {
          /**
           * The documented canonical or aliased Quant Data field name.
           * @minLength 1
           * @pattern \S
           */
          field?: string;
          /**
           * A documented comparison operation such as =, !=, >, >=, <, or <=.
           * @minLength 1
           * @pattern \S
           */
          operation?: string;
          /** The single comparison value for a terminal filter. */
          value?: unknown;
          /** The comparison values for a terminal filter, combined with OR semantics. */
          values?: Array<unknown>;
          /** The boolean conjunction for a compound filter node. */
          conjunction?: "AND" | "OR";
          /**
           * The nested terminal or compound filter nodes.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * The maximum number of rows to return on this page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * The opaque cursor returned as nextSearchAfter by the previous page.
         * @minItems 1
         */
        searchAfter?: Array<unknown>;
        /**
         * Documented response fields to project.
         * @minItems 1
         */
        includes?: Array<string>;
        /**
         * Documented response fields to project.
         * @minItems 1
         */
        excludes?: Array<string>;
        /** Whether to populate the article body on every returned row. */
        includeBody?: boolean;
      };
      output: {
        /** The rows returned by Quant Data. */
        data: Array<Record<string, unknown>>;
        /** The opaque cursor for the next page, omitted when the result walk is complete. */
        nextSearchAfter?: Array<unknown>;
      };
    };
    /** List consolidated option blocks, splits, sweeps, and multi-leg trades with cursor pagination. */
    "quant_data.get_order_flow_consolidated": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /** An inclusive-start, exclusive-end UTC time range. */
        timeRange?: {
          /**
           * The inclusive start instant in ISO 8601 format.
           * @format date-time
           */
          startTime: string;
          /**
           * The exclusive end instant in ISO 8601 format.
           * @format date-time
           */
          endTime: string;
        };
        /** Documented Quant Data option-trade convenience filters. Additional documented upstream filters may also be supplied. */
        filter?: {
          /**
           * Ticker symbols to include.
           * @minItems 1
           */
          tickers?: Array<string>;
          /**
           * GICS sectors to include.
           * @minItems 1
           */
          sectors?: Array<string>;
          /**
           * GICS industries to include.
           * @minItems 1
           */
          industries?: Array<string>;
          /**
           * Option contract types to include.
           * @minItems 1
           */
          contractTypes?: Array<"CALL" | "PUT">;
          /**
           * Option expiration dates to include.
           * @minItems 1
           */
          expirationDates?: Array<string>;
          /**
           * Moneyness categories to include.
           * @minItems 1
           */
          moneyTypes?: Array<string>;
          /**
           * Trade-side values to include.
           * @minItems 1
           */
          tradeSideCodes?: Array<string>;
          /**
           * Trade-sentiment values to include.
           * @minItems 1
           */
          sentimentTypes?: Array<string>;
          /** Whether to include only trades flagged as unusual. */
          isUnusual?: boolean;
          /** Whether to include only trades flagged as golden sweeps. */
          isGoldenSweep?: boolean;
          [key: string]: unknown;
        };
        /** A Quant Data boolean filter-expression node. Use a terminal with field, operation, and value or values, or a compound node with conjunction and filters. */
        filterExpression?: {
          /**
           * The documented canonical or aliased Quant Data field name.
           * @minLength 1
           * @pattern \S
           */
          field?: string;
          /**
           * A documented comparison operation such as =, !=, >, >=, <, or <=.
           * @minLength 1
           * @pattern \S
           */
          operation?: string;
          /** The single comparison value for a terminal filter. */
          value?: unknown;
          /** The comparison values for a terminal filter, combined with OR semantics. */
          values?: Array<unknown>;
          /** The boolean conjunction for a compound filter node. */
          conjunction?: "AND" | "OR";
          /**
           * The nested terminal or compound filter nodes.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * The maximum number of rows to return on this page.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /** Cursor-page sort settings. */
        sort?: {
          /**
           * The documented filterable field used for sorting.
           * @minLength 1
           * @pattern \S
           */
          field: string;
          /** The sort direction. */
          direction: "ASCENDING" | "DESCENDING";
        };
        /**
         * The opaque cursor returned as nextSearchAfter by the previous page.
         * @minItems 1
         */
        searchAfter?: Array<unknown>;
        /**
         * Documented response fields to project.
         * @minItems 1
         */
        includes?: Array<string>;
        /**
         * Documented response fields to project.
         * @minItems 1
         */
        excludes?: Array<string>;
        /** Whether to include first-page statistics grouped by contract type and trade side. */
        includeStatistics?: boolean;
        /** Whether to include the individual trades comprising each consolidated trade. */
        includeComprisingTrades?: boolean;
      };
      output: {
        /** The rows returned by Quant Data. */
        data: Array<Record<string, unknown>>;
        /** The opaque cursor for the next page, omitted when the result walk is complete. */
        nextSearchAfter?: Array<unknown>;
        /** First-page statistics returned when includeStatistics is enabled. */
        statistics?: Record<string, unknown>;
      };
    };
    /** Get the implied-volatility surface across expirations and strikes for one ticker. */
    "quant_data.get_volatility_skew": {
      input: {
        /**
         * The trading session date in YYYY-MM-DD format. Omit it to use the latest session.
         * @format date
         */
        sessionDate?: string;
        /**
         * The exact market snapshot instant in ISO 8601 format.
         * @format date-time
         */
        snapshotTime?: string;
        /** Volatility-skew filters. */
        filter: {
          /**
           * The US equity or option-underlying ticker symbol, for example AAPL or SPY.
           * @minLength 1
           * @pattern \S
           */
          ticker: string;
          /**
           * Option contract types to include.
           * @minItems 1
           */
          contractTypes?: Array<"CALL" | "PUT">;
          /**
           * Option expiration dates to include.
           * @minItems 1
           */
          expirationDates?: Array<string>;
          [key: string]: unknown;
        };
        /** A Quant Data boolean filter-expression node. Use a terminal with field, operation, and value or values, or a compound node with conjunction and filters. */
        filterExpression?: {
          /**
           * The documented canonical or aliased Quant Data field name.
           * @minLength 1
           * @pattern \S
           */
          field?: string;
          /**
           * A documented comparison operation such as =, !=, >, >=, <, or <=.
           * @minLength 1
           * @pattern \S
           */
          operation?: string;
          /** The single comparison value for a terminal filter. */
          value?: unknown;
          /** The comparison values for a terminal filter, combined with OR semantics. */
          values?: Array<unknown>;
          /** The boolean conjunction for a compound filter node. */
          conjunction?: "AND" | "OR";
          /**
           * The nested terminal or compound filter nodes.
           * @minItems 1
           */
          filters?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
      output: {
        /** Per-ticker stock price and implied-volatility surface keyed by expiration and strike. */
        data: Record<string, unknown>;
      };
    };
  }
}
