import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a recurring HTTP job in Cronlytic. */
    "cronlytic.create_job": {
      input: {
        /**
         * Job name containing only letters, digits, hyphens, and underscores.
         * @minLength 1
         * @maxLength 50
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        name: string;
        /**
         * HTTP or HTTPS URL called by Cronlytic.
         * @pattern ^https?://
         * @format uri
         */
        url: string;
        /** HTTP method used by the scheduled request. */
        method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
        /** Headers sent to the scheduled destination. */
        headers?: Record<string, string>;
        /** Request body sent verbatim to the destination; may be empty. */
        body?: string;
        /**
         * Standard five-field cron expression: minute hour day month weekday.
         * @minLength 1
         */
        cron_expression: string;
      };
      output: {
        /** Cronlytic job ID. */
        job_id?: string;
        /** Owner user ID. */
        user_id?: string;
        /** Job name. */
        name?: string;
        /** Scheduled destination URL. */
        url?: string;
        /** Scheduled HTTP method. */
        method?: string;
        /** Scheduled request headers. */
        headers?: Record<string, string>;
        /** Scheduled request body. */
        body?: string;
        /** Five-field cron expression. */
        cron_expression?: string;
        /** Current job status, including pending, paused, success, failed, or quota_reached. */
        status?: string;
        /** Last execution timestamp, or null if never executed. */
        last_run_at?: string | null;
        /** Next scheduled execution timestamp, or null. */
        next_run_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a Cronlytic job and all its execution logs. */
    "cronlytic.delete_job": {
      input: {
        /**
         * Cronlytic job ID.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** Whether the job was deleted. */
        deleted?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get a Cronlytic job and its current schedule. */
    "cronlytic.get_job": {
      input: {
        /**
         * Cronlytic job ID.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** Cronlytic job ID. */
        job_id?: string;
        /** Owner user ID. */
        user_id?: string;
        /** Job name. */
        name?: string;
        /** Scheduled destination URL. */
        url?: string;
        /** Scheduled HTTP method. */
        method?: string;
        /** Scheduled request headers. */
        headers?: Record<string, string>;
        /** Scheduled request body. */
        body?: string;
        /** Five-field cron expression. */
        cron_expression?: string;
        /** Current job status, including pending, paused, success, failed, or quota_reached. */
        status?: string;
        /** Last execution timestamp, or null if never executed. */
        last_run_at?: string | null;
        /** Next scheduled execution timestamp, or null. */
        next_run_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get the latest 50 execution logs for a Cronlytic job, newest first. */
    "cronlytic.get_job_logs": {
      input: {
        /**
         * Cronlytic job ID.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** Cronlytic job ID. */
        job_id?: string;
        /** Up to 50 execution logs, newest first. */
        logs?: Array<{
          /** Execution timestamp. */
          timestamp?: string;
          /** Execution status. */
          status?: string;
          /** Destination HTTP response status, or null when unavailable. */
          response_code?: number | null;
          /** Request duration in seconds. */
          response_time?: number;
          /** Execution error message, or an empty string. */
          error_message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List all Cronlytic jobs for the connected user. */
    "cronlytic.list_jobs": {
      input: Record<string, never>;
      output: {
        /** Cronlytic jobs. */
        jobs: Array<{
          /** Cronlytic job ID. */
          job_id?: string;
          /** Owner user ID. */
          user_id?: string;
          /** Job name. */
          name?: string;
          /** Scheduled destination URL. */
          url?: string;
          /** Scheduled HTTP method. */
          method?: string;
          /** Scheduled request headers. */
          headers?: Record<string, string>;
          /** Scheduled request body. */
          body?: string;
          /** Five-field cron expression. */
          cron_expression?: string;
          /** Current job status, including pending, paused, success, failed, or quota_reached. */
          status?: string;
          /** Last execution timestamp, or null if never executed. */
          last_run_at?: string | null;
          /** Next scheduled execution timestamp, or null. */
          next_run_at?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Pause a Cronlytic job to stop scheduled executions while retaining its configuration. */
    "cronlytic.pause_job": {
      input: {
        /**
         * Cronlytic job ID.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** Cronlytic job ID. */
        job_id?: string;
        /** Owner user ID. */
        user_id?: string;
        /** Job name. */
        name?: string;
        /** Scheduled destination URL. */
        url?: string;
        /** Scheduled HTTP method. */
        method?: string;
        /** Scheduled request headers. */
        headers?: Record<string, string>;
        /** Scheduled request body. */
        body?: string;
        /** Five-field cron expression. */
        cron_expression?: string;
        /** Current job status, including pending, paused, success, failed, or quota_reached. */
        status?: string;
        /** Last execution timestamp, or null if never executed. */
        last_run_at?: string | null;
        /** Next scheduled execution timestamp, or null. */
        next_run_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Resume a paused Cronlytic job according to its cron expression. */
    "cronlytic.resume_job": {
      input: {
        /**
         * Cronlytic job ID.
         * @minLength 1
         */
        job_id: string;
      };
      output: {
        /** Cronlytic job ID. */
        job_id?: string;
        /** Owner user ID. */
        user_id?: string;
        /** Job name. */
        name?: string;
        /** Scheduled destination URL. */
        url?: string;
        /** Scheduled HTTP method. */
        method?: string;
        /** Scheduled request headers. */
        headers?: Record<string, string>;
        /** Scheduled request body. */
        body?: string;
        /** Five-field cron expression. */
        cron_expression?: string;
        /** Current job status, including pending, paused, success, failed, or quota_reached. */
        status?: string;
        /** Last execution timestamp, or null if never executed. */
        last_run_at?: string | null;
        /** Next scheduled execution timestamp, or null. */
        next_run_at?: string | null;
        [key: string]: unknown;
      };
    };
    /** Update a Cronlytic job using its complete configuration; provide all six job fields. */
    "cronlytic.update_job": {
      input: {
        /**
         * Cronlytic job ID.
         * @minLength 1
         */
        job_id: string;
        /**
         * Job name containing only letters, digits, hyphens, and underscores.
         * @minLength 1
         * @maxLength 50
         * @pattern ^[a-zA-Z0-9_-]+$
         */
        name: string;
        /**
         * HTTP or HTTPS URL called by Cronlytic.
         * @pattern ^https?://
         * @format uri
         */
        url: string;
        /** HTTP method used by the scheduled request. */
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
        /** Headers sent to the scheduled destination. */
        headers: Record<string, string>;
        /** Request body sent verbatim to the destination; may be empty. */
        body: string;
        /**
         * Standard five-field cron expression: minute hour day month weekday.
         * @minLength 1
         */
        cron_expression: string;
      };
      output: {
        /** Cronlytic job ID. */
        job_id?: string;
        /** Owner user ID. */
        user_id?: string;
        /** Job name. */
        name?: string;
        /** Scheduled destination URL. */
        url?: string;
        /** Scheduled HTTP method. */
        method?: string;
        /** Scheduled request headers. */
        headers?: Record<string, string>;
        /** Scheduled request body. */
        body?: string;
        /** Five-field cron expression. */
        cron_expression?: string;
        /** Current job status, including pending, paused, success, failed, or quota_reached. */
        status?: string;
        /** Last execution timestamp, or null if never executed. */
        last_run_at?: string | null;
        /** Next scheduled execution timestamp, or null. */
        next_run_at?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
