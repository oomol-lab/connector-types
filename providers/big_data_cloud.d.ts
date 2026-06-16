import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get country-level BigDataCloud geolocation data for an IP address. */
    "big_data_cloud.get_country_by_ip": {
      input: {
        /** Optional IPv4 or IPv6 address to query. If omitted, BigDataCloud uses the connector server IP. */
        ip?: string;
        /**
         * Optional ISO 639-1 language code used to localize locality names, or `default` for the first administrative language.
         * @pattern ^([A-Za-z]{2}|default)$
         */
        localityLanguage?: string;
      };
      output: {
        /** The resolved IP address. */
        ip: string;
        /** The locality language that BigDataCloud applied to this response. */
        localityLanguageRequested: string;
        /** Whether the IP address is globally routable on the public Internet. */
        isReachableGlobally: boolean;
        /** The country details returned for the IP address. */
        country: {
          /** The ISO 3166-1 alpha-2 country code. */
          isoAlpha2: string;
          /** The ISO 3166-1 alpha-3 country code. */
          isoAlpha3: string;
          /** The localized country name. */
          name: string;
          /** The Unicode flag emoji for the country. */
          countryFlagEmoji?: string;
          [key: string]: unknown;
        };
        /** The UTC timestamp when BigDataCloud last updated this IP. */
        lastUpdated: string;
        [key: string]: unknown;
      };
    };
    /** Get BigDataCloud network and ASN details for an IP address. */
    "big_data_cloud.get_network_by_ip": {
      input: {
        /** Optional IPv4 or IPv6 address to query. If omitted, BigDataCloud uses the connector server IP. */
        ip?: string;
        /**
         * Optional ISO 639-1 language code used to localize locality names, or `default` for the first administrative language.
         * @pattern ^([A-Za-z]{2}|default)$
         */
        localityLanguage?: string;
      };
      output: {
        /** The resolved IP address. */
        ip: string;
        /** The regional internet registry that manages the network block. */
        registry: string;
        /** The allocation status of the network block. */
        registryStatus: string;
        /** The ISO 3166-1 alpha-2 country code registered for the network. */
        registeredCountry: string;
        /** The localized country name registered for the network. */
        registeredCountryName: string;
        /** The organization that the network block is registered to. */
        organisation?: string;
        /** Whether the network is reachable on the public Internet. */
        isReachableGlobally: boolean;
        /** Whether the IP belongs to a bogon range announced on the global table. */
        isBogon: boolean;
        /** The detected BGP prefix for the network. */
        bgpPrefix?: string;
        /** The autonomous systems announcing the network. */
        carriers?: Array<{
          /** The autonomous system number in prefixed string form. */
          asn: string;
          /** The autonomous system number as an integer. */
          asnNumeric: number;
          /** The organization registered for the autonomous system. */
          organisation: string;
          /** The short network name of the autonomous system. */
          name: string;
          /** The global rank of the autonomous system. */
          rank?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get BigDataCloud timezone data for an IP address. */
    "big_data_cloud.get_timezone_by_ip": {
      input: {
        /** Optional IPv4 or IPv6 address to query. If omitted, BigDataCloud uses the connector server IP. */
        ip?: string;
        /**
         * Optional Unix time reference in seconds used to evaluate timezone and DST state.
         * @minimum 0
         */
        utcReference?: number;
      };
      output: {
        /** The IANA timezone identifier. */
        ianaTimeId: string;
        /** The human-readable timezone display name. */
        displayName: string;
        /** The full timezone name adjusted for daylight saving time. */
        effectiveTimeZoneFull: string;
        /** The abbreviated timezone name adjusted for daylight saving time. */
        effectiveTimeZoneShort: string;
        /** The timezone offset from UTC in seconds. */
        utcOffsetSeconds: number;
        /** The timezone offset from UTC as a string. */
        utcOffset: string;
        /** Whether daylight saving time is currently in effect. */
        isDaylightSavingTime: boolean;
        /** The local time in ISO 8601 format. */
        localTime: string;
        /** The UTC time in ISO 8601 format when a valid UTC reference is supplied. */
        utcTime?: string;
        [key: string]: unknown;
      };
    };
    /** Reverse geocode coordinates and return timezone data from BigDataCloud. */
    "big_data_cloud.reverse_geocode_with_timezone": {
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
         * Optional ISO 639-1 language code used to localize locality names, or `default` for the first administrative language.
         * @pattern ^([A-Za-z]{2}|default)$
         */
        localityLanguage?: string;
      };
      output: {
        /** The requested latitude. */
        latitude: number;
        /** The requested longitude. */
        longitude: number;
        /** The locality language that BigDataCloud applied to this response. */
        localityLanguageRequested: string;
        /** The localized continent name. */
        continent: string;
        /** The ISO continent code. */
        continentCode: string;
        /** The localized country name. */
        countryName: string;
        /** The ISO 3166-1 alpha-2 country code. */
        countryCode: string;
        /** The localized principal subdivision name. */
        principalSubdivision: string;
        /** The ISO 3166-2 principal subdivision code. */
        principalSubdivisionCode: string;
        /** The most significant populated place for the coordinates. */
        city: string;
        /** The most granular named locality for the coordinates. */
        locality: string;
        /** The postcode for the coordinates when available. */
        postcode?: string;
        /** The Open Location Code for the coordinates. */
        plusCode: string;
        /** The locality hierarchy returned by BigDataCloud. */
        localityInfo: Record<string, unknown>;
        /** The timezone object returned for the coordinates. */
        timeZone: {
          /** The IANA timezone identifier. */
          ianaTimeId: string;
          /** The human-readable timezone display name. */
          displayName: string;
          /** The full timezone name adjusted for daylight saving time. */
          effectiveTimeZoneFull: string;
          /** The abbreviated timezone name adjusted for daylight saving time. */
          effectiveTimeZoneShort: string;
          /** The timezone offset from UTC in seconds. */
          utcOffsetSeconds: number;
          /** The timezone offset from UTC as a string. */
          utcOffset: string;
          /** Whether daylight saving time is currently in effect. */
          isDaylightSavingTime: boolean;
          /** The local time in ISO 8601 format. */
          localTime: string;
          /** The UTC time in ISO 8601 format when a valid UTC reference is supplied. */
          utcTime?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
