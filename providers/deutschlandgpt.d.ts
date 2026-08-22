import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a synchronous text chat completion through DeutschlandGPT. */
    "deutschlandgpt.create_chat_completion": {
      input: {
        /**
         * The model ID returned by list_models.
         * @minLength 1
         */
        model: string;
        /**
         * The ordered text conversation sent to the model.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant" | "tool" | "developer";
          /** The text content of the message. */
          content?: string | null;
          /** An optional participant name. */
          name?: string;
          /**
           * The tool call identifier answered by a tool message.
           * @minLength 1
           */
          tool_call_id?: string;
          /**
           * Function calls requested by an assistant message.
           * @minItems 1
           */
          tool_calls?: Array<{
            /**
             * The identifier used by the corresponding tool response.
             * @minLength 1
             */
            id: string;
            /** The tool-call type. Must be function. */
            type: "function";
            /** The requested function and its serialized arguments. */
            function: {
              /**
               * The function name.
               * @minLength 1
               */
              name: string;
              /** The function arguments serialized as a JSON string. */
              arguments: string;
            };
          }>;
        }>;
        /**
         * The maximum number of generated tokens, including reasoning tokens.
         * @minimum 1
         */
        max_completion_tokens?: number;
        /**
         * The sampling temperature between 0 and 2.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /** Whether to stream the response. Connector actions only accept false or an omitted value. */
        stream?: boolean;
        /** Functions available to the model. */
        tools?: Array<{
          /** The tool type. Must be function. */
          type: "function";
          /** The function definition. */
          function: {
            /**
             * The function name.
             * @minLength 1
             */
            name: string;
            /** A description that helps the model decide when to call the function. */
            description?: string;
            /** A JSON Schema describing the function arguments. */
            parameters?: Record<string, unknown>;
          };
        }>;
        /** Whether the model may call multiple tools in one turn. */
        parallel_tool_calls?: boolean;
        /** The reasoning budget for supported models. */
        reasoning_effort?: "none" | "minimal" | "low" | "medium" | "high" | "xhigh";
        /** The requested response format. */
        response_format?: {
          /** The response format type. */
          type: "text" | "json_object" | "json_schema";
          [key: string]: unknown;
        };
      };
      output: {
        /** The unique completion identifier. */
        id: string;
        /** The upstream object type. */
        object: string;
        /** The Unix timestamp when the completion was created. */
        created: number;
        /** The model that generated the completion. */
        model: string;
        /** Generated completion choices. */
        choices: Array<Record<string, unknown>>;
        /** Token usage reported for the request. */
        usage: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create embedding vectors for one or more text inputs through DeutschlandGPT. */
    "deutschlandgpt.create_embeddings": {
      input: {
        /**
         * The embedding model identifier. Omit it to use the workspace default.
         * @minLength 1
         */
        model?: string;
        /** Text or a list of texts to embed. */
        input: string | Array<string>;
        /**
         * The requested embedding vector length when supported by the model.
         * @minimum 1
         */
        dimensions?: number;
        /** The representation used for embedding vectors. */
        encoding_format?: "float" | "base64";
        /** A task-type hint for optimizing Gemini embedding models, such as SEMANTIC_SIMILARITY. */
        task_type?: string;
      };
      output: {
        /** The top-level object type. */
        object: string;
        /** The embedding model used for the request. */
        model: string;
        /** Embedding vectors in input order. */
        data: Array<{
          /** The embedding object type. */
          object: string;
          /** The zero-based input index. */
          index: number;
          /** The embedding represented as floats or base64 text. */
          embedding: Array<number> | string;
          [key: string]: unknown;
        }>;
        /** Token usage reported for the request. */
        usage: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List text models enabled for the connected DeutschlandGPT workspace. */
    "deutschlandgpt.list_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type. */
        object: string;
        /** Models available to the API key. */
        data: Array<{
          /** The model identifier. */
          id: string;
          /** The upstream object type. */
          object: string;
          /** The provider or organization that owns the model. */
          owned_by: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
