import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a new sheet through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.add_sheet": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The title for the new sheet.
         * @minLength 1
         */
        title?: string;
        /** The properties for the new sheet. */
        properties?: Record<string, unknown>;
        /** Whether to ensure the sheet title is unique. */
        forceUnique?: boolean;
        /** The configuration for an object-backed sheet. */
        objectSheetConfig?: Record<string, unknown>;
        /** The configuration for a data-source-backed sheet. */
        dataSourceConfig?: Record<string, unknown>;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Aggregate numeric values from a target column, optionally filtered by another column, with stable counters. */
    "googlesheets.aggregate_column_data": {
      input: {
        /**
         * The ID of the spreadsheet to aggregate data from.
         * @minLength 1
         */
        spreadsheetId: string;
        /**
         * The name of the sheet to aggregate data from.
         * @minLength 1
         */
        sheetName: string;
        /**
         * The column header or A1 notation of the column to aggregate.
         * @minLength 1
         */
        targetColumn: string;
        /** The aggregation operation to perform. */
        operation: "sum" | "average" | "count" | "min" | "max" | "percentage";
        /**
         * The column to filter rows by before aggregating.
         * @minLength 1
         */
        searchColumn?: string;
        /** The value to match in the search column. */
        searchValue?: string;
        /** Whether the search value comparison is case-sensitive. */
        caseSensitive?: boolean;
        /** Whether the first row of the range is a header row. */
        hasHeaderRow?: boolean;
        /** The total value to use as the denominator when calculating percentage. */
        percentageTotal?: number;
      };
      output: {
        /** The computed aggregation result. */
        result: number;
        /** The aggregation operation that was performed. */
        operation: string;
        /** The number of rows that matched the search filter. */
        matchingRowsCount: number;
        /** The number of numeric values that were processed. */
        processedValuesCount: number;
        /** The list of numeric values that were included in the aggregation. */
        valuesProcessed: Array<number>;
        /** The aggregation search details. */
        searchDetails: {
          /** The column used to filter rows. */
          searchColumn?: string;
          /** The value matched in the search column. */
          searchValue?: string;
          /** The column whose values were aggregated. */
          targetColumn: string;
          /** Whether the search was case-sensitive. */
          caseSensitive: boolean;
          /** Whether all rows were aggregated without filtering. */
          aggregatedAllRows: boolean;
        };
      };
    };
    /** Append rows or columns through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.append_dimension": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The numeric ID of the sheet to append dimensions to. */
        sheetId: number;
        /** The dimension to append (rows or columns). */
        dimension: "ROWS" | "COLUMNS";
        /**
         * The number of rows or columns to append.
         * @minimum 1
         */
        length: number;
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Auto-resize rows or columns through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.auto_resize_dimensions": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The numeric ID of the sheet to auto-resize. */
        sheetId?: number;
        /**
         * The name of the sheet to auto-resize.
         * @minLength 1
         */
        sheetName?: string;
        /** The dimension to auto-resize (rows or columns). */
        dimension: "ROWS" | "COLUMNS";
        /**
         * The zero-based start index of the range to auto-resize.
         * @minimum 0
         */
        startIndex: number;
        /**
         * The exclusive end index of the range to auto-resize.
         * @minimum 1
         */
        endIndex: number;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Clear spreadsheet values through values.batchClearByDataFilter and return the cleared ranges. */
    "googlesheets.batch_clear_values_by_data_filter": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The data filters identifying the ranges to clear. */
        dataFilters: Array<Record<string, unknown>>;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The A1 notation of the ranges that were cleared. */
        clearedRanges: Array<string>;
      };
    };
    /** Read multiple spreadsheet ranges through values:batchGet and return stable valueRanges output. */
    "googlesheets.batch_get": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The A1 notation ranges to retrieve.
         * @minItems 1
         */
        ranges: Array<string>;
        /** The major dimension for the returned values. */
        majorDimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS";
        /** How values should be rendered in the output. */
        valueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
        /** How dates and times should be rendered in the output. */
        dateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING";
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of value ranges returned. */
        valueRanges: Array<{
          /** The A1 notation of the range. */
          range: string;
          /** The major dimension of the values (ROWS or COLUMNS). */
          majorDimension: string;
          /** The data values in the range. */
          values: Array<Array<string | number | boolean | null>>;
        }>;
      };
    };
    /** Write spreadsheet values through values.batchUpdateByDataFilter and return stable aggregate counters. */
    "googlesheets.batch_update_values_by_data_filter": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The list of data-filter-addressed value ranges to update.
         * @minItems 1
         */
        data: Array<{
          /** The data filter identifying the range to update. */
          dataFilter: Record<string, unknown>;
          /** The data to write into the matched range. */
          values: Array<Array<string | number | boolean | null>>;
          /** The major dimension of the values array. */
          majorDimension?: "ROWS" | "COLUMNS" | "DIMENSION_UNSPECIFIED";
        }>;
        /** How the input data should be interpreted. */
        valueInputOption?: "INPUT_VALUE_OPTION_UNSPECIFIED" | "RAW" | "USER_ENTERED";
        /** Whether to include the written values in the response. */
        includeValuesInResponse?: boolean;
        /** How values in the response should be rendered. */
        responseValueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
        /** How dates in the response should be rendered. */
        responseDateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING";
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The total number of rows updated across all ranges. */
        totalUpdatedRows: number;
        /** The total number of columns updated across all ranges. */
        totalUpdatedColumns: number;
        /** The total number of cells updated across all ranges. */
        totalUpdatedCells: number;
        /** The per-range update responses. */
        responses: Array<{
          /** The A1 notation of the range that was updated. */
          updatedRange: string;
          /** The number of rows that were updated. */
          updatedRows: number;
          /** The number of columns that were updated. */
          updatedColumns: number;
          /** The number of cells that were updated. */
          updatedCells: number;
          /** The values of the cells after the update. */
          updatedData?: {
            /** The A1 notation of the range. */
            range: string;
            /** The major dimension of the values (ROWS or COLUMNS). */
            majorDimension: string;
            /** The data values in the range. */
            values: Array<Array<string | number | boolean | null>>;
          };
        }>;
      };
    };
    /** Clear a basic filter through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.clear_basic_filter": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The numeric ID of the sheet whose basic filter to clear. */
        sheetId: number;
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Clear a single spreadsheet value range through values.clear and return the cleared A1 range. */
    "googlesheets.clear_values": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The A1 notation of the range to clear.
         * @minLength 1
         */
        range: string;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The A1 notation of the range that was cleared. */
        clearedRange: string;
      };
    };
    /** Create a chart through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.create_chart": {
      input: {
        /**
         * The ID of the spreadsheet to add the chart to.
         * @minLength 1
         */
        spreadsheetId: string;
        /** The numeric ID of the sheet to add the chart to. */
        sheetId: number;
        /** The full chart specification object. */
        chartSpec?: {
          /** The title of the chart. */
          title?: string;
          /** The subtitle of the chart. */
          subtitle?: string;
          /** The background color of the chart. */
          backgroundColor?: Record<string, unknown>;
          /** The spec for a basic chart (bar, line, area, etc.). */
          basicChart?: Record<string, unknown>;
          /** The spec for a pie chart. */
          pieChart?: Record<string, unknown>;
          /** The spec for a bubble chart. */
          bubbleChart?: Record<string, unknown>;
          /** The spec for a candlestick chart. */
          candlestickChart?: Record<string, unknown>;
          /** The spec for a histogram chart. */
          histogramChart?: Record<string, unknown>;
          /** The spec for a waterfall chart. */
          waterfallChart?: Record<string, unknown>;
          /** The spec for a treemap chart. */
          treemapChart?: Record<string, unknown>;
          /** The spec for an org chart. */
          orgChart?: Record<string, unknown>;
          /** The spec for a scorecard chart. */
          scorecardChart?: Record<string, unknown>;
        };
        /**
         * The chart type (e.g. BAR, LINE, PIE) when using shorthand form.
         * @minLength 1
         */
        chartType?: string;
        /**
         * The A1 notation data range for the chart when using shorthand form.
         * @minLength 1
         */
        dataRange?: string;
        /** The title of the chart. */
        title?: string;
        /** The subtitle of the chart. */
        subtitle?: string;
        /** The title for the X axis. */
        xAxisTitle?: string;
        /** The title for the Y axis. */
        yAxisTitle?: string;
        /** The position of the chart legend. */
        legendPosition?: string;
        /**
         * The red component of the chart background color (0-1).
         * @minimum 0
         * @maximum 1
         */
        backgroundRed?: number;
        /**
         * The green component of the chart background color (0-1).
         * @minimum 0
         * @maximum 1
         */
        backgroundGreen?: number;
        /**
         * The blue component of the chart background color (0-1).
         * @minimum 0
         * @maximum 1
         */
        backgroundBlue?: number;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Create a Google Sheets spreadsheet and return stable spreadsheet metadata for the new file. */
    "googlesheets.create_google_sheet1": {
      input: {
        /** The title for the new spreadsheet. */
        title?: string;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The URL of the spreadsheet. */
        spreadsheetUrl: string | null;
        /** The spreadsheet-level properties. */
        properties: Record<string, unknown>;
        /** The list of sheets in the spreadsheet. */
        sheets: Array<{
          /** The sheet properties. */
          properties: {
            /** The numeric sheet ID. */
            sheetId?: number;
            /** The sheet title. */
            title?: string;
            /** The zero-based sheet index. */
            index?: number;
            /** The type of the sheet. */
            sheetType?: string;
            /** Whether the sheet is hidden. */
            hidden?: boolean;
            /** The grid properties of the sheet. */
            gridProperties?: Record<string, unknown>;
          };
          /** The grid data for the sheet. */
          data?: Array<Record<string, unknown>>;
          /** The conditional formatting rules for the sheet. */
          conditionalFormats?: Array<Record<string, unknown>>;
        }>;
        /** The named ranges defined in the spreadsheet. */
        namedRanges: Array<Record<string, unknown>>;
        /** The developer metadata attached to the spreadsheet. */
        developerMetadata: Array<Record<string, unknown>>;
      };
    };
    /** Insert an empty column into a sheet through spreadsheets.batchUpdate with stable top-level fields. */
    "googlesheets.create_spreadsheet_column": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The numeric ID of the sheet to insert a row into. */
        sheetId?: number;
        /**
         * The name of the sheet to insert a row into.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The zero-based row index at which to insert the new row.
         * @minimum 0
         */
        insertIndex?: number;
        /** Whether the new row should inherit properties from the row before it. */
        inheritFromBefore?: boolean;
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Insert an empty row into a sheet through spreadsheets.batchUpdate with stable top-level fields. */
    "googlesheets.create_spreadsheet_row": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The numeric ID of the sheet to insert a row into. */
        sheetId?: number;
        /**
         * The name of the sheet to insert a row into.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The zero-based row index at which to insert the new row.
         * @minimum 0
         */
        insertIndex?: number;
        /** Whether the new row should inherit properties from the row before it. */
        inheritFromBefore?: boolean;
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Delete rows or columns through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.delete_dimension": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The delete-dimension request payload. */
        deleteDimensionRequest?: {
          /** The range of dimensions to delete. */
          range: {
            /** The numeric ID of the sheet. */
            sheetId?: number;
            /** The dimension (rows or columns) this range spans. */
            dimension: "ROWS" | "COLUMNS";
            /**
             * The zero-based start index of the range.
             * @minimum 0
             */
            startIndex?: number;
            /**
             * The exclusive end index of the range.
             * @minimum 1
             */
            endIndex?: number;
          };
        };
        /** The numeric ID of the sheet. */
        sheetId?: number;
        /**
         * The name of the sheet.
         * @minLength 1
         */
        sheetName?: string;
        /** The dimension to delete (shorthand). */
        dimension?: "ROWS" | "COLUMNS";
        /**
         * The zero-based start index of the range to delete (shorthand).
         * @minimum 0
         */
        startIndex?: number;
        /**
         * The exclusive end index of the range to delete (shorthand).
         * @minimum 1
         */
        endIndex?: number;
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Delete a sheet through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.delete_sheet": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The numeric ID of the sheet to delete. */
        sheetId: number;
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Run find and replace through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.find_replace": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The value to search for.
         * @minLength 1
         */
        find: string;
        /** The value to replace matches with. */
        replace: string;
        /** Whether to search across all sheets. */
        allSheets?: boolean;
        /**
         * The A1 notation of the range to search within.
         * @minLength 1
         */
        range?: string;
        /** The numeric ID of the sheet for the search range. */
        rangeSheetId?: number;
        /** The numeric ID of the sheet to search. */
        sheetId?: number;
        /**
         * The name of the sheet to search.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The zero-based start row index for the search range.
         * @minimum 0
         */
        startRowIndex?: number;
        /**
         * The exclusive end row index for the search range.
         * @minimum 1
         */
        endRowIndex?: number;
        /**
         * The zero-based start column index for the search range.
         * @minimum 0
         */
        startColumnIndex?: number;
        /**
         * The exclusive end column index for the search range.
         * @minimum 1
         */
        endColumnIndex?: number;
        /** Whether to search within formula strings. */
        includeFormulas?: boolean;
        /** Whether the search is case-sensitive. */
        matchCase?: boolean;
        /** Whether the find value must match the entire cell value. */
        matchEntireCell?: boolean;
        /** Whether the find value is a regular expression. */
        searchByRegex?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Format cells through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.format_cell": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The A1 notation of the range to format.
         * @minLength 1
         */
        range?: string;
        /**
         * The name of the sheet containing the range to format.
         * @minLength 1
         */
        sheetName?: string;
        /** The numeric ID of the sheet containing the range to format. */
        worksheetId?: number;
        /**
         * The zero-based start row index of the range to format.
         * @minimum 0
         */
        startRowIndex?: number;
        /**
         * The exclusive end row index of the range to format.
         * @minimum 1
         */
        endRowIndex?: number;
        /**
         * The zero-based start column index of the range to format.
         * @minimum 0
         */
        startColumnIndex?: number;
        /**
         * The exclusive end column index of the range to format.
         * @minimum 1
         */
        endColumnIndex?: number;
        /**
         * The red component of the background color (0-1).
         * @minimum 0
         * @maximum 1
         */
        red?: number;
        /**
         * The green component of the background color (0-1).
         * @minimum 0
         * @maximum 1
         */
        green?: number;
        /**
         * The blue component of the background color (0-1).
         * @minimum 0
         * @maximum 1
         */
        blue?: number;
        /** Whether to apply bold formatting. */
        bold?: boolean;
        /** Whether to apply italic formatting. */
        italic?: boolean;
        /** Whether to apply underline formatting. */
        underline?: boolean;
        /** Whether to apply strikethrough formatting. */
        strikethrough?: boolean;
        /**
         * The font size in points.
         * @minimum 1
         */
        fontSize?: number;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Read spreadsheet conditional formatting rules and project them into a stable per-sheet structure. */
    "googlesheets.get_conditional_format_rules": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The numeric ID of the sheet to filter by. */
        sheetId?: number;
        /** The title of the sheet to filter by. */
        sheetTitle?: string;
        /** Whether to exclude tables in banded ranges. */
        excludeTablesInBandedRanges?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of sheets with conditional formatting rules. */
        sheets: Array<{
          /** The numeric ID of the sheet. */
          sheetId: number;
          /** The title of the sheet. */
          sheetTitle: string;
          /** The list of conditional formatting rules for the sheet. */
          rules: Array<{
            /** The zero-based index of the rule. */
            index: number;
            /** The ranges to which the rule applies. */
            ranges: Array<Record<string, unknown>>;
            /** The conditional formatting rule definition. */
            rule: Record<string, unknown>;
          }>;
        }>;
      };
    };
    /** Read spreadsheet data validation rules from the minimum necessary sheet ranges and return flattened rule entries. */
    "googlesheets.get_data_validation_rules": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The A1 notation ranges to fetch data validation rules from. */
        ranges?: Array<string>;
        /** The numeric ID of the sheet to filter by. */
        sheetId?: number;
        /** The title of the sheet to filter by. */
        sheetTitle?: string;
        /** Whether to include cells without validation rules. */
        includeEmpty?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of data validation rule entries. */
        rules: Array<{
          /** The numeric ID of the sheet containing the rule. */
          sheetId: number;
          /** The title of the sheet containing the rule. */
          sheetTitle: string;
          /** The A1 notation of the range the rule applies to. */
          rangeA1: string;
          /** The kind of validation rule. */
          ruleKind?: string;
          /** The condition type of the validation rule. */
          conditionType?: string;
          /** The condition values for the validation rule. */
          values?: Array<Record<string, unknown>>;
          /** Whether the validation rejects invalid input. */
          strict?: boolean;
          /** Whether to show a custom UI for the validation. */
          showCustomUi?: boolean;
          /** The message shown when a user selects the cell. */
          inputMessage?: string;
        }>;
      };
    };
    /** List visible or all sheet names from a spreadsheet and include a stable name-to-sheetId map. */
    "googlesheets.get_sheet_names": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** Whether to exclude hidden sheets from the results. */
        excludeHidden?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of sheet names in the spreadsheet. */
        sheetNames: Array<string>;
        /** A map from sheet name to numeric sheet ID. */
        sheetIdByName: Record<string, number>;
      };
    };
    /** Read spreadsheet metadata through spreadsheets.getByDataFilter and return the normalized spreadsheet payload. */
    "googlesheets.get_spreadsheet_by_data_filter": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The data filters to apply when fetching the spreadsheet. */
        dataFilters?: Array<Record<string, unknown>>;
        /** Whether to include grid data in the response. */
        includeGridData?: boolean;
        /** Whether to exclude tables in banded ranges. */
        excludeTablesInBandedRanges?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The URL of the spreadsheet. */
        spreadsheetUrl: string | null;
        /** The spreadsheet-level properties. */
        properties: Record<string, unknown>;
        /** The list of sheets in the spreadsheet. */
        sheets: Array<{
          /** The sheet properties. */
          properties: {
            /** The numeric sheet ID. */
            sheetId?: number;
            /** The sheet title. */
            title?: string;
            /** The zero-based sheet index. */
            index?: number;
            /** The type of the sheet. */
            sheetType?: string;
            /** Whether the sheet is hidden. */
            hidden?: boolean;
            /** The grid properties of the sheet. */
            gridProperties?: Record<string, unknown>;
          };
          /** The grid data for the sheet. */
          data?: Array<Record<string, unknown>>;
          /** The conditional formatting rules for the sheet. */
          conditionalFormats?: Array<Record<string, unknown>>;
        }>;
        /** The named ranges defined in the spreadsheet. */
        namedRanges: Array<Record<string, unknown>>;
        /** The developer metadata attached to the spreadsheet. */
        developerMetadata: Array<Record<string, unknown>>;
      };
    };
    /** Read spreadsheet metadata through spreadsheets.get with optional ranges and grid data flags. */
    "googlesheets.get_spreadsheet_info": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The A1 notation ranges to retrieve data for. */
        ranges?: Array<string>;
        /** Whether to include grid data in the response. */
        includeGridData?: boolean;
        /** Whether to exclude tables in banded ranges. */
        excludeTablesInBandedRanges?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The URL of the spreadsheet. */
        spreadsheetUrl: string | null;
        /** The spreadsheet-level properties. */
        properties: Record<string, unknown>;
        /** The list of sheets in the spreadsheet. */
        sheets: Array<{
          /** The sheet properties. */
          properties: {
            /** The numeric sheet ID. */
            sheetId?: number;
            /** The sheet title. */
            title?: string;
            /** The zero-based sheet index. */
            index?: number;
            /** The type of the sheet. */
            sheetType?: string;
            /** Whether the sheet is hidden. */
            hidden?: boolean;
            /** The grid properties of the sheet. */
            gridProperties?: Record<string, unknown>;
          };
          /** The grid data for the sheet. */
          data?: Array<Record<string, unknown>>;
          /** The conditional formatting rules for the sheet. */
          conditionalFormats?: Array<Record<string, unknown>>;
        }>;
        /** The named ranges defined in the spreadsheet. */
        namedRanges: Array<Record<string, unknown>>;
        /** The developer metadata attached to the spreadsheet. */
        developerMetadata: Array<Record<string, unknown>>;
      };
    };
    /** Insert rows or columns through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.insert_dimension": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The insert-dimension request payload. */
        insertDimension?: {
          /** The range of dimensions to insert. */
          range: {
            /** The numeric ID of the sheet. */
            sheetId?: number;
            /** The dimension (rows or columns) this range spans. */
            dimension: "ROWS" | "COLUMNS";
            /**
             * The zero-based start index of the range.
             * @minimum 0
             */
            startIndex?: number;
            /**
             * The exclusive end index of the range.
             * @minimum 1
             */
            endIndex?: number;
          };
          /** Whether new dimensions should inherit properties from the preceding dimension. */
          inheritFromBefore?: boolean;
        };
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Find the first row where a cell exactly matches the query and return a stable found/rowData payload. */
    "googlesheets.lookup_spreadsheet_row": {
      input: {
        /**
         * The ID of the spreadsheet to search.
         * @minLength 1
         */
        spreadsheetId: string;
        /**
         * The value to search for in the spreadsheet.
         * @minLength 1
         */
        query: string;
        /**
         * The A1 notation of the range to search within.
         * @minLength 1
         */
        range?: string;
        /** Whether the search should be case-sensitive. */
        caseSensitive?: boolean;
        /** Whether to normalize whitespace before comparing values. */
        normalizeWhitespace?: boolean;
      };
      output: {
        /** Whether a matching row was found. */
        found: boolean;
        /** The cell values of the first matching row. */
        rowData: Array<string>;
      };
    };
    /** Mutate conditional format rules through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.mutate_conditional_format_rules": {
      input: {
        /**
         * The ID of the spreadsheet to mutate.
         * @minLength 1
         */
        spreadsheetId: string;
        /** The operation to perform on the conditional format rules. */
        operation: "ADD" | "UPDATE" | "DELETE" | "MOVE";
        /** The numeric ID of the sheet to mutate rules on. */
        sheetId: number;
        /**
         * The zero-based index of the rule to update, delete, or move.
         * @minimum 0
         */
        index?: number;
        /**
         * The target zero-based index when moving a rule.
         * @minimum 0
         */
        newIndex?: number;
        /** The conditional format rule definition for ADD or UPDATE operations. */
        rule?: {
          /**
           * The ranges to which this conditional format rule applies.
           * @minItems 1
           */
          ranges: Array<Record<string, unknown>>;
          /** The rule applied when a condition is met. */
          booleanRule?: Record<string, unknown>;
          /** The rule applied using a gradient color scale. */
          gradientRule?: Record<string, unknown>;
        };
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Search spreadsheet developer metadata via developerMetadata:search and return matched entries only. */
    "googlesheets.search_developer_metadata": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The data filters used to match developer metadata entries. */
        dataFilters: Array<Record<string, unknown>>;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of matched developer metadata entries. */
        matchedDeveloperMetadata: Array<Record<string, unknown>>;
      };
    };
    /** Search Google Sheets files in Drive with spreadsheet-only filters and normalized summary output. */
    "googlesheets.search_spreadsheets": {
      input: {
        /** The search query string. */
        query?: string;
        /** The field to sort results by. */
        orderBy?: string;
        /**
         * The pagination token for the next page of results.
         * @minLength 1
         */
        pageToken?: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 1000
         */
        maxResults?: number;
        /** Whether to search by file name, content, or both. */
        searchType?: "name" | "content" | "both";
        /** Whether to return only starred spreadsheets. */
        starredOnly?: boolean;
        /** Filter files created after this date/time. */
        createdAfter?: string;
        /** Filter files modified after this date/time. */
        modifiedAfter?: string;
        /** Whether to include only files shared with the user. */
        sharedWithMe?: boolean;
        /** Whether to include trashed files in the results. */
        includeTrashed?: boolean;
        /** Whether to include files from shared drives. */
        includeSharedDrives?: boolean;
      };
      output: {
        /** The list of matching spreadsheet files. */
        spreadsheets: Array<{
          /** The unique ID of the spreadsheet file. */
          id: string;
          /** The name of the spreadsheet file. */
          name: string;
          /** The MIME type of the file. */
          mimeType: string;
          /** The URL to open the file in a browser. */
          webViewLink: string | null;
          /** The time the file was created. */
          createdTime: string | null;
          /** The time the file was last modified. */
          modifiedTime: string | null;
          /** The list of owners of the file. */
          owners: Array<Record<string, unknown>>;
          /** Whether the file is shared. */
          shared: boolean;
          /** Whether the file is starred. */
          starred: boolean;
          /** Whether the file is in the trash. */
          trashed: boolean;
        }>;
        /** The total number of matching files found. */
        totalFound: number;
        /** The token to retrieve the next page of results. */
        nextPageToken: string | null;
      };
    };
    /** Set a basic filter through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.set_basic_filter": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The basic filter definition to apply. */
        filter: {
          /** The range the filter applies to. */
          range?: {
            /** The numeric ID of the sheet. */
            sheetId?: number;
            /**
             * The zero-based start row index.
             * @minimum 0
             */
            startRowIndex?: number;
            /**
             * The exclusive end row index.
             * @minimum 1
             */
            endRowIndex?: number;
            /**
             * The zero-based start column index.
             * @minimum 0
             */
            startColumnIndex?: number;
            /**
             * The exclusive end column index.
             * @minimum 1
             */
            endColumnIndex?: number;
          };
          /**
           * The ID of the table the filter applies to.
           * @minLength 1
           */
          tableId?: string;
          /** The criteria for the filter. */
          criteria?: Record<string, unknown>;
          /** The list of filter spec objects. */
          filterSpecs?: Array<Record<string, unknown>>;
          /** The list of sort spec objects. */
          sortSpecs?: Array<Record<string, unknown>>;
        };
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Set or clear data validation through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.set_data_validation_rule": {
      input: {
        /**
         * The ID of the spreadsheet to update.
         * @minLength 1
         */
        spreadsheetId: string;
        /** The numeric ID of the sheet to apply the validation rule to. */
        sheetId: number;
        /** Whether to set or clear the data validation rule. */
        mode: "SET" | "CLEAR";
        /**
         * The zero-based start row index of the range.
         * @minimum 0
         */
        startRowIndex: number;
        /**
         * The exclusive end row index of the range.
         * @minimum 1
         */
        endRowIndex: number;
        /**
         * The zero-based start column index of the range.
         * @minimum 0
         */
        startColumnIndex: number;
        /**
         * The exclusive end column index of the range.
         * @minimum 1
         */
        endColumnIndex: number;
        /**
         * The type of data validation condition.
         * @minLength 1
         */
        validationType?: string;
        /** The allowed values for the validation rule. */
        values?: Array<string>;
        /**
         * The A1 notation of the source range for list validation.
         * @minLength 1
         */
        sourceRangeA1?: string;
        /**
         * The formula used for custom validation.
         * @minLength 1
         */
        formula?: string;
        /** Whether the validation should reject invalid input. */
        strict?: boolean;
        /** Whether to show a dropdown or other custom UI. */
        showCustomUi?: boolean;
        /** The message to display when the user selects the cell. */
        inputMessage?: string;
        /** Whether to include filtered rows in the validation. */
        filteredRowsIncluded?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Copy a sheet to another spreadsheet through sheets.copyTo and return a stable copiedSheet payload. */
    "googlesheets.spreadsheets_sheets_copy_to": {
      input: {
        /**
         * The ID of the source spreadsheet.
         * @minLength 1
         */
        spreadsheetId: string;
        /** The numeric ID of the sheet to copy. */
        sheetId: number;
        /**
         * The ID of the destination spreadsheet.
         * @minLength 1
         */
        destinationSpreadsheetId: string;
      };
      output: {
        /** The unique ID of the destination spreadsheet. */
        spreadsheetId: string;
        /** The properties of the newly copied sheet. */
        copiedSheet: {
          /** The numeric sheet ID. */
          sheetId?: number;
          /** The sheet title. */
          title?: string;
          /** The zero-based sheet index. */
          index?: number;
          /** The type of the sheet. */
          sheetType?: string;
          /** Whether the sheet is hidden. */
          hidden?: boolean;
          /** The grid properties of the sheet. */
          gridProperties?: Record<string, unknown>;
          /** Whether the sheet is right-to-left. */
          rightToLeft?: boolean;
          /** The tab color of the sheet. */
          tabColor?: Record<string, unknown>;
          /** The tab color style of the sheet. */
          tabColorStyle?: Record<string, unknown>;
        };
      };
    };
    /** Append values through values.append and flatten the nested updates payload into stable top-level fields. */
    "googlesheets.spreadsheets_values_append": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The A1 notation of the range to append values after.
         * @minLength 1
         */
        range: string;
        /** The data to append. */
        values: Array<Array<string | number | boolean | null>>;
        /** The major dimension of the values array. */
        majorDimension?: "ROWS" | "COLUMNS";
        /** How the data should be inserted. */
        insertDataOption?: "OVERWRITE" | "INSERT_ROWS";
        /** How the input data should be interpreted. */
        valueInputOption?: "RAW" | "USER_ENTERED";
        /** Whether to include the appended values in the response. */
        includeValuesInResponse?: boolean;
        /** How values in the response should be rendered. */
        responseValueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
        /** How dates in the response should be rendered. */
        responseDateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING";
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The A1 notation of the range that was updated. */
        updatedRange: string;
        /** The number of rows that were updated. */
        updatedRows: number;
        /** The number of columns that were updated. */
        updatedColumns: number;
        /** The number of cells that were updated. */
        updatedCells: number;
        /** The values of the cells after the update. */
        updatedData?: {
          /** The A1 notation of the range. */
          range: string;
          /** The major dimension of the values (ROWS or COLUMNS). */
          majorDimension: string;
          /** The data values in the range. */
          values: Array<Array<string | number | boolean | null>>;
        };
        /** The A1 notation of the table range that data was appended to. */
        tableRange: string;
      };
    };
    /** Clear multiple spreadsheet value ranges through values.batchClear and return cleared ranges only. */
    "googlesheets.spreadsheets_values_batch_clear": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The A1 notation ranges to clear.
         * @minItems 1
         */
        ranges: Array<string>;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The A1 notation of the ranges that were cleared. */
        clearedRanges: Array<string>;
      };
    };
    /** Read spreadsheet values through values:batchGetByDataFilter and return matched value ranges with their filters. */
    "googlesheets.spreadsheets_values_batch_get_by_data_filter": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The data filters used to match value ranges. */
        dataFilters: Array<Record<string, unknown>>;
        /** The major dimension for the returned values. */
        majorDimension?: "ROWS" | "COLUMNS";
        /** How values should be rendered in the output. */
        valueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
        /** How dates and times should be rendered in the output. */
        dateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING";
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of value ranges matched by data filters. */
        valueRanges: Array<{
          /** The value range data. */
          valueRange: {
            /** The A1 notation of the range. */
            range: string;
            /** The major dimension of the values (ROWS or COLUMNS). */
            majorDimension: string;
            /** The data values in the range. */
            values: Array<Array<string | number | boolean | null>>;
          };
          /** The data filters that matched this value range. */
          dataFilters: Array<Record<string, unknown>>;
        }>;
      };
    };
    /** Update row or column properties through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.update_dimension_properties": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The numeric ID of the sheet. */
        sheetId?: number;
        /**
         * The name of the sheet.
         * @minLength 1
         */
        sheetName?: string;
        /** The dimension whose properties to update. */
        dimension: "ROWS" | "COLUMNS";
        /**
         * The zero-based start index of the range.
         * @minimum 0
         */
        startIndex: number;
        /**
         * The exclusive end index of the range.
         * @minimum 1
         */
        endIndex: number;
        /**
         * The height (for rows) or width (for columns) in pixels.
         * @minimum 0
         */
        pixelSize?: number;
        /** Whether the dimension is hidden by the user. */
        hiddenByUser?: boolean;
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Update a sheet's properties through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.update_sheet_properties": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The sheet properties update payload. */
        updateSheetProperties?: {
          /** The sheet properties to update. */
          properties: Record<string, unknown>;
          /**
           * A field mask specifying which properties to update.
           * @minLength 1
           */
          fields?: string;
        };
        /** The sheet properties to update (shorthand form). */
        properties?: Record<string, unknown>;
        /**
         * A field mask specifying which properties to update (shorthand form).
         * @minLength 1
         */
        fields?: string;
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Update spreadsheet-level properties through spreadsheets.batchUpdate and return stable batch replies. */
    "googlesheets.update_spreadsheet_properties": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /** The spreadsheet-level properties to update. */
        properties: Record<string, unknown>;
        /**
         * A field mask specifying which properties to update.
         * @minLength 1
         */
        fields: string;
        /** Whether to include the updated spreadsheet in the response. */
        includeSpreadsheetInResponse?: boolean;
        /** The ranges to include in the response spreadsheet. */
        responseRanges?: Array<string>;
        /** Whether to include grid data in the response spreadsheet. */
        responseIncludeGridData?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The list of replies for each request in the batch update. */
        replies?: Array<Record<string, unknown>>;
        /** The updated spreadsheet after the batch mutation. */
        updatedSpreadsheet?: {
          /** The unique ID of the spreadsheet. */
          spreadsheetId: string;
          /** The URL of the spreadsheet. */
          spreadsheetUrl: string | null;
          /** The spreadsheet-level properties. */
          properties: Record<string, unknown>;
          /** The list of sheets in the spreadsheet. */
          sheets: Array<{
            /** The sheet properties. */
            properties: {
              /** The numeric sheet ID. */
              sheetId?: number;
              /** The sheet title. */
              title?: string;
              /** The zero-based sheet index. */
              index?: number;
              /** The type of the sheet. */
              sheetType?: string;
              /** Whether the sheet is hidden. */
              hidden?: boolean;
              /** The grid properties of the sheet. */
              gridProperties?: Record<string, unknown>;
            };
            /** The grid data for the sheet. */
            data?: Array<Record<string, unknown>>;
            /** The conditional formatting rules for the sheet. */
            conditionalFormats?: Array<Record<string, unknown>>;
          }>;
          /** The named ranges defined in the spreadsheet. */
          namedRanges: Array<Record<string, unknown>>;
          /** The developer metadata attached to the spreadsheet. */
          developerMetadata: Array<Record<string, unknown>>;
        };
        /** The ID of a sheet affected by the mutation. */
        sheetId?: number;
        /** The ID of a chart affected by the mutation. */
        chartId?: number;
        /** The A1 notation of the range affected by the mutation. */
        updatedRange?: string;
      };
    };
    /** Write multiple spreadsheet value ranges through values.batchUpdate and return stable aggregate counters. */
    "googlesheets.update_values_batch": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The list of value ranges to update.
         * @minItems 1
         */
        data: Array<{
          /**
           * The A1 notation of the range to write to.
           * @minLength 1
           */
          range: string;
          /** The data to write into the range. */
          values: Array<Array<string | number | boolean | null>>;
          /** The major dimension of the values array. */
          majorDimension?: "ROWS" | "COLUMNS";
        }>;
        /** How the input data should be interpreted. */
        valueInputOption?: "INPUT_VALUE_OPTION_UNSPECIFIED" | "RAW" | "USER_ENTERED";
        /** Whether to include the written values in the response. */
        includeValuesInResponse?: boolean;
        /** How values in the response should be rendered. */
        responseValueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
        /** How dates in the response should be rendered. */
        responseDateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING";
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The total number of rows updated across all ranges. */
        totalUpdatedRows: number;
        /** The total number of columns updated across all ranges. */
        totalUpdatedColumns: number;
        /** The total number of cells updated across all ranges. */
        totalUpdatedCells: number;
        /** The per-range update responses. */
        responses: Array<{
          /** The A1 notation of the range that was updated. */
          updatedRange: string;
          /** The number of rows that were updated. */
          updatedRows: number;
          /** The number of columns that were updated. */
          updatedColumns: number;
          /** The number of cells that were updated. */
          updatedCells: number;
          /** The values of the cells after the update. */
          updatedData?: {
            /** The A1 notation of the range. */
            range: string;
            /** The major dimension of the values (ROWS or COLUMNS). */
            majorDimension: string;
            /** The data values in the range. */
            values: Array<Array<string | number | boolean | null>>;
          };
        }>;
      };
    };
    /** Upsert rows by key while preserving uncovered columns, adding missing headers when needed, and returning stable counters. */
    "googlesheets.upsert_rows": {
      input: {
        /**
         * The ID of the spreadsheet.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The name of the sheet to upsert rows into.
         * @minLength 1
         */
        sheetName?: string;
        /**
         * The rows of data to upsert.
         * @minItems 1
         */
        rows: Array<Array<string | number | boolean | null>>;
        /** The header row values used to map row data to columns. */
        headers?: Array<string>;
        /**
         * The column name used as the unique key for upsert matching.
         * @minLength 1
         */
        keyColumn?: string;
        /**
         * The zero-based index of the key column.
         * @minimum 0
         */
        keyColumnIndex?: number;
        /**
         * The A1 notation of the top-left cell of the table.
         * @minLength 1
         */
        tableStart?: string;
        /** Whether to reject rows that do not match existing headers. */
        strictMode?: boolean;
        /** A message describing any normalization applied to the data. */
        normalizationMessage?: string;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The name of the sheet that was upserted into. */
        sheetName: string;
        /** The number of existing rows that were updated. */
        rowsUpdated: number;
        /** The number of new rows that were inserted. */
        rowsInserted: number;
        /** The number of new columns that were added. */
        columnsAdded: number;
        /** The total number of rows processed in the upsert. */
        totalRowsProcessed: number;
      };
    };
    /** Read a single spreadsheet value range and return a stable ValueRange without a wrapper envelope. */
    "googlesheets.values_get": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The A1 notation of the range to retrieve.
         * @minLength 1
         */
        range: string;
        /** The major dimension for the returned values. */
        majorDimension?: "DIMENSION_UNSPECIFIED" | "ROWS" | "COLUMNS";
        /** How values should be rendered in the output. */
        valueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
        /** How dates and times should be rendered in the output. */
        dateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING";
      };
      output: {
        /** The A1 notation of the range. */
        range: string;
        /** The major dimension of the values (ROWS or COLUMNS). */
        majorDimension: string;
        /** The data values in the range. */
        values: Array<Array<string | number | boolean | null>>;
      };
    };
    /** Write a single spreadsheet value range through values.update and return stable update counters. */
    "googlesheets.values_update": {
      input: {
        /**
         * The spreadsheet ID.
         * @minLength 1
         */
        spreadsheetId?: string;
        /**
         * The A1 notation of the range to write to.
         * @minLength 1
         */
        range: string;
        /** The data to write into the range. */
        values: Array<Array<string | number | boolean | null>>;
        /** The major dimension of the values array. */
        majorDimension?: "ROWS" | "COLUMNS";
        /** How the input data should be interpreted. */
        valueInputOption?: "RAW" | "USER_ENTERED";
        /** Whether to include the written values in the response. */
        includeValuesInResponse?: boolean;
        /** How values in the response should be rendered. */
        responseValueRenderOption?: "FORMATTED_VALUE" | "UNFORMATTED_VALUE" | "FORMULA";
        /** How dates in the response should be rendered. */
        responseDateTimeRenderOption?: "SERIAL_NUMBER" | "FORMATTED_STRING";
        /** Whether to auto-expand the sheet to fit the written data. */
        autoExpandSheet?: boolean;
      };
      output: {
        /** The unique ID of the spreadsheet. */
        spreadsheetId: string;
        /** The A1 notation of the range that was updated. */
        updatedRange: string;
        /** The number of rows that were updated. */
        updatedRows: number;
        /** The number of columns that were updated. */
        updatedColumns: number;
        /** The number of cells that were updated. */
        updatedCells: number;
        /** The values of the cells after the update. */
        updatedData?: {
          /** The A1 notation of the range. */
          range: string;
          /** The major dimension of the values (ROWS or COLUMNS). */
          majorDimension: string;
          /** The data values in the range. */
          values: Array<Array<string | number | boolean | null>>;
        };
      };
    };
  }
}
