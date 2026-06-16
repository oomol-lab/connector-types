import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a ShipStation V2 purchase order by ID, including detailed product lines when returned. */
    "ship_station.get_purchase_order": {
      input: {
        /**
         * A ShipStation V2 resource identifier.
         * @minLength 1
         * @pattern \S
         */
        purchaseOrderId: string;
      };
      output: {
        /** The raw object returned by ShipStation. */
        purchaseOrder: Record<string, unknown>;
      };
    };
    /** List ShipStation V2 inventory stock levels and inventory-related properties for SKUs. */
    "ship_station.list_inventory_levels": {
      input: {
        /**
         * Return inventory properties for this specific SKU.
         * @minLength 1
         * @pattern \S
         */
        sku?: string;
        /**
         * A ShipStation V2 resource identifier.
         * @minLength 1
         * @pattern \S
         */
        inventoryWarehouseId?: string;
        /**
         * A ShipStation V2 resource identifier.
         * @minLength 1
         * @pattern \S
         */
        inventoryLocationId?: string;
        /** Group returned SKUs by warehouse or location. */
        groupBy?: "warehouse" | "location";
        /**
         * The maximum number of inventory records to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The inventory records returned by ShipStation. */
        inventory: Array<Record<string, unknown>>;
        /** The raw object returned by ShipStation. */
        raw: Record<string, unknown>;
      };
    };
    /** List inventory warehouses configured in ShipStation V2. */
    "ship_station.list_inventory_warehouses": {
      input: Record<string, never>;
      output: {
        /** The inventory warehouse records returned by ShipStation. */
        inventoryWarehouses: Array<Record<string, unknown>>;
        /** The raw object returned by ShipStation. */
        raw: Record<string, unknown>;
      };
    };
    /** List ShipStation V2 purchase orders with optional filters and pagination. */
    "ship_station.list_purchase_orders": {
      input: {
        /**
         * Filter by the ShipStation purchase order number.
         * @minLength 1
         * @pattern \S
         */
        orderNumber?: string;
        /** The purchase order status filter. */
        status?: "draft" | "open" | "receiving" | "received" | "closed" | "cancelled";
        /**
         * A ShipStation V2 resource identifier.
         * @minLength 1
         * @pattern \S
         */
        warehouseId?: string;
        /**
         * Filter by the custom purchase order reference.
         * @minLength 1
         * @pattern \S
         */
        referenceNumber?: string;
        /**
         * An ISO 8601/RFC3339 date-time string accepted by ShipStation.
         * @format date-time
         */
        createDateStart?: string;
        /**
         * The cursor value from a previous pagination link.
         * @minLength 1
         * @pattern \S
         */
        cursor?: string;
        /**
         * The number of purchase orders to return per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** The purchase orders returned by ShipStation. */
        purchaseOrders: Array<Record<string, unknown>>;
        /** The total number of matching purchase orders when returned. */
        total: number | null;
        /** The pagination links object returned by ShipStation. */
        links: Record<string, unknown> | null;
        /** The cursor extracted from links.next.href when another page is available. */
        nextCursor: string | null;
        /** The raw object returned by ShipStation. */
        raw: Record<string, unknown>;
      };
    };
  }
}
