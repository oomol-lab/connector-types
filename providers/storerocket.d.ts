import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a location. Requires name and city; omit hours or use an empty object for a location without a schedule. */
    "storerocket.create_location": {
      input: {
        /**
         * Public project ID returned by list_projects.
         * @minLength 1
         */
        project_id: string;
        /** Location fields to create. */
        location: {
          /**
           * Location name.
           * @minLength 1
           * @maxLength 255
           */
          name: string;
          /**
           * City; a street address is optional.
           * @minLength 1
           * @maxLength 255
           */
          city: string;
          /** Whether the location is shown in the locator. */
          visible?: boolean;
          /** Street address. */
          address_line_1?: string;
          /** Additional address information. */
          address_line_2?: string;
          /** State or region. */
          state?: string;
          /** Postal code. */
          postcode?: string;
          /** Country. */
          country?: string;
          /** Phone number. */
          phone?: string;
          /** Email address. */
          email?: string;
          /** Website URL. */
          url?: string;
          /** Location slug. */
          slug?: string;
          /** Full address; generated from components when needed. */
          address?: string;
          /** Address displayed to visitors. */
          display_address?: string;
          /** Location timezone. */
          timezone?: string;
          /** Facebook profile. */
          facebook?: string;
          /** Instagram profile. */
          instagram?: string;
          /** Twitter profile. */
          twitter?: string;
          /** Yelp profile. */
          yelp?: string;
          /** YouTube profile. */
          youtube?: string;
          /** TikTok profile. */
          tiktok?: string;
          /** Location type name belonging to the project. */
          location_type?: string;
          /** Image URL or stored project image name; StoreRocket retrieves the image. */
          cover?: string;
          /**
           * Latitude; POST may geocode when zero or omitted.
           * @minimum -90
           * @maximum 90
           */
          lat?: number;
          /**
           * Longitude; POST may geocode when zero or omitted.
           * @minimum -180
           * @maximum 180
           */
          lng?: number;
          /** Marker ID belonging to the project. */
          marker_id?: number;
          /** All seven weekdays, or an empty object for no schedule. */
          hours?: unknown | Record<string, unknown>;
          /** Filter names as an array or comma-separated string. */
          filters?: Array<string> | string;
          /** Custom field values keyed by name. */
          fields?: Record<string, string>;
          /** Call-to-action values keyed by name. */
          callsToAction?: Record<string, string>;
        };
      };
      output: {
        /** Location resource with additional upstream fields preserved. */
        data: {
          /** Public location ID. */
          id?: string;
          /** Location name. */
          name?: string;
          /** City. */
          city?: string;
          /** Latitude, possibly null while geocoding. */
          lat?: number | null;
          /** Longitude, possibly null while geocoding. */
          lng?: number | null;
          /** Opening hours, included when requested. */
          hours?: Record<string, unknown> | null;
          /** Attached filters, included when requested. */
          filters?: Array<Record<string, unknown>>;
          /** Custom fields, included when requested. */
          fields?: Array<Record<string, unknown>>;
          /** Calls to action, included when requested. */
          callsToAction?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete a location from its project and locator results. */
    "storerocket.delete_location": {
      input: {
        /**
         * Public project ID returned by list_projects.
         * @minLength 1
         */
        project_id: string;
        /**
         * Public location ID belonging to the project.
         * @minLength 1
         */
        location_id: string;
      };
      output: {
        /** Whether the location was deleted. */
        success: boolean;
        [key: string]: unknown;
      };
    };
    /** Read one location and optionally include its attached information. */
    "storerocket.get_location": {
      input: {
        /**
         * Public project ID returned by list_projects.
         * @minLength 1
         */
        project_id: string;
        /**
         * Public location ID belonging to the project.
         * @minLength 1
         */
        location_id: string;
        /** Include opening hours; absent schedules return null. */
        includeHours?: boolean;
        /** Include attached filters. */
        includeFilters?: boolean;
        /** Include custom fields. */
        includeFields?: boolean;
        /** Include calls to action. */
        includeCallsToAction?: boolean;
      };
      output: {
        /** Location resource with additional upstream fields preserved. */
        data: {
          /** Public location ID. */
          id?: string;
          /** Location name. */
          name?: string;
          /** City. */
          city?: string;
          /** Latitude, possibly null while geocoding. */
          lat?: number | null;
          /** Longitude, possibly null while geocoding. */
          lng?: number | null;
          /** Opening hours, included when requested. */
          hours?: Record<string, unknown> | null;
          /** Attached filters, included when requested. */
          filters?: Array<Record<string, unknown>>;
          /** Custom fields, included when requested. */
          fields?: Array<Record<string, unknown>>;
          /** Calls to action, included when requested. */
          callsToAction?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Read the profile associated with the API token. */
    "storerocket.get_user": {
      input: Record<string, never>;
      output: {
        /** Authenticated user profile. */
        data: {
          /** User ID. */
          id?: string;
          /** User name. */
          name?: string;
          /** User email. */
          email?: string;
          /** Company name. */
          company?: string | null;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List one page of locations with filters and optional relationships. Keep filters and include flags on subsequent pages. */
    "storerocket.list_locations": {
      input: {
        /**
         * Public project ID returned by list_projects.
         * @minLength 1
         */
        project_id: string;
        /**
         * Page number; defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Page size; defaults to 15.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Include opening hours; absent schedules return null. */
        includeHours?: boolean;
        /** Include attached filters. */
        includeFilters?: boolean;
        /** Include custom fields. */
        includeFields?: boolean;
        /** Include calls to action. */
        includeCallsToAction?: boolean;
        /** Combined location filters using the documented operators. */
        filters?: {
          /** Name filter. */
          name?: {
            /** Exact value. */
            eq?: string;
            /** Substring to match. */
            like?: string;
            /** Value to exclude. */
            ne?: string;
          };
          /** Exact or substring filter. */
          address?: {
            /** Exact value. */
            eq?: string;
            /** Substring to match. */
            like?: string;
          };
          /** Exact or substring filter. */
          city?: {
            /** Exact value. */
            eq?: string;
            /** Substring to match. */
            like?: string;
          };
          /** Exact or substring filter. */
          state?: {
            /** Exact value. */
            eq?: string;
            /** Substring to match. */
            like?: string;
          };
          /** Exact or substring filter. */
          country?: {
            /** Exact value. */
            eq?: string;
            /** Substring to match. */
            like?: string;
          };
          /** Postal code filter; the API query uses postalCode. */
          postalCode?: {
            /** Exact value. */
            eq: string;
          };
        };
      };
      output: {
        /** Locations on this page. */
        data: Array<{
          /** Public location ID. */
          id?: string;
          /** Location name. */
          name?: string;
          /** City. */
          city?: string;
          /** Latitude, possibly null while geocoding. */
          lat?: number | null;
          /** Longitude, possibly null while geocoding. */
          lng?: number | null;
          /** Opening hours, included when requested. */
          hours?: Record<string, unknown> | null;
          /** Attached filters, included when requested. */
          filters?: Array<Record<string, unknown>>;
          /** Custom fields, included when requested. */
          fields?: Array<Record<string, unknown>>;
          /** Calls to action, included when requested. */
          callsToAction?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** Pagination links; next is null on the final page. */
        links: {
          /** Next page URL; use the page input to continue. */
          next?: string | null;
          [key: string]: unknown;
        };
        /** Pagination metadata. */
        meta: {
          /** Current page. */
          current_page?: number;
          /** Last page. */
          last_page?: number;
          /** Page size. */
          per_page?: number;
          /** Total matching locations. */
          total?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List projects available to the authenticated user. */
    "storerocket.list_projects": {
      input: Record<string, never>;
      output: {
        /** Available projects. */
        data: Array<{
          /** Public project ID. */
          id?: string;
          /** Project name. */
          name?: string;
          /** Location count. */
          locations?: number;
          /** Project status. */
          status?: string;
          /** Project plan. */
          plan?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update selected location fields with PATCH. Omitted fields remain saved; address changes may queue geocoding and return before coordinates are ready. */
    "storerocket.update_location": {
      input: {
        /**
         * Public project ID returned by list_projects.
         * @minLength 1
         */
        project_id: string;
        /**
         * Public location ID belonging to the project.
         * @minLength 1
         */
        location_id: string;
        /** Selected fields to update; nullable fields support explicit clearing. */
        location: {
          /**
           * Location name.
           * @minLength 1
           * @maxLength 255
           */
          name?: string;
          /**
           * City; a street address is optional.
           * @minLength 1
           * @maxLength 255
           */
          city?: string;
          /** Whether the location is shown in the locator. */
          visible?: boolean;
          /** Street address. */
          address_line_1?: string | null;
          /** Additional address information. */
          address_line_2?: string | null;
          /** State or region. */
          state?: string | null;
          /** Postal code. */
          postcode?: string | null;
          /** Country. */
          country?: string | null;
          /** Phone number. */
          phone?: string | null;
          /** Email address. */
          email?: string | null;
          /** Website URL. */
          url?: string | null;
          /** Location slug. */
          slug?: string | null;
          /** Full address; generated from components when needed. */
          address?: string | null;
          /** Address displayed to visitors. */
          display_address?: string | null;
          /** Location timezone. */
          timezone?: string | null;
          /** Facebook profile. */
          facebook?: string | null;
          /** Instagram profile. */
          instagram?: string | null;
          /** Twitter profile. */
          twitter?: string | null;
          /** Yelp profile. */
          yelp?: string | null;
          /** YouTube profile. */
          youtube?: string | null;
          /** TikTok profile. */
          tiktok?: string | null;
          /** Location type name belonging to the project. */
          location_type?: string | null;
          /** Image URL or stored project image name; StoreRocket retrieves the image. */
          cover?: string | null;
          /**
           * Latitude; zero is preserved.
           * @minimum -90
           * @maximum 90
           */
          lat?: number | null;
          /**
           * Longitude; zero is preserved.
           * @minimum -180
           * @maximum 180
           */
          lng?: number | null;
          /** Marker ID; null restores the project default. */
          marker_id?: number | null;
          /** Selected weekdays; an empty object preserves hours and null removes the schedule. */
          hours?: {
            /** Time ranges, closed, or null for an unset day. */
            mon?: string | null;
            /** Time ranges, closed, or null for an unset day. */
            tue?: string | null;
            /** Time ranges, closed, or null for an unset day. */
            wed?: string | null;
            /** Time ranges, closed, or null for an unset day. */
            thu?: string | null;
            /** Time ranges, closed, or null for an unset day. */
            fri?: string | null;
            /** Time ranges, closed, or null for an unset day. */
            sat?: string | null;
            /** Time ranges, closed, or null for an unset day. */
            sun?: string | null;
          } | null;
          /** Filter names as an array or comma-separated string. */
          filters?: Array<string> | string | null;
          /** Merge custom fields; null values remove entries and null clears all attachments. */
          fields?: Record<string, string | null> | null;
          /** Merge calls to action; null values remove entries and null clears all attachments. */
          callsToAction?: Record<string, string | null> | null;
        };
      };
      output: {
        /** Location resource with additional upstream fields preserved. */
        data: {
          /** Public location ID. */
          id?: string;
          /** Location name. */
          name?: string;
          /** City. */
          city?: string;
          /** Latitude, possibly null while geocoding. */
          lat?: number | null;
          /** Longitude, possibly null while geocoding. */
          lng?: number | null;
          /** Opening hours, included when requested. */
          hours?: Record<string, unknown> | null;
          /** Attached filters, included when requested. */
          filters?: Array<Record<string, unknown>>;
          /** Custom fields, included when requested. */
          fields?: Array<Record<string, unknown>>;
          /** Calls to action, included when requested. */
          callsToAction?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
