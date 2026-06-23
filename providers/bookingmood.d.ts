import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Bookingmood bookings with optional PostgREST select, pagination, ordering, and ID filters. */
    "bookingmood.list_bookings": {
      input: {
        /**
         * Columns to select from the bookings endpoint.
         * @minLength 1
         */
        select?: string;
        /**
         * Maximum number of bookings to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of bookings to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * PostgREST order expression for bookings, such as created_at.desc or updated_at.asc.
         * @minLength 1
         */
        order?: string;
        /**
         * PostgREST filter for a specific booking ID.
         * @minLength 1
         */
        id?: string;
        /**
         * PostgREST filter for a specific organization ID.
         * @minLength 1
         */
        organization_id?: string;
        /**
         * PostgREST filter for bookings related to a product ID.
         * @minLength 1
         */
        product_id?: string;
      };
      output: {
        /** Booking records returned by Bookingmood. */
        bookings: Array<{
          /** The unique booking identifier. */
          id?: string;
          /** The organization identifier that owns the booking. */
          organization_id?: string;
          /** The product identifier associated with the booking. */
          product_id?: string;
          /** The booking status returned by Bookingmood. */
          status?: string;
          /** The booking start timestamp returned by Bookingmood. */
          start_at?: string;
          /** The booking end timestamp returned by Bookingmood. */
          end_at?: string;
          /** The booking creation timestamp returned by Bookingmood. */
          created_at?: string;
          /** The booking update timestamp returned by Bookingmood. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Bookingmood products with optional PostgREST select, pagination, ordering, and ID filters. */
    "bookingmood.list_products": {
      input: {
        /**
         * Columns to select from the products endpoint.
         * @minLength 1
         */
        select?: string;
        /**
         * Maximum number of products to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * Number of products to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * PostgREST order expression for products, such as created_at.desc or updated_at.asc.
         * @minLength 1
         */
        order?: string;
        /**
         * PostgREST filter for a specific product ID.
         * @minLength 1
         */
        id?: string;
        /**
         * PostgREST filter for a specific organization ID.
         * @minLength 1
         */
        organization_id?: string;
      };
      output: {
        /** Product records returned by Bookingmood. */
        products: Array<{
          /** The unique product identifier. */
          id?: string;
          /** The organization identifier that owns the product. */
          organization_id?: string;
          /** The localized product name returned by Bookingmood. */
          name?: unknown;
          /** The product timezone. */
          timezone?: string;
          /** The product rent period. */
          rent_period?: string;
          /** The product creation timestamp returned by Bookingmood. */
          created_at?: string;
          /** The product update timestamp returned by Bookingmood. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Fetch Bookingmood availability for a product using the official availability endpoint. */
    "bookingmood.query_availability": {
      input: {
        /**
         * Bookingmood product ID to query availability for.
         * @format uuid
         */
        product_id: string;
        /**
         * Start date for the availability window.
         * @format date
         */
        start?: string;
        /**
         * End date for the availability window.
         * @format date
         */
        end?: string;
      };
      output: {
        /** Availability entries returned by Bookingmood. */
        availability: Array<{
          /** The date or interval key returned by Bookingmood. */
          date?: string;
          /** Whether the product is available for the interval. */
          available?: boolean;
          [key: string]: unknown;
        }>;
        /** Raw availability payload returned by Bookingmood. */
        raw: unknown;
      };
    };
  }
}
