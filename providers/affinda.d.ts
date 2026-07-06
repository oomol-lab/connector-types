import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Upload a document to Affinda from a URL and optionally wait for parsing results. */
    "affinda.create_document_from_url": {
      input: {
        /**
         * The publicly reachable document URL for Affinda to download and parse.
         * @minLength 1
         * @format uri
         */
        url: string;
        /**
         * The Affinda workspace identifier to upload the document to.
         * @minLength 1
         */
        workspace: string;
        /**
         * The Affinda document type identifier when the document type is already known.
         * @minLength 1
         */
        documentType?: string;
        /** Whether Affinda should wait for parsing to complete before responding. */
        wait?: boolean;
        /**
         * An optional user-defined identifier for tracking the document in Affinda.
         * @minLength 1
         */
        customIdentifier?: string;
        /**
         * The filename Affinda should associate with this document.
         * @minLength 1
         */
        fileName?: string;
        /**
         * The ISO 8601 time when Affinda should automatically delete the document.
         * @format date-time
         */
        expiryTime?: string;
        /**
         * The document language code to send to Affinda.
         * @minLength 1
         */
        language?: string;
        /** Whether Affinda should reject duplicate documents without consuming credits. */
        rejectDuplicates?: boolean;
        /** Whether Affinda should process this document as low priority. */
        lowPriority?: boolean;
        /** Whether Affinda should return a compact parse result when wait is true. */
        compact?: boolean;
        /** Whether Affinda should delete stored data after parsing. Only use with wait true. */
        deleteAfterParse?: boolean;
        /** Whether the document should be viewable in the Affinda Validation Tool. */
        enableValidationTool?: boolean;
        /** Whether Affinda should force OCR for this document. */
        useOcr?: boolean;
        /**
         * Optional hint inserted into Affinda's LLM prompt.
         * @minLength 1
         */
        llmHint?: string;
      };
      output: {
        /** The Affinda document payload, including meta data and extracted data when returned. */
        document: Record<string, unknown>;
      };
    };
    /** Get one Affinda document by identifier. */
    "affinda.get_document": {
      input: {
        /**
         * The Affinda document identifier.
         * @minLength 1
         */
        identifier: string;
        /** Whether Affinda should return compact parsed data. */
        compact?: boolean;
      };
      output: {
        /** The Affinda document payload, including meta data and extracted data when returned. */
        document: Record<string, unknown>;
      };
    };
    /** List Affinda document types available to the API key. */
    "affinda.list_document_types": {
      input: {
        /**
         * Filter document types by Affinda organization identifier.
         * @minLength 1
         */
        organization?: string;
        /**
         * Filter document types by Affinda workspace identifier.
         * @minLength 1
         */
        workspace?: string;
      };
      output: {
        /** Document types returned by Affinda. */
        documentTypes: Array<{
          /** The Affinda document type identifier. */
          identifier?: string;
          /** The Affinda document type name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Affinda documents with optional workflow and pagination filters. */
    "affinda.list_documents": {
      input: {
        /**
         * The number of documents to skip before collecting results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The number of documents to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Filter by Affinda workspace identifier.
         * @minLength 1
         */
        workspace?: string;
        /** Filter by the Affinda document state. */
        state?: "uploaded" | "review" | "validated" | "archived" | "rejected";
        /**
         * Filter by Affinda tag IDs.
         * @minItems 1
         */
        tags?: Array<number>;
        /**
         * Match document file names or tag names case-insensitively.
         * @minLength 1
         */
        search?: string;
        /** Whether Affinda should include parsed data summaries in the list. */
        includeData?: boolean;
        /** Filter by failed processing status. */
        failed?: boolean;
        /** Filter by ready processing status. */
        ready?: boolean;
        /** Filter to documents that can be validated. */
        validatable?: boolean;
        /**
         * Filter documents by the custom identifier set at upload.
         * @minLength 1
         */
        customIdentifier?: string;
        /** Whether Affinda should return compact parsed data. */
        compact?: boolean;
      };
      output: {
        /** Documents returned by Affinda. */
        documents: Array<Record<string, unknown>>;
        /**
         * The number of documents in the Affinda result set.
         * @minimum 0
         */
        count: number;
        /** A URL for another page of Affinda results, or null when absent. */
        next: string | null;
        /** A URL for another page of Affinda results, or null when absent. */
        previous: string | null;
      };
    };
    /** List Affinda organizations available to the connected API key. */
    "affinda.list_organizations": {
      input: Record<string, never>;
      output: {
        /** Organizations returned by Affinda. */
        organizations: Array<{
          /** The Affinda organization identifier. */
          identifier?: string;
          /** The Affinda organization name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Affinda workspaces in an organization. */
    "affinda.list_workspaces": {
      input: {
        /**
         * The Affinda organization identifier to list workspaces for.
         * @minLength 1
         */
        organization: string;
        /**
         * Only return workspaces whose name matches this value.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** Workspaces returned by Affinda. */
        workspaces: Array<{
          /** The Affinda workspace identifier. */
          identifier?: string;
          /** The Affinda workspace name. */
          name?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
