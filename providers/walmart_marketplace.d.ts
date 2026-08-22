import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current Walmart Marketplace inventory for one seller SKU. */
    "walmart_marketplace.get_inventory": {
      input: {
        /**
         * The seller-assigned SKU.
         * @minLength 1
         */
        sku: string;
        /** The fulfillment-center ID; omit it to use the default ship node. */
        shipNode?: string;
      };
      output: {
        /** The Walmart Marketplace inventory response. */
        inventory: Record<string, unknown>;
      };
    };
    /** Get one Walmart Marketplace seller item by product identifier. */
    "walmart_marketplace.get_item": {
      input: {
        /**
         * The SKU, item ID, GTIN, UPC, EAN, or ISBN to retrieve.
         * @minLength 1
         */
        productId: string;
        /** How Walmart should interpret productId. */
        productIdType?: "SKU" | "ITEM_ID" | "GTIN" | "UPC" | "EAN" | "ISBN";
      };
      output: {
        /** The item returned by Walmart Marketplace. */
        item: Record<string, unknown>;
      };
    };
    /** Get one Walmart Marketplace purchase order by purchase order ID. */
    "walmart_marketplace.get_order": {
      input: {
        /**
         * The Walmart purchase order ID.
         * @minLength 1
         */
        purchaseOrderId: string;
      };
      output: {
        /** The purchase order returned by Walmart Marketplace. */
        order: Record<string, unknown>;
      };
    };
    /** List items in the connected Walmart Marketplace seller catalog. */
    "walmart_marketplace.list_items": {
      input: {
        /** The cursor returned by a previous list-items response. */
        nextCursor?: string;
        /**
         * The zero-based result offset, up to 10000.
         * @minimum 0
         * @maximum 10000
         */
        offset?: number;
        /**
         * The maximum number of items to return, from 1 through 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * A seller-assigned SKU to match.
         * @minLength 1
         */
        sku?: string;
        /**
         * A 14-digit Global Trade Item Number to match.
         * @minLength 14
         * @maxLength 14
         */
        gtin?: string;
        /** The item lifecycle status to match. */
        lifecycleStatus?: "ACTIVE" | "ARCHIVED" | "RETIRED";
        /** The item publication status to match. */
        publishedStatus?: "PUBLISHED" | "UNPUBLISHED";
      };
      output: {
        /** The seller items on this page. */
        items: Array<Record<string, unknown>>;
        /** The total matching item count when Walmart provides it. */
        totalItems: number | null;
        /** The cursor to send for the next page. */
        nextCursor: string | null;
      };
    };
    /** List recent Walmart Marketplace purchase orders with optional filters. */
    "walmart_marketplace.list_orders": {
      input: {
        /** Return orders created on or after this UTC or ISO-8601 date. */
        createdStartDate?: string;
        /** Return orders created on or before this UTC or ISO-8601 date. */
        createdEndDate?: string;
        /** Return orders modified on or after this UTC or ISO-8601 date. */
        lastModifiedStartDate?: string;
        /** Return orders modified on or before this UTC or ISO-8601 date. */
        lastModifiedEndDate?: string;
        /** The purchase-order line status to match. */
        status?: "Created" | "Acknowledged" | "Shipped" | "Delivered" | "Cancelled";
        /** A seller SKU to match. */
        sku?: string;
        /** A Walmart customer order ID to match. */
        customerOrderId?: string;
        /** A Walmart purchase order ID to match. */
        purchaseOrderId?: string;
        /**
         * The maximum number of orders to return, from 1 through 200.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The complete query string returned as nextCursor in Walmart order metadata, beginning with ?. Provide it without other inputs. */
        nextCursor?: string;
      };
      output: {
        /** The purchase orders on this page. */
        orders: Array<Record<string, unknown>>;
        /** Walmart pagination and response metadata. */
        meta: Record<string, unknown>;
      };
    };
    /** Replace the Walmart Marketplace inventory amount for one seller SKU. */
    "walmart_marketplace.update_inventory": {
      input: {
        /**
         * The seller-assigned SKU.
         * @minLength 1
         */
        sku: string;
        /**
         * The replacement number of units available to sell.
         * @minimum 0
         */
        amount: number;
        /** The fulfillment-center ID; omit it to use the default ship node. */
        shipNode?: string;
      };
      output: {
        /** The Walmart Marketplace inventory response. */
        inventory: Record<string, unknown>;
      };
    };
  }
}
