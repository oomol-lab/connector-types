import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one catalog SKU by Firstbase SKU ID. */
    "firstbase.get_catalog_sku": {
      input: {
        /**
         * The Firstbase SKU ID to retrieve.
         * @format uuid
         */
        skuId: string;
      };
      output: {
        /** A Firstbase catalog SKU with stable key fields and remaining upstream fields preserved. */
        sku: {
          /**
           * Firstbase internal SKU ID.
           * @format uuid
           */
          id?: string;
          /** Presigned URL for the product image. */
          imageUrl?: string;
          /** SKU title. */
          title?: string;
          /** Vendor SKU value. */
          vendorSku?: string;
          /** Vendor code. */
          vendorCode?: string;
          /** SKU part number. */
          partNumber?: string;
          /** Whether the SKU is part of the organization's standard catalog. */
          isStandardCatalog?: boolean;
          /** Structured SKU metadata returned by Firstbase. */
          metadata?: Record<string, unknown>;
          /** Pricing details for the SKU. */
          pricing?: Array<Record<string, unknown>>;
          /** Regions where this SKU is available. */
          stock?: Array<Record<string, unknown>>;
          /** Category code for the SKU. */
          categoryCode?: string;
          /** Category name for the SKU. */
          categoryNameOfSku?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one inventory item by Firstbase inventory ID. */
    "firstbase.get_inventory": {
      input: {
        /**
         * The Firstbase inventory ID to retrieve.
         * @format uuid
         */
        inventoryId: string;
      };
      output: {
        /** A Firstbase inventory item with stable key fields and remaining upstream fields preserved. */
        inventory: {
          /**
           * Unique identifier for this inventory item.
           * @format uuid
           */
          id?: string;
          /**
           * The SKU ID this inventory item is associated with.
           * @format uuid
           */
          skuId?: string;
          /** Hardware serial number of the device. */
          serialNumber?: string | null;
          /** IMEI values associated with the inventory item. */
          imei?: Array<string>;
          /** Current lifecycle state of the inventory item. */
          deployStatus?: string;
          /** Reason code for the current deploy status. */
          deployReason?: string | null;
          /** Physical condition of the inventory item. */
          condition?: string;
          /** Category code of the inventory item's SKU. */
          categoryCode?: string;
          /** Human-readable category name for the SKU. */
          categoryNameOfSku?: string;
          /** Display title of the SKU. */
          skuTitle?: string;
          /** Vendor or brand code for the SKU. */
          vendorCode?: string;
          /** Vendor-specific SKU or model identifier. */
          vendorSku?: string;
          /** Timestamp when this inventory item was created in Firstbase. */
          createdAt?: string;
          /** Timestamp when this inventory item was last updated. */
          updatedAt?: string;
          /** Key-value tags attached to this inventory item. */
          tags?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List brands available for Firstbase asset creation. */
    "firstbase.list_brands": {
      input: {
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return in a page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Filter by an exact Firstbase code.
         * @minLength 1
         */
        code?: string;
        /**
         * Filter by a case-insensitive partial name match.
         * @minLength 1
         */
        name?: string;
        /** Whether to return active metadata records. */
        active?: boolean;
      };
      output: {
        /** Brands returned by Firstbase. */
        brands: Array<{
          /** Unique identifier returned by Firstbase. */
          id?: string;
          /** Code returned by Firstbase. */
          code?: string;
          /** Human-readable name returned by Firstbase. */
          name?: string;
          /** Whether Firstbase reports the record as active. */
          active?: boolean;
          [key: string]: unknown;
        }>;
        /** Current 1-based page number returned by Firstbase. */
        pageNumber: number;
        /** Maximum number of items per page returned by Firstbase. */
        size: number;
        /** Total number of items matching the query across all pages. */
        totalElements: number;
        /** Total number of pages returned by Firstbase. */
        totalPages: number;
      };
    };
    /** List catalog SKUs available to the authenticated Firstbase organization. */
    "firstbase.list_catalog_skus": {
      input: {
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return in a page.
         * @minimum 1
         */
        size?: number;
        /**
         * Category codes to filter by.
         * @minItems 1
         */
        categories?: Array<string>;
      };
      output: {
        /** Catalog SKUs returned by Firstbase. */
        skus: Array<{
          /**
           * Firstbase internal SKU ID.
           * @format uuid
           */
          id?: string;
          /** Presigned URL for the product image. */
          imageUrl?: string;
          /** SKU title. */
          title?: string;
          /** Vendor SKU value. */
          vendorSku?: string;
          /** Vendor code. */
          vendorCode?: string;
          /** SKU part number. */
          partNumber?: string;
          /** Whether the SKU is part of the organization's standard catalog. */
          isStandardCatalog?: boolean;
          /** Structured SKU metadata returned by Firstbase. */
          metadata?: Record<string, unknown>;
          /** Pricing details for the SKU. */
          pricing?: Array<Record<string, unknown>>;
          /** Regions where this SKU is available. */
          stock?: Array<Record<string, unknown>>;
          /** Category code for the SKU. */
          categoryCode?: string;
          /** Category name for the SKU. */
          categoryNameOfSku?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List product categories available for Firstbase asset creation. */
    "firstbase.list_categories": {
      input: {
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return in a page, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * Filter by an exact Firstbase code.
         * @minLength 1
         */
        code?: string;
        /**
         * Filter by a case-insensitive partial name match.
         * @minLength 1
         */
        name?: string;
        /** Whether to return active metadata records. */
        active?: boolean;
      };
      output: {
        /** Categories returned by Firstbase. */
        categories: Array<{
          /** Unique identifier returned by Firstbase. */
          id?: string;
          /** Code returned by Firstbase. */
          code?: string;
          /** Human-readable name returned by Firstbase. */
          name?: string;
          /** Whether Firstbase reports the record as active. */
          active?: boolean;
          [key: string]: unknown;
        }>;
        /** Current 1-based page number returned by Firstbase. */
        pageNumber: number;
        /** Maximum number of items per page returned by Firstbase. */
        size: number;
        /** Total number of items matching the query across all pages. */
        totalElements: number;
        /** Total number of pages returned by Firstbase. */
        totalPages: number;
      };
    };
    /** List inventory items owned by the authenticated Firstbase organization. */
    "firstbase.list_inventory": {
      input: {
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of results to return in a page.
         * @minimum 1
         */
        size?: number;
        /**
         * ID of the person to which inventory is assigned.
         * @minLength 1
         */
        personId?: string;
        /**
         * ID of the warehouse to which inventory is assigned.
         * @minLength 1
         */
        warehouseId?: string;
        /**
         * ID of the office to which inventory is assigned.
         * @minLength 1
         */
        officeId?: string;
        /**
         * Category codes to filter by.
         * @minItems 1
         */
        categories?: Array<string>;
        /**
         * Deployment statuses to filter by. Deprecated statuses rejected by Firstbase are not accepted.
         * @minItems 1
         */
        deployStatuses?: Array<"ARCHIVED" | "AVAILABLE" | "AWAITING_ARRIVAL" | "DEPLOYED" | "ON_HOLD" | "UNAVAILABLE" | "VOIDED">;
        /**
         * SKU IDs to filter by.
         * @minItems 1
         */
        skuIds?: Array<string>;
        /**
         * Keyword that searches description, manufacturer, category, title, and serial number.
         * @minLength 1
         */
        searchString?: string;
        /**
         * Filter inventory updated after this UTC date-time in Firstbase's documented ISO-8601 format.
         * @minLength 1
         */
        updatedAtFrom?: string;
        /**
         * Filter inventory updated before this UTC date-time in Firstbase's documented ISO-8601 format.
         * @minLength 1
         */
        updatedAtTo?: string;
        /**
         * Email address of the person to which inventory is assigned.
         * @format email
         */
        assignedEmail?: string;
        /**
         * Inventory serial numbers to filter by.
         * @minItems 1
         */
        serialNumber?: Array<string>;
        /**
         * Vendor SKUs to filter by.
         * @minItems 1
         */
        vendorSku?: Array<string>;
        /** Field to sort inventory by. */
        sortBy?: "product" | "skuId" | "createdAt" | "updatedAt" | "serialNumber" | "deployStatus" | "deployReason" | "assignee" | "condition" | "renewalDate" | "category" | "suppliedBy";
        /** Direction for inventory sorting. */
        sortDirection?: "ASC" | "DESC";
      };
      output: {
        /** Inventory items returned by Firstbase. */
        inventory: Array<{
          /**
           * Unique identifier for this inventory item.
           * @format uuid
           */
          id?: string;
          /**
           * The SKU ID this inventory item is associated with.
           * @format uuid
           */
          skuId?: string;
          /** Hardware serial number of the device. */
          serialNumber?: string | null;
          /** IMEI values associated with the inventory item. */
          imei?: Array<string>;
          /** Current lifecycle state of the inventory item. */
          deployStatus?: string;
          /** Reason code for the current deploy status. */
          deployReason?: string | null;
          /** Physical condition of the inventory item. */
          condition?: string;
          /** Category code of the inventory item's SKU. */
          categoryCode?: string;
          /** Human-readable category name for the SKU. */
          categoryNameOfSku?: string;
          /** Display title of the SKU. */
          skuTitle?: string;
          /** Vendor or brand code for the SKU. */
          vendorCode?: string;
          /** Vendor-specific SKU or model identifier. */
          vendorSku?: string;
          /** Timestamp when this inventory item was created in Firstbase. */
          createdAt?: string;
          /** Timestamp when this inventory item was last updated. */
          updatedAt?: string;
          /** Key-value tags attached to this inventory item. */
          tags?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
