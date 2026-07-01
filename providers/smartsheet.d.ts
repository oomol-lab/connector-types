import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more rows to a Smartsheet sheet. */
    "smartsheet.add_rows": {
      input: {
        /**
         * The ID of the sheet that receives the rows.
         * @minimum 1
         */
        sheetId: number;
        /**
         * The rows to add.
         * @minItems 1
         */
        rows: Array<{
          /**
           * The row ID. Required when updating rows.
           * @minimum 1
           */
          id?: number;
          /**
           * The cells to write for this row.
           * @minItems 1
           */
          cells: Array<{
            /**
             * The column ID for the cell.
             * @minimum 1
             */
            columnId: number;
            /** The typed value to write to the cell. */
            value?: unknown;
            /**
             * The display value for the cell.
             * @minLength 1
             */
            displayValue?: string;
            /** Whether Smartsheet should enforce strict cell value validation. */
            strict?: boolean;
            /** The hyperlink object for the cell. */
            hyperlink?: Record<string, unknown>;
            /** The inbound cell link object. */
            linkInFromCell?: Record<string, unknown>;
            /** The object value for contact, picklist, or other rich cell types. */
            objectValue?: unknown;
          }>;
          /** Whether to place the row at the top of the sheet. */
          toTop?: boolean;
          /** Whether to place the row at the bottom of the sheet. */
          toBottom?: boolean;
          /**
           * The parent row ID for an indented row.
           * @minimum 1
           */
          parentId?: number;
          /**
           * The sibling row ID used for relative placement.
           * @minimum 1
           */
          siblingId?: number;
          /** Whether to place the row above the sibling row. */
          above?: boolean;
          /**
           * The indent operation amount. Smartsheet expects 1.
           * @minimum 1
           * @maximum 1
           */
          indent?: number;
          /**
           * The outdent operation amount. Smartsheet expects 1.
           * @minimum 1
           * @maximum 1
           */
          outdent?: number;
          /** Whether the row is expanded. */
          expanded?: boolean;
          /** Whether the row is locked. */
          locked?: boolean;
        }>;
        /** Whether Smartsheet should allow partial success. */
        allowPartialSuccess?: boolean;
        /** Whether Smartsheet should bypass cell validation limits. */
        overrideValidation?: boolean;
      };
      output: {
        /** The Smartsheet result message. */
        message: string | null;
        /** The Smartsheet result code. */
        resultCode: number | null;
        /** The sheet version after the operation. */
        version: number | null;
        /** The rows returned by Smartsheet. */
        rows: Array<{
          /** The row ID. */
          id: number | null;
          /** The parent sheet ID. */
          sheetId: number | null;
          /** The row number within the sheet. */
          rowNumber: number | null;
          /** The Smartsheet permalink for the row. */
          permalink: string | null;
          /** Whether the row is expanded. */
          expanded: boolean | null;
          /** The row creation timestamp. */
          createdAt: string | null;
          /** The row modification timestamp. */
          modifiedAt: string | null;
          /** The cells returned for the row. */
          cells: Array<{
            /** The column ID for the cell. */
            columnId: number | null;
            /** The typed value returned for the cell. */
            value: unknown;
            /** The display value returned for the cell. */
            displayValue: string | null;
            /** The column type returned for the cell. */
            columnType: string | null;
            /** The raw cell object returned by Smartsheet. */
            raw: Record<string, unknown>;
          }>;
          /** The raw row object returned by Smartsheet. */
          raw: Record<string, unknown>;
        }>;
        /** The raw write response returned by Smartsheet. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one or more rows from a Smartsheet sheet. */
    "smartsheet.delete_rows": {
      input: {
        /**
         * The ID of the sheet containing the rows.
         * @minimum 1
         */
        sheetId: number;
        /**
         * The row IDs to delete.
         * @minItems 1
         */
        rowIds: Array<number>;
        /** Whether Smartsheet should ignore missing row IDs. */
        ignoreRowsNotFound?: boolean;
      };
      output: {
        /** The Smartsheet result message. */
        message: string | null;
        /** The Smartsheet result code. */
        resultCode: number | null;
        /** The row IDs requested for deletion. */
        deletedRowIds: Array<number>;
        /** The raw delete response returned by Smartsheet. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a Smartsheet sheet with columns and rows. */
    "smartsheet.get_sheet": {
      input: {
        /**
         * The ID of the sheet to retrieve.
         * @minimum 1
         */
        sheetId: number;
        /**
         * Comma-separated Smartsheet include flags.
         * @minLength 1
         */
        include?: string;
        /**
         * Comma-separated Smartsheet exclude flags.
         * @minLength 1
         */
        exclude?: string;
        /**
         * Comma-separated column IDs to include.
         * @minLength 1
         */
        columnIds?: string;
        /**
         * Comma-separated row IDs to include.
         * @minLength 1
         */
        rowIds?: string;
        /**
         * Comma-separated row numbers to include.
         * @minLength 1
         */
        rowNumbers?: string;
        /**
         * The Smartsheet filter ID to apply.
         * @minLength 1
         */
        filterId?: string;
        /**
         * Only return the full sheet if it changed after this version.
         * @minimum 0
         */
        ifVersionAfter?: number;
        /**
         * The Smartsheet object-value compatibility level.
         * @minimum 0
         * @maximum 2
         */
        level?: number;
        /**
         * Only return rows modified on or after this timestamp.
         * @format date-time
         */
        rowsModifiedSince?: string;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 10000
         */
        pageSize?: number;
      };
      output: {
        /** A normalized Smartsheet sheet. */
        sheet: {
          /** The sheet ID. */
          id: number | null;
          /** The sheet name. */
          name: string | null;
          /** The caller access level for the sheet. */
          accessLevel: string | null;
          /** The Smartsheet permalink for the sheet. */
          permalink: string | null;
          /** The sheet creation timestamp. */
          createdAt: string | null;
          /** The sheet modification timestamp. */
          modifiedAt: string | null;
          /** The sheet version number. */
          version: number | null;
          /** The total row count reported by Smartsheet. */
          totalRowCount: number | null;
          /** The sheet columns. */
          columns: Array<{
            /** The column ID. */
            id: number | null;
            /** The column title. */
            title: string | null;
            /** The column type. */
            type: string | null;
            /** Whether this is the primary column. */
            primary: boolean | null;
            /** The zero-based column index. */
            index: number | null;
            /** The column symbol type. */
            symbol: string | null;
            /** The column options when present. */
            options: Array<string>;
            /** The raw column object returned by Smartsheet. */
            raw: Record<string, unknown>;
          }>;
          /** The sheet rows. */
          rows: Array<{
            /** The row ID. */
            id: number | null;
            /** The parent sheet ID. */
            sheetId: number | null;
            /** The row number within the sheet. */
            rowNumber: number | null;
            /** The Smartsheet permalink for the row. */
            permalink: string | null;
            /** Whether the row is expanded. */
            expanded: boolean | null;
            /** The row creation timestamp. */
            createdAt: string | null;
            /** The row modification timestamp. */
            modifiedAt: string | null;
            /** The cells returned for the row. */
            cells: Array<{
              /** The column ID for the cell. */
              columnId: number | null;
              /** The typed value returned for the cell. */
              value: unknown;
              /** The display value returned for the cell. */
              displayValue: string | null;
              /** The column type returned for the cell. */
              columnType: string | null;
              /** The raw cell object returned by Smartsheet. */
              raw: Record<string, unknown>;
            }>;
            /** The raw row object returned by Smartsheet. */
            raw: Record<string, unknown>;
          }>;
          /** The raw sheet object returned by Smartsheet. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** List sheets available to the authenticated Smartsheet access token. */
    "smartsheet.list_sheets": {
      input: {
        /** Whether Smartsheet should include all matching sheets. */
        includeAll?: boolean;
        /**
         * Only return sheets modified on or after this timestamp.
         * @format date-time
         */
        modifiedSince?: string;
        /**
         * The page number to return.
         * @minimum 1
         */
        page?: number;
        /**
         * The maximum number of items to return per page.
         * @minimum 1
         * @maximum 10000
         */
        pageSize?: number;
      };
      output: {
        /** Pagination metadata returned by Smartsheet. */
        page: {
          /** The returned page number. */
          pageNumber: number | null;
          /** The returned page size. */
          pageSize: number | null;
          /** The total number of pages. */
          totalPages: number | null;
          /** The total number of available records. */
          totalCount: number | null;
        };
        /** The sheets returned by Smartsheet. */
        sheets: Array<{
          /** The sheet ID. */
          id: number | null;
          /** The sheet name. */
          name: string | null;
          /** The caller access level for the sheet. */
          accessLevel: string | null;
          /** The Smartsheet permalink for the sheet. */
          permalink: string | null;
          /** The sheet creation timestamp. */
          createdAt: string | null;
          /** The sheet modification timestamp. */
          modifiedAt: string | null;
          /** The workspace ID when the sheet is in a workspace. */
          workspaceId: number | null;
          /** The raw sheet object returned by Smartsheet. */
          raw: Record<string, unknown>;
        }>;
        /** The raw list response returned by Smartsheet. */
        raw: Record<string, unknown>;
      };
    };
    /** Update one or more rows in a Smartsheet sheet. */
    "smartsheet.update_rows": {
      input: {
        /**
         * The ID of the sheet containing the rows.
         * @minimum 1
         */
        sheetId: number;
        /**
         * The rows to update. Each row must include an id.
         * @minItems 1
         */
        rows: Array<{
          /**
           * The row ID. Required when updating rows.
           * @minimum 1
           */
          id: number;
          /**
           * The cells to write for this row.
           * @minItems 1
           */
          cells: Array<{
            /**
             * The column ID for the cell.
             * @minimum 1
             */
            columnId: number;
            /** The typed value to write to the cell. */
            value?: unknown;
            /**
             * The display value for the cell.
             * @minLength 1
             */
            displayValue?: string;
            /** Whether Smartsheet should enforce strict cell value validation. */
            strict?: boolean;
            /** The hyperlink object for the cell. */
            hyperlink?: Record<string, unknown>;
            /** The inbound cell link object. */
            linkInFromCell?: Record<string, unknown>;
            /** The object value for contact, picklist, or other rich cell types. */
            objectValue?: unknown;
          }>;
          /** Whether to place the row at the top of the sheet. */
          toTop?: boolean;
          /** Whether to place the row at the bottom of the sheet. */
          toBottom?: boolean;
          /**
           * The parent row ID for an indented row.
           * @minimum 1
           */
          parentId?: number;
          /**
           * The sibling row ID used for relative placement.
           * @minimum 1
           */
          siblingId?: number;
          /** Whether to place the row above the sibling row. */
          above?: boolean;
          /**
           * The indent operation amount. Smartsheet expects 1.
           * @minimum 1
           * @maximum 1
           */
          indent?: number;
          /**
           * The outdent operation amount. Smartsheet expects 1.
           * @minimum 1
           * @maximum 1
           */
          outdent?: number;
          /** Whether the row is expanded. */
          expanded?: boolean;
          /** Whether the row is locked. */
          locked?: boolean;
        }>;
        /** Whether Smartsheet should allow partial success. */
        allowPartialSuccess?: boolean;
        /** Whether Smartsheet should bypass cell validation limits. */
        overrideValidation?: boolean;
      };
      output: {
        /** The Smartsheet result message. */
        message: string | null;
        /** The Smartsheet result code. */
        resultCode: number | null;
        /** The sheet version after the operation. */
        version: number | null;
        /** The rows returned by Smartsheet. */
        rows: Array<{
          /** The row ID. */
          id: number | null;
          /** The parent sheet ID. */
          sheetId: number | null;
          /** The row number within the sheet. */
          rowNumber: number | null;
          /** The Smartsheet permalink for the row. */
          permalink: string | null;
          /** Whether the row is expanded. */
          expanded: boolean | null;
          /** The row creation timestamp. */
          createdAt: string | null;
          /** The row modification timestamp. */
          modifiedAt: string | null;
          /** The cells returned for the row. */
          cells: Array<{
            /** The column ID for the cell. */
            columnId: number | null;
            /** The typed value returned for the cell. */
            value: unknown;
            /** The display value returned for the cell. */
            displayValue: string | null;
            /** The column type returned for the cell. */
            columnType: string | null;
            /** The raw cell object returned by Smartsheet. */
            raw: Record<string, unknown>;
          }>;
          /** The raw row object returned by Smartsheet. */
          raw: Record<string, unknown>;
        }>;
        /** The raw write response returned by Smartsheet. */
        raw: Record<string, unknown>;
      };
    };
  }
}
