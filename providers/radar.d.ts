import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Autocomplete a partial address or place name with Radar. */
    "radar.autocomplete": {
      input: {
        /**
         * The partial address or place name to autocomplete.
         * @minLength 1
         */
        query: string;
        /**
         * Optional latitude used with longitude to prefer nearby autocomplete results.
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Optional longitude used with latitude to prefer nearby autocomplete results.
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /**
         * Radar result layer filters sent to Radar as a comma-separated list.
         * @minItems 1
         * @maxItems 9
         */
        layers?: Array<"place" | "address" | "postalCode" | "locality" | "county" | "state" | "country" | "coarse" | "fine">;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Country filters sent to Radar as a comma-separated list of two-letter country codes.
         * @minItems 1
         */
        countryCode?: Array<string>;
      };
      output: {
        /** Radar response metadata. */
        meta: {
          /** The HTTP-like status code reported by Radar. */
          code?: number;
          /** The parameter name associated with a Radar error when present. */
          param?: string;
          /** The Radar status or error message when present. */
          message?: string;
          [key: string]: unknown;
        };
        /** The address results returned by Radar. */
        addresses: Array<{
          /** The result latitude coordinate. */
          latitude?: number;
          /** The result longitude coordinate. */
          longitude?: number;
          /** A GeoJSON-like geometry object returned by Radar. */
          geometry?: {
            /** The geometry type returned by Radar. */
            type?: string;
            /**
             * The longitude and latitude coordinate pair returned by Radar.
             * @minItems 2
             */
            coordinates?: Array<number>;
            [key: string]: unknown;
          };
          /** The country name returned by Radar. */
          country?: string;
          /** The two-letter country code returned by Radar. */
          countryCode?: string;
          /** The country flag emoji returned by Radar. */
          countryFlag?: string;
          /** The county name returned by Radar. */
          county?: string;
          /** The Radar confidence value for a geocode result. */
          confidence?: string;
          /** The distance from the requested location in meters when returned. */
          distance?: number;
          /** The borough name returned by Radar. */
          borough?: string;
          /** The city name returned by Radar. */
          city?: string;
          /** The building number returned by Radar. */
          number?: string;
          /** The neighborhood name returned by Radar. */
          neighborhood?: string;
          /** The postal code returned by Radar. */
          postalCode?: string;
          /** The state or region code returned by Radar. */
          stateCode?: string;
          /** The state or region name returned by Radar. */
          state?: string;
          /** The street name returned by Radar. */
          street?: string;
          /** The Radar result layer. */
          layer?: string;
          /** The formatted address returned by Radar. */
          formattedAddress?: string;
          /** The short address label returned by Radar. */
          addressLabel?: string;
          /** The place label returned by Radar. */
          placeLabel?: string;
          /** A Radar timezone object. */
          timeZone?: {
            /** The IANA timezone identifier. */
            id?: string;
            /** The human-readable timezone name. */
            name?: string;
            /** The timezone abbreviation. */
            code?: string;
            /** The current local time returned by Radar. */
            currentTime?: string;
            /** The timezone UTC offset in seconds. */
            utcOffset?: number;
            /** The daylight saving offset in seconds. */
            dstOffset?: number;
            [key: string]: unknown;
          };
          /** The raw object returned by Radar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Convert a complete address into coordinates with Radar. */
    "radar.forward_geocode": {
      input: {
        /**
         * The complete address to geocode.
         * @minLength 1
         */
        query: string;
        /**
         * Radar result layer filters sent to Radar as a comma-separated list.
         * @minItems 1
         * @maxItems 9
         */
        layers?: Array<"place" | "address" | "postalCode" | "locality" | "county" | "state" | "country" | "coarse" | "fine">;
        /**
         * Country filters sent to Radar as a comma-separated list of two-letter country codes.
         * @minItems 1
         */
        country?: Array<string>;
        /** The language code used to localize Radar results. */
        lang?: "ar" | "de" | "en" | "es" | "fr" | "ja" | "ko" | "pt" | "ru" | "zh";
      };
      output: {
        /** Radar response metadata. */
        meta: {
          /** The HTTP-like status code reported by Radar. */
          code?: number;
          /** The parameter name associated with a Radar error when present. */
          param?: string;
          /** The Radar status or error message when present. */
          message?: string;
          [key: string]: unknown;
        };
        /** The address results returned by Radar. */
        addresses: Array<{
          /** The result latitude coordinate. */
          latitude?: number;
          /** The result longitude coordinate. */
          longitude?: number;
          /** A GeoJSON-like geometry object returned by Radar. */
          geometry?: {
            /** The geometry type returned by Radar. */
            type?: string;
            /**
             * The longitude and latitude coordinate pair returned by Radar.
             * @minItems 2
             */
            coordinates?: Array<number>;
            [key: string]: unknown;
          };
          /** The country name returned by Radar. */
          country?: string;
          /** The two-letter country code returned by Radar. */
          countryCode?: string;
          /** The country flag emoji returned by Radar. */
          countryFlag?: string;
          /** The county name returned by Radar. */
          county?: string;
          /** The Radar confidence value for a geocode result. */
          confidence?: string;
          /** The distance from the requested location in meters when returned. */
          distance?: number;
          /** The borough name returned by Radar. */
          borough?: string;
          /** The city name returned by Radar. */
          city?: string;
          /** The building number returned by Radar. */
          number?: string;
          /** The neighborhood name returned by Radar. */
          neighborhood?: string;
          /** The postal code returned by Radar. */
          postalCode?: string;
          /** The state or region code returned by Radar. */
          stateCode?: string;
          /** The state or region name returned by Radar. */
          state?: string;
          /** The street name returned by Radar. */
          street?: string;
          /** The Radar result layer. */
          layer?: string;
          /** The formatted address returned by Radar. */
          formattedAddress?: string;
          /** The short address label returned by Radar. */
          addressLabel?: string;
          /** The place label returned by Radar. */
          placeLabel?: string;
          /** A Radar timezone object. */
          timeZone?: {
            /** The IANA timezone identifier. */
            id?: string;
            /** The human-readable timezone name. */
            name?: string;
            /** The timezone abbreviation. */
            code?: string;
            /** The current local time returned by Radar. */
            currentTime?: string;
            /** The timezone UTC offset in seconds. */
            utcOffset?: number;
            /** The daylight saving offset in seconds. */
            dstOffset?: number;
            [key: string]: unknown;
          };
          /** The raw object returned by Radar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Geocode the connector request IP with Radar. */
    "radar.ip_geocode": {
      input: Record<string, never>;
      output: {
        /** Radar response metadata. */
        meta: {
          /** The HTTP-like status code reported by Radar. */
          code?: number;
          /** The parameter name associated with a Radar error when present. */
          param?: string;
          /** The Radar status or error message when present. */
          message?: string;
          [key: string]: unknown;
        };
        /** A normalized Radar address result with the raw upstream object preserved. */
        address: {
          /** The result latitude coordinate. */
          latitude?: number;
          /** The result longitude coordinate. */
          longitude?: number;
          /** A GeoJSON-like geometry object returned by Radar. */
          geometry?: {
            /** The geometry type returned by Radar. */
            type?: string;
            /**
             * The longitude and latitude coordinate pair returned by Radar.
             * @minItems 2
             */
            coordinates?: Array<number>;
            [key: string]: unknown;
          };
          /** The country name returned by Radar. */
          country?: string;
          /** The two-letter country code returned by Radar. */
          countryCode?: string;
          /** The country flag emoji returned by Radar. */
          countryFlag?: string;
          /** The county name returned by Radar. */
          county?: string;
          /** The Radar confidence value for a geocode result. */
          confidence?: string;
          /** The distance from the requested location in meters when returned. */
          distance?: number;
          /** The borough name returned by Radar. */
          borough?: string;
          /** The city name returned by Radar. */
          city?: string;
          /** The building number returned by Radar. */
          number?: string;
          /** The neighborhood name returned by Radar. */
          neighborhood?: string;
          /** The postal code returned by Radar. */
          postalCode?: string;
          /** The state or region code returned by Radar. */
          stateCode?: string;
          /** The state or region name returned by Radar. */
          state?: string;
          /** The street name returned by Radar. */
          street?: string;
          /** The Radar result layer. */
          layer?: string;
          /** The formatted address returned by Radar. */
          formattedAddress?: string;
          /** The short address label returned by Radar. */
          addressLabel?: string;
          /** The place label returned by Radar. */
          placeLabel?: string;
          /** A Radar timezone object. */
          timeZone?: {
            /** The IANA timezone identifier. */
            id?: string;
            /** The human-readable timezone name. */
            name?: string;
            /** The timezone abbreviation. */
            code?: string;
            /** The current local time returned by Radar. */
            currentTime?: string;
            /** The timezone UTC offset in seconds. */
            utcOffset?: number;
            /** The daylight saving offset in seconds. */
            dstOffset?: number;
            [key: string]: unknown;
          };
          /** The raw object returned by Radar. */
          raw: Record<string, unknown>;
        };
        /** Whether Radar detected a proxy IP. */
        proxy?: boolean;
        /** The IP address geocoded by Radar. */
        ip?: string;
      };
    };
    /** Convert coordinates into nearby addresses with Radar. */
    "radar.reverse_geocode": {
      input: {
        /**
         * The latitude coordinate in WGS84 decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The longitude coordinate in WGS84 decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * Radar result layer filters sent to Radar as a comma-separated list.
         * @minItems 1
         * @maxItems 9
         */
        layers?: Array<"place" | "address" | "postalCode" | "locality" | "county" | "state" | "country" | "coarse" | "fine">;
      };
      output: {
        /** Radar response metadata. */
        meta: {
          /** The HTTP-like status code reported by Radar. */
          code?: number;
          /** The parameter name associated with a Radar error when present. */
          param?: string;
          /** The Radar status or error message when present. */
          message?: string;
          [key: string]: unknown;
        };
        /** The address results returned by Radar. */
        addresses: Array<{
          /** The result latitude coordinate. */
          latitude?: number;
          /** The result longitude coordinate. */
          longitude?: number;
          /** A GeoJSON-like geometry object returned by Radar. */
          geometry?: {
            /** The geometry type returned by Radar. */
            type?: string;
            /**
             * The longitude and latitude coordinate pair returned by Radar.
             * @minItems 2
             */
            coordinates?: Array<number>;
            [key: string]: unknown;
          };
          /** The country name returned by Radar. */
          country?: string;
          /** The two-letter country code returned by Radar. */
          countryCode?: string;
          /** The country flag emoji returned by Radar. */
          countryFlag?: string;
          /** The county name returned by Radar. */
          county?: string;
          /** The Radar confidence value for a geocode result. */
          confidence?: string;
          /** The distance from the requested location in meters when returned. */
          distance?: number;
          /** The borough name returned by Radar. */
          borough?: string;
          /** The city name returned by Radar. */
          city?: string;
          /** The building number returned by Radar. */
          number?: string;
          /** The neighborhood name returned by Radar. */
          neighborhood?: string;
          /** The postal code returned by Radar. */
          postalCode?: string;
          /** The state or region code returned by Radar. */
          stateCode?: string;
          /** The state or region name returned by Radar. */
          state?: string;
          /** The street name returned by Radar. */
          street?: string;
          /** The Radar result layer. */
          layer?: string;
          /** The formatted address returned by Radar. */
          formattedAddress?: string;
          /** The short address label returned by Radar. */
          addressLabel?: string;
          /** The place label returned by Radar. */
          placeLabel?: string;
          /** A Radar timezone object. */
          timeZone?: {
            /** The IANA timezone identifier. */
            id?: string;
            /** The human-readable timezone name. */
            name?: string;
            /** The timezone abbreviation. */
            code?: string;
            /** The current local time returned by Radar. */
            currentTime?: string;
            /** The timezone UTC offset in seconds. */
            utcOffset?: number;
            /** The daylight saving offset in seconds. */
            dstOffset?: number;
            [key: string]: unknown;
          };
          /** The raw object returned by Radar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Search Radar places near coordinates by chain or category. */
    "radar.search_places": {
      input: {
        /**
         * The latitude coordinate in WGS84 decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The longitude coordinate in WGS84 decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * Radar chain slug filters sent as a comma-separated list.
         * @minItems 1
         */
        chains?: Array<string>;
        /**
         * Radar category filters sent as a comma-separated list.
         * @minItems 1
         */
        categories?: Array<string>;
        /**
         * The search radius in meters.
         * @minimum 1
         * @maximum 10000
         */
        radius?: number;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Radar response metadata. */
        meta: {
          /** The HTTP-like status code reported by Radar. */
          code?: number;
          /** The parameter name associated with a Radar error when present. */
          param?: string;
          /** The Radar status or error message when present. */
          message?: string;
          [key: string]: unknown;
        };
        /** The places returned by Radar. */
        places: Array<{
          /** The place name returned by Radar. */
          name?: string;
          /** The Radar place categories. */
          categories?: Array<string>;
          /** The Radar chain object for the place when present. */
          chain?: {
            /** The chain name. */
            name?: string;
            /** The chain slug. */
            slug?: string;
            /** The chain external identifier. */
            externalId?: string;
            /** The chain metadata returned by Radar. */
            metadata?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** A GeoJSON-like geometry object returned by Radar. */
          location?: {
            /** The geometry type returned by Radar. */
            type?: string;
            /**
             * The longitude and latitude coordinate pair returned by Radar.
             * @minItems 2
             */
            coordinates?: Array<number>;
            [key: string]: unknown;
          };
          /** The raw object returned by Radar. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
