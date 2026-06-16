import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a YouTube video to a playlist. */
    "youtube.add_video_to_playlist": {
      input: {
        /**
         * The YouTube playlist ID to add the video to.
         * @minLength 1
         * @pattern \S
         */
        playlistId: string;
        /**
         * The YouTube video ID to add to the playlist.
         * @minLength 1
         * @pattern \S
         */
        videoId: string;
        /** The zero-based position for the new playlist item. */
        position?: number;
        /** A user note associated with the playlist item when supported by YouTube. */
        note?: string;
      };
      output: {
        /** A YouTube playlist item resource. */
        playlistItem: {
          /** The YouTube playlist item ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The raw YouTube playlist item resource. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Reply to an existing YouTube comment thread. */
    "youtube.create_comment_reply": {
      input: {
        /**
         * The parent YouTube comment ID to reply to.
         * @minLength 1
         * @pattern \S
         */
        parentId: string;
        /**
         * The plain-text reply content to post.
         * @minLength 1
         * @pattern \S
         */
        textOriginal: string;
      };
      output: {
        /** A YouTube comment resource. */
        comment: {
          /** The YouTube comment ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The raw YouTube comment resource. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a YouTube playlist owned by the authenticated user. */
    "youtube.create_playlist": {
      input: {
        /**
         * The YouTube playlist title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /** The YouTube playlist description. */
        description?: string;
        /** The privacy status for the playlist. */
        privacyStatus?: "private" | "public" | "unlisted";
      };
      output: {
        /** A YouTube playlist resource. */
        playlist: {
          /** The YouTube playlist ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The raw YouTube playlist resource. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Delete a YouTube caption track. */
    "youtube.delete_caption": {
      input: {
        /**
         * The YouTube caption track ID to delete.
         * @minLength 1
         * @pattern \S
         */
        captionId: string;
      };
      output: {
        /** A YouTube deletion acknowledgement. */
        result: {
          /** The YouTube resource ID that was deleted. */
          id: string;
          /** Whether the delete request completed successfully. */
          deleted: boolean;
        };
      };
    };
    /** Delete a YouTube playlist owned by the authenticated user. */
    "youtube.delete_playlist": {
      input: {
        /**
         * The YouTube playlist ID to delete.
         * @minLength 1
         * @pattern \S
         */
        playlistId: string;
      };
      output: {
        /** A YouTube deletion acknowledgement. */
        result: {
          /** The YouTube resource ID that was deleted. */
          id: string;
          /** Whether the delete request completed successfully. */
          deleted: boolean;
        };
      };
    };
    /** Delete an item from a YouTube playlist. */
    "youtube.delete_playlist_item": {
      input: {
        /**
         * The YouTube playlist item ID to delete.
         * @minLength 1
         * @pattern \S
         */
        playlistItemId: string;
      };
      output: {
        /** A YouTube deletion acknowledgement. */
        result: {
          /** The YouTube resource ID that was deleted. */
          id: string;
          /** Whether the delete request completed successfully. */
          deleted: boolean;
        };
      };
    };
    /** Delete a YouTube video owned by the authenticated user. */
    "youtube.delete_video": {
      input: {
        /**
         * The YouTube video ID to delete.
         * @minLength 1
         * @pattern \S
         */
        videoId: string;
      };
      output: {
        /** A YouTube deletion acknowledgement. */
        result: {
          /** The YouTube resource ID that was deleted. */
          id: string;
          /** Whether the delete request completed successfully. */
          deleted: boolean;
        };
      };
    };
    /** Download a YouTube caption track and return a temporary transit URL. */
    "youtube.download_caption": {
      input: {
        /**
         * The YouTube caption track ID to download.
         * @minLength 1
         * @pattern \S
         */
        captionId: string;
        /**
         * The caption output format requested from YouTube, such as srt or vtt.
         * @minLength 1
         * @pattern \S
         */
        tfmt?: string;
        /**
         * The caption language to translate into when supported by YouTube.
         * @minLength 1
         * @pattern \S
         */
        tlang?: string;
        /**
         * The output filename used for the transit file.
         * @minLength 1
         * @pattern \S
         */
        fileName?: string;
        /**
         * The MIME type to report for the downloaded caption file.
         * @minLength 1
         * @pattern \S
         */
        mimeType?: string;
      };
      output: {
        /** A file downloaded through the connector file transit service. */
        file: {
          /** The source YouTube resource ID. */
          id: string;
          /** The transit file name. */
          name: string;
          /** The MIME type of the downloaded file content. */
          mimeType: string;
          /** The downloaded content size in bytes when known. */
          sizeBytes: number | null;
          /** A temporary transit URL from which the file content can be retrieved. */
          transitUrl: string;
        };
      };
    };
    /** Get the authenticated user's rating for one or more YouTube videos. */
    "youtube.get_video_rating": {
      input: {
        /**
         * The YouTube video IDs whose ratings should be retrieved.
         * @minItems 1
         * @maxItems 50
         */
        ids: Array<string>;
      };
      output: {
        /** The video ratings returned by YouTube. */
        ratings: Array<{
          /** The YouTube video ID. */
          videoId: string | null;
          /** The authenticated user's rating for the video. */
          rating: string | null;
          /** The raw YouTube video rating resource. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List YouTube caption tracks for a video or caption track IDs. */
    "youtube.list_caption_tracks": {
      input: {
        /**
         * The YouTube video ID whose caption tracks should be listed.
         * @minLength 1
         * @pattern \S
         */
        videoId?: string;
        /**
         * The YouTube caption track IDs to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        ids?: Array<string>;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
      };
      output: {
        /** The caption tracks returned by YouTube. */
        captions: Array<{
          /** The YouTube caption track ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The raw YouTube caption resource. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List YouTube channel resources by ID, username, handle, or authenticated owner. */
    "youtube.list_channels": {
      input: {
        /**
         * The YouTube channel IDs to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        ids?: Array<string>;
        /**
         * A YouTube channel handle such as @GoogleDevelopers.
         * @minLength 1
         * @pattern \S
         */
        forHandle?: string;
        /**
         * A legacy YouTube username.
         * @minLength 1
         * @pattern \S
         */
        forUsername?: string;
        /** Whether to list channels owned by the authenticated user. */
        mine?: boolean;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /**
         * Opaque pagination token returned by a previous YouTube API response.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
      };
      output: {
        /** The channels returned by YouTube. */
        channels: Array<{
          /** The YouTube channel ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The statistics object returned by YouTube. */
          statistics: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The raw YouTube channel resource. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next result page. */
        nextPageToken: string | null;
        /** The token for the previous result page. */
        prevPageToken: string | null;
        /** Pagination summary returned by YouTube. */
        pageInfo: {
          /** The total result count reported by YouTube. */
          totalResults: number;
          /** The number of results included in this page. */
          resultsPerPage: number;
        };
      };
    };
    /** List top-level YouTube comment threads for a video, channel, or thread IDs. */
    "youtube.list_comment_threads": {
      input: {
        /**
         * The YouTube video ID whose comment threads should be listed.
         * @minLength 1
         * @pattern \S
         */
        videoId?: string;
        /**
         * The YouTube channel ID whose comment threads should be listed.
         * @minLength 1
         * @pattern \S
         */
        channelId?: string;
        /**
         * The YouTube comment thread IDs to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        ids?: Array<string>;
        /**
         * The YouTube channel ID used to retrieve all related comment threads.
         * @minLength 1
         * @pattern \S
         */
        allThreadsRelatedToChannelId?: string;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /**
         * Opaque pagination token returned by a previous YouTube API response.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
        /** The order used for comment thread results. */
        order?: "time" | "relevance";
        /** The comment text format returned by YouTube. */
        textFormat?: "html" | "plainText";
      };
      output: {
        /** The comment threads returned by YouTube. */
        commentThreads: Array<{
          /** The YouTube comment thread ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The replies object returned by YouTube. */
          replies: Record<string, unknown> | null;
          /** The raw YouTube comment thread resource. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next result page. */
        nextPageToken: string | null;
        /** The token for the previous result page. */
        prevPageToken: string | null;
        /** Pagination summary returned by YouTube. */
        pageInfo: {
          /** The total result count reported by YouTube. */
          totalResults: number;
          /** The number of results included in this page. */
          resultsPerPage: number;
        };
      };
    };
    /** List YouTube comments by parent comment ID or comment IDs. */
    "youtube.list_comments": {
      input: {
        /**
         * The YouTube parent comment ID whose replies should be listed.
         * @minLength 1
         * @pattern \S
         */
        parentId?: string;
        /**
         * The YouTube comment IDs to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        ids?: Array<string>;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /**
         * Opaque pagination token returned by a previous YouTube API response.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
        /** The comment text format returned by YouTube. */
        textFormat?: "html" | "plainText";
      };
      output: {
        /** The comments returned by YouTube. */
        comments: Array<{
          /** The YouTube comment ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The raw YouTube comment resource. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next result page. */
        nextPageToken: string | null;
        /** The token for the previous result page. */
        prevPageToken: string | null;
        /** Pagination summary returned by YouTube. */
        pageInfo: {
          /** The total result count reported by YouTube. */
          totalResults: number;
          /** The number of results included in this page. */
          resultsPerPage: number;
        };
      };
    };
    /** List YouTube interface languages. */
    "youtube.list_i18n_languages": {
      input: {
        /**
         * The language used for localized snippet text.
         * @minLength 1
         * @pattern \S
         */
        hl?: string;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
      };
      output: {
        /** The i18n languages returned by YouTube. */
        languages: Array<{
          /** The BCP-47 language code. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The raw YouTube i18n language resource. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List YouTube content regions. */
    "youtube.list_i18n_regions": {
      input: {
        /**
         * The language used for localized snippet text.
         * @minLength 1
         * @pattern \S
         */
        hl?: string;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
      };
      output: {
        /** The i18n regions returned by YouTube. */
        regions: Array<{
          /** The ISO 3166-1 alpha-2 region code. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The raw YouTube i18n region resource. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List videos and resources contained in a YouTube playlist. */
    "youtube.list_playlist_items": {
      input: {
        /**
         * The YouTube playlist ID to inspect.
         * @minLength 1
         * @pattern \S
         */
        playlistId: string;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /**
         * Opaque pagination token returned by a previous YouTube API response.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
      };
      output: {
        /** The playlist items returned by YouTube. */
        playlistItems: Array<{
          /** The YouTube playlist item ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The raw YouTube playlist item resource. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next result page. */
        nextPageToken: string | null;
        /** The token for the previous result page. */
        prevPageToken: string | null;
        /** Pagination summary returned by YouTube. */
        pageInfo: {
          /** The total result count reported by YouTube. */
          totalResults: number;
          /** The number of results included in this page. */
          resultsPerPage: number;
        };
      };
    };
    /** List YouTube playlists by ID, channel, or authenticated owner. */
    "youtube.list_playlists": {
      input: {
        /**
         * The YouTube playlist IDs to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        ids?: Array<string>;
        /**
         * The YouTube channel ID whose playlists should be listed.
         * @minLength 1
         * @pattern \S
         */
        channelId?: string;
        /** Whether to list playlists owned by the authenticated user. */
        mine?: boolean;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /**
         * Opaque pagination token returned by a previous YouTube API response.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
      };
      output: {
        /** The playlists returned by YouTube. */
        playlists: Array<{
          /** The YouTube playlist ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The raw YouTube playlist resource. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next result page. */
        nextPageToken: string | null;
        /** The token for the previous result page. */
        prevPageToken: string | null;
        /** Pagination summary returned by YouTube. */
        pageInfo: {
          /** The total result count reported by YouTube. */
          totalResults: number;
          /** The number of results included in this page. */
          resultsPerPage: number;
        };
      };
    };
    /** List YouTube video categories for a region or category IDs. */
    "youtube.list_video_categories": {
      input: {
        /**
         * An ISO 3166-1 alpha-2 region code.
         * @minLength 2
         * @maxLength 2
         */
        regionCode?: string;
        /**
         * The YouTube video category IDs to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        ids?: Array<string>;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
      };
      output: {
        /** The video categories returned by YouTube. */
        categories: Array<{
          /** The YouTube video category ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The raw YouTube video category resource. */
          raw: Record<string, unknown>;
        }>;
      };
    };
    /** List YouTube video resources by ID or chart. */
    "youtube.list_videos": {
      input: {
        /**
         * The YouTube video IDs to retrieve.
         * @minItems 1
         * @maxItems 50
         */
        ids?: Array<string>;
        /** The chart used when listing videos without explicit IDs. */
        chart?: "mostPopular";
        /** Whether to list videos owned by the authenticated user. */
        mine?: boolean;
        /**
         * The resource parts to include.
         * @minItems 1
         */
        part?: Array<string>;
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /**
         * Opaque pagination token returned by a previous YouTube API response.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
        /**
         * An ISO 3166-1 alpha-2 region code used with chart requests.
         * @minLength 2
         * @maxLength 2
         */
        regionCode?: string;
      };
      output: {
        /** The videos returned by YouTube. */
        videos: Array<{
          /** The YouTube video ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The statistics object returned by YouTube. */
          statistics: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The player object returned by YouTube. */
          player: Record<string, unknown> | null;
          /** The raw YouTube video resource. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next result page. */
        nextPageToken: string | null;
        /** The token for the previous result page. */
        prevPageToken: string | null;
        /** Pagination summary returned by YouTube. */
        pageInfo: {
          /** The total result count reported by YouTube. */
          totalResults: number;
          /** The number of results included in this page. */
          resultsPerPage: number;
        };
      };
    };
    /** Post a top-level public comment on a YouTube video. */
    "youtube.post_comment": {
      input: {
        /**
         * The YouTube video ID to comment on.
         * @minLength 1
         * @pattern \S
         */
        videoId: string;
        /**
         * The channel ID for the video being commented on.
         * @minLength 1
         * @pattern \S
         */
        channelId: string;
        /**
         * The plain-text comment content to post.
         * @minLength 1
         * @pattern \S
         */
        textOriginal: string;
      };
      output: {
        /** A YouTube comment thread resource. */
        commentThread: {
          /** The YouTube comment thread ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The replies object returned by YouTube. */
          replies: Record<string, unknown> | null;
          /** The raw YouTube comment thread resource. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Set or clear the authenticated user's rating for a YouTube video. */
    "youtube.rate_video": {
      input: {
        /**
         * The YouTube video ID to rate.
         * @minLength 1
         * @pattern \S
         */
        videoId: string;
        /** The rating to apply to the video. */
        rating: "like" | "dislike" | "none";
      };
      output: {
        /** The YouTube video ID that was rated. */
        videoId: string;
        /** The rating that was applied. */
        rating: string;
        /** Whether YouTube accepted the rating request. */
        success: boolean;
      };
    };
    /** Search YouTube for videos, channels, or playlists. */
    "youtube.search": {
      input: {
        /**
         * The YouTube search query.
         * @minLength 1
         * @pattern \S
         */
        q: string;
        /**
         * Resource types to include in search results.
         * @minItems 1
         * @maxItems 3
         */
        type?: Array<"channel" | "playlist" | "video">;
        /** The order used for search results. */
        order?: "date" | "rating" | "relevance" | "title" | "videoCount" | "viewCount";
        /**
         * Only return resources owned by this YouTube channel.
         * @minLength 1
         * @pattern \S
         */
        channelId?: string;
        /**
         * Only return resources created at or after this timestamp.
         * @format date-time
         */
        publishedAfter?: string;
        /**
         * Only return resources created at or before this timestamp.
         * @format date-time
         */
        publishedBefore?: string;
        /**
         * An ISO 3166-1 alpha-2 region code used to tune search results.
         * @minLength 2
         * @maxLength 2
         */
        regionCode?: string;
        /**
         * An ISO 639-1 language code used to tune search results.
         * @minLength 2
         * @maxLength 2
         */
        relevanceLanguage?: string;
        /** The safe search setting for YouTube search. */
        safeSearch?: "moderate" | "none" | "strict";
        /**
         * Maximum number of items to return per page.
         * @minimum 1
         * @maximum 50
         */
        maxResults?: number;
        /**
         * Opaque pagination token returned by a previous YouTube API response.
         * @minLength 1
         * @pattern \S
         */
        pageToken?: string;
      };
      output: {
        /** The search results returned by YouTube. */
        results: Array<{
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The resource identifier object returned by YouTube. */
          id: Record<string, unknown>;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The raw YouTube search result item. */
          raw: Record<string, unknown>;
        }>;
        /** The token for the next result page. */
        nextPageToken: string | null;
        /** The token for the previous result page. */
        prevPageToken: string | null;
        /** Pagination summary returned by YouTube. */
        pageInfo: {
          /** The total result count reported by YouTube. */
          totalResults: number;
          /** The number of results included in this page. */
          resultsPerPage: number;
        };
      };
    };
    /** Upload and set a custom YouTube video thumbnail from an HTTPS image URL. */
    "youtube.set_thumbnail_from_url": {
      input: {
        /**
         * The YouTube video ID whose thumbnail should be replaced.
         * @minLength 1
         * @pattern \S
         */
        videoId: string;
        /**
         * The HTTPS URL of the thumbnail image to upload.
         * @format uri
         */
        imageUrl: string;
        /**
         * The filename sent to YouTube for the thumbnail media.
         * @minLength 1
         * @pattern \S
         */
        fileName?: string;
        /**
         * The MIME type of the thumbnail image.
         * @minLength 1
         * @pattern \S
         */
        mimeType?: string;
      };
      output: {
        /** The thumbnail response returned by YouTube. */
        thumbnails: Record<string, unknown>;
      };
    };
    /** Update a YouTube caption track's metadata. */
    "youtube.update_caption": {
      input: {
        /**
         * The YouTube caption track ID to update.
         * @minLength 1
         * @pattern \S
         */
        captionId: string;
        /**
         * The updated caption track display name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Whether the caption track should be a draft. */
        isDraft?: boolean;
      };
      output: {
        /** A YouTube caption resource. */
        caption: {
          /** The YouTube caption track ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The raw YouTube caption resource. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a YouTube playlist's snippet and status metadata. */
    "youtube.update_playlist": {
      input: {
        /**
         * The YouTube playlist ID to update.
         * @minLength 1
         * @pattern \S
         */
        playlistId: string;
        /**
         * The updated YouTube playlist title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /** The updated YouTube playlist description. */
        description?: string;
        /** The updated privacy status for the playlist. */
        privacyStatus?: "private" | "public" | "unlisted";
      };
      output: {
        /** A YouTube playlist resource. */
        playlist: {
          /** The YouTube playlist ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The raw YouTube playlist resource. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a YouTube playlist item's position or note. */
    "youtube.update_playlist_item": {
      input: {
        /**
         * The YouTube playlist item ID to update.
         * @minLength 1
         * @pattern \S
         */
        playlistItemId: string;
        /**
         * The YouTube playlist ID that contains the item.
         * @minLength 1
         * @pattern \S
         */
        playlistId: string;
        /**
         * The YouTube video ID referenced by the playlist item.
         * @minLength 1
         * @pattern \S
         */
        videoId: string;
        /** The zero-based position for the playlist item. */
        position?: number;
        /** A user note associated with the playlist item when supported by YouTube. */
        note?: string;
      };
      output: {
        /** A YouTube playlist item resource. */
        playlistItem: {
          /** The YouTube playlist item ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The raw YouTube playlist item resource. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Update a YouTube video's snippet and status metadata. */
    "youtube.update_video": {
      input: {
        /**
         * The YouTube video ID to update.
         * @minLength 1
         * @pattern \S
         */
        videoId: string;
        /**
         * The updated YouTube video title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /** The updated YouTube video description. */
        description?: string;
        /**
         * The updated tags for the video.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The updated YouTube video category ID.
         * @minLength 1
         * @pattern \S
         */
        categoryId?: string;
        /** The updated privacy status for the video. */
        privacyStatus?: "private" | "public" | "unlisted";
      };
      output: {
        /** A YouTube video resource. */
        video: {
          /** The YouTube video ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The statistics object returned by YouTube. */
          statistics: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The player object returned by YouTube. */
          player: Record<string, unknown> | null;
          /** The raw YouTube video resource. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Upload a YouTube caption track from an HTTPS caption file URL. */
    "youtube.upload_caption_from_url": {
      input: {
        /**
         * The HTTPS URL of the caption file to upload.
         * @format uri
         */
        captionUrl: string;
        /**
         * The YouTube video ID to attach the caption track to.
         * @minLength 1
         * @pattern \S
         */
        videoId: string;
        /**
         * The caption track language, such as en or zh-Hans.
         * @minLength 1
         * @pattern \S
         */
        language: string;
        /**
         * The caption track display name.
         * @minLength 1
         * @pattern \S
         */
        name?: string;
        /** Whether the uploaded caption track should be a draft. */
        isDraft?: boolean;
        /**
         * The filename sent to YouTube for the caption media.
         * @minLength 1
         * @pattern \S
         */
        fileName?: string;
        /**
         * The MIME type of the caption file.
         * @minLength 1
         * @pattern \S
         */
        mimeType?: string;
      };
      output: {
        /** A YouTube caption resource. */
        caption: {
          /** The YouTube caption track ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The raw YouTube caption resource. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Upload a YouTube video from an HTTPS media URL using the resumable upload API. */
    "youtube.upload_video_from_url": {
      input: {
        /**
         * The HTTPS URL of the video file to upload.
         * @format uri
         */
        mediaUrl: string;
        /**
         * The YouTube video title.
         * @minLength 1
         * @pattern \S
         */
        title: string;
        /** The YouTube video description. */
        description?: string;
        /** The privacy status for the uploaded video. */
        privacyStatus?: "private" | "public" | "unlisted";
        /**
         * Tags to attach to the uploaded video.
         * @minItems 1
         */
        tags?: Array<string>;
        /**
         * The YouTube video category ID.
         * @minLength 1
         * @pattern \S
         */
        categoryId?: string;
        /**
         * The filename sent to YouTube for the uploaded media.
         * @minLength 1
         * @pattern \S
         */
        fileName?: string;
        /**
         * The MIME type of the video media.
         * @minLength 1
         * @pattern \S
         */
        mimeType?: string;
        /** Whether YouTube should notify subscribers. */
        notifySubscribers?: boolean;
      };
      output: {
        /** A YouTube video resource. */
        video: {
          /** The YouTube video ID. */
          id: string | null;
          /** The YouTube resource kind. */
          kind: string | null;
          /** The entity tag returned by YouTube. */
          etag: string | null;
          /** The snippet object returned by YouTube. */
          snippet: Record<string, unknown> | null;
          /** The contentDetails object returned by YouTube. */
          contentDetails: Record<string, unknown> | null;
          /** The statistics object returned by YouTube. */
          statistics: Record<string, unknown> | null;
          /** The status object returned by YouTube. */
          status: Record<string, unknown> | null;
          /** The player object returned by YouTube. */
          player: Record<string, unknown> | null;
          /** The raw YouTube video resource. */
          raw: Record<string, unknown>;
        };
      };
    };
  }
}
