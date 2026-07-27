import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a text namespace in Moorcheh for storing searchable documents. */
    "moorcheh.create_text_namespace": {
      input: {
        /**
         * The Moorcheh namespace name containing only letters, numbers, hyphens, or underscores.
         * @minLength 1
         */
        namespace_name: string;
      };
      output: {
        /** The operation status returned by Moorcheh. */
        status: string;
        /** The human-readable operation message returned by Moorcheh. */
        message: string;
        /** The created namespace name. */
        namespace_name: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete up to 1,000 documents from a Moorcheh text namespace. */
    "moorcheh.delete_documents": {
      input: {
        /**
         * The Moorcheh namespace name containing only letters, numbers, hyphens, or underscores.
         * @minLength 1
         */
        namespace_name: string;
        /**
         * Document identifiers to delete.
         * @minItems 1
         * @maxItems 1000
         */
        ids: Array<string>;
      };
      output: {
        /** The operation status returned by Moorcheh. */
        status: string;
        /** The human-readable operation message returned by Moorcheh. */
        message: string;
        /** The number of requested document deletions. */
        requested_deletions: number;
        /** The number of documents actually deleted. */
        actual_deletions: number;
        /** The number of items remaining in the namespace. */
        remaining_items: number;
        [key: string]: unknown;
      };
    };
    /** Fetch one cursor-paginated page of text chunks from a Moorcheh namespace. */
    "moorcheh.fetch_text_data": {
      input: {
        /**
         * The Moorcheh namespace name containing only letters, numbers, hyphens, or underscores.
         * @minLength 1
         */
        namespace_name: string;
        /**
         * The maximum number of items to return, up to 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The opaque cursor returned by the previous page.
         * @minLength 1
         */
        next_token?: string;
      };
      output: {
        /** The operation status returned by Moorcheh. */
        status: string;
        /** The human-readable operation message returned by Moorcheh. */
        message: string;
        /** The requested namespace name. */
        namespace: string;
        /** Statistics for the returned page. */
        statistics: Record<string, unknown>;
        /** The text and summary chunks in this page. */
        items: Array<{
          /** The chunk identifier. */
          id: string;
          /** The chunk text. */
          text: string;
          /** Arbitrary metadata associated with a Moorcheh document. */
          metadata: Record<string, unknown>;
          /** The normalized chunk creation timestamp. */
          created_at: string | null;
          /** Whether the item is a generated summary chunk. */
          is_summary: boolean;
          [key: string]: unknown;
        }>;
        /** Cursor pagination metadata for this page. */
        pagination: {
          /** The page size used by Moorcheh. */
          limit: number;
          /** Whether another page is available. */
          has_more: boolean;
          /** The opaque cursor for the next page. */
          next_token: string | null;
          [key: string]: unknown;
        };
        /** The request processing time in seconds. */
        execution_time: number;
        [key: string]: unknown;
      };
    };
    /** Retrieve up to 100 Moorcheh text documents by identifier. */
    "moorcheh.get_documents": {
      input: {
        /**
         * The Moorcheh namespace name containing only letters, numbers, hyphens, or underscores.
         * @minLength 1
         */
        namespace_name: string;
        /**
         * Document identifiers to process.
         * @minItems 1
         * @maxItems 100
         */
        ids: Array<string>;
      };
      output: {
        /** The operation status returned by Moorcheh. */
        status: string;
        /** The human-readable operation message returned by Moorcheh. */
        message: string;
        /** The number of requested document identifiers. */
        requested_ids: number;
        /** The number of documents found. */
        found_items: number;
        /** The documents found in the namespace. */
        items: Array<{
          /** The document or chunk identifier returned by Moorcheh. */
          id: string;
          /** The stored text returned by Moorcheh. */
          text: string;
          /** Arbitrary metadata associated with a Moorcheh document. */
          metadata: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List Moorcheh namespaces with their types, sizes, and creation times. */
    "moorcheh.list_namespaces": {
      input: Record<string, never>;
      output: {
        /** Namespaces owned by the authenticated account. */
        namespaces: Array<{
          /** The namespace name. */
          namespace_name: string;
          /** The namespace storage type. */
          type: "text" | "vector";
          /** The vector dimension, or null for text namespaces. */
          vector_dimension: number | null;
          /** The number of items in the namespace. */
          item_count: number;
          /** The namespace creation timestamp. */
          created_at: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search one or more Moorcheh text namespaces with a semantic text query. */
    "moorcheh.search_text": {
      input: {
        /**
         * The semantic text query, optionally ending with Moorcheh filters.
         * @minLength 1
         */
        query: string;
        /**
         * Text namespace names to search.
         * @minItems 1
         */
        namespaces: Array<string>;
        /**
         * The maximum number of relevant chunks to return.
         * @minimum 1
         */
        top_k?: number;
        /** Whether to filter results below a relevance threshold. */
        kiosk_mode?: boolean;
        /**
         * The minimum relevance score when kiosk_mode is enabled.
         * @minimum 0
         * @maximum 1
         */
        threshold?: number;
      };
      output: {
        /** Search results ordered by relevance. */
        results: Array<{
          /** The matching document identifier. */
          id: string;
          /** The Information Theoretic Similarity score. */
          score: number;
          /** The human-readable relevance label. */
          label: string;
          /** The matching text content. */
          text: string;
          /** Arbitrary metadata associated with a Moorcheh document. */
          metadata: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The total search processing time in seconds. */
        execution_time: number;
        [key: string]: unknown;
      };
    };
    /** Upload text documents and flat metadata to a Moorcheh text namespace. */
    "moorcheh.upload_text_documents": {
      input: {
        /**
         * The Moorcheh namespace name containing only letters, numbers, hyphens, or underscores.
         * @minLength 1
         */
        namespace_name: string;
        /**
         * Text documents to upload.
         * @minItems 1
         */
        documents: Array<{
          /**
           * A Moorcheh document identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The text content indexed by Moorcheh.
           * @minLength 1
           */
          text: string;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The operation status returned by Moorcheh. */
        status: string;
        /** The human-readable operation message returned by Moorcheh. */
        message: string;
        /** The upload batch identifier. */
        upload_id?: string;
        /** The target namespace name. */
        namespace_name?: string;
        /** The number of documents accepted for processing. */
        documents_processed?: number;
        /** The current upload processing status. */
        processing_status?: string;
        /** The accepted document statuses. */
        uploaded_documents?: Array<{
          /** The accepted document identifier. */
          id: string;
          /** The document processing status. */
          status: string;
          /** The number of characters in the accepted document. */
          character_count: number;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
