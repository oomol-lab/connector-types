import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Return autocomplete suggestions from the TomTom Search API. */
    "tomtom.autocomplete": {
      input: {
        /**
         * The partial text query used for autocomplete suggestions.
         * @minLength 1
         */
        query: string;
        /**
         * The IETF language tag for results.
         * @minLength 1
         */
        language: string;
        /**
         * The maximum number of autocomplete results to return.
         * @minimum 1
         * @maximum 10
         */
        limit?: number;
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat?: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon?: number;
        /**
         * The search radius in meters.
         * @exclusiveMinimum 0
         */
        radius?: number;
        /**
         * The country filters applied to the TomTom request.
         * @minItems 1
         */
        countrySet?: Array<string>;
        /**
         * The autocomplete segment types included in the response.
         * @minItems 1
         */
        resultSet?: Array<string>;
      };
      output: {
        /** The autocomplete context metadata returned by TomTom. */
        context?: {
          /** The original autocomplete query text. */
          inputQuery?: string;
          [key: string]: unknown;
        };
        /** The TomTom search results returned by the endpoint. */
        results?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search addresses or places with the TomTom Search API fuzzy search endpoint. */
    "tomtom.fuzzy_search": {
      input: {
        /**
         * The free-form text query sent to TomTom.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The country filters applied to the TomTom request.
         * @minItems 1
         */
        countrySet?: Array<string>;
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat?: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon?: number;
        /**
         * The search radius in meters.
         * @exclusiveMinimum 0
         */
        radius?: number;
        /**
         * The IETF language tag for results.
         * @minLength 1
         */
        language?: string;
        /**
         * The POI category filters applied to the request.
         * @minItems 1
         */
        categorySet?: Array<number>;
        /**
         * The brand filters applied to the request.
         * @minItems 1
         */
        brandSet?: Array<string>;
        /**
         * The entity type filters applied to the request.
         * @minItems 1
         */
        entityTypeSet?: Array<string>;
        /**
         * The geopolitical view applied to results.
         * @minLength 1
         */
        view?: string;
      };
      output: {
        /** The summary metadata returned by TomTom search endpoints. */
        summary?: {
          /** The original query echoed by TomTom when available. */
          query?: string;
          /** The time spent processing the query in milliseconds. */
          queryTime?: number;
          /** The number of results returned in this page. */
          numResults?: number;
          /** The zero-based offset of the current page. */
          offset?: number;
          /** The total number of matching results. */
          totalResults?: number;
          /** The fuzzy matching level used by TomTom. */
          fuzzyLevel?: number;
          [key: string]: unknown;
        };
        /** The TomTom search results returned by the endpoint. */
        results?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Convert an address into geographic search results with the TomTom Geocoding API. */
    "tomtom.geocode": {
      input: {
        /**
         * The address or place query to geocode.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        lat?: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        lon?: number;
        /**
         * The search radius in meters.
         * @exclusiveMinimum 0
         */
        radius?: number;
        /**
         * The country filters applied to the TomTom request.
         * @minItems 1
         */
        countrySet?: Array<string>;
        /**
         * The IETF language tag for results.
         * @minLength 1
         */
        language?: string;
        /**
         * The geopolitical view applied to results.
         * @minLength 1
         */
        view?: string;
        /**
         * The entity type filters applied to the request.
         * @minItems 1
         */
        entityTypeSet?: Array<string>;
      };
      output: {
        /** The summary metadata returned by TomTom search endpoints. */
        summary?: {
          /** The original query echoed by TomTom when available. */
          query?: string;
          /** The time spent processing the query in milliseconds. */
          queryTime?: number;
          /** The number of results returned in this page. */
          numResults?: number;
          /** The zero-based offset of the current page. */
          offset?: number;
          /** The total number of matching results. */
          totalResults?: number;
          /** The fuzzy matching level used by TomTom. */
          fuzzyLevel?: number;
          [key: string]: unknown;
        };
        /** The TomTom search results returned by the endpoint. */
        results?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search for nearby places of interest around a coordinate with TomTom. */
    "tomtom.nearby_search": {
      input: {
        /**
         * The latitude used as the nearby search center.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude used as the nearby search center.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
        /**
         * The search radius in meters.
         * @exclusiveMinimum 0
         */
        radius?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The zero-based result offset used for pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The country filters applied to the TomTom request.
         * @minItems 1
         */
        countrySet?: Array<string>;
        /**
         * The IETF language tag for results.
         * @minLength 1
         */
        language?: string;
        /**
         * The POI category filters applied to the request.
         * @minItems 1
         */
        categorySet?: Array<number>;
        /**
         * The brand filters applied to the request.
         * @minItems 1
         */
        brandSet?: Array<string>;
        /**
         * The geopolitical view applied to results.
         * @minLength 1
         */
        view?: string;
      };
      output: {
        /** The summary metadata returned by TomTom search endpoints. */
        summary?: {
          /** The original query echoed by TomTom when available. */
          query?: string;
          /** The time spent processing the query in milliseconds. */
          queryTime?: number;
          /** The number of results returned in this page. */
          numResults?: number;
          /** The zero-based offset of the current page. */
          offset?: number;
          /** The total number of matching results. */
          totalResults?: number;
          /** The fuzzy matching level used by TomTom. */
          fuzzyLevel?: number;
          [key: string]: unknown;
        };
        /** The TomTom search results returned by the endpoint. */
        results?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Convert a coordinate into human-readable address candidates with the TomTom Reverse Geocoding API. */
    "tomtom.reverse_geocode": {
      input: {
        /**
         * The latitude of the coordinate to reverse geocode.
         * @minimum -90
         * @maximum 90
         */
        lat: number;
        /**
         * The longitude of the coordinate to reverse geocode.
         * @minimum -180
         * @maximum 180
         */
        lon: number;
        /**
         * The search radius in meters.
         * @exclusiveMinimum 0
         */
        radius?: number;
        /**
         * The TomTom entity type used to shape reverse geocoding results.
         * @minLength 1
         */
        entityType?: string;
        /**
         * The IETF language tag for results.
         * @minLength 1
         */
        language?: string;
        /** Whether TomTom should include the match type metadata. */
        returnMatchType?: boolean;
        /**
         * The geopolitical view applied to results.
         * @minLength 1
         */
        view?: string;
      };
      output: {
        /** The summary metadata returned by TomTom search endpoints. */
        summary?: {
          /** The original query echoed by TomTom when available. */
          query?: string;
          /** The time spent processing the query in milliseconds. */
          queryTime?: number;
          /** The number of results returned in this page. */
          numResults?: number;
          /** The zero-based offset of the current page. */
          offset?: number;
          /** The total number of matching results. */
          totalResults?: number;
          /** The fuzzy matching level used by TomTom. */
          fuzzyLevel?: number;
          [key: string]: unknown;
        };
        /** The reverse geocoding address results returned by TomTom. */
        addresses?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
  }
}
