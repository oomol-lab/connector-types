import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Synchronously copy one Baidu Netdisk file or folder. */
    "baidu_netdisk.copy": {
      input: {
        /**
         * The absolute source path.
         * @minLength 1
         */
        sourcePath: string;
        /**
         * The absolute destination directory path.
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
        conflictStrategy?: "fail" | "rename";
      };
      output: {
        /** The absolute source path supplied by the caller. */
        sourcePath: string;
        /** The resulting absolute path, or null when Baidu omits it. */
        path: string | null;
        /** The original successful MCP text response when it is not valid JSON, or null. */
        rawResponse: string | null;
      };
    };
    /** Create one folder at an absolute path below the user's Baidu Netdisk root. */
    "baidu_netdisk.create_folder": {
      input: {
        /**
         * The absolute folder path to create.
         * @minLength 1
         */
        path: string;
        /**
         * How Baidu Netdisk should handle a destination name conflict.
         * @default "fail"
         */
        conflictStrategy?: "fail" | "rename";
      };
      output: {
        /** The lossless Baidu Netdisk fs_id decimal string. */
        id: string;
        /** The file or folder name. */
        name: string;
        /** The absolute path below the user's Baidu Netdisk root. */
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
    /** Create one Baidu Netdisk share link for one or more files or folders. */
    "baidu_netdisk.create_share_link": {
      input: {
        /**
         * The file and folder IDs to include in the share.
         * @minItems 1
         */
        fileIds: Array<string>;
        /**
         * The share validity period in days.
         * @minimum 1
         * @default 7
         */
        periodDays?: number;
        /**
         * The four-character access code required to open the share link.
         * @minLength 4
         * @maxLength 4
         */
        accessCode: string;
      };
      output: {
        /**
         * The full Baidu Netdisk share URL.
         * @format uri
         */
        link: string;
        /**
         * The shortened Baidu Netdisk share URL, or the full URL when Baidu omits or returns an invalid short URL.
         * @format uri
         */
        shortUrl: string;
        /**
         * The share validity period in days.
         * @minimum 1
         */
        periodDays: number;
        /**
         * The four-character access code required to open the share link.
         * @minLength 4
         * @maxLength 4
         */
        accessCode: string;
      };
    };
    /** Create one UTF-8 text file through Baidu MCP. */
    "baidu_netdisk.create_text_file": {
      input: {
        /**
         * The absolute destination file path.
         * @minLength 1
         */
        path: string;
        /**
         * The UTF-8 text content accepted by Baidu MCP.
         * @maxLength 20000
         */
        content: string;
      };
      output: {
        /** The lossless Baidu Netdisk fs_id decimal string. */
        id: string;
        /** The file or folder name. */
        name: string;
        /** The absolute path below the user's Baidu Netdisk root. */
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
    /** Download one Baidu Netdisk file and upload it to connector transit storage. */
    "baidu_netdisk.download_file": {
      input: {
        /**
         * A lossless Baidu Netdisk fs_id decimal string.
         * @minLength 1
         */
        fsId: string;
      };
      output: {
        /**
         * A lossless Baidu Netdisk fs_id decimal string.
         * @minLength 1
         */
        fileId: string;
        /**
         * The original Baidu Netdisk file name.
         * @minLength 1
         */
        name: string;
        /**
         * The downloaded file MIME type.
         * @minLength 1
         */
        mimeType: string;
        /**
         * The file size reported by Baidu Netdisk.
         * @minimum 0
         */
        sizeBytes: number;
        /**
         * The temporary transit URL for downloading the file.
         * @format uri
         */
        transitUrl: string;
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
    /** List all files and folders, or only documents, images, or videos, from the user's Baidu Netdisk root. */
    "baidu_netdisk.list_files": {
      input: {
        /**
         * The absolute directory path to list.
         * @minLength 1
         * @default "/"
         */
        path?: string;
        /**
         * The one-based Baidu MCP result page.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * The file type to list through the matching Baidu MCP tool.
         * @default "all"
         */
        type?: "all" | "document" | "image" | "video";
      };
      output: {
        /** The files and folders in this page. */
        items: Array<{
          /** The lossless Baidu Netdisk fs_id decimal string. */
          id: string;
          /** The file or folder name. */
          name: string;
          /** The absolute path below the user's Baidu Netdisk root. */
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
        /** The one-based page that was returned. */
        page: number;
      };
    };
    /** Synchronously move one Baidu Netdisk file or folder. */
    "baidu_netdisk.move": {
      input: {
        /**
         * The absolute source path.
         * @minLength 1
         */
        sourcePath: string;
        /**
         * The absolute destination directory path.
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
        conflictStrategy?: "fail" | "rename";
      };
      output: {
        /** The absolute source path supplied by the caller. */
        sourcePath: string;
        /** The resulting absolute path, or null when Baidu omits it. */
        path: string | null;
        /** The original successful MCP text response when it is not valid JSON, or null. */
        rawResponse: string | null;
      };
    };
    /** Synchronously rename one Baidu Netdisk file or folder. */
    "baidu_netdisk.rename": {
      input: {
        /**
         * The absolute source path.
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
        conflictStrategy?: "fail" | "rename";
      };
      output: {
        /** The absolute source path supplied by the caller. */
        sourcePath: string;
        /** The resulting absolute path, or null when Baidu omits it. */
        path: string | null;
        /** The original successful MCP text response when it is not valid JSON, or null. */
        rawResponse: string | null;
      };
    };
    /** Search files and folders below an absolute Baidu Netdisk directory. */
    "baidu_netdisk.search_files": {
      input: {
        /**
         * The keyword to search for, up to 30 UTF-8 characters.
         * @minLength 1
         * @maxLength 30
         */
        query: string;
        /**
         * The absolute directory to search.
         * @minLength 1
         * @default "/"
         */
        path?: string;
        /**
         * The one-based Baidu MCP result page.
         * @minimum 1
         * @default 1
         */
        page?: number;
        /**
         * The number of matches requested from Baidu MCP.
         * @minimum 1
         * @maximum 500
         * @default 100
         */
        pageSize?: number;
      };
      output: {
        /** The normalized matching files and folders. */
        items: Array<{
          /** The lossless Baidu Netdisk fs_id decimal string. */
          id: string;
          /** The file or folder name. */
          name: string;
          /** The absolute path below the user's Baidu Netdisk root. */
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
        /** The one-based page that was returned. */
        page: number;
      };
    };
    /** Search Baidu Netdisk using a natural-language description. */
    "baidu_netdisk.semantic_search_files": {
      input: {
        /**
         * The natural-language description of files to find.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /**
         * The absolute directory to search.
         * @minLength 1
         * @default "/"
         */
        path?: string;
        /**
         * The maximum number of matches to return.
         * @minimum 1
         * @maximum 500
         * @default 100
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
          /** The absolute path below the user's Baidu Netdisk root. */
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
          /** The official Baidu recall source, or null when unavailable. */
          matchSource: "filename" | "image_ocr" | "document_text" | "document_semantic" | "video_semantic" | "audio_semantic" | "image_semantic" | "card" | null;
          /** The matched document, audio, or video passage. */
          matchedContent: string | null;
          /** The matched image OCR text, or null when unavailable. */
          ocrText: string | null;
          /** The lossless semantic passage ID, or null when unavailable. */
          passageId: string | null;
        }>;
        /** Whether Baidu reports that more matches may be available. */
        truncated: boolean;
      };
    };
    /** Ask Baidu Netdisk to fetch one public URL into an absolute destination path. */
    "baidu_netdisk.upload_file_from_url": {
      input: {
        /**
         * A public HTTP or HTTPS URL that Baidu Netdisk should fetch.
         * @format uri
         */
        fileUrl: string;
        /**
         * The absolute destination file path.
         * @minLength 1
         */
        destinationPath: string;
      };
      output: {
        /** The lossless Baidu Netdisk fs_id decimal string. */
        id: string;
        /** The file or folder name. */
        name: string;
        /** The absolute path below the user's Baidu Netdisk root. */
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
