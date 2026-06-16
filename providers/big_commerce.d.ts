import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a BigCommerce catalog product from JSON-friendly fields. */
    "big_commerce.create_product": {
      input: {
        /**
         * The product name.
         * @minLength 1
         * @maxLength 250
         */
        name: string;
        /** The BigCommerce product type. */
        type: "physical" | "digital";
        /**
         * The product price in the store currency.
         * @minimum 0
         */
        price: number;
        /**
         * The product SKU.
         * @minLength 1
         * @maxLength 255
         */
        sku?: string;
        /**
         * The product weight.
         * @minimum 0
         */
        weight: number;
        /** The product description as HTML or plain text. */
        description?: string;
        /** Whether the product is visible in the storefront. */
        isVisible?: boolean;
        /** The BigCommerce inventory tracking mode for the product. */
        inventoryTracking?: "none" | "product" | "variant";
        /** The product inventory level. */
        inventoryLevel?: number;
        /**
         * BigCommerce category IDs assigned to the product.
         * @minItems 1
         */
        categories?: Array<number>;
        /**
         * The BigCommerce brand ID.
         * @minimum 1
         */
        brandId?: number;
        /**
         * The custom URL path for the product.
         * @minLength 1
         */
        customUrl?: string;
      };
      output: {
        /** A normalized BigCommerce product. */
        product: {
          /**
           * The BigCommerce product ID.
           * @minimum 1
           */
          id: number;
          /** The product name. */
          name: string;
          /** The product type returned by BigCommerce. */
          type: string | null;
          /** The product SKU when present. */
          sku: string | null;
          /** The product price in the store currency. */
          price: number | null;
          /** The product inventory level when returned. */
          inventoryLevel: number | null;
          /** Whether the product is visible in the storefront. */
          isVisible: boolean | null;
          /** The product custom URL path when returned. */
          customUrl: string | null;
          /** The raw product object returned by BigCommerce. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a BigCommerce catalog product by ID. */
    "big_commerce.delete_product": {
      input: {
        /**
         * The BigCommerce product ID.
         * @minimum 1
         */
        productId: number;
      };
      output: {
        /** Whether the product delete request succeeded. */
        success: boolean;
        /**
         * The BigCommerce product ID.
         * @minimum 1
         */
        productId: number;
      };
    };
    /** Retrieve one BigCommerce catalog product by ID. */
    "big_commerce.get_product": {
      input: {
        /**
         * The BigCommerce product ID.
         * @minimum 1
         */
        productId: number;
        /**
         * Related product resources to include.
         * @minItems 1
         */
        include?: Array<"variants" | "images" | "custom_fields" | "bulk_pricing_rules" | "primary_image" | "modifiers" | "options" | "videos">;
        /**
         * Product fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<string>;
        /**
         * Product fields to exclude from the response.
         * @minItems 1
         */
        excludeFields?: Array<string>;
      };
      output: {
        /** A normalized BigCommerce product. */
        product: {
          /**
           * The BigCommerce product ID.
           * @minimum 1
           */
          id: number;
          /** The product name. */
          name: string;
          /** The product type returned by BigCommerce. */
          type: string | null;
          /** The product SKU when present. */
          sku: string | null;
          /** The product price in the store currency. */
          price: number | null;
          /** The product inventory level when returned. */
          inventoryLevel: number | null;
          /** Whether the product is visible in the storefront. */
          isVisible: boolean | null;
          /** The product custom URL path when returned. */
          customUrl: string | null;
          /** The raw product object returned by BigCommerce. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List BigCommerce catalog products with common filters and pagination. */
    "big_commerce.list_products": {
      input: {
        /**
         * The product page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of products to return.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /**
         * Search products by keyword.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Filter products by name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter products by SKU.
         * @minLength 1
         */
        sku?: string;
        /** Filter products by storefront visibility. */
        isVisible?: boolean;
        /**
         * Related product resources to include.
         * @minItems 1
         */
        include?: Array<"variants" | "images" | "custom_fields" | "bulk_pricing_rules" | "primary_image" | "modifiers" | "options" | "videos">;
        /**
         * Product fields to include in the response.
         * @minItems 1
         */
        includeFields?: Array<string>;
        /**
         * Product fields to exclude from the response.
         * @minItems 1
         */
        excludeFields?: Array<string>;
        /** The product field to sort by. */
        sort?: "id" | "name" | "sku" | "price" | "date_created" | "date_modified" | "inventory_level" | "is_visible";
        /** The sort direction for product list results. */
        direction?: "asc" | "desc";
      };
      output: {
        /** Products returned by BigCommerce. */
        products: Array<{
          /**
           * The BigCommerce product ID.
           * @minimum 1
           */
          id: number;
          /** The product name. */
          name: string;
          /** The product type returned by BigCommerce. */
          type: string | null;
          /** The product SKU when present. */
          sku: string | null;
          /** The product price in the store currency. */
          price: number | null;
          /** The product inventory level when returned. */
          inventoryLevel: number | null;
          /** Whether the product is visible in the storefront. */
          isVisible: boolean | null;
          /** The product custom URL path when returned. */
          customUrl: string | null;
          /** The raw product object returned by BigCommerce. */
          raw: Record<string, unknown>;
        }>;
        /** BigCommerce pagination metadata. */
        pagination: {
          /** The total number of matching products. */
          total: number | null;
          /** The number of products returned in this page. */
          count: number | null;
          /** The requested page size. */
          perPage: number | null;
          /** The current page number. */
          currentPage: number | null;
          /** The total number of pages. */
          totalPages: number | null;
        };
      };
    };
    /** Update provided fields on a BigCommerce catalog product. */
    "big_commerce.update_product": {
      input: {
        /**
         * The BigCommerce product ID.
         * @minimum 1
         */
        productId: number;
        /**
         * The product name.
         * @minLength 1
         * @maxLength 250
         */
        name?: string;
        /** The BigCommerce product type. */
        type?: "physical" | "digital";
        /**
         * The product price in the store currency.
         * @minimum 0
         */
        price?: number;
        /**
         * The product SKU.
         * @minLength 1
         * @maxLength 255
         */
        sku?: string;
        /**
         * The product weight.
         * @minimum 0
         */
        weight?: number;
        /** The product description as HTML or plain text. */
        description?: string;
        /** Whether the product is visible in the storefront. */
        isVisible?: boolean;
        /** The BigCommerce inventory tracking mode for the product. */
        inventoryTracking?: "none" | "product" | "variant";
        /** The product inventory level. */
        inventoryLevel?: number;
        /**
         * BigCommerce category IDs assigned to the product.
         * @minItems 1
         */
        categories?: Array<number>;
        /**
         * The BigCommerce brand ID.
         * @minimum 1
         */
        brandId?: number;
        /**
         * The custom URL path for the product.
         * @minLength 1
         */
        customUrl?: string;
      };
      output: {
        /** A normalized BigCommerce product. */
        product: {
          /**
           * The BigCommerce product ID.
           * @minimum 1
           */
          id: number;
          /** The product name. */
          name: string;
          /** The product type returned by BigCommerce. */
          type: string | null;
          /** The product SKU when present. */
          sku: string | null;
          /** The product price in the store currency. */
          price: number | null;
          /** The product inventory level when returned. */
          inventoryLevel: number | null;
          /** Whether the product is visible in the storefront. */
          isVisible: boolean | null;
          /** The product custom URL path when returned. */
          customUrl: string | null;
          /** The raw product object returned by BigCommerce. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
