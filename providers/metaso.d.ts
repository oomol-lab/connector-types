import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one non-streaming Metaso chat completion grounded by the requested Metaso scope. */
    "metaso.create_chat_completion": {
      input: {
        /** The Metaso search scope. */
        scope?: "webpage" | "document" | "paper" | "scholar" | "image" | "video" | "podcast";
        /** The Metaso chat model identifier. */
        model?: "fast" | "fast_thinking" | "ds-r1";
        /** Whether to request concise snippets in grounding results. */
        conciseSnippet?: boolean;
        /**
         * The ordered chat messages.
         * @minItems 1
         */
        messages?: Array<{
          /** The message author role. */
          role: "system" | "user" | "assistant";
          /** The plain-text message content. */
          content: string;
        }>;
        /** A convenience single user message that is converted into messages. */
        message?: string;
        /** Whether to request a streaming response. This action only accepts false. */
        stream?: boolean;
      };
      output: {
        /** The chat completion identifier. */
        id: string;
        /** The object type returned by Metaso. */
        object: string;
        /** The Unix timestamp when the response was created. */
        created: number;
        /** The model identifier used for the response. */
        model?: string;
        /** The completion choices. */
        choices: Array<{
          /** The choice index. */
          index: number;
          /** The final assistant message. */
          message?: {
            /** The assistant role returned by Metaso. */
            role?: string;
            /** The assistant message content. */
            content?: string;
            /** The citations attached to the assistant message. */
            citations?: Array<Record<string, unknown>> | null;
            /** The highlights attached to the assistant message. */
            highlights?: Array<Record<string, unknown>> | null;
            /** The optional reasoning content returned by Metaso. */
            reasoning_content?: string | null;
            [key: string]: unknown;
          };
          /** The streamed delta payload. */
          delta?: Record<string, unknown> | null;
          /** The reason why generation stopped. */
          finish_reason?: string;
          /** The optional logprobs payload. */
          logprobs?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** The token usage and credit payload. */
        usage?: {
          /** The credit cost reported by Metaso. */
          credits?: number;
          /** The prompt token count. */
          prompt_tokens?: number;
          /** The completion token count. */
          completion_tokens?: number;
          /** The total token count. */
          total_tokens?: number;
          /** The prompt token details payload. */
          prompt_tokens_details?: Record<string, unknown> | null;
          [key: string]: unknown;
        };
        /** The optional result identifier. */
        result_id?: string | null;
        [key: string]: unknown;
      };
    };
    /** Consume a streamed Metaso chat completion and return the ordered chunks plus aggregated assistant content. */
    "metaso.create_chat_completion_stream": {
      input: {
        /** The Metaso search scope. */
        scope?: "webpage" | "document" | "paper" | "scholar" | "image" | "video" | "podcast";
        /** The Metaso chat model identifier. */
        model?: "fast" | "fast_thinking" | "ds-r1";
        /** Whether to request concise snippets in grounding results. */
        conciseSnippet?: boolean;
        /**
         * The ordered chat messages.
         * @minItems 1
         */
        messages?: Array<{
          /** The message author role. */
          role: "system" | "user" | "assistant";
          /** The plain-text message content. */
          content: string;
        }>;
        /** A convenience single user message that is converted into messages. */
        message?: string;
        /** Whether to request a streaming response. This action only accepts true. */
        stream?: boolean;
      };
      output: {
        /** The ordered stream chunks. */
        chunks: Array<{
          /** The chat completion identifier. */
          id: string;
          /** The object type returned by Metaso. */
          object: string;
          /** The Unix timestamp when the chunk was created. */
          created: number;
          /** The model identifier used for the response. */
          model?: string;
          /** The streamed completion choices. */
          choices: Array<{
            /** The choice index. */
            index: number;
            /** The final assistant message. */
            message?: {
              /** The assistant role returned by Metaso. */
              role?: string;
              /** The assistant message content. */
              content?: string;
              /** The citations attached to the assistant message. */
              citations?: Array<Record<string, unknown>> | null;
              /** The highlights attached to the assistant message. */
              highlights?: Array<Record<string, unknown>> | null;
              /** The optional reasoning content returned by Metaso. */
              reasoning_content?: string | null;
              [key: string]: unknown;
            };
            /** The streamed delta payload. */
            delta?: Record<string, unknown> | null;
            /** The reason why generation stopped. */
            finish_reason?: string;
            /** The optional logprobs payload. */
            logprobs?: Record<string, unknown> | null;
            [key: string]: unknown;
          }>;
          /** The incremental usage payload. */
          usage?: {
            /** The credit cost reported by Metaso. */
            credits?: number;
            /** The prompt token count. */
            prompt_tokens?: number;
            /** The completion token count. */
            completion_tokens?: number;
            /** The total token count. */
            total_tokens?: number;
            /** The prompt token details payload. */
            prompt_tokens_details?: Record<string, unknown> | null;
            [key: string]: unknown;
          };
          /** The optional result identifier. */
          result_id?: string | null;
          [key: string]: unknown;
        }>;
        /** The last chunk received from the stream. */
        finalChunk: {
          /** The chat completion identifier. */
          id: string;
          /** The object type returned by Metaso. */
          object: string;
          /** The Unix timestamp when the chunk was created. */
          created: number;
          /** The model identifier used for the response. */
          model?: string;
          /** The streamed completion choices. */
          choices: Array<{
            /** The choice index. */
            index: number;
            /** The final assistant message. */
            message?: {
              /** The assistant role returned by Metaso. */
              role?: string;
              /** The assistant message content. */
              content?: string;
              /** The citations attached to the assistant message. */
              citations?: Array<Record<string, unknown>> | null;
              /** The highlights attached to the assistant message. */
              highlights?: Array<Record<string, unknown>> | null;
              /** The optional reasoning content returned by Metaso. */
              reasoning_content?: string | null;
              [key: string]: unknown;
            };
            /** The streamed delta payload. */
            delta?: Record<string, unknown> | null;
            /** The reason why generation stopped. */
            finish_reason?: string;
            /** The optional logprobs payload. */
            logprobs?: Record<string, unknown> | null;
            [key: string]: unknown;
          }>;
          /** The incremental usage payload. */
          usage?: {
            /** The credit cost reported by Metaso. */
            credits?: number;
            /** The prompt token count. */
            prompt_tokens?: number;
            /** The completion token count. */
            completion_tokens?: number;
            /** The total token count. */
            total_tokens?: number;
            /** The prompt token details payload. */
            prompt_tokens_details?: Record<string, unknown> | null;
            [key: string]: unknown;
          };
          /** The optional result identifier. */
          result_id?: string | null;
          [key: string]: unknown;
        } | null;
        /** The concatenated assistant content from stream deltas. */
        combinedContent: string;
      };
    };
    /** Read one webpage with Metaso and return either the extracted markdown string or the structured JSON payload. */
    "metaso.read_webpage": {
      input: {
        /**
         * The webpage URL to read.
         * @format uri
         */
        url: string;
        /** The output format returned by the Metaso reader. */
        format: "markdown" | "json";
      };
      output: string | {
        /** The webpage title extracted by Metaso. */
        title: string;
        /** The source URL that was read. */
        url: string;
        /** The author name extracted by Metaso. */
        author: string;
        /** The published date extracted by Metaso. */
        date: string;
        /** The extracted markdown body. */
        markdown: string;
        /** The credit cost reported by Metaso. */
        credits: number;
        [key: string]: unknown;
      };
    };
    /** Search webpages, documents, papers, images, videos, or podcasts with the Metaso search API. */
    "metaso.search": {
      input: {
        /**
         * The search query.
         * @minLength 1
         */
        q: string;
        /** The Metaso search scope. */
        scope?: "webpage" | "document" | "paper" | "scholar" | "image" | "video" | "podcast";
        /** Whether Metaso should use webpage summaries to improve recall. */
        includeSummary?: boolean;
        /** Whether Metaso should fetch raw webpage content. */
        includeRawContent?: boolean;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        size?: number;
        /**
         * The one-based results page number to return.
         * @minimum 1
         */
        page?: number;
        /** Whether to return concise snippet matches. */
        conciseSnippet?: boolean;
      };
      output: {
        /** The credit cost reported by Metaso. */
        credits: number;
        /** The normalized search parameters. */
        searchParameters: Record<string, unknown>;
        /** The webpage results returned by Metaso. */
        webpages?: Array<{
          /** The result title. */
          title: string;
          /** The canonical result URL. */
          link: string;
          /** The relevance score label returned by Metaso. */
          score?: string;
          /** The snippet returned by Metaso. */
          snippet?: string;
          /** The one-based result position. */
          position?: number;
          /** The author list returned by Metaso. */
          authors?: Array<string>;
          /** The published date returned by Metaso. */
          date?: string;
          [key: string]: unknown;
        }>;
        /** The scholar results returned by Metaso. */
        scholars?: Array<{
          /** The result title. */
          title: string;
          /** The canonical result URL. */
          link: string;
          /** The relevance score label returned by Metaso. */
          score?: string;
          /** The snippet returned by Metaso. */
          snippet?: string;
          /** The one-based result position. */
          position?: number;
          /** The author list returned by Metaso. */
          authors?: Array<string>;
          /** The published date returned by Metaso. */
          date?: string;
          [key: string]: unknown;
        }>;
        /** The document results returned by Metaso. */
        documents?: Array<{
          /** The result title. */
          title: string;
          /** The canonical result URL. */
          link: string;
          /** The relevance score label returned by Metaso. */
          score?: string;
          /** The snippet returned by Metaso. */
          snippet?: string;
          /** The one-based result position. */
          position?: number;
          /** The author list returned by Metaso. */
          authors?: Array<string>;
          /** The published date returned by Metaso. */
          date?: string;
          [key: string]: unknown;
        }>;
        /** A list of JSON objects returned by Metaso. */
        images?: Array<Record<string, unknown>>;
        /** A list of JSON objects returned by Metaso. */
        videos?: Array<Record<string, unknown>>;
        /** A list of JSON objects returned by Metaso. */
        podcasts?: Array<Record<string, unknown>>;
        /** The total number of matched results. */
        total?: number;
        [key: string]: unknown;
      };
    };
  }
}
