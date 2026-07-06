import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Export one page of Skio orders with cursor pagination and optional filters. */
    "skio.list_orders": {
      input: {
        /**
         * The number of Skio records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        first: number;
        /**
         * The Skio cursor from a previous pageInfo.endCursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Filter by exact Skio order ID.
         * @format uuid
         */
        id?: string;
        /**
         * Filter by Shopify order ID.
         * @minLength 1
         */
        platformId?: string;
        /**
         * Filter orders created on or after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Filter orders created on or before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * Filter orders updated on or after this ISO 8601 timestamp.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * Filter orders updated on or before this ISO 8601 timestamp.
         * @format date-time
         */
        updatedBefore?: string;
        /**
         * Filter orders by Skio storefront user ID.
         * @format uuid
         */
        storefrontUserId?: string;
      };
      output: {
        /** The Skio records returned on this page. */
        data: Array<Record<string, unknown>>;
        /** Skio cursor pagination metadata. */
        pageInfo: {
          /** Whether Skio has another page after this response. */
          hasNextPage: boolean;
          /** The cursor at the start of this Skio page. */
          startCursor: string | null;
          /** The cursor at the end of this Skio page. */
          endCursor: string | null;
        };
      };
    };
    /** Export one page of Skio products with cursor pagination and optional filters. */
    "skio.list_products": {
      input: {
        /**
         * The number of Skio records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        first: number;
        /**
         * The Skio cursor from a previous pageInfo.endCursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Filter by exact Skio product ID.
         * @format uuid
         */
        id?: string;
        /**
         * Filter by Shopify product ID.
         * @minLength 1
         */
        platformId?: string;
        /**
         * Comma-separated Skio product IDs.
         * @minLength 1
         */
        ids?: string;
        /**
         * Comma-separated Shopify product IDs.
         * @minLength 1
         */
        platformIds?: string;
        /**
         * Filter by exact product status.
         * @minLength 1
         */
        status?: string;
        /**
         * Comma-separated product tag names.
         * @minLength 1
         */
        tags?: string;
        /**
         * Filter products updated on or after this ISO 8601 timestamp.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * Filter products updated on or before this ISO 8601 timestamp.
         * @format date-time
         */
        updatedBefore?: string;
      };
      output: {
        /** The Skio records returned on this page. */
        data: Array<Record<string, unknown>>;
        /** Skio cursor pagination metadata. */
        pageInfo: {
          /** Whether Skio has another page after this response. */
          hasNextPage: boolean;
          /** The cursor at the start of this Skio page. */
          startCursor: string | null;
          /** The cursor at the end of this Skio page. */
          endCursor: string | null;
        };
      };
    };
    /** Export one page of Skio storefront users with cursor pagination and optional filters. */
    "skio.list_storefront_users": {
      input: {
        /**
         * The number of Skio records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        first: number;
        /**
         * The Skio cursor from a previous pageInfo.endCursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Filter by exact Skio storefront user ID.
         * @format uuid
         */
        id?: string;
        /**
         * Filter by Shopify customer ID.
         * @minLength 1
         */
        platformId?: string;
        /**
         * Filter storefront users created on or after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Filter storefront users created on or before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * Filter storefront users updated on or after this ISO 8601 timestamp.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * Filter storefront users updated on or before this ISO 8601 timestamp.
         * @format date-time
         */
        updatedBefore?: string;
        /**
         * Filter by exact storefront user email address.
         * @format email
         */
        email?: string;
      };
      output: {
        /** The Skio records returned on this page. */
        data: Array<Record<string, unknown>>;
        /** Skio cursor pagination metadata. */
        pageInfo: {
          /** Whether Skio has another page after this response. */
          hasNextPage: boolean;
          /** The cursor at the start of this Skio page. */
          startCursor: string | null;
          /** The cursor at the end of this Skio page. */
          endCursor: string | null;
        };
      };
    };
    /** Export one page of Skio subscriptions with cursor pagination and optional filters. */
    "skio.list_subscriptions": {
      input: {
        /**
         * The number of Skio records to return per page.
         * @minimum 1
         * @maximum 1000
         */
        first: number;
        /**
         * The Skio cursor from a previous pageInfo.endCursor.
         * @minLength 1
         */
        after?: string;
        /**
         * Filter by exact Skio subscription ID.
         * @format uuid
         */
        id?: string;
        /**
         * Filter by Shopify subscription ID.
         * @minLength 1
         */
        platformId?: string;
        /**
         * Filter subscriptions created on or after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Filter subscriptions created on or before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * Filter subscriptions updated on or after this ISO 8601 timestamp.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * Filter subscriptions updated on or before this ISO 8601 timestamp.
         * @format date-time
         */
        updatedBefore?: string;
        /**
         * Filter subscriptions by Skio storefront user ID.
         * @format uuid
         */
        storefrontUserId?: string;
        /**
         * Filter by exact subscription status.
         * @minLength 1
         */
        status?: string;
        /**
         * Filter subscriptions with next billing date on or after this ISO 8601 timestamp.
         * @format date-time
         */
        nextBillingDateAfter?: string;
        /**
         * Filter subscriptions with next billing date on or before this ISO 8601 timestamp.
         * @format date-time
         */
        nextBillingDateBefore?: string;
      };
      output: {
        /** The Skio records returned on this page. */
        data: Array<Record<string, unknown>>;
        /** Skio cursor pagination metadata. */
        pageInfo: {
          /** Whether Skio has another page after this response. */
          hasNextPage: boolean;
          /** The cursor at the start of this Skio page. */
          startCursor: string | null;
          /** The cursor at the end of this Skio page. */
          endCursor: string | null;
        };
      };
    };
  }
}
