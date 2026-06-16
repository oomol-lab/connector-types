import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve one Browse AI robot and its input parameter definitions by robot ID. */
    "browse_ai.get_robot": {
      input: {
        /**
         * The Browse AI robot ID.
         * @minLength 1
         */
        robotId: string;
      };
      output: {
        /** The requested Browse AI robot. */
        robot: {
          /**
           * The Browse AI robot ID.
           * @minLength 1
           */
          id: string;
          /** The Browse AI robot name. */
          name?: string;
          /** When the robot was created. */
          createdAt: number;
          /** The input parameters supported by the Browse AI robot. */
          inputParameters: Array<{
            /**
             * The Browse AI input parameter type.
             * @minLength 1
             */
            type: string;
            /**
             * The parameter name used in task inputParameters.
             * @minLength 1
             */
            name: string;
            /**
             * The human-readable parameter label.
             * @minLength 1
             */
            label: string;
            /** Whether the parameter is required when running the robot. */
            required: boolean;
            /** Whether the parameter value is masked by Browse AI. */
            encrypted?: boolean;
            /** The default parameter value configured on the robot. */
            defaultValue?: string | number | Array<string> | null;
            /** The parameter value resolved for a specific task, when Browse AI returns it. */
            value?: string | number | Array<string> | null;
            /** The minimum numeric value accepted by the parameter. */
            min?: number;
            /** The maximum numeric value accepted by the parameter. */
            max?: number;
            /** The select options available for this parameter. */
            options?: Array<{
              /**
               * The display label of the select option.
               * @minLength 1
               */
              label: string;
              /**
               * The submitted value of the select option.
               * @minLength 1
               */
              value: string;
            }>;
            [key: string]: unknown;
          }>;
        };
      };
    };
    /** Retrieve one Browse AI robot task and its captured data by robot and task IDs. */
    "browse_ai.get_robot_task": {
      input: {
        /**
         * The Browse AI robot ID.
         * @minLength 1
         */
        robotId: string;
        /**
         * The Browse AI task ID.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /** The requested Browse AI robot task. */
        task: {
          /**
           * The Browse AI task ID.
           * @minLength 1
           */
          id: string;
          /** The inputParameters object used when Browse AI created the task. */
          inputParameters: Record<string, string | number | Array<string>>;
          /**
           * The Browse AI robot ID that owns the task.
           * @minLength 1
           */
          robotId: string;
          /**
           * The normalized Browse AI task status.
           * @minLength 1
           */
          status: string;
          /** The Browse AI user ID that started the task from the dashboard. */
          runByUserId?: string | null;
          /** The Browse AI bulk run ID associated with the task. */
          robotBulkRunId?: string | null;
          /** The Browse AI monitor ID that started the task. */
          runByTaskMonitorId?: string | null;
          /** Whether the task was started through the API. */
          runByAPI?: boolean;
          /** When the task was created. */
          createdAt: number;
          /** When the task started executing. */
          startedAt?: number | null;
          /** When the task finished executing, or null while it is still running. */
          finishedAt?: number | null;
          /** The human-readable error returned when the task fails. */
          userFriendlyError?: string | null;
          /** Whether Browse AI attempted to record a video for the task. */
          triedRecordingVideo?: boolean;
          /** The Browse AI task video URL. */
          videoUrl?: string | null;
          /** When Browse AI removed the stored task video, if applicable. */
          videoRemovedAt?: number | null;
          /** The original failed task ID that Browse AI retried. */
          retriedOriginalTaskId?: string | null;
          /** The retry task ID created by Browse AI for this task. */
          retriedByTaskId?: string | null;
          /** The temporary Browse AI URL for downloading large captured data payloads. */
          capturedDataTemporaryUrl?: string | null;
          /** The captured text fields returned by the task. */
          capturedTexts: Record<string, string | null>;
          /** The captured screenshots returned by the task. */
          capturedScreenshots: Record<string, {
              /**
               * The Browse AI screenshot ID.
               * @minLength 1
               */
              id: string;
              /** The screenshot name. */
              name?: string | null;
              /**
               * The screenshot image URL.
               * @minLength 1
               */
              src: string;
              /** The screenshot width in pixels. */
              width?: number;
              /** The screenshot height in pixels. */
              height?: number;
              /** The screenshot X offset in pixels. */
              x?: number;
              /** The screenshot Y offset in pixels. */
              y?: number;
              /** The device scale factor used to capture the screenshot. */
              deviceScaleFactor?: number;
              /** The screenshot coverage mode, such as page or viewport. */
              full?: string | null;
              /** The screenshot ID used for Browse AI diff comparisons. */
              comparedToScreenshotId?: string | null;
              /** The diff image URL highlighting screenshot changes. */
              diffImageSrc?: string | null;
              /** The percentage of changed pixels compared with the previous screenshot. */
              changePercentage?: number;
              /** The configured screenshot change threshold percentage. */
              diffThreshold?: number;
              /** When Browse AI removed the stored screenshot file, if applicable. */
              fileRemovedAt?: number | null;
              [key: string]: unknown;
            }>;
          /** The captured lists returned by the task. */
          capturedLists: Record<string, Array<Record<string, string | null>>>;
        };
      };
    };
    /** List Browse AI robot tasks with pagination and status filters. */
    "browse_ai.list_robot_tasks": {
      input: {
        /**
         * The Browse AI robot ID.
         * @minLength 1
         */
        robotId: string;
        /**
         * The Browse AI task list page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of tasks to return per page.
         * @minimum 1
         * @maximum 10
         */
        pageSize?: number;
        /** The Browse AI task status filter. */
        status?: "failed" | "successful" | "in-progress";
        /** The Browse AI bulk run ID used to filter tasks. */
        robotBulkRunId?: string;
        /** The Browse AI sort expression, such as -createdAt,finishedAt. */
        sort?: string;
        /** Whether retried tasks should be included in the result. */
        includeRetried?: boolean;
        /** The earliest task creation timestamp. */
        fromDate?: number;
        /** The latest task creation timestamp. */
        toDate?: number;
      };
      output: {
        /** The Browse AI task collection. */
        tasks: {
          /** The total number of Browse AI tasks. */
          totalCount: number;
          /** The current Browse AI task page number. */
          pageNumber: number;
          /** Whether another Browse AI task page is available. */
          hasMore: boolean;
          /** The Browse AI tasks returned on the current page. */
          items: Array<{
            /**
             * The Browse AI task ID.
             * @minLength 1
             */
            id: string;
            /** The inputParameters object used when Browse AI created the task. */
            inputParameters: Record<string, string | number | Array<string>>;
            /**
             * The Browse AI robot ID that owns the task.
             * @minLength 1
             */
            robotId: string;
            /**
             * The normalized Browse AI task status.
             * @minLength 1
             */
            status: string;
            /** The Browse AI user ID that started the task from the dashboard. */
            runByUserId?: string | null;
            /** The Browse AI bulk run ID associated with the task. */
            robotBulkRunId?: string | null;
            /** The Browse AI monitor ID that started the task. */
            runByTaskMonitorId?: string | null;
            /** Whether the task was started through the API. */
            runByAPI?: boolean;
            /** When the task was created. */
            createdAt: number;
            /** When the task started executing. */
            startedAt?: number | null;
            /** When the task finished executing, or null while it is still running. */
            finishedAt?: number | null;
            /** The human-readable error returned when the task fails. */
            userFriendlyError?: string | null;
            /** Whether Browse AI attempted to record a video for the task. */
            triedRecordingVideo?: boolean;
            /** The Browse AI task video URL. */
            videoUrl?: string | null;
            /** When Browse AI removed the stored task video, if applicable. */
            videoRemovedAt?: number | null;
            /** The original failed task ID that Browse AI retried. */
            retriedOriginalTaskId?: string | null;
            /** The retry task ID created by Browse AI for this task. */
            retriedByTaskId?: string | null;
            /** The temporary Browse AI URL for downloading large captured data payloads. */
            capturedDataTemporaryUrl?: string | null;
            /** The captured text fields returned by the task. */
            capturedTexts: Record<string, string | null>;
            /** The captured screenshots returned by the task. */
            capturedScreenshots: Record<string, {
                /**
                 * The Browse AI screenshot ID.
                 * @minLength 1
                 */
                id: string;
                /** The screenshot name. */
                name?: string | null;
                /**
                 * The screenshot image URL.
                 * @minLength 1
                 */
                src: string;
                /** The screenshot width in pixels. */
                width?: number;
                /** The screenshot height in pixels. */
                height?: number;
                /** The screenshot X offset in pixels. */
                x?: number;
                /** The screenshot Y offset in pixels. */
                y?: number;
                /** The device scale factor used to capture the screenshot. */
                deviceScaleFactor?: number;
                /** The screenshot coverage mode, such as page or viewport. */
                full?: string | null;
                /** The screenshot ID used for Browse AI diff comparisons. */
                comparedToScreenshotId?: string | null;
                /** The diff image URL highlighting screenshot changes. */
                diffImageSrc?: string | null;
                /** The percentage of changed pixels compared with the previous screenshot. */
                changePercentage?: number;
                /** The configured screenshot change threshold percentage. */
                diffThreshold?: number;
                /** When Browse AI removed the stored screenshot file, if applicable. */
                fileRemovedAt?: number | null;
                [key: string]: unknown;
              }>;
            /** The captured lists returned by the task. */
            capturedLists: Record<string, Array<Record<string, string | null>>>;
          }>;
        };
      };
    };
    /** List the Browse AI robots available to the connected API key. */
    "browse_ai.list_robots": {
      input: Record<string, never>;
      output: {
        /** The Browse AI robot collection. */
        robots: {
          /** The total number of Browse AI robots. */
          totalCount: number;
          /** The Browse AI robots returned for the API key. */
          items: Array<{
            /**
             * The Browse AI robot ID.
             * @minLength 1
             */
            id: string;
            /** The Browse AI robot name. */
            name?: string;
            /** When the robot was created. */
            createdAt: number;
            /** The input parameters supported by the Browse AI robot. */
            inputParameters: Array<{
              /**
               * The Browse AI input parameter type.
               * @minLength 1
               */
              type: string;
              /**
               * The parameter name used in task inputParameters.
               * @minLength 1
               */
              name: string;
              /**
               * The human-readable parameter label.
               * @minLength 1
               */
              label: string;
              /** Whether the parameter is required when running the robot. */
              required: boolean;
              /** Whether the parameter value is masked by Browse AI. */
              encrypted?: boolean;
              /** The default parameter value configured on the robot. */
              defaultValue?: string | number | Array<string> | null;
              /** The parameter value resolved for a specific task, when Browse AI returns it. */
              value?: string | number | Array<string> | null;
              /** The minimum numeric value accepted by the parameter. */
              min?: number;
              /** The maximum numeric value accepted by the parameter. */
              max?: number;
              /** The select options available for this parameter. */
              options?: Array<{
                /**
                 * The display label of the select option.
                 * @minLength 1
                 */
                label: string;
                /**
                 * The submitted value of the select option.
                 * @minLength 1
                 */
                value: string;
              }>;
              [key: string]: unknown;
            }>;
          }>;
        };
      };
    };
    /** Start one Browse AI robot task with optional inputParameters overrides. */
    "browse_ai.run_robot_task": {
      input: {
        /**
         * The Browse AI robot ID.
         * @minLength 1
         */
        robotId: string;
        /** Whether Browse AI should attempt to record a task video. */
        recordVideo?: boolean;
        /** The inputParameters overrides passed to the Browse AI robot task. */
        inputParameters?: Record<string, string | number | Array<string>>;
      };
      output: {
        /** The Browse AI task that was created. */
        task: {
          /**
           * The Browse AI task ID.
           * @minLength 1
           */
          id: string;
          /** The inputParameters object used when Browse AI created the task. */
          inputParameters: Record<string, string | number | Array<string>>;
          /**
           * The Browse AI robot ID that owns the task.
           * @minLength 1
           */
          robotId: string;
          /**
           * The normalized Browse AI task status.
           * @minLength 1
           */
          status: string;
          /** The Browse AI user ID that started the task from the dashboard. */
          runByUserId?: string | null;
          /** The Browse AI bulk run ID associated with the task. */
          robotBulkRunId?: string | null;
          /** The Browse AI monitor ID that started the task. */
          runByTaskMonitorId?: string | null;
          /** Whether the task was started through the API. */
          runByAPI?: boolean;
          /** When the task was created. */
          createdAt: number;
          /** When the task started executing. */
          startedAt?: number | null;
          /** When the task finished executing, or null while it is still running. */
          finishedAt?: number | null;
          /** The human-readable error returned when the task fails. */
          userFriendlyError?: string | null;
          /** Whether Browse AI attempted to record a video for the task. */
          triedRecordingVideo?: boolean;
          /** The Browse AI task video URL. */
          videoUrl?: string | null;
          /** When Browse AI removed the stored task video, if applicable. */
          videoRemovedAt?: number | null;
          /** The original failed task ID that Browse AI retried. */
          retriedOriginalTaskId?: string | null;
          /** The retry task ID created by Browse AI for this task. */
          retriedByTaskId?: string | null;
          /** The temporary Browse AI URL for downloading large captured data payloads. */
          capturedDataTemporaryUrl?: string | null;
          /** The captured text fields returned by the task. */
          capturedTexts: Record<string, string | null>;
          /** The captured screenshots returned by the task. */
          capturedScreenshots: Record<string, {
              /**
               * The Browse AI screenshot ID.
               * @minLength 1
               */
              id: string;
              /** The screenshot name. */
              name?: string | null;
              /**
               * The screenshot image URL.
               * @minLength 1
               */
              src: string;
              /** The screenshot width in pixels. */
              width?: number;
              /** The screenshot height in pixels. */
              height?: number;
              /** The screenshot X offset in pixels. */
              x?: number;
              /** The screenshot Y offset in pixels. */
              y?: number;
              /** The device scale factor used to capture the screenshot. */
              deviceScaleFactor?: number;
              /** The screenshot coverage mode, such as page or viewport. */
              full?: string | null;
              /** The screenshot ID used for Browse AI diff comparisons. */
              comparedToScreenshotId?: string | null;
              /** The diff image URL highlighting screenshot changes. */
              diffImageSrc?: string | null;
              /** The percentage of changed pixels compared with the previous screenshot. */
              changePercentage?: number;
              /** The configured screenshot change threshold percentage. */
              diffThreshold?: number;
              /** When Browse AI removed the stored screenshot file, if applicable. */
              fileRemovedAt?: number | null;
              [key: string]: unknown;
            }>;
          /** The captured lists returned by the task. */
          capturedLists: Record<string, Array<Record<string, string | null>>>;
        };
      };
    };
    /** Update the cookies stored on one Browse AI robot. */
    "browse_ai.update_robot_cookies": {
      input: {
        /**
         * The Browse AI robot ID.
         * @minLength 1
         */
        robotId: string;
        /** The cookies that should be stored on the Browse AI robot. */
        cookies: Array<{
          /**
           * The cookie name.
           * @minLength 1
           */
          name: string;
          /** The cookie value. */
          value: string | number;
          /** The cookie domain. */
          domain?: string;
          /** The cookie expiration time as a Unix timestamp in seconds. */
          expirationDate?: number;
          /** The cookie path. */
          path?: string;
          /** Whether the cookie requires HTTPS. */
          secure?: boolean;
          /** Whether the cookie is HTTP-only. */
          httpOnly?: boolean;
          /** Whether the cookie is restricted to the exact host. */
          hostOnly?: boolean;
        }>;
      };
      output: {
        /** The cookies returned by Browse AI after the update. */
        cookies: Array<{
          /**
           * The cookie name.
           * @minLength 1
           */
          name: string;
          /** The cookie value. */
          value: string;
          /** The cookie domain. */
          domain?: string;
          /** The cookie expiration time as a Unix timestamp in seconds. */
          expirationDate?: number;
          /** The cookie path. */
          path?: string;
          /** Whether the cookie requires HTTPS. */
          secure?: boolean;
          /** Whether the cookie is HTTP-only. */
          httpOnly?: boolean;
          /** Whether the cookie is restricted to the exact host. */
          hostOnly?: boolean;
        }>;
      };
    };
  }
}
