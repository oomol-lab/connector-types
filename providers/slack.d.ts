import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Add an emoji reaction to a Slack message. */
    "slack.add_reaction": {
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
    /** Delete a Slack file. */
    "slack.delete_file": {
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
    /** Delete a Slack message posted by the bot. */
    "slack.delete_message": {
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
    /** Get recent messages from a Slack conversation. */
    "slack.get_channel_messages": {
      input: {
        /**
         * The Slack conversation or channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * The maximum number of messages to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
      };
      output: {
        /** The list of messages in the conversation. */
        messages: Array<{
          /** The message timestamp identifier. */
          ts?: string;
          /** The user ID of the message author. */
          userId?: string;
          /** The text content of the message. */
          text?: string;
          [key: string]: unknown;
        }>;
        /** Whether more messages are available beyond this page. */
        hasMore: boolean;
      };
    };
    /** Get metadata for a Slack conversation. */
    "slack.get_conversation": {
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
          /** Whether the bot user is a member. */
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
        };
      };
    };
    /** Get metadata for a Slack file. */
    "slack.get_file": {
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
    "slack.get_message_permalink": {
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
    "slack.get_reactions": {
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
    "slack.get_thread": {
      input: {
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
      };
      output: {
        /** The list of messages in the thread. */
        messages: Array<{
          /** The message timestamp identifier. */
          ts?: string;
          /** The user ID of the message author. */
          userId?: string;
          /** The text content of the message. */
          text?: string;
          [key: string]: unknown;
        }>;
        /** Whether more messages are available beyond this page. */
        hasMore: boolean;
      };
    };
    /** Get metadata for a Slack user. */
    "slack.get_user": {
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
        };
      };
    };
    /** List Slack public channels visible to the bot. */
    "slack.list_channels": {
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
    /** List Slack conversations visible to the bot. */
    "slack.list_conversations": {
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
          /** Whether the bot user is a member. */
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
        }>;
        /** The cursor for the next page. */
        nextCursor: string | null;
      };
    };
    /** List Slack files visible to the bot, optionally filtered by channel or user. */
    "slack.list_files": {
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
    /** List Slack users visible to the bot. */
    "slack.list_users": {
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
        }>;
        /** The cursor for the next page. */
        nextCursor: string | null;
      };
    };
    /** Open or resume a direct message with one Slack user. */
    "slack.open_conversation": {
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
          /** Whether the bot user is a member. */
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
        };
      };
    };
    /** Post an ephemeral Slack message visible only to one user in a conversation. */
    "slack.post_ephemeral_message": {
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
    "slack.post_message": {
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
    "slack.remove_reaction": {
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
    "slack.reply_message": {
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
    "slack.schedule_message": {
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
    /** Update a Slack message posted by the bot. Provide text, blocks, or attachments as the new message content. */
    "slack.update_message": {
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
    "slack.upload_file": {
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
