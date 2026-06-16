import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Calculate TikHub daily request pricing for one endpoint. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.calculate_price": {
      input: {
        /**
         * The TikHub endpoint path to inspect or price.
         * @minLength 1
         */
        endpoint: string;
        /**
         * The expected number of daily requests used for the price calculation.
         * @exclusiveMinimum 0
         */
        requestPerDay?: number;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The endpoint path used for the calculation. */
        endpoint: string;
        /**
         * The daily request count used for the calculation.
         * @exclusiveMinimum 0
         */
        requestPerDay: number;
        /** The raw data payload returned by TikHub. */
        price: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch the public Douyin hot total list through TikHub. Requires the /api/v1/douyin/billboard/ TikHub path scope. */
    "tikhub.fetch_douyin_hot_total_list": {
      input: {
        /**
         * The result page number.
         * @exclusiveMinimum 0
         */
        page: number;
        /**
         * The number of hot-list items to return per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * The billboard snapshot mode, such as snapshot or range.
         * @minLength 1
         */
        type: string;
        /** The snapshot timestamp formatted as yyyyMMddHHmmss. */
        snapshotTime?: string;
        /** The start date formatted as yyyyMMdd. */
        startDate?: string;
        /** The end date formatted as yyyyMMdd. */
        endDate?: string;
        /** The comma-separated hot-list category tags. */
        sentenceTag?: string;
        /** The hot-list keyword filter. */
        keyword?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        hotList: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public Douyin posts for a user through TikHub without exposing upstream cookies. Requires the /api/v1/douyin/web/ TikHub path scope. */
    "tikhub.fetch_douyin_user_posts": {
      input: {
        /**
         * The Douyin user sec_user_id.
         * @minLength 1
         */
        secUserId: string;
        /** The maximum cursor returned by a previous response. */
        maxCursor?: string;
        /** The number of posts to return. */
        count?: number;
        /** The Douyin filter type. */
        filterType?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        posts: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch a public Douyin user profile by short ID through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope. */
    "tikhub.fetch_douyin_user_profile_by_short_id": {
      input: {
        /**
         * The Douyin user short ID.
         * @minLength 1
         */
        shortId: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        profile: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch a public Douyin user profile by UID through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope. */
    "tikhub.fetch_douyin_user_profile_by_uid": {
      input: {
        /**
         * The Douyin user UID.
         * @minLength 1
         */
        uid: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        profile: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch a public Douyin video detail by share URL through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope. */
    "tikhub.fetch_douyin_video_by_share_url": {
      input: {
        /**
         * The Douyin video share URL.
         * @minLength 1
         */
        shareUrl: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        post: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public Douyin comment replies through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope. */
    "tikhub.fetch_douyin_video_comment_replies": {
      input: {
        /**
         * The Douyin video item ID.
         * @minLength 1
         */
        itemId: string;
        /**
         * The Douyin comment ID.
         * @minLength 1
         */
        commentId: string;
        /** The page cursor. */
        cursor?: number;
        /** The number of replies to return. */
        count?: number;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        replies: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public Douyin video comments through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope. */
    "tikhub.fetch_douyin_video_comments": {
      input: {
        /**
         * The Douyin video aweme ID.
         * @minLength 1
         */
        awemeId: string;
        /** The page cursor. */
        cursor?: number;
        /** The number of comments to return. */
        count?: number;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        comments: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch a public Douyin video detail through TikHub. Requires the /api/v1/douyin/web/ TikHub path scope. */
    "tikhub.fetch_douyin_video_detail": {
      input: {
        /**
         * The Douyin video aweme ID.
         * @minLength 1
         */
        awemeId: string;
        /** Whether TikHub should include anchor information. */
        needAnchorInfo?: boolean;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        post: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public TikTok post comments through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope. */
    "tikhub.fetch_tiktok_post_comments": {
      input: {
        /**
         * The TikTok post aweme ID.
         * @minLength 1
         */
        awemeId: string;
        /** The page cursor. */
        cursor?: number;
        /** The number of comments to return. */
        count?: number;
        /** The current region code used by TikHub. */
        currentRegion?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        comments: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch a public TikTok post detail through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope. */
    "tikhub.fetch_tiktok_post_detail": {
      input: {
        /**
         * The TikTok post item ID.
         * @minLength 1
         */
        itemId: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        post: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch a public TikTok tag detail through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope. */
    "tikhub.fetch_tiktok_tag_detail": {
      input: {
        /**
         * The TikTok tag name.
         * @minLength 1
         */
        tagName: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        results: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public TikTok posts for a tag through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope. */
    "tikhub.fetch_tiktok_tag_posts": {
      input: {
        /**
         * The TikTok challenge ID.
         * @minLength 1
         */
        challengeId: string;
        /** The number of posts to return. */
        count?: number;
        /** The page cursor. */
        cursor?: number;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        posts: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public TikTok posts for a user through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope. */
    "tikhub.fetch_tiktok_user_posts": {
      input: {
        /**
         * The TikTok user secUid.
         * @minLength 1
         */
        secUid: string;
        /** The page cursor. */
        cursor?: number;
        /** The number of posts to return. */
        count?: number;
        /** The TikTok cover format value. */
        coverFormat?: number;
        /** The TikTok post list sort type. */
        postItemListRequestType?: number;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        posts: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch a public TikTok user profile through TikHub. Requires the /api/v1/tiktok/web/ TikHub path scope. */
    "tikhub.fetch_tiktok_user_profile": {
      input: {
        /** The TikTok user uniqueId. */
        uniqueId?: string;
        /** The TikTok user secUid. */
        secUid?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        profile: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch the public Xiaohongshu hot list through TikHub. Requires the /api/v1/xiaohongshu/web_v2/ TikHub path scope. */
    "tikhub.fetch_xiaohongshu_hot_list": {
      input: Record<string, never>;
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        hotList: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public Xiaohongshu note comment replies through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope. */
    "tikhub.fetch_xiaohongshu_note_comment_replies": {
      input: {
        /** The Xiaohongshu note ID. */
        noteId?: string;
        /** The Xiaohongshu note share link. */
        shareText?: string;
        /**
         * The Xiaohongshu parent comment ID.
         * @minLength 1
         */
        commentId: string;
        /** The sub-comment cursor. */
        cursor?: string;
        /** Deprecated compatibility alias for cursor. Prefer cursor for new calls. */
        lastCursor?: string;
        /** The sub-comment pagination index. */
        index?: number;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        replies: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public Xiaohongshu note comments through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope. */
    "tikhub.fetch_xiaohongshu_note_comments": {
      input: {
        /** The Xiaohongshu note ID. */
        noteId?: string;
        /** The Xiaohongshu note share link. */
        shareText?: string;
        /** The comment cursor. */
        cursor?: string;
        /** The comment index returned by a previous response. */
        index?: number;
        /** The comment fold state, such as UNFOLDED or FOLDED. */
        pageArea?: string;
        /** The comment sort strategy, such as default, latest_v2, or like_count. */
        sortStrategy?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        comments: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public Xiaohongshu sub-comments through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope. */
    "tikhub.fetch_xiaohongshu_sub_comments": {
      input: {
        /** The Xiaohongshu note ID. */
        noteId?: string;
        /** The Xiaohongshu note share link. */
        shareText?: string;
        /**
         * The Xiaohongshu parent comment ID.
         * @minLength 1
         */
        commentId: string;
        /** The sub-comment cursor. */
        cursor?: string;
        /** Deprecated compatibility alias for cursor. Prefer cursor for new calls. */
        lastCursor?: string;
        /** The sub-comment pagination index. */
        index?: number;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        replies: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public Xiaohongshu user information through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope. */
    "tikhub.fetch_xiaohongshu_user_info": {
      input: {
        /** The Xiaohongshu user ID. */
        userId?: string;
        /** The Xiaohongshu profile share link. */
        shareText?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        profile: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Fetch public Xiaohongshu user notes through TikHub App V2. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope. */
    "tikhub.fetch_xiaohongshu_user_notes": {
      input: {
        /** The Xiaohongshu user ID. */
        userId?: string;
        /** The Xiaohongshu profile share link. */
        shareText?: string;
        /** The pagination cursor returned by a previous response. */
        cursor?: string;
        /** Deprecated compatibility alias for cursor. Prefer cursor for new calls. */
        lastCursor?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        posts: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikHub cost and metadata for all endpoints. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.get_all_endpoints_info": {
      input: Record<string, never>;
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        endpoints: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get TikHub cost and metadata for one endpoint. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.get_endpoint_info": {
      input: {
        /**
         * The TikHub endpoint path to inspect or price.
         * @minLength 1
         */
        endpoint: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The endpoint path that was inspected. */
        endpoint: string;
        /** The raw data payload returned by TikHub. */
        endpointInfo: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current TikHub account daily API usage. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.get_user_daily_usage": {
      input: Record<string, never>;
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The daily usage entries returned by TikHub. */
        usage: Array<Record<string, unknown>>;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the current TikHub account and API key information. Requires the /api/v1/tikhub/user/ TikHub path scope. */
    "tikhub.get_user_info": {
      input: Record<string, never>;
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** TikHub API key metadata returned for the current token. */
        apiKey: {
          /** The API key name. */
          api_key_name?: string;
          /** The TikHub path scopes assigned to the API key. */
          api_key_scopes?: Array<string>;
          /** The API key creation timestamp. */
          created_at?: string;
          /** The API key expiration timestamp when configured. */
          expires_at?: string | null;
          /** The API key status value returned by TikHub. */
          api_key_status?: number;
          [key: string]: unknown;
        } | null;
        /** TikHub account metadata returned for the current token. */
        user: {
          /** The TikHub account email address. */
          email?: string;
          /** The current account balance. */
          balance?: number;
          /** The remaining free credit balance. */
          free_credit?: number;
          /** Whether the TikHub account email is verified. */
          email_verified?: boolean;
          /** Whether the TikHub account is disabled. */
          account_disabled?: boolean;
          /** Whether the TikHub account is active. */
          is_active?: boolean;
          [key: string]: unknown;
        } | null;
        /** The TikHub path scopes assigned to the current API key. */
        scopes: Array<string>;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search public Douyin users through TikHub. Requires the /api/v1/douyin/search/ TikHub path scope. */
    "tikhub.search_douyin_users": {
      input: {
        /**
         * The Douyin search keyword.
         * @minLength 1
         */
        keyword: string;
        /** The offset cursor returned by a previous response. */
        cursor?: number;
        /** The Douyin fan-count filter. */
        douyinUserFans?: string;
        /** The Douyin user-type filter. */
        douyinUserType?: string;
        /** The Douyin search ID returned by a previous response. */
        searchId?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        results: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search public Douyin videos through TikHub. Requires the /api/v1/douyin/search/ TikHub path scope. */
    "tikhub.search_douyin_videos": {
      input: {
        /**
         * The Douyin search keyword.
         * @minLength 1
         */
        keyword: string;
        /** The offset cursor returned by a previous response. */
        cursor?: number;
        /** The Douyin sort type, such as 0, 1, or 2. */
        sortType?: string;
        /** The Douyin publish time filter. */
        publishTime?: string;
        /** The Douyin video duration filter. */
        filterDuration?: string;
        /** The Douyin content type filter. */
        contentType?: string;
        /** The Douyin search ID returned by a previous response. */
        searchId?: string;
        /** The Douyin backtrace token returned by a previous response. */
        backtrace?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        results: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search public TikTok users through TikHub without exposing upstream cookies. Requires the /api/v1/tiktok/web/ TikHub path scope. */
    "tikhub.search_tiktok_users": {
      input: {
        /**
         * The TikTok search keyword.
         * @minLength 1
         */
        keyword: string;
        /** The page cursor. */
        cursor?: number;
        /** The TikTok search ID from a previous response. */
        searchId?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        results: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search public Xiaohongshu notes through TikHub. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope. */
    "tikhub.search_xiaohongshu_notes": {
      input: {
        /**
         * The Xiaohongshu search keywords.
         * @minLength 1
         */
        keywords: string;
        /** The result page number. */
        page?: number;
        /** The Xiaohongshu note sort type. */
        sortType?: string;
        /** The Xiaohongshu note type filter. Supported string values include "0", "1", "2", "all", "image", and "video". */
        noteType?: string;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        results: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
    /** Search public Xiaohongshu users through TikHub. Requires the /api/v1/xiaohongshu/app_v2/ TikHub path scope. */
    "tikhub.search_xiaohongshu_users": {
      input: {
        /**
         * The Xiaohongshu search keywords.
         * @minLength 1
         */
        keywords: string;
        /** The result page number. */
        page?: number;
      };
      output: {
        /** The normalized TikHub response envelope. */
        envelope: {
          /** The status-like code returned in the TikHub response body. */
          code?: number | null;
          /** The TikHub request identifier when returned. */
          requestId?: string | null;
          /** The TikHub response message when returned. */
          message?: string | null;
          /** The TikHub router path reported by the response. */
          router?: string | null;
          /** The request parameters echoed by TikHub when returned. */
          params?: Record<string, unknown> | null;
        };
        /** The raw data payload returned by TikHub. */
        results: unknown;
        /** The raw data payload returned by TikHub. */
        rawData: unknown;
        /** The raw TikHub response payload. */
        raw: Record<string, unknown>;
      };
    };
  }
}
