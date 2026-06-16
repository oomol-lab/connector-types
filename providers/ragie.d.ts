import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Ragie document from a public URL when the source file is already hosted externally. */
    "ragie.create_document_from_url": {
      input: {
        /** The public URL of the source document. */
        url: string;
        /** The optional processing mode for ingestion. */
        mode?: string | Record<string, unknown>;
        /** The user-facing document name. */
        name?: string;
        /** The metadata to attach to the document. */
        metadata?: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
        /** The partition to place the document in. */
        partition?: string;
        /** The external identifier of the document. */
        externalId?: string;
      };
      output: {
        /** The unique identifier of the document. */
        id: string;
        /** The document name. */
        name: string;
        /** The current processing status of the document. */
        status: string;
        /** The metadata attached to the document. */
        metadata: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
        /** The partition that scopes the document. */
        partition: string;
        /** The ISO 8601 timestamp when the document was created. */
        createdAt: string;
        /** The ISO 8601 timestamp when the document was last updated. */
        updatedAt: string;
        /** The number of pages in the document. */
        pageCount?: number;
        /** The number of generated chunks. */
        chunkCount?: number;
        /** The external identifier of the document. */
        externalId?: string;
      };
    };
    /** Create a Ragie document from raw text or JSON data when the content already exists in memory and does not need file upload. */
    "ragie.create_document_raw": {
      input: {
        /** The raw data to ingest into Ragie. */
        data: string | Record<string, unknown>;
        /** The user-facing document name. */
        name?: string;
        /** The metadata to attach to the document. */
        metadata?: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
        /** The partition to place the document in. */
        partition?: string;
        /** The external identifier of the document. */
        externalId?: string;
      };
      output: {
        /** The unique identifier of the document. */
        id: string;
        /** The document name. */
        name: string;
        /** The current processing status of the document. */
        status: string;
        /** The metadata attached to the document. */
        metadata: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
        /** The partition that scopes the document. */
        partition: string;
        /** The ISO 8601 timestamp when the document was created. */
        createdAt: string;
        /** The ISO 8601 timestamp when the document was last updated. */
        updatedAt: string;
        /** The number of pages in the document. */
        pageCount?: number;
        /** The number of generated chunks. */
        chunkCount?: number;
        /** The external identifier of the document. */
        externalId?: string;
      };
    };
    /** Create the Ragie embedded OAuth redirect URL for a connection source type such as Google Drive or Notion. */
    "ragie.create_oauth_redirect_url": {
      input: {
        /** The redirect URI that Ragie should return the user to. */
        redirectUri: string;
        /** The Ragie connection source type to authorize. */
        sourceType?: string;
        /** The theme for Ragie's OAuth UI. */
        theme?: "light" | "dark" | "system";
        /** The connector-specific configuration passed to Ragie. */
        config?: Record<string, unknown>;
        /** The metadata to attach to the connection. */
        metadata?: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
        /** The partition to scope the connection to. */
        partition?: string;
        /**
         * The maximum number of pages Ragie may sync.
         * @exclusiveMinimum 0
         */
        pageLimit?: number;
        /** The optional processing mode for the embedded connection. */
        mode?: string | Record<string, unknown>;
        /** The white-label authenticator identifier to use. */
        authenticatorId?: string;
      };
      output: {
        /** The OAuth redirect URL returned by Ragie. */
        url: string;
      };
    };
    /** Create a Ragie partition to isolate documents, metadata schemas, and resource limits by workspace or tenant. */
    "ragie.create_partition": {
      input: {
        /** The partition identifier to create. */
        name: string;
        /** The partition description. */
        description?: string;
        /** Whether the partition should generate context-aware descriptions. */
        contextAware?: boolean;
        /** The JSON schema for document metadata in this partition. */
        metadataSchema?: Record<string, unknown>;
        /** The maximum hosted media limit in megabytes. */
        mediaHostedLimitMax?: number;
        /** The maximum hosted pages limit. */
        pagesHostedLimitMax?: number;
        /** The maximum streamed media limit in megabytes. */
        mediaStreamedLimitMax?: number;
        /** The maximum audio processing limit in minutes. */
        audioProcessedLimitMax?: number;
        /** The maximum processed pages limit. */
        pagesProcessedLimitMax?: number;
        /** The maximum video processing limit in minutes. */
        videoProcessedLimitMax?: number;
        /** The monthly hosted media limit in megabytes. */
        mediaHostedLimitMonthly?: number;
        /** The monthly hosted pages limit. */
        pagesHostedLimitMonthly?: number;
        /** The monthly streamed media limit in megabytes. */
        mediaStreamedLimitMonthly?: number;
        /** The monthly audio processing limit in minutes. */
        audioProcessedLimitMonthly?: number;
        /** The monthly processed pages limit. */
        pagesProcessedLimitMonthly?: number;
        /** The monthly video processing limit in minutes. */
        videoProcessedLimitMonthly?: number;
      };
      output: {
        /** The partition identifier. */
        name: string;
        /** Whether the partition is the default partition. */
        isDefault: boolean;
        /** The partition description. */
        description?: string;
        /** Whether the partition is context-aware. */
        contextAware: boolean;
        /** The JSON schema that constrains partition metadata. */
        metadataSchema?: Record<string, unknown>;
        /** The resource limits configured on the partition. */
        limits: {
          /** The maximum hosted media limit in megabytes. */
          mediaHostedLimitMax?: number;
          /** The maximum hosted pages limit. */
          pagesHostedLimitMax?: number;
          /** The maximum streamed media limit in megabytes. */
          mediaStreamedLimitMax?: number;
          /** The maximum audio processing limit in minutes. */
          audioProcessedLimitMax?: number;
          /** The maximum processed pages limit. */
          pagesProcessedLimitMax?: number;
          /** The maximum video processing limit in minutes. */
          videoProcessedLimitMax?: number;
          /** The monthly hosted media limit in megabytes. */
          mediaHostedLimitMonthly?: number;
          /** The monthly hosted pages limit. */
          pagesHostedLimitMonthly?: number;
          /** The monthly streamed media limit in megabytes. */
          mediaStreamedLimitMonthly?: number;
          /** The monthly audio processing limit in minutes. */
          audioProcessedLimitMonthly?: number;
          /** The monthly processed pages limit. */
          pagesProcessedLimitMonthly?: number;
          /** The monthly video processing limit in minutes. */
          videoProcessedLimitMonthly?: number;
        };
        /** The usage stats of the partition. */
        stats: {
          /** The total number of documents in the partition. */
          documentCount?: number;
          /** The total number of documents in the partition. */
          documentsCount?: number;
          /** The hosted pages count. */
          pagesHostedCount?: number;
          /** The processed pages count. */
          pagesProcessedCount?: number;
          /** The hosted media usage in megabytes. */
          mediaHostedMegabytes?: number;
          /** The streamed media usage in megabytes. */
          mediaStreamedMegabytes?: number;
          /** The processed audio usage in minutes. */
          audioProcessedMinutes?: number;
          /** The processed video usage in minutes. */
          videoProcessedMinutes?: number;
          /** The total hosted media usage in megabytes. */
          mediaHostedTotal?: number;
          /** The total hosted pages usage. */
          pagesHostedTotal?: number;
          /** The current month's hosted media usage in megabytes. */
          mediaHostedMonthly?: number;
          /** The total streamed media usage in megabytes. */
          mediaStreamedTotal?: number;
          /** The current month's hosted pages usage. */
          pagesHostedMonthly?: number;
          /** The total processed audio usage. */
          audioProcessedTotal?: number;
          /** The total processed pages usage. */
          pagesProcessedTotal?: number;
          /** The total processed video usage. */
          videoProcessedTotal?: number;
          /** The current month's streamed media usage. */
          mediaStreamedMonthly?: number;
          /** The current month's processed audio usage. */
          audioProcessedMonthly?: number;
          /** The current month's processed pages usage. */
          pagesProcessedMonthly?: number;
          /** The current month's processed video usage. */
          videoProcessedMonthly?: number;
        };
        /** The timestamp when the partition exceeded its limits. */
        limitExceededAt?: string;
      };
    };
    /** Delete a Ragie document, optionally in asynchronous mode. */
    "ragie.delete_document": {
      input: {
        /** The document identifier. */
        documentId: string;
        /** Whether Ragie should delete the document asynchronously. */
        async?: boolean;
        /** The partition to scope the request to. */
        partition?: string;
      };
      output: {
        /** The deletion status returned by Ragie. */
        status: string;
      };
    };
    /** Delete a Ragie partition, optionally in asynchronous mode. */
    "ragie.delete_partition": {
      input: {
        /** The partition identifier. */
        partitionId: string;
        /** Whether Ragie should delete the partition asynchronously. */
        asyncDeletion?: boolean;
      };
      output: {
        /** The deletion result message returned by Ragie. */
        message: string;
      };
    };
    /** Get a single Ragie document by ID to inspect status, metadata, errors, and counts. */
    "ragie.get_document": {
      input: {
        /** The document identifier. */
        documentId: string;
        /** The partition to scope the request to. */
        partition?: string;
      };
      output: {
        /** The unique identifier of the document. */
        id: string;
        /** The document name. */
        name: string;
        /** The current processing status of the document. */
        status: string;
        /** The metadata attached to the document. */
        metadata: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
        /** The partition that scopes the document. */
        partition: string;
        /** The ISO 8601 timestamp when the document was created. */
        createdAt: string;
        /** The ISO 8601 timestamp when the document was last updated. */
        updatedAt: string;
        /** The number of pages in the document. */
        pageCount?: number;
        /** The number of generated chunks. */
        chunkCount?: number;
        /** The external identifier of the document. */
        externalId?: string;
        /** The list of processing errors. */
        errors?: Array<string>;
      };
    };
    /** List the chunks of a Ragie document with cursor pagination and optional start/end index filtering. */
    "ragie.get_document_chunks": {
      input: {
        /** The document identifier. */
        documentId: string;
        /** The pagination cursor returned by a previous chunk list call. */
        cursor?: string;
        /**
         * The number of chunks to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The partition to scope the request to. */
        partition?: string;
        /** The inclusive starting chunk index. */
        startIndex?: number;
        /** The inclusive ending chunk index. */
        endIndex?: number;
      };
      output: {
        /** The returned chunks. */
        chunks: Array<{
          /** The unique identifier of the chunk. */
          id: string;
          /** The chunk text content. */
          text: string;
          /** The zero-based chunk index. */
          index?: number;
          /** The source links attached to the chunk. */
          links?: Record<string, unknown>;
          /** The chunk-level metadata. */
          metadata?: Record<string, unknown>;
        }>;
        /** Pagination information returned by Ragie. */
        pagination: {
          /** The cursor for the next page of results. */
          nextCursor: string | null;
          /** The total number of records in the result set. */
          totalCount: number;
        };
      };
    };
    /** Get Ragie document content in the requested media type, with optional byte range and download behavior. */
    "ragie.get_document_content": {
      input: {
        /** The document identifier. */
        documentId: string;
        /** The HTTP byte range to request from Ragie. */
        range?: string;
        /** Whether Ragie should return content as a download. */
        download?: boolean;
        /** The partition to scope the request to. */
        partition?: string;
        /** The media type to request from Ragie. */
        mediaType?: string;
      };
      output: {
        /** The unique identifier of the document. */
        id: string;
        /** The document name. */
        name: string;
        /** The current processing status of the document. */
        status: string;
        /** The metadata attached to the document. */
        metadata: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
        /** The partition that scopes the document. */
        partition: string;
        /** The ISO 8601 timestamp when the document was created. */
        createdAt: string;
        /** The ISO 8601 timestamp when the document was last updated. */
        updatedAt: string;
        /** The number of pages in the document. */
        pageCount?: number;
        /** The number of generated chunks. */
        chunkCount?: number;
        /** The external identifier of the document. */
        externalId?: string;
        /** The document content in the requested media type. */
        content: string;
      };
    };
    /** Get the Ragie-generated summary for a specific document. */
    "ragie.get_document_summary": {
      input: {
        /** The document identifier. */
        documentId: string;
        /** The partition to scope the request to. */
        partition?: string;
      };
      output: {
        /** The document identifier. */
        documentId: string;
        /** The summary generated by Ragie. */
        summary: string;
      };
    };
    /** Get a specific Ragie partition together with its limits and usage stats. */
    "ragie.get_partition": {
      input: {
        /** The partition identifier. */
        partitionId: string;
      };
      output: {
        /** The partition identifier. */
        name: string;
        /** Whether the partition is the default partition. */
        isDefault: boolean;
        /** The partition description. */
        description?: string;
        /** Whether the partition is context-aware. */
        contextAware: boolean;
        /** The JSON schema that constrains partition metadata. */
        metadataSchema?: Record<string, unknown>;
        /** The resource limits configured on the partition. */
        limits: {
          /** The maximum hosted media limit in megabytes. */
          mediaHostedLimitMax?: number;
          /** The maximum hosted pages limit. */
          pagesHostedLimitMax?: number;
          /** The maximum streamed media limit in megabytes. */
          mediaStreamedLimitMax?: number;
          /** The maximum audio processing limit in minutes. */
          audioProcessedLimitMax?: number;
          /** The maximum processed pages limit. */
          pagesProcessedLimitMax?: number;
          /** The maximum video processing limit in minutes. */
          videoProcessedLimitMax?: number;
          /** The monthly hosted media limit in megabytes. */
          mediaHostedLimitMonthly?: number;
          /** The monthly hosted pages limit. */
          pagesHostedLimitMonthly?: number;
          /** The monthly streamed media limit in megabytes. */
          mediaStreamedLimitMonthly?: number;
          /** The monthly audio processing limit in minutes. */
          audioProcessedLimitMonthly?: number;
          /** The monthly processed pages limit. */
          pagesProcessedLimitMonthly?: number;
          /** The monthly video processing limit in minutes. */
          videoProcessedLimitMonthly?: number;
        };
        /** The usage stats of the partition. */
        stats: {
          /** The total number of documents in the partition. */
          documentCount?: number;
          /** The total number of documents in the partition. */
          documentsCount?: number;
          /** The hosted pages count. */
          pagesHostedCount?: number;
          /** The processed pages count. */
          pagesProcessedCount?: number;
          /** The hosted media usage in megabytes. */
          mediaHostedMegabytes?: number;
          /** The streamed media usage in megabytes. */
          mediaStreamedMegabytes?: number;
          /** The processed audio usage in minutes. */
          audioProcessedMinutes?: number;
          /** The processed video usage in minutes. */
          videoProcessedMinutes?: number;
          /** The total hosted media usage in megabytes. */
          mediaHostedTotal?: number;
          /** The total hosted pages usage. */
          pagesHostedTotal?: number;
          /** The current month's hosted media usage in megabytes. */
          mediaHostedMonthly?: number;
          /** The total streamed media usage in megabytes. */
          mediaStreamedTotal?: number;
          /** The current month's hosted pages usage. */
          pagesHostedMonthly?: number;
          /** The total processed audio usage. */
          audioProcessedTotal?: number;
          /** The total processed pages usage. */
          pagesProcessedTotal?: number;
          /** The total processed video usage. */
          videoProcessedTotal?: number;
          /** The current month's streamed media usage. */
          mediaStreamedMonthly?: number;
          /** The current month's processed audio usage. */
          audioProcessedMonthly?: number;
          /** The current month's processed pages usage. */
          pagesProcessedMonthly?: number;
          /** The current month's processed video usage. */
          videoProcessedMonthly?: number;
        };
        /** The timestamp when the partition exceeded its limits. */
        limitExceededAt?: string;
      };
    };
    /** List the embedded connector source types that Ragie can authorize and sync through its connections API. */
    "ragie.list_connection_source_types": {
      input: Record<string, never>;
      output: {
        /** The available connector source types. */
        connectors: Array<{
          /** The connector source type identifier. */
          sourceType: string;
          /** The connector display name. */
          displayName: string;
          /** The connector icon URL. */
          iconUrl: string;
          /** The documentation URL for the connector. */
          docsUrl: string;
        }>;
      };
    };
    /** List Ragie connections with metadata filtering, pagination, and optional partition scoping. */
    "ragie.list_connections": {
      input: {
        /** The pagination cursor returned by a previous list call. */
        cursor?: string;
        /** The filter expression used to narrow returned connections. */
        filter?: string;
        /**
         * The number of connections to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The partition to scope the request to. */
        partition?: string;
      };
      output: {
        /** The returned connections. */
        connections: Array<{
          /** The unique connection identifier. */
          id: string;
          /** The connection display name. */
          name: string;
          /** The connection source type. */
          type: string;
          /** The source configuration attached to the connection. */
          source?: Record<string, unknown>;
          /** Whether the connection is enabled. */
          enabled: boolean;
          /** The connection metadata. */
          metadata: Record<string, unknown>;
          /** The ISO 8601 timestamp when the connection was created. */
          createdAt: string;
          /** The ISO 8601 timestamp when the connection was last updated. */
          updatedAt: string;
          /** The maximum page limit configured on the connection. */
          pageLimit?: number;
          /** Whether the connection was disabled by the system. */
          disabledBySystem: boolean;
          /** The reason why the system disabled the connection. */
          disabledBySystemReason?: string | null;
        }>;
        /** Pagination information returned by Ragie. */
        pagination: {
          /** The cursor for the next page of results. */
          nextCursor: string | null;
          /** The total number of records in the result set. */
          totalCount: number;
        };
      };
    };
    /** List Ragie documents with filter, cursor pagination, and optional partition scoping to inspect ingestion progress. */
    "ragie.list_documents": {
      input: {
        /** The pagination cursor returned by a previous list call. */
        cursor?: string;
        /** The filter expression used to narrow returned documents. */
        filter?: string;
        /**
         * The number of documents to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** The partition to scope the request to. */
        partition?: string;
      };
      output: {
        /** The returned documents. */
        documents: Array<{
          /** The unique identifier of the document. */
          id: string;
          /** The document name. */
          name: string;
          /** The current processing status of the document. */
          status: string;
          /** The metadata attached to the document. */
          metadata: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
          /** The partition that scopes the document. */
          partition: string;
          /** The ISO 8601 timestamp when the document was created. */
          createdAt: string;
          /** The ISO 8601 timestamp when the document was last updated. */
          updatedAt: string;
          /** The number of pages in the document. */
          pageCount?: number;
          /** The number of generated chunks. */
          chunkCount?: number;
          /** The external identifier of the document. */
          externalId?: string;
        }>;
        /** Pagination information returned by Ragie. */
        pagination: {
          /** The cursor for the next page of results. */
          nextCursor: string | null;
          /** The total number of records in the result set. */
          totalCount: number;
        };
      };
    };
    /** List available Ragie partitions and their current limits with cursor pagination. */
    "ragie.list_partitions": {
      input: {
        /** The pagination cursor returned by a previous list call. */
        cursor?: string;
        /**
         * The number of partitions to return per page.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
      };
      output: {
        /** The returned partitions. */
        partitions: Array<{
          /** The partition identifier. */
          name: string;
          /** Whether the partition is the default partition. */
          isDefault: boolean;
          /** The partition description. */
          description?: string;
          /** Whether the partition is context-aware. */
          contextAware: boolean;
          /** The JSON schema that constrains partition metadata. */
          metadataSchema?: Record<string, unknown>;
          /** The resource limits configured on the partition. */
          limits: {
            /** The maximum hosted media limit in megabytes. */
            mediaHostedLimitMax?: number;
            /** The maximum hosted pages limit. */
            pagesHostedLimitMax?: number;
            /** The maximum streamed media limit in megabytes. */
            mediaStreamedLimitMax?: number;
            /** The maximum audio processing limit in minutes. */
            audioProcessedLimitMax?: number;
            /** The maximum processed pages limit. */
            pagesProcessedLimitMax?: number;
            /** The maximum video processing limit in minutes. */
            videoProcessedLimitMax?: number;
            /** The monthly hosted media limit in megabytes. */
            mediaHostedLimitMonthly?: number;
            /** The monthly hosted pages limit. */
            pagesHostedLimitMonthly?: number;
            /** The monthly streamed media limit in megabytes. */
            mediaStreamedLimitMonthly?: number;
            /** The monthly audio processing limit in minutes. */
            audioProcessedLimitMonthly?: number;
            /** The monthly processed pages limit. */
            pagesProcessedLimitMonthly?: number;
            /** The monthly video processing limit in minutes. */
            videoProcessedLimitMonthly?: number;
          };
          /** The usage stats of the partition. */
          stats: {
            /** The total number of documents in the partition. */
            documentCount?: number;
            /** The total number of documents in the partition. */
            documentsCount?: number;
            /** The hosted pages count. */
            pagesHostedCount?: number;
            /** The processed pages count. */
            pagesProcessedCount?: number;
            /** The hosted media usage in megabytes. */
            mediaHostedMegabytes?: number;
            /** The streamed media usage in megabytes. */
            mediaStreamedMegabytes?: number;
            /** The processed audio usage in minutes. */
            audioProcessedMinutes?: number;
            /** The processed video usage in minutes. */
            videoProcessedMinutes?: number;
            /** The total hosted media usage in megabytes. */
            mediaHostedTotal?: number;
            /** The total hosted pages usage. */
            pagesHostedTotal?: number;
            /** The current month's hosted media usage in megabytes. */
            mediaHostedMonthly?: number;
            /** The total streamed media usage in megabytes. */
            mediaStreamedTotal?: number;
            /** The current month's hosted pages usage. */
            pagesHostedMonthly?: number;
            /** The total processed audio usage. */
            audioProcessedTotal?: number;
            /** The total processed pages usage. */
            pagesProcessedTotal?: number;
            /** The total processed video usage. */
            videoProcessedTotal?: number;
            /** The current month's streamed media usage. */
            mediaStreamedMonthly?: number;
            /** The current month's processed audio usage. */
            audioProcessedMonthly?: number;
            /** The current month's processed pages usage. */
            pagesProcessedMonthly?: number;
            /** The current month's processed video usage. */
            videoProcessedMonthly?: number;
          };
          /** The timestamp when the partition exceeded its limits. */
          limitExceededAt?: string;
        }>;
        /** Pagination information returned by Ragie. */
        pagination: {
          /** The cursor for the next page of results. */
          nextCursor: string | null;
          /** The total number of records in the result set. */
          totalCount: number;
        };
      };
    };
    /** Patch Ragie document metadata in place without replacing the entire metadata object. */
    "ragie.patch_document_metadata": {
      input: {
        /** The document identifier. */
        documentId: string;
        /** The metadata fields to upsert or remove with null values. */
        metadata: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
        /** The partition to scope the request to. */
        partition?: string;
        /** Whether Ragie should run the metadata patch asynchronously. */
        async?: boolean;
      };
      output: {
        /** The accepted status when Ragie runs the patch asynchronously. */
        status?: string;
        /** The updated document metadata. */
        metadata?: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
      };
    };
    /** Retrieve the most relevant Ragie document chunks for a query, with optional metadata filters, reranking, and partition scoping. */
    "ragie.retrieve": {
      input: {
        /** The search query used for retrieval. */
        query: string;
        /**
         * The maximum number of chunks to return.
         * @minimum 1
         */
        topK?: number;
        /** The metadata filter object for retrieval. */
        filter?: Record<string, unknown>;
        /** Whether Ragie should rerank chunks for semantic relevance. */
        rerank?: boolean;
        /** The partition to scope retrieval to. */
        partition?: string;
        /** Whether to favor newer documents during retrieval. */
        recencyBias?: boolean;
        /**
         * The maximum number of chunks to return per document.
         * @minimum 1
         */
        maxChunksPerDocument?: number;
      };
      output: {
        /** The retrieved document chunks. */
        scoredChunks: Array<{
          /** The unique identifier of the chunk. */
          id: string;
          /** The chunk text content. */
          text: string;
          /** The zero-based chunk index. */
          index?: number;
          /** The source links attached to the chunk. */
          links?: Record<string, unknown>;
          /** The chunk-level metadata. */
          metadata?: Record<string, unknown>;
          /** The retrieval relevance score. */
          score: number;
          /** The identifier of the source document. */
          documentId: string;
          /** The name of the source document. */
          documentName: string;
          /** The metadata of the source document. */
          documentMetadata: Record<string, string | number | boolean | null | Array<string | number | boolean | null>>;
        }>;
      };
    };
    /** Update the page, media, audio, and video limits on an existing Ragie partition. */
    "ragie.set_partition_limits": {
      input: {
        /** The partition identifier. */
        partitionId: string;
        /** The maximum hosted media limit in megabytes. */
        mediaHostedLimitMax?: number;
        /** The maximum hosted pages limit. */
        pagesHostedLimitMax?: number;
        /** The maximum streamed media limit in megabytes. */
        mediaStreamedLimitMax?: number;
        /** The maximum audio processing limit in minutes. */
        audioProcessedLimitMax?: number;
        /** The maximum processed pages limit. */
        pagesProcessedLimitMax?: number;
        /** The maximum video processing limit in minutes. */
        videoProcessedLimitMax?: number;
        /** The monthly hosted media limit in megabytes. */
        mediaHostedLimitMonthly?: number;
        /** The monthly hosted pages limit. */
        pagesHostedLimitMonthly?: number;
        /** The monthly streamed media limit in megabytes. */
        mediaStreamedLimitMonthly?: number;
        /** The monthly audio processing limit in minutes. */
        audioProcessedLimitMonthly?: number;
        /** The monthly processed pages limit. */
        pagesProcessedLimitMonthly?: number;
        /** The monthly video processing limit in minutes. */
        videoProcessedLimitMonthly?: number;
      };
      output: {
        /** The partition identifier. */
        name: string;
        /** Whether the partition is the default partition. */
        isDefault: boolean;
        /** The partition description. */
        description?: string;
        /** Whether the partition is context-aware. */
        contextAware: boolean;
        /** The JSON schema that constrains partition metadata. */
        metadataSchema?: Record<string, unknown>;
        /** The resource limits configured on the partition. */
        limits: {
          /** The maximum hosted media limit in megabytes. */
          mediaHostedLimitMax?: number;
          /** The maximum hosted pages limit. */
          pagesHostedLimitMax?: number;
          /** The maximum streamed media limit in megabytes. */
          mediaStreamedLimitMax?: number;
          /** The maximum audio processing limit in minutes. */
          audioProcessedLimitMax?: number;
          /** The maximum processed pages limit. */
          pagesProcessedLimitMax?: number;
          /** The maximum video processing limit in minutes. */
          videoProcessedLimitMax?: number;
          /** The monthly hosted media limit in megabytes. */
          mediaHostedLimitMonthly?: number;
          /** The monthly hosted pages limit. */
          pagesHostedLimitMonthly?: number;
          /** The monthly streamed media limit in megabytes. */
          mediaStreamedLimitMonthly?: number;
          /** The monthly audio processing limit in minutes. */
          audioProcessedLimitMonthly?: number;
          /** The monthly processed pages limit. */
          pagesProcessedLimitMonthly?: number;
          /** The monthly video processing limit in minutes. */
          videoProcessedLimitMonthly?: number;
        };
        /** The usage stats of the partition. */
        stats: {
          /** The total number of documents in the partition. */
          documentCount?: number;
          /** The total number of documents in the partition. */
          documentsCount?: number;
          /** The hosted pages count. */
          pagesHostedCount?: number;
          /** The processed pages count. */
          pagesProcessedCount?: number;
          /** The hosted media usage in megabytes. */
          mediaHostedMegabytes?: number;
          /** The streamed media usage in megabytes. */
          mediaStreamedMegabytes?: number;
          /** The processed audio usage in minutes. */
          audioProcessedMinutes?: number;
          /** The processed video usage in minutes. */
          videoProcessedMinutes?: number;
          /** The total hosted media usage in megabytes. */
          mediaHostedTotal?: number;
          /** The total hosted pages usage. */
          pagesHostedTotal?: number;
          /** The current month's hosted media usage in megabytes. */
          mediaHostedMonthly?: number;
          /** The total streamed media usage in megabytes. */
          mediaStreamedTotal?: number;
          /** The current month's hosted pages usage. */
          pagesHostedMonthly?: number;
          /** The total processed audio usage. */
          audioProcessedTotal?: number;
          /** The total processed pages usage. */
          pagesProcessedTotal?: number;
          /** The total processed video usage. */
          videoProcessedTotal?: number;
          /** The current month's streamed media usage. */
          mediaStreamedMonthly?: number;
          /** The current month's processed audio usage. */
          audioProcessedMonthly?: number;
          /** The current month's processed pages usage. */
          pagesProcessedMonthly?: number;
          /** The current month's processed video usage. */
          videoProcessedMonthly?: number;
        };
        /** The timestamp when the partition exceeded its limits. */
        limitExceededAt?: string;
      };
    };
    /** Update a Ragie partition's description, metadata schema, and context-aware setting without recreating it. */
    "ragie.update_partition": {
      input: {
        /** The partition identifier. */
        partitionId: string;
        /** The updated partition description. */
        description?: string;
        /** Whether the partition should be context-aware after the update. */
        contextAware?: boolean;
        /** The updated JSON schema for partition metadata. */
        metadataSchema?: Record<string, unknown>;
      };
      output: {
        /** The partition identifier. */
        name: string;
        /** Whether the partition is the default partition. */
        isDefault: boolean;
        /** The partition description. */
        description?: string;
        /** Whether the partition is context-aware. */
        contextAware: boolean;
        /** The JSON schema that constrains partition metadata. */
        metadataSchema?: Record<string, unknown>;
        /** The resource limits configured on the partition. */
        limits: {
          /** The maximum hosted media limit in megabytes. */
          mediaHostedLimitMax?: number;
          /** The maximum hosted pages limit. */
          pagesHostedLimitMax?: number;
          /** The maximum streamed media limit in megabytes. */
          mediaStreamedLimitMax?: number;
          /** The maximum audio processing limit in minutes. */
          audioProcessedLimitMax?: number;
          /** The maximum processed pages limit. */
          pagesProcessedLimitMax?: number;
          /** The maximum video processing limit in minutes. */
          videoProcessedLimitMax?: number;
          /** The monthly hosted media limit in megabytes. */
          mediaHostedLimitMonthly?: number;
          /** The monthly hosted pages limit. */
          pagesHostedLimitMonthly?: number;
          /** The monthly streamed media limit in megabytes. */
          mediaStreamedLimitMonthly?: number;
          /** The monthly audio processing limit in minutes. */
          audioProcessedLimitMonthly?: number;
          /** The monthly processed pages limit. */
          pagesProcessedLimitMonthly?: number;
          /** The monthly video processing limit in minutes. */
          videoProcessedLimitMonthly?: number;
        };
        /** The usage stats of the partition. */
        stats: {
          /** The total number of documents in the partition. */
          documentCount?: number;
          /** The total number of documents in the partition. */
          documentsCount?: number;
          /** The hosted pages count. */
          pagesHostedCount?: number;
          /** The processed pages count. */
          pagesProcessedCount?: number;
          /** The hosted media usage in megabytes. */
          mediaHostedMegabytes?: number;
          /** The streamed media usage in megabytes. */
          mediaStreamedMegabytes?: number;
          /** The processed audio usage in minutes. */
          audioProcessedMinutes?: number;
          /** The processed video usage in minutes. */
          videoProcessedMinutes?: number;
          /** The total hosted media usage in megabytes. */
          mediaHostedTotal?: number;
          /** The total hosted pages usage. */
          pagesHostedTotal?: number;
          /** The current month's hosted media usage in megabytes. */
          mediaHostedMonthly?: number;
          /** The total streamed media usage in megabytes. */
          mediaStreamedTotal?: number;
          /** The current month's hosted pages usage. */
          pagesHostedMonthly?: number;
          /** The total processed audio usage. */
          audioProcessedTotal?: number;
          /** The total processed pages usage. */
          pagesProcessedTotal?: number;
          /** The total processed video usage. */
          videoProcessedTotal?: number;
          /** The current month's streamed media usage. */
          mediaStreamedMonthly?: number;
          /** The current month's processed audio usage. */
          audioProcessedMonthly?: number;
          /** The current month's processed pages usage. */
          pagesProcessedMonthly?: number;
          /** The current month's processed video usage. */
          videoProcessedMonthly?: number;
        };
        /** The timestamp when the partition exceeded its limits. */
        limitExceededAt?: string;
      };
    };
  }
}
