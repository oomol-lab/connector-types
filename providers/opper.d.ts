import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate an Opper chat completion through the OpenAI-compatible endpoint. This is a billed, non-streaming inference request. */
    "opper.create_chat_completion": {
      input: {
        /**
         * A model ID returned by list_models, such as the pool name `claude-sonnet-4-6`, or a `provider/model` ID such as `anthropic/claude-sonnet-4-6` to pin one route.
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
        stream?: boolean;
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
    /** Generate an Opper message through the Anthropic Messages-compatible endpoint. This is a billed, non-streaming inference request. */
    "opper.create_message": {
      input: {
        /**
         * A model ID returned by list_models, such as the pool name `claude-sonnet-4-6`, or a `provider/model` ID such as `anthropic/claude-sonnet-4-6` to pin one route.
         * @minLength 1
         */
        model: string;
        /**
         * Maximum output token count.
         * @exclusiveMinimum 0
         */
        max_tokens: number;
        /**
         * Conversation messages in order.
         * @minItems 1
         */
        messages: Array<Record<string, unknown>>;
        /** System prompt content. */
        system?: string | Array<Record<string, unknown>>;
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
        /** Stop sequences for generation. */
        stop_sequences?: Array<string>;
        /** Only false or omitted is supported by this JSON action. */
        stream?: boolean;
        /** Anthropic-format tool definitions. */
        tools?: Array<Record<string, unknown>>;
        /** Tool selection policy, such as `{ "type": "auto" }`. */
        tool_choice?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** Message identifier. */
        id: string;
        /** Response object type. */
        type?: string;
        /** Role of the generated message. */
        role?: string;
        /** Model used for generation. */
        model?: string;
        /** Generated content blocks. */
        content: Array<Record<string, unknown>>;
        /** Why generation stopped. */
        stop_reason?: string;
        /** Token usage reported by the model. */
        usage?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List model IDs available to the configured Opper key, including pool names and provider-pinned routes, without running inference. */
    "opper.list_models": {
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
