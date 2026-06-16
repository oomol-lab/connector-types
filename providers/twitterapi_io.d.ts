import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an X user to real-time Tweet monitoring. */
    "twitterapi_io.add_monitored_tweet_user": {
      input: {
        /**
         * The X screen name without the @ prefix.
         * @minLength 1
         */
        xUserName: string;
      };
      output: {
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Add a Webhook/WebSocket tweet filter rule. */
    "twitterapi_io.add_tweet_filter_rule": {
      input: {
        /**
         * A custom tag that identifies the tweet filter rule.
         * @minLength 1
         * @maxLength 255
         */
        tag: string;
        /**
         * The Twitter search rule used to filter Tweets.
         * @minLength 1
         * @maxLength 255
         */
        value: string;
        /**
         * The interval, in seconds, used to check matching Tweets.
         * @minimum 0.05
         * @maximum 86400
         */
        intervalSeconds: number;
      };
      output: {
        /** The ID of the added tweet filter rule. */
        rule_id?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Run an advanced Twitter search query. */
    "twitterapi_io.advanced_search_tweets": {
      input: {
        /**
         * The advanced search query.
         * @minLength 1
         */
        query: string;
        /** The search result ordering. */
        queryType: "Latest" | "Top";
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve multiple X user profiles by user ID. */
    "twitterapi_io.batch_get_users": {
      input: {
        /**
         * The X user IDs to retrieve.
         * @minItems 1
         */
        userIds: Array<string>;
      };
      output: {
        /** The users returned by the endpoint. */
        users?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Check whether one X user follows or is followed by another user. */
    "twitterapi_io.check_follow_relationship": {
      input: {
        /**
         * The source user's screen name.
         * @minLength 1
         */
        sourceUserName: string;
        /**
         * The target user's screen name.
         * @minLength 1
         */
        targetUserName: string;
      };
      output: {
        /** Follow relationship flags. */
        data?: {
          /** Whether the source user follows the target user. */
          following?: boolean;
          /** Whether the source user is followed by the target user. */
          followed_by?: boolean;
        };
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Delete a Webhook/WebSocket tweet filter rule. */
    "twitterapi_io.delete_tweet_filter_rule": {
      input: {
        /**
         * The twitterapi.io tweet filter rule ID.
         * @minLength 1
         */
        ruleId: string;
      };
      output: {
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve twitterapi.io account credit information for the API key. */
    "twitterapi_io.get_account_info": {
      input: Record<string, never>;
      output: {
        /** The remaining recharge credits for the API key. */
        recharge_credits?: number;
      };
    };
    /** Retrieve an X article by Tweet ID. */
    "twitterapi_io.get_article": {
      input: {
        /**
         * The Tweet ID.
         * @minLength 1
         */
        tweetId: string;
      };
      output: {
        /** Additional upstream fields returned by twitterapi.io. */
        article?: Record<string, unknown>;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve information about an X Community. */
    "twitterapi_io.get_community_info": {
      input: {
        /**
         * The X Community ID.
         * @minLength 1
         */
        communityId: string;
      };
      output: {
        /** Additional upstream fields returned by twitterapi.io. */
        community_info?: Record<string, unknown>;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve members of an X Community. */
    "twitterapi_io.get_community_members": {
      input: {
        /**
         * The X Community ID.
         * @minLength 1
         */
        communityId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The member users returned by the endpoint. */
        members?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve moderators of an X Community. */
    "twitterapi_io.get_community_moderators": {
      input: {
        /**
         * The X Community ID.
         * @minLength 1
         */
        communityId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The member users returned by the endpoint. */
        members?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve Tweets from an X Community. */
    "twitterapi_io.get_community_tweets": {
      input: {
        /**
         * The X Community ID.
         * @minLength 1
         */
        communityId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve followers of an X List. */
    "twitterapi_io.get_list_followers": {
      input: {
        /**
         * The X List ID.
         * @minLength 1
         */
        listId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The follower users returned by the endpoint. */
        followers?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve members of an X List. */
    "twitterapi_io.get_list_members": {
      input: {
        /**
         * The X List ID.
         * @minLength 1
         */
        listId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The member users returned by the endpoint. */
        members?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve timeline Tweets from an X List. */
    "twitterapi_io.get_list_timeline": {
      input: {
        /**
         * The X List ID.
         * @minLength 1
         */
        listId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve Tweets from an X List. */
    "twitterapi_io.get_list_tweets": {
      input: {
        /**
         * The X List ID.
         * @minLength 1
         */
        listId: string;
        /** A Unix timestamp in seconds. */
        sinceTime?: number;
        /** A Unix timestamp in seconds. */
        untilTime?: number;
        /** Whether to include replies in the returned Tweets. */
        includeReplies?: boolean;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve details for an X Space. */
    "twitterapi_io.get_space": {
      input: {
        /**
         * The X Space ID.
         * @minLength 1
         */
        spaceId: string;
      };
      output: {
        /** Additional upstream fields returned by twitterapi.io. */
        data?: Record<string, unknown>;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve X trends for a WOEID location. */
    "twitterapi_io.get_trends": {
      input: {
        /** The Where On Earth ID for the trend location. */
        woeid: number;
        /** The number of trends to return. */
        count?: number;
      };
      output: {
        /** The trends returned by the endpoint. */
        trends?: Array<Record<string, unknown>>;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve quote Tweets for a Tweet. */
    "twitterapi_io.get_tweet_quotes": {
      input: {
        /**
         * The Tweet ID.
         * @minLength 1
         */
        tweetId: string;
        /** A Unix timestamp in seconds. */
        sinceTime?: number;
        /** A Unix timestamp in seconds. */
        untilTime?: number;
        /** Whether to include replies in the returned Tweets. */
        includeReplies?: boolean;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve replies to a Tweet with twitterapi.io V2 sorting. */
    "twitterapi_io.get_tweet_replies": {
      input: {
        /**
         * The Tweet ID.
         * @minLength 1
         */
        tweetId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
        /** The reply result ordering. */
        queryType?: "Relevance" | "Latest" | "Likes";
      };
      output: {
        /** The reply Tweets returned by the endpoint. */
        replies?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve replies to an original Tweet with the legacy replies endpoint. */
    "twitterapi_io.get_tweet_replies_legacy": {
      input: {
        /**
         * The Tweet ID.
         * @minLength 1
         */
        tweetId: string;
        /** A Unix timestamp in seconds. */
        sinceTime?: number;
        /** A Unix timestamp in seconds. */
        untilTime?: number;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The reply Tweets returned by the endpoint. */
        replies?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve users who retweeted a Tweet. */
    "twitterapi_io.get_tweet_retweeters": {
      input: {
        /**
         * The Tweet ID.
         * @minLength 1
         */
        tweetId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The users returned by the endpoint. */
        users?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve the conversation context around a Tweet. */
    "twitterapi_io.get_tweet_thread_context": {
      input: {
        /**
         * The Tweet ID.
         * @minLength 1
         */
        tweetId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The reply Tweets returned by the endpoint. */
        replies?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve Tweets by Tweet IDs. */
    "twitterapi_io.get_tweets": {
      input: {
        /**
         * The Tweet IDs to retrieve.
         * @minItems 1
         */
        tweetIds: Array<string>;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve an X user profile by screen name. */
    "twitterapi_io.get_user": {
      input: {
        /**
         * The X screen name without the @ prefix.
         * @minLength 1
         */
        userName: string;
      };
      output: {
        /** A twitterapi.io user object. */
        data?: {
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        };
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve the X About profile information for a screen name. */
    "twitterapi_io.get_user_about": {
      input: {
        /**
         * The X screen name without the @ prefix.
         * @minLength 1
         */
        userName: string;
      };
      output: {
        /** Additional upstream fields returned by twitterapi.io. */
        data?: Record<string, unknown>;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve follower IDs for a user by user ID or screen name. */
    "twitterapi_io.get_user_follower_ids": {
      input: {
        /**
         * The X screen name without the @ prefix.
         * @minLength 1
         */
        userName?: string;
        /**
         * The numeric X user ID, passed as a string to preserve precision.
         * @minLength 1
         */
        userId?: string;
        /**
         * The number of follower IDs to return per page.
         * @minimum 50
         * @maximum 5000
         */
        count?: number;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The follower IDs returned by the endpoint. */
        ids?: Array<string>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream status code. */
        code?: number;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve followers for a user by screen name. */
    "twitterapi_io.get_user_followers": {
      input: {
        /**
         * The X screen name without the @ prefix.
         * @minLength 1
         */
        userName: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
        /**
         * The number of users to return per page.
         * @minimum 20
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /** The follower users returned by the endpoint. */
        followers?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve users followed by a screen name. */
    "twitterapi_io.get_user_followings": {
      input: {
        /**
         * The X screen name without the @ prefix.
         * @minLength 1
         */
        userName: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
        /**
         * The number of users to return per page.
         * @minimum 20
         * @maximum 200
         */
        pageSize?: number;
      };
      output: {
        /** The followed users returned by the endpoint. */
        followings?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve the latest Tweets from a user by user ID or screen name. */
    "twitterapi_io.get_user_last_tweets": {
      input: {
        /**
         * The numeric X user ID, passed as a string to preserve precision.
         * @minLength 1
         */
        userId?: string;
        /**
         * The X screen name without the @ prefix.
         * @minLength 1
         */
        userName?: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
        /** Whether to include replies in the returned tweets. */
        includeReplies?: boolean;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve Tweets mentioning a user. */
    "twitterapi_io.get_user_mentions": {
      input: {
        /**
         * The X screen name without the @ prefix.
         * @minLength 1
         */
        userName: string;
        /** A Unix timestamp in seconds. */
        sinceTime?: number;
        /** A Unix timestamp in seconds. */
        untilTime?: number;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve a user's profile timeline by user ID. */
    "twitterapi_io.get_user_timeline": {
      input: {
        /**
         * The numeric X user ID, passed as a string to preserve precision.
         * @minLength 1
         */
        userId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
        /** Whether to include replies in the returned tweets. */
        includeReplies?: boolean;
        /** Whether to include the parent Tweet when a Tweet is a reply. */
        includeParentTweet?: boolean;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Retrieve verified followers for a user by user ID. */
    "twitterapi_io.get_user_verified_followers": {
      input: {
        /**
         * The numeric X user ID, passed as a string to preserve precision.
         * @minLength 1
         */
        userId: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The follower users returned by the endpoint. */
        followers?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** List X users monitored for real-time Tweets. */
    "twitterapi_io.list_monitored_tweet_users": {
      input: Record<string, never>;
      output: {
        /** The monitored user entries. */
        data?: Array<{
          /** The monitor entry ID used to remove the user. */
          id_for_user?: string;
          /** The numeric X user ID. */
          x_user_id?: number;
          /** The X user display name. */
          x_user_name?: string;
          /** The X screen name. */
          x_user_screen_name?: string;
          /** Whether Tweet monitoring is enabled for the user. */
          is_monitor_tweet?: number;
          /** Whether profile monitoring is enabled for the user. */
          is_monitor_profile?: number;
          /** The Tweet monitoring configuration status. */
          monitor_tweet_config_status?: number;
          /** The profile monitoring configuration status. */
          monitor_profile_config_status?: number;
          /** The upstream timestamp when the monitor entry was created. */
          created_at?: string;
        }>;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** List Webhook/WebSocket tweet filter rules configured for the API key. */
    "twitterapi_io.list_tweet_filter_rules": {
      input: Record<string, never>;
      output: {
        /** The configured tweet filter rules. */
        rules?: Array<{
          /** The tweet filter rule ID. */
          rule_id?: string;
          /** The custom tag identifying the rule. */
          tag?: string;
          /** The Twitter search rule used to filter Tweets. */
          value?: string;
          /** The interval, in seconds, used to check matching Tweets. */
          interval_seconds?: number;
        }>;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Remove an X user from real-time Tweet monitoring. */
    "twitterapi_io.remove_monitored_tweet_user": {
      input: {
        /**
         * The twitterapi.io monitor entry ID returned by list_monitored_tweet_users.
         * @minLength 1
         */
        idForUser: string;
      };
      output: {
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Search Tweets from all X Communities by keyword. */
    "twitterapi_io.search_all_community_tweets": {
      input: {
        /**
         * The keyword to search for.
         * @minLength 1
         */
        query: string;
        /** The search result ordering. */
        queryType: "Latest" | "Top";
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The Tweets returned by the endpoint. */
        tweets?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the Tweet. */
          id?: string;
          /** The x.com URL of the Tweet. */
          url?: string;
          /** The text content of the Tweet. */
          text?: string;
          /** The client or source that posted the Tweet. */
          source?: string;
          /** The number of retweets. */
          retweetCount?: number;
          /** The number of replies. */
          replyCount?: number;
          /** The number of likes. */
          likeCount?: number;
          /** The number of quotes. */
          quoteCount?: number;
          /** The number of views. */
          viewCount?: number;
          /** The number of bookmarks. */
          bookmarkCount?: number;
          /** The upstream Tweet creation timestamp. */
          createdAt?: string;
          /** The language code of the Tweet. */
          lang?: string;
          /** Whether the Tweet is a reply. */
          isReply?: boolean;
          /** The Tweet ID being replied to. */
          inReplyToId?: string;
          /** The conversation ID. */
          conversationId?: string;
          /** The user ID being replied to. */
          inReplyToUserId?: string;
          /** The screen name being replied to. */
          inReplyToUsername?: string;
          /** A twitterapi.io user object. */
          author?: {
            /** The upstream object type. */
            type?: string;
            /** The unique identifier of the user. */
            id?: string;
            /** The X screen name of the user. */
            userName?: string;
            /** The display name of the user. */
            name?: string;
            /** The x.com profile URL. */
            url?: string;
            /** The user's profile description. */
            description?: string;
            /** The user's self-declared location. */
            location?: string;
            /** The URL of the user's profile image. */
            profilePicture?: string;
            /** The URL of the user's cover image. */
            coverPicture?: string;
            /** The number of followers. */
            followers?: number;
            /** The number of accounts followed by the user. */
            following?: number;
            /** Whether the user has X Blue verification. */
            isBlueVerified?: boolean;
            /** The verification type, when present. */
            verifiedType?: string;
            /** Whether the user can receive direct messages. */
            canDm?: boolean;
            /** The upstream account creation timestamp. */
            createdAt?: string;
            /** The number of favorites. */
            favouritesCount?: number;
            /** The number of media posts. */
            mediaCount?: number;
            /** The number of status updates. */
            statusesCount?: number;
            /** Whether the account is unavailable. */
            unavailable?: boolean;
            /** The reason the account is unavailable. */
            unavailableReason?: string;
            [key: string]: unknown;
          };
          /** Additional upstream fields returned by twitterapi.io. */
          entities?: Record<string, unknown>;
          /** Additional upstream fields returned by twitterapi.io. */
          quoted_tweet?: Record<string, unknown> | null;
          /** Additional upstream fields returned by twitterapi.io. */
          retweeted_tweet?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Search X users by keyword. */
    "twitterapi_io.search_users": {
      input: {
        /**
         * The keyword to search for.
         * @minLength 1
         */
        query: string;
        /** The pagination cursor. Use an empty string or omit it for the first page. */
        cursor?: string;
      };
      output: {
        /** The users returned by the endpoint. */
        users?: Array<{
          /** The upstream object type. */
          type?: string;
          /** The unique identifier of the user. */
          id?: string;
          /** The X screen name of the user. */
          userName?: string;
          /** The display name of the user. */
          name?: string;
          /** The x.com profile URL. */
          url?: string;
          /** The user's profile description. */
          description?: string;
          /** The user's self-declared location. */
          location?: string;
          /** The URL of the user's profile image. */
          profilePicture?: string;
          /** The URL of the user's cover image. */
          coverPicture?: string;
          /** The number of followers. */
          followers?: number;
          /** The number of accounts followed by the user. */
          following?: number;
          /** Whether the user has X Blue verification. */
          isBlueVerified?: boolean;
          /** The verification type, when present. */
          verifiedType?: string;
          /** Whether the user can receive direct messages. */
          canDm?: boolean;
          /** The upstream account creation timestamp. */
          createdAt?: string;
          /** The number of favorites. */
          favouritesCount?: number;
          /** The number of media posts. */
          mediaCount?: number;
          /** The number of status updates. */
          statusesCount?: number;
          /** Whether the account is unavailable. */
          unavailable?: boolean;
          /** The reason the account is unavailable. */
          unavailableReason?: string;
          [key: string]: unknown;
        }>;
        /** Whether another page is available. */
        has_next_page?: boolean;
        /** The cursor to pass to the next request. */
        next_cursor?: string;
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
    /** Update a Webhook/WebSocket tweet filter rule. */
    "twitterapi_io.update_tweet_filter_rule": {
      input: {
        /**
         * The twitterapi.io tweet filter rule ID.
         * @minLength 1
         */
        ruleId: string;
        /**
         * A custom tag that identifies the tweet filter rule.
         * @minLength 1
         * @maxLength 255
         */
        tag: string;
        /**
         * The Twitter search rule used to filter Tweets.
         * @minLength 1
         * @maxLength 255
         */
        value: string;
        /**
         * The interval, in seconds, used to check matching Tweets.
         * @minimum 0.05
         * @maximum 86400
         */
        intervalSeconds: number;
        /**
         * Whether the rule is effective. Use 1 for effective and 0 for inactive.
         * @minimum 0
         * @maximum 1
         */
        isEffect?: number;
      };
      output: {
        /** The upstream request status. */
        status?: string;
        /** The upstream status or error message. */
        message?: string;
        /** The upstream status or error message. */
        msg?: string;
      };
    };
  }
}
