import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Generate a PDF from a Pdfless document template with JSON data. Returns a Pdfless download URL that expires 10 minutes after generation, plus a transit URL when file transit is configured. Each call consumes one PDF of the workspace quota. */
    "pdfless.create_pdf": {
      input: {
        /**
         * The document template ID (GUID), as returned by list_document_templates.
         * @minLength 1
         */
        templateId: string;
        /** JSON data for the template placeholders. Keys must match the variable names defined in the template. */
        payload?: Record<string, unknown>;
        /**
         * The caller's own identifier for this PDF. Pdfless stores it and returns it in the response.
         * @minLength 1
         */
        referenceId?: string;
        /**
         * When set, the PDF is encrypted and this password is required to open it. Requires a subscription plan that includes PDF encryption.
         * @minLength 1
         */
        encryptionUserPassword?: string;
        /**
         * The permission password that lifts the restrictions set by the encryptionAllow* flags. Requires a subscription plan that includes PDF encryption.
         * @minLength 1
         */
        encryptionOwnerPassword?: string;
        /** Whether an encrypted PDF may be printed. */
        encryptionAllowPrinting?: boolean;
        /** Whether an encrypted PDF may be modified. */
        encryptionAllowModifying?: boolean;
        /** Whether annotations in an encrypted PDF may be modified. */
        encryptionAllowModifyAnnotations?: boolean;
        /** Whether content of an encrypted PDF may be copied. */
        encryptionAllowContentCopying?: boolean;
        /** Whether screen readers may access the content of an encrypted PDF. */
        encryptionAllowScreenreaders?: boolean;
        /** Whether forms in an encrypted PDF may be filled. */
        encryptionAllowFormFilling?: boolean;
        /** Whether pages of an encrypted PDF may be inserted, rotated, or deleted. */
        encryptionAllowDocumentAssembly?: boolean;
      };
      output: {
        /** The ID of the document template used to generate the PDF. */
        templateId: string | null;
        /** The caller's own identifier for this PDF, when one was provided. */
        referenceId: string | null;
        /**
         * The Pdfless URL for downloading the PDF. It expires 10 minutes after generation.
         * @format uri
         */
        downloadUrl: string;
        /** The ISO 8601 timestamp when downloadUrl expires. */
        expiresAt: string | null;
        /** The ISO 8601 timestamp when the PDF was created. */
        createdAt: string | null;
        /**
         * The generated PDF copy in file transit, or null when file transit is not configured.
         * @format uri
         */
        transitUrl: string | null;
      };
    };
    /** Get the current Pdfless workspace details resolved by the provided API key. */
    "pdfless.get_workspace": {
      input: Record<string, never>;
      output: {
        /** The current Pdfless workspace details. */
        workspace: {
          /** The workspace name. */
          name: string | null;
          /** Whether the workspace is currently active. */
          active: boolean;
          /** The ISO 8601 timestamp when the workspace was created. */
          createdAt: string;
          /** The ISO 8601 timestamp when the workspace was last updated. */
          updatedAt: string | null;
          /** The total quota available for the workspace. */
          quota: number | null;
          /** The remaining quota available for the workspace. */
          remainingQuota: number | null;
        };
      };
    };
    /** List document templates in the current Pdfless workspace with optional pagination. */
    "pdfless.list_document_templates": {
      input: {
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of templates to return per page.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The document templates returned for the requested page. */
        templates: Array<{
          /** The unique identifier of the document template. */
          id: string;
          /** The template name. */
          name: string | null;
          /** The preview image URL for the document template. */
          imagePreviewUrl: string | null;
          /** The preview PDF URL for the document template. */
          pdfPreviewUrl: string | null;
          /** The ISO 8601 timestamp when the template was created. */
          createdAt: string;
          /** The ISO 8601 timestamp when the template was last updated. */
          updatedAt: string | null;
        }>;
        /** Pagination information returned by the upstream API when available. */
        pagination?: {
          /** The current page number. */
          page: number;
          /** The number of items per page. */
          pageSize: number;
          /** The total number of document templates. */
          totalItems: number;
          /** The total number of pages. */
          totalPages: number;
        };
      };
    };
  }
}
