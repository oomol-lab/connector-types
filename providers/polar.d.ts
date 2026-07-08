import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Polar customer by ID. */
    "polar.get_customer": {
      input: {
        /**
         * The Polar resource ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The raw Polar resource payload. */
        payload: Record<string, unknown>;
      };
    };
    /** Get a Polar customer by external ID. */
    "polar.get_customer_by_external_id": {
      input: {
        /**
         * The Polar customer external ID.
         * @minLength 1
         */
        external_id: string;
      };
      output: {
        /** The raw Polar resource payload. */
        payload: Record<string, unknown>;
      };
    };
    /** Get a Polar customer state by customer ID, including subscriptions and benefits. */
    "polar.get_customer_state": {
      input: {
        /**
         * The Polar resource ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The raw Polar resource payload. */
        payload: Record<string, unknown>;
      };
    };
    /** Get a Polar customer state by external customer ID, including subscriptions and benefits. */
    "polar.get_customer_state_by_external_id": {
      input: {
        /**
         * The Polar customer external ID.
         * @minLength 1
         */
        external_id: string;
      };
      output: {
        /** The raw Polar resource payload. */
        payload: Record<string, unknown>;
      };
    };
    /** Get a Polar order by ID. */
    "polar.get_order": {
      input: {
        /**
         * The Polar resource ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The raw Polar resource payload. */
        payload: Record<string, unknown>;
      };
    };
    /** Get a Polar organization by ID. */
    "polar.get_organization": {
      input: {
        /**
         * The Polar resource ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The raw Polar resource payload. */
        payload: Record<string, unknown>;
      };
    };
    /** Get a Polar product by ID. */
    "polar.get_product": {
      input: {
        /**
         * The Polar resource ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The raw Polar resource payload. */
        payload: Record<string, unknown>;
      };
    };
    /** Get a Polar subscription by ID. */
    "polar.get_subscription": {
      input: {
        /**
         * The Polar resource ID.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** The raw Polar resource payload. */
        payload: Record<string, unknown>;
      };
    };
    /** List Polar customers with optional organization, email, search, activity, and metadata filters. */
    "polar.list_customers": {
      input: {
        /** Filter by organization ID. */
        organization_id?: string | Array<string>;
        /**
         * Filter by exact customer email.
         * @format email
         */
        email?: string;
        /**
         * Filter by customer name, email, or external ID.
         * @minLength 1
         */
        query?: string;
        /** Filter by active customers. */
        active?: boolean;
        /**
         * Page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items to return per page. Polar supports up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Polar customer sorting fields.
         * @minItems 1
         */
        sorting?: Array<"created_at" | "-created_at" | "email" | "-email" | "name" | "-name">;
        /** Metadata filters sent with Polar's deepObject query style. */
        metadata?: Record<string, string | number | boolean | Array<string> | Array<number> | Array<boolean>>;
      };
      output: {
        /** Polar customers returned for the requested page. */
        items: Array<Record<string, unknown>>;
        /** Polar pagination metadata. */
        pagination: {
          /**
           * Total number of items matching the request.
           * @minimum 0
           */
          total_count: number;
          /**
           * Maximum page number available for this request.
           * @minimum 0
           */
          max_page: number;
        };
      };
    };
    /** List Polar orders with optional organization, product, customer, checkout, subscription, and metadata filters. */
    "polar.list_orders": {
      input: {
        /** Filter by organization ID. */
        organization_id?: string | Array<string>;
        /** Filter by product ID. */
        product_id?: string | Array<string>;
        /** Filter by product billing type. */
        product_billing_type?: "one_time" | "recurring" | Array<"one_time" | "recurring">;
        /** Filter by discount ID. */
        discount_id?: string | Array<string>;
        /** Filter by customer ID. */
        customer_id?: string | Array<string>;
        /** Filter by customer external ID. */
        external_customer_id?: string | Array<string>;
        /** Filter by checkout ID. */
        checkout_id?: string | Array<string>;
        /** Filter by subscription ID. */
        subscription_id?: string | Array<string>;
        /**
         * Page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items to return per page. Polar supports up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Polar order sorting fields.
         * @minItems 1
         */
        sorting?: Array<"created_at" | "-created_at" | "status" | "-status" | "invoice_number" | "-invoice_number" | "amount" | "-amount" | "net_amount" | "-net_amount" | "customer" | "-customer" | "product" | "-product" | "discount" | "-discount" | "subscription" | "-subscription">;
        /** Metadata filters sent with Polar's deepObject query style. */
        metadata?: Record<string, string | number | boolean | Array<string> | Array<number> | Array<boolean>>;
      };
      output: {
        /** Polar orders returned for the requested page. */
        items: Array<Record<string, unknown>>;
        /** Polar pagination metadata. */
        pagination: {
          /**
           * Total number of items matching the request.
           * @minimum 0
           */
          total_count: number;
          /**
           * Maximum page number available for this request.
           * @minimum 0
           */
          max_page: number;
        };
      };
    };
    /** List Polar organizations accessible to the Organization Access Token. */
    "polar.list_organizations": {
      input: {
        /**
         * Filter organizations by slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * Page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items to return per page. Polar supports up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Polar organization sorting fields.
         * @minItems 1
         */
        sorting?: Array<"created_at" | "-created_at" | "slug" | "-slug" | "name" | "-name" | "next_review_threshold" | "-next_review_threshold" | "days_in_status" | "-days_in_status">;
      };
      output: {
        /** Polar organizations returned for the requested page. */
        items: Array<Record<string, unknown>>;
        /** Polar pagination metadata. */
        pagination: {
          /**
           * Total number of items matching the request.
           * @minimum 0
           */
          total_count: number;
          /**
           * Maximum page number available for this request.
           * @minimum 0
           */
          max_page: number;
        };
      };
    };
    /** List Polar products with optional organization, name, visibility, and metadata filters. */
    "polar.list_products": {
      input: {
        /** Filter by product ID. */
        id?: string | Array<string>;
        /** Filter by organization ID. */
        organization_id?: string | Array<string>;
        /**
         * Filter by product name.
         * @minLength 1
         */
        query?: string;
        /** Filter by archived products. */
        is_archived?: boolean;
        /** Filter by recurring products. */
        is_recurring?: boolean;
        /** Filter products granting a benefit. */
        benefit_id?: string | Array<string>;
        /**
         * Product visibility values to include.
         * @minItems 1
         */
        visibility?: Array<"draft" | "private" | "public">;
        /**
         * Page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items to return per page. Polar supports up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Polar product sorting fields.
         * @minItems 1
         */
        sorting?: Array<"created_at" | "-created_at" | "name" | "-name" | "price_amount_type" | "-price_amount_type" | "price_amount" | "-price_amount">;
        /** Metadata filters sent with Polar's deepObject query style. */
        metadata?: Record<string, string | number | boolean | Array<string> | Array<number> | Array<boolean>>;
      };
      output: {
        /** Polar products returned for the requested page. */
        items: Array<Record<string, unknown>>;
        /** Polar pagination metadata. */
        pagination: {
          /**
           * Total number of items matching the request.
           * @minimum 0
           */
          total_count: number;
          /**
           * Maximum page number available for this request.
           * @minimum 0
           */
          max_page: number;
        };
      };
    };
    /** List Polar subscriptions with optional organization, product, customer, status, cancellation, and metadata filters. */
    "polar.list_subscriptions": {
      input: {
        /** Filter by organization ID. */
        organization_id?: string | Array<string>;
        /** Filter by product ID. */
        product_id?: string | Array<string>;
        /** Filter by customer ID. */
        customer_id?: string | Array<string>;
        /** Filter by customer external ID. */
        external_customer_id?: string | Array<string>;
        /** Filter by discount ID. */
        discount_id?: string | Array<string>;
        /** Filter by active or inactive subscription. This Polar filter is deprecated upstream. */
        active?: boolean;
        /** Filter by subscription status. */
        status?: "incomplete" | "incomplete_expired" | "trialing" | "active" | "past_due" | "canceled" | "unpaid" | Array<"incomplete" | "incomplete_expired" | "trialing" | "active" | "past_due" | "canceled" | "unpaid">;
        /** Filter by subscriptions set to cancel at period end. */
        cancel_at_period_end?: boolean;
        /** Filter by customer cancellation reason. */
        customer_cancellation_reason?: "customer_service" | "low_quality" | "missing_features" | "switched_service" | "too_complex" | "too_expensive" | "unused" | "other" | Array<"customer_service" | "low_quality" | "missing_features" | "switched_service" | "too_complex" | "too_expensive" | "unused" | "other">;
        /**
         * Filter by cancellation timestamp after or equal to this value.
         * @format date-time
         */
        canceled_at_after?: string;
        /**
         * Filter by cancellation timestamp before or equal to this value.
         * @format date-time
         */
        canceled_at_before?: string;
        /**
         * Page number, starting from 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of items to return per page. Polar supports up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Polar subscription sorting fields.
         * @minItems 1
         */
        sorting?: Array<"customer" | "-customer" | "status" | "-status" | "started_at" | "-started_at" | "current_period_end" | "-current_period_end" | "ended_at" | "-ended_at" | "ends_at" | "-ends_at" | "amount" | "-amount" | "product" | "-product" | "discount" | "-discount">;
        /** Metadata filters sent with Polar's deepObject query style. */
        metadata?: Record<string, string | number | boolean | Array<string> | Array<number> | Array<boolean>>;
      };
      output: {
        /** Polar subscriptions returned for the requested page. */
        items: Array<Record<string, unknown>>;
        /** Polar pagination metadata. */
        pagination: {
          /**
           * Total number of items matching the request.
           * @minimum 0
           */
          total_count: number;
          /**
           * Maximum page number available for this request.
           * @minimum 0
           */
          max_page: number;
        };
      };
    };
  }
}
