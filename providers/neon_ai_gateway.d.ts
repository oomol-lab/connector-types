import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a chat completion through Neon AI Gateway's OpenAI-compatible `/v1/chat/completions` endpoint. One branch credential reaches Anthropic, OpenAI, Google, and open-weight models. */
    "neon_ai_gateway.create_chat_completion": {
      input: {
        /**
         * The Neon AI Gateway model ID, such as `claude-sonnet-4-6`, `gpt-5-mini`, or `gemini-3-flash`. The `databricks-` prefixed form is also accepted. Use `list_models` to see the IDs this branch can call. Works with every chat model in the catalog except Responses-only models such as `gpt-5-3-codex` and `gpt-5-5-pro`.
         * @minLength 1
         */
        model: string;
        /**
         * An ordered list of OpenAI-format conversation messages.
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
        /** Seed for best-effort deterministic sampling. */
        seed?: number;
        /** A list of JSON objects. */
        tools?: Array<Record<string, unknown>>;
        /** Tool selection strategy. */
        tool_choice?: "none" | "auto" | "required" | Record<string, unknown>;
        /** A JSON object returned by Neon AI Gateway. */
        response_format?: Record<string, unknown>;
        /** Reasoning effort for reasoning models. */
        reasoning_effort?: "none" | "minimal" | "low" | "medium" | "high";
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Create embeddings through Neon AI Gateway's OpenAI-compatible `/v1/embeddings` endpoint. */
    "neon_ai_gateway.create_embedding": {
      input: {
        /**
         * The Neon AI Gateway embedding model ID: `qwen3-embedding-0-6b`, `bge-large-en`, or `gte-large-en`, all 1024-dimensional. `bge-large-en` reads only the first 512 tokens of each input.
         * @minLength 1
         */
        model: string;
        /** The text to embed. */
        input: string | Array<string>;
        /**
         * A shorter vector length. Only `qwen3-embedding-0-6b` honors it; the other models always return 1024 dimensions.
         * @exclusiveMinimum 0
         */
        dimensions?: number;
        /** The format of the returned embeddings. */
        encoding_format?: "float" | "base64";
        /** The end user's unique identifier. */
        user?: string;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Create an Anthropic Messages API message through Neon AI Gateway (`/anthropic/v1/messages`). Use it for prompt caching and extended thinking on Claude models. */
    "neon_ai_gateway.create_message": {
      input: {
        /**
         * The Neon AI Gateway model ID, such as `claude-sonnet-4-6`, `gpt-5-mini`, or `gemini-3-flash`. The `databricks-` prefixed form is also accepted. Use `list_models` to see the IDs this branch can call. Only Anthropic models serve the Messages API.
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
        /** System prompt content. */
        system?: string | Array<Record<string, unknown>>;
        /** A list of JSON objects. */
        tools?: Array<Record<string, unknown>>;
        /** Anthropic tool selection strategy object, such as `{ "type": "auto" }` or `{ "type": "tool", "name": "..." }`. */
        tool_choice?: Record<string, unknown>;
        /** Stop sequences for generation. */
        stop_sequences?: Array<string>;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 1
         */
        temperature?: number;
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
        /** Extended or adaptive thinking options, forwarded to Anthropic unchanged. */
        thinking?: Record<string, unknown>;
        /** Whether to request a streaming response. Connector actions only support false or omitted. */
        stream?: boolean;
        /** A JSON object returned by Neon AI Gateway. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Create a response through Neon AI Gateway's OpenAI Responses API endpoint (`/openai/v1/responses`). Required for `gpt-5-3-codex` and `gpt-5-5-pro`. Image generation needs streaming, which connector actions do not support, because non-streaming responses are capped at 655,360 bytes. */
    "neon_ai_gateway.create_response": {
      input: {
        /**
         * The Neon AI Gateway model ID, such as `claude-sonnet-4-6`, `gpt-5-mini`, or `gemini-3-flash`. The `databricks-` prefixed form is also accepted. Use `list_models` to see the IDs this branch can call. Only OpenAI models serve the Responses API; `gpt-5-3-codex` and `gpt-5-5-pro` require it.
         * @minLength 1
         */
        model: string;
        /** The prompt text or an ordered list of Responses API input items. */
        input: string | Array<Record<string, unknown>>;
        /** System instructions for the model. */
        instructions?: string;
        /**
         * The maximum number of output tokens.
         * @exclusiveMinimum 0
         */
        max_output_tokens?: number;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * Nucleus sampling parameter.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** A list of JSON objects. */
        tools?: Array<Record<string, unknown>>;
        /** Tool selection strategy. */
        tool_choice?: "none" | "auto" | "required" | Record<string, unknown>;
        /** Text output options, such as a JSON schema format. */
        text?: Record<string, unknown>;
        /** Reasoning options, such as `{ "effort": "low" }`. */
        reasoning?: Record<string, unknown>;
        /** Whether to request a streaming response. Connector actions only support false or omitted. */
        stream?: boolean;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Answer yes/no (noul), choice, and score questions about text, JSON, or images with TypeSafe System One decision models through Neon AI Gateway (`/typesafe/v1/systemone`). Returns probabilities instead of generated text. */
    "neon_ai_gateway.evaluate": {
      input: {
        /** The decision model ID. */
        model: "typesafeai-jev-1-14-0" | "openjev-qwen35-4b";
        /** The text or JSON state the questions are about. Reference an image asset by its key in a state field. */
        state: string | Record<string, unknown> | Array<unknown>;
        /** Named questions evaluated independently against the shared state. */
        questions: Record<string, {
            /** The TypeSafe question type. */
            type: "noul";
            /** Text or structured JSON content, or null when the API permits no description. */
            instructions?: string | Record<string, unknown> | Array<unknown> | null;
            /** Optional descriptions of the true and false outcomes. */
            criteria?: {
              /** Text or structured JSON content, or null when the API permits no description. */
              true?: string | Record<string, unknown> | Array<unknown> | null;
              /** Text or structured JSON content, or null when the API permits no description. */
              false?: string | Record<string, unknown> | Array<unknown> | null;
            } | null;
          } | {
            /** The TypeSafe question type. */
            type: "choice";
            /** Text or structured JSON content, or null when the API permits no description. */
            instructions?: string | Record<string, unknown> | Array<unknown> | null;
            /** Candidate option names mapped to optional descriptions. */
            criteria: Record<string, string | Record<string, unknown> | Array<unknown> | null>;
          } | {
            /** The TypeSafe question type. */
            type: "score";
            /** Text or structured JSON content, or null when the API permits no description. */
            instructions?: string | Record<string, unknown> | Array<unknown> | null;
            /**
             * Ordered rubric levels from the lowest to the highest score.
             * @minItems 2
             * @maxItems 10
             */
            criteria: Array<string | Record<string, unknown> | Array<unknown> | null>;
          }>;
        /** Images keyed by the reference used in state, each `{ type: "image", format: "png" | "jpeg", data_base64 }` with plain base64 and no data: prefix. Jev 1.14 rejects images smaller than 280 x 280 pixels. */
        assets?: Record<string, Record<string, unknown>>;
      };
      output: {
        /**
         * The versioned TypeSafe model that produced the answers.
         * @minLength 1
         */
        model: string;
        /** Typed answers keyed by the input question names. */
        answers: Record<string, {
            /** The TypeSafe answer type. */
            type: "noul";
            /**
             * A probability from 0 to 1.
             * @minimum 0
             * @maximum 1
             */
            noul: number;
          } | {
            /** The TypeSafe answer type. */
            type: "choice";
            /** The selected option name. */
            choice: string;
            /**
             * A probability from 0 to 1.
             * @minimum 0
             * @maximum 1
             */
            confidence: number;
            /** Probabilities keyed by option name. */
            probabilities: Record<string, number>;
          } | {
            /** The TypeSafe answer type. */
            type: "score";
            /** The probability-weighted score across the rubric levels. */
            score: number;
            /**
             * A probability from 0 to 1.
             * @minimum 0
             * @maximum 1
             */
            confidence: number;
            /** Score indices mapped to their rubric descriptions. */
            legend: Record<string, string | Record<string, unknown> | Array<unknown> | null>;
            /** Probabilities keyed by score index. */
            probabilities: Record<string, number>;
          }>;
        /** Token usage reported by TypeSafe. */
        usage: {
          /**
           * The number of input tokens processed.
           * @minimum 0
           */
          input_tokens: number;
          /**
           * The number of output tokens reported.
           * @minimum 0
           */
          output_tokens: number;
        };
      };
    };
    /** Generate content with a Google Gemini model through Neon AI Gateway's native Gemini endpoint (`/gemini/v1beta/models/{model}:generateContent`). Use it for Gemini-only options such as `thinkingConfig`; the chat completions action also serves Gemini models. */
    "neon_ai_gateway.generate_content": {
      input: {
        /**
         * The Google model ID placed in the request path, such as `gemini-3-flash` or `gemini-4-argon`. Only Google Gemini models serve this endpoint.
         * @minLength 1
         * @pattern ^[A-Za-z0-9._-]+$
         */
        model: string;
        /**
         * The Gemini conversation contents, each with a role and parts.
         * @minItems 1
         */
        contents: Array<Record<string, unknown>>;
        /** Gemini system instruction content. */
        systemInstruction?: Record<string, unknown>;
        /** Gemini generation options, such as temperature, maxOutputTokens, or thinkingConfig.thinkingLevel. */
        generationConfig?: Record<string, unknown>;
        /** A list of JSON objects. */
        tools?: Array<Record<string, unknown>>;
        /** Gemini tool calling configuration. */
        toolConfig?: Record<string, unknown>;
        /** A list of JSON objects. */
        safetySettings?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** List the Neon AI Gateway model catalog in an OpenRouter-shaped response. Each entry's `enabled` field says whether this account can call the model now. */
    "neon_ai_gateway.list_models": {
      input: Record<string, never>;
      output: {
        /** A list of JSON objects. */
        data: Array<Record<string, unknown>>;
      };
    };
  }
}
