import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an Upsales company using the official accounts endpoint. */
    "upsales.create_company": {
      input: {
        /** Upsales company JSON payload using official account fields such as name, phone, webpage, users, or custom. */
        company: Record<string, unknown>;
      };
      output: {
        /** Raw Upsales entity fields returned by the API. */
        company: Record<string, unknown>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** Create an Upsales contact using the official contacts endpoint. */
    "upsales.create_contact": {
      input: {
        /** Upsales contact JSON payload using official contact fields such as firstName, lastName, name, email, phone, title, active, client, or custom. */
        contact: Record<string, unknown>;
        /** Whether Upsales should interpret firstName and lastName fields when creating the contact. */
        usingFirstnameLastname?: boolean;
      };
      output: {
        /** Raw Upsales entity fields returned by the API. */
        contact: Record<string, unknown>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** Delete an Upsales company by ID. */
    "upsales.delete_company": {
      input: {
        /**
         * The Upsales company ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether the delete request completed with a successful HTTP status. */
        success: boolean;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** Delete an Upsales contact by ID. */
    "upsales.delete_contact": {
      input: {
        /**
         * The Upsales contact ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Whether the delete request completed with a successful HTTP status. */
        success: boolean;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** Read one Upsales company by ID. */
    "upsales.get_company": {
      input: {
        /**
         * The Upsales company ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Raw Upsales entity fields returned by the API. */
        company: Record<string, unknown>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** Read one Upsales contact by ID. */
    "upsales.get_contact": {
      input: {
        /**
         * The Upsales contact ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Raw Upsales entity fields returned by the API. */
        contact: Record<string, unknown>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** Read the Upsales user associated with the authenticated API token. */
    "upsales.get_current_user": {
      input: Record<string, never>;
      output: {
        /** Raw Upsales entity fields returned by the API. */
        user: Record<string, unknown>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** Read one Upsales user by ID. */
    "upsales.get_user": {
      input: {
        /**
         * The Upsales user ID.
         * @exclusiveMinimum 0
         */
        id: number;
      };
      output: {
        /** Raw Upsales entity fields returned by the API. */
        user: Record<string, unknown>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** List Upsales companies with optional pagination and official query filters. */
    "upsales.list_companies": {
      input: {
        /**
         * Maximum number of records to return, from 1 to 2000.
         * @minimum 1
         * @maximum 2000
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Additional Upsales filter query parameters keyed by official API field name, such as user.id or scoreUpdateDate. */
        filters?: Record<string, unknown>;
        /** Whether to include external companies in the result set. */
        includeExternal?: boolean;
      };
      output: {
        /** Upsales companies returned by the API. */
        companies: Array<Record<string, unknown>>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** List Upsales contacts with optional pagination and official query filters. */
    "upsales.list_contacts": {
      input: {
        /**
         * Maximum number of records to return, from 1 to 2000.
         * @minimum 1
         * @maximum 2000
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Additional Upsales filter query parameters keyed by official API field name, such as user.id or scoreUpdateDate. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** Upsales contacts returned by the API. */
        contacts: Array<Record<string, unknown>>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** List Upsales users with optional pagination and official query filters. */
    "upsales.list_users": {
      input: {
        /**
         * Maximum number of records to return, from 1 to 2000.
         * @minimum 1
         * @maximum 2000
         */
        limit?: number;
        /**
         * Number of records to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /** Additional Upsales filter query parameters keyed by official API field name, such as user.id or scoreUpdateDate. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** Upsales users returned by the API. */
        users: Array<Record<string, unknown>>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** Update an Upsales company by ID using the official accounts endpoint. */
    "upsales.update_company": {
      input: {
        /**
         * The Upsales company ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Upsales company JSON payload using official account fields such as name, phone, webpage, users, or custom. */
        company: Record<string, unknown>;
      };
      output: {
        /** Raw Upsales entity fields returned by the API. */
        company: Record<string, unknown>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
    /** Update an Upsales contact by ID using the official contacts endpoint. */
    "upsales.update_contact": {
      input: {
        /**
         * The Upsales contact ID.
         * @exclusiveMinimum 0
         */
        id: number;
        /** Upsales contact JSON payload using official contact fields such as firstName, lastName, name, email, phone, title, active, client, or custom. */
        contact: Record<string, unknown>;
        /** Whether Upsales should interpret firstName and lastName fields when updating the contact. */
        usingFirstnameLastname?: boolean;
      };
      output: {
        /** Raw Upsales entity fields returned by the API. */
        contact: Record<string, unknown>;
        /** Raw Upsales response payload. */
        raw: unknown;
      };
    };
  }
}
