import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a gift collection and its metadata. */
    "snappy.get_collection": {
      input: {
        /**
         * Collection identifier.
         * @pattern ^[A-Za-z0-9]{8,}$
         */
        collectionId: string;
        /**
         * Comma-separated ISO 3166-1 alpha-2 country codes. Thumbnails and budget data use the first location.
         * @pattern ^[A-Z]{2}(,[A-Z]{2})*$
         */
        "filter[location]"?: string;
        /**
         * Budget bucket selector for thumbnails.
         * @minimum 0
         * @maximum 99999
         */
        "filter[maxPrice]"?: number | null;
        /** Optional fields: `priceRange`, `createdVia`. */
        fields?: Array<"priceRange" | "createdVia">;
        /**
         * Required. Account identifier.
         * @minLength 1
         */
        accountId: string;
      };
      output: {
        /** Named Snappy resource. */
        data?: {
          /** Resource identifier. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a product with optional related entities and computed fields. */
    "snappy.get_product": {
      input: {
        /**
         * Stable product ID.
         * @pattern ^(?:^[A-Za-z0-9]{8,}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$)$
         */
        productId: string;
        /**
         * ISO 3166-1 alpha-2 country code.
         * @pattern ^[A-Z]{2}$
         */
        location?: string;
        /**
         * Inclusive minimum variant price filter.
         * @minimum 0
         */
        "filter[price][gte]"?: number | null;
        /**
         * Inclusive maximum variant price filter.
         * @minimum 0
         */
        "filter[price][lte]"?: number | null;
        /** Related entities to include. */
        include?: Array<"brand" | "tags">;
        /** Computed or expanded product fields. */
        fields?: Array<"options" | "priceRange" | "variantsCount">;
        /**
         * Must be provided to retrieve swag products.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** Product identifier. */
        id: string;
        /** Product title. */
        title: string;
        /** Product catalog. */
        catalog?: string;
        /** Product price range. */
        priceRange?: {
          /** Price in this country. */
          min?: {
            /** Price amount. */
            amount?: number;
            /** ISO currency code. */
            currency?: string;
            [key: string]: unknown;
          };
          /** Price in this country. */
          max?: {
            /** Price amount. */
            amount?: number;
            /** ISO currency code. */
            currency?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Number of product variants. */
        variantsCount?: number;
        /** Creation timestamp. */
        createdAt?: string;
        /** Product media URLs. */
        media?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get a variant with optional pricing and details. */
    "snappy.get_variant": {
      input: {
        /**
         * Variant ID.
         * @pattern ^(?:^[A-Za-z0-9]{8,}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$)$
         */
        variantId: string;
        /**
         * ISO 3166-1 alpha-2 country code.
         * @pattern ^[A-Z]{2}$
         */
        location?: string;
        /** Related entities to include. */
        include?: Array<"brand">;
        /**
         * Comma-separated list of variant-level field expansions.
         *
         * - `pricing` - includes `price` and `priceBreakdown`.
         * - `details` - includes the variant `details` wrapper.
         *
         * Use `include=brand` to include the variant's `brand` object (nullable).
         *
         * When omitted, `price`, `priceBreakdown`, and `details` are not returned in the public response.
         */
        fields?: Array<"pricing" | "details">;
        /**
         * Must be provided to retrieve swag products.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** Variant identifier. */
        id: string;
        /** Variant title. */
        title: string;
        /** Selected option values. */
        selectedOptions?: Record<string, string>;
        /** Whether the variant is taxable. */
        taxable?: boolean;
        /** Price in this country. */
        price?: {
          /** Price amount. */
          amount?: number;
          /** ISO currency code. */
          currency?: string;
          [key: string]: unknown;
        };
        /** Price breakdown. */
        priceBreakdown?: {
          /** Duties and import taxes. */
          ddp?: number;
          /** Shipping fee. */
          shippingFee?: number;
          /** Item price before shipping and duties. */
          itemPrice?: number;
          [key: string]: unknown;
        };
        /** Variant media URLs. */
        media?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get country availability and pricing for a variant. */
    "snappy.get_variant_availability": {
      input: {
        /**
         * Variant ID.
         * @pattern ^(?:^[A-Za-z0-9]{8,}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$)$
         */
        variantId: string;
        /**
         * Must be provided to retrieve swag products.
         * @minLength 1
         */
        accountId?: string;
      };
      output: Record<string, {
          /** Whether the variant is available in this country. */
          isAvailable: boolean;
          /** Price in this country. */
          price?: {
            /** Price amount. */
            amount?: number;
            /** ISO currency code. */
            currency?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
    };
    /** List accounts available to the API key. */
    "snappy.list_accounts": {
      input: {
        /** Case-insensitive substring filter on account name. */
        "filter[name]"?: string;
        /**
         * Comma-separated field projection. Valid values: id, name.
         * @minItems 1
         */
        fields?: Array<"id" | "name">;
        /**
         * 1-indexed page number.
         * @minimum 1
         */
        "page[number]"?: number;
        /**
         * Number of accounts per page (max 1000, default 100).
         * @minimum 1
         * @maximum 1000
         */
        "page[size]"?: number;
      };
      output: {
        /** Resources on this page. */
        data?: Array<{
          /** Resource identifier. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links; use the next link query parameters for the next call. */
        links?: {
          /** First page link. */
          first?: string | null;
          /** Next page link, or null on the last page. */
          next?: string | null;
          /** Previous page link, or null when unavailable. */
          prev?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Browse products in a gift collection. */
    "snappy.list_collection_products": {
      input: {
        /**
         * Collection identifier.
         * @pattern ^[A-Za-z0-9]{8,}$
         */
        collectionId: string;
        /** Which product catalog to search. Required on product list/search endpoints. Defaults to marketplace. */
        "filter[catalog]"?: "marketplace" | "swag" | "giftCards" | "donations";
        /**
         * Free-text search across product title and description.
         * @pattern ^[^<>]*$
         */
        "filter[search]"?: string;
        /**
         * Inclusive minimum price filter.
         * @minimum 0
         */
        "filter[price][gte]"?: number | null;
        /**
         * Inclusive maximum price filter.
         * @minimum 0
         */
        "filter[price][lte]"?: number | null;
        /**
         * ISO 3166-1 alpha-2 country code.
         * @pattern ^[A-Z]{2}$
         */
        location?: string;
        /** Related entities to include. */
        include?: Array<"brand" | "tags">;
        /** Computed or expanded product fields for list responses. */
        fields?: Array<"priceRange" | "variantsCount">;
        /** Opaque continuation token from the previous response links.next. */
        "page[cursor]"?: string;
        /**
         * Number of products per page (max 300, default 100).
         * @minimum 1
         * @maximum 300
         */
        "page[size]"?: number;
        /**
         * JSON:API sort parameter. Single field; prefix with `-` for descending.
         * @pattern ^-?(minPrice|createdAt)$
         */
        sort?: string;
        /**
         * Must be provided to retrieve swag products.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** Resources on this page. */
        data?: Array<{
          /** Product identifier. */
          id: string;
          /** Product title. */
          title: string;
          /** Product catalog. */
          catalog?: string;
          /** Product price range. */
          priceRange?: {
            /** Price in this country. */
            min?: {
              /** Price amount. */
              amount?: number;
              /** ISO currency code. */
              currency?: string;
              [key: string]: unknown;
            };
            /** Price in this country. */
            max?: {
              /** Price amount. */
              amount?: number;
              /** ISO currency code. */
              currency?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Number of product variants. */
          variantsCount?: number;
          /** Creation timestamp. */
          createdAt?: string;
          /** Product media URLs. */
          media?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Pagination links; use the next link query parameters for the next call. */
        links?: {
          /** First page link. */
          first?: string | null;
          /** Next page link, or null on the last page. */
          next?: string | null;
          /** Previous page link, or null when unavailable. */
          prev?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List gift collections for an account. */
    "snappy.list_collections": {
      input: {
        /**
         * Comma-separated ISO 3166-1 alpha-2 country codes. Only collections supporting all locations are returned.
         * @pattern ^[A-Z]{2}(,[A-Z]{2})*$
         */
        "filter[location]"?: string;
        /**
         * Budget bucket selector for thumbnails.
         * @minimum 0
         * @maximum 99999
         */
        "filter[maxPrice]"?: number | null;
        /** Comma-separated collection tags (`gifts`, `swag`, `custom`). */
        "filter[tag]"?: Array<"gifts" | "swag" | "custom">;
        /**
         * Free-text search on collection name (max 100 characters).
         * @maxLength 100
         */
        "filter[search]"?: string;
        /** Optional fields to include. */
        fields?: Array<"priceRange" | "description" | "createdAt" | "updatedAt" | "createdVia">;
        /** Sort field. Prefix with `-` for descending. Defaults to `rank`. */
        sort?: "rank" | "name" | "-name" | "createdAt" | "-createdAt";
        /**
         * 1-indexed page number.
         * @minimum 1
         */
        "page[number]"?: number;
        /**
         * Number of collections per page (max 150, default 100).
         * @minimum 1
         * @maximum 150
         */
        "page[size]"?: number;
        /**
         * Required. Account identifier.
         * @minLength 1
         */
        accountId: string;
      };
      output: {
        /** Resources on this page. */
        data?: Array<{
          /** Resource identifier. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links; use the next link query parameters for the next call. */
        links?: {
          /** First page link. */
          first?: string | null;
          /** Next page link, or null on the last page. */
          next?: string | null;
          /** Previous page link, or null when unavailable. */
          prev?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search tags used to filter the gift catalog. */
    "snappy.list_product_tags": {
      input: {
        /**
         * Search string to filter tags by name (minimum 3 characters).
         * @minLength 3
         */
        "filter[name]"?: string;
        /**
         * 1-indexed page number.
         * @minimum 1
         */
        "page[number]"?: number;
        /**
         * Number of tags per page (max 100, default 100).
         * @minimum 1
         * @maximum 100
         */
        "page[size]"?: number;
        /**
         * Must be provided to retrieve swag products.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** Resources on this page. */
        data?: Array<{
          /** Resource identifier. */
          id?: string;
          /** Resource name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Pagination links; use the next link query parameters for the next call. */
        links?: {
          /** First page link. */
          first?: string | null;
          /** Next page link, or null on the last page. */
          next?: string | null;
          /** Previous page link, or null when unavailable. */
          prev?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List orderable variants of a product with prices and pagination. */
    "snappy.list_product_variants": {
      input: {
        /**
         * Stable product ID.
         * @pattern ^(?:^[A-Za-z0-9]{8,}$|^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$)$
         */
        productId: string;
        /**
         * ISO 3166-1 alpha-2 country code.
         * @pattern ^[A-Z]{2}$
         */
        location?: string;
        /**
         * Inclusive minimum variant price filter.
         * @minimum 0
         */
        "filter[price][gte]"?: number | null;
        /**
         * Inclusive maximum variant price filter.
         * @minimum 0
         */
        "filter[price][lte]"?: number | null;
        /** Related entities to include. */
        include?: Array<"brand">;
        /**
         * Comma-separated list of variant-level field expansions.
         *
         * - `pricing` - includes `price` and `priceBreakdown`.
         * - `details` - includes the variant `details` wrapper.
         *
         * Use `include=brand` to include the variant's `brand` object (nullable).
         *
         * When omitted, `price`, `priceBreakdown`, and `details` are not returned in the public response.
         */
        fields?: Array<"pricing" | "details">;
        /**
         * 1-indexed page number.
         * @minimum 1
         */
        "page[number]"?: number;
        /**
         * Number of variants per page (max 300, default 100).
         * @minimum 1
         * @maximum 300
         */
        "page[size]"?: number;
        /**
         * Must be provided to retrieve swag products.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** Resources on this page. */
        data?: Array<{
          /** Variant identifier. */
          id: string;
          /** Variant title. */
          title: string;
          /** Selected option values. */
          selectedOptions?: Record<string, string>;
          /** Whether the variant is taxable. */
          taxable?: boolean;
          /** Price in this country. */
          price?: {
            /** Price amount. */
            amount?: number;
            /** ISO currency code. */
            currency?: string;
            [key: string]: unknown;
          };
          /** Price breakdown. */
          priceBreakdown?: {
            /** Duties and import taxes. */
            ddp?: number;
            /** Shipping fee. */
            shippingFee?: number;
            /** Item price before shipping and duties. */
            itemPrice?: number;
            [key: string]: unknown;
          };
          /** Variant media URLs. */
          media?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Pagination links; use the next link query parameters for the next call. */
        links?: {
          /** First page link. */
          first?: string | null;
          /** Next page link, or null on the last page. */
          next?: string | null;
          /** Previous page link, or null when unavailable. */
          prev?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search the gift catalog by price, brand, tags, and text. */
    "snappy.list_products": {
      input: {
        /** Which product catalog to search. Required on product list/search endpoints. Defaults to marketplace. */
        "filter[catalog]"?: "marketplace" | "swag" | "giftCards" | "donations";
        /**
         * Free-text search across product title and description.
         * @pattern ^[^<>]*$
         */
        "filter[search]"?: string;
        /**
         * Inclusive minimum price filter.
         * @minimum 0
         */
        "filter[price][gte]"?: number | null;
        /**
         * Inclusive maximum price filter.
         * @minimum 0
         */
        "filter[price][lte]"?: number | null;
        /**
         * ISO 3166-1 alpha-2 country code.
         * @pattern ^[A-Z]{2}$
         */
        location?: string;
        /** Related entities to include. */
        include?: Array<"brand" | "tags">;
        /** Computed or expanded product fields for list responses. */
        fields?: Array<"priceRange" | "variantsCount">;
        /** Opaque continuation token from the previous response links.next. */
        "page[cursor]"?: string;
        /**
         * Number of products per page (max 300, default 100).
         * @minimum 1
         * @maximum 300
         */
        "page[size]"?: number;
        /**
         * JSON:API sort parameter. Single field; prefix with `-` for descending.
         * @pattern ^-?(minPrice|createdAt)$
         */
        sort?: string;
        /** Comma-separated list of brand ids (OR semantics). */
        "filter[brandId]"?: Array<string>;
        /** Case-insensitive substring search on brand name. */
        "filter[brandName]"?: string;
        /** Comma-separated list of tag ids (OR semantics). */
        "filter[tagId]"?: Array<string>;
        /**
         * Must be provided to retrieve swag products.
         * @minLength 1
         */
        accountId?: string;
      };
      output: {
        /** Resources on this page. */
        data?: Array<{
          /** Product identifier. */
          id: string;
          /** Product title. */
          title: string;
          /** Product catalog. */
          catalog?: string;
          /** Product price range. */
          priceRange?: {
            /** Price in this country. */
            min?: {
              /** Price amount. */
              amount?: number;
              /** ISO currency code. */
              currency?: string;
              [key: string]: unknown;
            };
            /** Price in this country. */
            max?: {
              /** Price amount. */
              amount?: number;
              /** ISO currency code. */
              currency?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Number of product variants. */
          variantsCount?: number;
          /** Creation timestamp. */
          createdAt?: string;
          /** Product media URLs. */
          media?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Pagination links; use the next link query parameters for the next call. */
        links?: {
          /** First page link. */
          first?: string | null;
          /** Next page link, or null on the last page. */
          next?: string | null;
          /** Previous page link, or null when unavailable. */
          prev?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
