import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a non-streaming Together AI chat completion. */
    "together_ai.create_chat_completion": {
      input: {
        /**
         * The Together AI model identifier to use.
         * @minLength 1
         */
        model: string;
        /**
         * The ordered conversation history sent to the model.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "tool";
          /** The message content sent to the model. */
          content?: string | Array<Record<string, unknown>> | string | null;
          /** The optional participant name for the message. */
          name?: string;
          /** The identifier of the tool call that this tool message responds to. */
          tool_call_id?: string;
          /** Tool calls emitted by the assistant. */
          tool_calls?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /**
         * The maximum number of tokens to generate.
         * @minimum 1
         */
        max_tokens?: number;
        /** The stop sequences where generation should stop. */
        stop?: Array<string>;
        /**
         * The sampling temperature.
         * @minimum 0
         */
        temperature?: number;
        /**
         * The nucleus sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /**
         * The maximum number of next-token choices to consider.
         * @minimum 0
         */
        top_k?: number;
        /** How the API should behave when max_tokens exceeds the model context length. */
        context_length_exceeded_behavior?: "truncate" | "error";
        /** The repetition penalty applied to generated text. */
        repetition_penalty?: number;
        /** Whether to request a streaming response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /**
         * The number of top token log probabilities to include.
         * @minimum 0
         * @maximum 20
         */
        logprobs?: number;
        /** Whether the response should include the prompt. */
        echo?: boolean;
        /**
         * The number of completions to generate for each prompt.
         * @minimum 1
         * @maximum 128
         */
        n?: number;
        /**
         * An alternative probability threshold to top_p and top_k.
         * @minimum 0
         * @maximum 1
         */
        min_p?: number;
        /**
         * The presence penalty applied to newly introduced topics.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /**
         * The frequency penalty applied to repeated tokens.
         * @minimum -2
         * @maximum 2
         */
        frequency_penalty?: number;
        /** Token bias adjustments keyed by token id. */
        logit_bias?: Record<string, number>;
        /** A seed for reproducible sampling. */
        seed?: number;
        /** How a legacy function call should be selected. */
        function_call?: "none" | "auto" | {
          /**
           * The function name to call.
           * @minLength 1
           */
          name: string;
        };
        /** Response format configuration. */
        response_format?: {
          /** The requested response format type. */
          type: "text" | "json_object" | "json_schema";
          /** A JSON object with arbitrary upstream fields. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Tools available to the model. */
        tools?: Array<Record<string, unknown>>;
        /** Tool selection strategy for the request. */
        tool_choice?: string | Record<string, unknown>;
        /** The compliance mode accepted by the API. */
        compliance?: "hipaa";
        /** A JSON object with arbitrary upstream fields. */
        chat_template_kwargs?: Record<string, unknown>;
        /** The moderation model used to validate tokens. */
        safety_model?: string;
        /** The reasoning effort level to apply. */
        reasoning_effort?: "low" | "medium" | "high";
        /** Reasoning configuration for models that support toggling reasoning. */
        reasoning?: {
          /** Whether reasoning should be enabled. */
          enabled?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      output: {
        /** The chat completion identifier. */
        id?: string;
        /** The generated completion choices. */
        choices: Array<{
          /** The choice index. */
          index: number;
          /** A message in the Together AI chat completion request. */
          message: {
            /** The role of the message author. */
            role: "system" | "user" | "assistant" | "tool";
            /** The message content sent to the model. */
            content?: string | Array<Record<string, unknown>> | string | null;
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
          /** A JSON object with arbitrary upstream fields. */
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
        /** The Unix timestamp when the completion was created. */
        created?: number;
        /** The model used to generate the completion. */
        model: string;
        /** The object type returned by the API. */
        object?: string;
        [key: string]: unknown;
      };
    };
    /** Create Together AI embeddings for one or more text inputs. */
    "together_ai.create_embedding": {
      input: {
        /**
         * The Together AI embedding model identifier to use.
         * @minLength 1
         */
        model: string;
        /** The text input or inputs to embed. */
        input: string | Array<string>;
      };
      output: {
        /** The object type, which is always list. */
        object: "list";
        /** The embedding model used to generate the vectors. */
        model: string;
        /** The generated embedding results. */
        data: Array<{
          /** The object type, which is always embedding. */
          object: "embedding";
          /** The embedding vector. */
          embedding: Array<number>;
          /** The zero-based index of this embedding result. */
          index: number;
        }>;
      };
    };
    /** List the Together AI models available to the current API key. */
    "together_ai.list_models": {
      input: Record<string, never>;
      output: Array<{
        /** The model identifier. */
        id: string;
        /** The object type, which is always model. */
        object: "model";
        /** The Unix timestamp when the model was created. */
        created: number;
        /** The model capability type. */
        type: "chat" | "language" | "code" | "image" | "embedding" | "moderation" | "rerank";
        /** The display name for the model. */
        display_name?: string;
        /** The organization that published the model. */
        organization?: string;
        /** The upstream model information URL. */
        link?: string;
        /** The model license. */
        license?: string;
        /** The model context length. */
        context_length?: number;
        /** Together AI model pricing metadata. */
        pricing?: {
          /** The base price component. */
          base: number;
          /** The fine-tuning price component. */
          finetune: number;
          /** The hourly price component. */
          hourly: number;
          /** The input token price component. */
          input: number;
          /** The output token price component. */
          output: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      }>;
    };
  }
}
