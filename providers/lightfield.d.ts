import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Lightfield account by ID. */
    "lightfield.get_account": {
      input: {
        /**
         * The Lightfield record ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Lightfield CRM record with dynamic fields and relationships. */
        record: {
          /** Unique Lightfield record ID. */
          id?: string;
          /** ISO 8601 timestamp when the record was created. */
          createdAt?: string;
          /** ISO 8601 timestamp when the record was last updated. */
          updatedAt?: string | null;
          /** External identifier for the record. */
          externalId?: string | null;
          /** URL for viewing the record in the Lightfield web app. */
          httpLink?: string | null;
          /** Dynamic Lightfield fields keyed by field slug. */
          fields?: Record<string, {
              /** The field value returned by Lightfield. */
              value?: unknown;
              /** The Lightfield field value type. */
              valueType?: string;
              [key: string]: unknown;
            }>;
          /** Dynamic Lightfield relationships keyed by relationship slug. */
          relationships?: Record<string, {
              /** Whether the relationship is has_one or has_many. */
              cardinality?: string;
              /** The related object type. */
              objectType?: string;
              /** Related record IDs. */
              values?: Array<string>;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Validate the current Lightfield API key and return its subject and scopes. */
    "lightfield.get_api_key_metadata": {
      input: Record<string, never>;
      output: {
        /** Whether Lightfield reported the API key as active. */
        active: boolean;
        /** Granted public scopes for the API key. */
        scopes: Array<string>;
        /** Whether the API key belongs to a user or workspace. */
        subjectType: "user" | "workspace";
        /** Credential family reported by Lightfield. */
        tokenType: "api_key";
      };
    };
    /** Get one Lightfield contact by ID. */
    "lightfield.get_contact": {
      input: {
        /**
         * The Lightfield record ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Lightfield CRM record with dynamic fields and relationships. */
        record: {
          /** Unique Lightfield record ID. */
          id?: string;
          /** ISO 8601 timestamp when the record was created. */
          createdAt?: string;
          /** ISO 8601 timestamp when the record was last updated. */
          updatedAt?: string | null;
          /** External identifier for the record. */
          externalId?: string | null;
          /** URL for viewing the record in the Lightfield web app. */
          httpLink?: string | null;
          /** Dynamic Lightfield fields keyed by field slug. */
          fields?: Record<string, {
              /** The field value returned by Lightfield. */
              value?: unknown;
              /** The Lightfield field value type. */
              valueType?: string;
              [key: string]: unknown;
            }>;
          /** Dynamic Lightfield relationships keyed by relationship slug. */
          relationships?: Record<string, {
              /** Whether the relationship is has_one or has_many. */
              cardinality?: string;
              /** The related object type. */
              objectType?: string;
              /** Related record IDs. */
              values?: Array<string>;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Lightfield custom object record by object type and record ID. */
    "lightfield.get_custom_object_record": {
      input: {
        /**
         * The custom object type slug.
         * @minLength 1
         */
        entitySlug: string;
        /**
         * The Lightfield record ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Lightfield CRM record with dynamic fields and relationships. */
        record: {
          /** Unique Lightfield record ID. */
          id?: string;
          /** ISO 8601 timestamp when the record was created. */
          createdAt?: string;
          /** ISO 8601 timestamp when the record was last updated. */
          updatedAt?: string | null;
          /** External identifier for the record. */
          externalId?: string | null;
          /** URL for viewing the record in the Lightfield web app. */
          httpLink?: string | null;
          /** Dynamic Lightfield fields keyed by field slug. */
          fields?: Record<string, {
              /** The field value returned by Lightfield. */
              value?: unknown;
              /** The Lightfield field value type. */
              valueType?: string;
              [key: string]: unknown;
            }>;
          /** Dynamic Lightfield relationships keyed by relationship slug. */
          relationships?: Record<string, {
              /** Whether the relationship is has_one or has_many. */
              cardinality?: string;
              /** The related object type. */
              objectType?: string;
              /** Related record IDs. */
              values?: Array<string>;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Lightfield opportunity by ID. */
    "lightfield.get_opportunity": {
      input: {
        /**
         * The Lightfield record ID to retrieve.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A Lightfield CRM record with dynamic fields and relationships. */
        record: {
          /** Unique Lightfield record ID. */
          id?: string;
          /** ISO 8601 timestamp when the record was created. */
          createdAt?: string;
          /** ISO 8601 timestamp when the record was last updated. */
          updatedAt?: string | null;
          /** External identifier for the record. */
          externalId?: string | null;
          /** URL for viewing the record in the Lightfield web app. */
          httpLink?: string | null;
          /** Dynamic Lightfield fields keyed by field slug. */
          fields?: Record<string, {
              /** The field value returned by Lightfield. */
              value?: unknown;
              /** The Lightfield field value type. */
              valueType?: string;
              [key: string]: unknown;
            }>;
          /** Dynamic Lightfield relationships keyed by relationship slug. */
          relationships?: Record<string, {
              /** Whether the relationship is has_one or has_many. */
              cardinality?: string;
              /** The related object type. */
              objectType?: string;
              /** Related record IDs. */
              values?: Array<string>;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** List Lightfield accounts with optional pagination and filters. */
    "lightfield.list_accounts": {
      input: {
        /**
         * Maximum number of records to return. Lightfield allows 1 to 25.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * Number of records to skip for offset pagination.
         * @minimum 0
         */
        offset?: number;
        /** Lightfield filter query parameters keyed by raw field expression, such as $email[contains]. */
        filters?: Record<string, string | number | boolean>;
      };
      output: {
        /** Records returned by Lightfield. */
        records: Array<{
          /** Unique Lightfield record ID. */
          id?: string;
          /** ISO 8601 timestamp when the record was created. */
          createdAt?: string;
          /** ISO 8601 timestamp when the record was last updated. */
          updatedAt?: string | null;
          /** External identifier for the record. */
          externalId?: string | null;
          /** URL for viewing the record in the Lightfield web app. */
          httpLink?: string | null;
          /** Dynamic Lightfield fields keyed by field slug. */
          fields?: Record<string, {
              /** The field value returned by Lightfield. */
              value?: unknown;
              /** The Lightfield field value type. */
              valueType?: string;
              [key: string]: unknown;
            }>;
          /** Dynamic Lightfield relationships keyed by relationship slug. */
          relationships?: Record<string, {
              /** Whether the relationship is has_one or has_many. */
              cardinality?: string;
              /** The related object type. */
              objectType?: string;
              /** Related record IDs. */
              values?: Array<string>;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The upstream response object type. */
        object: string;
        /** Total number of records matching the query. */
        totalCount: number;
      };
    };
    /** List Lightfield contacts with optional pagination and filters. */
    "lightfield.list_contacts": {
      input: {
        /**
         * Maximum number of records to return. Lightfield allows 1 to 25.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * Number of records to skip for offset pagination.
         * @minimum 0
         */
        offset?: number;
        /** Lightfield filter query parameters keyed by raw field expression, such as $email[contains]. */
        filters?: Record<string, string | number | boolean>;
      };
      output: {
        /** Records returned by Lightfield. */
        records: Array<{
          /** Unique Lightfield record ID. */
          id?: string;
          /** ISO 8601 timestamp when the record was created. */
          createdAt?: string;
          /** ISO 8601 timestamp when the record was last updated. */
          updatedAt?: string | null;
          /** External identifier for the record. */
          externalId?: string | null;
          /** URL for viewing the record in the Lightfield web app. */
          httpLink?: string | null;
          /** Dynamic Lightfield fields keyed by field slug. */
          fields?: Record<string, {
              /** The field value returned by Lightfield. */
              value?: unknown;
              /** The Lightfield field value type. */
              valueType?: string;
              [key: string]: unknown;
            }>;
          /** Dynamic Lightfield relationships keyed by relationship slug. */
          relationships?: Record<string, {
              /** Whether the relationship is has_one or has_many. */
              cardinality?: string;
              /** The related object type. */
              objectType?: string;
              /** Related record IDs. */
              values?: Array<string>;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The upstream response object type. */
        object: string;
        /** Total number of records matching the query. */
        totalCount: number;
      };
    };
    /** List records for a Lightfield custom object type with optional filters. */
    "lightfield.list_custom_object_records": {
      input: {
        /**
         * The custom object type slug.
         * @minLength 1
         */
        entitySlug: string;
        /**
         * Maximum number of records to return. Lightfield allows 1 to 25.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * Number of records to skip for offset pagination.
         * @minimum 0
         */
        offset?: number;
        /** Lightfield filter query parameters keyed by raw field expression, such as $email[contains]. */
        filters?: Record<string, string | number | boolean>;
      };
      output: {
        /** Records returned by Lightfield. */
        records: Array<{
          /** Unique Lightfield record ID. */
          id?: string;
          /** ISO 8601 timestamp when the record was created. */
          createdAt?: string;
          /** ISO 8601 timestamp when the record was last updated. */
          updatedAt?: string | null;
          /** External identifier for the record. */
          externalId?: string | null;
          /** URL for viewing the record in the Lightfield web app. */
          httpLink?: string | null;
          /** Dynamic Lightfield fields keyed by field slug. */
          fields?: Record<string, {
              /** The field value returned by Lightfield. */
              value?: unknown;
              /** The Lightfield field value type. */
              valueType?: string;
              [key: string]: unknown;
            }>;
          /** Dynamic Lightfield relationships keyed by relationship slug. */
          relationships?: Record<string, {
              /** Whether the relationship is has_one or has_many. */
              cardinality?: string;
              /** The related object type. */
              objectType?: string;
              /** Related record IDs. */
              values?: Array<string>;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The upstream response object type. */
        object: string;
        /** Total number of records matching the query. */
        totalCount: number;
      };
    };
    /** List custom object types available to the current Lightfield API key. */
    "lightfield.list_object_definitions": {
      input: Record<string, never>;
      output: {
        /** Custom object definitions returned by Lightfield. */
        definitions: Array<{
          /** Human-readable custom object label. */
          label: string;
          /** Slug used to reference the custom object type in the API. */
          objectType: string;
        }>;
      };
    };
    /** List Lightfield opportunities with optional pagination and filters. */
    "lightfield.list_opportunities": {
      input: {
        /**
         * Maximum number of records to return. Lightfield allows 1 to 25.
         * @minimum 1
         * @maximum 25
         */
        limit?: number;
        /**
         * Number of records to skip for offset pagination.
         * @minimum 0
         */
        offset?: number;
        /** Lightfield filter query parameters keyed by raw field expression, such as $email[contains]. */
        filters?: Record<string, string | number | boolean>;
      };
      output: {
        /** Records returned by Lightfield. */
        records: Array<{
          /** Unique Lightfield record ID. */
          id?: string;
          /** ISO 8601 timestamp when the record was created. */
          createdAt?: string;
          /** ISO 8601 timestamp when the record was last updated. */
          updatedAt?: string | null;
          /** External identifier for the record. */
          externalId?: string | null;
          /** URL for viewing the record in the Lightfield web app. */
          httpLink?: string | null;
          /** Dynamic Lightfield fields keyed by field slug. */
          fields?: Record<string, {
              /** The field value returned by Lightfield. */
              value?: unknown;
              /** The Lightfield field value type. */
              valueType?: string;
              [key: string]: unknown;
            }>;
          /** Dynamic Lightfield relationships keyed by relationship slug. */
          relationships?: Record<string, {
              /** Whether the relationship is has_one or has_many. */
              cardinality?: string;
              /** The related object type. */
              objectType?: string;
              /** Related record IDs. */
              values?: Array<string>;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The upstream response object type. */
        object: string;
        /** Total number of records matching the query. */
        totalCount: number;
      };
    };
  }
}
