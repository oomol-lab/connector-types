import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete all stored output files belonging to one command. */
    "rendi.delete_command_files": {
      input: {
        /**
         * The Rendi command ID.
         * @minLength 1
         */
        command_id: string;
      };
      output: {
        /** Whether deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Delete one stored file from Rendi storage. */
    "rendi.delete_file": {
      input: {
        /**
         * The Rendi file ID.
         * @minLength 1
         */
        file_id: string;
      };
      output: {
        /** Whether deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Delete up to 1000 stored files. Output manifest files cannot be deleted with this endpoint; use delete_command_files for those outputs. */
    "rendi.delete_files": {
      input: {
        /**
         * File IDs to delete.
         * @minItems 1
         * @maxItems 1000
         */
        file_ids: Array<string>;
      };
      output: {
        /** File IDs successfully deleted. */
        deleted_file_ids: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get a regular or chained FFmpeg command status and output files, optionally with signed private download URLs. */
    "rendi.get_command": {
      input: {
        /**
         * The Rendi command ID.
         * @minLength 1
         */
        command_id: string;
        /**
         * Lifetime in seconds for private output download URLs, up to seven days.
         * @minimum 0
         * @maximum 604800
         */
        presigned_ttl_seconds?: number;
      };
      output: {
        /**
         * The Rendi command ID.
         * @minLength 1
         */
        command_id: string;
        /** Command status: QUEUED, PROCESSING, PREPARED_FFMPEG_COMMAND, SUCCESS or FAILED. */
        status: string;
        /** Output aliases mapped to stored files; folder outputs use OUTPUT_FOLDER. */
        output_files?: Record<string, {
            /**
             * The Rendi file ID.
             * @minLength 1
             */
            file_id: string;
            /** File status, including QUEUED, DOWNLOADING, DOWNLOADED, UPLOADED, STORED or FAILED. */
            status?: string | null;
            /** Download URL; may be signed, unavailable or null for deleted files. */
            storage_url?: string | null;
            /** Original file URL or uploaded file name. */
            original_file_url?: string | null;
            /** Whether this file uses private storage. */
            is_private?: boolean | null;
            /** Whether this file has been deleted. */
            is_deleted?: boolean | null;
            /** File processing error code. */
            error_status?: string | null;
            /** File processing error details. */
            external_error_message?: string | null;
            [key: string]: unknown;
          }> | null;
        /** The original command request. */
        original_request?: Record<string, unknown>;
        /** Command processing error code. */
        error_status?: string | null;
        /** Command processing error details. */
        error_message?: string | null;
        [key: string]: unknown;
      };
    };
    /** Get a stored file or command output with FFprobe metadata. Deleted files retain metadata with a null storage_url; private files can return signed download URLs. */
    "rendi.get_file": {
      input: {
        /**
         * The Rendi file ID.
         * @minLength 1
         */
        file_id: string;
        /**
         * Lifetime in seconds for a private file download URL, up to seven days.
         * @minimum 1
         * @maximum 604800
         */
        presigned_ttl_seconds?: number;
      };
      output: {
        /**
         * The Rendi file ID.
         * @minLength 1
         */
        file_id: string;
        /** File status, including QUEUED, DOWNLOADING, DOWNLOADED, UPLOADED, STORED or FAILED. */
        status?: string | null;
        /** Download URL; may be signed, unavailable or null for deleted files. */
        storage_url?: string | null;
        /** Original file URL or uploaded file name. */
        original_file_url?: string | null;
        /** Whether this file uses private storage. */
        is_private?: boolean | null;
        /** Whether this file has been deleted. */
        is_deleted?: boolean | null;
        /** File processing error code. */
        error_status?: string | null;
        /** File processing error details. */
        external_error_message?: string | null;
        [key: string]: unknown;
      };
    };
    /** List FFmpeg commands newest first, with status and processing metrics. Use get_command for output files. */
    "rendi.list_commands": {
      input: {
        /**
         * Maximum items to return; Rendi defaults to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of items to skip; Rendi defaults to 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Commands in this page. */
        commands: Array<{
          /**
           * The Rendi command ID.
           * @minLength 1
           */
          command_id: string;
          /** Current command status. */
          status: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List stored and command output files newest first, excluding deleted and input files. */
    "rendi.list_files": {
      input: {
        /**
         * Maximum items to return; Rendi defaults to 1000.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * Number of items to skip; Rendi defaults to 0.
         * @minimum 0
         */
        offset?: number;
      };
      output: {
        /** Files in this page. */
        files: Array<{
          /**
           * The Rendi file ID.
           * @minLength 1
           */
          file_id: string;
          /** File status, including QUEUED, DOWNLOADING, DOWNLOADED, UPLOADED, STORED or FAILED. */
          status?: string | null;
          /** Download URL; may be signed, unavailable or null for deleted files. */
          storage_url?: string | null;
          /** Original file URL or uploaded file name. */
          original_file_url?: string | null;
          /** Whether this file uses private storage. */
          is_private?: boolean | null;
          /** Whether this file has been deleted. */
          is_deleted?: boolean | null;
          /** File processing error code. */
          error_status?: string | null;
          /** File processing error details. */
          external_error_message?: string | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Submit up to 10 sequential FFmpeg commands sharing files. A later command can read an earlier output with -i {{out_alias}}. Retrieve outputs with get_command. */
    "rendi.run_chained_ffmpeg_commands": {
      input: {
        /** Input aliases starting with in_ mapped to publicly accessible media URLs. URLs must end in a file name. */
        input_files: Record<string, string>;
        /** Output aliases starting with out_ mapped to output file names. */
        output_files: Record<string, string>;
        /**
         * Ordered FFmpeg argument strings without the ffmpeg executable.
         * @minItems 1
         * @maxItems 10
         */
        ffmpeg_commands: Array<string>;
        /**
         * Maximum runtime per FFmpeg command in seconds; Rendi defaults to 300.
         * @exclusiveMinimum 0
         */
        max_command_run_seconds?: number;
        /**
         * Virtual CPUs per command; Rendi defaults to 8, subject to account limits.
         * @minimum 1
         */
        vcpu_count?: number;
        /** Up to 10 tracking entries; keys and string values have a maximum of 512 characters. */
        metadata?: Record<string, string | number | boolean>;
        /** Store files privately; requires a paid plan. Request presigned_ttl_seconds when retrieving private files. */
        is_private?: boolean;
      };
      output: {
        /**
         * The Rendi command ID.
         * @minLength 1
         */
        command_id: string;
        [key: string]: unknown;
      };
    };
    /** Submit an FFmpeg command with media URLs or a ZIP URL. Use {{in_alias}} and {{out_alias}} placeholders; omit the ffmpeg executable. Retrieve outputs with get_command. */
    "rendi.run_ffmpeg_command": {
      input: {
        /** Input aliases starting with in_ mapped to publicly accessible media URLs. URLs must end in a file name. */
        input_files?: Record<string, string>;
        /**
         * Public ZIP URL containing all input files; mutually exclusive with input_files.
         * @minLength 1
         */
        input_compressed_folder?: string;
        /** Output file aliases or OUTPUT_FOLDER for a ZIP of dynamic outputs. */
        output_files: Record<string, string> | "OUTPUT_FOLDER";
        /**
         * FFmpeg arguments using {{alias}} placeholders, without the ffmpeg executable.
         * @minLength 1
         */
        ffmpeg_command: string;
        /**
         * Maximum runtime per FFmpeg command in seconds; Rendi defaults to 300.
         * @exclusiveMinimum 0
         */
        max_command_run_seconds?: number;
        /**
         * Virtual CPUs per command; Rendi defaults to 8, subject to account limits.
         * @minimum 1
         */
        vcpu_count?: number;
        /** Up to 10 tracking entries; keys and string values have a maximum of 512 characters. */
        metadata?: Record<string, string | number | boolean>;
        /** Store files privately; requires a paid plan. Request presigned_ttl_seconds when retrieving private files. */
        is_private?: boolean;
      };
      output: {
        /**
         * The Rendi command ID.
         * @minLength 1
         */
        command_id: string;
        [key: string]: unknown;
      };
    };
    /** Ask Rendi to download a media URL, analyze it with FFprobe and store it. Retrieve its metadata and download URL with get_file. */
    "rendi.store_file": {
      input: {
        /**
         * Publicly accessible media URL for Rendi to download.
         * @minLength 1
         */
        file_url: string;
        /** Store files privately; requires a paid plan. Request presigned_ttl_seconds when retrieving private files. */
        is_private?: boolean;
      };
      output: {
        /**
         * The Rendi file ID.
         * @minLength 1
         */
        file_id: string;
        [key: string]: unknown;
      };
    };
  }
}
