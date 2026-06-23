import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Semrush domain overview metrics from a regional SEO database. */
    "semrush.get_domain_overview": {
      input: {
        /**
         * The domain name to analyze, such as example.com.
         * @minLength 1
         */
        domain: string;
        /**
         * The Semrush regional database code, such as us, uk, de, or mobile-us.
         * @minLength 1
         */
        database: string;
      };
      output: {
        /** The report rows returned by Semrush. */
        rows: Array<Record<string, string | number | null>>;
        /** The number of rows returned by Semrush. */
        totalRows: number;
        /** The raw Semrush CSV header columns. */
        rawHeader: Array<string>;
        /** The raw Semrush response text. */
        rawText: string;
      };
    };
    /** List organic search keywords for a domain from a Semrush regional database. */
    "semrush.list_domain_organic_keywords": {
      input: {
        /**
         * The domain name to analyze, such as example.com.
         * @minLength 1
         */
        domain: string;
        /**
         * The Semrush regional database code, such as us, uk, de, or mobile-us.
         * @minLength 1
         */
        database: string;
        /**
         * The maximum number of Semrush rows to request.
         * @minimum 1
         * @maximum 10000
         */
        display_limit?: number;
        /**
         * The one-based Semrush row offset to start from.
         * @minimum 1
         */
        display_offset?: number;
        /**
         * The Semrush historical snapshot date in YYYYMM15 format when the report supports it.
         * @minLength 8
         * @maxLength 8
         */
        display_date?: string;
      };
      output: {
        /** The report rows returned by Semrush. */
        rows: Array<Record<string, string | number | null>>;
        /** The number of rows returned by Semrush. */
        totalRows: number;
        /** The raw Semrush CSV header columns. */
        rawHeader: Array<string>;
        /** The raw Semrush response text. */
        rawText: string;
      };
    };
    /** List organic search competitors for a domain from a Semrush regional database. */
    "semrush.list_organic_competitors": {
      input: {
        /**
         * The domain name to analyze, such as example.com.
         * @minLength 1
         */
        domain: string;
        /**
         * The Semrush regional database code, such as us, uk, de, or mobile-us.
         * @minLength 1
         */
        database: string;
        /**
         * The maximum number of Semrush rows to request.
         * @minimum 1
         * @maximum 10000
         */
        display_limit?: number;
        /**
         * The one-based Semrush row offset to start from.
         * @minimum 1
         */
        display_offset?: number;
        /**
         * The Semrush historical snapshot date in YYYYMM15 format when the report supports it.
         * @minLength 8
         * @maxLength 8
         */
        display_date?: string;
      };
      output: {
        /** The report rows returned by Semrush. */
        rows: Array<Record<string, string | number | null>>;
        /** The number of rows returned by Semrush. */
        totalRows: number;
        /** The raw Semrush CSV header columns. */
        rawHeader: Array<string>;
        /** The raw Semrush response text. */
        rawText: string;
      };
    };
  }
}
