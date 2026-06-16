import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve detailed metadata and parsed data for a Parseur document. */
    "parseur.get_document": {
      input: {
        /**
         * Parseur document identifier.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** Detailed Parseur document metadata and parsed data. */
        document: {
          /** Parseur document identifier. */
          id: number;
          /** Document name returned by Parseur. */
          name: string;
          /** Parseur mailbox identifier that owns the document. */
          parser: number;
          /** Parseur document processing status. */
          status: "INCOMING" | "ANALYZING" | "PROGRESS" | "PARSEDOK" | "PARSEDKO" | "QUOTAEXC" | "SKIPPED" | "SPLIT" | "EXPORTKO" | "TRANSKO" | "INVALID";
          /** Source that produced the document status. */
          status_source: string | null;
          /**
           * Timestamp when Parseur received the document.
           * @format date-time
           */
          received: string | null;
          /**
           * Timestamp when Parseur processed the document.
           * @format date-time
           */
          processed: string | null;
          /**
           * URL for the original document.
           * @format uri
           */
          original_document_url: string | null;
          /**
           * URL for the parsed JSON result.
           * @format uri
           */
          json_download_url: string | null;
          /**
           * URL for the parsed CSV result.
           * @format uri
           */
          csv_download_url: string | null;
          /**
           * URL for the parsed XLS result.
           * @format uri
           */
          xls_download_url: string | null;
          /** Parsed result returned by Parseur. */
          result: unknown;
          /** Text content returned by Parseur when available. */
          content: string | null;
          /** Next document identifier when available. */
          next_id: number | null;
          /** Previous document identifier when available. */
          prev_id: number | null;
          /** Raw document object returned by Parseur. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve detailed metadata for a Parseur mailbox. */
    "parseur.get_mailbox": {
      input: {
        /**
         * Parseur mailbox identifier.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** Detailed Parseur mailbox metadata. */
        mailbox: {
          /** Parseur mailbox identifier. */
          id: number;
          /** Parseur mailbox display name. */
          name: string;
          /** Email prefix assigned to the mailbox. */
          email_prefix: string;
          /** Number of documents in the mailbox. */
          document_count: number;
          /** Number of templates in the mailbox. */
          template_count: number;
          /** Number of webhooks attached to the mailbox. */
          webhook_count: number;
          /**
           * Last activity timestamp for the mailbox.
           * @format date-time
           */
          last_activity: string | null;
          /** Default timezone configured for the mailbox. */
          default_timezone: string | null;
          /** Relative CSV download path returned by Parseur. */
          csv_download: string | null;
          /** Relative JSON download path returned by Parseur. */
          json_download: string | null;
          /** Relative XLS download path returned by Parseur. */
          xls_download: string | null;
          /** Document counts grouped by Parseur processing status. */
          document_per_status_count: {
            /** Number of incoming documents. */
            INCOMING: number;
            /** Number of documents being analyzed. */
            ANALYZING: number;
            /** Number of documents being processed. */
            PROGRESS: number;
            /** Number of successfully processed documents. */
            PARSEDOK: number;
            /** Number of documents that failed parsing. */
            PARSEDKO: number;
            /** Number of documents blocked by quota limits. */
            QUOTAEXC: number;
            /** Number of skipped documents. */
            SKIPPED: number;
            /** Number of split documents. */
            SPLIT: number;
            /** Number of deleted documents when returned by Parseur. */
            DELETED: number;
            /** Number of documents that failed export. */
            EXPORTKO: number;
            /** Number of documents that failed post-processing. */
            TRANSKO: number;
            /** Number of invalid documents. */
            INVALID: number;
          };
          /** Raw mailbox object returned by Parseur. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retrieve the parsed result JSON Schema for a Parseur mailbox. */
    "parseur.get_mailbox_schema": {
      input: {
        /**
         * Parseur mailbox identifier.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** JSON Schema returned by Parseur for the mailbox fields. */
        schema: Record<string, unknown>;
      };
    };
    /** List documents in a Parseur mailbox with pagination and filters. */
    "parseur.list_mailbox_documents": {
      input: {
        /**
         * Parseur mailbox identifier.
         * @minimum 1
         */
        id: number;
        /**
         * Page number for Parseur pagination. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page returned by Parseur.
         * @minimum 1
         */
        page_size?: number;
        /**
         * Case-insensitive partial match search string.
         * @minLength 1
         */
        search?: string;
        /** Field used to order Parseur documents. */
        ordering?: "name" | "-name" | "created" | "-created" | "processed" | "-processed" | "status" | "-status";
        /**
         * Only include documents received after this date.
         * @format date
         */
        received_after?: string;
        /**
         * Only include documents received before this date.
         * @format date
         */
        received_before?: string;
        /** Parseur document processing status. */
        status?: "INCOMING" | "ANALYZING" | "PROGRESS" | "PARSEDOK" | "PARSEDKO" | "QUOTAEXC" | "SKIPPED" | "SPLIT" | "EXPORTKO" | "TRANSKO" | "INVALID";
        /**
         * Timezone used by Parseur for date filters.
         * @minLength 1
         */
        tz?: string;
        /** Whether Parseur should include parsed result strings. */
        with_result?: boolean;
      };
      output: {
        /** Pagination metadata returned by Parseur. */
        meta: {
          /** Total number of results across all pages. */
          count: number;
          /** Current page number returned by Parseur. */
          current: number;
          /** Total number of pages returned by Parseur. */
          total: number;
        };
        /** Documents returned by Parseur. */
        documents: Array<{
          /** Parseur document identifier. */
          id: number;
          /** Document name returned by Parseur. */
          name: string;
          /** Parseur mailbox identifier that owns the document. */
          parser: number;
          /** Parseur document processing status. */
          status: "INCOMING" | "ANALYZING" | "PROGRESS" | "PARSEDOK" | "PARSEDKO" | "QUOTAEXC" | "SKIPPED" | "SPLIT" | "EXPORTKO" | "TRANSKO" | "INVALID";
          /** Source that produced the document status. */
          status_source: string | null;
          /**
           * Timestamp when Parseur received the document.
           * @format date-time
           */
          received: string | null;
          /**
           * Timestamp when Parseur processed the document.
           * @format date-time
           */
          processed: string | null;
          /**
           * URL for the original document.
           * @format uri
           */
          original_document_url: string | null;
          /**
           * URL for the parsed JSON result.
           * @format uri
           */
          json_download_url: string | null;
          /**
           * URL for the parsed CSV result.
           * @format uri
           */
          csv_download_url: string | null;
          /**
           * URL for the parsed XLS result.
           * @format uri
           */
          xls_download_url: string | null;
          /** Raw document object returned by Parseur. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List Parseur mailboxes with pagination, search, and ordering filters. */
    "parseur.list_mailboxes": {
      input: {
        /**
         * Page number for Parseur pagination. Defaults to 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page returned by Parseur.
         * @minimum 1
         */
        page_size?: number;
        /**
         * Case-insensitive partial match search string.
         * @minLength 1
         */
        search?: string;
        /** Field used to order Parseur mailboxes. */
        ordering?: "name" | "-name" | "document_count" | "-document_count" | "template_count" | "-template_count" | "PARSEDOK_count" | "-PARSEDOK_count" | "PARSEDKO_count" | "-PARSEDKO_count" | "QUOTAEXC_count" | "-QUOTAEXC_count" | "EXPORTKO_count" | "-EXPORTKO_count" | "TRANSKO_count" | "-TRANSKO_count";
      };
      output: {
        /** Pagination metadata returned by Parseur. */
        meta: {
          /** Total number of results across all pages. */
          count: number;
          /** Current page number returned by Parseur. */
          current: number;
          /** Total number of pages returned by Parseur. */
          total: number;
        };
        /** Mailboxes returned by Parseur. */
        mailboxes: Array<{
          /** Parseur mailbox identifier. */
          id: number;
          /** Parseur mailbox display name. */
          name: string;
          /** Email prefix assigned to the mailbox. */
          email_prefix: string;
          /** Number of documents in the mailbox. */
          document_count: number;
          /** Number of templates in the mailbox. */
          template_count: number;
          /**
           * Last activity timestamp for the mailbox.
           * @format date-time
           */
          last_activity: string | null;
          /** Document counts grouped by Parseur processing status. */
          document_per_status_count: {
            /** Number of incoming documents. */
            INCOMING: number;
            /** Number of documents being analyzed. */
            ANALYZING: number;
            /** Number of documents being processed. */
            PROGRESS: number;
            /** Number of successfully processed documents. */
            PARSEDOK: number;
            /** Number of documents that failed parsing. */
            PARSEDKO: number;
            /** Number of documents blocked by quota limits. */
            QUOTAEXC: number;
            /** Number of skipped documents. */
            SKIPPED: number;
            /** Number of split documents. */
            SPLIT: number;
            /** Number of deleted documents when returned by Parseur. */
            DELETED: number;
            /** Number of documents that failed export. */
            EXPORTKO: number;
            /** Number of documents that failed post-processing. */
            TRANSKO: number;
            /** Number of invalid documents. */
            INVALID: number;
          };
          /** Raw mailbox object returned by Parseur. */
          raw: Record<string, unknown>;
        }>;
      };
    };
  }
}
