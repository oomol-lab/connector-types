import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Stripe customer with common profile and metadata fields. */
    "stripe.create_customer": {
      input: {
        /**
         * The customer's full name or business name.
         * @maxLength 256
         */
        name?: string;
        /**
         * The customer's email address.
         * @maxLength 512
         * @format email
         */
        email?: string;
        /** An arbitrary customer description displayed in the Stripe Dashboard. */
        description?: string;
        /**
         * The customer's phone number.
         * @maxLength 20
         */
        phone?: string;
        /** The customer balance in the smallest currency unit. */
        balance?: number;
        /** A Stripe address object. */
        address?: {
          /** City, district, suburb, town, or village. */
          city?: string;
          /** Two-letter country code, or a freeform country value where Stripe allows it. */
          country?: string;
          /** Address line 1, such as the street, PO Box, or company name. */
          line1?: string;
          /** Address line 2, such as the apartment, suite, unit, or building. */
          line2?: string;
          /** ZIP or postal code. */
          postal_code?: string;
          /** State, county, province, or region. */
          state?: string;
        };
        /** Stripe metadata key-value pairs. Values are forwarded as strings, numbers, booleans, or empty strings. */
        metadata?: Record<string, string | number | boolean>;
        /** The customer's tax exemption status. */
        tax_exempt?: "none" | "exempt" | "reverse";
      };
      output: {
        /** A raw Stripe object returned by the API. */
        customer: Record<string, unknown> | null;
      };
    };
    /** Create a Stripe one-time or recurring price for an existing or inline product. */
    "stripe.create_price": {
      input: {
        /**
         * Three-letter ISO currency code in lowercase.
         * @minLength 3
         * @maxLength 3
         */
        currency: string;
        /**
         * The Stripe product ID this price belongs to.
         * @minLength 1
         */
        product?: string;
        /** Inline product data for creating a product while creating a price. */
        product_data?: {
          /**
           * The product's display name.
           * @minLength 1
           */
          name: string;
          /** Whether the product is available for purchase. */
          active?: boolean;
          /** Stripe metadata key-value pairs. Values are forwarded as strings, numbers, booleans, or empty strings. */
          metadata?: Record<string, string | number | boolean>;
          /**
           * Statement descriptor for subscription payments.
           * @maxLength 22
           */
          statement_descriptor?: string;
          /** Stripe tax code ID for this product. */
          tax_code?: string;
          /**
           * A label that represents units of this product.
           * @maxLength 12
           */
          unit_label?: string;
        };
        /** Unit amount in the smallest currency unit. */
        unit_amount?: number;
        /** Decimal unit amount in the smallest currency unit. */
        unit_amount_decimal?: string;
        /** Custom unit amount configuration that lets the payer choose the price amount. */
        custom_unit_amount?: {
          /** Whether customer-defined pricing is enabled for this price. */
          enabled: true;
          /** The minimum allowed amount in the smallest currency unit. */
          minimum?: number;
          /** The maximum allowed amount in the smallest currency unit. */
          maximum?: number;
          /** The suggested amount in the smallest currency unit. */
          preset?: number;
        };
        /** Whether the price can be used for new purchases. */
        active?: boolean;
        /**
         * A lookup key used to retrieve this price dynamically.
         * @maxLength 200
         */
        lookup_key?: string;
        /** Stripe metadata key-value pairs. Values are forwarded as strings, numbers, booleans, or empty strings. */
        metadata?: Record<string, string | number | boolean>;
        /** A brief internal description of the price. */
        nickname?: string;
        /** Recurring billing configuration for a Stripe price. */
        recurring?: {
          /** The billing frequency interval. */
          interval: "day" | "week" | "month" | "year";
          /** The number of intervals between subscription billings. */
          interval_count?: number;
          /** How usage is billed for this price. */
          usage_type?: "licensed" | "metered";
        };
        /** How Stripe should handle tax for this price. */
        tax_behavior?: "exclusive" | "inclusive" | "unspecified";
      };
      output: {
        /** A raw Stripe object returned by the API. */
        price: Record<string, unknown> | null;
      };
    };
    /** Create a Stripe product with common catalog fields. */
    "stripe.create_product": {
      input: {
        /**
         * The product's display name.
         * @minLength 1
         */
        name: string;
        /** Whether the product is available for purchase. */
        active?: boolean;
        /** The product description. */
        description?: string;
        /** A caller-supplied product ID. Stripe normally generates this when omitted. */
        id?: string;
        /**
         * Public image URLs for the product.
         * @maxItems 8
         */
        images?: Array<string>;
        /** Stripe metadata key-value pairs. Values are forwarded as strings, numbers, booleans, or empty strings. */
        metadata?: Record<string, string | number | boolean>;
        /** Whether this product is shipped as a physical good. */
        shippable?: boolean;
        /**
         * Statement descriptor for subscription payments.
         * @maxLength 22
         */
        statement_descriptor?: string;
        /** Stripe tax code ID for this product. */
        tax_code?: string;
        /**
         * A label that represents units of this product.
         * @maxLength 12
         */
        unit_label?: string;
        /**
         * A publicly accessible product webpage URL.
         * @format uri
         */
        url?: string;
      };
      output: {
        /** A raw Stripe object returned by the API. */
        product: Record<string, unknown> | null;
      };
    };
    /** Delete a Stripe customer by ID. */
    "stripe.delete_customer": {
      input: {
        /**
         * The Stripe customer ID to delete.
         * @minLength 1
         */
        customerId: string;
      };
      output: {
        /** Whether Stripe deleted the object. */
        deleted: boolean;
        /** The deleted Stripe object type. */
        object: string;
        /** The deleted Stripe object ID. */
        id: string;
        /** A raw Stripe object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Stripe product by ID. */
    "stripe.delete_product": {
      input: {
        /**
         * The Stripe product ID to delete.
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** Whether Stripe deleted the object. */
        deleted: boolean;
        /** The deleted Stripe object type. */
        object: string;
        /** The deleted Stripe object ID. */
        id: string;
        /** A raw Stripe object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a Stripe customer by ID. */
    "stripe.get_customer": {
      input: {
        /**
         * The Stripe customer ID to retrieve.
         * @minLength 1
         */
        customerId: string;
      };
      output: {
        /** A raw Stripe object returned by the API. */
        customer: Record<string, unknown> | null;
      };
    };
    /** Retrieve a Stripe price by ID. */
    "stripe.get_price": {
      input: {
        /**
         * The Stripe price ID to retrieve.
         * @minLength 1
         */
        priceId: string;
      };
      output: {
        /** A raw Stripe object returned by the API. */
        price: Record<string, unknown> | null;
      };
    };
    /** Retrieve a Stripe product by ID. */
    "stripe.get_product": {
      input: {
        /**
         * The Stripe product ID to retrieve.
         * @minLength 1
         */
        productId: string;
      };
      output: {
        /** A raw Stripe object returned by the API. */
        product: Record<string, unknown> | null;
      };
    };
    /** Retrieve the Stripe account associated with the current secret API key. */
    "stripe.identify_account": {
      input: Record<string, never>;
      output: {
        /** A raw Stripe object returned by the API. */
        account: Record<string, unknown>;
        /** The Stripe account ID. */
        accountId: string | null;
        /** The Stripe account email address. */
        email: string | null;
        /** The Stripe account country. */
        country: string | null;
        /** The Stripe account default currency. */
        defaultCurrency: string | null;
      };
    };
    /** List Stripe customers with optional email, created timestamp, and cursor filters. */
    "stripe.list_customers": {
      input: {
        /**
         * The maximum number of objects to return. Stripe accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A cursor object ID that fetches the next page after that object.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor object ID that fetches the previous page before that object.
         * @minLength 1
         */
        ending_before?: string;
        /**
         * Filter customers by an exact, case-sensitive email address.
         * @maxLength 512
         * @format email
         */
        email?: string;
        /** A Stripe created timestamp interval filter. */
        created?: {
          /** Return objects created after this Unix timestamp, exclusive. */
          gt?: number;
          /** Return objects created after or at this Unix timestamp. */
          gte?: number;
          /** Return objects created before this Unix timestamp, exclusive. */
          lt?: number;
          /** Return objects created before or at this Unix timestamp. */
          lte?: number;
        };
      };
      output: {
        /** A Stripe list response. */
        customers: {
          /** The Stripe response object type. */
          object: string;
          /** The Stripe API URL for this list. */
          url: string;
          /** Whether more objects are available after this page. */
          has_more: boolean;
          /** Stripe objects returned on this page. */
          data: Array<Record<string, unknown>>;
        };
      };
    };
    /** List Stripe prices with optional product, active, type, and cursor filters. */
    "stripe.list_prices": {
      input: {
        /**
         * The maximum number of objects to return. Stripe accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A cursor object ID that fetches the next page after that object.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor object ID that fetches the previous page before that object.
         * @minLength 1
         */
        ending_before?: string;
        /** Filter prices by active status. */
        active?: boolean;
        /**
         * Filter prices by three-letter ISO currency code in lowercase.
         * @minLength 3
         * @maxLength 3
         */
        currency?: string;
        /**
         * Filter prices by Stripe product ID.
         * @minLength 1
         */
        product?: string;
        /** Filter prices by one-time or recurring type. */
        type?: "one_time" | "recurring";
        /** A Stripe created timestamp interval filter. */
        created?: {
          /** Return objects created after this Unix timestamp, exclusive. */
          gt?: number;
          /** Return objects created after or at this Unix timestamp. */
          gte?: number;
          /** Return objects created before this Unix timestamp, exclusive. */
          lt?: number;
          /** Return objects created before or at this Unix timestamp. */
          lte?: number;
        };
      };
      output: {
        /** A Stripe list response. */
        prices: {
          /** The Stripe response object type. */
          object: string;
          /** The Stripe API URL for this list. */
          url: string;
          /** Whether more objects are available after this page. */
          has_more: boolean;
          /** Stripe objects returned on this page. */
          data: Array<Record<string, unknown>>;
        };
      };
    };
    /** List Stripe products with optional active and cursor filters. */
    "stripe.list_products": {
      input: {
        /**
         * The maximum number of objects to return. Stripe accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * A cursor object ID that fetches the next page after that object.
         * @minLength 1
         */
        starting_after?: string;
        /**
         * A cursor object ID that fetches the previous page before that object.
         * @minLength 1
         */
        ending_before?: string;
        /** Filter products by active status. */
        active?: boolean;
        /** Filter products by Stripe product IDs. */
        ids?: Array<string>;
        /** A Stripe created timestamp interval filter. */
        created?: {
          /** Return objects created after this Unix timestamp, exclusive. */
          gt?: number;
          /** Return objects created after or at this Unix timestamp. */
          gte?: number;
          /** Return objects created before this Unix timestamp, exclusive. */
          lt?: number;
          /** Return objects created before or at this Unix timestamp. */
          lte?: number;
        };
      };
      output: {
        /** A Stripe list response. */
        products: {
          /** The Stripe response object type. */
          object: string;
          /** The Stripe API URL for this list. */
          url: string;
          /** Whether more objects are available after this page. */
          has_more: boolean;
          /** Stripe objects returned on this page. */
          data: Array<Record<string, unknown>>;
        };
      };
    };
    /** Search Stripe customers with Stripe's search query syntax. */
    "stripe.search_customers": {
      input: {
        /**
         * A Stripe customer search query, such as email:'jenny@example.com'.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of objects to return. Stripe accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** A Stripe search pagination token returned by a previous search response. */
        page?: string;
      };
      output: {
        /** A Stripe list response. */
        customers: {
          /** The Stripe response object type. */
          object: string;
          /** The Stripe API URL for this list. */
          url: string;
          /** Whether more objects are available after this page. */
          has_more: boolean;
          /** Stripe objects returned on this page. */
          data: Array<Record<string, unknown>>;
        };
      };
    };
    /** Search Stripe prices with Stripe's search query syntax. */
    "stripe.search_prices": {
      input: {
        /**
         * A Stripe price search query, such as active:'true'.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of objects to return. Stripe accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** A Stripe search pagination token returned by a previous search response. */
        page?: string;
      };
      output: {
        /** A Stripe list response. */
        prices: {
          /** The Stripe response object type. */
          object: string;
          /** The Stripe API URL for this list. */
          url: string;
          /** Whether more objects are available after this page. */
          has_more: boolean;
          /** Stripe objects returned on this page. */
          data: Array<Record<string, unknown>>;
        };
      };
    };
    /** Search Stripe products with Stripe's search query syntax. */
    "stripe.search_products": {
      input: {
        /**
         * A Stripe product search query, such as active:'true'.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of objects to return. Stripe accepts values from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** A Stripe search pagination token returned by a previous search response. */
        page?: string;
      };
      output: {
        /** A Stripe list response. */
        products: {
          /** The Stripe response object type. */
          object: string;
          /** The Stripe API URL for this list. */
          url: string;
          /** Whether more objects are available after this page. */
          has_more: boolean;
          /** Stripe objects returned on this page. */
          data: Array<Record<string, unknown>>;
        };
      };
    };
    /** Update a Stripe customer with common profile and metadata fields. */
    "stripe.update_customer": {
      input: {
        /**
         * The Stripe customer ID to update.
         * @minLength 1
         */
        customerId: string;
        /**
         * The customer's full name or business name.
         * @maxLength 256
         */
        name?: string;
        /**
         * The customer's email address.
         * @maxLength 512
         * @format email
         */
        email?: string;
        /** An arbitrary customer description displayed in the Stripe Dashboard. */
        description?: string;
        /**
         * The customer's phone number.
         * @maxLength 20
         */
        phone?: string;
        /** The customer balance in the smallest currency unit. */
        balance?: number;
        /** A Stripe address object. */
        address?: {
          /** City, district, suburb, town, or village. */
          city?: string;
          /** Two-letter country code, or a freeform country value where Stripe allows it. */
          country?: string;
          /** Address line 1, such as the street, PO Box, or company name. */
          line1?: string;
          /** Address line 2, such as the apartment, suite, unit, or building. */
          line2?: string;
          /** ZIP or postal code. */
          postal_code?: string;
          /** State, county, province, or region. */
          state?: string;
        };
        /** Stripe metadata key-value pairs. Values are forwarded as strings, numbers, booleans, or empty strings. */
        metadata?: Record<string, string | number | boolean>;
        /** The customer's tax exemption status. */
        tax_exempt?: "none" | "exempt" | "reverse";
      };
      output: {
        /** A raw Stripe object returned by the API. */
        customer: Record<string, unknown> | null;
      };
    };
    /** Update mutable fields on a Stripe price. */
    "stripe.update_price": {
      input: {
        /**
         * The Stripe price ID to update.
         * @minLength 1
         */
        priceId: string;
        /** Whether the price can be used for new purchases. */
        active?: boolean;
        /**
         * A lookup key used to retrieve this price dynamically.
         * @maxLength 200
         */
        lookup_key?: string;
        /** Stripe metadata key-value pairs. Values are forwarded as strings, numbers, booleans, or empty strings. */
        metadata?: Record<string, string | number | boolean>;
        /** A brief internal description of the price. */
        nickname?: string;
        /** How Stripe should handle tax for this price. */
        tax_behavior?: "exclusive" | "inclusive" | "unspecified";
      };
      output: {
        /** A raw Stripe object returned by the API. */
        price: Record<string, unknown> | null;
      };
    };
    /** Update a Stripe product with common catalog fields. */
    "stripe.update_product": {
      input: {
        /**
         * The Stripe product ID to update.
         * @minLength 1
         */
        productId: string;
        /**
         * The product's display name.
         * @minLength 1
         */
        name?: string;
        /** Whether the product is available for purchase. */
        active?: boolean;
        /** The product description. */
        description?: string;
        /** A caller-supplied product ID. Stripe normally generates this when omitted. */
        id?: string;
        /**
         * Public image URLs for the product.
         * @maxItems 8
         */
        images?: Array<string>;
        /** Stripe metadata key-value pairs. Values are forwarded as strings, numbers, booleans, or empty strings. */
        metadata?: Record<string, string | number | boolean>;
        /** Whether this product is shipped as a physical good. */
        shippable?: boolean;
        /**
         * Statement descriptor for subscription payments.
         * @maxLength 22
         */
        statement_descriptor?: string;
        /** Stripe tax code ID for this product. */
        tax_code?: string;
        /**
         * A label that represents units of this product.
         * @maxLength 12
         */
        unit_label?: string;
        /**
         * A publicly accessible product webpage URL.
         * @format uri
         */
        url?: string;
      };
      output: {
        /** A raw Stripe object returned by the API. */
        product: Record<string, unknown> | null;
      };
    };
  }
}
