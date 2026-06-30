import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a deployment for a Raygun application. */
    "raygun.create_deployment": {
      input: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
        /**
         * Deployment version.
         * @minLength 1
         * @maxLength 128
         */
        version: string;
        /**
         * Deployment owner name.
         * @maxLength 128
         */
        ownerName?: string;
        /**
         * Deployment owner email address.
         * @maxLength 128
         * @format email
         */
        emailAddress?: string;
        /** Deployment comment. */
        comment?: string;
        /**
         * Source control identifier for the deployment.
         * @maxLength 256
         */
        scmIdentifier?: string;
        /** Source control system type. */
        scmType?: "gitHub" | "gitLab" | "azureDevOps" | "bitbucket";
        /**
         * Deployment timestamp.
         * @format date-time
         */
        deployedAt?: string;
      };
      output: {
        /** The raw Raygun API object for advanced fields. */
        deployment: Record<string, unknown>;
      };
    };
    /** Delete a Raygun deployment. */
    "raygun.delete_deployment": {
      input: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
        /**
         * Raygun deployment identifier.
         * @minLength 1
         */
        deploymentIdentifier: string;
      };
      output: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
        /**
         * Raygun deployment identifier.
         * @minLength 1
         */
        deploymentIdentifier: string;
        /** Whether the deployment delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Retrieve a Raygun application by identifier. */
    "raygun.get_application": {
      input: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
      };
      output: {
        /** The raw Raygun API object for advanced fields. */
        application: Record<string, unknown>;
      };
    };
    /** Retrieve a Raygun deployment by identifier. */
    "raygun.get_deployment": {
      input: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
        /**
         * Raygun deployment identifier.
         * @minLength 1
         */
        deploymentIdentifier: string;
      };
      output: {
        /** The raw Raygun API object for advanced fields. */
        deployment: Record<string, unknown>;
      };
    };
    /** Retrieve a Raygun error group by identifier. */
    "raygun.get_error_group": {
      input: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
        /**
         * Raygun error group identifier.
         * @minLength 1
         */
        errorGroupIdentifier: string;
      };
      output: {
        /** The raw Raygun API object for advanced fields. */
        errorGroup: Record<string, unknown>;
      };
    };
    /** Retrieve the latest deployment for a Raygun application. */
    "raygun.get_latest_deployment": {
      input: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
      };
      output: {
        /** The raw Raygun API object for advanced fields. */
        deployment: Record<string, unknown>;
      };
    };
    /** List Raygun applications available to the personal access token. */
    "raygun.list_applications": {
      input: {
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        count?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         * @maximum 2147483647
         */
        offset?: number;
        /**
         * Fields and optional directions accepted by the Raygun endpoint.
         * @minItems 1
         */
        orderBy?: Array<string>;
      };
      output: {
        /** Raygun applications returned by the API. */
        applications: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Raygun list responses. */
        pagination: {
          /** Total number of items available when Raygun returns the header. */
          totalCount?: number;
          /** Number of items in the current response. */
          count: number;
          /** Parsed Raygun Link header URLs by relation. */
          links?: Record<string, string>;
        };
      };
    };
    /** List deployments for a Raygun application. */
    "raygun.list_deployments": {
      input: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        count?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         * @maximum 2147483647
         */
        offset?: number;
        /**
         * Fields and optional directions accepted by the Raygun deployments endpoint.
         * @minItems 1
         */
        orderBy?: Array<string>;
      };
      output: {
        /** Raygun deployments returned by the API. */
        deployments: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Raygun list responses. */
        pagination: {
          /** Total number of items available when Raygun returns the header. */
          totalCount?: number;
          /** Number of items in the current response. */
          count: number;
          /** Parsed Raygun Link header URLs by relation. */
          links?: Record<string, string>;
        };
      };
    };
    /** List crash reporting error groups for a Raygun application. */
    "raygun.list_error_groups": {
      input: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 500
         */
        count?: number;
        /**
         * Number of items to skip before returning results.
         * @minimum 0
         * @maximum 2147483647
         */
        offset?: number;
        /**
         * Fields and optional directions accepted by the Raygun error groups endpoint.
         * @minItems 1
         */
        orderBy?: Array<string>;
      };
      output: {
        /** Raygun error groups returned by the API. */
        errorGroups: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Raygun list responses. */
        pagination: {
          /** Total number of items available when Raygun returns the header. */
          totalCount?: number;
          /** Number of items in the current response. */
          count: number;
          /** Parsed Raygun Link header URLs by relation. */
          links?: Record<string, string>;
        };
      };
    };
    /** Update a Raygun deployment. */
    "raygun.update_deployment": {
      input: {
        /**
         * Raygun application identifier.
         * @minLength 1
         */
        applicationIdentifier: string;
        /**
         * Raygun deployment identifier.
         * @minLength 1
         */
        deploymentIdentifier: string;
        /**
         * Deployment version.
         * @minLength 1
         * @maxLength 128
         */
        version?: string;
        /**
         * Deployment owner name.
         * @maxLength 128
         */
        ownerName?: string;
        /**
         * Deployment owner email address.
         * @maxLength 128
         * @format email
         */
        emailAddress?: string;
        /** Deployment comment. */
        comment?: string;
        /**
         * Source control identifier for the deployment.
         * @maxLength 256
         */
        scmIdentifier?: string;
        /** Source control system type. */
        scmType?: "gitHub" | "gitLab" | "azureDevOps" | "bitbucket";
        /**
         * Deployment timestamp.
         * @format date-time
         */
        deployedAt?: string;
      };
      output: {
        /** The raw Raygun API object for advanced fields. */
        deployment: Record<string, unknown>;
      };
    };
  }
}
