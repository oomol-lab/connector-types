import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Fly Machine in an app using a JSON Machine configuration. */
    "fly.create_machine": {
      input: {
        /**
         * The Fly App name.
         * @minLength 1
         */
        app_name: string;
        /** The Fly Machine configuration object. Include the documented image field when creating a Machine, and pass additional Fly Machine config fields as needed. */
        config: {
          /**
           * The Docker image to run in the Machine.
           * @minLength 1
           */
          image: string;
          [key: string]: unknown;
        };
        /** Seconds to acquire a lease on the newly created Machine. */
        lease_ttl?: number;
        /** Whether to enable Log Structured Virtual Disks for this Machine. */
        lsvd?: boolean;
        /** Minimum secrets version required for the Machine. */
        min_secrets_version?: number;
        /** Unique name for this Machine. Fly generates one when omitted. */
        name?: string;
        /** Target Fly region. Fly chooses a nearby region when omitted. */
        region?: string;
        /** Whether to create the Machine without booting it. */
        skip_launch?: boolean;
        /** Whether to skip applying app secrets to the Machine. */
        skip_secrets?: boolean;
        /** Whether to leave the Machine disconnected from request routing. */
        skip_service_registration?: boolean;
      };
      output: {
        /** Check statuses for this Machine. */
        checks?: Array<{
          /** The check name. */
          name?: string;
          /** The latest check output. */
          output?: string;
          /** The latest check status. */
          status?: string;
          /** When Fly last updated this check status. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The Fly Machine configuration object returned by the Machines API. */
        config?: Record<string, unknown>;
        /** When this Machine was created. */
        created_at?: string;
        /** Events for this Machine. */
        events?: Array<{
          /** The event identifier. */
          id?: string;
          /** Request details for this event. */
          request?: Record<string, unknown>;
          /** The event source. */
          source?: string;
          /** The event status. */
          status?: string;
          /** The event timestamp. */
          timestamp?: number;
          /** The event type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The Machine host status. */
        host_status?: string;
        /** The Machine ID. */
        id?: string;
        /** The resolved image reference for a Machine. */
        image_ref?: {
          /** The image digest. */
          digest?: string;
          /** Image labels keyed by label name. */
          labels?: Record<string, string>;
          /** The image registry. */
          registry?: string;
          /** The image repository. */
          repository?: string;
          /** The image tag. */
          tag?: string;
          [key: string]: unknown;
        };
        /** The Fly Machine configuration object returned by the Machines API. */
        incomplete_config?: Record<string, unknown>;
        /** The version-specific Machine instance ID. */
        instance_id?: string;
        /** The Machine name. */
        name?: string;
        /** The lease nonce when the Machine is currently leased. */
        nonce?: string;
        /** The Machine private 6PN IPv6 address. */
        private_ip?: string;
        /** The Fly region where the Machine resides. */
        region?: string;
        /** The current Machine state. */
        state?: string;
        /** When this Machine was last updated. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve details for a Fly App by name. */
    "fly.get_app": {
      input: {
        /**
         * The Fly App name.
         * @minLength 1
         */
        app_name: string;
      };
      output: {
        /** The app identifier. */
        id?: string;
        /** The internal numeric app identifier. */
        internal_numeric_id?: number;
        /** The number of Machines in the app. */
        machine_count?: number;
        /** The app name. */
        name?: string;
        /** The private network name associated with the app. */
        network?: string;
        /** Fly organization information for an app. */
        organization?: {
          /** The internal numeric organization identifier. */
          internal_numeric_id?: number;
          /** The organization display name. */
          name?: string;
          /** The organization slug. */
          slug?: string;
          [key: string]: unknown;
        };
        /** The app status. */
        status?: string;
        /** The number of volumes in the app. */
        volume_count?: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve a Fly Machine by app and Machine ID. */
    "fly.get_machine": {
      input: {
        /**
         * The Fly App name.
         * @minLength 1
         */
        app_name: string;
        /**
         * The Fly Machine ID.
         * @minLength 1
         */
        machine_id: string;
      };
      output: {
        /** Check statuses for this Machine. */
        checks?: Array<{
          /** The check name. */
          name?: string;
          /** The latest check output. */
          output?: string;
          /** The latest check status. */
          status?: string;
          /** When Fly last updated this check status. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The Fly Machine configuration object returned by the Machines API. */
        config?: Record<string, unknown>;
        /** When this Machine was created. */
        created_at?: string;
        /** Events for this Machine. */
        events?: Array<{
          /** The event identifier. */
          id?: string;
          /** Request details for this event. */
          request?: Record<string, unknown>;
          /** The event source. */
          source?: string;
          /** The event status. */
          status?: string;
          /** The event timestamp. */
          timestamp?: number;
          /** The event type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The Machine host status. */
        host_status?: string;
        /** The Machine ID. */
        id?: string;
        /** The resolved image reference for a Machine. */
        image_ref?: {
          /** The image digest. */
          digest?: string;
          /** Image labels keyed by label name. */
          labels?: Record<string, string>;
          /** The image registry. */
          registry?: string;
          /** The image repository. */
          repository?: string;
          /** The image tag. */
          tag?: string;
          [key: string]: unknown;
        };
        /** The Fly Machine configuration object returned by the Machines API. */
        incomplete_config?: Record<string, unknown>;
        /** The version-specific Machine instance ID. */
        instance_id?: string;
        /** The Machine name. */
        name?: string;
        /** The lease nonce when the Machine is currently leased. */
        nonce?: string;
        /** The Machine private 6PN IPv6 address. */
        private_ip?: string;
        /** The Fly region where the Machine resides. */
        region?: string;
        /** The current Machine state. */
        state?: string;
        /** When this Machine was last updated. */
        updated_at?: string;
        [key: string]: unknown;
      };
    };
    /** List Fly Apps for an organization through the Machines API. */
    "fly.list_apps": {
      input: {
        /**
         * The Fly organization slug, or personal, to filter apps.
         * @minLength 1
         */
        org_slug: string;
        /** Optional app role filter. */
        app_role?: string;
      };
      output: {
        /** Fly Apps matching the request. */
        apps?: Array<{
          /** The app identifier. */
          id?: string;
          /** The internal numeric app identifier. */
          internal_numeric_id?: number;
          /** The number of Machines in the app. */
          machine_count?: number;
          /** The app name. */
          name?: string;
          /** The private network name associated with the app. */
          network?: string;
          /** Fly organization information for an app. */
          organization?: {
            /** The internal numeric organization identifier. */
            internal_numeric_id?: number;
            /** The organization display name. */
            name?: string;
            /** The organization slug. */
            slug?: string;
            [key: string]: unknown;
          };
          /** The app status. */
          status?: string;
          /** The number of volumes in the app. */
          volume_count?: number;
          [key: string]: unknown;
        }>;
        /** The total number of apps returned by Fly. */
        total_apps?: number;
        [key: string]: unknown;
      };
    };
    /** List Fly Machines in an app with optional state, region, and summary filters. */
    "fly.list_machines": {
      input: {
        /**
         * The Fly App name.
         * @minLength 1
         */
        app_name: string;
        /** Whether to include deleted Machines. */
        include_deleted?: boolean;
        /** Optional Fly region filter. */
        region?: string;
        /** Comma-separated Machine states to filter, such as created, started, stopped, or suspended. */
        state?: string;
        /** Whether to omit large Machine details such as config, checks, and events. */
        summary?: boolean;
      };
      output: Array<{
        /** Check statuses for this Machine. */
        checks?: Array<{
          /** The check name. */
          name?: string;
          /** The latest check output. */
          output?: string;
          /** The latest check status. */
          status?: string;
          /** When Fly last updated this check status. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** The Fly Machine configuration object returned by the Machines API. */
        config?: Record<string, unknown>;
        /** When this Machine was created. */
        created_at?: string;
        /** Events for this Machine. */
        events?: Array<{
          /** The event identifier. */
          id?: string;
          /** Request details for this event. */
          request?: Record<string, unknown>;
          /** The event source. */
          source?: string;
          /** The event status. */
          status?: string;
          /** The event timestamp. */
          timestamp?: number;
          /** The event type. */
          type?: string;
          [key: string]: unknown;
        }>;
        /** The Machine host status. */
        host_status?: string;
        /** The Machine ID. */
        id?: string;
        /** The resolved image reference for a Machine. */
        image_ref?: {
          /** The image digest. */
          digest?: string;
          /** Image labels keyed by label name. */
          labels?: Record<string, string>;
          /** The image registry. */
          registry?: string;
          /** The image repository. */
          repository?: string;
          /** The image tag. */
          tag?: string;
          [key: string]: unknown;
        };
        /** The Fly Machine configuration object returned by the Machines API. */
        incomplete_config?: Record<string, unknown>;
        /** The version-specific Machine instance ID. */
        instance_id?: string;
        /** The Machine name. */
        name?: string;
        /** The lease nonce when the Machine is currently leased. */
        nonce?: string;
        /** The Machine private 6PN IPv6 address. */
        private_ip?: string;
        /** The Fly region where the Machine resides. */
        region?: string;
        /** The current Machine state. */
        state?: string;
        /** When this Machine was last updated. */
        updated_at?: string;
        [key: string]: unknown;
      }>;
    };
    /** Restart a Fly Machine, optionally with a Unix signal and timeout. */
    "fly.restart_machine": {
      input: {
        /**
         * The Fly App name.
         * @minLength 1
         */
        app_name: string;
        /**
         * The Fly Machine ID.
         * @minLength 1
         */
        machine_id: string;
        /** Unix signal to use for the restart. */
        signal?: "SIGHUP" | "SIGINT" | "SIGQUIT" | "SIGKILL" | "SIGUSR1" | "SIGUSR2" | "SIGTERM";
        /** Restart timeout as a Go duration string or number of seconds. */
        timeout?: string;
      };
      output: {
        /** Whether Fly accepted the request. */
        ok: boolean;
      };
    };
    /** Start a Fly Machine. */
    "fly.start_machine": {
      input: {
        /**
         * The Fly App name.
         * @minLength 1
         */
        app_name: string;
        /**
         * The Fly Machine ID.
         * @minLength 1
         */
        machine_id: string;
      };
      output: {
        /** Whether Fly accepted the request. */
        ok: boolean;
      };
    };
    /** Stop a Fly Machine, optionally with a Unix signal and timeout. */
    "fly.stop_machine": {
      input: {
        /**
         * The Fly App name.
         * @minLength 1
         */
        app_name: string;
        /**
         * The Fly Machine ID.
         * @minLength 1
         */
        machine_id: string;
        /** Unix signal to send when stopping the Machine. */
        signal?: "SIGHUP" | "SIGINT" | "SIGQUIT" | "SIGKILL" | "SIGUSR1" | "SIGUSR2" | "SIGTERM";
        /** Stop timeout as a Go duration string, such as 1s. */
        timeout?: string;
      };
      output: {
        /** Whether Fly accepted the request. */
        ok: boolean;
      };
    };
    /** Wait for a Fly Machine to reach a desired state. */
    "fly.wait_for_machine": {
      input: {
        /**
         * The Fly App name.
         * @minLength 1
         */
        app_name: string;
        /**
         * The Fly Machine ID.
         * @minLength 1
         */
        machine_id: string;
        /** Machine event ID to start waiting after. */
        from_event_id?: string;
        /** Desired Machine state to wait for. */
        state?: "started" | "stopped" | "suspended" | "destroyed" | "failed" | "settled";
        /** Maximum wait time in seconds. Fly defaults to 60 seconds. */
        timeout?: number;
        /** Machine version ID to wait for. */
        version?: string;
      };
      output: {
        /** The event ID observed by the wait request. */
        event_id?: string;
        /** Whether the Machine reached the desired state. */
        ok?: boolean;
        /** The Machine state observed by Fly. */
        state?: string;
        /** The Machine version observed by Fly. */
        version?: string;
        [key: string]: unknown;
      };
    };
  }
}
