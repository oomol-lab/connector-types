import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more allow or deny domain entries to Pi-hole, either exact or as regular expressions. */
    "pi_hole.add_domain": {
      input: {
        /** The domain to add, or an array of domains. */
        domain: string | Array<string>;
        /** Whether the domain entry allows or denies the domain. */
        type: "allow" | "deny";
        /** Whether the domain entry matches exactly or as a regular expression. */
        kind: "exact" | "regex";
        /** An optional comment for the entry. */
        comment?: string | null;
        /** The group IDs the item belongs to; defaults to group 0 when omitted. */
        groups?: Array<number>;
        /** Whether the entry is enabled; defaults to true. */
        enabled?: boolean;
      };
      output: {
        /** The write result reported by the instance. */
        processed: {
          /** The items that were written successfully. */
          success: Array<string>;
          /** The items that could not be written, with their error messages. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Add one or more allowlist or blocklist entries (addresses) to Pi-hole. */
    "pi_hole.add_list": {
      input: {
        /** The list address, for example https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts, or an array of addresses. */
        address: string | Array<string>;
        /** Whether the list is an allowlist or a blocklist. */
        type: "allow" | "block";
        /** An optional comment for the list. */
        comment?: string | null;
        /** The group IDs the item belongs to; defaults to group 0 when omitted. */
        groups?: Array<number>;
        /** Whether the list is enabled; defaults to true. */
        enabled?: boolean;
      };
      output: {
        /** The write result reported by the instance. */
        processed: {
          /** The items that were written successfully. */
          success: Array<string>;
          /** The items that could not be written, with their error messages. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Delete multiple Pi-hole client entries in one request. Reports deleted=false when none of the clients exist. */
    "pi_hole.batch_delete_clients": {
      input: {
        /** The client identifiers to delete (IP / MAC / hostname / interface). */
        items: Array<string>;
      };
      output: {
        /** Whether the item was deleted. */
        deleted: boolean;
      };
    };
    /** Delete multiple Pi-hole domain entries in one request. Reports deleted=false when none of the entries exist. */
    "pi_hole.batch_delete_domains": {
      input: {
        /** The domain entries to delete. */
        items: Array<{
          /**
           * The domain of the entry.
           * @minLength 1
           */
          domain: string;
          /** Whether the domain entry allows or denies the domain. */
          type: "allow" | "deny";
          /** Whether the domain entry matches exactly or as a regular expression. */
          kind: "exact" | "regex";
        }>;
      };
      output: {
        /** Whether the item was deleted. */
        deleted: boolean;
      };
    };
    /** Delete multiple Pi-hole groups by name in one request. Reports deleted=false when none of the groups exist. */
    "pi_hole.batch_delete_groups": {
      input: {
        /** The group names to delete. */
        items: Array<string>;
      };
      output: {
        /** Whether the item was deleted. */
        deleted: boolean;
      };
    };
    /** Delete multiple Pi-hole allowlist or blocklist entries in one request. Reports deleted=false when none of the entries exist. */
    "pi_hole.batch_delete_lists": {
      input: {
        /** The list entries to delete. */
        items: Array<{
          /**
           * The address of the list entry.
           * @minLength 1
           */
          address: string;
          /** Whether the list is an allowlist or a blocklist. */
          type: "allow" | "block";
        }>;
      };
      output: {
        /** Whether the item was deleted. */
        deleted: boolean;
      };
    };
    /** Register one or more Pi-hole clients identified by IP address, MAC address, hostname, or interface. */
    "pi_hole.create_client": {
      input: {
        /** The client identifier (IP / MAC / hostname / interface), or an array of identifiers. */
        client: string | Array<string>;
        /** An optional comment for the client. */
        comment?: string | null;
        /** The group IDs the item belongs to; defaults to group 0 when omitted. */
        groups?: Array<number>;
      };
      output: {
        /** The write result reported by the instance. */
        processed: {
          /** The items that were written successfully. */
          success: Array<string>;
          /** The items that could not be written, with their error messages. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Create one or more Pi-hole groups, optionally with a comment and enabled state. */
    "pi_hole.create_group": {
      input: {
        /** The group name, or an array of group names to create. */
        name: string | Array<string>;
        /** An optional comment for the group. */
        comment?: string | null;
        /** Whether the group is enabled; defaults to true. */
        enabled?: boolean;
      };
      output: {
        /** The write result reported by the instance. */
        processed: {
          /** The items that were written successfully. */
          success: Array<string>;
          /** The items that could not be written, with their error messages. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Delete one Pi-hole client entry by identifier. */
    "pi_hole.delete_client": {
      input: {
        /**
         * The client identifier to delete (IP / MAC / hostname / interface).
         * @minLength 1
         */
        client: string;
      };
      output: {
        /** Whether the item was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one Pi-hole allow or deny domain entry. */
    "pi_hole.delete_domain": {
      input: {
        /** Whether the domain entry allows or denies the domain. */
        type: "allow" | "deny";
        /** Whether the domain entry matches exactly or as a regular expression. */
        kind: "exact" | "regex";
        /**
         * The domain of the entry to delete.
         * @minLength 1
         */
        domain: string;
      };
      output: {
        /** Whether the item was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one Pi-hole group by name. */
    "pi_hole.delete_group": {
      input: {
        /**
         * The name of the group to delete.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether the item was deleted. */
        deleted: boolean;
      };
    };
    /** Delete one Pi-hole allowlist or blocklist entry by address. */
    "pi_hole.delete_list": {
      input: {
        /**
         * The address of the list to delete.
         * @minLength 1
         */
        address: string;
        /** Whether the list is an allowlist or a blocklist. */
        type: "allow" | "block";
      };
      output: {
        /** Whether the item was deleted. */
        deleted: boolean;
      };
    };
    /** Create a complete Pi-hole teleporter backup archive (teleporter.zip) with all settings, lists, and clients. */
    "pi_hole.export_backup": {
      input: Record<string, never>;
      output: {
        /**
         * The temporary transit URL of the backup archive.
         * @format uri
         */
        fileUrl: string;
        /**
         * The archive file name.
         * @minLength 1
         */
        fileName: string;
        /** The archive MIME type. */
        contentType: string;
        /** The streamed archive size in bytes. */
        contentLength: number;
      };
    };
    /** Flush the Pi-hole DNS query log. */
    "pi_hole.flush_dns_logs": {
      input: Record<string, never>;
      output: {
        /** The flush result status returned by the instance, normally success. */
        status: string | null;
      };
    };
    /** Fetch the current Pi-hole configuration, such as DNS settings, privacy level, and API settings. */
    "pi_hole.get_config": {
      input: Record<string, never>;
      output: {
        /** The Pi-hole configuration payload returned by the instance. */
        config: Record<string, unknown>;
      };
    };
    /** Fetch the currently active DHCP leases assigned by the Pi-hole DHCP server. */
    "pi_hole.get_dhcp_leases": {
      input: Record<string, never>;
      output: {
        /** The active DHCP leases. */
        leases: Array<Record<string, unknown>>;
      };
    };
    /** Fetch whether Pi-hole DNS blocking is currently enabled, disabled, failed, or unknown. */
    "pi_hole.get_dns_blocking_status": {
      input: Record<string, never>;
      output: {
        /** The Pi-hole blocking status. */
        blocking: "enabled" | "disabled" | "failed" | "unknown";
        /** Remaining seconds until the blocking mode is toggled automatically, or null when no timer is active. */
        timer: number | null;
      };
    };
    /** Fetch the Pi-hole activity graph data: query totals over time with cached, blocked, and forwarded splits. */
    "pi_hole.get_history": {
      input: Record<string, never>;
      output: {
        /** The activity graph entries over time. */
        history: Array<Record<string, unknown>>;
      };
    };
    /** Fetch the devices seen on the local network by Pi-hole. */
    "pi_hole.get_network_devices": {
      input: Record<string, never>;
      output: {
        /** The network devices seen by Pi-hole. */
        devices: Array<Record<string, unknown>>;
      };
    };
    /** Fetch the Pi-hole activity overview: total and blocked queries, blocked query percentage, unique clients and domains, and the blocking and gravity list status. */
    "pi_hole.get_overview": {
      input: Record<string, never>;
      output: {
        /** The Pi-hole overview payload returned by the instance. */
        summary: Record<string, unknown>;
      };
    };
    /** Query the Pi-hole DNS log with optional filters. By default returns the most recent queries; each response exposes a cursor for the next chunk. */
    "pi_hole.get_queries": {
      input: {
        /** Only return queries from this Unix timestamp onward. */
        from?: number;
        /** Only return queries up to this Unix timestamp. */
        until?: number;
        /** Maximum number of results to return. */
        length?: number;
        /** Offset from the first record. */
        start?: number;
        /** Database ID of the most recent query to show; use the cursor of a previous response. */
        cursor?: number;
        /** Filter by queried domain, * wildcards supported. */
        domain?: string;
        /** Filter by requesting client IP address, * wildcards supported. */
        clientIp?: string;
        /** Filter by requesting client hostname, * wildcards supported. */
        clientName?: string;
        /** Filter by upstream destination (may also be cache, blocklist, or permitted), * wildcards supported. */
        upstream?: string;
        /** Filter by query type, for example A or AAAA. */
        type?: string;
        /** Filter by query status, for example GRAVITY or FORWARDED. */
        status?: string;
        /** Filter by reply type, for example NODATA or NXDOMAIN. */
        reply?: string;
        /** Filter by DNSSEC status, for example SECURE or INSECURE. */
        dnssec?: string;
        /** Read queries from the long-term on-disk database instead of the in-memory database. */
        disk?: boolean;
      };
      output: {
        /** The Pi-hole query records. */
        queries: Array<Record<string, unknown>>;
        /** Database ID of the most recent query shown, for the next chunk. */
        cursor: number | null;
        /** Total number of available queries. */
        recordsTotal: number;
        /** Number of available queries after filtering. */
        recordsFiltered: number;
        /** Earliest timestamp of queries held in the in-memory database (Unix time). */
        earliestTimestamp: number | null;
        /** Earliest timestamp of queries held in the long-term on-disk database (Unix time). */
        earliestTimestampDisk: number | null;
      };
    };
    /** Fetch the number of queries of each DNS query type that Pi-hole has seen. */
    "pi_hole.get_query_types": {
      input: Record<string, never>;
      output: {
        /** Query type counts keyed by DNS query type, for example A or AAAA. */
        types: Record<string, unknown>;
      };
    };
    /** Fetch the domains most recently blocked by Pi-hole. */
    "pi_hole.get_recent_blocked": {
      input: {
        /** Maximum number of blocked domains to return. */
        count?: number;
      };
      output: {
        /** The most recently blocked domains. */
        blocked: Array<string>;
      };
    };
    /** Fetch the clients that have queried Pi-hole the most, optionally limited to blocked ones. */
    "pi_hole.get_top_clients": {
      input: {
        /** Maximum number of entries to return. */
        count?: number;
        /** Only include blocked queries in the result. */
        blocked?: boolean;
      };
      output: {
        /** The top client entries. */
        clients: Array<Record<string, unknown>>;
        /** Total number of queries in the requested window. */
        totalQueries: number;
        /** Number of blocked queries in the requested window. */
        blockedQueries: number;
      };
    };
    /** Fetch the domains Pi-hole has handled the most, optionally limited to blocked ones. */
    "pi_hole.get_top_domains": {
      input: {
        /** Maximum number of entries to return. */
        count?: number;
        /** Only include blocked queries in the result. */
        blocked?: boolean;
      };
      output: {
        /** The top domain entries. */
        domains: Array<Record<string, unknown>>;
        /** Total number of queries in the requested window. */
        totalQueries: number;
        /** Number of blocked queries in the requested window. */
        blockedQueries: number;
      };
    };
    /** Fetch metrics about Pi-hole's DNS upstream destinations, including response times. */
    "pi_hole.get_upstreams": {
      input: Record<string, never>;
      output: {
        /** The upstream destination entries. */
        upstreams: Array<Record<string, unknown>>;
        /** Number of queries forwarded to upstream destinations. */
        forwardedQueries: number;
        /** Total number of queries in the window. */
        totalQueries: number;
      };
    };
    /** Restore a Pi-hole teleporter backup archive (a previously exported teleporter.zip) to this instance. */
    "pi_hole.import_backup": {
      input: {
        /**
         * A public HTTP or HTTPS URL for the teleporter archive to restore.
         * @format uri
         */
        fileUrl: string;
      };
      output: {
        /** The files restored from the archive. */
        files: Array<string>;
      };
    };
    /** List all Pi-hole clients and their group memberships. */
    "pi_hole.list_clients": {
      input: Record<string, never>;
      output: {
        /** The Pi-hole clients. */
        clients: Array<Record<string, unknown>>;
      };
    };
    /** List the individual Pi-hole domain entries, optionally restricted to one type or kind. */
    "pi_hole.list_domains": {
      input: {
        /** Whether the domain entry allows or denies the domain. */
        type?: "allow" | "deny";
        /** Whether the domain entry matches exactly or as a regular expression. */
        kind?: "exact" | "regex";
      };
      output: {
        /** The Pi-hole domain entries. */
        domains: Array<Record<string, unknown>>;
      };
    };
    /** List all Pi-hole groups and their memberships. */
    "pi_hole.list_groups": {
      input: Record<string, never>;
      output: {
        /** The Pi-hole groups. */
        groups: Array<Record<string, unknown>>;
      };
    };
    /** List the Pi-hole allowlists and blocklists (subscription lists). */
    "pi_hole.list_lists": {
      input: {
        /** Whether the list is an allowlist or a blocklist. */
        type?: "allow" | "block";
      };
      output: {
        /** The Pi-hole lists. */
        lists: Array<Record<string, unknown>>;
      };
    };
    /** Restart Pi-hole's DNS server and reload its DNS configuration. */
    "pi_hole.restart_dns": {
      input: Record<string, never>;
      output: {
        /** The restart result status returned by the instance, normally success. */
        status: string | null;
      };
    };
    /** Run the Pi-hole gravity update to refresh the blocklists. The instance streams the gravity log; the action reports a best-effort status from the log plus the tail of the stream. */
    "pi_hole.run_gravity": {
      input: Record<string, never>;
      output: {
        /** Best-effort gravity outcome inferred from the stream: success, failed, or null when the stream gives no clear signal. */
        status: string | null;
        /** The tail of the gravity log stream as relayed by the instance. */
        output: string;
      };
    };
    /** Search whether a domain appears in Pi-hole's allowlists, blocklists, or gravity lists, to understand why it is blocked or allowed. */
    "pi_hole.search_domain": {
      input: {
        /**
         * The domain (or part of it) to search for in Pi-hole's lists.
         * @minLength 1
         */
        domain: string;
        /** Allow partial matches; may not find complex regex entries. */
        partial?: boolean;
        /** Maximum number of results per match type; the instance caps this internally. */
        maxResults?: number;
      };
      output: {
        /** The Pi-hole search result payload. */
        search: Record<string, unknown>;
      };
    };
    /** Enable or disable Pi-hole DNS blocking, optionally for a limited time after which the opposite mode is restored automatically. */
    "pi_hole.set_dns_blocking": {
      input: {
        /** Whether DNS blocking should be enabled. */
        blocking: boolean;
        /** Optional timer in seconds after which the opposite blocking mode is applied automatically; pass null to cancel a running timer. */
        timer?: number | null;
      };
      output: {
        /** The Pi-hole blocking status. */
        blocking: "enabled" | "disabled" | "failed" | "unknown";
        /** Remaining seconds until the blocking mode is toggled automatically, or null when no timer is active. */
        timer: number | null;
      };
    };
    /** Update one Pi-hole client's comment or group memberships. */
    "pi_hole.update_client": {
      input: {
        /**
         * The client identifier to update (IP / MAC / hostname / interface).
         * @minLength 1
         */
        client: string;
        /** The new comment for the client; pass null to clear it. */
        comment?: string | null;
        /** The group IDs the item belongs to; defaults to group 0 when omitted. */
        groups?: Array<number>;
      };
      output: {
        /** The write result reported by the instance. */
        processed: {
          /** The items that were written successfully. */
          success: Array<string>;
          /** The items that could not be written, with their error messages. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Change part of the Pi-hole configuration, for example DNS upstreams, the privacy level, or API settings. The provided fields are merged into the current configuration. */
    "pi_hole.update_config": {
      input: {
        /** The Pi-hole configuration fields to change, using the same structure as the configuration payload. */
        config: Record<string, unknown>;
        /** Whether the instance may restart its DNS server when the change requires it; defaults to true. Pass false to apply the change without a disruptive DNS restart. */
        restart?: boolean;
      };
      output: {
        /** The updated Pi-hole configuration payload. */
        config: Record<string, unknown>;
      };
    };
    /** Update one Pi-hole domain entry: change its comment, enabled state, or group memberships. */
    "pi_hole.update_domain": {
      input: {
        /** Whether the domain entry allows or denies the domain. */
        type: "allow" | "deny";
        /** Whether the domain entry matches exactly or as a regular expression. */
        kind: "exact" | "regex";
        /**
         * The domain of the entry to update.
         * @minLength 1
         */
        domain: string;
        /** The new comment for the entry; pass null to clear it. */
        comment?: string | null;
        /** The group IDs the item belongs to; defaults to group 0 when omitted. */
        groups?: Array<number>;
        /** Whether the entry is enabled. */
        enabled?: boolean;
      };
      output: {
        /** The write result reported by the instance. */
        processed: {
          /** The items that were written successfully. */
          success: Array<string>;
          /** The items that could not be written, with their error messages. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Update one Pi-hole group: rename it, or change its comment or enabled state. */
    "pi_hole.update_group": {
      input: {
        /**
         * The current group name to update.
         * @minLength 1
         */
        name: string;
        /**
         * The new group name when renaming the group.
         * @minLength 1
         */
        newName?: string;
        /** The new comment for the group; pass null to clear it. */
        comment?: string | null;
        /** Whether the group is enabled. */
        enabled?: boolean;
      };
      output: {
        /** The write result reported by the instance. */
        processed: {
          /** The items that were written successfully. */
          success: Array<string>;
          /** The items that could not be written, with their error messages. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Update one Pi-hole list: change its comment, enabled state, or group memberships. */
    "pi_hole.update_list": {
      input: {
        /**
         * The address of the list to update.
         * @minLength 1
         */
        address: string;
        /** Whether the list is an allowlist or a blocklist. */
        type: "allow" | "block";
        /** The new comment for the list; pass null to clear it. */
        comment?: string | null;
        /** The group IDs the item belongs to; defaults to group 0 when omitted. */
        groups?: Array<number>;
        /** Whether the list is enabled. */
        enabled?: boolean;
      };
      output: {
        /** The write result reported by the instance. */
        processed: {
          /** The items that were written successfully. */
          success: Array<string>;
          /** The items that could not be written, with their error messages. */
          errors: Array<Record<string, unknown>>;
          [key: string]: unknown;
        } | null;
      };
    };
  }
}
