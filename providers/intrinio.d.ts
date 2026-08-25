import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get historical end-of-day stock prices for an Intrinio security. */
    "intrinio.get_security_stock_prices": {
      input: {
        /**
         * An Intrinio ID or supported ticker, CIK, LEI, FIGI, ISIN, or CUSIP identifier.
         * @minLength 1
         */
        identifier: string;
        /**
         * The inclusive start date in YYYY-MM-DD format.
         * @format date
         */
        startDate?: string;
        /**
         * The inclusive end date in YYYY-MM-DD format.
         * @format date
         */
        endDate?: string;
        /** The time period represented by each returned stock price. */
        frequency?: "daily" | "weekly" | "monthly" | "quarterly" | "yearly";
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The pagination token returned by a previous Intrinio request.
         * @minLength 1
         */
        nextPage?: string;
      };
      output: {
        /** The historical stock price records. */
        stockPrices: Array<Record<string, unknown>>;
        /** A security record returned by Intrinio. */
        security: Record<string, unknown> | null;
        /** The token for the next page, or null at the end. */
        nextPage: string | null;
      };
    };
    /** Look up Intrinio company reference data and metadata by identifier. */
    "intrinio.lookup_company": {
      input: {
        /**
         * An Intrinio ID or supported ticker, CIK, LEI, FIGI, ISIN, or CUSIP identifier.
         * @minLength 1
         */
        identifier: string;
      };
      output: {
        /** A company record returned by Intrinio. */
        company: Record<string, unknown>;
      };
    };
    /** Look up Intrinio security reference data by identifier. */
    "intrinio.lookup_security": {
      input: {
        /**
         * An Intrinio ID or supported ticker, CIK, LEI, FIGI, ISIN, or CUSIP identifier.
         * @minLength 1
         */
        identifier: string;
      };
      output: {
        /** A security record returned by Intrinio. */
        security: Record<string, unknown>;
      };
    };
    /** Search Intrinio companies by ticker or company name. */
    "intrinio.search_companies": {
      input: {
        /**
         * The ticker or company name text to search for.
         * @minLength 1
         */
        query: string;
        /** Whether to return only actively traded companies. */
        active?: boolean;
        /** The matching mode to use for the search query. */
        mode?: "starts_with";
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The matching companies. */
        companies: Array<Record<string, unknown>>;
      };
    };
  }
}
