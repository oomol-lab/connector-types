import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Mem note from a complete markdown body and optional collection links. */
    "mem.create_note": {
      input: {
        /**
         * Optional caller-provided UUID for the note.
         * @format uuid
         */
        id?: string | null;
        /**
         * Full markdown body; the first line becomes the note title.
         * @maxLength 200000
         */
        content: string;
        /** Collection UUIDs associated with the note. */
        collection_ids?: Array<string> | null;
        /** Collection titles matched case-insensitively by exact title. */
        collection_titles?: Array<string> | null;
        /**
         * Optional creation timestamp for the note.
         * @format date-time
         */
        created_at?: string | null;
        /**
         * Optional initial update timestamp for the note.
         * @format date-time
         */
        updated_at?: string | null;
      };
      output: {
        /**
         * Identifier for the Mem API request.
         * @minLength 1
         */
        request_id: string;
        /**
         * UUID of the Mem note.
         * @format uuid
         */
        id: string;
        /** Current title of the note. */
        title: string;
        /** Full markdown content stored for the note. */
        content: string;
        /**
         * Current note content document version.
         * @minimum 1
         */
        version: number;
        /** Collection UUIDs associated with the note. */
        collection_ids: Array<string>;
        /**
         * Creation timestamp for the note.
         * @format date-time
         */
        created_at: string;
        /**
         * Last modification timestamp for the note.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Permanently delete a Mem note; this operation cannot be restored. */
    "mem.delete_note": {
      input: {
        /**
         * UUID of the target Mem note.
         * @format uuid
         */
        note_id: string;
      };
      output: {
        /**
         * Identifier for the Mem API request.
         * @minLength 1
         */
        request_id: string;
        [key: string]: unknown;
      };
    };
    /** List Mem notes with cursor pagination, chronological ordering, and filters. */
    "mem.list_notes": {
      input: {
        /**
         * Maximum notes to return in this page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number | null;
        /** Opaque cursor returned by a previous list response. */
        page?: string | null;
        /** Timestamp used for chronological ordering. */
        order_by?: "created_at" | "updated_at";
        /**
         * Collection UUID used to filter notes.
         * @format uuid
         */
        collection_id?: string | null;
        /**
         * Inclusive lower bound for note creation time.
         * @format date-time
         */
        filter_by_created_after?: string | null;
        /**
         * Inclusive upper bound for note creation time.
         * @format date-time
         */
        filter_by_created_before?: string | null;
        /**
         * Inclusive lower bound for note update time.
         * @format date-time
         */
        filter_by_updated_after?: string | null;
        /**
         * Inclusive upper bound for note update time.
         * @format date-time
         */
        filter_by_updated_before?: string | null;
        /** Whether to include notes containing an open task. */
        contains_open_tasks?: boolean;
        /** Whether to include notes containing any task. */
        contains_tasks?: boolean;
        /** Whether to include notes containing image media. */
        contains_images?: boolean;
        /** Whether to include notes containing file-like attachments. */
        contains_files?: boolean;
        /** Whether each result should include full markdown content. */
        include_note_content?: boolean;
      };
      output: {
        /**
         * Identifier for the Mem API request.
         * @minLength 1
         */
        request_id: string;
        /** Notes in the current page. */
        results: Array<{
          /**
           * UUID of the Mem note.
           * @format uuid
           */
          id: string;
          /** Current title of the note. */
          title: string;
          /** Full markdown content when the request includes note content. */
          content?: string | null;
          /** Collection UUIDs associated with the note. */
          collection_ids: Array<string>;
          /** Audio recording UUIDs associated with the note. */
          audio_recording_ids: Array<string>;
          /** Derived preview text for the note. */
          snippet?: string | null;
          /**
           * Creation timestamp for the note.
           * @format date-time
           */
          created_at: string;
          /**
           * Last modification timestamp for the note.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /**
         * Total matching notes before pagination.
         * @minimum 0
         */
        total: number;
        /** Opaque cursor for the next page of notes. */
        next_page?: string | null;
        [key: string]: unknown;
      };
    };
    /** Read the full current state of one Mem note, including trash state. */
    "mem.read_note": {
      input: {
        /**
         * UUID of the target Mem note.
         * @format uuid
         */
        note_id: string;
      };
      output: {
        /**
         * Identifier for the Mem API request.
         * @minLength 1
         */
        request_id: string;
        /**
         * UUID of the Mem note.
         * @format uuid
         */
        id: string;
        /** Current title of the note. */
        title: string;
        /** Full markdown content stored for the note. */
        content: string;
        /**
         * Current note content document version.
         * @minimum 1
         */
        version: number;
        /** Collection UUIDs associated with the note. */
        collection_ids: Array<string>;
        /** Audio recording UUIDs associated with the note. */
        audio_recording_ids: Array<string>;
        /** Compact metadata for attachments embedded in the note. */
        attachment_metadata: Array<{
          /** The attachment kind. */
          attachment_kind: "pdf" | "image";
          /**
           * UUID of the note attachment.
           * @format uuid
           */
          attachment_id: string;
          /** Number of pages for a PDF attachment. */
          page_count?: number | null;
          /** Extracted summary for the attachment. */
          summary?: string | null;
          /** Suggested query for searching within the attachment. */
          suggested_search?: string | null;
          /** Extracted OCR text for an image attachment. */
          ocr_text?: string | null;
          /** Visual description for an image attachment. */
          visual_description?: string | null;
          /** Detected image type for an image attachment. */
          image_type?: string | null;
          [key: string]: unknown;
        }>;
        /**
         * Timestamp when the note was moved to trash, or null when active.
         * @format date-time
         */
        trashed_at: string | null;
        /**
         * Creation timestamp for the note.
         * @format date-time
         */
        created_at: string;
        /**
         * Last modification timestamp for the note.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
    /** Restore a previously trashed Mem note to the active note set. */
    "mem.restore_note": {
      input: {
        /**
         * UUID of the target Mem note.
         * @format uuid
         */
        note_id: string;
      };
      output: {
        /**
         * Identifier for the Mem API request.
         * @minLength 1
         */
        request_id: string;
        [key: string]: unknown;
      };
    };
    /** Search Mem notes by relevance with filters and bounded snapshot pagination. */
    "mem.search_notes": {
      input: {
        /**
         * Free-text query used to search notes by relevance.
         * @minLength 1
         */
        query: string;
        /** Collection UUID filters; notes in any listed collection may match. */
        filter_by_collection_ids?: Array<string> | null;
        /**
         * Inclusive lower bound for note creation time.
         * @format date-time
         */
        filter_by_created_after?: string | null;
        /**
         * Inclusive upper bound for note creation time.
         * @format date-time
         */
        filter_by_created_before?: string | null;
        /**
         * Inclusive lower bound for note update time.
         * @format date-time
         */
        filter_by_updated_after?: string | null;
        /**
         * Inclusive upper bound for note update time.
         * @format date-time
         */
        filter_by_updated_before?: string | null;
        /** Whether to include notes containing an open task. */
        filter_by_contains_open_tasks?: boolean;
        /** Whether to include notes containing any task. */
        filter_by_contains_tasks?: boolean;
        /** Whether to include notes containing image media. */
        filter_by_contains_images?: boolean;
        /** Whether to include notes containing file-like attachments. */
        filter_by_contains_files?: boolean;
        /** Flags controlling the search response payload. */
        config?: {
          /** Whether search results should include full markdown content. */
          include_note_content?: boolean;
        };
        /**
         * Maximum notes to return in this search page.
         * @minimum 1
         * @maximum 50
         */
        limit?: number | null;
        /**
         * Zero-based number of matching notes to skip.
         * @minimum 0
         */
        offset?: number;
        /**
         * Snapshot UUID returned by a previous search page.
         * @format uuid
         */
        snapshot_id?: string | null;
      };
      output: {
        /**
         * Identifier for the Mem API request.
         * @minLength 1
         */
        request_id: string;
        /** Relevance-ranked note results. */
        results: Array<{
          /**
           * UUID of the Mem note.
           * @format uuid
           */
          id: string;
          /** Current title of the note. */
          title: string;
          /** Full markdown content when the request includes note content. */
          content?: string | null;
          /** Collection UUIDs associated with the note. */
          collection_ids: Array<string>;
          /** Audio recording UUIDs associated with the note. */
          audio_recording_ids: Array<string>;
          /** Derived preview text for the note. */
          snippet?: string | null;
          /**
           * Creation timestamp for the note.
           * @format date-time
           */
          created_at: string;
          /**
           * Last modification timestamp for the note.
           * @format date-time
           */
          updated_at: string;
          [key: string]: unknown;
        }>;
        /**
         * Matching notes captured in the bounded search snapshot.
         * @minimum 0
         */
        total: number;
        /**
         * Zero-based offset applied to the search results.
         * @minimum 0
         */
        offset: number;
        /**
         * Limit applied to the search page.
         * @minimum 1
         * @maximum 50
         */
        limit: number;
        /** Whether another page exists in this search snapshot. */
        has_next_page: boolean;
        /**
         * Snapshot UUID to reuse for deterministic later pages.
         * @format uuid
         */
        snapshot_id: string;
        [key: string]: unknown;
      };
    };
    /** Move a Mem note to trash so it can be restored later. */
    "mem.trash_note": {
      input: {
        /**
         * UUID of the target Mem note.
         * @format uuid
         */
        note_id: string;
      };
      output: {
        /**
         * Identifier for the Mem API request.
         * @minLength 1
         */
        request_id: string;
        [key: string]: unknown;
      };
    };
    /** Replace a Mem note's markdown body using its exact current content version. */
    "mem.update_note": {
      input: {
        /**
         * UUID of the Mem note to update.
         * @format uuid
         */
        note_id: string;
        /**
         * Complete replacement markdown body for the note.
         * @maxLength 200000
         */
        content: string;
        /**
         * Exact current content document version.
         * @minimum 1
         */
        version: number;
        /**
         * Optional update timestamp for this write.
         * @format date-time
         */
        updated_at?: string | null;
      };
      output: {
        /**
         * Identifier for the Mem API request.
         * @minLength 1
         */
        request_id: string;
        /**
         * UUID of the Mem note.
         * @format uuid
         */
        id: string;
        /** Current title of the note after the update. */
        title: string;
        /** Full markdown content stored after the update. */
        content: string;
        /**
         * Current note content document version after the update.
         * @minimum 1
         */
        version: number;
        /** Collection UUIDs associated with the note. */
        collection_ids: Array<string>;
        /**
         * Timestamp when the note was moved to trash, or null when active.
         * @format date-time
         */
        trashed_at: string | null;
        /**
         * Creation timestamp for the note.
         * @format date-time
         */
        created_at: string;
        /**
         * Last modification timestamp after the update.
         * @format date-time
         */
        updated_at: string;
        [key: string]: unknown;
      };
    };
  }
}
