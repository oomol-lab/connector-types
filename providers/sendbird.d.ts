import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Invite members into an existing Sendbird group channel. */
    "sendbird.add_members_group_channel": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /** The users to invite into the channel. */
        user_ids: Array<string>;
        /** Whether to hide previous messages from the invited users. */
        hide_existing_messages?: boolean;
        /**
         * The hide-existing-messages duration in seconds when required by Sendbird.
         * @minimum 0
         */
        seconds?: number;
      };
      output: {
        /** The unique URL of the group channel. */
        channel_url: string;
        /** The channel name. */
        name?: string;
        /** The cover image URL of the channel. */
        cover_url?: string;
        /** The custom type assigned to the channel. */
        custom_type?: string;
        /** The custom data payload stored for the channel. */
        data?: string;
        /** The metadata returned for the channel. */
        metadata?: Record<string, string>;
        /** Whether the channel is distinct. */
        is_distinct?: boolean;
        /** Whether the channel is public. */
        is_public?: boolean;
        /** Whether the channel is a supergroup. */
        is_super?: boolean;
        /** Whether the channel is a broadcast channel. */
        is_broadcast?: boolean;
        /** Whether the channel is ephemeral. */
        is_ephemeral?: boolean;
        /**
         * The number of members in the channel.
         * @minimum 0
         */
        member_count?: number;
        /**
         * The channel creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /** The members returned as part of the channel response. */
        members?: Array<{
          /** The unique ID of the member. */
          user_id: string;
          /** The member nickname. */
          nickname?: string;
          /** The member profile image URL. */
          profile_url?: string;
          /** The metadata attached to the member. */
          metadata?: Record<string, unknown>;
          /** The membership state of the user in the channel. */
          state?: string;
          /** The member role reported by Sendbird. */
          role?: string;
          /** Whether the member is muted in the channel. */
          is_muted?: boolean;
          /** Whether the member is a channel operator. */
          is_operator?: boolean;
          /** Whether the member is currently online. */
          is_online?: boolean;
          /**
           * The timestamp when the member joined the channel.
           * @minimum 0
           */
          joined_at?: number;
          /**
           * The timestamp when the member was last seen.
           * @minimum 0
           */
          last_seen_at?: number;
          [key: string]: unknown;
        }>;
        /** The last message reported for the channel. */
        last_message?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Ban a user from a Sendbird group channel. */
    "sendbird.ban_user_from_group_channel": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /**
         * The ban duration in seconds. Omit for a permanent ban.
         * @minimum 0
         */
        seconds?: number;
        /** The moderation reason to record. */
        description?: string;
        /** The moderator ID performing the action. */
        agent_id?: string;
      };
      output: {
        /** Whether the moderation request succeeded. */
        success?: boolean;
        /** The affected user ID when Sendbird returns one. */
        user_id?: string;
        /** The affected user nickname when Sendbird returns one. */
        nickname?: string;
        /** The affected user profile URL when Sendbird returns one. */
        profile_url?: string;
        /**
         * The moderation duration in seconds when Sendbird returns one.
         * @minimum 0
         */
        seconds?: number;
        /**
         * The moderation creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The moderation end timestamp in milliseconds.
         * @minimum 0
         */
        end_at?: number;
        /** The moderation reason returned by Sendbird. */
        description?: string;
        [key: string]: unknown;
      };
    };
    /** Create a Sendbird group channel with common JSON body fields. */
    "sendbird.create_channel": {
      input: {
        /** The channel name. */
        name?: string;
        /** The custom channel URL to create. */
        channel_url?: string;
        /** The users to invite into the new channel. */
        user_ids?: Array<string>;
        /** The operators to assign to the new channel. */
        operator_ids?: Array<string>;
        /** The cover image URL to assign to the channel. */
        cover_url?: string;
        /** The custom type to assign to the channel. */
        custom_type?: string;
        /** The custom data payload to store for the channel. */
        data?: string;
        /** Whether the channel should be distinct. */
        is_distinct?: boolean;
        /** Whether the channel should be public. */
        is_public?: boolean;
        /** Whether the channel should be a supergroup. */
        is_super?: boolean;
        /** Whether the channel should be ephemeral. */
        is_ephemeral?: boolean;
        /** Whether the channel should be discoverable when supported by Sendbird. */
        is_discoverable?: boolean;
        /** The access code for a private public channel. */
        access_code?: string;
        /** Whether Sendbird should fail if a matching channel already exists. */
        strict?: boolean;
        /**
         * The message survival duration in seconds when supported by Sendbird.
         * @minimum 0
         */
        message_survival_seconds?: number;
        [key: string]: unknown;
      };
      output: {
        /** The unique URL of the group channel. */
        channel_url: string;
        /** The channel name. */
        name?: string;
        /** The cover image URL of the channel. */
        cover_url?: string;
        /** The custom type assigned to the channel. */
        custom_type?: string;
        /** The custom data payload stored for the channel. */
        data?: string;
        /** The metadata returned for the channel. */
        metadata?: Record<string, string>;
        /** Whether the channel is distinct. */
        is_distinct?: boolean;
        /** Whether the channel is public. */
        is_public?: boolean;
        /** Whether the channel is a supergroup. */
        is_super?: boolean;
        /** Whether the channel is a broadcast channel. */
        is_broadcast?: boolean;
        /** Whether the channel is ephemeral. */
        is_ephemeral?: boolean;
        /**
         * The number of members in the channel.
         * @minimum 0
         */
        member_count?: number;
        /**
         * The channel creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /** The members returned as part of the channel response. */
        members?: Array<{
          /** The unique ID of the member. */
          user_id: string;
          /** The member nickname. */
          nickname?: string;
          /** The member profile image URL. */
          profile_url?: string;
          /** The metadata attached to the member. */
          metadata?: Record<string, unknown>;
          /** The membership state of the user in the channel. */
          state?: string;
          /** The member role reported by Sendbird. */
          role?: string;
          /** Whether the member is muted in the channel. */
          is_muted?: boolean;
          /** Whether the member is a channel operator. */
          is_operator?: boolean;
          /** Whether the member is currently online. */
          is_online?: boolean;
          /**
           * The timestamp when the member joined the channel.
           * @minimum 0
           */
          joined_at?: number;
          /**
           * The timestamp when the member was last seen.
           * @minimum 0
           */
          last_seen_at?: number;
          [key: string]: unknown;
        }>;
        /** The last message reported for the channel. */
        last_message?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Create a Sendbird user with common profile and metadata fields. */
    "sendbird.create_user": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /** The nickname to assign to the new user. */
        nickname?: string;
        /** The URL of the user's profile image. */
        profile_url?: string;
        /** The metadata to attach to the user. */
        metadata?: Record<string, string>;
        /** Whether Sendbird should issue an access token for the user. */
        issue_access_token?: boolean;
        /** The discovery keys to attach to the user. */
        discovery_keys?: Array<string>;
        /** The preferred language codes to assign to the user. */
        preferred_languages?: Array<string>;
        /** Whether the user should be active. */
        is_active?: boolean;
        /** The phone number to store for the user. */
        phone_number?: string;
        /** Whether the user has logged in before when supported by Sendbird. */
        has_ever_logged_in?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The unique ID of the user. */
        user_id: string;
        /** The user's display nickname. */
        nickname?: string;
        /** The URL of the user's profile image. */
        profile_url?: string;
        /** The metadata attached to the user. */
        metadata?: Record<string, string>;
        /** Whether the user account is active. */
        is_active?: boolean;
        /** Whether the user is currently online. */
        is_online?: boolean;
        /** The issued access token when the API returns one. */
        access_token?: string;
        /**
         * The user creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The user update timestamp in milliseconds.
         * @minimum 0
         */
        updated_at?: number;
        /**
         * The timestamp when the user was last seen online.
         * @minimum 0
         */
        last_seen_at?: number;
        /** The preferred language codes configured for the user. */
        preferred_languages?: Array<string>;
        /** The discovery keys associated with the user. */
        discovery_keys?: Array<string>;
        /** The custom type assigned to the user. */
        custom_type?: string;
        /** The phone number stored for the user. */
        phone_number?: string;
        /** Whether the user has logged in at least once. */
        has_ever_logged_in?: boolean;
        [key: string]: unknown;
      };
    };
    /** Delete a Sendbird group channel. */
    "sendbird.delete_channel": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
      };
    };
    /** Delete a Sendbird group channel message. */
    "sendbird.delete_message": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The numeric identifier of the Sendbird message.
         * @minimum 0
         */
        message_id: number;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
      };
    };
    /** Delete a Sendbird user. */
    "sendbird.delete_user": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /** Whether to permanently delete the user and related data. */
        hard_delete?: boolean;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
      };
    };
    /** Get Sendbird group channel counts grouped by join status. */
    "sendbird.get_number_of_channels_by_join_status": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /** Filter by whether the channel is a supergroup. */
        super_mode?: "all" | "super" | "nonsuper";
        /** Filter by whether the channel is public. */
        public_mode?: "all" | "public" | "private";
        /** Filter by whether the channel is distinct. */
        distinct_mode?: "all" | "distinct" | "nondistinct";
        /** The hidden-mode filter supported by the official API. */
        hidden_mode?: string;
        /** The unread filter supported by the official API. */
        unread_filter?: string;
        /** Restrict counts to the provided custom channel types. */
        custom_types?: Array<string>;
        /** When provided, only the specified join-state count is requested. */
        state?: "joined_only" | "invited_only" | "invited_by_friend" | "invited_by_non_friend";
      };
      output: {
        /**
         * The total count of joined and invited group channels.
         * @minimum 0
         */
        total: number;
        /**
         * The number of channels the user has joined.
         * @minimum 0
         */
        joined: number;
        /**
         * The number of channels the user has been invited to.
         * @minimum 0
         */
        invited: number;
        /**
         * The number of channels the user was invited to by a friend.
         * @minimum 0
         */
        invited_by_friend: number;
        /**
         * The number of channels the user was invited to by a non-friend.
         * @minimum 0
         */
        invited_by_non_friend: number;
      };
    };
    /** Get unread message, mention, and invitation counts for a Sendbird user. */
    "sendbird.get_number_of_unread_items": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /** The unread item keys to retrieve. */
        item_keys?: string | Array<string>;
        /** The custom channel types to filter the counts by. */
        custom_types?: string | Array<string>;
      };
      output: {
        /**
         * The total unread message count across group channels.
         * @minimum 0
         */
        group_channel_unread_message_count?: number;
        /**
         * The total unread mention count across group channels.
         * @minimum 0
         */
        group_channel_unread_mention_count?: number;
        /**
         * The total pending invitation count across group channels.
         * @minimum 0
         */
        group_channel_invitation_count?: number;
        /**
         * The unread message count for non-super group channels.
         * @minimum 0
         */
        non_super_group_channel_unread_message_count?: number;
        /**
         * The unread message count for super group channels.
         * @minimum 0
         */
        super_group_channel_unread_message_count?: number;
        /**
         * The unread mention count for non-super group channels.
         * @minimum 0
         */
        non_super_group_channel_unread_mention_count?: number;
        /**
         * The unread mention count for super group channels.
         * @minimum 0
         */
        super_group_channel_unread_mention_count?: number;
        /**
         * The invitation count for non-super group channels.
         * @minimum 0
         */
        non_super_group_channel_invitation_count?: number;
        /**
         * The invitation count for super group channels.
         * @minimum 0
         */
        super_group_channel_invitation_count?: number;
        [key: string]: unknown;
      };
    };
    /** Issue a Sendbird session token for a user. */
    "sendbird.issue_session_token": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /**
         * The session token expiration timestamp in milliseconds.
         * @minimum 0
         */
        expires_at?: number;
      };
      output: {
        /** The issued session token. */
        token?: string;
        /** The issued session token when Sendbird uses this field name. */
        session_token?: string;
        /** The user ID the session token belongs to. */
        user_id?: string;
        /**
         * The expiration timestamp of the session token in milliseconds.
         * @minimum 0
         */
        expires_at?: number;
        [key: string]: unknown;
      };
    };
    /** Make a Sendbird user leave one or more joined group channels. */
    "sendbird.leave_group_channels": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /** Whether the user should leave all joined group channels. */
        should_leave_all?: boolean;
        /** The specific group channel URLs the user should leave. */
        channel_urls?: Array<string>;
        /** Restrict the leave operation to channels with this custom type. */
        custom_type?: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
      };
    };
    /** List banned users from a Sendbird group channel. */
    "sendbird.list_banned_members": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The pagination token returned by the previous response. */
        token?: string;
      };
      output: {
        /** The banned users returned by Sendbird. */
        banned_list: Array<{
          /** The unique ID of the banned user. */
          user_id: string;
          /** The nickname of the banned user. */
          nickname?: string;
          /** The profile image URL of the banned user. */
          profile_url?: string;
          /** The moderation reason returned by Sendbird. */
          description?: string;
          /**
           * The ban start timestamp in milliseconds.
           * @minimum 0
           */
          ban_start_at?: number;
          /**
           * The ban end timestamp in milliseconds.
           * @minimum 0
           */
          ban_end_at?: number;
          [key: string]: unknown;
        }>;
        /** The pagination token for the next page, or null when there is no next page. */
        next?: string | null;
        [key: string]: unknown;
      };
    };
    /** List messages from a Sendbird group channel around a timestamp or message anchor. */
    "sendbird.list_group_channel_messages": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The message anchor ID.
         * @minimum 0
         */
        message_id?: number;
        /**
         * The timestamp anchor in milliseconds.
         * @minimum 0
         */
        message_ts?: number;
        /**
         * The number of messages to return before the anchor.
         * @minimum 0
         * @maximum 200
         */
        prev_limit?: number;
        /**
         * The number of messages to return after the anchor.
         * @minimum 0
         * @maximum 200
         */
        next_limit?: number;
        /** Whether to include the anchor message. */
        include?: boolean;
        /** Whether to reverse the result ordering. */
        reverse?: boolean;
        /** Restrict results to a single sender ID. */
        sender_id?: string;
        /** Restrict results to the provided sender IDs. */
        sender_ids?: string | Array<string>;
        /** Restrict results to the provided Sendbird message types. */
        message_type?: string;
        /** Restrict results to the provided custom message types. */
        custom_types?: string | Array<string>;
        /** Filter by whether the sender is an operator. */
        operator_filter?: string;
        /** Whether to include reaction information. */
        include_reactions?: boolean;
        /** Whether to include removed messages. */
        including_removed?: boolean;
        /** The reply-type filter supported by Sendbird. */
        include_reply_type?: string;
        /** Whether to include thread information. */
        include_thread_info?: boolean;
        /** Whether to include poll details. */
        include_poll_details?: boolean;
        /** Whether to include parent message information. */
        include_parent_message_info?: boolean;
        /** Whether to include sorted metaarray values. */
        with_sorted_metaarray?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The messages returned by Sendbird. */
        messages: Array<{
          /**
           * The unique message ID.
           * @minimum 0
           */
          message_id: number;
          /** The Sendbird message type. */
          type?: string;
          /** The message text content. */
          message?: string;
          /** The custom message data payload. */
          data?: string;
          /** The channel URL containing the message. */
          channel_url?: string;
          /** The custom type assigned to the message. */
          custom_type?: string;
          /**
           * The message creation timestamp in milliseconds.
           * @minimum 0
           */
          created_at?: number;
          /**
           * The message update timestamp in milliseconds.
           * @minimum 0
           */
          updated_at?: number;
          /** The mention type used for the message. */
          mention_type?: string;
          /**
           * The parent message ID when the message is a thread reply.
           * @minimum 0
           */
          parent_message_id?: number;
          /** The user IDs mentioned by the message. */
          mentioned_user_ids?: Array<string>;
          /** The thread information returned by Sendbird. */
          thread_info?: Record<string, unknown>;
          /** The sender information reported by Sendbird. */
          user?: {
            /** The unique ID of the user. */
            user_id: string;
            /** The user's display nickname. */
            nickname?: string;
            /** The URL of the user's profile image. */
            profile_url?: string;
            /** The metadata attached to the user. */
            metadata?: Record<string, string>;
            /** Whether the user account is active. */
            is_active?: boolean;
            /** Whether the user is currently online. */
            is_online?: boolean;
            /** The issued access token when the API returns one. */
            access_token?: string;
            /**
             * The user creation timestamp in milliseconds.
             * @minimum 0
             */
            created_at?: number;
            /**
             * The user update timestamp in milliseconds.
             * @minimum 0
             */
            updated_at?: number;
            /**
             * The timestamp when the user was last seen online.
             * @minimum 0
             */
            last_seen_at?: number;
            /** The preferred language codes configured for the user. */
            preferred_languages?: Array<string>;
            /** The discovery keys associated with the user. */
            discovery_keys?: Array<string>;
            /** The custom type assigned to the user. */
            custom_type?: string;
            /** The phone number stored for the user. */
            phone_number?: string;
            /** Whether the user has logged in at least once. */
            has_ever_logged_in?: boolean;
            [key: string]: unknown;
          };
          [key: string]: unknown;
        }>;
        /** The pagination token for the next page when Sendbird returns one. */
        next?: string | null;
        [key: string]: unknown;
      };
    };
    /** List Sendbird group channels in the application with common filtering controls. */
    "sendbird.list_group_channels": {
      input: {
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The pagination token returned by the previous response. */
        token?: string;
        /** Filter by an exact channel name. */
        name?: string;
        /** Whether to include empty channels. */
        show_empty?: boolean;
        /** Whether to include frozen channels. */
        show_frozen?: boolean;
        /** Whether to include channel metadata. */
        show_metadata?: boolean;
        /** Whether to include channel members. */
        show_member?: boolean;
        /** Whether to include read receipts. */
        show_read_receipt?: boolean;
        /** Whether to include delivery receipts. */
        show_delivery_receipt?: boolean;
        /** Whether to include hidden channels. */
        show_hidden?: boolean;
        /** Whether to include detailed member information when supported by Sendbird. */
        show_member_info?: boolean;
        /** Filter by whether the channel is a supergroup. */
        super_mode?: "all" | "super" | "nonsuper";
        /** Filter by whether the channel is public. */
        public_mode?: "all" | "public" | "private";
        /** Filter by whether the channel is distinct. */
        distinct_mode?: "all" | "distinct" | "nondistinct";
        /** The hidden-mode filter supported by Sendbird. */
        hidden_mode?: string;
        /** Restrict results to the provided custom channel types. */
        custom_types?: Array<string>;
        /** Restrict results to the provided group channel URLs. */
        channel_urls?: Array<string>;
        /** Require at least one of the provided users to be in the channel. */
        members_include_in?: Array<string>;
        /** Require all of the provided users to be in the channel. */
        members_exactly_in?: Array<string>;
        /** Filter channels by a member nickname match. */
        members_nickname?: string;
        /** Filter by a substring of the channel URL. */
        url_contains?: string;
        /**
         * List channels created after this timestamp.
         * @minimum 0
         */
        created_after?: number;
        /**
         * List channels created before this timestamp.
         * @minimum 0
         */
        created_before?: number;
        /** Filter by the member state reported by Sendbird. */
        my_member_state?: "all" | "joined_only" | "invited_only" | "invited_by_friend" | "invited_by_non_friend";
        [key: string]: unknown;
      };
      output: {
        /** The group channels returned by Sendbird. */
        channels: Array<{
          /** The unique URL of the group channel. */
          channel_url: string;
          /** The channel name. */
          name?: string;
          /** The cover image URL of the channel. */
          cover_url?: string;
          /** The custom type assigned to the channel. */
          custom_type?: string;
          /** The custom data payload stored for the channel. */
          data?: string;
          /** The metadata returned for the channel. */
          metadata?: Record<string, string>;
          /** Whether the channel is distinct. */
          is_distinct?: boolean;
          /** Whether the channel is public. */
          is_public?: boolean;
          /** Whether the channel is a supergroup. */
          is_super?: boolean;
          /** Whether the channel is a broadcast channel. */
          is_broadcast?: boolean;
          /** Whether the channel is ephemeral. */
          is_ephemeral?: boolean;
          /**
           * The number of members in the channel.
           * @minimum 0
           */
          member_count?: number;
          /**
           * The channel creation timestamp in milliseconds.
           * @minimum 0
           */
          created_at?: number;
          /** The members returned as part of the channel response. */
          members?: Array<{
            /** The unique ID of the member. */
            user_id: string;
            /** The member nickname. */
            nickname?: string;
            /** The member profile image URL. */
            profile_url?: string;
            /** The metadata attached to the member. */
            metadata?: Record<string, unknown>;
            /** The membership state of the user in the channel. */
            state?: string;
            /** The member role reported by Sendbird. */
            role?: string;
            /** Whether the member is muted in the channel. */
            is_muted?: boolean;
            /** Whether the member is a channel operator. */
            is_operator?: boolean;
            /** Whether the member is currently online. */
            is_online?: boolean;
            /**
             * The timestamp when the member joined the channel.
             * @minimum 0
             */
            joined_at?: number;
            /**
             * The timestamp when the member was last seen.
             * @minimum 0
             */
            last_seen_at?: number;
            [key: string]: unknown;
          }>;
          /** The last message reported for the channel. */
          last_message?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** The pagination token for the next page, or null when there is no next page. */
        next?: string | null;
        [key: string]: unknown;
      };
    };
    /** List members of a Sendbird group channel. */
    "sendbird.list_members_group_channel": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The pagination token returned by the previous response. */
        token?: string;
        /**
         * The deprecated offset-based pagination value.
         * @minimum 0
         */
        offset?: number;
        /** The ordering of the returned members. */
        order?: "nickname_alphabetical" | "operator_alphabetical";
        /** Filter by operator status. */
        operator_filter?: "all" | "operator" | "nonoperator";
        /** Filter by membership state. */
        member_state_filter?: "all" | "joined_only" | "invited_only";
        /** Filter by whether the member is muted. */
        muted_member_filter?: "all" | "muted" | "unmuted";
        /** Filter by a member nickname prefix. */
        nickname_startswith?: string;
      };
      output: {
        /** The members returned by Sendbird. */
        members: Array<{
          /** The unique ID of the member. */
          user_id: string;
          /** The member nickname. */
          nickname?: string;
          /** The member profile image URL. */
          profile_url?: string;
          /** The metadata attached to the member. */
          metadata?: Record<string, unknown>;
          /** The membership state of the user in the channel. */
          state?: string;
          /** The member role reported by Sendbird. */
          role?: string;
          /** Whether the member is muted in the channel. */
          is_muted?: boolean;
          /** Whether the member is a channel operator. */
          is_operator?: boolean;
          /** Whether the member is currently online. */
          is_online?: boolean;
          /**
           * The timestamp when the member joined the channel.
           * @minimum 0
           */
          joined_at?: number;
          /**
           * The timestamp when the member was last seen.
           * @minimum 0
           */
          last_seen_at?: number;
          [key: string]: unknown;
        }>;
        /** The pagination token for the next page, or null when there is no next page. */
        next?: string | null;
        /**
         * The total number of matching members when Sendbird returns it.
         * @minimum 0
         */
        total_count?: number;
        [key: string]: unknown;
      };
    };
    /** List Sendbird users with common pagination and filtering controls. */
    "sendbird.list_users": {
      input: {
        /**
         * The maximum number of results to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The pagination token returned by the previous response. */
        token?: string;
        /** The result ordering returned by Sendbird. */
        order?: "nickname_alphabetical" | "created_at" | "user_id_alphabetical";
        /** Restrict results to the provided user IDs. */
        user_ids?: Array<string>;
        /** Filter by an exact nickname match. */
        nickname?: string;
        /** Filter by a nickname substring match. */
        nickname_contains?: string;
        /** Filter by a nickname prefix supported by the official API. */
        nickname_startswith?: string;
        /** The official active-mode filter. */
        active_mode?: "activated" | "deactivated" | "all";
        /** Whether to include bot users in the results. */
        show_bot?: boolean;
        /** The official metadata key filter. */
        metadatakey?: string;
        /** The official metadata values filter. */
        metadatavalues_in?: Array<string>;
        /** Filter by the user custom type when supported by Sendbird. */
        custom_type?: string;
        /** Filter by whether the user has logged in when supported by Sendbird. */
        has_ever_logged_in?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The users returned by Sendbird. */
        users: Array<{
          /** The unique ID of the user. */
          user_id: string;
          /** The user's display nickname. */
          nickname?: string;
          /** The URL of the user's profile image. */
          profile_url?: string;
          /** The metadata attached to the user. */
          metadata?: Record<string, string>;
          /** Whether the user account is active. */
          is_active?: boolean;
          /** Whether the user is currently online. */
          is_online?: boolean;
          /** The issued access token when the API returns one. */
          access_token?: string;
          /**
           * The user creation timestamp in milliseconds.
           * @minimum 0
           */
          created_at?: number;
          /**
           * The user update timestamp in milliseconds.
           * @minimum 0
           */
          updated_at?: number;
          /**
           * The timestamp when the user was last seen online.
           * @minimum 0
           */
          last_seen_at?: number;
          /** The preferred language codes configured for the user. */
          preferred_languages?: Array<string>;
          /** The discovery keys associated with the user. */
          discovery_keys?: Array<string>;
          /** The custom type assigned to the user. */
          custom_type?: string;
          /** The phone number stored for the user. */
          phone_number?: string;
          /** Whether the user has logged in at least once. */
          has_ever_logged_in?: boolean;
          [key: string]: unknown;
        }>;
        /** The pagination token for the next page, or null when there is no next page. */
        next?: string | null;
        [key: string]: unknown;
      };
    };
    /** Mark all messages as read for a Sendbird user. */
    "sendbird.mark_all_user_messages_as_read": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /** Limit the operation to the provided group channel URLs when supported by Sendbird. */
        channel_urls?: Array<string>;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
      };
    };
    /** Mute a user in a Sendbird group channel. */
    "sendbird.mute_user": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /**
         * The mute duration in seconds. Use 0 for an indefinite mute when supported by Sendbird.
         * @minimum 0
         */
        seconds?: number;
        /** The moderation reason to record. */
        description?: string;
      };
      output: {
        /** Whether the moderation request succeeded. */
        success?: boolean;
        /** The affected user ID when Sendbird returns one. */
        user_id?: string;
        /** The affected user nickname when Sendbird returns one. */
        nickname?: string;
        /** The affected user profile URL when Sendbird returns one. */
        profile_url?: string;
        /**
         * The moderation duration in seconds when Sendbird returns one.
         * @minimum 0
         */
        seconds?: number;
        /**
         * The moderation creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The moderation end timestamp in milliseconds.
         * @minimum 0
         */
        end_at?: number;
        /** The moderation reason returned by Sendbird. */
        description?: string;
        [key: string]: unknown;
      };
    };
    /** Revoke all Sendbird session tokens for a user. */
    "sendbird.revoke_all_session_tokens": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** Whether the request succeeded. */
        success: boolean;
      };
    };
    /** Send a message into a Sendbird group channel. */
    "sendbird.send_message": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The Sendbird message type to create.
         * @minLength 1
         */
        message_type: string;
        /** The message text content. */
        message?: string;
        /** The acting Sendbird user ID. */
        user_id?: string;
        /** The custom data payload for the message. */
        data?: string;
        /** The custom type assigned to the message. */
        custom_type?: string;
        /** The mention type for the message. */
        mention_type?: string;
        /** The user IDs to mention in the message. */
        mentioned_user_ids?: Array<string>;
        /**
         * The parent message ID when creating a thread reply.
         * @minimum 0
         */
        parent_message_id?: number;
        /** Whether the message should be silent. */
        is_silent?: boolean;
        /** Whether the message should be marked as an operator message. */
        is_operator_message?: boolean;
        /** The push notification delivery option to use. */
        push_notification_delivery_option?: string;
        /** The target language codes for automatic translation. */
        translation_target_languages?: Array<string>;
        /** The metadata entries to store for the message. */
        metaarray?: Array<{
          /** The metadata key. */
          key: string;
          /** The metadata value. */
          value: string;
          /** The metadata user ID when provided. */
          user_id?: string;
          [key: string]: unknown;
        }>;
        [key: string]: unknown;
      };
      output: {
        /**
         * The unique message ID.
         * @minimum 0
         */
        message_id: number;
        /** The Sendbird message type. */
        type?: string;
        /** The message text content. */
        message?: string;
        /** The custom message data payload. */
        data?: string;
        /** The channel URL containing the message. */
        channel_url?: string;
        /** The custom type assigned to the message. */
        custom_type?: string;
        /**
         * The message creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The message update timestamp in milliseconds.
         * @minimum 0
         */
        updated_at?: number;
        /** The mention type used for the message. */
        mention_type?: string;
        /**
         * The parent message ID when the message is a thread reply.
         * @minimum 0
         */
        parent_message_id?: number;
        /** The user IDs mentioned by the message. */
        mentioned_user_ids?: Array<string>;
        /** The thread information returned by Sendbird. */
        thread_info?: Record<string, unknown>;
        /** The sender information reported by Sendbird. */
        user?: {
          /** The unique ID of the user. */
          user_id: string;
          /** The user's display nickname. */
          nickname?: string;
          /** The URL of the user's profile image. */
          profile_url?: string;
          /** The metadata attached to the user. */
          metadata?: Record<string, string>;
          /** Whether the user account is active. */
          is_active?: boolean;
          /** Whether the user is currently online. */
          is_online?: boolean;
          /** The issued access token when the API returns one. */
          access_token?: string;
          /**
           * The user creation timestamp in milliseconds.
           * @minimum 0
           */
          created_at?: number;
          /**
           * The user update timestamp in milliseconds.
           * @minimum 0
           */
          updated_at?: number;
          /**
           * The timestamp when the user was last seen online.
           * @minimum 0
           */
          last_seen_at?: number;
          /** The preferred language codes configured for the user. */
          preferred_languages?: Array<string>;
          /** The discovery keys associated with the user. */
          discovery_keys?: Array<string>;
          /** The custom type assigned to the user. */
          custom_type?: string;
          /** The phone number stored for the user. */
          phone_number?: string;
          /** Whether the user has logged in at least once. */
          has_ever_logged_in?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Unban a user from a Sendbird group channel. */
    "sendbird.unban_user": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The banned user ID to unban from the channel.
         * @minLength 1
         */
        banned_user_id: string;
      };
      output: {
        /** Whether the moderation request succeeded. */
        success?: boolean;
        /** The affected user ID when Sendbird returns one. */
        user_id?: string;
        /** The affected user nickname when Sendbird returns one. */
        nickname?: string;
        /** The affected user profile URL when Sendbird returns one. */
        profile_url?: string;
        /**
         * The moderation duration in seconds when Sendbird returns one.
         * @minimum 0
         */
        seconds?: number;
        /**
         * The moderation creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The moderation end timestamp in milliseconds.
         * @minimum 0
         */
        end_at?: number;
        /** The moderation reason returned by Sendbird. */
        description?: string;
        [key: string]: unknown;
      };
    };
    /** Unmute a user in a Sendbird group channel. */
    "sendbird.unmute_user": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The muted user ID to unmute from the channel.
         * @minLength 1
         */
        muted_user_id: string;
      };
      output: {
        /** Whether the moderation request succeeded. */
        success?: boolean;
        /** The affected user ID when Sendbird returns one. */
        user_id?: string;
        /** The affected user nickname when Sendbird returns one. */
        nickname?: string;
        /** The affected user profile URL when Sendbird returns one. */
        profile_url?: string;
        /**
         * The moderation duration in seconds when Sendbird returns one.
         * @minimum 0
         */
        seconds?: number;
        /**
         * The moderation creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The moderation end timestamp in milliseconds.
         * @minimum 0
         */
        end_at?: number;
        /** The moderation reason returned by Sendbird. */
        description?: string;
        [key: string]: unknown;
      };
    };
    /** Update a Sendbird group channel with common JSON body fields. */
    "sendbird.update_group_channel": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /** The new channel name. */
        name?: string;
        /** The new cover image URL. */
        cover_url?: string;
        /** The custom type to assign to the channel. */
        custom_type?: string;
        /** The custom data payload to store for the channel. */
        data?: string;
        /** The user IDs to assign as operators. */
        operators?: Array<string>;
        /** Whether the channel should be distinct. */
        is_distinct?: boolean;
        /** Whether the channel should be public. */
        is_public?: boolean;
        /** Whether the channel should be a supergroup. */
        is_super?: boolean;
        /** Whether the channel should be ephemeral. */
        is_ephemeral?: boolean;
        /** The access code to assign to the channel. */
        access_code?: string;
        /** The count preference to store when supported by Sendbird. */
        my_count_preference?: string;
        [key: string]: unknown;
      };
      output: {
        /** The unique URL of the group channel. */
        channel_url: string;
        /** The channel name. */
        name?: string;
        /** The cover image URL of the channel. */
        cover_url?: string;
        /** The custom type assigned to the channel. */
        custom_type?: string;
        /** The custom data payload stored for the channel. */
        data?: string;
        /** The metadata returned for the channel. */
        metadata?: Record<string, string>;
        /** Whether the channel is distinct. */
        is_distinct?: boolean;
        /** Whether the channel is public. */
        is_public?: boolean;
        /** Whether the channel is a supergroup. */
        is_super?: boolean;
        /** Whether the channel is a broadcast channel. */
        is_broadcast?: boolean;
        /** Whether the channel is ephemeral. */
        is_ephemeral?: boolean;
        /**
         * The number of members in the channel.
         * @minimum 0
         */
        member_count?: number;
        /**
         * The channel creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /** The members returned as part of the channel response. */
        members?: Array<{
          /** The unique ID of the member. */
          user_id: string;
          /** The member nickname. */
          nickname?: string;
          /** The member profile image URL. */
          profile_url?: string;
          /** The metadata attached to the member. */
          metadata?: Record<string, unknown>;
          /** The membership state of the user in the channel. */
          state?: string;
          /** The member role reported by Sendbird. */
          role?: string;
          /** Whether the member is muted in the channel. */
          is_muted?: boolean;
          /** Whether the member is a channel operator. */
          is_operator?: boolean;
          /** Whether the member is currently online. */
          is_online?: boolean;
          /**
           * The timestamp when the member joined the channel.
           * @minimum 0
           */
          joined_at?: number;
          /**
           * The timestamp when the member was last seen.
           * @minimum 0
           */
          last_seen_at?: number;
          [key: string]: unknown;
        }>;
        /** The last message reported for the channel. */
        last_message?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Update an existing Sendbird group channel message. */
    "sendbird.update_message": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The numeric identifier of the Sendbird message.
         * @minimum 0
         */
        message_id: number;
        /** The updated message text content. */
        message?: string;
        /** The updated custom data payload. */
        data?: string;
        /** The acting Sendbird user ID. */
        user_id?: string;
        /** The updated custom type. */
        custom_type?: string;
        /** The updated mention type. */
        mention_type?: string;
        /** The updated mentioned user IDs. */
        mentioned_user_ids?: Array<string>;
        /** Whether the update should be silent. */
        is_silent?: boolean;
        /** The push notification delivery option to use. */
        push_notification_delivery_option?: string;
        /** The sorted metaarray payload to store for the message. */
        sorted_metaarray?: Array<Record<string, unknown>>;
        [key: string]: unknown;
      };
      output: {
        /**
         * The unique message ID.
         * @minimum 0
         */
        message_id: number;
        /** The Sendbird message type. */
        type?: string;
        /** The message text content. */
        message?: string;
        /** The custom message data payload. */
        data?: string;
        /** The channel URL containing the message. */
        channel_url?: string;
        /** The custom type assigned to the message. */
        custom_type?: string;
        /**
         * The message creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The message update timestamp in milliseconds.
         * @minimum 0
         */
        updated_at?: number;
        /** The mention type used for the message. */
        mention_type?: string;
        /**
         * The parent message ID when the message is a thread reply.
         * @minimum 0
         */
        parent_message_id?: number;
        /** The user IDs mentioned by the message. */
        mentioned_user_ids?: Array<string>;
        /** The thread information returned by Sendbird. */
        thread_info?: Record<string, unknown>;
        /** The sender information reported by Sendbird. */
        user?: {
          /** The unique ID of the user. */
          user_id: string;
          /** The user's display nickname. */
          nickname?: string;
          /** The URL of the user's profile image. */
          profile_url?: string;
          /** The metadata attached to the user. */
          metadata?: Record<string, string>;
          /** Whether the user account is active. */
          is_active?: boolean;
          /** Whether the user is currently online. */
          is_online?: boolean;
          /** The issued access token when the API returns one. */
          access_token?: string;
          /**
           * The user creation timestamp in milliseconds.
           * @minimum 0
           */
          created_at?: number;
          /**
           * The user update timestamp in milliseconds.
           * @minimum 0
           */
          updated_at?: number;
          /**
           * The timestamp when the user was last seen online.
           * @minimum 0
           */
          last_seen_at?: number;
          /** The preferred language codes configured for the user. */
          preferred_languages?: Array<string>;
          /** The discovery keys associated with the user. */
          discovery_keys?: Array<string>;
          /** The custom type assigned to the user. */
          custom_type?: string;
          /** The phone number stored for the user. */
          phone_number?: string;
          /** Whether the user has logged in at least once. */
          has_ever_logged_in?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Update a Sendbird user's profile, metadata, or activation settings. */
    "sendbird.update_user": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
        /** The new nickname for the user. */
        nickname?: string;
        /** The new profile image URL. */
        profile_url?: string;
        /** The metadata to store for the user. */
        metadata?: Record<string, string>;
        /** Whether Sendbird should issue a new access token for the user. */
        issue_access_token?: boolean;
        /** The preferred language codes to store for the user. */
        preferred_languages?: Array<string>;
        /** Whether the user should remain active. */
        is_active?: boolean;
        /** The phone number to store for the user. */
        phone_number?: string;
        /** Whether the user has logged in before when supported by Sendbird. */
        has_ever_logged_in?: boolean;
        [key: string]: unknown;
      };
      output: {
        /** The unique ID of the user. */
        user_id: string;
        /** The user's display nickname. */
        nickname?: string;
        /** The URL of the user's profile image. */
        profile_url?: string;
        /** The metadata attached to the user. */
        metadata?: Record<string, string>;
        /** Whether the user account is active. */
        is_active?: boolean;
        /** Whether the user is currently online. */
        is_online?: boolean;
        /** The issued access token when the API returns one. */
        access_token?: string;
        /**
         * The user creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The user update timestamp in milliseconds.
         * @minimum 0
         */
        updated_at?: number;
        /**
         * The timestamp when the user was last seen online.
         * @minimum 0
         */
        last_seen_at?: number;
        /** The preferred language codes configured for the user. */
        preferred_languages?: Array<string>;
        /** The discovery keys associated with the user. */
        discovery_keys?: Array<string>;
        /** The custom type assigned to the user. */
        custom_type?: string;
        /** The phone number stored for the user. */
        phone_number?: string;
        /** Whether the user has logged in at least once. */
        has_ever_logged_in?: boolean;
        [key: string]: unknown;
      };
    };
    /** Get a Sendbird group channel by channel URL. */
    "sendbird.view_group_channel": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /** Whether to include the member list. */
        show_member?: boolean;
        /** Whether to include channel metadata. */
        show_metadata?: boolean;
        /** Whether to include read receipt data. */
        show_read_receipt?: boolean;
        /** Whether to include delivery receipt data. */
        show_delivery_receipt?: boolean;
        /** Whether to include migration information when available. */
        show_migration_info?: boolean;
      };
      output: {
        /** The unique URL of the group channel. */
        channel_url: string;
        /** The channel name. */
        name?: string;
        /** The cover image URL of the channel. */
        cover_url?: string;
        /** The custom type assigned to the channel. */
        custom_type?: string;
        /** The custom data payload stored for the channel. */
        data?: string;
        /** The metadata returned for the channel. */
        metadata?: Record<string, string>;
        /** Whether the channel is distinct. */
        is_distinct?: boolean;
        /** Whether the channel is public. */
        is_public?: boolean;
        /** Whether the channel is a supergroup. */
        is_super?: boolean;
        /** Whether the channel is a broadcast channel. */
        is_broadcast?: boolean;
        /** Whether the channel is ephemeral. */
        is_ephemeral?: boolean;
        /**
         * The number of members in the channel.
         * @minimum 0
         */
        member_count?: number;
        /**
         * The channel creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /** The members returned as part of the channel response. */
        members?: Array<{
          /** The unique ID of the member. */
          user_id: string;
          /** The member nickname. */
          nickname?: string;
          /** The member profile image URL. */
          profile_url?: string;
          /** The metadata attached to the member. */
          metadata?: Record<string, unknown>;
          /** The membership state of the user in the channel. */
          state?: string;
          /** The member role reported by Sendbird. */
          role?: string;
          /** Whether the member is muted in the channel. */
          is_muted?: boolean;
          /** Whether the member is a channel operator. */
          is_operator?: boolean;
          /** Whether the member is currently online. */
          is_online?: boolean;
          /**
           * The timestamp when the member joined the channel.
           * @minimum 0
           */
          joined_at?: number;
          /**
           * The timestamp when the member was last seen.
           * @minimum 0
           */
          last_seen_at?: number;
          [key: string]: unknown;
        }>;
        /** The last message reported for the channel. */
        last_message?: Record<string, unknown>;
        [key: string]: unknown;
      };
    };
    /** Get a single Sendbird group channel message by message ID. */
    "sendbird.view_message": {
      input: {
        /**
         * The unique URL of the target group channel.
         * @minLength 1
         */
        channel_url: string;
        /**
         * The numeric identifier of the Sendbird message.
         * @minimum 0
         */
        message_id: number;
        /** Whether to include sorted metaarray values. */
        with_sorted_metaarray?: boolean;
      };
      output: {
        /**
         * The unique message ID.
         * @minimum 0
         */
        message_id: number;
        /** The Sendbird message type. */
        type?: string;
        /** The message text content. */
        message?: string;
        /** The custom message data payload. */
        data?: string;
        /** The channel URL containing the message. */
        channel_url?: string;
        /** The custom type assigned to the message. */
        custom_type?: string;
        /**
         * The message creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The message update timestamp in milliseconds.
         * @minimum 0
         */
        updated_at?: number;
        /** The mention type used for the message. */
        mention_type?: string;
        /**
         * The parent message ID when the message is a thread reply.
         * @minimum 0
         */
        parent_message_id?: number;
        /** The user IDs mentioned by the message. */
        mentioned_user_ids?: Array<string>;
        /** The thread information returned by Sendbird. */
        thread_info?: Record<string, unknown>;
        /** The sender information reported by Sendbird. */
        user?: {
          /** The unique ID of the user. */
          user_id: string;
          /** The user's display nickname. */
          nickname?: string;
          /** The URL of the user's profile image. */
          profile_url?: string;
          /** The metadata attached to the user. */
          metadata?: Record<string, string>;
          /** Whether the user account is active. */
          is_active?: boolean;
          /** Whether the user is currently online. */
          is_online?: boolean;
          /** The issued access token when the API returns one. */
          access_token?: string;
          /**
           * The user creation timestamp in milliseconds.
           * @minimum 0
           */
          created_at?: number;
          /**
           * The user update timestamp in milliseconds.
           * @minimum 0
           */
          updated_at?: number;
          /**
           * The timestamp when the user was last seen online.
           * @minimum 0
           */
          last_seen_at?: number;
          /** The preferred language codes configured for the user. */
          preferred_languages?: Array<string>;
          /** The discovery keys associated with the user. */
          discovery_keys?: Array<string>;
          /** The custom type assigned to the user. */
          custom_type?: string;
          /** The phone number stored for the user. */
          phone_number?: string;
          /** Whether the user has logged in at least once. */
          has_ever_logged_in?: boolean;
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
    };
    /** Get a single Sendbird user by user ID. */
    "sendbird.view_user": {
      input: {
        /**
         * The Sendbird user ID.
         * @minLength 1
         */
        user_id: string;
      };
      output: {
        /** The unique ID of the user. */
        user_id: string;
        /** The user's display nickname. */
        nickname?: string;
        /** The URL of the user's profile image. */
        profile_url?: string;
        /** The metadata attached to the user. */
        metadata?: Record<string, string>;
        /** Whether the user account is active. */
        is_active?: boolean;
        /** Whether the user is currently online. */
        is_online?: boolean;
        /** The issued access token when the API returns one. */
        access_token?: string;
        /**
         * The user creation timestamp in milliseconds.
         * @minimum 0
         */
        created_at?: number;
        /**
         * The user update timestamp in milliseconds.
         * @minimum 0
         */
        updated_at?: number;
        /**
         * The timestamp when the user was last seen online.
         * @minimum 0
         */
        last_seen_at?: number;
        /** The preferred language codes configured for the user. */
        preferred_languages?: Array<string>;
        /** The discovery keys associated with the user. */
        discovery_keys?: Array<string>;
        /** The custom type assigned to the user. */
        custom_type?: string;
        /** The phone number stored for the user. */
        phone_number?: string;
        /** Whether the user has logged in at least once. */
        has_ever_logged_in?: boolean;
        [key: string]: unknown;
      };
    };
  }
}
