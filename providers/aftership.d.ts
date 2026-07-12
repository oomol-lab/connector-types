import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an AfterShip tracking record for a shipment. */
    "aftership.create_tracking": {
      input: {
        /**
         * A custom tracking ID. AfterShip generates one if omitted.
         * @minLength 1
         */
        id?: string;
        /**
         * The carrier tracking number of the shipment.
         * @minLength 1
         */
        tracking_number: string;
        /**
         * The AfterShip courier slug, such as dhl, ups, or usps.
         * @minLength 1
         */
        slug?: string;
        /**
         * A courier slug group such as fedex-group.
         * @minLength 1
         */
        slug_group?: string;
        /** Shipment tag strings attached to the tracking. */
        shipment_tags?: Array<string>;
        /**
         * The AfterShip courier connection ID.
         * @minLength 1
         */
        courier_connection_id?: string;
        /**
         * The AfterShip courier slug, such as dhl, ups, or usps.
         * @minLength 1
         */
        last_mile?: string;
        /**
         * A user-facing tracking title, such as an order number.
         * @minLength 1
         */
        title?: string;
        /**
         * A globally unique identifier for the order.
         * @minLength 1
         */
        order_id?: string;
        /** Custom tracking fields sent to AfterShip as string key-value pairs. */
        custom_fields?: Record<string, string>;
        /**
         * The URL for the order in your system or store.
         * @minLength 1
         */
        order_id_path?: string;
        /**
         * The recipient's ISO 639-1 language code for notifications.
         * @minLength 1
         */
        language?: string;
        /** The promised delivery date range in the shipment recipient's timezone. */
        order_promised_delivery_date?: {
          /**
           * The promised delivery date.
           * @minLength 1
           */
          promised_delivery_date?: string | null;
          /**
           * The earliest promised delivery date.
           * @minLength 1
           */
          promised_delivery_date_min?: string | null;
          /**
           * The latest promised delivery date.
           * @minLength 1
           */
          promised_delivery_date_max?: string | null;
        };
        /**
         * The shipment pickup location for the receiver.
         * @minLength 1
         */
        pickup_location?: string;
        /** The shipment delivery type. */
        delivery_type?: "pickup_at_store" | "door_to_door" | "pickup_at_courier";
        /**
         * The shipment pickup note for the receiver.
         * @minLength 1
         */
        pickup_note?: string;
        /**
         * The shipper's carrier account number.
         * @minLength 1
         */
        tracking_account_number?: string;
        /**
         * A carrier-specific tracking credential.
         * @minLength 1
         */
        tracking_key?: string;
        /**
         * The shipment ship date.
         * @minLength 1
         */
        tracking_ship_date?: string;
        /**
         * The origin country or region as an ISO Alpha-3 code.
         * @minLength 1
         */
        origin_country_region?: string;
        /**
         * The origin state or province.
         * @minLength 1
         */
        origin_state?: string;
        /**
         * The origin city.
         * @minLength 1
         */
        origin_city?: string;
        /**
         * The origin postal code.
         * @minLength 1
         */
        origin_postal_code?: string;
        /**
         * The origin address or raw location text.
         * @minLength 1
         */
        origin_raw_location?: string;
        /**
         * The destination country or region as an ISO Alpha-3 code.
         * @minLength 1
         */
        destination_country_region?: string;
        /**
         * The destination state or province.
         * @minLength 1
         */
        destination_state?: string;
        /**
         * The destination city.
         * @minLength 1
         */
        destination_city?: string;
        /**
         * The destination postal code.
         * @minLength 1
         */
        destination_postal_code?: string;
        /**
         * The destination address or raw location text.
         * @minLength 1
         */
        destination_raw_location?: string;
        /**
         * A note attached to the tracking.
         * @minLength 1
         */
        note?: string;
        /**
         * The order date.
         * @minLength 1
         */
        order_date?: string;
        /**
         * The order number.
         * @minLength 1
         */
        order_number?: string;
        /**
         * The shipment type.
         * @minLength 1
         */
        shipment_type?: string;
        /**
         * The AfterShip location ID.
         * @minLength 1
         */
        location_id?: string;
        /**
         * The shipping method name.
         * @minLength 1
         */
        shipping_method?: string;
        /** Customer contacts attached to the tracking. */
        customers?: Array<{
          /**
           * The customer's display name.
           * @minLength 1
           */
          name?: string;
          /**
           * The customer's email address.
           * @format email
           */
          email?: string;
          /**
           * The customer's phone number.
           * @minLength 1
           */
          phone_number?: string;
        }>;
      };
      output: {
        /** A JSON object returned by AfterShip. */
        tracking: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        meta: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete an AfterShip tracking record by tracking ID. */
    "aftership.delete_tracking": {
      input: {
        /**
         * The AfterShip tracking ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A JSON object returned by AfterShip. */
        tracking: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        meta: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        raw: Record<string, unknown>;
      };
    };
    /** Detect possible AfterShip couriers for a tracking number. */
    "aftership.detect_couriers": {
      input: {
        /**
         * The carrier tracking number to inspect.
         * @minLength 1
         */
        tracking_number: string;
        /** Courier slugs to limit auto-detection to. */
        slug?: Array<string>;
        /**
         * The destination postal code.
         * @minLength 1
         */
        destination_postal_code?: string;
        /**
         * The shipping date in YYYYMMDD format.
         * @minLength 1
         */
        tracking_ship_date?: string;
        /**
         * The shipper's carrier account number.
         * @minLength 1
         */
        tracking_account_number?: string;
        /**
         * A carrier-specific tracking credential.
         * @minLength 1
         */
        tracking_key?: string;
        /**
         * The destination state or province.
         * @minLength 1
         */
        destination_state?: string;
        /**
         * A courier slug group such as fedex-group.
         * @minLength 1
         */
        slug_group?: string;
        /**
         * The origin country or region as an ISO Alpha-3 code.
         * @minLength 1
         */
        origin_country_region?: string;
        /**
         * The destination country or region as an ISO Alpha-3 code.
         * @minLength 1
         */
        destination_country_region?: string;
      };
      output: {
        /** The matched AfterShip courier records. */
        couriers: Array<Record<string, unknown>>;
        /** The total count returned by AfterShip. */
        total: number;
        /** A JSON object returned by AfterShip. */
        meta: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve one AfterShip tracking record by tracking ID. */
    "aftership.get_tracking": {
      input: {
        /**
         * The AfterShip tracking ID.
         * @minLength 1
         */
        id: string;
        /**
         * A comma-separated list of response fields to include.
         * @minLength 1
         */
        fields?: string;
        /**
         * The language code used to translate checkpoint messages.
         * @minLength 1
         */
        lang?: string;
      };
      output: {
        /** A JSON object returned by AfterShip. */
        tracking: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        meta: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        raw: Record<string, unknown>;
      };
    };
    /** List AfterShip couriers, optionally limited to active couriers or slugs. */
    "aftership.list_couriers": {
      input: {
        /** Whether to return only couriers activated for the account. */
        active?: boolean;
        /**
         * Courier slugs to filter by.
         * @minItems 1
         */
        slug?: Array<string>;
      };
      output: {
        /** The AfterShip courier records returned by the API. */
        couriers: Array<Record<string, unknown>>;
        /** The total count returned by AfterShip. */
        total: number;
        /** A JSON object returned by AfterShip. */
        meta: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        raw: Record<string, unknown>;
      };
    };
    /** List AfterShip trackings with cursor pagination and shipment filters. */
    "aftership.list_trackings": {
      input: {
        /**
         * The cursor value for the current page of results.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The number of trackings to return on each page.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /**
         * Search tracking numbers, titles, order IDs, customers, and custom fields.
         * @minLength 1
         */
        keyword?: string;
        /**
         * Tracking numbers to filter by. AfterShip supports up to 50 values.
         * @minItems 1
         * @maxItems 50
         */
        tracking_numbers?: Array<string>;
        /**
         * Courier slugs to filter by.
         * @minItems 1
         */
        slug?: Array<string>;
        /** Total delivery time in days. */
        transit_time?: number;
        /** Origin ISO Alpha-3 country or region codes. */
        origin?: Array<string>;
        /** Destination ISO Alpha-3 country or region codes. */
        destination?: Array<string>;
        /** The current shipment delivery status. */
        tag?: "Pending" | "InfoReceived" | "InTransit" | "OutForDelivery" | "AttemptFail" | "Delivered" | "AvailableForPickup" | "Exception" | "Expired";
        /**
         * Only include trackings created at or after this timestamp.
         * @minLength 1
         */
        created_at_min?: string;
        /**
         * Only include trackings created at or before this timestamp.
         * @minLength 1
         */
        created_at_max?: string;
        /**
         * Only include trackings updated at or after this timestamp.
         * @minLength 1
         */
        updated_at_min?: string;
        /**
         * Only include trackings updated at or before this timestamp.
         * @minLength 1
         */
        updated_at_max?: string;
        /**
         * A comma-separated list of response fields to include.
         * @minLength 1
         */
        fields?: string;
        /** Whether to filter return-to-sender shipments. */
        return_to_sender?: boolean;
        /**
         * The courier destination country or region to filter by.
         * @minLength 1
         */
        courier_destination_country_region?: string;
        /** Shipment tags to filter by. */
        shipment_tags?: Array<string>;
        /**
         * The order ID to filter by.
         * @minLength 1
         */
        order_id?: string;
      };
      output: {
        /** The AfterShip tracking records returned for the page. */
        trackings: Array<Record<string, unknown>>;
        /** A JSON object returned by AfterShip. */
        pagination: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        meta: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        raw: Record<string, unknown>;
      };
    };
    /** Mark an AfterShip tracking record as completed by ID. */
    "aftership.mark_tracking_completed": {
      input: {
        /**
         * The AfterShip tracking ID.
         * @minLength 1
         */
        id: string;
        /** The reason for marking the tracking as completed. */
        reason: "DELIVERED" | "LOST" | "RETURNED_TO_SENDER";
        /**
         * The completion event timestamp.
         * @minLength 1
         */
        event_datetime?: string;
      };
      output: {
        /** A JSON object returned by AfterShip. */
        tracking: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        meta: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        raw: Record<string, unknown>;
      };
    };
    /** Ask AfterShip to retrack an expired tracking record by ID. */
    "aftership.retrack_tracking": {
      input: {
        /**
         * The AfterShip tracking ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A JSON object returned by AfterShip. */
        tracking: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        meta: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        raw: Record<string, unknown>;
      };
    };
    /** Update editable fields on an AfterShip tracking record. */
    "aftership.update_tracking": {
      input: {
        /**
         * The AfterShip tracking ID.
         * @minLength 1
         */
        id: string;
        /**
         * The AfterShip courier slug, such as dhl, ups, or usps.
         * @minLength 1
         */
        slug?: string;
        /**
         * A user-facing tracking title, such as an order number.
         * @minLength 1
         */
        title?: string;
        /**
         * A globally unique identifier for the order.
         * @minLength 1
         */
        order_id?: string;
        /** Custom tracking fields sent to AfterShip as string key-value pairs. */
        custom_fields?: Record<string, string>;
        /**
         * The URL for the order in your system or store.
         * @minLength 1
         */
        order_id_path?: string;
        /**
         * The recipient's ISO 639-1 language code for notifications.
         * @minLength 1
         */
        language?: string;
        /** The promised delivery date range in the shipment recipient's timezone. */
        order_promised_delivery_date?: {
          /**
           * The promised delivery date.
           * @minLength 1
           */
          promised_delivery_date?: string | null;
          /**
           * The earliest promised delivery date.
           * @minLength 1
           */
          promised_delivery_date_min?: string | null;
          /**
           * The latest promised delivery date.
           * @minLength 1
           */
          promised_delivery_date_max?: string | null;
        };
        /**
         * The shipment pickup location for the receiver.
         * @minLength 1
         */
        pickup_location?: string;
        /** The shipment delivery type. */
        delivery_type?: "pickup_at_store" | "door_to_door" | "pickup_at_courier";
        /**
         * The shipment pickup note for the receiver.
         * @minLength 1
         */
        pickup_note?: string;
        /**
         * The shipper's carrier account number.
         * @minLength 1
         */
        tracking_account_number?: string;
        /**
         * A carrier-specific tracking credential.
         * @minLength 1
         */
        tracking_key?: string;
        /**
         * The shipment ship date.
         * @minLength 1
         */
        tracking_ship_date?: string;
        /**
         * The origin country or region as an ISO Alpha-3 code.
         * @minLength 1
         */
        origin_country_region?: string;
        /**
         * The origin state or province.
         * @minLength 1
         */
        origin_state?: string;
        /**
         * The origin city.
         * @minLength 1
         */
        origin_city?: string;
        /**
         * The origin postal code.
         * @minLength 1
         */
        origin_postal_code?: string;
        /**
         * The origin address or raw location text.
         * @minLength 1
         */
        origin_raw_location?: string;
        /**
         * The destination country or region as an ISO Alpha-3 code.
         * @minLength 1
         */
        destination_country_region?: string;
        /**
         * The destination state or province.
         * @minLength 1
         */
        destination_state?: string;
        /**
         * The destination city.
         * @minLength 1
         */
        destination_city?: string;
        /**
         * The destination postal code.
         * @minLength 1
         */
        destination_postal_code?: string;
        /**
         * The destination address or raw location text.
         * @minLength 1
         */
        destination_raw_location?: string;
        /**
         * A note attached to the tracking.
         * @minLength 1
         */
        note?: string;
        /**
         * The order date.
         * @minLength 1
         */
        order_date?: string;
        /**
         * The order number.
         * @minLength 1
         */
        order_number?: string;
        /**
         * The shipment type.
         * @minLength 1
         */
        shipment_type?: string;
        /**
         * The AfterShip location ID.
         * @minLength 1
         */
        location_id?: string;
        /**
         * The shipping method name.
         * @minLength 1
         */
        shipping_method?: string;
        /** Customer contacts attached to the tracking. */
        customers?: Array<{
          /**
           * The customer's display name.
           * @minLength 1
           */
          name?: string;
          /**
           * The customer's email address.
           * @format email
           */
          email?: string;
          /**
           * The customer's phone number.
           * @minLength 1
           */
          phone_number?: string;
        }>;
      };
      output: {
        /** A JSON object returned by AfterShip. */
        tracking: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        meta: Record<string, unknown>;
        /** A JSON object returned by AfterShip. */
        raw: Record<string, unknown>;
      };
    };
  }
}
