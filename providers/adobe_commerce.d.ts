import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Adobe Commerce category by category ID. */
    "adobe_commerce.get_category": {
      input: {
        /**
         * The numeric Adobe Commerce category ID.
         * @minimum 1
         */
        categoryId: number;
        /**
         * The numeric store ID to read the category from.
         * @minimum 0
         */
        storeId?: number;
        /**
         * Optional Adobe Commerce fields selector used to return a partial response.
         * @minLength 1
         */
        fields?: string;
        /**
         * Optional Adobe Commerce store view code to place between /rest and /V1.
         * @minLength 1
         */
        storeCode?: string;
      };
      output: {
        /** A normalized Adobe Commerce category. */
        category: {
          /** Numeric category ID when returned by Adobe Commerce. */
          id: number | null;
          /** Parent category ID when returned by Adobe Commerce. */
          parentId: number | null;
          /** Category name when returned by Adobe Commerce. */
          name: string | null;
          /** Whether the category is active when returned by Adobe Commerce. */
          isActive: boolean | null;
          /** Category position when returned by Adobe Commerce. */
          position: number | null;
          /** Category level when returned by Adobe Commerce. */
          level: number | null;
          /** Category path when returned by Adobe Commerce. */
          path: string | null;
          /** Product count when returned by Adobe Commerce. */
          productCount: number | null;
          /** Child category objects returned by Adobe Commerce. */
          children: Array<Record<string, unknown>>;
          /** The raw Adobe Commerce category payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve one Adobe Commerce product by SKU. */
    "adobe_commerce.get_product": {
      input: {
        /**
         * The Adobe Commerce product SKU.
         * @minLength 1
         */
        sku: string;
        /** Whether Adobe Commerce should return edit-mode product data. */
        editMode?: boolean;
        /**
         * The numeric store ID to read the product from.
         * @minimum 0
         */
        storeId?: number;
        /** Whether Adobe Commerce should force a product reload. */
        forceReload?: boolean;
        /**
         * Optional Adobe Commerce fields selector used to return a partial response.
         * @minLength 1
         */
        fields?: string;
        /**
         * Optional Adobe Commerce store view code to place between /rest and /V1.
         * @minLength 1
         */
        storeCode?: string;
      };
      output: {
        /** A normalized Adobe Commerce product. */
        product: {
          /** Numeric product ID when returned by Adobe Commerce. */
          id: number | null;
          /** Product SKU returned by Adobe Commerce. */
          sku: string;
          /** Product name when returned by Adobe Commerce. */
          name: string | null;
          /** Product price when returned by Adobe Commerce. */
          price: number | null;
          /** Product type ID when returned by Adobe Commerce. */
          typeId: string | null;
          /** Product attribute set ID when returned by Adobe Commerce. */
          attributeSetId: number | null;
          /** Product status code when returned by Adobe Commerce. */
          status: number | null;
          /** Product visibility code when returned by Adobe Commerce. */
          visibility: number | null;
          /** Product creation timestamp when returned by Adobe Commerce. */
          createdAt: string | null;
          /** Product update timestamp when returned by Adobe Commerce. */
          updatedAt: string | null;
          /** Custom attributes returned by Adobe Commerce. */
          customAttributes: Array<{
            /** Attribute code returned by Adobe Commerce. */
            attribute_code?: string;
            /** Attribute value returned by Adobe Commerce. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** Adobe Commerce extension attributes returned for this resource. */
          extensionAttributes: Record<string, unknown> | null;
          /** The raw Adobe Commerce product payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the Adobe Commerce category tree with optional root and depth limits. */
    "adobe_commerce.list_categories": {
      input: {
        /**
         * Category ID to use as the category tree root.
         * @minimum 1
         */
        rootCategoryId?: number;
        /**
         * Maximum category tree depth to return.
         * @minimum 1
         */
        depth?: number;
        /**
         * Optional Adobe Commerce fields selector used to return a partial response.
         * @minLength 1
         */
        fields?: string;
        /**
         * Optional Adobe Commerce store view code to place between /rest and /V1.
         * @minLength 1
         */
        storeCode?: string;
      };
      output: {
        /** A normalized Adobe Commerce category. */
        category: {
          /** Numeric category ID when returned by Adobe Commerce. */
          id: number | null;
          /** Parent category ID when returned by Adobe Commerce. */
          parentId: number | null;
          /** Category name when returned by Adobe Commerce. */
          name: string | null;
          /** Whether the category is active when returned by Adobe Commerce. */
          isActive: boolean | null;
          /** Category position when returned by Adobe Commerce. */
          position: number | null;
          /** Category level when returned by Adobe Commerce. */
          level: number | null;
          /** Category path when returned by Adobe Commerce. */
          path: string | null;
          /** Product count when returned by Adobe Commerce. */
          productCount: number | null;
          /** Child category objects returned by Adobe Commerce. */
          children: Array<Record<string, unknown>>;
          /** The raw Adobe Commerce category payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Adobe Commerce products with optional searchCriteria filters and pagination. */
    "adobe_commerce.list_products": {
      input: {
        /**
         * Adobe Commerce searchCriteria filter groups. Groups are ANDed together.
         * @minItems 1
         */
        filterGroups?: Array<{
          /**
           * Filters in this group. Multiple filters in one group are ORed.
           * @minItems 1
           */
          filters: Array<{
            /**
             * The top-level Adobe Commerce field to filter.
             * @minLength 1
             */
            field: string;
            /**
             * The filter value sent to Adobe Commerce.
             * @minLength 1
             */
            value: string;
            /** Adobe Commerce search condition type for the filter value. */
            conditionType?: "eq" | "finset" | "from" | "gt" | "gteq" | "in" | "like" | "lt" | "lteq" | "moreq" | "neq" | "nfinset" | "nin" | "nlike" | "notnull" | "null" | "to";
          }>;
        }>;
        /**
         * Adobe Commerce searchCriteria sort orders.
         * @minItems 1
         */
        sortOrders?: Array<{
          /**
           * The top-level Adobe Commerce field to sort by.
           * @minLength 1
           */
          field: string;
          /** Adobe Commerce search sort direction. */
          direction?: "ASC" | "DESC";
        }>;
        /**
         * Maximum number of products to return.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * One-based result page to request.
         * @exclusiveMinimum 0
         */
        currentPage?: number;
        /**
         * Optional Adobe Commerce fields selector used to return a partial response.
         * @minLength 1
         */
        fields?: string;
        /**
         * Optional Adobe Commerce store view code to place between /rest and /V1.
         * @minLength 1
         */
        storeCode?: string;
      };
      output: {
        /** Products returned by Adobe Commerce. */
        products: Array<{
          /** Numeric product ID when returned by Adobe Commerce. */
          id: number | null;
          /** Product SKU returned by Adobe Commerce. */
          sku: string;
          /** Product name when returned by Adobe Commerce. */
          name: string | null;
          /** Product price when returned by Adobe Commerce. */
          price: number | null;
          /** Product type ID when returned by Adobe Commerce. */
          typeId: string | null;
          /** Product attribute set ID when returned by Adobe Commerce. */
          attributeSetId: number | null;
          /** Product status code when returned by Adobe Commerce. */
          status: number | null;
          /** Product visibility code when returned by Adobe Commerce. */
          visibility: number | null;
          /** Product creation timestamp when returned by Adobe Commerce. */
          createdAt: string | null;
          /** Product update timestamp when returned by Adobe Commerce. */
          updatedAt: string | null;
          /** Custom attributes returned by Adobe Commerce. */
          customAttributes: Array<{
            /** Attribute code returned by Adobe Commerce. */
            attribute_code?: string;
            /** Attribute value returned by Adobe Commerce. */
            value?: unknown;
            [key: string]: unknown;
          }>;
          /** Adobe Commerce extension attributes returned for this resource. */
          extensionAttributes: Record<string, unknown> | null;
          /** The raw Adobe Commerce product payload. */
          raw: Record<string, unknown>;
        }>;
        /** Adobe Commerce search_criteria object. */
        searchCriteria: Record<string, unknown> | null;
        /** Total number of matching products reported by Adobe Commerce. */
        totalCount: number;
      };
    };
  }
}
