import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one Cronitor monitor. */
    "cronitor.create_monitor": {
      input: {
        /** The Cronitor monitor type. */
        type: "job" | "check" | "heartbeat" | "site";
        /**
         * The unique key of the Cronitor monitor.
         * @minLength 1
         */
        key: string;
        /**
         * The human-readable monitor name.
         * @minLength 1
         */
        name?: string;
        /**
         * The cron expressions, interval expressions, or time schedules for this monitor.
         * @minItems 1
         */
        schedules?: Array<string>;
        /**
         * The timezone used to evaluate the monitor schedule.
         * @minLength 1
         */
        timezone?: string;
        /**
         * Assertions Cronitor evaluates for this monitor.
         * @minItems 1
         */
        assertions?: Array<string>;
        /** Cronitor notification list or occurrence-based settings. */
        notify?: Array<string> | {
          /** Notification list keys or integration targets Cronitor alerts for this monitor. */
          alerts?: Array<string>;
          /** Lifecycle telemetry events that should trigger notifications. */
          events?: {
            /** Whether Cronitor should notify when a run event occurs. */
            run?: boolean;
            /** Whether Cronitor should notify when a complete event occurs. */
            complete?: boolean;
          };
        };
        /** The note attached to the monitor. */
        note?: string;
        /**
         * The platform associated with the monitor.
         * @minLength 1
         */
        platform?: string;
        /**
         * The group assigned to the monitor.
         * @minLength 1
         */
        group?: string;
        /** The HTTP request configuration used by Cronitor check monitors. */
        request?: {
          /**
           * The URL that Cronitor checks.
           * @format uri
           */
          url?: string;
          /**
           * The HTTP method used by Cronitor when checking the URL.
           * @minLength 1
           */
          method?: string;
          /**
           * The request timeout in seconds.
           * @exclusiveMinimum 0
           */
          timeout_seconds?: number;
          /** HTTP headers sent by Cronitor when checking the URL. */
          headers?: Record<string, string>;
          [key: string]: unknown;
        };
        /** The grace period in seconds before Cronitor marks the monitor failed. */
        grace_seconds?: number;
        /** The number of tolerated failures before Cronitor alerts. */
        failure_tolerance?: number;
      };
      output: {
        /** A monitor resource returned by Cronitor. */
        monitor: {
          /** The unique key of the Cronitor monitor. */
          key?: string;
          /** The Cronitor monitor type. */
          type?: string;
          /** The human-readable monitor name. */
          name?: string;
          /** The cron expressions, interval expressions, or time schedules for this monitor. */
          schedules?: Array<string>;
          /** The timezone used to evaluate the monitor schedule. */
          timezone?: string;
          /** Assertions Cronitor evaluates for this monitor. */
          assertions?: Array<string>;
          /** Cronitor notification list or occurrence-based settings. */
          notify?: Array<string> | {
            /** Notification list keys or integration targets Cronitor alerts for this monitor. */
            alerts?: Array<string>;
            /** Lifecycle telemetry events that should trigger notifications. */
            events?: {
              /** Whether Cronitor should notify when a run event occurs. */
              run?: boolean;
              /** Whether Cronitor should notify when a complete event occurs. */
              complete?: boolean;
            };
          };
          /** The note attached to the monitor. */
          note?: string;
          /** The platform associated with the monitor. */
          platform?: string;
          /** The group assigned to the monitor. */
          group?: string;
          /** The HTTP request configuration used by Cronitor check monitors. */
          request?: {
            /**
             * The URL that Cronitor checks.
             * @format uri
             */
            url?: string;
            /**
             * The HTTP method used by Cronitor when checking the URL.
             * @minLength 1
             */
            method?: string;
            /**
             * The request timeout in seconds.
             * @exclusiveMinimum 0
             */
            timeout_seconds?: number;
            /** HTTP headers sent by Cronitor when checking the URL. */
            headers?: Record<string, string>;
            [key: string]: unknown;
          };
          /** The grace period in seconds before Cronitor marks the monitor failed. */
          grace_seconds?: number;
          /** The number of tolerated failures before Cronitor alerts. */
          failure_tolerance?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Cronitor monitor by key. */
    "cronitor.delete_monitor": {
      input: {
        /**
         * The unique key of the Cronitor monitor.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
        /** A monitor resource returned by Cronitor. */
        monitor?: {
          /** The unique key of the Cronitor monitor. */
          key?: string;
          /** The Cronitor monitor type. */
          type?: string;
          /** The human-readable monitor name. */
          name?: string;
          /** The cron expressions, interval expressions, or time schedules for this monitor. */
          schedules?: Array<string>;
          /** The timezone used to evaluate the monitor schedule. */
          timezone?: string;
          /** Assertions Cronitor evaluates for this monitor. */
          assertions?: Array<string>;
          /** Cronitor notification list or occurrence-based settings. */
          notify?: Array<string> | {
            /** Notification list keys or integration targets Cronitor alerts for this monitor. */
            alerts?: Array<string>;
            /** Lifecycle telemetry events that should trigger notifications. */
            events?: {
              /** Whether Cronitor should notify when a run event occurs. */
              run?: boolean;
              /** Whether Cronitor should notify when a complete event occurs. */
              complete?: boolean;
            };
          };
          /** The note attached to the monitor. */
          note?: string;
          /** The platform associated with the monitor. */
          platform?: string;
          /** The group assigned to the monitor. */
          group?: string;
          /** The HTTP request configuration used by Cronitor check monitors. */
          request?: {
            /**
             * The URL that Cronitor checks.
             * @format uri
             */
            url?: string;
            /**
             * The HTTP method used by Cronitor when checking the URL.
             * @minLength 1
             */
            method?: string;
            /**
             * The request timeout in seconds.
             * @exclusiveMinimum 0
             */
            timeout_seconds?: number;
            /** HTTP headers sent by Cronitor when checking the URL. */
            headers?: Record<string, string>;
            [key: string]: unknown;
          };
          /** The grace period in seconds before Cronitor marks the monitor failed. */
          grace_seconds?: number;
          /** The number of tolerated failures before Cronitor alerts. */
          failure_tolerance?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Cronitor monitor by key. */
    "cronitor.get_monitor": {
      input: {
        /**
         * The unique key of the Cronitor monitor.
         * @minLength 1
         */
        key: string;
      };
      output: {
        /** A monitor resource returned by Cronitor. */
        monitor: {
          /** The unique key of the Cronitor monitor. */
          key?: string;
          /** The Cronitor monitor type. */
          type?: string;
          /** The human-readable monitor name. */
          name?: string;
          /** The cron expressions, interval expressions, or time schedules for this monitor. */
          schedules?: Array<string>;
          /** The timezone used to evaluate the monitor schedule. */
          timezone?: string;
          /** Assertions Cronitor evaluates for this monitor. */
          assertions?: Array<string>;
          /** Cronitor notification list or occurrence-based settings. */
          notify?: Array<string> | {
            /** Notification list keys or integration targets Cronitor alerts for this monitor. */
            alerts?: Array<string>;
            /** Lifecycle telemetry events that should trigger notifications. */
            events?: {
              /** Whether Cronitor should notify when a run event occurs. */
              run?: boolean;
              /** Whether Cronitor should notify when a complete event occurs. */
              complete?: boolean;
            };
          };
          /** The note attached to the monitor. */
          note?: string;
          /** The platform associated with the monitor. */
          platform?: string;
          /** The group assigned to the monitor. */
          group?: string;
          /** The HTTP request configuration used by Cronitor check monitors. */
          request?: {
            /**
             * The URL that Cronitor checks.
             * @format uri
             */
            url?: string;
            /**
             * The HTTP method used by Cronitor when checking the URL.
             * @minLength 1
             */
            method?: string;
            /**
             * The request timeout in seconds.
             * @exclusiveMinimum 0
             */
            timeout_seconds?: number;
            /** HTTP headers sent by Cronitor when checking the URL. */
            headers?: Record<string, string>;
            [key: string]: unknown;
          };
          /** The grace period in seconds before Cronitor marks the monitor failed. */
          grace_seconds?: number;
          /** The number of tolerated failures before Cronitor alerts. */
          failure_tolerance?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Cronitor monitors in the current account. */
    "cronitor.list_monitors": {
      input: Record<string, never>;
      output: {
        /** The monitors returned by Cronitor. */
        monitors: Array<{
          /** The unique key of the Cronitor monitor. */
          key?: string;
          /** The Cronitor monitor type. */
          type?: string;
          /** The human-readable monitor name. */
          name?: string;
          /** The cron expressions, interval expressions, or time schedules for this monitor. */
          schedules?: Array<string>;
          /** The timezone used to evaluate the monitor schedule. */
          timezone?: string;
          /** Assertions Cronitor evaluates for this monitor. */
          assertions?: Array<string>;
          /** Cronitor notification list or occurrence-based settings. */
          notify?: Array<string> | {
            /** Notification list keys or integration targets Cronitor alerts for this monitor. */
            alerts?: Array<string>;
            /** Lifecycle telemetry events that should trigger notifications. */
            events?: {
              /** Whether Cronitor should notify when a run event occurs. */
              run?: boolean;
              /** Whether Cronitor should notify when a complete event occurs. */
              complete?: boolean;
            };
          };
          /** The note attached to the monitor. */
          note?: string;
          /** The platform associated with the monitor. */
          platform?: string;
          /** The group assigned to the monitor. */
          group?: string;
          /** The HTTP request configuration used by Cronitor check monitors. */
          request?: {
            /**
             * The URL that Cronitor checks.
             * @format uri
             */
            url?: string;
            /**
             * The HTTP method used by Cronitor when checking the URL.
             * @minLength 1
             */
            method?: string;
            /**
             * The request timeout in seconds.
             * @exclusiveMinimum 0
             */
            timeout_seconds?: number;
            /** HTTP headers sent by Cronitor when checking the URL. */
            headers?: Record<string, string>;
            [key: string]: unknown;
          };
          /** The grace period in seconds before Cronitor marks the monitor failed. */
          grace_seconds?: number;
          /** The number of tolerated failures before Cronitor alerts. */
          failure_tolerance?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update one Cronitor monitor by key. */
    "cronitor.update_monitor": {
      input: {
        /** The Cronitor monitor type. */
        type: "job" | "check" | "heartbeat" | "site";
        /**
         * The unique key of the Cronitor monitor.
         * @minLength 1
         */
        key: string;
        /**
         * The human-readable monitor name.
         * @minLength 1
         */
        name?: string;
        /**
         * The cron expressions, interval expressions, or time schedules for this monitor.
         * @minItems 1
         */
        schedules?: Array<string>;
        /**
         * The timezone used to evaluate the monitor schedule.
         * @minLength 1
         */
        timezone?: string;
        /**
         * Assertions Cronitor evaluates for this monitor.
         * @minItems 1
         */
        assertions?: Array<string>;
        /** Cronitor notification list or occurrence-based settings. */
        notify?: Array<string> | {
          /** Notification list keys or integration targets Cronitor alerts for this monitor. */
          alerts?: Array<string>;
          /** Lifecycle telemetry events that should trigger notifications. */
          events?: {
            /** Whether Cronitor should notify when a run event occurs. */
            run?: boolean;
            /** Whether Cronitor should notify when a complete event occurs. */
            complete?: boolean;
          };
        };
        /** The note attached to the monitor. */
        note?: string;
        /**
         * The platform associated with the monitor.
         * @minLength 1
         */
        platform?: string;
        /**
         * The group assigned to the monitor.
         * @minLength 1
         */
        group?: string;
        /** The HTTP request configuration used by Cronitor check monitors. */
        request?: {
          /**
           * The URL that Cronitor checks.
           * @format uri
           */
          url?: string;
          /**
           * The HTTP method used by Cronitor when checking the URL.
           * @minLength 1
           */
          method?: string;
          /**
           * The request timeout in seconds.
           * @exclusiveMinimum 0
           */
          timeout_seconds?: number;
          /** HTTP headers sent by Cronitor when checking the URL. */
          headers?: Record<string, string>;
          [key: string]: unknown;
        };
        /** The grace period in seconds before Cronitor marks the monitor failed. */
        grace_seconds?: number;
        /** The number of tolerated failures before Cronitor alerts. */
        failure_tolerance?: number;
      };
      output: {
        /** A monitor resource returned by Cronitor. */
        monitor: {
          /** The unique key of the Cronitor monitor. */
          key?: string;
          /** The Cronitor monitor type. */
          type?: string;
          /** The human-readable monitor name. */
          name?: string;
          /** The cron expressions, interval expressions, or time schedules for this monitor. */
          schedules?: Array<string>;
          /** The timezone used to evaluate the monitor schedule. */
          timezone?: string;
          /** Assertions Cronitor evaluates for this monitor. */
          assertions?: Array<string>;
          /** Cronitor notification list or occurrence-based settings. */
          notify?: Array<string> | {
            /** Notification list keys or integration targets Cronitor alerts for this monitor. */
            alerts?: Array<string>;
            /** Lifecycle telemetry events that should trigger notifications. */
            events?: {
              /** Whether Cronitor should notify when a run event occurs. */
              run?: boolean;
              /** Whether Cronitor should notify when a complete event occurs. */
              complete?: boolean;
            };
          };
          /** The note attached to the monitor. */
          note?: string;
          /** The platform associated with the monitor. */
          platform?: string;
          /** The group assigned to the monitor. */
          group?: string;
          /** The HTTP request configuration used by Cronitor check monitors. */
          request?: {
            /**
             * The URL that Cronitor checks.
             * @format uri
             */
            url?: string;
            /**
             * The HTTP method used by Cronitor when checking the URL.
             * @minLength 1
             */
            method?: string;
            /**
             * The request timeout in seconds.
             * @exclusiveMinimum 0
             */
            timeout_seconds?: number;
            /** HTTP headers sent by Cronitor when checking the URL. */
            headers?: Record<string, string>;
            [key: string]: unknown;
          };
          /** The grace period in seconds before Cronitor marks the monitor failed. */
          grace_seconds?: number;
          /** The number of tolerated failures before Cronitor alerts. */
          failure_tolerance?: number;
          [key: string]: unknown;
        };
      };
    };
  }
}
