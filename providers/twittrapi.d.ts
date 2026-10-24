import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** List posts shared in an X Community. */
    "twittrapi.get_community_tweets": {
      input: {
        /**
         * Numeric community ID, the number in the community URL.
         * @pattern ^[0-9]+$
         */
        communityId: string;
        /**
         * How many items to request per page. X treats this as a hint, so a page can hold more or fewer items.
         * @minimum 1
         */
        count?: number;
        /**
         * nextCursor from the previous page. Omit it to start at the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Posts on this page. */
        tweets?: Array<{
          /** Numeric ID of the post. */
          id?: string;
          /** Link to the post on x.com. */
          url?: string;
          /** Full text with t.co links replaced by their targets. */
          text?: string;
          /** When the post was published. */
          createdAt?: string | null;
          /** Language code detected by X. */
          lang?: string | null;
          /** An X account in TwittrAPI's simple format. */
          author?: {
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            /** Display name. */
            name?: string;
            /** Profile bio with links expanded. */
            description?: string;
            /** Self-reported location, empty when not set. */
            location?: string;
            /** Website from the profile, expanded. */
            url?: string | null;
            /** When the account was created. */
            createdAt?: string | null;
            /** Profile picture URL. */
            avatarUrl?: string | null;
            /** Header image URL. */
            bannerUrl?: string | null;
            /** Whether the account has a blue check. */
            verified?: boolean;
            /** Organization verification type, such as Business or Government. */
            verifiedType?: string | null;
            /** Whether the account's posts are private. */
            protected?: boolean;
            /** Profile counters. */
            counts?: {
              /** Accounts following this user. */
              followers?: number;
              /** Accounts this user follows. */
              following?: number;
              /** Posts published by this user, replies included. */
              tweets?: number;
              /** Posts this user has liked. */
              likes?: number;
              /** Posts with photos or videos. */
              media?: number;
              /** Public lists that include this user. */
              listed?: number;
              [key: string]: unknown;
            };
            /** IDs of the posts pinned to the profile. */
            pinnedTweetIds?: Array<string>;
            /** Whether the account is labelled as automated. */
            isAutomated?: boolean;
            [key: string]: unknown;
          } | null;
          /** Engagement counters. */
          counts?: {
            /** Like count. */
            likes?: number;
            /** Repost count. */
            retweets?: number;
            /** Reply count. */
            replies?: number;
            /** Quote count. */
            quotes?: number;
            /** Bookmark count. */
            bookmarks?: number;
            /** View count, when X reports one. */
            views?: number | null;
            [key: string]: unknown;
          };
          /** Attached photos, videos, and GIFs. */
          media?: Array<{
            /** Media kind, such as photo, video, or animated_gif. */
            type?: string;
            /** Image URL for photos; the highest-bitrate MP4 for videos and GIFs. */
            url?: string;
            /** Still image, the poster frame for videos. */
            previewUrl?: string;
            /** Width in pixels. */
            width?: number;
            /** Height in pixels. */
            height?: number;
            /** Alt text written by the author. */
            altText?: string | null;
            /** Video length in milliseconds. */
            durationMs?: number | null;
            [key: string]: unknown;
          }>;
          /** Expanded links found in the text. */
          urls?: Array<string>;
          /** Hashtags without the #. */
          hashtags?: Array<string>;
          /** Accounts mentioned in the text. */
          mentions?: Array<{
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            [key: string]: unknown;
          }>;
          /** The post this one replies to. */
          replyTo?: {
            /** ID of the parent post. */
            tweetId?: string;
            /** User ID of the parent post's author. */
            userId?: string;
            /** Handle of the parent post's author. */
            username?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          quoted?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          retweetOf?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** ID of the first post in the conversation. */
          conversationId?: string | null;
          /** Whether this is the pinned post on a profile timeline. */
          isPinned?: boolean;
          /** Client the post was published from. */
          source?: string | null;
          /** Long-form article attached to the post. */
          article?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** List recent posts from the members of an X list, newest first. */
    "twittrapi.get_list_tweets": {
      input: {
        /**
         * Numeric list ID, the number in an x.com/i/lists/<listId> URL.
         * @pattern ^[0-9]+$
         */
        listId: string;
        /**
         * How many items to request per page. X treats this as a hint, so a page can hold more or fewer items.
         * @minimum 1
         */
        count?: number;
        /**
         * nextCursor from the previous page. Omit it to start at the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Posts on this page. */
        tweets?: Array<{
          /** Numeric ID of the post. */
          id?: string;
          /** Link to the post on x.com. */
          url?: string;
          /** Full text with t.co links replaced by their targets. */
          text?: string;
          /** When the post was published. */
          createdAt?: string | null;
          /** Language code detected by X. */
          lang?: string | null;
          /** An X account in TwittrAPI's simple format. */
          author?: {
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            /** Display name. */
            name?: string;
            /** Profile bio with links expanded. */
            description?: string;
            /** Self-reported location, empty when not set. */
            location?: string;
            /** Website from the profile, expanded. */
            url?: string | null;
            /** When the account was created. */
            createdAt?: string | null;
            /** Profile picture URL. */
            avatarUrl?: string | null;
            /** Header image URL. */
            bannerUrl?: string | null;
            /** Whether the account has a blue check. */
            verified?: boolean;
            /** Organization verification type, such as Business or Government. */
            verifiedType?: string | null;
            /** Whether the account's posts are private. */
            protected?: boolean;
            /** Profile counters. */
            counts?: {
              /** Accounts following this user. */
              followers?: number;
              /** Accounts this user follows. */
              following?: number;
              /** Posts published by this user, replies included. */
              tweets?: number;
              /** Posts this user has liked. */
              likes?: number;
              /** Posts with photos or videos. */
              media?: number;
              /** Public lists that include this user. */
              listed?: number;
              [key: string]: unknown;
            };
            /** IDs of the posts pinned to the profile. */
            pinnedTweetIds?: Array<string>;
            /** Whether the account is labelled as automated. */
            isAutomated?: boolean;
            [key: string]: unknown;
          } | null;
          /** Engagement counters. */
          counts?: {
            /** Like count. */
            likes?: number;
            /** Repost count. */
            retweets?: number;
            /** Reply count. */
            replies?: number;
            /** Quote count. */
            quotes?: number;
            /** Bookmark count. */
            bookmarks?: number;
            /** View count, when X reports one. */
            views?: number | null;
            [key: string]: unknown;
          };
          /** Attached photos, videos, and GIFs. */
          media?: Array<{
            /** Media kind, such as photo, video, or animated_gif. */
            type?: string;
            /** Image URL for photos; the highest-bitrate MP4 for videos and GIFs. */
            url?: string;
            /** Still image, the poster frame for videos. */
            previewUrl?: string;
            /** Width in pixels. */
            width?: number;
            /** Height in pixels. */
            height?: number;
            /** Alt text written by the author. */
            altText?: string | null;
            /** Video length in milliseconds. */
            durationMs?: number | null;
            [key: string]: unknown;
          }>;
          /** Expanded links found in the text. */
          urls?: Array<string>;
          /** Hashtags without the #. */
          hashtags?: Array<string>;
          /** Accounts mentioned in the text. */
          mentions?: Array<{
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            [key: string]: unknown;
          }>;
          /** The post this one replies to. */
          replyTo?: {
            /** ID of the parent post. */
            tweetId?: string;
            /** User ID of the parent post's author. */
            userId?: string;
            /** Handle of the parent post's author. */
            username?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          quoted?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          retweetOf?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** ID of the first post in the conversation. */
          conversationId?: string | null;
          /** Whether this is the pinned post on a profile timeline. */
          isPinned?: boolean;
          /** Client the post was published from. */
          source?: string | null;
          /** Long-form article attached to the post. */
          article?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** Get the current trending topics on X for a place, identified by its Yahoo WOEID. */
    "twittrapi.get_trends": {
      input: {
        /**
         * Yahoo Where On Earth ID. Use 1 for worldwide or 23424977 for the United States.
         * @pattern ^[0-9]{1,12}$
         * @default "1"
         */
        woeid?: string;
      };
      output: {
        /** Trending topics. */
        trends?: Array<{
          /** Topic as shown on X. */
          name?: string;
          /** Search query that opens the topic, URL-decoded. */
          query?: string;
          /** Link to the topic's search results on X. */
          url?: string;
          /** Approximate post volume, when X reports one. */
          tweetVolume?: number | null;
          [key: string]: unknown;
        }>;
      };
    };
    /** Get one X post by ID with its author, media, and engagement counts, without the reply thread. */
    "twittrapi.get_tweet": {
      input: {
        /**
         * Numeric ID of the post, the last segment of its x.com URL.
         * @pattern ^[0-9]{1,30}$
         */
        tweetId: string;
      };
      output: {
        /** The post, an `{ id, unavailable: true }` stub when X hides it, or null when X returns nothing for the ID. */
        tweet?: {
          /** Numeric ID of the post. */
          id?: string;
          /** Present and true when X did not return the post. */
          unavailable?: boolean;
          [key: string]: unknown;
        } | null;
      };
    };
    /** Get the conversation around an X post: the posts it replies to, the post itself, then its replies, one page at a time. */
    "twittrapi.get_tweet_conversation": {
      input: {
        /**
         * Numeric ID of the post, the last segment of its x.com URL.
         * @pattern ^[0-9]{1,30}$
         */
        tweetId: string;
        /**
         * How X orders the replies.
         * @default "Relevance"
         */
        rankingMode?: "Relevance" | "Recency" | "Likes";
        /**
         * nextCursor from the previous page. Omit it to start at the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Posts on this page. */
        tweets?: Array<{
          /** Numeric ID of the post. */
          id?: string;
          /** Link to the post on x.com. */
          url?: string;
          /** Full text with t.co links replaced by their targets. */
          text?: string;
          /** When the post was published. */
          createdAt?: string | null;
          /** Language code detected by X. */
          lang?: string | null;
          /** An X account in TwittrAPI's simple format. */
          author?: {
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            /** Display name. */
            name?: string;
            /** Profile bio with links expanded. */
            description?: string;
            /** Self-reported location, empty when not set. */
            location?: string;
            /** Website from the profile, expanded. */
            url?: string | null;
            /** When the account was created. */
            createdAt?: string | null;
            /** Profile picture URL. */
            avatarUrl?: string | null;
            /** Header image URL. */
            bannerUrl?: string | null;
            /** Whether the account has a blue check. */
            verified?: boolean;
            /** Organization verification type, such as Business or Government. */
            verifiedType?: string | null;
            /** Whether the account's posts are private. */
            protected?: boolean;
            /** Profile counters. */
            counts?: {
              /** Accounts following this user. */
              followers?: number;
              /** Accounts this user follows. */
              following?: number;
              /** Posts published by this user, replies included. */
              tweets?: number;
              /** Posts this user has liked. */
              likes?: number;
              /** Posts with photos or videos. */
              media?: number;
              /** Public lists that include this user. */
              listed?: number;
              [key: string]: unknown;
            };
            /** IDs of the posts pinned to the profile. */
            pinnedTweetIds?: Array<string>;
            /** Whether the account is labelled as automated. */
            isAutomated?: boolean;
            [key: string]: unknown;
          } | null;
          /** Engagement counters. */
          counts?: {
            /** Like count. */
            likes?: number;
            /** Repost count. */
            retweets?: number;
            /** Reply count. */
            replies?: number;
            /** Quote count. */
            quotes?: number;
            /** Bookmark count. */
            bookmarks?: number;
            /** View count, when X reports one. */
            views?: number | null;
            [key: string]: unknown;
          };
          /** Attached photos, videos, and GIFs. */
          media?: Array<{
            /** Media kind, such as photo, video, or animated_gif. */
            type?: string;
            /** Image URL for photos; the highest-bitrate MP4 for videos and GIFs. */
            url?: string;
            /** Still image, the poster frame for videos. */
            previewUrl?: string;
            /** Width in pixels. */
            width?: number;
            /** Height in pixels. */
            height?: number;
            /** Alt text written by the author. */
            altText?: string | null;
            /** Video length in milliseconds. */
            durationMs?: number | null;
            [key: string]: unknown;
          }>;
          /** Expanded links found in the text. */
          urls?: Array<string>;
          /** Hashtags without the #. */
          hashtags?: Array<string>;
          /** Accounts mentioned in the text. */
          mentions?: Array<{
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            [key: string]: unknown;
          }>;
          /** The post this one replies to. */
          replyTo?: {
            /** ID of the parent post. */
            tweetId?: string;
            /** User ID of the parent post's author. */
            userId?: string;
            /** Handle of the parent post's author. */
            username?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          quoted?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          retweetOf?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** ID of the first post in the conversation. */
          conversationId?: string | null;
          /** Whether this is the pinned post on a profile timeline. */
          isPinned?: boolean;
          /** Client the post was published from. */
          source?: string | null;
          /** Long-form article attached to the post. */
          article?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** List posts that quote a given X post. */
    "twittrapi.get_tweet_quotes": {
      input: {
        /**
         * Numeric ID of the post, the last segment of its x.com URL.
         * @pattern ^[0-9]{1,30}$
         */
        tweetId: string;
        /**
         * How many items to request per page. X treats this as a hint, so a page can hold more or fewer items.
         * @minimum 1
         */
        count?: number;
        /**
         * nextCursor from the previous page. Omit it to start at the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Posts on this page. */
        tweets?: Array<{
          /** Numeric ID of the post. */
          id?: string;
          /** Link to the post on x.com. */
          url?: string;
          /** Full text with t.co links replaced by their targets. */
          text?: string;
          /** When the post was published. */
          createdAt?: string | null;
          /** Language code detected by X. */
          lang?: string | null;
          /** An X account in TwittrAPI's simple format. */
          author?: {
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            /** Display name. */
            name?: string;
            /** Profile bio with links expanded. */
            description?: string;
            /** Self-reported location, empty when not set. */
            location?: string;
            /** Website from the profile, expanded. */
            url?: string | null;
            /** When the account was created. */
            createdAt?: string | null;
            /** Profile picture URL. */
            avatarUrl?: string | null;
            /** Header image URL. */
            bannerUrl?: string | null;
            /** Whether the account has a blue check. */
            verified?: boolean;
            /** Organization verification type, such as Business or Government. */
            verifiedType?: string | null;
            /** Whether the account's posts are private. */
            protected?: boolean;
            /** Profile counters. */
            counts?: {
              /** Accounts following this user. */
              followers?: number;
              /** Accounts this user follows. */
              following?: number;
              /** Posts published by this user, replies included. */
              tweets?: number;
              /** Posts this user has liked. */
              likes?: number;
              /** Posts with photos or videos. */
              media?: number;
              /** Public lists that include this user. */
              listed?: number;
              [key: string]: unknown;
            };
            /** IDs of the posts pinned to the profile. */
            pinnedTweetIds?: Array<string>;
            /** Whether the account is labelled as automated. */
            isAutomated?: boolean;
            [key: string]: unknown;
          } | null;
          /** Engagement counters. */
          counts?: {
            /** Like count. */
            likes?: number;
            /** Repost count. */
            retweets?: number;
            /** Reply count. */
            replies?: number;
            /** Quote count. */
            quotes?: number;
            /** Bookmark count. */
            bookmarks?: number;
            /** View count, when X reports one. */
            views?: number | null;
            [key: string]: unknown;
          };
          /** Attached photos, videos, and GIFs. */
          media?: Array<{
            /** Media kind, such as photo, video, or animated_gif. */
            type?: string;
            /** Image URL for photos; the highest-bitrate MP4 for videos and GIFs. */
            url?: string;
            /** Still image, the poster frame for videos. */
            previewUrl?: string;
            /** Width in pixels. */
            width?: number;
            /** Height in pixels. */
            height?: number;
            /** Alt text written by the author. */
            altText?: string | null;
            /** Video length in milliseconds. */
            durationMs?: number | null;
            [key: string]: unknown;
          }>;
          /** Expanded links found in the text. */
          urls?: Array<string>;
          /** Hashtags without the #. */
          hashtags?: Array<string>;
          /** Accounts mentioned in the text. */
          mentions?: Array<{
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            [key: string]: unknown;
          }>;
          /** The post this one replies to. */
          replyTo?: {
            /** ID of the parent post. */
            tweetId?: string;
            /** User ID of the parent post's author. */
            userId?: string;
            /** Handle of the parent post's author. */
            username?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          quoted?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          retweetOf?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** ID of the first post in the conversation. */
          conversationId?: string | null;
          /** Whether this is the pinned post on a profile timeline. */
          isPinned?: boolean;
          /** Client the post was published from. */
          source?: string | null;
          /** Long-form article attached to the post. */
          article?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** List accounts that reposted a given X post. */
    "twittrapi.get_tweet_retweeters": {
      input: {
        /**
         * Numeric ID of the post, the last segment of its x.com URL.
         * @pattern ^[0-9]{1,30}$
         */
        tweetId: string;
        /**
         * How many items to request per page. X treats this as a hint, so a page can hold more or fewer items.
         * @minimum 1
         */
        count?: number;
        /**
         * nextCursor from the previous page. Omit it to start at the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Accounts on this page. */
        users?: Array<{
          /** Numeric X user ID. */
          id?: string;
          /** Handle without the @. */
          username?: string;
          /** Display name. */
          name?: string;
          /** Profile bio with links expanded. */
          description?: string;
          /** Self-reported location, empty when not set. */
          location?: string;
          /** Website from the profile, expanded. */
          url?: string | null;
          /** When the account was created. */
          createdAt?: string | null;
          /** Profile picture URL. */
          avatarUrl?: string | null;
          /** Header image URL. */
          bannerUrl?: string | null;
          /** Whether the account has a blue check. */
          verified?: boolean;
          /** Organization verification type, such as Business or Government. */
          verifiedType?: string | null;
          /** Whether the account's posts are private. */
          protected?: boolean;
          /** Profile counters. */
          counts?: {
            /** Accounts following this user. */
            followers?: number;
            /** Accounts this user follows. */
            following?: number;
            /** Posts published by this user, replies included. */
            tweets?: number;
            /** Posts this user has liked. */
            likes?: number;
            /** Posts with photos or videos. */
            media?: number;
            /** Public lists that include this user. */
            listed?: number;
            [key: string]: unknown;
          };
          /** IDs of the posts pinned to the profile. */
          pinnedTweetIds?: Array<string>;
          /** Whether the account is labelled as automated. */
          isAutomated?: boolean;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** Get an X profile by numeric user ID or by handle, including follower and post counts. */
    "twittrapi.get_user": {
      input: Record<string, unknown>;
      output: {
        /** The profile, or null when no account has this handle. */
        user?: {
          /** Numeric X user ID. */
          id?: string;
          /** Handle without the @. */
          username?: string;
          /** Display name. */
          name?: string;
          /** Profile bio with links expanded. */
          description?: string;
          /** Self-reported location, empty when not set. */
          location?: string;
          /** Website from the profile, expanded. */
          url?: string | null;
          /** When the account was created. */
          createdAt?: string | null;
          /** Profile picture URL. */
          avatarUrl?: string | null;
          /** Header image URL. */
          bannerUrl?: string | null;
          /** Whether the account has a blue check. */
          verified?: boolean;
          /** Organization verification type, such as Business or Government. */
          verifiedType?: string | null;
          /** Whether the account's posts are private. */
          protected?: boolean;
          /** Profile counters. */
          counts?: {
            /** Accounts following this user. */
            followers?: number;
            /** Accounts this user follows. */
            following?: number;
            /** Posts published by this user, replies included. */
            tweets?: number;
            /** Posts this user has liked. */
            likes?: number;
            /** Posts with photos or videos. */
            media?: number;
            /** Public lists that include this user. */
            listed?: number;
            [key: string]: unknown;
          };
          /** IDs of the posts pinned to the profile. */
          pinnedTweetIds?: Array<string>;
          /** Whether the account is labelled as automated. */
          isAutomated?: boolean;
          [key: string]: unknown;
        } | null;
      };
    };
    /** List accounts that follow an X profile. */
    "twittrapi.get_user_followers": {
      input: Record<string, unknown>;
      output: {
        /** Accounts on this page. */
        users?: Array<{
          /** Numeric X user ID. */
          id?: string;
          /** Handle without the @. */
          username?: string;
          /** Display name. */
          name?: string;
          /** Profile bio with links expanded. */
          description?: string;
          /** Self-reported location, empty when not set. */
          location?: string;
          /** Website from the profile, expanded. */
          url?: string | null;
          /** When the account was created. */
          createdAt?: string | null;
          /** Profile picture URL. */
          avatarUrl?: string | null;
          /** Header image URL. */
          bannerUrl?: string | null;
          /** Whether the account has a blue check. */
          verified?: boolean;
          /** Organization verification type, such as Business or Government. */
          verifiedType?: string | null;
          /** Whether the account's posts are private. */
          protected?: boolean;
          /** Profile counters. */
          counts?: {
            /** Accounts following this user. */
            followers?: number;
            /** Accounts this user follows. */
            following?: number;
            /** Posts published by this user, replies included. */
            tweets?: number;
            /** Posts this user has liked. */
            likes?: number;
            /** Posts with photos or videos. */
            media?: number;
            /** Public lists that include this user. */
            listed?: number;
            [key: string]: unknown;
          };
          /** IDs of the posts pinned to the profile. */
          pinnedTweetIds?: Array<string>;
          /** Whether the account is labelled as automated. */
          isAutomated?: boolean;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** List accounts that an X profile follows. */
    "twittrapi.get_user_following": {
      input: Record<string, unknown>;
      output: {
        /** Accounts on this page. */
        users?: Array<{
          /** Numeric X user ID. */
          id?: string;
          /** Handle without the @. */
          username?: string;
          /** Display name. */
          name?: string;
          /** Profile bio with links expanded. */
          description?: string;
          /** Self-reported location, empty when not set. */
          location?: string;
          /** Website from the profile, expanded. */
          url?: string | null;
          /** When the account was created. */
          createdAt?: string | null;
          /** Profile picture URL. */
          avatarUrl?: string | null;
          /** Header image URL. */
          bannerUrl?: string | null;
          /** Whether the account has a blue check. */
          verified?: boolean;
          /** Organization verification type, such as Business or Government. */
          verifiedType?: string | null;
          /** Whether the account's posts are private. */
          protected?: boolean;
          /** Profile counters. */
          counts?: {
            /** Accounts following this user. */
            followers?: number;
            /** Accounts this user follows. */
            following?: number;
            /** Posts published by this user, replies included. */
            tweets?: number;
            /** Posts this user has liked. */
            likes?: number;
            /** Posts with photos or videos. */
            media?: number;
            /** Public lists that include this user. */
            listed?: number;
            [key: string]: unknown;
          };
          /** IDs of the posts pinned to the profile. */
          pinnedTweetIds?: Array<string>;
          /** Whether the account is labelled as automated. */
          isAutomated?: boolean;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** List posts from an X profile timeline, newest first, without replies. A pinned post comes first. */
    "twittrapi.get_user_tweets": {
      input: Record<string, unknown>;
      output: {
        /** Posts on this page. */
        tweets?: Array<{
          /** Numeric ID of the post. */
          id?: string;
          /** Link to the post on x.com. */
          url?: string;
          /** Full text with t.co links replaced by their targets. */
          text?: string;
          /** When the post was published. */
          createdAt?: string | null;
          /** Language code detected by X. */
          lang?: string | null;
          /** An X account in TwittrAPI's simple format. */
          author?: {
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            /** Display name. */
            name?: string;
            /** Profile bio with links expanded. */
            description?: string;
            /** Self-reported location, empty when not set. */
            location?: string;
            /** Website from the profile, expanded. */
            url?: string | null;
            /** When the account was created. */
            createdAt?: string | null;
            /** Profile picture URL. */
            avatarUrl?: string | null;
            /** Header image URL. */
            bannerUrl?: string | null;
            /** Whether the account has a blue check. */
            verified?: boolean;
            /** Organization verification type, such as Business or Government. */
            verifiedType?: string | null;
            /** Whether the account's posts are private. */
            protected?: boolean;
            /** Profile counters. */
            counts?: {
              /** Accounts following this user. */
              followers?: number;
              /** Accounts this user follows. */
              following?: number;
              /** Posts published by this user, replies included. */
              tweets?: number;
              /** Posts this user has liked. */
              likes?: number;
              /** Posts with photos or videos. */
              media?: number;
              /** Public lists that include this user. */
              listed?: number;
              [key: string]: unknown;
            };
            /** IDs of the posts pinned to the profile. */
            pinnedTweetIds?: Array<string>;
            /** Whether the account is labelled as automated. */
            isAutomated?: boolean;
            [key: string]: unknown;
          } | null;
          /** Engagement counters. */
          counts?: {
            /** Like count. */
            likes?: number;
            /** Repost count. */
            retweets?: number;
            /** Reply count. */
            replies?: number;
            /** Quote count. */
            quotes?: number;
            /** Bookmark count. */
            bookmarks?: number;
            /** View count, when X reports one. */
            views?: number | null;
            [key: string]: unknown;
          };
          /** Attached photos, videos, and GIFs. */
          media?: Array<{
            /** Media kind, such as photo, video, or animated_gif. */
            type?: string;
            /** Image URL for photos; the highest-bitrate MP4 for videos and GIFs. */
            url?: string;
            /** Still image, the poster frame for videos. */
            previewUrl?: string;
            /** Width in pixels. */
            width?: number;
            /** Height in pixels. */
            height?: number;
            /** Alt text written by the author. */
            altText?: string | null;
            /** Video length in milliseconds. */
            durationMs?: number | null;
            [key: string]: unknown;
          }>;
          /** Expanded links found in the text. */
          urls?: Array<string>;
          /** Hashtags without the #. */
          hashtags?: Array<string>;
          /** Accounts mentioned in the text. */
          mentions?: Array<{
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            [key: string]: unknown;
          }>;
          /** The post this one replies to. */
          replyTo?: {
            /** ID of the parent post. */
            tweetId?: string;
            /** User ID of the parent post's author. */
            userId?: string;
            /** Handle of the parent post's author. */
            username?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          quoted?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          retweetOf?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** ID of the first post in the conversation. */
          conversationId?: string | null;
          /** Whether this is the pinned post on a profile timeline. */
          isPinned?: boolean;
          /** Client the post was published from. */
          source?: string | null;
          /** Long-form article attached to the post. */
          article?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** List posts and replies from an X profile, newest first. */
    "twittrapi.get_user_tweets_and_replies": {
      input: Record<string, unknown>;
      output: {
        /** Posts on this page. */
        tweets?: Array<{
          /** Numeric ID of the post. */
          id?: string;
          /** Link to the post on x.com. */
          url?: string;
          /** Full text with t.co links replaced by their targets. */
          text?: string;
          /** When the post was published. */
          createdAt?: string | null;
          /** Language code detected by X. */
          lang?: string | null;
          /** An X account in TwittrAPI's simple format. */
          author?: {
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            /** Display name. */
            name?: string;
            /** Profile bio with links expanded. */
            description?: string;
            /** Self-reported location, empty when not set. */
            location?: string;
            /** Website from the profile, expanded. */
            url?: string | null;
            /** When the account was created. */
            createdAt?: string | null;
            /** Profile picture URL. */
            avatarUrl?: string | null;
            /** Header image URL. */
            bannerUrl?: string | null;
            /** Whether the account has a blue check. */
            verified?: boolean;
            /** Organization verification type, such as Business or Government. */
            verifiedType?: string | null;
            /** Whether the account's posts are private. */
            protected?: boolean;
            /** Profile counters. */
            counts?: {
              /** Accounts following this user. */
              followers?: number;
              /** Accounts this user follows. */
              following?: number;
              /** Posts published by this user, replies included. */
              tweets?: number;
              /** Posts this user has liked. */
              likes?: number;
              /** Posts with photos or videos. */
              media?: number;
              /** Public lists that include this user. */
              listed?: number;
              [key: string]: unknown;
            };
            /** IDs of the posts pinned to the profile. */
            pinnedTweetIds?: Array<string>;
            /** Whether the account is labelled as automated. */
            isAutomated?: boolean;
            [key: string]: unknown;
          } | null;
          /** Engagement counters. */
          counts?: {
            /** Like count. */
            likes?: number;
            /** Repost count. */
            retweets?: number;
            /** Reply count. */
            replies?: number;
            /** Quote count. */
            quotes?: number;
            /** Bookmark count. */
            bookmarks?: number;
            /** View count, when X reports one. */
            views?: number | null;
            [key: string]: unknown;
          };
          /** Attached photos, videos, and GIFs. */
          media?: Array<{
            /** Media kind, such as photo, video, or animated_gif. */
            type?: string;
            /** Image URL for photos; the highest-bitrate MP4 for videos and GIFs. */
            url?: string;
            /** Still image, the poster frame for videos. */
            previewUrl?: string;
            /** Width in pixels. */
            width?: number;
            /** Height in pixels. */
            height?: number;
            /** Alt text written by the author. */
            altText?: string | null;
            /** Video length in milliseconds. */
            durationMs?: number | null;
            [key: string]: unknown;
          }>;
          /** Expanded links found in the text. */
          urls?: Array<string>;
          /** Hashtags without the #. */
          hashtags?: Array<string>;
          /** Accounts mentioned in the text. */
          mentions?: Array<{
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            [key: string]: unknown;
          }>;
          /** The post this one replies to. */
          replyTo?: {
            /** ID of the parent post. */
            tweetId?: string;
            /** User ID of the parent post's author. */
            userId?: string;
            /** Handle of the parent post's author. */
            username?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          quoted?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          retweetOf?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** ID of the first post in the conversation. */
          conversationId?: string | null;
          /** Whether this is the pinned post on a profile timeline. */
          isPinned?: boolean;
          /** Client the post was published from. */
          source?: string | null;
          /** Long-form article attached to the post. */
          article?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** Get up to 500 X profiles in one call by numeric user ID. */
    "twittrapi.get_users_by_ids": {
      input: {
        /**
         * Numeric X user IDs.
         * @minItems 1
         * @maxItems 500
         */
        userIds: Array<string>;
      };
      output: {
        /** Profiles in simple format. */
        users?: Array<{
          /** Numeric X user ID. */
          id?: string;
          /** Handle without the @. */
          username?: string;
          /** Display name. */
          name?: string;
          /** Profile bio with links expanded. */
          description?: string;
          /** Self-reported location, empty when not set. */
          location?: string;
          /** Website from the profile, expanded. */
          url?: string | null;
          /** When the account was created. */
          createdAt?: string | null;
          /** Profile picture URL. */
          avatarUrl?: string | null;
          /** Header image URL. */
          bannerUrl?: string | null;
          /** Whether the account has a blue check. */
          verified?: boolean;
          /** Organization verification type, such as Business or Government. */
          verifiedType?: string | null;
          /** Whether the account's posts are private. */
          protected?: boolean;
          /** Profile counters. */
          counts?: {
            /** Accounts following this user. */
            followers?: number;
            /** Accounts this user follows. */
            following?: number;
            /** Posts published by this user, replies included. */
            tweets?: number;
            /** Posts this user has liked. */
            likes?: number;
            /** Posts with photos or videos. */
            media?: number;
            /** Public lists that include this user. */
            listed?: number;
            [key: string]: unknown;
          };
          /** IDs of the posts pinned to the profile. */
          pinnedTweetIds?: Array<string>;
          /** Whether the account is labelled as automated. */
          isAutomated?: boolean;
          [key: string]: unknown;
        }>;
      };
    };
    /** Search X posts with the same query syntax as the X search box, including operators such as from:, lang:, and since:. */
    "twittrapi.search_tweets": {
      input: {
        /**
         * Search query, for example `from:nasa lang:en` or `"open source" -is:retweet`.
         * @minLength 1
         * @maxLength 512
         */
        query: string;
        /**
         * Which X search tab to read.
         * @default "Top"
         */
        category?: "Top" | "Latest" | "Photos" | "Videos";
        /**
         * How many items to request per page. X treats this as a hint, so a page can hold more or fewer items.
         * @minimum 1
         */
        count?: number;
        /**
         * nextCursor from the previous page. Omit it to start at the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Posts on this page. */
        tweets?: Array<{
          /** Numeric ID of the post. */
          id?: string;
          /** Link to the post on x.com. */
          url?: string;
          /** Full text with t.co links replaced by their targets. */
          text?: string;
          /** When the post was published. */
          createdAt?: string | null;
          /** Language code detected by X. */
          lang?: string | null;
          /** An X account in TwittrAPI's simple format. */
          author?: {
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            /** Display name. */
            name?: string;
            /** Profile bio with links expanded. */
            description?: string;
            /** Self-reported location, empty when not set. */
            location?: string;
            /** Website from the profile, expanded. */
            url?: string | null;
            /** When the account was created. */
            createdAt?: string | null;
            /** Profile picture URL. */
            avatarUrl?: string | null;
            /** Header image URL. */
            bannerUrl?: string | null;
            /** Whether the account has a blue check. */
            verified?: boolean;
            /** Organization verification type, such as Business or Government. */
            verifiedType?: string | null;
            /** Whether the account's posts are private. */
            protected?: boolean;
            /** Profile counters. */
            counts?: {
              /** Accounts following this user. */
              followers?: number;
              /** Accounts this user follows. */
              following?: number;
              /** Posts published by this user, replies included. */
              tweets?: number;
              /** Posts this user has liked. */
              likes?: number;
              /** Posts with photos or videos. */
              media?: number;
              /** Public lists that include this user. */
              listed?: number;
              [key: string]: unknown;
            };
            /** IDs of the posts pinned to the profile. */
            pinnedTweetIds?: Array<string>;
            /** Whether the account is labelled as automated. */
            isAutomated?: boolean;
            [key: string]: unknown;
          } | null;
          /** Engagement counters. */
          counts?: {
            /** Like count. */
            likes?: number;
            /** Repost count. */
            retweets?: number;
            /** Reply count. */
            replies?: number;
            /** Quote count. */
            quotes?: number;
            /** Bookmark count. */
            bookmarks?: number;
            /** View count, when X reports one. */
            views?: number | null;
            [key: string]: unknown;
          };
          /** Attached photos, videos, and GIFs. */
          media?: Array<{
            /** Media kind, such as photo, video, or animated_gif. */
            type?: string;
            /** Image URL for photos; the highest-bitrate MP4 for videos and GIFs. */
            url?: string;
            /** Still image, the poster frame for videos. */
            previewUrl?: string;
            /** Width in pixels. */
            width?: number;
            /** Height in pixels. */
            height?: number;
            /** Alt text written by the author. */
            altText?: string | null;
            /** Video length in milliseconds. */
            durationMs?: number | null;
            [key: string]: unknown;
          }>;
          /** Expanded links found in the text. */
          urls?: Array<string>;
          /** Hashtags without the #. */
          hashtags?: Array<string>;
          /** Accounts mentioned in the text. */
          mentions?: Array<{
            /** Numeric X user ID. */
            id?: string;
            /** Handle without the @. */
            username?: string;
            [key: string]: unknown;
          }>;
          /** The post this one replies to. */
          replyTo?: {
            /** ID of the parent post. */
            tweetId?: string;
            /** User ID of the parent post's author. */
            userId?: string;
            /** Handle of the parent post's author. */
            username?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          quoted?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** A related post in the same simple format, or a stub when X hides it. */
          retweetOf?: {
            /** Numeric ID of the post. */
            id?: string;
            [key: string]: unknown;
          } | null;
          /** ID of the first post in the conversation. */
          conversationId?: string | null;
          /** Whether this is the pinned post on a profile timeline. */
          isPinned?: boolean;
          /** Client the post was published from. */
          source?: string | null;
          /** Long-form article attached to the post. */
          article?: Record<string, unknown> | null;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
    /** Search X accounts by name, handle, or bio keywords, as on the People tab of X search. */
    "twittrapi.search_users": {
      input: {
        /**
         * Words to match against account names, handles, and bios.
         * @minLength 1
         * @maxLength 512
         */
        query: string;
        /**
         * How many items to request per page. X treats this as a hint, so a page can hold more or fewer items.
         * @minimum 1
         */
        count?: number;
        /**
         * nextCursor from the previous page. Omit it to start at the first page.
         * @minLength 1
         */
        cursor?: string;
      };
      output: {
        /** Accounts on this page. */
        users?: Array<{
          /** Numeric X user ID. */
          id?: string;
          /** Handle without the @. */
          username?: string;
          /** Display name. */
          name?: string;
          /** Profile bio with links expanded. */
          description?: string;
          /** Self-reported location, empty when not set. */
          location?: string;
          /** Website from the profile, expanded. */
          url?: string | null;
          /** When the account was created. */
          createdAt?: string | null;
          /** Profile picture URL. */
          avatarUrl?: string | null;
          /** Header image URL. */
          bannerUrl?: string | null;
          /** Whether the account has a blue check. */
          verified?: boolean;
          /** Organization verification type, such as Business or Government. */
          verifiedType?: string | null;
          /** Whether the account's posts are private. */
          protected?: boolean;
          /** Profile counters. */
          counts?: {
            /** Accounts following this user. */
            followers?: number;
            /** Accounts this user follows. */
            following?: number;
            /** Posts published by this user, replies included. */
            tweets?: number;
            /** Posts this user has liked. */
            likes?: number;
            /** Posts with photos or videos. */
            media?: number;
            /** Public lists that include this user. */
            listed?: number;
            [key: string]: unknown;
          };
          /** IDs of the posts pinned to the profile. */
          pinnedTweetIds?: Array<string>;
          /** Whether the account is labelled as automated. */
          isAutomated?: boolean;
          [key: string]: unknown;
        }>;
        /** Pass as cursor to fetch the next page. Null on the last page. */
        nextCursor?: string | null;
        /** Cursor for newer items at the top of the timeline, useful for polling. */
        previousCursor?: string | null;
        /** Whether another page is available. */
        hasNextPage?: boolean;
      };
    };
  }
}
