import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve nearby places around a latitude and longitude with Foursquare. */
    "foursquare.get_nearby_places": {
      input: {
        /**
         * The latitude of the current location.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The longitude of the current location.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * The horizontal accuracy radius in meters.
         * @exclusiveMinimum 0
         */
        hacc?: number;
        /** The altitude in meters. */
        altitude?: number;
        /**
         * The maximum number of nearby places to return.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Foursquare response fields to request.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The normalized nearby place results. */
        results: Array<{
          /** The Foursquare place identifier. */
          fsqId: string;
          /** The place name. */
          name: string;
          /** The categories of the place. */
          categories?: Array<{
            /** The category identifier. */
            id?: string | number;
            /** The category display name. */
            name?: string;
            /** The short category name. */
            shortName?: string;
            /** The plural category name. */
            pluralName?: string;
            /** The category icon metadata. */
            icon?: {
              /** The icon URL prefix. */
              prefix?: string;
              /** The icon URL suffix. */
              suffix?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The chain metadata of the place. */
          chains?: Array<{
            /** The chain identifier. */
            id?: string | number;
            /** The chain display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The closure date of the place. */
          dateClosed?: string;
          /** The description of the place. */
          description?: string;
          /** The distance to the place in meters. */
          distance?: number;
          /** The primary contact email of the place. */
          email?: string;
          /** The fax number of the place. */
          fax?: string;
          /** The feature flags of the place. */
          features?: Record<string, unknown>;
          /** The normalized geocodes of the place. */
          geocodes?: {
            /** The primary coordinate of the place. */
            main?: {
              /** The latitude of the coordinate. */
              latitude: number;
              /** The longitude of the coordinate. */
              longitude: number;
            };
            [key: string]: unknown;
          };
          /** The opening hours of the place. */
          hours?: {
            /** The display string for the opening hours. */
            display?: string;
            /** Whether the place is open right now. */
            openNow?: boolean;
            /** The regular opening-hour entries returned by Foursquare. */
            regular?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** The Foursquare detail link of the place. */
          link?: string;
          /** The normalized location object of the place. */
          location?: {
            /** The street address of the place. */
            address?: string;
            /** The extended address line of the place. */
            addressExtended?: string;
            /** The country code or country name of the place. */
            country?: string;
            /** The cross street of the place. */
            crossStreet?: string;
            /** The human-readable formatted address of the place. */
            formattedAddress?: string;
            /** The locality or city of the place. */
            locality?: string;
            /** The postal code of the place. */
            postcode?: string;
            /** The state or region of the place. */
            region?: string;
            [key: string]: unknown;
          };
          /** The menu URL of the place. */
          menu?: string;
          /** The embedded place photos. */
          photos?: Array<{
            /** The photo identifier. */
            id: string;
            /** The creation timestamp of the photo. */
            createdAt?: string;
            /** The URL prefix of the photo. */
            prefix?: string;
            /** The URL suffix of the photo. */
            suffix?: string;
            /** The maximum width of the photo. */
            width?: number;
            /** The maximum height of the photo. */
            height?: number;
            /** The photo classifications returned by Foursquare. */
            classifications?: Array<string>;
            /** The tip metadata associated with the photo. */
            tip?: {
              /** The tip identifier. */
              id?: string;
              /** The creation timestamp of the tip. */
              createdAt?: string;
              /** The tip text. */
              text?: string;
              /** The language code of the tip. */
              lang?: string;
              /** The canonical URL of the tip. */
              url?: string;
              /** The number of agreements on the tip. */
              agreeCount?: number;
              /** The number of disagreements on the tip. */
              disagreeCount?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The popularity score of the place. */
          popularity?: number;
          /** The price tier of the place. */
          price?: number;
          /** The rating score of the place. */
          rating?: number;
          /** The social media metadata of the place. */
          socialMedia?: Record<string, unknown>;
          /** The statistics of the place. */
          stats?: {
            /** The total number of photos. */
            totalPhotos?: number;
            /** The total number of ratings. */
            totalRatings?: number;
            /** The total number of tips. */
            totalTips?: number;
            [key: string]: unknown;
          };
          /** The tastes associated with the place. */
          tastes?: Array<string>;
          /** The telephone number of the place. */
          tel?: string;
          /** The embedded tips of the place. */
          tips?: Array<{
            /** The tip identifier. */
            id?: string;
            /** The creation timestamp of the tip. */
            createdAt?: string;
            /** The tip text. */
            text?: string;
            /** The language code of the tip. */
            lang?: string;
            /** The canonical URL of the tip. */
            url?: string;
            /** The number of agreements on the tip. */
            agreeCount?: number;
            /** The number of disagreements on the tip. */
            disagreeCount?: number;
            [key: string]: unknown;
          }>;
          /** The timezone of the place. */
          timezone?: string;
          /** The website URL of the place. */
          website?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve one place by Foursquare place ID. */
    "foursquare.get_place": {
      input: {
        /**
         * The unique Foursquare place identifier.
         * @minLength 1
         */
        fsqId: string;
        /**
         * The Foursquare response fields to request.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The Foursquare place identifier. */
        fsqId: string;
        /** The place name. */
        name: string;
        /** The categories of the place. */
        categories?: Array<{
          /** The category identifier. */
          id?: string | number;
          /** The category display name. */
          name?: string;
          /** The short category name. */
          shortName?: string;
          /** The plural category name. */
          pluralName?: string;
          /** The category icon metadata. */
          icon?: {
            /** The icon URL prefix. */
            prefix?: string;
            /** The icon URL suffix. */
            suffix?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The chain metadata of the place. */
        chains?: Array<{
          /** The chain identifier. */
          id?: string | number;
          /** The chain display name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** The closure date of the place. */
        dateClosed?: string;
        /** The description of the place. */
        description?: string;
        /** The distance to the place in meters. */
        distance?: number;
        /** The primary contact email of the place. */
        email?: string;
        /** The fax number of the place. */
        fax?: string;
        /** The feature flags of the place. */
        features?: Record<string, unknown>;
        /** The normalized geocodes of the place. */
        geocodes?: {
          /** The primary coordinate of the place. */
          main?: {
            /** The latitude of the coordinate. */
            latitude: number;
            /** The longitude of the coordinate. */
            longitude: number;
          };
          [key: string]: unknown;
        };
        /** The opening hours of the place. */
        hours?: {
          /** The display string for the opening hours. */
          display?: string;
          /** Whether the place is open right now. */
          openNow?: boolean;
          /** The regular opening-hour entries returned by Foursquare. */
          regular?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** The Foursquare detail link of the place. */
        link?: string;
        /** The normalized location object of the place. */
        location?: {
          /** The street address of the place. */
          address?: string;
          /** The extended address line of the place. */
          addressExtended?: string;
          /** The country code or country name of the place. */
          country?: string;
          /** The cross street of the place. */
          crossStreet?: string;
          /** The human-readable formatted address of the place. */
          formattedAddress?: string;
          /** The locality or city of the place. */
          locality?: string;
          /** The postal code of the place. */
          postcode?: string;
          /** The state or region of the place. */
          region?: string;
          [key: string]: unknown;
        };
        /** The menu URL of the place. */
        menu?: string;
        /** The embedded place photos. */
        photos?: Array<{
          /** The photo identifier. */
          id: string;
          /** The creation timestamp of the photo. */
          createdAt?: string;
          /** The URL prefix of the photo. */
          prefix?: string;
          /** The URL suffix of the photo. */
          suffix?: string;
          /** The maximum width of the photo. */
          width?: number;
          /** The maximum height of the photo. */
          height?: number;
          /** The photo classifications returned by Foursquare. */
          classifications?: Array<string>;
          /** The tip metadata associated with the photo. */
          tip?: {
            /** The tip identifier. */
            id?: string;
            /** The creation timestamp of the tip. */
            createdAt?: string;
            /** The tip text. */
            text?: string;
            /** The language code of the tip. */
            lang?: string;
            /** The canonical URL of the tip. */
            url?: string;
            /** The number of agreements on the tip. */
            agreeCount?: number;
            /** The number of disagreements on the tip. */
            disagreeCount?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The popularity score of the place. */
        popularity?: number;
        /** The price tier of the place. */
        price?: number;
        /** The rating score of the place. */
        rating?: number;
        /** The social media metadata of the place. */
        socialMedia?: Record<string, unknown>;
        /** The statistics of the place. */
        stats?: {
          /** The total number of photos. */
          totalPhotos?: number;
          /** The total number of ratings. */
          totalRatings?: number;
          /** The total number of tips. */
          totalTips?: number;
          [key: string]: unknown;
        };
        /** The tastes associated with the place. */
        tastes?: Array<string>;
        /** The telephone number of the place. */
        tel?: string;
        /** The embedded tips of the place. */
        tips?: Array<{
          /** The tip identifier. */
          id?: string;
          /** The creation timestamp of the tip. */
          createdAt?: string;
          /** The tip text. */
          text?: string;
          /** The language code of the tip. */
          lang?: string;
          /** The canonical URL of the tip. */
          url?: string;
          /** The number of agreements on the tip. */
          agreeCount?: number;
          /** The number of disagreements on the tip. */
          disagreeCount?: number;
          [key: string]: unknown;
        }>;
        /** The timezone of the place. */
        timezone?: string;
        /** The website URL of the place. */
        website?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve photos for one Foursquare place. */
    "foursquare.get_place_photos": {
      input: {
        /**
         * The unique Foursquare place identifier.
         * @minLength 1
         */
        fsqId: string;
        /** The ordering applied to photos or tips. */
        sort?: "popular" | "newest";
        /**
         * The maximum number of photos to return.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The photo classifications used to filter the response.
         * @minItems 1
         */
        classifications?: Array<"food" | "indoor" | "menu" | "outdoor">;
      };
      output: {
        /** The normalized place photos. */
        photos: Array<{
          /** The photo identifier. */
          id: string;
          /** The creation timestamp of the photo. */
          createdAt?: string;
          /** The URL prefix of the photo. */
          prefix?: string;
          /** The URL suffix of the photo. */
          suffix?: string;
          /** The maximum width of the photo. */
          width?: number;
          /** The maximum height of the photo. */
          height?: number;
          /** The photo classifications returned by Foursquare. */
          classifications?: Array<string>;
          /** The tip metadata associated with the photo. */
          tip?: {
            /** The tip identifier. */
            id?: string;
            /** The creation timestamp of the tip. */
            createdAt?: string;
            /** The tip text. */
            text?: string;
            /** The language code of the tip. */
            lang?: string;
            /** The canonical URL of the tip. */
            url?: string;
            /** The number of agreements on the tip. */
            agreeCount?: number;
            /** The number of disagreements on the tip. */
            disagreeCount?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve tips for one Foursquare place. */
    "foursquare.get_place_tips": {
      input: {
        /**
         * The unique Foursquare place identifier.
         * @minLength 1
         */
        fsqId: string;
        /** The ordering applied to photos or tips. */
        sort?: "popular" | "newest";
        /**
         * The maximum number of tips to return.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Foursquare response fields to request.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The normalized place tips. */
        tips: Array<{
          /** The tip identifier. */
          id?: string;
          /** The creation timestamp of the tip. */
          createdAt?: string;
          /** The tip text. */
          text?: string;
          /** The language code of the tip. */
          lang?: string;
          /** The canonical URL of the tip. */
          url?: string;
          /** The number of agreements on the tip. */
          agreeCount?: number;
          /** The number of disagreements on the tip. */
          disagreeCount?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search for places with the Foursquare Places Search endpoint. */
    "foursquare.search_places": {
      input: {
        /**
         * The free-form place query.
         * @minLength 1
         */
        query?: string;
        /**
         * The locality text used for search biasing.
         * @minLength 1
         */
        near?: string;
        /**
         * The latitude coordinate in decimal degrees.
         * @minimum -90
         * @maximum 90
         */
        latitude?: number;
        /**
         * The longitude coordinate in decimal degrees.
         * @minimum -180
         * @maximum 180
         */
        longitude?: number;
        /**
         * The search radius in meters.
         * @maximum 100000
         * @exclusiveMinimum 0
         */
        radius?: number;
        /**
         * The maximum number of results to return.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The Foursquare response fields to request.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Whether to restrict results to places currently open. */
        openNow?: boolean;
        /** The local day and time filter in `DOWTHHMM` format. */
        openAt?: string;
        /**
         * The minimum Foursquare price tier.
         * @minimum 1
         * @maximum 4
         */
        minPrice?: number;
        /**
         * The maximum Foursquare price tier.
         * @minimum 1
         * @maximum 4
         */
        maxPrice?: number;
        /** Whether to exclude all known chain places from the response. */
        excludeAllChains?: boolean;
      };
      output: {
        /** The normalized search context metadata. */
        context?: {
          /** The normalized geographic bounds of the search context. */
          geoBounds?: {
            /** The circle bounds of the search area. */
            circle?: {
              /** The center coordinate of the search area. */
              center?: {
                /** The latitude of the coordinate. */
                latitude: number;
                /** The longitude of the coordinate. */
                longitude: number;
              };
              /** The radius of the search area in meters. */
              radius?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** The normalized place search results. */
        results: Array<{
          /** The Foursquare place identifier. */
          fsqId: string;
          /** The place name. */
          name: string;
          /** The categories of the place. */
          categories?: Array<{
            /** The category identifier. */
            id?: string | number;
            /** The category display name. */
            name?: string;
            /** The short category name. */
            shortName?: string;
            /** The plural category name. */
            pluralName?: string;
            /** The category icon metadata. */
            icon?: {
              /** The icon URL prefix. */
              prefix?: string;
              /** The icon URL suffix. */
              suffix?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The chain metadata of the place. */
          chains?: Array<{
            /** The chain identifier. */
            id?: string | number;
            /** The chain display name. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** The closure date of the place. */
          dateClosed?: string;
          /** The description of the place. */
          description?: string;
          /** The distance to the place in meters. */
          distance?: number;
          /** The primary contact email of the place. */
          email?: string;
          /** The fax number of the place. */
          fax?: string;
          /** The feature flags of the place. */
          features?: Record<string, unknown>;
          /** The normalized geocodes of the place. */
          geocodes?: {
            /** The primary coordinate of the place. */
            main?: {
              /** The latitude of the coordinate. */
              latitude: number;
              /** The longitude of the coordinate. */
              longitude: number;
            };
            [key: string]: unknown;
          };
          /** The opening hours of the place. */
          hours?: {
            /** The display string for the opening hours. */
            display?: string;
            /** Whether the place is open right now. */
            openNow?: boolean;
            /** The regular opening-hour entries returned by Foursquare. */
            regular?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** The Foursquare detail link of the place. */
          link?: string;
          /** The normalized location object of the place. */
          location?: {
            /** The street address of the place. */
            address?: string;
            /** The extended address line of the place. */
            addressExtended?: string;
            /** The country code or country name of the place. */
            country?: string;
            /** The cross street of the place. */
            crossStreet?: string;
            /** The human-readable formatted address of the place. */
            formattedAddress?: string;
            /** The locality or city of the place. */
            locality?: string;
            /** The postal code of the place. */
            postcode?: string;
            /** The state or region of the place. */
            region?: string;
            [key: string]: unknown;
          };
          /** The menu URL of the place. */
          menu?: string;
          /** The embedded place photos. */
          photos?: Array<{
            /** The photo identifier. */
            id: string;
            /** The creation timestamp of the photo. */
            createdAt?: string;
            /** The URL prefix of the photo. */
            prefix?: string;
            /** The URL suffix of the photo. */
            suffix?: string;
            /** The maximum width of the photo. */
            width?: number;
            /** The maximum height of the photo. */
            height?: number;
            /** The photo classifications returned by Foursquare. */
            classifications?: Array<string>;
            /** The tip metadata associated with the photo. */
            tip?: {
              /** The tip identifier. */
              id?: string;
              /** The creation timestamp of the tip. */
              createdAt?: string;
              /** The tip text. */
              text?: string;
              /** The language code of the tip. */
              lang?: string;
              /** The canonical URL of the tip. */
              url?: string;
              /** The number of agreements on the tip. */
              agreeCount?: number;
              /** The number of disagreements on the tip. */
              disagreeCount?: number;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** The popularity score of the place. */
          popularity?: number;
          /** The price tier of the place. */
          price?: number;
          /** The rating score of the place. */
          rating?: number;
          /** The social media metadata of the place. */
          socialMedia?: Record<string, unknown>;
          /** The statistics of the place. */
          stats?: {
            /** The total number of photos. */
            totalPhotos?: number;
            /** The total number of ratings. */
            totalRatings?: number;
            /** The total number of tips. */
            totalTips?: number;
            [key: string]: unknown;
          };
          /** The tastes associated with the place. */
          tastes?: Array<string>;
          /** The telephone number of the place. */
          tel?: string;
          /** The embedded tips of the place. */
          tips?: Array<{
            /** The tip identifier. */
            id?: string;
            /** The creation timestamp of the tip. */
            createdAt?: string;
            /** The tip text. */
            text?: string;
            /** The language code of the tip. */
            lang?: string;
            /** The canonical URL of the tip. */
            url?: string;
            /** The number of agreements on the tip. */
            agreeCount?: number;
            /** The number of disagreements on the tip. */
            disagreeCount?: number;
            [key: string]: unknown;
          }>;
          /** The timezone of the place. */
          timezone?: string;
          /** The website URL of the place. */
          website?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
