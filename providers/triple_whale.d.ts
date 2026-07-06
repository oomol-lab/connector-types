import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a Triple Whale Data-Out custom SQL query for a store and date period. */
    "triple_whale.execute_custom_sql_query": {
      input: {
        /**
         * The Shopify shop domain for the Triple Whale store, for example example.myshopify.com.
         * @minLength 1
         */
        shopId: string;
        /**
         * The SQL query to execute with @startDate and @endDate parameters.
         * @minLength 1
         */
        query: string;
        /** The Custom SQL query date range. */
        period: {
          /**
           * The start date for the SQL query period.
           * @format date
           */
          startDate: string;
          /**
           * The end date for the SQL query period.
           * @format date
           */
          endDate: string;
        };
        /**
         * The currency code for data aggregation, such as USD or EUR.
         * @minLength 3
         * @maxLength 3
         */
        currency?: string;
      };
      output: {
        /** Whether Triple Whale reported the query as successful. */
        success: boolean | null;
        /** The message returned by Triple Whale. */
        message: string | null;
        /** Rows returned by the custom SQL query. */
        data: Array<Record<string, unknown>>;
        /** A Triple Whale response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Export Triple Whale customer journey attribution data for orders in a date period. */
    "triple_whale.get_customer_journey_attribution_data": {
      input: {
        /**
         * The Shopify shop domain for the Triple Whale store, for example example.myshopify.com.
         * @minLength 1
         */
        shop: string;
        /**
         * The start timestamp for the requested attribution period.
         * @minLength 1
         */
        startDate: string;
        /**
         * The end timestamp for the requested attribution period.
         * @minLength 1
         */
        endDate: string;
        /**
         * The page number of results to return, starting from 1.
         * @minimum 1
         * @maximum 10000
         */
        page?: number;
        /**
         * The number of results per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** Whether to exclude detailed journey events from each order result. */
        excludeJourneyData?: boolean;
      };
      output: {
        /** The total number of orders in the requested date range. */
        totalForRange: number | null;
        /** The number of orders returned in this response. */
        count: number | null;
        /** The start timestamp returned by Triple Whale. */
        startDate: string | null;
        /** The end timestamp returned by Triple Whale. */
        endDate: string | null;
        /** The current result page returned by Triple Whale. */
        page: number | null;
        /** The earliest available attribution date returned by Triple Whale. */
        earliestDate: string | null;
        /** Orders with attribution and customer journey details. */
        ordersWithJourneys: Array<Record<string, unknown>>;
        /** A Triple Whale response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Triple Whale Summary Page metrics for a store and date period. */
    "triple_whale.get_summary_page_data": {
      input: {
        /**
         * The Shopify shop domain for the Triple Whale store, for example example.myshopify.com.
         * @minLength 1
         */
        shopDomain: string;
        /** The Summary Page date range to request. */
        period: {
          /**
           * The ISO 8601 start date or timestamp for the Summary Page period.
           * @minLength 1
           */
          start: string;
          /**
           * The ISO 8601 end date or timestamp for the Summary Page period.
           * @minLength 1
           */
          end: string;
        };
        /**
         * The base-1 current-day hour requested by Triple Whale. Pass null or omit it when the requested period has no current-day hour.
         * @minimum 1
         * @maximum 25
         */
        todayHour?: number | null;
      };
      output: {
        /** Summary Page metrics returned by Triple Whale. */
        metrics: Array<{
          /** The metric name returned by Triple Whale. */
          metricName: string;
          /** The metric value returned by Triple Whale. */
          value: number;
          [key: string]: unknown;
        }>;
        /** A Triple Whale response object. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate the connected Triple Whale API key and return its metadata when present. */
    "triple_whale.validate_api_key": {
      input: Record<string, never>;
      output: {
        /** Whether Triple Whale accepted the connected API key. */
        valid: boolean;
        /** A Triple Whale response object. */
        apiKey: Record<string, unknown>;
      };
    };
  }
}
