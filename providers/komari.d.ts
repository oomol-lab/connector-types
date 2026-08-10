import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Komari client. The response contains its enrollment token. */
    "komari.add_client": {
      input: {
        /** Optional client name. */
        name?: string;
      };
      output: Record<string, unknown>;
    };
    /** Create a load notification rule. */
    "komari.add_load_notification": {
      input: {
        /**
         * Client UUIDs.
         * @minItems 1
         */
        clients: Array<string>;
        /** Rule name. */
        name?: string;
        /** Metric name. */
        metric: string;
        /** Trigger threshold. */
        threshold: number;
        /**
         * Required time ratio from zero to one.
         * @maximum 1
         * @exclusiveMinimum 0
         */
        ratio: number;
        /**
         * Evaluation interval in minutes.
         * @minimum 1
         * @maximum 240
         */
        interval: number;
      };
      output: Record<string, unknown>;
    };
    /** Create a ping task. */
    "komari.add_ping_task": {
      input: {
        /** Client UUIDs. */
        clients?: Array<string>;
        /** Apply to new clients by default. */
        default_on?: boolean;
        /** Task name. */
        name: string;
        /** Ping target. */
        target: string;
        /** Ping protocol. */
        type: "icmp" | "tcp" | "http";
        /**
         * Interval in seconds.
         * @exclusiveMinimum 0
         */
        interval: number;
      };
      output: Record<string, unknown>;
    };
    /** Delete multiple clipboard entries. */
    "komari.batch_delete_clipboard": {
      input: {
        /**
         * Clipboard IDs.
         * @minItems 1
         */
        ids: Array<number>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Cancel the active metric-store migration. */
    "komari.cancel_metric_migration": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Permanently delete all load and ping records. */
    "komari.clear_all_records": {
      input: Record<string, never>;
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Permanently delete all load records. */
    "komari.clear_records": {
      input: Record<string, never>;
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Create a clipboard entry. */
    "komari.create_clipboard": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Revoke all login sessions. */
    "komari.delete_all_sessions": {
      input: Record<string, never>;
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Delete a clipboard entry. */
    "komari.delete_clipboard": {
      input: {
        /**
         * Clipboard ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Delete load notification rules. */
    "komari.delete_load_notification": {
      input: {
        /**
         * Resource IDs.
         * @minItems 1
         */
        id: Array<number>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Delete ping tasks and their records. */
    "komari.delete_ping_tasks": {
      input: {
        /**
         * Resource IDs.
         * @minItems 1
         */
        id: Array<number>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Revoke one login session using the stable identifier returned by list_sessions. */
    "komari.delete_session": {
      input: {
        /**
         * Stable session identifier returned by list_sessions.
         * @minLength 64
         * @maxLength 64
         * @pattern ^[0-9a-f]{64}$
         */
        session_id: string;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Disable offline notifications for clients. */
    "komari.disable_offline_notifications": {
      input: {
        /**
         * Client UUIDs.
         * @minItems 1
         */
        clients: Array<string>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Disable traffic reports for clients. */
    "komari.disable_traffic_report_notifications": {
      input: {
        /**
         * Client UUIDs.
         * @minItems 1
         */
        clients: Array<string>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Update client fields. This changes Komari configuration. */
    "komari.edit_client": {
      input: {
        /**
         * The client UUID.
         * @format uuid
         */
        uuid: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Replace load notification rule fields. */
    "komari.edit_load_notification": {
      input: {
        /**
         * Rules to update.
         * @minItems 1
         */
        notifications: Array<Record<string, unknown>>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Replace offline notification rule fields. */
    "komari.edit_offline_notifications": {
      input: {
        /**
         * Rules to update.
         * @minItems 1
         */
        notifications: Array<Record<string, unknown>>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Replace ping task fields. */
    "komari.edit_ping_tasks": {
      input: {
        /**
         * Tasks to update.
         * @minItems 1
         */
        tasks: Array<{
          /** The ping task ID. */
          id?: number;
          /** The task name. */
          name?: string;
          /** The ping protocol. */
          type?: string;
          /** The ping target. */
          target?: string;
          /** The interval in seconds. */
          interval?: number;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Update arbitrary Komari settings; invalid database settings can disrupt service. */
    "komari.edit_settings": {
      input: Record<string, unknown>;
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Replace traffic-report rule fields. */
    "komari.edit_traffic_report_notifications": {
      input: {
        /**
         * Rules to update.
         * @minItems 1
         */
        notifications: Array<Record<string, unknown>>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Enable offline notifications for clients. */
    "komari.enable_offline_notifications": {
      input: {
        /**
         * Client UUIDs.
         * @minItems 1
         */
        clients: Array<string>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Enable traffic reports for clients. */
    "komari.enable_traffic_report_notifications": {
      input: {
        /**
         * Client UUIDs.
         * @minItems 1
         */
        clients: Array<string>;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** DANGEROUS: execute a shell command on selected clients. Komari API keys bypass interactive 2FA for this sensitive RPC. */
    "komari.execute_command": {
      input: {
        /** Shell command to execute. */
        command: string;
        /**
         * Target client UUIDs.
         * @minItems 1
         */
        clients: Array<string>;
      };
      output: Record<string, unknown>;
    };
    /** Get one client without returning its enrollment token. */
    "komari.get_client": {
      input: {
        /**
         * The client UUID.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /** A Komari node. Client tokens are omitted unless get_client_token is used. */
        client: {
          /**
           * The node UUID.
           * @format uuid
           */
          uuid?: string;
          /** The node display name. */
          name?: string;
          /** The node operating system. */
          os?: string;
          /** The node architecture. */
          arch?: string;
          /** The configured region. */
          region?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one client's result for an execution task. */
    "komari.get_client_task_result": {
      input: {
        /** Execution task ID. */
        task_id: string;
        /**
         * Client UUID.
         * @format uuid
         */
        uuid: string;
      };
      output: Record<string, unknown>;
    };
    /** Get a client enrollment token. Treat the response as a secret. */
    "komari.get_client_token": {
      input: {
        /**
         * The client UUID.
         * @format uuid
         */
        uuid: string;
      };
      output: Record<string, unknown>;
    };
    /** Get one clipboard entry. */
    "komari.get_clipboard": {
      input: {
        /**
         * Clipboard ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: Record<string, unknown>;
    };
    /** Get the current Komari user or guest identity. */
    "komari.get_current_user": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Inspect main and monitoring database storage. */
    "komari.get_database_size": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get one remote execution task and its results. */
    "komari.get_execution_task": {
      input: {
        /** The execution task ID. */
        task_id: string;
      };
      output: Record<string, unknown>;
    };
    /** Get persisted resource metrics for a node. */
    "komari.get_load_history": {
      input: {
        /**
         * Client UUID.
         * @format uuid
         */
        uuid: string;
        /** Metric projection. */
        load_type?: "all" | "cpu" | "ram" | "swap" | "load" | "temp" | "disk" | "network" | "process" | "connections";
        /**
         * Recent hours to query.
         * @maximum 168
         * @exclusiveMinimum 0
         */
        hours?: number;
      };
      output: {
        /**
         * Record count.
         * @minimum 0
         */
        count: number;
        /** Metric records. */
        records: Array<Record<string, unknown>>;
        /** Applied projection. */
        load_type?: string | null;
        /** Whether GPU history is present. */
        has_gpu_data?: boolean;
        /** GPU histories keyed by device index. */
        gpu_devices?: Record<string, unknown>;
      };
    };
    /** Get one message-sender configuration or list available templates. The result may contain secrets. */
    "komari.get_message_sender_provider": {
      input: {
        /** Optional provider name. */
        provider?: string;
      };
      output: {
        /** Message-sender configuration or templates. */
        data: unknown;
      };
    };
    /** Get metric-store migration progress. */
    "komari.get_metric_migration_status": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get one OIDC configuration or list templates. The result may contain client secrets. */
    "komari.get_oidc_provider": {
      input: {
        /** Optional provider name. */
        provider?: string;
      };
      output: {
        /** OIDC configuration or templates. */
        data: unknown;
      };
    };
    /** Get ping records by node, task, or both. */
    "komari.get_ping_history": {
      input: Record<string, unknown>;
      output: {
        /**
         * Record count.
         * @minimum 0
         */
        count: number;
        /** Ping measurements. */
        records: Array<{
          /** The ping task ID. */
          task_id?: number;
          /**
           * Measurement time.
           * @format date-time
           */
          time?: string;
          /** Latency in milliseconds, or a negative value for packet loss. */
          value?: number;
          /**
           * The reporting client UUID.
           * @format uuid
           */
          client?: string;
          [key: string]: unknown;
        }>;
        /** Per-client summaries. */
        basic_info: Array<Record<string, unknown>>;
        /** Per-task summaries. */
        tasks: Array<{
          /** The ping task ID. */
          id?: number;
          /** The task name. */
          name?: string;
          /** The ping protocol. */
          type?: string;
          /** The interval in seconds. */
          interval?: number;
          /** Whether the task applies to new clients by default. */
          default_on?: boolean;
          /** Assigned client UUIDs when returned. */
          clients?: Array<string>;
          /** Number of measurements. */
          total?: number;
          /** Packet-loss percentage. */
          loss?: number;
          /** Minimum successful latency. */
          min?: number;
          /** Maximum successful latency. */
          max?: number;
          /** Average successful latency. */
          avg?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get aggregate latency, loss, percentile, and standard-deviation statistics. */
    "komari.get_ping_metric_stats": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Get settings that Komari exposes to its public frontend. */
    "komari.get_public_settings": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get the short in-memory window of recent reports for a node. */
    "komari.get_recent_metrics": {
      input: {
        /**
         * The client UUID.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /** Recent node reports. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Get all Komari settings. The result can contain secrets and database DSNs. */
    "komari.get_settings": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get xterm.js terminal appearance settings. */
    "komari.get_terminal_settings": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Get the Komari server version and build hash. */
    "komari.get_version": {
      input: Record<string, never>;
      output: {
        /** Release version. */
        version: string;
        /** Build hash when available. */
        hash: string | null;
      };
    };
    /** List paged audit logs. */
    "komari.list_audit_logs": {
      input: {
        /**
         * Page size.
         * @maximum 500
         * @exclusiveMinimum 0
         */
        limit?: number;
        /**
         * One-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /** Optional exact message type. */
        msg_type?: string;
      };
      output: Record<string, unknown>;
    };
    /** List execution tasks assigned to a client. */
    "komari.list_client_execution_tasks": {
      input: {
        /**
         * The client UUID.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /** Client execution tasks. */
        tasks: Array<Record<string, unknown>>;
      };
    };
    /** List all clients without returning enrollment tokens. */
    "komari.list_clients": {
      input: Record<string, never>;
      output: {
        /** Komari clients. */
        clients: Array<{
          /**
           * The node UUID.
           * @format uuid
           */
          uuid?: string;
          /** The node display name. */
          name?: string;
          /** The node operating system. */
          os?: string;
          /** The node architecture. */
          arch?: string;
          /** The configured region. */
          region?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List clipboard entries. */
    "komari.list_clipboard": {
      input: Record<string, never>;
      output: {
        /** Clipboard entries. */
        entries: Array<Record<string, unknown>>;
      };
    };
    /** List remote execution tasks and their results, which may contain command output. */
    "komari.list_execution_tasks": {
      input: Record<string, never>;
      output: {
        /** Execution tasks. */
        tasks: Array<Record<string, unknown>>;
      };
    };
    /** List load notification rules. */
    "komari.list_load_notifications": {
      input: Record<string, never>;
      output: {
        /** Load notification rules. */
        notifications: Array<Record<string, unknown>>;
      };
    };
    /** List all metric definitions and retention policies. */
    "komari.list_metric_definitions": {
      input: Record<string, never>;
      output: {
        /** Metric definitions. */
        metrics: Array<{
          /** The metric name. */
          name?: string;
          /** The metric type. */
          type?: string;
          /** The metric unit. */
          unit?: string;
          /**
           * Retention period in days; zero disables storage.
           * @minimum 0
           */
          retention_days?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List visible Komari nodes without client tokens or private address fields. */
    "komari.list_nodes": {
      input: Record<string, never>;
      output: {
        /** Visible Komari nodes. */
        nodes: Array<{
          /**
           * The node UUID.
           * @format uuid
           */
          uuid?: string;
          /** The node display name. */
          name?: string;
          /** The node operating system. */
          os?: string;
          /** The node architecture. */
          arch?: string;
          /** The configured region. */
          region?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List offline notification rules. */
    "komari.list_offline_notifications": {
      input: Record<string, never>;
      output: {
        /** Offline notification rules. */
        notifications: Array<Record<string, unknown>>;
      };
    };
    /** List all ping tasks including targets. */
    "komari.list_ping_tasks": {
      input: Record<string, never>;
      output: {
        /** Ping tasks. */
        tasks: Array<{
          /** The ping task ID. */
          id?: number;
          /** The task name. */
          name?: string;
          /** The ping protocol. */
          type?: string;
          /** The ping target. */
          target?: string;
          /** The interval in seconds. */
          interval?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List public metric definitions and retention policies. */
    "komari.list_public_metric_definitions": {
      input: Record<string, never>;
      output: {
        /** Public metric definitions. */
        metrics: Array<{
          /** The metric name. */
          name?: string;
          /** The metric type. */
          type?: string;
          /** The metric unit. */
          unit?: string;
          /**
           * Retention period in days; zero disables storage.
           * @minimum 0
           */
          retention_days?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List ping tasks using the public response shape. */
    "komari.list_public_ping_tasks": {
      input: Record<string, never>;
      output: {
        /** Public ping tasks. */
        tasks: Array<{
          /** The ping task ID. */
          id?: number;
          /** The task name. */
          name?: string;
          /** The ping protocol. */
          type?: string;
          /** The ping target. */
          target?: string;
          /** The interval in seconds. */
          interval?: number;
          [key: string]: unknown;
        }>;
      };
    };
    /** List login sessions using stable identifiers while redacting session tokens and IP addresses. */
    "komari.list_sessions": {
      input: Record<string, never>;
      output: {
        /** Stable identifier for the current session, when available. */
        current_session_id: string | null;
        /** Redacted login sessions. */
        sessions: Array<{
          /** Stable SHA-256 identifier derived from the session token. */
          session_id: string;
          /**
           * The user UUID.
           * @format uuid
           */
          uuid?: string;
          /** The login method. */
          login_method?: string;
          /**
           * Most recent activity time.
           * @format date-time
           */
          latest_online?: string;
          /**
           * Session expiration time.
           * @format date-time
           */
          expires?: string;
          /**
           * Session creation time.
           * @format date-time
           */
          created_at?: string;
          /** Whether this is the current session. */
          current: boolean;
        }>;
      };
    };
    /** List all client results for an execution task. */
    "komari.list_task_results": {
      input: {
        /** The execution task ID. */
        task_id: string;
      };
      output: {
        /** Execution results. */
        results: Array<Record<string, unknown>>;
      };
    };
    /** List traffic-report rules. */
    "komari.list_traffic_report_notifications": {
      input: Record<string, never>;
      output: {
        /** Traffic report rules. */
        notifications: Array<Record<string, unknown>>;
      };
    };
    /** Set client display weights using a UUID-to-weight map. */
    "komari.order_clients": {
      input: Record<string, number>;
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Set ping-task weights using an ID-to-weight map. */
    "komari.order_ping_tasks": {
      input: Record<string, number>;
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Query metric time-series points with filters, aggregation, and downsampling. */
    "komari.query_metrics": {
      input: {
        /**
         * Metric keys to query.
         * @minItems 1
         */
        metric_keys: Array<string>;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Record a bounded visitor audit event in Komari. */
    "komari.record_visitor_event": {
      input: {
        /**
         * Short event name.
         * @maxLength 64
         */
        event: string;
        /**
         * Frontend path.
         * @maxLength 512
         */
        path?: string;
        /**
         * Frontend route.
         * @maxLength 128
         */
        route?: string;
        /**
         * Optional target identifier.
         * @maxLength 128
         */
        target?: string;
        /** Bounded event metadata. */
        detail?: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Permanently delete a client and its runtime state. */
    "komari.remove_client": {
      input: {
        /**
         * The client UUID.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Save and possibly reload a message-sender provider configuration. */
    "komari.set_message_sender_provider": {
      input: {
        /** Provider name. */
        name: string;
        /** Provider-specific JSON configuration; may contain secrets. */
        addition?: string;
      };
      output: Record<string, unknown>;
    };
    /** Save and possibly reload an OIDC provider configuration. */
    "komari.set_oidc_provider": {
      input: {
        /** Provider name. */
        name: string;
        /** Provider-specific JSON configuration; may contain secrets. */
        addition?: string;
      };
      output: Record<string, unknown>;
    };
    /** Update xterm.js terminal appearance settings, including optional custom CSS. */
    "komari.set_terminal_settings": {
      input: Record<string, unknown>;
      output: Record<string, unknown>;
    };
    /** Start migrating metrics from a source store into the current store. */
    "komari.start_metric_migration": {
      input: {
        /** Optional source driver. */
        source_driver?: string;
        /** Optional source DSN; treat as sensitive. */
        source_dsn?: string;
      };
      output: Record<string, unknown>;
    };
    /** Test Komari GeoIP lookup. */
    "komari.test_geoip": {
      input: {
        /** IP address; defaults to the caller address. */
        ip?: string;
      };
      output: Record<string, unknown>;
    };
    /** Send a test notification through the active message sender. */
    "komari.test_message_sender": {
      input: Record<string, never>;
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Update a clipboard entry. */
    "komari.update_clipboard": {
      input: {
        /**
         * Clipboard ID.
         * @exclusiveMinimum 0
         */
        id: number;
        [key: string]: unknown;
      };
      output: {
        /** Whether Komari completed the operation. */
        success: boolean;
      };
    };
    /** Change a metric retention policy; zero deletes stored data for that metric. */
    "komari.update_metric_definition": {
      input: {
        /** Metric name. */
        name: string;
        /**
         * Retention in days; zero disables storage.
         * @minimum 0
         */
        retention_days: number;
      };
      output: Record<string, unknown>;
    };
    /** Run database maintenance and reclaim storage space. */
    "komari.vacuum_database": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
  }
}
