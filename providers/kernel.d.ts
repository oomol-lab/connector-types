import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Kernel browser session and return its connection URLs and metadata. */
    "kernel.create_browser_session": {
      input: {
        /**
         * The Kernel action invocation ID to associate with the session.
         * @minLength 1
         */
        invocation_id?: string;
        /**
         * Optional human-readable name for the browser session.
         * @minLength 1
         * @maxLength 255
         * @pattern ^[a-zA-Z0-9._-]{1,255}$
         */
        name?: string;
        /** Kernel browser session tags keyed by tag name. Values are serialized as tags[key] query parameters for list filtering. */
        tags?: Record<string, string>;
        /** Whether to launch the browser in stealth mode. */
        stealth?: boolean;
        /** Whether to launch the browser using a headless image. */
        headless?: boolean;
        /** Whether to enable GPU acceleration for the browser session. */
        gpu?: boolean;
        /**
         * The inactivity timeout in seconds.
         * @minimum 10
         * @maximum 259200
         */
        timeout_seconds?: number;
        /** Profile to load into the Kernel browser session. */
        profile?: {
          /**
           * The Kernel profile ID to load.
           * @minLength 1
           */
          id?: string;
          /**
           * The Kernel profile name to load.
           * @minLength 1
           */
          name?: string;
          /** Whether Kernel should save browser state changes back to the profile. */
          save_changes?: boolean;
        };
        /**
         * Browser extensions to load into the session.
         * @maxItems 20
         */
        extensions?: Array<{
          /**
           * The Kernel extension ID to load.
           * @minLength 1
           */
          id?: string;
          /**
           * The Kernel extension name to load.
           * @minLength 1
           */
          name?: string;
        }>;
        /**
         * The Kernel proxy ID to associate with the browser session.
         * @minLength 1
         */
        proxy_id?: string;
        /** Viewport configuration for a Kernel browser session. */
        viewport?: {
          /**
           * Viewport width in pixels.
           * @minimum 1
           */
          width: number;
          /**
           * Viewport height in pixels.
           * @minimum 1
           */
          height: number;
        };
        /** Whether to launch the browser in kiosk mode. */
        kiosk_mode?: boolean;
        /**
         * Optional URL to open when the browser session is created.
         * @format uri
         */
        start_url?: string;
        /** Chrome enterprise policy overrides for the session. */
        chrome_policy?: Record<string, unknown>;
        /** Kernel telemetry request configuration. */
        telemetry?: Record<string, unknown> | null;
      };
      output: {
        /** A Kernel browser session. */
        browser_session: {
          /**
           * When the browser session was created.
           * @format date-time
           */
          created_at?: string;
          /** WebSocket URL for Chrome DevTools Protocol connections to the browser session. */
          cdp_ws_url?: string;
          /** WebSocket URL for WebDriver BiDi connections to the browser session. */
          webdriver_ws_url?: string;
          /** Remote URL for live viewing the browser session, when available. */
          browser_live_view_url?: string;
          /** Metro-API HTTP base URL for this browser session. */
          base_url?: string;
          /** Whether the browser session is running in headless mode. */
          headless?: boolean;
          /** Whether the browser session is running in stealth mode. */
          stealth?: boolean;
          /** Whether GPU acceleration is enabled for the browser session. */
          gpu?: boolean;
          /**
           * Unique identifier for the browser session.
           * @minLength 1
           */
          session_id?: string;
          /** Human-readable browser session name, when one was set. */
          name?: string | null;
          /** The inactivity timeout in seconds for the browser session. */
          timeout_seconds?: number;
          /** Kernel browser profile reference. */
          profile?: {
            /**
             * The Kernel profile ID.
             * @minLength 1
             */
            id: string;
            /**
             * The Kernel profile name.
             * @minLength 1
             */
            name: string;
            /** Whether Kernel should save browser state changes back to the profile. */
            save_changes: boolean;
          };
          /** ID of the proxy associated with this browser session, if any. */
          proxy_id?: string | null;
          /** Kernel browser pool reference. */
          pool?: {
            /**
             * The Kernel browser pool ID.
             * @minLength 1
             */
            id?: string;
            /** The Kernel browser pool name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Viewport configuration for a Kernel browser session. */
          viewport?: {
            /**
             * Viewport width in pixels.
             * @minimum 1
             */
            width: number;
            /**
             * Viewport height in pixels.
             * @minimum 1
             */
            height: number;
          };
          /** Whether the browser session is running in kiosk mode. */
          kiosk_mode?: boolean;
          /** URL the session was asked to navigate to on creation, if any. */
          start_url?: string | null;
          /** Chrome enterprise policy overrides for the session. */
          chrome_policy?: Record<string, unknown>;
          /** Kernel browser session tags keyed by tag name. Values are serialized as tags[key] query parameters for list filtering. */
          tags?: Record<string, string>;
          /**
           * When the browser session was soft-deleted.
           * @format date-time
           */
          deleted_at?: string;
          /** Kernel browser usage metadata. */
          usage?: {
            /** The browser session runtime in seconds. */
            runtime_seconds?: number;
            [key: string]: unknown;
          };
          /** Kernel browser telemetry configuration. */
          telemetry?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Kernel browser session by session ID or name. */
    "kernel.delete_browser_session": {
      input: {
        /**
         * The Kernel browser session ID or name.
         * @minLength 1
         */
        id_or_name: string;
      };
      output: {
        /** Whether Kernel accepted the delete request. */
        deleted: boolean;
      };
    };
    /** Get one Kernel browser session by session ID or name. */
    "kernel.get_browser_session": {
      input: {
        /**
         * The Kernel browser session ID or name.
         * @minLength 1
         */
        id_or_name: string;
        /** Whether to include soft-deleted browser sessions in the lookup. */
        include_deleted?: boolean;
      };
      output: {
        /** A Kernel browser session. */
        browser_session: {
          /**
           * When the browser session was created.
           * @format date-time
           */
          created_at?: string;
          /** WebSocket URL for Chrome DevTools Protocol connections to the browser session. */
          cdp_ws_url?: string;
          /** WebSocket URL for WebDriver BiDi connections to the browser session. */
          webdriver_ws_url?: string;
          /** Remote URL for live viewing the browser session, when available. */
          browser_live_view_url?: string;
          /** Metro-API HTTP base URL for this browser session. */
          base_url?: string;
          /** Whether the browser session is running in headless mode. */
          headless?: boolean;
          /** Whether the browser session is running in stealth mode. */
          stealth?: boolean;
          /** Whether GPU acceleration is enabled for the browser session. */
          gpu?: boolean;
          /**
           * Unique identifier for the browser session.
           * @minLength 1
           */
          session_id?: string;
          /** Human-readable browser session name, when one was set. */
          name?: string | null;
          /** The inactivity timeout in seconds for the browser session. */
          timeout_seconds?: number;
          /** Kernel browser profile reference. */
          profile?: {
            /**
             * The Kernel profile ID.
             * @minLength 1
             */
            id: string;
            /**
             * The Kernel profile name.
             * @minLength 1
             */
            name: string;
            /** Whether Kernel should save browser state changes back to the profile. */
            save_changes: boolean;
          };
          /** ID of the proxy associated with this browser session, if any. */
          proxy_id?: string | null;
          /** Kernel browser pool reference. */
          pool?: {
            /**
             * The Kernel browser pool ID.
             * @minLength 1
             */
            id?: string;
            /** The Kernel browser pool name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Viewport configuration for a Kernel browser session. */
          viewport?: {
            /**
             * Viewport width in pixels.
             * @minimum 1
             */
            width: number;
            /**
             * Viewport height in pixels.
             * @minimum 1
             */
            height: number;
          };
          /** Whether the browser session is running in kiosk mode. */
          kiosk_mode?: boolean;
          /** URL the session was asked to navigate to on creation, if any. */
          start_url?: string | null;
          /** Chrome enterprise policy overrides for the session. */
          chrome_policy?: Record<string, unknown>;
          /** Kernel browser session tags keyed by tag name. Values are serialized as tags[key] query parameters for list filtering. */
          tags?: Record<string, string>;
          /**
           * When the browser session was soft-deleted.
           * @format date-time
           */
          deleted_at?: string;
          /** Kernel browser usage metadata. */
          usage?: {
            /** The browser session runtime in seconds. */
            runtime_seconds?: number;
            [key: string]: unknown;
          };
          /** Kernel browser telemetry configuration. */
          telemetry?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
    /** List Kernel browser sessions with pagination, search, status, and tag filters. */
    "kernel.list_browser_sessions": {
      input: {
        /** Filter sessions by status. */
        status?: "active" | "deleted" | "all";
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Search browsers by name, session ID, profile ID, proxy ID, or pool name.
         * @minLength 1
         */
        query?: string;
        /** Kernel browser session tags keyed by tag name. Values are serialized as tags[key] query parameters for list filtering. */
        tags?: Record<string, string>;
      };
      output: {
        /** Kernel browser sessions. */
        browser_sessions: Array<{
          /**
           * When the browser session was created.
           * @format date-time
           */
          created_at?: string;
          /** WebSocket URL for Chrome DevTools Protocol connections to the browser session. */
          cdp_ws_url?: string;
          /** WebSocket URL for WebDriver BiDi connections to the browser session. */
          webdriver_ws_url?: string;
          /** Remote URL for live viewing the browser session, when available. */
          browser_live_view_url?: string;
          /** Metro-API HTTP base URL for this browser session. */
          base_url?: string;
          /** Whether the browser session is running in headless mode. */
          headless?: boolean;
          /** Whether the browser session is running in stealth mode. */
          stealth?: boolean;
          /** Whether GPU acceleration is enabled for the browser session. */
          gpu?: boolean;
          /**
           * Unique identifier for the browser session.
           * @minLength 1
           */
          session_id?: string;
          /** Human-readable browser session name, when one was set. */
          name?: string | null;
          /** The inactivity timeout in seconds for the browser session. */
          timeout_seconds?: number;
          /** Kernel browser profile reference. */
          profile?: {
            /**
             * The Kernel profile ID.
             * @minLength 1
             */
            id: string;
            /**
             * The Kernel profile name.
             * @minLength 1
             */
            name: string;
            /** Whether Kernel should save browser state changes back to the profile. */
            save_changes: boolean;
          };
          /** ID of the proxy associated with this browser session, if any. */
          proxy_id?: string | null;
          /** Kernel browser pool reference. */
          pool?: {
            /**
             * The Kernel browser pool ID.
             * @minLength 1
             */
            id?: string;
            /** The Kernel browser pool name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Viewport configuration for a Kernel browser session. */
          viewport?: {
            /**
             * Viewport width in pixels.
             * @minimum 1
             */
            width: number;
            /**
             * Viewport height in pixels.
             * @minimum 1
             */
            height: number;
          };
          /** Whether the browser session is running in kiosk mode. */
          kiosk_mode?: boolean;
          /** URL the session was asked to navigate to on creation, if any. */
          start_url?: string | null;
          /** Chrome enterprise policy overrides for the session. */
          chrome_policy?: Record<string, unknown>;
          /** Kernel browser session tags keyed by tag name. Values are serialized as tags[key] query parameters for list filtering. */
          tags?: Record<string, string>;
          /**
           * When the browser session was soft-deleted.
           * @format date-time
           */
          deleted_at?: string;
          /** Kernel browser usage metadata. */
          usage?: {
            /** The browser session runtime in seconds. */
            runtime_seconds?: number;
            [key: string]: unknown;
          };
          /** Kernel browser telemetry configuration. */
          telemetry?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Kernel pagination metadata parsed from response headers. */
        pagination: {
          /** The limit used for pagination. */
          limit: number;
          /** The offset used for pagination. */
          offset: number;
          /** Whether more results are available. */
          has_more: boolean;
          /** The offset where the next page starts. */
          next_offset: number;
        };
      };
    };
    /** Update mutable Kernel browser session metadata and settings. */
    "kernel.update_browser_session": {
      input: {
        /**
         * The Kernel browser session ID or name.
         * @minLength 1
         */
        id_or_name: string;
        /** Human-readable name for the browser session, or null to clear it. */
        name?: string | null;
        /** Kernel browser session tags keyed by tag name. Values are serialized as tags[key] query parameters for list filtering. */
        tags?: Record<string, string> | null;
        /** Kernel proxy ID to use, or an empty string to remove proxy. */
        proxy_id?: string | null;
        /** Whether stealth browsers should connect directly instead of using the default stealth proxy. */
        disable_default_proxy?: boolean;
        /** Profile to load into the Kernel browser session. */
        profile?: {
          /**
           * The Kernel profile ID to load.
           * @minLength 1
           */
          id?: string;
          /**
           * The Kernel profile name to load.
           * @minLength 1
           */
          name?: string;
          /** Whether Kernel should save browser state changes back to the profile. */
          save_changes?: boolean;
        };
        /** Viewport configuration for a Kernel browser session. */
        viewport?: {
          /**
           * Viewport width in pixels.
           * @minimum 1
           */
          width: number;
          /**
           * Viewport height in pixels.
           * @minimum 1
           */
          height: number;
        };
        /** Kernel telemetry request configuration. */
        telemetry?: Record<string, unknown> | null;
      };
      output: {
        /** A Kernel browser session. */
        browser_session: {
          /**
           * When the browser session was created.
           * @format date-time
           */
          created_at?: string;
          /** WebSocket URL for Chrome DevTools Protocol connections to the browser session. */
          cdp_ws_url?: string;
          /** WebSocket URL for WebDriver BiDi connections to the browser session. */
          webdriver_ws_url?: string;
          /** Remote URL for live viewing the browser session, when available. */
          browser_live_view_url?: string;
          /** Metro-API HTTP base URL for this browser session. */
          base_url?: string;
          /** Whether the browser session is running in headless mode. */
          headless?: boolean;
          /** Whether the browser session is running in stealth mode. */
          stealth?: boolean;
          /** Whether GPU acceleration is enabled for the browser session. */
          gpu?: boolean;
          /**
           * Unique identifier for the browser session.
           * @minLength 1
           */
          session_id?: string;
          /** Human-readable browser session name, when one was set. */
          name?: string | null;
          /** The inactivity timeout in seconds for the browser session. */
          timeout_seconds?: number;
          /** Kernel browser profile reference. */
          profile?: {
            /**
             * The Kernel profile ID.
             * @minLength 1
             */
            id: string;
            /**
             * The Kernel profile name.
             * @minLength 1
             */
            name: string;
            /** Whether Kernel should save browser state changes back to the profile. */
            save_changes: boolean;
          };
          /** ID of the proxy associated with this browser session, if any. */
          proxy_id?: string | null;
          /** Kernel browser pool reference. */
          pool?: {
            /**
             * The Kernel browser pool ID.
             * @minLength 1
             */
            id?: string;
            /** The Kernel browser pool name. */
            name?: string;
            [key: string]: unknown;
          };
          /** Viewport configuration for a Kernel browser session. */
          viewport?: {
            /**
             * Viewport width in pixels.
             * @minimum 1
             */
            width: number;
            /**
             * Viewport height in pixels.
             * @minimum 1
             */
            height: number;
          };
          /** Whether the browser session is running in kiosk mode. */
          kiosk_mode?: boolean;
          /** URL the session was asked to navigate to on creation, if any. */
          start_url?: string | null;
          /** Chrome enterprise policy overrides for the session. */
          chrome_policy?: Record<string, unknown>;
          /** Kernel browser session tags keyed by tag name. Values are serialized as tags[key] query parameters for list filtering. */
          tags?: Record<string, string>;
          /**
           * When the browser session was soft-deleted.
           * @format date-time
           */
          deleted_at?: string;
          /** Kernel browser usage metadata. */
          usage?: {
            /** The browser session runtime in seconds. */
            runtime_seconds?: number;
            [key: string]: unknown;
          };
          /** Kernel browser telemetry configuration. */
          telemetry?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
