import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Precoro catalog item by numeric item ID. */
    "precoro.get_item": {
      input: {
        /**
         * The Precoro numeric record ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** A Precoro item returned by the API. */
        item: Record<string, unknown>;
        /** Additional upstream fields returned by Precoro. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Precoro purchase order by its company-visible IDN. */
    "precoro.get_purchase_order": {
      input: {
        /**
         * The Precoro company-visible document IDN.
         * @minLength 1
         */
        idn: string;
      };
      output: {
        /** A Precoro purchase order returned by the API. */
        purchaseOrder: Record<string, unknown>;
        /** Additional upstream fields returned by Precoro. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Precoro supplier by numeric supplier ID. */
    "precoro.get_supplier": {
      input: {
        /**
         * The Precoro numeric record ID.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** A Precoro supplier returned by the API. */
        supplier: Record<string, unknown>;
        /** Additional upstream fields returned by Precoro. */
        raw: Record<string, unknown>;
      };
    };
    /** List Precoro catalog items with pagination and optional modified-since filtering. */
    "precoro.list_items": {
      input: {
        /**
         * Return records created or modified since this UTC timestamp.
         * @minLength 1
         */
        modifiedSince?: string;
        /** Number of records per page. Precoro supports 10, 20, 50, 100, or 200. */
        per_page?: number;
        /** The page number to request, or last to request the final page. */
        page?: number | "last";
        /**
         * External IDs to pass as repeated external_id[] filters. Precoro supports up to 200 values.
         * @maxItems 200
         */
        externalIds?: Array<number>;
      };
      output: {
        /** Records returned by Precoro. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Precoro. */
        pagination: {
          /** The number of records returned in the current page. */
          count?: number;
          /** The maximum number of records per page. */
          per_page?: number;
          /** The current page number returned by Precoro. */
          current_page?: number;
          /** Whether another page is available. */
          has_next_page?: boolean;
          /** The total number of records when Precoro includes it. */
          total?: number;
          /** The total number of pages when Precoro includes it. */
          total_pages?: number;
          /** Additional upstream fields returned by Precoro. */
          links?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Additional upstream fields returned by Precoro. */
        raw: Record<string, unknown>;
      };
    };
    /** List Precoro purchase orders with pagination and optional status/date filters. */
    "precoro.list_purchase_orders": {
      input: {
        /**
         * Return purchase orders created or modified since this UTC timestamp.
         * @minLength 1
         */
        modifiedSince?: string;
        /** Number of records per page. Precoro supports 10, 20, 50, 100, or 200. */
        per_page?: number;
        /** The page number to request, or last to request the final page. */
        page?: number | "last";
        /**
         * Return purchase orders approved on or after this UTC timestamp.
         * @minLength 1
         */
        approvalLeftDate?: string;
        /**
         * Return purchase orders approved on or before this UTC timestamp.
         * @minLength 1
         */
        approvalRightDate?: string;
        /** Purchase order status values to pass as repeated status[] filters. */
        statuses?: Array<number>;
        /** Purchase order logic type values to pass as repeated logicType[] filters. */
        logicTypes?: Array<number>;
        /**
         * External IDs to pass as repeated external_id[] filters. Precoro supports up to 200 values.
         * @maxItems 200
         */
        externalIds?: Array<number>;
      };
      output: {
        /** Records returned by Precoro. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Precoro. */
        pagination: {
          /** The number of records returned in the current page. */
          count?: number;
          /** The maximum number of records per page. */
          per_page?: number;
          /** The current page number returned by Precoro. */
          current_page?: number;
          /** Whether another page is available. */
          has_next_page?: boolean;
          /** The total number of records when Precoro includes it. */
          total?: number;
          /** The total number of pages when Precoro includes it. */
          total_pages?: number;
          /** Additional upstream fields returned by Precoro. */
          links?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Additional upstream fields returned by Precoro. */
        raw: Record<string, unknown>;
      };
    };
    /** List Precoro suppliers with pagination and optional modified-since filtering. */
    "precoro.list_suppliers": {
      input: {
        /**
         * Return records created or modified since this UTC timestamp.
         * @minLength 1
         */
        modifiedSince?: string;
        /** Number of records per page. Precoro supports 10, 20, 50, 100, or 200. */
        per_page?: number;
        /** The page number to request, or last to request the final page. */
        page?: number | "last";
        /**
         * External IDs to pass as repeated external_id[] filters. Precoro supports up to 200 values.
         * @maxItems 200
         */
        externalIds?: Array<number>;
      };
      output: {
        /** Records returned by Precoro. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Precoro. */
        pagination: {
          /** The number of records returned in the current page. */
          count?: number;
          /** The maximum number of records per page. */
          per_page?: number;
          /** The current page number returned by Precoro. */
          current_page?: number;
          /** Whether another page is available. */
          has_next_page?: boolean;
          /** The total number of records when Precoro includes it. */
          total?: number;
          /** The total number of pages when Precoro includes it. */
          total_pages?: number;
          /** Additional upstream fields returned by Precoro. */
          links?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Additional upstream fields returned by Precoro. */
        raw: Record<string, unknown>;
      };
    };
    /** List Precoro users visible to the connected API user. */
    "precoro.list_users": {
      input: Record<string, never>;
      output: {
        /** Records returned by Precoro. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Precoro. */
        pagination: {
          /** The number of records returned in the current page. */
          count?: number;
          /** The maximum number of records per page. */
          per_page?: number;
          /** The current page number returned by Precoro. */
          current_page?: number;
          /** Whether another page is available. */
          has_next_page?: boolean;
          /** The total number of records when Precoro includes it. */
          total?: number;
          /** The total number of pages when Precoro includes it. */
          total_pages?: number;
          /** Additional upstream fields returned by Precoro. */
          links?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Additional upstream fields returned by Precoro. */
        raw: Record<string, unknown>;
      };
    };
    /** List Precoro warehouses configured in the connected company. */
    "precoro.list_warehouses": {
      input: Record<string, never>;
      output: {
        /** Records returned by Precoro. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Precoro. */
        pagination: {
          /** The number of records returned in the current page. */
          count?: number;
          /** The maximum number of records per page. */
          per_page?: number;
          /** The current page number returned by Precoro. */
          current_page?: number;
          /** Whether another page is available. */
          has_next_page?: boolean;
          /** The total number of records when Precoro includes it. */
          total?: number;
          /** The total number of pages when Precoro includes it. */
          total_pages?: number;
          /** Additional upstream fields returned by Precoro. */
          links?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Additional upstream fields returned by Precoro. */
        raw: Record<string, unknown>;
      };
    };
  }
}
