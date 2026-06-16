import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create one EspoCRM record for the specified entity type. */
    "espocrm.create_record": {
      input: {
        /**
         * The EspoCRM entity type, such as Account or Contact.
         * @minLength 1
         */
        entityType: string;
        /** The EspoCRM record fields to create or update. */
        data: Record<string, unknown>;
      };
      output: {
        /** The EspoCRM record returned by the request. */
        record: Record<string, unknown>;
      };
    };
    /** Delete one EspoCRM record by entity type and record identifier. */
    "espocrm.delete_record": {
      input: {
        /**
         * The EspoCRM entity type, such as Account or Contact.
         * @minLength 1
         */
        entityType: string;
        /**
         * The EspoCRM record identifier.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** Whether EspoCRM confirmed the record deletion. */
        ok: boolean;
      };
    };
    /** Get the current EspoCRM user data for the configured connection, including ACL and preferences when returned. */
    "espocrm.get_app_user": {
      input: Record<string, never>;
      output: {
        /** The current EspoCRM user. */
        user: {
          /** The EspoCRM user identifier. */
          id?: string | null;
          /** The EspoCRM user's display name. */
          name?: string | null;
          /** The EspoCRM login username. */
          userName?: string | null;
          /** The EspoCRM user type. */
          type?: string | null;
          /** The user's primary email address. */
          emailAddress?: string | null;
          /** Whether the EspoCRM user is active. */
          isActive?: boolean;
          [key: string]: unknown;
        };
        /** The user's access-control payload when returned. */
        acl?: Record<string, unknown>;
        /** The user's preference payload when returned. */
        preferences?: Record<string, unknown>;
      };
    };
    /** Get EspoCRM application metadata, optionally narrowed to one metadata path. */
    "espocrm.get_metadata": {
      input: {
        /**
         * Optional metadata path to return, such as entityDefs.Lead.fields.status.options.
         * @minLength 1
         */
        key?: string;
      };
      output: {
        /** The EspoCRM metadata payload returned by the server. */
        metadata: Record<string, unknown> | Array<unknown> | string | number | boolean | null;
      };
    };
    /** Get one EspoCRM record by entity type and record identifier. */
    "espocrm.get_record": {
      input: {
        /**
         * The EspoCRM entity type, such as Account or Contact.
         * @minLength 1
         */
        entityType: string;
        /**
         * The EspoCRM record identifier.
         * @minLength 1
         */
        recordId: string;
      };
      output: {
        /** The EspoCRM record returned by the request. */
        record: Record<string, unknown>;
      };
    };
    /** List EspoCRM records for an entity type with optional pagination, sorting, and where clauses. */
    "espocrm.list_records": {
      input: {
        /**
         * The EspoCRM entity type, such as Account or Contact.
         * @minLength 1
         */
        entityType: string;
        /**
         * The maximum number of records to return.
         * @minimum 1
         * @maximum 200
         */
        maxSize?: number;
        /**
         * The zero-based list offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The EspoCRM field used for sorting.
         * @minLength 1
         */
        orderBy?: string;
        /** The sort direction. */
        order?: "asc" | "desc";
        /**
         * EspoCRM where clauses passed as JSON.
         * @minItems 1
         */
        where?: Array<{
          /**
           * The EspoCRM where clause type.
           * @minLength 1
           */
          type: string;
          /**
           * The EspoCRM field name used by this where clause.
           * @minLength 1
           */
          attribute?: string;
          /** The comparison value for this where clause. */
          value?: unknown;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The EspoCRM records returned by the list request. */
        records: Array<Record<string, unknown>>;
        /**
         * The total number of records reported by EspoCRM, -1/-2 sentinel values, or null when omitted.
         * @minimum -2
         */
        total: number | null;
      };
    };
    /** Update selected fields on one EspoCRM record. */
    "espocrm.update_record": {
      input: {
        /**
         * The EspoCRM entity type, such as Account or Contact.
         * @minLength 1
         */
        entityType: string;
        /**
         * The EspoCRM record identifier.
         * @minLength 1
         */
        recordId: string;
        /** The EspoCRM record fields to create or update. */
        data: Record<string, unknown>;
      };
      output: {
        /** The EspoCRM record returned by the request. */
        record: Record<string, unknown>;
      };
    };
  }
}
