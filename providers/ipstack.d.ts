import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up multiple IPv4 or IPv6 addresses in one ipstack request. */
    "ipstack.bulk_lookup": {
      input: {
        /**
         * The IPv4 or IPv6 addresses to look up.
         * @minItems 1
         * @maxItems 50
         */
        ips: Array<string>;
        /**
         * Optional ipstack response fields to include, such as country_code or location.country_flag.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: Array<{
        /** The IP address that was looked up. */
        ip?: string;
        /** The IP address type, such as ipv4 or ipv6. */
        type?: string;
        /** The continent code. */
        continent_code?: string;
        /** The continent name. */
        continent_name?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The country name. */
        country_name?: string;
        /** The region or state code. */
        region_code?: string;
        /** The region or state name. */
        region_name?: string;
        /** The city name. */
        city?: string;
        /** The postal or ZIP code. */
        zip?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** Location details returned by ipstack. */
        location?: {
          /** The GeoNames location identifier. */
          geoname_id?: number;
          /** The country capital. */
          capital?: string;
          /** The languages associated with the country. */
          languages?: Array<{
            /** The language code. */
            code?: string;
            /** The language name. */
            name?: string;
            /** The native language name. */
            native?: string;
            [key: string]: unknown;
          }>;
          /**
           * The URL of the country flag image.
           * @format uri
           */
          country_flag?: string;
          /** The country flag emoji. */
          country_flag_emoji?: string;
          /** The Unicode codepoints for the country flag emoji. */
          country_flag_emoji_unicode?: string;
          /** The international calling code. */
          calling_code?: string;
          /** Whether the location is in the European Union. */
          is_eu?: boolean;
          [key: string]: unknown;
        };
        /** Time zone details returned by ipstack. */
        time_zone?: {
          /** The IANA time zone identifier. */
          id?: string;
          /**
           * The current local time in the time zone.
           * @format date-time
           */
          current_time?: string;
          /** The GMT offset in seconds. */
          gmt_offset?: number;
          /** The time zone abbreviation. */
          code?: string;
          /** Whether daylight saving time is active. */
          is_daylight_saving?: boolean;
          [key: string]: unknown;
        };
        /** Currency details returned by ipstack. */
        currency?: {
          /** The ISO currency code. */
          code?: string;
          /** The currency name. */
          name?: string;
          /** The plural currency name. */
          plural?: string;
          /** The currency symbol. */
          symbol?: string;
          /** The native currency symbol. */
          symbol_native?: string;
          [key: string]: unknown;
        };
        /** Connection details returned by ipstack. */
        connection?: {
          /** The autonomous system number. */
          asn?: number;
          /** The internet service provider name. */
          isp?: string;
          [key: string]: unknown;
        };
        /** Security details returned by ipstack. */
        security?: {
          /** Whether the IP address is identified as a proxy. */
          is_proxy?: boolean;
          /** The detected proxy type. */
          proxy_type?: string;
          /** Whether the IP address is identified as a crawler. */
          is_crawler?: boolean;
          /** The detected crawler name. */
          crawler_name?: string;
          /** The detected crawler type. */
          crawler_type?: string;
          /** Whether the IP address is identified as Tor. */
          is_tor?: boolean;
          /** The detected threat level. */
          threat_level?: string;
          /** The detected threat type labels. */
          threat_types?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }>;
    };
    /** Look up the requester IP address and return ipstack geolocation data. */
    "ipstack.lookup_current_ip": {
      input: {
        /**
         * Optional ipstack response fields to include, such as country_code or location.country_flag.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The IP address that was looked up. */
        ip?: string;
        /** The IP address type, such as ipv4 or ipv6. */
        type?: string;
        /** The continent code. */
        continent_code?: string;
        /** The continent name. */
        continent_name?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The country name. */
        country_name?: string;
        /** The region or state code. */
        region_code?: string;
        /** The region or state name. */
        region_name?: string;
        /** The city name. */
        city?: string;
        /** The postal or ZIP code. */
        zip?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** Location details returned by ipstack. */
        location?: {
          /** The GeoNames location identifier. */
          geoname_id?: number;
          /** The country capital. */
          capital?: string;
          /** The languages associated with the country. */
          languages?: Array<{
            /** The language code. */
            code?: string;
            /** The language name. */
            name?: string;
            /** The native language name. */
            native?: string;
            [key: string]: unknown;
          }>;
          /**
           * The URL of the country flag image.
           * @format uri
           */
          country_flag?: string;
          /** The country flag emoji. */
          country_flag_emoji?: string;
          /** The Unicode codepoints for the country flag emoji. */
          country_flag_emoji_unicode?: string;
          /** The international calling code. */
          calling_code?: string;
          /** Whether the location is in the European Union. */
          is_eu?: boolean;
          [key: string]: unknown;
        };
        /** Time zone details returned by ipstack. */
        time_zone?: {
          /** The IANA time zone identifier. */
          id?: string;
          /**
           * The current local time in the time zone.
           * @format date-time
           */
          current_time?: string;
          /** The GMT offset in seconds. */
          gmt_offset?: number;
          /** The time zone abbreviation. */
          code?: string;
          /** Whether daylight saving time is active. */
          is_daylight_saving?: boolean;
          [key: string]: unknown;
        };
        /** Currency details returned by ipstack. */
        currency?: {
          /** The ISO currency code. */
          code?: string;
          /** The currency name. */
          name?: string;
          /** The plural currency name. */
          plural?: string;
          /** The currency symbol. */
          symbol?: string;
          /** The native currency symbol. */
          symbol_native?: string;
          [key: string]: unknown;
        };
        /** Connection details returned by ipstack. */
        connection?: {
          /** The autonomous system number. */
          asn?: number;
          /** The internet service provider name. */
          isp?: string;
          [key: string]: unknown;
        };
        /** Security details returned by ipstack. */
        security?: {
          /** Whether the IP address is identified as a proxy. */
          is_proxy?: boolean;
          /** The detected proxy type. */
          proxy_type?: string;
          /** Whether the IP address is identified as a crawler. */
          is_crawler?: boolean;
          /** The detected crawler name. */
          crawler_name?: string;
          /** The detected crawler type. */
          crawler_type?: string;
          /** Whether the IP address is identified as Tor. */
          is_tor?: boolean;
          /** The detected threat level. */
          threat_level?: string;
          /** The detected threat type labels. */
          threat_types?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Look up a single IPv4 or IPv6 address and return ipstack geolocation data. */
    "ipstack.lookup_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up.
         * @minLength 1
         */
        ip: string;
        /**
         * Optional ipstack response fields to include, such as country_code or location.country_flag.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The IP address that was looked up. */
        ip?: string;
        /** The IP address type, such as ipv4 or ipv6. */
        type?: string;
        /** The continent code. */
        continent_code?: string;
        /** The continent name. */
        continent_name?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The country name. */
        country_name?: string;
        /** The region or state code. */
        region_code?: string;
        /** The region or state name. */
        region_name?: string;
        /** The city name. */
        city?: string;
        /** The postal or ZIP code. */
        zip?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** Location details returned by ipstack. */
        location?: {
          /** The GeoNames location identifier. */
          geoname_id?: number;
          /** The country capital. */
          capital?: string;
          /** The languages associated with the country. */
          languages?: Array<{
            /** The language code. */
            code?: string;
            /** The language name. */
            name?: string;
            /** The native language name. */
            native?: string;
            [key: string]: unknown;
          }>;
          /**
           * The URL of the country flag image.
           * @format uri
           */
          country_flag?: string;
          /** The country flag emoji. */
          country_flag_emoji?: string;
          /** The Unicode codepoints for the country flag emoji. */
          country_flag_emoji_unicode?: string;
          /** The international calling code. */
          calling_code?: string;
          /** Whether the location is in the European Union. */
          is_eu?: boolean;
          [key: string]: unknown;
        };
        /** Time zone details returned by ipstack. */
        time_zone?: {
          /** The IANA time zone identifier. */
          id?: string;
          /**
           * The current local time in the time zone.
           * @format date-time
           */
          current_time?: string;
          /** The GMT offset in seconds. */
          gmt_offset?: number;
          /** The time zone abbreviation. */
          code?: string;
          /** Whether daylight saving time is active. */
          is_daylight_saving?: boolean;
          [key: string]: unknown;
        };
        /** Currency details returned by ipstack. */
        currency?: {
          /** The ISO currency code. */
          code?: string;
          /** The currency name. */
          name?: string;
          /** The plural currency name. */
          plural?: string;
          /** The currency symbol. */
          symbol?: string;
          /** The native currency symbol. */
          symbol_native?: string;
          [key: string]: unknown;
        };
        /** Connection details returned by ipstack. */
        connection?: {
          /** The autonomous system number. */
          asn?: number;
          /** The internet service provider name. */
          isp?: string;
          [key: string]: unknown;
        };
        /** Security details returned by ipstack. */
        security?: {
          /** Whether the IP address is identified as a proxy. */
          is_proxy?: boolean;
          /** The detected proxy type. */
          proxy_type?: string;
          /** Whether the IP address is identified as a crawler. */
          is_crawler?: boolean;
          /** The detected crawler name. */
          crawler_name?: string;
          /** The detected crawler type. */
          crawler_type?: string;
          /** Whether the IP address is identified as Tor. */
          is_tor?: boolean;
          /** The detected threat level. */
          threat_level?: string;
          /** The detected threat type labels. */
          threat_types?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
