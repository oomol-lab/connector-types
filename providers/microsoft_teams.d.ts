import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Get one channel in a Microsoft team. */
    "microsoft_teams.get_channel": {
      input: {
        /**
         * Microsoft Teams team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * Microsoft Teams channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
      };
      output: {
        /**
         * Channel ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Channel display name.
         * @minLength 1
         */
        displayName?: string;
        /** Channel description. */
        description?: string | null;
        /** Standard, private, or shared membership type. */
        membershipType?: string;
        /** Microsoft Teams channel URL. */
        webUrl?: string;
        /** Microsoft Entra tenant ID. */
        tenantId?: string;
        [key: string]: unknown;
      };
    };
    /** Get the profile for the connected Microsoft work or school account. */
    "microsoft_teams.get_current_user": {
      input: Record<string, never>;
      output: {
        /**
         * Microsoft account ID.
         * @minLength 1
         */
        id?: string;
        /** Account display name. */
        displayName?: string;
        /** Primary email address. */
        mail?: string | null;
        /** User principal name. */
        userPrincipalName?: string;
        [key: string]: unknown;
      };
    };
    /** Get one Microsoft team by ID. */
    "microsoft_teams.get_team": {
      input: {
        /**
         * Microsoft Teams team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
      };
      output: {
        /**
         * Team ID.
         * @minLength 1
         */
        id?: string;
        /**
         * Team display name.
         * @minLength 1
         */
        displayName?: string;
        /** Team description. */
        description?: string | null;
        /** Microsoft Teams web URL. */
        webUrl?: string;
        /** Whether the team is archived. */
        isArchived?: boolean;
        /** Microsoft Entra tenant ID. */
        tenantId?: string;
        [key: string]: unknown;
      };
    };
    /** List channel posts with optionally expanded replies, or continue root-message or reply pagination. */
    "microsoft_teams.list_channel_messages": {
      input: {
        /**
         * Microsoft Teams team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * Microsoft Teams channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * Maximum root messages to return.
         * @minimum 1
         * @maximum 50
         */
        top?: number;
        /** Whether to expand replies on each root message. */
        includeReplies?: boolean;
        /**
         * Opaque Microsoft Graph pagination URL returned by a previous call.
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Microsoft Graph messages results. */
        messages: Array<{
          /**
           * Message ID.
           * @minLength 1
           */
          id?: string;
          /** Parent message ID for a channel reply. */
          replyToId?: string | null;
          /** Message type. */
          messageType?: string;
          /** Creation timestamp. */
          createdDateTime?: string;
          /** Last modification timestamp. */
          lastModifiedDateTime?: string;
          /** Deletion timestamp. */
          deletedDateTime?: string | null;
          /** Channel post subject. */
          subject?: string | null;
          /** Notification summary. */
          summary?: string | null;
          /** Message importance. */
          importance?: string;
          /** Message locale. */
          locale?: string;
          /** Microsoft Teams message URL. */
          webUrl?: string;
          /** A Microsoft Graph object. */
          from?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          body?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          channelIdentity?: Record<string, unknown>;
          /** Chat containing the message. */
          chatId?: string;
          /** Message attachments. */
          attachments?: Array<Record<string, unknown>>;
          /** Message mentions. */
          mentions?: Array<Record<string, unknown>>;
          /** Message reactions. */
          reactions?: Array<Record<string, unknown>>;
          /** Channel replies expanded with the root message. */
          replies?: Array<Record<string, unknown>>;
          /** Next-page URL for additional expanded replies. */
          repliesNextLink?: string | null;
          [key: string]: unknown;
        }>;
        /** Next-page URL, or null when no page remains. */
        nextLink: string | null;
      };
    };
    /** List messages from an existing one-on-one, group, or meeting chat. */
    "microsoft_teams.list_chat_messages": {
      input: {
        /**
         * Microsoft Teams chat ID.
         * @minLength 1
         */
        chatId: string;
        /**
         * Maximum messages to return.
         * @minimum 1
         * @maximum 50
         */
        top?: number;
        /** Supported Microsoft Graph message ordering. */
        orderby?: string;
        /** Supported Microsoft Graph message filter. */
        filter?: string;
        /**
         * Opaque Microsoft Graph pagination URL returned by a previous call.
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Microsoft Graph messages results. */
        messages: Array<{
          /**
           * Message ID.
           * @minLength 1
           */
          id?: string;
          /** Parent message ID for a channel reply. */
          replyToId?: string | null;
          /** Message type. */
          messageType?: string;
          /** Creation timestamp. */
          createdDateTime?: string;
          /** Last modification timestamp. */
          lastModifiedDateTime?: string;
          /** Deletion timestamp. */
          deletedDateTime?: string | null;
          /** Channel post subject. */
          subject?: string | null;
          /** Notification summary. */
          summary?: string | null;
          /** Message importance. */
          importance?: string;
          /** Message locale. */
          locale?: string;
          /** Microsoft Teams message URL. */
          webUrl?: string;
          /** A Microsoft Graph object. */
          from?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          body?: Record<string, unknown>;
          /** A Microsoft Graph object. */
          channelIdentity?: Record<string, unknown>;
          /** Chat containing the message. */
          chatId?: string;
          /** Message attachments. */
          attachments?: Array<Record<string, unknown>>;
          /** Message mentions. */
          mentions?: Array<Record<string, unknown>>;
          /** Message reactions. */
          reactions?: Array<Record<string, unknown>>;
          /** Channel replies expanded with the root message. */
          replies?: Array<Record<string, unknown>>;
          /** Next-page URL for additional expanded replies. */
          repliesNextLink?: string | null;
          [key: string]: unknown;
        }>;
        /** Next-page URL, or null when no page remains. */
        nextLink: string | null;
      };
    };
    /** List chats that include the connected account. */
    "microsoft_teams.list_chats": {
      input: {
        /**
         * Maximum chats to return.
         * @minimum 1
         * @maximum 50
         */
        top?: number;
        /** Supported Microsoft Graph chat filter. */
        filter?: string;
        /** Supported Microsoft Graph chat ordering. */
        orderby?: string;
        /** Related chat data to expand. */
        expand?: "members" | "lastMessagePreview" | "members,lastMessagePreview";
        /**
         * Opaque Microsoft Graph pagination URL returned by a previous call.
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Microsoft Graph chats results. */
        chats: Array<{
          /**
           * Chat ID.
           * @minLength 1
           */
          id?: string;
          /** Chat topic. */
          topic?: string | null;
          /** One-on-one, group, or meeting chat type. */
          chatType?: string;
          /** Microsoft Teams chat URL. */
          webUrl?: string;
          /** Microsoft Entra tenant ID. */
          tenantId?: string;
          /** Chat members when expanded. */
          members?: Array<Record<string, unknown>>;
          /** A Microsoft Graph object. */
          lastMessagePreview?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
        /** Next-page URL, or null when no page remains. */
        nextLink: string | null;
      };
    };
    /** List teams that the connected account has joined. */
    "microsoft_teams.list_joined_teams": {
      input: {
        /**
         * Opaque Microsoft Graph pagination URL returned by a previous call.
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Microsoft Graph teams results. */
        teams: Array<{
          /**
           * Team ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Team display name.
           * @minLength 1
           */
          displayName?: string;
          /** Team description. */
          description?: string | null;
          /** Microsoft Teams web URL. */
          webUrl?: string;
          /** Whether the team is archived. */
          isArchived?: boolean;
          /** Microsoft Entra tenant ID. */
          tenantId?: string;
          [key: string]: unknown;
        }>;
        /** Next-page URL, or null when no page remains. */
        nextLink: string | null;
      };
    };
    /** List channels visible to the connected account in a team. */
    "microsoft_teams.list_team_channels": {
      input: {
        /**
         * Microsoft Teams team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * Microsoft Graph fields to include in the response.
         * @minItems 1
         */
        select?: Array<string>;
        /** OData filter expression. */
        filter?: string;
        /**
         * Opaque Microsoft Graph pagination URL returned by a previous call.
         * @format uri
         */
        nextLink?: string;
      };
      output: {
        /** Microsoft Graph channels results. */
        channels: Array<{
          /**
           * Channel ID.
           * @minLength 1
           */
          id?: string;
          /**
           * Channel display name.
           * @minLength 1
           */
          displayName?: string;
          /** Channel description. */
          description?: string | null;
          /** Standard, private, or shared membership type. */
          membershipType?: string;
          /** Microsoft Teams channel URL. */
          webUrl?: string;
          /** Microsoft Entra tenant ID. */
          tenantId?: string;
          [key: string]: unknown;
        }>;
        /** Next-page URL, or null when no page remains. */
        nextLink: string | null;
      };
    };
    /** Reply to an existing root message in a Microsoft Teams channel. */
    "microsoft_teams.reply_to_channel_message": {
      input: {
        /**
         * Microsoft Teams team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * Microsoft Teams channel ID.
         * @minLength 1
         */
        channelId: string;
        /**
         * Microsoft Teams message ID.
         * @minLength 1
         */
        messageId: string;
        /** Teams message body. */
        body: {
          /** Message body content type. */
          contentType: "text" | "html";
          /** Message body content. */
          content: string;
        };
        /** Channel post subject. */
        subject?: string;
        /** Notification summary. */
        summary?: string;
        /** Message importance. */
        importance?: "normal" | "high" | "urgent";
        /** Message locale. */
        locale?: string;
        /** Message attachments. */
        attachments?: Array<{
          /** Attachment ID referenced by the message body. */
          id?: string;
          /**
           * Attachment MIME type or reference type.
           * @minLength 1
           */
          contentType?: string;
          /** URL for a reference attachment. */
          contentUrl?: string | null;
          /** Serialized attachment content. */
          content?: string | null;
          /** Attachment name. */
          name?: string | null;
          /** Attachment thumbnail URL. */
          thumbnailUrl?: string | null;
          [key: string]: unknown;
        }>;
        /** Message mentions matching body markup. */
        mentions?: Array<{
          /**
           * Mention identifier used by the body markup.
           * @minimum 0
           */
          id?: number;
          /**
           * Text displayed for the mention.
           * @minLength 1
           */
          mentionText?: string;
          /** A Microsoft Graph object. */
          mentioned?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /**
         * Message ID.
         * @minLength 1
         */
        id?: string;
        /** Parent message ID for a channel reply. */
        replyToId?: string | null;
        /** Message type. */
        messageType?: string;
        /** Creation timestamp. */
        createdDateTime?: string;
        /** Last modification timestamp. */
        lastModifiedDateTime?: string;
        /** Deletion timestamp. */
        deletedDateTime?: string | null;
        /** Channel post subject. */
        subject?: string | null;
        /** Notification summary. */
        summary?: string | null;
        /** Message importance. */
        importance?: string;
        /** Message locale. */
        locale?: string;
        /** Microsoft Teams message URL. */
        webUrl?: string;
        /** A Microsoft Graph object. */
        from?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        body?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        channelIdentity?: Record<string, unknown>;
        /** Chat containing the message. */
        chatId?: string;
        /** Message attachments. */
        attachments?: Array<Record<string, unknown>>;
        /** Message mentions. */
        mentions?: Array<Record<string, unknown>>;
        /** Message reactions. */
        reactions?: Array<Record<string, unknown>>;
        /** Channel replies expanded with the root message. */
        replies?: Array<Record<string, unknown>>;
        /** Next-page URL for additional expanded replies. */
        repliesNextLink?: string | null;
        [key: string]: unknown;
      };
    };
    /** Send a new root message to a Microsoft Teams channel. */
    "microsoft_teams.send_channel_message": {
      input: {
        /**
         * Microsoft Teams team ID.
         * @minLength 1
         */
        teamId: string;
        /**
         * Microsoft Teams channel ID.
         * @minLength 1
         */
        channelId: string;
        /** Teams message body. */
        body: {
          /** Message body content type. */
          contentType: "text" | "html";
          /** Message body content. */
          content: string;
        };
        /** Channel post subject. */
        subject?: string;
        /** Notification summary. */
        summary?: string;
        /** Message importance. */
        importance?: "normal" | "high" | "urgent";
        /** Message locale. */
        locale?: string;
        /** Message attachments. */
        attachments?: Array<{
          /** Attachment ID referenced by the message body. */
          id?: string;
          /**
           * Attachment MIME type or reference type.
           * @minLength 1
           */
          contentType?: string;
          /** URL for a reference attachment. */
          contentUrl?: string | null;
          /** Serialized attachment content. */
          content?: string | null;
          /** Attachment name. */
          name?: string | null;
          /** Attachment thumbnail URL. */
          thumbnailUrl?: string | null;
          [key: string]: unknown;
        }>;
        /** Message mentions matching body markup. */
        mentions?: Array<{
          /**
           * Mention identifier used by the body markup.
           * @minimum 0
           */
          id?: number;
          /**
           * Text displayed for the mention.
           * @minLength 1
           */
          mentionText?: string;
          /** A Microsoft Graph object. */
          mentioned?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /**
         * Message ID.
         * @minLength 1
         */
        id?: string;
        /** Parent message ID for a channel reply. */
        replyToId?: string | null;
        /** Message type. */
        messageType?: string;
        /** Creation timestamp. */
        createdDateTime?: string;
        /** Last modification timestamp. */
        lastModifiedDateTime?: string;
        /** Deletion timestamp. */
        deletedDateTime?: string | null;
        /** Channel post subject. */
        subject?: string | null;
        /** Notification summary. */
        summary?: string | null;
        /** Message importance. */
        importance?: string;
        /** Message locale. */
        locale?: string;
        /** Microsoft Teams message URL. */
        webUrl?: string;
        /** A Microsoft Graph object. */
        from?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        body?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        channelIdentity?: Record<string, unknown>;
        /** Chat containing the message. */
        chatId?: string;
        /** Message attachments. */
        attachments?: Array<Record<string, unknown>>;
        /** Message mentions. */
        mentions?: Array<Record<string, unknown>>;
        /** Message reactions. */
        reactions?: Array<Record<string, unknown>>;
        /** Channel replies expanded with the root message. */
        replies?: Array<Record<string, unknown>>;
        /** Next-page URL for additional expanded replies. */
        repliesNextLink?: string | null;
        [key: string]: unknown;
      };
    };
    /** Send a message to an existing one-on-one, group, or meeting chat. */
    "microsoft_teams.send_chat_message": {
      input: {
        /**
         * Microsoft Teams chat ID.
         * @minLength 1
         */
        chatId: string;
        /** Teams message body. */
        body: {
          /** Message body content type. */
          contentType: "text" | "html";
          /** Message body content. */
          content: string;
        };
        /** Channel post subject. */
        subject?: string;
        /** Notification summary. */
        summary?: string;
        /** Message importance. */
        importance?: "normal" | "high" | "urgent";
        /** Message locale. */
        locale?: string;
        /** Message attachments. */
        attachments?: Array<{
          /** Attachment ID referenced by the message body. */
          id?: string;
          /**
           * Attachment MIME type or reference type.
           * @minLength 1
           */
          contentType?: string;
          /** URL for a reference attachment. */
          contentUrl?: string | null;
          /** Serialized attachment content. */
          content?: string | null;
          /** Attachment name. */
          name?: string | null;
          /** Attachment thumbnail URL. */
          thumbnailUrl?: string | null;
          [key: string]: unknown;
        }>;
        /** Message mentions matching body markup. */
        mentions?: Array<{
          /**
           * Mention identifier used by the body markup.
           * @minimum 0
           */
          id?: number;
          /**
           * Text displayed for the mention.
           * @minLength 1
           */
          mentionText?: string;
          /** A Microsoft Graph object. */
          mentioned?: Record<string, unknown>;
          [key: string]: unknown;
        }>;
      };
      output: {
        /**
         * Message ID.
         * @minLength 1
         */
        id?: string;
        /** Parent message ID for a channel reply. */
        replyToId?: string | null;
        /** Message type. */
        messageType?: string;
        /** Creation timestamp. */
        createdDateTime?: string;
        /** Last modification timestamp. */
        lastModifiedDateTime?: string;
        /** Deletion timestamp. */
        deletedDateTime?: string | null;
        /** Channel post subject. */
        subject?: string | null;
        /** Notification summary. */
        summary?: string | null;
        /** Message importance. */
        importance?: string;
        /** Message locale. */
        locale?: string;
        /** Microsoft Teams message URL. */
        webUrl?: string;
        /** A Microsoft Graph object. */
        from?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        body?: Record<string, unknown>;
        /** A Microsoft Graph object. */
        channelIdentity?: Record<string, unknown>;
        /** Chat containing the message. */
        chatId?: string;
        /** Message attachments. */
        attachments?: Array<Record<string, unknown>>;
        /** Message mentions. */
        mentions?: Array<Record<string, unknown>>;
        /** Message reactions. */
        reactions?: Array<Record<string, unknown>>;
        /** Channel replies expanded with the root message. */
        replies?: Array<Record<string, unknown>>;
        /** Next-page URL for additional expanded replies. */
        repliesNextLink?: string | null;
        [key: string]: unknown;
      };
    };
  }
}
