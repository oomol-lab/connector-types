import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Yelp business details for one business identifier or alias. */
    "yelp.get_business_details": {
      input: {
        /**
         * Yelp business identifier or alias returned by a previous search result.
         * @minLength 1
         */
        businessId: string;
        /**
         * Locale used by Yelp for localized response text, such as en_US.
         * @minLength 1
         */
        locale?: string;
      };
      output: {
        /** Normalized Yelp business details. */
        business: {
          /** Yelp business identifier. */
          id: string;
          /** Yelp business alias. */
          alias: string;
          /** Business display name. */
          name: string;
          /**
           * Primary business image URL.
           * @format uri
           */
          imageUrl?: string;
          /** Whether the business is permanently closed. */
          isClosed: boolean;
          /**
           * Yelp listing URL for the business.
           * @format uri
           */
          url: string;
          /** Total Yelp review count. */
          reviewCount?: number;
          /** Business categories returned by Yelp. */
          categories?: Array<{
            /** Yelp category alias. */
            alias: string;
            /** Human-readable Yelp category title. */
            title: string;
          }>;
          /** Average Yelp rating. */
          rating?: number;
          /** Geographic coordinates returned by Yelp. */
          coordinates?: {
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
          };
          /** Supported transaction modes such as pickup or delivery. */
          transactions?: Array<string>;
          /** Displayed price tier. */
          price?: string;
          /** Normalized business location. */
          location?: {
            /** Primary street address line. */
            address1?: string;
            /** Secondary street address line. */
            address2?: string;
            /** Tertiary street address line. */
            address3?: string;
            /** City name. */
            city?: string;
            /** State or region code. */
            state?: string;
            /** Postal code. */
            zipCode?: string;
            /** Country code. */
            country?: string;
            /** Formatted address lines for the business. */
            displayAddress?: Array<string>;
          };
          /** Phone number in E.164 format. */
          phone?: string;
          /** Human-readable phone number. */
          displayPhone?: string;
          /** Distance from the search anchor in meters. */
          distance?: number;
          /** Photo URLs returned by Yelp. */
          photos?: Array<string>;
          /** Business opening-hours blocks returned by Yelp. */
          hours?: Array<{
            /** Opening-hours entries returned by Yelp. */
            open: Array<{
              /** Whether the hours entry continues into the next day. */
              isOvernight: boolean;
              /** Opening time in HHMM 24-hour format. */
              start: string;
              /** Closing time in HHMM 24-hour format. */
              end: string;
              /**
               * Day of week where 0 is Monday.
               * @minimum 0
               * @maximum 6
               */
              day: number;
            }>;
            /** Hours type such as REGULAR. */
            hoursType: string;
            /** Whether the business is open at the current time. */
            isOpenNow: boolean;
          }>;
        };
      };
    };
    /** Search Yelp businesses by keyword and geographic anchor. */
    "yelp.search_businesses": {
      input: {
        /**
         * Search term such as coffee or sushi.
         * @minLength 1
         */
        term?: string;
        /**
         * Location text such as a city, neighborhood, or postal code.
         * @minLength 1
         */
        location?: string;
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
         * Category aliases used to filter business results.
         * @minItems 1
         */
        categories?: Array<string>;
        /**
         * Maximum number of businesses to return.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Pagination offset used for business search.
         * @minimum 0
         */
        offset?: number;
        /**
         * Search radius in meters.
         * @minimum 1
         * @maximum 40000
         */
        radius?: number;
        /** Sort order used by Yelp business search. */
        sortBy?: "best_match" | "rating" | "review_count" | "distance";
        /** Whether to return businesses that are open now. */
        openNow?: boolean;
        /**
         * Unix timestamp used to filter businesses open at a specific time.
         * @exclusiveMinimum 0
         */
        openAt?: number;
        /**
         * Locale used by Yelp for localized response text, such as en_US.
         * @minLength 1
         */
        locale?: string;
        /**
         * Yelp attribute filters to apply.
         * @minItems 1
         */
        attributes?: Array<string>;
        /**
         * Price tiers to include in the search.
         * @minItems 1
         */
        priceTiers?: Array<"1" | "2" | "3" | "4">;
      };
      output: {
        /** Businesses returned by the Yelp business search endpoint. */
        businesses: Array<{
          /** Yelp business identifier. */
          id: string;
          /** Yelp business alias. */
          alias: string;
          /** Business display name. */
          name: string;
          /**
           * Primary business image URL.
           * @format uri
           */
          imageUrl?: string;
          /** Whether the business is permanently closed. */
          isClosed: boolean;
          /**
           * Yelp listing URL for the business.
           * @format uri
           */
          url: string;
          /** Total Yelp review count. */
          reviewCount?: number;
          /** Business categories returned by Yelp. */
          categories?: Array<{
            /** Yelp category alias. */
            alias: string;
            /** Human-readable Yelp category title. */
            title: string;
          }>;
          /** Average Yelp rating. */
          rating?: number;
          /** Geographic coordinates returned by Yelp. */
          coordinates?: {
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
          };
          /** Supported transaction modes such as pickup or delivery. */
          transactions?: Array<string>;
          /** Displayed price tier. */
          price?: string;
          /** Normalized business location. */
          location?: {
            /** Primary street address line. */
            address1?: string;
            /** Secondary street address line. */
            address2?: string;
            /** Tertiary street address line. */
            address3?: string;
            /** City name. */
            city?: string;
            /** State or region code. */
            state?: string;
            /** Postal code. */
            zipCode?: string;
            /** Country code. */
            country?: string;
            /** Formatted address lines for the business. */
            displayAddress?: Array<string>;
          };
          /** Phone number in E.164 format. */
          phone?: string;
          /** Human-readable phone number. */
          displayPhone?: string;
          /** Distance from the search anchor in meters. */
          distance?: number;
        }>;
        /** Total number of matching businesses. */
        total: number;
        /** Search region metadata returned by Yelp. */
        region?: {
          /** Geographic coordinates returned by Yelp. */
          center: {
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
          };
        };
      };
    };
    /** Find Yelp businesses by exact phone number. */
    "yelp.search_businesses_by_phone": {
      input: {
        /**
         * Business phone number in E.164 format, including the leading plus sign.
         * @minLength 1
         */
        phone: string;
      };
      output: {
        /** Businesses returned by the Yelp business phone search endpoint. */
        businesses: Array<{
          /** Yelp business identifier. */
          id: string;
          /** Yelp business alias. */
          alias: string;
          /** Business display name. */
          name: string;
          /**
           * Primary business image URL.
           * @format uri
           */
          imageUrl?: string;
          /** Whether the business is permanently closed. */
          isClosed: boolean;
          /**
           * Yelp listing URL for the business.
           * @format uri
           */
          url: string;
          /** Total Yelp review count. */
          reviewCount?: number;
          /** Business categories returned by Yelp. */
          categories?: Array<{
            /** Yelp category alias. */
            alias: string;
            /** Human-readable Yelp category title. */
            title: string;
          }>;
          /** Average Yelp rating. */
          rating?: number;
          /** Geographic coordinates returned by Yelp. */
          coordinates?: {
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
          };
          /** Supported transaction modes such as pickup or delivery. */
          transactions?: Array<string>;
          /** Displayed price tier. */
          price?: string;
          /** Normalized business location. */
          location?: {
            /** Primary street address line. */
            address1?: string;
            /** Secondary street address line. */
            address2?: string;
            /** Tertiary street address line. */
            address3?: string;
            /** City name. */
            city?: string;
            /** State or region code. */
            state?: string;
            /** Postal code. */
            zipCode?: string;
            /** Country code. */
            country?: string;
            /** Formatted address lines for the business. */
            displayAddress?: Array<string>;
          };
          /** Phone number in E.164 format. */
          phone?: string;
          /** Human-readable phone number. */
          displayPhone?: string;
          /** Distance from the search anchor in meters. */
          distance?: number;
        }>;
        /** Total number of matching businesses. */
        total: number;
      };
    };
  }
}
