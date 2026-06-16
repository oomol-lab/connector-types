import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one Celigo connection by connection ID. */
    "celigo.get_connection": {
      input: {
        /**
         * The unique identifier of the Celigo connection.
         * @minLength 1
         */
        connectionId: string;
      };
      output: {
        /** Celigo connection. */
        connection: {
          /** The unique identifier of the connection. */
          _id: string;
          /** The display name of the connection, when present. */
          name?: string;
          /** The connection type reported by Celigo, when present. */
          type?: string;
          /**
           * Timestamp in ISO 8601 format.
           * @format date-time
           */
          lastModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Celigo export by export ID. */
    "celigo.get_export": {
      input: {
        /**
         * The unique identifier of the Celigo export.
         * @minLength 1
         */
        exportId: string;
      };
      output: {
        /** Celigo export. */
        export: {
          /** The unique identifier of the export. */
          _id: string;
          /** The display name of the export, when present. */
          name?: string;
          /** The export type reported by Celigo, when present. */
          type?: string;
          /**
           * Timestamp in ISO 8601 format.
           * @format date-time
           */
          lastModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Celigo flow by flow ID. */
    "celigo.get_flow": {
      input: {
        /**
         * The unique identifier of the Celigo flow.
         * @minLength 1
         */
        flowId: string;
      };
      output: {
        /** Celigo flow. */
        flow: {
          /** The unique identifier of the flow. */
          _id: string;
          /** The display name of the flow, when present. */
          name?: string;
          /** The export ID associated with the flow, when present. */
          _exportId?: string;
          /** The import ID associated with the flow, when present. */
          _importId?: string;
          /** The integration ID associated with the flow, when present. */
          _integrationId?: string;
          /**
           * Timestamp in ISO 8601 format.
           * @format date-time
           */
          lastModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Celigo import by import ID. */
    "celigo.get_import": {
      input: {
        /**
         * The unique identifier of the Celigo import.
         * @minLength 1
         */
        importId: string;
      };
      output: {
        /** Celigo import. */
        import: {
          /** The unique identifier of the import. */
          _id: string;
          /** The display name of the import, when present. */
          name?: string;
          /** The API identifier configured for the import, when present. */
          apiIdentifier?: string;
          /**
           * Timestamp in ISO 8601 format.
           * @format date-time
           */
          lastModified?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get metadata for the current Celigo API token. */
    "celigo.get_token_info": {
      input: Record<string, never>;
      output: {
        /** Celigo token metadata. */
        tokenInfo: {
          /** The Celigo user ID associated with the current API token. */
          _userId: string;
          /** Scopes returned by Celigo for the current API token. */
          scope: Array<string>;
          [key: string]: unknown;
        };
      };
    };
    /** List exports available in the current Celigo account. */
    "celigo.list_exports": {
      input: Record<string, never>;
      output: {
        /** Exports returned by Celigo. */
        exports: Array<{
          /** The unique identifier of the export. */
          _id: string;
          /** The display name of the export, when present. */
          name?: string;
          /** The export type reported by Celigo, when present. */
          type?: string;
          /**
           * Timestamp in ISO 8601 format.
           * @format date-time
           */
          lastModified?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List flows available in the current Celigo account. */
    "celigo.list_flows": {
      input: Record<string, never>;
      output: {
        /** Flows returned by Celigo. */
        flows: Array<{
          /** The unique identifier of the flow. */
          _id: string;
          /** The display name of the flow, when present. */
          name?: string;
          /** The export ID associated with the flow, when present. */
          _exportId?: string;
          /** The import ID associated with the flow, when present. */
          _importId?: string;
          /** The integration ID associated with the flow, when present. */
          _integrationId?: string;
          /**
           * Timestamp in ISO 8601 format.
           * @format date-time
           */
          lastModified?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List imports available in the current Celigo account. */
    "celigo.list_imports": {
      input: Record<string, never>;
      output: {
        /** Imports returned by Celigo. */
        imports: Array<{
          /** The unique identifier of the import. */
          _id: string;
          /** The display name of the import, when present. */
          name?: string;
          /** The API identifier configured for the import, when present. */
          apiIdentifier?: string;
          /**
           * Timestamp in ISO 8601 format.
           * @format date-time
           */
          lastModified?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
