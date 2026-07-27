import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve current Token Metrics price records for selected cryptocurrencies. */
    "token_metrics.get_prices": {
      input: {
        /** One Token Metrics token identifier or a comma-separated identifier list. */
        token_id?: number | string;
      };
      output: {
        /** Whether Token Metrics completed the request successfully. */
        success?: boolean;
        /** The status message returned by Token Metrics. */
        message?: string;
        /** The price records returned by Token Metrics. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata when returned by the endpoint. */
        pagination?: {
          /** The total number of matching records. */
          total?: number;
          /** The total number of result pages. */
          total_pages?: number;
          /** The current one-based result page. */
          current_page?: number;
          /** The page size used by Token Metrics. */
          limit?: number;
          [key: string]: unknown;
        };
        /** The number of records in the response when reported by Token Metrics. */
        length?: number;
        [key: string]: unknown;
      };
    };
    /** List daily open, high, low, close, and volume records from Token Metrics. */
    "token_metrics.list_daily_ohlcv": {
      input: {
        /** One Token Metrics token identifier or a comma-separated identifier list. */
        token_id?: number | string;
        /**
         * Comma-separated cryptocurrency names, such as Bitcoin,Ethereum.
         * @minLength 1
         */
        token_name?: string;
        /**
         * Comma-separated token symbols, such as BTC,ETH.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The first date to include, formatted as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The last date to include, formatted as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return on this page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Whether Token Metrics completed the request successfully. */
        success?: boolean;
        /** The status message returned by Token Metrics. */
        message?: string;
        /** The daily OHLCV records returned by Token Metrics. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata when returned by the endpoint. */
        pagination?: {
          /** The total number of matching records. */
          total?: number;
          /** The total number of result pages. */
          total_pages?: number;
          /** The current one-based result page. */
          current_page?: number;
          /** The page size used by Token Metrics. */
          limit?: number;
          [key: string]: unknown;
        };
        /** The number of records in the response when reported by Token Metrics. */
        length?: number;
        [key: string]: unknown;
      };
    };
    /** List hourly open, high, low, close, and volume records from Token Metrics. */
    "token_metrics.list_hourly_ohlcv": {
      input: {
        /** One Token Metrics token identifier or a comma-separated identifier list. */
        token_id?: number | string;
        /**
         * Comma-separated cryptocurrency names, such as Bitcoin,Ethereum.
         * @minLength 1
         */
        token_name?: string;
        /**
         * Comma-separated token symbols, such as BTC,ETH.
         * @minLength 1
         */
        symbol?: string;
        /**
         * The first date to include, formatted as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The last date to include, formatted as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return on this page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Whether Token Metrics completed the request successfully. */
        success?: boolean;
        /** The status message returned by Token Metrics. */
        message?: string;
        /** The hourly OHLCV records returned by Token Metrics. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata when returned by the endpoint. */
        pagination?: {
          /** The total number of matching records. */
          total?: number;
          /** The total number of result pages. */
          total_pages?: number;
          /** The current one-based result page. */
          current_page?: number;
          /** The page size used by Token Metrics. */
          limit?: number;
          [key: string]: unknown;
        };
        /** The number of records in the response when reported by Token Metrics. */
        length?: number;
        [key: string]: unknown;
      };
    };
    /** List Token Metrics tokens and retrieve identifiers used by other market-data actions. */
    "token_metrics.list_tokens": {
      input: {
        /** One Token Metrics token identifier or a comma-separated identifier list. */
        token_id?: number | string;
        /**
         * Comma-separated cryptocurrency names, such as Bitcoin,Ethereum.
         * @minLength 1
         */
        token_name?: string;
        /**
         * Comma-separated token symbols, such as BTC,ETH.
         * @minLength 1
         */
        symbol?: string;
        /**
         * Comma-separated Token Metrics slugs, such as bitcoin,ethereum.
         * @minLength 1
         */
        slug?: string;
        /**
         * Comma-separated Token Metrics category slugs, such as yield-farming,defi.
         * @minLength 1
         */
        category?: string;
        /**
         * Comma-separated exchange slugs, such as binance,gate.
         * @minLength 1
         */
        exchange?: string;
        /** The minimum market capitalization in US dollars. */
        marketcap?: number | string;
        /** The minimum 24-hour trading volume in US dollars. */
        volume?: number | string;
        /** The minimum fully diluted valuation in US dollars. */
        fdv?: number | string;
        /**
         * A blockchain and contract address in blockchain:address form.
         * @minLength 1
         */
        blockchain_address?: string;
        /**
         * Comma-separated related fields to expand, such as exchange_list,category_list.
         * @minLength 1
         */
        expand?: string;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return on this page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Whether Token Metrics completed the request successfully. */
        success?: boolean;
        /** The status message returned by Token Metrics. */
        message?: string;
        /** The token records returned by Token Metrics. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata when returned by the endpoint. */
        pagination?: {
          /** The total number of matching records. */
          total?: number;
          /** The total number of result pages. */
          total_pages?: number;
          /** The current one-based result page. */
          current_page?: number;
          /** The page size used by Token Metrics. */
          limit?: number;
          [key: string]: unknown;
        };
        /** The number of records in the response when reported by Token Metrics. */
        length?: number;
        [key: string]: unknown;
      };
    };
    /** List cryptocurrencies ranked by market capitalization in Token Metrics. */
    "token_metrics.list_top_market_cap_tokens": {
      input: {
        /**
         * The number of top cryptocurrencies to return.
         * @minimum 1
         * @maximum 1000
         */
        top_k?: number;
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /**
         * Comma-separated related fields to expand, such as exchange_list,category_list.
         * @minLength 1
         */
        expand?: string;
      };
      output: {
        /** Whether Token Metrics completed the request successfully. */
        success?: boolean;
        /** The status message returned by Token Metrics. */
        message?: string;
        /** The top market-cap token records returned by Token Metrics. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata when returned by the endpoint. */
        pagination?: {
          /** The total number of matching records. */
          total?: number;
          /** The total number of result pages. */
          total_pages?: number;
          /** The current one-based result page. */
          current_page?: number;
          /** The page size used by Token Metrics. */
          limit?: number;
          [key: string]: unknown;
        };
        /** The number of records in the response when reported by Token Metrics. */
        length?: number;
        [key: string]: unknown;
      };
    };
    /** List Token Metrics long, short, or neutral trading signals with optional filters. */
    "token_metrics.list_trading_signals": {
      input: {
        /** One Token Metrics token identifier or a comma-separated identifier list. */
        token_id?: number | string;
        /**
         * Comma-separated token symbols, such as BTC,ETH.
         * @minLength 1
         */
        symbol?: string;
        /**
         * Comma-separated Token Metrics category slugs, such as yield-farming,defi.
         * @minLength 1
         */
        category?: string;
        /**
         * Comma-separated exchange slugs, such as binance,gate.
         * @minLength 1
         */
        exchange?: string;
        /** The minimum market capitalization in US dollars. */
        marketcap?: number | string;
        /** The minimum 24-hour trading volume in US dollars. */
        volume?: number | string;
        /** The minimum fully diluted valuation in US dollars. */
        fdv?: number | string;
        /**
         * The first date to include, formatted as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * The last date to include, formatted as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /** The signal filter: 1 for bullish, -1 for bearish, or 0 for no signal. */
        signal?: number | "-1" | "0" | "1";
        /**
         * The one-based result page to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return on this page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Whether Token Metrics completed the request successfully. */
        success?: boolean;
        /** The status message returned by Token Metrics. */
        message?: string;
        /** The trading signal records returned by Token Metrics. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata when returned by the endpoint. */
        pagination?: {
          /** The total number of matching records. */
          total?: number;
          /** The total number of result pages. */
          total_pages?: number;
          /** The current one-based result page. */
          current_page?: number;
          /** The page size used by Token Metrics. */
          limit?: number;
          [key: string]: unknown;
        };
        /** The number of records in the response when reported by Token Metrics. */
        length?: number;
        [key: string]: unknown;
      };
    };
  }
}
