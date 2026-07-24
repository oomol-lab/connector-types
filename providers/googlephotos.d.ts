import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an enrichment item to a Google Photos album. */
    "googlephotos.add_enrichment": {
      input: {
        /**
         * The ID of the album to add the enrichment to.
         * @minLength 1
         */
        albumId: string;
        /** The position in the album at which to insert the enrichment item. */
        albumPosition: {
          /** The position type within the album. */
          position: "POSITION_TYPE_UNSPECIFIED" | "FIRST_IN_ALBUM" | "LAST_IN_ALBUM" | "AFTER_MEDIA_ITEM" | "AFTER_ENRICHMENT_ITEM";
          /**
           * The media item ID to position after when position is AFTER_MEDIA_ITEM.
           * @minLength 1
           */
          relativeMediaItemId?: string;
          /**
           * The enrichment item ID to position after when position is AFTER_ENRICHMENT_ITEM.
           * @minLength 1
           */
          relativeEnrichmentItemId?: string;
        };
        /** The enrichment item to add (text, location, or map). */
        newEnrichmentItem: {
          /** A text enrichment item. */
          textEnrichment?: {
            /**
             * The text content of the enrichment item.
             * @minLength 1
             */
            text: string;
          };
          /** A location enrichment item. */
          locationEnrichment?: {
            /** The named location for the location enrichment. */
            location: {
              /**
               * The name of the location.
               * @minLength 1
               */
              locationName: string;
              /** The geographic coordinates of the location. */
              latlng: {
                /** The latitude in decimal degrees. */
                latitude: number;
                /** The longitude in decimal degrees. */
                longitude: number;
              };
            };
          };
          /** A map enrichment item showing a route between two locations. */
          mapEnrichment?: {
            /** The origin location for the map enrichment. */
            origin: {
              /**
               * The name of the location.
               * @minLength 1
               */
              locationName: string;
              /** The geographic coordinates of the location. */
              latlng: {
                /** The latitude in decimal degrees. */
                latitude: number;
                /** The longitude in decimal degrees. */
                longitude: number;
              };
            };
            /** The destination location for the map enrichment. */
            destination: {
              /**
               * The name of the location.
               * @minLength 1
               */
              locationName: string;
              /** The geographic coordinates of the location. */
              latlng: {
                /** The latitude in decimal degrees. */
                latitude: number;
                /** The longitude in decimal degrees. */
                longitude: number;
              };
            };
          };
        };
      };
      output: {
        /** The ID of the album to which the enrichment was added. */
        albumId: string;
        /** The created enrichment item returned by the API. */
        enrichmentItem?: Record<string, unknown>;
      };
    };
    /** Add existing Google Photos media items to an album. */
    "googlephotos.batch_add_media_items": {
      input: {
        /**
         * The ID of the album to add the media items to.
         * @minLength 1
         */
        albumId: string;
        /**
         * The list of media item IDs to add to the album (1–50).
         * @minItems 1
         * @maxItems 50
         */
        mediaItemIds: Array<string>;
      };
      output: {
        /** The ID of the album to which the items were added. */
        albumId: string;
        /** The number of media items successfully added. */
        mediaItemsAdded: number;
        /** A human-readable summary of the operation result. */
        message: string;
      };
    };
    /** Batch create Google Photos media items from URLs or base64 payloads. */
    "googlephotos.batch_create_media_items": {
      input: {
        /**
         * A list of URLs of media files to upload (maximum 50).
         * @maxItems 50
         */
        urls?: Array<string>;
        /**
         * A list of media file inputs to upload (maximum 50).
         * @maxItems 50
         */
        mediaFiles?: Array<{
          /**
           * The URL of the media file to upload.
           * @format uri
           */
          url?: string;
          /**
           * The base64-encoded content of the media file to upload.
           * @minLength 1
           */
          contentBase64?: string;
          /**
           * The filename for the uploaded media item.
           * @minLength 1
           */
          fileName?: string;
          /**
           * The MIME type of the media file.
           * @minLength 1
           */
          mimeType?: string;
          /**
           * A description for the uploaded media item.
           * @maxLength 1000
           */
          description?: string;
          /** Unsupported: file uploadable input (not supported). */
          file?: unknown;
          /** Unsupported: S3 key input (not supported). */
          s3key?: string;
        }>;
        /** Unsupported: file uploadable inputs (not supported). */
        files?: unknown;
        /**
         * The ID of the album to add the media items to.
         * @minLength 1
         */
        albumId?: string;
        /** The position in the album at which to insert the media items. */
        albumPosition?: {
          /** The position type within the album. */
          position: "POSITION_TYPE_UNSPECIFIED" | "FIRST_IN_ALBUM" | "LAST_IN_ALBUM" | "AFTER_MEDIA_ITEM" | "AFTER_ENRICHMENT_ITEM";
          /**
           * The media item ID to position after when position is AFTER_MEDIA_ITEM.
           * @minLength 1
           */
          relativeMediaItemId?: string;
          /**
           * The enrichment item ID to position after when position is AFTER_ENRICHMENT_ITEM.
           * @minLength 1
           */
          relativeEnrichmentItemId?: string;
        };
      };
      output: {
        /** The list of newly created media item results returned by the API. */
        newMediaItemResults: Array<Record<string, unknown>>;
      };
    };
    /** Fetch multiple Google Photos media items by ID. */
    "googlephotos.batch_get_media_items": {
      input: {
        /**
         * The list of media item IDs to fetch (1–50).
         * @minItems 1
         * @maxItems 50
         */
        mediaItemIds: Array<string>;
      };
      output: {
        /** The list of media item results returned by the API. */
        mediaItemResults: Array<Record<string, unknown>>;
      };
    };
    /** Create a Google Photos album. */
    "googlephotos.create_album": {
      input: {
        /**
         * The title for the new album (maximum 500 characters).
         * @maxLength 500
         */
        title: string;
      };
      output: {
        /** The newly created album. */
        album: {
          /** The unique identifier for the album. */
          id: string;
          /** The title of the album. */
          title: string;
          /** The URL to the album in Google Photos. */
          productUrl: string | null;
          /** The number of media items in the album. */
          mediaItemsCount: string | null;
          /** The base URL of the album cover photo. */
          coverPhotoBaseUrl: string | null;
          /** The media item ID of the album cover photo. */
          coverPhotoMediaItemId: string | null;
          /** Whether the album is writable by the current user. */
          isWriteable?: boolean;
          /** Sharing information for the album. */
          shareInfo: Record<string, unknown> | null;
        };
      };
    };
    /** Create a Google Photos Picker session for selecting items from the user's library. */
    "googlephotos.create_picker_session": {
      input: {
        /**
         * The maximum number of media items the user can pick.
         * @exclusiveMinimum 0
         */
        maxItemCount?: number;
      };
      output: {
        /** The created picker session. */
        session: {
          /** The unique identifier for the picker session. */
          id: string;
          /** The time at which the picker session expires. */
          expireTime: string;
          /** Whether the user has finished selecting media items for this session. */
          mediaItemsSet: boolean;
          /** Polling guidance returned by the Picker API. */
          pollingConfig?: {
            /**
             * The recommended polling interval duration.
             * @minLength 1
             */
            pollInterval: string;
            /**
             * The recommended polling timeout duration.
             * @minLength 1
             */
            timeoutIn: string;
          };
          /** The Google Photos Picker URI for this session. */
          pickerUri: string;
        };
      };
    };
    /** Delete a Google Photos Picker session. */
    "googlephotos.delete_picker_session": {
      input: {
        /**
         * The ID of the picker session to delete.
         * @minLength 1
         */
        sessionId: string;
      };
      output: {
        /** The deleted picker session ID. */
        sessionId: string;
        /** Whether the picker session was deleted. */
        deleted: true;
      };
    };
    /** Fetch one Google Photos album by ID. */
    "googlephotos.get_album": {
      input: {
        /**
         * The ID of the album to fetch.
         * @minLength 1
         */
        albumId: string;
      };
      output: {
        /** The fetched album. */
        album: {
          /** The unique identifier for the album. */
          id: string;
          /** The title of the album. */
          title: string;
          /** The URL to the album in Google Photos. */
          productUrl: string | null;
          /** The number of media items in the album. */
          mediaItemsCount: string | null;
          /** The base URL of the album cover photo. */
          coverPhotoBaseUrl: string | null;
          /** The media item ID of the album cover photo. */
          coverPhotoMediaItemId: string | null;
          /** Whether the album is writable by the current user. */
          isWriteable?: boolean;
          /** Sharing information for the album. */
          shareInfo: Record<string, unknown> | null;
        };
      };
    };
    /** Download a Google Photos Library API media item created by this application through connector file transit. */
    "googlephotos.get_media_item_download": {
      input: {
        /**
         * The ID of the media item to download.
         * @minLength 1
         */
        mediaItemId: string;
      };
      output: {
        /** The ID of the downloaded media item. */
        mediaItemId: string;
        /** The filename of the downloaded media item. */
        fileName: string;
        /** The MIME type of the downloaded media item. */
        mimeType: string;
        /** The connector file transit URL for downloading the media item. */
        transitUrl: string;
      };
    };
    /** Download a picked Google Photos media item through connector file transit using its trusted temporary base URL. */
    "googlephotos.get_picked_media_item_download": {
      input: {
        /** The temporary download base URL for the picked media item. */
        baseUrl: string;
        /** The MIME type of the picked media item. */
        mimeType: string;
        /** The filename of the picked media item. */
        filename: string;
        /** The type of the picked media item. */
        type: "TYPE_UNSPECIFIED" | "PHOTO" | "VIDEO";
        /** Metadata for the picked media file. */
        mediaFileMetadata?: {
          /** Video-specific metadata returned by Google Photos Picker. */
          videoMetadata?: {
            /** The video processing status returned by Google Photos Picker. */
            processingStatus?: "UNSPECIFIED" | "PROCESSING" | "READY" | "FAILED";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        };
      };
      output: {
        /** The filename of the downloaded picked media item. */
        fileName: string;
        /** The MIME type of the downloaded picked media item. */
        mimeType: string;
        /** The connector file transit URL for downloading the picked media item. */
        transitUrl: string;
      };
    };
    /** Get the current state of a Google Photos Picker session. */
    "googlephotos.get_picker_session": {
      input: {
        /**
         * The ID of the picker session.
         * @minLength 1
         */
        sessionId: string;
      };
      output: {
        /** The picker session. */
        session: {
          /** The unique identifier for the picker session. */
          id: string;
          /** The time at which the picker session expires. */
          expireTime: string;
          /** Whether the user has finished selecting media items for this session. */
          mediaItemsSet: boolean;
          /** Polling guidance returned by the Picker API. */
          pollingConfig?: {
            /**
             * The recommended polling interval duration.
             * @minLength 1
             */
            pollInterval: string;
            /**
             * The recommended polling timeout duration.
             * @minLength 1
             */
            timeoutIn: string;
          };
          /** The Google Photos Picker URI for this session. */
          pickerUri?: string;
        };
      };
    };
    /** List Google Photos albums visible to the current application connection. If you need the user to choose from their existing Google Photos library, use the Picker actions instead. */
    "googlephotos.list_albums": {
      input: {
        /**
         * The maximum number of albums to return per page (1–50).
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** A page token to retrieve the next page of results. */
        pageToken?: string;
      };
      output: {
        /** The list of albums. */
        albums: Array<{
          /** The unique identifier for the album. */
          id: string;
          /** The title of the album. */
          title: string;
          /** The URL to the album in Google Photos. */
          productUrl: string | null;
          /** The number of media items in the album. */
          mediaItemsCount: string | null;
          /** The base URL of the album cover photo. */
          coverPhotoBaseUrl: string | null;
          /** The media item ID of the album cover photo. */
          coverPhotoMediaItemId: string | null;
          /** Whether the album is writable by the current user. */
          isWriteable?: boolean;
          /** Sharing information for the album. */
          shareInfo: Record<string, unknown> | null;
        }>;
        /** A token to retrieve the next page of results, if any. */
        nextPageToken: string | null;
        /** An optional hint explaining that empty results may reflect the Google Photos Library API app-created data boundary and that Picker actions can be used to select from the user's existing library. */
        message?: string;
      };
    };
    /** List Google Photos Library API media items created by this application. */
    "googlephotos.list_media_items": {
      input: {
        /**
         * The maximum number of media items to return per page (1–100).
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** A page token to retrieve the next page of results. */
        pageToken?: string;
      };
      output: {
        /** The list of media items. */
        mediaItems: Array<{
          /** The unique identifier for the media item. */
          id: string;
          /** The user-provided description of the media item. */
          description: string | null;
          /** The URL to the media item in Google Photos. */
          productUrl: string | null;
          /** The base URL for the media item content. */
          baseUrl: string | null;
          /** The MIME type of the media item. */
          mimeType: string | null;
          /** The filename of the media item. */
          filename: string | null;
          /** Metadata about the media item. */
          mediaMetadata: {
            /** The time the media item was created. */
            creationTime: string | null;
            /** The width of the media item in pixels. */
            width: string | null;
            /** The height of the media item in pixels. */
            height: string | null;
            /** Photo-specific metadata. */
            photo?: Record<string, unknown>;
            /** Video-specific metadata. */
            video?: Record<string, unknown>;
          };
          /** Information about the contributor of the media item. */
          contributorInfo: Record<string, unknown> | null;
        }>;
        /** A token to retrieve the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** List media items selected from the user's Google Photos library in a picker session. */
    "googlephotos.list_picked_media_items": {
      input: {
        /**
         * The ID of the picker session.
         * @minLength 1
         */
        sessionId: string;
        /**
         * The maximum number of picked media items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /** A page token to retrieve the next page of picked media items. */
        pageToken?: string;
      };
      output: {
        /** The picked media items selected in this picker session. */
        mediaItems: Array<{
          /** The unique identifier for the picked media item. */
          id: string;
          /** The creation time of the picked media item. */
          createTime: string;
          /** The type of the picked media item. */
          type: "TYPE_UNSPECIFIED" | "PHOTO" | "VIDEO";
          /** The temporary download base URL for the picked media item. */
          baseUrl: string;
          /** The MIME type of the picked media item. */
          mimeType: string;
          /** The filename of the picked media item. */
          filename: string;
          /** Metadata for the picked media file. */
          mediaFileMetadata: {
            /** Video-specific metadata returned by Google Photos Picker. */
            videoMetadata?: {
              /** The video processing status returned by Google Photos Picker. */
              processingStatus?: "UNSPECIFIED" | "PROCESSING" | "READY" | "FAILED";
              [key: string]: unknown;
            };
            [key: string]: unknown;
          };
        }>;
        /** A token to retrieve the next page of picked media items, if any. */
        nextPageToken: string | null;
      };
    };
    /** Search Google Photos Library API media items created by this application. */
    "googlephotos.search_media_items": {
      input: {
        /**
         * The ID of the album to search within.
         * @minLength 1
         */
        albumId?: string;
        /**
         * The maximum number of media items to return per page (1–100).
         * @minimum 1
         * @maximum 100
         */
        pageSize?: number;
        /** A page token to retrieve the next page of results. */
        pageToken?: string;
        /** The sort order for the results. */
        orderBy?: string;
        /** Filters to apply to the media item search. */
        filters?: Record<string, unknown>;
      };
      output: {
        /** The list of matching media items. */
        mediaItems: Array<{
          /** The unique identifier for the media item. */
          id: string;
          /** The user-provided description of the media item. */
          description: string | null;
          /** The URL to the media item in Google Photos. */
          productUrl: string | null;
          /** The base URL for the media item content. */
          baseUrl: string | null;
          /** The MIME type of the media item. */
          mimeType: string | null;
          /** The filename of the media item. */
          filename: string | null;
          /** Metadata about the media item. */
          mediaMetadata: {
            /** The time the media item was created. */
            creationTime: string | null;
            /** The width of the media item in pixels. */
            width: string | null;
            /** The height of the media item in pixels. */
            height: string | null;
            /** Photo-specific metadata. */
            photo?: Record<string, unknown>;
            /** Video-specific metadata. */
            video?: Record<string, unknown>;
          };
          /** Information about the contributor of the media item. */
          contributorInfo: Record<string, unknown> | null;
        }>;
        /** A token to retrieve the next page of results, if any. */
        nextPageToken: string | null;
      };
    };
    /** Update a Google Photos album title or cover photo. */
    "googlephotos.update_album": {
      input: {
        /**
         * The ID of the album to update.
         * @minLength 1
         */
        albumId: string;
        /**
         * The new title for the album (maximum 500 characters).
         * @maxLength 500
         */
        title?: string;
        /**
         * The media item ID to set as the new album cover photo.
         * @minLength 1
         */
        coverPhotoMediaItemId?: string;
      };
      output: {
        /** The updated album. */
        album: {
          /** The unique identifier for the album. */
          id: string;
          /** The title of the album. */
          title: string;
          /** The URL to the album in Google Photos. */
          productUrl: string | null;
          /** The number of media items in the album. */
          mediaItemsCount: string | null;
          /** The base URL of the album cover photo. */
          coverPhotoBaseUrl: string | null;
          /** The media item ID of the album cover photo. */
          coverPhotoMediaItemId: string | null;
          /** Whether the album is writable by the current user. */
          isWriteable?: boolean;
          /** Sharing information for the album. */
          shareInfo: Record<string, unknown> | null;
        };
      };
    };
    /** Update a Google Photos media item description. */
    "googlephotos.update_media_item": {
      input: {
        /**
         * The ID of the media item to update.
         * @minLength 1
         */
        mediaItemId: string;
        /**
         * The new description for the media item (maximum 1000 characters).
         * @maxLength 1000
         */
        description: string;
      };
      output: {
        /** The updated media item. */
        mediaItem: {
          /** The unique identifier for the media item. */
          id: string;
          /** The user-provided description of the media item. */
          description: string | null;
          /** The URL to the media item in Google Photos. */
          productUrl: string | null;
          /** The base URL for the media item content. */
          baseUrl: string | null;
          /** The MIME type of the media item. */
          mimeType: string | null;
          /** The filename of the media item. */
          filename: string | null;
          /** Metadata about the media item. */
          mediaMetadata: {
            /** The time the media item was created. */
            creationTime: string | null;
            /** The width of the media item in pixels. */
            width: string | null;
            /** The height of the media item in pixels. */
            height: string | null;
            /** Photo-specific metadata. */
            photo?: Record<string, unknown>;
            /** Video-specific metadata. */
            video?: Record<string, unknown>;
          };
          /** Information about the contributor of the media item. */
          contributorInfo: Record<string, unknown> | null;
        };
      };
    };
    /** Upload one media item into Google Photos from a URL or base64 payload. */
    "googlephotos.upload_media": {
      input: {
        /**
         * The URL of the media file to upload.
         * @format uri
         */
        url?: string;
        /**
         * The base64-encoded content of the media file to upload.
         * @minLength 1
         */
        contentBase64?: string;
        /**
         * The filename for the uploaded media item.
         * @minLength 1
         */
        fileName?: string;
        /**
         * The MIME type of the media file.
         * @minLength 1
         */
        mimeType?: string;
        /**
         * A description for the uploaded media item.
         * @maxLength 1000
         */
        description?: string;
        /** Unsupported: S3 key input (not supported). */
        s3key?: string;
        /** Unsupported: file uploadable input (not supported). */
        file_to_upload?: unknown;
      };
      output: {
        /** The uploaded media item. */
        mediaItem: {
          /** The unique identifier for the media item. */
          id: string;
          /** The user-provided description of the media item. */
          description: string | null;
          /** The URL to the media item in Google Photos. */
          productUrl: string | null;
          /** The base URL for the media item content. */
          baseUrl: string | null;
          /** The MIME type of the media item. */
          mimeType: string | null;
          /** The filename of the media item. */
          filename: string | null;
          /** Metadata about the media item. */
          mediaMetadata: {
            /** The time the media item was created. */
            creationTime: string | null;
            /** The width of the media item in pixels. */
            width: string | null;
            /** The height of the media item in pixels. */
            height: string | null;
            /** Photo-specific metadata. */
            photo?: Record<string, unknown>;
            /** Video-specific metadata. */
            video?: Record<string, unknown>;
          };
          /** Information about the contributor of the media item. */
          contributorInfo: Record<string, unknown> | null;
        };
      };
    };
  }
}
