import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create vector embeddings for text or multimodal inputs with Jina AI. */
    "jina_ai.create_embeddings": {
      input: {
        /** The Jina AI embedding model identifier. */
        model: string;
        /**
         * The texts or multimodal inputs to embed.
         * @minItems 1
         */
        input: Array<string | Record<string, unknown>>;
        /** The encoding format for returned embeddings. */
        encoding_format?: string;
        /** The requested embedding dimensionality. */
        dimensions?: number;
        /** Whether returned embeddings should be normalized. */
        normalized?: boolean;
      };
      output: Record<string, unknown>;
    };
    /** Rank documents by relevance to a query with Jina AI. */
    "jina_ai.rerank_documents": {
      input: {
        /** The Jina AI reranker model identifier. */
        model: string;
        /** The query used to rank documents. */
        query: string;
        /**
         * The documents to rank.
         * @minItems 1
         */
        documents: Array<string>;
        /** The maximum number of results to return. */
        top_n?: number;
        /** Whether to include document text in each result. */
        return_documents?: boolean;
      };
      output: Record<string, unknown>;
    };
  }
}
