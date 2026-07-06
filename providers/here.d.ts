import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get HERE address and administrative-area completions for entered text. */
    "here.autocomplete": {
      input: {
        /**
         * The partial address or administrative-area text to complete.
         * @minLength 1
         */
        q: string;
        /**
         * The optional HERE location context formatted as latitude,longitude.
         * @minLength 1
         */
        at?: string;
        /**
         * The optional HERE spatial or country filter, such as countryCode:USA.
         * @minLength 1
         */
        in?: string;
        /**
         * The optional BCP 47 language tag for the response.
         * @minLength 1
         */
        lang?: string;
        /**
         * The maximum number of autocomplete result items to return.
         * @minimum 1
         * @maximum 20
         */
        limit?: number;
        /**
         * The optional political view country code used by HERE.
         * @minLength 1
         */
        politicalView?: string;
      };
      output: {
        /** The ordered HERE result items. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Get HERE query and entity suggestions for incomplete or misspelled address and place text with required spatial context. */
    "here.autosuggest": {
      input: {
        /**
         * The partial HERE Autosuggest query.
         * @minLength 1
         */
        q: string;
        /**
         * The optional HERE location context formatted as latitude,longitude.
         * @minLength 1
         */
        at?: string;
        /**
         * The optional HERE filter. Use circle:... or bbox:... as spatial context, or countryCode:... together with at.
         * @minLength 1
         */
        in?: string;
        /**
         * The optional BCP 47 language tag for the response.
         * @minLength 1
         */
        lang?: string;
        /**
         * The maximum number of result items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The optional political view country code used by HERE.
         * @minLength 1
         */
        politicalView?: string;
      };
      output: {
        /** The ordered HERE Autosuggest items. */
        items: Array<Record<string, unknown>>;
        /** The optional HERE completed query terms returned when term completion is requested. */
        queryTerms?: Array<Record<string, unknown>>;
      };
    };
    /** Search HERE places or addresses with a free-form Discover query and required spatial context. */
    "here.discover": {
      input: {
        /**
         * The free-form HERE Discover query.
         * @minLength 1
         */
        q: string;
        /**
         * The optional HERE location context formatted as latitude,longitude.
         * @minLength 1
         */
        at?: string;
        /**
         * The optional HERE filter. Use circle:... or bbox:... as spatial context, or countryCode:... together with at.
         * @minLength 1
         */
        in?: string;
        /**
         * The optional BCP 47 language tag for the response.
         * @minLength 1
         */
        lang?: string;
        /**
         * The maximum number of result items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The optional comma-separated HERE result type filter.
         * @minLength 1
         */
        types?: string;
        /**
         * The optional political view country code used by HERE.
         * @minLength 1
         */
        politicalView?: string;
        /**
         * The optional comma-separated HERE response enrichment selector.
         * @minLength 1
         */
        show?: string;
      };
      output: {
        /** The ordered HERE result items. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Geocode a free-form address, place, locality, or administrative-area query with HERE Geocoding and Search API v7. */
    "here.geocode": {
      input: {
        /**
         * The free-form HERE geocode query.
         * @minLength 1
         */
        q: string;
        /**
         * The optional BCP 47 language tag for the response.
         * @minLength 1
         */
        lang?: string;
        /**
         * The maximum number of result items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The optional HERE spatial or country filter, such as countryCode:USA.
         * @minLength 1
         */
        in?: string;
        /**
         * The optional HERE location context formatted as latitude,longitude.
         * @minLength 1
         */
        at?: string;
        /**
         * The optional comma-separated HERE result type filter.
         * @minLength 1
         */
        types?: string;
        /**
         * The optional political view country code used by HERE.
         * @minLength 1
         */
        politicalView?: string;
        /**
         * The optional comma-separated HERE response enrichment selector.
         * @minLength 1
         */
        show?: string;
      };
      output: {
        /** The ordered HERE result items. */
        items: Array<Record<string, unknown>>;
      };
    };
    /** Look up a HERE place or location object by an identifier returned from another HERE search result. */
    "here.lookup": {
      input: {
        /**
         * The HERE result identifier returned by geocode, reverse geocode, discover, or autocomplete.
         * @minLength 1
         */
        id: string;
        /**
         * The optional BCP 47 language tag for the response.
         * @minLength 1
         */
        lang?: string;
        /**
         * The optional comma-separated HERE response enrichment selector.
         * @minLength 1
         */
        show?: string;
      };
      output: {
        /** The representative title for the HERE object. */
        title: string;
        /** The HERE identifier for the returned object. */
        id: string;
        /** The detailed HERE address object. */
        address: Record<string, unknown>;
        /** The HERE result type for the returned object, when present. */
        resultType?: string;
        /** The HERE WGS84 position object, when present. */
        position?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Find the nearest HERE address or place result for a latitude,longitude location. */
    "here.reverse_geocode": {
      input: {
        /**
         * The HERE location to reverse geocode, formatted as latitude,longitude.
         * @minLength 1
         */
        at: string;
        /**
         * The optional BCP 47 language tag for the response.
         * @minLength 1
         */
        lang?: string;
        /**
         * The maximum number of result items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The optional comma-separated HERE result type filter.
         * @minLength 1
         */
        types?: string;
        /**
         * The optional political view country code used by HERE.
         * @minLength 1
         */
        politicalView?: string;
        /**
         * The optional comma-separated HERE response enrichment selector.
         * @minLength 1
         */
        show?: string;
      };
      output: {
        /** The ordered HERE result items. */
        items: Array<Record<string, unknown>>;
      };
    };
  }
}
