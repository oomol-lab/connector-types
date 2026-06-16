import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete a Runpod Pod. */
    "runpod.delete_pod": {
      input: {
        /**
         * The Runpod Pod ID.
         * @minLength 1
         */
        podId: string;
      };
      output: {
        /** The Pod ID targeted by the lifecycle request. */
        podId: string;
        /** The lifecycle operation that was requested. */
        action: "delete";
        /** Whether the lifecycle request completed successfully. */
        success: boolean;
      };
    };
    /** Get one Runpod Pod by ID. */
    "runpod.get_pod": {
      input: {
        /**
         * The Runpod Pod ID.
         * @minLength 1
         */
        podId: string;
        /** Whether to include machine details for each returned Pod. */
        includeMachine?: boolean;
        /** Whether to include attached network volume details for each returned Pod. */
        includeNetworkVolume?: boolean;
        /** Whether to include savings plan details applied to each returned Pod. */
        includeSavingsPlans?: boolean;
        /** Whether to include template details for each returned Pod. */
        includeTemplate?: boolean;
        /** Whether to include Pods that are serving as Serverless workers. */
        includeWorkers?: boolean;
      };
      output: {
        /** The requested Runpod Pod. */
        pod: {
          /** The Runpod Pod ID. */
          id: string;
          /** The Pod name. */
          name?: string;
          /** The desired Pod status such as RUNNING, EXITED, or TERMINATED. */
          desiredStatus?: string;
          /** The image tag used by the Pod. */
          image?: string;
          /** The backing machine ID. */
          machineId?: string;
          /** The attached Serverless endpoint ID when present. */
          endpointId?: string;
          /** The template ID used to create the Pod. */
          templateId?: string;
          /** The Pod public IPv4 address when available. */
          publicIp?: string;
          /** The Pod hourly cost before savings plans. */
          costPerHr?: number;
          /** The Pod hourly cost after active savings plans are applied. */
          adjustedCostPerHr?: number;
          /** Whether the Pod is interruptible rather than reserved. */
          interruptible?: boolean;
          /** Whether the Pod is locked against stop or reset. */
          locked?: boolean;
          /** The UTC timestamp when the Pod was last started. */
          lastStartedAt?: string;
          /** The last Pod lifecycle status message. */
          lastStatusChange?: string;
          /** The Runpod CPU flavor ID for CPU Pods. */
          cpuFlavorId?: string;
          /** The number of vCPUs assigned to the Pod. */
          vcpuCount?: number;
          /** The amount of memory assigned to the Pod in GB. */
          memoryInGb?: number;
          /** The container disk size assigned to the Pod in GB. */
          containerDiskInGb?: number;
          /** The Pod volume size assigned in GB. */
          volumeInGb?: number;
          /** The filesystem mount path for the Pod or attached network volume. */
          volumeMountPath?: string;
          /** The exposed Pod ports. */
          ports?: Array<string>;
          /** A map from internal Pod ports to public ports. */
          portMappings?: Record<string, number>;
          /** The environment variables configured on the Pod. */
          env?: Record<string, string>;
          /** The GPU summary for the Pod when present. */
          gpu?: {
            /** The Runpod GPU type ID. */
            id?: string;
            /** The number of GPUs attached to the Pod. */
            count?: number;
            /** The GPU display name. */
            displayName?: string;
            /** The Secure Cloud hourly GPU price. */
            securePrice?: number;
            /** The Community Cloud hourly GPU price. */
            communityPrice?: number;
            [key: string]: unknown;
          };
          /** Machine details for the Pod when included. */
          machine?: {
            /** The GPU type ID for the backing machine. */
            gpuTypeId?: string;
            /** The CPU type ID for the backing machine. */
            cpuTypeId?: string;
            /** The CPU core count on the backing machine. */
            cpuCount?: number;
            /** The Runpod data center ID for the machine. */
            dataCenterId?: string;
            /** The region or location string for the machine. */
            location?: string;
            /** The GPU display name for the machine. */
            gpuDisplayName?: string;
            /** The number of free GPUs currently available on the machine. */
            gpuAvailable?: number;
            /** Whether the machine supports allocating a public IP. */
            supportPublicIp?: boolean;
            [key: string]: unknown;
          };
          /** The attached network volume when includeNetworkVolume is enabled. */
          networkVolume?: {
            /** The network volume ID. */
            id?: string;
            /** The network volume name. */
            name?: string;
            /** The network volume size in GB. */
            size?: number;
            /** The Runpod data center ID for the volume. */
            dataCenterId?: string;
            [key: string]: unknown;
          };
          /** Savings plans applied to the Pod when includeSavingsPlans is enabled. */
          savingsPlans?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List Runpod Pods with optional official filter parameters. */
    "runpod.list_pods": {
      input: {
        /** Filter to GPU Pods or CPU Pods only. */
        computeType?: "GPU" | "CPU";
        /**
         * Filter to CPU Pods with any of the provided Runpod CPU flavor IDs.
         * @minItems 1
         */
        cpuFlavorId?: Array<string>;
        /**
         * Filter to Pods located in any of the provided Runpod data centers.
         * @minItems 1
         */
        dataCenterId?: Array<string>;
        /** Filter to Pods in the provided desired status. */
        desiredStatus?: "RUNNING" | "EXITED" | "TERMINATED";
        /**
         * Filter to Pods attached to the provided Runpod Serverless endpoint.
         * @minLength 1
         */
        endpointId?: string;
        /**
         * Filter to GPU Pods with any of the provided Runpod GPU type IDs.
         * @minItems 1
         */
        gpuTypeId?: Array<string>;
        /**
         * Filter to a specific Pod by ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Filter to Pods created from the provided image name.
         * @minLength 1
         */
        imageName?: string;
        /** Whether to include machine details for each returned Pod. */
        includeMachine?: boolean;
        /** Whether to include attached network volume details for each returned Pod. */
        includeNetworkVolume?: boolean;
        /** Whether to include savings plan details applied to each returned Pod. */
        includeSavingsPlans?: boolean;
        /** Whether to include template details for each returned Pod. */
        includeTemplate?: boolean;
        /** Whether to include Pods that are serving as Serverless workers. */
        includeWorkers?: boolean;
        /**
         * Filter to Pods with the provided name.
         * @minLength 1
         */
        name?: string;
        /**
         * Filter to Pods with the provided attached network volume ID.
         * @minLength 1
         */
        networkVolumeId?: string;
        /**
         * Filter to Pods created from the provided template ID.
         * @minLength 1
         */
        templateId?: string;
      };
      output: {
        /** The Pods returned by Runpod. */
        pods: Array<{
          /** The Runpod Pod ID. */
          id: string;
          /** The Pod name. */
          name?: string;
          /** The desired Pod status such as RUNNING, EXITED, or TERMINATED. */
          desiredStatus?: string;
          /** The image tag used by the Pod. */
          image?: string;
          /** The backing machine ID. */
          machineId?: string;
          /** The attached Serverless endpoint ID when present. */
          endpointId?: string;
          /** The template ID used to create the Pod. */
          templateId?: string;
          /** The Pod public IPv4 address when available. */
          publicIp?: string;
          /** The Pod hourly cost before savings plans. */
          costPerHr?: number;
          /** The Pod hourly cost after active savings plans are applied. */
          adjustedCostPerHr?: number;
          /** Whether the Pod is interruptible rather than reserved. */
          interruptible?: boolean;
          /** Whether the Pod is locked against stop or reset. */
          locked?: boolean;
          /** The UTC timestamp when the Pod was last started. */
          lastStartedAt?: string;
          /** The last Pod lifecycle status message. */
          lastStatusChange?: string;
          /** The Runpod CPU flavor ID for CPU Pods. */
          cpuFlavorId?: string;
          /** The number of vCPUs assigned to the Pod. */
          vcpuCount?: number;
          /** The amount of memory assigned to the Pod in GB. */
          memoryInGb?: number;
          /** The container disk size assigned to the Pod in GB. */
          containerDiskInGb?: number;
          /** The Pod volume size assigned in GB. */
          volumeInGb?: number;
          /** The filesystem mount path for the Pod or attached network volume. */
          volumeMountPath?: string;
          /** The exposed Pod ports. */
          ports?: Array<string>;
          /** A map from internal Pod ports to public ports. */
          portMappings?: Record<string, number>;
          /** The environment variables configured on the Pod. */
          env?: Record<string, string>;
          /** The GPU summary for the Pod when present. */
          gpu?: {
            /** The Runpod GPU type ID. */
            id?: string;
            /** The number of GPUs attached to the Pod. */
            count?: number;
            /** The GPU display name. */
            displayName?: string;
            /** The Secure Cloud hourly GPU price. */
            securePrice?: number;
            /** The Community Cloud hourly GPU price. */
            communityPrice?: number;
            [key: string]: unknown;
          };
          /** Machine details for the Pod when included. */
          machine?: {
            /** The GPU type ID for the backing machine. */
            gpuTypeId?: string;
            /** The CPU type ID for the backing machine. */
            cpuTypeId?: string;
            /** The CPU core count on the backing machine. */
            cpuCount?: number;
            /** The Runpod data center ID for the machine. */
            dataCenterId?: string;
            /** The region or location string for the machine. */
            location?: string;
            /** The GPU display name for the machine. */
            gpuDisplayName?: string;
            /** The number of free GPUs currently available on the machine. */
            gpuAvailable?: number;
            /** Whether the machine supports allocating a public IP. */
            supportPublicIp?: boolean;
            [key: string]: unknown;
          };
          /** The attached network volume when includeNetworkVolume is enabled. */
          networkVolume?: {
            /** The network volume ID. */
            id?: string;
            /** The network volume name. */
            name?: string;
            /** The network volume size in GB. */
            size?: number;
            /** The Runpod data center ID for the volume. */
            dataCenterId?: string;
            [key: string]: unknown;
          };
          /** Savings plans applied to the Pod when includeSavingsPlans is enabled. */
          savingsPlans?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Reset a Runpod Pod. */
    "runpod.reset_pod": {
      input: {
        /**
         * The Runpod Pod ID.
         * @minLength 1
         */
        podId: string;
      };
      output: {
        /** The Pod ID targeted by the lifecycle request. */
        podId: string;
        /** The lifecycle operation that was requested. */
        action: "reset";
        /** Whether the lifecycle request completed successfully. */
        success: boolean;
      };
    };
    /** Restart a Runpod Pod. */
    "runpod.restart_pod": {
      input: {
        /**
         * The Runpod Pod ID.
         * @minLength 1
         */
        podId: string;
      };
      output: {
        /** The Pod ID targeted by the lifecycle request. */
        podId: string;
        /** The lifecycle operation that was requested. */
        action: "restart";
        /** Whether the lifecycle request completed successfully. */
        success: boolean;
      };
    };
    /** Start or resume a Runpod Pod. */
    "runpod.start_pod": {
      input: {
        /**
         * The Runpod Pod ID.
         * @minLength 1
         */
        podId: string;
      };
      output: {
        /** The Pod ID targeted by the lifecycle request. */
        podId: string;
        /** The lifecycle operation that was requested. */
        action: "start";
        /** Whether the lifecycle request completed successfully. */
        success: boolean;
      };
    };
    /** Stop a Runpod Pod. */
    "runpod.stop_pod": {
      input: {
        /**
         * The Runpod Pod ID.
         * @minLength 1
         */
        podId: string;
      };
      output: {
        /** The Pod ID targeted by the lifecycle request. */
        podId: string;
        /** The lifecycle operation that was requested. */
        action: "stop";
        /** Whether the lifecycle request completed successfully. */
        success: boolean;
      };
    };
  }
}
