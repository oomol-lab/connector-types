import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Permanently delete one generated DocuGenerate document by document ID. */
    "docugenerate.delete_document": {
      input: {
        /**
         * The DocuGenerate document ID.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** Whether the document was deleted. */
        deleted: boolean;
        /** The deleted DocuGenerate document ID. */
        documentId: string;
      };
    };
    /** Generate and store a DocuGenerate document from a template and JSON merge data, returning a download URL. */
    "docugenerate.generate_document": {
      input: {
        /**
         * The ID of the template used to generate the document.
         * @minLength 1
         */
        templateId: string;
        /** The JSON merge data used to generate one or more documents. */
        data: Record<string, unknown> | Array<Record<string, unknown>>;
        /**
         * The logical name used to identify the generated document.
         * @minLength 1
         */
        name?: string;
        /**
         * The generated filename without its extension.
         * @minLength 1
         */
        outputName?: string;
        /** The generated document format. */
        outputFormat?: ".docx" | ".doc" | ".odt" | ".txt" | ".html" | ".png" | ".pdf" | ".pdf/a-1b" | ".pdf/a-2b" | ".pdf/a-3b";
        /**
         * The output quality for PDF, PDF/A, or PNG generation, from 1 through 100.
         * @minimum 1
         * @maximum 100
         */
        outputQuality?: number;
        /** Whether multiple merge-data objects are combined into one output file. */
        singleFile?: boolean;
        /** Whether to insert a page break after each merge-data object in a combined output. */
        pageBreak?: boolean;
      };
      output: {
        /** A connector-normalized DocuGenerate document. */
        document: {
          /** The document ID. */
          id: string;
          /** The ID of the template used to generate the document. */
          templateId: string;
          /** The document creation time in Unix epoch milliseconds. */
          created: number;
          /** The logical document name. */
          name: string;
          /** The number of merge-data objects used to generate the document. */
          dataLength: number;
          /** The generated document filename. */
          filename: string;
          /** The generated document format. */
          format: string;
          /**
           * The download URL for the generated document.
           * @format uri
           */
          documentUrl: string;
        };
      };
    };
    /** Retrieve one generated DocuGenerate document by document ID. */
    "docugenerate.get_document": {
      input: {
        /**
         * The DocuGenerate document ID.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** A connector-normalized DocuGenerate document. */
        document: {
          /** The document ID. */
          id: string;
          /** The ID of the template used to generate the document. */
          templateId: string;
          /** The document creation time in Unix epoch milliseconds. */
          created: number;
          /** The logical document name. */
          name: string;
          /** The number of merge-data objects used to generate the document. */
          dataLength: number;
          /** The generated document filename. */
          filename: string;
          /** The generated document format. */
          format: string;
          /**
           * The download URL for the generated document.
           * @format uri
           */
          documentUrl: string;
        };
      };
    };
    /** Retrieve one DocuGenerate template by template ID. */
    "docugenerate.get_template": {
      input: {
        /**
         * The DocuGenerate template ID.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** A connector-normalized DocuGenerate template. */
        template: {
          /** The template ID. */
          id: string;
          /** The template creation time in Unix epoch milliseconds. */
          created: number;
          /** The template update time in Unix epoch milliseconds. */
          updated: number;
          /** The template name. */
          name: string;
          /** The number of pages in the template. */
          pageCount: number;
          /** The delimiters used to identify template tags. */
          delimiters: {
            /** The left delimiter for template tags. */
            left: string;
            /** The right delimiter for template tags. */
            right: string;
          };
          /** The valid and invalid tags extracted from the template. */
          tags: {
            /** The valid template tags, including strings or nested tag structures. */
            valid: Array<unknown>;
            /** The invalid or unclosed template tags. */
            invalid: Array<string>;
          };
          /** The filename of the uploaded template file. */
          filename: string;
          /** The format of the uploaded template file. */
          format: string;
          /** The storage region for the template and new documents. */
          region: "us" | "eu" | "uk" | "au";
          /**
           * The download URL for the uploaded template file.
           * @format uri
           */
          templateUrl: string;
          /**
           * The download URL for the template PDF preview.
           * @format uri
           */
          previewUrl: string;
          /**
           * The download URL for the first-page template image.
           * @format uri
           */
          imageUrl: string;
          /** Whether enhanced template syntax is enabled. */
          enhancedSyntax: boolean;
          /** Whether template file versioning is enabled. */
          versioningEnabled: boolean;
          /**
           * The ordered template folder path from root to leaf.
           * @maxItems 100
           */
          folder: Array<string>;
        };
      };
    };
    /** List all DocuGenerate documents generated from one template. */
    "docugenerate.list_documents": {
      input: {
        /**
         * The ID of the template used to generate the documents.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** The generated documents. */
        documents: Array<{
          /** The document ID. */
          id: string;
          /** The ID of the template used to generate the document. */
          templateId: string;
          /** The document creation time in Unix epoch milliseconds. */
          created: number;
          /** The logical document name. */
          name: string;
          /** The number of merge-data objects used to generate the document. */
          dataLength: number;
          /** The generated document filename. */
          filename: string;
          /** The generated document format. */
          format: string;
          /**
           * The download URL for the generated document.
           * @format uri
           */
          documentUrl: string;
        }>;
      };
    };
    /** List DocuGenerate templates, optionally filtered by an exact folder path. */
    "docugenerate.list_templates": {
      input: {
        /**
         * The ordered folder path from root to leaf.
         * @maxItems 100
         */
        folder?: Array<string>;
      };
      output: {
        /** The matching templates. */
        templates: Array<{
          /** The template ID. */
          id: string;
          /** The template creation time in Unix epoch milliseconds. */
          created: number;
          /** The template update time in Unix epoch milliseconds. */
          updated: number;
          /** The template name. */
          name: string;
          /** The number of pages in the template. */
          pageCount: number;
          /** The delimiters used to identify template tags. */
          delimiters: {
            /** The left delimiter for template tags. */
            left: string;
            /** The right delimiter for template tags. */
            right: string;
          };
          /** The valid and invalid tags extracted from the template. */
          tags: {
            /** The valid template tags, including strings or nested tag structures. */
            valid: Array<unknown>;
            /** The invalid or unclosed template tags. */
            invalid: Array<string>;
          };
          /** The filename of the uploaded template file. */
          filename: string;
          /** The format of the uploaded template file. */
          format: string;
          /** The storage region for the template and new documents. */
          region: "us" | "eu" | "uk" | "au";
          /**
           * The download URL for the uploaded template file.
           * @format uri
           */
          templateUrl: string;
          /**
           * The download URL for the template PDF preview.
           * @format uri
           */
          previewUrl: string;
          /**
           * The download URL for the first-page template image.
           * @format uri
           */
          imageUrl: string;
          /** Whether enhanced template syntax is enabled. */
          enhancedSyntax: boolean;
          /** Whether template file versioning is enabled. */
          versioningEnabled: boolean;
          /**
           * The ordered template folder path from root to leaf.
           * @maxItems 100
           */
          folder: Array<string>;
        }>;
      };
    };
    /** Rename one generated DocuGenerate document by document ID. */
    "docugenerate.update_document": {
      input: {
        /**
         * The DocuGenerate document ID.
         * @minLength 1
         */
        documentId: string;
        /**
         * The new logical document name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A connector-normalized DocuGenerate document. */
        document: {
          /** The document ID. */
          id: string;
          /** The ID of the template used to generate the document. */
          templateId: string;
          /** The document creation time in Unix epoch milliseconds. */
          created: number;
          /** The logical document name. */
          name: string;
          /** The number of merge-data objects used to generate the document. */
          dataLength: number;
          /** The generated document filename. */
          filename: string;
          /** The generated document format. */
          format: string;
          /**
           * The download URL for the generated document.
           * @format uri
           */
          documentUrl: string;
        };
      };
    };
  }
}
