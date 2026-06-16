import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a non-streaming OpenAI-compatible chat completion with TextCortex. */
    "textcortex.create_chat_completion": {
      input: {
        /**
         * The model id returned by list_models.
         * @minLength 1
         */
        model: string;
        /**
         * The ordered chat messages to send to TextCortex.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the chat message author. */
          role: "system" | "user" | "assistant" | "tool";
          /** The message content as plain text, structured content parts, or null. */
          content?: string | Array<Record<string, unknown>> | null;
          /**
           * The optional participant name for the message.
           * @minLength 1
           */
          name?: string;
          /**
           * The tool call identifier this tool message responds to.
           * @minLength 1
           */
          toolCallId?: string;
          /** The assistant tool calls to include in the message. */
          toolCalls?: Array<Record<string, unknown>> | null;
        }>;
        /**
         * The sampling temperature.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number | null;
        /**
         * The nucleus sampling value.
         * @minimum 0
         * @maximum 1
         */
        topP?: number | null;
        /**
         * The maximum number of tokens to generate.
         * @minimum 1
         */
        maxTokens?: number | null;
        /**
         * The maximum number of completion tokens to generate.
         * @minimum 1
         */
        maxCompletionTokens?: number | null;
        /**
         * The presence penalty to apply.
         * @minimum -2
         * @maximum 2
         */
        presencePenalty?: number | null;
        /**
         * The frequency penalty to apply.
         * @minimum -2
         * @maximum 2
         */
        frequencyPenalty?: number | null;
        /** One or more stop sequences. */
        stop?: string | Array<string> | null;
        /**
         * The number of chat completion choices to generate.
         * @minimum 1
         */
        n?: number | null;
        /** Whether to request streaming. Connector actions only support false or null. */
        stream?: boolean | null;
        /** A JSON object passed through to or from TextCortex. */
        responseFormat?: Record<string, unknown> | null;
        /** The OpenAI-compatible tools available to the model. */
        tools?: Array<Record<string, unknown>> | null;
        /** The OpenAI-compatible tool selection policy. */
        toolChoice?: string | Record<string, unknown> | null;
        /** A stable end-user identifier for abuse monitoring. */
        user?: string | null;
        /** Additional OpenAI-compatible TextCortex request fields to merge into the request body. */
        extra?: Record<string, unknown> | null;
      };
      output: {
        /** The chat completion id returned by TextCortex. */
        id: string;
        /** The chat completion object type returned by TextCortex. */
        object: string;
        /** The Unix timestamp when the chat completion was created. */
        created: number;
        /** The model used for the chat completion. */
        model: string;
        /** The chat completion choices returned by TextCortex. */
        choices: Array<{
          /** The choice index returned by TextCortex. */
          index?: number | null;
          /** The reason TextCortex stopped generating this choice. */
          finishReason?: string | null;
          /** The chat message object returned by TextCortex. */
          message?: Record<string, unknown>;
          /** The raw choice object returned by TextCortex. */
          raw: Record<string, unknown>;
        }>;
        /** The token usage object returned by TextCortex. */
        usage: Record<string, unknown> | null;
        /** The raw chat completion response returned by TextCortex. */
        raw: Record<string, unknown>;
      };
    };
    /** List TextCortex models available to the API key. */
    "textcortex.list_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type returned by TextCortex. */
        object: string;
        /** The models returned by TextCortex. */
        models: Array<{
          /** The TextCortex model identifier. */
          id: string;
          /** The object type for a model record. */
          object: "model";
          /** The Unix timestamp for the model release date. */
          created: number;
          /** The organization that owns the model. */
          ownedBy: string;
          /** The raw model object returned by TextCortex. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** Retrieve metadata for one TextCortex model by model id. */
    "textcortex.retrieve_model": {
      input: {
        /**
         * The TextCortex model id to retrieve.
         * @minLength 1
         */
        modelId: string;
      };
      output: {
        /** A TextCortex model returned by the OpenAI-compatible API. */
        model: {
          /** The TextCortex model identifier. */
          id: string;
          /** The object type for a model record. */
          object: "model";
          /** The Unix timestamp for the model release date. */
          created: number;
          /** The organization that owns the model. */
          ownedBy: string;
          /** The raw model object returned by TextCortex. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
