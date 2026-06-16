import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an administrator or customer-visible note to one WooCommerce order. */
    "woocommerce.add_order_note": {
      input: {
        /**
         * The WooCommerce order ID.
         * @minimum 1
         */
        orderId: number;
        /** The note body to add to the order. */
        note: string;
        /** Whether the note should be visible to the customer. */
        customerNote?: boolean;
      };
      output: {
        /** The WooCommerce order note ID. */
        id: number | null;
        /** The note author name. */
        author: string | null;
        /** The note creation timestamp in the store timezone. */
        dateCreated: string | null;
        /** The note body. */
        note: string | null;
        /** Whether the note is visible to the customer. */
        customerNote: boolean;
      };
    };
    /** Create a WooCommerce coupon. */
    "woocommerce.create_coupon": {
      input: {
        /** The coupon code. */
        code: string;
        /** The WooCommerce coupon discount type. */
        discountType: string;
        /** The coupon amount as a decimal string. */
        amount: string;
        /** The coupon description. */
        description?: string;
        /** Whether the coupon can only be used individually. */
        individualUse?: boolean;
        /** Whether sale items should be excluded from the coupon. */
        excludeSaleItems?: boolean;
        /** Whether the coupon grants free shipping. */
        freeShipping?: boolean;
        /** The coupon expiration date in the store timezone. */
        dateExpires?: string;
        /** The minimum spend amount required for the coupon. */
        minimumAmount?: string;
        /** The maximum spend amount allowed for the coupon. */
        maximumAmount?: string;
      };
      output: {
        /** The WooCommerce coupon ID. */
        id: number | null;
        /** The coupon code. */
        code: string | null;
        /** The coupon amount as returned by WooCommerce. */
        amount: string | null;
        /** The WooCommerce coupon discount type. */
        discountType: string | null;
        /** The coupon description. */
        description: string | null;
        /** The coupon creation timestamp in the store timezone. */
        dateCreated: string | null;
        /** The coupon update timestamp in the store timezone. */
        dateModified: string | null;
      };
    };
    /** Create a WooCommerce order with customer, address, line item, and coupon fields. */
    "woocommerce.create_order": {
      input: {
        /** The WooCommerce order status. */
        status?: "pending" | "processing" | "on-hold" | "completed" | "cancelled" | "refunded" | "failed" | "trash";
        /**
         * The WooCommerce customer ID for the order.
         * @minimum 1
         */
        customerId?: number;
        /** The order currency code. */
        currency?: string;
        /** A WooCommerce address payload used in order writes. */
        billing?: {
          /** The first name on the address. */
          firstName?: string;
          /** The last name on the address. */
          lastName?: string;
          /** The company name on the address. */
          company?: string;
          /** The first address line. */
          address1?: string;
          /** The second address line. */
          address2?: string;
          /** The city name. */
          city?: string;
          /** The state, region, or province code. */
          state?: string;
          /** The postal code. */
          postcode?: string;
          /** The country code. */
          country?: string;
          /** The email address on the address. */
          email?: string;
          /** The phone number on the address. */
          phone?: string;
        };
        /** A WooCommerce address payload used in order writes. */
        shipping?: {
          /** The first name on the address. */
          firstName?: string;
          /** The last name on the address. */
          lastName?: string;
          /** The company name on the address. */
          company?: string;
          /** The first address line. */
          address1?: string;
          /** The second address line. */
          address2?: string;
          /** The city name. */
          city?: string;
          /** The state, region, or province code. */
          state?: string;
          /** The postal code. */
          postcode?: string;
          /** The country code. */
          country?: string;
          /** The email address on the address. */
          email?: string;
          /** The phone number on the address. */
          phone?: string;
        };
        /** The order line items. */
        lineItems: Array<{
          /**
           * The WooCommerce product ID.
           * @minimum 1
           */
          productId: number;
          /**
           * The WooCommerce variation ID.
           * @minimum 1
           */
          variationId?: number;
          /** The item quantity. */
          quantity: number;
          /** The line subtotal as a decimal string. */
          subtotal?: string;
          /** The line total as a decimal string. */
          total?: string;
        }>;
        /** The order coupon lines. */
        couponLines?: Array<{
          /** The coupon code to apply to the order. */
          code: string;
        }>;
        /** The order shipping lines. */
        shippingLines?: Array<{
          /**
           * The WooCommerce shipping line ID.
           * @minimum 1
           */
          id?: number;
          /** The shipping method ID. */
          methodId?: string;
          /** The shipping method display title. */
          methodTitle?: string;
          /** The shipping line total as a decimal string. */
          total?: string;
        }>;
        /** A customer-facing note for the order. */
        customerNote?: string;
        /** The payment method identifier. */
        paymentMethod?: string;
        /** The payment method display title. */
        paymentMethodTitle?: string;
        /** Whether WooCommerce should mark the order as paid. */
        setPaid?: boolean;
      };
      output: {
        /** The WooCommerce order ID. */
        id: number | null;
        /** The WooCommerce order number. */
        number: string | null;
        /** The order status. */
        status: string | null;
        /** The order currency code. */
        currency: string | null;
        /** The order total as returned by WooCommerce. */
        total: string | null;
        /** The WooCommerce customer ID associated with the order. */
        customerId: number | null;
        /** The order creation timestamp in the store timezone. */
        dateCreated: string | null;
        /** The order update timestamp in the store timezone. */
        dateModified: string | null;
        /** A normalized WooCommerce address payload. */
        billing: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
        /** A normalized WooCommerce address payload. */
        shipping: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
        /** The order line items returned by WooCommerce. */
        lineItems: Array<{
          /** The WooCommerce line item ID. */
          id: number | null;
          /** The related WooCommerce product ID. */
          productId: number | null;
          /** The related WooCommerce variation ID. */
          variationId: number | null;
          /** The line item name. */
          name: string | null;
          /** The ordered quantity. */
          quantity: number | null;
          /** The line item total as returned by WooCommerce. */
          total: string | null;
          /** The line item SKU, if returned. */
          sku: string | null;
        }>;
      };
    };
    /** Create a WooCommerce product with catalog, price, stock, image, and attribute fields. */
    "woocommerce.create_product": {
      input: {
        /** The product name. */
        name: string;
        /** The WooCommerce product type, such as simple or variable. */
        type?: string;
        /** The WooCommerce product status. */
        status?: "any" | "draft" | "pending" | "private" | "publish";
        /** The product SKU. */
        sku?: string;
        /** The regular product price as a decimal string. */
        regularPrice?: string;
        /** The sale product price as a decimal string. */
        salePrice?: string;
        /** The full product description. */
        description?: string;
        /** The short product description. */
        shortDescription?: string;
        /** Whether WooCommerce should manage stock for this product. */
        manageStock?: boolean;
        /** The product stock quantity. */
        stockQuantity?: number;
        /** The WooCommerce stock status. */
        stockStatus?: "instock" | "outofstock" | "onbackorder";
        /** The product category references. */
        categories?: Array<{
          /**
           * The WooCommerce term ID.
           * @minimum 1
           */
          id: number;
        }>;
        /** The product tag references. */
        tags?: Array<{
          /**
           * The WooCommerce term ID.
           * @minimum 1
           */
          id: number;
        }>;
        /** The product image references. */
        images?: Array<{
          /**
           * The existing WordPress media attachment ID.
           * @minimum 1
           */
          id?: number;
          /** A public image URL WooCommerce can import. */
          src?: string;
          /** The image display name. */
          name?: string;
          /** The image alt text. */
          alt?: string;
        }>;
        /** The product attributes. */
        attributes?: Array<{
          /**
           * The existing WooCommerce attribute ID.
           * @minimum 1
           */
          id?: number;
          /** The custom attribute name when no attribute ID is used. */
          name?: string;
          /** The attribute display position. */
          position?: number;
          /** Whether the attribute is visible on the product page. */
          visible?: boolean;
          /** Whether the attribute is used for variations. */
          variation?: boolean;
          /** The attribute option labels. */
          options?: Array<string>;
        }>;
      };
      output: {
        /** The WooCommerce product ID. */
        id: number | null;
        /** The product name. */
        name: string | null;
        /** The product URL slug. */
        slug: string | null;
        /** The product permalink. */
        permalink: string | null;
        /** The WooCommerce product type. */
        type: string | null;
        /** The product status. */
        status: string | null;
        /** The product SKU. */
        sku: string | null;
        /** The current product price as returned by WooCommerce. */
        price: string | null;
        /** The regular product price as returned by WooCommerce. */
        regularPrice: string | null;
        /** The sale product price as returned by WooCommerce. */
        salePrice: string | null;
        /** The product stock status. */
        stockStatus: string | null;
        /** The product stock quantity, if tracked. */
        stockQuantity: number | null;
        /** The product categories returned by WooCommerce. */
        categories: Array<{
          /** The WooCommerce category ID. */
          id: number | null;
          /** The category display name. */
          name: string | null;
          /** The category URL slug. */
          slug: string | null;
        }>;
        /** The product images returned by WooCommerce. */
        images: Array<{
          /** The WooCommerce image attachment ID. */
          id: number | null;
          /** The image URL. */
          src: string | null;
          /** The image display name. */
          name: string | null;
          /** The image alt text. */
          alt: string | null;
        }>;
      };
    };
    /** Create a variation for one WooCommerce variable product. */
    "woocommerce.create_product_variation": {
      input: {
        /**
         * The WooCommerce product ID.
         * @minimum 1
         */
        productId: number;
        /** The variation SKU. */
        sku?: string;
        /** The regular variation price as a decimal string. */
        regularPrice?: string;
        /** The sale variation price as a decimal string. */
        salePrice?: string;
        /** Whether WooCommerce should manage stock for this variation. */
        manageStock?: boolean;
        /** The variation stock quantity. */
        stockQuantity?: number;
        /** The WooCommerce stock status. */
        stockStatus?: "instock" | "outofstock" | "onbackorder";
        /** The variation attributes. */
        attributes?: Array<{
          /**
           * The existing WooCommerce attribute ID.
           * @minimum 1
           */
          id?: number;
          /** The custom attribute name when no attribute ID is used. */
          name?: string;
          /** The selected attribute option. */
          option: string;
        }>;
        /** A WooCommerce product image reference used in write payloads. */
        image?: {
          /**
           * The existing WordPress media attachment ID.
           * @minimum 1
           */
          id?: number;
          /** A public image URL WooCommerce can import. */
          src?: string;
          /** The image display name. */
          name?: string;
          /** The image alt text. */
          alt?: string;
        };
      };
      output: {
        /** The WooCommerce variation ID. */
        id: number | null;
        /** The variation SKU. */
        sku: string | null;
        /** The current variation price as returned by WooCommerce. */
        price: string | null;
        /** The regular variation price as returned by WooCommerce. */
        regularPrice: string | null;
        /** The sale variation price as returned by WooCommerce. */
        salePrice: string | null;
        /** The variation stock status. */
        stockStatus: string | null;
        /** The variation stock quantity, if tracked. */
        stockQuantity: number | null;
        /** The variation attributes returned by WooCommerce. */
        attributes: Array<{
          /** The WooCommerce attribute ID. */
          id: number | null;
          /** The attribute display name. */
          name: string | null;
          /** The selected attribute option. */
          option: string | null;
        }>;
        /** One WooCommerce product image. */
        image: {
          /** The WooCommerce image attachment ID. */
          id: number | null;
          /** The image URL. */
          src: string | null;
          /** The image display name. */
          name: string | null;
          /** The image alt text. */
          alt: string | null;
        } | null;
      };
    };
    /** Fetch one WooCommerce coupon by coupon ID. */
    "woocommerce.get_coupon": {
      input: {
        /**
         * The WooCommerce coupon ID to fetch.
         * @minimum 1
         */
        couponId: number;
      };
      output: {
        /** The WooCommerce coupon ID. */
        id: number | null;
        /** The coupon code. */
        code: string | null;
        /** The coupon amount as returned by WooCommerce. */
        amount: string | null;
        /** The WooCommerce coupon discount type. */
        discountType: string | null;
        /** The coupon description. */
        description: string | null;
        /** The coupon creation timestamp in the store timezone. */
        dateCreated: string | null;
        /** The coupon update timestamp in the store timezone. */
        dateModified: string | null;
      };
    };
    /** Fetch one WooCommerce customer by customer ID. */
    "woocommerce.get_customer": {
      input: {
        /**
         * The WooCommerce customer ID to fetch.
         * @minimum 1
         */
        customerId: number;
      };
      output: {
        /** The WooCommerce customer ID. */
        id: number | null;
        /** The customer email address. */
        email: string | null;
        /** The customer first name. */
        firstName: string | null;
        /** The customer last name. */
        lastName: string | null;
        /** The customer username. */
        username: string | null;
        /** The customer role. */
        role: string | null;
        /** The customer creation timestamp in the store timezone. */
        dateCreated: string | null;
        /** The customer update timestamp in the store timezone. */
        dateModified: string | null;
        /** A normalized WooCommerce address payload. */
        billing: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
        /** A normalized WooCommerce address payload. */
        shipping: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
      };
    };
    /** Fetch one WooCommerce order by order ID. */
    "woocommerce.get_order": {
      input: {
        /**
         * The WooCommerce order ID to fetch.
         * @minimum 1
         */
        orderId: number;
      };
      output: {
        /** The WooCommerce order ID. */
        id: number | null;
        /** The WooCommerce order number. */
        number: string | null;
        /** The order status. */
        status: string | null;
        /** The order currency code. */
        currency: string | null;
        /** The order total as returned by WooCommerce. */
        total: string | null;
        /** The WooCommerce customer ID associated with the order. */
        customerId: number | null;
        /** The order creation timestamp in the store timezone. */
        dateCreated: string | null;
        /** The order update timestamp in the store timezone. */
        dateModified: string | null;
        /** A normalized WooCommerce address payload. */
        billing: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
        /** A normalized WooCommerce address payload. */
        shipping: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
        /** The order line items returned by WooCommerce. */
        lineItems: Array<{
          /** The WooCommerce line item ID. */
          id: number | null;
          /** The related WooCommerce product ID. */
          productId: number | null;
          /** The related WooCommerce variation ID. */
          variationId: number | null;
          /** The line item name. */
          name: string | null;
          /** The ordered quantity. */
          quantity: number | null;
          /** The line item total as returned by WooCommerce. */
          total: string | null;
          /** The line item SKU, if returned. */
          sku: string | null;
        }>;
      };
    };
    /** Fetch one WooCommerce product by product ID. */
    "woocommerce.get_product": {
      input: {
        /**
         * The WooCommerce product ID to fetch.
         * @minimum 1
         */
        productId: number;
      };
      output: {
        /** The WooCommerce product ID. */
        id: number | null;
        /** The product name. */
        name: string | null;
        /** The product URL slug. */
        slug: string | null;
        /** The product permalink. */
        permalink: string | null;
        /** The WooCommerce product type. */
        type: string | null;
        /** The product status. */
        status: string | null;
        /** The product SKU. */
        sku: string | null;
        /** The current product price as returned by WooCommerce. */
        price: string | null;
        /** The regular product price as returned by WooCommerce. */
        regularPrice: string | null;
        /** The sale product price as returned by WooCommerce. */
        salePrice: string | null;
        /** The product stock status. */
        stockStatus: string | null;
        /** The product stock quantity, if tracked. */
        stockQuantity: number | null;
        /** The product categories returned by WooCommerce. */
        categories: Array<{
          /** The WooCommerce category ID. */
          id: number | null;
          /** The category display name. */
          name: string | null;
          /** The category URL slug. */
          slug: string | null;
        }>;
        /** The product images returned by WooCommerce. */
        images: Array<{
          /** The WooCommerce image attachment ID. */
          id: number | null;
          /** The image URL. */
          src: string | null;
          /** The image display name. */
          name: string | null;
          /** The image alt text. */
          alt: string | null;
        }>;
      };
    };
    /** Fetch one WooCommerce product variation by product and variation ID. */
    "woocommerce.get_product_variation": {
      input: {
        /**
         * The WooCommerce product ID.
         * @minimum 1
         */
        productId: number;
        /**
         * The WooCommerce variation ID.
         * @minimum 1
         */
        variationId: number;
      };
      output: {
        /** The WooCommerce variation ID. */
        id: number | null;
        /** The variation SKU. */
        sku: string | null;
        /** The current variation price as returned by WooCommerce. */
        price: string | null;
        /** The regular variation price as returned by WooCommerce. */
        regularPrice: string | null;
        /** The sale variation price as returned by WooCommerce. */
        salePrice: string | null;
        /** The variation stock status. */
        stockStatus: string | null;
        /** The variation stock quantity, if tracked. */
        stockQuantity: number | null;
        /** The variation attributes returned by WooCommerce. */
        attributes: Array<{
          /** The WooCommerce attribute ID. */
          id: number | null;
          /** The attribute display name. */
          name: string | null;
          /** The selected attribute option. */
          option: string | null;
        }>;
        /** One WooCommerce product image. */
        image: {
          /** The WooCommerce image attachment ID. */
          id: number | null;
          /** The image URL. */
          src: string | null;
          /** The image display name. */
          name: string | null;
          /** The image alt text. */
          alt: string | null;
        } | null;
      };
    };
    /** List WooCommerce coupons with common code search and pagination metadata. */
    "woocommerce.list_coupons": {
      input: {
        /**
         * The page number to retrieve from WooCommerce.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return in one page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Limit results to coupons matching this search term. */
        search?: string;
        /** Limit results to coupons with this exact code. */
        code?: string;
        /** The result sort direction. */
        order?: "asc" | "desc";
        /** Sort coupons by an official WooCommerce orderby value. */
        orderBy?: string;
      };
      output: {
        /** The coupons returned by WooCommerce. */
        coupons: Array<{
          /** The WooCommerce coupon ID. */
          id: number | null;
          /** The coupon code. */
          code: string | null;
          /** The coupon amount as returned by WooCommerce. */
          amount: string | null;
          /** The WooCommerce coupon discount type. */
          discountType: string | null;
          /** The coupon description. */
          description: string | null;
          /** The coupon creation timestamp in the store timezone. */
          dateCreated: string | null;
          /** The coupon update timestamp in the store timezone. */
          dateModified: string | null;
        }>;
        /** The total number of matching records reported by WooCommerce. */
        total: number | null;
        /** The total number of result pages reported by WooCommerce. */
        totalPages: number | null;
      };
    };
    /** List WooCommerce customers with common filters and pagination metadata. */
    "woocommerce.list_customers": {
      input: {
        /**
         * The page number to retrieve from WooCommerce.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return in one page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Limit results to customers matching this search term. */
        search?: string;
        /** Limit results to customers with this email address. */
        email?: string;
        /** Limit results to customers with this WordPress role. */
        role?: string;
        /** The result sort direction. */
        order?: "asc" | "desc";
        /** Sort customers by an official WooCommerce orderby value. */
        orderBy?: string;
      };
      output: {
        /** The customers returned by WooCommerce. */
        customers: Array<{
          /** The WooCommerce customer ID. */
          id: number | null;
          /** The customer email address. */
          email: string | null;
          /** The customer first name. */
          firstName: string | null;
          /** The customer last name. */
          lastName: string | null;
          /** The customer username. */
          username: string | null;
          /** The customer role. */
          role: string | null;
          /** The customer creation timestamp in the store timezone. */
          dateCreated: string | null;
          /** The customer update timestamp in the store timezone. */
          dateModified: string | null;
          /** A normalized WooCommerce address payload. */
          billing: {
            /** The first name on the address. */
            firstName: string | null;
            /** The last name on the address. */
            lastName: string | null;
            /** The company name on the address. */
            company: string | null;
            /** The first address line. */
            address1: string | null;
            /** The second address line. */
            address2: string | null;
            /** The city name. */
            city: string | null;
            /** The state, region, or province code. */
            state: string | null;
            /** The postal code. */
            postcode: string | null;
            /** The country code. */
            country: string | null;
            /** The email address on the address, if returned. */
            email: string | null;
            /** The phone number on the address, if returned. */
            phone: string | null;
          };
          /** A normalized WooCommerce address payload. */
          shipping: {
            /** The first name on the address. */
            firstName: string | null;
            /** The last name on the address. */
            lastName: string | null;
            /** The company name on the address. */
            company: string | null;
            /** The first address line. */
            address1: string | null;
            /** The second address line. */
            address2: string | null;
            /** The city name. */
            city: string | null;
            /** The state, region, or province code. */
            state: string | null;
            /** The postal code. */
            postcode: string | null;
            /** The country code. */
            country: string | null;
            /** The email address on the address, if returned. */
            email: string | null;
            /** The phone number on the address, if returned. */
            phone: string | null;
          };
        }>;
        /** The total number of matching records reported by WooCommerce. */
        total: number | null;
        /** The total number of result pages reported by WooCommerce. */
        totalPages: number | null;
      };
    };
    /** List notes for one WooCommerce order. */
    "woocommerce.list_order_notes": {
      input: {
        /**
         * The WooCommerce order ID.
         * @minimum 1
         */
        orderId: number;
      };
      output: {
        /** The order notes returned by WooCommerce. */
        notes: Array<{
          /** The WooCommerce order note ID. */
          id: number | null;
          /** The note author name. */
          author: string | null;
          /** The note creation timestamp in the store timezone. */
          dateCreated: string | null;
          /** The note body. */
          note: string | null;
          /** Whether the note is visible to the customer. */
          customerNote: boolean;
        }>;
      };
    };
    /** List WooCommerce orders with common status, customer, and date filters. */
    "woocommerce.list_orders": {
      input: {
        /**
         * The page number to retrieve from WooCommerce.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return in one page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** The WooCommerce order status. */
        status?: "pending" | "processing" | "on-hold" | "completed" | "cancelled" | "refunded" | "failed" | "trash";
        /**
         * Limit results to orders for this WooCommerce customer ID.
         * @minimum 1
         */
        customer?: number;
        /**
         * Limit results to orders containing this product ID.
         * @minimum 1
         */
        product?: number;
        /** Limit results to orders matching this search term. */
        search?: string;
        /** Limit results to orders created after this ISO 8601 timestamp. */
        after?: string;
        /** Limit results to orders created before this ISO 8601 timestamp. */
        before?: string;
        /** The result sort direction. */
        order?: "asc" | "desc";
        /** Sort orders by an official WooCommerce orderby value. */
        orderBy?: string;
      };
      output: {
        /** The orders returned by WooCommerce. */
        orders: Array<{
          /** The WooCommerce order ID. */
          id: number | null;
          /** The WooCommerce order number. */
          number: string | null;
          /** The order status. */
          status: string | null;
          /** The order currency code. */
          currency: string | null;
          /** The order total as returned by WooCommerce. */
          total: string | null;
          /** The WooCommerce customer ID associated with the order. */
          customerId: number | null;
          /** The order creation timestamp in the store timezone. */
          dateCreated: string | null;
          /** The order update timestamp in the store timezone. */
          dateModified: string | null;
          /** A normalized WooCommerce address payload. */
          billing: {
            /** The first name on the address. */
            firstName: string | null;
            /** The last name on the address. */
            lastName: string | null;
            /** The company name on the address. */
            company: string | null;
            /** The first address line. */
            address1: string | null;
            /** The second address line. */
            address2: string | null;
            /** The city name. */
            city: string | null;
            /** The state, region, or province code. */
            state: string | null;
            /** The postal code. */
            postcode: string | null;
            /** The country code. */
            country: string | null;
            /** The email address on the address, if returned. */
            email: string | null;
            /** The phone number on the address, if returned. */
            phone: string | null;
          };
          /** A normalized WooCommerce address payload. */
          shipping: {
            /** The first name on the address. */
            firstName: string | null;
            /** The last name on the address. */
            lastName: string | null;
            /** The company name on the address. */
            company: string | null;
            /** The first address line. */
            address1: string | null;
            /** The second address line. */
            address2: string | null;
            /** The city name. */
            city: string | null;
            /** The state, region, or province code. */
            state: string | null;
            /** The postal code. */
            postcode: string | null;
            /** The country code. */
            country: string | null;
            /** The email address on the address, if returned. */
            email: string | null;
            /** The phone number on the address, if returned. */
            phone: string | null;
          };
          /** The order line items returned by WooCommerce. */
          lineItems: Array<{
            /** The WooCommerce line item ID. */
            id: number | null;
            /** The related WooCommerce product ID. */
            productId: number | null;
            /** The related WooCommerce variation ID. */
            variationId: number | null;
            /** The line item name. */
            name: string | null;
            /** The ordered quantity. */
            quantity: number | null;
            /** The line item total as returned by WooCommerce. */
            total: string | null;
            /** The line item SKU, if returned. */
            sku: string | null;
          }>;
        }>;
        /** The total number of matching records reported by WooCommerce. */
        total: number | null;
        /** The total number of result pages reported by WooCommerce. */
        totalPages: number | null;
      };
    };
    /** List terms for one WooCommerce product attribute. */
    "woocommerce.list_product_attribute_terms": {
      input: {
        /**
         * The WooCommerce product attribute ID.
         * @minimum 1
         */
        attributeId: number;
        /**
         * The page number to retrieve from WooCommerce.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return in one page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Limit results to attribute terms matching this search term. */
        search?: string;
      };
      output: {
        /** The attribute terms returned by WooCommerce. */
        terms: Array<{
          /** The WooCommerce term ID. */
          id: number | null;
          /** The term display name. */
          name: string | null;
          /** The term URL slug. */
          slug: string | null;
          /** The number of products assigned to the term, if returned. */
          count: number | null;
        }>;
        /** The total number of matching records reported by WooCommerce. */
        total: number | null;
        /** The total number of result pages reported by WooCommerce. */
        totalPages: number | null;
      };
    };
    /** List WooCommerce product attributes. */
    "woocommerce.list_product_attributes": {
      input: Record<string, never>;
      output: {
        /** The attributes returned by WooCommerce. */
        attributes: Array<{
          /** The WooCommerce attribute ID. */
          id: number | null;
          /** The attribute display name. */
          name: string | null;
          /** The attribute slug. */
          slug: string | null;
          /** The attribute type. */
          type: string | null;
          /** The attribute sort mode. */
          orderBy: string | null;
          /** Whether the attribute has archives enabled. */
          hasArchives: boolean | null;
        }>;
      };
    };
    /** List WooCommerce product categories with filters and pagination metadata. */
    "woocommerce.list_product_categories": {
      input: {
        /**
         * The page number to retrieve from WooCommerce.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return in one page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Limit results to categories matching this search term. */
        search?: string;
        /** The result sort direction. */
        order?: "asc" | "desc";
        /** Sort categories by an official WooCommerce orderby value. */
        orderBy?: string;
      };
      output: {
        /** The categories returned by WooCommerce. */
        categories: Array<{
          /** The WooCommerce term ID. */
          id: number | null;
          /** The term display name. */
          name: string | null;
          /** The term URL slug. */
          slug: string | null;
          /** The number of products assigned to the term, if returned. */
          count: number | null;
        }>;
        /** The total number of matching records reported by WooCommerce. */
        total: number | null;
        /** The total number of result pages reported by WooCommerce. */
        totalPages: number | null;
      };
    };
    /** List WooCommerce product tags with filters and pagination metadata. */
    "woocommerce.list_product_tags": {
      input: {
        /**
         * The page number to retrieve from WooCommerce.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return in one page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Limit results to tags matching this search term. */
        search?: string;
        /** The result sort direction. */
        order?: "asc" | "desc";
        /** Sort tags by an official WooCommerce orderby value. */
        orderBy?: string;
      };
      output: {
        /** The tags returned by WooCommerce. */
        tags: Array<{
          /** The WooCommerce term ID. */
          id: number | null;
          /** The term display name. */
          name: string | null;
          /** The term URL slug. */
          slug: string | null;
          /** The number of products assigned to the term, if returned. */
          count: number | null;
        }>;
        /** The total number of matching records reported by WooCommerce. */
        total: number | null;
        /** The total number of result pages reported by WooCommerce. */
        totalPages: number | null;
      };
    };
    /** List variations for one WooCommerce variable product. */
    "woocommerce.list_product_variations": {
      input: {
        /**
         * The WooCommerce product ID.
         * @minimum 1
         */
        productId: number;
        /**
         * The page number to retrieve from WooCommerce.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return in one page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Limit results to variations with this SKU. */
        sku?: string;
      };
      output: {
        /** The variations returned by WooCommerce. */
        variations: Array<{
          /** The WooCommerce variation ID. */
          id: number | null;
          /** The variation SKU. */
          sku: string | null;
          /** The current variation price as returned by WooCommerce. */
          price: string | null;
          /** The regular variation price as returned by WooCommerce. */
          regularPrice: string | null;
          /** The sale variation price as returned by WooCommerce. */
          salePrice: string | null;
          /** The variation stock status. */
          stockStatus: string | null;
          /** The variation stock quantity, if tracked. */
          stockQuantity: number | null;
          /** The variation attributes returned by WooCommerce. */
          attributes: Array<{
            /** The WooCommerce attribute ID. */
            id: number | null;
            /** The attribute display name. */
            name: string | null;
            /** The selected attribute option. */
            option: string | null;
          }>;
          /** One WooCommerce product image. */
          image: {
            /** The WooCommerce image attachment ID. */
            id: number | null;
            /** The image URL. */
            src: string | null;
            /** The image display name. */
            name: string | null;
            /** The image alt text. */
            alt: string | null;
          } | null;
        }>;
        /** The total number of matching records reported by WooCommerce. */
        total: number | null;
        /** The total number of result pages reported by WooCommerce. */
        totalPages: number | null;
      };
    };
    /** List WooCommerce products with common catalog filters and pagination metadata. */
    "woocommerce.list_products": {
      input: {
        /**
         * The page number to retrieve from WooCommerce.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of records to return in one page.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
        /** Limit results to products matching this search term. */
        search?: string;
        /** The WooCommerce product status. */
        status?: "any" | "draft" | "pending" | "private" | "publish";
        /** Limit results to products with this SKU. */
        sku?: string;
        /** Limit results to products assigned to this category ID. */
        category?: string;
        /** Limit results to products assigned to this tag ID. */
        tag?: string;
        /** Limit results to featured products when true. */
        featured?: boolean;
        /** Limit results to products currently on sale when true. */
        onSale?: boolean;
        /** The result sort direction. */
        order?: "asc" | "desc";
        /** Sort products by an official WooCommerce orderby value. */
        orderBy?: string;
      };
      output: {
        /** The products returned by WooCommerce. */
        products: Array<{
          /** The WooCommerce product ID. */
          id: number | null;
          /** The product name. */
          name: string | null;
          /** The product URL slug. */
          slug: string | null;
          /** The product permalink. */
          permalink: string | null;
          /** The WooCommerce product type. */
          type: string | null;
          /** The product status. */
          status: string | null;
          /** The product SKU. */
          sku: string | null;
          /** The current product price as returned by WooCommerce. */
          price: string | null;
          /** The regular product price as returned by WooCommerce. */
          regularPrice: string | null;
          /** The sale product price as returned by WooCommerce. */
          salePrice: string | null;
          /** The product stock status. */
          stockStatus: string | null;
          /** The product stock quantity, if tracked. */
          stockQuantity: number | null;
          /** The product categories returned by WooCommerce. */
          categories: Array<{
            /** The WooCommerce category ID. */
            id: number | null;
            /** The category display name. */
            name: string | null;
            /** The category URL slug. */
            slug: string | null;
          }>;
          /** The product images returned by WooCommerce. */
          images: Array<{
            /** The WooCommerce image attachment ID. */
            id: number | null;
            /** The image URL. */
            src: string | null;
            /** The image display name. */
            name: string | null;
            /** The image alt text. */
            alt: string | null;
          }>;
        }>;
        /** The total number of matching records reported by WooCommerce. */
        total: number | null;
        /** The total number of result pages reported by WooCommerce. */
        totalPages: number | null;
      };
    };
    /** Update a WooCommerce coupon by coupon ID. */
    "woocommerce.update_coupon": {
      input: {
        /**
         * The WooCommerce coupon ID to update.
         * @minimum 1
         */
        couponId: number;
        /** The coupon code. */
        code?: string;
        /** The WooCommerce coupon discount type. */
        discountType?: string;
        /** The coupon amount as a decimal string. */
        amount?: string;
        /** The coupon description. */
        description?: string;
        /** Whether the coupon can only be used individually. */
        individualUse?: boolean;
        /** Whether sale items should be excluded from the coupon. */
        excludeSaleItems?: boolean;
        /** Whether the coupon grants free shipping. */
        freeShipping?: boolean;
        /** The coupon expiration date in the store timezone. */
        dateExpires?: string;
        /** The minimum spend amount required for the coupon. */
        minimumAmount?: string;
        /** The maximum spend amount allowed for the coupon. */
        maximumAmount?: string;
      };
      output: {
        /** The WooCommerce coupon ID. */
        id: number | null;
        /** The coupon code. */
        code: string | null;
        /** The coupon amount as returned by WooCommerce. */
        amount: string | null;
        /** The WooCommerce coupon discount type. */
        discountType: string | null;
        /** The coupon description. */
        description: string | null;
        /** The coupon creation timestamp in the store timezone. */
        dateCreated: string | null;
        /** The coupon update timestamp in the store timezone. */
        dateModified: string | null;
      };
    };
    /** Update a WooCommerce order by order ID. */
    "woocommerce.update_order": {
      input: {
        /**
         * The WooCommerce order ID to update.
         * @minimum 1
         */
        orderId: number;
        /** The WooCommerce order status. */
        status?: "pending" | "processing" | "on-hold" | "completed" | "cancelled" | "refunded" | "failed" | "trash";
        /**
         * The WooCommerce customer ID for the order.
         * @minimum 1
         */
        customerId?: number;
        /** A WooCommerce address payload used in order writes. */
        billing?: {
          /** The first name on the address. */
          firstName?: string;
          /** The last name on the address. */
          lastName?: string;
          /** The company name on the address. */
          company?: string;
          /** The first address line. */
          address1?: string;
          /** The second address line. */
          address2?: string;
          /** The city name. */
          city?: string;
          /** The state, region, or province code. */
          state?: string;
          /** The postal code. */
          postcode?: string;
          /** The country code. */
          country?: string;
          /** The email address on the address. */
          email?: string;
          /** The phone number on the address. */
          phone?: string;
        };
        /** A WooCommerce address payload used in order writes. */
        shipping?: {
          /** The first name on the address. */
          firstName?: string;
          /** The last name on the address. */
          lastName?: string;
          /** The company name on the address. */
          company?: string;
          /** The first address line. */
          address1?: string;
          /** The second address line. */
          address2?: string;
          /** The city name. */
          city?: string;
          /** The state, region, or province code. */
          state?: string;
          /** The postal code. */
          postcode?: string;
          /** The country code. */
          country?: string;
          /** The email address on the address. */
          email?: string;
          /** The phone number on the address. */
          phone?: string;
        };
        /** The order shipping lines. */
        shippingLines?: Array<{
          /**
           * The WooCommerce shipping line ID.
           * @minimum 1
           */
          id?: number;
          /** The shipping method ID. */
          methodId?: string;
          /** The shipping method display title. */
          methodTitle?: string;
          /** The shipping line total as a decimal string. */
          total?: string;
        }>;
        /** A customer-facing note for the order. */
        customerNote?: string;
        /** The payment method identifier. */
        paymentMethod?: string;
        /** The payment method display title. */
        paymentMethodTitle?: string;
        /** Whether WooCommerce should mark the order as paid. */
        setPaid?: boolean;
      };
      output: {
        /** The WooCommerce order ID. */
        id: number | null;
        /** The WooCommerce order number. */
        number: string | null;
        /** The order status. */
        status: string | null;
        /** The order currency code. */
        currency: string | null;
        /** The order total as returned by WooCommerce. */
        total: string | null;
        /** The WooCommerce customer ID associated with the order. */
        customerId: number | null;
        /** The order creation timestamp in the store timezone. */
        dateCreated: string | null;
        /** The order update timestamp in the store timezone. */
        dateModified: string | null;
        /** A normalized WooCommerce address payload. */
        billing: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
        /** A normalized WooCommerce address payload. */
        shipping: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
        /** The order line items returned by WooCommerce. */
        lineItems: Array<{
          /** The WooCommerce line item ID. */
          id: number | null;
          /** The related WooCommerce product ID. */
          productId: number | null;
          /** The related WooCommerce variation ID. */
          variationId: number | null;
          /** The line item name. */
          name: string | null;
          /** The ordered quantity. */
          quantity: number | null;
          /** The line item total as returned by WooCommerce. */
          total: string | null;
          /** The line item SKU, if returned. */
          sku: string | null;
        }>;
      };
    };
    /** Update the status of one WooCommerce order. */
    "woocommerce.update_order_status": {
      input: {
        /**
         * The WooCommerce order ID to update.
         * @minimum 1
         */
        orderId: number;
        /** The WooCommerce order status. */
        status: "pending" | "processing" | "on-hold" | "completed" | "cancelled" | "refunded" | "failed" | "trash";
      };
      output: {
        /** The WooCommerce order ID. */
        id: number | null;
        /** The WooCommerce order number. */
        number: string | null;
        /** The order status. */
        status: string | null;
        /** The order currency code. */
        currency: string | null;
        /** The order total as returned by WooCommerce. */
        total: string | null;
        /** The WooCommerce customer ID associated with the order. */
        customerId: number | null;
        /** The order creation timestamp in the store timezone. */
        dateCreated: string | null;
        /** The order update timestamp in the store timezone. */
        dateModified: string | null;
        /** A normalized WooCommerce address payload. */
        billing: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
        /** A normalized WooCommerce address payload. */
        shipping: {
          /** The first name on the address. */
          firstName: string | null;
          /** The last name on the address. */
          lastName: string | null;
          /** The company name on the address. */
          company: string | null;
          /** The first address line. */
          address1: string | null;
          /** The second address line. */
          address2: string | null;
          /** The city name. */
          city: string | null;
          /** The state, region, or province code. */
          state: string | null;
          /** The postal code. */
          postcode: string | null;
          /** The country code. */
          country: string | null;
          /** The email address on the address, if returned. */
          email: string | null;
          /** The phone number on the address, if returned. */
          phone: string | null;
        };
        /** The order line items returned by WooCommerce. */
        lineItems: Array<{
          /** The WooCommerce line item ID. */
          id: number | null;
          /** The related WooCommerce product ID. */
          productId: number | null;
          /** The related WooCommerce variation ID. */
          variationId: number | null;
          /** The line item name. */
          name: string | null;
          /** The ordered quantity. */
          quantity: number | null;
          /** The line item total as returned by WooCommerce. */
          total: string | null;
          /** The line item SKU, if returned. */
          sku: string | null;
        }>;
      };
    };
    /** Update a WooCommerce product by product ID. */
    "woocommerce.update_product": {
      input: {
        /**
         * The WooCommerce product ID to update.
         * @minimum 1
         */
        productId: number;
        /** The product name. */
        name?: string;
        /** The WooCommerce product type, such as simple or variable. */
        type?: string;
        /** The WooCommerce product status. */
        status?: "any" | "draft" | "pending" | "private" | "publish";
        /** The product SKU. */
        sku?: string;
        /** The regular product price as a decimal string. */
        regularPrice?: string;
        /** The sale product price as a decimal string. */
        salePrice?: string;
        /** The full product description. */
        description?: string;
        /** The short product description. */
        shortDescription?: string;
        /** Whether WooCommerce should manage stock for this product. */
        manageStock?: boolean;
        /** The product stock quantity. */
        stockQuantity?: number;
        /** The WooCommerce stock status. */
        stockStatus?: "instock" | "outofstock" | "onbackorder";
        /** The product category references. */
        categories?: Array<{
          /**
           * The WooCommerce term ID.
           * @minimum 1
           */
          id: number;
        }>;
        /** The product tag references. */
        tags?: Array<{
          /**
           * The WooCommerce term ID.
           * @minimum 1
           */
          id: number;
        }>;
        /** The product image references. */
        images?: Array<{
          /**
           * The existing WordPress media attachment ID.
           * @minimum 1
           */
          id?: number;
          /** A public image URL WooCommerce can import. */
          src?: string;
          /** The image display name. */
          name?: string;
          /** The image alt text. */
          alt?: string;
        }>;
        /** The product attributes. */
        attributes?: Array<{
          /**
           * The existing WooCommerce attribute ID.
           * @minimum 1
           */
          id?: number;
          /** The custom attribute name when no attribute ID is used. */
          name?: string;
          /** The attribute display position. */
          position?: number;
          /** Whether the attribute is visible on the product page. */
          visible?: boolean;
          /** Whether the attribute is used for variations. */
          variation?: boolean;
          /** The attribute option labels. */
          options?: Array<string>;
        }>;
      };
      output: {
        /** The WooCommerce product ID. */
        id: number | null;
        /** The product name. */
        name: string | null;
        /** The product URL slug. */
        slug: string | null;
        /** The product permalink. */
        permalink: string | null;
        /** The WooCommerce product type. */
        type: string | null;
        /** The product status. */
        status: string | null;
        /** The product SKU. */
        sku: string | null;
        /** The current product price as returned by WooCommerce. */
        price: string | null;
        /** The regular product price as returned by WooCommerce. */
        regularPrice: string | null;
        /** The sale product price as returned by WooCommerce. */
        salePrice: string | null;
        /** The product stock status. */
        stockStatus: string | null;
        /** The product stock quantity, if tracked. */
        stockQuantity: number | null;
        /** The product categories returned by WooCommerce. */
        categories: Array<{
          /** The WooCommerce category ID. */
          id: number | null;
          /** The category display name. */
          name: string | null;
          /** The category URL slug. */
          slug: string | null;
        }>;
        /** The product images returned by WooCommerce. */
        images: Array<{
          /** The WooCommerce image attachment ID. */
          id: number | null;
          /** The image URL. */
          src: string | null;
          /** The image display name. */
          name: string | null;
          /** The image alt text. */
          alt: string | null;
        }>;
      };
    };
    /** Update one WooCommerce product variation. */
    "woocommerce.update_product_variation": {
      input: {
        /**
         * The WooCommerce product ID.
         * @minimum 1
         */
        productId: number;
        /**
         * The WooCommerce variation ID.
         * @minimum 1
         */
        variationId: number;
        /** The variation SKU. */
        sku?: string;
        /** The regular variation price as a decimal string. */
        regularPrice?: string;
        /** The sale variation price as a decimal string. */
        salePrice?: string;
        /** Whether WooCommerce should manage stock for this variation. */
        manageStock?: boolean;
        /** The variation stock quantity. */
        stockQuantity?: number;
        /** The WooCommerce stock status. */
        stockStatus?: "instock" | "outofstock" | "onbackorder";
        /** The variation attributes. */
        attributes?: Array<{
          /**
           * The existing WooCommerce attribute ID.
           * @minimum 1
           */
          id?: number;
          /** The custom attribute name when no attribute ID is used. */
          name?: string;
          /** The selected attribute option. */
          option: string;
        }>;
        /** A WooCommerce product image reference used in write payloads. */
        image?: {
          /**
           * The existing WordPress media attachment ID.
           * @minimum 1
           */
          id?: number;
          /** A public image URL WooCommerce can import. */
          src?: string;
          /** The image display name. */
          name?: string;
          /** The image alt text. */
          alt?: string;
        };
      };
      output: {
        /** The WooCommerce variation ID. */
        id: number | null;
        /** The variation SKU. */
        sku: string | null;
        /** The current variation price as returned by WooCommerce. */
        price: string | null;
        /** The regular variation price as returned by WooCommerce. */
        regularPrice: string | null;
        /** The sale variation price as returned by WooCommerce. */
        salePrice: string | null;
        /** The variation stock status. */
        stockStatus: string | null;
        /** The variation stock quantity, if tracked. */
        stockQuantity: number | null;
        /** The variation attributes returned by WooCommerce. */
        attributes: Array<{
          /** The WooCommerce attribute ID. */
          id: number | null;
          /** The attribute display name. */
          name: string | null;
          /** The selected attribute option. */
          option: string | null;
        }>;
        /** One WooCommerce product image. */
        image: {
          /** The WooCommerce image attachment ID. */
          id: number | null;
          /** The image URL. */
          src: string | null;
          /** The image display name. */
          name: string | null;
          /** The image alt text. */
          alt: string | null;
        } | null;
      };
    };
    /** Upload one media file to the WordPress media library used by WooCommerce. */
    "woocommerce.upload_media": {
      input: {
        /** A transit-backed file input returned by a previous tool. */
        file?: {
          /** The file name to use for upload. */
          name: string;
          /** The MIME type of the transit file. */
          mimetype?: string;
          /** The transit object key. */
          s3key?: string;
          /** The transit object URL. */
          s3url?: string;
        };
        /** A public URL to download and upload to WordPress media. */
        fileUrl?: string;
        /** Base64-encoded file content to upload. */
        contentBase64?: string;
        /** The file name sent to WordPress media. */
        fileName?: string;
        /** The MIME type sent to WordPress media. */
        mimeType?: string;
        /** The media title. */
        title?: string;
        /** The media alt text. */
        altText?: string;
      };
      output: {
        /** The WordPress media item ID. */
        id: number | null;
        /** The public source URL of the media file. */
        sourceUrl: string | null;
        /** The WordPress media type. */
        mediaType: string | null;
        /** The media MIME type. */
        mimeType: string | null;
        /** The rendered media title. */
        title: string | null;
        /** The media alt text. */
        altText: string | null;
        /** Whether the requested media metadata update was applied. */
        metadataUpdated: boolean | null;
        /** The media metadata update error message when the file upload succeeded. */
        metadataError: string | null;
      };
    };
  }
}
