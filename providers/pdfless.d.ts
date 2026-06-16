import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
