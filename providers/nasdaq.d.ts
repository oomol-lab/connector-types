import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve analyst recommendation and target-price history for a stock symbol from the ZACKS analyst datatables. */
    "nasdaq.get_analyst_ratings": {
      input: {
        /**
         * The stock ticker symbol, such as AAPL.
         * @minLength 1
         */
        symbol: string;
      };
      output: {
        /** The normalized rows returned from the ZACKS/AR datatable. */
        analystRatings: {
          /** The column definitions returned by Nasdaq. */
          columns: Array<{
            /**
             * The name of the datatable column.
             * @minLength 1
             */
            name: string;
            /**
             * The data type of the datatable column.
             * @minLength 1
             */
            type: string;
          }>;
          /** The row objects returned for the datatable query. */
          rows: Array<Record<string, string | number | boolean | null>>;
          /** The cursor ID to request the next page of datatable rows. */
          nextCursorId: string | null;
        };
        /** The normalized rows returned from the ZACKS/TP datatable. */
        targetPrices: {
          /** The column definitions returned by Nasdaq. */
          columns: Array<{
            /**
             * The name of the datatable column.
             * @minLength 1
             */
            name: string;
            /**
             * The data type of the datatable column.
             * @minLength 1
             */
            type: string;
          }>;
          /** The row objects returned for the datatable query. */
          rows: Array<Record<string, string | number | boolean | null>>;
          /** The cursor ID to request the next page of datatable rows. */
          nextCursorId: string | null;
        };
      };
    };
    /** Request a bulk export for a Nasdaq Data Link datatable and return the current file status plus download link when available. */
    "nasdaq.get_datatable": {
      input: {
        /**
         * The datatable code in VENDOR/TABLE format, such as SHARADAR/SF1.
         * @minLength 1
         */
        datatableCode: string;
      };
      output: {
        /** The bulk export file information. */
        file: {
          /** The temporary download URL for the zipped bulk export file. */
          link: string | null;
          /**
           * The current generation status of the bulk export file.
           * @minLength 1
           */
          status: string;
          /** The snapshot timestamp associated with the generated export. */
          dataSnapshotTime: string | null;
        };
        /** The datatable refresh metadata for the export. */
        datatable: {
          /** The last refresh timestamp reported for the datatable. */
          lastRefreshedTime: string | null;
        } | null;
      };
    };
    /** Retrieve schema, filter, refresh, and premium metadata for a Nasdaq Data Link datatable. */
    "nasdaq.get_datatable_metadata": {
      input: {
        /**
         * The datatable code in VENDOR/TABLE format, such as SHARADAR/SF1.
         * @minLength 1
         */
        datatableCode: string;
      };
      output: {
        /**
         * The vendor code portion of the datatable identifier.
         * @minLength 1
         */
        vendorCode: string;
        /**
         * The Nasdaq table code portion of the datatable identifier.
         * @minLength 1
         */
        datatableCode: string;
        /**
         * The human-readable datatable name.
         * @minLength 1
         */
        name: string;
        /** The datatable description when Nasdaq provides it. */
        description: string | null;
        /** The available datatable columns. */
        columns: Array<{
          /**
           * The name of the datatable column.
           * @minLength 1
           */
          name: string;
          /**
           * The data type of the datatable column.
           * @minLength 1
           */
          type: string;
        }>;
        /** The filterable column names for the datatable. */
        filters: Array<string>;
        /** The primary-key columns for the datatable. */
        primaryKey: Array<string>;
        /** Whether the datatable requires premium access. */
        premium: boolean;
        /** The refresh status information. */
        status: {
          /** The current refresh status for the datatable when Nasdaq provides it. */
          status: string | null;
          /** The expected time of the next refresh when Nasdaq provides it. */
          expectedAt: string | null;
          /** The timestamp when the datatable was last refreshed. */
          refreshedAt: string | null;
          /** The update cadence reported by Nasdaq for the datatable. */
          updateFrequency: string | null;
        };
        /** The data-version metadata reported by Nasdaq. */
        dataVersion: {
          /**
           * The Nasdaq data-version code for the datatable.
           * @minLength 1
           */
          code: string;
          /** Whether this data version is the default version. */
          default: boolean;
          /** The description of the data version when Nasdaq provides it. */
          description: string | null;
        } | null;
      };
    };
    /** Retrieve quarterly dividend fundamentals for a ticker from SHARADAR/SF1 using the ARQ dimension. */
    "nasdaq.get_dividend_history": {
      input: {
        /**
         * The stock ticker symbol, such as AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * An optional datekey filter in YYYY-MM-DD format applied to the SF1 table.
         * @minLength 1
         */
        date?: string;
        /** The selected SF1 columns to include. Defaults to the common dividend fields. */
        columns?: Array<string>;
        /**
         * The number of rows to request per page.
         * @minimum 1
         */
        perPage?: number;
        /**
         * The cursor ID used to fetch the next page.
         * @minLength 1
         */
        cursorId?: string;
      };
      output: {
        /** The column definitions returned by Nasdaq. */
        columns: Array<{
          /**
           * The name of the datatable column.
           * @minLength 1
           */
          name: string;
          /**
           * The data type of the datatable column.
           * @minLength 1
           */
          type: string;
        }>;
        /** The row objects returned for the datatable query. */
        rows: Array<Record<string, string | number | boolean | null>>;
        /** The cursor ID to request the next page of datatable rows. */
        nextCursorId: string | null;
      };
    };
    /** Retrieve QuoteMedia end-of-day price rows for a ticker, optionally filtered by a date range. */
    "nasdaq.get_end_of_day_quote": {
      input: {
        /**
         * The stock ticker symbol, such as AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * The inclusive lower-bound date filter in YYYY-MM-DD format.
         * @minLength 1
         */
        dateGte?: string;
        /**
         * The inclusive upper-bound date filter in YYYY-MM-DD format.
         * @minLength 1
         */
        dateLte?: string;
        /**
         * The number of rows to request per page.
         * @minimum 1
         */
        perPage?: number;
        /**
         * The cursor ID used to fetch the next page.
         * @minLength 1
         */
        cursorId?: string;
      };
      output: {
        /** The returned quote rows. */
        quotes: Array<{
          /**
           * The ticker symbol.
           * @minLength 1
           */
          ticker: string;
          /**
           * The trading date in YYYY-MM-DD format.
           * @minLength 1
           */
          date: string;
          /** The opening price for the trading day. */
          open: number | null;
          /** The highest price for the trading day. */
          high: number | null;
          /** The lowest price for the trading day. */
          low: number | null;
          /** The closing price for the trading day. */
          close: number | null;
          /** The total trading volume for the day. */
          volume: number | null;
          /** The dividend amount for the day, if any. */
          dividend: number | null;
          /** The split ratio for the day, if any. */
          split: number | null;
        }>;
        /** The cursor ID to request the next page of quote rows. */
        nextCursorId: string | null;
      };
    };
    /** Compatibility alias of get_end_of_day_quote. Returns QuoteMedia end-of-day price rows rather than live real-time quotes. */
    "nasdaq.get_real_time_quote": {
      input: {
        /**
         * The stock ticker symbol, such as AAPL.
         * @minLength 1
         */
        ticker: string;
        /**
         * The inclusive lower-bound date filter in YYYY-MM-DD format.
         * @minLength 1
         */
        dateGte?: string;
        /**
         * The inclusive upper-bound date filter in YYYY-MM-DD format.
         * @minLength 1
         */
        dateLte?: string;
        /**
         * The number of rows to request per page.
         * @minimum 1
         */
        perPage?: number;
        /**
         * The cursor ID used to fetch the next page.
         * @minLength 1
         */
        cursorId?: string;
      };
      output: {
        /** The returned quote rows. */
        quotes: Array<{
          /**
           * The ticker symbol.
           * @minLength 1
           */
          ticker: string;
          /**
           * The trading date in YYYY-MM-DD format.
           * @minLength 1
           */
          date: string;
          /** The opening price for the trading day. */
          open: number | null;
          /** The highest price for the trading day. */
          high: number | null;
          /** The lowest price for the trading day. */
          low: number | null;
          /** The closing price for the trading day. */
          close: number | null;
          /** The total trading volume for the day. */
          volume: number | null;
          /** The dividend amount for the day, if any. */
          dividend: number | null;
          /** The split ratio for the day, if any. */
          split: number | null;
        }>;
        /** The cursor ID to request the next page of quote rows. */
        nextCursorId: string | null;
      };
    };
    /** Query a Nasdaq Data Link datatable with a single filter column and normalize the returned rows into key-value objects. */
    "nasdaq.get_table_row": {
      input: {
        /**
         * The full datatable code in VENDOR/TABLE format. Use this or vendorCode + tableCode.
         * @minLength 1
         */
        datatableCode?: string;
        /**
         * The vendor code when the datatable is provided as separate vendor and table codes.
         * @minLength 1
         */
        vendorCode?: string;
        /**
         * The table code when the datatable is provided as separate vendor and table codes.
         * @minLength 1
         */
        tableCode?: string;
        /**
         * The column name used as the datatable filter.
         * @minLength 1
         */
        filterColumnName: string;
        /**
         * The value used for the datatable filter.
         * @minLength 1
         */
        filterColumnValue: string;
        /** The selected columns to include in the datatable response. */
        columns?: Array<string>;
        /**
         * The number of rows to request per page.
         * @minimum 1
         */
        perPage?: number;
        /**
         * The cursor ID used to fetch the next page.
         * @minLength 1
         */
        cursorId?: string;
      };
      output: {
        /** The column definitions returned by Nasdaq. */
        columns: Array<{
          /**
           * The name of the datatable column.
           * @minLength 1
           */
          name: string;
          /**
           * The data type of the datatable column.
           * @minLength 1
           */
          type: string;
        }>;
        /** The row objects returned for the datatable query. */
        rows: Array<Record<string, string | number | boolean | null>>;
        /** The cursor ID to request the next page of datatable rows. */
        nextCursorId: string | null;
      };
    };
  }
}
