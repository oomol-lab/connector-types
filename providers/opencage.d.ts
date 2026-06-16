import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert an address or place name into OpenCage geocoding results. */
    "opencage.geocode_forward": {
      input: {
        /**
         * Address or free-form query string to geocode.
         * @minLength 1
         */
        q: string;
        /**
         * Maximum number of results to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Bounding box bias formatted as west,south,east,north.
         * @minLength 1
         */
        bounds?: string;
        /**
         * Preferred response language code.
         * @minLength 1
         */
        language?: string;
        /**
         * Bias results near a latitude,longitude point.
         * @minLength 1
         */
        proximity?: string;
        /**
         * Comma-separated ISO 3166-1 alpha-2 country codes used to restrict results.
         * @minLength 1
         */
        countrycode?: string;
        /** Whether to abbreviate road and route names. */
        abbrv?: boolean;
        /** Whether to include the original request in the response. */
        add_request?: boolean;
        /** Whether to omit annotations such as timezone or currency details. */
        no_annotations?: boolean;
        /** Whether to pretty-print the JSON response. */
        pretty?: boolean;
        /**
         * Minimum confidence score allowed for returned results, from 1 to 10.
         * @minimum 1
         * @maximum 10
         */
        min_confidence?: number;
      };
      output: {
        /**
         * Documentation URL for the OpenCage API response.
         * @minLength 1
         */
        documentation: string;
        /** License entries attached to the response. */
        licenses: Array<{
          /**
           * License name for the returned data.
           * @minLength 1
           */
          name: string;
          /**
           * License URL for the returned data.
           * @minLength 1
           */
          url: string;
        }>;
        /** Rate limit information for the current API key. */
        rate?: {
          /** Maximum number of requests allowed in the current window. */
          limit: number;
          /** Remaining number of requests in the current window. */
          remaining: number;
          /** Unix timestamp when the rate window resets. */
          reset: number;
        };
        /** Geocoding results returned by OpenCage. */
        results: Array<{
          /**
           * Formatted address string returned for the matched result.
           * @minLength 1
           */
          formatted: string;
          /** Confidence score assigned by OpenCage for this result. */
          confidence: number;
          /** Coordinates for the matched result. */
          geometry: {
            /** Latitude in decimal degrees. */
            lat: number;
            /** Longitude in decimal degrees. */
            lng: number;
          };
          /** Structured address components keyed by upstream field name. */
          components?: Record<string, unknown>;
          /** Additional annotations returned by OpenCage. */
          annotations?: Record<string, unknown>;
          /** Bounding box metadata for the matched result. */
          bounds?: Record<string, unknown>;
          /** Distance metadata between the query point and the matched result. */
          distance_from_q?: Record<string, unknown>;
        }>;
        /** Status information returned by OpenCage. */
        status: {
          /** OpenCage status code for the request. */
          code: number;
          /**
           * Human-readable status message from OpenCage.
           * @minLength 1
           */
          message: string;
        };
        /**
         * Attribution or thank-you message returned by OpenCage.
         * @minLength 1
         */
        thanks: string;
        /** Creation time metadata for the response. */
        timestamp: {
          /**
           * HTTP date when the response was generated.
           * @minLength 1
           */
          created_http: string;
          /** Unix timestamp when the response was generated. */
          created_unix: number;
        };
        /** Total number of matching results. */
        total_results: number;
      };
    };
    /** Return OpenCage geocoding results in GeoJSON FeatureCollection format. */
    "opencage.geocode_geojson": {
      input: {
        /**
         * Address or free-form query string to geocode.
         * @minLength 1
         */
        q: string;
        /**
         * Maximum number of results to return, from 1 to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Bounding box bias formatted as west,south,east,north.
         * @minLength 1
         */
        bounds?: string;
        /**
         * Preferred response language code.
         * @minLength 1
         */
        language?: string;
        /**
         * Bias results near a latitude,longitude point.
         * @minLength 1
         */
        proximity?: string;
        /**
         * Comma-separated ISO 3166-1 alpha-2 country codes used to restrict results.
         * @minLength 1
         */
        countrycode?: string;
        /** Whether to abbreviate road and route names. */
        abbrv?: boolean;
        /** Whether to include the original request in the response. */
        add_request?: boolean;
        /** Whether to omit annotations such as timezone or currency details. */
        no_annotations?: boolean;
        /** Whether to pretty-print the JSON response. */
        pretty?: boolean;
        /**
         * Minimum confidence score allowed for returned results, from 1 to 10.
         * @minimum 1
         * @maximum 10
         */
        min_confidence?: number;
        /** Whether to include road information in the response. */
        roadinfo?: boolean;
      };
      output: {
        /** GeoJSON type returned by OpenCage. */
        type: "FeatureCollection";
        /** GeoJSON features returned by OpenCage. */
        features: Array<{
          /** GeoJSON feature type. */
          type: "Feature";
          /** GeoJSON geometry payload. */
          geometry: {
            /**
             * GeoJSON geometry type.
             * @minLength 1
             */
            type: string;
            /** GeoJSON coordinates for the feature. */
            coordinates: Array<number>;
          };
          /** GeoJSON properties returned by OpenCage. */
          properties: Record<string, unknown>;
        }>;
        /** License entries attached to the response. */
        licenses: Array<{
          /**
           * License name for the returned data.
           * @minLength 1
           */
          name: string;
          /**
           * License URL for the returned data.
           * @minLength 1
           */
          url: string;
        }>;
        /** Rate limit information for the current API key. */
        rate?: {
          /** Maximum number of requests allowed in the current window. */
          limit: number;
          /** Remaining number of requests in the current window. */
          remaining: number;
          /** Unix timestamp when the rate window resets. */
          reset: number;
        };
        /** Status information returned by OpenCage. */
        status?: {
          /** OpenCage status code for the request. */
          code: number;
          /**
           * Human-readable status message from OpenCage.
           * @minLength 1
           */
          message: string;
        };
        /** Creation time metadata for the response. */
        timestamp?: {
          /**
           * HTTP date when the response was generated.
           * @minLength 1
           */
          created_http: string;
          /** Unix timestamp when the response was generated. */
          created_unix: number;
        };
      };
    };
    /** Convert a latitude and longitude pair into OpenCage reverse geocoding results. */
    "opencage.geocode_reverse": {
      input: {
        /**
         * Latitude and longitude formatted as latitude,longitude.
         * @minLength 1
         */
        q: string;
        /**
         * Preferred response language code.
         * @minLength 1
         */
        language?: string;
        /** Whether to include road information in the response. */
        roadinfo?: boolean;
        /** Whether to abbreviate road and route names. */
        abbrv?: boolean;
        /** Whether to include the original request in the response. */
        add_request?: boolean;
        /** Whether to omit annotations such as timezone or currency details. */
        no_annotations?: boolean;
        /** Whether to pretty-print the JSON response. */
        pretty?: boolean;
        /**
         * Minimum confidence score allowed for returned results, from 1 to 10.
         * @minimum 1
         * @maximum 10
         */
        min_confidence?: number;
        /** Whether to normalize city names in the response. */
        normalizecity?: boolean;
      };
      output: {
        /**
         * Documentation URL for the OpenCage API response.
         * @minLength 1
         */
        documentation: string;
        /** License entries attached to the response. */
        licenses: Array<{
          /**
           * License name for the returned data.
           * @minLength 1
           */
          name: string;
          /**
           * License URL for the returned data.
           * @minLength 1
           */
          url: string;
        }>;
        /** Rate limit information for the current API key. */
        rate?: {
          /** Maximum number of requests allowed in the current window. */
          limit: number;
          /** Remaining number of requests in the current window. */
          remaining: number;
          /** Unix timestamp when the rate window resets. */
          reset: number;
        };
        /** Geocoding results returned by OpenCage. */
        results: Array<{
          /**
           * Formatted address string returned for the matched result.
           * @minLength 1
           */
          formatted: string;
          /** Confidence score assigned by OpenCage for this result. */
          confidence: number;
          /** Coordinates for the matched result. */
          geometry: {
            /** Latitude in decimal degrees. */
            lat: number;
            /** Longitude in decimal degrees. */
            lng: number;
          };
          /** Structured address components keyed by upstream field name. */
          components?: Record<string, unknown>;
          /** Additional annotations returned by OpenCage. */
          annotations?: Record<string, unknown>;
          /** Bounding box metadata for the matched result. */
          bounds?: Record<string, unknown>;
          /** Distance metadata between the query point and the matched result. */
          distance_from_q?: Record<string, unknown>;
        }>;
        /** Status information returned by OpenCage. */
        status: {
          /** OpenCage status code for the request. */
          code: number;
          /**
           * Human-readable status message from OpenCage.
           * @minLength 1
           */
          message: string;
        };
        /**
         * Attribution or thank-you message returned by OpenCage.
         * @minLength 1
         */
        thanks: string;
        /** Creation time metadata for the response. */
        timestamp: {
          /**
           * HTTP date when the response was generated.
           * @minLength 1
           */
          created_http: string;
          /** Unix timestamp when the response was generated. */
          created_unix: number;
        };
        /** Total number of matching results. */
        total_results: number;
      };
    };
  }
}
