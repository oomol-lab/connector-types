import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Submit JSON field values as a new row on a Formaloo form. */
    "formaloo.create_row": {
      input: {
        /**
         * Unique slug of the Formaloo form.
         * @minLength 1
         */
        formSlug: string;
        /** Form field values keyed by Formaloo field slug or alias. */
        values: Record<string, unknown>;
        /** Row tag slugs to attach to the submission. */
        rowTags?: Array<string>;
        /** Whether keys in values are field aliases instead of field slugs. */
        submitByAlias?: boolean;
        /** Language slug to associate with the submission. */
        language?: string;
      };
      output: {
        /** A Formaloo object with provider-defined fields. */
        row: Record<string, unknown>;
      };
    };
    /** Permanently delete a submitted Formaloo row. */
    "formaloo.delete_row": {
      input: {
        /**
         * Unique slug of the submitted row.
         * @minLength 1
         */
        rowSlug: string;
      };
      output: {
        /** Status code returned in the Formaloo deletion response. */
        status: number;
        /** Error details returned by Formaloo, empty after a successful deletion. */
        errors: Record<string, unknown>;
      };
    };
    /** Retrieve Formaloo form settings, metadata, and field definitions by slug. */
    "formaloo.get_form": {
      input: {
        /**
         * Unique slug of the Formaloo form.
         * @minLength 1
         */
        formSlug: string;
      };
      output: {
        /** A Formaloo object with provider-defined fields. */
        form: Record<string, unknown>;
      };
    };
    /** Retrieve one submitted Formaloo row by slug. */
    "formaloo.get_row": {
      input: {
        /**
         * Unique slug of the submitted row.
         * @minLength 1
         */
        rowSlug: string;
      };
      output: {
        /** A Formaloo object with provider-defined fields. */
        row: Record<string, unknown>;
      };
    };
    /** List forms created by or shared with the current Formaloo account. */
    "formaloo.list_forms": {
      input: {
        /**
         * Page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /** Search text matched against form titles and slugs. */
        search?: string;
        /** Category slug used to filter forms. */
        category?: string;
        /** Tag slug used to filter forms. */
        tag?: string;
        /** Comma-separated sort fields; prefix a field with a minus sign for descending order. */
        sortBy?: string;
      };
      output: {
        /** Total number of matching records. */
        count: number;
        /** URL of the next page, or null when this is the last page. */
        next: string | null;
        /** URL of the previous page, or null when this is the first page. */
        previous: string | null;
        /** Number of records requested per page. */
        pageSize: number;
        /** Total number of pages. */
        pageCount: number;
        /** Current page number. */
        currentPage: number;
        /** Forms returned for this page. */
        forms: Array<Record<string, unknown>>;
      };
    };
    /** List submitted rows for a Formaloo form with filters and pagination. */
    "formaloo.list_rows": {
      input: {
        /**
         * Unique slug of the Formaloo form.
         * @minLength 1
         */
        formSlug: string;
        /**
         * Page number to request.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results to return per page.
         * @minimum 1
         */
        pageSize?: number;
        /** Search text matched against searchable row data and row slug. */
        search?: string;
        /**
         * Creation date filter in YYYY-MM-DD format.
         * @format date
         */
        createdAt?: string;
        /**
         * Update date filter in YYYY-MM-DD format.
         * @format date
         */
        updatedAt?: string;
        /** Submission number used to filter rows. */
        submitNumber?: string;
        /** Comma-separated row tag slugs used to filter rows. */
        tags?: string;
        /** Tracking code used to filter rows. */
        trackingCode?: string;
        /** Comma-separated sort fields; prefix a field with a minus sign for descending order. */
        sortBy?: string;
      };
      output: {
        /** Total number of matching records. */
        count: number;
        /** URL of the next page, or null when this is the last page. */
        next: string | null;
        /** URL of the previous page, or null when this is the first page. */
        previous: string | null;
        /** Number of records requested per page. */
        pageSize: number;
        /** Total number of pages. */
        pageCount: number;
        /** Current page number. */
        currentPage: number;
        /** Rows returned for this page. */
        rows: Array<Record<string, unknown>>;
      };
    };
    /** Update JSON field values or tags on an existing Formaloo row. */
    "formaloo.update_row": {
      input: {
        /**
         * Unique slug of the submitted row.
         * @minLength 1
         */
        rowSlug: string;
        /** Form field values keyed by Formaloo field slug or alias. */
        values?: Record<string, unknown>;
        /** Replacement row tag slugs. */
        rowTags?: Array<string>;
        /** Formaloo row status value. */
        status?: string;
      };
      output: {
        /** A Formaloo object with provider-defined fields. */
        row: Record<string, unknown>;
      };
    };
  }
}
