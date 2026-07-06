import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Quipteams device action including comments, notes, and status history. */
    "quipteams.get_device_action": {
      input: {
        /**
         * The Quipteams device action UUID.
         * @minLength 1
         */
        id: string;
        /** Whether to include the full holding asset data for the device. */
        include_asset?: boolean;
      };
      output: {
        /** A Quipteams device action object. */
        deviceAction: {
          /** Device action UUID returned by Quipteams. */
          id?: string;
          /** Device action status returned by Quipteams. */
          status?: string;
          /** Device action type returned by Quipteams. */
          action_type?: string;
          /** Device serial number returned by Quipteams. */
          serial_number?: string;
          [key: string]: unknown;
        };
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** Retrieve one Quipteams employee including HRIS metadata. */
    "quipteams.get_employee": {
      input: {
        /**
         * The Quipteams employee UUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Quipteams employee object. */
        employee: {
          /** Employee UUID returned by Quipteams. */
          id?: string;
          /** Employee name returned by Quipteams. */
          name?: string;
          /** Employee email returned by Quipteams. */
          email?: string;
          /** Employee status returned by Quipteams. */
          status?: string;
          [key: string]: unknown;
        };
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** Retrieve one Quipteams kit including all device specifications. */
    "quipteams.get_kit": {
      input: {
        /**
         * The Quipteams kit UUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Quipteams kit object. */
        kit: {
          /** Kit UUID returned by Quipteams. */
          id?: string;
          /** Kit name returned by Quipteams. */
          name?: string;
          /** Kit region returned by Quipteams. */
          region?: string;
          [key: string]: unknown;
        };
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** Retrieve one Quipteams product with its active configurations. */
    "quipteams.get_product": {
      input: {
        /**
         * The Quipteams product UUID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Quipteams catalog product object. */
        product: {
          /** Product UUID returned by Quipteams. */
          id?: string;
          /** Product brand returned by Quipteams. */
          brand?: string;
          /** Product model returned by Quipteams. */
          model?: string;
          /** Product type returned by Quipteams. */
          product_type?: string;
          [key: string]: unknown;
        };
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** Retrieve one Quipteams quote including its items, recipients, and alternatives. */
    "quipteams.get_quote": {
      input: {
        /**
         * The Quipteams quote order_id.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Quipteams quote object. */
        quote: {
          /** Quote identifier returned by Quipteams. */
          id?: string;
          /** Quote order identifier returned by Quipteams. */
          order_id?: string;
          /** Quote status returned by Quipteams. */
          status?: string;
          /** Quote country returned by Quipteams. */
          country?: string;
          [key: string]: unknown;
        };
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** List Quipteams holding assets with optional inventory filters and cursor pagination. */
    "quipteams.list_assets": {
      input: {
        /** Which Quipteams assets to return. */
        status?: "in_storage" | "in_use" | "all";
        /**
         * Filter by exact asset serial number.
         * @minLength 1
         */
        serial_number?: string;
        /**
         * Filter by exact asset UUID.
         * @format uuid
         */
        item_id?: string;
        /**
         * Filter by asset country.
         * @minLength 1
         */
        country?: string;
        /** Quipteams device type. */
        device_type?: "Laptop" | "Monitor" | "Mouse" | "Keyboard" | "Headphones" | "Webcam" | "Accessory";
        /**
         * Search across serial number, description, and employee.
         * @minLength 1
         */
        search?: string;
        /** Sort order accepted by this Quipteams list endpoint. */
        sort?: "created_at" | "-created_at" | "updated_at" | "-updated_at";
        /**
         * Items per page. Quipteams allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Quipteams assets returned for this page. */
        assets: Array<{
          /** Asset UUID returned by Quipteams, or null for in-use rows. */
          id?: string | null;
          /** Asset serial number returned by Quipteams. */
          serial_number?: string;
          /** Device type returned by Quipteams, or null when unknown. */
          device_type?: string | null;
          /** Asset country returned by Quipteams. */
          country?: string;
          /** Asset status returned by Quipteams. */
          status?: string;
          [key: string]: unknown;
        }>;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        nextCursor?: string;
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** List Quipteams device actions with optional status, type, serial number, and date filters. */
    "quipteams.list_device_actions": {
      input: {
        /**
         * Filter by device action status.
         * @minLength 1
         */
        status?: string;
        /**
         * Filter by device action type.
         * @minLength 1
         */
        action_type?: string;
        /**
         * Filter by device serial number.
         * @minLength 1
         */
        serial_number?: string;
        /** Whether to include the full holding asset data for each device. */
        include_asset?: boolean;
        /**
         * Timestamp returned by Quipteams.
         * @format date-time
         */
        created_after?: string;
        /**
         * Timestamp returned by Quipteams.
         * @format date-time
         */
        created_before?: string;
        /** Sort order accepted by this Quipteams list endpoint. */
        sort?: "created_at" | "-created_at" | "updated_at" | "-updated_at";
        /**
         * Items per page. Quipteams allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Quipteams deviceActions returned for this page. */
        deviceActions: Array<{
          /** Device action UUID returned by Quipteams. */
          id?: string;
          /** Device action status returned by Quipteams. */
          status?: string;
          /** Device action type returned by Quipteams. */
          action_type?: string;
          /** Device serial number returned by Quipteams. */
          serial_number?: string;
          [key: string]: unknown;
        }>;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        nextCursor?: string;
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** List Quipteams employees synced from HRIS with optional status and search filters. */
    "quipteams.list_employees": {
      input: {
        /**
         * Filter by employee status.
         * @minLength 1
         */
        status?: string;
        /**
         * Search across employee name and email.
         * @minLength 1
         */
        search?: string;
        /**
         * Items per page. Quipteams allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Quipteams employees returned for this page. */
        employees: Array<{
          /** Employee UUID returned by Quipteams. */
          id?: string;
          /** Employee name returned by Quipteams. */
          name?: string;
          /** Employee email returned by Quipteams. */
          email?: string;
          /** Employee status returned by Quipteams. */
          status?: string;
          [key: string]: unknown;
        }>;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        nextCursor?: string;
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** List Quipteams reusable kit templates with optional filters and cursor pagination. */
    "quipteams.list_kits": {
      input: {
        /**
         * Search kits by name.
         * @minLength 1
         */
        search?: string;
        /**
         * Filter kits by tag.
         * @minLength 1
         */
        tag?: string;
        /**
         * Filter kits by exact region.
         * @minLength 1
         */
        region?: string;
        /** Sort order accepted by the Quipteams kit list endpoint. */
        sort?: "created_at" | "-created_at" | "updated_at" | "-updated_at" | "name" | "-name";
        /**
         * Items per page. Quipteams allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Quipteams kits returned for this page. */
        kits: Array<{
          /** Kit UUID returned by Quipteams. */
          id?: string;
          /** Kit name returned by Quipteams. */
          name?: string;
          /** Kit region returned by Quipteams. */
          region?: string;
          [key: string]: unknown;
        }>;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        nextCursor?: string;
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** List the Quipteams product catalog with optional product and specification filters. */
    "quipteams.list_products": {
      input: {
        /** Quipteams device type. */
        product_type?: "Laptop" | "Monitor" | "Mouse" | "Keyboard" | "Headphones" | "Webcam" | "Accessory";
        /**
         * Filter by brand, case-insensitive.
         * @minLength 1
         */
        brand?: string;
        /**
         * Search by brand or model name.
         * @minLength 1
         */
        search?: string;
        /** A Quipteams catalog filter value. */
        cpu?: string | Array<string>;
        /** A Quipteams catalog filter value. */
        ram?: string | Array<string>;
        /** A Quipteams catalog filter value. */
        storage?: string | Array<string>;
        /** A Quipteams catalog filter value. */
        screen_size?: string | Array<string>;
        /** A Quipteams catalog filter value. */
        resolution?: string | Array<string>;
        /** A Quipteams catalog filter value. */
        connection_type?: string | Array<string>;
        /** Whether to include inactive products. */
        include_inactive?: boolean;
      };
      output: {
        /** Quipteams products returned for this page. */
        products: Array<{
          /** Product UUID returned by Quipteams. */
          id?: string;
          /** Product brand returned by Quipteams. */
          brand?: string;
          /** Product model returned by Quipteams. */
          model?: string;
          /** Product type returned by Quipteams. */
          product_type?: string;
          [key: string]: unknown;
        }>;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        nextCursor?: string;
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
    /** List Quipteams hardware procurement quotes with optional filters and cursor pagination. */
    "quipteams.list_quotes": {
      input: {
        /**
         * Filter by quote status, such as pending, delivered, or completed.
         * @minLength 1
         */
        status?: string;
        /**
         * Filter by country using the partial-match behavior documented by Quipteams.
         * @minLength 1
         */
        country?: string;
        /**
         * Timestamp returned by Quipteams.
         * @format date-time
         */
        created_after?: string;
        /**
         * Timestamp returned by Quipteams.
         * @format date-time
         */
        created_before?: string;
        /** Sort order accepted by Quipteams quote list. */
        sort?: "created_at" | "-created_at" | "updated_at" | "-updated_at";
        /**
         * Items per page. Quipteams allows 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Quipteams quotes returned for this page. */
        quotes: Array<{
          /** Quote identifier returned by Quipteams. */
          id?: string;
          /** Quote order identifier returned by Quipteams. */
          order_id?: string;
          /** Quote status returned by Quipteams. */
          status?: string;
          /** Quote country returned by Quipteams. */
          country?: string;
          [key: string]: unknown;
        }>;
        /**
         * Pagination cursor returned by Quipteams.
         * @minLength 1
         */
        nextCursor?: string;
        /** The raw Quipteams response payload. */
        raw: unknown;
      };
    };
  }
}
