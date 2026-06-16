import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a Baidu Qianfan batch prediction job by its identifier. */
    "qianfan.cancel_batch": {
      input: {
        /**
         * The batch identifier.
         * @minLength 1
         */
        batch_id: string;
      };
      output: {
        /** The batch identifier. */
        id: string;
        /** The object type returned by the API. */
        object?: string;
        /** The current batch status. */
        status?: string;
        /** The endpoint executed by the batch. */
        endpoint?: string;
        /** The input file identifier. */
        input_file_id?: string;
        /** The output file identifier. */
        output_file_id?: string;
        /** The error file identifier. */
        error_file_id?: string;
        /** The completion window requested for the batch. */
        completion_window?: string;
        /** The batch metadata. */
        metadata?: Record<string, unknown>;
        /** The batch errors returned by the API. */
        errors?: unknown;
        /** The batch request counts returned by the API. */
        request_counts?: unknown;
        /** The batch usage metadata. */
        usage?: unknown;
        /** The Unix timestamp when the batch was created. */
        created_at?: number;
        /** The Unix timestamp when the batch entered the in-progress state. */
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
        /** The Unix timestamp when the batch will expire. */
        expires_at?: number;
        /** The Unix timestamp when the batch expired. */
        expired_at?: number;
        [key: string]: unknown;
      };
    };
    /** Cancel a Baidu Qianfan video generation task by its task identifier. */
    "qianfan.cancel_video_generation_task": {
      input: {
        /**
         * The video task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** The upstream field name returned for the cancellation result. */
        field?: string;
        /** The updated video task status. */
        status?: string;
        /** The cancelled video task identifier. */
        task_id?: string;
        [key: string]: unknown;
      };
    };
    /** Create a non-streaming AI search chat completion with Baidu Qianfan. */
    "qianfan.create_ai_search_completion": {
      input: {
        /** The AI search model identifier to use. */
        model: string;
        /**
         * The ordered conversation messages.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "tool";
          /** The message content. */
          content?: string | Array<{
            /** The content part type. Must be text. */
            type: "text";
            /** The text content for this part. */
            text: string;
          } | {
            /** The content part type. Must be image_url. */
            type: "image_url";
            /** The image URL payload. */
            image_url: string | {
              /** A public image URL or a data URL. */
              url: string;
              /** The requested image detail level. */
              detail?: "auto" | "low" | "high";
            };
          }> | null;
          /** The optional participant name for the message. */
          name?: string;
          /** The identifier of the tool call that this tool message responds to. */
          tool_call_id?: string;
          /** The tool calls requested by an assistant message. */
          tool_calls?: Array<{
            /** The tool call identifier. */
            id?: string;
            /** The tool call type. Must be function. */
            type: "function";
            /** The function call payload. */
            function: {
              /** The function name selected by the model. */
              name: string;
              /** The serialized JSON arguments for the function call. */
              arguments: string;
            };
          }>;
        }>;
        /** The nucleus sampling threshold. */
        top_p?: number;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /** The upstream AI search config identifier. */
        config_id?: string;
        /** The instruction supplied to the AI search model. */
        instruction?: string;
        /** The upstream model application identifier. */
        model_appid?: string;
        /** The AI search mode. */
        search_mode?: string;
        /** The sampling temperature for generation. */
        temperature?: number;
        /** The requested safety level. */
        safety_level?: string;
        /** The user profile metadata. */
        user_profile?: Record<string, unknown>;
        /** The search filter payload. */
        search_filter?: Record<string, unknown>;
        /** The search source configuration. */
        search_source?: unknown;
        /** The prompt template used by the API. */
        prompt_template?: string;
        /** The requested response format. */
        response_format?: {
          /** The response format type requested from the model. */
          type: "text" | "json_object" | "json_schema";
          /** The JSON schema descriptor when type is json_schema. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Whether reasoning mode should be enabled. */
        enable_reasoning?: boolean;
        /** Whether deep search mode should be enabled. */
        enable_deep_search?: boolean;
        /** Additional knowledge supplied to the search request. */
        additional_knowledge?: string;
        /** The maximum number of search queries issued by the model. */
        max_search_query_num?: number;
        /** The resource type filters. */
        resource_type_filter?: Array<string>;
        /** Whether citation corner markers should be enabled. */
        enable_corner_markers?: boolean;
        /** The maximum number of completion tokens to generate. */
        max_completion_tokens?: number;
        /** The search recency filter value. */
        search_recency_filter?: string;
        /** The maximum number of referenced search items. */
        max_refer_search_items?: number;
        /** Whether follow-up queries should be enabled. */
        enable_followup_queries?: boolean;
        /** Whether processing-state updates should be enabled. */
        enable_processing_state?: boolean;
        /** Whether web page safety filtering should be enabled. */
        enable_web_page_safety?: boolean;
        /** Whether search item post-processing should be enabled. */
        search_items_postprocess?: boolean;
        /** Whether entity-selection search should be enabled. */
        enable_entity_selection_search?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The upstream status code. */
        code?: number;
        /** The upstream status message. */
        message?: string;
        /** The upstream request identifier. */
        request_Id?: string;
        /** The generated AI search choices. */
        choices?: Array<unknown>;
        /** The search references returned by the API. */
        references?: Array<unknown>;
        /** The detected entities returned by the API. */
        entities?: Array<unknown>;
        /** The follow-up queries returned by the API. */
        followup_queries?: Array<string>;
        /** Usage information for the AI search request. */
        usage?: unknown;
        /** Whether the response passed safety checks. */
        is_safe?: boolean;
        [key: string]: unknown;
      };
    };
    /** Generate images with the Baidu Qianfan MuseSteamer Air image endpoint. */
    "qianfan.create_air_image_generation": {
      input: {
        /** The image model identifier to use. */
        model: string;
        /** The prompt used to generate the image. */
        prompt: string;
        /** The random seed used for generation. */
        seed?: number;
        /** The output image size, for example 1024x1024. */
        size?: string;
        /** Whether the upstream prompt extension feature should be enabled. */
        prompt_extend?: boolean;
        /** The response format requested from the upstream API. */
        response_format?: string;
        [key: string]: unknown;
      };
      output: {
        /** The image generation identifier. */
        id?: string;
        /** The Unix timestamp when the image was created. */
        created?: number;
        /** The generated image results. */
        data: Array<{
          /** The generated image URL. */
          url?: string;
          /** The generated image encoded as base64. */
          b64_json?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a Baidu Qianfan batch prediction job from an uploaded input file. */
    "qianfan.create_batch": {
      input: {
        /** The input file identifier used by the batch. */
        input_file_id: string;
        /** The endpoint executed for each batch item. */
        endpoint: string;
        /** The completion window requested for the batch. */
        completion_window: string;
        /** Optional metadata for the batch. */
        metadata?: Record<string, unknown>;
        /** Whether an existing output should be replaced. */
        replace?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The batch identifier. */
        id: string;
        /** The object type returned by the API. */
        object?: string;
        /** The current batch status. */
        status?: string;
        /** The endpoint executed by the batch. */
        endpoint?: string;
        /** The input file identifier. */
        input_file_id?: string;
        /** The output file identifier. */
        output_file_id?: string;
        /** The error file identifier. */
        error_file_id?: string;
        /** The completion window requested for the batch. */
        completion_window?: string;
        /** The batch metadata. */
        metadata?: Record<string, unknown>;
        /** The batch errors returned by the API. */
        errors?: unknown;
        /** The batch request counts returned by the API. */
        request_counts?: unknown;
        /** The batch usage metadata. */
        usage?: unknown;
        /** The Unix timestamp when the batch was created. */
        created_at?: number;
        /** The Unix timestamp when the batch entered the in-progress state. */
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
        /** The Unix timestamp when the batch will expire. */
        expires_at?: number;
        /** The Unix timestamp when the batch expired. */
        expired_at?: number;
        [key: string]: unknown;
      };
    };
    /** Create a non-streaming OpenAI-compatible chat completion with Baidu Qianfan. */
    "qianfan.create_chat_completion": {
      input: {
        /** The Qianfan model identifier to use. */
        model: string;
        /**
         * The ordered conversation messages.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "tool";
          /** The message content. */
          content?: string | Array<{
            /** The content part type. Must be text. */
            type: "text";
            /** The text content for this part. */
            text: string;
          } | {
            /** The content part type. Must be image_url. */
            type: "image_url";
            /** The image URL payload. */
            image_url: string | {
              /** A public image URL or a data URL. */
              url: string;
              /** The requested image detail level. */
              detail?: "auto" | "low" | "high";
            };
          }> | null;
          /** The optional participant name for the message. */
          name?: string;
          /** The identifier of the tool call that this tool message responds to. */
          tool_call_id?: string;
          /** The tool calls requested by an assistant message. */
          tool_calls?: Array<{
            /** The tool call identifier. */
            id?: string;
            /** The tool call type. Must be function. */
            type: "function";
            /** The function call payload. */
            function: {
              /** The function name selected by the model. */
              name: string;
              /** The serialized JSON arguments for the function call. */
              arguments: string;
            };
          }>;
        }>;
        /**
         * The maximum number of tokens to generate.
         * @minimum 1
         */
        max_tokens?: number;
        /**
         * The sampling temperature for generation.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * The nucleus sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /**
         * The frequency penalty applied to repeated tokens.
         * @minimum -2
         * @maximum 2
         */
        frequency_penalty?: number;
        /**
         * The presence penalty applied to newly introduced tokens.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /** One or more sequences that stop generation. */
        stop?: string | Array<string>;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /** Additional options for streaming responses. */
        stream_options?: {
          /** Whether usage information should be included in stream chunks. */
          include_usage?: boolean;
          /** Whether usage information should be included in every stream chunk. */
          chunk_include_usage?: boolean;
          [key: string]: unknown;
        };
        /** The format requested for the model response. */
        response_format?: {
          /** The response format type requested from the model. */
          type: "text" | "json_object" | "json_schema";
          /** The JSON schema descriptor when type is json_schema. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** The tools available to the model. */
        tools?: Array<{
          /** The tool type. Must be function. */
          type: "function";
          /** The tool function definition. */
          function: {
            /** The function name exposed to the model. */
            name: string;
            /** A human-readable description of the function. */
            description?: string;
            /** A JSON Schema object describing the function parameters. */
            parameters?: Record<string, unknown>;
            /** Whether the model must follow the declared parameter schema exactly. */
            strict?: boolean;
          };
        }>;
        /** How the model should choose tools. */
        tool_choice?: "none" | "auto" | "required" | {
          /** The tool choice type. Must be function. */
          type: "function";
          /** The function tool selection. */
          function: {
            /** The name of the function tool to force. */
            name: string;
          };
        };
        /** An end-user identifier for tracing and abuse monitoring. */
        user?: string;
        [key: string]: unknown;
      };
      output: {
        /** The completion identifier. */
        id?: string;
        /** The object type returned by the API. */
        object?: string;
        /** The Unix timestamp when the completion was created. */
        created?: number;
        /** The model that generated the completion. */
        model?: string;
        /** The completion choices. */
        choices: Array<{
          /** The choice index. */
          index: number;
          /** The reason why generation stopped. */
          finish_reason?: string;
          /** The generated message. */
          message: {
            /** The role of the generated message. */
            role: string;
            /** The generated message content. */
            content?: string | Array<{
              /** The content part type. Must be text. */
              type: "text";
              /** The text content for this part. */
              text: string;
            } | {
              /** The content part type. Must be image_url. */
              type: "image_url";
              /** The image URL payload. */
              image_url: string | {
                /** A public image URL or a data URL. */
                url: string;
                /** The requested image detail level. */
                detail?: "auto" | "low" | "high";
              };
            }> | null;
            /** The tool calls requested by the model. */
            tool_calls?: Array<{
              /** The tool call identifier. */
              id?: string;
              /** The tool call type. Must be function. */
              type: "function";
              /** The function call payload. */
              function: {
                /** The function name selected by the model. */
                name: string;
                /** The serialized JSON arguments for the function call. */
                arguments: string;
              };
            }>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Usage information for the completion. */
        usage?: {
          /** The number of prompt tokens consumed. */
          prompt_tokens?: number;
          /** The number of completion tokens generated. */
          completion_tokens?: number;
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a non-streaming fill-in-the-middle completion with Baidu Qianfan. */
    "qianfan.create_completion": {
      input: {
        /** The Qianfan FIM model identifier to use. */
        model: string;
        /**
         * The non-empty prefix text that the model should continue from.
         * @minLength 1
         */
        prompt: string;
        /** The optional suffix text used for fill-in-the-middle completion. */
        suffix?: string;
        /**
         * The maximum number of tokens to generate.
         * @minimum 1
         */
        max_tokens?: number;
        /** The sampling temperature for generation. */
        temperature?: number;
        /** The nucleus sampling threshold. */
        top_p?: number;
        /**
         * Up to four stop sequences that stop generation.
         * @maxItems 4
         */
        stop?: Array<string>;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /** Additional options for streaming responses. */
        stream_options?: {
          /** Whether usage information should be included in stream chunks. */
          include_usage?: boolean;
          /** Whether usage information should be included in every stream chunk. */
          chunk_include_usage?: boolean;
          [key: string]: unknown;
        };
        /** The end-user identifier for tracing requests. */
        user_id?: string;
        [key: string]: unknown;
      };
      output: {
        /** The completion identifier. */
        id?: string;
        /** The object type returned by the API. */
        object?: string;
        /** The Unix timestamp when the completion was created. */
        created?: number;
        /** The model that generated the completion. */
        model?: string;
        /** The completion choices. */
        choices: Array<{
          /** The choice index. */
          index: number;
          /** The generated text. */
          text: string;
          /** The reason why generation stopped. */
          finish_reason?: string;
          /** The safety flag returned by the API. */
          flag?: number;
          /** The round index that triggered safety handling when present. */
          ban_round?: number;
          [key: string]: unknown;
        }>;
        /** Usage information for the completion. */
        usage?: {
          /** The number of prompt tokens consumed. */
          prompt_tokens?: number;
          /** The number of completion tokens generated. */
          completion_tokens?: number;
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Generate embedding vectors for one or more input strings with Baidu Qianfan. */
    "qianfan.create_embeddings": {
      input: {
        /** The embedding model identifier. */
        model: string;
        /** One or more input strings to embed. */
        input: string | Array<string>;
        /** The output encoding format for embeddings. */
        encoding_format?: string;
        /**
         * The target embedding dimension count.
         * @minimum 1
         */
        dimensions?: number;
        /** An end-user identifier for tracing and abuse monitoring. */
        user?: string;
        [key: string]: unknown;
      };
      output: {
        /** The top-level object type. */
        object?: string;
        /** The list of embedding result items. */
        data: Array<{
          /** The object type for the embedding item. */
          object?: string;
          /** The position of this embedding item in the response. */
          index: number;
          /** The embedding payload. */
          embedding: Array<number> | string;
          [key: string]: unknown;
        }>;
        /** The embedding model used for the response. */
        model?: string;
        /** Usage information for the embeddings request. */
        usage?: {
          /** The number of prompt tokens consumed. */
          prompt_tokens?: number;
          /** The number of completion tokens generated. */
          completion_tokens?: number;
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Generate images with the Baidu Qianfan general image generation endpoint. */
    "qianfan.create_image_generation": {
      input: {
        /** The image model identifier to use. */
        model: string;
        /** The prompt used to generate the image. */
        prompt: string;
        /**
         * The number of images to generate.
         * @minimum 1
         */
        n?: number;
        /** The random seed used for generation. */
        seed?: number;
        /** The output image size, for example 1024x1024. */
        size?: string;
        /**
         * The number of denoising steps.
         * @minimum 1
         */
        steps?: number;
        /** The guidance scale used for generation. */
        guidance?: number;
        /** Whether a watermark should be added. */
        watermark?: boolean;
        /** Whether the upstream prompt extension feature should be enabled. */
        prompt_extend?: boolean;
        /** The negative prompt used for generation. */
        negative_prompt?: string;
        /** An end-user identifier for tracing requests. */
        user?: string;
        [key: string]: unknown;
      };
      output: {
        /** The image generation identifier. */
        id?: string;
        /** The Unix timestamp when the image was created. */
        created?: number;
        /** The generated image results. */
        data: Array<{
          /** The generated image URL. */
          url?: string;
          /** The generated image encoded as base64. */
          b64_json?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a non-streaming stored response with the Baidu Qianfan responses API. */
    "qianfan.create_response": {
      input: {
        /** The Qianfan model identifier to use. */
        model: string;
        /** The text or structured input items sent to the model. */
        input: string | Array<{
          /** The role of the message author. */
          role: "user" | "assistant" | "system" | "developer";
          /** The message input type. Must be message. */
          type?: "message";
          /** The optional status of the message item. */
          status?: "in_progress" | "completed" | "incomplete";
          /** The message content. */
          content: string | Array<{
            /** The input item type. Must be input_text. */
            type: "input_text";
            /** The text content for this input item. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The optional message identifier. */
          id?: string;
          [key: string]: unknown;
        } | {
          /** The message identifier. */
          id?: string;
          /** The output item type. Must be message. */
          type: "message";
          /** The status of the output message. */
          status?: string;
          /** The role of the output message author. */
          role: string;
          /**
           * The content items in the output message.
           * @minItems 1
           */
          content: Array<{
            /** The content type. Must be output_text. */
            type: "output_text";
            /** The generated output text. */
            text: string;
            /** The annotations attached to this output text. */
            annotations?: Array<{
              /** The annotation type. */
              type?: string;
              /** The cited chunk identifier. */
              chunk_id?: string;
              /** The annotated text content. */
              content?: string;
              /** The cited document identifier. */
              document_id?: string;
              /** The cited document name. */
              document_name?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | {
          /** The item type. Must be function_call. */
          type: "function_call";
          /** The function call identifier. */
          call_id: string;
          /** The function name requested by the model. */
          name: string;
          /** The serialized JSON arguments for the function call. */
          arguments: string;
          /** The optional item identifier. */
          id?: string;
          /** The optional status of the function call. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be function_call_output. */
          type: "function_call_output";
          /** The function call identifier. */
          call_id: string;
          /** The serialized function output payload. */
          output: string;
          /** The optional item identifier. */
          id?: string;
          /** The optional status of the function call output. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be reasoning. */
          type: "reasoning";
          /**
           * The reasoning content returned by the model.
           * @minItems 1
           */
          content: Array<{
            /** The content type. Must be reasoning_text. */
            type: "reasoning_text";
            /** The reasoning text returned by the model. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The optional reasoning item identifier. */
          id?: string;
          /** The optional status of the reasoning item. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be knowledge_search_call. */
          type: "knowledge_search_call";
          /** The optional knowledge search item identifier. */
          id?: string;
          /** The optional status of the knowledge search item. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | Record<string, unknown>>;
        /** An optional system instruction inserted before the input. */
        instructions?: string;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /**
         * The frequency penalty applied to repeated tokens.
         * @minimum -2
         * @maximum 2
         */
        frequency_penalty?: number;
        /**
         * The presence penalty applied to already seen tokens.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /** The nucleus sampling threshold. */
        top_p?: number;
        /** The tools available to the model. */
        tools?: Array<{
          /** The tool type. Must be knowledge_search. */
          type: "knowledge_search";
          /** The knowledge base identifier to search. */
          knowledgebase_ids: string;
          [key: string]: unknown;
        } | {
          /** The tool type. Must be function. */
          type: "function";
          /** The function name exposed to the model. */
          name: string;
          /** The JSON Schema object for the function parameters. */
          parameters: Record<string, unknown>;
          /** A human-readable description of the function. */
          description?: string;
          [key: string]: unknown;
        }>;
        /** Whether the response should be stored for later retrieval. */
        store?: boolean;
        /** The Unix timestamp when the stored response should expire. */
        expire_at?: number;
        /** The reasoning mode configuration. */
        thinking?: {
          /** Whether deep reasoning mode is enabled. */
          type: "enabled" | "disabled";
          [key: string]: unknown;
        };
        /** The previous response identifier used to continue a conversation. */
        previous_response_id?: string;
        [key: string]: unknown;
      };
      output: {
        /** The response identifier. */
        id?: string;
        /** The object type returned by the API. */
        object?: string;
        /** The Unix timestamp when the response was created. */
        created_at?: number;
        /** The current response status. */
        status?: string;
        /** The model that produced the response. */
        model?: string;
        /** The response output items. */
        output?: Array<{
          /** The role of the message author. */
          role: "user" | "assistant" | "system" | "developer";
          /** The message input type. Must be message. */
          type?: "message";
          /** The optional status of the message item. */
          status?: "in_progress" | "completed" | "incomplete";
          /** The message content. */
          content: string | Array<{
            /** The input item type. Must be input_text. */
            type: "input_text";
            /** The text content for this input item. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The optional message identifier. */
          id?: string;
          [key: string]: unknown;
        } | {
          /** The message identifier. */
          id?: string;
          /** The output item type. Must be message. */
          type: "message";
          /** The status of the output message. */
          status?: string;
          /** The role of the output message author. */
          role: string;
          /**
           * The content items in the output message.
           * @minItems 1
           */
          content: Array<{
            /** The content type. Must be output_text. */
            type: "output_text";
            /** The generated output text. */
            text: string;
            /** The annotations attached to this output text. */
            annotations?: Array<{
              /** The annotation type. */
              type?: string;
              /** The cited chunk identifier. */
              chunk_id?: string;
              /** The annotated text content. */
              content?: string;
              /** The cited document identifier. */
              document_id?: string;
              /** The cited document name. */
              document_name?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | {
          /** The item type. Must be function_call. */
          type: "function_call";
          /** The function call identifier. */
          call_id: string;
          /** The function name requested by the model. */
          name: string;
          /** The serialized JSON arguments for the function call. */
          arguments: string;
          /** The optional item identifier. */
          id?: string;
          /** The optional status of the function call. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be function_call_output. */
          type: "function_call_output";
          /** The function call identifier. */
          call_id: string;
          /** The serialized function output payload. */
          output: string;
          /** The optional item identifier. */
          id?: string;
          /** The optional status of the function call output. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be reasoning. */
          type: "reasoning";
          /**
           * The reasoning content returned by the model.
           * @minItems 1
           */
          content: Array<{
            /** The content type. Must be reasoning_text. */
            type: "reasoning_text";
            /** The reasoning text returned by the model. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The optional reasoning item identifier. */
          id?: string;
          /** The optional status of the reasoning item. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be knowledge_search_call. */
          type: "knowledge_search_call";
          /** The optional knowledge search item identifier. */
          id?: string;
          /** The optional status of the knowledge search item. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | Record<string, unknown>>;
        /** Usage information for the response. */
        usage?: {
          /** The number of input tokens consumed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** Detailed output token usage metadata. */
          output_tokens_details?: {
            /** The number of reasoning tokens generated. */
            reasoning_tokens?: number;
            [key: string]: unknown;
          };
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        /** Whether the response is stored for later retrieval. */
        store?: boolean;
        /** The Unix timestamp when the stored response expires. */
        expire_at?: number;
        [key: string]: unknown;
      };
    };
    /** Create a Baidu Qianfan video generation task. */
    "qianfan.create_video_generation_task": {
      input: {
        /** The video model identifier to use. */
        model: string;
        /**
         * The ordered content items for generation.
         * @minItems 1
         */
        content: Array<{
          /** The content item type, such as text or image_url. */
          type?: string;
          [key: string]: unknown;
        }>;
        /**
         * The requested video duration in seconds.
         * @minimum 1
         */
        duration?: number;
        /** Whether the upstream prompt extension feature should be enabled. */
        prompt_extend?: boolean;
        /** Whether a watermark should be added. */
        watermark?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The request identifier. */
        id?: string;
        /** The generated video task identifier. */
        task_id: string;
        [key: string]: unknown;
      };
    };
    /** Delete a previously stored Baidu Qianfan response by its identifier. */
    "qianfan.delete_response": {
      input: {
        /**
         * The response identifier.
         * @minLength 1
         */
        response_id: string;
      };
      output: {
        /** The deleted response identifier. */
        id: string;
        /** The object type returned by the API. */
        object: string;
        /** Whether the response was deleted successfully. */
        deleted: boolean;
        [key: string]: unknown;
      };
    };
    /** Fetch a Baidu Qianfan batch prediction job by its identifier. */
    "qianfan.get_batch": {
      input: {
        /**
         * The batch identifier.
         * @minLength 1
         */
        batch_id: string;
      };
      output: {
        /** The batch identifier. */
        id: string;
        /** The object type returned by the API. */
        object?: string;
        /** The current batch status. */
        status?: string;
        /** The endpoint executed by the batch. */
        endpoint?: string;
        /** The input file identifier. */
        input_file_id?: string;
        /** The output file identifier. */
        output_file_id?: string;
        /** The error file identifier. */
        error_file_id?: string;
        /** The completion window requested for the batch. */
        completion_window?: string;
        /** The batch metadata. */
        metadata?: Record<string, unknown>;
        /** The batch errors returned by the API. */
        errors?: unknown;
        /** The batch request counts returned by the API. */
        request_counts?: unknown;
        /** The batch usage metadata. */
        usage?: unknown;
        /** The Unix timestamp when the batch was created. */
        created_at?: number;
        /** The Unix timestamp when the batch entered the in-progress state. */
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
        /** The Unix timestamp when the batch will expire. */
        expires_at?: number;
        /** The Unix timestamp when the batch expired. */
        expired_at?: number;
        [key: string]: unknown;
      };
    };
    /** Fetch the raw content of a Baidu Qianfan file by its identifier. */
    "qianfan.get_file_content": {
      input: {
        /**
         * The file identifier.
         * @minLength 1
         */
        file_id: string;
      };
      output: {
        /** The raw file content returned by the API. */
        content: string;
        /** The response content type returned by the API. */
        content_type?: string;
      };
    };
    /** Fetch a previously stored Baidu Qianfan response by its identifier. */
    "qianfan.get_response": {
      input: {
        /**
         * The response identifier.
         * @minLength 1
         */
        response_id: string;
      };
      output: {
        /** The response identifier. */
        id?: string;
        /** The object type returned by the API. */
        object?: string;
        /** The Unix timestamp when the response was created. */
        created_at?: number;
        /** The current response status. */
        status?: string;
        /** The model that produced the response. */
        model?: string;
        /** The response output items. */
        output?: Array<{
          /** The role of the message author. */
          role: "user" | "assistant" | "system" | "developer";
          /** The message input type. Must be message. */
          type?: "message";
          /** The optional status of the message item. */
          status?: "in_progress" | "completed" | "incomplete";
          /** The message content. */
          content: string | Array<{
            /** The input item type. Must be input_text. */
            type: "input_text";
            /** The text content for this input item. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The optional message identifier. */
          id?: string;
          [key: string]: unknown;
        } | {
          /** The message identifier. */
          id?: string;
          /** The output item type. Must be message. */
          type: "message";
          /** The status of the output message. */
          status?: string;
          /** The role of the output message author. */
          role: string;
          /**
           * The content items in the output message.
           * @minItems 1
           */
          content: Array<{
            /** The content type. Must be output_text. */
            type: "output_text";
            /** The generated output text. */
            text: string;
            /** The annotations attached to this output text. */
            annotations?: Array<{
              /** The annotation type. */
              type?: string;
              /** The cited chunk identifier. */
              chunk_id?: string;
              /** The annotated text content. */
              content?: string;
              /** The cited document identifier. */
              document_id?: string;
              /** The cited document name. */
              document_name?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | {
          /** The item type. Must be function_call. */
          type: "function_call";
          /** The function call identifier. */
          call_id: string;
          /** The function name requested by the model. */
          name: string;
          /** The serialized JSON arguments for the function call. */
          arguments: string;
          /** The optional item identifier. */
          id?: string;
          /** The optional status of the function call. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be function_call_output. */
          type: "function_call_output";
          /** The function call identifier. */
          call_id: string;
          /** The serialized function output payload. */
          output: string;
          /** The optional item identifier. */
          id?: string;
          /** The optional status of the function call output. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be reasoning. */
          type: "reasoning";
          /**
           * The reasoning content returned by the model.
           * @minItems 1
           */
          content: Array<{
            /** The content type. Must be reasoning_text. */
            type: "reasoning_text";
            /** The reasoning text returned by the model. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The optional reasoning item identifier. */
          id?: string;
          /** The optional status of the reasoning item. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be knowledge_search_call. */
          type: "knowledge_search_call";
          /** The optional knowledge search item identifier. */
          id?: string;
          /** The optional status of the knowledge search item. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | Record<string, unknown>>;
        /** Usage information for the response. */
        usage?: {
          /** The number of input tokens consumed. */
          input_tokens?: number;
          /** The number of output tokens generated. */
          output_tokens?: number;
          /** Detailed output token usage metadata. */
          output_tokens_details?: {
            /** The number of reasoning tokens generated. */
            reasoning_tokens?: number;
            [key: string]: unknown;
          };
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        /** Whether the response is stored for later retrieval. */
        store?: boolean;
        /** The Unix timestamp when the stored response expires. */
        expire_at?: number;
        [key: string]: unknown;
      };
    };
    /** Fetch a Baidu Qianfan video generation task by its task identifier. */
    "qianfan.get_video_generation_task": {
      input: {
        /**
         * The video task identifier.
         * @minLength 1
         */
        task_id: string;
      };
      output: {
        /** The request identifier. */
        id?: string;
        /** The video task identifier. */
        task_id?: string;
        /** The video model identifier. */
        model?: string;
        /** The current task status. */
        status?: string;
        /** The output video width. */
        width?: number;
        /** The output video height. */
        height?: number;
        /** The output video duration in seconds. */
        duration?: number;
        /** The Unix timestamp when the task was created. */
        created_at?: number;
        /** The Unix timestamp when the task was updated. */
        updated_at?: number;
        /** The video task content items. */
        content?: Array<{
          /** The content item type, such as text or image_url. */
          type?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Baidu Qianfan batch prediction jobs with optional pagination. */
    "qianfan.list_batches": {
      input: {
        /** Return batches after this batch identifier. */
        after?: string;
        /**
         * The maximum number of batches to return.
         * @minimum 1
         */
        limit?: number;
      };
      output: {
        /** The object type returned by the API. */
        object?: string;
        /** The matching batch objects. */
        data: Array<{
          /** The batch identifier. */
          id: string;
          /** The object type returned by the API. */
          object?: string;
          /** The current batch status. */
          status?: string;
          /** The endpoint executed by the batch. */
          endpoint?: string;
          /** The input file identifier. */
          input_file_id?: string;
          /** The output file identifier. */
          output_file_id?: string;
          /** The error file identifier. */
          error_file_id?: string;
          /** The completion window requested for the batch. */
          completion_window?: string;
          /** The batch metadata. */
          metadata?: Record<string, unknown>;
          /** The batch errors returned by the API. */
          errors?: unknown;
          /** The batch request counts returned by the API. */
          request_counts?: unknown;
          /** The batch usage metadata. */
          usage?: unknown;
          /** The Unix timestamp when the batch was created. */
          created_at?: number;
          /** The Unix timestamp when the batch entered the in-progress state. */
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
          /** The Unix timestamp when the batch will expire. */
          expires_at?: number;
          /** The Unix timestamp when the batch expired. */
          expired_at?: number;
          [key: string]: unknown;
        }>;
        /** The first batch identifier in the page. */
        first_id?: string;
        /** The last batch identifier in the page. */
        last_id?: string;
        /** Whether more batches are available. */
        has_more?: boolean;
        [key: string]: unknown;
      };
    };
    /** List files stored in Baidu Qianfan with optional filters. */
    "qianfan.list_files": {
      input: {
        /** Return files after this file identifier. */
        after?: string;
        /**
         * The maximum number of files to return.
         * @minimum 1
         */
        limit?: number;
        /** The order in which files should be returned. */
        order?: "asc" | "desc";
        /** Filter by file purpose. */
        purpose?: string;
      };
      output: {
        /** The matching file objects. */
        data: Array<{
          /** The file identifier. */
          id: string;
          /** The file size in bytes. */
          bytes?: number;
          /** The object type returned by the API. */
          object?: string;
          /** The declared purpose of the file. */
          purpose?: string;
          /** The file name stored by the API. */
          filename?: string;
          /** The Unix timestamp when the file was created. */
          created_at?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the models available to the current Baidu Qianfan API key. */
    "qianfan.list_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type. */
        object?: string;
        /** The list of available models. */
        data: Array<{
          /** The model identifier. */
          id: string;
          /** The object type returned by the API. */
          object?: string;
          /** The Unix timestamp when the model metadata was created. */
          created?: number;
          /** The organization or owner that provides the model. */
          owned_by?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the stored context items for a previously created Baidu Qianfan response. */
    "qianfan.list_response_input_items": {
      input: {
        /**
         * The response identifier.
         * @minLength 1
         */
        response_id: string;
        /** Return items after this item identifier. */
        after?: string;
        /** Return items before this item identifier. */
        before?: string;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The order in which input items should be returned. */
        order?: "asc" | "desc";
      };
      output: {
        /** The object type returned by the API. */
        object: string;
        /** The stored response context items. */
        data: Array<{
          /** The role of the message author. */
          role: "user" | "assistant" | "system" | "developer";
          /** The message input type. Must be message. */
          type?: "message";
          /** The optional status of the message item. */
          status?: "in_progress" | "completed" | "incomplete";
          /** The message content. */
          content: string | Array<{
            /** The input item type. Must be input_text. */
            type: "input_text";
            /** The text content for this input item. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The optional message identifier. */
          id?: string;
          [key: string]: unknown;
        } | {
          /** The message identifier. */
          id?: string;
          /** The output item type. Must be message. */
          type: "message";
          /** The status of the output message. */
          status?: string;
          /** The role of the output message author. */
          role: string;
          /**
           * The content items in the output message.
           * @minItems 1
           */
          content: Array<{
            /** The content type. Must be output_text. */
            type: "output_text";
            /** The generated output text. */
            text: string;
            /** The annotations attached to this output text. */
            annotations?: Array<{
              /** The annotation type. */
              type?: string;
              /** The cited chunk identifier. */
              chunk_id?: string;
              /** The annotated text content. */
              content?: string;
              /** The cited document identifier. */
              document_id?: string;
              /** The cited document name. */
              document_name?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        } | {
          /** The item type. Must be function_call. */
          type: "function_call";
          /** The function call identifier. */
          call_id: string;
          /** The function name requested by the model. */
          name: string;
          /** The serialized JSON arguments for the function call. */
          arguments: string;
          /** The optional item identifier. */
          id?: string;
          /** The optional status of the function call. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be function_call_output. */
          type: "function_call_output";
          /** The function call identifier. */
          call_id: string;
          /** The serialized function output payload. */
          output: string;
          /** The optional item identifier. */
          id?: string;
          /** The optional status of the function call output. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be reasoning. */
          type: "reasoning";
          /**
           * The reasoning content returned by the model.
           * @minItems 1
           */
          content: Array<{
            /** The content type. Must be reasoning_text. */
            type: "reasoning_text";
            /** The reasoning text returned by the model. */
            text: string;
            [key: string]: unknown;
          }>;
          /** The optional reasoning item identifier. */
          id?: string;
          /** The optional status of the reasoning item. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | {
          /** The item type. Must be knowledge_search_call. */
          type: "knowledge_search_call";
          /** The optional knowledge search item identifier. */
          id?: string;
          /** The optional status of the knowledge search item. */
          status?: "in_progress" | "completed" | "incomplete";
          [key: string]: unknown;
        } | Record<string, unknown>>;
        /** The first item identifier in the page. */
        first_id?: string;
        /** The last item identifier in the page. */
        last_id?: string;
        /** Whether more items are available. */
        has_more?: boolean;
        [key: string]: unknown;
      };
    };
    /** List Baidu Qianfan video generation tasks with optional filters. */
    "qianfan.list_video_generation_tasks": {
      input: {
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page_num?: number;
        /**
         * The number of tasks per page.
         * @minimum 1
         */
        page_size?: number;
        /** Filter by task status. */
        status?: string;
        /** Filter by task identifiers. */
        task_ids?: Array<string>;
        /** Filter by model name. */
        model_name?: string;
        /** Filter tasks created after this time. */
        start_time?: string;
        /** Filter tasks created before this time. */
        end_time?: string;
        [key: string]: unknown;
      };
      output: {
        /** The request identifier. */
        id?: string;
        /** The total number of matching tasks. */
        total?: number;
        /** The matching video generation tasks. */
        items: Array<{
          /** The request identifier. */
          id?: string;
          /** The video task identifier. */
          task_id?: string;
          /** The video model identifier. */
          model?: string;
          /** The current task status. */
          status?: string;
          /** The output video width. */
          width?: number;
          /** The output video height. */
          height?: number;
          /** The output video duration in seconds. */
          duration?: number;
          /** The Unix timestamp when the task was created. */
          created_at?: number;
          /** The Unix timestamp when the task was updated. */
          updated_at?: number;
          /** The video task content items. */
          content?: Array<{
            /** The content item type, such as text or image_url. */
            type?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Score and rank candidate documents against a query with a Baidu Qianfan rerank model. */
    "qianfan.rerank": {
      input: {
        /** The rerank model identifier. */
        model: string;
        /** The search query used to score the candidate documents. */
        query: string;
        /**
         * The ordered candidate documents to rank.
         * @minItems 1
         */
        documents: Array<string>;
        /**
         * The maximum number of ranked documents to return.
         * @minimum 1
         */
        top_n?: number;
        /** Whether to include the ranked document text in the response. */
        return_documents?: boolean;
        /**
         * The maximum number of chunks to evaluate per document.
         * @minimum 1
         */
        max_chunks_per_doc?: number;
        /** An end-user identifier for tracing and abuse monitoring. */
        user?: string;
        [key: string]: unknown;
      };
      output: {
        /** The rerank request identifier. */
        id?: string;
        /** The ranked document results. */
        results: Array<{
          /** The index of the original document in the input list. */
          index: number;
          /** The relevance score assigned to the document. */
          relevance_score: number;
          /** The ranked document payload. */
          document?: string | Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The rerank model used for the response. */
        model?: string;
        /** Usage information for the rerank request. */
        usage?: {
          /** The number of prompt tokens consumed. */
          prompt_tokens?: number;
          /** The number of completion tokens generated. */
          completion_tokens?: number;
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Run the Baidu Qianfan PaddleOCR-VL endpoint on a document or image. */
    "qianfan.run_paddleocr_vl": {
      input: {
        /** The image or document URL, or another upstream-supported file descriptor string. */
        file: string;
        /** The OCR model identifier. Use paddleocr-vl-0.9b unless you need a specific release. */
        model?: string;
        /** The file type declared to the upstream API. */
        fileType?: number;
        /** The nucleus sampling threshold. */
        topP?: number;
        /** Whether layout NMS should be enabled. */
        layoutNms?: boolean;
        /** The maximum pixel count allowed for preprocessing. */
        maxPixels?: number;
        /** The minimum pixel count allowed for preprocessing. */
        minPixels?: number;
        /** Whether visualization artifacts should be returned. */
        visualize?: boolean;
        /** The optional prompt label used by the OCR model. */
        promptLabel?: string;
        /** The sampling temperature for generation. */
        temperature?: number;
        /** Whether document unwarping should be enabled. */
        useDocUnwarping?: boolean;
        /** The repetition penalty applied to decoding. */
        repetitionPenalty?: number;
        /** Whether layout detection should be enabled. */
        useLayoutDetection?: boolean;
        /** Whether chart recognition should be enabled. */
        useChartRecognition?: boolean;
        /** Whether document orientation classification should be enabled. */
        useDocOrientationClassify?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The OCR request identifier. */
        id?: string;
        /** The OCR result returned by the API. */
        result: unknown;
        [key: string]: unknown;
      };
    };
    /** Run the Baidu Qianfan PP-StructureV3 OCR endpoint on a document or image. */
    "qianfan.run_pp_structure_v3": {
      input: {
        /** The image or document URL, or another upstream-supported file descriptor string. */
        file: string;
        /** The OCR model identifier. Use pp-structurev3 unless you need a specific release. */
        model?: string;
        /** The file type declared to the upstream API. */
        fileType?: number;
        /** Whether layout NMS should be enabled. */
        layoutNms?: boolean;
        /** Whether visualization artifacts should be returned. */
        visualize?: boolean;
        /** The seal detection threshold. */
        sealDetThresh?: number;
        /** The text detection threshold. */
        textDetThresh?: number;
        /** The layout detection threshold. */
        layoutThreshold?: number;
        /** Whether document unwarping should be enabled. */
        useDocUnwarping?: boolean;
        /** The seal detection box threshold. */
        sealDetBoxThresh?: number;
        /** The seal detection limit type. */
        sealDetLimitType?: string;
        /** The text detection box threshold. */
        textDetBoxThresh?: number;
        /** The text detection limit type. */
        textDetLimitType?: string;
        /** The layout unclip ratio. */
        layoutUnclipRatio?: number;
        /** The seal detection unclip ratio. */
        sealDetUnclipRatio?: number;
        /** The seal recognition score threshold. */
        sealRecScoreThresh?: number;
        /** The text detection unclip ratio. */
        textDetUnclipRatio?: number;
        /** The text recognition score threshold. */
        textRecScoreThresh?: number;
        /** Whether region detection should be enabled. */
        useRegionDetection?: boolean;
        /** Whether seal recognition should be enabled. */
        useSealRecognition?: boolean;
        /** The seal detection side length limit. */
        sealDetLimitSideLen?: number;
        /** The text detection side length limit. */
        textDetLimitSideLen?: number;
        /** Whether chart recognition should be enabled. */
        useChartRecognition?: boolean;
        /** Whether table recognition should be enabled. */
        useTableRecognition?: boolean;
        /** Whether formula recognition should be enabled. */
        useFormulaRecognition?: boolean;
        /** Whether text-line orientation should be enabled. */
        useTextlineOrientation?: boolean;
        /** Whether the wired-table end-to-end recognition model should be enabled. */
        useE2eWiredTableRecModel?: boolean;
        /** Whether document orientation classification should be enabled. */
        useDocOrientationClassify?: boolean;
        /** Whether the wireless-table end-to-end recognition model should be enabled. */
        useE2eWirelessTableRecModel?: boolean;
        /** Whether OCR results should be merged with table cells. */
        useOcrResultsWithTableCells?: boolean;
        /** Whether table orientation classification should be enabled. */
        useTableOrientationClassify?: boolean;
        /** Whether wired table cells should be converted to HTML. */
        useWiredTableCellsTransToHtml?: boolean;
        /** Whether wireless table cells should be converted to HTML. */
        useWirelessTableCellsTransToHtml?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The OCR request identifier. */
        id?: string;
        /** The OCR result returned by the API. */
        result: unknown;
        [key: string]: unknown;
      };
    };
    /** Upload a file to Baidu Qianfan for batch or other file-based APIs. */
    "qianfan.upload_file": {
      input: {
        /** The file to upload. */
        file?: {
          /** The file name to use for the upload. */
          name: string;
          /** The MIME type of the upload file. */
          mimetype?: string;
          /** The public URL used to fetch the upload file. */
          url?: string;
          /** The declared purpose of the upload file. */
          purpose?: string;
          /** The base64-encoded content of the upload file. */
          content_base64?: string;
        };
        /** The declared purpose of the uploaded file. */
        purpose?: string;
        [key: string]: unknown;
      };
      output: {
        /** The file identifier. */
        id: string;
        /** The file size in bytes. */
        bytes?: number;
        /** The object type returned by the API. */
        object?: string;
        /** The declared purpose of the file. */
        purpose?: string;
        /** The file name stored by the API. */
        filename?: string;
        /** The Unix timestamp when the file was created. */
        created_at?: number;
        [key: string]: unknown;
      };
    };
  }
}
