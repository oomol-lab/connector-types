import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the Webshare account profile for the connected API key. */
    "webshare.get_profile": {
      input: Record<string, never>;
      output: {
        /** A Webshare user profile. */
        profile: {
          /** The Webshare user ID. */
          id?: number;
          /**
           * The email address of the Webshare user.
           * @format email
           */
          email?: string;
          /** The user's first name. */
          first_name?: string | null;
          /** The user's last name. */
          last_name?: string | null;
          /**
           * When the user last logged in.
           * @format date-time
           */
          last_login?: string | null;
          /** The user's configured timezone. */
          timezone?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get the Webshare proxy configuration for a plan. */
    "webshare.get_proxy_config": {
      input: {
        /**
         * The Webshare plan ID whose proxy config should be returned.
         * @minLength 1
         */
        planId: string;
      };
      output: {
        /** A Webshare proxy configuration. */
        proxyConfig: {
          /** The request timeout in seconds. */
          request_timeout?: number;
          /** The request idle timeout in seconds. */
          request_idle_timeout?: number;
          /** Country codes enabled for IP authorization. */
          ip_authorization_country_codes?: Array<string>;
          /** The city enabled for IP authorization. */
          ip_authorization_city?: string | null;
          /** Whether invalid proxies are automatically replaced. */
          auto_replace_invalid_proxies?: boolean;
          /** Whether proxies with low country confidence are automatically replaced. */
          auto_replace_low_country_confidence_proxies?: boolean;
          /** Whether out-of-rotation proxies are automatically replaced. */
          auto_replace_out_of_rotation_proxies?: boolean;
          /** Whether proxies that fail site checks are automatically replaced. */
          auto_replace_failed_site_check_proxies?: boolean;
          /** The token used by Webshare proxy-list download URLs. */
          proxy_list_download_token?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Webshare proxies with official mode, pagination, and filter options. */
    "webshare.list_proxies": {
      input: {
        /** The Webshare proxy list mode. */
        mode: "direct" | "backbone";
        /**
         * The Webshare plan ID to target. When omitted, Webshare uses the default plan.
         * @minLength 1
         */
        planId?: string;
        /**
         * The page number to return.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of proxies to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * Comma-separated country codes used to filter proxies.
         * @minLength 1
         */
        country_code__in?: string;
        /**
         * Search phrase used to filter direct-mode proxies.
         * @minLength 1
         */
        search?: string;
        /**
         * Comma-separated ordering fields such as -valid,proxy_address.
         * @minLength 1
         */
        ordering?: string;
        /**
         * Proxy creation date filter accepted by Webshare.
         * @minLength 1
         */
        created_at?: string;
        /**
         * A specific proxy address to filter by.
         * @minLength 1
         */
        proxy_address?: string;
        /**
         * Comma-separated proxy addresses to filter by.
         * @minLength 1
         */
        proxy_address__in?: string;
        /** Filter proxies by validity. */
        valid?: boolean;
        /**
         * ASN number used to filter direct-mode proxies.
         * @minLength 1
         */
        asn_number?: string;
        /**
         * ASN name used to filter direct-mode proxies.
         * @minLength 1
         */
        asn_name?: string;
      };
      output: {
        /** The total number of proxies matching the query. */
        count: number;
        /** The next page URL returned by Webshare. */
        next: string | null;
        /** The previous page URL returned by Webshare. */
        previous: string | null;
        /** The proxies returned by Webshare. */
        proxies: Array<{
          /** The Webshare proxy ID. */
          id?: string;
          /** The username used to authenticate with this proxy. */
          username?: string;
          /** The password used to authenticate with this proxy. */
          password?: string;
          /** The proxy IP address or hostname. */
          proxy_address?: string;
          /** The proxy port. */
          port?: number;
          /** Whether Webshare currently considers the proxy valid. */
          valid?: boolean;
          /**
           * When Webshare last verified this proxy.
           * @format date-time
           */
          last_verification?: string | null;
          /** The two-letter proxy country code. */
          country_code?: string;
          /** The proxy city name. */
          city_name?: string | null;
          /**
           * When the proxy was created.
           * @format date-time
           */
          created_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Webshare hourly proxy usage stats for an optional time window. */
    "webshare.list_stats": {
      input: {
        /**
         * The Webshare plan ID to target. When omitted, Webshare uses the default plan.
         * @minLength 1
         */
        planId?: string;
        /**
         * Return stats with timestamps less than this value.
         * @format date-time
         */
        timestamp__lte?: string;
        /**
         * Return stats with timestamps greater than this value.
         * @format date-time
         */
        timestamp__gte?: string;
      };
      output: {
        /** The hourly proxy stats returned by Webshare. */
        stats: Array<{
          /**
           * The hour represented by this stats object.
           * @format date-time
           */
          timestamp?: string;
          /** Whether the stats object contains projected usage. */
          is_projected?: boolean;
          /** Total bandwidth used in bytes. */
          bandwidth_total?: number;
          /** Average bandwidth used during the hour. */
          bandwidth_average?: number;
          /** Total proxy requests. */
          requests_total?: number;
          /** Successful proxy requests. */
          requests_successful?: number;
          /** Failed proxy requests. */
          requests_failed?: number;
          /** The error reasons reported for failed requests. */
          error_reasons?: Array<{
            /** The Webshare error reason identifier. */
            reason?: string;
            /** The Webshare error reason category. */
            type?: string;
            /** Webshare guidance for fixing the error. */
            how_to_fix?: string;
            /** The HTTP status associated with the error reason. */
            http_status?: number;
            /** The number of failed requests with this reason. */
            count?: number;
            [key: string]: unknown;
          }>;
          /** Request counts by country code. */
          countries_used?: Record<string, number>;
          /** The number of proxies used during the hour. */
          number_of_proxies_used?: number;
          /** Request counts by protocol. */
          protocols_used?: Record<string, number>;
          /** The average request concurrency. */
          average_concurrency?: number;
          /** The average requests per second. */
          average_rps?: number;
          /**
           * When the last request was sent in this hour.
           * @format date-time
           */
          last_request_sent_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
