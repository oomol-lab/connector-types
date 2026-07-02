import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Agora Console project. */
    "agora.create_project": {
      input: {
        /**
         * The Agora Console project name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
        /** Whether to enable the primary App Certificate. */
        enableCertificate?: boolean;
      };
      output: {
        /** A normalized Agora Console project. */
        project: {
          /**
           * An Agora Console project ID.
           * @minLength 1
           */
          id: string;
          /** The Agora Console project name. */
          name: string | null;
          /** The Agora App ID for the project. */
          appId: string | null;
          /** The recording server IP address when returned by Agora. */
          recordingServer: string | null;
          /** The Agora project status, where 1 is enabled and 0 is disabled. */
          status: number | null;
          /** The Unix timestamp in seconds when the project was created. */
          created: number | null;
        };
      };
    };
    /** Retrieve one Agora Console project by project ID and name. */
    "agora.get_project": {
      input: {
        /**
         * An Agora Console project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Agora Console project name.
         * @minLength 1
         * @maxLength 255
         */
        name: string;
      };
      output: {
        /** A normalized Agora Console project. */
        project: {
          /**
           * An Agora Console project ID.
           * @minLength 1
           */
          id: string;
          /** The Agora Console project name. */
          name: string | null;
          /** The Agora App ID for the project. */
          appId: string | null;
          /** The recording server IP address when returned by Agora. */
          recordingServer: string | null;
          /** The Agora project status, where 1 is enabled and 0 is disabled. */
          status: number | null;
          /** The Unix timestamp in seconds when the project was created. */
          created: number | null;
        };
      };
    };
    /** Retrieve usage data for one Agora Console project and business type. */
    "agora.get_project_usage": {
      input: {
        /**
         * An Agora Console project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The inclusive usage start date in YYYY-MM-DD format.
         * @format date
         */
        fromDate: string;
        /**
         * The inclusive usage end date in YYYY-MM-DD format.
         * @format date
         */
        toDate: string;
        /** The Agora usage business type. */
        business: "default" | "transcodeDuration" | "recording" | "cloudRecording" | "miniapp";
      };
      output: {
        /** Agora usage metadata keyed by metric name. */
        meta: Record<string, unknown>;
        /** Usage records returned by Agora. */
        usages: Array<{
          /** The usage record date returned by Agora. */
          date: string | number;
          /** The usage values keyed by Agora metric name. */
          usage: Record<string, unknown>;
          /** The raw usage record returned by Agora. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Agora Console projects for the connected account. */
    "agora.list_projects": {
      input: Record<string, never>;
      output: {
        /** Projects returned by Agora. */
        projects: Array<{
          /**
           * An Agora Console project ID.
           * @minLength 1
           */
          id: string;
          /** The Agora Console project name. */
          name: string | null;
          /** The Agora App ID for the project. */
          appId: string | null;
          /** The recording server IP address when returned by Agora. */
          recordingServer: string | null;
          /** The Agora project status, where 1 is enabled and 0 is disabled. */
          status: number | null;
          /** The Unix timestamp in seconds when the project was created. */
          created: number | null;
        }>;
      };
    };
    /** Reset the primary App Certificate for an Agora Console project. */
    "agora.reset_primary_certificate": {
      input: {
        /**
         * An Agora Console project ID.
         * @minLength 1
         */
        projectId: string;
      };
      output: {
        /** A normalized Agora Console project. */
        project: {
          /**
           * An Agora Console project ID.
           * @minLength 1
           */
          id: string;
          /** The Agora Console project name. */
          name: string | null;
          /** The Agora App ID for the project. */
          appId: string | null;
          /** The recording server IP address when returned by Agora. */
          recordingServer: string | null;
          /** The Agora project status, where 1 is enabled and 0 is disabled. */
          status: number | null;
          /** The Unix timestamp in seconds when the project was created. */
          created: number | null;
        };
        /** The primary App Certificate returned by Agora. */
        certificate: string | null;
      };
    };
    /** Enable or disable the primary App Certificate for an Agora Console project. */
    "agora.set_primary_certificate": {
      input: {
        /**
         * An Agora Console project ID.
         * @minLength 1
         */
        projectId: string;
        /** Whether to enable the primary App Certificate. */
        enable: boolean;
      };
      output: {
        /** A normalized Agora Console project. */
        project: {
          /**
           * An Agora Console project ID.
           * @minLength 1
           */
          id: string;
          /** The Agora Console project name. */
          name: string | null;
          /** The Agora App ID for the project. */
          appId: string | null;
          /** The recording server IP address when returned by Agora. */
          recordingServer: string | null;
          /** The Agora project status, where 1 is enabled and 0 is disabled. */
          status: number | null;
          /** The Unix timestamp in seconds when the project was created. */
          created: number | null;
        };
        /** The primary App Certificate returned by Agora. */
        certificate: string | null;
      };
    };
    /** Enable or disable an Agora Console project. */
    "agora.update_project_status": {
      input: {
        /**
         * An Agora Console project ID.
         * @minLength 1
         */
        projectId: string;
        /**
         * The Agora project status, where 1 enables and 0 disables.
         * @minimum 0
         * @maximum 1
         */
        status: number;
      };
      output: {
        /** A normalized Agora Console project. */
        project: {
          /**
           * An Agora Console project ID.
           * @minLength 1
           */
          id: string;
          /** The Agora Console project name. */
          name: string | null;
          /** The Agora App ID for the project. */
          appId: string | null;
          /** The recording server IP address when returned by Agora. */
          recordingServer: string | null;
          /** The Agora project status, where 1 is enabled and 0 is disabled. */
          status: number | null;
          /** The Unix timestamp in seconds when the project was created. */
          created: number | null;
        };
      };
    };
  }
}
