import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get A-share adjustment factor rows through Tushare adj_factor. */
    "tushare.get_adjustment_factors": {
      input: {
        /**
         * Tushare security code, such as 000001.SZ.
         * @minLength 1
         */
        tsCode?: string;
        /**
         * Trade date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        tradeDate?: string;
        /**
         * Start date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        startDate?: string;
        /**
         * End date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        endDate?: string;
      };
      output: {
        /** Tushare request identifier returned by the API. */
        requestId: string;
        /** Tushare response message, or null for successful responses. */
        message: string | null;
        /** Adjustment factor rows returned by Tushare. */
        adjustmentFactors: Array<{
          /** Tushare security code. */
          tsCode: string | null;
          /** Trade date in YYYYMMDD format. */
          tradeDate: string | null;
          /** Adjustment factor. */
          adjFactor: number | null;
        }>;
      };
    };
    /** Get A-share daily valuation and share indicators through Tushare daily_basic. */
    "tushare.get_daily_basic": {
      input: {
        /**
         * Tushare security code, such as 000001.SZ.
         * @minLength 1
         */
        tsCode?: string;
        /**
         * Trade date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        tradeDate?: string;
        /**
         * Start date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        startDate?: string;
        /**
         * End date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        endDate?: string;
      };
      output: {
        /** Tushare request identifier returned by the API. */
        requestId: string;
        /** Tushare response message, or null for successful responses. */
        message: string | null;
        /** Daily basic indicator rows returned by Tushare. */
        dailyBasics: Array<{
          /** Tushare security code. */
          tsCode: string | null;
          /** Trade date in YYYYMMDD format. */
          tradeDate: string | null;
          /** Close price. */
          close: number | null;
          /** Turnover rate. */
          turnoverRate: number | null;
          /** Free-float turnover rate. */
          turnoverRateF: number | null;
          /** Volume ratio. */
          volumeRatio: number | null;
          /** Price-to-earnings ratio. */
          pe: number | null;
          /** Trailing price-to-earnings ratio. */
          peTtm: number | null;
          /** Price-to-book ratio. */
          pb: number | null;
          /** Price-to-sales ratio. */
          ps: number | null;
          /** Trailing price-to-sales ratio. */
          psTtm: number | null;
          /** Dividend yield ratio. */
          dvRatio: number | null;
          /** Trailing dividend yield ratio. */
          dvTtm: number | null;
          /** Total shares. */
          totalShare: number | null;
          /** Floating shares. */
          floatShare: number | null;
          /** Free-float shares. */
          freeShare: number | null;
          /** Total market value. */
          totalMv: number | null;
          /** Circulating market value. */
          circMv: number | null;
        }>;
      };
    };
    /** Get A-share daily quote rows through Tushare daily with normalized rows. */
    "tushare.get_daily_quotes": {
      input: {
        /**
         * Tushare security code, such as 000001.SZ.
         * @minLength 1
         */
        tsCode?: string;
        /**
         * Trade date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        tradeDate?: string;
        /**
         * Start date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        startDate?: string;
        /**
         * End date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        endDate?: string;
      };
      output: {
        /** Tushare request identifier returned by the API. */
        requestId: string;
        /** Tushare response message, or null for successful responses. */
        message: string | null;
        /** Daily quote rows returned by Tushare. */
        quotes: Array<{
          /** Tushare security code. */
          tsCode: string | null;
          /** Trade date in YYYYMMDD format. */
          tradeDate: string | null;
          /** Open price. */
          open: number | null;
          /** High price. */
          high: number | null;
          /** Low price. */
          low: number | null;
          /** Close price. */
          close: number | null;
          /** Previous close price. */
          preClose: number | null;
          /** Price change. */
          change: number | null;
          /** Percentage change. */
          pctChg: number | null;
          /** Trading volume in lots. */
          vol: number | null;
          /** Trading amount. */
          amount: number | null;
        }>;
      };
    };
    /** Get exchange trading calendar rows through Tushare trade_cal with normalized dates. */
    "tushare.get_trade_calendar": {
      input: {
        /**
         * Exchange code, such as SSE or SZSE.
         * @minLength 1
         */
        exchange?: string;
        /**
         * Start date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        startDate: string;
        /**
         * End date in YYYYMMDD format.
         * @minLength 8
         * @maxLength 8
         * @pattern ^[0-9]{8}$
         */
        endDate: string;
        /**
         * Whether to return open days only, where 1 is open and 0 is closed.
         * @minimum 0
         * @maximum 1
         */
        isOpen?: number;
      };
      output: {
        /** Tushare request identifier returned by the API. */
        requestId: string;
        /** Tushare response message, or null for successful responses. */
        message: string | null;
        /** Trade calendar rows returned by Tushare. */
        calendar: Array<{
          /** Exchange code. */
          exchange: string | null;
          /** Calendar date in YYYYMMDD format. */
          calDate: string | null;
          /** Whether the date is an open trading day, where 1 is open. */
          isOpen: number | null;
          /** Previous trading date in YYYYMMDD format. */
          pretradeDate: string | null;
        }>;
      };
    };
    /** List A-share stock basic information through Tushare stock_basic with normalized rows. */
    "tushare.list_stocks": {
      input: {
        /**
         * Exchange code, such as SSE, SZSE, or BSE.
         * @minLength 1
         */
        exchange?: string;
        /** Listing status: L listed, D delisted, P paused. */
        listStatus?: "L" | "D" | "P";
        /** Shanghai-Hong Kong or Shenzhen-Hong Kong Stock Connect flag. */
        isHs?: "N" | "H" | "S";
      };
      output: {
        /** Tushare request identifier returned by the API. */
        requestId: string;
        /** Tushare response message, or null for successful responses. */
        message: string | null;
        /** Stocks returned by Tushare. */
        stocks: Array<{
          /** Tushare security code. */
          tsCode: string | null;
          /** Exchange-local security symbol. */
          symbol: string | null;
          /** Chinese security name. */
          name: string | null;
          /** Company region. */
          area: string | null;
          /** Company industry. */
          industry: string | null;
          /** Market board name. */
          market: string | null;
          /** Exchange code. */
          exchange: string | null;
          /** Listing status. */
          listStatus: string | null;
          /** Listing date in YYYYMMDD format. */
          listDate: string | null;
          /** Delisting date in YYYYMMDD format when present. */
          delistDate: string | null;
          /** Stock Connect flag when present. */
          isHs: string | null;
        }>;
      };
    };
    /** Call a Tushare data API through the official HTTP interface and return normalized table rows. */
    "tushare.query_data": {
      input: {
        /**
         * Tushare API name, such as stock_basic, trade_cal, or daily.
         * @minLength 1
         */
        apiName: string;
        /** Tushare API parameters passed as the official params object. */
        params?: Record<string, unknown>;
        /** Fields to request from Tushare, as a comma string or string list. */
        fields?: string | Array<string>;
      };
      output: {
        /** Tushare request identifier returned by the API. */
        requestId: string;
        /** Tushare response message, or null for successful responses. */
        message: string | null;
        /** Field names returned by Tushare in table order. */
        fields: Array<string>;
        /** Raw Tushare row arrays aligned with the fields list. */
        items: Array<Array<unknown>>;
        /** Rows projected into objects keyed by Tushare field names. */
        rows: Array<Record<string, unknown>>;
      };
    };
  }
}
