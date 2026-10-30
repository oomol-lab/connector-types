import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Plan a cycling route using coordinates obtained from maps_textsearch. */
    "didi.maps_direction_bicycling": {
      input: {
        /** Destination coordinates as longitude,latitude; obtain them from maps_textsearch. */
        destination: string;
        /** Whether to return route geometry points. The upstream default is true. */
        need_geo?: boolean;
        /** Origin coordinates as longitude,latitude; obtain them from maps_textsearch. */
        origin: string;
      };
      output: {
        /** Provider-defined result data. */
        data: unknown;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Plan a driving route using coordinates obtained from maps_textsearch. */
    "didi.maps_direction_driving": {
      input: {
        /** Destination coordinates as longitude,latitude; obtain them from maps_textsearch. */
        destination: string;
        /** Whether to return route geometry points. The upstream default is true. */
        need_geo?: boolean;
        /** Origin coordinates as longitude,latitude; obtain them from maps_textsearch. */
        origin: string;
      };
      output: {
        /** Provider-defined result data. */
        data: unknown;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Plan a public transit route in the specified city using coordinates obtained from maps_textsearch. */
    "didi.maps_direction_transit": {
      input: {
        /** Full city name, such as 北京市. */
        city: string;
        /** Destination coordinates as longitude,latitude; obtain them from maps_textsearch. */
        destination: string;
        /** Origin coordinates as longitude,latitude; obtain them from maps_textsearch. */
        origin: string;
      };
      output: {
        /** Provider-defined result data. */
        data: unknown;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Plan a walking route using coordinates obtained from maps_textsearch. */
    "didi.maps_direction_walking": {
      input: {
        /** Destination coordinates as longitude,latitude; obtain them from maps_textsearch. */
        destination: string;
        /** Whether to return route geometry points. The upstream default is true. */
        need_geo?: boolean;
        /** Origin coordinates as longitude,latitude; obtain them from maps_textsearch. */
        origin: string;
      };
      output: {
        /** Provider-defined result data. */
        data: unknown;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search for nearby places using map-derived coordinates and an optional radius. */
    "didi.maps_place_around": {
      input: {
        /** Place search keywords. */
        keywords: string;
        /** Coordinates as longitude,latitude, obtained from a map tool. */
        location: string;
        /** Search radius in meters, encoded as a string. */
        max_distance?: string;
        /** Pass sub_poi_list to include child POIs; omit to exclude them. */
        show_fields?: string;
      };
      output: {
        /** Provider-defined result data. */
        data: unknown;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Convert map-derived coordinates into an address. */
    "didi.maps_regeocode": {
      input: {
        /** Coordinates as longitude,latitude, obtained from a map tool. */
        location: string;
      };
      output: {
        /** Provider-defined result data. */
        data: unknown;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search for places by keyword and city. Use returned coordinates for ride estimates and route planning; do not guess coordinates or the user starting location. Ask the user to choose when multiple candidates match. */
    "didi.maps_textsearch": {
      input: {
        /** Full city name, such as 北京市. */
        city: string;
        /** Place search keywords. */
        keywords: string;
        /** Coordinates as longitude,latitude, obtained from a map tool. */
        location?: string;
        /** Pass sub_poi_list to include child POIs; omit to exclude them. */
        show_fields?: string;
      };
      output: {
        /** Matching places. */
        data: Array<{
          /** Place name. */
          display_name?: string;
          /** Place address. */
          address?: string;
          /** Full address including the place name. */
          address_all?: string;
          /** City containing the place. */
          city?: string;
          /** Place coordinates. */
          location?: {
            /** Longitude. */
            lng?: number;
            /** Latitude. */
            lat?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Cancel a specified ride order. Trips in progress and completed trips cannot be canceled. */
    "didi.taxi_cancel_order": {
      input: {
        /** Order ID returned by order creation or lookup. When optional and omitted, query the current account’s unfinished order. */
        order_id: string;
        /** Optional cancellation reason. */
        reason?: string;
      };
      output: {
        /** Cancellation result. */
        data: {
          /** Whether cancellation succeeded. */
          success?: boolean;
          [key: string]: unknown;
        } | null;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a real ride order using an unexpired taxi_estimate traceId. Show the selected vehicle categories and estimated prices, and obtain explicit user confirmation before calling. On a transport failure, stop and do not automatically retry or switch keys; the booking outcome may be unknown. */
    "didi.taxi_create_order": {
      input: {
        /** Caller phone number. Omit to use the account phone number. */
        caller_car_phone?: string;
        /** Optional device context. */
        device_context?: {
          /** Device brand, such as honor. */
          brand?: string;
          /** Unique device identifier. */
          device_id?: string;
        };
        /** Unexpired traceId from taxi_estimate. Obtain a new estimate if it expires. */
        estimate_trace_id: string;
        /** Product categories from taxi_estimate, separated by commas without spaces. For app links, supply only categories explicitly selected by the user. */
        product_category: string;
        /** Tenant-specific extension fields. Only fields registered for the current tenant are parsed; other fields are ignored by DiDi. */
        tenant_extensions?: Record<string, unknown>;
      };
      output: {
        /** Created ride order data. */
        data: {
          /** Order ID for later lookup or cancellation. */
          orderId?: string;
          /** Initial order status. */
          status?: string;
          [key: string]: unknown;
        } | null;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Estimate available ride categories and prices. Obtain coordinates from maps_textsearch first; ask for the starting location if unknown. Use the exact user-selected category from the returned options; never silently substitute another category. The returned traceId is required for ordering and expires. */
    "didi.taxi_estimate": {
      input: {
        /** Origin latitude as a string; obtain it from maps_textsearch, never guess. */
        from_lat: string;
        /** Origin longitude as a string; obtain it from maps_textsearch, never guess. */
        from_lng: string;
        /** Origin place name. */
        from_name: string;
        /** Destination latitude as a string; obtain it from maps_textsearch, never guess. */
        to_lat: string;
        /** Destination longitude as a string; obtain it from maps_textsearch, never guess. */
        to_lng: string;
        /** Destination place name. */
        to_name: string;
      };
      output: {
        /** Ride estimate data, including the expiring traceId. */
        data: {
          /** Estimate trace ID used as estimate_trace_id when ordering. */
          traceId?: string;
          /** Available vehicle categories and prices. */
          items?: Array<{
            /** Vehicle category name. */
            productName?: string;
            /** Vehicle category identifier used as product_category. */
            productCategory?: string;
            /** Estimated price in yuan. */
            priceText?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | null;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Generate a deep link for the user to finish ordering in DiDi app version 7.1.2 or later. Obtain coordinates from maps_textsearch; this action does not place an order. */
    "didi.taxi_generate_ride_app_link": {
      input: {
        /** Origin latitude as a string; obtain it from maps_textsearch, never guess. */
        from_lat: string;
        /** Origin longitude as a string; obtain it from maps_textsearch, never guess. */
        from_lng: string;
        /** Product categories from taxi_estimate, separated by commas without spaces. For app links, supply only categories explicitly selected by the user. */
        product_category?: string;
        /** Destination latitude as a string; obtain it from maps_textsearch, never guess. */
        to_lat: string;
        /** Destination longitude as a string; obtain it from maps_textsearch, never guess. */
        to_lng: string;
      };
      output: {
        /** Provider-defined result data. */
        data: unknown;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the driver’s current coordinates for an ongoing ride order. */
    "didi.taxi_get_driver_location": {
      input: {
        /** Order ID returned by order creation or lookup. When optional and omitted, query the current account’s unfinished order. */
        order_id: string;
      };
      output: {
        /** Driver coordinates. */
        data: {
          /** Current driver longitude. */
          longitude?: number;
          /** Current driver latitude. */
          latitude?: number;
          [key: string]: unknown;
        } | null;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Query ride status, driver details, and progress. Omit order_id to query the current account’s unfinished order. Query once per call; do not interpret unknown status codes as completion. */
    "didi.taxi_query_order": {
      input: {
        /** Order ID returned by order creation or lookup. When optional and omitted, query the current account’s unfinished order. */
        order_id?: string;
      };
      output: {
        /** Current order status and provider-defined trip details. */
        data: {
          /** Order status code; the provider can add new states. */
          statusCode?: number;
          /** Human-readable order status. */
          statusText?: string;
          /** Driver details when available. */
          driver?: {
            /** Driver name. */
            name?: string;
            /** Driver contact phone number. */
            phone?: string;
            /** Vehicle model and color. */
            carModel?: string;
            /** Vehicle license plate. */
            carPlate?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        } | null;
        /** Original MCP content blocks, including ride descriptions and links. */
        content: Array<{
          /** Content block type. */
          type?: string;
          /** Text content when present. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
