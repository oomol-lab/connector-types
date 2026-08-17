import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a document in the authorized user's Mendeley library from JSON metadata. */
    "mendeley.create_document": {
      input: {
        /**
         * The document title.
         * @minLength 1
         * @maxLength 500
         */
        title: string;
        /**
         * The Mendeley document type, such as journal, book, or report.
         * @minLength 1
         */
        type: string;
        /** The publication or source name. */
        source?: string;
        /** The publication year. */
        year?: number;
        /** The document abstract. */
        abstract?: string;
        /** The document authors. */
        authors?: Array<{
          /** The author's first name. */
          firstName?: string;
          /** The author's last name. */
          lastName?: string;
        }>;
        /** External identifiers keyed by scheme, such as doi or isbn. */
        identifiers?: Record<string, unknown>;
        /** The user-defined document tags. */
        tags?: Array<string>;
      };
      output: {
        /** The raw Mendeley document object. */
        document: Record<string, unknown>;
      };
    };
    /** Permanently delete a document from the authorized user's Mendeley library. */
    "mendeley.delete_document": {
      input: {
        /**
         * The Mendeley document UUID.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** Whether Mendeley accepted the permanent deletion. */
        deleted: boolean;
        /**
         * The deleted Mendeley document UUID.
         * @minLength 1
         */
        documentId: string;
      };
    };
    /** Get a public Mendeley catalog document by its Mendeley ID. */
    "mendeley.get_catalog_document": {
      input: {
        /**
         * The Mendeley catalog document UUID.
         * @minLength 1
         */
        documentId: string;
      };
      output: {
        /** The raw Mendeley document object. */
        document: Record<string, unknown>;
      };
    };
    /** Get document metadata from the authorized user's Mendeley library by ID. */
    "mendeley.get_document": {
      input: {
        /**
         * The Mendeley document UUID.
         * @minLength 1
         */
        documentId: string;
        /** The Mendeley document view to request. */
        view?: "bib" | "client" | "tags" | "patent" | "all";
      };
      output: {
        /** The raw Mendeley document object. */
        document: Record<string, unknown>;
      };
    };
    /** List document metadata from the authorized user's Mendeley library. */
    "mendeley.list_documents": {
      input: {
        /** The Mendeley document view to request. */
        view?: "bib" | "client" | "tags" | "patent" | "all";
        /**
         * The group UUID whose documents should be listed.
         * @minLength 1
         */
        groupId?: string;
        /** Return documents modified since this ISO 8601 timestamp. */
        modifiedSince?: string;
        /** Return documents deleted since this ISO 8601 timestamp. */
        deletedSince?: string;
        /**
         * The maximum number of documents on this page.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /** The documented Mendeley field used to sort results. */
        sort?: string;
        /** The result sort direction. */
        order?: "asc" | "desc";
        /** A page marker returned by an earlier call. */
        marker?: string;
      };
      output: {
        /** The documents returned on this page. */
        documents: Array<Record<string, unknown>>;
        /** The marker for the next page, or null. */
        nextMarker: string | null;
        /** The marker for the previous page, or null. */
        previousMarker: string | null;
        /** The marker for the first page, or null. */
        firstMarker: string | null;
        /** The marker for the last page, or null. */
        lastMarker: string | null;
      };
    };
    /** Search Mendeley's public catalog for document metadata. */
    "mendeley.search_catalog": {
      input: {
        /**
         * Text matched against catalog titles, abstracts, and author names.
         * @minLength 1
         */
        query: string;
        /**
         * The maximum number of catalog documents on this page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** A page marker returned by an earlier call. */
        marker?: string;
      };
      output: {
        /** The catalog documents returned on this page. */
        documents: Array<Record<string, unknown>>;
        /** The marker for the next page, or null. */
        nextMarker: string | null;
        /** The marker for the previous page, or null. */
        previousMarker: string | null;
        /** The marker for the first page, or null. */
        firstMarker: string | null;
        /** The marker for the last page, or null. */
        lastMarker: string | null;
      };
    };
    /** Update selected metadata fields on a Mendeley library document. */
    "mendeley.update_document": {
      input: {
        /**
         * The Mendeley document UUID.
         * @minLength 1
         */
        documentId: string;
        /**
         * The document title.
         * @minLength 1
         * @maxLength 500
         */
        title?: string;
        /**
         * The Mendeley document type, such as journal, book, or report.
         * @minLength 1
         */
        type?: string;
        /** The publication or source name. */
        source?: string;
        /** The publication year. */
        year?: number;
        /** The document abstract. */
        abstract?: string;
        /** The document authors. */
        authors?: Array<{
          /** The author's first name. */
          firstName?: string;
          /** The author's last name. */
          lastName?: string;
        }>;
        /** External identifiers keyed by scheme, such as doi or isbn. */
        identifiers?: Record<string, unknown>;
        /** The user-defined document tags. */
        tags?: Array<string>;
      };
      output: {
        /** The raw Mendeley document object. */
        document: Record<string, unknown>;
      };
    };
  }
}
