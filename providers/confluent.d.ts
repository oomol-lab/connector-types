import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Confluent Cloud environment. */
    "confluent.create_environment": {
      input: {
        /**
         * The human-readable environment name.
         * @minLength 1
         */
        displayName: string;
        /** The Stream Governance package for the environment. */
        governancePackage?: "ESSENTIALS" | "ADVANCED";
      };
      output: {
        /** The Confluent resource object returned by the API. */
        environment: Record<string, unknown>;
      };
    };
    /** Delete a Confluent Cloud environment by ID. */
    "confluent.delete_environment": {
      input: {
        /**
         * The Confluent environment ID.
         * @minLength 1
         */
        environmentId: string;
      };
      output: {
        /** Whether Confluent accepted the deletion request. */
        deleted: boolean;
      };
    };
    /** Retrieve one Confluent Cloud environment by ID. */
    "confluent.get_environment": {
      input: {
        /**
         * The Confluent environment ID.
         * @minLength 1
         */
        environmentId: string;
      };
      output: {
        /** The Confluent resource object returned by the API. */
        environment: Record<string, unknown>;
      };
    };
    /** Retrieve one Kafka cluster in a Confluent Cloud environment. */
    "confluent.get_kafka_cluster": {
      input: {
        /**
         * The Confluent environment ID.
         * @minLength 1
         */
        environmentId: string;
        /**
         * The Confluent Kafka cluster ID.
         * @minLength 1
         */
        clusterId: string;
      };
      output: {
        /** The Confluent resource object returned by the API. */
        cluster: Record<string, unknown>;
      };
    };
    /** Retrieve one Confluent Cloud organization by ID. */
    "confluent.get_organization": {
      input: {
        /**
         * The Confluent organization ID.
         * @minLength 1
         */
        organizationId: string;
      };
      output: {
        /** The Confluent resource object returned by the API. */
        organization: Record<string, unknown>;
      };
    };
    /** List Confluent Cloud environments visible to the connected Cloud API key. */
    "confluent.list_environments": {
      input: {
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The opaque Confluent pagination token.
         * @minLength 1
         * @maxLength 255
         */
        pageToken?: string;
      };
      output: {
        /** The environments returned by Confluent. */
        environments: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Confluent. */
        pagination: {
          /** The first-page URL when returned. */
          first: string | null;
          /** The last-page URL when returned. */
          last: string | null;
          /** The previous-page URL when returned. */
          previous: string | null;
          /** The next-page URL when returned. */
          next: string | null;
          /** The opaque token for requesting the next page. */
          nextPageToken: string | null;
          /** The total number of resources when returned. */
          totalSize: number | null;
        };
      };
    };
    /** List Kafka clusters in a Confluent Cloud environment. */
    "confluent.list_kafka_clusters": {
      input: {
        /**
         * The Confluent environment ID.
         * @minLength 1
         */
        environmentId: string;
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The opaque Confluent pagination token.
         * @minLength 1
         * @maxLength 255
         */
        pageToken?: string;
      };
      output: {
        /** The clusters returned by Confluent. */
        clusters: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Confluent. */
        pagination: {
          /** The first-page URL when returned. */
          first: string | null;
          /** The last-page URL when returned. */
          last: string | null;
          /** The previous-page URL when returned. */
          previous: string | null;
          /** The next-page URL when returned. */
          next: string | null;
          /** The opaque token for requesting the next page. */
          nextPageToken: string | null;
          /** The total number of resources when returned. */
          totalSize: number | null;
        };
      };
    };
    /** List Confluent Cloud organizations visible to the connected Cloud API key. */
    "confluent.list_organizations": {
      input: {
        /**
         * The maximum number of resources to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The opaque Confluent pagination token.
         * @minLength 1
         * @maxLength 255
         */
        pageToken?: string;
      };
      output: {
        /** The organizations returned by Confluent. */
        organizations: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Confluent. */
        pagination: {
          /** The first-page URL when returned. */
          first: string | null;
          /** The last-page URL when returned. */
          last: string | null;
          /** The previous-page URL when returned. */
          previous: string | null;
          /** The next-page URL when returned. */
          next: string | null;
          /** The opaque token for requesting the next page. */
          nextPageToken: string | null;
          /** The total number of resources when returned. */
          totalSize: number | null;
        };
      };
    };
    /** Update the display name or Stream Governance package of an environment. */
    "confluent.update_environment": {
      input: {
        /**
         * The Confluent environment ID.
         * @minLength 1
         */
        environmentId: string;
        /**
         * The human-readable environment name.
         * @minLength 1
         */
        displayName?: string;
        /** The Stream Governance package for the environment. */
        governancePackage?: "ESSENTIALS" | "ADVANCED";
      };
      output: {
        /** The Confluent resource object returned by the API. */
        environment: Record<string, unknown>;
      };
    };
  }
}
