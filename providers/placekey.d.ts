import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Resolve a postal address with Placekey and return the matched geocode response for the location. */
    "placekey.get_geocode_from_address": {
      input: {
        /** The street address of the location to resolve into a Placekey. */
        street_address: string;
        /** The city of the location. */
        city?: string;
        /** The region or state of the location. */
        region: string;
        /** The postal code of the location. */
        postal_code?: string;
        /**
         * The ISO 3166-1 alpha-2 country code for the queried location.
         * @minLength 2
         * @maxLength 2
         */
        iso_country_code: string;
      };
      output: {
        /** The query identifier echoed back by Placekey. */
        query_id: string;
        /** The Placekey identifier returned for the matched address. */
        placekey: string;
        /** Geocode data returned by the Placekey geocoder. */
        geocode: {
          /** The geocoded latitude and longitude for the matched location. */
          location: {
            /** The latitude returned by Placekey geocoding. */
            lat: number;
            /** The longitude returned by Placekey geocoding. */
            lng: number;
          };
          /** The Placekey geocode precision level for the matched location. */
          location_type: string;
        };
      };
    };
    /** Look up a single location with Placekey and return its Placekey identifier plus optional enrichment fields. */
    "placekey.get_placekey": {
      input: {
        /** A custom identifier echoed back in the Placekey response. */
        query_id?: string;
        /** The street address of the location to resolve. */
        street_address?: string;
        /** The city of the queried location. */
        city?: string;
        /** The second-level administrative region, such as a US state code. */
        region?: string;
        /** The postal code of the queried location. */
        postal_code?: string;
        /**
         * The ISO 3166-1 alpha-2 country code for the queried location.
         * @minLength 2
         * @maxLength 2
         */
        iso_country_code?: string;
        /**
         * The WGS-84 latitude of the queried location.
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * The WGS-84 longitude of the queried location.
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /** The point-of-interest name used to improve Placekey matching. */
        location_name?: string;
        /** Additional metadata used by Placekey to improve point-of-interest matching. */
        place_metadata?: {
          /**
           * The business website URL used to improve point-of-interest matching.
           * @format uri
           */
          website?: string;
          /** The merchant category code associated with the point of interest. */
          mcc_code?: string;
          /** A brand-specific store identifier used to improve matching accuracy. */
          store_id?: string;
          /** The 4-digit or 6-digit NAICS code associated with the business. */
          naics_code?: string;
          /** The phone number of the point of interest used to improve matching. */
          phone_number?: string;
        };
        /** Options that customize the Placekey single-lookup response. */
        options?: {
          /**
           * Optional Placekey response fields to include in the lookup result.
           * @minItems 1
           */
          fields?: Array<"address_placekey" | "building_placekey" | "confidence_score" | "normalized_address" | "geocode" | "upi" | "parcel" | "geoid" | "gers">;
          /** Whether Placekey should require an exact point-of-interest name match. */
          strict_name_match?: boolean;
          /** Whether Placekey should require an exact address match. */
          strict_address_match?: boolean;
        };
      };
      output: {
        /** The query identifier echoed back by Placekey. */
        query_id: string;
        /** The Placekey identifier returned for the matched location. */
        placekey?: string;
        /** The lookup error returned by Placekey. */
        error?: string;
        /** The Placekey for the address without the point-of-interest component. */
        address_placekey?: string;
        /** The building-level Placekey returned by Placekey. */
        building_placekey?: string;
        /** The confidence score returned by Placekey for the match. */
        confidence_score?: "HIGH" | "MEDIUM" | "LOW";
        /** The normalized address returned by Placekey for a successful lookup. */
        normalized_address?: {
          /** The normalized street address returned by Placekey. */
          street_address?: string;
          /** The normalized city returned by Placekey. */
          city?: string;
          /** The normalized region returned by Placekey. */
          region?: string;
          /** The normalized postal code returned by Placekey. */
          postal_code?: string;
          /** The normalized ISO country code returned by Placekey. */
          country_code?: string;
        };
        /** Geocode data returned by the Placekey geocoder. */
        geocode?: {
          /** The geocoded latitude and longitude for the matched location. */
          location: {
            /** The latitude returned by Placekey geocoding. */
            lat: number;
            /** The longitude returned by Placekey geocoding. */
            lng: number;
          };
          /** The Placekey geocode precision level for the matched location. */
          location_type: string;
        };
        /** The universal parcel identifier returned by Placekey. */
        upi?: string;
        /** The parcel identifier returned by Placekey when available. */
        parcel?: string;
        /** The census geography identifier returned by Placekey when available. */
        geoid?: string;
        /** The Overture Maps identifier returned by Placekey when available. */
        gers?: string;
      };
    };
    /** Resolve a postal address into a Placekey identifier using the Placekey single-lookup API. */
    "placekey.get_placekey_from_address": {
      input: {
        /** The street address of the location to resolve into a Placekey. */
        street_address: string;
        /** The city of the location. */
        city?: string;
        /** The region or state of the location. */
        region: string;
        /** The postal code of the location. */
        postal_code?: string;
        /**
         * The ISO 3166-1 alpha-2 country code for the queried location.
         * @minLength 2
         * @maxLength 2
         */
        iso_country_code: string;
        /** The point-of-interest name used to improve Placekey matching. */
        location_name?: string;
      };
      output: {
        /** The query identifier echoed back by Placekey. */
        query_id: string;
        /** The Placekey identifier returned for the matched address. */
        placekey?: string;
        /** The lookup error returned by Placekey. */
        error?: string;
      };
    };
    /** Look up up to 100 locations in one Placekey bulk request and return the result for each query item. */
    "placekey.get_placekeys_bulk": {
      input: {
        /**
         * The list of location queries to resolve with Placekey.
         * @minItems 1
         * @maxItems 100
         */
        queries: Array<{
          /** A custom identifier echoed back in the Placekey response. */
          query_id?: string;
          /** The street address of the location to resolve. */
          street_address?: string;
          /** The city of the queried location. */
          city?: string;
          /** The second-level administrative region, such as a US state code. */
          region?: string;
          /** The postal code of the queried location. */
          postal_code?: string;
          /**
           * The ISO 3166-1 alpha-2 country code for the queried location.
           * @minLength 2
           * @maxLength 2
           */
          iso_country_code?: string;
          /**
           * The WGS-84 latitude of the queried location.
           * @minimum -90
           * @maximum 90
           */
          latitude?: number;
          /**
           * The WGS-84 longitude of the queried location.
           * @minimum -180
           * @maximum 180
           */
          longitude?: number;
          /** The point-of-interest name used to improve Placekey matching. */
          location_name?: string;
        }>;
        /** Options that customize the Placekey bulk-lookup response. */
        options?: {
          /** Whether Placekey should require an exact point-of-interest name match. */
          strict_name_match?: boolean;
          /** Whether Placekey should require an exact address match. */
          strict_address_match?: boolean;
        };
      };
      output: Array<{
        /** The query identifier echoed back by Placekey. */
        query_id: string;
        /** The Placekey identifier returned for the matched location. */
        placekey?: string;
        /** The lookup error returned by Placekey. */
        error?: string;
        /** The Placekey for the address without the point-of-interest component. */
        address_placekey?: string;
        /** The building-level Placekey returned by Placekey. */
        building_placekey?: string;
        /** The confidence score returned by Placekey for the match. */
        confidence_score?: "HIGH" | "MEDIUM" | "LOW";
        /** The normalized address returned by Placekey for a successful lookup. */
        normalized_address?: {
          /** The normalized street address returned by Placekey. */
          street_address?: string;
          /** The normalized city returned by Placekey. */
          city?: string;
          /** The normalized region returned by Placekey. */
          region?: string;
          /** The normalized postal code returned by Placekey. */
          postal_code?: string;
          /** The normalized ISO country code returned by Placekey. */
          country_code?: string;
        };
        /** Geocode data returned by the Placekey geocoder. */
        geocode?: {
          /** The geocoded latitude and longitude for the matched location. */
          location: {
            /** The latitude returned by Placekey geocoding. */
            lat: number;
            /** The longitude returned by Placekey geocoding. */
            lng: number;
          };
          /** The Placekey geocode precision level for the matched location. */
          location_type: string;
        };
        /** The universal parcel identifier returned by Placekey. */
        upi?: string;
        /** The parcel identifier returned by Placekey when available. */
        parcel?: string;
        /** The census geography identifier returned by Placekey when available. */
        geoid?: string;
        /** The Overture Maps identifier returned by Placekey when available. */
        gers?: string;
      }>;
    };
  }
}
