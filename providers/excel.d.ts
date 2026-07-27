import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a new workbook table from an address range. */
    "excel.add_table": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Optional worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId?: string;
        /**
         * Excel A1-style range address.
         * @minLength 1
         */
        address: string;
        /** Whether the first row of the range already contains table headers. */
        hasHeaders: boolean;
      };
      output: {
        /** Table created by Microsoft Graph. */
        table: {
          /** Table ID. */
          id: string;
          /** Table name. */
          name: string;
          /** Whether the first table column is highlighted. */
          highlightFirstColumn?: boolean;
          /** Whether the last table column is highlighted. */
          highlightLastColumn?: boolean;
          /** Whether the table shows headers. */
          showHeaders?: boolean;
          /** Whether the table shows totals. */
          showTotals?: boolean;
          /** Excel table style name. */
          style?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Add one column to a workbook table. */
    "excel.add_table_column": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * Optional zero-based insertion index.
         * @minimum 0
         */
        index?: number;
        /** Optional column values, including the header row as the first inner row. */
        values?: Array<Array<unknown>>;
      };
      output: {
        /** Table column created by Microsoft Graph. */
        column: {
          /** Table column ID. */
          id: string;
          /** Table column name. */
          name?: string;
          /** Zero-based column index. */
          index?: number;
          /** Column values returned by Microsoft Graph. */
          values?: Array<Array<unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Add one or more rows to a workbook table. */
    "excel.add_table_row": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * Optional zero-based insertion index.
         * @minimum 0
         */
        index?: number;
        /** Row values to add to the table. */
        values: Array<Array<unknown>>;
      };
      output: {
        /** Row resource returned by Microsoft Graph. */
        row: {
          /** Zero-based row index inside the table. */
          index?: number;
          /** Cell values stored in the row. */
          values?: Array<Array<unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Add a new worksheet to a workbook. */
    "excel.add_worksheet": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name to create.
         * @minLength 1
         */
        name?: string;
      };
      output: {
        /** Worksheet created by Microsoft Graph. */
        worksheet: {
          /** Worksheet ID. */
          id: string;
          /** Worksheet name. */
          name: string;
          /** Zero-based worksheet position. */
          position?: number;
          /** Worksheet visibility. */
          visibility?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Apply a Microsoft Graph filter criteria object to one table column. */
    "excel.apply_table_filter": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * Table column name or table column ID.
         * @minLength 1
         */
        columnId: string;
        /** Filter criteria object accepted by Microsoft Graph table filters. */
        criteria: Record<string, unknown>;
      };
      output: {
        /** Whether the Excel operation completed successfully. */
        success: true;
      };
    };
    /** Apply a Microsoft Graph sort definition to one workbook table. */
    "excel.apply_table_sort": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * Sort field definitions accepted by Microsoft Graph.
         * @minItems 1
         */
        fields: Array<{
          /**
           * Zero-based sort key column index.
           * @minimum 0
           */
          key: number;
          /** Whether the sort order is ascending. */
          ascending?: boolean;
          /** Optional Graph sortOn mode. */
          sortOn?: string;
          /** Optional cell color used by color-based sorts. */
          color?: string;
          /** Optional Graph data option for the sort field. */
          dataOption?: string;
          /** Optional icon sort configuration. */
          icon?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Whether sorting should be case-sensitive. */
        matchCase?: boolean;
        /** Optional Graph sort method. */
        method?: string;
      };
      output: {
        /** Whether the Excel operation completed successfully. */
        success: true;
      };
    };
    /** Clear one worksheet range. */
    "excel.clear_range": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * Excel A1-style range address.
         * @minLength 1
         */
        address: string;
        /** Optional clear mode accepted by Microsoft Graph. */
        applyTo?: "All" | "Formats" | "Contents";
      };
      output: {
        /** Whether the Excel operation completed successfully. */
        success: true;
      };
    };
    /** Clear the current Microsoft Graph filter on one table column. */
    "excel.clear_table_filter": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * Table column name or table column ID.
         * @minLength 1
         */
        columnId: string;
      };
      output: {
        /** Whether the Excel operation completed successfully. */
        success: true;
      };
    };
    /** Convert a workbook table back into a plain worksheet range. */
    "excel.convert_table_to_range": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
      };
      output: {
        /** Range returned after table conversion. */
        range: {
          /** A1-style address of the range. */
          address?: string;
          /** Localized A1-style address of the range. */
          addressLocal?: string;
          /** Total number of cells in the range. */
          cellCount?: number;
          /** Number of columns in the range. */
          columnCount?: number;
          /** Number of rows in the range. */
          rowCount?: number;
          /** Whether all columns in the range are hidden. */
          columnHidden?: boolean;
          /** Whether all rows in the range are hidden. */
          rowHidden?: boolean;
          /** Raw cell values in the range. */
          values?: Array<Array<unknown>>;
          /** Display text values in the range. */
          text?: Array<Array<unknown>>;
          /** A1-style formulas in the range. */
          formulas?: Array<Array<unknown>>;
          /** Localized formulas in the range. */
          formulasLocal?: Array<Array<unknown>>;
          /** R1C1-style formulas in the range. */
          formulasR1C1?: Array<Array<unknown>>;
          /** Excel number formats for the range. */
          numberFormat?: Array<Array<unknown>>;
          /** Cell value types for the range. */
          valueTypes?: Array<Array<unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Create an Excel workbook session for subsequent workbook operations. */
    "excel.create_session": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /** Whether workbook changes should persist after the session closes. */
        persistChanges?: boolean;
      };
      output: {
        /** Workbook session ID. */
        sessionId: string;
        /** Whether the workbook session persists changes when closed. */
        persistChanges: boolean;
      };
    };
    /** Create a new .xlsx workbook file and optionally populate worksheets and data. */
    "excel.create_workbook": {
      input: {
        /**
         * Workbook path including the file name, relative to the drive root and ending with .xlsx.
         * @minLength 1
         */
        path: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        drive_id?: string;
        /** Optional mapping of worksheet names to row data. */
        worksheetData?: Record<string, Array<Array<string | number | boolean | null>>>;
        /** Alias of worksheetData. */
        worksheet_data?: Record<string, Array<Array<string | number | boolean | null>>>;
        /** Optional worksheet names to create in order. */
        worksheetNames?: Array<string>;
        /** Alias of worksheetNames. */
        worksheet_names?: Array<string>;
      };
      output: {
        /** Drive item ID. */
        id: string;
        /** Drive item name. */
        name: string;
        /** Web URL for the drive item. */
        webUrl?: string;
        /** Creation timestamp for the drive item. */
        createdDateTime?: string;
        /** Last modification timestamp for the drive item. */
        lastModifiedDateTime?: string;
        /** Drive item size in bytes. */
        size?: number;
        /** File facet returned by Microsoft Graph. */
        file?: Record<string, unknown>;
        /** Folder facet returned by Microsoft Graph. */
        folder?: Record<string, unknown>;
        /** Workbook facet returned by Microsoft Graph. */
        workbook?: Record<string, unknown>;
        /** Parent reference for the drive item. */
        parentReference?: {
          /** Parent drive ID. */
          driveId?: string;
          /** Parent item ID. */
          id?: string;
          /** Parent path reference. */
          path?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete one column from a workbook table. */
    "excel.delete_table_column": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * Table column name or table column ID.
         * @minLength 1
         */
        columnId: string;
      };
      output: {
        /** Whether the Excel operation completed successfully. */
        success: true;
      };
    };
    /** Delete one row from a workbook table by row index. */
    "excel.delete_table_row": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * Zero-based row index to delete.
         * @minimum 0
         */
        rowIndex: number;
      };
      output: {
        /** Whether the Excel operation completed successfully. */
        success: true;
      };
    };
    /** Delete one worksheet from a workbook. */
    "excel.delete_worksheet": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
      };
      output: {
        /** Whether the Excel operation completed successfully. */
        success: true;
      };
    };
    /** Read one worksheet range by A1-style address. */
    "excel.get_range": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * Excel A1-style range address.
         * @minLength 1
         */
        address: string;
      };
      output: {
        /** Range returned by Microsoft Graph. */
        range: {
          /** A1-style address of the range. */
          address?: string;
          /** Localized A1-style address of the range. */
          addressLocal?: string;
          /** Total number of cells in the range. */
          cellCount?: number;
          /** Number of columns in the range. */
          columnCount?: number;
          /** Number of rows in the range. */
          rowCount?: number;
          /** Whether all columns in the range are hidden. */
          columnHidden?: boolean;
          /** Whether all rows in the range are hidden. */
          rowHidden?: boolean;
          /** Raw cell values in the range. */
          values?: Array<Array<unknown>>;
          /** Display text values in the range. */
          text?: Array<Array<unknown>>;
          /** A1-style formulas in the range. */
          formulas?: Array<Array<unknown>>;
          /** Localized formulas in the range. */
          formulasLocal?: Array<Array<unknown>>;
          /** R1C1-style formulas in the range. */
          formulasR1C1?: Array<Array<unknown>>;
          /** Excel number formats for the range. */
          numberFormat?: Array<Array<unknown>>;
          /** Cell value types for the range. */
          valueTypes?: Array<Array<unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Read one workbook table column by column name or column ID. */
    "excel.get_table_column": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * Table column name or table column ID.
         * @minLength 1
         */
        columnId: string;
      };
      output: {
        /** Table column returned by Microsoft Graph. */
        column: {
          /** Table column ID. */
          id: string;
          /** Table column name. */
          name?: string;
          /** Zero-based column index. */
          index?: number;
          /** Column values returned by Microsoft Graph. */
          values?: Array<Array<unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Read workbook metadata and optionally expand related workbook resources. */
    "excel.get_workbook": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Optional relationships to expand on the workbook resource.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** Workbook metadata returned by Microsoft Graph. */
        workbook: {
          /** Workbook application metadata. */
          application?: Record<string, unknown>;
          /** Named items defined in the workbook. */
          names?: Array<Record<string, unknown>>;
          /** Tables returned for the workbook. */
          tables?: Array<Record<string, unknown>>;
          /** Worksheets returned for the workbook. */
          worksheets?: Array<{
            /** Worksheet ID. */
            id: string;
            /** Worksheet name. */
            name: string;
            /** Zero-based worksheet position. */
            position?: number;
            /** Worksheet visibility. */
            visibility?: string;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Read a single worksheet by worksheet name or worksheet ID. */
    "excel.get_worksheet": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
      };
      output: {
        /** Worksheet returned by Microsoft Graph. */
        worksheet: {
          /** Worksheet ID. */
          id: string;
          /** Worksheet name. */
          name: string;
          /** Zero-based worksheet position. */
          position?: number;
          /** Worksheet visibility. */
          visibility?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Read the used range for one worksheet. */
    "excel.get_worksheet_used_range": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /** Whether to ignore formatting-only cells in the used range. */
        valuesOnly?: boolean;
      };
      output: {
        /** Used range returned by Microsoft Graph. */
        range: {
          /** A1-style address of the range. */
          address?: string;
          /** Localized A1-style address of the range. */
          addressLocal?: string;
          /** Total number of cells in the range. */
          cellCount?: number;
          /** Number of columns in the range. */
          columnCount?: number;
          /** Number of rows in the range. */
          rowCount?: number;
          /** Whether all columns in the range are hidden. */
          columnHidden?: boolean;
          /** Whether all rows in the range are hidden. */
          rowHidden?: boolean;
          /** Raw cell values in the range. */
          values?: Array<Array<unknown>>;
          /** Display text values in the range. */
          text?: Array<Array<unknown>>;
          /** A1-style formulas in the range. */
          formulas?: Array<Array<unknown>>;
          /** Localized formulas in the range. */
          formulasLocal?: Array<Array<unknown>>;
          /** R1C1-style formulas in the range. */
          formulasR1C1?: Array<Array<unknown>>;
          /** Excel number formats for the range. */
          numberFormat?: Array<Array<unknown>>;
          /** Cell value types for the range. */
          valueTypes?: Array<Array<unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Insert one worksheet range and shift existing cells to make space. */
    "excel.insert_range": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * Excel A1-style range address.
         * @minLength 1
         */
        address: string;
        /** Direction used when inserting the range. */
        shift: "Down" | "Right";
      };
      output: {
        /** Inserted range returned by Microsoft Graph. */
        range: {
          /** A1-style address of the range. */
          address?: string;
          /** Localized A1-style address of the range. */
          addressLocal?: string;
          /** Total number of cells in the range. */
          cellCount?: number;
          /** Number of columns in the range. */
          columnCount?: number;
          /** Number of rows in the range. */
          rowCount?: number;
          /** Whether all columns in the range are hidden. */
          columnHidden?: boolean;
          /** Whether all rows in the range are hidden. */
          rowHidden?: boolean;
          /** Raw cell values in the range. */
          values?: Array<Array<unknown>>;
          /** Display text values in the range. */
          text?: Array<Array<unknown>>;
          /** A1-style formulas in the range. */
          formulas?: Array<Array<unknown>>;
          /** Localized formulas in the range. */
          formulasLocal?: Array<Array<unknown>>;
          /** R1C1-style formulas in the range. */
          formulasR1C1?: Array<Array<unknown>>;
          /** Excel number formats for the range. */
          numberFormat?: Array<Array<unknown>>;
          /** Cell value types for the range. */
          valueTypes?: Array<Array<unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** List direct child drive items for a folder or the drive root. */
    "excel.list_drive_item_children": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 200
         */
        top?: number;
        /**
         * Optional Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
      };
      output: {
        /** Child drive items returned by Microsoft Graph. */
        items: Array<{
          /** Drive item ID. */
          id: string;
          /** Drive item name. */
          name: string;
          /** Web URL for the drive item. */
          webUrl?: string;
          /** Creation timestamp for the drive item. */
          createdDateTime?: string;
          /** Last modification timestamp for the drive item. */
          lastModifiedDateTime?: string;
          /** Drive item size in bytes. */
          size?: number;
          /** File facet returned by Microsoft Graph. */
          file?: Record<string, unknown>;
          /** Folder facet returned by Microsoft Graph. */
          folder?: Record<string, unknown>;
          /** Workbook facet returned by Microsoft Graph. */
          workbook?: Record<string, unknown>;
          /** Parent reference for the drive item. */
          parentReference?: {
            /** Parent drive ID. */
            driveId?: string;
            /** Parent item ID. */
            id?: string;
            /** Parent path reference. */
            path?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Opaque Microsoft Graph nextLink for fetching the next page. */
        nextLink: string | null;
      };
    };
    /** List columns for one workbook table. */
    "excel.list_table_columns": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
      };
      output: {
        /** Table columns returned by Microsoft Graph. */
        columns: Array<{
          /** Table column ID. */
          id: string;
          /** Table column name. */
          name?: string;
          /** Zero-based column index. */
          index?: number;
          /** Column values returned by Microsoft Graph. */
          values?: Array<Array<unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque Microsoft Graph nextLink for fetching the next page. */
        nextLink: string | null;
      };
    };
    /** List rows for one workbook table. */
    "excel.list_table_rows": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
      };
      output: {
        /** Table rows returned by Microsoft Graph. */
        rows: Array<{
          /** Zero-based row index inside the table. */
          index?: number;
          /** Cell values stored in the row. */
          values?: Array<Array<unknown>>;
          [key: string]: unknown;
        }>;
        /** Opaque Microsoft Graph nextLink for fetching the next page. */
        nextLink: string | null;
      };
    };
    /** List workbook tables, optionally restricted to one worksheet. */
    "excel.list_tables": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Optional worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId?: string;
      };
      output: {
        /** Tables returned by Microsoft Graph. */
        tables: Array<{
          /** Table ID. */
          id: string;
          /** Table name. */
          name: string;
          /** Whether the first table column is highlighted. */
          highlightFirstColumn?: boolean;
          /** Whether the last table column is highlighted. */
          highlightLastColumn?: boolean;
          /** Whether the table shows headers. */
          showHeaders?: boolean;
          /** Whether the table shows totals. */
          showTotals?: boolean;
          /** Excel table style name. */
          style?: string;
          [key: string]: unknown;
        }>;
        /** Opaque Microsoft Graph nextLink for fetching the next page. */
        nextLink: string | null;
      };
    };
    /** List worksheets in a workbook. */
    "excel.list_worksheets": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
      };
      output: {
        /** Worksheets returned by Microsoft Graph. */
        worksheets: Array<{
          /** Worksheet ID. */
          id: string;
          /** Worksheet name. */
          name: string;
          /** Zero-based worksheet position. */
          position?: number;
          /** Worksheet visibility. */
          visibility?: string;
          [key: string]: unknown;
        }>;
        /** Opaque Microsoft Graph nextLink for fetching the next page. */
        nextLink: string | null;
      };
    };
    /** Merge cells inside one worksheet range. */
    "excel.merge_cells": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * Excel A1-style range address.
         * @minLength 1
         */
        address: string;
        /** Whether each row in the range should merge separately. */
        across?: boolean;
      };
      output: {
        /** Whether the Excel operation completed successfully. */
        success: true;
      };
    };
    /** Search workbook files in the current OneDrive drive and return matching drive items. */
    "excel.search_files": {
      input: {
        /**
         * Search query used to find workbook files.
         * @minLength 1
         */
        query: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 200
         */
        top?: number;
        /**
         * Optional file extensions used to filter search results.
         * @minItems 1
         */
        fileExtensions?: Array<string>;
      };
      output: {
        /** Matching drive items returned by the search. */
        items: Array<{
          /** Drive item ID. */
          id: string;
          /** Drive item name. */
          name: string;
          /** Web URL for the drive item. */
          webUrl?: string;
          /** Creation timestamp for the drive item. */
          createdDateTime?: string;
          /** Last modification timestamp for the drive item. */
          lastModifiedDateTime?: string;
          /** Drive item size in bytes. */
          size?: number;
          /** File facet returned by Microsoft Graph. */
          file?: Record<string, unknown>;
          /** Folder facet returned by Microsoft Graph. */
          folder?: Record<string, unknown>;
          /** Workbook facet returned by Microsoft Graph. */
          workbook?: Record<string, unknown>;
          /** Parent reference for the drive item. */
          parentReference?: {
            /** Parent drive ID. */
            driveId?: string;
            /** Parent item ID. */
            id?: string;
            /** Parent path reference. */
            path?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** Opaque Microsoft Graph nextLink for fetching the next page. */
        nextLink: string | null;
      };
    };
    /** Apply a Microsoft Graph sort definition to one worksheet range. */
    "excel.sort_range": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * Excel A1-style range address.
         * @minLength 1
         */
        address: string;
        /**
         * Sort field definitions accepted by Microsoft Graph.
         * @minItems 1
         */
        fields: Array<{
          /**
           * Zero-based sort key column index.
           * @minimum 0
           */
          key: number;
          /** Whether the sort order is ascending. */
          ascending?: boolean;
          /** Optional Graph sortOn mode. */
          sortOn?: string;
          /** Optional cell color used by color-based sorts. */
          color?: string;
          /** Optional Graph data option for the sort field. */
          dataOption?: string;
          /** Optional icon sort configuration. */
          icon?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Whether sorting should be case-sensitive. */
        matchCase?: boolean;
        /** Whether the range contains a header row. */
        hasHeaders?: boolean;
        /** Optional Graph sort orientation. */
        orientation?: string;
        /** Optional Graph sort method. */
        method?: string;
      };
      output: {
        /** Whether the Excel operation completed successfully. */
        success: true;
      };
    };
    /** Update one worksheet range with values, formulas, formats, or visibility flags. */
    "excel.update_range": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * Excel A1-style range address.
         * @minLength 1
         */
        address: string;
        /** Cell values to write into the range. */
        values?: Array<Array<unknown>>;
        /** A1-style formulas to write into the range. */
        formulas?: Array<Array<unknown>>;
        /** Localized formulas to write into the range. */
        formulasLocal?: Array<Array<unknown>>;
        /** R1C1-style formulas to write into the range. */
        formulasR1C1?: Array<Array<unknown>>;
        /** Excel number formats to write into the range. */
        numberFormat?: Array<Array<unknown>>;
        /** Whether rows in the range should be hidden. */
        rowHidden?: boolean;
        /** Whether columns in the range should be hidden. */
        columnHidden?: boolean;
      };
      output: {
        /** Updated range returned by Microsoft Graph. */
        range: {
          /** A1-style address of the range. */
          address?: string;
          /** Localized A1-style address of the range. */
          addressLocal?: string;
          /** Total number of cells in the range. */
          cellCount?: number;
          /** Number of columns in the range. */
          columnCount?: number;
          /** Number of rows in the range. */
          rowCount?: number;
          /** Whether all columns in the range are hidden. */
          columnHidden?: boolean;
          /** Whether all rows in the range are hidden. */
          rowHidden?: boolean;
          /** Raw cell values in the range. */
          values?: Array<Array<unknown>>;
          /** Display text values in the range. */
          text?: Array<Array<unknown>>;
          /** A1-style formulas in the range. */
          formulas?: Array<Array<unknown>>;
          /** Localized formulas in the range. */
          formulasLocal?: Array<Array<unknown>>;
          /** R1C1-style formulas in the range. */
          formulasR1C1?: Array<Array<unknown>>;
          /** Excel number formats for the range. */
          numberFormat?: Array<Array<unknown>>;
          /** Cell value types for the range. */
          valueTypes?: Array<Array<unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Update table metadata such as the name, style, or header flags. */
    "excel.update_table": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Table name or table ID.
         * @minLength 1
         */
        tableId: string;
        /**
         * Updated table name.
         * @minLength 1
         */
        name?: string;
        /**
         * Updated Excel table style.
         * @minLength 1
         */
        style?: string;
        /** Whether the table shows totals. */
        showTotals?: boolean;
        /** Whether the table shows headers. */
        showHeaders?: boolean;
      };
      output: {
        /** Updated table returned by Microsoft Graph. */
        table: {
          /** Table ID. */
          id: string;
          /** Table name. */
          name: string;
          /** Whether the first table column is highlighted. */
          highlightFirstColumn?: boolean;
          /** Whether the last table column is highlighted. */
          highlightLastColumn?: boolean;
          /** Whether the table shows headers. */
          showHeaders?: boolean;
          /** Whether the table shows totals. */
          showTotals?: boolean;
          /** Excel table style name. */
          style?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update worksheet metadata such as the name, position, or visibility. */
    "excel.update_worksheet": {
      input: {
        /**
         * Workbook drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional drive ID. Leave empty to use the current user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional workbook session ID created by create_session.
         * @minLength 1
         */
        sessionId?: string;
        /**
         * Worksheet name or worksheet ID.
         * @minLength 1
         */
        worksheetId: string;
        /**
         * Updated worksheet name.
         * @minLength 1
         */
        name?: string;
        /**
         * Updated zero-based worksheet position.
         * @minimum 0
         */
        position?: number;
        /** Updated worksheet visibility. */
        visibility?: "Visible" | "Hidden" | "VeryHidden";
      };
      output: {
        /** Updated worksheet returned by Microsoft Graph. */
        worksheet: {
          /** Worksheet ID. */
          id: string;
          /** Worksheet name. */
          name: string;
          /** Zero-based worksheet position. */
          position?: number;
          /** Worksheet visibility. */
          visibility?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
