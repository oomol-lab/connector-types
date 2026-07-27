import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Convert an address or place query into ArcGIS geocoding candidates. */
    "arcgis_online.find_address_candidates": {
      input: {
        /**
         * Street address, place name, postal code, or POI query.
         * @minLength 1
         */
        singleLine: string;
        /** A WGS84 coordinate used by ArcGIS geocoding. */
        location?: {
          /**
           * Longitude in decimal degrees.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Latitude in decimal degrees.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
        };
        /**
         * Bounding box that limits search results, formatted as xmin,ymin,xmax,ymax.
         * @minLength 1
         */
        searchExtent?: string;
        /**
         * Place or address category filter supported by ArcGIS.
         * @minLength 1
         */
        category?: string;
        /**
         * Country code or comma-separated country codes used to restrict results.
         * @minLength 1
         */
        sourceCountry?: string;
        /**
         * Preferred label values returned by ArcGIS, such as postal city or local city.
         * @minLength 1
         */
        preferredLabelValues?: string;
        /**
         * Magic key returned by the suggest action.
         * @minLength 1
         */
        magicKey?: string;
        /**
         * Comma-separated output fields to include, or * for all fields.
         * @minLength 1
         */
        outFields?: string;
        /** Spatial reference WKID for returned coordinates. */
        outSr?: number;
        /**
         * Maximum number of candidates to return, from 1 to 50.
         * @minimum 1
         * @maximum 50
         */
        maxLocations?: number;
        /** Whether the geocoding results will be stored persistently. */
        forStorage?: boolean;
        /** Preferred output geometry location type. */
        locationType?: "rooftop" | "street";
      };
      output: {
        /** ArcGIS spatial reference metadata. */
        spatialReference?: {
          /** Well-known ID for the spatial reference. */
          wkid?: number;
          /** Latest well-known ID for the spatial reference. */
          latestWkid?: number;
          [key: string]: unknown;
        };
        /** Address candidates returned by ArcGIS. */
        candidates: Array<{
          /**
           * Formatted address for the candidate.
           * @minLength 1
           */
          address: string;
          /** Point geometry returned by ArcGIS. */
          location: {
            /** X coordinate returned by ArcGIS. */
            x: number;
            /** Y coordinate returned by ArcGIS. */
            y: number;
            /** ArcGIS spatial reference metadata. */
            spatialReference?: {
              /** Well-known ID for the spatial reference. */
              wkid?: number;
              /** Latest well-known ID for the spatial reference. */
              latestWkid?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Match score for the candidate. */
          score: number;
          /** Address attributes returned by ArcGIS, keyed by upstream field name. */
          attributes?: Record<string, unknown>;
          /** Bounding extent returned by ArcGIS. */
          extent?: {
            /** Minimum X coordinate of the extent. */
            xmin?: number;
            /** Minimum Y coordinate of the extent. */
            ymin?: number;
            /** Maximum X coordinate of the extent. */
            xmax?: number;
            /** Maximum Y coordinate of the extent. */
            ymax?: number;
            /** ArcGIS spatial reference metadata. */
            spatialReference?: {
              /** Well-known ID for the spatial reference. */
              wkid?: number;
              /** Latest well-known ID for the spatial reference. */
              latestWkid?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Convert longitude and latitude into an ArcGIS address result. */
    "arcgis_online.reverse_geocode": {
      input: {
        /**
         * Longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * Latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /** Spatial reference WKID for returned coordinates. */
        outSr?: number;
        /**
         * Language code for returned addresses.
         * @minLength 1
         */
        langCode?: string;
        /** Whether the reverse geocoding result will be stored persistently. */
        forStorage?: boolean;
        /**
         * Comma-separated feature types to limit possible matches.
         * @minLength 1
         */
        featureTypes?: string;
        /** Preferred output geometry location type. */
        locationType?: "rooftop" | "street";
        /**
         * Preferred label values returned by ArcGIS.
         * @minLength 1
         */
        preferredLabelValues?: string;
        /**
         * Comma-separated address fields to include, or * for all fields.
         * @minLength 1
         */
        outFields?: string;
        /** Whether the input coordinates should be returned in the location object. */
        returnInputLocation?: boolean;
      };
      output: {
        /** Address attributes returned by ArcGIS, keyed by upstream field name. */
        address: Record<string, unknown>;
        /** Point geometry returned by ArcGIS. */
        location: {
          /** X coordinate returned by ArcGIS. */
          x: number;
          /** Y coordinate returned by ArcGIS. */
          y: number;
          /** ArcGIS spatial reference metadata. */
          spatialReference?: {
            /** Well-known ID for the spatial reference. */
            wkid?: number;
            /** Latest well-known ID for the spatial reference. */
            latestWkid?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Return ArcGIS address and place autocomplete suggestions. */
    "arcgis_online.suggest": {
      input: {
        /**
         * Input text to autocomplete.
         * @minLength 1
         */
        text: string;
        /** A WGS84 coordinate used by ArcGIS geocoding. */
        location?: {
          /**
           * Longitude in decimal degrees.
           * @minimum -180
           * @maximum 180
           */
          longitude: number;
          /**
           * Latitude in decimal degrees.
           * @minimum -90
           * @maximum 90
           */
          latitude: number;
        };
        /**
         * Bounding box that limits search results, formatted as xmin,ymin,xmax,ymax.
         * @minLength 1
         */
        searchExtent?: string;
        /**
         * Place or address category filter supported by ArcGIS.
         * @minLength 1
         */
        category?: string;
        /**
         * Country code or comma-separated country codes used to restrict results.
         * @minLength 1
         */
        sourceCountry?: string;
        /**
         * Preferred label values returned by ArcGIS, such as postal city or local city.
         * @minLength 1
         */
        preferredLabelValues?: string;
        /**
         * Country code used to restrict suggestions.
         * @minLength 1
         */
        countryCode?: string;
        /**
         * Maximum number of suggestions to return, from 1 to 15.
         * @minimum 1
         * @maximum 15
         */
        maxSuggestions?: number;
        /** Whether collection suggestions should be returned. */
        returnCollections?: boolean;
      };
      output: {
        /** Autocomplete suggestions returned by ArcGIS. */
        suggestions: Array<{
          /**
           * Suggestion text returned by ArcGIS.
           * @minLength 1
           */
          text: string;
          /**
           * ArcGIS magic key that can be sent to find_address_candidates.
           * @minLength 1
           */
          magicKey: string;
          /** Whether the suggestion represents a collection. */
          isCollection?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
