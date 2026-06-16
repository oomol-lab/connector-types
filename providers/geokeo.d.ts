import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert an address or place query into Geokeo geocoding results. */
    "geokeo.geocode_forward": {
      input: {
        /**
         * Address or place query string to geocode.
         * @minLength 1
         */
        q: string;
        /**
         * Optional ISO 3166-1 alpha-2 country code used to narrow the search.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
      };
      output: {
        /** The ordered geocoding results returned by Geokeo. */
        results?: Array<{
          /**
           * The OpenStreetMap class of the matched place.
           * @minLength 1
           */
          class?: string;
          /**
           * The OpenStreetMap type of the matched place.
           * @minLength 1
           */
          type?: string;
          /** Structured address components keyed by upstream field name. */
          address_components?: Record<string, unknown>;
          /**
           * The formatted postal-style address returned by Geokeo.
           * @minLength 1
           */
          formatted_address?: string;
          /** Geometry details for the matched place. */
          geometry?: {
            /** The centroid coordinates of the matched place. */
            location: {
              /**
               * Latitude in WGS 84 format returned by Geokeo.
               * @minLength 1
               */
              lat: string;
              /**
               * Longitude in WGS 84 format returned by Geokeo.
               * @minLength 1
               */
              lng: string;
              [key: string]: unknown;
            };
            /** The bounding box of the matched place. */
            viewport: {
              /** The northeast corner of the bounding box. */
              northeast: {
                /**
                 * Latitude in WGS 84 format returned by Geokeo.
                 * @minLength 1
                 */
                lat: string;
                /**
                 * Longitude in WGS 84 format returned by Geokeo.
                 * @minLength 1
                 */
                lng: string;
                [key: string]: unknown;
              };
              /** The southwest corner of the bounding box. */
              southwest: {
                /**
                 * Latitude in WGS 84 format returned by Geokeo.
                 * @minLength 1
                 */
                lat: string;
                /**
                 * Longitude in WGS 84 format returned by Geokeo.
                 * @minLength 1
                 */
                lng: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /**
           * OpenStreetMap URL for the matched coordinates.
           * @minLength 1
           */
          osmurl?: string;
          /**
           * Distance from the reverse query coordinates in kilometers.
           * @minLength 1
           */
          distance?: string;
          [key: string]: unknown;
        }>;
        /**
         * Credits URL returned by Geokeo.
         * @minLength 1
         */
        credits?: string;
        /**
         * Geokeo status string such as ok or ZERO_RESULTS.
         * @minLength 1
         */
        status: string;
        [key: string]: unknown;
      };
    };
    /** Convert coordinates into Geokeo reverse geocoding results. */
    "geokeo.geocode_reverse": {
      input: {
        /**
         * Latitude to reverse geocode.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * Longitude to reverse geocode.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
      };
      output: {
        /** The ordered geocoding results returned by Geokeo. */
        results?: Array<{
          /**
           * The OpenStreetMap class of the matched place.
           * @minLength 1
           */
          class?: string;
          /**
           * The OpenStreetMap type of the matched place.
           * @minLength 1
           */
          type?: string;
          /** Structured address components keyed by upstream field name. */
          address_components?: Record<string, unknown>;
          /**
           * The formatted postal-style address returned by Geokeo.
           * @minLength 1
           */
          formatted_address?: string;
          /** Geometry details for the matched place. */
          geometry?: {
            /** The centroid coordinates of the matched place. */
            location: {
              /**
               * Latitude in WGS 84 format returned by Geokeo.
               * @minLength 1
               */
              lat: string;
              /**
               * Longitude in WGS 84 format returned by Geokeo.
               * @minLength 1
               */
              lng: string;
              [key: string]: unknown;
            };
            /** The bounding box of the matched place. */
            viewport: {
              /** The northeast corner of the bounding box. */
              northeast: {
                /**
                 * Latitude in WGS 84 format returned by Geokeo.
                 * @minLength 1
                 */
                lat: string;
                /**
                 * Longitude in WGS 84 format returned by Geokeo.
                 * @minLength 1
                 */
                lng: string;
                [key: string]: unknown;
              };
              /** The southwest corner of the bounding box. */
              southwest: {
                /**
                 * Latitude in WGS 84 format returned by Geokeo.
                 * @minLength 1
                 */
                lat: string;
                /**
                 * Longitude in WGS 84 format returned by Geokeo.
                 * @minLength 1
                 */
                lng: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /**
           * OpenStreetMap URL for the matched coordinates.
           * @minLength 1
           */
          osmurl?: string;
          /**
           * Distance from the reverse query coordinates in kilometers.
           * @minLength 1
           */
          distance?: string;
          [key: string]: unknown;
        }>;
        /**
         * Credits URL returned by Geokeo.
         * @minLength 1
         */
        credits?: string;
        /**
         * Geokeo status string such as ok or ZERO_RESULTS.
         * @minLength 1
         */
        status: string;
        [key: string]: unknown;
      };
    };
  }
}
