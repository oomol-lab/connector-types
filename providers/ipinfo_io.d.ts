import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up multiple Lite API IPs or field paths in a single batch request. */
    "ipinfo_io.batch_lite_lookup": {
      input: {
        /**
         * The Lite API queries to send to the batch lookup endpoint.
         * @minItems 1
         * @maxItems 1000
         */
        queries: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Look up multiple IPinfo legacy or Lite-compatible paths in a single batch request through the legacy batch endpoint. */
    "ipinfo_io.batch_lookup": {
      input: {
        /**
         * The IP addresses or field paths to send to the batch lookup endpoint.
         * @minItems 1
         * @maxItems 1000
         */
        ips: Array<string>;
        /** Whether null results should be omitted from the returned map. */
        filter?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Retrieve abuse contact data for a specific IP address when the token includes that dataset. */
    "ipinfo_io.get_abuse_contact": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** Abuse contact data returned by IPinfo when the token has access to it. */
        abuse: {
          /** The postal address of the abuse contact. */
          address?: string;
          /** The country code of the abuse contact. */
          country?: string;
          /** The abuse contact email address. */
          email?: string;
          /** The abuse contact name. */
          name?: string;
          /** The network range in CIDR notation. */
          network?: string;
          /** The abuse contact phone number. */
          phone?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve carrier enrichment data for a specific IP address when the token includes that dataset. */
    "ipinfo_io.get_carrier_info": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** Carrier data returned by IPinfo for mobile network IP addresses. */
        carrier: {
          /** The mobile carrier or network organization name. */
          name?: string;
          /** The mobile country code. */
          mcc?: string;
          /** The mobile network code. */
          mnc?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the city name for a specific IP address. */
    "ipinfo_io.get_city_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The city name returned by IPinfo. */
        city: string;
      };
    };
    /** Retrieve company enrichment data for a specific IP address when the token includes that dataset. */
    "ipinfo_io.get_company_info": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The company or organization name. */
        name?: string;
        /** The primary domain associated with the company. */
        domain?: string;
        /** The organization type, such as business, ISP, education, or hosting. */
        type?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve a single Lookup API core field for the caller's current IP address. */
    "ipinfo_io.get_core_field_by_me": {
      input: {
        /** The Lookup API field path to retrieve for the caller's current IP. */
        field: "ip" | "hostname" | "geo" | "geo/city" | "geo/region" | "geo/region_code" | "geo/country" | "geo/country_code" | "geo/continent" | "geo/continent_code" | "geo/latitude" | "geo/longitude" | "geo/timezone" | "geo/postal_code" | "as" | "as/asn" | "as/name" | "as/domain" | "as/type" | "is_anonymous" | "is_anycast" | "is_hosting" | "is_mobile" | "is_satellite";
      };
      output: {
        /** The returned field value. */
        value: string | number | boolean | null | Record<string, string | number | boolean | null>;
      };
    };
    /** Retrieve the ISO 3166-1 alpha-2 country code for a specific IP address. */
    "ipinfo_io.get_country_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The ISO 3166-1 alpha-2 country code returned by IPinfo. */
        country_code: string;
      };
    };
    /** Retrieve the caller's current public IP address as plain text. */
    "ipinfo_io.get_current_ip": {
      input: Record<string, never>;
      output: {
        /** The caller's current public IP address. */
        ip: string;
      };
    };
    /** Retrieve the full legacy IPinfo profile for the caller's current IP address, including location, ASN, company, privacy, carrier, abuse, and hosted domain data when available. */
    "ipinfo_io.get_current_ip_info": {
      input: Record<string, never>;
      output: {
        /** The IP address that was looked up. */
        ip: string;
        /** The reverse DNS hostname when available. */
        hostname?: string;
        /** Whether the IP address is a bogon or private address. */
        bogon?: boolean;
        /** Whether the IP address is identified as anycast. */
        anycast?: boolean;
        /** The city name. */
        city?: string;
        /** The region or state name. */
        region?: string;
        /** The ISO 3166-1 alpha-2 country code returned by the legacy API. */
        country?: string;
        /** The latitude and longitude pair in `latitude,longitude` format. */
        loc?: string;
        /** The organization summary returned by the legacy API. */
        org?: string;
        /** The postal or ZIP code. */
        postal?: string;
        /** The IANA timezone name. */
        timezone?: string;
        /** ASN data returned by IPinfo, enriched with the standalone ASN endpoint when available. */
        asn?: {
          /** The autonomous system number. */
          asn?: string;
          /** The autonomous system organization name. */
          name?: string;
          /** The autonomous system organization domain. */
          domain?: string;
          /** The route associated with the IP-specific ASN summary. */
          route?: string;
          /** The autonomous system organization type, such as ISP, hosting, or business. */
          type?: string;
          /** The country code registered for the autonomous system. */
          country?: string;
          /** The allocation date for the autonomous system. */
          allocated?: string;
          /** The regional internet registry for the autonomous system. */
          registry?: string;
          /** The number of IP addresses announced by the autonomous system. */
          num_ips?: number;
          /** The IPv4 prefixes returned by the ASN API. */
          prefixes?: Array<Record<string, unknown>>;
          /** The IPv6 prefixes returned by the ASN API. */
          prefixes6?: Array<Record<string, unknown>>;
          /** The peer ASNs. */
          peers?: Array<string>;
          /** The upstream ASNs. */
          upstreams?: Array<string>;
          /** The downstream ASNs. */
          downstreams?: Array<string>;
          [key: string]: unknown;
        };
        /** Company data returned by IPinfo when the token has access to business enrichment. */
        company?: {
          /** The company or organization name. */
          name?: string;
          /** The primary domain associated with the company. */
          domain?: string;
          /** The organization type, such as business, ISP, education, or hosting. */
          type?: string;
          [key: string]: unknown;
        };
        /** Carrier data returned by IPinfo for mobile network IP addresses. */
        carrier?: {
          /** The mobile carrier or network organization name. */
          name?: string;
          /** The mobile country code. */
          mcc?: string;
          /** The mobile network code. */
          mnc?: string;
          [key: string]: unknown;
        };
        /** Privacy detection data returned by IPinfo when the token has access to it. */
        privacy?: {
          /** Whether the IP address is identified as a VPN exit node. */
          vpn?: boolean;
          /** Whether the IP address is identified as a proxy. */
          proxy?: boolean;
          /** Whether the IP address is identified as a Tor exit node. */
          tor?: boolean;
          /** Whether the IP address is identified as a relay service such as iCloud Private Relay. */
          relay?: boolean;
          /** Whether the IP address is identified as a hosting or datacenter network. */
          hosting?: boolean;
          /** The detected privacy service provider name. */
          service?: string;
          [key: string]: unknown;
        };
        /** Abuse contact data returned by IPinfo when the token has access to it. */
        abuse?: {
          /** The postal address of the abuse contact. */
          address?: string;
          /** The country code of the abuse contact. */
          country?: string;
          /** The abuse contact email address. */
          email?: string;
          /** The abuse contact name. */
          name?: string;
          /** The network range in CIDR notation. */
          network?: string;
          /** The abuse contact phone number. */
          phone?: string;
          [key: string]: unknown;
        };
        /** Hosted domain data returned by IPinfo when the token has access to it. */
        domains?: {
          /** The IP address used for the hosted domains lookup. */
          ip?: string;
          /** The total number of hosted domains returned by IPinfo. */
          total?: number;
          /** A sample of hosted domains associated with the IP address. */
          domains?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve the caller's current coordinates in `latitude,longitude` format. */
    "ipinfo_io.get_current_loc": {
      input: Record<string, never>;
      output: {
        /** The coordinates returned by IPinfo in `latitude,longitude` format. */
        location: string;
      };
    };
    /** Retrieve the caller's current region or state name. */
    "ipinfo_io.get_current_region": {
      input: Record<string, never>;
      output: {
        /** The current region or state name. */
        region: string;
      };
    };
    /** Retrieve Lookup API geolocation data for a specific IP address, including city, region, country, coordinates, timezone, and postal metadata. */
    "ipinfo_io.get_geo_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The city name. */
        city?: string;
        /** The region or state name. */
        region?: string;
        /** The region or state code. */
        region_code?: string;
        /** The country name. */
        country?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The continent name. */
        continent?: string;
        /** The two-letter continent code. */
        continent_code?: string;
        /** The latitude coordinate. */
        latitude?: number;
        /** The longitude coordinate. */
        longitude?: number;
        /** The IANA timezone name. */
        timezone?: string;
        /** The postal or ZIP code. */
        postal_code?: string;
        /** The designated market area code. */
        dma_code?: string;
        /** The GeoNames identifier. */
        geoname_id?: number;
        /** The estimated location radius in kilometers. */
        radius?: number;
        /** The date when the geolocation data last changed. */
        last_changed?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the reverse DNS hostname for a specific IP address. */
    "ipinfo_io.get_hostname_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The reverse DNS hostname returned by IPinfo. */
        hostname: string;
      };
    };
    /** Retrieve the requested IP address as plain text through the field filtering endpoint. */
    "ipinfo_io.get_ip_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The requested IP address as returned by IPinfo. */
        ip: string;
      };
    };
    /** Retrieve Lite IP information for a specific IP address or for the caller's current IP when no IP is provided. */
    "ipinfo_io.get_ip_info": {
      input: {
        /** The IPv4 or IPv6 address to look up. Omit this field to use the caller's current IP. */
        ip?: string;
      };
      output: {
        /** The IP address that was looked up. */
        ip: string;
        /** Whether the IP address is a bogon or private address. */
        bogon?: boolean;
        /** The autonomous system number. */
        asn?: string;
        /** The autonomous system organization name. */
        as_name?: string;
        /** The autonomous system organization domain. */
        as_domain?: string;
        /** The country name. */
        country?: string;
        /** The ISO 3166-1 alpha-2 country code. */
        country_code?: string;
        /** The continent name. */
        continent?: string;
        /** The two-letter continent code. */
        continent_code?: string;
        /** The reverse DNS hostname when available. */
        hostname?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the full legacy IPinfo profile for a specific IP address, including location, ASN, company, privacy, carrier, abuse, and hosted domain data when available. */
    "ipinfo_io.get_ip_info_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The IP address that was looked up. */
        ip: string;
        /** The reverse DNS hostname when available. */
        hostname?: string;
        /** Whether the IP address is a bogon or private address. */
        bogon?: boolean;
        /** Whether the IP address is identified as anycast. */
        anycast?: boolean;
        /** The city name. */
        city?: string;
        /** The region or state name. */
        region?: string;
        /** The ISO 3166-1 alpha-2 country code returned by the legacy API. */
        country?: string;
        /** The latitude and longitude pair in `latitude,longitude` format. */
        loc?: string;
        /** The organization summary returned by the legacy API. */
        org?: string;
        /** The postal or ZIP code. */
        postal?: string;
        /** The IANA timezone name. */
        timezone?: string;
        /** ASN data returned by IPinfo, enriched with the standalone ASN endpoint when available. */
        asn?: {
          /** The autonomous system number. */
          asn?: string;
          /** The autonomous system organization name. */
          name?: string;
          /** The autonomous system organization domain. */
          domain?: string;
          /** The route associated with the IP-specific ASN summary. */
          route?: string;
          /** The autonomous system organization type, such as ISP, hosting, or business. */
          type?: string;
          /** The country code registered for the autonomous system. */
          country?: string;
          /** The allocation date for the autonomous system. */
          allocated?: string;
          /** The regional internet registry for the autonomous system. */
          registry?: string;
          /** The number of IP addresses announced by the autonomous system. */
          num_ips?: number;
          /** The IPv4 prefixes returned by the ASN API. */
          prefixes?: Array<Record<string, unknown>>;
          /** The IPv6 prefixes returned by the ASN API. */
          prefixes6?: Array<Record<string, unknown>>;
          /** The peer ASNs. */
          peers?: Array<string>;
          /** The upstream ASNs. */
          upstreams?: Array<string>;
          /** The downstream ASNs. */
          downstreams?: Array<string>;
          [key: string]: unknown;
        };
        /** Company data returned by IPinfo when the token has access to business enrichment. */
        company?: {
          /** The company or organization name. */
          name?: string;
          /** The primary domain associated with the company. */
          domain?: string;
          /** The organization type, such as business, ISP, education, or hosting. */
          type?: string;
          [key: string]: unknown;
        };
        /** Carrier data returned by IPinfo for mobile network IP addresses. */
        carrier?: {
          /** The mobile carrier or network organization name. */
          name?: string;
          /** The mobile country code. */
          mcc?: string;
          /** The mobile network code. */
          mnc?: string;
          [key: string]: unknown;
        };
        /** Privacy detection data returned by IPinfo when the token has access to it. */
        privacy?: {
          /** Whether the IP address is identified as a VPN exit node. */
          vpn?: boolean;
          /** Whether the IP address is identified as a proxy. */
          proxy?: boolean;
          /** Whether the IP address is identified as a Tor exit node. */
          tor?: boolean;
          /** Whether the IP address is identified as a relay service such as iCloud Private Relay. */
          relay?: boolean;
          /** Whether the IP address is identified as a hosting or datacenter network. */
          hosting?: boolean;
          /** The detected privacy service provider name. */
          service?: string;
          [key: string]: unknown;
        };
        /** Abuse contact data returned by IPinfo when the token has access to it. */
        abuse?: {
          /** The postal address of the abuse contact. */
          address?: string;
          /** The country code of the abuse contact. */
          country?: string;
          /** The abuse contact email address. */
          email?: string;
          /** The abuse contact name. */
          name?: string;
          /** The network range in CIDR notation. */
          network?: string;
          /** The abuse contact phone number. */
          phone?: string;
          [key: string]: unknown;
        };
        /** Hosted domain data returned by IPinfo when the token has access to it. */
        domains?: {
          /** The IP address used for the hosted domains lookup. */
          ip?: string;
          /** The total number of hosted domains returned by IPinfo. */
          total?: number;
          /** A sample of hosted domains associated with the IP address. */
          domains?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve a single field from the Lite API for a specific IP address. */
    "ipinfo_io.get_lite_field_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
        /** The Lite API field path to retrieve for the requested IP address. */
        field: "ip" | "asn" | "as_name" | "as_domain" | "country_code" | "country" | "continent_code" | "continent";
      };
      output: {
        /** The returned field value. */
        value: string | number | boolean | null | Record<string, string | number | boolean | null>;
      };
    };
    /** Retrieve coordinates for a specific IP address in `latitude,longitude` format. */
    "ipinfo_io.get_location_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The coordinates returned by IPinfo in `latitude,longitude` format. */
        location: string;
      };
    };
    /** Retrieve the organization summary for a specific IP address. */
    "ipinfo_io.get_org_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The organization summary returned by IPinfo. */
        org: string;
      };
    };
    /** Retrieve a single Lookup API plus field for the caller's current IP address. */
    "ipinfo_io.get_plus_field_by_me": {
      input: {
        /** The Lookup API field path to retrieve for the caller's current IP. */
        field: "ip" | "geo" | "geo/city" | "geo/region" | "geo/region_code" | "geo/country" | "geo/country_code" | "geo/continent" | "geo/continent_code" | "geo/latitude" | "geo/longitude" | "geo/timezone" | "geo/postal_code" | "geo/dma_code" | "geo/geoname_id" | "geo/radius" | "geo/last_changed" | "as" | "as/asn" | "as/name" | "as/domain" | "as/type" | "as/last_changed" | "mobile" | "mobile/name" | "mobile/mcc" | "mobile/mnc" | "anonymous" | "anonymous/name" | "anonymous/is_proxy" | "anonymous/is_relay" | "anonymous/is_tor" | "anonymous/is_vpn" | "is_anonymous" | "is_anycast" | "is_hosting" | "is_mobile" | "is_satellite";
      };
      output: {
        /** The returned field value. */
        value: string | number | boolean | null | Record<string, string | number | boolean | null>;
      };
    };
    /** Retrieve the postal or ZIP code for a specific IP address. */
    "ipinfo_io.get_postal_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The postal or ZIP code returned by IPinfo. */
        postal: string;
      };
    };
    /** Retrieve privacy detection flags for a specific IP address when the token includes privacy enrichment. */
    "ipinfo_io.get_privacy_details": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** Whether the IP address is identified as a VPN exit node. */
        vpn?: boolean;
        /** Whether the IP address is identified as a proxy. */
        proxy?: boolean;
        /** Whether the IP address is identified as a Tor exit node. */
        tor?: boolean;
        /** Whether the IP address is identified as a relay service such as iCloud Private Relay. */
        relay?: boolean;
        /** Whether the IP address is identified as a hosting or datacenter network. */
        hosting?: boolean;
        /** The detected privacy service provider name. */
        service?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the region or state name for a specific IP address. */
    "ipinfo_io.get_region_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The region or state name returned by IPinfo. */
        region: string;
      };
    };
    /** Retrieve the IANA timezone name for a specific IP address. */
    "ipinfo_io.get_timezone_by_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
      };
      output: {
        /** The IANA timezone name returned by IPinfo. */
        timezone: string;
      };
    };
    /** Retrieve account and usage metadata for the current IPinfo token. */
    "ipinfo_io.get_token_info": {
      input: Record<string, never>;
      output: {
        /** The token echoed by the token information endpoint. */
        token?: string;
        /** The account or token label when available. */
        name?: string;
        /** The account email when available. */
        email?: string;
        /** Usage counters returned for the IPinfo token. */
        requests?: {
          /** The number of requests used today. */
          day?: number;
          /** The number of requests used this month. */
          month?: number;
          /** The request limit associated with the token. */
          limit?: number;
          /** The remaining request budget. */
          remaining?: number;
          [key: string]: unknown;
        };
        /** The feature access map returned for the token. */
        features?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Upload up to 500,000 IP addresses to the IPinfo map tool and return the generated report URL. */
    "ipinfo_io.map_ips": {
      input: {
        /**
         * The IP addresses to upload to the IPinfo map tool.
         * @minItems 1
         * @maxItems 500000
         */
        ipAddresses?: Array<string>;
        /** The optional CLI mode flag accepted by the IPinfo map tool. */
        cli?: number;
      };
      output: {
        /** The status returned by the IPinfo map endpoint. */
        status: string;
        /**
         * The generated IPinfo map report URL.
         * @format uri
         */
        reportUrl: string;
      };
    };
  }
}
