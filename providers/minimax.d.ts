import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a non-streaming MiniMax response using the OpenAI Responses API shape. */
    "minimax.create_response": {
      input: {
        /**
         * MiniMax model name to invoke, for example MiniMax-M3.
         * @minLength 1
         */
        model: string;
        /** MiniMax Responses API text or conversation input. */
        input: string | Array<{
          /** Message item type. Omit it or set it to message. */
          type?: "message";
          /** Message role. */
          role: "user" | "assistant" | "system" | "developer" | "tool";
          /**
           * Text content for the message.
           * @minLength 1
           */
          content: string;
        } | {
          /** Function call item type. */
          type: "function_call";
          /**
           * Tool call identifier.
           * @minLength 1
           */
          call_id: string;
          /**
           * Function name.
           * @minLength 1
           */
          name: string;
          /**
           * Function arguments encoded as a JSON string.
           * @minLength 1
           */
          arguments: string;
        } | {
          /** Function call output item type. */
          type: "function_call_output";
          /**
           * Tool call identifier.
           * @minLength 1
           */
          call_id: string;
          /**
           * Tool output text.
           * @minLength 1
           */
          output: string;
        } | {
          /** Reasoning input item type. */
          type: "reasoning";
          /**
           * Reasoning summary items to include in conversation history.
           * @minItems 1
           */
          summary: Array<{
            /** Reasoning summary item type. */
            type: "summary_text";
            /**
             * Reasoning summary text.
             * @minLength 1
             */
            text: string;
          }>;
        }>;
        /** System instructions for the response. */
        instructions?: string;
        /**
         * Maximum output token count.
         * @minimum 1
         */
        max_output_tokens?: number;
        /**
         * Sampling temperature in the official range [0, 1].
         * @minimum 0
         * @maximum 1
         */
        temperature?: number;
        /**
         * Nucleus sampling value in the official range [0, 1].
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** MiniMax service tier for request admission. */
        service_tier?: "standard" | "priority";
        /**
         * Function tools available to MiniMax.
         * @minItems 1
         */
        tools?: Array<{
          /** Tool type. MiniMax currently supports function tools. */
          type: "function";
          /**
           * Function tool name.
           * @minLength 1
           */
          name: string;
          /** Human-readable function tool description. */
          description?: string;
          /** JSON Schema parameters for the function tool. */
          parameters?: Record<string, unknown>;
        }>;
        /** Tool selection strategy. */
        tool_choice?: "none" | "auto";
        /** String metadata to attach to the MiniMax request. */
        metadata?: Record<string, string>;
        /** Prompt cache routing identifier. */
        prompt_cache_key?: string;
        /** Set to false for the non-streaming connector action. */
        stream?: false;
        /** MiniMax output text format control. */
        text?: {
          /** MiniMax response text format. */
          format?: {
            /** Plain text output format. */
            type?: "text";
          };
        };
        /** MiniMax reasoning control. MiniMax-M3 defaults to none when omitted. */
        reasoning?: {
          /** Reasoning effort value. */
          effort?: "minimal" | "low" | "medium" | "high" | "none";
        };
      };
      output: {
        /** MiniMax response identifier. */
        id: string;
        /** Object type returned by MiniMax, usually response. */
        object: string;
        /** Response creation time as Unix seconds. */
        created_at: number;
        /** MiniMax model that processed the request. */
        model: string;
        /** MiniMax response status. */
        status: "completed" | "incomplete" | "failed";
        /** MiniMax response output items. */
        output: Array<Record<string, unknown>>;
        /** Concatenated response text returned by MiniMax. */
        output_text?: string | null;
        /** MiniMax usage object with token counts and details. */
        usage?: Record<string, unknown>;
        /** MiniMax response error object. */
        error?: {
          /** MiniMax error code. */
          code?: string;
          /** Human-readable MiniMax error message. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** MiniMax incomplete response details. */
        incomplete_details?: {
          /** Reason MiniMax marked the response incomplete. */
          reason?: string;
          [key: string]: unknown;
        } | null;
        /** Whether MiniMax can run tool calls in parallel. */
        parallel_tool_calls?: boolean;
        /** Whether MiniMax stored the response. */
        store?: boolean;
        /** MiniMax truncation mode used for the response. */
        truncation?: string;
        [key: string]: unknown;
      };
    };
    /** Create a MiniMax H3 video generation task with text, image, video, or audio content. */
    "minimax.create_video_generation_v2": {
      input: {
        /** MiniMax H3 video generation model. */
        model: "MiniMax-H3";
        /**
         * Ordered text, image, video, or audio content for generation.
         * @minItems 1
         */
        content: Array<{
          /** Text content item type. */
          type: "text";
          /**
           * Text prompt content.
           * @minLength 1
           * @maxLength 7000
           * @pattern \S
           */
          text: string;
        } | {
          /** Image content item type. */
          type: "image_url";
          /** Image input location. */
          image_url: {
            /**
             * Public URL, MiniMax file URI, or image data URI.
             * @minLength 1
             */
            url: string;
          };
          /** Image purpose in the generated video. */
          role?: "first_frame" | "last_frame" | "reference_image";
        } | {
          /** Video content item type. */
          type: "video_url";
          /** Reference video location. */
          video_url: {
            /**
             * Public URL, MiniMax file URI, or video data URI.
             * @minLength 1
             */
            url: string;
          };
          /** Reference video content role. */
          role: "reference_video";
        } | {
          /** Audio content item type. */
          type: "audio_url";
          /** Reference audio location. */
          audio_url: {
            /**
             * Public URL, MiniMax file URI, or audio data URI.
             * @minLength 1
             */
            url: string;
          };
          /** Reference audio content role. */
          role: "reference_audio";
        }>;
        /**
         * Generated video resolution.
         * @default "2K"
         */
        resolution: "768P" | "2K";
        /**
         * Generated video duration in seconds.
         * @minimum 4
         * @maximum 15
         */
        duration: number;
        /**
         * Generated video aspect ratio.
         * @default "adaptive"
         */
        ratio?: "adaptive" | "21:9" | "16:9" | "4:3" | "1:1" | "3:4" | "9:16";
        /**
         * URL MiniMax calls with asynchronous task status updates.
         * @format uri
         */
        callback_url?: string;
      };
      output: {
        /** Identifier of the asynchronous MiniMax H3 video generation task. */
        task_id: string;
        [key: string]: unknown;
      };
    };
    /** Delete a MiniMax H3 video generation task. */
    "minimax.delete_video_generation_v2": {
      input: {
        /**
         * Identifier of the MiniMax video generation task to delete.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** Identifier of the deleted MiniMax H3 video generation task. */
        task_id: string;
        /** Deletion action name. */
        action: "cancel" | "delete";
        /** Deletion status. */
        status: string;
        [key: string]: unknown;
      };
    };
    /** Download a generated MiniMax video and store it in connector transit storage. */
    "minimax.download_video": {
      input: {
        /**
         * The generated MiniMax video file identifier.
         * @minLength 1
         */
        file_id: string;
      };
      output: {
        /** The upstream MiniMax file identifier. */
        fileId: string;
        /** The generated video file name. */
        name: string;
        /** The MIME type used for the transit upload. */
        mimeType: string;
        /** The generated video size in bytes. */
        sizeBytes: number | null;
        /**
         * The transit URL where the generated video was stored.
         * @format uri
         */
        transitUrl: string;
      };
    };
    /** Estimate MiniMax response input tokens without invoking the model. */
    "minimax.estimate_input_tokens": {
      input: {
        /**
         * MiniMax model name to estimate against, for example MiniMax-M3.
         * @minLength 1
         */
        model: string;
        /** MiniMax Responses API text or conversation input. */
        input: string | Array<{
          /** Message item type. Omit it or set it to message. */
          type?: "message";
          /** Message role. */
          role: "user" | "assistant" | "system" | "developer" | "tool";
          /**
           * Text content for the message.
           * @minLength 1
           */
          content: string;
        } | {
          /** Function call item type. */
          type: "function_call";
          /**
           * Tool call identifier.
           * @minLength 1
           */
          call_id: string;
          /**
           * Function name.
           * @minLength 1
           */
          name: string;
          /**
           * Function arguments encoded as a JSON string.
           * @minLength 1
           */
          arguments: string;
        } | {
          /** Function call output item type. */
          type: "function_call_output";
          /**
           * Tool call identifier.
           * @minLength 1
           */
          call_id: string;
          /**
           * Tool output text.
           * @minLength 1
           */
          output: string;
        } | {
          /** Reasoning input item type. */
          type: "reasoning";
          /**
           * Reasoning summary items to include in conversation history.
           * @minItems 1
           */
          summary: Array<{
            /** Reasoning summary item type. */
            type: "summary_text";
            /**
             * Reasoning summary text.
             * @minLength 1
             */
            text: string;
          }>;
        }>;
        /** System instructions included in the estimate. */
        instructions?: string;
        /**
         * Function tools included in the estimate.
         * @minItems 1
         */
        tools?: Array<{
          /** Tool type. MiniMax currently supports function tools. */
          type: "function";
          /**
           * Function tool name.
           * @minLength 1
           */
          name: string;
          /** Human-readable function tool description. */
          description?: string;
          /** JSON Schema parameters for the function tool. */
          parameters?: Record<string, unknown>;
        }>;
        /** Tool selection strategy. */
        tool_choice?: "none" | "auto";
        /** MiniMax output text format control. */
        text?: {
          /** MiniMax response text format. */
          format?: {
            /** Plain text output format. */
            type?: "text";
          };
        };
        /** MiniMax reasoning control. MiniMax-M3 defaults to none when omitted. */
        reasoning?: {
          /** Reasoning effort value. */
          effort?: "minimal" | "low" | "medium" | "high" | "none";
        };
      };
      output: {
        /** Object type returned by MiniMax, usually response.input_tokens. */
        object: string;
        /** Estimated input token count. */
        input_tokens: number;
        [key: string]: unknown;
      };
    };
    /** Create a MiniMax asynchronous image-to-video task from a public URL or data URI first frame. */
    "minimax.image_to_video": {
      input: {
        /** The MiniMax image-to-video model. */
        model: "MiniMax-Hailuo-2.3" | "MiniMax-Hailuo-2.3-Fast" | "MiniMax-Hailuo-02" | "I2V-01-Director" | "I2V-01-live" | "I2V-01";
        /**
         * The first frame image as a public HTTPS URL or data URI.
         * @minLength 1
         */
        first_frame_image: string;
        /** Optional text guidance for the generated video. */
        prompt?: string;
        /** Whether MiniMax may optimize the prompt. */
        prompt_optimizer?: boolean;
        /** Whether MiniMax applies fast pre-processing. */
        fast_pretreatment?: boolean;
        /** The generated video length in seconds. */
        duration?: 6 | 10;
        /** The output video resolution. */
        resolution?: "512P" | "720P" | "768P" | "1080P";
        /**
         * A public callback URL for task status updates.
         * @format uri
         */
        callback_url?: string;
      };
      output: {
        /** The asynchronous MiniMax video task identifier. */
        task_id?: string;
        /** MiniMax base response wrapper. */
        base_resp?: {
          /** MiniMax status code where 0 indicates success. */
          status_code?: number;
          /** Human-readable MiniMax status message. */
          status_msg?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List OpenAI-compatible MiniMax models available to the API key. */
    "minimax.list_models": {
      input: Record<string, never>;
      output: {
        /** Object type returned by MiniMax, usually list. */
        object: string;
        /** MiniMax models returned by the API. */
        data: Array<{
          /** MiniMax model identifier. */
          id: string;
          /** Object type returned by MiniMax, usually model. */
          object?: string;
          /** Unix timestamp when MiniMax created the model. */
          created?: number;
          /** Organization that owns the model. */
          owned_by?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List MiniMax H3 video generation tasks. */
    "minimax.list_video_generation_v2": {
      input: {
        /**
         * Page number to retrieve.
         * @minimum 1
         */
        page_num?: number;
        /**
         * Number of tasks to retrieve per page.
         * @minimum 1
         */
        page_size?: number;
        /** Optional MiniMax H3 video task filters. */
        filter?: {
          /** Task status filter. */
          status?: "queued" | "running" | "succeeded" | "failed" | "cancelled" | "expired";
          /**
           * Task identifiers to include.
           * @minItems 1
           */
          task_ids?: Array<string>;
          /** MiniMax H3 video generation model. */
          model?: "MiniMax-H3";
          /** Task type filter. */
          task_type?: string;
        };
      };
      output: {
        /** MiniMax H3 video tasks. */
        items: Array<{
          /** MiniMax H3 video task identifier. */
          id?: string;
          /** MiniMax model that processed the task. */
          model?: string;
          /** Current task status. */
          status?: "queued" | "running" | "succeeded" | "failed" | "cancelled" | "expired";
          /** Task error details when generation fails. */
          error?: Record<string, unknown>;
          /** Unix timestamp when MiniMax created the task. */
          created_at?: number;
          /** Unix timestamp when MiniMax last updated the task. */
          updated_at?: number;
          /** Generated video content. */
          content?: {
            /** Generated video URL. */
            url: string;
            [key: string]: unknown;
          };
          /** Generated video resolution. */
          resolution?: string;
          /** Generated video duration in seconds. */
          duration?: number;
          /** MiniMax H3 video usage details. */
          usage?: Record<string, unknown>;
          /** Generated video aspect ratio. */
          ratio?: string;
          /** MiniMax H3 video task type. */
          task_type?: string;
          [key: string]: unknown;
        }>;
        /** Total matching MiniMax H3 video task count. */
        total: number;
        [key: string]: unknown;
      };
    };
    /** Query a MiniMax video generation task and return its status and file identifier. */
    "minimax.query_video_generation": {
      input: {
        /**
         * The MiniMax video task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** The queried MiniMax video task identifier. */
        task_id?: string;
        /** Current task status, such as Preparing, Queueing, Processing, Success, or Fail. */
        status?: string;
        /** The generated video file identifier, present after success. */
        file_id?: string;
        /** A generated MiniMax video stored in transit storage. */
        file?: {
          /** The upstream MiniMax file identifier. */
          fileId: string;
          /** The generated video file name. */
          name: string;
          /** The MIME type used for the transit upload. */
          mimeType: string;
          /** The generated video size in bytes. */
          sizeBytes: number | null;
          /**
           * The transit URL where the generated video was stored.
           * @format uri
           */
          transitUrl: string;
        } | null;
        /** MiniMax base response wrapper. */
        base_resp?: {
          /** MiniMax status code where 0 indicates success. */
          status_code?: number;
          /** Human-readable MiniMax status message. */
          status_msg?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Query a MiniMax H3 video generation task. */
    "minimax.query_video_generation_v2": {
      input: {
        /**
         * Identifier of the MiniMax video generation task to query.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** MiniMax H3 video generation task response. */
        task: {
          /** MiniMax H3 video task identifier. */
          id?: string;
          /** MiniMax model that processed the task. */
          model?: string;
          /** Current task status. */
          status?: "queued" | "running" | "succeeded" | "failed" | "cancelled" | "expired";
          /** Task error details when generation fails. */
          error?: Record<string, unknown>;
          /** Unix timestamp when MiniMax created the task. */
          created_at?: number;
          /** Unix timestamp when MiniMax last updated the task. */
          updated_at?: number;
          /** Generated video content. */
          content?: {
            /** Generated video URL. */
            url: string;
            [key: string]: unknown;
          };
          /** Generated video resolution. */
          resolution?: string;
          /** Generated video duration in seconds. */
          duration?: number;
          /** MiniMax H3 video usage details. */
          usage?: Record<string, unknown>;
          /** Generated video aspect ratio. */
          ratio?: string;
          /** MiniMax H3 video task type. */
          task_type?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Retrieve OpenAI-compatible metadata for one MiniMax model. */
    "minimax.retrieve_model": {
      input: {
        /**
         * MiniMax model identifier to retrieve.
         * @minLength 1
         */
        modelId: string;
      };
      output: {
        /** MiniMax model identifier. */
        id: string;
        /** Object type returned by MiniMax, usually model. */
        object?: string;
        /** Unix timestamp when MiniMax created the model. */
        created?: number;
        /** Organization that owns the model. */
        owned_by?: string;
        [key: string]: unknown;
      };
    };
    /** Create a MiniMax asynchronous text-to-video generation task. */
    "minimax.text_to_video": {
      input: {
        /** The MiniMax text-to-video model. */
        model: "MiniMax-Hailuo-2.3" | "MiniMax-Hailuo-02" | "T2V-01-Director" | "T2V-01";
        /**
         * The text description of the video to generate.
         * @minLength 1
         */
        prompt: string;
        /** Whether MiniMax may optimize the prompt. */
        prompt_optimizer?: boolean;
        /** Whether MiniMax applies fast pre-processing. */
        fast_pretreatment?: boolean;
        /** The generated video length in seconds. */
        duration?: 6 | 10;
        /** The output video resolution. */
        resolution?: "720P" | "768P" | "1080P";
        /**
         * A public callback URL for task status updates.
         * @format uri
         */
        callback_url?: string;
      };
      output: {
        /** The asynchronous MiniMax video task identifier. */
        task_id?: string;
        /** MiniMax base response wrapper. */
        base_resp?: {
          /** MiniMax status code where 0 indicates success. */
          status_code?: number;
          /** Human-readable MiniMax status message. */
          status_msg?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
