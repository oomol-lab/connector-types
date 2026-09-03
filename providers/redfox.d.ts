import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
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
