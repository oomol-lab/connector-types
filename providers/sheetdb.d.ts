import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Count data rows in the connected spreadsheet, excluding the header row. */
    "sheetdb.count_rows": {
      input: {
        /**
         * The optional spreadsheet tab name.
         * @minLength 1
         */
        sheet?: string;
      };
      output: {
        /**
         * The number of data rows in the spreadsheet.
         * @minimum 0
         */
        count: number;
      };
    };
    /** Append one or more JSON rows to the connected spreadsheet. */
    "sheetdb.create_rows": {
      input: {
        /**
         * Rows to append to the spreadsheet.
         * @minItems 1
         */
        rows: Array<Record<string, string | number | boolean | null>>;
        /**
         * The optional spreadsheet tab name.
         * @minLength 1
         */
        sheet?: string;
        /** Whether SheetDB should return the freshly created rows. */
        returnValues?: boolean;
        /** The Google Sheets value rendering or input mode. */
        valueInputOption?: "RAW" | "USER_ENTERED";
      };
      output: {
        /**
         * The number of rows created.
         * @minimum 0
         */
        created: number;
        /** Spreadsheet rows returned by SheetDB. */
        rows?: Array<Record<string, string | number | boolean | null>>;
      };
    };
    /** Delete all rows matching one spreadsheet column and value. */
    "sheetdb.delete_rows": {
      input: {
        /**
         * The column name used to select rows for deletion.
         * @minLength 1
         */
        searchColumn: string;
        /**
         * The value used to select rows for deletion.
         * @minLength 1
         */
        searchValue: string;
        /**
         * The optional spreadsheet tab name.
         * @minLength 1
         */
        sheet?: string;
      };
      output: {
        /**
         * The number of rows deleted.
         * @minimum 0
         */
        deleted: number;
      };
    };
    /** Get the Google Sheets document name for the connected SheetDB API. */
    "sheetdb.get_document_name": {
      input: Record<string, never>;
      output: {
        /** The Google Sheets document name. */
        documentName: string;
      };
    };
    /** Get the column names from the first row of the connected spreadsheet. */
    "sheetdb.get_keys": {
      input: {
        /**
         * The optional spreadsheet tab name.
         * @minLength 1
         */
        sheet?: string;
      };
      output: {
        /** The spreadsheet column names. */
        keys: Array<string>;
      };
    };
    /** List rows from the connected SheetDB spreadsheet with optional paging and sorting. */
    "sheetdb.list_rows": {
      input: {
        /**
         * The optional spreadsheet tab name.
         * @minLength 1
         */
        sheet?: string;
        /**
         * The maximum number of rows to return.
         * @minimum 0
         */
        limit?: number;
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The column name used to sort rows.
         * @minLength 1
         */
        sortBy?: string;
        /** The row sort order. */
        sortOrder?: "asc" | "desc" | "random";
        /** Use date-aware sorting. */
        sortMethod?: "date";
        /**
         * The date format used for date-aware sorting, such as Y-m-d.
         * @minLength 1
         */
        sortDateFormat?: string;
        /**
         * Column names whose values should be converted to numbers.
         * @minItems 1
         */
        castNumbers?: Array<string>;
        /** How Google Sheets values should be rendered. */
        valueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
      };
      output: {
        /** Spreadsheet rows returned by SheetDB. */
        rows: Array<Record<string, string | number | boolean | null>>;
      };
    };
    /** Search spreadsheet rows using dynamic column conditions and AND or OR matching. */
    "sheetdb.search_rows": {
      input: {
        /** Search conditions keyed by spreadsheet column name. */
        query: Record<string, string | number | boolean | Array<string>>;
        /** Whether all or any search conditions must match. */
        match?: "all" | "any";
        /** Whether string matching is case-sensitive. */
        caseSensitive?: boolean;
        /**
         * The optional spreadsheet tab name.
         * @minLength 1
         */
        sheet?: string;
        /**
         * The maximum number of rows to return.
         * @minimum 0
         */
        limit?: number;
        /**
         * The number of rows to skip before returning results.
         * @minimum 0
         */
        offset?: number;
        /**
         * The column name used to sort rows.
         * @minLength 1
         */
        sortBy?: string;
        /** The row sort order. */
        sortOrder?: "asc" | "desc" | "random";
        /** Use date-aware sorting. */
        sortMethod?: "date";
        /**
         * The date format used for date-aware sorting, such as Y-m-d.
         * @minLength 1
         */
        sortDateFormat?: string;
        /**
         * Column names whose values should be converted to numbers.
         * @minItems 1
         */
        castNumbers?: Array<string>;
        /** How Google Sheets values should be rendered. */
        valueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
      };
      output: {
        /** Spreadsheet rows returned by SheetDB. */
        rows: Array<Record<string, string | number | boolean | null>>;
      };
    };
    /** Update all rows matching one spreadsheet column and value. */
    "sheetdb.update_rows": {
      input: {
        /**
         * The column name used to select rows for updating.
         * @minLength 1
         */
        searchColumn: string;
        /**
         * The value used to select rows for updating.
         * @minLength 1
         */
        searchValue: string;
        /** A spreadsheet row keyed by column name. */
        data: Record<string, string | number | boolean | null>;
        /**
         * The optional spreadsheet tab name.
         * @minLength 1
         */
        sheet?: string;
        /** The Google Sheets value rendering or input mode. */
        valueInputOption?: "RAW" | "USER_ENTERED";
      };
      output: {
        /**
         * The number of rows updated.
         * @minimum 0
         */
        updated: number;
      };
    };
  }
}
