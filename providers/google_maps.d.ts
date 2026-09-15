import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Return Google Places autocomplete predictions for text input. */
    "google_maps.autocomplete_places": {
      input: {
        /**
         * The text for which to return place or query predictions.
         * @minLength 1
         */
        input: string;
        /**
         * A URL-safe token that groups one autocomplete session.
         * @minLength 1
         */
        sessionToken?: string;
        /**
         * The BCP 47 language code for localized results.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * The two-character CLDR region code used to format results.
         * @minLength 1
         */
        regionCode?: string;
        [key: string]: unknown;
      };
      output: {
        /** The autocomplete suggestions ordered by relevance. */
        suggestions?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Compute routes for every origin and destination combination with Google Routes. */
    "google_maps.compute_route_matrix": {
      input: {
        /**
         * The response field mask, which must include status.
         * @minLength 1
         */
        fieldMask: string;
        /**
         * The route matrix origins.
         * @minItems 1
         */
        origins: Array<Record<string, unknown>>;
        /**
         * The route matrix destinations.
         * @minItems 1
         */
        destinations: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
      output: Array<Record<string, unknown>>;
    };
    /** Compute one or more routes between an origin and destination with Google Routes. */
    "google_maps.compute_routes": {
      input: {
        /**
         * The response field mask sent as X-Goog-FieldMask.
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
        /** The routes returned by Google. */
        routes?: Array<Record<string, unknown>>;
        /** Fallback information returned by Google. */
        fallbackInfo?: Record<string, unknown>;
        /** Geocoding results returned by Google. */
        geocodingResults?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Convert an address into geographic coordinates with Google Geocoding. */
    "google_maps.geocode_address": {
      input: {
        /**
         * The human-readable street address to geocode.
         * @minLength 1
         */
        address: string;
        /**
         * The viewport bounds used to bias results.
         * @minLength 1
         */
        bounds?: string;
        /**
         * The pipe-separated component filters.
         * @minLength 1
         */
        components?: string;
        /**
         * The language code for results.
         * @minLength 1
         */
        language?: string;
        /**
         * The two-character region code used to bias results.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The geocoding results. */
        results?: Array<Record<string, unknown>>;
        /** The Google Geocoding response status. */
        status?: string;
        /** The upstream error message when present. */
        error_message?: string;
        [key: string]: unknown;
      };
    };
    /** Get details for a Google Place by place ID. */
    "google_maps.get_place": {
      input: {
        /**
         * The Google Place ID to retrieve.
         * @minLength 1
         */
        placeId: string;
        /**
         * The comma-separated response field mask; requested fields affect Google billing.
         * @minLength 1
         */
        fieldMask?: string;
        /**
         * The BCP 47 language code for localized results.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * The two-character CLDR region code used to format results.
         * @minLength 1
         */
        regionCode?: string;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Convert geographic coordinates into addresses with Google Geocoding. */
    "google_maps.reverse_geocode": {
      input: {
        /**
         * The latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /** The address result types to include. */
        resultTypes?: Array<string>;
        /** The location precision types to include. */
        locationTypes?: Array<string>;
        /**
         * The language code for results.
         * @minLength 1
         */
        language?: string;
        /**
         * The two-character region code used to bias results.
         * @minLength 1
         */
        region?: string;
      };
      output: {
        /** The reverse geocoding results. */
        results?: Array<Record<string, unknown>>;
        /** The Google Geocoding response status. */
        status?: string;
        /** The upstream error message when present. */
        error_message?: string;
        [key: string]: unknown;
      };
    };
    /** Search Google Places near a geographic point. */
    "google_maps.search_nearby_places": {
      input: {
        /**
         * The center latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The center longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * The search radius in meters, greater than 0 and at most 50000.
         * @maximum 50000
         * @exclusiveMinimum 0
         */
        radiusMeters: number;
        /**
         * The comma-separated response field mask; requested fields affect Google billing.
         * @minLength 1
         */
        fieldMask?: string;
        /**
         * The place types to include.
         * @maxItems 50
         */
        includedTypes?: Array<string>;
        /**
         * The place types to exclude.
         * @maxItems 50
         */
        excludedTypes?: Array<string>;
        /**
         * The BCP 47 language code for localized results.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * The two-character CLDR region code used to format results.
         * @minLength 1
         */
        regionCode?: string;
        [key: string]: unknown;
      };
      output: {
        /** The places returned by Google. */
        places?: Array<Record<string, unknown>>;
        /** Routing summaries returned when routing parameters are requested. */
        routingSummaries?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Search Google Places using a text query. */
    "google_maps.search_places": {
      input: {
        /**
         * The text query describing a place or category to find.
         * @minLength 1
         */
        textQuery: string;
        /**
         * The comma-separated response field mask; requested fields affect Google billing.
         * @minLength 1
         */
        fieldMask?: string;
        /**
         * The number of results to return, from 1 through 20.
         * @minimum 1
         * @maximum 20
         */
        pageSize?: number;
        /**
         * The token returned by a previous text search.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The BCP 47 language code for localized results.
         * @minLength 1
         */
        languageCode?: string;
        /**
         * The two-character CLDR region code used to format results.
         * @minLength 1
         */
        regionCode?: string;
        [key: string]: unknown;
      };
      output: {
        /** The places returned by Google. */
        places?: Array<Record<string, unknown>>;
        /** The token for retrieving the next page. */
        nextPageToken?: string;
        /** The Google Maps URL for the search. */
        searchUri?: string;
        [key: string]: unknown;
      };
    };
  }
}
