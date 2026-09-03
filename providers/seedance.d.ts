import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a queued Seedance task or delete a task according to Seedance task-state semantics. */
    "seedance.delete_video_generation": {
      input: {
        /**
         * The opaque Seedance task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The opaque Seedance task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** Whether Seedance accepted the cancellation or deletion. */
        accepted: boolean;
      };
    };
    /** Retrieve a Seedance task state and its generated video when available. */
    "seedance.get_video_generation": {
      input: {
        /**
         * The opaque Seedance task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The opaque Seedance task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The model name reported for this task. */
        model?: string;
        /** The task creation Unix timestamp in seconds. */
        createdAt?: number;
        /** The task update Unix timestamp in seconds. */
        updatedAt?: number;
        /** The task is queued or running. */
        state: "processing";
        /**
         * The task progress when available.
         * @minimum 0
         * @maximum 100
         */
        progress?: number;
      } | {
        /**
         * The opaque Seedance task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The model name reported for this task. */
        model?: string;
        /** The task creation Unix timestamp in seconds. */
        createdAt?: number;
        /** The task update Unix timestamp in seconds. */
        updatedAt?: number;
        /** The task succeeded. */
        state: "succeeded";
        /**
         * The generated video URL.
         * @minLength 1
         */
        videoUrl: string;
        /**
         * The generated final-frame image URL when requested.
         * @minLength 1
         */
        lastFrameUrl?: string;
        /** The seed used by the task. */
        seed?: number;
        /** The generated video resolution. */
        resolution?: "480p" | "720p" | "1080p";
        /** The generated video aspect ratio. */
        ratio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9" | "adaptive";
        /** The generated video duration in seconds. */
        duration?: number;
        /** The generated frame count. */
        frames?: number;
        /** The generated video frame rate. */
        framesPerSecond?: number;
        /** Whether the generated video contains synchronized audio. */
        generateAudio?: boolean;
        /** The tools used by Seedance. */
        tools?: Array<{
          /** Use web search while generating the video. */
          type: "web_search";
        }>;
        /** The end-user safety identifier supplied at submission. */
        safetyIdentifier?: string;
        /** The service tier that processed the task. */
        serviceTier?: string;
        /** The task expiration threshold in seconds. */
        executionExpiresAfter?: number;
        /** Token and tool usage reported for a succeeded Seedance task. */
        usage?: {
          /**
           * The completion token count.
           * @minimum 0
           */
          completionTokens?: number;
          /**
           * The total token count.
           * @minimum 0
           */
          totalTokens?: number;
          /** Tool usage reported by Seedance. */
          toolUsage?: {
            /**
             * The web search invocation count.
             * @minimum 0
             */
            webSearch?: number;
          };
        };
      } | {
        /**
         * The opaque Seedance task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The model name reported for this task. */
        model?: string;
        /** The task creation Unix timestamp in seconds. */
        createdAt?: number;
        /** The task update Unix timestamp in seconds. */
        updatedAt?: number;
        /** The task is failed. */
        state: "failed";
        /** The terminal error reported by Seedance when the task did not succeed. */
        error?: {
          /** The upstream error code when provided. */
          code?: string;
          /** The upstream error message when provided. */
          message?: string;
        };
      } | {
        /**
         * The opaque Seedance task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The model name reported for this task. */
        model?: string;
        /** The task creation Unix timestamp in seconds. */
        createdAt?: number;
        /** The task update Unix timestamp in seconds. */
        updatedAt?: number;
        /** The task is cancelled. */
        state: "cancelled";
        /** The terminal error reported by Seedance when the task did not succeed. */
        error?: {
          /** The upstream error code when provided. */
          code?: string;
          /** The upstream error message when provided. */
          message?: string;
        };
      } | {
        /**
         * The opaque Seedance task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The model name reported for this task. */
        model?: string;
        /** The task creation Unix timestamp in seconds. */
        createdAt?: number;
        /** The task update Unix timestamp in seconds. */
        updatedAt?: number;
        /** The task is expired. */
        state: "expired";
        /** The terminal error reported by Seedance when the task did not succeed. */
        error?: {
          /** The upstream error code when provided. */
          code?: string;
          /** The upstream error message when provided. */
          message?: string;
        };
      };
    };
    /** List Seedance video generation tasks visible to the configured Seedance API key. */
    "seedance.list_video_generations": {
      input: {
        /**
         * The result page number.
         * @minimum 1
         * @maximum 500
         */
        pageNumber?: number;
        /**
         * The number of tasks per page.
         * @minimum 1
         * @maximum 500
         */
        pageSize?: number;
        /** Filter tasks by upstream status. */
        status?: "queued" | "running" | "cancelled" | "succeeded" | "failed";
        /** Filter by exact Seedance task identifiers. */
        taskIds?: Array<string>;
        /**
         * Filter by an exact Seedance Endpoint ID.
         * @minLength 1
         */
        model?: string;
        /** Filter by the processing service tier. */
        serviceTier?: "default" | "flex";
      };
      output: {
        /** The matching Seedance tasks. */
        items: Array<{
          /**
           * The opaque Seedance task identifier returned by the selected connection.
           * @minLength 1
           */
          taskId: string;
          /** The model name reported for this task. */
          model?: string;
          /** The task creation Unix timestamp in seconds. */
          createdAt?: number;
          /** The task update Unix timestamp in seconds. */
          updatedAt?: number;
          /** The task is queued or running. */
          state: "processing";
          /**
           * The task progress when available.
           * @minimum 0
           * @maximum 100
           */
          progress?: number;
        } | {
          /**
           * The opaque Seedance task identifier returned by the selected connection.
           * @minLength 1
           */
          taskId: string;
          /** The model name reported for this task. */
          model?: string;
          /** The task creation Unix timestamp in seconds. */
          createdAt?: number;
          /** The task update Unix timestamp in seconds. */
          updatedAt?: number;
          /** The task succeeded. */
          state: "succeeded";
          /**
           * The generated video URL.
           * @minLength 1
           */
          videoUrl: string;
          /**
           * The generated final-frame image URL when requested.
           * @minLength 1
           */
          lastFrameUrl?: string;
          /** The seed used by the task. */
          seed?: number;
          /** The generated video resolution. */
          resolution?: "480p" | "720p" | "1080p";
          /** The generated video aspect ratio. */
          ratio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9" | "adaptive";
          /** The generated video duration in seconds. */
          duration?: number;
          /** The generated frame count. */
          frames?: number;
          /** The generated video frame rate. */
          framesPerSecond?: number;
          /** Whether the generated video contains synchronized audio. */
          generateAudio?: boolean;
          /** The tools used by Seedance. */
          tools?: Array<{
            /** Use web search while generating the video. */
            type: "web_search";
          }>;
          /** The end-user safety identifier supplied at submission. */
          safetyIdentifier?: string;
          /** The service tier that processed the task. */
          serviceTier?: string;
          /** The task expiration threshold in seconds. */
          executionExpiresAfter?: number;
          /** Token and tool usage reported for a succeeded Seedance task. */
          usage?: {
            /**
             * The completion token count.
             * @minimum 0
             */
            completionTokens?: number;
            /**
             * The total token count.
             * @minimum 0
             */
            totalTokens?: number;
            /** Tool usage reported by Seedance. */
            toolUsage?: {
              /**
               * The web search invocation count.
               * @minimum 0
               */
              webSearch?: number;
            };
          };
        } | {
          /**
           * The opaque Seedance task identifier returned by the selected connection.
           * @minLength 1
           */
          taskId: string;
          /** The model name reported for this task. */
          model?: string;
          /** The task creation Unix timestamp in seconds. */
          createdAt?: number;
          /** The task update Unix timestamp in seconds. */
          updatedAt?: number;
          /** The task is failed. */
          state: "failed";
          /** The terminal error reported by Seedance when the task did not succeed. */
          error?: {
            /** The upstream error code when provided. */
            code?: string;
            /** The upstream error message when provided. */
            message?: string;
          };
        } | {
          /**
           * The opaque Seedance task identifier returned by the selected connection.
           * @minLength 1
           */
          taskId: string;
          /** The model name reported for this task. */
          model?: string;
          /** The task creation Unix timestamp in seconds. */
          createdAt?: number;
          /** The task update Unix timestamp in seconds. */
          updatedAt?: number;
          /** The task is cancelled. */
          state: "cancelled";
          /** The terminal error reported by Seedance when the task did not succeed. */
          error?: {
            /** The upstream error code when provided. */
            code?: string;
            /** The upstream error message when provided. */
            message?: string;
          };
        } | {
          /**
           * The opaque Seedance task identifier returned by the selected connection.
           * @minLength 1
           */
          taskId: string;
          /** The model name reported for this task. */
          model?: string;
          /** The task creation Unix timestamp in seconds. */
          createdAt?: number;
          /** The task update Unix timestamp in seconds. */
          updatedAt?: number;
          /** The task is expired. */
          state: "expired";
          /** The terminal error reported by Seedance when the task did not succeed. */
          error?: {
            /** The upstream error code when provided. */
            code?: string;
            /** The upstream error message when provided. */
            message?: string;
          };
        }>;
        /**
         * The total number of matching tasks.
         * @minimum 0
         */
        total: number;
      };
    };
    /** Submit an asynchronous Seedance video generation task through Seedance. */
    "seedance.submit_video_generation": {
      input: Record<string, unknown>;
      output: {
        /**
         * The opaque Seedance task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
    };
  }
}
