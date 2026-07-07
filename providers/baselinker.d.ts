import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List inventory catalogs available in BaseLinker storage. */
    "baselinker.list_inventories": {
      input: Record<string, never>;
      output: {
        /** Inventory catalogs returned by BaseLinker. */
        inventories: Array<{
          /** Inventory catalog ID. */
          inventory_id?: number;
          /** Inventory catalog name. */
          name?: string;
          /** Inventory catalog description. */
          description?: string;
          /** Languages available in the inventory. */
          languages?: Array<string>;
          /** Default inventory language code. */
          default_language?: string;
          /** Price group IDs available in the inventory. */
          price_groups?: Array<number>;
          /** Default price group ID. */
          default_price_group?: number;
          /** Warehouse IDs available in the inventory. */
          warehouses?: Array<string>;
          /** Default warehouse ID. */
          default_warehouse?: string;
          /** Whether this inventory supports reservations. */
          reservations?: boolean;
          /** Whether this is the default inventory catalog. */
          is_default?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List basic product data from a BaseLinker inventory catalog. */
    "baselinker.list_inventory_products": {
      input: {
        /**
         * Inventory catalog ID returned by list_inventories.
         * @exclusiveMinimum 0
         */
        inventory_id: number;
        /**
         * Product ID filter.
         * @exclusiveMinimum 0
         */
        filter_id?: number;
        /**
         * Category ID filter.
         * @exclusiveMinimum 0
         */
        filter_category_id?: number;
        /**
         * Product EAN filter.
         * @minLength 1
         */
        filter_ean?: string;
        /**
         * Product SKU filter.
         * @minLength 1
         */
        filter_sku?: string;
        /**
         * Product name search filter.
         * @minLength 1
         */
        filter_name?: string;
        /** Minimum product price filter. */
        filter_price_from?: number;
        /** Maximum product price filter. */
        filter_price_to?: number;
        /** Minimum stock quantity filter. */
        filter_stock_from?: number;
        /** Maximum stock quantity filter. */
        filter_stock_to?: number;
        /**
         * One-based result page. BaseLinker returns up to 1000 products per page.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Sort expression accepted by BaseLinker, such as "id ASC".
         * @minLength 1
         */
        filter_sort?: string;
        /**
         * Location name filter.
         * @minLength 1
         */
        filter_locations?: string;
        /** Whether to include product variants in addition to main products. */
        include_variants?: boolean;
      };
      output: {
        /** Products keyed by product ID. */
        products: Record<string, {
            /** Product ID. */
            id?: number;
            /** Parent product ID, or 0 for a main product. */
            parent_id?: number;
            /** Product EAN. */
            ean?: string;
            /** Product SKU. */
            sku?: string;
            /** Product name. */
            name?: string;
            /** Gross prices keyed by price group ID. */
            prices?: Record<string, number>;
            /** Stock quantity keyed by warehouse ID. */
            stock?: Record<string, number>;
            [key: string]: unknown;
          }>;
      };
    };
    /** List warehouses available in BaseLinker inventories. */
    "baselinker.list_inventory_warehouses": {
      input: Record<string, never>;
      output: {
        /** Inventory warehouses returned by BaseLinker. */
        warehouses: Array<{
          /** Warehouse type, such as bl, shop, warehouse, fulfillment, or blconnect. */
          warehouse_type?: string;
          /** Warehouse identifier. */
          warehouse_id?: number;
          /** Warehouse name. */
          name?: string;
          /** Warehouse description. */
          description?: string;
          /** Whether manual stock editing is permitted for this warehouse. */
          stock_edition?: boolean;
          /** Whether this is the default warehouse. */
          is_default?: boolean;
          /** Warehouse street address. */
          address?: string;
          /** Warehouse postal code. */
          postcode?: string;
          /** Warehouse city. */
          city?: string;
          /** Warehouse country as a two-letter ISO 3166-1 code. */
          country?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List recent BaseLinker order events from the order journal. */
    "baselinker.list_order_events": {
      input: {
        /**
         * Log ID from which events should be retrieved.
         * @minimum 0
         */
        last_log_id?: number;
        /** Event type IDs to include. */
        logs_types?: Array<number>;
        /**
         * Order identifier used to filter events.
         * @exclusiveMinimum 0
         */
        order_id?: number;
      };
      output: {
        /** Order events returned by BaseLinker. */
        logs: Array<{
          /** Event log ID returned by BaseLinker. */
          log_id?: number;
          /** Event ID when BaseLinker returns the documented id field. */
          id?: number;
          /** Order identifier associated with the event. */
          order_id?: number;
          /** BaseLinker event type identifier. */
          log_type?: number;
          /** Additional object identifier associated with the event type. */
          object_id?: number;
          /** Event time as a Unix timestamp. */
          date?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List order statuses configured in the BaseLinker order manager. */
    "baselinker.list_order_statuses": {
      input: Record<string, never>;
      output: {
        /** Order statuses returned by BaseLinker. */
        statuses: Array<{
          /** Status ID. */
          id?: number;
          /** Status name. */
          name?: string;
          /** Status color as a hex value. */
          color?: string;
          /** Status group ID. */
          group_id?: number;
          /** Whether this is the primary status, represented as 0 or 1. */
          is_primary?: number;
          /** Full status name displayed to the customer. */
          name_for_customer?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List BaseLinker orders using official order manager filters, returning up to 100 orders. */
    "baselinker.list_orders": {
      input: {
        /**
         * Order identifier. When provided, only this order is returned.
         * @exclusiveMinimum 0
         */
        order_id?: number;
        /**
         * Unix timestamp value accepted by BaseLinker.
         * @minimum 0
         */
        date_confirmed_from?: number;
        /**
         * Unix timestamp value accepted by BaseLinker.
         * @minimum 0
         */
        date_from?: number;
        /**
         * Order ID from which subsequent orders are collected.
         * @exclusiveMinimum 0
         */
        id_from?: number;
        /** Whether to include unconfirmed orders. */
        get_unconfirmed_orders?: boolean;
        /** Order status identifier used to filter orders. */
        status_id?: number;
        /**
         * Email address used to filter orders.
         * @format email
         */
        filter_email?: string;
        /**
         * Order source filter, such as ebay or amazon.
         * @minLength 1
         */
        filter_order_source?: string;
        /** Order source identifier filter. */
        filter_order_source_id?: number;
        /** Shop order identifier filter. */
        filter_shop_order_id?: number;
        /**
         * External marketplace or store order ID filter.
         * @minLength 1
         */
        filter_external_order_id?: string;
        /** Whether to include custom order extra fields. */
        include_custom_extra_fields?: boolean;
        /** Whether to include marketplace commission data. */
        include_commissions?: boolean;
        /** Whether to include Base Connect contractor data. */
        include_connect_data?: boolean;
        /** Whether to include applied discount data. */
        include_discounts_data?: boolean;
      };
      output: {
        /** Orders returned by BaseLinker. */
        orders: Array<{
          /** Order identifier from BaseLinker order manager. */
          order_id?: number;
          /** Order ID assigned by the connected store. */
          shop_order_id?: number;
          /** Order identifier assigned by an external marketplace or store. */
          external_order_id?: string;
          /** Order source, such as shop, personal, or a marketplace code. */
          order_source?: string;
          /** Identifier of the source account or store. */
          order_source_id?: number;
          /** Current BaseLinker order status ID. */
          order_status_id?: number;
          /** Order creation time as a Unix timestamp. */
          date_add?: number;
          /** Order confirmation time as a Unix timestamp. */
          date_confirmed?: number;
          /** Time when the order entered its current status. */
          date_in_status?: number;
          /** Whether the order is confirmed. */
          confirmed?: boolean;
          /** Three-letter order currency code. */
          currency?: string;
          /** Buyer email address. */
          email?: string;
          /** Buyer phone number. */
          phone?: string;
          /** Payment method name. */
          payment_method?: string;
          /** Amount already paid for the order. */
          payment_done?: number;
          /** Delivery method name. */
          delivery_method?: string;
          /** Gross delivery price. */
          delivery_price?: number;
          /** Products included in the order. */
          products?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
