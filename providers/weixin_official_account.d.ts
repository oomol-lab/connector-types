import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Create an article draft with 1 to 8 articles. Cover images must be permanent material media_ids. */
    "weixin_official_account.add_draft": {
      input: {
        /**
         * The draft articles, in display order.
         * @minItems 1
         * @maxItems 8
         */
        articles: Array<{
          /** The article type; set to `newspic` for a picture message. Omit for a regular news article. */
          articleType?: string;
          /** The article title. */
          title?: string;
          /** The author name. */
          author?: string;
          /** The article digest shown in the article list. */
          digest?: string;
          /** The article HTML content. Image URLs inside must come from upload_article_image. */
          content?: string;
          /** The original URL linked by the read-more button. */
          contentSourceUrl?: string;
          /** The media_id of the cover image permanent material. */
          thumbMediaId?: string;
          /** The cover image URL, used instead of thumbMediaId for `newspic` articles. */
          thumbUrl?: string;
          /** Whether to open comments: 0 or 1. */
          needOpenComment?: number;
          /** Whether only followers can comment: 0 or 1. */
          onlyFansCanComment?: number;
          /** The image_info payload passed through to WeChat. */
          imageInfo?: Record<string, unknown>;
          /** The cover_info payload passed through to WeChat. */
          coverInfo?: Record<string, unknown>;
          /** The product_info payload passed through to WeChat. */
          productInfo?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /** The media_id of the draft. */
        media_id?: string;
        [key: string]: unknown;
      };
    };
    /** Upload a permanent media material. Permanent materials do not expire but count toward the account material quota. Size limits: image 10 MB, voice 2 MB, video 10 MB, thumb 64 KB. Video uploads require title and introduction. */
    "weixin_official_account.add_material": {
      input: {
        /** The media type. */
        type: "image" | "voice" | "video" | "thumb";
        /**
         * A public HTTP or HTTPS URL for the media file.
         * @format uri
         */
        file: string;
        /**
         * The video title. Required when type is video.
         * @minLength 1
         */
        title?: string;
        /**
         * The video introduction. Required when type is video.
         * @minLength 1
         */
        introduction?: string;
      };
      output: {
        /** The media_id of the uploaded permanent material. */
        media_id?: string;
        /** The material URL (image material only). */
        url?: string;
        [key: string]: unknown;
      };
    };
    /** Add a private template from the template library by its short id and get back the full template_id. Only certified service accounts can use this API. */
    "weixin_official_account.add_template": {
      input: {
        /**
         * The template_id_short from the public template library.
         * @minLength 1
         */
        templateIdShort: string;
      };
      output: {
        /** The full template_id created from the short id. */
        template_id?: string;
        [key: string]: unknown;
      };
    };
    /** List article drafts in pages of at most 20 items. */
    "weixin_official_account.batch_get_draft": {
      input: {
        /**
         * The zero-based offset of the first item to return. Defaults to 0.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The number of items to return, between 1 and 20. Defaults to 20.
         * @maximum 20
         * @exclusiveMinimum 0
         * @default 20
         */
        count?: number;
        /** Whether to omit the article content field from the returned items. Defaults to false. */
        noContent?: boolean;
      };
      output: {
        /** The total number of drafts. */
        total_count?: number;
        /** The number of drafts in this page. */
        item_count?: number;
        /** The drafts in this page. */
        item?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List permanent materials of one type in pages of at most 20 items. */
    "weixin_official_account.batch_get_material": {
      input: {
        /** The material type to list. */
        type: "image" | "video" | "voice" | "news";
        /**
         * The zero-based offset of the first item to return. Defaults to 0.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The number of items to return, between 1 and 20. Defaults to 20.
         * @maximum 20
         * @exclusiveMinimum 0
         * @default 20
         */
        count?: number;
      };
      output: {
        /** The total number of materials of this type. */
        total_count?: number;
        /** The number of materials in this page. */
        item_count?: number;
        /** The materials in this page. */
        item?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** List successfully published article records in pages of at most 20 items. */
    "weixin_official_account.batch_get_published": {
      input: {
        /**
         * The zero-based offset of the first item to return. Defaults to 0.
         * @minimum 0
         * @default 0
         */
        offset?: number;
        /**
         * The number of items to return, between 1 and 20. Defaults to 20.
         * @maximum 20
         * @exclusiveMinimum 0
         * @default 20
         */
        count?: number;
        /** Whether to omit the article content field from the returned items. Defaults to false. */
        noContent?: boolean;
      };
      output: {
        /** The total number of publish records. */
        total_count?: number;
        /** The number of publish records in this page. */
        item_count?: number;
        /** The publish records in this page. */
        item?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Check network connectivity between WeChat servers and the callback URL configured for the official account. Fails with errcode 40201 when the account has no callback URL configured. */
    "weixin_official_account.callback_check": {
      input: {
        /**
         * The check action to run.
         * @default "all"
         */
        action?: "dns" | "ping" | "all";
        /**
         * The carrier line to check from.
         * @default "DEFAULT"
         */
        checkOperator?: "CHINANET" | "UNICOM" | "CAP" | "DEFAULT";
      };
      output: {
        /** The DNS check results. */
        dns?: Array<Record<string, unknown>>;
        /** The ping check results. */
        ping?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Reset the monthly API call quota of the connected official account. The account's appId is taken from the credential. Each account can clear its quota at most 10 times per calendar month. */
    "weixin_official_account.clear_quota": {
      input: Record<string, never>;
      output: Record<string, unknown>;
    };
    /** Permanently delete one article draft by media_id. This cannot be undone. */
    "weixin_official_account.delete_draft": {
      input: {
        /**
         * The media_id of the draft to delete.
         * @minLength 1
         */
        mediaId: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete a mass-sent message by msg_id. articleIdx selects one article inside the message, counting from 1; omit it to delete the whole message. Only messages sent through the API that finished sending can be deleted, and only news and video messages qualify. Deletion invalidates the article content page for everyone; users who already received the message still see its card locally. When several mass sends shared one article, deleting one send invalidates all of them. */
    "weixin_official_account.delete_mass_message": {
      input: {
        /** The msg_id returned by send_mass_message or send_mass_message_by_tag. */
        msgId: string | number;
        /**
         * The 1-based index of the article inside the message. Omit to delete all articles.
         * @exclusiveMinimum 0
         */
        articleIdx?: number;
      };
      output: Record<string, unknown>;
    };
    /** Permanently delete a permanent material by media_id. This cannot be undone. */
    "weixin_official_account.delete_material": {
      input: {
        /**
         * The media_id of the permanent material to delete.
         * @minLength 1
         */
        mediaId: string;
      };
      output: Record<string, unknown>;
    };
    /** Delete a published article by article_id. index selects one article inside the published message, counting from 1; omit index to delete the whole message. Deleted articles show as unavailable to readers. This cannot be undone. */
    "weixin_official_account.delete_publish": {
      input: {
        /**
         * The article_id of the published message to delete.
         * @minLength 1
         */
        articleId: string;
        /**
         * The 1-based index of the article inside the message. Omit to delete all articles.
         * @exclusiveMinimum 0
         */
        index?: number;
      };
      output: Record<string, unknown>;
    };
    /** Delete one private template by template_id. Only certified service accounts can use this API. This cannot be undone. */
    "weixin_official_account.delete_template": {
      input: {
        /**
         * The template_id of the private template to delete.
         * @minLength 1
         */
        templateId: string;
      };
      output: Record<string, unknown>;
    };
    /** List all private templates of the account. Only certified service accounts can use this API. */
    "weixin_official_account.get_all_templates": {
      input: Record<string, never>;
      output: {
        /** The private templates of the account. */
        template_list?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the WeChat API server IP addresses that the official account servers may call from. */
    "weixin_official_account.get_api_domain_ip": {
      input: Record<string, never>;
      output: {
        /** The IP addresses reported by WeChat. */
        ip_list?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get the daily read metrics of every published article that was read on the given day. Both dates use YYYY-MM-DD, and WeChat returns data up to yesterday at the latest. The range spans at most 1 day(s) including both ends. Only certified WeChat Official Accounts can use this API. */
    "weixin_official_account.get_article_read": {
      input: {
        /**
         * The first date of the statistics range in YYYY-MM-DD format.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        beginDate: string;
        /**
         * The last date of the statistics range in YYYY-MM-DD format. WeChat returns data up to yesterday at the latest.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate: string;
      };
      output: {
        /** The per-day statistics rows. */
        list?: Array<Record<string, unknown>>;
        /** Whether WeChat marked the returned data as delayed. */
        is_delay?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the daily share metrics of every published article that was shared on the given day. Both dates use YYYY-MM-DD, and WeChat returns data up to yesterday at the latest. The range spans at most 1 day(s) including both ends. Only certified WeChat Official Accounts can use this API. */
    "weixin_official_account.get_article_share": {
      input: {
        /**
         * The first date of the statistics range in YYYY-MM-DD format.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        beginDate: string;
        /**
         * The last date of the statistics range in YYYY-MM-DD format. WeChat returns data up to yesterday at the latest.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate: string;
      };
      output: {
        /** The per-day statistics rows. */
        list?: Array<Record<string, unknown>>;
        /** Whether WeChat marked the returned data as delayed. */
        is_delay?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the cumulative per-article metrics for everything published in the range. Each article accumulates at most 30 days of data from its publish date. Both dates use YYYY-MM-DD, and WeChat returns data up to yesterday at the latest. The range spans at most 1 day(s) including both ends. Only certified WeChat Official Accounts can use this API. */
    "weixin_official_account.get_article_total_detail": {
      input: {
        /**
         * The first date of the statistics range in YYYY-MM-DD format.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        beginDate: string;
        /**
         * The last date of the statistics range in YYYY-MM-DD format. WeChat returns data up to yesterday at the latest.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate: string;
      };
      output: {
        /** The per-day statistics rows. */
        list?: Array<Record<string, unknown>>;
        /** Whether WeChat marked the returned data as delayed. */
        is_delay?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the per-day overview metrics aggregated across all content published in the range. Both dates use YYYY-MM-DD, and WeChat returns data up to yesterday at the latest. The range spans at most 30 day(s) including both ends. Only certified WeChat Official Accounts can use this API. */
    "weixin_official_account.get_biz_summary": {
      input: {
        /**
         * The first date of the statistics range in YYYY-MM-DD format.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        beginDate: string;
        /**
         * The last date of the statistics range in YYYY-MM-DD format. WeChat returns data up to yesterday at the latest.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate: string;
      };
      output: {
        /** The per-day statistics rows. */
        list?: Array<Record<string, unknown>>;
        /** Whether WeChat marked the returned data as delayed. */
        is_delay?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get the WeChat callback server IP addresses. Allowlist them when the official account receives message callbacks. */
    "weixin_official_account.get_callback_ip": {
      input: Record<string, never>;
      output: {
        /** The IP addresses reported by WeChat. */
        ip_list?: Array<string>;
        [key: string]: unknown;
      };
    };
    /** Get the content of one article draft by media_id. */
    "weixin_official_account.get_draft": {
      input: {
        /**
         * The media_id of the draft.
         * @minLength 1
         */
        mediaId: string;
      };
      output: {
        /** The draft articles. */
        news_item?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Get the total number of article drafts of the official account. */
    "weixin_official_account.get_draft_count": {
      input: Record<string, never>;
      output: {
        /** The total number of drafts. */
        total_count?: number;
        [key: string]: unknown;
      };
    };
    /** Poll the send status of a mass message task by msg_id. */
    "weixin_official_account.get_mass_message_status": {
      input: {
        /** The msg_id returned by send_mass_message or send_mass_message_by_tag. */
        msgId: string | number;
      };
      output: {
        /** The mass send task id. */
        msg_id?: number;
        /** The task status: SEND_SUCCESS, SENDING, SEND_FAIL, or DELETE. */
        msg_status?: string;
        [key: string]: unknown;
      };
    };
    /** Get a permanent material by media_id. News materials return their articles and video materials return title, description, and down_url as JSON; image and voice materials are stored in local transit storage. */
    "weixin_official_account.get_material": {
      input: {
        /**
         * The media_id of the permanent material.
         * @minLength 1
         */
        mediaId: string;
        /**
         * An optional file name override for binary downloads.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The requested media_id (binary downloads only). */
        mediaId?: string;
        /** The downloaded media content type (binary downloads only). */
        contentType?: string;
        /** The downloaded media stored in connector transit storage. */
        file?: {
          /** The temporary transit URL. */
          transitUrl?: string;
          /** The file size in bytes. */
          sizeBytes?: number;
          /** The stored file name. */
          name?: string;
          /** The media MIME type. */
          mimeType?: string;
          [key: string]: unknown;
        };
        /** The video playback URL (temporary video media only). */
        video_url?: string;
        /** The articles of a permanent news material. */
        news_item?: Array<Record<string, unknown>>;
        /** The video title (permanent video material only). */
        title?: string;
        /** The video description (permanent video material only). */
        description?: string;
        /** The video download URL (permanent video material only). */
        down_url?: string;
        [key: string]: unknown;
      };
    };
    /** Get the permanent material counts of the official account, grouped by media type. */
    "weixin_official_account.get_material_count": {
      input: Record<string, never>;
      output: {
        /** The number of voice materials. */
        voice_count?: number;
        /** The number of video materials. */
        video_count?: number;
        /** The number of image materials. */
        image_count?: number;
        /** The number of news materials. */
        news_count?: number;
        [key: string]: unknown;
      };
    };
    /** Poll the status of a publish task by publish_id. */
    "weixin_official_account.get_publish_status": {
      input: {
        /**
         * The publish_id returned by publish_draft.
         * @minLength 1
         */
        publishId: string;
      };
      output: {
        /** The publish task id. */
        publish_id?: string;
        /** The publish status: 0 succeeded, 1 publishing, 2/3/4 failed, 5/6 deleted or blocked after success. */
        publish_status?: number;
        /** The published article_id when publish_status is 0. */
        article_id?: string;
        /** The published article details when publish_status is 0. */
        article_detail?: Record<string, unknown>;
        /** The 1-based indexes of the articles that failed. */
        fail_idx?: Array<number>;
        [key: string]: unknown;
      };
    };
    /** Get the content of a published article by article_id. */
    "weixin_official_account.get_published_article": {
      input: {
        /**
         * The article_id returned when the publish task succeeded.
         * @minLength 1
         */
        articleId: string;
      };
      output: {
        /** The published articles. */
        news_item?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
    };
    /** Download a temporary media file by media_id. Image, voice, and thumb media are stored in local transit storage; video media returns a video_url instead. */
    "weixin_official_account.get_temp_media": {
      input: {
        /**
         * The media_id returned by upload_temp_media or a message.
         * @minLength 1
         */
        mediaId: string;
        /**
         * An optional file name override for the downloaded media.
         * @minLength 1
         */
        fileName?: string;
      };
      output: {
        /** The requested media_id (binary downloads only). */
        mediaId?: string;
        /** The downloaded media content type (binary downloads only). */
        contentType?: string;
        /** The downloaded media stored in connector transit storage. */
        file?: {
          /** The temporary transit URL. */
          transitUrl?: string;
          /** The file size in bytes. */
          sizeBytes?: number;
          /** The stored file name. */
          name?: string;
          /** The media MIME type. */
          mimeType?: string;
          [key: string]: unknown;
        };
        /** The video playback URL (temporary video media only). */
        video_url?: string;
        /** The articles of a permanent news material. */
        news_item?: Array<Record<string, unknown>>;
        /** The video title (permanent video material only). */
        title?: string;
        /** The video description (permanent video material only). */
        description?: string;
        /** The video download URL (permanent video material only). */
        down_url?: string;
        [key: string]: unknown;
      };
    };
    /** Get the primary and secondary industry currently set on the account. Only certified service accounts can use this API. */
    "weixin_official_account.get_template_industry": {
      input: Record<string, never>;
      output: {
        /** The primary industry, with first_class and second_class names. */
        primary_industry?: Record<string, unknown>;
        /** The secondary industry, with first_class and second_class names. */
        secondary_industry?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get the per-day cumulative follower count of the official account. Both dates use YYYY-MM-DD, and WeChat returns data up to yesterday at the latest. The range spans at most 7 day(s) including both ends. Only certified WeChat Official Accounts can use this API. */
    "weixin_official_account.get_user_cumulate": {
      input: {
        /**
         * The first date of the statistics range in YYYY-MM-DD format.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        beginDate: string;
        /**
         * The last date of the statistics range in YYYY-MM-DD format. WeChat returns data up to yesterday at the latest.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate: string;
      };
      output: {
        /** The per-day statistics rows. */
        list?: Array<Record<string, unknown>>;
        /** Whether WeChat marked the returned data as delayed. */
        is_delay?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get per-day follower gains and losses of the official account. Both dates use YYYY-MM-DD, and WeChat returns data up to yesterday at the latest. The range spans at most 7 day(s) including both ends. Only certified WeChat Official Accounts can use this API. */
    "weixin_official_account.get_user_summary": {
      input: {
        /**
         * The first date of the statistics range in YYYY-MM-DD format.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        beginDate: string;
        /**
         * The last date of the statistics range in YYYY-MM-DD format. WeChat returns data up to yesterday at the latest.
         * @minLength 1
         * @pattern ^\d{4}-\d{2}-\d{2}$
         */
        endDate: string;
      };
      output: {
        /** The per-day statistics rows. */
        list?: Array<Record<string, unknown>>;
        /** Whether WeChat marked the returned data as delayed. */
        is_delay?: boolean;
        [key: string]: unknown;
      };
    };
    /** Preview a mass message to one follower before sending, to check its style and layout. Only certified accounts can use this API. Previewing by WeChat ID (toWxName) is limited to 100 calls per day. */
    "weixin_official_account.preview_mass_message": {
      input: {
        /**
         * The OpenID of the follower to preview to. Exactly one of toUser and toWxName is required.
         * @minLength 1
         */
        toUser?: string;
        /**
         * The WeChat ID of the user to preview to. Exactly one of toUser and toWxName is required.
         * @minLength 1
         */
        toWxName?: string;
        /** The message type to preview. */
        msgType: "mpnews" | "text" | "voice" | "music" | "image" | "mpvideo" | "wxcard";
        /** The content object for the chosen msgType, sent under the msgtype key itself. Shapes: mpnews {media_id}; text {content}; voice {media_id}; music {media_id}; image {media_id}; mpvideo {media_id, title?, description?}; wxcard {card_id, card_ext?}. Note the preview image content takes a single media_id, unlike the media_ids list used by the mass send actions. */
        content: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Submit one article draft for publishing. The returned publish_id only means the publish task was accepted; poll get_publish_status for the result. Only certified accounts can publish. */
    "weixin_official_account.publish_draft": {
      input: {
        /**
         * The media_id of the draft to publish.
         * @minLength 1
         */
        mediaId: string;
      };
      output: {
        /** The publish task id used to poll the publish status. */
        publish_id?: string;
        /** The message data id of the published article. */
        msg_data_id?: string;
        [key: string]: unknown;
      };
    };
    /** Send a customer service message to one follower. Only certified accounts can use this API, and the follower must have interacted with the account within the last 48 hours. content is the message-type-specific object documented per msgType. */
    "weixin_official_account.send_custom_message": {
      input: {
        /**
         * The OpenID of the follower to message.
         * @minLength 1
         */
        toUser: string;
        /** The customer service message type. */
        msgType: "text" | "image" | "voice" | "video" | "music" | "news" | "mpnews" | "mpnewsarticle" | "wxcard" | "miniprogrampage" | "msgmenu";
        /** The content object for the chosen msgType, passed through as the message body. Shapes: text {content}; image/voice {media_id}; video {media_id, thumb_media_id, title, description}; music {title, description, musicurl, hqmusicurl, thumb_media_id}; news {articles: [{title, description, url, picurl}]}; mpnews {media_id}; mpnewsarticle {article_id}; wxcard {card_id}; miniprogrampage {title, appid, pagepath, thumb_media_id}; msgmenu {head_content, list: [{id, content}], tail_content}. */
        content: Record<string, unknown>;
      };
      output: Record<string, unknown>;
    };
    /** Mass-send a message to a list of follower OpenIDs (between 2 and 10000). Only certified accounts can mass-send: certified subscription accounts once per day, certified service accounts 4 times per calendar month. A successful response only means the task was accepted; poll get_mass_message_status for the result. */
    "weixin_official_account.send_mass_message": {
      input: {
        /**
         * The recipient OpenIDs, between 2 and 10000.
         * @minItems 2
         * @maxItems 10000
         */
        toUsers: Array<string>;
        /** The mass message type. */
        msgType: "mpnews" | "text" | "voice" | "image" | "mpvideo" | "wxcard";
        /** The content object for the chosen msgType. Shapes: mpnews {media_id} (a draft or permanent news material media_id); text {content}; voice {media_id}; image {media_ids: [...], recommend?, title?, need_open_comment?, only_fans_can_comment?}; mpvideo {media_id, title?, description?}; wxcard {card_id}. */
        content: Record<string, unknown>;
        /** For mpnews only: whether to continue sending when the article is judged a reprint. Defaults to false (stop sending). */
        sendIgnoreReprint?: boolean;
      };
      output: {
        /** The mass send task id used to poll or delete the task. */
        msg_id?: number;
        /** The message data id, returned for news (mpnews) messages only. */
        msg_data_id?: number;
        [key: string]: unknown;
      };
    };
    /** Mass-send a message to all followers or to one follower tag. Only certified accounts can mass-send: certified subscription accounts once per day, certified service accounts 4 times per calendar month. A successful response only means the task was accepted; poll get_mass_message_status for the result. */
    "weixin_official_account.send_mass_message_by_tag": {
      input: {
        /**
         * Whether to send to all followers. Defaults to false.
         * @default false
         */
        isToAll?: boolean;
        /** The tag id to send to. Required when isToAll is false. Ignored when isToAll is true. */
        tagId?: number;
        /** The mass message type. */
        msgType: "mpnews" | "text" | "voice" | "image" | "mpvideo" | "wxcard";
        /** The content object for the chosen msgType. Shapes: mpnews {media_id} (a draft or permanent news material media_id); text {content}; voice {media_id}; image {media_ids: [...], recommend?, title?, need_open_comment?, only_fans_can_comment?}; mpvideo {media_id, title?, description?}; wxcard {card_id}. */
        content: Record<string, unknown>;
      };
      output: {
        /** The mass send task id used to poll or delete the task. */
        msg_id?: number;
        /** The message data id, returned for news (mpnews) messages only. */
        msg_data_id?: number;
        [key: string]: unknown;
      };
    };
    /** Send a template message to one follower. Only certified service accounts can use this API. data maps each template keyword to {value, color?}. */
    "weixin_official_account.send_template_message": {
      input: {
        /**
         * The OpenID of the follower to message.
         * @minLength 1
         */
        toUser: string;
        /**
         * The template_id of a private template of the account.
         * @minLength 1
         */
        templateId: string;
        /**
         * An optional URL opened when the follower taps the message.
         * @format uri
         */
        url?: string;
        /** An optional mini program jump target with appid and pagepath. */
        miniprogram?: {
          /** The mini program appid. */
          appid?: string;
          /** The mini program page path. */
          pagepath?: string;
          [key: string]: unknown;
        };
        /**
         * An optional caller-side id (at most 32 bytes) that deduplicates retries.
         * @minLength 1
         */
        clientMsgId?: string;
        /** The template data, mapping each keyword to {value, color?}. */
        data: Record<string, unknown>;
      };
      output: {
        /** The template message id. */
        msgid?: number;
        [key: string]: unknown;
      };
    };
    /** Set the primary and secondary industry of the account, which decides which template library entries are available. Only certified service accounts can use this API. */
    "weixin_official_account.set_template_industry": {
      input: {
        /**
         * The primary industry id from the WeChat template industry table.
         * @minLength 1
         */
        industryId1: string;
        /**
         * The secondary industry id from the WeChat template industry table.
         * @minLength 1
         */
        industryId2: string;
      };
      output: Record<string, unknown>;
    };
    /** Show or hide the customer service typing indicator for one follower. Only certified accounts can use this API, and the follower must have interacted with the account within the last 48 hours. */
    "weixin_official_account.set_typing_status": {
      input: {
        /**
         * The OpenID of the follower.
         * @minLength 1
         */
        toUser: string;
        /**
         * Whether to start or stop typing.
         * @default "Typing"
         */
        command?: "Typing" | "CancelTyping";
      };
      output: Record<string, unknown>;
    };
    /** Replace one article inside a draft. index is zero-based: the first article is 0. */
    "weixin_official_account.update_draft": {
      input: {
        /**
         * The media_id of the draft to update.
         * @minLength 1
         */
        mediaId: string;
        /**
         * The zero-based index of the article inside the draft.
         * @minimum 0
         */
        index: number;
        /** One draft article. Known fields are camelCase here and are sent to WeChat in snake_case; any additional field is passed through unchanged. */
        article: {
          /** The article type; set to `newspic` for a picture message. Omit for a regular news article. */
          articleType?: string;
          /** The article title. */
          title?: string;
          /** The author name. */
          author?: string;
          /** The article digest shown in the article list. */
          digest?: string;
          /** The article HTML content. Image URLs inside must come from upload_article_image. */
          content?: string;
          /** The original URL linked by the read-more button. */
          contentSourceUrl?: string;
          /** The media_id of the cover image permanent material. */
          thumbMediaId?: string;
          /** The cover image URL, used instead of thumbMediaId for `newspic` articles. */
          thumbUrl?: string;
          /** Whether to open comments: 0 or 1. */
          needOpenComment?: number;
          /** Whether only followers can comment: 0 or 1. */
          onlyFansCanComment?: number;
          /** The image_info payload passed through to WeChat. */
          imageInfo?: Record<string, unknown>;
          /** The cover_info payload passed through to WeChat. */
          coverInfo?: Record<string, unknown>;
          /** The product_info payload passed through to WeChat. */
          productInfo?: Record<string, unknown>;
          [key: string]: unknown;
        };
      };
      output: Record<string, unknown>;
    };
    /** Upload an image used inside article HTML content and get back its WeChat-hosted URL. Only the returned URL renders inside article content. JPG/PNG only, at most 1 MB. Does not consume the material quota. */
    "weixin_official_account.upload_article_image": {
      input: {
        /**
         * A public HTTP or HTTPS URL for the JPG or PNG image.
         * @format uri
         */
        file: string;
      };
      output: {
        /** The WeChat-hosted image URL to embed in article content. */
        url?: string;
        [key: string]: unknown;
      };
    };
    /** Upload a temporary media file to the official account. Temporary media expires 3 days after upload. Size limits: image 10 MB, voice 2 MB, video 10 MB, thumb 64 KB. */
    "weixin_official_account.upload_temp_media": {
      input: {
        /** The media type. */
        type: "image" | "voice" | "video" | "thumb";
        /**
         * A public HTTP or HTTPS URL for the media file.
         * @format uri
         */
        file: string;
      };
      output: {
        /** The media type echoed by WeChat. */
        type?: string;
        /** The media_id of the uploaded temporary media, valid for 3 days. */
        media_id?: string;
        /** The upload time as a Unix timestamp. */
        created_at?: number;
        [key: string]: unknown;
      };
    };
  }
}
