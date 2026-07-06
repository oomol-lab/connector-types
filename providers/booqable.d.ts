import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch the current Booqable company connected to the access token. */
    "booqable.get_current_company": {
      input: {
        /** Booqable fields keyed by resource type, for example { customers: "id,name" }. */
        fields?: Record<string, string>;
        /** Booqable extra fields keyed by resource type, for example { companies: "subscription" }. */
        extraFields?: Record<string, string>;
      };
      output: {
        /** A Booqable JSON:API resource object. */
        company: {
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
    /** Fetch one Booqable customer by id. */
    "booqable.get_customer": {
      input: {
        /**
         * The Booqable customer id.
         * @minLength 1
         */
        customerId: string;
        /** Booqable fields keyed by resource type, for example { customers: "id,name" }. */
        fields?: Record<string, string>;
        /**
         * Comma-separated Booqable relationships to sideload.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** A Booqable JSON:API resource object. */
        customer: {
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
    /** Fetch one Booqable order by id. */
    "booqable.get_order": {
      input: {
        /**
         * The Booqable order id.
         * @minLength 1
         */
        orderId: string;
        /** Booqable fields keyed by resource type, for example { customers: "id,name" }. */
        fields?: Record<string, string>;
        /**
         * Comma-separated Booqable relationships to sideload.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** A Booqable JSON:API resource object. */
        order: {
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
    /** Fetch one Booqable product group by id. */
    "booqable.get_product_group": {
      input: {
        /**
         * The Booqable product group id.
         * @minLength 1
         */
        productGroupId: string;
        /** Booqable fields keyed by resource type, for example { customers: "id,name" }. */
        fields?: Record<string, string>;
        /**
         * Comma-separated Booqable relationships to sideload.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** A Booqable JSON:API resource object. */
        productGroup: {
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
    /** List Booqable customers with optional fields, filters, includes, and paging. */
    "booqable.list_customers": {
      input: {
        /** Booqable fields keyed by resource type, for example { customers: "id,name" }. */
        fields?: Record<string, string>;
        /** Booqable filter object. Nested operators are encoded as filter[field][operator]. */
        filter?: Record<string, unknown>;
        /**
         * Comma-separated Booqable relationships to sideload.
         * @minLength 1
         */
        include?: string;
        /** Booqable meta aggregation object. Arrays are encoded with bracket query parameters. */
        meta?: Record<string, unknown>;
        /**
         * The Booqable page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of Booqable records to request per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Booqable sort expression such as created_at or -created_at.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Booqable customers resources returned by the request. */
        customers: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API links returned by Booqable. */
        links: Record<string, unknown>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
    /** List Booqable orders with optional fields, filters, includes, and paging. */
    "booqable.list_orders": {
      input: {
        /** Booqable fields keyed by resource type, for example { customers: "id,name" }. */
        fields?: Record<string, string>;
        /** Booqable filter object. Nested operators are encoded as filter[field][operator]. */
        filter?: Record<string, unknown>;
        /**
         * Comma-separated Booqable relationships to sideload.
         * @minLength 1
         */
        include?: string;
        /** Booqable meta aggregation object. Arrays are encoded with bracket query parameters. */
        meta?: Record<string, unknown>;
        /**
         * The Booqable page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of Booqable records to request per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Booqable sort expression such as created_at or -created_at.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Booqable orders resources returned by the request. */
        orders: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API links returned by Booqable. */
        links: Record<string, unknown>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
    /** List Booqable product groups with optional fields, filters, includes, and paging. */
    "booqable.list_product_groups": {
      input: {
        /** Booqable fields keyed by resource type, for example { customers: "id,name" }. */
        fields?: Record<string, string>;
        /** Booqable filter object. Nested operators are encoded as filter[field][operator]. */
        filter?: Record<string, unknown>;
        /**
         * Comma-separated Booqable relationships to sideload.
         * @minLength 1
         */
        include?: string;
        /** Booqable meta aggregation object. Arrays are encoded with bracket query parameters. */
        meta?: Record<string, unknown>;
        /**
         * The Booqable page number to request.
         * @exclusiveMinimum 0
         */
        pageNumber?: number;
        /**
         * The number of Booqable records to request per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Booqable sort expression such as created_at or -created_at.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** Booqable productGroups resources returned by the request. */
        productGroups: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API links returned by Booqable. */
        links: Record<string, unknown>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
    /** Run a Booqable advanced search over customers. */
    "booqable.search_customers": {
      input: {
        /** The Booqable advanced-search JSON body, usually containing filter.conditions and optional fields. */
        search: Record<string, unknown>;
      };
      output: {
        /** Booqable customers resources returned by the request. */
        customers: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API links returned by Booqable. */
        links: Record<string, unknown>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
    /** Run a Booqable advanced search over orders. */
    "booqable.search_orders": {
      input: {
        /** The Booqable advanced-search JSON body, usually containing filter.conditions and optional fields. */
        search: Record<string, unknown>;
      };
      output: {
        /** Booqable orders resources returned by the request. */
        orders: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API links returned by Booqable. */
        links: Record<string, unknown>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
    /** Run a Booqable advanced search over product groups. */
    "booqable.search_product_groups": {
      input: {
        /** The Booqable advanced-search JSON body, usually containing filter.conditions and optional fields. */
        search: Record<string, unknown>;
      };
      output: {
        /** Booqable productGroups resources returned by the request. */
        productGroups: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API resources sideloaded by Booqable for this request. */
        included: Array<{
          /**
           * The Booqable resource id.
           * @minLength 1
           */
          id?: string;
          /**
           * The Booqable JSON:API resource type.
           * @minLength 1
           */
          type?: string;
          /** The Booqable resource attributes. */
          attributes?: Record<string, unknown>;
          /** The Booqable resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** JSON:API links returned by Booqable. */
        links: Record<string, unknown>;
        /** JSON:API metadata returned by Booqable. */
        meta: Record<string, unknown>;
      };
    };
  }
}
