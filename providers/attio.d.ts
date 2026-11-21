import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a plaintext comment on a record or entry, or reply to a thread. Requires an explicit workspace member author. */
    "attio.create_comment": {
      input: Record<string, unknown>;
      output: {
        /** Attio resource, including provider-specific fields. */
        comment: Record<string, unknown>;
      };
    };
    /** Create a list entry. */
    "attio.create_entry": {
      input: {
        /**
         * List UUID or API slug.
         * @minLength 1
         */
        list: string;
        /**
         * Object UUID or API slug.
         * @minLength 1
         */
        parentObject: string;
        /**
         * Record UUID.
         * @format uuid
         */
        parentRecordId: string;
        /** Entry attribute values keyed by attribute slug or ID, using Attio value shapes. */
        entryValues?: Record<string, unknown>;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        entry: Record<string, unknown>;
      };
    };
    /** Create a plaintext or Markdown note on a record. */
    "attio.create_note": {
      input: {
        /**
         * Object UUID or API slug.
         * @minLength 1
         */
        parentObject: string;
        /**
         * Record UUID.
         * @format uuid
         */
        parentRecordId: string;
        /** Plaintext note title. */
        title: string;
        /** Text content. */
        content: string;
        /** Note content format; defaults to plaintext when writing content. */
        format?: "plaintext" | "markdown";
        /** Creation timestamp for backdating; cannot be before 1970 or in the future. */
        createdAt?: string;
        /**
         * Optional meeting UUID; null means no meeting.
         * @format uuid
         */
        meetingId?: string | null;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        note: Record<string, unknown>;
      };
    };
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
        record: Record<string, unknown>;
      };
    };
    /** Create a follow-up task. Defaults to incomplete, without deadline, linked records or assignees. */
    "attio.create_task": {
      input: {
        /**
         * Plaintext task content, at most 2000 characters.
         * @maxLength 2000
         */
        content: string;
        /** Task deadline in ISO 8601 format; null removes the deadline. */
        deadlineAt?: string | null;
        /** Whether the task is completed. */
        isCompleted?: boolean;
        /** Records linked by email/domain strings, or objects containing target_object and target_record_id or a matching attribute. Empty array clears links. */
        linkedRecords?: Array<string> | Array<{
          /**
           * Object UUID or API slug.
           * @minLength 1
           */
          target_object: string;
          [key: string]: unknown;
        }>;
        /** Workspace members assigned to the task. Empty array clears assignments. */
        assignees?: Array<{
          /** Actor type. */
          referenced_actor_type: "workspace-member";
          /**
           * Workspace member UUID.
           * @format uuid
           */
          referenced_actor_id: string;
        } | {
          /**
           * Workspace member email address.
           * @format email
           */
          workspace_member_email_address: string;
        }>;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        task: Record<string, unknown>;
      };
    };
    /** Delete a comment. */
    "attio.delete_comment": {
      input: {
        /**
         * Comment UUID.
         * @format uuid
         */
        commentId: string;
      };
      output: {
        /** Whether deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Remove a list entry without deleting its parent record. */
    "attio.delete_entry": {
      input: {
        /**
         * List UUID or API slug.
         * @minLength 1
         */
        list: string;
        /**
         * List entry UUID.
         * @format uuid
         */
        entryId: string;
      };
      output: {
        /** Whether deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Delete a note. */
    "attio.delete_note": {
      input: {
        /**
         * Note UUID.
         * @format uuid
         */
        noteId: string;
      };
      output: {
        /** Whether deletion succeeded. */
        deleted: boolean;
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
    /** Delete a task. */
    "attio.delete_task": {
      input: {
        /**
         * Task UUID.
         * @format uuid
         */
        taskId: string;
      };
      output: {
        /** Whether deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Get a comment. */
    "attio.get_comment": {
      input: {
        /**
         * Comment UUID.
         * @format uuid
         */
        commentId: string;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        comment: Record<string, unknown>;
      };
    };
    /** Get a list entry and its attribute values. */
    "attio.get_entry": {
      input: {
        /**
         * List UUID or API slug.
         * @minLength 1
         */
        list: string;
        /**
         * List entry UUID.
         * @format uuid
         */
        entryId: string;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        entry: Record<string, unknown>;
      };
    };
    /** Get a list by ID or slug. */
    "attio.get_list": {
      input: {
        /**
         * List UUID or API slug.
         * @minLength 1
         */
        list: string;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        list: Record<string, unknown>;
      };
    };
    /** Get a note. */
    "attio.get_note": {
      input: {
        /**
         * Note UUID.
         * @format uuid
         */
        noteId: string;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        note: Record<string, unknown>;
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
        object: Record<string, unknown>;
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
        record: Record<string, unknown>;
      };
    };
    /** Get a task. */
    "attio.get_task": {
      input: {
        /**
         * Task UUID.
         * @format uuid
         */
        taskId: string;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        task: Record<string, unknown>;
      };
    };
    /** Get a thread and paginate its comments. */
    "attio.get_thread": {
      input: {
        /**
         * Thread UUID.
         * @format uuid
         */
        threadId: string;
        /**
         * Maximum comments, up to 250.
         * @minimum 1
         * @maximum 250
         */
        limit?: number;
        /** Pagination cursor from the previous response. */
        cursor?: string;
        /** Only return comments created after this timestamp; null applies no time filter. */
        createdAfter?: string | null;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        thread: Record<string, unknown>;
        /** Cursor pagination returned by Attio. */
        pagination: {
          /** Cursor for the next page, or null at the end. */
          next_cursor: string | null;
        } | null;
      };
    };
    /** Get a workspace member. */
    "attio.get_workspace_member": {
      input: {
        /**
         * Workspace member UUID.
         * @format uuid
         */
        memberId: string;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        member: Record<string, unknown>;
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
    /** List attributes on an object, list or activity. Requires the selected target configuration read scope. */
    "attio.list_attributes": {
      input: {
        /** Whether to list attributes for an object, list or activity. */
        target: "objects" | "lists" | "activities";
        /**
         * The object, list or activity UUID or API slug.
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
        /** Attio attributes for the requested object, list or activity. */
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
    /** Query entries in a list with filters, sorting and offset pagination. */
    "attio.list_entries": {
      input: {
        /**
         * List UUID or API slug.
         * @minLength 1
         */
        list: string;
        /** Attio filter. Cannot be combined with filterViewId. */
        filter?: Record<string, unknown>;
        /**
         * Saved view whose filters are applied; sorting and pagination remain independent.
         * @format uuid
         */
        filterViewId?: string;
        /** Attio sort definitions, by attribute or path. */
        sorts?: Array<Record<string, unknown>>;
        /**
         * Maximum number of results to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Returned entries. */
        entries: Array<Record<string, unknown>>;
      };
    };
    /** List saved views and their filters for an Attio list. */
    "attio.list_list_views": {
      input: {
        /**
         * List UUID or API slug.
         * @minLength 1
         */
        list: string;
        /** Whether to include archived results. */
        showArchived?: boolean;
        /**
         * Maximum number of views, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Pagination cursor from the previous response. */
        cursor?: string;
      };
      output: {
        /** Returned views. */
        views: Array<Record<string, unknown>>;
        /** Cursor pagination returned by Attio. */
        pagination: {
          /** Cursor for the next page, or null at the end. */
          next_cursor: string | null;
        } | null;
      };
    };
    /** List all lists in the workspace. */
    "attio.list_lists": {
      input: Record<string, never>;
      output: {
        /** Returned lists. */
        lists: Array<Record<string, unknown>>;
      };
    };
    /** List notes, optionally filtered by parent record. */
    "attio.list_notes": {
      input: {
        /**
         * Object UUID or API slug.
         * @minLength 1
         */
        parentObject?: string;
        /**
         * Record UUID.
         * @format uuid
         */
        parentRecordId?: string;
        /**
         * Maximum notes, up to 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Returned notes. */
        notes: Array<Record<string, unknown>>;
      };
    };
    /** List saved views and their filters for an Attio object. */
    "attio.list_object_views": {
      input: {
        /**
         * Object UUID or API slug.
         * @minLength 1
         */
        object: string;
        /** Whether to include archived results. */
        showArchived?: boolean;
        /**
         * Maximum number of views, from 1 to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** Pagination cursor from the previous response. */
        cursor?: string;
      };
      output: {
        /** Returned views. */
        views: Array<Record<string, unknown>>;
        /** Cursor pagination returned by Attio. */
        pagination: {
          /** Cursor for the next page, or null at the end. */
          next_cursor: string | null;
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
    /** List the list entries belonging to a record. */
    "attio.list_record_entries": {
      input: {
        /**
         * Object UUID or API slug.
         * @minLength 1
         */
        object: string;
        /**
         * Record UUID.
         * @format uuid
         */
        recordId: string;
        /**
         * Maximum results, up to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Returned entries. */
        entries: Array<Record<string, unknown>>;
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
    /** List available options for an object, list or activity attribute. Requires the selected target configuration read scope. */
    "attio.list_select_options": {
      input: {
        /** Attribute owner type. */
        target: "objects" | "lists" | "activities";
        /**
         * Object, list or activity UUID or slug.
         * @minLength 1
         */
        identifier: string;
        /**
         * Attribute UUID or API slug.
         * @minLength 1
         */
        attribute: string;
        /** Whether to include archived results. */
        showArchived?: boolean;
      };
      output: {
        /** Returned options. */
        options: Array<Record<string, unknown>>;
      };
    };
    /** List available statuses for an object or list attribute. Requires the selected target configuration read scope. */
    "attio.list_statuses": {
      input: {
        /** Attribute owner type. */
        target: "objects" | "lists";
        /**
         * Object or list UUID or slug.
         * @minLength 1
         */
        identifier: string;
        /**
         * Attribute UUID or API slug.
         * @minLength 1
         */
        attribute: string;
        /** Whether to include archived results. */
        showArchived?: boolean;
      };
      output: {
        /** Returned statuses. */
        statuses: Array<Record<string, unknown>>;
      };
    };
    /** List tasks filtered by completion, assignee or linked record. */
    "attio.list_tasks": {
      input: {
        /**
         * Maximum number of results to return.
         * @minimum 1
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
        /** Task sort order. */
        sort?: "created_at:asc" | "created_at:desc" | "completed_at:asc" | "completed_at:desc";
        /**
         * Object UUID or API slug.
         * @minLength 1
         */
        linkedObject?: string;
        /**
         * Record UUID.
         * @format uuid
         */
        linkedRecordId?: string;
        /** Member ID or email; null or an empty string finds unassigned tasks. */
        assignee?: string | null;
        /** Whether the task is completed. */
        isCompleted?: boolean;
      };
      output: {
        /** Returned tasks. */
        tasks: Array<Record<string, unknown>>;
      };
    };
    /** List discussion threads, optionally filtered by record or list entry. */
    "attio.list_threads": {
      input: {
        /**
         * Object UUID or API slug.
         * @minLength 1
         */
        object?: string;
        /**
         * Record UUID.
         * @format uuid
         */
        recordId?: string;
        /**
         * List UUID or API slug.
         * @minLength 1
         */
        list?: string;
        /**
         * List entry UUID.
         * @format uuid
         */
        entryId?: string;
        /**
         * Maximum threads, up to 50.
         * @minimum 1
         * @maximum 50
         */
        limit?: number;
        /**
         * Number of results to skip.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Returned threads. */
        threads: Array<Record<string, unknown>>;
      };
    };
    /** List workspace members to resolve task assignees and comment authors. */
    "attio.list_workspace_members": {
      input: Record<string, never>;
      output: {
        /** Returned members. */
        members: Array<Record<string, unknown>>;
      };
    };
    /** Search records across selected objects by name, email, domain, phone or social handle. */
    "attio.search_records": {
      input: {
        /**
         * Search text; an empty string returns default results.
         * @maxLength 256
         */
        query: string;
        /**
         * Objects to search.
         * @minItems 1
         */
        objects: Array<string>;
        /** Search context; defaults to the workspace. Optionally restrict to a member. */
        requestAs?: {
          /** Search actor type. */
          type: "workspace";
        } | {
          /** Search actor type. */
          type: "workspace-member";
          /**
           * Workspace member UUID.
           * @format uuid
           */
          workspace_member_id: string;
        } | {
          /** Search actor type. */
          type: "workspace-member";
          /**
           * Member email address.
           * @format email
           */
          email_address: string;
        };
        /**
         * Maximum search results, from 1 to 25.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
      };
      output: {
        /** Returned records. */
        records: Array<Record<string, unknown>>;
      };
    };
    /** Update list entry values, appending or overwriting multiselect values. */
    "attio.update_entry": {
      input: {
        /**
         * List UUID or API slug.
         * @minLength 1
         */
        list: string;
        /**
         * List entry UUID.
         * @format uuid
         */
        entryId: string;
        /** Entry attribute values keyed by attribute slug or ID, using Attio value shapes. */
        entryValues: Record<string, unknown>;
        /** How to update multiselect values; defaults to append_multiselect. */
        mode?: "append_multiselect" | "overwrite_multiselect";
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        entry: Record<string, unknown>;
      };
    };
    /** Update note title or content; content is replaced when supplied. */
    "attio.update_note": {
      input: {
        /**
         * Note UUID.
         * @format uuid
         */
        noteId: string;
        /** Plaintext note title. */
        title?: string;
        /** Text content. */
        content?: string;
        /** Note content format; defaults to plaintext when writing content. */
        format?: "plaintext" | "markdown";
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        note: Record<string, unknown>;
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
        record: Record<string, unknown>;
      };
    };
    /** Update task completion, deadline, linked records or assignees. Attio does not support editing task content. */
    "attio.update_task": {
      input: {
        /**
         * Task UUID.
         * @format uuid
         */
        taskId: string;
        /** Task deadline in ISO 8601 format; null removes the deadline. */
        deadlineAt?: string | null;
        /** Whether the task is completed. */
        isCompleted?: boolean;
        /** Records linked by email/domain strings, or objects containing target_object and target_record_id or a matching attribute. Empty array clears links. */
        linkedRecords?: Array<string> | Array<{
          /**
           * Object UUID or API slug.
           * @minLength 1
           */
          target_object: string;
          [key: string]: unknown;
        }>;
        /** Workspace members assigned to the task. Empty array clears assignments. */
        assignees?: Array<{
          /** Actor type. */
          referenced_actor_type: "workspace-member";
          /**
           * Workspace member UUID.
           * @format uuid
           */
          referenced_actor_id: string;
        } | {
          /**
           * Workspace member email address.
           * @format email
           */
          workspace_member_email_address: string;
        }>;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        task: Record<string, unknown>;
      };
    };
    /** Create or update a list entry by its parent record; supplied multiselect values overwrite existing values. */
    "attio.upsert_entry": {
      input: {
        /**
         * List UUID or API slug.
         * @minLength 1
         */
        list: string;
        /**
         * Object UUID or API slug.
         * @minLength 1
         */
        parentObject: string;
        /**
         * Record UUID.
         * @format uuid
         */
        parentRecordId: string;
        /** Entry attribute values keyed by attribute slug or ID, using Attio value shapes. */
        entryValues?: Record<string, unknown>;
      };
      output: {
        /** Attio resource, including provider-specific fields. */
        entry: Record<string, unknown>;
      };
    };
    /** Create or update an Attio record for an object using a matching attribute that identifies at most one record. */
    "attio.upsert_record": {
      input: {
        /**
         * The object ID or API slug, such as people or companies.
         * @minLength 1
         */
        object: string;
        /**
         * The matching attribute API slug or ID. It need not be unique, but multiple matching records are rejected.
         * @minLength 1
         */
        matchingAttribute: string;
        /** Record values keyed by Attio attribute API slug or attribute ID. Values are forwarded using Attio's documented attribute value shapes. */
        values: Record<string, unknown>;
      };
      output: {
        /** A raw Attio record returned by the API. */
        record: Record<string, unknown>;
      };
    };
  }
}
