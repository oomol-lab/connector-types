import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an OrcaRouter chat completion through the OpenAI-compatible `/chat/completions` endpoint. */
    "orcarouter.create_chat_completion": {
      input: {
        /**
         * The namespaced model ID to use, such as `orcarouter/auto` or `openai/gpt-4o-mini`. OrcaRouter routes the request to the matching upstream.
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
        /** A list of JSON objects returned by OrcaRouter. */
        functions?: Array<Record<string, unknown>>;
        /** Legacy OpenAI function calling strategy forwarded to OrcaRouter. */
        function_call?: "none" | "auto" | Record<string, unknown>;
        /** Token bias map. */
        logit_bias?: Record<string, number>;
        /**
         * The maximum number of output tokens.
         * @exclusiveMinimum 0
         */
        max_tokens?: number;
        /**
         * New max output token field, taking precedence over max_tokens.
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
        /** A list of JSON objects returned by OrcaRouter. */
        tools?: Array<Record<string, unknown>>;
        /** Tool selection strategy. */
        tool_choice?: "none" | "auto" | "required" | Record<string, unknown>;
        /** A JSON object returned by OrcaRouter. */
        response_format?: Record<string, unknown>;
        /** A JSON object returned by OrcaRouter. */
        metadata?: Record<string, unknown>;
        /** Whether to allow parallel tool calls. */
        parallel_tool_calls?: boolean;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Create embeddings through the OpenAI-compatible `/embeddings` endpoint. */
    "orcarouter.create_embeddings": {
      input: {
        /**
         * The namespaced embedding model ID to use, such as `openai/text-embedding-3-small`.
         * @minLength 1
         */
        model: string;
        /** Text to embed. */
        input: string | Array<string>;
        /** The format to return the embeddings in. */
        encoding_format?: "float" | "base64";
      };
      output: {
        /** A list of JSON objects returned by OrcaRouter. */
        data?: Array<Record<string, unknown>>;
      };
    };
    /** Create an OrcaRouter Anthropic-format message through the `/messages` endpoint. */
    "orcarouter.create_message": {
      input: {
        /**
         * The namespaced model ID to use, such as `orcarouter/auto` or `anthropic/claude-haiku-4.5`. OrcaRouter routes the request to the matching upstream.
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
        /** The end user's unique identifier. */
        user?: string;
        /** A list of JSON objects returned by OrcaRouter. */
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
        /** A JSON object returned by OrcaRouter. */
        metadata?: Record<string, unknown>;
        /** Stop sequences for generation. */
        stop_sequences?: Array<string>;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** Tool selection strategy. */
        tool_choice?: "auto" | "any" | "none" | Record<string, unknown>;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** List the models available through OrcaRouter. */
    "orcarouter.list_models": {
      input: Record<string, never>;
      output: {
        /** A list of JSON objects returned by OrcaRouter. */
        data: Array<Record<string, unknown>>;
      };
    };
  }
}
