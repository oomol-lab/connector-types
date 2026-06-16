import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one ParseHub project by project token from the API key's accessible project list. */
    "parsehub.get_project": {
      input: {
        /**
         * Project token to retrieve.
         * @minLength 1
         */
        projectToken: string;
      };
      output: {
        /** ParseHub project detail payload. */
        project: {
          /** Unique project token. */
          token: string;
          /** Project name when ParseHub returns it. */
          name?: string | null;
          /** Project title returned by ParseHub. */
          title?: string | null;
          /** Token of the most recent run when available. */
          lastRunToken?: string | null;
          /** Token of the most recent ready run when available. */
          lastReadyRunToken?: string | null;
          /** Stringified project options when available. */
          optionsJson?: string | null;
          /** Main template name when available. */
          mainTemplate?: string | null;
          /** Main site URL when available. */
          mainSite?: string | null;
          /** Raw project payload returned by ParseHub. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List ParseHub projects accessible to the API key with optional offset pagination. */
    "parsehub.list_projects": {
      input: {
        /**
         * Maximum number of projects to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Zero-based project offset for pagination.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Projects accessible to the API key. */
        projects: Array<{
          /** Unique project token. */
          token: string;
          /** Project name. */
          name: string;
          /** Summary of the most recent ParseHub run attached to a project. */
          lastRun?: {
            /** Unique token of the run when returned by ParseHub. */
            token?: string | null;
            /** Run status returned by ParseHub. */
            status?: string | null;
            /** URL to the JSON data of the run when available. */
            data?: string | null;
            /** Timestamp when the run was created. */
            dateCreated?: string | null;
            /** Timestamp when the run was last updated. */
            dateUpdated?: string | null;
            /** Raw last_run payload returned by ParseHub. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          } | null;
          /** Templates defined in the project. */
          templates?: Array<{
            /** Template name. */
            name: string;
            /** Unique template token. */
            templateToken: string;
            /** Raw template payload returned by ParseHub. */
            raw?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          /** Raw project payload returned by ParseHub. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /**
         * Total number of projects in the account.
         * @minimum 0
         */
        totalProjects: number;
        /**
         * Limit value echoed by ParseHub when available.
         * @minimum 0
         */
        limit: number | null;
        /**
         * Offset value echoed by ParseHub when available.
         * @minimum 0
         */
        offset: number | null;
      };
    };
  }
}
