import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create a Publora post for one or more connected accounts: saved as a draft, scheduled with scheduledTime, or published at once with publishNow. Text, media URLs, per-platform settings and first comments go in one request. */
    "publora.create_post": {
      input: {
        /** The post text shared by every account. */
        content?: string;
        /**
         * The UTC time to publish at, such as 2026-12-01T14:00:00Z.
         * @format date-time
         */
        scheduledTime?: string;
        /** Publish immediately. Cannot be combined with a future scheduledTime. */
        publishNow?: boolean;
        /** Per-platform options keyed by platform type: instagram, tiktok, youtube, threads, twitter, telegram or linkedin, such as instagram.videoType, youtube.title and privacy, tiktok.viewerSetting or linkedin.repostParentUrn. Publora rejects any other key with PLATFORM_SETTING_UNKNOWN. */
        platformSettings?: Record<string, unknown>;
        /**
         * Up to three comments Publora posts under the published post, in order, on LinkedIn, X, Threads, Bluesky and Mastodon. A later comment waits for the previous one; a failed comment never changes the post.
         * @maxItems 3
         */
        firstComments?: Array<{
          /**
           * The comment text.
           * @maxLength 25000
           */
          text: string;
          /** Platform types that get the comment, never connection IDs. Leave it out for every supported target. */
          platforms?: Array<"twitter" | "linkedin" | "instagram" | "threads" | "tiktok" | "youtube" | "facebook" | "bluesky" | "mastodon" | "telegram">;
          /**
           * Seconds to wait after publication for the first comment, or after the previous comment for later ones.
           * @minimum 0
           * @maximum 86400
           */
          delaySeconds?: number;
        }>;
        /**
         * Public HTTPS addresses of images or videos that Publora downloads when the post is saved: up to 25 MB per image, 150 MB per video and 300 MB in total. If one file fails, none are attached.
         * @minItems 1
         * @maxItems 10
         */
        mediaUrls?: Array<string>;
        /**
         * A unique key, such as a UUID, sent as Idempotency-Key. Repeating it with the same body within 24 hours returns the first result instead of acting twice.
         * @minLength 1
         * @pattern \S
         */
        idempotencyKey?: string;
        /**
         * Connection IDs from list_connections, in the platform-platformId form, such as linkedin-ABC123. Each ID may appear once.
         * @minItems 1
         */
        platforms: Array<string>;
      };
      output: {
        /** The ID to read, update or delete the post with. */
        postGroupId: string;
        /** The publish time Publora stored; null for a draft. */
        scheduledTime?: string | null;
        /** Non-blocking notes, such as SCHEDULED_TIME_COERCED when a past time was moved to now or FIRST_COMMENT_UNSUPPORTED_PLATFORMS. */
        warnings?: Array<{
          /** The stable warning code. */
          code?: string;
          /** What happened. */
          message?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** Delete a Publora post group with its per-account posts and uploaded media, for example to cancel a scheduled post. */
    "publora.delete_post": {
      input: {
        /**
         * The Publora post group ID returned by create_post or list_posts.
         * @pattern ^[a-f0-9]{24}$
         */
        postGroupId: string;
      };
      output: {
        /** The ID of the deleted post group. */
        postGroupId: string;
        /** True once Publora has deleted it. */
        deleted: boolean;
      };
    };
    /** Read the Publora plan, enabled features, monthly and scheduled post quotas, how far ahead posts can be scheduled, and which platforms the plan allows. */
    "publora.get_account_context": {
      input: {
        /**
         * A planned publish time. Leave it out for the current month.
         * @format date-time
         */
        scheduledTime?: string;
      };
      output: {
        /** Plan, features and quotas. */
        context: {
          /** The plan key and name. */
          plan: Record<string, unknown>;
          /** Which features the plan enables, such as publishing and apiAccess. */
          features?: Record<string, unknown>;
          /** Monthly posts, scheduled posts, schedule horizon and connection limits. */
          quotas: Record<string, unknown>;
          /** Platform types the plan can publish to; null means every platform. */
          allowedPlatforms?: Array<string> | null;
          /** Publora's current time. */
          serverTime?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get one Publora post with its overall status and, for each account, its text, status, published ID and address. */
    "publora.get_post": {
      input: {
        /**
         * The Publora post group ID returned by create_post or list_posts.
         * @pattern ^[a-f0-9]{24}$
         */
        postGroupId: string;
      };
      output: {
        /** A Publora post group. */
        post: {
          /** The post group ID. */
          postGroupId: string;
          /** The overall status. */
          status: "draft" | "scheduled" | "published" | "failed" | "partially_published";
          /** When the post is or was scheduled to publish. */
          scheduledTime?: string | null;
          /** The connection IDs the post targets. */
          platforms?: Array<string>;
          /** The post on each connected account. */
          posts: Array<{
            /** The social network. */
            platform: string;
            /** The account's own ID on the social network, without the platform prefix, so not a connection ID for create_post or update_post. */
            platformId?: string | null;
            /** The text published to this account. */
            content?: string;
            /** draft, scheduled, pending, processing, published or failed. */
            status: string;
            /** The post ID on the social network once published. */
            postedId?: string | null;
            /** The address of the published post, when the network provides one. */
            permalink?: string | null;
            /** When the post was published to this account. */
            publishedAt?: string | null;
            /** Why publishing failed on this account, when it did. */
            error?: unknown;
            [key: string]: unknown;
          }>;
          /** Attached media. */
          media?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        };
      };
    };
    /** Get the publishing events of a Publora post from the last 90 days, oldest first: scheduling, each attempt, retries, successes and failures with their HTTP status and error. */
    "publora.get_post_logs": {
      input: {
        /**
         * The Publora post group ID returned by create_post or list_posts.
         * @pattern ^[a-f0-9]{24}$
         */
        postGroupId: string;
      };
      output: {
        /** Up to 100 events. */
        logs: Array<{
          /** The social network. */
          platform?: string;
          /** scheduled, processing, publish_attempted, publish_succeeded, publish_failed, publish_retry, status_changed or a media step. */
          event: string;
          /** The error, for a failed step. */
          error?: string | null;
          /** The platform's HTTP status, when recorded. */
          httpStatus?: number | null;
          /** How many retries came before this event. */
          retryCount?: number;
          /** When the event happened. */
          createdAt: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List the social accounts connected to Publora, with each connection ID and whether its token still works. Use the IDs as create_post platforms. */
    "publora.list_connections": {
      input: Record<string, never>;
      output: {
        /** Every connected account, including ones that need reconnecting. */
        connections: Array<{
          /** The connection ID to use in create_post platforms, such as linkedin-ABC123. */
          platformId: string;
          /** The account handle on the social network. */
          username?: string | null;
          /** The account's display name. */
          displayName?: string | null;
          /** The account's profile address. */
          profileUrl?: string | null;
          /** valid, expiring_soon, expired or unknown. */
          tokenStatus?: string;
          /** active, or reconnect_required when the account must be reconnected in Publora. */
          connectionStatus?: string;
          /** When the platform token expires. */
          accessTokenExpiresAt?: string | null;
          /** When Publora last published to this account. */
          lastSuccessfulPost?: string | null;
          /** The last publishing error on this account, with message and occurredAt. */
          lastError?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** List Publora posts page by page, filtered by status, platform or date range, with each account's delivery status. */
    "publora.list_posts": {
      input: {
        /**
         * The page number, starting at 1.
         * @minimum 1
         */
        page?: number;
        /**
         * Posts per page.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** Only posts with this status. */
        status?: "draft" | "scheduled" | "published" | "failed" | "partially_published";
        /** Only posts that target this platform type. */
        platform?: "twitter" | "linkedin" | "instagram" | "threads" | "tiktok" | "youtube" | "facebook" | "bluesky" | "mastodon" | "telegram" | "pinterest";
        /** The field to sort by. */
        sortBy?: "createdAt" | "updatedAt" | "scheduledTime";
        /** The sort direction. */
        sortOrder?: "asc" | "desc";
        /**
         * Only posts on or after this time.
         * @format date-time
         */
        fromDate?: string;
        /**
         * Only posts on or before this time.
         * @format date-time
         */
        toDate?: string;
      };
      output: {
        /** The posts on this page. */
        posts: Array<{
          /** The post group ID. */
          postGroupId: string;
          /** The post text. */
          content?: string;
          /** The overall status. */
          status: string;
          /** When the post is or was scheduled to publish. */
          scheduledTime?: string | null;
          /** The status on each targeted account. */
          platforms?: Array<Record<string, unknown>>;
          [key: string]: unknown;
        }>;
        /** page, limit, totalItems, totalPages, hasNextPage and hasPrevPage. */
        pagination: Record<string, unknown>;
      };
    };
    /** Change a Publora draft or scheduled post: its text, accounts, media, settings, comments or time, move it between draft and scheduled, or publish it now. A platforms list replaces the stored one; mediaUrls are added to the media already attached. */
    "publora.update_post": {
      input: Record<string, unknown>;
      output: {
        /** Publora's confirmation. */
        message?: string;
        /** The publish time Publora stored. */
        scheduledTime?: string | null;
        /** Non-blocking notes, such as SCHEDULED_TIME_COERCED when a past time was moved to now or FIRST_COMMENT_UNSUPPORTED_PLATFORMS. */
        warnings?: Array<{
          /** The stable warning code. */
          code?: string;
          /** What happened. */
          message?: string;
          [key: string]: unknown;
        }>;
        /** The post group after the change: _id, status, content, platforms, scheduledTime. */
        postGroup?: Record<string, unknown>;
      };
    };
  }
}
