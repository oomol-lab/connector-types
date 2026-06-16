import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an OpenRouter chat completion through the OpenAI-compatible `/chat/completions` endpoint. */
    "openrouter.create_chat_completion": {
      input: {
        /** The model ID to use. */
        model: string;
        /** An ordered list of conversation messages. */
        messages: Array<{
          /** The role of the message sender. */
          role: "system" | "user" | "assistant" | "tool" | "developer";
          /** Message content. */
          content: string | Array<Record<string, unknown>>;
          /** An optional name for the sender of the message. */
          name?: string;
          /** The tool call ID corresponding to the tool message. */
          tool_call_id?: string;
          [key: string]: unknown;
        }>;
        /**
         * The number of choices you wish to generate.
         * @minimum 1
         */
        n?: number;
        /** Generation stops when encountering these sequences. */
        stop?: string | Array<string>;
        /** The end user's unique identifier. */
        user?: string;
        /**
         * nucleus sampling parameters.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** Whether to request a streaming response. Currently connector action only supports false or omitted. */
        stream?: boolean;
        /** A list of legacy functions that will be converted to tools at execution time. */
        functions?: Array<{
          /** The name of the function tool. */
          name: string;
          /** Function tool description. */
          description?: string;
          /** JSON Schema parameter definitions for function tools. */
          parameters?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Legacy function calling strategies are converted to tool_choice at execution time. */
        function_call?: "none" | "auto" | {
          /** The name of the function to be forced to be called. */
          name: string;
          [key: string]: unknown;
        };
        /** Adjusts the bias map for the specified token sampling probability. */
        logit_bias?: Record<string, number>;
        /**
         * The maximum number of output tokens.
         * @minimum 1
         */
        max_tokens?: number;
        /**
         * New max output token field, taking precedence over max_tokens.
         * @minimum 1
         */
        max_completion_tokens?: number;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
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
        /** Whether to return token level probabilities. */
        logprobs?: boolean;
        /**
         * Returns the number of top logprobs.
         * @minimum 0
         * @maximum 20
         */
        top_logprobs?: number;
        /** A list of tools that can be called by the model. */
        tools?: Array<{
          /** Tool type, must be function. */
          type: "function";
          /** Function tool definition. */
          function: {
            /** The name of the function tool. */
            name: string;
            /** Function tool description. */
            description?: string;
            /** JSON Schema parameter definitions for function tools. */
            parameters?: Record<string, unknown>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Model how to select tools. */
        tool_choice?: "none" | "auto" | "required" | {
          /** Tool selection type, must be function. */
          type: "function";
          /** The function tool that is forced to be selected. */
          function: {
            /** The name of the function facility to be forced to be called. */
            name: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Structured output format configuration. */
        response_format?: Record<string, unknown>;
        /** List of modalities to request output from. */
        modalities?: Array<string>;
        /** A list of candidate models if the main model fails. */
        models?: Array<string>;
        /** Request additional metadata. */
        metadata?: Record<string, unknown>;
        /** provider routing preference configuration. */
        provider?: Record<string, unknown>;
        /** Plugin configuration to enable. */
        plugins?: Array<Record<string, unknown>>;
        /** Service level. */
        service_tier?: string;
        /** Session ID used for association requests. */
        session_id?: string;
        /** Whether to allow parallel tool calls. */
        parallel_tool_calls?: boolean;
        /** Additional options for streaming responses. */
        stream_options?: Record<string, unknown>;
        /** Inference model configuration. */
        reasoning?: Record<string, unknown>;
        [key: string]: unknown;
      };
      output: {
        /** Chat completion result ID. */
        id: string;
        /** Return object type. */
        object: string;
        /** Unix timestamp of the time the result was created. */
        created: number;
        /** The model ID used in this response. */
        model: string;
        /** The list of candidate results returned by the model. */
        choices: Array<{
          /** The position of this choice in the result array. */
          index: number;
          /** The message corresponding to this choice. */
          message: {
            /** Returns the role of the message. */
            role: string;
            /** The content of the returned message. */
            content?: string | Array<Record<string, unknown>> | null;
            /** A list of tools called by the model request. */
            tool_calls?: Array<Record<string, unknown>>;
            /** Description text returned when the model refuses to answer. */
            refusal?: string | null;
            [key: string]: unknown;
          };
          /** The reason why the model stopped outputting. */
          finish_reason: string | null;
          /** Optional token-level probability information. */
          logprobs?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** The token usage of this response. */
        usage?: {
          /** Enter the number of tokens. */
          prompt_tokens: number;
          /** Output the number of tokens. */
          completion_tokens: number;
          /** Total number of tokens. */
          total_tokens: number;
          /** Enter token segmentation information. */
          prompt_tokens_details?: Record<string, unknown>;
          /** Output token breakdown information. */
          completion_tokens_details?: Record<string, unknown>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Call OpenRouter's deprecated Coinbase charge endpoint for credits purchases. The upstream endpoint is currently deprecated and may return 410 Gone. */
    "openrouter.create_coinbase_charge": {
      input: {
        /** The USD amount to top up. */
        amount: number;
        /** The wallet address that initiated the payment. */
        sender: string;
        /** The chain ID used to initiate the payment. */
        chain_id: 1 | 137 | 8453;
        /** The application URL sent in the HTTP-Referer header for OpenRouter attribution and analytics. */
        httpReferer?: string;
        /** The application display name sent in the X-Title header for OpenRouter console display. */
        xTitle?: string;
      };
      output: {
        /** The original data object returned by Coinbase recharge order. */
        data: Record<string, unknown>;
      };
    };
    /** Create an OpenRouter Anthropic-format message through the `/messages` endpoint. */
    "openrouter.create_message": {
      input: {
        /** The model ID to use. */
        model: string;
        /**
         * The maximum number of output tokens.
         * @minimum 1
         */
        max_tokens: number;
        /** An ordered list of conversation messages. */
        messages: Array<{
          /** Message sender role. */
          role: "user" | "assistant";
          /** Message content. */
          content: string | Array<{
            /** Content block type. */
            type: string;
            /** Text content. */
            text?: string | null;
            /** Description of the source of content blocks such as images and files. */
            source?: Record<string, unknown> | null;
            /** The unique ID of the content block. */
            id?: string;
            /** Tool or content block name. */
            name?: string;
            /** The input object when the tool is called. */
            input?: Record<string, unknown>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** The end user's unique identifier. */
        user?: string;
        /** A list of tools that can be called by the model. */
        tools?: Array<Record<string, unknown>>;
        /**
         * top-k sampling parameters.
         * @minimum 0
         */
        top_k?: number;
        /**
         * nucleus sampling parameters.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** A list of candidate models if the main model fails. */
        models?: Array<string>;
        /** Whether to request a streaming response. Currently connector action only supports false or omitted. */
        stream?: boolean;
        /** System prompt content. */
        system?: string | Array<Record<string, unknown>>;
        /** Plugin configuration to enable. */
        plugins?: Array<Record<string, unknown>>;
        /** Request additional metadata. */
        metadata?: Record<string, unknown>;
        /** Output format related configuration. */
        output_config?: Record<string, unknown>;
        /** provider routing preference configuration. */
        provider?: Record<string, unknown>;
        /** Service level. */
        service_tier?: string;
        /** Session ID used for association requests. */
        session_id?: string;
        /** The generation process stops when encountering these sequences. */
        stop_sequences?: Array<string>;
        /**
         * Sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** Inference mode configuration. */
        thinking?: Record<string, unknown>;
        /** Model how to select tools. */
        tool_choice?: "auto" | "any" | "none" | Record<string, unknown>;
        /** The application URL sent in the HTTP-Referer header for OpenRouter attribution and analytics. */
        httpReferer?: string;
        /** The application display name sent in the X-Title header for OpenRouter console display. */
        xTitle?: string;
        [key: string]: unknown;
      };
      output: {
        /** Message response ID. */
        id: string;
        /** Top-level response type. */
        type: string;
        /** Roles that respond to content. */
        role: string;
        /** The actual model ID used. */
        model: string;
        /** List of content blocks returned by the model. */
        content: Array<{
          /** Content block type. */
          type: string;
          /** Text content. */
          text?: string | null;
          /** Description of the source of content blocks such as images and files. */
          source?: Record<string, unknown> | null;
          /** The unique ID of the content block. */
          id?: string;
          /** Tool or content block name. */
          name?: string;
          /** The input object when the tool is called. */
          input?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The reason why the model stopped outputting. */
        stop_reason: string | null;
        /** The stop sequence that causes a stop. */
        stop_sequence?: string | null;
        /** The token usage of this response. */
        usage?: {
          /** Enter the number of tokens. */
          input_tokens: number;
          /** Output the number of tokens. */
          output_tokens: number;
          /** Number of tokens written to the cache. */
          cache_creation_input_tokens?: number;
          /** The number of cache read tokens. */
          cache_read_input_tokens?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get the authenticated OpenRouter credit balance summary. */
    "openrouter.get_credits": {
      input: Record<string, never>;
      output: {
        /** credit overview information. */
        data: {
          /** Cumulative purchased credits. */
          total_credits: number;
          /** Cumulative credits used. */
          total_usage: number;
        };
      };
    };
    /** Get metadata for the currently authenticated OpenRouter API key. */
    "openrouter.get_current_key": {
      input: {
        /** The application URL sent in the HTTP-Referer header for OpenRouter attribution and analytics. */
        httpReferer?: string;
        /** The application display name sent in the X-Title header for OpenRouter console display. */
        xTitle?: string;
      };
      output: {
        /** Detailed metadata for the current API Key. */
        data: {
          /** The display label of the current API Key. */
          label: string;
          /** The current API Key spending limit, in USD. */
          limit?: number;
          /** The current remaining available amount of the API Key, in US dollars. */
          limit_remaining?: number;
          /** Credit reset cycle. */
          limit_reset?: string | null;
          /** Cumulative OpenRouter consumption for the current API Key, in USD. */
          usage: number;
          /** OpenRouter consumption for the current UTC day in USD. */
          usage_daily: number;
          /** Current week's OpenRouter consumption in US dollars. */
          usage_weekly: number;
          /** OpenRouter consumption for the current UTC month in USD. */
          usage_monthly: number;
          /** Cumulative BYOK consumption for the current API Key, in USD. */
          byok_usage: number;
          /** BYOK consumption for the current UTC day in USD. */
          byok_usage_daily: number;
          /** BYOK consumption for the current week, in USD. */
          byok_usage_weekly: number;
          /** BYOK consumption for the current UTC month in USD. */
          byok_usage_monthly: number;
          /** Whether the current API Key belongs to the free tier. */
          is_free_tier: boolean;
          /** Whether the current API Key is a management key. */
          is_management_key: boolean;
          /** Whether the current API Key is a provisioning Key. */
          is_provisioning_key: boolean;
          /** Whether BYOK consumption is included in the credit statistics. */
          include_byok_in_limit: boolean;
          /** The user ID who created this API Key. */
          creator_user_id?: string | null;
          /** The expiration time of this API Key. */
          expires_at?: string | null;
          /** Rate limit information for this API Key. */
          rate_limit: {
            /** The number of requests allowed per time window. */
            requests: number;
            /** Rate limiting time window. */
            interval: string;
            /** Additional description for the rate limit field. */
            note: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get request and usage metadata for a specific OpenRouter generation. */
    "openrouter.get_generation": {
      input: {
        /** The generation ID to query. */
        id: string;
      };
      output: {
        /** generation metadata. */
        data: {
          /** The unique ID of the generation. */
          id: string;
          /** The creation time of generation. */
          created_at: string;
          /** The model used in this generation. */
          model: string;
          /** The name of the provider that actually provided the response. */
          provider_name?: string | null;
          /** The total cost of this generation, in US dollars. */
          total_cost: number;
          /** The accounting amount of this generation, in US dollars. */
          usage: number;
          /** The reason for generation completion. */
          finish_reason?: string | null;
          /** The request ID of this API request. */
          request_id?: string | null;
          /** The request ID of the upstream provider. */
          upstream_id?: string | null;
          /** Enter the number of tokens. */
          tokens_prompt?: number;
          /** Output the number of tokens. */
          tokens_completion?: number;
          /** Number of input tokens reported by upstream. */
          native_tokens_prompt?: number;
          /** The number of output tokens reported by the upstream. */
          native_tokens_completion?: number;
          /** Number of inference tokens reported by upstream. */
          native_tokens_reasoning?: number;
          /** Number of cached tokens reported by upstream. */
          native_tokens_cached?: number;
          /** The total time taken, in milliseconds. */
          latency?: number;
          /** The audit time is in milliseconds. */
          moderation_latency?: number;
          /** Generation takes time, in milliseconds. */
          generation_time?: number;
          /** Whether this generation uses streaming output. */
          streamed?: boolean | null;
          /** Whether this generation has been cancelled. */
          cancelled?: boolean | null;
          /** Whether this generation uses BYOK. */
          is_byok?: boolean;
          /** A record of attempts by each provider within a request. */
          provider_responses?: Array<{
            /** This time try the corresponding provider name. */
            provider_name?: string;
            /** The model ID corresponding to this attempt. */
            model?: string;
            /** The status code returned from this attempt. */
            status?: number;
            /** The error object returned from this attempt. */
            error?: Record<string, unknown>;
            [key: string]: unknown;
          }> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get the total number of OpenRouter models, optionally filtered by output modalities. */
    "openrouter.get_models_count": {
      input: {
        /** Filter statistics by output modality, such as text, image, audio, embeddings, or all. */
        outputModalities?: string;
        /** The application URL sent in the HTTP-Referer header for OpenRouter attribution and analytics. */
        httpReferer?: string;
        /** The application display name sent in the X-Title header for OpenRouter console display. */
        xTitle?: string;
      };
      output: {
        /** Model number statistics results. */
        data: {
          /** The current number of eligible models. */
          count: number;
        };
      };
    };
    /** List the available OpenRouter models, or return the RSS feed when requested. */
    "openrouter.list_available_models": {
      input: {
        /** Filter the model list by use case classification. */
        category?: string;
        /** Filter the model list by supported parameter names. Multiple parameters can be separated by commas. */
        supportedParameters?: string;
        /** Filter the list of models by output modality, such as text, image, audio, embeddings, or all. */
        outputModalities?: string;
        /** Whether to return RSS XML instead of JSON. */
        useRss?: boolean;
        /** Whether to use the chat page link instead of the model details page link when returning RSS. */
        useRssChatLinks?: boolean;
      };
      output: {
        /** Model list. */
        data: Array<{
          /** The unique ID of the model. */
          id: string;
          /** Stable canonical slug for the model. */
          canonical_slug: string;
          /** The display name of the model. */
          name: string;
          /** The Unix timestamp when the model was added to OpenRouter. */
          created: number;
          /** Description text for the model. */
          description?: string;
          /** The maximum context length supported by the model. */
          context_length: number;
          /** Architectural information for the model. */
          architecture: {
            /** The overall modality description, such as text->text. */
            modality?: string;
            /** The name of the tokenizer used by the model. */
            tokenizer: string;
            /** The type of instruction format that the model follows. */
            instruct_type?: string | null;
            /** List of input modalities supported by the model. */
            input_modalities: Array<string>;
            /** List of output modes supported by the model. */
            output_modalities: Array<string>;
            [key: string]: unknown;
          };
          /** Model price information. */
          pricing: {
            /** The price of each input token. */
            prompt: string;
            /** The price of each output token. */
            completion: string;
            /** Fixed price per request. */
            request?: string;
            /** Price per image input or output unit. */
            image?: string;
            /** Price per web search. */
            web_search?: string;
            /** Price per internal reasoning token. */
            internal_reasoning?: string;
            /** Price per cached input token read. */
            input_cache_read?: string;
            /** Price per cached input token write. */
            input_cache_write?: string;
            [key: string]: unknown;
          };
          /** Information about the model's primary provider. */
          top_provider: {
            /** Whether the primary provider has content moderation enabled. */
            is_moderated?: boolean;
            /** Context lengths supported by the primary provider. */
            context_length?: number;
            /** The maximum number of output tokens allowed by the primary provider. */
            max_completion_tokens?: number | null;
            [key: string]: unknown;
          };
          /** List of parameters supported by this model. */
          supported_parameters: Array<string>;
          /** Limit information for each request. */
          per_request_limits?: Record<string, unknown> | null;
          /** The default parameter set for the model. */
          default_parameters?: Record<string, unknown> | null;
          /** The model is expected to be offline. */
          expiration_date?: string | null;
          /** The model knowledge cutoff date. */
          knowledge_cutoff?: string | null;
          /** Hugging Face model ID. */
          hugging_face_id?: string;
          /** A collection of links related to this model. */
          links?: {
            /** Model details or endpoints paths. */
            details?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      } | {
        /** RSS XML string returned when use_rss=true. */
        rss: string;
      };
    };
    /** List the embedding models available through OpenRouter. */
    "openrouter.list_embedding_models": {
      input: {
        /** The application URL sent in the HTTP-Referer header for OpenRouter attribution and analytics. */
        httpReferer?: string;
        /** The application display name sent in the X-Title header for OpenRouter console display. */
        xTitle?: string;
      };
      output: {
        /** Model list. */
        data: Array<{
          /** The unique ID of the model. */
          id: string;
          /** Stable canonical slug for the model. */
          canonical_slug: string;
          /** The display name of the model. */
          name: string;
          /** The Unix timestamp when the model was added to OpenRouter. */
          created: number;
          /** Description text for the model. */
          description?: string;
          /** The maximum context length supported by the model. */
          context_length: number;
          /** Architectural information for the model. */
          architecture: {
            /** The overall modality description, such as text->text. */
            modality?: string;
            /** The name of the tokenizer used by the model. */
            tokenizer: string;
            /** The type of instruction format that the model follows. */
            instruct_type?: string | null;
            /** List of input modalities supported by the model. */
            input_modalities: Array<string>;
            /** List of output modes supported by the model. */
            output_modalities: Array<string>;
            [key: string]: unknown;
          };
          /** Model price information. */
          pricing: {
            /** The price of each input token. */
            prompt: string;
            /** The price of each output token. */
            completion: string;
            /** Fixed price per request. */
            request?: string;
            /** Price per image input or output unit. */
            image?: string;
            /** Price per web search. */
            web_search?: string;
            /** Price per internal reasoning token. */
            internal_reasoning?: string;
            /** Price per cached input token read. */
            input_cache_read?: string;
            /** Price per cached input token write. */
            input_cache_write?: string;
            [key: string]: unknown;
          };
          /** Information about the model's primary provider. */
          top_provider: {
            /** Whether the primary provider has content moderation enabled. */
            is_moderated?: boolean;
            /** Context lengths supported by the primary provider. */
            context_length?: number;
            /** The maximum number of output tokens allowed by the primary provider. */
            max_completion_tokens?: number | null;
            [key: string]: unknown;
          };
          /** List of parameters supported by this model. */
          supported_parameters: Array<string>;
          /** Limit information for each request. */
          per_request_limits?: Record<string, unknown> | null;
          /** The default parameter set for the model. */
          default_parameters?: Record<string, unknown> | null;
          /** The model is expected to be offline. */
          expiration_date?: string | null;
          /** The model knowledge cutoff date. */
          knowledge_cutoff?: string | null;
          /** Hugging Face model ID. */
          hugging_face_id?: string;
          /** A collection of links related to this model. */
          links?: {
            /** Model details or endpoints paths. */
            details?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** List the currently available endpoints for a specific OpenRouter model. */
    "openrouter.list_model_endpoints": {
      input: {
        /** Model author or organization name. */
        author: string;
        /** Model slug. */
        slug: string;
      };
      output: {
        /** Aggregated information about models and endpoints. */
        data: {
          /** Model ID. */
          id: string;
          /** Model name. */
          name: string;
          /** Unix timestamp of model creation time. */
          created: number;
          /** Model description. */
          description?: string;
          /** Model architecture information. */
          architecture?: {
            /** The overall modality description, such as text->text. */
            modality?: string;
            /** The name of the tokenizer used by the model. */
            tokenizer: string;
            /** The type of instruction format that the model follows. */
            instruct_type?: string | null;
            /** List of input modalities supported by the model. */
            input_modalities: Array<string>;
            /** List of output modes supported by the model. */
            output_modalities: Array<string>;
            [key: string]: unknown;
          };
          /** List of endpoints available for this model. */
          endpoints: Array<{
            /** Endpoint display name. */
            name: string;
            /** The model ID corresponding to the endpoint. */
            model_id: string;
            /** The model name corresponding to the endpoint. */
            model_name: string;
            /** The name of the upstream provider that provides this endpoint. */
            provider_name: string;
            /** The context length supported by the endpoint. */
            context_length: number;
            /** The maximum number of input tokens supported by the endpoint. */
            max_prompt_tokens?: number;
            /** The maximum number of output tokens supported by the endpoint. */
            max_completion_tokens?: number;
            /** List of parameters supported by this endpoint. */
            supported_parameters: Array<string>;
            /** Whether this endpoint supports implicit caching. */
            supports_implicit_caching?: boolean;
            /** Endpoint pricing information. */
            pricing: {
              /** The price of each input token. */
              prompt: string;
              /** The price of each output token. */
              completion: string;
              /** Fixed price per request. */
              request?: string;
              /** Price per image input or output unit. */
              image?: string;
              /** Price per web search. */
              web_search?: string;
              /** Price per internal reasoning token. */
              internal_reasoning?: string;
              /** Price per cached input token read. */
              input_cache_read?: string;
              /** Price per cached input token write. */
              input_cache_write?: string;
              [key: string]: unknown;
            };
            /** The label or vendor grouping ID of the endpoint. */
            tag: string;
            /** Endpoint availability status. */
            status?: string | number;
            /** The quantization method used by the endpoint. */
            quantization?: string | Record<string, unknown> | null;
            /** Latency indicator for the last 30 minutes. */
            latency_last_30m?: {
              /** 50th percentile delay. */
              p50?: number;
              /** 75th percentile delay. */
              p75?: number;
              /** 90th percentile delay. */
              p90?: number;
              /** 99th percentile delay. */
              p99?: number;
              [key: string]: unknown;
            };
            /** Throughput metrics for the last 30 minutes. */
            throughput_last_30m?: {
              /** 50th percentile throughput. */
              p50?: number;
              /** 75th percentile throughput. */
              p75?: number;
              /** 90th percentile throughput. */
              p90?: number;
              /** 99th percentile throughput. */
              p99?: number;
              [key: string]: unknown;
            };
            /** Availability in the last 5 minutes. */
            uptime_last_5m?: number;
            /** Availability in the last 30 minutes. */
            uptime_last_30m?: number;
            /** Availability in the last 1 day. */
            uptime_last_1d?: number;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List the model providers currently available through OpenRouter. */
    "openrouter.list_providers": {
      input: Record<string, never>;
      output: {
        /** provider list. */
        data: Array<{
          /** Provider display name. */
          name: string;
          /** Provider's only slug. */
          slug: string;
          /** Link to provider privacy policy. */
          privacy_policy_url: string | null;
          /** Provider status page link. */
          status_page_url?: string | null;
          /** Link to provider terms of service. */
          terms_of_service_url?: string | null;
          /** The country code for the provider's headquarters. */
          headquarters?: string | null;
          /** List of country codes where the provider's data centers are located. */
          datacenters?: Array<string> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List models filtered by the current user's OpenRouter routing preferences, privacy settings, and guardrails. */
    "openrouter.list_user_models": {
      input: {
        /** The application URL sent in the HTTP-Referer header for OpenRouter attribution and analytics. */
        httpReferer?: string;
        /** The application display name sent in the X-Title header for OpenRouter console display. */
        xTitle?: string;
      };
      output: {
        /** Model list. */
        data: Array<{
          /** The unique ID of the model. */
          id: string;
          /** Stable canonical slug for the model. */
          canonical_slug: string;
          /** The display name of the model. */
          name: string;
          /** The Unix timestamp when the model was added to OpenRouter. */
          created: number;
          /** Description text for the model. */
          description?: string;
          /** The maximum context length supported by the model. */
          context_length: number;
          /** Architectural information for the model. */
          architecture: {
            /** The overall modality description, such as text->text. */
            modality?: string;
            /** The name of the tokenizer used by the model. */
            tokenizer: string;
            /** The type of instruction format that the model follows. */
            instruct_type?: string | null;
            /** List of input modalities supported by the model. */
            input_modalities: Array<string>;
            /** List of output modes supported by the model. */
            output_modalities: Array<string>;
            [key: string]: unknown;
          };
          /** Model price information. */
          pricing: {
            /** The price of each input token. */
            prompt: string;
            /** The price of each output token. */
            completion: string;
            /** Fixed price per request. */
            request?: string;
            /** Price per image input or output unit. */
            image?: string;
            /** Price per web search. */
            web_search?: string;
            /** Price per internal reasoning token. */
            internal_reasoning?: string;
            /** Price per cached input token read. */
            input_cache_read?: string;
            /** Price per cached input token write. */
            input_cache_write?: string;
            [key: string]: unknown;
          };
          /** Information about the model's primary provider. */
          top_provider: {
            /** Whether the primary provider has content moderation enabled. */
            is_moderated?: boolean;
            /** Context lengths supported by the primary provider. */
            context_length?: number;
            /** The maximum number of output tokens allowed by the primary provider. */
            max_completion_tokens?: number | null;
            [key: string]: unknown;
          };
          /** List of parameters supported by this model. */
          supported_parameters: Array<string>;
          /** Limit information for each request. */
          per_request_limits?: Record<string, unknown> | null;
          /** The default parameter set for the model. */
          default_parameters?: Record<string, unknown> | null;
          /** The model is expected to be offline. */
          expiration_date?: string | null;
          /** The model knowledge cutoff date. */
          knowledge_cutoff?: string | null;
          /** Hugging Face model ID. */
          hugging_face_id?: string;
          /** A collection of links related to this model. */
          links?: {
            /** Model details or endpoints paths. */
            details?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
      };
    };
    /** Preview the OpenRouter endpoints that remain available under Zero Data Retention. */
    "openrouter.list_zdr_endpoints": {
      input: {
        /** The application URL sent in the HTTP-Referer header for OpenRouter attribution and analytics. */
        httpReferer?: string;
        /** The application display name sent in the X-Title header for OpenRouter console display. */
        xTitle?: string;
      };
      output: {
        /** List of endpoints that satisfy ZDR constraints. */
        data: Array<{
          /** Endpoint display name. */
          name: string;
          /** The model ID corresponding to the endpoint. */
          model_id: string;
          /** The model name corresponding to the endpoint. */
          model_name: string;
          /** The name of the upstream provider that provides this endpoint. */
          provider_name: string;
          /** The context length supported by the endpoint. */
          context_length: number;
          /** The maximum number of input tokens supported by the endpoint. */
          max_prompt_tokens?: number;
          /** The maximum number of output tokens supported by the endpoint. */
          max_completion_tokens?: number;
          /** List of parameters supported by this endpoint. */
          supported_parameters: Array<string>;
          /** Whether this endpoint supports implicit caching. */
          supports_implicit_caching?: boolean;
          /** Endpoint pricing information. */
          pricing: {
            /** The price of each input token. */
            prompt: string;
            /** The price of each output token. */
            completion: string;
            /** Fixed price per request. */
            request?: string;
            /** Price per image input or output unit. */
            image?: string;
            /** Price per web search. */
            web_search?: string;
            /** Price per internal reasoning token. */
            internal_reasoning?: string;
            /** Price per cached input token read. */
            input_cache_read?: string;
            /** Price per cached input token write. */
            input_cache_write?: string;
            [key: string]: unknown;
          };
          /** The label or vendor grouping ID of the endpoint. */
          tag: string;
          /** Endpoint availability status. */
          status?: string | number;
          /** The quantization method used by the endpoint. */
          quantization?: string | Record<string, unknown> | null;
          /** Latency indicator for the last 30 minutes. */
          latency_last_30m?: {
            /** 50th percentile delay. */
            p50?: number;
            /** 75th percentile delay. */
            p75?: number;
            /** 90th percentile delay. */
            p90?: number;
            /** 99th percentile delay. */
            p99?: number;
            [key: string]: unknown;
          };
          /** Throughput metrics for the last 30 minutes. */
          throughput_last_30m?: {
            /** 50th percentile throughput. */
            p50?: number;
            /** 75th percentile throughput. */
            p75?: number;
            /** 90th percentile throughput. */
            p90?: number;
            /** 99th percentile throughput. */
            p99?: number;
            [key: string]: unknown;
          };
          /** Availability in the last 5 minutes. */
          uptime_last_5m?: number;
          /** Availability in the last 30 minutes. */
          uptime_last_30m?: number;
          /** Availability in the last 1 day. */
          uptime_last_1d?: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
