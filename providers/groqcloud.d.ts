import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a non-streaming GroqCloud OpenAI-compatible chat completion. */
    "groqcloud.create_chat_completion": {
      input: {
        /** The GroqCloud model identifier to use. */
        model: string;
        /**
         * The ordered conversation history sent to the model.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "tool";
          /** The message content sent to the model. */
          content?: string | Array<Record<string, unknown>> | null;
          /** The optional participant name for the message. */
          name?: string;
          /** The identifier of the tool call that this tool message responds to. */
          tool_call_id?: string;
          /** Tool calls emitted by the assistant. */
          tool_calls?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * The frequency penalty applied to repeated tokens.
         * @minimum -2
         * @maximum 2
         */
        frequency_penalty?: number;
        /** Token bias adjustments keyed by token id. */
        logit_bias?: Record<string, unknown>;
        /** Whether to include token-level log probabilities. */
        logprobs?: boolean;
        /**
         * The maximum number of completion tokens to generate.
         * @minimum 1
         */
        max_completion_tokens?: number;
        /**
         * The deprecated maximum token field accepted by OpenAI-compatible clients.
         * @minimum 1
         */
        max_tokens?: number;
        /**
         * The number of chat completions to generate.
         * @minimum 1
         */
        n?: number;
        /** Whether the model may call tools in parallel. */
        parallel_tool_calls?: boolean;
        /**
         * The presence penalty applied to newly introduced tokens.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /** The response format request. */
        response_format?: {
          /** The requested response format type. */
          type?: "text" | "json_object" | "json_schema";
          /** The JSON Schema definition when type is json_schema. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A seed for deterministic sampling. */
        seed?: number;
        /** One or more sequences where generation should stop. */
        stop?: string | Array<string>;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /**
         * The sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** How the model should choose tools. */
        tool_choice?: "none" | "auto" | "required" | Record<string, unknown>;
        /** Tools available to the model. */
        tools?: Array<Record<string, unknown>>;
        /**
         * The number of top token log probabilities to include.
         * @minimum 0
         */
        top_logprobs?: number;
        /**
         * The nucleus sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** An end-user identifier for monitoring or abuse detection. */
        user?: string;
        [key: string]: unknown;
      };
      output: {
        /** The chat completion identifier. */
        id: string;
        /** The object type returned by the API. */
        object: string;
        /** The Unix timestamp when the completion was created. */
        created: number;
        /** The model used to generate the completion. */
        model: string;
        /** The generated completion choices. */
        choices: Array<{
          /** The choice index. */
          index: number;
          /** The assistant message returned by the model. */
          message: {
            /** The role of the message author. */
            role: "system" | "user" | "assistant" | "tool";
            /** The message content sent to the model. */
            content?: string | Array<Record<string, unknown>> | null;
            /** The optional participant name for the message. */
            name?: string;
            /** The identifier of the tool call that this tool message responds to. */
            tool_call_id?: string;
            /** Tool calls emitted by the assistant. */
            tool_calls?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          /** The reason generation finished for this choice. */
          finish_reason?: string | null;
          /** Token-level log probability details. */
          logprobs?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Token usage information. */
        usage?: {
          /** The number of prompt tokens consumed. */
          prompt_tokens?: number;
          /** The number of completion tokens generated. */
          completion_tokens?: number;
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        /** The backend system fingerprint for the completion. */
        system_fingerprint?: string;
        [key: string]: unknown;
      };
    };
    /** Fetch metadata for one GroqCloud model. */
    "groqcloud.get_model": {
      input: {
        /** The exact GroqCloud model identifier to retrieve. */
        model: string;
      };
      output: {
        /** The model identifier. */
        id: string;
        /** The object type returned by the API. */
        object: string;
        /** The Unix timestamp when the model was created. */
        created?: number;
        /** The organization that owns the model. */
        owned_by?: string;
        /** Whether the model is currently active. */
        active?: boolean;
        /** The model context window size. */
        context_window?: number;
        /** The maximum completion tokens supported by the model. */
        max_completion_tokens?: number;
        [key: string]: unknown;
      };
    };
    /** List the GroqCloud models available to the current API key. */
    "groqcloud.list_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type. */
        object: string;
        /** The list of available GroqCloud models. */
        data: Array<{
          /** The model identifier. */
          id: string;
          /** The object type returned by the API. */
          object: string;
          /** The Unix timestamp when the model was created. */
          created?: number;
          /** The organization that owns the model. */
          owned_by?: string;
          /** Whether the model is currently active. */
          active?: boolean;
          /** The model context window size. */
          context_window?: number;
          /** The maximum completion tokens supported by the model. */
          max_completion_tokens?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
