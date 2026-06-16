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
  }
}
