import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a folder at a Files.com path. */
    "files_com.create_folder": {
      input: {
        /**
         * The Files.com folder path to create.
         * @minLength 1
         */
        path: string;
        /** Whether to create missing parent folders. */
        mkdirParents?: boolean;
      };
      output: {
        /** A Files.com file or folder entry. */
        file: {
          /** The full remote path for the Files.com entry. */
          path?: string;
          /** The display name of the Files.com entry. */
          display_name?: string;
          /** The Files.com entry type, such as file or directory. */
          type?: string;
          /** The entry size in bytes when returned by Files.com. */
          size?: number;
          /** The entry creation timestamp returned by Files.com. */
          created_at?: string;
          /** The entry modification timestamp returned by Files.com. */
          mtime?: string;
          /** The permissions string returned by Files.com for the entry. */
          permissions?: string;
          /** A temporary download URL when Files.com includes one. */
          download_uri?: string;
          /** Custom metadata attached to the Files.com entry. */
          custom_metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Files.com file or folder path. */
    "files_com.delete_file": {
      input: {
        /**
         * The Files.com remote path, such as folder/file.txt.
         * @minLength 1
         */
        path: string;
      };
      output: {
        /** Whether the Files.com delete request completed successfully. */
        deleted: boolean;
        /** The Files.com path that was deleted. */
        path: string;
        /** The raw Files.com object returned by the API. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve Files.com metadata for a single file or folder path. */
    "files_com.get_file": {
      input: {
        /**
         * The Files.com remote path, such as folder/file.txt.
         * @minLength 1
         */
        path: string;
      };
      output: {
        /** A Files.com file or folder entry. */
        file: {
          /** The full remote path for the Files.com entry. */
          path?: string;
          /** The display name of the Files.com entry. */
          display_name?: string;
          /** The Files.com entry type, such as file or directory. */
          type?: string;
          /** The entry size in bytes when returned by Files.com. */
          size?: number;
          /** The entry creation timestamp returned by Files.com. */
          created_at?: string;
          /** The entry modification timestamp returned by Files.com. */
          mtime?: string;
          /** The permissions string returned by Files.com for the entry. */
          permissions?: string;
          /** A temporary download URL when Files.com includes one. */
          download_uri?: string;
          /** Custom metadata attached to the Files.com entry. */
          custom_metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** List files and folders under a Files.com folder path. */
    "files_com.list_folder": {
      input: {
        /**
         * The Files.com folder path to list.
         * @minLength 1
         */
        path: string;
        /**
         * The page number to request.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * The number of entries to return per page.
         * @exclusiveMinimum 0
         */
        perPage?: number;
      };
      output: {
        /** The Files.com entries returned for the folder. */
        items: Array<{
          /** The full remote path for the Files.com entry. */
          path?: string;
          /** The display name of the Files.com entry. */
          display_name?: string;
          /** The Files.com entry type, such as file or directory. */
          type?: string;
          /** The entry size in bytes when returned by Files.com. */
          size?: number;
          /** The entry creation timestamp returned by Files.com. */
          created_at?: string;
          /** The entry modification timestamp returned by Files.com. */
          mtime?: string;
          /** The permissions string returned by Files.com for the entry. */
          permissions?: string;
          /** A temporary download URL when Files.com includes one. */
          download_uri?: string;
          /** Custom metadata attached to the Files.com entry. */
          custom_metadata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The requested page number. */
        page: number;
        /** The requested page size. */
        perPage: number;
        /** The raw Files.com list response. */
        raw: Array<Record<string, unknown>> | Record<string, unknown>;
      };
    };
    /** Update custom metadata for a Files.com file or folder path. */
    "files_com.update_metadata": {
      input: {
        /**
         * The Files.com file or folder path to update.
         * @minLength 1
         */
        path: string;
        /** Custom metadata key-value pairs to store on the file or folder. */
        customMetadata: Record<string, string>;
      };
      output: {
        /** A Files.com file or folder entry. */
        file: {
          /** The full remote path for the Files.com entry. */
          path?: string;
          /** The display name of the Files.com entry. */
          display_name?: string;
          /** The Files.com entry type, such as file or directory. */
          type?: string;
          /** The entry size in bytes when returned by Files.com. */
          size?: number;
          /** The entry creation timestamp returned by Files.com. */
          created_at?: string;
          /** The entry modification timestamp returned by Files.com. */
          mtime?: string;
          /** The permissions string returned by Files.com for the entry. */
          permissions?: string;
          /** A temporary download URL when Files.com includes one. */
          download_uri?: string;
          /** Custom metadata attached to the Files.com entry. */
          custom_metadata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
