import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a short-lived kubeconfig for an Alibaba Cloud Container Service for Kubernetes (ACK) cluster. */
    "aliyun_ack.get_temporary_kubeconfig": {
      input: {
        /**
         * The ACK cluster ID.
         * @minLength 1
         */
        clusterId: string;
        /**
         * The Alibaba Cloud region ID that contains the cluster, for example cn-hangzhou.
         * @minLength 1
         * @pattern ^[a-z0-9]+(?:-[a-z0-9]+)*$
         */
        regionId: string;
        /**
         * The temporary kubeconfig validity period in minutes, from 15 minutes to 3 days.
         * @minimum 15
         * @maximum 4320
         */
        temporaryDurationMinutes: number;
        /**
         * Whether the kubeconfig should use the cluster's internal API server endpoint. Defaults to false for the public endpoint.
         * @default false
         */
        privateIpAddress?: boolean;
      };
      output: {
        /**
         * The kubeconfig YAML containing credentials for the connected Alibaba Cloud identity.
         * @minLength 1
         */
        config: string;
        /**
         * The RFC3339 UTC timestamp when the kubeconfig expires.
         * @format date-time
         */
        expiration: string;
      };
    };
  }
}
