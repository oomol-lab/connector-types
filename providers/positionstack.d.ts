import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert an address or place query into Positionstack geocoding results. */
    "positionstack.forward_geocode": {
      input: {
        /**
         * The address, place, latitude/longitude pair, or IP address to geocode.
         * @minLength 1
         */
        query: string;
        /**
         * Comma-separated 2- or 3-letter country codes used to restrict results.
         * @minLength 1
         */
        country?: string;
        /**
         * Region filter such as a state, county, or city name.
         * @minLength 1
         */
        region?: string;
        /**
         * Preferred response language code, such as en or de.
         * @minLength 1
         */
        language?: string;
        /**
         * Maximum number of results to return, from 1 to 80.
         * @minimum 1
         * @maximum 80
         */
        limit?: number;
        /**
         * Optional response field paths to include, such as results.latitude or results.longitude.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether to include extended country metadata in each result. */
        country_module?: boolean;
        /** Whether to include sunrise, sunset, and solar metadata in each result. */
        sun_module?: boolean;
        /** Whether to include timezone metadata in each result. */
        timezone_module?: boolean;
        /** Whether to include bounding box coordinates in each result. */
        bbox_module?: boolean;
      };
      output: {
        /** Positionstack geocoding data wrapper. */
        data: {
          /** Echoed request parameters returned by Positionstack. */
          request?: {
            /** The original query string. */
            query?: string;
            /** The requested result limit. */
            limit?: number;
            [key: string]: unknown;
          };
          /** The ordered geocoding results returned by Positionstack. */
          results: Array<{
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            /** Formatted address or place label. */
            label?: string;
            /** Name portion of the result. */
            name?: string;
            /** Result classification, such as address, venue, street, region, or country. */
            type?: string;
            /** House or street number when available. */
            number?: string | null;
            /** Street name when available. */
            street?: string | null;
            /** Postal or ZIP code when available. */
            postal_code?: string | null;
            /** Confidence score from 0 to 1. */
            confidence?: number;
            /** Region, state, or province name. */
            region?: string | null;
            /** Short region code when available. */
            region_code?: string | null;
            /** Administrative area such as county or district. */
            administrative_area?: string | null;
            /** Neighbourhood name when available. */
            neighbourhood?: string | null;
            /** Country name. */
            country?: string | null;
            /** ISO 3166 alpha-2 country code. */
            country_code?: string | null;
            /**
             * Embeddable Positionstack map URL for this location.
             * @format uri
             */
            map_url?: string | null;
            /** Distance in meters from the requested coordinate. */
            distance?: number | null;
            /** A JSON object returned by Positionstack with provider-defined fields. */
            bbox_module?: Record<string, unknown>;
            /** A JSON object returned by Positionstack with provider-defined fields. */
            country_module?: Record<string, unknown>;
            /** A JSON object returned by Positionstack with provider-defined fields. */
            timezone_module?: Record<string, unknown>;
            /** A JSON object returned by Positionstack with provider-defined fields. */
            sun_module?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Convert coordinates or an IP address into Positionstack reverse geocoding results. */
    "positionstack.reverse_geocode": {
      input: {
        /**
         * Latitude and longitude formatted as latitude,longitude, or an IP address to reverse geocode.
         * @minLength 1
         */
        query: string;
        /**
         * Comma-separated 2- or 3-letter country codes used to restrict results.
         * @minLength 1
         */
        country?: string;
        /**
         * Region filter such as a state, county, or city name.
         * @minLength 1
         */
        region?: string;
        /**
         * Preferred response language code, such as en or de.
         * @minLength 1
         */
        language?: string;
        /**
         * Maximum number of results to return, from 1 to 80.
         * @minimum 1
         * @maximum 80
         */
        limit?: number;
        /**
         * Optional response field paths to include, such as results.latitude or results.longitude.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether to include extended country metadata in each result. */
        country_module?: boolean;
        /** Whether to include sunrise, sunset, and solar metadata in each result. */
        sun_module?: boolean;
        /** Whether to include timezone metadata in each result. */
        timezone_module?: boolean;
        /** Whether to include bounding box coordinates in each result. */
        bbox_module?: boolean;
      };
      output: {
        /** Positionstack geocoding data wrapper. */
        data: {
          /** Echoed request parameters returned by Positionstack. */
          request?: {
            /** The original query string. */
            query?: string;
            /** The requested result limit. */
            limit?: number;
            [key: string]: unknown;
          };
          /** The ordered geocoding results returned by Positionstack. */
          results: Array<{
            /** Latitude in decimal degrees. */
            latitude?: number;
            /** Longitude in decimal degrees. */
            longitude?: number;
            /** Formatted address or place label. */
            label?: string;
            /** Name portion of the result. */
            name?: string;
            /** Result classification, such as address, venue, street, region, or country. */
            type?: string;
            /** House or street number when available. */
            number?: string | null;
            /** Street name when available. */
            street?: string | null;
            /** Postal or ZIP code when available. */
            postal_code?: string | null;
            /** Confidence score from 0 to 1. */
            confidence?: number;
            /** Region, state, or province name. */
            region?: string | null;
            /** Short region code when available. */
            region_code?: string | null;
            /** Administrative area such as county or district. */
            administrative_area?: string | null;
            /** Neighbourhood name when available. */
            neighbourhood?: string | null;
            /** Country name. */
            country?: string | null;
            /** ISO 3166 alpha-2 country code. */
            country_code?: string | null;
            /**
             * Embeddable Positionstack map URL for this location.
             * @format uri
             */
            map_url?: string | null;
            /** Distance in meters from the requested coordinate. */
            distance?: number | null;
            /** A JSON object returned by Positionstack with provider-defined fields. */
            bbox_module?: Record<string, unknown>;
            /** A JSON object returned by Positionstack with provider-defined fields. */
            country_module?: Record<string, unknown>;
            /** A JSON object returned by Positionstack with provider-defined fields. */
            timezone_module?: Record<string, unknown>;
            /** A JSON object returned by Positionstack with provider-defined fields. */
            sun_module?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
