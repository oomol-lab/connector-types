import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check that the Speedtest Tracker instance is reachable and running through its unauthenticated health check endpoint. */
    "speedtest_tracker.check_health": {
      input: Record<string, never>;
      output: {
        /** The upstream health message, normally `Speedtest Tracker is running!`. */
        message: string;
      };
    };
    /** Retrieve the most recent speedtest result, optionally narrowed by the same filters as list_results, for example status `completed` for the last successful test. Requires a token with the Read Results ability. */
    "speedtest_tracker.get_latest_result": {
      input: {
        /** Filter by ping in milliseconds. Prefix the value with a comparison operator (<, <=, >, >=, or <>) for range queries, for example `>=20`; a bare number means equals. */
        ping?: string | number;
        /** Filter by download bandwidth in bytes per second. Prefix the value with a comparison operator (<, <=, >, >=, or <>) for range queries, for example `>=20`; a bare number means equals. */
        download?: string | number;
        /** Filter by upload bandwidth in bytes per second. Prefix the value with a comparison operator (<, <=, >, >=, or <>) for range queries, for example `>=20`; a bare number means equals. */
        upload?: string | number;
        /** Only include results whose benchmark evaluation matched this healthy flag. */
        healthy?: boolean;
        /** Only include results with this status. */
        status?: "waiting" | "started" | "checking" | "benchmarking" | "running" | "completed" | "failed" | "skipped";
        /** Only include scheduled results (true) or manual dashboard results (false). Tests started through the API are stored as scheduled. */
        scheduled?: boolean;
        /** Only include results created on or after this ISO 8601 date or date-time, for example `2026-09-01` or `2026-09-01T00:00:00Z`. */
        startAt?: string;
        /** Only include results created on or before this ISO 8601 date or date-time. A date without a time covers the whole day. */
        endAt?: string;
      };
      output: {
        /** A Speedtest Tracker result with upstream field names. Bandwidth fields use bytes per second unless the name says bits. */
        result: {
          /** The result ID. */
          id: number;
          /** The speedtest service that produced the result, currently `ookla`. */
          service?: string;
          /** Ping latency in milliseconds, null until the test completes. */
          ping?: number | null;
          /** Download bandwidth in bytes per second, null until the test completes. */
          download?: number | null;
          /** Upload bandwidth in bytes per second, null until the test completes. */
          upload?: number | null;
          /** Download bandwidth in bits per second, omitted when download is empty. */
          download_bits?: number;
          /** Upload bandwidth in bits per second, omitted when upload is empty. */
          upload_bits?: number;
          /** Human readable download bandwidth such as `934.51 Mbps`, omitted when download is empty. */
          download_bits_human?: string;
          /** Human readable upload bandwidth such as `41.20 Mbps`, omitted when upload is empty. */
          upload_bits_human?: string;
          /** Total bytes transferred during the download phase. */
          download_bytes?: number | null;
          /** Total bytes transferred during the upload phase. */
          upload_bytes?: number | null;
          /** Human readable download transfer size, omitted when download_bytes is empty. */
          download_bytes_human?: string;
          /** Human readable upload transfer size, omitted when upload_bytes is empty. */
          upload_bytes_human?: string;
          /** The benchmark evaluation payload, null when no benchmarks were configured. */
          benchmarks?: unknown;
          /** Whether the result passed the configured benchmarks, null when not evaluated. */
          healthy?: boolean | null;
          /** The result status. waiting, started, checking, benchmarking, and running mean the test is still in progress. */
          status: "waiting" | "started" | "checking" | "benchmarking" | "running" | "completed" | "failed" | "skipped";
          /** Whether the test ran from the schedule or the API (true) instead of a manual dashboard run (false). */
          scheduled?: boolean;
          /** The ID of the user whose token or dashboard session dispatched the test, null for scheduled runs. */
          dispatched_by?: number | null;
          /** Free-form comments attached to the result. */
          comments?: string | null;
          /** The raw Ookla Speedtest CLI payload, including isp, server, ping, download, upload, interface, packetLoss, and result URL fields. */
          data?: Record<string, unknown> | null;
          /** When the result was created, formatted as `YYYY-MM-DD HH:mm:ss` in the instance timezone. */
          created_at?: string;
          /** When the result was last updated, formatted as `YYYY-MM-DD HH:mm:ss` in the instance timezone. */
          updated_at?: string;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Retrieve one speedtest result by ID. Use it to poll a test queued by run_speedtest until its status leaves the in-progress states. Requires a token with the Read Results ability. */
    "speedtest_tracker.get_result": {
      input: {
        /**
         * The result ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** A Speedtest Tracker result with upstream field names. Bandwidth fields use bytes per second unless the name says bits. */
        result: {
          /** The result ID. */
          id: number;
          /** The speedtest service that produced the result, currently `ookla`. */
          service?: string;
          /** Ping latency in milliseconds, null until the test completes. */
          ping?: number | null;
          /** Download bandwidth in bytes per second, null until the test completes. */
          download?: number | null;
          /** Upload bandwidth in bytes per second, null until the test completes. */
          upload?: number | null;
          /** Download bandwidth in bits per second, omitted when download is empty. */
          download_bits?: number;
          /** Upload bandwidth in bits per second, omitted when upload is empty. */
          upload_bits?: number;
          /** Human readable download bandwidth such as `934.51 Mbps`, omitted when download is empty. */
          download_bits_human?: string;
          /** Human readable upload bandwidth such as `41.20 Mbps`, omitted when upload is empty. */
          upload_bits_human?: string;
          /** Total bytes transferred during the download phase. */
          download_bytes?: number | null;
          /** Total bytes transferred during the upload phase. */
          upload_bytes?: number | null;
          /** Human readable download transfer size, omitted when download_bytes is empty. */
          download_bytes_human?: string;
          /** Human readable upload transfer size, omitted when upload_bytes is empty. */
          upload_bytes_human?: string;
          /** The benchmark evaluation payload, null when no benchmarks were configured. */
          benchmarks?: unknown;
          /** Whether the result passed the configured benchmarks, null when not evaluated. */
          healthy?: boolean | null;
          /** The result status. waiting, started, checking, benchmarking, and running mean the test is still in progress. */
          status: "waiting" | "started" | "checking" | "benchmarking" | "running" | "completed" | "failed" | "skipped";
          /** Whether the test ran from the schedule or the API (true) instead of a manual dashboard run (false). */
          scheduled?: boolean;
          /** The ID of the user whose token or dashboard session dispatched the test, null for scheduled runs. */
          dispatched_by?: number | null;
          /** Free-form comments attached to the result. */
          comments?: string | null;
          /** The raw Ookla Speedtest CLI payload, including isp, server, ping, download, upload, interface, packetLoss, and result URL fields. */
          data?: Record<string, unknown> | null;
          /** When the result was created, formatted as `YYYY-MM-DD HH:mm:ss` in the instance timezone. */
          created_at?: string;
          /** When the result was last updated, formatted as `YYYY-MM-DD HH:mm:ss` in the instance timezone. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve aggregated ping, download, and upload statistics, optionally limited to a date range. Requires a token with the Read Results ability. */
    "speedtest_tracker.get_stats": {
      input: {
        /** Only include results created on or after this ISO 8601 date or date-time, for example `2026-09-01` or `2026-09-01T00:00:00Z`. */
        startAt?: string;
        /** Only include results created on or before this ISO 8601 date or date-time. A date without a time covers the whole day. */
        endAt?: string;
      };
      output: {
        /** Aggregated statistics with upstream field names. All averages are 0 when no result matches. */
        stats: {
          /** The number of results in the selected range. */
          total_results: number;
          /** Aggregated ping statistics in milliseconds. */
          ping: {
            /** Average ping, rounded to two decimals. */
            avg: number;
            /** Minimum ping, rounded to two decimals. */
            min: number;
            /** Maximum ping, rounded to two decimals. */
            max: number;
            [key: string]: unknown;
          };
          /** Aggregated download bandwidth statistics in bytes per second, with bits variants when the value is non-zero. */
          download: {
            /** Average download bandwidth in bytes per second, rounded. */
            avg: number;
            /** Average download bandwidth in bits per second, omitted when avg is 0. */
            avg_bits?: number;
            /** Human readable average download bandwidth, omitted when avg is 0. */
            avg_bits_human?: string;
            /** Minimum download bandwidth in bytes per second, rounded. */
            min: number;
            /** Minimum download bandwidth in bits per second, omitted when min is 0. */
            min_bits?: number;
            /** Human readable minimum download bandwidth, omitted when min is 0. */
            min_bits_human?: string;
            /** Maximum download bandwidth in bytes per second, rounded. */
            max: number;
            /** Maximum download bandwidth in bits per second, omitted when max is 0. */
            max_bits?: number;
            /** Human readable maximum download bandwidth, omitted when max is 0. */
            max_bits_human?: string;
            [key: string]: unknown;
          };
          /** Aggregated upload bandwidth statistics in bytes per second, with bits variants when the value is non-zero. */
          upload: {
            /** Average upload bandwidth in bytes per second, rounded. */
            avg: number;
            /** Average upload bandwidth in bits per second, omitted when avg is 0. */
            avg_bits?: number;
            /** Human readable average upload bandwidth, omitted when avg is 0. */
            avg_bits_human?: string;
            /** Minimum upload bandwidth in bytes per second, rounded. */
            min: number;
            /** Minimum upload bandwidth in bits per second, omitted when min is 0. */
            min_bits?: number;
            /** Human readable minimum upload bandwidth, omitted when min is 0. */
            min_bits_human?: string;
            /** Maximum upload bandwidth in bytes per second, rounded. */
            max: number;
            /** Maximum upload bandwidth in bits per second, omitted when max is 0. */
            max_bits?: number;
            /** Human readable maximum upload bandwidth, omitted when max is 0. */
            max_bits_human?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List speedtest results with optional filters, sorting, and pagination. Requires a token with the Read Results ability. */
    "speedtest_tracker.list_results": {
      input: {
        /** Filter by ping in milliseconds. Prefix the value with a comparison operator (<, <=, >, >=, or <>) for range queries, for example `>=20`; a bare number means equals. */
        ping?: string | number;
        /** Filter by download bandwidth in bytes per second. Prefix the value with a comparison operator (<, <=, >, >=, or <>) for range queries, for example `>=20`; a bare number means equals. */
        download?: string | number;
        /** Filter by upload bandwidth in bytes per second. Prefix the value with a comparison operator (<, <=, >, >=, or <>) for range queries, for example `>=20`; a bare number means equals. */
        upload?: string | number;
        /** Only include results whose benchmark evaluation matched this healthy flag. */
        healthy?: boolean;
        /** Only include results with this status. */
        status?: "waiting" | "started" | "checking" | "benchmarking" | "running" | "completed" | "failed" | "skipped";
        /** Only include scheduled results (true) or manual dashboard results (false). Tests started through the API are stored as scheduled. */
        scheduled?: boolean;
        /** Only include results created on or after this ISO 8601 date or date-time, for example `2026-09-01` or `2026-09-01T00:00:00Z`. */
        startAt?: string;
        /** Only include results created on or before this ISO 8601 date or date-time. A date without a time covers the whole day. */
        endAt?: string;
        /** The sort field; prefix with `-` for descending. Defaults to the instance insertion order, so use `-created_at` for newest first. */
        sort?: "ping" | "-ping" | "download" | "-download" | "upload" | "-upload" | "created_at" | "-created_at" | "updated_at" | "-updated_at";
        /**
         * The 1-based page number. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Results per page, from 1 to 500. Defaults to 25. The instance can lower the maximum through API_MAX_RESULTS.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
      };
      output: {
        /** The matching results in the requested order. */
        results: Array<{
          /** The result ID. */
          id: number;
          /** The speedtest service that produced the result, currently `ookla`. */
          service?: string;
          /** Ping latency in milliseconds, null until the test completes. */
          ping?: number | null;
          /** Download bandwidth in bytes per second, null until the test completes. */
          download?: number | null;
          /** Upload bandwidth in bytes per second, null until the test completes. */
          upload?: number | null;
          /** Download bandwidth in bits per second, omitted when download is empty. */
          download_bits?: number;
          /** Upload bandwidth in bits per second, omitted when upload is empty. */
          upload_bits?: number;
          /** Human readable download bandwidth such as `934.51 Mbps`, omitted when download is empty. */
          download_bits_human?: string;
          /** Human readable upload bandwidth such as `41.20 Mbps`, omitted when upload is empty. */
          upload_bits_human?: string;
          /** Total bytes transferred during the download phase. */
          download_bytes?: number | null;
          /** Total bytes transferred during the upload phase. */
          upload_bytes?: number | null;
          /** Human readable download transfer size, omitted when download_bytes is empty. */
          download_bytes_human?: string;
          /** Human readable upload transfer size, omitted when upload_bytes is empty. */
          upload_bytes_human?: string;
          /** The benchmark evaluation payload, null when no benchmarks were configured. */
          benchmarks?: unknown;
          /** Whether the result passed the configured benchmarks, null when not evaluated. */
          healthy?: boolean | null;
          /** The result status. waiting, started, checking, benchmarking, and running mean the test is still in progress. */
          status: "waiting" | "started" | "checking" | "benchmarking" | "running" | "completed" | "failed" | "skipped";
          /** Whether the test ran from the schedule or the API (true) instead of a manual dashboard run (false). */
          scheduled?: boolean;
          /** The ID of the user whose token or dashboard session dispatched the test, null for scheduled runs. */
          dispatched_by?: number | null;
          /** Free-form comments attached to the result. */
          comments?: string | null;
          /** The raw Ookla Speedtest CLI payload, including isp, server, ping, download, upload, interface, packetLoss, and result URL fields. */
          data?: Record<string, unknown> | null;
          /** When the result was created, formatted as `YYYY-MM-DD HH:mm:ss` in the instance timezone. */
          created_at?: string;
          /** When the result was last updated, formatted as `YYYY-MM-DD HH:mm:ss` in the instance timezone. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
        /** Pagination details normalized from the upstream meta block. */
        pagination: {
          /** The current 1-based page number. */
          currentPage: number;
          /** The last available page number. */
          lastPage: number;
          /** The page size applied by the instance. */
          perPage: number;
          /** The total number of matching results. */
          total: number;
          /** The 1-based position of the first result on this page, null when the page is empty. */
          from: number | null;
          /** The 1-based position of the last result on this page, null when the page is empty. */
          to: number | null;
          /** The next page number, null on the last page. */
          nextPage: number | null;
        };
      };
    };
    /** List nearby Ookla speedtest servers as seen by the instance, for choosing a serverId for run_speedtest. Requires a token with the List Servers ability. */
    "speedtest_tracker.list_servers": {
      input: Record<string, never>;
      output: {
        /** The servers returned by the instance, empty when it cannot reach Ookla. */
        servers: Array<{
          /** The Ookla server ID. Numeric IDs are returned as integers so they can be passed to run_speedtest. */
          id: number | string;
          /** The server host and port, for example `speedtest.example.net:8080`. */
          host: string;
          /** The server sponsor name. */
          name: string;
          /** The server city or location label. */
          location: string;
          /** The server country. */
          country: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Queue a new Ookla speedtest on the instance and return the queued result immediately. Poll get_result with the returned ID until the status is completed, failed, or skipped. Requires a token with the Run Speedtest ability. */
    "speedtest_tracker.run_speedtest": {
      input: {
        /**
         * The Ookla server ID to test against, from list_servers. Omit to let the instance choose a server.
         * @exclusiveMinimum 0
         */
        serverId?: number;
      };
      output: {
        /** A Speedtest Tracker result with upstream field names. Bandwidth fields use bytes per second unless the name says bits. */
        result: {
          /** The result ID. */
          id: number;
          /** The speedtest service that produced the result, currently `ookla`. */
          service?: string;
          /** Ping latency in milliseconds, null until the test completes. */
          ping?: number | null;
          /** Download bandwidth in bytes per second, null until the test completes. */
          download?: number | null;
          /** Upload bandwidth in bytes per second, null until the test completes. */
          upload?: number | null;
          /** Download bandwidth in bits per second, omitted when download is empty. */
          download_bits?: number;
          /** Upload bandwidth in bits per second, omitted when upload is empty. */
          upload_bits?: number;
          /** Human readable download bandwidth such as `934.51 Mbps`, omitted when download is empty. */
          download_bits_human?: string;
          /** Human readable upload bandwidth such as `41.20 Mbps`, omitted when upload is empty. */
          upload_bits_human?: string;
          /** Total bytes transferred during the download phase. */
          download_bytes?: number | null;
          /** Total bytes transferred during the upload phase. */
          upload_bytes?: number | null;
          /** Human readable download transfer size, omitted when download_bytes is empty. */
          download_bytes_human?: string;
          /** Human readable upload transfer size, omitted when upload_bytes is empty. */
          upload_bytes_human?: string;
          /** The benchmark evaluation payload, null when no benchmarks were configured. */
          benchmarks?: unknown;
          /** Whether the result passed the configured benchmarks, null when not evaluated. */
          healthy?: boolean | null;
          /** The result status. waiting, started, checking, benchmarking, and running mean the test is still in progress. */
          status: "waiting" | "started" | "checking" | "benchmarking" | "running" | "completed" | "failed" | "skipped";
          /** Whether the test ran from the schedule or the API (true) instead of a manual dashboard run (false). */
          scheduled?: boolean;
          /** The ID of the user whose token or dashboard session dispatched the test, null for scheduled runs. */
          dispatched_by?: number | null;
          /** Free-form comments attached to the result. */
          comments?: string | null;
          /** The raw Ookla Speedtest CLI payload, including isp, server, ping, download, upload, interface, packetLoss, and result URL fields. */
          data?: Record<string, unknown> | null;
          /** When the result was created, formatted as `YYYY-MM-DD HH:mm:ss` in the instance timezone. */
          created_at?: string;
          /** When the result was last updated, formatted as `YYYY-MM-DD HH:mm:ss` in the instance timezone. */
          updated_at?: string;
          [key: string]: unknown;
        };
        /** The upstream confirmation message, normally `Speedtest added to the queue.`. */
        message: string;
      };
    };
  }
}
