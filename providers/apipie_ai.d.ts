import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a non-streaming APIpie AI OpenAI-compatible chat completion. */
    "apipie_ai.create_chat_completion": {
      input: {
        /** The APIpie AI model identifier to use. */
        model: string;
        /**
         * The ordered conversation history sent to the model.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "tool";
          /** The message content sent to the model. */
          content?: string | Array<{
            /** The content block type. */
            type: "text";
            /** The text content for this block. */
            text: string;
            [key: string]: unknown;
          } | {
            /** The content block type. */
            type: "image_url";
            /** The image URL payload. */
            image_url: {
              /**
               * The image URL or data URL to send to a vision-capable model.
               * @format uri
               */
              url: string;
              /** The image detail level. */
              detail?: "auto" | "low" | "high";
              [key: string]: unknown;
            };
            [key: string]: unknown;
          } | Record<string, unknown>> | null;
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
        /** Any JSON object. */
        logit_bias?: Record<string, unknown>;
        /**
         * The maximum number of tokens to generate.
         * @exclusiveMinimum 0
         */
        max_tokens?: number;
        /**
         * The number of chat completions to generate.
         * @exclusiveMinimum 0
         */
        n?: number;
        /**
         * The presence penalty applied to newly introduced tokens.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /** Response format configuration. */
        response_format?: {
          /** The requested response format type. */
          type?: "text" | "json_object" | "json_schema";
          /** Any JSON object. */
          json_schema?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** A seed for deterministic sampling. */
        seed?: number;
        /** One or more sequences where generation should stop. */
        stop?: string | Array<string>;
        /** Whether to request a streaming response. This connector only supports false. */
        stream?: boolean;
        /**
         * The sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** Tool selection strategy for the request. */
        tool_choice?: "none" | "auto" | "required" | Record<string, unknown>;
        /** Tools available to the model. */
        tools?: Array<Record<string, unknown>>;
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
        id?: string;
        /** The object type returned by the API. */
        object?: string;
        /** The Unix timestamp when the completion was created. */
        created?: number;
        /** The model used to generate the completion. */
        model?: string;
        /** The generated completion choices. */
        choices?: Array<{
          /** The choice index. */
          index?: number;
          /** A message in the OpenAI-compatible chat completion request. */
          message?: {
            /** The role of the message author. */
            role: "system" | "user" | "assistant" | "tool";
            /** The message content sent to the model. */
            content?: string | Array<{
              /** The content block type. */
              type: "text";
              /** The text content for this block. */
              text: string;
              [key: string]: unknown;
            } | {
              /** The content block type. */
              type: "image_url";
              /** The image URL payload. */
              image_url: {
                /**
                 * The image URL or data URL to send to a vision-capable model.
                 * @format uri
                 */
                url: string;
                /** The image detail level. */
                detail?: "auto" | "low" | "high";
                [key: string]: unknown;
              };
              [key: string]: unknown;
            } | Record<string, unknown>> | null;
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
          /** Any JSON object. */
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
        [key: string]: unknown;
      };
    };
    /** Generate APIpie AI embeddings for one or more text inputs. */
    "apipie_ai.create_embedding": {
      input: {
        /** The APIpie AI embedding model identifier to use. */
        model: string;
        /** The text input to embed. */
        input: string | Array<string>;
        /** The format of the returned embedding vectors. */
        encoding_format?: "float" | "np";
        /**
         * The number of dimensions in the output embedding vector.
         * @minimum 1
         * @maximum 1536
         */
        dimensions?: number;
        /** An end-user identifier for monitoring or abuse detection. */
        user?: string;
        [key: string]: unknown;
      };
      output: {
        /** The top-level object type. */
        object?: string;
        /** The generated embedding items. */
        data?: Array<{
          /** The object type for this embedding item. */
          object?: string;
          /** The embedding vector. */
          embedding?: Array<number>;
          /** The index of the input item. */
          index?: number;
          [key: string]: unknown;
        }>;
        /** The embedding model used by the API. */
        model?: string;
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
        [key: string]: unknown;
      };
    };
    /** List detailed APIpie AI model metadata available to the current API key. */
    "apipie_ai.list_detailed_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type. */
        object?: string;
        /** The list of available APIpie AI models. */
        data?: Array<{
          /** The model identifier. */
          id?: string;
          /** The object type returned by the API. */
          object?: string;
          /**
           * The model type, such as llm or embedding.
           * @minLength 1
           */
          type?: string;
          /** The upstream provider that serves the model. */
          provider?: string;
          /** The display name of the model. */
          name?: string;
          /** A short model description. */
          description?: string;
          /** The maximum context length supported by the model. */
          context_length?: number;
          /** The maximum output tokens supported by the model. */
          max_tokens?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List the APIpie AI models available to the current API key. */
    "apipie_ai.list_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type. */
        object?: string;
        /** The list of available APIpie AI models. */
        data?: Array<{
          /** The model identifier. */
          id?: string;
          /** The object type returned by the API. */
          object?: string;
          /**
           * The model type, such as llm or embedding.
           * @minLength 1
           */
          type?: string;
          /** The upstream provider that serves the model. */
          provider?: string;
          /** The display name of the model. */
          name?: string;
          /** A short model description. */
          description?: string;
          /** The maximum context length supported by the model. */
          context_length?: number;
          /** The maximum output tokens supported by the model. */
          max_tokens?: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
