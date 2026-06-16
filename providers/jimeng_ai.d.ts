import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get the result of a Jimeng AI Image Generation 4.0 async task. */
    "jimeng_ai.get_image_generation_4_0_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** Visible watermark configuration sent to Jimeng. */
        logo_info?: {
          /** Whether Jimeng should add a visible watermark. */
          add_logo?: boolean;
          /**
           * The watermark position: 0 bottom-right, 1 bottom-left, 2 top-left, 3 top-right.
           * @minimum 0
           * @maximum 3
           */
          position?: number;
          /**
           * The watermark language: 0 Chinese, 1 English.
           * @minimum 0
           * @maximum 1
           */
          language?: number;
          /**
           * The visible watermark opacity between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          opacity?: number;
          /** Custom visible watermark text content. */
          logo_text_content?: string;
        };
        /** AIGC metadata configuration embedded in generated content. */
        aigc_meta?: {
          /** The content generation service ID. */
          content_producer?: string;
          /**
           * The producer-specific generated image identifier.
           * @minLength 1
           */
          producer_id: string;
          /** The content propagation service ID. */
          content_propagator?: string;
          /** The propagator-specific generated image ID. */
          propagate_id?: string;
        };
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated image URLs returned by Jimeng. */
        image_urls: Array<string>;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Jimeng AI Image Generation 4.6 async task. */
    "jimeng_ai.get_image_generation_4_6_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** Visible watermark configuration sent to Jimeng. */
        logo_info?: {
          /** Whether Jimeng should add a visible watermark. */
          add_logo?: boolean;
          /**
           * The watermark position: 0 bottom-right, 1 bottom-left, 2 top-left, 3 top-right.
           * @minimum 0
           * @maximum 3
           */
          position?: number;
          /**
           * The watermark language: 0 Chinese, 1 English.
           * @minimum 0
           * @maximum 1
           */
          language?: number;
          /**
           * The visible watermark opacity between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          opacity?: number;
          /** Custom visible watermark text content. */
          logo_text_content?: string;
        };
        /** AIGC metadata configuration embedded in generated content. */
        aigc_meta?: {
          /** The content generation service ID. */
          content_producer?: string;
          /**
           * The producer-specific generated image identifier.
           * @minLength 1
           */
          producer_id: string;
          /** The content propagation service ID. */
          content_propagator?: string;
          /** The propagator-specific generated image ID. */
          propagate_id?: string;
        };
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated image URLs returned by Jimeng. */
        image_urls: Array<string>;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Lilinque Marketing Video Agent async task. */
    "jimeng_ai.get_marketing_video_agent_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated video URL returned by Jimeng. */
        video_url?: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Jimeng AI Smart Upscale async task. */
    "jimeng_ai.get_smart_upscale_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** Visible watermark configuration sent to Jimeng. */
        logo_info?: {
          /** Whether Jimeng should add a visible watermark. */
          add_logo?: boolean;
          /**
           * The watermark position: 0 bottom-right, 1 bottom-left, 2 top-left, 3 top-right.
           * @minimum 0
           * @maximum 3
           */
          position?: number;
          /**
           * The watermark language: 0 Chinese, 1 English.
           * @minimum 0
           * @maximum 1
           */
          language?: number;
          /**
           * The visible watermark opacity between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          opacity?: number;
          /** Custom visible watermark text content. */
          logo_text_content?: string;
        };
        /** AIGC metadata configuration embedded in generated content. */
        aigc_meta?: {
          /** The content generation service ID. */
          content_producer?: string;
          /**
           * The producer-specific generated image identifier.
           * @minLength 1
           */
          producer_id: string;
          /** The content propagation service ID. */
          content_propagator?: string;
          /** The propagator-specific generated image ID. */
          propagate_id?: string;
        };
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated image URLs returned by Jimeng. */
        image_urls: Array<string>;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Lilinque Smart Video Agent 1.0 async task. */
    "jimeng_ai.get_smart_video_agent_1_0_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated video URL returned by Jimeng. */
        video_url?: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Lilinque Smart Video Agent 2.0 async task with reference videos. */
    "jimeng_ai.get_smart_video_agent_2_0_with_reference_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated video URL returned by Jimeng. */
        video_url?: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Lilinque Smart Video Agent 2.0 async task without reference videos. */
    "jimeng_ai.get_smart_video_agent_2_0_without_reference_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated video URL returned by Jimeng. */
        video_url?: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Jimeng Text-to-Image 3.0 async task. */
    "jimeng_ai.get_text_to_image_3_0_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** Visible watermark configuration sent to Jimeng. */
        logo_info?: {
          /** Whether Jimeng should add a visible watermark. */
          add_logo?: boolean;
          /**
           * The watermark position: 0 bottom-right, 1 bottom-left, 2 top-left, 3 top-right.
           * @minimum 0
           * @maximum 3
           */
          position?: number;
          /**
           * The watermark language: 0 Chinese, 1 English.
           * @minimum 0
           * @maximum 1
           */
          language?: number;
          /**
           * The visible watermark opacity between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          opacity?: number;
          /** Custom visible watermark text content. */
          logo_text_content?: string;
        };
        /** AIGC metadata configuration embedded in generated content. */
        aigc_meta?: {
          /** The content generation service ID. */
          content_producer?: string;
          /**
           * The producer-specific generated image identifier.
           * @minLength 1
           */
          producer_id: string;
          /** The content propagation service ID. */
          content_propagator?: string;
          /** The propagator-specific generated image ID. */
          propagate_id?: string;
        };
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated image URLs returned by Jimeng. */
        image_urls: Array<string>;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Jimeng Text-to-Image 3.1 async task. */
    "jimeng_ai.get_text_to_image_3_1_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** Visible watermark configuration sent to Jimeng. */
        logo_info?: {
          /** Whether Jimeng should add a visible watermark. */
          add_logo?: boolean;
          /**
           * The watermark position: 0 bottom-right, 1 bottom-left, 2 top-left, 3 top-right.
           * @minimum 0
           * @maximum 3
           */
          position?: number;
          /**
           * The watermark language: 0 Chinese, 1 English.
           * @minimum 0
           * @maximum 1
           */
          language?: number;
          /**
           * The visible watermark opacity between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          opacity?: number;
          /** Custom visible watermark text content. */
          logo_text_content?: string;
        };
        /** AIGC metadata configuration embedded in generated content. */
        aigc_meta?: {
          /** The content generation service ID. */
          content_producer?: string;
          /**
           * The producer-specific generated image identifier.
           * @minLength 1
           */
          producer_id: string;
          /** The content propagation service ID. */
          content_propagator?: string;
          /** The propagator-specific generated image ID. */
          propagate_id?: string;
        };
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated image URLs returned by Jimeng. */
        image_urls: Array<string>;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Jimeng AI Video Generation 3.0 1080P async task. */
    "jimeng_ai.get_video_generation_3_0_1080p_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated video URL returned by Jimeng. */
        video_url?: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Jimeng AI Video Generation 3.0 720P async task. */
    "jimeng_ai.get_video_generation_3_0_720p_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated video URL returned by Jimeng. */
        video_url?: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Get the result of a Jimeng AI Video Generation 3.0 Pro async task. */
    "jimeng_ai.get_video_generation_3_0_pro_result": {
      input: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Jimeng task status. */
        status: string;
        /** Whether the Jimeng task has reached the done status. */
        is_done: boolean;
        /** The generated video URL returned by Jimeng. */
        video_url?: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Image Generation 4.0 async task. */
    "jimeng_ai.submit_image_generation_4_0": {
      input: {
        /**
         * Reference image URLs. Jimeng accepts up to 10 images.
         * @maxItems 10
         */
        image_urls?: Array<string>;
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * The target output image area in pixels.
         * @minimum 1048576
         * @maximum 16777216
         */
        size?: number;
        /**
         * The output image width in pixels.
         * @exclusiveMinimum 0
         */
        width?: number;
        /**
         * The output image height in pixels.
         * @exclusiveMinimum 0
         */
        height?: number;
        /**
         * The prompt influence strength between 0 and 1.
         * @minimum 0
         * @maximum 1
         */
        scale?: number;
        /** Whether Jimeng should force a single-image result. */
        force_single?: boolean;
        /**
         * The minimum output width-to-height ratio.
         * @minimum 0.0625
         * @exclusiveMaximum 16
         */
        min_ratio?: number;
        /**
         * The maximum output width-to-height ratio.
         * @minimum 0.0625
         * @exclusiveMaximum 16
         */
        max_ratio?: number;
        /**
         * A public callback URL Jimeng should call when the async task completes.
         * @format uri
         */
        callback_url?: string;
        /** Whether callback payloads should return image URLs. */
        return_url?: boolean;
        /** Visible watermark configuration sent to Jimeng. */
        logo_info?: {
          /** Whether Jimeng should add a visible watermark. */
          add_logo?: boolean;
          /**
           * The watermark position: 0 bottom-right, 1 bottom-left, 2 top-left, 3 top-right.
           * @minimum 0
           * @maximum 3
           */
          position?: number;
          /**
           * The watermark language: 0 Chinese, 1 English.
           * @minimum 0
           * @maximum 1
           */
          language?: number;
          /**
           * The visible watermark opacity between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          opacity?: number;
          /** Custom visible watermark text content. */
          logo_text_content?: string;
        };
        /** AIGC metadata configuration embedded in generated content. */
        aigc_meta?: {
          /** The content generation service ID. */
          content_producer?: string;
          /**
           * The producer-specific generated image identifier.
           * @minLength 1
           */
          producer_id: string;
          /** The content propagation service ID. */
          content_propagator?: string;
          /** The propagator-specific generated image ID. */
          propagate_id?: string;
        };
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Image Generation 4.6 async task. */
    "jimeng_ai.submit_image_generation_4_6": {
      input: {
        /**
         * Reference image URLs. Jimeng accepts up to 14 images.
         * @maxItems 14
         */
        image_urls?: Array<string>;
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * The target output image area in pixels.
         * @minimum 1048576
         * @maximum 16777216
         */
        size?: number;
        /**
         * The output image width in pixels.
         * @exclusiveMinimum 0
         */
        width?: number;
        /**
         * The output image height in pixels.
         * @exclusiveMinimum 0
         */
        height?: number;
        /**
         * The prompt influence strength between 1 and 100.
         * @minimum 1
         * @maximum 100
         */
        scale?: number;
        /** Whether Jimeng should force a single-image result. */
        force_single?: boolean;
        /**
         * The minimum output width-to-height ratio.
         * @minimum 0.0625
         * @exclusiveMaximum 16
         */
        min_ratio?: number;
        /**
         * The maximum output width-to-height ratio.
         * @maximum 16
         * @exclusiveMinimum 0.0625
         */
        max_ratio?: number;
        /**
         * A public callback URL Jimeng should call when the async task completes.
         * @format uri
         */
        callback_url?: string;
        /** Whether callback payloads should return image URLs. */
        return_url?: boolean;
        /** Visible watermark configuration sent to Jimeng. */
        logo_info?: {
          /** Whether Jimeng should add a visible watermark. */
          add_logo?: boolean;
          /**
           * The watermark position: 0 bottom-right, 1 bottom-left, 2 top-left, 3 top-right.
           * @minimum 0
           * @maximum 3
           */
          position?: number;
          /**
           * The watermark language: 0 Chinese, 1 English.
           * @minimum 0
           * @maximum 1
           */
          language?: number;
          /**
           * The visible watermark opacity between 0 and 1.
           * @minimum 0
           * @maximum 1
           */
          opacity?: number;
          /** Custom visible watermark text content. */
          logo_text_content?: string;
        };
        /** AIGC metadata configuration embedded in generated content. */
        aigc_meta?: {
          /** The content generation service ID. */
          content_producer?: string;
          /**
           * The producer-specific generated image identifier.
           * @minLength 1
           */
          producer_id: string;
          /** The content propagation service ID. */
          content_propagator?: string;
          /** The propagator-specific generated image ID. */
          propagate_id?: string;
        };
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Video Generation 3.0 1080P image-to-video first-frame async task. */
    "jimeng_ai.submit_image_to_video_first_frame_3_0_1080p": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * The random seed. Use -1 or omit it for a random seed.
         * @minimum -1
         */
        seed?: number;
        /** The supported frame count option. */
        frames?: 121 | 241;
        /** The output video aspect ratio. */
        aspect_ratio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9";
        /**
         * First frame image URL. Jimeng accepts exactly one public JPEG or PNG image URL.
         * @minItems 1
         * @maxItems 1
         */
        image_urls?: Array<string>;
        [key: string]: unknown;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Video Generation 3.0 720P image-to-video first-frame async task. */
    "jimeng_ai.submit_image_to_video_first_frame_3_0_720p": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * The random seed. Use -1 or omit it for a random seed.
         * @minimum -1
         */
        seed?: number;
        /** The supported frame count option. */
        frames?: 121 | 241;
        /** The output video aspect ratio. */
        aspect_ratio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9";
        /**
         * First frame image URL. Jimeng accepts exactly one public JPEG or PNG image URL.
         * @minItems 1
         * @maxItems 1
         */
        image_urls?: Array<string>;
        [key: string]: unknown;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Video Generation 3.0 1080P image-to-video first-and-last-frame async task. */
    "jimeng_ai.submit_image_to_video_first_tail_frame_3_0_1080p": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * The random seed. Use -1 or omit it for a random seed.
         * @minimum -1
         */
        seed?: number;
        /** The supported frame count option. */
        frames?: 121 | 241;
        /** The output video aspect ratio. */
        aspect_ratio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9";
        /**
         * First and last frame image URLs, in that order. Jimeng accepts exactly two public JPEG or PNG image URLs.
         * @minItems 2
         * @maxItems 2
         */
        image_urls?: Array<string>;
        [key: string]: unknown;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Video Generation 3.0 720P image-to-video first-and-last-frame async task. */
    "jimeng_ai.submit_image_to_video_first_tail_frame_3_0_720p": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * The random seed. Use -1 or omit it for a random seed.
         * @minimum -1
         */
        seed?: number;
        /** The supported frame count option. */
        frames?: 121 | 241;
        /** The output video aspect ratio. */
        aspect_ratio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9";
        /**
         * First and last frame image URLs, in that order. Jimeng accepts exactly two public JPEG or PNG image URLs.
         * @minItems 2
         * @maxItems 2
         */
        image_urls?: Array<string>;
        [key: string]: unknown;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Lilinque Marketing Video Agent async task. */
    "jimeng_ai.submit_marketing_video_agent": {
      input: {
        /**
         * The product name used to generate the marketing video.
         * @minLength 1
         */
        product_name: string;
        /**
         * Product image URLs. Jimeng accepts exactly one product image.
         * @minItems 1
         * @maxItems 1
         */
        product_img_url_list: Array<string>;
        /**
         * Optional model image URLs. Jimeng accepts exactly one model image.
         * @minItems 1
         * @maxItems 1
         */
        model_img_url_list?: Array<string>;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Smart Upscale async task. */
    "jimeng_ai.submit_smart_upscale": {
      input: {
        /**
         * A public JPEG or PNG image URL.
         * @format uri
         */
        image_url: string;
        /** The target upscale resolution. */
        resolution?: "4k" | "8k";
        /**
         * The detail generation strength between 0 and 100.
         * @minimum 0
         * @maximum 100
         */
        scale?: number;
        [key: string]: unknown;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Lilinque Smart Video Agent 1.0 async task. */
    "jimeng_ai.submit_smart_video_agent_1_0": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * Reference image URLs for the video generation agent.
         * @maxItems 50
         */
        img_url_list?: Array<string>;
        /**
         * Reference video URLs for the video generation agent.
         * @maxItems 50
         */
        video_url_list?: Array<string>;
        /** The desired video duration preset. */
        duration?: "～15s" | "～30s" | "40～60s";
        /** The output video ratio preset. */
        ratio?: "16:9" | "9:16" | "4:3" | "3:4";
        /** The generated language preset. */
        language?: "Chinese" | "English" | "Japanese" | "Thai" | "SouthAfrican" | "French" | "Turkish" | "Malay" | "German" | "Korean" | "Russian" | "Spanish" | "Indonesian" | "Italian" | "Portuguese" | "Filipino" | "Vietnamese" | "Dutch" | "Arabic";
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Lilinque Smart Video Agent 2.0 async task with reference videos. */
    "jimeng_ai.submit_smart_video_agent_2_0_with_reference": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * Reference image URLs for the video generation agent.
         * @maxItems 50
         */
        img_url_list?: Array<string>;
        /**
         * Reference video URLs for the video generation agent.
         * @maxItems 50
         */
        video_url_list?: Array<string>;
        /** The desired video duration preset. */
        duration?: "～15s" | "～30s" | "40～60s";
        /** The output video ratio preset. */
        ratio?: "16:9" | "9:16" | "4:3" | "3:4";
        /** The generated language preset. */
        language?: "Chinese" | "English" | "Japanese" | "Thai" | "SouthAfrican" | "French" | "Turkish" | "Malay" | "German" | "Korean" | "Russian" | "Spanish" | "Indonesian" | "Italian" | "Portuguese" | "Filipino" | "Vietnamese" | "Dutch" | "Arabic";
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Lilinque Smart Video Agent 2.0 async task without reference videos. */
    "jimeng_ai.submit_smart_video_agent_2_0_without_reference": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * Reference image URLs for the video generation agent.
         * @maxItems 50
         */
        img_url_list?: Array<string>;
        /** The desired video duration preset. */
        duration?: "～15s" | "～30s" | "40～60s";
        /** The output video ratio preset. */
        ratio?: "16:9" | "9:16" | "4:3" | "3:4";
        /** The generated language preset. */
        language?: "Chinese" | "English" | "Japanese" | "Thai" | "SouthAfrican" | "French" | "Turkish" | "Malay" | "German" | "Korean" | "Russian" | "Spanish" | "Indonesian" | "Italian" | "Portuguese" | "Filipino" | "Vietnamese" | "Dutch" | "Arabic";
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng Text-to-Image 3.0 async task. */
    "jimeng_ai.submit_text_to_image_3_0": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /** Whether Jimeng should expand and optimize the prompt before generation. */
        use_pre_llm?: boolean;
        /**
         * The random seed. Use -1 or omit it for a random seed.
         * @minimum -1
         */
        seed?: number;
        /**
         * The output image width in pixels.
         * @exclusiveMinimum 0
         */
        width?: number;
        /**
         * The output image height in pixels.
         * @exclusiveMinimum 0
         */
        height?: number;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng Text-to-Image 3.1 async task. */
    "jimeng_ai.submit_text_to_image_3_1": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /** Whether Jimeng should expand and optimize the prompt before generation. */
        use_pre_llm?: boolean;
        /**
         * The random seed. Use -1 or omit it for a random seed.
         * @minimum -1
         */
        seed?: number;
        /**
         * The output image width in pixels.
         * @exclusiveMinimum 0
         */
        width?: number;
        /**
         * The output image height in pixels.
         * @exclusiveMinimum 0
         */
        height?: number;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Video Generation 3.0 1080P async task. */
    "jimeng_ai.submit_video_generation_3_0_1080p": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * The random seed. Use -1 or omit it for a random seed.
         * @minimum -1
         */
        seed?: number;
        /** The supported frame count option. */
        frames?: 121 | 241;
        /** The output video aspect ratio. */
        aspect_ratio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9";
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Video Generation 3.0 720P async task. */
    "jimeng_ai.submit_video_generation_3_0_720p": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt: string;
        /**
         * The random seed. Use -1 or omit it for a random seed.
         * @minimum -1
         */
        seed?: number;
        /** The supported frame count option. */
        frames?: 121 | 241;
        /** The output video aspect ratio. */
        aspect_ratio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9";
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
    /** Submit a Jimeng AI Video Generation 3.0 Pro async task. */
    "jimeng_ai.submit_video_generation_3_0_pro": {
      input: {
        /**
         * The prompt used to generate or edit content.
         * @minLength 1
         * @maxLength 800
         */
        prompt?: string;
        /**
         * The random seed. Use -1 or omit it for a random seed.
         * @minimum -1
         */
        seed?: number;
        /** The supported frame count option. */
        frames?: 121 | 241;
        /** The output video aspect ratio. */
        aspect_ratio?: "16:9" | "4:3" | "1:1" | "3:4" | "9:16" | "21:9";
        /**
         * Reference image URLs. Jimeng accepts exactly one image URL.
         * @minItems 1
         * @maxItems 1
         */
        image_urls?: Array<string>;
        [key: string]: unknown;
      };
      output: {
        /**
         * The Jimeng async task identifier.
         * @minLength 1
         */
        task_id: string;
        /** The Volcengine request identifier. */
        request_id?: string;
        /** The upstream response message. */
        message?: string;
        /** The upstream request processing time. */
        time_elapsed?: string;
        /** The raw upstream response payload. */
        raw?: Record<string, unknown>;
      };
    };
  }
}
