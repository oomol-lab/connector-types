import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new page in a Coda doc, with optional subtitle, icon, image, parent page, and structured page content. */
    "coda.create_page": {
      input: {
        /**
         * ID of the doc.
         * @minLength 1
         */
        docId: string;
        /**
         * Name of the page.
         * @minLength 1
         */
        name: string;
        /** Subtitle of the page. */
        subtitle?: string;
        /** Name of the page icon. */
        iconName?: string;
        /** URL of the cover image to use. */
        imageUrl?: string;
        /** ID of the parent page for a subpage. */
        parentPageId?: string;
        /** Structured page content payload defined by the official Coda API. */
        pageContent?: Record<string, unknown>;
      };
      output: {
        /** Request ID for the asynchronous page creation. */
        requestId: string;
        /** ID of the created page. */
        id: string;
      };
    };
    /** Get the current Coda user associated with the authenticated API token. */
    "coda.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current Coda user. */
        user: {
          /** Name of the user. */
          name: string;
          /** Email address of the user. */
          loginId: string;
          /** Type of the user resource. */
          type: string;
          /** Browser-friendly link to the user's avatar image. */
          pictureLink?: string;
          /** Whether the token has restricted access. */
          scoped: boolean;
          /** Name of the token used for this request. */
          tokenName: string;
          /** API link to the user. */
          href: string;
          /** Workspace associated with the current user. */
          workspace: {
            /** ID of the workspace. */
            id?: string;
            /** Type of the workspace reference. */
            type?: string;
            /** API link to the workspace. */
            href?: string;
            /** Browser-friendly link to the workspace. */
            browserLink?: string;
            /** Name of the workspace. */
            name?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
    };
    /** Get metadata for a specific Coda doc by doc ID. */
    "coda.get_doc": {
      input: {
        /**
         * ID of the doc.
         * @minLength 1
         */
        docId: string;
      };
      output: {
        /** The requested Coda doc. */
        doc: {
          /** ID of the Coda doc. */
          id: string;
          /** Type of the doc resource. */
          type: string;
          /** API link to the Coda doc. */
          href: string;
          /** Browser-friendly link to the Coda doc. */
          browserLink: string;
          /** Name of the doc. */
          name: string;
          /** Email address of the doc owner. */
          owner: string;
          /** Name of the doc owner. */
          ownerName: string;
          /** Icon metadata for the doc. */
          icon?: Record<string, unknown>;
          /** Document size metadata. */
          docSize?: Record<string, unknown>;
          /** Reference to the source doc, when present. */
          sourceDoc?: Record<string, unknown>;
          /** Timestamp when the doc was created. */
          createdAt: string;
          /** Timestamp when the doc was last modified. */
          updatedAt: string;
          /** Publication metadata for the doc. */
          published?: Record<string, unknown>;
          /** Folder reference containing the doc. */
          folder?: Record<string, unknown>;
          /** Workspace reference containing the doc. */
          workspace?: {
            /** ID of the workspace. */
            id?: string;
            /** Type of the workspace reference. */
            type?: string;
            /** API link to the workspace. */
            href?: string;
            /** Browser-friendly link to the workspace. */
            browserLink?: string;
            /** Name of the workspace. */
            name?: string;
            [key: string]: unknown;
          };
          /** ID of the Coda workspace containing this doc. */
          workspaceId?: string;
          /** ID of the Coda folder containing this doc. */
          folderId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get the completion status for an asynchronous Coda mutation using a previously returned request ID. */
    "coda.get_mutation_status": {
      input: {
        /**
         * Request ID returned by a previous mutation.
         * @minLength 1
         */
        requestId: string;
      };
      output: {
        /** Whether the mutation has completed. */
        completed: boolean;
        /** Warning returned when the mutation completed with caveats. */
        warning?: string;
      };
    };
    /** Get details about a specific Coda table or view. */
    "coda.get_table": {
      input: {
        /**
         * ID of the doc.
         * @minLength 1
         */
        docId: string;
        /**
         * ID or name of the table. Names are discouraged because they are fragile.
         * @minLength 1
         */
        tableIdOrName: string;
        /** Whether to request updated table layout handling. */
        useUpdatedTableLayouts?: boolean;
      };
      output: {
        /** The requested Coda table. */
        table: {
          /** ID of the table. */
          id: string;
          /** Type of the table resource. */
          type: string;
          /** Type of the table or view. */
          tableType: string;
          /** API link to the table. */
          href: string;
          /** Browser-friendly link to the table. */
          browserLink: string;
          /** Name of the table. */
          name: string;
          /** Parent page reference. */
          parent: {
            /** ID of the page. */
            id: string;
            /** Type of the page reference. */
            type?: string;
            /** API link to the page. */
            href?: string;
            /** Browser-friendly link to the page. */
            browserLink?: string;
            /** Name of the page. */
            name?: string;
            [key: string]: unknown;
          };
          /** Parent table reference, when present. */
          parentTable?: {
            /** ID of the table. */
            id: string;
            /** Type of the table reference. */
            type?: string;
            /** Type of the table or view. */
            tableType?: string;
            /** API link to the table. */
            href?: string;
            /** Browser-friendly link to the table. */
            browserLink?: string;
            /** Name of the table. */
            name?: string;
            [key: string]: unknown;
          };
          /** Display column reference. */
          displayColumn: {
            /** ID of the column. */
            id: string;
            /** Type of the column reference. */
            type?: string;
            /** API link to the column. */
            href?: string;
            /** Name of the column. */
            name?: string;
            [key: string]: unknown;
          };
          /** Total number of rows in the table. */
          rowCount: number;
          /** Sorts applied to the table. */
          sorts: Array<Record<string, unknown>>;
          /** Layout metadata for the table. */
          layout: Record<string, unknown>;
          /** Filter metadata for the table, when present. */
          filter?: Record<string, unknown>;
          /** Timestamp when the table was created. */
          createdAt: string;
          /** Timestamp when the table was last modified. */
          updatedAt: string;
          /** View ID associated with the table, when present. */
          viewId?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List columns in a Coda table with pagination and optional visibility filtering. */
    "coda.list_columns": {
      input: {
        /**
         * ID of the doc.
         * @minLength 1
         */
        docId: string;
        /**
         * ID or name of the table. Names are discouraged because they are fragile.
         * @minLength 1
         */
        tableIdOrName: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque token used to fetch the next page of results.
         * @minLength 1
         */
        pageToken?: string;
        /** Whether to return only visible columns for a base table. */
        visibleOnly?: boolean;
      };
      output: {
        /** Columns returned by the query. */
        items: Array<{
          /** ID of the column. */
          id: string;
          /** Type of the column resource. */
          type: string;
          /** API link to the column. */
          href: string;
          /** Name of the column. */
          name: string;
          /** Whether the column is the display column. */
          display?: boolean;
          /** Whether the column has a formula. */
          calculated?: boolean;
          /** Formula configured on the column. */
          formula?: string;
          /** Default value formula for the column. */
          defaultValue?: string;
          /** Column formatting metadata. */
          format: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Opaque token used to fetch the next page of results, or null when unavailable. */
        nextPageToken?: string | null;
        /** URL for the next page of results, or null when unavailable. */
        nextPageLink?: string | null;
      };
    };
    /** List Coda docs accessible to the authenticated user with optional ownership, publication, workspace, and pagination filters. */
    "coda.list_docs": {
      input: {
        /** Show only docs owned by the user. */
        isOwner?: boolean;
        /** Show only published docs. */
        isPublished?: boolean;
        /** Search term used to filter down results. */
        query?: string;
        /** Show only docs copied from the specified doc ID. */
        sourceDoc?: string;
        /** Whether to filter by starred state. */
        isStarred?: boolean;
        /** Show only docs visible within the gallery. */
        inGallery?: boolean;
        /** Show only docs in the given workspace. */
        workspaceId?: string;
        /** Show only docs in the given folder. */
        folderId?: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque token used to fetch the next page of results.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Docs returned by the query. */
        items: Array<{
          /** ID of the Coda doc. */
          id: string;
          /** Type of the doc resource. */
          type: string;
          /** API link to the Coda doc. */
          href: string;
          /** Browser-friendly link to the Coda doc. */
          browserLink: string;
          /** Name of the doc. */
          name: string;
          /** Email address of the doc owner. */
          owner: string;
          /** Name of the doc owner. */
          ownerName: string;
          /** Icon metadata for the doc. */
          icon?: Record<string, unknown>;
          /** Document size metadata. */
          docSize?: Record<string, unknown>;
          /** Reference to the source doc, when present. */
          sourceDoc?: Record<string, unknown>;
          /** Timestamp when the doc was created. */
          createdAt: string;
          /** Timestamp when the doc was last modified. */
          updatedAt: string;
          /** Publication metadata for the doc. */
          published?: Record<string, unknown>;
          /** Folder reference containing the doc. */
          folder?: Record<string, unknown>;
          /** Workspace reference containing the doc. */
          workspace?: {
            /** ID of the workspace. */
            id?: string;
            /** Type of the workspace reference. */
            type?: string;
            /** API link to the workspace. */
            href?: string;
            /** Browser-friendly link to the workspace. */
            browserLink?: string;
            /** Name of the workspace. */
            name?: string;
            [key: string]: unknown;
          };
          /** ID of the Coda workspace containing this doc. */
          workspaceId?: string;
          /** ID of the Coda folder containing this doc. */
          folderId?: string;
          [key: string]: unknown;
        }>;
        /** Opaque token used to fetch the next page of results, or null when unavailable. */
        nextPageToken?: string | null;
        /** URL for the next page of results, or null when unavailable. */
        nextPageLink?: string | null;
      };
    };
    /** List pages in a Coda doc with pagination. */
    "coda.list_pages": {
      input: {
        /**
         * ID of the doc.
         * @minLength 1
         */
        docId: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque token used to fetch the next page of results.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** Pages returned by the query. */
        items: Array<{
          /** ID of the page. */
          id: string;
          /** Type of the page resource. */
          type: string;
          /** API link to the page. */
          href: string;
          /** Browser-friendly link to the page. */
          browserLink: string;
          /** Name of the page. */
          name: string;
          /** Subtitle of the page. */
          subtitle?: string;
          /** Icon metadata for the page. */
          icon?: Record<string, unknown>;
          /** Image metadata for the page. */
          image?: Record<string, unknown>;
          /** Type of page content. */
          contentType: string;
          /** Whether the page is hidden in the UI. */
          isHidden: boolean;
          /** Whether the page or one of its ancestors is hidden in the UI. */
          isEffectivelyHidden: boolean;
          /** Parent page reference, when present. */
          parent?: {
            /** ID of the page. */
            id: string;
            /** Type of the page reference. */
            type?: string;
            /** API link to the page. */
            href?: string;
            /** Browser-friendly link to the page. */
            browserLink?: string;
            /** Name of the page. */
            name?: string;
            [key: string]: unknown;
          };
          /** Child page references. */
          children: Array<{
            /** ID of the page. */
            id: string;
            /** Type of the page reference. */
            type?: string;
            /** API link to the page. */
            href?: string;
            /** Browser-friendly link to the page. */
            browserLink?: string;
            /** Name of the page. */
            name?: string;
            [key: string]: unknown;
          }>;
          /** Authors associated with the page. */
          authors?: Array<Record<string, unknown>>;
          /** Timestamp when the page was created. */
          createdAt?: string;
          /** User who created the page. */
          createdBy?: Record<string, unknown>;
          /** Timestamp when the page was last updated. */
          updatedAt?: string;
          /** User who last updated the page. */
          updatedBy?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Opaque token used to fetch the next page of results, or null when unavailable. */
        nextPageToken?: string | null;
        /** URL for the next page of results, or null when unavailable. */
        nextPageLink?: string | null;
      };
    };
    /** List rows in a Coda table with filtering, sorting, pagination, optional sync tokens, and configurable cell value formats. */
    "coda.list_rows": {
      input: {
        /**
         * ID of the doc.
         * @minLength 1
         */
        docId: string;
        /**
         * ID or name of the table. Names are discouraged because they are fragile.
         * @minLength 1
         */
        tableIdOrName: string;
        /** Row query in the official `<column_id_or_name>:<value>` format. */
        query?: string;
        /** Sort order for the returned rows. */
        sortBy?: string;
        /** Whether returned row values should be keyed by column names instead of IDs. */
        useColumnNames?: boolean;
        /** Format for returned cell values. */
        valueFormat?: "simple" | "simpleWithArrays" | "rich";
        /** Whether to return only visible rows and columns. */
        visibleOnly?: boolean;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque token used to fetch the next page of results.
         * @minLength 1
         */
        pageToken?: string;
        /** Sync token from a previous call for incremental reads. */
        syncToken?: string;
      };
      output: {
        /** Rows returned by the query. */
        items: Array<{
          /** ID of the row. */
          id: string;
          /** Type of the row resource. */
          type: string;
          /** API link to the row. */
          href: string;
          /** Display name of the row. */
          name: string;
          /** Index of the row within the table. */
          index: number;
          /** Browser-friendly link to the row. */
          browserLink: string;
          /** Timestamp when the row was created. */
          createdAt: string;
          /** Timestamp when the row was last modified. */
          updatedAt: string;
          /** Row values keyed by column IDs or names when useColumnNames is enabled. */
          values: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Opaque token used to fetch the next page of results, or null when unavailable. */
        nextPageToken?: string | null;
        /** URL for the next page of results, or null when unavailable. */
        nextPageLink?: string | null;
        /** Opaque sync token for incremental follow-up reads, or null when unavailable. */
        nextSyncToken?: string | null;
      };
    };
    /** List tables in a Coda doc with pagination, optional sort order, and optional table-type filtering. */
    "coda.list_tables": {
      input: {
        /**
         * ID of the doc.
         * @minLength 1
         */
        docId: string;
        /**
         * Maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Opaque token used to fetch the next page of results.
         * @minLength 1
         */
        pageToken?: string;
        /** Determines how to sort the returned tables. */
        sortBy?: string;
        /** Table types to include in results. */
        tableTypes?: Array<string>;
      };
      output: {
        /** Tables returned by the query. */
        items: Array<{
          /** ID of the table. */
          id: string;
          /** Type of the table reference. */
          type?: string;
          /** Type of the table or view. */
          tableType?: string;
          /** API link to the table. */
          href?: string;
          /** Browser-friendly link to the table. */
          browserLink?: string;
          /** Name of the table. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** Opaque token used to fetch the next page of results, or null when unavailable. */
        nextPageToken?: string | null;
        /** URL for the next page of results, or null when unavailable. */
        nextPageLink?: string | null;
      };
    };
    /** Insert rows into a Coda table, optionally updating existing rows when key columns are provided. */
    "coda.upsert_rows": {
      input: {
        /**
         * ID of the doc.
         * @minLength 1
         */
        docId: string;
        /**
         * ID or name of the table. Names are discouraged because they are fragile.
         * @minLength 1
         */
        tableIdOrName: string;
        /** Whether Coda should skip automatic value parsing. */
        disableParsing?: boolean;
        /** Column IDs, URLs, or names used as upsert keys. */
        keyColumns?: Array<string>;
        /**
         * Rows to insert or upsert.
         * @minItems 1
         */
        rows: Array<{
          /**
           * Cells to write for the target row.
           * @minItems 1
           */
          cells: Array<{
            /**
             * Column ID, URL, or name associated with this edit.
             * @minLength 1
             */
            column: string;
            /** Value to write to the cell. */
            value: unknown;
          }>;
        }>;
      };
      output: {
        /** Request ID for the asynchronous row upsert. */
        requestId: string;
        /** Row IDs that will be added when Coda can determine them upfront. */
        addedRowIds?: Array<string>;
      };
    };
  }
}
