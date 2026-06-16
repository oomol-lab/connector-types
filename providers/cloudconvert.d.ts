import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a CloudConvert task that is still waiting or processing. */
    "cloudconvert.cancel_task": {
      input: {
        /**
         * The CloudConvert task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** CloudConvert task returned by the connector. */
        task: {
          /** CloudConvert task ID. */
          id: string;
          /** Task operation such as `convert` or `export/url`. */
          operation: string;
          /** Task status reported by CloudConvert. */
          status: string;
          /** CloudConvert task message. */
          message?: string | null;
          /** CloudConvert task error code. */
          code?: string | null;
          /** Credits consumed by the task when available. */
          credits?: number | null;
          /** Timestamp when the task was created. */
          created_at: string;
          /** Timestamp when the task started processing. */
          started_at?: string | null;
          /** Timestamp when the task finished processing. */
          ended_at?: string | null;
          /** Original task ID if this task is a retry. */
          retry_of_task_id?: string | null;
          /** Task payload returned by CloudConvert. */
          payload?: unknown;
          /** Task result returned by CloudConvert. */
          result?: unknown;
          /** Dependency metadata for upstream tasks. */
          depends_on_tasks?: unknown;
          /** Retry task collection when requested. */
          retries?: unknown;
          /** Parent job object when requested. */
          job?: unknown;
          /** Links returned for the task. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Create a CloudConvert job that imports a remote file URL, converts it, and exports the result via `export/url`. */
    "cloudconvert.create_url_conversion_job": {
      input: {
        /**
         * Remote file URL that CloudConvert should import.
         * @format uri
         */
        sourceUrl: string;
        /**
         * Optional file name override used for the imported source.
         * @minLength 1
         */
        sourceFilename?: string;
        /** Optional HTTP headers CloudConvert should use when fetching the source URL. */
        sourceHeaders?: Record<string, string>;
        /**
         * Optional source file format override.
         * @minLength 1
         */
        inputFormat?: string;
        /**
         * Target output file format.
         * @minLength 1
         */
        outputFormat: string;
        /**
         * Optional CloudConvert engine name.
         * @minLength 1
         */
        engine?: string;
        /**
         * Optional CloudConvert engine version.
         * @minLength 1
         */
        engineVersion?: string;
        /** Additional `convert` task options forwarded to CloudConvert. */
        conversionOptions?: Record<string, unknown>;
        /**
         * Optional file name for the exported result.
         * @minLength 1
         */
        outputFilename?: string;
        /** Whether the exported file should be marked for inline display when possible. */
        inline?: boolean;
        /** Whether CloudConvert should archive multiple exported files when needed. */
        archiveMultipleFiles?: boolean;
        /**
         * Optional tag stored on the created job.
         * @minLength 1
         */
        jobTag?: string;
        /**
         * Optional webhook URL CloudConvert should call for job status updates.
         * @format uri
         */
        webhookUrl?: string;
      };
      output: {
        /** CloudConvert job returned by the connector. */
        job: {
          /** CloudConvert job ID. */
          id: string;
          /** Optional job tag. */
          tag?: string | null;
          /** Job status reported by CloudConvert. */
          status: string;
          /** Timestamp when the job was created. */
          created_at: string;
          /** Timestamp when the job started processing. */
          started_at?: string | null;
          /** Timestamp when the job finished processing. */
          ended_at?: string | null;
          /** Tasks attached to the CloudConvert job. */
          tasks?: Array<{
            /** CloudConvert task ID. */
            id: string;
            /** Task operation such as `convert` or `export/url`. */
            operation: string;
            /** Task status reported by CloudConvert. */
            status: string;
            /** CloudConvert task message. */
            message?: string | null;
            /** CloudConvert task error code. */
            code?: string | null;
            /** Credits consumed by the task when available. */
            credits?: number | null;
            /** Timestamp when the task was created. */
            created_at: string;
            /** Timestamp when the task started processing. */
            started_at?: string | null;
            /** Timestamp when the task finished processing. */
            ended_at?: string | null;
            /** Original task ID if this task is a retry. */
            retry_of_task_id?: string | null;
            /** Task payload returned by CloudConvert. */
            payload?: unknown;
            /** Task result returned by CloudConvert. */
            result?: unknown;
            /** Dependency metadata for upstream tasks. */
            depends_on_tasks?: unknown;
            /** Retry task collection when requested. */
            retries?: unknown;
            /** Parent job object when requested. */
            job?: unknown;
            /** Links returned for the task. */
            links?: {
              /**
               * Canonical CloudConvert API URL for this resource.
               * @format uri
               */
              self?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Links returned for the job. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Files extracted from completed `export/url` tasks. */
        files: Array<{
          /** Exported file name. */
          filename: string;
          /**
           * Download URL for the exported file.
           * @format uri
           */
          url: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a URL-based CloudConvert conversion job and wait synchronously until the job finishes. */
    "cloudconvert.create_url_conversion_job_and_wait": {
      input: {
        /**
         * Remote file URL that CloudConvert should import.
         * @format uri
         */
        sourceUrl: string;
        /**
         * Optional file name override used for the imported source.
         * @minLength 1
         */
        sourceFilename?: string;
        /** Optional HTTP headers CloudConvert should use when fetching the source URL. */
        sourceHeaders?: Record<string, string>;
        /**
         * Optional source file format override.
         * @minLength 1
         */
        inputFormat?: string;
        /**
         * Target output file format.
         * @minLength 1
         */
        outputFormat: string;
        /**
         * Optional CloudConvert engine name.
         * @minLength 1
         */
        engine?: string;
        /**
         * Optional CloudConvert engine version.
         * @minLength 1
         */
        engineVersion?: string;
        /** Additional `convert` task options forwarded to CloudConvert. */
        conversionOptions?: Record<string, unknown>;
        /**
         * Optional file name for the exported result.
         * @minLength 1
         */
        outputFilename?: string;
        /** Whether the exported file should be marked for inline display when possible. */
        inline?: boolean;
        /** Whether CloudConvert should archive multiple exported files when needed. */
        archiveMultipleFiles?: boolean;
        /**
         * Optional tag stored on the created job.
         * @minLength 1
         */
        jobTag?: string;
        /**
         * Optional webhook URL CloudConvert should call for job status updates.
         * @format uri
         */
        webhookUrl?: string;
      };
      output: {
        /** CloudConvert job returned by the connector. */
        job: {
          /** CloudConvert job ID. */
          id: string;
          /** Optional job tag. */
          tag?: string | null;
          /** Job status reported by CloudConvert. */
          status: string;
          /** Timestamp when the job was created. */
          created_at: string;
          /** Timestamp when the job started processing. */
          started_at?: string | null;
          /** Timestamp when the job finished processing. */
          ended_at?: string | null;
          /** Tasks attached to the CloudConvert job. */
          tasks?: Array<{
            /** CloudConvert task ID. */
            id: string;
            /** Task operation such as `convert` or `export/url`. */
            operation: string;
            /** Task status reported by CloudConvert. */
            status: string;
            /** CloudConvert task message. */
            message?: string | null;
            /** CloudConvert task error code. */
            code?: string | null;
            /** Credits consumed by the task when available. */
            credits?: number | null;
            /** Timestamp when the task was created. */
            created_at: string;
            /** Timestamp when the task started processing. */
            started_at?: string | null;
            /** Timestamp when the task finished processing. */
            ended_at?: string | null;
            /** Original task ID if this task is a retry. */
            retry_of_task_id?: string | null;
            /** Task payload returned by CloudConvert. */
            payload?: unknown;
            /** Task result returned by CloudConvert. */
            result?: unknown;
            /** Dependency metadata for upstream tasks. */
            depends_on_tasks?: unknown;
            /** Retry task collection when requested. */
            retries?: unknown;
            /** Parent job object when requested. */
            job?: unknown;
            /** Links returned for the task. */
            links?: {
              /**
               * Canonical CloudConvert API URL for this resource.
               * @format uri
               */
              self?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Links returned for the job. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Files extracted from completed `export/url` tasks. */
        files: Array<{
          /** Exported file name. */
          filename: string;
          /**
           * Download URL for the exported file.
           * @format uri
           */
          url: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete a CloudConvert job, including all tasks and related data. */
    "cloudconvert.delete_job": {
      input: {
        /**
         * The CloudConvert job ID.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /** Whether the resource deletion request succeeded. */
        deleted: boolean;
        /** Deleted CloudConvert resource ID. */
        id: string;
      };
    };
    /** Delete a CloudConvert task, including all related data. */
    "cloudconvert.delete_task": {
      input: {
        /**
         * The CloudConvert task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** Whether the resource deletion request succeeded. */
        deleted: boolean;
        /** Deleted CloudConvert resource ID. */
        id: string;
      };
    };
    /** Get the current CloudConvert user and remaining credits for the API token. */
    "cloudconvert.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Current CloudConvert user. */
        user: {
          /** CloudConvert user ID. */
          id: string | number;
          /** CloudConvert username when available. */
          username: string | null;
          /** CloudConvert email address. */
          email: string;
          /** Remaining conversion credits. */
          credits: number;
          /** Timestamp when the user was created. */
          created_at: string;
          /** Links returned for the CloudConvert user. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get a single CloudConvert job and include its tasks. */
    "cloudconvert.get_job": {
      input: {
        /**
         * The CloudConvert job ID.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /** CloudConvert job returned by the connector. */
        job: {
          /** CloudConvert job ID. */
          id: string;
          /** Optional job tag. */
          tag?: string | null;
          /** Job status reported by CloudConvert. */
          status: string;
          /** Timestamp when the job was created. */
          created_at: string;
          /** Timestamp when the job started processing. */
          started_at?: string | null;
          /** Timestamp when the job finished processing. */
          ended_at?: string | null;
          /** Tasks attached to the CloudConvert job. */
          tasks?: Array<{
            /** CloudConvert task ID. */
            id: string;
            /** Task operation such as `convert` or `export/url`. */
            operation: string;
            /** Task status reported by CloudConvert. */
            status: string;
            /** CloudConvert task message. */
            message?: string | null;
            /** CloudConvert task error code. */
            code?: string | null;
            /** Credits consumed by the task when available. */
            credits?: number | null;
            /** Timestamp when the task was created. */
            created_at: string;
            /** Timestamp when the task started processing. */
            started_at?: string | null;
            /** Timestamp when the task finished processing. */
            ended_at?: string | null;
            /** Original task ID if this task is a retry. */
            retry_of_task_id?: string | null;
            /** Task payload returned by CloudConvert. */
            payload?: unknown;
            /** Task result returned by CloudConvert. */
            result?: unknown;
            /** Dependency metadata for upstream tasks. */
            depends_on_tasks?: unknown;
            /** Retry task collection when requested. */
            retries?: unknown;
            /** Parent job object when requested. */
            job?: unknown;
            /** Links returned for the task. */
            links?: {
              /**
               * Canonical CloudConvert API URL for this resource.
               * @format uri
               */
              self?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Links returned for the job. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Files extracted from completed `export/url` tasks. */
        files: Array<{
          /** Exported file name. */
          filename: string;
          /**
           * Download URL for the exported file.
           * @format uri
           */
          url: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get a single CloudConvert task by ID. */
    "cloudconvert.get_task": {
      input: {
        /**
         * The CloudConvert task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** CloudConvert task returned by the connector. */
        task: {
          /** CloudConvert task ID. */
          id: string;
          /** Task operation such as `convert` or `export/url`. */
          operation: string;
          /** Task status reported by CloudConvert. */
          status: string;
          /** CloudConvert task message. */
          message?: string | null;
          /** CloudConvert task error code. */
          code?: string | null;
          /** Credits consumed by the task when available. */
          credits?: number | null;
          /** Timestamp when the task was created. */
          created_at: string;
          /** Timestamp when the task started processing. */
          started_at?: string | null;
          /** Timestamp when the task finished processing. */
          ended_at?: string | null;
          /** Original task ID if this task is a retry. */
          retry_of_task_id?: string | null;
          /** Task payload returned by CloudConvert. */
          payload?: unknown;
          /** Task result returned by CloudConvert. */
          result?: unknown;
          /** Dependency metadata for upstream tasks. */
          depends_on_tasks?: unknown;
          /** Retry task collection when requested. */
          retries?: unknown;
          /** Parent job object when requested. */
          job?: unknown;
          /** Links returned for the task. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** List possible CloudConvert conversion types for the requested input and output formats. */
    "cloudconvert.list_conversion_types": {
      input: {
        /**
         * Optional input file format filter.
         * @minLength 1
         */
        inputFormat?: string;
        /**
         * Optional output file format filter.
         * @minLength 1
         */
        outputFormat?: string;
        /**
         * Optional engine filter.
         * @minLength 1
         */
        engine?: string;
        /**
         * Optional engine version filter.
         * @minLength 1
         */
        engineVersion?: string;
        /** Whether to include alternative engines for the same format pair. */
        alternatives?: boolean;
        /** Whether to include conversion option descriptors in the response. */
        includeOptions?: boolean;
        /** Whether to include compatible engine version descriptors in the response. */
        includeEngineVersions?: boolean;
      };
      output: {
        /** Possible CloudConvert conversion types matching the filters. */
        conversionTypes: Array<{
          /** Operation name such as `convert`. */
          operation: string;
          /** Input file format. */
          input_format: string;
          /** Output file format. */
          output_format: string;
          /** Engine name for this conversion type. */
          engine: string;
          /** Base amount of credits consumed by this conversion type. */
          credits: number;
          /** Option descriptors for this conversion type when requested. */
          options?: Array<{
            /** Name of the conversion option. */
            name: string;
            /** Data type of the option. */
            type: string;
            /** Default option value, when provided. */
            default?: unknown;
            /** Allowed enum values when the option type is `enum`. */
            possible_values?: Array<unknown>;
            [key: string]: unknown;
          }>;
          /** Compatible engine versions for this conversion type when requested. */
          engine_versions?: Array<{
            /** Engine version string. */
            version: string;
            /** Whether this is the default engine version. */
            default?: boolean;
            /** Whether this is the latest engine version. */
            latest?: boolean;
            /** Whether this engine version is deprecated. */
            deprecated?: boolean;
            /** Whether this engine version is experimental. */
            experimental?: boolean;
            [key: string]: unknown;
          }>;
          /** Whether this conversion type is deprecated. */
          deprecated?: boolean;
          /** Whether this conversion type is experimental. */
          experimental?: boolean;
          /** Additional metadata returned by CloudConvert. */
          meta?: unknown;
          [key: string]: unknown;
        }>;
      };
    };
    /** List CloudConvert jobs for the current account. */
    "cloudconvert.list_jobs": {
      input: {
        /**
         * CloudConvert status filter such as `waiting`, `processing`, `finished`, `error`, or `canceled`.
         * @minLength 1
         */
        status?: string;
        /**
         * Optional job tag filter.
         * @minLength 1
         */
        tag?: string;
        /**
         * Page number to request from CloudConvert.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of items to request per CloudConvert page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** Jobs returned by CloudConvert. */
        jobs: Array<{
          /** CloudConvert job ID. */
          id: string;
          /** Optional job tag. */
          tag?: string | null;
          /** Job status reported by CloudConvert. */
          status: string;
          /** Timestamp when the job was created. */
          created_at: string;
          /** Timestamp when the job started processing. */
          started_at?: string | null;
          /** Timestamp when the job finished processing. */
          ended_at?: string | null;
          /** Tasks attached to the CloudConvert job. */
          tasks?: Array<{
            /** CloudConvert task ID. */
            id: string;
            /** Task operation such as `convert` or `export/url`. */
            operation: string;
            /** Task status reported by CloudConvert. */
            status: string;
            /** CloudConvert task message. */
            message?: string | null;
            /** CloudConvert task error code. */
            code?: string | null;
            /** Credits consumed by the task when available. */
            credits?: number | null;
            /** Timestamp when the task was created. */
            created_at: string;
            /** Timestamp when the task started processing. */
            started_at?: string | null;
            /** Timestamp when the task finished processing. */
            ended_at?: string | null;
            /** Original task ID if this task is a retry. */
            retry_of_task_id?: string | null;
            /** Task payload returned by CloudConvert. */
            payload?: unknown;
            /** Task result returned by CloudConvert. */
            result?: unknown;
            /** Dependency metadata for upstream tasks. */
            depends_on_tasks?: unknown;
            /** Retry task collection when requested. */
            retries?: unknown;
            /** Parent job object when requested. */
            job?: unknown;
            /** Links returned for the task. */
            links?: {
              /**
               * Canonical CloudConvert API URL for this resource.
               * @format uri
               */
              self?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Links returned for the job. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination links returned by CloudConvert. */
        links: {
          /** URL for the first page. */
          first?: string | null;
          /** URL for the last page. */
          last?: string | null;
          /** URL for the previous page. */
          prev?: string | null;
          /** URL for the next page. */
          next?: string | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata returned by CloudConvert. */
        meta: {
          /** Current page number. */
          current_page?: number;
          /** Index of the first item on the page. */
          from?: number | null;
          /** Base API URL used for pagination. */
          path?: string;
          /** Items requested per page. */
          per_page?: number;
          /** Index of the last item on the page. */
          to?: number | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List CloudConvert tasks for the current account. */
    "cloudconvert.list_tasks": {
      input: {
        /**
         * Optional parent job ID filter.
         * @minLength 1
         */
        jobId?: string;
        /**
         * CloudConvert status filter such as `waiting`, `processing`, `finished`, `error`, or `canceled`.
         * @minLength 1
         */
        status?: string;
        /**
         * Optional task operation filter.
         * @minLength 1
         */
        operation?: string;
        /**
         * Page number to request from CloudConvert.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Number of items to request per CloudConvert page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** Tasks returned by CloudConvert. */
        tasks: Array<{
          /** CloudConvert task ID. */
          id: string;
          /** Task operation such as `convert` or `export/url`. */
          operation: string;
          /** Task status reported by CloudConvert. */
          status: string;
          /** CloudConvert task message. */
          message?: string | null;
          /** CloudConvert task error code. */
          code?: string | null;
          /** Credits consumed by the task when available. */
          credits?: number | null;
          /** Timestamp when the task was created. */
          created_at: string;
          /** Timestamp when the task started processing. */
          started_at?: string | null;
          /** Timestamp when the task finished processing. */
          ended_at?: string | null;
          /** Original task ID if this task is a retry. */
          retry_of_task_id?: string | null;
          /** Task payload returned by CloudConvert. */
          payload?: unknown;
          /** Task result returned by CloudConvert. */
          result?: unknown;
          /** Dependency metadata for upstream tasks. */
          depends_on_tasks?: unknown;
          /** Retry task collection when requested. */
          retries?: unknown;
          /** Parent job object when requested. */
          job?: unknown;
          /** Links returned for the task. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Pagination links returned by CloudConvert. */
        links: {
          /** URL for the first page. */
          first?: string | null;
          /** URL for the last page. */
          last?: string | null;
          /** URL for the previous page. */
          prev?: string | null;
          /** URL for the next page. */
          next?: string | null;
          [key: string]: unknown;
        } | null;
        /** Pagination metadata returned by CloudConvert. */
        meta: {
          /** Current page number. */
          current_page?: number;
          /** Index of the first item on the page. */
          from?: number | null;
          /** Base API URL used for pagination. */
          path?: string;
          /** Items requested per page. */
          per_page?: number;
          /** Index of the last item on the page. */
          to?: number | null;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Retry a CloudConvert task by creating a new task from the original payload. */
    "cloudconvert.retry_task": {
      input: {
        /**
         * The CloudConvert task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** CloudConvert task returned by the connector. */
        task: {
          /** CloudConvert task ID. */
          id: string;
          /** Task operation such as `convert` or `export/url`. */
          operation: string;
          /** Task status reported by CloudConvert. */
          status: string;
          /** CloudConvert task message. */
          message?: string | null;
          /** CloudConvert task error code. */
          code?: string | null;
          /** Credits consumed by the task when available. */
          credits?: number | null;
          /** Timestamp when the task was created. */
          created_at: string;
          /** Timestamp when the task started processing. */
          started_at?: string | null;
          /** Timestamp when the task finished processing. */
          ended_at?: string | null;
          /** Original task ID if this task is a retry. */
          retry_of_task_id?: string | null;
          /** Task payload returned by CloudConvert. */
          payload?: unknown;
          /** Task result returned by CloudConvert. */
          result?: unknown;
          /** Dependency metadata for upstream tasks. */
          depends_on_tasks?: unknown;
          /** Retry task collection when requested. */
          retries?: unknown;
          /** Parent job object when requested. */
          job?: unknown;
          /** Links returned for the task. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Wait synchronously for a CloudConvert job to finish and return the finished or failed job with tasks. */
    "cloudconvert.wait_for_job": {
      input: {
        /**
         * The CloudConvert job ID.
         * @minLength 1
         */
        jobId: string;
      };
      output: {
        /** CloudConvert job returned by the connector. */
        job: {
          /** CloudConvert job ID. */
          id: string;
          /** Optional job tag. */
          tag?: string | null;
          /** Job status reported by CloudConvert. */
          status: string;
          /** Timestamp when the job was created. */
          created_at: string;
          /** Timestamp when the job started processing. */
          started_at?: string | null;
          /** Timestamp when the job finished processing. */
          ended_at?: string | null;
          /** Tasks attached to the CloudConvert job. */
          tasks?: Array<{
            /** CloudConvert task ID. */
            id: string;
            /** Task operation such as `convert` or `export/url`. */
            operation: string;
            /** Task status reported by CloudConvert. */
            status: string;
            /** CloudConvert task message. */
            message?: string | null;
            /** CloudConvert task error code. */
            code?: string | null;
            /** Credits consumed by the task when available. */
            credits?: number | null;
            /** Timestamp when the task was created. */
            created_at: string;
            /** Timestamp when the task started processing. */
            started_at?: string | null;
            /** Timestamp when the task finished processing. */
            ended_at?: string | null;
            /** Original task ID if this task is a retry. */
            retry_of_task_id?: string | null;
            /** Task payload returned by CloudConvert. */
            payload?: unknown;
            /** Task result returned by CloudConvert. */
            result?: unknown;
            /** Dependency metadata for upstream tasks. */
            depends_on_tasks?: unknown;
            /** Retry task collection when requested. */
            retries?: unknown;
            /** Parent job object when requested. */
            job?: unknown;
            /** Links returned for the task. */
            links?: {
              /**
               * Canonical CloudConvert API URL for this resource.
               * @format uri
               */
              self?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Links returned for the job. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Files extracted from completed `export/url` tasks. */
        files: Array<{
          /** Exported file name. */
          filename: string;
          /**
           * Download URL for the exported file.
           * @format uri
           */
          url: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Wait synchronously for a CloudConvert task to finish and return the finished or failed task. */
    "cloudconvert.wait_for_task": {
      input: {
        /**
         * The CloudConvert task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** CloudConvert task returned by the connector. */
        task: {
          /** CloudConvert task ID. */
          id: string;
          /** Task operation such as `convert` or `export/url`. */
          operation: string;
          /** Task status reported by CloudConvert. */
          status: string;
          /** CloudConvert task message. */
          message?: string | null;
          /** CloudConvert task error code. */
          code?: string | null;
          /** Credits consumed by the task when available. */
          credits?: number | null;
          /** Timestamp when the task was created. */
          created_at: string;
          /** Timestamp when the task started processing. */
          started_at?: string | null;
          /** Timestamp when the task finished processing. */
          ended_at?: string | null;
          /** Original task ID if this task is a retry. */
          retry_of_task_id?: string | null;
          /** Task payload returned by CloudConvert. */
          payload?: unknown;
          /** Task result returned by CloudConvert. */
          result?: unknown;
          /** Dependency metadata for upstream tasks. */
          depends_on_tasks?: unknown;
          /** Retry task collection when requested. */
          retries?: unknown;
          /** Parent job object when requested. */
          job?: unknown;
          /** Links returned for the task. */
          links?: {
            /**
             * Canonical CloudConvert API URL for this resource.
             * @format uri
             */
            self?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
  }
}
