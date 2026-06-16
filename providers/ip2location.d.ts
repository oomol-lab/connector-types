import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve WHOIS registration details for one domain. */
    "ip2location.get_domain_whois": {
      input: {
        /**
         * The domain name to query.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** The queried domain name. */
        domain?: string;
        /** The registry identifier returned by IP2WHOIS. */
        domain_id?: string;
        /** The domain status or statuses returned by IP2WHOIS. */
        status?: string | Array<string>;
        /** The domain creation timestamp. */
        create_date?: string;
        /** The domain update timestamp. */
        update_date?: string;
        /** The domain expiration timestamp. */
        expire_date?: string;
        /** The age of the domain in days. */
        domain_age?: number;
        /** The WHOIS server hostname. */
        whois_server?: string;
        /** Registrar details returned by IP2WHOIS. */
        registrar?: {
          /** The registrar IANA identifier returned by IP2WHOIS. */
          iana_id?: string;
          /** The registrar name returned by IP2WHOIS. */
          name?: string;
          /** The registrar website URL returned by IP2WHOIS. */
          url?: string;
          [key: string]: unknown;
        };
        /** One WHOIS contact object returned by IP2WHOIS. */
        registrant?: {
          /** The contact name returned by the WHOIS record. */
          name?: string;
          /** The organization name returned by the WHOIS record. */
          organization?: string;
          /** The street address returned by the WHOIS record. */
          street_address?: string;
          /** The city returned by the WHOIS record. */
          city?: string;
          /** The region, state, or province returned by the WHOIS record. */
          region?: string;
          /** The postal code returned by the WHOIS record. */
          zip_code?: string;
          /** The country code returned by the WHOIS record. */
          country?: string;
          /** The phone number returned by the WHOIS record. */
          phone?: string;
          /** The fax number returned by the WHOIS record. */
          fax?: string;
          /** The email address returned by the WHOIS record. */
          email?: string;
          [key: string]: unknown;
        };
        /** One WHOIS contact object returned by IP2WHOIS. */
        admin?: {
          /** The contact name returned by the WHOIS record. */
          name?: string;
          /** The organization name returned by the WHOIS record. */
          organization?: string;
          /** The street address returned by the WHOIS record. */
          street_address?: string;
          /** The city returned by the WHOIS record. */
          city?: string;
          /** The region, state, or province returned by the WHOIS record. */
          region?: string;
          /** The postal code returned by the WHOIS record. */
          zip_code?: string;
          /** The country code returned by the WHOIS record. */
          country?: string;
          /** The phone number returned by the WHOIS record. */
          phone?: string;
          /** The fax number returned by the WHOIS record. */
          fax?: string;
          /** The email address returned by the WHOIS record. */
          email?: string;
          [key: string]: unknown;
        };
        /** One WHOIS contact object returned by IP2WHOIS. */
        tech?: {
          /** The contact name returned by the WHOIS record. */
          name?: string;
          /** The organization name returned by the WHOIS record. */
          organization?: string;
          /** The street address returned by the WHOIS record. */
          street_address?: string;
          /** The city returned by the WHOIS record. */
          city?: string;
          /** The region, state, or province returned by the WHOIS record. */
          region?: string;
          /** The postal code returned by the WHOIS record. */
          zip_code?: string;
          /** The country code returned by the WHOIS record. */
          country?: string;
          /** The phone number returned by the WHOIS record. */
          phone?: string;
          /** The fax number returned by the WHOIS record. */
          fax?: string;
          /** The email address returned by the WHOIS record. */
          email?: string;
          [key: string]: unknown;
        };
        /** One WHOIS contact object returned by IP2WHOIS. */
        billing?: {
          /** The contact name returned by the WHOIS record. */
          name?: string;
          /** The organization name returned by the WHOIS record. */
          organization?: string;
          /** The street address returned by the WHOIS record. */
          street_address?: string;
          /** The city returned by the WHOIS record. */
          city?: string;
          /** The region, state, or province returned by the WHOIS record. */
          region?: string;
          /** The postal code returned by the WHOIS record. */
          zip_code?: string;
          /** The country code returned by the WHOIS record. */
          country?: string;
          /** The phone number returned by the WHOIS record. */
          phone?: string;
          /** The fax number returned by the WHOIS record. */
          fax?: string;
          /** The email address returned by the WHOIS record. */
          email?: string;
          [key: string]: unknown;
        };
        /** The authoritative nameservers for the domain. */
        nameservers?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Retrieve geolocation and network metadata for one IPv4 or IPv6 address. */
    "ip2location.get_ip_geolocation": {
      input: {
        /** The IPv4 or IPv6 address to query. */
        ip: string;
        /** The IP2Location-supported language code for translated place names, including regional variants such as zh-cn and zh-tw. */
        lang?: "ar" | "cs" | "da" | "de" | "en" | "es" | "et" | "fi" | "fr" | "ga" | "it" | "ja" | "ko" | "ms" | "nl" | "pt" | "ru" | "sv" | "tr" | "vi" | "zh-cn" | "zh-tw";
      };
      output: {
        /** The queried IP address. */
        ip?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The country name. */
        country_name?: string;
        /** The region or state name. */
        region_name?: string;
        /** The city name. */
        city_name?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** The postal or ZIP code. */
        zip_code?: string;
        /** The UTC offset returned by IP2Location.io. */
        time_zone?: string;
        /** The autonomous system number. */
        asn?: string;
        /** The autonomous system name. */
        as?: string;
        /** The internet service provider name. */
        isp?: string;
        /** The primary domain associated with the IP. */
        domain?: string;
        /** The connection speed category returned by IP2Location.io. */
        net_speed?: string;
        /** The international direct dialing code. */
        idd_code?: string;
        /** The local area code. */
        area_code?: string;
        /** The weather station code. */
        weather_station_code?: string;
        /** The weather station name. */
        weather_station_name?: string;
        /** The elevation in meters. */
        elevation?: number;
        /** The IP usage type returned by IP2Location.io. */
        usage_type?: string;
        /** Whether the IP address is identified as a proxy. */
        is_proxy?: boolean;
        [key: string]: unknown;
      };
    };
    /** List the hosted domains associated with one IPv4 or IPv6 address. */
    "ip2location.list_hosted_domains": {
      input: {
        /** The IPv4 or IPv6 address to query. */
        ip: string;
        /**
         * The 1-based result page to fetch.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /**
         * The queried IP address.
         * @minLength 1
         */
        ip: string;
        /** The total number of hosted domains. */
        total_domains: number;
        /** The current result page. */
        page: number;
        /** The number of domains returned per page. */
        per_page: number;
        /** The total number of result pages. */
        total_pages: number;
        /** The hosted domain names returned for the queried IP. */
        domains: Array<string>;
      };
    };
  }
}
