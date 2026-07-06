import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a VTEX Catalog product by its product ID. */
    "vtex.get_product": {
      input: {
        /**
         * VTEX product unique numerical identifier.
         * @exclusiveMinimum 0
         */
        productId: number;
      };
      output: {
        /** A VTEX product object. The Search API and Catalog API include product, SKU, seller, pricing, specification, and custom fields that vary by store. */
        product: Record<string, unknown>;
      };
    };
    /** List brands registered in a VTEX store catalog. */
    "vtex.list_brands": {
      input: Record<string, never>;
      output: {
        /** Brands returned by VTEX. */
        brands: Array<{
          /** Brand ID. */
          id?: number;
          /** Brand name. */
          name?: string;
          /** Whether the brand is active. */
          isActive?: boolean;
          /** Brand title. */
          title?: string;
          /** Brand SEO meta description. */
          metaTagDescription?: string;
          /** Brand image URL when configured. */
          imageUrl?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve the VTEX store category tree up to a requested depth. */
    "vtex.list_category_tree": {
      input: {
        /**
         * Maximum category level depth to retrieve.
         * @exclusiveMinimum 0
         */
        categoryLevels: number;
      };
      output: {
        /** Top-level VTEX categories. */
        categories: Array<{
          /** Category ID. */
          id?: number;
          /** Category name. */
          name?: string;
          /** Whether this category has child categories. */
          hasChildren?: boolean;
          /** Category storefront URL. */
          url?: string;
          /** Direct child category nodes. Nested child nodes may include the same category fields. */
          children?: Array<Record<string, unknown>>;
          /** Category SEO title. */
          Title?: string;
          /** Category SEO meta description. */
          MetaTagDescription?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve VTEX product IDs and their SKU IDs, optionally scoped by category and product ID range. */
    "vtex.list_product_and_sku_ids": {
      input: {
        /**
         * VTEX category identifier.
         * @exclusiveMinimum 0
         */
        categoryId?: number;
        /**
         * Product ID that starts the VTEX product and SKU ID result range.
         * @exclusiveMinimum 0
         */
        from?: number;
        /**
         * Product ID that ends the VTEX product and SKU ID result range.
         * @exclusiveMinimum 0
         */
        to?: number;
      };
      output: {
        /** SKU ID arrays keyed by VTEX product ID. */
        productIdsByProductId: Record<string, Array<number>>;
        /** Range metadata returned by VTEX. */
        range: {
          /** Total quantity of products in the response range. */
          total: number;
          /** Initial product ID returned by the query. */
          from: number;
          /** Final product ID returned by the query. */
          to: number;
        };
      };
    };
    /** Search VTEX storefront products with full text, filter query expressions, sorting, and pagination. */
    "vtex.search_products": {
      input: {
        /**
         * Full-text product search term sent as the ft query parameter.
         * @minLength 1
         */
        fullText?: string;
        /**
         * VTEX fq filter expressions, such as C:/1000041/1000049/, productId:123, or skuId:456.
         * @minItems 1
         */
        filterQueries?: Array<string>;
        /** VTEX product search sorting method. */
        orderBy?: "OrderByPriceDESC" | "OrderByPriceASC" | "OrderByTopSaleDESC" | "OrderByReviewRateDESC" | "OrderByNameASC" | "OrderByNameDESC" | "OrderByReleaseDateDESC" | "OrderByBestDiscountDESC" | "OrderByScoreDESC";
        /**
         * Initial zero-based item number for VTEX search pagination. VTEX requires this value to be at most 2500.
         * @minimum 0
         * @maximum 2500
         */
        from?: number;
        /**
         * Final item number for VTEX search pagination.
         * @minimum 0
         */
        to?: number;
      };
      output: {
        /** Products returned by VTEX search. */
        products: Array<Record<string, unknown>>;
      };
    };
  }
}
