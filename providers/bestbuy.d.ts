import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Best Buy categories with optional identifier or name filters. */
    "bestbuy.get_categories": {
      input: {
        /**
         * A category identifier or a pipe-separated list of category identifiers.
         * @minLength 1
         */
        id?: string;
        /**
         * A category name or a pipe-separated list of category names.
         * @minLength 1
         */
        name?: string;
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A comma-separated list of upstream fields to include in the response.
         * @minLength 1
         */
        show?: string;
        /**
         * The Best Buy sort expression, such as name.asc or salePrice.dsc.
         * @minLength 1
         */
        sort?: string;
        /** Response format. Only json is supported by this connector. */
        format?: "json";
      };
      output: {
        /** The starting index of the current page. */
        from: number;
        /** The ending index of the current page. */
        to: number;
        /** The current one-based page number. */
        currentPage: number;
        /** The total number of pages available. */
        totalPages: number;
        /** The total number of matching records. */
        total: number;
        /** The query execution time reported by Best Buy. */
        queryTime?: number;
        /** The total request time reported by Best Buy. */
        totalTime?: number;
        /** Whether the response is a partial result set. */
        partial?: boolean;
        /** The canonical URL returned by Best Buy. */
        canonicalUrl?: string;
        /** The categories returned by the request. */
        categories: Array<{
          /**
           * The category identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The category display name.
           * @minLength 1
           */
          name: string;
          /** The canonical URL for the category. */
          url?: string;
          /** Whether the category is active. */
          active?: boolean;
          /** The parent category identifier. */
          parent?: string;
          /** The category path from root to the current category. */
          path?: Array<{
            /**
             * The category identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The category display name.
             * @minLength 1
             */
            name: string;
            [key: string]: unknown;
          }>;
          /** The direct subcategories of the category. */
          subCategories?: Array<{
            /**
             * The subcategory identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The subcategory display name.
             * @minLength 1
             */
            name: string;
            /** The canonical URL for the subcategory. */
            url?: string;
            /** Whether the subcategory is active. */
            active?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Best Buy category by identifier. */
    "bestbuy.get_category_details": {
      input: {
        /**
         * The category identifier to retrieve.
         * @minLength 1
         */
        id: string;
        /**
         * A comma-separated list of upstream fields to include in the response.
         * @minLength 1
         */
        show?: string;
        /** Response format. Only json is supported by this connector. */
        format?: "json";
      };
      output: {
        /**
         * The category identifier.
         * @minLength 1
         */
        id: string;
        /**
         * The category display name.
         * @minLength 1
         */
        name: string;
        /** The canonical URL for the category. */
        url?: string;
        /** Whether the category is active. */
        active?: boolean;
        /** The parent category identifier. */
        parent?: string;
        /** The category path from root to the current category. */
        path?: Array<{
          /**
           * The category identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The category display name.
           * @minLength 1
           */
          name: string;
          [key: string]: unknown;
        }>;
        /** The direct subcategories of the category. */
        subCategories?: Array<{
          /**
           * The subcategory identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The subcategory display name.
           * @minLength 1
           */
          name: string;
          /** The canonical URL for the subcategory. */
          url?: string;
          /** Whether the subcategory is active. */
          active?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Best Buy product by SKU. */
    "bestbuy.get_product_details": {
      input: {
        /** The product SKU. */
        sku: number | string;
        /**
         * A comma-separated list of upstream fields to include in the response.
         * @minLength 1
         */
        show?: string;
        /** Response format. Only json is supported by this connector. */
        format?: "json";
      };
      output: {
        /** The product SKU. */
        sku: number | string;
        /**
         * The product display name.
         * @minLength 1
         */
        name: string;
        /** The upstream product type. */
        type?: string;
        /** The product UPC. */
        upc?: string;
        /** The canonical Best Buy product URL. */
        url?: string;
        /** The primary product image URL. */
        image?: string;
        /** The thumbnail product image URL. */
        thumbnailImage?: string;
        /** The current sale price. */
        salePrice?: number;
        /** The regular list price. */
        regularPrice?: number;
        /** The short product description. */
        shortDescription?: string;
        /** The long product description. */
        longDescription?: string;
        /** The product description text. */
        description?: string;
        /** The product manufacturer. */
        manufacturer?: string;
        /** The number of customer reviews. */
        customerReviewCount?: number;
        /** The average customer review score. */
        customerReviewAverage?: number;
        /** The category hierarchy for the product. */
        categoryPath?: Array<{
          /**
           * The category identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The category display name.
           * @minLength 1
           */
          name: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Best Buy products with optional SKU, UPC, name, category, or price filters. */
    "bestbuy.get_products": {
      input: {
        /** The product SKU. */
        sku?: number | string;
        /**
         * The product UPC to filter by.
         * @minLength 1
         */
        upc?: string;
        /**
         * The product name filter. Plain values are converted into a name clause, and raw Best Buy name expressions are also accepted.
         * @minLength 1
         */
        name?: string;
        /**
         * The salePrice filter. Values such as >100 are converted into a Best Buy comparison clause, and raw salePrice expressions are also accepted.
         * @minLength 1
         */
        salePrice?: string;
        /**
         * The Best Buy category identifier to filter products by.
         * @minLength 1
         */
        categoryPathId?: string;
        /**
         * The Best Buy category identifier alias used by the toolkit to filter products by.
         * @minLength 1
         */
        "categoryPath.id"?: string;
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A comma-separated list of upstream fields to include in the response.
         * @minLength 1
         */
        show?: string;
        /**
         * The Best Buy sort expression, such as name.asc or salePrice.dsc.
         * @minLength 1
         */
        sort?: string;
        /** Response format. Only json is supported by this connector. */
        format?: "json";
      };
      output: {
        /** The starting index of the current page. */
        from: number;
        /** The ending index of the current page. */
        to: number;
        /** The current one-based page number. */
        currentPage: number;
        /** The total number of pages available. */
        totalPages: number;
        /** The total number of matching records. */
        total: number;
        /** The query execution time reported by Best Buy. */
        queryTime?: number;
        /** The total request time reported by Best Buy. */
        totalTime?: number;
        /** Whether the response is a partial result set. */
        partial?: boolean;
        /** The canonical URL returned by Best Buy. */
        canonicalUrl?: string;
        /** The products returned by the request. */
        products: Array<{
          /** The product SKU. */
          sku: number | string;
          /**
           * The product display name.
           * @minLength 1
           */
          name: string;
          /** The upstream product type. */
          type?: string;
          /** The product UPC. */
          upc?: string;
          /** The canonical Best Buy product URL. */
          url?: string;
          /** The primary product image URL. */
          image?: string;
          /** The thumbnail product image URL. */
          thumbnailImage?: string;
          /** The current sale price. */
          salePrice?: number;
          /** The regular list price. */
          regularPrice?: number;
          /** The short product description. */
          shortDescription?: string;
          /** The long product description. */
          longDescription?: string;
          /** The product description text. */
          description?: string;
          /** The product manufacturer. */
          manufacturer?: string;
          /** The number of customer reviews. */
          customerReviewCount?: number;
          /** The average customer review score. */
          customerReviewAverage?: number;
          /** The category hierarchy for the product. */
          categoryPath?: Array<{
            /**
             * The category identifier.
             * @minLength 1
             */
            id: string;
            /**
             * The category display name.
             * @minLength 1
             */
            name: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Best Buy review by identifier. */
    "bestbuy.get_review_details": {
      input: {
        /** The review identifier. */
        id: number | string;
        /**
         * A comma-separated list of upstream fields to include in the response.
         * @minLength 1
         */
        show?: string;
        /** Response format. Only json is supported by this connector. */
        format?: "json";
      };
      output: {
        /** The unique review identifier. */
        id: number | string;
        /** The reviewed product identifier. */
        productId?: string;
        /** The reviewed product SKU. */
        sku?: number | string;
        /** The reviewer display name. */
        reviewer?: string;
        /** The reviewer location string. */
        reviewerLocation?: string;
        /** The review title. */
        title?: string;
        /** The review body text. */
        comment?: string;
        /** The review rating score. */
        rating?: number;
        /** The review submission timestamp. */
        submissionTime?: string;
        /** Whether the reviewer recommends the product. */
        isRecommended?: boolean;
        /** The helpful vote count. */
        helpfulVotes?: number;
        /** The not-helpful vote count. */
        notHelpfulVotes?: number;
        [key: string]: unknown;
      };
    };
    /** List Best Buy product reviews with optional SKU, reviewer, and rating filters. */
    "bestbuy.get_reviews": {
      input: {
        /** The product SKU. */
        sku?: number | string;
        /**
         * The reviewer name used to filter reviews.
         * @minLength 1
         */
        reviewer?: string;
        /**
         * The minimum review rating to include.
         * @minimum 1
         * @maximum 5
         */
        minScore?: number;
        /**
         * The maximum review rating to include.
         * @minimum 1
         * @maximum 5
         */
        maxScore?: number;
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A comma-separated list of upstream fields to include in the response.
         * @minLength 1
         */
        show?: string;
        /**
         * The Best Buy sort expression, such as name.asc or salePrice.dsc.
         * @minLength 1
         */
        sort?: string;
        /** Response format. Only json is supported by this connector. */
        format?: "json";
      };
      output: {
        /** The starting index of the current page. */
        from: number;
        /** The ending index of the current page. */
        to: number;
        /** The current one-based page number. */
        currentPage: number;
        /** The total number of pages available. */
        totalPages: number;
        /** The total number of matching records. */
        total: number;
        /** The query execution time reported by Best Buy. */
        queryTime?: number;
        /** The total request time reported by Best Buy. */
        totalTime?: number;
        /** Whether the response is a partial result set. */
        partial?: boolean;
        /** The canonical URL returned by Best Buy. */
        canonicalUrl?: string;
        /** The reviews returned by the request. */
        reviews: Array<{
          /** The unique review identifier. */
          id: number | string;
          /** The reviewed product identifier. */
          productId?: string;
          /** The reviewed product SKU. */
          sku?: number | string;
          /** The reviewer display name. */
          reviewer?: string;
          /** The reviewer location string. */
          reviewerLocation?: string;
          /** The review title. */
          title?: string;
          /** The review body text. */
          comment?: string;
          /** The review rating score. */
          rating?: number;
          /** The review submission timestamp. */
          submissionTime?: string;
          /** Whether the reviewer recommends the product. */
          isRecommended?: boolean;
          /** The helpful vote count. */
          helpfulVotes?: number;
          /** The not-helpful vote count. */
          notHelpfulVotes?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one Best Buy store by store identifier. */
    "bestbuy.get_store_details": {
      input: {
        /** The store identifier. */
        storeId: number | string;
        /**
         * A comma-separated list of upstream fields to include in the response.
         * @minLength 1
         */
        show?: string;
        /** Response format. Only json is supported by this connector. */
        format?: "json";
      };
      output: {
        /** The store identifier. */
        storeId: number | string;
        /** The store display name. */
        name?: string;
        /** The upstream store type alias. */
        type?: string;
        /** The upstream store type. */
        storeType?: string;
        /** The primary store street address. */
        address?: string;
        /** The secondary store address line. */
        address2?: string;
        /** The store city. */
        city?: string;
        /** The store state or region code. */
        state?: string;
        /** The store postal code. */
        postalCode?: string;
        /** The full store postal code. */
        fullPostalCode?: string;
        /** The store country code. */
        country?: string;
        /** The store phone number. */
        phone?: string;
        /** The store hours string. */
        hours?: string;
        /** The store latitude. */
        lat?: number;
        /** The store longitude. */
        lng?: number;
        /** The distance from the requested origin. */
        distance?: number;
        /** The services offered by the store. */
        services?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List Best Buy stores with optional geographic and attribute filters. */
    "bestbuy.get_stores": {
      input: {
        /** The geographic area filter for listing Best Buy stores. */
        geo?: {
          /**
           * The latitude used for area-based store search.
           * @minimum -90
           * @maximum 90
           */
          lat: number;
          /**
           * The longitude used for area-based store search.
           * @minimum -180
           * @maximum 180
           */
          long: number;
          /**
           * The search radius in miles used for area-based store search.
           * @minimum 0
           */
          radius?: number;
        };
        /**
         * The city name used to filter stores.
         * @minLength 1
         */
        city?: string;
        /**
         * The state code alias used to filter stores.
         * @minLength 1
         */
        state?: string;
        /**
         * The Best Buy region filter used to filter stores.
         * @minLength 1
         */
        region?: string;
        /** The store identifier used to filter stores. */
        storeId?: number;
        /**
         * The store type used to filter stores.
         * @minLength 1
         */
        storeType?: string;
        /**
         * The postal code used to filter stores.
         * @minLength 1
         */
        postalCode?: string;
        /**
         * The services filter used to filter stores.
         * @minLength 1
         */
        services?: string;
        /**
         * The one-based page number to retrieve.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return per page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A comma-separated list of upstream fields to include in the response.
         * @minLength 1
         */
        show?: string;
        /**
         * The Best Buy sort expression, such as name.asc or salePrice.dsc.
         * @minLength 1
         */
        sort?: string;
        /** Response format. Only json is supported by this connector. */
        format?: "json";
      };
      output: {
        /** The starting index of the current page. */
        from: number;
        /** The ending index of the current page. */
        to: number;
        /** The current one-based page number. */
        currentPage: number;
        /** The total number of pages available. */
        totalPages: number;
        /** The total number of matching records. */
        total: number;
        /** The query execution time reported by Best Buy. */
        queryTime?: number;
        /** The total request time reported by Best Buy. */
        totalTime?: number;
        /** Whether the response is a partial result set. */
        partial?: boolean;
        /** The canonical URL returned by Best Buy. */
        canonicalUrl?: string;
        /** The stores returned by the request. */
        stores: Array<{
          /** The store identifier. */
          storeId: number | string;
          /** The store display name. */
          name?: string;
          /** The upstream store type alias. */
          type?: string;
          /** The upstream store type. */
          storeType?: string;
          /** The primary store street address. */
          address?: string;
          /** The secondary store address line. */
          address2?: string;
          /** The store city. */
          city?: string;
          /** The store state or region code. */
          state?: string;
          /** The store postal code. */
          postalCode?: string;
          /** The full store postal code. */
          fullPostalCode?: string;
          /** The store country code. */
          country?: string;
          /** The store phone number. */
          phone?: string;
          /** The store hours string. */
          hours?: string;
          /** The store latitude. */
          lat?: number;
          /** The store longitude. */
          lng?: number;
          /** The distance from the requested origin. */
          distance?: number;
          /** The services offered by the store. */
          services?: Array<string>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
