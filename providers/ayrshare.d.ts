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
  }
}
