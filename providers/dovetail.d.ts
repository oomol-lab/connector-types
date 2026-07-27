import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Dovetail data record inside a specific project. */
    "dovetail.create_data": {
      input: {
        /**
         * Unique identifier of the Dovetail project that owns the data.
         * @minLength 1
         */
        projectId: string;
        /**
         * Title to assign to the new Dovetail data record.
         * @minLength 1
         */
        title?: string;
        /**
         * Initial plain text or HTML content to store in the new Dovetail data record.
         * @minLength 1
         */
        content?: string;
        /** Structured fields to attach to the data. */
        fields?: Array<{
          /**
           * Field label defined in Dovetail.
           * @minLength 1
           */
          label: string;
          /** Supported Dovetail field value. */
          value: string | boolean | number | Array<string> | null;
        }>;
      };
      output: {
        /** Created Dovetail data record. */
        dataItem: Record<string, unknown>;
      };
    };
    /** Export a Dovetail data record in HTML or Markdown format. */
    "dovetail.export_data": {
      input: {
        /**
         * Unique identifier of the Dovetail data record.
         * @minLength 1
         */
        dataId: string;
        /** Export format requested from Dovetail. */
        format: "html" | "markdown";
      };
      output: {
        /** Exported Dovetail data record. */
        exportedData: Record<string, unknown>;
      };
    };
    /** Get one Dovetail data record by identifier. */
    "dovetail.get_data": {
      input: {
        /**
         * Unique identifier of the Dovetail data record.
         * @minLength 1
         */
        dataId: string;
      };
      output: {
        /** Requested Dovetail data record. */
        dataItem: Record<string, unknown>;
      };
    };
    /** Get metadata for the current Dovetail personal API key. */
    "dovetail.get_token_info": {
      input: Record<string, never>;
      output: {
        /** Dovetail token metadata returned by the API. */
        token: {
          /**
           * Unique identifier of the current Dovetail personal API key.
           * @minLength 1
           */
          id: string;
          /**
           * Workspace subdomain associated with the current API key.
           * @minLength 1
           */
          subdomain: string;
        };
      };
    };
    /** List Dovetail data records with pagination and common filters. */
    "dovetail.list_data": {
      input: {
        /**
         * Cursor returned by the previous data page.
         * @minLength 1
         */
        startCursor?: string;
        /**
         * Maximum number of records to return, from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /** Single Dovetail sort instruction. */
        sort?: "created_at:asc" | "created_at:desc" | "title:asc" | "title:desc";
        /**
         * Project identifier used to filter Dovetail data.
         * @minLength 1
         */
        projectId?: string;
        /**
         * Case-insensitive substring used to filter Dovetail data titles.
         * @minLength 1
         */
        titleContains?: string;
        /**
         * ISO 8601 timestamp used to filter Dovetail records.
         * @format date-time
         */
        createdAtGte?: string;
        /**
         * ISO 8601 timestamp used to filter Dovetail records.
         * @format date-time
         */
        createdAtLte?: string;
      };
      output: {
        /** Dovetail data records returned for the page. */
        dataItems: Array<Record<string, unknown>>;
        /** Total number of matching Dovetail data records. */
        totalCount: number;
        /** Whether another Dovetail data page is available. */
        hasMore: boolean;
        /** Next-page cursor returned by Dovetail pagination. */
        nextCursor: string | null;
      };
    };
    /** List Dovetail projects with pagination and title filtering. */
    "dovetail.list_projects": {
      input: {
        /**
         * Cursor returned by the previous projects page.
         * @minLength 1
         */
        startCursor?: string;
        /**
         * Maximum number of records to return, from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /** Single Dovetail sort instruction. */
        sort?: "created_at:asc" | "created_at:desc" | "title:asc" | "title:desc";
        /**
         * Case-insensitive substring used to filter Dovetail project titles.
         * @minLength 1
         */
        titleContains?: string;
      };
      output: {
        /** Dovetail projects returned for the current page. */
        projects: Array<Record<string, unknown>>;
        /** Total number of matching Dovetail projects. */
        totalCount: number;
        /** Whether another Dovetail projects page is available. */
        hasMore: boolean;
        /** Next-page cursor returned by Dovetail pagination. */
        nextCursor: string | null;
      };
    };
    /** Update the title or fields of a Dovetail data record. */
    "dovetail.update_data": {
      input: {
        /**
         * Unique identifier of the Dovetail data record.
         * @minLength 1
         */
        dataId: string;
        /**
         * Updated title for the Dovetail data record.
         * @minLength 1
         */
        title?: string;
        /** Replacement fields for the data record. */
        fields?: Array<{
          /**
           * Field label defined in Dovetail.
           * @minLength 1
           */
          label: string;
          /** Supported Dovetail field value. */
          value: string | boolean | number | Array<string> | null;
        }>;
      };
      output: {
        /** Updated Dovetail data record. */
        dataItem: Record<string, unknown>;
      };
    };
  }
}
