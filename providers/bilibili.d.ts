import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an anthology (文集) that groups articles of the authorized user. */
    "bilibili.create_anthology": {
      input: {
        /**
         * Anthology name.
         * @minLength 1
         */
        name: string;
        /** Anthology summary. */
        summary?: string;
        /**
         * Anthology cover image URL from bilibili.upload_article_image.
         * @format uri
         */
        imageUrl?: string;
      };
      output: {
        /** The new anthology id. */
        anthologyId?: number;
        /** The anthology name. */
        name?: string;
      };
    };
    /** Delete an anthology of the authorized user. This cannot be undone. */
    "bilibili.delete_anthology": {
      input: {
        /**
         * Anthology (文集) id.
         * @exclusiveMinimum 0
         */
        anthologyId: number;
      };
      output: {
        /** The deleted anthology id. */
        anthologyId: number;
        /** Always true when the deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Delete one video archive of the authorized user. This cannot be undone. */
    "bilibili.delete_archive": {
      input: {
        /**
         * The archive id (BV id) returned by bilibili.upload_video, for example BV17B4y1s7R1.
         * @minLength 1
         */
        resourceId: string;
      };
      output: {
        /** The deleted archive id (BV id). */
        resourceId: string;
        /** Always true when the deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Delete one or more articles of the authorized user. This cannot be undone. */
    "bilibili.delete_articles": {
      input: {
        /**
         * Article ids.
         * @minItems 1
         */
        articleIds: Array<number>;
      };
      output: {
        /** The deleted article ids. */
        articleIds: Array<number>;
        /** Always true when the deletion succeeded. */
        deleted: boolean;
      };
    };
    /** Edit an anthology's name, summary, or cover. Only provided fields change. */
    "bilibili.edit_anthology": {
      input: Record<string, unknown>;
      output: {
        /** The edited anthology id. */
        anthologyId: number;
      };
    };
    /** Edit descriptive fields of an existing archive (title, partition, cover, description, repost permission). Unchanged fields keep their current values. The video file itself cannot be replaced, and the archive is reviewed again after editing. */
    "bilibili.edit_archive": {
      input: Record<string, unknown>;
      output: {
        /** The edited archive id (BV id). */
        resourceId: string;
      };
    };
    /** Edit an existing article. Only provided fields change; the rest keep their current values. The article is reviewed again after editing. The article detail endpoint does not return the comment-section setting, so omitting upClosedReply resets it to the provider default. */
    "bilibili.edit_article": {
      input: Record<string, unknown>;
      output: {
        /** The edited article id. */
        articleId: number;
      };
    };
    /** Get one anthology with the articles it contains. */
    "bilibili.get_anthology": {
      input: {
        /**
         * Anthology (文集) id.
         * @exclusiveMinimum 0
         */
        anthologyId: number;
      };
      output: {
        /** A Bilibili anthology (文集). */
        anthology: {
          /** Anthology id. */
          anthologyId?: number;
          /** Anthology name. */
          name?: string;
          /** Anthology cover image URL. */
          imageUrl?: string;
          /** Anthology summary. */
          summary?: string;
          /** Total word count of the articles in the anthology. */
          words?: number;
          /** Total read count of the articles in the anthology. */
          read?: number;
          /** Review state; 1 means approved. */
          state?: number;
          /** Review rejection reason, empty when approved. */
          reason?: string;
          /** Number of articles in the anthology. */
          total?: number;
          /** Creation time as a UTC Unix timestamp. */
          ctime?: number;
          /** Publication time as a UTC Unix timestamp. */
          publishTime?: number;
          /** Last modification time as a UTC Unix timestamp. */
          updateTime?: number;
          /** Submission time as an ISO 8601 string. */
          applyTime?: string;
          /** Review time as an ISO 8601 string. */
          checkTime?: string;
        };
        /** Articles in the anthology. */
        articles: Array<{
          /** Article id. */
          articleId?: number;
          /** Article title. */
          title?: string;
          /** Review state; 0 means public. */
          state?: number;
          /** Publication time as a UTC Unix timestamp. */
          publishTime?: number;
        }>;
        /** Number of articles in the anthology. */
        total?: number;
      };
    };
    /** Get one video archive of the authorized user, including its review state and playback links. */
    "bilibili.get_archive": {
      input: {
        /**
         * The archive id (BV id) returned by bilibili.upload_video, for example BV17B4y1s7R1.
         * @minLength 1
         */
        resourceId: string;
      };
      output: {
        /** The archive id (BV id). */
        resourceId?: string;
        /** Archive title. */
        title?: string;
        /** Cover image URL hosted by Bilibili. */
        cover?: string;
        /** Partition (二级分区) id of the archive. */
        tid?: number;
        /** Comma-separated archive tags. */
        tag?: string;
        /** Archive description. */
        desc?: string;
        /** 1 for original content, 2 for reposted content. */
        copyright?: number;
        /** 1 when reposting is forbidden, 0 otherwise. */
        noReprint?: number;
        /** Review state; 0 means the archive is public. */
        state?: number;
        /** Human-readable review state, for example 开放浏览. */
        stateDesc?: string;
        /** Review rejection reason, empty when the archive passed. */
        rejectReason?: string;
        /** Creation time as a UTC Unix timestamp. */
        ctime?: number;
        /** Publication time as a UTC Unix timestamp. */
        ptime?: number;
        /** Video playback information, present once the archive is public. */
        video?: {
          /** Video cid. */
          cid?: number;
          /** Uploaded video filename. */
          filename?: string;
          /** Video duration in seconds. */
          duration?: number;
          /** Public playback page URL. */
          shareUrl?: string;
          /** Embeddable iframe player URL. */
          iframeUrl?: string;
        };
      };
    };
    /** Get the authorized user's overall archive increments over the last 30 days: plays, danmaku, comments, favorites, coins, shares, likes, and charges. */
    "bilibili.get_archive_inc_stats": {
      input: Record<string, never>;
      output: {
        /** Play count increment. */
        incClick?: number;
        /** Danmaku count increment. */
        incDanmaku?: number;
        /** Comment count increment. */
        incReply?: number;
        /** Favorite count increment. */
        incFavorite?: number;
        /** Coin count increment. */
        incCoin?: number;
        /** Share count increment. */
        incShare?: number;
        /** Like count increment. */
        incLike?: number;
        /** Charge (充电) count increment. */
        incElec?: number;
      };
    };
    /** Get engagement counters of one video archive: plays, danmaku, comments, favorites, coins, shares, likes. */
    "bilibili.get_archive_stat": {
      input: {
        /**
         * The archive id (BV id) returned by bilibili.upload_video, for example BV17B4y1s7R1.
         * @minLength 1
         */
        resourceId: string;
      };
      output: {
        /** Archive title. */
        title?: string;
        /** Publication time as a UTC Unix timestamp. */
        ptime?: number;
        /** Play count. */
        view?: number;
        /** Danmaku (bullet comment) count. */
        danmaku?: number;
        /** Comment count. */
        reply?: number;
        /** Favorite count. */
        favorite?: number;
        /** Coin count. */
        coin?: number;
        /** Share count. */
        share?: number;
        /** Like count. */
        like?: number;
      };
    };
    /** Get one article of the authorized user, including body HTML, review state, tags, and counters. */
    "bilibili.get_article": {
      input: {
        /**
         * The article id.
         * @exclusiveMinimum 0
         */
        articleId: number;
      };
      output: {
        /** Article id. */
        articleId?: number;
        /** Article title. */
        title?: string;
        /** Article summary. */
        summary?: string;
        /** Article body HTML. Only present in bilibili.get_article. */
        content?: string;
        /** Top banner image URL. */
        bannerUrl?: string;
        /** Cover template id. */
        templateId?: number;
        /** Review state; 0 means the article is public. */
        state?: number;
        /** Review rejection reason, empty when the article passed. */
        reason?: string;
        /** Cover image URLs. */
        imageUrls?: Array<string>;
        /** Publication time as a UTC Unix timestamp. */
        publishTime?: number;
        /** Creation time as a UTC Unix timestamp. */
        ctime?: number;
        /** Word count. */
        words?: number;
        /** 1 for original content, 0 otherwise. */
        original?: number;
        /** BV id of the header video. */
        topVideoBvid?: string;
        /** Editor type: 0 legacy editor, 1 note, 2 new editor. */
        type?: number;
        /** Article category. */
        category?: {
          /** Category id. */
          id?: number;
          /** Parent category id. */
          parentId?: number;
          /** Category name. */
          name?: string;
        };
        /** Article engagement counters. */
        stats?: {
          /** Read count. */
          view?: number;
          /** Favorite count. */
          favorite?: number;
          /** Like count. */
          like?: number;
          /** Dislike count. */
          dislike?: number;
          /** Comment count. */
          reply?: number;
          /** Share count. */
          share?: number;
          /** Coin count. */
          coin?: number;
        };
        /** Article tags. */
        tags?: Array<{
          /** Tag id. */
          tid?: number;
          /** Tag name. */
          name?: string;
        }>;
        /** The anthology this article belongs to. */
        anthology?: {
          /** Anthology id. */
          anthologyId?: number;
          /** Anthology name. */
          name?: string;
        };
      };
    };
    /** Get the card HTML snippet of a video (BV id) or article (cv id) to embed into article content when submitting or editing an article. */
    "bilibili.get_article_card_snippet": {
      input: {
        /**
         * A BV id (video) or cv id (article).
         * @minLength 1
         */
        resourceId: string;
      };
      output: {
        /** The card HTML snippet to embed in article content. */
        snippet?: string;
      };
    };
    /** Get the authorized user's overall article increments over the last 30 days: reads, comments, favorites, likes, shares, coins. */
    "bilibili.get_article_inc_stats": {
      input: Record<string, never>;
      output: {
        /** Read count increment. */
        incRead?: number;
        /** Comment count increment. */
        incReply?: number;
        /** Favorite count increment. */
        incFavorite?: number;
        /** Like count increment. */
        incLikes?: number;
        /** Share count increment. */
        incShare?: number;
        /** Coin count increment. */
        incCoin?: number;
      };
    };
    /** Get engagement counters of one or more articles: reads, favorites, likes, dislikes, comments, shares, coins. */
    "bilibili.get_article_stats": {
      input: {
        /**
         * Article ids.
         * @minItems 1
         */
        articleIds: Array<number>;
      };
      output: {
        /** Per-article data keyed by the requested ids. */
        articles: Array<{
          /** Article id. */
          articleId?: number;
          /** Article title. */
          title?: string;
          /** Article summary. */
          summary?: string;
          /** Article body HTML. Only present in bilibili.get_article. */
          content?: string;
          /** Top banner image URL. */
          bannerUrl?: string;
          /** Cover template id. */
          templateId?: number;
          /** Review state; 0 means the article is public. */
          state?: number;
          /** Review rejection reason, empty when the article passed. */
          reason?: string;
          /** Cover image URLs. */
          imageUrls?: Array<string>;
          /** Publication time as a UTC Unix timestamp. */
          publishTime?: number;
          /** Creation time as a UTC Unix timestamp. */
          ctime?: number;
          /** Word count. */
          words?: number;
          /** 1 for original content, 0 otherwise. */
          original?: number;
          /** BV id of the header video. */
          topVideoBvid?: string;
          /** Editor type: 0 legacy editor, 1 note, 2 new editor. */
          type?: number;
          /** Article category. */
          category?: {
            /** Category id. */
            id?: number;
            /** Parent category id. */
            parentId?: number;
            /** Category name. */
            name?: string;
          };
          /** Article engagement counters. */
          stats?: {
            /** Read count. */
            view?: number;
            /** Favorite count. */
            favorite?: number;
            /** Like count. */
            like?: number;
            /** Dislike count. */
            dislike?: number;
            /** Comment count. */
            reply?: number;
            /** Share count. */
            share?: number;
            /** Coin count. */
            coin?: number;
          };
          /** Article tags. */
          tags?: Array<{
            /** Tag id. */
            tid?: number;
            /** Tag name. */
            name?: string;
          }>;
          /** The anthology this article belongs to. */
          anthology?: {
            /** Anthology id. */
            anthologyId?: number;
            /** Anthology name. */
            name?: string;
          };
        }>;
      };
    };
    /** Get the authorized Bilibili user's public profile (nickname, avatar, openid). */
    "bilibili.get_user_info": {
      input: Record<string, never>;
      output: {
        /** User nickname. */
        name?: string;
        /** Avatar image URL. Cache it yourself before serving it to end users. */
        face?: string;
        /** The user's openid, unique per Bilibili application. */
        openid?: string;
      };
    };
    /** List the Bilibili interface permission points (scopes) the authorized user actually granted to this application. */
    "bilibili.get_user_scopes": {
      input: Record<string, never>;
      output: {
        /** The user's openid, unique per Bilibili application. */
        openid?: string;
        /** Granted permission points, for example ARC_BASE. */
        scopes: Array<string>;
      };
    };
    /** Get account-level counters of the authorized user: followers, followings, and passed video archives. */
    "bilibili.get_user_stat": {
      input: Record<string, never>;
      output: {
        /** Number of accounts the user follows. */
        following?: number;
        /** Follower count. */
        follower?: number;
        /** Number of video archives that passed review. */
        arcPassedTotal?: number;
      };
    };
    /** Get the authorized user's union_id, which is stable across all applications of the same developer. Bilibili must enable this endpoint for your application separately. */
    "bilibili.get_user_union_id": {
      input: Record<string, never>;
      output: {
        /** The user's union_id within this developer. */
        unionId?: string;
      };
    };
    /** List all anthologies of the authorized user with review state and article counts. */
    "bilibili.list_anthologies": {
      input: Record<string, never>;
      output: {
        /** The anthologies. */
        anthologies: Array<{
          /** Anthology id. */
          anthologyId?: number;
          /** Anthology name. */
          name?: string;
          /** Anthology cover image URL. */
          imageUrl?: string;
          /** Anthology summary. */
          summary?: string;
          /** Total word count of the articles in the anthology. */
          words?: number;
          /** Total read count of the articles in the anthology. */
          read?: number;
          /** Review state; 1 means approved. */
          state?: number;
          /** Review rejection reason, empty when approved. */
          reason?: string;
          /** Number of articles in the anthology. */
          total?: number;
          /** Creation time as a UTC Unix timestamp. */
          ctime?: number;
          /** Publication time as a UTC Unix timestamp. */
          publishTime?: number;
          /** Last modification time as a UTC Unix timestamp. */
          updateTime?: number;
          /** Submission time as an ISO 8601 string. */
          applyTime?: string;
          /** Review time as an ISO 8601 string. */
          checkTime?: string;
        }>;
        /** Total anthology count. */
        total?: number;
      };
    };
    /** List Bilibili video partitions (分区). Pick a second-level partition id as the tid of bilibili.upload_video; refresh it periodically because partitions change over time. */
    "bilibili.list_archive_types": {
      input: Record<string, never>;
      output: {
        /** Top-level partitions with their second-level children. */
        types: Array<Record<string, unknown>>;
      };
    };
    /** List the authorized user's video archives with review state, publication time, and playback links. */
    "bilibili.list_archives": {
      input: {
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pn?: number;
        /**
         * Page size, at most 50.
         * @minimum 1
         * @maximum 50
         */
        ps?: number;
        /** Filter by archive status. */
        status?: "all" | "is_pubing" | "pubed" | "not_pubed";
      };
      output: {
        /** Archives on this page. */
        archives: Array<{
          /** The archive id (BV id). */
          resourceId?: string;
          /** Archive title. */
          title?: string;
          /** Cover image URL hosted by Bilibili. */
          cover?: string;
          /** Partition (二级分区) id of the archive. */
          tid?: number;
          /** Comma-separated archive tags. */
          tag?: string;
          /** Archive description. */
          desc?: string;
          /** 1 for original content, 2 for reposted content. */
          copyright?: number;
          /** 1 when reposting is forbidden, 0 otherwise. */
          noReprint?: number;
          /** Review state; 0 means the archive is public. */
          state?: number;
          /** Human-readable review state, for example 开放浏览. */
          stateDesc?: string;
          /** Review rejection reason, empty when the archive passed. */
          rejectReason?: string;
          /** Creation time as a UTC Unix timestamp. */
          ctime?: number;
          /** Publication time as a UTC Unix timestamp. */
          ptime?: number;
          /** Video playback information, present once the archive is public. */
          video?: {
            /** Video cid. */
            cid?: number;
            /** Uploaded video filename. */
            filename?: string;
            /** Video duration in seconds. */
            duration?: number;
            /** Public playback page URL. */
            shareUrl?: string;
            /** Embeddable iframe player URL. */
            iframeUrl?: string;
          };
        }>;
        /** Pagination information. */
        page: {
          /** Current page number. */
          pn?: number;
          /** Page size. */
          ps?: number;
          /** Total archive count. */
          total?: number;
        };
      };
    };
    /** List Bilibili article categories. Pick a second-level category id as the categoryId of bilibili.submit_article. */
    "bilibili.list_article_categories": {
      input: Record<string, never>;
      output: {
        /** Top-level categories with their second-level children. */
        categories: Array<Record<string, unknown>>;
      };
    };
    /** List the authorized user's articles with review state and counters, plus the account-level counts by review state. */
    "bilibili.list_articles": {
      input: {
        /**
         * Page number, starting at 1.
         * @exclusiveMinimum 0
         */
        pn?: number;
        /**
         * Page size; the provider default is 10.
         * @exclusiveMinimum 0
         */
        ps?: number;
        /**
         * Sort: 1 creation time (default), 2 likes, 3 comments, 4 reads, 5 favorites, 6 coins.
         * @minimum 1
         * @maximum 6
         */
        sort?: number;
        /**
         * Filter by review state: 0 all except drafts and deleted (default), 1 in review, 2 passed, 3 rejected.
         * @minimum 0
         * @maximum 3
         */
        group?: number;
        /** Filter by category id. */
        categoryId?: number;
      };
      output: {
        /** Articles on this page. */
        articles: Array<{
          /** Article id. */
          articleId?: number;
          /** Article title. */
          title?: string;
          /** Article summary. */
          summary?: string;
          /** Article body HTML. Only present in bilibili.get_article. */
          content?: string;
          /** Top banner image URL. */
          bannerUrl?: string;
          /** Cover template id. */
          templateId?: number;
          /** Review state; 0 means the article is public. */
          state?: number;
          /** Review rejection reason, empty when the article passed. */
          reason?: string;
          /** Cover image URLs. */
          imageUrls?: Array<string>;
          /** Publication time as a UTC Unix timestamp. */
          publishTime?: number;
          /** Creation time as a UTC Unix timestamp. */
          ctime?: number;
          /** Word count. */
          words?: number;
          /** 1 for original content, 0 otherwise. */
          original?: number;
          /** BV id of the header video. */
          topVideoBvid?: string;
          /** Editor type: 0 legacy editor, 1 note, 2 new editor. */
          type?: number;
          /** Article category. */
          category?: {
            /** Category id. */
            id?: number;
            /** Parent category id. */
            parentId?: number;
            /** Category name. */
            name?: string;
          };
          /** Article engagement counters. */
          stats?: {
            /** Read count. */
            view?: number;
            /** Favorite count. */
            favorite?: number;
            /** Like count. */
            like?: number;
            /** Dislike count. */
            dislike?: number;
            /** Comment count. */
            reply?: number;
            /** Share count. */
            share?: number;
            /** Coin count. */
            coin?: number;
          };
          /** Article tags. */
          tags?: Array<{
            /** Tag id. */
            tid?: number;
            /** Tag name. */
            name?: string;
          }>;
          /** The anthology this article belongs to. */
          anthology?: {
            /** Anthology id. */
            anthologyId?: number;
            /** Anthology name. */
            name?: string;
          };
        }>;
        /** Pagination information. */
        page: {
          /** Current page number. */
          pn?: number;
          /** Page size. */
          ps?: number;
          /** Total article count. */
          total?: number;
        };
        /** Account-level article counts by review state. */
        counts: {
          /** All articles. */
          all?: number;
          /** In review. */
          audit?: number;
          /** Passed. */
          passed?: number;
          /** Rejected. */
          notPassed?: number;
        };
      };
    };
    /** Replace the article list of an anthology. An article already filed under another anthology is not moved. Pass an empty list to clear the anthology. */
    "bilibili.set_anthology_articles": {
      input: {
        /**
         * Anthology (文集) id.
         * @exclusiveMinimum 0
         */
        anthologyId: number;
        /** The new article list of the anthology; empty clears it. */
        articleIds: Array<number>;
      };
      output: {
        /** The anthology id. */
        anthologyId: number;
        /** The submitted article ids. */
        articleIds: Array<number>;
      };
    };
    /** Submit a new Bilibili article (专栏). Image URLs in the content and covers must come from bilibili.upload_article_image. The article enters review after submission and becomes public once approved. */
    "bilibili.submit_article": {
      input: {
        /**
         * Article title; keep it within 40 characters.
         * @minLength 1
         * @maxLength 40
         */
        title: string;
        /** Second-level article category id from bilibili.list_article_categories. */
        categoryId: number;
        /**
         * Cover template: 3 = three cover images; 4 = single or no cover image with bannerUrl or topVideoBvid set; 5 = no image at all, Bilibili generates a default cover.
         * @minimum 3
         * @maximum 5
         */
        templateId: number;
        /**
         * Article summary.
         * @minLength 1
         */
        summary: string;
        /**
         * Article body HTML (200-40000 characters, or at least three images). Embed images with the <figure class="img-box"> template using URLs from bilibili.upload_article_image, and cards from bilibili.get_article_card_snippet.
         * @minLength 1
         */
        content: string;
        /**
         * Top banner image URL from bilibili.upload_article_image; mutually exclusive with topVideoBvid.
         * @format uri
         */
        bannerUrl?: string;
        /** Mark the article as original content. */
        original?: boolean;
        /** Cover image URLs. Three images are required when templateId is 3. */
        imageUrls?: Array<string>;
        /** Comma-separated custom tags. */
        tags?: string;
        /**
         * Anthology (文集) id to file the article under.
         * @exclusiveMinimum 0
         */
        anthologyId?: number;
        /** Close the comment section when true. */
        upClosedReply?: boolean;
        /** BV id of the header video; mutually exclusive with bannerUrl. */
        topVideoBvid?: string;
      };
      output: {
        /** The new article id (cv number without the prefix). */
        articleId: number;
      };
    };
    /** Upload an image (jpg/png, up to 5MB) for article content, covers, or banners. The returned Bilibili-hosted URL is what article fields accept. */
    "bilibili.upload_article_image": {
      input: {
        /**
         * Publicly reachable image URL (jpg/png, up to 5MB).
         * @format uri
         */
        imageUrl: string;
        /** Add a watermark with the Bilibili logo and the uploader's nickname. */
        watermark?: boolean;
      };
      output: {
        /** The Bilibili-hosted image URL. */
        url: string;
        /** Image size in bytes. */
        size?: number;
      };
    };
    /** Upload a video file to Bilibili and submit it as a new archive. Files up to 100MB use a single upload; larger files (up to 4GB) are uploaded in 10MB parts. The archive enters review after submission and becomes public once approved. */
    "bilibili.upload_video": {
      input: {
        /**
         * Publicly reachable video URL (mp4/mov/mkv recommended, up to 4GB).
         * @format uri
         */
        mediaUrl: string;
        /**
         * Archive title, shorter than 80 characters. Identical titles in a short time window are rejected.
         * @minLength 1
         * @maxLength 79
         */
        title: string;
        /**
         * Second-level partition id from bilibili.list_archive_types.
         * @exclusiveMinimum 0
         */
        tid: number;
        /**
         * Comma-separated tags; total length below 200 characters.
         * @minLength 1
         * @maxLength 199
         */
        tag: string;
        /**
         * 1 for original content, 2 for reposted content.
         * @minimum 1
         * @maximum 2
         */
        copyright: number;
        /**
         * Optional publicly reachable cover image URL (jpeg/png, up to 5MB, at least 960x600).
         * @format uri
         */
        coverUrl?: string;
        /**
         * Archive description, shorter than 250 characters.
         * @maxLength 249
         */
        desc?: string;
        /**
         * Repost source. Required when copyright is 2.
         * @minLength 1
         */
        source?: string;
        /** Set true to forbid reposting this archive. */
        noReprint?: boolean;
      };
      output: {
        /** The new archive id (BV id). */
        resourceId: string;
        /** The Bilibili-hosted cover URL, present when a cover was uploaded. */
        coverUrl?: string;
      };
    };
  }
}
