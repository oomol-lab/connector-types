import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Compute route matrix elements for origin and destination waypoint combinations with Google Routes. */
    "google_routes.compute_route_matrix": {
      input: {
        /**
         * The response field mask sent as the `X-Goog-FieldMask` header.
         * @minLength 1
         */
        fieldMask: string;
        /**
         * The route matrix origin route matrix waypoints.
         * @minItems 1
         */
        origins: Array<Record<string, unknown>>;
        /**
         * The route matrix destination route matrix waypoints.
         * @minItems 1
         */
        destinations: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
      output: Array<{
        /** The zero-based origin index for this matrix element. */
        originIndex?: number;
        /** The zero-based destination index for this matrix element. */
        destinationIndex?: number;
        /** The per-element status returned by Google Routes. */
        status?: Record<string, unknown>;
        /** The route condition for this matrix element. */
        condition?: string;
        /** The route distance in meters. */
        distanceMeters?: number;
        /** The route duration. */
        duration?: string;
        /** The route static duration without traffic. */
        staticDuration?: string;
        [key: string]: unknown;
      }>;
    };
    /** Compute one or more routes between an origin and destination with Google Routes. */
    "google_routes.compute_routes": {
      input: {
        /**
         * The response field mask sent as the `X-Goog-FieldMask` header.
         * @minLength 1
         */
        fieldMask: string;
        /** The route origin waypoint. */
        origin: Record<string, unknown>;
        /** The route destination waypoint. */
        destination: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** The routes returned by Google Routes. */
        routes?: Array<Record<string, unknown>>;
        /** Fallback information returned by Google Routes. */
        fallbackInfo?: Record<string, unknown>;
        /** Geocoding results returned by Google Routes. */
        geocodingResults?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
