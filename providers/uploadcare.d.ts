import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Remove an Uploadcare file from storage by UUID. */
    "uploadcare.delete_file": {
      input: {
        /**
         * The Uploadcare file UUID.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /** An Uploadcare file object returned by the REST API. */
        file: {
          /**
           * The file UUID.
           * @format uuid
           */
          uuid?: string;
          /**
           * The date and time when the file was uploaded.
           * @format date-time
           */
          datetime_uploaded?: string;
          /**
           * The date and time when the file was stored.
           * @format date-time
           */
          datetime_stored?: string | null;
          /**
           * The date and time when the file was removed.
           * @format date-time
           */
          datetime_removed?: string | null;
          /**
           * The original file CDN URL returned by Uploadcare.
           * @format uri
           */
          original_file_url?: string | null;
          /**
           * The API resource URL returned by Uploadcare.
           * @format uri
           */
          url?: string;
          /** The MIME type returned by Uploadcare. */
          mime_type?: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          size?: number;
          /** Whether Uploadcare identified the file as an image. */
          is_image?: boolean;
          /** Whether the file is ready for delivery. */
          is_ready?: boolean;
          /** User-defined Uploadcare file metadata. */
          metadata?: Record<string, unknown>;
          /** Uploadcare add-on application data attached to the file. */
          appdata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get Uploadcare file metadata by UUID. */
    "uploadcare.get_file_info": {
      input: {
        /**
         * The Uploadcare file UUID.
         * @format uuid
         */
        uuid: string;
        /** Additional Uploadcare fields to include, such as appdata. */
        include?: string;
      };
      output: {
        /** An Uploadcare file object returned by the REST API. */
        file: {
          /**
           * The file UUID.
           * @format uuid
           */
          uuid?: string;
          /**
           * The date and time when the file was uploaded.
           * @format date-time
           */
          datetime_uploaded?: string;
          /**
           * The date and time when the file was stored.
           * @format date-time
           */
          datetime_stored?: string | null;
          /**
           * The date and time when the file was removed.
           * @format date-time
           */
          datetime_removed?: string | null;
          /**
           * The original file CDN URL returned by Uploadcare.
           * @format uri
           */
          original_file_url?: string | null;
          /**
           * The API resource URL returned by Uploadcare.
           * @format uri
           */
          url?: string;
          /** The MIME type returned by Uploadcare. */
          mime_type?: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          size?: number;
          /** Whether Uploadcare identified the file as an image. */
          is_image?: boolean;
          /** Whether the file is ready for delivery. */
          is_ready?: boolean;
          /** User-defined Uploadcare file metadata. */
          metadata?: Record<string, unknown>;
          /** Uploadcare add-on application data attached to the file. */
          appdata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Get an Uploadcare file group by its group ID. */
    "uploadcare.get_group_info": {
      input: {
        /**
         * The Uploadcare group ID, for example a UUID followed by ~ and size.
         * @minLength 1
         */
        uuid: string;
      };
      output: {
        /** An Uploadcare group object with file entries. */
        group: {
          /** The Uploadcare group identifier. */
          id?: string;
          /**
           * The date and time when the group was created.
           * @format date-time
           */
          datetime_created?: string;
          /**
           * The number of files in the group.
           * @minimum 0
           */
          files_count?: number;
          /**
           * The group CDN URL returned by Uploadcare.
           * @format uri
           */
          cdn_url?: string;
          /**
           * The group API resource URL returned by Uploadcare.
           * @format uri
           */
          url?: string;
          /** The files in the group. Removed files may be returned as null entries. */
          files?: Array<{
            /**
             * The file UUID.
             * @format uuid
             */
            uuid?: string;
            /**
             * The date and time when the file was uploaded.
             * @format date-time
             */
            datetime_uploaded?: string;
            /**
             * The date and time when the file was stored.
             * @format date-time
             */
            datetime_stored?: string | null;
            /**
             * The date and time when the file was removed.
             * @format date-time
             */
            datetime_removed?: string | null;
            /**
             * The original file CDN URL returned by Uploadcare.
             * @format uri
             */
            original_file_url?: string | null;
            /**
             * The API resource URL returned by Uploadcare.
             * @format uri
             */
            url?: string;
            /** The MIME type returned by Uploadcare. */
            mime_type?: string;
            /**
             * The file size in bytes.
             * @minimum 0
             */
            size?: number;
            /** Whether Uploadcare identified the file as an image. */
            is_image?: boolean;
            /** Whether the file is ready for delivery. */
            is_ready?: boolean;
            /** User-defined Uploadcare file metadata. */
            metadata?: Record<string, unknown>;
            /** Uploadcare add-on application data attached to the file. */
            appdata?: Record<string, unknown>;
            [key: string]: unknown;
          } | null> | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get Uploadcare project details for the connected public key. */
    "uploadcare.get_project_info": {
      input: Record<string, never>;
      output: {
        /** The Uploadcare project details. */
        project: {
          /** The project collaborators returned by Uploadcare. */
          collaborators?: Array<{
            /**
             * The collaborator email address.
             * @format email
             */
            email: string;
            /** The collaborator name. */
            name: string;
          }> | null;
          /** The Uploadcare project login name. */
          name?: string;
          /** The Uploadcare project public key. */
          pub_key?: string;
          /** Whether Uploadcare auto file storing is enabled. */
          autostore_enabled?: boolean;
          [key: string]: unknown;
        };
      };
    };
    /** List Uploadcare files with documented pagination and filters. */
    "uploadcare.list_files": {
      input: {
        /** Whether to include only removed files. */
        removed?: boolean;
        /** Whether to include only stored or temporary files. */
        stored?: boolean;
        /**
         * The preferred number of files to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The file sort order. */
        ordering?: "datetime_uploaded" | "-datetime_uploaded";
        /**
         * The ISO 8601 date-time cursor to start listing files from.
         * @format date-time
         */
        from?: string;
        /** Additional Uploadcare fields to include, such as appdata. */
        include?: string;
      };
      output: {
        /**
         * A pagination URL returned by Uploadcare.
         * @format uri
         */
        next?: string | null;
        /**
         * A pagination URL returned by Uploadcare.
         * @format uri
         */
        previous?: string | null;
        /**
         * The total number of files for the current query.
         * @minimum 0
         */
        total?: number;
        /** Uploadcare file totals grouped by storage/removal state. */
        totals?: {
          /**
           * The number of removed files.
           * @minimum 0
           */
          removed?: number;
          /**
           * The number of stored files.
           * @minimum 0
           */
          stored?: number;
          /**
           * The number of unstored files.
           * @minimum 0
           */
          unstored?: number;
          [key: string]: unknown;
        };
        /**
         * The number of files returned per page.
         * @minimum 0
         */
        per_page?: number;
        /** The Uploadcare files returned for this page. */
        results: Array<{
          /**
           * The file UUID.
           * @format uuid
           */
          uuid?: string;
          /**
           * The date and time when the file was uploaded.
           * @format date-time
           */
          datetime_uploaded?: string;
          /**
           * The date and time when the file was stored.
           * @format date-time
           */
          datetime_stored?: string | null;
          /**
           * The date and time when the file was removed.
           * @format date-time
           */
          datetime_removed?: string | null;
          /**
           * The original file CDN URL returned by Uploadcare.
           * @format uri
           */
          original_file_url?: string | null;
          /**
           * The API resource URL returned by Uploadcare.
           * @format uri
           */
          url?: string;
          /** The MIME type returned by Uploadcare. */
          mime_type?: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          size?: number;
          /** Whether Uploadcare identified the file as an image. */
          is_image?: boolean;
          /** Whether the file is ready for delivery. */
          is_ready?: boolean;
          /** User-defined Uploadcare file metadata. */
          metadata?: Record<string, unknown>;
          /** Uploadcare add-on application data attached to the file. */
          appdata?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Uploadcare file groups with documented pagination. */
    "uploadcare.list_groups": {
      input: {
        /**
         * The preferred number of groups to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /**
         * The ISO 8601 date-time cursor to start listing groups from.
         * @format date-time
         */
        from?: string;
        /** The group sort order. */
        ordering?: "datetime_created" | "-datetime_created";
      };
      output: {
        /**
         * A pagination URL returned by Uploadcare.
         * @format uri
         */
        next?: string | null;
        /**
         * A pagination URL returned by Uploadcare.
         * @format uri
         */
        previous?: string | null;
        /**
         * The total number of groups in the project.
         * @minimum 0
         */
        total?: number;
        /**
         * The number of groups returned per page.
         * @minimum 0
         */
        per_page?: number;
        /** The Uploadcare groups returned for this page. */
        results: Array<{
          /** The Uploadcare group identifier. */
          id?: string;
          /**
           * The date and time when the group was created.
           * @format date-time
           */
          datetime_created?: string;
          /**
           * The number of files in the group.
           * @minimum 0
           */
          files_count?: number;
          /**
           * The group CDN URL returned by Uploadcare.
           * @format uri
           */
          cdn_url?: string;
          /**
           * The group API resource URL returned by Uploadcare.
           * @format uri
           */
          url?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Mark an Uploadcare file as permanently stored. */
    "uploadcare.store_file": {
      input: {
        /**
         * The Uploadcare file UUID.
         * @format uuid
         */
        uuid: string;
      };
      output: {
        /** An Uploadcare file object returned by the REST API. */
        file: {
          /**
           * The file UUID.
           * @format uuid
           */
          uuid?: string;
          /**
           * The date and time when the file was uploaded.
           * @format date-time
           */
          datetime_uploaded?: string;
          /**
           * The date and time when the file was stored.
           * @format date-time
           */
          datetime_stored?: string | null;
          /**
           * The date and time when the file was removed.
           * @format date-time
           */
          datetime_removed?: string | null;
          /**
           * The original file CDN URL returned by Uploadcare.
           * @format uri
           */
          original_file_url?: string | null;
          /**
           * The API resource URL returned by Uploadcare.
           * @format uri
           */
          url?: string;
          /** The MIME type returned by Uploadcare. */
          mime_type?: string;
          /**
           * The file size in bytes.
           * @minimum 0
           */
          size?: number;
          /** Whether Uploadcare identified the file as an image. */
          is_image?: boolean;
          /** Whether the file is ready for delivery. */
          is_ready?: boolean;
          /** User-defined Uploadcare file metadata. */
          metadata?: Record<string, unknown>;
          /** Uploadcare add-on application data attached to the file. */
          appdata?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
  }
}
