import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Permanently delete one FNS attachment by path and path hash. */
    "fast_note_sync.delete_attachment": {
      input: {
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
        /**
         * The attachment path.
         * @minLength 1
         */
        path: string;
        /**
         * The attachment path hash returned by FNS.
         * @minLength 1
         */
        pathHash: string;
      };
      output: {
        /** Whether FNS accepted the attachment deletion. */
        deleted: boolean;
        /** FNS attachment metadata. */
        attachment: {
          /** The attachment id. */
          id?: number;
          /** The attachment path. */
          path?: string;
          /** The hash of the attachment path. */
          pathHash?: string;
          /** The hash of the attachment content. */
          contentHash?: string;
          /** The attachment size in bytes. */
          size?: number;
          /** The attachment rename flag. */
          rename?: number;
          /** The attachment creation timestamp. */
          ctime?: number;
          /** The attachment modification timestamp. */
          mtime?: number;
          /** The attachment record update timestamp. */
          lastTime?: number;
          /** The attachment record creation time. */
          createdAt?: string;
          /** The attachment record update time. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Move one FNS note to the recycle bin. */
    "fast_note_sync.delete_note": {
      input: {
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
        /**
         * The note path.
         * @minLength 1
         */
        path: string;
      };
      output: {
        /** Whether FNS accepted the note deletion. */
        deleted: boolean;
        /** An FNS note with content and metadata. */
        note: {
          /** The note id when returned by the endpoint. */
          id?: number;
          /** The note path. */
          path?: string;
          /** The hash of the note path. */
          pathHash?: string;
          /** The Markdown note content. */
          content?: string;
          /** The hash of the note content. */
          contentHash?: string;
          /** Attachment links found in the note, keyed by the source link. */
          fileLinks?: Record<string, string>;
          /** The note version. */
          version?: number;
          /** The note creation timestamp. */
          ctime?: number;
          /** The note modification timestamp. */
          mtime?: number;
          /** The note size in bytes when returned by the endpoint. */
          size?: number;
          /** The note record update timestamp. */
          lastTime?: number;
          /** The note record creation time. */
          createdAt?: string;
          /** The note record update time. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Permanently delete an FNS vault and all notes and attachments it contains. */
    "fast_note_sync.delete_vault": {
      input: {
        /**
         * The vault id to delete.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** Whether FNS accepted the vault deletion. */
        deleted: boolean;
      };
    };
    /** Download an FNS attachment into connector file transit and return its transit URL. */
    "fast_note_sync.download_attachment": {
      input: {
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
        /**
         * The attachment path.
         * @minLength 1
         */
        path: string;
        /** Whether to download the attachment from the recycle bin. */
        isRecycle?: boolean;
      };
      output: {
        /** The downloaded attachment in connector file transit. */
        attachment: {
          /** The attachment file name. */
          name: string;
          /** The attachment MIME type. */
          mimetype: string;
          /** The attachment size in bytes. */
          size: number;
          /**
           * The connector transit URL for downloading the attachment.
           * @format uri
           */
          s3url: string;
        };
      };
    };
    /** Get the user associated with the connected FNS API token. */
    "fast_note_sync.get_current_user": {
      input: Record<string, never>;
      output: {
        /** An authenticated FNS user. */
        user: {
          /** The FNS user id. */
          uid?: number;
          /** The FNS username. */
          username?: string;
          /** The user's email address. */
          email?: string;
          /** The user's avatar URL or handle. */
          avatar?: string;
          /** The active authentication token id. */
          tokenId?: number;
          /** The account creation time. */
          createdAt?: string;
          /** The account update time. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one FNS note's Markdown content and metadata by path. */
    "fast_note_sync.get_note": {
      input: {
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
        /**
         * The note path.
         * @minLength 1
         */
        path: string;
        /** Whether to read the note from the recycle bin. */
        isRecycle?: boolean;
      };
      output: {
        /** An FNS note with content and metadata. */
        note: {
          /** The note id when returned by the endpoint. */
          id?: number;
          /** The note path. */
          path?: string;
          /** The hash of the note path. */
          pathHash?: string;
          /** The Markdown note content. */
          content?: string;
          /** The hash of the note content. */
          contentHash?: string;
          /** Attachment links found in the note, keyed by the source link. */
          fileLinks?: Record<string, string>;
          /** The note version. */
          version?: number;
          /** The note creation timestamp. */
          ctime?: number;
          /** The note modification timestamp. */
          mtime?: number;
          /** The note size in bytes when returned by the endpoint. */
          size?: number;
          /** The note record update timestamp. */
          lastTime?: number;
          /** The note record creation time. */
          createdAt?: string;
          /** The note record update time. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one FNS vault by its numeric id. */
    "fast_note_sync.get_vault": {
      input: {
        /**
         * The vault id.
         * @minimum 1
         */
        id: number;
      };
      output: {
        /** An FNS note vault. */
        vault: {
          /** The vault id. */
          id?: number;
          /** The vault name. */
          vault?: string;
          /** The number of notes in the vault. */
          noteCount?: number;
          /** The total note size in bytes. */
          noteSize?: number;
          /** The number of attachments in the vault. */
          fileCount?: number;
          /** The total attachment size in bytes. */
          fileSize?: number;
          /** The total vault size in bytes. */
          size?: number;
          /** The vault creation time. */
          createdAt?: string;
          /** The vault update time. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** List attachment metadata in an FNS vault with search, pagination, and sorting. */
    "fast_note_sync.list_attachments": {
      input: {
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /**
         * A keyword used to filter attachment paths.
         * @minLength 1
         */
        keyword?: string;
        /** Whether to return attachments from the recycle bin. */
        isRecycle?: boolean;
        /**
         * The documented FNS attachment field used for sorting.
         * @minLength 1
         */
        sortBy?: string;
        /** The sort direction. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** The attachment metadata returned by FNS. */
        attachments: Array<{
          /** The attachment id. */
          id?: number;
          /** The attachment path. */
          path?: string;
          /** The hash of the attachment path. */
          pathHash?: string;
          /** The hash of the attachment content. */
          contentHash?: string;
          /** The attachment size in bytes. */
          size?: number;
          /** The attachment rename flag. */
          rename?: number;
          /** The attachment creation timestamp. */
          ctime?: number;
          /** The attachment modification timestamp. */
          mtime?: number;
          /** The attachment record update timestamp. */
          lastTime?: number;
          /** The attachment record creation time. */
          createdAt?: string;
          /** The attachment record update time. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination information returned by FNS. */
        pagination: {
          /** The current one-based page number. */
          page: number;
          /** The requested number of records per page. */
          pageSize: number;
          /** The total number of matching records. */
          totalRows: number;
        };
      };
    };
    /** List note metadata in an FNS vault with pagination and sorting. */
    "fast_note_sync.list_notes": {
      input: {
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** Whether to return notes from the recycle bin. */
        isRecycle?: boolean;
        /**
         * The documented FNS note field used for sorting.
         * @minLength 1
         */
        sortBy?: string;
        /** The sort direction. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** The note metadata returned by FNS. */
        notes: Array<{
          /** The note id. */
          id?: number;
          /** The note path. */
          path?: string;
          /** The hash of the note path. */
          pathHash?: string;
          /** The hash of the note content. */
          contentHash?: string;
          /** The note version. */
          version?: number;
          /** The note creation timestamp. */
          ctime?: number;
          /** The note modification timestamp. */
          mtime?: number;
          /** The note size in bytes. */
          size?: number;
          /** The note record update timestamp. */
          lastTime?: number;
          /** The note record creation time. */
          createdAt?: string;
          /** The note record update time. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination information returned by FNS. */
        pagination: {
          /** The current one-based page number. */
          page: number;
          /** The requested number of records per page. */
          pageSize: number;
          /** The total number of matching records. */
          totalRows: number;
        };
      };
    };
    /** List every note vault owned by the authenticated FNS user. */
    "fast_note_sync.list_vaults": {
      input: Record<string, never>;
      output: {
        /** The vaults returned by FNS. */
        vaults: Array<{
          /** The vault id. */
          id?: number;
          /** The vault name. */
          vault?: string;
          /** The number of notes in the vault. */
          noteCount?: number;
          /** The total note size in bytes. */
          noteSize?: number;
          /** The number of attachments in the vault. */
          fileCount?: number;
          /** The total attachment size in bytes. */
          fileSize?: number;
          /** The total vault size in bytes. */
          size?: number;
          /** The vault creation time. */
          createdAt?: string;
          /** The vault update time. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search note paths or note content in an FNS vault. */
    "fast_note_sync.search_notes": {
      input: {
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
        /**
         * The search text.
         * @minLength 1
         */
        query: string;
        /** Whether to search note paths or note content. */
        field: "path" | "content";
        /**
         * The one-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of records per page, up to 100.
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** Whether to return notes from the recycle bin. */
        isRecycle?: boolean;
        /**
         * The documented FNS note field used for sorting.
         * @minLength 1
         */
        sortBy?: string;
        /** The sort direction. */
        sortOrder?: "asc" | "desc";
      };
      output: {
        /** The note metadata matching the search. */
        notes: Array<{
          /** The note id. */
          id?: number;
          /** The note path. */
          path?: string;
          /** The hash of the note path. */
          pathHash?: string;
          /** The hash of the note content. */
          contentHash?: string;
          /** The note version. */
          version?: number;
          /** The note creation timestamp. */
          ctime?: number;
          /** The note modification timestamp. */
          mtime?: number;
          /** The note size in bytes. */
          size?: number;
          /** The note record update timestamp. */
          lastTime?: number;
          /** The note record creation time. */
          createdAt?: string;
          /** The note record update time. */
          updatedAt?: string;
          [key: string]: unknown;
        }>;
        /** Pagination information returned by FNS. */
        pagination: {
          /** The current one-based page number. */
          page: number;
          /** The requested number of records per page. */
          pageSize: number;
          /** The total number of matching records. */
          totalRows: number;
        };
      };
    };
    /** Download a public file URL and upload it as an attachment to an FNS vault. */
    "fast_note_sync.upload_attachment": {
      input: {
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
        /**
         * The attachment path inside the vault.
         * @minLength 1
         */
        path: string;
        /**
         * The public HTTP or HTTPS URL of the file to upload.
         * @format uri
         */
        fileUrl: string;
        /**
         * The MIME type to send for the attachment.
         * @minLength 1
         */
        mimeType?: string;
        /** An optional creation timestamp in milliseconds. */
        ctime?: number;
        /** An optional modification timestamp in milliseconds. */
        mtime?: number;
      };
      output: {
        /** FNS attachment metadata. */
        attachment: {
          /** The attachment id. */
          id?: number;
          /** The attachment path. */
          path?: string;
          /** The hash of the attachment path. */
          pathHash?: string;
          /** The hash of the attachment content. */
          contentHash?: string;
          /** The attachment size in bytes. */
          size?: number;
          /** The attachment rename flag. */
          rename?: number;
          /** The attachment creation timestamp. */
          ctime?: number;
          /** The attachment modification timestamp. */
          mtime?: number;
          /** The attachment record update timestamp. */
          lastTime?: number;
          /** The attachment record creation time. */
          createdAt?: string;
          /** The attachment record update time. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create an FNS note or replace the content of an existing note at the same path. */
    "fast_note_sync.upsert_note": {
      input: {
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
        /**
         * The note path.
         * @minLength 1
         */
        path: string;
        /** The Markdown note content. */
        content?: string;
        /** Whether the request must fail when the note already exists. */
        createOnly?: boolean;
        /** An optional FNS creation timestamp. */
        ctime?: number;
        /** An optional FNS modification timestamp. */
        mtime?: number;
      };
      output: {
        /** An FNS note with content and metadata. */
        note: {
          /** The note id when returned by the endpoint. */
          id?: number;
          /** The note path. */
          path?: string;
          /** The hash of the note path. */
          pathHash?: string;
          /** The Markdown note content. */
          content?: string;
          /** The hash of the note content. */
          contentHash?: string;
          /** Attachment links found in the note, keyed by the source link. */
          fileLinks?: Record<string, string>;
          /** The note version. */
          version?: number;
          /** The note creation timestamp. */
          ctime?: number;
          /** The note modification timestamp. */
          mtime?: number;
          /** The note size in bytes when returned by the endpoint. */
          size?: number;
          /** The note record update timestamp. */
          lastTime?: number;
          /** The note record creation time. */
          createdAt?: string;
          /** The note record update time. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Create an FNS vault or update an existing vault when its id is provided. */
    "fast_note_sync.upsert_vault": {
      input: {
        /**
         * The existing vault id to update.
         * @minimum 1
         */
        id?: number;
        /**
         * The vault name.
         * @minLength 1
         */
        vault: string;
      };
      output: {
        /** An FNS note vault. */
        vault: {
          /** The vault id. */
          id?: number;
          /** The vault name. */
          vault?: string;
          /** The number of notes in the vault. */
          noteCount?: number;
          /** The total note size in bytes. */
          noteSize?: number;
          /** The number of attachments in the vault. */
          fileCount?: number;
          /** The total attachment size in bytes. */
          fileSize?: number;
          /** The total vault size in bytes. */
          size?: number;
          /** The vault creation time. */
          createdAt?: string;
          /** The vault update time. */
          updatedAt?: string;
          [key: string]: unknown;
        };
      };
    };
  }
}
