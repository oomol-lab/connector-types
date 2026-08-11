import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an item in Zenventory. */
    "zenventory.create_item": {
      input: {
        /**
         * The item's SKU.
         * @minLength 1
         */
        sku: string;
        /** The item's UPC. */
        upc?: string;
        /** The item's description. */
        description?: string;
        /** The item's category. */
        category?: string;
        /** The item's base unit of measurement. */
        baseUom?: string;
        /** How much the item costs to stock. */
        unitCost?: number;
        /** The item's lead time. */
        leadTime?: number;
        /** The default purchase-order quantity. */
        defaultEconOrder?: number;
        /** The item's order limit. */
        orderLimit?: number;
        /** The item's recommended retail price. */
        rrp?: number;
        /** The item's selling price. */
        price?: number;
        /** Whether the item is active. */
        active?: boolean;
        /** Whether the item is a kit made from other items. */
        kit?: boolean;
        /** Whether the item is stocked by combining other items. */
        assembly?: boolean;
        /** Whether the item has an expiration date. */
        perishable?: boolean;
        /** Whether the item is tracked by lot number. */
        trackLot?: boolean;
        /** Whether the item is tracked by serial number. */
        serialized?: boolean;
        /** Whether the item does not have inventory. */
        nonInventory?: boolean;
        /** The item's weight. */
        weight?: number;
        /** The item's storage length. */
        storageLength?: number;
        /** The item's storage width. */
        storageWidth?: number;
        /** The item's storage height. */
        storageHeight?: number;
        /** The stock withheld from marketplace stock levels. */
        safetyStock?: number;
        /** The first user-defined item field. */
        userField1?: string;
        /** The second user-defined item field. */
        userField2?: string;
        /** The third user-defined item field. */
        userField3?: string;
        /** The fourth user-defined item field. */
        userField4?: string;
        /** The fifth user-defined item field. */
        userField5?: string;
        /** The sixth user-defined item field, formatted as a date-time upstream. */
        userField6?: string;
        /** Notes for the item. */
        notes?: string;
        /** The client identifier that owns the item. */
        clientId?: number;
        /** The client name used when clientId is not provided. */
        clientName?: string;
        /** Whether to assign the item to all warehouses. */
        assignToAllWarehouses?: boolean;
        /** Whether to assign the item to one warehouse. */
        assignToWarehouse?: boolean;
        /** The warehouse identifier used for assignment. */
        warehouseId?: number;
        /** The warehouse name used when warehouseId is not provided. */
        warehouseName?: string;
        /** The reorder level for the warehouse assignment. */
        reorderLevel?: number;
      };
      output: {
        /** The Zenventory item identifier. */
        id?: number;
        /** The item's SKU. */
        sku?: string;
        /** The item's UPC. */
        upc?: string;
        /** The item's description. */
        description?: string;
        /** The category used to group the item. */
        category?: string;
        /** The client that owns the item. */
        client?: {
          /** The client identifier. */
          id?: number;
          /** The client name. */
          name?: string;
          [key: string]: unknown;
        } | null;
        /** The item's base unit of measurement. */
        baseUom?: string;
        /** The cost to stock the item. */
        unitCost?: number;
        /** The item's lead time. */
        leadTime?: number;
        /** The default purchase-order quantity. */
        defaultEconOrder?: number;
        /** The item's recommended retail price. */
        rrp?: number;
        /** The item's selling price. */
        price?: number;
        /** Whether the item is active. */
        active?: boolean;
        /** Whether the item is a kit. */
        kit?: boolean;
        /** Whether the item is an assembly. */
        assembly?: boolean;
        /** Whether the item has an expiration date. */
        perishable?: boolean;
        /** Whether the item is tracked by lot number. */
        trackLot?: boolean;
        /** Whether the item is tracked by serial number. */
        serialized?: boolean;
        /** Whether the item does not have inventory. */
        nonInventory?: boolean;
        /** The item's weight. */
        weight?: number;
        /** The item's storage length. */
        storageLength?: number;
        /** The item's storage width. */
        storageWidth?: number;
        /** The item's storage height. */
        storageHeight?: number;
        /** The item's calculated storage volume. */
        storageVolume?: number;
        /** The stock withheld from marketplace stock levels. */
        safetyStock?: number;
        /** The first user-defined item field. */
        userField1?: string;
        /** The second user-defined item field. */
        userField2?: string;
        /** The third user-defined item field. */
        userField3?: string;
        /** The fourth user-defined item field. */
        userField4?: string;
        /** The fifth user-defined item field. */
        userField5?: string;
        /** The sixth user-defined item field. */
        userField6?: string;
        /** The item creation timestamp. */
        createdDate?: string;
        /** The item modification timestamp. */
        modifiedDate?: string;
        /** Notes attached to the item. */
        notes?: string;
        /** Optional units and bill-of-materials details requested for the item. */
        additionalFields?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get one Zenventory item by its identifier. */
    "zenventory.get_item": {
      input: {
        /**
         * The Zenventory item identifier.
         * @minimum 1
         */
        id: number;
        /** Whether to include item units of measurement. */
        includeUnits?: boolean;
        /** Whether to include item bill-of-materials details. */
        includeBom?: boolean;
      };
      output: {
        /** The Zenventory item identifier. */
        id?: number;
        /** The item's SKU. */
        sku?: string;
        /** The item's UPC. */
        upc?: string;
        /** The item's description. */
        description?: string;
        /** The category used to group the item. */
        category?: string;
        /** The client that owns the item. */
        client?: {
          /** The client identifier. */
          id?: number;
          /** The client name. */
          name?: string;
          [key: string]: unknown;
        } | null;
        /** The item's base unit of measurement. */
        baseUom?: string;
        /** The cost to stock the item. */
        unitCost?: number;
        /** The item's lead time. */
        leadTime?: number;
        /** The default purchase-order quantity. */
        defaultEconOrder?: number;
        /** The item's recommended retail price. */
        rrp?: number;
        /** The item's selling price. */
        price?: number;
        /** Whether the item is active. */
        active?: boolean;
        /** Whether the item is a kit. */
        kit?: boolean;
        /** Whether the item is an assembly. */
        assembly?: boolean;
        /** Whether the item has an expiration date. */
        perishable?: boolean;
        /** Whether the item is tracked by lot number. */
        trackLot?: boolean;
        /** Whether the item is tracked by serial number. */
        serialized?: boolean;
        /** Whether the item does not have inventory. */
        nonInventory?: boolean;
        /** The item's weight. */
        weight?: number;
        /** The item's storage length. */
        storageLength?: number;
        /** The item's storage width. */
        storageWidth?: number;
        /** The item's storage height. */
        storageHeight?: number;
        /** The item's calculated storage volume. */
        storageVolume?: number;
        /** The stock withheld from marketplace stock levels. */
        safetyStock?: number;
        /** The first user-defined item field. */
        userField1?: string;
        /** The second user-defined item field. */
        userField2?: string;
        /** The third user-defined item field. */
        userField3?: string;
        /** The fourth user-defined item field. */
        userField4?: string;
        /** The fifth user-defined item field. */
        userField5?: string;
        /** The sixth user-defined item field. */
        userField6?: string;
        /** The item creation timestamp. */
        createdDate?: string;
        /** The item modification timestamp. */
        modifiedDate?: string;
        /** Notes attached to the item. */
        notes?: string;
        /** Optional units and bill-of-materials details requested for the item. */
        additionalFields?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Search and page through items in Zenventory. */
    "zenventory.list_items": {
      input: {
        /** Text matched against item SKU, UPC, and description. */
        searchFor?: string;
        /** The client identifier to filter by. */
        clientId?: number;
        /** The client name to filter by when clientId is not provided. */
        clientName?: string;
        /** The item category to filter by. */
        category?: string;
        /** Whether to return active or inactive items. */
        active?: boolean;
        /** Whether to include non-inventory items. */
        nonInventory?: boolean;
        /** Whether to include item units of measurement. */
        includeUnits?: boolean;
        /** Whether to include item bill-of-materials details. */
        includeBom?: boolean;
        /** The field used to order results. */
        orderBy?: "id" | "sku" | "upc" | "category" | "unitCost" | "price" | "userField1" | "userField2" | "userField3" | "userField4" | "userField5" | "userField6";
        /** The result ordering direction. */
        orderDir?: "asc" | "desc";
        /**
         * The result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items per page.
         * @minimum 20
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The items in this result page. */
        items: Array<{
          /** The Zenventory item identifier. */
          id?: number;
          /** The item's SKU. */
          sku?: string;
          /** The item's UPC. */
          upc?: string;
          /** The item's description. */
          description?: string;
          /** The category used to group the item. */
          category?: string;
          /** The client that owns the item. */
          client?: {
            /** The client identifier. */
            id?: number;
            /** The client name. */
            name?: string;
            [key: string]: unknown;
          } | null;
          /** The item's base unit of measurement. */
          baseUom?: string;
          /** The cost to stock the item. */
          unitCost?: number;
          /** The item's lead time. */
          leadTime?: number;
          /** The default purchase-order quantity. */
          defaultEconOrder?: number;
          /** The item's recommended retail price. */
          rrp?: number;
          /** The item's selling price. */
          price?: number;
          /** Whether the item is active. */
          active?: boolean;
          /** Whether the item is a kit. */
          kit?: boolean;
          /** Whether the item is an assembly. */
          assembly?: boolean;
          /** Whether the item has an expiration date. */
          perishable?: boolean;
          /** Whether the item is tracked by lot number. */
          trackLot?: boolean;
          /** Whether the item is tracked by serial number. */
          serialized?: boolean;
          /** Whether the item does not have inventory. */
          nonInventory?: boolean;
          /** The item's weight. */
          weight?: number;
          /** The item's storage length. */
          storageLength?: number;
          /** The item's storage width. */
          storageWidth?: number;
          /** The item's storage height. */
          storageHeight?: number;
          /** The item's calculated storage volume. */
          storageVolume?: number;
          /** The stock withheld from marketplace stock levels. */
          safetyStock?: number;
          /** The first user-defined item field. */
          userField1?: string;
          /** The second user-defined item field. */
          userField2?: string;
          /** The third user-defined item field. */
          userField3?: string;
          /** The fourth user-defined item field. */
          userField4?: string;
          /** The fifth user-defined item field. */
          userField5?: string;
          /** The sixth user-defined item field. */
          userField6?: string;
          /** The item creation timestamp. */
          createdDate?: string;
          /** The item modification timestamp. */
          modifiedDate?: string;
          /** Notes attached to the item. */
          notes?: string;
          /** Optional units and bill-of-materials details requested for the item. */
          additionalFields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata for the result page. */
        meta: {
          /** The total number of matching items. */
          count?: number;
          /** The current result page. */
          page?: number;
          /** The number of items requested per page. */
          perPage?: number;
          /** The total number of result pages. */
          totalPages?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Replace the editable fields of an existing Zenventory item. */
    "zenventory.update_item": {
      input: {
        /**
         * The Zenventory item identifier.
         * @minimum 1
         */
        id: number;
        /**
         * The item's SKU.
         * @minLength 1
         */
        sku: string;
        /** The item's UPC. */
        upc?: string;
        /** The item's description. */
        description?: string;
        /** The item's category. */
        category?: string;
        /** The item's base unit of measurement. */
        baseUom?: string;
        /** How much the item costs to stock. */
        unitCost?: number;
        /** The item's lead time. */
        leadTime?: number;
        /** The default purchase-order quantity. */
        defaultEconOrder?: number;
        /** The item's order limit. */
        orderLimit?: number;
        /** The item's recommended retail price. */
        rrp?: number;
        /** The item's selling price. */
        price?: number;
        /** Whether the item is active. */
        active?: boolean;
        /** Whether the item is a kit made from other items. */
        kit?: boolean;
        /** Whether the item is stocked by combining other items. */
        assembly?: boolean;
        /** Whether the item has an expiration date. */
        perishable?: boolean;
        /** Whether the item is tracked by lot number. */
        trackLot?: boolean;
        /** Whether the item is tracked by serial number. */
        serialized?: boolean;
        /** Whether the item does not have inventory. */
        nonInventory?: boolean;
        /** The item's weight. */
        weight?: number;
        /** The item's storage length. */
        storageLength?: number;
        /** The item's storage width. */
        storageWidth?: number;
        /** The item's storage height. */
        storageHeight?: number;
        /** The stock withheld from marketplace stock levels. */
        safetyStock?: number;
        /** The first user-defined item field. */
        userField1?: string;
        /** The second user-defined item field. */
        userField2?: string;
        /** The third user-defined item field. */
        userField3?: string;
        /** The fourth user-defined item field. */
        userField4?: string;
        /** The fifth user-defined item field. */
        userField5?: string;
        /** The sixth user-defined item field, formatted as a date-time upstream. */
        userField6?: string;
        /** Notes for the item. */
        notes?: string;
      };
      output: {
        /** The Zenventory item identifier. */
        id?: number;
        /** The item's SKU. */
        sku?: string;
        /** The item's UPC. */
        upc?: string;
        /** The item's description. */
        description?: string;
        /** The category used to group the item. */
        category?: string;
        /** The client that owns the item. */
        client?: {
          /** The client identifier. */
          id?: number;
          /** The client name. */
          name?: string;
          [key: string]: unknown;
        } | null;
        /** The item's base unit of measurement. */
        baseUom?: string;
        /** The cost to stock the item. */
        unitCost?: number;
        /** The item's lead time. */
        leadTime?: number;
        /** The default purchase-order quantity. */
        defaultEconOrder?: number;
        /** The item's recommended retail price. */
        rrp?: number;
        /** The item's selling price. */
        price?: number;
        /** Whether the item is active. */
        active?: boolean;
        /** Whether the item is a kit. */
        kit?: boolean;
        /** Whether the item is an assembly. */
        assembly?: boolean;
        /** Whether the item has an expiration date. */
        perishable?: boolean;
        /** Whether the item is tracked by lot number. */
        trackLot?: boolean;
        /** Whether the item is tracked by serial number. */
        serialized?: boolean;
        /** Whether the item does not have inventory. */
        nonInventory?: boolean;
        /** The item's weight. */
        weight?: number;
        /** The item's storage length. */
        storageLength?: number;
        /** The item's storage width. */
        storageWidth?: number;
        /** The item's storage height. */
        storageHeight?: number;
        /** The item's calculated storage volume. */
        storageVolume?: number;
        /** The stock withheld from marketplace stock levels. */
        safetyStock?: number;
        /** The first user-defined item field. */
        userField1?: string;
        /** The second user-defined item field. */
        userField2?: string;
        /** The third user-defined item field. */
        userField3?: string;
        /** The fourth user-defined item field. */
        userField4?: string;
        /** The fifth user-defined item field. */
        userField5?: string;
        /** The sixth user-defined item field. */
        userField6?: string;
        /** The item creation timestamp. */
        createdDate?: string;
        /** The item modification timestamp. */
        modifiedDate?: string;
        /** Notes attached to the item. */
        notes?: string;
        /** Optional units and bill-of-materials details requested for the item. */
        additionalFields?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
