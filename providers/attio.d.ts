import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a record for an Attio object using documented attribute value shapes. */
    "attio.create_record": {
      input: {
        /**
         * The object ID or API slug, such as people or companies.
         * @minLength 1
         */
        object: string;
        /** Record values keyed by Attio attribute API slug or attribute ID. Values are forwarded using Attio's documented attribute value shapes. */
        values: Record<string, unknown>;
      };
      output: {
        /** A raw Attio record returned by the API. */
        record: Record<string, unknown> | null;
      };
    };
    /** Delete a single Attio record by object and record ID. */
    "attio.delete_record": {
      input: {
        /**
         * The object ID or API slug, such as people or companies.
         * @minLength 1
         */
        object: string;
        /**
         * The Attio record UUID.
         * @format uuid
         */
        recordId: string;
      };
      output: {
        /** Whether Attio accepted the record delete request. */
        deleted: boolean;
        /** The raw Attio delete response payload. */
        raw: unknown;
      };
    };
    /** Get one Attio object by object ID or API slug. */
    "attio.get_object": {
      input: {
        /**
         * The object ID or API slug, such as people or companies.
         * @minLength 1
         */
        object: string;
      };
      output: {
        /** A raw Attio object returned by the API. */
        object: Record<string, unknown> | null;
      };
    };
    /** Get a single Attio record by object and record ID. */
    "attio.get_record": {
      input: {
        /**
         * The object ID or API slug, such as people or companies.
         * @minLength 1
         */
        object: string;
        /**
         * The Attio record UUID.
         * @format uuid
         */
        recordId: string;
      };
      output: {
        /** A raw Attio record returned by the API. */
        record: Record<string, unknown> | null;
      };
    };
    /** Identify the current Attio access token, its workspace, and the scopes attached to it. */
    "attio.identify": {
      input: Record<string, never>;
      output: {
        /** Whether the token is active. */
        active: boolean;
        /** The Attio workspace ID associated with the token. */
        workspaceId: string | null;
        /** The Attio workspace name associated with the token. */
        workspaceName: string | null;
        /** The Attio workspace slug associated with the token. */
        workspaceSlug: string | null;
        /** The space-separated Attio scopes associated with the token. */
        scope: string | null;
        /** Raw Attio token and workspace metadata. */
        raw: Record<string, unknown>;
      };
    };
    /** List attributes defined on an Attio object or list. */
    "attio.list_attributes": {
      input: {
        /** Whether to list attributes for an Attio object or list. */
        target: "objects" | "lists";
        /**
         * The object or list ID, or object/list API slug.
         * @minLength 1
         */
        identifier: string;
        /**
         * The maximum number of attributes to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /** Whether to include archived attributes. */
        showArchived?: boolean;
      };
      output: {
        /** Attio attributes for the requested object or list. */
        attributes: Array<Record<string, unknown>>;
        /** Pagination parameters used for list-style Attio endpoints. */
        pagination: {
          /**
           * The maximum number of items requested from Attio.
           * @minimum 1
           */
          limit?: number;
          /**
           * The zero-based offset requested from Attio.
           * @minimum 0
           */
          offset?: number;
        } | null;
      };
    };
    /** List all system-defined and user-defined objects in an Attio workspace. */
    "attio.list_objects": {
      input: Record<string, never>;
      output: {
        /** Attio objects in the workspace. */
        objects: Array<Record<string, unknown>>;
      };
    };
    /** List Attio records for an object with optional filtering, view filtering, sorting, limit, and offset. */
    "attio.list_records": {
      input: {
        /**
         * The object ID or API slug, such as people or companies.
         * @minLength 1
         */
        object: string;
        /** Attio filter object forwarded to the list records endpoint. Cannot be combined with filterViewId. */
        filter?: Record<string, unknown>;
        /**
         * A saved view UUID whose filter configuration should be applied.
         * @format uuid
         */
        filterViewId?: string;
        /** Sort definitions forwarded to Attio. */
        sorts?: Array<Record<string, unknown>>;
        /**
         * The maximum number of records to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * The zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Attio records returned by the query. */
        records: Array<Record<string, unknown>>;
        /** Pagination parameters used for list-style Attio endpoints. */
        pagination: {
          /**
           * The maximum number of items requested from Attio.
           * @minimum 1
           */
          limit?: number;
          /**
           * The zero-based offset requested from Attio.
           * @minimum 0
           */
          offset?: number;
        } | null;
      };
    };
    /** Update an Attio record by appending or overwriting multiselect values according to Attio's PATCH and PUT semantics. */
    "attio.update_record": {
      input: {
        /**
         * The object ID or API slug, such as people or companies.
         * @minLength 1
         */
        object: string;
        /**
         * The Attio record UUID.
         * @format uuid
         */
        recordId: string;
        /** Record values keyed by Attio attribute API slug or attribute ID. Values are forwarded using Attio's documented attribute value shapes. */
        values: Record<string, unknown>;
        /** How Attio should handle multiselect attribute values. */
        mode?: "append_multiselect" | "overwrite_multiselect";
      };
      output: {
        /** A raw Attio record returned by the API. */
        record: Record<string, unknown> | null;
      };
    };
    /** Create or update an Attio record for an object using a unique matching attribute. */
    "attio.upsert_record": {
      input: {
        /**
         * The object ID or API slug, such as people or companies.
         * @minLength 1
         */
        object: string;
        /**
         * The unique attribute API slug or ID used to find matches.
         * @minLength 1
         */
        matchingAttribute: string;
        /** Record values keyed by Attio attribute API slug or attribute ID. Values are forwarded using Attio's documented attribute value shapes. */
        values: Record<string, unknown>;
      };
      output: {
        /** A raw Attio record returned by the API. */
        record: Record<string, unknown> | null;
      };
    };
  }
}
