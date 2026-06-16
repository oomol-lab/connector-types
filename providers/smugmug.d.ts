import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a SmugMug album by album key. */
    "smugmug.get_album": {
      input: {
        /**
         * The SmugMug album key.
         * @minLength 1
         */
        albumKey: string;
      };
      output: {
        /** The SmugMug album object. */
        album: {
          /** The API URI for this album. */
          Uri?: string;
          /** The unique key of this album. */
          AlbumKey?: string;
          /** The node identifier associated with this album. */
          NodeID?: string;
          /** The display name of this album. */
          Name?: string;
          /** The title of this album. */
          Title?: string;
          /** The URL-safe name of this album. */
          UrlName?: string;
          /** The URL path of this album. */
          UrlPath?: string;
          /** The public SmugMug website URL for this album. */
          WebUri?: string;
          /** The description of this album. */
          Description?: string;
          /** The keywords attached to this album. */
          Keywords?: string;
          /** The number of images in this album. */
          ImageCount?: number;
          /** When this album was last updated. */
          LastUpdated?: string;
          /** The access level reflected in this response. */
          ResponseLevel?: string;
          /** The related URIs available from this album. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the highlight image for a SmugMug album. */
    "smugmug.get_album_highlight_image": {
      input: {
        /**
         * The SmugMug album key.
         * @minLength 1
         */
        albumKey: string;
      };
      output: {
        /** The highlight image for the album. */
        highlightImage: {
          /** The API URI for this album-image relationship. */
          Uri?: string;
          /** The album key that owns this image relationship. */
          AlbumKey?: string;
          /** The unique key of the image. */
          ImageKey?: string;
          /** The title of this image. */
          Title?: string;
          /** The caption of this image. */
          Caption?: string;
          /** The file format of this image. */
          Format?: string;
          /** The public SmugMug website URL for this album image. */
          WebUri?: string;
          /** The original file name of this image. */
          FileName?: string;
          /** The keywords attached to this image. */
          Keywords?: string;
          /** When this image was created or uploaded. */
          Date?: string;
          /** When this album image was last updated. */
          LastUpdated?: string;
          /** The original width in pixels. */
          OriginalWidth?: number;
          /** The original height in pixels. */
          OriginalHeight?: number;
          /** Whether this media item is a video. */
          IsVideo?: boolean;
          /** The related URIs available from this album image. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve a specific image within a SmugMug album context. */
    "smugmug.get_album_image": {
      input: {
        /**
         * The SmugMug album key.
         * @minLength 1
         */
        albumKey: string;
        /**
         * The SmugMug image key.
         * @minLength 1
         */
        imageKey: string;
      };
      output: {
        /** The SmugMug album-image relationship object. */
        albumImage: {
          /** The API URI for this album-image relationship. */
          Uri?: string;
          /** The album key that owns this image relationship. */
          AlbumKey?: string;
          /** The unique key of the image. */
          ImageKey?: string;
          /** The title of this image. */
          Title?: string;
          /** The caption of this image. */
          Caption?: string;
          /** The file format of this image. */
          Format?: string;
          /** The public SmugMug website URL for this album image. */
          WebUri?: string;
          /** The original file name of this image. */
          FileName?: string;
          /** The keywords attached to this image. */
          Keywords?: string;
          /** When this image was created or uploaded. */
          Date?: string;
          /** When this album image was last updated. */
          LastUpdated?: string;
          /** The original width in pixels. */
          OriginalWidth?: number;
          /** The original height in pixels. */
          OriginalHeight?: number;
          /** Whether this media item is a video. */
          IsVideo?: boolean;
          /** The related URIs available from this album image. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** List the images contained in a SmugMug album. */
    "smugmug.get_album_images": {
      input: {
        /**
         * The SmugMug album key.
         * @minLength 1
         */
        albumKey: string;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The 1-based start index for pagination.
         * @minimum 1
         */
        start?: number;
      };
      output: {
        /** The images contained in the album. */
        albumImages: Array<{
          /** The API URI for this album-image relationship. */
          Uri?: string;
          /** The album key that owns this image relationship. */
          AlbumKey?: string;
          /** The unique key of the image. */
          ImageKey?: string;
          /** The title of this image. */
          Title?: string;
          /** The caption of this image. */
          Caption?: string;
          /** The file format of this image. */
          Format?: string;
          /** The public SmugMug website URL for this album image. */
          WebUri?: string;
          /** The original file name of this image. */
          FileName?: string;
          /** The keywords attached to this image. */
          Keywords?: string;
          /** When this image was created or uploaded. */
          Date?: string;
          /** When this album image was last updated. */
          LastUpdated?: string;
          /** The original width in pixels. */
          OriginalWidth?: number;
          /** The original height in pixels. */
          OriginalHeight?: number;
          /** Whether this media item is a video. */
          IsVideo?: boolean;
          /** The related URIs available from this album image. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the album image list. */
        pages: {
          /** The number of items returned in the current page. */
          count: number;
          /** The 1-based start index of the current page. */
          start: number;
          /** The total number of available items. */
          total: number;
          /** The API URI for the first page of results. */
          firstPage?: string;
          /** The API URI for the previous page of results. */
          prevPage?: string;
          /** The API URI for the next page of results. */
          nextPage?: string;
          /** The API URI for the last page of results. */
          lastPage?: string;
          /** The number of items that were requested. */
          requestedCount?: number;
        };
      };
    };
    /** List the direct albums under a SmugMug folder path. */
    "smugmug.get_folder_albums": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
        /** The folder path within the user's site. Use an empty string for the root folder. */
        folderPath?: string;
        /** An optional folder identifier used as a compatibility guard. */
        folderId?: string;
      };
      output: {
        /** The direct albums under the requested folder. */
        albums: Array<{
          /** The API URI for this album. */
          Uri?: string;
          /** The unique key of this album. */
          AlbumKey?: string;
          /** The node identifier associated with this album. */
          NodeID?: string;
          /** The display name of this album. */
          Name?: string;
          /** The title of this album. */
          Title?: string;
          /** The URL-safe name of this album. */
          UrlName?: string;
          /** The URL path of this album. */
          UrlPath?: string;
          /** The public SmugMug website URL for this album. */
          WebUri?: string;
          /** The description of this album. */
          Description?: string;
          /** The keywords attached to this album. */
          Keywords?: string;
          /** The number of images in this album. */
          ImageCount?: number;
          /** When this album was last updated. */
          LastUpdated?: string;
          /** The access level reflected in this response. */
          ResponseLevel?: string;
          /** The related URIs available from this album. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the album list. */
        pages: {
          /** The number of items returned in the current page. */
          count: number;
          /** The 1-based start index of the current page. */
          start: number;
          /** The total number of available items. */
          total: number;
          /** The API URI for the first page of results. */
          firstPage?: string;
          /** The API URI for the previous page of results. */
          prevPage?: string;
          /** The API URI for the next page of results. */
          nextPage?: string;
          /** The API URI for the last page of results. */
          lastPage?: string;
          /** The number of items that were requested. */
          requestedCount?: number;
        };
      };
    };
    /** Retrieve a SmugMug folder by user nickname and folder path. */
    "smugmug.get_folder_by_user_path": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
        /** The folder path within the user's site. Use an empty string for the root folder. */
        folderPath?: string;
      };
      output: {
        /** The SmugMug folder object. */
        folder: {
          /** The API URI for this folder. */
          Uri?: string;
          /** The stable folder identifier. */
          FolderID?: string;
          /** The display name of this folder. */
          Name?: string;
          /** The URL-safe name of this folder. */
          UrlName?: string;
          /** The URL path of this folder. */
          UrlPath?: string;
          /** The public SmugMug website URL for this folder. */
          WebUri?: string;
          /** The description of this folder. */
          Description?: string;
          /** The privacy setting of this folder. */
          Privacy?: string;
          /** The security type of this folder. */
          SecurityType?: string;
          /** When this folder was created. */
          DateAdded?: string;
          /** When this folder was last modified. */
          DateModified?: string;
          /** The related URIs available from this folder. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve folder details for a SmugMug folder node by node ID. */
    "smugmug.get_folder_details": {
      input: {
        /**
         * The SmugMug node ID of the folder.
         * @minLength 1
         */
        nodeId: string;
      };
      output: {
        /** The folder node object. */
        folder: {
          /** The API URI for this node. */
          Uri?: string;
          /** The unique identifier of this node. */
          NodeID?: string;
          /** The node type, such as Folder, Album, or Page. */
          Type?: string;
          /** The display name of this node. */
          Name?: string;
          /** The URL-safe name of this node. */
          UrlName?: string;
          /** The URL path of this node. */
          UrlPath?: string;
          /** The public SmugMug website URL for this node. */
          WebUri?: string;
          /** The description of this node. */
          Description?: string;
          /** The privacy setting of this node. */
          Privacy?: string;
          /** The security type of this node. */
          SecurityType?: string;
          /** Whether this node has child nodes. */
          HasChildren?: boolean;
          /** Whether this node is the root node. */
          IsRoot?: boolean;
          /** When this node was created. */
          DateAdded?: string;
          /** When this node was last modified. */
          DateModified?: string;
          /** The related URIs available from this node. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** List the direct subfolders under a SmugMug folder path. */
    "smugmug.get_folder_subfolders": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
        /** The folder path within the user's site. Use an empty string for the root folder. */
        folderPath?: string;
        /** An optional folder identifier used as a compatibility guard. */
        folderId?: string;
      };
      output: {
        /** The direct subfolders under the requested folder. */
        folders: Array<{
          /** The API URI for this folder. */
          Uri?: string;
          /** The stable folder identifier. */
          FolderID?: string;
          /** The display name of this folder. */
          Name?: string;
          /** The URL-safe name of this folder. */
          UrlName?: string;
          /** The URL path of this folder. */
          UrlPath?: string;
          /** The public SmugMug website URL for this folder. */
          WebUri?: string;
          /** The description of this folder. */
          Description?: string;
          /** The privacy setting of this folder. */
          Privacy?: string;
          /** The security type of this folder. */
          SecurityType?: string;
          /** When this folder was created. */
          DateAdded?: string;
          /** When this folder was last modified. */
          DateModified?: string;
          /** The related URIs available from this folder. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the folder list. */
        pages: {
          /** The number of items returned in the current page. */
          count: number;
          /** The 1-based start index of the current page. */
          start: number;
          /** The total number of available items. */
          total: number;
          /** The API URI for the first page of results. */
          firstPage?: string;
          /** The API URI for the previous page of results. */
          prevPage?: string;
          /** The API URI for the next page of results. */
          nextPage?: string;
          /** The API URI for the last page of results. */
          lastPage?: string;
          /** The number of items that were requested. */
          requestedCount?: number;
        };
      };
    };
    /** Retrieve a SmugMug image by image key. */
    "smugmug.get_image": {
      input: {
        /**
         * The SmugMug image key.
         * @minLength 1
         */
        imageKey: string;
      };
      output: {
        /** The SmugMug image object. */
        image: {
          /** The API URI for this image. */
          Uri?: string;
          /** The unique key of this image. */
          ImageKey?: string;
          /** The title of this image. */
          Title?: string;
          /** The caption of this image. */
          Caption?: string;
          /** The file format of this image. */
          Format?: string;
          /** The public SmugMug website URL for this image. */
          WebUri?: string;
          /** The original file name of this image. */
          FileName?: string;
          /** The keywords attached to this image. */
          Keywords?: string;
          /** When this image was created or uploaded. */
          Date?: string;
          /** When this image was last updated. */
          LastUpdated?: string;
          /** The original width in pixels. */
          OriginalWidth?: number;
          /** The original height in pixels. */
          OriginalHeight?: number;
          /** Whether this media item is a video. */
          IsVideo?: boolean;
          /** The related URIs available from this image. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the metadata extracted from a SmugMug image file. */
    "smugmug.get_image_metadata": {
      input: {
        /**
         * The SmugMug image key.
         * @minLength 1
         */
        imageKey: string;
      };
      output: {
        /** The image metadata object. */
        imageMetadata: {
          /** The API URI for this image metadata object. */
          Uri?: string;
          /** The title stored in the image metadata. */
          Title?: string;
          /** The caption stored in the image metadata. */
          Caption?: string;
          /** The camera make stored in the image metadata. */
          Make?: string;
          /** The camera model stored in the image metadata. */
          Model?: string;
          /** The lens information stored in the image metadata. */
          Lens?: string;
          /** The ISO value stored in the image metadata. */
          ISO?: unknown;
          /** The exposure value stored in the image metadata. */
          Exposure?: unknown;
          /** The aperture value stored in the image metadata. */
          Aperture?: unknown;
          /** The focal length stored in the image metadata. */
          FocalLength?: unknown;
          /** When the image was created according to the metadata. */
          DateCreated?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the full SmugMug image size details payload for an image. */
    "smugmug.get_image_size_details": {
      input: {
        /**
         * The SmugMug image key.
         * @minLength 1
         */
        imageKey: string;
      };
      output: {
        /** The full image size details payload. */
        imageSizeDetails: {
          /** The API URI for this image size details object. */
          Uri?: string;
          /** The human-readable description of this image size details object. */
          UriDescription?: string;
          /** The URL template for image size rendering. */
          ImageURLTemplate?: string;
          /** The list of usable size buckets. */
          UsableSizes?: Array<string>;
          /** The tiny size details. */
          ImageSizeTiny?: Record<string, unknown>;
          /** The thumb size details. */
          ImageSizeThumb?: Record<string, unknown>;
          /** The small size details. */
          ImageSizeSmall?: Record<string, unknown>;
          /** The medium size details. */
          ImageSizeMedium?: Record<string, unknown>;
          /** The large size details. */
          ImageSizeLarge?: Record<string, unknown>;
          /** The extra-large size details. */
          ImageSizeXLarge?: Record<string, unknown>;
          /** The original size details. */
          ImageSizeOriginal?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
    };
    /** Summarize the usable image sizes for a SmugMug image from the official image size details payload. */
    "smugmug.get_image_sizes": {
      input: {
        /**
         * The SmugMug image key.
         * @minLength 1
         */
        imageKey: string;
      };
      output: {
        /** The list of usable SmugMug size buckets. */
        usableSizes: Array<string>;
        /** The summarized size variants available for the image. */
        sizes: Array<{
          /** The SmugMug size bucket name. */
          name: string;
          /** The direct URL for this image size. */
          url?: string;
          /** The width in pixels. */
          width?: number;
          /** The height in pixels. */
          height?: number;
          /** The asset size in bytes. */
          size?: number;
          /** The file extension for this image size. */
          ext?: string;
          /** The MD5 checksum for this image size. */
          md5?: string;
        }>;
      };
    };
    /** Retrieve the highlight image for a SmugMug node. */
    "smugmug.get_node_highlight_image": {
      input: {
        /**
         * The SmugMug node ID.
         * @minLength 1
         */
        nodeId: string;
      };
      output: {
        /** The highlight image for the node. */
        highlightImage: {
          /** The API URI for this image. */
          Uri?: string;
          /** The unique key of this image. */
          ImageKey?: string;
          /** The title of this image. */
          Title?: string;
          /** The caption of this image. */
          Caption?: string;
          /** The file format of this image. */
          Format?: string;
          /** The public SmugMug website URL for this image. */
          WebUri?: string;
          /** The original file name of this image. */
          FileName?: string;
          /** The keywords attached to this image. */
          Keywords?: string;
          /** When this image was created or uploaded. */
          Date?: string;
          /** When this image was last updated. */
          LastUpdated?: string;
          /** The original width in pixels. */
          OriginalWidth?: number;
          /** The original height in pixels. */
          OriginalHeight?: number;
          /** Whether this media item is a video. */
          IsVideo?: boolean;
          /** The related URIs available from this image. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the direct parent node of a SmugMug node. */
    "smugmug.get_node_parent": {
      input: {
        /**
         * The SmugMug node ID.
         * @minLength 1
         */
        nodeId: string;
      };
      output: {
        /** The direct parent node. */
        parentNode: {
          /** The API URI for this node. */
          Uri?: string;
          /** The unique identifier of this node. */
          NodeID?: string;
          /** The node type, such as Folder, Album, or Page. */
          Type?: string;
          /** The display name of this node. */
          Name?: string;
          /** The URL-safe name of this node. */
          UrlName?: string;
          /** The URL path of this node. */
          UrlPath?: string;
          /** The public SmugMug website URL for this node. */
          WebUri?: string;
          /** The description of this node. */
          Description?: string;
          /** The privacy setting of this node. */
          Privacy?: string;
          /** The security type of this node. */
          SecurityType?: string;
          /** Whether this node has child nodes. */
          HasChildren?: boolean;
          /** Whether this node is the root node. */
          IsRoot?: boolean;
          /** When this node was created. */
          DateAdded?: string;
          /** When this node was last modified. */
          DateModified?: string;
          /** The related URIs available from this node. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the breadcrumb trail of parent nodes for a SmugMug node. */
    "smugmug.get_node_parents": {
      input: {
        /**
         * The SmugMug node ID.
         * @minLength 1
         */
        nodeId: string;
      };
      output: {
        /** The node breadcrumb trail from root to parent. */
        parentNodes: Array<{
          /** The API URI for this node. */
          Uri?: string;
          /** The unique identifier of this node. */
          NodeID?: string;
          /** The node type, such as Folder, Album, or Page. */
          Type?: string;
          /** The display name of this node. */
          Name?: string;
          /** The URL-safe name of this node. */
          UrlName?: string;
          /** The URL path of this node. */
          UrlPath?: string;
          /** The public SmugMug website URL for this node. */
          WebUri?: string;
          /** The description of this node. */
          Description?: string;
          /** The privacy setting of this node. */
          Privacy?: string;
          /** The security type of this node. */
          SecurityType?: string;
          /** Whether this node has child nodes. */
          HasChildren?: boolean;
          /** Whether this node is the root node. */
          IsRoot?: boolean;
          /** When this node was created. */
          DateAdded?: string;
          /** When this node was last modified. */
          DateModified?: string;
          /** The related URIs available from this node. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the parent node list. */
        pages: {
          /** The number of items returned in the current page. */
          count: number;
          /** The 1-based start index of the current page. */
          start: number;
          /** The total number of available items. */
          total: number;
          /** The API URI for the first page of results. */
          firstPage?: string;
          /** The API URI for the previous page of results. */
          prevPage?: string;
          /** The API URI for the next page of results. */
          nextPage?: string;
          /** The API URI for the last page of results. */
          lastPage?: string;
          /** The number of items that were requested. */
          requestedCount?: number;
        };
      };
    };
    /** Retrieve a SmugMug user by nickname. */
    "smugmug.get_user": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
      };
      output: {
        /** The SmugMug user object. */
        user: {
          /** The API URI for this user. */
          Uri?: string;
          /** The public SmugMug website URL for this user. */
          WebUri?: string;
          /** The unique SmugMug nickname for this user. */
          NickName?: string;
          /** The display name of this user. */
          Name?: string;
          /** The hint for the site password, if any. */
          ViewPassHint?: string;
          /** The access level reflected in this response. */
          ResponseLevel?: string;
          /** The related URIs available from this user object. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the bio image for a SmugMug user. */
    "smugmug.get_user_bio_image": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
      };
      output: {
        /** The SmugMug bio image object. */
        bioImage: {
          /** The API URI for this image. */
          Uri?: string;
          /** The unique key of this image. */
          ImageKey?: string;
          /** The title of this image. */
          Title?: string;
          /** The caption of this image. */
          Caption?: string;
          /** The file format of this image. */
          Format?: string;
          /** The public SmugMug website URL for this image. */
          WebUri?: string;
          /** The original file name of this image. */
          FileName?: string;
          /** The keywords attached to this image. */
          Keywords?: string;
          /** When this image was created or uploaded. */
          Date?: string;
          /** When this image was last updated. */
          LastUpdated?: string;
          /** The original width in pixels. */
          OriginalWidth?: number;
          /** The original height in pixels. */
          OriginalHeight?: number;
          /** Whether this media item is a video. */
          IsVideo?: boolean;
          /** The related URIs available from this image. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the featured albums for a SmugMug user. */
    "smugmug.get_user_featured_albums": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
      };
      output: {
        /** The featured albums for the user. */
        featuredAlbums: Array<{
          /** The API URI for this album. */
          Uri?: string;
          /** The unique key of this album. */
          AlbumKey?: string;
          /** The node identifier associated with this album. */
          NodeID?: string;
          /** The display name of this album. */
          Name?: string;
          /** The title of this album. */
          Title?: string;
          /** The URL-safe name of this album. */
          UrlName?: string;
          /** The URL path of this album. */
          UrlPath?: string;
          /** The public SmugMug website URL for this album. */
          WebUri?: string;
          /** The description of this album. */
          Description?: string;
          /** The keywords attached to this album. */
          Keywords?: string;
          /** The number of images in this album. */
          ImageCount?: number;
          /** When this album was last updated. */
          LastUpdated?: string;
          /** The access level reflected in this response. */
          ResponseLevel?: string;
          /** The related URIs available from this album. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the featured album list. */
        pages: {
          /** The number of items returned in the current page. */
          count: number;
          /** The 1-based start index of the current page. */
          start: number;
          /** The total number of available items. */
          total: number;
          /** The API URI for the first page of results. */
          firstPage?: string;
          /** The API URI for the previous page of results. */
          prevPage?: string;
          /** The API URI for the next page of results. */
          nextPage?: string;
          /** The API URI for the last page of results. */
          lastPage?: string;
          /** The number of items that were requested. */
          requestedCount?: number;
        };
      };
    };
    /** Retrieve the feature and entitlement map for a SmugMug user. */
    "smugmug.get_user_features": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
      };
      output: {
        /** The feature map returned by SmugMug. */
        features: Record<string, unknown>;
      };
    };
    /** Retrieve the public profile for a SmugMug user. */
    "smugmug.get_user_profile": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
      };
      output: {
        /** The SmugMug user profile object. */
        userProfile: {
          /** The API URI for this user profile. */
          Uri?: string;
          /** The biography text for the user. */
          BioText?: string;
          /** The first name of the user. */
          FirstName?: string;
          /** The last name of the user. */
          LastName?: string;
          /** The website URL listed on the profile. */
          Website?: string;
          /** The Facebook URL listed on the profile. */
          Facebook?: string;
          /** The Twitter URL listed on the profile. */
          Twitter?: string;
          /** The Instagram URL listed on the profile. */
          Instagram?: string;
          /** The YouTube URL listed on the profile. */
          YouTube?: string;
          /** The related URIs available from this user profile. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** Retrieve the root node for a SmugMug user. */
    "smugmug.get_user_root_node": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
      };
      output: {
        /** The root node of the user. */
        rootNode: {
          /** The API URI for this node. */
          Uri?: string;
          /** The unique identifier of this node. */
          NodeID?: string;
          /** The node type, such as Folder, Album, or Page. */
          Type?: string;
          /** The display name of this node. */
          Name?: string;
          /** The URL-safe name of this node. */
          UrlName?: string;
          /** The URL path of this node. */
          UrlPath?: string;
          /** The public SmugMug website URL for this node. */
          WebUri?: string;
          /** The description of this node. */
          Description?: string;
          /** The privacy setting of this node. */
          Privacy?: string;
          /** The security type of this node. */
          SecurityType?: string;
          /** Whether this node has child nodes. */
          HasChildren?: boolean;
          /** Whether this node is the root node. */
          IsRoot?: boolean;
          /** When this node was created. */
          DateAdded?: string;
          /** When this node was last modified. */
          DateModified?: string;
          /** The related URIs available from this node. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        };
      };
    };
    /** List the immediate child nodes under a SmugMug node. */
    "smugmug.list_child_nodes": {
      input: {
        /**
         * The SmugMug node ID.
         * @minLength 1
         */
        nodeId: string;
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The 1-based start index for pagination.
         * @minimum 1
         */
        start?: number;
      };
      output: {
        /** The direct child nodes. */
        nodes: Array<{
          /** The API URI for this node. */
          Uri?: string;
          /** The unique identifier of this node. */
          NodeID?: string;
          /** The node type, such as Folder, Album, or Page. */
          Type?: string;
          /** The display name of this node. */
          Name?: string;
          /** The URL-safe name of this node. */
          UrlName?: string;
          /** The URL path of this node. */
          UrlPath?: string;
          /** The public SmugMug website URL for this node. */
          WebUri?: string;
          /** The description of this node. */
          Description?: string;
          /** The privacy setting of this node. */
          Privacy?: string;
          /** The security type of this node. */
          SecurityType?: string;
          /** Whether this node has child nodes. */
          HasChildren?: boolean;
          /** Whether this node is the root node. */
          IsRoot?: boolean;
          /** When this node was created. */
          DateAdded?: string;
          /** When this node was last modified. */
          DateModified?: string;
          /** The related URIs available from this node. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the child node list. */
        pages: {
          /** The number of items returned in the current page. */
          count: number;
          /** The 1-based start index of the current page. */
          start: number;
          /** The total number of available items. */
          total: number;
          /** The API URI for the first page of results. */
          firstPage?: string;
          /** The API URI for the previous page of results. */
          prevPage?: string;
          /** The API URI for the next page of results. */
          nextPage?: string;
          /** The API URI for the last page of results. */
          lastPage?: string;
          /** The number of items that were requested. */
          requestedCount?: number;
        };
      };
    };
    /** Search a SmugMug user's images by query text, with optional ordering and pagination. */
    "smugmug.search_user_content": {
      input: {
        /**
         * The SmugMug nickname of the user.
         * @minLength 1
         */
        nickname: string;
        /**
         * The search query text.
         * @minLength 1
         */
        query: string;
        /** The ordering to apply to the search results. */
        order?: "Popular" | "Oldest" | "Newest";
        /**
         * The number of results to return per page.
         * @minimum 1
         * @maximum 100
         */
        count?: number;
        /**
         * The 1-based start index for pagination.
         * @minimum 1
         */
        start?: number;
      };
      output: {
        /** The matching images. */
        images: Array<{
          /** The API URI for this image. */
          Uri?: string;
          /** The unique key of this image. */
          ImageKey?: string;
          /** The title of this image. */
          Title?: string;
          /** The caption of this image. */
          Caption?: string;
          /** The file format of this image. */
          Format?: string;
          /** The public SmugMug website URL for this image. */
          WebUri?: string;
          /** The original file name of this image. */
          FileName?: string;
          /** The keywords attached to this image. */
          Keywords?: string;
          /** When this image was created or uploaded. */
          Date?: string;
          /** When this image was last updated. */
          LastUpdated?: string;
          /** The original width in pixels. */
          OriginalWidth?: number;
          /** The original height in pixels. */
          OriginalHeight?: number;
          /** Whether this media item is a video. */
          IsVideo?: boolean;
          /** The related URIs available from this image. */
          Uris?: Record<string, string | {
              /** The API URI for the related resource. */
              Uri?: string;
              /** The locator name of the related resource. */
              Locator?: string;
              /** Whether the related resource is an object or a list. */
              LocatorType?: string;
              /** The human-readable description of the related resource. */
              UriDescription?: string;
              /** The endpoint type of the related resource. */
              EndpointType?: string;
              [key: string]: unknown;
            }>;
          [key: string]: unknown;
        }>;
        /** The pagination metadata for the search results. */
        pages: {
          /** The number of items returned in the current page. */
          count: number;
          /** The 1-based start index of the current page. */
          start: number;
          /** The total number of available items. */
          total: number;
          /** The API URI for the first page of results. */
          firstPage?: string;
          /** The API URI for the previous page of results. */
          prevPage?: string;
          /** The API URI for the next page of results. */
          nextPage?: string;
          /** The API URI for the last page of results. */
          lastPage?: string;
          /** The number of items that were requested. */
          requestedCount?: number;
        };
      };
    };
  }
}
