import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a non-streaming Writer chat completion from plain-text conversation messages. */
    "writer.create_chat_completion": {
      input: {
        /**
         * The Writer model identifier to use for the chat completion.
         * @minLength 1
         */
        model: string;
        /**
         * The ordered plain-text conversation messages.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the chat message author. */
          role: "user" | "assistant" | "system";
          /** The plain-text content of the message. */
          content: string;
          /** An optional name for the message sender. */
          name?: string;
        }>;
        /**
         * The maximum number of tokens to generate.
         * @exclusiveMinimum 0
         */
        max_tokens?: number;
        /** The sampling temperature for generation. */
        temperature?: number;
        /** The nucleus sampling threshold. */
        top_p?: number;
        /**
         * The number of completions to generate for the prompt.
         * @exclusiveMinimum 0
         */
        n?: number;
        /** One or more stop sequences that end generation. */
        stop?: string | Array<string>;
        /** Whether to return log probabilities for output tokens. */
        logprobs?: boolean;
        /** Whether to stream the response. Connector actions only accept false or an omitted value. */
        stream?: boolean;
        /** The requested response format for the chat completion. */
        response_format?: {
          /** The response format type. */
          type: "text" | "json_schema";
          /** The JSON Schema object used when type is json_schema. */
          json_schema?: Record<string, unknown>;
        };
      };
      output: {
        /** The Writer chat completion identifier. */
        id: string;
        /** The object type returned by Writer. */
        object: string;
        /**
         * The generated completion choices.
         * @minItems 1
         */
        choices: Array<{
          /** The index of the completion choice. */
          index: number;
          /** The reason why Writer stopped generating this choice. */
          finish_reason: string;
          /** The Writer assistant message. */
          message: {
            /** The role associated with the generated message. */
            role?: string;
            /** The generated text content. */
            content?: string | null;
            /** The refusal text when content was refused. */
            refusal?: string | null;
            /** Tool calls returned by Writer when tool calling is used through the API. */
            tool_calls?: Array<Record<string, unknown>>;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The Unix timestamp when the response was created. */
        created: number;
        /** The Writer model that generated the response. */
        model: string;
        /** Token usage metadata for the Writer chat completion. */
        usage?: {
          /** The number of prompt tokens consumed. */
          prompt_tokens?: number;
          /** The number of completion tokens generated. */
          completion_tokens?: number;
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        /** The Writer system fingerprint for the response. */
        system_fingerprint?: string;
        /** The Writer service tier used for the response. */
        service_tier?: string;
        [key: string]: unknown;
      };
    };
    /** Retrieve the Writer models available for text generation, chat completions, and other AI tasks. */
    "writer.list_models": {
      input: Record<string, never>;
      output: {
        /** The Writer models available to the API key. */
        models: Array<{
          /** The Writer model identifier. */
          id: string;
          /** The display name of the Writer model. */
          name: string;
        }>;
      };
    };
  }
}
