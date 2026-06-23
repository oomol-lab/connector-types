import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Fetch a Douyin account detail payload through RedFoxHub. */
    "redfox.get_douyin_user": {
      input: {
        /**
         * Douyin account ID accepted by RedFoxHub.
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
    /** Fetch a Douyin work detail payload through RedFoxHub by work ID or work URL. */
    "redfox.get_douyin_work": {
      input: {
        /**
         * Douyin work ID accepted by RedFoxHub.
         * @minLength 1
         */
        workId?: string;
        /**
         * Douyin work URL accepted by RedFoxHub.
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
    /** Fetch a WeChat Official Account detail payload through RedFoxHub. */
    "redfox.get_wechat_account": {
      input: {
        /**
         * WeChat Official Account ID accepted by RedFoxHub.
         * @minLength 1
         */
        account: string;
        /**
         * WeChat Official Account name accepted by RedFoxHub.
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
    /** Fetch a WeChat Official Account article payload through RedFoxHub. */
    "redfox.get_wechat_article": {
      input: {
        /**
         * WeChat article UUID accepted by RedFoxHub.
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
    /** Fetch WeChat Official Account article data through RedFoxHub by article URL. */
    "redfox.get_wechat_article_by_url": {
      input: {
        /**
         * WeChat article URL accepted by RedFoxHub.
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
    /** Fetch a Xiaohongshu account detail payload through RedFoxHub. */
    "redfox.get_xiaohongshu_user": {
      input: {
        /**
         * Xiaohongshu account display ID accepted by RedFoxHub.
         * @minLength 1
         */
        accountId: string;
        /**
         * Xiaohongshu account primary user ID accepted by RedFoxHub.
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
    /** Fetch a Xiaohongshu work detail payload through RedFoxHub by work ID or link. */
    "redfox.get_xiaohongshu_work": {
      input: {
        /**
         * Xiaohongshu work ID accepted by RedFoxHub.
         * @minLength 1
         */
        workId?: string;
        /**
         * Xiaohongshu work link accepted by RedFoxHub.
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
    /** List works published by a Douyin account through RedFoxHub. */
    "redfox.list_douyin_user_works": {
      input: {
        /**
         * Douyin account identifier accepted by RedFoxHub.
         * @minLength 1
         */
        accountId?: string;
        /**
         * Douyin author page URL accepted by RedFoxHub.
         * @minLength 1
         */
        authorUrl?: string;
        /**
         * Douyin sec_user_id accepted by RedFoxHub.
         * @minLength 1
         */
        secUserId?: string;
        /**
         * Zero-based pagination offset accepted by RedFoxHub.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type accepted by RedFoxHub for this endpoint.
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
    /** List articles published by a WeChat Official Account through RedFoxHub. */
    "redfox.list_wechat_account_articles": {
      input: {
        /**
         * WeChat Official Account ID accepted by RedFoxHub.
         * @minLength 1
         */
        account: string;
        /**
         * WeChat Official Account name accepted by RedFoxHub.
         * @minLength 1
         */
        accountName?: string;
        /**
         * Zero-based pagination offset accepted by RedFoxHub.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type accepted by RedFoxHub for this endpoint.
         * @minLength 1
         */
        sortType?: string;
        /**
         * Earliest publish time accepted by RedFoxHub.
         * @minLength 1
         */
        publishTimeStart?: string;
        /**
         * Latest publish time accepted by RedFoxHub.
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
    /** Search Douyin AI creation data through RedFoxHub. */
    "redfox.search_douyin_ai_creations": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
         * @minLength 1
         */
        keyword: string;
        /**
         * One-based page number accepted by RedFoxHub.
         * @exclusiveMinimum 0
         */
        pageNum?: number;
        /**
         * Page size accepted by RedFoxHub.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Time value accepted by RedFoxHub.
         * @minLength 1
         */
        startTime?: string;
        /**
         * Time value accepted by RedFoxHub.
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
    /** Search Douyin accounts through RedFoxHub and return the upstream result payload. */
    "redfox.search_douyin_users": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset accepted by RedFoxHub.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type accepted by RedFoxHub for this endpoint.
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
    /** Search Douyin works through RedFoxHub and return the upstream result payload. */
    "redfox.search_douyin_works": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset accepted by RedFoxHub.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type accepted by RedFoxHub for this endpoint.
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
    /** Search TikTok accounts through RedFoxHub. */
    "redfox.search_tiktok_users": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
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
    /** Search WeChat Official Accounts through RedFoxHub and return the upstream payload. */
    "redfox.search_wechat_accounts": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset accepted by RedFoxHub.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type accepted by RedFoxHub for this endpoint.
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
    /** Search WeChat Official Account AI creation data through RedFoxHub. */
    "redfox.search_wechat_ai_creations": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
         * @minLength 1
         */
        keyword: string;
        /**
         * One-based page number accepted by RedFoxHub.
         * @exclusiveMinimum 0
         */
        pageNum: number;
        /**
         * Page size accepted by RedFoxHub.
         * @exclusiveMinimum 0
         */
        pageSize: number;
        /**
         * Time value accepted by RedFoxHub.
         * @minLength 1
         */
        startTime?: string;
        /**
         * Time value accepted by RedFoxHub.
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
    /** Search WeChat Official Account articles through RedFoxHub and return the upstream payload. */
    "redfox.search_wechat_articles": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset accepted by RedFoxHub.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type accepted by RedFoxHub for this endpoint.
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
    /** Search Xiaohongshu AI creation data through RedFoxHub. */
    "redfox.search_xiaohongshu_ai_creations": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
         * @minLength 1
         */
        keyword: string;
        /**
         * One-based page number accepted by RedFoxHub.
         * @exclusiveMinimum 0
         */
        pageNum?: number;
        /**
         * Page size accepted by RedFoxHub.
         * @exclusiveMinimum 0
         */
        pageSize?: number;
        /**
         * Source filter accepted by RedFoxHub.
         * @minLength 1
         */
        source?: string;
        /**
         * Time value accepted by RedFoxHub.
         * @minLength 1
         */
        startTime: string;
        /**
         * Time value accepted by RedFoxHub.
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
    /** Search Xiaohongshu accounts through RedFoxHub and return the upstream result payload. */
    "redfox.search_xiaohongshu_users": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset accepted by RedFoxHub.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type accepted by RedFoxHub for this endpoint.
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
    /** Search Xiaohongshu works through RedFoxHub and return the upstream result payload. */
    "redfox.search_xiaohongshu_works": {
      input: {
        /**
         * Search keyword sent to RedFoxHub.
         * @minLength 1
         */
        keyword: string;
        /**
         * Zero-based pagination offset accepted by RedFoxHub.
         * @minimum 0
         */
        offset?: number;
        /**
         * Sort type accepted by RedFoxHub for this endpoint.
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
  }
}
