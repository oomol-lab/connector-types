import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Retrieve a single Google Chat message by its resource name, or by space and message ID. */
    "googlechat.get_message": {
      input: {
        /**
         * The message to retrieve, either the full spaces/{space}/messages/{message} name or the bare {message} ID.
         * @minLength 1
         */
        message: string;
        /**
         * The space that owns the message. Required when message is a bare ID.
         * @minLength 1
         */
        space?: string;
      };
      output: {
        /** The resource name of the message, in the form spaces/{space}/messages/{message}. */
        name: string;
        /** The bare message ID with the spaces/{space}/messages/ prefix removed. */
        messageId: string;
        /** The resource name of the space that owns the message. */
        spaceName?: string;
        /** The plain-text body of the message. */
        text?: string;
        /** The message body with Google Chat formatting markup preserved. */
        formattedText?: string;
        /** The plain-text body with all Chat app mentions stripped out. */
        argumentText?: string;
        /** The time the message was created. */
        createTime?: string;
        /** The time the message was last edited by a user. */
        lastUpdateTime?: string;
        /** The time the message was deleted, when it has been deleted. */
        deleteTime?: string;
        /** Whether the message is a reply inside an existing thread. */
        threadReply?: boolean;
        /** The user who created the message. */
        sender?: {
          /** The resource name of the sender, in the form users/{user}. */
          name: string;
          /** The display name of the sender. Only populated for app authentication. */
          displayName: string;
          /** The sender type, either HUMAN or BOT. */
          type: string;
          /** The Google Workspace domain ID of the sender. */
          domainId: string;
          /** Whether the sender is an anonymous user. */
          isAnonymous: boolean;
        };
        /** The thread the message belongs to. */
        thread?: {
          /** The resource name of the thread, in the form spaces/{space}/threads/{thread}. */
          name: string;
          /** The client-assigned ID for the thread. */
          threadKey: string;
        };
      };
    };
    /** Retrieve the details of a single Google Chat space. */
    "googlechat.get_space": {
      input: {
        /**
         * The space to retrieve, either spaces/{space} or the bare {space} ID.
         * @minLength 1
         */
        space: string;
      };
      output: {
        /** The resource name of the space, in the form spaces/{space}. */
        name: string;
        /** The bare space ID with the spaces/ prefix removed. */
        spaceId: string;
        /** The display name of the space. Empty for direct messages. */
        displayName?: string;
        /** The space type, such as SPACE, GROUP_CHAT, or DIRECT_MESSAGE. */
        spaceType?: string;
        /** Whether message history is turned on or off for the space. */
        spaceHistoryState?: string;
        /** Whether the space allows users outside the Google Workspace organization. */
        externalUserAllowed?: boolean;
        /** The URI that opens the space in the Google Chat client. */
        spaceUri?: string;
        /** The time the space was created. */
        createTime?: string;
        /** The time of the most recent message in the space. */
        lastActiveTime?: string;
        /** Space description and guidelines shown to members. */
        spaceDetails?: Record<string, unknown>;
        /** Counts of members that have directly joined the space. */
        membershipCount?: {
          /** The number of human users that have directly joined the space. */
          joinedDirectHumanUserCount: number;
          /** The number of groups that have directly joined the space. */
          joinedGroupCount: number;
        };
      };
    };
    /** List the message history of a Google Chat space, with optional filtering, ordering, and pagination. */
    "googlechat.list_messages": {
      input: {
        /**
         * The space whose messages to list, either spaces/{space} or the bare {space} ID.
         * @minLength 1
         */
        space: string;
        /**
         * A Google Chat filter expression over createTime or thread.name, such as createTime > "2026-01-01T00:00:00+00:00".
         * @minLength 1
         */
        filter?: string;
        /**
         * How to order the messages, as a createTime ordering such as "createTime ASC" or "createTime DESC".
         * @minLength 1
         */
        orderBy?: string;
        /** Whether to include deleted messages in the result. */
        showDeleted?: boolean;
        /**
         * The maximum number of messages to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * A pagination token returned by a previous list_messages call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The messages in the requested page of space history. */
        messages: Array<{
          /** The resource name of the message, in the form spaces/{space}/messages/{message}. */
          name: string;
          /** The bare message ID with the spaces/{space}/messages/ prefix removed. */
          messageId: string;
          /** The resource name of the space that owns the message. */
          spaceName?: string;
          /** The plain-text body of the message. */
          text?: string;
          /** The message body with Google Chat formatting markup preserved. */
          formattedText?: string;
          /** The plain-text body with all Chat app mentions stripped out. */
          argumentText?: string;
          /** The time the message was created. */
          createTime?: string;
          /** The time the message was last edited by a user. */
          lastUpdateTime?: string;
          /** The time the message was deleted, when it has been deleted. */
          deleteTime?: string;
          /** Whether the message is a reply inside an existing thread. */
          threadReply?: boolean;
          /** The user who created the message. */
          sender?: {
            /** The resource name of the sender, in the form users/{user}. */
            name: string;
            /** The display name of the sender. Only populated for app authentication. */
            displayName: string;
            /** The sender type, either HUMAN or BOT. */
            type: string;
            /** The Google Workspace domain ID of the sender. */
            domainId: string;
            /** Whether the sender is an anonymous user. */
            isAnonymous: boolean;
          };
          /** The thread the message belongs to. */
          thread?: {
            /** The resource name of the thread, in the form spaces/{space}/threads/{thread}. */
            name: string;
            /** The client-assigned ID for the thread. */
            threadKey: string;
          };
        }>;
        /** A pagination token for fetching the next page of messages. */
        nextPageToken: string | null;
      };
    };
    /** List the Google Chat spaces the authenticated user is a member of, with optional filtering and pagination. */
    "googlechat.list_spaces": {
      input: {
        /**
         * A Google Chat filter expression, such as spaceType = "SPACE".
         * @minLength 1
         */
        filter?: string;
        /**
         * The maximum number of spaces to return.
         * @minimum 1
         * @maximum 1000
         */
        pageSize?: number;
        /**
         * A pagination token returned by a previous list_spaces call.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The spaces the authenticated user belongs to. */
        spaces: Array<{
          /** The resource name of the space, in the form spaces/{space}. */
          name: string;
          /** The bare space ID with the spaces/ prefix removed. */
          spaceId: string;
          /** The display name of the space. Empty for direct messages. */
          displayName?: string;
          /** The space type, such as SPACE, GROUP_CHAT, or DIRECT_MESSAGE. */
          spaceType?: string;
          /** Whether message history is turned on or off for the space. */
          spaceHistoryState?: string;
          /** Whether the space allows users outside the Google Workspace organization. */
          externalUserAllowed?: boolean;
          /** The URI that opens the space in the Google Chat client. */
          spaceUri?: string;
          /** The time the space was created. */
          createTime?: string;
          /** The time of the most recent message in the space. */
          lastActiveTime?: string;
          /** Space description and guidelines shown to members. */
          spaceDetails?: Record<string, unknown>;
          /** Counts of members that have directly joined the space. */
          membershipCount?: {
            /** The number of human users that have directly joined the space. */
            joinedDirectHumanUserCount: number;
            /** The number of groups that have directly joined the space. */
            joinedGroupCount: number;
          };
        }>;
        /** A pagination token for fetching the next page of spaces. */
        nextPageToken: string | null;
      };
    };
  }
}
