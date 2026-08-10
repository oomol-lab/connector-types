import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Slickdeals shopping articles with optional store, sorting, and pagination filters. */
    "slickdeals.list_articles": {
      input: {
        /** The article field used for sorting. */
        sortBy?: "created" | "modified";
        /** The order used to sort results. */
        sortOrder?: "asc" | "desc";
        /**
         * The Slickdeals store ID used to filter results.
         * @exclusiveMinimum 0
         */
        storeId?: number;
        /**
         * The 1-based result page to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 5
         * @maximum 100
         */
        perPage?: number;
        /**
         * The UTM campaign value added to links returned by Slickdeals.
         * @minLength 1
         * @pattern \S
         */
        utmCampaign?: string;
      };
      output: {
        /** The articles returned by Slickdeals. */
        articles: Array<{
          /** The Slickdeals article ID. */
          id?: number;
          /** The article title. */
          title?: string;
          /** The article subtitle. */
          subtitle?: string;
          /** The article author. */
          author?: string;
          /**
           * When the article was published.
           * @format date-time
           */
          publishedAt?: string | null;
          /**
           * When the article was last modified.
           * @format date-time
           */
          modifiedAt?: string | null;
          /**
           * The featured image URL.
           * @format uri
           */
          featuredImage?: string;
          /**
           * The Slickdeals article URL.
           * @format uri
           */
          internalLink?: string;
          /** A short article excerpt. */
          excerpt?: string;
          /** The article content. */
          content?: string;
          [key: string]: unknown;
        }>;
        /** Pagination information for the returned collection. */
        pagination: {
          /**
           * The current result page.
           * @exclusiveMinimum 0
           */
          page: number;
          /**
           * The requested number of results per page.
           * @exclusiveMinimum 0
           */
          perPage: number;
        };
      };
    };
    /** List Slickdeals brands that can be used to filter deals. */
    "slickdeals.list_brands": {
      input: Record<string, never>;
      output: {
        /** The brands returned by Slickdeals. */
        brands: Array<{
          /** The Slickdeals brand ID. */
          id?: number;
          /** The brand name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Slickdeals categories that can be used to filter deals and coupons. */
    "slickdeals.list_categories": {
      input: Record<string, never>;
      output: {
        /** The categories returned by Slickdeals. */
        categories: Array<{
          /** The Slickdeals category ID. */
          id?: number;
          /** The category name. */
          name?: string;
          /** The full category hierarchy path. */
          path?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Slickdeals coupons with store, category, country, state, and sorting filters. */
    "slickdeals.list_coupons": {
      input: {
        /**
         * The Slickdeals category ID used to filter coupons.
         * @exclusiveMinimum 0
         */
        categoryId?: number;
        /**
         * The Slickdeals store ID used to filter results.
         * @exclusiveMinimum 0
         */
        storeId?: number;
        /** The coupon type to return. */
        type?: "all" | "code" | "discount" | "print";
        /** Whether to return coupons only from monetized stores. */
        monetizedOnly?: boolean;
        /** The coupon field used for sorting. */
        sortBy?: "created" | "modified" | "expired" | "redemptions";
        /** The store country used to filter results. */
        country?: "US" | "UK" | "CA" | "AU";
        /** Whether to return only sitewide coupons. */
        sitewide?: boolean;
        /** The order used to sort results. */
        sortOrder?: "asc" | "desc";
        /** Whether to return expired instead of active coupons. */
        expired?: boolean;
        /**
         * The 1-based result page to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 5
         * @maximum 100
         */
        perPage?: number;
        /**
         * The UTM campaign value added to links returned by Slickdeals.
         * @minLength 1
         * @pattern \S
         */
        utmCampaign?: string;
      };
      output: {
        /** The coupons returned by Slickdeals. */
        coupons: Array<{
          /** The Slickdeals coupon ID. */
          id?: number;
          /** The coupon title. */
          title?: string;
          /** The coupon description and restrictions. */
          description?: string;
          /** The coupon code when one is required. */
          code?: string;
          /**
           * The Slickdeals coupon URL.
           * @format uri
           */
          internalLink?: string;
          /**
           * The Slickdeals redirect URL for the coupon.
           * @format uri
           */
          externalLink?: string;
          /** The coupon type returned by Slickdeals. */
          type?: string;
          /** A store returned by Slickdeals. */
          store?: {
            /** The Slickdeals store ID. */
            id?: number;
            /** The store name. */
            name?: string;
            /** The store domain. */
            domain?: string;
            /** The store country code. */
            country?: string;
            /**
             * The Slickdeals page for the store.
             * @format uri
             */
            internalLink?: string;
            /** Whether Slickdeals monetizes links for this store. */
            monetized?: boolean;
            /**
             * The Slickdeals redirect URL for the store.
             * @format uri
             */
            externalLink?: string;
            [key: string]: unknown;
          };
          /** Categories associated with the coupon. */
          categories?: Array<{
            /** The Slickdeals category ID. */
            id?: number;
            /** The category name. */
            name?: string;
            /** The full category hierarchy path. */
            path?: string;
            [key: string]: unknown;
          }>;
          /**
           * When the coupon becomes active.
           * @format date-time
           */
          startAt?: string | null;
          /**
           * When the coupon expires.
           * @format date-time
           */
          expireAt?: string | null;
          /**
           * When the coupon was last modified.
           * @format date-time
           */
          modifiedAt?: string | null;
          /** The percentage discount represented as text. */
          percentOff?: string;
          /** The fixed discount represented as text. */
          dollarsOff?: string;
          /**
           * The total redemption count.
           * @minimum 0
           */
          redemptions?: number;
          /**
           * The redemption count during the last 24 hours.
           * @minimum 0
           */
          redemptions_24hrs?: number;
          /** Whether the coupon is exclusive to Slickdeals. */
          exclusive?: boolean;
          /** Whether the coupon applies store-wide. */
          sitewide?: boolean;
          /** Whether Slickdeals has verified the coupon. */
          verified?: boolean;
          [key: string]: unknown;
        }>;
        /** Pagination information for the returned collection. */
        pagination: {
          /**
           * The current result page.
           * @exclusiveMinimum 0
           */
          page: number;
          /**
           * The requested number of results per page.
           * @exclusiveMinimum 0
           */
          perPage: number;
        };
      };
    };
    /** List Slickdeals deals with store, category, brand, popularity, and date filters. */
    "slickdeals.list_deals": {
      input: {
        /**
         * Store IDs whose deals should be returned.
         * @minItems 1
         */
        includeStoreIds?: Array<number>;
        /**
         * Category IDs whose deals should be returned.
         * @minItems 1
         */
        includeCategoryIds?: Array<number>;
        /**
         * Brand IDs whose deals should be returned.
         * @minItems 1
         */
        includeBrandIds?: Array<number>;
        /** The minimum deal popularity to return. */
        type?: "all" | "popularOrBetter" | "frontpage";
        /**
         * Return only deals created after this date.
         * @format date
         */
        createdAfter?: string;
        /** The order used to sort results. */
        sortOrder?: "asc" | "desc";
        /** Whether to return expired instead of active deals. */
        expired?: boolean;
        /**
         * The 1-based result page to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 5
         * @maximum 100
         */
        perPage?: number;
        /**
         * The UTM campaign value added to links returned by Slickdeals.
         * @minLength 1
         * @pattern \S
         */
        utmCampaign?: string;
      };
      output: {
        /** The deals returned by Slickdeals. */
        deals: Array<{
          /** The Slickdeals deal ID. */
          id?: number;
          /** The deal title. */
          title?: string;
          /** The deal content, which may contain HTML. */
          content?: string;
          /** The Slickdeals user who posted the deal. */
          author?: string;
          /** Author avatar URLs keyed by image size. */
          authorAvatars?: Record<string, unknown>;
          /**
           * The Slickdeals deal URL.
           * @format uri
           */
          internalLink?: string;
          /**
           * The Slickdeals redirect URL for the deal.
           * @format uri
           */
          externalLink?: string;
          /**
           * The number of deal comments.
           * @minimum 0
           */
          comments?: number;
          /**
           * The number of deal views.
           * @minimum 0
           */
          views?: number;
          /** The Slickdeals community score. */
          score?: number;
          /** The Slickdeals community thumbs score. */
          thumbs?: number;
          /** The deal type returned by Slickdeals. */
          type?: string;
          /** Whether Slickdeals marks this as a fire deal. */
          fireDeal?: boolean;
          /**
           * When the deal was created.
           * @format date-time
           */
          createdAt?: string | null;
          /**
           * When the deal was last modified.
           * @format date-time
           */
          modifiedAt?: string | null;
          /** When the deal expired as a Unix timestamp. */
          expiredAt?: number | null;
          /** The original list price. */
          listPrice?: number | null;
          /** The final deal price. */
          finalPrice?: number | null;
          /**
           * The featured deal image URL.
           * @format uri
           */
          featuredImage?: string;
          /** A category returned by Slickdeals. */
          primaryCategory?: {
            /** The Slickdeals category ID. */
            id?: number;
            /** The category name. */
            name?: string;
            /** The full category hierarchy path. */
            path?: string;
            [key: string]: unknown;
          };
          /** Categories associated with the deal. */
          categories?: Array<{
            /** The Slickdeals category ID. */
            id?: number;
            /** The category name. */
            name?: string;
            /** The full category hierarchy path. */
            path?: string;
            [key: string]: unknown;
          }>;
          /** Image attachments associated with the deal. */
          images?: Array<{
            /** Whether this is the primary deal image. */
            primary?: boolean;
            /** Image URLs keyed by rendition size. */
            urls?: Record<string, string>;
            [key: string]: unknown;
          }>;
          /** A store returned by Slickdeals. */
          primaryStore?: {
            /** The Slickdeals store ID. */
            id?: number;
            /** The store name. */
            name?: string;
            /** The store domain. */
            domain?: string;
            /** The store country code. */
            country?: string;
            /**
             * The Slickdeals page for the store.
             * @format uri
             */
            internalLink?: string;
            /** Whether Slickdeals monetizes links for this store. */
            monetized?: boolean;
            /**
             * The Slickdeals redirect URL for the store.
             * @format uri
             */
            externalLink?: string;
            [key: string]: unknown;
          };
          /** Stores associated with the deal. */
          stores?: Array<{
            /** The Slickdeals store ID. */
            id?: number;
            /** The store name. */
            name?: string;
            /** The store domain. */
            domain?: string;
            /** The store country code. */
            country?: string;
            /**
             * The Slickdeals page for the store.
             * @format uri
             */
            internalLink?: string;
            /** Whether Slickdeals monetizes links for this store. */
            monetized?: boolean;
            /**
             * The Slickdeals redirect URL for the store.
             * @format uri
             */
            externalLink?: string;
            [key: string]: unknown;
          }>;
          /** Coupons associated with the deal. */
          coupons?: Array<{
            /** The Slickdeals coupon ID. */
            id?: number;
            /** The coupon title. */
            title?: string;
            /** The coupon description and restrictions. */
            description?: string;
            /** The coupon code when one is required. */
            code?: string;
            /**
             * The Slickdeals coupon URL.
             * @format uri
             */
            internalLink?: string;
            /**
             * The Slickdeals redirect URL for the coupon.
             * @format uri
             */
            externalLink?: string;
            /** The coupon type returned by Slickdeals. */
            type?: string;
            /** A store returned by Slickdeals. */
            store?: {
              /** The Slickdeals store ID. */
              id?: number;
              /** The store name. */
              name?: string;
              /** The store domain. */
              domain?: string;
              /** The store country code. */
              country?: string;
              /**
               * The Slickdeals page for the store.
               * @format uri
               */
              internalLink?: string;
              /** Whether Slickdeals monetizes links for this store. */
              monetized?: boolean;
              /**
               * The Slickdeals redirect URL for the store.
               * @format uri
               */
              externalLink?: string;
              [key: string]: unknown;
            };
            /** Categories associated with the coupon. */
            categories?: Array<{
              /** The Slickdeals category ID. */
              id?: number;
              /** The category name. */
              name?: string;
              /** The full category hierarchy path. */
              path?: string;
              [key: string]: unknown;
            }>;
            /**
             * When the coupon becomes active.
             * @format date-time
             */
            startAt?: string | null;
            /**
             * When the coupon expires.
             * @format date-time
             */
            expireAt?: string | null;
            /**
             * When the coupon was last modified.
             * @format date-time
             */
            modifiedAt?: string | null;
            /** The percentage discount represented as text. */
            percentOff?: string;
            /** The fixed discount represented as text. */
            dollarsOff?: string;
            /**
             * The total redemption count.
             * @minimum 0
             */
            redemptions?: number;
            /**
             * The redemption count during the last 24 hours.
             * @minimum 0
             */
            redemptions_24hrs?: number;
            /** Whether the coupon is exclusive to Slickdeals. */
            exclusive?: boolean;
            /** Whether the coupon applies store-wide. */
            sitewide?: boolean;
            /** Whether Slickdeals has verified the coupon. */
            verified?: boolean;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Pagination information for the returned collection. */
        pagination: {
          /**
           * The current result page.
           * @exclusiveMinimum 0
           */
          page: number;
          /**
           * The requested number of results per page.
           * @exclusiveMinimum 0
           */
          perPage: number;
        };
      };
    };
    /** List Slickdeals stores with optional name, monetization, country, and pagination filters. */
    "slickdeals.list_stores": {
      input: {
        /**
         * The exact store name to retrieve.
         * @minLength 1
         * @pattern \S
         */
        storeName?: string;
        /** Whether to return only monetized stores. */
        monetizedOnly?: boolean;
        /** The store country used to filter results. */
        country?: "US" | "UK" | "CA" | "AU";
        /**
         * The 1-based result page to retrieve.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of results to return per page.
         * @minimum 5
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The stores returned by Slickdeals. */
        stores: Array<{
          /** The Slickdeals store ID. */
          id?: number;
          /** The store name. */
          name?: string;
          /** The store domain. */
          domain?: string;
          /** The store country code. */
          country?: string;
          /**
           * The Slickdeals page for the store.
           * @format uri
           */
          internalLink?: string;
          /** Whether Slickdeals monetizes links for this store. */
          monetized?: boolean;
          /**
           * The Slickdeals redirect URL for the store.
           * @format uri
           */
          externalLink?: string;
          [key: string]: unknown;
        }>;
        /** Pagination information for the returned collection. */
        pagination: {
          /**
           * The current result page.
           * @exclusiveMinimum 0
           */
          page: number;
          /**
           * The requested number of results per page.
           * @exclusiveMinimum 0
           */
          perPage: number;
        };
      };
    };
    /** List the coupon and deal type values supported by the Slickdeals Syndication API. */
    "slickdeals.list_types": {
      input: Record<string, never>;
      output: {
        /** The supported coupon types. */
        couponTypes: Array<string>;
        /** The supported deal types. */
        dealTypes: Array<string>;
      };
    };
  }
}
