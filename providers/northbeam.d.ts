import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List the attribution models available for Northbeam data exports. */
    "northbeam.list_attribution_models": {
      input: Record<string, never>;
      output: {
        /** The attribution models returned by Northbeam. */
        attribution_models: Array<{
          /**
           * The Northbeam attribution model identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The human-readable attribution model name. */
          name?: string | null;
        }>;
      };
    };
    /** List the breakdown keys and values available for Northbeam data exports. */
    "northbeam.list_breakdowns": {
      input: Record<string, never>;
      output: {
        /** The breakdowns returned by Northbeam. */
        breakdowns: Array<{
          /**
           * The Northbeam breakdown key.
           * @minLength 1
           * @pattern \S
           */
          key: string;
          /** The values available for the breakdown key. */
          values: Array<string>;
        }>;
      };
    };
    /** List paginated Northbeam hourly spend records. */
    "northbeam.list_hourly_spend": {
      input: {
        /**
         * The start date-time for the hourly spend range.
         * @format date-time
         */
        hour_start_iso_begin?: string;
        /**
         * The end date-time for the hourly spend range.
         * @format date-time
         */
        hour_start_iso_end?: string;
        /**
         * The ad platform account ID to filter spend by.
         * @minLength 1
         * @pattern \S
         */
        platform_account_id?: string;
        /**
         * The ad platform campaign ID to filter spend by.
         * @minLength 1
         * @pattern \S
         */
        campaign_id?: string;
        /**
         * The ad platform ad set ID to filter spend by.
         * @minLength 1
         * @pattern \S
         */
        adset_id?: string;
        /**
         * The ad platform ad ID to filter spend by.
         * @minLength 1
         * @pattern \S
         */
        ad_id?: string;
        /**
         * The result page to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page. Northbeam documents a maximum of 1000.
         * @minimum 1
         * @maximum 1000
         */
        page_size?: number;
      };
      output: {
        /** The spend records returned by Northbeam. */
        records: Array<Record<string, unknown>>;
        /** The current result page. */
        page: number;
        /** The number of results requested per page. */
        page_size: number;
        /** The total number of pages available. */
        total_pages: number;
        /** The total number of spend records matching the filters. */
        total_count: number;
      };
    };
    /** List the metrics available for Northbeam data exports. */
    "northbeam.list_metrics": {
      input: Record<string, never>;
      output: {
        /** The metrics returned by Northbeam. */
        metrics: Array<{
          /**
           * The Northbeam metric identifier.
           * @minLength 1
           * @pattern \S
           */
          id: string;
          /** The human-readable metric label. */
          label?: string | null;
        }>;
      };
    };
    /** List paginated Northbeam daily spend records. */
    "northbeam.list_spend": {
      input: {
        /**
         * The single spend date to fetch. Use this instead of date_start/date_end.
         * @format date
         */
        date?: string;
        /**
         * The start date for a spend date range.
         * @format date
         */
        date_start?: string;
        /**
         * The end date for a spend date range.
         * @format date
         */
        date_end?: string;
        /**
         * The ad platform account ID to filter spend by.
         * @minLength 1
         * @pattern \S
         */
        platform_account_id?: string;
        /**
         * The ad platform campaign ID to filter spend by.
         * @minLength 1
         * @pattern \S
         */
        campaign_id?: string;
        /**
         * The ad platform ad set ID to filter spend by.
         * @minLength 1
         * @pattern \S
         */
        adset_id?: string;
        /**
         * The ad platform ad ID to filter spend by.
         * @minLength 1
         * @pattern \S
         */
        ad_id?: string;
        /**
         * The result page to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results per page. Northbeam documents a maximum of 1000.
         * @minimum 1
         * @maximum 1000
         */
        page_size?: number;
      };
      output: {
        /** The spend records returned by Northbeam. */
        records: Array<Record<string, unknown>>;
        /** The current result page. */
        page: number;
        /** The number of results requested per page. */
        page_size: number;
        /** The total number of pages available. */
        total_pages: number;
        /** The total number of spend records matching the filters. */
        total_count: number;
      };
    };
  }
}
