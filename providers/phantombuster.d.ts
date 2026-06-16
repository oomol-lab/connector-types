import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get a Phantombuster agent by ID. */
    "phantombuster.get_agent": {
      input: {
        /**
         * The Phantombuster record ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Phantombuster agent, with upstream fields preserved. */
        agent: {
          /**
           * The Phantombuster record ID.
           * @minLength 1
           */
          id: string;
          /** Name of the agent. */
          name?: string | null;
          /** A Phantombuster v2 timestamp in milliseconds. */
          createdAt?: number;
          /** Organization name owning the agent script. */
          scriptOrgName?: string | null;
          /** Script ID used by the agent. */
          scriptId?: string | null;
          /** Script filename used by the agent. */
          script?: string | null;
          /** Script branch used by the agent. */
          branch?: string | null;
          /** Script branch environment used by the agent. */
          environment?: string | null;
          /** Default argument stored on the agent. */
          argument?: string | null;
          /** End type of the latest completed container. */
          lastEndType?: string | null;
          /** Timestamp when the latest container ended. */
          lastEndedAt?: number | null;
          /** Exit code of the latest completed container. */
          lastExitCode?: number | null;
          /** Number of currently running containers for the agent. */
          nbContainersRunning?: number;
          /** Current running time for the agent. */
          runningTime?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Phantombuster container by ID. */
    "phantombuster.get_container": {
      input: {
        /**
         * ID of the container to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Phantombuster container, with upstream fields preserved. */
        container: {
          /**
           * The Phantombuster record ID.
           * @minLength 1
           */
          id: string;
          /** Current container status. */
          status?: string;
          /** A Phantombuster v2 timestamp in milliseconds. */
          createdAt?: number;
          /** How the container was launched. */
          launchType?: string;
          /** How the container ended. */
          endType?: string;
          /** A Phantombuster v2 timestamp in milliseconds. */
          endedAt?: number;
          /** Container process exit code. */
          exitCode?: number | null;
          /** Retry number for the container. */
          retryNumber?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current Phantombuster organization for the connected API key. */
    "phantombuster.get_current_organization": {
      input: Record<string, never>;
      output: {
        /** The current Phantombuster organization, with upstream fields preserved. */
        organization: {
          /**
           * The Phantombuster record ID.
           * @minLength 1
           */
          id: string;
          /** Name of the Phantombuster organization. */
          name: string;
          /** Current plan slug for the organization. */
          planSlug?: string;
          /** Timezone configured for the organization. */
          timezone?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Add a Phantombuster agent to the launch queue. */
    "phantombuster.launch_agent": {
      input: {
        /**
         * ID of the agent to launch.
         * @minLength 1
         */
        id: string;
        /** Agent launch argument as a JSON string or plain object. */
        argument?: string | Record<string, unknown>;
        /** Agent launch argument as a JSON string or plain object. */
        arguments?: string | Record<string, unknown>;
        /** Single-use bonus argument merged with the stored agent argument for this launch. */
        bonusArgument?: string | Record<string, unknown>;
        /** Whether to save argument as the agent default launch options. */
        saveArgument?: boolean;
        /** Whether to save argument as the agent default launch options. */
        saveArguments?: boolean;
        /** Whether the launch should be considered manually triggered. */
        manualLaunch?: boolean;
        /**
         * Only launch if the number of already running instances is below this value.
         * @minimum 1
         */
        maxInstanceCount?: number;
        /** Key-value metadata attached to the launched container. */
        internalMetadata?: Record<string, unknown>;
        /** Key-value metadata attached to the launched container. */
        userCustomMetadata?: Record<string, unknown>;
        /**
         * Key identifying the persisted volume to attach to the container.
         * @maxLength 256
         */
        persistedVolumeKey?: string | null;
      };
      output: {
        /** Raw JSON result returned by Phantombuster for the request. */
        launch: Record<string, unknown>;
      };
    };
    /** List all Phantombuster agents in the current organization. */
    "phantombuster.list_agents": {
      input: Record<string, never>;
      output: {
        /** Agents returned by Phantombuster. */
        agents: Array<{
          /**
           * The Phantombuster record ID.
           * @minLength 1
           */
          id: string;
          /** Name of the agent. */
          name?: string | null;
          /** A Phantombuster v2 timestamp in milliseconds. */
          createdAt?: number;
          /** Organization name owning the agent script. */
          scriptOrgName?: string | null;
          /** Script ID used by the agent. */
          scriptId?: string | null;
          /** Script filename used by the agent. */
          script?: string | null;
          /** Script branch used by the agent. */
          branch?: string | null;
          /** Script branch environment used by the agent. */
          environment?: string | null;
          /** Default argument stored on the agent. */
          argument?: string | null;
          /** End type of the latest completed container. */
          lastEndType?: string | null;
          /** Timestamp when the latest container ended. */
          lastEndedAt?: number | null;
          /** Exit code of the latest completed container. */
          lastExitCode?: number | null;
          /** Number of currently running containers for the agent. */
          nbContainersRunning?: number;
          /** Current running time for the agent. */
          runningTime?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List containers associated with a Phantombuster agent. */
    "phantombuster.list_containers": {
      input: {
        /**
         * ID of the agent whose containers should be listed.
         * @minLength 1
         */
        agentId: string;
      };
      output: {
        /** Containers returned by Phantombuster. */
        containers: Array<{
          /**
           * The Phantombuster record ID.
           * @minLength 1
           */
          id: string;
          /** Current container status. */
          status?: string;
          /** A Phantombuster v2 timestamp in milliseconds. */
          createdAt?: number;
          /** How the container was launched. */
          launchType?: string;
          /** How the container ended. */
          endType?: string;
          /** A Phantombuster v2 timestamp in milliseconds. */
          endedAt?: number;
          /** Container process exit code. */
          exitCode?: number | null;
          /** Retry number for the container. */
          retryNumber?: number;
          [key: string]: unknown;
        }>;
        /** Whether Phantombuster reached the response size limit. */
        maxLimitReached?: boolean;
      };
    };
    /** Stop a Phantombuster agent. */
    "phantombuster.stop_agent": {
      input: {
        /**
         * ID of the agent to stop.
         * @minLength 1
         */
        id: string;
        /** Whether to try a soft abort. */
        softAbort?: boolean;
        /** Whether to recursively stop slave agents. */
        cascadeToAllSlaves?: boolean;
        /** Whether to disable the next scheduled launch-soon run. */
        dontLaunchSoon?: boolean;
        /** Whether to switch the agent to manual launch. */
        switchToManualLaunch?: boolean;
      };
      output: {
        /** Raw JSON result returned by Phantombuster for the request. */
        stop: Record<string, unknown>;
      };
    };
  }
}
