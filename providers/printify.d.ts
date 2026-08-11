import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one order from a Printify shop by its order ID. */
    "printify.get_order": {
      input: {
        /**
         * The Printify shop ID.
         * @minimum 1
         */
        shopId: number;
        /**
         * The Printify resource ID.
         * @minLength 1
         */
        orderId: string;
      };
      output: {
        /** The resource fields returned by Printify. */
        order: Record<string, unknown>;
      };
    };
    /** Retrieve one product from a Printify shop by its product ID. */
    "printify.get_product": {
      input: {
        /**
         * The Printify shop ID.
         * @minimum 1
         */
        shopId: number;
        /**
         * The Printify resource ID.
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** The resource fields returned by Printify. */
        product: Record<string, unknown>;
      };
    };
    /** List orders in a Printify shop with optional status and SKU filters. */
    "printify.list_orders": {
      input: {
        /**
         * The Printify shop ID.
         * @minimum 1
         */
        shopId: number;
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of orders to return, up to Printify's maximum of 10.
         * @minimum 1
         * @maximum 10
         */
        limit?: number;
        /**
         * The Printify order status to filter by.
         * @minLength 1
         */
        status?: string;
        /**
         * The product SKU to filter by.
         * @minLength 1
         */
        sku?: string;
      };
      output: {
        /** The orders on this page. */
        orders: Array<Record<string, unknown>>;
        /**
         * The current one-based page number.
         * @minimum 1
         */
        currentPage: number;
        /**
         * The last available page number.
         * @minimum 1
         */
        lastPage: number;
        /**
         * The total number of matching resources.
         * @minimum 0
         */
        total: number;
      };
    };
    /** List products created in a Printify shop with page-based pagination. */
    "printify.list_products": {
      input: {
        /**
         * The Printify shop ID.
         * @minimum 1
         */
        shopId: number;
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records to return per page.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
      };
      output: {
        /** The products on this page. */
        products: Array<Record<string, unknown>>;
        /**
         * The current one-based page number.
         * @minimum 1
         */
        currentPage: number;
        /**
         * The last available page number.
         * @minimum 1
         */
        lastPage: number;
        /**
         * The total number of matching resources.
         * @minimum 0
         */
        total: number;
      };
    };
    /** List all Printify shops associated with the authenticated merchant account. */
    "printify.list_shops": {
      input: Record<string, never>;
      output: {
        /** The shops returned by Printify. */
        shops: Array<{
          /** The unique Printify shop ID. */
          id?: number;
          /** The shop title. */
          title?: string;
          /** The sales channel connected to the shop. */
          sales_channel?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
