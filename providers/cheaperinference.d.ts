import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Cheaper Inference chat completion through the OpenAI-compatible `/chat/completions` endpoint. */
    "cheaperinference.create_chat_completion": {
      input: {
        /**
         * The model ID to use, such as `gpt-5.4-mini` or `claude-sonnet-5`. Use `list_models` to see the available IDs.
         * @minLength 1
         */
        model: string;
        /**
         * An ordered list of conversation messages.
         * @minItems 1
         */
        messages: Array<Record<string, unknown>>;
        /**
         * The number of choices to generate.
         * @exclusiveMinimum 0
         */
        n?: number;
        /** Stop sequences for generation. */
        stop?: string | Array<string>;
        /** The end user's unique identifier. */
        user?: string;
        /**
         * Nucleus sampling parameter.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** Whether to request a streaming response. Connector actions only support false or omitted. */
        stream?: boolean;
        /** Token bias map. */
        logit_bias?: Record<string, number>;
        /**
         * The maximum number of output tokens.
         * @exclusiveMinimum 0
         */
        max_tokens?: number;
        /**
         * Alternative maximum number of output tokens. When both this and max_tokens are supplied, they must match.
         * @exclusiveMinimum 0
         */
        max_completion_tokens?: number;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * Presence penalty.
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
        /** Whether to return token-level probabilities. */
        logprobs?: boolean;
        /**
         * The number of top logprobs to return.
         * @minimum 0
         * @maximum 20
         */
        top_logprobs?: number;
        /** A list of JSON objects returned by Cheaper Inference. */
        tools?: Array<Record<string, unknown>>;
        /** Tool selection strategy. */
        tool_choice?: "none" | "auto" | "required" | Record<string, unknown>;
        /** A JSON object returned by Cheaper Inference. */
        response_format?: Record<string, unknown>;
        /** A JSON object returned by Cheaper Inference. */
        metadata?: Record<string, unknown>;
        /** Whether to allow parallel tool calls. */
        parallel_tool_calls?: boolean;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Create a Cheaper Inference Anthropic-format message through the `/messages` endpoint. */
    "cheaperinference.create_message": {
      input: {
        /**
         * The model ID to use, such as `claude-sonnet-5` or `gpt-5.4-mini`. Use `list_models` to see the available IDs.
         * @minLength 1
         */
        model: string;
        /**
         * The maximum number of output tokens.
         * @exclusiveMinimum 0
         */
        max_tokens: number;
        /**
         * An ordered list of Anthropic-format messages.
         * @minItems 1
         */
        messages: Array<Record<string, unknown>>;
        /** A list of JSON objects returned by Cheaper Inference. */
        tools?: Array<Record<string, unknown>>;
        /**
         * Top-k sampling parameter.
         * @minimum 0
         */
        top_k?: number;
        /**
         * Nucleus sampling parameter.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** Whether to request a streaming response. Connector actions only support false or omitted. */
        stream?: boolean;
        /** System prompt content. */
        system?: string | Array<Record<string, unknown>>;
        /** A JSON object returned by Cheaper Inference. */
        metadata?: Record<string, unknown>;
        /** Stop sequences for generation. */
        stop_sequences?: Array<string>;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** Anthropic tool selection strategy object, such as `{ "type": "auto" }`, `{ "type": "any" }`, `{ "type": "none" }`, or `{ "type": "tool", "name": "..." }`. */
        tool_choice?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** List the models available through Cheaper Inference. */
    "cheaperinference.list_models": {
      input: Record<string, never>;
      output: {
        /** A list of JSON objects returned by Cheaper Inference. */
        data?: Array<Record<string, unknown>>;
      };
    };
  }
}
