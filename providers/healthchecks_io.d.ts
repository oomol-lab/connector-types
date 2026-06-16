import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Healthchecks.io simple or cron check. */
    "healthchecks_io.create_check": {
      input: {
        /**
         * The human-readable check name.
         * @minLength 1
         */
        name?: string;
        /**
         * The custom check slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * A space-delimited list of tags assigned to the check.
         * @minLength 1
         */
        tags?: string;
        /** The check description. */
        desc?: string;
        /**
         * The simple check timeout in seconds.
         * @exclusiveMinimum 0
         */
        timeout?: number;
        /**
         * The grace period in seconds.
         * @minimum 0
         */
        grace?: number;
        /**
         * A cron or systemd OnCalendar expression defining the check schedule.
         * @minLength 1
         */
        schedule?: string;
        /**
         * The timezone used with the schedule field, such as Europe/Riga.
         * @minLength 1
         */
        tz?: string;
        /** Whether the check should stay down until manually resumed. */
        manual_resume?: boolean;
        /**
         * The allowed HTTP methods for ping requests, such as POST.
         * @minLength 1
         */
        methods?: string;
        /** A comma-separated list of channel UUIDs or names, * for all channels, or an empty string to unassign all channels. */
        channels?: string;
        /** Comma-separated keywords that mark inbound email or HTTP pings as starts. */
        start_kw?: string;
        /** Comma-separated keywords that mark inbound email or HTTP pings as successes. */
        success_kw?: string;
        /** Comma-separated keywords that mark inbound email or HTTP pings as failures. */
        failure_kw?: string;
        /** Whether inbound email subject lines should be keyword-filtered. */
        filter_subject?: boolean;
        /** Whether inbound email bodies should be keyword-filtered. */
        filter_body?: boolean;
        /** Whether HTTP ping bodies should be keyword-filtered. */
        filter_http_body?: boolean;
        /** Whether unmatched pings should be treated as failures when keyword filtering is enabled. */
        filter_default_fail?: boolean;
      };
      output: {
        /** A check resource returned by Healthchecks.io. */
        check: {
          /** The check UUID. */
          uuid?: string;
          /** The check name. */
          name?: string;
          /** The custom check slug. */
          slug?: string;
          /** The space-delimited tag list. */
          tags?: string;
          /** The check description. */
          desc?: string;
          /** The current check status. */
          status?: string;
          /** The simple check timeout in seconds. */
          timeout?: number;
          /** The grace period in seconds. */
          grace?: number;
          /** The cron or systemd OnCalendar expression when present. */
          schedule?: string;
          /** The timezone used with the schedule field. */
          tz?: string;
          /** Whether the check requires manual resume after failure. */
          manual_resume?: boolean;
          /** The allowed HTTP methods for ping requests. */
          methods?: string;
          /**
           * The ping URL for this check.
           * @format uri
           */
          ping_url?: string;
          /**
           * The Management API update URL for this check.
           * @format uri
           */
          update_url?: string;
          /**
           * The Management API pause URL for this check.
           * @format uri
           */
          pause_url?: string;
          /**
           * The Management API resume URL for this check.
           * @format uri
           */
          resume_url?: string;
          /** The channel assignment string returned by Healthchecks.io. */
          channels?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Healthchecks.io check by UUID. */
    "healthchecks_io.delete_check": {
      input: {
        /**
         * The Healthchecks.io check UUID used in the API path.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** Whether the check deletion request succeeded. */
        deleted: boolean;
        /** A check resource returned by Healthchecks.io. */
        check: {
          /** The check UUID. */
          uuid?: string;
          /** The check name. */
          name?: string;
          /** The custom check slug. */
          slug?: string;
          /** The space-delimited tag list. */
          tags?: string;
          /** The check description. */
          desc?: string;
          /** The current check status. */
          status?: string;
          /** The simple check timeout in seconds. */
          timeout?: number;
          /** The grace period in seconds. */
          grace?: number;
          /** The cron or systemd OnCalendar expression when present. */
          schedule?: string;
          /** The timezone used with the schedule field. */
          tz?: string;
          /** Whether the check requires manual resume after failure. */
          manual_resume?: boolean;
          /** The allowed HTTP methods for ping requests. */
          methods?: string;
          /**
           * The ping URL for this check.
           * @format uri
           */
          ping_url?: string;
          /**
           * The Management API update URL for this check.
           * @format uri
           */
          update_url?: string;
          /**
           * The Management API pause URL for this check.
           * @format uri
           */
          pause_url?: string;
          /**
           * The Management API resume URL for this check.
           * @format uri
           */
          resume_url?: string;
          /** The channel assignment string returned by Healthchecks.io. */
          channels?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get a Healthchecks.io check by UUID or unique key. */
    "healthchecks_io.get_check": {
      input: {
        /**
         * The Healthchecks.io check UUID or unique key used in the Management API path.
         * @minLength 1
         */
        check_id: string;
      };
      output: {
        /** A check resource returned by Healthchecks.io. */
        check: {
          /** The check UUID. */
          uuid?: string;
          /** The check name. */
          name?: string;
          /** The custom check slug. */
          slug?: string;
          /** The space-delimited tag list. */
          tags?: string;
          /** The check description. */
          desc?: string;
          /** The current check status. */
          status?: string;
          /** The simple check timeout in seconds. */
          timeout?: number;
          /** The grace period in seconds. */
          grace?: number;
          /** The cron or systemd OnCalendar expression when present. */
          schedule?: string;
          /** The timezone used with the schedule field. */
          tz?: string;
          /** Whether the check requires manual resume after failure. */
          manual_resume?: boolean;
          /** The allowed HTTP methods for ping requests. */
          methods?: string;
          /**
           * The ping URL for this check.
           * @format uri
           */
          ping_url?: string;
          /**
           * The Management API update URL for this check.
           * @format uri
           */
          update_url?: string;
          /**
           * The Management API pause URL for this check.
           * @format uri
           */
          pause_url?: string;
          /**
           * The Management API resume URL for this check.
           * @format uri
           */
          resume_url?: string;
          /** The channel assignment string returned by Healthchecks.io. */
          channels?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List badge metadata in the current Healthchecks.io project. */
    "healthchecks_io.list_badges": {
      input: Record<string, never>;
      output: {
        /** The badge URL map returned by Healthchecks.io, keyed by tag. */
        badges: Record<string, {
            /**
             * The two-state SVG badge URL.
             * @format uri
             */
            svg?: string;
            /**
             * The three-state SVG badge URL.
             * @format uri
             */
            svg3?: string;
            /**
             * The two-state JSON badge URL.
             * @format uri
             */
            json?: string;
            /**
             * The three-state JSON badge URL.
             * @format uri
             */
            json3?: string;
            /**
             * The two-state shields.io badge URL.
             * @format uri
             */
            shields?: string;
            /**
             * The three-state shields.io badge URL.
             * @format uri
             */
            shields3?: string;
            [key: string]: unknown;
          }>;
      };
    };
    /** List notification integrations in the current Healthchecks.io project. */
    "healthchecks_io.list_channels": {
      input: Record<string, never>;
      output: {
        /** The channels returned by Healthchecks.io. */
        channels: Array<{
          /** The channel UUID. */
          id?: string;
          /** The channel name. */
          name?: string;
          /** The channel kind. */
          kind?: string;
          /** Whether the channel is enabled. */
          enabled?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Healthchecks.io checks in the current project. */
    "healthchecks_io.list_checks": {
      input: {
        /**
         * Only return checks with this slug.
         * @minLength 1
         */
        slug?: string;
      };
      output: {
        /** The checks returned by Healthchecks.io. */
        checks: Array<{
          /** The check UUID. */
          uuid?: string;
          /** The check name. */
          name?: string;
          /** The custom check slug. */
          slug?: string;
          /** The space-delimited tag list. */
          tags?: string;
          /** The check description. */
          desc?: string;
          /** The current check status. */
          status?: string;
          /** The simple check timeout in seconds. */
          timeout?: number;
          /** The grace period in seconds. */
          grace?: number;
          /** The cron or systemd OnCalendar expression when present. */
          schedule?: string;
          /** The timezone used with the schedule field. */
          tz?: string;
          /** Whether the check requires manual resume after failure. */
          manual_resume?: boolean;
          /** The allowed HTTP methods for ping requests. */
          methods?: string;
          /**
           * The ping URL for this check.
           * @format uri
           */
          ping_url?: string;
          /**
           * The Management API update URL for this check.
           * @format uri
           */
          update_url?: string;
          /**
           * The Management API pause URL for this check.
           * @format uri
           */
          pause_url?: string;
          /**
           * The Management API resume URL for this check.
           * @format uri
           */
          resume_url?: string;
          /** The channel assignment string returned by Healthchecks.io. */
          channels?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Healthchecks.io status flips for a check by UUID or unique key. */
    "healthchecks_io.list_flips": {
      input: {
        /**
         * The Healthchecks.io check UUID or unique key used in the Management API path.
         * @minLength 1
         */
        check_id: string;
        /**
         * Only return flips in the latest number of seconds.
         * @exclusiveMinimum 0
         */
        seconds?: number;
        /**
         * A UNIX timestamp in seconds.
         * @minimum 0
         */
        start?: number;
        /**
         * A UNIX timestamp in seconds.
         * @minimum 0
         */
        end?: number;
      };
      output: {
        /** The status flip records returned by Healthchecks.io. */
        flips: Array<{
          /**
           * The UNIX timestamp when the flip happened.
           * @minimum 0
           */
          timestamp?: number;
          /** Whether the check transitioned to up at this timestamp. */
          up?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List recent Healthchecks.io pings for a check by UUID. */
    "healthchecks_io.list_pings": {
      input: {
        /**
         * The Healthchecks.io check UUID used in the API path.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** The ping records returned by Healthchecks.io. */
        pings: Array<{
          /** The ping sequence number. */
          n?: number;
          /** The ping type such as start, success, or failure. */
          type?: string;
          /** The timestamp string for the ping. */
          date?: string;
          /** The request scheme used by the ping. */
          scheme?: string;
          /** The remote address that sent the ping. */
          remote_addr?: string;
          /** The HTTP method used by the ping. */
          method?: string;
          /** The user agent reported by the ping. */
          ua?: string;
          /** The stored request body preview when returned in the list response. */
          body?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Pause monitoring for a Healthchecks.io check by UUID. */
    "healthchecks_io.pause_check": {
      input: {
        /**
         * The Healthchecks.io check UUID used in the API path.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** A check resource returned by Healthchecks.io. */
        check: {
          /** The check UUID. */
          uuid?: string;
          /** The check name. */
          name?: string;
          /** The custom check slug. */
          slug?: string;
          /** The space-delimited tag list. */
          tags?: string;
          /** The check description. */
          desc?: string;
          /** The current check status. */
          status?: string;
          /** The simple check timeout in seconds. */
          timeout?: number;
          /** The grace period in seconds. */
          grace?: number;
          /** The cron or systemd OnCalendar expression when present. */
          schedule?: string;
          /** The timezone used with the schedule field. */
          tz?: string;
          /** Whether the check requires manual resume after failure. */
          manual_resume?: boolean;
          /** The allowed HTTP methods for ping requests. */
          methods?: string;
          /**
           * The ping URL for this check.
           * @format uri
           */
          ping_url?: string;
          /**
           * The Management API update URL for this check.
           * @format uri
           */
          update_url?: string;
          /**
           * The Management API pause URL for this check.
           * @format uri
           */
          pause_url?: string;
          /**
           * The Management API resume URL for this check.
           * @format uri
           */
          resume_url?: string;
          /** The channel assignment string returned by Healthchecks.io. */
          channels?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Resume monitoring for a Healthchecks.io check by UUID. */
    "healthchecks_io.resume_check": {
      input: {
        /**
         * The Healthchecks.io check UUID used in the API path.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** A check resource returned by Healthchecks.io. */
        check: {
          /** The check UUID. */
          uuid?: string;
          /** The check name. */
          name?: string;
          /** The custom check slug. */
          slug?: string;
          /** The space-delimited tag list. */
          tags?: string;
          /** The check description. */
          desc?: string;
          /** The current check status. */
          status?: string;
          /** The simple check timeout in seconds. */
          timeout?: number;
          /** The grace period in seconds. */
          grace?: number;
          /** The cron or systemd OnCalendar expression when present. */
          schedule?: string;
          /** The timezone used with the schedule field. */
          tz?: string;
          /** Whether the check requires manual resume after failure. */
          manual_resume?: boolean;
          /** The allowed HTTP methods for ping requests. */
          methods?: string;
          /**
           * The ping URL for this check.
           * @format uri
           */
          ping_url?: string;
          /**
           * The Management API update URL for this check.
           * @format uri
           */
          update_url?: string;
          /**
           * The Management API pause URL for this check.
           * @format uri
           */
          pause_url?: string;
          /**
           * The Management API resume URL for this check.
           * @format uri
           */
          resume_url?: string;
          /** The channel assignment string returned by Healthchecks.io. */
          channels?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update a Healthchecks.io check by UUID. */
    "healthchecks_io.update_check": {
      input: {
        /**
         * The Healthchecks.io check UUID used in the API path.
         * @minLength 1
         */
        uuid: string;
        /**
         * The human-readable check name.
         * @minLength 1
         */
        name?: string;
        /**
         * The custom check slug.
         * @minLength 1
         */
        slug?: string;
        /**
         * A space-delimited list of tags assigned to the check.
         * @minLength 1
         */
        tags?: string;
        /** The check description. */
        desc?: string;
        /**
         * The simple check timeout in seconds.
         * @exclusiveMinimum 0
         */
        timeout?: number;
        /**
         * The grace period in seconds.
         * @minimum 0
         */
        grace?: number;
        /**
         * A cron or systemd OnCalendar expression defining the check schedule.
         * @minLength 1
         */
        schedule?: string;
        /**
         * The timezone used with the schedule field, such as Europe/Riga.
         * @minLength 1
         */
        tz?: string;
        /** Whether the check should stay down until manually resumed. */
        manual_resume?: boolean;
        /**
         * The allowed HTTP methods for ping requests, such as POST.
         * @minLength 1
         */
        methods?: string;
        /** A comma-separated list of channel UUIDs or names, * for all channels, or an empty string to unassign all channels. */
        channels?: string;
        /** Comma-separated keywords that mark inbound email or HTTP pings as starts. */
        start_kw?: string;
        /** Comma-separated keywords that mark inbound email or HTTP pings as successes. */
        success_kw?: string;
        /** Comma-separated keywords that mark inbound email or HTTP pings as failures. */
        failure_kw?: string;
        /** Whether inbound email subject lines should be keyword-filtered. */
        filter_subject?: boolean;
        /** Whether inbound email bodies should be keyword-filtered. */
        filter_body?: boolean;
        /** Whether HTTP ping bodies should be keyword-filtered. */
        filter_http_body?: boolean;
        /** Whether unmatched pings should be treated as failures when keyword filtering is enabled. */
        filter_default_fail?: boolean;
      };
      output: {
        /** A check resource returned by Healthchecks.io. */
        check: {
          /** The check UUID. */
          uuid?: string;
          /** The check name. */
          name?: string;
          /** The custom check slug. */
          slug?: string;
          /** The space-delimited tag list. */
          tags?: string;
          /** The check description. */
          desc?: string;
          /** The current check status. */
          status?: string;
          /** The simple check timeout in seconds. */
          timeout?: number;
          /** The grace period in seconds. */
          grace?: number;
          /** The cron or systemd OnCalendar expression when present. */
          schedule?: string;
          /** The timezone used with the schedule field. */
          tz?: string;
          /** Whether the check requires manual resume after failure. */
          manual_resume?: boolean;
          /** The allowed HTTP methods for ping requests. */
          methods?: string;
          /**
           * The ping URL for this check.
           * @format uri
           */
          ping_url?: string;
          /**
           * The Management API update URL for this check.
           * @format uri
           */
          update_url?: string;
          /**
           * The Management API pause URL for this check.
           * @format uri
           */
          pause_url?: string;
          /**
           * The Management API resume URL for this check.
           * @format uri
           */
          resume_url?: string;
          /** The channel assignment string returned by Healthchecks.io. */
          channels?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
