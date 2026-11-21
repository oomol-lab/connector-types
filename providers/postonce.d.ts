import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Cancel a scheduled or still-pending PostOnce post. Copies already published on social networks are not removed. */
    "postonce.cancel_post": {
      input: {
        /**
         * The PostOnce post ID returned by create_post or list_posts.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A PostOnce post with its per-account delivery state. */
        post: {
          /** The PostOnce post ID. */
          id: string;
          /** The shared post text. */
          content?: string;
          /** Your own reference for the post. */
          external_id?: string | null;
          /** The attached media. */
          media?: Array<Record<string, unknown>>;
          /** ui, api or workflow. Workflow posts are read-only. */
          origin?: string | null;
          /** When a scheduled post publishes; null for an immediate post. */
          publish_at?: string | null;
          /** queued, scheduled, processing, partial, published, failed or cancelled. */
          status: string;
          /** When the post was created. */
          created_at?: string | null;
          /** The delivery state on each account. */
          targets: Array<{
            /** The destination ID used by retry_post_target. */
            target_post_id: string;
            /** The connected account ID. */
            account_id?: string | null;
            /** The social network. */
            platform?: string | null;
            /** The account handle. */
            username?: string | null;
            /** pending, scheduled, processing, submitted, published, failed, skipped or cancelled. */
            status: string;
            /** Why delivery failed, when it did. */
            error?: string | null;
            /** The post ID on the social network once published. */
            platform_post_id?: string | null;
            /** The address of the published post. */
            platform_post_url?: string | null;
            /** When this destination is scheduled to publish. */
            scheduled_time?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Publish a post to one or more connected accounts now, or schedule it with publish_at. Text, media URLs and per-account overrides go in one request. */
    "postonce.create_post": {
      input: {
        /** The post text shared by every target unless a target overrides it. */
        content?: string;
        /** Images or videos to attach. */
        media?: Array<{
          /**
           * The absolute HTTP or HTTPS address of the image or video.
           * @format uri
           */
          url: string;
          /** Whether the file is an image or a video. */
          type?: "image" | "video";
          /**
           * The width in pixels, when known.
           * @exclusiveMinimum 0
           */
          width?: number;
          /**
           * The height in pixels, when known.
           * @exclusiveMinimum 0
           */
          height?: number;
          /**
           * The file size in bytes, when known.
           * @exclusiveMinimum 0
           */
          size?: number;
          /**
           * The video length in seconds, when known.
           * @minimum 0
           */
          duration?: number;
          /**
           * A JPEG or PNG cover image for a video, used on Instagram Reels and Stories, Facebook Reels and TikTok.
           * @format uri
           */
          thumbnail_url?: string;
        }>;
        /**
         * The UTC time to publish at. Leave it out to publish now.
         * @format date-time
         */
        publish_at?: string;
        /** Your own reference for the post, such as a campaign or content ID. */
        external_id?: string;
        /**
         * Require all publishing targets to belong to this partner end user.
         * @minLength 1
         */
        external_user_id?: string;
        /**
         * The connected accounts to publish to.
         * @minItems 1
         */
        targets: Array<{
          /**
           * The connected account ID returned by list_accounts.
           * @minLength 1
           */
          account_id: string;
          /** Text to use for this account instead of the shared content. */
          content_override?: string;
          /** Platform-specific settings for this account, such as a YouTube or LinkedIn title, a Reddit subreddit, or ai_generated to request the platform's AI-content label. */
          platform_options?: Record<string, unknown>;
        }>;
        /**
         * A stable key for retries: repeating it with the same post returns the original.
         * @minLength 1
         * @maxLength 200
         */
        idempotency_key?: string;
      };
      output: {
        /** A PostOnce post with its per-account delivery state. */
        post: {
          /** The PostOnce post ID. */
          id: string;
          /** The shared post text. */
          content?: string;
          /** Your own reference for the post. */
          external_id?: string | null;
          /** The attached media. */
          media?: Array<Record<string, unknown>>;
          /** ui, api or workflow. Workflow posts are read-only. */
          origin?: string | null;
          /** When a scheduled post publishes; null for an immediate post. */
          publish_at?: string | null;
          /** queued, scheduled, processing, partial, published, failed or cancelled. */
          status: string;
          /** When the post was created. */
          created_at?: string | null;
          /** The delivery state on each account. */
          targets: Array<{
            /** The destination ID used by retry_post_target. */
            target_post_id: string;
            /** The connected account ID. */
            account_id?: string | null;
            /** The social network. */
            platform?: string | null;
            /** The account handle. */
            username?: string | null;
            /** pending, scheduled, processing, submitted, published, failed, skipped or cancelled. */
            status: string;
            /** Why delivery failed, when it did. */
            error?: string | null;
            /** The post ID on the social network once published. */
            platform_post_id?: string | null;
            /** The address of the published post. */
            platform_post_url?: string | null;
            /** When this destination is scheduled to publish. */
            scheduled_time?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get one PostOnce post with its status and the delivery state and published URL on each account. */
    "postonce.get_post": {
      input: {
        /**
         * The PostOnce post ID returned by create_post or list_posts.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** A PostOnce post with its per-account delivery state. */
        post: {
          /** The PostOnce post ID. */
          id: string;
          /** The shared post text. */
          content?: string;
          /** Your own reference for the post. */
          external_id?: string | null;
          /** The attached media. */
          media?: Array<Record<string, unknown>>;
          /** ui, api or workflow. Workflow posts are read-only. */
          origin?: string | null;
          /** When a scheduled post publishes; null for an immediate post. */
          publish_at?: string | null;
          /** queued, scheduled, processing, partial, published, failed or cancelled. */
          status: string;
          /** When the post was created. */
          created_at?: string | null;
          /** The delivery state on each account. */
          targets: Array<{
            /** The destination ID used by retry_post_target. */
            target_post_id: string;
            /** The connected account ID. */
            account_id?: string | null;
            /** The social network. */
            platform?: string | null;
            /** The account handle. */
            username?: string | null;
            /** pending, scheduled, processing, submitted, published, failed, skipped or cancelled. */
            status: string;
            /** Why delivery failed, when it did. */
            error?: string | null;
            /** The post ID on the social network once published. */
            platform_post_id?: string | null;
            /** The address of the published post. */
            platform_post_url?: string | null;
            /** When this destination is scheduled to publish. */
            scheduled_time?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Get current views, likes, comments, shares and saves for each published copy of a PostOnce post on TikTok, Instagram, YouTube and Facebook. */
    "postonce.get_post_analytics": {
      input: {
        /**
         * The PostOnce post ID returned by create_post or list_posts.
         * @format uuid
         */
        id: string;
      };
      output: {
        /** Metrics for each published copy. Copies on other networks, or not yet published, are left out. */
        analytics: {
          /** The PostOnce post ID. */
          id: string;
          /** The video or image file PostOnce published. */
          media_url?: string | null;
          /** Metrics for each published copy. A metric the platform does not report is null. */
          targets: Array<{
            /** The connected account ID. */
            account_id: string;
            /** The social network. */
            platform: string;
            /** The post ID on the social network. */
            platform_post_id?: string | null;
            /** The address of the published post. */
            url?: string | null;
            /** When the copy was published. */
            published_at?: string;
            /** ok, reconnect, limited or unavailable. */
            metrics_status?: string;
            /** Views. */
            views?: number | null;
            /** Likes. */
            likes?: number | null;
            /** Comments. */
            comments?: number | null;
            /** Shares. */
            shares?: number | null;
            /** Saves. */
            saves?: number | null;
            /** (likes + comments + shares + saves) / views. */
            engagement_rate?: number | null;
            /** When the numbers were read from the platform. */
            last_updated?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** List the social accounts connected to PostOnce, with each account's ID, network, status and media rules. Use the IDs as create_post targets. */
    "postonce.list_accounts": {
      input: {
        /**
         * Only accounts belonging to this partner end user.
         * @minLength 1
         */
        external_user_id?: string;
      };
      output: {
        /** Matching accounts owned by the API key's profile, including disconnected ones. */
        accounts: Array<{
          /** The account ID to use as a post target. */
          id: string;
          /** The social network, such as linkedin, twitter, threads, bluesky, instagram or tiktok. */
          platform: string;
          /** The account handle or name on the social network. */
          username?: string;
          /** The address of the account picture. */
          avatar_url?: string | null;
          /** active, auth_required (reconnect it in PostOnce) or disconnected. */
          status: string;
          /** What the account can publish: text, images, video, replies, threads. */
          capabilities?: Record<string, unknown> | null;
          /** Media rules for the account, including required_media when a text-only post is not allowed. */
          media_requirements?: Record<string, unknown> | null;
          /** When the account was connected. */
          created_at?: string;
          /** When the account was last updated. */
          updated_at?: string;
          [key: string]: unknown;
        }>;
      };
    };
    /** List PostOnce posts newest first, including scheduled posts and posts published by workflows, with each account's delivery state. */
    "postonce.list_posts": {
      input: {
        /**
         * Only posts belonging to this partner end user.
         * @minLength 1
         */
        external_user_id?: string;
        /**
         * The maximum number of posts to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * Cursor returned by a previous list response.
         * @minLength 1
         */
        after?: string;
      };
      output: {
        /** The posts, newest first. */
        posts: Array<{
          /** The PostOnce post ID. */
          id: string;
          /** The shared post text. */
          content?: string;
          /** Your own reference for the post. */
          external_id?: string | null;
          /** The attached media. */
          media?: Array<Record<string, unknown>>;
          /** ui, api or workflow. Workflow posts are read-only. */
          origin?: string | null;
          /** When a scheduled post publishes; null for an immediate post. */
          publish_at?: string | null;
          /** queued, scheduled, processing, partial, published, failed or cancelled. */
          status: string;
          /** When the post was created. */
          created_at?: string | null;
          /** The delivery state on each account. */
          targets: Array<{
            /** The destination ID used by retry_post_target. */
            target_post_id: string;
            /** The connected account ID. */
            account_id?: string | null;
            /** The social network. */
            platform?: string | null;
            /** The account handle. */
            username?: string | null;
            /** pending, scheduled, processing, submitted, published, failed, skipped or cancelled. */
            status: string;
            /** Why delivery failed, when it did. */
            error?: string | null;
            /** The post ID on the social network once published. */
            platform_post_id?: string | null;
            /** The address of the published post. */
            platform_post_url?: string | null;
            /** When this destination is scheduled to publish. */
            scheduled_time?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        }>;
        /** Paging details returned by PostOnce. */
        meta: Record<string, unknown>;
      };
    };
    /** Retry one failed account of a PostOnce post without publishing again to the accounts that already succeeded. */
    "postonce.retry_post_target": {
      input: {
        /**
         * The PostOnce post ID returned by create_post or list_posts.
         * @format uuid
         */
        id: string;
        /**
         * The failed destination's target_post_id from get_post.
         * @minLength 1
         */
        target_post_id: string;
      };
      output: {
        /** A PostOnce post with its per-account delivery state. */
        post: {
          /** The PostOnce post ID. */
          id: string;
          /** The shared post text. */
          content?: string;
          /** Your own reference for the post. */
          external_id?: string | null;
          /** The attached media. */
          media?: Array<Record<string, unknown>>;
          /** ui, api or workflow. Workflow posts are read-only. */
          origin?: string | null;
          /** When a scheduled post publishes; null for an immediate post. */
          publish_at?: string | null;
          /** queued, scheduled, processing, partial, published, failed or cancelled. */
          status: string;
          /** When the post was created. */
          created_at?: string | null;
          /** The delivery state on each account. */
          targets: Array<{
            /** The destination ID used by retry_post_target. */
            target_post_id: string;
            /** The connected account ID. */
            account_id?: string | null;
            /** The social network. */
            platform?: string | null;
            /** The account handle. */
            username?: string | null;
            /** pending, scheduled, processing, submitted, published, failed, skipped or cancelled. */
            status: string;
            /** Why delivery failed, when it did. */
            error?: string | null;
            /** The post ID on the social network once published. */
            platform_post_id?: string | null;
            /** The address of the published post. */
            platform_post_url?: string | null;
            /** When this destination is scheduled to publish. */
            scheduled_time?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
    /** Change a scheduled PostOnce post before it publishes: its text, media, publish time, reference or targets. */
    "postonce.update_post": {
      input: Record<string, unknown>;
      output: {
        /** A PostOnce post with its per-account delivery state. */
        post: {
          /** The PostOnce post ID. */
          id: string;
          /** The shared post text. */
          content?: string;
          /** Your own reference for the post. */
          external_id?: string | null;
          /** The attached media. */
          media?: Array<Record<string, unknown>>;
          /** ui, api or workflow. Workflow posts are read-only. */
          origin?: string | null;
          /** When a scheduled post publishes; null for an immediate post. */
          publish_at?: string | null;
          /** queued, scheduled, processing, partial, published, failed or cancelled. */
          status: string;
          /** When the post was created. */
          created_at?: string | null;
          /** The delivery state on each account. */
          targets: Array<{
            /** The destination ID used by retry_post_target. */
            target_post_id: string;
            /** The connected account ID. */
            account_id?: string | null;
            /** The social network. */
            platform?: string | null;
            /** The account handle. */
            username?: string | null;
            /** pending, scheduled, processing, submitted, published, failed, skipped or cancelled. */
            status: string;
            /** Why delivery failed, when it did. */
            error?: string | null;
            /** The post ID on the social network once published. */
            platform_post_id?: string | null;
            /** The address of the published post. */
            platform_post_url?: string | null;
            /** When this destination is scheduled to publish. */
            scheduled_time?: string | null;
            [key: string]: unknown;
          }>;
          [key: string]: unknown;
        };
      };
    };
  }
}
