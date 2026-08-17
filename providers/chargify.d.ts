import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Maxio Advanced Billing customer by ID. */
    "chargify.get_customer": {
      input: {
        /**
         * The Maxio customer ID.
         * @exclusiveMinimum 0
         */
        customerId: number;
      };
      output: {
        /** A normalized Maxio Advanced Billing customer. */
        customer: {
          /** The Maxio customer ID when returned. */
          id: number | null;
          /** The customer first name when returned. */
          firstName: string | null;
          /** The customer last name when returned. */
          lastName: string | null;
          /** The customer email address when returned. */
          email: string | null;
          /** The customer organization when returned. */
          organization: string | null;
          /** The merchant-defined customer reference when returned. */
          reference: string | null;
          /** The raw customer object returned by Maxio. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Maxio Advanced Billing product by ID. */
    "chargify.get_product": {
      input: {
        /**
         * The Maxio product ID.
         * @exclusiveMinimum 0
         */
        productId: number;
      };
      output: {
        /** A normalized Maxio Advanced Billing product. */
        product: {
          /** The Maxio product ID when returned. */
          id: number | null;
          /** The product name when returned. */
          name: string | null;
          /** The product API handle when returned. */
          handle: string | null;
          /** The product price in cents when returned. */
          priceInCents: number | null;
          /** The product billing interval when returned. */
          interval: number | null;
          /** The product billing interval unit when returned. */
          intervalUnit: string | null;
          /** The product archive timestamp when returned. */
          archivedAt: string | null;
          /** The raw product object returned by Maxio. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Maxio Advanced Billing subscription by ID. */
    "chargify.get_subscription": {
      input: {
        /**
         * The Maxio subscription ID.
         * @exclusiveMinimum 0
         */
        subscriptionId: number;
      };
      output: {
        /** A normalized Maxio Advanced Billing subscription. */
        subscription: {
          /** The Maxio subscription ID when returned. */
          id: number | null;
          /** The subscription state when returned. */
          state: string | null;
          /** The related customer ID when returned. */
          customerId: number | null;
          /** The related product ID when returned. */
          productId: number | null;
          /** The current billing period end timestamp when returned. */
          currentPeriodEndsAt: string | null;
          /** The next assessment timestamp when returned. */
          nextAssessmentAt: string | null;
          /** The subscription currency when returned. */
          currency: string | null;
          /** The raw subscription object returned by Maxio. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Maxio Advanced Billing customers with search and pagination filters. */
    "chargify.list_customers": {
      input: {
        /**
         * The one-based result page to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of customers to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * Search customers by email, ID, reference, or organization.
         * @minLength 1
         */
        query?: string;
        /** The customer sort direction. */
        direction?: "asc" | "desc";
      };
      output: {
        /** The customers returned for this page. */
        customers: Array<{
          /** The Maxio customer ID when returned. */
          id: number | null;
          /** The customer first name when returned. */
          firstName: string | null;
          /** The customer last name when returned. */
          lastName: string | null;
          /** The customer email address when returned. */
          email: string | null;
          /** The customer organization when returned. */
          organization: string | null;
          /** The merchant-defined customer reference when returned. */
          reference: string | null;
          /** The raw customer object returned by Maxio. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The requested result page.
         * @exclusiveMinimum 0
         */
        page: number;
        /** Whether another page may be available. */
        hasMore: boolean;
      };
    };
    /** List Maxio Advanced Billing products with pagination and archive filtering. */
    "chargify.list_products": {
      input: {
        /**
         * The one-based result page to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of products to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /** Whether archived products should be included. */
        includeArchived?: boolean;
      };
      output: {
        /** The products returned for this page. */
        products: Array<{
          /** The Maxio product ID when returned. */
          id: number | null;
          /** The product name when returned. */
          name: string | null;
          /** The product API handle when returned. */
          handle: string | null;
          /** The product price in cents when returned. */
          priceInCents: number | null;
          /** The product billing interval when returned. */
          interval: number | null;
          /** The product billing interval unit when returned. */
          intervalUnit: string | null;
          /** The product archive timestamp when returned. */
          archivedAt: string | null;
          /** The raw product object returned by Maxio. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The requested result page.
         * @exclusiveMinimum 0
         */
        page: number;
        /** Whether another page may be available. */
        hasMore: boolean;
      };
    };
    /** List Maxio Advanced Billing subscriptions with common filters and pagination. */
    "chargify.list_subscriptions": {
      input: {
        /**
         * The one-based result page to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of subscriptions to return per page.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * Filter subscriptions by documented Maxio state.
         * @minLength 1
         */
        state?: string;
        /**
         * Filter subscriptions by product ID.
         * @exclusiveMinimum 0
         */
        productId?: number;
        /** The subscription sort direction. */
        direction?: "asc" | "desc";
      };
      output: {
        /** The subscriptions returned for this page. */
        subscriptions: Array<{
          /** The Maxio subscription ID when returned. */
          id: number | null;
          /** The subscription state when returned. */
          state: string | null;
          /** The related customer ID when returned. */
          customerId: number | null;
          /** The related product ID when returned. */
          productId: number | null;
          /** The current billing period end timestamp when returned. */
          currentPeriodEndsAt: string | null;
          /** The next assessment timestamp when returned. */
          nextAssessmentAt: string | null;
          /** The subscription currency when returned. */
          currency: string | null;
          /** The raw subscription object returned by Maxio. */
          raw: Record<string, unknown>;
        }>;
        /**
         * The requested result page.
         * @exclusiveMinimum 0
         */
        page: number;
        /** Whether another page may be available. */
        hasMore: boolean;
      };
    };
  }
}
