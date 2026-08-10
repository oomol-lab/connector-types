import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List Megaventory document types for sales and purchase orders. */
    "megaventory.list_document_types": {
      input: {
        /** The filters applied by Megaventory. */
        filters?: Array<{
          /**
           * The upstream field name to filter.
           * @minLength 1
           */
          fieldName: string;
          /** The comparison operator for this filter. */
          searchOperator: "Undefined" | "Equals" | "NotEquals" | "BeginsWith" | "EndsWith" | "Contains" | "GreaterThan" | "LessThan";
          /** The value compared with the selected field. */
          searchValue: unknown;
          /** How this filter is combined with the preceding filter. */
          andOr?: "And" | "Or";
          /** How this filter opens or closes a filter group. */
          group?: "Undefined" | "NoGroup" | "StartGroup" | "EndGroup";
        }>;
        /**
         * The maximum number of records returned, or -1 to return every matching record.
         * @minimum -1
         */
        returnTopNRecords?: number;
      };
      output: {
        /** The document type records returned by Megaventory. */
        documentTypes: Array<Record<string, unknown>>;
        /** The status returned by Megaventory. */
        responseStatus: {
          /** The Megaventory error code; zero indicates success. */
          ErrorCode?: string;
          /** The human-readable status message. */
          Message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Megaventory inventory locations for order lookups. */
    "megaventory.list_inventory_locations": {
      input: {
        /** The filters applied by Megaventory. */
        filters?: Array<{
          /**
           * The upstream field name to filter.
           * @minLength 1
           */
          fieldName: string;
          /** The comparison operator for this filter. */
          searchOperator: "Undefined" | "Equals" | "NotEquals" | "BeginsWith" | "EndsWith" | "Contains" | "GreaterThan" | "LessThan";
          /** The value compared with the selected field. */
          searchValue: unknown;
          /** How this filter is combined with the preceding filter. */
          andOr?: "And" | "Or";
          /** How this filter opens or closes a filter group. */
          group?: "Undefined" | "NoGroup" | "StartGroup" | "EndGroup";
        }>;
        /**
         * The maximum number of records returned, or -1 to return every matching record.
         * @minimum -1
         */
        returnTopNRecords?: number;
      };
      output: {
        /** The inventory location records returned by Megaventory. */
        inventoryLocations: Array<Record<string, unknown>>;
        /** The status returned by Megaventory. */
        responseStatus: {
          /** The Megaventory error code; zero indicates success. */
          ErrorCode?: string;
          /** The human-readable status message. */
          Message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Megaventory products using documented structured filters. */
    "megaventory.list_products": {
      input: {
        /** The filters applied by Megaventory. */
        filters?: Array<{
          /**
           * The upstream field name to filter.
           * @minLength 1
           */
          fieldName: string;
          /** The comparison operator for this filter. */
          searchOperator: "Undefined" | "Equals" | "NotEquals" | "BeginsWith" | "EndsWith" | "Contains" | "GreaterThan" | "LessThan";
          /** The value compared with the selected field. */
          searchValue: unknown;
          /** How this filter is combined with the preceding filter. */
          andOr?: "And" | "Or";
          /** How this filter opens or closes a filter group. */
          group?: "Undefined" | "NoGroup" | "StartGroup" | "EndGroup";
        }>;
        /**
         * The maximum number of records returned, or -1 to return every matching record.
         * @minimum -1
         */
        returnTopNRecords?: number;
      };
      output: {
        /** The product records returned by Megaventory. */
        products: Array<Record<string, unknown>>;
        /** The status returned by Megaventory. */
        responseStatus: {
          /** The Megaventory error code; zero indicates success. */
          ErrorCode?: string;
          /** The human-readable status message. */
          Message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Megaventory purchase orders using documented structured filters. */
    "megaventory.list_purchase_orders": {
      input: {
        /** The filters applied by Megaventory. */
        filters?: Array<{
          /**
           * The upstream field name to filter.
           * @minLength 1
           */
          fieldName: string;
          /** The comparison operator for this filter. */
          searchOperator: "Undefined" | "Equals" | "NotEquals" | "BeginsWith" | "EndsWith" | "Contains" | "GreaterThan" | "LessThan";
          /** The value compared with the selected field. */
          searchValue: unknown;
          /** How this filter is combined with the preceding filter. */
          andOr?: "And" | "Or";
          /** How this filter opens or closes a filter group. */
          group?: "Undefined" | "NoGroup" | "StartGroup" | "EndGroup";
        }>;
        /**
         * The maximum number of records returned, or -1 to return every matching record.
         * @minimum -1
         */
        returnTopNRecords?: number;
      };
      output: {
        /** The purchase order records returned by Megaventory. */
        purchaseOrders: Array<Record<string, unknown>>;
        /** The status returned by Megaventory. */
        responseStatus: {
          /** The Megaventory error code; zero indicates success. */
          ErrorCode?: string;
          /** The human-readable status message. */
          Message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Megaventory sales orders using documented structured filters. */
    "megaventory.list_sales_orders": {
      input: {
        /** The filters applied by Megaventory. */
        filters?: Array<{
          /**
           * The upstream field name to filter.
           * @minLength 1
           */
          fieldName: string;
          /** The comparison operator for this filter. */
          searchOperator: "Undefined" | "Equals" | "NotEquals" | "BeginsWith" | "EndsWith" | "Contains" | "GreaterThan" | "LessThan";
          /** The value compared with the selected field. */
          searchValue: unknown;
          /** How this filter is combined with the preceding filter. */
          andOr?: "And" | "Or";
          /** How this filter opens or closes a filter group. */
          group?: "Undefined" | "NoGroup" | "StartGroup" | "EndGroup";
        }>;
        /**
         * The maximum number of records returned, or -1 to return every matching record.
         * @minimum -1
         */
        returnTopNRecords?: number;
      };
      output: {
        /** The sales order records returned by Megaventory. */
        salesOrders: Array<Record<string, unknown>>;
        /** The status returned by Megaventory. */
        responseStatus: {
          /** The Megaventory error code; zero indicates success. */
          ErrorCode?: string;
          /** The human-readable status message. */
          Message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Megaventory suppliers and clients for order lookups. */
    "megaventory.list_supplier_clients": {
      input: {
        /** The filters applied by Megaventory. */
        filters?: Array<{
          /**
           * The upstream field name to filter.
           * @minLength 1
           */
          fieldName: string;
          /** The comparison operator for this filter. */
          searchOperator: "Undefined" | "Equals" | "NotEquals" | "BeginsWith" | "EndsWith" | "Contains" | "GreaterThan" | "LessThan";
          /** The value compared with the selected field. */
          searchValue: unknown;
          /** How this filter is combined with the preceding filter. */
          andOr?: "And" | "Or";
          /** How this filter opens or closes a filter group. */
          group?: "Undefined" | "NoGroup" | "StartGroup" | "EndGroup";
        }>;
        /**
         * The maximum number of records returned, or -1 to return every matching record.
         * @minimum -1
         */
        returnTopNRecords?: number;
      };
      output: {
        /** The supplier-client records returned by Megaventory. */
        supplierClients: Array<Record<string, unknown>>;
        /** The status returned by Megaventory. */
        responseStatus: {
          /** The Megaventory error code; zero indicates success. */
          ErrorCode?: string;
          /** The human-readable status message. */
          Message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Insert a new Megaventory product or update its non-empty fields by SKU. */
    "megaventory.upsert_product": {
      input: {
        /**
         * The unique product SKU.
         * @minLength 1
         */
        productSku: string;
        /**
         * The product description.
         * @minLength 1
         */
        productDescription: string;
        /** The documented Megaventory product type. */
        productType?: "BuyFromSupplier" | "Service" | "ManufactureFromWorkOrder" | "BuyFromSupplierOrManufactureFromWorkOrder" | "TimeRestrictedService" | "ProductBundle" | "Undefined";
        /** The product version. */
        productVersion?: string;
        /** The product EAN or barcode. */
        productEan?: string;
        /** The product unit of measurement. */
        unitOfMeasurement?: string;
        /** The default selling price. */
        sellingPrice?: number;
        /** The default purchase price. */
        purchasePrice?: number;
        /** Comments stored with the product. */
        comments?: string;
        /**
         * The public product image URL.
         * @format uri
         */
        imageUrl?: string;
      };
      output: {
        /** The inserted or updated Megaventory product. */
        product: Record<string, unknown>;
        /** The status returned by Megaventory. */
        responseStatus: {
          /** The Megaventory error code; zero indicates success. */
          ErrorCode?: string;
          /** The human-readable status message. */
          Message?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Insert or update a Megaventory purchase order with one or more order lines. */
    "megaventory.upsert_purchase_order": {
      input: {
        /**
         * The existing purchase order ID; omit it to insert a new order.
         * @minimum 0
         */
        orderId?: number;
        /**
         * The purchase order document type ID.
         * @exclusiveMinimum 0
         */
        orderTypeId: number;
        /**
         * The supplier supplier-client ID.
         * @exclusiveMinimum 0
         */
        supplierId: number;
        /**
         * The inventory location ID.
         * @exclusiveMinimum 0
         */
        inventoryLocationId: number;
        /** The documented Megaventory purchase order status. */
        status: "ValidStatus" | "Pending" | "Verified" | "PartiallyReceived" | "PartiallyReceivedAndPartiallyInvoiced" | "FullyReceived" | "PartiallyInvoiced" | "FullyInvoiced" | "Closed" | "Cancelled";
        /** The purchase order number, when it is not generated automatically. */
        orderNumber?: string;
        /** The caller's purchase order reference number. */
        referenceNumber?: string;
        /** Comments stored with the purchase order. */
        comments?: string;
        /**
         * The purchase order lines.
         * @minItems 1
         */
        details: Array<{
          /**
           * The product SKU for this order line.
           * @minLength 1
           */
          productSku: string;
          /**
           * The ordered quantity.
           * @exclusiveMinimum 0
           */
          quantity: number;
          /** The unit price before tax and discount. */
          unitPrice?: number;
          /** The Megaventory tax identifier. */
          taxId?: number;
          /** The Megaventory discount identifier. */
          discountId?: number;
          /** Remarks stored on this order line. */
          remarks?: string;
        }>;
      };
      output: {
        /** The inserted or updated Megaventory purchase order. */
        order: Record<string, unknown>;
        /** The status returned by Megaventory. */
        responseStatus: {
          /** The Megaventory error code; zero indicates success. */
          ErrorCode?: string;
          /** The human-readable status message. */
          Message?: string;
          [key: string]: unknown;
        };
        /** The entity identifier returned by Megaventory. */
        entityId?: number;
        /** The related document identifier returned by Megaventory. */
        relatedDocumentId?: number;
      };
    };
    /** Insert or update a Megaventory sales order with one or more order lines. */
    "megaventory.upsert_sales_order": {
      input: {
        /**
         * The existing sales order ID; omit it to insert a new order.
         * @minimum 0
         */
        orderId?: number;
        /**
         * The sales order document type ID.
         * @exclusiveMinimum 0
         */
        orderTypeId: number;
        /**
         * The client supplier-client ID.
         * @exclusiveMinimum 0
         */
        clientId: number;
        /**
         * The inventory location ID.
         * @exclusiveMinimum 0
         */
        inventoryLocationId: number;
        /** The documented Megaventory sales order status. */
        status: "ValidStatus" | "Pending" | "Verified" | "PartiallyShipped" | "PartiallyShippedAndPartiallyInvoiced" | "FullyShipped" | "PartiallyInvoiced" | "FullyInvoiced" | "Closed" | "Cancelled";
        /** The sales order number, when it is not generated automatically. */
        orderNumber?: string;
        /** The caller's sales order reference number. */
        referenceNumber?: string;
        /** Comments stored with the sales order. */
        comments?: string;
        /**
         * The sales order lines.
         * @minItems 1
         */
        details: Array<{
          /**
           * The product SKU for this order line.
           * @minLength 1
           */
          productSku: string;
          /**
           * The ordered quantity.
           * @exclusiveMinimum 0
           */
          quantity: number;
          /** The unit price before tax and discount. */
          unitPrice?: number;
          /** The Megaventory tax identifier. */
          taxId?: number;
          /** The Megaventory discount identifier. */
          discountId?: number;
          /** Remarks stored on this order line. */
          remarks?: string;
        }>;
      };
      output: {
        /** The inserted or updated Megaventory sales order. */
        order: Record<string, unknown>;
        /** The status returned by Megaventory. */
        responseStatus: {
          /** The Megaventory error code; zero indicates success. */
          ErrorCode?: string;
          /** The human-readable status message. */
          Message?: string;
          [key: string]: unknown;
        };
        /** The entity identifier returned by Megaventory. */
        entityId?: number;
        /** The related document identifier returned by Megaventory. */
        relatedDocumentId?: number;
      };
    };
  }
}
