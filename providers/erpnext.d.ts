import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one ERPNext document for the specified DocType. */
    "erpnext.create_document": {
      input: {
        /**
         * The ERPNext DocType name to operate on.
         * @minLength 1
         */
        doctype: string;
        /** The document fields to create or update in ERPNext. */
        data: Record<string, unknown>;
      };
      output: {
        /** An ERPNext document or nested payload. */
        document: Record<string, unknown>;
      };
    };
    /** Delete one ERPNext document by DocType and name. */
    "erpnext.delete_document": {
      input: {
        /**
         * The ERPNext DocType name to operate on.
         * @minLength 1
         */
        doctype: string;
        /**
         * The unique name of the ERPNext document.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether ERPNext confirmed the document deletion. */
        ok: boolean;
      };
    };
    /** Get one ERPNext document by DocType and name. */
    "erpnext.get_document": {
      input: {
        /**
         * The ERPNext DocType name to operate on.
         * @minLength 1
         */
        doctype: string;
        /**
         * The unique name of the ERPNext document.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** An ERPNext document or nested payload. */
        document: Record<string, unknown>;
      };
    };
    /** Get the count of ERPNext documents that match an optional filter. */
    "erpnext.get_document_count": {
      input: {
        /**
         * The ERPNext DocType name to operate on.
         * @minLength 1
         */
        doctype: string;
        /** Filters passed through to ERPNext as JSON. */
        filters?: Record<string, unknown> | Array<Array<unknown>>;
      };
      output: {
        /**
         * The count returned by ERPNext.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Get one ERPNext field value or a group of field values without loading the full document. */
    "erpnext.get_document_value": {
      input: {
        /**
         * The ERPNext DocType name to operate on.
         * @minLength 1
         */
        doctype: string;
        /**
         * The unique name of the ERPNext document.
         * @minLength 1
         */
        name?: string;
        /** Filters passed through to ERPNext as JSON. */
        filters?: Record<string, unknown> | Array<Array<unknown>>;
        /** One field name or an array of field names to request from ERPNext. */
        fieldname: string | Array<string>;
      };
      output: {
        /** The field value or object returned by ERPNext. */
        value: string | number | boolean | null | Array<unknown> | Record<string, unknown>;
      };
    };
    /** Get the currently authenticated ERPNext user for the configured connection. */
    "erpnext.get_logged_user": {
      input: Record<string, never>;
      output: {
        /** The authenticated ERPNext user identifier. */
        user: string;
      };
    };
    /** List ERPNext documents for a DocType with optional field selection, filters, sorting, and pagination. */
    "erpnext.list_documents": {
      input: {
        /**
         * The ERPNext DocType name to operate on.
         * @minLength 1
         */
        doctype: string;
        /**
         * The ERPNext document fields to include in the response.
         * @minItems 1
         */
        fields?: Array<string>;
        /** Filters passed through to ERPNext as JSON. */
        filters?: Record<string, unknown> | Array<Array<unknown>>;
        /**
         * The ERPNext order_by expression such as modified desc.
         * @minLength 1
         */
        order_by?: string;
        /**
         * The zero-based ERPNext list offset.
         * @minimum 0
         */
        start?: number;
        /**
         * The maximum number of ERPNext documents to return.
         * @exclusiveMinimum 0
         */
        page_length?: number;
      };
      output: {
        /** The ERPNext documents returned by the request. */
        documents: Array<Record<string, unknown>>;
      };
    };
    /** Set one field value on an ERPNext document and return the updated document. */
    "erpnext.set_document_value": {
      input: {
        /**
         * The ERPNext DocType name to operate on.
         * @minLength 1
         */
        doctype: string;
        /**
         * The unique name of the ERPNext document.
         * @minLength 1
         */
        name: string;
        /**
         * The ERPNext field name to update.
         * @minLength 1
         */
        fieldname: string;
        /** The field value or object returned by ERPNext. */
        value: string | number | boolean | null | Array<unknown> | Record<string, unknown>;
      };
      output: {
        /** An ERPNext document or nested payload. */
        document: Record<string, unknown>;
      };
    };
    /** Update selected fields on one ERPNext document. */
    "erpnext.update_document": {
      input: {
        /**
         * The ERPNext DocType name to operate on.
         * @minLength 1
         */
        doctype: string;
        /**
         * The unique name of the ERPNext document.
         * @minLength 1
         */
        name: string;
        /** The document fields to create or update in ERPNext. */
        fields: Record<string, unknown>;
      };
      output: {
        /** An ERPNext document or nested payload. */
        document: Record<string, unknown>;
      };
    };
  }
}
