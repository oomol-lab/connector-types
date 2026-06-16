import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Delete a HeyGen asset that is no longer needed. */
    "heygen.delete_asset": {
      input: {
        /**
         * The HeyGen asset ID to delete.
         * @minLength 1
         */
        assetId: string;
      };
      output: {
        /**
         * The deleted HeyGen asset ID.
         * @minLength 1
         */
        assetId: string;
        /** Whether HeyGen accepted the asset deletion request. */
        deleted: boolean;
        /** The deleted asset object when returned by HeyGen. */
        asset: Record<string, unknown> | null;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a generated or translated HeyGen video that is no longer needed. */
    "heygen.delete_video": {
      input: {
        /**
         * The HeyGen video ID to delete.
         * @minLength 1
         */
        videoId: string;
        /** The video category, either heygen_video or video_translate. */
        type?: "heygen_video" | "video_translate";
      };
      output: {
        /**
         * The HeyGen video ID requested for deletion.
         * @minLength 1
         */
        videoId: string;
        /** Whether HeyGen reported the video as deleted. */
        deleted: boolean;
        /** The video IDs HeyGen reported as successfully deleted. */
        deletedVideoIds: Array<string>;
        /** The video IDs HeyGen reported as failed. */
        failedVideoIds: Array<string>;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Start an asynchronous HeyGen template video generation job with explicit template variables. */
    "heygen.generate_template_video": {
      input: {
        /**
         * The HeyGen template ID to generate from.
         * @minLength 1
         */
        templateId: string;
        /** Template variables keyed by the exact variable names returned by the template detail endpoint. */
        variables: Record<string, Record<string, unknown>>;
        /**
         * The optional title for the generated video.
         * @minLength 1
         */
        title?: string;
        /** Whether HeyGen should run the request in test mode. */
        test?: boolean;
        /** Whether HeyGen should add captions to the video. */
        caption?: boolean;
        /** The optional video dimension configuration. */
        dimension?: {
          /**
           * The output video width in pixels.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * The output video height in pixels.
           * @exclusiveMinimum 0
           */
          height?: number;
        };
        /** Whether to include a GIF preview URL in the webhook response. */
        includeGif?: boolean;
        /** Whether to make the video publicly shareable immediately after creation. */
        enableSharing?: boolean;
        /**
         * The HeyGen folder ID where the video should be stored.
         * @minLength 1
         */
        folderId?: string;
        /**
         * The Brand Glossary ID used for translation and pronunciation rules.
         * @minLength 1
         */
        brandVoiceId?: string;
        /**
         * The URL HeyGen should notify when video rendering is complete.
         * @minLength 1
         */
        callbackUrl?: string;
        /** Whether replaced text elements should be vertically centered. */
        keepTextVerticallyCentered?: boolean;
      };
      output: {
        /**
         * The generated HeyGen video ID.
         * @minLength 1
         */
        videoId: string;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Start an asynchronous HeyGen avatar video generation job and return the generated video ID. */
    "heygen.generate_video": {
      input: {
        /**
         * The scenes to generate into a video.
         * @minItems 1
         */
        videoInputs: Array<{
          /** The character configuration for a HeyGen video scene. */
          character: {
            /** The character type, either avatar or talking_photo. */
            type?: "avatar" | "talking_photo";
            /**
             * The HeyGen avatar ID to use for this scene.
             * @minLength 1
             */
            avatarId?: string;
            /**
             * The avatar rendering style, such as normal.
             * @minLength 1
             */
            avatarStyle?: string;
            /**
             * The HeyGen talking photo ID to use for this scene.
             * @minLength 1
             */
            talkingPhotoId?: string;
            /** The optional character scale for this scene. */
            scale?: number;
            [key: string]: unknown;
          };
          /** The voice or audio configuration for a HeyGen video scene. */
          voice: {
            /** The voice input type, either text or audio. */
            type?: "text" | "audio";
            /**
             * The HeyGen voice ID to use for narration.
             * @minLength 1
             */
            voiceId?: string;
            /**
             * The text that HeyGen should synthesize.
             * @minLength 1
             */
            inputText?: string;
            /**
             * The audio URL to use when the voice type is audio.
             * @minLength 1
             */
            audioUrl?: string;
            /**
             * The uploaded audio asset ID to use when the voice type is audio.
             * @minLength 1
             */
            audioAssetId?: string;
            /** The optional speech speed multiplier. */
            speed?: number;
            /** The optional voice pitch adjustment. */
            pitch?: number;
            [key: string]: unknown;
          };
          /** The optional background configuration for a HeyGen video scene. */
          background?: {
            /** The background type: color, image, or video. */
            type: "color" | "image" | "video";
            /**
             * The hex color value when the background type is color.
             * @minLength 1
             */
            value?: string;
            /**
             * The background image or video URL.
             * @minLength 1
             */
            url?: string;
            /**
             * The uploaded image asset ID for image backgrounds.
             * @minLength 1
             */
            imageAssetId?: string;
            /**
             * The uploaded video asset ID for video backgrounds.
             * @minLength 1
             */
            videoAssetId?: string;
            /** How the background media should fit the scene. */
            fit?: "crop" | "cover" | "contain" | "none";
            /** The video background playback style. */
            playStyle?: "freeze" | "loop" | "fit_to_scene" | "full_video";
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /**
         * The optional title for the generated video.
         * @minLength 1
         */
        title?: string;
        /** Whether HeyGen should run the request in test mode. */
        test?: boolean;
        /** Whether HeyGen should add captions to the video. */
        caption?: boolean;
        /**
         * An optional callback identifier returned in webhooks.
         * @minLength 1
         */
        callbackId?: string;
        /**
         * The URL HeyGen should notify when video rendering is complete.
         * @minLength 1
         */
        callbackUrl?: string;
        /**
         * The target aspect ratio, such as 16:9 or 9:16.
         * @minLength 1
         */
        aspectRatio?: string;
        /** The optional video dimension configuration. */
        dimension?: {
          /**
           * The output video width in pixels.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * The output video height in pixels.
           * @exclusiveMinimum 0
           */
          height?: number;
        };
        /**
         * The HeyGen folder ID where the video should be stored.
         * @minLength 1
         */
        folderId?: string;
      };
      output: {
        /**
         * The generated HeyGen video ID.
         * @minLength 1
         */
        videoId: string;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve details for a single HeyGen avatar by avatar ID. */
    "heygen.get_avatar": {
      input: {
        /**
         * The unique HeyGen avatar ID to retrieve.
         * @minLength 1
         */
        avatarId: string;
      };
      output: {
        /** The HeyGen avatar detail object. */
        avatar: Record<string, unknown>;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve profile information for the HeyGen account associated with the API key. */
    "heygen.get_current_user": {
      input: Record<string, never>;
      output: {
        /** The current HeyGen user object. */
        user: Record<string, unknown>;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve the remaining generation quota for the authenticated HeyGen account. */
    "heygen.get_remaining_quota": {
      input: Record<string, never>;
      output: {
        /** The HeyGen quota object. */
        quota: Record<string, unknown>;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve a public share URL for a rendered HeyGen video by video ID. */
    "heygen.get_shareable_video_url": {
      input: {
        /**
         * The HeyGen video ID returned by a generation request.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** The public HeyGen share URL when available. */
        shareableUrl: string | null;
        /** The raw HeyGen response data value. */
        raw: unknown;
      };
    };
    /** Retrieve variable definitions and metadata for a single HeyGen template. */
    "heygen.get_template": {
      input: {
        /**
         * The unique HeyGen template ID to retrieve.
         * @minLength 1
         */
        templateId: string;
      };
      output: {
        /** The HeyGen template detail object. */
        template: Record<string, unknown>;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Retrieve processing status and download URLs for a HeyGen video by video ID. */
    "heygen.get_video_status": {
      input: {
        /**
         * The HeyGen video ID returned by a generation request.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** The HeyGen video ID when returned by the API. */
        videoId: string | null;
        /** The current processing status of the video. */
        status: string | null;
        /** The rendered video URL when available. */
        videoUrl: string | null;
        /** The rendered video thumbnail URL when available. */
        thumbnailUrl: string | null;
        /** The rendered video duration when available. */
        duration: number | null;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List uploaded HeyGen image, video, and audio assets so they can be reused in video generation. */
    "heygen.list_assets": {
      input: {
        /**
         * The maximum number of assets to return, from 0 to 100. Use 0 to request no assets, or omit this field to use HeyGen's server default.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination token returned by a previous request.
         * @minLength 1
         */
        token?: string;
        /** The asset type to list: image, video, or audio. */
        fileType?: "image" | "video" | "audio";
        /**
         * The HeyGen folder ID to list assets from.
         * @minLength 1
         */
        folderId?: string;
      };
      output: {
        /** The asset resources returned by HeyGen. */
        assets: Array<Record<string, unknown>>;
        /** The total asset count when HeyGen includes it, otherwise null. */
        totalCount: number | null;
        /** The pagination token for the next page, or null when there is no next page. */
        nextToken: string | null;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List HeyGen avatars and talking photos available for video generation. */
    "heygen.list_avatars": {
      input: Record<string, never>;
      output: {
        /** The avatar resources returned by HeyGen. */
        avatars: Array<Record<string, unknown>>;
        /** The talking photo resources returned by HeyGen. */
        talkingPhotos: Array<Record<string, unknown>>;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List HeyGen folders and folder IDs that can be used with HeyGen video generation inputs. */
    "heygen.list_folders": {
      input: {
        /**
         * The maximum number of folders to return, from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /**
         * The parent folder ID to filter by.
         * @minLength 1
         */
        parentId?: string;
        /**
         * The full or partial folder name to search for.
         * @minLength 1
         */
        nameFilter?: string;
        /** Whether to list folders in the trash. */
        isTrash?: boolean;
        /**
         * The pagination token returned by a previous request.
         * @minLength 1
         */
        token?: string;
      };
      output: {
        /** The folder resources returned by HeyGen. */
        folders: Array<Record<string, unknown>>;
        /** The total folder count when HeyGen includes it, otherwise null. */
        totalCount: number | null;
        /** The pagination token for the next page, or null when there is no next page. */
        nextToken: string | null;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List HeyGen templates created under the authenticated account. */
    "heygen.list_templates": {
      input: Record<string, never>;
      output: {
        /** The template resources returned by HeyGen. */
        templates: Array<Record<string, unknown>>;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List generated HeyGen videos for historical result management. */
    "heygen.list_videos": {
      input: {
        /**
         * The maximum number of videos to return, from 0 to 100.
         * @minimum 0
         * @maximum 100
         */
        limit?: number;
        /**
         * The pagination token returned by a previous request.
         * @minLength 1
         */
        token?: string;
        /**
         * The HeyGen folder ID to list videos from.
         * @minLength 1
         */
        folderId?: string;
        /**
         * The video title to search for.
         * @minLength 1
         */
        title?: string;
      };
      output: {
        /** The video resources returned by HeyGen. */
        videos: Array<Record<string, unknown>>;
        /** The total video count when HeyGen includes it, otherwise null. */
        totalCount: number | null;
        /** The pagination token for the next page, or null when there is no next page. */
        nextToken: string | null;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** List HeyGen voices available for video narration. */
    "heygen.list_voices": {
      input: Record<string, never>;
      output: {
        /** The voice resources returned by HeyGen. */
        voices: Array<Record<string, unknown>>;
        /** The total voice count when HeyGen includes it, otherwise null. */
        totalCount: number | null;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
    /** Upload an image, video, or audio file to HeyGen and return an asset ID usable in video generation. */
    "heygen.upload_asset": {
      input: {
        /**
         * The media file content encoded as a Base64 string.
         * @minLength 1
         */
        contentBase64: string;
        /** The MIME type of the media file to upload. */
        mimeType: "image/png" | "image/jpeg" | "video/mp4" | "video/webm" | "audio/mpeg";
      };
      output: {
        /**
         * The uploaded HeyGen asset ID.
         * @minLength 1
         */
        assetId: string;
        /** The public or hosted asset URL when returned by HeyGen. */
        url: string | null;
        /** The uploaded asset object returned by HeyGen. */
        asset: Record<string, unknown>;
        /** The raw HeyGen response data object. */
        raw: Record<string, unknown>;
      };
    };
  }
}
