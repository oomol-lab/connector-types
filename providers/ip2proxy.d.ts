import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Detect whether one IPv4 or IPv6 address is a proxy and return the official IP2Proxy lookup payload. */
    "ip2proxy.lookup_ip": {
      input: {
        /** The IPv4 or IPv6 address to look up. */
        ip: string;
        /**
         * The IP2Proxy package code to query. The official API defaults to PX1 when omitted.
         * @default "PX1"
         */
        package: "PX1" | "PX2" | "PX3" | "PX4" | "PX5" | "PX6" | "PX7" | "PX8" | "PX9" | "PX10" | "PX11";
      };
      output: {
        /**
         * The response status string returned by IP2Proxy.
         * @minLength 1
         */
        response: string;
        /** The two-character ISO 3166 country code. */
        countryCode?: string;
        /** The country name. */
        countryName?: string;
        /** The region or state name. */
        regionName?: string;
        /** The city name. */
        cityName?: string;
        /** The ISP or company name. */
        isp?: string;
        /** The internet domain associated with the IP range. */
        domain?: string;
        /** The usage type classification returned by IP2Proxy. */
        usageType?: string;
        /** The autonomous system number. */
        asn?: string;
        /** The autonomous system name. */
        as?: string;
        /** How many days ago the proxy was last seen. */
        lastSeen?: number;
        /** The proxy type returned by IP2Proxy. */
        proxyType?: string;
        /** Whether the IP address is identified as a proxy. */
        isProxy?: string;
        /** The security threat classification returned by IP2Proxy. */
        threat?: string;
        /** The VPN provider name when IP2Proxy has one. */
        provider?: string;
        /** The credit count consumed by the query. */
        creditsConsumed?: number;
        [key: string]: unknown;
      };
    };
  }
}
