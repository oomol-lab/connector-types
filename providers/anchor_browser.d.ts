import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Anchor Browser project billing balance, usage, tier, and browser limits. */
    "anchor_browser.get_billing_info": {
      input: Record<string, never>;
      output: {
        /** Anchor Browser billing information. */
        billing: {
          /** Available credit balance for the authenticated project. */
          credits?: number;
          /** Credits used in the current billing period. */
          credits_used?: number;
          /** Credits included in the current tier before overage. */
          included_credits?: number;
          /** Current billing period in YYYY-MM format. */
          billing_period?: string;
          /** Billing tier for the project. */
          tier?: string;
          /** Available gift or prepaid credit balance before applicable overage. */
          gifts_balance?: number | null;
          /** Maximum concurrent browser sessions allowed for the project. */
          max_concurrent_browsers?: number | null;
          /** Optional configured credit spend limit for the project. */
          cost_limit?: number | null;
          [key: string]: unknown;
        };
        /** The raw object returned by Anchor Browser. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve lightweight Anchor Browser project metadata by project ID. */
    "anchor_browser.get_project_metadata": {
      input: {
        /**
         * The Anchor Browser project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** Anchor Browser project metadata. */
        project: {
          /** The project name. */
          name: string;
          /** The project domain. */
          domain: string;
          /** The project logo URL, if one is configured. */
          logo_url: string | null;
        };
        /** The raw object returned by Anchor Browser. */
        raw: Record<string, unknown>;
      };
    };
    /** Start an Anchor Browser session and return its CDP and live-view connection URLs. */
    "anchor_browser.start_browser_session": {
      input: {
        /** Session-related configuration sent to Anchor Browser. */
        session?: {
          /**
           * The URL to navigate to when the browser session starts.
           * @format uri
           */
          initial_url?: string;
          /** Custom labels to categorize and identify browser sessions. */
          tags?: Array<string>;
          /** Configuration for session recording in Anchor Browser. */
          recording?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Proxy configuration forwarded to Anchor Browser. */
          proxy?: {
            /** Whether Anchor Browser proxying is active for the session. */
            active?: boolean;
            [key: string]: unknown;
          };
          /** Timeout configuration for the Anchor Browser session. */
          timeout?: {
            /** Maximum time in minutes the session can run before automatically terminating. */
            max_duration?: number;
            /** Time in minutes the session waits for new connections after all others are closed. */
            idle_timeout?: number;
          };
          /** Live view configuration for the Anchor Browser session. */
          live_view?: {
            /** Whether live view opens in read-only mode. */
            read_only?: boolean;
            /** Whether Anchor Browser should generate a single-use live view URL. */
            one_time_url?: boolean;
          };
        };
        /** Browser-specific configuration sent to Anchor Browser. */
        browser?: {
          /** Options for managing and persisting browser session profiles. */
          profile?: {
            /**
             * The profile name to use during the browser session.
             * @minLength 1
             */
            name?: string;
            /** Whether browser session profile data should be saved when the session ends. */
            persist?: boolean;
          };
          /** Configuration for ad blocking. */
          adblock?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Configuration for popup blocking. */
          popup_blocker?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Configuration for captcha solving. */
          captcha_solver?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Configuration for headless mode. */
          headless?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Viewport configuration for the Anchor Browser session. */
          viewport?: {
            /**
             * Viewport width in pixels.
             * @minimum 1
             */
            width?: number;
            /**
             * Viewport height in pixels.
             * @minimum 1
             */
            height?: number;
          };
          /** Configuration for fullscreen mode. */
          fullscreen?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Configuration for PDF viewer mode. */
          pdf_viewer?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Configuration for peer-to-peer download capture. */
          p2p_download?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Extension IDs to load in the browser session. */
          extensions?: Array<string>;
          /** Configuration for disabling browser web security. */
          disable_web_security?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Configuration for extra stealth mode. */
          extra_stealth?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Configuration for forcing popups to open as tabs. */
          force_popups_as_tabs?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Configuration for Cloudflare Web Bot Auth. */
          web_bot_auth?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
          /** Configuration for suppressing native browser dialogs. */
          disable_dialogs?: {
            /** Whether this Anchor Browser feature is active. */
            active: boolean;
          };
        };
        /** Integrations to load in the browser session. */
        integrations?: Array<{
          /**
           * The integration ID to load.
           * @minLength 1
           */
          id?: string;
          /**
           * The integration type, such as 1PASSWORD.
           * @minLength 1
           */
          type?: string;
          /** Provider-specific integration configuration. */
          configuration?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Authenticated identities to activate in the session. */
        identities?: Array<{
          /**
           * The identity ID to use for the browser session.
           * @minLength 1
           */
          id: string;
        }>;
      };
      output: {
        /** A started Anchor Browser session. */
        session: {
          /** Unique identifier for the browser session. */
          id: string;
          /** The CDP websocket connection string. */
          cdp_url: string;
          /** The browser session live view URL. */
          live_view_url: string;
        };
        /** The raw object returned by Anchor Browser. */
        raw: Record<string, unknown>;
      };
    };
  }
}
