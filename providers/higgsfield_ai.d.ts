import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a queued Higgsfield generation request. */
    "higgsfield_ai.cancel_request": {
      input: {
        /**
         * The Higgsfield request identifier returned by submit.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /**
         * The Higgsfield request identifier returned by submit.
         * @minLength 1
         */
        requestId: string;
        /** Whether Higgsfield accepted the cancellation request. */
        accepted: boolean;
      };
    };
    /** Retrieve the current status and outputs for a Higgsfield generation request. */
    "higgsfield_ai.get_request_status": {
      input: {
        /**
         * The Higgsfield request identifier returned by submit.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /** The current Higgsfield request status. */
        status: "queued" | "in_progress" | "nsfw" | "failed" | "completed";
        /**
         * The Higgsfield request identifier returned by submit.
         * @minLength 1
         */
        requestId: string;
        /**
         * The Higgsfield status URL for this request.
         * @format uri
         */
        statusUrl: string | null;
        /**
         * The Higgsfield cancel URL for this request.
         * @format uri
         */
        cancelUrl: string | null;
        /** Generated image outputs when available. */
        images: Array<{
          /**
           * The generated image URL.
           * @format uri
           */
          url: string;
        }>;
        /** The generated video result. */
        video: {
          /**
           * The generated video URL.
           * @format uri
           */
          url: string;
        } | null;
        /** The Higgsfield error message when the request failed. */
        error: string | null;
        /** The raw Higgsfield response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit a Higgsfield text-to-image generation request. */
    "higgsfield_ai.submit_image_generation": {
      input: {
        /**
         * The text prompt describing the image to generate.
         * @minLength 1
         */
        prompt: string;
        /**
         * The Higgsfield model identifier to call.
         * @minLength 1
         */
        modelId?: string;
        /**
         * The image aspect ratio, such as 16:9.
         * @minLength 1
         */
        aspectRatio?: string;
        /**
         * The requested image resolution, such as 720p.
         * @minLength 1
         */
        resolution?: string;
        /** Whether the model camera should remain fixed. */
        cameraFixed?: boolean;
        /**
         * The public webhook URL that Higgsfield should notify.
         * @format uri
         */
        webhookUrl?: string;
        /** Additional model-specific Higgsfield request arguments. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The current Higgsfield request status. */
        status: "queued" | "in_progress" | "nsfw" | "failed" | "completed";
        /**
         * The Higgsfield request identifier returned by submit.
         * @minLength 1
         */
        requestId: string;
        /**
         * The Higgsfield status URL for this request.
         * @format uri
         */
        statusUrl: string | null;
        /**
         * The Higgsfield cancel URL for this request.
         * @format uri
         */
        cancelUrl: string | null;
        /** Generated image outputs when available. */
        images: Array<{
          /**
           * The generated image URL.
           * @format uri
           */
          url: string;
        }>;
        /** The generated video result. */
        video: {
          /**
           * The generated video URL.
           * @format uri
           */
          url: string;
        } | null;
        /** The Higgsfield error message when the request failed. */
        error: string | null;
        /** The raw Higgsfield response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Submit a Higgsfield image-to-video generation request. */
    "higgsfield_ai.submit_video_generation": {
      input: {
        /**
         * The motion prompt describing how the image should animate.
         * @minLength 1
         */
        prompt: string;
        /**
         * The publicly accessible source image URL.
         * @format uri
         */
        imageUrl: string;
        /**
         * The Higgsfield model identifier to call.
         * @minLength 1
         */
        modelId?: string;
        /** The requested video duration in seconds. */
        duration?: number;
        /**
         * The public webhook URL that Higgsfield should notify.
         * @format uri
         */
        webhookUrl?: string;
        /** Additional model-specific Higgsfield request arguments. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The current Higgsfield request status. */
        status: "queued" | "in_progress" | "nsfw" | "failed" | "completed";
        /**
         * The Higgsfield request identifier returned by submit.
         * @minLength 1
         */
        requestId: string;
        /**
         * The Higgsfield status URL for this request.
         * @format uri
         */
        statusUrl: string | null;
        /**
         * The Higgsfield cancel URL for this request.
         * @format uri
         */
        cancelUrl: string | null;
        /** Generated image outputs when available. */
        images: Array<{
          /**
           * The generated image URL.
           * @format uri
           */
          url: string;
        }>;
        /** The generated video result. */
        video: {
          /**
           * The generated video URL.
           * @format uri
           */
          url: string;
        } | null;
        /** The Higgsfield error message when the request failed. */
        error: string | null;
        /** The raw Higgsfield response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
