import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Reverse geocode multiple coordinate pairs in one batch request and return Geocodio batch results. */
    "geocodio.batch_reverse_geocode": {
      input: {
        /**
         * The coordinate strings to reverse geocode in one batch request.
         * @minItems 1
         * @maxItems 10000
         */
        coordinates: Array<string>;
        /**
         * A comma-separated list of Geocodio data append codes.
         * @minLength 1
         */
        fields?: string;
        /**
         * The maximum number of results per coordinate.
         * @minimum 0
         */
        limit?: number;
      };
      output: {
        /** The ordered batch response items. */
        results: Array<{
          /** The original query string from the batch request. */
          query: string;
          /** A JSON-like object with arbitrary string keys. */
          response: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Geocode multiple addresses in one batch request and return Geocodio batch results. */
    "geocodio.geocode_batch": {
      input: {
        /**
         * The address strings to geocode in one batch request.
         * @minItems 1
         * @maxItems 10000
         */
        addresses: Array<string>;
        /**
         * A comma-separated list of Geocodio data append codes.
         * @minLength 1
         */
        fields?: string;
        /**
         * The maximum number of results per address.
         * @minimum 0
         */
        limit?: number;
      };
      output: {
        /** The ordered batch response items. */
        results: Array<{
          /** The original query string from the batch request. */
          query: string;
          /** A JSON-like object with arbitrary string keys. */
          response: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Geocode a single address and return the official Geocodio response payload. */
    "geocodio.single_geocode": {
      input: {
        /**
         * The full address string to geocode.
         * @minLength 1
         */
        q?: string;
        /**
         * The street address component.
         * @minLength 1
         */
        street?: string;
        /**
         * The secondary street address component.
         * @minLength 1
         */
        street2?: string;
        /**
         * The city name used for the lookup.
         * @minLength 1
         */
        city?: string;
        /**
         * The state or province code used for the lookup.
         * @minLength 1
         */
        state?: string;
        /**
         * The postal or ZIP code used for the lookup.
         * @minLength 1
         */
        postal_code?: string;
        /**
         * The country context for the lookup.
         * @minLength 1
         */
        country?: string;
        /**
         * The county name used for the lookup.
         * @minLength 1
         */
        county?: string;
        /**
         * A comma-separated list of Geocodio data append codes.
         * @minLength 1
         */
        fields?: string;
        /**
         * The maximum number of results to return.
         * @minimum 0
         */
        limit?: number;
        /** Return Geocodio's simplified single-result response format. */
        format?: "simple";
      };
      output: {
        /** A JSON-like object with arbitrary string keys. */
        input?: Record<string, unknown>;
        /** The ordered geocoding match results. */
        results?: Array<{
          /** The full formatted address. */
          formatted_address?: string;
          /** Latitude and longitude returned by Geocodio. */
          location?: {
            /** The latitude coordinate. */
            lat: number;
            /** The longitude coordinate. */
            lng: number;
            [key: string]: unknown;
          };
          /** The match accuracy score from 0.0 to 1.0. */
          accuracy?: number;
          /** The Geocodio accuracy type for the match. */
          accuracy_type?: string;
          /** The source dataset for the match. */
          source?: string;
          /** A JSON-like object with arbitrary string keys. */
          address_components?: Record<string, unknown>;
          /** Formatted address lines. */
          address_lines?: Array<string>;
          /** A JSON-like object with arbitrary string keys. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The latitude returned by Geocodio simple format. */
        lat?: number;
        /** The longitude returned by Geocodio simple format. */
        lng?: number;
        /** The address returned by Geocodio simple format. */
        address?: string;
        /** The source returned by Geocodio simple format. */
        source?: string;
        [key: string]: unknown;
      };
    };
    /** Reverse geocode a single latitude and longitude pair and return the official Geocodio response payload. */
    "geocodio.single_reverse_geocode": {
      input: {
        /**
         * The latitude to reverse geocode.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude to reverse geocode.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
        /**
         * A comma-separated list of Geocodio data append codes.
         * @minLength 1
         */
        fields?: string;
        /**
         * The maximum number of results to return.
         * @minimum 0
         */
        limit?: number;
        /** Return Geocodio's simplified single-result response format. */
        format?: "simple";
      };
      output: {
        /** A JSON-like object with arbitrary string keys. */
        input?: Record<string, unknown>;
        /** The ordered geocoding match results. */
        results?: Array<{
          /** The full formatted address. */
          formatted_address?: string;
          /** Latitude and longitude returned by Geocodio. */
          location?: {
            /** The latitude coordinate. */
            lat: number;
            /** The longitude coordinate. */
            lng: number;
            [key: string]: unknown;
          };
          /** The match accuracy score from 0.0 to 1.0. */
          accuracy?: number;
          /** The Geocodio accuracy type for the match. */
          accuracy_type?: string;
          /** The source dataset for the match. */
          source?: string;
          /** A JSON-like object with arbitrary string keys. */
          address_components?: Record<string, unknown>;
          /** Formatted address lines. */
          address_lines?: Array<string>;
          /** A JSON-like object with arbitrary string keys. */
          fields?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The latitude returned by Geocodio simple format. */
        lat?: number;
        /** The longitude returned by Geocodio simple format. */
        lng?: number;
        /** The address returned by Geocodio simple format. */
        address?: string;
        /** The source returned by Geocodio simple format. */
        source?: string;
        [key: string]: unknown;
      };
    };
  }
}
