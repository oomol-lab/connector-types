import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit multiple forward or reverse geocoding queries in one Mapbox batch request. */
    "mapbox.batch_geocode": {
      input: {
        /**
         * The batch geocoding queries submitted to Mapbox.
         * @minItems 1
         */
        queries: Array<{
          /** Use forward geocoding for this query. */
          mode: "forward";
          /**
           * The free-form text query to geocode.
           * @minLength 1
           */
          q: string;
          /**
           * The maximum number of features to return for this query.
           * @maximum 10
           * @exclusiveMinimum 0
           */
          limit?: number;
        } | {
          /** Use reverse geocoding for this query. */
          mode: "reverse";
          /**
           * The longitude of the coordinate to reverse geocode.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * The latitude of the coordinate to reverse geocode.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
          /**
           * The maximum number of features to return for this query.
           * @maximum 10
           * @exclusiveMinimum 0
           */
          limit?: number;
        }>;
      };
      output: {
        /** The per-query geocoding results returned by Mapbox. */
        batch?: Array<{
          /** The top-level GeoJSON type returned by Mapbox. */
          type?: string;
          /** The geocoding features returned by Mapbox. */
          features?: Array<Record<string, unknown>>;
          /** The Mapbox attribution string for the response. */
          attribution?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Convert free-form text into geographic features with Mapbox Geocoding v6. */
    "mapbox.forward_geocode": {
      input: {
        /**
         * The free-form text query to geocode.
         * @minLength 1
         */
        q: string;
        /** Whether Mapbox should return autocomplete-style results. */
        autocomplete?: boolean;
        /**
         * The maximum number of features to return.
         * @maximum 10
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The IETF language tag used for localized feature names.
         * @minLength 1
         */
        language?: string;
        /**
         * The country filters applied to the geocoding request.
         * @minItems 1
         */
        country?: Array<string>;
        /**
         * The feature types to include in the response.
         * @minItems 1
         */
        types?: Array<string>;
        /**
         * The `[minLon, minLat, maxLon, maxLat]` bounding box.
         * @minItems 4
         * @maxItems 4
         */
        bbox?: [number, number, number, number];
        /**
         * A `[longitude, latitude]` coordinate pair.
         * @minItems 2
         * @maxItems 2
         */
        proximity?: [number, number];
      };
      output: {
        /** The top-level GeoJSON type returned by Mapbox. */
        type?: string;
        /** The geocoding features returned by Mapbox. */
        features?: Array<Record<string, unknown>>;
        /** The Mapbox attribution string for the response. */
        attribution?: string;
        [key: string]: unknown;
      };
    };
    /** Compute a route between multiple coordinates with the Mapbox Directions API. */
    "mapbox.get_directions": {
      input: {
        /** The routing profile used by the request. */
        profile: "mapbox/driving" | "mapbox/driving-traffic" | "mapbox/walking" | "mapbox/cycling";
        /**
         * The route coordinates in travel order.
         * @minItems 2
         */
        coordinates: Array<[number, number]>;
        /** Whether to request alternative routes. */
        alternatives?: boolean;
        /**
         * The route annotations to include in the response.
         * @minItems 1
         */
        annotations?: Array<string>;
        /** Whether the router should prefer continuing straight at waypoints. */
        continue_straight?: boolean;
        /**
         * The route features to exclude.
         * @minItems 1
         */
        exclude?: Array<string>;
        /**
         * The geometry encoding used in the route response.
         * @minLength 1
         */
        geometries?: string;
        /**
         * The language used for route instructions.
         * @minLength 1
         */
        language?: string;
        /**
         * The route overview geometry detail level.
         * @minLength 1
         */
        overview?: string;
        /** Whether roundabout maneuver exits should be included. */
        roundabout_exits?: boolean;
        /** Whether step-by-step route instructions should be included. */
        steps?: boolean;
        /** Whether voice instructions should be included. */
        voice_instructions?: boolean;
        /** Whether banner instructions should be included. */
        banner_instructions?: boolean;
        /**
         * The radius in meters used to avoid immediate maneuvers.
         * @exclusiveMinimum 0
         */
        avoid_maneuver_radius?: number;
        /**
         * The departure time used for time-aware routing.
         * @minLength 1
         */
        depart_at?: string;
        /**
         * The arrival time used for time-aware routing.
         * @minLength 1
         */
        arrive_by?: string;
        /**
         * The coordinate indexes that should be treated as waypoints.
         * @minItems 1
         */
        waypoints?: Array<number>;
      };
      output: {
        /** The directions routes returned by Mapbox. */
        routes?: Array<Record<string, unknown>>;
        /** The waypoint metadata returned by Mapbox. */
        waypoints?: Array<Record<string, unknown>>;
        /** The response code returned by Mapbox. */
        code?: string;
        /** The response UUID returned by Mapbox. */
        uuid?: string;
        [key: string]: unknown;
      };
    };
    /** Compute a travel time or distance matrix with the Mapbox Matrix API. */
    "mapbox.get_matrix": {
      input: {
        /** The routing profile used by the request. */
        profile: "mapbox/driving" | "mapbox/driving-traffic" | "mapbox/walking" | "mapbox/cycling";
        /**
         * The coordinates included in the matrix calculation.
         * @minItems 2
         */
        coordinates: Array<[number, number]>;
        /**
         * The matrix annotations to include in the response.
         * @minItems 1
         */
        annotations?: Array<"duration" | "distance">;
        /**
         * The curb approach constraints for the coordinates.
         * @minItems 1
         */
        approaches?: Array<string>;
        /**
         * The bearing filters applied to the coordinates.
         * @minItems 1
         */
        bearings?: Array<string>;
        /**
         * The fallback speed in meters per second.
         * @exclusiveMinimum 0
         */
        fallback_speed?: number;
        /**
         * The coordinates used as matrix sources.
         * @minItems 1
         */
        sources?: Array<number>;
        /**
         * The coordinates used as matrix destinations.
         * @minItems 1
         */
        destinations?: Array<number>;
      };
      output: {
        /** The response code returned by Mapbox. */
        code?: string;
        /** The travel duration matrix in seconds. */
        durations?: Array<Array<number | null>>;
        /** The travel distance matrix in meters. */
        distances?: Array<Array<number | null>>;
        /** The source waypoint metadata. */
        sources?: Array<Record<string, unknown>>;
        /** The destination waypoint metadata. */
        destinations?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Convert a coordinate pair into place features with Mapbox Geocoding v6. */
    "mapbox.reverse_geocode": {
      input: {
        /**
         * The longitude of the coordinate to reverse geocode.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * The latitude of the coordinate to reverse geocode.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The maximum number of features to return.
         * @maximum 10
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The IETF language tag used for localized feature names.
         * @minLength 1
         */
        language?: string;
        /**
         * The feature types to include in the response.
         * @minItems 1
         */
        types?: Array<string>;
        /**
         * The worldview applied to the response.
         * @minLength 1
         */
        worldview?: string;
      };
      output: {
        /** The top-level GeoJSON type returned by Mapbox. */
        type?: string;
        /** The geocoding features returned by Mapbox. */
        features?: Array<Record<string, unknown>>;
        /** The Mapbox attribution string for the response. */
        attribution?: string;
        [key: string]: unknown;
      };
    };
  }
}
