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
        /** The tool result. Structured content or a single JSON object text is returned as an object; other content envelopes remain intact. */
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
        file_extension: "otl" | "docx" | "md" | "pdf" | "xls" | "xlsx" | "ksheet" | "dbt";
        /** UTF-8 Markdown content for OTL, DOCX, MD, or PDF files. */
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
    /** Create a folder in WPS, defaulting to the personal cloud document root. */
    "wps_mcp.create_folder": {
      input: {
        /**
         * The destination WPS drive ID. Defaults to the personal drive.
         * @minLength 1
         */
        drive_id?: string;
        /**
         * The parent folder ID. Omit for the personal cloud root; 0 refers to the root of the specified drive.
         * @minLength 1
         */
        parent_id?: string;
        /**
         * The folder name without a file extension.
         * @minLength 1
         */
        name: string;
        /** How WPS should handle an existing name. Defaults to rename; reuse returns the existing folder. */
        on_name_conflict?: "fail" | "rename" | "reuse";
        /** Relative folder path segments that WPS should create when missing. */
        parent_path?: Array<string>;
      };
      output: unknown;
    };
    /** Get download information for a binary WPS file such as DOCX, XLSX, PDF, PPTX, or an image. Online OTL, DBT, and KSHEET documents are unsupported; use read_file for their content. */
    "wps_mcp.download_file": {
      input: Record<string, unknown>;
      output: unknown;
    };
    /** Get metadata, drive details, extended attributes, or permissions for a WPS file. */
    "wps_mcp.get_file_info": {
      input: Record<string, unknown>;
      output: unknown;
    };
    /** Get the online access link for a WPS cloud document. */
    "wps_mcp.get_file_link": {
      input: Record<string, unknown>;
      output: unknown;
    };
    /** List entries in a known WPS drive folder with filtering, sorting, and pagination. */
    "wps_mcp.list_files": {
      input: {
        /**
         * The WPS drive ID. Required for parent_id 0; optional for a specific folder ID.
         * @minLength 1
         */
        drive_id?: string;
        /**
         * The folder ID. Use 0 only with an explicit drive_id; use list_my_files for the personal cloud root.
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
    /** List recently accessed WPS documents with creator and file extension filters. */
    "wps_mcp.list_latest_items": {
      input: {
        /** Comma-separated creator IDs to include. */
        include_creators?: string;
        /** Comma-separated creator IDs to exclude. */
        exclude_creators?: string;
        /** Comma-separated file extensions to include. */
        include_exts?: string;
        /** Comma-separated file extensions to exclude. */
        exclude_exts?: string;
        /**
         * The page size from 1 to 500. Defaults to 20.
         * @minimum 1
         * @maximum 500
         */
        page_size?: number;
        /** The pagination token returned by the previous request. */
        page_token?: string;
        /** Whether to include share link information. */
        with_link?: boolean;
        /** Whether to include file operation permissions. */
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
      input: Record<string, unknown>;
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
