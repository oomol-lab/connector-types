import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the current status and details of a Mintlify deployment. */
    "mintlify.get_deployment_status": {
      input: {
        /** The status ID returned when a deployment was queued. */
        statusId: string;
      };
      output: {
        /** The current deployment state. */
        status: "queued" | "in_progress" | "success" | "failure";
        /** The deployment status ID. */
        _id?: string;
        /** The Mintlify project ID. */
        projectId?: string;
        /** The UTC timestamp when the deployment was created. */
        createdAt?: string;
        /** The UTC timestamp when the deployment ended. */
        endedAt?: string;
        /** A summary of the deployment status. */
        summary?: string;
        /** The deployment log messages. */
        logs?: Array<string>;
        /** The subdomain of the documentation site. */
        subdomain?: string;
        [key: string]: unknown;
      };
    };
    /** Queue a production deployment for a Mintlify documentation project. */
    "mintlify.trigger_deployment": {
      input: {
        /** The Mintlify project ID copied from the organization API keys page. */
        projectId: string;
      };
      output: {
        /** The status ID used to track the deployment. */
        statusId: string;
      };
    };
    /** Create or redeploy a Mintlify preview for a specific Git branch. */
    "mintlify.trigger_preview_deployment": {
      input: {
        /** The Mintlify project ID copied from the organization API keys page. */
        projectId: string;
        /**
         * The non-empty Git branch name to deploy as a preview.
         * @minLength 1
         */
        branch: string;
      };
      output: {
        /** The status ID used to track the preview deployment. */
        statusId: string;
        /**
         * The URL where the preview deployment is hosted.
         * @format uri
         */
        previewUrl: string;
      };
    };
  }
}
