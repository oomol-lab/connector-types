import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted";
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
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted";
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
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted";
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
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted";
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
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted";
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
          status: "queued" | "upload_sending" | "parsing" | "parsed" | "index_sending" | "indexing" | "mapping" | "ready" | "failed" | "uncertain" | "deleting" | "deleted";
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
