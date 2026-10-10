import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Look up an autonomous system number, its organization and network prefixes. */
    "greip.lookup_asn": {
      input: {
        /**
         * Autonomous system number, with or without the AS prefix, such as AS6167 or 6167.
         * @minLength 1
         */
        asn: string;
        /** Environment; test returns simulated data, live is the default. */
        mode?: "live" | "test";
      };
      output: {
        /** Autonomous system information. */
        data: {
          /** Autonomous system number. */
          asn: string;
          /** Autonomous system name. */
          name?: string;
          /** Country code. */
          country?: string;
          /** Organization name. */
          org?: string;
          /** Network prefixes advertised by the autonomous system. */
          prefixes?: {
            /** IPv4 network prefixes. */
            ipv4?: Array<string>;
            /** IPv6 network prefixes. */
            ipv6?: Array<string>;
            /** Total number of prefixes. */
            total?: number;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Response status. */
        status: string;
        /** Processing time in milliseconds. */
        executionTime?: number;
        [key: string]: unknown;
      };
    };
    /** Look up country information with optional language, flag, currency and timezone details. */
    "greip.lookup_country": {
      input: {
        /**
         * Two-letter country code, such as GB.
         * @minLength 2
         * @maxLength 2
         */
        CountryCode: string;
        /**
         * Optional country detail modules.
         * @minItems 1
         */
        params?: Array<"language" | "flag" | "currency" | "timezone">;
        /** Environment; test returns simulated data, live is the default. */
        mode?: "live" | "test";
      };
      output: {
        /** Country information and requested detail modules. */
        data: {
          /** ISO country code. */
          countryCode: string;
          /** Country name. */
          countryName?: string;
          /** Capital city. */
          capital?: string;
          /** Country population. */
          population?: number;
          /** International calling code. */
          phoneCode?: string;
          /** Whether the country is an EU member. */
          countryIsEU?: boolean;
          /** Language details. */
          language?: Record<string, unknown>;
          /** Flag emoji and image URLs. */
          flag?: Record<string, unknown>;
          /** Currency details. */
          currency?: Record<string, unknown>;
          /** Timezone details. */
          timezone?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Response status. */
        status: string;
        /** Processing time in milliseconds. */
        executionTime?: number;
        [key: string]: unknown;
      };
    };
    /** Look up an IPv4 or IPv6 address with optional location and security enrichment. */
    "greip.lookup_ip": {
      input: {
        /**
         * IPv4 or IPv6 address to look up.
         * @minLength 1
         */
        ip: string;
        /**
         * Optional enrichment modules; availability depends on the plan.
         * @minItems 1
         */
        params?: Array<"security" | "currency" | "timezone" | "location">;
        /** Response language; EN is the default. */
        lang?: "EN" | "AR" | "DE" | "FR" | "ES" | "JA" | "ZH" | "RU";
        /** Environment; test returns simulated data, live is the default. */
        mode?: "live" | "test";
        /**
         * Optional user identifier for tracking requests in Greip events.
         * @minLength 1
         */
        userID?: string;
      };
      output: {
        /** IP geolocation and optional enrichment modules. */
        data: {
          /** The queried IP address. */
          ip: string;
          /** IP address version. */
          ipType?: string;
          /** ISO country code. */
          countryCode?: string;
          /** Country name. */
          countryName?: string;
          /** City name. */
          cityName?: string;
          /** Latitude coordinate. */
          latitude?: string;
          /** Longitude coordinate. */
          longitude?: string;
          /** Autonomous system details. */
          asn?: Record<string, unknown>;
          /** Proxy, Tor, hosting and other security signals. */
          security?: Record<string, unknown>;
          /** Currency details. */
          currency?: Record<string, unknown>;
          /** Timezone details. */
          timezone?: Record<string, unknown>;
          /** Additional location details. */
          location?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Response status. */
        status: string;
        /** Processing time in milliseconds. */
        executionTime?: number;
        [key: string]: unknown;
      };
    };
  }
}
