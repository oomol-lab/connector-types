import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new monitoring check in the updown.io account. */
    "updown_io.create_check": {
      input: {
        /**
         * The URL to monitor. It is required for all checks except pulse checks.
         * @format uri
         */
        url?: string;
        /** The type of check to create or update. */
        type?: "https" | "http" | "icmp" | "pulse" | "tcp" | "tcps";
        /**
         * The check interval in seconds accepted by updown.io.
         * @minimum 15
         * @maximum 2592000
         */
        period?: number;
        /** The APDEX threshold in seconds accepted by updown.io. */
        apdex_t?: 0.125 | 0.25 | 0.5 | 1 | 2 | 4 | 8;
        /** Whether the check is enabled. */
        enabled?: boolean;
        /** Whether the public status page is enabled. */
        published?: boolean;
        /**
         * A human-readable alias for the check.
         * @minLength 1
         */
        alias?: string;
        /**
         * A string that must be present in the response body.
         * @minLength 1
         */
        string_match?: string;
        /**
         * A time, 'recovery', or 'forever' value supported by updown.io.
         * @minLength 1
         */
        mute_until?: string;
        /** The HTTP verb used by the check. */
        http_verb?: "GET/HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
        /** The HTTP request body sent with the check. */
        http_body?: string;
        /**
         * Monitoring locations disabled for this check.
         * @minItems 1
         */
        disabled_locations?: Array<"lan" | "mia" | "bhs" | "rbx" | "fra" | "cap" | "hel" | "sin" | "tok" | "syd">;
        /**
         * Recipients selected for this check.
         * @minItems 1
         */
        recipients?: Array<string>;
        /** Custom HTTP headers sent by updown.io when performing the check. */
        custom_headers?: Record<string, string>;
      };
      output: {
        /** The unique token of the check. */
        token: string;
        /** The monitored URL. */
        url: string;
        /** The type of check. */
        type: string;
        /** The human-readable alias of the check. */
        alias?: string | null;
        /** The last HTTP status code returned by the monitored endpoint. */
        last_status?: number | null;
        /** The uptime percentage reported by updown.io. */
        uptime: number;
        /** Whether the check is currently down. */
        down: boolean;
        /** When the check went down, if it is currently down. */
        down_since?: string | null;
        /** When the check most recently recovered. */
        up_since?: string | null;
        /** The last error message returned by updown.io, if any. */
        error?: string | null;
        /** The check interval in seconds. */
        period: number;
        /** The APDEX threshold in seconds. */
        apdex_t: number;
        /** The response body string required by the check. */
        string_match?: string | null;
        /** Whether the check is enabled. */
        enabled: boolean;
        /** Whether the public status page is enabled. */
        published: boolean;
        /** Monitoring locations disabled for this check. */
        disabled_locations?: Array<string>;
        /** Recipients selected for this check. */
        recipients?: Array<string>;
        /** When updown.io last executed the check. */
        last_check_at?: string | null;
        /** When updown.io will next execute the check. */
        next_check_at?: string | null;
        /** When the check was created. */
        created_at: string;
        /** The mute-until setting returned by updown.io. */
        mute_until?: string | null;
        /** The favicon URL discovered for the monitored endpoint. */
        favicon_url?: string | null;
        /** Custom HTTP headers configured for the check. */
        custom_headers?: Record<string, string>;
        /** The HTTP verb used by the check. */
        http_verb?: string | null;
        /** The HTTP request body sent by the check. */
        http_body?: string | null;
        /** SSL information returned by updown.io, if present. */
        ssl?: Record<string, unknown>;
        /** Domain metadata returned by updown.io, if present. */
        domain?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete a monitoring check from the updown.io account. */
    "updown_io.delete_check": {
      input: {
        /**
         * The unique token of the updown.io check.
         * @minLength 1
         */
        token: string;
      };
      output: {
        /** Whether the check was deleted successfully. */
        deleted: boolean;
      };
    };
    /** Get a single monitoring check from updown.io by token. */
    "updown_io.get_check": {
      input: {
        /**
         * The unique token of the updown.io check.
         * @minLength 1
         */
        token: string;
      };
      output: {
        /** The unique token of the check. */
        token: string;
        /** The monitored URL. */
        url: string;
        /** The type of check. */
        type: string;
        /** The human-readable alias of the check. */
        alias?: string | null;
        /** The last HTTP status code returned by the monitored endpoint. */
        last_status?: number | null;
        /** The uptime percentage reported by updown.io. */
        uptime: number;
        /** Whether the check is currently down. */
        down: boolean;
        /** When the check went down, if it is currently down. */
        down_since?: string | null;
        /** When the check most recently recovered. */
        up_since?: string | null;
        /** The last error message returned by updown.io, if any. */
        error?: string | null;
        /** The check interval in seconds. */
        period: number;
        /** The APDEX threshold in seconds. */
        apdex_t: number;
        /** The response body string required by the check. */
        string_match?: string | null;
        /** Whether the check is enabled. */
        enabled: boolean;
        /** Whether the public status page is enabled. */
        published: boolean;
        /** Monitoring locations disabled for this check. */
        disabled_locations?: Array<string>;
        /** Recipients selected for this check. */
        recipients?: Array<string>;
        /** When updown.io last executed the check. */
        last_check_at?: string | null;
        /** When updown.io will next execute the check. */
        next_check_at?: string | null;
        /** When the check was created. */
        created_at: string;
        /** The mute-until setting returned by updown.io. */
        mute_until?: string | null;
        /** The favicon URL discovered for the monitored endpoint. */
        favicon_url?: string | null;
        /** Custom HTTP headers configured for the check. */
        custom_headers?: Record<string, string>;
        /** The HTTP verb used by the check. */
        http_verb?: string | null;
        /** The HTTP request body sent by the check. */
        http_body?: string | null;
        /** SSL information returned by updown.io, if present. */
        ssl?: Record<string, unknown>;
        /** Domain metadata returned by updown.io, if present. */
        domain?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List all monitoring checks available in the updown.io account. */
    "updown_io.list_checks": {
      input: Record<string, never>;
      output: Array<{
        /** The unique token of the check. */
        token: string;
        /** The monitored URL. */
        url: string;
        /** The type of check. */
        type: string;
        /** The human-readable alias of the check. */
        alias?: string | null;
        /** The last HTTP status code returned by the monitored endpoint. */
        last_status?: number | null;
        /** The uptime percentage reported by updown.io. */
        uptime: number;
        /** Whether the check is currently down. */
        down: boolean;
        /** When the check went down, if it is currently down. */
        down_since?: string | null;
        /** When the check most recently recovered. */
        up_since?: string | null;
        /** The last error message returned by updown.io, if any. */
        error?: string | null;
        /** The check interval in seconds. */
        period: number;
        /** The APDEX threshold in seconds. */
        apdex_t: number;
        /** The response body string required by the check. */
        string_match?: string | null;
        /** Whether the check is enabled. */
        enabled: boolean;
        /** Whether the public status page is enabled. */
        published: boolean;
        /** Monitoring locations disabled for this check. */
        disabled_locations?: Array<string>;
        /** Recipients selected for this check. */
        recipients?: Array<string>;
        /** When updown.io last executed the check. */
        last_check_at?: string | null;
        /** When updown.io will next execute the check. */
        next_check_at?: string | null;
        /** When the check was created. */
        created_at: string;
        /** The mute-until setting returned by updown.io. */
        mute_until?: string | null;
        /** The favicon URL discovered for the monitored endpoint. */
        favicon_url?: string | null;
        /** Custom HTTP headers configured for the check. */
        custom_headers?: Record<string, string>;
        /** The HTTP verb used by the check. */
        http_verb?: string | null;
        /** The HTTP request body sent by the check. */
        http_body?: string | null;
        /** SSL information returned by updown.io, if present. */
        ssl?: Record<string, unknown>;
        /** Domain metadata returned by updown.io, if present. */
        domain?: Record<string, unknown>;
        [key: string]: unknown;
      }>;
    };
    /** List all updown.io monitoring node IP addresses. */
    "updown_io.list_node_ips": {
      input: Record<string, never>;
      output: Array<string>;
    };
    /** List all updown.io monitoring node IPv4 addresses. */
    "updown_io.list_node_ipv4": {
      input: Record<string, never>;
      output: Array<string>;
    };
    /** List all updown.io monitoring node IPv6 addresses. */
    "updown_io.list_node_ipv6": {
      input: Record<string, never>;
      output: Array<string>;
    };
    /** List all updown.io monitoring nodes and their network metadata. */
    "updown_io.list_nodes": {
      input: Record<string, never>;
      output: Record<string, {
          /** The IPv4 address of the updown.io node. */
          ip: string;
          /** The IPv6 address of the updown.io node. */
          ip6: string;
          /** The city where the node is located. */
          city: string;
          /** The country where the node is located. */
          country: string;
          /** The lowercase country code of the node. */
          country_code: string;
          /** The latitude of the node. */
          lat: number;
          /** The longitude of the node. */
          lng: number;
        }>;
    };
    /** Update an existing monitoring check in the updown.io account. */
    "updown_io.update_check": {
      input: {
        /**
         * The unique token of the updown.io check.
         * @minLength 1
         */
        token: string;
        /**
         * The URL to monitor. It is required for all checks except pulse checks.
         * @format uri
         */
        url?: string;
        /** The type of check to create or update. */
        type?: "https" | "http" | "icmp" | "pulse" | "tcp" | "tcps";
        /**
         * The check interval in seconds accepted by updown.io.
         * @minimum 15
         * @maximum 2592000
         */
        period?: number;
        /** The APDEX threshold in seconds accepted by updown.io. */
        apdex_t?: 0.125 | 0.25 | 0.5 | 1 | 2 | 4 | 8;
        /** Whether the check is enabled. */
        enabled?: boolean;
        /** Whether the public status page is enabled. */
        published?: boolean;
        /**
         * A human-readable alias for the check.
         * @minLength 1
         */
        alias?: string;
        /**
         * A string that must be present in the response body.
         * @minLength 1
         */
        string_match?: string;
        /**
         * A time, 'recovery', or 'forever' value supported by updown.io.
         * @minLength 1
         */
        mute_until?: string;
        /** The HTTP verb used by the check. */
        http_verb?: "GET/HEAD" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
        /** The HTTP request body sent with the check. */
        http_body?: string;
        /**
         * Monitoring locations disabled for this check.
         * @minItems 1
         */
        disabled_locations?: Array<"lan" | "mia" | "bhs" | "rbx" | "fra" | "cap" | "hel" | "sin" | "tok" | "syd">;
        /**
         * Recipients selected for this check.
         * @minItems 1
         */
        recipients?: Array<string>;
        /** Custom HTTP headers sent by updown.io when performing the check. */
        custom_headers?: Record<string, string>;
      };
      output: {
        /** The unique token of the check. */
        token: string;
        /** The monitored URL. */
        url: string;
        /** The type of check. */
        type: string;
        /** The human-readable alias of the check. */
        alias?: string | null;
        /** The last HTTP status code returned by the monitored endpoint. */
        last_status?: number | null;
        /** The uptime percentage reported by updown.io. */
        uptime: number;
        /** Whether the check is currently down. */
        down: boolean;
        /** When the check went down, if it is currently down. */
        down_since?: string | null;
        /** When the check most recently recovered. */
        up_since?: string | null;
        /** The last error message returned by updown.io, if any. */
        error?: string | null;
        /** The check interval in seconds. */
        period: number;
        /** The APDEX threshold in seconds. */
        apdex_t: number;
        /** The response body string required by the check. */
        string_match?: string | null;
        /** Whether the check is enabled. */
        enabled: boolean;
        /** Whether the public status page is enabled. */
        published: boolean;
        /** Monitoring locations disabled for this check. */
        disabled_locations?: Array<string>;
        /** Recipients selected for this check. */
        recipients?: Array<string>;
        /** When updown.io last executed the check. */
        last_check_at?: string | null;
        /** When updown.io will next execute the check. */
        next_check_at?: string | null;
        /** When the check was created. */
        created_at: string;
        /** The mute-until setting returned by updown.io. */
        mute_until?: string | null;
        /** The favicon URL discovered for the monitored endpoint. */
        favicon_url?: string | null;
        /** Custom HTTP headers configured for the check. */
        custom_headers?: Record<string, string>;
        /** The HTTP verb used by the check. */
        http_verb?: string | null;
        /** The HTTP request body sent by the check. */
        http_body?: string | null;
        /** SSL information returned by updown.io, if present. */
        ssl?: Record<string, unknown>;
        /** Domain metadata returned by updown.io, if present. */
        domain?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
