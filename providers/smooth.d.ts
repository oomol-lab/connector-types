import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a running Smooth task. */
    "smooth.cancel_task": {
      input: {
        /**
         * Task ID returned by submit_task.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** Whether the operation succeeded. */
        success: boolean;
      };
    };
    /** Create a browser profile to persist cookies and authentication across tasks. */
    "smooth.create_profile": {
      input: {
        /**
         * Browser profile ID.
         * @minLength 1
         */
        id?: string | null;
      };
      output: {
        /**
         * Browser profile ID.
         * @minLength 1
         */
        id: string;
        [key: string]: unknown;
      };
    };
    /** Delete a browser profile and its persisted browser state. */
    "smooth.delete_profile": {
      input: {
        /**
         * Browser profile ID.
         * @minLength 1
         */
        profile_id: string;
      };
      output: {
        /** Whether the operation succeeded. */
        success: boolean;
      };
    };
    /** Get task status and results, including optional download URLs and events after a timestamp. */
    "smooth.get_task": {
      input: {
        /**
         * Task ID returned by submit_task.
         * @minLength 1
         */
        task_id: string;
        /** Return events after this timestamp; defaults to zero. */
        event_t?: number;
        /** Include the download URL; defaults to false. */
        downloads?: boolean;
      };
      output: {
        /**
         * Task ID returned by submit_task.
         * @minLength 1
         */
        id: string;
        /** Task state: waiting, running, done, failed or cancelled. */
        status: string;
        /** Task output, optionally matching response_model. */
        output?: unknown;
        /** Credits used by the task. */
        credits_used?: number | null;
        /** Browser device type. */
        device?: string | null;
        /** URL for live browser access. */
        live_url?: string | null;
        /** URL for the task recording. */
        recording_url?: string | null;
        /** URL for downloaded files. */
        downloads_url?: string | null;
        /** Task creation Unix timestamp. */
        created_at?: number | null;
        /** New task events. */
        events?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
    /** List reusable browser profiles. */
    "smooth.list_profiles": {
      input: Record<string, never>;
      output: {
        /** Browser profiles. */
        profiles: Array<{
          /**
           * Browser profile ID.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List tasks, optionally paging to tasks created before a timestamp. */
    "smooth.list_tasks": {
      input: {
        /** Return tasks created before this timestamp. */
        t?: number;
        /**
         * Result limit; defaults to 32.
         * @minimum 1
         * @maximum 128
         */
        l?: number;
      };
      output: {
        /** Tasks in upstream order. */
        tasks: Array<{
          /**
           * Task ID returned by submit_task.
           * @minLength 1
           */
          id: string;
          /** Task state: waiting, running, done, failed or cancelled. */
          status: string;
          /** Task output, optionally matching response_model. */
          output?: unknown;
          /** Credits used by the task. */
          credits_used?: number | null;
          /** Browser device type. */
          device?: string | null;
          /** URL for live browser access. */
          live_url?: string | null;
          /** URL for the task recording. */
          recording_url?: string | null;
          /** URL for downloaded files. */
          downloads_url?: string | null;
          /** Task creation Unix timestamp. */
          created_at?: number | null;
          /** New task events. */
          events?: Array<Record<string, unknown>> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Submit a natural-language browser task to Smooth. The task may modify or delete data on visited sites. Uses account credits; returns immediately for result polling. */
    "smooth.submit_task": {
      input: {
        /**
         * Natural-language task to execute. Interactive sessions and custom tool callbacks are not supported by this action.
         * @minLength 1
         */
        task: string;
        /** JSON Schema for the desired task output. */
        response_model?: Record<string, unknown> | null;
        /**
         * Starting URL visited by Smooth.
         * @format uri
         */
        url?: string | null;
        /** Agent variables; at most 16 keys and 2048 characters per string value. */
        metadata?: Record<string, string | number | boolean> | null;
        /** Previously uploaded file IDs. */
        files?: Array<string> | null;
        /** Agent model; defaults to smooth. */
        agent?: "smooth" | "smooth-lite";
        /**
         * Maximum agent steps; defaults to 32.
         * @minimum 2
         * @maximum 128
         */
        max_steps?: number;
        /** Browser device; defaults to desktop. */
        device?: "desktop" | "mobile" | "desktop-lg";
        /** Allowed URL glob patterns; omitted means unrestricted. */
        allowed_urls?: Array<string> | null;
        /** Record the task; defaults to true. */
        enable_recording?: boolean;
        /**
         * Browser profile ID.
         * @minLength 1
         */
        profile_id?: string | null;
        /** Do not save browser changes to the profile; defaults to false. */
        profile_read_only?: boolean;
        /** Enable stealth mode; defaults to false. */
        stealth_mode?: boolean;
        /** Remote proxy URL. Local self tunnels require a separate Smooth client. */
        proxy_server?: string | null;
        /** Proxy authentication username. */
        proxy_username?: string | null;
        /** Proxy authentication password. */
        proxy_password?: string | null;
        /** Client certificates for secure websites. */
        certificates?: Array<{
          /** Base64-encoded p12 certificate. */
          file: string;
          /** Certificate password. */
          password?: string | null;
        }> | null;
        /** Enable ad blocking; defaults to true. */
        use_adblock?: boolean | null;
        /** Built-in tool configurations, such as screenshot, hover or print_page. */
        additional_tools?: Record<string, Record<string, unknown> | null> | null;
        /** Upstream experimental feature configuration. */
        experimental_features?: Record<string, unknown> | null;
        /** Previously uploaded browser extension IDs. */
        extensions?: Array<string> | null;
        /** Show the mouse cursor; defaults to false. */
        show_cursor?: boolean;
      };
      output: {
        /**
         * Task ID returned by submit_task.
         * @minLength 1
         */
        id: string;
        /** Task state: waiting, running, done, failed or cancelled. */
        status: string;
        /** Task output, optionally matching response_model. */
        output?: unknown;
        /** Credits used by the task. */
        credits_used?: number | null;
        /** Browser device type. */
        device?: string | null;
        /** URL for live browser access. */
        live_url?: string | null;
        /** URL for the task recording. */
        recording_url?: string | null;
        /** URL for downloaded files. */
        downloads_url?: string | null;
        /** Task creation Unix timestamp. */
        created_at?: number | null;
        /** New task events. */
        events?: Array<Record<string, unknown>> | null;
        [key: string]: unknown;
      };
    };
  }
}
