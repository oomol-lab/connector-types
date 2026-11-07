import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a CloudGPU chat completion through the OpenAI-compatible endpoint. This is a billed, non-streaming inference request. */
    "cloudgpu.create_chat_completion": {
      input: {
        /**
         * A model ID returned by list_models, such as `deepseek-v4-flash`.
         * @minLength 1
         */
        model: string;
        /**
         * Conversation messages in order.
         * @minItems 1
         */
        messages: Array<Record<string, unknown>>;
        /**
         * Maximum output token count, when supported by the model.
         * @exclusiveMinimum 0
         */
        max_tokens?: number;
        /**
         * Maximum completion token count for models that use this field.
         * @exclusiveMinimum 0
         */
        max_completion_tokens?: number;
        /**
         * Sampling temperature, when supported by the model.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * Nucleus sampling probability, when supported by the model.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** Only false or omitted is supported by this JSON action. */
        stream?: false;
        /** OpenAI-format tool definitions. */
        tools?: Array<Record<string, unknown>>;
        /** Tool selection policy. */
        tool_choice?: string | Record<string, unknown>;
        /** Model-supported response format configuration. */
        response_format?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** Completion identifier. */
        id: string;
        /** Response object type. */
        object?: string;
        /** Creation time as a Unix timestamp. */
        created?: number;
        /** Model used for generation. */
        model?: string;
        /** Generated completion choices. */
        choices: Array<Record<string, unknown>>;
        /** Token usage reported by the model. */
        usage?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the model IDs CloudGPU serves, with model metadata, without running inference. */
    "cloudgpu.list_models": {
      input: Record<string, never>;
      output: {
        /** Available models. */
        data: Array<{
          /**
           * The model ID to pass unchanged in inference requests.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
