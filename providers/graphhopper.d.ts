import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate the best route connecting two or more coordinates with the GraphHopper Routing API. */
    "graphhopper.calculate_route": {
      input: {
        /**
         * Route waypoints in `latitude,longitude` format.
         * @minItems 2
         */
        point: Array<string>;
        /**
         * The GraphHopper routing profile, such as `car`, `bike`, `foot`, or a custom profile id.
         * @minLength 1
         */
        profile?: string;
        /**
         * The locale for turn instructions, such as `en`, `de`, or `fr`.
         * @minLength 1
         */
        locale?: string;
        /**
         * Optional road name hints for snapping each route waypoint.
         * @minItems 1
         */
        pointHint?: Array<string>;
        /**
         * Road types that should be avoided while snapping input points.
         * @minItems 1
         */
        snapPrevention?: Array<string>;
        /** Curbside preferences for each route waypoint. */
        curbside?: Array<"any" | "right" | "left">;
        /**
         * Path detail types to include in the route response.
         * @minItems 1
         */
        details?: Array<string>;
        /** Whether GraphHopper should reorder more than two points to reduce travel time. */
        optimize?: boolean;
        /** Whether GraphHopper should return turn-by-turn instructions. */
        instructions?: boolean;
        /** Whether GraphHopper should calculate route geometry points. */
        calcPoints?: boolean;
        /** Whether GraphHopper should return encoded polyline geometry. */
        pointsEncoded?: boolean;
        /** Whether GraphHopper should include altitude as a third coordinate. */
        elevation?: boolean;
        /** Whether GraphHopper should format debug output. */
        debug?: boolean;
        /** Whether to enable flexible mode for advanced routing options. */
        chDisable?: boolean;
        /** Preferred heading directions in degrees, north-based clockwise. */
        heading?: Array<number>;
        /**
         * The time penalty in seconds for not obeying heading.
         * @minimum 0
         */
        headingPenalty?: number;
        /** Whether GraphHopper should avoid u-turns at via-points. */
        passThrough?: boolean;
        /** The special route algorithm to use. */
        algorithm?: "round_trip" | "alternative_route";
        /**
         * The approximate round-trip length in meters.
         * @minimum 0
         */
        roundTripDistance?: number;
        /** The random seed used for deterministic round-trip results. */
        roundTripSeed?: number;
        /**
         * The maximum number of alternative routes.
         * @exclusiveMinimum 0
         */
        alternativeRouteMaxPaths?: number;
        /**
         * The maximum factor by which alternative routes may be longer than the optimal route.
         * @minimum 0
         */
        alternativeRouteMaxWeightFactor?: number;
        /**
         * The maximum similarity factor between an alternative route and the optimal route.
         * @minimum 0
         * @maximum 1
         */
        alternativeRouteMaxShareFactor?: number;
      };
      output: {
        /** The calculated route paths. */
        paths?: Array<{
          /** The total route distance in meters. */
          distance?: number;
          /** The total route travel time in milliseconds. */
          time?: number;
          /** The total ascent in meters. */
          ascend?: number;
          /** The total descent in meters. */
          descend?: number;
          /** The route geometry, either encoded or a coordinate object. */
          points?: unknown;
          /** The snapped input waypoints, either encoded or a coordinate object. */
          snapped_waypoints?: unknown;
          /** Whether route geometry fields use encoded polyline strings. */
          points_encoded?: boolean;
          /** The route bounding box as `[minLon, minLat, maxLon, maxLat]`. */
          bbox?: Array<number>;
          /** The turn-by-turn route instructions returned by GraphHopper. */
          instructions?: Array<Record<string, unknown>>;
          /** Path details keyed by requested detail type. */
          details?: Record<string, unknown>;
          /** The optimized visit order when route optimization was requested. */
          points_order?: Array<number>;
          [key: string]: unknown;
        }>;
        /** Additional GraphHopper response metadata. */
        info?: {
          /** The copyright notices returned by GraphHopper. */
          copyrights?: Array<string>;
          /** The time GraphHopper spent processing the request. */
          took?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Compute GeoJSON isochrone polygons around a coordinate with the GraphHopper Isochrone API. */
    "graphhopper.compute_isochrone": {
      input: {
        /**
         * A coordinate string in `latitude,longitude` format.
         * @minLength 3
         */
        point: string;
        /**
         * The GraphHopper routing profile, such as `car`, `bike`, `foot`, or a custom profile id.
         * @minLength 1
         */
        profile?: string;
        /**
         * The travel time limit in seconds.
         * @exclusiveMinimum 0
         */
        timeLimit?: number;
        /**
         * The travel distance limit in meters.
         * @exclusiveMinimum 0
         */
        distanceLimit?: number;
        /**
         * The number of nested isochrone buckets to return.
         * @exclusiveMinimum 0
         */
        buckets?: number;
        /** Whether the flow should go from polygons toward the point. */
        reverseFlow?: boolean;
      };
      output: {
        /** The GeoJSON isochrone polygons returned by GraphHopper. */
        polygons?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Compute a synchronous travel time, distance, or weight matrix with the GraphHopper Matrix API. */
    "graphhopper.compute_matrix": {
      input: {
        /**
         * Points in `latitude,longitude` format used as both origins and destinations.
         * @minItems 3
         */
        point?: Array<string>;
        /**
         * Origin points in `latitude,longitude` format.
         * @minItems 1
         */
        fromPoint?: Array<string>;
        /**
         * Destination points in `latitude,longitude` format.
         * @minItems 1
         */
        toPoint?: Array<string>;
        /**
         * The GraphHopper routing profile, such as `car`, `bike`, `foot`, or a custom profile id.
         * @minLength 1
         */
        profile?: string;
        /**
         * Hints for point entries.
         * @minItems 1
         */
        pointHint?: Array<string>;
        /**
         * Hints for origin points.
         * @minItems 1
         */
        fromPointHint?: Array<string>;
        /**
         * Hints for destination points.
         * @minItems 1
         */
        toPointHint?: Array<string>;
        /**
         * Road types that should be avoided while snapping matrix points.
         * @minItems 1
         */
        snapPrevention?: Array<string>;
        /** Curbside preferences for point entries. */
        curbside?: Array<"any" | "right" | "left">;
        /** Curbside preferences for origin points. */
        fromCurbside?: Array<"any" | "right" | "left">;
        /** Curbside preferences for destination points. */
        toCurbside?: Array<"any" | "right" | "left">;
        /**
         * Matrix arrays to include in the response.
         * @minItems 1
         */
        outArray?: Array<"weights" | "times" | "distances">;
        /** Whether GraphHopper should fail immediately when points cannot be resolved. */
        failFast?: boolean;
      };
      output: {
        /** A GraphHopper matrix of numeric values or null entries. */
        distances?: Array<Array<number | null>>;
        /** A GraphHopper matrix of numeric values or null entries. */
        times?: Array<Array<number | null>>;
        /** A GraphHopper matrix of numeric values or null entries. */
        weights?: Array<Array<number | null>>;
        /** Additional GraphHopper response metadata. */
        info?: {
          /** The copyright notices returned by GraphHopper. */
          copyrights?: Array<string>;
          /** The time GraphHopper spent processing the request. */
          took?: number;
          [key: string]: unknown;
        };
        /** Additional GraphHopper matrix hints. */
        hints?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Convert text to coordinates or coordinates to place candidates with the GraphHopper Geocoding API. */
    "graphhopper.geocode": {
      input: {
        /**
         * The textual address or place query for forward geocoding.
         * @minLength 1
         */
        q?: string;
        /**
         * The `latitude,longitude` location bias for forward geocoding or target coordinate for reverse geocoding.
         * @minLength 1
         */
        point?: string;
        /** Whether to perform reverse geocoding. When true, point is required and q must be omitted. */
        reverse?: boolean;
        /**
         * The locale used for localized geocoding results.
         * @minLength 1
         */
        locale?: string;
        /**
         * The maximum number of geocoding results to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The GraphHopper geocoding provider, such as `default`, `nominatim`, `gisgraphy`, or `opencagedata`.
         * @minLength 1
         */
        provider?: string;
        /** Whether GraphHopper should format debug output. */
        debug?: boolean;
      };
      output: {
        /** The geocoding candidates returned by GraphHopper. */
        hits?: Array<{
          /** A latitude and longitude point returned by GraphHopper. */
          point?: {
            /** The latitude coordinate. */
            lat: number;
            /** The longitude coordinate. */
            lng: number;
          };
          /** The OpenStreetMap entity id. */
          osm_id?: number;
          /** The OpenStreetMap entity type. */
          osm_type?: string;
          /** The OpenStreetMap key. */
          osm_key?: string;
          /** The OpenStreetMap value. */
          osm_value?: string;
          /** The matched place, address, or entity name. */
          name?: string;
          /** The country of the result. */
          country?: string;
          /** The city of the result. */
          city?: string;
          /** The state or region of the result. */
          state?: string;
          /** The street of the result. */
          street?: string;
          /** The house number of the result. */
          housenumber?: string;
          /** The postal code of the result. */
          postcode?: string;
          [key: string]: unknown;
        }>;
        /** The time GraphHopper spent processing the geocoding request in milliseconds. */
        took?: number;
        [key: string]: unknown;
      };
    };
    /** List custom routing profiles available to the GraphHopper API key. */
    "graphhopper.list_profiles": {
      input: Record<string, never>;
      output: {
        /** The available custom routing profiles. */
        profiles: Array<{
          /** The custom profile id. */
          id?: string;
          /** The built-in routing profile this custom profile is based on. */
          profile?: string;
          /** The geographic bounds where this custom profile can be used. */
          bounds?: Record<string, unknown>;
          /** The custom model definition for this profile. */
          custom_model?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
