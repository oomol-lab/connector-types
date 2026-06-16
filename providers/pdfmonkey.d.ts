import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a PDFMonkey document and optionally queue generation immediately by setting status to pending. */
    "pdfmonkey.create_document": {
      input: {
        /**
         * The template UUID used for generation.
         * @minLength 1
         */
        documentTemplateId: string;
        /** The JSON object or JSON string passed to PDFMonkey as the document payload. */
        payload?: Record<string, unknown> | string;
        /** The JSON object or JSON string passed to PDFMonkey as document metadata. */
        meta?: Record<string, unknown> | string;
        /** The initial document status. Set pending to queue generation immediately. */
        status?: "draft" | "pending";
      };
      output: {
        /** The created PDFMonkey document. */
        document: {
          /**
           * The document identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace identifier that owns the document.
           * @minLength 1
           */
          appId: string;
          /** The checksum reported for the document payload. */
          checksum: string | null;
          /**
           * The ISO 8601 timestamp when the document was created.
           * @minLength 1
           */
          createdAt: string;
          /**
           * The template identifier used by the document.
           * @minLength 1
           */
          documentTemplateId: string;
          /** The signed download URL for the generated file. */
          downloadUrl: string | null;
          /** The upstream failure message when generation failed. */
          failureCause: string | null;
          /** The generated filename when available. */
          filename: string | null;
          /** The generation log entries returned by PDFMonkey. */
          generationLogs: Array<{
            /**
             * The log entry type returned by PDFMonkey.
             * @minLength 1
             */
            type: string;
            /**
             * The log entry message.
             * @minLength 1
             */
            message: string;
            /**
             * The timestamp recorded for this generation log entry.
             * @minLength 1
             */
            timestamp: string;
          }>;
          /** The custom metadata attached to the document. */
          meta: Record<string, unknown> | string | null;
          /**
           * The generated output type such as pdf or image.
           * @minLength 1
           */
          outputType: string;
          /** The source payload stored for the document. */
          payload: Record<string, unknown> | string | null;
          /** The preview URL for the generated document when available. */
          previewUrl: string | null;
          /** The public share URL when sharing is enabled. */
          publicShareLink: string | null;
          /** The current PDFMonkey document status. */
          status: "draft" | "pending" | "generating" | "success" | "failure";
          /**
           * The ISO 8601 timestamp when the document was last updated.
           * @minLength 1
           */
          updatedAt: string;
        };
      };
    };
    /** Get the current PDFMonkey account resolved by the provided API key. */
    "pdfmonkey.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current PDFMonkey account. */
        currentUser: {
          /**
           * The PDFMonkey current_user identifier.
           * @minLength 1
           */
          id: string;
          /** The number of available documents remaining for the account. */
          availableDocuments: number | null;
          /**
           * The ISO 8601 timestamp when the account was created.
           * @minLength 1
           */
          createdAt: string;
          /** The current billing plan name. */
          currentPlan: string | null;
          /** The current billing interval name. */
          currentPlanInterval: string | null;
          /** The display name configured for the account. */
          desiredName: string | null;
          /** The account email address. */
          email: string | null;
          /** The account language code. */
          lang: string | null;
          /** Whether the current account is a paying customer. */
          payingCustomer: boolean | null;
          /** The account trial end date when present. */
          trialEndsOn: string | null;
          /**
           * The ISO 8601 timestamp when the account was last updated.
           * @minLength 1
           */
          updatedAt: string;
          /** Whether resource blocking is enabled for generated documents. */
          blockResources: boolean | null;
          /** Whether public share links are enabled for the account. */
          shareLinks: boolean | null;
        };
      };
    };
    /** Get one full PDFMonkey document including its payload and generation logs. */
    "pdfmonkey.get_document": {
      input: {
        /**
         * The document UUID to retrieve.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** The requested full PDFMonkey document. */
        document: {
          /**
           * The document identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace identifier that owns the document.
           * @minLength 1
           */
          appId: string;
          /** The checksum reported for the document payload. */
          checksum: string | null;
          /**
           * The ISO 8601 timestamp when the document was created.
           * @minLength 1
           */
          createdAt: string;
          /**
           * The template identifier used by the document.
           * @minLength 1
           */
          documentTemplateId: string;
          /** The signed download URL for the generated file. */
          downloadUrl: string | null;
          /** The upstream failure message when generation failed. */
          failureCause: string | null;
          /** The generated filename when available. */
          filename: string | null;
          /** The generation log entries returned by PDFMonkey. */
          generationLogs: Array<{
            /**
             * The log entry type returned by PDFMonkey.
             * @minLength 1
             */
            type: string;
            /**
             * The log entry message.
             * @minLength 1
             */
            message: string;
            /**
             * The timestamp recorded for this generation log entry.
             * @minLength 1
             */
            timestamp: string;
          }>;
          /** The custom metadata attached to the document. */
          meta: Record<string, unknown> | string | null;
          /**
           * The generated output type such as pdf or image.
           * @minLength 1
           */
          outputType: string;
          /** The source payload stored for the document. */
          payload: Record<string, unknown> | string | null;
          /** The preview URL for the generated document when available. */
          previewUrl: string | null;
          /** The public share URL when sharing is enabled. */
          publicShareLink: string | null;
          /** The current PDFMonkey document status. */
          status: "draft" | "pending" | "generating" | "success" | "failure";
          /**
           * The ISO 8601 timestamp when the document was last updated.
           * @minLength 1
           */
          updatedAt: string;
        };
      };
    };
    /** Get one PDFMonkey document card for lightweight status polling without the full payload. */
    "pdfmonkey.get_document_card": {
      input: {
        /**
         * The document UUID to fetch as a document card.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** The requested PDFMonkey document card. */
        documentCard: {
          /**
           * The document identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace identifier that owns the document.
           * @minLength 1
           */
          appId: string;
          /**
           * The ISO 8601 timestamp when the document was created.
           * @minLength 1
           */
          createdAt: string;
          /**
           * The template identifier used by the document.
           * @minLength 1
           */
          documentTemplateId: string;
          /** The human-readable template identifier when present. */
          documentTemplateIdentifier: string | null;
          /** The signed download URL for the generated file. */
          downloadUrl: string | null;
          /** The upstream failure message when generation failed. */
          failureCause: string | null;
          /** The generated filename when available. */
          filename: string | null;
          /** The custom metadata attached to the document. */
          meta: Record<string, unknown> | string | null;
          /**
           * The generated output type such as pdf or image.
           * @minLength 1
           */
          outputType: string;
          /** The preview URL for the generated document when available. */
          previewUrl: string | null;
          /** The public share URL when sharing is enabled. */
          publicShareLink: string | null;
          /** The current PDFMonkey document status. */
          status: "draft" | "pending" | "generating" | "success" | "failure";
          /**
           * The ISO 8601 timestamp when the document was last updated.
           * @minLength 1
           */
          updatedAt: string;
        };
      };
    };
    /** Get one full PDFMonkey document template including draft and published fields. */
    "pdfmonkey.get_document_template": {
      input: {
        /**
         * The template UUID to retrieve.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** The requested full PDFMonkey document template. */
        documentTemplate: {
          /**
           * The template identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace identifier that owns the template.
           * @minLength 1
           */
          appId: string;
          /**
           * The human-readable template identifier.
           * @minLength 1
           */
          identifier: string;
          /**
           * The template edition mode.
           * @minLength 1
           */
          editionMode: string;
          /**
           * The output type used by documents generated from this template.
           * @minLength 1
           */
          outputType: string;
          /** The published HTML and Liquid body. */
          body: string;
          /** The draft HTML and Liquid body. */
          bodyDraft: string;
          /** The published CSS or SCSS styles. */
          scssStyle: string;
          /** The draft CSS or SCSS styles. */
          scssStyleDraft: string;
          /** The published sample data string. */
          sampleData: string;
          /** The draft sample data string. */
          sampleDataDraft: string;
          /** The published PDFMonkey template settings object. */
          settings: Record<string, unknown>;
          /** The draft PDFMonkey template settings object. */
          settingsDraft: Record<string, unknown>;
          /** The published PDF engine identifier. */
          pdfEngineId: string | null;
          /** The draft PDF engine identifier. */
          pdfEngineDraftId: string | null;
          /** The folder identifier used to group the template. */
          templateFolderId: string | null;
          /** The time-to-live in seconds for documents generated by this template. */
          ttl: number;
          /**
           * The ISO 8601 timestamp when the template was created.
           * @minLength 1
           */
          createdAt: string;
          /**
           * The ISO 8601 timestamp when the template was last updated.
           * @minLength 1
           */
          updatedAt: string;
          /** The checksum returned for this template. */
          checksum: string | null;
          /** The preview URL for the template when available. */
          previewUrl: string | null;
        };
      };
    };
    /** List PDFMonkey document cards with optional filters for template, status, workspace, update time, and search text. */
    "pdfmonkey.list_document_cards": {
      input: {
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        pageNumber?: number;
        /**
         * Filter documents by one template UUID or a comma-separated list of template UUIDs.
         * @minLength 1
         */
        documentTemplateId?: string;
        /** Filter documents by one PDFMonkey document status. */
        status?: "draft" | "pending" | "generating" | "success" | "failure";
        /**
         * Filter documents by workspace UUID.
         * @minLength 1
         */
        workspaceId?: string;
        /**
         * Only return documents updated after this Unix timestamp or ISO 8601 string.
         * @minLength 1
         */
        updatedSince?: string;
        /**
         * Search by document UUID or filename.
         * @minLength 1
         */
        search?: string;
      };
      output: {
        /** The PDFMonkey document cards returned for the request. */
        documentCards: Array<{
          /**
           * The document identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace identifier that owns the document.
           * @minLength 1
           */
          appId: string;
          /**
           * The ISO 8601 timestamp when the document was created.
           * @minLength 1
           */
          createdAt: string;
          /**
           * The template identifier used by the document.
           * @minLength 1
           */
          documentTemplateId: string;
          /** The human-readable template identifier when present. */
          documentTemplateIdentifier: string | null;
          /** The signed download URL for the generated file. */
          downloadUrl: string | null;
          /** The upstream failure message when generation failed. */
          failureCause: string | null;
          /** The generated filename when available. */
          filename: string | null;
          /** The custom metadata attached to the document. */
          meta: Record<string, unknown> | string | null;
          /**
           * The generated output type such as pdf or image.
           * @minLength 1
           */
          outputType: string;
          /** The preview URL for the generated document when available. */
          previewUrl: string | null;
          /** The public share URL when sharing is enabled. */
          publicShareLink: string | null;
          /** The current PDFMonkey document status. */
          status: "draft" | "pending" | "generating" | "success" | "failure";
          /**
           * The ISO 8601 timestamp when the document was last updated.
           * @minLength 1
           */
          updatedAt: string;
        }>;
        /** The pagination metadata for this document card page. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The next page number when another page exists. */
          nextPage: number | null;
          /** The previous page number when a previous page exists. */
          prevPage: number | null;
          /** The total number of pages available. */
          totalPages: number;
        };
      };
    };
    /** List PDFMonkey document template cards for one workspace with optional folder, page, and sort filters. */
    "pdfmonkey.list_document_template_cards": {
      input: {
        /**
         * The workspace UUID to list templates from.
         * @minLength 1
         */
        workspaceId: string;
        /**
         * An optional comma-separated folder list, none, or all.
         * @minLength 1
         */
        folders?: string;
        /**
         * The 1-based page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * The template sort expression accepted by PDFMonkey.
         * @minLength 1
         */
        sort?: string;
      };
      output: {
        /** The PDFMonkey document template cards returned for the request. */
        documentTemplateCards: Array<{
          /**
           * The template identifier.
           * @minLength 1
           */
          id: string;
          /**
           * The workspace identifier that owns the template.
           * @minLength 1
           */
          appId: string;
          /**
           * The human-readable template identifier.
           * @minLength 1
           */
          identifier: string;
          /**
           * The template edition mode.
           * @minLength 1
           */
          editionMode: string;
          /**
           * The output type used by documents generated from this template.
           * @minLength 1
           */
          outputType: string;
          /** The folder identifier used to group the template. */
          templateFolderId: string | null;
          /** The time-to-live in seconds for documents generated by this template. */
          ttl: number;
          /**
           * The ISO 8601 timestamp when the template was created.
           * @minLength 1
           */
          createdAt: string;
          /**
           * The ISO 8601 timestamp when the template was last updated.
           * @minLength 1
           */
          updatedAt: string;
          /** The preview URL for the template when available. */
          previewUrl: string | null;
        }>;
        /** The pagination metadata for this template card page. */
        pagination: {
          /** The current page number. */
          currentPage: number;
          /** The next page number when another page exists. */
          nextPage: number | null;
          /** The previous page number when a previous page exists. */
          prevPage: number | null;
          /** The total number of pages available. */
          totalPages: number;
        };
      };
    };
  }
}
