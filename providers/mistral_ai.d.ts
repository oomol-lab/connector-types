import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Appends a new message to an existing session and triggers a new completion. */
    "mistral_ai.append_to_conversation": {
      input: {
        /** Session ID. */
        conversation_id: string;
        /** Input to append to the session. */
        inputs: string | Array<Record<string, unknown>>;
        /** The completion parameter of this append request. */
        completion_args?: {
          /** Sampling temperature. */
          temperature?: number;
          /** Kernel sampling threshold. */
          top_p?: number;
          /** The maximum number of generated tokens. */
          max_tokens?: number;
          /** Stop generating conditions. */
          stop?: string | Array<string>;
          /** Random seed. */
          random_seed?: number;
          /** Response format. */
          response_format?: {
            /** Response format type. */
            type?: "text" | "json_object" | "json_schema";
            /** The JSON Schema used when type is json_schema. */
            json_schema?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Request a list of available tools. */
          tools?: Array<{
            /** Tool type, such as function. */
            type: string;
            /** Function tool configuration. */
            function?: {
              /** Function tool name. */
              name: string;
              /** Function tool description. */
              description?: string;
              /** JSON Schema of function parameters. */
              parameters?: Record<string, unknown>;
              /** Whether to strictly follow the parameter Schema. */
              strict?: boolean;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Tool calling strategy. */
          tool_choice?: "none" | "auto" | "any" | "required" | {
            /** Tool selection type. */
            type: "function";
            /** Function tool information. */
            function: {
              /** The function name that is forced to be called. */
              name: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** There are penalties. */
          presence_penalty?: number;
          /** Frequency penalty. */
          frequency_penalty?: number;
          /** Returns the number of candidates. */
          n?: number;
          /** Predictive optimization configuration. */
          prediction?: {
            /** Predict content type. */
            type?: string;
            /** Predict content. */
            content?: string;
            [key: string]: unknown;
          };
          /** Whether to enable parallel tool invocation. */
          parallel_tool_calls?: boolean;
          /** prompt mode。 */
          prompt_mode?: string;
          /** Reasoning strength. */
          reasoning_effort?: "high" | "none";
          /** Whether to inject security tips. */
          safe_prompt?: boolean;
          [key: string]: unknown;
        };
        /** handoff execution method. */
        handoff_execution?: "client" | "server";
        /** Whether to persist storage. */
        store?: boolean;
        /** Tool call confirmations. */
        tool_confirmations?: Array<{
          /** Tool call ID. */
          tool_call_id: string;
          /** Confirmation decision. */
          confirmation: "allow" | "deny";
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Create a new Mistral Agent. */
    "mistral_ai.create_agent": {
      input: {
        /** The model used by Agent by default. */
        model: string;
        /** Agent name. */
        name: string;
        /** Agent instructions。 */
        instructions?: string;
        /** List of tools available to Agent. */
        tools?: Array<{
          /** Tool type, such as function. */
          type: string;
          /** Function tool configuration. */
          function?: {
            /** Function tool name. */
            name: string;
            /** Function tool description. */
            description?: string;
            /** JSON Schema of function parameters. */
            parameters?: Record<string, unknown>;
            /** Whether to strictly follow the parameter Schema. */
            strict?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Agent-level completion parameters. */
        completion_args?: {
          /** Sampling temperature. */
          temperature?: number;
          /** Kernel sampling threshold. */
          top_p?: number;
          /** The maximum number of generated tokens. */
          max_tokens?: number;
          /** Stop generating conditions. */
          stop?: string | Array<string>;
          /** Random seed. */
          random_seed?: number;
          /** Response format. */
          response_format?: {
            /** Response format type. */
            type?: "text" | "json_object" | "json_schema";
            /** The JSON Schema used when type is json_schema. */
            json_schema?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Request a list of available tools. */
          tools?: Array<{
            /** Tool type, such as function. */
            type: string;
            /** Function tool configuration. */
            function?: {
              /** Function tool name. */
              name: string;
              /** Function tool description. */
              description?: string;
              /** JSON Schema of function parameters. */
              parameters?: Record<string, unknown>;
              /** Whether to strictly follow the parameter Schema. */
              strict?: boolean;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Tool calling strategy. */
          tool_choice?: "none" | "auto" | "any" | "required" | {
            /** Tool selection type. */
            type: "function";
            /** Function tool information. */
            function: {
              /** The function name that is forced to be called. */
              name: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** There are penalties. */
          presence_penalty?: number;
          /** Frequency penalty. */
          frequency_penalty?: number;
          /** Returns the number of candidates. */
          n?: number;
          /** Predictive optimization configuration. */
          prediction?: {
            /** Predict content type. */
            type?: string;
            /** Predict content. */
            content?: string;
            [key: string]: unknown;
          };
          /** Whether to enable parallel tool invocation. */
          parallel_tool_calls?: boolean;
          /** prompt mode。 */
          prompt_mode?: string;
          /** Reasoning strength. */
          reasoning_effort?: "high" | "none";
          /** Whether to inject security tips. */
          safe_prompt?: boolean;
          [key: string]: unknown;
        };
        /** Guardrails to apply. */
        guardrails?: Array<Record<string, unknown>>;
        /** Agent description. */
        description?: string;
        /** List of Agent IDs that can be handoffed. */
        handoffs?: Array<string>;
        /** Agent metadata。 */
        metadata?: Record<string, unknown>;
        /** Version message for this update. */
        version_message?: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Call the Mistral agents completions interface to generate Agent responses. */
    "mistral_ai.create_agents_completion": {
      input: {
        /** Agent ID. */
        agent_id: string;
        /** List of messages sent to the Agent. */
        messages: Array<{
          /** Message role. */
          role: "system" | "user" | "assistant" | "tool";
          /** Message content. */
          content: string | Array<Record<string, unknown>>;
          /** The name of the message participant. */
          name?: string;
          /** Tool call records in assistant messages. */
          tool_calls?: Array<Record<string, unknown>>;
          /** tool call ID corresponding to the tool message. */
          tool_call_id?: string;
          /** Whether to treat assistant messages as a prefix. */
          prefix?: boolean;
          /** Reasoning content. */
          reasoning_content?: string;
          [key: string]: unknown;
        }>;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 1.5
         */
        temperature?: number;
        /**
         * Kernel sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /**
         * The maximum number of generated tokens.
         * @minimum 0
         */
        max_tokens?: number;
        /** Whether to stream returns. */
        stream?: boolean;
        /** Stop generating conditions. */
        stop?: string | Array<string>;
        /**
         * Random seed.
         * @minimum 0
         */
        random_seed?: number;
        /** Request metadata. */
        metadata?: Record<string, unknown>;
        /** Response format. */
        response_format?: {
          /** Response format type. */
          type?: "text" | "json_object" | "json_schema";
          /** The JSON Schema used when type is json_schema. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** List of tools added in this request. */
        tools?: Array<{
          /** Tool type, such as function. */
          type: string;
          /** Function tool configuration. */
          function?: {
            /** Function tool name. */
            name: string;
            /** Function tool description. */
            description?: string;
            /** JSON Schema of function parameters. */
            parameters?: Record<string, unknown>;
            /** Whether to strictly follow the parameter Schema. */
            strict?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Tool calling strategy. */
        tool_choice?: "none" | "auto" | "any" | "required" | {
          /** Tool selection type. */
          type: "function";
          /** Function tool information. */
          function: {
            /** The function name that is forced to be called. */
            name: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * There are penalties.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /**
         * Frequency penalty.
         * @minimum -2
         * @maximum 2
         */
        frequency_penalty?: number;
        /**
         * Returns the number of candidates.
         * @minimum 1
         */
        n?: number;
        /** Predictive optimization configuration. */
        prediction?: {
          /** Predict content type. */
          type?: string;
          /** Predict content. */
          content?: string;
          [key: string]: unknown;
        };
        /** Whether to enable parallel tool invocation. */
        parallel_tool_calls?: boolean;
        /** prompt mode。 */
        prompt_mode?: string;
        /** Reasoning strength. */
        reasoning_effort?: "high" | "none";
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Upload the audio file and call the Mistral transcoding interface. */
    "mistral_ai.create_audio_transcription": {
      input: {
        /** Audio file source. */
        file?: {
          /** The file name to use when uploading to Mistral. */
          name: string;
          /** The MIME type of the uploaded file. */
          mimetype?: string;
          /** The public URL of the file to be uploaded. */
          url?: string;
          /** The Base64 content of the file to be uploaded. */
          content_base64?: string;
          /** Compatible field, currently not supported, need to use url or content_base64 instead. */
          s3key?: string;
        };
        /** ID of a previously uploaded audio file. */
        file_id?: string;
        /** Context bias phrases. */
        context_bias?: Array<string>;
        /** Whether to diarize speakers. */
        diarize?: boolean;
        /** Audio language code. */
        language?: string;
        /** Transcription model ID. */
        model: string;
        /** Sampling temperature. */
        temperature?: number;
        /** Timestamp granularities to include. */
        timestamp_granularities?: Array<"segment" | "word">;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Call the Mistral chat completions interface to generate chat responses. */
    "mistral_ai.create_chat_completion": {
      input: {
        /** The model ID used. */
        model: string;
        /** List of chat messages. */
        messages: Array<{
          /** Message role. */
          role: "system" | "user" | "assistant" | "tool";
          /** Message content. */
          content: string | Array<Record<string, unknown>>;
          /** The name of the message participant. */
          name?: string;
          /** Tool call records in assistant messages. */
          tool_calls?: Array<Record<string, unknown>>;
          /** tool call ID corresponding to the tool message. */
          tool_call_id?: string;
          /** Whether to treat assistant messages as a prefix. */
          prefix?: boolean;
          /** Reasoning content. */
          reasoning_content?: string;
          [key: string]: unknown;
        }>;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 1.5
         */
        temperature?: number;
        /**
         * Kernel sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /**
         * The maximum number of generated tokens.
         * @minimum 0
         */
        max_tokens?: number;
        /** Whether to use streaming responses. */
        stream?: boolean;
        /** Stop generating conditions. */
        stop?: string | Array<string>;
        /**
         * Random seed.
         * @minimum 0
         */
        random_seed?: number;
        /** Request metadata. */
        metadata?: Record<string, unknown>;
        /** Response format. */
        response_format?: {
          /** Response format type. */
          type?: "text" | "json_object" | "json_schema";
          /** The JSON Schema used when type is json_schema. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** List of available tools. */
        tools?: Array<{
          /** Tool type, such as function. */
          type: string;
          /** Function tool configuration. */
          function?: {
            /** Function tool name. */
            name: string;
            /** Function tool description. */
            description?: string;
            /** JSON Schema of function parameters. */
            parameters?: Record<string, unknown>;
            /** Whether to strictly follow the parameter Schema. */
            strict?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Tool calling strategy. */
        tool_choice?: "none" | "auto" | "any" | "required" | {
          /** Tool selection type. */
          type: "function";
          /** Function tool information. */
          function: {
            /** The function name that is forced to be called. */
            name: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /**
         * There are penalties.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /**
         * Frequency penalty.
         * @minimum -2
         * @maximum 2
         */
        frequency_penalty?: number;
        /**
         * Returns the number of candidates.
         * @minimum 1
         */
        n?: number;
        /** Predictive optimization configuration. */
        prediction?: {
          /** Predict content type. */
          type?: string;
          /** Predict content. */
          content?: string;
          [key: string]: unknown;
        };
        /** Whether to enable parallel tool invocation. */
        parallel_tool_calls?: boolean;
        /** prompt mode。 */
        prompt_mode?: string;
        /** Reasoning strength. */
        reasoning_effort?: "high" | "none";
        /** guardrail configuration list. */
        guardrails?: Array<Record<string, unknown>>;
        /** Whether to inject security tips. */
        safe_prompt?: boolean;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Call the Mistral chat moderations interface to detect chat message security risks. */
    "mistral_ai.create_chat_moderation": {
      input: {
        /** chat moderation model ID. */
        model: string;
        /** Chat content pending review. */
        input: Array<{
          /** Message role. */
          role: "system" | "user" | "assistant" | "tool";
          /** Message content. */
          content: string | Array<Record<string, unknown>>;
          /** The name of the message participant. */
          name?: string;
          /** Tool call records in assistant messages. */
          tool_calls?: Array<Record<string, unknown>>;
          /** tool call ID corresponding to the tool message. */
          tool_call_id?: string;
          /** Whether to treat assistant messages as a prefix. */
          prefix?: boolean;
          /** Reasoning content. */
          reasoning_content?: string;
          [key: string]: unknown;
        }> | Array<Array<{
          /** Message role. */
          role: "system" | "user" | "assistant" | "tool";
          /** Message content. */
          content: string | Array<Record<string, unknown>>;
          /** The name of the message participant. */
          name?: string;
          /** Tool call records in assistant messages. */
          tool_calls?: Array<Record<string, unknown>>;
          /** tool call ID corresponding to the tool message. */
          tool_call_id?: string;
          /** Whether to treat assistant messages as a prefix. */
          prefix?: boolean;
          /** Reasoning content. */
          reasoning_content?: string;
          [key: string]: unknown;
        }>>;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Call the Mistral embeddings interface to generate vectors. */
    "mistral_ai.create_embeddings": {
      input: {
        /** Embed model ID. */
        model: string;
        /** The text to generate the vector from. */
        input: string | Array<string>;
        /** Request metadata. */
        metadata?: Record<string, unknown>;
        /**
         * Output vector dimensions.
         * @exclusiveMinimum 0
         */
        output_dimension?: number;
        /** Output vector data type. */
        output_dtype?: "float" | "int8" | "uint8" | "binary" | "ubinary";
        /** Vector encoding format. */
        encoding_format?: "float" | "base64";
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Call the Mistral FIM completions interface to generate completion results. */
    "mistral_ai.create_fim_completion": {
      input: {
        /** Model ID that supports FIM. */
        model: string;
        /** The prefix content to be completed. */
        prompt: string;
        /** Completed suffix context. */
        suffix?: string;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 1.5
         */
        temperature?: number;
        /**
         * Kernel sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /**
         * The maximum number of generated tokens.
         * @minimum 0
         */
        max_tokens?: number;
        /**
         * Minimum number of generated tokens.
         * @minimum 0
         */
        min_tokens?: number;
        /** Whether to use streaming responses. */
        stream?: boolean;
        /** Stop generating conditions. */
        stop?: string | Array<string>;
        /**
         * Random seed.
         * @minimum 0
         */
        random_seed?: number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Create a new Mistral library. */
    "mistral_ai.create_library": {
      input: {
        /** library name. */
        name: string;
        /** library description. */
        description?: string;
        /** Document tile size. */
        chunk_size?: number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Creates or updates the shared access level for the specified library. */
    "mistral_ai.create_library_share": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Sharing permission level. */
        level: "Viewer" | "Editor";
        /** Organization ID. */
        org_id?: string;
        /** The UUID of the shared object. */
        share_with_uuid: string;
        /** The entity type of the shared object. */
        share_with_type: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Call the Mistral moderations interface to detect text security risks. */
    "mistral_ai.create_moderation": {
      input: {
        /** moderation model ID. */
        model: string;
        /** Text pending review. */
        input: string | Array<string>;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Call the Mistral OCR interface to identify text and layout in the document. */
    "mistral_ai.create_ocr": {
      input: {
        /** OCR model ID. */
        model: string;
        /** Custom ID for this OCR request. */
        id?: string;
        /** The document or image to be recognized. */
        document: {
          /** File reference type. */
          type: "file";
          /** The ID of the uploaded file. */
          file_id: string;
          [key: string]: unknown;
        } | {
          /** Document URL type. */
          type: "document_url";
          /** Document public network URL. */
          document_url?: string;
          [key: string]: unknown;
        } | {
          /** Image URL type. */
          type: "image_url";
          /** Image public website URL. */
          image_url?: string;
          [key: string]: unknown;
        };
        /** Only process specified pages. */
        pages?: Array<number>;
        /** Whether to return the base64 of the extracted image in the result. */
        include_image_base64?: boolean;
        /** The maximum number of images to extract. */
        image_limit?: number;
        /** Extract the minimum size of the image. */
        image_min_size?: number;
        /** Structured extraction format for images or bboxes. */
        bbox_annotation_format?: {
          /** Response format type. */
          type?: "text" | "json_object" | "json_schema";
          /** The JSON Schema used when type is json_schema. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A structured extraction format for the entire document. */
        document_annotation_format?: {
          /** Response format type. */
          type?: "text" | "json_object" | "json_schema";
          /** The JSON Schema used when type is json_schema. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Prompt words that guide the structured extraction of the entire document. */
        document_annotation_prompt?: string;
        /** Confidence granularity. */
        confidence_scores_granularity?: "word" | "page";
        /** Table output format. */
        table_format?: "markdown" | "html";
        /** Whether to extract the header. */
        extract_header?: boolean;
        /** Whether to extract the footer. */
        extract_footer?: boolean;
        /** bbox structured extraction prompt words. */
        bbox_annotation_format_prompt?: string;
        /** Compatible with additional document prompt word fields. */
        document_annotation_prompt_extra?: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Create or update an Agent version alias. */
    "mistral_ai.create_or_update_agent_alias": {
      input: {
        /** Agent ID. */
        agent_id: string;
        /** Agent alias name. */
        alias: string;
        /** The version number pointed to by the alias. */
        version: number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Delete the specified Agent. */
    "mistral_ai.delete_agent": {
      input: {
        /** Agent ID. */
        agent_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the resource has been deleted. */
        deleted: boolean;
      };
    };
    /** Delete the specified session. */
    "mistral_ai.delete_conversation": {
      input: {
        /** Session ID. */
        conversation_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the resource has been deleted. */
        deleted: boolean;
      };
    };
    /** Delete the specified file. */
    "mistral_ai.delete_file": {
      input: {
        /** File ID. */
        file_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Delete the specified library. */
    "mistral_ai.delete_library": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Delete the specified library document. */
    "mistral_ai.delete_library_document": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Document ID. */
        document_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Whether the resource has been deleted. */
        deleted: boolean;
      };
    };
    /** Removes the shared access level for the specified library. */
    "mistral_ai.delete_library_share": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Organization ID. */
        org_id?: string;
        /** The UUID of the object to be unshared. */
        share_with_uuid: string;
        /** The object entity type to be unshared. */
        share_with_type: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Download the file contents and return the accessible download address via fileTransit. */
    "mistral_ai.download_file": {
      input: {
        /** File ID. */
        file_id: string;
        [key: string]: unknown;
      };
      output: {
        /** Downloaded file content. */
        content: {
          /** The filename to use when downloading the file. */
          name: string;
          /** The MIME type of the downloaded file. */
          mimetype: string;
          /** The accessible address of the file after it is transferred by fileTransit. */
          s3url: string;
        };
      };
    };
    /** Get a single Agent by Agent ID, optionally specifying agent_version. */
    "mistral_ai.get_agent": {
      input: {
        /** Agent ID. */
        agent_id: string;
        /** Optional Agent version number or alias. */
        agent_version?: string | number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get version details of the specified Agent. */
    "mistral_ai.get_agent_version": {
      input: {
        /** Agent ID. */
        agent_id: string;
        /** Version number or version alias. */
        version: string | number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get metadata for a single session by session ID. */
    "mistral_ai.get_conversation": {
      input: {
        /** Session ID. */
        conversation_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get all history entries in the session. */
    "mistral_ai.get_conversation_history": {
      input: {
        /** Session ID. */
        conversation_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get all message entries in the session. */
    "mistral_ai.get_conversation_messages": {
      input: {
        /** Session ID. */
        conversation_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get a temporary signed link to a text file extracted from library document. */
    "mistral_ai.get_document_extracted_text_url": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Document ID. */
        document_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get a temporary signed link to the library document's original file. */
    "mistral_ai.get_document_signed_url": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Document ID. */
        document_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get the processing status of library document. */
    "mistral_ai.get_document_status": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Document ID. */
        document_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get the extracted text content of the library document. */
    "mistral_ai.get_document_text_content": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Document ID. */
        document_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get the temporary signature download link for the file. */
    "mistral_ai.get_file_signed_url": {
      input: {
        /** File ID. */
        file_id: string;
        /**
         * The number of hours the signature link expires.
         * @minimum 1
         */
        expiry?: number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** List fine-tuning jobs, with paging and filtering conditions. */
    "mistral_ai.get_fine_tuning_jobs": {
      input: {
        /**
         * Page number, starting from 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of items returned per page.
         * @minimum 1
         */
        page_size?: number;
        /** Filter by base model. */
        model?: string;
        /** Filter by task status. */
        status?: string;
        /** Filter by model suffix. */
        suffix?: string;
        /** Filter by Weights & Biases run name. */
        wandb_name?: string;
        /** Filter by Weights & Biases project. */
        wandb_project?: string;
        /** Only tasks created after this time are returned. */
        created_after?: string;
        /** Only tasks created before this time are returned. */
        created_before?: string;
        /** Whether to return only tasks created by the current caller. */
        created_by_me?: boolean;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get individual library details by library ID. */
    "mistral_ai.get_library": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get details of a single library document. */
    "mistral_ai.get_library_document": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Document ID. */
        document_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get details of a single Mistral model by model ID. */
    "mistral_ai.get_model": {
      input: {
        /** Model ID. */
        model_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Lists all version aliases for the specified Agent. */
    "mistral_ai.list_agent_aliases": {
      input: {
        /** Agent ID. */
        agent_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Lists all versions of the specified Agent. */
    "mistral_ai.list_agent_versions": {
      input: {
        /** Agent ID. */
        agent_id: string;
        /**
         * Page number, starting from 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of items returned per page.
         * @minimum 1
         */
        page_size?: number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** List all Agents, optionally with pagination, name, source or metadata filtering parameters. */
    "mistral_ai.list_agents": {
      input: {
        /**
         * Page number, starting from 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of items returned per page.
         * @minimum 1
         */
        page_size?: number;
        /** Whether to return only deployment_chat Agent. */
        deployment_chat?: boolean;
        /** List of Agent sources to filter. */
        sources?: Array<string>;
        /** Filter by Agent name. */
        name?: string;
        /** Search by name or ID. */
        search?: string;
        /** Filter precisely by Agent ID. */
        id?: string;
        /** metadata filter conditions. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** List batch jobs, with paging and filtering conditions. */
    "mistral_ai.list_batch_jobs": {
      input: {
        /**
         * Page number, starting from 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of items returned per page.
         * @minimum 1
         */
        page_size?: number;
        /** Filter by model. */
        model?: string;
        /** Filter by task status. */
        status?: string;
        /** Filter by Agent ID. */
        agent_id?: string;
        /** Filter by metadata string. */
        metadata?: string;
        /** Only tasks created after this time are returned. */
        created_after?: string;
        /** Whether to return only tasks created by the current caller. */
        created_by_me?: boolean;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** List sessions under the current organization, with pagination and metadata filtering parameters. */
    "mistral_ai.list_conversations": {
      input: {
        /**
         * Page number, starting from 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of items returned per page.
         * @minimum 1
         */
        page_size?: number;
        /** metadata filter conditions. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** List all files under the current organization. */
    "mistral_ai.list_files": {
      input: {
        /** The last file ID of the cursor or previous page. */
        after?: string;
        /**
         * Returns the maximum number of files.
         * @minimum 1
         */
        limit?: number;
        /** Sort direction. */
        order?: "asc" | "desc";
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** List all libraries under the current organization. */
    "mistral_ai.list_libraries": {
      input: {
        /**
         * Returns the maximum number of libraries.
         * @minimum 1
         */
        limit?: number;
        /** Pagination token. */
        page_token?: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** List all documents under the specified library. */
    "mistral_ai.list_library_documents": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /**
         * Page number, starting from 0.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of items returned per page.
         * @minimum 1
         */
        page_size?: number;
        /** Document search keywords. */
        search?: string;
        /** Property filter expression. */
        filters_attributes?: string;
        /** Sort field. */
        sort_by?: string;
        /** Sort direction. */
        sort_order?: "asc" | "desc";
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** List shared access records for the specified library. */
    "mistral_ai.list_library_shares": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** List all Mistral models accessible by the current API Key. */
    "mistral_ai.list_models": {
      input: Record<string, unknown>;
      output: unknown;
    };
    /** Reprocess the specified library document. */
    "mistral_ai.reprocess_document": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Document ID. */
        document_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Restarts the session from some historical point in the session and generates a new subsequent response. */
    "mistral_ai.restart_conversation": {
      input: {
        /** Session ID. */
        conversation_id: string;
        /** Entry ID to restart from. */
        from_entry_id: string;
        /** Input to continue appending after restarting. */
        inputs?: string | Array<Record<string, unknown>>;
        /** completion parameter. */
        completion_args?: {
          /** Sampling temperature. */
          temperature?: number;
          /** Kernel sampling threshold. */
          top_p?: number;
          /** The maximum number of generated tokens. */
          max_tokens?: number;
          /** Stop generating conditions. */
          stop?: string | Array<string>;
          /** Random seed. */
          random_seed?: number;
          /** Response format. */
          response_format?: {
            /** Response format type. */
            type?: "text" | "json_object" | "json_schema";
            /** The JSON Schema used when type is json_schema. */
            json_schema?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Request a list of available tools. */
          tools?: Array<{
            /** Tool type, such as function. */
            type: string;
            /** Function tool configuration. */
            function?: {
              /** Function tool name. */
              name: string;
              /** Function tool description. */
              description?: string;
              /** JSON Schema of function parameters. */
              parameters?: Record<string, unknown>;
              /** Whether to strictly follow the parameter Schema. */
              strict?: boolean;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Tool calling strategy. */
          tool_choice?: "none" | "auto" | "any" | "required" | {
            /** Tool selection type. */
            type: "function";
            /** Function tool information. */
            function: {
              /** The function name that is forced to be called. */
              name: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** There are penalties. */
          presence_penalty?: number;
          /** Frequency penalty. */
          frequency_penalty?: number;
          /** Returns the number of candidates. */
          n?: number;
          /** Predictive optimization configuration. */
          prediction?: {
            /** Predict content type. */
            type?: string;
            /** Predict content. */
            content?: string;
            [key: string]: unknown;
          };
          /** Whether to enable parallel tool invocation. */
          parallel_tool_calls?: boolean;
          /** prompt mode。 */
          prompt_mode?: string;
          /** Reasoning strength. */
          reasoning_effort?: "high" | "none";
          /** Whether to inject security tips. */
          safe_prompt?: boolean;
          [key: string]: unknown;
        };
        /** handoff execution method. */
        handoff_execution?: "client" | "server";
        /** Guardrails to apply. */
        guardrails?: Array<Record<string, unknown>>;
        /** Restart request metadata. */
        metadata?: Record<string, unknown>;
        /** Whether to persist storage. */
        store?: boolean;
        /** Whether to stream returns. */
        stream?: boolean;
        /** The Agent version that is fixed when restarting. */
        agent_version?: string | number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Get file metadata by file ID. */
    "mistral_ai.retrieve_file": {
      input: {
        /** File ID. */
        file_id: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Create a new session and immediately append the message or tool call context. */
    "mistral_ai.start_conversation": {
      input: {
        /** Session initial input. */
        inputs: string | Array<Record<string, unknown>>;
        /** Whether to use streaming responses. */
        stream?: boolean;
        /** Whether to persist storage sessions. */
        store?: boolean;
        /** handoff execution method. */
        handoff_execution?: "client" | "server";
        /** Session-level instructions. */
        instructions?: string;
        /** Tools available for this session. */
        tools?: Array<{
          /** Tool type, such as function. */
          type: string;
          /** Function tool configuration. */
          function?: {
            /** Function tool name. */
            name: string;
            /** Function tool description. */
            description?: string;
            /** JSON Schema of function parameters. */
            parameters?: Record<string, unknown>;
            /** Whether to strictly follow the parameter Schema. */
            strict?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The completion parameter for this session. */
        completion_args?: {
          /** Sampling temperature. */
          temperature?: number;
          /** Kernel sampling threshold. */
          top_p?: number;
          /** The maximum number of generated tokens. */
          max_tokens?: number;
          /** Stop generating conditions. */
          stop?: string | Array<string>;
          /** Random seed. */
          random_seed?: number;
          /** Response format. */
          response_format?: {
            /** Response format type. */
            type?: "text" | "json_object" | "json_schema";
            /** The JSON Schema used when type is json_schema. */
            json_schema?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Request a list of available tools. */
          tools?: Array<{
            /** Tool type, such as function. */
            type: string;
            /** Function tool configuration. */
            function?: {
              /** Function tool name. */
              name: string;
              /** Function tool description. */
              description?: string;
              /** JSON Schema of function parameters. */
              parameters?: Record<string, unknown>;
              /** Whether to strictly follow the parameter Schema. */
              strict?: boolean;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Tool calling strategy. */
          tool_choice?: "none" | "auto" | "any" | "required" | {
            /** Tool selection type. */
            type: "function";
            /** Function tool information. */
            function: {
              /** The function name that is forced to be called. */
              name: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** There are penalties. */
          presence_penalty?: number;
          /** Frequency penalty. */
          frequency_penalty?: number;
          /** Returns the number of candidates. */
          n?: number;
          /** Predictive optimization configuration. */
          prediction?: {
            /** Predict content type. */
            type?: string;
            /** Predict content. */
            content?: string;
            [key: string]: unknown;
          };
          /** Whether to enable parallel tool invocation. */
          parallel_tool_calls?: boolean;
          /** prompt mode。 */
          prompt_mode?: string;
          /** Reasoning strength. */
          reasoning_effort?: "high" | "none";
          /** Whether to inject security tips. */
          safe_prompt?: boolean;
          [key: string]: unknown;
        };
        /** Guardrails to apply. */
        guardrails?: Array<Record<string, unknown>>;
        /** Session name. */
        name?: string;
        /** Session description. */
        description?: string;
        /** Session metadata. */
        metadata?: Record<string, unknown>;
        /** Agent ID bound to the session. */
        agent_id?: string;
        /** The Agent version to which the session is bound. */
        agent_version?: string | number;
        /** Directly specify the model to use. */
        model?: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Update the Agent configuration and create a new version. */
    "mistral_ai.update_agent": {
      input: {
        /** Agent ID. */
        agent_id: string;
        /** Updated model. */
        model?: string;
        /** Updated Agent name. */
        name?: string;
        /** Updated instructions. */
        instructions?: string;
        /** Updated tool list. */
        tools?: Array<{
          /** Tool type, such as function. */
          type: string;
          /** Function tool configuration. */
          function?: {
            /** Function tool name. */
            name: string;
            /** Function tool description. */
            description?: string;
            /** JSON Schema of function parameters. */
            parameters?: Record<string, unknown>;
            /** Whether to strictly follow the parameter Schema. */
            strict?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Updated completion parameter. */
        completion_args?: {
          /** Sampling temperature. */
          temperature?: number;
          /** Kernel sampling threshold. */
          top_p?: number;
          /** The maximum number of generated tokens. */
          max_tokens?: number;
          /** Stop generating conditions. */
          stop?: string | Array<string>;
          /** Random seed. */
          random_seed?: number;
          /** Response format. */
          response_format?: {
            /** Response format type. */
            type?: "text" | "json_object" | "json_schema";
            /** The JSON Schema used when type is json_schema. */
            json_schema?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Request a list of available tools. */
          tools?: Array<{
            /** Tool type, such as function. */
            type: string;
            /** Function tool configuration. */
            function?: {
              /** Function tool name. */
              name: string;
              /** Function tool description. */
              description?: string;
              /** JSON Schema of function parameters. */
              parameters?: Record<string, unknown>;
              /** Whether to strictly follow the parameter Schema. */
              strict?: boolean;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }>;
          /** Tool calling strategy. */
          tool_choice?: "none" | "auto" | "any" | "required" | {
            /** Tool selection type. */
            type: "function";
            /** Function tool information. */
            function: {
              /** The function name that is forced to be called. */
              name: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** There are penalties. */
          presence_penalty?: number;
          /** Frequency penalty. */
          frequency_penalty?: number;
          /** Returns the number of candidates. */
          n?: number;
          /** Predictive optimization configuration. */
          prediction?: {
            /** Predict content type. */
            type?: string;
            /** Predict content. */
            content?: string;
            [key: string]: unknown;
          };
          /** Whether to enable parallel tool invocation. */
          parallel_tool_calls?: boolean;
          /** prompt mode。 */
          prompt_mode?: string;
          /** Reasoning strength. */
          reasoning_effort?: "high" | "none";
          /** Whether to inject security tips. */
          safe_prompt?: boolean;
          [key: string]: unknown;
        };
        /** Guardrails to apply. */
        guardrails?: Array<Record<string, unknown>>;
        /** Updated description. */
        description?: string;
        /** Updated list of handoff Agent IDs. */
        handoffs?: Array<string>;
        /** Updated metadata. */
        metadata?: Record<string, unknown>;
        /** Whether to enable deployment chat. */
        deployment_chat?: boolean;
        /** Version message for this update. */
        version_message?: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Switch the current version of the Agent. */
    "mistral_ai.update_agent_version": {
      input: {
        /** Agent ID. */
        agent_id: string;
        /** The target version number to switch to. */
        version: number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Updates the properties of the specified library. */
    "mistral_ai.update_library": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** The updated library name. */
        name?: string;
        /** Updated library description. */
        description?: string;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Updates the properties of the specified library document. */
    "mistral_ai.update_library_document": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Document ID. */
        document_id: string;
        /** The updated document name. */
        name?: string;
        /** Updated document properties. */
        attributes?: Record<string, boolean | string | number | Array<string> | Array<number> | Array<boolean>>;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Upload files to Mistral for fine-tuning, batch or OCR. */
    "mistral_ai.upload_file": {
      input: {
        /** Information about the file to be uploaded. */
        file?: {
          /** The file name to use when uploading to Mistral. */
          name: string;
          /** The MIME type of the uploaded file. */
          mimetype?: string;
          /** The public URL of the file to be uploaded. */
          url?: string;
          /** The Base64 content of the file to be uploaded. */
          content_base64?: string;
          /** Compatible field, currently not supported, need to use url or content_base64 instead. */
          s3key?: string;
        };
        /** File usage, such as fine-tune, batch, or ocr. */
        purpose?: string;
        /** File visibility, such as workspace or user. */
        visibility?: string;
        /** The number of hours the file will expire. */
        expiry?: number;
        [key: string]: unknown;
      };
      output: unknown;
    };
    /** Uploads a new document to the specified library. */
    "mistral_ai.upload_library_document": {
      input: {
        /** Knowledge Base ID. */
        library_id: string;
        /** Documents to be uploaded to the knowledge base. */
        file?: {
          /** The file name to use when uploading to Mistral. */
          name: string;
          /** The MIME type of the uploaded file. */
          mimetype?: string;
          /** The public URL of the file to be uploaded. */
          url?: string;
          /** The Base64 content of the file to be uploaded. */
          content_base64?: string;
          /** Compatible field, currently not supported, need to use url or content_base64 instead. */
          s3key?: string;
        };
        [key: string]: unknown;
      };
      output: unknown;
    };
  }
}
