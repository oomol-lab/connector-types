import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create up to 200 Jinshuju entries. A partial success returns created_count and per-row errors; all rows failing produces an error with those details. Batch creation does not run single-create callbacks. */
    "jinshuju.batch_create_entries": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /**
         * Entries to create, in result-index order.
         * @minItems 1
         * @maxItems 200
         */
        entries: Array<Record<string, unknown>>;
      };
      output: {
        /** Number of entries created. */
        created_count: number;
        /** Failed rows; do not retry successful rows. */
        errors: Array<{
          /** Zero-based index in the submitted array. */
          index: number;
          /** Failure reason. */
          reason: string;
          [key: string]: unknown;
        }>;
        /** Values ignored on successfully created rows. */
        ignored_fields: Array<{
          /** Zero-based index in the submitted array. */
          index?: number;
          /** Field API code. */
          field?: string;
          /** Reason the value was not saved. */
          reason?: string;
          /** Explanation from Jinshuju. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Copy a Jinshuju form, optionally choosing its name, folder and notification rules. */
    "jinshuju.copy_form": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /** New form name; omitted uses the server default. */
        name?: string;
        /** Target folder token or ID; omitted leaves the copy outside folders. */
        folder_token?: string;
        /** Copy notification rules; requires manage permission and the same account as the source creator. */
        with_notification_rules?: boolean;
      };
      output: {
        /** Form token. */
        token?: string;
        /** Form name. */
        name?: string;
        /** Number of form entries. */
        entries_count?: number;
        /** Folder token, or null when not in a folder. */
        folder_token?: string | null;
        /** Resource kind: form, table or quickpay. */
        kind?: string;
        /** Form scene. */
        scene?: string;
        /**
         * Official form URL; do not derive it from the token.
         * @format uri
         */
        url?: string;
        /** Form description, possibly HTML. */
        description?: string | null;
        /** Ordered field definitions, each keyed by its API code. */
        fields?: Array<Record<string, unknown>>;
        /** Form settings. */
        setting?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Submit one Jinshuju entry. Field validation and display rules apply; inspect ignored_fields for values not saved. */
    "jinshuju.create_entry": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /** Field values keyed by API code or alias. Read get_form first. Attachment values accept uploaded IDs, existing same-form URLs, or official inline base64 objects up to 5 MB; arbitrary external URLs are not new uploads. Signature and formula fields cannot be written. */
        entry: Record<string, unknown>;
      };
      output: {
        /** Form token. */
        form: string;
        /** Form name. */
        form_name: string;
        /** Entry fields keyed by API code or alias, with system metadata. */
        entry: {
          /** Entry serial number within the form. */
          serial_number?: number;
          /** Entry token. */
          token?: string;
          [key: string]: unknown;
        };
        /**
         * URL for viewing the entry in Jinshuju; absent for quick payment forms.
         * @format uri
         */
        url?: string;
        /** Submitted values not saved because of field rules or address restrictions. */
        ignored_fields?: Array<{
          /** Field API code. */
          field?: string;
          /** Reason the value was not saved. */
          reason?: string;
          /** Explanation from Jinshuju. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Create a Jinshuju folder for forms or tables. */
    "jinshuju.create_folder": {
      input: {
        /**
         * Folder name.
         * @minLength 1
         */
        name: string;
        /** Folder kind; defaults to form. */
        kind?: "form" | "table" | null;
      };
      output: {
        /** Folder token. */
        token?: string;
        /** Folder name. */
        name?: string;
        /** Folder kind; legacy form folders may return null. */
        kind?: string | null;
        /**
         * Creation time in UTC.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Delete one Jinshuju form entry by serial number. */
    "jinshuju.delete_entry": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /** Entry serial number within the form. */
        serial_number: number;
      };
      output: {
        /** Entry serial number within the form. */
        serial_number: number;
        [key: string]: unknown;
      };
    };
    /** Read the user behind the token; an enterprise token returns the account owner. */
    "jinshuju.get_current_user": {
      input: Record<string, never>;
      output: {
        /** User ID. */
        id?: string;
        /** Display name. */
        name?: string | null;
        /** Bound email, or null. */
        email?: string | null;
        /** Bound mobile number, or null. */
        mobile?: string | null;
        /** Role in the account. */
        role?: string;
        /** Account ID. */
        billing_account_id?: string;
        /**
         * Creation time in UTC.
         * @format date-time
         */
        created_at?: string;
        [key: string]: unknown;
      };
    };
    /** Read one Jinshuju entry by its form token and serial number. */
    "jinshuju.get_entry": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /** Entry serial number within the form. */
        serial_number: number;
        /** Return only these field API codes; serial_number is always included. */
        fields?: Array<string>;
        /** Wrap field values with their labels; system keys remain unchanged. */
        include_labels?: boolean;
      };
      output: {
        /** Form token. */
        form: string;
        /** Form name. */
        form_name: string;
        /** Entry fields keyed by API code or alias, with system metadata. */
        entry: {
          /** Entry serial number within the form. */
          serial_number?: number;
          /** Entry token. */
          token?: string;
          [key: string]: unknown;
        };
        /**
         * URL for viewing the entry in Jinshuju; absent for quick payment forms.
         * @format uri
         */
        url?: string;
        /** Submitted values not saved because of field rules or address restrictions. */
        ignored_fields?: Array<{
          /** Field API code. */
          field?: string;
          /** Reason the value was not saved. */
          reason?: string;
          /** Explanation from Jinshuju. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Read a Jinshuju form's structure and field API codes before querying or writing entries. */
    "jinshuju.get_form": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /** Include available analytics on analysable fields. */
        include_analytics?: boolean;
        /** Include form theme. */
        include_theme?: boolean;
        /** Include field display rules. */
        include_field_rules?: boolean;
        /** Include redirect rules. */
        include_redirect_rules?: boolean;
        /** Include source-tracking links. */
        include_extended_attributes?: boolean;
        /** Include exam settings for exam forms. */
        include_exam_setting?: boolean;
        /** Include payment statistics for forms bound to a payment account. */
        include_transactions?: boolean;
      };
      output: {
        /** Form token. */
        token?: string;
        /** Form name. */
        name?: string;
        /** Number of form entries. */
        entries_count?: number;
        /** Folder token, or null when not in a folder. */
        folder_token?: string | null;
        /** Resource kind: form, table or quickpay. */
        kind?: string;
        /** Form scene. */
        scene?: string;
        /**
         * Official form URL; do not derive it from the token.
         * @format uri
         */
        url?: string;
        /** Form description, possibly HTML. */
        description?: string | null;
        /** Ordered field definitions, each keyed by its API code. */
        fields?: Array<Record<string, unknown>>;
        /** Form settings. */
        setting?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Query Jinshuju form entries with field selection, filters, sorting and pagination. Preserve the query when continuing with next. */
    "jinshuju.list_entries": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /**
         * Page size; defaults to 50, maximum 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Page number from 1. (page - 1) * limit must not exceed 10000. Use only one of page, next and skip.
         * @minimum 1
         */
        page?: number;
        /**
         * Deprecated row offset; prefer page. Use only one of page, next and skip.
         * @minimum 0
         * @maximum 10000
         */
        skip?: number;
        /** Entry cursor from the previous page; preserve its value. */
        next?: number | string;
        /** Return only these field API codes; serial_number is always included. */
        fields?: Array<string>;
        /** Filter conditions. Connector encodes the array as query JSON. Form filters use form_name, created_at, last_entry_created_at or entries_count; entry filters use field API codes, creator_id or serial_number. */
        filters?: Array<{
          /**
           * Field API code or supported resource attribute.
           * @minLength 1
           */
          field: string;
          /** Comparison operator supported by this field. */
          operator: "eq" | "ne" | "any_in" | "none_in" | "between" | "not_between" | "null" | "not_null" | "gte" | "gt" | "lte" | "lt" | "like" | "not_like" | "within_last";
          /** Comparison value; between uses [min,max], within_last uses {unit,n}, and null/not_null omit value. */
          value?: unknown;
          /** Use date_time only for reservation date conditions. */
          scope_attr?: "date_time";
          /** Entry filters: positive groups combine conditions with AND, negative groups with OR; groups combine with OR. Omit for creator_id and serial_number. */
          group_index?: number;
        }>;
        /** Wrap field values with their labels; system keys remain unchanged. */
        include_labels?: boolean;
        /**
         * Search all searchable fields; unsupported above 99999 entries without analytics unless creator_id restricts the submitter.
         * @maxLength 200
         */
        keyword?: string;
        /** Entries created at or after this Beijing time, e.g. 2024-01-01 08:00:00; ignored with filters or keyword. */
        created_at?: string;
        /** Entry sort rules, encoded as query JSON. */
        sort?: Array<{
          /** Sortable field API code. */
          api_code: string;
          /** Sort direction; defaults to asc. */
          order?: "asc" | "desc";
        }>;
      };
      output: {
        /** Total matching records. */
        total: number;
        /** Number of records on this page. */
        count: number;
        /** Records on this page. */
        data: Array<{
          /** Entry serial number within the form. */
          serial_number?: number;
          /** Entry token. */
          token?: string;
          [key: string]: unknown;
        }>;
        /** Next entry cursor, or null on the last page. */
        next: number | null;
        [key: string]: unknown;
      };
    };
    /** List manageable Jinshuju folders; an enterprise token returns the account owner's folders. */
    "jinshuju.list_folders": {
      input: {
        /**
         * Page size; defaults to 50, maximum 100.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Page number from 1. (page - 1) * limit must not exceed 10000. Use only one of page, next and skip.
         * @minimum 1
         */
        page?: number;
        /**
         * Next folder row offset from the previous response.
         * @minimum 0
         */
        next?: number;
      };
      output: {
        /** Total matching records. */
        total: number;
        /** Number of records on this page. */
        count: number;
        /** Records on this page. */
        data: Array<{
          /** Folder token. */
          token?: string;
          /** Folder name. */
          name?: string;
          /** Folder kind; legacy form folders may return null. */
          kind?: string | null;
          /**
           * Creation time in UTC.
           * @format date-time
           */
          created_at?: string;
          [key: string]: unknown;
        }>;
        /** Next row offset, or null on the last page. */
        next: number | null;
        [key: string]: unknown;
      };
    };
    /** Find Jinshuju forms by name, filters and sorting, with pagination. Personal tokens see owned and shared forms; enterprise tokens see the account's forms. */
    "jinshuju.list_forms": {
      input: {
        /**
         * Page size; defaults to 50, maximum 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Page number from 1. (page - 1) * limit must not exceed 10000. Use only one of page, next and skip.
         * @minimum 1
         */
        page?: number;
        /**
         * Deprecated row offset; prefer page. Use only one of page, next and skip.
         * @minimum 0
         * @maximum 10000
         */
        skip?: number;
        /** Opaque cursor from the previous form page; may be row:<offset>. */
        next?: string;
        /** Case-insensitive name search; an array matches any supplied name. */
        q?: string | Array<string>;
        /** Filter conditions. Connector encodes the array as query JSON. Form filters use form_name, created_at, last_entry_created_at or entries_count; entry filters use field API codes, creator_id or serial_number. */
        filters?: Array<{
          /**
           * Field API code or supported resource attribute.
           * @minLength 1
           */
          field: string;
          /** Comparison operator supported by this field. */
          operator: "eq" | "ne" | "any_in" | "none_in" | "between" | "not_between" | "null" | "not_null" | "gte" | "gt" | "lte" | "lt" | "like" | "not_like" | "within_last";
          /** Comparison value; between uses [min,max], within_last uses {unit,n}, and null/not_null omit value. */
          value?: unknown;
          /** Use date_time only for reservation date conditions. */
          scope_attr?: "date_time";
          /** Entry filters: positive groups combine conditions with AND, negative groups with OR; groups combine with OR. Omit for creator_id and serial_number. */
          group_index?: number;
        }>;
        /** Form sort rules, encoded as query JSON. */
        sort?: Array<{
          /** Form attribute to sort by. */
          field: "created_at" | "last_entry_created_at" | "entries_count";
          /** Sort direction; defaults to asc. */
          order?: "asc" | "desc";
        }>;
        /** Include payment statistics for forms bound to a payment account. */
        include_transactions?: boolean;
      };
      output: {
        /** Total matching records. */
        total: number;
        /** Number of records on this page. */
        count: number;
        /** Records on this page. */
        data: Array<{
          /** Form token. */
          token?: string;
          /** Form name. */
          name?: string;
          /** Number of form entries. */
          entries_count?: number;
          /** Folder token, or null when not in a folder. */
          folder_token?: string | null;
          [key: string]: unknown;
        }>;
        /** Next form cursor, or null on the last page. */
        next: string | null;
        [key: string]: unknown;
      };
    };
    /** Move a Jinshuju form into a folder, or pass null to remove it from its folder for all collaborators. Supply original_folder_token on retries to avoid moving it out of a later folder. */
    "jinshuju.move_form_to_folder": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /** Target folder token; null moves the form out of folders. */
        folder_token: string | null;
        /** Source folder token; defaults to the current folder. Supply it on retries. */
        original_folder_token?: string;
      };
      output: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /** Folder token after moving, or null. */
        folder_token: string | null;
        [key: string]: unknown;
      };
    };
    /** Replace an entry using PUT. Writable fields omitted from entry are cleared. Use update_entry for a partial update. */
    "jinshuju.replace_entry": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /** Entry serial number within the form. */
        serial_number: number;
        /** Field values keyed by API code or alias. Read get_form first. Attachment values accept uploaded IDs, existing same-form URLs, or official inline base64 objects up to 5 MB; arbitrary external URLs are not new uploads. Signature and formula fields cannot be written. */
        entry: Record<string, unknown>;
      };
      output: {
        /** Form token. */
        form: string;
        /** Form name. */
        form_name: string;
        /** Entry fields keyed by API code or alias, with system metadata. */
        entry: {
          /** Entry serial number within the form. */
          serial_number?: number;
          /** Entry token. */
          token?: string;
          [key: string]: unknown;
        };
        /**
         * URL for viewing the entry in Jinshuju; absent for quick payment forms.
         * @format uri
         */
        url?: string;
        /** Submitted values not saved because of field rules or address restrictions. */
        ignored_fields?: Array<{
          /** Field API code. */
          field?: string;
          /** Reason the value was not saved. */
          reason?: string;
          /** Explanation from Jinshuju. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
    /** Partially update an entry using PATCH. Omitted fields keep their values. An attachment field replaces the whole set; include existing URLs or IDs to retain those files. */
    "jinshuju.update_entry": {
      input: {
        /**
         * Form token from list_forms or get_form.
         * @minLength 1
         */
        form_token: string;
        /** Entry serial number within the form. */
        serial_number: number;
        /** Field values keyed by API code or alias. Read get_form first. Attachment values accept uploaded IDs, existing same-form URLs, or official inline base64 objects up to 5 MB; arbitrary external URLs are not new uploads. Signature and formula fields cannot be written. */
        entry: Record<string, unknown>;
      };
      output: {
        /** Form token. */
        form: string;
        /** Form name. */
        form_name: string;
        /** Entry fields keyed by API code or alias, with system metadata. */
        entry: {
          /** Entry serial number within the form. */
          serial_number?: number;
          /** Entry token. */
          token?: string;
          [key: string]: unknown;
        };
        /**
         * URL for viewing the entry in Jinshuju; absent for quick payment forms.
         * @format uri
         */
        url?: string;
        /** Submitted values not saved because of field rules or address restrictions. */
        ignored_fields?: Array<{
          /** Field API code. */
          field?: string;
          /** Reason the value was not saved. */
          reason?: string;
          /** Explanation from Jinshuju. */
          message?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
    };
  }
}
