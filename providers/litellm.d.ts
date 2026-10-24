import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a chat completion through the LiteLLM proxy's OpenAI-compatible `/v1/chat/completions` endpoint. LiteLLM routes the request to whichever upstream provider serves the model, with its load balancing, fallbacks, and budget checks applied. */
    "litellm.create_chat_completion": {
      input: {
        /**
         * The LiteLLM model name to call, as configured in the proxy `model_list` (for example `gpt-4.1-mini` or `claude-sonnet-4-6`). Use `list_models` to see the names this key can call.
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
        /** The end user's unique identifier, recorded in LiteLLM spend logs. */
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
        /** A list of JSON objects returned by LiteLLM. */
        tools?: Array<Record<string, unknown>>;
        /** Tool selection strategy. */
        tool_choice?: "none" | "auto" | "required" | Record<string, unknown>;
        /** A JSON object returned by LiteLLM. */
        response_format?: Record<string, unknown>;
        /** Reasoning effort for reasoning models. LiteLLM translates it for each upstream provider. */
        reasoning_effort?: "none" | "minimal" | "low" | "medium" | "high";
        /** Request metadata, such as tags, that LiteLLM records with the spend log entry. */
        metadata?: Record<string, unknown>;
        /** Ask LiteLLM to drop OpenAI parameters the routed upstream model does not support instead of failing. */
        drop_params?: boolean;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Create embeddings through the LiteLLM proxy's OpenAI-compatible `/v1/embeddings` endpoint. */
    "litellm.create_embedding": {
      input: {
        /**
         * The LiteLLM embedding model name, as configured in the proxy `model_list`. Use `get_model_info` to find models whose mode is `embedding`.
         * @minLength 1
         */
        model: string;
        /** The text to embed. */
        input: string | Array<string>;
        /**
         * The number of dimensions for models that support shortened embeddings.
         * @exclusiveMinimum 0
         */
        dimensions?: number;
        /** The format of the returned embeddings. */
        encoding_format?: "float" | "base64";
        /** The end user's unique identifier, recorded in LiteLLM spend logs. */
        user?: string;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Create an Anthropic-format message through the LiteLLM proxy's `/v1/messages` endpoint, for any model the proxy serves. */
    "litellm.create_message": {
      input: {
        /**
         * The LiteLLM model name to call, as configured in the proxy `model_list` (for example `gpt-4.1-mini` or `claude-sonnet-4-6`). Use `list_models` to see the names this key can call. LiteLLM translates the Anthropic request for non-Anthropic models.
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
        /** A list of JSON objects returned by LiteLLM. */
        tools?: Array<Record<string, unknown>>;
        /** Anthropic tool selection strategy object, such as `{ "type": "auto" }`, `{ "type": "any" }`, or `{ "type": "tool", "name": "..." }`. */
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
        /** Whether to request a streaming response. Connector actions only support false or omitted. */
        stream?: boolean;
        /** A JSON object returned by LiteLLM. */
        metadata?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: Record<string, unknown>;
    };
    /** Read the spend, remaining budget, rate limits, and allowed models of the LiteLLM virtual key used by this connection. The proxy master key has no stored record, so this action needs a virtual key. */
    "litellm.get_key_info": {
      input: Record<string, never>;
      output: {
        /** The key alias set when the key was created. */
        keyAlias: string | null;
        /** The redacted key name LiteLLM shows in the Admin UI. */
        keyName: string | null;
        /** The key status, such as `active`, `expired`, or `revoked`. */
        status: string | null;
        /** USD spent by the key in the current budget window. */
        spend: number;
        /** The USD budget limit of the key, when one is set. */
        maxBudget: number | null;
        /** USD left before the key hits its budget, when a budget is set. */
        remainingBudget: number | null;
        /** The budget reset period, such as `30d`. */
        budgetDuration: string | null;
        /** When the current budget window ends and spend resets. */
        budgetResetAt: string | null;
        /** The model names this key may call. Empty means every model on the proxy. */
        models: Array<string>;
        /** The tokens-per-minute limit of the key. */
        tpmLimit: number | null;
        /** The requests-per-minute limit of the key. */
        rpmLimit: number | null;
        /** The team the key belongs to. */
        teamId: string | null;
        /** The user the key belongs to. */
        userId: string | null;
        /** When the key stops authenticating requests. */
        expires: string | null;
        /** Whether the key is blocked. */
        blocked: boolean | null;
      };
    };
    /** Read the context window, output limit, per-token pricing, and capabilities LiteLLM reports for each model deployment, so an agent can pick a model before calling it. */
    "litellm.get_model_info": {
      input: {
        /**
         * Only return deployments of this LiteLLM model name.
         * @minLength 1
         */
        model?: string;
      };
      output: {
        /** Model deployments with their capabilities and pricing. */
        models: Array<{
          /** The LiteLLM model name clients call. */
          modelName: string;
          /** The deployment ID LiteLLM assigned, when present. */
          modelId: string | null;
          /** The upstream provider LiteLLM routes this deployment to, such as `openai` or `bedrock`. */
          provider: string | null;
          /** The model mode, such as `chat`, `embedding`, or `image_generation`. */
          mode: string | null;
          /** The context window in input tokens, when known. */
          maxInputTokens: number | null;
          /** The maximum output tokens, when known. */
          maxOutputTokens: number | null;
          /** USD cost per input token, when known. */
          inputCostPerToken: number | null;
          /** USD cost per output token, when known. */
          outputCostPerToken: number | null;
          /** Whether the model supports tool or function calling. */
          supportsFunctionCalling: boolean | null;
          /** Whether the model accepts image input. */
          supportsVision: boolean | null;
          /** Whether the model supports reasoning controls. */
          supportsReasoning: boolean | null;
          /** Whether the model supports JSON schema structured output. */
          supportsResponseSchema: boolean | null;
        }>;
      };
    };
    /** List the model names this LiteLLM key can call. */
    "litellm.list_models": {
      input: Record<string, never>;
      output: {
        /** A list of JSON objects returned by LiteLLM. */
        data: Array<Record<string, unknown>>;
      };
    };
  }
}
