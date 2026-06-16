import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a folder in OneDrive. */
    "one_drive.create_folder": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Folder name.
         * @minLength 1
         */
        name: string;
        /**
         * OneDrive folder item ID.
         * @minLength 1
         */
        parentItemId?: string;
        /**
         * Path from the drive root, starting with /.
         * @minLength 1
         */
        parentPath?: string;
        /** Conflict behavior used when a folder with the same name already exists. */
        conflictBehavior?: "rename" | "fail" | "replace";
      };
      output: {
        /** Drive item ID. */
        id: string;
        /** Drive item name. */
        name: string;
        /** Web URL for the drive item. */
        webUrl?: string;
        /** User-visible description for the drive item. */
        description?: string;
        /** Content tag for the drive item. */
        cTag?: string;
        /** Entity tag for the drive item. */
        eTag?: string;
        /** Size of the drive item in bytes. */
        size?: number;
        /** Creation timestamp for the drive item. */
        createdDateTime?: string;
        /** Last modification timestamp for the drive item. */
        lastModifiedDateTime?: string;
        /** Creator information for the drive item. */
        createdBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Last modifier information for the drive item. */
        lastModifiedBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Parent reference for the drive item. */
        parentReference?: {
          /** Drive ID of the referenced item. */
          driveId?: string;
          /** Drive item ID of the referenced item. */
          id?: string;
          /** Name of the referenced item. */
          name?: string;
          /** Percent-encoded path of the referenced item. */
          path?: string;
          /** Drive type of the referenced item. */
          driveType?: string;
          /** Site ID of the referenced item. */
          siteId?: string;
          [key: string]: unknown;
        };
        /** File facet for the drive item. */
        file?: {
          /** Detected MIME type for the file. */
          mimeType?: string;
          /** File hash values returned by Microsoft Graph. */
          hashes?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Folder facet for the drive item. */
        folder?: {
          /** Number of direct child items. */
          childCount?: number;
          /** Preferred folder view information. */
          view?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Root facet for the drive item. */
        root?: Record<string, unknown>;
        /** Deleted facet for the drive item. */
        deleted?: {
          /** Deletion state returned by Microsoft Graph. */
          state?: string;
          [key: string]: unknown;
        };
        /** Client-side file system timestamps for the drive item. */
        fileSystemInfo?: {
          /**
           * Client-side creation timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * Client-side last-access timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastAccessedDateTime?: string;
          /**
           * Client-side last-modified timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastModifiedDateTime?: string;
          [key: string]: unknown;
        };
        /** Remote item metadata. */
        remoteItem?: {
          /** Remote item ID. */
          id?: string;
          /** Remote item name. */
          name?: string;
          /** File facet for the remote item. */
          file?: {
            /** Detected MIME type for the file. */
            mimeType?: string;
            /** File hash values returned by Microsoft Graph. */
            hashes?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Folder facet for the remote item. */
          folder?: {
            /** Number of direct child items. */
            childCount?: number;
            /** Preferred folder view information. */
            view?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Parent reference for the remote item. */
          parentReference?: {
            /** Drive ID of the referenced item. */
            driveId?: string;
            /** Drive item ID of the referenced item. */
            id?: string;
            /** Name of the referenced item. */
            name?: string;
            /** Percent-encoded path of the referenced item. */
            path?: string;
            /** Drive type of the referenced item. */
            driveType?: string;
            /** Site ID of the referenced item. */
            siteId?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Sharing metadata for the drive item. */
        shared?: Record<string, unknown>;
        /** Special-folder metadata. */
        specialFolder?: Record<string, unknown>;
        /** Search metadata for the drive item. */
        searchResult?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Delete a drive item from OneDrive and move it to the recycle bin. */
    "one_drive.delete_item": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * OneDrive drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * Optional eTag used for conditional delete requests.
         * @minLength 1
         */
        ifMatch?: string;
      };
      output: {
        /** Drive item ID that was deleted. */
        itemId: string;
        /** Whether the drive item was deleted successfully. */
        deleted: true;
      };
    };
    /** Download one file from OneDrive by item ID and upload it to transit storage. */
    "one_drive.download_file": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * OneDrive drive item ID.
         * @minLength 1
         */
        itemId: string;
        /** Optional format to convert the file into before download. */
        format?: "pdf" | "html";
        /**
         * Optional file name to use for the downloaded transit file.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Optional eTag or cTag used for conditional download requests.
         * @minLength 1
         */
        ifNoneMatch?: string;
      };
      output: {
        /** The downloaded file uploaded to transit storage, or null when not modified. */
        content: {
          /** The downloaded file name. */
          name: string;
          /** The MIME type of the downloaded file. */
          mimetype: string;
          /** The transit URL for downloading the file. */
          s3url: string;
        } | null;
        /** Whether the OneDrive server returned HTTP 304 Not Modified. */
        notModified: boolean;
      };
    };
    /** Download one file from OneDrive by path and upload it to transit storage. */
    "one_drive.download_file_by_path": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Path to a drive item relative to the drive root. A leading slash is optional.
         * @minLength 1
         */
        itemPath: string;
        /**
         * Optional file name to use for the downloaded transit file.
         * @minLength 1
         */
        fileName?: string;
        /**
         * Optional eTag or cTag used for conditional download requests.
         * @minLength 1
         */
        ifNoneMatch?: string;
      };
      output: {
        /** The downloaded file uploaded to transit storage, or null when not modified. */
        content: {
          /** The downloaded file name. */
          name: string;
          /** The MIME type of the downloaded file. */
          mimetype: string;
          /** The transit URL for downloading the file. */
          s3url: string;
        } | null;
        /** Whether the OneDrive server returned HTTP 304 Not Modified. */
        notModified: boolean;
      };
    };
    /** Download one drive item after converting it to a supported Microsoft Graph format. */
    "one_drive.download_item_as_format": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /** Format to convert the drive item into. */
        format: "pdf" | "html";
        /**
         * OneDrive drive item ID.
         * @minLength 1
         */
        itemId?: string;
        /**
         * Path to a drive item relative to the drive root. A leading slash is optional.
         * @minLength 1
         */
        pathAndFilename?: string;
        /**
         * Optional file name to use for the downloaded transit file.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The downloaded file uploaded to transit storage, or null when not modified. */
        content: {
          /** The downloaded file name. */
          name: string;
          /** The MIME type of the downloaded file. */
          mimetype: string;
          /** The transit URL for downloading the file. */
          s3url: string;
        } | null;
        /** Whether the OneDrive server returned HTTP 304 Not Modified. */
        notModified: boolean;
      };
    };
    /** Get metadata for the current drive or a specific drive. */
    "one_drive.get_drive": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
      };
      output: {
        /** Drive ID. */
        id: string;
        /** Display name of the drive. */
        name?: string;
        /** Type of drive. */
        driveType?: string;
        /** Web URL for the drive. */
        webUrl?: string;
        /** Creation timestamp for the drive. */
        createdDateTime?: string;
        /** Optional drive description. */
        description?: string;
        /** Owner information for the drive. */
        owner?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Quota information for the drive. */
        quota?: {
          /** Bytes currently stored in the recycle bin. */
          deleted?: number;
          /** Remaining available bytes. */
          remaining?: number;
          /** Quota state returned by Microsoft Graph. */
          state?: string;
          /** Total quota in bytes. */
          total?: number;
          /** Used quota in bytes. */
          used?: number;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get metadata for a drive item by item ID or path. */
    "one_drive.get_item": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * OneDrive drive item ID.
         * @minLength 1
         */
        itemId?: string;
        /**
         * Path from the drive root, starting with /.
         * @minLength 1
         */
        itemPath?: string;
        /**
         * Optional Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
        /**
         * Optional Microsoft Graph relationships to expand in the response.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** Drive item ID. */
        id: string;
        /** Drive item name. */
        name: string;
        /** Web URL for the drive item. */
        webUrl?: string;
        /** User-visible description for the drive item. */
        description?: string;
        /** Content tag for the drive item. */
        cTag?: string;
        /** Entity tag for the drive item. */
        eTag?: string;
        /** Size of the drive item in bytes. */
        size?: number;
        /** Creation timestamp for the drive item. */
        createdDateTime?: string;
        /** Last modification timestamp for the drive item. */
        lastModifiedDateTime?: string;
        /** Creator information for the drive item. */
        createdBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Last modifier information for the drive item. */
        lastModifiedBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Parent reference for the drive item. */
        parentReference?: {
          /** Drive ID of the referenced item. */
          driveId?: string;
          /** Drive item ID of the referenced item. */
          id?: string;
          /** Name of the referenced item. */
          name?: string;
          /** Percent-encoded path of the referenced item. */
          path?: string;
          /** Drive type of the referenced item. */
          driveType?: string;
          /** Site ID of the referenced item. */
          siteId?: string;
          [key: string]: unknown;
        };
        /** File facet for the drive item. */
        file?: {
          /** Detected MIME type for the file. */
          mimeType?: string;
          /** File hash values returned by Microsoft Graph. */
          hashes?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Folder facet for the drive item. */
        folder?: {
          /** Number of direct child items. */
          childCount?: number;
          /** Preferred folder view information. */
          view?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Root facet for the drive item. */
        root?: Record<string, unknown>;
        /** Deleted facet for the drive item. */
        deleted?: {
          /** Deletion state returned by Microsoft Graph. */
          state?: string;
          [key: string]: unknown;
        };
        /** Client-side file system timestamps for the drive item. */
        fileSystemInfo?: {
          /**
           * Client-side creation timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * Client-side last-access timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastAccessedDateTime?: string;
          /**
           * Client-side last-modified timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastModifiedDateTime?: string;
          [key: string]: unknown;
        };
        /** Remote item metadata. */
        remoteItem?: {
          /** Remote item ID. */
          id?: string;
          /** Remote item name. */
          name?: string;
          /** File facet for the remote item. */
          file?: {
            /** Detected MIME type for the file. */
            mimeType?: string;
            /** File hash values returned by Microsoft Graph. */
            hashes?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Folder facet for the remote item. */
          folder?: {
            /** Number of direct child items. */
            childCount?: number;
            /** Preferred folder view information. */
            view?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Parent reference for the remote item. */
          parentReference?: {
            /** Drive ID of the referenced item. */
            driveId?: string;
            /** Drive item ID of the referenced item. */
            id?: string;
            /** Name of the referenced item. */
            name?: string;
            /** Percent-encoded path of the referenced item. */
            path?: string;
            /** Drive type of the referenced item. */
            driveType?: string;
            /** Site ID of the referenced item. */
            siteId?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Sharing metadata for the drive item. */
        shared?: Record<string, unknown>;
        /** Special-folder metadata. */
        specialFolder?: Record<string, unknown>;
        /** Search metadata for the drive item. */
        searchResult?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get metadata for the root folder of the current drive or a specific drive. */
    "one_drive.get_root": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Optional Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
        /**
         * Optional Microsoft Graph relationships to expand in the response.
         * @minItems 1
         */
        expand?: Array<string>;
      };
      output: {
        /** Drive item ID. */
        id: string;
        /** Drive item name. */
        name: string;
        /** Web URL for the drive item. */
        webUrl?: string;
        /** User-visible description for the drive item. */
        description?: string;
        /** Content tag for the drive item. */
        cTag?: string;
        /** Entity tag for the drive item. */
        eTag?: string;
        /** Size of the drive item in bytes. */
        size?: number;
        /** Creation timestamp for the drive item. */
        createdDateTime?: string;
        /** Last modification timestamp for the drive item. */
        lastModifiedDateTime?: string;
        /** Creator information for the drive item. */
        createdBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Last modifier information for the drive item. */
        lastModifiedBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Parent reference for the drive item. */
        parentReference?: {
          /** Drive ID of the referenced item. */
          driveId?: string;
          /** Drive item ID of the referenced item. */
          id?: string;
          /** Name of the referenced item. */
          name?: string;
          /** Percent-encoded path of the referenced item. */
          path?: string;
          /** Drive type of the referenced item. */
          driveType?: string;
          /** Site ID of the referenced item. */
          siteId?: string;
          [key: string]: unknown;
        };
        /** File facet for the drive item. */
        file?: {
          /** Detected MIME type for the file. */
          mimeType?: string;
          /** File hash values returned by Microsoft Graph. */
          hashes?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Folder facet for the drive item. */
        folder?: {
          /** Number of direct child items. */
          childCount?: number;
          /** Preferred folder view information. */
          view?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Root facet for the drive item. */
        root?: Record<string, unknown>;
        /** Deleted facet for the drive item. */
        deleted?: {
          /** Deletion state returned by Microsoft Graph. */
          state?: string;
          [key: string]: unknown;
        };
        /** Client-side file system timestamps for the drive item. */
        fileSystemInfo?: {
          /**
           * Client-side creation timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * Client-side last-access timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastAccessedDateTime?: string;
          /**
           * Client-side last-modified timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastModifiedDateTime?: string;
          [key: string]: unknown;
        };
        /** Remote item metadata. */
        remoteItem?: {
          /** Remote item ID. */
          id?: string;
          /** Remote item name. */
          name?: string;
          /** File facet for the remote item. */
          file?: {
            /** Detected MIME type for the file. */
            mimeType?: string;
            /** File hash values returned by Microsoft Graph. */
            hashes?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Folder facet for the remote item. */
          folder?: {
            /** Number of direct child items. */
            childCount?: number;
            /** Preferred folder view information. */
            view?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Parent reference for the remote item. */
          parentReference?: {
            /** Drive ID of the referenced item. */
            driveId?: string;
            /** Drive item ID of the referenced item. */
            id?: string;
            /** Name of the referenced item. */
            name?: string;
            /** Percent-encoded path of the referenced item. */
            path?: string;
            /** Drive type of the referenced item. */
            driveType?: string;
            /** Site ID of the referenced item. */
            siteId?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Sharing metadata for the drive item. */
        shared?: Record<string, unknown>;
        /** Special-folder metadata. */
        specialFolder?: Record<string, unknown>;
        /** Search metadata for the drive item. */
        searchResult?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** List the direct children of a folder in OneDrive. */
    "one_drive.list_folder_children": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * OneDrive folder item ID.
         * @minLength 1
         */
        folderItemId?: string;
        /**
         * Path from the drive root, starting with /.
         * @minLength 1
         */
        folderPath?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 999
         */
        top?: number;
        /**
         * Optional Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
        /**
         * Optional Microsoft Graph relationships to expand in the response.
         * @minItems 1
         */
        expand?: Array<string>;
        /**
         * Optional Microsoft Graph order-by expression.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * Opaque Microsoft Graph nextLink returned by a previous OneDrive response.
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Drive items returned by Microsoft Graph. */
        items: Array<{
          /** Drive item ID. */
          id: string;
          /** Drive item name. */
          name: string;
          /** Web URL for the drive item. */
          webUrl?: string;
          /** User-visible description for the drive item. */
          description?: string;
          /** Content tag for the drive item. */
          cTag?: string;
          /** Entity tag for the drive item. */
          eTag?: string;
          /** Size of the drive item in bytes. */
          size?: number;
          /** Creation timestamp for the drive item. */
          createdDateTime?: string;
          /** Last modification timestamp for the drive item. */
          lastModifiedDateTime?: string;
          /** Creator information for the drive item. */
          createdBy?: {
            /** User identity information. */
            user?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            /** Application identity information. */
            application?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            /** Device identity information. */
            device?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Last modifier information for the drive item. */
          lastModifiedBy?: {
            /** User identity information. */
            user?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            /** Application identity information. */
            application?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            /** Device identity information. */
            device?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Parent reference for the drive item. */
          parentReference?: {
            /** Drive ID of the referenced item. */
            driveId?: string;
            /** Drive item ID of the referenced item. */
            id?: string;
            /** Name of the referenced item. */
            name?: string;
            /** Percent-encoded path of the referenced item. */
            path?: string;
            /** Drive type of the referenced item. */
            driveType?: string;
            /** Site ID of the referenced item. */
            siteId?: string;
            [key: string]: unknown;
          };
          /** File facet for the drive item. */
          file?: {
            /** Detected MIME type for the file. */
            mimeType?: string;
            /** File hash values returned by Microsoft Graph. */
            hashes?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Folder facet for the drive item. */
          folder?: {
            /** Number of direct child items. */
            childCount?: number;
            /** Preferred folder view information. */
            view?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Root facet for the drive item. */
          root?: Record<string, unknown>;
          /** Deleted facet for the drive item. */
          deleted?: {
            /** Deletion state returned by Microsoft Graph. */
            state?: string;
            [key: string]: unknown;
          };
          /** Client-side file system timestamps for the drive item. */
          fileSystemInfo?: {
            /**
             * Client-side creation timestamp.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
             * @format date-time
             */
            createdDateTime?: string;
            /**
             * Client-side last-access timestamp.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
             * @format date-time
             */
            lastAccessedDateTime?: string;
            /**
             * Client-side last-modified timestamp.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
             * @format date-time
             */
            lastModifiedDateTime?: string;
            [key: string]: unknown;
          };
          /** Remote item metadata. */
          remoteItem?: {
            /** Remote item ID. */
            id?: string;
            /** Remote item name. */
            name?: string;
            /** File facet for the remote item. */
            file?: {
              /** Detected MIME type for the file. */
              mimeType?: string;
              /** File hash values returned by Microsoft Graph. */
              hashes?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** Folder facet for the remote item. */
            folder?: {
              /** Number of direct child items. */
              childCount?: number;
              /** Preferred folder view information. */
              view?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** Parent reference for the remote item. */
            parentReference?: {
              /** Drive ID of the referenced item. */
              driveId?: string;
              /** Drive item ID of the referenced item. */
              id?: string;
              /** Name of the referenced item. */
              name?: string;
              /** Percent-encoded path of the referenced item. */
              path?: string;
              /** Drive type of the referenced item. */
              driveType?: string;
              /** Site ID of the referenced item. */
              siteId?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Sharing metadata for the drive item. */
          shared?: Record<string, unknown>;
          /** Special-folder metadata. */
          specialFolder?: Record<string, unknown>;
          /** Search metadata for the drive item. */
          searchResult?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Opaque nextLink for fetching the next page, if any. */
        nextLink: string | null;
      };
    };
    /** Search OneDrive for files and folders by keyword. */
    "one_drive.search_items": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Keyword query used to search the current drive.
         * @minLength 1
         */
        query?: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 999
         */
        top?: number;
        /**
         * Optional Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
        /**
         * Optional Microsoft Graph relationships to expand in the response.
         * @minItems 1
         */
        expand?: Array<string>;
        /**
         * Optional Microsoft Graph order-by expression.
         * @minLength 1
         */
        orderBy?: string;
        /**
         * Opaque Microsoft Graph nextLink returned by a previous OneDrive response.
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Drive items returned by Microsoft Graph. */
        items: Array<{
          /** Drive item ID. */
          id: string;
          /** Drive item name. */
          name: string;
          /** Web URL for the drive item. */
          webUrl?: string;
          /** User-visible description for the drive item. */
          description?: string;
          /** Content tag for the drive item. */
          cTag?: string;
          /** Entity tag for the drive item. */
          eTag?: string;
          /** Size of the drive item in bytes. */
          size?: number;
          /** Creation timestamp for the drive item. */
          createdDateTime?: string;
          /** Last modification timestamp for the drive item. */
          lastModifiedDateTime?: string;
          /** Creator information for the drive item. */
          createdBy?: {
            /** User identity information. */
            user?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            /** Application identity information. */
            application?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            /** Device identity information. */
            device?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Last modifier information for the drive item. */
          lastModifiedBy?: {
            /** User identity information. */
            user?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            /** Application identity information. */
            application?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            /** Device identity information. */
            device?: {
              /** Unique identifier for the identity. */
              id?: string;
              /** Display name for the identity. */
              displayName?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Parent reference for the drive item. */
          parentReference?: {
            /** Drive ID of the referenced item. */
            driveId?: string;
            /** Drive item ID of the referenced item. */
            id?: string;
            /** Name of the referenced item. */
            name?: string;
            /** Percent-encoded path of the referenced item. */
            path?: string;
            /** Drive type of the referenced item. */
            driveType?: string;
            /** Site ID of the referenced item. */
            siteId?: string;
            [key: string]: unknown;
          };
          /** File facet for the drive item. */
          file?: {
            /** Detected MIME type for the file. */
            mimeType?: string;
            /** File hash values returned by Microsoft Graph. */
            hashes?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Folder facet for the drive item. */
          folder?: {
            /** Number of direct child items. */
            childCount?: number;
            /** Preferred folder view information. */
            view?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Root facet for the drive item. */
          root?: Record<string, unknown>;
          /** Deleted facet for the drive item. */
          deleted?: {
            /** Deletion state returned by Microsoft Graph. */
            state?: string;
            [key: string]: unknown;
          };
          /** Client-side file system timestamps for the drive item. */
          fileSystemInfo?: {
            /**
             * Client-side creation timestamp.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
             * @format date-time
             */
            createdDateTime?: string;
            /**
             * Client-side last-access timestamp.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
             * @format date-time
             */
            lastAccessedDateTime?: string;
            /**
             * Client-side last-modified timestamp.
             * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
             * @format date-time
             */
            lastModifiedDateTime?: string;
            [key: string]: unknown;
          };
          /** Remote item metadata. */
          remoteItem?: {
            /** Remote item ID. */
            id?: string;
            /** Remote item name. */
            name?: string;
            /** File facet for the remote item. */
            file?: {
              /** Detected MIME type for the file. */
              mimeType?: string;
              /** File hash values returned by Microsoft Graph. */
              hashes?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** Folder facet for the remote item. */
            folder?: {
              /** Number of direct child items. */
              childCount?: number;
              /** Preferred folder view information. */
              view?: Record<string, unknown>;
              [key: string]: unknown;
            };
            /** Parent reference for the remote item. */
            parentReference?: {
              /** Drive ID of the referenced item. */
              driveId?: string;
              /** Drive item ID of the referenced item. */
              id?: string;
              /** Name of the referenced item. */
              name?: string;
              /** Percent-encoded path of the referenced item. */
              path?: string;
              /** Drive type of the referenced item. */
              driveType?: string;
              /** Site ID of the referenced item. */
              siteId?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
          /** Sharing metadata for the drive item. */
          shared?: Record<string, unknown>;
          /** Special-folder metadata. */
          specialFolder?: Record<string, unknown>;
          /** Search metadata for the drive item. */
          searchResult?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Opaque nextLink for fetching the next page, if any. */
        nextLink: string | null;
      };
    };
    /** Replace the content of one existing OneDrive file. */
    "one_drive.update_file_content": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * OneDrive drive item ID.
         * @minLength 1
         */
        itemId: string;
        /** Transit-backed file input returned by a previous tool. */
        file?: {
          /**
           * The file name.
           * @minLength 1
           */
          name: string;
          /**
           * The MIME type of the file.
           * @minLength 1
           */
          mimetype: string;
          /**
           * Transit object key or URL for the file content.
           * @minLength 1
           */
          s3key?: string;
          /**
           * Transit URL for the file content, typically returned by a previous download.
           * @minLength 1
           */
          s3url?: string;
        };
        /**
         * Base64-encoded file content used for inline uploads.
         * @minLength 1
         */
        contentBase64?: string;
        /** Plain-text file content used for inline uploads. */
        text?: string;
        /**
         * Optional file name override applied when the upload commits.
         * @minLength 1
         */
        name?: string;
        /**
         * MIME type used for inline upload content.
         * @minLength 1
         */
        mimeType?: string;
        /**
         * Optional OneDrive file description.
         * @minLength 1
         */
        description?: string;
        /** Unsupported for now. Uploads are always committed immediately. */
        deferCommit?: boolean;
        /**
         * Optional eTag used for conditional upload session creation.
         * @minLength 1
         */
        ifMatch?: string;
        /**
         * Optional eTag used to prevent updates when the item has not changed.
         * @minLength 1
         */
        ifNoneMatch?: string;
        /**
         * Optional file size hint used by Microsoft Graph for quota checks.
         * @minimum 0
         */
        fileSize?: number;
        /** Optional client-side file system timestamps. */
        fileSystemInfo?: {
          /**
           * Client-side creation timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * Client-side last-access timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastAccessedDateTime?: string;
          /**
           * Client-side last-modified timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastModifiedDateTime?: string;
        };
        /** Conflict behavior used when the updated content collides during commit. */
        conflictBehavior?: "replace" | "fail" | "rename";
        /** Optional drive item source. */
        driveItemSource?: {
          /** External source identifier. */
          externalId?: string;
          /** Source application identifier. */
          application?: string;
        };
        /** Optional media source metadata. */
        mediaSource?: {
          /** Media content category. */
          contentCategory?: string;
        };
      };
      output: {
        /** Drive item ID. */
        id: string;
        /** Drive item name. */
        name: string;
        /** Web URL for the drive item. */
        webUrl?: string;
        /** User-visible description for the drive item. */
        description?: string;
        /** Content tag for the drive item. */
        cTag?: string;
        /** Entity tag for the drive item. */
        eTag?: string;
        /** Size of the drive item in bytes. */
        size?: number;
        /** Creation timestamp for the drive item. */
        createdDateTime?: string;
        /** Last modification timestamp for the drive item. */
        lastModifiedDateTime?: string;
        /** Creator information for the drive item. */
        createdBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Last modifier information for the drive item. */
        lastModifiedBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Parent reference for the drive item. */
        parentReference?: {
          /** Drive ID of the referenced item. */
          driveId?: string;
          /** Drive item ID of the referenced item. */
          id?: string;
          /** Name of the referenced item. */
          name?: string;
          /** Percent-encoded path of the referenced item. */
          path?: string;
          /** Drive type of the referenced item. */
          driveType?: string;
          /** Site ID of the referenced item. */
          siteId?: string;
          [key: string]: unknown;
        };
        /** File facet for the drive item. */
        file?: {
          /** Detected MIME type for the file. */
          mimeType?: string;
          /** File hash values returned by Microsoft Graph. */
          hashes?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Folder facet for the drive item. */
        folder?: {
          /** Number of direct child items. */
          childCount?: number;
          /** Preferred folder view information. */
          view?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Root facet for the drive item. */
        root?: Record<string, unknown>;
        /** Deleted facet for the drive item. */
        deleted?: {
          /** Deletion state returned by Microsoft Graph. */
          state?: string;
          [key: string]: unknown;
        };
        /** Client-side file system timestamps for the drive item. */
        fileSystemInfo?: {
          /**
           * Client-side creation timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * Client-side last-access timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastAccessedDateTime?: string;
          /**
           * Client-side last-modified timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastModifiedDateTime?: string;
          [key: string]: unknown;
        };
        /** Remote item metadata. */
        remoteItem?: {
          /** Remote item ID. */
          id?: string;
          /** Remote item name. */
          name?: string;
          /** File facet for the remote item. */
          file?: {
            /** Detected MIME type for the file. */
            mimeType?: string;
            /** File hash values returned by Microsoft Graph. */
            hashes?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Folder facet for the remote item. */
          folder?: {
            /** Number of direct child items. */
            childCount?: number;
            /** Preferred folder view information. */
            view?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Parent reference for the remote item. */
          parentReference?: {
            /** Drive ID of the referenced item. */
            driveId?: string;
            /** Drive item ID of the referenced item. */
            id?: string;
            /** Name of the referenced item. */
            name?: string;
            /** Percent-encoded path of the referenced item. */
            path?: string;
            /** Drive type of the referenced item. */
            driveType?: string;
            /** Site ID of the referenced item. */
            siteId?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Sharing metadata for the drive item. */
        shared?: Record<string, unknown>;
        /** Special-folder metadata. */
        specialFolder?: Record<string, unknown>;
        /** Search metadata for the drive item. */
        searchResult?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Rename, move, or update metadata for a drive item. */
    "one_drive.update_item_metadata": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * OneDrive drive item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * New name for the drive item.
         * @minLength 1
         */
        name?: string;
        /**
         * New description for the drive item.
         * @minLength 1
         */
        description?: string;
        /**
         * Optional eTag used for conditional update requests.
         * @minLength 1
         */
        ifMatch?: string;
        /** Client-side file system timestamps. */
        fileSystemInfo?: {
          /**
           * Client-side creation timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * Client-side last-access timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastAccessedDateTime?: string;
          /**
           * Client-side last-modified timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastModifiedDateTime?: string;
        };
        /**
         * Optional destination parent folder ID for moving the item.
         * @minLength 1
         */
        parentItemId?: string;
      };
      output: {
        /** Drive item ID. */
        id: string;
        /** Drive item name. */
        name: string;
        /** Web URL for the drive item. */
        webUrl?: string;
        /** User-visible description for the drive item. */
        description?: string;
        /** Content tag for the drive item. */
        cTag?: string;
        /** Entity tag for the drive item. */
        eTag?: string;
        /** Size of the drive item in bytes. */
        size?: number;
        /** Creation timestamp for the drive item. */
        createdDateTime?: string;
        /** Last modification timestamp for the drive item. */
        lastModifiedDateTime?: string;
        /** Creator information for the drive item. */
        createdBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Last modifier information for the drive item. */
        lastModifiedBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Parent reference for the drive item. */
        parentReference?: {
          /** Drive ID of the referenced item. */
          driveId?: string;
          /** Drive item ID of the referenced item. */
          id?: string;
          /** Name of the referenced item. */
          name?: string;
          /** Percent-encoded path of the referenced item. */
          path?: string;
          /** Drive type of the referenced item. */
          driveType?: string;
          /** Site ID of the referenced item. */
          siteId?: string;
          [key: string]: unknown;
        };
        /** File facet for the drive item. */
        file?: {
          /** Detected MIME type for the file. */
          mimeType?: string;
          /** File hash values returned by Microsoft Graph. */
          hashes?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Folder facet for the drive item. */
        folder?: {
          /** Number of direct child items. */
          childCount?: number;
          /** Preferred folder view information. */
          view?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Root facet for the drive item. */
        root?: Record<string, unknown>;
        /** Deleted facet for the drive item. */
        deleted?: {
          /** Deletion state returned by Microsoft Graph. */
          state?: string;
          [key: string]: unknown;
        };
        /** Client-side file system timestamps for the drive item. */
        fileSystemInfo?: {
          /**
           * Client-side creation timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * Client-side last-access timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastAccessedDateTime?: string;
          /**
           * Client-side last-modified timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastModifiedDateTime?: string;
          [key: string]: unknown;
        };
        /** Remote item metadata. */
        remoteItem?: {
          /** Remote item ID. */
          id?: string;
          /** Remote item name. */
          name?: string;
          /** File facet for the remote item. */
          file?: {
            /** Detected MIME type for the file. */
            mimeType?: string;
            /** File hash values returned by Microsoft Graph. */
            hashes?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Folder facet for the remote item. */
          folder?: {
            /** Number of direct child items. */
            childCount?: number;
            /** Preferred folder view information. */
            view?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Parent reference for the remote item. */
          parentReference?: {
            /** Drive ID of the referenced item. */
            driveId?: string;
            /** Drive item ID of the referenced item. */
            id?: string;
            /** Name of the referenced item. */
            name?: string;
            /** Percent-encoded path of the referenced item. */
            path?: string;
            /** Drive type of the referenced item. */
            driveType?: string;
            /** Site ID of the referenced item. */
            siteId?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Sharing metadata for the drive item. */
        shared?: Record<string, unknown>;
        /** Special-folder metadata. */
        specialFolder?: Record<string, unknown>;
        /** Search metadata for the drive item. */
        searchResult?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Upload one file to OneDrive, optionally creating destination folders on the way. */
    "one_drive.upload_file": {
      input: {
        /**
         * Optional drive ID. Leave empty to use the authenticated user's default OneDrive.
         * @minLength 1
         */
        driveId?: string;
        /**
         * Destination folder path starting with /, or a parent folder item ID.
         * @minLength 1
         */
        folder?: string;
        /** Transit-backed file input returned by a previous tool. */
        file?: {
          /**
           * The file name.
           * @minLength 1
           */
          name: string;
          /**
           * The MIME type of the file.
           * @minLength 1
           */
          mimetype: string;
          /**
           * Transit object key or URL for the file content.
           * @minLength 1
           */
          s3key?: string;
          /**
           * Transit URL for the file content, typically returned by a previous download.
           * @minLength 1
           */
          s3url?: string;
        };
        /**
         * File name used for inline upload content.
         * @minLength 1
         */
        name?: string;
        /**
         * MIME type used for inline upload content.
         * @minLength 1
         */
        mimeType?: string;
        /**
         * Base64-encoded file content used for inline uploads.
         * @minLength 1
         */
        contentBase64?: string;
        /** Plain-text file content used for inline uploads. */
        text?: string;
        /**
         * Optional OneDrive file description.
         * @minLength 1
         */
        description?: string;
        /** Unsupported for now. Uploads are always committed immediately. */
        deferCommit?: boolean;
        /**
         * Optional eTag used for conditional upload session creation.
         * @minLength 1
         */
        ifMatch?: string;
        /** Optional client-side file system timestamps. */
        fileSystemInfo?: {
          /**
           * Client-side creation timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * Client-side last-access timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastAccessedDateTime?: string;
          /**
           * Client-side last-modified timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastModifiedDateTime?: string;
        };
        /** Conflict behavior used when a file with the same name already exists. */
        conflictBehavior?: "rename" | "fail" | "replace";
      };
      output: {
        /** Drive item ID. */
        id: string;
        /** Drive item name. */
        name: string;
        /** Web URL for the drive item. */
        webUrl?: string;
        /** User-visible description for the drive item. */
        description?: string;
        /** Content tag for the drive item. */
        cTag?: string;
        /** Entity tag for the drive item. */
        eTag?: string;
        /** Size of the drive item in bytes. */
        size?: number;
        /** Creation timestamp for the drive item. */
        createdDateTime?: string;
        /** Last modification timestamp for the drive item. */
        lastModifiedDateTime?: string;
        /** Creator information for the drive item. */
        createdBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Last modifier information for the drive item. */
        lastModifiedBy?: {
          /** User identity information. */
          user?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Application identity information. */
          application?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          /** Device identity information. */
          device?: {
            /** Unique identifier for the identity. */
            id?: string;
            /** Display name for the identity. */
            displayName?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Parent reference for the drive item. */
        parentReference?: {
          /** Drive ID of the referenced item. */
          driveId?: string;
          /** Drive item ID of the referenced item. */
          id?: string;
          /** Name of the referenced item. */
          name?: string;
          /** Percent-encoded path of the referenced item. */
          path?: string;
          /** Drive type of the referenced item. */
          driveType?: string;
          /** Site ID of the referenced item. */
          siteId?: string;
          [key: string]: unknown;
        };
        /** File facet for the drive item. */
        file?: {
          /** Detected MIME type for the file. */
          mimeType?: string;
          /** File hash values returned by Microsoft Graph. */
          hashes?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Folder facet for the drive item. */
        folder?: {
          /** Number of direct child items. */
          childCount?: number;
          /** Preferred folder view information. */
          view?: Record<string, unknown>;
          [key: string]: unknown;
        };
        /** Root facet for the drive item. */
        root?: Record<string, unknown>;
        /** Deleted facet for the drive item. */
        deleted?: {
          /** Deletion state returned by Microsoft Graph. */
          state?: string;
          [key: string]: unknown;
        };
        /** Client-side file system timestamps for the drive item. */
        fileSystemInfo?: {
          /**
           * Client-side creation timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          createdDateTime?: string;
          /**
           * Client-side last-access timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastAccessedDateTime?: string;
          /**
           * Client-side last-modified timestamp.
           * @pattern ^(?:(?:\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|(?:02)-(?:0[1-9]|1\d|2[0-8])))T(?:(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z))$
           * @format date-time
           */
          lastModifiedDateTime?: string;
          [key: string]: unknown;
        };
        /** Remote item metadata. */
        remoteItem?: {
          /** Remote item ID. */
          id?: string;
          /** Remote item name. */
          name?: string;
          /** File facet for the remote item. */
          file?: {
            /** Detected MIME type for the file. */
            mimeType?: string;
            /** File hash values returned by Microsoft Graph. */
            hashes?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Folder facet for the remote item. */
          folder?: {
            /** Number of direct child items. */
            childCount?: number;
            /** Preferred folder view information. */
            view?: Record<string, unknown>;
            [key: string]: unknown;
          };
          /** Parent reference for the remote item. */
          parentReference?: {
            /** Drive ID of the referenced item. */
            driveId?: string;
            /** Drive item ID of the referenced item. */
            id?: string;
            /** Name of the referenced item. */
            name?: string;
            /** Percent-encoded path of the referenced item. */
            path?: string;
            /** Drive type of the referenced item. */
            driveType?: string;
            /** Site ID of the referenced item. */
            siteId?: string;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
        /** Sharing metadata for the drive item. */
        shared?: Record<string, unknown>;
        /** Special-folder metadata. */
        specialFolder?: Record<string, unknown>;
        /** Search metadata for the drive item. */
        searchResult?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
  }
}
