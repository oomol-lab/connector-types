import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an E2B sandbox from a template. */
    "e2b.create_sandbox": {
      input: {
        /**
         * The E2B template identifier used to create the sandbox.
         * @minLength 1
         * @pattern \S
         */
        templateID: string;
        /**
         * Time to live for the sandbox in seconds.
         * @minimum 0
         */
        timeout?: number;
        /** Whether E2B should automatically pause the sandbox after timeout. */
        autoPause?: boolean;
        /** Whether auto-pause should preserve the sandbox memory snapshot when autoPause is true. */
        autoPauseMemory?: boolean;
        /** Auto-resume configuration for paused sandboxes. */
        autoResume?: {
          /** Whether auto-resume is enabled for paused sandboxes. */
          enabled: boolean;
        };
        /** Whether E2B should secure all system communication with the sandbox. */
        secure?: boolean;
        /** Whether the sandbox can access the internet. */
        allow_internet_access?: boolean;
        /** The E2B sandbox network configuration object. */
        network?: {
          /** Whether sandbox URLs are publicly accessible. */
          allowPublicTraffic?: boolean;
          /** Allowed outbound destinations for sandbox egress traffic. */
          allowOut?: Array<string>;
          /** Denied outbound CIDR blocks or IP addresses for sandbox egress traffic. */
          denyOut?: Array<string>;
          /** The egress proxy configuration returned or accepted by E2B. */
          egressProxy?: Record<string, unknown> | null;
          /** The host mask used for sandbox requests. */
          maskRequestHost?: string;
          /** Per-domain outbound request transform rules. */
          rules?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** String metadata attached to the sandbox. */
        metadata?: Record<string, string>;
        /** Environment variables passed to the sandbox. */
        envVars?: Record<string, string>;
        /** MCP configuration for the sandbox. */
        mcp?: Record<string, unknown> | null;
        /** Volume mounts to attach to the sandbox. */
        volumeMounts?: Array<{
          /** The volume name. */
          name: string;
          /** The volume mount path inside the sandbox. */
          path: string;
        }>;
      };
      output: {
        /** The E2B sandbox created by the API. */
        sandbox: {
          /** Identifier of the template from which the sandbox was created. */
          templateID?: string;
          /** Identifier of the sandbox. */
          sandboxID?: string;
          /** Alias of the template when returned by E2B. */
          alias?: string;
          /** Deprecated E2B client identifier. */
          clientID?: string;
          /** Version of envd running in the sandbox. */
          envdVersion?: string;
          /** Access token for envd requests when the sandbox is secure. */
          envdAccessToken?: string | null;
          /** Token required for accessing the sandbox through the E2B proxy when returned. */
          trafficAccessToken?: string | null;
          /** Deprecated E2B sandbox domain field. */
          domain?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Kill an E2B sandbox by sandbox identifier. */
    "e2b.delete_sandbox": {
      input: {
        /**
         * The E2B sandbox identifier.
         * @minLength 1
         * @pattern \S
         */
        sandboxID: string;
      };
      output: {
        /**
         * The E2B sandbox identifier.
         * @minLength 1
         * @pattern \S
         */
        sandboxID: string;
        /** Whether the sandbox delete request completed successfully. */
        success: boolean;
      };
    };
    /** Get one E2B sandbox by sandbox identifier. */
    "e2b.get_sandbox": {
      input: {
        /**
         * The E2B sandbox identifier.
         * @minLength 1
         * @pattern \S
         */
        sandboxID: string;
      };
      output: {
        /** Detailed E2B sandbox information. */
        sandbox: {
          /** Identifier of the template from which the sandbox was created. */
          templateID?: string;
          /** Alias of the template when returned by E2B. */
          alias?: string;
          /** Identifier of the sandbox. */
          sandboxID?: string;
          /** Deprecated E2B client identifier. */
          clientID?: string;
          /**
           * Time when the sandbox was started.
           * @format date-time
           */
          startedAt?: string;
          /**
           * Time when the sandbox will expire.
           * @format date-time
           */
          endAt?: string;
          /** Version of envd running in the sandbox. */
          envdVersion?: string;
          /** Access token for envd requests when the sandbox is secure. */
          envdAccessToken?: string | null;
          /** Token required for accessing the sandbox through the E2B proxy when returned. */
          trafficAccessToken?: string | null;
          /** Deprecated E2B sandbox domain field. */
          domain?: string | null;
          /** Whether internet access was explicitly enabled or disabled for the sandbox. */
          allowInternetAccess?: boolean | null;
          /** CPU cores allocated to the sandbox. */
          cpuCount?: number;
          /** Memory allocated to the sandbox in MiB. */
          memoryMB?: number;
          /** Disk size allocated to the sandbox in MiB. */
          diskSizeMB?: number;
          /** String metadata attached to the sandbox. */
          metadata?: Record<string, string>;
          /** The E2B sandbox lifecycle state. */
          state?: "running" | "paused";
          /** The E2B sandbox network configuration object. */
          network?: {
            /** Whether sandbox URLs are publicly accessible. */
            allowPublicTraffic?: boolean;
            /** Allowed outbound destinations for sandbox egress traffic. */
            allowOut?: Array<string>;
            /** Denied outbound CIDR blocks or IP addresses for sandbox egress traffic. */
            denyOut?: Array<string>;
            /** The egress proxy configuration returned or accepted by E2B. */
            egressProxy?: Record<string, unknown> | null;
            /** The host mask used for sandbox requests. */
            maskRequestHost?: string;
            /** Per-domain outbound request transform rules. */
            rules?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Sandbox lifecycle configuration returned by E2B. */
          lifecycle?: Record<string, unknown>;
          /** Volume mounts attached to the sandbox. */
          volumeMounts?: Array<{
            /** The volume name. */
            name: string;
            /** The volume mount path inside the sandbox. */
            path: string;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List E2B sandboxes visible to the current API key. */
    "e2b.list_sandboxes": {
      input: {
        /**
         * Metadata query used to filter sandboxes, such as "user=abc&app=prod". Keys and values must already be URL encoded.
         * @minLength 1
         */
        metadata?: string;
        /**
         * Sandbox states used to filter the list.
         * @minItems 1
         */
        state?: Array<"running" | "paused">;
        /**
         * Cursor returned by E2B for the next page.
         * @minLength 1
         */
        nextToken?: string;
        /**
         * Maximum number of sandboxes to return per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The sandboxes returned by E2B. */
        sandboxes: Array<{
          /** Identifier of the template from which the sandbox was created. */
          templateID?: string;
          /** Alias of the template when returned by E2B. */
          alias?: string;
          /** Identifier of the sandbox. */
          sandboxID?: string;
          /** Deprecated E2B client identifier. */
          clientID?: string;
          /**
           * Time when the sandbox was started.
           * @format date-time
           */
          startedAt?: string;
          /**
           * Time when the sandbox will expire.
           * @format date-time
           */
          endAt?: string;
          /** CPU cores allocated to the sandbox. */
          cpuCount?: number;
          /** Memory allocated to the sandbox in MiB. */
          memoryMB?: number;
          /** Disk size allocated to the sandbox in MiB. */
          diskSizeMB?: number;
          /** String metadata attached to the sandbox. */
          metadata?: Record<string, string>;
          /** The E2B sandbox lifecycle state. */
          state?: "running" | "paused";
          /** Version of envd running in the sandbox. */
          envdVersion?: string;
          /** Volume mounts attached to the sandbox. */
          volumeMounts?: Array<{
            /** The volume name. */
            name: string;
            /** The volume mount path inside the sandbox. */
            path: string;
          }>;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
