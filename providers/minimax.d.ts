import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a non-streaming MiniMax response using the OpenAI Responses API shape. */
    "minimax.create_response": {
      input: {
        /**
         * MiniMax model name to invoke, for example MiniMax-M3.
         * @minLength 1
         */
        model: string;
        /** MiniMax Responses API text or conversation input. */
        input: string | Array<{
          /** Message item type. Omit it or set it to message. */
          type?: "message";
          /** Message role. */
          role: "user" | "assistant" | "system" | "developer" | "tool";
          /**
           * Text content for the message.
           * @minLength 1
           */
          content: string;
        } | {
          /** Function call item type. */
          type: "function_call";
          /**
           * Tool call identifier.
           * @minLength 1
           */
          call_id: string;
          /**
           * Function name.
           * @minLength 1
           */
          name: string;
          /**
           * Function arguments encoded as a JSON string.
           * @minLength 1
           */
          arguments: string;
        } | {
          /** Function call output item type. */
          type: "function_call_output";
          /**
           * Tool call identifier.
           * @minLength 1
           */
          call_id: string;
          /**
           * Tool output text.
           * @minLength 1
           */
          output: string;
        } | {
          /** Reasoning input item type. */
          type: "reasoning";
          /**
           * Reasoning summary items to include in conversation history.
           * @minItems 1
           */
          summary: Array<{
            /** Reasoning summary item type. */
            type: "summary_text";
            /**
             * Reasoning summary text.
             * @minLength 1
             */
            text: string;
          }>;
        }>;
        /** System instructions for the response. */
        instructions?: string;
        /**
         * Maximum output token count.
         * @minimum 1
         */
        max_output_tokens?: number;
        /**
         * Sampling temperature in the official range [0, 1].
         * @minimum 0
         * @maximum 1
         */
        temperature?: number;
        /**
         * Nucleus sampling value in the official range [0, 1].
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /** MiniMax service tier for request admission. */
        service_tier?: "standard" | "priority";
        /**
         * Function tools available to MiniMax.
         * @minItems 1
         */
        tools?: Array<{
          /** Tool type. MiniMax currently supports function tools. */
          type: "function";
          /**
           * Function tool name.
           * @minLength 1
           */
          name: string;
          /** Human-readable function tool description. */
          description?: string;
          /** JSON Schema parameters for the function tool. */
          parameters?: Record<string, unknown>;
        }>;
        /** Tool selection strategy. */
        tool_choice?: "none" | "auto";
        /** String metadata to attach to the MiniMax request. */
        metadata?: Record<string, string>;
        /** Prompt cache routing identifier. */
        prompt_cache_key?: string;
        /** Set to false for the non-streaming connector action. */
        stream?: false;
        /** MiniMax output text format control. */
        text?: {
          /** MiniMax response text format. */
          format?: {
            /** Plain text output format. */
            type?: "text";
          };
        };
        /** MiniMax reasoning control. MiniMax-M3 defaults to none when omitted. */
        reasoning?: {
          /** Reasoning effort value. */
          effort?: "minimal" | "low" | "medium" | "high" | "none";
        };
      };
      output: {
        /** MiniMax response identifier. */
        id: string;
        /** Object type returned by MiniMax, usually response. */
        object: string;
        /** Response creation time as Unix seconds. */
        created_at: number;
        /** MiniMax model that processed the request. */
        model: string;
        /** MiniMax response status. */
        status: "completed" | "incomplete" | "failed";
        /** MiniMax response output items. */
        output: Array<Record<string, unknown>>;
        /** Concatenated response text returned by MiniMax. */
        output_text?: string | null;
        /** MiniMax usage object with token counts and details. */
        usage?: Record<string, unknown>;
        /** MiniMax response error object. */
        error?: {
          /** MiniMax error code. */
          code?: string;
          /** Human-readable MiniMax error message. */
          message?: string;
          [key: string]: unknown;
        } | null;
        /** MiniMax incomplete response details. */
        incomplete_details?: {
          /** Reason MiniMax marked the response incomplete. */
          reason?: string;
          [key: string]: unknown;
        } | null;
        /** Whether MiniMax can run tool calls in parallel. */
        parallel_tool_calls?: boolean;
        /** Whether MiniMax stored the response. */
        store?: boolean;
        /** MiniMax truncation mode used for the response. */
        truncation?: string;
        [key: string]: unknown;
      };
    };
    /** Estimate MiniMax response input tokens without invoking the model. */
    "minimax.estimate_input_tokens": {
      input: {
        /**
         * MiniMax model name to estimate against, for example MiniMax-M3.
         * @minLength 1
         */
        model: string;
        /** MiniMax Responses API text or conversation input. */
        input: string | Array<{
          /** Message item type. Omit it or set it to message. */
          type?: "message";
          /** Message role. */
          role: "user" | "assistant" | "system" | "developer" | "tool";
          /**
           * Text content for the message.
           * @minLength 1
           */
          content: string;
        } | {
          /** Function call item type. */
          type: "function_call";
          /**
           * Tool call identifier.
           * @minLength 1
           */
          call_id: string;
          /**
           * Function name.
           * @minLength 1
           */
          name: string;
          /**
           * Function arguments encoded as a JSON string.
           * @minLength 1
           */
          arguments: string;
        } | {
          /** Function call output item type. */
          type: "function_call_output";
          /**
           * Tool call identifier.
           * @minLength 1
           */
          call_id: string;
          /**
           * Tool output text.
           * @minLength 1
           */
          output: string;
        } | {
          /** Reasoning input item type. */
          type: "reasoning";
          /**
           * Reasoning summary items to include in conversation history.
           * @minItems 1
           */
          summary: Array<{
            /** Reasoning summary item type. */
            type: "summary_text";
            /**
             * Reasoning summary text.
             * @minLength 1
             */
            text: string;
          }>;
        }>;
        /** System instructions included in the estimate. */
        instructions?: string;
        /**
         * Function tools included in the estimate.
         * @minItems 1
         */
        tools?: Array<{
          /** Tool type. MiniMax currently supports function tools. */
          type: "function";
          /**
           * Function tool name.
           * @minLength 1
           */
          name: string;
          /** Human-readable function tool description. */
          description?: string;
          /** JSON Schema parameters for the function tool. */
          parameters?: Record<string, unknown>;
        }>;
        /** Tool selection strategy. */
        tool_choice?: "none" | "auto";
        /** MiniMax output text format control. */
        text?: {
          /** MiniMax response text format. */
          format?: {
            /** Plain text output format. */
            type?: "text";
          };
        };
        /** MiniMax reasoning control. MiniMax-M3 defaults to none when omitted. */
        reasoning?: {
          /** Reasoning effort value. */
          effort?: "minimal" | "low" | "medium" | "high" | "none";
        };
      };
      output: {
        /** Object type returned by MiniMax, usually response.input_tokens. */
        object: string;
        /** Estimated input token count. */
        input_tokens: number;
        [key: string]: unknown;
      };
    };
    /** List OpenAI-compatible MiniMax models available to the API key. */
    "minimax.list_models": {
      input: Record<string, never>;
      output: {
        /** Object type returned by MiniMax, usually list. */
        object: string;
        /** MiniMax models returned by the API. */
        data: Array<{
          /** MiniMax model identifier. */
          id: string;
          /** Object type returned by MiniMax, usually model. */
          object?: string;
          /** Unix timestamp when MiniMax created the model. */
          created?: number;
          /** Organization that owns the model. */
          owned_by?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Retrieve OpenAI-compatible metadata for one MiniMax model. */
    "minimax.retrieve_model": {
      input: {
        /**
         * MiniMax model identifier to retrieve.
         * @minLength 1
         */
        modelId: string;
      };
      output: {
        /** MiniMax model identifier. */
        id: string;
        /** Object type returned by MiniMax, usually model. */
        object?: string;
        /** Unix timestamp when MiniMax created the model. */
        created?: number;
        /** Organization that owns the model. */
        owned_by?: string;
        [key: string]: unknown;
      };
    };
  }
}
