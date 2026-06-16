import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get detailed Tripadvisor information for one location. */
    "tripadvisor.get_location_details": {
      input: {
        /** Tripadvisor location identifier. */
        locationId: number | string;
        /**
         * Supported Tripadvisor language code.
         * @minLength 1
         */
        language?: string;
        /**
         * ISO 4217 currency code used for localized fields.
         * @minLength 1
         */
        currency?: string;
      };
      output: {
        /** Location details returned by Tripadvisor. */
        location: {
          /** Normalized Tripadvisor location identifier. */
          locationId: string;
          /** Location display name. */
          name?: string;
          /** Location description returned by Tripadvisor. */
          description?: string;
          /** Tripadvisor listing URL for the location. */
          webUrl?: string;
          /** Official website URL for the location. */
          website?: string;
          /** Location phone number. */
          phone?: string;
          /** Location email address. */
          email?: string;
          /** Average Tripadvisor rating. */
          rating?: number;
          /** Total number of Tripadvisor reviews. */
          numReviews?: number;
          /** Latitude coordinate of the location. */
          latitude?: number;
          /** Longitude coordinate of the location. */
          longitude?: number;
          /** Timezone of the location. */
          timezone?: string;
          /** Normalized location address. */
          addressObj?: {
            /** Primary street address line. */
            street1?: string;
            /** Secondary street address line. */
            street2?: string;
            /** City name. */
            city?: string;
            /** State or region name. */
            state?: string;
            /** Country name. */
            country?: string;
            /** Postal code. */
            postalCode?: string;
            /** Formatted address string. */
            addressString?: string;
          };
        };
      };
    };
    /** Get Tripadvisor photos for one location with optional paging and source filters. */
    "tripadvisor.get_location_photos": {
      input: {
        /** Tripadvisor location identifier. */
        locationId: number | string;
        /**
         * Supported Tripadvisor language code.
         * @minLength 1
         */
        language?: string;
        /**
         * Maximum number of photos to return, up to 5.
         * @minimum 1
         * @maximum 5
         */
        limit?: number;
        /**
         * Zero-based pagination offset for photo results.
         * @minimum 0
         */
        offset?: number;
        /**
         * Allowed Tripadvisor photo sources to include in the response.
         * @minItems 1
         */
        sources?: Array<"Expert" | "Management" | "Traveler">;
      };
      output: {
        /** Photos returned by Tripadvisor. */
        photos: Array<{
          /** Tripadvisor photo identifier. */
          id: number;
          /** Photo album label. */
          album?: string;
          /** Photo caption text. */
          caption?: string;
          /** Whether Tripadvisor marks the photo as blessed. */
          isBlessed?: boolean;
          /** Photo published date returned by Tripadvisor. */
          publishedDate?: string;
          /** Photo image variants. */
          images: {
            /** Thumbnail image variant. */
            thumbnail?: {
              /** Direct image URL for this size variant. */
              url: string;
              /** Image width in pixels. */
              width: number;
              /** Image height in pixels. */
              height: number;
            };
            /** Small image variant. */
            small?: {
              /** Direct image URL for this size variant. */
              url: string;
              /** Image width in pixels. */
              width: number;
              /** Image height in pixels. */
              height: number;
            };
            /** Medium image variant. */
            medium?: {
              /** Direct image URL for this size variant. */
              url: string;
              /** Image width in pixels. */
              width: number;
              /** Image height in pixels. */
              height: number;
            };
            /** Large image variant. */
            large?: {
              /** Direct image URL for this size variant. */
              url: string;
              /** Image width in pixels. */
              width: number;
              /** Image height in pixels. */
              height: number;
            };
            /** Original image variant. */
            original?: {
              /** Direct image URL for this size variant. */
              url: string;
              /** Image width in pixels. */
              width: number;
              /** Image height in pixels. */
              height: number;
            };
            [key: string]: unknown;
          };
          /** Photo source metadata. */
          source?: {
            /** Photo source name. */
            name?: string;
            /** Localized photo source name. */
            localizedName?: string;
          };
          /** Photo uploader metadata. */
          user?: {
            /** Photo uploader display name. */
            username?: string;
            /** Number of reviews written by the uploader. */
            reviewCount?: number;
            /** Reviewer badge label returned by Tripadvisor. */
            reviewerBadge?: string;
            /** Uploader location metadata. */
            userLocation?: {
              /** Reviewer location identifier. */
              id?: string;
              /** Reviewer location name. */
              name?: string;
            };
            /** Uploader avatar URLs. */
            avatar?: {
              /** Small avatar URL. */
              small?: string;
              /** Medium avatar URL. */
              medium?: string;
              /** Large avatar URL. */
              large?: string;
              /** Thumbnail avatar URL. */
              thumbnail?: string;
              /** Original avatar URL. */
              original?: string;
              [key: string]: unknown;
            };
          };
        }>;
        /** Paging metadata returned by Tripadvisor. */
        paging?: {
          /** Next page URL returned by Tripadvisor. */
          next?: string;
          /** Previous page URL returned by Tripadvisor. */
          previous?: string;
          /** Number of items in the current page. */
          results?: number;
          /** Number of skipped items for this page. */
          skipped?: number;
          /** Total number of available items. */
          totalResults?: number;
        };
      };
    };
    /** Search Tripadvisor locations by text with optional geographic and category filters. */
    "tripadvisor.search_locations": {
      input: {
        /**
         * Text used to search Tripadvisor locations by name.
         * @minLength 1
         */
        searchQuery: string;
        /** Optional Tripadvisor category filter. */
        category?: "hotels" | "attractions" | "restaurants" | "geos";
        /**
         * Phone number used to filter search results.
         * @minLength 1
         */
        phone?: string;
        /**
         * Address text used to filter search results.
         * @minLength 1
         */
        address?: string;
        /**
         * Latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * Longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /**
         * Radius length used when latitude and longitude are provided.
         * @exclusiveMinimum 0
         */
        radius?: number;
        /** Distance unit used for radius filtering. */
        radiusUnit?: "km" | "mi" | "m";
        /**
         * Supported Tripadvisor language code.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Location summaries returned by Tripadvisor location search. */
        locations: Array<{
          /** Normalized Tripadvisor location identifier. */
          locationId: string;
          /** Location display name. */
          name: string;
          /** Distance text returned by Tripadvisor. */
          distance?: string;
          /** Bearing text returned by Tripadvisor. */
          bearing?: string;
          /** Normalized location address. */
          addressObj?: {
            /** Primary street address line. */
            street1?: string;
            /** Secondary street address line. */
            street2?: string;
            /** City name. */
            city?: string;
            /** State or region name. */
            state?: string;
            /** Country name. */
            country?: string;
            /** Postal code. */
            postalCode?: string;
            /** Formatted address string. */
            addressString?: string;
          };
        }>;
      };
    };
    /** Search Tripadvisor locations near a latitude and longitude coordinate pair. */
    "tripadvisor.search_nearby_locations": {
      input: {
        /**
         * Latitude in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * Longitude in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /** Optional Tripadvisor category filter. */
        category?: "hotels" | "attractions" | "restaurants" | "geos";
        /**
         * Phone number used to filter nearby results.
         * @minLength 1
         */
        phone?: string;
        /**
         * Address text used to filter nearby results.
         * @minLength 1
         */
        address?: string;
        /**
         * Radius length used to constrain the nearby search.
         * @exclusiveMinimum 0
         */
        radius?: number;
        /** Distance unit used for radius filtering. */
        radiusUnit?: "km" | "mi" | "m";
        /**
         * Supported Tripadvisor language code.
         * @minLength 1
         */
        language?: string;
      };
      output: {
        /** Location summaries returned by Tripadvisor nearby search. */
        locations: Array<{
          /** Normalized Tripadvisor location identifier. */
          locationId: string;
          /** Location display name. */
          name: string;
          /** Distance text returned by Tripadvisor. */
          distance?: string;
          /** Bearing text returned by Tripadvisor. */
          bearing?: string;
          /** Normalized location address. */
          addressObj?: {
            /** Primary street address line. */
            street1?: string;
            /** Secondary street address line. */
            street2?: string;
            /** City name. */
            city?: string;
            /** State or region name. */
            state?: string;
            /** Country name. */
            country?: string;
            /** Postal code. */
            postalCode?: string;
            /** Formatted address string. */
            addressString?: string;
          };
        }>;
      };
    };
  }
}
