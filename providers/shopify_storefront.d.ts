import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add merchandise lines to a Shopify Storefront cart. */
    "shopify_storefront.add_cart_lines": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        cartId: string;
        /**
         * Cart lines to add.
         * @minItems 1
         */
        lines: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          merchandiseId: string;
          /**
           * The quantity for this cart line.
           * @minimum 1
           */
          quantity: number;
          /** Custom attributes to attach to this cart line. */
          attributes?: Array<{
            /**
             * The attribute key.
             * @minLength 1
             */
            key: string;
            /** The attribute value. */
            value: string;
          }>;
        }>;
      };
      output: {
        /** A normalized Shopify cart. */
        cart: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /**
           * The URL where the customer can complete checkout.
           * @format uri
           */
          checkoutUrl: string;
          /** The cart creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The cart update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The total quantity of all cart lines.
           * @minimum 0
           */
          totalQuantity: number;
          /** A Shopify money amount. */
          subtotalAmount: {
            /** The decimal amount encoded as a string. */
            amount: string;
            /** The ISO currency code. */
            currencyCode: string;
          } | null;
          /** A Shopify money amount. */
          totalAmount: {
            /** The decimal amount encoded as a string. */
            amount: string;
            /** The ISO currency code. */
            currencyCode: string;
          } | null;
          /** Cart lines returned by Shopify. */
          lines: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id: string;
            /**
             * The cart line quantity.
             * @minimum 0
             */
            quantity: number;
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            merchandiseId: string;
            /** The merchandise title when returned by Shopify. */
            merchandiseTitle: string | null;
            /** The merchandise SKU when returned by Shopify. */
            merchandiseSku: string | null;
            /**
             * A Shopify GraphQL pagination cursor.
             * @minLength 1
             */
            cursor: string | null;
            /** The raw object returned by Shopify Storefront GraphQL. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by Shopify Storefront GraphQL. */
          raw: Record<string, unknown>;
        } | null;
        /** User errors returned by Shopify. */
        userErrors: Array<{
          /** The input path for this error. */
          field: Array<string>;
          /** The user error message. */
          message: string;
        }>;
      };
    };
    /** Create a Shopify Storefront cart with optional initial lines. */
    "shopify_storefront.create_cart": {
      input: {
        /**
         * Initial cart lines.
         * @minItems 1
         */
        lines?: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          merchandiseId: string;
          /**
           * The quantity for this cart line.
           * @minimum 1
           */
          quantity: number;
          /** Custom attributes to attach to this cart line. */
          attributes?: Array<{
            /**
             * The attribute key.
             * @minLength 1
             */
            key: string;
            /** The attribute value. */
            value: string;
          }>;
        }>;
        /** Optional Shopify cart buyer identity input. */
        buyerIdentity?: Record<string, unknown>;
        /** Custom attributes to attach to the cart. */
        attributes?: Array<{
          /**
           * The attribute key.
           * @minLength 1
           */
          key: string;
          /** The attribute value. */
          value: string;
        }>;
      };
      output: {
        /** A normalized Shopify cart. */
        cart: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /**
           * The URL where the customer can complete checkout.
           * @format uri
           */
          checkoutUrl: string;
          /** The cart creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The cart update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The total quantity of all cart lines.
           * @minimum 0
           */
          totalQuantity: number;
          /** A Shopify money amount. */
          subtotalAmount: {
            /** The decimal amount encoded as a string. */
            amount: string;
            /** The ISO currency code. */
            currencyCode: string;
          } | null;
          /** A Shopify money amount. */
          totalAmount: {
            /** The decimal amount encoded as a string. */
            amount: string;
            /** The ISO currency code. */
            currencyCode: string;
          } | null;
          /** Cart lines returned by Shopify. */
          lines: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id: string;
            /**
             * The cart line quantity.
             * @minimum 0
             */
            quantity: number;
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            merchandiseId: string;
            /** The merchandise title when returned by Shopify. */
            merchandiseTitle: string | null;
            /** The merchandise SKU when returned by Shopify. */
            merchandiseSku: string | null;
            /**
             * A Shopify GraphQL pagination cursor.
             * @minLength 1
             */
            cursor: string | null;
            /** The raw object returned by Shopify Storefront GraphQL. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by Shopify Storefront GraphQL. */
          raw: Record<string, unknown>;
        } | null;
        /** User errors returned by Shopify. */
        userErrors: Array<{
          /** The input path for this error. */
          field: Array<string>;
          /** The user error message. */
          message: string;
        }>;
      };
    };
    /** Get a Shopify Storefront cart by ID. */
    "shopify_storefront.get_cart": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        cartId: string;
      };
      output: {
        /** A normalized Shopify cart. */
        cart: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /**
           * The URL where the customer can complete checkout.
           * @format uri
           */
          checkoutUrl: string;
          /** The cart creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The cart update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The total quantity of all cart lines.
           * @minimum 0
           */
          totalQuantity: number;
          /** A Shopify money amount. */
          subtotalAmount: {
            /** The decimal amount encoded as a string. */
            amount: string;
            /** The ISO currency code. */
            currencyCode: string;
          } | null;
          /** A Shopify money amount. */
          totalAmount: {
            /** The decimal amount encoded as a string. */
            amount: string;
            /** The ISO currency code. */
            currencyCode: string;
          } | null;
          /** Cart lines returned by Shopify. */
          lines: Array<{
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            id: string;
            /**
             * The cart line quantity.
             * @minimum 0
             */
            quantity: number;
            /**
             * A Shopify GraphQL global ID.
             * @minLength 1
             */
            merchandiseId: string;
            /** The merchandise title when returned by Shopify. */
            merchandiseTitle: string | null;
            /** The merchandise SKU when returned by Shopify. */
            merchandiseSku: string | null;
            /**
             * A Shopify GraphQL pagination cursor.
             * @minLength 1
             */
            cursor: string | null;
            /** The raw object returned by Shopify Storefront GraphQL. */
            raw: Record<string, unknown>;
          }>;
          /** The raw object returned by Shopify Storefront GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Get one collection by Storefront GraphQL ID or handle. */
    "shopify_storefront.get_collection": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Shopify collection handle.
         * @minLength 1
         */
        handle?: string;
      };
      output: {
        /** A normalized Shopify Storefront collection detail. */
        collection: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The collection title. */
          title: string;
          /** The collection handle. */
          handle: string;
          /** The plain-text collection description when returned. */
          description: string | null;
          /** The collection HTML description when returned. */
          descriptionHtml: string | null;
          /**
           * The online store collection URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /** A normalized Shopify image. */
          image: {
            /**
             * The image URL.
             * @format uri
             */
            url: string;
            /** The image alt text when returned by Shopify. */
            altText: string | null;
          } | null;
          /** The raw object returned by Shopify Storefront GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Get one product by Storefront GraphQL ID or handle. */
    "shopify_storefront.get_product": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id?: string;
        /**
         * The Shopify product handle.
         * @minLength 1
         */
        handle?: string;
      };
      output: {
        /** A normalized Shopify Storefront product detail. */
        product: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The product title. */
          title: string;
          /** The product handle. */
          handle: string;
          /** The plain-text product description when returned. */
          description: string | null;
          /** The product HTML description when returned. */
          descriptionHtml: string | null;
          /** The product vendor when returned by Shopify. */
          vendor: string | null;
          /** The product type when returned by Shopify. */
          productType: string | null;
          /**
           * The online store product URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /** A normalized Shopify image. */
          featuredImage: {
            /**
             * The image URL.
             * @format uri
             */
            url: string;
            /** The image alt text when returned by Shopify. */
            altText: string | null;
          } | null;
          /** A Shopify product price range. */
          priceRange: {
            /** A Shopify money amount. */
            minVariantPrice: {
              /** The decimal amount encoded as a string. */
              amount: string;
              /** The ISO currency code. */
              currencyCode: string;
            };
            /** A Shopify money amount. */
            maxVariantPrice: {
              /** The decimal amount encoded as a string. */
              amount: string;
              /** The ISO currency code. */
              currencyCode: string;
            };
          };
          /** The raw object returned by Shopify Storefront GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Get public shop metadata from Shopify Storefront. */
    "shopify_storefront.get_shop": {
      input: Record<string, never>;
      output: {
        /** A normalized Shopify Storefront shop. */
        shop: {
          /** The shop ID when returned by Shopify. */
          id: string | null;
          /** The shop display name. */
          name: string;
          /** The shop description when returned by Shopify. */
          description: string | null;
          /** The shop money format when returned by Shopify. */
          moneyFormat: string | null;
          /**
           * The shop primary domain URL when returned by Shopify.
           * @format uri
           */
          primaryDomainUrl: string | null;
          /** The raw object returned by Shopify Storefront GraphQL. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List collections visible to the Shopify Storefront API. */
    "shopify_storefront.list_collections": {
      input: {
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Storefront collection search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Collections returned by Shopify. */
        collections: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The collection title. */
          title: string;
          /** The collection handle. */
          handle: string;
          /** The plain-text collection description when returned. */
          description: string | null;
          /**
           * The online store collection URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /** A normalized Shopify image. */
          image: {
            /**
             * The image URL.
             * @format uri
             */
            url: string;
            /** The image alt text when returned by Shopify. */
            altText: string | null;
          } | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Storefront GraphQL. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify GraphQL pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
    /** List products visible to the Shopify Storefront API. */
    "shopify_storefront.list_products": {
      input: {
        /**
         * The first number of records to return.
         * @minimum 1
         * @maximum 250
         * @default 50
         */
        first?: number;
        /**
         * A Shopify GraphQL pagination cursor.
         * @minLength 1
         */
        after?: string;
        /**
         * A Shopify Storefront product search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Products returned by Shopify. */
        products: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The product title. */
          title: string;
          /** The product handle. */
          handle: string;
          /** The plain-text product description when returned. */
          description: string | null;
          /** The product vendor when returned by Shopify. */
          vendor: string | null;
          /** The product type when returned by Shopify. */
          productType: string | null;
          /**
           * The online store product URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /** A normalized Shopify image. */
          featuredImage: {
            /**
             * The image URL.
             * @format uri
             */
            url: string;
            /** The image alt text when returned by Shopify. */
            altText: string | null;
          } | null;
          /** A Shopify product price range. */
          priceRange: {
            /** A Shopify money amount. */
            minVariantPrice: {
              /** The decimal amount encoded as a string. */
              amount: string;
              /** The ISO currency code. */
              currencyCode: string;
            };
            /** A Shopify money amount. */
            maxVariantPrice: {
              /** The decimal amount encoded as a string. */
              amount: string;
              /** The ISO currency code. */
              currencyCode: string;
            };
          };
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Storefront GraphQL. */
          raw: Record<string, unknown>;
        }>;
        /** Shopify GraphQL pagination metadata. */
        pageInfo: {
          /** Whether another page exists after this page. */
          hasNextPage: boolean;
          /** Whether another page exists before this page. */
          hasPreviousPage: boolean;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          startCursor: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          endCursor: string | null;
        };
      };
    };
  }
}
