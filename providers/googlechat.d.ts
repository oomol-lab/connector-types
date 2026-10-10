import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Send a plain-text message to a Google Chat space, optionally as a reply inside an existing thread. Under user authentication the Chat API only accepts plain text, so cards and attachments are not supported. When thread is provided but messageReplyOption is omitted, this action sends REPLY_MESSAGE_OR_FAIL rather than the Google default, which would silently ignore the thread and start a new one. messageReplyOption only applies to named spaces (spaceType=SPACE). Reusing a requestId returns the message that was already created instead of sending a new one. */
    "googlechat.create_message": {
      input: {
        /**
         * The space to post into, either spaces/{space} or the bare {space} ID.
         * @minLength 1
         */
        space: string;
        /**
         * The plain-text body of the message. Leading and trailing whitespace is preserved, so indentation inside the message survives.
         * @minLength 1
         * @pattern \S
         */
        text: string;
        /**
         * The thread to reply into, as the full spaces/{space}/threads/{thread} name. Its space must match the space input.
         * @minLength 1
         * @pattern \S
         */
        thread?: string;
        /** How to handle the target thread. Only allowed together with thread; defaults to REPLY_MESSAGE_OR_FAIL when thread is set. */
        messageReplyOption?: "REPLY_MESSAGE_OR_FAIL" | "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD";
        /**
         * An idempotency key. Only reuse it to retry the same intended message: reusing it with different content returns the original message instead of sending or updating anything.
         * @minLength 1
         * @pattern \S
         */
        requestId?: string;
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
          name?: string;
          /** The sender's name. Under user authentication Google Chat only reports it for members of the space and users with prior affinity, so a human sender's missing name is filled in from the Workspace directory; null when neither reveals it, with profileUnavailableReason saying why. Bots are never looked up in the directory. */
          displayName?: string | null;
          /** The human sender's email address as Google Chat reports it, or the primary one from the Workspace directory, when visible. */
          email?: string | null;
          /** Why displayName is null for a human sender: profile_name_missing, people_forbidden, people_not_found, or people_request_failed. Names need the directory.readonly scope and the People API. */
          profileUnavailableReason?: "profile_name_missing" | "people_forbidden" | "people_not_found" | "people_request_failed";
          /** The sender type, either HUMAN or BOT. */
          type?: string;
          /** The Google Workspace domain ID of the sender. */
          domainId?: string;
          /** Whether the sender is an anonymous user. */
          isAnonymous?: boolean;
        };
        /** The thread the message belongs to. */
        thread?: {
          /** The resource name of the thread, in the form spaces/{space}/threads/{thread}. */
          name?: string;
          /** The client-assigned ID for the thread. */
          threadKey?: string;
        };
      };
    };
    /** Find the existing direct message space between the authenticated user and one other user, identified by email address or numeric user id. Use this to address a person by identity instead of by an opaque space id: a direct message space has no displayName, so list_spaces can never tell you who a DM is with. Only finds conversations that already exist; it never creates one. Caution when the result is fed to create_message: if the identifier is mistyped but still resolves to another real user this account already has a DM with, this action succeeds and returns that person's space, and the returned space id is opaque, so it cannot be eyeballed to confirm the recipient. The result therefore carries peer, the person the space actually belongs to, named by Google Chat or the Workspace directory: read it back to the user and confirm the name before sending. Nothing enforces that check. Naming the peer needs the chat.memberships.readonly and directory.readonly scopes plus the People API on top of the scope below. When the peer cannot be resolved at all (listing the members or reading your own People id failed), peer is null and peerError says why, while the space itself is still returned. A resolved peer can still be unnamed: displayName is null for an AMBIGUOUS peer, for a BOT or SELF peer Google Chat did not name, and for a HUMAN peer the directory could not name (profileUnavailableReason then says why). Treat a null peer or a null displayName as an unconfirmed recipient. */
    "googlechat.find_direct_message": {
      input: {
        /**
         * The other participant, as a bare email address such as person@example.com or a bare numeric user id. Do not include the users/ prefix, and aliases such as me or app are not accepted.
         * @minLength 1
         */
        user: string;
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
          joinedDirectHumanUserCount?: number;
          /** The number of groups that have directly joined the space. */
          joinedGroupCount?: number;
        };
        /** The other participant of a direct message, named by Google Chat or, where Chat leaves the name out, through the Workspace directory. */
        peer: {
          /** HUMAN for another person, BOT for a Chat app, SELF for a direct message with only yourself, AMBIGUOUS when the members do not single out one peer. */
          kind: "HUMAN" | "BOT" | "SELF" | "AMBIGUOUS";
          /** The peer's resource name, in the form users/{user}. Null when the peer is AMBIGUOUS. */
          user: string | null;
          /** The peer's name as Google Chat reports it, or, for a HUMAN peer, from the Workspace directory when Chat leaves it out. Null for AMBIGUOUS, or when neither reveals it; for a HUMAN peer profileUnavailableReason then says why. BOT and SELF peers are never looked up in the directory. */
          displayName: string | null;
          /** The peer's email address as Google Chat reports it, or, for a HUMAN peer, the primary one from the Workspace directory, when visible. Null for AMBIGUOUS. */
          email: string | null;
          /** Why displayName is null for a HUMAN peer: profile_name_missing when the directory returned no name (profile sharing may be off), people_forbidden or people_not_found for a 403 or 404 from the People API, people_request_failed for any other failure. */
          profileUnavailableReason?: "profile_name_missing" | "people_forbidden" | "people_not_found" | "people_request_failed";
          /** For an AMBIGUOUS peer, the users/{user} names of the members that could be the peer. */
          candidates?: Array<string>;
        } | null;
        /** Why peer is null. Absent when the peer was resolved. */
        peerError?: {
          /** The HTTP status of the failed lookup, or 502 when it failed without one, such as a network error. */
          status?: number;
          /** What went wrong. */
          message?: string;
        };
      };
    };
    /** Name the other participant of a direct message space. Under user authentication Google Chat may report a member only as users/{id}, so a name or email Chat leaves out is looked up in the Workspace directory through the People API. Use it to tell who a direct message from list_spaces is with. Rejects spaces that are not direct messages. A HUMAN peer that cannot be named still comes back with its users/{id} and a profileUnavailableReason; BOT and SELF peers carry only what Google Chat reports, and an AMBIGUOUS peer has a null user and lists its candidates. */
    "googlechat.get_direct_message_peer": {
      input: {
        /**
         * The direct message space, either spaces/{space} or the bare {space} ID.
         * @minLength 1
         */
        space: string;
      };
      output: {
        /** The resource name of the space, in the form spaces/{space}. */
        space: string;
        /** The other participant of a direct message, named by Google Chat or, where Chat leaves the name out, through the Workspace directory. */
        peer: {
          /** HUMAN for another person, BOT for a Chat app, SELF for a direct message with only yourself, AMBIGUOUS when the members do not single out one peer. */
          kind: "HUMAN" | "BOT" | "SELF" | "AMBIGUOUS";
          /** The peer's resource name, in the form users/{user}. Null when the peer is AMBIGUOUS. */
          user: string | null;
          /** The peer's name as Google Chat reports it, or, for a HUMAN peer, from the Workspace directory when Chat leaves it out. Null for AMBIGUOUS, or when neither reveals it; for a HUMAN peer profileUnavailableReason then says why. BOT and SELF peers are never looked up in the directory. */
          displayName: string | null;
          /** The peer's email address as Google Chat reports it, or, for a HUMAN peer, the primary one from the Workspace directory, when visible. Null for AMBIGUOUS. */
          email: string | null;
          /** Why displayName is null for a HUMAN peer: profile_name_missing when the directory returned no name (profile sharing may be off), people_forbidden or people_not_found for a 403 or 404 from the People API, people_request_failed for any other failure. */
          profileUnavailableReason?: "profile_name_missing" | "people_forbidden" | "people_not_found" | "people_request_failed";
          /** For an AMBIGUOUS peer, the users/{user} names of the members that could be the peer. */
          candidates?: Array<string>;
        };
      };
    };
    /** Retrieve a single Google Chat message by its resource name, or by space and message ID. A name or email Google Chat leaves out for a human sender is filled in from the Workspace directory, which needs the directory.readonly scope and the People API on top of the scope below; without them the sender keeps its users/{id} with a null displayName and a profileUnavailableReason, and the message is still returned. */
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
          name?: string;
          /** The sender's name. Under user authentication Google Chat only reports it for members of the space and users with prior affinity, so a human sender's missing name is filled in from the Workspace directory; null when neither reveals it, with profileUnavailableReason saying why. Bots are never looked up in the directory. */
          displayName?: string | null;
          /** The human sender's email address as Google Chat reports it, or the primary one from the Workspace directory, when visible. */
          email?: string | null;
          /** Why displayName is null for a human sender: profile_name_missing, people_forbidden, people_not_found, or people_request_failed. Names need the directory.readonly scope and the People API. */
          profileUnavailableReason?: "profile_name_missing" | "people_forbidden" | "people_not_found" | "people_request_failed";
          /** The sender type, either HUMAN or BOT. */
          type?: string;
          /** The Google Workspace domain ID of the sender. */
          domainId?: string;
          /** Whether the sender is an anonymous user. */
          isAnonymous?: boolean;
        };
        /** The thread the message belongs to. */
        thread?: {
          /** The resource name of the thread, in the form spaces/{space}/threads/{thread}. */
          name?: string;
          /** The client-assigned ID for the thread. */
          threadKey?: string;
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
          joinedDirectHumanUserCount?: number;
          /** The number of groups that have directly joined the space. */
          joinedGroupCount?: number;
        };
      };
    };
    /** List the message history of a Google Chat space, with optional filtering, ordering, and pagination. A name or email Google Chat leaves out for a human sender is filled in from the Workspace directory, which needs the directory.readonly scope and the People API on top of the scope below; without them such a sender keeps its users/{id} with a null displayName and a profileUnavailableReason, and the messages are still returned. */
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
            name?: string;
            /** The sender's name. Under user authentication Google Chat only reports it for members of the space and users with prior affinity, so a human sender's missing name is filled in from the Workspace directory; null when neither reveals it, with profileUnavailableReason saying why. Bots are never looked up in the directory. */
            displayName?: string | null;
            /** The human sender's email address as Google Chat reports it, or the primary one from the Workspace directory, when visible. */
            email?: string | null;
            /** Why displayName is null for a human sender: profile_name_missing, people_forbidden, people_not_found, or people_request_failed. Names need the directory.readonly scope and the People API. */
            profileUnavailableReason?: "profile_name_missing" | "people_forbidden" | "people_not_found" | "people_request_failed";
            /** The sender type, either HUMAN or BOT. */
            type?: string;
            /** The Google Workspace domain ID of the sender. */
            domainId?: string;
            /** Whether the sender is an anonymous user. */
            isAnonymous?: boolean;
          };
          /** The thread the message belongs to. */
          thread?: {
            /** The resource name of the thread, in the form spaces/{space}/threads/{thread}. */
            name?: string;
            /** The client-assigned ID for the thread. */
            threadKey?: string;
          };
        }>;
        /** A pagination token for fetching the next page of messages. */
        nextPageToken: string | null;
      };
    };
    /** List the members of any Google Chat space, including group spaces, with each person's name and email. Like Google Chat's default, it leaves out memberships held through a Google Group and people who were invited but have not joined. Under user authentication Google Chat may report a member only as users/{id}, so every human on a page whose name or email Chat leaves out is looked up in the Workspace directory through the People API in one batch. Returns one page at a time; pass nextPageToken back as pageToken for the next page. Members whose profile cannot be read keep their users/{id} with a null displayName and a profileUnavailableReason. */
    "googlechat.list_space_members": {
      input: {
        /**
         * The space whose members to list, either spaces/{space} or the bare {space} ID.
         * @minLength 1
         */
        space: string;
        /**
         * The maximum number of members to return, at most 200 so that one directory lookup covers the page. Defaults to 100.
         * @minimum 1
         * @maximum 200
         */
        pageSize?: number;
        /**
         * The nextPageToken from a previous call, to fetch the next page.
         * @minLength 1
         */
        pageToken?: string;
      };
      output: {
        /** The resource name of the space, in the form spaces/{space}. */
        space: string;
        /** The members on this page, in the order Google Chat returned them. */
        members: Array<{
          /** The member's resource name, in the form users/{user}. */
          user: string;
          /** HUMAN for a person, BOT for a Chat app. */
          kind?: string;
          /** The member's role in the space, such as ROLE_MEMBER or ROLE_MANAGER. */
          role?: string;
          /** Whether this member is the authenticated user. */
          isSelf: boolean;
          /** The member's name as Google Chat reports it, or for a human member from the Workspace directory when Chat leaves it out. Null when neither reveals it; for a human member profileUnavailableReason then says why. Bots are never looked up in the directory. */
          displayName: string | null;
          /** The member's email address as Google Chat reports it, or for a human member the primary one from the Workspace directory, when visible. */
          email: string | null;
          /** Why displayName is null for a human member: profile_name_missing when the directory returned no name (profile sharing may be off), people_forbidden or people_not_found when the People API refused or could not find the profile, people_request_failed for any other failure. */
          profileUnavailableReason?: "profile_name_missing" | "people_forbidden" | "people_not_found" | "people_request_failed";
        }>;
        /** The token for the next page, or null when this is the last page. */
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
            joinedDirectHumanUserCount?: number;
            /** The number of groups that have directly joined the space. */
            joinedGroupCount?: number;
          };
        }>;
        /** A pagination token for fetching the next page of spaces. */
        nextPageToken: string | null;
      };
    };
  }
}
