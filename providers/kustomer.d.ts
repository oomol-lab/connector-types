import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Kustomer customer with common identity, contact, tag, and custom attribute fields. */
    "kustomer.create_customer": {
      input: {
        /** Kustomer customer attributes accepted by create and update customer endpoints. */
        customer: {
          /**
           * Customer display name.
           * @minLength 1
           */
          name?: string | null;
          /**
           * Kustomer company ID to link to this customer.
           * @minLength 1
           */
          company?: string | null;
          /**
           * Primary external customer ID.
           * @minLength 1
           */
          externalId?: string | null;
          /**
           * Customer username.
           * @minLength 1
           */
          username?: string | null;
          /**
           * Timestamp when the customer signed up.
           * @format date-time
           */
          signedUpAt?: string | null;
          /**
           * Timestamp of the customer's last activity.
           * @format date-time
           */
          lastActivityAt?: string | null;
          /**
           * Timestamp of the customer's last tracked customer activity.
           * @format date-time
           */
          lastCustomerActivityAt?: string | null;
          /**
           * Timestamp when the customer was last seen.
           * @format date-time
           */
          lastSeenAt?: string | null;
          /**
           * Customer avatar URL.
           * @format uri
           */
          avatarUrl?: string | null;
          /**
           * External IDs to attach to this customer.
           * @maxItems 10
           */
          externalIds?: Array<{
            /**
             * External customer ID from another system.
             * @minLength 1
             */
            externalId: string;
            /** Whether this external ID is verified. */
            verified?: boolean;
          }>;
          /**
           * Shared external IDs to attach to this customer.
           * @maxItems 10
           */
          sharedExternalIds?: Array<{
            /**
             * External customer ID from another system.
             * @minLength 1
             */
            externalId: string;
            /** Whether this external ID is verified. */
            verified?: boolean;
          }>;
          /**
           * Email addresses to attach to this customer.
           * @maxItems 10
           */
          emails?: Array<{
            /**
             * Customer email address.
             * @format email
             */
            email: string;
            /** The email label. */
            type?: "home" | "work" | "other";
            /** Whether this email address is verified. */
            verified?: boolean;
          }>;
          /**
           * Shared email addresses to attach to this customer.
           * @maxItems 10
           */
          sharedEmails?: Array<{
            /**
             * Customer email address.
             * @format email
             */
            email: string;
            /** The email label. */
            type?: "home" | "work" | "other";
            /** Whether this email address is verified. */
            verified?: boolean;
          }>;
          /**
           * Phone numbers to attach to this customer.
           * @maxItems 10
           */
          phones?: Array<{
            /**
             * Customer phone number.
             * @minLength 1
             */
            phone: string;
            /** The phone label. */
            type?: "mobile" | "home" | "work" | "fax" | "other";
            /** Whether this phone number is verified. */
            verified?: boolean;
          }>;
          /**
           * Shared phone numbers to attach to this customer.
           * @maxItems 10
           */
          sharedPhones?: Array<{
            /**
             * Customer phone number.
             * @minLength 1
             */
            phone: string;
            /** The phone label. */
            type?: "mobile" | "home" | "work" | "fax" | "other";
            /** Whether this phone number is verified. */
            verified?: boolean;
          }>;
          /**
           * WhatsApp numbers to attach to this customer.
           * @maxItems 10
           */
          whatsapps?: Array<{
            /**
             * Customer WhatsApp phone number.
             * @minLength 1
             */
            phone: string;
            /** The WhatsApp label. */
            type?: "mobile";
            /** Whether this WhatsApp number is verified. */
            verified?: boolean;
          }>;
          /**
           * Facebook identities to attach to this customer.
           * @maxItems 10
           */
          facebookIds?: Array<{
            /**
             * Facebook page ID.
             * @minLength 1
             * @maxLength 255
             */
            pageId: string;
            /**
             * Facebook user ID.
             * @minLength 1
             * @maxLength 255
             */
            userId: string;
            /**
             * Facebook user display name.
             * @minLength 1
             * @maxLength 255
             */
            name?: string;
          }>;
          /**
           * Instagram identities to attach to this customer.
           * @maxItems 10
           */
          instagramIds?: Array<{
            /**
             * Instagram page ID.
             * @minLength 1
             * @maxLength 255
             */
            pageId: string;
            /**
             * Instagram thread ID.
             * @minLength 1
             * @maxLength 255
             */
            threadId: string;
            /**
             * Instagram username.
             * @minLength 1
             * @maxLength 255
             */
            username: string;
            /**
             * Instagram user ID.
             * @minLength 1
             * @maxLength 255
             */
            instagramId?: string;
          }>;
          /**
           * Social identities to attach to this customer.
           * @maxItems 10
           */
          socials?: Array<{
            /** The social network type. */
            type: "twitter" | "facebook" | "instagram" | "linkedin" | "pinterest";
            /**
             * Customer social username.
             * @minLength 1
             */
            username: string;
            /**
             * Customer social user ID.
             * @minLength 1
             */
            userid?: string;
            /**
             * Customer social profile URL.
             * @format uri
             */
            url?: string;
            /** Whether this social identity is verified. */
            verified?: boolean;
          }>;
          /**
           * Shared social identities to attach to this customer.
           * @maxItems 10
           */
          sharedSocials?: Array<{
            /** The social network type. */
            type: "twitter" | "facebook" | "instagram" | "linkedin" | "pinterest";
            /**
             * Customer social username.
             * @minLength 1
             */
            username: string;
            /**
             * Customer social user ID.
             * @minLength 1
             */
            userid?: string;
            /**
             * Customer social profile URL.
             * @format uri
             */
            url?: string;
            /** Whether this social identity is verified. */
            verified?: boolean;
          }>;
          /**
           * URLs to attach to this customer.
           * @maxItems 10
           */
          urls?: Array<{
            /**
             * Customer URL.
             * @format uri
             */
            url: string;
            /** The URL label. */
            type?: "website" | "blog" | "other";
          }>;
          /**
           * Locations to attach to this customer.
           * @maxItems 10
           */
          locations?: Array<{
            /** The location label. */
            type?: "home" | "work" | "other" | null;
            /** Location display name. */
            name?: string | null;
            /**
             * Location street address.
             * @maxLength 256
             */
            address?: string | null;
            /**
             * Additional location street address.
             * @maxLength 256
             */
            address2?: string | null;
            /**
             * Additional location street address.
             * @maxLength 256
             */
            address3?: string | null;
            /** Location latitude. */
            latitude?: number | null;
            /** Location longitude. */
            longitude?: number | null;
            /**
             * Two-letter country code.
             * @minLength 2
             * @maxLength 2
             */
            countryCode?: string | null;
            /**
             * Country name.
             * @maxLength 64
             */
            countryName?: string | null;
            /**
             * Region code.
             * @maxLength 2
             */
            regionCode?: string | null;
            /**
             * Region name.
             * @maxLength 128
             */
            regionName?: string | null;
            /**
             * City name.
             * @maxLength 128
             */
            cityName?: string | null;
            /**
             * Postal code.
             * @maxLength 30
             */
            zipCode?: string | null;
            /**
             * Area code.
             * @maxLength 30
             */
            areaCode?: string | null;
          }>;
          /**
           * Customer locale, such as en_US.
           * @minLength 1
           */
          locale?: string | null;
          /**
           * Customer time zone, such as America/New_York.
           * @minLength 1
           */
          timeZone?: string | null;
          /**
           * Kustomer tag IDs or names to attach to this customer.
           * @maxItems 20
           */
          tags?: Array<string>;
          /** Kustomer customer sentiment score. */
          sentiment?: {
            /** Sentiment polarity. */
            polarity: -1 | 0 | 1;
            /**
             * Sentiment confidence score between -1 and 1.
             * @minimum -1
             * @maximum 1
             */
            confidence: number;
          };
          /** Kustomer custom attributes keyed by custom attribute name. */
          custom?: Record<string, unknown>;
          /**
           * Customer birthday timestamp.
           * @format date-time
           */
          birthdayAt?: string | null;
          /** Customer gender. */
          gender?: "m" | "f" | null;
          /**
           * Timestamp when the customer was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the customer was imported.
           * @format date-time
           */
          importedAt?: string;
          /** Kustomer customer revision number. */
          rev?: number;
          /**
           * Customer default language code.
           * @minLength 1
           */
          defaultLang?: string | null;
        };
      };
      output: {
        /** The Kustomer customer resource or resources returned by the endpoint. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
        /** Kustomer response metadata such as pagination totals. */
        meta?: Record<string, unknown>;
        /** Kustomer JSON:API links returned with the response. */
        links?: Record<string, unknown>;
        /** Kustomer JSON:API included resources returned when include parameters are used. */
        included?: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve one Kustomer customer by customer ID. */
    "kustomer.get_customer": {
      input: {
        /**
         * Kustomer customer ID. A comma-separated list can retrieve multiple customers.
         * @minLength 1
         */
        id: string;
        /**
         * Comma-separated includes. Kustomer documents company as the supported include for customer lookup endpoints.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** The Kustomer customer resource or resources returned by the endpoint. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
        /** Kustomer response metadata such as pagination totals. */
        meta?: Record<string, unknown>;
        /** Kustomer JSON:API links returned with the response. */
        links?: Record<string, unknown>;
        /** Kustomer JSON:API included resources returned when include parameters are used. */
        included?: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve one Kustomer customer by email address. */
    "kustomer.get_customer_by_email": {
      input: {
        /**
         * Customer email address.
         * @minLength 1
         */
        email: string;
        /**
         * Comma-separated includes. Kustomer documents company as the supported include for customer lookup endpoints.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** The Kustomer customer resource or resources returned by the endpoint. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
        /** Kustomer response metadata such as pagination totals. */
        meta?: Record<string, unknown>;
        /** Kustomer JSON:API links returned with the response. */
        links?: Record<string, unknown>;
        /** Kustomer JSON:API included resources returned when include parameters are used. */
        included?: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve one Kustomer customer by external ID. */
    "kustomer.get_customer_by_external_id": {
      input: {
        /**
         * External customer ID from another system.
         * @minLength 1
         */
        externalId: string;
        /**
         * Comma-separated includes. Kustomer documents company as the supported include for customer lookup endpoints.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** The Kustomer customer resource or resources returned by the endpoint. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
        /** Kustomer response metadata such as pagination totals. */
        meta?: Record<string, unknown>;
        /** Kustomer JSON:API links returned with the response. */
        links?: Record<string, unknown>;
        /** Kustomer JSON:API included resources returned when include parameters are used. */
        included?: Array<Record<string, unknown>>;
      };
    };
    /** Retrieve one Kustomer customer by phone number. */
    "kustomer.get_customer_by_phone": {
      input: {
        /**
         * Customer phone number.
         * @minLength 1
         */
        phone: string;
        /**
         * Comma-separated includes. Kustomer documents company as the supported include for customer lookup endpoints.
         * @minLength 1
         */
        include?: string;
      };
      output: {
        /** The Kustomer customer resource or resources returned by the endpoint. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
        /** Kustomer response metadata such as pagination totals. */
        meta?: Record<string, unknown>;
        /** Kustomer JSON:API links returned with the response. */
        links?: Record<string, unknown>;
        /** Kustomer JSON:API included resources returned when include parameters are used. */
        included?: Array<Record<string, unknown>>;
      };
    };
    /** List Kustomer customers with pagination, sorting, and createdAt or updatedAt timestamp filters. */
    "kustomer.list_customers": {
      input: {
        /** Kustomer customer list filters for createdAt and updatedAt timestamp ranges. */
        filter?: {
          /** Filter customers by creation timestamp. */
          createdAt?: {
            /**
             * Return customers with a timestamp greater than this ISO 8601 value.
             * @format date-time
             */
            gt?: string;
            /**
             * Return customers with a timestamp greater than or equal to this ISO 8601 value.
             * @format date-time
             */
            gte?: string;
            /**
             * Return customers with a timestamp less than this ISO 8601 value.
             * @format date-time
             */
            lt?: string;
            /**
             * Return customers with a timestamp less than or equal to this ISO 8601 value.
             * @format date-time
             */
            lte?: string;
          };
          /** Filter customers by last update timestamp. */
          updatedAt?: {
            /**
             * Return customers with a timestamp greater than this ISO 8601 value.
             * @format date-time
             */
            gt?: string;
            /**
             * Return customers with a timestamp greater than or equal to this ISO 8601 value.
             * @format date-time
             */
            gte?: string;
            /**
             * Return customers with a timestamp less than this ISO 8601 value.
             * @format date-time
             */
            lt?: string;
            /**
             * Return customers with a timestamp less than or equal to this ISO 8601 value.
             * @format date-time
             */
            lte?: string;
          };
        };
        /** Sort customers by createdAt or updatedAt, with '-' for descending order. */
        sort?: "createdAt" | "-createdAt" | "updatedAt" | "-updatedAt";
        /**
         * Page number of customer results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of customer results to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
      };
      output: {
        /** The Kustomer customer resources returned on this page. */
        data: Array<Record<string, unknown>>;
        /** Kustomer response metadata such as pagination totals. */
        meta?: Record<string, unknown>;
        /** Kustomer JSON:API links returned with the response. */
        links?: Record<string, unknown>;
        /** Kustomer JSON:API included resources returned when include parameters are used. */
        included?: Array<Record<string, unknown>>;
      };
    };
    /** Search Kustomer customers with Kustomer's JSON search criteria DSL. */
    "kustomer.search_customers": {
      input: {
        /** Kustomer customer search criteria JSON body. */
        query: Record<string, unknown>;
        /**
         * Page number of search results to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of search results to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** Return only matching customer IDs. */
        idsOnly?: boolean;
        /**
         * Saved search ID used to execute a stored query before searching.
         * @minLength 1
         */
        id?: string;
        /** Include intelligent aggregation data in search results. */
        withIntelliAggs?: boolean;
        /** Track an exact total hit count for the search request. */
        trackTotalHits?: boolean;
      };
      output: {
        /** The Kustomer customer resources returned on this page, or customer IDs when idsOnly is true. */
        data: Array<Record<string, unknown> | string>;
        /** Kustomer response metadata such as pagination totals. */
        meta?: Record<string, unknown>;
        /** Kustomer JSON:API links returned with the response. */
        links?: Record<string, unknown>;
        /** Kustomer JSON:API included resources returned when include parameters are used. */
        included?: Array<Record<string, unknown>>;
      };
    };
    /** Update a Kustomer customer with common identity, contact, tag, and custom attribute fields. */
    "kustomer.update_customer": {
      input: {
        /**
         * Kustomer customer ID.
         * @minLength 1
         */
        id: string;
        /** If true, replace the full resource instead of applying merge semantics. */
        replace?: boolean;
        /** Kustomer customer attributes accepted by create and update customer endpoints. */
        customer: {
          /**
           * Customer display name.
           * @minLength 1
           */
          name?: string | null;
          /**
           * Kustomer company ID to link to this customer.
           * @minLength 1
           */
          company?: string | null;
          /**
           * Primary external customer ID.
           * @minLength 1
           */
          externalId?: string | null;
          /**
           * Customer username.
           * @minLength 1
           */
          username?: string | null;
          /**
           * Timestamp when the customer signed up.
           * @format date-time
           */
          signedUpAt?: string | null;
          /**
           * Timestamp of the customer's last activity.
           * @format date-time
           */
          lastActivityAt?: string | null;
          /**
           * Timestamp of the customer's last tracked customer activity.
           * @format date-time
           */
          lastCustomerActivityAt?: string | null;
          /**
           * Timestamp when the customer was last seen.
           * @format date-time
           */
          lastSeenAt?: string | null;
          /**
           * Customer avatar URL.
           * @format uri
           */
          avatarUrl?: string | null;
          /**
           * External IDs to attach to this customer.
           * @maxItems 10
           */
          externalIds?: Array<{
            /**
             * External customer ID from another system.
             * @minLength 1
             */
            externalId: string;
            /** Whether this external ID is verified. */
            verified?: boolean;
          }>;
          /**
           * Shared external IDs to attach to this customer.
           * @maxItems 10
           */
          sharedExternalIds?: Array<{
            /**
             * External customer ID from another system.
             * @minLength 1
             */
            externalId: string;
            /** Whether this external ID is verified. */
            verified?: boolean;
          }>;
          /**
           * Email addresses to attach to this customer.
           * @maxItems 10
           */
          emails?: Array<{
            /**
             * Customer email address.
             * @format email
             */
            email: string;
            /** The email label. */
            type?: "home" | "work" | "other";
            /** Whether this email address is verified. */
            verified?: boolean;
          }>;
          /**
           * Shared email addresses to attach to this customer.
           * @maxItems 10
           */
          sharedEmails?: Array<{
            /**
             * Customer email address.
             * @format email
             */
            email: string;
            /** The email label. */
            type?: "home" | "work" | "other";
            /** Whether this email address is verified. */
            verified?: boolean;
          }>;
          /**
           * Phone numbers to attach to this customer.
           * @maxItems 10
           */
          phones?: Array<{
            /**
             * Customer phone number.
             * @minLength 1
             */
            phone: string;
            /** The phone label. */
            type?: "mobile" | "home" | "work" | "fax" | "other";
            /** Whether this phone number is verified. */
            verified?: boolean;
          }>;
          /**
           * Shared phone numbers to attach to this customer.
           * @maxItems 10
           */
          sharedPhones?: Array<{
            /**
             * Customer phone number.
             * @minLength 1
             */
            phone: string;
            /** The phone label. */
            type?: "mobile" | "home" | "work" | "fax" | "other";
            /** Whether this phone number is verified. */
            verified?: boolean;
          }>;
          /**
           * WhatsApp numbers to attach to this customer.
           * @maxItems 10
           */
          whatsapps?: Array<{
            /**
             * Customer WhatsApp phone number.
             * @minLength 1
             */
            phone: string;
            /** The WhatsApp label. */
            type?: "mobile";
            /** Whether this WhatsApp number is verified. */
            verified?: boolean;
          }>;
          /**
           * Facebook identities to attach to this customer.
           * @maxItems 10
           */
          facebookIds?: Array<{
            /**
             * Facebook page ID.
             * @minLength 1
             * @maxLength 255
             */
            pageId: string;
            /**
             * Facebook user ID.
             * @minLength 1
             * @maxLength 255
             */
            userId: string;
            /**
             * Facebook user display name.
             * @minLength 1
             * @maxLength 255
             */
            name?: string;
          }>;
          /**
           * Instagram identities to attach to this customer.
           * @maxItems 10
           */
          instagramIds?: Array<{
            /**
             * Instagram page ID.
             * @minLength 1
             * @maxLength 255
             */
            pageId: string;
            /**
             * Instagram thread ID.
             * @minLength 1
             * @maxLength 255
             */
            threadId: string;
            /**
             * Instagram username.
             * @minLength 1
             * @maxLength 255
             */
            username: string;
            /**
             * Instagram user ID.
             * @minLength 1
             * @maxLength 255
             */
            instagramId?: string;
          }>;
          /**
           * Social identities to attach to this customer.
           * @maxItems 10
           */
          socials?: Array<{
            /** The social network type. */
            type: "twitter" | "facebook" | "instagram" | "linkedin" | "pinterest";
            /**
             * Customer social username.
             * @minLength 1
             */
            username: string;
            /**
             * Customer social user ID.
             * @minLength 1
             */
            userid?: string;
            /**
             * Customer social profile URL.
             * @format uri
             */
            url?: string;
            /** Whether this social identity is verified. */
            verified?: boolean;
          }>;
          /**
           * Shared social identities to attach to this customer.
           * @maxItems 10
           */
          sharedSocials?: Array<{
            /** The social network type. */
            type: "twitter" | "facebook" | "instagram" | "linkedin" | "pinterest";
            /**
             * Customer social username.
             * @minLength 1
             */
            username: string;
            /**
             * Customer social user ID.
             * @minLength 1
             */
            userid?: string;
            /**
             * Customer social profile URL.
             * @format uri
             */
            url?: string;
            /** Whether this social identity is verified. */
            verified?: boolean;
          }>;
          /**
           * URLs to attach to this customer.
           * @maxItems 10
           */
          urls?: Array<{
            /**
             * Customer URL.
             * @format uri
             */
            url: string;
            /** The URL label. */
            type?: "website" | "blog" | "other";
          }>;
          /**
           * Locations to attach to this customer.
           * @maxItems 10
           */
          locations?: Array<{
            /** The location label. */
            type?: "home" | "work" | "other" | null;
            /** Location display name. */
            name?: string | null;
            /**
             * Location street address.
             * @maxLength 256
             */
            address?: string | null;
            /**
             * Additional location street address.
             * @maxLength 256
             */
            address2?: string | null;
            /**
             * Additional location street address.
             * @maxLength 256
             */
            address3?: string | null;
            /** Location latitude. */
            latitude?: number | null;
            /** Location longitude. */
            longitude?: number | null;
            /**
             * Two-letter country code.
             * @minLength 2
             * @maxLength 2
             */
            countryCode?: string | null;
            /**
             * Country name.
             * @maxLength 64
             */
            countryName?: string | null;
            /**
             * Region code.
             * @maxLength 2
             */
            regionCode?: string | null;
            /**
             * Region name.
             * @maxLength 128
             */
            regionName?: string | null;
            /**
             * City name.
             * @maxLength 128
             */
            cityName?: string | null;
            /**
             * Postal code.
             * @maxLength 30
             */
            zipCode?: string | null;
            /**
             * Area code.
             * @maxLength 30
             */
            areaCode?: string | null;
          }>;
          /**
           * Customer locale, such as en_US.
           * @minLength 1
           */
          locale?: string | null;
          /**
           * Customer time zone, such as America/New_York.
           * @minLength 1
           */
          timeZone?: string | null;
          /**
           * Kustomer tag IDs or names to attach to this customer.
           * @maxItems 20
           */
          tags?: Array<string>;
          /** Kustomer customer sentiment score. */
          sentiment?: {
            /** Sentiment polarity. */
            polarity: -1 | 0 | 1;
            /**
             * Sentiment confidence score between -1 and 1.
             * @minimum -1
             * @maximum 1
             */
            confidence: number;
          };
          /** Kustomer custom attributes keyed by custom attribute name. */
          custom?: Record<string, unknown>;
          /**
           * Customer birthday timestamp.
           * @format date-time
           */
          birthdayAt?: string | null;
          /** Customer gender. */
          gender?: "m" | "f" | null;
          /**
           * Timestamp when the customer was created.
           * @format date-time
           */
          createdAt?: string;
          /**
           * Timestamp when the customer was imported.
           * @format date-time
           */
          importedAt?: string;
          /** Kustomer customer revision number. */
          rev?: number;
          /**
           * Customer default language code.
           * @minLength 1
           */
          defaultLang?: string | null;
        };
      };
      output: {
        /** The Kustomer customer resource or resources returned by the endpoint. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
        /** Kustomer response metadata such as pagination totals. */
        meta?: Record<string, unknown>;
        /** Kustomer JSON:API links returned with the response. */
        links?: Record<string, unknown>;
        /** Kustomer JSON:API included resources returned when include parameters are used. */
        included?: Array<Record<string, unknown>>;
      };
    };
  }
}
