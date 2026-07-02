import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get extracted data records for one AlgoDocs document ID. */
    "algo_docs.get_extracted_data_by_document": {
      input: {
        /**
         * The AlgoDocs document ID returned by document import.
         * @exclusiveMinimum 0
         */
        documentId: number;
      };
      output: {
        /** Extracted records returned by AlgoDocs. */
        records: Array<{
          /**
           * The AlgoDocs resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The AlgoDocs document ID for this extracted record.
           * @exclusiveMinimum 0
           */
          documentId: number;
          /** The document upload timestamp returned by AlgoDocs. */
          uploadedAt?: string;
          /** The processing timestamp returned by AlgoDocs. */
          processedAt?: string;
          /** The original uploaded file name. */
          fileName?: string;
          /** The AlgoDocs folder ID for this record. */
          folderId?: string;
          /**
           * The URL for the original uploaded document.
           * @format uri
           */
          mediaOriginal?: string;
          /**
           * The URL for the Excel export when returned by AlgoDocs.
           * @format uri
           */
          mediaExcel?: string;
          /**
           * The URL for the JSON export when returned by AlgoDocs.
           * @format uri
           */
          mediaJson?: string;
          /**
           * The URL for the XML export when returned by AlgoDocs.
           * @format uri
           */
          mediaXml?: string;
          /** The total page count returned by AlgoDocs. */
          totalPages?: number;
          /** The page number represented by this record. */
          pageNumber?: number;
          /** The extracted fields produced by the AlgoDocs extractor. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw array returned by AlgoDocs. */
        raw: Array<unknown>;
      };
    };
    /** Get the AlgoDocs account identity for the connected API key. */
    "algo_docs.get_me": {
      input: Record<string, never>;
      output: {
        /** The full name returned by AlgoDocs. */
        fullName: string | null;
        /**
         * The email address returned by AlgoDocs.
         * @format email
         */
        email: string | null;
        /** The raw object returned by AlgoDocs. */
        raw: Record<string, unknown>;
      };
    };
    /** List extracted data records for an AlgoDocs extractor, optionally filtered by folder, limit, and upload date. */
    "algo_docs.list_extracted_data": {
      input: {
        /**
         * The AlgoDocs resource ID.
         * @minLength 1
         */
        extractorId: string;
        /**
         * The AlgoDocs resource ID.
         * @minLength 1
         */
        folderId?: string;
        /**
         * The maximum number of extracted data records to return.
         * @minimum 1
         * @maximum 10000
         */
        limit?: number;
        /**
         * Only return records uploaded after this AlgoDocs local ISO 8601 combined date-time, for example 2017-06-21T10:45:52.
         * @minLength 1
         */
        date?: string;
      };
      output: {
        /** Extracted records returned by AlgoDocs. */
        records: Array<{
          /**
           * The AlgoDocs resource ID.
           * @minLength 1
           */
          id: string;
          /**
           * The AlgoDocs document ID for this extracted record.
           * @exclusiveMinimum 0
           */
          documentId: number;
          /** The document upload timestamp returned by AlgoDocs. */
          uploadedAt?: string;
          /** The processing timestamp returned by AlgoDocs. */
          processedAt?: string;
          /** The original uploaded file name. */
          fileName?: string;
          /** The AlgoDocs folder ID for this record. */
          folderId?: string;
          /**
           * The URL for the original uploaded document.
           * @format uri
           */
          mediaOriginal?: string;
          /**
           * The URL for the Excel export when returned by AlgoDocs.
           * @format uri
           */
          mediaExcel?: string;
          /**
           * The URL for the JSON export when returned by AlgoDocs.
           * @format uri
           */
          mediaJson?: string;
          /**
           * The URL for the XML export when returned by AlgoDocs.
           * @format uri
           */
          mediaXml?: string;
          /** The total page count returned by AlgoDocs. */
          totalPages?: number;
          /** The page number represented by this record. */
          pageNumber?: number;
          /** The extracted fields produced by the AlgoDocs extractor. */
          data?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The raw array returned by AlgoDocs. */
        raw: Array<unknown>;
      };
    };
    /** List document data extractors in the connected AlgoDocs account. */
    "algo_docs.list_extractors": {
      input: Record<string, never>;
      output: {
        /** Extractors returned by AlgoDocs. */
        extractors: Array<{
          /**
           * The AlgoDocs resource ID.
           * @minLength 1
           */
          id: string;
          /** The AlgoDocs extractor name. */
          name: string;
          [key: string]: unknown;
        }>;
        /** The raw array returned by AlgoDocs. */
        raw: Array<unknown>;
      };
    };
    /** List folders in the connected AlgoDocs file manager. */
    "algo_docs.list_folders": {
      input: Record<string, never>;
      output: {
        /** Folders returned by AlgoDocs. */
        folders: Array<{
          /**
           * The AlgoDocs resource ID.
           * @minLength 1
           */
          id: string;
          /** The parent AlgoDocs folder ID, or null for root. */
          parentId: string | null;
          /** The AlgoDocs folder name. */
          name: string;
          [key: string]: unknown;
        }>;
        /** The raw array returned by AlgoDocs. */
        raw: Array<unknown>;
      };
    };
    /** Import a publicly accessible document URL into AlgoDocs for an extractor and folder. */
    "algo_docs.upload_document_from_url": {
      input: {
        /**
         * The AlgoDocs resource ID.
         * @minLength 1
         */
        extractorId: string;
        /**
         * The AlgoDocs resource ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * The publicly accessible document URL that AlgoDocs should fetch.
         * @format uri
         */
        fileUrl: string;
      };
      output: {
        /** An AlgoDocs imported document. */
        document: {
          /**
           * The AlgoDocs document ID.
           * @exclusiveMinimum 0
           */
          id: number;
          /** The uploaded document file size in bytes. */
          fileSize: number;
          /** The uploaded document MD5 checksum. */
          fileMD5CheckSum: string;
          /** The document upload timestamp returned by AlgoDocs. */
          uploadedAt: string;
          [key: string]: unknown;
        };
        /** The raw object returned by AlgoDocs. */
        raw: Record<string, unknown>;
      };
    };
  }
}
