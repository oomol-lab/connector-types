import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Verify the HotspotSystem API key and return the connected operator account. */
    "hotspotsystem.get_current_owner": {
      input: Record<string, never>;
      output: {
        /** The authenticated HotspotSystem operator account. */
        owner: {
          /** The numeric HotspotSystem operator identifier. */
          userId: number;
          /**
           * The operator name returned by HotspotSystem.
           * @minLength 1
           */
          operator: string;
        };
      };
    };
    /** List HotspotSystem customers across all accessible locations. */
    "hotspotsystem.list_customers": {
      input: {
        /**
         * A comma-separated list of HotspotSystem fields to include in the response.
         * @minLength 1
         */
        fields?: string;
        /**
         * One HotspotSystem property name to sort by. Prefix with - for descending order.
         * @minLength 1
         */
        sort?: string;
        /**
         * The page size to request from HotspotSystem.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based offset to request from HotspotSystem.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The HotspotSystem customers returned for the current page. */
        customers: Array<{
          /** The user identifier. */
          id: string | null;
          /** The username returned by HotspotSystem. */
          userName: string | null;
          /** The full name returned by HotspotSystem. */
          name: string | null;
          /** The email address returned by HotspotSystem. */
          email: string | null;
          /** The company name returned by HotspotSystem. */
          companyName: string | null;
          /** The street address returned by HotspotSystem. */
          address: string | null;
          /** The city returned by HotspotSystem. */
          city: string | null;
          /** The state or county returned by HotspotSystem. */
          state: string | null;
          /** The postal code returned by HotspotSystem. */
          zip: string | null;
          /** The two-letter country code returned by HotspotSystem. */
          countryCode: string | null;
          /** The phone number returned by HotspotSystem. */
          phone: string | null;
          /** The social network name returned by HotspotSystem. */
          socialNetwork: string | null;
          /** The social network identifier returned by HotspotSystem. */
          socialId: string | null;
          /** The social network username returned by HotspotSystem. */
          socialUsername: string | null;
          /** The social profile link returned by HotspotSystem. */
          socialLink: string | null;
          /** The social gender field returned by HotspotSystem. */
          socialGender: string | null;
          /** The social age range field returned by HotspotSystem. */
          socialAgeRange: string | null;
          /** The social followers count field returned by HotspotSystem. */
          socialFollowersCount: string | null;
          /** The user creation timestamp returned by HotspotSystem. */
          registeredAt: string | null;
        }>;
        /** Pagination metadata derived from the HotspotSystem Link header. */
        pagination: {
          /** The current page URL from the Link header. */
          self: string | null;
          /** The next page URL from the Link header when available. */
          next: string | null;
          /** The previous page URL from the Link header when available. */
          prev: string | null;
          /**
           * The requested page size parsed from the page links.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The zero-based offset parsed from the current page link.
           * @minimum 0
           */
          offset: number | null;
          /**
           * The zero-based offset for the next page when available.
           * @minimum 0
           */
          nextOffset: number | null;
          /**
           * The zero-based offset for the previous page when available.
           * @minimum 0
           */
          prevOffset: number | null;
        };
      };
    };
    /** List HotspotSystem customers for one specific location. */
    "hotspotsystem.list_location_customers": {
      input: {
        /**
         * The HotspotSystem location identifier.
         * @minLength 1
         */
        locationId: string;
        /**
         * A comma-separated list of HotspotSystem fields to include in the response.
         * @minLength 1
         */
        fields?: string;
        /**
         * One HotspotSystem property name to sort by. Prefix with - for descending order.
         * @minLength 1
         */
        sort?: string;
        /**
         * The page size to request from HotspotSystem.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based offset to request from HotspotSystem.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The HotspotSystem customers returned for the current page. */
        customers: Array<{
          /** The user identifier. */
          id: string | null;
          /** The username returned by HotspotSystem. */
          userName: string | null;
          /** The full name returned by HotspotSystem. */
          name: string | null;
          /** The email address returned by HotspotSystem. */
          email: string | null;
          /** The company name returned by HotspotSystem. */
          companyName: string | null;
          /** The street address returned by HotspotSystem. */
          address: string | null;
          /** The city returned by HotspotSystem. */
          city: string | null;
          /** The state or county returned by HotspotSystem. */
          state: string | null;
          /** The postal code returned by HotspotSystem. */
          zip: string | null;
          /** The two-letter country code returned by HotspotSystem. */
          countryCode: string | null;
          /** The phone number returned by HotspotSystem. */
          phone: string | null;
          /** The social network name returned by HotspotSystem. */
          socialNetwork: string | null;
          /** The social network identifier returned by HotspotSystem. */
          socialId: string | null;
          /** The social network username returned by HotspotSystem. */
          socialUsername: string | null;
          /** The social profile link returned by HotspotSystem. */
          socialLink: string | null;
          /** The social gender field returned by HotspotSystem. */
          socialGender: string | null;
          /** The social age range field returned by HotspotSystem. */
          socialAgeRange: string | null;
          /** The social followers count field returned by HotspotSystem. */
          socialFollowersCount: string | null;
          /** The user creation timestamp returned by HotspotSystem. */
          registeredAt: string | null;
        }>;
        /** Pagination metadata derived from the HotspotSystem Link header. */
        pagination: {
          /** The current page URL from the Link header. */
          self: string | null;
          /** The next page URL from the Link header when available. */
          next: string | null;
          /** The previous page URL from the Link header when available. */
          prev: string | null;
          /**
           * The requested page size parsed from the page links.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The zero-based offset parsed from the current page link.
           * @minimum 0
           */
          offset: number | null;
          /**
           * The zero-based offset for the next page when available.
           * @minimum 0
           */
          nextOffset: number | null;
          /**
           * The zero-based offset for the previous page when available.
           * @minimum 0
           */
          prevOffset: number | null;
        };
      };
    };
    /** List HotspotSystem locations as lightweight id-name options. */
    "hotspotsystem.list_location_options": {
      input: Record<string, never>;
      output: {
        /** The HotspotSystem location options returned by the API. */
        locationOptions: Array<{
          /**
           * The location identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The location display label.
           * @minLength 1
           */
          name: string;
        }>;
      };
    };
    /** List HotspotSystem subscribers for one specific location. */
    "hotspotsystem.list_location_subscribers": {
      input: {
        /**
         * The HotspotSystem location identifier.
         * @minLength 1
         */
        locationId: string;
        /**
         * A comma-separated list of HotspotSystem fields to include in the response.
         * @minLength 1
         */
        fields?: string;
        /**
         * One HotspotSystem property name to sort by. Prefix with - for descending order.
         * @minLength 1
         */
        sort?: string;
        /**
         * The page size to request from HotspotSystem.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based offset to request from HotspotSystem.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The HotspotSystem subscribers returned for the current page. */
        subscribers: Array<{
          /** The user identifier. */
          id: string | null;
          /** The username returned by HotspotSystem. */
          userName: string | null;
          /** The full name returned by HotspotSystem. */
          name: string | null;
          /** The email address returned by HotspotSystem. */
          email: string | null;
          /** The company name returned by HotspotSystem. */
          companyName: string | null;
          /** The street address returned by HotspotSystem. */
          address: string | null;
          /** The city returned by HotspotSystem. */
          city: string | null;
          /** The state or county returned by HotspotSystem. */
          state: string | null;
          /** The postal code returned by HotspotSystem. */
          zip: string | null;
          /** The two-letter country code returned by HotspotSystem. */
          countryCode: string | null;
          /** The phone number returned by HotspotSystem. */
          phone: string | null;
          /** The social network name returned by HotspotSystem. */
          socialNetwork: string | null;
          /** The social network identifier returned by HotspotSystem. */
          socialId: string | null;
          /** The social network username returned by HotspotSystem. */
          socialUsername: string | null;
          /** The social profile link returned by HotspotSystem. */
          socialLink: string | null;
          /** The social gender field returned by HotspotSystem. */
          socialGender: string | null;
          /** The social age range field returned by HotspotSystem. */
          socialAgeRange: string | null;
          /** The social followers count field returned by HotspotSystem. */
          socialFollowersCount: string | null;
          /** The user creation timestamp returned by HotspotSystem. */
          registeredAt: string | null;
        }>;
        /** Pagination metadata derived from the HotspotSystem Link header. */
        pagination: {
          /** The current page URL from the Link header. */
          self: string | null;
          /** The next page URL from the Link header when available. */
          next: string | null;
          /** The previous page URL from the Link header when available. */
          prev: string | null;
          /**
           * The requested page size parsed from the page links.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The zero-based offset parsed from the current page link.
           * @minimum 0
           */
          offset: number | null;
          /**
           * The zero-based offset for the next page when available.
           * @minimum 0
           */
          nextOffset: number | null;
          /**
           * The zero-based offset for the previous page when available.
           * @minimum 0
           */
          prevOffset: number | null;
        };
      };
    };
    /** List HotspotSystem locations owned by the authenticated operator. */
    "hotspotsystem.list_locations": {
      input: {
        /**
         * A comma-separated list of HotspotSystem fields to include in the response.
         * @minLength 1
         */
        fields?: string;
        /**
         * One HotspotSystem property name to sort by. Prefix with - for descending order.
         * @minLength 1
         */
        sort?: string;
        /**
         * The page size to request from HotspotSystem.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based offset to request from HotspotSystem.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The HotspotSystem locations returned for the current page. */
        locations: Array<{
          /**
           * The location identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The location name.
           * @minLength 1
           */
          name: string;
        }>;
        /** Pagination metadata derived from the HotspotSystem Link header. */
        pagination: {
          /** The current page URL from the Link header. */
          self: string | null;
          /** The next page URL from the Link header when available. */
          next: string | null;
          /** The previous page URL from the Link header when available. */
          prev: string | null;
          /**
           * The requested page size parsed from the page links.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The zero-based offset parsed from the current page link.
           * @minimum 0
           */
          offset: number | null;
          /**
           * The zero-based offset for the next page when available.
           * @minimum 0
           */
          nextOffset: number | null;
          /**
           * The zero-based offset for the previous page when available.
           * @minimum 0
           */
          prevOffset: number | null;
        };
      };
    };
    /** List HotspotSystem subscribers across all accessible locations. */
    "hotspotsystem.list_subscribers": {
      input: {
        /**
         * A comma-separated list of HotspotSystem fields to include in the response.
         * @minLength 1
         */
        fields?: string;
        /**
         * One HotspotSystem property name to sort by. Prefix with - for descending order.
         * @minLength 1
         */
        sort?: string;
        /**
         * The page size to request from HotspotSystem.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * The zero-based offset to request from HotspotSystem.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The HotspotSystem subscribers returned for the current page. */
        subscribers: Array<{
          /** The user identifier. */
          id: string | null;
          /** The username returned by HotspotSystem. */
          userName: string | null;
          /** The full name returned by HotspotSystem. */
          name: string | null;
          /** The email address returned by HotspotSystem. */
          email: string | null;
          /** The company name returned by HotspotSystem. */
          companyName: string | null;
          /** The street address returned by HotspotSystem. */
          address: string | null;
          /** The city returned by HotspotSystem. */
          city: string | null;
          /** The state or county returned by HotspotSystem. */
          state: string | null;
          /** The postal code returned by HotspotSystem. */
          zip: string | null;
          /** The two-letter country code returned by HotspotSystem. */
          countryCode: string | null;
          /** The phone number returned by HotspotSystem. */
          phone: string | null;
          /** The social network name returned by HotspotSystem. */
          socialNetwork: string | null;
          /** The social network identifier returned by HotspotSystem. */
          socialId: string | null;
          /** The social network username returned by HotspotSystem. */
          socialUsername: string | null;
          /** The social profile link returned by HotspotSystem. */
          socialLink: string | null;
          /** The social gender field returned by HotspotSystem. */
          socialGender: string | null;
          /** The social age range field returned by HotspotSystem. */
          socialAgeRange: string | null;
          /** The social followers count field returned by HotspotSystem. */
          socialFollowersCount: string | null;
          /** The user creation timestamp returned by HotspotSystem. */
          registeredAt: string | null;
        }>;
        /** Pagination metadata derived from the HotspotSystem Link header. */
        pagination: {
          /** The current page URL from the Link header. */
          self: string | null;
          /** The next page URL from the Link header when available. */
          next: string | null;
          /** The previous page URL from the Link header when available. */
          prev: string | null;
          /**
           * The requested page size parsed from the page links.
           * @minimum 0
           */
          limit: number | null;
          /**
           * The zero-based offset parsed from the current page link.
           * @minimum 0
           */
          offset: number | null;
          /**
           * The zero-based offset for the next page when available.
           * @minimum 0
           */
          nextOffset: number | null;
          /**
           * The zero-based offset for the previous page when available.
           * @minimum 0
           */
          prevOffset: number | null;
        };
      };
    };
  }
}
