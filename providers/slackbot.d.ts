import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an emoji reaction to a Slack message. */
    "slackbot.add_reaction": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The Slack message timestamp, for example '1711.0001'.
         * @minLength 1
         */
        messageTs: string;
        /**
         * The emoji reaction name without surrounding colons.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether Slack accepted the reaction request. */
        success: boolean;
      };
    };
    /** List one page of member user IDs for a Slack conversation. */
    "slackbot.conversations_members": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /** The pagination cursor returned by the previous page. */
        cursor?: string;
        /**
         * The maximum number of members to return.
         * @minimum 1
         * @maximum 1000
         */
        limit?: number;
      };
      output: {
        /** The member user IDs. */
        memberIds: Array<string>;
        /** The cursor for the next page. */
        nextCursor: string | null;
      };
    };
    /** Delete a Slack file. */
    "slackbot.delete_file": {
      input: {
        /**
         * The Slack file ID.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** Whether Slack accepted the file delete request. */
        success: boolean;
        /** The Slack file ID that was deleted. */
        fileId: string;
      };
    };
    /** Delete a Slack message posted through this connection. */
    "slackbot.delete_message": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The Slack message timestamp, for example '1711.0001'.
         * @minLength 1
         */
        messageTs: string;
      };
      output: {
        /** The conversation identifier containing the message. */
        channelId: string;
        /** The timestamp identifier of the message. */
        messageTs: string;
      };
    };
    /** Download a Slack-hosted file into Connector file transit storage using the connected identity's access. */
    "slackbot.download_file": {
      input: {
        /**
         * The Slack file ID.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /**
         * The Slack file ID.
         * @minLength 1
         */
        fileId: string;
        /**
         * The stored file name.
         * @minLength 1
         */
        name: string;
        /**
         * The stored file MIME type.
         * @minLength 1
         */
        mimeType: string;
        /**
         * The Slack-reported file size in bytes.
         * @minimum 0
         */
        sizeBytes: number;
        /**
         * The temporary Connector URL for downloading the stored file.
         * @format uri
         */
        transitUrl: string;
      };
    };
    /** Get recent messages from a Slack conversation. */
    "slackbot.get_channel_messages": {
      input: {
        /** Include the complete unmodified Slack message. History and thread requests also request message metadata. */
        includeRaw?: boolean;
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The maximum number of messages to return.
         * @minimum 1
         * @maximum 999
         */
        limit?: number;
        /** The pagination cursor returned by the previous page. */
        cursor?: string;
        /** Only return messages after this Slack timestamp. */
        oldest?: string;
        /** Only return messages before this Slack timestamp. */
        latest?: string;
        /** Include messages exactly at oldest or latest when a bound is set. */
        inclusive?: boolean;
      };
      output: {
        /** The list of messages in the conversation. */
        messages: Array<{
          /** The message timestamp identifier. */
          ts?: string;
          /** The Slack message type, normally 'message'. */
          type?: string;
          /** The Slack message subtype ('channel_join', 'bot_message', …) when the message has one. */
          subtype?: string;
          /** The user ID of the message author. */
          userId?: string;
          /** The bot ID of the message author when a bot posted it. */
          botId?: string;
          /** The Slack app ID that posted the message when an app posted it. */
          appId?: string;
          /** The display username Slack attached to a bot or app message. */
          username?: string;
          /** The Slack team ID the message belongs to. */
          teamId?: string;
          /** The client-generated message identifier when Slack returns one. */
          clientMsgId?: string;
          /** The text content of the message. */
          text?: string;
          /** The timestamp of the most recent edit, when the message was edited. */
          editedTs?: string;
          /** The user ID of the most recent editor, when the message was edited. */
          editedUserId?: string;
          /** The timestamp of the thread parent. Equal to ts on a thread parent, and absent on a message that is not in a thread. */
          threadTs?: string;
          /** The author of the thread parent, on a threaded reply. */
          parentUserId?: string;
          /** The number of replies to this thread parent. */
          replyCount?: number;
          /** The number of distinct users who replied to this thread parent. */
          replyUsersCount?: number;
          /** Up to five user IDs of people who replied to this thread parent. Slack caps this list; use replyUsersCount for the total. */
          replyUserIds?: Array<string>;
          /** The timestamp of the most recent reply to this thread parent. */
          latestReply?: string;
          /** Whether the thread is locked. */
          isLocked?: boolean;
          /** Reaction summaries attached to the message. */
          reactions?: Array<{
            /** The emoji name of the reaction. */
            name?: string;
            /** How many users added this reaction. */
            count?: number;
            /** The users who added this reaction, as far as Slack reports them. */
            userIds?: Array<string>;
            [key: string]: unknown;
          }>;
          /** The untouched Slack record, exactly as the Slack API returned it. Present only when includeRaw is true. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Whether more messages are available beyond this page. */
        hasMore: boolean;
        /** The cursor for the next page. */
        nextCursor: string | null;
      };
    };
    /** Get metadata for a Slack conversation. */
    "slackbot.get_conversation": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /** Whether Slack should include the locale field. */
        includeLocale?: boolean;
        /** Whether Slack should include the member count field. */
        includeNumMembers?: boolean;
      };
      output: {
        /** A normalized Slack conversation record. */
        conversation: {
          /** The unique identifier of the conversation. */
          channelId: string;
          /** The name of the conversation when available. */
          name: string | null;
          /** The normalized Slack conversation type. */
          type: "public_channel" | "private_channel" | "im" | "mpim" | "unknown";
          /** Whether the conversation is archived. */
          isArchived: boolean | null;
          /** Whether the conversation is private. */
          isPrivate: boolean | null;
          /** Whether the connected Slack identity is a member. */
          isMember: boolean | null;
          /** The member count when Slack provides it. */
          memberCount?: number;
          /** The conversation topic. */
          topic: string | null;
          /** The conversation purpose. */
          purpose: string | null;
          /** The linked user identifier for IM conversations. */
          userId?: string;
          /** The locale returned by Slack when requested. */
          locale?: string;
          /** Creation time as a Unix timestamp in seconds when Slack provides it. */
          created?: number;
          /** Last settings update time, passed through as Slack returns it. Slack documents epoch milliseconds for channels (unlike created) and a Unix timestamp for legacy IM and MPIM objects. */
          updated?: number;
          /** The user who created the conversation when Slack provides it. */
          creatorId?: string;
          /** Whether the conversation is shared with another workspace. */
          isShared?: boolean;
          /** Whether the conversation is shared with an external organization. */
          isExtShared?: boolean;
          /** Whether the conversation is shared between workspaces of the same Enterprise organization. */
          isOrgShared?: boolean;
          /** The ID of the workspace the conversation is within when Slack provides it. */
          contextTeamId?: string;
          /** The last-read message timestamp when Slack provides it. */
          lastRead?: string;
          /** The unread message count when Slack provides it. */
          unreadCount?: number;
        };
      };
    };
    /** Get the workspace and user identity of the connected Slack credential. */
    "slackbot.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * The Slack workspace ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * The Slack user ID.
         * @minLength 1
         */
        userId: string;
        /** Whether the credential belongs to a bot. */
        isBot: boolean;
      };
    };
    /** Get metadata for a Slack file. */
    "slackbot.get_file": {
      input: {
        /**
         * The Slack file ID.
         * @minLength 1
         */
        fileId: string;
      };
      output: {
        /** A Slack file object returned by the Web API. */
        file: {
          /** The Slack file ID. */
          fileId?: string;
          /** The file name. */
          name?: string;
          /** The file title. */
          title?: string;
          /** The file MIME type. */
          mimetype?: string;
          /** The private Slack URL for the file when returned. */
          urlPrivate?: string;
          [key: string]: unknown;
        };
      };
    };
    /** Get a permalink for a Slack message. */
    "slackbot.get_message_permalink": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The Slack message timestamp, for example '1711.0001'.
         * @minLength 1
         */
        messageTs: string;
      };
      output: {
        /** The conversation identifier containing the target message. */
        channelId: string;
        /** The timestamp identifier of the target message. */
        messageTs: string;
        /** The permalink URL returned by Slack. */
        permalink: string;
      };
    };
    /** Get reactions for a Slack message. */
    "slackbot.get_reactions": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The Slack message timestamp, for example '1711.0001'.
         * @minLength 1
         */
        messageTs: string;
        /** Whether Slack should return the complete reaction user lists. */
        full?: boolean;
      };
      output: {
        /** A Slack item with reactions. */
        item: Record<string, unknown>;
      };
    };
    /** Get messages in a Slack thread. */
    "slackbot.get_thread": {
      input: {
        /** Include the complete unmodified Slack message. History and thread requests also request message metadata. */
        includeRaw?: boolean;
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The timestamp of the parent message.
         * @minLength 1
         */
        threadTs: string;
        /**
         * The maximum number of messages to return.
         * @minimum 1
         * @maximum 999
         */
        limit?: number;
        /** The pagination cursor returned by the previous page. */
        cursor?: string;
        /** Only return messages after this Slack timestamp. */
        oldest?: string;
        /** Only return messages before this Slack timestamp. */
        latest?: string;
        /** Include messages exactly at oldest or latest when a bound is set. */
        inclusive?: boolean;
      };
      output: {
        /** The list of messages in the thread. */
        messages: Array<{
          /** The message timestamp identifier. */
          ts?: string;
          /** The Slack message type, normally 'message'. */
          type?: string;
          /** The Slack message subtype ('channel_join', 'bot_message', …) when the message has one. */
          subtype?: string;
          /** The user ID of the message author. */
          userId?: string;
          /** The bot ID of the message author when a bot posted it. */
          botId?: string;
          /** The Slack app ID that posted the message when an app posted it. */
          appId?: string;
          /** The display username Slack attached to a bot or app message. */
          username?: string;
          /** The Slack team ID the message belongs to. */
          teamId?: string;
          /** The client-generated message identifier when Slack returns one. */
          clientMsgId?: string;
          /** The text content of the message. */
          text?: string;
          /** The timestamp of the most recent edit, when the message was edited. */
          editedTs?: string;
          /** The user ID of the most recent editor, when the message was edited. */
          editedUserId?: string;
          /** The timestamp of the thread parent. Equal to ts on a thread parent, and absent on a message that is not in a thread. */
          threadTs?: string;
          /** The author of the thread parent, on a threaded reply. */
          parentUserId?: string;
          /** The number of replies to this thread parent. */
          replyCount?: number;
          /** The number of distinct users who replied to this thread parent. */
          replyUsersCount?: number;
          /** Up to five user IDs of people who replied to this thread parent. Slack caps this list; use replyUsersCount for the total. */
          replyUserIds?: Array<string>;
          /** The timestamp of the most recent reply to this thread parent. */
          latestReply?: string;
          /** Whether the thread is locked. */
          isLocked?: boolean;
          /** Reaction summaries attached to the message. */
          reactions?: Array<{
            /** The emoji name of the reaction. */
            name?: string;
            /** How many users added this reaction. */
            count?: number;
            /** The users who added this reaction, as far as Slack reports them. */
            userIds?: Array<string>;
            [key: string]: unknown;
          }>;
          /** The untouched Slack record, exactly as the Slack API returned it. Present only when includeRaw is true. */
          raw?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Whether more messages are available beyond this page. */
        hasMore: boolean;
        /** The cursor for the next page. */
        nextCursor: string | null;
      };
    };
    /** Get metadata for a Slack user. */
    "slackbot.get_user": {
      input: {
        /**
         * The Slack user ID.
         * @minLength 1
         */
        userId: string;
        /** Whether Slack should include the locale field. */
        includeLocale?: boolean;
      };
      output: {
        /** A normalized Slack user record. */
        user: {
          /** The unique identifier of the user. */
          userId: string;
          /** The username of the user. */
          username: string | null;
          /** The real name of the user. */
          realName: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** Whether the user is a bot user. */
          isBot: boolean | null;
          /** Whether the user is deleted. */
          isDeleted: boolean | null;
          /** Whether the user is an admin. */
          isAdmin: boolean | null;
          /** Whether the user is an owner. */
          isOwner: boolean | null;
          /** The locale returned by Slack when requested. */
          locale?: string;
          /** The profile email. Slack returns it only when the token holds the users:read.email scope. */
          email?: string;
          /** The user's time zone identifier when Slack provides it. */
          tz?: string;
          /** The user's UTC offset in seconds when Slack provides it. */
          tzOffset?: number;
          /** When the user object was last updated, as a Unix timestamp in seconds. */
          updated?: number;
          /** The user's team ID when Slack provides it. */
          teamId?: string;
          /** Whether the user is a guest. Single-channel guests also set isUltraRestricted. */
          isRestricted?: boolean;
          /** Whether the user is a single-channel guest. */
          isUltraRestricted?: boolean;
          /** Whether the user is an authorized user of the calling app. */
          isAppUser?: boolean;
        };
      };
    };
    /** List Slack public channels visible to the connected Slack identity. */
    "slackbot.list_channels": {
      input: {
        /**
         * The maximum number of channels to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The list of Slack channels. */
        channels: Array<{
          /** The unique identifier of the channel. */
          channelId: string;
          /** The name of the channel. */
          name: string;
        }>;
      };
    };
    /** List Slack conversations visible to the connected Slack identity. */
    "slackbot.list_conversations": {
      input: {
        /**
         * The maximum number of conversations to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The Slack pagination cursor. */
        cursor?: string;
        /**
         * Conversation types to include.
         * @minItems 1
         */
        types?: Array<"public_channel" | "private_channel" | "im" | "mpim">;
        /** Whether archived conversations should be excluded. */
        excludeArchived?: boolean;
      };
      output: {
        /** The list of Slack conversations. */
        conversations: Array<{
          /** The unique identifier of the conversation. */
          channelId: string;
          /** The name of the conversation when available. */
          name: string | null;
          /** The normalized Slack conversation type. */
          type: "public_channel" | "private_channel" | "im" | "mpim" | "unknown";
          /** Whether the conversation is archived. */
          isArchived: boolean | null;
          /** Whether the conversation is private. */
          isPrivate: boolean | null;
          /** Whether the connected Slack identity is a member. */
          isMember: boolean | null;
          /** The member count when Slack provides it. */
          memberCount?: number;
          /** The conversation topic. */
          topic: string | null;
          /** The conversation purpose. */
          purpose: string | null;
          /** The linked user identifier for IM conversations. */
          userId?: string;
          /** The locale returned by Slack when requested. */
          locale?: string;
          /** Creation time as a Unix timestamp in seconds when Slack provides it. */
          created?: number;
          /** Last settings update time, passed through as Slack returns it. Slack documents epoch milliseconds for channels (unlike created) and a Unix timestamp for legacy IM and MPIM objects. */
          updated?: number;
          /** The user who created the conversation when Slack provides it. */
          creatorId?: string;
          /** Whether the conversation is shared with another workspace. */
          isShared?: boolean;
          /** Whether the conversation is shared with an external organization. */
          isExtShared?: boolean;
          /** Whether the conversation is shared between workspaces of the same Enterprise organization. */
          isOrgShared?: boolean;
          /** The ID of the workspace the conversation is within when Slack provides it. */
          contextTeamId?: string;
          /** The last-read message timestamp when Slack provides it. */
          lastRead?: string;
          /** The unread message count when Slack provides it. */
          unreadCount?: number;
        }>;
        /** The cursor for the next page. */
        nextCursor: string | null;
      };
    };
    /** List Slack files visible to the connected Slack identity, optionally filtered by channel or user. */
    "slackbot.list_files": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId?: string;
        /**
         * The Slack user ID.
         * @minLength 1
         */
        userId?: string;
        /** Comma-separated Slack file type filters, for example 'images,pdfs'. */
        types?: string;
        /**
         * The page number to fetch.
         * @minimum 1
         */
        page?: number;
        /**
         * The number of files to return.
         * @minimum 1
         * @maximum 1000
         */
        count?: number;
      };
      output: {
        /** The Slack files returned by Slack. */
        files: Array<{
          /** The Slack file ID. */
          fileId?: string;
          /** The file name. */
          name?: string;
          /** The file title. */
          title?: string;
          /** The file MIME type. */
          mimetype?: string;
          /** The private Slack URL for the file when returned. */
          urlPrivate?: string;
          [key: string]: unknown;
        }>;
        /** Slack paging metadata when returned. */
        paging: Record<string, unknown>;
      };
    };
    /** List Slack users visible to the connected Slack identity. */
    "slackbot.list_users": {
      input: {
        /**
         * The maximum number of users to return.
         * @minimum 1
         * @maximum 200
         */
        limit?: number;
        /** The Slack pagination cursor. */
        cursor?: string;
        /** Whether Slack should include the locale field. */
        includeLocale?: boolean;
      };
      output: {
        /** The list of Slack users. */
        users: Array<{
          /** The unique identifier of the user. */
          userId: string;
          /** The username of the user. */
          username: string | null;
          /** The real name of the user. */
          realName: string | null;
          /** The display name of the user. */
          displayName: string | null;
          /** Whether the user is a bot user. */
          isBot: boolean | null;
          /** Whether the user is deleted. */
          isDeleted: boolean | null;
          /** Whether the user is an admin. */
          isAdmin: boolean | null;
          /** Whether the user is an owner. */
          isOwner: boolean | null;
          /** The locale returned by Slack when requested. */
          locale?: string;
          /** The profile email. Slack returns it only when the token holds the users:read.email scope. */
          email?: string;
          /** The user's time zone identifier when Slack provides it. */
          tz?: string;
          /** The user's UTC offset in seconds when Slack provides it. */
          tzOffset?: number;
          /** When the user object was last updated, as a Unix timestamp in seconds. */
          updated?: number;
          /** The user's team ID when Slack provides it. */
          teamId?: string;
          /** Whether the user is a guest. Single-channel guests also set isUltraRestricted. */
          isRestricted?: boolean;
          /** Whether the user is a single-channel guest. */
          isUltraRestricted?: boolean;
          /** Whether the user is an authorized user of the calling app. */
          isAppUser?: boolean;
        }>;
        /** The cursor for the next page. */
        nextCursor: string | null;
      };
    };
    /** Open or resume a direct message with one Slack user. */
    "slackbot.open_conversation": {
      input: {
        /**
         * The single Slack user to include in the DM.
         * @minItems 1
         * @maxItems 1
         */
        userIds: Array<string>;
        /** Whether Slack should avoid creating a new conversation. */
        preventCreation?: boolean;
      };
      output: {
        /** The opened Slack conversation ID. */
        channelId: string;
        /** A normalized Slack conversation record. */
        conversation: {
          /** The unique identifier of the conversation. */
          channelId: string;
          /** The name of the conversation when available. */
          name: string | null;
          /** The normalized Slack conversation type. */
          type: "public_channel" | "private_channel" | "im" | "mpim" | "unknown";
          /** Whether the conversation is archived. */
          isArchived: boolean | null;
          /** Whether the conversation is private. */
          isPrivate: boolean | null;
          /** Whether the connected Slack identity is a member. */
          isMember: boolean | null;
          /** The member count when Slack provides it. */
          memberCount?: number;
          /** The conversation topic. */
          topic: string | null;
          /** The conversation purpose. */
          purpose: string | null;
          /** The linked user identifier for IM conversations. */
          userId?: string;
          /** The locale returned by Slack when requested. */
          locale?: string;
          /** Creation time as a Unix timestamp in seconds when Slack provides it. */
          created?: number;
          /** Last settings update time, passed through as Slack returns it. Slack documents epoch milliseconds for channels (unlike created) and a Unix timestamp for legacy IM and MPIM objects. */
          updated?: number;
          /** The user who created the conversation when Slack provides it. */
          creatorId?: string;
          /** Whether the conversation is shared with another workspace. */
          isShared?: boolean;
          /** Whether the conversation is shared with an external organization. */
          isExtShared?: boolean;
          /** Whether the conversation is shared between workspaces of the same Enterprise organization. */
          isOrgShared?: boolean;
          /** The ID of the workspace the conversation is within when Slack provides it. */
          contextTeamId?: string;
          /** The last-read message timestamp when Slack provides it. */
          lastRead?: string;
          /** The unread message count when Slack provides it. */
          unreadCount?: number;
        };
      };
    };
    /** Post an ephemeral Slack message visible only to one user in a conversation. */
    "slackbot.post_ephemeral_message": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /** Plain text message content. When blocks are provided, Slack uses this as notification and accessibility fallback text. */
        text?: string;
        /**
         * Slack Block Kit blocks to render in the message.
         * @minItems 1
         */
        blocks?: Array<Record<string, unknown>>;
        /**
         * Slack legacy attachments to include in the message.
         * @minItems 1
         */
        attachments?: Array<Record<string, unknown>>;
        /** Whether Slack should unfurl links in the message. */
        unfurlLinks?: boolean;
        /** Whether Slack should unfurl media in the message. */
        unfurlMedia?: boolean;
        /** Slack message metadata to attach to the message. */
        metadata?: Record<string, unknown>;
        /** The user who should receive the ephemeral message. */
        userId: string;
      };
      output: {
        /** The conversation identifier where the message was sent. */
        channelId: string;
        /** The timestamp identifier of the ephemeral message. */
        messageTs: string;
      };
    };
    /** Post a Slack message. Use text for plain messages, or blocks for rich Block Kit layouts with text as fallback. */
    "slackbot.post_message": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /** Plain text message content. When blocks are provided, Slack uses this as notification and accessibility fallback text. */
        text?: string;
        /**
         * Slack Block Kit blocks to render in the message.
         * @minItems 1
         */
        blocks?: Array<Record<string, unknown>>;
        /**
         * Slack legacy attachments to include in the message.
         * @minItems 1
         */
        attachments?: Array<Record<string, unknown>>;
        /** Whether Slack should unfurl links in the message. */
        unfurlLinks?: boolean;
        /** Whether Slack should unfurl media in the message. */
        unfurlMedia?: boolean;
        /** Slack message metadata to attach to the message. */
        metadata?: Record<string, unknown>;
      };
      output: {
        /** The timestamp identifier of the posted message. */
        ts: string;
        /** The channel ID where the message was posted. */
        channelId: string;
      };
    };
    /** Remove an emoji reaction from a Slack message. */
    "slackbot.remove_reaction": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The Slack message timestamp, for example '1711.0001'.
         * @minLength 1
         */
        messageTs: string;
        /**
         * The emoji reaction name without surrounding colons.
         * @minLength 1
         */
        name: string;
      };
      output: {
        /** Whether Slack accepted the reaction removal request. */
        success: boolean;
      };
    };
    /** Reply to a Slack thread. Use text, blocks, or attachments for the reply content. */
    "slackbot.reply_message": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /** Plain text message content. When blocks are provided, Slack uses this as notification and accessibility fallback text. */
        text?: string;
        /**
         * Slack Block Kit blocks to render in the message.
         * @minItems 1
         */
        blocks?: Array<Record<string, unknown>>;
        /**
         * Slack legacy attachments to include in the message.
         * @minItems 1
         */
        attachments?: Array<Record<string, unknown>>;
        /** Whether Slack should unfurl links in the message. */
        unfurlLinks?: boolean;
        /** Whether Slack should unfurl media in the message. */
        unfurlMedia?: boolean;
        /** Slack message metadata to attach to the message. */
        metadata?: Record<string, unknown>;
        /**
         * The timestamp of the parent message to reply to.
         * @minLength 1
         */
        threadTs: string;
        /** Whether Slack should also broadcast the reply to the channel. */
        replyBroadcast?: boolean;
      };
      output: {
        /** The timestamp identifier of the posted message. */
        ts: string;
        /** The channel ID where the message was posted. */
        channelId: string;
      };
    };
    /** Schedule a Slack message to be posted later. Use text or blocks for the scheduled content. */
    "slackbot.schedule_message": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /** Plain text message content. When blocks are provided, Slack uses this as notification and accessibility fallback text. */
        text?: string;
        /**
         * Slack Block Kit blocks to render in the message.
         * @minItems 1
         */
        blocks?: Array<Record<string, unknown>>;
        /**
         * Slack legacy attachments to include in the message.
         * @minItems 1
         */
        attachments?: Array<Record<string, unknown>>;
        /** Whether Slack should unfurl links in the message. */
        unfurlLinks?: boolean;
        /** Whether Slack should unfurl media in the message. */
        unfurlMedia?: boolean;
        /** Slack message metadata to attach to the message. */
        metadata?: Record<string, unknown>;
        /** The Unix timestamp when Slack should post the message. */
        postAt: number;
      };
      output: {
        /** The conversation identifier where the message will be posted. */
        channelId: string;
        /** The scheduled message identifier returned by Slack. */
        scheduledMessageId: string;
        /** The Unix timestamp when Slack will post the message. */
        postAt: number;
      };
    };
    /** Update a Slack message posted through this connection. Provide text, blocks, or attachments as the new message content. */
    "slackbot.update_message": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /** Plain text message content. When blocks are provided, Slack uses this as notification and accessibility fallback text. */
        text?: string;
        /**
         * Slack Block Kit blocks to render in the message.
         * @minItems 1
         */
        blocks?: Array<Record<string, unknown>>;
        /**
         * Slack legacy attachments to include in the message.
         * @minItems 1
         */
        attachments?: Array<Record<string, unknown>>;
        /** Whether Slack should unfurl links in the message. */
        unfurlLinks?: boolean;
        /** Whether Slack should unfurl media in the message. */
        unfurlMedia?: boolean;
        /** Slack message metadata to attach to the message. */
        metadata?: Record<string, unknown>;
        /**
         * The Slack message timestamp, for example '1711.0001'.
         * @minLength 1
         */
        messageTs: string;
      };
      output: {
        /** The conversation identifier containing the message. */
        channelId: string;
        /** The timestamp identifier of the message. */
        messageTs: string;
      };
    };
    /** Upload a file to Slack using the current external upload flow. Provide fileUrl; binary content is fetched by the connector runtime. */
    "slackbot.upload_file": {
      input: {
        /**
         * The file name Slack should display.
         * @minLength 1
         */
        filename: string;
        /**
         * A URL whose response body should be uploaded to Slack.
         * @format uri
         */
        fileUrl: string;
        /** Optional file title shown in Slack. */
        title?: string;
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId?: string;
        /** Optional message text to post with the file. */
        initialComment?: string;
        /**
         * The Slack message timestamp, for example '1711.0001'.
         * @minLength 1
         */
        threadTs?: string;
        /**
         * The content type to send while uploading the file.
         * @minLength 1
         */
        mimeType?: string;
        /** Alternative text for the uploaded file when Slack supports it. */
        altText?: string;
        /** Slack snippet type for text snippets. */
        snippetType?: string;
      };
      output: {
        /** The uploaded Slack file ID. */
        fileId: string;
        /** Files returned by Slack after completing the upload. */
        files: Array<{
          /** The Slack file ID. */
          fileId?: string;
          /** The file name. */
          name?: string;
          /** The file title. */
          title?: string;
          /** The file MIME type. */
          mimetype?: string;
          /** The private Slack URL for the file when returned. */
          urlPrivate?: string;
          [key: string]: unknown;
        }>;
      };
    };
  }
}
