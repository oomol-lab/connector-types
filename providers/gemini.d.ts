import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count the Gemini token usage for input text. */
    "gemini.count_tokens": {
      input: {
        /**
         * The text to count tokens for.
         * @minLength 1
         */
        text: string;
        /** The model name to use for tokenization. */
        model?: string;
      };
      output: {
        /** The total token count. */
        total_tokens: number;
        /** The per-modality token count breakdown. */
        token_details?: Array<{
          /** The content modality. */
          modality: string;
          /** The token count for this modality. */
          token_count: number;
        }>;
      };
    };
    /** Generate Gemini embeddings for text content. */
    "gemini.embed_content": {
      input: {
        /**
         * The text to generate embeddings for.
         * @minLength 1
         */
        text: string;
        /** The embedding model name to use. */
        model?: string;
        /** The optional title for the embedding content. */
        title?: string;
        /** The task type hint for the embedding model. */
        task_type?: string;
        /** The desired embedding dimensionality. */
        output_dimensionality?: number;
      };
      output: {
        /** The embedding vector values. */
        embedding: Array<number>;
        /** The number of embedding dimensions. */
        dimensions: number;
      };
    };
    /** Generate text or speech audio with Gemini models. */
    "gemini.generate_content": {
      input: {
        /** The model name to use. */
        model?: string;
        /** The top-K sampling parameter. */
        top_k?: number;
        /** The top-P sampling parameter. */
        top_p?: number;
        /**
         * The text prompt to send to the model.
         * @minLength 1
         */
        prompt: string;
        /** The voice name for speech audio output. */
        voice_name?: string;
        /** The sampling temperature. */
        temperature?: number;
        /** The sequences that stop generation. */
        stop_sequences?: Array<string>;
        /** The safety settings to apply. */
        safety_settings?: Array<{
          /** The harm category name. */
          category: string;
          /** The blocking threshold level. */
          threshold: string;
        }>;
        /** The maximum number of output tokens. */
        max_output_tokens?: number;
        /** The system instruction prepended to the prompt. */
        system_instruction?: string;
      };
      output: {
        /** The raw API response object. */
        raw: Record<string, unknown>;
        /** The generated text content. */
        text?: string;
        /** The MIME type of the response. */
        mime_type?: string;
        /** The base64-encoded audio data. */
        audio_data?: string;
        /** The candidate responses. */
        candidates?: Array<Record<string, unknown>>;
        /** The token usage metadata. */
        usage_metadata?: Record<string, unknown>;
        /** The execution status message. */
        message?: string;
      };
    };
    /** Generate an image with Gemini and return a transit URL. */
    "gemini.generate_image": {
      input: {
        /** The model name to use. */
        model?: string;
        /** The top-K sampling parameter. */
        top_k?: number;
        /** The top-P sampling parameter. */
        top_p?: number;
        /**
         * The text prompt describing the image to generate.
         * @minLength 1
         */
        prompt: string;
        /** The request timeout in milliseconds. */
        timeout?: number;
        /** The target image resolution. */
        image_size?: "1K" | "2K" | "4K";
        /** The sampling temperature. */
        temperature?: number;
        /** The image aspect ratio. */
        aspect_ratio?: "1:1" | "2:3" | "3:2" | "3:4" | "4:3" | "4:5" | "5:4" | "9:16" | "16:9" | "21:9";
        /** The safety settings to apply. */
        safety_settings?: Array<{
          /** The harm category name. */
          category: string;
          /** The blocking threshold level. */
          threshold: string;
        }>;
        /** The maximum number of output tokens. */
        max_output_tokens?: number;
        /** The system instruction prepended to the prompt. */
        system_instruction?: string;
      };
      output: {
        /** The generated image file. */
        image: {
          /** The file name. */
          name: string;
          /** The MIME type. */
          mimetype: string;
          /** The transit URL for downloading the file. */
          s3url: string;
        };
      };
    };
    /** Start a Gemini Veo video generation operation. */
    "gemini.generate_videos": {
      input: {
        /** The random seed for reproducibility. */
        seed?: number;
        /** The Veo model name to use. */
        model?: string;
        /**
         * The text prompt describing the video to generate.
         * @minLength 1
         */
        prompt: string;
        /** The video resolution. */
        resolution?: "720p" | "1080p";
        /** The video aspect ratio. */
        aspect_ratio?: "16:9" | "9:16";
        /** The negative prompt describing content to avoid. */
        negative_prompt?: string;
        /** The video duration in seconds. */
        duration_seconds?: 4 | 5 | 6 | 7 | 8;
        /** The person generation policy. */
        person_generation?: "dont_allow" | "allow_adult" | "allow_all";
      };
      output: {
        /** The raw API response object. */
        raw: Record<string, unknown>;
        /** The long-running operation name. */
        operation_name: string;
      };
    };
    /** Fetch the current status for a Gemini Veo operation. */
    "gemini.get_videos_operation": {
      input: {
        /**
         * The long-running Veo operation name.
         * @minLength 1
         */
        operation_name: string;
      };
      output: {
        /** Whether the Veo operation has finished. */
        done: boolean;
        /** The operation error payload. */
        error?: {
          /** The API error code returned for the operation. */
          code: number;
          /** The API error message returned for the operation. */
          message: string;
        };
        /** The raw operation response payload. */
        response?: Record<string, unknown>;
        /** The generated video URLs when the operation succeeds. */
        video_urls: Array<string>;
      };
    };
    /** List the available Gemini and Veo models. */
    "gemini.list_models": {
      input: {
        /** The model name prefix to filter by. */
        filter_prefix?: string;
      };
      output: {
        /** The raw API response. */
        raw: {
          /** The raw model records. */
          models: Array<{
            /** The model resource name. */
            name: string;
            /** The model version string. */
            version: string;
            /** The default top-K sampling value. */
            topK?: number;
            /** The default top-P sampling value. */
            topP?: number;
            /** Whether the model supports thinking mode. */
            thinking?: boolean;
            /** The base model identifier. */
            baseModelId?: string;
            /** The model description. */
            description?: string;
            /** The human-readable model display name. */
            displayName?: string;
            /** The default temperature value. */
            temperature?: number;
            /** The maximum allowed temperature. */
            maxTemperature?: number;
            /** The maximum input token count. */
            inputTokenLimit?: number;
            /** The maximum output token count. */
            outputTokenLimit?: number;
            /** The generation methods supported by the model. */
            supportedGenerationMethods?: Array<string>;
          }>;
          /** The token for fetching the next page. */
          nextPageToken?: string;
        };
        /** The parsed model records. */
        models: Array<{
          /** The model resource name. */
          name: string;
          /** The model version string. */
          version: string;
          /** The default top-K sampling value. */
          topK?: number;
          /** The default top-P sampling value. */
          topP?: number;
          /** Whether the model supports thinking mode. */
          thinking?: boolean;
          /** The base model identifier. */
          baseModelId?: string;
          /** The model description. */
          description?: string;
          /** The human-readable model display name. */
          displayName?: string;
          /** The default temperature value. */
          temperature?: number;
          /** The maximum allowed temperature. */
          maxTemperature?: number;
          /** The maximum input token count. */
          inputTokenLimit?: number;
          /** The maximum output token count. */
          outputTokenLimit?: number;
          /** The generation methods supported by the model. */
          supportedGenerationMethods?: Array<string>;
        }>;
      };
    };
    /** Poll a Gemini Veo operation and return the finished video via transit URL. */
    "gemini.wait_for_video": {
      input: {
        /**
         * The long-running Veo operation name.
         * @minLength 1
         */
        operation_name: string;
      };
      output: {
        /** Whether the polling completed with a finished video. */
        success: boolean;
        /** The generated video file. */
        video_file?: {
          /** The file name. */
          name: string;
          /** The MIME type. */
          mimetype: string;
          /** The transit URL for downloading the file. */
          s3url: string;
        };
        /** Responsible AI filtering details for the operation. */
        rai_filtering?: {
          /** The Responsible AI filtering summary message. */
          message: string;
          /** Whether any outputs were filtered. */
          filtered?: boolean;
          /** The Responsible AI filter reasons. */
          filter_reasons?: Array<string>;
          /** The number of filtered outputs. */
          filtered_count: number;
        };
      };
    };
  }
}
