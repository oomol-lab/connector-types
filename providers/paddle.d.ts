import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Paddle customer. */
    "paddle.create_customer": {
      input: {
        /**
         * Full name for this customer.
         * @minLength 1
         */
        name?: string;
        /**
         * Email address for this customer.
         * @minLength 1
         * @format email
         */
        email: string;
        /**
         * IETF BCP 47 locale tag for this customer.
         * @minLength 1
         */
        locale?: string;
        /** Custom data attached to a Paddle entity. */
        custom_data?: Record<string, unknown> | null;
      };
      output: {
        /** Raw Paddle entity returned by the API. */
        customer: Record<string, unknown> | null;
        /** Paddle response metadata when returned by the API. */
        meta: Record<string, unknown>;
      };
    };
    /** Create a Paddle price for a product. */
    "paddle.create_price": {
      input: {
        /**
         * Paddle product ID, prefixed with `pro_`.
         * @minLength 1
         */
        product_id: string;
        /**
         * Internal description for this price.
         * @minLength 1
         */
        description: string;
        /** Money amount in Paddle's lowest currency denomination. */
        unit_price: {
          /**
           * Amount in the lowest denomination for the currency, represented as a string.
           * @minLength 1
           */
          amount: string;
          /**
           * Three-letter ISO 4217 currency code.
           * @minLength 1
           */
          currency_code: string;
        };
        /** Paddle entity type. */
        type?: "standard" | "custom";
        /**
         * Name of this price.
         * @minLength 1
         */
        name?: string;
        /** Recurring billing cycle for a Paddle price, or null for a one-time price. */
        billing_cycle?: {
          /** Billing interval unit. */
          interval: "day" | "week" | "month" | "year";
          /**
           * Number of intervals in the billing cycle.
           * @minimum 1
           */
          frequency: number;
        } | null;
        /** Trial period configuration for a Paddle price. */
        trial_period?: {
          /** Billing interval unit. */
          interval: "day" | "week" | "month" | "year";
          /**
           * Number of intervals in the trial period.
           * @minimum 1
           */
          frequency: number;
          /** Whether a payment method is required for the trial. */
          requires_payment_method?: boolean;
          /** Money amount in Paddle's lowest currency denomination. */
          unit_price?: {
            /**
             * Amount in the lowest denomination for the currency, represented as a string.
             * @minLength 1
             */
            amount: string;
            /**
             * Three-letter ISO 4217 currency code.
             * @minLength 1
             */
            currency_code: string;
          } | null;
        } | null;
        /** How Paddle should calculate tax for this price. */
        tax_mode?: "account_setting" | "external" | "internal" | "location";
        /** Quantity limits for the related product at this price. */
        quantity?: {
          /**
           * Minimum quantity that can be purchased.
           * @minimum 1
           */
          minimum?: number;
          /**
           * Maximum quantity that can be purchased.
           * @minimum 1
           */
          maximum?: number;
        };
        /** Custom data attached to a Paddle entity. */
        custom_data?: Record<string, unknown> | null;
      };
      output: {
        /** Raw Paddle entity returned by the API. */
        price: Record<string, unknown> | null;
        /** Paddle response metadata when returned by the API. */
        meta: Record<string, unknown>;
      };
    };
    /** Create a Paddle product in the catalog. */
    "paddle.create_product": {
      input: {
        /**
         * Name of the product.
         * @minLength 1
         */
        name: string;
        /**
         * Short description for the product.
         * @minLength 1
         */
        description?: string;
        /** Paddle product tax category. */
        tax_category?: "digital-goods" | "ebooks" | "implementation-services" | "professional-services" | "saas" | "software-programming-services" | "standard" | "training-services" | "website-hosting";
        /** Paddle entity type. */
        type?: "standard" | "custom";
        /**
         * Image URL for this product.
         * @format uri
         */
        image_url?: string;
        /** Custom data attached to a Paddle entity. */
        custom_data?: Record<string, unknown> | null;
      };
      output: {
        /** Raw Paddle entity returned by the API. */
        product: Record<string, unknown> | null;
        /** Paddle response metadata when returned by the API. */
        meta: Record<string, unknown>;
      };
    };
    /** Get one Paddle customer by ID. */
    "paddle.get_customer": {
      input: {
        /**
         * Paddle customer ID, prefixed with `ctm_`.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Paddle entity returned by the API. */
        customer: Record<string, unknown> | null;
        /** Paddle response metadata when returned by the API. */
        meta: Record<string, unknown>;
      };
    };
    /** Get one Paddle price by ID. */
    "paddle.get_price": {
      input: {
        /**
         * Paddle price ID, prefixed with `pri_`.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Paddle entity returned by the API. */
        price: Record<string, unknown> | null;
        /** Paddle response metadata when returned by the API. */
        meta: Record<string, unknown>;
      };
    };
    /** Get one Paddle product by ID. */
    "paddle.get_product": {
      input: {
        /**
         * Paddle product ID, prefixed with `pro_`.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Raw Paddle entity returned by the API. */
        product: Record<string, unknown> | null;
        /** Paddle response metadata when returned by the API. */
        meta: Record<string, unknown>;
      };
    };
    /** List Paddle customers with optional email, status, search, and pagination filters. */
    "paddle.list_customers": {
      input: {
        /**
         * Paddle ID cursor returned in a previous list response.
         * @minLength 1
         */
        after?: string;
        /**
         * Maximum number of entities to request from Paddle.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * Paddle order_by expression such as `id[DESC]`.
         * @minLength 1
         */
        orderBy?: string;
        /** Whether to send Skip-Count: true to speed up list responses. */
        skipCount?: boolean;
        /** Customer IDs to return. */
        ids?: Array<string>;
        /** Email addresses to match exactly. */
        emails?: Array<string>;
        /** Customer statuses to return. */
        status?: Array<"active" | "archived">;
        /**
         * Search query matched against customer ID, name, and email.
         * @maxLength 100
         */
        search?: string;
      };
      output: {
        /** A Paddle customer entity. */
        data: Array<Record<string, unknown>>;
        /** Paddle response metadata, including pagination for list endpoints. */
        meta: Record<string, unknown>;
      };
    };
    /** List Paddle prices with optional product, status, recurring, and billing filters. */
    "paddle.list_prices": {
      input: {
        /**
         * Paddle ID cursor returned in a previous list response.
         * @minLength 1
         */
        after?: string;
        /**
         * Maximum number of entities to request from Paddle.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * Paddle order_by expression such as `id[DESC]`.
         * @minLength 1
         */
        orderBy?: string;
        /** Whether to send Skip-Count: true to speed up list responses. */
        skipCount?: boolean;
        /** Price IDs to return. */
        ids?: Array<string>;
        /** Related entities to include in each price. */
        include?: Array<"product">;
        /** Product IDs whose prices should be returned. */
        productIds?: Array<string>;
        /** Price statuses to return. */
        status?: Array<"active" | "archived">;
        /** Whether to return recurring prices. */
        recurring?: boolean;
        /** Billing interval unit. */
        billingCycleInterval?: "day" | "week" | "month" | "year";
        /**
         * Billing cycle frequency to filter by.
         * @minimum 1
         */
        billingCycleFrequency?: number;
        /** Paddle entity type. */
        type?: "standard" | "custom";
      };
      output: {
        /** A Paddle price entity. */
        data: Array<Record<string, unknown>>;
        /** Paddle response metadata, including pagination for list endpoints. */
        meta: Record<string, unknown>;
      };
    };
    /** List Paddle products with optional filtering, pagination, and price inclusion. */
    "paddle.list_products": {
      input: {
        /**
         * Paddle ID cursor returned in a previous list response.
         * @minLength 1
         */
        after?: string;
        /**
         * Maximum number of entities to request from Paddle.
         * @minimum 1
         * @maximum 200
         */
        perPage?: number;
        /**
         * Paddle order_by expression such as `id[DESC]`.
         * @minLength 1
         */
        orderBy?: string;
        /** Whether to send Skip-Count: true to speed up list responses. */
        skipCount?: boolean;
        /** Product IDs to return. */
        ids?: Array<string>;
        /** Related entities to include in each product. */
        include?: Array<"prices">;
        /** Product statuses to return. */
        status?: Array<"active" | "archived">;
        /** Product tax categories to return. */
        taxCategory?: Array<"digital-goods" | "ebooks" | "implementation-services" | "professional-services" | "saas" | "software-programming-services" | "standard" | "training-services" | "website-hosting">;
        /** Paddle entity type. */
        type?: "standard" | "custom";
      };
      output: {
        /** A Paddle product entity. */
        data: Array<Record<string, unknown>>;
        /** Paddle response metadata, including pagination for list endpoints. */
        meta: Record<string, unknown>;
      };
    };
    /** Update a Paddle customer, including archiving or reactivating it through status. */
    "paddle.update_customer": {
      input: {
        /**
         * Paddle customer ID, prefixed with `ctm_`.
         * @minLength 1
         */
        id: string;
        /**
         * Full name for this customer.
         * @minLength 1
         */
        name?: string;
        /**
         * Email address for this customer.
         * @minLength 1
         * @format email
         */
        email?: string;
        /**
         * IETF BCP 47 locale tag for this customer.
         * @minLength 1
         */
        locale?: string;
        /** Custom data attached to a Paddle entity. */
        custom_data?: Record<string, unknown> | null;
        /** Paddle entity status. */
        status?: "active" | "archived";
      };
      output: {
        /** Raw Paddle entity returned by the API. */
        customer: Record<string, unknown> | null;
        /** Paddle response metadata when returned by the API. */
        meta: Record<string, unknown>;
      };
    };
    /** Update a Paddle price, including archiving or reactivating it through status. */
    "paddle.update_price": {
      input: {
        /**
         * Paddle price ID, prefixed with `pri_`.
         * @minLength 1
         */
        id: string;
        /**
         * Paddle product ID, prefixed with `pro_`.
         * @minLength 1
         */
        product_id?: string;
        /**
         * Internal description for this price.
         * @minLength 1
         */
        description?: string;
        /** Money amount in Paddle's lowest currency denomination. */
        unit_price?: {
          /**
           * Amount in the lowest denomination for the currency, represented as a string.
           * @minLength 1
           */
          amount: string;
          /**
           * Three-letter ISO 4217 currency code.
           * @minLength 1
           */
          currency_code: string;
        };
        /** Paddle entity type. */
        type?: "standard" | "custom";
        /**
         * Name of this price.
         * @minLength 1
         */
        name?: string;
        /** Recurring billing cycle for a Paddle price, or null for a one-time price. */
        billing_cycle?: {
          /** Billing interval unit. */
          interval: "day" | "week" | "month" | "year";
          /**
           * Number of intervals in the billing cycle.
           * @minimum 1
           */
          frequency: number;
        } | null;
        /** Trial period configuration for a Paddle price. */
        trial_period?: {
          /** Billing interval unit. */
          interval: "day" | "week" | "month" | "year";
          /**
           * Number of intervals in the trial period.
           * @minimum 1
           */
          frequency: number;
          /** Whether a payment method is required for the trial. */
          requires_payment_method?: boolean;
          /** Money amount in Paddle's lowest currency denomination. */
          unit_price?: {
            /**
             * Amount in the lowest denomination for the currency, represented as a string.
             * @minLength 1
             */
            amount: string;
            /**
             * Three-letter ISO 4217 currency code.
             * @minLength 1
             */
            currency_code: string;
          } | null;
        } | null;
        /** How Paddle should calculate tax for this price. */
        tax_mode?: "account_setting" | "external" | "internal" | "location";
        /** Quantity limits for the related product at this price. */
        quantity?: {
          /**
           * Minimum quantity that can be purchased.
           * @minimum 1
           */
          minimum?: number;
          /**
           * Maximum quantity that can be purchased.
           * @minimum 1
           */
          maximum?: number;
        };
        /** Custom data attached to a Paddle entity. */
        custom_data?: Record<string, unknown> | null;
        /** Paddle entity status. */
        status?: "active" | "archived";
      };
      output: {
        /** Raw Paddle entity returned by the API. */
        price: Record<string, unknown> | null;
        /** Paddle response metadata when returned by the API. */
        meta: Record<string, unknown>;
      };
    };
    /** Update a Paddle product, including archiving or reactivating it through status. */
    "paddle.update_product": {
      input: {
        /**
         * Paddle product ID, prefixed with `pro_`.
         * @minLength 1
         */
        id: string;
        /**
         * Name of the product.
         * @minLength 1
         */
        name?: string;
        /**
         * Short description for the product.
         * @minLength 1
         */
        description?: string;
        /** Paddle product tax category. */
        tax_category?: "digital-goods" | "ebooks" | "implementation-services" | "professional-services" | "saas" | "software-programming-services" | "standard" | "training-services" | "website-hosting";
        /** Paddle entity type. */
        type?: "standard" | "custom";
        /**
         * Image URL for this product.
         * @format uri
         */
        image_url?: string;
        /** Custom data attached to a Paddle entity. */
        custom_data?: Record<string, unknown> | null;
        /** Paddle entity status. */
        status?: "active" | "archived";
      };
      output: {
        /** Raw Paddle entity returned by the API. */
        product: Record<string, unknown> | null;
        /** Paddle response metadata when returned by the API. */
        meta: Record<string, unknown>;
      };
    };
  }
}
