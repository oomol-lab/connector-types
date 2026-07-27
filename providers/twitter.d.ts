import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add a user account as a member of an X List. */
    "twitter.add_list_member": {
      input: {
        /**
         * The List ID to update.
         * @minLength 1
         */
        listId: string;
        /**
         * The user ID to add as a List member.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Whether the target user is now a member of the List. */
        isMember: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Add a Tweet to bookmarks for the authenticated user account. */
    "twitter.add_post_to_bookmarks": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The Tweet ID to bookmark.
         * @minLength 1
         */
        tweetId: string;
      };
      output: {
        /** Whether the Tweet is now bookmarked by the authenticated user. */
        bookmarked: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get bookmarked Tweets for a user account. */
    "twitter.bookmarks_by_user": {
      input: {
        /**
         * The user ID whose bookmarks should be read.
         * @minLength 1
         */
        userId: string;
        /**
         * The maximum number of bookmarked Tweets to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Create a compliance job using app-only auth. */
    "twitter.create_compliance_job": {
      input: {
        /** The compliance job target type. */
        type: "tweets" | "users";
        /** The user-defined name of the compliance job. */
        name?: string;
        /** Whether resumable upload should be enabled. */
        resumable?: boolean;
      };
      output: {
        /** The normalized compliance job. */
        job: {
          /** The unique identifier of the compliance job. */
          id: string;
          /** The compliance job target type. */
          type: string;
          /** The current status of the compliance job. */
          status: string;
          /** The user-defined name of the compliance job. */
          name?: string | null;
          /** Whether resumable upload is enabled. */
          resumable?: boolean;
          /** The creation time of the compliance job. */
          createdAt?: string | null;
          /** The pre-signed upload URL for the compliance job. */
          uploadUrl?: string | null;
          /** The pre-signed download URL for the compliance job. */
          downloadUrl?: string | null;
          /** The expiration time of the upload URL. */
          uploadExpiresAt?: string | null;
          /** The expiration time of the download URL. */
          downloadExpiresAt?: string | null;
          /** The raw compliance job object returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The raw compliance job response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a new group Direct Message conversation with an initial message. */
    "twitter.create_dm_conversation": {
      input: {
        /** The Direct Message text content. */
        text?: string;
        /** The uploaded media IDs to attach to the Direct Message. */
        attachmentMediaIds?: Array<string>;
        /** The Direct Message conversation type. */
        conversationType: "Group";
        /** The participant user IDs to include in the group conversation. */
        participantIds: (Array<string>) & (Array<unknown>);
      };
      output: {
        /** The Direct Message conversation identifier. */
        dmConversationId: string;
        /** The initial Direct Message event identifier. */
        dmEventId: string;
        /** The raw Direct Message mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a new X List for the authenticated user account. */
    "twitter.create_list": {
      input: {
        /**
         * The name of the List to create.
         * @minLength 1
         */
        name: string;
        /** The description of the List to create. */
        description?: string;
        /** Whether the List should be private. */
        private?: boolean;
      };
      output: {
        /** The normalized List returned by the X API. */
        list: {
          /** The unique identifier of the List. */
          id: string;
          /** The display name of the List. */
          name: string;
          /** The description of the List. */
          description?: string | null;
          /** Whether the List is private. */
          private?: boolean;
          /** The follower count of the List. */
          followerCount?: number;
          /** The member count of the List. */
          memberCount?: number;
          /** The owner user ID of the List. */
          ownerId?: string | null;
          /** The creation time of the List. */
          createdAt?: string | null;
          /** The raw List object returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The raw List response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Create a Tweet for the authenticated X user. */
    "twitter.creation_of_a_post": {
      input: {
        /** The Tweet text content. Required unless another content source is provided. */
        text?: string;
        /** The card URI to attach to the Tweet. */
        cardUri?: string;
        /** Whether to mark the Tweet as promoted-only nullcast content. */
        nullcast?: boolean;
        /** The place ID to attach to the Tweet. */
        geoPlaceId?: string;
        /** The poll options to create with the Tweet. */
        pollOptions?: Array<string>;
        /** The Tweet ID to quote in the new Tweet. */
        quoteTweetId?: string;
        /** Who can reply to the Tweet. */
        replySettings?: "following" | "mentionedUsers" | "subscribers";
        /** The uploaded media IDs to attach to the Tweet. */
        mediaMediaIds?: Array<string>;
        /** Who can reply to the poll Tweet. */
        pollReplySettings?: string;
        /** The user IDs to tag in the attached media. */
        mediaTaggedUserIds?: Array<string>;
        /** The poll duration in minutes. */
        pollDurationMinutes?: number;
        /** The DM deep link to attach to the Tweet. */
        directMessageDeepLink?: string;
        /** Whether to restrict the Tweet to super followers only. */
        forSuperFollowersOnly?: boolean;
        /** The Tweet ID to reply to. */
        replyInReplyToTweetId?: string;
        /** The user IDs to exclude from reply mentions. */
        replyExcludeReplyUserIds?: Array<string>;
      };
      output: {
        /** The ID of the created Tweet. */
        id: string;
        /** The text content of the created Tweet. */
        text: string;
        /** The edit history Tweet IDs returned by the X API. */
        editHistoryTweetIds?: Array<string>;
        /** The raw create Tweet response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Direct Message event from the authenticated user account. */
    "twitter.delete_dm": {
      input: {
        /**
         * The Direct Message event ID to delete.
         * @minLength 1
         */
        eventId: string;
      };
      output: {
        /** Whether the Direct Message event was deleted. */
        deleted: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a List owned by the authenticated user account. */
    "twitter.delete_list": {
      input: {
        /**
         * The List ID to delete.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the List was deleted. */
        deleted: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Follow an X List from the authenticated user account. */
    "twitter.follow_list": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The List ID to follow.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** Whether the authenticated user now follows the List. */
        following: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Follow a target user from the authenticated user account. */
    "twitter.follow_user": {
      input: {
        /**
         * The authenticated source user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The target user ID to follow.
         * @minLength 1
         */
        targetUserId: string;
      };
      output: {
        /** Whether the authenticated user now follows the target user. */
        following: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get followers for a user account. */
    "twitter.followers_by_user_id": {
      input: {
        /**
         * The user ID whose followers should be read.
         * @minLength 1
         */
        userId: string;
        /**
         * The maximum number of users to return in a page.
         * @minimum 1
         * @maximum 1000
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get followed accounts for a user account. */
    "twitter.following_by_user_id": {
      input: {
        /**
         * The user ID whose following list should be read.
         * @minLength 1
         */
        userId: string;
        /**
         * The maximum number of users to return in a page.
         * @minimum 1
         * @maximum 1000
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search the full public Tweet archive using app-only auth. */
    "twitter.full_archive_search": {
      input: {
        /**
         * The X search query to execute.
         * @minLength 1
         */
        query: string;
        /** The oldest UTC timestamp to include, in ISO 8601 format. */
        startTime?: string;
        /** The newest UTC timestamp to include, in ISO 8601 format. */
        endTime?: string;
        /** Return Tweets with IDs greater than this Tweet ID. */
        sinceId?: string;
        /** Return Tweets with IDs less than this Tweet ID. */
        untilId?: string;
        /**
         * The maximum number of Tweets to return in a page.
         * @minimum 10
         * @maximum 500
         */
        maxResults?: number;
        /** The next_token from a previous X API response. */
        nextToken?: string;
        /** The order used to rank Tweets in the response. */
        sortOrder?: "recency" | "relevancy";
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a compliance job by job ID using app-only auth. */
    "twitter.get_compliance_job": {
      input: {
        /**
         * The compliance job ID to look up.
         * @minLength 1
         */
        id: string;
        /** The compliance job fields to request from the X API. */
        complianceJobFields?: Array<string>;
      };
      output: {
        /** The normalized compliance job. */
        job: {
          /** The unique identifier of the compliance job. */
          id: string;
          /** The compliance job target type. */
          type: string;
          /** The current status of the compliance job. */
          status: string;
          /** The user-defined name of the compliance job. */
          name?: string | null;
          /** Whether resumable upload is enabled. */
          resumable?: boolean;
          /** The creation time of the compliance job. */
          createdAt?: string | null;
          /** The pre-signed upload URL for the compliance job. */
          uploadUrl?: string | null;
          /** The pre-signed download URL for the compliance job. */
          downloadUrl?: string | null;
          /** The expiration time of the upload URL. */
          uploadExpiresAt?: string | null;
          /** The expiration time of the download URL. */
          downloadExpiresAt?: string | null;
          /** The raw compliance job object returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The raw compliance job response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** List compliance jobs using app-only auth. */
    "twitter.get_compliance_jobs": {
      input: {
        /** The compliance job target type to list. */
        type: "tweets" | "users";
        /** The compliance job status filter. */
        status?: "complete" | "created" | "failed" | "in_progress";
        /** The compliance job fields to request from the X API. */
        complianceJobFields?: Array<string>;
      };
      output: {
        /** The normalized compliance jobs returned by the X API. */
        jobs: Array<{
          /** The unique identifier of the compliance job. */
          id: string;
          /** The compliance job target type. */
          type: string;
          /** The current status of the compliance job. */
          status: string;
          /** The user-defined name of the compliance job. */
          name?: string | null;
          /** Whether resumable upload is enabled. */
          resumable?: boolean;
          /** The creation time of the compliance job. */
          createdAt?: string | null;
          /** The pre-signed upload URL for the compliance job. */
          uploadUrl?: string | null;
          /** The pre-signed download URL for the compliance job. */
          downloadUrl?: string | null;
          /** The expiration time of the upload URL. */
          uploadExpiresAt?: string | null;
          /** The expiration time of the download URL. */
          downloadExpiresAt?: string | null;
          /** The raw compliance job object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw metadata returned by the X API. */
        meta?: Record<string, unknown>;
      };
    };
    /** Get Direct Message events for a one-to-one conversation with a participant. */
    "twitter.get_dm_conversation_events": {
      input: {
        /**
         * The participant user ID of the Direct Message conversation.
         * @minLength 1
         */
        participantId: string;
        /** The Direct Message event types to include in the response. */
        eventTypes?: Array<string>;
        /**
         * The maximum number of Direct Message events to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The Direct Message expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The user fields to request for expanded Direct Message users. */
        userFields?: Array<string>;
        /** The media fields to request for expanded Direct Message media. */
        mediaFields?: Array<string>;
        /** The tweet fields to request for expanded referenced Tweets. */
        tweetFields?: Array<string>;
        /** The Direct Message event fields to request from the X API. */
        dmEventFields?: Array<string>;
      };
      output: {
        /** The normalized Direct Message events returned by the X API. */
        events: Array<{
          /** The unique identifier of the Direct Message event. */
          id: string;
          /** The type of the Direct Message event. */
          eventType?: string | null;
          /** The conversation identifier for the Direct Message event. */
          dmConversationId?: string | null;
          /** The sender user ID of the Direct Message event. */
          senderId?: string | null;
          /** The text content of the Direct Message event. */
          text?: string | null;
          /** The creation time of the Direct Message event. */
          createdAt?: string | null;
          /** The participant user IDs attached to the Direct Message event. */
          participantIds?: Array<string>;
          /** The attachments object of the Direct Message event. */
          attachments?: Record<string, unknown>;
          /** The referenced Tweet metadata of the Direct Message event. */
          referencedTweets?: Record<string, unknown>;
          /** The raw Direct Message event returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a Direct Message event by event ID and optional expanded objects. */
    "twitter.get_dm_event": {
      input: {
        /**
         * The Direct Message event ID to look up.
         * @minLength 1
         */
        eventId: string;
        /** The Direct Message expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The user fields to request for expanded Direct Message users. */
        userFields?: Array<string>;
        /** The media fields to request for expanded Direct Message media. */
        mediaFields?: Array<string>;
        /** The tweet fields to request for expanded referenced Tweets. */
        tweetFields?: Array<string>;
        /** The Direct Message event fields to request from the X API. */
        dmEventFields?: Array<string>;
      };
      output: {
        /** The normalized Direct Message event. */
        event: {
          /** The unique identifier of the Direct Message event. */
          id: string;
          /** The type of the Direct Message event. */
          eventType?: string | null;
          /** The conversation identifier for the Direct Message event. */
          dmConversationId?: string | null;
          /** The sender user ID of the Direct Message event. */
          senderId?: string | null;
          /** The text content of the Direct Message event. */
          text?: string | null;
          /** The creation time of the Direct Message event. */
          createdAt?: string | null;
          /** The participant user IDs attached to the Direct Message event. */
          participantIds?: Array<string>;
          /** The attachments object of the Direct Message event. */
          attachments?: Record<string, unknown>;
          /** The referenced Tweet metadata of the Direct Message event. */
          referencedTweets?: Record<string, unknown>;
          /** The raw Direct Message event returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
      };
    };
    /** Get a List by List ID and optional expanded owner objects. */
    "twitter.get_list": {
      input: {
        /**
         * The List ID to look up.
         * @minLength 1
         */
        id: string;
        /** The list-related expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The list fields to request from the X API. */
        listFields?: Array<string>;
        /** The user fields to request for expanded list owners. */
        userFields?: Array<string>;
      };
      output: {
        /** The normalized List returned by the X API. */
        list: {
          /** The unique identifier of the List. */
          id: string;
          /** The display name of the List. */
          name: string;
          /** The description of the List. */
          description?: string | null;
          /** Whether the List is private. */
          private?: boolean;
          /** The follower count of the List. */
          followerCount?: number;
          /** The member count of the List. */
          memberCount?: number;
          /** The owner user ID of the List. */
          ownerId?: string | null;
          /** The creation time of the List. */
          createdAt?: string | null;
          /** The raw List object returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The raw List response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get users who follow a given X List. */
    "twitter.get_list_followers": {
      input: {
        /**
         * The List ID whose followers should be read.
         * @minLength 1
         */
        listId: string;
        /**
         * The maximum number of users to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get users who are members of a given X List. */
    "twitter.get_list_members": {
      input: {
        /**
         * The List ID whose members should be read.
         * @minLength 1
         */
        listId: string;
        /**
         * The maximum number of users to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the processing status for a chunked X media upload. */
    "twitter.get_media_upload_status": {
      input: {
        /**
         * The uploaded media ID to check.
         * @minLength 1
         */
        mediaId: string;
      };
      output: {
        /** The uploaded media ID. */
        mediaId: string;
        /** The uploaded media key. */
        mediaKey?: string;
        /** The normalized X media processing state. */
        state: "pending" | "in_progress" | "succeeded" | "failed";
        /** The number of seconds before the uploaded media expires. */
        expiresAfterSecs?: number;
        /** The uploaded media size in bytes. */
        size?: number;
        /** The media processing progress percentage. */
        progressPercent?: number;
        /** The number of seconds to wait before checking processing status. */
        checkAfterSecs?: number;
        /** The raw media processing information returned by the X API. */
        processingInfo?: Record<string, unknown>;
        /** The raw object returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get muted accounts for a user account. */
    "twitter.get_muted_users": {
      input: {
        /**
         * The user ID whose muted accounts should be read.
         * @minLength 1
         */
        userId: string;
        /**
         * The maximum number of users to return in a page.
         * @minimum 1
         * @maximum 1000
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get users who retweeted a given Tweet ID. */
    "twitter.get_post_retweeters_action": {
      input: {
        /**
         * The Tweet ID to inspect for retweeters.
         * @minLength 1
         */
        id: string;
        /**
         * The maximum number of users to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Tweet objects that retweeted a given Tweet ID. */
    "twitter.get_post_retweets": {
      input: {
        /**
         * The Tweet ID to inspect for Retweets.
         * @minLength 1
         */
        id: string;
        /**
         * The maximum number of Retweets to return in a page.
         * @minimum 10
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get recent Direct Message events for the authenticated user account. */
    "twitter.get_recent_dm_events": {
      input: {
        /** The Direct Message event types to include in the response. */
        eventTypes?: Array<string>;
        /**
         * The maximum number of Direct Message events to return in a page.
         * @minimum 1
         * @maximum 2000
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The Direct Message expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The user fields to request for expanded Direct Message users. */
        userFields?: Array<string>;
        /** The media fields to request for expanded Direct Message media. */
        mediaFields?: Array<string>;
        /** The tweet fields to request for expanded referenced Tweets. */
        tweetFields?: Array<string>;
        /** The Direct Message event fields to request from the X API. */
        dmEventFields?: Array<string>;
      };
      output: {
        /** The normalized Direct Message events returned by the X API. */
        events: Array<{
          /** The unique identifier of the Direct Message event. */
          id: string;
          /** The type of the Direct Message event. */
          eventType?: string | null;
          /** The conversation identifier for the Direct Message event. */
          dmConversationId?: string | null;
          /** The sender user ID of the Direct Message event. */
          senderId?: string | null;
          /** The text content of the Direct Message event. */
          text?: string | null;
          /** The creation time of the Direct Message event. */
          createdAt?: string | null;
          /** The participant user IDs attached to the Direct Message event. */
          participantIds?: Array<string>;
          /** The attachments object of the Direct Message event. */
          attachments?: Record<string, unknown>;
          /** The referenced Tweet metadata of the Direct Message event. */
          referencedTweets?: Record<string, unknown>;
          /** The raw Direct Message event returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a Space by Space ID and optional expanded objects. */
    "twitter.get_space_by_id": {
      input: {
        /**
         * The Space ID to look up.
         * @minLength 1
         */
        id: string;
        /** The Space-related expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The user fields to request for expanded Space users. */
        userFields?: Array<string>;
        /** The Space fields to request from the X API. */
        spaceFields?: Array<string>;
        /** The topic fields to request from the X API. */
        topicFields?: Array<string>;
      };
      output: {
        /** The normalized Space returned by the X API. */
        space: {
          /** The unique identifier of the Space. */
          id: string;
          /** The title of the Space. */
          title?: string | null;
          /** The current lifecycle state of the Space. */
          state?: string | null;
          /** The creator user ID of the Space. */
          creatorId?: string | null;
          /** The host user IDs of the Space. */
          hostIds?: Array<string>;
          /** The speaker user IDs of the Space. */
          speakerIds?: Array<string>;
          /** The number of participants in the Space. */
          participantCount?: number;
          /** The subscriber count of the Space. */
          subscriberCount?: number;
          /** The scheduled start time of the Space. */
          scheduledStart?: string | null;
          /** The actual start time of the Space. */
          startedAt?: string | null;
          /** The actual end time of the Space. */
          endedAt?: string | null;
          /** Whether the Space is ticketed. */
          isTicketed?: boolean;
          /** The topic identifiers attached to the Space. */
          topicIds?: Array<string>;
          /** The raw Space object returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
      };
    };
    /** Get Tweets that were shared in a given X Space. */
    "twitter.get_space_posts": {
      input: {
        /**
         * The Space ID to inspect for shared Tweets.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The maximum number of Tweets to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get ticket buyers for a ticketed X Space. */
    "twitter.get_space_ticket_buyers": {
      input: {
        /**
         * The Space ID whose ticket buyers should be read.
         * @minLength 1
         */
        spaceId: string;
        /**
         * The maximum number of users to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Spaces created by up to 100 user accounts. */
    "twitter.get_spaces_by_creators": {
      input: {
        /** The user IDs whose created Spaces should be read. */
        userIds: (Array<string>) & (Array<unknown>);
        /** The Space-related expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The user fields to request for expanded Space users. */
        userFields?: Array<string>;
        /** The Space fields to request from the X API. */
        spaceFields?: Array<string>;
        /** The topic fields to request from the X API. */
        topicFields?: Array<string>;
      };
      output: {
        /** The normalized Spaces returned by the X API. */
        spaces: Array<{
          /** The unique identifier of the Space. */
          id: string;
          /** The title of the Space. */
          title?: string | null;
          /** The current lifecycle state of the Space. */
          state?: string | null;
          /** The creator user ID of the Space. */
          creatorId?: string | null;
          /** The host user IDs of the Space. */
          hostIds?: Array<string>;
          /** The speaker user IDs of the Space. */
          speakerIds?: Array<string>;
          /** The number of participants in the Space. */
          participantCount?: number;
          /** The subscriber count of the Space. */
          subscriberCount?: number;
          /** The scheduled start time of the Space. */
          scheduledStart?: string | null;
          /** The actual start time of the Space. */
          startedAt?: string | null;
          /** The actual end time of the Space. */
          endedAt?: string | null;
          /** Whether the Space is ticketed. */
          isTicketed?: boolean;
          /** The topic identifiers attached to the Space. */
          topicIds?: Array<string>;
          /** The raw Space object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get up to 100 Spaces by Space ID and optional expanded objects. */
    "twitter.get_spaces_by_ids": {
      input: {
        /** The list of Space IDs to look up. */
        ids: (Array<string>) & (Array<unknown>);
        /** The Space-related expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The user fields to request for expanded Space users. */
        userFields?: Array<string>;
        /** The Space fields to request from the X API. */
        spaceFields?: Array<string>;
        /** The topic fields to request from the X API. */
        topicFields?: Array<string>;
      };
      output: {
        /** The normalized Spaces returned by the X API. */
        spaces: Array<{
          /** The unique identifier of the Space. */
          id: string;
          /** The title of the Space. */
          title?: string | null;
          /** The current lifecycle state of the Space. */
          state?: string | null;
          /** The creator user ID of the Space. */
          creatorId?: string | null;
          /** The host user IDs of the Space. */
          hostIds?: Array<string>;
          /** The speaker user IDs of the Space. */
          speakerIds?: Array<string>;
          /** The number of participants in the Space. */
          participantCount?: number;
          /** The subscriber count of the Space. */
          subscriberCount?: number;
          /** The scheduled start time of the Space. */
          scheduledStart?: string | null;
          /** The actual start time of the Space. */
          startedAt?: string | null;
          /** The actual end time of the Space. */
          endedAt?: string | null;
          /** Whether the Space is ticketed. */
          isTicketed?: boolean;
          /** The topic identifiers attached to the Space. */
          topicIds?: Array<string>;
          /** The raw Space object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get a public X user profile by user ID and optional expanded objects. */
    "twitter.get_user_by_id": {
      input: {
        /**
         * The user ID to look up.
         * @minLength 1
         */
        id: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized user profile. */
        user: {
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
      };
    };
    /** Get Lists followed by a user account. */
    "twitter.get_user_followed_lists": {
      input: {
        /**
         * The user ID whose followed Lists should be read.
         * @minLength 1
         */
        userId: string;
        /**
         * The maximum number of Lists to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The list-related expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The list fields to request from the X API. */
        listFields?: Array<string>;
        /** The user fields to request for expanded list owners. */
        userFields?: Array<string>;
      };
      output: {
        /** The normalized Lists returned by the X API. */
        lists: Array<{
          /** The unique identifier of the List. */
          id: string;
          /** The display name of the List. */
          name: string;
          /** The description of the List. */
          description?: string | null;
          /** Whether the List is private. */
          private?: boolean;
          /** The follower count of the List. */
          followerCount?: number;
          /** The member count of the List. */
          memberCount?: number;
          /** The owner user ID of the List. */
          ownerId?: string | null;
          /** The creation time of the List. */
          createdAt?: string | null;
          /** The raw List object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Lists that include a given user as a member. */
    "twitter.get_user_list_memberships": {
      input: {
        /**
         * The user ID whose List memberships should be read.
         * @minLength 1
         */
        userId: string;
        /**
         * The maximum number of Lists to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The list-related expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The list fields to request from the X API. */
        listFields?: Array<string>;
        /** The user fields to request for expanded list owners. */
        userFields?: Array<string>;
      };
      output: {
        /** The normalized Lists returned by the X API. */
        lists: Array<{
          /** The unique identifier of the List. */
          id: string;
          /** The display name of the List. */
          name: string;
          /** The description of the List. */
          description?: string | null;
          /** Whether the List is private. */
          private?: boolean;
          /** The follower count of the List. */
          followerCount?: number;
          /** The member count of the List. */
          memberCount?: number;
          /** The owner user ID of the List. */
          ownerId?: string | null;
          /** The creation time of the List. */
          createdAt?: string | null;
          /** The raw List object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Lists owned by a given user account. */
    "twitter.get_user_owned_lists": {
      input: {
        /**
         * The user ID whose owned Lists should be read.
         * @minLength 1
         */
        userId: string;
        /**
         * The maximum number of Lists to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The list-related expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The list fields to request from the X API. */
        listFields?: Array<string>;
        /** The user fields to request for expanded list owners. */
        userFields?: Array<string>;
      };
      output: {
        /** The normalized Lists returned by the X API. */
        lists: Array<{
          /** The unique identifier of the List. */
          id: string;
          /** The display name of the List. */
          name: string;
          /** The description of the List. */
          description?: string | null;
          /** Whether the List is private. */
          private?: boolean;
          /** The follower count of the List. */
          followerCount?: number;
          /** The member count of the List. */
          memberCount?: number;
          /** The owner user ID of the List. */
          ownerId?: string | null;
          /** The creation time of the List. */
          createdAt?: string | null;
          /** The raw List object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Lists pinned by a given user account. */
    "twitter.get_user_pinned_lists": {
      input: {
        /**
         * The user ID whose pinned Lists should be read.
         * @minLength 1
         */
        userId: string;
        /**
         * The maximum number of Lists to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The list-related expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The list fields to request from the X API. */
        listFields?: Array<string>;
        /** The user fields to request for expanded list owners. */
        userFields?: Array<string>;
      };
      output: {
        /** The normalized Lists returned by the X API. */
        lists: Array<{
          /** The unique identifier of the List. */
          id: string;
          /** The display name of the List. */
          name: string;
          /** The description of the List. */
          description?: string | null;
          /** Whether the List is private. */
          private?: boolean;
          /** The follower count of the List. */
          followerCount?: number;
          /** The member count of the List. */
          memberCount?: number;
          /** The owner user ID of the List. */
          ownerId?: string | null;
          /** The creation time of the List. */
          createdAt?: string | null;
          /** The raw List object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get up to 100 public X user profiles by user ID and optional expanded objects. */
    "twitter.get_users_by_ids": {
      input: {
        /** The list of user IDs to look up. */
        ids: (Array<string>) & (Array<unknown>);
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Hide or unhide replies for a Tweet authored by the authenticated X user. */
    "twitter.hide_replies": {
      input: {
        /**
         * The Tweet ID whose reply visibility should be updated.
         * @minLength 1
         */
        id: string;
        /** Whether replies should be hidden. */
        hidden: boolean;
      };
      output: {
        /** Whether replies are now hidden for the Tweet. */
        hidden: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get users who liked a given Tweet ID. */
    "twitter.list_post_likers": {
      input: {
        /**
         * The Tweet ID to inspect for likers.
         * @minLength 1
         */
        id: string;
        /**
         * The maximum number of users to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Tweets from a given X List timeline. */
    "twitter.list_posts_timeline_by_list_id": {
      input: {
        /**
         * The List ID whose Tweet timeline should be read.
         * @minLength 1
         */
        listId: string;
        /** Return Tweets with IDs greater than this Tweet ID. */
        sinceId?: string;
        /** Return Tweets with IDs less than this Tweet ID. */
        untilId?: string;
        /**
         * The maximum number of Tweets to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Mute a target user from the authenticated user account. */
    "twitter.mute_user": {
      input: {
        /**
         * The authenticated source user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The target user ID to mute.
         * @minLength 1
         */
        targetUserId: string;
      };
      output: {
        /** Whether the target user is now muted by the authenticated user. */
        muted: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Pin an X List for the authenticated user account. */
    "twitter.pin_list": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The List ID to pin.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** Whether the List is now pinned for the authenticated user. */
        pinned: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Delete a Tweet authored by the authenticated X user. */
    "twitter.post_delete_by_post_id": {
      input: {
        /**
         * The ID of the Tweet to delete.
         * @minLength 1
         */
        id: string;
      };
      output: {
        /** Whether the Tweet was deleted. */
        deleted: boolean;
        /** The raw delete Tweet response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a public Tweet by Tweet ID and optional expanded objects. */
    "twitter.post_lookup_by_post_id": {
      input: {
        /**
         * The Tweet ID to look up.
         * @minLength 1
         */
        id: string;
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweet returned by the X API. */
        post: {
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
      };
    };
    /** Get up to 100 public Tweets by Tweet ID and optional expanded objects. */
    "twitter.post_lookup_by_post_ids": {
      input: {
        /** The list of Tweet IDs to look up. */
        ids: (Array<string>) & (Array<unknown>);
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Search recent Tweets from the last seven days using X search syntax. */
    "twitter.recent_search": {
      input: {
        /**
         * The X search query to execute.
         * @minLength 1
         */
        query: string;
        /** The oldest UTC timestamp to include, in ISO 8601 format. */
        startTime?: string;
        /** The newest UTC timestamp to include, in ISO 8601 format. */
        endTime?: string;
        /** Return Tweets with IDs greater than this Tweet ID. */
        sinceId?: string;
        /** Return Tweets with IDs less than this Tweet ID. */
        untilId?: string;
        /**
         * The maximum number of Tweets to return in a page.
         * @minimum 10
         * @maximum 100
         */
        maxResults?: number;
        /** The next_token from a previous X API response. */
        nextToken?: string;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The order used to rank Tweets in the response. */
        sortOrder?: "recency" | "relevancy";
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Remove a user account from an X List. */
    "twitter.remove_list_member": {
      input: {
        /**
         * The List ID to update.
         * @minLength 1
         */
        listId: string;
        /**
         * The user ID to remove from the List.
         * @minLength 1
         */
        userId: string;
      };
      output: {
        /** Whether the target user is still a member of the List. */
        isMember: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Remove a Tweet from bookmarks for the authenticated user account. */
    "twitter.remove_post_from_bookmarks": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The Tweet ID to remove from bookmarks.
         * @minLength 1
         */
        tweetId: string;
      };
      output: {
        /** Whether the Tweet is still bookmarked by the authenticated user. */
        bookmarked: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get Direct Message events for a Direct Message conversation ID. */
    "twitter.retrieve_dm_conversation_events": {
      input: {
        /**
         * The Direct Message conversation ID to read.
         * @minLength 1
         */
        dmConversationId: string;
        /** The Direct Message event types to include in the response. */
        eventTypes?: Array<string>;
        /**
         * The maximum number of Direct Message events to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The Direct Message expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The user fields to request for expanded Direct Message users. */
        userFields?: Array<string>;
        /** The media fields to request for expanded Direct Message media. */
        mediaFields?: Array<string>;
        /** The tweet fields to request for expanded referenced Tweets. */
        tweetFields?: Array<string>;
        /** The Direct Message event fields to request from the X API. */
        dmEventFields?: Array<string>;
      };
      output: {
        /** The normalized Direct Message events returned by the X API. */
        events: Array<{
          /** The unique identifier of the Direct Message event. */
          id: string;
          /** The type of the Direct Message event. */
          eventType?: string | null;
          /** The conversation identifier for the Direct Message event. */
          dmConversationId?: string | null;
          /** The sender user ID of the Direct Message event. */
          senderId?: string | null;
          /** The text content of the Direct Message event. */
          text?: string | null;
          /** The creation time of the Direct Message event. */
          createdAt?: string | null;
          /** The participant user IDs attached to the Direct Message event. */
          participantIds?: Array<string>;
          /** The attachments object of the Direct Message event. */
          attachments?: Record<string, unknown>;
          /** The referenced Tweet metadata of the Direct Message event. */
          referencedTweets?: Record<string, unknown>;
          /** The raw Direct Message event returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Tweets that quote a given Tweet ID. */
    "twitter.retrieve_posts_that_quote_a_post": {
      input: {
        /**
         * The Tweet ID to inspect for quote Tweets.
         * @minLength 1
         */
        id: string;
        /**
         * The maximum number of Tweets to return in a page.
         * @minimum 10
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get Tweets liked by a user account. */
    "twitter.returns_post_objects_liked_by_the_provided_user_id": {
      input: {
        /**
         * The user ID whose liked Tweets should be read.
         * @minLength 1
         */
        userId: string;
        /**
         * The maximum number of liked Tweets to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Retweet a Tweet from the authenticated user account. */
    "twitter.retweet_post": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The Tweet ID to retweet.
         * @minLength 1
         */
        tweetId: string;
      };
      output: {
        /** Whether the Tweet is now retweeted by the authenticated user. */
        retweeted: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Count Tweets over the full public archive using app-only auth. */
    "twitter.search_full_archive_counts": {
      input: {
        /**
         * The X search query to execute.
         * @minLength 1
         */
        query: string;
        /** The oldest UTC timestamp to include, in ISO 8601 format. */
        startTime?: string;
        /** The newest UTC timestamp to include, in ISO 8601 format. */
        endTime?: string;
        /** The next_token from a previous X API response. */
        nextToken?: string;
        /** The granularity used to bucket counts in the response. */
        granularity?: "minute" | "hour" | "day";
      };
      output: {
        /** The normalized Tweet count buckets. */
        counts: Array<{
          /** The inclusive start time of the count bucket. */
          start: string;
          /** The exclusive end time of the count bucket. */
          end: string;
          /** The number of Tweets in the bucket. */
          tweetCount: number;
          /** The raw count bucket returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw metadata returned by the X API. */
        meta?: Record<string, unknown>;
      };
    };
    /** Count recent Tweets from the last seven days using X search syntax. */
    "twitter.search_recent_counts": {
      input: {
        /**
         * The X search query to execute.
         * @minLength 1
         */
        query: string;
        /** The oldest UTC timestamp to include, in ISO 8601 format. */
        startTime?: string;
        /** The newest UTC timestamp to include, in ISO 8601 format. */
        endTime?: string;
        /** Count Tweets with IDs greater than this Tweet ID. */
        sinceId?: string;
        /** Count Tweets with IDs less than this Tweet ID. */
        untilId?: string;
        /** The next_token from a previous X API response. */
        nextToken?: string;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The granularity used to bucket counts in the response. */
        granularity?: "minute" | "hour" | "day";
        /** The count bucket fields to request from the X API. */
        searchCountFields?: Array<string>;
      };
      output: {
        /** The normalized Tweet count buckets. */
        counts: Array<{
          /** The inclusive start time of the count bucket. */
          start: string;
          /** The exclusive end time of the count bucket. */
          end: string;
          /** The number of Tweets in the bucket. */
          tweetCount: number;
          /** The raw count bucket returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The raw metadata returned by the X API. */
        meta?: Record<string, unknown>;
      };
    };
    /** Search X Spaces by query text and optional Space filters. */
    "twitter.search_spaces": {
      input: {
        /**
         * The textual query used to search Spaces.
         * @minLength 1
         */
        query: string;
        /** The Space state filter to apply. */
        state?: "all" | "live" | "scheduled";
        /**
         * The maximum number of Spaces to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The Space-related expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The user fields to request for expanded Space users. */
        userFields?: Array<string>;
        /** The Space fields to request from the X API. */
        spaceFields?: Array<string>;
        /** The topic fields to request from the X API. */
        topicFields?: Array<string>;
      };
      output: {
        /** The normalized Spaces returned by the X API. */
        spaces: Array<{
          /** The unique identifier of the Space. */
          id: string;
          /** The title of the Space. */
          title?: string | null;
          /** The current lifecycle state of the Space. */
          state?: string | null;
          /** The creator user ID of the Space. */
          creatorId?: string | null;
          /** The host user IDs of the Space. */
          hostIds?: Array<string>;
          /** The speaker user IDs of the Space. */
          speakerIds?: Array<string>;
          /** The number of participants in the Space. */
          participantCount?: number;
          /** The subscriber count of the Space. */
          subscriberCount?: number;
          /** The scheduled start time of the Space. */
          scheduledStart?: string | null;
          /** The actual start time of the Space. */
          startedAt?: string | null;
          /** The actual end time of the Space. */
          endedAt?: string | null;
          /** Whether the Space is ticketed. */
          isTicketed?: boolean;
          /** The topic identifiers attached to the Space. */
          topicIds?: Array<string>;
          /** The raw Space object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Send a new Direct Message to a user account. */
    "twitter.send_a_new_message_to_a_user": {
      input: {
        /** The Direct Message text content. */
        text?: string;
        /** The uploaded media IDs to attach to the Direct Message. */
        attachmentMediaIds?: Array<string>;
        /**
         * The recipient user ID for the new Direct Message.
         * @minLength 1
         */
        participantId: string;
      };
      output: {
        /** The Direct Message conversation identifier. */
        dmConversationId: string;
        /** The Direct Message event identifier. */
        dmEventId: string;
        /** The raw Direct Message mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Send a new Direct Message to an existing conversation. */
    "twitter.send_dm_to_conversation": {
      input: {
        /** The Direct Message text content. */
        text?: string;
        /** The uploaded media IDs to attach to the Direct Message. */
        attachmentMediaIds?: Array<string>;
        /**
         * The Direct Message conversation ID to send to.
         * @minLength 1
         */
        dmConversationId: string;
      };
      output: {
        /** The Direct Message conversation identifier. */
        dmConversationId: string;
        /** The Direct Message event identifier. */
        dmEventId: string;
        /** The raw Direct Message mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Unfollow an X List from the authenticated user account. */
    "twitter.unfollow_list": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The List ID to unfollow.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** Whether the authenticated user still follows the List. */
        following: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Unfollow a target user from the authenticated user account. */
    "twitter.unfollow_user": {
      input: {
        /**
         * The authenticated source user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The target user ID to unfollow.
         * @minLength 1
         */
        targetUserId: string;
      };
      output: {
        /** Whether the authenticated user still follows the target user. */
        following: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Unlike a Tweet from the authenticated user account. */
    "twitter.unlike_post": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The Tweet ID to unlike.
         * @minLength 1
         */
        tweetId: string;
      };
      output: {
        /** Whether the Tweet is still liked by the authenticated user. */
        liked: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Unmute a target user from the authenticated user account. */
    "twitter.unmute_user": {
      input: {
        /**
         * The authenticated source user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The target user ID to unmute.
         * @minLength 1
         */
        targetUserId: string;
      };
      output: {
        /** Whether the target user is still muted by the authenticated user. */
        muted: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Unpin an X List for the authenticated user account. */
    "twitter.unpin_list": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The List ID to unpin.
         * @minLength 1
         */
        listId: string;
      };
      output: {
        /** Whether the List is still pinned for the authenticated user. */
        pinned: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Undo a Retweet from the authenticated user account. */
    "twitter.unretweet_post": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The Tweet ID to unretweet.
         * @minLength 1
         */
        tweetId: string;
      };
      output: {
        /** Whether the Tweet is still retweeted by the authenticated user. */
        retweeted: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Update List attributes for a List owned by the authenticated user account. */
    "twitter.update_list": {
      input: {
        /**
         * The List ID to update.
         * @minLength 1
         */
        id: string;
        /** The updated List name. */
        name?: string;
        /** The updated List description. Use an empty string to clear it. */
        description?: string;
        /** Whether the List should be private. */
        private?: boolean;
      };
      output: {
        /** Whether the List attributes were updated. */
        updated: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Upload a video or other large media file to X from a temporary HTTP URL using chunked media upload. */
    "twitter.upload_large_media": {
      input: {
        /**
         * The HTTP or HTTPS URL whose bytes should be uploaded to X. For local files, upload the file with oo file upload and pass its downloadUrl.
         * @format uri
         */
        mediaUrl: string;
        /**
         * The media MIME type, such as video/mp4.
         * @minLength 1
         */
        mimeType: string;
        /**
         * The total media size in bytes.
         * @exclusiveMinimum 0
         */
        totalBytes: number;
        /** The X media category for the upload. */
        mediaCategory: "tweet_video" | "tweet_gif" | "amplify_video";
        /**
         * The source filename for diagnostics.
         * @minLength 1
         */
        fileName?: string;
        /**
         * The chunk size in bytes to use for APPEND requests. Defaults to 4194304.
         * @maximum 5242880
         * @exclusiveMinimum 0
         */
        chunkSizeBytes?: number;
      };
      output: {
        /** The uploaded media ID. */
        mediaId: string;
        /** The uploaded media key. */
        mediaKey?: string;
        /** The normalized X media processing state. */
        state: "pending" | "in_progress" | "succeeded" | "failed";
        /** The number of seconds before the uploaded media expires. */
        expiresAfterSecs?: number;
        /** The uploaded media size in bytes. */
        size?: number;
        /** The media processing progress percentage. */
        progressPercent?: number;
        /** The number of seconds to wait before checking processing status. */
        checkAfterSecs?: number;
        /** The raw media processing information returned by the X API. */
        processingInfo?: Record<string, unknown>;
        /** The raw object returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Upload a single image to X and return the created media identifiers. */
    "twitter.upload_media": {
      input: {
        /**
         * The Base64-encoded image bytes to upload.
         * @minLength 1
         */
        mediaBase64: string;
        /**
         * The MIME type of the image to upload.
         * @minLength 1
         */
        mimeType: string;
        /** The filename to attach to the upload. */
        fileName?: string;
        /** The media category to use for the upload. */
        mediaCategory?: "tweet_image" | "dm_image" | "subtitles";
      };
      output: {
        /** The uploaded media ID. */
        id: string;
        /** The uploaded media key. */
        mediaKey: string;
        /** The number of seconds before the uploaded media expires. */
        expiresAfterSecs: number;
        /** The uploaded media size in bytes. */
        size: number;
        /** The raw media upload response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get the reverse chronological home timeline for a user account. */
    "twitter.user_home_timeline_by_user_id": {
      input: {
        /**
         * The user ID whose home timeline should be read.
         * @minLength 1
         */
        userId: string;
        /** Return Tweets with IDs greater than this Tweet ID. */
        sinceId?: string;
        /** Return Tweets with IDs less than this Tweet ID. */
        untilId?: string;
        /**
         * The maximum number of Tweets to return in a page.
         * @minimum 1
         * @maximum 100
         */
        maxResults?: number;
        /** The pagination token from a previous X API response. */
        paginationToken?: string;
        /** The expansions to include in the X API response. */
        expansions?: Array<string>;
        /** The poll fields to request from the X API. */
        pollFields?: Array<string>;
        /** The user fields to request from the X API. */
        userFields?: Array<string>;
        /** The media fields to request from the X API. */
        mediaFields?: Array<string>;
        /** The place fields to request from the X API. */
        placeFields?: Array<string>;
        /** The tweet fields to request from the X API. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized Tweets returned by the X API. */
        posts: Array<{
          /** The unique identifier of the Tweet. */
          id: string;
          /** The text content of the Tweet. */
          text: string;
          /** The author user ID of the Tweet. */
          authorId?: string | null;
          /** The Tweet creation time. */
          createdAt?: string | null;
          /** The language code of the Tweet. */
          lang?: string | null;
          /** The public metrics of the Tweet. */
          publicMetrics?: Record<string, unknown>;
          /** The raw Tweet object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Like a Tweet from the authenticated user account. */
    "twitter.user_like_post": {
      input: {
        /**
         * The authenticated user ID.
         * @minLength 1
         */
        userId: string;
        /**
         * The Tweet ID to like.
         * @minLength 1
         */
        tweetId: string;
      };
      output: {
        /** Whether the Tweet is now liked by the authenticated user. */
        liked: boolean;
        /** The raw mutation response returned by the X API. */
        raw: Record<string, unknown>;
      };
    };
    /** Get a public X user profile by username and optional expanded objects. */
    "twitter.user_lookup_by_username": {
      input: {
        /**
         * The username to look up, without the @ prefix.
         * @minLength 1
         */
        username: string;
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized user profile. */
        user: {
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
      };
    };
    /** Get up to 100 public X user profiles by username and optional expanded objects. */
    "twitter.user_lookup_by_usernames": {
      input: {
        /** The list of usernames to look up, without the @ prefix. */
        usernames: (Array<string>) & (Array<unknown>);
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized users returned by the X API. */
        users: Array<{
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        }>;
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
        /** The normalized pagination metadata. */
        meta?: {
          /** The number of results returned in this page. */
          resultCount: number;
          /** The token for fetching the next page of results. */
          nextToken?: string | null;
          /** The token for fetching the previous page of results. */
          previousToken?: string | null;
          /** The newest Tweet ID in this page. */
          newestId?: string | null;
          /** The oldest Tweet ID in this page. */
          oldestId?: string | null;
          /** The raw metadata object returned by the X API. */
          raw: Record<string, unknown>;
        };
      };
    };
    /** Get the currently authenticated X user profile and optional expanded objects. */
    "twitter.user_lookup_me": {
      input: {
        /** The expansions to include, such as pinned_tweet_id. */
        expansions?: Array<string>;
        /** The additional user fields to request from the X API. */
        userFields?: Array<string>;
        /** The additional tweet fields to request for expanded Tweets. */
        tweetFields?: Array<string>;
      };
      output: {
        /** The normalized user profile. */
        user: {
          /** The unique identifier of the X user. */
          id: string;
          /** The display name of the user. */
          name: string;
          /** The handle of the user without the @ prefix. */
          username: string;
          /** The bio of the user. */
          description?: string | null;
          /** The self-declared location of the user. */
          location?: string | null;
          /** The website URL on the user profile. */
          url?: string | null;
          /** The profile image URL of the user. */
          profileImageUrl?: string | null;
          /** The profile banner URL of the user. */
          profileBannerUrl?: string | null;
          /** The creation time of the user account. */
          createdAt?: string | null;
          /** Whether the account is verified. */
          verified?: boolean;
          /** The type of verification on the account. */
          verifiedType?: string | null;
          /** Whether the account is protected. */
          protected?: boolean;
          /** The public engagement metrics of the user. */
          publicMetrics?: Record<string, unknown>;
          /** The raw user object returned by the X API. */
          raw: Record<string, unknown>;
        };
        /** The expanded objects returned by the X API, when requested. */
        includes?: Record<string, unknown>;
      };
    };
  }
}
