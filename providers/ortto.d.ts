import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Ortto contacts by their contact IDs and return the requested fields. */
    "ortto.get_people_by_ids": {
      input: {
        /**
         * Ortto contact IDs to retrieve.
         * @minItems 1
         */
        contact_ids: Array<string>;
        /**
         * Ortto person field IDs to return for each contact.
         * @maxItems 150
         */
        fields?: Array<string>;
      };
      output: {
        /** Contacts returned by Ortto. */
        contacts: Array<Record<string, unknown>>;
        /** Ortto metadata for the request, including totals when returned. */
        meta: Record<string, unknown> | null;
        /** The offset used by Ortto for this response. */
        offset: number | null;
        /** The offset for the next page when returned by Ortto. */
        next_offset: number | null;
        /** The cursor ID for fetching the next page when returned. */
        cursor_id: string | null;
        /** Whether Ortto reported another page of contacts. */
        has_more: boolean | null;
        /** The raw Ortto API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve people from Ortto's customer data platform with optional fields, filters, pagination, and sorting. */
    "ortto.list_people": {
      input: {
        /**
         * The number of people to return. Ortto allows 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        limit?: number;
        /**
         * The offset for offset-based pagination.
         * @minimum 0
         */
        offset?: number;
        /**
         * The cursor ID returned by the previous Ortto response.
         * @minLength 1
         */
        cursor_id?: string;
        /**
         * Ortto person field IDs to return for each contact.
         * @maxItems 150
         */
        fields?: Array<string>;
        /**
         * A text search query for matching people.
         * @minLength 1
         */
        q?: string;
        /** The Ortto person collection to query. */
        type?: "" | "archived";
        /** Sort direction for the selected sort_by_field_id. */
        sort_order?: "asc" | "desc";
        /**
         * The Ortto person field ID to sort by.
         * @minLength 1
         */
        sort_by_field_id?: string;
        /** An Ortto filter object copied from the Ortto app or built according to the Ortto person/get filter documentation. */
        filter?: Record<string, unknown>;
      };
      output: {
        /** Contacts returned by Ortto. */
        contacts: Array<Record<string, unknown>>;
        /** Ortto metadata for the request, including totals when returned. */
        meta: Record<string, unknown> | null;
        /** The offset used by Ortto for this response. */
        offset: number | null;
        /** The offset for the next page when returned by Ortto. */
        next_offset: number | null;
        /** The cursor ID for fetching the next page when returned. */
        cursor_id: string | null;
        /** Whether Ortto reported another page of contacts. */
        has_more: boolean | null;
        /** The raw Ortto API response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Create or update one or more Ortto people using Ortto's person/merge endpoint and merge strategy options. */
    "ortto.merge_people": {
      input: {
        /**
         * People to create or update. Ortto allows 1 to 100 people per request.
         * @minItems 1
         * @maxItems 100
         */
        people: Array<{
          /** Ortto field ID/value pairs, such as str::email or str:cm:custom-field. */
          fields: Record<string, unknown>;
          /** Ortto location data for a person, such as source_ip or address/custom location fields. */
          location?: Record<string, unknown>;
          /** Tags to apply to this person. */
          tags?: Array<string>;
          /** Tags to remove from this person. */
          unset_tags?: Array<string>;
          /** Person fields whose existing values should be cleared when supported by the selected merge strategy. */
          clear_fields?: Record<string, boolean>;
          [key: string]: unknown;
        }>;
        /** Whether Ortto should queue the merge asynchronously. */
        async?: boolean;
        /**
         * Ortto person field IDs used to identify existing people.
         * @minItems 1
         * @maxItems 3
         */
        merge_by?: Array<string>;
        /** Ortto merge strategy: 1 append only, 2 overwrite existing, or 3 ignore existing. */
        merge_strategy?: 1 | 2 | 3;
        /** Ortto find strategy: 0 any, 1 next only if previous empty, or 2 all. */
        find_strategy?: 0 | 1 | 2;
        /** Whether to update only existing contacts and skip creating new contacts. */
        skip_non_existing?: boolean;
        /** Optional alternate field mapping for Ortto merge_by identifiers. */
        merge_by_alt_fields?: Record<string, unknown>;
        /**
         * Ortto field ID used to compare new contacts against the email suppression list.
         * @minLength 1
         */
        suppression_list_field_id?: string;
      };
      output: {
        /** Whether Ortto accepted the merge request. */
        accepted: boolean;
        /** Contacts returned by Ortto when the response includes contact records. */
        contacts: Array<Record<string, unknown>>;
        /** The raw Ortto API response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
