import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Execute a JSON-friendly Shopify Admin GraphQL query or mutation against the connected shop. */
    "shopify_admin.execute_graphql": {
      input: {
        /**
         * The GraphQL document to execute.
         * @minLength 1
         */
        query: string;
        /** GraphQL variables keyed by variable name. */
        variables?: Record<string, unknown>;
      };
      output: {
        /** The raw object returned by Shopify Admin GraphQL. */
        data: Record<string, unknown>;
        /** The raw object returned by Shopify Admin GraphQL. */
        extensions?: Record<string, unknown>;
      };
    };
    /** Retrieve one Shopify collection by GraphQL global ID. */
    "shopify_admin.get_collection": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify collection detail. */
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
          /** The plain-text collection description. */
          description: string;
          /** The HTML collection description. */
          descriptionHtml: string;
          /** The collection update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The collection image URL when returned by Shopify.
           * @format uri
           */
          imageUrl: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify customer by GraphQL global ID. */
    "shopify_admin.get_customer": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify customer detail. */
        customer: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The customer display name. */
          displayName: string;
          /** The customer first name when returned by Shopify. */
          firstName: string | null;
          /** The customer last name when returned by Shopify. */
          lastName: string | null;
          /** The customer email address when returned by Shopify. */
          email: string | null;
          /** The customer phone number when returned by Shopify. */
          phone: string | null;
          /** The customer account state when returned by Shopify. */
          state: string | null;
          /** Customer tags returned by Shopify. */
          tags: Array<string>;
          /** The customer's lifetime order count encoded as an unsigned 64-bit integer string. */
          numberOfOrders: string | null;
          /** The customer's lifetime amount spent when returned. */
          amountSpent: string | null;
          /** The currency code for the customer's lifetime amount spent when returned. */
          amountSpentCurrencyCode: string | null;
          /** The customer creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The customer update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify inventory item by GraphQL global ID. */
    "shopify_admin.get_inventory_item": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify inventory item detail. */
        inventoryItem: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The inventory item SKU when returned by Shopify. */
          sku: string | null;
          /** Whether Shopify tracks inventory levels for this item. */
          tracked: boolean;
          /** Whether this inventory item requires shipping. */
          requiresShipping: boolean;
          /** The ISO country code of origin when returned by Shopify. */
          countryCodeOfOrigin: string | null;
          /** The harmonized system code when returned by Shopify. */
          harmonizedSystemCode: string | null;
          /** The inventory item creation timestamp when returned. */
          createdAt: string | null;
          /** The inventory item update timestamp when returned. */
          updatedAt: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify location by GraphQL global ID. */
    "shopify_admin.get_location": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify location detail. */
        location: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The location name. */
          name: string;
          /** Whether the location is active. */
          isActive: boolean;
          /** Whether this location can fulfill online orders. */
          fulfillsOnlineOrders: boolean;
          /** The first address line when returned by Shopify. */
          address1: string | null;
          /** The location city when returned by Shopify. */
          city: string | null;
          /** The location province or state when returned by Shopify. */
          province: string | null;
          /** The location country when returned by Shopify. */
          country: string | null;
          /** The location postal code when returned by Shopify. */
          zip: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify order by GraphQL global ID. */
    "shopify_admin.get_order": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify order detail. */
        order: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The merchant-facing Shopify order name. */
          name: string;
          /** The order email address when returned by Shopify. */
          email: string | null;
          /** The order phone number when returned by Shopify. */
          phone: string | null;
          /** The display financial status returned by Shopify. */
          displayFinancialStatus: string | null;
          /** The display fulfillment status returned by Shopify. */
          displayFulfillmentStatus: string | null;
          /** The order currency code returned by Shopify. */
          currencyCode: string | null;
          /** The current order total amount in shop currency when returned. */
          totalAmount: string | null;
          /** The current order total currency code in shop currency when returned. */
          totalCurrencyCode: string | null;
          /** The customer ID associated with the order when returned. */
          customerId: string | null;
          /** The display name of the customer associated with the order when returned. */
          customerDisplayName: string | null;
          /** The order creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The order update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve one Shopify product by GraphQL global ID. */
    "shopify_admin.get_product": {
      input: {
        /**
         * A Shopify GraphQL global ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Shopify product detail. */
        product: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The product title. */
          title: string;
          /** The product handle when returned by Shopify. */
          handle: string | null;
          /** The product status when returned by Shopify. */
          status: string | null;
          /** The product vendor when returned by Shopify. */
          vendor: string | null;
          /** The product type when returned by Shopify. */
          productType: string | null;
          /** The product HTML description when returned by Shopify. */
          descriptionHtml: string | null;
          /** The product creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The product update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The online store product URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        } | null;
      };
    };
    /** Retrieve basic shop information for the connected Shopify Admin token. */
    "shopify_admin.get_shop": {
      input: Record<string, never>;
      output: {
        /** A normalized Shopify shop. */
        shop: {
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The shop display name. */
          name: string;
          /** The canonical myshopify.com domain for the shop. */
          myshopifyDomain: string;
          /**
           * The shop primary domain URL when returned by Shopify.
           * @format uri
           */
          primaryDomainUrl: string | null;
          /** The shop primary domain host when returned by Shopify. */
          primaryDomainHost: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Shopify collections with optional search query and cursor pagination. */
    "shopify_admin.list_collections": {
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
         * A Shopify Admin API search query string.
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
          /** The plain-text collection description. */
          description: string;
          /** The HTML collection description. */
          descriptionHtml: string;
          /** The collection update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The collection image URL when returned by Shopify.
           * @format uri
           */
          imageUrl: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
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
    /** List Shopify customers with optional search query and cursor pagination. */
    "shopify_admin.list_customers": {
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
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Customers returned by Shopify. */
        customers: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The customer display name. */
          displayName: string;
          /** The customer first name when returned by Shopify. */
          firstName: string | null;
          /** The customer last name when returned by Shopify. */
          lastName: string | null;
          /** The customer email address when returned by Shopify. */
          email: string | null;
          /** The customer phone number when returned by Shopify. */
          phone: string | null;
          /** The customer account state when returned by Shopify. */
          state: string | null;
          /** Customer tags returned by Shopify. */
          tags: Array<string>;
          /** The customer's lifetime order count encoded as an unsigned 64-bit integer string. */
          numberOfOrders: string | null;
          /** The customer's lifetime amount spent when returned. */
          amountSpent: string | null;
          /** The currency code for the customer's lifetime amount spent when returned. */
          amountSpentCurrencyCode: string | null;
          /** The customer creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The customer update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
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
    /** List Shopify inventory items with optional search query and cursor pagination. */
    "shopify_admin.list_inventory_items": {
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
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Inventory items returned by Shopify. */
        inventoryItems: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The inventory item SKU when returned by Shopify. */
          sku: string | null;
          /** Whether Shopify tracks inventory levels for this item. */
          tracked: boolean;
          /** Whether this inventory item requires shipping. */
          requiresShipping: boolean;
          /** The ISO country code of origin when returned by Shopify. */
          countryCodeOfOrigin: string | null;
          /** The harmonized system code when returned by Shopify. */
          harmonizedSystemCode: string | null;
          /** The inventory item creation timestamp when returned. */
          createdAt: string | null;
          /** The inventory item update timestamp when returned. */
          updatedAt: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
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
    /** List Shopify inventory locations with optional filters and cursor pagination. */
    "shopify_admin.list_locations": {
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
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
        /** Whether to include deactivated locations. */
        includeInactive?: boolean;
        /** Whether to include legacy fulfillment service locations. */
        includeLegacy?: boolean;
      };
      output: {
        /** Locations returned by Shopify. */
        locations: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The location name. */
          name: string;
          /** Whether the location is active. */
          isActive: boolean;
          /** Whether this location can fulfill online orders. */
          fulfillsOnlineOrders: boolean;
          /** The first address line when returned by Shopify. */
          address1: string | null;
          /** The location city when returned by Shopify. */
          city: string | null;
          /** The location province or state when returned by Shopify. */
          province: string | null;
          /** The location country when returned by Shopify. */
          country: string | null;
          /** The location postal code when returned by Shopify. */
          zip: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
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
    /** List Shopify orders with optional search query and cursor pagination. */
    "shopify_admin.list_orders": {
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
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Orders returned by Shopify. */
        orders: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The merchant-facing Shopify order name. */
          name: string;
          /** The order email address when returned by Shopify. */
          email: string | null;
          /** The order phone number when returned by Shopify. */
          phone: string | null;
          /** The display financial status returned by Shopify. */
          displayFinancialStatus: string | null;
          /** The display fulfillment status returned by Shopify. */
          displayFulfillmentStatus: string | null;
          /** The order currency code returned by Shopify. */
          currencyCode: string | null;
          /** The current order total amount in shop currency when returned. */
          totalAmount: string | null;
          /** The current order total currency code in shop currency when returned. */
          totalCurrencyCode: string | null;
          /** The customer ID associated with the order when returned. */
          customerId: string | null;
          /** The display name of the customer associated with the order when returned. */
          customerDisplayName: string | null;
          /** The order creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The order update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
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
    /** List Shopify product variants with optional search query and cursor pagination. */
    "shopify_admin.list_product_variants": {
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
         * A Shopify Admin API search query string.
         * @minLength 1
         */
        query?: string;
      };
      output: {
        /** Product variants returned by Shopify. */
        variants: Array<{
          /**
           * A Shopify GraphQL global ID.
           * @minLength 1
           */
          id: string;
          /** The variant title. */
          title: string;
          /** The variant SKU when returned by Shopify. */
          sku: string | null;
          /** The variant price as a decimal string when returned by Shopify. */
          price: string | null;
          /** The tracked inventory quantity when returned by Shopify. */
          inventoryQuantity: number | null;
          /** The parent product ID when returned by Shopify. */
          productId: string | null;
          /** The parent product title when returned by Shopify. */
          productTitle: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
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
    /** List Shopify products with optional search query and cursor pagination. */
    "shopify_admin.list_products": {
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
         * A Shopify Admin API search query string.
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
          /** The product handle when returned by Shopify. */
          handle: string | null;
          /** The product status when returned by Shopify. */
          status: string | null;
          /** The product vendor when returned by Shopify. */
          vendor: string | null;
          /** The product type when returned by Shopify. */
          productType: string | null;
          /** The product creation timestamp when returned by Shopify. */
          createdAt: string | null;
          /** The product update timestamp when returned by Shopify. */
          updatedAt: string | null;
          /**
           * The online store product URL when returned by Shopify.
           * @format uri
           */
          onlineStoreUrl: string | null;
          /**
           * A Shopify GraphQL pagination cursor.
           * @minLength 1
           */
          cursor: string | null;
          /** The raw object returned by Shopify Admin GraphQL. */
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
