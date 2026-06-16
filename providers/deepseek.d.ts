import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a DeepSeek message via the Anthropic-compatible API. */
    "deepseek.create_anthropic_message": {
      input: {
        /** The model to use for the message request. */
        model: "deepseek-chat" | "deepseek-reasoner";
        /**
         * The maximum number of tokens to generate.
         * @minimum 1
         */
        max_tokens: number;
        /** The ordered conversation history to send to the model. */
        messages: Array<{
          /** The role of the message author. */
          role: "user" | "assistant";
          /** The content for the message. */
          content: string | Array<Record<string, unknown>>;
        }>;
        /** Sequences that stop generation. */
        stop_sequences?: Array<string>;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /** System prompt content as text or structured blocks. */
        system?: string | Array<Record<string, unknown>>;
        /**
         * The sampling temperature to use for generation.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** Reasoning configuration for the request. */
        thinking?: {
          /** The thinking mode requested by the Anthropic-compatible API. */
          type: string;
          /** The maximum number of tokens allocated to thinking. */
          budget_tokens?: number;
        };
        /** How the model should choose tools for the request. */
        tool_choice?: "auto" | "any" | "none" | {
          /** The Anthropic-compatible tool choice mode. */
          type: "auto" | "any" | "tool" | "none";
          /** The specific tool name to force when the type is tool. */
          name?: string | null;
        };
        /** The tools available to the model. */
        tools?: Array<{
          /** The tool name. */
          name: string;
          /** A human-readable description of the tool. */
          description: string;
          /** The JSON Schema for the tool input. */
          input_schema: {
            /** The JSON Schema type for the tool input. */
            type: string;
            /** The JSON Schema properties for the tool input. */
            properties: Record<string, unknown>;
            /** The list of required input property names. */
            required?: Array<string>;
          };
        }>;
        /** The nucleus sampling threshold. */
        top_p?: number;
      };
      output: {
        /** The response identifier. */
        id: string;
        /** The top-level response type. */
        type: string;
        /** The role assigned to the response content. */
        role: string;
        /** The model that generated the response. */
        model: string;
        /** The content blocks returned by the model. */
        content: Array<{
          /** The content block type. */
          type: string;
          /** The text content returned by the model. */
          text: string;
        } | {
          /** The content block type. */
          type: string;
          /** The reasoning content returned by the model. */
          thinking: string;
          /** The signature attached to the thinking block. */
          signature?: string | null;
        } | {
          /** The content block type. */
          type: string;
          /** The identifier of the tool use block. */
          id: string;
          /** The tool name selected by the model. */
          name: string;
          /** The structured input passed to the tool. */
          input: Record<string, unknown>;
        }>;
        /** The reason why the model stopped generating. */
        stop_reason: string | null;
        /** The stop sequence that ended generation, if any. */
        stop_sequence?: string | null;
        /** Token usage information for the response. */
        usage: {
          /** The number of input tokens consumed. */
          input_tokens: number;
          /** The number of output tokens generated. */
          output_tokens: number;
          /** The number of input tokens read from cache. */
          cache_read_input_tokens?: number;
          /** The number of input tokens written to cache. */
          cache_creation_input_tokens?: number;
        };
      };
    };
    /** Create a DeepSeek chat completion via the OpenAI-compatible API. */
    "deepseek.create_chat_completion": {
      input: {
        /** The model to use for the chat completion. */
        model: "deepseek-chat" | "deepseek-reasoner";
        /** The ordered conversation history to send to the model. */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "tool";
          /** The text content of the message. */
          content?: string | null;
          /** The optional participant name for the message. */
          name?: string;
          /** Whether the assistant message should be treated as a prefix. */
          prefix?: boolean;
          /** The identifier of the tool call that this tool message responds to. */
          tool_call_id?: string;
          /** Reasoning content provided for assistant context. */
          reasoning_content?: string;
        }>;
        /**
         * The frequency penalty to apply to repeated tokens.
         * @minimum -2
         * @maximum 2
         */
        frequency_penalty?: number;
        /** Whether to include token-level log probability details in the response. */
        logprobs?: boolean;
        /**
         * The maximum number of tokens to generate.
         * @minimum 1
         */
        max_tokens?: number;
        /**
         * The presence penalty to apply to newly introduced tokens.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /** The format requested for the model response. */
        response_format?: {
          /** The response format type requested from the model. */
          type: "text" | "json_object";
        };
        /** One or more sequences that stop generation. */
        stop?: string | Array<string>;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /** Additional options for streaming responses. */
        stream_options?: {
          /** Whether usage information should be included in stream chunks. */
          include_usage?: boolean;
        };
        /**
         * The sampling temperature to use for generation.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** Reasoning configuration for the request. */
        thinking?: {
          /** Whether reasoning mode should be enabled for the request. */
          type: "enabled" | "disabled";
        };
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
        /** The tools available to the model. */
        tools?: Array<{
          /** The tool type. Must be function. */
          type: "function";
          /** The function definition for the tool. */
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
        /**
         * The number of top token log probabilities to return.
         * @minimum 0
         * @maximum 20
         */
        top_logprobs?: number;
        /**
         * The nucleus sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
      };
      output: {
        /** The response identifier. */
        id: string;
        /** The object type returned by the API. */
        object: string;
        /** The Unix timestamp when the response was created. */
        created: number;
        /** The model that generated the response. */
        model: string;
        /** The completion choices returned by the model. */
        choices: Array<{
          /** The zero-based position of this choice in the response. */
          index: number;
          /** The assistant message for this choice. */
          message: {
            /** The role of the returned message. */
            role: "assistant";
            /** The assistant message content. */
            content?: string | null;
            /** The reasoning content returned by the model. */
            reasoning_content?: string;
            /** The tool calls requested by the assistant. */
            tool_calls?: Array<{
              /** The identifier for the tool call. */
              id: string;
              /** The tool call type. Must be function. */
              type: "function";
              /** The function call chosen by the model. */
              function: {
                /** The name of the function that the model selected. */
                name: string;
                /** The JSON string containing the function call arguments. */
                arguments: string;
              };
            }>;
          };
          /** Token-level log probability details for this choice. */
          logprobs?: {
            /** Log probability details for visible content tokens. */
            content?: Array<{
              /** The token text. */
              token: string;
              /** The log probability assigned to the token. */
              logprob: number;
              /** The UTF-8 byte values for the token. */
              bytes?: Array<number> | null;
              /** Alternative token candidates with their log probabilities. */
              top_logprobs?: Array<{
                /** The token text. */
                token: string;
                /** The log probability assigned to the token. */
                logprob: number;
                /** The UTF-8 byte values for the token. */
                bytes?: Array<number> | null;
              }>;
            }> | null;
            /** Log probability details for reasoning tokens. */
            reasoning_content?: Array<{
              /** The token text. */
              token: string;
              /** The log probability assigned to the token. */
              logprob: number;
              /** The UTF-8 byte values for the token. */
              bytes?: Array<number> | null;
              /** Alternative token candidates with their log probabilities. */
              top_logprobs?: Array<{
                /** The token text. */
                token: string;
                /** The log probability assigned to the token. */
                logprob: number;
                /** The UTF-8 byte values for the token. */
                bytes?: Array<number> | null;
              }>;
            }> | null;
          } | null;
          /** The reason why the model stopped generating. */
          finish_reason: "stop" | "length" | "content_filter" | "tool_calls" | "insufficient_system_resource" | null;
        }>;
        /** Token usage information for the response. */
        usage?: {
          /** The number of prompt tokens consumed. */
          prompt_tokens: number;
          /** The number of completion tokens generated. */
          completion_tokens: number;
          /** The total number of tokens consumed. */
          total_tokens: number;
          /** The number of prompt tokens served from cache. */
          prompt_cache_hit_tokens?: number;
          /** The number of prompt tokens that missed the cache. */
          prompt_cache_miss_tokens?: number;
          /** Additional completion token usage details. */
          completion_tokens_details?: {
            /** The number of reasoning tokens used. */
            reasoning_tokens?: number;
          };
        };
        /** The backend system fingerprint for the response. */
        system_fingerprint?: string;
      };
    };
    /** Get the current DeepSeek account balance. */
    "deepseek.get_user_balance": {
      input: Record<string, never>;
      output: {
        /** Whether the account balance information is currently available. */
        is_available: boolean;
        /** The list of balances grouped by currency. */
        balance_infos: Array<{
          /** The currency code for the balance. */
          currency: string;
          /** The total available balance. */
          total_balance: string;
          /** The promotional or granted balance. */
          granted_balance: string;
          /** The manually topped-up balance. */
          topped_up_balance: string;
        }>;
      };
    };
    /** List the available DeepSeek models. */
    "deepseek.list_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type returned by the API. */
        object: string;
        /** The list of available models. */
        data: Array<{
          /** The model identifier. */
          id: string;
          /** The object type returned by the API. */
          object: string;
          /** The owner of the model. */
          owned_by: string;
        }>;
      };
    };
  }
}
