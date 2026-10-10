import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the official release history of one macroeconomic indicator for a currency, such as US CPI or the ECB deposit rate. Each row carries the reference period, the value and the time the publisher released it. USD works without an API key with limited recent history. */
    "fxmacrodata.get_announcements": {
      input: {
        /**
         * Three-letter currency code, such as usd, eur, gbp or jpy. Case-insensitive.
         * @pattern ^[A-Za-z]{3}$
         */
        currency: string;
        /**
         * Indicator slug, such as inflation, policy_rate, unemployment or gdp. get_data_catalogue lists every slug served for a currency.
         * @pattern ^[a-z0-9_]+$
         */
        indicator: string;
        /**
         * Earliest date to return, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * Latest date to return, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * Maximum number of rows to return. Defaults to 20; at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 20
         */
        limit?: number;
        /**
         * Number of rows to skip. Use pagination.next_offset to read the next page.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** The currency code. */
        currency?: string;
        /** The indicator slug. */
        indicator?: string;
        /** The indicator name. */
        name?: string;
        /** Releases, newest first. */
        data?: Array<{
          /** The reference period the value describes, as YYYY-MM-DD. */
          date?: string;
          /** The released value. */
          val?: number | null;
          /** When the publisher released the value, as Unix seconds. */
          announcement_datetime?: number | null;
          /** The publisher of the value. */
          source?: string;
          /** The publisher page the value was read from. */
          source_url?: string;
          [key: string]: unknown;
        }>;
        /** Page information. Continue with next_offset while has_more is true. */
        pagination?: {
          /** The requested page size. */
          limit?: number | null;
          /** Number of rows skipped. */
          offset?: number | null;
          /** Number of rows in this page. */
          returned_count?: number | null;
          /** Total rows in the requested date window. */
          total_count?: number | null;
          /** Whether another page is available. */
          has_more?: boolean | null;
          /** Offset for the next page, or null when there are no more rows. */
          next_offset?: number | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get weekly CFTC Commitments of Traders positioning for a currency's futures. USD supports limited keyless history; other currencies require an API key. */
    "fxmacrodata.get_cot": {
      input: {
        /**
         * Three-letter currency code, such as usd, eur, gbp or jpy. Case-insensitive.
         * @pattern ^[A-Za-z]{3}$
         */
        currency: string;
        /**
         * Earliest date to return, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * Latest date to return, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * Maximum number of rows to return. Defaults to 20; at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 20
         */
        limit?: number;
        /**
         * Number of rows to skip. Use pagination.next_offset to read the next page.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Weekly reports. */
        data?: Array<Record<string, unknown>>;
        /** Page information. Continue with next_offset while has_more is true. */
        pagination?: {
          /** The requested page size. */
          limit?: number | null;
          /** Number of rows skipped. */
          offset?: number | null;
          /** Number of rows in this page. */
          returned_count?: number | null;
          /** Total rows in the requested date window. */
          total_count?: number | null;
          /** Whether another page is available. */
          has_more?: boolean | null;
          /** Offset for the next page, or null when there are no more rows. */
          next_offset?: number | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the indicators served for a currency, keyed by indicator slug, with name, unit, frequency, publisher and coverage. Works without an API key. */
    "fxmacrodata.get_data_catalogue": {
      input: {
        /**
         * Three-letter currency code, such as usd, eur, gbp or jpy. Case-insensitive.
         * @pattern ^[A-Za-z]{3}$
         */
        currency: string;
      };
      output: Record<string, unknown>;
    };
    /** Get daily FX spot rates for a currency pair, such as EUR/USD. Requires an API key. */
    "fxmacrodata.get_forex": {
      input: {
        /**
         * Base currency code, such as eur.
         * @pattern ^[A-Za-z]{3}$
         */
        base: string;
        /**
         * Quote currency code, such as usd.
         * @pattern ^[A-Za-z]{3}$
         */
        quote: string;
        /**
         * Earliest date to return, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * Latest date to return, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
        /**
         * Maximum number of rows to return. Defaults to 20; at most 100.
         * @maximum 100
         * @exclusiveMinimum 0
         * @default 20
         */
        limit?: number;
        /**
         * Number of rows to skip. Use pagination.next_offset to read the next page.
         * @minimum 0
         * @default 0
         */
        offset?: number;
      };
      output: {
        /** Daily rates. */
        data?: Array<Record<string, unknown>>;
        /** Page information. Continue with next_offset while has_more is true. */
        pagination?: {
          /** The requested page size. */
          limit?: number | null;
          /** Number of rows skipped. */
          offset?: number | null;
          /** Number of rows in this page. */
          returned_count?: number | null;
          /** Total rows in the requested date window. */
          total_count?: number | null;
          /** Whether another page is available. */
          has_more?: boolean | null;
          /** Offset for the next page, or null when there are no more rows. */
          next_offset?: number | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the most recent official release of every indicator for a currency in one call. USD works without an API key. */
    "fxmacrodata.get_latest_announcements": {
      input: {
        /**
         * Three-letter currency code, such as usd, eur, gbp or jpy. Case-insensitive.
         * @pattern ^[A-Za-z]{3}$
         */
        currency: string;
      };
      output: {
        /** The currency code. */
        currency?: string;
        /** Number of indicators returned. */
        count?: number;
        /** One latest release per indicator. */
        data?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get scheduled official release times for a currency, such as the next CPI, payrolls or central bank decision. Calendars work without an API key. */
    "fxmacrodata.get_release_calendar": {
      input: {
        /**
         * Three-letter currency code, such as usd, eur, gbp or jpy. Case-insensitive.
         * @pattern ^[A-Za-z]{3}$
         */
        currency: string;
        /**
         * Indicator slug, such as inflation, policy_rate, unemployment or gdp. get_data_catalogue lists every slug served for a currency.
         * @pattern ^[a-z0-9_]+$
         */
        indicator?: string;
        /**
         * Earliest date to return, as YYYY-MM-DD.
         * @format date
         */
        startDate?: string;
        /**
         * Latest date to return, as YYYY-MM-DD.
         * @format date
         */
        endDate?: string;
      };
      output: {
        /** The currency code. */
        currency?: string;
        /** The publisher's local timezone. */
        timezone?: string;
        /** Scheduled releases in time order. */
        data?: Array<{
          /** The indicator slug being released. */
          release?: string;
          /** The release name. */
          name?: string;
          /** Scheduled release time as Unix seconds. */
          announcement_datetime?: number;
          /** Scheduled release time in UTC, ISO 8601. */
          announcement_datetime_utc?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
