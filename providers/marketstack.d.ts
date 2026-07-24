import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get historical end-of-day data from Marketstack for one or more comma-separated symbols. */
    "marketstack.get_historical_eod": {
      input: {
        /**
         * One or more comma-separated ticker symbols.
         * @minLength 1
         */
        symbols: string;
        /**
         * Exchange MIC used to filter the returned rows.
         * @minLength 1
         */
        exchange?: string;
        /**
         * Date in YYYY-MM-DD format.
         * @format date
         */
        dateFrom?: string;
        /**
         * Date in YYYY-MM-DD format.
         * @format date
         */
        dateTo?: string;
        /** Sort order for EOD results. */
        sort?: "ASC" | "DESC";
        /**
         * Maximum number of EOD rows to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of leading EOD rows to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Historical end-of-day rows returned by Marketstack. */
        eod: Array<{
          /** Opening price for the trading session. */
          open: number | null;
          /** Highest price for the trading session. */
          high: number | null;
          /** Lowest price for the trading session. */
          low: number | null;
          /** Closing price for the trading session. */
          close: number | null;
          /** Traded volume for the trading session. */
          volume: number | null;
          /** Timestamp returned by Marketstack for the data point. */
          date: string | null;
          /** Ticker symbol. */
          symbol: string | null;
          /** Exchange name or code returned by Marketstack. */
          exchange: string | null;
          /** Exchange MIC or exchange code returned by Marketstack. */
          exchangeCode: string | null;
          /** Company or instrument name. */
          name: string | null;
          /** Adjusted opening price. */
          adjOpen: number | null;
          /** Adjusted high price. */
          adjHigh: number | null;
          /** Adjusted low price. */
          adjLow: number | null;
          /** Adjusted closing price. */
          adjClose: number | null;
          /** Adjusted traded volume. */
          adjVolume: number | null;
          /** Dividend amount included in the EOD payload. */
          dividend: number | null;
          /** Split factor included in the EOD payload. */
          splitFactor: number | null;
          /** Asset type returned by Marketstack. */
          assetType: string | null;
          /** Price currency returned by Marketstack. */
          priceCurrency: string | null;
        }>;
        /** Pagination information returned by Marketstack. */
        pagination: {
          /** Number of results returned on the current page. */
          count: number;
          /** Requested page size. */
          limit: number;
          /** Total number of results available. */
          total: number;
          /** Number of leading results skipped before this page. */
          offset: number;
        };
      };
    };
    /** Get the latest available end-of-day data for a single Marketstack symbol. */
    "marketstack.get_latest_eod": {
      input: {
        /**
         * Ticker symbol used to retrieve the latest end-of-day row.
         * @minLength 1
         */
        symbol: string;
        /**
         * Exchange MIC used to narrow the symbol lookup.
         * @minLength 1
         */
        exchange?: string;
      };
      output: {
        /** Normalized Marketstack end-of-day price row. */
        eod: {
          /** Opening price for the trading session. */
          open: number | null;
          /** Highest price for the trading session. */
          high: number | null;
          /** Lowest price for the trading session. */
          low: number | null;
          /** Closing price for the trading session. */
          close: number | null;
          /** Traded volume for the trading session. */
          volume: number | null;
          /** Timestamp returned by Marketstack for the data point. */
          date: string | null;
          /** Ticker symbol. */
          symbol: string | null;
          /** Exchange name or code returned by Marketstack. */
          exchange: string | null;
          /** Exchange MIC or exchange code returned by Marketstack. */
          exchangeCode: string | null;
          /** Company or instrument name. */
          name: string | null;
          /** Adjusted opening price. */
          adjOpen: number | null;
          /** Adjusted high price. */
          adjHigh: number | null;
          /** Adjusted low price. */
          adjLow: number | null;
          /** Adjusted closing price. */
          adjClose: number | null;
          /** Adjusted traded volume. */
          adjVolume: number | null;
          /** Dividend amount included in the EOD payload. */
          dividend: number | null;
          /** Split factor included in the EOD payload. */
          splitFactor: number | null;
          /** Asset type returned by Marketstack. */
          assetType: string | null;
          /** Price currency returned by Marketstack. */
          priceCurrency: string | null;
        };
      };
    };
    /** Get profile information for a single Marketstack ticker. */
    "marketstack.get_ticker_info": {
      input: {
        /**
         * Ticker symbol used to retrieve company information.
         * @minLength 1
         */
        ticker: string;
      };
      output: {
        /** Normalized Marketstack ticker information. */
        ticker: {
          /** Company or instrument name. */
          name: string | null;
          /** Ticker symbol. */
          ticker: string | null;
          /** Exchange code returned by Marketstack. */
          exchangeCode: string | null;
          /** Company website URL. */
          website: string | null;
          /** Sector returned by Marketstack. */
          sector: string | null;
          /** Industry returned by Marketstack. */
          industry: string | null;
          /** Primary company address. */
          address: {
            /** City name. */
            city: string | null;
            /** Primary street address line. */
            street1: string | null;
            /** Secondary street address line. */
            street2: string | null;
            /** Postal code. */
            postalCode: string | null;
            /** State or country code. */
            stateOrCountry: string | null;
            /** Full state or country name. */
            stateOrCountryDescription: string | null;
          } | null;
        };
      };
    };
    /** List currencies available through Marketstack. */
    "marketstack.list_currencies": {
      input: {
        /**
         * Maximum number of currencies to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of leading currency results to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Currencies returned by Marketstack. */
        currencies: Array<{
          /** Currency code. */
          code: string | null;
          /** Currency display name. */
          name: string | null;
          /** Currency symbol. */
          symbol: string | null;
          /** Native currency symbol. */
          symbolNative: string | null;
        }>;
        /** Pagination information returned by Marketstack. */
        pagination: {
          /** Number of results returned on the current page. */
          count: number;
          /** Requested page size. */
          limit: number;
          /** Total number of results available. */
          total: number;
          /** Number of leading results skipped before this page. */
          offset: number;
        };
      };
    };
    /** List stock exchanges available through Marketstack. */
    "marketstack.list_exchanges": {
      input: {
        /**
         * Search term used to filter exchanges by name or acronym.
         * @minLength 1
         */
        search?: string;
        /**
         * Maximum number of exchanges to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of leading exchange results to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Stock exchanges returned by Marketstack. */
        exchanges: Array<{
          /** Market identifier code of the exchange. */
          mic: string | null;
          /** Exchange acronym. */
          acronym: string | null;
          /** Exchange display name. */
          name: string | null;
          /** City where the exchange is located. */
          city: string | null;
          /** Country where the exchange is located. */
          country: string | null;
          /** ISO country code of the exchange. */
          countryCode: string | null;
          /** Settlement currency of the exchange. */
          currency: string | null;
          /** Exchange website URL. */
          website: string | null;
          /** Current exchange status. */
          exchangeStatus: string | null;
          /** Operating market identifier code. */
          operatingMic: string | null;
        }>;
        /** Pagination information returned by Marketstack. */
        pagination: {
          /** Number of results returned on the current page. */
          count: number;
          /** Requested page size. */
          limit: number;
          /** Total number of results available. */
          total: number;
          /** Number of leading results skipped before this page. */
          offset: number;
        };
      };
    };
    /** List Marketstack tickers with optional search, exchange, and pagination filters. */
    "marketstack.list_tickers": {
      input: {
        /**
         * Maximum number of tickers to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of leading ticker results to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Search term used to filter tickers by name or symbol.
         * @minLength 1
         */
        search?: string;
        /**
         * Exchange MIC used to filter the returned tickers.
         * @minLength 1
         */
        exchange?: string;
      };
      output: {
        /** Ticker results returned by Marketstack. */
        tickers: Array<{
          /** Company or instrument name. */
          name: string | null;
          /** Ticker symbol. */
          ticker: string | null;
          /** Whether end-of-day data is available for the ticker. */
          hasEod: boolean | null;
          /** Whether intraday data is available for the ticker. */
          hasIntraday: boolean | null;
          /** Exchange details for the ticker. */
          stockExchange: {
            /** Market identifier code of the exchange. */
            mic: string | null;
            /** Display name of the exchange. */
            name: string | null;
            /** Exchange acronym. */
            acronym: string | null;
          } | null;
        }>;
        /** Pagination information returned by Marketstack. */
        pagination: {
          /** Number of results returned on the current page. */
          count: number;
          /** Requested page size. */
          limit: number;
          /** Total number of results available. */
          total: number;
          /** Number of leading results skipped before this page. */
          offset: number;
        };
      };
    };
  }
}
