import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a category in Jumpseller. */
    "jumpseller.create_category": {
      input: {
        /** Category fields accepted by the Jumpseller category create endpoint. */
        category: {
          /**
           * Name of the category.
           * @minLength 1
           */
          name: string;
          /** Unique identifier of the parent category. */
          parent_id?: number;
          /** Default order of products in the category. */
          default_order?: "position-asc" | "name-asc" | "name-desc" | "price-asc" | "price-desc" | "date-desc";
          /** Description of the category. */
          description?: string;
          /** Whether filters are visible in the category page. */
          filters_visibility?: boolean;
          /** Whether the category is recommendable. */
          not_recommendable?: boolean;
          /** Category unique URL path. */
          permalink?: string;
          /** SEO page title for the category page. */
          page_title?: string;
          /** SEO meta description for the category page. */
          meta_description?: string;
          /** Products to associate with the category. */
          products?: Array<{
            /** Unique identifier of the product. */
            id: number;
          }>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        category: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Create a customer in Jumpseller. */
    "jumpseller.create_customer": {
      input: {
        /** Customer fields accepted by the Jumpseller customer create endpoint. */
        customer: {
          /**
           * Email of the customer.
           * @format email
           */
          email: string;
          /** Phone of the customer. */
          phone?: string;
          /** Password for the customer account. */
          password?: string;
          /** Status of the customer. */
          status?: "approved" | "pending" | "disabled";
          /** Shipping address fields for the customer. */
          shipping_address?: Record<string, unknown>;
          /** Billing address fields for the customer. */
          billing_address?: Record<string, unknown>;
          /** Customer category ids assigned to the customer. */
          customer_category?: Array<number>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        customer: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Create a product in Jumpseller. */
    "jumpseller.create_product": {
      input: {
        /** Product fields accepted by Jumpseller product create and update endpoints. */
        product: {
          /**
           * Name of the product.
           * @minLength 1
           */
          name: string;
          /** Price of the product. */
          price: number;
          /** Description of the product. */
          description?: string;
          /** SEO title of the product. */
          page_title?: string;
          /** SEO meta description of the product. */
          meta_description?: string;
          /** Type of the product. */
          type?: "physical" | "digital" | "gift_card";
          /** Number of days a gift card remains valid after purchase. */
          days_to_expire?: number;
          /** Weight of the product. */
          weight?: number;
          /** Quantity in stock for the product. */
          stock?: number;
          /** Whether the product has unlimited stock. */
          stock_unlimited?: boolean;
          /** Low stock threshold quantity. */
          stock_threshold?: number;
          /** Whether low stock notifications are enabled. */
          stock_notification?: boolean;
          /** Whether back-in-stock email alerts are enabled. */
          back_in_stock_enabled?: boolean;
          /** Cost per item of the product. */
          cost_per_item?: number;
          /** Sale comparison price, which should be higher than price. */
          compare_at_price?: number;
          /** Minimum units required to purchase the product. */
          minimum_quantity?: number;
          /** Maximum units that can be purchased per order. */
          maximum_quantity?: number;
          /** Stock Keeping Unit of the product. */
          sku?: string;
          /** Barcode of the product. */
          barcode?: string;
          /** Human-readable label for the Google product taxonomy category. */
          google_product_category_text?: string;
          /** Whether the product can be quoted. */
          quotable?: boolean;
          /** Whether the product is featured. */
          featured?: boolean;
          /** Whether shipping is required for the product. */
          shipping_required?: boolean;
          /** Status of the product. */
          status?: "available" | "not-available" | "disabled";
          /** Format of the product package. */
          package_format?: "box" | "cylinder";
          /** Length of the product. */
          length?: number;
          /** Width of the product. */
          width?: number;
          /** Height of the product. */
          height?: number;
          /** Diameter of the product. */
          diameter?: number;
          /** Product unique URL path. */
          permalink?: string;
          /** Categories to associate with the product. */
          categories?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * The locale code of the translated Jumpseller content.
         * @minLength 1
         */
        locale?: string;
        /** The Jumpseller fields to return. */
        fields?: Array<string>;
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        product: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Retrieve a single category from Jumpseller. */
    "jumpseller.get_category": {
      input: {
        /**
         * The Jumpseller numeric resource id.
         * @exclusiveMinimum 0
         */
        id: number;
        /** The Jumpseller fields to return. */
        fields?: Array<string>;
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        category: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Retrieve a single customer from Jumpseller. */
    "jumpseller.get_customer": {
      input: {
        /**
         * The Jumpseller numeric resource id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        customer: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Retrieve a single order from Jumpseller. */
    "jumpseller.get_order": {
      input: {
        /**
         * The Jumpseller numeric resource id.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        order: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Retrieve a single product from Jumpseller. */
    "jumpseller.get_product": {
      input: {
        /**
         * The Jumpseller numeric resource id.
         * @exclusiveMinimum 0
         */
        id: number;
        /**
         * The locale code of the translated Jumpseller content.
         * @minLength 1
         */
        locale?: string;
        /** The Jumpseller fields to return. */
        fields?: Array<string>;
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        product: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Retrieve store information from Jumpseller. */
    "jumpseller.get_store_info": {
      input: {
        /** The Jumpseller fields to return. */
        fields?: Array<string>;
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        store: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Retrieve categories from Jumpseller. */
    "jumpseller.list_categories": {
      input: {
        /** The Jumpseller fields to return. */
        fields?: Array<string>;
      };
      output: {
        /** The unwrapped categories returned by Jumpseller. */
        categories: Array<Record<string, unknown>>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Retrieve customers from Jumpseller. */
    "jumpseller.list_customers": {
      input: {
        /**
         * The 1-based page number to request from Jumpseller.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to request from Jumpseller.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
        /** The Jumpseller fields to return. */
        fields?: Array<string>;
      };
      output: {
        /** The unwrapped customers returned by Jumpseller. */
        customers: Array<Record<string, unknown>>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Retrieve orders from Jumpseller. */
    "jumpseller.list_orders": {
      input: {
        /** Optional status endpoint to use for the order list. */
        status?: "abandoned" | "canceled" | "pending_payment" | "paid";
        /**
         * The 1-based page number to request from Jumpseller.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to request from Jumpseller.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
      };
      output: {
        /** The unwrapped orders returned by Jumpseller. */
        orders: Array<Record<string, unknown>>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Retrieve products from Jumpseller. */
    "jumpseller.list_products": {
      input: {
        /**
         * The 1-based page number to request from Jumpseller.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to request from Jumpseller.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
        /**
         * The locale code of the translated Jumpseller content.
         * @minLength 1
         */
        locale?: string;
        /** The Jumpseller fields to return. */
        fields?: Array<string>;
      };
      output: {
        /** The unwrapped products returned by Jumpseller. */
        products: Array<Record<string, unknown>>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Search customers in Jumpseller. */
    "jumpseller.search_customers": {
      input: {
        /**
         * Text to query for customers.
         * @minLength 1
         */
        query: string;
        /** Sort customers by creation date. */
        order?: "asc" | "desc";
        /**
         * The 1-based page number to request from Jumpseller.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to request from Jumpseller.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
      };
      output: {
        /** The unwrapped customers returned by Jumpseller. */
        customers: Array<Record<string, unknown>>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Search orders in Jumpseller. */
    "jumpseller.search_orders": {
      input: {
        /**
         * Text to query for orders.
         * @minLength 1
         */
        query: string;
        /**
         * The 1-based page number to request from Jumpseller.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to request from Jumpseller.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
      };
      output: {
        /** The unwrapped orders returned by Jumpseller. */
        orders: Array<Record<string, unknown>>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Search products in Jumpseller. */
    "jumpseller.search_products": {
      input: {
        /**
         * Text to query for products.
         * @minLength 1
         */
        query: string;
        /**
         * The 1-based page number to request from Jumpseller.
         * @exclusiveMinimum 0
         * @default 1
         */
        page?: number;
        /**
         * The number of records to request from Jumpseller.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
        /**
         * The locale code of the translated Jumpseller content.
         * @minLength 1
         */
        locale?: string;
        /** The Jumpseller fields to return. */
        fields?: Array<string>;
      };
      output: {
        /** The unwrapped products returned by Jumpseller. */
        products: Array<Record<string, unknown>>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Update a category in Jumpseller. */
    "jumpseller.update_category": {
      input: {
        /**
         * The Jumpseller numeric resource id.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Category fields accepted by the Jumpseller category update endpoint. */
        category: {
          /**
           * Name of the category.
           * @minLength 1
           */
          name?: string;
          /** Unique identifier of the parent category. */
          parent_id?: number;
          /** Default order of products in the category. */
          default_order?: "position-asc" | "name-asc" | "name-desc" | "price-asc" | "price-desc" | "date-desc";
          /** Description of the category. */
          description?: string;
          /** Whether filters are visible in the category page. */
          filters_visibility?: boolean;
          /** Whether the category is recommendable. */
          not_recommendable?: boolean;
          /** Category unique URL path. */
          permalink?: string;
          /** SEO page title for the category page. */
          page_title?: string;
          /** SEO meta description for the category page. */
          meta_description?: string;
          /** Products to associate with the category. */
          products?: Array<{
            /** Unique identifier of the product. */
            id: number;
          }>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        category: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Update a customer in Jumpseller. */
    "jumpseller.update_customer": {
      input: {
        /**
         * The Jumpseller numeric resource id.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Customer fields accepted by the Jumpseller customer update endpoint. */
        customer: {
          /**
           * Email of the customer.
           * @format email
           */
          email?: string;
          /** Phone of the customer. */
          phone?: string;
          /** Password for the customer account. */
          password?: string;
          /** Status of the customer. */
          status?: "approved" | "pending" | "disabled";
          /** Shipping address fields for the customer. */
          shipping_address?: Record<string, unknown>;
          /** Billing address fields for the customer. */
          billing_address?: Record<string, unknown>;
          /** Customer category ids assigned to the customer. */
          customer_category?: Array<number>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        customer: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Update status, tracking, or additional information for a Jumpseller order. */
    "jumpseller.update_order": {
      input: {
        /**
         * The Jumpseller numeric resource id.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Order fields accepted by the Jumpseller order update endpoint. */
        order: {
          /** Status of the order. */
          status?: "Abandoned" | "Canceled" | "Pending Payment" | "Paid";
          /** Shipment status of the order. */
          shipment_status?: "requested" | "in_transit" | "delivered" | "failed" | "pickup_available";
          /** Shipping tracking number used for the order. */
          tracking_number?: string;
          /** Shipping company used for the order. */
          tracking_company?: string;
          /**
           * URL to check delivery information for the order.
           * @format uri
           */
          tracking_url?: string;
          /** Additional information for the order. */
          additional_information?: string;
          /** Additional fields for the order. */
          additional_fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        order: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
    /** Update a product in Jumpseller. */
    "jumpseller.update_product": {
      input: {
        /**
         * The Jumpseller numeric resource id.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Product fields accepted by Jumpseller product create and update endpoints. */
        product: {
          /**
           * Name of the product.
           * @minLength 1
           */
          name: string;
          /** Price of the product. */
          price: number;
          /** Description of the product. */
          description?: string;
          /** SEO title of the product. */
          page_title?: string;
          /** SEO meta description of the product. */
          meta_description?: string;
          /** Type of the product. */
          type?: "physical" | "digital" | "gift_card";
          /** Number of days a gift card remains valid after purchase. */
          days_to_expire?: number;
          /** Weight of the product. */
          weight?: number;
          /** Quantity in stock for the product. */
          stock?: number;
          /** Whether the product has unlimited stock. */
          stock_unlimited?: boolean;
          /** Low stock threshold quantity. */
          stock_threshold?: number;
          /** Whether low stock notifications are enabled. */
          stock_notification?: boolean;
          /** Whether back-in-stock email alerts are enabled. */
          back_in_stock_enabled?: boolean;
          /** Cost per item of the product. */
          cost_per_item?: number;
          /** Sale comparison price, which should be higher than price. */
          compare_at_price?: number;
          /** Minimum units required to purchase the product. */
          minimum_quantity?: number;
          /** Maximum units that can be purchased per order. */
          maximum_quantity?: number;
          /** Stock Keeping Unit of the product. */
          sku?: string;
          /** Barcode of the product. */
          barcode?: string;
          /** Human-readable label for the Google product taxonomy category. */
          google_product_category_text?: string;
          /** Whether the product can be quoted. */
          quotable?: boolean;
          /** Whether the product is featured. */
          featured?: boolean;
          /** Whether shipping is required for the product. */
          shipping_required?: boolean;
          /** Status of the product. */
          status?: "available" | "not-available" | "disabled";
          /** Format of the product package. */
          package_format?: "box" | "cylinder";
          /** Length of the product. */
          length?: number;
          /** Width of the product. */
          width?: number;
          /** Height of the product. */
          height?: number;
          /** Diameter of the product. */
          diameter?: number;
          /** Product unique URL path. */
          permalink?: string;
          /** Categories to associate with the product. */
          categories?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /**
         * The locale code of the translated Jumpseller content.
         * @minLength 1
         */
        locale?: string;
        /** The Jumpseller fields to return. */
        fields?: Array<string>;
      };
      output: {
        /** The unwrapped Jumpseller resource object. */
        product: Record<string, unknown>;
        /** The raw Jumpseller API response payload. */
        raw: unknown;
      };
    };
  }
}
