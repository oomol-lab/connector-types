import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up up to 100 IP addresses in a single ipdata bulk API request. */
    "ipdata_co.bulk_lookup": {
      input: {
        /**
         * The list of IP addresses to submit to the ipdata bulk lookup endpoint.
         * @minItems 1
         * @maxItems 100
         */
        ips: Array<string>;
      };
      output: Array<{
        /** The IP address that was looked up. */
        ip?: string;
        /** Whether the IP address is located in the European Union. */
        is_eu?: boolean;
        /** The city name. */
        city?: string;
        /** The region or state name. */
        region?: string;
        /** The region or state code. */
        region_code?: string;
        /** The country name. */
        country_name?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The continent name. */
        continent_name?: string;
        /** The continent code. */
        continent_code?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** The postal or ZIP code. */
        postal?: string;
        /** The international calling code. */
        calling_code?: string;
        /** The flag asset returned by ipdata. */
        flag?: string;
        /** The country flag emoji. */
        emoji_flag?: string;
        /** The Unicode codepoints for the country flag emoji. */
        emoji_unicode?: string;
        /** The languages associated with the IP location. */
        languages?: Array<{
          /** The language name. */
          name?: string;
          /** The native language name. */
          native?: string;
          /** The IETF or ISO language code. */
          code?: string;
          [key: string]: unknown;
        }>;
        /** Currency data returned by ipdata. */
        currency?: {
          /** The ISO currency code. */
          code?: string;
          /** The currency name. */
          name?: string;
          /** The currency symbol. */
          symbol?: string;
          /** The native currency symbol. */
          native?: string;
          /** The plural currency name. */
          plural?: string;
          [key: string]: unknown;
        };
        /** Time zone data returned by ipdata. */
        time_zone?: {
          /** The IANA timezone name. */
          name?: string;
          /** The timezone abbreviation. */
          abbr?: string;
          /** The UTC offset string such as "-0700". */
          offset?: string;
          /** Whether daylight saving time is currently in effect. */
          is_dst?: boolean;
          /** The current local time in ISO 8601 format. */
          current_time?: string;
          [key: string]: unknown;
        };
        /** Threat intelligence data returned by ipdata. */
        threat?: {
          /** Whether the IP address is identified as Tor. */
          is_tor?: boolean;
          /** Whether the IP address is identified as iCloud Private Relay. */
          is_icloud_relay?: boolean;
          /** Whether the IP address is identified as a proxy. */
          is_proxy?: boolean;
          /** Whether the IP address is identified as anonymous. */
          is_anonymous?: boolean;
          /** Whether the IP address is identified as a known attacker. */
          is_known_attacker?: boolean;
          /** Whether the IP address is identified as a known abuser. */
          is_known_abuser?: boolean;
          /** Whether the IP address is identified as a threat. */
          is_threat?: boolean;
          /** Whether the IP address is identified as a bogon. */
          is_bogon?: boolean;
          [key: string]: unknown;
        };
        /** Company data returned by ipdata. */
        company?: {
          /** The company or organization name. */
          name?: string;
          /** The primary company domain name. */
          domain?: string;
          /** The organization type returned by ipdata. */
          type?: string;
          /** The network associated with the company. */
          network?: string;
          [key: string]: unknown;
        };
        /** Carrier data returned by ipdata. */
        carrier?: {
          /** The carrier or network operator name. */
          name?: string;
          /** The mobile country code. */
          mcc?: string;
          /** The mobile network code. */
          mnc?: string;
          [key: string]: unknown;
        };
        /** Autonomous system data returned by ipdata. */
        asn?: {
          /** The autonomous system number in AS-prefixed format. */
          asn?: string;
          /** The autonomous system organization name. */
          name?: string;
          /** The autonomous system organization domain. */
          domain?: string;
          /** The route announced by the autonomous system. */
          route?: string;
          /** The autonomous system organization type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The request usage count returned by ipdata. */
        count?: number;
        [key: string]: unknown;
      }>;
    };
    /** Look up the calling_code field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_calling_code": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The international calling code. */
        calling_code: string;
      };
    };
    /** Look up carrier data for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_carrier_by_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The carrier or network operator name. */
        name?: string;
        /** The mobile country code. */
        mcc?: string;
        /** The mobile network code. */
        mnc?: string;
        [key: string]: unknown;
      };
    };
    /** Look up the city field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_city": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The city name. */
        city: string;
      };
    };
    /** Look up company data for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_company_by_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The company or organization name. */
        name?: string;
        /** The primary company domain name. */
        domain?: string;
        /** The organization type returned by ipdata. */
        type?: string;
        /** The network associated with the company. */
        network?: string;
        [key: string]: unknown;
      };
    };
    /** Look up the continent_code field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_continent_code": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The continent code. */
        continent_code: string;
      };
    };
    /** Look up the continent_name field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_continent_name": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The continent name. */
        continent_name: string;
      };
    };
    /** Look up the count field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_count": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The request usage count returned by ipdata. */
        count: number;
      };
    };
    /** Look up the country_code field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_country_code": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The ISO 3166-1 alpha-2 country code. */
        country_code: string;
      };
    };
    /** Look up the country_name field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_country_name": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The country name. */
        country_name: string;
      };
    };
    /** Look up currency data for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_currency_by_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The ISO currency code. */
        code?: string;
        /** The currency name. */
        name?: string;
        /** The currency symbol. */
        symbol?: string;
        /** The native currency symbol. */
        native?: string;
        /** The plural currency name. */
        plural?: string;
        [key: string]: unknown;
      };
    };
    /** Look up the emoji_flag field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_emoji_flag": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The country flag emoji. */
        emoji_flag: string;
      };
    };
    /** Look up the emoji_unicode field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_emoji_unicode": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The Unicode codepoints for the country flag emoji. */
        emoji_unicode: string;
      };
    };
    /** Look up the flag field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_flag": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The flag asset returned by ipdata. */
        flag: string;
      };
    };
    /** Look up the IP field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The IP address that was looked up. */
        ip: string;
      };
    };
    /** Look up the is_eu field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_is_eu": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** Whether the IP address is located in the European Union. */
        is_eu: boolean;
      };
    };
    /** Look up language data for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_languages_by_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: Array<{
        /** The language name. */
        name?: string;
        /** The native language name. */
        native?: string;
        /** The IETF or ISO language code. */
        code?: string;
        [key: string]: unknown;
      }>;
    };
    /** Look up the latitude field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_latitude": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The latitude coordinate. */
        latitude: number;
      };
    };
    /** Look up the longitude field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_longitude": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The longitude coordinate. */
        longitude: number;
      };
    };
    /** Look up the postal field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_postal": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The postal or ZIP code. */
        postal: string;
      };
    };
    /** Look up the region field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_region": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The region or state name. */
        region: string;
      };
    };
    /** Look up the region_code field for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_region_code": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The region or state code. */
        region_code: string;
      };
    };
    /** Look up threat intelligence data for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_threat_by_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** Whether the IP address is identified as Tor. */
        is_tor?: boolean;
        /** Whether the IP address is identified as iCloud Private Relay. */
        is_icloud_relay?: boolean;
        /** Whether the IP address is identified as a proxy. */
        is_proxy?: boolean;
        /** Whether the IP address is identified as anonymous. */
        is_anonymous?: boolean;
        /** Whether the IP address is identified as a known attacker. */
        is_known_attacker?: boolean;
        /** Whether the IP address is identified as a known abuser. */
        is_known_abuser?: boolean;
        /** Whether the IP address is identified as a threat. */
        is_threat?: boolean;
        /** Whether the IP address is identified as a bogon. */
        is_bogon?: boolean;
        [key: string]: unknown;
      };
    };
    /** Look up time zone data for a specific IP address or the caller's current IP address. */
    "ipdata_co.get_time_zone_by_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP.
         * @minLength 1
         */
        ip?: string;
      };
      output: {
        /** The IANA timezone name. */
        name?: string;
        /** The timezone abbreviation. */
        abbr?: string;
        /** The UTC offset string such as "-0700". */
        offset?: string;
        /** Whether daylight saving time is currently in effect. */
        is_dst?: boolean;
        /** The current local time in ISO 8601 format. */
        current_time?: string;
        [key: string]: unknown;
      };
    };
    /** Look up advanced autonomous system details by ASN number with the ipdata ASN endpoint. */
    "ipdata_co.lookup_advanced_asn": {
      input: {
        /**
         * The autonomous system number as a positive integer.
         * @exclusiveMinimum 0
         */
        asn: number;
      };
      output: {
        /** The autonomous system number in AS-prefixed format. */
        asn?: string;
        /** The autonomous system organization name. */
        name?: string;
        /** The autonomous system organization domain. */
        domain?: string;
        /** The route announced by the autonomous system. */
        route?: string;
        /** The autonomous system organization type. */
        type?: string;
        /** The usage classification for the autonomous system. */
        usage?: string;
        /** The IPv4 prefixes announced by the autonomous system. */
        ipv4_prefixes?: Array<string>;
        /** The IPv6 prefixes announced by the autonomous system. */
        ipv6_prefixes?: Array<string>;
        /** The number of IP addresses associated with the autonomous system. */
        num_ips?: string;
        /** The regional internet registry that manages the autonomous system. */
        registry?: string;
        /** The ISO 3166-1 alpha-2 country code for the autonomous system. */
        country?: string;
        /** The registration date for the autonomous system. */
        date?: string;
        /** The allocation status for the autonomous system. */
        status?: string;
        /** The upstream autonomous systems associated with the autonomous system. */
        upstream?: Array<number>;
        /** The downstream autonomous systems associated with the autonomous system. */
        downstream?: Array<number>;
        /** The peer autonomous systems associated with the autonomous system. */
        peers?: Array<number>;
        [key: string]: unknown;
      };
    };
    /** Look up a specific IP address and return only the ASN object from the ipdata response. */
    "ipdata_co.lookup_basic_asn_by_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up.
         * @minLength 1
         */
        ip: string;
      };
      output: {
        /** The autonomous system number in AS-prefixed format. */
        asn?: string;
        /** The autonomous system organization name. */
        name?: string;
        /** The autonomous system organization domain. */
        domain?: string;
        /** The route announced by the autonomous system. */
        route?: string;
        /** The autonomous system organization type. */
        type?: string;
        [key: string]: unknown;
      };
    };
    /** Look up the caller's current IP address with the ipdata main API endpoint. */
    "ipdata_co.lookup_current_ip": {
      input: Record<string, never>;
      output: {
        /** The IP address that was looked up. */
        ip?: string;
        /** Whether the IP address is located in the European Union. */
        is_eu?: boolean;
        /** The city name. */
        city?: string;
        /** The region or state name. */
        region?: string;
        /** The region or state code. */
        region_code?: string;
        /** The country name. */
        country_name?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The continent name. */
        continent_name?: string;
        /** The continent code. */
        continent_code?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** The postal or ZIP code. */
        postal?: string;
        /** The international calling code. */
        calling_code?: string;
        /** The flag asset returned by ipdata. */
        flag?: string;
        /** The country flag emoji. */
        emoji_flag?: string;
        /** The Unicode codepoints for the country flag emoji. */
        emoji_unicode?: string;
        /** The languages associated with the IP location. */
        languages?: Array<{
          /** The language name. */
          name?: string;
          /** The native language name. */
          native?: string;
          /** The IETF or ISO language code. */
          code?: string;
          [key: string]: unknown;
        }>;
        /** Currency data returned by ipdata. */
        currency?: {
          /** The ISO currency code. */
          code?: string;
          /** The currency name. */
          name?: string;
          /** The currency symbol. */
          symbol?: string;
          /** The native currency symbol. */
          native?: string;
          /** The plural currency name. */
          plural?: string;
          [key: string]: unknown;
        };
        /** Time zone data returned by ipdata. */
        time_zone?: {
          /** The IANA timezone name. */
          name?: string;
          /** The timezone abbreviation. */
          abbr?: string;
          /** The UTC offset string such as "-0700". */
          offset?: string;
          /** Whether daylight saving time is currently in effect. */
          is_dst?: boolean;
          /** The current local time in ISO 8601 format. */
          current_time?: string;
          [key: string]: unknown;
        };
        /** Threat intelligence data returned by ipdata. */
        threat?: {
          /** Whether the IP address is identified as Tor. */
          is_tor?: boolean;
          /** Whether the IP address is identified as iCloud Private Relay. */
          is_icloud_relay?: boolean;
          /** Whether the IP address is identified as a proxy. */
          is_proxy?: boolean;
          /** Whether the IP address is identified as anonymous. */
          is_anonymous?: boolean;
          /** Whether the IP address is identified as a known attacker. */
          is_known_attacker?: boolean;
          /** Whether the IP address is identified as a known abuser. */
          is_known_abuser?: boolean;
          /** Whether the IP address is identified as a threat. */
          is_threat?: boolean;
          /** Whether the IP address is identified as a bogon. */
          is_bogon?: boolean;
          [key: string]: unknown;
        };
        /** Company data returned by ipdata. */
        company?: {
          /** The company or organization name. */
          name?: string;
          /** The primary company domain name. */
          domain?: string;
          /** The organization type returned by ipdata. */
          type?: string;
          /** The network associated with the company. */
          network?: string;
          [key: string]: unknown;
        };
        /** Carrier data returned by ipdata. */
        carrier?: {
          /** The carrier or network operator name. */
          name?: string;
          /** The mobile country code. */
          mcc?: string;
          /** The mobile network code. */
          mnc?: string;
          [key: string]: unknown;
        };
        /** Autonomous system data returned by ipdata. */
        asn?: {
          /** The autonomous system number in AS-prefixed format. */
          asn?: string;
          /** The autonomous system organization name. */
          name?: string;
          /** The autonomous system organization domain. */
          domain?: string;
          /** The route announced by the autonomous system. */
          route?: string;
          /** The autonomous system organization type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The request usage count returned by ipdata. */
        count?: number;
        [key: string]: unknown;
      };
    };
    /** Look up the caller's current IP address with the ipdata EU API endpoint. */
    "ipdata_co.lookup_current_ip_eu": {
      input: Record<string, never>;
      output: {
        /** The IP address that was looked up. */
        ip?: string;
        /** Whether the IP address is located in the European Union. */
        is_eu?: boolean;
        /** The city name. */
        city?: string;
        /** The region or state name. */
        region?: string;
        /** The region or state code. */
        region_code?: string;
        /** The country name. */
        country_name?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The continent name. */
        continent_name?: string;
        /** The continent code. */
        continent_code?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** The postal or ZIP code. */
        postal?: string;
        /** The international calling code. */
        calling_code?: string;
        /** The flag asset returned by ipdata. */
        flag?: string;
        /** The country flag emoji. */
        emoji_flag?: string;
        /** The Unicode codepoints for the country flag emoji. */
        emoji_unicode?: string;
        /** The languages associated with the IP location. */
        languages?: Array<{
          /** The language name. */
          name?: string;
          /** The native language name. */
          native?: string;
          /** The IETF or ISO language code. */
          code?: string;
          [key: string]: unknown;
        }>;
        /** Currency data returned by ipdata. */
        currency?: {
          /** The ISO currency code. */
          code?: string;
          /** The currency name. */
          name?: string;
          /** The currency symbol. */
          symbol?: string;
          /** The native currency symbol. */
          native?: string;
          /** The plural currency name. */
          plural?: string;
          [key: string]: unknown;
        };
        /** Time zone data returned by ipdata. */
        time_zone?: {
          /** The IANA timezone name. */
          name?: string;
          /** The timezone abbreviation. */
          abbr?: string;
          /** The UTC offset string such as "-0700". */
          offset?: string;
          /** Whether daylight saving time is currently in effect. */
          is_dst?: boolean;
          /** The current local time in ISO 8601 format. */
          current_time?: string;
          [key: string]: unknown;
        };
        /** Threat intelligence data returned by ipdata. */
        threat?: {
          /** Whether the IP address is identified as Tor. */
          is_tor?: boolean;
          /** Whether the IP address is identified as iCloud Private Relay. */
          is_icloud_relay?: boolean;
          /** Whether the IP address is identified as a proxy. */
          is_proxy?: boolean;
          /** Whether the IP address is identified as anonymous. */
          is_anonymous?: boolean;
          /** Whether the IP address is identified as a known attacker. */
          is_known_attacker?: boolean;
          /** Whether the IP address is identified as a known abuser. */
          is_known_abuser?: boolean;
          /** Whether the IP address is identified as a threat. */
          is_threat?: boolean;
          /** Whether the IP address is identified as a bogon. */
          is_bogon?: boolean;
          [key: string]: unknown;
        };
        /** Company data returned by ipdata. */
        company?: {
          /** The company or organization name. */
          name?: string;
          /** The primary company domain name. */
          domain?: string;
          /** The organization type returned by ipdata. */
          type?: string;
          /** The network associated with the company. */
          network?: string;
          [key: string]: unknown;
        };
        /** Carrier data returned by ipdata. */
        carrier?: {
          /** The carrier or network operator name. */
          name?: string;
          /** The mobile country code. */
          mcc?: string;
          /** The mobile network code. */
          mnc?: string;
          [key: string]: unknown;
        };
        /** Autonomous system data returned by ipdata. */
        asn?: {
          /** The autonomous system number in AS-prefixed format. */
          asn?: string;
          /** The autonomous system organization name. */
          name?: string;
          /** The autonomous system organization domain. */
          domain?: string;
          /** The route announced by the autonomous system. */
          route?: string;
          /** The autonomous system organization type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The request usage count returned by ipdata. */
        count?: number;
        [key: string]: unknown;
      };
    };
    /** Look up a specific IP address with the ipdata main API endpoint. */
    "ipdata_co.lookup_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up.
         * @minLength 1
         */
        ip: string;
      };
      output: {
        /** The IP address that was looked up. */
        ip?: string;
        /** Whether the IP address is located in the European Union. */
        is_eu?: boolean;
        /** The city name. */
        city?: string;
        /** The region or state name. */
        region?: string;
        /** The region or state code. */
        region_code?: string;
        /** The country name. */
        country_name?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The continent name. */
        continent_name?: string;
        /** The continent code. */
        continent_code?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** The postal or ZIP code. */
        postal?: string;
        /** The international calling code. */
        calling_code?: string;
        /** The flag asset returned by ipdata. */
        flag?: string;
        /** The country flag emoji. */
        emoji_flag?: string;
        /** The Unicode codepoints for the country flag emoji. */
        emoji_unicode?: string;
        /** The languages associated with the IP location. */
        languages?: Array<{
          /** The language name. */
          name?: string;
          /** The native language name. */
          native?: string;
          /** The IETF or ISO language code. */
          code?: string;
          [key: string]: unknown;
        }>;
        /** Currency data returned by ipdata. */
        currency?: {
          /** The ISO currency code. */
          code?: string;
          /** The currency name. */
          name?: string;
          /** The currency symbol. */
          symbol?: string;
          /** The native currency symbol. */
          native?: string;
          /** The plural currency name. */
          plural?: string;
          [key: string]: unknown;
        };
        /** Time zone data returned by ipdata. */
        time_zone?: {
          /** The IANA timezone name. */
          name?: string;
          /** The timezone abbreviation. */
          abbr?: string;
          /** The UTC offset string such as "-0700". */
          offset?: string;
          /** Whether daylight saving time is currently in effect. */
          is_dst?: boolean;
          /** The current local time in ISO 8601 format. */
          current_time?: string;
          [key: string]: unknown;
        };
        /** Threat intelligence data returned by ipdata. */
        threat?: {
          /** Whether the IP address is identified as Tor. */
          is_tor?: boolean;
          /** Whether the IP address is identified as iCloud Private Relay. */
          is_icloud_relay?: boolean;
          /** Whether the IP address is identified as a proxy. */
          is_proxy?: boolean;
          /** Whether the IP address is identified as anonymous. */
          is_anonymous?: boolean;
          /** Whether the IP address is identified as a known attacker. */
          is_known_attacker?: boolean;
          /** Whether the IP address is identified as a known abuser. */
          is_known_abuser?: boolean;
          /** Whether the IP address is identified as a threat. */
          is_threat?: boolean;
          /** Whether the IP address is identified as a bogon. */
          is_bogon?: boolean;
          [key: string]: unknown;
        };
        /** Company data returned by ipdata. */
        company?: {
          /** The company or organization name. */
          name?: string;
          /** The primary company domain name. */
          domain?: string;
          /** The organization type returned by ipdata. */
          type?: string;
          /** The network associated with the company. */
          network?: string;
          [key: string]: unknown;
        };
        /** Carrier data returned by ipdata. */
        carrier?: {
          /** The carrier or network operator name. */
          name?: string;
          /** The mobile country code. */
          mcc?: string;
          /** The mobile network code. */
          mnc?: string;
          [key: string]: unknown;
        };
        /** Autonomous system data returned by ipdata. */
        asn?: {
          /** The autonomous system number in AS-prefixed format. */
          asn?: string;
          /** The autonomous system organization name. */
          name?: string;
          /** The autonomous system organization domain. */
          domain?: string;
          /** The route announced by the autonomous system. */
          route?: string;
          /** The autonomous system organization type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The request usage count returned by ipdata. */
        count?: number;
        [key: string]: unknown;
      };
    };
    /** Look up a specific IP address with the ipdata EU API endpoint. */
    "ipdata_co.lookup_ip_eu": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up.
         * @minLength 1
         */
        ip: string;
      };
      output: {
        /** The IP address that was looked up. */
        ip?: string;
        /** Whether the IP address is located in the European Union. */
        is_eu?: boolean;
        /** The city name. */
        city?: string;
        /** The region or state name. */
        region?: string;
        /** The region or state code. */
        region_code?: string;
        /** The country name. */
        country_name?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The continent name. */
        continent_name?: string;
        /** The continent code. */
        continent_code?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** The postal or ZIP code. */
        postal?: string;
        /** The international calling code. */
        calling_code?: string;
        /** The flag asset returned by ipdata. */
        flag?: string;
        /** The country flag emoji. */
        emoji_flag?: string;
        /** The Unicode codepoints for the country flag emoji. */
        emoji_unicode?: string;
        /** The languages associated with the IP location. */
        languages?: Array<{
          /** The language name. */
          name?: string;
          /** The native language name. */
          native?: string;
          /** The IETF or ISO language code. */
          code?: string;
          [key: string]: unknown;
        }>;
        /** Currency data returned by ipdata. */
        currency?: {
          /** The ISO currency code. */
          code?: string;
          /** The currency name. */
          name?: string;
          /** The currency symbol. */
          symbol?: string;
          /** The native currency symbol. */
          native?: string;
          /** The plural currency name. */
          plural?: string;
          [key: string]: unknown;
        };
        /** Time zone data returned by ipdata. */
        time_zone?: {
          /** The IANA timezone name. */
          name?: string;
          /** The timezone abbreviation. */
          abbr?: string;
          /** The UTC offset string such as "-0700". */
          offset?: string;
          /** Whether daylight saving time is currently in effect. */
          is_dst?: boolean;
          /** The current local time in ISO 8601 format. */
          current_time?: string;
          [key: string]: unknown;
        };
        /** Threat intelligence data returned by ipdata. */
        threat?: {
          /** Whether the IP address is identified as Tor. */
          is_tor?: boolean;
          /** Whether the IP address is identified as iCloud Private Relay. */
          is_icloud_relay?: boolean;
          /** Whether the IP address is identified as a proxy. */
          is_proxy?: boolean;
          /** Whether the IP address is identified as anonymous. */
          is_anonymous?: boolean;
          /** Whether the IP address is identified as a known attacker. */
          is_known_attacker?: boolean;
          /** Whether the IP address is identified as a known abuser. */
          is_known_abuser?: boolean;
          /** Whether the IP address is identified as a threat. */
          is_threat?: boolean;
          /** Whether the IP address is identified as a bogon. */
          is_bogon?: boolean;
          [key: string]: unknown;
        };
        /** Company data returned by ipdata. */
        company?: {
          /** The company or organization name. */
          name?: string;
          /** The primary company domain name. */
          domain?: string;
          /** The organization type returned by ipdata. */
          type?: string;
          /** The network associated with the company. */
          network?: string;
          [key: string]: unknown;
        };
        /** Carrier data returned by ipdata. */
        carrier?: {
          /** The carrier or network operator name. */
          name?: string;
          /** The mobile country code. */
          mcc?: string;
          /** The mobile network code. */
          mnc?: string;
          [key: string]: unknown;
        };
        /** Autonomous system data returned by ipdata. */
        asn?: {
          /** The autonomous system number in AS-prefixed format. */
          asn?: string;
          /** The autonomous system organization name. */
          name?: string;
          /** The autonomous system organization domain. */
          domain?: string;
          /** The route announced by the autonomous system. */
          route?: string;
          /** The autonomous system organization type. */
          type?: string;
          [key: string]: unknown;
        };
        /** The request usage count returned by ipdata. */
        count?: number;
        [key: string]: unknown;
      };
    };
  }
}
