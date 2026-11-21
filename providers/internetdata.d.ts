import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve the country, ASN, company, abuse contact, hostname, and Tor, relay, and network flags for one IPv4 or IPv6 address. */
    "internetdata.lookup_ip": {
      input: {
        /** The IPv4 or IPv6 address to query. */
        ip: string;
      };
      output: {
        /** The queried IP address. */
        ip?: string;
        /** The reverse DNS hostname of the IP address. */
        hostname?: string;
        /** Whether the IP address is a bogon (private, reserved, or unallocated). */
        is_bogon?: boolean;
        /** Whether the IP address is a Tor exit node. */
        is_tor?: boolean;
        /** Whether the IP address is a privacy relay egress, such as iCloud Private Relay. */
        is_relay?: boolean;
        /** Whether the IP address is anycast. */
        is_anycast?: boolean;
        /** Whether the IP address belongs to a mobile carrier. */
        is_carrier?: boolean;
        /** Whether the IP address belongs to a satellite network. */
        is_satellite?: boolean;
        /** The country-level location of the IP address. */
        location?: {
          /** The continent code. */
          continent?: string;
          /** The continent name. */
          continent_name?: string;
          /** The ISO 3166-1 alpha-2 country code. */
          country?: string;
          /** The country name. */
          country_name?: string;
          /** The IANA time zone of the country. */
          timezone?: string;
          [key: string]: unknown;
        };
        /** The autonomous system that announces the IP address. */
        asn?: {
          /** The autonomous system number. */
          asn?: number;
          /** The autonomous system name. */
          name?: string;
          /** The autonomous system's domain. */
          domain?: string;
          /** The autonomous system type, such as isp, hosting, business, or education. */
          type?: string;
          /** The announced prefix that contains the IP address. */
          prefix?: string;
          [key: string]: unknown;
        };
        /** The company that operates the IP address. */
        company?: {
          /** The company name. */
          name?: string;
          /** The company domain. */
          domain?: string;
          [key: string]: unknown;
        };
        /** The abuse contact for the IP address. */
        abuse?: {
          /** The abuse contact email address. */
          email?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
