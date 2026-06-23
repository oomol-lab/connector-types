import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Return ranked three word address suggestions for partial or mistyped input. */
    "what3words.autosuggest": {
      input: {
        /**
         * The partial or mistyped three word address.
         * @minLength 1
         */
        input: string;
        /**
         * The maximum number of suggestions to return.
         * @minimum 1
         */
        nResults?: number;
        /**
         * The latitude used to bias suggestions.
         * @minimum -90
         * @maximum 90
         */
        focusLat?: number;
        /**
         * The longitude used to bias suggestions.
         * @minimum -180
         * @maximum 180
         */
        focusLng?: number;
        /**
         * The number of results to prioritize around the focus point.
         * @minimum 1
         */
        nFocusResults?: number;
        /**
         * A comma-separated list of ISO 3166-1 alpha-2 country codes used to restrict suggestions.
         * @minLength 1
         */
        clipToCountry?: string;
        /**
         * A circle restriction formatted as latitude,longitude,kilometers.
         * @minLength 1
         */
        clipToCircle?: string;
        /**
         * A bounding box restriction formatted as southwest-lat,southwest-lng,northeast-lat,northeast-lng.
         * @minLength 1
         */
        clipToBoundingBox?: string;
        /**
         * A polygon restriction formatted as comma-separated latitude,longitude coordinate pairs.
         * @minLength 1
         */
        clipToPolygon?: string;
        /** The autosuggest input type. */
        inputType?: "text" | "vocon-hybrid";
        /**
         * The language code for autosuggest matching.
         * @minLength 1
         */
        language?: string;
        /** Whether suggestions should prefer land locations. */
        preferLand?: boolean;
        /**
         * A supported language code used to localize place names.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /** The ranked autosuggest results. */
        suggestions: Array<{
          /** The ISO 3166-1 alpha-2 country code for the suggested address. */
          country: string;
          /** The nearest named place for the suggested address. */
          nearestPlace: string;
          /** The suggested three word address. */
          words: string;
          /** The distance in kilometers from the focus point when available. */
          distanceToFocusKm: number;
          /** The suggestion rank returned by what3words. */
          rank: number;
          /** The language code for the suggested words. */
          language: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the languages supported by the what3words API. */
    "what3words.available_languages": {
      input: Record<string, never>;
      output: {
        /** The supported what3words languages. */
        languages: Array<{
          /** The language code. */
          code: string;
          /** The localized language name. */
          name: string;
          /** The native language name. */
          nativeName: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Convert coordinates into a three word address. */
    "what3words.convert_to_3wa": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lng: number;
        /**
         * The language code for the returned three word address.
         * @minLength 1
         */
        language?: string;
        /** The response format requested from what3words. */
        format?: "json" | "geojson";
      };
      output: {
        /** The ISO 3166-1 alpha-2 country code for the address. */
        country: string;
        /** A what3words square geometry. */
        square: {
          /** A latitude and longitude coordinate pair. */
          southwest: {
            /**
             * The latitude in decimal degrees.
             * @minimum -90
             * @maximum 90
             */
            lat: number;
            /**
             * The longitude in decimal degrees.
             * @minimum -180
             * @maximum 180
             */
            lng: number;
          };
          /** A latitude and longitude coordinate pair. */
          northeast: {
            /**
             * The latitude in decimal degrees.
             * @minimum -90
             * @maximum 90
             */
            lat: number;
            /**
             * The longitude in decimal degrees.
             * @minimum -180
             * @maximum 180
             */
            lng: number;
          };
        };
        /** The nearest named place for the what3words address. */
        nearestPlace: string;
        /** A latitude and longitude coordinate pair. */
        coordinates: {
          /**
           * The latitude in decimal degrees.
           * @minimum -90
           * @maximum 90
           */
          lat: number;
          /**
           * The longitude in decimal degrees.
           * @minimum -180
           * @maximum 180
           */
          lng: number;
        };
        /** The three word address. */
        words: string;
        /** The language code for the words. */
        language: string;
        /** A what3words map URL for the address. */
        map: string;
        [key: string]: unknown;
      };
    };
    /** Convert a three word address into coordinates and square metadata. */
    "what3words.convert_to_coordinates": {
      input: {
        /**
         * The three word address to convert, such as filled.count.soap.
         * @minLength 1
         */
        words: string;
        /** The response format requested from what3words. */
        format?: "json" | "geojson";
        /**
         * A supported language code used to localize the response.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /** The ISO 3166-1 alpha-2 country code for the address. */
        country: string;
        /** A what3words square geometry. */
        square: {
          /** A latitude and longitude coordinate pair. */
          southwest: {
            /**
             * The latitude in decimal degrees.
             * @minimum -90
             * @maximum 90
             */
            lat: number;
            /**
             * The longitude in decimal degrees.
             * @minimum -180
             * @maximum 180
             */
            lng: number;
          };
          /** A latitude and longitude coordinate pair. */
          northeast: {
            /**
             * The latitude in decimal degrees.
             * @minimum -90
             * @maximum 90
             */
            lat: number;
            /**
             * The longitude in decimal degrees.
             * @minimum -180
             * @maximum 180
             */
            lng: number;
          };
        };
        /** The nearest named place for the what3words address. */
        nearestPlace: string;
        /** A latitude and longitude coordinate pair. */
        coordinates: {
          /**
           * The latitude in decimal degrees.
           * @minimum -90
           * @maximum 90
           */
          lat: number;
          /**
           * The longitude in decimal degrees.
           * @minimum -180
           * @maximum 180
           */
          lng: number;
        };
        /** The three word address. */
        words: string;
        /** The language code for the words. */
        language: string;
        /** A what3words map URL for the address. */
        map: string;
        [key: string]: unknown;
      };
    };
    /** Return what3words grid line segments for a bounding box. */
    "what3words.grid_section": {
      input: {
        /**
         * The southwest latitude of the bounding box.
         * @minimum -90
         * @maximum 90
         */
        southwestLat: number;
        /**
         * The southwest longitude of the bounding box.
         * @minimum -180
         * @maximum 180
         */
        southwestLng: number;
        /**
         * The northeast latitude of the bounding box.
         * @minimum -90
         * @maximum 90
         */
        northeastLat: number;
        /**
         * The northeast longitude of the bounding box.
         * @minimum -180
         * @maximum 180
         */
        northeastLng: number;
        /** The response format requested from what3words. */
        format?: "json" | "geojson";
      };
      output: {
        /** The grid lines covering the requested bounding box. */
        lines: Array<{
          /** A latitude and longitude coordinate pair. */
          start: {
            /**
             * The latitude in decimal degrees.
             * @minimum -90
             * @maximum 90
             */
            lat: number;
            /**
             * The longitude in decimal degrees.
             * @minimum -180
             * @maximum 180
             */
            lng: number;
          };
          /** A latitude and longitude coordinate pair. */
          end: {
            /**
             * The latitude in decimal degrees.
             * @minimum -90
             * @maximum 90
             */
            lat: number;
            /**
             * The longitude in decimal degrees.
             * @minimum -180
             * @maximum 180
             */
            lng: number;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
