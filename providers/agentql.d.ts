import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an AgentQL Tetra remote browser session and return the session, CDP, and base URLs. */
    "agentql.create_browser_session": {
      input: {
        /** Browser user agent preset used when creating a Tetra browser session. */
        browser_ua_preset?: "windows" | "macos" | "linux";
        /** Browser profile used by AgentQL for the request or session. */
        browser_profile?: "light" | "stealth" | "tf-browser";
        /** How AgentQL should stop the browser session after disconnect. */
        shutdown_mode?: "on_disconnect" | "on_inactivity_timeout";
        /**
         * Inactivity timeout in seconds before AgentQL closes the session.
         * @minimum 5
         * @maximum 86400
         */
        inactivity_timeout_seconds?: number;
        /** Proxy configuration for AgentQL browser-backed operations. */
        proxy?: {
          /** Proxy type for AgentQL browser-backed operations. */
          type: "tetra" | "custom";
          /**
           * Optional two-letter country code for the built-in Tetra proxy.
           * @minLength 2
           * @maxLength 2
           */
          country_code?: string;
          /**
           * Proxy server URL required by AgentQL custom proxy mode.
           * @minLength 1
           */
          url?: string;
          /** Optional username for proxy authentication. */
          username?: string | null;
          /** Optional password for proxy authentication. */
          password?: string | null;
        };
        /** Optional sub-user identifier for AgentQL session tracking. */
        sub_user_id?: string;
        /** Whether the session end screen should show TinyFish branding. */
        branding?: boolean;
      };
      output: {
        /** AgentQL browser session identifier. */
        session_id: string;
        /** CDP URL used to connect to the remote browser session. */
        cdp_url: string;
        /** Base URL used for viewing or streaming the remote browser session. */
        base_url: string;
      };
    };
    /** Get AgentQL account and API key usage counters for the current billing cycle and lifetime totals. */
    "agentql.get_usage": {
      input: Record<string, never>;
      output: {
        /** AgentQL usage summary grouped by subscription, API key, and total account usage. */
        data: {
          /** Current AgentQL subscription window and limits. */
          current_subscription: {
            /** Lifetime usage limit for the current subscription when available. */
            lifetime_usage_limit: number | null;
            /** Free usage allowance for the current billing cycle when available. */
            current_cycle_free_usage_limit: number | null;
            /**
             * Start timestamp of the current billing cycle.
             * @format date-time
             */
            current_cycle_start: string;
            /**
             * End timestamp of the current billing cycle.
             * @format date-time
             */
            current_cycle_end: string;
          } | null;
          /** AgentQL usage counters for the current cycle and lifetime totals. */
          api_key_usage: {
            /** Usage count in the current billing cycle when available. */
            current_cycle: number | null;
            /** Lifetime usage count. */
            lifetime: number;
          };
          /** AgentQL usage counters for the current cycle and lifetime totals. */
          total_account_usage: {
            /** Usage count in the current billing cycle when available. */
            current_cycle: number | null;
            /** Lifetime usage count. */
            lifetime: number;
          };
        };
        /** Basic AgentQL response metadata for the usage endpoint. */
        metadata?: {
          /** AgentQL request identifier for the usage API call. */
          request_id: string;
        } | null;
      };
    };
    /** List AgentQL Tetra session telemetry entries with optional filters and pagination controls. */
    "agentql.list_session_usage": {
      input: {
        /** Only return telemetry entries for this sub-user identifier. */
        sub_user_id?: string;
        /** Only return telemetry for this session identifier. */
        session_id?: string;
        /**
         * Only include sessions that started after this timestamp.
         * @format date-time
         */
        start_after?: string;
        /**
         * Only include sessions that ended before this timestamp.
         * @format date-time
         */
        end_before?: string;
        /**
         * Only include sessions updated after this timestamp.
         * @format date-time
         */
        updated_after?: string;
        /**
         * Only include sessions updated before this timestamp.
         * @format date-time
         */
        updated_before?: string;
        /** AgentQL browser session status filter. */
        status?: "running" | "ended";
        /**
         * Maximum number of entries to return per page.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Page number to return.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Telemetry entries returned for the current page. */
        items: Array<{
          /** AgentQL session identifier. */
          session_id: string;
          /** Owning AgentQL user identifier when available. */
          user_id: string | null;
          /** Sub-user identifier attached to the session when available. */
          sub_user_id: string | null;
          /** Base streaming URL for the session when available. */
          base_url: string | null;
          /** CDP URL for the session when available. */
          cdp_url: string | null;
          /** Browser profile used by AgentQL for the request or session. */
          mode: "light" | "stealth" | "tf-browser" | null;
          /**
           * Session start timestamp when available.
           * @format date-time
           */
          start_time: string | null;
          /**
           * Session end timestamp when available.
           * @format date-time
           */
          end_time: string | null;
          /** Session duration in milliseconds when available. */
          duration_ms: number | null;
          /** Proxy receive bytes recorded for the session when available. */
          proxy_trg_rx_bytes: number | null;
          /** Proxy transmit bytes recorded for the session when available. */
          proxy_trg_tx_bytes: number | null;
          /** AgentQL browser session status filter. */
          status: "running" | "ended" | null;
          /**
           * Telemetry record creation timestamp.
           * @format date-time
           */
          created_at: string;
          /**
           * Telemetry record update timestamp.
           * @format date-time
           */
          updated_at: string;
        }>;
        /** Total number of telemetry entries matching the request. */
        total: number;
        /** Maximum number of telemetry entries returned per page. */
        limit: number;
        /** Current page number. */
        page: number;
        /** Total number of pages available. */
        total_pages: number;
        /** Whether there are more pages after the current page. */
        has_more: boolean;
      };
    };
    /** Query a webpage with AgentQL and return the extracted structured data plus AgentQL metadata. */
    "agentql.query_data": {
      input: {
        /** AgentQL query string to execute. */
        query?: string | null;
        /** Natural-language extraction prompt for AgentQL to translate into a query. */
        prompt?: string | null;
        /**
         * Target webpage URL to fetch and query.
         * @format uri
         */
        url?: string | null;
        /** Raw HTML content to query directly without fetching a URL. */
        html?: string | null;
        /** Optional query execution settings forwarded to AgentQL query-data. */
        params?: {
          /** AgentQL query response mode. */
          mode?: "fast" | "standard";
          /**
           * Seconds to wait for more page content before querying.
           * @minimum 0
           * @maximum 10
           */
          wait_for?: number;
          /** Whether AgentQL should scroll to the bottom of the page before snapshot capture. */
          is_scroll_to_bottom_enabled?: boolean;
          /** Whether AgentQL should capture a screenshot and return it in metadata when available. */
          is_screenshot_enabled?: boolean;
          /** Browser profile used by AgentQL for the request or session. */
          browser_profile?: "light" | "stealth" | "tf-browser";
          /** Proxy configuration for AgentQL browser-backed operations. */
          proxy?: {
            /** Proxy type for AgentQL browser-backed operations. */
            type: "tetra" | "custom";
            /**
             * Optional two-letter country code for the built-in Tetra proxy.
             * @minLength 2
             * @maxLength 2
             */
            country_code?: string;
            /**
             * Proxy server URL required by AgentQL custom proxy mode.
             * @minLength 1
             */
            url?: string;
            /** Optional username for proxy authentication. */
            username?: string | null;
            /** Optional password for proxy authentication. */
            password?: string | null;
          };
        };
      };
      output: {
        /** Structured data returned by AgentQL for the query. */
        data: Record<string, unknown>;
        /** AgentQL metadata returned alongside the query result. */
        metadata?: {
          /** AgentQL request identifier for the API call. */
          request_id?: string;
          /** Generated AgentQL query returned by AgentQL when prompt mode was used. */
          generated_query?: string | null;
          /** Screenshot payload or URL returned by AgentQL when screenshot capture was enabled. */
          screenshot?: string | null;
        } | null;
      };
    };
  }
}
