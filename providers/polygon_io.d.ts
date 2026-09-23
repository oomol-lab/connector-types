import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get historical OHLC aggregate bars for a stock ticker over a custom range. */
    "polygon_io.get_aggregate_bars": {
      input: {
        /**
         * The case-sensitive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * The size multiplier for the timespan.
         * @exclusiveMinimum 0
         */
        multiplier: number;
        /** The aggregate bar time window. */
        timespan: "second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year";
        /**
         * A date in YYYY-MM-DD format or a millisecond timestamp.
         * @minLength 1
         */
        from: string;
        /**
         * A date in YYYY-MM-DD format or a millisecond timestamp.
         * @minLength 1
         */
        to: string;
        /** Whether the results should be adjusted for splits. */
        adjusted?: boolean;
        /** The order used when sorting returned results. */
        sort?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
      };
      output: {
        /** Common response metadata returned by the Polygon.io REST API. */
        meta: {
          /** The response status returned by Polygon.io. */
          status: string | null;
          /** The request identifier assigned by Polygon.io. */
          requestId: string | null;
          /** The count value returned by Polygon.io when present. */
          count: number | null;
        };
        /** The ticker symbol returned by Polygon.io. */
        ticker: string | null;
        /** Whether the response was adjusted for splits. */
        adjusted: boolean | null;
        /** The number of base aggregates queried. */
        queryCount: number | null;
        /** The total number of results for the request. */
        resultsCount: number | null;
        /** The aggregate bars returned by Polygon.io. */
        bars: Array<{
          /** The ticker symbol for this aggregate bar when present. */
          ticker: string | null;
          /** The open price for the aggregate window. */
          open: number | null;
          /** The high price for the aggregate window. */
          high: number | null;
          /** The low price for the aggregate window. */
          low: number | null;
          /** The close price for the aggregate window. */
          close: number | null;
          /** The trading volume for the aggregate window. */
          volume: number | null;
          /** The volume weighted average price. */
          vwap: number | null;
          /** The Unix millisecond timestamp for the aggregate window. */
          timestamp: number | null;
          /** The transaction count for the aggregate window. */
          transactions: number | null;
          /** Whether the aggregate is for an OTC ticker when reported. */
          otc: boolean | null;
          /** The raw aggregate bar object returned by Polygon.io. */
          raw: Record<string, unknown>;
        }>;
        /** Cursor pagination information returned by Polygon.io. */
        page: {
          /** The next page URL returned by Polygon.io when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** Get a stock ticker's open, close, and extended-hours prices for one date. */
    "polygon_io.get_daily_open_close": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * The trading date to retrieve.
         * @format date
         */
        date: string;
        /** Whether prices should be adjusted for splits. */
        adjusted?: boolean;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
      };
    };
    /** Get the EMA technical indicator for a Massive ticker. */
    "polygon_io.get_ema": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * The aggregate timespan used to calculate the indicator.
         * @minLength 1
         */
        timespan?: string;
        /**
         * The number of aggregate periods in the calculation window.
         * @exclusiveMinimum 0
         */
        window?: number;
        /** Whether the underlying aggregates should be split adjusted. */
        adjusted?: boolean;
        /** Whether to include the underlying aggregate bars used by the indicator. */
        expandUnderlying?: boolean;
        /** The aggregate price series used by the indicator. */
        seriesType?: "open" | "high" | "low" | "close";
        /**
         * Filter by an exact date or millisecond timestamp.
         * @minLength 1
         */
        timestamp?: string;
        /**
         * Return values at or after this date or timestamp.
         * @minLength 1
         */
        timestampGte?: string;
        /**
         * Return values at or before this date or timestamp.
         * @minLength 1
         */
        timestampLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** Get the latest national best bid and offer for a stock ticker. */
    "polygon_io.get_last_stock_quote": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
      };
    };
    /** Get the latest available trade for a stock ticker. */
    "polygon_io.get_last_stock_trade": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
      };
    };
    /** Get the MACD technical indicator for a Massive ticker. */
    "polygon_io.get_macd": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * The aggregate timespan used to calculate MACD.
         * @minLength 1
         */
        timespan?: string;
        /**
         * The short exponential moving-average window.
         * @exclusiveMinimum 0
         */
        shortWindow?: number;
        /**
         * The long exponential moving-average window.
         * @exclusiveMinimum 0
         */
        longWindow?: number;
        /**
         * The signal-line exponential moving-average window.
         * @exclusiveMinimum 0
         */
        signalWindow?: number;
        /** Whether the underlying aggregates should be split adjusted. */
        adjusted?: boolean;
        /** Whether to include the underlying aggregate bars used by MACD. */
        expandUnderlying?: boolean;
        /** The aggregate price series used by MACD. */
        seriesType?: "open" | "high" | "low" | "close";
        /**
         * Filter by an exact date or millisecond timestamp.
         * @minLength 1
         */
        timestamp?: string;
        /**
         * Return values at or after this date or timestamp.
         * @minLength 1
         */
        timestampGte?: string;
        /**
         * Return values at or before this date or timestamp.
         * @minLength 1
         */
        timestampLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** Get the current Polygon.io market status for stocks, currencies, and indices. */
    "polygon_io.get_market_status": {
      input: Record<string, never>;
      output: {
        /** Common response metadata returned by the Polygon.io REST API. */
        meta: {
          /** The response status returned by Polygon.io. */
          status: string | null;
          /** The request identifier assigned by Polygon.io. */
          requestId: string | null;
          /** The count value returned by Polygon.io when present. */
          count: number | null;
        };
        /** The overall market status. */
        market: string | null;
        /** The server time returned by Polygon.io. */
        serverTime: string | null;
        /** Whether the market is in post-market hours. */
        afterHours: boolean | null;
        /** Whether the market is in pre-market hours. */
        earlyHours: boolean | null;
        /** Status values keyed by exchange name. */
        exchanges: Record<string, string>;
        /** Status values keyed by currency market name. */
        currencies: Record<string, string>;
        /** Status values keyed by index group name. */
        indicesGroups: Record<string, string>;
        /** The raw market status object returned by Polygon.io. */
        raw: Record<string, unknown>;
      };
    };
    /** Get an options chain with prices, Greeks, implied volatility, and open interest. */
    "polygon_io.get_option_chain_snapshot": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        underlyingTicker: string;
        /** Filter by options contract type. */
        contractType?: "call" | "put";
        /**
         * Filter by an exact expiration date.
         * @format date
         */
        expirationDate?: string;
        /**
         * Return contracts expiring on or after this date.
         * @format date
         */
        expirationDateGte?: string;
        /**
         * Return contracts expiring on or before this date.
         * @format date
         */
        expirationDateLte?: string;
        /** Filter by an exact strike price. */
        strikePrice?: number;
        /** Return contracts at or above this strike price. */
        strikePriceGte?: number;
        /** Return contracts at or below this strike price. */
        strikePriceLte?: number;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** Get reference details for one Massive options contract. */
    "polygon_io.get_option_contract": {
      input: {
        /**
         * The case-sensitive Massive options contract ticker.
         * @minLength 1
         */
        optionsTicker: string;
        /**
         * Return the contract definition valid as of this date.
         * @format date
         */
        asOf?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
      };
    };
    /** Get prices, Greeks, implied volatility, and open interest for one options contract. */
    "polygon_io.get_option_contract_snapshot": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        underlyingTicker: string;
        /**
         * The case-sensitive Massive options contract ticker.
         * @minLength 1
         */
        optionsTicker: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
      };
    };
    /** Get the previous trading day's OHLC aggregate bar for a stock ticker. */
    "polygon_io.get_previous_day_bar": {
      input: {
        /**
         * The case-sensitive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /** Whether the results should be adjusted for splits. */
        adjusted?: boolean;
      };
      output: {
        /** Common response metadata returned by the Polygon.io REST API. */
        meta: {
          /** The response status returned by Polygon.io. */
          status: string | null;
          /** The request identifier assigned by Polygon.io. */
          requestId: string | null;
          /** The count value returned by Polygon.io when present. */
          count: number | null;
        };
        /** The ticker symbol returned by Polygon.io. */
        ticker: string | null;
        /** Whether the response was adjusted for splits. */
        adjusted: boolean | null;
        /** The number of base aggregates queried. */
        queryCount: number | null;
        /** The total number of results for the request. */
        resultsCount: number | null;
        /** The aggregate bars returned by Polygon.io. */
        bars: Array<{
          /** The ticker symbol for this aggregate bar when present. */
          ticker: string | null;
          /** The open price for the aggregate window. */
          open: number | null;
          /** The high price for the aggregate window. */
          high: number | null;
          /** The low price for the aggregate window. */
          low: number | null;
          /** The close price for the aggregate window. */
          close: number | null;
          /** The trading volume for the aggregate window. */
          volume: number | null;
          /** The volume weighted average price. */
          vwap: number | null;
          /** The Unix millisecond timestamp for the aggregate window. */
          timestamp: number | null;
          /** The transaction count for the aggregate window. */
          transactions: number | null;
          /** Whether the aggregate is for an OTC ticker when reported. */
          otc: boolean | null;
          /** The raw aggregate bar object returned by Polygon.io. */
          raw: Record<string, unknown>;
        }>;
        /** Cursor pagination information returned by Polygon.io. */
        page: {
          /** The next page URL returned by Polygon.io when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** Get the RSI technical indicator for a Massive ticker. */
    "polygon_io.get_rsi": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * The aggregate timespan used to calculate the indicator.
         * @minLength 1
         */
        timespan?: string;
        /**
         * The number of aggregate periods in the calculation window.
         * @exclusiveMinimum 0
         */
        window?: number;
        /** Whether the underlying aggregates should be split adjusted. */
        adjusted?: boolean;
        /** Whether to include the underlying aggregate bars used by the indicator. */
        expandUnderlying?: boolean;
        /** The aggregate price series used by the indicator. */
        seriesType?: "open" | "high" | "low" | "close";
        /**
         * Filter by an exact date or millisecond timestamp.
         * @minLength 1
         */
        timestamp?: string;
        /**
         * Return values at or after this date or timestamp.
         * @minLength 1
         */
        timestampGte?: string;
        /**
         * Return values at or before this date or timestamp.
         * @minLength 1
         */
        timestampLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** Get the SMA technical indicator for a Massive ticker. */
    "polygon_io.get_sma": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * The aggregate timespan used to calculate the indicator.
         * @minLength 1
         */
        timespan?: string;
        /**
         * The number of aggregate periods in the calculation window.
         * @exclusiveMinimum 0
         */
        window?: number;
        /** Whether the underlying aggregates should be split adjusted. */
        adjusted?: boolean;
        /** Whether to include the underlying aggregate bars used by the indicator. */
        expandUnderlying?: boolean;
        /** The aggregate price series used by the indicator. */
        seriesType?: "open" | "high" | "low" | "close";
        /**
         * Filter by an exact date or millisecond timestamp.
         * @minLength 1
         */
        timestamp?: string;
        /**
         * Return values at or after this date or timestamp.
         * @minLength 1
         */
        timestampGte?: string;
        /**
         * Return values at or before this date or timestamp.
         * @minLength 1
         */
        timestampLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** Get the current top gaining or losing U.S. stocks. */
    "polygon_io.get_stock_movers": {
      input: {
        /** Whether to return gainers or losers. */
        direction: "gainers" | "losers";
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** Get the latest trade, quote, minute, day, and previous-day data for one stock. */
    "polygon_io.get_stock_snapshot": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result payload returned by Massive. */
        result: unknown;
      };
    };
    /** Get comprehensive details for a single Polygon.io ticker. */
    "polygon_io.get_ticker_details": {
      input: {
        /**
         * The case-sensitive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * Retrieve ticker details available on this date.
         * @format date
         */
        date?: string;
      };
      output: {
        /** Common response metadata returned by the Polygon.io REST API. */
        meta: {
          /** The response status returned by Polygon.io. */
          status: string | null;
          /** The request identifier assigned by Polygon.io. */
          requestId: string | null;
          /** The count value returned by Polygon.io when present. */
          count: number | null;
        };
        /** Detailed ticker information returned by Polygon.io. */
        ticker: {
          /** The exchange symbol that this asset is traded under. */
          ticker: string | null;
          /** The asset name returned by Polygon.io. */
          name: string | null;
          /** The market type for the asset. */
          market: string | null;
          /** The locale for the asset. */
          locale: string | null;
          /** Whether the asset is actively traded. */
          active: boolean | null;
          /** The ticker type code. */
          type: string | null;
          /** The currency name returned by Polygon.io. */
          currencyName: string | null;
          /** The Central Index Key for this ticker when present. */
          cik: string | null;
          /** The composite OpenFIGI identifier. */
          compositeFigi: string | null;
          /** The share class OpenFIGI identifier. */
          shareClassFigi: string | null;
          /** The primary exchange MIC for this asset. */
          primaryExchange: string | null;
          /** The company or asset description. */
          description: string | null;
          /** The company's homepage URL. */
          homepageUrl: string | null;
          /** The date that the symbol was first publicly listed. */
          listDate: string | null;
          /** The market capitalization value when present. */
          marketCap: number | null;
          /** The company phone number. */
          phoneNumber: string | null;
          /** The round lot size for this security. */
          roundLot: number | null;
          /** The outstanding share count for this share class. */
          shareClassSharesOutstanding: number | null;
          /** The Standard Industrial Classification code. */
          sicCode: string | null;
          /** The Standard Industrial Classification description. */
          sicDescription: string | null;
          /** The root symbol for tickers with suffixes. */
          tickerRoot: string | null;
          /** The ticker suffix when present. */
          tickerSuffix: string | null;
          /** The approximate employee count. */
          totalEmployees: number | null;
          /** The weighted shares outstanding value. */
          weightedSharesOutstanding: number | null;
          /** Company headquarters address details returned by Polygon.io. */
          address: {
            /** The first address line. */
            address1: string | null;
            /** The city name. */
            city: string | null;
            /** The state value. */
            state: string | null;
            /** The postal code. */
            postalCode: string | null;
          } | null;
          /** Company branding asset URLs returned by Polygon.io. */
          branding: {
            /** The company icon URL. */
            iconUrl: string | null;
            /** The company logo URL. */
            logoUrl: string | null;
          } | null;
          /** The raw ticker details object returned by Polygon.io. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get current snapshots for an explicit list of Massive tickers across asset classes. */
    "polygon_io.get_unified_snapshot": {
      input: {
        /**
         * The ticker symbols to retrieve.
         * @minItems 1
         * @maxItems 250
         */
        tickers: Array<string>;
        /** The optional asset type filter. */
        assetType?: "stocks" | "options" | "fx" | "crypto" | "indices";
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of snapshot results to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List company balance sheets from Massive. */
    "polygon_io.list_balance_sheets": {
      input: {
        /**
         * Filter by one or more stock tickers.
         * @minItems 1
         * @maxItems 250
         */
        tickers?: Array<string>;
        /**
         * Filter by Central Index Key.
         * @minLength 1
         */
        cik?: string;
        /** Filter by reporting timeframe. */
        timeframe?: "quarterly" | "annual" | "trailing_twelve_months";
        /** Filter by fiscal year. */
        fiscalYear?: number;
        /**
         * Filter by fiscal quarter.
         * @minimum 1
         * @maximum 4
         */
        fiscalQuarter?: number;
        /**
         * Filter by an exact reporting period end date.
         * @format date
         */
        periodEnd?: string;
        /**
         * Return periods ending on or after this date.
         * @format date
         */
        periodEndGte?: string;
        /**
         * Return periods ending on or before this date.
         * @format date
         */
        periodEndLte?: string;
        /**
         * Return statements filed on or after this date.
         * @format date
         */
        filingDateGte?: string;
        /**
         * Return statements filed on or before this date.
         * @format date
         */
        filingDateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List company cash flow statements from Massive. */
    "polygon_io.list_cash_flow_statements": {
      input: {
        /**
         * Filter by one or more stock tickers.
         * @minItems 1
         * @maxItems 250
         */
        tickers?: Array<string>;
        /**
         * Filter by Central Index Key.
         * @minLength 1
         */
        cik?: string;
        /** Filter by reporting timeframe. */
        timeframe?: "quarterly" | "annual" | "trailing_twelve_months";
        /** Filter by fiscal year. */
        fiscalYear?: number;
        /**
         * Filter by fiscal quarter.
         * @minimum 1
         * @maximum 4
         */
        fiscalQuarter?: number;
        /**
         * Filter by an exact reporting period end date.
         * @format date
         */
        periodEnd?: string;
        /**
         * Return periods ending on or after this date.
         * @format date
         */
        periodEndGte?: string;
        /**
         * Return periods ending on or before this date.
         * @format date
         */
        periodEndLte?: string;
        /**
         * Return statements filed on or after this date.
         * @format date
         */
        filingDateGte?: string;
        /**
         * Return statements filed on or before this date.
         * @format date
         */
        filingDateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List trade and quote condition codes known by Massive. */
    "polygon_io.list_condition_codes": {
      input: {
        /**
         * Filter by asset class, such as stocks or options.
         * @minLength 1
         */
        assetClass?: string;
        /** Filter conditions by market data type. */
        dataType?: "trade" | "quote";
        /** Filter by the Massive condition identifier. */
        id?: number;
        /**
         * Filter by a Securities Information Processor mapping.
         * @minLength 1
         */
        sipMapping?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List current-version stock dividend events and adjustment factors. */
    "polygon_io.list_dividends": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker?: string;
        /**
         * Filter by an exact ex-dividend date.
         * @format date
         */
        exDividendDate?: string;
        /**
         * Return dividends with an ex-dividend date on or after this date.
         * @format date
         */
        exDividendDateGte?: string;
        /**
         * Return dividends with an ex-dividend date on or before this date.
         * @format date
         */
        exDividendDateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List known exchanges available through Polygon.io. */
    "polygon_io.list_exchanges": {
      input: {
        /**
         * Filter by asset class such as stocks, options, crypto, fx, or futures.
         * @minLength 1
         */
        assetClass?: string;
        /**
         * Filter by exchange locale such as us or global.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /** Common response metadata returned by the Polygon.io REST API. */
        meta: {
          /** The response status returned by Polygon.io. */
          status: string | null;
          /** The request identifier assigned by Polygon.io. */
          requestId: string | null;
          /** The count value returned by Polygon.io when present. */
          count: number | null;
        };
        /** The exchanges returned by Polygon.io. */
        exchanges: Array<{
          /** The Polygon.io exchange identifier. */
          id: number | null;
          /** The exchange type returned by Polygon.io. */
          type: string | null;
          /** The asset class for this exchange. */
          assetClass: string | null;
          /** The locale for this exchange. */
          locale: string | null;
          /** The exchange name. */
          name: string | null;
          /** The exchange acronym. */
          acronym: string | null;
          /** The Market Identifier Code for this exchange. */
          mic: string | null;
          /** The MIC for the entity that operates this exchange. */
          operatingMic: string | null;
          /** The participant identifier used by SIPs. */
          participantId: string | null;
          /** The exchange website URL when present. */
          url: string | null;
          /** The raw exchange object returned by Polygon.io. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List company financial ratios from Massive. */
    "polygon_io.list_financial_ratios": {
      input: {
        /**
         * Filter by one or more stock tickers.
         * @minItems 1
         * @maxItems 250
         */
        tickers?: Array<string>;
        /**
         * Filter by Central Index Key.
         * @minLength 1
         */
        cik?: string;
        /** Filter by reporting timeframe. */
        timeframe?: "quarterly" | "annual" | "trailing_twelve_months";
        /** Filter by fiscal year. */
        fiscalYear?: number;
        /**
         * Filter by fiscal quarter.
         * @minimum 1
         * @maximum 4
         */
        fiscalQuarter?: number;
        /**
         * Filter by an exact reporting period end date.
         * @format date
         */
        periodEnd?: string;
        /**
         * Return periods ending on or after this date.
         * @format date
         */
        periodEndGte?: string;
        /**
         * Return periods ending on or before this date.
         * @format date
         */
        periodEndLte?: string;
        /**
         * Return statements filed on or after this date.
         * @format date
         */
        filingDateGte?: string;
        /**
         * Return statements filed on or before this date.
         * @format date
         */
        filingDateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List U.S. funding conditions observations from Massive. */
    "polygon_io.list_funding_conditions": {
      input: {
        /**
         * Filter results to this date.
         * @format date
         */
        date?: string;
        /**
         * Return results on or after this date.
         * @format date
         */
        dateGte?: string;
        /**
         * Return results on or before this date.
         * @format date
         */
        dateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List company income statements from Massive. */
    "polygon_io.list_income_statements": {
      input: {
        /**
         * Filter by one or more stock tickers.
         * @minItems 1
         * @maxItems 250
         */
        tickers?: Array<string>;
        /**
         * Filter by Central Index Key.
         * @minLength 1
         */
        cik?: string;
        /** Filter by reporting timeframe. */
        timeframe?: "quarterly" | "annual" | "trailing_twelve_months";
        /** Filter by fiscal year. */
        fiscalYear?: number;
        /**
         * Filter by fiscal quarter.
         * @minimum 1
         * @maximum 4
         */
        fiscalQuarter?: number;
        /**
         * Filter by an exact reporting period end date.
         * @format date
         */
        periodEnd?: string;
        /**
         * Return periods ending on or after this date.
         * @format date
         */
        periodEndGte?: string;
        /**
         * Return periods ending on or before this date.
         * @format date
         */
        periodEndLte?: string;
        /**
         * Return statements filed on or after this date.
         * @format date
         */
        filingDateGte?: string;
        /**
         * Return statements filed on or before this date.
         * @format date
         */
        filingDateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List U.S. inflation observations from Massive. */
    "polygon_io.list_inflation": {
      input: {
        /**
         * Filter results to this date.
         * @format date
         */
        date?: string;
        /**
         * Return results on or after this date.
         * @format date
         */
        dateGte?: string;
        /**
         * Return results on or before this date.
         * @format date
         */
        dateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List U.S. inflation expectations observations from Massive. */
    "polygon_io.list_inflation_expectations": {
      input: {
        /**
         * Filter results to this date.
         * @format date
         */
        date?: string;
        /**
         * Return results on or after this date.
         * @format date
         */
        dateGte?: string;
        /**
         * Return results on or before this date.
         * @format date
         */
        dateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List U.S. labor market observations from Massive. */
    "polygon_io.list_labor_market": {
      input: {
        /**
         * Filter results to this date.
         * @format date
         */
        date?: string;
        /**
         * Return results on or after this date.
         * @format date
         */
        dateGte?: string;
        /**
         * Return results on or before this date.
         * @format date
         */
        dateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List upcoming market holidays and their trading hours. */
    "polygon_io.list_market_holidays": {
      input: Record<string, never>;
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List Massive options contracts with contract-specific filters. */
    "polygon_io.list_option_contracts": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        underlyingTicker?: string;
        /** Filter by options contract type. */
        contractType?: "call" | "put";
        /**
         * Filter by an exact expiration date.
         * @format date
         */
        expirationDate?: string;
        /**
         * Return contracts expiring on or after this date.
         * @format date
         */
        expirationDateGte?: string;
        /**
         * Return contracts expiring on or before this date.
         * @format date
         */
        expirationDateLte?: string;
        /** Filter by an exact strike price. */
        strikePrice?: number;
        /** Whether to include expired contracts. */
        expired?: boolean;
        /**
         * Return contracts valid as of this date.
         * @format date
         */
        asOf?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List historical quotes for a stock or options ticker. */
    "polygon_io.list_quotes": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * Filter by an exact date, nanosecond timestamp, or RFC 3339 timestamp.
         * @minLength 1
         */
        timestamp?: string;
        /**
         * Return quotes at or after this date or timestamp.
         * @minLength 1
         */
        timestampGte?: string;
        /**
         * Return quotes at or before this date or timestamp.
         * @minLength 1
         */
        timestampLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List companies related to a Massive stock ticker. */
    "polygon_io.list_related_tickers": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List reported short interest for U.S. stocks. */
    "polygon_io.list_short_interest": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker?: string;
        /**
         * Filter by settlement date.
         * @format date
         */
        settlementDate?: string;
        /**
         * Return records settled on or after this date.
         * @format date
         */
        settlementDateGte?: string;
        /**
         * Return records settled on or before this date.
         * @format date
         */
        settlementDateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List daily short-sale volume for U.S. stocks. */
    "polygon_io.list_short_volume": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker?: string;
        /**
         * Filter results to this date.
         * @format date
         */
        date?: string;
        /**
         * Return results on or after this date.
         * @format date
         */
        dateGte?: string;
        /**
         * Return results on or before this date.
         * @format date
         */
        dateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List current-version stock split events and adjustment factors. */
    "polygon_io.list_splits": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker?: string;
        /**
         * Filter by an exact split execution date.
         * @format date
         */
        executionDate?: string;
        /**
         * Return splits executed on or after this date.
         * @format date
         */
        executionDateGte?: string;
        /**
         * Return splits executed on or before this date.
         * @format date
         */
        executionDateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List recent financial news and sentiment associated with tickers. */
    "polygon_io.list_ticker_news": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker?: string;
        /**
         * Return articles published at or after this RFC 3339 timestamp.
         * @minLength 1
         */
        publishedUtcGte?: string;
        /**
         * Return articles published at or before this RFC 3339 timestamp.
         * @minLength 1
         */
        publishedUtcLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List ticker type codes supported by Polygon.io. */
    "polygon_io.list_ticker_types": {
      input: {
        /**
         * Filter by asset class such as stocks, options, crypto, fx, or indices.
         * @minLength 1
         */
        assetClass?: string;
        /**
         * Filter by ticker type locale such as us or global.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /** Common response metadata returned by the Polygon.io REST API. */
        meta: {
          /** The response status returned by Polygon.io. */
          status: string | null;
          /** The request identifier assigned by Polygon.io. */
          requestId: string | null;
          /** The count value returned by Polygon.io when present. */
          count: number | null;
        };
        /** The ticker types returned by Polygon.io. */
        tickerTypes: Array<{
          /** The ticker type code used by Polygon.io. */
          code: string | null;
          /** The ticker type description. */
          description: string | null;
          /** The asset class for this ticker type. */
          assetClass: string | null;
          /** The locale for this ticker type. */
          locale: string | null;
          /** The raw ticker type object returned by Polygon.io. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ticker symbols supported by Polygon.io with optional filters. */
    "polygon_io.list_tickers": {
      input: {
        /**
         * Filter by an exact ticker symbol.
         * @minLength 1
         */
        ticker?: string;
        /**
         * Filter by ticker type such as CS or ETF.
         * @minLength 1
         */
        type?: string;
        /**
         * Filter by market type such as stocks, crypto, fx, otc, or indices.
         * @minLength 1
         */
        market?: string;
        /**
         * Filter by primary exchange Market Identifier Code.
         * @minLength 1
         */
        exchange?: string;
        /**
         * Filter by CUSIP code. Polygon.io does not return CUSIP in responses.
         * @minLength 1
         */
        cusip?: string;
        /**
         * Filter by Central Index Key.
         * @minLength 1
         */
        cik?: string;
        /**
         * Retrieve tickers available on this date.
         * @format date
         */
        date?: string;
        /**
         * Search terms within the ticker and company name.
         * @minLength 1
         */
        search?: string;
        /** Whether returned tickers should be actively traded on the queried date. */
        active?: boolean;
        /**
         * Return tickers greater than or equal to this ticker.
         * @minLength 1
         */
        tickerGte?: string;
        /**
         * Return tickers greater than this ticker.
         * @minLength 1
         */
        tickerGt?: string;
        /**
         * Return tickers less than or equal to this ticker.
         * @minLength 1
         */
        tickerLte?: string;
        /**
         * Return tickers less than this ticker.
         * @minLength 1
         */
        tickerLt?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of ticker results to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Sort field used for ordering.
         * @minLength 1
         */
        sort?: string;
        /**
         * Pagination cursor extracted from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by the Polygon.io REST API. */
        meta: {
          /** The response status returned by Polygon.io. */
          status: string | null;
          /** The request identifier assigned by Polygon.io. */
          requestId: string | null;
          /** The count value returned by Polygon.io when present. */
          count: number | null;
        };
        /** The tickers returned by Polygon.io. */
        tickers: Array<{
          /** The exchange symbol that this asset is traded under. */
          ticker: string | null;
          /** The asset name returned by Polygon.io. */
          name: string | null;
          /** The market type for the asset. */
          market: string | null;
          /** The locale for the asset. */
          locale: string | null;
          /** Whether the asset is actively traded. */
          active: boolean | null;
          /** The ticker type code. */
          type: string | null;
          /** The currency name returned by Polygon.io. */
          currencyName: string | null;
          /** The currency symbol returned by Polygon.io. */
          currencySymbol: string | null;
          /** The base currency name for crypto or FX assets. */
          baseCurrencyName: string | null;
          /** The base currency symbol for crypto or FX assets. */
          baseCurrencySymbol: string | null;
          /** The Central Index Key for this ticker when present. */
          cik: string | null;
          /** The composite OpenFIGI identifier. */
          compositeFigi: string | null;
          /** The share class OpenFIGI identifier. */
          shareClassFigi: string | null;
          /** The primary exchange MIC for this asset. */
          primaryExchange: string | null;
          /** The timestamp through which this ticker information is accurate. */
          lastUpdatedUtc: string | null;
          /** The last date that the asset was traded when present. */
          delistedUtc: string | null;
          /** The raw ticker object returned by Polygon.io. */
          raw: Record<string, unknown>;
        }>;
        /** Cursor pagination information returned by Polygon.io. */
        page: {
          /** The next page URL returned by Polygon.io when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List historical trades for a stock or options ticker. */
    "polygon_io.list_trades": {
      input: {
        /**
         * The case-sensitive Massive ticker symbol, for example AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * Filter by an exact date, nanosecond timestamp, or RFC 3339 timestamp.
         * @minLength 1
         */
        timestamp?: string;
        /**
         * Return trades at or after this date or timestamp.
         * @minLength 1
         */
        timestampGte?: string;
        /**
         * Return trades at or before this date or timestamp.
         * @minLength 1
         */
        timestampLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
    /** List U.S. treasury yields observations from Massive. */
    "polygon_io.list_treasury_yields": {
      input: {
        /**
         * Filter results to this date.
         * @format date
         */
        date?: string;
        /**
         * Return results on or after this date.
         * @format date
         */
        dateGte?: string;
        /**
         * Return results on or before this date.
         * @format date
         */
        dateLte?: string;
        /** The order used when sorting returned results. */
        order?: "asc" | "desc";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 50000
         */
        limit?: number;
        /**
         * The upstream field used to sort results.
         * @minLength 1
         */
        sort?: string;
        /**
         * The pagination cursor from a previous response nextCursor value.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Common response metadata returned by Massive. */
        meta: {
          /** The response status returned by Massive. */
          status: string | null;
          /** The request identifier assigned by Massive. */
          requestId: string | null;
          /** The response count when Massive reports one. */
          count: number | null;
        };
        /** The result records returned by Massive. */
        results: Array<Record<string, unknown>>;
        /** Cursor pagination information returned by Massive. */
        page: {
          /** The next page URL when present. */
          nextUrl: string | null;
          /** The cursor extracted from nextUrl when present. */
          nextCursor: string | null;
        };
      };
    };
  }
}
