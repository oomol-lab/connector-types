import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit raw text, a transcript, or a public URL for asynchronous memory extraction or managed RAG indexing. */
    "supermemory.add_document": {
      input: {
        /**
         * Raw text, a conversation transcript, or a public URL that Supermemory should process.
         * @minLength 1
         */
        content: string;
        /**
         * The user, project, or tenant container tag that scopes this operation.
         * @minLength 1
         * @maxLength 100
         */
        containerTag: string;
        /** How Supermemory should process the content. */
        taskType: "memory" | "superrag";
        /**
         * A stable caller-provided identifier used for idempotency and deletion.
         * @minLength 1
         * @maxLength 100
         */
        customId?: string;
        /** Flat metadata used to organize and filter Supermemory content. */
        metadata?: Record<string, string | number | boolean | Array<string>>;
        /**
         * Context that guides memory extraction for this container.
         * @maxLength 1500
         */
        entityContext?: string;
        /** Metadata filters for existing memories used as ingestion context. */
        filterByMetadata?: Record<string, string | number | boolean | Array<string>>;
        /** Whether to process immediately or group related documents dynamically. */
        dreaming?: "instant" | "dynamic";
      };
      output: {
        /** The document identifier used to poll processing status. */
        id: string;
        /** The initial document processing status. */
        status: string;
      };
    };
    /** Store one or more already-known facts directly as immediately searchable Supermemory memories. */
    "supermemory.create_memories": {
      input: {
        /**
         * The exact facts to store.
         * @minItems 1
         * @maxItems 100
         */
        memories: Array<{
          /**
           * The entity-centric memory text to store.
           * @minLength 1
           * @maxLength 10000
           */
          content: string;
          /** Whether this is a permanent trait such as a name, profession, or hometown. */
          isStatic?: boolean;
          /** Flat metadata used to organize and filter Supermemory content. */
          metadata?: Record<string, string | number | boolean | Array<string>>;
          /**
           * When Supermemory should automatically forget this memory.
           * @format date-time
           */
          forgetAfter?: string | null;
          /** Why this memory is scheduled to be forgotten. */
          forgetReason?: string | null;
          /** Dates that help Supermemory interpret when this memory is relevant. */
          temporalContext?: {
            /**
             * The date when the source document was authored.
             * @format date-time
             */
            documentDate?: string | null;
            /** Dates of events referenced by this memory. */
            eventDate?: Array<string> | null;
          };
        }>;
        /**
         * The user, project, or tenant container tag that scopes this operation.
         * @minLength 1
         * @maxLength 100
         */
        containerTag: string;
      };
      output: {
        /** The source document identifier created for these memories, if any. */
        documentId: string | null;
        /** The created memories. */
        memories: Array<{
          /** The memory identifier. */
          id: string;
          /** The stored memory text. */
          memory: string;
          /** Whether the memory represents a permanent trait. */
          isStatic: boolean;
          /** When the memory was created. */
          createdAt: string;
          /** When the memory will be forgotten, if set. */
          forgetAfter: string | null;
          /** Why the memory will be forgotten, if set. */
          forgetReason: string | null;
          /** Metadata attached to the memory. */
          metadata: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Permanently delete one source document by its Supermemory ID or caller-provided custom ID. */
    "supermemory.delete_document": {
      input: {
        /**
         * The Supermemory document ID or caller-provided custom ID.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The document ID or custom ID used for deletion. */
        id: string;
        /** Whether the document was successfully deleted. */
        deleted: boolean;
      };
    };
    /** Soft-delete one memory by ID so it is excluded from normal recall while remaining auditable. */
    "supermemory.forget_memory": {
      input: {
        /**
         * The identifier of the memory to forget.
         * @minLength 1
         */
        memoryId: string;
        /**
         * The user, project, or tenant container tag that scopes this operation.
         * @minLength 1
         * @maxLength 100
         */
        containerTag: string;
        /** Why this memory is being forgotten. */
        reason?: string;
      };
      output: {
        /** The forgotten memory identifier. */
        id: string;
        /** Whether the memory was successfully forgotten. */
        forgotten: boolean;
      };
    };
    /** Get a Supermemory document and its current processing status, including the final extracted content when available. */
    "supermemory.get_document": {
      input: {
        /**
         * The Supermemory document identifier.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The document identifier. */
        id: string;
        /** The current document processing status. */
        status: "unknown" | "queued" | "extracting" | "chunking" | "embedding" | "indexing" | "done" | "failed";
        /** The extracted document content. */
        content?: string | null;
        /** The caller-provided document ID. */
        customId?: string | null;
        /** The document title. */
        title?: string | null;
        /** A summary of the document. */
        summary?: string | null;
        /** The detected document type. */
        type?: string;
        /** The document processing task type. */
        taskType?: "memory" | "superrag";
        /** Metadata attached to the document. */
        metadata?: unknown;
        /** When the document was created. */
        createdAt?: string;
        /** When the document was last updated. */
        updatedAt?: string;
        /** The source URL, if present. */
        url?: string | null;
        [key: string]: unknown;
      };
    };
    /** Retrieve long-term, recent, and bucketed profile context for one user or tenant container. */
    "supermemory.get_profile": {
      input: {
        /**
         * The user, project, or tenant container tag that scopes this operation.
         * @minLength 1
         * @maxLength 100
         */
        containerTag: string;
        /**
         * A query used to include relevant search results.
         * @minLength 1
         */
        q?: string;
        /**
         * The minimum score for optional profile search results.
         * @minimum 0
         * @maximum 1
         */
        threshold?: number;
        /** An official Supermemory metadata filter expression. */
        filters?: Record<string, unknown>;
        /**
         * The profile sections to return.
         * @minItems 1
         */
        include?: Array<"static" | "dynamic" | "buckets">;
        /**
         * Specific profile bucket keys to return.
         * @minItems 1
         */
        buckets?: Array<string>;
      };
      output: {
        /** The static, dynamic, and bucketed profile information for a container. */
        profile: {
          /** Long-term profile facts. */
          static?: Array<string>;
          /** Recent profile context. */
          dynamic?: Array<string>;
          /** Profile facts grouped by configured bucket key. */
          buckets?: Record<string, Array<string>>;
        };
        /** Search results included when a profile query was supplied. */
        searchResults?: {
          /** The profile query results. */
          results: Array<unknown>;
          /** The total number of profile search results. */
          total: number;
          /** The profile search execution time in milliseconds. */
          timing: number;
        };
      };
    };
    /** Recall relevant memories, document chunks, or both for a question within one tenant container. */
    "supermemory.search": {
      input: {
        /**
         * The question or semantic search query.
         * @minLength 1
         */
        q: string;
        /**
         * The user, project, or tenant container tag that scopes this operation.
         * @minLength 1
         * @maxLength 100
         */
        containerTag: string;
        /**
         * Which Supermemory indexes should be searched.
         * @default "hybrid"
         */
        searchMode?: "memories" | "hybrid" | "documents";
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The minimum relevance sensitivity for returned results.
         * @minimum 0
         * @maximum 1
         */
        threshold?: number;
        /** Whether Supermemory should rerank the results. */
        rerank?: boolean;
        /** Whether Supermemory should synthesize information across matching memories. */
        aggregate?: boolean;
        /** Whether Supermemory should rewrite the query before retrieval. */
        rewriteQuery?: boolean;
        /** Optional related data to include with search results. */
        include?: {
          /** Whether to include associated document details. */
          documents?: boolean;
          /** Whether to include associated document summaries. */
          summaries?: boolean;
          /** Whether to include related memories. */
          relatedMemories?: boolean;
          /** Whether to include forgotten memories. */
          forgottenMemories?: boolean;
        };
        /** An official Supermemory metadata filter expression. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** The matching memories and document chunks. */
        results: Array<{
          /** The memory entry or chunk identifier. */
          id: string;
          /** The matching memory text for a memory result. */
          memory?: string;
          /** The matching content for a document chunk result. */
          chunk?: string;
          /** Metadata attached to the result. */
          metadata: Record<string, unknown> | null;
          /** When the result was last updated. */
          updatedAt: string;
          /**
           * The similarity score between the query and result.
           * @minimum 0
           * @maximum 1
           */
          similarity: number;
          [key: string]: unknown;
        }>;
        /** The search execution time in milliseconds. */
        timing: number;
        /** The total number of returned results. */
        total: number;
      };
    };
    /** Correct one memory by ID, creating a new version while preserving its prior version history. */
    "supermemory.update_memory": {
      input: {
        /**
         * The identifier of the memory to update.
         * @minLength 1
         */
        memoryId: string;
        /**
         * The user, project, or tenant container tag that scopes this operation.
         * @minLength 1
         * @maxLength 100
         */
        containerTag: string;
        /**
         * The replacement memory text.
         * @minLength 1
         */
        newContent: string;
        /** Flat metadata used to organize and filter Supermemory content. */
        metadata?: Record<string, string | number | boolean | Array<string>>;
        /**
         * When the updated memory should be forgotten, or null to clear its expiry.
         * @format date-time
         */
        forgetAfter?: string | null;
        /** Why the updated memory is scheduled to be forgotten. */
        forgetReason?: string | null;
        /** Dates that help Supermemory interpret when this memory is relevant. */
        temporalContext?: {
          /**
           * The date when the source document was authored.
           * @format date-time
           */
          documentDate?: string | null;
          /** Dates of events referenced by this memory. */
          eventDate?: Array<string> | null;
        };
      };
      output: {
        /** The identifier of the new memory version. */
        id: string;
        /** The updated memory text. */
        memory: string;
        /** The new memory version number. */
        version: number;
        /** The immediately preceding memory ID. */
        parentMemoryId: string | null;
        /** The first memory ID in this version chain. */
        rootMemoryId: string | null;
        /** When the new memory version was created. */
        createdAt: string;
        /** When this version will be forgotten. */
        forgetAfter: string | null;
        /** Why this version will be forgotten. */
        forgetReason: string | null;
        /** Metadata attached to this version. */
        metadata: Record<string, unknown> | null;
        [key: string]: unknown;
      };
    };
  }
}
