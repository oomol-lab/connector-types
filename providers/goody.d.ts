import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the current Goody API user. */
    "goody.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * The current user's email address.
         * @format email
         */
        email?: string | null;
        /** The public app ID for the current API key. */
        public_app_id?: string | null;
        /** A Goody API object with official response fields. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a Goody order by ID. */
    "goody.get_order": {
      input: {
        /**
         * The Goody order ID.
         * @minLength 1
         */
        id: string;
      };
      output: Record<string, unknown>;
    };
    /** Retrieve a Goody product by ID. */
    "goody.get_product": {
      input: {
        /**
         * The Goody product ID.
         * @minLength 1
         */
        id: string;
        /** Whether to limit lookup to the custom catalog for approved API partners. */
        use_custom_catalog?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** List Goody orders, optionally filtered by creation timestamp. */
    "goody.list_orders": {
      input: {
        /**
         * Page for pagination, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Items per page for pagination.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /**
         * Only return orders created at or after this timestamp.
         * @format date-time
         */
        created_at_after?: string;
        /**
         * Only return orders created at or before this timestamp.
         * @format date-time
         */
        created_at_before?: string;
      };
      output: {
        /** The Goody objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Goody. */
        list_meta: {
          /** The total number of items in this Goody list. */
          total_count: number;
        };
      };
    };
    /** List Goody payment methods available to the current account. */
    "goody.list_payment_methods": {
      input: Record<string, never>;
      output: {
        /** The Goody objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Goody. */
        list_meta: {
          /** The total number of items in this Goody list. */
          total_count: number;
        };
      };
    };
    /** List active products in the Goody catalog. */
    "goody.list_products": {
      input: {
        /**
         * Page for pagination, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Items per page for pagination.
         * @minimum 1
         * @maximum 100
         */
        per_page?: number;
        /** Whether to limit results to the custom catalog for approved API partners. */
        use_custom_catalog?: boolean;
        /**
         * A shipping country code to filter products by, such as US.
         * @minLength 2
         * @maxLength 2
         */
        country_code?: string;
        /** Whether to show inactive products in the custom catalog for approved Commerce API customers. */
        custom_catalog_show_inactive?: boolean;
      };
      output: {
        /** The Goody objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Goody. */
        list_meta: {
          /** The total number of items in this Goody list. */
          total_count: number;
        };
      };
    };
    /** List Goody workspaces available to the current account. */
    "goody.list_workspaces": {
      input: Record<string, never>;
      output: {
        /** The Goody objects returned for this page. */
        data: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Goody. */
        list_meta: {
          /** The total number of items in this Goody list. */
          total_count: number;
        };
      };
    };
  }
}
