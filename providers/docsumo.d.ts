import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get Docsumo account details, monthly document quota usage, and the currently enabled document types. */
    "docsumo.get_account_info": {
      input: Record<string, never>;
      output: {
        /** The authenticated Docsumo account email address. */
        email: string | null;
        /** The authenticated Docsumo account full name. */
        fullName: string | null;
        /** The authenticated Docsumo user identifier. */
        userId: string | null;
        /** The number of documents processed in the current billing cycle. */
        monthlyDocCurrent: number | null;
        /** The document-processing limit for the current billing cycle. */
        monthlyDocLimit: number | null;
        /** The currently enabled document types available to the Docsumo account. */
        documentTypes: Array<{
          /**
           * The display name of the document type.
           * @minLength 1
           */
          title: string;
          /**
           * The stable document type identifier used in API requests.
           * @minLength 1
           */
          value: string;
        }>;
      };
    };
    /** Get Docsumo document detail metadata for one document, including page information and preview assets. */
    "docsumo.get_document_detail": {
      input: {
        /**
         * The Docsumo document identifier to retrieve.
         * @minLength 1
         */
        docId: string;
      };
      output: {
        /** One normalized Docsumo document detail payload. */
        document: {
          /** The upstream `document.data` payload returned by Docsumo. */
          data: Record<string, unknown>;
          /**
           * The unique Docsumo document identifier.
           * @minLength 1
           */
          docId: string;
          /** The page metadata returned by Docsumo for this document. */
          pages: Array<Record<string, unknown>>;
          /** The preview-image payload returned by Docsumo for this document. */
          previewImage: Record<string, unknown> | null;
          /** The document type identifier. */
          type: string | null;
          /** The display name of the document type. */
          typeTitle: string | null;
          /** The upstream uploader payload returned by Docsumo for this document. */
          uploadedBy: Record<string, unknown> | null;
          /** The Docsumo user identifier associated with the document. */
          userId: string | null;
        };
      };
    };
    /** Get the Docsumo documents summary grouped by document type, including disabled types and status counts. */
    "docsumo.get_documents_summary": {
      input: Record<string, never>;
      output: {
        /** The document type identifiers Docsumo marks as disabled for the account. */
        disabledDocTypes: Array<string>;
        /** The document-type summary object returned by Docsumo documents summary. */
        documentType: {
          /** Whether the connected user can upload this document type. */
          canUpload: boolean | null;
          /** The Docsumo category label for this document type. */
          category: string | null;
          /** Whether Docsumo marks this as a default document type. */
          defaultType: boolean | null;
          /** The Docsumo counts grouped by processing status. */
          counts: {
            /** The total number of documents of this type. */
            all: number | null;
            /** The number of processed documents of this type. */
            processed: number | null;
            /** The number of reviewing documents of this type. */
            reviewing: number | null;
          } | null;
          /** The stable document type identifier. */
          docType: string | null;
          /** Whether Docsumo marks the document type as Excel-based. */
          excelType: boolean | null;
          /** The feature flags Docsumo returns for this document type. */
          flags: Record<string, unknown> | null;
          /** The numeric upstream document-type identifier. */
          id: number | null;
          /** Whether the document type is editable in Docsumo. */
          isEditable: boolean | null;
          /** The model identifiers associated with this document type. */
          models: Array<string>;
          /** The display title of the document type. */
          title: string | null;
          /** The dedicated Docsumo upload email address for this document type. */
          uploadEmail: string | null;
          /** The Docsumo user identifier associated with this type. */
          userId: string | null;
        } | null;
      };
    };
    /** Get the simplified extracted Docsumo data for one document and preserve the dynamic section and field structure. */
    "docsumo.get_extracted_data": {
      input: {
        /**
         * The Docsumo document identifier to retrieve extracted data for.
         * @minLength 1
         */
        docId: string;
      };
      output: {
        /** The dynamic extracted-data payload returned by Docsumo, grouped by upstream section names. */
        extractedData: Record<string, unknown>;
      };
    };
    /** List Docsumo documents with optional folder, type, status, search, sorting, and created-date filters. */
    "docsumo.list_documents": {
      input: {
        /** How Docsumo should scope the listing: `files`, `folder`, or `all_files`. */
        view?: "files" | "folder" | "all_files";
        /**
         * The folder identifier to list documents from when `view` is `folder`.
         * @minLength 1
         */
        folderId?: string;
        /**
         * The maximum number of documents to return. Official docs cap this at 20.
         * @minimum 0
         * @maximum 20
         */
        limit?: number;
        /**
         * The number of documents to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The Docsumo document type identifier to filter by.
         * @minLength 1
         */
        docType?: string;
        /** The Docsumo processing status to filter by. */
        status?: "reviewing" | "processed" | "erred";
        /**
         * A partial-match search query applied to document titles.
         * @minLength 1
         */
        query?: string;
        /** The sort order for document creation time. */
        sortBy?: "created_date.asc" | "created_date.desc";
        /**
         * A date string in YYYY-MM-DD format.
         * @minLength 1
         */
        createdDateGte?: string;
        /**
         * A date string in YYYY-MM-DD format.
         * @minLength 1
         */
        createdDateLte?: string;
      };
      output: {
        /** The documents returned by Docsumo for this query. */
        documents: Array<{
          /** Whether Docsumo approved the document despite validation warnings. */
          approvedWithWarnings: boolean | null;
          /** The ISO 8601 timestamp when the document was created. */
          createdAtIso: string | null;
          /** The Docsumo display bucket such as `files` or `folder`. */
          displayType: string | null;
          /**
           * The unique Docsumo document identifier.
           * @minLength 1
           */
          docId: string;
          /** The metadata string stored with the document when returned. */
          docMetaData: string | null;
          /** The folder identifier containing the document when present. */
          folderId: string | null;
          /** The folder name containing the document when present. */
          folderName: string | null;
          /** Whether the document currently has review feedback. */
          hasFeedback: boolean | null;
          /** The ISO 8601 timestamp when the document was last modified. */
          modifiedAtIso: string | null;
          /** The preview image metadata returned by Docsumo. */
          previewImage: {
            /**
             * The preview image URL.
             * @minLength 1
             */
            url: string;
            /** The preview image width in pixels. */
            width: number;
            /** The preview image height in pixels. */
            height: number;
          } | null;
          /** The Docsumo review URL for the document. */
          reviewUrl: string | null;
          /** The upstream storage filename returned by Docsumo when present. */
          s3Filename: string | null;
          /** The current Docsumo processing status. */
          status: string | null;
          /** The upstream template document identifier when present. */
          templateDocId: string | null;
          /** Processing timing metadata returned by Docsumo. */
          time: {
            /** The document processing time in seconds when returned. */
            processingTime: number | null;
            /** The total processing time in seconds when returned. */
            totalTime: number | null;
          } | null;
          /** The document title returned by Docsumo. */
          title: string | null;
          /** The document type identifier. */
          type: string | null;
          /** The display title for the document type. */
          typeTitle: string | null;
          /** The Docsumo uploader metadata. */
          uploadedBy: {
            /** The uploader avatar URL when returned. */
            avatarUrl: string | null;
            /** The uploader email address when returned. */
            email: string | null;
            /** The uploader full name when returned. */
            fullName: string | null;
            /** The uploader user identifier when returned. */
            userId: string | null;
          } | null;
          /** The caller-supplied external document identifier when returned. */
          userDocId: string | null;
        }>;
        /** The pagination metadata returned by Docsumo. */
        pagination: {
          /** The maximum number of records returned in this response. */
          limit: number | null;
          /** The zero-based result offset returned by Docsumo. */
          offset: number | null;
          /** The total number of records matching the current query. */
          total: number | null;
        };
      };
    };
    /** Upload one public file URL to Docsumo for a chosen document type and return the queued document metadata. */
    "docsumo.upload_document_from_url": {
      input: {
        /**
         * The Docsumo document type identifier to process the file with.
         * @minLength 1
         */
        docType: string;
        /**
         * The public file URL that Docsumo should download and process.
         * @minLength 1
         * @format uri
         */
        fileUrl: string;
        /**
         * An optional caller-defined document identifier for external tracking.
         * @minLength 1
         */
        userDocId?: string;
        /** Optional metadata that will be JSON-stringified and attached to the uploaded document. */
        docMetaData?: Record<string, unknown>;
        /** Whether Docsumo should return a temporary signed review URL for external review. */
        reviewToken?: boolean;
        /**
         * The password for the source document when it is password-protected.
         * @minLength 1
         */
        password?: string;
      };
      output: {
        /** Normalized Docsumo uploaded-document metadata. */
        document: {
          /** The upstream document creation timestamp when returned. */
          createdAt: string | null;
          /**
           * The unique Docsumo document identifier.
           * @minLength 1
           */
          docId: string;
          /** The metadata string stored with the uploaded document when returned. */
          docMetaData: string | null;
          /** The email address associated with the uploaded document. */
          email: string | null;
          /** The Docsumo review URL for the uploaded document. */
          reviewUrl: string | null;
          /**
           * The current Docsumo processing status.
           * @minLength 1
           */
          status: string;
          /** The document title returned by Docsumo. */
          title: string | null;
          /** The uploaded document type identifier. */
          type: string | null;
          /** The caller-supplied external document identifier when returned. */
          userDocId: string | null;
          /** The Docsumo user identifier that owns the document. */
          userId: string | null;
        };
      };
    };
  }
}
