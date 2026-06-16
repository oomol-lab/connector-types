import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one DNSFilter domain category by ID. */
    "dns_filter.get_category": {
      input: {
        /**
         * The DNSFilter resource ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A JSON:API resource returned by DNSFilter. */
        item: {
          /** The DNSFilter resource ID. */
          id?: string;
          /** The DNSFilter resource type. */
          type?: string;
          /** The DNSFilter resource UUID when provided. */
          uuid?: string;
          /** The DNSFilter resource attributes. */
          attributes?: Record<string, unknown>;
          /** The DNSFilter resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the DNSFilter user associated with the API key. */
    "dns_filter.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A JSON:API resource returned by DNSFilter. */
        user: {
          /** The DNSFilter resource ID. */
          id?: string;
          /** The DNSFilter resource type. */
          type?: string;
          /** The DNSFilter resource UUID when provided. */
          uuid?: string;
          /** The DNSFilter resource attributes. */
          attributes?: Record<string, unknown>;
          /** The DNSFilter resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the public IP address observed by DNSFilter for the current request. */
    "dns_filter.get_my_ip": {
      input: Record<string, never>;
      output: {
        /** The caller public IP address returned by DNSFilter. */
        ip: string;
      };
    };
    /** List DNSFilter application categories with optional pagination. */
    "dns_filter.list_application_categories": {
      input: {
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page_number?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** DNSFilter application categories returned by the request. */
        items: Array<{
          /** The DNSFilter resource ID. */
          id?: string;
          /** The DNSFilter resource type. */
          type?: string;
          /** The DNSFilter resource UUID when provided. */
          uuid?: string;
          /** The DNSFilter resource attributes. */
          attributes?: Record<string, unknown>;
          /** The DNSFilter resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by DNSFilter. */
        links?: {
          /** The current page URL returned by DNSFilter. */
          self?: string | null;
          /** The first page URL returned by DNSFilter. */
          first?: string | null;
          /** The previous page URL returned by DNSFilter. */
          prev?: string | null;
          /** The next page URL returned by DNSFilter. */
          next?: string | null;
          /** The last page URL returned by DNSFilter. */
          last?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List DNSFilter applications with optional category filtering and pagination. */
    "dns_filter.list_applications": {
      input: {
        /**
         * The DNSFilter application category IDs used to filter applications.
         * @minItems 1
         */
        category_ids?: Array<number>;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page_number?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** DNSFilter applications returned by the request. */
        items: Array<{
          /** The DNSFilter resource ID. */
          id?: string;
          /** The DNSFilter resource type. */
          type?: string;
          /** The DNSFilter resource UUID when provided. */
          uuid?: string;
          /** The DNSFilter resource attributes. */
          attributes?: Record<string, unknown>;
          /** The DNSFilter resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by DNSFilter. */
        links?: {
          /** The current page URL returned by DNSFilter. */
          self?: string | null;
          /** The first page URL returned by DNSFilter. */
          first?: string | null;
          /** The previous page URL returned by DNSFilter. */
          prev?: string | null;
          /** The next page URL returned by DNSFilter. */
          next?: string | null;
          /** The last page URL returned by DNSFilter. */
          last?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List DNSFilter domain categories with optional pagination. */
    "dns_filter.list_categories": {
      input: {
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page_number?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** DNSFilter categories returned by the request. */
        items: Array<{
          /** The DNSFilter resource ID. */
          id?: string;
          /** The DNSFilter resource type. */
          type?: string;
          /** The DNSFilter resource UUID when provided. */
          uuid?: string;
          /** The DNSFilter resource attributes. */
          attributes?: Record<string, unknown>;
          /** The DNSFilter resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by DNSFilter. */
        links?: {
          /** The current page URL returned by DNSFilter. */
          self?: string | null;
          /** The first page URL returned by DNSFilter. */
          first?: string | null;
          /** The previous page URL returned by DNSFilter. */
          prev?: string | null;
          /** The next page URL returned by DNSFilter. */
          next?: string | null;
          /** The last page URL returned by DNSFilter. */
          last?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List DNSFilter IP address records with optional search and pagination. */
    "dns_filter.list_ip_addresses": {
      input: {
        /**
         * Search text matched against DNSFilter IP address records.
         * @minLength 1
         */
        search?: string;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page_number?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** DNSFilter IP addresses returned by the request. */
        items: Array<{
          /** The DNSFilter resource ID. */
          id?: string;
          /** The DNSFilter resource type. */
          type?: string;
          /** The DNSFilter resource UUID when provided. */
          uuid?: string;
          /** The DNSFilter resource attributes. */
          attributes?: Record<string, unknown>;
          /** The DNSFilter resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by DNSFilter. */
        links?: {
          /** The current page URL returned by DNSFilter. */
          self?: string | null;
          /** The first page URL returned by DNSFilter. */
          first?: string | null;
          /** The previous page URL returned by DNSFilter. */
          prev?: string | null;
          /** The next page URL returned by DNSFilter. */
          next?: string | null;
          /** The last page URL returned by DNSFilter. */
          last?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List DNSFilter networks with optional search and policy assignment filters. */
    "dns_filter.list_networks": {
      input: {
        /** Whether to return only basic DNSFilter network information. */
        basic_info?: boolean;
        /** Whether to include IP address counts for each network. */
        count_network_ips?: boolean;
        /** Whether to omit network IP address details. */
        force_truncate_ips?: boolean;
        /** Whether to include only networks with an assigned policy. */
        protected?: boolean;
        /**
         * Search text matched against network names, hostnames, or IP addresses.
         * @minLength 1
         */
        search?: string;
        /** Whether to include only networks without an assigned policy. */
        unprotected?: boolean;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page_number?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** DNSFilter networks returned by the request. */
        items: Array<{
          /** The DNSFilter resource ID. */
          id?: string;
          /** The DNSFilter resource type. */
          type?: string;
          /** The DNSFilter resource UUID when provided. */
          uuid?: string;
          /** The DNSFilter resource attributes. */
          attributes?: Record<string, unknown>;
          /** The DNSFilter resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Included DNSFilter resources returned by the request. */
        included?: Array<{
          /** The DNSFilter resource ID. */
          id?: string;
          /** The DNSFilter resource type. */
          type?: string;
          /** The DNSFilter resource UUID when provided. */
          uuid?: string;
          /** The DNSFilter resource attributes. */
          attributes?: Record<string, unknown>;
          /** The DNSFilter resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by DNSFilter. */
        links?: {
          /** The current page URL returned by DNSFilter. */
          self?: string | null;
          /** The first page URL returned by DNSFilter. */
          first?: string | null;
          /** The previous page URL returned by DNSFilter. */
          prev?: string | null;
          /** The next page URL returned by DNSFilter. */
          next?: string | null;
          /** The last page URL returned by DNSFilter. */
          last?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** List DNSFilter policies with optional organization and global-policy filters. */
    "dns_filter.list_policies": {
      input: {
        /** Whether to include global policies in the response. */
        include_global_policies?: boolean;
        /**
         * The DNSFilter organization ID.
         * @exclusiveMinimum 0
         */
        organization_id?: number;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page_number?: number;
        /**
         * The number of records to request per page.
         * @exclusiveMinimum 0
         */
        page_size?: number;
      };
      output: {
        /** DNSFilter policies returned by the request. */
        items: Array<{
          /** The DNSFilter resource ID. */
          id?: string;
          /** The DNSFilter resource type. */
          type?: string;
          /** The DNSFilter resource UUID when provided. */
          uuid?: string;
          /** The DNSFilter resource attributes. */
          attributes?: Record<string, unknown>;
          /** The DNSFilter resource relationships. */
          relationships?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination links returned by DNSFilter. */
        links?: {
          /** The current page URL returned by DNSFilter. */
          self?: string | null;
          /** The first page URL returned by DNSFilter. */
          first?: string | null;
          /** The previous page URL returned by DNSFilter. */
          prev?: string | null;
          /** The next page URL returned by DNSFilter. */
          next?: string | null;
          /** The last page URL returned by DNSFilter. */
          last?: string | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
