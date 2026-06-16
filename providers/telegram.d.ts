import "@oomol-lab/connector";

declare module "@oomol-lab/connector" {
  interface ActionRegistry {
    /** Answer an inline keyboard callback query. */
    "telegram.answer_callback_query": {
      input: {
        /**
         * The callback query ID to answer.
         * @minLength 1
         */
        callbackQueryId: string;
        /**
         * The notification text to show to the user.
         * @maxLength 200
         */
        text?: string;
        /** Whether to show an alert instead of a notification. */
        showAlert?: boolean;
        /**
         * The URL to open for the callback query.
         * @format uri
         */
        url?: string;
        /**
         * The maximum time in seconds that the result may be cached client-side.
         * @minimum 0
         */
        cacheTime?: number;
      };
      output: {
        /** Whether the Telegram Bot API request succeeded. */
        success: true;
      };
    };
    /** Export a new primary invite link for a chat. This maps to Telegram Bot API exportChatInviteLink. */
    "telegram.create_chat_invite_link": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
      };
      output: {
        /** The exported invite link for the chat. */
        inviteLink: string;
      };
    };
    /** Delete a message from a chat. */
    "telegram.delete_message": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The message ID to delete.
         * @exclusiveMinimum 0
         */
        messageId: number;
      };
      output: {
        /** Whether the Telegram Bot API request succeeded. */
        success: true;
      };
    };
    /** Delete the configured webhook and optionally drop pending updates. */
    "telegram.delete_webhook": {
      input: {
        /** Whether to drop all pending updates when deleting the webhook. */
        dropPendingUpdates?: boolean;
      };
      output: {
        /** Whether the Telegram Bot API request succeeded. */
        success: true;
      };
    };
    /** Edit the text of a previously sent message or an inline message. */
    "telegram.edit_message_text": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId?: number | string;
        /**
         * The message ID to edit.
         * @exclusiveMinimum 0
         */
        messageId?: number;
        /**
         * The inline message ID to edit.
         * @minLength 1
         */
        inlineMessageId?: string;
        /**
         * The new message text.
         * @minLength 1
         * @maxLength 4096
         */
        text: string;
        /** The parse mode used for message entities. */
        parseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /** Whether to disable link previews in the edited message. */
        disableWebPagePreview?: boolean;
      };
      output: {
        /** Whether the message edit succeeded. */
        edited: true;
        /** The edited message, when Telegram returns it. */
        message: {
          /** The unique message identifier inside the chat. */
          messageId: number;
          /** The Unix timestamp when the message was sent. */
          date: number;
          /** The chat the message belongs to. */
          chat: {
            /** The unique identifier of the chat. */
            id: number;
            /** The chat type, such as private, group, supergroup, or channel. */
            type: string;
            /** The chat title for groups, supergroups, and channels. */
            title?: string;
            /** The public username of the chat, when available. */
            username?: string;
            /** The first name for a private chat counterpart. */
            firstName?: string;
            /** The last name for a private chat counterpart. */
            lastName?: string;
            /** Whether the supergroup chat is a forum. */
            isForum?: boolean;
          };
          /** The sender of the message. */
          from?: {
            /** The unique identifier of the user or bot. */
            id: number;
            /** Whether this account is a bot. */
            isBot: boolean;
            /** The first name of the user or bot. */
            firstName: string;
            /** The username of the user or bot. */
            username?: string;
            /** The IETF language tag of the user. */
            languageCode?: string;
            /** Whether the bot can be invited to groups. */
            canJoinGroups?: boolean;
            /** Whether privacy mode is disabled for the bot. */
            canReadAllGroupMessages?: boolean;
            /** Whether the bot supports inline queries. */
            supportsInlineQueries?: boolean;
            /** Whether the bot can be connected to a Telegram Business account. */
            canConnectToBusiness?: boolean;
            /** Whether the bot has a main Web App configured. */
            hasMainWebApp?: boolean;
          };
          /** The chat on behalf of which the message was sent. */
          senderChat?: {
            /** The unique identifier of the chat. */
            id: number;
            /** The chat type, such as private, group, supergroup, or channel. */
            type: string;
            /** The chat title for groups, supergroups, and channels. */
            title?: string;
            /** The public username of the chat, when available. */
            username?: string;
            /** The first name for a private chat counterpart. */
            firstName?: string;
            /** The last name for a private chat counterpart. */
            lastName?: string;
            /** Whether the supergroup chat is a forum. */
            isForum?: boolean;
          };
          /** The UTF-8 text of the message, for text messages. */
          text?: string;
          /** The caption for media messages. */
          caption?: string;
          /** The available sizes for an attached photo. */
          photo?: Array<{
            /** The file identifier used to download or reuse the photo. */
            fileId: string;
            /** The stable unique identifier of the photo. */
            fileUniqueId: string;
            /** The photo width in pixels. */
            width: number;
            /** The photo height in pixels. */
            height: number;
            /** The photo file size in bytes. */
            fileSize?: number;
          }>;
          /** The attached document, when present. */
          document?: {
            /** The file identifier used to download or reuse the document. */
            fileId: string;
            /** The stable unique identifier of the document. */
            fileUniqueId: string;
            /** The original filename of the document. */
            fileName?: string;
            /** The MIME type of the document. */
            mimeType?: string;
            /** The document size in bytes. */
            fileSize?: number;
          };
          /** The attached location, when present. */
          location?: {
            /** The latitude of the location. */
            latitude: number;
            /** The longitude of the location. */
            longitude: number;
            /** The radius of uncertainty for the location, in meters. */
            horizontalAccuracy?: number;
            /** The live location update period in seconds. */
            livePeriod?: number;
            /** The direction in which the user is moving, in degrees. */
            heading?: number;
            /** The distance in meters for proximity alerts. */
            proximityAlertRadius?: number;
          };
          /** The attached poll, when present. */
          poll?: {
            /** The unique identifier of the poll. */
            id: string;
            /** The poll question text. */
            question: string;
            /** The options available in the poll. */
            options: Array<{
              /** The text of the poll option. */
              text: string;
              /** The number of votes received by this option. */
              voterCount: number;
            }>;
            /** The total number of users that voted. */
            totalVoterCount: number;
            /** Whether the poll is closed. */
            isClosed: boolean;
            /** Whether the poll is anonymous. */
            isAnonymous: boolean;
            /** The type of the poll. */
            type: "regular" | "quiz";
            /** Whether multiple answers are allowed. */
            allowsMultipleAnswers: boolean;
            /** The Unix timestamp when the poll closes. */
            closeDate?: number;
            /** The amount of time in seconds the poll stays open. */
            openPeriod?: number;
            /** The explanation text shown for quiz polls. */
            explanation?: string;
            /** The index of the correct option for quiz polls. */
            correctOptionId?: number;
          };
          /** The message entities parsed from the text. */
          entities?: Array<Record<string, unknown>>;
          /** The message entities parsed from the caption. */
          captionEntities?: Array<Record<string, unknown>>;
          /** The Unix timestamp of the original forwarded message. */
          forwardDate?: number;
          /** The original sender of a forwarded message. */
          forwardFrom?: {
            /** The unique identifier of the user or bot. */
            id: number;
            /** Whether this account is a bot. */
            isBot: boolean;
            /** The first name of the user or bot. */
            firstName: string;
            /** The username of the user or bot. */
            username?: string;
            /** The IETF language tag of the user. */
            languageCode?: string;
            /** Whether the bot can be invited to groups. */
            canJoinGroups?: boolean;
            /** Whether privacy mode is disabled for the bot. */
            canReadAllGroupMessages?: boolean;
            /** Whether the bot supports inline queries. */
            supportsInlineQueries?: boolean;
            /** Whether the bot can be connected to a Telegram Business account. */
            canConnectToBusiness?: boolean;
            /** Whether the bot has a main Web App configured. */
            hasMainWebApp?: boolean;
          };
          /** The original chat of a forwarded message sent on behalf of a chat. */
          forwardFromChat?: {
            /** The unique identifier of the chat. */
            id: number;
            /** The chat type, such as private, group, supergroup, or channel. */
            type: string;
            /** The chat title for groups, supergroups, and channels. */
            title?: string;
            /** The public username of the chat, when available. */
            username?: string;
            /** The first name for a private chat counterpart. */
            firstName?: string;
            /** The last name for a private chat counterpart. */
            lastName?: string;
            /** Whether the supergroup chat is a forum. */
            isForum?: boolean;
          };
          /** The original message ID inside the source channel. */
          forwardFromMessageId?: number;
          /** The original author signature for a forwarded post. */
          forwardSignature?: string;
          /** The display name of a forwarded sender who disallows linking. */
          forwardSenderName?: string;
          /** The link preview options attached to the message. */
          linkPreviewOptions?: Record<string, unknown>;
        } | null;
        /** The inline message ID when editing an inline message. */
        inlineMessageId: string | null;
      };
    };
    /** Forward a message from one chat to another. */
    "telegram.forward_message": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The target Telegram chat ID or channel username. */
        fromChatId: number | string;
        /**
         * The source message ID to forward.
         * @exclusiveMinimum 0
         */
        messageId: number;
        /** Whether to forward the message silently. */
        disableNotification?: boolean;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** The chat the message belongs to. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The sender of the message. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The chat on behalf of which the message was sent. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The UTF-8 text of the message, for text messages. */
        text?: string;
        /** The caption for media messages. */
        caption?: string;
        /** The available sizes for an attached photo. */
        photo?: Array<{
          /** The file identifier used to download or reuse the photo. */
          fileId: string;
          /** The stable unique identifier of the photo. */
          fileUniqueId: string;
          /** The photo width in pixels. */
          width: number;
          /** The photo height in pixels. */
          height: number;
          /** The photo file size in bytes. */
          fileSize?: number;
        }>;
        /** The attached document, when present. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original filename of the document. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document size in bytes. */
          fileSize?: number;
        };
        /** The attached location, when present. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty for the location, in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction in which the user is moving, in degrees. */
          heading?: number;
          /** The distance in meters for proximity alerts. */
          proximityAlertRadius?: number;
        };
        /** The attached poll, when present. */
        poll?: {
          /** The unique identifier of the poll. */
          id: string;
          /** The poll question text. */
          question: string;
          /** The options available in the poll. */
          options: Array<{
            /** The text of the poll option. */
            text: string;
            /** The number of votes received by this option. */
            voterCount: number;
          }>;
          /** The total number of users that voted. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The type of the poll. */
          type: "regular" | "quiz";
          /** Whether multiple answers are allowed. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The amount of time in seconds the poll stays open. */
          openPeriod?: number;
          /** The explanation text shown for quiz polls. */
          explanation?: string;
          /** The index of the correct option for quiz polls. */
          correctOptionId?: number;
        };
        /** The message entities parsed from the text. */
        entities?: Array<Record<string, unknown>>;
        /** The message entities parsed from the caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** The original sender of a forwarded message. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The original chat of a forwarded message sent on behalf of a chat. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The original message ID inside the source channel. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
      };
    };
    /** Return metadata for a chat the bot can access. */
    "telegram.get_chat": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
      };
      output: {
        /** The unique identifier of the chat. */
        id: number;
        /** The chat type, such as private, group, supergroup, or channel. */
        type: string;
        /** The chat title for groups, supergroups, and channels. */
        title?: string;
        /** The public username of the chat, when available. */
        username?: string;
        /** The first name for a private chat counterpart. */
        firstName?: string;
        /** The last name for a private chat counterpart. */
        lastName?: string;
        /** Whether the supergroup chat is a forum. */
        isForum?: boolean;
      };
    };
    /** Return the chat administrators visible to the bot. */
    "telegram.get_chat_administrators": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
      };
      output: {
        /** The administrators visible to the bot in the chat. */
        administrators: Array<{
          /** The member's status in the chat. */
          status: string;
          /** The user this membership record belongs to. */
          user: {
            /** The unique identifier of the user or bot. */
            id: number;
            /** Whether this account is a bot. */
            isBot: boolean;
            /** The first name of the user or bot. */
            firstName: string;
            /** The username of the user or bot. */
            username?: string;
            /** The IETF language tag of the user. */
            languageCode?: string;
            /** Whether the bot can be invited to groups. */
            canJoinGroups?: boolean;
            /** Whether privacy mode is disabled for the bot. */
            canReadAllGroupMessages?: boolean;
            /** Whether the bot supports inline queries. */
            supportsInlineQueries?: boolean;
            /** Whether the bot can be connected to a Telegram Business account. */
            canConnectToBusiness?: boolean;
            /** Whether the bot has a main Web App configured. */
            hasMainWebApp?: boolean;
          };
          /** The custom title for an administrator. */
          customTitle?: string;
          /** Whether the administrator is anonymous. */
          isAnonymous?: boolean;
          /** The Unix timestamp when restrictions expire. */
          untilDate?: number;
          /** Whether this administrator can be edited by the bot. */
          canBeEdited?: boolean;
          /** Whether the member can change chat information. */
          canChangeInfo?: boolean;
          /** Whether the member can access chat management tools. */
          canManageChat?: boolean;
          /** Whether the member can invite new users. */
          canInviteUsers?: boolean;
          /** Whether the member can pin messages. */
          canPinMessages?: boolean;
          /** Whether the member can edit channel posts. */
          canEditMessages?: boolean;
          /** Whether the member can post messages in the channel. */
          canPostMessages?: boolean;
          /** Whether the member can delete messages. */
          canDeleteMessages?: boolean;
          /** Whether the member can promote other members. */
          canPromoteMembers?: boolean;
          /** Whether the member can restrict members. */
          canRestrictMembers?: boolean;
          /** Whether the member can manage video chats. */
          canManageVideoChats?: boolean;
          /** Whether the member can manage forum topics. */
          canManageTopics?: boolean;
        }>;
      };
    };
    /** Get chat history by polling getUpdates, filtering to one chat, and returning message-bearing updates only. This helper requires webhook delivery to be disabled. */
    "telegram.get_chat_history": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The maximum number of history entries to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /** The Telegram update offset to start reading from. */
        offset?: number;
        /**
         * Only include messages at or after this message ID.
         * @exclusiveMinimum 0
         */
        messageId?: number;
      };
      output: {
        /** The message-bearing updates for the requested chat. */
        messages: Array<{
          /** The update ID that produced this history entry. */
          updateId: number;
          /** The Telegram update field that contained the message. */
          kind: "message" | "editedMessage" | "channelPost" | "editedChannelPost";
          /** The message payload extracted from the update. */
          message: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** The chat the message belongs to. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The sender of the message. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The chat on behalf of which the message was sent. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The UTF-8 text of the message, for text messages. */
            text?: string;
            /** The caption for media messages. */
            caption?: string;
            /** The available sizes for an attached photo. */
            photo?: Array<{
              /** The file identifier used to download or reuse the photo. */
              fileId: string;
              /** The stable unique identifier of the photo. */
              fileUniqueId: string;
              /** The photo width in pixels. */
              width: number;
              /** The photo height in pixels. */
              height: number;
              /** The photo file size in bytes. */
              fileSize?: number;
            }>;
            /** The attached document, when present. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original filename of the document. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document size in bytes. */
              fileSize?: number;
            };
            /** The attached location, when present. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty for the location, in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction in which the user is moving, in degrees. */
              heading?: number;
              /** The distance in meters for proximity alerts. */
              proximityAlertRadius?: number;
            };
            /** The attached poll, when present. */
            poll?: {
              /** The unique identifier of the poll. */
              id: string;
              /** The poll question text. */
              question: string;
              /** The options available in the poll. */
              options: Array<{
                /** The text of the poll option. */
                text: string;
                /** The number of votes received by this option. */
                voterCount: number;
              }>;
              /** The total number of users that voted. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The type of the poll. */
              type: "regular" | "quiz";
              /** Whether multiple answers are allowed. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The amount of time in seconds the poll stays open. */
              openPeriod?: number;
              /** The explanation text shown for quiz polls. */
              explanation?: string;
              /** The index of the correct option for quiz polls. */
              correctOptionId?: number;
            };
            /** The message entities parsed from the text. */
            entities?: Array<Record<string, unknown>>;
            /** The message entities parsed from the caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** The original sender of a forwarded message. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The original chat of a forwarded message sent on behalf of a chat. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The original message ID inside the source channel. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
          };
        }>;
        /** The next update offset to continue reading from. */
        nextUpdateOffset: number | null;
      };
    };
    /** Return information about one chat member. */
    "telegram.get_chat_member": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /** The user ID of the chat member to fetch. */
        userId: number;
      };
      output: {
        /** The member's status in the chat. */
        status: string;
        /** The user this membership record belongs to. */
        user: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The custom title for an administrator. */
        customTitle?: string;
        /** Whether the administrator is anonymous. */
        isAnonymous?: boolean;
        /** The Unix timestamp when restrictions expire. */
        untilDate?: number;
        /** Whether this administrator can be edited by the bot. */
        canBeEdited?: boolean;
        /** Whether the member can change chat information. */
        canChangeInfo?: boolean;
        /** Whether the member can access chat management tools. */
        canManageChat?: boolean;
        /** Whether the member can invite new users. */
        canInviteUsers?: boolean;
        /** Whether the member can pin messages. */
        canPinMessages?: boolean;
        /** Whether the member can edit channel posts. */
        canEditMessages?: boolean;
        /** Whether the member can post messages in the channel. */
        canPostMessages?: boolean;
        /** Whether the member can delete messages. */
        canDeleteMessages?: boolean;
        /** Whether the member can promote other members. */
        canPromoteMembers?: boolean;
        /** Whether the member can restrict members. */
        canRestrictMembers?: boolean;
        /** Whether the member can manage video chats. */
        canManageVideoChats?: boolean;
        /** Whether the member can manage forum topics. */
        canManageTopics?: boolean;
      };
    };
    /** Return the number of members in a chat. */
    "telegram.get_chat_members_count": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
      };
      output: {
        /** The number of members currently in the chat. */
        memberCount: number;
      };
    };
    /** Validate the bot token and return the bot profile from Telegram Bot API. */
    "telegram.get_me": {
      input: Record<string, never>;
      output: {
        /** The unique identifier of the user or bot. */
        id: number;
        /** Whether this account is a bot. */
        isBot: boolean;
        /** The first name of the user or bot. */
        firstName: string;
        /** The username of the user or bot. */
        username?: string;
        /** The IETF language tag of the user. */
        languageCode?: string;
        /** Whether the bot can be invited to groups. */
        canJoinGroups?: boolean;
        /** Whether privacy mode is disabled for the bot. */
        canReadAllGroupMessages?: boolean;
        /** Whether the bot supports inline queries. */
        supportsInlineQueries?: boolean;
        /** Whether the bot can be connected to a Telegram Business account. */
        canConnectToBusiness?: boolean;
        /** Whether the bot has a main Web App configured. */
        hasMainWebApp?: boolean;
      };
    };
    /** Poll pending updates for the bot. Use this only when webhook delivery is disabled or for debugging. */
    "telegram.get_updates": {
      input: {
        /** The update ID offset to start polling from. */
        offset?: number;
        /**
         * The maximum number of updates to return.
         * @minimum 1
         * @maximum 100
         */
        limit?: number;
        /**
         * The long-polling timeout in seconds.
         * @minimum 0
         * @maximum 50
         */
        timeout?: number;
        /** The update types to receive. */
        allowedUpdates?: Array<string>;
      };
      output: {
        /** The updates returned by Telegram. */
        updates: Array<{
          /** The unique identifier of the update. */
          updateId: number;
          /** The new incoming message, when present. */
          message?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** The chat the message belongs to. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The sender of the message. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The chat on behalf of which the message was sent. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The UTF-8 text of the message, for text messages. */
            text?: string;
            /** The caption for media messages. */
            caption?: string;
            /** The available sizes for an attached photo. */
            photo?: Array<{
              /** The file identifier used to download or reuse the photo. */
              fileId: string;
              /** The stable unique identifier of the photo. */
              fileUniqueId: string;
              /** The photo width in pixels. */
              width: number;
              /** The photo height in pixels. */
              height: number;
              /** The photo file size in bytes. */
              fileSize?: number;
            }>;
            /** The attached document, when present. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original filename of the document. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document size in bytes. */
              fileSize?: number;
            };
            /** The attached location, when present. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty for the location, in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction in which the user is moving, in degrees. */
              heading?: number;
              /** The distance in meters for proximity alerts. */
              proximityAlertRadius?: number;
            };
            /** The attached poll, when present. */
            poll?: {
              /** The unique identifier of the poll. */
              id: string;
              /** The poll question text. */
              question: string;
              /** The options available in the poll. */
              options: Array<{
                /** The text of the poll option. */
                text: string;
                /** The number of votes received by this option. */
                voterCount: number;
              }>;
              /** The total number of users that voted. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The type of the poll. */
              type: "regular" | "quiz";
              /** Whether multiple answers are allowed. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The amount of time in seconds the poll stays open. */
              openPeriod?: number;
              /** The explanation text shown for quiz polls. */
              explanation?: string;
              /** The index of the correct option for quiz polls. */
              correctOptionId?: number;
            };
            /** The message entities parsed from the text. */
            entities?: Array<Record<string, unknown>>;
            /** The message entities parsed from the caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** The original sender of a forwarded message. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The original chat of a forwarded message sent on behalf of a chat. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The original message ID inside the source channel. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
          };
          /** The edited version of a message, when present. */
          editedMessage?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** The chat the message belongs to. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The sender of the message. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The chat on behalf of which the message was sent. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The UTF-8 text of the message, for text messages. */
            text?: string;
            /** The caption for media messages. */
            caption?: string;
            /** The available sizes for an attached photo. */
            photo?: Array<{
              /** The file identifier used to download or reuse the photo. */
              fileId: string;
              /** The stable unique identifier of the photo. */
              fileUniqueId: string;
              /** The photo width in pixels. */
              width: number;
              /** The photo height in pixels. */
              height: number;
              /** The photo file size in bytes. */
              fileSize?: number;
            }>;
            /** The attached document, when present. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original filename of the document. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document size in bytes. */
              fileSize?: number;
            };
            /** The attached location, when present. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty for the location, in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction in which the user is moving, in degrees. */
              heading?: number;
              /** The distance in meters for proximity alerts. */
              proximityAlertRadius?: number;
            };
            /** The attached poll, when present. */
            poll?: {
              /** The unique identifier of the poll. */
              id: string;
              /** The poll question text. */
              question: string;
              /** The options available in the poll. */
              options: Array<{
                /** The text of the poll option. */
                text: string;
                /** The number of votes received by this option. */
                voterCount: number;
              }>;
              /** The total number of users that voted. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The type of the poll. */
              type: "regular" | "quiz";
              /** Whether multiple answers are allowed. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The amount of time in seconds the poll stays open. */
              openPeriod?: number;
              /** The explanation text shown for quiz polls. */
              explanation?: string;
              /** The index of the correct option for quiz polls. */
              correctOptionId?: number;
            };
            /** The message entities parsed from the text. */
            entities?: Array<Record<string, unknown>>;
            /** The message entities parsed from the caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** The original sender of a forwarded message. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The original chat of a forwarded message sent on behalf of a chat. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The original message ID inside the source channel. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
          };
          /** The new incoming channel post, when present. */
          channelPost?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** The chat the message belongs to. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The sender of the message. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The chat on behalf of which the message was sent. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The UTF-8 text of the message, for text messages. */
            text?: string;
            /** The caption for media messages. */
            caption?: string;
            /** The available sizes for an attached photo. */
            photo?: Array<{
              /** The file identifier used to download or reuse the photo. */
              fileId: string;
              /** The stable unique identifier of the photo. */
              fileUniqueId: string;
              /** The photo width in pixels. */
              width: number;
              /** The photo height in pixels. */
              height: number;
              /** The photo file size in bytes. */
              fileSize?: number;
            }>;
            /** The attached document, when present. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original filename of the document. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document size in bytes. */
              fileSize?: number;
            };
            /** The attached location, when present. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty for the location, in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction in which the user is moving, in degrees. */
              heading?: number;
              /** The distance in meters for proximity alerts. */
              proximityAlertRadius?: number;
            };
            /** The attached poll, when present. */
            poll?: {
              /** The unique identifier of the poll. */
              id: string;
              /** The poll question text. */
              question: string;
              /** The options available in the poll. */
              options: Array<{
                /** The text of the poll option. */
                text: string;
                /** The number of votes received by this option. */
                voterCount: number;
              }>;
              /** The total number of users that voted. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The type of the poll. */
              type: "regular" | "quiz";
              /** Whether multiple answers are allowed. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The amount of time in seconds the poll stays open. */
              openPeriod?: number;
              /** The explanation text shown for quiz polls. */
              explanation?: string;
              /** The index of the correct option for quiz polls. */
              correctOptionId?: number;
            };
            /** The message entities parsed from the text. */
            entities?: Array<Record<string, unknown>>;
            /** The message entities parsed from the caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** The original sender of a forwarded message. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The original chat of a forwarded message sent on behalf of a chat. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The original message ID inside the source channel. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
          };
          /** The edited version of a channel post, when present. */
          editedChannelPost?: {
            /** The unique message identifier inside the chat. */
            messageId: number;
            /** The Unix timestamp when the message was sent. */
            date: number;
            /** The chat the message belongs to. */
            chat: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The sender of the message. */
            from?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The chat on behalf of which the message was sent. */
            senderChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The UTF-8 text of the message, for text messages. */
            text?: string;
            /** The caption for media messages. */
            caption?: string;
            /** The available sizes for an attached photo. */
            photo?: Array<{
              /** The file identifier used to download or reuse the photo. */
              fileId: string;
              /** The stable unique identifier of the photo. */
              fileUniqueId: string;
              /** The photo width in pixels. */
              width: number;
              /** The photo height in pixels. */
              height: number;
              /** The photo file size in bytes. */
              fileSize?: number;
            }>;
            /** The attached document, when present. */
            document?: {
              /** The file identifier used to download or reuse the document. */
              fileId: string;
              /** The stable unique identifier of the document. */
              fileUniqueId: string;
              /** The original filename of the document. */
              fileName?: string;
              /** The MIME type of the document. */
              mimeType?: string;
              /** The document size in bytes. */
              fileSize?: number;
            };
            /** The attached location, when present. */
            location?: {
              /** The latitude of the location. */
              latitude: number;
              /** The longitude of the location. */
              longitude: number;
              /** The radius of uncertainty for the location, in meters. */
              horizontalAccuracy?: number;
              /** The live location update period in seconds. */
              livePeriod?: number;
              /** The direction in which the user is moving, in degrees. */
              heading?: number;
              /** The distance in meters for proximity alerts. */
              proximityAlertRadius?: number;
            };
            /** The attached poll, when present. */
            poll?: {
              /** The unique identifier of the poll. */
              id: string;
              /** The poll question text. */
              question: string;
              /** The options available in the poll. */
              options: Array<{
                /** The text of the poll option. */
                text: string;
                /** The number of votes received by this option. */
                voterCount: number;
              }>;
              /** The total number of users that voted. */
              totalVoterCount: number;
              /** Whether the poll is closed. */
              isClosed: boolean;
              /** Whether the poll is anonymous. */
              isAnonymous: boolean;
              /** The type of the poll. */
              type: "regular" | "quiz";
              /** Whether multiple answers are allowed. */
              allowsMultipleAnswers: boolean;
              /** The Unix timestamp when the poll closes. */
              closeDate?: number;
              /** The amount of time in seconds the poll stays open. */
              openPeriod?: number;
              /** The explanation text shown for quiz polls. */
              explanation?: string;
              /** The index of the correct option for quiz polls. */
              correctOptionId?: number;
            };
            /** The message entities parsed from the text. */
            entities?: Array<Record<string, unknown>>;
            /** The message entities parsed from the caption. */
            captionEntities?: Array<Record<string, unknown>>;
            /** The Unix timestamp of the original forwarded message. */
            forwardDate?: number;
            /** The original sender of a forwarded message. */
            forwardFrom?: {
              /** The unique identifier of the user or bot. */
              id: number;
              /** Whether this account is a bot. */
              isBot: boolean;
              /** The first name of the user or bot. */
              firstName: string;
              /** The username of the user or bot. */
              username?: string;
              /** The IETF language tag of the user. */
              languageCode?: string;
              /** Whether the bot can be invited to groups. */
              canJoinGroups?: boolean;
              /** Whether privacy mode is disabled for the bot. */
              canReadAllGroupMessages?: boolean;
              /** Whether the bot supports inline queries. */
              supportsInlineQueries?: boolean;
              /** Whether the bot can be connected to a Telegram Business account. */
              canConnectToBusiness?: boolean;
              /** Whether the bot has a main Web App configured. */
              hasMainWebApp?: boolean;
            };
            /** The original chat of a forwarded message sent on behalf of a chat. */
            forwardFromChat?: {
              /** The unique identifier of the chat. */
              id: number;
              /** The chat type, such as private, group, supergroup, or channel. */
              type: string;
              /** The chat title for groups, supergroups, and channels. */
              title?: string;
              /** The public username of the chat, when available. */
              username?: string;
              /** The first name for a private chat counterpart. */
              firstName?: string;
              /** The last name for a private chat counterpart. */
              lastName?: string;
              /** Whether the supergroup chat is a forum. */
              isForum?: boolean;
            };
            /** The original message ID inside the source channel. */
            forwardFromMessageId?: number;
            /** The original author signature for a forwarded post. */
            forwardSignature?: string;
            /** The display name of a forwarded sender who disallows linking. */
            forwardSenderName?: string;
            /** The link preview options attached to the message. */
            linkPreviewOptions?: Record<string, unknown>;
          };
          /** The callback query payload, when present. */
          callbackQuery?: Record<string, unknown>;
        }>;
      };
    };
    /** Return the webhook status configured for the bot. */
    "telegram.get_webhook_info": {
      input: Record<string, never>;
      output: {
        /** The webhook URL currently configured for the bot. */
        url: string;
        /** Whether a custom certificate is in use. */
        hasCustomCertificate: boolean;
        /** The number of updates awaiting delivery. */
        pendingUpdateCount: number;
        /** The current outgoing webhook IP address. */
        ipAddress?: string;
        /** The Unix timestamp of the last delivery error. */
        lastErrorDate?: number;
        /** The last webhook delivery error message. */
        lastErrorMessage?: string;
        /** The Unix timestamp of the last synchronization error. */
        lastSynchronizationErrorDate?: number;
        /** The maximum concurrent webhook connections. */
        maxConnections?: number;
        /** The update types accepted by the webhook. */
        allowedUpdates?: Array<string>;
      };
    };
    /** Send a document by URL or existing Telegram file_id. Multipart uploads are intentionally out of scope for this provider pass. */
    "telegram.send_document": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The document URL or existing Telegram file_id to send.
         * @minLength 1
         */
        document: string;
        /**
         * The caption for the document.
         * @maxLength 1024
         */
        caption?: string;
        /** The parse mode used for message entities. */
        parseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /**
         * An optional thumbnail URL or file identifier.
         * @minLength 1
         */
        thumbnail?: string;
        /** The reply markup payload for the sent document. */
        replyMarkup?: string | Record<string, unknown>;
        /**
         * The message ID to reply to.
         * @exclusiveMinimum 0
         */
        replyToMessageId?: number;
        /** Whether to send the document silently. */
        disableNotification?: boolean;
        /** Whether to disable server-side content type detection. */
        disableContentTypeDetection?: boolean;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** The chat the message belongs to. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The sender of the message. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The chat on behalf of which the message was sent. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The UTF-8 text of the message, for text messages. */
        text?: string;
        /** The caption for media messages. */
        caption?: string;
        /** The available sizes for an attached photo. */
        photo?: Array<{
          /** The file identifier used to download or reuse the photo. */
          fileId: string;
          /** The stable unique identifier of the photo. */
          fileUniqueId: string;
          /** The photo width in pixels. */
          width: number;
          /** The photo height in pixels. */
          height: number;
          /** The photo file size in bytes. */
          fileSize?: number;
        }>;
        /** The attached document, when present. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original filename of the document. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document size in bytes. */
          fileSize?: number;
        };
        /** The attached location, when present. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty for the location, in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction in which the user is moving, in degrees. */
          heading?: number;
          /** The distance in meters for proximity alerts. */
          proximityAlertRadius?: number;
        };
        /** The attached poll, when present. */
        poll?: {
          /** The unique identifier of the poll. */
          id: string;
          /** The poll question text. */
          question: string;
          /** The options available in the poll. */
          options: Array<{
            /** The text of the poll option. */
            text: string;
            /** The number of votes received by this option. */
            voterCount: number;
          }>;
          /** The total number of users that voted. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The type of the poll. */
          type: "regular" | "quiz";
          /** Whether multiple answers are allowed. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The amount of time in seconds the poll stays open. */
          openPeriod?: number;
          /** The explanation text shown for quiz polls. */
          explanation?: string;
          /** The index of the correct option for quiz polls. */
          correctOptionId?: number;
        };
        /** The message entities parsed from the text. */
        entities?: Array<Record<string, unknown>>;
        /** The message entities parsed from the caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** The original sender of a forwarded message. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The original chat of a forwarded message sent on behalf of a chat. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The original message ID inside the source channel. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
      };
    };
    /** Send a map location to a chat. */
    "telegram.send_location": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The latitude of the location.
         * @minimum -90
         * @maximum 90
         */
        latitude: number;
        /**
         * The longitude of the location.
         * @minimum -180
         * @maximum 180
         */
        longitude: number;
        /**
         * The radius of uncertainty for the location, in meters.
         * @minimum 0
         * @maximum 1500
         */
        horizontalAccuracy?: number;
        /**
         * The live location update period in seconds.
         * @minimum 60
         * @maximum 86400
         */
        livePeriod?: number;
        /**
         * The direction in which the user is moving, in degrees.
         * @minimum 1
         * @maximum 360
         */
        heading?: number;
        /**
         * The distance in meters for proximity alerts.
         * @minimum 1
         * @maximum 100000
         */
        proximityAlertRadius?: number;
        /** Whether to send the location silently. */
        disableNotification?: boolean;
        /**
         * The message ID to reply to.
         * @exclusiveMinimum 0
         */
        replyToMessageId?: number;
        /** The reply markup payload for the sent location. */
        replyMarkup?: string | Record<string, unknown>;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** The chat the message belongs to. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The sender of the message. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The chat on behalf of which the message was sent. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The UTF-8 text of the message, for text messages. */
        text?: string;
        /** The caption for media messages. */
        caption?: string;
        /** The available sizes for an attached photo. */
        photo?: Array<{
          /** The file identifier used to download or reuse the photo. */
          fileId: string;
          /** The stable unique identifier of the photo. */
          fileUniqueId: string;
          /** The photo width in pixels. */
          width: number;
          /** The photo height in pixels. */
          height: number;
          /** The photo file size in bytes. */
          fileSize?: number;
        }>;
        /** The attached document, when present. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original filename of the document. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document size in bytes. */
          fileSize?: number;
        };
        /** The attached location, when present. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty for the location, in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction in which the user is moving, in degrees. */
          heading?: number;
          /** The distance in meters for proximity alerts. */
          proximityAlertRadius?: number;
        };
        /** The attached poll, when present. */
        poll?: {
          /** The unique identifier of the poll. */
          id: string;
          /** The poll question text. */
          question: string;
          /** The options available in the poll. */
          options: Array<{
            /** The text of the poll option. */
            text: string;
            /** The number of votes received by this option. */
            voterCount: number;
          }>;
          /** The total number of users that voted. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The type of the poll. */
          type: "regular" | "quiz";
          /** Whether multiple answers are allowed. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The amount of time in seconds the poll stays open. */
          openPeriod?: number;
          /** The explanation text shown for quiz polls. */
          explanation?: string;
          /** The index of the correct option for quiz polls. */
          correctOptionId?: number;
        };
        /** The message entities parsed from the text. */
        entities?: Array<Record<string, unknown>>;
        /** The message entities parsed from the caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** The original sender of a forwarded message. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The original chat of a forwarded message sent on behalf of a chat. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The original message ID inside the source channel. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
      };
    };
    /** Send a text message to a chat, group, supergroup, channel, or forum topic. */
    "telegram.send_message": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The text of the message to send.
         * @minLength 1
         * @maxLength 4096
         */
        text: string;
        /** The parse mode used for message entities. */
        parseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /** Whether to send the message silently. */
        disableNotification?: boolean;
        /** Whether to protect the sent message from forwarding and saving. */
        protectContent?: boolean;
        /** Whether to disable link previews in the message. */
        disableWebPagePreview?: boolean;
        /**
         * The forum topic ID for the target message thread.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /**
         * The message ID to reply to.
         * @exclusiveMinimum 0
         */
        replyToMessageId?: number;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** The chat the message belongs to. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The sender of the message. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The chat on behalf of which the message was sent. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The UTF-8 text of the message, for text messages. */
        text?: string;
        /** The caption for media messages. */
        caption?: string;
        /** The available sizes for an attached photo. */
        photo?: Array<{
          /** The file identifier used to download or reuse the photo. */
          fileId: string;
          /** The stable unique identifier of the photo. */
          fileUniqueId: string;
          /** The photo width in pixels. */
          width: number;
          /** The photo height in pixels. */
          height: number;
          /** The photo file size in bytes. */
          fileSize?: number;
        }>;
        /** The attached document, when present. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original filename of the document. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document size in bytes. */
          fileSize?: number;
        };
        /** The attached location, when present. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty for the location, in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction in which the user is moving, in degrees. */
          heading?: number;
          /** The distance in meters for proximity alerts. */
          proximityAlertRadius?: number;
        };
        /** The attached poll, when present. */
        poll?: {
          /** The unique identifier of the poll. */
          id: string;
          /** The poll question text. */
          question: string;
          /** The options available in the poll. */
          options: Array<{
            /** The text of the poll option. */
            text: string;
            /** The number of votes received by this option. */
            voterCount: number;
          }>;
          /** The total number of users that voted. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The type of the poll. */
          type: "regular" | "quiz";
          /** Whether multiple answers are allowed. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The amount of time in seconds the poll stays open. */
          openPeriod?: number;
          /** The explanation text shown for quiz polls. */
          explanation?: string;
          /** The index of the correct option for quiz polls. */
          correctOptionId?: number;
        };
        /** The message entities parsed from the text. */
        entities?: Array<Record<string, unknown>>;
        /** The message entities parsed from the caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** The original sender of a forwarded message. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The original chat of a forwarded message sent on behalf of a chat. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The original message ID inside the source channel. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
      };
    };
    /** Send a photo by URL or existing Telegram file_id. Multipart uploads are intentionally out of scope for this first pass. */
    "telegram.send_photo": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The photo URL or existing Telegram file_id to send.
         * @minLength 1
         */
        photo: string;
        /**
         * The caption for the photo.
         * @maxLength 1024
         */
        caption?: string;
        /** The parse mode used for message entities. */
        parseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /** Whether to send the photo silently. */
        disableNotification?: boolean;
        /** Whether to protect the photo from forwarding and saving. */
        protectContent?: boolean;
        /**
         * The forum topic ID for the target message thread.
         * @exclusiveMinimum 0
         */
        messageThreadId?: number;
        /**
         * The message ID to reply to.
         * @exclusiveMinimum 0
         */
        replyToMessageId?: number;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** The chat the message belongs to. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The sender of the message. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The chat on behalf of which the message was sent. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The UTF-8 text of the message, for text messages. */
        text?: string;
        /** The caption for media messages. */
        caption?: string;
        /** The available sizes for an attached photo. */
        photo?: Array<{
          /** The file identifier used to download or reuse the photo. */
          fileId: string;
          /** The stable unique identifier of the photo. */
          fileUniqueId: string;
          /** The photo width in pixels. */
          width: number;
          /** The photo height in pixels. */
          height: number;
          /** The photo file size in bytes. */
          fileSize?: number;
        }>;
        /** The attached document, when present. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original filename of the document. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document size in bytes. */
          fileSize?: number;
        };
        /** The attached location, when present. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty for the location, in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction in which the user is moving, in degrees. */
          heading?: number;
          /** The distance in meters for proximity alerts. */
          proximityAlertRadius?: number;
        };
        /** The attached poll, when present. */
        poll?: {
          /** The unique identifier of the poll. */
          id: string;
          /** The poll question text. */
          question: string;
          /** The options available in the poll. */
          options: Array<{
            /** The text of the poll option. */
            text: string;
            /** The number of votes received by this option. */
            voterCount: number;
          }>;
          /** The total number of users that voted. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The type of the poll. */
          type: "regular" | "quiz";
          /** Whether multiple answers are allowed. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The amount of time in seconds the poll stays open. */
          openPeriod?: number;
          /** The explanation text shown for quiz polls. */
          explanation?: string;
          /** The index of the correct option for quiz polls. */
          correctOptionId?: number;
        };
        /** The message entities parsed from the text. */
        entities?: Array<Record<string, unknown>>;
        /** The message entities parsed from the caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** The original sender of a forwarded message. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The original chat of a forwarded message sent on behalf of a chat. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The original message ID inside the source channel. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
      };
    };
    /** Send a native Telegram poll to a chat. */
    "telegram.send_poll": {
      input: {
        /** The target Telegram chat ID or channel username. */
        chatId: number | string;
        /**
         * The question shown at the top of the poll.
         * @minLength 1
         * @maxLength 300
         */
        question: string;
        /**
         * The answer options available in the poll.
         * @minItems 2
         * @maxItems 10
         */
        options: Array<string>;
        /** The type of poll to send. */
        type?: "regular" | "quiz";
        /** Whether the poll should be anonymous. */
        isAnonymous?: boolean;
        /** Whether users can choose multiple answers. */
        allowsMultipleAnswers?: boolean;
        /**
         * The zero-based index of the correct option for quiz polls.
         * @minimum 0
         */
        correctOptionId?: number;
        /**
         * The explanation shown for quiz polls.
         * @maxLength 200
         */
        explanation?: string;
        /** The parse mode used for message entities. */
        explanationParseMode?: "Markdown" | "MarkdownV2" | "HTML";
        /**
         * The number of seconds the poll should stay open.
         * @minimum 5
         * @maximum 600
         */
        openPeriod?: number;
        /** The Unix timestamp when the poll should close. */
        closeDate?: number;
        /** Whether the poll should be sent already closed. */
        isClosed?: boolean;
        /** Whether to send the poll silently. */
        disableNotification?: boolean;
        /**
         * The message ID to reply to.
         * @exclusiveMinimum 0
         */
        replyToMessageId?: number;
        /** The reply markup payload for the poll. */
        replyMarkup?: string | Record<string, unknown>;
      };
      output: {
        /** The unique message identifier inside the chat. */
        messageId: number;
        /** The Unix timestamp when the message was sent. */
        date: number;
        /** The chat the message belongs to. */
        chat: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The sender of the message. */
        from?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The chat on behalf of which the message was sent. */
        senderChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The UTF-8 text of the message, for text messages. */
        text?: string;
        /** The caption for media messages. */
        caption?: string;
        /** The available sizes for an attached photo. */
        photo?: Array<{
          /** The file identifier used to download or reuse the photo. */
          fileId: string;
          /** The stable unique identifier of the photo. */
          fileUniqueId: string;
          /** The photo width in pixels. */
          width: number;
          /** The photo height in pixels. */
          height: number;
          /** The photo file size in bytes. */
          fileSize?: number;
        }>;
        /** The attached document, when present. */
        document?: {
          /** The file identifier used to download or reuse the document. */
          fileId: string;
          /** The stable unique identifier of the document. */
          fileUniqueId: string;
          /** The original filename of the document. */
          fileName?: string;
          /** The MIME type of the document. */
          mimeType?: string;
          /** The document size in bytes. */
          fileSize?: number;
        };
        /** The attached location, when present. */
        location?: {
          /** The latitude of the location. */
          latitude: number;
          /** The longitude of the location. */
          longitude: number;
          /** The radius of uncertainty for the location, in meters. */
          horizontalAccuracy?: number;
          /** The live location update period in seconds. */
          livePeriod?: number;
          /** The direction in which the user is moving, in degrees. */
          heading?: number;
          /** The distance in meters for proximity alerts. */
          proximityAlertRadius?: number;
        };
        /** The attached poll, when present. */
        poll?: {
          /** The unique identifier of the poll. */
          id: string;
          /** The poll question text. */
          question: string;
          /** The options available in the poll. */
          options: Array<{
            /** The text of the poll option. */
            text: string;
            /** The number of votes received by this option. */
            voterCount: number;
          }>;
          /** The total number of users that voted. */
          totalVoterCount: number;
          /** Whether the poll is closed. */
          isClosed: boolean;
          /** Whether the poll is anonymous. */
          isAnonymous: boolean;
          /** The type of the poll. */
          type: "regular" | "quiz";
          /** Whether multiple answers are allowed. */
          allowsMultipleAnswers: boolean;
          /** The Unix timestamp when the poll closes. */
          closeDate?: number;
          /** The amount of time in seconds the poll stays open. */
          openPeriod?: number;
          /** The explanation text shown for quiz polls. */
          explanation?: string;
          /** The index of the correct option for quiz polls. */
          correctOptionId?: number;
        };
        /** The message entities parsed from the text. */
        entities?: Array<Record<string, unknown>>;
        /** The message entities parsed from the caption. */
        captionEntities?: Array<Record<string, unknown>>;
        /** The Unix timestamp of the original forwarded message. */
        forwardDate?: number;
        /** The original sender of a forwarded message. */
        forwardFrom?: {
          /** The unique identifier of the user or bot. */
          id: number;
          /** Whether this account is a bot. */
          isBot: boolean;
          /** The first name of the user or bot. */
          firstName: string;
          /** The username of the user or bot. */
          username?: string;
          /** The IETF language tag of the user. */
          languageCode?: string;
          /** Whether the bot can be invited to groups. */
          canJoinGroups?: boolean;
          /** Whether privacy mode is disabled for the bot. */
          canReadAllGroupMessages?: boolean;
          /** Whether the bot supports inline queries. */
          supportsInlineQueries?: boolean;
          /** Whether the bot can be connected to a Telegram Business account. */
          canConnectToBusiness?: boolean;
          /** Whether the bot has a main Web App configured. */
          hasMainWebApp?: boolean;
        };
        /** The original chat of a forwarded message sent on behalf of a chat. */
        forwardFromChat?: {
          /** The unique identifier of the chat. */
          id: number;
          /** The chat type, such as private, group, supergroup, or channel. */
          type: string;
          /** The chat title for groups, supergroups, and channels. */
          title?: string;
          /** The public username of the chat, when available. */
          username?: string;
          /** The first name for a private chat counterpart. */
          firstName?: string;
          /** The last name for a private chat counterpart. */
          lastName?: string;
          /** Whether the supergroup chat is a forum. */
          isForum?: boolean;
        };
        /** The original message ID inside the source channel. */
        forwardFromMessageId?: number;
        /** The original author signature for a forwarded post. */
        forwardSignature?: string;
        /** The display name of a forwarded sender who disallows linking. */
        forwardSenderName?: string;
        /** The link preview options attached to the message. */
        linkPreviewOptions?: Record<string, unknown>;
      };
    };
    /** Set the bot command list exposed in Telegram clients. */
    "telegram.set_my_commands": {
      input: {
        /**
         * The bot commands to register.
         * @minItems 1
         * @maxItems 100
         */
        commands: Array<{
          /**
           * The command text without the leading slash.
           * @minLength 1
           * @maxLength 32
           * @pattern ^[a-z0-9_]+$
           */
          command: string;
          /**
           * The description shown for the bot command.
           * @minLength 1
           * @maxLength 256
           */
          description: string;
        }>;
        /** The BotCommandScope payload that limits where the commands apply. */
        scope?: string | Record<string, unknown>;
        /**
         * The language code for localized commands.
         * @minLength 2
         * @maxLength 35
         */
        languageCode?: string;
      };
      output: {
        /** Whether the Telegram Bot API request succeeded. */
        success: true;
      };
    };
    /** Configure a webhook endpoint for update delivery. */
    "telegram.set_webhook": {
      input: {
        /**
         * The HTTPS webhook URL that Telegram should deliver updates to.
         * @format uri
         */
        url: string;
        /**
         * The secret token Telegram should include in webhook requests.
         * @minLength 1
         * @maxLength 256
         */
        secretToken?: string;
        /**
         * The maximum number of concurrent webhook connections.
         * @minimum 1
         * @maximum 100
         */
        maxConnections?: number;
        /** The update types that should be delivered to the webhook. */
        allowedUpdates?: Array<string>;
        /** Whether to drop all pending updates before setting the webhook. */
        dropPendingUpdates?: boolean;
      };
      output: {
        /** Whether the Telegram Bot API request succeeded. */
        success: true;
      };
    };
  }
}
