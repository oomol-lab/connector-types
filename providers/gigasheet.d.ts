import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Describe one Gigasheet dataset, including status and file metadata. */
    "gigasheet.describe_dataset": {
      input: {
        /**
         * The dataset handle to describe.
         * @minLength 1
         */
        handle: string;
      };
      output: {
        /** The dataset metadata returned by Gigasheet. */
        metadata: {
          /** The internal ClickHouse node identifier. */
          ClickhouseNode?: number;
          /** Detailed metadata for known columns. */
          ColumnInfo?: Record<string, {
              /** Currency metadata for the column. */
              currency?: {
                /** The ISO 4217 currency code for the column. */
                code?: string;
                [key: string]: unknown;
              };
              /** Formula metadata for the column. */
              formula?: {
                /** The original formula expression stored on the column. */
                literal?: string;
                /** The resolved formula expression returned by Gigasheet. */
                resolved?: string;
                [key: string]: unknown;
              };
              [key: string]: unknown;
            }>;
          /** Comment metadata stored on the dataset. */
          Comments?: Record<string, unknown>;
          /** When the dataset was created. */
          CreatedAt?: string;
          /** When the dataset was most recently marked as deleted. */
          DeletedAt?: string;
          /** The dataset deletion state code. */
          Deleting?: number;
          /** The legacy detailed status string returned by Gigasheet. */
          DetailedStatus?: string;
          /** Additional dataset details returned by Gigasheet. */
          Details?: Record<string, unknown>;
          /** Example analyses suggested for the dataset. */
          ExampleAnalyses?: Array<string>;
          /** The detected data types for dataset columns. */
          FieldsTypes?: Array<string>;
          /** The dataset or file name. */
          FileName?: string;
          /** The number of rows in the dataset. */
          FileRows?: number;
          /** The file size string returned by Gigasheet. */
          FileSize?: string;
          /** The dataset handle returned by Gigasheet. */
          FileUuid?: string;
          /** The mapping from header names to Gigasheet column identifiers. */
          HeaderToColumnMapping?: Record<string, unknown>;
          /** The dataset headers returned by Gigasheet. */
          Headers?: Array<string>;
          /** Whether the entry is a directory. */
          IsDirectory?: boolean;
          /** When the entry was last accessed. */
          LastAccessed?: string;
          /** When the entry was last updated. */
          LastUpdated?: string;
          /** The note stored on the file. */
          Note?: string;
          /** The operation status payload returned for background jobs. */
          OperationStatus?: Record<string, unknown>;
          /** The owner identifier for the file. */
          Owner?: string;
          /** The parent directory handle. */
          ParentDirectory?: string;
          /** The parser used to process the dataset. */
          ParserUsed?: string;
          /** The source type recorded for the dataset. */
          Source?: string;
          /** The dataset processing status. */
          Status?: "uploading" | "loading" | "processing" | "processed" | "error";
          /** The status details payload returned by Gigasheet. */
          StatusDetails?: Record<string, unknown>;
          /** Threat detection status metadata returned by Gigasheet. */
          ThreatDetectionStatus?: Record<string, unknown>;
          /** The numeric file type code returned by Gigasheet. */
          Type?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Get the current enrichment credit usage for the authenticated Gigasheet user. */
    "gigasheet.get_enrichment_credits": {
      input: Record<string, never>;
      output: {
        /** The enrichment credit usage returned by Gigasheet. */
        credits: {
          /** The total enrichment credit limit. */
          Limit?: number;
          /** The number of enrichment credits already used. */
          Used?: number;
          [key: string]: unknown;
        };
      };
    };
    /** Return the parent directory chain for one Gigasheet file or folder handle. */
    "gigasheet.get_library_path": {
      input: {
        /**
         * The file or folder handle whose parent path should be returned.
         * @minLength 1
         */
        handle: string;
      };
      output: {
        /** The ordered path entries returned by Gigasheet. */
        path: Array<{
          /** The file metadata returned by Gigasheet. */
          metadata?: {
            /** The internal ClickHouse node identifier. */
            ClickhouseNode?: number;
            /** Detailed metadata for known columns. */
            ColumnInfo?: Record<string, {
                /** Currency metadata for the column. */
                currency?: {
                  /** The ISO 4217 currency code for the column. */
                  code?: string;
                  [key: string]: unknown;
                };
                /** Formula metadata for the column. */
                formula?: {
                  /** The original formula expression stored on the column. */
                  literal?: string;
                  /** The resolved formula expression returned by Gigasheet. */
                  resolved?: string;
                  [key: string]: unknown;
                };
                [key: string]: unknown;
              }>;
            /** Comment metadata stored on the dataset. */
            Comments?: Record<string, unknown>;
            /** When the dataset was created. */
            CreatedAt?: string;
            /** When the dataset was most recently marked as deleted. */
            DeletedAt?: string;
            /** The dataset deletion state code. */
            Deleting?: number;
            /** The legacy detailed status string returned by Gigasheet. */
            DetailedStatus?: string;
            /** Additional dataset details returned by Gigasheet. */
            Details?: Record<string, unknown>;
            /** Example analyses suggested for the dataset. */
            ExampleAnalyses?: Array<string>;
            /** The detected data types for dataset columns. */
            FieldsTypes?: Array<string>;
            /** The dataset or file name. */
            FileName?: string;
            /** The number of rows in the dataset. */
            FileRows?: number;
            /** The file size string returned by Gigasheet. */
            FileSize?: string;
            /** The dataset handle returned by Gigasheet. */
            FileUuid?: string;
            /** The mapping from header names to Gigasheet column identifiers. */
            HeaderToColumnMapping?: Record<string, unknown>;
            /** The dataset headers returned by Gigasheet. */
            Headers?: Array<string>;
            /** Whether the entry is a directory. */
            IsDirectory?: boolean;
            /** When the entry was last accessed. */
            LastAccessed?: string;
            /** When the entry was last updated. */
            LastUpdated?: string;
            /** The note stored on the file. */
            Note?: string;
            /** The operation status payload returned for background jobs. */
            OperationStatus?: Record<string, unknown>;
            /** The owner identifier for the file. */
            Owner?: string;
            /** The parent directory handle. */
            ParentDirectory?: string;
            /** The parser used to process the dataset. */
            ParserUsed?: string;
            /** The source type recorded for the dataset. */
            Source?: string;
            /** The dataset processing status. */
            Status?: "uploading" | "loading" | "processing" | "processed" | "error";
            /** The status details payload returned by Gigasheet. */
            StatusDetails?: Record<string, unknown>;
            /** Threat detection status metadata returned by Gigasheet. */
            ThreatDetectionStatus?: Record<string, unknown>;
            /** The numeric file type code returned by Gigasheet. */
            Type?: number;
            [key: string]: unknown;
          };
          /** Permissions granted on the file. */
          permissions?: Array<number>;
          /** Sharing settings returned for the file. */
          shared?: {
            /** Organization-wide permissions returned by Gigasheet. */
            organization?: Array<number>;
            /** Public share permissions returned by Gigasheet. */
            public?: Array<number>;
            /** Restricted share entries returned by Gigasheet. */
            restricted?: Array<{
              /** Permissions assigned to the user. */
              permissions?: Array<number>;
              /** The user identifier for the restricted share entry. */
              user_id?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Whether the file currently fits within the account quota. */
          within_quota?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get the current storage usage reported for the authenticated Gigasheet user. */
    "gigasheet.get_space_used": {
      input: Record<string, never>;
      output: {
        /** The amount of storage used by the current Gigasheet user. */
        space_used: number;
      };
    };
    /** List exports owned by the current Gigasheet user across all locations. */
    "gigasheet.list_exports": {
      input: {
        /**
         * The zero-based page number to request from Gigasheet.
         * @minimum 0
         */
        page?: number;
        /**
         * The number of export entries to return per page.
         * @minimum 1
         */
        pageSize?: number;
      };
      output: {
        /** The library entries returned by Gigasheet. */
        entries: Array<{
          /** The file metadata returned by Gigasheet. */
          metadata?: {
            /** The internal ClickHouse node identifier. */
            ClickhouseNode?: number;
            /** Detailed metadata for known columns. */
            ColumnInfo?: Record<string, {
                /** Currency metadata for the column. */
                currency?: {
                  /** The ISO 4217 currency code for the column. */
                  code?: string;
                  [key: string]: unknown;
                };
                /** Formula metadata for the column. */
                formula?: {
                  /** The original formula expression stored on the column. */
                  literal?: string;
                  /** The resolved formula expression returned by Gigasheet. */
                  resolved?: string;
                  [key: string]: unknown;
                };
                [key: string]: unknown;
              }>;
            /** Comment metadata stored on the dataset. */
            Comments?: Record<string, unknown>;
            /** When the dataset was created. */
            CreatedAt?: string;
            /** When the dataset was most recently marked as deleted. */
            DeletedAt?: string;
            /** The dataset deletion state code. */
            Deleting?: number;
            /** The legacy detailed status string returned by Gigasheet. */
            DetailedStatus?: string;
            /** Additional dataset details returned by Gigasheet. */
            Details?: Record<string, unknown>;
            /** Example analyses suggested for the dataset. */
            ExampleAnalyses?: Array<string>;
            /** The detected data types for dataset columns. */
            FieldsTypes?: Array<string>;
            /** The dataset or file name. */
            FileName?: string;
            /** The number of rows in the dataset. */
            FileRows?: number;
            /** The file size string returned by Gigasheet. */
            FileSize?: string;
            /** The dataset handle returned by Gigasheet. */
            FileUuid?: string;
            /** The mapping from header names to Gigasheet column identifiers. */
            HeaderToColumnMapping?: Record<string, unknown>;
            /** The dataset headers returned by Gigasheet. */
            Headers?: Array<string>;
            /** Whether the entry is a directory. */
            IsDirectory?: boolean;
            /** When the entry was last accessed. */
            LastAccessed?: string;
            /** When the entry was last updated. */
            LastUpdated?: string;
            /** The note stored on the file. */
            Note?: string;
            /** The operation status payload returned for background jobs. */
            OperationStatus?: Record<string, unknown>;
            /** The owner identifier for the file. */
            Owner?: string;
            /** The parent directory handle. */
            ParentDirectory?: string;
            /** The parser used to process the dataset. */
            ParserUsed?: string;
            /** The source type recorded for the dataset. */
            Source?: string;
            /** The dataset processing status. */
            Status?: "uploading" | "loading" | "processing" | "processed" | "error";
            /** The status details payload returned by Gigasheet. */
            StatusDetails?: Record<string, unknown>;
            /** Threat detection status metadata returned by Gigasheet. */
            ThreatDetectionStatus?: Record<string, unknown>;
            /** The numeric file type code returned by Gigasheet. */
            Type?: number;
            [key: string]: unknown;
          };
          /** Permissions granted on the file. */
          permissions?: Array<number>;
          /** Sharing settings returned for the file. */
          shared?: {
            /** Organization-wide permissions returned by Gigasheet. */
            organization?: Array<number>;
            /** Public share permissions returned by Gigasheet. */
            public?: Array<number>;
            /** Restricted share entries returned by Gigasheet. */
            restricted?: Array<{
              /** Permissions assigned to the user. */
              permissions?: Array<number>;
              /** The user identifier for the restricted share entry. */
              user_id?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Whether the file currently fits within the account quota. */
          within_quota?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the suggested recent files shown on the Gigasheet home page. */
    "gigasheet.list_home_files": {
      input: Record<string, never>;
      output: {
        /** The library entries returned by Gigasheet. */
        entries: Array<{
          /** The file metadata returned by Gigasheet. */
          metadata?: {
            /** The internal ClickHouse node identifier. */
            ClickhouseNode?: number;
            /** Detailed metadata for known columns. */
            ColumnInfo?: Record<string, {
                /** Currency metadata for the column. */
                currency?: {
                  /** The ISO 4217 currency code for the column. */
                  code?: string;
                  [key: string]: unknown;
                };
                /** Formula metadata for the column. */
                formula?: {
                  /** The original formula expression stored on the column. */
                  literal?: string;
                  /** The resolved formula expression returned by Gigasheet. */
                  resolved?: string;
                  [key: string]: unknown;
                };
                [key: string]: unknown;
              }>;
            /** Comment metadata stored on the dataset. */
            Comments?: Record<string, unknown>;
            /** When the dataset was created. */
            CreatedAt?: string;
            /** When the dataset was most recently marked as deleted. */
            DeletedAt?: string;
            /** The dataset deletion state code. */
            Deleting?: number;
            /** The legacy detailed status string returned by Gigasheet. */
            DetailedStatus?: string;
            /** Additional dataset details returned by Gigasheet. */
            Details?: Record<string, unknown>;
            /** Example analyses suggested for the dataset. */
            ExampleAnalyses?: Array<string>;
            /** The detected data types for dataset columns. */
            FieldsTypes?: Array<string>;
            /** The dataset or file name. */
            FileName?: string;
            /** The number of rows in the dataset. */
            FileRows?: number;
            /** The file size string returned by Gigasheet. */
            FileSize?: string;
            /** The dataset handle returned by Gigasheet. */
            FileUuid?: string;
            /** The mapping from header names to Gigasheet column identifiers. */
            HeaderToColumnMapping?: Record<string, unknown>;
            /** The dataset headers returned by Gigasheet. */
            Headers?: Array<string>;
            /** Whether the entry is a directory. */
            IsDirectory?: boolean;
            /** When the entry was last accessed. */
            LastAccessed?: string;
            /** When the entry was last updated. */
            LastUpdated?: string;
            /** The note stored on the file. */
            Note?: string;
            /** The operation status payload returned for background jobs. */
            OperationStatus?: Record<string, unknown>;
            /** The owner identifier for the file. */
            Owner?: string;
            /** The parent directory handle. */
            ParentDirectory?: string;
            /** The parser used to process the dataset. */
            ParserUsed?: string;
            /** The source type recorded for the dataset. */
            Source?: string;
            /** The dataset processing status. */
            Status?: "uploading" | "loading" | "processing" | "processed" | "error";
            /** The status details payload returned by Gigasheet. */
            StatusDetails?: Record<string, unknown>;
            /** Threat detection status metadata returned by Gigasheet. */
            ThreatDetectionStatus?: Record<string, unknown>;
            /** The numeric file type code returned by Gigasheet. */
            Type?: number;
            [key: string]: unknown;
          };
          /** Permissions granted on the file. */
          permissions?: Array<number>;
          /** Sharing settings returned for the file. */
          shared?: {
            /** Organization-wide permissions returned by Gigasheet. */
            organization?: Array<number>;
            /** Public share permissions returned by Gigasheet. */
            public?: Array<number>;
            /** Restricted share entries returned by Gigasheet. */
            restricted?: Array<{
              /** Permissions assigned to the user. */
              permissions?: Array<number>;
              /** The user identifier for the restricted share entry. */
              user_id?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Whether the file currently fits within the account quota. */
          within_quota?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search Gigasheet library metadata without reading file contents. */
    "gigasheet.search_library": {
      input: {
        /**
         * The search text used to match file metadata in Gigasheet.
         * @minLength 1
         */
        searchTerm: string;
        /**
         * The metadata fields to search. When omitted, Gigasheet searches owner, file_name, headers, and note.
         * @minItems 1
         */
        fields?: Array<string>;
      };
      output: {
        /** The library entries returned by Gigasheet. */
        entries: Array<{
          /** The file metadata returned by Gigasheet. */
          metadata?: {
            /** The internal ClickHouse node identifier. */
            ClickhouseNode?: number;
            /** Detailed metadata for known columns. */
            ColumnInfo?: Record<string, {
                /** Currency metadata for the column. */
                currency?: {
                  /** The ISO 4217 currency code for the column. */
                  code?: string;
                  [key: string]: unknown;
                };
                /** Formula metadata for the column. */
                formula?: {
                  /** The original formula expression stored on the column. */
                  literal?: string;
                  /** The resolved formula expression returned by Gigasheet. */
                  resolved?: string;
                  [key: string]: unknown;
                };
                [key: string]: unknown;
              }>;
            /** Comment metadata stored on the dataset. */
            Comments?: Record<string, unknown>;
            /** When the dataset was created. */
            CreatedAt?: string;
            /** When the dataset was most recently marked as deleted. */
            DeletedAt?: string;
            /** The dataset deletion state code. */
            Deleting?: number;
            /** The legacy detailed status string returned by Gigasheet. */
            DetailedStatus?: string;
            /** Additional dataset details returned by Gigasheet. */
            Details?: Record<string, unknown>;
            /** Example analyses suggested for the dataset. */
            ExampleAnalyses?: Array<string>;
            /** The detected data types for dataset columns. */
            FieldsTypes?: Array<string>;
            /** The dataset or file name. */
            FileName?: string;
            /** The number of rows in the dataset. */
            FileRows?: number;
            /** The file size string returned by Gigasheet. */
            FileSize?: string;
            /** The dataset handle returned by Gigasheet. */
            FileUuid?: string;
            /** The mapping from header names to Gigasheet column identifiers. */
            HeaderToColumnMapping?: Record<string, unknown>;
            /** The dataset headers returned by Gigasheet. */
            Headers?: Array<string>;
            /** Whether the entry is a directory. */
            IsDirectory?: boolean;
            /** When the entry was last accessed. */
            LastAccessed?: string;
            /** When the entry was last updated. */
            LastUpdated?: string;
            /** The note stored on the file. */
            Note?: string;
            /** The operation status payload returned for background jobs. */
            OperationStatus?: Record<string, unknown>;
            /** The owner identifier for the file. */
            Owner?: string;
            /** The parent directory handle. */
            ParentDirectory?: string;
            /** The parser used to process the dataset. */
            ParserUsed?: string;
            /** The source type recorded for the dataset. */
            Source?: string;
            /** The dataset processing status. */
            Status?: "uploading" | "loading" | "processing" | "processed" | "error";
            /** The status details payload returned by Gigasheet. */
            StatusDetails?: Record<string, unknown>;
            /** Threat detection status metadata returned by Gigasheet. */
            ThreatDetectionStatus?: Record<string, unknown>;
            /** The numeric file type code returned by Gigasheet. */
            Type?: number;
            [key: string]: unknown;
          };
          /** Permissions granted on the file. */
          permissions?: Array<number>;
          /** Sharing settings returned for the file. */
          shared?: {
            /** Organization-wide permissions returned by Gigasheet. */
            organization?: Array<number>;
            /** Public share permissions returned by Gigasheet. */
            public?: Array<number>;
            /** Restricted share entries returned by Gigasheet. */
            restricted?: Array<{
              /** Permissions assigned to the user. */
              permissions?: Array<number>;
              /** The user identifier for the restricted share entry. */
              user_id?: string;
              [key: string]: unknown;
            }>;
            [key: string]: unknown;
          };
          /** Whether the file currently fits within the account quota. */
          within_quota?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
