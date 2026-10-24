import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Clone a file into the account. */
    "streamwish.clone_file": {
      input: {
        /**
         * File code.
         * @minLength 1
         */
        file_code: string;
        /** Optional title for the new file. */
        file_title?: string;
        /** Folder ID; 0 is the root folder. */
        fld_id?: number;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** Cloned file details. */
        result: {
          /** Public URL of the cloned file. */
          url?: string;
          /** Code of the cloned file. */
          filecode?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Create a folder. */
    "streamwish.create_folder": {
      input: {
        /**
         * New folder name.
         * @minLength 1
         */
        name: string;
        /** Folder ID; 0 is the root folder. */
        parent_id?: number;
        /** Folder description. */
        descr?: string;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** Created folder. */
        result: {
          /** Created folder ID. */
          fld_id: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Delete a file from the account. */
    "streamwish.delete_file": {
      input: {
        /**
         * File code.
         * @minLength 1
         */
        file_code: string;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        [key: string]: unknown;
      };
    };
    /** Update file metadata; omitted fields are not changed. */
    "streamwish.edit_file": {
      input: {
        /**
         * File code or comma-separated file codes.
         * @minLength 1
         */
        file_code: string;
        /** New file title. */
        file_title?: string;
        /** New file description. */
        file_descr?: string;
        /** Category ID. */
        cat_id?: number;
        /** Folder ID; 0 is the root folder. */
        file_fld_id?: number;
        /**
         * Public flag: 1 for public, 0 for private.
         * @minimum 0
         * @maximum 1
         */
        file_public?: number;
        /**
         * Adult flag: 1 for adult, 0 for safe.
         * @minimum 0
         * @maximum 1
         */
        file_adult?: number;
        /** Comma-separated file tags. */
        tags?: string;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** Upstream confirmation string, normally "true". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Update a folder; omitted fields are not changed. */
    "streamwish.edit_folder": {
      input: {
        /** Folder ID; 0 is the root folder. */
        fld_id: number;
        /** New folder name. */
        name?: string;
        /** Folder ID; 0 is the root folder. */
        parent_id?: number;
        /** Folder description. */
        descr?: string;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** Upstream confirmation string, normally "true". */
        result: string;
        [key: string]: unknown;
      };
    };
    /** Get account details and storage usage. */
    "streamwish.get_account": {
      input: Record<string, never>;
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** Account details. */
        result: {
          /** Account login name. */
          login?: string;
          /** Account email address. */
          email?: string;
          /** Total number of files. */
          files_total?: string;
          /** Used storage in bytes. */
          storage_used?: string;
          /** Account balance. */
          balance?: string;
          /** Remaining storage in bytes. */
          storage_left?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get daily account statistics. */
    "streamwish.get_account_stats": {
      input: {
        /** Number of days to return; upstream defaults to 7. */
        last?: number;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** Daily statistics. */
        result: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get direct video URLs and optional HLS manifest URL. */
    "streamwish.get_direct_link": {
      input: {
        /**
         * File code.
         * @minLength 1
         */
        file_code: string;
        /** Video quality: n, h, l or o. */
        q?: "n" | "h" | "l" | "o";
        /**
         * Request HLS manifest URL; requires the HLS module.
         * @minimum 0
         * @maximum 1
         */
        hls?: number;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** Video playback links. */
        result: {
          /** Available video versions. */
          versions?: Array<{
            /** Direct video URL. */
            url?: string;
            /** Video quality name. */
            name?: string;
            /** Video size in bytes. */
            size?: string;
            [key: string]: unknown;
          }>;
          /** Video duration in seconds. */
          file_length?: string;
          /** Player image URL. */
          player_img?: string;
          /** HLS manifest URL when requested and available. */
          hls_direct?: string;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get metadata for one or more files, including per-file status. */
    "streamwish.get_file_info": {
      input: {
        /**
         * File code or comma-separated file codes.
         * @minLength 1
         */
        file_code: string;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** Files in this result. */
        result: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List files with filters and page-based pagination. */
    "streamwish.list_files": {
      input: {
        /** Folder ID; 0 is the root folder. */
        fld_id?: number;
        /** Filter by video title. */
        title?: string;
        /** Return videos uploaded after this timestamp, or a number of minutes ago. */
        created?: string;
        /**
         * Filter by public (1) or private (0) videos; omit for all.
         * @minimum 0
         * @maximum 1
         */
        public?: number;
        /**
         * Filter by adult (1) or safe (0) videos; omit for all.
         * @minimum 0
         * @maximum 1
         */
        adult?: number;
        /**
         * Results per page.
         * @minimum 1
         */
        per_page?: number;
        /**
         * Page number, starting at 1.
         * @minimum 1
         */
        page?: number;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** File list and pagination metadata. */
        result: {
          /** Files in this result. */
          files: Array<Record<string, unknown>>;
          /** Total matching files. */
          results_total?: number;
          /** Total pages. */
          pages?: number;
          /** Files returned on this page. */
          results?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** List child folders and optionally their files. */
    "streamwish.list_folders": {
      input: {
        /** Parent folder ID; defaults to 0 (root). */
        fld_id?: number;
        /**
         * Include files in the folder when set to 1.
         * @minimum 0
         * @maximum 1
         */
        files?: number;
      };
      output: {
        /** Response message. */
        msg?: string;
        /** Upstream status code; 200 indicates success. */
        status: number;
        /** Server timestamp. */
        server_time?: string;
        /** Child folders and optional files. */
        result: {
          /** Child folders. */
          folders: Array<{
            /** Folder ID. */
            fld_id?: string;
            /** Folder name. */
            name?: string;
            /** Folder public code. */
            code?: string;
            [key: string]: unknown;
          }>;
          /** Files in this result. */
          files?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
  }
}
