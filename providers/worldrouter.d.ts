import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a billed, non-streaming chat completion on WorldRouter. */
    "worldrouter.create_chat_completion": {
      input: {
        /**
         * Model ID from the model list.
         * @minLength 1
         */
        model: string;
        /**
         * Conversation messages in order.
         * @minItems 1
         */
        messages: Array<Record<string, unknown>>;
        /**
         * Sampling temperature, when supported by the model.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * Maximum output token count, when supported by the model.
         * @exclusiveMinimum 0
         */
        max_tokens?: number;
        /**
         * Nucleus sampling probability, when supported by the model.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** OpenAI-format tool definitions. */
        tools?: Array<Record<string, unknown>>;
        /** Tool selection policy. */
        tool_choice?: string | Record<string, unknown>;
        /** Model-supported response format configuration. */
        response_format?: Record<string, unknown>;
        /** Sequences that stop generation. */
        stop?: string | Array<string>;
        /** Sampling seed, when supported by the model. */
        seed?: number;
        /** Only false or omitted is supported. */
        stream?: false;
        [key: string]: unknown;
      };
      output: {
        /** Completion identifier. */
        id: string;
        /** Model that served the request. */
        model?: string;
        /** Completion choices. */
        choices: Array<Record<string, unknown>>;
        /** Token usage for the completion. */
        usage?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the models available to the connected WorldRouter API key. */
    "worldrouter.list_models": {
      input: Record<string, never>;
      output: {
        /** Model entries. */
        data: Array<{
          /**
           * Model ID.
           * @minLength 1
           */
          id: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
