import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one or more products in WP Maps. */
    "wp_maps.create_products": {
      input: {
        /**
         * Products to create.
         * @minItems 1
         */
        products: Array<{
          /**
           * Product title.
           * @minLength 1
           */
          title: string;
          /** Product description. */
          description?: string;
          /** Product price as displayed by WP Maps. */
          price?: string;
          /** Public product page URL. */
          url?: string;
          /** Public product image URL passed to WP Maps. */
          images?: string;
          /** Product brand. */
          brand?: string;
          /** Product category value accepted by WP Maps. */
          categories?: string;
          /** WP Maps tab assigned to the product. */
          tab?: string;
          /** WP Maps product type ID. */
          ptype?: string;
          /** Online retailer links keyed by retailer name. */
          affs?: Record<string, string>;
        }>;
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Products saved by WP Maps. */
        products: Array<{
          /** Product ID. */
          id?: number | null;
          /** Product title. */
          title?: string | null;
          /** Product description. */
          description?: string | null;
          /** Product price. */
          price?: string | null;
          /** Product page URL. */
          url?: string | null;
          /** Product image URL or provider-defined image value. */
          images?: string | null;
          /** Product brand. */
          brand?: string | null;
          /** Product categories returned by WP Maps. */
          categories?: unknown;
          /** Stores associated with the product. */
          stores?: unknown;
          /** Product creation timestamp. */
          created_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Product save summary returned by WP Maps. */
        results: string;
      };
    };
    /** Create one or more stores in WP Maps. */
    "wp_maps.create_stores": {
      input: {
        /**
         * Stores to create.
         * @minItems 1
         */
        stores: Array<{
          /**
           * Store title.
           * @minLength 1
           */
          title: string;
          /** Store description. */
          description?: string;
          /** Public store page URL. */
          url?: string | null;
          /** Provider-defined value controlling whether the store is disabled. */
          disable?: unknown;
          /** Store street address. */
          street?: string;
          /** Store city. */
          city?: string;
          /** Store state or region. */
          state?: string;
          /** Store postal code. */
          postal_code?: string | null;
          /** Store country. */
          country?: string;
          /** Store latitude. */
          lat?: number | null;
          /** Store longitude. */
          lng?: number | null;
          /** Store phone number. */
          phone?: string | null;
          /** Store email address. */
          email?: string | null;
        }>;
        /** Geocoder used when WP Maps resolves store coordinates. */
        geocoder?: "google_maps" | "mapbox" | "arcgis_online";
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Stores saved by WP Maps. */
        stores: Array<{
          /** Store ID. */
          id?: number | null;
          /** Store title. */
          title?: string | null;
          /** Store description. */
          description?: string | null;
          /** Store page URL. */
          url?: string | null;
          /** Provider-defined disabled value. */
          disable?: unknown;
          /** Store street address. */
          street?: string | null;
          /** Store city. */
          city?: string | null;
          /** Store state or region. */
          state?: string | null;
          /** Store postal code. */
          postal_code?: string | null;
          /** Store country. */
          country?: string | null;
          /** Store latitude. */
          lat?: number | null;
          /** Store longitude. */
          lng?: number | null;
          /** Store phone number. */
          phone?: string | null;
          /** Store email address. */
          email?: string | null;
          [key: string]: unknown;
        }>;
        /** Store save summary returned by WP Maps. */
        results: string;
      };
    };
    /** Delete one or more WP Maps products by ID. */
    "wp_maps.delete_products": {
      input: {
        /**
         * Product IDs to delete.
         * @minItems 1
         */
        productIds: Array<number>;
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Whether WP Maps reports that the delete succeeded. */
        success: boolean;
        /** Delete result message returned by WP Maps. */
        message: string;
      };
    };
    /** Delete one or more WP Maps stores by ID. */
    "wp_maps.delete_stores": {
      input: {
        /**
         * Store IDs to delete.
         * @minItems 1
         */
        storeIds: Array<number>;
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Whether WP Maps reports that the delete succeeded. */
        success: boolean;
        /** Delete result message returned by WP Maps. */
        message: string;
      };
    };
    /** Get one WP Maps product by ID. */
    "wp_maps.get_product": {
      input: {
        /**
         * WP Maps resource ID.
         * @exclusiveMinimum 0
         */
        productId: number;
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** A product returned by WP Maps. */
        product: {
          /** Product ID. */
          id?: number | null;
          /** Product title. */
          title?: string | null;
          /** Product description. */
          description?: string | null;
          /** Product price. */
          price?: string | null;
          /** Product page URL. */
          url?: string | null;
          /** Product image URL or provider-defined image value. */
          images?: string | null;
          /** Product brand. */
          brand?: string | null;
          /** Product categories returned by WP Maps. */
          categories?: unknown;
          /** Stores associated with the product. */
          stores?: unknown;
          /** Product creation timestamp. */
          created_at?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get one WP Maps store by ID. */
    "wp_maps.get_store": {
      input: {
        /**
         * WP Maps resource ID.
         * @exclusiveMinimum 0
         */
        storeId: number;
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** A store returned by WP Maps. */
        store: {
          /** Store ID. */
          id?: number | null;
          /** Store title. */
          title?: string | null;
          /** Store description. */
          description?: string | null;
          /** Store page URL. */
          url?: string | null;
          /** Provider-defined disabled value. */
          disable?: unknown;
          /** Store street address. */
          street?: string | null;
          /** Store city. */
          city?: string | null;
          /** Store state or region. */
          state?: string | null;
          /** Store postal code. */
          postal_code?: string | null;
          /** Store country. */
          country?: string | null;
          /** Store latitude. */
          lat?: number | null;
          /** Store longitude. */
          lng?: number | null;
          /** Store phone number. */
          phone?: string | null;
          /** Store email address. */
          email?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List all products in the connected WP Maps account. */
    "wp_maps.list_products": {
      input: {
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Rows returned by WP Maps. */
        data: Array<unknown>;
        /** Column names returned by WP Maps. */
        header: Array<string>;
      };
    };
    /** List all stores in the connected WP Maps account. */
    "wp_maps.list_stores": {
      input: {
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Rows returned by WP Maps. */
        data: Array<unknown>;
        /** Column names returned by WP Maps. */
        header: Array<string>;
      };
    };
    /** Update one or more existing products in WP Maps. */
    "wp_maps.update_products": {
      input: {
        /**
         * Products to update.
         * @minItems 1
         */
        products: Array<{
          /**
           * WP Maps resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * Product title.
           * @minLength 1
           */
          title: string;
          /** Product description. */
          description?: string;
          /** Product price as displayed by WP Maps. */
          price?: string;
          /** Public product page URL. */
          url?: string;
          /** Public product image URL passed to WP Maps. */
          images?: string;
          /** Product brand. */
          brand?: string;
          /** Product category value accepted by WP Maps. */
          categories?: string;
          /** WP Maps tab assigned to the product. */
          tab?: string;
          /** WP Maps product type ID. */
          ptype?: string;
          /** Online retailer links keyed by retailer name. */
          affs?: Record<string, string>;
        }>;
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Products saved by WP Maps. */
        products: Array<{
          /** Product ID. */
          id?: number | null;
          /** Product title. */
          title?: string | null;
          /** Product description. */
          description?: string | null;
          /** Product price. */
          price?: string | null;
          /** Product page URL. */
          url?: string | null;
          /** Product image URL or provider-defined image value. */
          images?: string | null;
          /** Product brand. */
          brand?: string | null;
          /** Product categories returned by WP Maps. */
          categories?: unknown;
          /** Stores associated with the product. */
          stores?: unknown;
          /** Product creation timestamp. */
          created_at?: string | null;
          [key: string]: unknown;
        }>;
        /** Product save summary returned by WP Maps. */
        results: string;
      };
    };
    /** Update one or more existing stores in WP Maps. */
    "wp_maps.update_stores": {
      input: {
        /**
         * Stores to update.
         * @minItems 1
         */
        stores: Array<{
          /**
           * WP Maps resource ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * Store title.
           * @minLength 1
           */
          title: string;
          /** Store description. */
          description?: string;
          /** Public store page URL. */
          url?: string | null;
          /** Provider-defined value controlling whether the store is disabled. */
          disable?: unknown;
          /** Store street address. */
          street?: string;
          /** Store city. */
          city?: string;
          /** Store state or region. */
          state?: string;
          /** Store postal code. */
          postal_code?: string | null;
          /** Store country. */
          country?: string;
          /** Store latitude. */
          lat?: number | null;
          /** Store longitude. */
          lng?: number | null;
          /** Store phone number. */
          phone?: string | null;
          /** Store email address. */
          email?: string | null;
        }>;
        /** Geocoder used when WP Maps resolves store coordinates. */
        geocoder?: "google_maps" | "mapbox" | "arcgis_online";
        /**
         * WP Maps language code used for localized fields, such as en_US.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Stores saved by WP Maps. */
        stores: Array<{
          /** Store ID. */
          id?: number | null;
          /** Store title. */
          title?: string | null;
          /** Store description. */
          description?: string | null;
          /** Store page URL. */
          url?: string | null;
          /** Provider-defined disabled value. */
          disable?: unknown;
          /** Store street address. */
          street?: string | null;
          /** Store city. */
          city?: string | null;
          /** Store state or region. */
          state?: string | null;
          /** Store postal code. */
          postal_code?: string | null;
          /** Store country. */
          country?: string | null;
          /** Store latitude. */
          lat?: number | null;
          /** Store longitude. */
          lng?: number | null;
          /** Store phone number. */
          phone?: string | null;
          /** Store email address. */
          email?: string | null;
          [key: string]: unknown;
        }>;
        /** Store save summary returned by WP Maps. */
        results: string;
      };
    };
  }
}
