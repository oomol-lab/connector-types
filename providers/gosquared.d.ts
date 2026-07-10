import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a realtime GoSquared Now overview for the configured project. */
    "gosquared.get_now_overview": {
      input: {
        /**
         * GoSquared site_token for the project to query. Omit this to use the siteToken saved on the connection.
         * @minLength 1
         */
        siteToken?: string;
        /**
         * The start date-time for the GoSquared query.
         * @minLength 1
         */
        from?: string;
        /**
         * The end date-time for the GoSquared query.
         * @minLength 1
         */
        to?: string;
        /**
         * Moment.js date format that GoSquared should use for returned date parameters.
         * @minLength 1
         */
        dateFormat?: string;
      };
      output: {
        /** The raw JSON object returned by GoSquared. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve GoSquared Now visitor counts over time for the configured project. */
    "gosquared.get_now_time_series": {
      input: {
        /**
         * GoSquared site_token for the project to query. Omit this to use the siteToken saved on the connection.
         * @minLength 1
         */
        siteToken?: string;
        /**
         * The start date-time for the GoSquared query.
         * @minLength 1
         */
        from?: string;
        /**
         * The end date-time for the GoSquared query.
         * @minLength 1
         */
        to?: string;
        /**
         * Discrete time interval between Now Time Series points, such as 5min.
         * @minLength 1
         */
        interval?: string;
        /**
         * Moment.js date format that GoSquared should use for returned date parameters.
         * @minLength 1
         */
        dateFormat?: string;
      };
      output: {
        /** The raw JSON object returned by GoSquared. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch scope and authorization information for the connected GoSquared API key. */
    "gosquared.get_token_info": {
      input: Record<string, never>;
      output: {
        /** Scopes returned by GoSquared for the API key. */
        scopes: Array<string>;
        /** The raw JSON object returned by GoSquared. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve GoSquared Trends aggregate metrics for a project over a time period. */
    "gosquared.get_trends_aggregate": {
      input: {
        /**
         * GoSquared site_token for the project to query. Omit this to use the siteToken saved on the connection.
         * @minLength 1
         */
        siteToken?: string;
        /**
         * The start date-time for the GoSquared query.
         * @minLength 1
         */
        from?: string;
        /**
         * The end date-time for the GoSquared query.
         * @minLength 1
         */
        to?: string;
        /**
         * Moment.js date format that GoSquared should use for returned date parameters.
         * @minLength 1
         */
        dateFormat?: string;
        /**
         * Maximum number of results to return, either as a count such as 10 or offset,count such as 5,10.
         * @minLength 1
         */
        limit?: string;
        /** Interval used to split GoSquared Trends Aggregate datapoints. */
        interval?: "hour" | "day" | "month";
      };
      output: {
        /** The raw JSON object returned by GoSquared. */
        raw: Record<string, unknown>;
      };
    };
  }
}
