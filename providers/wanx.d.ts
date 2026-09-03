import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate or edit images with the Wan Image 2.7 family. */
    "wanx.generate_image": {
      input: {
        /**
         * The Wan Image 2.7 model.
         * @default "wan2.7-image"
         */
        model?: "wan2.7-image" | "wan2.7-image-pro";
        /**
         * The image generation or editing prompt.
         * @minLength 1
         * @maxLength 5000
         */
        prompt: string;
        /**
         * Reference image URLs or data URLs. Omit for text-to-image generation.
         * @maxItems 9
         */
        images?: Array<string>;
        /**
         * The output size preset or WIDTH*HEIGHT value.
         * @minLength 1
         * @default "2K"
         */
        size?: string;
        /**
         * The number of images to generate.
         * @minimum 1
         * @maximum 4
         * @default 1
         */
        imageCount?: number;
        /**
         * Content that should not appear in the generated images.
         * @maxLength 500
         */
        negativePrompt?: string;
        /**
         * Whether Wanx should enhance the prompt.
         * @default true
         */
        promptExtend?: boolean;
        /**
         * Whether generated images include a watermark.
         * @default false
         */
        watermark?: boolean;
        /**
         * The random seed.
         * @minimum 0
         * @maximum 2147483647
         */
        seed?: number;
      };
      output: {
        /** The generated temporary image URLs. */
        images: Array<string>;
        /**
         * The number of generated images.
         * @minimum 0
         */
        imageCount: number;
        /** The generated image dimensions. */
        size: string;
      };
    };
    /** Retrieve a Wan 3.0 video task state and output. */
    "wanx.get_video_generation": {
      input: {
        /**
         * The opaque Wanx task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
      output: {
        /**
         * The opaque Wanx task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task is queued or running. */
        state: "processing";
        /**
         * The task progress percentage when available.
         * @minimum 0
         * @maximum 100
         */
        progress?: number;
      } | {
        /**
         * The opaque Wanx task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The task succeeded. */
        state: "succeeded";
        /**
         * The temporary generated video URL.
         * @minLength 1
         */
        videoUrl: string;
        /** The billed generated video duration in seconds. */
        duration?: number;
        /** The generated video resolution. */
        resolution?: string;
        /** The generated video aspect ratio. */
        ratio?: string;
      } | {
        /**
         * The opaque Wanx task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
        /** The terminal task state. */
        state: "failed" | "cancelled" | "expired";
        /** The upstream terminal error. */
        error?: {
          /** The upstream error code. */
          code?: string;
          /** The upstream error message. */
          message?: string;
        };
      };
    };
    /** Submit a unified asynchronous Wan 3.0 video generation task. */
    "wanx.submit_video_generation": {
      input: Record<string, unknown>;
      output: {
        /**
         * The opaque Wanx task identifier returned by the selected connection.
         * @minLength 1
         */
        taskId: string;
      };
    };
  }
}
