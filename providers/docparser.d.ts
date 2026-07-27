import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Queue a publicly accessible document URL for import into a Docparser parser and return the scheduled document metadata. */
    "docparser.fetch_document_from_url": {
      input: {
        /**
         * The parser identifier to import the document into.
         * @minLength 1
         */
        parserId: string;
        /**
         * The publicly accessible document URL to fetch.
         * @minLength 1
         */
        url: string;
        /**
         * An optional passthrough ID that is stored with the fetched document.
         * @minLength 1
         */
        remoteId?: string;
      };
      output: {
        /** The unique identifier of the fetched document. */
        documentId: string;
        /** The parser identifier the document was queued against. */
        parserId: string;
        /** The passthrough remote ID returned by Docparser. */
        remoteId?: string | null;
        /** The upstream status message, which usually contains a status URL. */
        message: string;
      };
    };
    /** Retrieve the parsed data of one Docparser document. When child documents exist and are included, multiple result rows may be returned. */
    "docparser.get_document_result": {
      input: {
        /**
         * The parser identifier that owns the document.
         * @minLength 1
         */
        parserId: string;
        /**
         * The unique document identifier returned during import.
         * @minLength 1
         */
        documentId: string;
        /** The output format for parsed data. `object` returns nested JSON and `flat` returns flattened key/value pairs. */
        format?: "object" | "flat";
        /** Whether parsed data of child documents should also be returned. */
        includeChildren?: boolean;
      };
      output: {
        /** The parsed result rows returned by Docparser for the requested document. */
        results: Array<{
          /** The unique identifier of the parsed result. */
          id: string;
          /** The unique identifier of the source document. */
          documentId: string;
          /** The passthrough remote ID associated with the document. */
          remoteId?: string | null;
          /** The original file name of the source document. */
          fileName?: string | null;
          /** The standard Docparser media link for the document. */
          mediaLink?: string | null;
          /** The original-file media link for the document. */
          mediaLinkOriginal?: string | null;
          /** The parsed-data media link for the document. */
          mediaLinkData?: string | null;
          /** The page count of the parsed document. */
          pageCount?: number | null;
          /** The ISO 8601 timestamp when the document was uploaded. */
          uploadedAt?: string | null;
          /** The ISO 8601 timestamp when the document finished processing. */
          processedAt?: string | null;
          /** The custom parsed fields returned by the parser for this document. */
          parsedData: Record<string, unknown>;
          /** The full raw result payload returned by Docparser. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Retrieve the import, preprocessing, parsing, and webhook-dispatch status of one Docparser document. */
    "docparser.get_document_status": {
      input: {
        /**
         * The parser identifier that owns the document.
         * @minLength 1
         */
        parserId: string;
        /**
         * The unique document identifier returned during import.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** The normalized status payload returned by Docparser. */
        status: {
          /** The document token returned by Docparser. */
          token: string;
          /** The passthrough remote ID linked to the document. */
          remoteId?: string | null;
          /** The import source reported by Docparser, such as `api`. */
          fileSource?: string | null;
          /** The original file name reported by Docparser. */
          filename?: string | null;
          /** The detected MIME type of the document. */
          mimeType?: string | null;
          /** The page count reported by Docparser. */
          pages: number;
          /** Whether the file type is supported by Docparser. */
          supported: boolean;
          /** Whether the document import is still running. */
          importingInProgress: boolean;
          /** Whether the parser is still processing the document. */
          processingInProgress: boolean;
          /** Whether webhook dispatch is still running. */
          webhookDispatchingInProgress: boolean;
          /** The Unix timestamp in seconds when the document was uploaded. */
          uploadedAt: number;
          /** The Unix timestamp in seconds when the document import finished. */
          importedAt: number;
          /** The Unix timestamp in seconds when OCR started. */
          ocrStartedAt: number;
          /** The Unix timestamp in seconds when preprocessing finished. */
          preprocessedAt: number;
          /** The Unix timestamp in seconds when preprocessing started. */
          preprocessingInProgressAt: number;
          /** The Unix timestamp in seconds when parsing completed. */
          processedAt: number;
          /** The Unix timestamp in seconds when parsing first completed. */
          firstProcessedAt: number;
          /** Whether a webhook was dispatched successfully. */
          dispatchedWebhook: boolean;
          /** The Unix timestamp in seconds when the webhook was dispatched. */
          dispatchedWebhookAt: number;
          /** Whether webhook dispatch encountered a problem. */
          dispatchedWebhookProblem: boolean;
          /** The number of queued webhooks created. */
          webhooksCreated: number;
          /** The number of webhooks successfully sent. */
          webhooksSent: number;
          /** The background jobs that failed for this document. */
          failedJobs: Array<string>;
          /** The raw document status payload returned by Docparser. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve parsed data for multiple documents of a specific parser with optional filtering, pagination, queue inclusion, and sorting. */
    "docparser.get_multiple_document_results": {
      input: {
        /**
         * The parser identifier to read results from.
         * @minLength 1
         */
        parserId: string;
        /** The output format for parsed data. `object` returns nested JSON and `flat` returns flattened key/value pairs. */
        format?: "object" | "flat";
        /** The upstream result list mode used to filter which documents are returned. */
        list?: "last_uploaded" | "uploaded_after" | "processed_after";
        /**
         * The maximum number of result rows to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /** The ISO 8601 or Unix timestamp filter used with `uploaded_after` or `processed_after` list modes. */
        date?: string;
        /**
         * Restrict results to documents with this remote ID.
         * @minLength 1
         */
        remoteId?: string;
        /** Whether in-progress documents should also be included in the result set. */
        includeProcessingQueue?: boolean;
        /** The timestamp field used to sort multiple-document results. */
        sortBy?: "parsed_at" | "processed_at" | "uploaded_at" | "first_processed_at" | "imported_at" | "integrated_at" | "dispatched_webhook_at" | "preprocessed_at";
        /** The sort direction used for multiple-document results. */
        sortOrder?: "ASC" | "DESC";
      };
      output: {
        /** The parsed result rows returned by Docparser. */
        results: Array<{
          /** The unique identifier of the parsed result. */
          id: string;
          /** The unique identifier of the source document. */
          documentId: string;
          /** The passthrough remote ID associated with the document. */
          remoteId?: string | null;
          /** The original file name of the source document. */
          fileName?: string | null;
          /** The standard Docparser media link for the document. */
          mediaLink?: string | null;
          /** The original-file media link for the document. */
          mediaLinkOriginal?: string | null;
          /** The parsed-data media link for the document. */
          mediaLinkData?: string | null;
          /** The page count of the parsed document. */
          pageCount?: number | null;
          /** The ISO 8601 timestamp when the document was uploaded. */
          uploadedAt?: string | null;
          /** The ISO 8601 timestamp when the document finished processing. */
          processedAt?: string | null;
          /** The custom parsed fields returned by the parser for this document. */
          parsedData: Record<string, unknown>;
          /** The full raw result payload returned by Docparser. */
          raw: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List all model layouts for a specific Docparser parser. */
    "docparser.get_parser_models": {
      input: {
        /**
         * The parser identifier to list model layouts for.
         * @minLength 1
         */
        parserId: string;
      };
      output: {
        /** The parser model layouts returned by Docparser. */
        models: Array<{
          /** The unique identifier of the parser model layout. */
          id: string;
          /** The human-readable label of the parser model layout. */
          label: string;
        }>;
      };
    };
    /** List all Document Parsers linked to the current Docparser account. */
    "docparser.list_parsers": {
      input: Record<string, never>;
      output: {
        /** The parsers returned by Docparser. */
        parsers: Array<{
          /** The unique identifier of the parser. */
          id: string;
          /** The human-readable parser label. */
          label: string;
        }>;
      };
    };
    /** Ping the Docparser API to verify that the provided API key is valid. */
    "docparser.ping": {
      input: Record<string, never>;
      output: {
        /** The upstream confirmation message. Docparser returns `pong`. */
        msg: string;
      };
    };
    /** Schedule one or more Docparser documents for the integration queue using their document IDs. */
    "docparser.reintegrate_documents": {
      input: {
        /**
         * The parser identifier that owns the documents.
         * @minLength 1
         */
        parserId: string;
        /**
         * The document identifiers to schedule for reintegration.
         * @minItems 1
         */
        documentIds: Array<string>;
      };
      output: {
        /** The number of documents Docparser scheduled for reintegration. */
        totalReintegrate: number;
        /** The upstream message returned by Docparser. */
        msg: string | null;
      };
    };
    /** Schedule one or more Docparser documents for re-parsing using their document IDs. */
    "docparser.reparse_documents": {
      input: {
        /**
         * The parser identifier that owns the documents.
         * @minLength 1
         */
        parserId: string;
        /**
         * The document identifiers to schedule for re-parsing.
         * @minItems 1
         */
        documentIds: Array<string>;
      };
      output: {
        /** The number of documents Docparser scheduled for re-parsing. */
        totalReparsed: number;
        /** The upstream message returned by Docparser. */
        msg: string | null;
      };
    };
    /** Upload a document to a Docparser parser by sending base64-encoded file content and an optional file name. */
    "docparser.upload_document_by_content": {
      input: {
        /**
         * The parser identifier to upload the document to.
         * @minLength 1
         */
        parserId: string;
        /**
         * The base64-encoded document content to upload.
         * @minLength 1
         */
        contentBase64: string;
        /**
         * The file name to attribute to the uploaded document.
         * @minLength 1
         */
        fileName?: string;
        /**
         * An optional passthrough ID that is stored with the document.
         * @minLength 1
         */
        remoteId?: string;
      };
      output: {
        /** The unique identifier of the imported document. */
        documentId: string;
        /** The imported file size in bytes when Docparser returns it. */
        fileSize?: number | null;
        /** The amount of account quota consumed by the import. */
        quotaUsed?: number | null;
        /** The remaining account quota after the import. */
        quotaLeft?: number | null;
        /** The ISO 8601 timestamp when the account quota refills. */
        quotaRefill?: string | null;
      };
    };
  }
}
