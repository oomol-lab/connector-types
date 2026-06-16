import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel one OpenAI batch job by its identifier. */
    "openai.cancel_batch": {
      input: {
        /** The batch identifier. */
        batch_id: string;
      };
      output: {
        /** The batch identifier. */
        id: string;
        /** The object type returned by the API. */
        object?: string;
        /** The endpoint executed for each batch request. */
        endpoint?: string;
        /** The input file identifier used by the batch. */
        input_file_id?: string;
        /** The output file identifier created by the batch. */
        output_file_id?: string;
        /** The error file identifier created by the batch. */
        error_file_id?: string;
        /** The completion window requested for the batch. */
        completion_window?: string;
        /** The current status of the batch. */
        status?: string;
        /** The batch metadata. */
        metadata?: Record<string, string>;
        /** The request count summary returned by the API. */
        request_counts?: {
          /** The total number of requests submitted in the batch. */
          total?: number;
          /** The number of completed requests in the batch. */
          completed?: number;
          /** The number of failed requests in the batch. */
          failed?: number;
          [key: string]: unknown;
        };
        /** The batch errors returned by the API. */
        errors?: unknown;
        /** The Unix timestamp when the batch was created. */
        created_at?: number;
        /** The Unix timestamp when the batch started processing. */
        in_progress_at?: number;
        /** The Unix timestamp when the batch started finalizing. */
        finalizing_at?: number;
        /** The Unix timestamp when the batch completed. */
        completed_at?: number;
        /** The Unix timestamp when the batch started cancelling. */
        cancelling_at?: number;
        /** The Unix timestamp when the batch was cancelled. */
        cancelled_at?: number;
        /** The Unix timestamp when the batch failed. */
        failed_at?: number;
        /** The Unix timestamp when the batch expired. */
        expired_at?: number;
        /** The Unix timestamp when the batch will expire. */
        expires_at?: number;
        [key: string]: unknown;
      };
    };
    /** Transcribe one uploaded audio file with the OpenAI audio transcription API. */
    "openai.create_audio_transcription": {
      input: {
        /** The audio file source to transcribe. */
        file: {
          /**
           * The filename to report when uploading the audio file.
           * @minLength 1
           */
          name: string;
          /** The MIME type of the audio file. */
          mimetype?: string;
          /** A public URL pointing to the audio file. */
          url?: string;
          /**
           * The base64-encoded audio content to upload.
           * @minLength 1
           */
          content_base64?: string;
        };
        /** The transcription model to use. */
        model: string;
        /** The chunking strategy configuration accepted by the upstream API. */
        chunking_strategy?: Record<string, unknown>;
        /**
         * Additional response fields to include.
         * @minItems 1
         */
        include?: Array<string>;
        /** The language code of the source audio. */
        language?: string;
        /** A guiding prompt for the transcription. */
        prompt?: string;
        /** The response format to return. */
        response_format?: string;
        /** Whether to request a streaming transcription response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /**
         * The sampling temperature.
         * @minimum 0
         * @maximum 1
         */
        temperature?: number;
        /**
         * The timestamp granularities to include.
         * @minItems 1
         */
        timestamp_granularities?: Array<"word" | "segment">;
        [key: string]: unknown;
      };
      output: {
        /** The transcribed or translated text. */
        text?: string;
        /** The detected or returned language code. */
        language?: string;
        /** The duration of the processed audio in seconds. */
        duration?: number;
        /** The segment-level timing details. */
        segments?: Array<Record<string, unknown>>;
        /** The word-level timing details. */
        words?: Array<Record<string, unknown>>;
        /** The token log probabilities, if requested. */
        logprobs?: Array<Record<string, unknown>>;
        /** Usage details returned by the API. */
        usage?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Translate one uploaded audio file into English with the OpenAI audio translation API. */
    "openai.create_audio_translation": {
      input: {
        /** The audio file source to translate. */
        file: {
          /**
           * The filename to report when uploading the audio file.
           * @minLength 1
           */
          name: string;
          /** The MIME type of the audio file. */
          mimetype?: string;
          /** A public URL pointing to the audio file. */
          url?: string;
          /**
           * The base64-encoded audio content to upload.
           * @minLength 1
           */
          content_base64?: string;
        };
        /** The translation model to use. */
        model: string;
        /** A guiding prompt for the translation. */
        prompt?: string;
        /** The response format to return. */
        response_format?: string;
        /**
         * The sampling temperature.
         * @minimum 0
         * @maximum 1
         */
        temperature?: number;
        [key: string]: unknown;
      };
      output: {
        /** The transcribed or translated text. */
        text?: string;
        /** The detected or returned language code. */
        language?: string;
        /** The duration of the processed audio in seconds. */
        duration?: number;
        /** The segment-level timing details. */
        segments?: Array<Record<string, unknown>>;
        /** The word-level timing details. */
        words?: Array<Record<string, unknown>>;
        /** The token log probabilities, if requested. */
        logprobs?: Array<Record<string, unknown>>;
        /** Usage details returned by the API. */
        usage?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create an OpenAI batch job from an uploaded input file. */
    "openai.create_batch": {
      input: {
        /** The uploaded input file identifier to process. */
        input_file_id: string;
        /** The API endpoint executed for each batch item. */
        endpoint: string;
        /** The requested completion window, such as `24h`. */
        completion_window: string;
        /** String metadata attached to the batch. */
        metadata?: Record<string, string>;
        [key: string]: unknown;
      };
      output: {
        /** The batch identifier. */
        id: string;
        /** The object type returned by the API. */
        object?: string;
        /** The endpoint executed for each batch request. */
        endpoint?: string;
        /** The input file identifier used by the batch. */
        input_file_id?: string;
        /** The output file identifier created by the batch. */
        output_file_id?: string;
        /** The error file identifier created by the batch. */
        error_file_id?: string;
        /** The completion window requested for the batch. */
        completion_window?: string;
        /** The current status of the batch. */
        status?: string;
        /** The batch metadata. */
        metadata?: Record<string, string>;
        /** The request count summary returned by the API. */
        request_counts?: {
          /** The total number of requests submitted in the batch. */
          total?: number;
          /** The number of completed requests in the batch. */
          completed?: number;
          /** The number of failed requests in the batch. */
          failed?: number;
          [key: string]: unknown;
        };
        /** The batch errors returned by the API. */
        errors?: unknown;
        /** The Unix timestamp when the batch was created. */
        created_at?: number;
        /** The Unix timestamp when the batch started processing. */
        in_progress_at?: number;
        /** The Unix timestamp when the batch started finalizing. */
        finalizing_at?: number;
        /** The Unix timestamp when the batch completed. */
        completed_at?: number;
        /** The Unix timestamp when the batch started cancelling. */
        cancelling_at?: number;
        /** The Unix timestamp when the batch was cancelled. */
        cancelled_at?: number;
        /** The Unix timestamp when the batch failed. */
        failed_at?: number;
        /** The Unix timestamp when the batch expired. */
        expired_at?: number;
        /** The Unix timestamp when the batch will expire. */
        expires_at?: number;
        [key: string]: unknown;
      };
    };
    /** Create embeddings with an OpenAI embedding model. */
    "openai.create_embeddings": {
      input: {
        /** The input content to embed. */
        input: string | Array<string> | Array<number> | Array<Array<number>>;
        /** The embedding model to use. */
        model: string;
        /**
         * The number of embedding dimensions to request.
         * @minimum 1
         */
        dimensions?: number;
        /** The embedding encoding format to return. */
        encoding_format?: "float" | "base64";
        /** An end-user identifier passed through to the upstream API. */
        user?: string;
      };
      output: {
        /** The top-level object type. */
        object: string;
        /** The embedding items returned by the API. */
        data: Array<{
          /** The embedding index in the returned list. */
          index: number;
          /** The object type of the embedding item. */
          object: string;
          /** The embedding content. */
          embedding: Array<number> | string;
          [key: string]: unknown;
        }>;
        /** The model that generated the embeddings. */
        model: string;
        /** Usage statistics for the request. */
        usage: {
          /** The number of tokens in the input. */
          prompt_tokens: number;
          /** The total number of tokens used. */
          total_tokens: number;
        };
        [key: string]: unknown;
      };
    };
    /** Generate images with the OpenAI image generation API. */
    "openai.create_image": {
      input: {
        /** The prompt used to generate the image. */
        prompt: string;
        /** The image generation model to use. */
        model?: string;
        /** The background treatment to request for generated images. */
        background?: "auto" | "opaque" | "transparent";
        /** The moderation level applied to the generation. */
        moderation?: string;
        /**
         * The number of images to generate.
         * @minimum 1
         */
        n?: number;
        /**
         * The output compression level to apply.
         * @minimum 0
         * @maximum 100
         */
        output_compression?: number;
        /** The image output format to request. */
        output_format?: "png" | "jpeg" | "webp";
        /**
         * The number of partial images to stream before completion.
         * @minimum 0
         */
        partial_images?: number;
        /** The image quality to request. */
        quality?: string;
        /** The image payload format to return. */
        response_format?: "b64_json" | "url";
        /** The requested image size. */
        size?: string;
        /** Whether to request a streaming image generation response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /** An end-user identifier passed through to the upstream API. */
        user?: string;
        [key: string]: unknown;
      };
      output: {
        /** The Unix timestamp when the image response was created. */
        created?: number;
        /** The background setting used by the generation. */
        background?: string;
        /** The output format used by the generation. */
        output_format?: string;
        /** The image size returned by the generation. */
        size?: string;
        /** The image quality returned by the generation. */
        quality?: string;
        /** The generated image items returned by the API. */
        data: Array<{
          /** The generated image encoded as base64. */
          b64_json?: string;
          /** The signed image URL returned by the API. */
          url?: string;
          /** The prompt potentially revised by the model before generation. */
          revised_prompt?: string;
          [key: string]: unknown;
        }>;
        /** Usage details returned for the image request. */
        usage?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Classify text or image inputs with the OpenAI Moderations API. */
    "openai.create_moderation": {
      input: {
        /** The input or inputs to classify. */
        input: string | Array<string | {
          /** The moderation input type. */
          type: "text" | "image_url";
          /** The text content when the input type is text. */
          text?: string;
          /** The image URL payload when the input type is image_url. */
          image_url?: string | Record<string, unknown>;
        }>;
        /** The moderation model to use. */
        model?: string;
      };
      output: {
        /** The moderation request identifier. */
        id: string;
        /** The moderation model used for the request. */
        model: string;
        /** The moderation results for each input. */
        results: Array<{
          /** Whether the input was flagged by any category. */
          flagged: boolean;
          /** Boolean flags for the moderation categories. */
          categories: Record<string, unknown>;
          /** Confidence scores for the moderation categories. */
          category_scores: Record<string, unknown>;
          /** The input types that contributed to each category result. */
          category_applied_input_types?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a non-streaming OpenAI response through the Responses API. */
    "openai.create_response": {
      input: {
        /** The model to use for the response. */
        model: string;
        /** The input prompt or message array sent to the model. */
        input: string | Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "developer";
          /** The content for the message. */
          content: string | Array<{
            /** The content type. Must be input_text. */
            type: "input_text";
            /** The text content sent to the model. */
            text: string;
          } | {
            /** The content type. Must be input_image. */
            type: "input_image";
            /** A remote image URL or a data URL containing the image bytes. */
            image_url: string;
            /** The requested image detail level. */
            detail?: "auto" | "low" | "high" | "original";
          } | {
            /** The content type. Must be input_file. */
            type: "input_file";
            /** The uploaded file ID to reference. */
            file_id?: string;
            /** The inline file data encoded as base64 or supplied as a data URL. */
            file_data?: string;
            /** The filename to report for inline file data. */
            filename?: string;
          }>;
        }>;
        /** A top-level instruction string applied before the input. */
        instructions?: string;
        /**
         * The maximum number of output tokens to generate.
         * @minimum 1
         */
        max_output_tokens?: number;
        /** String metadata attached to the response. */
        metadata?: Record<string, string>;
        /** The ID of a previous response to continue from. */
        previous_response_id?: string;
        /** Whether the response may be stored by the upstream platform. */
        store?: boolean;
        /**
         * The sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** Text output configuration for the response. */
        text?: {
          /** The output format configuration. */
          format?: {
            /** The format type. Must be json_object. */
            type: "json_object";
          } | {
            /** The format type. Must be json_schema. */
            type: "json_schema";
            /** The schema name reported to the model. */
            name: string;
            /** The JSON Schema definition used for output validation. */
            schema: Record<string, unknown>;
            /** Whether the model must strictly follow the declared schema. */
            strict?: boolean;
          };
        };
        /**
         * The nucleus sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** An end-user identifier passed through to the upstream API. */
        user?: string;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: boolean;
      };
      output: {
        /** The response identifier. */
        id: string;
        /** The top-level object type. */
        object?: string;
        /** The Unix timestamp when the response was created. */
        created_at?: number;
        /** The response status. */
        status?: string;
        /** The model that generated the response. */
        model?: string;
        /** The raw output items returned by the response. */
        output: Array<Record<string, unknown>>;
        /** The aggregated plain text extracted from the output items. */
        output_text?: string;
        /** Usage statistics for the response. */
        usage?: {
          /** The number of input tokens consumed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** The total number of tokens used. */
          total_tokens?: number;
          /** Detailed usage information for input tokens. */
          input_tokens_details?: Record<string, unknown>;
          /** Detailed usage information for output tokens. */
          output_tokens_details?: Record<string, unknown>;
          [key: string]: unknown;
        };
        error?: Record<string, unknown> | null;
        incomplete_details?: Record<string, unknown> | null;
        previous_response_id?: string | null;
        /** Whether the response is stored by the upstream platform. */
        store?: boolean;
        /** The Unix timestamp when the stored response expires. */
        expire_at?: number;
        [key: string]: unknown;
      };
    };
    /** Synthesize speech audio from text with the OpenAI audio speech API. */
    "openai.create_speech": {
      input: {
        /** The text-to-speech model to use. */
        model: string;
        /** The text to synthesize into speech. */
        input: string;
        /** The voice configuration used for synthesis. */
        voice: string | Record<string, unknown>;
        /** Optional voice instructions that guide the synthesis style. */
        instructions?: string;
        /** The audio format to return. */
        response_format?: "mp3" | "opus" | "aac" | "flac" | "wav" | "pcm";
        /**
         * The playback speed multiplier.
         * @minimum 0.25
         * @maximum 4
         */
        speed?: number;
        /** The speech response delivery format. This connector only accepts audio or an omitted value. */
        stream_format?: "audio" | "sse";
        [key: string]: unknown;
      };
      output: {
        /** The synthesized audio encoded as base64. */
        content_base64: string;
        /** The MIME type of the synthesized audio. */
        content_type: string;
      };
    };
    /** Fetch one OpenAI batch job by its identifier. */
    "openai.get_batch": {
      input: {
        /** The batch identifier. */
        batch_id: string;
      };
      output: {
        /** The batch identifier. */
        id: string;
        /** The object type returned by the API. */
        object?: string;
        /** The endpoint executed for each batch request. */
        endpoint?: string;
        /** The input file identifier used by the batch. */
        input_file_id?: string;
        /** The output file identifier created by the batch. */
        output_file_id?: string;
        /** The error file identifier created by the batch. */
        error_file_id?: string;
        /** The completion window requested for the batch. */
        completion_window?: string;
        /** The current status of the batch. */
        status?: string;
        /** The batch metadata. */
        metadata?: Record<string, string>;
        /** The request count summary returned by the API. */
        request_counts?: {
          /** The total number of requests submitted in the batch. */
          total?: number;
          /** The number of completed requests in the batch. */
          completed?: number;
          /** The number of failed requests in the batch. */
          failed?: number;
          [key: string]: unknown;
        };
        /** The batch errors returned by the API. */
        errors?: unknown;
        /** The Unix timestamp when the batch was created. */
        created_at?: number;
        /** The Unix timestamp when the batch started processing. */
        in_progress_at?: number;
        /** The Unix timestamp when the batch started finalizing. */
        finalizing_at?: number;
        /** The Unix timestamp when the batch completed. */
        completed_at?: number;
        /** The Unix timestamp when the batch started cancelling. */
        cancelling_at?: number;
        /** The Unix timestamp when the batch was cancelled. */
        cancelled_at?: number;
        /** The Unix timestamp when the batch failed. */
        failed_at?: number;
        /** The Unix timestamp when the batch expired. */
        expired_at?: number;
        /** The Unix timestamp when the batch will expire. */
        expires_at?: number;
        [key: string]: unknown;
      };
    };
    /** Count how many input tokens a Responses-style OpenAI request would consume. */
    "openai.get_input_token_counts": {
      input: {
        /** The model used for counting the input tokens. */
        model?: string;
        /** The input prompt or message array sent to the model. */
        input?: string | Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "developer";
          /** The content for the message. */
          content: string | Array<{
            /** The content type. Must be input_text. */
            type: "input_text";
            /** The text content sent to the model. */
            text: string;
          } | {
            /** The content type. Must be input_image. */
            type: "input_image";
            /** A remote image URL or a data URL containing the image bytes. */
            image_url: string;
            /** The requested image detail level. */
            detail?: "auto" | "low" | "high" | "original";
          } | {
            /** The content type. Must be input_file. */
            type: "input_file";
            /** The uploaded file ID to reference. */
            file_id?: string;
            /** The inline file data encoded as base64 or supplied as a data URL. */
            file_data?: string;
            /** The filename to report for inline file data. */
            filename?: string;
          }>;
        }>;
        /** Top-level instructions to include in the token count. */
        instructions?: string;
        /** A previous response identifier to continue counting from. */
        previous_response_id?: string;
        /** Text output configuration for the response. */
        text?: {
          /** The output format configuration. */
          format?: {
            /** The format type. Must be json_object. */
            type: "json_object";
          } | {
            /** The format type. Must be json_schema. */
            type: "json_schema";
            /** The schema name reported to the model. */
            name: string;
            /** The JSON Schema definition used for output validation. */
            schema: Record<string, unknown>;
            /** Whether the model must strictly follow the declared schema. */
            strict?: boolean;
          };
        };
        /** The truncation mode to apply before counting. */
        truncation?: string;
        [key: string]: unknown;
      };
      output: {
        /** The object type returned by the API. */
        object?: string;
        /** The number of input tokens the request would consume. */
        input_tokens: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve the metadata for a single OpenAI model by ID. */
    "openai.get_model": {
      input: {
        /** The exact model identifier to retrieve. */
        model: string;
      };
      output: {
        /** The model identifier. */
        id: string;
        /** The object type returned by the API. */
        object: string;
        /** The Unix timestamp when the model was created. */
        created: number;
        /** The organization or user that owns the model. */
        owned_by: string;
        /** The root model identifier for a derived model. */
        root?: string;
        parent?: string | null;
        /** The permission entries returned for the model. */
        permission?: Array<{
          /** The permission identifier. */
          id: string;
          /** The object type returned for the permission. */
          object: string;
          /** The Unix timestamp when the permission was created. */
          created: number;
          /** Whether creating engines from the model is allowed. */
          allow_create_engine: boolean;
          /** Whether sampling with the model is allowed. */
          allow_sampling: boolean;
          /** Whether requesting log probabilities is allowed. */
          allow_logprobs: boolean;
          /** Whether search index access is allowed for the model. */
          allow_search_indices: boolean;
          /** Whether viewing the model is allowed. */
          allow_view: boolean;
          /** Whether fine-tuning the model is allowed. */
          allow_fine_tuning: boolean;
          /** The organization that owns the permission. */
          organization: string;
          /** Whether the permission blocks access. */
          is_blocking: boolean;
          group?: string | null;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve one stored OpenAI response by its identifier. */
    "openai.get_response": {
      input: {
        /** The response identifier. */
        response_id: string;
        /**
         * Additional response fields to include in the result.
         * @minItems 1
         */
        include?: Array<string>;
      };
      output: {
        /** The response identifier. */
        id: string;
        /** The top-level object type. */
        object?: string;
        /** The Unix timestamp when the response was created. */
        created_at?: number;
        /** The response status. */
        status?: string;
        /** The model that generated the response. */
        model?: string;
        /** The raw output items returned by the response. */
        output: Array<Record<string, unknown>>;
        /** The aggregated plain text extracted from the output items. */
        output_text?: string;
        /** Usage statistics for the response. */
        usage?: {
          /** The number of input tokens consumed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** The total number of tokens used. */
          total_tokens?: number;
          /** Detailed usage information for input tokens. */
          input_tokens_details?: Record<string, unknown>;
          /** Detailed usage information for output tokens. */
          output_tokens_details?: Record<string, unknown>;
          [key: string]: unknown;
        };
        error?: Record<string, unknown> | null;
        incomplete_details?: Record<string, unknown> | null;
        previous_response_id?: string | null;
        /** Whether the response is stored by the upstream platform. */
        store?: boolean;
        /** The Unix timestamp when the stored response expires. */
        expire_at?: number;
        [key: string]: unknown;
      };
    };
    /** List the stored input items for one OpenAI response. */
    "openai.list_input_items": {
      input: {
        /** The response identifier whose input items should be listed. */
        response_id: string;
        /** Return items after this item identifier. */
        after?: string;
        /**
         * Additional input item fields to include in the result.
         * @minItems 1
         */
        include?: Array<string>;
        /**
         * The maximum number of input items to return.
         * @minimum 1
         */
        limit?: number;
        /** The sort order for returned items. */
        order?: "asc" | "desc";
      };
      output: {
        /** The object type returned by the API. */
        object?: string;
        /** The returned input items. */
        data: Array<{
          /** The input item identifier. */
          id?: string;
          /** The input item type. */
          type?: string;
          /** The role associated with the input item. */
          role?: string;
          /** The item processing status. */
          status?: string;
          /** The structured item content blocks. */
          content?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** The first item identifier in the page. */
        first_id?: string;
        /** The last item identifier in the page. */
        last_id?: string;
        /** Whether more input items are available. */
        has_more?: boolean;
        [key: string]: unknown;
      };
    };
    /** List the OpenAI models available to the current API key. */
    "openai.list_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type. */
        object: string;
        /** The list of available models. */
        data: Array<{
          /** The model identifier. */
          id: string;
          /** The object type returned by the API. */
          object: string;
          /** The Unix timestamp when the model was created. */
          created: number;
          /** The organization or user that owns the model. */
          owned_by: string;
          /** The root model identifier for a derived model. */
          root?: string;
          parent?: string | null;
          /** The permission entries returned for the model. */
          permission?: Array<{
            /** The permission identifier. */
            id: string;
            /** The object type returned for the permission. */
            object: string;
            /** The Unix timestamp when the permission was created. */
            created: number;
            /** Whether creating engines from the model is allowed. */
            allow_create_engine: boolean;
            /** Whether sampling with the model is allowed. */
            allow_sampling: boolean;
            /** Whether requesting log probabilities is allowed. */
            allow_logprobs: boolean;
            /** Whether search index access is allowed for the model. */
            allow_search_indices: boolean;
            /** Whether viewing the model is allowed. */
            allow_view: boolean;
            /** Whether fine-tuning the model is allowed. */
            allow_fine_tuning: boolean;
            /** The organization that owns the permission. */
            organization: string;
            /** Whether the permission blocks access. */
            is_blocking: boolean;
            group?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
