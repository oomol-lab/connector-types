import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a profile setup session without saving browser state. */
    "tinyfish.cancel_profile_setup_session": {
      input: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        profileId: string;
        /**
         * Browser session ID.
         * @minLength 1
         */
        session_id: string;
      };
      output: {
        /** Whether the session was cancelled. */
        cancelled?: boolean;
        [key: string]: unknown;
      };
    };
    /** Cancel a research run and return whether its state changed. */
    "tinyfish.cancel_research_run": {
      input: {
        /**
         * Research run identifier.
         * @minLength 1
         */
        research_run_id: string;
      };
      output: {
        /**
         * Research run identifier.
         * @minLength 1
         */
        research_run_id?: string;
        /** Research run state. */
        status?: "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "TIMED_OUT" | "QUEUED";
        /** Whether this request cancelled the run. */
        cancelled?: boolean;
        [key: string]: unknown;
      };
    };
    /** Cancel an asynchronous automation run. Already terminal runs retain their status. Runs started through the synchronous API cannot be cancelled. */
    "tinyfish.cancel_run": {
      input: {
        /**
         * Automation run ID.
         * @minLength 1
         * @pattern ^[A-Za-z0-9_-]+$
         */
        id: string;
      };
      output: {
        /**
         * Automation run ID.
         * @minLength 1
         * @pattern ^[A-Za-z0-9_-]+$
         */
        run_id?: string;
        /** Final run status. */
        status?: "CANCELLED" | "COMPLETED" | "FAILED";
        /** Cancellation timestamp, or null when not cancelled. */
        cancelled_at?: string | null;
        /** Additional cancellation context. */
        message?: string | null;
        [key: string]: unknown;
      };
    };
    /** Cancel up to 100 automation runs. Already terminal runs retain their existing status; missing IDs are returned separately. */
    "tinyfish.cancel_runs": {
      input: {
        /**
         * Run IDs.
         * @minItems 1
         * @maxItems 100
         */
        run_ids: Array<string>;
      };
      output: {
        /** Per-run cancellation results. */
        results?: Array<{
          /**
           * Automation run ID.
           * @minLength 1
           * @pattern ^[A-Za-z0-9_-]+$
           */
          run_id?: string;
          /** Final run status. */
          status?: "CANCELLED" | "COMPLETED" | "FAILED";
          /** Cancellation timestamp, or null when not cancelled. */
          cancelled_at?: string | null;
          /** Additional cancellation context. */
          message?: string | null;
          [key: string]: unknown;
        }>;
        /** Run IDs not found or not owned; null if all were found. */
        not_found?: Array<string> | null;
        [key: string]: unknown;
      };
    };
    /** Connect 1Password or Bitwarden and immediately sync display-safe credential metadata. */
    "tinyfish.connect_vault": {
      input: {
        provider?: "1password";
        [key: string]: unknown;
      } | {
        provider?: "bitwarden";
        [key: string]: unknown;
      };
      output: {
        /** Connection ID. */
        connectionId?: string;
        /** Whether the vault is connected. */
        connected?: boolean;
        /** Password manager provider. */
        provider?: "1password" | "bitwarden";
        /** Available vault items. */
        items?: Array<{
          /** Vault item ID. */
          itemId?: string;
          /** Connection ID. */
          connectionId?: string | null;
          /** Item display label. */
          label?: string;
          /** Vault name. */
          vaultName?: string;
          /** Domains associated with this item. */
          domains?: Array<string>;
          /** Display-safe field metadata. */
          fieldMetadata?: Array<{
            /** Field ID. */
            fieldId?: string;
            /** Field label. */
            label?: string;
            /** Field type. */
            type?: "STRING" | "CONCEALED" | "OTP";
            [key: string]: unknown;
          }>;
          /** Whether the item contains a time-based one-time password. */
          hasTotp?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a remote browser session and return CDP connection details for an external browser client. */
    "tinyfish.create_browser_session": {
      input: {
        /** Startup URL; bare domains are prefixed with https://. Omit to start at about:blank. */
        url?: string;
        /**
         * Inactivity timeout in seconds. Omitted, null, or above the plan maximum uses the plan maximum.
         * @minimum 5
         * @maximum 86400
         */
        timeout_seconds?: number | null;
        /** Browser proxy configuration; omitted uses TinyFish's US proxy. */
        proxy_config?: {
          type: "custom";
          [key: string]: unknown;
        } | {
          type?: "tinyfish";
          [key: string]: unknown;
        };
      };
      output: {
        /**
         * Browser session ID.
         * @minLength 1
         */
        session_id?: string;
        /**
         * WebSocket URL for a CDP client to connect to the browser.
         * @format uri
         */
        cdp_url?: string;
        /**
         * HTTPS base URL for browser session endpoints.
         * @format uri
         */
        base_url?: string;
        [key: string]: unknown;
      };
    };
    /** Create a Page or Topic Monitor with a schedule and baseline run; requires a personal API key. */
    "tinyfish.create_monitor": {
      input: {
        /**
         * Monitor name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string | null;
        /**
         * Five-field cron in UTC; prefix CRON_TZ=<IANA zone> to choose a timezone.
         * @maxLength 100
         */
        schedule_cron: string;
        /**
         * URL receiving scheduled run results.
         * @format uri
         */
        webhook_url?: string | null;
        /**
         * Describe the change that matters.
         * @minLength 1
         * @maxLength 2000
         */
        purpose?: string | null;
        /** Topic monitor type. */
        type: "search";
        /** Topic search configuration. */
        config: {
          /**
           * Topic to monitor.
           * @minLength 1
           * @maxLength 2000
           */
          query: string;
          /**
           * Search freshness window in minutes.
           * @minimum 1
           * @maximum 5256000
           */
          recency_minutes?: number;
          /**
           * Results per run; defaults to 10.
           * @minimum 1
           * @maximum 10
           */
          result_limit?: number;
        };
      } | {
        /**
         * Monitor name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string | null;
        /**
         * Five-field cron in UTC; prefix CRON_TZ=<IANA zone> to choose a timezone.
         * @maxLength 100
         */
        schedule_cron: string;
        /**
         * URL receiving scheduled run results.
         * @format uri
         */
        webhook_url?: string | null;
        /**
         * Describe the change that matters.
         * @minLength 1
         * @maxLength 2000
         */
        purpose?: string | null;
        /** Page monitor type. */
        type: "fetch";
        /** Page fetch configuration. */
        config: {
          /**
           * Public webpage URL.
           * @format uri
           */
          url: string;
          /** Fetch output format; defaults to json. */
          format?: "markdown" | "html" | "json";
          /** Include page links. */
          links?: boolean;
          /** Include image URLs. */
          image_links?: boolean;
          /**
           * Deprecated: Page Monitors always bypass cache.
           * @minimum 0
           */
          ttl?: number;
        };
      };
      output: {
        /** Page or Topic Monitor. */
        monitor?: {
          /**
           * Monitor identifier.
           * @minLength 1
           * @maxLength 36
           */
          id?: string;
          /** Monitor name. */
          name?: string | null;
          /** Schedule expression. */
          schedule_cron?: string;
          /** Monitor state. */
          status?: "creating" | "active" | "paused" | "failed" | "cancelled";
          /** Most recent error. */
          last_error?: string | null;
          /** Results webhook URL. */
          webhook_url?: string | null;
          /** Creation timestamp. */
          created_at?: string;
          /** Update timestamp. */
          updated_at?: string;
          /** Monitor type. */
          type?: "fetch" | "search";
          /** Page or topic configuration. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Baseline page or topic run. */
        run?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a Browser Context Profile for reusable browser state. */
    "tinyfish.create_profile": {
      input: {
        /**
         * Profile display name.
         * @minLength 1
         * @maxLength 100
         */
        name: string;
        /** Set this profile as the default. */
        set_as_default?: boolean;
        /** Proxy country code, or null to clear it. */
        proxy_country_code?: string | null;
      };
      output: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        id: string;
        /** Browser Context Profile display name. */
        name: string;
        /** Proxy country code. */
        proxy_country_code?: string | null;
        /** Whether this is the default profile. */
        is_default?: boolean;
        /** Browser fingerprint seed. */
        fingerprint_seed?: string;
        /**
         * Number of saved domains.
         * @minimum 0
         */
        domain_count?: number;
        /** Creation timestamp. */
        created_at: string;
        /** Last update timestamp. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Start an interactive setup browser to sign in and capture state for a profile. */
    "tinyfish.create_profile_setup_session": {
      input: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        profileId: string;
        /** Startup URL; bare domains are prefixed with https://. Omit to start at about:blank. */
        url?: string;
        /**
         * Inactivity timeout in seconds. Omitted, null, or above the plan maximum uses the plan maximum.
         * @minimum 5
         * @maximum 86400
         */
        timeout_seconds?: number | null;
      };
      output: {
        /**
         * Browser session ID.
         * @minLength 1
         */
        session_id?: string;
        /**
         * WebSocket URL for a CDP client to connect to the browser.
         * @format uri
         */
        cdp_url?: string;
        /**
         * HTTPS base URL for browser session endpoints.
         * @format uri
         */
        base_url?: string;
        /** Session inactivity timeout. */
        timeout_seconds?: number;
        /** Session expiry timestamp. */
        expires_at?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Monitor and stop its scheduled runs. */
    "tinyfish.delete_monitor": {
      input: {
        /**
         * Monitor identifier.
         * @minLength 1
         * @maxLength 36
         */
        id: string;
      };
      output: {
        /** Whether deletion succeeded. */
        deleted?: true;
        /**
         * Monitor identifier.
         * @minLength 1
         * @maxLength 36
         */
        id?: string;
        [key: string]: unknown;
      };
    };
    /** Delete a Browser Context Profile and its saved state. */
    "tinyfish.delete_profile": {
      input: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        profileId: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted?: boolean;
        [key: string]: unknown;
      };
    };
    /** Delete cookies and storage for one saved profile domain. */
    "tinyfish.delete_profile_domain": {
      input: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        profileId: string;
        /**
         * Domain to remove from the profile.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Whether the resource was deleted. */
        deleted?: boolean;
        [key: string]: unknown;
      };
    };
    /** Disconnect a password manager and remove its stored enabled items. */
    "tinyfish.disconnect_vault": {
      input: {
        /** Connection ID. */
        connectionId: string;
      };
      output: {
        /** Whether the vault was disconnected. */
        disconnected?: boolean;
        /** Connection ID. */
        connectionId?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch up to ten URLs with content extraction, selectors and conditional request support; inspect per-URL errors. */
    "tinyfish.fetch_urls": {
      input: unknown | {
        /** @maxItems 1 */
        urls?: unknown;
        [key: string]: unknown;
      };
      output: {
        /** Successfully fetched URLs including conditional results. */
        results?: Array<{
          /** Requested URL. */
          url?: string;
          /** Final URL. */
          final_url?: string | null;
          /** Page title. */
          title?: string | null;
          /** Extracted markdown, HTML or structured JSON; may be null. */
          text?: unknown;
          /** Content format. */
          format?: "markdown" | "html" | "json";
          /** True when the origin returned 304. */
          not_modified?: boolean;
          /** ETag validator. */
          etag?: string;
          /** Last-Modified validator. */
          last_modified?: string;
          /** Selectors that did not match while others succeeded. */
          unmatched_selectors?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Failures for individual URLs. */
        errors?: Array<{
          /** Failed URL. */
          url?: string;
          /** Provider error code. */
          error?: string;
          /** Origin HTTP status when applicable. */
          status?: number;
          /** Selectors with no match. */
          unmatched_selectors?: Array<string>;
          /** Suggested selectors for a retry. */
          candidate_selectors?: Array<string>;
          [key: string]: unknown;
        }>;
        /** Correlation ID, present for failed URLs. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Get a Page or Topic Monitor and its configuration. */
    "tinyfish.get_monitor": {
      input: {
        /**
         * Monitor identifier.
         * @minLength 1
         * @maxLength 36
         */
        id: string;
      };
      output: {
        /**
         * Monitor identifier.
         * @minLength 1
         * @maxLength 36
         */
        id?: string;
        /** Monitor name. */
        name?: string | null;
        /** Schedule expression. */
        schedule_cron?: string;
        /** Monitor state. */
        status?: "creating" | "active" | "paused" | "failed" | "cancelled";
        /** Most recent error. */
        last_error?: string | null;
        /** Results webhook URL. */
        webhook_url?: string | null;
        /** Creation timestamp. */
        created_at?: string;
        /** Update timestamp. */
        updated_at?: string;
        /** Monitor type. */
        type?: "fetch" | "search";
        /** Page or topic configuration. */
        config?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a Browser Context Profile and its saved domain metadata. */
    "tinyfish.get_profile": {
      input: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        profileId: string;
      };
      output: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        id: string;
        /** Browser Context Profile display name. */
        name: string;
        /** Proxy country code. */
        proxy_country_code?: string | null;
        /** Whether this is the default profile. */
        is_default?: boolean;
        /** Browser fingerprint seed. */
        fingerprint_seed?: string;
        /**
         * Number of saved domains.
         * @minimum 0
         */
        domain_count?: number;
        /** Creation timestamp. */
        created_at: string;
        /** Last update timestamp. */
        updated_at?: string;
        /** Saved domains. */
        domains: Array<{
          /** Saved domain. */
          domain?: string;
          /**
           * Saved cookie count.
           * @minimum 0
           */
          cookie_count?: number;
          /**
           * Saved local storage origin count.
           * @minimum 0
           */
          local_storage_origin_count?: number;
          /** Last access timestamp. */
          last_accessed_at?: string;
          /** Last write timestamp. */
          last_written_at?: string;
          /** Run that last wrote the state. */
          last_written_by_run_id?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Get research progress, final reports, sources and terminal outcome. */
    "tinyfish.get_research_run": {
      input: {
        /**
         * Research run identifier.
         * @minLength 1
         */
        research_run_id: string;
      };
      output: {
        /**
         * Research run identifier.
         * @minLength 1
         */
        research_run_id?: string;
        /** Research run state. */
        status?: "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "TIMED_OUT" | "QUEUED";
        /** Research question. */
        query?: string;
        /** Quick answer, citations and optional progress. */
        quick_result?: Record<string, unknown> | null;
        /** Quick answer summary. */
        quick_result_summary?: string | null;
        /** Final report. */
        deep_result?: {
          /** Report text. */
          result?: string;
          /** Cited sources. */
          citations?: Array<string>;
          /** Source freshness information. */
          freshness_report?: Record<string, unknown>;
          /** Reason research stopped; synthesis_failed indicates interim findings. */
          termination_reason?: string;
          [key: string]: unknown;
        } | null;
        /** Spawned agent run identifiers. */
        run_ids?: Array<string>;
        /** Creation timestamp. */
        created_at?: string | null;
        /** Completion timestamp. */
        completed_at?: string | null;
        /** Saved terminal outcome, not an HTTP request error. */
        error?: Record<string, unknown> | null;
        /** Subquestions and planned searches. */
        research_plan?: Record<string, unknown> | null;
        /** Sources and supported claims. */
        evidence?: Array<Record<string, unknown>> | null;
        /**
         * Completed research iterations.
         * @minimum 0
         */
        iterations?: number | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve an automation run and captured steps. Prefer screenshot URLs for JSON clients; use get_step_screenshot or get_step_html to transfer captured files. */
    "tinyfish.get_run": {
      input: {
        /**
         * Automation run ID.
         * @minLength 1
         * @pattern ^[A-Za-z0-9_-]+$
         */
        id: string;
        /** Screenshot delivery mode; defaults to url. Base64 embeds potentially large data URIs. */
        screenshots?: "base64" | "url" | "none";
        /** HTML snapshot delivery mode; defaults to url and requires capture_config.html at submission. */
        html?: "url" | "none";
      };
      output: {
        /**
         * Automation run ID.
         * @minLength 1
         * @pattern ^[A-Za-z0-9_-]+$
         */
        run_id: string;
        /** Current automation run status. */
        status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /** Natural language goal for this automation run. */
        goal?: string;
        /** Run creation timestamp. */
        created_at?: string;
        /** Run start timestamp, or null before execution. */
        started_at?: string | null;
        /** Run completion timestamp, or null before completion. */
        finished_at?: string | null;
        /**
         * Number of automation steps; null while in progress.
         * @minimum 0
         */
        num_of_steps?: number | null;
        /** Extracted structured result. */
        result?: Record<string, unknown> | null;
        /** Provider-supported structured-output schema subset. Unsupported schema keywords are rejected by TinyFish. */
        output_schema?: Record<string, unknown> | null;
        /** Whether a Browser Context Profile was attached. */
        profile_attached?: boolean;
        /** Attached Browser Context Profile ID, or null. */
        profile_id?: string | null;
        /** Provider error details, including retry guidance and profile setup hints. */
        error?: {
          /** Machine-readable error code. */
          code?: string;
          /** Human-readable error message. */
          message?: string;
          /** Error category: SYSTEM_FAILURE, AGENT_FAILURE, BILLING_FAILURE, or UNKNOWN. */
          category?: string;
          /** Suggested retry delay in seconds, or null when not retryable. */
          retry_after?: number | null;
          /** Troubleshooting documentation URL. */
          help_url?: string;
          /** Troubleshooting guidance. */
          help_message?: string;
          /** Additional provider error details, including validation errors. */
          details?: unknown;
          [key: string]: unknown;
        } | null;
        /** Profile setup guidance for authentication walls or bot challenges. */
        profile_hint?: {
          /** Human-readable setup guidance. */
          message?: string;
          /** Profile setup URL. */
          setup_url?: string;
          /** Reason a profile may help: auth_wall or bot_challenge. */
          reason?: string;
          [key: string]: unknown;
        };
        /** Live browser session URL, available while running. */
        streaming_url?: string | null;
        /** Browser configuration used by the run. */
        browser_config?: {
          /** Whether a proxy was enabled. */
          proxy_enabled?: boolean | null;
          /** Proxy exit country code. */
          proxy_country_code?: string | null;
          [key: string]: unknown;
        } | null;
        /** Presigned recording URL, expiring after 15 minutes, or null. */
        video_url?: string | null;
        /** Steps performed during this run. */
        steps?: Array<{
          /** Step event ID. */
          id?: string;
          /** Step timestamp. */
          timestamp?: string;
          /** Current automation run status. */
          status?: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
          /** Description of the performed action. */
          action?: string | null;
          /** Screenshot URL or data URI according to the requested delivery mode, or null. */
          screenshot?: string | null;
          /** HTML snapshot URL, or null. Requires capture_config.html when submitting. */
          html?: string | null;
          /** Step duration. */
          duration?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve up to 100 automation runs, including per-run results, steps, and missing IDs. */
    "tinyfish.get_runs": {
      input: {
        /**
         * Run IDs.
         * @minItems 1
         * @maxItems 100
         */
        run_ids: Array<string>;
      };
      output: {
        /** Found automation runs. */
        data?: Array<{
          /**
           * Automation run ID.
           * @minLength 1
           * @pattern ^[A-Za-z0-9_-]+$
           */
          run_id: string;
          /** Current automation run status. */
          status: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
          /** Natural language goal for this automation run. */
          goal?: string;
          /** Run creation timestamp. */
          created_at?: string;
          /** Run start timestamp, or null before execution. */
          started_at?: string | null;
          /** Run completion timestamp, or null before completion. */
          finished_at?: string | null;
          /**
           * Number of automation steps; null while in progress.
           * @minimum 0
           */
          num_of_steps?: number | null;
          /** Extracted structured result. */
          result?: Record<string, unknown> | null;
          /** Provider-supported structured-output schema subset. Unsupported schema keywords are rejected by TinyFish. */
          output_schema?: Record<string, unknown> | null;
          /** Whether a Browser Context Profile was attached. */
          profile_attached?: boolean;
          /** Attached Browser Context Profile ID, or null. */
          profile_id?: string | null;
          /** Provider error details, including retry guidance and profile setup hints. */
          error?: {
            /** Machine-readable error code. */
            code?: string;
            /** Human-readable error message. */
            message?: string;
            /** Error category: SYSTEM_FAILURE, AGENT_FAILURE, BILLING_FAILURE, or UNKNOWN. */
            category?: string;
            /** Suggested retry delay in seconds, or null when not retryable. */
            retry_after?: number | null;
            /** Troubleshooting documentation URL. */
            help_url?: string;
            /** Troubleshooting guidance. */
            help_message?: string;
            /** Additional provider error details, including validation errors. */
            details?: unknown;
            [key: string]: unknown;
          } | null;
          /** Profile setup guidance for authentication walls or bot challenges. */
          profile_hint?: {
            /** Human-readable setup guidance. */
            message?: string;
            /** Profile setup URL. */
            setup_url?: string;
            /** Reason a profile may help: auth_wall or bot_challenge. */
            reason?: string;
            [key: string]: unknown;
          };
          /** Live browser session URL, available while running. */
          streaming_url?: string | null;
          /** Browser configuration used by the run. */
          browser_config?: {
            /** Whether a proxy was enabled. */
            proxy_enabled?: boolean | null;
            /** Proxy exit country code. */
            proxy_country_code?: string | null;
            [key: string]: unknown;
          } | null;
          /** Presigned recording URL, expiring after 15 minutes, or null. */
          video_url?: string | null;
          /** Steps performed during this run. */
          steps?: Array<{
            /** Step event ID. */
            id?: string;
            /** Step timestamp. */
            timestamp?: string;
            /** Current automation run status. */
            status?: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
            /** Description of the performed action. */
            action?: string | null;
            /** Screenshot URL or data URI according to the requested delivery mode, or null. */
            screenshot?: string | null;
            /** HTML snapshot URL, or null. Requires capture_config.html when submitting. */
            html?: string | null;
            /** Step duration. */
            duration?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Run IDs not found or not owned; null if all were found. */
        not_found?: Array<string> | null;
        [key: string]: unknown;
      };
    };
    /** Download a captured automation-step HTML snapshot and return a file-transit URL. Requires capture_config.html when submitting the run. */
    "tinyfish.get_step_html": {
      input: {
        /**
         * Automation run ID.
         * @minLength 1
         * @pattern ^[A-Za-z0-9_-]+$
         */
        id: string;
        /**
         * Step event ID.
         * @minLength 1
         * @pattern ^[A-Za-z0-9_-]+$
         */
        stepId: string;
      };
      output: {
        /**
         * Download URL of the captured file.
         * @format uri
         */
        url: string;
        /** Captured file MIME type. */
        mimeType: string;
      };
    };
    /** Download a captured automation-step screenshot and return a file-transit URL. */
    "tinyfish.get_step_screenshot": {
      input: {
        /**
         * Automation run ID.
         * @minLength 1
         * @pattern ^[A-Za-z0-9_-]+$
         */
        id: string;
        /**
         * Step event ID.
         * @minLength 1
         * @pattern ^[A-Za-z0-9_-]+$
         */
        stepId: string;
      };
      output: {
        /**
         * Download URL of the captured file.
         * @format uri
         */
        url: string;
        /** Captured file MIME type. */
        mimeType: string;
      };
    };
    /** Get wallet balance, auto-reload configuration, rates, and pending top-up details. */
    "tinyfish.get_wallet": {
      input: Record<string, never>;
      output: {
        /** Spendable decimal USD balance; negative means overdrawn. */
        available_balance: string;
        /** Wallet currency. */
        currency: "USD";
        /**
         * Balance observation timestamp.
         * @format date-time
         */
        as_of: string;
        /** Auto-reload configuration; null means the contract read failed. */
        auto_reload: {
          /** Auto-reload state. */
          state: "unconfigured" | "on" | "off" | "paused_payment_failed" | "needs_payment_method";
          /** Balance floor triggering reload. */
          threshold?: string;
          /** Target balance after reload. */
          recharge_to?: string;
          [key: string]: unknown;
        } | null;
        /** In-flight top-up; null also covers a failed ledger read. */
        pending_top_up: {
          /** Decimal amount in USD. */
          amount?: string;
          /**
           * Top-up start timestamp.
           * @format date-time
           */
          started_at?: string;
          [key: string]: unknown;
        } | null;
        /** Rates; null means unavailable or no rate contract. */
        rates: {
          /** Priced product meters. */
          meters?: Array<{
            /** Meter label. */
            label: string;
            /** Decimal USD per-unit price. */
            unit_amount: string;
            /** Rate currency. */
            currency: "USD";
            /** Billable unit, if labeled. */
            per?: string;
            [key: string]: unknown;
          }>;
          /**
           * Rates observation timestamp.
           * @format date-time
           */
          as_of?: string;
          [key: string]: unknown;
        } | null;
        /**
         * Top-up endpoint when agent-paid funding is available.
         * @format uri
         */
        agent_top_up_url?: string;
        [key: string]: unknown;
      };
    };
    /** List paginated browser session usage, filtered by session, timestamps, or status. */
    "tinyfish.list_browser_usage": {
      input: {
        /** Session ID filter. */
        session_id?: string;
        /**
         * Include sessions starting after this timestamp.
         * @format date-time
         */
        start_after?: string;
        /**
         * Include sessions ending before this timestamp.
         * @format date-time
         */
        end_before?: string;
        /** Session status filter. */
        status?: "running" | "ended";
        /**
         * Page size; defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Page number; defaults to 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Browser usage records. */
        items?: Array<{
          /**
           * Browser session ID.
           * @minLength 1
           */
          session_id?: string;
          /** User ID. */
          user_id?: string;
          /** Sub-user ID. */
          sub_user_id?: string | null;
          /** Browser mode. */
          mode?: "light" | "stealth" | "tf-browser";
          /**
           * Session start timestamp.
           * @format date-time
           */
          start_time?: string;
          /**
           * Session end timestamp.
           * @format date-time
           */
          end_time?: string | null;
          /** Duration in milliseconds. */
          duration_ms?: number | null;
          /** Proxy received bytes. */
          proxy_trg_rx_bytes?: number | null;
          /** Proxy transmitted bytes. */
          proxy_trg_tx_bytes?: number | null;
          /** Session status. */
          status?: "running" | "ended" | "created";
          /**
           * Creation timestamp.
           * @format date-time
           */
          created_at?: string;
          /**
           * Update timestamp.
           * @format date-time
           */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Total matching records. */
        total?: number;
        /** Page size. */
        limit?: number;
        /** Current page. */
        page?: number;
        /** Total pages. */
        total_pages?: number;
        /** Whether more pages exist. */
        has_more?: boolean;
        [key: string]: unknown;
      };
    };
    /** List paginated fetch usage records. */
    "tinyfish.list_fetch_usage": {
      input: {
        /**
         * Start timestamp, exclusive.
         * @format date-time
         */
        start_after?: string;
        /**
         * End timestamp, exclusive.
         * @format date-time
         */
        end_before?: string;
        /** Usage outcome. */
        status?: "completed" | "failed";
        /**
         * Records per page; defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Usage records. */
        items?: Array<Record<string, unknown>>;
        /** Total records. */
        total?: number;
        /** Page size. */
        limit?: number;
        /** Current page. */
        page?: number;
        /** Total pages. */
        total_pages?: number;
        /** Whether another page exists. */
        has_more?: boolean;
        [key: string]: unknown;
      };
    };
    /** List Page and Topic Monitors owned by the personal API key. */
    "tinyfish.list_monitors": {
      input: Record<string, never>;
      output: {
        /** Owned monitors. */
        monitors?: Array<{
          /**
           * Monitor identifier.
           * @minLength 1
           * @maxLength 36
           */
          id?: string;
          /** Monitor name. */
          name?: string | null;
          /** Schedule expression. */
          schedule_cron?: string;
          /** Monitor state. */
          status?: "creating" | "active" | "paused" | "failed" | "cancelled";
          /** Most recent error. */
          last_error?: string | null;
          /** Results webhook URL. */
          webhook_url?: string | null;
          /** Creation timestamp. */
          created_at?: string;
          /** Update timestamp. */
          updated_at?: string;
          /** Monitor type. */
          type?: "fetch" | "search";
          /** Page or topic configuration. */
          config?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Browser Context Profiles and tracked signed-in sites. */
    "tinyfish.list_profiles": {
      input: Record<string, never>;
      output: {
        /** Available profiles. */
        profiles?: Array<{
          /**
           * Browser Context Profile ID.
           * @minLength 1
           */
          id: string;
          /** Browser Context Profile display name. */
          name: string;
          /** Proxy country code. */
          proxy_country_code?: string | null;
          /** Whether this is the default profile. */
          is_default?: boolean;
          /** Browser fingerprint seed. */
          fingerprint_seed?: string;
          /**
           * Number of saved domains.
           * @minimum 0
           */
          domain_count?: number;
          /** Creation timestamp. */
          created_at: string;
          /** Last update timestamp. */
          updated_at?: string;
          /** Sites with saved sign-in cookies; this does not guarantee a valid session. */
          signed_in_sites?: Array<{
            /** Registered domain. */
            site?: string;
            /** Sign-in tracking timestamp. */
            claimed_at?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List research runs with query, state, timestamp and cursor filters. */
    "tinyfish.list_research_runs": {
      input: {
        /** Research run state. */
        status?: "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "TIMED_OUT" | "QUEUED";
        /**
         * Case-insensitive partial query filter.
         * @maxLength 500
         */
        query?: string;
        /**
         * Created after timestamp.
         * @format date-time
         */
        created_after?: string;
        /**
         * Created before timestamp.
         * @format date-time
         */
        created_before?: string;
        /** Creation time sort order; defaults to desc. */
        sort_direction?: "asc" | "desc";
        /** Pagination cursor; replay with the same sort_direction. */
        cursor?: string;
        /**
         * Maximum returned records.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Research runs. */
        data?: Array<{
          /**
           * Research run identifier.
           * @minLength 1
           */
          research_run_id?: string;
          /** Research run state. */
          status?: "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED" | "TIMED_OUT" | "QUEUED";
          /** Research question. */
          query?: string;
          /** Quick answer, citations and optional progress. */
          quick_result?: Record<string, unknown> | null;
          /** Quick answer summary. */
          quick_result_summary?: string | null;
          /** Final report. */
          deep_result?: {
            /** Report text. */
            result?: string;
            /** Cited sources. */
            citations?: Array<string>;
            /** Source freshness information. */
            freshness_report?: Record<string, unknown>;
            /** Reason research stopped; synthesis_failed indicates interim findings. */
            termination_reason?: string;
            [key: string]: unknown;
          } | null;
          /** Spawned agent run identifiers. */
          run_ids?: Array<string>;
          /** Creation timestamp. */
          created_at?: string | null;
          /** Completion timestamp. */
          completed_at?: string | null;
          /** Saved terminal outcome, not an HTTP request error. */
          error?: Record<string, unknown> | null;
          /** Subquestions and planned searches. */
          research_plan?: Record<string, unknown> | null;
          /** Sources and supported claims. */
          evidence?: Array<Record<string, unknown>> | null;
          /**
           * Completed research iterations.
           * @minimum 0
           */
          iterations?: number | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata. */
        pagination?: {
          /** Total matching runs. */
          total?: number;
          /** Next-page cursor. */
          next_cursor?: string | null;
          /** Whether more results exist. */
          has_more?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List and search automation runs with cursor pagination, status, goal, and creation-time filters. */
    "tinyfish.list_runs": {
      input: {
        /** Current automation run status. */
        status?: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
        /**
         * Case-insensitive partial goal text filter.
         * @maxLength 500
         */
        goal?: string;
        /**
         * Filter runs created after this ISO 8601 timestamp.
         * @format date-time
         */
        created_after?: string;
        /**
         * Filter runs created before this ISO 8601 timestamp.
         * @format date-time
         */
        created_before?: string;
        /** Sort order by creation time; defaults to desc. */
        sort_direction?: "asc" | "desc";
        /** Pagination cursor from the previous response. */
        cursor?: string;
        /**
         * Maximum results; defaults to 20.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** Run summaries without steps and video URLs. */
        data?: Array<{
          /**
           * Automation run ID.
           * @minLength 1
           * @pattern ^[A-Za-z0-9_-]+$
           */
          run_id?: string;
          /** Current automation run status. */
          status?: "PENDING" | "RUNNING" | "COMPLETED" | "FAILED" | "CANCELLED";
          /** Natural language goal for this automation run. */
          goal?: string;
          /** Run creation timestamp. */
          created_at?: string;
          /** Run start timestamp, or null before execution. */
          started_at?: string | null;
          /** Run completion timestamp, or null before completion. */
          finished_at?: string | null;
          /**
           * Number of automation steps; null while in progress.
           * @minimum 0
           */
          num_of_steps?: number | null;
          /** Extracted structured result. */
          result?: Record<string, unknown> | null;
          /** Provider-supported structured-output schema subset. Unsupported schema keywords are rejected by TinyFish. */
          output_schema?: Record<string, unknown> | null;
          /** Whether a Browser Context Profile was attached. */
          profile_attached?: boolean;
          /** Attached Browser Context Profile ID, or null. */
          profile_id?: string | null;
          /** Provider error details, including retry guidance and profile setup hints. */
          error?: {
            /** Machine-readable error code. */
            code?: string;
            /** Human-readable error message. */
            message?: string;
            /** Error category: SYSTEM_FAILURE, AGENT_FAILURE, BILLING_FAILURE, or UNKNOWN. */
            category?: string;
            /** Suggested retry delay in seconds, or null when not retryable. */
            retry_after?: number | null;
            /** Troubleshooting documentation URL. */
            help_url?: string;
            /** Troubleshooting guidance. */
            help_message?: string;
            /** Additional provider error details, including validation errors. */
            details?: unknown;
            [key: string]: unknown;
          } | null;
          /** Profile setup guidance for authentication walls or bot challenges. */
          profile_hint?: {
            /** Human-readable setup guidance. */
            message?: string;
            /** Profile setup URL. */
            setup_url?: string;
            /** Reason a profile may help: auth_wall or bot_challenge. */
            reason?: string;
            [key: string]: unknown;
          };
          /** Live browser session URL, available while running. */
          streaming_url?: string | null;
          /** Browser configuration used by the run. */
          browser_config?: {
            /** Whether a proxy was enabled. */
            proxy_enabled?: boolean | null;
            /** Proxy exit country code. */
            proxy_country_code?: string | null;
            [key: string]: unknown;
          } | null;
          [key: string]: unknown;
        }>;
        /** Pagination information. */
        pagination?: {
          /** Total matching runs. */
          total?: number;
          /** Next-page cursor; null on the last page. */
          next_cursor?: string | null;
          /** Whether more results exist. */
          has_more?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List paginated search usage records and recorded results. */
    "tinyfish.list_search_usage": {
      input: {
        /**
         * Start timestamp, exclusive.
         * @format date-time
         */
        start_after?: string;
        /**
         * End timestamp, exclusive.
         * @format date-time
         */
        end_before?: string;
        /** Usage outcome. */
        status?: "completed" | "failed";
        /**
         * Records per page; defaults to 100.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Usage records. */
        items?: Array<Record<string, unknown>>;
        /** Total records. */
        total?: number;
        /** Page size. */
        limit?: number;
        /** Current page. */
        page?: number;
        /** Total pages. */
        total_pages?: number;
        /** Whether another page exists. */
        has_more?: boolean;
        [key: string]: unknown;
      };
    };
    /** List connected password managers and validation status. */
    "tinyfish.list_vault_connections": {
      input: Record<string, never>;
      output: {
        /** Vault connections. */
        connections?: Array<{
          /** Connection ID. */
          id?: string;
          /** Password manager provider. */
          provider?: "1password" | "bitwarden";
          /** Connection status. */
          connectionStatus?: string;
          /** Last validation timestamp. */
          lastValidatedAt?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List display-safe vault item metadata available from connected password managers. */
    "tinyfish.list_vault_items": {
      input: Record<string, never>;
      output: {
        /** Available vault items. */
        items?: Array<{
          /** Vault item ID. */
          itemId?: string;
          /** Connection ID. */
          connectionId?: string | null;
          /** Item display label. */
          label?: string;
          /** Vault name. */
          vaultName?: string;
          /** Domains associated with this item. */
          domains?: Array<string>;
          /** Display-safe field metadata. */
          fieldMetadata?: Array<{
            /** Field ID. */
            fieldId?: string;
            /** Field label. */
            label?: string;
            /** Field type. */
            type?: "STRING" | "CONCEALED" | "OTP";
            [key: string]: unknown;
          }>;
          /** Whether the item contains a time-based one-time password. */
          hasTotp?: boolean;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Run a Monitor immediately and return its Page or Topic results. */
    "tinyfish.run_monitor": {
      input: {
        /**
         * Monitor identifier.
         * @minLength 1
         * @maxLength 36
         */
        id: string;
      };
      output: {
        /** Page or Topic run, including change detection results. */
        run?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Save cookies and browser storage from a setup session into its profile. */
    "tinyfish.save_profile_setup_session": {
      input: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        profileId: string;
        /**
         * Browser session ID.
         * @minLength 1
         */
        session_id: string;
        /**
         * Hosts or URLs the user confirms signing into. Only sites with saved cookies are recorded.
         * @maxItems 20
         */
        signed_in_sites?: Array<string>;
      };
      output: {
        /** Domains whose state was saved. */
        domains_updated: Array<string>;
        /** Domains whose state could not be saved. */
        domains_failed: Array<string>;
        /**
         * Saved cookie count.
         * @minimum 0
         */
        cookie_count: number;
        /** Domains skipped by state category. */
        domains_skipped: {
          /** Domains with skipped cookies. */
          cookies_skipped?: Array<string>;
          /** Origins with skipped local storage. */
          local_storage_skipped?: Array<string>;
          /** Origins with skipped session storage. */
          session_storage_skipped?: Array<string>;
          /** Domains whose saved state exceeded the size limit. */
          blob_too_large?: Array<string>;
          [key: string]: unknown;
        };
        /**
         * Captured page count.
         * @minimum 0
         */
        pages_captured?: number;
        /**
         * Skipped target read count.
         * @minimum 0
         */
        target_reads_skipped?: number;
        /** Whether browser cleanup failed. */
        cleanup_failed?: boolean;
        /** Cleanup operation kind. */
        cleanup_kind?: string;
        /** Sites recorded as signed in. */
        signed_in_sites?: Array<string>;
        /** Sign-in detection for the setup's initial site. */
        sign_in?: {
          /** Site domain. */
          site?: string | null;
          /** Detection status. */
          status?: "recorded" | "already_recorded" | "not_detected" | "unverifiable";
          [key: string]: unknown;
        };
        /** Results for user-confirmed sites. */
        user_confirmed_sites?: {
          /** Recorded registered domains. */
          recorded?: Array<string>;
          /** Rejected sites. */
          rejected?: Array<{
            /** Rejected site. */
            site?: string;
            /** Rejection reason. */
            reason?: "invalid_site" | "not_saved" | "no_sign_in_cookie" | "record_failed";
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Search web pages, news or research papers with optional content fetching. */
    "tinyfish.search": {
      input: {
        /**
         * Search query.
         * @minLength 1
         * @maxLength 2000
         */
        query: string;
        /**
         * Underlying task used to rank results.
         * @minLength 1
         * @maxLength 2000
         */
        purpose?: string;
        /** Country code; inferred from language when omitted. */
        location?: string;
        /** Language code; inferred from location when omitted. */
        language?: string;
        /** Comma-separated domains to include. */
        include_domains?: string;
        /** Comma-separated domains to exclude. */
        exclude_domains?: string;
        /** Search source pool. */
        domain_type?: "web" | "news" | "research_paper";
        /** Return results after YYYY-MM-DD. */
        after_date?: string;
        /** Return results before YYYY-MM-DD. */
        before_date?: string;
        /**
         * Freshness window in minutes.
         * @minimum 1
         * @maximum 5256000
         */
        recency_minutes?: number;
        /**
         * Minimum research-paper publication year. Only supported for domain_type=research_paper.
         * @minimum 0
         * @maximum 9999
         */
        pub_year_min?: number;
        /**
         * Maximum research-paper publication year. Only supported for domain_type=research_paper.
         * @minimum 0
         * @maximum 9999
         */
        pub_year_max?: number;
        /**
         * Page index, starting at 0.
         * @minimum 0
         * @maximum 10
         */
        page?: number | null;
        /** Include available thumbnails. */
        include_thumbnail?: "true" | "false";
        /** Fetch configuration; encoded as JSON in the query string, maximum 256 encoded characters. */
        fetch?: Record<string, unknown>;
      };
      output: {
        /** Executed query. */
        query?: string;
        /** Ranked results with optional fetched content and fetch_error. */
        results?: Array<Record<string, unknown>>;
        /** Total results. */
        total_results?: number;
        /** Current zero-based page. */
        page?: number;
        /** Correlation ID when any fetch failed. */
        request_id?: string;
        [key: string]: unknown;
      };
    };
    /** Start deep or maximum-depth research and retrieve its reports through get_research_run. */
    "tinyfish.start_research": {
      input: {
        /**
         * Research question.
         * @minLength 1
         * @maxLength 2000
         */
        query: string;
        /** Research depth; defaults to deep. */
        mode?: "deep" | "max";
        /** Emit report text as synthesis events upstream; results are retrieved through get_research_run. */
        stream?: boolean;
        /** BCP 47 report language. */
        output_language?: string;
        /** Allow relevant social and community sources. */
        weak_sources_enabled?: boolean;
        /** Source pool. */
        domain_type?: "web" | "news" | "research_paper";
        /**
         * Include results on or after this date.
         * @format date
         */
        after_date?: string;
        /**
         * Include results on or before this date.
         * @format date
         */
        before_date?: string;
        /**
         * Freshness window; cannot combine with date filters.
         * @minimum 1
         * @maximum 5256000
         */
        recency_minutes?: number;
        /** Domain preferences. */
        domain_filter?: {
          /** Prioritize domains or restrict results exclusively to them. */
          mode: "include" | "exclusive";
          /**
           * Domains to prefer or require.
           * @maxItems 150
           */
          domains?: Array<string>;
          /**
           * Domains to exclude.
           * @maxItems 150
           */
          block?: Array<string>;
        };
        /** Completed report and evidence to reuse; mutually exclusive with session_id. */
        prior_run_id?: string;
        /**
         * Research session to continue; mutually exclusive with prior_run_id.
         * @format uuid
         */
        session_id?: string;
      };
      output: {
        /**
         * Research run identifier.
         * @minLength 1
         */
        research_run_id?: string;
        /** Run creation error; null on success. */
        error?: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
    /** Submit a browser automation task asynchronously. The agent can perform arbitrary website operations; use get_run to retrieve progress and results. */
    "tinyfish.submit_run": {
      input: {
        /**
         * Target website URL to automate.
         * @format uri
         */
        url: string;
        /**
         * Natural language description of the task to perform on the website.
         * @minLength 1
         */
        goal: string;
        /** Browser profile: lite uses a standard browser; stealth enables anti-detection. */
        browser_profile?: "lite" | "stealth";
        /** Integration name used for analytics. */
        api_integration?: string;
        /** Agent behavior configuration. */
        agent_config?: {
          /** Strict mode enables fail-fast behavior for test automation. */
          mode?: "default" | "strict";
          /** Browser agent cursor style. */
          cursor_style?: "fish" | "standard" | "green-pointer";
          /**
           * Maximum tool-call steps; the provider default is 150.
           * @minimum 1
           * @maximum 500
           */
          max_steps?: number;
          /**
           * Maximum wall-clock execution time in seconds. Omit for no limit.
           * @minimum 1
           */
          max_duration_seconds?: number;
        };
        /** Data to capture during the run. */
        capture_config?: {
          /** Capture page elements. */
          elements?: boolean;
          /** Capture browser snapshots. */
          snapshots?: boolean;
          /** Capture screenshots. */
          screenshots?: boolean;
          /** Record the browser session. */
          recording?: boolean;
          /** Capture full-page HTML snapshots. */
          html?: boolean;
        };
        /**
         * HTTPS URL for run lifecycle webhook notifications.
         * @format uri
         */
        webhook_url?: string;
        /** Use enabled vault credentials for this run. Defaults to false. */
        use_vault?: boolean;
        /** Use a Browser Context Profile. If profiles are enabled and no profile_id is given, a default profile must exist. Legacy calls are ignored when profiles are disabled. */
        use_profile?: boolean;
        /**
         * Credential URIs to use. Requires use_vault=true; omit to use all enabled items.
         * @minItems 1
         */
        credential_item_ids?: Array<string>;
        /** Browser proxy configuration. */
        proxy_config?: {
          /** Enable a proxy for this run. */
          enabled: boolean;
          /** Proxy exit country as ISO 3166-1 alpha-2; defaults to US. */
          country_code?: string;
        };
        /**
         * Browser Context Profile ID to use when use_profile is true.
         * @minLength 1
         */
        profile_id?: string;
        /** Provider-supported structured-output schema subset. Unsupported schema keywords are rejected by TinyFish. */
        output_schema?: Record<string, unknown>;
      };
      output: {
        /** Created run ID; null if creation failed. */
        run_id?: string | null;
        /** Provider error details, including retry guidance and profile setup hints. */
        error?: {
          /** Machine-readable error code. */
          code?: string;
          /** Human-readable error message. */
          message?: string;
          /** Error category: SYSTEM_FAILURE, AGENT_FAILURE, BILLING_FAILURE, or UNKNOWN. */
          category?: string;
          /** Suggested retry delay in seconds, or null when not retryable. */
          retry_after?: number | null;
          /** Troubleshooting documentation URL. */
          help_url?: string;
          /** Troubleshooting guidance. */
          help_message?: string;
          /** Additional provider error details, including validation errors. */
          details?: unknown;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Atomically submit 1–100 browser automation tasks. Shared profile_id and output_schema apply to the batch. Retrieve each run using get_run or get_runs. */
    "tinyfish.submit_run_batch": {
      input: {
        /**
         * Automation tasks.
         * @minItems 1
         * @maxItems 100
         */
        runs: Array<{
          /**
           * Target website URL to automate.
           * @format uri
           */
          url: string;
          /**
           * Natural language description of the task to perform on the website.
           * @minLength 1
           */
          goal: string;
          /** Browser profile: lite uses a standard browser; stealth enables anti-detection. */
          browser_profile?: "lite" | "stealth";
          /** Integration name used for analytics. */
          api_integration?: string;
          /** Agent behavior configuration. */
          agent_config?: {
            /** Strict mode enables fail-fast behavior for test automation. */
            mode?: "default" | "strict";
            /** Browser agent cursor style. */
            cursor_style?: "fish" | "standard" | "green-pointer";
            /**
             * Maximum tool-call steps; the provider default is 150.
             * @minimum 1
             * @maximum 500
             */
            max_steps?: number;
            /**
             * Maximum wall-clock execution time in seconds. Omit for no limit.
             * @minimum 1
             */
            max_duration_seconds?: number;
          };
          /** Data to capture during the run. */
          capture_config?: {
            /** Capture page elements. */
            elements?: boolean;
            /** Capture browser snapshots. */
            snapshots?: boolean;
            /** Capture screenshots. */
            screenshots?: boolean;
            /** Record the browser session. */
            recording?: boolean;
            /** Capture full-page HTML snapshots. */
            html?: boolean;
          };
          /**
           * HTTPS URL for run lifecycle webhook notifications.
           * @format uri
           */
          webhook_url?: string;
          /** Use enabled vault credentials for this run. Defaults to false. */
          use_vault?: boolean;
          /** Use a Browser Context Profile. If profiles are enabled and no profile_id is given, a default profile must exist. Legacy calls are ignored when profiles are disabled. */
          use_profile?: boolean;
          /**
           * Credential URIs to use. Requires use_vault=true; omit to use all enabled items.
           * @minItems 1
           */
          credential_item_ids?: Array<string>;
          /** Browser proxy configuration. */
          proxy_config?: {
            /** Enable a proxy for this run. */
            enabled: boolean;
            /** Proxy exit country as ISO 3166-1 alpha-2; defaults to US. */
            country_code?: string;
          };
        }>;
        /**
         * Browser Context Profile ID to use when use_profile is true.
         * @minLength 1
         */
        profile_id?: string;
        /** Provider-supported structured-output schema subset. Unsupported schema keywords are rejected by TinyFish. */
        output_schema?: Record<string, unknown>;
      };
      output: {
        /** Created run IDs, or null on failure. */
        run_ids?: Array<string> | null;
        /** Provider error details, including retry guidance and profile setup hints. */
        error?: {
          /** Machine-readable error code. */
          code?: string;
          /** Human-readable error message. */
          message?: string;
          /** Error category: SYSTEM_FAILURE, AGENT_FAILURE, BILLING_FAILURE, or UNKNOWN. */
          category?: string;
          /** Suggested retry delay in seconds, or null when not retryable. */
          retry_after?: number | null;
          /** Troubleshooting documentation URL. */
          help_url?: string;
          /** Troubleshooting guidance. */
          help_message?: string;
          /** Additional provider error details, including validation errors. */
          details?: unknown;
          [key: string]: unknown;
        } | null;
        [key: string]: unknown;
      };
    };
    /** Sync connected password managers and return item metadata and synchronization counts. */
    "tinyfish.sync_vault_items": {
      input: Record<string, never>;
      output: {
        /** Available vault items. */
        items?: Array<{
          /** Vault item ID. */
          itemId?: string;
          /** Connection ID. */
          connectionId?: string | null;
          /** Item display label. */
          label?: string;
          /** Vault name. */
          vaultName?: string;
          /** Domains associated with this item. */
          domains?: Array<string>;
          /** Display-safe field metadata. */
          fieldMetadata?: Array<{
            /** Field ID. */
            fieldId?: string;
            /** Field label. */
            label?: string;
            /** Field type. */
            type?: "STRING" | "CONCEALED" | "OTP";
            [key: string]: unknown;
          }>;
          /** Whether the item contains a time-based one-time password. */
          hasTotp?: boolean;
          [key: string]: unknown;
        }>;
        /** Synchronization counts. */
        sync_summary?: {
          /**
           * Added item count.
           * @minimum 0
           */
          added?: number;
          /**
           * Updated item count.
           * @minimum 0
           */
          updated?: number;
          /**
           * Removed item count.
           * @minimum 0
           */
          removed?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Terminate a remote browser session; an already-ended session also succeeds. */
    "tinyfish.terminate_browser_session": {
      input: {
        /**
         * Browser session ID.
         * @minLength 1
         */
        sessionId: string;
      };
      output: {
        /** Whether the session termination succeeded. */
        success: boolean;
      };
    };
    /** Request a wallet top-up or submit caller-supplied MPP payment authorization. Return the payment challenge when payment is required. A pending result means payment was charged; do not pay again. */
    "tinyfish.top_up_wallet": {
      input: {
        /**
         * USD amount from 10.00 to 500.00, with at most two decimal places.
         * @pattern ^(?=.*[1-9])(?:0|[1-9]\d{0,11})(?:\.\d{1,2})?$
         */
        amount: string;
        /**
         * Caller-signed MPP Payment-Authorization header value. Omit to obtain a challenge.
         * @minLength 1
         */
        paymentAuthorization?: string;
      };
      output: {
        /** Payment challenge status. */
        status?: "payment_required";
        /** WWW-Authenticate payment challenge. A rejected paid attempt without a challenge is returned as an error with provider guidance. */
        challenge?: string;
        /** Original MPP problem response, including any instruction not to pay again. */
        body?: unknown;
        [key: string]: unknown;
      } | {
        /** Settled or pending credit. Pending means already charged; do not pay again. */
        status: "settled" | "pending";
        /** Decimal amount in USD. */
        amount: string;
        /** Payment currency. */
        currency: "USD";
        /** PaymentIntent reference. */
        payment_reference: string;
        /** Ledger entry ID. */
        ledger_entry_id: string | null;
        /** Spendable balance after credit; null when pending or unreadable. */
        available_balance: string | null;
        /** Provider payment guidance; on pending results, do not pay again. */
        hint?: string;
        [key: string]: unknown;
      };
    };
    /** Pause or resume a Monitor, or update its schedule and optional metadata; these update modes cannot be combined. */
    "tinyfish.update_monitor": {
      input: {
        /**
         * Monitor identifier.
         * @minLength 1
         * @maxLength 36
         */
        id: string;
        /** Monitor status. */
        status: "active" | "paused";
      } | {
        /**
         * Monitor identifier.
         * @minLength 1
         * @maxLength 36
         */
        id: string;
        /**
         * Monitor name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string | null;
        /**
         * Five-field cron in UTC; prefix CRON_TZ=<IANA zone> to choose a timezone.
         * @maxLength 100
         */
        schedule_cron: string;
        /**
         * URL receiving scheduled run results.
         * @format uri
         */
        webhook_url?: string | null;
        /**
         * Describe the change that matters.
         * @minLength 1
         * @maxLength 2000
         */
        purpose?: string | null;
      };
      output: {
        /**
         * Monitor identifier.
         * @minLength 1
         * @maxLength 36
         */
        id?: string;
        /** Monitor name. */
        name?: string | null;
        /** Schedule expression. */
        schedule_cron?: string;
        /** Monitor state. */
        status?: "creating" | "active" | "paused" | "failed" | "cancelled";
        /** Most recent error. */
        last_error?: string | null;
        /** Results webhook URL. */
        webhook_url?: string | null;
        /** Creation timestamp. */
        created_at?: string;
        /** Update timestamp. */
        updated_at?: string;
        /** Monitor type. */
        type?: "fetch" | "search";
        /** Page or topic configuration. */
        config?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update profile metadata, default selection, or proxy country. */
    "tinyfish.update_profile": {
      input: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        profileId: string;
        /**
         * Profile display name.
         * @minLength 1
         * @maxLength 100
         */
        name?: string;
        /** Set this profile as the default. */
        set_as_default?: boolean;
        /** Proxy country code, or null to clear it. */
        proxy_country_code?: string | null;
      };
      output: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        id: string;
        /** Browser Context Profile display name. */
        name: string;
        /** Proxy country code. */
        proxy_country_code?: string | null;
        /** Whether this is the default profile. */
        is_default?: boolean;
        /** Browser fingerprint seed. */
        fingerprint_seed?: string;
        /**
         * Number of saved domains.
         * @minimum 0
         */
        domain_count?: number;
        /** Creation timestamp. */
        created_at: string;
        /** Last update timestamp. */
        updated_at?: string;
        /** Saved domains. */
        domains: Array<{
          /** Saved domain. */
          domain?: string;
          /**
           * Saved cookie count.
           * @minimum 0
           */
          cookie_count?: number;
          /**
           * Saved local storage origin count.
           * @minimum 0
           */
          local_storage_origin_count?: number;
          /** Last access timestamp. */
          last_accessed_at?: string;
          /** Last write timestamp. */
          last_written_at?: string;
          /** Run that last wrote the state. */
          last_written_by_run_id?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Upload cookies, local storage, and session storage into a Browser Context Profile. */
    "tinyfish.upload_profile_state": {
      input: {
        /**
         * Browser Context Profile ID.
         * @minLength 1
         */
        profileId: string;
        /**
         * Browser cookies, including secret values.
         * @maxItems 3000
         */
        cookies: Array<{
          /**
           * Cookie name.
           * @minLength 1
           * @maxLength 4096
           */
          name: string;
          /**
           * Cookie value.
           * @maxLength 16384
           */
          value: string;
          /**
           * Cookie domain.
           * @minLength 1
           * @maxLength 255
           */
          domain: string;
          /**
           * Cookie path.
           * @maxLength 4096
           */
          path?: string;
          /** HTTP-only cookie. */
          httpOnly?: boolean;
          /** Secure cookie. */
          secure?: boolean;
          /** Same-site policy. */
          sameSite?: "Strict" | "Lax" | "None";
          /** Cookie expiry timestamp. */
          expires?: number;
          /**
           * Cookie source scheme.
           * @maxLength 10
           */
          sourceScheme?: string;
          /** Cookie source port. */
          sourcePort?: number;
          /**
           * Cookie partition key.
           * @maxLength 255
           */
          partitionKey?: string | null;
          /** Cookie priority. */
          priority?: "Low" | "Medium" | "High";
          [key: string]: unknown;
        }>;
        /**
         * Browser storage grouped by origin.
         * @maxItems 100
         */
        localStorage?: Array<{
          /**
           * Storage origin.
           * @minLength 1
           * @maxLength 2048
           */
          origin: string;
          /** Stored name and value pairs. */
          items: Array<{
            /**
             * Storage key.
             * @maxLength 4096
             */
            name: string;
            /**
             * Storage value, which may contain credentials.
             * @maxLength 5242880
             */
            value: string;
          }>;
        }>;
        /**
         * Session storage grouped by origin.
         * @maxItems 100
         */
        sessionStorage?: Array<{
          /**
           * Storage origin.
           * @minLength 1
           * @maxLength 2048
           */
          origin: string;
          /** Stored name and value pairs. */
          items: Array<{
            /**
             * Storage key.
             * @maxLength 4096
             */
            name: string;
            /**
             * Storage value, which may contain credentials.
             * @maxLength 5242880
             */
            value: string;
          }>;
        }>;
      };
      output: {
        /** Domains whose state was saved. */
        domains_updated?: Array<string>;
        /** Domains whose state could not be saved. */
        domains_failed?: Array<string>;
        /**
         * Saved cookie count.
         * @minimum 0
         */
        cookie_count?: number;
        /** Domains skipped by state category. */
        domains_skipped?: {
          /** Domains with skipped cookies. */
          cookies_skipped?: Array<string>;
          /** Origins with skipped local storage. */
          local_storage_skipped?: Array<string>;
          /** Origins with skipped session storage. */
          session_storage_skipped?: Array<string>;
          /** Domains whose saved state exceeded the size limit. */
          blob_too_large?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
