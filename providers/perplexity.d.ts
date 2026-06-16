import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Perplexity Sonar chat completion grounded by web search when enabled. */
    "perplexity.create_chat_completion": {
      input: {
        /** The Sonar model to use for the chat completion. */
        model: string;
        /**
         * The ordered conversation messages.
         * @minItems 1
         */
        messages: Array<{
          /** The role of the message author. */
          role: "system" | "user" | "assistant";
          /** The plain-text message content. */
          content: string;
        }>;
        /**
         * The maximum number of tokens to generate.
         * @minimum 1
         */
        max_tokens?: number;
        /**
         * The sampling temperature for generation.
         * @minimum 0
         * @maximum 2
         */
        temperature?: number;
        /**
         * The nucleus sampling threshold.
         * @minimum 0
         * @maximum 1
         */
        top_p?: number;
        /**
         * The number of top tokens to consider per step.
         * @minimum 0
         */
        top_k?: number;
        /** Whether to stream the response. This connector only accepts false or an omitted value. */
        stream?: boolean;
        /** Whether to include image references in the response. */
        return_images?: boolean;
        /** Whether to include citations in the response. */
        return_citations?: boolean;
        /** Whether to disable web search grounding for this request. */
        disable_search?: boolean;
        /** Only search within these domains or URL prefixes. */
        search_domain_filter?: Array<string>;
        /** A recency filter such as day, week, month, or year. */
        search_recency_filter?: string;
        /**
         * The penalty applied to tokens that have already appeared.
         * @minimum -2
         * @maximum 2
         */
        presence_penalty?: number;
        /**
         * The penalty applied based on token frequency.
         * @minimum 0
         * @maximum 2
         */
        frequency_penalty?: number;
      };
      output: {
        /** The completion identifier. */
        id?: string;
        /** The model that generated the completion. */
        model?: string;
        /** The Unix timestamp when the completion was created. */
        created?: number;
        /** The completion choices. */
        choices: Array<{
          /** The choice index. */
          index: number;
          /** The reason why generation stopped. */
          finish_reason?: string;
          /** The generated message. */
          message: {
            /** The role of the generated message. */
            role: string;
            /** The generated message content. */
            content?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The citation URLs referenced by the answer. */
        citations?: Array<string>;
        /** The search results used to ground the response. */
        search_results?: Array<{
          /** The search result title. */
          title?: string;
          /** The canonical URL of the result. */
          url?: string;
          /** A short snippet extracted from the result page. */
          snippet?: string;
          /** The published date reported for the result. */
          date?: string;
          /** The last updated date reported for the result. */
          last_updated?: string;
          [key: string]: unknown;
        }>;
        /** Usage information for the completion. */
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
    /** Generate vector embeddings for one or more input strings with Perplexity. */
    "perplexity.create_embeddings": {
      input: {
        /** The embedding model identifier. */
        model: "pplx-embed-v1-0.6b" | "pplx-embed-v1-4b";
        /** One or more input strings to embed. */
        input: string | Array<string>;
        /** The target embedding dimension count. */
        dimensions?: number;
        /** The output encoding format for embeddings. */
        encoding_format?: "base64_int8" | "base64_binary";
      };
      output: {
        /** The top-level object type. */
        object?: string;
        /** The embedding model that generated the output. */
        model?: string;
        /** The generated embeddings. */
        data: Array<{
          /** The object type for the embedding item. */
          object?: string;
          /** The zero-based embedding index. */
          index?: number;
          /** The embedding payload. */
          embedding: Array<number> | string;
          [key: string]: unknown;
        }>;
        /** Usage information for the embeddings request. */
        usage?: {
          /** The number of prompt tokens consumed. */
          prompt_tokens?: number;
          /** The total number of tokens consumed. */
          total_tokens?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List the models currently available from Perplexity. */
    "perplexity.list_models": {
      input: Record<string, never>;
      output: {
        /** The top-level object type. */
        object?: string;
        /** The list of available models. */
        data: Array<{
          /** The model identifier. */
          id: string;
          /** The object type returned by the API. */
          object?: string;
          /** The Unix timestamp when the model metadata was created. */
          created?: number;
          /** The organization or owner that provides the model. */
          owned_by?: string;
          /** The model family or type. */
          type?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Search the web and return ranked raw results from Perplexity without LLM synthesis. */
    "perplexity.search": {
      input: {
        /** One or more raw web search queries. */
        query: string | Array<string>;
        /**
         * The ISO 3166-1 alpha-2 country code used to localize search results.
         * @minLength 2
         * @maxLength 2
         */
        country?: string;
        /**
         * The maximum number of search results to return.
         * @minimum 1
         * @maximum 20
         */
        max_results?: number;
        /** Only return content published after this date, for example 01/15/2024. */
        search_after_date?: string;
        /** Only return content published before this date, for example 12/31/2024. */
        search_before_date?: string;
        /**
         * The maximum number of tokens to retrieve from each webpage.
         * @minimum 1
         */
        max_tokens_per_page?: number;
        /**
         * Only return search results from these domains or URL prefixes.
         * @maxItems 20
         */
        search_domain_filter?: Array<string>;
      };
      output: {
        /** The ranked raw search results. */
        results: Array<{
          /** The search result title. */
          title?: string;
          /** The canonical URL of the result. */
          url?: string;
          /** A short snippet extracted from the result page. */
          snippet?: string;
          /** The published date reported for the result. */
          date?: string;
          /** The last updated date reported for the result. */
          last_updated?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
