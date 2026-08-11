import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Synchronously copy one file or folder within the Baidu Netdisk app directory. */
    "baidu_netdisk.copy": {
      input: {
        /**
         * The app-relative source path.
         * @minLength 1
         */
        sourcePath: string;
        /**
         * The app-relative destination directory path.
         * @minLength 1
         */
        destinationDirectoryPath: string;
        /**
         * A single file or folder name without path separators.
         * @minLength 1
         */
        newName?: string;
        /**
         * How Baidu Netdisk should handle a destination name conflict.
         * @default "fail"
         */
        conflictStrategy?: "fail" | "rename" | "overwrite" | "skip";
      };
      output: {
        /** The source app-relative path supplied by the caller. */
        sourcePath: string;
        /** The app-relative path reported by Baidu, or null when unavailable. */
        path: string | null;
      };
    };
    /** Create one folder below the configured Baidu Netdisk app directory. */
    "baidu_netdisk.create_folder": {
      input: {
        /**
         * The app-relative path of the folder to create.
         * @minLength 1
         */
        path: string;
        /**
         * How to handle an existing folder path.
         * @default "fail"
         */
        conflictStrategy?: "fail" | "rename";
      };
      output: {
        /** The lossless Baidu Netdisk fs_id decimal string. */
        id: string;
        /** The file or folder name. */
        name: string;
        /** The app-directory-relative path beginning with a slash. */
        path: string;
        /** Whether this item is a file or folder. */
        kind: "file" | "folder";
        /** The Baidu Netdisk file category, or null for folders. */
        category: "video" | "audio" | "image" | "document" | "application" | "other" | "torrent" | null;
        /** The file size in bytes, or null for folders or missing values. */
        sizeBytes: number | null;
        /**
         * The server creation time in ISO 8601 UTC format.
         * @format date-time
         */
        createdAt: string | null;
        /**
         * The server modification time in ISO 8601 UTC format.
         * @format date-time
         */
        modifiedAt: string | null;
        /** The provider cloud hash, or null when unavailable. */
        cloudMd5: string | null;
      };
    };
    /** Create one UTF-8 text file of up to 4 MiB in the configured Baidu Netdisk app directory. */
    "baidu_netdisk.create_text_file": {
      input: {
        /**
         * The app-relative destination file path.
         * @minLength 1
         */
        path: string;
        /**
         * The UTF-8 text content, limited to 4 MiB after encoding.
         * @maxLength 4194304
         */
        content: string;
        /**
         * How Baidu Netdisk should handle an existing destination path.
         * @default "fail"
         */
        conflictStrategy?: "fail" | "rename" | "overwrite";
      };
      output: {
        /** The lossless Baidu Netdisk fs_id decimal string, or null when instant upload succeeds without returning fs_id. */
        id: string | null;
        /** The file or folder name. */
        name: string;
        /** The app-directory-relative path beginning with a slash. */
        path: string;
        /** Whether this item is a file or folder. */
        kind: "file" | "folder";
        /** The Baidu Netdisk file category, or null for folders. */
        category: "video" | "audio" | "image" | "document" | "application" | "other" | "torrent" | null;
        /** The file size in bytes, or null for folders or missing values. */
        sizeBytes: number | null;
        /**
         * The server creation time in ISO 8601 UTC format.
         * @format date-time
         */
        createdAt: string | null;
        /**
         * The server modification time in ISO 8601 UTC format.
         * @format date-time
         */
        modifiedAt: string | null;
        /** The provider cloud hash, or null when unavailable. */
        cloudMd5: string | null;
      };
    };
    /** Delete one file or folder within the configured Baidu Netdisk app directory. */
    "baidu_netdisk.delete": {
      input: {
        /**
         * The app-relative path to delete.
         * @minLength 1
         */
        path: string;
      };
      output: {
        /** The source app-relative path supplied by the caller. */
        sourcePath: string;
        /** The app-relative path reported by Baidu, or null when unavailable. */
        path: string | null;
      };
    };
    /** Get the current Baidu Netdisk account and membership summary. */
    "baidu_netdisk.get_current_account": {
      input: Record<string, never>;
      output: {
        /** The lossless Baidu Netdisk uk decimal string. */
        accountId: string;
        /** The best available Baidu Netdisk account name. */
        accountLabel: string;
        /** The current account avatar URL, or null when unavailable. */
        avatarUrl: string | null;
        /** The current Baidu Netdisk membership tier. */
        membership: "free" | "vip" | "svip" | null;
      };
    };
    /** Get normalized metadata for up to 100 Baidu Netdisk file IDs. */
    "baidu_netdisk.get_file_metadata": {
      input: {
        /**
         * The Baidu Netdisk fs_id values to fetch.
         * @minItems 1
         * @maxItems 100
         */
        fileIds: Array<string>;
      };
      output: {
        /** The found items ordered by the input file IDs. */
        items: Array<{
          /** The lossless Baidu Netdisk fs_id decimal string. */
          id: string;
          /** The file or folder name. */
          name: string;
          /** The app-directory-relative path beginning with a slash. */
          path: string;
          /** Whether this item is a file or folder. */
          kind: "file" | "folder";
          /** The Baidu Netdisk file category, or null for folders. */
          category: "video" | "audio" | "image" | "document" | "application" | "other" | "torrent" | null;
          /** The file size in bytes, or null for folders or missing values. */
          sizeBytes: number | null;
          /**
           * The server creation time in ISO 8601 UTC format.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The server modification time in ISO 8601 UTC format.
           * @format date-time
           */
          modifiedAt: string | null;
          /** The provider cloud hash, or null when unavailable. */
          cloudMd5: string | null;
        }>;
      };
    };
    /** Get total, used, remaining, free, and expiring Baidu Netdisk capacity. */
    "baidu_netdisk.get_quota": {
      input: Record<string, never>;
      output: {
        /** The total storage capacity in bytes. */
        totalBytes: number;
        /** The used storage capacity in bytes. */
        usedBytes: number;
        /** The non-negative remaining storage capacity in bytes. */
        remainingBytes: number;
        /** The free storage capacity in bytes. */
        freeQuotaBytes: number;
        /** Whether some capacity expires within seven days. */
        expiresWithinSevenDays: boolean;
      };
    };
    /** List files and folders within the configured Baidu Netdisk app directory. */
    "baidu_netdisk.list_files": {
      input: {
        /**
         * The app-relative directory path to list.
         * @minLength 1
         * @default "/"
         */
        path?: string;
        /**
         * Whether to recursively list descendants.
         * @default false
         */
        recursive?: boolean;
        /**
         * The maximum number of items to return.
         * @minimum 1
         * @maximum 1000
         * @default 1000
         */
        limit?: number;
        /** The field used to sort the complete directory listing. */
        sortBy?: "name" | "modifiedTime" | "size";
        /** The directory listing sort direction. */
        sortOrder?: "ascending" | "descending";
        /**
         * The decimal Baidu Netdisk start cursor returned by a previous list call.
         * @minLength 1
         */
        cursor?: string;
        /**
         * The file categories to include. Category-filtered results contain files, not folders.
         * @minItems 1
         * @maxItems 7
         */
        categories?: Array<"video" | "audio" | "image" | "document" | "application" | "other" | "torrent">;
        /**
         * The file extensions to include within the selected categories.
         * @minItems 1
         */
        extensions?: Array<string>;
        /**
         * Only include files uploaded strictly after this ISO 8601 timestamp.
         * @format date-time
         */
        createdAfter?: string;
        /**
         * Only include files modified strictly after this ISO 8601 timestamp.
         * @format date-time
         */
        modifiedAfter?: string;
      };
      output: {
        /** The normalized files and folders in this page. */
        items: Array<{
          /** The lossless Baidu Netdisk fs_id decimal string. */
          id: string;
          /** The file or folder name. */
          name: string;
          /** The app-directory-relative path beginning with a slash. */
          path: string;
          /** Whether this item is a file or folder. */
          kind: "file" | "folder";
          /** The Baidu Netdisk file category, or null for folders. */
          category: "video" | "audio" | "image" | "document" | "application" | "other" | "torrent" | null;
          /** The file size in bytes, or null for folders or missing values. */
          sizeBytes: number | null;
          /**
           * The server creation time in ISO 8601 UTC format.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The server modification time in ISO 8601 UTC format.
           * @format date-time
           */
          modifiedAt: string | null;
          /** The provider cloud hash, or null when unavailable. */
          cloudMd5: string | null;
        }>;
        /** The decimal cursor for the next page, or null when complete. */
        nextCursor: string | null;
      };
    };
    /** Synchronously move one file or folder within the Baidu Netdisk app directory. */
    "baidu_netdisk.move": {
      input: {
        /**
         * The app-relative source path.
         * @minLength 1
         */
        sourcePath: string;
        /**
         * The app-relative destination directory path.
         * @minLength 1
         */
        destinationDirectoryPath: string;
        /**
         * A single file or folder name without path separators.
         * @minLength 1
         */
        newName?: string;
        /**
         * How Baidu Netdisk should handle a destination name conflict.
         * @default "fail"
         */
        conflictStrategy?: "fail" | "rename" | "overwrite" | "skip";
      };
      output: {
        /** The source app-relative path supplied by the caller. */
        sourcePath: string;
        /** The app-relative path reported by Baidu, or null when unavailable. */
        path: string | null;
      };
    };
    /** Synchronously rename one file or folder within the Baidu Netdisk app directory. */
    "baidu_netdisk.rename": {
      input: {
        /**
         * The app-relative source path.
         * @minLength 1
         */
        sourcePath: string;
        /**
         * A single file or folder name without path separators.
         * @minLength 1
         */
        newName: string;
        /**
         * How Baidu Netdisk should handle a destination name conflict.
         * @default "fail"
         */
        conflictStrategy?: "fail" | "rename" | "overwrite" | "skip";
      };
      output: {
        /** The source app-relative path supplied by the caller. */
        sourcePath: string;
        /** The app-relative path reported by Baidu, or null when unavailable. */
        path: string | null;
      };
    };
    /** Search up to 500 files and folders within the Baidu Netdisk app directory. */
    "baidu_netdisk.search_files": {
      input: {
        /**
         * The keyword to search for, up to 30 UTF-8 characters.
         * @minLength 1
         * @maxLength 30
         */
        query: string;
        /**
         * The app-relative directory path to search.
         * @minLength 1
         * @default "/"
         */
        path?: string;
        /**
         * Whether to recursively search descendants.
         * @default false
         */
        recursive?: boolean;
        /** The optional Baidu Netdisk file category filter. */
        category?: "video" | "audio" | "image" | "document" | "application" | "other" | "torrent";
      };
      output: {
        /** The normalized matching files and folders. */
        items: Array<{
          /** The lossless Baidu Netdisk fs_id decimal string. */
          id: string;
          /** The file or folder name. */
          name: string;
          /** The app-directory-relative path beginning with a slash. */
          path: string;
          /** Whether this item is a file or folder. */
          kind: "file" | "folder";
          /** The Baidu Netdisk file category, or null for folders. */
          category: "video" | "audio" | "image" | "document" | "application" | "other" | "torrent" | null;
          /** The file size in bytes, or null for folders or missing values. */
          sizeBytes: number | null;
          /**
           * The server creation time in ISO 8601 UTC format.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The server modification time in ISO 8601 UTC format.
           * @format date-time
           */
          modifiedAt: string | null;
          /** The provider cloud hash, or null when unavailable. */
          cloudMd5: string | null;
        }>;
        /** Whether Baidu reports more matches than this bounded result. */
        truncated: boolean;
      };
    };
    /** Search files in the configured Baidu Netdisk app directory using a natural-language description. */
    "baidu_netdisk.semantic_search_files": {
      input: {
        /**
         * The natural-language description of the files to find.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * The app-relative directory path to search.
         * @minLength 1
         * @default "/"
         */
        path?: string;
        /**
         * The maximum number of semantic matches to return.
         * @minimum 1
         * @maximum 500
         * @default 500
         */
        limit?: number;
      };
      output: {
        /** The normalized semantic matches. */
        items: Array<{
          /** The lossless Baidu Netdisk fs_id decimal string. */
          id: string;
          /** The file or folder name. */
          name: string;
          /** The app-directory-relative path beginning with a slash. */
          path: string;
          /** Whether this item is a file or folder. */
          kind: "file" | "folder";
          /** The Baidu Netdisk file category, or null for folders. */
          category: "video" | "audio" | "image" | "document" | "application" | "other" | "torrent" | null;
          /** The file size in bytes, or null for folders or missing values. */
          sizeBytes: number | null;
          /**
           * The server creation time in ISO 8601 UTC format.
           * @format date-time
           */
          createdAt: string | null;
          /**
           * The server modification time in ISO 8601 UTC format.
           * @format date-time
           */
          modifiedAt: string | null;
          /** The provider cloud hash, or null when unavailable. */
          cloudMd5: string | null;
          /** The official Baidu recall source for this match, or null when unavailable. */
          matchSource: "filename" | "image_ocr" | "document_text" | "document_semantic" | "video_semantic" | "audio_semantic" | "image_semantic" | "card" | null;
          /** The matched document, audio, or video text passage, or null when unavailable. */
          matchedContent: string | null;
          /** The matched image OCR text, or null when unavailable. */
          ocrText: string | null;
          /** The lossless Baidu semantic passage pid decimal string, or null when unavailable. */
          passageId: string | null;
        }>;
        /** Whether Baidu reports that more semantic matches may be available. */
        truncated: boolean;
      };
    };
    /** Download one public URL and upload its bytes to the configured Baidu Netdisk app directory. */
    "baidu_netdisk.upload_file_from_url": {
      input: {
        /**
         * A public HTTP or HTTPS URL whose bytes should be uploaded. For local files, use oo file upload and pass its downloadUrl.
         * @format uri
         */
        fileUrl: string;
        /**
         * The app-relative destination file path.
         * @minLength 1
         */
        destinationPath: string;
        /**
         * How Baidu Netdisk should handle an existing destination path.
         * @default "fail"
         */
        conflictStrategy?: "fail" | "rename" | "overwrite";
      };
      output: {
        /** The lossless Baidu Netdisk fs_id decimal string, or null when instant upload succeeds without returning fs_id. */
        id: string | null;
        /** The file or folder name. */
        name: string;
        /** The app-directory-relative path beginning with a slash. */
        path: string;
        /** Whether this item is a file or folder. */
        kind: "file" | "folder";
        /** The Baidu Netdisk file category, or null for folders. */
        category: "video" | "audio" | "image" | "document" | "application" | "other" | "torrent" | null;
        /** The file size in bytes, or null for folders or missing values. */
        sizeBytes: number | null;
        /**
         * The server creation time in ISO 8601 UTC format.
         * @format date-time
         */
        createdAt: string | null;
        /**
         * The server modification time in ISO 8601 UTC format.
         * @format date-time
         */
        modifiedAt: string | null;
        /** The provider cloud hash, or null when unavailable. */
        cloudMd5: string | null;
      };
    };
  }
}
