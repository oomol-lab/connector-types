import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new monitor in the connected UptimeRobot account. */
    "uptimerobot.create_monitor": {
      input: {
        /**
         * The friendly name of the new monitor.
         * @minLength 1
         */
        friendly_name: string;
        /**
         * The URL, hostname, or IP address that UptimeRobot should monitor.
         * @minLength 1
         */
        url: string;
        /**
         * The UptimeRobot monitor type code. Known values are 1=HTTP(s), 2=Keyword, 3=Ping, 4=Port, 5=Heartbeat, and 6=SSL.
         * @minimum 1
         * @maximum 6
         */
        type: number;
        /**
         * The subtype code used for port monitors. Known values are 1=HTTP, 2=HTTPS, 3=FTP, 4=SMTP, 5=POP3, 6=IMAP, and 99=Custom.
         * @exclusiveMinimum 0
         */
        sub_type?: number;
        /**
         * The destination port used for custom port monitors.
         * @minimum 1
         * @maximum 65535
         */
        port?: number;
        /**
         * The monitor interval in seconds accepted by UptimeRobot.
         * @exclusiveMinimum 0
         */
        interval?: number;
        /**
         * The timeout in seconds before UptimeRobot treats the check as failed.
         * @minimum 1
         * @maximum 60
         */
        timeout?: number;
        /** The keyword matching mode. Use 1 when the keyword must exist, or 2 when it must not exist. */
        keyword_type?: 1 | 2;
        /**
         * The keyword value used by keyword monitors.
         * @minLength 1
         */
        keyword_value?: string;
        /**
         * The HTTP authentication username used by the monitor.
         * @minLength 1
         */
        http_username?: string;
        /**
         * The HTTP authentication password used by the monitor.
         * @minLength 1
         */
        http_password?: string;
        /** Whether SSL validation should stay enabled for HTTPS-based monitors. */
        ssl?: boolean;
        /** Either the official alert_contacts string or a list of alert contact IDs and structured assignments. */
        alert_contacts?: string | Array<number | {
          /**
           * The numeric ID of the UptimeRobot alert contact.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * How many minutes UptimeRobot should wait before notifying this alert contact.
           * @minimum 0
           */
          threshold?: number;
          /**
           * How many times UptimeRobot should repeat the notification for this alert contact.
           * @minimum 0
           */
          recurrence?: number;
        }>;
      };
      output: {
        /** The newly created monitor returned by UptimeRobot. */
        monitor: {
          /** The unique identifier of the monitor. */
          id: number | string;
          /** The friendly name configured for the monitor. */
          friendly_name?: string;
          /** The monitored URL, hostname, or IP address. */
          url?: string;
          /** The UptimeRobot monitor type code. */
          type?: number | string;
          /** The current status code of the monitor. */
          status?: number | string;
          /** The port monitor subtype code returned by UptimeRobot, when present. */
          sub_type?: number | string;
          /** The monitor interval in seconds returned by UptimeRobot. */
          interval?: number | string;
          /** The monitor timeout in seconds returned by UptimeRobot. */
          timeout?: number | string;
          /** The keyword matching mode returned for keyword monitors, when present. */
          keyword_type?: number | string;
          /** The keyword value configured for keyword monitors, when present. */
          keyword_value?: string;
          /** The HTTP authentication username configured for the monitor, when present. */
          http_username?: string;
          /** The HTTP authentication password configured for the monitor, when present. */
          http_password?: string;
          /** The alert contacts returned for the monitor, when requested. */
          alert_contacts?: Array<{
            /** The unique identifier of the alert contact. */
            id: number | string;
            /** The friendly name of the alert contact. */
            friendly_name: string;
            /** The alert contact type code. */
            type: number | string;
            /** The alert contact status code. */
            status: number | string;
            /** The destination value configured for the alert contact. */
            value: string;
            [key: string]: unknown;
          }>;
          /** The monitor logs returned by UptimeRobot, when requested. */
          logs?: Array<{
            /** The log event type code. */
            type?: number | string;
            /** The UNIX timestamp when the monitor log entry was recorded. */
            datetime?: number | string;
            /** The duration associated with the monitor log entry, when present. */
            duration?: number | string;
            /** The nested reason object returned by UptimeRobot, when present. */
            reason?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The UNIX timestamp when the monitor was created, when present. */
          create_datetime?: number | string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a monitor from the connected UptimeRobot account. */
    "uptimerobot.delete_monitor": {
      input: {
        /**
         * The numeric ID of the UptimeRobot monitor.
         * @exclusiveMinimum 0
         */
        monitor_id: number;
      };
      output: {
        /** Whether the monitor was deleted successfully. */
        deleted: boolean;
      };
    };
    /** Get account-level monitor usage and profile details from the connected UptimeRobot account. */
    "uptimerobot.get_account_details": {
      input: Record<string, never>;
      output: {
        /** The account details returned by UptimeRobot. */
        account: {
          /** The email address of the connected UptimeRobot account. */
          email?: string;
          /** The unique identifier of the connected UptimeRobot account. */
          user_id: number | string;
          /** The maximum number of monitors allowed for the account. */
          monitor_limit: number | string;
          /** The default monitoring interval in minutes returned for the account. */
          monitor_interval: number | string;
          /** The number of monitors currently up. */
          up_monitors: number | string;
          /** The number of monitors currently down. */
          down_monitors: number | string;
          /** The number of monitors currently paused. */
          paused_monitors: number | string;
          /** The first name of the account owner, when present. */
          firstname?: string;
          /** The account registration timestamp returned by UptimeRobot, when present. */
          registered_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the full configuration and current status of a single UptimeRobot monitor. */
    "uptimerobot.get_monitor": {
      input: {
        /** Whether monitor logs should be included in the UptimeRobot response. */
        logs?: boolean;
        /** Whether alert contacts should be included in the UptimeRobot response. */
        alert_contacts?: boolean;
        /**
         * The numeric ID of the UptimeRobot monitor.
         * @exclusiveMinimum 0
         */
        monitor_id: number;
      };
      output: {
        /** The monitor returned by UptimeRobot. */
        monitor: {
          /** The unique identifier of the monitor. */
          id: number | string;
          /** The friendly name configured for the monitor. */
          friendly_name?: string;
          /** The monitored URL, hostname, or IP address. */
          url?: string;
          /** The UptimeRobot monitor type code. */
          type?: number | string;
          /** The current status code of the monitor. */
          status?: number | string;
          /** The port monitor subtype code returned by UptimeRobot, when present. */
          sub_type?: number | string;
          /** The monitor interval in seconds returned by UptimeRobot. */
          interval?: number | string;
          /** The monitor timeout in seconds returned by UptimeRobot. */
          timeout?: number | string;
          /** The keyword matching mode returned for keyword monitors, when present. */
          keyword_type?: number | string;
          /** The keyword value configured for keyword monitors, when present. */
          keyword_value?: string;
          /** The HTTP authentication username configured for the monitor, when present. */
          http_username?: string;
          /** The HTTP authentication password configured for the monitor, when present. */
          http_password?: string;
          /** The alert contacts returned for the monitor, when requested. */
          alert_contacts?: Array<{
            /** The unique identifier of the alert contact. */
            id: number | string;
            /** The friendly name of the alert contact. */
            friendly_name: string;
            /** The alert contact type code. */
            type: number | string;
            /** The alert contact status code. */
            status: number | string;
            /** The destination value configured for the alert contact. */
            value: string;
            [key: string]: unknown;
          }>;
          /** The monitor logs returned by UptimeRobot, when requested. */
          logs?: Array<{
            /** The log event type code. */
            type?: number | string;
            /** The UNIX timestamp when the monitor log entry was recorded. */
            datetime?: number | string;
            /** The duration associated with the monitor log entry, when present. */
            duration?: number | string;
            /** The nested reason object returned by UptimeRobot, when present. */
            reason?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The UNIX timestamp when the monitor was created, when present. */
          create_datetime?: number | string;
          [key: string]: unknown;
        };
      };
    };
    /** List the alert contacts configured in the connected UptimeRobot account. */
    "uptimerobot.list_alert_contacts": {
      input: Record<string, never>;
      output: {
        /** The alert contacts returned by UptimeRobot. */
        alert_contacts: Array<{
          /** The unique identifier of the alert contact. */
          id: number | string;
          /** The friendly name of the alert contact. */
          friendly_name: string;
          /** The alert contact type code. */
          type: number | string;
          /** The alert contact status code. */
          status: number | string;
          /** The destination value configured for the alert contact. */
          value: string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by UptimeRobot, or null when omitted. */
        pagination: {
          /** The pagination offset returned by UptimeRobot. */
          offset?: number | string;
          /** The per-page limit returned by UptimeRobot. */
          limit?: number | string;
          /** The total number of matching resources returned by UptimeRobot. */
          total?: number | string;
        } | null;
      };
    };
    /** List monitors available in the connected UptimeRobot account. */
    "uptimerobot.list_monitors": {
      input: {
        /**
         * The zero-based pagination offset to request from UptimeRobot.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum number of monitors to return from UptimeRobot.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * A search term applied to monitor friendly names, URLs, and types.
         * @minLength 1
         */
        search?: string;
        /** The field used by UptimeRobot to sort the monitor list. */
        sort?: "friendly_name" | "url" | "status" | "type";
        /**
         * A list of monitor IDs that will be encoded into the official monitors filter.
         * @minItems 1
         */
        monitor_ids?: Array<number>;
        /**
         * A list of monitor type codes that will be encoded into the official types filter.
         * @minItems 1
         */
        types?: Array<number>;
        /**
         * A list of monitor status codes that will be encoded into the official statuses filter.
         * @minItems 1
         */
        statuses?: Array<number>;
        /** Whether monitor logs should be included in each monitor result. */
        logs?: boolean;
        /** Whether alert contacts should be included in each monitor result. */
        alert_contacts?: boolean;
      };
      output: {
        /** The monitors returned by UptimeRobot. */
        monitors: Array<{
          /** The unique identifier of the monitor. */
          id: number | string;
          /** The friendly name configured for the monitor. */
          friendly_name?: string;
          /** The monitored URL, hostname, or IP address. */
          url?: string;
          /** The UptimeRobot monitor type code. */
          type?: number | string;
          /** The current status code of the monitor. */
          status?: number | string;
          /** The port monitor subtype code returned by UptimeRobot, when present. */
          sub_type?: number | string;
          /** The monitor interval in seconds returned by UptimeRobot. */
          interval?: number | string;
          /** The monitor timeout in seconds returned by UptimeRobot. */
          timeout?: number | string;
          /** The keyword matching mode returned for keyword monitors, when present. */
          keyword_type?: number | string;
          /** The keyword value configured for keyword monitors, when present. */
          keyword_value?: string;
          /** The HTTP authentication username configured for the monitor, when present. */
          http_username?: string;
          /** The HTTP authentication password configured for the monitor, when present. */
          http_password?: string;
          /** The alert contacts returned for the monitor, when requested. */
          alert_contacts?: Array<{
            /** The unique identifier of the alert contact. */
            id: number | string;
            /** The friendly name of the alert contact. */
            friendly_name: string;
            /** The alert contact type code. */
            type: number | string;
            /** The alert contact status code. */
            status: number | string;
            /** The destination value configured for the alert contact. */
            value: string;
            [key: string]: unknown;
          }>;
          /** The monitor logs returned by UptimeRobot, when requested. */
          logs?: Array<{
            /** The log event type code. */
            type?: number | string;
            /** The UNIX timestamp when the monitor log entry was recorded. */
            datetime?: number | string;
            /** The duration associated with the monitor log entry, when present. */
            duration?: number | string;
            /** The nested reason object returned by UptimeRobot, when present. */
            reason?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The UNIX timestamp when the monitor was created, when present. */
          create_datetime?: number | string;
          [key: string]: unknown;
        }>;
        /** The pagination metadata returned by UptimeRobot, or null when omitted. */
        pagination: {
          /** The pagination offset returned by UptimeRobot. */
          offset?: number | string;
          /** The per-page limit returned by UptimeRobot. */
          limit?: number | string;
          /** The total number of matching resources returned by UptimeRobot. */
          total?: number | string;
        } | null;
      };
    };
    /** Update an existing monitor in the connected UptimeRobot account. */
    "uptimerobot.update_monitor": {
      input: {
        /**
         * The numeric ID of the UptimeRobot monitor.
         * @exclusiveMinimum 0
         */
        monitor_id: number;
        /**
         * The friendly name of the monitor.
         * @minLength 1
         */
        friendly_name?: string;
        /**
         * The URL, hostname, or IP address that UptimeRobot should monitor.
         * @minLength 1
         */
        url?: string;
        /**
         * The UptimeRobot monitor type code. Known values are 1=HTTP(s), 2=Keyword, 3=Ping, 4=Port, 5=Heartbeat, and 6=SSL.
         * @minimum 1
         * @maximum 6
         */
        type?: number;
        /**
         * The subtype code used for port monitors. Known values are 1=HTTP, 2=HTTPS, 3=FTP, 4=SMTP, 5=POP3, 6=IMAP, and 99=Custom.
         * @exclusiveMinimum 0
         */
        sub_type?: number;
        /**
         * The destination port used for custom port monitors.
         * @minimum 1
         * @maximum 65535
         */
        port?: number;
        /**
         * The monitor interval in seconds accepted by UptimeRobot.
         * @exclusiveMinimum 0
         */
        interval?: number;
        /**
         * The timeout in seconds before UptimeRobot treats the check as failed.
         * @minimum 1
         * @maximum 60
         */
        timeout?: number;
        /** The keyword matching mode. Use 1 when the keyword must exist, or 2 when it must not exist. */
        keyword_type?: 1 | 2;
        /**
         * The keyword value used by keyword monitors.
         * @minLength 1
         */
        keyword_value?: string;
        /**
         * The HTTP authentication username used by the monitor.
         * @minLength 1
         */
        http_username?: string;
        /**
         * The HTTP authentication password used by the monitor.
         * @minLength 1
         */
        http_password?: string;
        /** Whether SSL validation should stay enabled for HTTPS-based monitors. */
        ssl?: boolean;
        /** Either the official alert_contacts string or a list of alert contact IDs and structured assignments. */
        alert_contacts?: string | Array<number | {
          /**
           * The numeric ID of the UptimeRobot alert contact.
           * @exclusiveMinimum 0
           */
          id: number;
          /**
           * How many minutes UptimeRobot should wait before notifying this alert contact.
           * @minimum 0
           */
          threshold?: number;
          /**
           * How many times UptimeRobot should repeat the notification for this alert contact.
           * @minimum 0
           */
          recurrence?: number;
        }>;
      };
      output: {
        /** The updated monitor returned by UptimeRobot. */
        monitor: {
          /** The unique identifier of the monitor. */
          id: number | string;
          /** The friendly name configured for the monitor. */
          friendly_name?: string;
          /** The monitored URL, hostname, or IP address. */
          url?: string;
          /** The UptimeRobot monitor type code. */
          type?: number | string;
          /** The current status code of the monitor. */
          status?: number | string;
          /** The port monitor subtype code returned by UptimeRobot, when present. */
          sub_type?: number | string;
          /** The monitor interval in seconds returned by UptimeRobot. */
          interval?: number | string;
          /** The monitor timeout in seconds returned by UptimeRobot. */
          timeout?: number | string;
          /** The keyword matching mode returned for keyword monitors, when present. */
          keyword_type?: number | string;
          /** The keyword value configured for keyword monitors, when present. */
          keyword_value?: string;
          /** The HTTP authentication username configured for the monitor, when present. */
          http_username?: string;
          /** The HTTP authentication password configured for the monitor, when present. */
          http_password?: string;
          /** The alert contacts returned for the monitor, when requested. */
          alert_contacts?: Array<{
            /** The unique identifier of the alert contact. */
            id: number | string;
            /** The friendly name of the alert contact. */
            friendly_name: string;
            /** The alert contact type code. */
            type: number | string;
            /** The alert contact status code. */
            status: number | string;
            /** The destination value configured for the alert contact. */
            value: string;
            [key: string]: unknown;
          }>;
          /** The monitor logs returned by UptimeRobot, when requested. */
          logs?: Array<{
            /** The log event type code. */
            type?: number | string;
            /** The UNIX timestamp when the monitor log entry was recorded. */
            datetime?: number | string;
            /** The duration associated with the monitor log entry, when present. */
            duration?: number | string;
            /** The nested reason object returned by UptimeRobot, when present. */
            reason?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** The UNIX timestamp when the monitor was created, when present. */
          create_datetime?: number | string;
          [key: string]: unknown;
        };
      };
    };
  }
}
