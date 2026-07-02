import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get aggregated ShipBob inventory levels for one inventory item. */
    "ship_bob.get_inventory_level": {
      input: {
        /**
         * The ShipBob inventory item id to retrieve.
         * @exclusiveMinimum 0
         */
        inventoryId: number;
      };
      output: {
        /** A normalized ShipBob inventory quantity record. */
        item: {
          /** The ShipBob inventory item id. */
          inventoryId: number;
          /** The inventory item name returned by ShipBob. */
          name: string | null;
          /** The stock keeping unit returned by ShipBob. */
          sku: string | null;
          /** The total quantity expected to arrive. */
          totalAwaitingQuantity: number | null;
          /** The total quantity on backorder. */
          totalBackorderedQuantity: number | null;
          /** The total quantity reserved for orders. */
          totalCommittedQuantity: number | null;
          /** The total quantity in exception status. */
          totalExceptionQuantity: number | null;
          /** The total quantity available to fulfill. */
          totalFulfillableQuantity: number | null;
          /** The total quantity currently in internal transfer. */
          totalInternalTransferQuantity: number | null;
          /** The total quantity physically on hand. */
          totalOnHandQuantity: number | null;
          /** The total quantity available for sale. */
          totalSellableQuantity: number | null;
          /** The raw inventory quantity object returned by ShipBob. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List ShipBob channels available to the authenticated Personal Access Token. */
    "ship_bob.list_channels": {
      input: Record<string, never>;
      output: {
        /** The ShipBob channels returned by the API. */
        channels: Array<{
          /** The ShipBob channel id. */
          id: number;
          /** The ShipBob channel name. */
          name: string | null;
          /** The ShipBob application name for the channel. */
          applicationName: string | null;
          /** The scopes granted to this ShipBob channel. */
          scopes: Array<string>;
          /** The raw channel object returned by ShipBob. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ShipBob inventory levels with optional item and product filters. */
    "ship_bob.list_inventory_levels": {
      input: {
        /**
         * Search by inventory id, inventory name, or SKU.
         * @minLength 1
         */
        searchBy?: string;
        /**
         * Specific ShipBob inventory item ids to retrieve.
         * @minItems 1
         */
        inventoryIds?: Array<number>;
        /** Whether to return only active or inactive inventory items. */
        isActive?: boolean;
        /** Whether to return only digital or physical inventory items. */
        isDigital?: boolean;
        /**
         * The maximum number of ShipBob records to return.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The ShipBob field expression used to sort results, such as Name or -total_on_hand_quantity.
         * @minLength 1
         */
        sortBy?: string;
      };
      output: {
        /** The URL to retrieve the first page when ShipBob returned one. */
        first: string | null;
        /** The URL to retrieve the last page when ShipBob returned one. */
        last: string | null;
        /** The URL to retrieve the next page when ShipBob returned one. */
        next: string | null;
        /** The URL to retrieve the previous page when ShipBob returned one. */
        prev: string | null;
        /** The ShipBob inventory quantity records returned by the API. */
        items: Array<{
          /** The ShipBob inventory item id. */
          inventoryId: number;
          /** The inventory item name returned by ShipBob. */
          name: string | null;
          /** The stock keeping unit returned by ShipBob. */
          sku: string | null;
          /** The total quantity expected to arrive. */
          totalAwaitingQuantity: number | null;
          /** The total quantity on backorder. */
          totalBackorderedQuantity: number | null;
          /** The total quantity reserved for orders. */
          totalCommittedQuantity: number | null;
          /** The total quantity in exception status. */
          totalExceptionQuantity: number | null;
          /** The total quantity available to fulfill. */
          totalFulfillableQuantity: number | null;
          /** The total quantity currently in internal transfer. */
          totalInternalTransferQuantity: number | null;
          /** The total quantity physically on hand. */
          totalOnHandQuantity: number | null;
          /** The total quantity available for sale. */
          totalSellableQuantity: number | null;
          /** The raw inventory quantity object returned by ShipBob. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ShipBob fulfillment network locations. */
    "ship_bob.list_locations": {
      input: {
        /** Whether inactive ShipBob locations should be included. */
        includeInactive?: boolean;
        /** Whether to return only receiving-enabled locations. */
        receivingEnabled?: boolean;
        /** Whether to return only locations granted to this merchant. */
        accessGranted?: boolean;
      };
      output: {
        /** The ShipBob locations returned by the API. */
        locations: Array<{
          /** The ShipBob location id. */
          id: number;
          /** The ShipBob location name. */
          name: string | null;
          /** The ShipBob location abbreviation. */
          abbreviation: string | null;
          /** Whether this location is active. */
          isActive: boolean | null;
          /** Whether the authenticated merchant can access it. */
          accessGranted: boolean | null;
          /** Whether the location can receive inventory. */
          isReceivingEnabled: boolean | null;
          /** Whether the location can ship inventory. */
          isShippingEnabled: boolean | null;
          /** The raw location object returned by ShipBob. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List ShipBob products with optional catalog filters. */
    "ship_bob.list_products": {
      input: {
        /**
         * Search products by name, SKU, inventory id, or product id.
         * @minLength 1
         */
        search?: string;
        /**
         * A barcode associated with a product variant.
         * @minLength 1
         */
        barcode?: string;
        /**
         * Barcodes associated with product variants.
         * @minItems 1
         */
        barcodes?: Array<string>;
        /**
         * ShipBob category ids associated with products.
         * @minItems 1
         */
        categoryIds?: Array<number>;
        /**
         * ShipBob channel ids associated with product variants.
         * @minItems 1
         */
        channelIds?: Array<number>;
        /** Whether products have digital variants. */
        hasDigitalVariants?: boolean;
        /** Whether products have variants. */
        hasVariants?: boolean;
        /**
         * A ShipBob inventory id associated with a product variant.
         * @exclusiveMinimum 0
         */
        inventoryId?: number;
        /** Whether inventory sync is enabled for variants. */
        isInventorySyncEnabled?: boolean;
        /**
         * Return products updated since this timestamp.
         * @format date-time
         */
        lastUpdatedTimestamp?: string;
        /**
         * Search products or variants by name.
         * @minLength 1
         */
        name?: string;
        /** Whether products have inventory on hand. */
        onHand?: boolean;
        /**
         * A ShipBob product id to filter by.
         * @exclusiveMinimum 0
         */
        productId?: number;
        /**
         * A ShipBob product type to filter by.
         * @minLength 1
         */
        productType?: string;
        /**
         * A seller SKU query.
         * @minLength 1
         */
        sellerSku?: string;
        /**
         * A ShipBob SKU query.
         * @minLength 1
         */
        sku?: string;
        /**
         * A ShipBob variant id to filter by.
         * @exclusiveMinimum 0
         */
        variantId?: number;
        /**
         * A ShipBob variant status to filter by.
         * @minLength 1
         */
        variantStatus?: string;
        /**
         * The maximum number of ShipBob records to return.
         * @minimum 1
         */
        pageSize?: number;
        /**
         * The ShipBob product field used to sort results.
         * @minLength 1
         */
        sortBy?: string;
        /** The ShipBob product sort order. */
        sortOrder?: "ASC" | "DESC";
      };
      output: {
        /** The URL to retrieve the first page when ShipBob returned one. */
        first: string | null;
        /** The URL to retrieve the last page when ShipBob returned one. */
        last: string | null;
        /** The URL to retrieve the next page when ShipBob returned one. */
        next: string | null;
        /** The URL to retrieve the previous page when ShipBob returned one. */
        prev: string | null;
        /** The ShipBob products returned by the API. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
