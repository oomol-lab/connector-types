import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Return address autocomplete suggestions from Geoapify. */
    "geoapify.address_autocomplete": {
      input: {
        /**
         * The free-form text query sent to Geoapify.
         * @minLength 1
         */
        text: string;
        /**
         * The result language code in ISO 639-1 format.
         * @minLength 2
         */
        lang?: string;
        /**
         * The maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The Geoapify place type filter. */
        type?: "country" | "state" | "city" | "postcode" | "street" | "amenity" | "locality";
        /**
         * The Geoapify boundary or country filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * The Geoapify bias expression used to prioritize results.
         * @minLength 1
         */
        bias?: string;
        /** The response format returned by Geoapify. */
        format?: "geojson" | "json";
      };
      output: {
        /** The top-level GeoJSON type returned by Geoapify. */
        type?: string;
        /** The GeoJSON features returned by Geoapify. */
        features?: Array<Record<string, unknown>>;
        /** The geocoding results returned by Geoapify JSON format. */
        results?: Array<Record<string, unknown>>;
        /** The query metadata returned by Geoapify when available. */
        query?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Convert free-form text into geocoding results with Geoapify. */
    "geoapify.forward_geocode": {
      input: {
        /**
         * The free-form text query sent to Geoapify.
         * @minLength 1
         */
        text: string;
        /**
         * The result language code in ISO 639-1 format.
         * @minLength 2
         */
        lang?: string;
        /**
         * The maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The Geoapify place type filter. */
        type?: "country" | "state" | "city" | "postcode" | "street" | "amenity" | "locality";
        /**
         * The Geoapify boundary or country filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * The Geoapify bias expression used to prioritize results.
         * @minLength 1
         */
        bias?: string;
        /** The response format returned by Geoapify. */
        format?: "geojson" | "json";
      };
      output: {
        /** The top-level GeoJSON type returned by Geoapify. */
        type?: string;
        /** The GeoJSON features returned by Geoapify. */
        features?: Array<Record<string, unknown>>;
        /** The geocoding results returned by Geoapify JSON format. */
        results?: Array<Record<string, unknown>>;
        /** The query metadata returned by Geoapify when available. */
        query?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Calculate a route between waypoints with the Geoapify Routing API. */
    "geoapify.get_route": {
      input: {
        /**
         * The ordered route waypoints as `[longitude, latitude]` pairs.
         * @minItems 2
         */
        waypoints: Array<[number, number]>;
        /**
         * The Geoapify routing mode.
         * @minLength 1
         */
        mode?: string;
        /**
         * The Geoapify route preference.
         * @minLength 1
         */
        type?: string;
        /**
         * The distance unit system.
         * @minLength 1
         */
        units?: string;
        /**
         * The language for route instructions.
         * @minLength 2
         */
        lang?: string;
        /**
         * The extra route details to include.
         * @minLength 1
         */
        details?: string;
        /**
         * The traffic model used for the route.
         * @minLength 1
         */
        traffic?: string;
        /**
         * The maximum vehicle speed in kilometers per hour.
         * @minimum 10
         * @maximum 252
         */
        max_speed?: number;
        /**
         * The route avoid expression used by Geoapify.
         * @minLength 1
         */
        avoid?: string;
        /** The response format returned by Geoapify. */
        format?: "geojson" | "json";
      };
      output: {
        /** The top-level GeoJSON type returned by Geoapify. */
        type?: string;
        /** The route features returned by Geoapify. */
        features?: Array<Record<string, unknown>>;
        /** The top-level route metadata returned by Geoapify. */
        properties?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Calculate a travel matrix between sources and targets with Geoapify. */
    "geoapify.get_route_matrix": {
      input: {
        /**
         * The source waypoints used for the route matrix.
         * @minItems 1
         */
        sources: Array<{
          /**
           * A `[longitude, latitude]` coordinate pair.
           * @minItems 2
           * @maxItems 2
           */
          location: [number, number];
        }>;
        /**
         * The target waypoints used for the route matrix.
         * @minItems 1
         */
        targets: Array<{
          /**
           * A `[longitude, latitude]` coordinate pair.
           * @minItems 2
           * @maxItems 2
           */
          location: [number, number];
        }>;
        /**
         * The Geoapify routing mode.
         * @minLength 1
         */
        mode?: string;
        /**
         * The Geoapify route preference.
         * @minLength 1
         */
        type?: string;
        /**
         * The distance unit system.
         * @minLength 1
         */
        units?: string;
        /**
         * The traffic model used for the route.
         * @minLength 1
         */
        traffic?: string;
        /**
         * The maximum vehicle speed in kilometers per hour.
         * @minimum 10
         * @maximum 252
         */
        max_speed?: number;
        /** The list of avoid rules applied to the route matrix. */
        avoid?: Array<{
          /**
           * The avoided road or feature type.
           * @minLength 1
           */
          type: string;
          /**
           * The importance of the avoid rule.
           * @minimum 0
           * @maximum 1
           */
          importance?: number;
        }>;
      };
      output: {
        /** The travel mode used for the route matrix. */
        mode?: string;
        /** The route preference used for the route matrix. */
        type?: string;
        /** The unit system used for the route matrix. */
        units?: string;
        /** The normalized route matrix sources. */
        sources?: Array<Record<string, unknown>>;
        /** The normalized route matrix targets. */
        targets?: Array<Record<string, unknown>>;
        /** The source-to-target travel matrix returned by Geoapify. */
        sources_to_targets?: Array<Array<Record<string, unknown> | null>>;
        [key: string]: unknown;
      };
    };
    /** Convert latitude and longitude into place results with Geoapify. */
    "geoapify.reverse_geocode": {
      input: {
        /**
         * The latitude of the location to reverse geocode.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude of the location to reverse geocode.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
        /**
         * The result language code in ISO 639-1 format.
         * @minLength 2
         */
        lang?: string;
        /**
         * The maximum number of results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The Geoapify place type filter. */
        type?: "country" | "state" | "city" | "postcode" | "street" | "amenity" | "locality";
        /**
         * The Geoapify boundary or country filter expression.
         * @minLength 1
         */
        filter?: string;
        /**
         * The Geoapify bias expression used to prioritize results.
         * @minLength 1
         */
        bias?: string;
        /** The response format returned by Geoapify. */
        format?: "geojson" | "json";
      };
      output: {
        /** The top-level GeoJSON type returned by Geoapify. */
        type?: string;
        /** The GeoJSON features returned by Geoapify. */
        features?: Array<Record<string, unknown>>;
        /** The geocoding results returned by Geoapify JSON format. */
        results?: Array<Record<string, unknown>>;
        /** The query metadata returned by Geoapify when available. */
        query?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
