import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an empty editable knowledge article as a draft. A caller-stable articleId prevents duplicate creation on retries; an existing ID returns its article without overwriting it. */
    "oomol_rag.create_article": {
      input: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
        /**
         * The article title.
         * @minLength 1
         * @maxLength 200
         * @pattern \S
         */
        title: string;
      };
      output: {
        /** A knowledge article and its independent draft and indexed revisions. */
        article: {
          /** The article identifier. */
          id: string;
          /** The article title. */
          title: string;
          /** The stored editor format version. */
          formatVersion: number;
          /** Stored editor content. Version 3 is BlockNote; older versions may contain a legacy doc. Do not treat legacy content as BlockNote. */
          content?: Record<string, unknown>;
          /** The current draft revision. */
          revision: number;
          /**
           * The revision currently used by retrieval.
           * @minimum 0
           */
          indexedRevision: number;
          /**
           * The revision targeted by the latest publication.
           * @minimum 0
           */
          syncRevision: number;
          /** The index synchronization status. */
          syncStatus: "draft" | "syncing" | "ready" | "failed" | "uncertain";
          /** Synchronization error, when present. */
          syncError?: string;
          /** Original file identifier, for converted articles. */
          sourceFileId?: string;
          /** Original file name. */
          sourceFilename?: string;
          /** Warnings produced by file conversion. */
          conversionWarnings?: Array<string>;
          /**
           * Creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Create and save an editable article from Markdown as an unpublished draft. Requires stable articleId and saveId. Creation then saving are two requests: if saving fails, a blank draft may remain; retry the identical IDs and payload to resume. Never overwrites an existing edited article; a revision conflict requires inspection. */
    "oomol_rag.create_article_from_markdown": {
      input: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
        /**
         * Stable save-operation ID. Reuse the same ID and exact payload after an uncertain result.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        saveId: string;
        /**
         * The article title.
         * @minLength 1
         * @maxLength 200
         * @pattern \S
         */
        title: string;
        /**
         * Markdown source to convert to native BlockNote. Supports CommonMark and GFM headings, lists, task lists, tables, links and code. Empty input clears the body. HTML remains literal text; standalone HTTP(S) images become image blocks, inline images become links. Relative or unsafe URLs remain literal text with warnings. No remote content is fetched.
         * @maxLength 200000
         */
        markdown: string;
      };
      output: {
        /** A knowledge article and its independent draft and indexed revisions. */
        article: {
          /** The article identifier. */
          id: string;
          /** The article title. */
          title: string;
          /** The stored editor format version. */
          formatVersion: number;
          /** Stored editor content. Version 3 is BlockNote; older versions may contain a legacy doc. Do not treat legacy content as BlockNote. */
          content?: Record<string, unknown>;
          /** The current draft revision. */
          revision: number;
          /**
           * The revision currently used by retrieval.
           * @minimum 0
           */
          indexedRevision: number;
          /**
           * The revision targeted by the latest publication.
           * @minimum 0
           */
          syncRevision: number;
          /** The index synchronization status. */
          syncStatus: "draft" | "syncing" | "ready" | "failed" | "uncertain";
          /** Synchronization error, when present. */
          syncError?: string;
          /** Original file identifier, for converted articles. */
          sourceFileId?: string;
          /** Original file name. */
          sourceFilename?: string;
          /** Warnings produced by file conversion. */
          conversionWarnings?: Array<string>;
          /**
           * Creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
        /** Conversion warning codes describing content preserved as text or simplified; review them before publishing. */
        warnings: Array<string>;
      };
    };
    /** Delete an article and exclude its index from retrieval. Underlying index cleanup is asynchronous; any original converted file is preserved. */
    "oomol_rag.delete_article": {
      input: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
      };
      output: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
        /** Whether deletion was accepted. */
        deleted: boolean;
      };
    };
    /** Start asynchronous deletion of a knowledge-base file. */
    "oomol_rag.delete_file": {
      input: {
        /**
         * The file identifier.
         * @minLength 1
         * @pattern \S
         */
        fileId: string;
      };
      output: {
        /** A file managed by the current OOMOL team's knowledge base. */
        file: {
          /** The file identifier. */
          id: string;
          /** The file name. */
          name: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /** The current file processing status. */
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted" | "retiring_index" | "retiring_file" | "archived";
          /** The article created from this source file. */
          convertedArticleId?: string;
          /** Whether the article replaced the original file index. */
          indexReplaced?: boolean;
          /** File-to-article conversion status. */
          conversionStatus?: string;
          /** File-to-article conversion error. */
          conversionError?: string;
          /** The processing error code when the file failed. */
          errorCode?: string;
          /**
           * The file creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * The file update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Download a knowledge-base file through OOMOL file transit and return a temporary public URL. */
    "oomol_rag.download_file": {
      input: {
        /**
         * The file identifier.
         * @minLength 1
         * @pattern \S
         */
        fileId: string;
      };
      output: {
        /** A temporary file-transit result. */
        file: {
          /** The downloaded file name. */
          name: string;
          /** The downloaded file MIME type. */
          mimeType: string;
          /**
           * The downloaded file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /**
           * The temporary public file URL.
           * @format uri
           */
          transitUrl: string;
        };
      };
    };
    /** Read the full editable article, its format version, revision and knowledge-base synchronization state. */
    "oomol_rag.get_article": {
      input: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
      };
      output: {
        /** A knowledge article and its independent draft and indexed revisions. */
        article: {
          /** The article identifier. */
          id: string;
          /** The article title. */
          title: string;
          /** The stored editor format version. */
          formatVersion: number;
          /** Stored editor content. Version 3 is BlockNote; older versions may contain a legacy doc. Do not treat legacy content as BlockNote. */
          content?: Record<string, unknown>;
          /** The current draft revision. */
          revision: number;
          /**
           * The revision currently used by retrieval.
           * @minimum 0
           */
          indexedRevision: number;
          /**
           * The revision targeted by the latest publication.
           * @minimum 0
           */
          syncRevision: number;
          /** The index synchronization status. */
          syncStatus: "draft" | "syncing" | "ready" | "failed" | "uncertain";
          /** Synchronization error, when present. */
          syncError?: string;
          /** Original file identifier, for converted articles. */
          sourceFileId?: string;
          /** Original file name. */
          sourceFilename?: string;
          /** Warnings produced by file conversion. */
          conversionWarnings?: Array<string>;
          /**
           * Creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Get metadata and processing status for a knowledge-base file. */
    "oomol_rag.get_file": {
      input: {
        /**
         * The file identifier.
         * @minLength 1
         * @pattern \S
         */
        fileId: string;
      };
      output: {
        /** A file managed by the current OOMOL team's knowledge base. */
        file: {
          /** The file identifier. */
          id: string;
          /** The file name. */
          name: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /** The current file processing status. */
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted" | "retiring_index" | "retiring_file" | "archived";
          /** The article created from this source file. */
          convertedArticleId?: string;
          /** Whether the article replaced the original file index. */
          indexReplaced?: boolean;
          /** File-to-article conversion status. */
          conversionStatus?: string;
          /** File-to-article conversion error. */
          conversionError?: string;
          /** The processing error code when the file failed. */
          errorCode?: string;
          /**
           * The file creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * The file update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** List knowledge articles with draft and synchronization metadata, without document bodies. */
    "oomol_rag.list_articles": {
      input: {
        /** The previous nextCursor. */
        cursor?: string;
        /**
         * Page size.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
      };
      output: {
        /** Articles in this page. */
        articles: Array<{
          /** The article identifier. */
          id: string;
          /** The article title. */
          title: string;
          /** The stored editor format version. */
          formatVersion: number;
          /** Stored editor content. Version 3 is BlockNote; older versions may contain a legacy doc. Do not treat legacy content as BlockNote. */
          content?: Record<string, unknown>;
          /** The current draft revision. */
          revision: number;
          /**
           * The revision currently used by retrieval.
           * @minimum 0
           */
          indexedRevision: number;
          /**
           * The revision targeted by the latest publication.
           * @minimum 0
           */
          syncRevision: number;
          /** The index synchronization status. */
          syncStatus: "draft" | "syncing" | "ready" | "failed" | "uncertain";
          /** Synchronization error, when present. */
          syncError?: string;
          /** Original file identifier, for converted articles. */
          sourceFileId?: string;
          /** Original file name. */
          sourceFilename?: string;
          /** Warnings produced by file conversion. */
          conversionWarnings?: Array<string>;
          /**
           * Creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update timestamp.
           * @format date-time
           */
          updatedAt: string;
        }>;
        /** Next-page cursor; empty means the end. */
        nextCursor: string;
      };
    };
    /** List files in the current OOMOL team's knowledge base. */
    "oomol_rag.list_files": {
      input: {
        /**
         * The opaque cursor returned by the previous page.
         * @maxLength 64
         */
        cursor?: string;
        /**
         * The maximum number of files to return.
         * @minimum 1
         * @maximum 100
         * @default 50
         */
        limit?: number;
      };
      output: {
        /** The files in this page. */
        files: Array<{
          /** The file identifier. */
          id: string;
          /** The file name. */
          name: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /** The current file processing status. */
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted" | "retiring_index" | "retiring_file" | "archived";
          /** The article created from this source file. */
          convertedArticleId?: string;
          /** Whether the article replaced the original file index. */
          indexReplaced?: boolean;
          /** File-to-article conversion status. */
          conversionStatus?: string;
          /** File-to-article conversion error. */
          conversionError?: string;
          /** The processing error code when the file failed. */
          errorCode?: string;
          /**
           * The file creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * The file update timestamp.
           * @format date-time
           */
          updatedAt: string;
        }>;
        /** The opaque cursor for the next page, or an empty string at the end. */
        nextCursor: string;
      };
    };
    /** Atomically update, insert or delete BlockNote blocks by ID without replacing the article. Updates merge properties and replace only explicitly supplied block content, preserving other blocks, children, images and formatting. Operations run in order; a missing ID or invalid operation rolls back the entire batch. Requires format version 3 and the expected revision. Retry with identical saveId, revision and operations. Saves a draft; does not publish. */
    "oomol_rag.patch_article_blocks": {
      input: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
        /**
         * The revision returned by get_article or the most recent save. A conflict requires reading and reconciling the latest article, never blindly overwriting it.
         * @minimum 1
         */
        revision: number;
        /**
         * Stable patch-operation ID. Reuse it only for retries with the same original revision and operations.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        saveId: string;
        /**
         * Ordered operations applied in one transaction, incrementing the revision once.
         * @minItems 1
         * @maxItems 100
         */
        operations: Array<Record<string, unknown> | {
          /** Insert blocks. */
          op: "insert";
          /** Sibling placement. */
          position: "before" | "after";
          /**
           * An existing BlockNote block ID from get_article, including nested blocks.
           * @minLength 1
           * @maxLength 128
           * @pattern \S
           */
          blockId: string;
          /**
           * Native BlockNote blocks to insert. Every new block and nested child must have a caller-stable ID unique within the article; IDs deleted in this batch cannot be reused.
           * @minItems 1
           * @maxItems 1000
           */
          blocks: Array<{
            /**
             * A stable new block ID.
             * @minLength 1
             * @maxLength 128
             * @pattern \S
             */
            id: string;
            /**
             * The native BlockNote block type.
             * @minLength 1
             * @pattern \S
             */
            type: string;
            [key: string]: unknown;
          }>;
        } | {
          /** Insert blocks. */
          op: "insert";
          /** Child or root placement. */
          position: "start" | "end";
          /**
           * An existing BlockNote block ID from get_article, including nested blocks.
           * @minLength 1
           * @maxLength 128
           * @pattern \S
           */
          parentId?: string;
          /**
           * Native BlockNote blocks to insert. Every new block and nested child must have a caller-stable ID unique within the article; IDs deleted in this batch cannot be reused.
           * @minItems 1
           * @maxItems 1000
           */
          blocks: Array<{
            /**
             * A stable new block ID.
             * @minLength 1
             * @maxLength 128
             * @pattern \S
             */
            id: string;
            /**
             * The native BlockNote block type.
             * @minLength 1
             * @pattern \S
             */
            type: string;
            [key: string]: unknown;
          }>;
        } | {
          /** Delete a block subtree. */
          op: "delete";
          /**
           * An existing BlockNote block ID from get_article, including nested blocks.
           * @minLength 1
           * @maxLength 128
           * @pattern \S
           */
          blockId: string;
        }>;
      };
      output: {
        /** A knowledge article and its independent draft and indexed revisions. */
        article: {
          /** The article identifier. */
          id: string;
          /** The article title. */
          title: string;
          /** The stored editor format version. */
          formatVersion: number;
          /** Stored editor content. Version 3 is BlockNote; older versions may contain a legacy doc. Do not treat legacy content as BlockNote. */
          content?: Record<string, unknown>;
          /** The current draft revision. */
          revision: number;
          /**
           * The revision currently used by retrieval.
           * @minimum 0
           */
          indexedRevision: number;
          /**
           * The revision targeted by the latest publication.
           * @minimum 0
           */
          syncRevision: number;
          /** The index synchronization status. */
          syncStatus: "draft" | "syncing" | "ready" | "failed" | "uncertain";
          /** Synchronization error, when present. */
          syncError?: string;
          /** Original file identifier, for converted articles. */
          sourceFileId?: string;
          /** Original file name. */
          sourceFilename?: string;
          /** Warnings produced by file conversion. */
          conversionWarnings?: Array<string>;
          /**
           * Creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Publish an exact saved revision to the knowledge base, replacing its previous index asynchronously. Retry uncertain transport outcomes with the same publishId and revision. Stop and inspect failed or uncertain synchronization states. */
    "oomol_rag.publish_article": {
      input: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
        /**
         * The revision returned by get_article or the most recent save. A conflict requires reading and reconciling the latest article, never blindly overwriting it.
         * @minimum 1
         */
        revision: number;
        /**
         * Stable publication-operation ID; reuse for retries of this publication.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        publishId: string;
      };
      output: {
        /** A knowledge article and its independent draft and indexed revisions. */
        article: {
          /** The article identifier. */
          id: string;
          /** The article title. */
          title: string;
          /** The stored editor format version. */
          formatVersion: number;
          /** Stored editor content. Version 3 is BlockNote; older versions may contain a legacy doc. Do not treat legacy content as BlockNote. */
          content?: Record<string, unknown>;
          /** The current draft revision. */
          revision: number;
          /**
           * The revision currently used by retrieval.
           * @minimum 0
           */
          indexedRevision: number;
          /**
           * The revision targeted by the latest publication.
           * @minimum 0
           */
          syncRevision: number;
          /** The index synchronization status. */
          syncStatus: "draft" | "syncing" | "ready" | "failed" | "uncertain";
          /** Synchronization error, when present. */
          syncError?: string;
          /** Original file identifier, for converted articles. */
          sourceFileId?: string;
          /** Original file name. */
          sourceFilename?: string;
          /** Warnings produced by file conversion. */
          conversionWarnings?: Array<string>;
          /**
           * Creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Retrieve the most relevant text chunks from the current OOMOL team's knowledge base. */
    "oomol_rag.retrieve": {
      input: {
        /**
         * The retrieval query.
         * @minLength 1
         * @maxLength 8000
         */
        query: string;
        /**
         * The maximum number of chunks to return.
         * @minimum 1
         * @maximum 20
         * @default 5
         */
        topK?: number;
        /** Whether to rerank candidate chunks. Omitted or null uses the service default of true. */
        enableReranking?: boolean | null;
      };
      output: {
        /** The retrieval request identifier. */
        requestId: string;
        /** The relevant text chunks. */
        items: Array<{
          /** The editable source article identifier, when the hit belongs to an article. */
          articleId?: string;
          /** The source file identifier. */
          fileId: string;
          /** The source file name. */
          filename: string;
          /** The retrieved text chunk. */
          text: string;
          /** The retrieval relevance score. */
          score: number;
        }>;
      };
    };
    /** Save BlockNote content and title with optimistic revision checking. This only saves a draft; publish_article updates retrieval. Retry an uncertain request with the identical saveId, revision and body. */
    "oomol_rag.save_article_draft": {
      input: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
        /**
         * The revision returned by get_article or the most recent save. A conflict requires reading and reconciling the latest article, never blindly overwriting it.
         * @minimum 1
         */
        revision: number;
        /**
         * Stable save-operation ID; reuse only for retries of this exact save.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        saveId: string;
        /**
         * The article title.
         * @minLength 1
         * @maxLength 200
         * @pattern \S
         */
        title: string;
        /** Native BlockNote content (format version 3). Read an existing article before editing; preserve unsupported blocks and IDs. */
        content: {
          /** The native document type. */
          type: "blocknote";
          /**
           * BlockNote blocks with type, props, content and children as appropriate. The service validates block types and private asset references.
           * @maxItems 20000
           */
          blocks: Array<Record<string, unknown>>;
        };
      };
      output: {
        /** A knowledge article and its independent draft and indexed revisions. */
        article: {
          /** The article identifier. */
          id: string;
          /** The article title. */
          title: string;
          /** The stored editor format version. */
          formatVersion: number;
          /** Stored editor content. Version 3 is BlockNote; older versions may contain a legacy doc. Do not treat legacy content as BlockNote. */
          content?: Record<string, unknown>;
          /** The current draft revision. */
          revision: number;
          /**
           * The revision currently used by retrieval.
           * @minimum 0
           */
          indexedRevision: number;
          /**
           * The revision targeted by the latest publication.
           * @minimum 0
           */
          syncRevision: number;
          /** The index synchronization status. */
          syncStatus: "draft" | "syncing" | "ready" | "failed" | "uncertain";
          /** Synchronization error, when present. */
          syncError?: string;
          /** Original file identifier, for converted articles. */
          sourceFileId?: string;
          /** Original file name. */
          sourceFilename?: string;
          /** Warnings produced by file conversion. */
          conversionWarnings?: Array<string>;
          /**
           * Creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Replace the entire article body and title from Markdown, saving a BlockNote draft at the expected revision. This is full replacement, not append or patch; blocks and private images absent from Markdown are removed from the draft. Read and reconcile before saving; on 409 never blindly retry with a new revision. Does not publish. */
    "oomol_rag.save_article_markdown": {
      input: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
        /**
         * The revision returned by get_article or the most recent save. A conflict requires reading and reconciling the latest article, never blindly overwriting it.
         * @minimum 1
         */
        revision: number;
        /**
         * Stable save-operation ID. Reuse the same ID and exact payload after an uncertain result.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        saveId: string;
        /**
         * The article title.
         * @minLength 1
         * @maxLength 200
         * @pattern \S
         */
        title: string;
        /**
         * Markdown source to convert to native BlockNote. Supports CommonMark and GFM headings, lists, task lists, tables, links and code. Empty input clears the body. HTML remains literal text; standalone HTTP(S) images become image blocks, inline images become links. Relative or unsafe URLs remain literal text with warnings. No remote content is fetched.
         * @maxLength 200000
         */
        markdown: string;
      };
      output: {
        /** A knowledge article and its independent draft and indexed revisions. */
        article: {
          /** The article identifier. */
          id: string;
          /** The article title. */
          title: string;
          /** The stored editor format version. */
          formatVersion: number;
          /** Stored editor content. Version 3 is BlockNote; older versions may contain a legacy doc. Do not treat legacy content as BlockNote. */
          content?: Record<string, unknown>;
          /** The current draft revision. */
          revision: number;
          /**
           * The revision currently used by retrieval.
           * @minimum 0
           */
          indexedRevision: number;
          /**
           * The revision targeted by the latest publication.
           * @minimum 0
           */
          syncRevision: number;
          /** The index synchronization status. */
          syncStatus: "draft" | "syncing" | "ready" | "failed" | "uncertain";
          /** Synchronization error, when present. */
          syncError?: string;
          /** Original file identifier, for converted articles. */
          sourceFileId?: string;
          /** Original file name. */
          sourceFilename?: string;
          /** Warnings produced by file conversion. */
          conversionWarnings?: Array<string>;
          /**
           * Creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
        /** Conversion warning codes describing content preserved as text or simplified; review them before publishing. */
        warnings: Array<string>;
      };
    };
    /** Upload a publicly reachable file URL to the current OOMOL team's knowledge base and start asynchronous indexing. */
    "oomol_rag.upload_file": {
      input: {
        /**
         * A publicly reachable HTTP or HTTPS URL for the file.
         * @format uri
         */
        fileUrl: string;
        /**
         * The file name, including a supported extension. The URL path name is used when omitted.
         * @minLength 1
         * @maxLength 200
         */
        filename?: string;
        /**
         * A stable key for safely retrying the same upload. A UUIDv7 key is generated when omitted.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        idempotencyKey?: string;
      };
      output: {
        /** A file managed by the current OOMOL team's knowledge base. */
        file: {
          /** The file identifier. */
          id: string;
          /** The file name. */
          name: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /** The current file processing status. */
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted" | "retiring_index" | "retiring_file" | "archived";
          /** The article created from this source file. */
          convertedArticleId?: string;
          /** Whether the article replaced the original file index. */
          indexReplaced?: boolean;
          /** File-to-article conversion status. */
          conversionStatus?: string;
          /** File-to-article conversion error. */
          conversionError?: string;
          /** The processing error code when the file failed. */
          errorCode?: string;
          /**
           * The file creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * The file update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Poll the latest article publication once. Ready means its syncRevision is indexed; a newer draft can still be unpublished. Compare syncRevision with your requested revision when tracking a particular publication. */
    "oomol_rag.wait_for_article_ready": {
      input: {
        /**
         * The article identifier. Use the same ID for retries of the same creation intent.
         * @minLength 1
         * @maxLength 64
         * @pattern ^[A-Za-z0-9_-]+$
         */
        articleId: string;
      };
      output: {
        /** A knowledge article and its independent draft and indexed revisions. */
        article: {
          /** The article identifier. */
          id: string;
          /** The article title. */
          title: string;
          /** The stored editor format version. */
          formatVersion: number;
          /** Stored editor content. Version 3 is BlockNote; older versions may contain a legacy doc. Do not treat legacy content as BlockNote. */
          content?: Record<string, unknown>;
          /** The current draft revision. */
          revision: number;
          /**
           * The revision currently used by retrieval.
           * @minimum 0
           */
          indexedRevision: number;
          /**
           * The revision targeted by the latest publication.
           * @minimum 0
           */
          syncRevision: number;
          /** The index synchronization status. */
          syncStatus: "draft" | "syncing" | "ready" | "failed" | "uncertain";
          /** Synchronization error, when present. */
          syncError?: string;
          /** Original file identifier, for converted articles. */
          sourceFileId?: string;
          /** Original file name. */
          sourceFilename?: string;
          /** Warnings produced by file conversion. */
          conversionWarnings?: Array<string>;
          /**
           * Creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * Last update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Get a file's deletion state while waiting for deletion to finish. */
    "oomol_rag.wait_for_file_deleted": {
      input: {
        /**
         * The file identifier.
         * @minLength 1
         * @pattern \S
         */
        fileId: string;
      };
      output: {
        /** A file managed by the current OOMOL team's knowledge base. */
        file: {
          /** The file identifier. */
          id: string;
          /** The file name. */
          name: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /** The current file processing status. */
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted" | "retiring_index" | "retiring_file" | "archived";
          /** The article created from this source file. */
          convertedArticleId?: string;
          /** Whether the article replaced the original file index. */
          indexReplaced?: boolean;
          /** File-to-article conversion status. */
          conversionStatus?: string;
          /** File-to-article conversion error. */
          conversionError?: string;
          /** The processing error code when the file failed. */
          errorCode?: string;
          /**
           * The file creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * The file update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
    /** Get a file's ingestion state while waiting for it to become searchable. */
    "oomol_rag.wait_for_file_ready": {
      input: {
        /**
         * The file identifier.
         * @minLength 1
         * @pattern \S
         */
        fileId: string;
      };
      output: {
        /** A file managed by the current OOMOL team's knowledge base. */
        file: {
          /** The file identifier. */
          id: string;
          /** The file name. */
          name: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          sizeBytes: number;
          /** The current file processing status. */
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted" | "retiring_index" | "retiring_file" | "archived";
          /** The article created from this source file. */
          convertedArticleId?: string;
          /** Whether the article replaced the original file index. */
          indexReplaced?: boolean;
          /** File-to-article conversion status. */
          conversionStatus?: string;
          /** File-to-article conversion error. */
          conversionError?: string;
          /** The processing error code when the file failed. */
          errorCode?: string;
          /**
           * The file creation timestamp.
           * @format date-time
           */
          createdAt: string;
          /**
           * The file update timestamp.
           * @format date-time
           */
          updatedAt: string;
        };
      };
    };
  }
}
