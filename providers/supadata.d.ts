import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve Supadata organization, plan, and credit usage details. */
    "supadata.get_account": {
      input: Record<string, never>;
      output: {
        /** The Supadata organization ID. */
        organizationId: string;
        /** The subscription plan name. */
        plan: string;
        /** The maximum credits for the current billing period. */
        maxCredits: number;
        /** The used credits for the current billing period. */
        usedCredits: number;
      };
    };
    /** Get metadata for a YouTube channel by URL, handle, or ID. */
    "supadata.get_youtube_channel": {
      input: {
        /**
         * The YouTube URL, handle, playlist ID, channel ID, video ID, or supported identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The YouTube channel ID. */
        id: string;
        /** The channel name. */
        name: string;
        /** The channel description. */
        description?: string;
        /** The channel subscriber count. */
        subscriberCount?: number;
        /** The number of videos on the channel. */
        videoCount?: number;
        /** The total channel view count. */
        viewCount?: number;
        /** The channel thumbnail URL. */
        thumbnail?: string;
        /** The channel banner URL. */
        banner?: string;
        [key: string]: unknown;
      };
    };
    /** Get metadata for a YouTube playlist by URL or ID. */
    "supadata.get_youtube_playlist": {
      input: {
        /**
         * The YouTube URL, handle, playlist ID, channel ID, video ID, or supported identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The YouTube playlist ID. */
        id: string;
        /** The playlist title. */
        title: string;
        /** The playlist description. */
        description?: string;
        /** The number of videos in the playlist. */
        videoCount: number;
        /** The playlist view count. */
        viewCount?: number;
        /** The timestamp when the playlist was last updated. */
        lastUpdated?: string;
        /** The channel that owns the playlist. */
        channel: {
          /** The channel ID. */
          id: string;
          /** The channel name. */
          name: string;
        };
        [key: string]: unknown;
      };
    };
    /** Get a YouTube transcript by video URL or ID. */
    "supadata.get_youtube_transcript": {
      input: {
        /**
         * The YouTube video URL.
         * @minLength 1
         * @format uri
         */
        url?: string;
        /**
         * The YouTube video ID. Alternative to url.
         * @minLength 1
         * @pattern \S
         */
        videoId?: string;
        /** Whether Supadata should return plain text transcript content. */
        text?: boolean;
        /**
         * Maximum characters per transcript chunk when text is false.
         * @minimum 50
         * @maximum 10000
         */
        chunkSize?: number;
        /**
         * Preferred ISO 639-1 language code.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
      };
      output: {
        /** The transcript content as plain text or timed chunks. */
        content: string | Array<{
          /** The transcript text segment. */
          text: string;
          /** The segment start time in milliseconds. */
          offset: number;
          /** The segment duration in milliseconds. */
          duration: number;
          /** The segment language code. */
          lang?: string;
          [key: string]: unknown;
        }>;
        /** The language code of the returned transcript. */
        lang: string;
        /** Available transcript language codes. */
        availableLangs: Array<string>;
      };
    };
    /** Get metadata for a YouTube video by URL or ID. */
    "supadata.get_youtube_video": {
      input: {
        /**
         * The YouTube URL, handle, playlist ID, channel ID, video ID, or supported identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
      };
      output: {
        /** The YouTube video ID. */
        id: string;
        /** The video title. */
        title: string;
        /** The video description. */
        description: string;
        /** The video duration in seconds. */
        duration: number;
        /** The channel that published the video. */
        channel: {
          /** The channel ID. */
          id: string;
          /** The channel name. */
          name: string;
        };
        /** The video tags. */
        tags: Array<string>;
        /** The video thumbnail URL. */
        thumbnail?: string;
        /** The video upload date when available. */
        uploadDate?: string | null;
        /** The video view count when available. */
        viewCount?: number | null;
        /** The video like count when available. */
        likeCount?: number | null;
        /** Available transcript language codes. */
        transcriptLanguages: Array<string>;
        [key: string]: unknown;
      };
    };
    /** List video IDs from a YouTube channel. */
    "supadata.list_youtube_channel_videos": {
      input: {
        /**
         * The YouTube URL, handle, playlist ID, channel ID, video ID, or supported identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /** The type of channel videos to return. */
        type?: "all" | "video" | "short" | "live";
      };
      output: {
        /** Standard video IDs. */
        videoIds: Array<string>;
        /** YouTube Shorts video IDs. */
        shortIds: Array<string>;
        /** Live video IDs. */
        liveIds: Array<string>;
      };
    };
    /** List video IDs from a YouTube playlist. */
    "supadata.list_youtube_playlist_videos": {
      input: {
        /**
         * The YouTube URL, handle, playlist ID, channel ID, video ID, or supported identifier.
         * @minLength 1
         * @pattern \S
         */
        id: string;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
      };
      output: {
        /** Standard video IDs. */
        videoIds: Array<string>;
        /** YouTube Shorts video IDs. */
        shortIds: Array<string>;
        /** Live video IDs. */
        liveIds: Array<string>;
      };
    };
    /** Extract links found on a website. */
    "supadata.map_web_links": {
      input: {
        /**
         * The URL to process with Supadata.
         * @minLength 1
         * @format uri
         */
        url: string;
        /** Whether to remove Markdown links from scraped source content. */
        noLinks?: boolean;
        /**
         * Preferred ISO 639-1 language code.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
      };
      output: {
        /** URLs found on the website. */
        urls: Array<string>;
      };
    };
    /** Extract Markdown content from a web page. */
    "supadata.scrape_web_page": {
      input: {
        /**
         * The URL to process with Supadata.
         * @minLength 1
         * @format uri
         */
        url: string;
        /** Whether to remove Markdown links from the extracted content. */
        noLinks?: boolean;
        /**
         * Preferred ISO 639-1 language code.
         * @minLength 1
         * @pattern \S
         */
        lang?: string;
      };
      output: {
        /** The URL that was scraped. */
        url: string;
        /** The Markdown content extracted from the page. */
        content: string;
        /** The page title or name. */
        name?: string;
        /** The page description. */
        description?: string;
        /** The Open Graph URL for the page. */
        ogUrl?: string;
        /** The number of characters in the extracted content. */
        countCharacters: number;
        /** URLs found on the page. */
        urls: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Search YouTube videos, channels, and playlists through Supadata. */
    "supadata.search_youtube": {
      input: {
        /**
         * The YouTube search query.
         * @minLength 1
         * @pattern \S
         */
        query: string;
        /** Filter by upload date. */
        uploadDate?: "all" | "hour" | "today" | "week" | "month" | "year";
        /** Filter by result type. */
        type?: "all" | "video" | "channel" | "playlist" | "movie";
        /** Filter by video duration. */
        duration?: "all" | "short" | "medium" | "long";
        /** The search result sort order. */
        sortBy?: "relevance" | "rating" | "date" | "views";
        /**
         * Special video features to filter by.
         * @minItems 1
         */
        features?: Array<"hd" | "subtitles" | "creative-commons" | "3d" | "live" | "4k" | "360" | "location" | "hdr" | "vr180">;
        /**
         * Maximum number of items to return.
         * @minimum 1
         * @maximum 5000
         */
        limit?: number;
        /**
         * Token for fetching the next search results page.
         * @minLength 1
         * @pattern \S
         */
        nextPageToken?: string;
      };
      output: {
        /** The search query that Supadata executed. */
        query: string;
        /** The YouTube search results. */
        results: Array<{
          /** The search result type. */
          type: "video" | "channel" | "playlist";
          /** The result ID. */
          id: string;
          /** The result title. */
          title: string;
          /** The result description. */
          description?: string;
          /** The result thumbnail URL. */
          thumbnail?: string;
          /** The duration in seconds for video results. */
          duration?: number;
          /** The view count for video results. */
          viewCount?: number;
          /** The upload date for video results. */
          uploadDate?: string;
          /** The YouTube channel summary returned by Supadata. */
          channel?: {
            /** The YouTube channel ID. */
            id: string;
            /** The YouTube channel name. */
            name: string;
            /** The channel thumbnail URL. */
            thumbnail: string;
          };
          /** The subscriber count for channel results. */
          subscriberCount?: number;
          /** The video count for channel or playlist results. */
          videoCount?: number;
          [key: string]: unknown;
        }>;
        /** Estimated total result count. */
        totalResults?: number;
        /** Token for fetching the next result page. */
        nextPageToken?: string;
      };
    };
  }
}
