import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Import one or more URL-backed files into a Needle collection for indexing. */
    "needle.add_files_to_collection": {
      input: {
        /**
         * The Needle collection ID.
         * @minLength 1
         */
        collection_id: string;
        /**
         * The URL-backed files that Needle should import.
         * @minItems 1
         */
        files: Array<{
          /**
           * The display name for the file inside Needle.
           * @minLength 1
           */
          name: string;
          /**
           * The public or signed URL that Needle should import.
           * @format uri
           */
          url: string;
        }>;
      };
      output: {
        /** The files that Needle accepted for indexing. */
        files: Array<{
          /** The unique identifier of the file. */
          id: string;
          /** The file name. */
          name: string;
          /** The MIME type of the file. */
          type: string;
          /** The source or signed URL for the file. */
          url: string;
          /** The Needle user identifier that owns the file. */
          user_id?: string | null;
          /** The upstream connector identifier when the file is connector-managed. */
          connector_id?: string | null;
          /** The size of the file in bytes. */
          size: number;
          /** The MD5 hash of the file content. */
          md5_hash?: string | null;
          /** The ISO 8601 timestamp when the file was created. */
          created_at: string;
          /** The ISO 8601 timestamp when the file was last updated. */
          updated_at: string;
          /** The current indexing status of the file. */
          status: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Create a Needle collection and optionally attach existing Needle file IDs. */
    "needle.create_collection": {
      input: {
        /**
         * The name of the collection to create.
         * @minLength 1
         */
        name: string;
        /** Existing Needle file IDs to attach when the collection is created. */
        file_ids?: Array<string>;
      };
      output: {
        /** A Needle collection object. */
        collection: {
          /** The unique identifier of the collection. */
          id: string;
          /** The collection name. */
          name: string;
          /** The embedding model configured for the collection. */
          embedding_model?: string;
          /** The embedding vector dimension configured for the collection. */
          embedding_dimensions?: number;
          /** The number of search queries performed against the collection. */
          search_queries?: number;
          /** The ISO 8601 timestamp when the collection was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the collection was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the details of a single Needle collection. */
    "needle.get_collection": {
      input: {
        /**
         * The Needle collection ID.
         * @minLength 1
         */
        collection_id: string;
      };
      output: {
        /** A Needle collection object. */
        collection: {
          /** The unique identifier of the collection. */
          id: string;
          /** The collection name. */
          name: string;
          /** The embedding model configured for the collection. */
          embedding_model?: string;
          /** The embedding vector dimension configured for the collection. */
          embedding_dimensions?: number;
          /** The number of search queries performed against the collection. */
          search_queries?: number;
          /** The ISO 8601 timestamp when the collection was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the collection was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get indexing and storage statistics for a Needle collection. */
    "needle.get_collection_stats": {
      input: {
        /**
         * The Needle collection ID.
         * @minLength 1
         */
        collection_id: string;
      };
      output: {
        /** The file and byte distribution returned by Needle. */
        data_stats: Array<{
          /** The status bucket represented by this stats row. */
          status?: string;
          /** The number of files in this stats bucket. */
          files: number;
          /** The total byte size in this stats bucket. */
          bytes: number;
          [key: string]: unknown;
        }>;
        /** The total chunk count in the collection. */
        chunks_count?: number;
        /** The total character count in the collection. */
        characters?: number;
        /** The total user count in the collection. */
        users?: number;
      };
    };
    /** List the files currently attached to a Needle collection. */
    "needle.list_collection_files": {
      input: {
        /**
         * The Needle collection ID.
         * @minLength 1
         */
        collection_id: string;
      };
      output: {
        /** The files attached to the Needle collection. */
        files: Array<{
          /** The unique identifier of the file. */
          id: string;
          /** The file name. */
          name: string;
          /** The MIME type of the file. */
          type: string;
          /** The source or signed URL for the file. */
          url: string;
          /** The Needle user identifier that owns the file. */
          user_id?: string | null;
          /** The upstream connector identifier when the file is connector-managed. */
          connector_id?: string | null;
          /** The size of the file in bytes. */
          size: number;
          /** The MD5 hash of the file content. */
          md5_hash?: string | null;
          /** The ISO 8601 timestamp when the file was created. */
          created_at: string;
          /** The ISO 8601 timestamp when the file was last updated. */
          updated_at: string;
          /** The current indexing status of the file. */
          status: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the Needle collections that the API key can access. */
    "needle.list_collections": {
      input: Record<string, never>;
      output: {
        /** The collections returned by Needle. */
        collections: Array<{
          /** The unique identifier of the collection. */
          id: string;
          /** The collection name. */
          name: string;
          /** The embedding model configured for the collection. */
          embedding_model?: string;
          /** The embedding vector dimension configured for the collection. */
          embedding_dimensions?: number;
          /** The number of search queries performed against the collection. */
          search_queries?: number;
          /** The ISO 8601 timestamp when the collection was created. */
          created_at?: string;
          /** The ISO 8601 timestamp when the collection was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search a Needle collection for the most relevant retrieved content. */
    "needle.search_collection": {
      input: {
        /**
         * The Needle collection ID.
         * @minLength 1
         */
        collection_id: string;
        /**
         * The search query text.
         * @minLength 1
         */
        text: string;
        /**
         * The maximum number of results to return.
         * @exclusiveMinimum 0
         */
        top_k?: number;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** The retrieved search results returned by Needle. */
        results: Array<{
          /** The unique identifier of the search result or chunk. */
          id?: string;
          /** The identifier of the source file for this result. */
          file_id?: string;
          /** The retrieved content returned by Needle. */
          content: string;
          /** The distance or similarity score returned by Needle. */
          distance?: number;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
