import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add one or more tags to a Vimeo video. */
    "vimeo.add_video_tags": {
      input: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
        /**
         * Tag names to add to the Vimeo video.
         * @minItems 1
         * @maxItems 20
         */
        tags: Array<string>;
      };
      output: {
        /** The tags returned by Vimeo. */
        tags: Array<{
          /** The tag name. */
          name?: string;
          /** The tag value returned by Vimeo when present. */
          tag?: string;
          /** The canonical tag value returned by Vimeo when present. */
          canonical?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Add a Vimeo video to a folder. */
    "vimeo.add_video_to_folder": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo folder ID.
         * @minimum 1
         */
        folderId: number;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
      output: {
        /** Whether the connector completed the Vimeo add request. */
        added: boolean;
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId: number | null;
        /**
         * The Vimeo folder ID.
         * @minimum 1
         */
        folderId: number;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
    };
    /** Add a Vimeo video to a showcase. */
    "vimeo.add_video_to_showcase": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo showcase ID.
         * @minimum 1
         */
        showcaseId: number;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
      output: {
        /** Whether the connector completed the Vimeo add request. */
        added: boolean;
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId: number | null;
        /**
         * The Vimeo showcase ID.
         * @minimum 1
         */
        showcaseId: number;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
    };
    /** Create a Vimeo folder for the authenticated user or a specified Vimeo user. */
    "vimeo.create_folder": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The name of the folder.
         * @minLength 1
         */
        name: string;
        /**
         * The Vimeo folder URI, for example `/users/12345/folders/6789`.
         * @minLength 1
         */
        parentFolderUri?: string;
      };
      output: {
        /** A Vimeo folder object returned by the API. */
        folder: {
          /** The Vimeo API URI for the folder. */
          uri?: string;
          /** The folder name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Delete a Vimeo folder, optionally deleting the videos inside it. */
    "vimeo.delete_folder": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo folder ID.
         * @minimum 1
         */
        folderId: number;
        /** Whether Vimeo should also delete videos in the folder. */
        shouldDeleteVideos?: boolean;
      };
      output: {
        /** Whether the connector completed the Vimeo delete request. */
        deleted: boolean;
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId: number | null;
        /**
         * The Vimeo folder ID.
         * @minimum 1
         */
        folderId: number;
      };
    };
    /** Delete a Vimeo video by ID. */
    "vimeo.delete_video": {
      input: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
      output: {
        /** Whether the connector completed the Vimeo delete request. */
        deleted: boolean;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
    };
    /** Remove a tag from a Vimeo video. */
    "vimeo.delete_video_tag": {
      input: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
        /**
         * The tag word to remove from the Vimeo video.
         * @minLength 1
         */
        tag: string;
      };
      output: {
        /** Whether the connector completed the Vimeo delete request. */
        deleted: boolean;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
        /** The tag word removed from the Vimeo video. */
        tag: string;
      };
    };
    /** Download one Vimeo video file link and store it in connector transit storage. */
    "vimeo.download_video_file": {
      input: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
        /**
         * Select a Vimeo download link with this quality label.
         * @minLength 1
         */
        quality?: string;
        /**
         * Select a Vimeo download link with this type or MIME type.
         * @minLength 1
         */
        type?: string;
        /**
         * The filename to use for the transit file.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
        /** The Vimeo download URL that the connector fetched. */
        sourceUrl: string;
        /** The transit file name. */
        name: string;
        /** The MIME type used for the transit upload. */
        mimeType: string;
        /** The downloaded file size in bytes. */
        sizeBytes: number | null;
        /** The connector transit URL for the downloaded video file. */
        transitUrl: string;
      };
    };
    /** Get the authenticated Vimeo user profile. */
    "vimeo.get_current_user": {
      input: Record<string, never>;
      output: {
        /** A Vimeo user object returned by the API. */
        user: {
          /** The Vimeo API URI for the user. */
          uri?: string;
          /** The display name of the Vimeo user. */
          name?: string;
          /** The public Vimeo profile URL. */
          link?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get metadata for a Vimeo folder. */
    "vimeo.get_folder": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo folder ID.
         * @minimum 1
         */
        folderId: number;
      };
      output: {
        /** A Vimeo folder object returned by the API. */
        folder: {
          /** The Vimeo API URI for the folder. */
          uri?: string;
          /** The folder name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get metadata for a specific Vimeo showcase. */
    "vimeo.get_showcase": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo showcase ID.
         * @minimum 1
         */
        showcaseId: number;
      };
      output: {
        /** A Vimeo showcase object returned by the API. */
        showcase: {
          /** The Vimeo API URI for the showcase. */
          uri?: string;
          /** The showcase name. */
          name?: string;
          /** The public Vimeo showcase URL. */
          link?: string;
          /** The showcase description returned by Vimeo. */
          description?: string | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get metadata for a specific Vimeo video. */
    "vimeo.get_video": {
      input: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
      output: {
        /** A Vimeo video object returned by the API. */
        video: {
          /** The Vimeo API URI for the video. */
          uri?: string;
          /** The video title. */
          name?: string;
          /** The public Vimeo video URL. */
          link?: string;
          /** The video description returned by Vimeo. */
          description?: string | null;
          /** The video duration in seconds. */
          duration?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Get temporary downloadable file links for a Vimeo video when Vimeo exposes them. */
    "vimeo.get_video_download_links": {
      input: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
      output: {
        /** The downloadable file links returned by Vimeo. */
        downloadLinks: Array<{
          /** The temporary Vimeo file download URL. */
          link?: string;
          /** The Vimeo quality label for the downloadable file. */
          quality?: string;
          /** The MIME type or file type returned by Vimeo. */
          type?: string;
          /** The file size in bytes reported by Vimeo. */
          size?: number;
          /** When the temporary download URL expires. */
          expires?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List videos in a Vimeo folder. */
    "vimeo.list_folder_videos": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo folder ID.
         * @minimum 1
         */
        folderId: number;
        /**
         * Search query used to filter videos in the folder.
         * @minLength 1
         */
        query?: string;
        /** The way to sort the folder video results. */
        sort?: "alphabetical" | "date" | "default" | "duration" | "last_user_action_event_date";
        /** The sort direction for folder video results. */
        direction?: "asc" | "desc";
        /** Whether Vimeo should include videos from subfolders. */
        includeSubfolders?: boolean;
        /**
         * The page number of the results to show.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to show on each page of results, up to a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The videos returned by Vimeo. */
        data: Array<{
          /** The Vimeo API URI for the video. */
          uri?: string;
          /** The video title. */
          name?: string;
          /** The public Vimeo video URL. */
          link?: string;
          /** The video description returned by Vimeo. */
          description?: string | null;
          /** The video duration in seconds. */
          duration?: number | null;
          [key: string]: unknown;
        }>;
        /** The current page number returned by Vimeo. */
        page: number | null;
        /** The number of items returned per page by Vimeo. */
        perPage: number | null;
        /** The total number of items reported by Vimeo. */
        total: number | null;
        /** The upstream Vimeo paging object, including next and previous page links. */
        paging: Record<string, unknown>;
      };
    };
    /** List folders that belong to the authenticated user or to a specified Vimeo user. */
    "vimeo.list_folders": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * Search query used to filter Vimeo folders.
         * @minLength 1
         */
        query?: string;
        /** The way to sort the Vimeo folder results. */
        sort?: "date" | "default" | "modified_time" | "name" | "pinned_on";
        /** The sort direction for Vimeo folder results. */
        direction?: "asc" | "desc";
        /**
         * The page number of the results to show.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to show on each page of results, up to a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The folders returned by Vimeo. */
        data: Array<{
          /** The Vimeo API URI for the folder. */
          uri?: string;
          /** The folder name. */
          name?: string;
          [key: string]: unknown;
        }>;
        /** The current page number returned by Vimeo. */
        page: number | null;
        /** The number of items returned per page by Vimeo. */
        perPage: number | null;
        /** The total number of items reported by Vimeo. */
        total: number | null;
        /** The upstream Vimeo paging object, including next and previous page links. */
        paging: Record<string, unknown>;
      };
    };
    /** List videos in a Vimeo showcase. */
    "vimeo.list_showcase_videos": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo showcase ID.
         * @minimum 1
         */
        showcaseId: number;
        /** The way to sort the Vimeo showcase videos. */
        sort?: "added_first" | "added_last" | "alphabetical" | "arranged" | "comments" | "date" | "default" | "duration" | "likes" | "manual" | "modified_time" | "plays";
        /** The sort direction for Vimeo showcase videos. */
        direction?: "asc" | "desc";
        /**
         * The page number of the results to show.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to show on each page of results, up to a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The videos returned by Vimeo. */
        data: Array<{
          /** The Vimeo API URI for the video. */
          uri?: string;
          /** The video title. */
          name?: string;
          /** The public Vimeo video URL. */
          link?: string;
          /** The video description returned by Vimeo. */
          description?: string | null;
          /** The video duration in seconds. */
          duration?: number | null;
          [key: string]: unknown;
        }>;
        /** The current page number returned by Vimeo. */
        page: number | null;
        /** The number of items returned per page by Vimeo. */
        perPage: number | null;
        /** The total number of items reported by Vimeo. */
        total: number | null;
        /** The upstream Vimeo paging object, including next and previous page links. */
        paging: Record<string, unknown>;
      };
    };
    /** List showcases that belong to the authenticated user or to a specified Vimeo user. */
    "vimeo.list_showcases": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * Search query used to filter Vimeo showcases.
         * @minLength 1
         */
        query?: string;
        /** The way to sort the Vimeo showcase results. */
        sort?: "alphabetical" | "date" | "default" | "modified_time" | "videos";
        /** The sort direction for Vimeo showcase results. */
        direction?: "asc" | "desc";
        /**
         * The page number of the results to show.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to show on each page of results, up to a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The showcases returned by Vimeo. */
        data: Array<{
          /** The Vimeo API URI for the showcase. */
          uri?: string;
          /** The showcase name. */
          name?: string;
          /** The public Vimeo showcase URL. */
          link?: string;
          /** The showcase description returned by Vimeo. */
          description?: string | null;
          [key: string]: unknown;
        }>;
        /** The current page number returned by Vimeo. */
        page: number | null;
        /** The number of items returned per page by Vimeo. */
        perPage: number | null;
        /** The total number of items reported by Vimeo. */
        total: number | null;
        /** The upstream Vimeo paging object, including next and previous page links. */
        paging: Record<string, unknown>;
      };
    };
    /** List videos uploaded by the authenticated user or by a specified Vimeo user. */
    "vimeo.list_user_videos": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * Search query used to filter the user's videos.
         * @minLength 1
         */
        query?: string;
        /** The way to sort the Vimeo video results. */
        sort?: "alphabetical" | "date" | "default" | "duration" | "last_user_action_event_date" | "likes" | "modified_time" | "plays";
        /** The sort direction for Vimeo video results. */
        direction?: "asc" | "desc";
        /** The Vimeo video filter to apply. */
        filter?: "app_only" | "embeddable" | "featured" | "live" | "no_placeholder" | "playable" | "screen_recorded";
        /**
         * The page number of the results to show.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to show on each page of results, up to a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The videos returned by Vimeo. */
        data: Array<{
          /** The Vimeo API URI for the video. */
          uri?: string;
          /** The video title. */
          name?: string;
          /** The public Vimeo video URL. */
          link?: string;
          /** The video description returned by Vimeo. */
          description?: string | null;
          /** The video duration in seconds. */
          duration?: number | null;
          [key: string]: unknown;
        }>;
        /** The current page number returned by Vimeo. */
        page: number | null;
        /** The number of items returned per page by Vimeo. */
        perPage: number | null;
        /** The total number of items reported by Vimeo. */
        total: number | null;
        /** The upstream Vimeo paging object, including next and previous page links. */
        paging: Record<string, unknown>;
      };
    };
    /** List tags attached to a Vimeo video. */
    "vimeo.list_video_tags": {
      input: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
        /**
         * The page number of the results to show.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of items to show on each page of results, up to a maximum of 100.
         * @minimum 1
         * @maximum 100
         */
        perPage?: number;
      };
      output: {
        /** The tags returned by Vimeo. */
        data: Array<{
          /** The tag name. */
          name?: string;
          /** The tag value returned by Vimeo when present. */
          tag?: string;
          /** The canonical tag value returned by Vimeo when present. */
          canonical?: string;
          [key: string]: unknown;
        }>;
        /** The current page number returned by Vimeo. */
        page: number | null;
        /** The number of items returned per page by Vimeo. */
        perPage: number | null;
        /** The total number of items reported by Vimeo. */
        total: number | null;
        /** The upstream Vimeo paging object, including next and previous page links. */
        paging: Record<string, unknown>;
      };
    };
    /** Remove a Vimeo video from a folder without deleting the video. */
    "vimeo.remove_video_from_folder": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo folder ID.
         * @minimum 1
         */
        folderId: number;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
      output: {
        /** Whether the connector completed the Vimeo remove request. */
        removed: boolean;
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId: number | null;
        /**
         * The Vimeo folder ID.
         * @minimum 1
         */
        folderId: number;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
    };
    /** Remove a Vimeo video from a showcase. */
    "vimeo.remove_video_from_showcase": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo showcase ID.
         * @minimum 1
         */
        showcaseId: number;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
      output: {
        /** Whether the connector completed the Vimeo remove request. */
        removed: boolean;
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId: number | null;
        /**
         * The Vimeo showcase ID.
         * @minimum 1
         */
        showcaseId: number;
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
      };
    };
    /** Add a new version to an existing Vimeo video by asking Vimeo to pull the replacement media from a URL. */
    "vimeo.replace_video_from_url": {
      input: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
        /**
         * The HTTP or HTTPS URL from which Vimeo should pull the video file. The URL must remain valid for at least 24 hours.
         * @format uri
         */
        sourceUrl: string;
        /**
         * The filename to assign to the new Vimeo video version.
         * @minLength 1
         */
        fileName: string;
        /**
         * The size in bytes of the replacement video file.
         * @minimum 1
         */
        sourceSizeBytes?: number;
      };
      output: {
        /** A Vimeo video version object returned by the API. */
        version: Record<string, unknown>;
      };
    };
    /** Update a Vimeo folder name. */
    "vimeo.update_folder": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The Vimeo folder ID.
         * @minimum 1
         */
        folderId: number;
        /**
         * The new folder name.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** A Vimeo folder object returned by the API. */
        folder: {
          /** The Vimeo API URI for the folder. */
          uri?: string;
          /** The folder name. */
          name?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Update basic metadata for a Vimeo video without uploading or replacing media. */
    "vimeo.update_video": {
      input: {
        /**
         * The Vimeo video ID.
         * @minimum 1
         */
        videoId: number;
        /**
         * The new video title.
         * @minLength 1
         * @maxLength 128
         */
        name?: string;
        /**
         * The new video description.
         * @maxLength 5000
         */
        description?: string;
        /** The Creative Commons license code to apply to the video. */
        license?: "by" | "by-nc" | "by-nc-nd" | "by-nc-sa" | "by-nd" | "by-sa" | "cc0";
      };
      output: {
        /** A Vimeo video object returned by the API. */
        video: {
          /** The Vimeo API URI for the video. */
          uri?: string;
          /** The video title. */
          name?: string;
          /** The public Vimeo video URL. */
          link?: string;
          /** The video description returned by Vimeo. */
          description?: string | null;
          /** The video duration in seconds. */
          duration?: number | null;
          [key: string]: unknown;
        };
      };
    };
    /** Upload a new Vimeo video by asking Vimeo to pull the media from an HTTP or HTTPS URL. */
    "vimeo.upload_video_from_url": {
      input: {
        /** The Vimeo user ID. Omit this field to use the authenticated user. */
        userId?: number;
        /**
         * The HTTP or HTTPS URL from which Vimeo should pull the video file. The URL must remain valid for at least 24 hours.
         * @format uri
         */
        sourceUrl: string;
        /**
         * The size in bytes of the source video file.
         * @minimum 1
         */
        sourceSizeBytes?: number;
        /**
         * The title of the video.
         * @minLength 1
         * @maxLength 128
         */
        name?: string;
        /**
         * The description of the video.
         * @maxLength 5000
         */
        description?: string;
        /**
         * The Vimeo folder URI, for example `/users/12345/folders/6789`.
         * @minLength 1
         */
        folderUri?: string;
        /** The Vimeo privacy setting for viewing the uploaded video. */
        privacyView?: "anybody" | "disable" | "nobody" | "password" | "team" | "unlisted";
        /** Whether viewers can download the uploaded video when supported. */
        privacyDownload?: boolean;
      };
      output: {
        /** A Vimeo video object returned by the API. */
        video: {
          /** The Vimeo API URI for the video. */
          uri?: string;
          /** The video title. */
          name?: string;
          /** The public Vimeo video URL. */
          link?: string;
          /** The video description returned by Vimeo. */
          description?: string | null;
          /** The video duration in seconds. */
          duration?: number | null;
          [key: string]: unknown;
        };
      };
    };
  }
}
