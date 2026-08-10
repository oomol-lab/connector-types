import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a named copy of a Formstack Documents template. */
    "formstack_documents.copy_document": {
      input: {
        /**
         * Unique source document identifier.
         * @minLength 1
         */
        document_id: string;
        /**
         * Name for the copied document.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Formstack Documents template. */
        document: {
          /** Unique document identifier. */
          id?: string;
          /** Secret merge key associated with the document. */
          key?: string;
          /** Document template source type. */
          type?: string;
          /** Document name. */
          name?: string;
          /** Output format produced by merges. */
          output?: string;
          /** Custom output filename template. */
          output_name?: string;
          /** Folder containing the document. */
          folder?: string;
          /** Provider-defined document size value. */
          size?: string;
          /** Document width in inches as returned by Formstack Documents. */
          size_width?: string;
          /** Document height in inches as returned by Formstack Documents. */
          size_height?: string;
          /** Whether the document is active, represented by the upstream string flag. */
          active?: string;
          /**
           * Merge URL for the document.
           * @format uri
           */
          url?: string;
          /** HTML source when this is an HTML document. */
          html?: string;
          /** Merge fields found in the document. */
          fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create a Formstack Documents template from HTML or a public file URL. */
    "formstack_documents.create_document": {
      input: {
        /**
         * Document name.
         * @minLength 1
         */
        name: string;
        /** Document template source type. */
        type: "html" | "pdf" | "docx" | "xlsx" | "pptx";
        /** Output format produced when the document is merged. */
        output: "pdf" | "docx" | "xlsx" | "pptx" | "email";
        /**
         * Custom filename template used for merged output.
         * @minLength 1
         */
        output_name?: string;
        /**
         * Folder name. Formstack Documents creates it when necessary.
         * @minLength 1
         */
        folder?: string;
        /**
         * HTML template source. Required when type is html.
         * @minLength 1
         */
        html?: string;
        /**
         * Public URL of the template file. Required for non-HTML document types.
         * @format uri
         */
        file_url?: string;
        /** Document width in inches for an HTML template. */
        size_width?: number;
        /** Document height in inches for an HTML template. */
        size_height?: number;
      };
      output: {
        /** A Formstack Documents template. */
        document: {
          /** Unique document identifier. */
          id?: string;
          /** Secret merge key associated with the document. */
          key?: string;
          /** Document template source type. */
          type?: string;
          /** Document name. */
          name?: string;
          /** Output format produced by merges. */
          output?: string;
          /** Custom output filename template. */
          output_name?: string;
          /** Folder containing the document. */
          folder?: string;
          /** Provider-defined document size value. */
          size?: string;
          /** Document width in inches as returned by Formstack Documents. */
          size_width?: string;
          /** Document height in inches as returned by Formstack Documents. */
          size_height?: string;
          /** Whether the document is active, represented by the upstream string flag. */
          active?: string;
          /**
           * Merge URL for the document.
           * @format uri
           */
          url?: string;
          /** HTML source when this is an HTML document. */
          html?: string;
          /** Merge fields found in the document. */
          fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Formstack Documents template by its document ID. */
    "formstack_documents.delete_document": {
      input: {
        /**
         * Unique document identifier.
         * @minLength 1
         */
        document_id: string;
      };
      output: {
        /** Whether Formstack Documents confirmed deletion. */
        deleted: boolean;
        /** Identifier of the deleted document. */
        document_id: string;
      };
    };
    /** Get one Formstack Documents template by its document ID. */
    "formstack_documents.get_document": {
      input: {
        /**
         * Unique document identifier.
         * @minLength 1
         */
        document_id: string;
      };
      output: {
        /** A Formstack Documents template. */
        document: {
          /** Unique document identifier. */
          id?: string;
          /** Secret merge key associated with the document. */
          key?: string;
          /** Document template source type. */
          type?: string;
          /** Document name. */
          name?: string;
          /** Output format produced by merges. */
          output?: string;
          /** Custom output filename template. */
          output_name?: string;
          /** Folder containing the document. */
          folder?: string;
          /** Provider-defined document size value. */
          size?: string;
          /** Document width in inches as returned by Formstack Documents. */
          size_width?: string;
          /** Document height in inches as returned by Formstack Documents. */
          size_height?: string;
          /** Whether the document is active, represented by the upstream string flag. */
          active?: string;
          /**
           * Merge URL for the document.
           * @format uri
           */
          url?: string;
          /** HTML source when this is an HTML document. */
          html?: string;
          /** Merge fields found in the document. */
          fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List merge fields detected in a Formstack Documents template. */
    "formstack_documents.get_document_fields": {
      input: {
        /**
         * Unique document identifier.
         * @minLength 1
         */
        document_id: string;
        /** Whether to include all available field attributes. */
        attributes?: boolean;
      };
      output: {
        /** Document merge fields. */
        fields: Array<Record<string, unknown>>;
      };
    };
    /** List Formstack Documents templates, optionally filtered by search text or folder. */
    "formstack_documents.list_documents": {
      input: {
        /**
         * Search term matched against documents.
         * @minLength 1
         */
        search?: string;
        /**
         * Folder name used to filter documents.
         * @minLength 1
         */
        folder?: string;
      };
      output: {
        /** Matching document templates. */
        documents: Array<{
          /** Unique document identifier. */
          id?: string;
          /** Secret merge key associated with the document. */
          key?: string;
          /** Document template source type. */
          type?: string;
          /** Document name. */
          name?: string;
          /** Output format produced by merges. */
          output?: string;
          /** Custom output filename template. */
          output_name?: string;
          /** Folder containing the document. */
          folder?: string;
          /** Provider-defined document size value. */
          size?: string;
          /** Document width in inches as returned by Formstack Documents. */
          size_width?: string;
          /** Document height in inches as returned by Formstack Documents. */
          size_height?: string;
          /** Whether the document is active, represented by the upstream string flag. */
          active?: string;
          /**
           * Merge URL for the document.
           * @format uri
           */
          url?: string;
          /** HTML source when this is an HTML document. */
          html?: string;
          /** Merge fields found in the document. */
          fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update mutable fields or source content for a Formstack Documents template. */
    "formstack_documents.update_document": {
      input: {
        /**
         * Unique document identifier.
         * @minLength 1
         */
        document_id: string;
        /**
         * New document name.
         * @minLength 1
         */
        name?: string;
        /** Output format produced when the document is merged. */
        output?: "pdf" | "docx" | "xlsx" | "pptx" | "email";
        /**
         * New filename template used for merged output.
         * @minLength 1
         */
        output_name?: string;
        /**
         * New folder name.
         * @minLength 1
         */
        folder?: string;
        /**
         * New HTML template source for an HTML document.
         * @minLength 1
         */
        html?: string;
        /**
         * Public URL of the replacement template file.
         * @format uri
         */
        file_url?: string;
        /** New document width in inches for an HTML template. */
        size_width?: number;
        /** New document height in inches for an HTML template. */
        size_height?: number;
      };
      output: {
        /** A Formstack Documents template. */
        document: {
          /** Unique document identifier. */
          id?: string;
          /** Secret merge key associated with the document. */
          key?: string;
          /** Document template source type. */
          type?: string;
          /** Document name. */
          name?: string;
          /** Output format produced by merges. */
          output?: string;
          /** Custom output filename template. */
          output_name?: string;
          /** Folder containing the document. */
          folder?: string;
          /** Provider-defined document size value. */
          size?: string;
          /** Document width in inches as returned by Formstack Documents. */
          size_width?: string;
          /** Document height in inches as returned by Formstack Documents. */
          size_height?: string;
          /** Whether the document is active, represented by the upstream string flag. */
          active?: string;
          /**
           * Merge URL for the document.
           * @format uri
           */
          url?: string;
          /** HTML source when this is an HTML document. */
          html?: string;
          /** Merge fields found in the document. */
          fields?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
  }
}
