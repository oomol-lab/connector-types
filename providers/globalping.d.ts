import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Globalping measurement and return the accepted measurement ID and headers. */
    "globalping.create_measurement": {
      input: {
        /** The Globalping measurement type. */
        type: "ping" | "traceroute" | "dns" | "mtr" | "http";
        /**
         * A publicly reachable measurement target such as a hostname or an IP address.
         * @minLength 1
         */
        target: string;
        /** Whether Globalping should include partial in-progress updates while the measurement runs. */
        in_progress_updates?: boolean;
        /** The location filters used to pick probes. */
        locations?: Array<{
          /** A continent code used to select probes. */
          continent?: "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";
          /**
           * A UN M49 region name used to select probes.
           * @minLength 1
           */
          region?: string;
          /**
           * An ISO 3166-1 alpha-2 country code used to select probes.
           * @minLength 2
           * @maxLength 2
           */
          country?: string;
          /**
           * A state identifier used to select probes when available.
           * @minLength 1
           */
          state?: string;
          /**
           * A city name used to select probes.
           * @minLength 1
           */
          city?: string;
          /**
           * An autonomous system number used to select probes.
           * @exclusiveMinimum 0
           */
          asn?: number;
          /**
           * A network or ISP name used to select probes.
           * @minLength 1
           */
          network?: string;
          /**
           * Additional Globalping tags used to select probes.
           * @minItems 1
           */
          tags?: Array<string>;
          /**
           * A fuzzy Globalping location string such as `Berlin+Germany` or `aws-us-east-1`.
           * @minLength 1
           */
          magic?: string;
          /**
           * The maximum number of probes to pick for this location filter.
           * @minimum 1
           * @maximum 200
           */
          limit?: number;
        }>;
        /**
         * The maximum number of probes to use for the measurement.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /** The type-specific Globalping measurement options. */
        measurement_options?: {
          /**
           * The number of packets to send.
           * @minimum 1
           * @maximum 16
           */
          packets?: number;
          /** The transport protocol used by the ping test. */
          protocol?: "ICMP" | "TCP";
          /**
           * The destination port used when the ping protocol is TCP.
           * @minimum 0
           * @maximum 65535
           */
          port?: number;
          /** The IP version used by the measurement. */
          ip_version?: 4 | 6;
        } | {
          /** The transport protocol used by the traceroute test. */
          protocol?: "ICMP" | "TCP" | "UDP";
          /**
           * The destination port used when the traceroute protocol is TCP.
           * @minimum 0
           * @maximum 65535
           */
          port?: number;
          /** The IP version used by the measurement. */
          ip_version?: 4 | 6;
        } | {
          /** The DNS query configuration. */
          query?: {
            /** The DNS record type requested by the measurement. */
            type?: "A" | "AAAA" | "ANY" | "CNAME" | "DNSKEY" | "DS" | "HTTPS" | "MX" | "NS" | "NSEC" | "PTR" | "RRSIG" | "SOA" | "TXT" | "SRV" | "SVCB";
          };
          /**
           * The DNS resolver hostname or IP address used for the measurement.
           * @minLength 1
           */
          resolver?: string;
          /** The transport protocol used by the DNS test. */
          protocol?: "TCP" | "UDP";
          /**
           * The port number used by the DNS test.
           * @minimum 0
           * @maximum 65535
           */
          port?: number;
          /** The IP version used by the measurement. */
          ip_version?: 4 | 6;
          /** Whether Globalping should trace the DNS delegation path from the root servers. */
          trace?: boolean;
        } | {
          /**
           * The number of packets to send to each hop.
           * @minimum 1
           * @maximum 16
           */
          packets?: number;
          /** The transport protocol used by the MTR test. */
          protocol?: "ICMP" | "TCP" | "UDP";
          /**
           * The destination port used when the MTR protocol is TCP or UDP.
           * @minimum 0
           * @maximum 65535
           */
          port?: number;
          /** The IP version used by the measurement. */
          ip_version?: 4 | 6;
        } | {
          /** The HTTP request configuration. */
          request?: {
            /**
             * An optional override for the HTTP Host header.
             * @minLength 1
             */
            host?: string;
            /**
             * The HTTP request path.
             * @minLength 1
             */
            path?: string;
            /** The HTTP request query string. */
            query?: string;
            /** The HTTP request method. */
            method?: "HEAD" | "GET" | "OPTIONS";
            /** Additional HTTP request headers except Host and User-Agent. */
            headers?: Record<string, string>;
          };
          /**
           * The DNS resolver hostname or IP address used for the HTTP test.
           * @minLength 1
           */
          resolver?: string;
          /** The HTTP transport protocol. */
          protocol?: "HTTP" | "HTTPS" | "HTTP2";
          /**
           * The port used for the HTTP request.
           * @minimum 0
           * @maximum 65535
           */
          port?: number;
          /** The IP version used by the measurement. */
          ip_version?: 4 | 6;
        };
      };
      output: {
        /** The accepted Globalping measurement payload. */
        measurement: {
          /** The accepted Globalping measurement identifier. */
          id: string;
          /** The number of probes accepted for the measurement. */
          probesCount: number;
        };
        /**
         * The absolute measurement URL returned by the Globalping Location response header.
         * @format uri
         */
        location: string;
        /** The rate limit headers returned by the accepted measurement request. */
        rate_limit?: {
          /** The accepted request rate limit quota. */
          limit: number;
          /** The rate limit points consumed by this request. */
          consumed: number;
          /** The rate limit points remaining after this request. */
          remaining: number;
          /** The seconds until the rate limit resets. */
          reset: number;
        };
        /** The credit headers returned by the accepted measurement request. */
        credits?: {
          /** The user credits consumed by this request. */
          consumed?: number;
          /** The user credits remaining after this request. */
          remaining?: number;
        };
        /** The request cost reported by Globalping. */
        request_cost?: number;
      };
    };
    /** Get the current Globalping authenticated rate limits and remaining user credits. */
    "globalping.get_limits": {
      input: Record<string, never>;
      output: {
        /** The Globalping limits response. */
        limits: {
          /** The rate limit groups returned by Globalping. */
          rateLimit: {
            /** The measurement rate limit groups returned by Globalping. */
            measurements: {
              /** The rate limit details for creating measurements. */
              create: {
                /** The rate limit bucket type returned by Globalping. */
                type: "ip" | "user";
                /** The number of limit points available in the current window. */
                limit: number;
                /** The number of limit points remaining in the current window. */
                remaining: number;
                /** The number of seconds until the rate limit resets. */
                reset: number;
              };
            };
          };
          /** The Globalping credits information for authenticated requests. */
          credits?: {
            /** The remaining Globalping user credits. */
            remaining: number;
          };
        };
      };
    };
    /** Get the current status and results of a Globalping measurement by ID. */
    "globalping.get_measurement": {
      input: {
        /**
         * The Globalping measurement identifier to retrieve.
         * @minLength 1
         */
        measurement_id: string;
      };
      output: {
        /** The Globalping measurement response. */
        measurement: {
          /** The Globalping measurement identifier. */
          id: string;
          /** The Globalping measurement type. */
          type: "ping" | "traceroute" | "dns" | "mtr" | "http";
          /** The current Globalping measurement status. */
          status: string;
          /**
           * The ISO timestamp when the measurement was created.
           * @format date-time
           */
          createdAt: string;
          /**
           * The ISO timestamp when the measurement was last updated.
           * @format date-time
           */
          updatedAt: string;
          /** The measurement target. */
          target: string;
          /** The number of probes that ran the measurement. */
          probesCount: number;
          /** The effective probe filters attached to the measurement. */
          locations?: Array<{
            /** A continent code used to select probes. */
            continent?: "AF" | "AN" | "AS" | "EU" | "NA" | "OC" | "SA";
            /**
             * A UN M49 region name used to select probes.
             * @minLength 1
             */
            region?: string;
            /**
             * An ISO 3166-1 alpha-2 country code used to select probes.
             * @minLength 2
             * @maxLength 2
             */
            country?: string;
            /**
             * A state identifier used to select probes when available.
             * @minLength 1
             */
            state?: string;
            /**
             * A city name used to select probes.
             * @minLength 1
             */
            city?: string;
            /**
             * An autonomous system number used to select probes.
             * @exclusiveMinimum 0
             */
            asn?: number;
            /**
             * A network or ISP name used to select probes.
             * @minLength 1
             */
            network?: string;
            /**
             * Additional Globalping tags used to select probes.
             * @minItems 1
             */
            tags?: Array<string>;
            /**
             * A fuzzy Globalping location string such as `Berlin+Germany` or `aws-us-east-1`.
             * @minLength 1
             */
            magic?: string;
            /**
             * The maximum number of probes to pick for this location filter.
             * @minimum 1
             * @maximum 200
             */
            limit?: number;
          }>;
          /** The effective probe limit for the measurement. */
          limit?: number;
          /** The type-specific Globalping measurement options attached to the measurement. */
          measurementOptions?: Record<string, unknown>;
          /** The results returned by Globalping for the measurement. */
          results: Array<{
            /** The probe metadata returned for a Globalping measurement result. */
            probe: {
              /** The probe continent code. */
              continent: string;
              /** The probe country code. */
              country: string;
              /** The probe region name when available. */
              region?: string;
              /** The probe state identifier when available. */
              state?: string;
              /** The probe city name when available. */
              city?: string;
              /** The probe network name when available. */
              network?: string;
              /** The probe autonomous system number when available. */
              asn?: number;
              /** The probe latitude when available. */
              latitude?: number;
              /** The probe longitude when available. */
              longitude?: number;
              /** The probe tags. */
              tags?: Array<string>;
              /** The probe resolvers. */
              resolvers?: Array<string>;
            };
            /** The type-specific Globalping result payload. */
            result: {
              /** The current test status for this measurement result. */
              status: string;
              /** The raw output returned by the finished measurement result. */
              rawOutput?: string;
              [key: string]: unknown;
            };
          }>;
        };
      };
    };
    /** List the Globalping probes that are currently online with their location metadata. */
    "globalping.list_probes": {
      input: Record<string, never>;
      output: {
        /** The currently online Globalping probes. */
        probes: Array<{
          /** The Globalping probe software version. */
          version: string;
          /** The location metadata attached to an online Globalping probe. */
          location: {
            /** The probe continent code. */
            continent: string;
            /** The probe region name. */
            region: string;
            /** The probe country code. */
            country: string;
            /** The probe state identifier when available. */
            state?: string;
            /** The probe city name when available. */
            city?: string;
            /** The probe network name when available. */
            network?: string;
            /** The probe autonomous system number when available. */
            asn?: number;
            /** The probe latitude when available. */
            latitude?: number;
            /** The probe longitude when available. */
            longitude?: number;
          };
          /** The probe tags. */
          tags: Array<string>;
          /** The probe resolvers. */
          resolvers: Array<string>;
        }>;
      };
    };
  }
}
