import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Apply up to thirty Tencent Docs document V3 batch update operations. */
    "tencent_docs.batch_update_doc": {
      input: {
        /**
         * The Tencent Docs document file ID.
         * @minLength 1
         */
        fileID: string;
        /**
         * The Tencent Docs document batch update requests.
         * @minItems 1
         * @maxItems 30
         */
        requests: Array<Record<string, unknown>>;
        /** The document version used for optimistic concurrency. */
        version?: number;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The raw object returned by Tencent Docs. */
        raw: Record<string, unknown>;
      };
    };
    /** Apply up to five Tencent Docs spreadsheet V3 batch update operations. */
    "tencent_docs.batch_update_sheet": {
      input: {
        /**
         * The Tencent Docs spreadsheet file ID.
         * @minLength 1
         */
        fileID: string;
        /**
         * The Tencent Docs spreadsheet batch update requests.
         * @minItems 1
         * @maxItems 5
         */
        requests: Array<Record<string, unknown>>;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The per-operation responses returned by Tencent Docs. */
        responses: Array<Record<string, unknown>>;
        /** The raw object returned by Tencent Docs. */
        raw: Record<string, unknown>;
      };
    };
    /** Convert between Tencent Docs fileID and encodedID values. */
    "tencent_docs.convert_file_id": {
      input: {
        /**
         * The conversion type. Use 1 for fileID to encodedID or 2 for encodedID to fileID.
         * @minimum 1
         * @maximum 2
         */
        type: number;
        /**
         * The ID value to convert.
         * @minLength 1
         */
        value: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The Tencent Docs file ID when converting from encodedID. */
        fileID: string | null;
        /** The Tencent Docs encoded ID when converting from fileID. */
        encodedID: string | null;
        /** The raw object returned by Tencent Docs. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Tencent Docs online document, sheet, form, slide, or smart sheet. */
    "tencent_docs.create_file": {
      input: {
        /**
         * The document title. Tencent Docs limits it to 36 characters.
         * @minLength 1
         */
        title: string;
        /** The Tencent Docs file type to create. */
        type: "doc" | "sheet" | "form" | "slide" | "mind" | "flowchart" | "addon" | "smartsheet";
        /**
         * The Tencent Docs official template ID to use.
         * @minLength 1
         */
        templateID?: string;
        /**
         * The template version to use. Defaults to 0.
         * @minLength 1
         */
        templateVersion?: string;
        /**
         * The parent folder ID. Defaults to the root folder.
         * @minLength 1
         */
        folderID?: string;
        /**
         * The Drive plugin thumbnail type. Required only for addon documents.
         * @minLength 1
         */
        ext?: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** A Tencent Docs file or folder item. */
        file: {
          /** The Tencent Docs file or folder ID. */
          ID: string;
          /** The file or folder title. */
          title: string | null;
          /** The Tencent Docs file type, such as doc, sheet, form, or folder. */
          type: string | null;
          /** The browser URL for opening the file or folder. */
          url: string | null;
          /** The file or folder status returned by Tencent Docs. */
          status: string | null;
          /** Whether the authorized user created the file or folder. */
          isCreator: boolean | null;
          /** Whether the authorized user owns the file or folder. */
          isOwner: boolean | null;
          /** The creation time returned by Tencent Docs. */
          createTime: number | null;
          /** The creator display name returned by Tencent Docs. */
          creatorName: string | null;
          /** The owner display name returned by Tencent Docs. */
          ownerName: string | null;
          /** The owner Open ID returned by Tencent Docs. */
          ownerID: string | null;
          /** The last modification time returned by Tencent Docs. */
          lastModifyTime: number | null;
          /** The last modifier display name returned by Tencent Docs. */
          lastModifyName: string | null;
          /** The last browse time returned by Tencent Docs. */
          lastBrowseTime: number | null;
          /** Whether the file is starred. */
          starred: boolean | null;
          /** Whether the file is pinned. */
          pinned: boolean | null;
          /** The source classification for the file when returned by search. */
          fileSource: string | null;
          /** The highlighted search snippet when returned by search. */
          highlight: string | null;
          /** The raw object returned by Tencent Docs. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Generate the result spreadsheet for a Tencent Docs form. */
    "tencent_docs.generate_form_result": {
      input: {
        /**
         * The Tencent Docs form ID.
         * @minLength 1
         */
        formID: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** A Tencent Docs file or folder item. */
        file: {
          /** The Tencent Docs file or folder ID. */
          ID: string;
          /** The file or folder title. */
          title: string | null;
          /** The Tencent Docs file type, such as doc, sheet, form, or folder. */
          type: string | null;
          /** The browser URL for opening the file or folder. */
          url: string | null;
          /** The file or folder status returned by Tencent Docs. */
          status: string | null;
          /** Whether the authorized user created the file or folder. */
          isCreator: boolean | null;
          /** Whether the authorized user owns the file or folder. */
          isOwner: boolean | null;
          /** The creation time returned by Tencent Docs. */
          createTime: number | null;
          /** The creator display name returned by Tencent Docs. */
          creatorName: string | null;
          /** The owner display name returned by Tencent Docs. */
          ownerName: string | null;
          /** The owner Open ID returned by Tencent Docs. */
          ownerID: string | null;
          /** The last modification time returned by Tencent Docs. */
          lastModifyTime: number | null;
          /** The last modifier display name returned by Tencent Docs. */
          lastModifyName: string | null;
          /** The last browse time returned by Tencent Docs. */
          lastBrowseTime: number | null;
          /** Whether the file is starred. */
          starred: boolean | null;
          /** Whether the file is pinned. */
          pinned: boolean | null;
          /** The source classification for the file when returned by search. */
          fileSource: string | null;
          /** The highlighted search snippet when returned by search. */
          highlight: string | null;
          /** The raw object returned by Tencent Docs. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the current Tencent Docs user profile for the OAuth access token. */
    "tencent_docs.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** A Tencent Docs user profile. */
        user: {
          /** The Tencent Docs Open ID for the authorized user. */
          openID: string;
          /** The display nickname returned by Tencent Docs. */
          nick: string | null;
          /** The user avatar URL returned by Tencent Docs. */
          avatar: string | null;
          /** The user authorization source, such as wx or qq. */
          source: string | null;
          /** The account binding source, such as wx or qq. */
          bindSource: string | null;
          /** The developer-account scoped Tencent Docs union ID. */
          unionID: string | null;
          /** The raw object returned by Tencent Docs. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the structured content and version of a Tencent Docs document. */
    "tencent_docs.get_doc_content": {
      input: {
        /**
         * The Tencent Docs file ID.
         * @minLength 1
         */
        fileID: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The raw object returned by Tencent Docs. */
        document: Record<string, unknown>;
        /** The Tencent Docs document version. */
        version: number;
        /** The raw object returned by Tencent Docs. */
        raw: Record<string, unknown>;
      };
    };
    /** Check a Tencent Docs asynchronous export operation and return the download URL when ready. */
    "tencent_docs.get_export_progress": {
      input: {
        /**
         * The opaque export handle returned by start_export.
         * @minLength 1
         */
        exportHandle?: string;
        /**
         * The Tencent Docs file ID being exported.
         * @minLength 1
         */
        fileID?: string;
        /**
         * The export operation ID returned by start_export.
         * @minLength 1
         */
        operationID?: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The normalized export status. */
        status: "running" | "succeeded" | "failed";
        /**
         * The export progress from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        progress: number;
        /**
         * The temporary download URL when export has succeeded.
         * @format uri
         */
        url: string | null;
        /** The raw object returned by Tencent Docs. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Tencent Docs metadata for one file by file ID. */
    "tencent_docs.get_file_metadata": {
      input: {
        /**
         * The Tencent Docs file ID.
         * @minLength 1
         */
        fileID: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** A Tencent Docs file or folder item. */
        file: {
          /** The Tencent Docs file or folder ID. */
          ID: string;
          /** The file or folder title. */
          title: string | null;
          /** The Tencent Docs file type, such as doc, sheet, form, or folder. */
          type: string | null;
          /** The browser URL for opening the file or folder. */
          url: string | null;
          /** The file or folder status returned by Tencent Docs. */
          status: string | null;
          /** Whether the authorized user created the file or folder. */
          isCreator: boolean | null;
          /** Whether the authorized user owns the file or folder. */
          isOwner: boolean | null;
          /** The creation time returned by Tencent Docs. */
          createTime: number | null;
          /** The creator display name returned by Tencent Docs. */
          creatorName: string | null;
          /** The owner display name returned by Tencent Docs. */
          ownerName: string | null;
          /** The owner Open ID returned by Tencent Docs. */
          ownerID: string | null;
          /** The last modification time returned by Tencent Docs. */
          lastModifyTime: number | null;
          /** The last modifier display name returned by Tencent Docs. */
          lastModifyName: string | null;
          /** The last browse time returned by Tencent Docs. */
          lastBrowseTime: number | null;
          /** Whether the file is starred. */
          starred: boolean | null;
          /** Whether the file is pinned. */
          pinned: boolean | null;
          /** The source classification for the file when returned by search. */
          fileSource: string | null;
          /** The highlighted search snippet when returned by search. */
          highlight: string | null;
          /** The raw object returned by Tencent Docs. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Read cell values and metadata from a Tencent Docs spreadsheet range. */
    "tencent_docs.get_sheet_range": {
      input: {
        /**
         * The Tencent Docs spreadsheet file ID.
         * @minLength 1
         */
        fileID: string;
        /**
         * The Tencent Docs spreadsheet sheet ID.
         * @minLength 1
         */
        sheetID: string;
        /**
         * The A1-style range to read, such as A1:D10.
         * @minLength 1
         */
        range: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The raw object returned by Tencent Docs. */
        gridData: Record<string, unknown>;
        /** The raw object returned by Tencent Docs. */
        raw: Record<string, unknown>;
      };
    };
    /** List files and folders in a Tencent Docs folder. */
    "tencent_docs.list_folder": {
      input: {
        /**
         * The folder ID to list. Omit it to list the root folder.
         * @minLength 1
         */
        folderID?: string;
        /**
         * The sort type, such as browse.
         * @minLength 1
         */
        sortType?: string;
        /**
         * The sort direction. Use 1 for ascending or 0 for descending.
         * @minimum 0
         * @maximum 1
         */
        asc?: number;
        /**
         * The start offset. Defaults to 0.
         * @minimum 0
         */
        start?: number;
        /**
         * The maximum number of items to return. Defaults to 20.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The next offset returned by Tencent Docs. */
        next: number | null;
        /** The files and folders in the folder. */
        items: Array<{
          /** The Tencent Docs file or folder ID. */
          ID: string;
          /** The file or folder title. */
          title: string | null;
          /** The Tencent Docs file type, such as doc, sheet, form, or folder. */
          type: string | null;
          /** The browser URL for opening the file or folder. */
          url: string | null;
          /** The file or folder status returned by Tencent Docs. */
          status: string | null;
          /** Whether the authorized user created the file or folder. */
          isCreator: boolean | null;
          /** Whether the authorized user owns the file or folder. */
          isOwner: boolean | null;
          /** The creation time returned by Tencent Docs. */
          createTime: number | null;
          /** The creator display name returned by Tencent Docs. */
          creatorName: string | null;
          /** The owner display name returned by Tencent Docs. */
          ownerName: string | null;
          /** The owner Open ID returned by Tencent Docs. */
          ownerID: string | null;
          /** The last modification time returned by Tencent Docs. */
          lastModifyTime: number | null;
          /** The last modifier display name returned by Tencent Docs. */
          lastModifyName: string | null;
          /** The last browse time returned by Tencent Docs. */
          lastBrowseTime: number | null;
          /** Whether the file is starred. */
          starred: boolean | null;
          /** Whether the file is pinned. */
          pinned: boolean | null;
          /** The source classification for the file when returned by search. */
          fileSource: string | null;
          /** The highlighted search snippet when returned by search. */
          highlight: string | null;
          /** The raw object returned by Tencent Docs. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Tencent Docs. */
        raw: Record<string, unknown>;
      };
    };
    /** List child sheets inside a Tencent Docs Smartsheet file. */
    "tencent_docs.list_smartsheet_sheets": {
      input: {
        /**
         * The Tencent Docs file ID.
         * @minLength 1
         */
        fileID: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The Smartsheet child sheets returned by Tencent Docs. */
        sheets: Array<{
          /** The Tencent Docs Smartsheet sheet ID. */
          sheetID: string;
          /** The sheet title returned by Tencent Docs. */
          title: string | null;
          /** Whether the sheet is visible. */
          isVisible: boolean | null;
          /** The row count returned by Tencent Docs. */
          rowCount: number | null;
          /** The column count returned by Tencent Docs. */
          columnCount: number | null;
          /** The raw object returned by Tencent Docs. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Tencent Docs. */
        raw: Record<string, unknown>;
      };
    };
    /** Rename a Tencent Docs file by file ID. */
    "tencent_docs.rename_file": {
      input: {
        /**
         * The Tencent Docs file ID.
         * @minLength 1
         */
        fileID: string;
        /**
         * The new file title. Tencent Docs limits it to 36 characters.
         * @minLength 1
         */
        title: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
      };
    };
    /** Search Tencent Docs files by title keyword or owner nickname. */
    "tencent_docs.search_files": {
      input: {
        /**
         * The keyword to search for.
         * @minLength 1
         */
        searchKey: string;
        /** The search mode. */
        searchType: "title" | "owner";
        /** The result type filter. */
        resultType?: "all" | "folder";
        /**
         * The folder ID that limits the search scope.
         * @minLength 1
         */
        folderID?: string;
        /**
         * The result offset. Defaults to 0.
         * @minimum 0
         */
        offset?: number;
        /**
         * The maximum result count. Tencent Docs allows up to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /** The tie-break sort rule. */
        sortType?: "modify" | "create" | "browse";
        /**
         * The sort direction. Use 1 for ascending or 0 for descending.
         * @minimum 0
         * @maximum 1
         */
        asc?: number;
        /**
         * Whether to filter by files owned by the requester. Use 1 for yes or 0 for no.
         * @minimum 0
         * @maximum 1
         */
        byOwnership?: number;
        /**
         * A Tencent Docs file-type filter. Use hyphen-separated values for multiple types.
         * @minLength 1
         */
        fileTypes?: string;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The next offset returned by Tencent Docs. */
        next: number | null;
        /** The total matching item count returned by Tencent Docs. */
        total: number | null;
        /** Whether Tencent Docs has more search results. */
        hasMore: boolean | null;
        /** The search result files and folders. */
        items: Array<{
          /** The Tencent Docs file or folder ID. */
          ID: string;
          /** The file or folder title. */
          title: string | null;
          /** The Tencent Docs file type, such as doc, sheet, form, or folder. */
          type: string | null;
          /** The browser URL for opening the file or folder. */
          url: string | null;
          /** The file or folder status returned by Tencent Docs. */
          status: string | null;
          /** Whether the authorized user created the file or folder. */
          isCreator: boolean | null;
          /** Whether the authorized user owns the file or folder. */
          isOwner: boolean | null;
          /** The creation time returned by Tencent Docs. */
          createTime: number | null;
          /** The creator display name returned by Tencent Docs. */
          creatorName: string | null;
          /** The owner display name returned by Tencent Docs. */
          ownerName: string | null;
          /** The owner Open ID returned by Tencent Docs. */
          ownerID: string | null;
          /** The last modification time returned by Tencent Docs. */
          lastModifyTime: number | null;
          /** The last modifier display name returned by Tencent Docs. */
          lastModifyName: string | null;
          /** The last browse time returned by Tencent Docs. */
          lastBrowseTime: number | null;
          /** Whether the file is starred. */
          starred: boolean | null;
          /** Whether the file is pinned. */
          pinned: boolean | null;
          /** The source classification for the file when returned by search. */
          fileSource: string | null;
          /** The highlighted search snippet when returned by search. */
          highlight: string | null;
          /** The raw object returned by Tencent Docs. */
          raw: Record<string, unknown>;
        }>;
        /** The raw object returned by Tencent Docs. */
        raw: Record<string, unknown>;
      };
    };
    /** Start an asynchronous Tencent Docs file export and return the operation ID. */
    "tencent_docs.start_export": {
      input: {
        /**
         * The Tencent Docs file ID to export.
         * @minLength 1
         */
        fileID: string;
        /** The target export type when converting document type. */
        exportType?: "doc" | "pdf" | "sheet" | "slide";
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
        /** The Tencent Docs file ID being exported. */
        fileID: string;
        /** The Tencent Docs export operation ID. */
        operationID: string;
        /** An opaque handle that can be passed to get_export_progress. */
        exportHandle: string;
      };
    };
    /** Publish, pause, or update the collection deadline for a Tencent Docs form. */
    "tencent_docs.update_form_collection_deadline": {
      input: {
        /**
         * The Tencent Docs form ID.
         * @minLength 1
         */
        formID: string;
        /**
         * The collection end timestamp in seconds. Use 0 to publish without an end time.
         * @minimum 0
         */
        endTime?: number;
      };
      output: {
        /** The Tencent Docs business response code. 0 means success. */
        ret: number;
        /** The Tencent Docs business response message. */
        msg: string;
      };
    };
  }
}
