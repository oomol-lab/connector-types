import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a Kling AI task state and its generated video when available. */
    "kling.get_video_generation": {
      input: {
        /**
         * The opaque Kling AI task handle returned by the selected connection.
         * @minLength 1
         * @maxLength 512
         */
        taskId: string;
      };
      output: {
        /**
         * The opaque Kling AI task handle returned by the selected connection.
         * @minLength 1
         * @maxLength 512
         */
        taskId: string;
        /** The task creation Unix timestamp in milliseconds. */
        createdAt?: number;
        /** The task update Unix timestamp in milliseconds. */
        updatedAt?: number;
        /** The task is submitted or processing. */
        state: "processing";
      } | {
        /**
         * The opaque Kling AI task handle returned by the selected connection.
         * @minLength 1
         * @maxLength 512
         */
        taskId: string;
        /** The task creation Unix timestamp in milliseconds. */
        createdAt?: number;
        /** The task update Unix timestamp in milliseconds. */
        updatedAt?: number;
        /** The task succeeded. */
        state: "succeeded";
        /**
         * The temporary generated video URL.
         * @minLength 1
         */
        videoUrl: string;
        /**
         * The temporary watermarked video URL when requested.
         * @minLength 1
         */
        watermarkVideoUrl?: string;
        /** The generated video duration in seconds. */
        duration?: number;
        /** The generated video resolution when reported. */
        resolution?: string;
        /** The generated video frame rate when reported. */
        framesPerSecond?: number;
        /** How the generated video uses audio. */
        audioMode?: "off" | "native" | "original";
      } | {
        /**
         * The opaque Kling AI task handle returned by the selected connection.
         * @minLength 1
         * @maxLength 512
         */
        taskId: string;
        /** The task creation Unix timestamp in milliseconds. */
        createdAt?: number;
        /** The task update Unix timestamp in milliseconds. */
        updatedAt?: number;
        /** The task is failed. */
        state: "failed";
        /** The terminal error reported for a Kling AI task. */
        error?: {
          /** The upstream terminal error code when available. */
          code?: string;
          /** The upstream terminal error message when available. */
          message?: string;
        };
      } | {
        /**
         * The opaque Kling AI task handle returned by the selected connection.
         * @minLength 1
         * @maxLength 512
         */
        taskId: string;
        /** The task creation Unix timestamp in milliseconds. */
        createdAt?: number;
        /** The task update Unix timestamp in milliseconds. */
        updatedAt?: number;
        /** The task is cancelled. */
        state: "cancelled";
        /** The terminal error reported for a Kling AI task. */
        error?: {
          /** The upstream terminal error code when available. */
          code?: string;
          /** The upstream terminal error message when available. */
          message?: string;
        };
      } | {
        /**
         * The opaque Kling AI task handle returned by the selected connection.
         * @minLength 1
         * @maxLength 512
         */
        taskId: string;
        /** The task creation Unix timestamp in milliseconds. */
        createdAt?: number;
        /** The task update Unix timestamp in milliseconds. */
        updatedAt?: number;
        /** The task is expired. */
        state: "expired";
        /** The terminal error reported for a Kling AI task. */
        error?: {
          /** The upstream terminal error code when available. */
          code?: string;
          /** The upstream terminal error message when available. */
          message?: string;
        };
      };
    };
    /** Submit an asynchronous Kling AI V3 video generation task. */
    "kling.submit_video_generation": {
      input: Record<string, unknown>;
      output: {
        /**
         * The opaque Kling AI task handle returned by the selected connection.
         * @minLength 1
         * @maxLength 512
         */
        taskId: string;
      };
    };
  }
}
