import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Check weighted social post length and platform validity using Ayrshare's post length validator. */
    "ayrshare.check_post_length": {
      input: {
        /** The post text to measure. */
        post: string;
      };
      output: {
        /** Maximum character limits keyed by platform. */
        maxCharLimits: Record<string, number>;
        /** Whether the post is valid for each platform. */
        validByPlatform: Record<string, boolean>;
        /** Weighted post lengths keyed by platform. */
        weightedLengthByPlatform: Record<string, number>;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete one or more Ayrshare posts, delete all pending scheduled posts, or mark a post as manually deleted. */
    "ayrshare.delete_post": {
      input: {
        /**
         * The Ayrshare post ID to delete.
         * @minLength 1
         */
        id?: string;
        /**
         * Ayrshare post IDs to bulk delete.
         * @minItems 1
         */
        bulk?: Array<string>;
        /** Whether to delete all pending scheduled posts for the profile. */
        deleteAllScheduled?: boolean;
        /** Whether to mark the Ayrshare post as deleted without deleting it from the social networks. */
        markManualDeleted?: boolean;
      };
      output: {
        /** The status returned by Ayrshare. */
        status: string;
        /** The Ayrshare post ID when returned for a single delete. */
        id: string | null;
        /** Per-platform or per-post delete results returned by Ayrshare. */
        results: Array<Record<string, unknown>>;
        /** Delete errors returned by Ayrshare. */
        errors: Array<Record<string, unknown>>;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
    /** Get one Ayrshare post by top-level Ayrshare post ID, including status and per-platform results. */
    "ayrshare.get_post": {
      input: {
        /**
         * The top-level Ayrshare post ID returned by publish_post.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** A normalized Ayrshare post result. */
        post: {
          /** The status returned by Ayrshare. */
          status: string;
          /** The top-level Ayrshare post ID when returned. */
          id: string | null;
          /** Per-platform post results returned by Ayrshare. */
          postIds: Array<Record<string, unknown>>;
          /** Per-platform errors returned by Ayrshare. */
          errors: Array<Record<string, unknown>>;
          /** The raw response object returned by Ayrshare. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get real-time analytics for an Ayrshare post, optionally limited to selected social platforms. */
    "ayrshare.get_post_analytics": {
      input: {
        /**
         * The top-level Ayrshare post ID returned by publish_post.
         * @minLength 1
         */
        id: string;
        /**
         * Optional social platforms to include in the Ayrshare request.
         * @minItems 1
         */
        platforms?: Array<"bluesky" | "facebook" | "gmb" | "instagram" | "linkedin" | "pinterest" | "reddit" | "snapchat" | "telegram" | "threads" | "tiktok" | "twitter" | "youtube">;
      };
      output: {
        /** The status returned by Ayrshare. */
        status: string;
        /** The top-level Ayrshare post ID when returned. */
        id: string | null;
        /** Per-platform analytics results returned by Ayrshare. */
        postIds: Array<Record<string, unknown>>;
        /** Per-platform analytics errors returned by Ayrshare. */
        errors: Array<Record<string, unknown>>;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Ayrshare account or user profile details, including linked social accounts and usage metadata. */
    "ayrshare.get_user_profile": {
      input: {
        /** Whether Ayrshare should include slower additional Instagram details. */
        instagramDetails?: boolean;
      };
      output: {
        /** The linked social network accounts currently active for the profile. */
        activeSocialAccounts: Array<"bluesky" | "facebook" | "gmb" | "instagram" | "linkedin" | "pinterest" | "reddit" | "snapchat" | "telegram" | "threads" | "tiktok" | "twitter" | "youtube">;
        /** The social account display records returned by Ayrshare. */
        displayNames: Array<Record<string, unknown>>;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
    /** List Ayrshare post history with optional filters for date range, status, type, and social platforms. */
    "ayrshare.list_post_history": {
      input: {
        /**
         * The maximum number of history records to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
        /** The social platforms to include in the history filter. */
        platforms?: Array<"bluesky" | "facebook" | "gmb" | "instagram" | "linkedin" | "pinterest" | "reddit" | "snapchat" | "telegram" | "threads" | "tiktok" | "twitter" | "youtube">;
        /** The inclusive ISO 8601 start date for history results. */
        startDate?: string;
        /** The inclusive ISO 8601 end date for history results. */
        endDate?: string;
        /**
         * The number of previous days to include, or 0 for all history.
         * @minimum 0
         */
        lastDays?: number;
        /** The Ayrshare post status to filter by. */
        status?: "success" | "error" | "processing" | "pending" | "paused" | "deleted" | "awaiting approval";
        /** Whether to return immediate or scheduled posts. */
        type?: "immediate" | "scheduled";
        /** The auto repost ID to filter by, or all for every auto repost. */
        autoRepostId?: string;
      };
      output: {
        /** The post history records returned by Ayrshare. */
        posts: Array<Record<string, unknown>>;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
    /** Publish or schedule a social media post through Ayrshare using a JSON-friendly first-pass field set. */
    "ayrshare.publish_post": {
      input: {
        /** The post text to send to the selected social platforms. */
        post: string;
        /**
         * The social platforms to publish to, or all to publish to every linked platform.
         * @minItems 1
         */
        platforms: Array<"bluesky" | "facebook" | "gmb" | "instagram" | "linkedin" | "pinterest" | "reddit" | "snapchat" | "telegram" | "threads" | "tiktok" | "twitter" | "youtube" | "all">;
        /** HTTPS image or video URLs to include in the post. */
        mediaUrls?: Array<string>;
        /** Whether the media URLs should be treated as video media. */
        isVideo?: boolean;
        /** The UTC ISO 8601 datetime when Ayrshare should publish the post. */
        scheduleDate?: string;
        /** Whether Ayrshare should validate a scheduled post before accepting it. */
        validateScheduled?: boolean;
        /** A unique idempotency key used to reject duplicate post submissions. */
        idempotencyKey?: string;
        /** Internal notes stored with the post and retrievable from history. */
        notes?: string;
      };
      output: {
        /** The overall Ayrshare status for the publish request. */
        status: string;
        /** The Ayrshare post ID when returned at the top level. */
        id: string | null;
        /** Per-platform publish results returned by Ayrshare. */
        postIds: Array<Record<string, unknown>>;
        /** Per-platform errors returned by Ayrshare. */
        errors: Array<Record<string, unknown>>;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
    /** Retry an Ayrshare post whose previous publish attempt failed, returning the new pending post status. */
    "ayrshare.retry_post": {
      input: {
        /**
         * The top-level Ayrshare post ID returned by publish_post.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** The status returned by Ayrshare. */
        status: string;
        /** The Ayrshare post ID returned for the retry. */
        id: string | null;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
    /** Update mutable Ayrshare post metadata such as scheduleDate, approval status, notes, pause state, comments, or YouTube visibility. */
    "ayrshare.update_post": {
      input: {
        /**
         * The top-level Ayrshare post ID returned by publish_post.
         * @minLength 1
         */
        id: string;
        /** Whether to approve a post awaiting approval. */
        approved?: boolean;
        /** Whether to disable comments on supported social platforms. */
        disableComments?: boolean;
        /** Reference notes stored with the Ayrshare post. */
        notes?: string;
        /**
         * The UTC datetime when Ayrshare should publish the scheduled post.
         * @format date-time
         */
        scheduleDate?: string;
        /** Whether to pause or unpause a scheduled Ayrshare post. */
        scheduledPause?: boolean;
        /** YouTube metadata to update on a posted video. */
        youTubeOptions?: {
          /** The visibility to set on a posted YouTube video. */
          visibility?: "unlisted" | "private" | "public";
          /** The YouTube video title to update. */
          title?: string;
          /** The YouTube video description to update. */
          description?: string;
          /** The YouTube category ID to update. */
          categoryId?: number;
        };
      };
      output: {
        /** The status returned by Ayrshare. */
        status: string;
        /** The Ayrshare post ID when returned. */
        id: string | null;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
    /** Validate an Ayrshare post payload before publishing, including platform and media URL checks. */
    "ayrshare.validate_post": {
      input: {
        /** The post text to validate. */
        post: string;
        /**
         * The social platforms to validate the post against.
         * @minItems 1
         */
        platforms: Array<"bluesky" | "facebook" | "gmb" | "instagram" | "linkedin" | "pinterest" | "reddit" | "snapchat" | "telegram" | "threads" | "tiktok" | "twitter" | "youtube">;
        /** HTTPS image or video URLs to validate with the post. */
        mediaUrls?: Array<string>;
        /** Whether the media URLs should be treated as video media. */
        isVideo?: boolean;
      };
      output: {
        /** The status returned by Ayrshare. */
        status: string;
        /** Whether Ayrshare accepted the post payload as valid. */
        valid: boolean;
        /** Validation errors returned by Ayrshare. */
        errors: Array<Record<string, unknown>>;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
    /** Verify that a media URL exists and is accessible to Ayrshare. */
    "ayrshare.verify_media_url": {
      input: {
        /**
         * The media URL Ayrshare should verify.
         * @format uri
         */
        mediaUrl: string;
      };
      output: {
        /** The status returned by Ayrshare. */
        status: string;
        /** The upstream HTTP status code for the media URL. */
        statusCode: number | null;
        /** The upstream HTTP status text for the media URL. */
        statusText: string | null;
        /** The media content type returned by Ayrshare. */
        contentType: string | null;
        /** Whether Ayrshare reported the media URL as reachable. */
        exists: boolean;
        /** The raw response object returned by Ayrshare. */
        raw: Record<string, unknown>;
      };
    };
  }
}
