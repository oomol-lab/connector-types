import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List MarketTime catalog items with offset pagination and modification filters. */
    "markettime.list_items": {
      input: {
        /**
         * The zero-based starting index.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 250
         */
        recordSize?: number;
        /** The documented item field used for sorting. */
        sort?: string;
        /** The sort direction, where 1 means ascending. */
        sortType?: number;
        /** The earliest modification timestamp to include. */
        modifiedStartDate?: number;
        /** The latest modification timestamp to include. */
        modifiedEndDate?: number;
      };
      output: {
        /** The records returned by MarketTime. */
        records: Array<Record<string, unknown>>;
        /** The number of records reported in the response. */
        total: number;
        /** The server timestamp returned by MarketTime. */
        timestamp: string;
      };
    };
    /** List manufacturers available to the connected MarketTime account. */
    "markettime.list_manufacturers": {
      input: {
        /**
         * The zero-based starting index.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of manufacturers to return.
         * @minimum 1
         * @maximum 250
         */
        size?: number;
        /** The documented manufacturer field used for sorting. */
        sort?: string;
        /** The sort direction, where 1 means ascending. */
        sortType?: number;
        /** The upstream active-status filter. */
        active?: number;
      };
      output: {
        /** The records returned by MarketTime. */
        records: Array<Record<string, unknown>>;
        /** The number of records reported in the response. */
        total: number;
        /** The server timestamp returned by MarketTime. */
        timestamp: string;
      };
    };
    /** Search MarketTime orders with documented filters, sorting, and pagination. */
    "markettime.search_orders": {
      input: {
        /** Whether to include total record and page counts. */
        includeTotalCount?: boolean;
        /** Whether to omit order details from returned orders. */
        excludeOrderDetails?: boolean;
        /** The filter conditions combined with AND. */
        filterRequests?: Array<{
          /** The documented order field to filter. */
          filterField: string;
          /** The comparison value, omitted for null checks. */
          filterValue?: string;
          /** The comparison operation for this filter. */
          filterOperation: "EQ" | "NE" | "LT" | "LTE" | "GT" | "GTE" | "IN" | "NOT_IN" | "STARTS_WITH" | "ENDS_WITH" | "CONTAINS" | "IS_NULL" | "IS_NOT_NULL";
        }>;
        /** The ordered sorting rules. */
        sortRequests?: Array<{
          /** The documented order field to sort. */
          sortField: string;
          /**
           * The precedence of this rule when multiple sorts are supplied.
           * @minimum 0
           */
          sortOrder?: number;
          /** The sort direction. */
          sortType: "ASC" | "DESC";
        }>;
        /** The page-number pagination settings. */
        paginationRequest?: {
          /**
           * The page number to fetch.
           * @minimum 1
           */
          pageNumber?: number;
          /**
           * The maximum number of orders to return per page.
           * @minimum 1
           * @maximum 250
           */
          pageSize?: number;
        };
      };
      output: {
        /** The orders returned for the current page. */
        records: Array<Record<string, unknown>>;
        /** The current page number. */
        currentPage: number;
        /** The requested page size. */
        pageSize: number;
        /** The total number of matching pages when total counts were requested. */
        totalNumberOfPages?: number;
        /** The total number of matching orders when total counts were requested. */
        totalNumberOfRecords?: number;
        /** The server timestamp returned by MarketTime. */
        timestamp: string;
      };
    };
  }
}
