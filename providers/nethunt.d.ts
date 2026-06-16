import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Verify the NetHunt credentials and return the connected user. */
    "nethunt.auth_test": {
      input: Record<string, never>;
      output: {
        /** The NetHunt user returned by the auth-test endpoint. */
        user: {
          /** NetHunt user personal name. */
          personalName: string;
          /**
           * NetHunt user email address.
           * @format email
           */
          emailAddress: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a NetHunt call log on a record. */
    "nethunt.create_call_log": {
      input: {
        /**
         * NetHunt record ID to attach the call log to.
         * @minLength 1
         */
        recordId: string;
        /**
         * Call log text.
         * @minLength 1
         */
        text: string;
        /**
         * ISO-formatted UTC timestamp when the call started.
         * @format date-time
         */
        time?: string;
        /**
         * Call duration in minutes.
         * @minimum 0
         */
        duration?: number;
      };
      output: {
        /** A NetHunt call log returned by the Integration API. */
        callLog: {
          /** NetHunt call log ID. */
          callLogId: string;
          /** NetHunt record ID associated with the call log. */
          recordId?: string;
          /** Call log creation timestamp returned by NetHunt. */
          createdAt?: string;
          /** Call log text. */
          text?: string;
          /** Call duration in minutes. */
          duration?: number;
          /** Call start timestamp returned by NetHunt. */
          time?: string;
          /** Call end timestamp returned by NetHunt. */
          endTime?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a NetHunt comment on a record. */
    "nethunt.create_comment": {
      input: {
        /**
         * NetHunt record ID to comment on.
         * @minLength 1
         */
        recordId: string;
        /**
         * Comment text.
         * @minLength 1
         */
        text: string;
      };
      output: {
        /** A NetHunt record comment returned by the Integration API. */
        comment: {
          /** NetHunt comment ID. */
          commentId: string;
          /** NetHunt record ID associated with the comment. */
          recordId?: string;
          /** Comment creation timestamp returned by NetHunt. */
          createdAt?: string;
          /** Comment text. */
          text?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create a NetHunt record in a folder with field values. */
    "nethunt.create_record": {
      input: {
        /**
         * NetHunt folder ID to create the record in.
         * @minLength 1
         */
        folderId: string;
        /**
         * User time zone sent to NetHunt when creating the record.
         * @minLength 1
         */
        timeZone: string;
        /** NetHunt field values keyed by the CRM field names configured in the target folder. */
        fields: Record<string, string | number | boolean | null | Array<unknown> | Record<string, unknown>>;
      };
      output: {
        /** A NetHunt record returned by the Integration API. */
        record: {
          /** NetHunt record ID. */
          recordId: string;
          /** Record creation timestamp returned by NetHunt. */
          createdAt?: string;
          /** Last record update timestamp returned by NetHunt. */
          updatedAt?: string;
          /** NetHunt field values keyed by the CRM field names configured in the target folder. */
          fields?: Record<string, string | number | boolean | null | Array<unknown> | Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a NetHunt record. */
    "nethunt.delete_record": {
      input: {
        /**
         * NetHunt record ID.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** Whether the delete request completed successfully. */
        deleted: boolean;
      };
    };
    /** Find NetHunt records by record ID or advanced search query. */
    "nethunt.find_records": {
      input: {
        /**
         * NetHunt folder ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * NetHunt record ID to fetch when available.
         * @minLength 1
         */
        recordId?: string;
        /**
         * NetHunt advanced search query.
         * @minLength 1
         */
        query?: string;
        /**
         * Maximum number of NetHunt items to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** NetHunt records matching the search input. */
        records: Array<{
          /** NetHunt record ID. */
          recordId: string;
          /** Record creation timestamp returned by NetHunt. */
          createdAt?: string;
          /** Last record update timestamp returned by NetHunt. */
          updatedAt?: string;
          /** NetHunt field values keyed by the CRM field names configured in the target folder. */
          fields?: Record<string, string | number | boolean | null | Array<unknown> | Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List fields configured for a NetHunt folder. */
    "nethunt.list_folder_fields": {
      input: {
        /**
         * NetHunt folder ID.
         * @minLength 1
         */
        folderId: string;
      };
      output: {
        /** Fields configured for the NetHunt folder. */
        fields: Array<{
          /** NetHunt folder field name. */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List NetHunt call logs created after an optional timestamp. */
    "nethunt.list_new_call_logs": {
      input: {
        /**
         * NetHunt folder ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * ISO-formatted UTC timestamp used as the lower bound.
         * @format date-time
         */
        since?: string;
        /**
         * Maximum number of NetHunt items to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Recently created NetHunt call logs. */
        callLogs: Array<{
          /** NetHunt call log ID. */
          callLogId: string;
          /** NetHunt record ID associated with the call log. */
          recordId?: string;
          /** Call log creation timestamp returned by NetHunt. */
          createdAt?: string;
          /** Call log text. */
          text?: string;
          /** Call duration in minutes. */
          duration?: number;
          /** Call start timestamp returned by NetHunt. */
          time?: string;
          /** Call end timestamp returned by NetHunt. */
          endTime?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List NetHunt record comments created after an optional timestamp. */
    "nethunt.list_new_comments": {
      input: {
        /**
         * NetHunt folder ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * ISO-formatted UTC timestamp used as the lower bound.
         * @format date-time
         */
        since?: string;
        /**
         * Maximum number of NetHunt items to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Recently created NetHunt comments. */
        comments: Array<{
          /** NetHunt comment ID. */
          commentId: string;
          /** NetHunt record ID associated with the comment. */
          recordId?: string;
          /** Comment creation timestamp returned by NetHunt. */
          createdAt?: string;
          /** Comment text. */
          text?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List NetHunt records created after an optional timestamp. */
    "nethunt.list_new_records": {
      input: {
        /**
         * NetHunt folder ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * ISO-formatted UTC timestamp used as the lower bound.
         * @format date-time
         */
        since?: string;
        /**
         * Maximum number of NetHunt items to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Recently created NetHunt records. */
        records: Array<{
          /** NetHunt record ID. */
          recordId: string;
          /** Record creation timestamp returned by NetHunt. */
          createdAt?: string;
          /** Last record update timestamp returned by NetHunt. */
          updatedAt?: string;
          /** NetHunt field values keyed by the CRM field names configured in the target folder. */
          fields?: Record<string, string | number | boolean | null | Array<unknown> | Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List NetHunt folders that the connected user can read. */
    "nethunt.list_readable_folders": {
      input: Record<string, never>;
      output: {
        /** Readable NetHunt folders. */
        folders: Array<{
          /** NetHunt folder ID. */
          id: string;
          /** NetHunt folder name. */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List NetHunt record changes after an optional timestamp. */
    "nethunt.list_record_changes": {
      input: {
        /**
         * NetHunt folder ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * Optional NetHunt record ID used to narrow changes to one record.
         * @minLength 1
         */
        recordId?: string;
        /**
         * NetHunt field names to limit returned updates.
         * @minItems 1
         */
        fieldName?: Array<string>;
        /**
         * ISO-formatted UTC timestamp used as the lower bound.
         * @format date-time
         */
        since?: string;
        /**
         * Maximum number of NetHunt items to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** NetHunt record changes. */
        changes: Array<{
          /** Internal NetHunt change identifier. */
          id?: string;
          /** NetHunt record ID. */
          recordId: string;
          /** Record change timestamp returned by NetHunt. */
          time: string;
          /** User who made the record change. */
          user?: Record<string, unknown>;
          /** NetHunt record action type. */
          recordAction: "CREATE" | "UPDATE" | "DELETE";
          /** NetHunt field update actions keyed by CRM field name. */
          fieldActions?: Record<string, {
              /** Whether NetHunt should clear the existing field value before adding values. */
              overwrite?: boolean;
              /** A NetHunt CRM field value. */
              remove?: string | number | boolean | null | Array<unknown> | Record<string, unknown>;
              /** A NetHunt CRM field value. */
              add?: string | number | boolean | null | Array<unknown> | Record<string, unknown>;
            }>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List NetHunt records updated after an optional timestamp. */
    "nethunt.list_updated_records": {
      input: {
        /**
         * NetHunt folder ID.
         * @minLength 1
         */
        folderId: string;
        /**
         * NetHunt field names to limit returned updates.
         * @minItems 1
         */
        fieldName?: Array<string>;
        /**
         * ISO-formatted UTC timestamp used as the lower bound.
         * @format date-time
         */
        since?: string;
        /**
         * Maximum number of NetHunt items to return.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** Recently updated NetHunt records. */
        records: Array<{
          /** NetHunt record ID. */
          recordId: string;
          /** Record creation timestamp returned by NetHunt. */
          createdAt?: string;
          /** Last record update timestamp returned by NetHunt. */
          updatedAt?: string;
          /** NetHunt field values keyed by the CRM field names configured in the target folder. */
          fields?: Record<string, string | number | boolean | null | Array<unknown> | Record<string, unknown>>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List NetHunt folders that the connected user can create records in. */
    "nethunt.list_writable_folders": {
      input: Record<string, never>;
      output: {
        /** Writable NetHunt folders. */
        folders: Array<{
          /** NetHunt folder ID. */
          id: string;
          /** NetHunt folder name. */
          name: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Update a NetHunt record with field actions. */
    "nethunt.update_record": {
      input: {
        /**
         * NetHunt record ID to update.
         * @minLength 1
         */
        recordId: string;
        /** Default overwrite behavior for NetHunt field actions. */
        overwrite?: boolean;
        /** NetHunt field update actions keyed by CRM field name. */
        fieldActions: Record<string, {
            /** Whether NetHunt should clear the existing field value before adding values. */
            overwrite?: boolean;
            /** A NetHunt CRM field value. */
            remove?: string | number | boolean | null | Array<unknown> | Record<string, unknown>;
            /** A NetHunt CRM field value. */
            add?: string | number | boolean | null | Array<unknown> | Record<string, unknown>;
          }>;
      };
      output: {
        /** A NetHunt record returned by the Integration API. */
        record: {
          /** NetHunt record ID. */
          recordId: string;
          /** Record creation timestamp returned by NetHunt. */
          createdAt?: string;
          /** Last record update timestamp returned by NetHunt. */
          updatedAt?: string;
          /** NetHunt field values keyed by the CRM field names configured in the target folder. */
          fields?: Record<string, string | number | boolean | null | Array<unknown> | Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
  }
}
