import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Call a current WPS MCP tool with JSON arguments after checking its live schema and behavior annotations. */
    "wps_mcp.call_tool": {
      input: {
        /**
         * The exact tool name returned by list_tools.
         * @minLength 1
         */
        toolName: string;
        /** JSON arguments matching the inputSchema returned for the selected tool. */
        arguments?: Record<string, unknown>;
      };
      output: {
        /** The tool result. Structured MCP content is returned directly; otherwise the MCP content envelope is preserved. */
        result: unknown;
      };
    };
    /** Create a WPS document, PDF, spreadsheet, or smart sheet and populate it with JSON-friendly content. */
    "wps_mcp.create_file_with_content": {
      input: {
        /**
         * The complete file name, such as Weekly Report.docx.
         * @minLength 1
         */
        name: string;
        /** The file extension without a leading dot. */
        file_extension: "otl" | "docx" | "pdf" | "xls" | "xlsx" | "ksheet" | "dbt";
        /** UTF-8 Markdown content for OTL, DOCX, or PDF files. */
        content?: string;
        /**
         * The destination WPS drive ID. Defaults to the personal drive.
         * @minLength 1
         */
        drive_id?: string;
        /**
         * The destination folder ID. Defaults to the root folder 0.
         * @minLength 1
         */
        parent_id?: string;
        /** Spreadsheet cell ranges to populate. */
        rangeData?: Array<Record<string, unknown>>;
        /** Smart sheet field definitions. */
        fields?: Array<Record<string, unknown>>;
        /** Smart sheet records. */
        records?: Array<Record<string, unknown>>;
        /** The destination spreadsheet or smart sheet name. */
        sheet_name?: string;
      };
      output: unknown;
    };
    /** Create a folder in a known WPS drive and parent folder. */
    "wps_mcp.create_folder": {
      input: {
        /**
         * The destination WPS drive ID.
         * @minLength 1
         */
        drive_id: string;
        /**
         * The parent folder ID. Use 0 for the drive root.
         * @minLength 1
         */
        parent_id: string;
        /**
         * The folder name without a file extension.
         * @minLength 1
         */
        name: string;
        /** How WPS should handle an existing name. */
        on_name_conflict?: "fail" | "rename";
        /** Relative folder path segments that WPS should create when missing. */
        parent_path?: Array<string>;
      };
      output: unknown;
    };
    /** Get metadata, drive details, extended attributes, or permissions for a WPS file. */
    "wps_mcp.get_file_info": {
      input: {
        /**
         * A WPS file ID used to select the document.
         * @minLength 1
         */
        file_id?: string;
        /**
         * A WPS share link ID used to select the document.
         * @minLength 1
         */
        link_id?: string;
        /**
         * A WPS document URL used to select the document.
         * @format uri
         */
        url?: string;
        /** Whether the response should include the containing drive. */
        with_drive?: boolean;
        /** Whether the response should include extended attributes. */
        with_ext_attrs?: boolean;
        /** Whether the response should include operation permissions. */
        with_permission?: boolean;
      };
      output: unknown;
    };
    /** List entries in a known WPS drive folder with filtering, sorting, and pagination. */
    "wps_mcp.list_files": {
      input: {
        /**
         * The WPS drive ID.
         * @minLength 1
         */
        drive_id: string;
        /**
         * The folder ID. Use 0 for the drive root.
         * @minLength 1
         */
        parent_id: string;
        /** Comma-separated lowercase file extensions to include. */
        filter_exts?: string;
        /** An optional file system entry type filter. */
        filter_type?: {
          /** The kind of file system entry to include. */
          type?: "file" | "folder" | "shortcut";
        };
        /** The result sort direction. */
        order?: "asc" | "desc";
        /** The field used to sort entries. */
        order_by?: "ctime" | "mtime" | "dtime" | "fname" | "fsize";
        /**
         * The page size from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        page_size?: number;
        /** The pagination token returned by the previous request. */
        page_token?: string;
        /** Whether each entry should include extended attributes. */
        with_ext_attrs?: boolean;
        /** Whether each entry should include operation permissions. */
        with_permission?: boolean;
      };
      output: unknown;
    };
    /** List entries in the root of the connected user's WPS cloud documents with filtering, sorting, and pagination. */
    "wps_mcp.list_my_files": {
      input: {
        /** Comma-separated lowercase file extensions to include. */
        filter_exts?: string;
        /** An optional file system entry type filter. */
        filter_type?: {
          /** The kind of file system entry to include. */
          type?: "file" | "folder" | "shortcut";
        };
        /** The result sort direction. */
        order?: "asc" | "desc";
        /** The field used to sort entries. */
        order_by?: "ctime" | "mtime" | "dtime" | "fname" | "fsize";
        /**
         * The page size from 1 to 500.
         * @minimum 1
         * @maximum 500
         */
        page_size?: number;
        /** The pagination token returned by the previous request. */
        page_token?: string;
        /** Whether each entry should include extended attributes. */
        with_ext_attrs?: boolean;
        /** Whether each entry should include operation permissions. */
        with_permission?: boolean;
      };
      output: unknown;
    };
    /** Discover the current WPS document, spreadsheet, presentation, PDF, and workspace MCP tools with their live input schemas. */
    "wps_mcp.list_tools": {
      input: Record<string, never>;
      output: {
        /** Tools currently exposed to the connected WPS MCP account. */
        tools: Array<{
          /**
           * The exact WPS MCP tool name to pass to call_tool.
           * @minLength 1
           */
          name: string;
          /** The current tool description supplied by WPS MCP. */
          description?: string;
          /** MCP hints supplied by WPS about a tool's behavior. */
          annotations?: {
            /** A human-readable title for the tool. */
            title?: string;
            /** Whether the tool is expected not to modify data. */
            readOnlyHint?: boolean;
            /** Whether the tool may perform destructive operations. */
            destructiveHint?: boolean;
            /** Whether repeated calls with the same arguments are expected to be idempotent. */
            idempotentHint?: boolean;
            /** Whether the tool may interact with entities outside WPS. */
            openWorldHint?: boolean;
            [key: string]: unknown;
          };
          /** The current JSON Schema for the tool arguments, supplied by WPS MCP. */
          inputSchema: Record<string, unknown>;
        }>;
      };
    };
    /** Read a WPS cloud document as Markdown, plain text, structured KDC data, or spreadsheet cells according to its format. */
    "wps_mcp.read_file": {
      input: {
        /**
         * A WPS file ID used to select the document.
         * @minLength 1
         */
        file_id?: string;
        /**
         * A WPS share link ID used to select the document.
         * @minLength 1
         */
        link_id?: string;
        /**
         * A WPS document URL used to select the document.
         * @format uri
         */
        url?: string;
        /** The output format for supported text documents. */
        format?: "markdown" | "plain" | "kdc";
        /** Whether extracted media should be uploaded and returned as temporary download URLs. */
        enable_upload_medias?: boolean;
        /** The numeric spreadsheet sheet ID. It takes priority over sheet_name. */
        sheet_id?: number;
        /** The spreadsheet sheet name. */
        sheet_name?: string;
        /** A zero-based inclusive spreadsheet cell range. */
        sheet_range?: {
          /** The zero-based first row. */
          row_from?: number;
          /** The zero-based last row, inclusive. */
          row_to?: number;
          /** The zero-based first column. */
          col_from?: number;
          /** The zero-based last column, inclusive. */
          col_to?: number;
        };
        /** The task ID returned by a previous incomplete read request. */
        task_id?: string;
      };
      output: unknown;
    };
    /** Search WPS cloud documents and folders across drives by file name, content, creator, location, type, or time. */
    "wps_mcp.search_files": {
      input: {
        /** The search keyword. */
        keyword?: string;
        /** The search dimension. */
        type?: "file_name" | "content" | "all";
        /** The kind of file system entry to include. */
        file_type?: "file" | "folder" | "shortcut";
        /** Drive IDs to search. */
        drive_ids?: Array<string>;
        /** Folder IDs that constrain the search. */
        parent_ids?: Array<string>;
        /** File extensions to include without leading dots. */
        file_exts?: Array<string>;
        /** File extensions to exclude without leading dots. */
        exclude_file_exts?: Array<string>;
        /** WPS file extension groups to include. */
        file_ext_groups?: Array<string>;
        /** WPS content channels to include. */
        channels?: Array<string>;
        /** WPS content channels to exclude. */
        exclude_channels?: Array<string>;
        /** Device IDs associated with included files. */
        device_ids?: Array<string>;
        /** WPS user IDs whose files should be included. */
        creator_ids?: Array<string>;
        /** WPS user IDs that last modified included files. */
        modifier_ids?: Array<string>;
        /** WPS user IDs that received included files. */
        receiver_ids?: Array<string>;
        /** WPS user IDs that shared included files. */
        sharer_ids?: Array<string>;
        /** WPS search scopes such as all or share_by_me. */
        scope?: Array<string>;
        /** The WPS creator or sharer filter expected by the MCP tool. */
        filter_user_id?: number;
        /** Whether creator and sharer names should participate in the search. */
        search_operator_name?: boolean;
        /** The minimum creation or modification time expected by WPS. */
        start_time?: number;
        /** The maximum creation or modification time expected by WPS. */
        end_time?: number;
        /** The timestamp field used by the time range. */
        time_type?: "ctime" | "mtime" | "otime" | "stime";
        /** The field used to sort search results. */
        order_by?: "ctime" | "mtime";
        /** The result sort direction. */
        order?: "asc" | "desc";
        /**
         * The page size from 0 to 500. WPS treats zero as 50.
         * @minimum 0
         * @maximum 500
         */
        page_size?: number;
        /** The pagination token returned by the previous search. */
        page_token?: string;
        /** Whether each result should include drive details. */
        with_drive?: boolean;
        /** Whether each result should include share link details. */
        with_link?: boolean;
        /** Whether each result should include operation permissions. */
        with_permission?: boolean;
        /** Whether the response should include the total result count. */
        with_total?: boolean;
      };
      output: unknown;
    };
  }
}
