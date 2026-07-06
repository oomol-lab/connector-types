import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check whether an IP address is listed on Neutrino security blocklists. */
    "neutrino.check_ip_blocklist": {
      input: {
        /**
         * An IPv4 or IPv6 address. CIDR notation, port numbers, and comma-separated IPs are also accepted by Neutrino.
         * @minLength 1
         */
        ip: string;
        /** Whether to include public VPN provider IP addresses. */
        "vpn-lookup"?: boolean;
      };
      output: {
        /** The IP address that was checked. */
        ip?: string;
        /** Whether the IP hosts a malicious bot or botnet member. */
        "is-bot"?: boolean;
        /** Whether the IP is running exploit scanning software. */
        "is-exploit-bot"?: boolean;
        /** Whether the IP is involved in distributing or running malware. */
        "is-malware"?: boolean;
        /** Whether the IP is running a hostile web spider. */
        "is-spider"?: boolean;
        /** Whether DShield flagged the IP as a significant attack source. */
        "is-dshield"?: boolean;
        /** The number of blocklists the IP is listed on. */
        "list-count"?: number;
        /** Whether the IP is an anonymous web proxy. */
        "is-proxy"?: boolean;
        /** Whether the IP is part of a hijacked netblock. */
        "is-hijacked"?: boolean;
        /** Whether the IP is a Tor node or related service. */
        "is-tor"?: boolean;
        /** Whether the IP is involved in distributing or running spyware. */
        "is-spyware"?: boolean;
        /** Whether the IP hosts spam bot software. */
        "is-spam-bot"?: boolean;
        /** Whether the IP is listed on any blocklist. */
        "is-listed"?: boolean;
        /** Whether the IP belongs to a public VPN provider. */
        "is-vpn"?: boolean;
        /** The Unix time when this IP was last seen on any blocklist. */
        "last-seen"?: number;
        /** Blocklist categories this IP is listed on. */
        blocklists?: Array<string>;
        /** Sensors that detected this IP. */
        sensors?: Array<{
          /** The permanent unique sensor ID. */
          id?: number;
          /** The primary blocklist category this sensor belongs to. */
          blocklist?: string;
          /** Details about the sensor source and malicious activity type. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The CIDR address for this listing when listed. */
        cidr?: string;
        [key: string]: unknown;
      };
    };
    /** Get Neutrino geolocation and reverse-DNS details for an IP address. */
    "neutrino.get_ip_info": {
      input: {
        /**
         * An IPv4 or IPv6 address. CIDR notation is also accepted by Neutrino.
         * @minLength 1
         */
        ip: string;
        /** Whether to run a reverse DNS PTR lookup. */
        "reverse-lookup"?: boolean;
      };
      output: {
        /** The IPv4 or IPv6 address returned. */
        ip?: string;
        /** Whether this is a valid IPv4 or IPv6 address. */
        valid?: boolean;
        /** Whether this is an IPv6 address. */
        "is-v6"?: boolean;
        /** Whether this is an IPv4-mapped IPv6 address. */
        "is-v4-mapped"?: boolean;
        /** Whether this is a bogon, private, local, or reserved IP address. */
        "is-bogon"?: boolean;
        /** The full country name. */
        country?: string;
        /** The ISO 2-letter country code. */
        "country-code"?: string;
        /** The ISO 3-letter country code. */
        "country-code3"?: string;
        /** The ISO 2-letter continent code. */
        "continent-code"?: string;
        /** The ISO 4217 currency code associated with the country. */
        "currency-code"?: string;
        /** The city name when detectable. */
        city?: string;
        /** The region name when detectable. */
        region?: string;
        /** The ISO 3166-2 region code when detectable. */
        "region-code"?: string;
        /** The ISO 2-letter official language code for the country. */
        "language-code"?: string;
        /** The location longitude. */
        longitude?: number;
        /** The location latitude. */
        latitude?: number;
        /** The full hostname when reverse lookup is enabled. */
        hostname?: string;
        /** The host domain when reverse lookup is enabled. */
        "host-domain"?: string;
        /** Timezone details returned by Neutrino. */
        timezone?: {
          /** The IANA timezone ID, or an empty string if no valid timezone was detected. */
          id?: string;
          /** The full timezone name. */
          name?: string;
          /** The timezone abbreviation. */
          abbr?: string;
          /** The current date in the timezone as YYYY-MM-DD. */
          date?: string;
          /** The current time in the timezone. */
          time?: string;
          /** The UTC offset for the timezone in ISO 8601 format. */
          offset?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get Neutrino domain registration, DNS, mail, website, and blocklist details. */
    "neutrino.lookup_domain": {
      input: {
        /**
         * A domain name, hostname, FQDN, URL, HTML link, or email address.
         * @minLength 1
         */
        host: string;
        /** Whether to perform live checks for domains Neutrino has not seen before. */
        live?: boolean;
      };
      output: {
        /** The primary domain name excluding subdomains. */
        domain?: string;
        /** Whether a valid registered domain with DNS NS records was found. */
        valid?: boolean;
        /** The fully qualified domain name. */
        fqdn?: string;
        /** Whether the FQDN is a subdomain of the primary domain. */
        "is-subdomain"?: boolean;
        /** The top-level domain. */
        tld?: string;
        /** The associated ISO 2-letter country code for country-code TLDs. */
        "tld-cc"?: string;
        /** The estimated global traffic rank, or 0 when outside the top one million. */
        rank?: number;
        /** Whether this domain is under a government or military TLD. */
        "is-gov"?: boolean;
        /** Whether this domain is under an OpenNIC TLD. */
        "is-opennic"?: boolean;
        /** Whether this unseen domain is still being processed. */
        "is-pending"?: boolean;
        /** Whether the domain hosts adult content. */
        "is-adult"?: boolean;
        /** Whether the domain is listed on at least one blocklist. */
        "is-malicious"?: boolean;
        /** Blocklist categories this domain is listed on. */
        blocklists?: Array<string>;
        /** Blocklist sensors that detected this domain. */
        sensors?: Array<{
          /** The permanent unique sensor ID. */
          id?: number;
          /** The primary blocklist category this sensor belongs to. */
          blocklist?: string;
          /** Details about the sensor source and malicious activity type. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** The ISO registration or first-seen date, or an empty string. */
        "registered-date"?: string;
        /** The number of days since the domain was registered. */
        age?: number;
        /** The domain registrar name. */
        "registrar-name"?: string;
        /** The IANA registrar ID, or 0 when unavailable. */
        "registrar-id"?: number;
        /** The primary DNS provider domain. */
        "dns-provider"?: string;
        /** The primary email provider domain, or an empty string. */
        "mail-provider"?: string;
        /** The ISO expiry date, or an empty string. */
        "expiry-date"?: string;
        /** The domain mail configuration status. */
        "mail-status"?: string;
        /** The domain website configuration status. */
        "website-status"?: string;
        /** The primary website hosting provider domain, or an empty string. */
        "website-provider"?: string;
        [key: string]: unknown;
      };
    };
    /** Parse, validate, and clean an email address with Neutrino. */
    "neutrino.validate_email": {
      input: {
        /**
         * The email address to parse, validate, and clean.
         * @minLength 1
         */
        email: string;
        /** Whether to automatically attempt to fix typos in the address. */
        "fix-typos"?: boolean;
      };
      output: {
        /** Whether the email has valid syntax, an active domain, correct DNS records, and operational MX servers. */
        valid?: boolean;
        /** The complete email address, corrected when typo fixing is enabled. */
        email?: string;
        /** The domain name of the email address. */
        domain?: string;
        /** The domain name of the email hosting provider. */
        provider?: string;
        /** The first resolved IP address of the primary MX server, or an empty string. */
        "mx-ip"?: string;
        /** Whether the address is from a free email provider. */
        "is-freemail"?: boolean;
        /** Whether the address is from a disposable, temporary, or darknet email service. */
        "is-disposable"?: boolean;
        /** Whether the address likely belongs to a person. */
        "is-personal"?: boolean;
        /** Whether any typos were fixed. */
        "typos-fixed"?: boolean;
        /** Whether the address has RFC syntax errors. */
        "syntax-error"?: boolean;
        /** Whether the address has domain name or DNS errors. */
        "domain-error"?: boolean;
        /** The email domain status returned by Neutrino. */
        "domain-status"?: string;
        [key: string]: unknown;
      };
    };
    /** Parse, validate, format, and locate a phone number with Neutrino. */
    "neutrino.validate_phone": {
      input: {
        /**
         * The phone number in international or local format.
         * @minLength 1
         */
        number: string;
        /**
         * An ISO 3166-1 alpha-2 country code.
         * @minLength 2
         * @maxLength 2
         */
        "country-code"?: string;
        /** A user IP address used to infer the country for local numbers. */
        ip?: string;
      };
      output: {
        /** Whether this is a valid phone number. */
        valid?: boolean;
        /** The number type based on the number prefix. */
        type?: string;
        /** The international calling code. */
        "international-calling-code"?: string;
        /** The number represented in E.164 format. */
        "international-number"?: string;
        /** The number represented in local dialing format. */
        "local-number"?: string;
        /** The phone number location. */
        location?: string;
        /** The phone number country. */
        country?: string;
        /** The phone number country as an ISO 2-letter country code. */
        "country-code"?: string;
        /** The phone number country as an ISO 3-letter country code. */
        "country-code3"?: string;
        /** The ISO 4217 currency code associated with the country. */
        "currency-code"?: string;
        /** Whether this is a mobile number. */
        "is-mobile"?: boolean;
        /** The network or carrier that owns the prefix when available. */
        "prefix-network"?: string;
        [key: string]: unknown;
      };
    };
  }
}
