import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check team plan points, usage and expiry. */
    "linkfox_ai.get_plan_info": {
      input: Record<string, never>;
      output: {
        /** Total points in the plan period. */
        total: number;
        /** Points used in the plan period. */
        usage: number;
        /** Points remaining in the plan period. */
        remaining: number;
        /** Plan start date in YYYYMMDD format. */
        startTime?: number;
        /** Latest included points expiry date in YYYYMMDD format. */
        expireTime?: number;
        /** LinkFox AI request trace ID. */
        traceId?: string;
      };
    };
    /** Check a video task and retrieve its available results or failure details. */
    "linkfox_ai.get_video_task": {
      input: {
        /**
         * Task ID as an exact decimal string.
         * @pattern ^[0-9]+$
         */
        taskId: string;
        /** Whether to add synthetic performer metadata to supported output files. */
        containsSyntheticPerformer?: boolean;
      };
      output: {
        /**
         * Task ID as an exact decimal string.
         * @pattern ^[0-9]+$
         */
        taskId: string;
        /** Normalized task state. */
        state: "processing" | "succeeded" | "failed";
        /** Provider task status (1 queued, 2 generating, 3 complete, 4 failed). */
        rawStatus: number;
        /** First successful video URL when the task succeeds. */
        videoUrl?: string;
        /** Individual task results. */
        results?: Array<{
          /** Result ID as an exact decimal string. */
          id?: string;
          /** Result status (0 generating, 1 succeeded, 2 failed). */
          status?: number;
          /** Result media URL. */
          url?: string;
          /** Width in pixels. */
          width?: number;
          /** Height in pixels. */
          height?: number;
          /** Result file format. */
          format?: string;
          /** Result file size in bytes. */
          size?: number;
          /** Provider error code for this result. */
          errorCode?: string;
          /** Provider error message for this result. */
          errorMsg?: string;
        }>;
        /** Points consumed by the task. */
        pointsConsumed?: number;
        /** Task failure details. */
        error?: {
          /** Task failure code. */
          code?: string;
          /** Task failure message. */
          message?: string;
        };
        /** LinkFox AI request trace ID. */
        traceId?: string;
      };
    };
    /** List video models and their supported settings for a LinkFox AI workflow. */
    "linkfox_ai.list_video_models": {
      input: {
        /**
         * LinkFox AI video workflow code.
         * @default 94
         */
        bizType?: 30 | 73 | 89 | 94 | 95 | 96;
      };
      output: {
        /** LinkFox AI video workflow code. */
        bizType: 30 | 73 | 89 | 94 | 95 | 96;
        /** Models available for this workflow. */
        models: Array<{
          /** Public code to pass as model. */
          apiCode: string;
          /** Provider model code. */
          code?: string;
          /** Model display name. */
          name: string;
          /** Whether the model is under maintenance. */
          isMaintenance?: boolean;
          /** Supported resolutions. */
          resolutions: Array<string>;
          /** Supported durations. */
          durations: Array<string>;
          /** Supported aspect ratios. */
          ratios: Array<string>;
          /** Maximum number of reference images. */
          referenceImageLimit?: number;
          /** Whether the model accepts the voice option. */
          supportsVoice?: boolean;
          /** Whether the model accepts a closing frame. */
          supportsLastFrame?: boolean;
          /** Supported generation modes. */
          modes?: Array<string>;
          /** Off-peak generation settings. */
          offPeak?: {
            /** Whether off-peak generation is available. */
            supported?: boolean;
            /** Off-peak discount reported by the provider. */
            discount?: number;
            /** Maximum off-peak wait in hours. */
            maxWaitHours?: number;
          };
          /** Model pricing as reported by LinkFox AI. */
          pricing?: Record<string, unknown>;
        }>;
      };
    };
    /** Animate a first frame or reference images using a prompt, storyboard mode, or a product video template. */
    "linkfox_ai.submit_image_to_video": {
      input: Record<string, unknown>;
      output: {
        /**
         * Task ID as an exact decimal string.
         * @pattern ^[0-9]+$
         */
        taskId: string;
        /** LinkFox AI request trace ID. */
        traceId?: string;
      };
    };
    /** Edit an existing video using a prompt and optional reference images. */
    "linkfox_ai.submit_video_editing": {
      input: {
        /**
         * Public URL of the video to edit.
         * @minLength 1
         * @pattern \S
         */
        sourceVideoUrl: string;
        /**
         * Public model code returned by list_video_models.
         * @minLength 1
         * @pattern \S
         */
        model: string;
        /**
         * Instructions for generating or editing the video.
         * @minLength 1
         * @pattern \S
         */
        prompt: string;
        /**
         * Output duration in seconds, or -1 to follow the source duration on supported models.
         * @minimum -1
         */
        duration?: number;
        /** Reference images for the selected model. */
        referenceImageUrls?: Array<string>;
        /** Whether to use allowlisted media library assets. */
        useAssetWhitelist?: boolean;
      };
      output: {
        /**
         * Task ID as an exact decimal string.
         * @pattern ^[0-9]+$
         */
        taskId: string;
        /** LinkFox AI request trace ID. */
        traceId?: string;
      };
    };
    /** Generate a video from a prompt and optional reference media. */
    "linkfox_ai.submit_video_generation": {
      input: {
        /**
         * Public model code returned by list_video_models.
         * @minLength 1
         * @pattern \S
         */
        model: string;
        /**
         * Instructions for generating or editing the video.
         * @minLength 1
         * @pattern \S
         */
        prompt: string;
        /** Requested video duration in seconds. */
        duration?: number;
        /** Output resolution supported by the model. */
        resolution?: string;
        /** Output aspect ratio supported by the model. */
        aspectRatio?: string;
        /**
         * Public URL of the opening frame.
         * @minLength 1
         * @pattern \S
         */
        firstFrameImageUrl?: string;
        /**
         * Public URL of the closing frame.
         * @minLength 1
         * @pattern \S
         */
        lastFrameImageUrl?: string;
        /** Reference images for the selected model. */
        referenceImageUrls?: Array<string>;
        /** Reference videos for the selected model. */
        referenceVideoUrls?: Array<string>;
        /** Whether to enable sound on models with an audio switch. */
        voice?: boolean;
        /** Whether LinkFox AI should optimize the prompt. */
        promptOptimizer?: boolean;
        /** Whether to use allowlisted media library assets. */
        useAssetWhitelist?: boolean;
        /** Reference audio for the selected model. */
        referenceAudioUrls?: Array<string>;
      };
      output: {
        /**
         * Task ID as an exact decimal string.
         * @pattern ^[0-9]+$
         */
        taskId: string;
        /** LinkFox AI request trace ID. */
        traceId?: string;
      };
    };
  }
}
