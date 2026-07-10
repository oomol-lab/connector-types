import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up IPLocate data for multiple IP addresses in one JSON request and preserve per-IP inline errors. */
    "iplocate.batch_lookup": {
      input: {
        /**
         * The IPv4 or IPv6 addresses to look up. IPLocate allows up to 1,000 IPs per batch request.
         * @minItems 1
         * @maxItems 1000
         */
        ipAddresses: Array<string>;
      };
      output: {
        /** The number of IP addresses submitted to IPLocate. */
        requestedCount: number;
        /** IPLocate batch results keyed by the original input IP address. */
        resultsByIp: Record<string, {
            /** The IP address returned by IPLocate. */
            ip?: string;
            /** The country name. */
            country?: string;
            /** The ISO 3166-1 alpha-2 country code. */
            country_code?: string;
            /** Whether the country is a member of the European Union. */
            is_eu?: boolean;
            /** The city name. */
            city?: string;
            /** The continent name. */
            continent?: string;
            /** The latitude coordinate. */
            latitude?: number;
            /** The longitude coordinate. */
            longitude?: number;
            /** The IANA timezone name. */
            time_zone?: string;
            /** The postal or ZIP code. */
            postal_code?: string;
            /** The state, region, or subdivision name. */
            subdivision?: string;
            /** The ISO 4217 currency code. */
            currency_code?: string;
            /** The international calling code. */
            calling_code?: string;
            /** The network range in CIDR notation. */
            network?: string;
            /** Whether the IP address is identified as anycast. */
            is_anycast?: boolean;
            /** Whether the IP address is identified as satellite internet. */
            is_satellite?: boolean;
            /** The autonomous system details returned by IPLocate. */
            asn?: {
              /** The autonomous system number, such as AS15169. */
              asn?: string;
              /** The announced network route. */
              route?: string;
              /** The network name. */
              netname?: string;
              /** The autonomous system organization name. */
              name?: string;
              /** The ISO 3166-1 alpha-2 country code registered for the ASN. */
              country_code?: string;
              /** The organization domain. */
              domain?: string;
              /** The ASN type, such as isp, hosting, business, education, or government. */
              type?: string;
              /** The regional internet registry. */
              rir?: string;
              [key: string]: unknown;
            };
            /** The privacy and threat flags returned by IPLocate. */
            privacy?: {
              /** Whether the IP is on a known spam or abuse blocklist. */
              is_abuser?: boolean;
              /** Whether the IP is anonymous. */
              is_anonymous?: boolean;
              /** Whether the IP is a bogon or reserved address. */
              is_bogon?: boolean;
              /** Whether the IP belongs to a hosting provider. */
              is_hosting?: boolean;
              /** Whether the IP is using iCloud Private Relay. */
              is_icloud_relay?: boolean;
              /** Whether the IP is using a proxy service. */
              is_proxy?: boolean;
              /** Whether the IP is using Tor. */
              is_tor?: boolean;
              /** Whether the IP is using a VPN service. */
              is_vpn?: boolean;
              [key: string]: unknown;
            };
            /** The company information associated with the IP address. */
            company?: {
              /** The company name. */
              name?: string;
              /** The company domain. */
              domain?: string;
              /** The ISO 3166-1 alpha-2 country code for the company network. */
              country_code?: string;
              /** The company network type. */
              type?: string;
              [key: string]: unknown;
            };
            /** The hosting provider information returned by IPLocate. */
            hosting?: {
              /** The hosting provider name. */
              provider?: string;
              /** The hosting provider domain. */
              domain?: string;
              /** The hosting network range. */
              network?: string;
              /** The hosting region. */
              region?: string;
              /** The hosting service type. */
              service?: string;
              [key: string]: unknown;
            };
            /** The abuse contact information returned by IPLocate. */
            abuse?: {
              /** The abuse contact postal address. */
              address?: string;
              /** The abuse contact country code. */
              country_code?: string;
              /** The abuse contact email address. */
              email?: string;
              /** The abuse contact name. */
              name?: string;
              /** The network range associated with the abuse contact. */
              network?: string;
              /** The abuse contact phone number. */
              phone?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | {
            /** The IPLocate inline error message for this IP address. */
            error?: string;
            [key: string]: unknown;
          }>;
      };
    };
    /** Look up IPLocate geolocation, ASN, privacy, hosting, company, and abuse data for one IP address. */
    "iplocate.lookup_ip": {
      input: {
        /**
         * The IPv4 or IPv6 address to look up.
         * @minLength 1
         */
        ip: string;
        /**
         * The IPLocate response fields to include, such as country_code, asn, or privacy.is_vpn.
         * @minItems 1
         */
        include?: Array<string>;
      };
      output: {
        /** The IPLocate lookup result. */
        result: {
          /** The IP address returned by IPLocate. */
          ip?: string;
          /** The country name. */
          country?: string;
          /** The ISO 3166-1 alpha-2 country code. */
          country_code?: string;
          /** Whether the country is a member of the European Union. */
          is_eu?: boolean;
          /** The city name. */
          city?: string;
          /** The continent name. */
          continent?: string;
          /** The latitude coordinate. */
          latitude?: number;
          /** The longitude coordinate. */
          longitude?: number;
          /** The IANA timezone name. */
          time_zone?: string;
          /** The postal or ZIP code. */
          postal_code?: string;
          /** The state, region, or subdivision name. */
          subdivision?: string;
          /** The ISO 4217 currency code. */
          currency_code?: string;
          /** The international calling code. */
          calling_code?: string;
          /** The network range in CIDR notation. */
          network?: string;
          /** Whether the IP address is identified as anycast. */
          is_anycast?: boolean;
          /** Whether the IP address is identified as satellite internet. */
          is_satellite?: boolean;
          /** The autonomous system details returned by IPLocate. */
          asn?: {
            /** The autonomous system number, such as AS15169. */
            asn?: string;
            /** The announced network route. */
            route?: string;
            /** The network name. */
            netname?: string;
            /** The autonomous system organization name. */
            name?: string;
            /** The ISO 3166-1 alpha-2 country code registered for the ASN. */
            country_code?: string;
            /** The organization domain. */
            domain?: string;
            /** The ASN type, such as isp, hosting, business, education, or government. */
            type?: string;
            /** The regional internet registry. */
            rir?: string;
            [key: string]: unknown;
          };
          /** The privacy and threat flags returned by IPLocate. */
          privacy?: {
            /** Whether the IP is on a known spam or abuse blocklist. */
            is_abuser?: boolean;
            /** Whether the IP is anonymous. */
            is_anonymous?: boolean;
            /** Whether the IP is a bogon or reserved address. */
            is_bogon?: boolean;
            /** Whether the IP belongs to a hosting provider. */
            is_hosting?: boolean;
            /** Whether the IP is using iCloud Private Relay. */
            is_icloud_relay?: boolean;
            /** Whether the IP is using a proxy service. */
            is_proxy?: boolean;
            /** Whether the IP is using Tor. */
            is_tor?: boolean;
            /** Whether the IP is using a VPN service. */
            is_vpn?: boolean;
            [key: string]: unknown;
          };
          /** The company information associated with the IP address. */
          company?: {
            /** The company name. */
            name?: string;
            /** The company domain. */
            domain?: string;
            /** The ISO 3166-1 alpha-2 country code for the company network. */
            country_code?: string;
            /** The company network type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The hosting provider information returned by IPLocate. */
          hosting?: {
            /** The hosting provider name. */
            provider?: string;
            /** The hosting provider domain. */
            domain?: string;
            /** The hosting network range. */
            network?: string;
            /** The hosting region. */
            region?: string;
            /** The hosting service type. */
            service?: string;
            [key: string]: unknown;
          };
          /** The abuse contact information returned by IPLocate. */
          abuse?: {
            /** The abuse contact postal address. */
            address?: string;
            /** The abuse contact country code. */
            country_code?: string;
            /** The abuse contact email address. */
            email?: string;
            /** The abuse contact name. */
            name?: string;
            /** The network range associated with the abuse contact. */
            network?: string;
            /** The abuse contact phone number. */
            phone?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Look up IPLocate geolocation and threat intelligence data for the connector server's outgoing IP address. */
    "iplocate.lookup_self": {
      input: {
        /**
         * The IPLocate response fields to include, such as country_code, asn, or privacy.is_vpn.
         * @minItems 1
         */
        include?: Array<string>;
      };
      output: {
        /** The IPLocate lookup result. */
        result: {
          /** The IP address returned by IPLocate. */
          ip?: string;
          /** The country name. */
          country?: string;
          /** The ISO 3166-1 alpha-2 country code. */
          country_code?: string;
          /** Whether the country is a member of the European Union. */
          is_eu?: boolean;
          /** The city name. */
          city?: string;
          /** The continent name. */
          continent?: string;
          /** The latitude coordinate. */
          latitude?: number;
          /** The longitude coordinate. */
          longitude?: number;
          /** The IANA timezone name. */
          time_zone?: string;
          /** The postal or ZIP code. */
          postal_code?: string;
          /** The state, region, or subdivision name. */
          subdivision?: string;
          /** The ISO 4217 currency code. */
          currency_code?: string;
          /** The international calling code. */
          calling_code?: string;
          /** The network range in CIDR notation. */
          network?: string;
          /** Whether the IP address is identified as anycast. */
          is_anycast?: boolean;
          /** Whether the IP address is identified as satellite internet. */
          is_satellite?: boolean;
          /** The autonomous system details returned by IPLocate. */
          asn?: {
            /** The autonomous system number, such as AS15169. */
            asn?: string;
            /** The announced network route. */
            route?: string;
            /** The network name. */
            netname?: string;
            /** The autonomous system organization name. */
            name?: string;
            /** The ISO 3166-1 alpha-2 country code registered for the ASN. */
            country_code?: string;
            /** The organization domain. */
            domain?: string;
            /** The ASN type, such as isp, hosting, business, education, or government. */
            type?: string;
            /** The regional internet registry. */
            rir?: string;
            [key: string]: unknown;
          };
          /** The privacy and threat flags returned by IPLocate. */
          privacy?: {
            /** Whether the IP is on a known spam or abuse blocklist. */
            is_abuser?: boolean;
            /** Whether the IP is anonymous. */
            is_anonymous?: boolean;
            /** Whether the IP is a bogon or reserved address. */
            is_bogon?: boolean;
            /** Whether the IP belongs to a hosting provider. */
            is_hosting?: boolean;
            /** Whether the IP is using iCloud Private Relay. */
            is_icloud_relay?: boolean;
            /** Whether the IP is using a proxy service. */
            is_proxy?: boolean;
            /** Whether the IP is using Tor. */
            is_tor?: boolean;
            /** Whether the IP is using a VPN service. */
            is_vpn?: boolean;
            [key: string]: unknown;
          };
          /** The company information associated with the IP address. */
          company?: {
            /** The company name. */
            name?: string;
            /** The company domain. */
            domain?: string;
            /** The ISO 3166-1 alpha-2 country code for the company network. */
            country_code?: string;
            /** The company network type. */
            type?: string;
            [key: string]: unknown;
          };
          /** The hosting provider information returned by IPLocate. */
          hosting?: {
            /** The hosting provider name. */
            provider?: string;
            /** The hosting provider domain. */
            domain?: string;
            /** The hosting network range. */
            network?: string;
            /** The hosting region. */
            region?: string;
            /** The hosting service type. */
            service?: string;
            [key: string]: unknown;
          };
          /** The abuse contact information returned by IPLocate. */
          abuse?: {
            /** The abuse contact postal address. */
            address?: string;
            /** The abuse contact country code. */
            country_code?: string;
            /** The abuse contact email address. */
            email?: string;
            /** The abuse contact name. */
            name?: string;
            /** The network range associated with the abuse contact. */
            network?: string;
            /** The abuse contact phone number. */
            phone?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
  }
}
