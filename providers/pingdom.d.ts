import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a detailed Pingdom uptime check by ID. */
    "pingdom.get_check": {
      input: {
        /**
         * The Pingdom check ID to retrieve.
         * @exclusiveMinimum 0
         */
        check_id: number;
        /** Whether to include team connections for the Pingdom check. */
        include_teams?: boolean;
      };
      output: {
        /** The detailed Pingdom check returned by the API. */
        check: {
          /**
           * The unique identifier of the Pingdom check.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The human-readable name of the Pingdom check. */
          name?: string;
          /** The target host monitored by the Pingdom check. */
          hostname?: string;
          /** Type-specific Pingdom check settings. */
          type?: Record<string, unknown>;
          /** The current status of the Pingdom check. */
          status?: string;
          /** How often Pingdom tests the check, in minutes. */
          resolution?: number;
          /** Probe filters configured for the Pingdom check. */
          probe_filters?: Array<string>;
          /** Integration IDs connected to the Pingdom check. */
          integrationids?: Array<number>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve Pingdom account check and SMS credit information. */
    "pingdom.get_credits": {
      input: Record<string, never>;
      output: {
        /** Credit and quota information returned by Pingdom. */
        credits: {
          /** The total number of check slots on the Pingdom account. */
          checklimit?: number;
          /** The number of available check slots on the Pingdom account. */
          availablechecks?: number;
          /** The number of default check slots currently used. */
          useddefault?: number;
          /** The number of transaction check slots currently used. */
          usedtransaction?: number;
          /** The number of SMS credits remaining on the Pingdom account. */
          availablesms?: number;
          /** The number of SMS provider tests remaining on the Pingdom account. */
          availablesmstests?: number;
          /** Whether Pingdom SMS auto-fill is enabled. */
          autofillsms?: boolean;
          /** The SMS quantity Pingdom purchases when auto-fill is triggered. */
          autofillsms_amount?: number;
          /** The SMS balance threshold that triggers auto-fill. */
          autofillsms_when_left?: number;
          /** The maximum SMS overage allowed by Pingdom, or null when disabled. */
          max_sms_overage?: number | null;
          /** The number of open RUM site slots available on the Pingdom account. */
          availablerumsites?: number;
          [key: string]: unknown;
        };
      };
    };
    /** List Pingdom uptime checks with optional pagination and tag filters. */
    "pingdom.list_checks": {
      input: {
        /**
         * The maximum number of Pingdom checks to return.
         * @minimum 1
         * @maximum 25000
         */
        limit?: number;
        /**
         * The zero-based pagination offset. Pingdom requires limit when offset is used.
         * @minimum 0
         */
        offset?: number;
        /** Whether to include each check's encryption setting. */
        showencryption?: boolean;
        /** Whether to include tags for each Pingdom check. */
        include_tags?: boolean;
        /** Whether to include severity for each Pingdom check. */
        include_severity?: boolean;
        /**
         * A comma-separated tag list used to filter Pingdom checks.
         * @minLength 1
         */
        tags?: string;
      };
      output: {
        /** Pingdom checks returned by the API. */
        checks: Array<{
          /**
           * The unique identifier of the Pingdom check.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The human-readable name of the Pingdom check. */
          name?: string;
          /** The Pingdom check type, such as http, tcp, or dns. */
          type?: string;
          /** The current status of the Pingdom check. */
          status?: "up" | "down" | "unconfirmed_down" | "unknown" | "paused";
          /** The target host monitored by the Pingdom check. */
          hostname?: string;
          /** How often Pingdom tests the check, in minutes. */
          resolution?: number;
          /**
           * The UNIX timestamp when the check was created.
           * @minimum 0
           */
          created?: number;
          /**
           * The UNIX timestamp of the most recent test.
           * @minimum 0
           */
          lasttesttime?: number;
          /**
           * The UNIX timestamp of the most recent error, when present.
           * @minimum 0
           */
          lasterrortime?: number;
          /** The response time from the most recent test, in milliseconds. */
          lastresponsetime?: number;
          /**
           * The UNIX timestamp when the most recent downtime started.
           * @minimum 0
           */
          lastdownstart?: number;
          /**
           * The UNIX timestamp when the most recent downtime ended.
           * @minimum 0
           */
          lastdownend?: number;
          /** Whether the Pingdom check uses IPv6. */
          ipv6?: boolean;
          /** Tags attached to the Pingdom check. */
          tags?: Array<{
            /** The tag name returned by Pingdom. */
            name?: string;
            /** The tag type returned by Pingdom. */
            type?: string;
            /** The number of resources using this tag. */
            count?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Count metadata returned by Pingdom. */
        counts: {
          /** The total number of Pingdom checks. */
          total?: number;
          /** The number of Pingdom checks after tag filtering was applied. */
          limited?: number;
          /** The number of Pingdom checks after pagination was applied. */
          filtered?: number;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List Pingdom probe servers and their location details. */
    "pingdom.list_probes": {
      input: {
        /**
         * The maximum number of Pingdom probes to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based pagination offset. Pingdom requires limit when offset is used.
         * @minimum 0
         */
        offset?: number;
        /** Whether to return only currently active Pingdom probes. */
        onlyactive?: boolean;
        /** Whether to include old Pingdom probes that are no longer in use. */
        includedeleted?: boolean;
      };
      output: {
        /** Pingdom probe servers returned by the API. */
        probes: Array<{
          /**
           * The unique identifier of the Pingdom probe.
           * @exclusiveMinimum 0
           */
          id?: number;
          /** The country where the Pingdom probe is located. */
          country?: string;
          /** The city where the Pingdom probe is located. */
          city?: string;
          /** The display name of the Pingdom probe location. */
          name?: string;
          /** Whether the Pingdom probe is currently active. */
          active?: boolean;
          /** The DNS name of the Pingdom probe server. */
          hostname?: string;
          /** The IPv4 address of the Pingdom probe server. */
          ip?: string;
          /** The IPv6 address of the Pingdom probe server. */
          ipv6?: string;
          /** The ISO country code for the Pingdom probe. */
          countryiso?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
