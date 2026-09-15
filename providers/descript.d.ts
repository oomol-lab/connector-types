import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a running Descript job. */
    "descript.cancel_job": {
      input: {
        /**
         * The running job UUID.
         * @format uuid
         */
        jobId: string;
      };
      output: {
        /** Whether the cancellation request succeeded. */
        cancelled: boolean;
      };
    };
    /** Get the current state and type-specific result of a Descript job. */
    "descript.get_job": {
      input: {
        /**
         * The job UUID.
         * @format uuid
         */
        jobId: string;
      };
      output: {
        /** The normalized job status. */
        status: "queued" | "running" | "succeeded" | "failed" | "cancelled";
        /** A Descript asynchronous job. */
        job: {
          /**
           * The job identifier.
           * @format uuid
           */
          job_id?: string;
          /** The Descript job type. */
          job_type?: string;
          /** The upstream job state. */
          job_state?: string;
          /** The type-specific job result. */
          result?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get a Descript project with its media, compositions, and published links. */
    "descript.get_project": {
      input: {
        /**
         * The project UUID.
         * @format uuid
         */
        projectId: string;
      };
      output: {
        /** The project and its contents. */
        project: Record<string, unknown>;
      };
    };
    /** Import URL-hosted media into a new or existing Descript project asynchronously. */
    "descript.import_media": {
      input: {
        /**
         * The existing project UUID to receive the media.
         * @format uuid
         */
        projectId?: string;
        /** The name of a new project to create. */
        projectName?: string;
        /** The Drive member access for a newly created project. */
        teamAccess?: "edit" | "comment" | "view" | "none";
        /** The nested folder path for a newly created project. */
        folderName?: string;
        /**
         * The URL-hosted media files to import.
         * @minItems 1
         */
        media: Array<{
          /**
           * The display name or folder path used inside the project.
           * @minLength 1
           */
          name: string;
          /**
           * A public or pre-signed URL that supports HTTP Range requests.
           * @format uri
           */
          url: string;
        }>;
        /** Optional Descript composition definitions referencing media names. */
        compositions?: Array<Record<string, unknown>>;
        /**
         * A webhook URL that Descript should call when the job stops.
         * @format uri
         */
        callbackUrl?: string;
      };
      output: {
        /**
         * The job identifier used to monitor completion.
         * @format uuid
         */
        jobId?: string;
        /**
         * The project created or modified by the job.
         * @format uuid
         */
        projectId?: string;
        /**
         * The URL for opening the project in Descript.
         * @format uri
         */
        projectUrl?: string;
        /** The complete response payload returned by Descript. */
        raw?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the current Descript Underlord models and stable aliases. */
    "descript.list_agent_models": {
      input: Record<string, never>;
      output: {
        /** The currently available models. */
        availableModels: Array<Record<string, unknown>>;
        /** Stable aliases and their current targets. */
        aliases: Array<Record<string, unknown>>;
        /** The complete response payload returned by Descript. */
        raw: Record<string, unknown>;
      };
    };
    /** List recent Descript jobs with optional project, type, time, and pagination filters. */
    "descript.list_jobs": {
      input: {
        /**
         * Only include jobs for this project UUID.
         * @format uuid
         */
        projectId?: string;
        /** Only include this job type. */
        type?: "import/project_media" | "agent";
        /** A pagination cursor from a previous response. */
        cursor?: string;
        /**
         * The maximum number of jobs to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Only include jobs created after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Only include jobs created before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
      };
      output: {
        /** The jobs in this page. */
        jobs: Array<{
          /**
           * The job identifier.
           * @format uuid
           */
          job_id?: string;
          /** The Descript job type. */
          job_type?: string;
          /** The upstream job state. */
          job_state?: string;
          /** The type-specific job result. */
          result?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Pagination metadata returned by Descript. */
        pagination: {
          /** The cursor for the next page, or null at the end. */
          next_cursor?: string | null;
          [key: string]: unknown;
        };
        /** The complete response payload returned by Descript. */
        raw: Record<string, unknown>;
      };
    };
    /** List projects accessible to the Drive associated with the Descript API token. */
    "descript.list_projects": {
      input: {
        /** A case-insensitive substring to match against project names. */
        name?: string;
        /** The exact folder path whose direct projects should be returned. */
        folderPath?: string;
        /** A creator UUID or me for the authenticated user. */
        createdBy?: string;
        /**
         * Only include projects created after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Only include projects created before this ISO 8601 timestamp.
         * @format date-time
         */
        createdBefore?: string;
        /**
         * Only include projects updated after this ISO 8601 timestamp.
         * @format date-time
         */
        updatedAfter?: string;
        /**
         * Only include projects updated before this ISO 8601 timestamp.
         * @format date-time
         */
        updatedBefore?: string;
        /** The project field used for sorting. */
        sort?: "name" | "created_at" | "updated_at" | "last_viewed_at";
        /** The sort direction. */
        direction?: "asc" | "desc";
        /** A pagination cursor from a previous response. */
        cursor?: string;
        /**
         * The maximum number of projects to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The projects in this page. */
        projects: Array<Record<string, unknown>>;
        /** Pagination metadata returned by Descript. */
        pagination: {
          /** The cursor for the next page, or null at the end. */
          next_cursor?: string | null;
          [key: string]: unknown;
        };
        /** The complete response payload returned by Descript. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit an asynchronous Underlord request to create or edit a Descript project. */
    "descript.prompt_agent": {
      input: {
        /**
         * The existing project UUID to edit.
         * @format uuid
         */
        projectId?: string;
        /** The name of a new project to create. */
        projectName?: string;
        /** A composition UUID, short ID, or Descript project URL to target. */
        compositionId?: string;
        /** A model ID or stable alias returned by list_agent_models. */
        model?: string;
        /**
         * The complete natural-language editing instruction.
         * @minLength 1
         */
        prompt: string;
        /** The Drive member access for a newly created project. */
        teamAccess?: "edit" | "comment" | "view" | "none";
        /**
         * A webhook URL that Descript should call when the job stops.
         * @format uri
         */
        callbackUrl?: string;
      };
      output: {
        /**
         * The job identifier used to monitor completion.
         * @format uuid
         */
        jobId?: string;
        /**
         * The project created or modified by the job.
         * @format uuid
         */
        projectId?: string;
        /**
         * The URL for opening the project in Descript.
         * @format uri
         */
        projectUrl?: string;
        /** The complete response payload returned by Descript. */
        raw?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Publish or republish a Descript composition and produce share and download URLs asynchronously. */
    "descript.publish_project": {
      input: {
        /**
         * The project UUID to publish.
         * @format uuid
         */
        projectId: string;
        /** The composition UUID, short ID, or Descript project URL to publish. */
        compositionId?: string;
        /** The output media type. */
        mediaType?: "Video" | "Audio";
        /** The video resolution. */
        resolution?: "480p" | "720p" | "1080p" | "1440p" | "4K";
        /** The desired share-page access level. */
        accessLevel?: "public" | "unlisted" | "drive" | "private";
        /**
         * A webhook URL that Descript should call when the job stops.
         * @format uri
         */
        callbackUrl?: string;
      };
      output: {
        /**
         * The job identifier used to monitor completion.
         * @format uuid
         */
        jobId?: string;
        /**
         * The project created or modified by the job.
         * @format uuid
         */
        projectId?: string;
        /**
         * The URL for opening the project in Descript.
         * @format uri
         */
        projectUrl?: string;
        /** The complete response payload returned by Descript. */
        raw?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
