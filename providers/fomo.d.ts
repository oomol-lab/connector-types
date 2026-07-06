import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Fomo event for a configured event template. */
    "fomo.create_event": {
      input: {
        /** The Fomo event type ID. */
        event_type_id?: number | string;
        /**
         * The Fomo event type tag.
         * @minLength 1
         */
        event_type_tag?: string;
        /**
         * The URL opened when a visitor clicks the event notification.
         * @format uri
         */
        url: string;
        /**
         * The first name to display in the Fomo event.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The email address associated with the Fomo event.
         * @format email
         */
        email_address?: string;
        /**
         * The IP address Fomo can use for event location enrichment.
         * @minLength 1
         */
        ip_address?: string;
        /**
         * The city to display in the Fomo event.
         * @minLength 1
         */
        city?: string;
        /**
         * The province or state to display in the Fomo event.
         * @minLength 1
         */
        province?: string;
        /**
         * The ISO-2 country code to display in the Fomo event.
         * @minLength 1
         */
        country?: string;
        /**
         * The title or item name to display in the Fomo event.
         * @minLength 1
         */
        title?: string;
        /**
         * Your application-specific event identifier.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The image URL to display in the Fomo event.
         * @format uri
         */
        image_url?: string;
        /**
         * The event creation time to send to Fomo when backdating events.
         * @minLength 1
         */
        created_at?: string;
        /**
         * Custom event fields to merge into the selected Fomo template.
         * @minItems 1
         */
        custom_event_fields_attributes?: Array<{
          /**
           * The custom field key.
           * @minLength 1
           */
          key: string;
          /**
           * The custom field value.
           * @minLength 1
           */
          value: string;
        }>;
      };
      output: {
        /** A normalized Fomo event. */
        event: {
          /** The Fomo event identifier. */
          id: number | string | null;
          /** The Fomo event type ID. */
          event_type_id: number | string | null;
          /**
           * The Fomo event type tag.
           * @minLength 1
           */
          event_type_tag: string | null;
          /** The string value returned by Fomo. */
          url: string | null;
          /** The string value returned by Fomo. */
          first_name: string | null;
          /** The string value returned by Fomo. */
          email_address: string | null;
          /** The string value returned by Fomo. */
          ip_address: string | null;
          /** The string value returned by Fomo. */
          city: string | null;
          /** The string value returned by Fomo. */
          province: string | null;
          /** The string value returned by Fomo. */
          country: string | null;
          /** The string value returned by Fomo. */
          title: string | null;
          /** The string value returned by Fomo. */
          external_id: string | null;
          /** The string value returned by Fomo. */
          image_url: string | null;
          /** The string value returned by Fomo. */
          message: string | null;
          /** The string value returned by Fomo. */
          link: string | null;
          /** The string value returned by Fomo. */
          created_at: string | null;
          /** The numeric value returned by Fomo. */
          created_at_to_seconds_from_epoch: number | null;
          /** The custom event fields returned by Fomo. */
          custom_event_fields_attributes: Array<{
            /** The custom field key. */
            key?: string;
            /** The custom field value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** The raw Fomo object payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete an existing Fomo event by ID. */
    "fomo.delete_event": {
      input: {
        /** The Fomo event identifier. */
        id: number | string;
      };
      output: {
        /** The string value returned by Fomo. */
        message: string | null;
        /** The raw Fomo object payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a single Fomo event by ID. */
    "fomo.get_event": {
      input: {
        /** The Fomo event identifier. */
        id: number | string;
      };
      output: {
        /** A normalized Fomo event. */
        event: {
          /** The Fomo event identifier. */
          id: number | string | null;
          /** The Fomo event type ID. */
          event_type_id: number | string | null;
          /**
           * The Fomo event type tag.
           * @minLength 1
           */
          event_type_tag: string | null;
          /** The string value returned by Fomo. */
          url: string | null;
          /** The string value returned by Fomo. */
          first_name: string | null;
          /** The string value returned by Fomo. */
          email_address: string | null;
          /** The string value returned by Fomo. */
          ip_address: string | null;
          /** The string value returned by Fomo. */
          city: string | null;
          /** The string value returned by Fomo. */
          province: string | null;
          /** The string value returned by Fomo. */
          country: string | null;
          /** The string value returned by Fomo. */
          title: string | null;
          /** The string value returned by Fomo. */
          external_id: string | null;
          /** The string value returned by Fomo. */
          image_url: string | null;
          /** The string value returned by Fomo. */
          message: string | null;
          /** The string value returned by Fomo. */
          link: string | null;
          /** The string value returned by Fomo. */
          created_at: string | null;
          /** The numeric value returned by Fomo. */
          created_at_to_seconds_from_epoch: number | null;
          /** The custom event fields returned by Fomo. */
          custom_event_fields_attributes: Array<{
            /** The custom field key. */
            key?: string;
            /** The custom field value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** The raw Fomo object payload. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List Fomo events with optional pagination and ordering. */
    "fomo.list_events": {
      input: {
        /**
         * The number of events to return per page.
         * @exclusiveMinimum 0
         */
        per_page?: number;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** The Fomo event sort field. */
        order_by?: "created_at" | "event_type_id";
        /** The Fomo event sort direction. */
        order_direction?: "asc" | "desc";
      };
      output: {
        /** The Fomo events returned for the requested page. */
        events: Array<{
          /** The Fomo event identifier. */
          id: number | string | null;
          /** The Fomo event type ID. */
          event_type_id: number | string | null;
          /**
           * The Fomo event type tag.
           * @minLength 1
           */
          event_type_tag: string | null;
          /** The string value returned by Fomo. */
          url: string | null;
          /** The string value returned by Fomo. */
          first_name: string | null;
          /** The string value returned by Fomo. */
          email_address: string | null;
          /** The string value returned by Fomo. */
          ip_address: string | null;
          /** The string value returned by Fomo. */
          city: string | null;
          /** The string value returned by Fomo. */
          province: string | null;
          /** The string value returned by Fomo. */
          country: string | null;
          /** The string value returned by Fomo. */
          title: string | null;
          /** The string value returned by Fomo. */
          external_id: string | null;
          /** The string value returned by Fomo. */
          image_url: string | null;
          /** The string value returned by Fomo. */
          message: string | null;
          /** The string value returned by Fomo. */
          link: string | null;
          /** The string value returned by Fomo. */
          created_at: string | null;
          /** The numeric value returned by Fomo. */
          created_at_to_seconds_from_epoch: number | null;
          /** The custom event fields returned by Fomo. */
          custom_event_fields_attributes: Array<{
            /** The custom field key. */
            key?: string;
            /** The custom field value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** The raw Fomo object payload. */
          raw: Record<string, unknown>;
        }>;
        /** Fomo pagination metadata. */
        meta: {
          /** The number of events requested per page. */
          per_page: number;
          /** The current page number. */
          page: number;
          /** The total number of events available. */
          total_count: number;
          /** The total number of pages available. */
          total_pages: number;
        };
        /** The raw Fomo object payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Update an existing Fomo event by ID. */
    "fomo.update_event": {
      input: {
        /** The Fomo event identifier. */
        id: number | string;
        /** The Fomo event type ID. */
        event_type_id?: number | string;
        /**
         * The Fomo event type tag.
         * @minLength 1
         */
        event_type_tag?: string;
        /**
         * The URL opened when a visitor clicks the event notification.
         * @format uri
         */
        url?: string;
        /**
         * The first name to display in the Fomo event.
         * @minLength 1
         */
        first_name?: string;
        /**
         * The email address associated with the Fomo event.
         * @format email
         */
        email_address?: string;
        /**
         * The IP address Fomo can use for event location enrichment.
         * @minLength 1
         */
        ip_address?: string;
        /**
         * The city to display in the Fomo event.
         * @minLength 1
         */
        city?: string;
        /**
         * The province or state to display in the Fomo event.
         * @minLength 1
         */
        province?: string;
        /**
         * The ISO-2 country code to display in the Fomo event.
         * @minLength 1
         */
        country?: string;
        /**
         * The title or item name to display in the Fomo event.
         * @minLength 1
         */
        title?: string;
        /**
         * Your application-specific event identifier.
         * @minLength 1
         */
        external_id?: string;
        /**
         * The image URL to display in the Fomo event.
         * @format uri
         */
        image_url?: string;
        /**
         * The event creation time to send to Fomo when backdating events.
         * @minLength 1
         */
        created_at?: string;
        /**
         * Custom event fields to merge into the selected Fomo template.
         * @minItems 1
         */
        custom_event_fields_attributes?: Array<{
          /**
           * The custom field key.
           * @minLength 1
           */
          key: string;
          /**
           * The custom field value.
           * @minLength 1
           */
          value: string;
        }>;
      };
      output: {
        /** A normalized Fomo event. */
        event: {
          /** The Fomo event identifier. */
          id: number | string | null;
          /** The Fomo event type ID. */
          event_type_id: number | string | null;
          /**
           * The Fomo event type tag.
           * @minLength 1
           */
          event_type_tag: string | null;
          /** The string value returned by Fomo. */
          url: string | null;
          /** The string value returned by Fomo. */
          first_name: string | null;
          /** The string value returned by Fomo. */
          email_address: string | null;
          /** The string value returned by Fomo. */
          ip_address: string | null;
          /** The string value returned by Fomo. */
          city: string | null;
          /** The string value returned by Fomo. */
          province: string | null;
          /** The string value returned by Fomo. */
          country: string | null;
          /** The string value returned by Fomo. */
          title: string | null;
          /** The string value returned by Fomo. */
          external_id: string | null;
          /** The string value returned by Fomo. */
          image_url: string | null;
          /** The string value returned by Fomo. */
          message: string | null;
          /** The string value returned by Fomo. */
          link: string | null;
          /** The string value returned by Fomo. */
          created_at: string | null;
          /** The numeric value returned by Fomo. */
          created_at_to_seconds_from_epoch: number | null;
          /** The custom event fields returned by Fomo. */
          custom_event_fields_attributes: Array<{
            /** The custom field key. */
            key?: string;
            /** The custom field value. */
            value?: string;
            [key: string]: unknown;
          }>;
          /** The raw Fomo object payload. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
