import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details for one Sauce Labs build. */
    "saucelabs.get_build": {
      input: {
        /** The Sauce Labs device source for the build. */
        build_source: "vdc" | "rdc";
        /**
         * The Sauce Labs build identifier.
         * @minLength 1
         */
        build_id: string;
      };
      output: {
        /** A Sauce Labs build summary. */
        build: {
          /** The Sauce Labs build identifier. */
          id?: string;
          /** The build name. */
          name?: string | null;
          /** The aggregate build status. */
          status?: string | null;
          /** Job counts grouped by Sauce Labs build state. */
          jobs?: Record<string, unknown>;
          /** The Unix timestamp of the earliest job in the build. */
          start_time?: number | null;
          /** The Unix timestamp of the latest job in the build. */
          end_time?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get details for one Sauce Labs virtual-device job. */
    "saucelabs.get_job": {
      input: {
        /**
         * The Sauce Labs job identifier.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** A Sauce Labs virtual-device job. */
        job: {
          /** The Sauce Labs job identifier. */
          id?: string;
          /** The job name. */
          name?: string | null;
          /** The current job status. */
          status?: string | null;
          /** Whether the job passed. */
          passed?: boolean | null;
          /** The build name associated with the job. */
          build?: string | null;
          /** The browser used by the job. */
          browser?: string | null;
          /** The operating system used by the job. */
          os?: string | null;
          /** The Unix timestamp when the job started. */
          start_time?: number | null;
          /** The Unix timestamp when the job ended. */
          end_time?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** List jobs associated with one Sauce Labs build. */
    "saucelabs.list_build_jobs": {
      input: {
        /** The Sauce Labs device source for the build. */
        build_source: "vdc" | "rdc";
        /**
         * The Sauce Labs build identifier.
         * @minLength 1
         */
        build_id: string;
        /** Return jobs modified after this Unix timestamp. */
        modified_since?: number;
        /** Filter by whether jobs ran uninterrupted to completion. */
        completed?: boolean;
        /** Filter by whether jobs are in the errored state. */
        errored?: boolean;
        /** Filter by whether jobs are in the failed state. */
        failed?: boolean;
        /** Filter by whether jobs are no longer running. */
        finished?: boolean;
        /** Filter by whether jobs are in the new state. */
        new?: boolean;
        /** Filter by whether jobs are in the passed state. */
        passed?: boolean;
        /** Filter by whether jobs ran on public devices. */
        public?: boolean;
        /** Filter by whether jobs are in the queued state. */
        queued?: boolean;
        /** Filter by whether jobs are in the running state. */
        running?: boolean;
        /** Filter by whether jobs are errored or failed. */
        faulty?: boolean;
      };
      output: {
        /** The jobs associated with the build. */
        jobs: Array<{
          /** The Sauce Labs job identifier. */
          id?: string;
          /** Boolean job states reported by the Sauce Labs Builds API. */
          state?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Sauce Labs builds for virtual or real devices with optional filters. */
    "saucelabs.list_builds": {
      input: {
        /** The Sauce Labs device source for the build. */
        build_source: "vdc" | "rdc";
        /** The build statuses to include. */
        status?: Array<"running" | "error" | "failed" | "complete" | "success">;
        /** Return builds whose earliest job ran on or after this Unix timestamp. */
        start?: number;
        /** Return builds whose latest job ran on or before this Unix timestamp. */
        end?: number;
        /**
         * The maximum number of builds to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of matching builds to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Return builds with this name.
         * @minLength 1
         */
        name?: string;
        /** The build name sort direction. */
        sort?: "asc" | "desc";
      };
      output: {
        /** The matching Sauce Labs builds. */
        builds: Array<{
          /** The Sauce Labs build identifier. */
          id?: string;
          /** The build name. */
          name?: string | null;
          /** The aggregate build status. */
          status?: string | null;
          /** Job counts grouped by Sauce Labs build state. */
          jobs?: Record<string, unknown>;
          /** The Unix timestamp of the earliest job in the build. */
          start_time?: number | null;
          /** The Unix timestamp of the latest job in the build. */
          end_time?: number | null;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Sauce Labs. */
        meta?: Record<string, unknown>;
      };
    };
    /** List the asset file names available for a Sauce Labs virtual-device job. */
    "saucelabs.list_job_assets": {
      input: {
        /**
         * The Sauce Labs job identifier.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** Asset aliases and file names returned by Sauce Labs. */
        assets: Record<string, unknown>;
      };
    };
    /** List recent Sauce Labs virtual-device jobs for the connected username. */
    "saucelabs.list_jobs": {
      input: {
        /**
         * The maximum number of jobs to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The number of matching jobs to skip.
         * @minimum 0
         */
        skip?: number;
        /** Return jobs started on or after this Unix timestamp. */
        from?: number;
        /** Return jobs started on or before this Unix timestamp. */
        to?: number;
      };
      output: {
        /** The matching Sauce Labs jobs. */
        jobs: Array<{
          /** The Sauce Labs job identifier. */
          id?: string;
          /** The job name. */
          name?: string | null;
          /** The current job status. */
          status?: string | null;
          /** Whether the job passed. */
          passed?: boolean | null;
          /** The build name associated with the job. */
          build?: string | null;
          /** The browser used by the job. */
          browser?: string | null;
          /** The operating system used by the job. */
          os?: string | null;
          /** The Unix timestamp when the job started. */
          start_time?: number | null;
          /** The Unix timestamp when the job ended. */
          end_time?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update the name, tags, visibility, or pass status of a Sauce Labs virtual-device job. */
    "saucelabs.update_job": {
      input: {
        /**
         * The Sauce Labs job identifier.
         * @minLength 1
         */
        job_id: string;
        /**
         * The replacement job name.
         * @minLength 1
         */
        name?: string;
        /** The complete replacement set of job tags. */
        tags?: Array<string>;
        /** The replacement job visibility. */
        public?: "public" | "public restricted" | "share" | "team" | "private";
        /** Whether the job should be marked as passed. */
        passed?: boolean;
      };
      output: {
        /** A Sauce Labs virtual-device job. */
        job: {
          /** The Sauce Labs job identifier. */
          id?: string;
          /** The job name. */
          name?: string | null;
          /** The current job status. */
          status?: string | null;
          /** Whether the job passed. */
          passed?: boolean | null;
          /** The build name associated with the job. */
          build?: string | null;
          /** The browser used by the job. */
          browser?: string | null;
          /** The operating system used by the job. */
          os?: string | null;
          /** The Unix timestamp when the job started. */
          start_time?: number | null;
          /** The Unix timestamp when the job ended. */
          end_time?: number | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
