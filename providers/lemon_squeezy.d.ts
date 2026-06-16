import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Lemon Squeezy customer for the specified store. */
    "lemon_squeezy.create_customer": {
      input: {
        /**
         * The Lemon Squeezy store ID.
         * @exclusiveMinimum 0
         */
        storeId: number;
        /**
         * Full name of the customer.
         * @minLength 1
         */
        name: string;
        /**
         * Email address of the customer.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email: string;
        /**
         * City of the customer.
         * @minLength 1
         */
        city?: string;
        /**
         * Region or state of the customer.
         * @minLength 1
         */
        region?: string;
        /**
         * ISO 3166-1 alpha-2 country code of the customer.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
      };
      output: {
        /** The created Lemon Squeezy customer. */
        customer: {
          /** Unique customer identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "customers";
          /** Customer attributes. */
          attributes: {
            /** Store ID that owns the customer. */
            store_id: number;
            /**
             * Customer email address.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** Email marketing status of the customer. */
            status: string;
            /** Total revenue in the smallest currency unit. */
            total_revenue_currency: number;
            /** Monthly recurring revenue in the smallest currency unit. */
            mrr: number;
            /** Human-readable customer status. */
            status_formatted: string;
            /** Formatted total revenue string. */
            total_revenue_currency_formatted: string;
            /** Formatted monthly recurring revenue string. */
            mrr_formatted: string;
            /** Customer-facing URLs such as the customer portal. */
            urls: Record<string, unknown>;
            /** Timestamp when the customer was created. */
            created_at: string;
            /** Timestamp when the customer was last updated. */
            updated_at: string;
            /** Whether the customer belongs to test mode. */
            test_mode: boolean;
            /** Customer full name. */
            name?: string | null;
            /** Customer city. */
            city?: string | null;
            /** Customer region or state. */
            region?: string | null;
            /** Customer country code. */
            country?: string | null;
            /** Customer country name. */
            country_formatted?: string | null;
            [key: string]: unknown;
          };
          /** Related resources attached to the customer. */
          relationships: Record<string, unknown>;
          /** Links for the customer resource. */
          links: {
            /** Canonical API URL of the customer resource. */
            self: string;
          };
        };
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Lemon Squeezy webhook for the specified store. */
    "lemon_squeezy.create_webhook": {
      input: {
        /**
         * The Lemon Squeezy store ID.
         * @exclusiveMinimum 0
         */
        storeId: number;
        /**
         * Webhook endpoint URL.
         * @format uri
         */
        url: string;
        /**
         * Webhook events that should trigger deliveries.
         * @minItems 1
         */
        events: Array<"customer_updated" | "order_created" | "order_refunded" | "subscription_created" | "subscription_updated" | "subscription_cancelled" | "subscription_resumed" | "subscription_expired" | "subscription_paused" | "subscription_unpaused" | "subscription_payment_success" | "subscription_payment_failed" | "subscription_payment_recovered" | "subscription_payment_refunded" | "license_key_created" | "license_key_updated" | "affiliate_activated">;
        /**
         * Signing secret used to verify webhook deliveries.
         * @minLength 1
         */
        secret: string;
      };
      output: {
        /** The created Lemon Squeezy webhook. */
        webhook: {
          /** Unique webhook identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "webhooks";
          /** Webhook attributes. */
          attributes: {
            /** Store ID that owns the webhook. */
            store_id: number;
            /** Endpoint URL that receives webhook events. */
            url: string;
            /** Subscribed webhook events. */
            events: Array<string>;
            /** Timestamp when Lemon Squeezy last delivered this webhook. */
            last_sent_at?: string | null;
            /** Timestamp when the webhook was created. */
            created_at: string;
            /** Timestamp when the webhook was last updated. */
            updated_at: string;
            /** Whether the webhook belongs to test mode. */
            test_mode: boolean;
            [key: string]: unknown;
          };
          /** Related resources attached to the webhook. */
          relationships: Record<string, unknown>;
          /** Links for the webhook resource. */
          links: {
            /** Canonical API URL of the webhook resource. */
            self: string;
          };
        };
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Lemon Squeezy webhook by ID. The returned acknowledgement is generated by the connector because Lemon Squeezy responds with 204 No Content. */
    "lemon_squeezy.delete_webhook": {
      input: {
        /**
         * The Lemon Squeezy webhook ID.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** Connector-generated acknowledgement that the delete request completed successfully. */
        success: boolean;
        /** Connector-generated deletion acknowledgement because Lemon Squeezy returns 204 No Content. */
        message: string;
      };
    };
    /** List Lemon Squeezy customers with optional store or email filtering. */
    "lemon_squeezy.list_customers": {
      input: {
        /**
         * The Lemon Squeezy store ID.
         * @exclusiveMinimum 0
         */
        storeId?: number;
        /**
         * Only return resources for this email.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /**
         * Page number to return.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Customers returned by Lemon Squeezy. */
        customers: Array<{
          /** Unique customer identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "customers";
          /** Customer attributes. */
          attributes: {
            /** Store ID that owns the customer. */
            store_id: number;
            /**
             * Customer email address.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** Email marketing status of the customer. */
            status: string;
            /** Total revenue in the smallest currency unit. */
            total_revenue_currency: number;
            /** Monthly recurring revenue in the smallest currency unit. */
            mrr: number;
            /** Human-readable customer status. */
            status_formatted: string;
            /** Formatted total revenue string. */
            total_revenue_currency_formatted: string;
            /** Formatted monthly recurring revenue string. */
            mrr_formatted: string;
            /** Customer-facing URLs such as the customer portal. */
            urls: Record<string, unknown>;
            /** Timestamp when the customer was created. */
            created_at: string;
            /** Timestamp when the customer was last updated. */
            updated_at: string;
            /** Whether the customer belongs to test mode. */
            test_mode: boolean;
            /** Customer full name. */
            name?: string | null;
            /** Customer city. */
            city?: string | null;
            /** Customer region or state. */
            region?: string | null;
            /** Customer country code. */
            country?: string | null;
            /** Customer country name. */
            country_formatted?: string | null;
            [key: string]: unknown;
          };
          /** Related resources attached to the customer. */
          relationships: Record<string, unknown>;
          /** Links for the customer resource. */
          links: {
            /** Canonical API URL of the customer resource. */
            self: string;
          };
        }>;
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Lemon Squeezy orders with optional store, email, or order-number filtering. */
    "lemon_squeezy.list_orders": {
      input: {
        /**
         * The Lemon Squeezy store ID.
         * @exclusiveMinimum 0
         */
        storeId?: number;
        /**
         * Only return resources whose user_email matches this address.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        userEmail?: string;
        /**
         * Only return the order with this order number.
         * @exclusiveMinimum 0
         */
        orderNumber?: number;
        /**
         * Page number to return.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Orders returned by Lemon Squeezy. */
        orders: Array<{
          /** Unique order identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "orders";
          /** Order attributes. */
          attributes: {
            /** Store ID that owns the order. */
            store_id: number;
            /** Customer ID attached to the order. */
            customer_id?: number | null;
            /** Human-readable order identifier. */
            identifier: string;
            /** Store-local order number. */
            order_number: number;
            /** Customer name on the order. */
            user_name: string;
            /**
             * Customer email on the order.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            user_email: string;
            /** ISO 4217 currency code. */
            currency: string;
            /** Currency conversion rate applied to the order. */
            currency_rate: string;
            /** Subtotal in the smallest currency unit. */
            subtotal: number;
            /** Setup fee in the smallest currency unit. */
            setup_fee: number;
            /** Discount total in the smallest currency unit. */
            discount_total: number;
            /** Tax amount in the smallest currency unit. */
            tax: number;
            /** Order total in the smallest currency unit. */
            total: number;
            /** Subtotal converted to USD cents. */
            subtotal_usd: number;
            /** Setup fee converted to USD cents. */
            setup_fee_usd: number;
            /** Discount total converted to USD cents. */
            discount_total_usd: number;
            /** Tax converted to USD cents. */
            tax_usd: number;
            /** Order total converted to USD cents. */
            total_usd: number;
            /** Human-readable tax label. */
            tax_name?: string | null;
            /** Tax rate percentage. */
            tax_rate?: string | null;
            /** Whether tax is inclusive. */
            tax_inclusive: boolean;
            /** Order status. */
            status: string;
            /** Human-readable order status. */
            status_formatted: string;
            /** Whether the order has been refunded. */
            refunded: boolean;
            /** Timestamp when the order was refunded. Null when the value is not set. */
            refunded_at: string | null;
            /** Formatted subtotal string. */
            subtotal_formatted: string;
            /** Formatted setup fee string. */
            setup_fee_formatted: string;
            /** Formatted discount total string. */
            discount_total_formatted: string;
            /** Formatted tax string. */
            tax_formatted: string;
            /** Formatted total string. */
            total_formatted: string;
            /** First order item summary. */
            first_order_item: Record<string, unknown>;
            /** Order URLs such as the receipt URL. */
            urls: Record<string, unknown>;
            /** Timestamp when the order was created. */
            created_at: string;
            /** Timestamp when the order was last updated. */
            updated_at: string;
            /** Whether the order belongs to test mode. */
            test_mode: boolean;
            [key: string]: unknown;
          };
          /** Related resources attached to the order. */
          relationships: Record<string, unknown>;
          /** Links for the order resource. */
          links: {
            /** Canonical API URL of the order resource. */
            self: string;
          };
        }>;
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Lemon Squeezy products with optional store filtering and pagination. */
    "lemon_squeezy.list_products": {
      input: {
        /**
         * The Lemon Squeezy store ID.
         * @exclusiveMinimum 0
         */
        storeId?: number;
        /**
         * Page number to return.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Products returned by Lemon Squeezy. */
        products: Array<{
          /** Unique product identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "products";
          /** Product attributes. */
          attributes: {
            /** Store ID that owns the product. */
            store_id: number;
            /** Product name. */
            name: string;
            /** URL-friendly product slug. */
            slug: string;
            /** HTML product description. */
            description: string;
            /** Product publication status. */
            status: string;
            /** Human-readable product status. */
            status_formatted: string;
            /** Base price in the smallest currency unit. */
            price: number;
            /** Human-readable base price. */
            price_formatted: string;
            /** Whether the product uses pay-what-you-want pricing. */
            pay_what_you_want: boolean;
            /** Direct checkout URL for the product. */
            buy_now_url: string;
            /** Minimum variant price in the smallest currency unit. */
            from_price?: number;
            /** Maximum variant price in the smallest currency unit. */
            to_price?: number;
            /** Small product thumbnail URL. */
            thumb_url?: string;
            /** Large product thumbnail URL. */
            large_thumb_url?: string;
            /** Timestamp when the product was created. */
            created_at: string;
            /** Timestamp when the product was last updated. */
            updated_at: string;
            /** Whether the product belongs to test mode. */
            test_mode: boolean;
            [key: string]: unknown;
          };
          /** Related resources attached to the product. */
          relationships: Record<string, unknown>;
          /** Links for the product resource. */
          links: {
            /** Canonical API URL of the product resource. */
            self: string;
          };
        }>;
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** List stores that belong to the authenticated Lemon Squeezy account. */
    "lemon_squeezy.list_stores": {
      input: Record<string, never>;
      output: {
        /** Stores returned by Lemon Squeezy. */
        stores: Array<{
          /** Unique store identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "stores";
          /** Store attributes. */
          attributes: {
            /** Store name. */
            name: string;
            /** URL-friendly store slug. */
            slug: string;
            /** Store domain. */
            domain: string;
            /** Canonical store URL. */
            url: string;
            /** Avatar image URL of the store. */
            avatar_url: string;
            /** Store plan identifier. */
            plan: string;
            /** ISO 3166-1 alpha-2 country code. */
            country: string;
            /** Human-readable country name. */
            country_nicename: string;
            /** ISO 4217 currency code. */
            currency: string;
            /** Total sales count for the store. */
            total_sales: number;
            /** Total revenue in the smallest currency unit. */
            total_revenue: number;
            /** Sales count during the last 30 days. */
            thirty_day_sales: number;
            /** Revenue during the last 30 days in the smallest currency unit. */
            thirty_day_revenue: number;
            /** Timestamp when the store was created. */
            created_at: string;
            /** Timestamp when the store was last updated. */
            updated_at: string;
            [key: string]: unknown;
          };
          /** Related resources attached to the store. */
          relationships?: Record<string, unknown>;
          /** Links for the store resource. */
          links: {
            /** Canonical API URL of the store resource. */
            self: string;
          };
        }>;
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Lemon Squeezy subscriptions with optional filters and pagination. */
    "lemon_squeezy.list_subscriptions": {
      input: {
        /**
         * The Lemon Squeezy store ID.
         * @exclusiveMinimum 0
         */
        storeId?: number;
        /**
         * The Lemon Squeezy order ID.
         * @exclusiveMinimum 0
         */
        orderId?: number;
        /**
         * The Lemon Squeezy order item ID.
         * @exclusiveMinimum 0
         */
        orderItemId?: number;
        /**
         * The Lemon Squeezy product ID.
         * @exclusiveMinimum 0
         */
        productId?: number;
        /**
         * The Lemon Squeezy variant ID.
         * @exclusiveMinimum 0
         */
        variantId?: number;
        /**
         * Only return resources whose user_email matches this address.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        userEmail?: string;
        /**
         * Only return subscriptions with this status.
         * @minLength 1
         */
        status?: string;
        /**
         * Page number to return.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Subscriptions returned by Lemon Squeezy. */
        subscriptions: Array<{
          /** Unique subscription identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "subscriptions";
          /** Subscription attributes. */
          attributes: {
            /** Store ID that owns the subscription. */
            store_id: number;
            /** Customer ID attached to the subscription. */
            customer_id: number;
            /** Order ID that created the subscription. */
            order_id: number;
            /** Order item ID that created the subscription. */
            order_item_id: number;
            /** Product ID attached to the subscription. */
            product_id: number;
            /** Variant ID attached to the subscription. */
            variant_id: number;
            /** Product name attached to the subscription. */
            product_name: string;
            /** Variant name attached to the subscription. */
            variant_name: string;
            /** Subscriber name. */
            user_name: string;
            /**
             * Subscriber email address.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            user_email: string;
            /** Subscription status. */
            status: string;
            /** Human-readable subscription status. */
            status_formatted: string;
            /** Whether the subscription is cancelled. */
            cancelled: boolean;
            /** Billing anchor day for the subscription. */
            billing_anchor: number;
            /** First subscription item summary. */
            first_subscription_item: Record<string, unknown>;
            /** Customer-facing subscription URLs. */
            urls: Record<string, unknown>;
            /** Timestamp when the subscription renews. Null when the value is not set. */
            renews_at: string | null;
            /** Timestamp when the subscription ends. Null when the value is not set. */
            ends_at: string | null;
            /** Timestamp when the trial ends. Null when the value is not set. */
            trial_ends_at: string | null;
            /** Timestamp when the subscription was created. */
            created_at: string;
            /** Timestamp when the subscription was last updated. */
            updated_at: string;
            /** Whether the subscription belongs to test mode. */
            test_mode: boolean;
            /** Pause metadata when the subscription is paused. */
            pause?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Related resources attached to the subscription. */
          relationships: Record<string, unknown>;
          /** Links for the subscription resource. */
          links: {
            /** Canonical API URL of the subscription resource. */
            self: string;
          };
        }>;
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Lemon Squeezy variants with optional product filtering and pagination. */
    "lemon_squeezy.list_variants": {
      input: {
        /**
         * The Lemon Squeezy product ID.
         * @exclusiveMinimum 0
         */
        productId?: number;
        /** Only return variants with this status. */
        status?: "pending" | "draft" | "published";
        /**
         * Page number to return.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Variants returned by Lemon Squeezy. */
        variants: Array<{
          /** Unique variant identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "variants";
          /** Variant attributes. */
          attributes: {
            /** Product ID that owns the variant. */
            product_id: number;
            /** Variant name. */
            name: string;
            /** URL-friendly variant slug. */
            slug: string;
            /** Links attached to the variant. */
            links: Array<{
              /** Display title of the variant link. */
              title: string;
              /** Variant link URL. */
              url: string;
            }>;
            /** Variant price in the smallest currency unit. */
            price: number;
            /** Whether the variant is subscription-based. */
            is_subscription: boolean;
            /** Whether the variant includes a free trial. */
            has_free_trial: boolean;
            /** Whether the variant uses pay-what-you-want pricing. */
            pay_what_you_want: boolean;
            /** Minimum allowed price in the smallest currency unit. */
            min_price: number;
            /** Suggested pay-what-you-want price. */
            suggested_price?: number | null;
            /** Whether purchases generate license keys. */
            has_license_keys: boolean;
            /** Maximum allowed activations for generated license keys. */
            license_activation_limit?: number | null;
            /** Whether license activations are unlimited. */
            is_license_limit_unlimited: boolean;
            /** License length value when the license expires. */
            license_length_value?: number | null;
            /** License length unit when the license expires. */
            license_length_unit?: string | null;
            /** Whether generated licenses never expire. */
            is_license_length_unlimited: boolean;
            /** Variant sort order. */
            sort: number;
            /** Variant publication status. */
            status: string;
            /** Human-readable variant status. */
            status_formatted: string;
            /** Subscription interval unit when applicable. */
            interval?: string;
            /** Subscription interval count when applicable. */
            interval_count?: number;
            /** Timestamp when the variant was created. */
            created_at: string;
            /** Timestamp when the variant was last updated. */
            updated_at: string;
            /** Whether the variant belongs to test mode. */
            test_mode: boolean;
            [key: string]: unknown;
          };
          /** Related resources attached to the variant. */
          relationships: Record<string, unknown>;
          /** Links for the variant resource. */
          links: {
            /** Canonical API URL of the variant resource. */
            self: string;
          };
        }>;
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Lemon Squeezy webhooks with optional store filtering and pagination. */
    "lemon_squeezy.list_webhooks": {
      input: {
        /**
         * The Lemon Squeezy store ID.
         * @exclusiveMinimum 0
         */
        storeId?: number;
        /**
         * Page number to return.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Number of items to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** Webhooks returned by Lemon Squeezy. */
        webhooks: Array<{
          /** Unique webhook identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "webhooks";
          /** Webhook attributes. */
          attributes: {
            /** Store ID that owns the webhook. */
            store_id: number;
            /** Endpoint URL that receives webhook events. */
            url: string;
            /** Subscribed webhook events. */
            events: Array<string>;
            /** Timestamp when Lemon Squeezy last delivered this webhook. */
            last_sent_at?: string | null;
            /** Timestamp when the webhook was created. */
            created_at: string;
            /** Timestamp when the webhook was last updated. */
            updated_at: string;
            /** Whether the webhook belongs to test mode. */
            test_mode: boolean;
            [key: string]: unknown;
          };
          /** Related resources attached to the webhook. */
          relationships: Record<string, unknown>;
          /** Links for the webhook resource. */
          links: {
            /** Canonical API URL of the webhook resource. */
            self: string;
          };
        }>;
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the currently authenticated Lemon Squeezy user. */
    "lemon_squeezy.retrieve_authenticated_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated Lemon Squeezy user. */
        user: {
          /** Unique user identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "users";
          /** User attributes. */
          attributes: {
            /** Display name of the authenticated user. */
            name: string;
            /**
             * Email address of the authenticated user.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** Hex color assigned by Lemon Squeezy. */
            color: string;
            /** Avatar image URL for the authenticated user. */
            avatar_url: string;
            /** Whether the authenticated user uploaded a custom avatar. */
            has_custom_avatar: boolean;
            /** Timestamp when the user was created. */
            createdAt: string;
            /** Timestamp when the user was last updated. */
            updatedAt: string;
          };
          /** Links for the user resource. */
          links: {
            /** Canonical API URL of the user resource. */
            self: string;
          };
        };
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Lemon Squeezy customer by ID. */
    "lemon_squeezy.retrieve_customer": {
      input: {
        /**
         * The Lemon Squeezy customer ID.
         * @minLength 1
         */
        customerId: string;
      };
      output: {
        /** The requested Lemon Squeezy customer. */
        customer: {
          /** Unique customer identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "customers";
          /** Customer attributes. */
          attributes: {
            /** Store ID that owns the customer. */
            store_id: number;
            /**
             * Customer email address.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** Email marketing status of the customer. */
            status: string;
            /** Total revenue in the smallest currency unit. */
            total_revenue_currency: number;
            /** Monthly recurring revenue in the smallest currency unit. */
            mrr: number;
            /** Human-readable customer status. */
            status_formatted: string;
            /** Formatted total revenue string. */
            total_revenue_currency_formatted: string;
            /** Formatted monthly recurring revenue string. */
            mrr_formatted: string;
            /** Customer-facing URLs such as the customer portal. */
            urls: Record<string, unknown>;
            /** Timestamp when the customer was created. */
            created_at: string;
            /** Timestamp when the customer was last updated. */
            updated_at: string;
            /** Whether the customer belongs to test mode. */
            test_mode: boolean;
            /** Customer full name. */
            name?: string | null;
            /** Customer city. */
            city?: string | null;
            /** Customer region or state. */
            region?: string | null;
            /** Customer country code. */
            country?: string | null;
            /** Customer country name. */
            country_formatted?: string | null;
            [key: string]: unknown;
          };
          /** Related resources attached to the customer. */
          relationships: Record<string, unknown>;
          /** Links for the customer resource. */
          links: {
            /** Canonical API URL of the customer resource. */
            self: string;
          };
        };
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Lemon Squeezy store by ID. */
    "lemon_squeezy.retrieve_store": {
      input: {
        /**
         * The Lemon Squeezy store ID.
         * @exclusiveMinimum 0
         */
        storeId: number;
      };
      output: {
        /** The requested Lemon Squeezy store. */
        store: {
          /** Unique store identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "stores";
          /** Store attributes. */
          attributes: {
            /** Store name. */
            name: string;
            /** URL-friendly store slug. */
            slug: string;
            /** Store domain. */
            domain: string;
            /** Canonical store URL. */
            url: string;
            /** Avatar image URL of the store. */
            avatar_url: string;
            /** Store plan identifier. */
            plan: string;
            /** ISO 3166-1 alpha-2 country code. */
            country: string;
            /** Human-readable country name. */
            country_nicename: string;
            /** ISO 4217 currency code. */
            currency: string;
            /** Total sales count for the store. */
            total_sales: number;
            /** Total revenue in the smallest currency unit. */
            total_revenue: number;
            /** Sales count during the last 30 days. */
            thirty_day_sales: number;
            /** Revenue during the last 30 days in the smallest currency unit. */
            thirty_day_revenue: number;
            /** Timestamp when the store was created. */
            created_at: string;
            /** Timestamp when the store was last updated. */
            updated_at: string;
            [key: string]: unknown;
          };
          /** Related resources attached to the store. */
          relationships?: Record<string, unknown>;
          /** Links for the store resource. */
          links: {
            /** Canonical API URL of the store resource. */
            self: string;
          };
        };
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a single Lemon Squeezy webhook by ID. */
    "lemon_squeezy.retrieve_webhook": {
      input: {
        /**
         * The Lemon Squeezy webhook ID.
         * @minLength 1
         */
        webhookId: string;
      };
      output: {
        /** The requested Lemon Squeezy webhook. */
        webhook: {
          /** Unique webhook identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "webhooks";
          /** Webhook attributes. */
          attributes: {
            /** Store ID that owns the webhook. */
            store_id: number;
            /** Endpoint URL that receives webhook events. */
            url: string;
            /** Subscribed webhook events. */
            events: Array<string>;
            /** Timestamp when Lemon Squeezy last delivered this webhook. */
            last_sent_at?: string | null;
            /** Timestamp when the webhook was created. */
            created_at: string;
            /** Timestamp when the webhook was last updated. */
            updated_at: string;
            /** Whether the webhook belongs to test mode. */
            test_mode: boolean;
            [key: string]: unknown;
          };
          /** Related resources attached to the webhook. */
          relationships: Record<string, unknown>;
          /** Links for the webhook resource. */
          links: {
            /** Canonical API URL of the webhook resource. */
            self: string;
          };
        };
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Lemon Squeezy customer by ID. */
    "lemon_squeezy.update_customer": {
      input: {
        /**
         * The Lemon Squeezy customer ID.
         * @minLength 1
         */
        customerId: string;
        /**
         * Updated full name of the customer.
         * @minLength 1
         */
        name?: string;
        /**
         * Updated email address of the customer.
         * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
         * @format email
         */
        email?: string;
        /**
         * Updated city of the customer.
         * @minLength 1
         */
        city?: string;
        /**
         * Updated region or state of the customer.
         * @minLength 1
         */
        region?: string;
        /**
         * Updated ISO 3166-1 alpha-2 country code of the customer.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
      };
      output: {
        /** The updated Lemon Squeezy customer. */
        customer: {
          /** Unique customer identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "customers";
          /** Customer attributes. */
          attributes: {
            /** Store ID that owns the customer. */
            store_id: number;
            /**
             * Customer email address.
             * @pattern ^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$
             * @format email
             */
            email: string;
            /** Email marketing status of the customer. */
            status: string;
            /** Total revenue in the smallest currency unit. */
            total_revenue_currency: number;
            /** Monthly recurring revenue in the smallest currency unit. */
            mrr: number;
            /** Human-readable customer status. */
            status_formatted: string;
            /** Formatted total revenue string. */
            total_revenue_currency_formatted: string;
            /** Formatted monthly recurring revenue string. */
            mrr_formatted: string;
            /** Customer-facing URLs such as the customer portal. */
            urls: Record<string, unknown>;
            /** Timestamp when the customer was created. */
            created_at: string;
            /** Timestamp when the customer was last updated. */
            updated_at: string;
            /** Whether the customer belongs to test mode. */
            test_mode: boolean;
            /** Customer full name. */
            name?: string | null;
            /** Customer city. */
            city?: string | null;
            /** Customer region or state. */
            region?: string | null;
            /** Customer country code. */
            country?: string | null;
            /** Customer country name. */
            country_formatted?: string | null;
            [key: string]: unknown;
          };
          /** Related resources attached to the customer. */
          relationships: Record<string, unknown>;
          /** Links for the customer resource. */
          links: {
            /** Canonical API URL of the customer resource. */
            self: string;
          };
        };
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Lemon Squeezy webhook by ID. */
    "lemon_squeezy.update_webhook": {
      input: {
        /**
         * The Lemon Squeezy webhook ID.
         * @minLength 1
         */
        webhookId: string;
        /**
         * The Lemon Squeezy store ID.
         * @exclusiveMinimum 0
         */
        storeId?: number;
        /**
         * Updated webhook endpoint URL.
         * @format uri
         */
        url?: string;
        /**
         * Updated webhook events.
         * @minItems 1
         */
        events?: Array<"customer_updated" | "order_created" | "order_refunded" | "subscription_created" | "subscription_updated" | "subscription_cancelled" | "subscription_resumed" | "subscription_expired" | "subscription_paused" | "subscription_unpaused" | "subscription_payment_success" | "subscription_payment_failed" | "subscription_payment_recovered" | "subscription_payment_refunded" | "license_key_created" | "license_key_updated" | "affiliate_activated">;
        /**
         * Updated signing secret for webhook deliveries.
         * @minLength 1
         */
        secret?: string;
      };
      output: {
        /** The updated Lemon Squeezy webhook. */
        webhook: {
          /** Unique webhook identifier. */
          id: string;
          /** JSON:API resource type. */
          type: "webhooks";
          /** Webhook attributes. */
          attributes: {
            /** Store ID that owns the webhook. */
            store_id: number;
            /** Endpoint URL that receives webhook events. */
            url: string;
            /** Subscribed webhook events. */
            events: Array<string>;
            /** Timestamp when Lemon Squeezy last delivered this webhook. */
            last_sent_at?: string | null;
            /** Timestamp when the webhook was created. */
            created_at: string;
            /** Timestamp when the webhook was last updated. */
            updated_at: string;
            /** Whether the webhook belongs to test mode. */
            test_mode: boolean;
            [key: string]: unknown;
          };
          /** Related resources attached to the webhook. */
          relationships: Record<string, unknown>;
          /** Links for the webhook resource. */
          links: {
            /** Canonical API URL of the webhook resource. */
            self: string;
          };
        };
        /** Top-level metadata returned by Lemon Squeezy. */
        meta?: {
          /** Pagination metadata when the response is paginated. */
          page?: {
            /** Current page number. */
            currentPage: number;
            /** First item index on the current page. */
            from?: number | null;
            /** Last page number. */
            lastPage: number;
            /** Number of items returned per page. */
            perPage: number;
            /** Last item index on the current page. */
            to?: number | null;
            /** Total number of items available. */
            total: number;
            [key: string]: unknown;
          };
          /** Whether Lemon Squeezy evaluated the request in test mode. */
          test_mode?: boolean;
          [key: string]: unknown;
        };
        /** Top-level document links. */
        links?: Record<string, string>;
        /** JSON:API metadata returned by Lemon Squeezy. */
        jsonapi?: {
          /** JSON:API version reported by Lemon Squeezy. */
          version: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
