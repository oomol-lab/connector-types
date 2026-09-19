import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Permanently delete one TemplateDocs template. */
    "templatedocs.delete_template": {
      input: {
        /**
         * The unique TemplateDocs template identifier.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** Whether TemplateDocs completed the operation. */
        success: boolean;
      };
    };
    /** Fill a TemplateDocs template with JSON data and return the generated DOCX or PDF through file transit. */
    "templatedocs.generate_document": {
      input: {
        /**
         * The unique TemplateDocs template identifier.
         * @minLength 1
         */
        templateId: string;
        /** Values whose keys match placeholders in the template. */
        data: Record<string, unknown>;
        /** The generated document format. Defaults to docx. */
        format?: "docx" | "pdf";
        /**
         * The desired generated document filename.
         * @minLength 1
         */
        filename?: string;
        /** Optional email delivery settings applied by TemplateDocs. */
        email?: {
          /**
           * Primary recipient email addresses.
           * @minItems 1
           */
          to: Array<string>;
          /**
           * CC recipient email addresses.
           * @minItems 1
           */
          cc?: Array<string>;
          /**
           * BCC recipient email addresses.
           * @minItems 1
           */
          bcc?: Array<string>;
          /**
           * The email subject replacing the default subject.
           * @minLength 1
           */
          subject?: string;
          /**
           * The text or HTML email body replacing the default body.
           * @minLength 1
           */
          body?: string;
        };
      };
      output: {
        /** The generated document stored in connector file transit. */
        document: {
          /** The generated document filename. */
          name: string;
          /** The generated document MIME type. */
          mimeType: string;
          /**
           * The transit URL for downloading the generated document.
           * @format uri
           */
          downloadUrl: string;
          /** The generated document size in bytes. */
          sizeBytes: number;
        };
      };
    };
    /** Retrieve metadata and placeholder tags for one TemplateDocs template. */
    "templatedocs.get_template": {
      input: {
        /**
         * The unique TemplateDocs template identifier.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** The unique template identifier. */
        id: string;
        /** The template filename. */
        name: string;
        /**
         * The ISO 8601 timestamp when the template was created.
         * @format date-time
         */
        createdAt: string;
        /** The template file size in bytes. */
        fileSize: number;
        /** The SHA-256 hash of the template file. */
        sha256: string;
        /** Placeholder tags discovered in the template. */
        tags: Array<{
          /** The placeholder tag name. */
          name: string;
          /** Whether the tag is standalone or contains nested tags. */
          shape: "standalone" | "container";
          /** Nested placeholder tags when the tag is a container. */
          children: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** List one page of templates available to the TemplateDocs API key. */
    "templatedocs.list_templates": {
      input: {
        /**
         * The 1-based page index to retrieve. Defaults to 1.
         * @minimum 1
         */
        pageIndex?: number;
      };
      output: {
        /** The maximum number of templates returned per page. */
        pageSize: number;
        /** The 1-based index of the returned page. */
        pageIndex: number;
        /** Templates returned for this page. */
        templates: Array<{
          /** The unique template identifier. */
          id: string;
          /** The template filename. */
          name: string;
          /**
           * The ISO 8601 timestamp when the template was created.
           * @format date-time
           */
          createdAt: string;
          /** The template file size in bytes. */
          fileSize: number;
          /** The SHA-256 hash of the template file. */
          sha256: string;
          /** Placeholder tags discovered in the template. */
          tags: Array<{
            /** The placeholder tag name. */
            name: string;
            /** Whether the tag is standalone or contains nested tags. */
            shape: "standalone" | "container";
            /** Nested placeholder tags when the tag is a container. */
            children: Array<Record<string, unknown>>;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Update the name or generation-warning option for a TemplateDocs template. */
    "templatedocs.update_template": {
      input: {
        /**
         * The unique TemplateDocs template identifier.
         * @minLength 1
         */
        templateId: string;
        /**
         * A unique template filename ending in .docx.
         * @minLength 1
         */
        name?: string;
        /** Whether TemplateDocs may generate documents when the template has warnings. */
        allowGenerationWithWarnings?: boolean;
      };
      output: {
        /** Whether TemplateDocs completed the operation. */
        success: boolean;
      };
    };
  }
}
