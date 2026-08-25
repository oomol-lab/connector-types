import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count entries for a Wufoo form, optionally using entry filters. */
    "wufoo.count_entries": {
      input: {
        /**
         * The permanent form hash or the form title slug used by Wufoo.
         * @minLength 1
         * @maxLength 255
         */
        formIdentifier: string;
        /** How multiple entry filters are grouped. */
        match?: "AND" | "OR";
        /**
         * Entry filters applied in their listed order.
         * @minItems 1
         * @maxItems 20
         */
        filters?: Array<{
          /**
           * The Wufoo field ID to filter, such as EntryId or Field105.
           * @minLength 1
           */
          fieldId: string;
          /** The documented Wufoo comparison operator. */
          operator: "Contains" | "Does_not_contain" | "Begins_with" | "Ends_with" | "Is_less_than" | "Is_greater_than" | "Is_on" | "Is_before" | "Is_after" | "Is_not_equal_to" | "Is_equal_to" | "Is_not_NULL";
          /** The value compared with the selected field. */
          value: string;
        }>;
      };
      output: {
        /**
         * The number of entries matching the request.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Retrieve one Wufoo form by its permanent hash or title slug. */
    "wufoo.get_form": {
      input: {
        /**
         * The permanent form hash or the form title slug used by Wufoo.
         * @minLength 1
         * @maxLength 255
         */
        formIdentifier: string;
        /** Whether the form should include its number of entries received today. */
        includeTodayCount?: boolean;
      };
      output: {
        /** A Wufoo resource whose fields depend on the account and form definition. */
        form: Record<string, unknown>;
      };
    };
    /** List, filter, sort, and page entries for a Wufoo form. */
    "wufoo.list_entries": {
      input: {
        /**
         * The permanent form hash or the form title slug used by Wufoo.
         * @minLength 1
         * @maxLength 255
         */
        formIdentifier: string;
        /** Whether Wufoo should include system metadata such as IP and payment status. */
        includeSystemFields?: boolean;
        /**
         * The zero-based entry offset.
         * @minimum 0
         */
        pageStart?: number;
        /**
         * The maximum number of entries to return.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * The Wufoo field ID used to sort entries.
         * @minLength 1
         */
        sortFieldId?: string;
        /** The direction used to sort entries. */
        sortDirection?: "ASC" | "DESC";
        /** How multiple entry filters are grouped. */
        match?: "AND" | "OR";
        /**
         * Entry filters applied in their listed order.
         * @minItems 1
         * @maxItems 20
         */
        filters?: Array<{
          /**
           * The Wufoo field ID to filter, such as EntryId or Field105.
           * @minLength 1
           */
          fieldId: string;
          /** The documented Wufoo comparison operator. */
          operator: "Contains" | "Does_not_contain" | "Begins_with" | "Ends_with" | "Is_less_than" | "Is_greater_than" | "Is_on" | "Is_before" | "Is_after" | "Is_not_equal_to" | "Is_equal_to" | "Is_not_NULL";
          /** The value compared with the selected field. */
          value: string;
        }>;
      };
      output: {
        /** Entries returned by Wufoo. */
        entries: Array<Record<string, unknown>>;
      };
    };
    /** List the field definitions for a Wufoo form. */
    "wufoo.list_form_fields": {
      input: {
        /**
         * The permanent form hash or the form title slug used by Wufoo.
         * @minLength 1
         * @maxLength 255
         */
        formIdentifier: string;
        /** Whether Wufoo should include additional system metadata fields. */
        includeSystemFields?: boolean;
      };
      output: {
        /** Field definitions returned by Wufoo. */
        fields: Array<Record<string, unknown>>;
      };
    };
    /** List Wufoo forms available to the connected API key. */
    "wufoo.list_forms": {
      input: {
        /**
         * The one-based Wufoo result page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of forms to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Whether each form should include its number of entries received today. */
        includeTodayCount?: boolean;
      };
      output: {
        /** Forms returned by Wufoo. */
        forms: Array<Record<string, unknown>>;
      };
    };
    /** Submit JSON field values as a new entry for a Wufoo form. */
    "wufoo.submit_entry": {
      input: {
        /**
         * The permanent form hash or the form title slug used by Wufoo.
         * @minLength 1
         * @maxLength 255
         */
        formIdentifier: string;
        /** Values keyed by Wufoo field IDs such as Field1 or Field105. */
        fields: Record<string, string>;
      };
      output: {
        /** Whether Wufoo accepted the entry. */
        success: boolean;
        /** The new entry ID when submission succeeds. */
        entryId: number | null;
        /** The Wufoo API link for the new entry when available. */
        entryLink: string | null;
        /** The form redirect URL when configured. */
        redirectUrl: string | null;
        /** The general submission error when validation fails. */
        errorText: string | null;
        /** Field-specific validation errors returned by Wufoo. */
        fieldErrors: Array<{
          /** The Wufoo field ID that failed validation. */
          fieldId: string;
          /** The validation message returned by Wufoo. */
          message: string;
        }>;
      };
    };
  }
}
