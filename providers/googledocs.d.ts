import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Copy an existing Google Docs document through Google Drive. If `title` is omitted, Google assigns the default copied-document title. */
    "googledocs.copy_document": {
      input: {
        /** The ID of the Google Docs document to copy. */
        document_id: string;
        /** The title for the copied document. If omitted, Google assigns a default title. */
        title?: string;
        /** Whether to include shared drives when locating the source document. */
        include_shared_drives?: boolean;
      };
      output: {
        /** The ID of the file in Google Drive. */
        id: string;
        /** The name of the file. */
        name: string;
        /** The MIME type of the file. */
        mimeType: string;
        /** A link for opening the file in a relevant Google editor or viewer in a browser. */
        webViewLink?: string | null;
        /** The time at which the file was created (RFC 3339 date-time). */
        createdTime?: string | null;
        /** The last time the file was modified by anyone (RFC 3339 date-time). */
        modifiedTime?: string | null;
        /** The ID of the shared drive the file belongs to, if any. */
        driveId?: string | null;
        /** The IDs of the parent folders that contain the file. */
        parents?: Array<string>;
        /** The owners of the file. */
        owners?: Array<{
          /** The display name of the owner. */
          displayName?: string | null;
          /** The email address of the owner. */
          emailAddress?: string | null;
          /** The permission ID of the owner in the file's ACL. */
          permissionId?: string | null;
          /** A URL that points to the owner's profile photo. */
          photoLink?: string | null;
        }>;
        /** Whether the file has been shared with others. */
        shared?: boolean;
        /** Whether the user has starred the file. */
        starred?: boolean;
        /** Whether the file has been trashed. */
        trashed?: boolean;
      };
    };
    /** Create a Google Docs document and optionally insert initial text at the beginning. Returns document metadata without the full body content. */
    "googledocs.create_document": {
      input: {
        /** The title of the new document. */
        title: string;
        /** Initial text to insert at the beginning of the document. */
        text?: string;
      };
      output: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** The title of the document. */
        title: string;
        /** The revision ID of the document. */
        revisionId?: string | null;
        /** The number of characters inserted as initial text. */
        insertedTextLength: number;
      };
    };
    /** Create a blank Google Docs document. This legacy compatibility action is the no-initial-text variant of `create_document`. */
    "googledocs.create_document2": {
      input: {
        /** The title of the new document. */
        title: string;
      };
      output: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** The title of the document. */
        title: string;
        /** The revision ID of the document. */
        revisionId?: string | null;
      };
    };
    /** Create a footer in a Google Docs document, optionally targeting a specific section break location. */
    "googledocs.create_footer": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The type of footer to create (e.g., DEFAULT). */
        type: string;
        /** The location of the section break at which to create the footer. */
        section_break_location?: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The ID of the newly created footer. */
        footerId?: string;
      };
    };
    /** Create a footnote in a Google Docs document at a specific location or at the end of a segment. */
    "googledocs.create_footnote": {
      input: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** The specific location in the document at which to insert the footnote. */
        location?: Record<string, unknown>;
        /** The end-of-segment location at which to insert the footnote. */
        endOfSegmentLocation?: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The ID of the newly created footnote. */
        footnoteId?: string;
      };
    };
    /** Create a header in a Google Docs document and optionally insert initial text. You can also target a specific section break location. */
    "googledocs.create_header": {
      input: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** The type of header to create (e.g., DEFAULT). */
        type?: string;
        /** Initial text to insert into the header. */
        text?: string;
        /** The location of the section break at which to create the header. */
        sectionBreakLocation?: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The ID of the newly created header. */
        headerId?: string;
        /** The number of characters inserted as initial header text. */
        insertedTextLength?: number;
      };
    };
    /** Create a named range over a specific span in a Google Docs document so it can be referenced later by name or ID. */
    "googledocs.create_named_range": {
      input: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /**
         * The name of the named range. Must be between 1 and 256 characters.
         * @minLength 1
         * @maxLength 256
         */
        name: string;
        /** The zero-based start index of the range (inclusive). */
        rangeStartIndex: number;
        /** The zero-based end index of the range (exclusive). */
        rangeEndIndex: number;
        /** The ID of the header, footer, or footnote segment the range belongs to. Empty string refers to the document body. */
        rangeSegmentId?: string;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The name of the created named range. */
        name: string;
        /** The ID of the created named range. */
        namedRangeId?: string | null;
      };
    };
    /** Add bullets to paragraphs within a specified range in a Google Docs document. */
    "googledocs.create_paragraph_bullets": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The CreateParagraphBulletsRequest payload specifying the range and bullet preset. */
        createParagraphBullets: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Delete a content range from a Google Docs document. The trailing newline at the end of each segment cannot be removed. */
    "googledocs.delete_content_range": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The Range object specifying the content to delete. */
        range: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Delete a footer from a Google Docs document, including a section-specific footer when applicable. */
    "googledocs.delete_footer": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The ID of the footer to delete. */
        footer_id: string;
        /** The ID of the tab containing the footer. Omit for the default tab. */
        tab_id?: string;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The ID of the deleted footer. */
        footerId: string;
      };
    };
    /** Delete a header from a Google Docs document, including a section-specific header when applicable. */
    "googledocs.delete_header": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The ID of the header to delete. */
        header_id: string;
        /** The ID of the tab containing the header. Omit for the default tab. */
        tab_id?: string;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The ID of the deleted header. */
        headerId: string;
      };
    };
    /** Delete a named range from a Google Docs document using a payload that identifies the range by ID or name. */
    "googledocs.delete_named_range": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The DeleteNamedRangeRequest payload identifying the range to delete by ID or name. */
        deleteNamedRange: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Remove bullets from paragraphs within a specified range in a Google Docs document. */
    "googledocs.delete_paragraph_bullets": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The Range object specifying the paragraphs from which to remove bullets. */
        range: Record<string, unknown>;
        /** The ID of the tab containing the range. Omit for the default tab. */
        tab_id?: string;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Delete one or more table columns from a Google Docs document. */
    "googledocs.delete_table_column": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** One or more DeleteTableColumnRequest objects identifying the columns to delete. */
        requests: (Array<Record<string, unknown>>) & (Array<unknown>);
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Delete a table row from a Google Docs document. */
    "googledocs.delete_table_row": {
      input: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** A TableCellLocation object identifying a cell in the row to delete. */
        tableCellLocation: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Export a Google Docs file as a PDF through Google Drive. Google Drive limits export content to roughly 10 MB. */
    "googledocs.export_document_as_pdf": {
      input: {
        /** The ID of the Google Docs file to export. */
        file_id: string;
        /** The filename for the exported PDF. If omitted, the document title is used. */
        filename?: string;
      };
      output: {
        /** The ID of the exported file in Google Drive. */
        fileId: string;
        /** The filename used for the exported PDF. */
        filename: string;
        /** The MIME type of the exported file. */
        mimeType: "application/pdf";
        /** The Base64-encoded binary content of the exported PDF. */
        dataBase64: string;
        /** The size of the exported PDF in bytes. */
        sizeBytes: number;
      };
    };
    /** Retrieve a Google Docs document by ID. Use `include_tabs_content` when you need tab content in the response. */
    "googledocs.get_document_by_id": {
      input: {
        /** The ID of the Google Docs document to retrieve. */
        id: string;
        /** Whether to populate the tabs field in the response with per-tab document content. */
        include_tabs_content?: boolean;
      };
      output: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** The title of the document. */
        title: string;
        /** The revision ID of the document. */
        revisionId?: string | null;
        /** The main body of the document. */
        body?: Record<string, unknown>;
        /** The headers in the document, keyed by header ID. */
        headers?: Record<string, unknown>;
        /** The footers in the document, keyed by footer ID. */
        footers?: Record<string, unknown>;
        /** The footnotes in the document, keyed by footnote ID. */
        footnotes?: Record<string, unknown>;
        /** The tabs in the document. */
        tabs?: Array<Record<string, unknown>>;
        /** The style of the document. */
        documentStyle?: Record<string, unknown>;
        /** The named ranges in the document, keyed by name. */
        namedRanges?: Record<string, unknown>;
        /** The inline objects in the document, keyed by object ID. */
        inlineObjects?: Record<string, unknown>;
        /** The lists in the document, keyed by list ID. */
        lists?: Record<string, unknown>;
      };
    };
    /** Retrieve a Google Docs document and render it as best-effort plain text. This flattens paragraphs, lists, tables, and optional headers, footers, or footnotes. */
    "googledocs.get_document_plaintext": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** Whether to include table content in the plain-text output. */
        include_tables?: boolean;
        /** Whether to include footer content in the plain-text output. */
        include_footers?: boolean;
        /** Whether to include header content in the plain-text output. */
        include_headers?: boolean;
        /** Whether to include footnote content in the plain-text output. */
        include_footnotes?: boolean;
        /** Whether to include content from all tabs in the plain-text output. */
        include_tabs_content?: boolean;
        /** The delimiter to insert between table rows in the plain-text output. */
        table_row_delimiter?: string;
        /** The delimiter to insert between table cells in the plain-text output. */
        table_cell_delimiter?: string;
      };
      output: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** The title of the document. */
        title?: string | null;
        /** The plain-text rendering of the document content. */
        text: string;
      };
    };
    /** Insert an inline image from a URI at a specified location in a Google Docs document. */
    "googledocs.insert_inline_image": {
      input: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /**
         * The publicly accessible URI of the image to insert.
         * @format uri
         */
        uri: string;
        /** The Location object specifying where in the document to insert the image. */
        location: Record<string, unknown>;
        /** The desired size of the image. If omitted, the image is inserted at its natural size. */
        objectSize?: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The ID of the inserted inline image object. */
        inlineObjectId?: string | null;
      };
    };
    /** Insert a page break at a specified location in a Google Docs document. */
    "googledocs.insert_page_break": {
      input: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** The InsertInlineImageRequest-style payload specifying where to insert the page break. */
        insertPageBreak: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Insert a table at a specific index or at the end of a segment in a Google Docs document. */
    "googledocs.insert_table_action": {
      input: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /**
         * The number of rows in the table to insert.
         * @exclusiveMinimum 0
         */
        rows: number;
        /**
         * The number of columns in the table to insert.
         * @exclusiveMinimum 0
         */
        columns: number;
        /** The zero-based index at which to insert the table. Required unless insertAtEndOfSegment is true. */
        index?: number;
        /** The ID of the header, footer, or footnote segment in which to insert the table. Empty string refers to the document body. */
        segmentId?: string;
        /** The ID of the tab in which to insert the table. */
        tabId?: string;
        /** Whether to insert the table at the end of the segment instead of at a specific index. */
        insertAtEndOfSegment?: boolean;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Insert one or more table columns at a specified location in a Google Docs document. */
    "googledocs.insert_table_column": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** One or more InsertTableColumnRequest objects specifying where and how to insert columns. */
        requests: (Array<Record<string, unknown>>) & (Array<unknown>);
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Insert text at a specific index or append it to the end of a Google Docs document. When inserting by index, the position must be inside an existing paragraph. */
    "googledocs.insert_text_action": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The text to insert. */
        text_to_insert?: string;
        /** Whether to append the text to the end of the document. Required if insertion_index is omitted. */
        append_to_end?: boolean;
        /** The zero-based index at which to insert the text. Either this or append_to_end=true must be provided. */
        insertion_index?: number;
        /** The ID of the header, footer, or footnote segment in which to insert text. Empty string refers to the document body. */
        segment_id?: string;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The number of characters that were inserted. */
        insertedTextLength: number;
        /** The insertion mode used: 'append' if the text was appended to the end, 'index' if it was inserted at a specific position. */
        mode: "append" | "index";
      };
    };
    /** List chart metadata from a Google Sheets spreadsheet so charts can be referenced or embedded elsewhere, including in Google Docs. */
    "googledocs.list_spreadsheet_charts": {
      input: {
        /** The ID of the Google Sheets spreadsheet from which to list charts. */
        spreadsheet_id: string;
      };
      output: {
        /** The ID of the Google Sheets spreadsheet. */
        spreadsheetId: string;
        /** The title of the spreadsheet. */
        title?: string | null;
        /** The sheets in the spreadsheet, each with their chart metadata. */
        sheets: Array<{
          /** The ID of the sheet within the spreadsheet. */
          sheetId?: number;
          /** The title of the sheet. */
          title?: string;
          /** The charts embedded in this sheet. */
          charts: Array<Record<string, unknown>>;
        }>;
      };
    };
    /** Replace all matching text in a Google Docs document. Supports case-sensitive and regex-based matching. */
    "googledocs.replace_all_text": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The text or pattern to search for in the document. */
        find_text: string;
        /** The text to substitute for each match. */
        replace_text: string;
        /** Whether the search should be case-sensitive. */
        match_case?: boolean;
        /** Whether to treat find_text as a regular expression. */
        search_by_regex?: boolean;
        /** The IDs of specific tabs to search. If omitted, all tabs are searched. */
        tab_ids?: Array<string>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The number of occurrences that were replaced. */
        occurrencesChanged?: number;
      };
    };
    /** Replace an existing image in a Google Docs document with a new image from a URI. */
    "googledocs.replace_image": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** The ReplaceImageRequest payload specifying the image to replace and the URI of the new image. */
        replace_image: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Search Google Docs files with filters such as query text, dates, starred state, trash state, or shared-drive visibility. */
    "googledocs.search_documents": {
      input: {
        /** A Google Drive query string to filter results (e.g., 'name contains "Report"'). */
        query?: string;
        /** A comma-separated list of fields to sort results by (e.g., 'modifiedTime desc'). */
        order_by?: string;
        /** A page token from a previous search response to retrieve the next page of results. */
        page_token?: string;
        /**
         * The maximum number of files to return (1–100).
         * @minimum 1
         * @maximum 100
         */
        max_results?: number;
        /** Whether to return only files that the user has starred. */
        starred_only?: boolean;
        /** An RFC 3339 date-time string; only files created after this time are returned. */
        created_after?: string;
        /** An RFC 3339 date-time string; only files modified after this time are returned. */
        modified_after?: string;
        /** Whether to return only files that have been shared directly with the user. */
        shared_with_me?: boolean;
        /** Whether to include trashed files in the search results. */
        include_trashed?: boolean;
        /** Whether to include files from shared drives in the search results. */
        include_shared_drives?: boolean;
      };
      output: {
        /** The list of matching Google Docs files. */
        documents: Array<{
          /** The ID of the file in Google Drive. */
          id: string;
          /** The name of the file. */
          name: string;
          /** The MIME type of the file. */
          mimeType: string;
          /** A link for opening the file in a relevant Google editor or viewer in a browser. */
          webViewLink?: string | null;
          /** The time at which the file was created (RFC 3339 date-time). */
          createdTime?: string | null;
          /** The last time the file was modified by anyone (RFC 3339 date-time). */
          modifiedTime?: string | null;
          /** The ID of the shared drive the file belongs to, if any. */
          driveId?: string | null;
          /** The IDs of the parent folders that contain the file. */
          parents?: Array<string>;
          /** The owners of the file. */
          owners?: Array<{
            /** The display name of the owner. */
            displayName?: string | null;
            /** The email address of the owner. */
            emailAddress?: string | null;
            /** The permission ID of the owner in the file's ACL. */
            permissionId?: string | null;
            /** A URL that points to the owner's profile photo. */
            photoLink?: string | null;
          }>;
          /** Whether the file has been shared with others. */
          shared?: boolean;
          /** Whether the user has starred the file. */
          starred?: boolean;
          /** Whether the file has been trashed. */
          trashed?: boolean;
        }>;
        /** A page token for retrieving the next page of results, or null if there are no more pages. */
        nextPageToken: string | null;
      };
    };
    /** Unmerge previously merged table cells in a Google Docs document. */
    "googledocs.unmerge_table_cells": {
      input: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** A TableRange object specifying the merged cells to unmerge. */
        tableRange: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Apply raw Docs `batchUpdate` requests to a Google Docs document. This is the lower-level compatibility action for direct request arrays. */
    "googledocs.update_document_batch": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** An array of Docs API Request objects to apply in a single batchUpdate call. */
        requests: (Array<Record<string, unknown>>) & (Array<unknown>);
        /** An optional WriteControl object to control how write requests are executed. */
        write_control?: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Update global document style settings such as page size, margins, or text direction in a Google Docs document. */
    "googledocs.update_document_style": {
      input: {
        /** The ID of the Google Docs document. */
        document_id: string;
        /** A DocumentStyle object containing the style properties to update. */
        document_style: Record<string, unknown>;
        /** A field mask specifying which style properties to update (e.g., 'pageSize,marginTop'). */
        fields?: string;
        /** The ID of the tab whose document style should be updated. Omit for the default tab. */
        tab_id?: string;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
        /** The field mask that was applied when updating the document style. */
        fields: string;
      };
    };
    /** Apply one or more programmatic edits to an existing Google Docs document through `batchUpdate`. Use this for structured insert, delete, or formatting changes. */
    "googledocs.update_existing_document": {
      input: {
        /** The ID of the Google Docs document to update. */
        document_id: string;
        /** An array of Docs API Request objects describing the edits to apply. */
        editDocs: (Array<Record<string, unknown>>) & (Array<unknown>);
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
    /** Update the style of a table row in a Google Docs document, such as row height or header formatting. */
    "googledocs.update_table_row_style": {
      input: {
        /** The ID of the Google Docs document. */
        documentId: string;
        /** The UpdateTableRowStyleRequest payload specifying the row range and style properties to apply. */
        updateTableRowStyle: Record<string, unknown>;
      };
      output: {
        /** The ID of the document that was updated. */
        documentId: string;
        /** The replies from the batch update requests, in the same order as the requests. */
        replies: Array<Record<string, unknown>>;
        /** The updated write control after applying the request. */
        writeControl?: Record<string, unknown>;
      };
    };
  }
}
