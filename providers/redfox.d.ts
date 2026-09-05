import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get details about a Bilibili account. */
    "redfox.get_bilibili_user": {
      input: {
        /**
         * Bilibili account MID.
         * @minLength 1
         */
        mid: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get a Bilibili work by its BV ID or URL. */
    "redfox.get_bilibili_work": {
      input: {
        /**
         * Bilibili BV ID.
         * @minLength 1
         */
        bvId?: string;
        /**
         * Bilibili video URL or b23.tv short URL.
         * @minLength 1
         */
        workUrl?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get details about a Douyin account. */
    "redfox.get_douyin_user": {
      input: {
        /**
         * Douyin account ID.
         * @minLength 1
         */
        accountId: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get a Douyin work by its ID or URL. */
    "redfox.get_douyin_work": {
      input: {
        /**
         * Douyin work ID.
         * @minLength 1
         */
        workId?: string;
        /**
         * Douyin work URL.
         * @minLength 1
         */
        workUrl?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get details about a Kuaishou work. */
    "redfox.get_kuaishou_work": {
      input: {
        /**
         * Kuaishou photo ID returned by a search or list action.
         * @minLength 1
         */
        photoId: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get details about a Toutiao work. */
    "redfox.get_toutiao_work": {
      input: {
        /**
         * Toutiao work ID.
         * @minLength 1
         */
        opusId: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get details about a WeChat Official Account. */
    "redfox.get_wechat_account": {
      input: {
        /**
         * WeChat Official Account ID.
         * @minLength 1
         */
        account: string;
        /**
         * WeChat Official Account name.
         * @minLength 1
         */
        accountName?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get a WeChat Official Account article by its UUID. */
    "redfox.get_wechat_article": {
      input: {
        /**
         * WeChat article UUID.
         * @minLength 1
         */
        workUuid: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get a WeChat Official Account article by its URL. */
    "redfox.get_wechat_article_by_url": {
      input: {
        /**
         * WeChat article URL.
         * @minLength 1
         */
        url: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get details about a WeChat Channel work. */
    "redfox.get_wechat_channel_work": {
      input: {
        /**
         * WeChat Channel video ID.
         * @minLength 1
         */
        videoId: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get details about a Xiaohongshu account. */
    "redfox.get_xiaohongshu_user": {
      input: {
        /**
         * Xiaohongshu account display ID.
         * @minLength 1
         */
        accountId: string;
        /**
         * Xiaohongshu account primary user ID.
         * @minLength 1
         */
        userId?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Get a Xiaohongshu work by its ID or link. */
    "redfox.get_xiaohongshu_work": {
      input: {
        /**
         * Xiaohongshu work ID.
         * @minLength 1
         */
        workId?: string;
        /**
         * Xiaohongshu work link.
         * @minLength 1
         */
        workLink?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** List works published by a Bilibili account. */
    "redfox.list_bilibili_user_works": {
      input: {
        /**
         * Bilibili account MID.
         * @minLength 1
         */
        mid?: string;
        /**
         * Bilibili account page URL.
         * @minLength 1
         */
        accountUrl?: string;
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Bilibili work sort order. */
        order?: "time" | "play" | "like" | "comment" | "favorite";
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** List works published by a Douyin account. */
    "redfox.list_douyin_user_works": {
      input: {
        /**
         * Douyin account identifier.
         * @minLength 1
         */
        accountId?: string;
        /**
         * Douyin author page URL.
         * @minLength 1
         */
        authorUrl?: string;
        /**
         * Douyin sec_user_id.
         * @minLength 1
         */
        secUserId?: string;
        /**
         * Zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type for this endpoint.
         * @minLength 1
         */
        sortType?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** List works published by a Kuaishou account. */
    "redfox.list_kuaishou_user_works": {
      input: {
        /**
         * Kuaishou display ID returned by account search.
         * @minLength 1
         */
        kwaiId?: string;
        /**
         * Account ID contained in a Kuaishou profile URL.
         * @minLength 1
         */
        threeXId?: string;
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** List works published by a Toutiao account. */
    "redfox.list_toutiao_user_works": {
      input: {
        /** Toutiao content category. */
        category: "profile_all" | "pc_profile_article" | "pc_profile_video" | "pc_profile_ugc" | "profile_wenda" | "pc_profile_short_video";
        /**
         * Toutiao web account token found in the account page URL.
         * @minLength 1
         */
        token: string;
        /**
         * Pagination offset. Use 0 for the first page.
         * @minLength 1
         */
        offset: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** List comments on a Toutiao work. */
    "redfox.list_toutiao_work_comments": {
      input: {
        /**
         * Toutiao work ID.
         * @minLength 1
         */
        opusId: string;
        /**
         * Pagination offset returned by the previous page.
         * @minLength 1
         */
        offset?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** List articles published by a WeChat Official Account. */
    "redfox.list_wechat_account_articles": {
      input: {
        /**
         * WeChat Official Account ID.
         * @minLength 1
         */
        account: string;
        /**
         * WeChat Official Account name.
         * @minLength 1
         */
        accountName?: string;
        /**
         * Zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type for this endpoint.
         * @minLength 1
         */
        sortType?: string;
        /**
         * Earliest publish time to include.
         * @minLength 1
         */
        publishTimeStart?: string;
        /**
         * Latest publish time to include.
         * @minLength 1
         */
        publishTimeEnd?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** List works published by a WeChat Channel account. */
    "redfox.list_wechat_channel_user_works": {
      input: {
        /**
         * Exact WeChat Channel account nickname.
         * @minLength 1
         */
        nickname: string;
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Bilibili accounts by keyword. */
    "redfox.search_bilibili_users": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * One-based page number, encoded as a string.
         * @minLength 1
         */
        page: string;
        /**
         * Number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Bilibili account sort order. */
        order?: "follower" | "like";
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Bilibili works by keyword. */
    "redfox.search_bilibili_works": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /** Whether to require the complete phrase in the title or author. */
        exactMatch?: boolean;
        /**
         * One-based page number, encoded as a string.
         * @minLength 1
         */
        page: string;
        /**
         * Number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
        /** Bilibili work sort order. */
        order?: "time" | "play" | "like" | "comment" | "favorite";
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Douyin works related to AI creation. */
    "redfox.search_douyin_ai_creations": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * One-based page number.
         * @exclusiveMinimum 0
         */
        pageNum?: number;
        /**
         * Number of results per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Time value used to filter results.
         * @minLength 1
         */
        startTime?: string;
        /**
         * Time value used to filter results.
         * @minLength 1
         */
        endTime?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Douyin accounts by keyword. */
    "redfox.search_douyin_users": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type for this endpoint.
         * @minLength 1
         */
        sortType?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Douyin works by keyword. */
    "redfox.search_douyin_works": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type for this endpoint.
         * @minLength 1
         */
        sortType?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Kuaishou accounts by name. */
    "redfox.search_kuaishou_users": {
      input: {
        /**
         * Account name to search for.
         * @minLength 1
         */
        accountName: string;
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Kuaishou works by keyword. */
    "redfox.search_kuaishou_works": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /** Sort order for the results. */
        sort?: "综合" | "最新" | "最多点赞" | "最多收藏";
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search TikTok accounts by keyword. */
    "redfox.search_tiktok_users": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * TikTok search pagination cursor. Use 0 for the first page.
         * @minimum 0
         */
        cursor: number;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Toutiao accounts by keyword. */
    "redfox.search_toutiao_users": {
      input: {
        /**
         * Account name keyword to search for.
         * @minLength 1
         */
        name: string;
        /**
         * Pagination offset returned by the previous page.
         * @minLength 1
         */
        offset?: string;
        /**
         * Search ID returned by the previous page.
         * @minLength 1
         */
        searchId?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Toutiao works by keyword. */
    "redfox.search_toutiao_works": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Pagination offset. Use 0 for the first page.
         * @minLength 1
         */
        offset: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search WeChat Official Accounts by keyword. */
    "redfox.search_wechat_accounts": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type for this endpoint.
         * @minLength 1
         */
        sortType?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search WeChat Official Account articles related to AI creation. */
    "redfox.search_wechat_ai_creations": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * One-based page number.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * Number of results per page.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * Time value used to filter results.
         * @minLength 1
         */
        startTime?: string;
        /**
         * Time value used to filter results.
         * @minLength 1
         */
        endTime?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search WeChat Official Account articles by keyword. */
    "redfox.search_wechat_articles": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type for this endpoint.
         * @minLength 1
         */
        sortType?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search WeChat Channel accounts by name. */
    "redfox.search_wechat_channel_users": {
      input: {
        /**
         * Account name to search for.
         * @minLength 1
         */
        accountName: string;
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        pageSize?: number;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search WeChat Channel works by keyword. */
    "redfox.search_wechat_channel_works": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /** Sort order for the results. */
        sort?: "综合" | "最新" | "最多点赞" | "最多收藏";
        /**
         * One-based page number.
         * @minimum 1
         */
        page?: number;
        /**
         * Number of results per page, up to 50.
         * @minimum 1
         * @maximum 50
         */
        size?: number;
        /** Whether to require the complete phrase in the content or author. */
        exactMatch?: boolean;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Xiaohongshu works related to AI creation. */
    "redfox.search_xiaohongshu_ai_creations": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * One-based page number.
         * @exclusiveMinimum 0
         */
        pageNum?: number;
        /**
         * Number of results per page.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Source to include in the results.
         * @minLength 1
         */
        source?: string;
        /**
         * Time value used to filter results.
         * @minLength 1
         */
        startTime: string;
        /**
         * Time value used to filter results.
         * @minLength 1
         */
        endTime: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Xiaohongshu accounts by keyword. */
    "redfox.search_xiaohongshu_users": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type for this endpoint.
         * @minLength 1
         */
        sortType?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
    /** Search Xiaohongshu works in the curated database. */
    "redfox.search_xiaohongshu_works": {
      input: {
        /**
         * Keyword to search for.
         * @minLength 1
         */
        keyword: string;
        /**
         * Publish time range, such as 一周内 or 不限.
         * @minLength 1
         */
        noteTime?: string;
        /**
         * Sort order, such as 最多点赞 or 综合.
         * @minLength 1
         */
        sort?: string;
        /**
         * One-based page number.
         * @exclusiveMinimum 0
         */
        page?: number;
        /**
         * Xiaohongshu note type, such as 不限.
         * @minLength 1
         */
        noteType?: string;
      };
      output: {
        /** RedFoxHub business status code. A value of 2000 means success. */
        code: number;
        /** Message returned by RedFoxHub. */
        msg: string;
        /** The RedFoxHub data payload returned by the endpoint. */
        data: unknown;
      };
    };
  }
}
