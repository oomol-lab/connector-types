import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Read a Planyo resource's settings, custom properties and photos. */
    "planyo.get_resource_info": {
      input: {
        /** Planyo resource ID. */
        resource_id: number;
        /**
         * Two-letter ISO 639-1 language code; normalized to uppercase.
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
      };
      output: {
        /** Resource name. */
        name?: string;
        /** Number of resource units. */
        quantity?: number;
        /** Planyo site ID. */
        site_id?: number;
        [key: string]: unknown;
      };
    };
    /** Read Planyo site information, custom properties and photos. */
    "planyo.get_site_info": {
      input: {
        /** Planyo site ID; required for metasite keys when reading site information. */
        site_id?: number;
        /**
         * Two-letter ISO 639-1 language code; normalized to uppercase.
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
      };
      output: {
        /** Site name. */
        name?: string;
        /** Site timezone. */
        timezone?: string;
        /** Default site language. */
        default_language?: string;
        [key: string]: unknown;
      };
    };
    /** List one page of Planyo resources with optional settings, photos and filters. */
    "planyo.list_resources": {
      input: {
        /**
         * Bitmask: 1 names, 2 settings, 4 custom properties, 8 photos; default 1.
         * @minimum 1
         * @maximum 15
         */
        detail_level?: number;
        /**
         * Zero-based page number; default 0.
         * @minimum 0
         */
        page?: number;
        /**
         * Maximum results per page; default 100.
         * @minimum 1
         * @maximum 300
         */
        page_size?: number;
        /** Return only published resources. */
        list_published_only?: boolean;
        /** Return only resources bookable outside a package. */
        list_reservable_only?: boolean;
        /** Comma-separated resource types: resource, bundle, package; or all. */
        list_resource_types?: string;
        /** Filter by resource administrator ID. */
        admin_id?: number;
        /** Custom resource filters: use full prop_res_ prefixed parameter names. */
        properties?: Record<string, string>;
        /** Comma-separated resource IDs to include. */
        ppp_resfilter?: string;
        /** Sort by resname, site, location or a prop_res_ custom property name. */
        sort?: string;
        /** Planyo site ID; required for metasite keys when reading site information. */
        site_id?: number;
        /**
         * Two-letter ISO 639-1 language code; normalized to uppercase.
         * @minLength 2
         * @maxLength 2
         */
        language?: string;
      };
      output: {
        /** Total resources matching the query. */
        resource_count?: number;
        /** Last zero-based page number. */
        max_page?: number;
        /** Resources returned on this page. */
        resources?: Array<{
          /** Resource name. */
          name?: string;
          /** Number of resource units. */
          quantity?: number;
          /** Planyo site ID. */
          site_id?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
