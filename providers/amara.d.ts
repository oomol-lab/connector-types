import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a subtitle note for a specific video and subtitle language. */
    "amara.add_subtitle_note": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The subtitle language code.
         * @minLength 1
         */
        languageCode: string;
        /**
         * The subtitle note body.
         * @minLength 1
         */
        body: string;
      };
      output: {
        /** The created subtitle note. */
        note: {
          /** The note body. */
          body: string;
          /** The ISO timestamp when the note was created. */
          created: string;
          /** The note author. */
          user: Record<string, unknown>;
        };
      };
    };
    /** Add a new source URL to an existing Amara video. */
    "amara.add_video_url": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The video URL to add.
         * @format uri
         */
        url: string;
        /** Whether to set the new URL as the primary URL. */
        primary?: boolean;
      };
      output: {
        /** The created video URL entry. */
        videoUrl: {
          /**
           * The internal video URL identifier.
           * @minimum 0
           */
          id: number;
          /** The video URL. */
          url: string;
          /** Whether this URL is the primary URL. */
          primary: boolean;
          /** Whether this URL is the original URL. */
          original?: boolean;
          /** The source URL type. */
          type?: string;
          /** The resource URI for the video URL. */
          resourceUri?: string;
        };
      };
    };
    /** Create a new subtitle language track for an Amara video. */
    "amara.create_subtitle_language": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The subtitle language code to add.
         * @minLength 1
         */
        language: string;
      };
      output: {
        /** The created subtitle language payload. */
        language: Record<string, unknown>;
      };
    };
    /** Create a new subtitle version for a specific video and language. */
    "amara.create_subtitles": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The subtitle language code.
         * @minLength 1
         */
        languageCode: string;
        /** The subtitle format being uploaded. */
        subFormat: "json" | "srt" | "dfxp" | "vtt" | "sbv" | "txt" | "ssa";
        /** The subtitle content string. */
        subtitles?: string;
        /**
         * The URL to a subtitle file.
         * @format uri
         */
        subtitlesUrl?: string;
        /** The subtitle version title. */
        title?: string;
        /** The optional subtitle creation action. */
        action?: string;
        /** Metadata to attach to the subtitle version. */
        metadata?: Record<string, unknown>;
        /** The subtitle version description. */
        description?: string;
      };
      output: {
        /** The created subtitle version payload. */
        subtitleVersion: Record<string, unknown>;
      };
    };
    /** Create a new Amara video from a source URL and title, with optional metadata. */
    "amara.create_video": {
      input: {
        /**
         * The source video URL.
         * @format uri
         */
        videoUrl: string;
        /**
         * The video title.
         * @minLength 1
         */
        title: string;
        /** The team slug to assign the video to. */
        team?: string;
        /** The project slug to assign the video to. */
        project?: string;
        /**
         * The video duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /** Custom metadata for the video. */
        metadata?: Record<string, string>;
        /**
         * The thumbnail URL.
         * @format uri
         */
        thumbnail?: string;
        /** The video description. */
        description?: string;
        /** The primary audio language code. */
        primaryAudioLanguageCode?: string;
      };
      output: {
        /** The created Amara video payload. */
        video: Record<string, unknown>;
      };
    };
    /** Delete a source URL from an existing Amara video. */
    "amara.delete_video_url": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The internal video URL ID.
         * @minimum 0
         */
        urlId: number;
      };
      output: {
        /** Whether the URL deletion succeeded. */
        success: boolean;
        /** The provider response message. */
        message: string;
      };
    };
    /** Fetch subtitle data for a specific video and language in JSON, SRT, or VTT format. */
    "amara.fetch_subtitles_data": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The subtitle language code.
         * @minLength 1
         */
        languageCode: string;
        /** The subtitle format to fetch. */
        format?: "json" | "srt" | "vtt";
      };
      output: {
        /** The Amara video ID. */
        videoId: string;
        /** The subtitle language code. */
        language: string;
        /** The fetched subtitle format. */
        format: string;
        /** The parsed subtitle segments for JSON responses. */
        subtitles?: Array<{
          /** The subtitle start time in seconds. */
          start: number;
          /** The subtitle end time in seconds. */
          end: number;
          /** The subtitle text. */
          text: string;
        }>;
        /** The raw subtitle text for text-based responses. */
        subtitlesText?: string | null;
      };
    };
    /** Fetch a single Amara activity item by activity ID. */
    "amara.get_activity": {
      input: {
        /**
         * The activity identifier.
         * @minimum 0
         */
        activityId: number;
      };
      output: {
        /** The requested activity payload. */
        activity: Record<string, unknown>;
      };
    };
    /** Fetch a single subtitle language track for an Amara video. */
    "amara.get_subtitle_language_details": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The subtitle language code.
         * @minLength 1
         */
        languageCode: string;
      };
      output: {
        /** The full subtitle language payload. */
        language: Record<string, unknown>;
      };
    };
    /** Fetch a single Amara team by team slug. */
    "amara.get_team_details": {
      input: {
        /**
         * The team slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** The full Amara team payload. */
        team: Record<string, unknown>;
      };
    };
    /** Fetch preferred and blacklisted language codes for a single Amara team. */
    "amara.get_team_languages": {
      input: {
        /**
         * The team slug.
         * @minLength 1
         */
        slug: string;
      };
      output: {
        /** The preferred language codes. */
        preferred: Array<string>;
        /** The blacklisted language codes. */
        blacklisted: Array<string>;
      };
    };
    /** Fetch a single Amara user by username or user ID. */
    "amara.get_user": {
      input: {
        /**
         * The Amara username or user ID.
         * @minLength 1
         */
        userIdentifier: string;
      };
      output: {
        /** The Amara user profile. */
        user: {
          /** The Amara user identifier. */
          id: string;
          /** The Amara username. */
          username: string;
          /** The user's full name, if present. */
          fullName?: string | null;
          /** The user's display name, if present. */
          displayName?: string | null;
          /** Whether the user is currently active. */
          isActive?: boolean;
        };
      };
    };
    /** List activity items for a specific Amara user. */
    "amara.get_user_activity": {
      input: {
        /**
         * The Amara username, `me`, or user ID.
         * @minLength 1
         */
        identifier: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The page size to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The list of activity items. */
        activities: Array<{
          /**
           * The activity identifier.
           * @minimum 0
           */
          id?: number;
          /** The ISO timestamp when the activity happened. */
          created?: string;
          /** The ISO timestamp when the activity happened. */
          date?: string;
          /** The activity type code or name. */
          type: number | string;
          /** The activity type display name. */
          typeName?: string | null;
          /** The related video title or identifier. */
          video?: string | null;
          /** The related language code, if present. */
          language?: string | null;
        }>;
        /** Pagination metadata for the current page. */
        pagination: {
          /**
           * The total number of results.
           * @minimum 0
           */
          totalCount?: number;
          /**
           * The current pagination offset.
           * @minimum 0
           */
          offset?: number;
          /**
           * The current page size.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The URL for the next page, or null. */
          next?: string | null;
          /** The URL for the previous page, or null. */
          previous?: string | null;
        };
      };
    };
    /** Fetch a single Amara user by username, `me`, or user ID. */
    "amara.get_user_data": {
      input: {
        /**
         * The Amara username, `me`, or user ID.
         * @minLength 1
         */
        identifier: string;
      };
      output: {
        /** The full Amara user payload. */
        user: Record<string, unknown>;
      };
    };
    /** Fetch a single Amara video by video ID. */
    "amara.get_video": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** The full Amara video payload. */
        video: Record<string, unknown>;
      };
    };
    /** Fetch a single Amara video URL entry by video ID and URL ID. */
    "amara.get_video_url": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The internal video URL ID.
         * @minimum 0
         */
        urlId: number;
      };
      output: {
        /** The requested video URL entry. */
        videoUrl: {
          /**
           * The internal video URL identifier.
           * @minimum 0
           */
          id: number;
          /** The video URL. */
          url: string;
          /** Whether this URL is the primary URL. */
          primary: boolean;
          /** Whether this URL is the original URL. */
          original?: boolean;
          /** The source URL type. */
          type?: string;
          /** The resource URI for the video URL. */
          resourceUri?: string;
        };
      };
    };
    /** Look up Amara metadata for a public or embeddable video URL. */
    "amara.get_video_url_details": {
      input: {
        /**
         * The public or embeddable video URL.
         * @format uri
         */
        url: string;
      };
      output: {
        /** The Amara metadata resolved from the URL. */
        videoUrl: Record<string, unknown>;
      };
    };
    /** List Amara activity items with optional team, video, language, and date filters. */
    "amara.list_activity": {
      input: {
        /** The team slug to filter by. */
        team?: string;
        /**
         * The activity type code.
         * @minimum 1
         * @maximum 15
         */
        type?: number;
        /** Only include activity after this ISO timestamp. */
        after?: string;
        /** Only include activity before this ISO timestamp. */
        before?: string;
        /**
         * The page size to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
        /** The video ID to filter by. */
        video?: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /** The language code to filter by. */
        language?: string;
        /** Whether to request team-level activity instead of team video activity. */
        teamActivity?: boolean;
      };
      output: {
        /** The list of activity items. */
        activities: Array<{
          /**
           * The activity identifier.
           * @minimum 0
           */
          id?: number;
          /** The ISO timestamp when the activity happened. */
          created?: string;
          /** The ISO timestamp when the activity happened. */
          date?: string;
          /** The activity type code or name. */
          type: number | string;
          /** The activity type display name. */
          typeName?: string | null;
          /** The related video title or identifier. */
          video?: string | null;
          /** The related language code, if present. */
          language?: string | null;
        }>;
        /** Pagination metadata for the current page. */
        pagination: {
          /**
           * The total number of results.
           * @minimum 0
           */
          totalCount?: number;
          /**
           * The current pagination offset.
           * @minimum 0
           */
          offset?: number;
          /**
           * The current page size.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The URL for the next page, or null. */
          next?: string | null;
          /** The URL for the previous page, or null. */
          previous?: string | null;
        };
      };
    };
    /** List the languages supported by the Amara API. */
    "amara.list_available_languages": {
      input: Record<string, never>;
      output: {
        /** The supported Amara languages. */
        languages: Array<{
          /** The Amara language code. */
          code: string;
          /** The display name of the language. */
          name: string;
        }>;
      };
    };
    /** List the languages supported by the Amara API. */
    "amara.list_languages": {
      input: Record<string, never>;
      output: {
        /** The supported Amara languages. */
        languages: Array<{
          /** The Amara language code. */
          code: string;
          /** The display name of the language. */
          name: string;
        }>;
      };
    };
    /** List the subtitle workflow actions available for a specific video and language. */
    "amara.list_subtitle_actions": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The subtitle language code.
         * @minLength 1
         */
        languageCode: string;
      };
      output: {
        /** The available subtitle actions. */
        actions: Array<{
          /** The machine-readable subtitle action. */
          action: string;
          /** The display label for the action. */
          label: string;
          /** Whether the action is completed. */
          completed?: boolean | null;
        }>;
      };
    };
    /** List all subtitle language tracks for a single Amara video. */
    "amara.list_subtitle_languages": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** The subtitle language tracks. */
        languages: Array<{
          /** The subtitle language code. */
          languageCode: string;
          /** The subtitle language display name. */
          name: string;
          /**
           * The subtitle count.
           * @minimum 0
           */
          subtitleCount?: number;
          /** Whether the subtitle language is published. */
          published?: boolean;
          /** Whether the subtitle language is marked complete. */
          subtitlesComplete?: boolean;
          /** Whether this is the primary audio language. */
          isPrimaryAudioLanguage?: boolean;
        }>;
        /** Pagination metadata for the current page. */
        pagination: {
          /**
           * The total number of results.
           * @minimum 0
           */
          totalCount?: number;
          /**
           * The current pagination offset.
           * @minimum 0
           */
          offset?: number;
          /**
           * The current page size.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The URL for the next page, or null. */
          next?: string | null;
          /** The URL for the previous page, or null. */
          previous?: string | null;
        };
      };
    };
    /** List all subtitle notes for a specific video and subtitle language. */
    "amara.list_subtitle_notes": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The subtitle language code.
         * @minLength 1
         */
        languageCode: string;
      };
      output: {
        /** The subtitle notes. */
        notes: Array<{
          /** The note body. */
          body: string;
          /** The ISO timestamp when the note was created. */
          created: string;
          /** The note author. */
          user: Record<string, unknown>;
        }>;
      };
    };
    /** List the Amara teams accessible to the current API key with pagination controls. */
    "amara.list_teams": {
      input: {
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The page size to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The list of Amara teams. */
        teams: Array<{
          /** The team slug. */
          slug: string;
          /** The team display name. */
          name?: string;
          /** The team description, if present. */
          description?: string | null;
          /** The team visibility setting. */
          teamVisibility?: string | null;
          /** The video visibility setting. */
          videoVisibility?: string | null;
        }>;
        /** Pagination metadata for the current page. */
        pagination: {
          /**
           * The total number of results.
           * @minimum 0
           */
          totalCount?: number;
          /**
           * The current pagination offset.
           * @minimum 0
           */
          offset?: number;
          /**
           * The current page size.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The URL for the next page, or null. */
          next?: string | null;
          /** The URL for the previous page, or null. */
          previous?: string | null;
        };
      };
    };
    /** List activity items for a single Amara video with pagination controls. */
    "amara.list_video_activity": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The page size to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The list of activity items. */
        activities: Array<{
          /**
           * The activity identifier.
           * @minimum 0
           */
          id?: number;
          /** The ISO timestamp when the activity happened. */
          created?: string;
          /** The ISO timestamp when the activity happened. */
          date?: string;
          /** The activity type code or name. */
          type: number | string;
          /** The activity type display name. */
          typeName?: string | null;
          /** The related video title or identifier. */
          video?: string | null;
          /** The related language code, if present. */
          language?: string | null;
        }>;
        /** Pagination metadata for the current page. */
        pagination: {
          /**
           * The total number of results.
           * @minimum 0
           */
          totalCount?: number;
          /**
           * The current pagination offset.
           * @minimum 0
           */
          offset?: number;
          /**
           * The current page size.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The URL for the next page, or null. */
          next?: string | null;
          /** The URL for the previous page, or null. */
          previous?: string | null;
        };
      };
    };
    /** List all source URLs associated with a single Amara video. */
    "amara.list_video_urls": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The page size to request.
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The list of video URL entries. */
        urls: Array<{
          /**
           * The internal video URL identifier.
           * @minimum 0
           */
          id: number;
          /** The video URL. */
          url: string;
          /** Whether this URL is the primary URL. */
          primary: boolean;
          /** Whether this URL is the original URL. */
          original?: boolean;
          /** The source URL type. */
          type?: string;
          /** The resource URI for the video URL. */
          resourceUri?: string;
        }>;
        /** Pagination metadata for the current page. */
        pagination: {
          /**
           * The total number of results.
           * @minimum 0
           */
          totalCount?: number;
          /**
           * The current pagination offset.
           * @minimum 0
           */
          offset?: number;
          /**
           * The current page size.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The URL for the next page, or null. */
          next?: string | null;
          /** The URL for the previous page, or null. */
          previous?: string | null;
        };
      };
    };
    /** List Amara videos with optional filters, sorting, and pagination controls. */
    "amara.list_videos": {
      input: {
        /** The sort expression, such as `-created`. */
        sort?: string;
        /** The team slug to filter by. */
        team?: string;
        /** The owner username to filter by. */
        owner?: string;
        /** The project slug to filter by. */
        project?: string;
        /** The language code to filter by. */
        language?: string;
        /** Whether to return archived videos only. */
        archive?: boolean;
        /** A comma-separated list of video IDs to filter by. */
        videoId?: string;
        /**
         * A source video URL to filter by.
         * @format uri
         */
        videoUrl?: string;
        /**
         * The zero-based result offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * The page size to request.
         * @maximum 50
         * @exclusiveMinimum 0
         */
        limit?: number;
      };
      output: {
        /** The list of matching videos. */
        videos: Array<{
          /** The Amara video identifier. */
          id: string;
          /** The video title. */
          title?: string;
          /** The video description, if present. */
          description?: string | null;
          /** The owning team slug, if present. */
          team?: string | null;
          /** The owning project slug, if present. */
          project?: string | null;
          /** The primary audio language code. */
          primaryAudioLanguageCode?: string | null;
          /**
           * The video duration in seconds.
           * @minimum 0
           */
          duration?: number;
          /** The ISO timestamp when the video was created. */
          created?: string;
          /** All source URLs attached to the video. */
          allUrls?: Array<string>;
        }>;
        /** Pagination metadata for the current page. */
        pagination: {
          /**
           * The total number of results.
           * @minimum 0
           */
          totalCount?: number;
          /**
           * The current pagination offset.
           * @minimum 0
           */
          offset?: number;
          /**
           * The current page size.
           * @exclusiveMinimum 0
           */
          limit?: number;
          /** The URL for the next page, or null. */
          next?: string | null;
          /** The URL for the previous page, or null. */
          previous?: string | null;
        };
      };
    };
    /** Update a video URL entry and mark it as the primary URL when requested. */
    "amara.make_video_url_primary": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The internal video URL ID.
         * @minimum 0
         */
        urlId: number;
        /** Whether the URL should become the primary URL. */
        primary: boolean;
      };
      output: {
        /** The updated video URL entry. */
        videoUrl: {
          /**
           * The internal video URL identifier.
           * @minimum 0
           */
          id: number;
          /** The video URL. */
          url: string;
          /** Whether this URL is the primary URL. */
          primary: boolean;
          /** Whether this URL is the original URL. */
          original?: boolean;
          /** The source URL type. */
          type?: string;
          /** The resource URI for the video URL. */
          resourceUri?: string;
        };
      };
    };
    /** Perform a subtitle workflow action such as publish, approve, or reject. */
    "amara.perform_subtitle_action": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The subtitle language code.
         * @minLength 1
         */
        languageCode: string;
        /**
         * The subtitle workflow action to perform.
         * @minLength 1
         */
        action: string;
      };
      output: {
        /** Whether the subtitle action succeeded. */
        success: boolean;
        /** The provider response message. */
        message: string;
      };
    };
    /** Send a message to an Amara user or team recipient. */
    "amara.send_message": {
      input: {
        /**
         * The message subject.
         * @minLength 1
         */
        subject: string;
        /**
         * The message body.
         * @minLength 1
         */
        content: string;
        /** The target username or user ID. */
        user?: string;
        /** The target team slug. */
        team?: string;
      };
      output: {
        /** Whether the message send succeeded. */
        success: boolean;
        /** The provider response message. */
        message: string;
      };
    };
    /** Update subtitle language settings such as completion flags and soft limits. */
    "amara.update_subtitle_language": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /**
         * The subtitle language code.
         * @minLength 1
         */
        languageCode: string;
        /**
         * The soft limit for characters per line.
         * @exclusiveMinimum 0
         */
        softLimitCpl?: number;
        /**
         * The soft limit for characters per second.
         * @exclusiveMinimum 0
         */
        softLimitCps?: number;
        /**
         * The soft limit for subtitle lines.
         * @exclusiveMinimum 0
         */
        softLimitLines?: number;
        /** Whether the subtitles are complete. */
        subtitlesComplete?: boolean;
        /**
         * The soft limit for maximum subtitle duration in milliseconds.
         * @exclusiveMinimum 0
         */
        softLimitMaxDuration?: number;
        /**
         * The soft limit for minimum subtitle duration in milliseconds.
         * @exclusiveMinimum 0
         */
        softLimitMinDuration?: number;
        /** Whether this is the primary audio language. */
        isPrimaryAudioLanguage?: boolean;
      };
      output: {
        /** The updated subtitle language payload. */
        language: Record<string, unknown>;
      };
    };
    /** Update an existing Amara video's metadata, assignment, or language settings. */
    "amara.update_video": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
        /** The team slug to assign the video to. */
        team?: string;
        /** The new video title. */
        title?: string;
        /** The project slug to assign the video to. */
        project?: string;
        /**
         * The video duration in seconds.
         * @minimum 0
         */
        duration?: number;
        /** Custom metadata for the video. */
        metadata?: Record<string, string>;
        /**
         * The thumbnail URL.
         * @format uri
         */
        thumbnail?: string;
        /** The video description. */
        description?: string;
        /** The primary audio language code. */
        primaryAudioLanguageCode?: string;
      };
      output: {
        /** The updated Amara video payload. */
        video: Record<string, unknown>;
      };
    };
    /** Fetch a single Amara video by video ID. */
    "amara.view_video_details": {
      input: {
        /**
         * The Amara video ID.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** The full Amara video payload. */
        video: Record<string, unknown>;
      };
    };
  }
}
