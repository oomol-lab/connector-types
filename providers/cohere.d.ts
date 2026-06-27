import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a synchronous text response using the Cohere Chat API. */
    "cohere.chat": {
      input: {
        /** The name of a compatible Cohere chat model. */
        model: string;
        /**
         * The ordered conversation messages to send to Cohere.
         * @minItems 1
         */
        messages: Array<{
          /** The author role for the message. */
          role: "system" | "user" | "assistant" | "tool";
          /** The content of a Cohere chat message. */
          content?: string | Array<{
            /** The content block type, such as text or image_url. */
            type: string;
            [key: string]: unknown;
          }>;
          /** Tool calls made by the assistant message. */
          tool_calls?: Array<Record<string, unknown>>;
          /** The identifier of the tool call this tool message responds to. */
          tool_call_id?: string;
        }>;
        /** Function tools available to the model. */
        tools?: Array<Record<string, unknown>>;
        /** Whether tool calls must strictly follow the tool definition. */
        strict_tools?: boolean;
        /** Documents that the model can cite while generating the response. */
        documents?: Array<string | Record<string, unknown>>;
        /** A JSON object accepted or returned by the Cohere API. */
        citation_options?: Record<string, unknown>;
        /** A JSON object accepted or returned by the Cohere API. */
        response_format?: Record<string, unknown>;
        /** The Cohere safety mode to use for the request. */
        safety_mode?: string;
        /** The maximum number of output tokens the model will generate. */
        max_tokens?: number;
        /**
         * Stop sequences that halt generation.
         * @maxItems 5
         */
        stop_sequences?: Array<string>;
        /** Randomness used for generation. */
        temperature?: number;
        /** A best-effort deterministic sampling seed. */
        seed?: number;
        /** Penalty used to reduce repeated tokens. */
        frequency_penalty?: number;
        /** Penalty used to reduce reused token content. */
        presence_penalty?: number;
        /** Top-k sampling value. Use 0 to disable k-sampling. */
        k?: number;
        /** Top-p sampling value. */
        p?: number;
        /** Whether to include generated-token log probabilities. */
        logprobs?: boolean;
        /** Tool selection behavior for the model. */
        tool_choice?: string | Record<string, unknown>;
        /** A JSON object accepted or returned by the Cohere API. */
        thinking?: Record<string, unknown>;
        /** Lower values are handled earlier by Cohere. */
        priority?: number;
        /** Must be false or omitted. Cohere SSE streaming is not supported by this connector action. */
        stream?: false;
      };
      output: {
        /** The unique Cohere response identifier. */
        id: string;
        /** Why generation finished. */
        finish_reason: string;
        /** The assistant message returned by Cohere. */
        message: {
          /** The role of the returned message. */
          role?: string;
          /** Content blocks returned by the assistant message. */
          content?: Array<Record<string, unknown>>;
          /** Tool calls returned by Cohere. */
          tool_calls?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        /** Usage statistics returned by Cohere. */
        usage: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Generate embeddings for text inputs using the Cohere Embed API. */
    "cohere.embed_texts": {
      input: {
        /** The Cohere embedding model identifier. */
        model: string;
        /** The type of input passed to the embedding model. */
        input_type: "search_document" | "search_query" | "classification" | "clustering";
        /**
         * Text strings for the model to embed.
         * @minItems 1
         * @maxItems 96
         */
        texts: Array<string>;
        /** The maximum number of tokens to embed per input. */
        max_tokens?: number;
        /** The number of dimensions for embed-v4 and newer models. */
        output_dimension?: number;
        /**
         * Embedding representations to return.
         * @minItems 1
         */
        embedding_types?: Array<"float" | "int8" | "uint8" | "binary" | "ubinary" | "base64">;
        /** How Cohere handles inputs longer than the model limit. */
        truncate?: "NONE" | "START" | "END";
        /** Lower values are handled earlier by Cohere. */
        priority?: number;
      };
      output: {
        /** The unique Cohere response identifier. */
        id: string;
        /** Embeddings grouped by requested representation type. */
        embeddings: Record<string, unknown>;
        /** Text inputs echoed by Cohere. */
        texts: Array<string>;
        /** Cohere API metadata including usage and billing details. */
        meta: {
          /** The Cohere API version metadata. */
          api_version?: {
            /** The API version used for the response. */
            version?: string;
            /** Whether this API version is deprecated. */
            is_deprecated?: boolean;
            /** Whether this API version is experimental. */
            is_experimental?: boolean;
            [key: string]: unknown;
          };
          /** Billing unit counts reported by Cohere. */
          billed_units?: Record<string, unknown>;
          /** Token usage counts reported by Cohere. */
          tokens?: Record<string, unknown>;
          /** Warnings returned by Cohere. */
          warnings?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Rank text documents by relevance to a query using the Cohere Rerank API. */
    "cohere.rerank_documents": {
      input: {
        /** The Cohere rerank model identifier. */
        model: string;
        /** The search query used to rank documents. */
        query: string;
        /**
         * Texts that will be compared to the query.
         * @minItems 1
         */
        documents: Array<string>;
        /** Maximum number of rerank results to return. */
        top_n?: number;
        /** Maximum tokens to keep per document before ranking. */
        max_tokens_per_doc?: number;
        /** Lower values are handled earlier by Cohere. */
        priority?: number;
      };
      output: {
        /** The unique Cohere response identifier. */
        id: string;
        /** Ranked document results. */
        results: Array<{
          /** The original zero-based index of the ranked document. */
          index: number;
          /** Normalized relevance score between 0 and 1. */
          relevance_score: number;
        }>;
        /** Cohere API metadata including usage and billing details. */
        meta: {
          /** The Cohere API version metadata. */
          api_version?: {
            /** The API version used for the response. */
            version?: string;
            /** Whether this API version is deprecated. */
            is_deprecated?: boolean;
            /** Whether this API version is experimental. */
            is_experimental?: boolean;
            [key: string]: unknown;
          };
          /** Billing unit counts reported by Cohere. */
          billed_units?: Record<string, unknown>;
          /** Token usage counts reported by Cohere. */
          tokens?: Record<string, unknown>;
          /** Warnings returned by Cohere. */
          warnings?: Array<string>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
