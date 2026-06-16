import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Langbase memory with the official Memory Create API and return the normalized created memory summary. */
    "langbase.create_memory": {
      input: {
        /**
         * The memory name.
         * @minLength 1
         */
        name: string;
        /** A short description of the memory. */
        description?: string;
        /** The embedding model to use for the memory. */
        embedding_model?: "openai:text-embedding-3-large" | "cohere:embed-v4.0" | "cohere:embed-multilingual-v3.0" | "cohere:embed-multilingual-light-v3.0" | "google:text-embedding-004";
        /**
         * The maximum number of characters in a chunk.
         * @maximum 30000
         */
        chunk_size?: number;
        /**
         * The number of overlapping characters between adjacent chunks.
         * @minimum 0
         */
        chunk_overlap?: number;
        /**
         * The default number of chunks to return during retrieval.
         * @minimum 1
         * @maximum 100
         */
        top_k?: number;
      };
      output: {
        /** A Langbase memory summary. */
        memory: {
          /** The memory name. */
          name: string;
          /** The memory description. */
          description: string;
          /** The login of the memory owner. */
          ownerLogin: string;
          /**
           * The Langbase Studio URL for the memory.
           * @format uri
           */
          url: string;
          /** The configured chunk size for this memory. */
          chunkSize?: number;
          /** The configured chunk overlap for this memory. */
          chunkOverlap?: number;
          /** The embedding model configured for this memory. */
          embeddingModel?: "openai:text-embedding-3-large" | "cohere:embed-v4.0" | "cohere:embed-multilingual-v3.0" | "cohere:embed-multilingual-light-v3.0" | "google:text-embedding-004";
        };
      };
    };
    /** Delete an existing Langbase memory by name and return whether the delete request succeeded. */
    "langbase.delete_memory": {
      input: {
        /**
         * The Langbase memory name to delete.
         * @minLength 1
         */
        memoryName: string;
      };
      output: {
        /** Whether Langbase deleted the memory successfully. */
        success: boolean;
      };
    };
    /** List Langbase memories available to the connected User or Org API key and return stable memory summaries. */
    "langbase.list_memories": {
      input: Record<string, never>;
      output: {
        /** The Langbase memories returned by the API. */
        memories: Array<{
          /** The memory name. */
          name: string;
          /** The memory description. */
          description: string;
          /** The login of the memory owner. */
          ownerLogin: string;
          /**
           * The Langbase Studio URL for the memory.
           * @format uri
           */
          url: string;
          /** The configured chunk size for this memory. */
          chunkSize?: number;
          /** The configured chunk overlap for this memory. */
          chunkOverlap?: number;
          /** The embedding model configured for this memory. */
          embeddingModel?: "openai:text-embedding-3-large" | "cohere:embed-v4.0" | "cohere:embed-multilingual-v3.0" | "cohere:embed-multilingual-light-v3.0" | "google:text-embedding-004";
        }>;
      };
    };
    /** Retrieve similar chunks from one or more Langbase memories with the official Memory Retrieve API. */
    "langbase.retrieve_memory": {
      input: {
        /**
         * The search query used to retrieve similar chunks.
         * @minLength 1
         */
        query: string;
        /**
         * The Langbase memories to search.
         * @minItems 1
         */
        memory: Array<{
          /**
           * The name of the memory to search.
           * @minLength 1
           */
          name: string;
          /** Optional Langbase memory filters forwarded as-is, such as ["field", "Eq", "value"] or nested ["And"|"Or", ...] filter trees. */
          filters?: unknown;
        }>;
        /**
         * The number of top chunks to return.
         * @minimum 1
         * @maximum 100
         */
        topK?: number;
      };
      output: {
        /** The retrieved Langbase memory matches. */
        matches: Array<{
          /** The retrieved text segment. */
          text: string;
          /** The similarity score returned by Langbase. */
          similarity: number;
          /** Additional metadata returned for the retrieved chunk. */
          meta: Record<string, string>;
        }>;
      };
    };
  }
}
