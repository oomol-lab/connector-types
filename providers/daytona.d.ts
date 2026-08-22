import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Daytona sandbox from a snapshot with optional resource and lifecycle settings. */
    "daytona.create_sandbox": {
      input: {
        /** The sandbox name. Daytona uses the generated ID when omitted. */
        name?: string;
        /** The ID or name of the snapshot to use. */
        snapshot?: string;
        /** The target region where Daytona should create the sandbox. */
        target?: string;
        /**
         * The number of CPU cores to allocate.
         * @minimum 1
         */
        cpu?: number;
        /**
         * The memory to allocate in GiB.
         * @minimum 1
         */
        memory?: number;
        /**
         * The disk space to allocate in GiB.
         * @minimum 1
         */
        disk?: number;
        /** Environment variables for the sandbox. */
        env?: Record<string, string>;
        /** Labels for the sandbox. */
        labels?: Record<string, string>;
        /**
         * Minutes of inactivity before Daytona stops the sandbox; zero disables auto-stop.
         * @minimum 0
         */
        autoStopInterval?: number;
        /**
         * Minutes before Daytona archives a stopped sandbox.
         * @minimum 0
         */
        autoArchiveInterval?: number;
        /**
         * Minutes before Daytona deletes a stopped sandbox; zero deletes immediately.
         * @minimum 0
         */
        autoDeleteInterval?: number;
        /**
         * Maximum wall-clock lifetime in minutes; zero disables the TTL.
         * @minimum 0
         */
        ttlMinutes?: number;
      };
      output: {
        /** A Daytona sandbox. */
        sandbox: {
          /** The sandbox ID. */
          id?: string;
          /** The sandbox name. */
          name?: string;
          /** The current sandbox state. */
          state?: string;
          /** The desired sandbox state. */
          desiredState?: string;
          /** The snapshot used by the sandbox. */
          snapshot?: string;
          /** The Daytona target region for the sandbox. */
          target?: string;
          /** The allocated CPU cores. */
          cpu?: number;
          /** The allocated memory in GiB. */
          memory?: number;
          /** The allocated disk space in GiB. */
          disk?: number;
          /** Labels attached to the sandbox. */
          labels?: Record<string, string>;
          /** The sandbox creation timestamp. */
          createdAt?: string;
          /** The sandbox update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Daytona sandbox by ID or name. */
    "daytona.delete_sandbox": {
      input: {
        /**
         * The ID or name of the sandbox.
         * @minLength 1
         */
        sandboxIdOrName: string;
      };
      output: {
        /** A Daytona sandbox. */
        sandbox: {
          /** The sandbox ID. */
          id?: string;
          /** The sandbox name. */
          name?: string;
          /** The current sandbox state. */
          state?: string;
          /** The desired sandbox state. */
          desiredState?: string;
          /** The snapshot used by the sandbox. */
          snapshot?: string;
          /** The Daytona target region for the sandbox. */
          target?: string;
          /** The allocated CPU cores. */
          cpu?: number;
          /** The allocated memory in GiB. */
          memory?: number;
          /** The allocated disk space in GiB. */
          disk?: number;
          /** Labels attached to the sandbox. */
          labels?: Record<string, string>;
          /** The sandbox creation timestamp. */
          createdAt?: string;
          /** The sandbox update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Daytona sandbox by ID or name. */
    "daytona.get_sandbox": {
      input: {
        /**
         * The ID or name of the sandbox.
         * @minLength 1
         */
        sandboxIdOrName: string;
      };
      output: {
        /** A Daytona sandbox. */
        sandbox: {
          /** The sandbox ID. */
          id?: string;
          /** The sandbox name. */
          name?: string;
          /** The current sandbox state. */
          state?: string;
          /** The desired sandbox state. */
          desiredState?: string;
          /** The snapshot used by the sandbox. */
          snapshot?: string;
          /** The Daytona target region for the sandbox. */
          target?: string;
          /** The allocated CPU cores. */
          cpu?: number;
          /** The allocated memory in GiB. */
          memory?: number;
          /** The allocated disk space in GiB. */
          disk?: number;
          /** Labels attached to the sandbox. */
          labels?: Record<string, string>;
          /** The sandbox creation timestamp. */
          createdAt?: string;
          /** The sandbox update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List Daytona sandboxes with cursor pagination and common filters. */
    "daytona.list_sandboxes": {
      input: {
        /** The cursor returned by the previous page. */
        cursor?: string;
        /**
         * The maximum number of sandboxes to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** An ID prefix to filter by, matched case-insensitively. */
        id?: string;
        /** A name prefix to filter by, matched case-insensitively. */
        name?: string;
        /**
         * Sandbox states to include.
         * @minItems 1
         */
        states?: Array<string>;
        /** Whether to include errored sandboxes whose desired state is deleted. */
        includeErroredDeleted?: boolean;
      };
      output: {
        /** Sandboxes in the current page. */
        sandboxes: Array<{
          /** The sandbox ID. */
          id?: string;
          /** The sandbox name. */
          name?: string;
          /** The current sandbox state. */
          state?: string;
          /** The desired sandbox state. */
          desiredState?: string;
          /** The snapshot used by the sandbox. */
          snapshot?: string;
          /** The Daytona target region for the sandbox. */
          target?: string;
          /** The allocated CPU cores. */
          cpu?: number;
          /** The allocated memory in GiB. */
          memory?: number;
          /** The allocated disk space in GiB. */
          disk?: number;
          /** Labels attached to the sandbox. */
          labels?: Record<string, string>;
          /** The sandbox creation timestamp. */
          createdAt?: string;
          /** The sandbox update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** The cursor for the next page, or null when no page remains. */
        nextCursor: string | null;
      };
    };
    /** Start, restore, or resume a Daytona sandbox according to its current state. */
    "daytona.start_sandbox": {
      input: {
        /**
         * The ID or name of the sandbox.
         * @minLength 1
         */
        sandboxIdOrName: string;
      };
      output: {
        /** A Daytona sandbox. */
        sandbox: {
          /** The sandbox ID. */
          id?: string;
          /** The sandbox name. */
          name?: string;
          /** The current sandbox state. */
          state?: string;
          /** The desired sandbox state. */
          desiredState?: string;
          /** The snapshot used by the sandbox. */
          snapshot?: string;
          /** The Daytona target region for the sandbox. */
          target?: string;
          /** The allocated CPU cores. */
          cpu?: number;
          /** The allocated memory in GiB. */
          memory?: number;
          /** The allocated disk space in GiB. */
          disk?: number;
          /** Labels attached to the sandbox. */
          labels?: Record<string, string>;
          /** The sandbox creation timestamp. */
          createdAt?: string;
          /** The sandbox update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Stop a Daytona sandbox, optionally forcing an immediate stop. */
    "daytona.stop_sandbox": {
      input: {
        /**
         * The ID or name of the sandbox.
         * @minLength 1
         */
        sandboxIdOrName: string;
        /** Whether to force the sandbox to stop with SIGKILL instead of SIGTERM. */
        force?: boolean;
      };
      output: {
        /** A Daytona sandbox. */
        sandbox: {
          /** The sandbox ID. */
          id?: string;
          /** The sandbox name. */
          name?: string;
          /** The current sandbox state. */
          state?: string;
          /** The desired sandbox state. */
          desiredState?: string;
          /** The snapshot used by the sandbox. */
          snapshot?: string;
          /** The Daytona target region for the sandbox. */
          target?: string;
          /** The allocated CPU cores. */
          cpu?: number;
          /** The allocated memory in GiB. */
          memory?: number;
          /** The allocated disk space in GiB. */
          disk?: number;
          /** Labels attached to the sandbox. */
          labels?: Record<string, string>;
          /** The sandbox creation timestamp. */
          createdAt?: string;
          /** The sandbox update timestamp. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
